import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { Client, ApiError, ApiResponse } from '../dist/index.js';

const contract = JSON.parse(await readFile(new URL('./contract.json', import.meta.url)));
const token = 'rsk_test_secret';

test('every registered endpoint has a concrete method with correct verb, path and authentication', async () => {
  let current;
  const client = new Client({token, fetch: async (url, init) => {
    assert.equal(init.method, current.method);
    const expected = current.path.replace(/\{[^}]+\}/g, 'id%20with%20space');
    assert.equal(new URL(url).pathname, '/api/v1' + expected);
    assert.equal(init.headers.Authorization, current.authenticated ? 'Bearer ' + token : undefined);
    assert.equal(init.redirect, 'manual');
    return new Response('{"success":true,"data":[],"meta":{"page":2}}');
  }});
  for (const operation of contract.operations) {
    current = operation;
    const input = Object.fromEntries(operation.pathParameters.map(p => [p.name, 'id with space']));
    const response = await client[operation.group][operation.name](input);
    assert.equal((await response.json()).meta.page, 2);
  }
});

test('nested query serialization preserves zero, false and Laravel array syntax', async () => {
  const client = new Client({token, fetch: async url => {
    const query = new URL(url).searchParams;
    assert.equal(query.get('page'), '0');
    assert.equal(query.get('active'), '0');
    assert.equal(query.get('filters[status][0]'), 'running');
    assert.equal(query.has('empty'), false);
    return new Response(null, {status:204});
  }});
  assert.equal(await (await client.send('GET', '/account', {}, {page:0, active:false, filters:{status:['running']}, empty:null})).json(), null);
});

test('multipart uses Blob and lets fetch generate the boundary', async () => {
  const client = new Client({token, fetch: async (_url, init) => {
    assert.equal(init.headers['Content-Type'], undefined);
    assert.ok(init.body instanceof FormData);
    assert.equal(await init.body.get('file').text(), 'sound');
    assert.equal(init.body.get('model'), 'example-model');
    return new Response('plain transcription');
  }});
  const response = await client.send('POST', '/products/inference/audio/transcriptions', {}, {}, {file:new Blob(['sound']), model:'example-model'}, true);
  assert.equal(await response.text(), 'plain transcription');
});

test('validation and rate-limit failures remain structured and never retry orders', async () => {
  let calls = 0;
  const client = new Client({token, fetch: async () => {
    calls++;
    return new Response(JSON.stringify({error:{code:'validation_error',message:'invalid ' + token,errors:{cores:['min 1']}}}), {status:422, headers:{'X-Request-ID':'request-1','Retry-After':'60'}});
  }});
  await assert.rejects(() => client.rootserver.create({cluster:'cluster',body:{}}), error => {
    assert.ok(error instanceof ApiError); assert.equal(error.status,422); assert.equal(error.requestId,'request-1');
    assert.equal(error.retryAfter,'60'); assert.equal(error.message,'invalid [redacted]'); assert.deepEqual(error.validationErrors,{cores:['min 1']}); return true;
  });
  assert.equal(calls,1);
});

test('redirects and non-JSON gateway errors are rejected without exposing the body', async () => {
  const client = new Client({token, fetch: async () => new Response('<html>private gateway payload</html>', {status:302,headers:{Location:'https://elsewhere.example'}})});
  await assert.rejects(() => client.account.get(), error => error.status === 302 && !error.message.includes('private'));
});

test('SSE handles split UTF8, comments, multiline data, Anthropic event names and DONE', async () => {
  const text = ': ping\r\nevent: content_block_delta\r\ndata: grüß\r\ndata: two\r\n\r\ndata: [DONE]\n\n';
  const bytes = new TextEncoder().encode(text);
  const response = new ApiResponse(new Response(new ReadableStream({start(controller) { for (const byte of bytes) controller.enqueue(Uint8Array.of(byte)); controller.close(); }})));
  const events = [];
  for await (const event of response.events()) events.push(event);
  assert.deepEqual(events,[{event:'content_block_delta',data:'grüß\ntwo'}]);
});

test('cancellation and unsafe URLs cannot leak credentials', async () => {
  assert.throws(() => new Client({token,baseUrl:'http://example.com/api/v1'}));
  assert.throws(() => new Client({token,baseUrl:'https://user@example.com/api/v1'}));
  const abort = new AbortController(); abort.abort(new Error('cancelled'));
  const client = new Client({token,fetch:async (_url,init) => {init.signal.throwIfAborted(); throw new Error('unreachable');}});
  await assert.rejects(() => client.account.get({}, {signal:abort.signal}), /cancelled/);
  await assert.rejects(() => client.send('GET','../account'), /Invalid API path/);
  await assert.rejects(() => client.rootserver.get({rootserver:'..'}), /identifiers/);
});

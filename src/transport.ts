/** JSON values accepted by the API. Preserve decimal prices as strings when returned by the server. */
export type JsonValue = null | boolean | number | string | JsonValue[] | { [key: string]: JsonValue };

export interface ClientOptions {
  /** A reseller API key. Keep it server-side; never ship this key in a public browser bundle. */
  token: string;
  /** Full v1 base URL, including /api/v1 or the API host's /v1. HTTPS is required. */
  baseUrl?: string;
  /** Defaults to 120 seconds; also covers streaming reads. */
  timeoutMs?: number;
  /** Injectable fetch implementation for tests or application infrastructure. */
  fetch?: typeof fetch;
}

export interface RequestOptions {
  /** Cancels this request and its streaming response. */
  signal?: AbortSignal;
  timeoutMs?: number;
}

/** Structured errors preserve validation and rate limits without exposing raw gateway HTML or tokens. */
export class ApiError extends Error {
  constructor(
    message: string,
    public readonly status: number,
    public readonly code: string | undefined,
    public readonly validationErrors: Record<string, unknown>,
    public readonly requestId: string | undefined,
    public readonly retryAfter: string | undefined,
  ) { super(message); this.name = 'ApiError'; }
}

export interface ServerSentEvent { event: string; data: string; id?: string }

/** Complete response: json() retains top-level pagination and async task metadata. */
export class ApiResponse<T = JsonValue> {
  constructor(public readonly raw: Response) {}
  get status(): number { return this.raw.status; }
  get headers(): Headers { return this.raw.headers; }
  /** Body is consumed once, like a standard Fetch Response. Empty 204 responses decode as null. */
  async json(): Promise<T> {
    const text = await this.raw.text();
    if (text === '') return null as T;
    try { return JSON.parse(text) as T; }
    catch { throw new Error('Response is not JSON; use text(), bytes() or stream().'); }
  }
  text(): Promise<string> { return this.raw.text(); }
  bytes(): Promise<ArrayBuffer> { return this.raw.arrayBuffer(); }
  stream(): ReadableStream<Uint8Array> | null { return this.raw.body; }
  /** SSE supports OpenAI and Anthropic events, multiline data, comments and [DONE]. */
  async *events(): AsyncGenerator<ServerSentEvent> {
    if (!this.raw.body) return;
    const reader = this.raw.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '', event = 'message', id: string | undefined;
    let data: string[] = [];
    try {
      while (true) {
        const result = await reader.read();
        buffer += decoder.decode(result.value, { stream: !result.done });
        let newline: number;
        while ((newline = buffer.indexOf('\n')) !== -1) {
          const line = buffer.slice(0, newline).replace(/\r$/, '');
          buffer = buffer.slice(newline + 1);
          if (line === '') {
            if (data.length) {
              const payload = data.join('\n');
              if (payload === '[DONE]') return;
              yield { event, data: payload, ...(id === undefined ? {} : { id }) };
            }
            event = 'message'; data = [];
          } else if (!line.startsWith(':')) {
            const colon = line.indexOf(':');
            const key = colon < 0 ? line : line.slice(0, colon);
            const value = colon < 0 ? '' : line.slice(colon + 1).replace(/^ /, '');
            if (key === 'data') data.push(value);
            else if (key === 'event') event = value;
            else if (key === 'id' && !value.includes('\0')) id = value;
          }
        }
        if (result.done) break;
      }
    } finally { await reader.cancel(); reader.releaseLock(); }
  }
}

function record(value: unknown): Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value) ? value as Record<string, unknown> : {};
}

async function errorPayload(response: Response): Promise<Record<string, unknown>> {
  if (!response.body) return {};
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let length = 0, text = '';
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      length += value.byteLength;
      if (length > 65_536) return {};
      text += decoder.decode(value, { stream: true });
    }
    return record(JSON.parse(text + decoder.decode()));
  } catch { return {}; }
  finally { await reader.cancel(); reader.releaseLock(); }
}

function appendQuery(search: URLSearchParams, key: string, value: unknown): void {
  if (value === undefined || value === null) return;
  if (Array.isArray(value)) { value.forEach((item, index) => appendQuery(search, `${key}[${index}]`, item)); return; }
  if (typeof value === 'object') { Object.entries(value).forEach(([child, item]) => appendQuery(search, `${key}[${child}]`, item)); return; }
  search.append(key, typeof value === 'boolean' ? (value ? '1' : '0') : String(value));
}

function appendForm(form: FormData, key: string, value: unknown): void {
  if (value === undefined || value === null) return;
  if (value instanceof Blob) { form.append(key, value); return; }
  if (Array.isArray(value)) { value.forEach((item, index) => appendForm(form, `${key}[${index}]`, item)); return; }
  if (typeof value === 'object') { Object.entries(value).forEach(([child, item]) => appendForm(form, `${key}[${child}]`, item)); return; }
  form.append(key, typeof value === 'boolean' ? (value ? '1' : '0') : String(value));
}

/** HTTPS-only transport with no automatic retries: ordering twice can create two billable products. */
export class Transport {
  readonly #token: string;
  readonly #baseUrl: string;
  readonly #fetch: typeof fetch;
  readonly #timeoutMs: number;
  constructor(options: ClientOptions) {
    const url = new URL(options.baseUrl ?? 'https://resellingprovider.de/api/v1');
    if (url.protocol !== 'https:' || url.username || url.password || url.search || url.hash) throw new TypeError('API base URL must use HTTPS without credentials, query or fragment.');
    if (!options.token || /[\r\n]/.test(options.token)) throw new TypeError('A non-empty API token without newline characters is required.');
    this.#baseUrl = url.toString().replace(/\/$/, '');
    this.#token = options.token;
    this.#fetch = options.fetch ?? globalThis.fetch.bind(globalThis);
    this.#timeoutMs = options.timeoutMs ?? 120_000;
  }

  async send<T = JsonValue>(method: string, path: string, pathParameters: Record<string, string | number> = {}, query: object = {}, body?: object, multipart = false, authenticated = true, options: RequestOptions = {}): Promise<ApiResponse<T>> {
    for (const [key, value] of Object.entries(pathParameters)) {
      if (String(value) === '' || value === '.' || value === '..') throw new TypeError('Path parameters must be non-empty identifiers.');
      path = path.replaceAll(`{${key}}`, encodeURIComponent(String(value)));
    }
    path = path.replace(/^\/+/, '');
    if (!path || /[{}?#]|(^|\/)\.\.?(\/|$)|^[a-z]+:/i.test(path)) throw new TypeError('Invalid API path or missing route parameter.');
    const url = new URL(`${this.#baseUrl}/${path}`);
    Object.entries(query).forEach(([key, value]) => appendQuery(url.searchParams, key, value));
    const headers: Record<string, string> = { Accept: 'application/json' };
    if (authenticated) headers.Authorization = `Bearer ${this.#token}`;
    let encoded: string | FormData | undefined;
    if (body !== undefined) {
      if (multipart) { const form = new FormData(); Object.entries(body).forEach(([key, value]) => appendForm(form, key, value)); encoded = form; }
      else { headers['Content-Type'] = 'application/json'; encoded = JSON.stringify(body); }
    }
    const deadline = AbortSignal.timeout(options.timeoutMs ?? this.#timeoutMs);
    const signal = options.signal ? AbortSignal.any([options.signal, deadline]) : deadline;
    let response: Response;
    try { response = await this.#fetch(url, { method, headers, redirect: 'manual', signal, ...(encoded === undefined ? {} : { body: encoded }) }); }
    catch (error) {
      if (signal.aborted) throw signal.reason;
      throw new Error('API transport failed. Check connectivity and TLS; do not automatically retry orders.');
    }
    if (!response.ok) {
      const json = await errorPayload(response);
      const error = record(json.error);
      const message = typeof error.message === 'string' ? error.message : typeof json.message === 'string' ? json.message : 'API request failed';
      throw new ApiError(message.replaceAll(this.#token, '[redacted]'), response.status,
        typeof error.code === 'string' ? error.code : undefined, record(error.errors ?? json.errors),
        response.headers.get('X-Request-ID') ?? undefined, response.headers.get('Retry-After') ?? (error.retry_after === undefined ? undefined : String(error.retry_after)));
    }
    return new ApiResponse<T>(response);
  }
}

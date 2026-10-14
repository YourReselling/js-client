# Your-Reselling JavaScript / TypeScript SDK

Node.js **20.3+**, ESM, natives `fetch`, keine Laufzeitabhängigkeiten. 599 konkrete Methoden mit exportierten Anfrage-Typen und JSDoc. TypeScript und normales JavaScript verwenden dasselbe Paket. API-Keys ausschließlich serverseitig verwenden.

```sh
npm ci
npm run build
npm test
npm pack
```

Das fertige Paket aus dem GitHub-Release installieren:

```sh
npm install https://github.com/YourReselling/js-client/releases/download/v3.0.0/your-reselling-client-3.0.0.tgz
```

Das Paket ist über GitHub verfügbar; eine Veröffentlichung in der npm-Registry ist dafür nicht erforderlich. Der Paketname für Imports bleibt `@your-reselling/client`.

```ts
import { Client, ApiError } from '@your-reselling/client';

const client = new Client({ token: process.env.RESELLING_API_KEY! });
const response = await client.rootserver.list({ query: { page: 1, per_page: 25 } });
const payload = await response.json(); // Vollständiges Envelope, kein automatisches Unwrap
```

JavaScript: identischer Aufruf ohne TypeScript-`!`. `new Client({ token, baseUrl: 'https://api.example.com/v1', timeoutMs: 120000, fetch })` unterstützt eigene Basis-URL, Timeout und einen austauschbaren Transport. Die komplette v1-URL angeben. HTTPS ist Pflicht, Redirects und Retries sind deaktiviert.

```ts
const controller = new AbortController();
const response = await client.inference.completions({
  body: {
    model: modelId,
    messages: [{ role: 'user', content: 'Hallo' }],
    stream: true,
  },
}, { signal: controller.signal, timeoutMs: 300000 });

for await (const event of response.events()) {
  // event.event, event.data (JSON-Text), event.id
}

const transcription = await client.inference.create({
  body: { model: modelId, file: new File([audioBytes], 'audio.wav', { type: 'audio/wav' }) },
});
```

`ApiResponse` bietet `json()`, `text()`, `bytes()`, `stream()`, `events()`, `status`, `headers` und `raw`. Der Body kann wie bei Fetch nur einmal gelesen werden. SSE beendet bei `[DONE]` und gibt den Reader bei vorzeitigem Schleifenende frei. Der Timeout gilt auch während Streaming. Für große Uploads die Speichercharakteristik von `Blob`/`File` berücksichtigen; PHP und Go unterstützen direkt lesbare Upload-Streams.

`ApiError` enthält `status`, `code`, `validationErrors`, `requestId`, `retryAfter`. Eine 429 oder ein Netzfehler wird nicht automatisch wiederholt. Insbesondere Bestellungen können trotz fehlender Antwort schon angelegt sein.

Anfragetypen werden aus Route, Attributen und Validierung erzeugt. Für eigene bekannte Antwortschemas kann beispielsweise `client.rootserver.list<MyEnvelope>(...)` verwendet werden. Der generische Typ ist eine Annotation und keine Laufzeitvalidierung. Die API enthält heterogene Envelopes und offene Antwortschemas; Metadaten bleiben unverändert erhalten.

[Methodenverzeichnis](docs/api-methoden.md) · [OpenAPI](spec/openapi.json)

## Release-Paket bauen

Nach den lokalen Tests `python3 tools/package.py` ausführen. Das Skript verwendet nur dieses Repository und erzeugt das Paket sowie eine SHA-256-Prüfsumme unter `artifacts/`.

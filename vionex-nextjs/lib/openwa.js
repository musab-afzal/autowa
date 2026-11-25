/* Server-side client for the WhatsApp engine (the OpenWA backend).
   The API key stays on the server; the browser only ever talks to AutoWA's own
   /api routes, which check who is signed in first. */

const BASE = (process.env.OPENWA_URL || "http://localhost:8001").replace(/\/+$/, "");

export class OpenWAError extends Error {
  constructor(status, message, code) {
    super(message);
    this.status = status;
    this.code = code;
  }
}

export async function openwa(path, { method = "GET", body, timeoutMs = 60000 } = {}) {
  const key = process.env.OPENWA_API_KEY;
  if (!key) throw new OpenWAError(500, "OPENWA_API_KEY is not set in .env.local");

  let res;
  try {
    res = await fetch(`${BASE}/api${path}`, {
      method,
      headers: { "X-API-Key": key, ...(body ? { "Content-Type": "application/json" } : {}) },
      body: body ? JSON.stringify(body) : undefined,
      cache: "no-store",
      signal: AbortSignal.timeout(timeoutMs),
    });
  } catch (e) {
    if (e?.name === "TimeoutError") throw new OpenWAError(504, "The WhatsApp engine took too long to answer.");
    throw new OpenWAError(503, "The WhatsApp engine is not reachable. Make sure it is running.");
  }

  const text = await res.text();
  let data = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = { message: text };
  }
  if (!res.ok) {
    const msg = Array.isArray(data?.message) ? data.message.join(", ") : data?.message || res.statusText;
    throw new OpenWAError(res.status, msg, data?.code);
  }
  return data;
}

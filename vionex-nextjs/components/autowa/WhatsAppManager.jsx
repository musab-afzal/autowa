"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  CircleAlert,
  CircleCheckBig,
  Eye,
  KeyRound,
  Link2Off,
  MessageCircle,
  Play,
  Plus,
  QrCode,
  Smartphone,
  Trash2,
  X,
} from "lucide-react";

const LIST_POLL_MS = 5000;
const VIEW_POLL_MS = 3000;

export const BADGES = {
  ready: ["tint-success", "Connected"],
  qr_ready: ["tint-warning", "Waiting for scan"],
  authenticating: ["tint-info", "Linking…"],
  initializing: ["tint-info", "Starting…"],
  action_required: ["tint-warning", "Action required"],
  failed: ["tint-danger", "Failed"],
  disconnected: ["tint-danger", "Disconnected"],
  created: ["tint-danger", "Not started"],
  missing: ["tint-danger", "Needs restart"],
};
const RUNNING = new Set(["initializing", "qr_ready", "authenticating", "ready"]);

async function api(path, options) {
  const res = await fetch(path, { cache: "no-store", ...options });
  if (res.status === 401) {
    window.location.href = "/login";
    throw new Error("Signed out");
  }
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || "Request failed");
  return data;
}

function Badge({ status }) {
  const [tint, label] = BADGES[status] || ["tint-danger", "Not connected"];
  return <span className={`badge-soft ${tint} text-nowrap`}>{label}</span>;
}

function Alert({ children }) {
  return (
    <div className="tint-danger rounded-3 p-3 mb-3 d-flex align-items-center gap-2 fs-md fw-semibold" role="alert">
      <CircleAlert className="icon-20 flex-shrink-0" aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}

function Spinner({ text }) {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center text-center gap-3 py-5">
      <span className="spinner-border text-primary" role="status" aria-hidden="true" />
      <p className="fw-medium text-title mb-0">{text}</p>
    </div>
  );
}

/* ------------------------------------------------------------ view modal -- */

function ViewModal({ id, onClose, onChanged }) {
  const [info, setInfo] = useState(null);
  const [qr, setQr] = useState(null);
  const [error, setError] = useState("");
  const [method, setMethod] = useState("qr");
  const [pairPhone, setPairPhone] = useState("");
  const [pairCode, setPairCode] = useState("");
  const [busy, setBusy] = useState(false);
  const alive = useRef(true);

  const refresh = useCallback(async () => {
    try {
      const s = await api(`/api/whatsapp/${id}`);
      if (!alive.current) return;
      setInfo(s);
      setError("");
      if (s.status === "qr_ready") {
        const q = await api(`/api/whatsapp/${id}/qr`).catch(() => null);
        if (alive.current && q?.qrCode) setQr(q.qrCode);
      } else setQr(null);
    } catch (e) {
      if (alive.current) setError(e.message);
    }
  }, [id]);

  useEffect(() => {
    alive.current = true;
    refresh();
    const t = setInterval(refresh, VIEW_POLL_MS);
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      alive.current = false;
      clearInterval(t);
      window.removeEventListener("keydown", onKey);
    };
  }, [refresh, onClose]);

  async function start() {
    setBusy(true);
    try {
      setInfo(await api(`/api/whatsapp/${id}/start`, { method: "POST" }));
      onChanged();
    } catch (e) {
      setError(e.message);
    } finally {
      setBusy(false);
    }
  }

  async function getPairingCode(e) {
    e.preventDefault();
    setBusy(true);
    setPairCode("");
    try {
      const r = await api(`/api/whatsapp/${id}/pairing-code`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNumber: pairPhone }),
      });
      setPairCode(r.pairingCode);
      setError("");
    } catch (e2) {
      setError(e2.message);
    } finally {
      setBusy(false);
    }
  }

  const status = info?.status;
  let body;
  if (!info) body = <Spinner text="Loading…" />;
  else if (status === "ready") {
    body = (
      <div className="d-flex flex-column align-items-center text-center gap-3 py-4">
        <span className="icon-box bg-cat-emerald text-white rounded-circle" style={{ width: 72, height: 72 }}>
          <CircleCheckBig style={{ width: 36, height: 36 }} aria-hidden="true" />
        </span>
        <div>
          <p className="fs-5 fw-bold text-title mb-1">This WhatsApp is connected</p>
          <p className="text-body-2 mb-0">
            {info.pushName && <strong>{info.pushName}</strong>}
            {info.pushName && info.phone ? " · " : null}
            {info.phone && <bdi>+{info.phone}</bdi>}
          </p>
          {info.connectedAt && (
            <p className="fs-md text-muted-2 mb-0 mt-1">Connected since {new Date(info.connectedAt).toLocaleString()}</p>
          )}
        </div>
      </div>
    );
  } else if (status === "qr_ready") {
    body = (
      <div className="d-flex flex-column align-items-center gap-3">
        <div className="btn-group" role="group" aria-label="How to link">
          <button
            type="button"
            className={`btn btn-sm d-inline-flex align-items-center gap-2 ${method === "qr" ? "btn-primary" : "btn-outline-soft"}`}
            onClick={() => setMethod("qr")}
            aria-pressed={method === "qr"}
          >
            <QrCode className="icon-16" aria-hidden="true" /> Scan QR code
          </button>
          <button
            type="button"
            className={`btn btn-sm d-inline-flex align-items-center gap-2 ${method === "code" ? "btn-primary" : "btn-outline-soft"}`}
            onClick={() => setMethod("code")}
            aria-pressed={method === "code"}
          >
            <KeyRound className="icon-16" aria-hidden="true" /> Use phone number
          </button>
        </div>
        {method === "qr" ? (
          qr ? (
            <>
              <div className="bg-white p-3 rounded-4 border shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={qr} alt="WhatsApp QR code" width="256" height="256" className="d-block" />
              </div>
              <p className="fs-md text-muted-2 text-center mb-0">
                WhatsApp → Settings → <strong>Linked devices</strong> → <strong>Link a device</strong>, then scan. The code
                refreshes automatically.
              </p>
            </>
          ) : (
            <Spinner text="Preparing your QR code…" />
          )
        ) : (
          <form onSubmit={getPairingCode} className="w-100" style={{ maxWidth: 360 }}>
            <label htmlFor="pairPhone" className="form-label fs-md fw-semibold text-title">
              Your WhatsApp number
            </label>
            <div className="field-icon mb-2">
              <Smartphone className="icon-18" aria-hidden="true" />
              <input
                id="pairPhone"
                className="form-control"
                inputMode="numeric"
                placeholder="923001234567"
                value={pairPhone}
                onChange={(e) => setPairPhone(e.target.value.replace(/[^\d]/g, ""))}
                required
              />
            </div>
            <p className="fs-sm text-muted-2">Country code + number, digits only. On your phone choose “Link with phone number instead”.</p>
            <button type="submit" className="btn btn-primary w-100 d-inline-flex align-items-center justify-content-center gap-2" disabled={busy}>
              {busy ? <span className="spinner-border spinner-border-sm" aria-hidden="true" /> : <KeyRound className="icon-18" aria-hidden="true" />}
              Get pairing code
            </button>
            {pairCode && (
              <div className="tint-success rounded-3 p-3 mt-3 text-center">
                <p className="fs-md mb-1">Enter this code on your phone:</p>
                <p className="fs-2 fw-bold text-title mb-0 font-monospace" style={{ letterSpacing: "0.2em" }}>
                  {pairCode.slice(0, 4)}-{pairCode.slice(4)}
                </p>
              </div>
            )}
          </form>
        )}
      </div>
    );
  } else if (status === "initializing") body = <Spinner text="Starting WhatsApp… the QR code will appear in a moment." />;
  else if (status === "authenticating") body = <Spinner text="Code scanned — linking your device…" />;
  else {
    body = (
      <div className="d-flex flex-column align-items-center text-center gap-3 py-4">
        <p className="fs-5 fw-bold text-title mb-0">This WhatsApp is not running</p>
        <p className="text-body-2 mb-0">{info.lastError || "Press Start to reconnect it or to get a new QR code."}</p>
        <button type="button" className="btn btn-primary d-inline-flex align-items-center gap-2" onClick={start} disabled={busy}>
          {busy ? <span className="spinner-border spinner-border-sm" aria-hidden="true" /> : <Play className="icon-18" aria-hidden="true" />}
          Start
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="modal fade show d-block" tabIndex={-1} role="dialog" aria-modal="true" aria-labelledby="waViewTitle" onClick={onClose}>
        <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
          <div className="modal-content">
            <div className="modal-header">
              <h2 id="waViewTitle" className="modal-title fs-5 d-flex align-items-center gap-2">
                {info?.label || "WhatsApp"} {info && <Badge status={status} />}
              </h2>
              <button type="button" className="btn btn-ghost btn-sm rounded-circle p-1 ms-auto" aria-label="Close" onClick={onClose}>
                <X className="icon-20" aria-hidden="true" />
              </button>
            </div>
            <div className="modal-body">
              {error && <Alert>{error}</Alert>}
              {body}
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" />
    </>
  );
}

/* ------------------------------------------------------------------ list -- */

/* initialItems / initialMax come from the server, so the list shows instantly;
   it is then refreshed every few seconds (status changes, removed devices…). */
export default function WhatsAppManager({ initialItems = null, initialMax = 1, initialError = "" }) {
  const [items, setItems] = useState(initialItems);
  const [max, setMax] = useState(initialMax);
  const [error, setError] = useState(initialError);
  const [adding, setAdding] = useState(false);
  const [label, setLabel] = useState("");
  const [busyId, setBusyId] = useState(null);
  const [viewId, setViewId] = useState(null);
  const closeView = useCallback(() => setViewId(null), []);

  const load = useCallback(async () => {
    try {
      const r = await api("/api/whatsapp");
      setItems(r.items);
      setMax(r.max);
      setError("");
    } catch (e) {
      setError(e.message);
      setItems((v) => v || []);
    }
  }, []);

  useEffect(() => {
    if (initialItems === null) load();
    const t = setInterval(load, LIST_POLL_MS);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [load]);

  async function add(e) {
    e.preventDefault();
    setBusyId("new");
    try {
      const w = await api("/api/whatsapp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ label }),
      });
      setAdding(false);
      setLabel("");
      await load();
      setViewId(w.id); /* show its QR code straight away */
    } catch (e2) {
      setError(e2.message);
    } finally {
      setBusyId(null);
    }
  }

  async function act(w, action) {
    const confirmText = {
      unlink: `Unlink "${w.label}"? It will be logged out on your phone and needs a new QR scan to reconnect.`,
      delete: `Delete "${w.label}"? It will be unlinked and removed from AutoWA. This cannot be undone.`,
    }[action];
    if (confirmText && !window.confirm(confirmText)) return;
    setBusyId(w.id);
    try {
      if (action === "start") await api(`/api/whatsapp/${w.id}/start`, { method: "POST" });
      if (action === "unlink") await api(`/api/whatsapp/${w.id}/unlink`, { method: "POST" });
      if (action === "delete") await api(`/api/whatsapp/${w.id}`, { method: "DELETE" });
      setError("");
      await load();
      if (action === "start") setViewId(w.id);
    } catch (e) {
      setError(e.message);
    } finally {
      setBusyId(null);
    }
  }

  const count = items?.length || 0;
  const canAdd = count < max;
  const connected = items?.filter((w) => w.status === "ready").length || 0;

  return (
    <>
      <section className="card mb-3">
        <div className="card-body d-flex flex-wrap align-items-center gap-3">
          <div className="me-auto">
            <h2 className="fs-5 fw-semibold text-title mb-1">My WhatsApp numbers</h2>
            <p className="fs-md text-muted-2 mb-0">
              {connected} connected · {count} of {max} used
            </p>
          </div>
          {!adding && (
            <button
              type="button"
              className="btn btn-primary d-inline-flex align-items-center gap-2"
              onClick={() => setAdding(true)}
              disabled={!canAdd || items === null}
              title={canAdd ? "" : "Your package limit is reached"}
            >
              <Plus className="icon-18" aria-hidden="true" /> Add WhatsApp
            </button>
          )}
          {adding && (
            <form onSubmit={add} className="d-flex flex-wrap align-items-center gap-2">
              <input
                className="form-control"
                style={{ width: 240 }}
                placeholder="Name, e.g. Sales phone"
                maxLength={40}
                value={label}
                onChange={(e) => setLabel(e.target.value)}
                autoFocus
                aria-label="WhatsApp name"
              />
              <button type="submit" className="btn btn-primary d-inline-flex align-items-center gap-2" disabled={busyId === "new"}>
                {busyId === "new" ? <span className="spinner-border spinner-border-sm" aria-hidden="true" /> : <QrCode className="icon-18" aria-hidden="true" />}
                Add & show QR
              </button>
              <button type="button" className="btn btn-outline-soft" onClick={() => setAdding(false)}>
                Cancel
              </button>
            </form>
          )}
        </div>
      </section>

      {error && <Alert>{error}</Alert>}
      {!canAdd && items && (
        <div className="tint-info rounded-3 p-3 mb-3 fs-md">
          You are using all {max} WhatsApp number(s) of your package. Delete one, or ask your administrator for a bigger package.
        </div>
      )}

      {items === null ? (
        <Spinner text="Loading your WhatsApp numbers…" />
      ) : items.length === 0 ? (
        <div className="card">
          <div className="card-body d-flex flex-column align-items-center text-center gap-3 py-5">
            <span className="icon-box bg-muted rounded-circle" style={{ width: 72, height: 72 }}>
              <MessageCircle style={{ width: 36, height: 36 }} aria-hidden="true" />
            </span>
            <p className="fs-5 fw-bold text-title mb-0">No WhatsApp linked yet</p>
            <p className="text-body-2 mb-0">Add your first WhatsApp and scan the QR code with your phone.</p>
            <button type="button" className="btn btn-primary d-inline-flex align-items-center gap-2" onClick={() => setAdding(true)}>
              <Plus className="icon-18" aria-hidden="true" /> Add WhatsApp
            </button>
          </div>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 row-cols-xxl-3 g-3">
          {items.map((w) => {
            const busy = busyId === w.id;
            const running = RUNNING.has(w.status);
            return (
              <div key={w.id} className="col">
                <div className="card h-100">
                  <div className="card-body d-flex flex-column gap-3">
                    <div className="d-flex align-items-start gap-3">
                      <span
                        className={`icon-box ${w.status === "ready" ? "bg-cat-emerald" : "bg-cat-slate"} text-white rounded-circle flex-shrink-0`}
                        aria-hidden="true"
                      >
                        <MessageCircle />
                      </span>
                      <div className="min-w-0 me-auto">
                        <h3 className="fs-5 fw-semibold text-title text-truncate mb-1">{w.label}</h3>
                        <p className="fs-md text-body-2 mb-0 text-truncate">
                          {w.phone ? (
                            <bdi>+{w.phone}</bdi>
                          ) : w.lastPhone ? (
                            <span className="text-muted-2">
                              Last linked <bdi>+{w.lastPhone}</bdi>
                            </span>
                          ) : (
                            "No number linked"
                          )}
                          {w.pushName ? ` · ${w.pushName}` : ""}
                        </p>
                      </div>
                      <Badge status={w.status} />
                    </div>
                    <p className="fs-sm text-muted-2 mb-0">
                      {w.status === "ready" && w.connectedAt
                        ? `Connected since ${new Date(w.connectedAt).toLocaleString()}`
                        : `Added ${new Date(w.createdAt.replace(" ", "T") + "Z").toLocaleDateString()}`}
                    </p>
                    <div className="d-flex flex-wrap gap-2 mt-auto">
                      <button type="button" className="btn btn-sm btn-outline-soft d-inline-flex align-items-center gap-1" onClick={() => setViewId(w.id)}>
                        <Eye className="icon-16" aria-hidden="true" /> View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-soft d-inline-flex align-items-center gap-1"
                        onClick={() => act(w, "start")}
                        disabled={busy || running}
                        title={running ? "Already running" : "Start / reconnect"}
                      >
                        {busy ? <span className="spinner-border spinner-border-sm" aria-hidden="true" /> : <Play className="icon-16" aria-hidden="true" />} Start
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-soft d-inline-flex align-items-center gap-1"
                        onClick={() => act(w, "unlink")}
                        disabled={busy || w.status !== "ready"}
                        title={w.status === "ready" ? "Log out on your phone" : "Only a connected WhatsApp can be unlinked"}
                      >
                        <Link2Off className="icon-16" aria-hidden="true" /> Unlink
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-danger d-inline-flex align-items-center gap-1"
                        onClick={() => act(w, "delete")}
                        disabled={busy}
                      >
                        <Trash2 className="icon-16" aria-hidden="true" /> Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {viewId != null && <ViewModal id={viewId} onClose={closeView} onChanged={load} />}
    </>
  );
}

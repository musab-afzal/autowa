"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  CircleAlert,
  CircleCheckBig,
  Filter,
  Gem,
  ListOrdered,
  LogIn,
  MessageCircle,
  RefreshCw,
  RotateCcw,
  ScrollText,
  Search,
  Server,
  UsersRound,
} from "lucide-react";
import { Alert, DownloadMenu, Modal, api, fmtDateTime } from "./ui";
import { EXPORT_FORMATS } from "@/lib/numbers";

const CATEGORY_STYLE = {
  auth: { icon: LogIn, tint: "tint-info" },
  whatsapp: { icon: MessageCircle, tint: "tint-success" },
  generator: { icon: ListOrdered, tint: "tint-warning" },
  filter: { icon: Filter, tint: "tint-primary" },
  users: { icon: UsersRound, tint: "tint-info" },
  plans: { icon: Gem, tint: "tint-warning" },
  system: { icon: Server, tint: "tint-primary" },
};
const EXPORTS = EXPORT_FORMATS.filter((f) => f.key !== "txt");
const EMPTY = { q: "", category: "", status: "", userId: "", from: "", to: "" };
const REFRESH_MS = 15000;

function query(f, page) {
  const p = new URLSearchParams();
  for (const [k, v] of Object.entries(f)) if (v) p.set(k, v);
  if (page > 1) p.set("page", page);
  return p.toString();
}

/* "Chrome on Windows" from a user-agent string */
function browserName(ua) {
  if (!ua) return "—";
  const b = /Edg\//.test(ua) ? "Edge" : /OPR\//.test(ua) ? "Opera" : /Chrome\//.test(ua) ? "Chrome" : /Firefox\//.test(ua) ? "Firefox" : /Safari\//.test(ua) ? "Safari" : /curl/i.test(ua) ? "curl" : "Browser";
  const os = /Windows/.test(ua) ? "Windows" : /Android/.test(ua) ? "Android" : /iPhone|iPad/.test(ua) ? "iOS" : /Mac OS/.test(ua) ? "macOS" : /Linux/.test(ua) ? "Linux" : "";
  return os ? `${b} on ${os}` : b;
}

function Stat({ icon: Icon, tint, label, value }) {
  return (
    <div className="col">
      <div className="d-flex align-items-center gap-3 p-3 rounded-4 bg-soft h-100">
        <span className={`icon-box ${tint} text-white rounded-circle`} aria-hidden="true">
          <Icon />
        </span>
        <span className="lh-sm">
          <span className="d-block fs-4 fw-bold text-title">{Number(value || 0).toLocaleString()}</span>
          <span className="d-block fs-md text-muted-2">{label}</span>
        </span>
      </div>
    </div>
  );
}

function CategoryBadge({ category, categories }) {
  const s = CATEGORY_STYLE[category] || CATEGORY_STYLE.system;
  const Icon = s.icon;
  return (
    <span className={`badge-soft ${s.tint} d-inline-flex align-items-center gap-1 text-nowrap`}>
      <Icon className="icon-14" aria-hidden="true" />
      {categories[category] || category}
    </span>
  );
}

function StatusBadge({ status }) {
  return status === "failed" ? (
    <span className="badge-soft tint-danger d-inline-flex align-items-center gap-1">
      <CircleAlert className="icon-14" aria-hidden="true" /> Failed
    </span>
  ) : (
    <span className="badge-soft tint-success d-inline-flex align-items-center gap-1">
      <CircleCheckBig className="icon-14" aria-hidden="true" /> Success
    </span>
  );
}

function Detail({ label, children }) {
  return (
    <div className="col-12 col-sm-6">
      <span className="d-block fs-sm text-muted-2 mb-1">{label}</span>
      <span className="d-block fw-medium text-title text-break">{children || "—"}</span>
    </div>
  );
}

/* Audit log for both sides. admin = every account's actions with a user filter;
   otherwise the signed-in user's own actions and what was done to their account. */
export default function AuditLog({ admin = false, initial, categories, users = [] }) {
  const [data, setData] = useState(initial);
  const [f, setF] = useState(EMPTY);
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(null);
  const first = useRef(true);

  const load = useCallback(
    async (silent) => {
      if (!silent) setBusy(true);
      try {
        setData(await api(`/api/audit?${query(f, page)}`));
        setError("");
      } catch (e) {
        setError(e.message);
      } finally {
        setBusy(false);
      }
    },
    [f, page],
  );

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    load();
  }, [load]);

  /* search as you type, after a short pause */
  useEffect(() => {
    const t = setTimeout(() => {
      setF((x) => (x.q === q ? x : { ...x, q }));
      setPage(1);
    }, 350);
    return () => clearTimeout(t);
  }, [q]);

  /* new entries appear by themselves while page 1 is open */
  useEffect(() => {
    if (page !== 1) return;
    const t = setInterval(() => load(true), REFRESH_MS);
    return () => clearInterval(t);
  }, [load, page]);

  const set = (k) => (e) => {
    setF((x) => ({ ...x, [k]: e.target.value }));
    setPage(1);
  };
  const filtered = Object.values(f).some(Boolean);
  const cols = admin ? 6 : 5;

  return (
    <>
      <section className="on-dark bg-nav rounded-3 flex-shrink-0 p-3 p-md-4 mb-4">
        <div className="d-flex flex-wrap align-items-center gap-3">
          <span className="icon-box bg-accent text-nav rounded-circle flex-shrink-0" style={{ width: 52, height: 52 }} aria-hidden="true">
            <ScrollText />
          </span>
          <div className="me-auto">
            <h2 className="text-title fs-4 mb-1">{admin ? "Everything that happens in AutoWA" : "Your account activity"}</h2>
            <p className="fw-medium text-primary mb-0">
              {admin
                ? "Every sign-in, WhatsApp, list, filter, download and admin change, by every user."
                : "Every sign-in, WhatsApp, list, filter and download on your account, plus changes made to it by your administrator."}
            </p>
          </div>
        </div>
      </section>

      <div className="row row-cols-1 row-cols-sm-3 g-3 mb-4">
        <Stat icon={ScrollText} tint="bg-cat-blue" label={filtered ? "Entries (filtered)" : "Total entries"} value={data.counts.total} />
        <Stat icon={RefreshCw} tint="bg-cat-emerald" label="Today" value={data.counts.today} />
        <Stat icon={CircleAlert} tint="bg-cat-red" label="Failed actions" value={data.counts.failed} />
      </div>

      <section className="card mb-3">
        <div className="card-body d-flex flex-wrap align-items-end gap-2">
          <div className="flex-grow-1" style={{ minWidth: 220, maxWidth: 340 }}>
            <label htmlFor="alQ" className="form-label fs-sm fw-semibold text-title mb-1">
              Search
            </label>
            <div className="field-icon">
              <Search className="icon-18" aria-hidden="true" />
              <input id="alQ" className="form-control" placeholder="Action, details, user, IP…" value={q} onChange={(e) => setQ(e.target.value)} />
            </div>
          </div>
          {admin && (
            <div>
              <label htmlFor="alUser" className="form-label fs-sm fw-semibold text-title mb-1">
                User
              </label>
              <select id="alUser" className="form-select pe-5" style={{ minWidth: 190 }} value={f.userId} onChange={set("userId")}>
                <option value="">All users</option>
                {users.map((u) => (
                  <option key={u.id} value={u.id}>
                    {u.name} ({u.email})
                  </option>
                ))}
              </select>
            </div>
          )}
          <div>
            <label htmlFor="alCat" className="form-label fs-sm fw-semibold text-title mb-1">
              Category
            </label>
            <select id="alCat" className="form-select pe-5" style={{ minWidth: 170 }} value={f.category} onChange={set("category")}>
              <option value="">All categories</option>
              {Object.entries(categories)
                .filter(([k]) => admin || k !== "plans")
                .map(([k, label]) => (
                  <option key={k} value={k}>
                    {label}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label htmlFor="alStatus" className="form-label fs-sm fw-semibold text-title mb-1">
              Status
            </label>
            <select id="alStatus" className="form-select pe-5" style={{ minWidth: 130 }} value={f.status} onChange={set("status")}>
              <option value="">All</option>
              <option value="success">Success</option>
              <option value="failed">Failed</option>
            </select>
          </div>
          <div>
            <label htmlFor="alFrom" className="form-label fs-sm fw-semibold text-title mb-1">
              From
            </label>
            <input id="alFrom" type="date" className="form-control" value={f.from} max={f.to || undefined} onChange={set("from")} />
          </div>
          <div>
            <label htmlFor="alTo" className="form-label fs-sm fw-semibold text-title mb-1">
              To
            </label>
            <input id="alTo" type="date" className="form-control" value={f.to} min={f.from || undefined} onChange={set("to")} />
          </div>
          <div className="d-flex gap-2 ms-auto">
            {filtered && (
              <button
                type="button"
                className="btn btn-outline-soft d-inline-flex align-items-center gap-2"
                onClick={() => {
                  setQ("");
                  setF(EMPTY);
                  setPage(1);
                }}
              >
                <RotateCcw className="icon-16" aria-hidden="true" /> Reset
              </button>
            )}
            <button type="button" className="btn btn-outline-soft d-inline-flex align-items-center gap-2" onClick={() => load()} disabled={busy} aria-label="Refresh">
              {busy ? <span className="spinner-border spinner-border-sm" aria-hidden="true" /> : <RefreshCw className="icon-16" aria-hidden="true" />}
            </button>
            <DownloadMenu href={(fmt) => `/api/audit/export?${query({ ...f, format: fmt }, 1)}`} label="Export" formats={EXPORTS} align="end" />
          </div>
        </div>
      </section>

      {error && <Alert>{error}</Alert>}

      <section className="card mb-4">
        <div className="card-body">
          <div className="table-responsive d-none d-md-block">
            <table className="table align-middle mb-0" aria-busy={busy}>
              <thead>
                <tr>
                  <th scope="col">Date &amp; time</th>
                  {admin && <th scope="col">User</th>}
                  <th scope="col">Category</th>
                  <th scope="col">Action</th>
                  <th scope="col">Status</th>
                  <th scope="col">IP address</th>
                </tr>
              </thead>
              <tbody>
                {data.items.map((r) => (
                  <tr key={r.id}>
                    <td className="fs-md" style={{ minWidth: 120 }}>{fmtDateTime(r.createdAt)}</td>
                    {admin && (
                      <td style={{ minWidth: 170 }}>
                        <span className="d-block fw-medium text-title">{r.actorName || "Unknown"}</span>
                        <span className="d-block fs-sm text-muted-2 text-break">
                          {r.actorRole === "admin" ? "Super Admin · " : ""}
                          {r.actorEmail || "—"}
                        </span>
                      </td>
                    )}
                    <td>
                      <CategoryBadge category={r.category} categories={categories} />
                    </td>
                    <td style={{ minWidth: 260 }}>
                      <button type="button" className="btn btn-link p-0 border-0 fw-semibold text-title text-start text-decoration-none" title="View details" onClick={() => setOpen(r)}>
                        {r.action}
                      </button>
                      <span className="d-block fs-sm text-body-2 text-break">{r.description}</span>
                      {!admin && r.userId !== r.subjectUserId && r.actorName && (
                        <span className="d-block fs-xs text-muted-2 mt-1">by {r.actorRole === "admin" ? `administrator ${r.actorName}` : r.actorName}</span>
                      )}
                    </td>
                    <td>
                      <StatusBadge status={r.status} />
                    </td>
                    <td className="font-monospace fs-sm text-nowrap">{r.ip === "system" ? <span className="text-muted-2">System</span> : r.ip || "—"}</td>
                  </tr>
                ))}
                {data.items.length === 0 && (
                  <tr>
                    <td colSpan={cols} className="text-center text-body-2 py-5">
                      {filtered ? "No entries match these filters." : "Nothing has been logged yet."}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* phones: one card per entry */}
          <ul className="list-unstyled d-md-none d-flex flex-column gap-2 mb-0">
            {data.items.map((r) => (
              <li key={r.id}>
                <button type="button" className="w-100 text-start border-0 rounded-4 bg-soft p-3" onClick={() => setOpen(r)}>
                  <span className="d-flex flex-wrap align-items-center gap-2 mb-2">
                    <CategoryBadge category={r.category} categories={categories} />
                    <StatusBadge status={r.status} />
                  </span>
                  <span className="d-block fw-semibold text-title">{r.action}</span>
                  <span className="d-block fs-sm text-body-2 text-break">{r.description}</span>
                  <span className="d-block fs-xs text-muted-2 mt-2">
                    {fmtDateTime(r.createdAt)}
                    {(admin || r.userId !== r.subjectUserId) && r.actorName ? ` · ${r.actorName}` : ""}
                    {r.ip && r.ip !== "system" ? ` · ${r.ip}` : ""}
                  </span>
                </button>
              </li>
            ))}
            {data.items.length === 0 && <li className="text-center text-body-2 py-4">{filtered ? "No entries match these filters." : "Nothing has been logged yet."}</li>}
          </ul>

          <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mt-3">
            <span className="fs-md text-muted-2">
              {data.total
                ? `Showing ${((data.page - 1) * data.pageSize + 1).toLocaleString()}–${Math.min(data.page * data.pageSize, data.total).toLocaleString()} of ${data.total.toLocaleString()}`
                : "0 entries"}
            </span>
            <div className="d-flex align-items-center gap-2">
              <button type="button" className="btn btn-sm btn-outline-soft d-inline-flex align-items-center gap-1" disabled={data.page <= 1 || busy} onClick={() => setPage(data.page - 1)}>
                <ChevronLeft className="icon-16 flip-rtl" aria-hidden="true" /> Previous
              </button>
              <span className="fs-md fw-medium text-title text-nowrap">
                Page {data.page} of {data.pages}
              </span>
              <button type="button" className="btn btn-sm btn-outline-soft d-inline-flex align-items-center gap-1" disabled={data.page >= data.pages || busy} onClick={() => setPage(data.page + 1)}>
                Next <ChevronRight className="icon-16 flip-rtl" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {open && (
        <Modal
          title="Audit entry"
          onClose={() => setOpen(null)}
          footer={
            <button type="button" className="btn btn-primary" onClick={() => setOpen(null)}>
              Close
            </button>
          }
        >
          <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
            <CategoryBadge category={open.category} categories={categories} />
            <StatusBadge status={open.status} />
            <span className="fs-sm text-muted-2 ms-auto">#{open.id}</span>
          </div>
          <p className="fs-5 fw-semibold text-title mb-1">{open.action}</p>
          <p className="text-body-2 text-break">{open.description}</p>
          <div className="row g-3">
            <Detail label="Date & time">{new Date(open.createdAt).toLocaleString([], { dateStyle: "full", timeStyle: "medium" })}</Detail>
            <Detail label="Done by">
              {open.actorName ? `${open.actorName}${open.actorRole === "admin" ? " (Super Admin)" : ""}` : "Unknown"}
              {open.actorEmail && <span className="d-block fs-sm text-muted-2 fw-normal">{open.actorEmail}</span>}
            </Detail>
            {open.subjectUserId && open.subjectUserId !== open.userId && <Detail label="Account affected">{open.subjectName || `User #${open.subjectUserId} (deleted)`}</Detail>}
            {open.target && <Detail label="Item">{open.target}</Detail>}
            <Detail label="IP address">{open.ip === "system" ? "System (automatic)" : open.ip}</Detail>
            <Detail label="Browser">{browserName(open.userAgent)}</Detail>
          </div>
        </Modal>
      )}
    </>
  );
}

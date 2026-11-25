"use client";

import { useMemo, useState } from "react";
import { Copy, Eye, EyeOff, KeyRound, Pencil, Plus, Power, Search, Trash2, Wand2 } from "lucide-react";
import CountryPicker from "../CountryPicker";
import { Alert, Modal, api, postJson } from "../ui";
import { countryNames } from "@/lib/countries";

function randomPassword() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789@#$%";
  const a = new Uint32Array(12);
  crypto.getRandomValues(a);
  return Array.from(a, (n) => chars[n % chars.length]).join("");
}

const dateInput = (iso) => (iso ? new Date(iso).toISOString().slice(0, 10) : "");
const addDays = (n) => new Date(Date.now() + n * 86400000).toISOString().slice(0, 10);
const fmt = (iso) => (iso ? new Date(/[zZ]$/.test(iso) ? iso : iso.replace(" ", "T") + "Z").toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }) : "—");

/* ----------------------------------------------------------- form -- */

function UserForm({ initial, plans, onSaved, onClose }) {
  const creating = !initial.id;
  const [f, setF] = useState(() => ({
    name: initial.name || "",
    email: initial.email || "",
    password: creating ? randomPassword() : "",
    role: initial.role || "user",
    packageId: initial.packageId ?? plans.find((p) => p.isActive)?.id ?? "",
    packageExpiresAt: dateInput(initial.packageExpiresAt) || "",
    countries: initial.countries ?? null,
    filterQuota: initial.filterQuota ?? "",
    generatorLimit: initial.generatorLimit ?? "",
    isActive: initial.isActive ?? true,
    resetUsage: false,
  }));
  const [showPw, setShowPw] = useState(creating);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const set = (k) => (v) => setF((x) => ({ ...x, [k]: v?.target ? (v.target.type === "checkbox" ? v.target.checked : v.target.value) : v }));

  const plan = plans.find((p) => String(p.id) === String(f.packageId));
  const planChanged = !creating && String(f.packageId) !== String(initial.packageId ?? "");
  const isAdmin = f.role === "admin";

  /* pick a plan → default expiry follows the plan's duration */
  function choosePlan(id) {
    const p = plans.find((x) => String(x.id) === String(id));
    setF((x) => ({ ...x, packageId: id, packageExpiresAt: p ? addDays(p.durationDays) : "" }));
  }

  async function save(e) {
    e.preventDefault();
    setBusy(true);
    setError("");
    const body = {
      name: f.name,
      email: f.email,
      role: f.role,
      packageId: isAdmin ? null : f.packageId || null,
      packageExpiresAt: isAdmin ? null : f.packageExpiresAt || (plan ? addDays(plan.durationDays) : null),
      countries: f.countries,
      filterQuota: f.filterQuota === "" ? null : Number(f.filterQuota),
      generatorLimit: f.generatorLimit === "" ? null : Number(f.generatorLimit),
      isActive: f.isActive,
      resetUsage: f.resetUsage,
    };
    if (f.password) body.password = f.password;
    try {
      const saved = creating
        ? await postJson("/api/admin/users", body)
        : await api(`/api/admin/users/${initial.id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      onSaved(saved, creating || f.password ? { email: f.email, password: f.password } : null);
    } catch (e2) {
      setError(e2.message);
      setBusy(false);
    }
  }

  return (
    <Modal
      title={creating ? "Create user" : `Edit user — ${initial.name}`}
      onClose={onClose}
      size="modal-lg"
      footer={
        <>
          <button type="button" className="btn btn-outline-soft" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" form="userForm" className="btn btn-primary d-inline-flex align-items-center gap-2" disabled={busy}>
            {busy && <span className="spinner-border spinner-border-sm" aria-hidden="true" />}
            {creating ? "Create user" : "Save changes"}
          </button>
        </>
      }
    >
      <form id="userForm" onSubmit={save}>
        {error && <Alert>{error}</Alert>}
        <div className="row g-3">
          <div className="col-12">
            <h3 className="fs-6 fw-semibold text-title mb-0">Login credentials</h3>
          </div>
          <div className="col-12 col-md-6">
            <label className="form-label fw-semibold" htmlFor="uName">
              Full name
            </label>
            <input id="uName" className="form-control" value={f.name} onChange={set("name")} maxLength={80} required />
          </div>
          <div className="col-12 col-md-6">
            <label className="form-label fw-semibold" htmlFor="uEmail">
              Email (login)
            </label>
            <input id="uEmail" type="email" className="form-control" value={f.email} onChange={set("email")} maxLength={120} required autoComplete="off" />
          </div>
          <div className="col-12 col-md-6">
            <label className="form-label fw-semibold" htmlFor="uPw">
              {creating ? "Password" : "New password"}
            </label>
            <div className="input-group">
              <input
                id="uPw"
                type={showPw ? "text" : "password"}
                className="form-control font-monospace"
                value={f.password}
                onChange={set("password")}
                minLength={8}
                required={creating}
                placeholder={creating ? "" : "Leave empty to keep the current password"}
                autoComplete="new-password"
              />
              <button type="button" className="btn btn-outline-soft" onClick={() => setShowPw((v) => !v)} aria-label={showPw ? "Hide password" : "Show password"}>
                {showPw ? <EyeOff className="icon-16" /> : <Eye className="icon-16" />}
              </button>
              <button
                type="button"
                className="btn btn-outline-soft"
                onClick={() => {
                  setF((x) => ({ ...x, password: randomPassword() }));
                  setShowPw(true);
                }}
                title="Generate a password"
                aria-label="Generate a password"
              >
                <Wand2 className="icon-16" />
              </button>
            </div>
            {!creating && <div className="form-text">Changing the password signs the user out everywhere.</div>}
          </div>
          <div className="col-12 col-md-6">
            <label className="form-label fw-semibold" htmlFor="uRole">
              Role
            </label>
            <select id="uRole" className="form-select" value={f.role} onChange={set("role")}>
              <option value="user">User</option>
              <option value="admin">Super Admin (full access)</option>
            </select>
          </div>

          {!isAdmin && (
            <>
              <div className="col-12">
                <hr className="my-1" />
                <h3 className="fs-6 fw-semibold text-title mt-2 mb-0">Plan</h3>
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label fw-semibold" htmlFor="uPlan">
                  Plan
                </label>
                <select id="uPlan" className="form-select" value={f.packageId ?? ""} onChange={(e) => choosePlan(e.target.value)}>
                  <option value="">No plan (cannot use the tools)</option>
                  {plans.map((p) => (
                    <option key={p.id} value={p.id} disabled={!p.isActive && String(p.id) !== String(initial.packageId)}>
                      {p.name} — {p.price ? `${p.price} ${p.currency}` : "Free"} / {p.durationDays} days{p.isActive ? "" : " (inactive)"}
                    </option>
                  ))}
                </select>
                {planChanged && <div className="form-text text-warning">A new plan starts a new period: the used quota goes back to 0.</div>}
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label fw-semibold" htmlFor="uExp">
                  Plan expires on
                </label>
                <input id="uExp" type="date" className="form-control" value={f.packageExpiresAt} onChange={set("packageExpiresAt")} disabled={!f.packageId} />
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label fw-semibold" htmlFor="uQuota">
                  Numbers this user can filter
                </label>
                <input
                  id="uQuota"
                  type="number"
                  min="0"
                  step="1000"
                  className="form-control"
                  value={f.filterQuota}
                  onChange={set("filterQuota")}
                  placeholder={plan ? `Plan default: ${plan.filterQuota.toLocaleString()}` : "Choose a plan"}
                />
                <div className="form-text">Total for this plan period. Leave empty to use the plan&apos;s quota.</div>
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label fw-semibold" htmlFor="uGenLimit">
                  Number generator limit
                </label>
                <input
                  id="uGenLimit"
                  type="number"
                  min="1"
                  max="1000000"
                  step="1000"
                  className="form-control"
                  value={f.generatorLimit}
                  onChange={set("generatorLimit")}
                  placeholder="No limit (up to 1,000,000 per list)"
                />
                <div className="form-text">Most numbers this user can generate in one list. Plans do not limit generating — only filtering.</div>
              </div>
              {!creating && (
                <div className="col-12 col-md-6">
                  <span className="form-label fw-semibold d-block">Usage</span>
                  <p className="fs-md mb-2">
                    {initial.quotaUsed.toLocaleString()} used
                    {initial.quotaLeft != null && <> · {initial.quotaLeft.toLocaleString()} left</>}
                  </p>
                  <div className="form-check">
                    <input id="uReset" type="checkbox" className="form-check-input" checked={f.resetUsage} onChange={set("resetUsage")} />
                    <label htmlFor="uReset" className="form-check-label fs-md">
                      Reset used numbers to 0
                    </label>
                  </div>
                </div>
              )}

              <div className="col-12">
                <hr className="my-1" />
                <h3 className="fs-6 fw-semibold text-title mt-2 mb-1">Countries</h3>
                <p className="fs-sm text-muted-2 mb-2">
                  The user can only generate and filter numbers with these country codes.
                  {plan?.countries ? ` The plan allows: ${countryNames(plan.countries)}.` : ""}
                </p>
                <CountryPicker value={f.countries} onChange={set("countries")} allLabel={plan?.countries ? "Same as plan" : "All countries"} idPrefix="user" />
              </div>
            </>
          )}

          <div className="col-12">
            <hr className="my-1" />
            <div className="form-check form-switch mt-2">
              <input id="uActive" className="form-check-input" type="checkbox" role="switch" checked={f.isActive} onChange={set("isActive")} />
              <label htmlFor="uActive" className="form-check-label fw-medium">
                Account enabled
              </label>
              <div className="form-text mt-0">A disabled user cannot sign in; their running filters are stopped.</div>
            </div>
          </div>
        </div>
      </form>
    </Modal>
  );
}

/* --------------------------------------------------------------- list -- */

export default function UsersManager({ initialUsers, plans, meId }) {
  const [users, setUsers] = useState(initialUsers);
  const [q, setQ] = useState("");
  const [status, setStatus] = useState("all");
  const [planFilter, setPlanFilter] = useState("all");
  const [editing, setEditing] = useState(null);
  const [created, setCreated] = useState(null); /* credentials to show after create / reset */
  const [error, setError] = useState("");
  const [busyId, setBusyId] = useState(null);

  const reload = async () => setUsers((await api("/api/admin/users")).users);

  const shown = useMemo(() => {
    const s = q.trim().toLowerCase();
    return users.filter(
      (u) =>
        (!s || u.name.toLowerCase().includes(s) || u.email.toLowerCase().includes(s)) &&
        (status === "all" || (status === "active" ? u.isActive : status === "disabled" ? !u.isActive : u.role === "admin")) &&
        (planFilter === "all" || String(u.packageId ?? "none") === planFilter),
    );
  }, [users, q, status, planFilter]);

  async function toggle(u) {
    if (u.isActive && !window.confirm(`Disable ${u.name}? They will be signed out and cannot sign in until enabled again.`)) return;
    setBusyId(u.id);
    try {
      await api(`/api/admin/users/${u.id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ isActive: !u.isActive }) });
      setError("");
      await reload();
    } catch (e) {
      setError(e.message);
    } finally {
      setBusyId(null);
    }
  }

  async function remove(u) {
    if (!window.confirm(`Delete ${u.name} (${u.email})? Their WhatsApp numbers are unlinked and all their data is removed. This cannot be undone.`)) return;
    setBusyId(u.id);
    try {
      await api(`/api/admin/users/${u.id}`, { method: "DELETE" });
      setError("");
      await reload();
    } catch (e) {
      setError(e.message);
    } finally {
      setBusyId(null);
    }
  }

  return (
    <>
      <section className="card mb-3">
        <div className="card-body d-flex flex-wrap align-items-center gap-2">
          <div className="field-icon flex-grow-1" style={{ minWidth: 220, maxWidth: 360 }}>
            <Search className="icon-18" aria-hidden="true" />
            <input className="form-control" placeholder="Search name or email" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Search users" />
          </div>
          <select className="form-select w-auto pe-5" style={{ minWidth: 170 }} value={status} onChange={(e) => setStatus(e.target.value)} aria-label="Status">
            <option value="all">All statuses</option>
            <option value="active">Active</option>
            <option value="disabled">Disabled</option>
            <option value="admin">Super admins</option>
          </select>
          <select className="form-select w-auto pe-5" style={{ minWidth: 160 }} value={planFilter} onChange={(e) => setPlanFilter(e.target.value)} aria-label="Plan">
            <option value="all">All plans</option>
            <option value="none">No plan</option>
            {plans.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
          <button type="button" className="btn btn-primary ms-auto d-inline-flex align-items-center gap-2" onClick={() => setEditing({})}>
            <Plus className="icon-18" aria-hidden="true" /> Create user
          </button>
        </div>
      </section>

      {error && <Alert>{error}</Alert>}

      {created && (
        <div className="tint-success rounded-4 p-3 mb-3" role="status">
          <p className="d-flex align-items-center gap-2 fw-semibold mb-2">
            <KeyRound className="icon-18" aria-hidden="true" /> Login credentials — share them with the user now; the password is not shown again.
          </p>
          <div className="d-flex flex-wrap align-items-center gap-3 font-monospace">
            <span>
              Email: <strong>{created.email}</strong>
            </span>
            <span>
              Password: <strong>{created.password}</strong>
            </span>
            <button
              type="button"
              className="btn btn-sm btn-outline-soft d-inline-flex align-items-center gap-1"
              onClick={() => navigator.clipboard?.writeText(`Email: ${created.email}\nPassword: ${created.password}`)}
            >
              <Copy className="icon-14" aria-hidden="true" /> Copy
            </button>
            <button type="button" className="btn btn-sm btn-ghost ms-auto" onClick={() => setCreated(null)}>
              Done
            </button>
          </div>
        </div>
      )}

      <section className="card mb-4">
        <div className="card-body">
          <p className="fs-md text-muted-2 mb-3">
            Showing {shown.length} of {users.length} user(s)
          </p>
          <div className="table-responsive">
            <table className="table align-middle mb-0">
              <thead>
                <tr>
                  <th scope="col">User</th>
                  <th scope="col">Plan</th>
                  <th scope="col">Countries</th>
                  <th scope="col" style={{ minWidth: 170 }}>
                    Filter quota
                  </th>
                  <th scope="col" className="text-end">
                    WhatsApps
                  </th>
                  <th scope="col">Status</th>
                  <th scope="col" className="text-end">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {shown.map((u) => {
                  const pct = u.quota ? Math.min(100, Math.round((u.quotaUsed / u.quota) * 100)) : 0;
                  const expired = u.packageExpiresAt && new Date(u.packageExpiresAt) < new Date();
                  return (
                    <tr key={u.id}>
                      <td>
                        <span className="fw-medium text-title">{u.name}</span>
                        {u.role === "admin" && <span className="badge-soft tint-primary ms-2">Super Admin</span>}
                        {u.id === meId && <span className="badge-soft tint-info ms-1">You</span>}
                        <span className="d-block fs-sm text-muted-2">{u.email}</span>
                      </td>
                      <td>
                        {u.role === "admin" ? (
                          "—"
                        ) : u.packageName ? (
                          <>
                            {u.packageName}
                            <span className={`d-block fs-sm ${expired ? "text-danger" : "text-muted-2"}`}>
                              {expired ? "Expired" : "Until"} {fmt(u.packageExpiresAt)}
                            </span>
                          </>
                        ) : (
                          <span className="text-muted-2">No plan</span>
                        )}
                      </td>
                      <td className="fs-sm" style={{ maxWidth: 200 }}>
                        <span className="d-inline-block text-truncate" style={{ maxWidth: 200 }} title={countryNames(u.effectiveCountries)}>
                          {u.effectiveCountries ? `${u.effectiveCountries.length}: ${countryNames(u.effectiveCountries)}` : "All countries"}
                        </span>
                      </td>
                      <td>
                        {u.quota == null ? (
                          <span className="text-muted-2">Unlimited</span>
                        ) : (
                          <>
                            <div className="d-flex justify-content-between fs-sm">
                              <span>{u.quotaUsed.toLocaleString()} used</span>
                              <span className="fw-semibold">{u.quotaLeft.toLocaleString()} left</span>
                            </div>
                            <div className="progress" style={{ height: 6 }} title={`${pct}% of ${u.quota.toLocaleString()}`}>
                              <div className={`progress-bar ${pct >= 90 ? "bg-danger" : ""}`} style={{ width: `${pct}%` }} />
                            </div>
                          </>
                        )}
                        {u.role !== "admin" && (
                          <span className="d-block fs-xs text-muted-2 mt-1">
                            Generator: {u.generatorLimit == null ? "no limit" : `${u.generatorLimit.toLocaleString()} / list`}
                          </span>
                        )}
                      </td>
                      <td className="text-end">{u.whatsapps}</td>
                      <td>
                        <span className={`badge-soft ${u.isActive ? "tint-success" : "tint-danger"}`}>{u.isActive ? "Active" : "Disabled"}</span>
                      </td>
                      <td className="text-end text-nowrap">
                        <div className="d-inline-flex gap-1">
                          <button type="button" className="btn btn-sm btn-ghost" title="Edit" aria-label={`Edit ${u.name}`} onClick={() => setEditing(u)}>
                            <Pencil className="icon-16" aria-hidden="true" />
                          </button>
                          {u.id !== meId && (
                          <>
                          <button
                            type="button"
                            className={`btn btn-sm btn-ghost ${u.isActive ? "text-warning" : "text-success"}`}
                            title={u.isActive ? "Disable" : "Enable"}
                            aria-label={`${u.isActive ? "Disable" : "Enable"} ${u.name}`}
                            onClick={() => toggle(u)}
                            disabled={busyId === u.id}
                          >
                            <Power className="icon-16" aria-hidden="true" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-ghost text-danger"
                            title="Delete"
                            aria-label={`Delete ${u.name}`}
                            onClick={() => remove(u)}
                            disabled={busyId === u.id}
                          >
                            <Trash2 className="icon-16" aria-hidden="true" />
                          </button>
                          </>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
                {shown.length === 0 && (
                  <tr>
                    <td colSpan={7} className="text-center text-body-2 py-4">
                      No users match these filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {editing && (
        <UserForm
          initial={editing}
          plans={plans}
          onClose={() => setEditing(null)}
          onSaved={(_saved, creds) => {
            setEditing(null);
            setError("");
            if (creds) setCreated(creds);
            reload();
          }}
        />
      )}
    </>
  );
}

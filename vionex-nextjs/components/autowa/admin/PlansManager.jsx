"use client";

import { useState } from "react";
import { Check, Gauge, Globe, Pencil, Plus, Trash2, X } from "lucide-react";
import CountryPicker from "../CountryPicker";
import { Alert, Modal, api, postJson } from "../ui";

const SUPPORT_LEVELS = ["No support", "Email support", "Priority email support", "24/7 priority support", "Dedicated account manager"];
const PER_FILTER_PRESETS = [50000, 100000, 200000, 300000, 500000];

const EMPTY = {
  name: "",
  description: "",
  price: 0,
  currency: "USD",
  durationDays: 30,
  speedSecPer10k: 15,
  perFilter: 50000,
  filterQuota: 500000,
  maxWhatsApps: 1,
  generator: true,
  multiFiles: true,
  bothResults: true,
  countries: null,
  support: "Email support",
  isActive: true,
  sortOrder: 0,
};

function money(price, currency) {
  if (!price) return "Free";
  try {
    return new Intl.NumberFormat("en-US", { style: "currency", currency, maximumFractionDigits: 2 }).format(price);
  } catch {
    return `${price} ${currency}`;
  }
}

function Yes({ on, children }) {
  return (
    <li className={`d-flex align-items-start gap-2 ${on ? "" : "text-muted-2 text-decoration-line-through"}`}>
      {on ? <Check className="icon-18 text-cat-emerald flex-shrink-0" aria-hidden="true" /> : <X className="icon-18 flex-shrink-0" aria-hidden="true" />}
      <span className="fs-md">{children}</span>
    </li>
  );
}

function Switch({ id, label, hint, checked, onChange }) {
  return (
    <div className="form-check form-switch">
      <input id={id} className="form-check-input" type="checkbox" role="switch" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      <label className="form-check-label fw-medium" htmlFor={id}>
        {label}
      </label>
      {hint && <div className="form-text mt-0">{hint}</div>}
    </div>
  );
}

function PlanForm({ initial, onSaved, onClose }) {
  const [f, setF] = useState(initial);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const set = (k) => (v) => setF((x) => ({ ...x, [k]: v?.target ? v.target.value : v }));

  async function save(e) {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      const body = { ...f };
      const saved = f.id
        ? await api(`/api/admin/plans/${f.id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) })
        : await postJson("/api/admin/plans", body);
      onSaved(saved);
    } catch (e2) {
      setError(e2.message);
      setBusy(false);
    }
  }

  const perSec = f.speedSecPer10k > 0 ? Math.round(10000 / f.speedSecPer10k) : 0;

  return (
    <Modal
      title={f.id ? `Edit plan — ${initial.name}` : "Add a plan"}
      onClose={onClose}
      size="modal-lg"
      footer={
        <>
          <button type="button" className="btn btn-outline-soft" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" form="planForm" className="btn btn-primary d-inline-flex align-items-center gap-2" disabled={busy}>
            {busy && <span className="spinner-border spinner-border-sm" aria-hidden="true" />}
            {f.id ? "Save plan" : "Add plan"}
          </button>
        </>
      }
    >
      <form id="planForm" onSubmit={save}>
        {error && <Alert>{error}</Alert>}
        <div className="row g-3">
          <div className="col-12 col-md-6">
            <label className="form-label fw-semibold" htmlFor="pName">
              Plan name
            </label>
            <input id="pName" className="form-control" value={f.name} onChange={set("name")} maxLength={40} required placeholder="e.g. Gold" />
          </div>
          <div className="col-6 col-md-3">
            <label className="form-label fw-semibold" htmlFor="pPrice">
              Price
            </label>
            <input id="pPrice" type="number" min="0" step="0.01" className="form-control" value={f.price} onChange={set("price")} required />
          </div>
          <div className="col-6 col-md-3">
            <label className="form-label fw-semibold" htmlFor="pCur">
              Currency
            </label>
            <input id="pCur" className="form-control text-uppercase" value={f.currency} onChange={set("currency")} maxLength={3} required placeholder="USD" />
          </div>
          <div className="col-12">
            <label className="form-label fw-semibold" htmlFor="pDesc">
              Short description
            </label>
            <input id="pDesc" className="form-control" value={f.description} onChange={set("description")} maxLength={200} placeholder="Shown on the user's package page" />
          </div>

          <div className="col-12">
            <hr className="my-1" />
            <h3 className="fs-6 fw-semibold text-title mt-2 mb-0">Limits</h3>
          </div>
          <div className="col-12 col-md-6">
            <label className="form-label fw-semibold" htmlFor="pSpeed">
              Speed — seconds per 10,000 numbers
            </label>
            <div className="field-icon">
              <Gauge className="icon-18" aria-hidden="true" />
              <input id="pSpeed" type="number" min="5" max="3600" className="form-control" value={f.speedSecPer10k} onChange={set("speedSecPer10k")} required />
            </div>
            <div className="form-text">
              10,000 numbers in about {f.speedSecPer10k}s (≈{perSec.toLocaleString()}/s). Lower = faster; give cheaper plans a higher number. The real speed also depends
              on WhatsApp.
            </div>
          </div>
          <div className="col-12 col-md-6">
            <label className="form-label fw-semibold" htmlFor="pPer">
              Numbers per filter / list
            </label>
            <input id="pPer" type="number" min="1000" max="1000000" step="1000" className="form-control" value={f.perFilter} onChange={set("perFilter")} required />
            <div className="d-flex flex-wrap gap-1 mt-1">
              {PER_FILTER_PRESETS.map((n) => (
                <button key={n} type="button" className={`btn btn-sm ${Number(f.perFilter) === n ? "btn-primary" : "btn-outline-soft"}`} onClick={() => set("perFilter")(n)}>
                  {n / 1000}k
                </button>
              ))}
            </div>
          </div>
          <div className="col-12 col-md-4">
            <label className="form-label fw-semibold" htmlFor="pQuota">
              Total filter quota
            </label>
            <input id="pQuota" type="number" min="1000" step="1000" className="form-control" value={f.filterQuota} onChange={set("filterQuota")} required />
            <div className="form-text">Numbers a user can filter during the plan.</div>
          </div>
          <div className="col-6 col-md-4">
            <label className="form-label fw-semibold" htmlFor="pWa">
              WhatsApp numbers
            </label>
            <input id="pWa" type="number" min="1" max="500" className="form-control" value={f.maxWhatsApps} onChange={set("maxWhatsApps")} required />
          </div>
          <div className="col-6 col-md-4">
            <label className="form-label fw-semibold" htmlFor="pDays">
              Duration (days)
            </label>
            <input id="pDays" type="number" min="1" max="3650" className="form-control" value={f.durationDays} onChange={set("durationDays")} required />
          </div>

          <div className="col-12">
            <hr className="my-1" />
            <h3 className="fs-6 fw-semibold text-title mt-2 mb-0">Features</h3>
          </div>
          <div className="col-12 col-md-6 d-flex flex-column gap-2">
            <Switch id="fGen" label="Built-in number generator" hint="Users can generate number lists." checked={f.generator} onChange={set("generator")} />
            <Switch id="fMulti" label="Support multiple files" hint="Upload several files into one filter." checked={f.multiFiles} onChange={set("multiFiles")} />
            <Switch
              id="fBoth"
              label="Both results — Exist and Non-Exist"
              hint="Off = users download only the numbers that are on WhatsApp."
              checked={f.bothResults}
              onChange={set("bothResults")}
            />
          </div>
          <div className="col-12 col-md-6">
            <label className="form-label fw-semibold" htmlFor="pSupport">
              Customer support
            </label>
            <select id="pSupport" className="form-select" value={SUPPORT_LEVELS.includes(f.support) ? f.support : "__custom"} onChange={(e) => set("support")(e.target.value === "__custom" ? "" : e.target.value)}>
              {SUPPORT_LEVELS.map((s) => (
                <option key={s}>{s}</option>
              ))}
              <option value="__custom">Custom…</option>
            </select>
            {!SUPPORT_LEVELS.includes(f.support) && (
              <input className="form-control mt-2" value={f.support} onChange={set("support")} maxLength={60} placeholder="e.g. WhatsApp support 9–5" aria-label="Custom support" />
            )}
          </div>
          <div className="col-12">
            <label className="form-label fw-semibold d-flex align-items-center gap-2">
              <Globe className="icon-16" aria-hidden="true" /> Number list generator & filter countries
            </label>
            <CountryPicker value={f.countries} onChange={set("countries")} idPrefix="plan" />
            <div className="form-text">Users on this plan can only generate and filter numbers from these countries (a user&apos;s own country list overrides it).</div>
          </div>

          <div className="col-12">
            <hr className="my-1" />
          </div>
          <div className="col-6 col-md-4">
            <label className="form-label fw-semibold" htmlFor="pOrder">
              Display order
            </label>
            <input id="pOrder" type="number" min="0" max="1000" className="form-control" value={f.sortOrder} onChange={set("sortOrder")} />
          </div>
          <div className="col-6 col-md-8 d-flex align-items-end">
            <Switch id="fActive" label="Plan is active" hint="Inactive plans are hidden from users and cannot be assigned." checked={f.isActive} onChange={set("isActive")} />
          </div>
        </div>
      </form>
    </Modal>
  );
}

export default function PlansManager({ initialPlans }) {
  const [plans, setPlans] = useState(initialPlans);
  const [editing, setEditing] = useState(null);
  const [error, setError] = useState("");

  const reload = async () => setPlans((await api("/api/admin/plans")).plans);

  async function remove(p) {
    if (!window.confirm(`Delete the plan "${p.name}"? This cannot be undone.`)) return;
    try {
      await api(`/api/admin/plans/${p.id}`, { method: "DELETE" });
      setError("");
      reload();
    } catch (e) {
      setError(e.message);
    }
  }

  return (
    <>
      <section className="card mb-3">
        <div className="card-body d-flex flex-wrap align-items-center gap-3">
          <div className="me-auto">
            <h2 className="fs-5 fw-semibold text-title mb-1">Plans</h2>
            <p className="fs-md text-muted-2 mb-0">
              {plans.length} plan(s) · {plans.filter((p) => p.isActive).length} active. Users get the limits and features of their plan.
            </p>
          </div>
          <button type="button" className="btn btn-primary d-inline-flex align-items-center gap-2" onClick={() => setEditing({ ...EMPTY, sortOrder: plans.length + 1 })}>
            <Plus className="icon-18" aria-hidden="true" /> Add plan
          </button>
        </div>
      </section>

      {error && <Alert>{error}</Alert>}

      <ul className="list-unstyled row row-cols-1 row-cols-md-2 row-cols-xxl-3 g-3 mb-4">
        {plans.map((p) => (
          <li key={p.id} className="col">
            <div className={`card h-100 ${p.isActive ? "" : "opacity-75"}`}>
              <div className="card-body d-flex flex-column">
                <div className="d-flex align-items-start gap-2 mb-1">
                  <h3 className="fs-5 fw-bold text-title mb-0 me-auto">{p.name}</h3>
                  <span className={`badge-soft ${p.isActive ? "tint-success" : "tint-danger"}`}>{p.isActive ? "Active" : "Inactive"}</span>
                </div>
                <p className="fs-sm text-muted-2 mb-2">{p.description || "—"}</p>
                <p className="d-flex flex-wrap align-items-baseline gap-1 mb-3">
                  <span className="fs-2 fw-bold text-title lh-1">{money(p.price, p.currency)}</span>
                  <span className="fs-md text-muted-2">/ {p.durationDays} days</span>
                </p>
                <ul className="list-unstyled d-flex flex-column gap-1 mb-3">
                  <Yes on>
                    Speed: 10,000 numbers in ~{p.speedSecPer10k}s
                  </Yes>
                  <Yes on>Up to {p.perFilter.toLocaleString()} numbers per filter</Yes>
                  <Yes on>{p.filterQuota.toLocaleString()} numbers total quota</Yes>
                  <Yes on>
                    {p.maxWhatsApps} WhatsApp number{p.maxWhatsApps === 1 ? "" : "s"}
                  </Yes>
                  <Yes on={p.generator}>Built-in number generator</Yes>
                  <Yes on={p.multiFiles}>Multiple files</Yes>
                  <Yes on={p.bothResults}>Both results (exist & non-exist)</Yes>
                  <Yes on>{p.countries ? `${p.countries.length} countries` : "All countries"}</Yes>
                  <Yes on={p.support !== "No support"}>{p.support}</Yes>
                </ul>
                <div className="d-flex flex-wrap align-items-center gap-2 mt-auto">
                  <span className="fs-sm text-muted-2 me-auto">
                    {p.users} user{p.users === 1 ? "" : "s"}
                  </span>
                  <button type="button" className="btn btn-sm btn-outline-soft d-inline-flex align-items-center gap-1" onClick={() => setEditing(p)}>
                    <Pencil className="icon-14" aria-hidden="true" /> Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-danger d-inline-flex align-items-center gap-1"
                    onClick={() => remove(p)}
                    title={p.users ? "Move its users to another plan first" : "Delete plan"}
                  >
                    <Trash2 className="icon-14" aria-hidden="true" /> Delete
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {editing && (
        <PlanForm
          initial={editing}
          onClose={() => setEditing(null)}
          onSaved={() => {
            setEditing(null);
            setError("");
            reload();
          }}
        />
      )}
    </>
  );
}

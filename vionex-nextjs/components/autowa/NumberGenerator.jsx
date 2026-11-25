"use client";

import { useMemo, useState } from "react";
import { CircleCheckBig, Filter, Globe, Hash, ListOrdered, Phone, Plus, Sparkles } from "lucide-react";
import { generateNumbers, parseGenerator } from "@/lib/numbers";
import { Alert, DownloadMenu, api, fmtDateTime, postJson } from "./ui";

const listHref = (id) => (format) => `/api/generator/${id}/download?format=${format}`;

export default function NumberGenerator({ limit, initialLists = [], allowedDials = null }) {
  const [form, setForm] = useState({ countryCode: allowedDials?.[0]?.dial || "92", phone: "", increment: "1", quantity: "100" });
  const [plus, setPlus] = useState(false);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [created, setCreated] = useState(null);
  const [lists, setLists] = useState(initialLists);

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setCreated(null);
  };

  /* live preview of the first numbers and the last one */
  const preview = useMemo(() => {
    const p = parseGenerator(form, limit);
    if (p.error) return null;
    return {
      first: generateNumbers(p, plus, 0, 5),
      last: p.quantity > 5 ? generateNumbers(p, plus, p.quantity - 1, 1)[0] : null,
      total: p.quantity,
    };
  }, [form, plus, limit]);

  async function onSubmit(e) {
    e.preventDefault();
    const p = parseGenerator(form, limit);
    if (p.error) return setError(p.error);
    setError("");
    setBusy(true);
    try {
      const list = await postJson("/api/generator", {
        countryCode: p.cc,
        startNumber: p.local,
        increment: p.increment,
        quantity: p.quantity,
        plus,
      });
      setCreated(list);
      api("/api/generator").then((r) => setLists(r.lists)).catch(() => {});
    } catch (e2) {
      setError(e2.message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <div className="row g-3 mb-3">
        <div className="col-12 col-xl-7">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="fs-5 fw-semibold text-title mb-1">Generate a number list</h2>
              <p className="text-body-2 mb-4">Build a list, then download it or check it on WhatsApp straight away.</p>

              {error && <Alert>{error}</Alert>}

              <form onSubmit={onSubmit} noValidate>
                <div className="row g-3">
                  <div className="col-12 col-sm-4">
                    <label htmlFor="ngCountry" className="form-label fs-md fw-semibold text-title">
                      Country code
                    </label>
                    {allowedDials ? (
                      /* the admin limited this account to some countries */
                      <select id="ngCountry" className="form-select" value={form.countryCode} onChange={set("countryCode")} required>
                        {allowedDials.map((d) => (
                          <option key={d.dial} value={d.dial}>
                            +{d.dial} {d.label}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <div className="field-icon">
                        <Globe className="icon-18" aria-hidden="true" />
                        <input id="ngCountry" className="form-control" inputMode="numeric" placeholder="92" value={form.countryCode} onChange={set("countryCode")} maxLength={5} required />
                      </div>
                    )}
                  </div>
                  <div className="col-12 col-sm-8">
                    <label htmlFor="ngPhone" className="form-label fs-md fw-semibold text-title">
                      Starting phone number
                    </label>
                    <div className="field-icon">
                      <Phone className="icon-18" aria-hidden="true" />
                      <input id="ngPhone" className="form-control" inputMode="numeric" placeholder="3001234567" value={form.phone} onChange={set("phone")} maxLength={18} required />
                    </div>
                    <div className="form-text">Without the country code. A leading 0 is removed automatically.</div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <label htmlFor="ngIncrement" className="form-label fs-md fw-semibold text-title">
                      Increment
                    </label>
                    <div className="field-icon">
                      <Plus className="icon-18" aria-hidden="true" />
                      <input id="ngIncrement" type="number" min="1" step="1" className="form-control" value={form.increment} onChange={set("increment")} required />
                    </div>
                    <div className="form-text">Added to each number: 1 → …67, …68, …69 · 3 → …67, …70, …73</div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <label htmlFor="ngQuantity" className="form-label fs-md fw-semibold text-title">
                      Quantity
                    </label>
                    <div className="field-icon">
                      <Hash className="icon-18" aria-hidden="true" />
                      <input id="ngQuantity" type="number" min="1" max={limit} step="1" className="form-control" value={form.quantity} onChange={set("quantity")} required />
                    </div>
                    <div className="form-text">Up to {limit.toLocaleString()} numbers per list. Your plan limits filtering, not generating.</div>
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input
                        id="ngPlus"
                        type="checkbox"
                        className="form-check-input"
                        checked={plus}
                        onChange={(e) => {
                          setPlus(e.target.checked);
                          setCreated(null);
                        }}
                      />
                      <label htmlFor="ngPlus" className="form-check-label fs-md text-body-2">
                        Add a <strong>+</strong> before each number (e.g. +923001234567)
                      </label>
                    </div>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary mt-4 d-inline-flex align-items-center gap-2" disabled={busy}>
                  {busy ? <span className="spinner-border spinner-border-sm" aria-hidden="true" /> : <Sparkles className="icon-18" aria-hidden="true" />}
                  {busy ? "Generating…" : "Generate list"}
                </button>
              </form>

              {created && (
                <div className="tint-success rounded-4 p-3 mt-4" role="status">
                  <p className="d-flex align-items-center gap-2 fw-semibold mb-1">
                    <CircleCheckBig className="icon-20 flex-shrink-0" aria-hidden="true" />
                    Your list of {created.quantity.toLocaleString()} numbers is ready.
                  </p>
                  <p className="fs-md mb-3">
                    <bdi>{created.first}</bdi> → <bdi>{created.last}</bdi>
                  </p>
                  <div className="d-flex flex-wrap gap-2">
                    <DownloadMenu href={listHref(created.id)} label="Download list" />
                    <a href={`/live-filter?list=${created.id}`} className="btn btn-success d-inline-flex align-items-center gap-2">
                      <Filter className="icon-16" aria-hidden="true" /> Start filtration
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="col-12 col-xl-5">
          <div className="card h-100">
            <div className="card-body d-flex flex-column">
              <h2 className="d-flex align-items-center gap-2 fs-5 fw-semibold text-title mb-3">
                <ListOrdered className="icon-20" aria-hidden="true" /> Preview
              </h2>
              {preview ? (
                <>
                  <ol className="list-unstyled font-monospace d-flex flex-column gap-2 mb-3">
                    {preview.first.map((n, i) => (
                      <li key={i} className="d-flex align-items-center gap-3 px-3 py-2 rounded-3 bg-soft">
                        <span className="text-muted-2 fs-sm" style={{ minWidth: "2.5em" }}>
                          {i + 1}.
                        </span>
                        <span className="text-title">{n}</span>
                      </li>
                    ))}
                    {preview.last && (
                      <>
                        <li className="text-center text-muted-2">⋮</li>
                        <li className="d-flex align-items-center gap-3 px-3 py-2 rounded-3 bg-soft">
                          <span className="text-muted-2 fs-sm" style={{ minWidth: "2.5em" }}>
                            {preview.total.toLocaleString()}.
                          </span>
                          <span className="text-title">{preview.last}</span>
                        </li>
                      </>
                    )}
                  </ol>
                  <p className="fs-md text-muted-2 mt-auto mb-0">
                    {preview.total.toLocaleString()} number{preview.total === 1 ? "" : "s"} will be generated.
                  </p>
                </>
              ) : (
                <p className="text-body-2 mb-0">Fill in the form to see the first numbers of your list.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ===== Generated lists ===== */}
      <section className="card mb-4">
        <div className="card-body">
          <h2 className="fs-5 fw-semibold text-title mb-1">Your generated lists</h2>
          <p className="fs-md text-muted-2 mb-3">Download any list again, in any format, or send it to the Live Filter.</p>
          {lists.length === 0 ? (
            <p className="text-body-2 mb-0">Lists you generate will appear here.</p>
          ) : (
            <div className="table-responsive">
              <table className="table align-middle mb-0">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Date</th>
                    <th scope="col">Numbers</th>
                    <th scope="col" className="text-end">Increment</th>
                    <th scope="col" className="text-end">Quantity</th>
                    <th scope="col" className="text-end">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {lists.map((l) => (
                    <tr key={l.id} className={created?.id === l.id ? "table-active" : ""}>
                      <td className="text-muted-2">{l.id}</td>
                      <td className="text-nowrap">{fmtDateTime(l.createdAt)}</td>
                      <td className="font-monospace text-nowrap">
                        <bdi>{l.first}</bdi>
                        {l.quantity > 1 && (
                          <>
                            {" "}→ <bdi>{l.last}</bdi>
                          </>
                        )}
                      </td>
                      <td className="text-end">+{l.increment}</td>
                      <td className="text-end fw-semibold">{l.quantity.toLocaleString()}</td>
                      <td className="text-end text-nowrap">
                        <div className="d-inline-flex gap-2">
                          <DownloadMenu href={listHref(l.id)} label="Download" size="btn-sm" className="btn-outline-soft" align="end" />
                          <a href={`/live-filter?list=${l.id}`} className="btn btn-sm btn-outline-soft d-inline-flex align-items-center gap-1">
                            <Filter className="icon-14" aria-hidden="true" /> Filter
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

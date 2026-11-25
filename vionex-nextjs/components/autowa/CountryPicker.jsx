"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { COUNTRIES } from "@/lib/countries";

/* Pick countries: "All countries" or a searchable checklist with Select all / Clear.
   value = null (all countries) or an array of ISO codes. */
export default function CountryPicker({ value, onChange, allLabel = "All countries", idPrefix = "cp" }) {
  const [q, setQ] = useState("");
  const all = value == null;
  const selected = useMemo(() => new Set(value || []), [value]);

  const shown = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return COUNTRIES;
    return COUNTRIES.filter((c) => c.name.toLowerCase().includes(s) || c.code.toLowerCase() === s || `+${c.dial}`.startsWith(s.startsWith("+") ? s : `+${s}`));
  }, [q]);

  const toggle = (code) => {
    const next = new Set(selected);
    next.has(code) ? next.delete(code) : next.add(code);
    onChange([...next]);
  };
  const selectAllShown = () => onChange([...new Set([...selected, ...shown.map((c) => c.code)])]);

  return (
    <div>
      <div className="btn-group mb-2" role="group" aria-label="Countries">
        <button type="button" className={`btn btn-sm ${all ? "btn-primary" : "btn-outline-soft"}`} aria-pressed={all} onClick={() => onChange(null)}>
          {allLabel}
        </button>
        <button type="button" className={`btn btn-sm ${!all ? "btn-primary" : "btn-outline-soft"}`} aria-pressed={!all} onClick={() => !value && onChange([])}>
          Selected countries
        </button>
      </div>

      {!all && (
        <div className="border rounded-3 p-2">
          <div className="d-flex flex-wrap align-items-center gap-2 mb-2">
            <div className="field-icon flex-grow-1" style={{ minWidth: 180 }}>
              <Search className="icon-16" aria-hidden="true" />
              <input
                className="form-control form-control-sm"
                placeholder="Search country or code (e.g. Pakistan, +92)"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                aria-label="Search countries"
              />
            </div>
            <button type="button" className="btn btn-sm btn-outline-soft" onClick={selectAllShown}>
              Select all{q ? " shown" : ""}
            </button>
            <button type="button" className="btn btn-sm btn-outline-soft" onClick={() => onChange([])} disabled={!selected.size}>
              Clear
            </button>
          </div>
          <p className="fs-sm text-muted-2 mb-2">{selected.size ? `${selected.size} selected` : "No country selected yet"}</p>
          <div className="overflow-y-auto scrollbar-thin" style={{ maxHeight: 220 }}>
            <div className="row row-cols-1 row-cols-sm-2 g-1">
              {shown.map((c) => (
                <div key={c.code} className="col">
                  <div className="form-check m-0">
                    <input
                      id={`${idPrefix}-${c.code}`}
                      type="checkbox"
                      className="form-check-input"
                      checked={selected.has(c.code)}
                      onChange={() => toggle(c.code)}
                    />
                    <label htmlFor={`${idPrefix}-${c.code}`} className="form-check-label fs-md">
                      {c.name} <span className="text-muted-2">+{c.dial}</span>
                    </label>
                  </div>
                </div>
              ))}
              {shown.length === 0 && <p className="fs-md text-muted-2 mb-0 px-2">No country matches “{q}”.</p>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

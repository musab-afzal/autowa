"use client";

import { useCallback, useEffect, useState } from "react";
import { CalendarRange, RefreshCw, UserRound } from "lucide-react";
import ApexChart, { baseOptions, dayAxis, daySeries, dayTooltip } from "../ApexChart";
import { Alert, api } from "../ui";

const PRESETS = [
  { key: "7", label: "7 days", days: 7 },
  { key: "30", label: "30 days", days: 30 },
  { key: "90", label: "90 days", days: 90 },
  { key: "month", label: "This month" },
  { key: "custom", label: "Custom" },
];

/* chart colour token → matching theme class for the legend dots */
const COLOR_CLASS = { amber: "amber", brand: "brand", emerald: "emerald", rose: "rose", blue: "blue" };

const ACTIVITY = [
  { key: "generated", label: "Numbers generated", color: "amber" },
  { key: "filtered", label: "Numbers filtered", color: "brand" },
  { key: "onWhatsApp", label: "On WhatsApp", color: "emerald" },
  { key: "notOnWhatsApp", label: "Not on WhatsApp", color: "rose" },
  { key: "newUsers", label: "New users", color: "blue" },
];

function ymd(d) {
  const p = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

function rangeFor(preset, custom) {
  const today = new Date();
  if (preset === "custom") return custom;
  if (preset === "month") return { from: ymd(new Date(today.getFullYear(), today.getMonth(), 1)), to: ymd(today) };
  const from = new Date(today);
  from.setDate(from.getDate() - ((PRESETS.find((p) => p.key === preset)?.days || 30) - 1));
  return { from: ymd(from), to: ymd(today) };
}



export default function AdminCharts({ users }) {
  const [preset, setPreset] = useState("30");
  const [custom, setCustom] = useState(() => rangeFor("30"));
  const [userId, setUserId] = useState("");
  const [visible, setVisible] = useState({ generated: true, filtered: true, onWhatsApp: true, notOnWhatsApp: true, newUsers: false });
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const range = rangeFor(preset, custom);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const r = await api(`/api/admin/stats?from=${range.from}&to=${range.to}&userId=${userId}`);
      setData(r.series);
      setError("");
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, [range.from, range.to, userId]);

  useEffect(() => {
    load();
  }, [load]);

  const shown = ACTIVITY.filter((s) => visible[s.key] && !(s.key === "newUsers" && userId));
  const key = data ? `${data.from}|${data.to}|${userId}|${shown.map((s) => s.key).join()}|${JSON.stringify([data.filtered, data.generated])}` : "";
  const perfKey = data ? `${data.from}|${data.to}|${userId}|${JSON.stringify(data.secPer10k)}` : "";
  const hasPerf = data?.secPer10k.some((v) => v != null);

  return (
    <>
      {/* ===== Filters ===== */}
      <section className="card mb-3">
        <div className="card-body d-flex flex-wrap align-items-center gap-3">
          <span className="d-inline-flex align-items-center gap-2 fw-semibold text-title">
            <CalendarRange className="icon-18" aria-hidden="true" /> Period
          </span>
          <div className="btn-group flex-wrap" role="group" aria-label="Date range">
            {PRESETS.map((p) => (
              <button
                key={p.key}
                type="button"
                className={`btn btn-sm ${preset === p.key ? "btn-primary" : "btn-outline-soft"}`}
                aria-pressed={preset === p.key}
                onClick={() => {
                  if (p.key === "custom") setCustom(range);
                  setPreset(p.key);
                }}
              >
                {p.label}
              </button>
            ))}
          </div>
          {preset === "custom" && (
            <div className="d-flex flex-wrap align-items-center gap-2">
              <input type="date" className="form-control form-control-sm w-auto" aria-label="From" value={custom.from} max={custom.to} onChange={(e) => e.target.value && setCustom((c) => ({ ...c, from: e.target.value }))} />
              <span className="text-muted-2">to</span>
              <input type="date" className="form-control form-control-sm w-auto" aria-label="To" value={custom.to} min={custom.from} max={ymd(new Date())} onChange={(e) => e.target.value && setCustom((c) => ({ ...c, to: e.target.value }))} />
            </div>
          )}
          <div className="d-flex align-items-center gap-2">
            <UserRound className="icon-18 text-muted-2" aria-hidden="true" />
            <select className="form-select form-select-sm w-auto" value={userId} onChange={(e) => setUserId(e.target.value)} aria-label="User">
              <option value="">All users</option>
              {users.map((u) => (
                <option key={u.id} value={u.id}>
                  {u.name} ({u.email})
                </option>
              ))}
            </select>
          </div>
          <button type="button" className="btn btn-sm btn-ghost ms-auto d-inline-flex align-items-center gap-1" onClick={load} disabled={loading}>
            <RefreshCw className="icon-16" aria-hidden="true" /> Refresh
          </button>
        </div>
      </section>

      {error && <Alert>{error}</Alert>}

      {data && (
        <div className="row g-3 mb-4">
          {/* ===== Users activity ===== */}
          <div className="col-12 col-xxl-7">
            <div className="card h-100">
              <div className="card-body">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
                  <h2 className="fs-5 fw-semibold text-title mb-0">Users activity</h2>
                  <div className="d-flex flex-wrap gap-3">
                    {ACTIVITY.filter((s) => !(s.key === "newUsers" && userId)).map((s) => (
                      <div key={s.key} className="form-check form-check-inline m-0">
                        <input id={`act-${s.key}`} type="checkbox" className="form-check-input" checked={visible[s.key]} onChange={(e) => setVisible((v) => ({ ...v, [s.key]: e.target.checked }))} />
                        <label htmlFor={`act-${s.key}`} className="form-check-label fs-md d-inline-flex align-items-center gap-1">
                          <span className={`legend-dot bg-cat-${COLOR_CLASS[s.color]}`} aria-hidden="true" />
                          {s.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                {shown.length ? (
                  <ApexChart
                    height={320}
                    deps={[key]}
                    build={(t) => ({
                      ...baseOptions(t),
                      chart: { ...baseOptions(t).chart, type: "line" },
                      series: shown.map((s) => ({ name: s.label, data: daySeries(data.days, data[s.key]) })),
                      legend: { show: false } /* the checkboxes above are the legend */,
                      colors: shown.map((s) => t[s.color]),
                      stroke: { curve: "smooth", width: 3 },
                      markers: { size: data.days.length <= 31 ? 3 : 0, strokeWidth: 0 },
                      xaxis: dayAxis(),
                      yaxis: { min: 0, forceNiceScale: true, labels: { formatter: (v) => Math.round(v).toLocaleString() } },
                      tooltip: { ...baseOptions(t).tooltip, ...dayTooltip },
                    })}
                  />
                ) : (
                  <p className="text-body-2 py-5 text-center mb-0">Select at least one line to show.</p>
                )}
              </div>
            </div>
          </div>

          {/* ===== System performance ===== */}
          <div className="col-12 col-xxl-5">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <h2 className="fs-5 fw-semibold text-title mb-1">System performance</h2>
                <p className="fs-sm text-muted-2 mb-2">Average WhatsApp response while filtering — lower is faster.</p>
                {hasPerf ? (
                  <ApexChart
                    height={300}
                    deps={[perfKey]}
                    build={(t) => ({
                      ...baseOptions(t),
                      chart: { ...baseOptions(t).chart, type: "line" },
                      series: [
                        { name: "Seconds per 10,000 numbers", type: "line", data: daySeries(data.days, data.secPer10k) },
                        { name: "Avg batch response (ms)", type: "column", data: daySeries(data.days, data.avgBatchMs) },
                      ],
                      colors: [t.violet, t.cyan],
                      stroke: { curve: "smooth", width: [3, 0] },
                      plotOptions: { bar: { borderRadius: 3, columnWidth: data.days.length > 45 ? "80%" : "45%" } },
                      markers: { size: data.days.length <= 31 ? 3 : 0, strokeWidth: 0 },
                      xaxis: dayAxis(),
                      yaxis: [
                        { min: 0, forceNiceScale: true, title: { text: "sec / 10k" }, labels: { formatter: (v) => (v == null ? "" : Math.round(v)) } },
                        { opposite: true, min: 0, forceNiceScale: true, title: { text: "ms / batch" }, labels: { formatter: (v) => (v == null ? "" : Math.round(v)) } },
                      ],
                      tooltip: { ...baseOptions(t).tooltip, ...dayTooltip, shared: true, y: { formatter: (v) => (v == null ? "no filters" : v.toLocaleString()) } },
                    })}
                  />
                ) : (
                  <div className="flex-fill d-flex align-items-center justify-content-center text-center text-body-2 py-5">
                    No filters ran in this period, so there is no performance data yet.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

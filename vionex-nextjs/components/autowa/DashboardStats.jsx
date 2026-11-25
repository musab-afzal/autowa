"use client";

import { useCallback, useEffect, useState } from "react";
import { CalendarRange, CircleAlert, ListOrdered, LogIn, RefreshCw, UserCheck, UserX } from "lucide-react";
import ApexChart, { baseOptions, dayAxis, daySeries, dayTooltip } from "./ApexChart";

const PRESETS = [
  { key: "7", label: "7 days", days: 7 },
  { key: "30", label: "30 days", days: 30 },
  { key: "90", label: "90 days", days: 90 },
  { key: "month", label: "This month" },
  { key: "custom", label: "Custom" },
];

const SERIES = [
  { key: "generated", label: "Numbers generated", color: "brand" },
  { key: "onWhatsApp", label: "On WhatsApp", color: "emerald" },
  { key: "notOnWhatsApp", label: "Not on WhatsApp", color: "rose" },
];

function ymd(d) {
  const p = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

function rangeFor(preset, custom) {
  const today = new Date();
  if (preset === "custom") return custom;
  if (preset === "month") return { from: ymd(new Date(today.getFullYear(), today.getMonth(), 1)), to: ymd(today) };
  const days = PRESETS.find((p) => p.key === preset)?.days || 30;
  const from = new Date(today);
  from.setDate(from.getDate() - (days - 1));
  return { from: ymd(from), to: ymd(today) };
}


function Total({ icon: Icon, tint, label, value }) {
  return (
    <div className="col">
      <div className="d-flex align-items-center gap-3 p-3 rounded-4 bg-soft h-100">
        <span className={`icon-box ${tint} rounded-circle`} aria-hidden="true">
          <Icon />
        </span>
        <span className="lh-sm">
          <span className="d-block fs-4 fw-bold text-title">{value.toLocaleString()}</span>
          <span className="d-block fs-md text-muted-2">{label}</span>
        </span>
      </div>
    </div>
  );
}

export default function DashboardStats() {
  const [preset, setPreset] = useState("30");
  const [custom, setCustom] = useState(() => rangeFor("30"));
  const [visible, setVisible] = useState({ generated: true, onWhatsApp: true, notOnWhatsApp: true });
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const range = rangeFor(preset, custom);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/stats?from=${range.from}&to=${range.to}`, { cache: "no-store" });
      if (res.status === 401) return (window.location.href = "/login");
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Could not load statistics.");
      setData(json);
      setError("");
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, [range.from, range.to]);

  useEffect(() => {
    load();
  }, [load]);

  const shown = SERIES.filter((s) => visible[s.key]);
  /* redraw the charts whenever the period, the visible lines or the numbers change */
  const key = data ? `${data.from}|${data.to}|${shown.map((s) => s.key).join()}|${JSON.stringify(data.totals)}` : "";

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
              <input
                type="date"
                className="form-control form-control-sm w-auto"
                aria-label="From"
                value={custom.from}
                max={custom.to}
                onChange={(e) => e.target.value && setCustom((c) => ({ ...c, from: e.target.value }))}
              />
              <span className="text-muted-2">to</span>
              <input
                type="date"
                className="form-control form-control-sm w-auto"
                aria-label="To"
                value={custom.to}
                min={custom.from}
                max={ymd(new Date())}
                onChange={(e) => e.target.value && setCustom((c) => ({ ...c, to: e.target.value }))}
              />
            </div>
          )}
          <button
            type="button"
            className="btn btn-sm btn-ghost ms-auto d-inline-flex align-items-center gap-1"
            onClick={load}
            disabled={loading}
          >
            <RefreshCw className="icon-16" aria-hidden="true" /> Refresh
          </button>
        </div>
      </section>

      {error && (
        <div className="tint-danger rounded-3 p-3 mb-3 d-flex align-items-center gap-2 fs-md fw-semibold" role="alert">
          <CircleAlert className="icon-20 flex-shrink-0" aria-hidden="true" /> {error}
        </div>
      )}

      {data && (
        <>
          {/* ===== Totals for the period ===== */}
          <section className="row row-cols-1 row-cols-sm-2 row-cols-xl-4 g-3 mb-3">
            <h2 className="visually-hidden">Totals for the selected period</h2>
            <Total icon={ListOrdered} tint="bg-cat-amber text-white" label={`Numbers generated · ${data.totals.files} file(s)`} value={data.totals.generated} />
            <Total icon={LogIn} tint="bg-cat-blue text-white" label="WhatsApp logins" value={data.totals.logins} />
            <Total icon={UserCheck} tint="bg-cat-emerald text-white" label="Found on WhatsApp" value={data.totals.onWhatsApp} />
            <Total icon={UserX} tint="bg-cat-red text-white" label="Not on WhatsApp" value={data.totals.notOnWhatsApp} />
          </section>

          <div className="row g-3 mb-3">
            {/* ===== Numbers per day (line) ===== */}
            <div className="col-12 col-xxl-8">
              <div className="card h-100">
                <div className="card-body">
                  <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
                    <h2 className="fs-5 fw-semibold text-title mb-0">Numbers per day</h2>
                    <div className="d-flex flex-wrap gap-3">
                      {SERIES.map((s) => (
                        <div key={s.key} className="form-check form-check-inline m-0">
                          <input
                            id={`series-${s.key}`}
                            type="checkbox"
                            className="form-check-input"
                            checked={visible[s.key]}
                            onChange={(e) => setVisible((v) => ({ ...v, [s.key]: e.target.checked }))}
                          />
                          <label htmlFor={`series-${s.key}`} className="form-check-label fs-md">
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
                        colors: shown.map((s) => t[s.color]),
                        stroke: { curve: "smooth", width: 3 },
                        markers: { size: data.days.length <= 31 ? 3 : 0, strokeWidth: 0 },
                        xaxis: dayAxis(),
                        tooltip: { ...baseOptions(t).tooltip, ...dayTooltip },
                        yaxis: { min: 0, forceNiceScale: true, labels: { formatter: (v) => Math.round(v).toLocaleString() } },
                      })}
                    />
                  ) : (
                    <p className="text-body-2 py-5 text-center mb-0">Select at least one line to show.</p>
                  )}
                </div>
              </div>
            </div>

            {/* ===== Live filter results (donut) ===== */}
            <div className="col-12 col-xxl-4">
              <div className="card h-100">
                <div className="card-body d-flex flex-column">
                  <h2 className="fs-5 fw-semibold text-title mb-2">Live Filter results</h2>
                  {data.totals.onWhatsApp + data.totals.notOnWhatsApp > 0 ? (
                    <ApexChart
                      height={300}
                      deps={[key, data.totals.onWhatsApp, data.totals.notOnWhatsApp]}
                      build={(t) => ({
                        ...baseOptions(t),
                        chart: { ...baseOptions(t).chart, type: "donut" },
                        series: [data.totals.onWhatsApp, data.totals.notOnWhatsApp],
                        labels: ["On WhatsApp", "Not on WhatsApp"],
                        colors: [t.emerald, t.rose],
                        legend: { ...baseOptions(t).legend, position: "bottom", horizontalAlign: "center" },
                        stroke: { width: 0 },
                        plotOptions: {
                          pie: {
                            donut: {
                              size: "68%",
                              labels: { show: true, total: { show: true, label: "Checked", color: t.axis } },
                            },
                          },
                        },
                      })}
                    />
                  ) : (
                    <div className="flex-fill d-flex flex-column align-items-center justify-content-center text-center py-4">
                      <p className="text-body-2 mb-3">No numbers were filtered in this period.</p>
                      <a href="/live-filter" className="btn btn-sm btn-primary">
                        Open Live Filter
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="row g-3 mb-4">
            {/* ===== WhatsApp logins per day (bars) ===== */}
            <div className="col-12 col-xxl-7">
              <div className="card h-100">
                <div className="card-body">
                  <h2 className="fs-5 fw-semibold text-title mb-2">WhatsApp logins per day</h2>
                  <ApexChart
                    height={280}
                    deps={[key, data.totals.logins]}
                    build={(t) => ({
                      ...baseOptions(t),
                      chart: { ...baseOptions(t).chart, type: "bar" },
                      series: [{ name: "Logins", data: daySeries(data.days, data.logins) }],
                      colors: [t.blue],
                      plotOptions: { bar: { borderRadius: 4, columnWidth: data.days.length > 45 ? "80%" : "45%" } },
                      legend: { show: false },
                      xaxis: dayAxis(),
                        tooltip: { ...baseOptions(t).tooltip, ...dayTooltip },
                      yaxis: { min: 0, forceNiceScale: true, labels: { formatter: (v) => Math.round(v) } },
                    })}
                  />
                </div>
              </div>
            </div>

            {/* ===== Recent logins (table) ===== */}
            <div className="col-12 col-xxl-5">
              <div className="card h-100">
                <div className="card-body">
                  <h2 className="fs-5 fw-semibold text-title mb-3">Recent WhatsApp logins</h2>
                  {data.recentLogins.length ? (
                    <div className="table-responsive">
                      <table className="table align-middle mb-0">
                        <thead>
                          <tr>
                            <th scope="col">Date</th>
                            <th scope="col">WhatsApp</th>
                            <th scope="col">Number</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.recentLogins.map((l, i) => (
                            <tr key={i}>
                              <td className="text-nowrap">
                                {new Date(l.connectedAt).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                                <span className="d-block fs-sm text-muted-2">
                                  {new Date(l.connectedAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                                </span>
                              </td>
                              <td>
                                <span className="fw-medium text-title">{l.label || "WhatsApp"}</span>
                                {l.pushName && <span className="d-block fs-sm text-muted-2">{l.pushName}</span>}
                              </td>
                              <td className="text-nowrap">
                                <bdi>{l.phone ? `+${l.phone}` : "—"}</bdi>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <p className="text-body-2 mb-0">No WhatsApp logins in this period.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

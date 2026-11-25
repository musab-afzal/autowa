"use client";

import { useEffect, useRef, useState } from "react";

/* Reads the Vionex design tokens, exactly like the theme's own chart modules. */
export function readTheme() {
  const root = document.documentElement;
  const cs = getComputedStyle(root);
  const v = (n, f) => (cs.getPropertyValue(n) || "").trim() || f;
  return {
    brand: v("--primary", "#3a1957"),
    cyan: v("--cat-cyan", "#06b6d4"),
    blue: v("--cat-blue", "#1861fb"),
    emerald: v("--cat-emerald", "#10b981"),
    amber: v("--cat-amber", "#f59e0b"),
    rose: v("--cat-rose", "#f43f5e"),
    violet: v("--cat-violet", "#673ce2"),
    success: v("--success", "#00b074"),
    danger: v("--danger", "#f04438"),
    axis: v("--text-muted", "#9a98a6"),
    border: v("--border-color", "#eae8f4"),
    title: v("--text-title", "#0a0a0a"),
    dark: root.getAttribute("data-bs-theme") === "dark",
  };
}

export function baseOptions(t) {
  return {
    chart: {
      fontFamily: "inherit",
      foreColor: t.axis,
      toolbar: { show: false },
      zoom: { enabled: false },
      animations: { easing: "easeinout", speed: 400 },
      parentHeightOffset: 0,
      background: "transparent",
    },
    dataLabels: { enabled: false },
    legend: {
      position: "top",
      horizontalAlign: "left",
      fontSize: "12px",
      labels: { colors: t.axis },
      markers: { size: 5 },
      itemMargin: { horizontal: 8, vertical: 4 },
    },
    grid: { borderColor: t.border, strokeDashArray: 4, padding: { left: 6, right: 6 } },
    tooltip: { theme: t.dark ? "dark" : "light" },
    theme: { mode: t.dark ? "dark" : "light" },
  };
}

/* Daily series on a real date axis: ApexCharts then picks readable, evenly spaced
   labels itself instead of printing (and overlapping) one label per day. */
const dayTs = (ymd) => new Date(`${ymd}T00:00:00`).getTime();

export const daySeries = (days, values) => days.map((d, i) => [dayTs(d), values[i]]);

export function dayAxis() {
  return {
    type: "datetime",
    labels: { datetimeUTC: false, datetimeFormatter: { year: "yyyy", month: "MMM yyyy", day: "d MMM" }, hideOverlappingLabels: true },
    axisBorder: { show: false },
    axisTicks: { show: false },
    tooltip: { enabled: false },
  };
}

export const dayTooltip = { x: { format: "d MMM yyyy" } };

/* Waits for the theme's apexcharts.min.js (loaded by VendorScripts), draws the
   chart from build(theme), and redraws when the data or the colour theme changes. */
export default function ApexChart({ build, deps = [], height = 300, className = "", series }) {
  const el = useRef(null);
  const chart = useRef(null);
  /* live data: when `series` is given it is applied with updateSeries (no redraw flicker) */
  const seriesRef = useRef(series);
  seriesRef.current = series;
  const seriesKey = series ? JSON.stringify(series) : "";
  const [themeKey, setThemeKey] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (window.ApexCharts) return setReady(true);
    const t = setInterval(() => {
      if (window.ApexCharts) {
        clearInterval(t);
        setReady(true);
      }
    }, 100);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const mo = new MutationObserver(() => setThemeKey((k) => k + 1));
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-bs-theme", "data-theme"] });
    return () => mo.disconnect();
  }, []);

  useEffect(() => {
    if (!ready || !el.current) return;
    const opts = build(readTheme());
    opts.chart = { ...opts.chart, height };
    if (seriesRef.current) opts.series = seriesRef.current;
    chart.current?.destroy();
    chart.current = new window.ApexCharts(el.current, opts);
    chart.current.render();
    return () => {
      chart.current?.destroy();
      chart.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready, themeKey, height, ...deps]);

  useEffect(() => {
    if (chart.current && seriesRef.current) chart.current.updateSeries(seriesRef.current, true);
  }, [seriesKey]);

  return (
    <div className={className} style={{ minHeight: height }}>
      {!ready && (
        <div className="d-flex align-items-center justify-content-center" style={{ height }}>
          <span className="spinner-border spinner-border-sm text-primary" aria-hidden="true" />
        </div>
      )}
      <div ref={el} />
    </div>
  );
}

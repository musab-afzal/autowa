/* ==========================================================================
   Vionex - charts.js
   ApexCharts engine ONLY. Deliberately free of jQuery and of any dashboard
   interaction logic (that lives in dashboard.js). Vanilla JS, so the chart
   configuration stays exactly as authored.

   Load order: apexcharts.min.js -> dashboard.js -> charts.js
   ========================================================================== */
/* ==========================================================================
   Global chart helper — shared by every per-page ApexCharts module.
   Wide, category-based charts (area / line / column) overlap and compress on
   narrow screens. Instead of shrinking them, we wrap the chart node in a
   `.chart-scroll` container so on small screens it keeps a readable minimum
   width and scrolls horizontally. Type-driven, so round/sparkline charts
   (donut, radialBar, pie, sparklines, horizontal bars) are never wrapped.
   Idempotent: re-mounts (theme / direction rebuilds) reuse the same wrapper.
   ========================================================================== */
function mountApexChart(el, opts) {
  try {
    var c = (opts && opts.chart) || {};
    var isSparkline = c.sparkline && c.sparkline.enabled;
    var isHorizontalBar =
      opts.plotOptions && opts.plotOptions.bar && opts.plotOptions.bar.horizontal;
    var WIDE = { area: 1, line: 1, bar: 1, candlestick: 1, rangeBar: 1, boxPlot: 1 };
    var count = 0;
    if (opts.xaxis && Array.isArray(opts.xaxis.categories)) {
      count = opts.xaxis.categories.length;
    } else if (
      opts.series &&
      opts.series[0] &&
      Array.isArray(opts.series[0].data)
    ) {
      count = opts.series[0].data.length;
    }
    var needsScroll =
      !isSparkline && !isHorizontalBar && WIDE[c.type] && count >= 8;
    if (
      needsScroll &&
      el &&
      el.parentNode &&
      !el.parentNode.classList.contains("chart-scroll")
    ) {
      var wrap = document.createElement("div");
      wrap.className = "chart-scroll";
      /* Wrapper takes over the chart node's flex role so the card's vertical
         layout is unchanged now that it's a real box (not display: contents). */
      if (el.classList.contains("flex-grow-1")) wrap.classList.add("flex-grow-1");
      /* Busier axes get a proportionally wider floor so marks keep breathing room. */
      var minRem = Math.max(30, Math.min(count * 2.4, 64));
      wrap.style.setProperty("--chart-scroll-min", minRem + "rem");
      el.parentNode.insertBefore(wrap, el);
      wrap.appendChild(el);
      /* Drag-to-pan is a dashboard-interaction concern and lives in
         dashboard.js; call it through the shared namespace so this file never
         depends on the jQuery layer being present. */
      if (window.VionexUI && window.VionexUI.enableDragScroll) {
        window.VionexUI.enableDragScroll(wrap);
      }
    }
  } catch (e) {
    /* Wrapping is best-effort — never let it block chart rendering. */
  }
  return new ApexCharts(el, opts);
}

/* ==========================================================================
   Charts - ApexCharts engine (theme / mode / RTL aware).
   Shared config, one labelled section per chart, then the id -> options
   registry and initialization.
   ========================================================================== */
/* ApexCharts host — reads design tokens so every chart tracks the active theme,
   mode (light/dark) and direction (LTR/RTL). Charts are declared by mount id;
   add an entry to CHARTS to wire a new one. Re-renders on any theme attr change. */
(function () {
  "use strict";
  if (typeof window.ApexCharts === "undefined") return;

  const root = document.documentElement;
  const instances = [];

  /* ===== Shared Chart Config ===== */
  /* current design-token snapshot */
  function readTheme() {
    const cs = getComputedStyle(root);
    const v = (n, f) => (cs.getPropertyValue(n) || "").trim() || f;
    return {
      primary: v("--cat-brand", "#1ccbe5"),
      cyan: v("--cat-cyan", "#06b6d4"),
      blue: v("--cat-blue", "#3b82f6"),
      violet: v("--cat-violet", "#7c3aed"),
      orange: v("--cat-orange", "#d97706"),
      track: v("--track-bg", "#f2f2f2"),
      yellow: v("--cat-yellow", "#ffd60a"),
      lime: v("--cat-lime", "#65a30d"),
      emerald: v("--cat-emerald", "#10b981"),
      amber: v("--cat-amber", "#f59e0b"),
      rose: v("--cat-rose", "#f43f5e"),
      slate: v("--cat-slate", "#94a3b8"),
      magenta: v("--cat-magenta", "#d406b9"),
      red: v("--cat-red", "#b91010"),
      neutral: v("--cat-neutral", "#e8e6f4"),
      grid: v("--border-color", "#eae8f4"),
      gridLine: v("--chart-grid", "#bcc7d8"),
      chartBorder: v("--chart-border", "#a9b6cb"),
      axis: v("--text-muted", "#6a6a6a"),
      surface: v("--surface", "#ffffff"),
      surfacePlain: v("--surface-plain", "#ffffff"),
      title: v("--text-title", "#0d0b1e"),
      info: v("--info", "#2e90fa"),
      infoSoft: v("--info-soft", "#e7f1ff"),
      donutCloud: v("--donut-cloud", "#ececec"),
      donutBlue: v("--donut-blue", "#5cb3f5"),
      donutSlate: v("--donut-slate", "#c7d8e4"),
      donutInk: v("--donut-ink", "#2b2f33"),
      labelOnFill: v("--chart-label-on-fill", "#ffffff"),
      dark: root.getAttribute("data-bs-theme") === "dark",
      rtl: root.getAttribute("dir") === "rtl",
    };
  }

  /* shared baseline every chart extends */
  function base(t) {
    return {
      chart: {
        fontFamily: "inherit",
        foreColor: t.axis,
        toolbar: { show: false },
        zoom: { enabled: false },
        animations: { easing: "easeinout", speed: 450 },
      },
      /* guide lines read on their own token, a step darker than --border-color;
         t.grid stays the fill behind radial tracks */
      grid: { borderColor: t.gridLine, strokeDashArray: 4 },
      dataLabels: { enabled: false },
      legend: { show: false },
      tooltip: { theme: t.dark ? "dark" : "light" },
    };
  }
  const moneyK = (val) => "$" + Math.round(val) + "K";
  /* Full-precision companion of moneyK — for an axis whose steps are smaller
     than the $1K the abbreviated form rounds to, e.g. an instrument price. */
  const money0 = (val) => "$" + Math.round(val).toLocaleString("en-US");

  /* Shared chrome for the gradient area charts — the full-size panels and the
     KPI sparklines alike. They are one component wearing different data, so
     the wash under the curve lives here once instead of in each builder.
     Colours, series, heights and grid direction stay per-chart.

     Four stops rather than a plain from/to: the wash starts on the series
     colour and steps through progressively darker members of the SAME hue on
     the way down, so the body of the area carries depth instead of just
     thinning out. colorStops is given one ramp per series — ApexCharts indexes
     an array-of-arrays by series, so each trace darkens along its own colour.

     Two ramps, because alpha behaves differently against the two grounds: a
     translucent near-black tone greys out over a white card, so light mode
     holds more opacity to keep the deep stops reading as the hue rather than
     as slate. Over a dark card the same tone simply sinks in, so dark mode can
     stay lighter and let the deep end fade toward the surface.

     A fresh object per call — ApexCharts merges options into its own config,
     so a single shared literal would be handed to every instance at once. */
  const AREA_RAMPS = {
    light: [
      { offset: 0, dim: 0, opacity: 0.95 },
      { offset: 35, dim: 0.22, opacity: 0.85 },
      { offset: 70, dim: 0.4, opacity: 0.72 },
      { offset: 100, dim: 0.56, opacity: 0.55 },
    ],
    dark: [
      { offset: 0, dim: 0, opacity: 0.92 },
      { offset: 35, dim: 0.24, opacity: 0.78 },
      { offset: 70, dim: 0.46, opacity: 0.58 },
      { offset: 100, dim: 0.64, opacity: 0.34 },
    ],
  };
  /* Two areas on one plot are drawn one over the other, so at full depth the
     upper trace paints the lower one out. A multi-series panel keeps the same
     colour ramp but thins the alpha so the overlap still reads; a lone series
     has nothing behind it and keeps the full depth. */
  const AREA_OVERLAP_ALPHA = 0.62;
  const areaFill = (t, colors) => {
    const ramp = AREA_RAMPS[t.dark ? "dark" : "light"];
    const alpha = colors.length > 1 ? AREA_OVERLAP_ALPHA : 1;
    return {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        /* dimHue toward black in both modes — the ramp is meant to darken, not
           to track the page ground the way a soft companion tone would */
        colorStops: colors.map((c) =>
          ramp.map((s) => ({
            offset: s.offset,
            color: s.dim ? dimHue(c, s.dim, true) : c,
            opacity: s.opacity * alpha,
          }))
        ),
      },
    };
  };
  /* Every plot with a category axis closes on the same baseline — it carries
     the firmer border tone rather than the lighter guide-line tone, so the
     bottom of an area panel and a column panel read alike. */
  const axisBaseline = (t) => ({ show: true, color: t.chartBorder });

  /* Quiet companion of an accent — blends a hex token toward the page ground
     (white in light mode, black in dark) so a chart can show a softer member of
     the SAME hue instead of dropping to the neutral track. Takes hex because
     every --cat-* token is a literal hex in both modes; returns hex, so nothing
     downstream has to parse a color-mix() string. */
  function dimHue(hex, amount, dark) {
    const target = dark ? 0 : 255;
    const n = parseInt(hex.replace("#", ""), 16);
    const blend = (ch) => Math.round(ch + (target - ch) * amount);
    const r = blend((n >> 16) & 255);
    const g = blend((n >> 8) & 255);
    const b = blend(n & 255);
    return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
  }

  /* ---- shared chart builders (reusable by any section) ---- */
  /* ===== Donut - shared builder ===== */
  function donutOpts(t, series, labels, colors) {
    const o = base(t);
    o.chart.type = "donut";
    o.chart.height = 200;
    o.series = series;
    o.labels = labels;
    o.colors = colors;
    o.stroke = { width: 0 };
    o.plotOptions = {
      pie: { donut: { size: "74%", labels: { show: false } } },
    };
    o.tooltip = {
      theme: t.dark ? "dark" : "light",
      y: { formatter: (v) => v + "%" },
    };
    return o;
  }

  /* Premium donut — flat, soft-palette segments with surface-coloured gaps,
     on-arc % labels and a live interactive centre (slice name + % on hover,
     falling back to a custom total). Click a slice to expand it outward
     (built-in selection). Reusable for any "share of total" breakdown.
     `total` = {label, value} shown when nothing is hovered. */
  /* ===== Premium Donut - shared builder ===== */
  function premiumDonutOpts(t, series, labels, colors, labelColors, total) {
    const o = base(t);
    o.chart.type = "donut";
    o.chart.height = 280;
    /* flat design — no chart/slice drop shadow */
    o.chart.dropShadow = { enabled: false };
    o.series = series;
    o.labels = labels;
    o.colors = colors;
    /* thin surface-coloured separators between contiguous segments */
    o.stroke = { width: 3, colors: [t.surface] };
    /* flat solid fills (no gradient) */
    o.fill = { type: "solid" };
    /* keep the active state engaged (its transform is what pulls the slice out
       on click) — kept subtle so the soft palette isn't darkened harshly */
    o.states = {
      hover: { filter: { type: "lighten", value: 0.04 } },
      active: { filter: { type: "darken", value: 0.08 } },
    };
    o.plotOptions = {
      pie: {
        /* built-in slice selection — clicked segment expands outward, others stay */
        expandOnClick: true,
        donut: {
          size: "68%",
          labels: {
            /* hidden when no `total` is passed — lets the card overlay a centre
               icon instead (the chart hole stays empty) */
            show: !!total,
            name: {
              show: true,
              fontSize: "13px",
              fontFamily: "inherit",
              fontWeight: 600,
              color: t.axis,
              offsetY: 20,
            },
            value: {
              show: true,
              fontSize: "27px",
              fontFamily: "inherit",
              fontWeight: 700,
              color: t.title,
              offsetY: -18,
              formatter: (v) => Math.round(v) + "%",
            },
            total: {
              show: true,
              showAlways: true,
              label: (total && total.label) || "Total",
              fontSize: "12px",
              fontFamily: "inherit",
              fontWeight: 600,
              color: t.axis,
              formatter: () => (total && total.value) || "",
            },
          },
        },
      },
    };
    o.dataLabels = {
      enabled: true,
      formatter: (val) => Math.round(val) + "%",
      style: {
        fontSize: "13px",
        fontWeight: 700,
        fontFamily: "inherit",
        colors: labelColors,
      },
      dropShadow: { enabled: false },
    };
    o.tooltip = {
      theme: t.dark ? "dark" : "light",
      y: { formatter: (v) => v + "%" },
    };
    return o;
  }

  /* Social row mini bar sparkline — compact ApexCharts columns for the Social
     Media Analytics rows; colour + data passed per platform so it tracks theme. */
  /* ===== Mini Bar Sparkline - shared builder ===== */
  function socialBarOpts(t, color, data) {
    const o = base(t);
    o.chart.type = "bar";
    o.chart.height = 34;
    o.chart.sparkline = { enabled: true };
    o.series = [{ name: "Trend", data: data }];
    o.colors = [color];
    o.plotOptions = {
      bar: {
        columnWidth: "55%",
        borderRadius: 2,
        borderRadiusApplication: "end",
      },
    };
    o.tooltip = { enabled: false };
    return o;
  }

  /* KPI spark bars — compact ApexCharts columns where a single bar carries the
     accent colour and the rest sit on the track, so a KPI card can show its
     trend and its current period at a glance. Distributed bars give the
     per-column colouring; `active` is the index of the highlighted bar. */
  /* ===== KPI Spark Bars - shared builder ===== */
  function sparkBarsOpts(t, color, data, active) {
    const o = base(t);
    o.chart.type = "bar";
    o.chart.height = 40;
    o.chart.sparkline = { enabled: true };
    o.series = [{ name: "Trend", data: data }];
    o.colors = data.map((_, i) => (i === active ? color : t.track));
    o.plotOptions = {
      bar: { distributed: true, columnWidth: "45%", borderRadius: 3 },
    };
    o.tooltip = { enabled: false };
    return o;
  }

  /* Tinted KPI spark bars — the same component as above, but the quiet bars are
     a softer member of the accent's OWN hue instead of the neutral track, and
     the columns are taller, wider and fully pill-capped. For KPI tiles that sit
     on a coloured wash, where a grey track reads as washed out against the fill. */
  /* ===== Tinted KPI Spark Bars - shared builder ===== */
  /* Geometry of the mount these bars render into: .chart-inline is a fixed 4rem
     box, so the column width is knowable up front — which is what lets the pill
     radius below be exact rather than a guess. Keep in step with the class. */
  const SPARK_MOUNT_W = 64;
  const SPARK_COL_RATIO = 0.72;

  function tintedSparkBarsOpts(t, color, data, active) {
    const o = sparkBarsOpts(t, color, data, active);
    const dim = dimHue(color, 0.38, t.dark);
    const col = (SPARK_MOUNT_W / data.length) * SPARK_COL_RATIO;
    o.chart.height = 60;
    o.colors = data.map((_, i) => (i === active ? color : dim));
    o.plotOptions.bar.columnWidth = SPARK_COL_RATIO * 100 + "%";
    /* Full pill caps. ApexCharts takes borderRadius in px and clamps it per
       edge, so exactly half a column turns each end into a semicircle; anything
       larger also eats into the vertical sides and bows the shortest bars. */
    o.plotOptions.bar.borderRadius = col / 2;
    o.plotOptions.bar.borderRadiusApplication = "around";
    return o;
  }

  /* Area sparkline — compact smooth gradient area for an in-card metric block
     (e.g. Email Marketing open/click/conversion trend); colour + data per metric. */
  /* ===== Area Sparkline - shared builder ===== */
  function areaSparkOpts(t, color, data) {
    const o = base(t);
    o.chart.type = "area";
    o.chart.height = 56;
    o.chart.sparkline = { enabled: true };
    o.series = [{ name: "Trend", data: data }];
    o.colors = [color];
    o.stroke = { curve: "smooth", width: 2.5 };
    o.fill = areaFill(t, o.colors);
    o.tooltip = { enabled: false };
    return o;
  }

  /* Line sparkline — a bare polyline for a KPI tile that sits ON a colour fill,
     where the area builder's gradient wash would only muddy the ground it is
     drawn over. Straight segments and no fill, so the trace reads as a trend
     mark beside the value rather than as a chart in its own right. Sized to the
     .chart-inline mount (4rem wide), colour + data per metric. */
  /* ===== Line Sparkline - shared builder ===== */
  function lineSparkOpts(t, color, data) {
    const o = base(t);
    o.chart.type = "line";
    o.chart.height = 24;
    o.chart.sparkline = { enabled: true };
    o.series = [{ name: "Trend", data: data }];
    o.colors = [color];
    o.stroke = { curve: "straight", width: 2 };
    o.tooltip = { enabled: false };
    return o;
  }

  /* ===== Radial Bar - shared builder ===== */
  function radialOpts(t, series, labels, colors) {
    const o = base(t);
    o.chart.type = "radialBar";
    o.chart.height = 260;
    o.series = series;
    o.labels = labels;
    o.colors = colors;
    o.stroke = { lineCap: "round" };
    o.plotOptions = {
      radialBar: {
        hollow: { size: "46%" } /* roomy centre for the HTML summary overlay */,
        track: { background: t.gridLine, strokeWidth: "100%", margin: 6 },
        dataLabels: {
          show: false,
        } /* centre value rendered as an HTML overlay */,
      },
    };
    o.tooltip = { enabled: false };
    return o;
  }

  /* Single-value gauge — 270° radial with a soft gradient fill and HTML centre
     overlay. Reusable for any "percent of target" summary (pass series + color). */
  /* ===== Single-value Gauge - shared builder ===== */
  function gaugeOpts(t, series, color) {
    const o = base(t);
    o.chart.type = "radialBar";
    o.chart.height = 260;
    /* Symmetric padding keeps the ring perfectly centred (so the HTML centre
       overlay lines up) while leaving enough room that the round end-caps of the
       270° gauge are never clipped at the bottom. */
    o.grid.padding = { top: 0, bottom: 0, left: 0, right: 0 };
    o.series = series;
    o.colors = [color];
    o.stroke = { lineCap: "round" };
    o.plotOptions = {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        hollow: { size: "64%" },
        track: { background: t.gridLine, strokeWidth: "100%", margin: 4 },
        dataLabels: {
          show: false,
        } /* centre value rendered as an HTML overlay */,
      },
    };
    o.fill = {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "horizontal",
        shadeIntensity: 0.4,
        gradientToColors: [color],
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 0.85,
        stops: [0, 100],
      },
    };
    o.tooltip = { enabled: false };
    return o;
  }

  /* Inline percent ring — a compact RadialBar for a dense row (pipeline stage,
     list item). Sized in the options rather than by its container so it keeps a
     fixed footprint beside text, and the value is an HTML .chart-center overlay
     like the other rings here. Reusable for any "x% complete" row indicator;
     pass `size` (px) when a row needs a larger or smaller ring than the default. */
  /* ===== Mini Radial - shared builder ===== */
  function miniRadialOpts(t, value, color, size) {
    const px = size || 76;
    const o = base(t);
    o.chart.type = "radialBar";
    o.chart.width = px;
    o.chart.height = px;
    /* no axes to leave room for — reclaim the padding ApexCharts reserves */
    o.grid.padding = { top: 0, right: 0, bottom: 0, left: 0 };
    o.series = [value];
    o.colors = [color];
    o.stroke = { lineCap: "round" };
    o.plotOptions = {
      radialBar: {
        /* the band scales with the ring, so a bigger ring needs a roomier
           hollow to keep the stroke from thickening out of proportion */
        hollow: { size: "70%" },
        track: { background: t.gridLine, strokeWidth: "100%", margin: 0 },
        dataLabels: { show: false },
      },
    };
    o.tooltip = { enabled: false };
    return o;
  }

  /* Radar — a profile chart for one or two series measured across a fixed set
     of dimensions (subject mastery, skill coverage, category scores). The only
     family here that reads SHAPE rather than level, so it is the right pick when
     the question is where a profile is strong or thin rather than how big it is.
     Rings, spokes and axis labels take the shared guide-line / axis tones, so it
     tracks mode and preset like every other panel. Reusable: pass the series,
     the category ring and one colour per series. */
  /* ===== Radar - shared builder ===== */
  function radarOpts(t, series, categories, colors) {
    const o = base(t);
    o.chart.type = "radar";
    o.chart.height = 300;
    o.series = series;
    o.colors = colors;
    /* Keep stroke.width a SCALAR here and in anything extending this builder.
       ApexCharts 3.54 reads it as a number while sizing a radar, so a per-series
       ARRAY collapses the plot to zero radius and leaves the category labels
       stacked on the centre point. To distinguish series, vary stroke.dashArray
       and fill.opacity instead — both take per-series arrays safely. */
    o.stroke = { width: 2 };
    /* translucent, so a second series still reads through the first */
    o.fill = { opacity: 0.18 };
    o.markers = { size: 4, strokeWidth: 0, hover: { size: 7 } };
    o.plotOptions = {
      radar: {
        polygons: {
          strokeColors: t.gridLine,
          connectorColors: t.gridLine,
          /* ApexCharts alternates an opaque band between rings by default; it
             sits ON the card face and reads as a second surface, so the ring
             stack is left as bare guide lines in both modes */
          fill: { colors: ["transparent"] },
        },
      },
    };
    o.xaxis = {
      categories: categories,
      labels: { style: { colors: categories.map(() => t.axis), fontSize: "12px" } },
    };
    /* the rings ARE the scale; a numeric gutter would only crowd the labels */
    o.yaxis = { show: false, min: 0, max: 100 };
    o.tooltip = {
      theme: t.dark ? "dark" : "light",
      y: { formatter: (v) => v + "%" },
    };
    return o;
  }

  /* Heatmap — a grid of one cell per (row, column) pair, banded into named
     intensity steps. The right pick when the question is WHEN or WHERE activity
     concentrates rather than how much of it there is: two categorical axes and
     one value, which no other family here can carry at once.
     Banded rather than shaded (enableShades off) so the legend names real
     states instead of a continuous ramp nobody can read a value off. Cells are
     separated by a surface-coloured stroke, the same trick the donut builders
     use, so the grid reads as tiles on the card rather than one block.
     Reusable: pass the series (bottom row FIRST — ApexCharts stacks upward) and
     the colour ranges. */
  /* ===== Heatmap - shared builder ===== */
  function heatmapOpts(t, series, ranges) {
    const o = base(t);
    o.chart.type = "heatmap";
    o.chart.height = 320;
    o.series = series;
    o.stroke = { width: 3, colors: [t.surface] };
    o.plotOptions = {
      heatmap: { radius: 4, enableShades: false, colorScale: { ranges: ranges } },
    };
    o.grid.padding = { left: 8, right: 8 };
    o.xaxis = {
      type: "category",
      axisBorder: axisBaseline(t),
      axisTicks: { show: false },
      tooltip: { enabled: false },
    };
    o.yaxis = { opposite: t.rtl };
    /* the colour scale is the whole reading, so this is one of the few panels
       that shows ApexCharts' own legend — it names the bands and re-colours
       itself with them, which a hand-written swatch row could not */
    o.legend = {
      show: true,
      position: "bottom",
      horizontalAlign: "left",
      fontFamily: "inherit",
      fontSize: "13px",
      labels: { colors: t.axis },
      markers: { size: 6 },
      itemMargin: { horizontal: 10, vertical: 4 },
    };
    o.tooltip = { theme: t.dark ? "dark" : "light" };
    return o;
  }

  /* Bubble — a scatter whose third dimension is the mark's area. For the
     "does more of X buy more of Y, and for how many people?" question, where a
     bar or line would drop either the correlation or the weight behind it.
     Each series is one grouping, so the colours stay a legend of categories
     rather than a scale. Reusable: pass series of {x, y, z} points and one
     colour per series. */
  /* ===== Bubble - shared builder ===== */
  function bubbleOpts(t, series, colors) {
    const o = base(t);
    o.chart.type = "bubble";
    o.chart.height = 320;
    o.series = series;
    o.colors = colors;
    /* translucent, so overlapping cohorts stay countable */
    o.fill = { opacity: 0.72 };
    o.stroke = { width: 0 };
    o.plotOptions = { bubble: { minBubbleRadius: 7, maxBubbleRadius: 32 } };
    o.grid.xaxis = { lines: { show: true } };
    o.grid.yaxis = { lines: { show: true } };
    o.grid.padding = { left: 8, right: 8 };
    o.xaxis = {
      type: "numeric",
      tickAmount: 5,
      axisBorder: axisBaseline(t),
      axisTicks: { show: false },
      tooltip: { enabled: false },
    };
    o.yaxis = { opposite: t.rtl };
    o.tooltip = { theme: t.dark ? "dark" : "light" };
    return o;
  }

  /* ===== Shared axis data ===== */
  const MONTHS = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];

  /* ==========================================================================
     AI Dashboard
     ========================================================================== */

  /* ===== AI Usage Over Time - smooth gradient area, 2 series ===== */
  function aiUsageOpts(t) {
    const o = base(t);
    o.chart.type = "area";
    o.chart.height = 290;
    o.series = [
      { name: "Requests", data: [520, 430, 412, 596, 585, 372, 448, 528, 604, 556, 522, 498] },
      { name: "Orders", data: [258, 352, 404, 398, 300, 792, 686, 470, 412, 358, 330, 356] },
    ];
    o.colors = [t.violet, t.magenta];
    o.stroke = { curve: "smooth", width: 4, lineCap: "round" };
    o.fill = areaFill(t, o.colors);
    /* dotted verticals only — the design reads the months, not the values */
    o.grid.xaxis = { lines: { show: true } };
    o.grid.yaxis = { lines: { show: false } };
    o.grid.padding = { left: 8, right: 8 };
    o.markers = { size: 0, strokeWidth: 3, hover: { size: 7 } };
    o.xaxis = {
      categories: MONTHS,
      axisBorder: axisBaseline(t),
      axisTicks: { show: false },
      tooltip: { enabled: false },
    };
    o.yaxis = {
      min: 0,
      max: 800,
      tickAmount: 4,
      opposite: t.rtl,
      labels: { formatter: moneyK },
    };
    o.tooltip = {
      theme: t.dark ? "dark" : "light",
      shared: true,
      intersect: false,
      y: { formatter: moneyK },
    };
    return o;
  }

  /* ===== Model Performance - stacked columns on full-height tracks ===== */
  function modelPerformanceOpts(t) {
    const o = base(t);
    o.chart.type = "bar";
    o.chart.height = 290;
    o.chart.stacked = true;
    o.series = [
      { name: "GPT", data: [420, 980, 640, 350, 1180, 250, 1180, 350, 420, 250, 640, 1180] },
      { name: "Claude", data: [880, 1520, 1240, 620, 940, 210, 940, 620, 880, 210, 1240, 940] },
      { name: "Gemini", data: [300, 640, 420, 260, 520, 180, 520, 260, 300, 180, 420, 520] },
    ];
    o.colors = [t.violet, t.amber, t.magenta];
    o.plotOptions = {
      bar: {
        columnWidth: "42%",
        borderRadius: 6,
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "last",
        /* the muted track each stack sits in (design: full-height grey column) */
        colors: {
          backgroundBarColors: [t.track],
          backgroundBarOpacity: 1,
          backgroundBarRadius: 6,
        },
      },
    };
    o.grid.xaxis = { lines: { show: false } };
    o.grid.padding = { left: 8, right: 8 };
    o.xaxis = {
      categories: MONTHS,
      axisBorder: axisBaseline(t),
      axisTicks: { show: false },
      tooltip: { enabled: false },
    };
    o.yaxis = {
      min: 0,
      max: 3200,
      tickAmount: 4,
      opposite: t.rtl,
      labels: { formatter: (v) => "$" + Math.round(v) },
    };
    o.tooltip = {
      theme: t.dark ? "dark" : "light",
      shared: true,
      intersect: false,
      y: { formatter: (v) => "$" + v },
    };
    return o;
  }

  /* ===== Token Consumption - smooth gradient area, input vs output ===== */
  function tokenConsumptionOpts(t) {
    const o = base(t);
    o.chart.type = "area";
    o.chart.height = 290;
    o.series = [
      { name: "Input Tokens", data: [432, 386, 524, 468, 562, 638, 724] },
      { name: "Output Tokens", data: [212, 244, 298, 334, 396, 424, 528] },
    ];
    o.colors = [t.violet, t.magenta];
    o.stroke = { curve: "smooth", width: 3, lineCap: "round" };
    o.fill = areaFill(t, o.colors);
    /* dotted horizontals only — the design reads the value bands, not the days */
    o.grid.xaxis = { lines: { show: false } };
    o.grid.yaxis = { lines: { show: true } };
    o.grid.padding = { left: 8, right: 8 };
    o.markers = { size: 0, strokeWidth: 3, hover: { size: 7 } };
    o.xaxis = {
      categories: ["Jan 5", "Jan 6", "Jan 7", "Jan 8", "Jan 9", "Jan 10", "Jan 11"],
      axisBorder: axisBaseline(t),
      axisTicks: { show: false },
      tooltip: { enabled: false },
    };
    o.yaxis = {
      min: 0,
      max: 800,
      tickAmount: 4,
      opposite: t.rtl,
      labels: { formatter: moneyK },
    };
    o.tooltip = {
      theme: t.dark ? "dark" : "light",
      shared: true,
      intersect: false,
      y: { formatter: moneyK },
    };
    return o;
  }

  /* ===== Department Usage - donut share of total ===== */
  function departmentUsageOpts(t) {
    const o = donutOpts(
      t,
      [34, 22, 18, 15, 11],
      ["Engineering", "Marketing", "Sales", "Support", "Product"],
      [t.violet, t.blue, t.emerald, t.orange, t.red],
    );
    o.chart.height = 300;
    /* surface-coloured separators — the design reads five distinct segments */
    o.stroke = { width: 4, colors: [t.surface] };
    return o;
  }

  /* ==========================================================================
     Analytics Dashboard
     ========================================================================== */

  /* ===== Revenue Analytics - smooth gradient area, revenue vs expenses ===== */
  function revenueAnalyticsOpts(t) {
    const o = base(t);
    o.chart.type = "area";
    o.chart.height = 290;
    o.series = [
      { name: "Revenue", data: [408, 366, 330, 402, 470, 452, 486, 542, 512, 566, 638, 676] },
      { name: "Expenses", data: [400, 358, 322, 394, 462, 444, 478, 534, 504, 558, 630, 668] },
    ];
    o.colors = [t.violet, t.amber];
    /* the expenses trace shadows revenue as a dashed overlay in the design */
    o.stroke = { curve: "smooth", width: 3, lineCap: "round", dashArray: [0, 5] };
    o.fill = areaFill(t, o.colors);
    /* dotted horizontals only — the design reads the value bands, not the months */
    o.grid.xaxis = { lines: { show: false } };
    o.grid.yaxis = { lines: { show: true } };
    o.grid.padding = { left: 8, right: 8 };
    o.markers = { size: 0, strokeWidth: 3, hover: { size: 7 } };
    o.xaxis = {
      categories: MONTHS,
      axisBorder: axisBaseline(t),
      axisTicks: { show: false },
      tooltip: { enabled: false },
    };
    o.yaxis = {
      min: 0,
      max: 800,
      tickAmount: 4,
      opposite: t.rtl,
      labels: { formatter: moneyK },
    };
    o.tooltip = {
      theme: t.dark ? "dark" : "light",
      shared: true,
      intersect: false,
      y: { formatter: moneyK },
    };
    return o;
  }

  /* ===== Sales Performance - stacked columns by product category ===== */
  function salesPerformanceOpts(t) {
    const o = base(t);
    o.chart.type = "bar";
    o.chart.height = 340;
    o.chart.stacked = true;
    o.series = [
      { name: "Electronics", data: [38, 42, 34, 46, 52, 48, 58, 64] },
      { name: "Clothing", data: [30, 34, 28, 38, 44, 40, 48, 54] },
      { name: "Software", data: [32, 38, 32, 42, 48, 46, 52, 58] },
      { name: "Services", data: [24, 26, 22, 30, 34, 32, 38, 42] },
    ];
    o.colors = [t.violet, t.cyan, t.emerald, t.amber];
    o.plotOptions = {
      bar: {
        columnWidth: "38%",
        borderRadius: 6,
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "last",
      },
    };
    o.grid.xaxis = { lines: { show: false } };
    o.grid.padding = { left: 8, right: 8 };
    o.xaxis = {
      categories: MONTHS.slice(0, 8),
      axisBorder: axisBaseline(t),
      axisTicks: { show: false },
      tooltip: { enabled: false },
    };
    o.yaxis = {
      min: 0,
      max: 240,
      tickAmount: 4,
      opposite: t.rtl,
      labels: { formatter: moneyK },
    };
    o.tooltip = {
      theme: t.dark ? "dark" : "light",
      shared: true,
      intersect: false,
      y: { formatter: moneyK },
    };
    return o;
  }

  /* ===== Device Analytics - donut share of sessions by device ===== */
  function deviceAnalyticsOpts(t) {
    const o = donutOpts(
      t,
      [20, 50, 30],
      ["Desktop", "Mobile", "Tablet"],
      [t.emerald, t.orange, t.violet],
    );
    o.chart.height = 300;
    /* surface-coloured separators — the design reads three distinct segments */
    o.stroke = { width: 4, colors: [t.surface] };
    /* roomy hollow: the headline share is an HTML .chart-center overlay */
    o.plotOptions.pie.donut.size = "72%";
    return o;
  }

  /* Compact donut for the paired Audience Analytics breakdowns — same ring on
     both, so only the series, labels and colours differ. The headline total is
     an HTML .chart-center overlay, hence the roomy hollow. */
  /* ===== Audience Breakdown Donut - shared builder ===== */
  function audienceDonutOpts(t, series, labels, colors) {
    const o = donutOpts(t, series, labels, colors);
    o.chart.height = 210;
    o.stroke = { width: 4, colors: [t.surface] };
    o.plotOptions.pie.donut.size = "64%";
    return o;
  }

  /* ===== User Types - donut share of audience ===== */
  function userTypesOpts(t) {
    return audienceDonutOpts(
      t,
      [58.4, 31.2, 10.4],
      ["New Users", "Returning", "Anonymous"],
      [t.violet, t.cyan, t.neutral],
    );
  }

  /* ===== Sessions by Channel - donut share of sessions ===== */
  function sessionsByChannelOpts(t) {
    return audienceDonutOpts(
      t,
      [58.4, 31.2, 10.4],
      ["Mobile App", "Web Browser", "API"],
      [t.violet, t.emerald, t.amber],
    );
  }

  /* ===== Real-Time Users - columns with on-top value labels ===== */
  function realTimeUsersOpts(t) {
    const o = base(t);
    o.chart.type = "bar";
    o.chart.height = 360;
    /* This card pins the chart to its bottom edge (the card body distributes
       free space), so drop the 15px of slack ApexCharts reserves by default —
       it would read as a gap under the plot. */
    o.chart.parentHeightOffset = 0;
    o.series = [
      { name: "Active Users", data: [2.3, 3.1, 4, 10.1, 4, 3.6, 3.2, 2.3, 1.4, 0.8] },
    ];
    o.colors = [t.blue];
    o.plotOptions = {
      bar: { columnWidth: "42%", borderRadius: 8, borderRadiusApplication: "end" },
    };
    /* the value sits above each column, so the y-axis itself is redundant */
    o.dataLabels = {
      enabled: true,
      offsetY: -22,
      formatter: (v) => v + "%",
      style: { fontSize: "11px", fontWeight: 400, colors: [t.axis] },
    };
    o.grid.xaxis = { lines: { show: false } };
    o.grid.yaxis = { lines: { show: true } };
    o.grid.padding = { left: 8, right: 8, top: 8 };
    o.xaxis = {
      categories: MONTHS.slice(0, 9).concat(["Oct"]),
      axisBorder: axisBaseline(t),
      axisTicks: { show: false },
      tooltip: { enabled: false },
    };
    o.yaxis = { min: 0, max: 12, tickAmount: 4, labels: { show: false } };
    o.tooltip = {
      theme: t.dark ? "dark" : "light",
      y: { formatter: (v) => v + "%" },
    };
    return o;
  }

  /* ===== CRM Dashboard — Deal Performance - smooth gradient area, 2 series =====
     Same shape as aiUsageOpts, with the grid flipped: this design reads the
     values off horizontal rules rather than separating the months. */
  function dealPerformanceOpts(t) {
    const o = base(t);
    o.chart.type = "area";
    o.chart.height = 400;
    o.series = [
      { name: "Revenue", data: [55, 72, 84, 71, 70, 88, 80] },
      { name: "Closed Deals", data: [46, 55, 50, 44, 52, 108, 104] },
    ];
    o.colors = [t.emerald, t.blue];
    o.stroke = { curve: "smooth", width: 4, lineCap: "round" };
    o.fill = areaFill(t, o.colors);
    o.grid.xaxis = { lines: { show: false } };
    o.grid.yaxis = { lines: { show: true } };
    o.grid.padding = { left: 8, right: 8 };
    o.markers = { size: 0, strokeWidth: 3, hover: { size: 7 } };
    o.xaxis = {
      categories: MONTHS.slice(0, 7),
      axisBorder: axisBaseline(t),
      axisTicks: { show: false },
      tooltip: { enabled: false },
    };
    o.yaxis = { min: 0, max: 120, tickAmount: 4, opposite: t.rtl };
    o.tooltip = { theme: t.dark ? "dark" : "light", shared: true, intersect: false };
    return o;
  }

  /* ===== CRM Dashboard — Sales Pipeline stage rings =====
     One inline ring per funnel stage, declared as data and expanded into the
     registry below. Every ring is the same blue: the tile behind it already
     carries the stage hue, so colouring the ring too would read as a second,
     competing signal rather than a comparable "share of stage one" figure. */
  const CRM_PIPELINE_RINGS = [
    { id: "crmStageNewLead", value: 100 },
    { id: "crmStageQualified", value: 65 },
    { id: "crmStageProposal", value: 41 },
    { id: "crmStageNegotiation", value: 26 },
    { id: "crmStageWon", value: 17 },
  ];

  /* ===== CRM Dashboard — Lead Source Attribution - donut share of leads ===== */
  function crmLeadSourceOpts(t) {
    const o = donutOpts(
      t,
      [38.4, 12.6, 24.8, 6, 18.2],
      ["Organic Search", "Social Media", "Direct", "Email", "Referral"],
      [t.violet, t.amber, t.emerald, t.magenta, t.blue],
    );
    o.chart.height = 340;
    /* surface-coloured separators — the design reads five distinct segments */
    o.stroke = { width: 4, colors: [t.surface] };
    /* roomy hollow: the total is an HTML .chart-center overlay */
    o.plotOptions.pie.donut.size = "68%";
    return o;
  }

  /* ===== CRM Dashboard — Key Metrics sparklines =====
     One compact trend per KPI card. Every card is the same component, so the
     set is declared as data and expanded into the registry below rather than
     written out five times; `hue` names a key on the theme snapshot, so the
     colours track the active preset and mode like every other chart. */
  const CRM_KPI_SPARKS = [
    { id: "crmRevenueSpark", hue: "violet", data: [18, 20, 19, 22, 23, 27, 29, 34] },
    { id: "crmOpenDealsSpark", hue: "blue", data: [24, 19, 16, 27, 26, 28, 27, 31] },
    { id: "crmNewLeadsSpark", hue: "emerald", data: [15, 16, 15, 21, 34, 22, 23, 26] },
    { id: "crmWonDealsSpark", hue: "amber", data: [28, 26, 19, 15, 22, 31, 28, 25] },
    { id: "crmConversionSpark", hue: "primary", data: [27, 25, 21, 16, 20, 29, 27, 30] },
  ];

  /* ===== E-commerce Dashboard — KPI spark bars =====
     One six-period trend per KPI card, highlighting the current period. Same
     data-driven expansion as the CRM sparklines: `hue` names a key on the
     theme snapshot so the accent bar tracks the active preset and mode. */
  const ECOM_KPI_SPARKS = [
    { id: "ecomIncomeSpark", hue: "blue", data: [12, 16, 10, 32, 18, 24], active: 3 },
    { id: "ecomOrderSpark", hue: "orange", data: [8, 14, 20, 28, 12, 16], active: 3 },
    { id: "ecomProfitSpark", hue: "emerald", data: [16, 12, 24, 30, 20, 16], active: 3 },
    { id: "ecomPendingSpark", hue: "violet", data: [12, 20, 16, 34, 14, 8], active: 3 },
    { id: "ecomExpensesSpark", hue: "rose", data: [12, 20, 16, 34, 14, 8], active: 3 },
  ];

  /* ===== E-commerce Dashboard — store performance spark bars =====
     The same spark-bar component as the KPI row, on the compact performance
     tiles. Emerald throughout by design: these four read as one "current
     period is up" group rather than four separately-hued metrics. */
  const ECOM_PERF_SPARKS = [
    { id: "ecomVisitorsSpark", hue: "emerald", data: [22, 16, 32, 40, 27, 22], active: 3 },
    { id: "ecomConversionSpark", hue: "emerald", data: [18, 24, 14, 40, 21, 26], active: 3 },
    { id: "ecomAbandonedSpark", hue: "emerald", data: [26, 14, 30, 40, 19, 23], active: 3 },
    { id: "ecomProductsSpark", hue: "emerald", data: [15, 27, 20, 40, 24, 17], active: 3 },
  ];

  /* ===== E-commerce Dashboard — Revenue Overview - smooth gradient area, 2 series =====
     Structurally the same chart as the CRM Deal Performance panel — Jan–Jul on
     horizontal rules, emerald against blue — so it is built from that options
     set and only the two series are swapped for the store's metrics. */
  function ecomRevenueOverviewOpts(t) {
    const o = dealPerformanceOpts(t);
    o.series = [
      { name: "Revenue", data: [52, 74, 80, 76, 74, 90, 88] },
      { name: "Total Orders", data: [44, 56, 52, 42, 54, 116, 110] },
    ];
    return o;
  }

  /* ===== E-commerce Dashboard — Payment Method share rings =====
     One concentric ring per payment method, sized by its share of checkouts.
     The shared radial builder already hides Apex's own data labels, so the
     headline figure in the middle is the HTML .chart-center overlay. */
  function ecomPaymentMethodOpts(t) {
    return radialOpts(
      t,
      [45, 30, 15, 10],
      ["Credit Card", "UPI", "Cash On Delivery", "Other"],
      [t.blue, t.emerald, t.orange, t.rose]
    );
  }

  /* ===== E-commerce Dashboard — Sales by Channel - donut share of revenue =====
     The same donut component as the CRM Lead Source panel: four marketplaces
     read as shares of one total. "Others" is the slate token rather than a
     fifth hue — it is the remainder, not a channel competing for attention.
     The centre carries an HTML .chart-center overlay, so Apex draws no label. */
  function ecomSalesByChannelOpts(t) {
    const o = donutOpts(
      t,
      [52, 18, 18, 12],
      ["Walmart", "Amazon", "eBay", "Others"],
      [t.blue, t.amber, t.violet, t.slate],
    );
    o.chart.height = 260;
    /* surface-coloured separators — the design reads four distinct segments */
    o.stroke = { width: 4, colors: [t.surface] };
    /* roomy hollow: the channel glyph sits in the middle as an HTML overlay */
    o.plotOptions.pie.donut.size = "70%";
    return o;
  }

  /* ===== E-commerce Dashboard — Order Analytics - stacked columns on full-height tracks =====
     Same component as the AI Model Performance panel — twelve months stacked on
     muted full-height tracks — so it is built from that options set and only the
     series, their colours and the axis ceiling change. */
  function ecomOrderAnalyticsOpts(t) {
    const o = modelPerformanceOpts(t);
    o.series = [
      { name: "Completed", data: [520, 780, 560, 300, 900, 220, 880, 420, 700, 260, 640, 960] },
      { name: "Processing", data: [180, 620, 300, 180, 260, 90, 240, 200, 280, 120, 340, 300] },
      { name: "Pending", data: [420, 240, 620, 520, 500, 160, 460, 560, 420, 240, 380, 420] },
      { name: "Cancelled", data: [90, 60, 110, 80, 70, 40, 60, 90, 70, 50, 210, 80] },
    ];
    o.colors = [t.violet, t.magenta, t.amber, t.red];
    o.yaxis.max = 2000;
    return o;
  }

  /* ===== Finance Dashboard — Revenue vs Expenses - smooth gradient area, 2 series =====
     Structurally the same panel as the CRM Deal Performance chart — Jan–Jul on
     horizontal rules, emerald against blue, 0–120 in four steps — so it is built
     from that options set and only the second series is relabelled. */
  function finRevenueExpensesOpts(t) {
    const o = dealPerformanceOpts(t);
    o.series = [
      { name: "Revenue", data: [55, 72, 84, 71, 70, 88, 80] },
      { name: "Expenses", data: [46, 55, 50, 44, 52, 108, 104] },
    ];
    return o;
  }

  /* ===== Finance Dashboard — KPI spark bars =====
     One tinted six-period trend per KPI tile, highlighting the current period.
     Every tile carries the same profile by design, so the heights live here
     once; `hue` names a key on the theme snapshot, so both the accent bar and
     its tinted companions track the active preset and mode. */
  const FIN_SPARK_DATA = [29, 21, 43, 54, 36, 29];
  const FIN_KPI_SPARKS = [
    { id: "finBalanceSpark", hue: "blue" },
    { id: "finRevenueSpark", hue: "emerald" },
    { id: "finProfitSpark", hue: "magenta" },
    { id: "finExpensesSpark", hue: "red" },
    { id: "finCashFlowSpark", hue: "cyan" },
    { id: "finMarginSpark", hue: "orange" },
    { id: "finRoiSpark", hue: "violet" },
    { id: "finInvestmentSpark", hue: "amber" },
  ];

  /* ===== Finance Dashboard — Financial Goal gauges =====
     One full-circle ring per goal card, filling the card's gauge well. Every
     card is the same component wearing a different goal, so the set is declared
     as data and expanded into the registry below; `hue` names a key on the
     theme snapshot, so each ring tracks the active preset and mode. The size is
     fixed here (not by the container) because the ring shares its box with the
     HTML .chart-center overlay that carries the raised amount. */
  const FIN_GOAL_RING_SIZE = 168;
  /* Thin band on a roomy hollow — the ring frames the raised amount rather than
     competing with it, and the hollow has to clear two lines of HTML overlay. */
  function finGoalRingOpts(t, value, color) {
    const o = miniRadialOpts(t, value, color, FIN_GOAL_RING_SIZE);
    o.plotOptions.radialBar.hollow.size = "74%";
    return o;
  }
  const FIN_GOAL_RINGS = [
    { id: "finGoalRevenueRing", value: 81, hue: "blue" },
    { id: "finGoalEmergencyRing", value: 82, hue: "emerald" },
    { id: "finGoalProfitRing", value: 69, hue: "orange" },
    { id: "finGoalPortfolioRing", value: 81, hue: "violet" },
  ];

  /* ===== Finance Dashboard — Portfolio Allocation - donut share of holdings =====
     The same donut component as the CRM Lead Source panel, one step smaller so
     it sits beside its legend inside a nested card. The centre carries an HTML
     .chart-center overlay, so Apex draws no label. */
  function finPortfolioAllocationOpts(t) {
    const o = donutOpts(
      t,
      [42, 22, 16, 10, 10],
      ["US Equities", "Bonds", "Real Estate", "Crypto", "Cash"],
      [t.blue, t.emerald, t.violet, t.amber, t.slate],
    );
    o.chart.height = 190;
    /* separators in the card's own face — the design reads five distinct holdings */
    o.stroke = { width: 4, colors: [t.surfacePlain] };
    o.plotOptions.pie.donut.size = "62%";
    return o;
  }

  /* ===== Finance Dashboard — Investment Portfolio - premium donut =====
     Share of portfolio value by asset class, on the premium donut: on-arc
     percentages and surface-coloured gaps. No `total` is passed, so the hole
     stays empty for the card's HTML .chart-center emblem. */
  function finInvestmentMixOpts(t) {
    const colors = [t.blue, t.violet, t.amber, t.slate];
    const o = premiumDonutOpts(
      t,
      [30, 25, 15, 30],
      ["Stocks", "Mutual Funds", "Bonds", "Other Assets"],
      colors,
      colors.map(() => t.labelOnFill),
    );
    /* broader band than the shared default — the design leans on the ring, and
       the hole only has to clear the card's centre emblem */
    o.plotOptions.pie.donut.size = "60%";
    return o;
  }

  /* ===== Finance Dashboard — Revenue Sources - premium donut =====
     The same panel as the Investment Portfolio mix above, wearing the revenue
     split instead of the asset split. */
  function finRevenueSourcesOpts(t) {
    const colors = [t.blue, t.emerald, t.amber, t.slate];
    const o = premiumDonutOpts(
      t,
      [30, 25, 15, 30],
      ["Product Sales", "Subscriptions", "Services", "Partnerships"],
      colors,
      colors.map(() => t.labelOnFill),
    );
    o.plotOptions.pie.donut.size = "60%";
    return o;
  }

  /* ===== Investment Dashboard — KPI spark bars =====
     One six-period trend per KPI card, highlighting the current period. Same
     data-driven expansion as the e-commerce row, and emerald throughout by
     design: the five cards read as one "every metric is up" group rather than
     five separately-hued measures, so the hue lives here once. */
  const INV_KPI_SPARK_HUE = "emerald";
  const INV_KPI_SPARKS = [
    { id: "invPortfolioValueSpark", data: [10, 14, 12, 24, 18, 22], active: 3 },
    { id: "invTotalReturnsSpark", data: [12, 16, 20, 28, 22, 18], active: 3 },
    { id: "invDividendYieldSpark", data: [14, 18, 16, 26, 20, 22], active: 3 },
    { id: "invHoldingsSpark", data: [10, 14, 12, 22, 18, 16], active: 3 },
    { id: "invNetPnlSpark", data: [12, 16, 20, 30, 24, 22], active: 3 },
  ];

  /* ===== Investment Dashboard — Portfolio Performance - daily gradient area =====
     Not the monthly Deal Performance panel: the design plots the portfolio day
     by day across Jan–Jul, so the character IS the volatility — angular
     segments on a dense series, not a smoothed trend through seven points.
     Values below are the design's own trace, in $K, one per trading day. */
  const INV_PERF_VALUES = [
    83.3, 79.4, 84.1, 85.1, 69.6, 88.6, 92.7, 95.7, 99.8, 91.2, 98.3,
    103.8, 102.3, 102.1, 88.4, 84.7, 75.8, 81.9, 76.5, 80.8, 73.5, 74.6,
    86.5, 87.5, 84.7, 74, 69.7, 57.5, 61.5, 64.7, 54.7, 58.3, 55.5, 57.9,
    48.1, 27, 38.1, 47.3, 48.2, 59.3, 65.4, 70.9, 48.1, 42.2, 47.7, 62.9,
    64.1, 61.4, 38, 29.8, 30.8, 39.2, 51.9, 41, 31.1, 42.5, 44, 56.5, 65.3,
    69.4, 66.2, 64.7, 90.8, 92.4, 91, 65, 62.2, 49.3, 49, 67, 66.3, 67.7,
    82.2, 84.1, 94, 91.2, 76.6, 68.8, 69.9, 68.8, 65.9, 56.8, 58.1, 63.9,
    85.6, 84.3, 84.3, 91.8, 96.8, 99.5, 101.5, 93.6, 80.3, 72.7, 70.7,
    74.6, 76.2, 81.1, 88.2, 99.6, 108.3, 113.2, 120.5, 124.4, 127.5, 156,
    158.8, 164.5, 164.3, 160.1, 161.9, 173.8, 181.4, 178.1, 171.7, 171.7,
    169.9, 167.2, 168.8, 171, 174, 172.1, 173.7, 176.4, 183.7, 189.9,
    188.6, 188.9, 195.3, 195.6, 200.9, 213.8,
  ];
  /* Name only the days that open a month; every other category renders blank.
     That is what leaves seven labels under a 132-point axis, and unlike a
     datetime axis it places them identically in RTL (where Apex shifts its own
     date ticks by one interval). */
  const INV_PERF_MONTHS = MONTHS.slice(0, 7);
  const INV_PERF_STEP = INV_PERF_MONTHS.length / INV_PERF_VALUES.length;
  const INV_PERF_CATEGORIES = INV_PERF_VALUES.map((_, i) => {
    const slot = i * INV_PERF_STEP;
    return slot % 1 < INV_PERF_STEP ? INV_PERF_MONTHS[Math.floor(slot)] : "";
  });

  function invPortfolioPerformanceOpts(t) {
    const o = base(t);
    o.chart.type = "area";
    /* tall enough that the plot fills the panel beside the allocation card
       rather than leaving a dead band above the stat tiles */
    o.chart.height = 400;
    o.series = [{ name: "Portfolio Value", data: INV_PERF_VALUES }];
    o.colors = [t.blue];
    /* straight, not smooth — a spline would round off the daily spikes that
       are the whole point of the panel */
    o.stroke = { curve: "straight", width: 3, lineCap: "round" };
    o.fill = areaFill(t, o.colors);
    /* solid rules, horizontals only: at this density the dashed default reads
       as noise behind the trace */
    o.grid.strokeDashArray = 0;
    o.grid.xaxis = { lines: { show: false } };
    o.grid.yaxis = { lines: { show: true } };
    o.grid.padding = { left: 8, right: 8 };
    o.markers = { size: 0, strokeWidth: 3, hover: { size: 5 } };
    o.xaxis = {
      categories: INV_PERF_CATEGORIES,
      axisBorder: axisBaseline(t),
      /* off, not on: a category axis hangs one tick per day, and 132 of them
         read as a comb rather than as the month marks the design draws */
      axisTicks: { show: false },
      tooltip: { enabled: false },
    };
    o.yaxis = {
      min: 20,
      max: 240,
      tickAmount: 11,
      opposite: t.rtl,
      /* the band runs to $20K so the deepest troughs stay inside the plot, but
         the design labels only the rules from $40K up — the baseline carries
         the axis line instead of a figure */
      labels: { formatter: (v) => (v <= 20 ? "" : moneyK(v)) },
    };
    o.tooltip = {
      theme: t.dark ? "dark" : "light",
      intersect: false,
      /* most categories are deliberately unnamed, so the title would be blank */
      x: { show: false },
      y: { formatter: moneyK },
    };
    return o;
  }

  /* ===== Investment Dashboard — Market Movers sparklines =====
     One intraday trace per quote, on the shared area-sparkline builder. Hue
     carries the direction rather than a per-symbol identity — every gainer is
     emerald and every loser orange — so a row's trend line and its change pill
     say the same thing. Short and wide: the mount is a fixed 7.5rem box, so the
     series is kept to eight points and the height trimmed well below the
     builder's default to keep the line legible inside a quote row. */
  const INV_MOVER_SPARK_H = 28;
  const INV_MOVER_SPARKS = [
    { id: "invMoverRelianceSpark", hue: "emerald", data: [18, 16, 21, 19, 24, 22, 27, 31] },
    { id: "invMoverTcsSpark", hue: "emerald", data: [15, 19, 17, 23, 21, 26, 25, 30] },
    { id: "invMoverHdfcSpark", hue: "orange", data: [31, 28, 30, 24, 26, 21, 22, 18] },
    { id: "invMoverIrfcSpark", hue: "orange", data: [29, 30, 25, 27, 22, 23, 19, 17] },
  ];

  /* ==========================================================================
     Cryptocurrency Dashboard
     ========================================================================== */

  /* ===== Market Overview - intraday BTC/USD session =====
     One trading session, told the way a market panel tells it: candles on top,
     a volume strip beneath, both reading from the SAME array so the two plots
     can never drift apart. [o, h, l, c] in USD; v is turnover in $M.

     The session opens at 64,730 and closes at 67,450 — deliberately the same
     last price and the same +4.2% the page's ticker and Top Gainers row show,
     so the three readouts agree instead of each inventing its own number.

     Thirteen two-hourly candles rather than an hourly series: the mount helper
     widens any category chart past eight points in proportion to the count, and
     an hourly session would floor the pair near 58rem — wide enough to put a
     scrollbar under the card on a desktop column. */
  const CRYPTO_SESSION = [
    { t: "00:00", o: 64730, h: 65180, l: 64610, c: 65020, v: 420 },
    { t: "02:00", o: 65020, h: 65420, l: 64880, c: 65310, v: 380 },
    { t: "04:00", o: 65310, h: 65380, l: 64520, c: 64680, v: 510 },
    { t: "06:00", o: 64680, h: 64760, l: 63980, c: 64120, v: 720 },
    { t: "08:00", o: 64120, h: 64890, l: 64050, c: 64760, v: 640 },
    { t: "10:00", o: 64760, h: 65340, l: 64700, c: 65180, v: 460 },
    { t: "12:00", o: 65180, h: 65860, l: 65090, c: 65740, v: 520 },
    { t: "14:00", o: 65740, h: 65820, l: 65210, c: 65380, v: 390 },
    { t: "16:00", o: 65380, h: 66420, l: 65330, c: 66280, v: 810 },
    { t: "18:00", o: 66280, h: 66940, l: 66150, c: 66820, v: 690 },
    { t: "20:00", o: 66820, h: 67180, l: 66690, c: 67060, v: 570 },
    { t: "22:00", o: 67060, h: 67520, l: 66980, c: 67340, v: 620 },
    { t: "24:00", o: 67340, h: 67610, l: 67240, c: 67450, v: 880 },
  ];
  /* Both plots hand their y-axis the same fixed label gutter. The two charts
     are separate ApexCharts instances, so without this their axes would size
     to their own text ("$67,000" vs "$880M") and the strips would sit a few
     pixels out of step — the one thing a volume strip must never do. */
  const CRYPTO_AXIS_W = 62;
  const cryptoRose = (bar) => bar.c >= bar.o;
  const CRYPTO_LAST = CRYPTO_SESSION[CRYPTO_SESSION.length - 1].c;
  const CRYPTO_HOURS = CRYPTO_SESSION.map((b) => b.t);
  const CRYPTO_CLOSES = CRYPTO_SESSION.map((b) => b.c);

  /* Simple moving average. Leading points have no full window yet and stay
     null, so the overlay starts where it becomes meaningful rather than being
     dragged down by a short first average. */
  function sma(values, window) {
    return values.map((_, i) =>
      i < window - 1
        ? null
        : Math.round(
            values.slice(i - window + 1, i + 1).reduce((a, b) => a + b, 0) /
              window,
          ),
    );
  }
  /* Named in hours, not periods: the candles are two-hourly, so "MA(3)" would
     read as three hours to anyone glancing at the axis when it means six. */
  const CRYPTO_MAS = [
    { name: "MA 6H", hue: "amber", data: sma(CRYPTO_CLOSES, 3) },
    { name: "MA 12H", hue: "violet", data: sma(CRYPTO_CLOSES, 6) },
  ];
  const cryptoPoints = (values) =>
    values.map((v, i) => ({ x: CRYPTO_HOURS[i], y: v }));

  /* Which plot the panel is showing. The card's view toggle sets this through
     VionexCharts.setCryptoView; the builder below reads it on every pass, so
     the chosen view also survives a theme, mode or direction rebuild. */
  let cryptoView = "candlestick";
  /* Turnover crosses into the billions at the top of the strip, so the label
     changes unit rather than printing a four-digit "$1000M". */
  const cryptoVol = (v) =>
    v >= 1000 ? "$" + (v / 1000).toFixed(1) + "B" : "$" + Math.round(v) + "M";

  function cryptoMarketOverviewOpts(t) {
    const o = base(t);
    o.chart.height = 320;

    /* The averages ride on top of every view — they are the reason the panel
       has a view toggle at all: the same trend, read three ways. */
    /* Each average carries its own `color`. The top-level `colors` array is
       indexed per series, but a candlestick series occupies index 0 without
       consuming a colour from it, so the overlays would fall off the end of
       the palette and render in ApexCharts' default near-black. */
    const overlays = CRYPTO_MAS.map((m) => ({
      name: m.name,
      type: "line",
      color: t[m.hue],
      data: cryptoPoints(m.data),
    }));
    const overlayHues = CRYPTO_MAS.map((m) => t[m.hue]);

    if (cryptoView === "line" || cryptoView === "area") {
      o.chart.type = cryptoView;
      o.series = [
        {
          name: "BTC/USD",
          type: cryptoView,
          data: cryptoPoints(CRYPTO_CLOSES),
        },
      ].concat(overlays);
      o.colors = [t.emerald].concat(overlayHues);
      o.stroke = { width: [3, 2, 2], curve: "smooth", lineCap: "round" };
      if (cryptoView === "area") {
        /* only the price series takes the wash; the averages stay hairlines,
           or three stacked gradients would bury the candles' own story */
        o.fill = {
          type: ["gradient", "solid", "solid"],
          gradient: areaFill(t, [t.emerald]).gradient,
        };
      }
    } else {
      o.chart.type = "candlestick";
      o.series = [
        {
          name: "BTC/USD",
          type: "candlestick",
          data: CRYPTO_SESSION.map((b) => ({ x: b.t, y: [b.o, b.h, b.l, b.c] })),
        },
      ].concat(overlays);
      o.plotOptions = {
        candlestick: {
          colors: { upward: t.emerald, downward: t.red },
          /* wicks in the body's own colour — a neutral wick reads as a second,
             unrelated mark at this candle width */
          wick: { useFillColor: true },
        },
      };
      /* series 0 is drawn by the candlestick renderer and ignores stroke width;
         the two entries after it are what actually size the average lines */
      o.colors = [t.emerald].concat(overlayHues);
      o.stroke = { width: [1, 2, 2], curve: "smooth", lineCap: "round" };
    }

    /* prices are read off the horizontal rules; the hours separate nothing */
    o.grid.xaxis = { lines: { show: false } };
    o.grid.yaxis = { lines: { show: true } };
    o.grid.padding = { left: 8, right: 8, bottom: 0 };
    o.markers = { size: 0, strokeWidth: 2, hover: { size: 5 } };
    o.xaxis = {
      type: "category",
      /* No `categories` here: every series already carries its own x, and
         supplying both makes ApexCharts re-read the candlestick's [o,h,l,c]
         array as plain numbers — the candles vanish and only the overlay
         lines survive. */
      /* the volume strip below carries the shared time axis for both plots */
      labels: { show: false },
      axisBorder: { show: false },
      axisTicks: { show: false },
      tooltip: { enabled: false },
      crosshairs: {
        show: true,
        stroke: { color: t.gridLine, width: 1, dashArray: 3 },
      },
    };
    /* $500 steps over a band that clears the session's low and high by one rule
       each — a wider band would open dead space above the volume strip, and the
       gap between the two plots is exactly where a reader looks for neither. */
    o.yaxis = {
      min: 63500,
      max: 68000,
      tickAmount: 9,
      opposite: t.rtl,
      tooltip: { enabled: true },
      labels: {
        formatter: money0,
        minWidth: CRYPTO_AXIS_W,
        maxWidth: CRYPTO_AXIS_W,
      },
    };
    /* Last traded price, called out on the axis the way a terminal marks it.
       The tag sits on the axis side, which the theme flips under RTL. */
    o.annotations = {
      yaxis: [
        {
          y: CRYPTO_LAST,
          borderColor: t.emerald,
          strokeDashArray: 4,
          label: {
            text: money0(CRYPTO_LAST),
            position: t.rtl ? "left" : "right",
            offsetX: t.rtl ? -8 : 8,
            offsetY: 7,
            borderColor: t.emerald,
            style: {
              background: t.emerald,
              color: t.labelOnFill,
              fontSize: "11px",
              fontWeight: 700,
              padding: { left: 6, right: 6, top: 3, bottom: 3 },
            },
          },
        },
      ],
    };
    o.tooltip = {
      theme: t.dark ? "dark" : "light",
      /* candles carry four values per point, so one shared box would stack a
         wall of numbers; the line and area views have one value each and read
         better with every series in a single box */
      shared: cryptoView !== "candlestick",
      intersect: false,
    };
    return o;
  }

  /* Swap the Market Overview plot. Rebuilds through the same path a theme
     change takes, so the whole registry lands in one consistent state and the
     chosen view is re-applied on every later rebuild. */
  function setCryptoView(view) {
    if (view === cryptoView) return;
    cryptoView = view;
    build();
  }

  /* ===== Fear & Greed - market sentiment gauge =====
     The index on the shared 270° gauge builder, so it wears the same track,
     cap and gradient as every other single-value ring in the project. Emerald
     because 72 sits in the "Greed" band — the reading and the hue agree. */
  const CRYPTO_SENTIMENT = 72;
  function cryptoFearGreedOpts(t) {
    const o = gaugeOpts(t, [CRYPTO_SENTIMENT], t.emerald);
    o.chart.height = 186;
    return o;
  }

  /* ===== Portfolio Allocation - crypto holdings donut =====
     The same donut component as the investment dashboard's asset allocation,
     wearing the crypto split. The centre carries an HTML .chart-center
     overlay, so Apex draws no label. */
  function cryptoPortfolioAllocationOpts(t) {
    const o = donutOpts(
      t,
      [42, 24, 14, 10, 10],
      ["Bitcoin", "Ethereum", "Solana", "Cardano", "Others"],
      [t.violet, t.emerald, t.cyan, t.amber, t.slate],
    );
    o.chart.height = 300;
    /* separators in the card's own face — the design reads five distinct holdings */
    o.stroke = { width: 4, colors: [t.surface] };
    o.plotOptions.pie.donut.size = "72%";
    return o;
  }

  /* ===== Popular Cryptocurrencies - per-row trend bars =====
     One six-period spark per table row on the shared KPI bar component. The
     hue carries the row's direction, so the bars and the 24h pill beside them
     never disagree, and the highlighted column is the current period. */
  const CRYPTO_POPULAR_SPARKS = [
    { id: "cryptoPopularBtcSpark", data: [12, 16, 20, 28, 22, 18], active: 3, hue: "emerald" },
    { id: "cryptoPopularEthSpark", data: [10, 14, 18, 26, 20, 24], active: 3, hue: "emerald" },
    { id: "cryptoPopularSolSpark", data: [8, 12, 16, 30, 24, 26], active: 3, hue: "emerald" },
    { id: "cryptoPopularBnbSpark", data: [26, 22, 24, 16, 14, 10], active: 3, hue: "red" },
  ];

  /* ===== My Watchlist - per-coin trend bars =====
     The same six-period spark as the table rows above, one per watched coin.
     Every row on this panel is up on the day, so they all take the positive
     hue — the bars and the 24h pill beside them never disagree. */
  const CRYPTO_WATCHLIST_SPARKS = [
    { id: "cryptoWatchlistBtcSpark", data: [14, 11, 18, 15, 22, 26], active: 5, hue: "emerald" },
    { id: "cryptoWatchlistEthSpark", data: [9, 15, 12, 20, 17, 24], active: 5, hue: "emerald" },
    { id: "cryptoWatchlistLtcSpark", data: [18, 13, 21, 16, 24, 28], active: 5, hue: "emerald" },
    { id: "cryptoWatchlistAdaSpark", data: [11, 17, 14, 19, 23, 27], active: 5, hue: "emerald" },
    { id: "cryptoWatchlistAvaxSpark", data: [16, 12, 19, 14, 21, 25], active: 5, hue: "emerald" },
    { id: "cryptoWatchlistDotSpark", data: [10, 16, 13, 21, 18, 23], active: 5, hue: "emerald" },
  ];

  /* ===== Market Overview - session volume strip =====
     Companion of the candles above, on the same categories and the same axis
     gutter. Each bar wears its own candle's direction, so the strip answers
     "was that move backed by turnover?" without a second legend to read. */
  function cryptoMarketVolumeOpts(t) {
    const o = base(t);
    o.chart.type = "bar";
    o.chart.height = 118;
    o.series = [{ name: "Volume", data: CRYPTO_SESSION.map((b) => b.v) }];
    o.colors = CRYPTO_SESSION.map((b) => (cryptoRose(b) ? t.emerald : t.red));
    /* distributed, so `colors` is read per BAR rather than per series */
    o.plotOptions = {
      bar: { distributed: true, columnWidth: "45%", borderRadius: 2 },
    };
    o.grid.xaxis = { lines: { show: false } };
    o.grid.yaxis = { lines: { show: false } };
    o.grid.padding = { left: 8, right: 8, top: 0 };
    o.xaxis = {
      categories: CRYPTO_SESSION.map((b) => b.t),
      /* every other category — thirteen labels collide on a half-width column */
      tickAmount: 6,
      axisBorder: axisBaseline(t),
      axisTicks: { show: false },
      tooltip: { enabled: false },
    };
    o.yaxis = {
      min: 0,
      max: 1000,
      tickAmount: 2,
      opposite: t.rtl,
      labels: {
        formatter: cryptoVol,
        minWidth: CRYPTO_AXIS_W,
        maxWidth: CRYPTO_AXIS_W,
      },
    };
    o.tooltip = {
      theme: t.dark ? "dark" : "light",
      y: { formatter: cryptoVol },
    };
    return o;
  }

  /* ==========================================================================
     Medical Dashboard
     ========================================================================== */

  /* ===== Appointments Overview - smooth gradient area, 2 series =====
     The same component as the AI dashboard's usage panel, wearing the clinic's
     booked-vs-completed split. Guide lines run horizontal rather than vertical:
     the question this panel answers is "how many", so the value bands are what
     the eye needs, and the months are already labelled on the axis. */
  function medAppointmentsOverviewOpts(t) {
    const o = base(t);
    o.chart.type = "area";
    /* Taller than the shared 290 of the other area panels: this one is paired
       with the Active Cases column rather than a short companion card, so the
       plot carries the row's height instead of leaving a dead band under it. */
    o.chart.height = 520;
    o.series = [
      { name: "Completed", data: [52, 62, 72, 76, 71, 90, 88] },
      { name: "Total Appointments", data: [40, 49, 46, 38, 48, 114, 110] },
    ];
    o.colors = [t.emerald, t.blue];
    o.stroke = { curve: "smooth", width: 4, lineCap: "round" };
    o.fill = areaFill(t, o.colors);
    o.grid.xaxis = { lines: { show: false } };
    o.grid.yaxis = { lines: { show: true } };
    o.grid.padding = { left: 8, right: 8 };
    o.markers = { size: 0, strokeWidth: 3, hover: { size: 7 } };
    o.xaxis = {
      categories: MONTHS.slice(0, 7),
      axisBorder: axisBaseline(t),
      axisTicks: { show: false },
      tooltip: { enabled: false },
    };
    o.yaxis = { min: 0, max: 120, tickAmount: 4, opposite: t.rtl };
    o.tooltip = { theme: t.dark ? "dark" : "light", shared: true, intersect: false };
    return o;
  }

  /* ===== Department Distribution - donut share of patients =====
     The analytics dashboard's audience rings wearing the clinic's split: the
     same three-way share on the same compact builder, so only the labels and
     the third hue change. Mounted through their own functions rather than
     reusing those options directly — the labels reach the tooltip, and a
     medical ring must not report "New Users". */
  /* Shorter than the analytics rings: these two sit two-up INSIDE a card that
     is itself half the row, so the mount is width-constrained long before it
     is height-constrained. At the shared 210 the ring stops growing and the
     leftover height renders as a dead band under it. */
  const MED_DONUT_H = 180;

  function medDepartmentOpts(t) {
    const o = audienceDonutOpts(
      t,
      [58.4, 31.2, 10.4],
      ["Cardiology", "Neurology", "Orthopedics"],
      [t.violet, t.cyan, t.neutral],
    );
    o.chart.height = MED_DONUT_H;
    return o;
  }

  /* ===== Patient Admissions - donut share of admissions ===== */
  function medAdmissionsOpts(t) {
    const o = audienceDonutOpts(
      t,
      [58.4, 31.2, 10.4],
      ["Emergency", "Outpatient", "Referral"],
      [t.violet, t.emerald, t.amber],
    );
    o.chart.height = MED_DONUT_H;
    return o;
  }

  /* ===== Revenue Overview - monthly columns with on-top value labels =====
     The same column panel as the AI dashboard's real-time users chart — same
     ten periods, same values, same on-top labels — so it extends those options
     instead of restating them. It shares its row with the Patients Overview
     stack rather than owning a full card, hence the shorter plot. */
  function medRevenueOverviewOpts(t) {
    const o = realTimeUsersOpts(t);
    o.chart.height = 240;
    o.series = [{ name: "Revenue Share", data: o.series[0].data }];
    /* Fuller columns than the 42% the source panel uses. That width is tuned
       for a full-width card; in half a row, ten categories cut it down to a
       stick, and the on-top labels are then wider than the bars they belong
       to and collide with their neighbours. */
    o.plotOptions.bar.columnWidth = "62%";
    /* Anchor the labels to the top of each column instead of its middle.
       ApexCharts centres bar labels by default, so the source panel's bare
       offsetY only clears the bar because its plot is half again as tall;
       at this height the same offset leaves the value sitting inside the
       column. Anchoring first makes the offset mean "above the bar" at any
       height, which is what the design shows. */
    o.plotOptions.bar.dataLabels = { position: "top" };
    o.dataLabels.offsetY = -18;
    o.grid.padding.top = 18;
    return o;
  }

  /* ===== Medical Dashboard — KPI sparklines =====
     One eight-period trace per KPI on the shared line-spark builder. Unlike the
     other dashboards' KPI sparks these do not carry a category hue: each tile
     is already a saturated .bg-fill-* ground, so a second colour on top would
     fight it. They all take the on-fill label tone instead, which is the token
     the rest of the system uses for marks drawn over a colour fill. */
  const MED_KPI_SPARKS = [
    { id: "medAppointmentsSpark", data: [12, 9, 15, 11, 18, 14, 21, 25] },
    { id: "medPatientsSpark", data: [10, 14, 11, 17, 15, 20, 18, 24] },
    { id: "medDoctorsSpark", data: [14, 11, 16, 13, 19, 16, 22, 26] },
    { id: "medRevenueSpark", data: [9, 13, 10, 16, 14, 19, 22, 27] },
    { id: "medTestsSpark", data: [11, 15, 12, 18, 16, 21, 19, 25] },
  ];

  /* ===== HRM Dashboard — Employees Overview breakdown rings =====
     The paired compact donuts from the Audience Analytics panel, one per
     dimension, so only the shares, labels and hues differ. Both headline
     totals are HTML .chart-center overlays, which is what the roomy hollow
     on that builder exists for. */
  const HRM_DONUT_H = 200;

  function hrmDepartmentOpts(t) {
    const o = audienceDonutOpts(
      t,
      [45.2, 28.6, 26.2],
      ["Engineering", "Marketing", "Operations"],
      /* slate, not neutral, for the quiet third slice: --cat-neutral resolves
         to --track-bg, which in dark mode sits within a hair of the card face
         and swallows a quarter of the ring. Slate is the palette's neutral
         that carries in both modes. */
      [t.violet, t.cyan, t.slate],
    );
    o.chart.height = HRM_DONUT_H;
    return o;
  }

  function hrmEmployeeStatusOpts(t) {
    const o = audienceDonutOpts(
      t,
      [72.4, 18.3, 9.3],
      ["Full-time", "Part-time", "Contract"],
      [t.violet, t.emerald, t.amber],
    );
    o.chart.height = HRM_DONUT_H;
    return o;
  }

  /* ===== HRM Dashboard — Payroll Overview - columns with on-top value labels =====
     The same ten-period column panel as the AI dashboard's real-time users
     chart — same periods, same values, same on-top labels — so it extends
     those options instead of restating them. It shares its row with the
     Employees Overview card rather than owning a full one, hence the shorter
     plot and the fuller columns: 42% is tuned for a full-width card and cuts
     to a stick here, leaving the labels wider than the bars they belong to. */
  function hrmPayrollOverviewOpts(t) {
    const o = realTimeUsersOpts(t);
    o.chart.height = 230;
    o.series = [{ name: "Payroll Share", data: o.series[0].data }];
    o.plotOptions.bar.columnWidth = "60%";
    /* Anchor the labels to the top of each column rather than its middle —
       at this height the source panel's bare offsetY leaves the value sitting
       inside the bar. Same fix as the medical revenue panel. */
    o.plotOptions.bar.dataLabels = { position: "top" };
    o.dataLabels.offsetY = -18;
    o.grid.padding.top = 18;
    return o;
  }

  /* ===== HRM Dashboard — Headcount Growth - stacked columns =====
     The same twelve-month stacked panel as the e-commerce Order Analytics card,
     so it is built from that options set. Two things change, both from the
     design: the muted full-height tracks come off — this plot reads on its own
     dashed rules — and the ceiling rises to 2500 in five steps. Fuller columns
     too: without a track behind each stack to give it width, the shared 42%
     leaves twelve thin ribbons floating on the rules. */
  function hrmHeadcountGrowthOpts(t) {
    const o = ecomOrderAnalyticsOpts(t);
    delete o.plotOptions.bar.colors;
    o.plotOptions.bar.columnWidth = "55%";
    o.yaxis.max = 2500;
    o.yaxis.tickAmount = 5;
    return o;
  }

  /* ===== HRM Dashboard — Employee Overview - smooth gradient area, 3 series =====
     The same panel as the AI usage chart — twelve months on dotted verticals,
     smooth gradient areas — carrying the workforce's headcount / hires /
     attrition split. A third trace is the only structural change, and the wash
     builder already ramps one colour per series, so nothing else moves.
     Values are indexed monthly figures on the design's 0–200 axis rather than
     absolute headcount: the frame plots all three lines against one scale, and
     a literal 1,248 would flatten the other two onto the baseline. */
  function hrmEmployeeOverviewOpts(t) {
    const o = base(t);
    o.chart.type = "area";
    o.chart.height = 300;
    o.series = [
      { name: "Headcount", data: [148, 152, 168, 162, 156, 172, 178, 170, 164, 176, 184, 180] },
      { name: "New Hires", data: [86, 94, 112, 104, 96, 118, 126, 108, 98, 112, 122, 116] },
      { name: "Attrition", data: [42, 38, 52, 46, 40, 58, 62, 50, 44, 54, 60, 56] },
    ];
    o.colors = [t.violet, t.orange, t.emerald];
    o.stroke = { curve: "smooth", width: 4, lineCap: "round" };
    o.fill = areaFill(t, o.colors);
    o.grid.xaxis = { lines: { show: true } };
    o.grid.yaxis = { lines: { show: false } };
    o.grid.padding = { left: 8, right: 8 };
    o.markers = { size: 0, strokeWidth: 3, hover: { size: 7 } };
    o.xaxis = {
      categories: MONTHS,
      axisBorder: axisBaseline(t),
      axisTicks: { show: false },
      tooltip: { enabled: false },
    };
    o.yaxis = { min: 0, max: 200, tickAmount: 4, opposite: t.rtl };
    o.tooltip = { theme: t.dark ? "dark" : "light", shared: true, intersect: false };
    return o;
  }

  /* ===== HRM Dashboard — Attendance Overview - smooth gradient area, 2 series =====
     Structurally the medical dashboard's appointments panel — same seven months
     on horizontal rules, same emerald-against-blue pairing — so it extends those
     options rather than restating them. What changes is the unit: this axis is a
     percentage of headcount, so it is pinned to 0–100 and both the labels and the
     tooltip carry the sign.
     The shares are read from the design's own tooltip (Present 89%, Absent 8%)
     rather than from its drawn curves, which cross in the middle of the plot —
     a shape that cannot be true of two figures that sum to a whole. */
  function hrmAttendanceOverviewOpts(t) {
    const o = medAppointmentsOverviewOpts(t);
    /* Sized to the celebrations list it shares a row with — six 48px avatar rows
       set that card's height, and a shorter plot would leave a dead band under
       this one rather than filling the card it was given. */
    o.chart.height = 470;
    o.series = [
      { name: "Present", data: [92, 94, 89, 91, 96, 88, 93] },
      { name: "Absent", data: [8, 6, 11, 9, 4, 12, 7] },
    ];
    const pct = (v) => Math.round(v) + "%";
    o.yaxis = {
      min: 0,
      max: 100,
      tickAmount: 4,
      opposite: t.rtl,
      labels: { formatter: pct },
    };
    o.tooltip = {
      theme: t.dark ? "dark" : "light",
      shared: true,
      intersect: false,
      y: { formatter: pct },
    };
    return o;
  }

  /* ===== HRM Dashboard — Workload by Department - horizontal stacked bars =====
     The Model Performance stack turned on its side: same stacked-bar component,
     same rounded outer cap, but the categories are people rather than periods so
     the bars run along the value axis and the names read left of them.
     Two things come off the source options: the muted full-height tracks (this
     plot reads on its own dashed verticals, as the design shows) and the money
     formatters — the axis counts hours. mountApexChart leaves horizontal bars
     unwrapped, so the plot fits its column instead of scrolling. */
  function hrmWorkloadOpts(t) {
    const o = modelPerformanceOpts(t);
    o.chart.height = 320;
    o.series = [
      { name: "Billable", data: [8, 8, 7, 5, 6, 4] },
      { name: "Internal", data: [3, 3, 4, 2, 3, 3] },
      { name: "Training", data: [14, 11, 14, 12, 12, 10] },
    ];
    o.colors = [t.violet, t.amber, t.emerald];
    delete o.plotOptions.bar.colors;
    delete o.plotOptions.bar.columnWidth;
    o.plotOptions.bar.horizontal = true;
    o.plotOptions.bar.barHeight = "58%";
    /* guide lines run with the value axis — vertical on a horizontal plot */
    o.grid.xaxis = { lines: { show: true } };
    o.grid.yaxis = { lines: { show: false } };
    o.xaxis = {
      categories: ["Emma", "Liam", "Sofia", "Noah", "Ava", "Ethan"],
      min: 0,
      max: 30,
      tickAmount: 6,
      axisBorder: axisBaseline(t),
      axisTicks: { show: false },
      tooltip: { enabled: false },
    };
    /* Deliberately NOT flipped for RTL, unlike every vertical panel here.
       ApexCharts can mirror the label gutter but not the bar growth direction
       (there is no x-axis reversal for horizontal bars), so `opposite: true`
       would strand the names on the right while their bars still ran from the
       left — each label detached from the row it names. Keeping the gutter on
       the leading edge keeps name and bar adjacent, which is what the reader
       actually needs from this plot. */
    o.yaxis = { opposite: false };
    o.tooltip = {
      theme: t.dark ? "dark" : "light",
      shared: true,
      intersect: false,
      y: { formatter: (v) => v + " hrs" },
    };
    return o;
  }

  /* ===== HRM Dashboard — Hiring Goal Progress - single-value gauge =====
     The shared 270° gauge with the quarter's fill rate; the centre reading is
     the HTML .chart-center overlay the builder's roomy hollow exists for.
     Three departures from the shared defaults, all from the design:
     - Taller than the shared 260. This gauge is the whole point of its card
       rather than one tile among several, and at the default size the 72%
       reading runs into the band it sits inside instead of clearing it.
     - A roomier hollow, so the band thins in proportion as the ring grows and
       the centre block keeps its breathing room.
     - The unfilled arc carries a pale cast of the SAME blue rather than the
       neutral guide-line tone — which is what dimHue exists for. Light mode
       blends toward the card face; dark mode blends toward the ground, where a
       near-white track would read as a second, brighter series. */
  function hrmHiringGoalOpts(t) {
    const o = gaugeOpts(t, [72], t.blue);
    /* 360, not the shared 260: ApexCharts draws a radialBar canvas at roughly
       78% of the nominal height, so this lands a ring about 46% of the card's
       inner width — the proportion the design shows. */
    o.chart.height = 360;
    o.plotOptions.radialBar.hollow.size = "70%";
    o.plotOptions.radialBar.track.background = dimHue(t.blue, t.dark ? 0.72 : 0.86, t.dark);
    return o;
  }

  /* ===== HRM Dashboard — KPI spark bars =====
     The same tinted six-period component as the finance KPI row, and the same
     profile by design: the tile is reused wholesale, so the heights are read
     from FIN_SPARK_DATA rather than restated here. `hue` names a key on the
     theme snapshot, so both the accent bar and its tint track the active preset
     and mode. */
  const HRM_KPI_SPARKS = [
    { id: "hrmEmployeesSpark", hue: "blue" },
    { id: "hrmAttendanceSpark", hue: "magenta" },
    { id: "hrmOpenRolesSpark", hue: "emerald" },
    { id: "hrmTurnoverSpark", hue: "red" },
  ];

  /* ==========================================================================
     Education Dashboard
     ========================================================================== */

  /* ===== Education Dashboard — Learning Progress gauge =====
     The shared 270° gauge carrying the share of enrolled learners on track for
     the term; the centre reading is the HTML .chart-center overlay the roomy
     hollow exists for. Two departures from the shared defaults:
     - 240 rather than 260. ApexCharts draws a radialBar canvas at roughly 78%
       of the nominal height, so this lands a ring that fills the card's width
       without pushing the three-line breakdown below it off the bottom.
     - The unfilled arc carries a pale cast of the SAME violet instead of the
       neutral guide-line tone — which is what dimHue exists for. Light mode
       blends toward the card face; dark mode blends toward the ground, where a
       near-white track would read as a second, brighter series. */
  function eduLearningProgressOpts(t) {
    const o = gaugeOpts(t, [78], t.violet);
    o.chart.height = 240;
    o.plotOptions.radialBar.track.background = dimHue(t.violet, t.dark ? 0.72 : 0.86, t.dark);
    return o;
  }

  /* ===== Education Dashboard — KPI target rings =====
     One compact ring per overview KPI, reading "% of this term's target". The
     shared mini-radial builder at a size that sits beside the metric block
     inside the card rather than under it, and `hue` names a key on the theme
     snapshot so each ring tracks the active preset and mode alongside the
     accent edge on its own card. */
  const EDU_KPI_RING_SIZE = 72;
  const EDU_KPI_RINGS = [
    { id: "eduCoursesRing", value: 87, hue: "violet" },
    { id: "eduInstructorsRing", value: 92, hue: "blue" },
    { id: "eduAttendanceRing", value: 94, hue: "emerald" },
    { id: "eduGradingRing", value: 76, hue: "amber" },
  ];

  /* ===== Education Dashboard — Enrolment & Completion - column / line combo =====
     The one mixed plot in the project, and deliberately so: intake and finishes
     are counts, completion rate is a percentage of them, and forcing all three
     onto a single scale would flatten the rate onto the baseline. Each series
     declares its own `type`, the two counts share the left gutter (yaxis[1]
     points back at "Enrolments" by name) and the rate gets its own on the far
     side. Both gutters swap ends together under RTL, so the counts always sit on
     the reading edge and the rate opposite it. */
  function eduEnrolmentOpts(t) {
    const o = base(t);
    /* mixed series — chart.type is only the fallback for a series without one */
    o.chart.type = "line";
    o.chart.height = 320;
    o.series = [
      { name: "Enrolments", type: "column", data: [286, 342, 418, 396, 452, 388, 302, 336, 512, 468, 424, 362] },
      { name: "Completions", type: "column", data: [162, 208, 264, 251, 302, 246, 184, 214, 348, 312, 286, 217] },
      { name: "Completion Rate", type: "line", data: [56.6, 60.8, 63.2, 63.4, 66.8, 63.4, 60.9, 63.7, 68, 66.7, 67.5, 59.9] },
    ];
    o.colors = [t.violet, t.cyan, t.amber];
    /* zero-width strokes on the two column series — only the line is drawn */
    o.stroke = { width: [0, 0, 3], curve: "smooth", lineCap: "round" };
    o.plotOptions = {
      bar: { columnWidth: "56%", borderRadius: 4, borderRadiusApplication: "end" },
    };
    o.markers = { size: 0, strokeWidth: 3, hover: { size: 7 } };
    o.grid.xaxis = { lines: { show: false } };
    o.grid.yaxis = { lines: { show: true } };
    o.grid.padding = { left: 8, right: 8 };
    o.xaxis = {
      categories: MONTHS,
      axisBorder: axisBaseline(t),
      axisTicks: { show: false },
      tooltip: { enabled: false },
    };
    const pct = (v) => Math.round(v) + "%";
    o.yaxis = [
      {
        seriesName: "Enrolments",
        min: 0,
        max: 600,
        tickAmount: 4,
        opposite: t.rtl,
        /* head counts — ApexCharts labels a numeric axis to one decimal by
           default, which reads as a measurement rather than a tally */
        labels: { formatter: (v) => Math.round(v) },
      },
      { seriesName: "Enrolments", show: false },
      {
        seriesName: "Completion Rate",
        min: 0,
        max: 100,
        tickAmount: 4,
        opposite: !t.rtl,
        labels: { formatter: pct },
      },
    ];
    o.tooltip = {
      theme: t.dark ? "dark" : "light",
      shared: true,
      intersect: false,
      y: [
        { formatter: (v) => v + " learners" },
        { formatter: (v) => v + " courses" },
        { formatter: (v) => v + "%" },
      ],
    };
    return o;
  }

  /* ===== Education Dashboard — Subject Mastery - radar profile =====
     The shared radar carrying this term's average assessment score against the
     cohort's target line, so the card answers "which subjects are thin?" rather
     than "how many points?". Two series on one ring is exactly what the
     builder's translucent fill exists for. */
  function eduMasteryOpts(t) {
    const o = radarOpts(
      t,
      [
        { name: "This term", data: [92, 84, 78, 71, 66, 61] },
        { name: "Target", data: [80, 80, 80, 80, 80, 80] },
      ],
      ["Mathematics", "Sciences", "Coding", "Languages", "Arts", "History"],
      [t.violet, t.slate],
    );
    o.chart.height = 320;
    /* The target ring is a reference, not a reading: dashed, and with its fill
       switched off, so only the scored series carries a body. Dash pattern and
       fill opacity rather than a thinner stroke — see the width warning on
       radarOpts. */
    o.stroke.dashArray = [0, 5];
    o.fill.opacity = [0.2, 0];
    return o;
  }

  /* ===== Education Dashboard — Study Hours - stacked weekday columns =====
     Live-class hours stacked on self-paced hours, so each column is the day's
     total and the split inside it shows where the time actually went. Seven
     categories, so mountApexChart leaves it unwrapped and it fits its column. */
  function eduStudyHoursOpts(t) {
    const o = base(t);
    o.chart.type = "bar";
    o.chart.height = 250;
    o.chart.stacked = true;
    o.series = [
      { name: "Live classes", data: [3.2, 4.1, 3.8, 4.6, 4.2, 2.1, 1.4] },
      { name: "Self-paced", data: [2.4, 2.8, 3.1, 2.6, 3.4, 4.2, 3.6] },
    ];
    o.colors = [t.blue, t.cyan];
    o.plotOptions = {
      bar: {
        columnWidth: "48%",
        borderRadius: 5,
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "last",
      },
    };
    o.grid.xaxis = { lines: { show: false } };
    o.grid.yaxis = { lines: { show: true } };
    o.grid.padding = { left: 8, right: 8 };
    o.xaxis = {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      axisBorder: axisBaseline(t),
      axisTicks: { show: false },
      tooltip: { enabled: false },
    };
    o.yaxis = {
      min: 0,
      max: 10,
      tickAmount: 5,
      opposite: t.rtl,
      labels: { formatter: (v) => Math.round(v) + "h" },
    };
    o.tooltip = {
      theme: t.dark ? "dark" : "light",
      shared: true,
      intersect: false,
      y: { formatter: (v) => v + " hrs" },
    };
    return o;
  }

  /* ===== Education Dashboard — Catalogue Mix - donut share of courses =====
     The shared compact breakdown ring; the course total is the HTML
     .chart-center overlay that builder's roomy hollow exists for. */
  function eduCategoryMixOpts(t) {
    const o = audienceDonutOpts(
      t,
      [32.4, 24.7, 18.1, 14.4, 10.4],
      ["STEM", "Business", "Languages", "Arts & Design", "Health"],
      [t.violet, t.blue, t.emerald, t.amber, t.rose],
    );
    o.chart.height = 250;
    return o;
  }

  /* ===== Education Dashboard — Grade Distribution - horizontal grade bands =====
     Distributed bars, so each band carries its own colour along a pass-to-fail
     ramp and the legend is the axis itself. Horizontal because the categories
     are labels rather than periods — and mountApexChart leaves horizontal bars
     unwrapped, so the plot fits its column instead of scrolling. */
  function eduGradeBandsOpts(t) {
    const o = base(t);
    o.chart.type = "bar";
    o.chart.height = 250;
    o.series = [{ name: "Learners", data: [2184, 2946, 1892, 986, 634] }];
    o.colors = [t.emerald, t.lime, t.blue, t.amber, t.rose];
    o.plotOptions = {
      bar: {
        horizontal: true,
        distributed: true,
        barHeight: "58%",
        borderRadius: 5,
        borderRadiusApplication: "end",
      },
    };
    /* guide lines run with the value axis — vertical on a horizontal plot */
    o.grid.xaxis = { lines: { show: true } };
    o.grid.yaxis = { lines: { show: false } };
    o.grid.padding = { left: 8, right: 8 };
    o.xaxis = {
      categories: ["Grade A", "Grade B", "Grade C", "Grade D", "Grade F"],
      min: 0,
      max: 3000,
      tickAmount: 3,
      axisBorder: axisBaseline(t),
      axisTicks: { show: false },
      labels: { formatter: (v) => Math.round(v / 1000) + "k" },
      tooltip: { enabled: false },
    };
    /* Deliberately NOT flipped for RTL, like the HRM workload plot: ApexCharts
       can mirror the label gutter but not the growth direction of a horizontal
       bar, so `opposite: true` would strand each grade label away from the bar
       it names. Keeping the gutter on the leading edge keeps the pair adjacent. */
    o.yaxis = { opposite: false };
    o.tooltip = {
      theme: t.dark ? "dark" : "light",
      y: { formatter: (v) => v.toLocaleString("en-US") + " learners" },
    };
    return o;
  }

  /* ===== Education Dashboard — Continue Learning progress ring =====
     A FULL-circle radial rather than the 270° gauge the Learning Progress card
     uses: both readings live on the same page, and one silhouette per meaning
     keeps "this course" from reading as another cut of "this term".
     Two departures from the shared mini-radial: a bigger footprint, since this
     ring is the card's focal reading rather than an indicator beside a line of
     text, and a tighter hollow so the band thickens with it. The unfilled arc
     takes a pale cast of the same hue, like the other rings here. */
  function eduResumeRingOpts(t) {
    const o = miniRadialOpts(t, 75, t.violet, 168);
    o.plotOptions.radialBar.hollow.size = "62%";
    o.plotOptions.radialBar.track.background = dimHue(t.violet, t.dark ? 0.72 : 0.86, t.dark);
    return o;
  }

  /* ===== Education Dashboard — Engagement Heatmap =====
     Share of the cohort active in each weekday / session-slot pair, which is
     the one question about study behaviour that needs two categorical axes at
     once. Slots run EARLIEST at the top, so the array is ordered latest-first:
     ApexCharts stacks its series upward from the bottom.
     The four bands are steps of the SAME violet the section's other panels use,
     mixed toward the page ground by dimHue rather than picked as four separate
     hues — an intensity scale has to read as one colour getting stronger, and
     mixing toward the ground keeps every step legible in both modes. */
  function eduEngagementHeatmapOpts(t) {
    const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const row = (name, values) => ({
      name: name,
      data: values.map((v, i) => ({ x: DAYS[i], y: v })),
    });
    /* Two ramps, because the two grounds swallow the quiet end differently.
       Over white, mixing 82% toward the ground still leaves a readable tint;
       over the navy the same step lands within a hair of the card face and the
       quietest cells read as holes in the grid rather than as data. Dark mode
       therefore keeps a higher floor — the scale still climbs, it just never
       reaches the background. */
    const STEPS = t.dark ? [0.62, 0.42, 0.2, 0] : [0.82, 0.56, 0.28, 0];
    const band = (i) => dimHue(t.violet, STEPS[i], t.dark);
    const o = heatmapOpts(
      t,
      [
        row("18:00 – 21:00", [62, 69, 74, 72, 58, 41, 46]),
        row("15:00 – 18:00", [84, 88, 94, 91, 76, 52, 34]),
        row("12:00 – 15:00", [71, 78, 82, 79, 68, 44, 29]),
        row("09:00 – 12:00", [58, 64, 61, 66, 55, 38, 24]),
        row("06:00 – 09:00", [22, 26, 24, 28, 21, 14, 11]),
      ],
      [
        { from: 0, to: 24, color: band(0), name: "Quiet" },
        { from: 25, to: 49, color: band(1), name: "Light" },
        { from: 50, to: 74, color: band(2), name: "Active" },
        { from: 75, to: 100, color: band(3), name: "Peak" },
      ],
    );
    o.chart.height = 340;
    o.tooltip.y = { formatter: (v) => v + "% of learners active" };
    return o;
  }

  /* ===== Education Dashboard — Score vs Study Time =====
     One bubble per running cohort: weekly study hours across, average
     assessment score up, cohort size as the area. Read as quadrants — the
     bottom-left corner is where a course is neither engaging nor landing, which
     is the panel's whole reason to exist. Series are the catalogue categories,
     so the colours line up with the Catalogue Mix donut in Learning Statistics.
     Axes are pinned rather than auto-scaled: the reading is "where does this
     cohort sit on the faculty's own scale", which a scale that moves with the
     data would quietly destroy. */
  function eduScoreEngagementOpts(t) {
    const o = bubbleOpts(
      t,
      [
        {
          name: "STEM",
          data: [
            { x: 6.2, y: 88, z: 42 },
            { x: 7.4, y: 84, z: 51 },
            { x: 4.1, y: 63, z: 29 },
          ],
        },
        { name: "Business", data: [{ x: 5.1, y: 76, z: 64 }] },
        { name: "Languages", data: [{ x: 6.8, y: 91, z: 47 }] },
        { name: "Design", data: [{ x: 3.4, y: 71, z: 38 }] },
      ],
      [t.violet, t.blue, t.emerald, t.amber],
    );
    o.chart.height = 340;
    o.xaxis.min = 0;
    o.xaxis.max = 10;
    /* 4, not 5: on a numeric axis ApexCharts draws tickAmount + 1 intervals, so
       asking for 5 splits 0–10 into sixths and the rounded labels land on
       2h / 3h / 5h / 7h. 4 gives the even 2h steps the scale is written for. */
    o.xaxis.tickAmount = 4;
    o.xaxis.labels = { formatter: (v) => Math.round(v) + "h" };
    o.yaxis = {
      min: 50,
      max: 100,
      tickAmount: 5,
      opposite: t.rtl,
      labels: { formatter: (v) => Math.round(v) },
    };
    o.tooltip.x = { formatter: (v) => v + " h / week" };
    o.tooltip.y = { formatter: (v) => v + " avg score" };
    o.tooltip.z = { title: "Cohort:" };
    return o;
  }

  /* ===== Education Dashboard — Attainment band sparklines =====
     One eight-assessment trace per quartile band on the shared area-spark
     builder, so the three rows of the Attainment Bands card carry their own
     shape beside their number. `hue` names a key on the theme snapshot, so each
     trace tracks the active preset and mode. */
  const EDU_BAND_SPARKS = [
    { id: "eduBandTopSpark", hue: "emerald", data: [88, 90, 89, 92, 91, 94, 93, 95] },
    { id: "eduBandMidSpark", hue: "blue", data: [72, 74, 73, 76, 75, 77, 78, 79] },
    { id: "eduBandLowSpark", hue: "rose", data: [58, 57, 59, 56, 58, 55, 57, 56] },
  ];

  /* ===== Education Dashboard — Grading turnaround gauge =====
     The share of collected scripts marked inside the faculty's 48-hour promise,
     on the shared 270° gauge; the centre reading is the HTML .chart-center
     overlay the roomy hollow exists for. Sized and tracked exactly like the
     Learning Progress gauge it sits below, so the two rings read as one family:
     240 rather than 260 (ApexCharts draws a radialBar canvas at roughly 78% of
     the nominal height, and the marker-workload list has to clear the bottom of
     the card), and the unfilled arc takes a pale cast of the SAME emerald rather
     than the neutral guide-line tone. */
  function eduGradingTurnaroundOpts(t) {
    const o = gaugeOpts(t, [82], t.emerald);
    o.chart.height = 240;
    o.plotOptions.radialBar.track.background = dimHue(t.emerald, t.dark ? 0.72 : 0.86, t.dark);
    return o;
  }

  /* ==========================================================================
     Booking Dashboard
     ========================================================================== */

  /* ===== Booking Dashboard — Status Mix - premium donut =====
     Share of the period's reservations by outcome, on the premium donut: on-arc
     percentages, surface-coloured gaps and a live centre that falls back to the
     period total. The three hues are the same emerald / amber / rose the meter
     rows and the status KPI cards carry, so the ring reads as the chart form of
     the list beside it rather than a second colour scheme.
     A narrower band than the finance mixes that also use this builder — the
     centre here has to hold a five-digit total, not just an emblem. */
  function bkgStatusMixOpts(t) {
    const colors = [t.emerald, t.amber, t.rose];
    const o = premiumDonutOpts(
      t,
      [78.2, 14.8, 7],
      ["Confirmed", "Pending", "Cancelled"],
      colors,
      colors.map(() => t.labelOnFill),
      { label: "Bookings", value: "12,486" },
    );
    o.chart.height = 260;
    return o;
  }

  /* ===== Booking Dashboard — Capacity ring =====
     Share of this month's bookable slots that have actually been sold, on the
     shared mini-radial so it sits INSIDE the spotlight tile's footer strip
     beside its label rather than owning a panel. Cyan rather than a status
     colour on purpose: emerald, amber and rose are spoken for by the confirmed /
     pending / cancelled trio, and cyan matches the target bar above it. */
  const BKG_CAPACITY_RING_SIZE = 76;

  /* ===== Booking Dashboard — Status momentum sparklines =====
     One seven-day trace per booking status on the shared area-spark builder, so
     each status card carries its own shape under its count. These mount flush to
     the bottom edge of the card rather than inline beside a number, so they keep
     the builder's full height and take the card's whole width; `hue` names a key
     on the theme snapshot, so each trace tracks the active preset and mode
     alongside the status tint on the icon above it. */
  const BKG_STATUS_SPARKS = [
    { id: "bkgConfirmedSpark", hue: "emerald", data: [286, 312, 298, 356, 402, 388, 441] },
    { id: "bkgPendingSpark", hue: "amber", data: [72, 86, 64, 91, 78, 96, 84] },
    { id: "bkgCancelledSpark", hue: "rose", data: [34, 28, 41, 26, 33, 22, 19] },
  ];

  /* ===== Booking Dashboard — Bookings & Revenue - column / line combo =====
     Volume and earnings share a panel but not a scale: bookings are a count in
     the tens of thousands, revenue is money in the millions, and forcing both
     onto one gutter would flatten whichever lost. So each series declares its
     own `type`, the columns keep the reading-edge gutter and the revenue line
     takes the far side; both swap ends together under RTL, so the count always
     sits on the reading edge.
     Revenue is carried in THOUSANDS rather than whole dollars — that keeps both
     series inside the same order of magnitude, which is what lets one shared
     tooltip line them up; the formatters are what put the money back. The
     labels abbreviate for the same reason the axes are split: "12K" and "$2.0M"
     keep both gutters narrow enough that the plot owns the card. */
  function bkgTrendOpts(t) {
    const o = base(t);
    /* mixed series — chart.type is only the fallback for a series without one */
    o.chart.type = "line";
    o.chart.height = 340;
    o.series = [
      { name: "Bookings", type: "column", data: [8420, 7860, 9240, 9980, 10760, 11540, 12180, 12486, 11120, 10340, 9680, 11860] },
      { name: "Revenue", type: "line", data: [1516, 1399, 1682, 1836, 2001, 2193, 2339, 2297, 2013, 1851, 1771, 2431] },
    ];
    o.colors = [t.violet, t.cyan];
    /* zero-width stroke on the column series — only the revenue line is drawn */
    o.stroke = { width: [0, 3], curve: "smooth", lineCap: "round" };
    o.plotOptions = {
      bar: { columnWidth: "52%", borderRadius: 4, borderRadiusApplication: "end" },
    };
    o.markers = { size: 0, strokeWidth: 3, hover: { size: 7 } };
    o.grid.xaxis = { lines: { show: false } };
    o.grid.yaxis = { lines: { show: true } };
    o.grid.padding = { left: 8, right: 8 };
    o.xaxis = {
      categories: MONTHS,
      axisBorder: axisBaseline(t),
      axisTicks: { show: false },
      tooltip: { enabled: false },
    };
    o.yaxis = [
      {
        seriesName: "Bookings",
        min: 0,
        max: 15000,
        tickAmount: 5,
        opposite: t.rtl,
        labels: { formatter: (v) => Math.round(v / 1000) + "K" },
      },
      {
        seriesName: "Revenue",
        min: 0,
        max: 2500,
        tickAmount: 5,
        opposite: !t.rtl,
        labels: { formatter: (v) => "$" + (v / 1000).toFixed(1) + "M" },
      },
    ];
    o.tooltip = {
      theme: t.dark ? "dark" : "light",
      shared: true,
      intersect: false,
      y: [
        { formatter: (v) => v.toLocaleString("en-US") + " bookings" },
        { formatter: (v) => "$" + (v / 1000).toFixed(2) + "M" },
      ],
    };
    return o;
  }

  /* ===== Booking Dashboard — Day Load - hourly columns =====
     How today's bookings sit across the trading day, one column per opening
     hour against a fixed per-hour capacity. The y-axis is pinned to that
     capacity rather than to the data, so a full hour reaches the top of the
     plot and the gaps are as readable as the peaks — which is the whole
     question a day-load panel answers.
     Distributed bars so the hours that are FULL carry the accent while the rest
     step back to a soft cast of the SAME hue: the shape of the day reads before
     any number does. dimHue rather than the neutral track, for the usual
     reason — on a card face --track-bg sits within a hair of the surface and
     the quiet hours would disappear. */
  const BKG_DAY_LOAD = [2, 3, 3, 2, 1, 2, 1, 2, 1, 1];
  const BKG_DAY_HOURS = ["9a", "10a", "11a", "12p", "1p", "2p", "3p", "4p", "5p", "6p"];
  const BKG_DAY_CAPACITY = 3;

  function bkgDayLoadOpts(t) {
    const o = base(t);
    o.chart.type = "bar";
    o.chart.height = 220;
    o.series = [{ name: "Bookings", data: BKG_DAY_LOAD }];
    o.colors = BKG_DAY_LOAD.map((v) =>
      v >= BKG_DAY_CAPACITY ? t.cyan : dimHue(t.cyan, t.dark ? 0.55 : 0.62, t.dark),
    );
    o.plotOptions = {
      bar: {
        distributed: true,
        columnWidth: "52%",
        borderRadius: 4,
        borderRadiusApplication: "end",
      },
    };
    o.grid.xaxis = { lines: { show: false } };
    o.grid.padding = { left: 8, right: 8 };
    o.xaxis = {
      categories: BKG_DAY_HOURS,
      axisBorder: axisBaseline(t),
      axisTicks: { show: false },
      tooltip: { enabled: false },
    };
    o.yaxis = {
      min: 0,
      max: BKG_DAY_CAPACITY,
      tickAmount: BKG_DAY_CAPACITY,
      opposite: t.rtl,
      /* whole appointments — the default one-decimal axis reads as a measurement */
      labels: { formatter: (v) => Math.round(v) },
    };
    o.tooltip = {
      theme: t.dark ? "dark" : "light",
      y: { formatter: (v) => v + " of " + BKG_DAY_CAPACITY + " slots booked" },
    };
    return o;
  }

  /* ===== Booking Dashboard — Category Mix - share of bookings by category =====
     The compact breakdown ring, with the period total as the HTML .chart-center
     overlay its roomy hollow exists for. A DIFFERENT donut from the status mix
     higher up the page on purpose: that one answers "how did these bookings
     resolve" and carries on-arc percentages, this one answers "what were they
     for" and hands the numbers to the legend list beneath it, so the two rings
     never read as two cuts of the same question.
     The five hues are the same violet / cyan / emerald / amber / rose the
     leaderboard meters beside it carry, one per category — which is what lets a
     row's bar and its slice be recognised as the same thing. */
  function bkgCategoryMixOpts(t) {
    const o = audienceDonutOpts(
      t,
      [33.9, 25, 18.9, 13.2, 9],
      [
        "Massage & Bodywork",
        "Hair & Styling",
        "Skin & Facial",
        "Nails & Beauty",
        "Wellness Classes",
      ],
      [t.violet, t.cyan, t.emerald, t.amber, t.rose],
    );
    o.chart.height = 250;
    return o;
  }

  /* ===== Booking Dashboard — New vs Returning - stacked columns =====
     One column per month, split by whether the customer had booked here
     before. Stacked rather than grouped because the question the panel answers
     is how the month's ACTIVE customers divide — the column total is the
     reading, and the split is what it is made of; side-by-side pairs would put
     the total back on the reader.
     New sits on the bottom of each stack and takes the cyan the legend figure
     above it carries; returning stacks on top in violet. Only the last segment
     is capped (borderRadiusWhenStacked), so each stack reads as one column
     rather than as two rounded blocks resting on each other. */
  function bkgCustomerMixOpts(t) {
    const o = base(t);
    o.chart.type = "bar";
    o.chart.height = 300;
    o.chart.stacked = true;
    o.series = [
      { name: "New", data: [742, 690, 812, 884, 946, 1024, 1156, 1284, 1098, 1012, 938, 1176] },
      { name: "Returning", data: [2680, 2540, 2910, 3120, 3364, 3628, 3946, 4318, 3812, 3560, 3348, 4062] },
    ];
    o.colors = [t.cyan, t.violet];
    o.plotOptions = {
      bar: {
        columnWidth: "48%",
        borderRadius: 5,
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "last",
      },
    };
    o.grid.xaxis = { lines: { show: false } };
    o.grid.padding = { left: 8, right: 8 };
    o.xaxis = {
      categories: MONTHS,
      axisBorder: axisBaseline(t),
      axisTicks: { show: false },
      tooltip: { enabled: false },
    };
    o.yaxis = {
      min: 0,
      max: 6000,
      /* three steps, so the ceiling divides into whole thousands — at four the
         gutter lands on 1.5K steps and the abbreviated labels round to
         0 / 2 / 3 / 5 / 6, which reads as a broken scale */
      tickAmount: 3,
      opposite: t.rtl,
      /* whole people, abbreviated — a four-digit gutter would eat the plot */
      labels: { formatter: (v) => Math.round(v / 1000) + "K" },
    };
    o.tooltip = {
      theme: t.dark ? "dark" : "light",
      shared: true,
      intersect: false,
      y: { formatter: (v) => v.toLocaleString("en-US") + " customers" },
    };
    return o;
  }

  /* ===== Booking Dashboard — Retention - single-value gauge =====
     The shared 270° gauge carrying the share of customers who came back within
     90 days; the reading itself is the HTML .chart-center overlay the builder's
     roomy hollow exists for. Emerald because this is the card's "good news"
     number and the tier meters beneath it end on the same hue for the loyal
     band — the gauge and the bottom meter are the same story at two depths.
     Shorter than the shared 260: this ring shares its card with a three-row
     meter list and a footer strip, and at full height the segment list would be
     pushed past the fold of the column beside it. */
  function bkgRetentionGaugeOpts(t) {
    const o = gaugeOpts(t, [68.5], t.emerald);
    o.chart.height = 230;
    return o;
  }

  /* ==========================================================================
     Inventory Dashboard
     ========================================================================== */

  /* ===== Inventory Dashboard — Overview KPI sparklines =====
     One seven-day trace per headline stock metric, on the shared area-spark
     builder. These mount flush to the bottom edge of their card rather than
     inline beside a number, so they keep the builder's full height and take the
     card's whole width. `hue` names a key on the theme snapshot, so each trace
     tracks the active preset and mode alongside the tint on the icon above it —
     and it deliberately repeats the icon's hue rather than carrying direction,
     because two of these four metrics (low / out of stock) are counts where a
     fall is the good news and a shared "up = green" reading would mislead. */
  const INVT_KPI_SPARKS = [
    { id: "invtItemsSpark", hue: "primary", data: [44120, 44980, 45640, 46310, 47020, 47880, 48592] },
    { id: "invtValueSpark", hue: "violet", data: [2510, 2585, 2620, 2704, 2748, 2796, 2840] },
    { id: "invtLowStockSpark", hue: "amber", data: [268, 274, 259, 281, 296, 304, 312] },
    { id: "invtOutOfStockSpark", hue: "rose", data: [62, 58, 66, 57, 54, 51, 48] },
  ];

  /* ===== Inventory Dashboard — Stock Status mix - premium donut =====
     How the catalogue's SKUs divide across the four stock states, on the shared
     premium donut so the centre carries the catalogue total while the arcs carry
     the split. Emerald / amber / blue / rose reads as a severity ramp rather
     than four unrelated categories — healthy, watch, tied-up capital, lost
     sales — and the same four hues are repeated by the legend dots and the
     progress bars beside it.
     The out-of-stock arc is barely 1% of the ring, so the on-arc labels are
     gated: below 4% the wedge is thinner than the text it would carry, and the
     label spills onto its neighbours. Those readings are in the legend. */
  const INVT_STATUS_LABEL_FLOOR = 4;

  function invtStockStatusOpts(t) {
    const colors = [t.emerald, t.amber, t.blue, t.rose];
    const o = premiumDonutOpts(
      t,
      [87.3, 7.3, 4.3, 1.1],
      ["In stock", "Low stock", "Overstock", "Out of stock"],
      colors,
      colors.map(() => t.labelOnFill),
      { label: "Total SKUs", value: "4,286" },
    );
    o.chart.height = 260;
    o.dataLabels.formatter = (val) =>
      val < INVT_STATUS_LABEL_FLOOR ? "" : Math.round(val) + "%";
    return o;
  }

  /* ===== Inventory Dashboard — In-stock rate ring =====
     Share of the catalogue that can actually be sold today, on the shared
     mini-radial so it sits INSIDE the availability tile beside its label rather
     than owning a panel. Emerald rather than the preset accent: it is the
     panel's health reading, and it answers the rose "out of stock" row below
     it on the same severity ramp the status donut uses. */
  const INVT_AVAILABILITY_RING_SIZE = 88;

  /* ===== Inventory Dashboard — Inventory Value & Units - column / line combo =====
     What is ON the shelf and what it is WORTH share a panel but not a scale:
     units are a count in the tens of thousands and value is money in the
     millions, so each series declares its own `type` and its own axis — the
     count keeps the reading-edge gutter, the money takes the far side, and both
     swap ends together under RTL.
     Value is carried in THOUSANDS rather than whole dollars, which keeps the two
     series inside the same order of magnitude — that is what lets one shared
     tooltip line them up; the formatters are what put the money back. Zero is
     printed bare in both gutters, since "$0.0M" reads as a measurement rather
     than as the origin.
     A rolling twelve months ending on the current period rather than a calendar
     year: the panel's whole point is the run-up INTO today's position, and a
     Jan–Dec axis would spend a third of its width on months that have not
     happened. mountApexChart wraps the plot for narrow screens on its own. */
  const INVT_TREND_MONTHS = [
    "Sep", "Oct", "Nov", "Dec", "Jan", "Feb",
    "Mar", "Apr", "May", "Jun", "Jul", "Aug",
  ];
  const INVT_TREND_UNITS = [41200, 43800, 49600, 51200, 44900, 42600, 43900, 44800, 45900, 46400, 46810, 48592];
  /* $ thousands */
  const INVT_TREND_VALUE = [2380, 2530, 2905, 3010, 2620, 2472, 2548, 2612, 2690, 2718, 2674, 2840];

  function invtValueTrendOpts(t) {
    const o = base(t);
    /* mixed series — chart.type is only the fallback for a series without one */
    o.chart.type = "line";
    o.chart.height = 340;
    o.series = [
      { name: "Units on hand", type: "column", data: INVT_TREND_UNITS },
      { name: "Stock value", type: "line", data: INVT_TREND_VALUE },
    ];
    o.colors = [t.blue, t.primary];
    /* zero-width stroke on the column series — only the value line is drawn */
    o.stroke = { width: [0, 3], curve: "smooth", lineCap: "round" };
    o.plotOptions = {
      bar: { columnWidth: "52%", borderRadius: 4, borderRadiusApplication: "end" },
    };
    o.markers = { size: 0, strokeWidth: 3, hover: { size: 7 } };
    o.grid.xaxis = { lines: { show: false } };
    o.grid.yaxis = { lines: { show: true } };
    o.grid.padding = { left: 8, right: 8 };
    o.xaxis = {
      categories: INVT_TREND_MONTHS,
      axisBorder: axisBaseline(t),
      axisTicks: { show: false },
      tooltip: { enabled: false },
    };
    o.yaxis = [
      {
        seriesName: "Units on hand",
        min: 0,
        max: 60000,
        tickAmount: 4,
        opposite: t.rtl,
        labels: { formatter: (v) => (v ? Math.round(v / 1000) + "K" : "0") },
      },
      {
        seriesName: "Stock value",
        min: 0,
        max: 3200,
        tickAmount: 4,
        opposite: !t.rtl,
        labels: { formatter: (v) => (v ? "$" + (v / 1000).toFixed(1) + "M" : "$0") },
      },
    ];
    o.tooltip = {
      theme: t.dark ? "dark" : "light",
      shared: true,
      intersect: false,
      y: [
        { formatter: (v) => v.toLocaleString("en-US") + " units" },
        { formatter: (v) => "$" + (v / 1000).toFixed(2) + "M" },
      ],
    };
    return o;
  }

  /* ===== Inventory Dashboard — Stock Cover - days of cover by category =====
     How long each product line's stock lasts at current demand. Horizontal
     because the categories are names rather than periods, and because
     mountApexChart leaves horizontal bars unwrapped — so the plot fits the
     narrow column it shares a row with instead of scrolling inside it.
     Deliberately days-of-cover per CATEGORY rather than a SKU count per cover
     band: a band histogram of this catalogue spreads 48 to 1,842, so three of
     its six bars would be slivers too thin to carry their own label — and those
     are the bands read first. Days of cover across categories all land inside
     one order of magnitude, so every bar is legible and every label fits INSIDE
     its own fill, which is what lets them take the on-mark ink.
     Three colours, not a gradient: too little cover and too much are both
     faults, so a low-to-high ramp would have read as "more is better". The
     thresholds and hues are the same three the card's footer rollup carries, so
     a bar and the summary line under it are recognisably one scale. */
  const INVT_COVER_CATEGORIES = [
    "Electronics",
    "Apparel",
    "Home & Kitchen",
    "Furniture",
    "Sports & Outdoor",
    "Beauty & Health",
  ];
  const INVT_COVER_DAYS = [21, 34, 48, 96, 57, 29];
  /* healthy window, in days of demand covered */
  const INVT_COVER_MIN = 31;
  const INVT_COVER_MAX = 90;

  function invtStockCoverOpts(t) {
    const o = base(t);
    o.chart.type = "bar";
    o.chart.height = 300;
    o.series = [{ name: "Days of cover", data: INVT_COVER_DAYS }];
    o.colors = INVT_COVER_DAYS.map((d) => {
      if (d < INVT_COVER_MIN) return t.rose;
      return d > INVT_COVER_MAX ? t.violet : t.emerald;
    });
    o.plotOptions = {
      bar: {
        horizontal: true,
        distributed: true,
        barHeight: "58%",
        borderRadius: 5,
        borderRadiusApplication: "end",
      },
    };
    /* Every bar clears a sixth of the axis, so the reading always fits inside
       its own fill and takes the on-mark ink rather than the surface ink. */
    o.dataLabels = {
      enabled: true,
      formatter: (v) => v + "d",
      style: {
        fontSize: "12px",
        fontWeight: 600,
        fontFamily: "inherit",
        colors: [t.labelOnFill],
      },
      dropShadow: { enabled: false },
    };
    /* guide lines run with the value axis — vertical on a horizontal plot */
    o.grid.xaxis = { lines: { show: true } };
    o.grid.yaxis = { lines: { show: false } };
    o.grid.padding = { left: 8, right: 8 };
    o.xaxis = {
      categories: INVT_COVER_CATEGORIES,
      min: 0,
      max: 120,
      tickAmount: 4,
      axisBorder: axisBaseline(t),
      axisTicks: { show: false },
      labels: { formatter: (v) => Math.round(v) + "d" },
      tooltip: { enabled: false },
    };
    /* Deliberately NOT flipped for RTL, like the grade-bands plot: ApexCharts can
       mirror the label gutter but not the growth direction of a horizontal bar,
       so `opposite: true` would strand each band label away from the bar it
       names. Keeping the gutter on the leading edge keeps the pair adjacent. */
    o.yaxis = { opposite: false };
    o.tooltip = {
      theme: t.dark ? "dark" : "light",
      y: { formatter: (v) => v + " days of cover" },
    };
    return o;
  }

  /* ===== Inventory Dashboard — Stock Flow - diverging stacked columns =====
     Units received against units issued, one column pair per day. Diverging
     rather than grouped: receipts and issues are opposite directions of the
     same quantity, so putting them on opposite sides of the zero line makes the
     day's NET the visible gap — which a side-by-side pair leaves the reader to
     work out. The axis is pinned symmetrically for the same reason: an
     auto-scaled diverging plot puts zero wherever the data lands, and the
     baseline has to sit in the middle for the two halves to be comparable.
     `borderRadiusWhenStacked: "all"` rather than the "last" used by the stacked
     panels elsewhere here — those stack segments rest ON each other and are
     capped once so the column reads as one bar, whereas these two diverge from
     the baseline and each is a bar in its own right.
     The gutter prints magnitudes on both halves: the sign is already carried by
     the side of the baseline a column is on, so a repeated minus would only
     restate it, and the tooltip does the same. Emerald in, blue out — the same
     two hues the log beside it puts on its deltas, so a column and a row are
     recognisably the same movement. */
  const INVT_FLOW_DAYS = ["Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed"];
  const INVT_FLOW_IN = [3240, 4180, 1260, 980, 5120, 4460, 4820];
  const INVT_FLOW_OUT = [-2860, -3540, -1120, -760, -4180, -3920, -3164];
  const INVT_FLOW_BOUND = 6000;

  function invtStockFlowOpts(t) {
    const o = base(t);
    o.chart.type = "bar";
    o.chart.height = 300;
    o.chart.stacked = true;
    o.series = [
      { name: "Stock in", data: INVT_FLOW_IN },
      { name: "Stock out", data: INVT_FLOW_OUT },
    ];
    o.colors = [t.emerald, t.blue];
    o.plotOptions = {
      bar: {
        columnWidth: "48%",
        borderRadius: 4,
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "all",
      },
    };
    o.grid.xaxis = { lines: { show: false } };
    o.grid.padding = { left: 8, right: 8 };
    o.xaxis = {
      categories: INVT_FLOW_DAYS,
      axisBorder: axisBaseline(t),
      axisTicks: { show: false },
      tooltip: { enabled: false },
    };
    /* No numeric gutter, by decision rather than omission. ApexCharts ticks a
       stacked plot from its stacked TOTALS — here the small daily nets — so it
       stopped emitting labels at the zero line and left the whole lower half
       unlabelled; neither tickAmount, an explicit stepSize, nor merging the two
       axes onto both series moved it. A half-labelled axis is worse than none,
       and this panel is not where the precise figures are read: the card prints
       the day's receipts, issues and net immediately beneath the plot, and the
       tooltip carries the per-day values. So the plot keeps the job it is good
       at — the SHAPE of in against out — and the reading is handed to the text.
       Declared as ONE object rather than an array, which is also what keeps the
       columns stacked: an array binds a series per axis, ApexCharts will not
       stack across two axes, and the pair silently degrades to offset grouped
       bars. Naming both series on both axes stacks them again but has each
       series referenced twice, which ApexCharts warns about on every build. A
       single axis is the form that is correct on all three counts. The bounds
       stay explicit and symmetric so the baseline sits in the middle. */
    o.yaxis = {
      show: false,
      min: -INVT_FLOW_BOUND,
      max: INVT_FLOW_BOUND,
      opposite: t.rtl,
    };
    /* With no gutter the horizontal rungs measure nothing, so the only rule
       left is the one that carries meaning on a diverging plot: the baseline
       that separates stock coming in from stock going out. */
    o.grid.yaxis = { lines: { show: false } };
    o.annotations = {
      yaxis: [{ y: 0, borderColor: t.chartBorder, strokeDashArray: 0 }],
    };
    o.tooltip = {
      theme: t.dark ? "dark" : "light",
      shared: true,
      intersect: false,
      y: { formatter: (v) => Math.abs(v).toLocaleString("en-US") + " units" },
    };
    return o;
  }

  /* ===== Inventory Dashboard — Stock Distribution - stacked horizontal bars =====
     Where the units on hand physically sit. One bar per site, segmented by
     product category, so the bar LENGTH answers "which site holds the most
     stock" while the segments answer "of what" — two readings a grouped plot
     would split across four separate bars per site.
     Horizontal for the same two reasons the cover plot is: the categories on the
     axis are place names rather than periods, and mountApexChart leaves
     horizontal bars unwrapped, so four long bars fit the column instead of
     scrolling inside it.
     A categorical palette, deliberately NOT the emerald / amber / blue / rose
     severity ramp the rest of this page uses — nothing here is healthy or
     critical, these are five product lines — with slate reserved for the "Other"
     remainder so the tail reads as a leftover rather than as a sixth line. The
     same five hues are repeated by the legend dots above the plot.
     Sites are declared largest-first, the order the tiles beneath the row are
     ranked in, and fed to ApexCharts as declared: a horizontal bar plot lays its
     first category along the TOP, so the biggest site already leads. */
  const INVT_SITE_NAMES = ["Central DC", "East Hub", "West Depot", "North Store"];
  const INVT_SITE_MIX = [
    { name: "Electronics", data: [5240, 4820, 2180, 1460] },
    { name: "Apparel", data: [6180, 4120, 3240, 2380] },
    { name: "Home & Kitchen", data: [3460, 2240, 2120, 1280] },
    { name: "Sports & Outdoor", data: [2340, 1660, 1740, 1152] },
    { name: "Other", data: [1200, 800, 600, 380] },
  ];
  /* clears the largest site's 18,420 and divides evenly by the tick count */
  const INVT_SITE_MIX_MAX = 20000;

  function invtWarehouseMixOpts(t) {
    const o = base(t);
    o.chart.type = "bar";
    o.chart.height = 400;
    o.chart.stacked = true;
    /* a fresh series object per call — ApexCharts merges options into its own
       config, so the shared literal must not be handed over directly */
    o.series = INVT_SITE_MIX.map((s) => ({ name: s.name, data: s.data }));
    o.colors = [t.primary, t.violet, t.blue, t.magenta, t.slate];
    o.plotOptions = {
      bar: {
        horizontal: true,
        barHeight: "54%",
        borderRadius: 5,
        borderRadiusApplication: "end",
        /* the segments rest ON each other and read as one bar, so only the
           outer end is capped — the same call the stacked panels elsewhere make */
        borderRadiusWhenStacked: "last",
      },
    };
    /* guide lines run with the value axis — vertical on a horizontal plot */
    o.grid.xaxis = { lines: { show: true } };
    o.grid.yaxis = { lines: { show: false } };
    o.grid.padding = { left: 8, right: 8 };
    o.xaxis = {
      categories: INVT_SITE_NAMES,
      min: 0,
      max: INVT_SITE_MIX_MAX,
      tickAmount: 4,
      axisBorder: axisBaseline(t),
      axisTicks: { show: false },
      /* zero is printed bare — "0K" reads as a measurement rather than the origin */
      labels: { formatter: (v) => (v ? Math.round(v / 1000) + "K" : "0") },
      tooltip: { enabled: false },
    };
    /* Deliberately NOT flipped for RTL, like the cover plot: ApexCharts can
       mirror the label gutter but not the growth direction of a horizontal bar,
       so `opposite: true` would strand each site name away from its own bar. */
    o.yaxis = { opposite: false };
    o.tooltip = {
      theme: t.dark ? "dark" : "light",
      shared: true,
      intersect: false,
      y: { formatter: (v) => v.toLocaleString("en-US") + " units" },
    };
    return o;
  }

  /* ===== Inventory Dashboard — Capacity Utilisation - multi-track radial =====
     How full each site's rack space is, one track per location on the shared
     multi-radial so four readings share a centre instead of four separate
     rings. Ordered fullest-first, which is also the order the list beside it
     runs in: ApexCharts draws the first series as the OUTERMOST track, so the
     site closest to running out of room takes the ring the eye lands on first.
     Colours are the page's severity ramp rather than a per-site palette — the
     question a capacity panel answers is how much trouble each site is in, and
     rose / amber / emerald / blue is the same scale the status badges on the
     tiles below carry. The list beside the plot is its legend, so the dots there
     repeat these four hues in the same order.
     The centre carries the NETWORK figure as an HTML .chart-center overlay,
     which is what the builder's roomy hollow exists for. */
  const INVT_CAPACITY_SITES = ["North Store", "East Hub", "Central DC", "West Depot"];
  const INVT_CAPACITY_USED = [91, 78, 64, 46];

  function invtCapacityOpts(t) {
    const o = radialOpts(
      t,
      INVT_CAPACITY_USED,
      INVT_CAPACITY_SITES,
      [t.rose, t.amber, t.emerald, t.blue],
    );
    o.chart.height = 280;
    return o;
  }

  /* ===== Inventory Dashboard — Fast Mover velocity sparklines =====
     One seven-day trace of units shipped per leaderboard row, on the shared
     area-spark builder. A single hue for all six rather than one per row: the
     trace answers "how steadily does this SKU move", while the pill at the end
     of the same row answers "how much cover is left" on the severity ramp —
     colouring the trace as well would blur two different readings into one.
     Shorter than the builder's default, because the mount is the fixed 7.5rem
     .chart-inline-lg box that sits INSIDE a 40px avatar row; at full height the
     trace would set the row height instead of fitting it. */
  const INVT_MOVER_SPARK_H = 32;
  const INVT_MOVER_SPARKS = [
    { id: "invtMoverSpark1", data: [118, 132, 96, 84, 141, 155, 135] },
    { id: "invtMoverSpark2", data: [96, 108, 84, 72, 118, 132, 132] },
    { id: "invtMoverSpark3", data: [88, 102, 76, 68, 112, 124, 123] },
    { id: "invtMoverSpark4", data: [78, 86, 64, 58, 94, 104, 104] },
    { id: "invtMoverSpark5", data: [66, 74, 56, 48, 84, 92, 91] },
    { id: "invtMoverSpark6", data: [58, 64, 48, 42, 72, 82, 82] },
  ];

  /* ===== Inventory Dashboard — Fastest Mover spotlight trace =====
     The same week the leaderboard's top row carries, drawn larger inside the
     gradient panel beside it. On the LINE builder rather than the area one, and
     in the on-fill ink: the area builder's gradient wash is designed for a card
     face, and over the panel's own gradient it only muddies the ground it is
     drawn on. Taller than that builder's row-sized default, since here the trace
     is a panel element in its own right rather than a mark beside a number. */
  const INVT_SPOTLIGHT_TREND = [118, 132, 96, 84, 141, 155, 135];
  const INVT_SPOTLIGHT_SPARK_H = 64;

  /* ===== Inventory Dashboard — Velocity Against Cover - bubble =====
     The section's "so what": a fast mover is only good news while the stock
     behind it lasts. Velocity on x, days of cover on y and stock value as the
     mark's area — three readings at once, which no bar or line here can carry,
     and the reason this panel is a bubble rather than a fourth ranked list.
     Read as quadrants around the reorder line: far right and low is a SKU
     selling hard with days left, far right and high is capital sitting still in
     a good seller. The dashed rule at fourteen days is the page's own reorder
     rule, so the plot names the same threshold the alerts section counts against.
     One series per product line, on the SAME category-to-hue mapping the
     warehouse distribution plot uses, so a colour means the same category in
     both places. SKU names ride in the tooltip's title through the x formatter —
     a bubble carries no label of its own, and category plus two numbers would
     otherwise leave the reader unable to name what they are looking at. */
  const INVT_VELOCITY_SERIES = [
    {
      name: "Electronics",
      skus: ["Halo Wireless Earbuds", "Pulse Fitness Band", "Nova Smart Scale"],
      points: [[99, 11, 92], [61, 19, 55], [44, 28, 38]],
    },
    {
      name: "Apparel",
      skus: ["Solstice Linen Shirt", "Vela Knit Cardigan", "Terra Field Jacket"],
      points: [[123, 14, 86], [68, 26, 62], [52, 38, 61]],
    },
    {
      name: "Home & Kitchen",
      skus: ["Cascade Steel Kettle", "Lumen Desk Lamp", "Verdant Herb Planter"],
      points: [[84, 30, 76], [64, 31, 34], [41, 44, 19]],
    },
    {
      name: "Sports & Outdoor",
      skus: ["Aurora Canvas Backpack", "Meridian Yoga Mat", "Cirrus Running Vest"],
      points: [[106, 22, 78], [73, 9, 21], [46, 33, 29]],
    },
  ];
  /* the page's reorder rule, in days of demand covered */
  const INVT_REORDER_COVER = 14;

  /* Names the SKU a bubble stands for, then restates its velocity — the tooltip
     title is the only line on a bubble tooltip that can carry text. Defensive
     about `opts`: ApexCharts calls a formatter bare in some passes. */
  function invtVelocityPointLabel(value, opts) {
    const series = opts && INVT_VELOCITY_SERIES[opts.seriesIndex];
    const sku = series && series.skus[opts.dataPointIndex];
    return (sku ? sku + " · " : "") + value + " units / day";
  }

  function invtVelocityCoverOpts(t) {
    const o = bubbleOpts(
      t,
      INVT_VELOCITY_SERIES.map((s) => ({
        name: s.name,
        data: s.points.map((p) => ({ x: p[0], y: p[1], z: p[2] })),
      })),
      [t.primary, t.violet, t.blue, t.magenta],
    );
    o.chart.height = 360;
    /* Both gutters are pinned rather than auto-scaled: the quadrant reading only
       works if the reorder rule sits at a fixed place on the plot, and an
       auto-scaled axis would move it every time the data changed. Zero is
       printed bare in both — "0/d" and "0d" read as measurements, not origins. */
    o.xaxis.min = 20;
    o.xaxis.max = 140;
    /* five, not six: ApexCharts splits a NUMERIC x gutter into tickAmount + 1
       intervals, so six would land the steps on 17.1 and print 37/d, 54/d, 71/d
       across the axis. Five gives the round twenty-unit step. */
    o.xaxis.tickAmount = 5;
    o.xaxis.labels = { formatter: (v) => Math.round(v) + "/d" };
    o.yaxis.min = 0;
    o.yaxis.max = 50;
    o.yaxis.tickAmount = 5;
    o.yaxis.labels = { formatter: (v) => (v ? Math.round(v) + "d" : "0") };
    o.annotations = {
      yaxis: [
        {
          y: INVT_REORDER_COVER,
          borderColor: t.rose,
          strokeDashArray: 5,
          label: {
            /* pinned to the quiet end of the rule: the fastest movers sit at the
               far right of the plot, and a label there lands on top of them */
            position: "left",
            textAnchor: "start",
            text: "Reorder point · 14 days of cover",
            offsetX: 6,
            offsetY: -4,
            borderWidth: 0,
            style: {
              background: t.surface,
              color: t.rose,
              fontSize: "11px",
              fontWeight: 600,
              fontFamily: "inherit",
            },
          },
        },
      ],
    };
    o.tooltip = {
      theme: t.dark ? "dark" : "light",
      x: { formatter: invtVelocityPointLabel },
      y: { formatter: (v) => v + " days of cover" },
      z: { title: "Stock value:", formatter: (v) => "$" + v + "K" },
    };
    return o;
  }

  /* ===== Help Desk Dashboard — Status trend sparklines =====
     One seven-day trace per ticket status, on the shared area-spark builder.
     These fill the foot of their status tile rather than sitting inline beside
     the figure, so they run the tile's full width and take a taller band than
     the builder's default — the tiles stretch to the SLA panel opposite them,
     and a row-sized trace would leave a dead strip above itself instead.
     `hue` repeats the legend dot and the bar segment above it (blue / amber /
     emerald), so a tile, its share of the stacked mix and its trend all read as
     one colour rather than three unrelated marks. Deliberately not coloured by
     direction: on two of these three counts a RISE is the bad news, so a shared
     "up = green" reading would mislead. */
  const HD_STATUS_SPARK_H = 100;
  const HD_STATUS_SPARKS = [
    { id: "hdOpenSpark", hue: "blue", data: [1181, 1198, 1166, 1213, 1226, 1210, 1248] },
    { id: "hdPendingSpark", hue: "amber", data: [702, 718, 745, 731, 722, 750, 736] },
    { id: "hdResolvedSpark", hue: "emerald", data: [8994, 9330, 9648, 9902, 10014, 10184, 10502] },
  ];

  /* ===== Help Desk Dashboard — SLA compliance gauge =====
     Share of the last thirty days' tickets answered and closed inside target,
     on the shared 270° gauge — the "percent of target" builder, which is exactly
     the reading here. Emerald rather than the preset accent: this is the panel's
     health verdict against a fixed 95% target, and it answers the rose breach
     row below it on the same severity ramp the status tiles use.
     The gauge sits ON the dark gradient panel, but readTheme() samples the page
     root, so its track would arrive as the light-mode guide-line tone and ring
     the fill with a bright band. A dimmed member of the gauge's OWN hue keeps
     the unmet share quiet on that ground in both modes — the same treatment the
     tinted spark bars use for a quiet bar. */
  const HD_SLA_COMPLIANCE = 94.6;
  const HD_SLA_TRACK_DIM = 0.62;
  /* Shorter than the builder's default: the gauge shares its row with the ticket
     pipeline card, and at full size the panel around it outgrew that card by
     enough to open a dead band inside the status tiles opposite. */
  const HD_SLA_GAUGE_H = 200;

  function hdSlaGaugeOpts(t) {
    const o = gaugeOpts(t, [HD_SLA_COMPLIANCE], t.emerald);
    o.chart.height = HD_SLA_GAUGE_H;
    o.plotOptions.radialBar.track.background = dimHue(t.emerald, HD_SLA_TRACK_DIM, true);
    return o;
  }

  /* ===== Help Desk Dashboard — Ticket Volume - column / line combo =====
     What came IN against what went OUT, one column pair per month, with the
     month's resolution rate carried as a line on its own axis. Counts and a
     percentage cannot share a scale, so each series declares its own `type` and
     its own gutter — the counts keep the reading edge, the rate takes the far
     side, and both swap ends together under RTL.
     A rolling twelve months ending on the current period rather than a calendar
     year: the panel exists to show the run-up INTO today's position, and a
     Jan–Dec axis would spend a third of its width on months that have not
     happened. The last pair is deliberately the widest gap on the plot — this
     month closed 10,502 of 12,486, which is the same 84.1% the Support Overview
     prints on its status mix, and the rate line dropping out of its band is the
     panel's whole finding. mountApexChart wraps the plot for narrow screens. */
  const HD_VOLUME_MONTHS = [
    "Sep", "Oct", "Nov", "Dec", "Jan", "Feb",
    "Mar", "Apr", "May", "Jun", "Jul", "Aug",
  ];
  const HD_VOLUME_CREATED = [9840, 10260, 11480, 10920, 9760, 10180, 11020, 11460, 11840, 12060, 11920, 12486];
  const HD_VOLUME_RESOLVED = [9520, 9980, 10880, 10600, 9420, 9860, 10620, 11040, 11360, 11680, 11540, 10502];
  const HD_VOLUME_RATE = [96.7, 97.3, 94.8, 97.1, 96.5, 96.9, 96.4, 96.3, 95.9, 96.8, 96.8, 84.1];

  function hdVolumeOpts(t) {
    const o = base(t);
    /* mixed series — chart.type is only the fallback for a series without one */
    o.chart.type = "line";
    o.chart.height = 340;
    o.series = [
      { name: "Created", type: "column", data: HD_VOLUME_CREATED },
      { name: "Resolved", type: "column", data: HD_VOLUME_RESOLVED },
      { name: "Resolution rate", type: "line", data: HD_VOLUME_RATE },
    ];
    o.colors = [t.blue, t.emerald, t.primary];
    /* zero-width stroke on both column series — only the rate line is drawn */
    o.stroke = { width: [0, 0, 3], curve: "smooth", lineCap: "round" };
    o.plotOptions = {
      bar: { columnWidth: "62%", borderRadius: 4, borderRadiusApplication: "end" },
    };
    o.markers = { size: 0, strokeWidth: 3, hover: { size: 7 } };
    o.grid.xaxis = { lines: { show: false } };
    o.grid.yaxis = { lines: { show: true } };
    o.grid.padding = { left: 8, right: 8 };
    o.xaxis = {
      categories: HD_VOLUME_MONTHS,
      axisBorder: axisBaseline(t),
      axisTicks: { show: false },
      tooltip: { enabled: false },
    };
    o.yaxis = [
      {
        seriesName: "Created",
        min: 0,
        max: 15000,
        tickAmount: 5,
        opposite: t.rtl,
        labels: { formatter: (v) => (v ? Math.round(v / 1000) + "K" : "0") },
      },
      /* the second count series rides the first gutter rather than opening a
         third — same unit, same scale, so a gutter of its own would only repeat
         the numbers already printed on the reading edge */
      { seriesName: "Created", show: false, min: 0, max: 15000 },
      {
        seriesName: "Resolution rate",
        /* floored well below the band the rate normally holds, so the line has
           somewhere to fall to — pinned at 0–100 the whole trace flattens into
           the top tenth of the plot and this month's drop stops reading */
        min: 60,
        max: 100,
        tickAmount: 4,
        opposite: !t.rtl,
        labels: { formatter: (v) => Math.round(v) + "%" },
      },
    ];
    o.tooltip = {
      theme: t.dark ? "dark" : "light",
      shared: true,
      intersect: false,
      y: [
        { formatter: (v) => v.toLocaleString("en-US") + " tickets" },
        { formatter: (v) => v.toLocaleString("en-US") + " tickets" },
        { formatter: (v) => v.toFixed(1) + "% resolved" },
      ],
    };
    return o;
  }

  /* ===== Help Desk Dashboard — Resolution Trend - gradient area =====
     Average hours from first reply to close, one point per month, on the shared
     area chrome the full-size panels use. A single series on its own scale: the
     reading is the SHAPE of the fall, so the axis is floored at zero — starting
     it at the data would exaggerate a 2.2-hour improvement into a collapse.
     Emerald rather than the preset accent, because on this metric DOWN is the
     good news and the hue has to agree with the badge above the plot. */
  const HD_RESOLUTION_HOURS = [8.4, 8.1, 8.6, 7.9, 7.6, 7.4, 7.1, 6.9, 6.7, 6.5, 6.4, 6.2];

  function hdResolutionTrendOpts(t) {
    const o = base(t);
    o.chart.type = "area";
    o.chart.height = 190;
    o.series = [{ name: "Avg resolution", data: HD_RESOLUTION_HOURS }];
    o.colors = [t.emerald];
    o.stroke = { curve: "smooth", width: 2.5 };
    o.fill = areaFill(t, o.colors);
    o.grid.xaxis = { lines: { show: false } };
    o.grid.yaxis = { lines: { show: true } };
    o.grid.padding = { left: 8, right: 8, top: 8 };
    o.xaxis = {
      categories: HD_VOLUME_MONTHS,
      axisBorder: axisBaseline(t),
      axisTicks: { show: false },
      /* Twelve months in the narrowest column on the page. Left to itself
         ApexCharts tilts the gutter to 45° to fit them, which clips the first
         label against the card edge and turns a quiet trend band into a wall of
         diagonal text — so the labels stay flat and the ones that no longer fit
         are dropped instead. The trace, not the month names, is the reading. */
      labels: { rotate: 0, rotateAlways: false, hideOverlappingLabels: true },
      tooltip: { enabled: false },
    };
    o.yaxis = {
      min: 0,
      max: 10,
      tickAmount: 2,
      opposite: t.rtl,
      labels: { formatter: (v) => Math.round(v) + "h" },
    };
    o.tooltip = {
      theme: t.dark ? "dark" : "light",
      y: { formatter: (v) => hdHoursLabel(v) },
    };
    return o;
  }

  /* Decimal hours read as a duration — "6h 12m" rather than "6.2". Shared by
     the resolution trend tooltip and any future duration axis here. */
  function hdHoursLabel(hours) {
    const h = Math.floor(hours);
    const m = Math.round((hours - h) * 60);
    return m ? h + "h " + m + "m" : h + "h";
  }

  /* ===== Help Desk Dashboard — Response Performance - heatmap =====
     Median minutes to first reply across weekday and shift. A heatmap rather
     than a line per shift, because the question is WHEN the desk is slow — a
     staffing question, answered by finding the block, not by tracing five
     overlapping series.
     The colour scale is a severity ramp on the shared categorical hues rather
     than one dimmed hue: minutes-to-reply is a target-bounded reading, so the
     bands have to say "inside target / drifting / late", which a single-hue
     ramp can only say by intensity. Emerald through lime and amber to rose is
     the same ordering the status tiles above use, so a fast block here and a
     healthy tile there are recognisably the same verdict. */
  const HD_RESPONSE_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const HD_RESPONSE_SHIFTS = [
    { name: "22:00 – 06:00", data: [52, 48, 55, 51, 58, 74, 68] },
    { name: "18:00 – 22:00", data: [31, 28, 33, 30, 38, 49, 44] },
    { name: "14:00 – 18:00", data: [14, 12, 15, 13, 19, 33, 29] },
    { name: "10:00 – 14:00", data: [9, 8, 10, 9, 12, 26, 24] },
    { name: "06:00 – 10:00", data: [22, 19, 21, 20, 24, 41, 36] },
  ];

  function hdResponseHeatmapOpts(t) {
    const o = heatmapOpts(
      t,
      HD_RESPONSE_SHIFTS.map((s) => ({
        name: s.name,
        data: s.data.map((v, i) => ({ x: HD_RESPONSE_DAYS[i], y: v })),
      })),
      [
        { from: 0, to: 12, color: t.emerald, name: "Under 12m" },
        { from: 13, to: 25, color: t.lime, name: "12 – 25m" },
        { from: 26, to: 45, color: t.amber, name: "25 – 45m" },
        { from: 46, to: 240, color: t.rose, name: "Over 45m" },
      ],
    );
    o.chart.height = 340;
    o.tooltip.y = { formatter: (v) => v + " min to first reply" };
    return o;
  }

  /* ===== Help Desk Dashboard — First Response by Priority - target burn =====
     Each queue's median first reply as a share of the target it is held to, one
     bar per priority, with the raw pair printed on the mark.
     Deliberately NOT minutes on a shared axis. The four targets span 10 to 120
     minutes, so a single linear scale in minutes squeezes Urgent — the row that
     matters most — into a 5% stub that cannot carry its own label, while Low
     runs the full width simply because it is allowed longer. Normalising to
     "share of target used" puts all four on the one scale that is actually
     comparable and answers the question the panel is for: how much headroom is
     left before each queue breaches.
     Colour is the severity band rather than one hue per row: under half the
     target is comfortable, past 80% the queue is about to breach. Same emerald
     / amber / rose ordering the heatmap beside it uses, so a hot band there and
     a hot bar here read as the same verdict.
     Horizontal because the categories are names rather than periods, and
     because mountApexChart leaves horizontal bars unwrapped — so the plot fits
     the narrow column it shares a row with instead of scrolling inside it. */
  const HD_PRIORITIES = ["Urgent", "High", "Normal", "Low"];
  const HD_PRIORITY_ACTUAL = [6, 14, 24, 47];
  const HD_PRIORITY_TARGET = [10, 30, 60, 120];
  const HD_PRIORITY_BURN = HD_PRIORITY_ACTUAL.map((a, i) =>
    Math.round((a / HD_PRIORITY_TARGET[i]) * 100),
  );
  const HD_BURN_WATCH = 50;
  const HD_BURN_RISK = 80;

  function hdPriorityResponseOpts(t) {
    const o = base(t);
    o.chart.type = "bar";
    o.chart.height = 300;
    o.series = [{ name: "Target used", data: HD_PRIORITY_BURN }];
    o.colors = HD_PRIORITY_BURN.map((v) => {
      if (v >= HD_BURN_RISK) return t.rose;
      return v >= HD_BURN_WATCH ? t.amber : t.emerald;
    });
    o.plotOptions = {
      bar: {
        horizontal: true,
        distributed: true,
        barHeight: "58%",
        borderRadius: 5,
        borderRadiusApplication: "end",
      },
    };
    /* The percentage is already the bar's length, so printing it again would
       say nothing — the label carries the pair the share was computed from,
       which is the reading a support lead actually quotes. Every bar clears a
       third of the axis, so it fits inside its own fill and takes the on-mark
       ink rather than the surface ink. */
    o.dataLabels = {
      enabled: true,
      formatter: (v, opts) => {
        const i = opts.dataPointIndex;
        return HD_PRIORITY_ACTUAL[i] + "m / " + HD_PRIORITY_TARGET[i] + "m";
      },
      style: {
        fontSize: "11px",
        fontWeight: 600,
        fontFamily: "inherit",
        colors: [t.labelOnFill],
      },
      dropShadow: { enabled: false },
    };
    /* guide lines run with the value axis — vertical on a horizontal plot */
    o.grid.xaxis = { lines: { show: true } };
    o.grid.yaxis = { lines: { show: false } };
    o.grid.padding = { left: 8, right: 8 };
    o.xaxis = {
      categories: HD_PRIORITIES,
      min: 0,
      max: 100,
      tickAmount: 4,
      axisBorder: axisBaseline(t),
      axisTicks: { show: false },
      labels: { formatter: (v) => Math.round(v) + "%" },
      tooltip: { enabled: false },
    };
    /* Deliberately NOT flipped for RTL, like the stock-cover plot: ApexCharts
       can mirror the label gutter but not the growth direction of a horizontal
       bar, so `opposite: true` would strand each priority label away from the
       bar it names. */
    o.yaxis = { opposite: false };
    o.tooltip = {
      theme: t.dark ? "dark" : "light",
      y: {
        formatter: (v, opts) => {
          const i = opts.dataPointIndex;
          return (
            v +
            "% of target — " +
            HD_PRIORITY_ACTUAL[i] +
            " min against " +
            HD_PRIORITY_TARGET[i] +
            " min"
          );
        },
      },
    };
    return o;
  }

  /* ===== Help Desk Dashboard — Speed Against Output - bubble =====
     One bubble per agent, carrying all three readings the section is about at
     once: how fast they answer (x), how much they close (y) and how big a desk
     they are holding right now (z). Three ranked lists could not say this — the
     point is the TRADE-OFF between them, and a large bubble sitting high and
     right is an agent whose speed is being paid for by a queue nobody else is
     taking, which only shows up when the three are read together.
     Series are teams rather than performance bands, so colour stays a legend of
     queues — the same category-to-hue reading the ticket lists above use — and
     nothing here implies "green agent / red agent" about a person.
     The desk's 20-minute first-response rule is drawn on the plot: the useful
     question is who sits the wrong side of it, which an axis label alone cannot
     answer. Pinned, like the reorder rule on the stock-velocity plot, so it
     stays in the same place whatever the data does. */
  const HD_AGENT_TEAMS = [
    {
      name: "Tier 1 support",
      agents: ["Aarav Shah", "Hana Sato", "Felix Moreau", "Diego Alvarez"],
      points: [[11, 452, 21], [9, 418, 14], [19, 371, 19], [21, 316, 30]],
    },
    {
      name: "Tier 2 technical",
      agents: ["Priya Nair", "Elena Vasquez", "Tobias Krause", "Ruth Mensah"],
      points: [[8, 486, 16], [13, 404, 23], [17, 342, 28], [23, 281, 12]],
    },
    {
      name: "Billing",
      agents: ["Marcus Bell", "Amara Diallo", "Jonas Lindqvist", "Zainab Iqbal"],
      points: [[14, 389, 25], [18, 327, 19], [26, 254, 33], [31, 196, 9]],
    },
  ];
  /* the desk's first-response SLA, in minutes */
  const HD_AGENT_TARGET_MIN = 20;

  /* Names the agent a bubble stands for, then restates their reply speed — the
     tooltip title is the only line on a bubble tooltip that can carry text, and
     a team plus three numbers would otherwise leave the reader unable to say
     WHO they are looking at. Defensive about `opts`: ApexCharts calls a
     formatter bare in some passes. */
  function hdAgentPointLabel(value, opts) {
    const team = opts && HD_AGENT_TEAMS[opts.seriesIndex];
    const agent = team && team.agents[opts.dataPointIndex];
    return (agent ? agent + " · " : "") + value + " min to first reply";
  }

  function hdAgentLoadOpts(t) {
    const o = bubbleOpts(
      t,
      HD_AGENT_TEAMS.map((s) => ({
        name: s.name,
        data: s.points.map((p) => ({ x: p[0], y: p[1], z: p[2] })),
      })),
      [t.primary, t.violet, t.blue],
    );
    o.chart.height = 360;
    /* room above the plot for the target rule's label */
    o.grid.padding = { left: 8, right: 8, top: 24 };
    /* Both gutters are pinned rather than auto-scaled, for the same reason the
       stock-velocity plot pins its own: the reading is positional against a
       fixed rule, and an axis that moved with the data would move the rule with
       it. Four steps on each, so the minutes land on tens and the counts on
       hundreds instead of on values nobody quotes. */
    o.xaxis.min = 0;
    o.xaxis.max = 40;
    o.xaxis.tickAmount = 4;
    o.xaxis.labels = { formatter: (v) => Math.round(v) + "m" };
    /* floored at 150 rather than 0: this is a scatter, so the reading is where
       an agent sits RELATIVE to the others, and a gutter starting at zero would
       press all twelve into the top third of the plot */
    o.yaxis.min = 150;
    o.yaxis.max = 550;
    o.yaxis.tickAmount = 4;
    o.yaxis.labels = { formatter: (v) => Math.round(v) };
    o.annotations = {
      xaxis: [
        {
          x: HD_AGENT_TARGET_MIN,
          borderColor: t.rose,
          strokeDashArray: 5,
          label: {
            /* ApexCharts turns an x-axis annotation label on its side by
               default, which stands a line of text up THROUGH the plot and
               across the bubbles it is meant to explain — so it is laid flat
               and lifted into the padding above the gutter instead.
               Anchored into the slow half: the fast agents crowd the left of
               the rule, and a label there lands on top of them. */
            orientation: "horizontal",
            position: "top",
            textAnchor: "start",
            text: "First response target · 20 min",
            offsetX: 6,
            offsetY: -6,
            borderWidth: 0,
            style: {
              background: t.surface,
              color: t.rose,
              fontSize: "11px",
              fontWeight: 600,
              fontFamily: "inherit",
            },
          },
        },
      ],
    };
    o.tooltip = {
      theme: t.dark ? "dark" : "light",
      x: { formatter: hdAgentPointLabel },
      y: { formatter: (v) => v.toLocaleString("en-US") + " tickets resolved" },
      z: { title: "Open now:", formatter: (v) => v + " tickets" },
    };
    return o;
  }

  /* ===== Help Desk Dashboard — Ticket Categories - premium donut =====
     What the month's tickets were actually ABOUT, as a share of the whole. A
     ring rather than a bar row because the reading is composition — these six
     categories are the entire 12,486, so the question is how the total divides,
     not how six independent counts compare. The centre carries that total, so
     the panel never makes the reader add the arcs up.
     Six categories rather than a severity ramp, so the hues are a legend of
     subjects: the same brand / violet / blue / amber / emerald / slate ordering
     the list beside it puts on its dots, and the same hue is repeated by the
     rank box of an account in the leaderboard below whose tickets mostly land
     in that category — so a colour means one subject across the whole section.
     Shares rather than counts: the on-arc labels and the hover centre are both
     percentages, so feeding the builder anything else would have it print a
     percentage OF the percentages. */
  const HD_CATEGORY_LABELS = [
    "Billing & Payments",
    "Technical Issues",
    "Account & Access",
    "Product Questions",
    "Shipping & Delivery",
    "Other",
  ];
  const HD_CATEGORY_SHARE = [26, 23, 17, 14, 11, 9];

  function hdCategoryMixOpts(t) {
    const colors = [t.primary, t.violet, t.blue, t.amber, t.emerald, t.slate];
    const o = premiumDonutOpts(
      t,
      HD_CATEGORY_SHARE,
      HD_CATEGORY_LABELS,
      colors,
      colors.map(() => t.labelOnFill),
      { label: "Tickets", value: "12,486" },
    );
    o.chart.height = 260;
    return o;
  }

  /* ===== Help Desk Dashboard — Customer Activity - stacked columns =====
     How many PEOPLE wrote in each week, split by whether the desk had heard
     from them before. Stacked rather than grouped: first-timers and returners
     are two parts of one population, so the column's full height is the week's
     contact volume and the split sits inside it — a side-by-side pair would
     show the two parts but lose the total, which is the reading the staffing
     decision actually turns on.
     Six weeks rather than twelve months: this is the companion to the category
     ring, which already carries the month, and a weekly pitch is what shows the
     mid-August step up. Six also keeps the plot under the shared scroll
     wrapper's threshold, so it fits the narrow column it lives in rather than
     scrolling inside it.
     Brand for the returning bulk and violet for the newcomers — the same two
     leading hues the category ring opens on, so the section reads as one
     palette rather than two. */
  const HD_ACTIVITY_WEEKS = ["Jul 21", "Jul 28", "Aug 4", "Aug 11", "Aug 18", "Aug 25"];
  const HD_ACTIVITY_RETURNING = [596, 641, 604, 672, 658, 694];
  const HD_ACTIVITY_NEW = [178, 221, 196, 238, 214, 231];

  function hdCustomerActivityOpts(t) {
    const o = base(t);
    o.chart.type = "bar";
    o.chart.height = 280;
    o.chart.stacked = true;
    o.series = [
      { name: "Returning", data: HD_ACTIVITY_RETURNING },
      { name: "First-time", data: HD_ACTIVITY_NEW },
    ];
    o.colors = [t.primary, t.violet];
    /* capped once at the top of the stack — the two segments rest on each other
       and have to read as one column, not as two bars sharing a slot */
    o.plotOptions = {
      bar: {
        columnWidth: "52%",
        borderRadius: 4,
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "last",
      },
    };
    o.grid.xaxis = { lines: { show: false } };
    o.grid.yaxis = { lines: { show: true } };
    o.grid.padding = { left: 8, right: 8 };
    o.xaxis = {
      categories: HD_ACTIVITY_WEEKS,
      axisBorder: axisBaseline(t),
      axisTicks: { show: false },
      tooltip: { enabled: false },
    };
    /* pinned above the tallest week so the columns keep headroom, and left in
       whole people — the counts are three digits, so abbreviating to "0.9K"
       would cost precision the axis has the room to keep */
    o.yaxis = {
      min: 0,
      max: 1000,
      tickAmount: 4,
      opposite: t.rtl,
      labels: { formatter: (v) => Math.round(v) },
    };
    o.tooltip = {
      theme: t.dark ? "dark" : "light",
      shared: true,
      intersect: false,
      y: { formatter: (v) => v.toLocaleString("en-US") + " customers" },
    };
    return o;
  }

  /* ===== Help Desk Dashboard — Top Account ticket sparklines =====
     One six-month trace of tickets raised per leaderboard row, on the shared
     area-spark builder. A single hue for all six rather than one per row, for
     the same reason the stock leaderboard uses one: the trace answers "is this
     account's demand steady or climbing", while the pill at the end of the same
     row answers "is the relationship healthy" — colouring both would blur two
     separate readings into one mark.
     The same 32px as that leaderboard: the mount is the fixed 7.5rem
     .chart-inline-lg box sitting inside a list row, and at the builder's full
     height the trace would set the row height rather than fit it. */
  const HD_ACCOUNT_SPARK_H = 32;
  const HD_ACCOUNT_SPARKS = [
    { id: "hdAccountSpark1", data: [284, 302, 318, 341, 366, 392, 418] },
    { id: "hdAccountSpark2", data: [402, 388, 396, 379, 371, 374, 366] },
    { id: "hdAccountSpark3", data: [188, 206, 221, 238, 254, 272, 291] },
    { id: "hdAccountSpark4", data: [281, 276, 268, 271, 262, 258, 254] },
    { id: "hdAccountSpark5", data: [196, 204, 199, 211, 205, 214, 208] },
    { id: "hdAccountSpark6", data: [162, 168, 171, 166, 174, 179, 176] },
  ];

  /* ===== Help Desk Dashboard — Activity Pulse - hourly spark =====
     Everything the desk logged today, bucketed into two-hour windows. A bare
     trace rather than a full panel: the reading is the SHAPE of the day — the
     overnight flat, the morning ramp, the late-morning peak — and the exact
     counts are already printed as the breakdown rows underneath it. Axes would
     only repeat what those rows say, so the builder's sparkline chrome is
     exactly right and the plot keeps the card's whole width.
     Far taller than the leaderboard traces that share the builder: this one owns
     a band of the card rather than sitting inside a list row, it is the only
     plot in a column that stands beside a nine-event timeline, and at spark
     height the peak would flatten into the noise it exists to stand out from.
     The tooltip is switched back ON, which the builder disables by default —
     with no gutter there is nowhere else for a window's figure to live, and
     "when exactly did that spike land" is the one question the shape alone
     cannot answer. */
  const HD_PULSE_WINDOWS = [
    "00:00", "02:00", "04:00", "06:00", "08:00", "10:00",
    "12:00", "14:00", "16:00", "18:00", "20:00", "22:00",
  ];
  const HD_PULSE_BUCKETS = [18, 9, 6, 24, 186, 421, 398, 386, 344, 342, 268, 168];
  const HD_PULSE_SPARK_H = 220;

  function hdActivityPulseOpts(t) {
    const o = areaSparkOpts(t, t.primary, HD_PULSE_BUCKETS);
    o.chart.height = HD_PULSE_SPARK_H;
    /* hidden by the sparkline chrome, but still what the tooltip title reads */
    o.xaxis = { categories: HD_PULSE_WINDOWS };
    o.tooltip = {
      enabled: true,
      theme: t.dark ? "dark" : "light",
      y: { formatter: (v) => v + " events logged" },
    };
    return o;
  }

  /* ==========================================================================
     User Profile
     ========================================================================== */

  /* ===== User Profile — headline stat sparklines =====
     One eight-period trace per figure in the identity panel, on the shared
     line-spark builder. They take the on-fill label tone rather than a category
     hue for the same reason the medical KPI tiles do: each tile sits on the
     hero's own coloured ground, so a second accent on top would fight it.
     The mount is the fixed 4rem .chart-inline box the builder is sized for. */
  const PROFILE_STAT_SPARKS = [
    { id: "profileProjectsSpark", data: [4, 6, 5, 8, 7, 9, 11, 12] },
    { id: "profileTasksSpark", data: [62, 71, 68, 84, 79, 92, 88, 96] },
    { id: "profileTeamSpark", data: [9, 11, 12, 12, 14, 15, 17, 18] },
    { id: "profileRatingSpark", data: [43, 45, 44, 46, 47, 47, 48, 49] },
  ];

  /* ===== User Profile — Profile Strength - single-value gauge =====
     The shared 270° gauge carrying how much of the account is filled in; the
     percentage in the middle is the HTML .chart-center overlay the builder's
     roomy hollow exists for. Emerald rather than the preset accent: the reading
     is a health state (strong / partial / thin), and it sits beside a checklist
     whose ticks already carry that hue, so the two read as one answer.
     The builder's shared 260 is kept — this ring shares a narrow column with
     two other cards rather than owning a panel of its own. */
  function profileStrengthOpts(t) {
    return gaugeOpts(t, [82], t.emerald);
  }

  /* ===== User Profile — Contribution Activity - smooth gradient area, 2 series =====
     The same twelve-month area panel as the HRM employee overview, wearing one
     person's output: tasks shipped against hours logged. Guide lines run
     horizontal — the question is "how much", so the value bands are what the eye
     needs and the months are already labelled on the axis.
     Both traces share one 0–200 axis: hours run roughly twice the task count, so
     the pair sits in the same band without either flattening onto the baseline,
     and the tooltip names the unit for each. */
  function profileActivityOpts(t) {
    const o = base(t);
    o.chart.type = "area";
    o.chart.height = 300;
    o.series = [
      { name: "Tasks shipped", data: [58, 64, 72, 69, 81, 76, 88, 92, 84, 96, 103, 96] },
      { name: "Hours logged", data: [128, 136, 142, 131, 154, 148, 162, 171, 158, 176, 184, 168] },
    ];
    o.colors = [t.violet, t.cyan];
    o.stroke = { curve: "smooth", width: 4, lineCap: "round" };
    o.fill = areaFill(t, o.colors);
    o.grid.xaxis = { lines: { show: false } };
    o.grid.yaxis = { lines: { show: true } };
    o.grid.padding = { left: 8, right: 8 };
    o.markers = { size: 0, strokeWidth: 3, hover: { size: 7 } };
    o.xaxis = {
      categories: MONTHS,
      axisBorder: axisBaseline(t),
      axisTicks: { show: false },
      tooltip: { enabled: false },
    };
    o.yaxis = { min: 0, max: 200, tickAmount: 4, opposite: t.rtl };
    o.tooltip = { theme: t.dark ? "dark" : "light", shared: true, intersect: false };
    return o;
  }

  /* ==========================================================================
     Pricing
     ========================================================================== */

  /* ===== Pricing — plan quota rings =====
     One compact RadialBar per metered allowance on the current plan, on the
     shared mini-radial builder — the component that exists precisely so a
     "x% of the allowance" reading is a real chart rather than a CSS ring.
     The percentage sits in the middle as an HTML .chart-center overlay and the
     absolute figures read underneath, so the ring carries the shape of the
     answer and the copy carries the numbers.
     Hues run cool → hot with pressure on the quota, so the row can be scanned
     for the one that is nearly spent without reading a single figure.
     Slightly larger than the education KPI rings (72): these are the only plot
     on the page and sit three-up in a half-row card rather than in a dense KPI
     strip, so they can afford the extra weight. */
  const PRICING_QUOTA_RING_SIZE = 88;
  const PRICING_QUOTA_RINGS = [
    { id: "pricingSeatsRing", value: 70, hue: "violet" },
    { id: "pricingComputeRing", value: 92, hue: "amber" },
    { id: "pricingApiRing", value: 46, hue: "cyan" },
  ];

  /* ==========================================================================
     Timeline
     ========================================================================== */

  /* ===== Timeline — activity KPI sparklines =====
     One twelve-week trace per headline figure, on the shared area-spark builder.
     They fill the foot of their KPI card rather than sitting inline beside the
     value, so they run the card's full width and take a taller band than the
     builder's row-sized default — the cards stand alone in a four-up strip, and
     a row-sized trace would leave a dead strip under the figure instead.
     `hue` repeats the card's own icon tint, so a figure and its trend read as
     one mark rather than two. Deliberately not coloured by direction: on Open
     Reviews a FALL is the good news and on the other three a rise is, so a
     shared "up = green" reading would mislead. */
  const TIMELINE_KPI_SPARK_H = 72;
  const TIMELINE_KPI_SPARKS = [
    { id: "timelineUpdatesSpark", hue: "primary", data: [214, 236, 228, 261, 274, 258, 292, 305, 288, 318, 331, 348] },
    { id: "timelineReleasesSpark", hue: "violet", data: [5, 7, 6, 8, 7, 9, 8, 10, 9, 11, 10, 12] },
    { id: "timelineContributorsSpark", hue: "blue", data: [28, 29, 31, 30, 33, 34, 34, 36, 38, 39, 41, 42] },
    { id: "timelineReviewsSpark", hue: "amber", data: [31, 29, 32, 27, 26, 24, 25, 21, 19, 18, 16, 14] },
  ];

  /* ==========================================================================
     Settings
     ========================================================================== */

  /* ===== Settings — Account setup ring =====
     Share of the account-hardening checklist that is done, on the shared
     mini-radial — the "x% complete" builder, which is exactly the reading here.
     The percentage sits in the middle as an HTML .chart-center overlay and the
     four steps are listed underneath, so the ring carries the shape of the
     answer and the list carries what is left. Amber rather than the preset
     accent: one step is still outstanding, and the item it belongs to already
     wears that hue in the list below. Sized to the .chart-inline-lg mount it
     shares with a narrow side card rather than the builder's roomier default. */
  const SETTINGS_SETUP_RING_SIZE = 120;

  /* ===== Components / Cards page — dashboard widget patterns =====
     The Cards page catalogues the widget shapes used across the dashboards, so
     the chart-bearing ones mount real charts rather than pictures of them.
     Same data-driven expansion as the dashboard KPI sets: `hue` names a key on
     the theme snapshot, so every one tracks the active preset and mode. */
  const COMPONENT_KPI_SPARKS = [
    { id: "cardKpiSparkA", hue: "blue", data: [12, 16, 10, 32, 18, 24], active: 3 },
    { id: "cardKpiSparkB", hue: "orange", data: [8, 14, 20, 28, 12, 16], active: 3 },
    { id: "cardKpiSparkC", hue: "emerald", data: [16, 12, 24, 30, 20, 16], active: 3 },
    { id: "cardKpiSparkD", hue: "rose", data: [12, 20, 16, 34, 14, 8], active: 3 },
  ];

  /* Sized to sit three-up inside a half-width card without crowding the
     caption underneath — see the radialBar note on the shared builder. */
  const COMPONENT_RING_SIZE = 116;
  const COMPONENT_GOAL_RINGS = [
    { id: "cardRingA", value: 78, hue: "primary" },
    { id: "cardRingB", value: 54, hue: "violet" },
    { id: "cardRingC", value: 92, hue: "emerald" },
  ];

  /* ===== Chart Registry & Initialization =====
     One entry per chart: { id: "<mount id>", opts: (t) => options }.
     Sections add their charts here; the engine handles theme / mode /
     RTL rebuilds and container reflows for every registered id. */
  const CHARTS = [
    { id: "aiUsageChart", opts: aiUsageOpts },
    { id: "modelPerformanceChart", opts: modelPerformanceOpts },
    { id: "tokenConsumptionChart", opts: tokenConsumptionOpts },
    { id: "departmentUsageChart", opts: departmentUsageOpts },
    { id: "revenueAnalyticsChart", opts: revenueAnalyticsOpts },
    { id: "salesPerformanceChart", opts: salesPerformanceOpts },
    { id: "deviceAnalyticsChart", opts: deviceAnalyticsOpts },
    { id: "userTypesChart", opts: userTypesOpts },
    { id: "sessionsByChannelChart", opts: sessionsByChannelOpts },
    { id: "realTimeUsersChart", opts: realTimeUsersOpts },
    { id: "dealPerformanceChart", opts: dealPerformanceOpts },
    { id: "crmLeadSourceChart", opts: crmLeadSourceOpts },
    { id: "ecomRevenueChart", opts: ecomRevenueOverviewOpts },
    { id: "ecomPaymentMethodChart", opts: ecomPaymentMethodOpts },
    { id: "ecomOrderAnalyticsChart", opts: ecomOrderAnalyticsOpts },
    /* the store's lead mix is the same panel as the CRM dashboard's, so it
       mounts the CRM options rather than duplicating them under a new name */
    { id: "ecomLeadSourceChart", opts: crmLeadSourceOpts },
    { id: "ecomSalesByChannelChart", opts: ecomSalesByChannelOpts },
    { id: "finRevenueExpensesChart", opts: finRevenueExpensesOpts },
    /* the finance page's payment mix is the same panel as the store's — same
       four methods, same shares — so it mounts those options rather than
       duplicating them under a new name */
    { id: "finPaymentMethodChart", opts: ecomPaymentMethodOpts },
    { id: "finPortfolioAllocationChart", opts: finPortfolioAllocationOpts },
    { id: "finInvestmentMixChart", opts: finInvestmentMixOpts },
    { id: "finRevenueSourcesChart", opts: finRevenueSourcesOpts },
    { id: "invPortfolioPerformanceChart", opts: invPortfolioPerformanceOpts },
    /* the investor's asset mix is the same panel as the finance page's
       portfolio allocation — same five classes, same shares — so it mounts
       those options rather than duplicating them under a new name */
    { id: "invAssetAllocationChart", opts: finPortfolioAllocationOpts },
    { id: "cryptoMarketOverviewChart", opts: cryptoMarketOverviewOpts },
    { id: "cryptoMarketVolumeChart", opts: cryptoMarketVolumeOpts },
    { id: "cryptoFearGreedChart", opts: cryptoFearGreedOpts },
    { id: "cryptoPortfolioAllocationChart", opts: cryptoPortfolioAllocationOpts },
    /* tinted rather than plain: the neutral track disappears against the
       striped table rows, so the quiet bars take a soft cast of the row's
       own hue — which is what the tinted builder exists for */
    ...CRYPTO_POPULAR_SPARKS.map((s) => ({
      id: s.id,
      opts: (t) => tintedSparkBarsOpts(t, t[s.hue], s.data, s.active),
    })),
    /* tinted for the same reason as the table sparks: these sit on a plain
       tile inside the card, so the quiet bars take a soft cast of the row's
       own hue rather than a neutral that reads as a second colour.
       Unlike the table sparks these sit INLINE beside a price and a pill, so
       the bars have to centre on the same line those do. Left to itself Apex
       rounds the scale up to a nice ceiling, which leaves the tallest bar
       short of the mount and strands a blank band above it — pinning max to
       the data makes the block fill its box and centre with the row. */
    ...CRYPTO_WATCHLIST_SPARKS.map((s) => ({
      id: s.id,
      opts: (t) => {
        const o = tintedSparkBarsOpts(t, t[s.hue], s.data, s.active);
        o.yaxis = { min: 0, max: Math.max.apply(null, s.data), show: false };
        return o;
      },
    })),
    ...CRM_KPI_SPARKS.map((s) => ({
      id: s.id,
      opts: (t) => areaSparkOpts(t, t[s.hue], s.data),
    })),
    ...CRM_PIPELINE_RINGS.map((r) => ({
      id: r.id,
      opts: (t) => miniRadialOpts(t, r.value, t.blue),
    })),
    ...ECOM_KPI_SPARKS.map((s) => ({
      id: s.id,
      opts: (t) => sparkBarsOpts(t, t[s.hue], s.data, s.active),
    })),
    ...ECOM_PERF_SPARKS.map((s) => ({
      id: s.id,
      opts: (t) => sparkBarsOpts(t, t[s.hue], s.data, s.active),
    })),
    ...FIN_KPI_SPARKS.map((s) => ({
      id: s.id,
      opts: (t) => tintedSparkBarsOpts(t, t[s.hue], FIN_SPARK_DATA, 3),
    })),
    ...FIN_GOAL_RINGS.map((r) => ({
      id: r.id,
      opts: (t) => finGoalRingOpts(t, r.value, t[r.hue]),
    })),
    ...INV_KPI_SPARKS.map((s) => ({
      id: s.id,
      opts: (t) => {
        const o = sparkBarsOpts(t, t[INV_KPI_SPARK_HUE], s.data, s.active);
        /* fuller columns than the shared default — this row sets its bars on a
           tighter pitch, so thin ones would read as a stray tick mark */
        o.plotOptions.bar.columnWidth = "60%";
        /* the quiet bars carry the guide-line tone rather than the track tone:
           these sparks sit on a card face, where --track-bg is so close to the
           surface that the unhighlighted periods all but disappear */
        o.colors = s.data.map((_, i) =>
          i === s.active ? t[INV_KPI_SPARK_HUE] : t.gridLine,
        );
        return o;
      },
    })),
    ...INV_MOVER_SPARKS.map((s) => ({
      id: s.id,
      opts: (t) => {
        const o = areaSparkOpts(t, t[s.hue], s.data);
        o.chart.height = INV_MOVER_SPARK_H;
        return o;
      },
    })),
    { id: "medAppointmentsChart", opts: medAppointmentsOverviewOpts },
    { id: "medDepartmentChart", opts: medDepartmentOpts },
    { id: "medAdmissionsChart", opts: medAdmissionsOpts },
    { id: "medRevenueOverviewChart", opts: medRevenueOverviewOpts },
    ...MED_KPI_SPARKS.map((s) => ({
      id: s.id,
      opts: (t) => lineSparkOpts(t, t.labelOnFill, s.data),
    })),
    ...HRM_KPI_SPARKS.map((s) => ({
      id: s.id,
      opts: (t) => tintedSparkBarsOpts(t, t[s.hue], FIN_SPARK_DATA, 3),
    })),
    { id: "hrmHeadcountChart", opts: hrmHeadcountGrowthOpts },
    { id: "hrmDepartmentChart", opts: hrmDepartmentOpts },
    { id: "hrmEmployeeStatusChart", opts: hrmEmployeeStatusOpts },
    { id: "hrmPayrollChart", opts: hrmPayrollOverviewOpts },
    { id: "hrmWorkloadChart", opts: hrmWorkloadOpts },
    { id: "hrmEmployeeTrendChart", opts: hrmEmployeeOverviewOpts },
    { id: "hrmHiringGoalChart", opts: hrmHiringGoalOpts },
    { id: "hrmAttendanceChart", opts: hrmAttendanceOverviewOpts },
    { id: "eduLearningProgressChart", opts: eduLearningProgressOpts },
    ...EDU_KPI_RINGS.map((r) => ({
      id: r.id,
      opts: (t) => miniRadialOpts(t, r.value, t[r.hue], EDU_KPI_RING_SIZE),
    })),
    { id: "eduEnrolmentChart", opts: eduEnrolmentOpts },
    { id: "eduMasteryChart", opts: eduMasteryOpts },
    { id: "eduStudyHoursChart", opts: eduStudyHoursOpts },
    { id: "eduCategoryChart", opts: eduCategoryMixOpts },
    { id: "eduGradeChart", opts: eduGradeBandsOpts },
    { id: "eduResumeRing", opts: eduResumeRingOpts },
    { id: "eduEngagementChart", opts: eduEngagementHeatmapOpts },
    { id: "eduScoreEngagementChart", opts: eduScoreEngagementOpts },
    { id: "eduGradingTurnaroundChart", opts: eduGradingTurnaroundOpts },
    ...EDU_BAND_SPARKS.map((s) => ({
      id: s.id,
      opts: (t) => {
        const o = areaSparkOpts(t, t[s.hue], s.data);
        /* the mount is a .chart-inline beside a value, not a card panel */
        o.chart.height = 44;
        return o;
      },
    })),
    { id: "bkgStatusMixChart", opts: bkgStatusMixOpts },
    {
      id: "bkgCapacityRing",
      opts: (t) => miniRadialOpts(t, 86, t.cyan, BKG_CAPACITY_RING_SIZE),
    },
    ...BKG_STATUS_SPARKS.map((s) => ({
      id: s.id,
      opts: (t) => areaSparkOpts(t, t[s.hue], s.data),
    })),
    { id: "bkgTrendChart", opts: bkgTrendOpts },
    { id: "bkgDayLoadChart", opts: bkgDayLoadOpts },
    { id: "bkgCategoryMixChart", opts: bkgCategoryMixOpts },
    { id: "bkgCustomerMixChart", opts: bkgCustomerMixOpts },
    { id: "bkgRetentionGauge", opts: bkgRetentionGaugeOpts },
    ...INVT_KPI_SPARKS.map((s) => ({
      id: s.id,
      opts: (t) => areaSparkOpts(t, t[s.hue], s.data),
    })),
    { id: "invtStockStatusChart", opts: invtStockStatusOpts },
    {
      id: "invtAvailabilityRing",
      opts: (t) => miniRadialOpts(t, 98.9, t.emerald, INVT_AVAILABILITY_RING_SIZE),
    },
    { id: "invtValueTrendChart", opts: invtValueTrendOpts },
    { id: "invtStockCoverChart", opts: invtStockCoverOpts },
    { id: "invtStockFlowChart", opts: invtStockFlowOpts },
    { id: "invtWarehouseMixChart", opts: invtWarehouseMixOpts },
    { id: "invtCapacityChart", opts: invtCapacityOpts },
    ...INVT_MOVER_SPARKS.map((s) => ({
      id: s.id,
      opts: (t) => {
        const o = areaSparkOpts(t, t.primary, s.data);
        o.chart.height = INVT_MOVER_SPARK_H;
        return o;
      },
    })),
    {
      id: "invtSpotlightSpark",
      opts: (t) => {
        const o = lineSparkOpts(t, t.labelOnFill, INVT_SPOTLIGHT_TREND);
        o.chart.height = INVT_SPOTLIGHT_SPARK_H;
        return o;
      },
    },
    { id: "invtVelocityCoverChart", opts: invtVelocityCoverOpts },
    ...HD_STATUS_SPARKS.map((s) => ({
      id: s.id,
      opts: (t) => {
        const o = areaSparkOpts(t, t[s.hue], s.data);
        o.chart.height = HD_STATUS_SPARK_H;
        return o;
      },
    })),
    { id: "hdSlaGauge", opts: hdSlaGaugeOpts },
    { id: "hdVolumeChart", opts: hdVolumeOpts },
    { id: "hdResolutionChart", opts: hdResolutionTrendOpts },
    { id: "hdResponseHeatmap", opts: hdResponseHeatmapOpts },
    { id: "hdPriorityResponseChart", opts: hdPriorityResponseOpts },
    { id: "hdAgentLoadChart", opts: hdAgentLoadOpts },
    { id: "hdCategoryMixChart", opts: hdCategoryMixOpts },
    { id: "hdCustomerActivityChart", opts: hdCustomerActivityOpts },
    { id: "hdActivityPulseChart", opts: hdActivityPulseOpts },
    ...HD_ACCOUNT_SPARKS.map((s) => ({
      id: s.id,
      opts: (t) => {
        const o = areaSparkOpts(t, t.primary, s.data);
        o.chart.height = HD_ACCOUNT_SPARK_H;
        return o;
      },
    })),
    ...PROFILE_STAT_SPARKS.map((s) => ({
      id: s.id,
      opts: (t) => lineSparkOpts(t, t.labelOnFill, s.data),
    })),
    { id: "profileStrengthChart", opts: profileStrengthOpts },
    { id: "profileActivityChart", opts: profileActivityOpts },
    ...PRICING_QUOTA_RINGS.map((r) => ({
      id: r.id,
      opts: (t) => miniRadialOpts(t, r.value, t[r.hue], PRICING_QUOTA_RING_SIZE),
    })),
    ...TIMELINE_KPI_SPARKS.map((s) => ({
      id: s.id,
      opts: (t) => {
        const o = areaSparkOpts(t, t[s.hue], s.data);
        o.chart.height = TIMELINE_KPI_SPARK_H;
        return o;
      },
    })),
    {
      id: "settingsSetupRing",
      opts: (t) => miniRadialOpts(t, 75, t.amber, SETTINGS_SETUP_RING_SIZE),
    },
    ...COMPONENT_KPI_SPARKS.map((s) => ({
      id: s.id,
      opts: (t) => sparkBarsOpts(t, t[s.hue], s.data, s.active),
    })),
    ...COMPONENT_GOAL_RINGS.map((r) => ({
      id: r.id,
      opts: (t) => miniRadialOpts(t, r.value, t[r.hue], COMPONENT_RING_SIZE),
    })),
    {
      id: "cardMixDonut",
      opts: (t) =>
        donutOpts(t, [45, 30, 25], ["Stocks", "Bonds", "Cash"], [
          t.blue,
          t.emerald,
          t.amber,
        ]),
    },
  ];

  function build() {
    const t = readTheme();
    while (instances.length) instances.pop().destroy();
    CHARTS.forEach((c) => {
      const el = document.getElementById(c.id);
      if (!el) return;
      /* Isolate each mount: a bad option set on one chart must not abort the
         rest of the registry (they all share this single build pass). */
      try {
        const chart = mountApexChart(el, c.opts(t));
        chart.render();
        instances.push(chart);
      } catch (e) {
        if (window.console) console.error("Chart failed: " + c.id, e);
      }
    });
  }

  /* Lightweight reflow — recompute each chart's size from its (now-resized)
     container without a full re-render. Fixes overflow after width changes that
     don't fire a window 'resize' (sidebar toggle, layout/container switch). */
  function reflow() {
    instances.forEach((c) => {
      try {
        c.windowResizeHandler ? c.windowResizeHandler() : c.render();
      } catch (e) {
        /* chart mid-teardown — ignore */
      }
    });
  }

  /* debounce so transition frames / resize bursts coalesce into one reflow */
  function debounce(fn, wait) {
    let id;
    return function () {
      clearTimeout(id);
      id = setTimeout(fn, wait);
    };
  }

  document.addEventListener("DOMContentLoaded", function () {
    build();

    /* Reusable safeguard: ANY width change to the content area (sidebar toggle,
       layout/sidebar/container switch, offcanvas push, window resize) reflows
       every registered chart. New charts inherit this automatically. */
    const host = document.querySelector(".app-content");
    if (host && typeof ResizeObserver !== "undefined") {
      new ResizeObserver(debounce(reflow, 150)).observe(host);
    }
  });

  /* re-render when the customizer flips theme / mode / direction (colours/RTL) */
  let raf;
  new MutationObserver((muts) => {
    if (
      muts.some(
        (m) =>
          ["data-bs-theme", "data-theme", "dir"].indexOf(m.attributeName) > -1,
      )
    ) {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(build);
    }
  }).observe(root, { attributes: true });

  /* reusable hooks for future charts / manual triggers */
  window.VionexCharts = {
    rebuild: build,
    reflow: reflow,
    setCryptoView: setCryptoView,
    instances: instances,
  };
})();

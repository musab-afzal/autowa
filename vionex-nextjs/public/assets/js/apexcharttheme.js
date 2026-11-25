/* ==========================================================================
   Apex Charts — showcase page module
   Self-contained ApexCharts theme + a full library of demo charts, wired to
   the Corexa design system (reads CSS variables, re-renders on theme / dir
   change) and a client-side tab filter. Renders only when its ids exist.
   ========================================================================== */
(function () {
  "use strict";

  var root = document.documentElement;
  var instances = [];
  var chartById = {};
  var rtTimer = null;

  /* ===== Theme snapshot (design-system tokens) ===== */
  function readTheme() {
    var cs = getComputedStyle(root);
    var v = function (n, f) {
      return (cs.getPropertyValue(n) || "").trim() || f;
    };
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
      surface: v("--surface", "#ffffff"),
      title: v("--text-title", "#0a0a0a"),
      dark: root.getAttribute("data-bs-theme") === "dark",
      rtl: root.getAttribute("dir") === "rtl",
    };
  }

  function pal(t) {
    return [t.brand, t.cyan, t.emerald, t.amber, t.rose, t.blue, t.violet];
  }

  /* ===== Shared base options ===== */
  function base(t) {
    return {
      chart: {
        height: 260,
        fontFamily: "inherit",
        foreColor: t.axis,
        toolbar: { show: false },
        zoom: { enabled: false },
        animations: { easing: "easeinout", speed: 500 },
        parentHeightOffset: 0,
      },
      colors: pal(t),
      dataLabels: { enabled: false },
      legend: {
        show: true,
        position: "top",
        horizontalAlign: "left",
        fontSize: "12px",
        labels: { colors: t.axis },
        markers: { width: 9, height: 9, radius: 12 },
        itemMargin: { horizontal: 8, vertical: 4 },
      },
      grid: { borderColor: t.border, strokeDashArray: 4, padding: { left: 6, right: 6 } },
      stroke: { curve: "straight", width: 2, lineCap: "round" },
      tooltip: { theme: t.dark ? "dark" : "light" },
    };
  }

  /* ===== Data helpers ===== */
  function rnd(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function seed(n, min, max) {
    var a = [];
    for (var i = 0; i < n; i++) a.push(rnd(min, max));
    return a;
  }
  function tsSeries(n, start, spread) {
    var a = [], d = new Date(2024, 0, 1).getTime(), day = 864e5, v = start;
    for (var i = 0; i < n; i++) {
      v += rnd(-spread, spread + 2);
      if (v < 4) v = 4;
      a.push([d + i * day, Math.round(v)]);
    }
    return a;
  }
  var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var QUARTERS = ["Q1", "Q2", "Q3", "Q4"];

  /* ===== Chart builders (id → options factory) ===== */
  var BUILDERS = {

    /* ===================================
       Line Charts
    =================================== */

    /* Basic Line */
    axLineBasic: function (t) {
      var o = base(t);
      o.chart.type = "line";
      o.series = [{ name: "Revenue", data: seed(9, 30, 90) }];
      o.xaxis = { categories: MONTHS.slice(0, 9) };
      o.markers = { size: 4, strokeWidth: 0 };
      return o;
    },

    /* Smooth Line */
    axLineSmooth: function (t) {
      var o = base(t);
      o.chart.type = "line";
      o.stroke.curve = "smooth";
      o.stroke.width = 3;
      o.series = [{ name: "Visitors", data: seed(9, 20, 80) }];
      o.xaxis = { categories: MONTHS.slice(0, 9) };
      return o;
    },

    /* Multi Line */
    axLineMulti: function (t) {
      var o = base(t);
      o.chart.type = "line";
      o.stroke.curve = "smooth";
      o.stroke.width = 3;
      o.series = [
        { name: "Desktop", data: seed(9, 40, 90) },
        { name: "Mobile", data: seed(9, 20, 70) },
        { name: "Tablet", data: seed(9, 10, 40) },
      ];
      o.xaxis = { categories: MONTHS.slice(0, 9) };
      return o;
    },

    /* Dashed Line */
    axLineDashed: function (t) {
      var o = base(t);
      o.chart.type = "line";
      o.stroke.curve = "smooth";
      o.stroke.width = 3;
      o.stroke.dashArray = [0, 6];
      o.series = [
        { name: "Actual", data: seed(9, 40, 90) },
        { name: "Forecast", data: seed(9, 35, 85) },
      ];
      o.xaxis = { categories: MONTHS.slice(0, 9) };
      return o;
    },

    /* Zoomable Line */
    axLineZoom: function (t) {
      var o = base(t);
      o.chart.type = "line";
      o.chart.zoom = { enabled: true, type: "x", autoScaleYaxis: true };
      o.chart.toolbar = { show: true, tools: { download: false, pan: false, reset: true, zoom: true, zoomin: true, zoomout: true } };
      o.stroke.curve = "smooth";
      o.stroke.width = 2;
      o.series = [{ name: "Sessions", data: tsSeries(40, 50, 9) }];
      o.xaxis = { type: "datetime" };
      return o;
    },

    /* Stepline */
    axLineStep: function (t) {
      var o = base(t);
      o.chart.type = "line";
      o.stroke.curve = "stepline";
      o.stroke.width = 2.5;
      o.series = [{ name: "Active users", data: seed(10, 20, 80) }];
      o.xaxis = { categories: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9", "W10"] };
      o.markers = { size: 3, strokeWidth: 0 };
      return o;
    },

    /* Realtime Line */
    axLineRealtime: function (t) {
      var o = base(t);
      o.chart.type = "line";
      o.chart.animations = { easing: "linear", dynamicAnimation: { speed: 1000 } };
      o.stroke.curve = "smooth";
      o.stroke.width = 3;
      o.legend.show = false;
      o.series = [{ name: "Throughput", data: seed(12, 20, 80) }];
      o.xaxis = { categories: [] };
      o.yaxis = { min: 0, max: 100, tickAmount: 4 };
      o.markers = { size: 0 };
      return o;
    },

    /* ===================================
       Area Charts
    =================================== */

    /* Basic Area */
    axAreaBasic: function (t) {
      var o = base(t);
      o.chart.type = "area";
      o.stroke.width = 2;
      o.fill = { type: "gradient", gradient: { shadeIntensity: 1, opacityFrom: 0.4, opacityTo: 0.05, stops: [0, 90] } };
      o.series = [{ name: "Sales", data: seed(9, 30, 90) }];
      o.xaxis = { categories: MONTHS.slice(0, 9) };
      return o;
    },

    /* Spline Area */
    axAreaSpline: function (t) {
      var o = base(t);
      o.chart.type = "area";
      o.stroke.curve = "smooth";
      o.stroke.width = 2;
      o.fill = { type: "gradient", gradient: { opacityFrom: 0.4, opacityTo: 0.05, stops: [0, 95] } };
      o.series = [
        { name: "Income", data: seed(9, 40, 90) },
        { name: "Expense", data: seed(9, 20, 60) },
      ];
      o.xaxis = { categories: MONTHS.slice(0, 9) };
      return o;
    },

    /* Gradient Area */
    axAreaGradient: function (t) {
      var o = base(t);
      o.chart.type = "area";
      o.stroke.curve = "smooth";
      o.stroke.width = 3;
      o.fill = {
        type: "gradient",
        gradient: { shadeIntensity: 1, type: "vertical", opacityFrom: 0.7, opacityTo: 0.1, stops: [0, 100] },
      };
      o.series = [{ name: "Growth", data: seed(9, 25, 95) }];
      o.xaxis = { categories: MONTHS.slice(0, 9) };
      return o;
    },

    /* Stacked Area */
    axAreaStacked: function (t) {
      var o = base(t);
      o.chart.type = "area";
      o.chart.stacked = true;
      o.stroke.curve = "smooth";
      o.stroke.width = 1.5;
      o.fill = { type: "gradient", gradient: { opacityFrom: 0.5, opacityTo: 0.15 } };
      o.series = [
        { name: "Organic", data: seed(9, 10, 40) },
        { name: "Paid", data: seed(9, 10, 35) },
        { name: "Referral", data: seed(9, 5, 25) },
      ];
      o.xaxis = { categories: MONTHS.slice(0, 9) };
      return o;
    },

    /* Negative Area */
    axAreaNegative: function (t) {
      var o = base(t);
      o.chart.type = "area";
      o.stroke.curve = "smooth";
      o.stroke.width = 2;
      o.fill = { type: "gradient", gradient: { opacityFrom: 0.4, opacityTo: 0.05 } };
      var d = [];
      for (var i = 0; i < 12; i++) d.push(rnd(-40, 50));
      o.series = [{ name: "Net flow", data: d }];
      o.xaxis = { categories: MONTHS };
      o.yaxis = { labels: { formatter: function (v) { return Math.round(v); } } };
      return o;
    },

    /* Brush Area — detail chart */
    axAreaBrushMain: function (t) {
      var o = base(t);
      o.chart.type = "area";
      o.chart.id = "axBrushMain";
      o.chart.height = 210;
      o.legend.show = false;
      o.stroke.curve = "smooth";
      o.stroke.width = 2;
      o.colors = [t.brand];
      o.fill = { type: "gradient", gradient: { opacityFrom: 0.5, opacityTo: 0.05, stops: [0, 100] } };
      o.series = [{ name: "Traffic", data: window.__axBrushData }];
      o.xaxis = { type: "datetime" };
      return o;
    },

    /* Brush Area — range selector */
    axAreaBrushSel: function (t) {
      var o = base(t);
      o.chart.type = "area";
      o.chart.height = 130;
      o.chart.brush = { target: "axBrushMain", enabled: true };
      o.chart.selection = {
        enabled: true,
        fill: { color: t.brand, opacity: 0.12 },
        stroke: { color: t.brand },
        xaxis: { min: window.__axBrushData[20][0], max: window.__axBrushData[50][0] },
      };
      o.legend.show = false;
      o.colors = [t.blue];
      o.stroke.width = 1.5;
      o.fill = { type: "gradient", gradient: { opacityFrom: 0.4, opacityTo: 0.05 } };
      o.series = [{ name: "Traffic", data: window.__axBrushData }];
      o.xaxis = { type: "datetime", tooltip: { enabled: false } };
      o.yaxis = { tickAmount: 2 };
      return o;
    },

    /* ===================================
       Bar Charts (horizontal)
    =================================== */

    /* Basic Bar */
    axBarBasic: function (t) {
      var o = base(t);
      o.chart.type = "bar";
      o.plotOptions = { bar: { horizontal: true, borderRadius: 5, barHeight: "60%" } };
      o.series = [{ name: "Units", data: seed(6, 20, 90) }];
      o.xaxis = { categories: ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot"] };
      return o;
    },

    /* Grouped Bar */
    axBarGrouped: function (t) {
      var o = base(t);
      o.chart.type = "bar";
      o.plotOptions = { bar: { horizontal: true, borderRadius: 4, barHeight: "75%" } };
      o.series = [
        { name: "2023", data: seed(5, 20, 70) },
        { name: "2024", data: seed(5, 30, 90) },
      ];
      o.xaxis = { categories: ["North", "South", "East", "West", "Central"] };
      return o;
    },

    /* Stacked Bar */
    axBarStacked: function (t) {
      var o = base(t);
      o.chart.type = "bar";
      o.chart.stacked = true;
      o.plotOptions = { bar: { horizontal: true, borderRadius: 4, barHeight: "65%" } };
      o.series = [
        { name: "Phone", data: seed(5, 10, 40) },
        { name: "Email", data: seed(5, 10, 35) },
        { name: "Chat", data: seed(5, 5, 25) },
      ];
      o.xaxis = { categories: ["Mon", "Tue", "Wed", "Thu", "Fri"] };
      return o;
    },

    /* 100% Stacked Bar */
    axBarFull: function (t) {
      var o = base(t);
      o.chart.type = "bar";
      o.chart.stacked = true;
      o.chart.stackType = "100%";
      o.plotOptions = { bar: { horizontal: true, borderRadius: 4, barHeight: "65%" } };
      o.series = [
        { name: "Promoters", data: seed(5, 20, 60) },
        { name: "Passives", data: seed(5, 10, 30) },
        { name: "Detractors", data: seed(5, 5, 20) },
      ];
      o.xaxis = { categories: ["Q1", "Q2", "Q3", "Q4", "Q5"] };
      return o;
    },

    /* Negative Bar */
    axBarNegative: function (t) {
      var o = base(t);
      o.chart.type = "bar";
      o.plotOptions = { bar: { horizontal: true, borderRadius: 4, barHeight: "70%" } };
      o.colors = [t.emerald, t.rose];
      o.series = [
        { name: "Gains", data: [44, 55, 41, 37, 22, 43] },
        { name: "Losses", data: [-25, -32, -18, -41, -29, -12] },
      ];
      o.xaxis = { categories: MONTHS.slice(0, 6) };
      return o;
    },

    /* ===================================
       Column Charts
    =================================== */

    /* Basic Column */
    axColBasic: function (t) {
      var o = base(t);
      o.chart.type = "bar";
      o.plotOptions = { bar: { horizontal: false, borderRadius: 5, columnWidth: "55%" } };
      o.series = [{ name: "Revenue", data: seed(9, 20, 90) }];
      o.xaxis = { categories: MONTHS.slice(0, 9) };
      return o;
    },

    /* Grouped Column */
    axColGrouped: function (t) {
      var o = base(t);
      o.chart.type = "bar";
      o.plotOptions = { bar: { horizontal: false, borderRadius: 4, columnWidth: "70%" } };
      o.series = [
        { name: "Target", data: seed(7, 30, 80) },
        { name: "Actual", data: seed(7, 20, 90) },
      ];
      o.xaxis = { categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] };
      return o;
    },

    /* Stacked Column */
    axColStacked: function (t) {
      var o = base(t);
      o.chart.type = "bar";
      o.chart.stacked = true;
      o.plotOptions = { bar: { horizontal: false, borderRadius: 4, columnWidth: "55%" } };
      o.series = [
        { name: "Product A", data: seed(7, 10, 40) },
        { name: "Product B", data: seed(7, 10, 35) },
        { name: "Product C", data: seed(7, 5, 25) },
      ];
      o.xaxis = { categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] };
      return o;
    },

    /* Distributed Bar (one color per column) */
    axColDist: function (t) {
      var o = base(t);
      o.chart.type = "bar";
      o.plotOptions = { bar: { horizontal: false, distributed: true, borderRadius: 5, columnWidth: "60%" } };
      o.legend.show = false;
      o.colors = pal(t);
      o.series = [{ name: "Score", data: seed(6, 30, 95) }];
      o.xaxis = { categories: ["SEO", "Ads", "Social", "Email", "Direct", "Refer"] };
      return o;
    },

    /* ===================================
       Mixed Charts
    =================================== */

    /* Line & Column */
    axMixLineCol: function (t) {
      var o = base(t);
      o.chart.type = "line";
      o.stroke.width = [0, 3];
      o.stroke.curve = "smooth";
      o.plotOptions = { bar: { borderRadius: 5, columnWidth: "50%" } };
      o.markers = { size: [0, 4] };
      o.series = [
        { name: "Revenue", type: "column", data: seed(9, 30, 90) },
        { name: "Trend", type: "line", data: seed(9, 40, 80) },
      ];
      o.xaxis = { categories: MONTHS.slice(0, 9) };
      return o;
    },

    /* Line & Area */
    axMixAreaLine: function (t) {
      var o = base(t);
      o.chart.type = "line";
      o.stroke.width = [2, 3];
      o.stroke.curve = "smooth";
      o.fill = { type: ["gradient", "solid"], gradient: { opacityFrom: 0.4, opacityTo: 0.05 } };
      o.markers = { size: 0 };
      o.series = [
        { name: "Traffic", type: "area", data: seed(9, 30, 80) },
        { name: "Conversions", type: "line", data: seed(9, 10, 50) },
      ];
      o.xaxis = { categories: MONTHS.slice(0, 9) };
      return o;
    },

    /* Multiple Y-Axis */
    axMixMultiY: function (t) {
      var o = base(t);
      o.chart.type = "line";
      o.stroke.width = [0, 3];
      o.stroke.curve = "smooth";
      o.plotOptions = { bar: { borderRadius: 5, columnWidth: "50%" } };
      o.markers = { size: [0, 4] };
      o.series = [
        { name: "Orders", type: "column", data: seed(9, 200, 900) },
        { name: "Rating", type: "line", data: seed(9, 3, 5) },
      ];
      o.xaxis = { categories: MONTHS.slice(0, 9) };
      o.yaxis = [
        { title: { text: "Orders", style: { color: t.axis } } },
        { opposite: true, min: 0, max: 5, title: { text: "Rating", style: { color: t.axis } } },
      ];
      return o;
    },

    /* ===================================
       Pie Charts
    =================================== */

    /* Basic Pie */
    axPieBasic: function (t) {
      var o = base(t);
      o.chart.type = "pie";
      o.chart.height = 300;
      o.legend.position = "bottom";
      o.legend.horizontalAlign = "center";
      o.dataLabels.enabled = true;
      o.stroke = { width: 2, colors: [t.surface] };
      o.series = [38, 26, 18, 12, 6];
      o.labels = ["Direct", "Organic", "Referral", "Social", "Email"];
      return o;
    },

    /* Monochrome Pie */
    axPieMono: function (t) {
      var o = base(t);
      o.chart.type = "pie";
      o.chart.height = 300;
      o.legend.position = "bottom";
      o.legend.horizontalAlign = "center";
      o.theme = { monochrome: { enabled: true, color: t.brand, shadeIntensity: 0.7 } };
      o.dataLabels.enabled = true;
      o.stroke = { width: 2, colors: [t.surface] };
      o.series = [30, 24, 18, 14, 8, 6];
      o.labels = ["Chrome", "Safari", "Edge", "Firefox", "Opera", "Other"];
      return o;
    },

    /* ===================================
       Donut Charts
    =================================== */

    /* Basic Donut */
    axDonutBasic: function (t) {
      var o = base(t);
      o.chart.type = "donut";
      o.chart.height = 300;
      o.legend.position = "bottom";
      o.legend.horizontalAlign = "center";
      o.stroke = { width: 2, colors: [t.surface] };
      o.series = [44, 28, 16, 12];
      o.labels = ["Completed", "In progress", "Pending", "Cancelled"];
      o.plotOptions = {
        pie: {
          donut: {
            size: "70%",
            labels: {
              show: true,
              value: { color: t.title, fontSize: "22px", fontWeight: 700 },
              total: { show: true, label: "Total", color: t.axis, formatter: function () { return "100%"; } },
            },
          },
        },
      };
      return o;
    },

    /* Gradient Donut */
    axDonutGradient: function (t) {
      var o = base(t);
      o.chart.type = "donut";
      o.chart.height = 300;
      o.legend.position = "bottom";
      o.legend.horizontalAlign = "center";
      o.stroke = { width: 0 };
      o.fill = { type: "gradient" };
      o.series = [42, 27, 19, 12];
      o.labels = ["Marketing", "Sales", "Support", "Product"];
      o.plotOptions = { pie: { donut: { size: "68%" } } };
      return o;
    },

    /* ===================================
       Radial Bar Charts
    =================================== */

    /* Basic Radial Bar */
    axRadialBasic: function (t) {
      var o = base(t);
      o.chart.type = "radialBar";
      o.chart.height = 300;
      o.legend.show = false;
      o.colors = [t.brand];
      o.series = [72];
      o.labels = ["Completed"];
      o.plotOptions = {
        radialBar: {
          hollow: { size: "62%" },
          track: { background: t.border },
          dataLabels: {
            name: { color: t.axis, fontSize: "14px" },
            value: { color: t.title, fontSize: "28px", fontWeight: 700, formatter: function (v) { return Math.round(v) + "%"; } },
          },
        },
      };
      return o;
    },

    /* Multiple Radial Bar */
    axRadialMulti: function (t) {
      var o = base(t);
      o.chart.type = "radialBar";
      o.chart.height = 300;
      o.legend.show = false;
      o.colors = [t.brand, t.cyan, t.emerald, t.amber];
      o.series = [82, 67, 54, 38];
      o.labels = ["Desktop", "Mobile", "Tablet", "Other"];
      o.plotOptions = {
        radialBar: {
          hollow: { size: "42%" },
          track: { background: t.border },
          dataLabels: {
            name: { fontSize: "13px", color: t.axis },
            value: { fontSize: "18px", color: t.title, fontWeight: 700 },
            total: { show: true, label: "Total", color: t.axis, formatter: function () { return "60%"; } },
          },
        },
      };
      return o;
    },

    /* Gauge (semi-circle) */
    axRadialGauge: function (t) {
      var o = base(t);
      o.chart.type = "radialBar";
      o.chart.height = 300;
      o.legend.show = false;
      o.colors = [t.emerald];
      o.series = [68];
      o.labels = ["Target"];
      o.plotOptions = {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          hollow: { size: "60%" },
          track: { background: t.border, strokeWidth: "100%" },
          dataLabels: {
            name: { show: true, offsetY: 26, color: t.axis, fontSize: "13px" },
            value: { offsetY: -12, color: t.title, fontSize: "30px", fontWeight: 700, formatter: function (v) { return Math.round(v) + "%"; } },
          },
        },
      };
      o.fill = { type: "gradient", gradient: { shade: "light", type: "horizontal", gradientToColors: [t.cyan], stops: [0, 100] } };
      return o;
    },

    /* Custom Angle Circle */
    axRadialStroked: function (t) {
      var o = base(t);
      o.chart.type = "radialBar";
      o.chart.height = 300;
      o.legend.show = false;
      o.colors = [t.violet];
      o.series = [76];
      o.labels = ["Score"];
      o.plotOptions = {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          hollow: { size: "60%" },
          track: { background: t.border, strokeWidth: "97%", margin: 5 },
          dataLabels: {
            name: { color: t.axis, fontSize: "14px", offsetY: -8 },
            value: { color: t.title, fontSize: "30px", fontWeight: 700, offsetY: 4, formatter: function (v) { return Math.round(v) + "%"; } },
          },
        },
      };
      o.stroke = { dashArray: 4 };
      return o;
    },

    /* ===================================
       Polar Area
    =================================== */

    /* Polar Area */
    axPolarBasic: function (t) {
      var o = base(t);
      o.chart.type = "polarArea";
      o.chart.height = 300;
      o.legend.position = "bottom";
      o.legend.horizontalAlign = "center";
      o.stroke = { colors: [t.surface], width: 1 };
      o.fill = { opacity: 0.85 };
      o.series = [22, 18, 14, 12, 9, 7];
      o.labels = ["Design", "Dev", "Sales", "QA", "Ops", "HR"];
      o.yaxis = { show: false };
      o.plotOptions = { polarArea: { rings: { strokeColor: t.border }, spokes: { connectorColors: t.border } } };
      return o;
    },

    /* ===================================
       Radar Charts
    =================================== */

    /* Basic Radar */
    axRadarBasic: function (t) {
      var o = base(t);
      o.chart.type = "radar";
      o.chart.height = 300;
      o.legend.show = false;
      o.stroke.width = 2;
      o.fill = { opacity: 0.25 };
      o.markers = { size: 4 };
      o.series = [{ name: "Skills", data: [80, 65, 72, 90, 55, 68] }];
      o.xaxis = { categories: ["Speed", "Power", "Focus", "Agility", "Range", "Stamina"] };
      o.plotOptions = { radar: { polygons: { strokeColors: t.border, connectorColors: t.border } } };
      return o;
    },

    /* Multi Radar */
    axRadarMulti: function (t) {
      var o = base(t);
      o.chart.type = "radar";
      o.chart.height = 300;
      o.stroke.width = 2;
      o.fill = { opacity: 0.2 };
      o.markers = { size: 3 };
      o.series = [
        { name: "This year", data: [70, 85, 60, 78, 66] },
        { name: "Last year", data: [55, 70, 72, 60, 80] },
      ];
      o.xaxis = { categories: ["Q1", "Q2", "Q3", "Q4", "Q5"] };
      o.plotOptions = { radar: { polygons: { strokeColors: t.border, connectorColors: t.border } } };
      return o;
    },

    /* ===================================
       Bubble Charts
    =================================== */

    /* Basic Bubble */
    axBubbleBasic: function (t) {
      var o = base(t);
      o.chart.type = "bubble";
      o.fill = { opacity: 0.8 };
      function bub(n) { var a = []; for (var i = 0; i < n; i++) a.push([rnd(10, 90), rnd(10, 90), rnd(10, 70)]); return a; }
      o.series = [{ name: "Segment A", data: bub(8) }, { name: "Segment B", data: bub(8) }];
      o.xaxis = { tickAmount: 6, type: "numeric" };
      o.yaxis = { max: 100 };
      return o;
    },

    /* 3D Bubble */
    axBubble3D: function (t) {
      var o = base(t);
      o.chart.type = "bubble";
      o.fill = { type: "gradient", opacity: 0.85 };
      function bub(n) { var a = []; for (var i = 0; i < n; i++) a.push([rnd(10, 90), rnd(10, 90), rnd(20, 90)]); return a; }
      o.series = [
        { name: "North", data: bub(6) },
        { name: "South", data: bub(6) },
        { name: "West", data: bub(6) },
      ];
      o.xaxis = { tickAmount: 6, type: "numeric" };
      o.yaxis = { max: 100 };
      return o;
    },

    /* ===================================
       Scatter Charts
    =================================== */

    /* Basic Scatter */
    axScatterBasic: function (t) {
      var o = base(t);
      o.chart.type = "scatter";
      o.chart.zoom = { enabled: true, type: "xy" };
      o.markers = { size: 6 };
      function sc(n) { var a = []; for (var i = 0; i < n; i++) a.push([rnd(0, 100), rnd(0, 100)]); return a; }
      o.series = [{ name: "Group 1", data: sc(20) }, { name: "Group 2", data: sc(20) }];
      o.xaxis = { tickAmount: 8 };
      o.yaxis = { tickAmount: 6 };
      return o;
    },

    /* Datetime Scatter */
    axScatterDate: function (t) {
      var o = base(t);
      o.chart.type = "scatter";
      o.markers = { size: 6 };
      function sc(n) {
        var a = [], d = new Date(2024, 0, 1).getTime(), day = 864e5;
        for (var i = 0; i < n; i++) a.push([d + rnd(0, 60) * day, rnd(10, 90)]);
        return a;
      }
      o.series = [{ name: "Signups", data: sc(18) }, { name: "Churn", data: sc(18) }];
      o.xaxis = { type: "datetime" };
      o.yaxis = { max: 100 };
      return o;
    },

    /* ===================================
       Heatmap Charts
    =================================== */

    /* Basic Heatmap */
    axHeatBasic: function (t) {
      var o = base(t);
      o.chart.type = "heatmap";
      o.chart.height = 320;
      o.legend.show = false;
      o.stroke = { width: 2, colors: [t.surface] };
      o.colors = [t.brand];
      o.plotOptions = { heatmap: { radius: 4, enableShades: true, shadeIntensity: 0.6 } };
      var days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], s = [];
      for (var d = 0; d < days.length; d++) {
        var row = [];
        for (var h = 0; h < 12; h++) row.push({ x: (h * 2) + "h", y: rnd(0, 100) });
        s.push({ name: days[d], data: row });
      }
      o.series = s;
      return o;
    },

    /* Color Range Heatmap */
    axHeatRange: function (t) {
      var o = base(t);
      o.chart.type = "heatmap";
      o.chart.height = 320;
      o.legend.show = false;
      o.stroke = { width: 2, colors: [t.surface] };
      o.plotOptions = {
        heatmap: {
          radius: 4,
          colorScale: {
            ranges: [
              { from: 0, to: 25, color: t.rose, name: "Low" },
              { from: 26, to: 50, color: t.amber, name: "Medium" },
              { from: 51, to: 75, color: t.cyan, name: "High" },
              { from: 76, to: 100, color: t.emerald, name: "Peak" },
            ],
          },
        },
      };
      var cats = ["A", "B", "C", "D", "E"], s = [];
      for (var d = 0; d < cats.length; d++) {
        var row = [];
        for (var h = 0; h < 7; h++) row.push({ x: "W" + (h + 1), y: rnd(0, 100) });
        s.push({ name: cats[d], data: row });
      }
      o.series = s;
      return o;
    },

    /* ===================================
       Treemap Charts
    =================================== */

    /* Basic Treemap */
    axTreeBasic: function (t) {
      var o = base(t);
      o.chart.type = "treemap";
      o.chart.height = 300;
      o.legend.show = false;
      o.dataLabels = { enabled: true, style: { fontSize: "12px" } };
      o.plotOptions = { treemap: { distributed: true, enableShades: false } };
      o.colors = pal(t);
      o.series = [{
        data: [
          { x: "Search", y: 420 }, { x: "Social", y: 310 }, { x: "Direct", y: 250 },
          { x: "Email", y: 180 }, { x: "Referral", y: 140 }, { x: "Display", y: 95 }, { x: "Affiliate", y: 60 },
        ],
      }];
      return o;
    },

    /* Color Range Treemap */
    axTreeRange: function (t) {
      var o = base(t);
      o.chart.type = "treemap";
      o.chart.height = 300;
      o.legend.show = false;
      o.dataLabels = { enabled: true, style: { fontSize: "12px" } };
      o.plotOptions = {
        treemap: {
          enableShades: true,
          shadeIntensity: 0.5,
          colorScale: {
            ranges: [
              { from: -100, to: 0, color: t.rose },
              { from: 1, to: 100, color: t.emerald },
            ],
          },
        },
      };
      o.series = [{
        data: [
          { x: "AAPL", y: 62 }, { x: "MSFT", y: 41 }, { x: "GOOG", y: -18 }, { x: "AMZN", y: 33 },
          { x: "TSLA", y: -47 }, { x: "META", y: 21 }, { x: "NVDA", y: 88 }, { x: "NFLX", y: -12 },
        ],
      }];
      return o;
    },

    /* ===================================
       Candlestick
    =================================== */

    /* Candlestick */
    axCandleBasic: function (t) {
      var o = base(t);
      o.chart.type = "candlestick";
      o.chart.height = 320;
      o.legend.show = false;
      o.plotOptions = { candlestick: { colors: { upward: t.emerald, downward: t.rose } } };
      var data = [], d = new Date(2024, 0, 1).getTime(), day = 864e5, price = 60;
      for (var i = 0; i < 26; i++) {
        var op = price, cl = op + rnd(-8, 8);
        var hi = Math.max(op, cl) + rnd(1, 6), lo = Math.min(op, cl) - rnd(1, 6);
        data.push({ x: d + i * day, y: [op, hi, lo, cl].map(function (n) { return Math.round(n); }) });
        price = cl < 20 ? 30 : cl;
      }
      o.series = [{ data: data }];
      o.xaxis = { type: "datetime" };
      o.yaxis = { tooltip: { enabled: true } };
      return o;
    },

    /* ===================================
       Box Plot
    =================================== */

    /* Box Plot */
    axBoxBasic: function (t) {
      var o = base(t);
      o.chart.type = "boxPlot";
      o.chart.height = 320;
      o.legend.show = false;
      o.plotOptions = { boxPlot: { colors: { upper: t.cyan, lower: t.brand } } };
      o.stroke = { colors: [t.axis], width: 1 };
      var data = [], labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
      for (var i = 0; i < labels.length; i++) {
        var min = rnd(10, 25), q1 = min + rnd(5, 12), med = q1 + rnd(5, 12), q3 = med + rnd(5, 12), max = q3 + rnd(5, 12);
        data.push({ x: labels[i], y: [min, q1, med, q3, max] });
      }
      o.series = [{ type: "boxPlot", data: data }];
      return o;
    },

    /* ===================================
       Range Area
    =================================== */

    /* Range Area */
    axRangeBasic: function (t) {
      var o = base(t);
      o.chart.type = "rangeArea";
      o.chart.height = 300;
      o.stroke = { curve: "smooth", width: [0, 2] };
      o.fill = { opacity: [0.24, 1] };
      o.colors = [t.brand, t.brand];
      var range = [], line = [];
      for (var i = 0; i < 9; i++) {
        var mid = rnd(30, 70);
        range.push({ x: MONTHS[i], y: [mid - rnd(8, 16), mid + rnd(8, 16)] });
        line.push({ x: MONTHS[i], y: mid });
      }
      o.series = [
        { name: "Range", type: "rangeArea", data: range },
        { name: "Median", type: "line", data: line },
      ];
      return o;
    },

    /* ===================================
       Timeline (range bar)
    =================================== */

    /* Timeline */
    axTimelineBasic: function (t) {
      var o = base(t);
      o.chart.type = "rangeBar";
      o.chart.height = 300;
      o.legend.show = false;
      o.plotOptions = { bar: { horizontal: true, distributed: true, borderRadius: 5, barHeight: "55%" } };
      o.colors = pal(t);
      var d = new Date(2024, 0, 1).getTime(), day = 864e5;
      function span(name, from, len) { return { x: name, y: [d + from * day, d + (from + len) * day] }; }
      o.series = [{
        data: [
          span("Research", 0, 6), span("Design", 5, 8), span("Development", 11, 14),
          span("Testing", 22, 7), span("Launch", 28, 4),
        ],
      }];
      o.xaxis = { type: "datetime" };
      return o;
    },

    /* ===================================
       Sparklines
    =================================== */

    /* Line sparkline */
    axSparkA: function (t) {
      var o = base(t);
      o.chart.type = "line";
      o.chart.height = 48;
      o.chart.sparkline = { enabled: true };
      o.stroke = { curve: "smooth", width: 2 };
      o.colors = [t.brand];
      o.series = [{ data: seed(14, 20, 80) }];
      o.tooltip = { theme: t.dark ? "dark" : "light", fixed: { enabled: false } };
      return o;
    },

    /* Area sparkline */
    axSparkB: function (t) {
      var o = base(t);
      o.chart.type = "area";
      o.chart.height = 48;
      o.chart.sparkline = { enabled: true };
      o.stroke = { curve: "smooth", width: 2 };
      o.fill = { type: "gradient", gradient: { opacityFrom: 0.4, opacityTo: 0 } };
      o.colors = [t.emerald];
      o.series = [{ data: seed(14, 20, 80) }];
      o.tooltip = { theme: t.dark ? "dark" : "light" };
      return o;
    },

    /* Bar sparkline */
    axSparkC: function (t) {
      var o = base(t);
      o.chart.type = "bar";
      o.chart.height = 48;
      o.chart.sparkline = { enabled: true };
      o.plotOptions = { bar: { columnWidth: "60%", borderRadius: 2 } };
      o.colors = [t.cyan];
      o.series = [{ data: seed(14, 20, 80) }];
      o.tooltip = { theme: t.dark ? "dark" : "light" };
      return o;
    },
  };

  /* ===== Realtime feed (attaches to the live line chart) ===== */
  function startRealtime(chart) {
    if (!chart) return;
    var data = seed(12, 20, 80);
    rtTimer = setInterval(function () {
      data.push(rnd(20, 90));
      if (data.length > 12) data.shift();
      try {
        chart.updateSeries([{ data: data.slice() }]);
      } catch (e) {
        clearInterval(rtTimer);
      }
    }, 2500);
  }

  /* ===== Build / teardown ===== */
  function build() {
    if (typeof window.ApexCharts === "undefined") return;
    var t = readTheme();
    if (!window.__axBrushData) window.__axBrushData = tsSeries(60, 50, 8);
    if (rtTimer) { clearInterval(rtTimer); rtTimer = null; }
    while (instances.length) {
      try { instances.pop().destroy(); } catch (e) { /* mid-teardown */ }
    }
    chartById = {};
    var rt = null;
    Object.keys(BUILDERS).forEach(function (id) {
      var el = document.getElementById(id);
      if (!el) return;
      var chart = mountApexChart(el, BUILDERS[id](t));
      chart.render();
      instances.push(chart);
      chartById[id] = chart;
      if (id === "axLineRealtime") rt = chart;
    });
    startRealtime(rt);
  }

  function reflow() {
    instances.forEach(function (c) {
      try { c.windowResizeHandler ? c.windowResizeHandler() : c.render(); } catch (e) { /* ignore */ }
    });
  }

  function debounce(fn, wait) {
    var id;
    return function () { clearTimeout(id); id = setTimeout(fn, wait); };
  }

  /* ===== Tab filter + premium scroll UX (wheel / keyboard / auto-center) ===== */
  function initFilter() {
    var tabs = document.querySelector("[data-chart-tabs]");
    var grid = document.querySelector("[data-chart-grid]");
    if (!tabs || !grid) return;
    var cols = Array.prototype.slice.call(grid.children);

    /* Smoothly center the clicked/focused tab by scrolling the rail directly
       (clamped at the ends so first/last tabs don't over-scroll). We scroll the
       <ul> itself — rather than relying on scrollIntoView, which in this nested
       sticky/flex layout can pick the wrong ancestor and do nothing. Measured
       with getBoundingClientRect so padding / offsetParent never skew it. */
    function revealTab(btn) {
      if (!btn) return;
      var max = tabs.scrollWidth - tabs.clientWidth;
      if (max <= 0) return;
      var tabsRect = tabs.getBoundingClientRect();
      var btnRect = btn.getBoundingClientRect();
      var target =
        tabs.scrollLeft + (btnRect.left - tabsRect.left) - (tabs.clientWidth - btnRect.width) / 2;
      target = Math.max(0, Math.min(target, max));
      if (typeof tabs.scrollTo === "function") {
        tabs.scrollTo({ left: target, behavior: "smooth" });
      } else {
        tabs.scrollLeft = target;
      }
    }

    function activate(btn) {
      tabs.querySelectorAll(".nav-link").forEach(function (b) {
        b.classList.remove("active");
        b.setAttribute("aria-pressed", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");
      var cat = btn.getAttribute("data-filter");
      cols.forEach(function (col) {
        var show = cat === "all" || col.getAttribute("data-chart-cat") === cat;
        col.classList.toggle("d-none", !show);
      });
      revealTab(btn);
      requestAnimationFrame(reflow);
    }

    tabs.addEventListener("click", function (e) {
      var btn = e.target.closest(".nav-link");
      if (btn) activate(btn);
    });

    /* Vertical mouse wheel → horizontal scroll (only while the rail overflows) */
    tabs.addEventListener("wheel", function (e) {
      if (tabs.scrollWidth <= tabs.clientWidth) return;
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        tabs.scrollLeft += e.deltaY;
        e.preventDefault();
      }
    }, { passive: false });

    /* Keyboard: Arrow / Home / End move focus and keep the tab in view */
    tabs.addEventListener("keydown", function (e) {
      var links = Array.prototype.slice.call(tabs.querySelectorAll(".nav-link"));
      var i = links.indexOf(document.activeElement);
      if (i < 0) return;
      var n;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") n = links[Math.min(links.length - 1, i + 1)];
      else if (e.key === "ArrowLeft" || e.key === "ArrowUp") n = links[Math.max(0, i - 1)];
      else if (e.key === "Home") n = links[0];
      else if (e.key === "End") n = links[links.length - 1];
      else return;
      e.preventDefault();
      n.focus();
      revealTab(n);
    });

    /* Click-and-drag to slide the rail (desktop grab-scroll; touch keeps its
       native momentum). Shows a grab cursor only while the rail overflows, and
       the capture-phase click guard cancels the click that ends a real drag so
       a slide never accidentally switches tabs. */
    var dragOn = false, dragStartX = 0, dragStartLeft = 0, dragMoved = false, dragId = null;
    function overflowing() { return tabs.scrollWidth - tabs.clientWidth > 1; }
    function syncGrab() { if (!dragOn) tabs.style.cursor = overflowing() ? "grab" : ""; }
    syncGrab();
    if (typeof ResizeObserver !== "undefined") new ResizeObserver(syncGrab).observe(tabs);

    tabs.addEventListener("pointerdown", function (e) {
      if (e.pointerType !== "mouse" || e.button !== 0 || !overflowing()) return;
      dragOn = true;
      dragMoved = false;
      dragId = e.pointerId;
      dragStartX = e.clientX;
      dragStartLeft = tabs.scrollLeft;
      /* no capture / preventDefault yet — a plain click must stay untouched */
    });
    tabs.addEventListener("pointermove", function (e) {
      if (!dragOn) return;
      var dx = e.clientX - dragStartX;
      if (!dragMoved) {
        if (Math.abs(dx) <= 4) return; // ignore micro-movement so clicks work
        dragMoved = true;
        tabs.style.cursor = "grabbing";
        if (tabs.setPointerCapture) tabs.setPointerCapture(dragId);
      }
      tabs.scrollLeft = dragStartLeft - dx;
      e.preventDefault();
    });
    function endDrag() {
      if (!dragOn) return;
      dragOn = false;
      tabs.style.cursor = overflowing() ? "grab" : "";
      if (dragId != null && tabs.hasPointerCapture && tabs.hasPointerCapture(dragId)) {
        tabs.releasePointerCapture(dragId);
      }
      dragId = null;
    }
    tabs.addEventListener("pointerup", endDrag);
    tabs.addEventListener("pointercancel", endDrag);
    tabs.addEventListener("click", function (e) {
      if (dragMoved) { e.preventDefault(); e.stopPropagation(); dragMoved = false; }
    }, true);

    /* Reveal the initially-active tab once layout settles */
    requestAnimationFrame(function () {
      revealTab(tabs.querySelector(".nav-link.active"));
    });
  }

  /* ===== Chart download (PNG / SVG) with inline feedback ===== */
  function triggerDownload(href, filename) {
    var a = document.createElement("a");
    a.href = href;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  function slug(s) {
    return (s || "chart").trim().replace(/[^\w]+/g, "-").replace(/^-+|-+$/g, "").toLowerCase() || "chart";
  }

  /* Icon-button state: spinner → check / alert, then restore original markup */
  function btnFeedback(btn, state) {
    if (!btn || btn.tagName !== "BUTTON") return;
    if (state === "loading") {
      if (btn.dataset.orig == null) btn.dataset.orig = btn.innerHTML;
      btn.disabled = true;
      btn.setAttribute("aria-busy", "true");
      btn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>';
      return;
    }
    btn.innerHTML = state === "success" ? '<i data-lucide="check"></i>' : '<i data-lucide="triangle-alert"></i>';
    if (window.lucide && lucide.createIcons) lucide.createIcons();
    setTimeout(function () {
      if (btn.dataset.orig != null) { btn.innerHTML = btn.dataset.orig; delete btn.dataset.orig; }
      btn.disabled = false;
      btn.removeAttribute("aria-busy");
    }, state === "success" ? 1100 : 1600);
  }

  function exportChart(chart, mountId, fmt, title) {
    var name = slug(title);
    if (fmt === "svg") {
      return new Promise(function (resolve, reject) {
        var host = document.getElementById(mountId);
        var svg = host && (host.querySelector(".apexcharts-svg") || host.querySelector("svg"));
        if (!svg) return reject(new Error("SVG element not found"));
        var str = new XMLSerializer().serializeToString(svg);
        if (str.indexOf("xmlns=") === -1) str = str.replace("<svg ", '<svg xmlns="http://www.w3.org/2000/svg" ');
        triggerDownload("data:image/svg+xml;charset=utf-8," + encodeURIComponent(str), name + ".svg");
        resolve();
      });
    }
    if (!chart || typeof chart.dataURI !== "function") return Promise.reject(new Error("Chart not ready"));
    return chart.dataURI().then(function (uri) {
      var href = uri && (uri.imgURI || (uri.blob ? URL.createObjectURL(uri.blob) : null));
      if (!href) throw new Error("No image data");
      triggerDownload(href, name + ".png");
    });
  }

  function initDownloads() {
    var grid = document.querySelector("[data-chart-grid]");
    if (!grid) return;
    grid.addEventListener("click", function (e) {
      var ctrl = e.target.closest("[data-chart-export]");
      if (!ctrl) return;
      e.preventDefault();
      var fmt = ctrl.getAttribute("data-chart-export") || "png";
      var col = ctrl.closest("[data-chart-cat]");
      var mount = col && col.querySelector('[id^="ax"]');
      var chart = mount && chartById[mount.id];
      var title = col && col.querySelector("h2") ? col.querySelector("h2").textContent : "chart";
      var isBtn = ctrl.tagName === "BUTTON";
      if (!mount || (fmt !== "svg" && !chart)) { btnFeedback(ctrl, "error"); return; }
      if (isBtn) btnFeedback(ctrl, "loading");
      exportChart(chart, mount.id, fmt, title)
        .then(function () { if (isBtn) btnFeedback(ctrl, "success"); })
        .catch(function (err) {
          if (window.console) console.error("Chart export failed:", err);
          btnFeedback(ctrl, "error");
        });
    });
  }

  /* ===== Init ===== */
  function init() {
    if (!document.querySelector("[data-chart-grid]")) return;
    build();
    initFilter();
    initDownloads();

    var host = document.querySelector(".app-content");
    if (host && typeof ResizeObserver !== "undefined") {
      new ResizeObserver(debounce(reflow, 150)).observe(host);
    }

    var raf;
    new MutationObserver(function (muts) {
      if (muts.some(function (m) { return ["data-bs-theme", "data-theme", "dir"].indexOf(m.attributeName) > -1; })) {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(build);
      }
    }).observe(root, { attributes: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

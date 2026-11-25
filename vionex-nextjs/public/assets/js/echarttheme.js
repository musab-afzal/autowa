/* ==========================================================================
   ECharts — showcase page module
   Self-contained Apache ECharts theme + a library of demo charts, wired to the
   Corexa design system (reads CSS variables, re-renders on theme / dir change)
   and a client-side tab filter. Renders only when its mount ids exist.
   ========================================================================== */
(function () {
  "use strict";

  var root = document.documentElement;
  var instances = [];
  var chartById = {};

  /* ===================================
     Theme snapshot (design-system tokens)
  =================================== */
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
      surfaceMuted: v("--surface-muted", "#f4f3f9"),
      title: v("--text-title", "#0a0a0a"),
      font: (getComputedStyle(document.body).fontFamily || "inherit"),
      dark: root.getAttribute("data-bs-theme") === "dark",
      rtl: root.getAttribute("dir") === "rtl",
    };
  }

  function pal(t) {
    return [t.brand, t.cyan, t.emerald, t.amber, t.rose, t.blue, t.violet];
  }

  /* Translucent variant of any token (hex or rgb) */
  function alpha(c, a) {
    c = (c || "").trim();
    if (c.charAt(0) === "#") {
      var h = c.slice(1);
      if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
      var n = parseInt(h, 16);
      return "rgba(" + ((n >> 16) & 255) + "," + ((n >> 8) & 255) + "," + (n & 255) + "," + a + ")";
    }
    if (c.indexOf("rgb") === 0) {
      return c.replace(/rgba?\(([^)]+)\)/, function (_, inner) {
        return "rgba(" + inner.split(",").slice(0, 3).join(",") + "," + a + ")";
      });
    }
    return c;
  }

  /* Vertical fill gradient (top → bottom) */
  function vGrad(color, a1, a2) {
    return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      { offset: 0, color: alpha(color, a1) },
      { offset: 1, color: alpha(color, a2) },
    ]);
  }

  /* ===================================
     Shared option builders
  =================================== */
  function tip(t, o) {
    return Object.assign({
      trigger: "item",
      backgroundColor: t.surface,
      borderColor: t.border,
      borderWidth: 1,
      padding: [8, 12],
      textStyle: { color: t.title, fontSize: 12 },
      extraCssText: "border-radius:10px;box-shadow:0 8px 24px rgba(15,15,25,.12);",
    }, o || {});
  }

  function leg(t, o) {
    return Object.assign({
      type: "scroll",
      icon: "circle",
      itemWidth: 9,
      itemHeight: 9,
      itemGap: 14,
      top: 0,
      left: t.rtl ? "right" : "left",
      textStyle: { color: t.axis, fontSize: 12 },
    }, o || {});
  }

  function grid(o) {
    return Object.assign({ left: 6, right: 16, top: 34, bottom: 4, containLabel: true }, o || {});
  }

  function catX(t, data, o) {
    return Object.assign({
      type: "category",
      data: data,
      boundaryGap: true,
      axisLine: { lineStyle: { color: t.border } },
      axisTick: { show: false },
      axisLabel: { color: t.axis, fontSize: 12 },
      splitLine: { show: false },
    }, o || {});
  }

  function valY(t, o) {
    return Object.assign({
      type: "value",
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { color: t.axis, fontSize: 12 },
      splitLine: { lineStyle: { color: t.border, type: "dashed" } },
    }, o || {});
  }

  /* ===================================
     Data helpers
  =================================== */
  function rnd(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function seed(n, min, max) {
    var a = [];
    for (var i = 0; i < n; i++) a.push(rnd(min, max));
    return a;
  }
  function iso(d) {
    return d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2);
  }
  var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var MONTHS9 = MONTHS.slice(0, 9);

  /* ===================================
     Chart builders (id → option factory)
  =================================== */
  var BUILDERS = {

    /* ===================================
       Line Charts
    =================================== */

    /* Basic Line */
    ecLine: function (t) {
      return {
        color: pal(t),
        tooltip: tip(t, { trigger: "axis" }),
        grid: grid(),
        xAxis: catX(t, MONTHS9, { boundaryGap: false }),
        yAxis: valY(t),
        series: [{
          name: "Revenue", type: "line", data: seed(9, 30, 90),
          symbol: "circle", symbolSize: 7, showSymbol: true,
          lineStyle: { width: 3, color: t.brand }, itemStyle: { color: t.brand },
        }],
      };
    },

    /* Area (smooth + gradient) */
    ecArea: function (t) {
      return {
        color: [t.emerald],
        tooltip: tip(t, { trigger: "axis" }),
        grid: grid(),
        xAxis: catX(t, MONTHS9, { boundaryGap: false }),
        yAxis: valY(t),
        series: [{
          name: "Sessions", type: "line", smooth: true, showSymbol: false, data: seed(9, 30, 90),
          lineStyle: { width: 3, color: t.emerald },
          areaStyle: { color: vGrad(t.emerald, 0.35, 0.02) },
        }],
      };
    },

    /* Timeline (theme river / streamgraph) */
    ecTimeline: function (t) {
      var names = ["Search", "Social", "Direct", "Email"];
      var data = [], start = new Date(2024, 0, 1).getTime(), week = 6048e5;
      for (var w = 0; w < 11; w++) {
        var date = iso(new Date(start + w * week));
        for (var s = 0; s < names.length; s++) data.push([date, rnd(10, 60), names[s]]);
      }
      return {
        color: pal(t),
        tooltip: tip(t, { trigger: "axis", axisPointer: { type: "line" } }),
        legend: leg(t, { data: names }),
        singleAxis: {
          /* A time axis emits a label per tick AND a boundary label per month.
             In a card this narrow they collide into an unreadable smear, so
             hideOverlap thins them out and the taller bottom gutter gives the
             survivors a row to sit in. */
          type: "time", top: 40, bottom: 28,
          axisTick: { show: false }, axisLine: { lineStyle: { color: t.border } },
          axisLabel: { color: t.axis, hideOverlap: true, showMinLabel: false, showMaxLabel: false },
          splitLine: { show: false },
        },
        series: [{
          type: "themeRiver", data: data, emphasis: { focus: "series" },
          label: { show: false }, itemStyle: { borderColor: t.surface, borderWidth: 1 },
        }],
      };
    },

    /* ===================================
       Bar Charts
    =================================== */

    /* Basic Bar */
    ecBar: function (t) {
      return {
        tooltip: tip(t, { trigger: "axis", axisPointer: { type: "shadow" } }),
        grid: grid(),
        xAxis: catX(t, MONTHS9),
        yAxis: valY(t),
        series: [{
          name: "Revenue", type: "bar", data: seed(9, 20, 90), barMaxWidth: 34,
          itemStyle: { color: t.brand, borderRadius: [6, 6, 0, 0] },
        }],
      };
    },

    /* Horizontal Bar (distributed colors) */
    ecBarH: function (t) {
      var cats = ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot"], p = pal(t);
      return {
        tooltip: tip(t, { trigger: "axis", axisPointer: { type: "shadow" } }),
        grid: grid(),
        xAxis: valY(t),
        yAxis: catX(t, cats, { inverse: true }),
        series: [{
          type: "bar", barMaxWidth: 22,
          data: cats.map(function (_, i) {
            return { value: rnd(20, 90), itemStyle: { color: p[i % p.length], borderRadius: [0, 6, 6, 0] } };
          }),
        }],
      };
    },

    /* Stacked Bar */
    ecBarStack: function (t) {
      var days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], names = ["Phone", "Email", "Chat"];
      return {
        color: pal(t),
        tooltip: tip(t, { trigger: "axis", axisPointer: { type: "shadow" } }),
        legend: leg(t, { data: names }),
        grid: grid(),
        xAxis: catX(t, days),
        yAxis: valY(t),
        series: names.map(function (nm, i) {
          return {
            name: nm, type: "bar", stack: "total", data: seed(6, 8, 30), barMaxWidth: 34,
            itemStyle: { borderRadius: i === names.length - 1 ? [4, 4, 0, 0] : 0 },
          };
        }),
      };
    },

    /* ===================================
       Pie Charts
    =================================== */

    /* Basic Pie */
    ecPie: function (t) {
      return {
        color: pal(t),
        tooltip: tip(t, { formatter: "{b}: {c} ({d}%)" }),
        legend: leg(t, { type: "plain", top: "auto", bottom: 0, left: "center" }),
        series: [{
          type: "pie", radius: "62%", center: ["50%", "45%"],
          data: [
            { value: 38, name: "Direct" }, { value: 26, name: "Organic" }, { value: 18, name: "Referral" },
            { value: 12, name: "Social" }, { value: 6, name: "Email" },
          ],
          itemStyle: { borderColor: t.surface, borderWidth: 2 },
          /* Outside labels + leader lines want ~60px of gutter on each side,
             which a third-width card does not have — the names were cut to
             "D…". The share goes inside the slice instead (as the ApexCharts
             pies do) and the legend already carries the names. */
          label: { position: "inside", color: "#fff", fontSize: 11, formatter: "{d}%" },
          labelLine: { show: false },
          emphasis: { scaleSize: 6 },
        }],
      };
    },

    /* Donut */
    ecDonut: function (t) {
      return {
        color: pal(t),
        tooltip: tip(t, { formatter: "{b}: {c} ({d}%)" }),
        legend: leg(t, { type: "plain", top: "auto", bottom: 0, left: "center" }),
        series: [{
          type: "pie", radius: ["46%", "66%"], center: ["50%", "45%"], avoidLabelOverlap: true,
          data: [
            { value: 44, name: "Completed" }, { value: 28, name: "In progress" },
            { value: 16, name: "Pending" }, { value: 12, name: "Cancelled" },
          ],
          itemStyle: { borderColor: t.surface, borderWidth: 2, borderRadius: 4 },
          label: { show: false }, labelLine: { show: false },
        }],
      };
    },

    /* ===================================
       Funnel
    =================================== */

    /* Conversion Funnel */
    ecFunnel: function (t) {
      var names = ["Visits", "Signups", "Trials", "Paid", "Renewed"];
      return {
        color: pal(t),
        tooltip: tip(t, { formatter: "{b}: {c}" }),
        legend: leg(t, { type: "plain", top: "auto", bottom: 0, left: "center", data: names }),
        series: [{
          type: "funnel", top: 16, bottom: 44, left: "8%", width: "84%", gap: 2, minSize: "16%",
          /* The white label colour only works on the band itself — ECharts
             puts funnel labels to the RIGHT by default, where they fell off
             the card edge. */
          label: { position: "inside", color: "#fff", fontSize: 12 }, labelLine: { show: false },
          itemStyle: { borderColor: t.surface, borderWidth: 1 },
          data: [
            { value: 100, name: "Visits" }, { value: 72, name: "Signups" }, { value: 52, name: "Trials" },
            { value: 34, name: "Paid" }, { value: 20, name: "Renewed" },
          ],
        }],
      };
    },

    /* ===================================
       Scatter Charts
    =================================== */

    /* Basic Scatter */
    ecScatter: function (t) {
      function sc(n) { var a = []; for (var i = 0; i < n; i++) a.push([rnd(0, 100), rnd(0, 100)]); return a; }
      return {
        color: pal(t),
        tooltip: tip(t),
        legend: leg(t, { data: ["Group 1", "Group 2"] }),
        grid: grid(),
        xAxis: valY(t),
        yAxis: valY(t),
        series: [
          { name: "Group 1", type: "scatter", symbolSize: 10, data: sc(24), itemStyle: { color: alpha(t.brand, 0.75) } },
          { name: "Group 2", type: "scatter", symbolSize: 10, data: sc(24), itemStyle: { color: alpha(t.amber, 0.75) } },
        ],
      };
    },

    /* Bubble (x, y, size) */
    ecBubble: function (t) {
      function bub(n) { var a = []; for (var i = 0; i < n; i++) a.push([rnd(10, 90), rnd(10, 90), rnd(12, 45)]); return a; }
      return {
        color: pal(t),
        tooltip: tip(t),
        legend: leg(t, { data: ["Segment A", "Segment B"] }),
        grid: grid(),
        xAxis: valY(t, { min: 0, max: 100 }),
        yAxis: valY(t, { min: 0, max: 100 }),
        series: [
          { name: "Segment A", type: "scatter", data: bub(9), symbolSize: function (d) { return d[2]; }, itemStyle: { color: alpha(t.brand, 0.6) } },
          { name: "Segment B", type: "scatter", data: bub(9), symbolSize: function (d) { return d[2]; }, itemStyle: { color: alpha(t.cyan, 0.6) } },
        ],
      };
    },

    /* ===================================
       Radar
    =================================== */

    /* Multi Radar */
    ecRadar: function (t) {
      return {
        color: [t.brand, t.cyan],
        tooltip: tip(t),
        legend: leg(t, { type: "plain", top: "auto", bottom: 0, left: "center", data: ["This year", "Last year"] }),
        radar: {
          center: ["50%", "46%"], radius: "62%",
          indicator: [
            { name: "Speed", max: 100 }, { name: "Power", max: 100 }, { name: "Focus", max: 100 },
            { name: "Agility", max: 100 }, { name: "Range", max: 100 }, { name: "Stamina", max: 100 },
          ],
          axisName: { color: t.axis, fontSize: 12 },
          splitLine: { lineStyle: { color: t.border } },
          splitArea: { show: false },
          axisLine: { lineStyle: { color: t.border } },
        },
        series: [{
          type: "radar", symbolSize: 4,
          data: [
            { value: [80, 65, 72, 90, 55, 68], name: "This year", areaStyle: { opacity: 0.18 } },
            { value: [60, 78, 66, 70, 72, 55], name: "Last year", areaStyle: { opacity: 0.12 } },
          ],
        }],
      };
    },

    /* ===================================
       Gauge
    =================================== */

    /* Progress Gauge */
    ecGauge: function (t) {
      return {
        tooltip: tip(t, { formatter: "{b}: {c}%" }),
        series: [{
          type: "gauge", radius: "92%", center: ["50%", "58%"], startAngle: 210, endAngle: -30, min: 0, max: 100,
          progress: { show: true, width: 16, roundCap: true, itemStyle: { color: t.brand } },
          pointer: { show: false }, anchor: { show: false },
          axisLine: { lineStyle: { width: 16, color: [[1, t.border]] } },
          axisTick: { show: false }, splitLine: { show: false }, axisLabel: { show: false },
          title: { offsetCenter: [0, "28%"], color: t.axis, fontSize: 13 },
          detail: { valueAnimation: true, offsetCenter: [0, "-6%"], color: t.title, fontSize: 30, fontWeight: "bold", formatter: "{value}%" },
          data: [{ value: rnd(58, 88), name: "Completed" }],
        }],
      };
    },

    /* ===================================
       Tree
    =================================== */

    /* Orthogonal Tree */
    ecTree: function (t) {
      var data = {
        name: "Root",
        children: [
          { name: "Product", children: [{ name: "Web" }, { name: "Mobile" }, { name: "API" }] },
          { name: "Growth", children: [{ name: "SEO" }, { name: "Ads" }, { name: "Social" }] },
          { name: "Ops", children: [{ name: "Cloud" }, { name: "Support" }] },
        ],
      };
      return {
        tooltip: tip(t, { trigger: "item", triggerOn: "mousemove" }),
        series: [{
          /* Node labels sit OUTSIDE the plot box — left of the root, right of
             every leaf — so both gutters have to hold a word ("Root",
             "Support"), not just the node dot. */
          type: "tree", data: [data], top: "6%", left: "16%", bottom: "6%", right: "26%",
          symbol: "circle", symbolSize: 9, orient: "LR",
          itemStyle: { color: t.brand, borderColor: t.brand },
          lineStyle: { color: t.border, width: 1.5, curveness: 0.5 },
          label: { color: t.title, fontSize: 12, position: "left", verticalAlign: "middle", align: "right" },
          leaves: { label: { position: "right", align: "left" } },
          expandAndCollapse: true, initialTreeDepth: 3,
          emphasis: { focus: "descendant" },
        }],
      };
    },

    /* ===================================
       TreeMap
    =================================== */

    /* Nested TreeMap */
    ecTreemap: function (t) {
      var p = pal(t);
      var data = [
        { name: "Search", value: 420 }, { name: "Social", value: 310 }, { name: "Direct", value: 250 },
        { name: "Email", value: 180 }, { name: "Referral", value: 140 }, { name: "Display", value: 95 }, { name: "Affiliate", value: 60 },
      ].map(function (d, i) { return { name: d.name, value: d.value, itemStyle: { color: p[i % p.length] } }; });
      return {
        tooltip: tip(t, { formatter: "{b}: {c}" }),
        series: [{
          type: "treemap", roam: false, nodeClick: false, breadcrumb: { show: false },
          top: 6, left: 6, right: 6, bottom: 6,
          itemStyle: { borderColor: t.surface, borderWidth: 2, gapWidth: 2 },
          label: { color: "#fff", fontSize: 12 },
          data: data,
        }],
      };
    },

    /* Sunburst (radial hierarchy) */
    ecSunburst: function (t) {
      return {
        color: pal(t),
        tooltip: tip(t),
        series: [{
          type: "sunburst", radius: [0, "92%"], center: ["50%", "48%"],
          itemStyle: { borderColor: t.surface, borderWidth: 2 },
          label: { color: "#fff", fontSize: 11 },
          levels: [{}, { r0: "0%", r: "52%" }, { r0: "52%", r: "88%", label: { color: t.title } }],
          data: [
            { name: "Tech", children: [{ name: "Web", value: 20 }, { name: "iOS", value: 14 }, { name: "Android", value: 12 }] },
            { name: "Sales", children: [{ name: "B2B", value: 18 }, { name: "B2C", value: 10 }] },
            { name: "Ops", children: [{ name: "Cloud", value: 12 }, { name: "Support", value: 8 }] },
          ],
        }],
      };
    },

    /* ===================================
       Sankey
    =================================== */

    /* Flow Sankey */
    ecSankey: function (t) {
      return {
        color: pal(t),
        tooltip: tip(t, { trigger: "item", triggerOn: "mousemove" }),
        series: [{
          type: "sankey", top: 10, bottom: 10, left: 10, right: 16, nodeGap: 10, nodeWidth: 12,
          data: [
            { name: "Search" }, { name: "Social" }, { name: "Direct" }, { name: "Landing" },
            { name: "Signup" }, { name: "Purchase" }, { name: "Churn" },
          ],
          links: [
            { source: "Search", target: "Landing", value: 40 }, { source: "Social", target: "Landing", value: 25 },
            { source: "Direct", target: "Landing", value: 20 }, { source: "Landing", target: "Signup", value: 55 },
            { source: "Landing", target: "Churn", value: 30 }, { source: "Signup", target: "Purchase", value: 35 },
            { source: "Signup", target: "Churn", value: 20 },
          ],
          label: { color: t.title, fontSize: 11 },
          itemStyle: { borderColor: "transparent" },
          lineStyle: { color: "gradient", opacity: 0.4, curveness: 0.5 },
          emphasis: { focus: "adjacency" },
        }],
      };
    },

    /* ===================================
       Parallel
    =================================== */

    /* Parallel Coordinates */
    ecParallel: function (t) {
      function row() { return [rnd(20, 90), rnd(0, 100), rnd(1, 5), rnd(100, 900), rnd(10, 60)]; }
      var dataA = [], dataB = [];
      for (var i = 0; i < 10; i++) { dataA.push(row()); dataB.push(row()); }
      return {
        color: [t.brand, t.cyan],
        tooltip: tip(t),
        legend: leg(t, { data: ["Cohort A", "Cohort B"] }),
        parallelAxis: [
          { dim: 0, name: "Score" }, { dim: 1, name: "Reach" }, { dim: 2, name: "Rating", min: 0, max: 5 },
          { dim: 3, name: "Orders" }, { dim: 4, name: "Churn" },
        ],
        parallel: {
          top: 40, bottom: 16, left: 44, right: 24, axisExpandable: false,
          parallelAxisDefault: {
            nameTextStyle: { color: t.axis }, axisLine: { lineStyle: { color: t.border } },
            axisTick: { lineStyle: { color: t.border } }, axisLabel: { color: t.axis }, splitLine: { show: false },
          },
        },
        series: [
          { name: "Cohort A", type: "parallel", data: dataA, lineStyle: { width: 1.5, opacity: 0.5 } },
          { name: "Cohort B", type: "parallel", data: dataB, lineStyle: { width: 1.5, opacity: 0.5 } },
        ],
      };
    },

    /* ===================================
       Heatmap
    =================================== */

    /* Day × Hour Heatmap */
    ecHeatmap: function (t) {
      var hours = ["0h", "2h", "4h", "6h", "8h", "10h", "12h", "14h", "16h", "18h", "20h", "22h"];
      var days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
      var data = [];
      for (var d = 0; d < days.length; d++) for (var h = 0; h < hours.length; h++) data.push([h, d, rnd(0, 100)]);
      return {
        tooltip: tip(t, { position: "top" }),
        grid: grid({ top: 10, bottom: 64, left: 6, right: 6 }),
        xAxis: { type: "category", data: hours, splitArea: { show: true }, axisLine: { lineStyle: { color: t.border } }, axisTick: { show: false }, axisLabel: { color: t.axis } },
        yAxis: { type: "category", data: days, splitArea: { show: true }, axisLine: { lineStyle: { color: t.border } }, axisTick: { show: false }, axisLabel: { color: t.axis } },
        visualMap: { min: 0, max: 100, calculable: true, orient: "horizontal", left: "center", bottom: 8, inRange: { color: [alpha(t.brand, 0.12), t.brand] }, textStyle: { color: t.axis } },
        series: [{
          type: "heatmap", data: data, label: { show: false },
          itemStyle: { borderColor: t.surface, borderWidth: 2, borderRadius: 3 },
          emphasis: { itemStyle: { shadowBlur: 6, shadowColor: "rgba(0,0,0,.2)" } },
        }],
      };
    },

    /* ===================================
       Geo Map
    =================================== */

    /* World Choropleth */
    ecGeo: function (t) {
      return {
        tooltip: tip(t, { trigger: "item", formatter: "{b}: {c}" }),
        visualMap: {
          min: 0, max: 100, calculable: true, left: 10, bottom: 10, orient: "vertical",
          inRange: { color: [alpha(t.brand, 0.15), t.brand] }, textStyle: { color: t.axis },
        },
        series: [{
          type: "map", map: "world", roam: false, top: 6, bottom: 6,
          itemStyle: { areaColor: t.surfaceMuted, borderColor: t.border, borderWidth: 0.5 },
          emphasis: { itemStyle: { areaColor: t.amber }, label: { show: false } },
          label: { show: false },
          data: [
            { name: "United States", value: 92 }, { name: "China", value: 85 }, { name: "India", value: 74 },
            { name: "Brazil", value: 63 }, { name: "Russia", value: 58 }, { name: "Germany", value: 66 },
            { name: "United Kingdom", value: 61 }, { name: "France", value: 55 }, { name: "Canada", value: 52 },
            { name: "Australia", value: 48 }, { name: "Japan", value: 70 }, { name: "South Africa", value: 40 },
          ],
        }],
      };
    },

    /* ===================================
       Graph
    =================================== */

    /* Force-directed Graph */
    ecGraph: function (t) {
      var cats = [{ name: "Core" }, { name: "Service" }, { name: "Client" }];
      var names = ["API", "Auth", "DB", "Cache", "Web", "Mobile", "CDN", "Queue", "Worker", "Store"];
      var nodes = [], links = [];
      for (var i = 0; i < names.length; i++) nodes.push({ id: String(i), name: names[i], symbolSize: rnd(14, 34), category: i % 3, value: rnd(10, 90) });
      for (var j = 1; j < names.length; j++) links.push({ source: String(j), target: String(rnd(0, j - 1)) });
      return {
        color: pal(t),
        tooltip: tip(t),
        legend: leg(t, { data: cats.map(function (c) { return c.name; }) }),
        series: [{
          type: "graph", layout: "force", roam: true, draggable: true,
          data: nodes, links: links, categories: cats,
          force: { repulsion: 90, edgeLength: 70, gravity: 0.1 },
          label: { show: true, color: t.title, fontSize: 11, position: "right" },
          lineStyle: { color: t.border, width: 1, opacity: 0.6, curveness: 0.1 },
          emphasis: { focus: "adjacency", lineStyle: { width: 2 } },
        }],
      };
    },

    /* ===================================
       Candlestick
    =================================== */

    /* OHLC Candlestick */
    ecCandle: function (t) {
      var dates = [], data = [], price = 60;
      for (var i = 0; i < 24; i++) {
        var open = price, close = open + rnd(-8, 8);
        var low = Math.min(open, close) - rnd(1, 6), high = Math.max(open, close) + rnd(1, 6);
        dates.push("D" + (i + 1));
        data.push([Math.round(open), Math.round(close), Math.round(low), Math.round(high)]);
        price = close < 20 ? 30 : close;
      }
      return {
        tooltip: tip(t, { trigger: "axis", axisPointer: { type: "cross" } }),
        grid: grid({ bottom: 6 }),
        xAxis: catX(t, dates),
        yAxis: valY(t, { scale: true }),
        series: [{
          type: "candlestick", data: data,
          itemStyle: { color: t.emerald, color0: t.rose, borderColor: t.emerald, borderColor0: t.rose },
        }],
      };
    },

    /* ===================================
       Calendar
    =================================== */

    /* Yearly Calendar Heatmap */
    ecCalendar: function (t) {
      var data = [], start = new Date(2024, 0, 1).getTime(), day = 864e5;
      for (var i = 0; i < 366; i++) data.push([iso(new Date(start + i * day)), rnd(0, 100)]);
      return {
        tooltip: tip(t, { formatter: function (p) { return p.value[0] + ": " + p.value[1]; } }),
        visualMap: { min: 0, max: 100, calculable: true, orient: "horizontal", left: "center", bottom: 4, inRange: { color: [alpha(t.brand, 0.14), t.brand] }, textStyle: { color: t.axis } },
        calendar: {
          top: 32, left: 30, right: 16, bottom: 58, cellSize: ["auto", 14], range: "2024",
          itemStyle: { color: t.surface, borderColor: t.border, borderWidth: 1 },
          splitLine: { lineStyle: { color: t.border } },
          yearLabel: { show: false },
          monthLabel: { color: t.axis, fontSize: 11 },
          dayLabel: { color: t.axis, fontSize: 10, firstDay: 1 },
        },
        series: [{ type: "heatmap", coordinateSystem: "calendar", data: data }],
      };
    },
  };

  /* ===================================
     Build / teardown
  =================================== */
  function build() {
    if (typeof window.echarts === "undefined") return;
    var t = readTheme();
    while (instances.length) {
      try { instances.pop().dispose(); } catch (e) { /* mid-teardown */ }
    }
    chartById = {};
    Object.keys(BUILDERS).forEach(function (id) {
      var el = document.getElementById(id);
      if (!el) return;
      var inst = echarts.init(el, null, { renderer: "canvas" });
      inst.setOption(BUILDERS[id](t));
      instances.push(inst);
      chartById[id] = inst;
    });
  }

  function rebuildOne(id) {
    if (typeof window.echarts === "undefined" || !BUILDERS[id]) return;
    var el = document.getElementById(id);
    if (!el) return;
    if (chartById[id]) {
      var idx = instances.indexOf(chartById[id]);
      try { chartById[id].dispose(); } catch (e) { /* ignore */ }
      if (idx > -1) instances.splice(idx, 1);
    }
    var inst = echarts.init(el, null, { renderer: "canvas" });
    inst.setOption(BUILDERS[id](readTheme()));
    instances.push(inst);
    chartById[id] = inst;
  }

  function reflow() {
    instances.forEach(function (c) { try { c.resize(); } catch (e) { /* ignore */ } });
  }

  function debounce(fn, wait) {
    var id;
    return function () { clearTimeout(id); id = setTimeout(fn, wait); };
  }

  /* ===================================
     Tab filter + premium scroll UX (wheel / keyboard / drag / auto-center)
  =================================== */
  function initFilter() {
    var tabs = document.querySelector("[data-chart-tabs]");
    var grid = document.querySelector("[data-chart-grid]");
    if (!tabs || !grid) return;
    var cols = Array.prototype.slice.call(grid.children);

    function revealTab(btn) {
      if (!btn) return;
      var max = tabs.scrollWidth - tabs.clientWidth;
      if (max <= 0) return;
      var tabsRect = tabs.getBoundingClientRect();
      var btnRect = btn.getBoundingClientRect();
      var target = tabs.scrollLeft + (btnRect.left - tabsRect.left) - (tabs.clientWidth - btnRect.width) / 2;
      target = Math.max(0, Math.min(target, max));
      if (typeof tabs.scrollTo === "function") tabs.scrollTo({ left: target, behavior: "smooth" });
      else tabs.scrollLeft = target;
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
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) { tabs.scrollLeft += e.deltaY; e.preventDefault(); }
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

    /* Click-and-drag to slide the rail (desktop grab-scroll) */
    var dragOn = false, dragStartX = 0, dragStartLeft = 0, dragMoved = false, dragId = null;
    function overflowing() { return tabs.scrollWidth - tabs.clientWidth > 1; }
    function syncGrab() { if (!dragOn) tabs.style.cursor = overflowing() ? "grab" : ""; }
    syncGrab();
    if (typeof ResizeObserver !== "undefined") new ResizeObserver(syncGrab).observe(tabs);

    tabs.addEventListener("pointerdown", function (e) {
      if (e.pointerType !== "mouse" || e.button !== 0 || !overflowing()) return;
      dragOn = true; dragMoved = false; dragId = e.pointerId;
      dragStartX = e.clientX; dragStartLeft = tabs.scrollLeft;
    });
    tabs.addEventListener("pointermove", function (e) {
      if (!dragOn) return;
      var dx = e.clientX - dragStartX;
      if (!dragMoved) {
        if (Math.abs(dx) <= 4) return;
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
      if (dragId != null && tabs.hasPointerCapture && tabs.hasPointerCapture(dragId)) tabs.releasePointerCapture(dragId);
      dragId = null;
    }
    tabs.addEventListener("pointerup", endDrag);
    tabs.addEventListener("pointercancel", endDrag);
    tabs.addEventListener("click", function (e) {
      if (dragMoved) { e.preventDefault(); e.stopPropagation(); dragMoved = false; }
    }, true);

    requestAnimationFrame(function () { revealTab(tabs.querySelector(".nav-link.active")); });
  }

  /* ===================================
     Chart download (PNG) + refresh, with inline feedback
  =================================== */
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

  function exportPng(inst, title) {
    return new Promise(function (resolve, reject) {
      if (!inst) return reject(new Error("Chart not ready"));
      try {
        var url = inst.getDataURL({ type: "png", pixelRatio: 2, backgroundColor: readTheme().surface });
        triggerDownload(url, slug(title) + ".png");
        resolve();
      } catch (e) { reject(e); }
    });
  }

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

  function initActions() {
    var grid = document.querySelector("[data-chart-grid]");
    if (!grid) return;
    grid.addEventListener("click", function (e) {
      var col = e.target.closest("[data-chart-cat]");
      var mount = col && col.querySelector('[id^="ec"]');
      var title = col && col.querySelector("h2") ? col.querySelector("h2").textContent : "chart";
      var inst = mount && chartById[mount.id];

      var refresh = e.target.closest("[data-chart-refresh]");
      if (refresh) {
        e.preventDefault();
        if (mount) rebuildOne(mount.id);
        return;
      }

      var ctrl = e.target.closest("[data-chart-export]");
      if (!ctrl) return;
      e.preventDefault();
      var isBtn = ctrl.tagName === "BUTTON";
      if (!inst) { btnFeedback(ctrl, "error"); return; }
      if (isBtn) btnFeedback(ctrl, "loading");
      exportPng(inst, title)
        .then(function () { if (isBtn) btnFeedback(ctrl, "success"); })
        .catch(function (err) {
          if (window.console) console.error("Chart export failed:", err);
          btnFeedback(ctrl, "error");
        });
    });
  }

  /* ===================================
     Init
  =================================== */
  function init() {
    if (!document.querySelector("[data-chart-grid]")) return;
    build();
    initFilter();
    initActions();

    var host = document.querySelector(".app-content");
    if (host && typeof ResizeObserver !== "undefined") {
      new ResizeObserver(debounce(reflow, 150)).observe(host);
    }
    window.addEventListener("resize", debounce(reflow, 150));

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

/* ==========================================================================
   Chart.js — showcase page module
   Self-contained Chart.js theme + a library of demo charts, wired to the Corexa
   design system (reads CSS variables, re-renders on theme / dir change) and a
   client-side tab filter. Renders only when its canvas ids exist.
   ========================================================================== */
(function () {
  "use strict";

  var root = document.documentElement;
  var instances = [];
  var chartById = {};
  var rtTimer = null;

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
      title: v("--text-title", "#0a0a0a"),
      font: (getComputedStyle(document.body).fontFamily || "inherit"),
      dark: root.getAttribute("data-bs-theme") === "dark",
      rtl: root.getAttribute("dir") === "rtl",
    };
  }

  function pal(t) {
    return [t.brand, t.cyan, t.emerald, t.amber, t.rose, t.blue, t.violet];
  }

  /* Translucent variant of any token (hex or rgb) — used for fills / soft areas */
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
        var p = inner.split(",").slice(0, 3).join(",");
        return "rgba(" + p + "," + a + ")";
      });
    }
    return c;
  }

  /* Vertical fill gradient scoped to the chart plot area (scriptable) */
  function areaFill(color, a) {
    return function (ctx) {
      var chart = ctx.chart, area = chart.chartArea;
      if (!area) return alpha(color, a);
      var g = chart.ctx.createLinearGradient(0, area.top, 0, area.bottom);
      g.addColorStop(0, alpha(color, a));
      g.addColorStop(1, alpha(color, 0));
      return g;
    };
  }

  /* Horizontal stroke gradient between two tokens (scriptable) */
  function strokeGradient(from, to) {
    return function (ctx) {
      var chart = ctx.chart, area = chart.chartArea;
      if (!area) return from;
      var g = chart.ctx.createLinearGradient(area.left, 0, area.right, 0);
      g.addColorStop(0, from);
      g.addColorStop(1, to);
      return g;
    };
  }

  /* ===================================
     Shared option builders
  =================================== */
  function legendCfg(t, o) {
    o = o || {};
    return {
      display: o.display !== false,
      position: o.pos || "top",
      align: o.align || "start",
      labels: {
        color: t.axis,
        usePointStyle: true,
        pointStyle: "circle",
        boxWidth: 8,
        boxHeight: 8,
        padding: 14,
        font: { size: 12 },
      },
      rtl: t.rtl,
    };
  }

  function tooltipCfg(t) {
    return {
      rtl: t.rtl,
      usePointStyle: true,
      padding: 10,
      cornerRadius: 8,
      boxPadding: 4,
      titleFont: { size: 12, weight: "600" },
      bodyFont: { size: 12 },
    };
  }

  function axisCfg(t, stacked, reverse) {
    return {
      stacked: !!stacked,
      reverse: !!reverse,
      grid: { color: t.border, drawBorder: false, drawTicks: false },
      border: { display: false },
      ticks: { color: t.axis, font: { size: 12 }, padding: 8 },
    };
  }

  function cartesian(t, o) {
    o = o || {};
    return {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { intersect: false, mode: o.mode || "index" },
      plugins: { legend: legendCfg(t, o.legend), tooltip: tooltipCfg(t) },
      scales: {
        x: axisCfg(t, o.stacked, t.rtl),
        y: axisCfg(t, o.stacked, false),
      },
    };
  }

  function radial(t) {
    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: legendCfg(t, { pos: "bottom", align: "center" }), tooltip: tooltipCfg(t) },
      scales: {
        r: {
          grid: { color: t.border },
          angleLines: { color: t.border },
          pointLabels: { color: t.axis, font: { size: 12 } },
          ticks: { display: false, backdropColor: "transparent", color: t.axis },
        },
      },
    };
  }

  function circular(t, cut) {
    return {
      responsive: true,
      maintainAspectRatio: false,
      cutout: cut || 0,
      plugins: { legend: legendCfg(t, { pos: "bottom", align: "center" }), tooltip: tooltipCfg(t) },
    };
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
  function pts(n, max) {
    var a = [];
    for (var i = 0; i < n; i++) a.push({ x: rnd(0, max || 100), y: rnd(0, 100) });
    return a;
  }
  function bubbles(n) {
    var a = [];
    for (var i = 0; i < n; i++) a.push({ x: rnd(10, 90), y: rnd(10, 90), r: rnd(6, 22) });
    return a;
  }
  var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  /* ===================================
     Chart builders (id → config factory)
  =================================== */
  var BUILDERS = {

    /* ===================================
       Line Charts
    =================================== */

    /* Basic Line */
    cjLineBasic: function (t) {
      var c = t.brand;
      return {
        type: "line",
        data: {
          labels: MONTHS.slice(0, 9),
          datasets: [{
            label: "Revenue", data: seed(9, 30, 90),
            borderColor: c, backgroundColor: alpha(c, 0.15),
            borderWidth: 2, tension: 0, pointRadius: 3, pointHoverRadius: 5,
            pointBackgroundColor: c, fill: false,
          }],
        },
        options: cartesian(t),
      };
    },

    /* Multi Line */
    cjLineMulti: function (t) {
      var p = pal(t);
      var mk = function (label, i) {
        return {
          label: label, data: seed(9, 20, 90),
          borderColor: p[i], backgroundColor: alpha(p[i], 0.15),
          borderWidth: 2, tension: 0.4, pointRadius: 0, pointHoverRadius: 5, fill: false,
        };
      };
      return {
        type: "line",
        data: { labels: MONTHS.slice(0, 9), datasets: [mk("Desktop", 0), mk("Mobile", 1), mk("Tablet", 2)] },
        options: cartesian(t),
      };
    },

    /* Gradient Line */
    cjLineGradient: function (t) {
      return {
        type: "line",
        data: {
          labels: MONTHS.slice(0, 9),
          datasets: [{
            label: "Growth", data: seed(9, 25, 95),
            borderColor: strokeGradient(t.cyan, t.brand),
            backgroundColor: areaFill(t.brand, 0.18),
            borderWidth: 3, tension: 0.4, pointRadius: 0, pointHoverRadius: 5, fill: true,
          }],
        },
        options: cartesian(t, { legend: { display: false } }),
      };
    },

    /* Area */
    cjArea: function (t) {
      return {
        type: "line",
        data: {
          labels: MONTHS.slice(0, 9),
          datasets: [{
            label: "Sessions", data: seed(9, 30, 90),
            borderColor: t.emerald, backgroundColor: areaFill(t.emerald, 0.35),
            borderWidth: 2, tension: 0.4, pointRadius: 0, pointHoverRadius: 5, fill: true,
          }],
        },
        options: cartesian(t, { legend: { display: false } }),
      };
    },

    /* Realtime Demo */
    cjLineRealtime: function (t) {
      var o = cartesian(t, { legend: { display: false } });
      o.scales.y.min = 0;
      o.scales.y.max = 100;
      o.animation = { duration: 600, easing: "linear" };
      return {
        type: "line",
        data: {
          labels: ["", "", "", "", "", "", "", "", "", "", "", ""],
          datasets: [{
            label: "Throughput", data: seed(12, 20, 80),
            borderColor: t.blue, backgroundColor: areaFill(t.blue, 0.2),
            borderWidth: 3, tension: 0.4, pointRadius: 0, fill: true,
          }],
        },
        options: o,
      };
    },

    /* ===================================
       Bar Charts
    =================================== */

    /* Bar */
    cjBar: function (t) {
      var c = t.brand;
      return {
        type: "bar",
        data: {
          labels: MONTHS.slice(0, 9),
          datasets: [{
            label: "Revenue", data: seed(9, 20, 90),
            backgroundColor: alpha(c, 0.85), hoverBackgroundColor: c,
            borderRadius: 6, borderSkipped: false, maxBarThickness: 34,
          }],
        },
        options: cartesian(t, { mode: "nearest", legend: { display: false } }),
      };
    },

    /* Horizontal Bar */
    cjBarHorizontal: function (t) {
      var p = pal(t);
      var labels = ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot"];
      var o = cartesian(t, { mode: "nearest", legend: { display: false } });
      o.indexAxis = "y";
      return {
        type: "bar",
        data: {
          labels: labels,
          datasets: [{
            label: "Units", data: seed(6, 20, 90),
            backgroundColor: labels.map(function (_, i) { return alpha(p[i % p.length], 0.85); }),
            borderRadius: 6, borderSkipped: false, maxBarThickness: 22,
          }],
        },
        options: o,
      };
    },

    /* Stacked */
    cjBarStacked: function (t) {
      var p = pal(t);
      var mk = function (label, i) {
        return { label: label, data: seed(6, 8, 30), backgroundColor: alpha(p[i], 0.85), borderRadius: 4, borderSkipped: false, maxBarThickness: 34 };
      };
      return {
        type: "bar",
        data: { labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], datasets: [mk("Phone", 0), mk("Email", 1), mk("Chat", 2)] },
        options: cartesian(t, { stacked: true, mode: "index" }),
      };
    },

    /* Floating Bar */
    cjBarFloating: function (t) {
      var c = t.violet;
      var data = MONTHS.slice(0, 9).map(function () { var lo = rnd(15, 45); return [lo, lo + rnd(15, 40)]; });
      return {
        type: "bar",
        data: {
          labels: MONTHS.slice(0, 9),
          datasets: [{
            label: "Range", data: data,
            backgroundColor: alpha(c, 0.85), hoverBackgroundColor: c,
            borderRadius: 4, borderSkipped: false, maxBarThickness: 28,
          }],
        },
        options: cartesian(t, { mode: "nearest", legend: { display: false } }),
      };
    },

    /* Financial Style — OHLC candles via overlaid floating bars */
    cjFinancial: function (t) {
      var n = 16, price = 60, rows = [];
      for (var i = 0; i < n; i++) {
        var open = price, close = open + rnd(-8, 8);
        var high = Math.max(open, close) + rnd(1, 6), low = Math.min(open, close) - rnd(1, 6);
        rows.push({ o: open, c: close, h: high, l: low, up: close >= open });
        price = close < 20 ? 30 : close;
      }
      var colors = rows.map(function (r) { return r.up ? t.emerald : t.rose; });
      var o = cartesian(t, { mode: "index", legend: { display: false } });
      return {
        type: "bar",
        data: {
          labels: rows.map(function (_, i) { return "D" + (i + 1); }),
          datasets: [
            {
              label: "Range", data: rows.map(function (r) { return [r.l, r.h]; }),
              backgroundColor: colors, grouped: false, barPercentage: 0.12,
              categoryPercentage: 0.9, borderSkipped: false, order: 1,
            },
            {
              label: "Body", data: rows.map(function (r) { return [Math.min(r.o, r.c), Math.max(r.o, r.c)]; }),
              backgroundColor: colors, grouped: false, barPercentage: 0.5,
              categoryPercentage: 0.9, borderRadius: 2, borderSkipped: false, order: 0,
            },
          ],
        },
        options: o,
      };
    },

    /* ===================================
       Pie / Doughnut
    =================================== */

    /* Pie */
    cjPie: function (t) {
      return {
        type: "pie",
        data: {
          labels: ["Direct", "Organic", "Referral", "Social", "Email"],
          datasets: [{
            data: [38, 26, 18, 12, 6], backgroundColor: pal(t),
            borderColor: t.surface, borderWidth: 2, hoverOffset: 6,
          }],
        },
        options: circular(t),
      };
    },

    /* Doughnut */
    cjDoughnut: function (t) {
      return {
        type: "doughnut",
        data: {
          labels: ["Completed", "In progress", "Pending", "Cancelled"],
          datasets: [{
            data: [44, 28, 16, 12], backgroundColor: pal(t),
            borderColor: t.surface, borderWidth: 2, hoverOffset: 6,
          }],
        },
        options: circular(t, "68%"),
      };
    },

    /* ===================================
       Polar Area
    =================================== */

    /* Polar Area */
    cjPolar: function (t) {
      var p = pal(t);
      return {
        type: "polarArea",
        data: {
          labels: ["Design", "Dev", "Sales", "QA", "Ops", "HR"],
          datasets: [{
            data: [22, 18, 14, 12, 9, 7],
            backgroundColor: p.map(function (c) { return alpha(c, 0.8); }),
            borderColor: t.surface, borderWidth: 1,
          }],
        },
        options: radial(t),
      };
    },

    /* ===================================
       Radar
    =================================== */

    /* Radar */
    cjRadar: function (t) {
      var mk = function (label, color, data) {
        return {
          label: label, data: data,
          borderColor: color, backgroundColor: alpha(color, 0.2),
          borderWidth: 2, pointRadius: 3, pointBackgroundColor: color,
        };
      };
      return {
        type: "radar",
        data: {
          labels: ["Speed", "Power", "Focus", "Agility", "Range", "Stamina"],
          datasets: [mk("This year", t.brand, [80, 65, 72, 90, 55, 68]), mk("Last year", t.cyan, [60, 78, 66, 70, 72, 55])],
        },
        options: radial(t),
      };
    },

    /* ===================================
       Bubble
    =================================== */

    /* Bubble */
    cjBubble: function (t) {
      var mk = function (label, color) {
        return { label: label, data: bubbles(8), backgroundColor: alpha(color, 0.6), borderColor: color, borderWidth: 1 };
      };
      var o = cartesian(t, { mode: "point" });
      o.scales.x.min = 0; o.scales.x.max = 100;
      o.scales.y.min = 0; o.scales.y.max = 100;
      return { type: "bubble", data: { datasets: [mk("Segment A", t.brand), mk("Segment B", t.cyan)] }, options: o };
    },

    /* ===================================
       Scatter
    =================================== */

    /* Scatter */
    cjScatter: function (t) {
      var mk = function (label, color) {
        return { label: label, data: pts(20), backgroundColor: color, pointRadius: 5, pointHoverRadius: 7 };
      };
      var o = cartesian(t, { mode: "point" });
      o.scales.x.min = 0; o.scales.x.max = 100;
      o.scales.y.min = 0; o.scales.y.max = 100;
      return { type: "scatter", data: { datasets: [mk("Group 1", t.brand), mk("Group 2", t.amber)] }, options: o };
    },

    /* ===================================
       Mixed
    =================================== */

    /* Mixed — bar + line */
    cjMixed: function (t) {
      return {
        type: "bar",
        data: {
          labels: MONTHS.slice(0, 9),
          datasets: [
            {
              type: "bar", label: "Revenue", data: seed(9, 30, 90),
              backgroundColor: alpha(t.brand, 0.85), hoverBackgroundColor: t.brand,
              borderRadius: 6, borderSkipped: false, maxBarThickness: 30, order: 2,
            },
            {
              type: "line", label: "Trend", data: seed(9, 40, 85),
              borderColor: t.amber, backgroundColor: alpha(t.amber, 0.15),
              borderWidth: 3, tension: 0.4, pointRadius: 0, pointHoverRadius: 5, fill: false, order: 1,
            },
          ],
        },
        options: cartesian(t),
      };
    },
  };

  /* ===================================
     Realtime feed (attaches to the live line chart)
  =================================== */
  function startRealtime(chart) {
    if (!chart) return;
    rtTimer = setInterval(function () {
      var ds = chart.data.datasets[0].data;
      ds.push(rnd(20, 90));
      ds.shift();
      try { chart.update("none"); } catch (e) { clearInterval(rtTimer); }
    }, 2500);
  }

  /* ===================================
     Build / teardown
  =================================== */
  function build() {
    if (typeof window.Chart === "undefined") return;
    var t = readTheme();
    Chart.defaults.font.family = t.font;
    Chart.defaults.font.size = 12;
    Chart.defaults.color = t.axis;
    Chart.defaults.borderColor = t.border;
    Chart.defaults.maintainAspectRatio = false;

    if (rtTimer) { clearInterval(rtTimer); rtTimer = null; }
    while (instances.length) {
      try { instances.pop().destroy(); } catch (e) { /* mid-teardown */ }
    }
    chartById = {};
    var rt = null;
    Object.keys(BUILDERS).forEach(function (id) {
      var el = document.getElementById(id);
      if (!el) return;
      var chart = new Chart(el.getContext("2d"), BUILDERS[id](t));
      instances.push(chart);
      chartById[id] = chart;
      if (id === "cjLineRealtime") rt = chart;
    });
    startRealtime(rt);
  }

  function rebuildOne(id) {
    if (typeof window.Chart === "undefined" || !BUILDERS[id]) return;
    var el = document.getElementById(id);
    if (!el) return;
    if (id === "cjLineRealtime" && rtTimer) { clearInterval(rtTimer); rtTimer = null; }
    if (chartById[id]) {
      try { chartById[id].destroy(); } catch (e) { /* ignore */ }
      var idx = instances.indexOf(chartById[id]);
      if (idx > -1) instances.splice(idx, 1);
    }
    var chart = new Chart(el.getContext("2d"), BUILDERS[id](readTheme()));
    instances.push(chart);
    chartById[id] = chart;
    if (id === "cjLineRealtime") startRealtime(chart);
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

  /* Composite the transparent canvas onto a surface-colored background for export */
  function exportPng(chart, title) {
    return new Promise(function (resolve, reject) {
      if (!chart || !chart.canvas) return reject(new Error("Chart not ready"));
      try {
        var src = chart.canvas;
        var out = document.createElement("canvas");
        out.width = src.width;
        out.height = src.height;
        var ctx = out.getContext("2d");
        ctx.fillStyle = readTheme().surface;
        ctx.fillRect(0, 0, out.width, out.height);
        ctx.drawImage(src, 0, 0);
        triggerDownload(out.toDataURL("image/png"), slug(title) + ".png");
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
      var mount = col && col.querySelector('[id^="cj"]');
      var title = col && col.querySelector("h2") ? col.querySelector("h2").textContent : "chart";
      var chart = mount && chartById[mount.id];

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
      if (!chart) { btnFeedback(ctrl, "error"); return; }
      if (isBtn) btnFeedback(ctrl, "loading");
      exportPng(chart, title)
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

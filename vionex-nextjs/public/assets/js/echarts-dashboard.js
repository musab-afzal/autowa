/* ==========================================================================
   ECharts — dashboard widgets (theme / mode / RTL aware).
   The companion of charts.js for the handful of widgets ApexCharts cannot
   draw — needle gauges above all. Same contract as charts.js: declare a chart
   by mount id in the CHARTS registry and the engine handles rebuilds on theme,
   mode and direction changes plus container reflows.

   Tokens are read from the MOUNT ELEMENT rather than the document, so a widget
   sitting inside an .on-dark card picks up that card's inverted palette the
   same way its CSS would. Nothing renders unless its mount id is on the page.
   ========================================================================== */
(function () {
  "use strict";
  if (typeof window.echarts === "undefined") return;

  const root = document.documentElement;
  const instances = [];

  /* ===== Shared Chart Config ===== */
  /* design-token snapshot, resolved against `el` so nested palettes apply */
  function readTheme(el) {
    const cs = getComputedStyle(el || root);
    const v = (n, f) => (cs.getPropertyValue(n) || "").trim() || f;
    return {
      red: v("--cat-red", "#dc2626"),
      orange: v("--cat-orange", "#d97706"),
      amber: v("--cat-amber", "#f59e0b"),
      lime: v("--cat-lime", "#65a30d"),
      emerald: v("--cat-emerald", "#059669"),
      surface: v("--surface", "#ffffff"),
      surfacePlain: v("--surface-plain", "#ffffff"),
      title: v("--text-title", "#0d0b1e"),
      axis: v("--text-muted", "#6a6a6a"),
      font: getComputedStyle(document.body).fontFamily || "inherit",
      dark: root.getAttribute("data-bs-theme") === "dark",
      rtl: root.getAttribute("dir") === "rtl",
    };
  }

  /* ===== Band Gauge - shared builder =====
     A half-circle scale split into coloured bands with a needle on the
     reading. `bands` is [[stop, colour], …] with stops rising to 1, exactly
     as ECharts wants them. Reusable for any banded index — sentiment, risk,
     health, satisfaction — by passing a different value and band list. */
  function bandGaugeOpts(t, value, bands, height) {
    return {
      animationDuration: 700,
      series: [
        {
          type: "gauge",
          startAngle: 180,
          endAngle: 0,
          /* the hub sits low so the arc fills the box instead of floating */
          center: ["50%", "76%"],
          radius: "94%",
          min: 0,
          max: 100,
          /* the arc IS the scale — its ticks and labels would only repeat it */
          axisLine: {
            roundCap: true,
            lineStyle: { width: Math.round(height * 0.1), color: bands },
          },
          axisTick: { show: false },
          splitLine: { show: false },
          axisLabel: { show: false },
          title: { show: false },
          pointer: {
            length: "72%",
            width: 3,
            offsetCenter: [0, 0],
            itemStyle: { color: t.title },
          },
          /* open ring hub, matching the card face through its middle */
          anchor: {
            show: true,
            showAbove: true,
            size: 22,
            itemStyle: {
              color: t.surfacePlain,
              borderColor: t.title,
              borderWidth: 3,
            },
          },
          detail: {
            valueAnimation: true,
            offsetCenter: [0, "36%"],
            color: t.title,
            fontFamily: t.font,
            fontSize: Math.round(height * 0.14),
            fontWeight: "bold",
            formatter: "{value}",
          },
          data: [{ value: value }],
        },
      ],
    };
  }

  /* ==========================================================================
     Cryptocurrency Dashboard
     ========================================================================== */

  /* ===== Market Sentiment - Fear & Greed band gauge =====
     The index on the five bands its legend names, with the needle on the
     reading. Bands are even fifths, so the colour under the needle and the
     word in the caption always agree. */
  const CRYPTO_SENTIMENT = 72;
  const CRYPTO_SENTIMENT_H = 285;
  function cryptoSentimentGaugeOpts(t) {
    return bandGaugeOpts(
      t,
      CRYPTO_SENTIMENT,
      [
        [0.2, t.red],
        [0.4, t.orange],
        [0.6, t.amber],
        [0.8, t.lime],
        [1, t.emerald],
      ],
      CRYPTO_SENTIMENT_H,
    );
  }

  /* ===== Chart Registry & Initialization =====
     One entry per chart: { id: "<mount id>", opts: (t) => options, h: px }.
     ECharts sizes from its container, which carries no height of its own
     here, so each entry states the height it wants. */
  const CHARTS = [
    {
      id: "cryptoSentimentGaugeChart",
      opts: cryptoSentimentGaugeOpts,
      h: CRYPTO_SENTIMENT_H,
    },
  ];

  function build() {
    while (instances.length) instances.pop().inst.dispose();
    CHARTS.forEach(function (c) {
      const el = document.getElementById(c.id);
      if (!el) return;
      const inst = echarts.init(el, null, {
        renderer: "svg",
        height: c.h,
      });
      inst.setOption(c.opts(readTheme(el)));
      /* the height rides along with the instance — a registry entry whose
         mount is absent would otherwise shift every later index */
      instances.push({ inst: inst, h: c.h });
    });
  }

  function reflow() {
    instances.forEach(function (r) {
      r.inst.resize({ height: r.h });
    });
  }

  function debounce(fn, wait) {
    let id;
    return function () {
      clearTimeout(id);
      id = setTimeout(fn, wait);
    };
  }

  function init() {
    if (!CHARTS.some(function (c) { return document.getElementById(c.id); })) return;
    build();

    const host = document.querySelector(".app-content");
    if (host && typeof ResizeObserver !== "undefined") {
      new ResizeObserver(debounce(reflow, 150)).observe(host);
    }
    window.addEventListener("resize", debounce(reflow, 150));

    /* theme, mode and direction all change the tokens the charts were built
       from, so the whole set is rebuilt rather than patched */
    let raf;
    new MutationObserver(function (muts) {
      if (muts.some(function (m) {
        return ["data-bs-theme", "data-theme", "dir"].indexOf(m.attributeName) > -1;
      })) {
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

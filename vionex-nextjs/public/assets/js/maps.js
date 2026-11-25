/* ==========================================================================
   Vionex - maps.js
   jsVectorMap engine ONLY. Kept out of charts.js (ApexCharts) and dashboard.js
   (jQuery interactions) for the same reason those two are kept apart: one
   library per module, so a map never inherits chart config or UI state.
   Vanilla JS, so the map configuration stays exactly as authored.

   Load order: jsvectormap.min.js -> jsvectormap-world.js -> maps.js
   ========================================================================== */
(function () {
  "use strict";
  if (typeof window.jsVectorMap === "undefined") return;

  const root = document.documentElement;
  const instances = [];

  /* ===== Shared Map Config ===== */
  /* current design-token snapshot — mirrors readTheme() in charts.js so a map
     tracks the active preset, mode and direction exactly as a chart does */
  function readTheme() {
    const cs = getComputedStyle(root);
    const v = (n, f) => (cs.getPropertyValue(n) || "").trim() || f;
    return {
      brand: v("--cat-brand", "#1ccbe5"),
      blue: v("--cat-blue", "#3b82f6"),
      track: v("--track-bg", "#f2f2f2"),
      border: v("--border-color", "#dbdbff"),
      surface: v("--surface-plain", "#ffffff"),
      title: v("--text-title", "#0d0b1e"),
      dark: root.getAttribute("data-bs-theme") === "dark",
    };
  }

  /* Choropleth builder — one shared ramp so every region map in the project
     shades the same way. `values` is a { ISO2: number } map; regions with no
     value fall back to the neutral track colour. */
  function choroplethOpts(t, values) {
    return {
      map: "world",
      zoomButtons: false,
      zoomOnScroll: false,
      backgroundColor: "transparent",
      regionStyle: {
        initial: {
          fill: t.track,
          stroke: t.surface,
          "stroke-width": 0.5,
        },
        hover: { fill: t.brand, "fill-opacity": 1 },
      },
      series: {
        regions: [
          {
            attribute: "fill",
            scale: [t.border, t.blue],
            normalizeFunction: "polynomial",
            values: values,
          },
        ],
      },
    };
  }

  /* ==========================================================================
     Analytics Dashboard
     ========================================================================== */

  /* ===== Geographic Analytics - share of traffic by country ===== */
  const GEO_SHARE = {
    US: 35, CA: 26, FR: 18, IT: 14, AU: 10, IN: 7,
    GB: 12, DE: 11, ES: 9, BR: 8, JP: 8, CN: 7,
    MX: 6, ZA: 5, NL: 5, SE: 4, AR: 4, EG: 3,
  };

  function geoAnalyticsOpts(t) {
    return choroplethOpts(t, GEO_SHARE);
  }

  /* ===== Map Registry & Initialization =====
     One entry per map: { id: "<mount id>", opts: (t) => options }.
     Sections add their maps here; the engine handles theme / mode rebuilds
     and container reflows for every registered id. */
  const MAPS = [{ id: "geoAnalyticsMap", opts: geoAnalyticsOpts }];

  function build() {
    const t = readTheme();
    while (instances.length) {
      const m = instances.pop();
      try {
        m.destroy();
      } catch (e) {
        /* map mid-teardown — ignore */
      }
    }
    MAPS.forEach((m) => {
      const el = document.getElementById(m.id);
      if (!el) return;
      /* Isolate each mount: a bad option set on one map must not abort the
         rest of the registry (they all share this single build pass). */
      try {
        el.innerHTML = "";
        const opts = m.opts(t);
        opts.selector = el;
        instances.push(new jsVectorMap(opts));
      } catch (e) {
        if (window.console) console.error("Map failed: " + m.id, e);
      }
    });
  }

  /* Lightweight reflow — recompute each map's size from its (now-resized)
     container. Fixes overflow after width changes that don't fire a window
     'resize' (sidebar toggle, layout/container switch). */
  function reflow() {
    instances.forEach((m) => {
      try {
        if (typeof m.updateSize === "function") m.updateSize();
      } catch (e) {
        /* map mid-teardown — ignore */
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
       every registered map. New maps inherit this automatically. */
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

  /* reusable hooks for future maps / manual triggers */
  window.VionexMaps = {
    rebuild: build,
    reflow: reflow,
    instances: instances,
  };
})();

"use client";

import { useEffect } from "react";

/* Loads the theme's original JavaScript (jQuery, Bootstrap, Lucide, ApexCharts,
   dashboard.js, charts.js, ...) once React has hydrated the page, in the exact
   order the HTML page listed them.

   Those scripts were written to sit at the end of <body> in a classic page
   load: they execute while document.readyState is "loading", and then
   DOMContentLoaded and load fire. Here they arrive after both events, so the
   loader replays that timeline:

     1. while the scripts execute, document.readyState reports "loading" and
        DOMContentLoaded / load listeners are queued instead of being lost
     2. every script executes in order, one after another
     3. the queued DOMContentLoaded listeners run in registration order
        (jQuery's ready, Bootstrap, charts.js, maps.js, calendar.js, ...)
     4. the queued window "load" listeners run

   Scripts load after hydration so jQuery/Lucide DOM changes never conflict
   with React hydrating the server-rendered markup. Links are plain <a> tags,
   so every navigation is a full page load, exactly like the HTML theme. */
export default function VendorScripts({ scripts = [], navPage }) {
  useEffect(() => {
    if (window.__vionexBooted) return; /* StrictMode runs effects twice in dev */
    window.__vionexBooted = true;

    if (navPage) document.body.setAttribute("data-nav-page", navPage);

    const domReady = [];
    const winLoad = [];
    const docAdd = document.addEventListener;
    const winAdd = window.addEventListener;

    document.addEventListener = function (type, fn, opts) {
      if (this === document && type === "DOMContentLoaded") return void domReady.push(fn);
      return docAdd.call(this, type, fn, opts);
    };
    window.addEventListener = function (type, fn, opts) {
      if (this === window && type === "load") return void winLoad.push(fn);
      return winAdd.call(this, type, fn, opts);
    };
    Object.defineProperty(document, "readyState", { configurable: true, get: () => "loading" });

    const call = (fn, ev, ctx) => {
      try {
        if (typeof fn === "function") fn.call(ctx, ev);
        else if (fn && typeof fn.handleEvent === "function") fn.handleEvent(ev);
      } catch (err) {
        console.error(err);
      }
    };

    const load = (src) =>
      new Promise((resolve) => {
        const s = document.createElement("script");
        s.src = src;
        s.async = false;
        s.onload = resolve;
        s.onerror = () => {
          console.error("Failed to load " + src);
          resolve();
        };
        document.body.appendChild(s);
      });

    (async () => {
      for (const src of scripts) await load(src);

      /* restore the real DOM APIs */
      delete document.readyState;
      document.addEventListener = docAdd;
      window.addEventListener = winAdd;

      const ready = new Event("DOMContentLoaded");
      domReady.forEach((fn) => call(fn, ready, document));

      const fireLoad = () => {
        const ev = new Event("load");
        winLoad.forEach((fn) => call(fn, ev, window));
      };
      if (document.readyState === "complete") setTimeout(fireLoad, 0);
      else winAdd.call(window, "load", fireLoad);
    })();
  }, [scripts, navPage]);

  return null;
}

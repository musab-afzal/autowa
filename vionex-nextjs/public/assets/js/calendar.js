/* ==========================================================================
   Vionex - calendar.js
   FullCalendar engine ONLY. Kept out of charts.js (ApexCharts), maps.js
   (jsVectorMap) and dashboard.js (jQuery interactions) for the same reason
   those are kept apart: one library per module, so the calendar never
   inherits chart config or UI state.

   The split with dashboard.js is the same one the crypto chart uses — this
   module owns the event STORE and every FullCalendar option; the jQuery layer
   owns the toolbar, the side pane and the dialog, and talks to the calendar
   only through window.VionexCalendar and the CustomEvents dispatched here:

     vionex:calendar:dates   { title, view }        the visible range changed
     vionex:calendar:mini    { title }              the mini navigator moved
     vionex:calendar:slot    { start, end, allDay } an empty slot was picked
     vionex:calendar:event   { id }                 an event was clicked
     vionex:calendar:store   { counts, total }      the store changed

   Vanilla JS, so the calendar configuration stays exactly as authored.
   Load order: fullcalendar.min.js -> calendar.js
   ========================================================================== */
(function () {
  "use strict";
  if (typeof window.FullCalendar === "undefined") return;

  const root = document.documentElement;

  /* ===== Categories =====
     One place names the categories and the hue each one carries. The hue is a
     CSS class rather than a colour value, so an event re-tints itself when the
     customizer switches preset or mode without the calendar re-rendering. */
  const CATEGORY_HUE = {
    work: "cat-violet",
    meeting: "cat-blue",
    personal: "cat-emerald",
    deadline: "cat-rose",
    travel: "cat-amber",
    holiday: "cat-cyan",
  };

  /* ===== The diary =====
     The events are NOT written here. They live in the page, as one <li> per
     event inside [data-cal-events], and this module only reads that list and
     hands it to FullCalendar — the library has no way to take its events from
     markup itself, so this is the bridge between the two.

     Each <li> gives its day as an OFFSET from the Monday of the week the page
     is opened in, so the month on screen is always populated however long after
     the build the template is opened; resolving an offset to a date is a
     calculation, not content. A live build swaps the read for a fetch and posts
     save()/remove() back. */
  function pad(n) {
    return (n < 10 ? "0" : "") + n;
  }

  /* local calendar date — never toISOString(), which converts to UTC and can
     land an early-morning event on the previous day */
  function ymd(date) {
    return date.getFullYear() + "-" + pad(date.getMonth() + 1) + "-" + pad(date.getDate());
  }

  const TODAY = new Date();
  TODAY.setHours(0, 0, 0, 0);
  /* Monday of the current week, as an offset in days from today */
  const MON = -((TODAY.getDay() + 6) % 7);

  function day(offset) {
    const d = new Date(TODAY);
    d.setDate(d.getDate() + offset);
    return ymd(d);
  }

  function at(offset, time) {
    return day(offset) + "T" + time + ":00";
  }

  /* One <li> from [data-cal-events] -> one store record.

     `end` follows FullCalendar's own convention throughout — exclusive for an
     all-day span, so a one-day event carries no end and a three-day one ends
     on the fourth morning. The dialog converts to the inclusive date a person
     expects to type; nothing else has to. */
  function fromMarkup(li) {
    const offset = MON + (parseInt(li.getAttribute("data-cal-day"), 10) || 0);
    const from = li.getAttribute("data-cal-from");
    const to = li.getAttribute("data-cal-to");
    const toDay = li.getAttribute("data-cal-to-day");
    const endDay = li.getAttribute("data-cal-end-day");
    const allDay = li.hasAttribute("data-cal-all-day");

    const rec = {
      title: li.getAttribute("data-cal-title") || "",
      category: li.getAttribute("data-cal-category") || "work",
      location: li.getAttribute("data-cal-location") || "",
      description: li.getAttribute("data-cal-note") || "",
      allDay: allDay,
    };

    if (allDay || !from) {
      rec.start = day(offset);
      /* the markup names the last day; the store wants the morning after */
      if (endDay !== null) rec.end = day(MON + parseInt(endDay, 10));
    } else {
      rec.start = at(offset, from);
      if (to) {
        rec.end = at(toDay !== null ? MON + parseInt(toDay, 10) : offset, to);
      }
    }
    return rec;
  }

  function readMarkup() {
    const host = document.querySelector("[data-cal-events]");
    if (!host) return [];
    return Array.prototype.map.call(host.querySelectorAll("li"), fromMarkup);
  }

  /* ===== Store ===== */
  let seq = 0;
  const store = [];
  const hidden = {};
  let calendar = null;
  let mini = null;

  function record(rec) {
    return {
      id: rec.id || "ev-" + ++seq,
      title: rec.title,
      start: rec.start,
      end: rec.end || null,
      allDay: !!rec.allDay,
      category: rec.category || "work",
      location: rec.location || "",
      description: rec.description || "",
    };
  }

  function loadStore() {
    readMarkup().forEach(function (rec) {
      store.push(record(rec));
    });
  }

  function byId(id) {
    for (let i = 0; i < store.length; i++) {
      if (store[i].id === id) return store[i];
    }
    return null;
  }

  function emit(name, detail) {
    document.dispatchEvent(new CustomEvent("vionex:calendar:" + name, { detail: detail }));
  }

  function emitStore() {
    const counts = {};
    store.forEach(function (rec) {
      counts[rec.category] = (counts[rec.category] || 0) + 1;
    });
    /* `hidden` travels with the counts so the filter controls can follow a
       category the module turned back on by itself — saving into a filtered-out
       category would otherwise look like the save failed */
    emit("store", { counts: counts, total: store.length, hidden: hidden });
  }

  /* ===== Calendar config ===== */

  function toEvent(rec) {
    return {
      id: rec.id,
      title: rec.title,
      start: rec.start,
      end: rec.end || null,
      allDay: rec.allDay,
      classNames: [CATEGORY_HUE[rec.category] || "cat-brand"],
      extendedProps: {
        category: rec.category,
        location: rec.location,
        description: rec.description,
      },
    };
  }

  /* The store is the single source of truth: every change re-feeds the
     calendar from it, which is also what applies the category filter. Drag and
     resize are the exception — FullCalendar has already moved the event there,
     so those write back to the store and leave the rendering alone. */
  function sync() {
    if (!calendar) return;
    calendar.removeAllEvents();
    store.forEach(function (rec) {
      if (hidden[rec.category]) return;
      calendar.addEvent(toEvent(rec));
    });
    emitStore();
  }

  /* FullCalendar asks for a NODE here, so the empty state is written in the
     page as <template data-cal-empty> and this only stamps a copy of it. */
  function emptyState() {
    const tpl = document.querySelector("[data-cal-empty]");
    if (!tpl) return { domNodes: [] };
    const node = tpl.content.firstElementChild.cloneNode(true);
    /* the copy arrives after Lucide's first pass, so draw its glyph */
    if (window.lucide && window.lucide.createIcons) {
      window.setTimeout(function () {
        window.lucide.createIcons();
      }, 0);
    }
    return { domNodes: [node] };
  }

  function direction() {
    return root.getAttribute("dir") === "rtl" ? "rtl" : "ltr";
  }

  /* 24-hour throughout, so a chip in the grid is stamped the way the dialog
     and the rest of the project stamp times. */
  const HM = { hour: "2-digit", minute: "2-digit", hour12: false };

  function mainOptions() {
    return {
      /* the toolbar is ours — Bootstrap controls in the card header drive the
         calendar through the API below, so none of FullCalendar's own button
         chrome has to be restyled */
      headerToolbar: false,
      initialView: window.innerWidth < 576 ? "listMonth" : "dayGridMonth",
      direction: direction(),
      height: "100%",
      expandRows: true,
      firstDay: 1,
      nowIndicator: true,
      dayMaxEvents: true,
      navLinks: true,
      /* a month that fits in five weeks gets five taller rows rather than a
         sixth empty one */
      fixedWeekCount: false,
      /* one chip shape everywhere, rather than FullCalendar's default mix of a
         dot for a timed event and a block for an all-day one */
      eventDisplay: "block",
      editable: true,
      selectable: true,
      selectMirror: true,
      eventStartEditable: true,
      eventDurationEditable: true,
      slotMinTime: "07:00:00",
      slotMaxTime: "22:00:00",
      scrollTime: "08:00:00",
      slotDuration: "00:30:00",
      slotLabelFormat: HM,
      eventTimeFormat: HM,
      dayHeaderFormat: { weekday: "short" },
      noEventsContent: emptyState,
      views: {
        listMonth: {
          listDayFormat: { weekday: "long", day: "numeric", month: "long" },
          /* the weekday is already in the heading on the left */
          listDaySideFormat: false,
        },
        timeGridDay: { dayHeaderFormat: { weekday: "long", day: "numeric", month: "long" } },
      },

      /* A truncated chip still has to say what it is, and the grid gives no
         other room for the location. */
      eventDidMount: function (arg) {
        const where = arg.event.extendedProps.location;
        arg.el.setAttribute("title", arg.event.title + (where ? " · " + where : ""));
      },

      datesSet: function (arg) {
        emit("dates", { title: arg.view.title, view: arg.view.type });
        /* keep the navigator on the month being looked at */
        if (mini) mini.gotoDate(arg.view.currentStart);
      },

      select: function (arg) {
        emit("slot", { start: arg.startStr, end: arg.endStr, allDay: arg.allDay });
        calendar.unselect();
      },

      eventClick: function (arg) {
        arg.jsEvent.preventDefault();
        emit("event", { id: arg.event.id });
      },

      eventDrop: function (arg) {
        write(arg.event);
      },

      eventResize: function (arg) {
        write(arg.event);
      },
    };
  }

  /* FullCalendar moved the event; copy where it landed back into the store */
  function write(ev) {
    const rec = byId(ev.id);
    if (!rec) return;
    rec.start = ev.startStr;
    rec.end = ev.endStr || null;
    rec.allDay = ev.allDay;
    emitStore();
  }

  function miniOptions() {
    return {
      headerToolbar: false,
      initialView: "dayGridMonth",
      direction: direction(),
      height: "auto",
      firstDay: 1,
      fixedWeekCount: false,
      showNonCurrentDates: true,
      dayHeaderFormat: { weekday: "narrow" },
      navLinks: false,
      dateClick: function (arg) {
        if (calendar) calendar.gotoDate(arg.date);
      },
      datesSet: function (arg) {
        emit("mini", { title: arg.view.title });
      },
    };
  }

  /* ===== Public API =====
     Everything the jQuery layer is allowed to ask the calendar to do. */

  function go(dir) {
    if (!calendar) return;
    if (dir === "next") calendar.next();
    else if (dir === "prev") calendar.prev();
    else calendar.today();
  }

  function setView(name) {
    if (calendar) calendar.changeView(name);
  }

  function gotoDate(date) {
    if (calendar) calendar.gotoDate(date);
  }

  function moveMini(dir) {
    if (!mini) return;
    if (dir === "next") mini.next();
    else mini.prev();
  }

  function get(id) {
    const rec = byId(id);
    return rec ? Object.assign({}, rec) : null;
  }

  function save(rec) {
    const prev = rec.id ? byId(rec.id) : null;
    const next = record(rec);
    if (prev) store.splice(store.indexOf(prev), 1, next);
    else store.push(next);
    /* saving into a category that is filtered out would look like the save
       failed, so bring that category back into view */
    if (hidden[next.category]) setCategory(next.category, true);
    else sync();
    if (calendar) calendar.gotoDate(next.start);
    return next;
  }

  function remove(id) {
    const rec = byId(id);
    if (!rec) return;
    store.splice(store.indexOf(rec), 1);
    sync();
  }

  function setCategory(key, on) {
    hidden[key] = !on;
    sync();
  }

  /* Colours, radii and mode come from CSS variables, so a preset or light/dark
     switch needs no rebuild. Direction does — FullCalendar lays the grid out
     once — and it is the one option that can be swapped in place. */
  function setDirection() {
    const dir = direction();
    if (calendar) calendar.setOption("direction", dir);
    if (mini) mini.setOption("direction", dir);
  }

  function reflow() {
    if (calendar) calendar.updateSize();
    if (mini) mini.updateSize();
  }

  /* Re-announce the current state.
     jQuery resolves its ready queue in a MICROTASK, so every plain
     DOMContentLoaded listener — build() below included — has already run by the
     time dashboard.js binds its listeners, and the opening datesSet/store
     events would be dispatched into nothing. The UI layer therefore pulls the
     state once it is listening, which also makes the handshake work whichever
     of the two files happens to run first. */
  function publish() {
    if (calendar) emit("dates", { title: calendar.view.title, view: calendar.view.type });
    if (mini) emit("mini", { title: mini.view.title });
    emitStore();
  }

  function debounce(fn, wait) {
    let id;
    return function () {
      clearTimeout(id);
      id = setTimeout(fn, wait);
    };
  }

  function build() {
    const mount = document.querySelector("[data-cal-mount]");
    if (!mount) return;

    /* the diary is in the markup, so it can only be read once the DOM exists */
    loadStore();

    calendar = new FullCalendar.Calendar(mount, mainOptions());
    calendar.render();

    const miniMount = document.querySelector("[data-cal-mini]");
    if (miniMount) {
      mini = new FullCalendar.Calendar(miniMount, miniOptions());
      mini.render();
      mini.gotoDate(calendar.getDate());
    }

    sync();

    /* Same safeguard as maps.js, but pointed at the MOUNTS rather than at
       .app-content. A calendar has to react to height as well as width: its
       rows only re-expand into a taller container when updateSize() runs, and
       the container gets taller whenever the toolbar above it stops wrapping —
       a change .app-content never sees. Watching the mount itself covers that,
       the sidebar toggle, the layout presets and the window alike. Resizing is
       safe to observe here because updateSize() only changes heights INSIDE the
       mount; the mount's own box is set by the flex row around it. */
    if (typeof ResizeObserver !== "undefined") {
      const watch = new ResizeObserver(debounce(reflow, 150));
      watch.observe(mount);
      if (miniMount) watch.observe(miniMount);
    }
  }

  document.addEventListener("DOMContentLoaded", build);

  /* Web fonts land after the first layout and can change the toolbar's height
     by a line, which leaves the grid short of the bottom of its card until
     something else resizes it. One reflow once everything has loaded settles
     it, rather than leaving the opening view a few rows shy. */
  window.addEventListener("load", reflow);

  /* re-lay the grid when the customizer flips direction */
  new MutationObserver(function (muts) {
    if (muts.some(function (m) { return m.attributeName === "dir"; })) setDirection();
  }).observe(root, { attributes: true });

  window.VionexCalendar = {
    go: go,
    setView: setView,
    gotoDate: gotoDate,
    moveMini: moveMini,
    get: get,
    save: save,
    remove: remove,
    setCategory: setCategory,
    publish: publish,
    reflow: reflow,
    instance: function () {
      return calendar;
    },
  };
})();

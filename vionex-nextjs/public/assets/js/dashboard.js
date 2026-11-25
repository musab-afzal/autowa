/* ==========================================================================
   Vionex - dashboard.js
   Dashboard UI / interaction layer, written entirely with jQuery.

   Scope: theme customizer, sidebar + icon rail, flyout menus, top navigation,
   notifications, segmented toggles, view switches, dropdowns, modals, filters,
   bulk selection, drag-to-scroll rails and the AJAX partial loader.

   NOT in this file: ApexCharts. Every chart lives in charts.js and stays
   vanilla JS so its configuration is untouched. The only bridge between the two
   is window.VionexUI.enableDragScroll (consumed by the chart-scroll wrapper).

   Load order: jquery.min.js -> bootstrap.bundle.min.js -> lucide.min.js
               -> apexcharts.min.js -> dashboard.js -> charts.js
   ========================================================================== */
(function ($) {
  "use strict";

  if (!$) {
    if (window.console)
      console.error("Vionex: jQuery is required by dashboard.js");
    return;
  }

  var $root = $(document.documentElement);
  var $body = $("body");
  var $doc = $(document);
  var $win = $(window);

  /* ==========================================================================
     Shared helpers
     ========================================================================== */

  /* Lucide renders into [data-lucide] placeholders; re-run after any DOM write
     that introduces new ones. */
  function drawIcons() {
    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    }
  }

  /* Coalesce resize / transition bursts into a single call. */
  function debounce(fn, wait) {
    var id;
    return function () {
      var ctx = this;
      var args = arguments;
      clearTimeout(id);
      id = setTimeout(function () {
        fn.apply(ctx, args);
      }, wait);
    };
  }

  function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function isDesktop() {
    return window.matchMedia("(min-width: 992px)").matches;
  }

  function isMobile() {
    return window.matchMedia("(max-width: 991.98px)").matches;
  }

  function isRtl() {
    return $root.attr("dir") === "rtl";
  }

  /* The nearest ancestor that is a real vertical scroller - the "pane" a
     floating element belongs to and should stay inside. Deliberately narrow:

       - a merely CLIPPED box (an overflow-hidden card, a .table-responsive
         that only scrolls sideways) is NOT a pane. Escaping those is the whole
         point of the fixed strategy, and a row menu is expected to hang below
         its table.
       - the page-level scrollers (.app-content, body) are not panes either: a
         toolbar or header menu may use the whole viewport.

     Resolved on each open rather than at init, since both the overflow and the
     pane's height follow the content and the viewport. */
  function scrollPaneFor(el) {
    var node = el && el.parentElement;
    while (node && node !== document.body) {
      if (node.classList.contains("app-content")) return null;
      var overflowY = window.getComputedStyle(node).overflowY;
      if (
        (overflowY === "auto" || overflowY === "scroll") &&
        node.scrollHeight > node.clientHeight + 1
      ) {
        return node;
      }
      node = node.parentElement;
    }
    return null;
  }

  /* An ancestor with a transform becomes the containing block for a
     position:fixed child - which silently puts back the clipping that the
     fixed strategy exists to escape. .hover-lift is exactly that: the pointer
     has to cross the card to reach its menu button, so the card is ALWAYS
     transformed at the moment its own menu opens, and the menu is cut off by
     the pane it is drawn in. (Note a transform counts even at identity, so a
     card resting mid-transition breaks it too.)

     Collected here are the lift-sized transforms only - a pure translation of
     a few pixels. A marquee or carousel track translated by half its width is
     positioning real content and is left alone. */
  function liftedAncestors(toggle, stopAt) {
    var lifted = [];
    var node = toggle.parentElement;
    while (node && node !== stopAt && node !== document.body) {
      var matrix = window.getComputedStyle(node).transform;
      var parts =
        matrix && matrix !== "none" ? matrix.match(/-?[\d.]+/g) : null;
      if (
        parts &&
        parts.length === 6 &&
        Number(parts[0]) === 1 &&
        Number(parts[1]) === 0 &&
        Number(parts[2]) === 0 &&
        Number(parts[3]) === 1 &&
        Math.abs(Number(parts[4])) <= 12 &&
        Math.abs(Number(parts[5])) <= 12
      ) {
        lifted.push(node);
      }
      node = node.parentElement;
    }
    return $(lifted);
  }

  /* Both jobs run on show, before Popper measures: flatten the ancestors that
     would capture the menu, then cap it to its pane (.is-capped supplies the
     scrolling; only the height is measured here). */
  function initFixedMenu(toggle) {
    var $toggle = $(toggle);
    if ($toggle.data("ddFixed")) return;
    $toggle
      .data("ddFixed", true)
      .on("show.bs.dropdown", function () {
        var pane = scrollPaneFor(toggle);
        var $lifted = liftedAncestors(toggle, pane);
        $lifted.addClass("dd-flat");
        $toggle.data("ddFlat", $lifted);

        var menu = toggle.parentElement
          ? toggle.parentElement.querySelector(".dropdown-menu")
          : null;
        if (!menu) return;
        if (!pane) {
          menu.classList.remove("is-capped");
          return;
        }
        menu.style.setProperty("--dd-max-h", pane.clientHeight - 16 + "px");
        menu.classList.add("is-capped", "scrollbar-thin");
      })
      .on("hide.bs.dropdown", function () {
        var $lifted = $toggle.data("ddFlat");
        if ($lifted) $lifted.removeClass("dd-flat");
        $toggle.removeData("ddFlat");
      });
  }

  /* ==========================================================================
     Drag-to-scroll Rails - reusable horizontal pan
     ========================================================================== */
  /* Click-and-drag horizontal panning for every .scroll-row rail and for the
     chart-scroll wrappers charts.js creates (mouse only; touch/trackpad keep
     their native momentum scrolling). Toggles .is-scrollable so the grab cursor
     only shows when there's overflow, and swallows the click that ends a real
     drag so cards aren't accidentally activated. RTL-safe (works on relative
     scrollLeft deltas). Idempotent via a per-element guard. */
  function enableDragScroll(el) {
    var $el = $(el);
    if (!$el.length || $el.data("dragScroll")) return;
    $el.data("dragScroll", true);

    var node = $el[0];
    var down = false;
    var moved = false;
    var startX = 0;
    var startLeft = 0;

    function canScroll() {
      return node.scrollWidth - node.clientWidth > 1;
    }
    function sync() {
      $el.toggleClass("is-scrollable", canScroll());
    }
    sync();
    if (typeof ResizeObserver !== "undefined") {
      new ResizeObserver(sync).observe(node);
    }

    $el.on("pointerdown", function (e) {
      var ev = e.originalEvent;
      if (ev.pointerType !== "mouse" || ev.button !== 0 || !canScroll()) return;
      down = true;
      moved = false;
      startX = ev.clientX;
      startLeft = node.scrollLeft;
      node.setPointerCapture(ev.pointerId);
      $el.addClass("is-dragging");
      e.preventDefault();
    });

    $el.on("pointermove", function (e) {
      if (!down) return;
      var dx = e.originalEvent.clientX - startX;
      if (Math.abs(dx) > 3) moved = true;
      node.scrollLeft = startLeft - dx;
    });

    $el.on("pointerup pointercancel", function (e) {
      if (!down) return;
      down = false;
      $el.removeClass("is-dragging");
      var id = e.originalEvent.pointerId;
      if (node.hasPointerCapture && node.hasPointerCapture(id)) {
        node.releasePointerCapture(id);
      }
    });

    /* capture phase: cancel the synthetic click fired after a drag gesture */
    node.addEventListener(
      "click",
      function (e) {
        if (moved) {
          e.preventDefault();
          e.stopPropagation();
          moved = false;
        }
      },
      true,
    );
  }

  /* ==========================================================================
     Rail Navigation - reusable prev / next controls for a .scroll-row
     ========================================================================== */
  /* Opt in by wrapping a rail in [data-scroll-rail] and placing buttons that
     carry [data-scroll-nav="prev"|"next"] alongside it. Each click advances the
     rail by one item, measured from the first child plus the flex gap. A button
     is disabled at its end of the rail, which .scroll-nav hides, so a rail whose
     items already fit shows no controls at all. Complements (never replaces)
     drag and native scrolling. RTL-safe and honours prefers-reduced-motion.
     Idempotent via a per-element guard. */
  function initRailNav($wrap) {
    if (!$wrap.length || $wrap.data("railNavBound")) return;
    $wrap.data("railNavBound", true);

    var $rail = $wrap.find(".scroll-row").first();
    var $btns = $wrap.find("[data-scroll-nav]");
    if (!$rail.length || !$btns.length) return;

    var node = $rail[0];

    /* one item plus the gap; falls back to most of the visible width */
    function step() {
      var $first = $rail.children().first();
      if (!$first.length) return Math.round(node.clientWidth * 0.8);
      return Math.round(
        $first.outerWidth() + (parseFloat($rail.css("column-gap")) || 0),
      );
    }

    /* scrollLeft runs negative in RTL, so compare distance travelled instead */
    function sync() {
      var pos = Math.abs(node.scrollLeft);
      var max = Math.max(0, node.scrollWidth - node.clientWidth);
      var atEnd = max < 1 || pos >= max - 1;
      $btns.each(function () {
        var isNext = $(this).data("scrollNav") === "next";
        this.disabled = isNext ? atEnd : max < 1 || pos <= 1;
      });
      /* nothing left to fade into once the rail bottoms out */
      $wrap.toggleClass("is-rail-end", atEnd);
    }

    $btns.on("click", function () {
      var dir = $(this).data("scrollNav") === "next" ? 1 : -1;
      if (isRtl()) dir = -dir;
      var left = node.scrollLeft + dir * step();
      if (node.scrollTo) {
        node.scrollTo({
          left: left,
          behavior: prefersReducedMotion() ? "auto" : "smooth",
        });
      } else {
        node.scrollLeft = left;
      }
    });

    $rail.on("scroll", debounce(sync, 80));
    if (typeof ResizeObserver !== "undefined") {
      new ResizeObserver(debounce(sync, 80)).observe(node);
    }
    sync();
  }

  /* ==========================================================================
     Marquee Rails - continuous auto-scrolling strip
     ========================================================================== */
  /* Opt in with .marquee on the clipping viewport and .marquee-track on the flex
     row inside it (styles in dashboard.css). The MARKUP carries the items twice
     — the keyframes travel -50%, so a seamless loop needs exactly two copies,
     and the second one is written into the HTML with aria-hidden="true" so
     assistive tech still reads the list once. This module never writes items of
     its own: it only measures the track so the duration lands at the same
     px/sec however many items a rail carries, and holds the animation while the
     rail is being read. Idempotent via a per-element guard; re-measures when
     the content resizes. */
  var MARQUEE_SPEED = 55; /* px travelled per second */

  function initMarquee($rail) {
    if (!$rail.length || $rail.data("marqueeBound")) return;
    var $track = $rail.find(".marquee-track").first();
    if (!$track.length) return;
    if (!$track.children().length) return;
    $rail.data("marqueeBound", true);

    /* Hold the rail while it is being read — pointer over it, or anything
       inside it focused, so keyboard users are not chasing a moving target.
       Class-driven rather than a :hover rule so the pause has one owner. */
    $rail.on("mouseenter focusin", function () {
      $rail.addClass("is-paused");
    });
    $rail.on("mouseleave focusout", function () {
      $rail.removeClass("is-paused");
    });

    function sync() {
      /* one copy's width — the distance the CSS keyframes travel. The markup
         holds two copies, so that is half the measured track. */
      var span = $track[0].scrollWidth / 2;
      if (!span) return;
      $track[0].style.setProperty(
        "--marquee-duration",
        (span / MARQUEE_SPEED).toFixed(2) + "s",
      );
    }

    if (typeof ResizeObserver !== "undefined") {
      new ResizeObserver(debounce(sync, 120)).observe($track[0]);
    } else {
      $win.on("resize", debounce(sync, 120));
    }
    sync();
  }

  /* ==========================================================================
     Theme Customizer - mode / direction / colour / layout / radius
     ========================================================================== */

  /* key -> the HTML attribute it drives + default value */
  var OPTIONS = {
    mode: { attr: "data-bs-theme", def: "light" },
    dir: { attr: "dir", def: "ltr" },
    theme: { attr: "data-theme", def: "cyan" },
    layout: { attr: "data-layout", def: "sidebar" },
    sidebar: { attr: "data-sidebar", def: "default" },
    container: { attr: "data-container", def: "full" },
    radius: { attr: "data-radius", def: "md" },
  };
  function lsKey(k) {
    return "vionex-" + k;
  }

  /* The authoritative restore happens in the inline <head> script on every page,
     BEFORE the first paint. Kept here as an idempotent safety net: it re-applies
     the same values (a no-op when the head script has run) and still works if
     that snippet is ever missing. */
  $.each(OPTIONS, function (key, opt) {
    var val = localStorage.getItem(lsKey(key)) || opt.def;
    if ($root.attr(opt.attr) !== val) $root.attr(opt.attr, val);
  });

  /* Swap the Bootstrap build so its directional utilities flip. */
  var BS_CSS = {
    ltr: "/assets/css/bootstrap.min.css",
    rtl: "/assets/css/bootstrap.rtl.min.css",
  };
  function setBootstrapStylesheet(dir) {
    var $link = $("#bootstrap-css");
    if (!$link.length) return;
    var href = BS_CSS[dir === "rtl" ? "rtl" : "ltr"];
    if (($link.attr("href") || "").slice(-href.length) !== href) {
      $link.attr("href", href);
    }
  }
  setBootstrapStylesheet($root.attr("dir"));

  /* Apply + persist one option, then refresh active states. */
  function applyOption(key, value) {
    var opt = OPTIONS[key];
    if (!opt) return;
    $root.attr(opt.attr, value);
    localStorage.setItem(lsKey(key), value);
    if (key === "dir") setBootstrapStylesheet(value);
    syncControls();
    /* the top nav only has a width once a horizontal/hybrid layout is applied */
    if (key === "layout" || key === "dir") revealActiveTopnavLink(false);
  }

  /* Reflect current state onto every customizer control. */
  function syncControls() {
    $.each(OPTIONS, function (key, opt) {
      var current = $root.attr(opt.attr) || opt.def;
      $('[data-cz="' + key + '"]').each(function () {
        var $el = $(this);
        /* reusable selected-state class shared by opt-tiles + swatches */
        var selected = $el.attr("data-value") === current;
        $el.toggleClass("active-tile", selected);
        /* expose the same state to assistive tech (toggle buttons) */
        if ($el.is("[aria-pressed]")) {
          $el.attr("aria-pressed", selected ? "true" : "false");
        }
      });
    });
    /* header theme icon mirrors current mode */
    var isDark = $root.attr("data-bs-theme") === "dark";
    $("[data-mode-icon]").attr("data-lucide", isDark ? "sun" : "moon");
    drawIcons();
  }

  /* ==========================================================================
     Sidebar - icon rail categories, collapse, mobile drawer
     ========================================================================== */

  /* Icon rail: switch the visible Level-2 sidebar menu. */
  function selectCategory(cat) {
    $("[data-cat]").each(function () {
      $(this).toggleClass("active", $(this).attr("data-cat") === cat);
    });
    $("[data-menu]").each(function () {
      $(this).toggleClass("is-active", $(this).attr("data-menu") === cat);
    });
    syncTopnav(cat);
  }

  /* The file being served - or, when the document declares [data-nav-page] on
     <html> / <body>, the sidebar entry it wants to be filed under. A detail page
     that has no sidebar link of its own (a preview, a record view) would
     otherwise leave the nav on whichever category loaded first; one attribute
     puts the highlight where the reader expects it, with no per-page script and
     no edit to the shared sidebar markup. */
  function currentPage() {
    var declared = $root.attr("data-nav-page") || $body.attr("data-nav-page");
    if (declared) return (declared.split("/").pop() || "").toLowerCase();
    /* Next.js routes: "/" is the index page */
    return (window.location.pathname.split("/").pop() || "index").toLowerCase();
  }

  function hrefPage($a) {
    var href = ($a.attr("href") || "").split(/[?#]/)[0];
    /* Next.js routes: "/" is the index page */
    if (href === "/") return "index";
    return (href.split("/").pop() || "").toLowerCase();
  }

  /* Highlight the sidebar link for the page currently open, and reveal the rail
     category that contains it. Filename-based so it stays correct on every page
     without hard-coding an active item per file.

     The flyout carries its own copy of every menu (see .sidebar-flyout in the
     markup), so its links are highlighted too — but the CATEGORY is read from
     the sidebar panel alone, which is the only place a menu declares one. */
  function highlightActiveNav() {
    var page = currentPage();
    if (!page) return;
    var $match = $();
    $(
      ".app-sidebar .sidebar-nav .sidebar-link, .sidebar-flyout .sidebar-link",
    ).each(function () {
      var $link = $(this);
      var target = hrefPage($link);
      var isActive = !!target && target !== "#" && target === page;
      $link.toggleClass("active", isActive);
      if (isActive && $link.closest(".app-sidebar").length) $match = $link;
    });
    /* if the active link lives in a collapsible group, reveal it and flag its parent */
    var $submenu = $match.closest(".sidebar-submenu");
    if ($submenu.length) {
      $submenu.addClass("show");
      $('[data-bs-target="#' + $submenu.attr("id") + '"]')
        .addClass("menu-open")
        .removeClass("collapsed")
        .attr("aria-expanded", "true");
    }
    /* switch the rail/menu to the group holding the active link */
    var $group = $match.closest(".sidebar-nav");
    if ($group.length) selectCategory($group.attr("data-menu"));
  }

  /* Sidebar collapse (desktop) / drawer (mobile). */
  function toggleSidebar() {
    if (isMobile()) $body.toggleClass("sidebar-open");
    else $body.toggleClass("sidebar-collapsed");
  }

  /* ==========================================================================
     Top Navigation - horizontal / hybrid layouts
     ========================================================================== */

  /* All visual styling comes from reusable utilities (no .app-topnav a layout CSS) */
  var TOPNAV_PEEK = 56;

  /* the group the rail has revealed — the only one that has a width to measure */
  function activeTopnavGroup($topnav) {
    return $topnav.find("[data-topnav-menu]").not(".d-none").first();
  }

  /* Retag which top-nav link is the current page (class flip only, so the
     .transition-base on each link animates the highlight instead of snapping). */
  function syncTopnavActive($topnav) {
    var page = currentPage();
    $topnav.find("a").each(function () {
      var $a = $(this);
      var target = hrefPage($a);
      $a.toggleClass("active", !!target && target !== "#" && target === page);
    });
    revealActiveTopnavLink(false);
  }

  /* Keep the current top-nav link fully in view. The bar scrolls horizontally
     with a hidden scrollbar, so a link near either end can sit outside the
     visible strip. Nudge the container by the smallest amount that brings the
     link inside, plus a peek of the neighbouring item. */
  function revealTopnavLink($link, smooth) {
    if (!$link || !$link.length) return;
    var $topnav = $link.closest(".app-topnav");
    /* no width in sidebar layout (display:none), and nothing to do if it fits */
    if (!$topnav.length || !$topnav[0].clientWidth) return;
    if ($topnav[0].scrollWidth <= $topnav[0].clientWidth) return;

    var bar = $topnav[0].getBoundingClientRect();
    var item = $link[0].getBoundingClientRect();
    /* never peek so far that the link itself gets pushed back out */
    var peek = Math.max(0, Math.min(TOPNAV_PEEK, (bar.width - item.width) / 2));
    var delta = 0;
    if (item.right + peek > bar.right) delta = item.right + peek - bar.right;
    else if (item.left - peek < bar.left) delta = item.left - peek - bar.left;
    if (!delta) return;

    $topnav[0].scrollBy({
      left: delta,
      behavior: smooth && !prefersReducedMotion() ? "smooth" : "auto",
    });
  }

  /* deferred a frame so measuring happens after the links/icons are laid out */
  function revealActiveTopnavLink(smooth) {
    var $topnav = $(".app-topnav").first();
    if (!$topnav.length) return;
    var $link = activeTopnavGroup($topnav).find("a.active").first();
    if ($link.length) {
      requestAnimationFrame(function () {
        revealTopnavLink($link, smooth);
      });
    }
  }

  /* Reveal the Level-2 menu the icon rail selected, so the rail drives
     navigation identically in sidebar / horizontal / hybrid layouts.

     Every category's links are written in the MARKUP as its own
     [data-topnav-menu] group; this only reveals one group and retires the rest
     with .d-none. Nothing is cloned out of the sidebar and no <a> is built, so
     the bar needs no lucide re-scan and cannot flicker on the repeat passes
     (syncTopnav runs up to 3x per load). */
  function syncTopnav(cat) {
    var $topnav = $(".app-topnav").first();
    if (!$topnav.length) return;
    var $groups = $topnav.find("[data-topnav-menu]");
    if (!$groups.length) return;

    /* already showing this category -> only the active flag can have changed */
    if ($topnav.attr("data-menu") !== cat) {
      $groups.each(function () {
        $(this).toggleClass("d-none", $(this).attr("data-topnav-menu") !== cat);
      });
      $topnav.attr("data-menu", cat);
    }
    syncTopnavActive($topnav);
  }

  /* ==========================================================================
     Sidebar Flyout - collapsed-rail hover / focus menus
     ========================================================================== */
  /* When the sidebar is collapsed to the icon rail, hovering (or keyboard-
     focusing) a rail category button reveals a flyout with that category's full
     menu. Every menu is written in the MARKUP as its own [data-flyout-menu]
     group inside .sidebar-flyout; this module only reveals the matching group,
     places the panel and runs the keyboard walk. Desktop only. */
  function initSidebarFlyout() {
    var $sidebar = $(".app-sidebar").first();
    var $flyout = $(".sidebar-flyout").first();
    if (!$sidebar.length || !$flyout.length) return;

    var $openBtn = null;
    var closeTimer = null;
    var GAP = 8;
    var MARGIN = 8;

    /* The flyout is the ONLY navigation whenever the level-2 panel is off
       screen: the manual collapse (panel displayed but at width 0) AND the
       customizer's icon-only / compact / horizontal modes, which hide it from
       CSS. Read the panel's own visibility rather than re-listing those modes,
       so this stays true to whatever the stylesheet decides. */
    var $panel = $sidebar.find(".sidebar-panel").first();
    function isCollapsed() {
      return (
        isDesktop() &&
        ($body.hasClass("sidebar-collapsed") ||
          !$panel.length ||
          $panel.css("display") === "none")
      );
    }

    /* Reveal the category's menu and retire the rest. The markup already
       carries every group with its submenus expanded, so nothing is built. */
    function reveal(cat) {
      var $groups = $flyout.find("[data-flyout-menu]");
      var $wanted = $groups.filter('[data-flyout-menu="' + cat + '"]');
      if (!$wanted.length) return false;
      $groups.not($wanted).addClass("d-none");
      $wanted.removeClass("d-none");
      return true;
    }

    /* only the revealed group is walkable — the rest are display:none */
    function items() {
      return $flyout
        .find("[data-flyout-menu]")
        .not(".d-none")
        .find(".sidebar-link");
    }

    /* Place beside the rail, flipping / clamping so it never leaves the viewport. */
    function position($btn) {
      var r = $btn[0].getBoundingClientRect();
      var fw = $flyout[0].offsetWidth;
      var fh = $flyout[0].offsetHeight;
      var vw = window.innerWidth;
      var vh = window.innerHeight;
      var rtl = isRtl();
      var left = rtl ? r.left - GAP - fw : r.right + GAP;
      if (!rtl && left + fw > vw - MARGIN)
        left = r.left - GAP - fw; /* flip left */
      if (rtl && left < MARGIN) left = r.right + GAP; /* flip right */
      left = Math.max(MARGIN, Math.min(left, vw - fw - MARGIN));
      var top = r.top;
      if (top + fh > vh - MARGIN) top = vh - fh - MARGIN;
      top = Math.max(MARGIN, top);
      $flyout.css({ left: left + "px", top: top + "px" });
    }

    function open($btn) {
      var cat = $btn.attr("data-cat");
      if (!cat) return;
      if (!reveal(cat)) return;
      clearTimeout(closeTimer);
      $openBtn = $btn;
      /* measure while hidden (visibility keeps box dims) then reveal */
      requestAnimationFrame(function () {
        position($btn);
        $flyout.addClass("is-open");
      });
    }

    function close() {
      $flyout.removeClass("is-open");
      $openBtn = null;
    }
    function scheduleClose() {
      clearTimeout(closeTimer);
      closeTimer = setTimeout(close, 150);
    }
    function isOpen() {
      return $flyout.hasClass("is-open");
    }

    $sidebar
      .on("mouseenter focus", ".rail-btn[data-cat]", function () {
        if (isCollapsed()) open($(this));
      })
      .on("mouseleave", ".rail-btn[data-cat]", scheduleClose)
      .on("keydown", ".rail-btn[data-cat]", function (e) {
        if (!isCollapsed()) return;
        var $btn = $(this);
        var into = isRtl() ? "ArrowLeft" : "ArrowRight";
        if (e.key === into || e.key === "ArrowDown") {
          if (!$openBtn || $openBtn[0] !== $btn[0]) open($btn);
          var $first = items().first();
          if ($first.length) {
            e.preventDefault();
            requestAnimationFrame(function () {
              $first.trigger("focus");
            });
          }
        } else if (e.key === "Escape") {
          close();
        }
      });

    $flyout
      .on("mouseenter", function () {
        clearTimeout(closeTimer);
      })
      .on("mouseleave", scheduleClose)
      .on("keydown", function (e) {
        var $items = items();
        var i = $items.index(document.activeElement);
        if (e.key === "ArrowDown") {
          e.preventDefault();
          $($items[i + 1] || $items[0]).trigger("focus");
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          $($items[i - 1] || $items[$items.length - 1]).trigger("focus");
        } else if (e.key === "Escape") {
          e.preventDefault();
          var $b = $openBtn;
          close();
          if ($b) $b.trigger("focus");
        }
      });

    /* close once focus leaves both the trigger button and the flyout */
    $doc.on("focusin", function (e) {
      if (!isOpen()) return;
      if ($.contains($flyout[0], e.target)) return;
      if (
        $openBtn &&
        $(e.target).closest(".rail-btn[data-cat]")[0] === $openBtn[0]
      )
        return;
      close();
    });

    /* keep it anchored on reflow; drop it if we leave the collapsed state */
    $win.on("resize", function () {
      if (!isOpen()) return;
      if (isCollapsed() && $openBtn) position($openBtn);
      else close();
    });
    /* capture phase so scrolls inside any container reposition it too */
    document.addEventListener(
      "scroll",
      function () {
        if (isOpen() && $openBtn) position($openBtn);
      },
      true,
    );
  }

  /* ==========================================================================
     Notifications
     ========================================================================== */
  /* Sync the unread badge / "N New" pill / empty state for a notification
     dropdown (or any element containing one). Presentation only. */
  function refreshNotif(scope) {
    var $scope = $(scope);
    var unread = $scope.find(".notif-item.unread").length;
    var total = $scope.find(".notif-item").length;
    var $pill = $scope.find("[data-notif-pill]");
    var $list = $scope.find("[data-notif-list]");
    var $empty = $scope.find("[data-notif-empty]");

    /* count badge lives on the toggle button (sibling of the menu) */
    var $dd = $scope.closest(".dropdown");
    if (!$dd.length) $dd = $scope;
    var $badge = $dd.find("[data-notif-count]").first();
    if (!$badge.length) $badge = $scope.find("[data-notif-count]").first();
    if ($badge.length) {
      $badge.text(unread).toggleClass("d-none", unread === 0);
    }
    if ($pill.length) {
      $pill.text(unread + " New").toggleClass("d-none", unread === 0);
    }
    if ($list.length && $empty.length) {
      var isEmpty = total === 0;
      $list.toggleClass("d-none", isEmpty);
      $empty.toggleClass("d-none", !isEmpty);
    }
  }

  /* ==========================================================================
     Bulk Selection - table select-all + action bar
     ========================================================================== */
  /* Wire any table by marking a wrapper [data-bulk-scope] and inside it:
     [data-bulk-all] master checkbox, [data-bulk-item] row checkboxes,
     [data-bulk-bar] toolbar (toggled via .d-none), [data-bulk-count] counter and
     [data-bulk-clear] reset button. Selected rows get .row-selected. */
  function initBulkSelect($scope) {
    var $master = $scope.find("[data-bulk-all]").first();
    var $bar = $scope.find("[data-bulk-bar]").first();
    var $count = $scope.find("[data-bulk-count]").first();

    function items() {
      return $scope.find("[data-bulk-item]");
    }

    function sync() {
      var $all = items();
      var $checked = $all.filter(":checked");
      if ($count.length) $count.text($checked.length);
      if ($bar.length) $bar.toggleClass("d-none", $checked.length === 0);
      if ($master.length) {
        $master.prop(
          "checked",
          $all.length > 0 && $checked.length === $all.length,
        );
        $master.prop(
          "indeterminate",
          $checked.length > 0 && $checked.length < $all.length,
        );
      }
      $all.each(function () {
        $(this).closest("tr").toggleClass("row-selected", this.checked);
      });
    }

    $scope.on("change", "[data-bulk-all]", function () {
      items().prop("checked", $(this).prop("checked"));
      sync();
    });
    $scope.on("change", "[data-bulk-item]", sync);
    $scope.on("click", "[data-bulk-clear]", function () {
      items().prop("checked", false);
      sync();
    });

    sync();
  }

  /* ==========================================================================
     Filters - reusable opt-in list/grid filtering
     ========================================================================== */
  /* Opt in by marking a wrapper [data-filter-scope] with buttons carrying
     [data-filter="<key>"] and items carrying [data-filter-tags="a b c"].
     "all" (or an empty value) shows everything. Purely presentational: it hides
     with .d-none and never removes nodes, so nothing has to be re-rendered.
     Inert on pages that do not use the hooks. */
  function initFilters($scope) {
    var $items = $scope.find("[data-filter-tags]");
    if (!$items.length) return;

    function apply(key) {
      var wanted = $.trim(key || "all").toLowerCase();
      $items.each(function () {
        var tags = (
          " " +
          ($(this).attr("data-filter-tags") || "") +
          " "
        ).toLowerCase();
        var show =
          wanted === "all" || !wanted || tags.indexOf(" " + wanted + " ") > -1;
        $(this).toggleClass("d-none", !show);
      });
      $scope.find("[data-filter]").each(function () {
        var on = ($(this).attr("data-filter") || "").toLowerCase() === wanted;
        $(this).toggleClass("active", on);
        if ($(this).is("[aria-pressed]")) {
          $(this).attr("aria-pressed", on ? "true" : "false");
        }
      });
      /* let a host page react (e.g. update an empty state) */
      $scope.trigger("vionex:filtered", [wanted, $items.not(".d-none").length]);
    }

    $scope.on("click", "[data-filter]", function (e) {
      e.preventDefault();
      apply($(this).attr("data-filter"));
    });

    var $initial = $scope.find("[data-filter].active").first();
    if ($initial.length) apply($initial.attr("data-filter"));
  }

  /* ==========================================================================
     Reusable Component Scripts - Billing Cycle Switch
     ========================================================================== */
  /* Opt in by marking a wrapper [data-price-scope] with, inside it:
     [data-price-cycle="<key>"]  the buttons that pick a cycle (monthly/yearly/...)
     [data-price-<key>="..."]    any node whose TEXT is that cycle's value; the
                                 module writes the matching attribute into it
     [data-price-only="<key>"]   a node shown only while that cycle is active
                                 (toggled with .d-none, never removed)
     Purely presentational and cycle-agnostic - the keys come from the markup, so
     the same module drives monthly/yearly, or per-seat/per-usage, or any other
     pair. The active button keeps the shared .seg-toggle styling; this only
     swaps the values, exactly as the crypto chart-view toggle only swaps plots.
     Inert on pages that do not use the hooks. */
  function initPriceCycle($scope) {
    var $btns = $scope.find("[data-price-cycle]");
    if (!$btns.length) return;

    function apply(cycle) {
      var key = $.trim(cycle || "").toLowerCase();
      /* the key is spliced into an attribute selector below, so it is held to
         the same shape the markup uses rather than trusted as-is */
      if (!/^[a-z0-9-]+$/.test(key)) return;

      $scope.find("[data-price-" + key + "]").each(function () {
        $(this).text($(this).attr("data-price-" + key));
      });
      $scope.find("[data-price-only]").each(function () {
        $(this).toggleClass("d-none", $(this).attr("data-price-only") !== key);
      });
      $btns.each(function () {
        var on = ($(this).attr("data-price-cycle") || "").toLowerCase() === key;
        $(this).toggleClass("active", on);
        if ($(this).is("[aria-pressed]")) {
          $(this).attr("aria-pressed", on ? "true" : "false");
        }
      });
      /* let a host page react (e.g. re-label a CTA) */
      $scope.trigger("vionex:pricecycle", [key]);
    }

    $scope.on("click", "[data-price-cycle]", function (e) {
      e.preventDefault();
      apply($(this).attr("data-price-cycle"));
    });

    var $initial = $btns.filter(".active").first();
    apply(
      ($initial.length ? $initial : $btns.first()).attr("data-price-cycle"),
    );
  }

  /* ==========================================================================
     Reusable Component Scripts - Search & Tag Filter
     ========================================================================== */
  /* Opt in by marking a wrapper [data-search-scope] with, inside it:
       [data-search-input]       the text field
       [data-filter="<key>"]     optional topic buttons - same contract as the
                                 filter module above ("all" shows everything)
       [data-filter-tags="a b"]  the items being searched and filtered
       [data-search-term="..."]  a shortcut chip that types its value into the field
       [data-search-clear]       a control that empties the query
       [data-search-count]       a node whose TEXT becomes the visible item count
       [data-search-total]       a node whose TEXT becomes the total item count
       [data-search-query]       a node whose TEXT echoes the current query
       [data-search-active]      a node shown only while a query is running
       [data-search-empty]       an empty state, toggled with .d-none

     The superset of the tag-only filter above, for lists that need a text query
     as well: ONE module owns .d-none, so a query and a topic can never fight
     over the same item. Matching is a case-insensitive substring test over each
     item's own rendered text - cached on first pass - so nothing has to be
     duplicated into an attribute. Purely presentational: items are hidden,
     never removed. Inert on pages that do not use the hooks. */
  function initSearchList($scope) {
    var $items = $scope.find("[data-filter-tags]");
    if (!$items.length) return;

    var $input = $scope.find("[data-search-input]");
    var key = "all";
    var query = "";

    function textOf($item) {
      var cached = $item.data("searchText");
      if (typeof cached !== "string") {
        cached = $.trim($item.text()).replace(/\s+/g, " ").toLowerCase();
        $item.data("searchText", cached);
      }
      return cached;
    }

    function apply() {
      var shown = 0;
      $items.each(function () {
        var $item = $(this);
        var tags =
          " " + ($item.attr("data-filter-tags") || "").toLowerCase() + " ";
        var hit =
          (key === "all" || tags.indexOf(" " + key + " ") > -1) &&
          (!query || textOf($item).indexOf(query) > -1);
        $item.toggleClass("d-none", !hit);
        if (hit) shown++;
      });

      $scope.find("[data-filter]").each(function () {
        var on = ($(this).attr("data-filter") || "").toLowerCase() === key;
        $(this).toggleClass("active", on);
        if ($(this).is("[aria-pressed]")) {
          $(this).attr("aria-pressed", on ? "true" : "false");
        }
      });

      $scope.find("[data-search-count]").text(String(shown));
      $scope.find("[data-search-total]").text(String($items.length));
      $scope.find("[data-search-query]").text($.trim($input.val() || ""));
      $scope.find("[data-search-active]").toggleClass("d-none", !query);
      $scope.find("[data-search-empty]").toggleClass("d-none", shown > 0);

      /* let a host page react (e.g. re-label a heading) */
      $scope.trigger("vionex:searched", [query, key, shown]);
    }

    function setQuery(value) {
      query = $.trim(value || "").toLowerCase();
      apply();
    }

    $scope.on(
      "input",
      "[data-search-input]",
      debounce(function () {
        setQuery($input.val());
      }, 150),
    );

    $scope.on("click", "[data-filter]", function (e) {
      e.preventDefault();
      key = $.trim($(this).attr("data-filter") || "all").toLowerCase() || "all";
      apply();
    });

    $scope.on("click", "[data-search-term]", function (e) {
      e.preventDefault();
      $input.val($(this).attr("data-search-term")).trigger("focus");
      setQuery($input.val());
    });

    $scope.on("click", "[data-search-clear]", function (e) {
      e.preventDefault();
      $input.val("");
      setQuery("");
    });

    var $initial = $scope.find("[data-filter].active").first();
    if ($initial.length) {
      key =
        $.trim($initial.attr("data-filter") || "all").toLowerCase() || "all";
    }
    setQuery($input.val());
  }

  /* ==========================================================================
     Reusable Component Scripts - Modal Fill
     ========================================================================== */
  /* Opt in by marking a Bootstrap modal [data-modal-fill]. Every control that
     opens it carries that record's values as data-fill-<key> attributes, and
     inside the modal:
       [data-fill="<key>"]        node whose TEXT becomes the value
       [data-fill-class="<key>"]  node whose class list becomes its
                                  data-fill-base plus the value - for a status
                                  pill or an avatar that changes tint per record
       [data-fill-rows="<key>"]   a <tbody> holding one [data-fill-row] per line
                                  the list can show, written in the MARKUP; the
                                  value is a list of records separated by "|",
                                  each a list of cell values separated by ";;"
                                  that fill that row's [data-fill-cell] nodes in
                                  document order. Rows the record does not need
                                  retire with .d-none — no row is ever built,
                                  cloned or removed here.

     ONE modal serves a whole list, so a table of N rows costs one dialog rather
     than N. Purely presentational: it copies strings the markup already
     carries - no formatting, no arithmetic, no totals of its own - so the
     values a row shows and the values its dialog shows can never drift apart.
     Inert on pages that do not use the hooks. */
  function initModalFill($modal) {
    var $rowHosts = $modal.find("[data-fill-rows]");

    $modal.on("show.bs.modal", function (e) {
      var $trigger = $(e.relatedTarget);
      if (!$trigger.length) return;

      function value(key) {
        return $trigger.attr("data-fill-" + key);
      }

      $modal.find("[data-fill]").each(function () {
        var val = value($(this).attr("data-fill"));
        if (typeof val === "string") $(this).text(val);
      });

      $modal.find("[data-fill-class]").each(function () {
        var $el = $(this);
        var val = value($el.attr("data-fill-class"));
        if (typeof val !== "string") return;
        $el.attr(
          "class",
          $.trim(($el.attr("data-fill-base") || "") + " " + val),
        );
      });

      $rowHosts.each(function () {
        var $host = $(this);
        var val = value($host.attr("data-fill-rows"));
        if (typeof val !== "string") return;
        var records = val.split("|");
        /* the markup's own rows, filled in place and hidden past the end */
        $host.children("[data-fill-row]").each(function (i) {
          var $row = $(this);
          var used = i < records.length;
          $row.toggleClass("d-none", !used);
          if (!used) return;
          var cells = records[i].split(";;");
          $row.find("[data-fill-cell]").each(function (c) {
            if (typeof cells[c] === "string") $(this).text(cells[c]);
          });
        });
      });

      /* the dialog's own copy just changed - let a host page react */
      $modal.trigger("vionex:modalfilled", [$trigger]);
    });
  }

  /* ==========================================================================
     Reusable Component Scripts - Editable Line Items
     ========================================================================== */
  /* Month names for the readable-date formatter below. Module scope, so the two
     behaviours in this section share one table. */
  var MONTH_ABBR = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  /* Opt in by marking a wrapper [data-items-scope] - any form for a document
     billed by the row (invoice, quote, purchase order, expense claim). Inside:
       [data-items-body]             the list the rows live in
       [data-items-row]              one row; the FIRST is also the blank
                                     template every added row is cloned from
       [data-item-desc]              the row's description field
       [data-item-qty]               the row's quantity field
       [data-item-rate]              the row's unit-price field
       [data-item-amount]            node whose TEXT becomes qty x rate
       [data-items-remove]           button that drops its own row
       [data-items-add]              button that appends a blank row
       [data-items-percent="<key>"]  a percentage input - "discount" / "tax"
       [data-items-value="<key>"]    a flat-amount input - "shipping"
       [data-items-out="<key>"]      node whose TEXT receives a computed figure:
                                     count / subtotal / discount / tax /
                                     shipping / total. Any number of nodes may
                                     share a key, so a summary panel and a
                                     preview dialog stay in step for free.
       [data-items-currency]         <select> whose selected <option> carries the
                                     data-symbol every figure is printed with
       [data-items-preview]          optional <tbody> mirrored from the rows

     The arithmetic lives here and nowhere else, so no two panels can drift.
     Every figure is written with .text() and preview rows are built as nodes,
     so a description someone types is never read as markup.
     Inert on pages that do not use the hooks. */
  function initLineItems($scope) {
    function symbol() {
      var $currency = $scope.find("[data-items-currency]").first();
      if (!$currency.length) return "$";
      return $currency.find("option:selected").attr("data-symbol") || "$";
    }

    function num($field) {
      var value = parseFloat($field.first().val());
      return isFinite(value) ? value : 0;
    }

    /* One formatter for the whole scope: grouped thousands, two decimals and a
       true minus sign, so a discount reads as a deduction in every panel. */
    function money(value, sym) {
      var rounded = Math.round((isFinite(value) ? value : 0) * 100) / 100;
      var sign = rounded < 0 ? "−" : "";
      var parts = Math.abs(rounded).toFixed(2).split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return sign + sym + parts[0] + "." + parts[1];
    }

    function rows() {
      return $scope.find("[data-items-row]");
    }

    function out(key, text) {
      $scope.find('[data-items-out="' + key + '"]').text(text);
    }

    /* Write one value into a preview cell. The MARKUP owns the cell — its
       classes, its alignment and the <bdi> that keeps a figure's direction — so
       the value is written into that <bdi> where there is one and into the cell
       itself otherwise. Nothing here builds a cell. */
    function fillCell($tr, index, text) {
      var $cell = $tr.children("td").eq(index);
      var $bdi = $cell.children("bdi").first();
      ($bdi.length ? $bdi : $cell).text(text);
    }

    /* The preview table is written in the HTML, one row per line item, and this
       only keeps its FIGURES in step with the form above it. A row is added or
       dropped solely to follow the reader adding or removing a line — never to
       re-render the demo content the markup already carries — and the row that
       is added is a copy of the markup's own last row, so its structure stays
       owned by the HTML. */
    function renderPreview(sym) {
      var $host = $scope.find("[data-items-preview]").first();
      if (!$host.length) return;

      var $rows = rows();
      var $preview = $host.children("tr");
      if (!$preview.length) return;

      /* follow the line count the reader has produced */
      while ($host.children("tr").length > $rows.length) {
        $host.children("tr").last().remove();
      }
      while ($host.children("tr").length < $rows.length) {
        $host.append($host.children("tr").last().clone());
      }

      $preview = $host.children("tr");
      $rows.each(function (i) {
        var $row = $(this);
        var qty = num($row.find("[data-item-qty]"));
        var rate = num($row.find("[data-item-rate]"));
        var desc = $.trim($row.find("[data-item-desc]").first().val() || "");
        var $tr = $preview.eq(i);
        fillCell($tr, 0, desc || "—");
        fillCell($tr, 1, String(qty));
        fillCell($tr, 2, money(rate, sym));
        fillCell($tr, 3, money(qty * rate, sym));
      });
    }

    function recalc() {
      var sym = symbol();
      var $rows = rows();
      var subtotal = 0;

      $rows.each(function () {
        var $row = $(this);
        var amount =
          num($row.find("[data-item-qty]")) *
          num($row.find("[data-item-rate]"));
        $row.find("[data-item-amount]").text(money(amount, sym));
        subtotal += amount;
      });

      var discount =
        (subtotal * num($scope.find('[data-items-percent="discount"]'))) / 100;
      var tax =
        ((subtotal - discount) *
          num($scope.find('[data-items-percent="tax"]'))) /
        100;
      var shipping = num($scope.find('[data-items-value="shipping"]'));

      out("count", String($rows.length));
      out("subtotal", money(subtotal, sym));
      out("discount", money(-discount, sym));
      out("tax", money(tax, sym));
      out("shipping", money(shipping, sym));
      out("total", money(subtotal - discount + tax + shipping, sym));

      /* the last row can never be dropped - a document with no lines is not
         something anyone can send */
      $scope.find("[data-items-remove]").prop("disabled", $rows.length < 2);
      renderPreview(sym);
    }

    $scope.on("click", "[data-items-add]", function (e) {
      e.preventDefault();
      var $blank = rows().first().clone();
      $blank.find("input").each(function () {
        var $field = $(this);
        $field.val($field.is("[data-item-qty]") ? "1" : "");
      });
      $scope.find("[data-items-body]").first().append($blank);
      drawIcons();
      recalc();
      $blank.find("[data-item-desc]").first().trigger("focus");
    });

    $scope.on("click", "[data-items-remove]", function (e) {
      e.preventDefault();
      if (rows().length < 2) return;
      $(this).closest("[data-items-row]").remove();
      recalc();
    });

    $scope.on(
      "input change",
      "[data-item-qty], [data-item-rate], [data-items-percent], [data-items-value], [data-items-currency]",
      recalc,
    );

    recalc();
  }

  /* ==========================================================================
     Reusable Component Scripts - Field Mirror
     ========================================================================== */
  /* Live "this is what the recipient sees" previews. Mark a wrapper
     [data-mirror-scope], then:
       [data-mirror="<key>"]        an input / select / textarea to read
       [data-mirror-out="<key>"]    node whose TEXT follows that field
       [data-mirror-empty="..."]    that node's placeholder while the field is
                                    blank (defaults to an em dash)
       [data-mirror-format="date"]  render an ISO date field as "31 Aug 2026"
     A <select> mirrors its selected option's label. Values are written with
     .text(), never .html(). Inert on pages that do not use the hooks. */
  function initFieldMirror($scope) {
    function readValue($src) {
      if ($src.is("select"))
        return $.trim($src.find("option:selected").first().text());
      var value = $src.val();
      return $.trim(value == null ? "" : String(value));
    }

    function readableDate(value) {
      var parts = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
      if (!parts) return value;
      var month = MONTH_ABBR[parseInt(parts[2], 10) - 1];
      return month ? parts[3] + " " + month + " " + parts[1] : value;
    }

    function sync() {
      $scope.find("[data-mirror]").each(function () {
        var $src = $(this);
        var value = readValue($src);
        $scope
          .find('[data-mirror-out="' + $src.attr("data-mirror") + '"]')
          .each(function () {
            var $out = $(this);
            var text = value;
            if (text && $out.attr("data-mirror-format") === "date")
              text = readableDate(text);
            $out.text(text || $out.attr("data-mirror-empty") || "—");
          });
      });
    }

    $scope.on("input change", "[data-mirror]", sync);
    sync();
  }

  /* ==========================================================================
     Reusable Component Scripts - Record Switcher
     ========================================================================== */
  /* One panel, many records: the reader picks a record and the panel re-renders
     as that record. Mark a wrapper [data-record-scope] with, inside it:
       [data-record="<key>"]        one per record - an <option>, a button or a
                                    link - carrying that record's values as
                                    data-record-<field> attributes
       [data-record-out="<field>"]  node whose TEXT becomes the value
       [data-record-href="<field>"] node whose href becomes the value
       [data-record-icon="<field>"] node holding one [data-record-icon-name]
                                    child per glyph a record can show; the
                                    matching one is revealed and the rest retire
                                    with .d-none
       [data-record-class="<field>"] node whose class list becomes its
                                    data-record-base plus the value - for a tint,
                                    an accent edge or a wash that follows the record
     On the scope itself:
       [data-record-param="<name>"] seed the opening record from ?<name>= in the
                                    URL, and keep that query string in step as the
                                    reader switches, so the panel stays linkable

     The same idea as the modal filler above, aimed at a page rather than a
     dialog: every string stays in the markup, and the module only copies it, so
     the list of records and the panel showing one can never drift apart. Purely
     presentational - nothing is fetched, created or calculated. Inert on pages
     that do not use the hooks. */
  function initRecordSwitcher($scope) {
    var $records = $scope.find("[data-record]");
    if (!$records.length) return;

    var param = $scope.attr("data-record-param") || "";

    function find(key) {
      return $records
        .filter(function () {
          return $(this).attr("data-record") === key;
        })
        .first();
    }

    /* Keep the address bar in step so a switched-to record can be linked or
       reloaded. Best-effort: a file:// document rejects the rewrite, and that
       must not take the switch down with it. */
    function syncUrl(key) {
      if (!param || !window.history || !window.history.replaceState) return;
      try {
        var url = new URL(window.location.href);
        url.searchParams.set(param, key);
        window.history.replaceState(null, "", url.toString());
      } catch (err) {
        /* unsupported or cross-origin-restricted - the panel still switched */
      }
    }

    function apply(key, seeding) {
      var $rec = find(key);
      if (!$rec.length) return;

      function value(field) {
        return $rec.attr("data-record-" + field);
      }

      $scope.find("[data-record-out]").each(function () {
        var val = value($(this).attr("data-record-out"));
        if (typeof val === "string") $(this).text(val);
      });

      $scope.find("[data-record-href]").each(function () {
        var val = value($(this).attr("data-record-href"));
        if (typeof val === "string") $(this).attr("href", val);
      });

      $scope.find("[data-record-class]").each(function () {
        var $el = $(this);
        var val = value($el.attr("data-record-class"));
        if (typeof val !== "string") return;
        $el.attr(
          "class",
          $.trim(($el.attr("data-record-base") || "") + " " + val),
        );
      });

      /* The host carries one [data-record-icon-name] child per glyph a record
         can show, written in the MARKUP — the switch reveals the matching one
         and retires the rest, so no icon is created here. */
      $scope.find("[data-record-icon]").each(function () {
        var $host = $(this);
        var val = value($host.attr("data-record-icon"));
        if (typeof val !== "string") return;
        $host.find("[data-record-icon-name]").each(function () {
          $(this).toggleClass(
            "d-none",
            $(this).attr("data-record-icon-name") !== val,
          );
        });
      });

      /* reflect the choice back into whichever control shape the page uses */
      $scope.find("select").each(function () {
        if ($(this).find("option[data-record]").length) $(this).val(key);
      });
      $records.not("option").each(function () {
        var on = $(this).attr("data-record") === key;
        $(this).toggleClass("active", on);
        if ($(this).is("[aria-pressed]")) {
          $(this).attr("aria-pressed", on ? "true" : "false");
        }
      });

      if (!seeding) syncUrl(key);
      $scope.trigger("vionex:record", [key, $rec]);
    }

    $scope.on("change", "select", function () {
      var key = $(this).find("option:selected").first().attr("data-record");
      if (typeof key === "string") apply(key);
    });

    $scope.on("click", "[data-record]", function (e) {
      if ($(this).is("option")) return;
      e.preventDefault();
      apply($(this).attr("data-record"));
    });

    /* opening record: the URL first, then whatever the markup marked current */
    var initial = "";
    if (param) {
      try {
        initial = new URL(window.location.href).searchParams.get(param) || "";
      } catch (err) {
        initial = "";
      }
    }
    if (!initial || !find(initial).length) {
      var $marked = $records.filter(".active, [selected]").first();
      initial = ($marked.length ? $marked : $records.first()).attr(
        "data-record",
      );
    }
    apply(initial, true);
  }

  /* ==========================================================================
     Reusable Component Scripts - Field Match
     ========================================================================== */
  /* "Confirm password", "repeat email", "type the project name to delete" — any
     control that has to equal another one. Opt in on the CONFIRMING control:

       data-match="<selector>"        the control it must equal
       data-match-message="..."       optional; the browser's validation message

     Implemented with setCustomValidity rather than a bespoke error path, so the
     field joins the same constraint pipeline as required / minlength / type: the
     shared form[data-validate] handler blocks the submit, Bootstrap paints the
     control, and the field's own .invalid-feedback explains it. Two empty fields
     match, so `required` — not this — is what reports a blank one. Re-checked
     from BOTH controls, otherwise editing the first one after the second leaves
     a stale verdict behind. Inert on pages that do not use the hook. */
  function initFieldMatch($ctx) {
    $ctx.find("[data-match]").each(function () {
      var $confirm = $(this);
      if ($confirm.data("matchBound")) return;

      var $source = $($confirm.attr("data-match")).first();
      if (!$source.length) return;
      $confirm.data("matchBound", true);

      var message =
        $confirm.attr("data-match-message") || "These two do not match.";

      function check() {
        var el = $confirm[0];
        if (!el.setCustomValidity) return;
        el.setCustomValidity($confirm.val() === $source.val() ? "" : message);
      }

      $confirm.on("input change", check);
      $source.on("input change", check);
      check();
    });
  }

  /* ==========================================================================
     AJAX - reusable partial loader
     ========================================================================== */
  /* Opt in with [data-ajax-url] on any container. It fetches an HTML partial and
     injects it, then re-draws icons and re-runs the openers so anything inside
     the fragment behaves like server-rendered markup.

       data-ajax-url     required - the endpoint
       data-ajax-trigger "load" (default) | "click" | "manual"
       data-ajax-target  optional selector; defaults to the container itself

     Nothing on this page uses the hooks yet, so the module stays inert until
     real endpoints exist - no requests are made speculatively. */
  function loadPartial($el) {
    var url = $el.attr("data-ajax-url");
    if (!url || $el.data("ajaxBusy")) return $.Deferred().reject().promise();
    var sel = $el.attr("data-ajax-target");
    var $target = sel ? $(sel) : $el;

    $el.data("ajaxBusy", true).addClass("is-loading");
    return $.ajax({ url: url, dataType: "html" })
      .done(function (html) {
        $target.html(html);
        drawIcons();
        initDynamic($target);
        $el.trigger("vionex:ajaxloaded", [url]);
      })
      .fail(function (xhr, status) {
        if (window.console) console.error("Vionex AJAX failed:", url, status);
        $el.trigger("vionex:ajaxerror", [url, status]);
      })
      .always(function () {
        $el.removeData("ajaxBusy").removeClass("is-loading");
      });
  }

  function initAjax($ctx) {
    $ctx
      .find("[data-ajax-url]")
      .addBack("[data-ajax-url]")
      .each(function () {
        var $el = $(this);
        if ($el.data("ajaxBound")) return;
        $el.data("ajaxBound", true);
        var trigger = $el.attr("data-ajax-trigger") || "load";
        if (trigger === "load") loadPartial($el);
        else if (trigger === "click") {
          $el.on("click", function (e) {
            e.preventDefault();
            loadPartial($el);
          });
        }
      });
  }

  /* ==========================================================================
     Dynamic init - safe to re-run over any subtree
     ========================================================================== */
  /* Everything here is idempotent, so it can run on DOMContentLoaded and again
     over freshly injected AJAX markup without double-binding. */
  function initDynamic($ctx) {
    var $scope = $ctx && $ctx.length ? $ctx : $doc;

    /* reveal-on-view enter animations */
    var $inview = $scope.find("[data-inview]").not(".in-view");
    if ($inview.length) {
      if (typeof IntersectionObserver === "undefined") {
        $inview.addClass("in-view");
      } else {
        var io = new IntersectionObserver(
          function (entries, obs) {
            $.each(entries, function (_, e) {
              if (e.isIntersecting) {
                $(e.target).addClass("in-view");
                obs.unobserve(e.target);
              }
            });
          },
          { threshold: 0.25 },
        );
        $inview.each(function () {
          io.observe(this);
        });
      }
    }

    /* overflow-safe dropdowns: a menu nested in an overflow-clipped card gets
       clipped by the card. [data-dd-fixed] positions it with Popper's "fixed"
       strategy so it escapes the clip. Bootstrap owns the dropdown component;
       this only supplies the popper config.

       The fixed strategy escapes EVERY clip, though, so a long menu opened low
       in a scrolling pane flips upward and floats out over that pane's own
       toolbar - it reads as a menu belonging to nothing. Two things keep it
       home: Popper is given the pane as its boundary (altAxis so it is held on
       the vertical too, untethered so it may slide away from its button rather
       than leave the pane), and the menu is capped to the pane's height on the
       way in, scrolling internally in the rare case it is still too tall.
       Page-level scrollers are not panes: a toolbar or header menu should
       still be free to use the whole viewport. */
    if (window.bootstrap && window.bootstrap.Dropdown) {
      $scope.find("[data-dd-fixed]").each(function () {
        var toggle = this;
        window.bootstrap.Dropdown.getOrCreateInstance(toggle, {
          popperConfig: function (defaults) {
            var config = $.extend({}, defaults, { strategy: "fixed" });
            var pane = scrollPaneFor(toggle);
            if (pane) {
              config.modifiers = (defaults.modifiers || []).concat([
                { name: "flip", options: { boundary: pane, padding: 8 } },
                {
                  name: "preventOverflow",
                  options: {
                    boundary: pane,
                    padding: 8,
                    altAxis: true,
                    tether: false,
                  },
                },
              ]);
            }
            return config;
          },
        });
        initFixedMenu(toggle);
      });
    }

    /* drag-to-scroll rails */
    $scope.find(".scroll-row").each(function () {
      enableDragScroll(this);
    });

    /* rail prev / next controls */
    $scope.find("[data-scroll-rail]").each(function () {
      initRailNav($(this));
    });

    /* auto-scrolling marquee rails */
    $scope.find(".marquee").each(function () {
      initMarquee($(this));
    });

    /* notification centre */
    $scope.find(".notif-menu").each(function () {
      refreshNotif(this);
    });

    /* bulk selection */
    $scope.find("[data-bulk-scope]").each(function () {
      var $s = $(this);
      if ($s.data("bulkBound")) return;
      $s.data("bulkBound", true);
      initBulkSelect($s);
    });

    /* opt-in filters */
    $scope.find("[data-filter-scope]").each(function () {
      var $s = $(this);
      if ($s.data("filterBound")) return;
      $s.data("filterBound", true);
      initFilters($s);
    });

    /* billing cycle switches */
    $scope.find("[data-price-scope]").each(function () {
      var $s = $(this);
      if ($s.data("priceBound")) return;
      $s.data("priceBound", true);
      initPriceCycle($s);
    });

    /* searchable + tag-filtered lists */
    $scope.find("[data-search-scope]").each(function () {
      var $s = $(this);
      if ($s.data("searchBound")) return;
      $s.data("searchBound", true);
      initSearchList($s);
    });

    /* modals filled from the control that opened them */
    $scope.find("[data-modal-fill]").each(function () {
      var $s = $(this);
      if ($s.data("modalFillBound")) return;
      $s.data("modalFillBound", true);
      initModalFill($s);
    });

    /* editable line-item lists with live totals */
    $scope.find("[data-items-scope]").each(function () {
      var $s = $(this);
      if ($s.data("itemsBound")) return;
      $s.data("itemsBound", true);
      initLineItems($s);
    });

    /* one panel re-rendered from a list of records */
    $scope.find("[data-record-scope]").each(function () {
      var $s = $(this);
      if ($s.data("recordBound")) return;
      $s.data("recordBound", true);
      initRecordSwitcher($s);
    });

    /* controls that must equal another control */
    initFieldMatch($scope);

    /* live field mirrors (form -> preview) */
    $scope.find("[data-mirror-scope]").each(function () {
      var $s = $(this);
      if ($s.data("mirrorBound")) return;
      $s.data("mirrorBound", true);
      initFieldMirror($s);
    });

    initAjax($scope);
  }

  /* ==========================================================================
     Pre-paint pass
     ========================================================================== */
  /* dashboard.js is a plain <script> at the end of <body>, so the sidebar DOM
     already exists here. Correcting the active category now, before the first
     paint, removes the "flash to the first menu, then switch" jump. Only toggles
     classes; idempotent, so the ready() pass below safely re-applies it. */
  if ($(".app-sidebar .sidebar-nav .sidebar-link").length) {
    highlightActiveNav();
  }

  /* The nav state is settled, so lift the boot guard the inline <head> script
     put up. Deferred one frame: the settled highlight paints first, and only
     then do .transition-base animations come back for real interactions. */
  if (window.requestAnimationFrame) {
    requestAnimationFrame(function () {
      $root.removeAttr("data-booting");
    });
  } else {
    $root.removeAttr("data-booting");
  }

  /* ==========================================================================
     Delegated event bindings
     ========================================================================== */
  $(function () {
    drawIcons();
    syncControls();

    /* ---- customizer ---- */
    $doc.on("click", "[data-cz]", function () {
      applyOption($(this).attr("data-cz"), $(this).attr("data-value"));
    });

    $doc.on("click", "[data-action='toggle-mode']", function () {
      applyOption(
        "mode",
        $root.attr("data-bs-theme") === "dark" ? "light" : "dark",
      );
    });

    $doc.on("click", "[data-action='reset-customizer']", function () {
      $.each(OPTIONS, function (key, opt) {
        applyOption(key, opt.def);
      });
    });

    /* ---- sidebar ---- */
    $doc.on("click", "[data-action='toggle-sidebar']", toggleSidebar);
    $doc.on("click", "[data-cat]", function () {
      selectCategory($(this).attr("data-cat"));
    });
    $doc.on("click", ".sidebar-backdrop", function () {
      $body.removeClass("sidebar-open");
    });

    initSidebarFlyout();

    /* ---- top navigation ---- */
    /* The pre-paint pass already ran highlightActiveNav() -> selectCategory() ->
       syncTopnav(). Re-run only as a fallback for pages with no .sidebar-nav. */
    if (!$(".app-sidebar .sidebar-nav .sidebar-link").length) {
      var $rail = $(".rail-btn.active[data-cat]").first();
      if (!$rail.length) $rail = $("[data-cat]").first();
      if ($rail.length) syncTopnav($rail.attr("data-cat"));
    }

    $doc.on("click", ".app-topnav a", function (e) {
      var $link = $(this);
      var href = $link.attr("href");
      /* real page links navigate normally; only placeholders (#) are inert */
      if (!href || href === "#") e.preventDefault();
      $link.closest(".app-topnav").find("a").removeClass("active");
      $link.addClass("active");
      revealTopnavLink($link, true);
    });
    /* keyboard tabbing gets the same peek as a click */
    $doc.on("focusin", ".app-topnav a", function () {
      revealTopnavLink($(this), true);
    });
    /* breakpoint changes re-flow the bar -> re-align the active item */
    $win.on(
      "resize",
      debounce(function () {
        revealActiveTopnavLink(false);
      }, 100),
    );

    /* ---- segmented toggles inside cards (visual only) ---- */
    $doc.on("click", ".seg-toggle button", function () {
      var $btn = $(this);
      var $group = $btn.closest(".seg-toggle");
      $group.find("button").removeClass("active");
      $btn.addClass("active");
      /* Keep the accessible state in step with the visual one for the groups
         that expose it. Scoped to [aria-pressed] so toggles that carry no
         state — and Bootstrap-driven tabs, which own aria-selected — are left
         exactly as they were. */
      $group.find("button[aria-pressed]").attr("aria-pressed", "false");
      $btn.filter("[aria-pressed]").attr("aria-pressed", "true");
    });

    /* ---- view switch: table / grid / list panels ---- */
    /* The .seg-toggle handler above manages the buttons' active state; this only
       reveals the matching panel by flipping .d-none. Both views render once
       from the same markup, so switching never reloads or duplicates data. */
    $doc.on("click", "[data-view-switch] [data-view-target]", function () {
      var $btn = $(this);
      var $scope = $btn.closest("[data-view-switch]");
      var view = $btn.attr("data-view-target");
      $scope.find("[data-view-panel]").each(function () {
        $(this).toggleClass("d-none", $(this).attr("data-view-panel") !== view);
      });
    });

    /* ---- helpful vote: one-shot inline feedback ---- */
    /* Opt in with [data-vote-group] wrapping the [data-vote] buttons, an
       optional [data-vote-ask] prompt and a [data-vote-thanks] acknowledgement.
       The choice is written back onto the group so a host page can read it,
       the prompt retires and the acknowledgement takes its place - a vote is
       cast once per answer, which is the whole behaviour. */
    $doc.on("click", "[data-vote]", function () {
      var $btn = $(this);
      var $group = $btn.closest("[data-vote-group]");
      if (!$group.length) return;
      $group.attr("data-vote-group", $btn.attr("data-vote"));
      $group.find("[data-vote-ask]").addClass("d-none");
      $group.find("[data-vote-thanks]").removeClass("d-none");
    });

    /* ==========================================================================
       Reusable Component Scripts - Star / Favourite
       ========================================================================== */
    /* The File Manager's star, generalised so any record list can have one.
       Opt in with [data-star] on a control inside a record that carries
       [data-filter-tags]; the value names the tag to flip ("starred" when
       empty). That tag is the SAME one the shared search/filter module reads,
       so the star and the filter pill cannot disagree - there is one source of
       truth and it lives in the markup.

       Inside the record:
         [data-star-on]        the starred glyph
         [data-star-off]       the un-starred glyph
         [data-star-text-on]   label shown while starred (e.g. "Remove star")
         [data-star-text-off]  label shown while not starred
       Every state ships in the MARKUP and this only reveals one of each pair,
       so a page still renders each record correctly with the scripts removed.
       More than one control may carry [data-star] for the same record - an
       overlay button and a menu item stay in step because both are repainted.

       aria-pressed carries the state and the label stays put, which is how a
       toggle button is meant to announce itself; only controls that already
       declare aria-pressed get it, so a menu item is left alone.

       Afterwards the record list's active filter is re-run, because the pane
       count and the visible set are both computed from the tags - that is what
       makes a tile leave the grid the moment it stops being a favourite.
       Inert on pages that do not use the hooks. */
    $doc.on("click", "[data-star]", function () {
      var $btn = $(this);
      var $rec = $btn.closest("[data-filter-tags]");
      if (!$rec.length) return;

      var tag = $.trim($btn.attr("data-star") || "") || "starred";
      var padded = " " + tag + " ";
      var tags = " " + ($rec.attr("data-filter-tags") || "") + " ";
      var on = tags.indexOf(padded) < 0; /* the state we are moving TO */

      /* split/join rather than a built regex: the tag comes from the markup
         and must not be spliced into a pattern */
      tags = tags.split(padded).join(" ");
      if (on) tags += tag;
      $rec.attr("data-filter-tags", $.trim(tags).replace(/\s+/g, " "));

      $rec.find("[data-star][aria-pressed]").attr("aria-pressed", on ? "true" : "false");
      $rec.find("[data-star-on], [data-star-text-on]").toggleClass("d-none", !on);
      $rec.find("[data-star-off], [data-star-text-off]").toggleClass("d-none", on);

      $rec
        .closest("[data-search-scope], [data-filter-scope]")
        .find("[data-filter].active")
        .first()
        .trigger("click");
    });

    /* ==========================================================================
       Reusable Component Scripts - History Back
       ========================================================================== */
    /* Opt in with [data-history-back] on a link whose href is the destination to
       use when there is nowhere to go back to - a page opened from a bookmark,
       or the first entry in a fresh tab. With history behind it the click is
       intercepted and the browser steps back instead. Progressive: with the
       script absent the link simply navigates to its own href, so the control
       always leads somewhere. Reusable by any error, empty or detail state that
       offers a way back. */
    $doc.on("click", "[data-history-back]", function (e) {
      if (window.history && window.history.length > 1) {
        e.preventDefault();
        window.history.back();
      }
    });

    /* ==========================================================================
       Reusable Component Scripts - Copy To Clipboard
       ========================================================================== */
    /* Opt in with [data-copy] on a button, valued with a selector whose rendered
       TEXT is copied (or [data-copy-text] to copy a literal string instead).
       Inside the button:
         [data-copy-label]  the resting label
         [data-copy-done]   the acknowledgement, .d-none until a copy succeeds
       Reading the DOM keeps one source of truth, so what the panel shows and
       what the clipboard receives can never drift apart. Reusable for request
       IDs, invoice numbers, API keys and share links. Inert on pages that do not
       use the hooks. */
    function writeClipboard(text, done) {
      /* file:// and plain http are not secure contexts, where the async
         Clipboard API is unavailable - the offscreen textarea covers both that
         and older browsers, so the control behaves the same everywhere. */
      function fallback() {
        var $tmp = $("<textarea>", {
          class: "position-fixed top-0 start-0 opacity-0",
          "aria-hidden": "true",
          tabindex: "-1",
        })
          .val(text)
          .appendTo(document.body);
        $tmp[0].select();
        var ok = false;
        try {
          ok = document.execCommand("copy");
        } catch (err) {
          ok = false;
        }
        $tmp.remove();
        done(ok);
      }

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(function () {
          done(true);
        }, fallback);
        return;
      }
      fallback();
    }

    $doc.on("click", "[data-copy]", function () {
      var $btn = $(this);
      var text = $btn.attr("data-copy-text");

      if (typeof text !== "string") {
        var sel = $btn.attr("data-copy");
        text = sel ? $.trim($(sel).text()).replace(/\s+/g, " ") : "";
      }
      if (!text) return;

      writeClipboard(text, function (ok) {
        if (!ok) return;
        $btn.find("[data-copy-label]").addClass("d-none");
        $btn.find("[data-copy-done]").removeClass("d-none");
        clearTimeout($btn.data("copyTimer"));
        $btn.data(
          "copyTimer",
          setTimeout(function () {
            $btn.find("[data-copy-done]").addClass("d-none");
            $btn.find("[data-copy-label]").removeClass("d-none");
          }, 2000),
        );
      });
    });

    /* ==========================================================================
       Reusable Component Scripts - Password Reveal
       ========================================================================== */
    /* Opt in with [data-password-toggle="<selector>"] on a button sitting inside
       the field's .field-icon wrapper, holding a [data-password-icon] span:

         <button type="button" data-password-toggle="#pw" aria-controls="pw"
                 aria-pressed="false" aria-label="Show password">
           <span data-password-icon>
             <i data-password-glyph="show" data-lucide="eye"></i>
             <i class="d-none" data-password-glyph="hide" data-lucide="eye-off"></i>
           </span>
         </button>

       Flips the control between password and text, and keeps the icon, the
       pressed state and the accessible label in step — a button whose label
       never changes leaves a screen-reader user unable to tell which state the
       field is in. BOTH glyphs are written in the markup and the one that does
       not apply retires with .d-none, so nothing is created here. Shared by
       every authentication page. Inert on pages that do not use the hook. */
    $doc.on("click", "[data-password-toggle]", function () {
      var $btn = $(this);
      var $field = $($btn.attr("data-password-toggle"));
      if (!$field.length) return;

      var reveal = $field.attr("type") === "password";
      $field.attr("type", reveal ? "text" : "password");

      $btn
        .attr("aria-pressed", reveal ? "true" : "false")
        .attr("aria-label", reveal ? "Hide password" : "Show password")
        .find("[data-password-glyph]")
        .each(function () {
          var wanted = reveal ? "hide" : "show";
          $(this).toggleClass(
            "d-none",
            $(this).attr("data-password-glyph") !== wanted,
          );
        });
    });

    /* ==========================================================================
       Reusable Component Scripts - Live Clock
       ========================================================================== */
    /* Opt in with [data-clock="time"] or [data-clock="date"] on any element,
       ideally a <bdi> so the numerals keep their own direction inside RTL prose:

         <p class="display-4"><bdi data-clock="time">09:41</bdi></p>
         <p><bdi data-clock="date">Wednesday, 2 September</bdi></p>

       Formatting is delegated to Intl through the document's own `lang`, so the
       clock follows the page rather than carrying a hardcoded English format,
       and [data-clock-seconds] opts an element into a ticking second hand.
       The markup keeps a plausible value of its own, so the element is never
       blank before the first paint and still reads correctly with the script
       absent. The interval writes only when the rendered string actually
       changes, so a minute-granularity clock costs one DOM write a minute.
       Reusable by any lock, splash, kiosk or status screen. Inert on pages that
       do not use the hook. */
    function renderClocks() {
      var now = new Date();
      var lang = document.documentElement.lang || undefined;

      $("[data-clock]").each(function () {
        var $el = $(this);
        var text;

        if ($el.attr("data-clock") === "date") {
          text = now.toLocaleDateString(lang, {
            weekday: "long",
            day: "numeric",
            month: "long",
          });
        } else {
          text = now.toLocaleTimeString(lang, {
            hour: "2-digit",
            minute: "2-digit",
            second: $el.is("[data-clock-seconds]") ? "2-digit" : undefined,
          });
        }

        if ($el.text() !== text) $el.text(text);
      });
    }

    if ($("[data-clock]").length) {
      renderClocks();
      window.setInterval(renderClocks, 1000);
    }

    /* ==========================================================================
       Reusable Component Scripts - Code Input
       ========================================================================== */
    /* Opt in with [data-code-group] on the wrapper around a row of
       one-character controls:

         <div class="row g-2 code-group" data-code-group>
           <div class="col"><input class="form-control text-center px-0"
                                   maxlength="1" inputmode="numeric" ...></div>
           ... one per character ...
         </div>

       Turns those boxes into ONE control: typing advances, Backspace on an
       empty box steps back and clears the previous one, the arrow keys walk the
       group, and a code pasted (or autofilled from an SMS) into any box spreads
       across the rest and lands focus on the last box it filled. Everything is
       driven off the boxes actually present, so the same behaviour serves a
       4-box PIN, a 6-box OTP or an 8-box licence segment with no change.
       Non-digits are refused only where the markup asks for them via
       inputmode="numeric" — a licence key keeps its letters. Inert on pages that
       do not use the hook. */
    function codeBoxes($group) {
      return $group.find(".form-control").filter(":not(:disabled)");
    }

    function codeIsNumeric($group) {
      return codeBoxes($group).first().attr("inputmode") === "numeric";
    }

    $doc.on("input", "[data-code-group] .form-control", function () {
      var $box = $(this);
      var $group = $box.closest("[data-code-group]");
      var $all = codeBoxes($group);
      var value = $box.val() || "";

      if (codeIsNumeric($group)) value = value.replace(/\D/g, "");

      /* One box holds one character. Anything longer arrived as a paste or an
         autofill, so it is spread across the boxes from here on rather than
         truncated - losing five of a visitor's six digits is the worst possible
         reading of a correct paste. */
      var chars = value.split("");
      var start = $all.index($box);

      $box.val(chars.shift() || "");

      var last = $box;
      $.each(chars, function (i, ch) {
        var $next = $all.eq(start + 1 + i);
        if (!$next.length) return false;
        $next.val(ch);
        last = $next;
      });

      var $after = $all.eq($all.index(last) + 1);
      if (last.val() && $after.length)
        $after.trigger("focus").trigger("select");
      else last.trigger("focus").trigger("select");
    });

    $doc.on("keydown", "[data-code-group] .form-control", function (e) {
      var $box = $(this);
      var $all = codeBoxes($box.closest("[data-code-group]"));
      var i = $all.index($box);
      var $prev = $all.eq(i - 1);
      var $next = $all.eq(i + 1);
      var back = e.key === "ArrowLeft";
      var forward = e.key === "ArrowRight";

      /* Arrow keys follow what the visitor SEES, so the direction is read off
         the group itself rather than the page: a numeric passcode pins itself
         to dir="ltr" inside an RTL page, and there the arrows must not swap. */
      if (window.getComputedStyle($all[0]).direction === "rtl") {
        back = e.key === "ArrowRight";
        forward = e.key === "ArrowLeft";
      }

      if (e.key === "Backspace" && !$box.val() && i > 0) {
        e.preventDefault();
        $prev.val("").trigger("focus");
      } else if (back && i > 0) {
        e.preventDefault();
        $prev.trigger("focus").trigger("select");
      } else if (forward && $next.length) {
        e.preventDefault();
        $next.trigger("focus").trigger("select");
      }
    });

    /* Clicking a half-filled group should land the caret on the character it
       is about to replace, never after it. */
    $doc.on("focus", "[data-code-group] .form-control", function () {
      $(this).trigger("select");
    });

    /* ==========================================================================
       Reusable Component Scripts - Cooldown
       ========================================================================== */
    /* Opt in with [data-cooldown="<seconds>"] on the wrapper around an action
       that must not be repeated immediately - resending a passcode, re-inviting
       a teammate, retrying a sync:

         <p data-cooldown="30">
           <span data-cooldown-wait>Resend in <bdi data-cooldown-timer>0:30</bdi></span>
           <span class="d-none" data-cooldown-ready>
             <button type="button" data-cooldown-action>Resend</button>
           </span>
         </p>

       [data-cooldown-wait] shows while the timer runs and [data-cooldown-ready]
       takes over when it reaches zero; pressing [data-cooldown-action] restarts
       the timer, so one component covers the whole cycle. The two halves are
       swapped by their own WRAPPERS rather than by the controls inside them -
       .d-none loses the cascade to any .d-flex/.d-inline-flex on the same
       element, so a button that lays its icon out with flex could never be
       hidden. The countdown starts on load, and the markup carries its own
       opening value, so the element never flashes blank or offers an action
       that is not ready yet. Inert on pages that do not use the hook. */
    function startCooldown($el) {
      var left = parseInt($el.attr("data-cooldown"), 10) || 0;

      function paint() {
        var mins = Math.floor(left / 60);
        var secs = left % 60;
        $el
          .find("[data-cooldown-timer]")
          .text(mins + ":" + (secs < 10 ? "0" : "") + secs);
      }

      function finish() {
        window.clearInterval($el.data("cooldownTimer"));
        $el.removeData("cooldownTimer");
        $el.find("[data-cooldown-wait]").addClass("d-none");
        $el.find("[data-cooldown-ready]").removeClass("d-none");
      }

      window.clearInterval($el.data("cooldownTimer"));
      $el.find("[data-cooldown-ready]").addClass("d-none");
      $el.find("[data-cooldown-wait]").removeClass("d-none");
      paint();

      $el.data(
        "cooldownTimer",
        window.setInterval(function () {
          left -= 1;
          if (left <= 0) finish();
          else paint();
        }, 1000),
      );
    }

    $("[data-cooldown]").each(function () {
      startCooldown($(this));
    });

    $doc.on("click", "[data-cooldown-action]", function () {
      startCooldown($(this).closest("[data-cooldown]"));
    });

    /* ---- notifications ---- */
    $doc.on("click", "[data-action='notif-read-all']", function (e) {
      e.preventDefault();
      var $dd = $(this).closest(".dropdown");
      if (!$dd.length) return;
      $dd.find(".notif-item.unread").removeClass("unread");
      refreshNotif($dd);
    });

    /* ---- modals ---- */
    /* Bootstrap owns the modal component (data-bs-toggle keeps working). These
       add the reusable behaviours a dashboard expects: focus the first field on
       open, and reset the form on close so a reopened dialog is never stale. */
    $doc.on("shown.bs.modal", ".modal", function () {
      $(this)
        .find("[autofocus], .form-control, .form-select")
        .filter(":visible")
        .first()
        .trigger("focus");
    });
    $doc.on("hidden.bs.modal", ".modal", function () {
      $(this)
        .find("form")
        .each(function () {
          this.reset();
          $(this).removeClass("was-validated");
        });
    });

    /* Opt-in submit handling for a dialog form: run the browser's own
       constraint validation, show Bootstrap's field-level feedback, and close
       the owning modal once the form is valid (the hidden.bs.modal handler
       above then resets it). Gated on [data-modal-form] so dialogs that only
       present a layout keep their current behaviour. */
    $doc.on("submit", "form[data-modal-form]", function (e) {
      e.preventDefault();
      var $form = $(this).addClass("was-validated");
      if (!this.checkValidity()) return;
      var el = $form.closest(".modal")[0];
      if (el && window.bootstrap) {
        window.bootstrap.Modal.getOrCreateInstance(el).hide();
      }
    });

    /* The same opt-in for a page-level form: run the browser's own constraint
       validation, surface Bootstrap's field-level feedback, send focus to the
       first control that failed, and reveal the form's own
       [data-validate-success] panel once everything passes. Nothing is posted -
       this is a template, so the confirmation IS the outcome. */
    $doc.on("submit", "form[data-validate]", function (e) {
      e.preventDefault();
      var $form = $(this);
      var $done = $form.find("[data-validate-success]");

      if (!this.checkValidity()) {
        $form.addClass("was-validated");
        $done.addClass("d-none");
        $form.find(":invalid").filter(":visible").first().trigger("focus");
        return;
      }

      $form.removeClass("was-validated");
      $done.removeClass("d-none").attr("tabindex", "-1").trigger("focus");
    });

    /* ======================================================================
       Cryptocurrency Dashboard
       ====================================================================== */
    /* Chart-view toggle (candles / line / area). The .seg-toggle handler above
       is bound first and already owns the button state, so this one does the
       single thing left: ask the chart engine for the new plot. It must NOT
       gate on .active — that class is set by the time this runs. Swapping a
       view the panel already shows is a no-op inside setCryptoView.
       No chart configuration leaks into this file; only the request does. */
    $doc.on("click", "[data-chart-view]", function () {
      if (window.VionexCharts && window.VionexCharts.setCryptoView) {
        window.VionexCharts.setCryptoView($(this).attr("data-chart-view"));
      }
    });

    /* ======================================================================
       Education Dashboard
       ====================================================================== */
    /* Events List — the academic diary as a sortable, filterable table.

       The MARKUP is the source of truth. Every event in the diary is a <tr>
       written into the table, carrying on the row itself the machine-readable
       values its controls need (category, ISO start/end, seats, notes), so what
       a row SHOWS and what it is sorted and filtered BY can never drift apart.

       Nothing here renders the list: filtering and searching only retire rows
       with .d-none, and sorting only re-appends rows that already exist. The one
       place a row appears is a reader adding an event — their own action, never
       demo content — and even then the row is copied from the markup's own first
       row, so its structure still comes from the HTML.

       The dialog is shared with the list: opened empty from the section's New
       Event button, or pre-filled from a row's Edit action. */
    var EDU_EVENT_TINT = {
      lecture: "tint-violet",
      deadline: "tint-rose",
      workshop: "tint-cyan",
      meeting: "tint-blue",
      campus: "tint-emerald",
      holiday: "tint-slate",
    };

    var EDU_EVENT_ICON = {
      lecture: "graduation-cap",
      deadline: "alarm-clock",
      workshop: "flask-conical",
      meeting: "users",
      campus: "party-popper",
      holiday: "palmtree",
    };

    /* The dialog's Type select is the one place a type is NAMED — its options
       carry the key as their value and the label as their text — so the two
       tables above need carry no words, only the tint and the glyph. */
    function eduTypeLabel(key) {
      var $opt = $('#eventType option[value="' + key + '"]').first();
      return $opt.length ? $.trim($opt.text()) : "Event";
    }

    var EDU_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var EDU_MONTHS = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    /* "2026-08-06T14:00:00" -> "Thu 6 Aug". Parsed from the string's own parts
       rather than through Date(string), which reads a bare "YYYY-MM-DD" as UTC
       and would slide the weekday a day for anyone behind it. */
    function eduDayLabel(iso) {
      var d = new Date(
        +iso.slice(0, 4),
        +iso.slice(5, 7) - 1,
        +iso.slice(8, 10),
      );
      return (
        EDU_DAYS[d.getDay()] +
        " " +
        d.getDate() +
        " " +
        EDU_MONTHS[d.getMonth()]
      );
    }

    /* "14:00" from an ISO string that carries a time, "" from one that does not */
    function eduClock(iso) {
      return iso && iso.length > 10 ? iso.slice(11, 16) : "";
    }

    function initEduEvents() {
      var $scope = $("[data-events-scope]").first();
      if (!$scope.length) return;

      var $body = $scope.find("[data-events-body]").first();
      var $count = $scope.find("[data-events-count]").first();
      var $empty = $scope.find("[data-events-empty]").first();

      var modalEl = document.getElementById("eduAddEventModal");
      var $modal = $(modalEl);
      var $form = $modal.find("form").first();

      var filter = "all";
      var query = "";
      var sort = "soonest";
      var $editing =
        null; /* the row the dialog is editing — null for a new one */

      function rows() {
        return $body.children("[data-event-row]");
      }

      var seq = rows().length;

      function titleOf($tr) {
        return $.trim($tr.find("[data-event-title]").text());
      }

      function startOf($tr) {
        return $tr.attr("data-event-start") || "";
      }

      /* a venue-less event shows an em dash, which is not a venue */
      function venueOf($tr) {
        var text = $.trim($tr.find("[data-event-venue]").text());
        return text === "—" ? "" : text;
      }

      /* ---- what is on screen ---- */

      function apply() {
        var q = query.toLowerCase();
        var $all = rows();
        var shown = 0;

        $all.each(function () {
          var $tr = $(this);
          var hay = (titleOf($tr) + " " + venueOf($tr)).toLowerCase();
          var hit =
            (filter === "all" || $tr.attr("data-event-category") === filter) &&
            (!q || hay.indexOf(q) > -1);
          $tr.toggleClass("d-none", !hit);
          if (hit) shown++;
        });

        /* Re-appending MOVES the rows that are already in the table, so sorting
           costs one reflow and never rebuilds a cell. */
        var items = $all.get();
        items.sort(function (a, b) {
          var $a = $(a);
          var $b = $(b);
          if (sort === "title") return titleOf($a).localeCompare(titleOf($b));
          var x = startOf($a);
          var y = startOf($b);
          if (x === y) return 0;
          if (sort === "latest") return x < y ? 1 : -1;
          return x > y ? 1 : -1;
        });
        $body.append(items);

        $empty.toggleClass("d-none", shown > 0);
        if ($count.length) $count.text($all.length);
      }

      function setFilter(key) {
        filter = key;
        $scope.find("[data-events-filter]").each(function () {
          var on = $(this).attr("data-events-filter") === key;
          $(this)
            .toggleClass("active", on)
            .attr("aria-pressed", on ? "true" : "false");
        });
        apply();
      }

      /* ---- one row, read and written in place ---- */

      /* Row -> the record its dialog shows. */
      function readRow($tr) {
        return {
          title: titleOf($tr),
          start: startOf($tr),
          end: $tr.attr("data-event-end") || "",
          category: $tr.attr("data-event-category") || "lecture",
          venue: venueOf($tr),
          seats: $tr.attr("data-event-seats") || "",
          notes: $tr.attr("data-event-notes") || "",
          publish: $tr.attr("data-event-publish") !== "false",
          reminder: $tr.attr("data-event-reminder") !== "false",
        };
      }

      /* Record -> the row that already shows it. Only text, attributes and
         .d-none change here; no cell is ever created. */
      function paintRow($tr, rec) {
        var tint = EDU_EVENT_TINT[rec.category] || "tint-primary";

        $tr.attr("data-event-category", rec.category);
        $tr.attr("data-event-start", rec.start);
        $tr.attr("data-event-notes", rec.notes || "");
        $tr.attr("data-event-publish", rec.publish ? "true" : "false");
        $tr.attr("data-event-reminder", rec.reminder ? "true" : "false");
        if (rec.end) $tr.attr("data-event-end", rec.end);
        else $tr.removeAttr("data-event-end");
        if (rec.seats) $tr.attr("data-event-seats", rec.seats);
        else $tr.removeAttr("data-event-seats");

        var $box = $tr.find("[data-event-icon]");
        $box.attr("class", "icon-box icon-box-sm border-current " + tint);
        /* Lucide keeps data-lucide on the <svg> it drew, so the glyph is
           re-attributed rather than replaced; clearing the class first stops
           lucide-<name> stacking up across edits. */
        $box
          .children()
          .first()
          .removeAttr("class")
          .attr("data-lucide", EDU_EVENT_ICON[rec.category] || "calendar-days");

        $tr.find("[data-event-title]").text(rec.title);
        $tr.find("[data-event-venue]").text(rec.venue || "—");
        $tr
          .find("[data-event-type]")
          .attr("class", "badge-soft text-nowrap " + tint)
          .text(eduTypeLabel(rec.category));
        $tr.find("[data-event-date]").text(eduDayLabel(rec.start));

        var from = eduClock(rec.start);
        var to = eduClock(rec.end);
        $tr
          .find("[data-event-time]")
          .text(from ? (to ? from + " – " + to : from) : "")
          .toggleClass("d-none", !from);
        $tr.find("[data-event-allday]").toggleClass("d-none", !!from);

        $tr.find("[data-event-seats-out]").text(rec.seats ? rec.seats : "—");
        $tr.find("[data-events-edit]").attr("aria-label", "Edit " + rec.title);
        $tr
          .find("[data-events-remove]")
          .attr("aria-label", "Delete " + rec.title);
      }

      /* ---- add / edit dialog ---- */

      function openDialog() {
        if (window.bootstrap) {
          window.bootstrap.Modal.getOrCreateInstance(modalEl).show();
        }
      }

      /* Row -> form. Values are sliced out of the ISO strings rather than parsed
         into Dates, so what goes back out is exactly what came in. */
      function fillForm($tr) {
        $form[0].reset();
        $form.removeClass("was-validated");
        /* the dialog spells both of its wordings in the markup */
        var which = $tr ? "edit" : "new";
        $modal.find("[data-event-label]").each(function () {
          var value = $(this).attr("data-event-label-" + which);
          if (typeof value === "string") $(this).text(value);
        });
        /* Both classes are toggled, not just .d-none: Bootstrap defines
           .d-inline-flex before .d-none but a responsive variant could still
           win, so the flex class comes off with it. */
        $modal
          .find("[data-event-delete]")
          .toggleClass("d-none", !$tr)
          .toggleClass("d-inline-flex", !!$tr);

        if (!$tr) return;

        var rec = readRow($tr);
        $("#eventTitle").val(rec.title);
        $("#eventType").val(rec.category);
        $("#eventDate").val(rec.start.slice(0, 10));
        $("#eventStart").val(eduClock(rec.start));
        $("#eventEnd").val(eduClock(rec.end));
        $("#eventVenue").val(rec.venue);
        $("#eventCapacity").val(rec.seats);
        $("#eventNotes").val(rec.notes);
        $("#eventPublish").prop("checked", rec.publish);
        $("#eventReminder").prop("checked", rec.reminder);
      }

      /* Form -> record. */
      function readForm(prev) {
        var date = $("#eventDate").val();
        var from = $("#eventStart").val();
        var to = $("#eventEnd").val();
        var rec = {
          title: $.trim($("#eventTitle").val()),
          start: from ? date + "T" + from + ":00" : date,
          category: $("#eventType").val() || "lecture",
          venue: $.trim($("#eventVenue").val()),
          seats: $("#eventCapacity").val(),
          notes: $.trim($("#eventNotes").val()),
          publish: $("#eventPublish").prop("checked"),
          reminder: $("#eventReminder").prop("checked"),
        };
        if (from && to) rec.end = date + "T" + to + ":00";
        /* An all-day span (Orientation Week) keeps its end date when the dialog
           is saved without moving the start, so renaming a five-day event can
           never quietly shrink it to one. */ else if (
          !from &&
          prev &&
          prev.end &&
          prev.start === date
        )
          rec.end = prev.end;
        return rec;
      }

      $modal.on("show.bs.modal", function () {
        fillForm($editing);
      });

      $modal.on("hidden.bs.modal", function () {
        $editing = null;
      });

      /* Bound to the form element, so it runs before the shared
         form[data-modal-form] handler delegated on document — which validates,
         closes the dialog and (on hidden) resets the fields this reads. */
      $form.on("submit", function () {
        if (!this.checkValidity()) return; /* the shared handler shows why */

        var $tr = $editing;
        var rec = readForm($tr ? readRow($tr) : null);

        if (!$tr) {
          /* A reader's own event. The row is copied from the markup's first
             row, so even an added event's structure comes from the HTML. */
          var $seedRow = rows().first();
          if (!$seedRow.length) return;
          $tr = $seedRow.clone().removeClass("d-none");
          $tr.attr("data-event-id", "edu-" + ++seq);
          $body.append($tr);
        }

        paintRow($tr, rec);
        drawIcons();

        /* Saving into a category or a search the list is currently narrowed
           away from would look like the save failed, so widen back out. */
        query = "";
        $scope.find("[data-events-search]").val("");
        if (filter !== "all" && rec.category !== filter) setFilter("all");
        else apply();
      });

      $modal.on("click", "[data-event-delete]", function () {
        if ($editing) {
          $editing.remove();
          $editing = null;
          apply();
        }
        if (window.bootstrap) {
          window.bootstrap.Modal.getOrCreateInstance(modalEl).hide();
        }
      });

      /* ---- list controls ---- */

      $scope.on("click", "[data-events-filter]", function () {
        setFilter($(this).attr("data-events-filter"));
      });

      $scope.on(
        "input",
        "[data-events-search]",
        debounce(function () {
          query = $.trim($scope.find("[data-events-search]").val() || "");
          apply();
        }, 150),
      );

      $scope.on("click", "[data-events-sort]", function () {
        sort = $(this).attr("data-events-sort");
        $scope.find("[data-events-sort]").removeClass("active");
        $(this).addClass("active");
        apply();
      });

      $scope.on("click", "[data-events-edit]", function () {
        $editing = $(this).closest("[data-event-row]");
        openDialog();
      });

      $scope.on("click", "[data-events-remove]", function () {
        $(this).closest("[data-event-row]").remove();
        apply();
      });

      apply();
    }

    initEduEvents();

    /* ======================================================================
       Chat App
       ====================================================================== */
    /* A three-pane messenger: the conversation list, the open thread and the
       details panel.

       EVERYTHING this app shows is written in the markup:

         the LIST owns identity — every conversation's name, avatar, presence,
         preview line and unread count live on its own list button, so what the
         list shows and what the thread header shows can never drift apart;

         the THREAD PANE owns the messages — one [data-chat-stream] list per
         conversation, carrying its day dividers, system notes, bubbles, quotes,
         images, attachments, reactions and receipts;

         the DETAILS PANE owns the rest — an about paragraph, a rows list, a
         files list, a media grid and a member list per conversation, plus one
         avatar per conversation in the header and in the pane.

       The markup ships the default conversation already revealed — its list
       row carries .active and none of its parts carry .d-none — so the page is
       a finished screen before this file runs.

       Switching conversation therefore reveals one set and retires the others
       (.d-none); nothing is rendered. The two things that do appear are a
       message the reader sends and a file they attach, and both are stamped
       from the page's own <template> elements — the text is written with
       .text(), so a message someone types is never read as markup.

       The list itself is filtered and searched by the shared
       [data-search-scope] module; this section only reacts to it, so one owner
       still holds .d-none on the rows. */

    function initChatApp() {
      var $scope = $("[data-chat-scope]").first();
      if (!$scope.length) return;

      var $list = $scope.find("[data-chat-list]").first();
      var $scroll = $scope.find("[data-chat-scroll]").first();
      var $input = $scope.find("[data-chat-input]").first();
      var msgTpl = $scope.find("[data-chat-message-template]").first()[0];
      var fileTpl = $scope.find("[data-chat-file-template]").first()[0];
      var listPane = document.getElementById("chatListPane");
      var activeId = "";

      function streamOf(id) {
        return $scope.find('[data-chat-stream="' + id + '"]').first();
      }

      /* the identity a conversation's own list button carries */
      function meta(id) {
        var $btn = $list.find('[data-chat-id="' + id + '"]').first();
        if (!$btn.length) return null;
        return {
          id: id,
          name: $btn.attr("data-chat-name") || "",
          meta: $btn.attr("data-chat-meta") || "",
          type: $btn.attr("data-chat-type") || "direct",
          $btn: $btn,
        };
      }

      /* Reveal the one node in a set that belongs to this conversation and
         retire the rest. Every switchable part of the pane works this way. */
      function reveal(marker, id) {
        var $all = $scope.find("[" + marker + "]");
        $all.each(function () {
          $(this).toggleClass("d-none", $(this).attr(marker) !== id);
        });
        return $all.filter("[" + marker + '="' + id + '"]').first();
      }

      /* a section with nothing in it is removed rather than left as an empty
         heading — the pane is short, and a stub reads as a loading failure */
      function toggleSection(name, count) {
        $scope
          .find('[data-chat-section="' + name + '"]')
          .toggleClass("d-none", !count);
      }

      /* An attachment that has not decoded yet has no height, so the first
         scroll lands short — hold the thread at the newest message until each
         image has reported in. */
      function toBottom() {
        if (!$scroll.length) return;
        $scroll[0].scrollTop = $scroll[0].scrollHeight;
        streamOf(activeId)
          .find("img")
          .one("load", function () {
            $scroll[0].scrollTop = $scroll[0].scrollHeight;
          });
      }

      /* ---- switching ---- */

      function open(id) {
        var rec = meta(id);
        var $stream = streamOf(id);
        if (!rec || !$stream.length) return;
        activeId = id;

        $list.find("[data-chat-id]").each(function () {
          var on = $(this).attr("data-chat-id") === id;
          $(this).toggleClass("active", on);
          if (on) $(this).attr("aria-current", "true");
          else $(this).removeAttr("aria-current");
        });

        /* opening a conversation is what marks it read */
        rec.$btn.find("[data-chat-unread]").remove();
        var $item = rec.$btn.closest("[data-filter-tags]");
        $item.attr(
          "data-filter-tags",
          $.trim(
            ($item.attr("data-filter-tags") || "")
              .replace(/\bunread\b/g, "")
              .replace(/\s+/g, " "),
          ),
        );

        $scope.find('[data-chat-out="name"]').text(rec.name);
        $scope.find('[data-chat-out="meta"]').text(rec.meta);

        reveal("data-chat-stream", id);
        reveal("data-chat-avatar-for", id);
        reveal("data-chat-about-for", id);
        reveal("data-chat-rows-for", id);
        var $files = reveal("data-chat-files-for", id);
        var $media = reveal("data-chat-media-for", id);
        var $members = reveal("data-chat-members-for", id);

        toggleSection("files", $files.children().length);
        toggleSection("media", $media.children().length);
        /* a one-to-one conversation has no roster to show, whatever the markup
           happens to carry */
        toggleSection(
          "members",
          rec.type === "group" ? $members.children().length : 0,
        );

        toBottom();
      }

      /* ---- composing ---- */

      /* 24-hour, so a message sent now is stamped the same way as the ones
         already in the thread rather than switching to a 12-hour clock. */
      function clock() {
        return new Date().toLocaleTimeString(
          document.documentElement.lang || undefined,
          {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          },
        );
      }

      /* Mirror what was just sent back into the list row, so the preview line
         and the timestamp cannot disagree with the thread above them. */
      function echoToList(rec, preview) {
        rec.$btn.find("[data-chat-preview]").text(preview);
        rec.$btn.find("[data-chat-time]").text(clock());
      }

      /* Stamp the page's own message template. `fill` gets the new bubble so a
         caller can put text or an attachment inside it. */
      function push(preview, fill) {
        var rec = meta(activeId);
        var $stream = streamOf(activeId);
        if (!rec || !$stream.length || !msgTpl) return;

        var $li = $(msgTpl.content).children().first().clone();
        fill($li.find(".msg-bubble"));

        /* consecutive messages from the same author are stacked: only the
           first of a run carries the avatar */
        var $last = $stream.children(".msg-row").last();
        if ($last.hasClass("msg-out")) {
          $li
            .find(".avatar")
            .attr("class", "avatar avatar-sm invisible flex-shrink-0")
            .empty();
        }

        /* the time + receipt line under the bubble */
        var $stamp = $li.find("p.fs-xs.text-muted-2").last();
        $stamp.find("bdi").text(clock());
        $stamp.find("i").attr("class", "icon-12").attr("data-lucide", "check");
        $stamp.find(".visually-hidden").text("Sent");

        $stream.append($li);
        echoToList(rec, preview);
        drawIcons();
        toBottom();

        /* the receipt catching up a moment later — the one piece of motion a
           reader expects after pressing send */
        var sent = activeId;
        window.setTimeout(function () {
          if (activeId !== sent) return;
          $stamp
            .find("i")
            .attr("class", "icon-12 text-brand")
            .attr("data-lucide", "check-check");
          $stamp.find(".visually-hidden").text("Read");
          drawIcons();
          toBottom();
        }, 1100);
      }

      function grow(el) {
        el.style.height = "auto";
        el.style.height = el.scrollHeight + "px";
      }

      function readable(bytes) {
        if (bytes >= 1048576) return (bytes / 1048576).toFixed(1) + " MB";
        return Math.max(1, Math.round(bytes / 1024)) + " KB";
      }

      function send() {
        var text = $.trim($input.val() || "");
        if (!text) return;
        push(text, function ($bubble) {
          /* the bubble's paragraph is already in the template */
          $bubble.find("[data-chat-text]").text(text);
        });
        $input.val("");
        grow($input[0]);
      }

      /* ---- events ---- */

      $list.on("click", "[data-chat-id]", function () {
        open($(this).attr("data-chat-id"));
        /* below xl the list is a drawer — picking a conversation closes it */
        if (listPane && window.bootstrap) {
          var drawer = window.bootstrap.Offcanvas.getInstance(listPane);
          if (drawer) drawer.hide();
        }
      });

      $scope.on("submit", "[data-chat-form]", function (e) {
        e.preventDefault();
        send();
      });

      $scope.on("keydown", "[data-chat-input]", function (e) {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          send();
        }
      });

      $scope.on("input", "[data-chat-input]", function () {
        grow(this);
      });

      $scope.on("click", "[data-chat-attach]", function () {
        $scope.find("[data-chat-attach-input]").first().trigger("click");
      });

      $scope.on("change", "[data-chat-attach-input]", function () {
        var files = this.files;
        if (!files || !files.length || !fileTpl) return;
        for (var i = 0; i < files.length; i++) {
          (function (file) {
            push(file.name, function ($bubble) {
              /* an attachment bubble carries no prose, so the template's
                 paragraph steps aside for the row's own template */
              var $row = $(fileTpl.content).children().first().clone();
              $row.find(".fw-semibold").text(file.name);
              $row.find("bdi").text(readable(file.size));
              $bubble.find("[data-chat-text]").remove();
              $bubble.append($row);
            });
          })(files[i]);
        }
        this.value = "";
      });

      /* the shared search/filter module owns .d-none on the rows; a group
         label with nothing left under it retires with them */
      $scope.on("vionex:searched", function () {
        $scope.find("[data-chat-group]").each(function () {
          var $group = $(this);
          $group.toggleClass(
            "d-none",
            $group.find("[data-filter-tags]").not(".d-none").length === 0,
          );
        });
      });

      /* opening conversation: whichever row the markup marked current */
      var $first = $list.find("[data-chat-id].active").first();
      if (!$first.length) $first = $list.find("[data-chat-id]").first();
      if ($first.length) open($first.attr("data-chat-id"));
    }

    initChatApp();

    /* ======================================================================
       Email App
       ====================================================================== */
    /* A mailbox pane beside a surface that switches between the message LIST
       and the READING view, so a thread is read at the full width the page has
       left rather than in a third column.

       EVERYTHING this app shows is written in the markup:

         the LIST owns identity and state — every message's sender, subject,
         preview, timestamp, star and unread state live on its own row, and its
         mailbox and labels are the same [data-filter-tags] tokens the shared
         search module already filters on. Archiving a message is therefore a
         tag change, not a delete, so the pane counts and the Archive folder
         stay in step with no second source of truth;

         the READING pane owns content — one [data-mail-conversation] block per
         thread, carrying its chips, its messages, its attachments and, on the
         block itself, the subject / participant line / reply target the header
         reads. Opening a message reveals its block and retires the rest.

       So nothing here renders a thread. The two things that do appear are a
       reply the reader sends and a file they pick in the compose dialog, and
       both are stamped from the page's own <template> elements rather than
       assembled in script — a body someone types is written with .text() and
       can never be read as markup. The list is filtered and searched by the
       shared [data-search-scope] module and selected by the shared
       [data-bulk-scope] one, so a single owner still holds .d-none on the rows
       and the selection state on the checkboxes. */

    function initEmailApp() {
      var $scope = $("[data-mail-scope]").first();
      if (!$scope.length) return;

      var $list = $scope.find("[data-mail-list]").first();
      var $rows = $list.children("li");
      var $scroll = $scope.find("[data-mail-scroll]").first();
      var $reply = $scope.find("[data-mail-reply-input]").first();
      var $compose = $("#mailComposeModal");
      var folderPane = document.getElementById("mailFolderPane");
      var msgTpl = $scope.find("[data-mail-message-template]").first()[0];
      var attachTpl = $scope.find("[data-mail-attach-template]").first()[0];
      var openId = "";
      var refiltering = false;

      /* the mailboxes a message can sit in — exactly one at a time */
      var MAILBOXES = ["inbox", "sent", "drafts", "archive", "spam", "trash"];

      /* ---- row state ----
         Every piece of a row's state is one of its own filter tags, so the
         shared search module, the pane counts and this section all read the
         same value instead of keeping three copies of it. */

      function tagsOf($li) {
        return " " + $.trim($li.attr("data-filter-tags") || "") + " ";
      }

      function hasTag($li, tag) {
        return tagsOf($li).indexOf(" " + tag + " ") > -1;
      }

      function setTag($li, tag, on) {
        var kept = $.grep(
          $.trim($li.attr("data-filter-tags") || "").split(/\s+/),
          function (t) {
            return t && t !== tag;
          },
        );
        if (on) kept.push(tag);
        $li.attr("data-filter-tags", kept.join(" "));
      }

      function rowOf(id) {
        return $scope
          .find('[data-mail-id="' + id + '"]')
          .first()
          .closest("li");
      }

      function convOf(id) {
        return $scope.find('[data-mail-conversation="' + id + '"]').first();
      }

      /* Unread emphasis is carried by Bootstrap utilities rather than a state
         class of our own: the sender and subject firm up to title ink and the
         marker dot appears. .text-title and .text-body-2 are both !important,
         so they are swapped rather than stacked. */
      function setUnread($li, on) {
        setTag($li, "unread", on);
        $li
          .find("[data-mail-strong]")
          .toggleClass("fw-bold text-title", on)
          .toggleClass("text-body-2", !on);
        $li.find("[data-mail-dot]").toggleClass("d-none", !on);
      }

      /* The star is drawn by filling the same Lucide glyph, so the control
         keeps one icon and one box in both states. */
      function paintStar($btn, on, subject) {
        $btn
          .toggleClass("icon-fill text-cat-amber", on)
          .attr("aria-pressed", on ? "true" : "false")
          .attr(
            "aria-label",
            (on ? "Remove star from this " : "Star this ") + subject,
          );
      }

      function setStar($li, on) {
        setTag($li, "starred", on);
        paintStar($li.find("[data-mail-star]"), on, "message");
      }

      /* Folder and label badges are counted off the rows themselves, so a
         message archived or starred here is reflected in the pane without a
         second source of truth. A mailbox with nothing in it drops its badge
         rather than showing a zero. */
      function counts() {
        $scope.find("[data-mail-count]").each(function () {
          var $badge = $(this);
          var key = $badge.attr("data-mail-count");
          var unreadOnly = $badge.is("[data-mail-count-unread]");
          var n = 0;
          $rows.each(function () {
            var $li = $(this);
            if (hasTag($li, key) && (!unreadOnly || hasTag($li, "unread"))) n++;
          });
          $badge.find("bdi").text(String(n));
          $badge.toggleClass("d-none", n === 0);
        });
      }

      /* Re-run the shared search/filter module over the tags as they now are.
         The flag keeps the folder-click handler below out of it, so a refilter
         never reads as the visitor changing mailbox. */
      function refilter() {
        refiltering = true;
        $scope.find("[data-filter].active").first().trigger("click");
        refiltering = false;
      }

      function clearSelection() {
        $scope.find("[data-bulk-clear]").first().trigger("click");
      }

      /* ---- reading view ---- */

      function showView(name) {
        $scope.find("[data-mail-view]").each(function () {
          $(this).toggleClass(
            "d-none",
            $(this).attr("data-mail-view") !== name,
          );
        });
      }

      function openMail(id) {
        var $conv = convOf(id);
        var $li = rowOf(id);
        if (!$conv.length || !$li.length) return;
        openId = id;

        /* opening a message is what marks it read */
        setUnread($li, false);
        counts();

        /* reveal this conversation's own block and retire the others */
        $scope.find("[data-mail-conversation]").each(function () {
          $(this).toggleClass(
            "d-none",
            $(this).attr("data-mail-conversation") !== id,
          );
        });

        $scope
          .find('[data-mail-out="subject"]')
          .text($conv.attr("data-mail-subject") || "");
        $scope
          .find('[data-mail-out="meta"]')
          .text($conv.attr("data-mail-meta") || "");
        $scope
          .find('[data-mail-out="reply-to"]')
          .text($conv.attr("data-mail-reply-to") || "");

        paintStar(
          $scope.find('[data-mail-view="read"] [data-mail-star]'),
          hasTag($li, "starred"),
          "conversation",
        );

        showView("read");
        if ($scroll.length) $scroll[0].scrollTop = 0;
        $reply.val("");
        grow($reply[0]);
      }

      function backToList() {
        openId = "";
        showView("list");
      }

      /* move one message to another mailbox — the tag change IS the move */
      function moveTo($li, box) {
        $.each(MAILBOXES, function (_, name) {
          setTag($li, name, false);
        });
        setTag($li, box, true);
      }

      /* ---- composing ---- */

      function grow(el) {
        if (!el) return;
        el.style.height = "auto";
        el.style.height = el.scrollHeight + "px";
      }

      /* 24-hour, so a reply sent now is stamped the way the thread above it is
         rather than switching to a 12-hour clock */
      function stamp() {
        return (
          "Today " +
          new Date().toLocaleTimeString(
            document.documentElement.lang || undefined,
            {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            },
          )
        );
      }

      function readable(bytes) {
        if (bytes >= 1048576) return (bytes / 1048576).toFixed(1) + " MB";
        return Math.max(1, Math.round(bytes / 1024)) + " KB";
      }

      function renderPicked(files) {
        var $host = $compose.find("[data-mail-attach-list]").first().empty();
        var count = files ? files.length : 0;
        var i;
        $host.toggleClass("d-none", count === 0);
        if (!attachTpl) return;
        for (i = 0; i < count; i++) {
          /* the row's shape comes from the page's own <template>; in the dialog
             the file has not been sent yet, so its download link is inert */
          var $li = $(attachTpl.content).children().first().clone();
          var $link = $li.find("a");
          $link
            .removeAttr("href")
            .removeAttr("aria-label")
            .removeClass("transition-base");
          $link.find("[data-lucide='download']").remove();
          $link.find("[data-mail-file-name]").text(files[i].name);
          $link.find("[data-mail-file-meta]").text(readable(files[i].size));
          $host.append($li);
        }
        drawIcons();
      }

      /* ---- events ---- */

      $scope.on("click", "[data-mail-id]", function () {
        openMail($(this).attr("data-mail-id"));
      });

      $scope.on("click", "[data-mail-back]", backToList);

      $scope.on(
        "click",
        '[data-mail-view="list"] [data-mail-star]',
        function () {
          var $li = $(this).closest("li");
          setStar($li, !hasTag($li, "starred"));
          counts();
          refilter();
        },
      );

      $scope.on(
        "click",
        '[data-mail-view="read"] [data-mail-star]',
        function () {
          if (!openId) return;
          var $li = rowOf(openId);
          var on = !hasTag($li, "starred");
          setStar($li, on);
          paintStar($(this), on, "conversation");
          counts();
        },
      );

      /* Sorting only reorders nodes, so it never touches .d-none and can never
         disagree with the filter running over the same rows. */
      $scope.on("click", "[data-mail-sort]", function () {
        var mode = $(this).attr("data-mail-sort");
        var items = $rows.get();
        items.sort(function (a, b) {
          var $a = $(a);
          var $b = $(b);
          if (mode === "unread") {
            var ua = hasTag($a, "unread") ? 0 : 1;
            var ub = hasTag($b, "unread") ? 0 : 1;
            if (ua !== ub) return ua - ub;
          }
          var oa = parseInt($a.attr("data-mail-order"), 10) || 0;
          var ob = parseInt($b.attr("data-mail-order"), 10) || 0;
          return mode === "oldest" ? ob - oa : oa - ob;
        });
        $list.append(items);
      });

      $scope.on("click", "[data-mail-action]", function () {
        var action = $(this).attr("data-mail-action");
        var $picked = $scope.find("[data-bulk-item]:checked").closest("li");
        var $open = openId ? rowOf(openId) : $();

        if (action === "read" || action === "unread") {
          $picked.each(function () {
            setUnread($(this), action === "unread");
          });
        } else if (action === "archive" || action === "delete") {
          $picked.each(function () {
            moveTo($(this), action === "archive" ? "archive" : "trash");
          });
        } else if (action === "read-all") {
          $rows.each(function () {
            setUnread($(this), false);
          });
        } else if (action === "select-unread" || action === "select-starred") {
          var tag = action === "select-unread" ? "unread" : "starred";
          $scope.find("[data-bulk-item]").each(function () {
            var $li = $(this).closest("li");
            $(this).prop(
              "checked",
              hasTag($li, tag) && !$li.hasClass("d-none"),
            );
          });
          $scope.find("[data-bulk-item]").first().trigger("change");
          return;
        } else if (action === "select-none") {
          clearSelection();
          return;
        } else if (action === "archive-open" || action === "delete-open") {
          if (!$open.length) return;
          moveTo($open, action === "archive-open" ? "archive" : "trash");
          backToList();
        } else if (action === "unread-open") {
          if (!$open.length) return;
          setUnread($open, true);
          backToList();
        } else if (action === "forward") {
          /* the quoted header and body are read back off the conversation the
             reader is looking at, so a forward can never quote a thread the
             page is not showing */
          var $conv = openId ? convOf(openId) : $();
          if (!$conv.length || !$compose.length || !window.bootstrap) return;
          var $first = $conv.find("[data-mail-message]").first();
          var $lastBody = $conv
            .find("[data-mail-message]")
            .last()
            .find("[data-mail-body]");
          var paras = [];
          $lastBody.children("p").each(function () {
            paras.push($(this).text());
          });
          $compose
            .find("#mailComposeSubject")
            .val("Fwd: " + ($conv.attr("data-mail-subject") || ""));
          $compose
            .find("#mailComposeBody")
            .val(
              "---------- Forwarded message ----------\nFrom: " +
                $.trim($first.find("[data-mail-from-name]").text()) +
                " <" +
                $.trim($first.find("[data-mail-from-email]").text()) +
                ">\nSubject: " +
                ($conv.attr("data-mail-subject") || "") +
                "\n\n" +
                paras.join("\n\n"),
            );
          window.bootstrap.Modal.getOrCreateInstance($compose[0]).show();
          return;
        } else if (action === "print") {
          window.print();
          return;
        }

        clearSelection();
        counts();
        refilter();
      });

      /* The heading follows the mailbox the visitor picked, and below xl the
         pane is a drawer, so choosing a folder closes it. */
      $scope.on("click", "[data-filter]", function () {
        if (refiltering) return;
        var name = $.trim($(this).find("[data-mail-label]").first().text());
        if (name) $scope.find('[data-mail-out="folder"]').text(name);
        backToList();
        clearSelection();
        if (folderPane && window.bootstrap) {
          var drawer = window.bootstrap.Offcanvas.getInstance(folderPane);
          if (drawer) drawer.hide();
        }
      });

      /* The shared selection module checks every row in the DOM; rows the
         current filter has hidden must not join that selection, so they are
         dropped once it has run — hence the document-level binding, which
         fires after the module's own scope-level one. */
      $doc.on("change", "[data-mail-scope] [data-bulk-all]", function () {
        var $hidden = $list
          .children("li.d-none")
          .find("[data-bulk-item]:checked");
        if (!$hidden.length) return;
        $hidden.prop("checked", false);
        $scope.find("[data-bulk-item]").first().trigger("change");
      });

      $scope.on("click", "[data-mail-focus-reply]", function () {
        $reply.trigger("focus");
      });

      $scope.on("input", "[data-mail-reply-input]", function () {
        grow(this);
      });

      /* Enter is a newline here rather than a send: an email reply is a
         document, not a chat message. */
      $scope.on("submit", "[data-mail-reply]", function (e) {
        e.preventDefault();
        var $conv = openId ? convOf(openId) : $();
        var text = $.trim($reply.val() || "");
        if (!$conv.length || !text || !msgTpl) return;

        var $thread = $conv.find("[data-mail-thread]").first();
        var index = $thread.children("[data-mail-message]").length;
        var bodyId = "mailBody-" + openId + "-reply-" + index;

        /* the message's shape comes from the page's own <template> */
        var $li = $(msgTpl.content).children().first().clone();
        $li
          .find("[data-bs-toggle='collapse']")
          .attr("data-bs-target", "#" + bodyId)
          .attr("aria-controls", bodyId)
          .attr("aria-expanded", "true");
        $li.find(".collapse").attr("id", bodyId).addClass("show");
        $li.find("[data-mail-time]").text(stamp());
        $li.find("[data-mail-to]").text($conv.attr("data-mail-reply-to") || "");

        /* one paragraph per block the reader typed, each a copy of the
           template's own paragraph rather than a <p> assembled here */
        var $body = $li.find("[data-mail-body]");
        var $proto = $body.children("p").first();
        var paras = text.split(/\n{2,}/);
        $body.empty();
        $.each(paras, function (i, para) {
          $body.append(
            $proto
              .clone()
              .attr(
                "class",
                "fs-md " + (i === paras.length - 1 ? "mb-0" : "mb-2"),
              )
              .text(para),
          );
        });

        /* only the newest message is left open */
        $thread.find(".collapse").removeClass("show");
        $thread
          .find("[data-bs-toggle='collapse']")
          .attr("aria-expanded", "false");
        $thread.append($li);

        /* the participant line counts what the thread now holds */
        var n = $thread.children("[data-mail-message]").length;
        var names = [];
        $thread.find("[data-mail-from-name]").each(function () {
          var name = $.trim($(this).text());
          if ($.inArray(name, names) < 0) names.push(name);
        });
        $conv.attr(
          "data-mail-meta",
          (n === 1 ? "1 message" : n + " messages") + " · " + names.join(", "),
        );
        $scope
          .find('[data-mail-out="meta"]')
          .text($conv.attr("data-mail-meta"));

        $reply.val("");
        grow($reply[0]);
        drawIcons();
        if ($scroll.length) $scroll[0].scrollTop = $scroll[0].scrollHeight;
      });

      $compose.on("click", "[data-mail-attach]", function () {
        $compose.find("[data-mail-attach-input]").first().trigger("click");
      });

      $compose.on("change", "[data-mail-attach-input]", function () {
        renderPicked(this.files);
      });

      /* the shared modal handler resets the form on close; the picked files
         are markup rather than form state, so they are cleared here */
      $compose.on("hidden.bs.modal", function () {
        renderPicked(null);
      });

      /* the counts in the markup are a starting point; the rows are the truth */
      counts();
    }

    initEmailApp();

    /* ======================================================================
       Calendar App
       ====================================================================== */
    /* The jQuery half of the calendar page: the toolbar, the navigator pane and
       the event dialog. FullCalendar itself — every option, the event store and
       the drag/resize wiring — lives in assets/js/calendar.js, on the same rule
       that keeps ApexCharts in charts.js and jsVectorMap in maps.js: one
       library per module. This section only ASKS that module to do things,
       through window.VionexCalendar, and reacts to the CustomEvents it
       dispatches on the document; nothing here knows what a FullCalendar view
       object is, and no calendar option is written here.

       One dialog serves three jobs — read an event, edit it, add a new one —
       by swapping two panels rather than stacking modals, so there is a single
       form to keep correct and a single place the categories are named. */

    var CAL_CATEGORY_DOT = {
      work: "bg-cat-violet",
      meeting: "bg-cat-blue",
      personal: "bg-cat-emerald",
      deadline: "bg-cat-rose",
      travel: "bg-cat-amber",
      holiday: "bg-cat-cyan",
    };

    var CAL_CATEGORY_TINT = {
      work: "tint-violet",
      meeting: "tint-blue",
      personal: "tint-emerald",
      deadline: "tint-rose",
      travel: "tint-amber",
      holiday: "tint-cyan",
    };

    /* Only the details panel needs a category's NAME, and the dialog's own
       Category select already spells every one of them — so it is asked rather
       than copied. The two tables above carry no words, only the dot and the
       tint each category wears. */
    function calCategoryLabel(key) {
      var $opt = $('#calEventCategory option[value="' + key + '"]').first();
      return $opt.length ? $.trim($opt.text()) : "Event";
    }

    function initCalendarApp() {
      var $scope = $("[data-cal-scope]").first();
      if (!$scope.length) return;

      var modalEl = document.getElementById("calendarEventModal");
      var $modal = $(modalEl);
      var $form = $modal.find("form").first();
      var sidePane = document.getElementById("calendarSidePane");
      var viewingId = null; /* the event the details panel is showing */
      var editingId =
        null; /* the event the form is editing — null for a new one */

      /* the engine module; absent only if fullcalendar.min.js failed to load */
      function api() {
        return window.VionexCalendar;
      }

      function openDialog() {
        if (window.bootstrap)
          window.bootstrap.Modal.getOrCreateInstance(modalEl).show();
      }

      function closeDialog() {
        if (window.bootstrap)
          window.bootstrap.Modal.getOrCreateInstance(modalEl).hide();
      }

      /* ---- dates ----
         The store speaks FullCalendar's dialect, where an all-day span ends on
         the morning AFTER its last day. The dialog asks for the last day
         itself, so the ±1 conversion lives here and nowhere else. */

      function pad2(n) {
        return (n < 10 ? "0" : "") + n;
      }

      function shiftDay(date, days) {
        var d = new Date(date + "T00:00:00");
        d.setDate(d.getDate() + days);
        return (
          d.getFullYear() +
          "-" +
          pad2(d.getMonth() + 1) +
          "-" +
          pad2(d.getDate())
        );
      }

      function localValue(d) {
        return (
          d.getFullYear() +
          "-" +
          pad2(d.getMonth() + 1) +
          "-" +
          pad2(d.getDate()) +
          "T" +
          pad2(d.getHours()) +
          ":" +
          pad2(d.getMinutes()) +
          ":00"
        );
      }

      /* "New event" pressed with nothing selected on the grid still opens on
         something usable: today, at the next half hour, running for an hour. */
      function defaultSlot() {
        var start = new Date();
        start.setMinutes(start.getMinutes() > 30 ? 60 : 30, 0, 0);
        return {
          start: localValue(start),
          end: localValue(new Date(start.getTime() + 3600000)),
          allDay: false,
        };
      }

      /* a store value is either "YYYY-MM-DD" or "YYYY-MM-DDTHH:MM:SS" */
      function parseValue(value) {
        return new Date(value.length > 10 ? value : value + "T00:00:00");
      }

      function fmtDate(d) {
        return d.toLocaleDateString(
          document.documentElement.lang || undefined,
          {
            weekday: "long",
            day: "numeric",
            month: "long",
          },
        );
      }

      function fmtTime(d) {
        return d.toLocaleTimeString(
          document.documentElement.lang || undefined,
          {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          },
        );
      }

      function whenText(rec) {
        var start = parseValue(rec.start);
        var end = rec.end ? parseValue(rec.end) : null;

        if (rec.allDay) {
          /* back to the last day a person would name */
          var last = rec.end
            ? parseValue(shiftDay(rec.end.slice(0, 10), -1))
            : start;
          return (
            fmtDate(start) +
            (last > start ? " – " + fmtDate(last) : "") +
            " · All day"
          );
        }
        if (!end) return fmtDate(start) + " · " + fmtTime(start);
        if (end.toDateString() === start.toDateString()) {
          return fmtDate(start) + " · " + fmtTime(start) + " – " + fmtTime(end);
        }
        return (
          fmtDate(start) +
          " " +
          fmtTime(start) +
          " – " +
          fmtDate(end) +
          " " +
          fmtTime(end)
        );
      }

      /* ---- panels ---- */

      function showPanel(name, mode) {
        $modal.find("[data-cal-panel]").each(function () {
          $(this).toggleClass(
            "d-none",
            $(this).attr("data-cal-panel") !== name,
          );
        });
        /* the dialog spells all three of its wordings in the markup */
        var which = name === "view" ? "view" : mode === "edit" ? "edit" : "new";
        $modal.find("[data-cal-label-" + which + "]").each(function () {
          $(this).text($(this).attr("data-cal-label-" + which));
        });
      }

      function showDetails(rec) {
        viewingId = rec.id;
        $modal.find('[data-cal-out="title"]').text(rec.title);
        $modal.find('[data-cal-out="when"]').text(whenText(rec));
        $modal
          .find('[data-cal-out="category"]')
          .attr(
            "class",
            "badge-soft " + (CAL_CATEGORY_TINT[rec.category] || "tint-primary"),
          )
          .text(calCategoryLabel(rec.category));

        /* a row with nothing in it is dropped rather than left showing a dash */
        $modal
          .find('[data-cal-row="location"]')
          .toggleClass("d-none", !rec.location)
          .find('[data-cal-out="location"]')
          .text(rec.location);
        $modal
          .find('[data-cal-row="description"]')
          .toggleClass("d-none", !rec.description)
          .find('[data-cal-out="description"]')
          .text(rec.description);
      }

      /* ---- form ---- */

      /* Store record -> form. `slot` is the range dragged out on the grid when
         there is no record yet, so a new event opens already scoped to what the
         visitor selected. */
      function fillForm(rec, slot) {
        $form[0].reset();
        $form.removeClass("was-validated");
        editingId = rec ? rec.id : null;

        var allDay = rec ? rec.allDay : !!(slot && slot.allDay);
        var start = (rec && rec.start) || (slot && slot.start) || "";
        var end = (rec && rec.end) || (slot && slot.end) || "";
        var startDay = start ? start.slice(0, 10) : "";
        var endDay = end ? end.slice(0, 10) : startDay;

        $("#calEventTitle").val(rec ? rec.title : "");
        $("#calEventCategory").val(rec ? rec.category : "work");
        $("#calEventLocation").val(rec ? rec.location : "");
        $("#calEventNotes").val(rec ? rec.description : "");
        $("#calEventAllDay").prop("checked", allDay);

        $("#calEventStartDate").val(startDay);
        $("#calEventEndDate").val(
          allDay && end ? shiftDay(endDay, -1) : endDay,
        );
        $("#calEventStartTime").val(
          !allDay && start.length > 10 ? start.slice(11, 16) : "",
        );
        $("#calEventEndTime").val(
          !allDay && end.length > 10 ? end.slice(11, 16) : "",
        );

        syncAllDay();
        syncDot();
      }

      /* Form -> store record. */
      function readForm() {
        var allDay = $("#calEventAllDay").prop("checked");
        var startDay = $("#calEventStartDate").val();
        var endDay = $("#calEventEndDate").val() || startDay;
        var startTime = $("#calEventStartTime").val();
        var endTime = $("#calEventEndTime").val();

        var rec = {
          id: editingId,
          title: $.trim($("#calEventTitle").val()),
          category: $("#calEventCategory").val(),
          location: $.trim($("#calEventLocation").val()),
          description: $.trim($("#calEventNotes").val()),
          allDay: allDay,
        };

        if (allDay) {
          rec.start = startDay;
          /* exclusive again, so a single-day event ends the next morning */
          rec.end = shiftDay(endDay, 1);
        } else {
          rec.start = startTime ? startDay + "T" + startTime + ":00" : startDay;
          rec.end = endTime ? endDay + "T" + endTime + ":00" : null;
        }
        return rec;
      }

      /* An event that ends before it starts is refused by the browser's own
         validation rather than silently corrected, so the visitor is told
         which field is wrong. The message is cleared on every pass, otherwise
         a fixed range would stay stuck as invalid. */
      function validateRange() {
        var endDate = document.getElementById("calEventEndDate");
        var endTime = document.getElementById("calEventEndTime");
        endDate.setCustomValidity("");
        endTime.setCustomValidity("");

        var rec = readForm();
        if (!rec.start || !rec.end) return;
        if (parseValue(rec.end) > parseValue(rec.start)) return;

        var sameDay =
          $("#calEventStartDate").val() === $("#calEventEndDate").val();
        var target =
          !rec.allDay && sameDay && $("#calEventEndTime").val()
            ? endTime
            : endDate;
        target.setCustomValidity("The event has to end after it starts.");
      }

      function syncAllDay() {
        var on = $("#calEventAllDay").prop("checked");
        $modal.find("[data-cal-time-field]").toggleClass("d-none", on);
        /* a hidden control must not hold the form back */
        $("#calEventStartTime").prop("required", !on);
        validateRange();
      }

      function syncDot() {
        var key = $("#calEventCategory").val();
        $modal
          .find("[data-cal-cat-dot]")
          .attr(
            "class",
            "legend-dot flex-shrink-0 " +
              (CAL_CATEGORY_DOT[key] || "bg-cat-brand"),
          );
      }

      /* ---- delete, in two presses ----
         A destructive action inside a dialog has nowhere to put a confirmation
         of its own, so the button carries it: the first press arms it, the
         second one deletes. It disarms on a timeout and whenever the dialog
         closes, so it can never be left armed. */
      function armDelete(on) {
        var $btn = $modal.find("[data-cal-delete]");
        $btn
          .data("armed", !!on)
          .toggleClass("btn-danger", !!on)
          .toggleClass("btn-outline-soft hover-danger", !on);
        $btn.find("[data-cal-delete-label]").toggleClass("d-none", !!on);
        $btn.find("[data-cal-delete-confirm]").toggleClass("d-none", !on);
        if (!on) window.clearTimeout($btn.data("armTimer"));
      }

      /* ---- what the engine tells us ---- */

      $doc.on("vionex:calendar:dates", function (e) {
        var detail = e.originalEvent.detail;
        $scope.find("[data-cal-title]").text(detail.title);
        $scope.find("[data-cal-view]").each(function () {
          var on = $(this).attr("data-cal-view") === detail.view;
          $(this)
            .toggleClass("active", on)
            .attr("aria-pressed", on ? "true" : "false");
        });
        /* below xl the navigator is a drawer, so picking a date in it closes it */
        if (sidePane && window.bootstrap) {
          var drawer = window.bootstrap.Offcanvas.getInstance(sidePane);
          if (drawer) drawer.hide();
        }
      });

      $doc.on("vionex:calendar:mini", function (e) {
        $scope.find("[data-cal-mini-title]").text(e.originalEvent.detail.title);
      });

      $doc.on("vionex:calendar:store", function (e) {
        var detail = e.originalEvent.detail;
        var counts = detail.counts || {};
        var hidden = detail.hidden || {};
        $scope.find("[data-cal-cat-count]").each(function () {
          var key = $(this).attr("data-cal-cat-count");
          $(this)
            .find("bdi")
            .text(String(counts[key] || 0));
        });
        /* the engine turns a category back on when an event is saved into it,
           so the controls follow the store rather than the other way round */
        $scope.find("[data-cal-category]").each(function () {
          $(this).prop("checked", !hidden[$(this).attr("data-cal-category")]);
        });
      });

      /* a range dragged out on an empty part of the grid opens a new event */
      $doc.on("vionex:calendar:slot", function (e) {
        fillForm(null, e.originalEvent.detail);
        showPanel("edit", "new");
        openDialog();
      });

      $doc.on("vionex:calendar:event", function (e) {
        var rec = api() && api().get(e.originalEvent.detail.id);
        if (!rec) return;
        showDetails(rec);
        showPanel("view");
        openDialog();
      });

      /* ---- toolbar & navigator ---- */

      $scope.on("click", "[data-cal-nav]", function () {
        if (api()) api().go($(this).attr("data-cal-nav"));
      });

      $scope.on("click", "[data-cal-view]", function () {
        if (api()) api().setView($(this).attr("data-cal-view"));
      });

      $scope.on("click", "[data-cal-mini-nav]", function () {
        if (api()) api().moveMini($(this).attr("data-cal-mini-nav"));
      });

      $scope.on("click", "[data-cal-new]", function () {
        fillForm(null, defaultSlot());
        showPanel("edit", "new");
        openDialog();
      });

      $scope.on("change", "[data-cal-category]", function () {
        if (api())
          api().setCategory(
            $(this).attr("data-cal-category"),
            $(this).prop("checked"),
          );
      });

      /* ---- dialog ---- */

      $modal.on("click", "[data-cal-edit]", function () {
        var rec = viewingId && api() ? api().get(viewingId) : null;
        if (!rec) return;
        fillForm(rec, null);
        showPanel("edit", "edit");
      });

      $modal.on("click", "[data-cal-delete]", function () {
        var $btn = $(this);
        if (!$btn.data("armed")) {
          armDelete(true);
          $btn.data(
            "armTimer",
            window.setTimeout(function () {
              armDelete(false);
            }, 4000),
          );
          return;
        }
        if (viewingId && api()) api().remove(viewingId);
        closeDialog();
      });

      $modal.on("change", "#calEventAllDay", syncAllDay);
      $modal.on("change", "#calEventCategory", syncDot);

      $modal.on("change", "#calEventStartDate", function () {
        var $end = $("#calEventEndDate");
        $end.attr("min", $(this).val());
        if (!$end.val()) $end.val($(this).val());
        validateRange();
      });

      $modal.on(
        "change",
        "#calEventEndDate, #calEventStartTime, #calEventEndTime",
        validateRange,
      );

      /* Bound to the form element, so it runs before the shared
         form[data-modal-form] handler delegated on document — which validates,
         closes the dialog and (on hidden) resets the fields this reads. */
      $form.on("submit", function () {
        validateRange();
        if (!this.checkValidity()) return; /* the shared handler shows why */
        if (api()) api().save(readForm());
      });

      $modal.on("hidden.bs.modal", function () {
        editingId = null;
        viewingId = null;
        armDelete(false);
      });

      /* The engine builds on DOMContentLoaded, which runs before this ready
         callback, so its opening announcements have already been made. Ask for
         them again now that the listeners above are in place. */
      if (api() && api().publish) api().publish();
    }

    initCalendarApp();

    /* ======================================================================
       Tasks App
       ====================================================================== */
    /* A task manager whose LIST and BOARD are two views of the same markup.

       Every task in the backlog is written into the page twice — once as a row
       in the list and once as a card in its board column — and each carries the
       machine-readable values its controls need on the row itself (status,
       priority, project, assignee, due offset). The ROW is the record: the card
       is read and painted through its id, so the two can never disagree.

       Nothing here renders a task. Filtering and searching only retire nodes
       with .d-none; sorting only re-appends the nodes that already exist; a
       status change MOVES a card into another column. The one task that is not
       in the markup is one the reader creates, and even that is stamped from the
       page's own <template data-task-row-template> / -card-template rather than
       assembled in script.

       The two tables below carry no words at all — only the tint, dot, icon and
       ink each status and priority wears, plus the rank they sort by. Every
       LABEL a control writes (a status name, a project name, a person's name,
       a view heading, a sort name, the dialog's two wordings) is read back out
       of the markup that already spells it, so there is one copy of each. */
    var TASK_STATUS = {
      todo: { tint: "tint-slate", icon: "circle-dashed", rank: 0 },
      progress: { tint: "tint-blue", icon: "circle-dot-dashed", rank: 1 },
      review: { tint: "tint-amber", icon: "eye", rank: 2 },
      done: { tint: "tint-emerald", icon: "circle-check-big", rank: 3 },
    };

    /* Priority carries three presentations: the pill it wears, the dot that
       leads its row and the ink the board card's edge is drawn in. */
    var TASK_PRIORITY = {
      urgent: {
        tint: "tint-danger",
        dot: "bg-cat-red",
        ink: "text-cat-red",
        rank: 0,
      },
      high: {
        tint: "tint-amber",
        dot: "bg-cat-amber",
        ink: "text-cat-amber",
        rank: 1,
      },
      medium: {
        tint: "tint-blue",
        dot: "bg-cat-blue",
        ink: "text-cat-blue",
        rank: 2,
      },
      low: {
        tint: "tint-slate",
        dot: "bg-cat-slate",
        ink: "text-cat-slate",
        rank: 3,
      },
    };

    /* Local "YYYY-MM-DD", `offset` days from today. Each row in the markup
       carries a due OFFSET rather than a fixed date, which is what keeps the
       backlog readable however long after the build the template is opened —
       something is always due today, something is always overdue. Resolving an
       offset to a date is a calculation, like the live clock's, not content. */
    function taskDay(offset) {
      var d = new Date();
      d.setHours(0, 0, 0, 0);
      d.setDate(d.getDate() + (offset || 0));
      var month = d.getMonth() + 1;
      var day = d.getDate();
      return (
        d.getFullYear() +
        "-" +
        (month < 10 ? "0" : "") +
        month +
        "-" +
        (day < 10 ? "0" : "") +
        day
      );
    }

    /* Back to a LOCAL midnight, parsed from the string's own parts: passing a
       bare "YYYY-MM-DD" to Date() reads it as UTC and slides the day for anyone
       behind it. */
    function taskDate(iso) {
      return new Date(
        +iso.slice(0, 4),
        +iso.slice(5, 7) - 1,
        +iso.slice(8, 10),
      );
    }

    /* Whole days from today; negative means overdue. */
    function taskDaysOut(iso) {
      var today = new Date();
      today.setHours(0, 0, 0, 0);
      return Math.round((taskDate(iso) - today) / 86400000);
    }

    /* Formatting is delegated to Intl through the document's own `lang`, like
       the live clock above, so the dates follow the page rather than carrying a
       hardcoded English format. */
    function taskDateText(iso, long) {
      return taskDate(iso).toLocaleDateString(
        document.documentElement.lang || undefined,
        {
          weekday: long ? "long" : "short",
          day: "numeric",
          month: long ? "long" : "short",
        },
      );
    }

    /* "Today" / "Tomorrow" / "Yesterday" beat a date the reader has to work
       out — and nothing at all for a date far enough away that the weekday
       says it better. */
    function taskDueRelative(iso) {
      var out = taskDaysOut(iso);
      if (out === 0) return "Today";
      if (out === 1) return "Tomorrow";
      if (out === -1) return "Yesterday";
      return "";
    }

    function taskDueLabel(iso) {
      return taskDueRelative(iso) || taskDateText(iso, false);
    }

    function initTasksApp() {
      var $scope = $("[data-task-scope]").first();
      if (!$scope.length) return;

      var $list = $scope.find("[data-task-list]").first();
      var $listEmpty = $scope.find('[data-task-empty="list"]').first();
      var detailEl = document.getElementById("taskDetailPane");
      var $detail = $(detailEl);
      var modalEl = document.getElementById("taskFormModal");
      var $modal = $(modalEl);
      var $form = $modal.find("form").first();
      /* the three roots the [data-task-out] writers reach across */
      var $ctx = $scope.add($modal).add($detail);

      /* the two templates sit beside the workspace, not inside it */
      var rowTpl = $("[data-task-row-template]").first()[0];
      var cardTpl = $("[data-task-card-template]").first()[0];
      var subTpl = $detail.find("[data-task-subtask-template]").first()[0];
      var subsTpl = $detail.find("[data-task-subtasks-template]").first()[0];
      var $subHost = $detail.find("[data-task-subtasks]").first();

      /* ---- the words, read back out of the markup that spells them ----
         The dialog's own <select>s already list every status, project and
         person by name, so a control that repaints a row asks them rather than
         carrying a second copy of the same strings. */
      function optionOf(selectId, value) {
        return $("#" + selectId)
          .children('option[value="' + value + '"]')
          .first();
      }

      function statusLabel(key) {
        return $.trim(optionOf("taskFormStatus", key).text());
      }

      function priorityLabel(key) {
        return $.trim(optionOf("taskFormPriority", key).text());
      }

      function projectLabel(key) {
        return $.trim(optionOf("taskFormProject", key).text());
      }

      /* A photo where the roster gives one, initials on a gradient otherwise —
         both shapes are already in every avatar in the markup, so switching
         assignee reveals one and retires the other. */
      function personOf(key) {
        var $opt = optionOf("taskFormAssignee", key);
        if (!$opt.length)
          $opt = $("#taskFormAssignee").children("option").first();
        return {
          name: $.trim($opt.text()),
          avatar: $opt.attr("data-task-avatar-src") || "",
          initials: $opt.attr("data-task-initials") || "",
          tint: $opt.attr("data-task-tint") || "bg-grad-3",
        };
      }

      /* the navigator button and the sort menu item each carry their own name */
      function viewLabel(key) {
        return $.trim(
          $scope
            .find('[data-task-view="' + key + '"]')
            .find("span")
            .first()
            .text(),
        );
      }

      function sortLabel(key) {
        return $.trim(
          $scope
            .find('[data-task-sort="' + key + '"]')
            .first()
            .text(),
        );
      }

      /* The drawer's placeholders — "No description yet.", the em dash a task
         with no project shows — are the text those nodes already carry, so
         they are remembered from the markup rather than repeated here. */
      var restingText = {};
      $detail.find("[data-task-out]").each(function () {
        restingText[$(this).attr("data-task-out")] = $.trim($(this).text());
      });

      /* a node that spells both of its wordings picks the one that applies */
      function pickLabel(key, which) {
        $ctx.find('[data-task-out="' + key + '"]').each(function () {
          var value = $(this).attr("data-task-label-" + which);
          if (typeof value === "string") $(this).text(value);
        });
      }

      var view = "all";
      var project = "all";
      var priority = "all";
      var assignee = "all";
      var sort = "due";
      var query = "";
      var editingId = null; /* record open in the dialog */
      var openId = null; /* record open in the drawer */
      var newStatus = "todo"; /* column a "New task" button pre-selects */
      var $armed = null; /* the delete control waiting for its second press */
      var seq = 0;

      /* ---- the markup, addressed ---- */

      function rows() {
        return $list.children("[data-task-row]");
      }

      function rowOf(id) {
        return $list.children('[data-task-row="' + id + '"]').first();
      }

      function cardOf(id) {
        return $scope.find('[data-task-card="' + id + '"]').first();
      }

      function subsOf(id) {
        return $subHost
          .children('[data-task-subtasks-for="' + id + '"]')
          .first();
      }

      function colOf(key) {
        return $scope.find('[data-task-col="' + key + '"]').first();
      }

      /* Every control inside a row or a card resolves its record from the host
         it sits in; the drawer has no host, so it falls back to what it has
         open. One rule, so no control has to carry an id of its own. */
      function idOf($el) {
        var $host = $el.closest("[data-task-row], [data-task-card]");
        return (
          $host.attr("data-task-row") || $host.attr("data-task-card") || openId
        );
      }

      /* The ROW is the record. Everything a control needs to decide something
         is read back off it, so there is no second copy to keep in step. */
      function recOf(id) {
        var $tr = rowOf(id);
        if (!$tr.length) return null;
        var $subs = subsOf(id);
        var total = $subs.children("[data-task-subtask-row]").length;
        return {
          id: id,
          $row: $tr,
          $card: cardOf(id),
          title: $.trim($tr.find("[data-task-title]").first().text()),
          notes: $tr.attr("data-task-notes") || "",
          status: $tr.attr("data-task-status") || "todo",
          priority: $tr.attr("data-task-priority") || "medium",
          project: $tr.attr("data-task-of-project") || "",
          assignee: $tr.attr("data-task-assignee") || "ravisha",
          due:
            $tr.attr("data-task-due") ||
            taskDay(+$tr.attr("data-task-due-offset") || 0),
          created: +$tr.attr("data-task-created") || 0,
          reopenTo: $tr.attr("data-task-reopen") || "",
          subTotal: total,
          subDone: $subs.children("[data-task-subtask-row]").find(":checked")
            .length,
        };
      }

      function eachRec(fn) {
        rows().each(function () {
          var rec = recOf($(this).attr("data-task-row"));
          if (rec) fn(rec);
        });
      }

      /* ---- dates ----
         The markup carries the OFFSET; the ISO date it resolves to is written
         back onto the row once, at boot, so every later comparison is a plain
         string compare. */
      function resolveDates() {
        rows().each(function () {
          var $tr = $(this);
          $tr.attr(
            "data-task-due",
            taskDay(+$tr.attr("data-task-due-offset") || 0),
          );
        });
      }

      /* ---- what is on screen ---- */

      function matchView(rec) {
        var out = taskDaysOut(rec.due);
        var open = rec.status !== "done";
        if (view === "completed") return rec.status === "done";
        if (view === "today") return open && out === 0;
        if (view === "upcoming") return open && out > 0;
        if (view === "overdue") return open && out < 0;
        return true;
      }

      function matchQuery(rec) {
        if (!query) return true;
        var hay = (
          rec.title +
          " " +
          rec.notes +
          " " +
          projectLabel(rec.project) +
          " " +
          personOf(rec.assignee).name
        ).toLowerCase();
        return hay.indexOf(query) > -1;
      }

      function isVisible(rec) {
        if (!matchView(rec)) return false;
        if (project !== "all" && rec.project !== project) return false;
        if (priority !== "all" && rec.priority !== priority) return false;
        if (assignee !== "all" && rec.assignee !== assignee) return false;
        return matchQuery(rec);
      }

      function compare(x, y) {
        /* A finished task sinks to the bottom of every view except the one
           that is only about finished tasks — otherwise "due date" opens on
           a run of struck-through rows nobody needs to read first. */
        if (view !== "completed") {
          var xDone = x.status === "done" ? 1 : 0;
          var yDone = y.status === "done" ? 1 : 0;
          if (xDone !== yDone) return xDone - yDone;
        }
        if (sort === "title") return x.title.localeCompare(y.title);
        if (sort === "created") return y.created - x.created;
        if (sort === "priority") {
          var byRank =
            TASK_PRIORITY[x.priority].rank - TASK_PRIORITY[y.priority].rank;
          if (byRank) return byRank;
        }
        if (x.due !== y.due) return x.due < y.due ? -1 : 1;
        return TASK_PRIORITY[x.priority].rank - TASK_PRIORITY[y.priority].rank;
      }

      /* ---- painting ---- */

      function out(key, text) {
        $ctx.find('[data-task-out="' + key + '"]').text(text);
      }

      function count(key, n) {
        $scope
          .find('[data-task-count="' + key + '"]')
          .find("bdi")
          .text(String(n));
      }

      /* The due chip and the subtask tally are the two things on a row that a
         reader's action can change, so they are (re)written in place — never
         rebuilt — on both the row and its card. */
      function paintChips(rec) {
        var late = rec.status !== "done" && taskDaysOut(rec.due) < 0;
        var $pair = rec.$row.add(rec.$card);

        $pair
          .find("[data-task-due-chip]")
          .toggleClass("text-danger", late)
          .toggleClass("text-muted-2", !late)
          .find("bdi")
          .text(taskDueLabel(rec.due));

        $pair
          .find("[data-task-sub-chip]")
          .toggleClass("d-none", rec.subTotal === 0)
          .find("bdi")
          .text(rec.subDone + "/" + rec.subTotal);
      }

      /* Everything a record can change about how it reads, written back into
         the row and card the markup already provides. */
      function paintPair(rec) {
        var status = TASK_STATUS[rec.status];
        var prio = TASK_PRIORITY[rec.priority];
        var who = personOf(rec.assignee);
        var done = rec.status === "done";
        var $pair = rec.$row.add(rec.$card);

        rec.$row.attr({
          "data-task-status": rec.status,
          "data-task-priority": rec.priority,
          "data-task-of-project": rec.project,
          "data-task-assignee": rec.assignee,
          "data-task-notes": rec.notes,
        });

        $pair.find("[data-task-title]").text(rec.title);
        rec.$row
          .find("[data-task-title]")
          .attr(
            "class",
            "flex-grow-1 min-w-0 fs-md fw-semibold text-truncate " +
              (done
                ? "text-muted-2 text-decoration-line-through"
                : "text-title"),
          );
        rec.$card
          .find("[data-task-title]")
          .attr(
            "class",
            "d-block w-100 p-0 mb-2 border-0 bg-transparent text-start fs-md fw-semibold " +
              (done
                ? "text-muted-2 text-decoration-line-through"
                : "text-title"),
          );

        $pair.find("[data-task-project-label]").text(projectLabel(rec.project));
        rec.$row
          .find("[data-task-prio-dot]")
          .attr("class", "legend-dot legend-dot-sm flex-shrink-0 " + prio.dot);
        rec.$row
          .find("[data-task-status-badge]")
          .attr(
            "class",
            "badge-soft flex-shrink-0 d-none d-md-inline-block " + status.tint,
          )
          .text(statusLabel(rec.status));
        rec.$card
          .find("[data-task-prio-badge]")
          .attr(
            "class",
            "badge-soft fs-xs px-2 py-0 flex-shrink-0 " + prio.tint,
          )
          .text(priorityLabel(rec.priority));
        rec.$card
          .find("[data-task-accent]")
          .attr("class", "accent-edge-b " + prio.ink);

        $pair
          .find("[data-task-done]")
          .prop("checked", done)
          .attr("aria-label", (done ? "Reopen " : "Complete ") + rec.title);
        rec.$row
          .find("[data-bs-toggle='dropdown']")
          .attr("aria-label", "More actions for " + rec.title);
        rec.$row.find("[data-task-status-set]").each(function () {
          if ($(this).attr("data-task-status-set") === rec.status) {
            $(this).attr("aria-current", "true");
          } else {
            $(this).removeAttr("aria-current");
          }
        });

        /* The avatar is a photo or initials on a gradient, and BOTH shapes are
           already in every avatar in the markup — so the one that does not
           apply simply retires. Nothing is created here. */
        $pair.find("[data-task-avatar]").each(function () {
          var $av = $(this);
          var extra = $av.hasClass("ms-auto")
            ? " ms-auto"
            : " d-none d-sm-grid";
          $av
            .attr("title", who.name)
            .attr("aria-label", "Assigned to " + who.name);
          $av.attr(
            "class",
            "avatar avatar-xs flex-shrink-0" +
              (who.avatar ? "" : " " + who.tint) +
              extra,
          );
          $av
            .find("[data-task-avatar-img]")
            .attr("src", who.avatar)
            .toggleClass("d-none", !who.avatar);
          $av
            .find("[data-task-avatar-initials]")
            .text(who.initials)
            .toggleClass("d-none", !!who.avatar);
        });

        paintChips(rec);
      }

      function paintCounts(recs, shown) {
        var doneTotal = 0;
        var byView = {
          all: recs.length,
          today: 0,
          upcoming: 0,
          overdue: 0,
          completed: 0,
        };
        var byProject = { all: recs.length };
        var byStatus = { todo: 0, progress: 0, review: 0, done: 0 };

        $.each(recs, function (_, rec) {
          var outDays = taskDaysOut(rec.due);
          if (rec.status === "done") {
            doneTotal++;
            byView.completed++;
          } else if (outDays === 0) byView.today++;
          else if (outDays > 0) byView.upcoming++;
          else byView.overdue++;
          byProject[rec.project] = (byProject[rec.project] || 0) + 1;
        });
        /* the board headers count what is ON the board, so they agree with the
           columns under them rather than with the whole backlog */
        $.each(shown, function (_, rec) {
          byStatus[rec.status]++;
        });

        $.each(byView, function (key, n) {
          count("view-" + key, n);
        });
        /* the navigator already lists every project, so the badges are found
           through it rather than through a second list here */
        $scope.find("[data-task-project]").each(function () {
          var key = $(this).attr("data-task-project");
          if (key !== "all") count("project-" + key, byProject[key] || 0);
        });
        count("project-all", byProject.all);
        $.each(byStatus, function (key, n) {
          count("status-" + key, n);
        });

        out("shown", shown.length);
        out("total-count", recs.length);
        out("done-count", doneTotal);

        var pct = recs.length ? Math.round((doneTotal / recs.length) * 100) : 0;
        $scope
          .find("[data-task-progress]")
          .attr("aria-valuenow", pct)
          .find("[data-task-progress-bar]")
          .css("width", pct + "%");
      }

      function syncControls() {
        $scope.find("[data-task-view]").each(function () {
          var on = $(this).attr("data-task-view") === view;
          $(this)
            .toggleClass("active", on)
            .attr("aria-pressed", on ? "true" : "false");
        });
        $scope.find("[data-task-project]").each(function () {
          var on = $(this).attr("data-task-project") === project;
          $(this)
            .toggleClass("active", on)
            .attr("aria-pressed", on ? "true" : "false");
        });
        $scope.find('[data-task-filter="priority"]').val(priority);
        $scope.find('[data-task-filter="assignee"]').val(assignee);
        out("heading", viewLabel(view));
        out("sort", sortLabel(sort));
      }

      /* The drawer keeps whatever it last showed while it animates closed, so
         it is only repainted while a record is actually open. */
      function paintDetail() {
        var rec = openId ? recOf(openId) : null;
        if (!rec) return;

        var status = TASK_STATUS[rec.status];
        var who = personOf(rec.assignee);
        var done = rec.status === "done";
        var late = !done && taskDaysOut(rec.due) < 0;

        $detail
          .find('[data-task-out="detail-status"]')
          .attr("class", "badge-soft " + status.tint);
        out("detail-status", statusLabel(rec.status));
        out("detail-title", rec.title);
        /* The relative word only earns its place when it is not simply the
           same date said twice; "overdue" is spelled out rather than left to
           the red, which a colour-blind reader would miss. */
        var rel = taskDueRelative(rec.due);
        out(
          "detail-due",
          (rel ? rel + " · " : "") +
            taskDateText(rec.due, true) +
            (late ? " · overdue" : ""),
        );
        $detail
          .find('[data-task-out="detail-due"]')
          .toggleClass("text-danger", late);
        out("detail-assignee", who.name);
        out(
          "detail-project",
          projectLabel(rec.project) || restingText["detail-project"],
        );
        out("detail-notes", rec.notes || restingText["detail-notes"]);
        pickLabel("detail-toggle", done ? "done" : "open");
        out("detail-subtasks", rec.subDone + " of " + rec.subTotal);
        $detail.find('[data-task-set="status"]').val(rec.status);
        $detail.find('[data-task-set="priority"]').val(rec.priority);

        /* Every task's subtasks are written in the markup, one list each; the
           drawer reveals the open task's list and retires the others. */
        $subHost.children("[data-task-subtasks-for]").each(function () {
          $(this).toggleClass(
            "d-none",
            $(this).attr("data-task-subtasks-for") !== rec.id,
          );
        });
        var $subs = subsOf(rec.id);
        $subs
          .children("[data-task-subtask-none]")
          .toggleClass("d-none", rec.subTotal > 0);
      }

      /* Bootstrap keeps every component instance in a registry keyed by its
         element, so a row menu whose toggle is about to be thrown away has to
         hand its instance back first. */
      function disposeMenus($where) {
        if (!window.bootstrap || !window.bootstrap.Dropdown) return;
        $where.find("[data-bs-toggle='dropdown']").each(function () {
          var instance = window.bootstrap.Dropdown.getInstance(this);
          if (instance) instance.dispose();
        });
      }

      /* The whole of "rendering": decide what is on screen, then MOVE the nodes
         that are already there into the order the sort asks for. */
      function render() {
        var recs = [];
        var shown = [];
        eachRec(function (rec) {
          recs.push(rec);
          if (isVisible(rec)) shown.push(rec);
        });

        var hidden = {};
        $.each(recs, function (_, rec) {
          hidden[rec.id] = true;
        });
        $.each(shown, function (_, rec) {
          hidden[rec.id] = false;
        });
        $.each(recs, function (_, rec) {
          rec.$row.toggleClass("d-none", hidden[rec.id]);
          rec.$card.toggleClass("d-none", hidden[rec.id]);
        });

        var ordered = recs.slice().sort(compare);
        var listNodes = [];
        $.each(ordered, function (_, rec) {
          listNodes.push(rec.$row[0]);
        });
        $list.append(listNodes);

        $.each(TASK_STATUS, function (key) {
          var $col = colOf(key);
          var cardNodes = [];
          var n = 0;
          $.each(ordered, function (_, rec) {
            if (rec.status !== key) return;
            cardNodes.push(rec.$card[0]);
            if (!hidden[rec.id]) n++;
          });
          /* appending moves the cards, and a card whose status changed arrives
             in its new column by the same move */
          if (cardNodes.length) $col.append(cardNodes);
          $col
            .children("[data-task-placeholder]")
            .toggleClass("d-none", n > 0)
            .appendTo($col);
        });

        $listEmpty.toggleClass("d-none", shown.length > 0);
        paintCounts(recs, shown);
        syncControls();
        paintDetail();
      }

      /* ---- mutations ---- */

      function setStatus(id, key) {
        var rec = recOf(id);
        if (!rec || !TASK_STATUS[key] || rec.status === key) return;
        rec.status = key;
        paintPair(rec);
        render();
      }

      function toggleDone(id) {
        var rec = recOf(id);
        if (!rec) return;
        if (rec.status === "done") {
          rec.status = rec.reopenTo || "todo";
        } else {
          rec.$row.attr("data-task-reopen", rec.status);
          rec.status = "done";
        }
        paintPair(rec);
        render();
      }

      function remove(id) {
        var rec = recOf(id);
        if (!rec) return;
        disposeMenus(rec.$row);
        rec.$row.remove();
        rec.$card.remove();
        subsOf(id).remove();
        if (openId === id) closeDetail();
        render();
      }

      /* ---- delete confirmation ---- */
      /* One arming press, one confirming press — the same two-step the calendar
         dialog uses, shared here by the row menus, the drawer and the bulk
         "delete completed" item. */
      function disarm() {
        if (!$armed) return;
        $armed.find("[data-task-remove-label]").removeClass("d-none");
        $armed.find("[data-task-remove-confirm]").addClass("d-none");
        $armed = null;
      }

      function arm($btn) {
        disarm();
        $armed = $btn;
        $btn.find("[data-task-remove-label]").addClass("d-none");
        $btn.find("[data-task-remove-confirm]").removeClass("d-none");
      }

      function armed(el) {
        return $armed && $armed[0] === el;
      }

      /* ---- panels ---- */

      function closeMenu($el) {
        var el = $el
          .closest(".dropdown")
          .find("[data-bs-toggle='dropdown']")[0];
        if (el && window.bootstrap)
          window.bootstrap.Dropdown.getOrCreateInstance(el).hide();
      }

      function openDetail(id) {
        openId = id;
        paintDetail();
        if (window.bootstrap)
          window.bootstrap.Offcanvas.getOrCreateInstance(detailEl).show();
      }

      function closeDetail() {
        if (window.bootstrap)
          window.bootstrap.Offcanvas.getOrCreateInstance(detailEl).hide();
      }

      function openDialog() {
        if (window.bootstrap)
          window.bootstrap.Modal.getOrCreateInstance(modalEl).show();
      }

      /* ---- add / edit dialog ---- */

      function paintPriorityDot() {
        var meta =
          TASK_PRIORITY[$("#taskFormPriority").val()] || TASK_PRIORITY.medium;
        $modal
          .find("[data-task-priority-dot]")
          .attr("class", "legend-dot flex-shrink-0 " + meta.dot);
      }

      /* Record -> form. Opened empty it inherits the column the New-task button
         belongs to and the project the navigator is filtered to, so the task
         lands where the visitor was already looking. */
      function fillForm(rec) {
        $form[0].reset();
        $form.removeClass("was-validated");
        /* the dialog spells both of its wordings in the markup */
        var which = rec ? "edit" : "new";
        pickLabel("dialog-title", which);
        pickLabel("dialog-sub", which);
        pickLabel("dialog-submit", which);

        $("#taskFormTitle").val(rec ? rec.title : "");
        $("#taskFormNotes").val(rec ? rec.notes : "");
        $("#taskFormStatus").val(rec ? rec.status : newStatus);
        $("#taskFormPriority").val(rec ? rec.priority : "medium");
        $("#taskFormDue").val(rec ? rec.due : taskDay(1));
        $("#taskFormProject").val(
          rec ? rec.project : project !== "all" ? project : "website",
        );
        $("#taskFormAssignee").val(rec ? rec.assignee : "ravisha");
        paintPriorityDot();
      }

      function resetFilters() {
        view = "all";
        project = "all";
        priority = "all";
        assignee = "all";
        query = "";
        $scope.find("[data-task-search]").val("");
      }

      /* Stamp the page's own templates for a task the reader creates — the one
         task the markup does not already carry. */
      function addTask() {
        if (!rowTpl || !cardTpl || !subsTpl) return null;
        var id = "tk-new-" + ++seq;
        var $row = $(rowTpl.content)
          .children()
          .first()
          .clone()
          .attr("data-task-row", id);
        var $card = $(cardTpl.content)
          .children()
          .first()
          .clone()
          .attr("data-task-card", id);
        var $subs = $(subsTpl.content)
          .children()
          .first()
          .clone()
          .attr("data-task-subtasks-for", id);
        var menuId = "taskRowMenu-" + id;
        $row.find("[data-bs-toggle='dropdown']").attr("id", menuId);
        $row.find(".dropdown-menu").attr("aria-labelledby", menuId);
        $row.attr("data-task-created", String(Date.now()));
        $list.append($row);
        $card.appendTo(colOf($("#taskFormStatus").val()));
        $subHost.append($subs);
        return id;
      }

      /* Saving into a view, project or search the list is narrowed away from
         would read as the save having failed, so widen back out. */
      function ensureVisible(rec) {
        if (!isVisible(rec)) resetFilters();
      }

      /* ---- events: filters ---- */

      $scope.on("click", "[data-task-view]", function () {
        view = $(this).attr("data-task-view");
        render();
      });

      $scope.on("click", "[data-task-project]", function () {
        project = $(this).attr("data-task-project");
        render();
      });

      $scope.on("change", "[data-task-filter]", function () {
        var $sel = $(this);
        if ($sel.attr("data-task-filter") === "priority") priority = $sel.val();
        else assignee = $sel.val();
        render();
      });

      $scope.on(
        "input",
        "[data-task-search]",
        debounce(function () {
          query = $.trim(
            $scope.find("[data-task-search]").val() || "",
          ).toLowerCase();
          render();
        }, 150),
      );

      $scope.on("click", "[data-task-sort]", function () {
        sort = $(this).attr("data-task-sort");
        render();
      });

      $scope.on("click", "[data-task-action]", function () {
        var $btn = $(this);
        var action = $btn.attr("data-task-action");

        if (action === "reset") {
          resetFilters();
          render();
          closeMenu($btn);
          return;
        }
        if (action === "complete-visible") {
          var ids = [];
          eachRec(function (rec) {
            if (isVisible(rec) && rec.status !== "done") ids.push(rec.id);
          });
          $.each(ids, function (_, id) {
            var rec = recOf(id);
            if (!rec) return;
            rec.$row.attr("data-task-reopen", rec.status);
            rec.status = "done";
            paintPair(rec);
          });
          render();
          closeMenu($btn);
          return;
        }
        if (action === "clear-done") {
          if (!armed(this)) {
            arm($btn);
            return;
          }
          disarm();
          var gone = [];
          eachRec(function (rec) {
            if (rec.status === "done") gone.push(rec.id);
          });
          $.each(gone, function (_, id) {
            remove(id);
          });
          closeMenu($btn);
        }
      });

      /* a menu closing takes any armed delete inside it back to rest */
      $scope.on("hide.bs.dropdown", disarm);

      /* ---- events: records ---- */

      $scope.on("change", "[data-task-done]", function () {
        toggleDone(idOf($(this)));
      });

      $scope.on("click", "[data-task-open]", function () {
        var id = idOf($(this));
        if (id) openDetail(id);
      });

      $scope.on("click", "[data-task-status-set]", function () {
        var $btn = $(this);
        setStatus(idOf($btn), $btn.attr("data-task-status-set"));
        closeMenu($btn);
      });

      function onEditClick() {
        var id = idOf($(this));
        if (!id) return;
        closeMenu($(this));
        editingId = id;
        /* opened from the drawer, the drawer steps aside first so the two
           overlays never stack their backdrops */
        if ($detail.hasClass("show")) {
          $detail.one("hidden.bs.offcanvas", openDialog);
          closeDetail();
          return;
        }
        openDialog();
      }

      function onRemoveClick() {
        var $btn = $(this);
        var id = idOf($btn);
        if (!id) return;
        if (!armed(this)) {
          arm($btn);
          return;
        }
        /* the menu holding this control is about to be removed, so close it
           while its toggle still exists */
        closeMenu($btn);
        disarm();
        remove(id);
      }

      $scope.on("click", "[data-task-edit]", onEditClick);
      $scope.on("click", "[data-task-remove]", onRemoveClick);
      $detail.on("click", "[data-task-edit]", onEditClick);
      $detail.on("click", "[data-task-remove]", onRemoveClick);

      $scope.on("click", "[data-task-new]", function () {
        newStatus = $(this).attr("data-task-status") || "todo";
        editingId = null;
        openDialog();
      });

      /* ---- events: the drawer ---- */

      $detail.on("click", "[data-task-detail-toggle]", function () {
        toggleDone(openId);
      });

      $detail.on("change", "[data-task-set]", function () {
        var $sel = $(this);
        if (!openId) return;
        if ($sel.attr("data-task-set") === "status")
          setStatus(openId, $sel.val());
        else {
          var rec = recOf(openId);
          if (!rec) return;
          rec.priority = $sel.val();
          paintPair(rec);
          render();
        }
      });

      $detail.on("change", "[data-task-subtask]", function () {
        var rec = recOf(openId);
        if (rec) {
          paintChips(recOf(openId));
          paintDetail();
        }
      });

      $detail.on("click", "[data-task-subtask-remove]", function () {
        $(this).closest("[data-task-subtask-row]").remove();
        paintChips(recOf(openId));
        paintDetail();
      });

      $detail.on("submit", "[data-task-subtask-form]", function (e) {
        e.preventDefault();
        var $field = $("#taskSubtaskInput");
        var text = $.trim($field.val() || "");
        if (!openId || !text || !subTpl) return;
        var $subs = subsOf(openId);
        if (!$subs.length) return;
        /* the row's shape comes from the page's own <template> */
        var $li = $(subTpl.content).children().first().clone();
        var boxId = "taskSub-" + openId + "-new-" + Date.now();
        $li.find("[data-task-subtask]").attr("id", boxId);
        $li.find("label").attr("for", boxId).text(text);
        $li
          .find("[data-task-subtask-remove]")
          .attr("aria-label", "Remove subtask " + text);
        $subs.children("[data-task-subtask-none]").before($li);
        $field.val("");
        drawIcons();
        paintChips(recOf(openId));
        paintDetail();
        $field.trigger("focus");
      });

      $detail.on("hidden.bs.offcanvas", function () {
        openId = null;
        disarm();
      });

      /* ---- events: the dialog ---- */

      $modal.on("show.bs.modal", function () {
        fillForm(editingId ? recOf(editingId) : null);
      });

      $modal.on("change", "#taskFormPriority", paintPriorityDot);

      $modal.on("hidden.bs.modal", function () {
        editingId = null;
      });

      /* Bound to the form element, so it runs before the shared
         form[data-modal-form] handler delegated on document — which validates,
         closes the dialog and (on hidden) resets the fields this reads. */
      $form.on("submit", function () {
        if (!this.checkValidity()) return; /* the shared handler shows why */

        var id = editingId || addTask();
        var rec = recOf(id);
        if (!rec) return;

        rec.title = $.trim($("#taskFormTitle").val());
        rec.notes = $.trim($("#taskFormNotes").val());
        rec.status = $("#taskFormStatus").val();
        rec.priority = $("#taskFormPriority").val();
        rec.project = $("#taskFormProject").val();
        rec.assignee = $("#taskFormAssignee").val();
        rec.due = $("#taskFormDue").val();
        /* the row keeps its date as an offset, the way the markup writes it */
        rec.$row
          .attr("data-task-due", rec.due)
          .attr("data-task-due-offset", String(taskDaysOut(rec.due)));

        paintPair(rec);
        drawIcons();
        ensureVisible(rec);
        render();
        /* a stamped row brings menus that have never been seen before */
        initDynamic($scope);
      });

      /* ---- drag and drop between columns ---- */
      /* SortableJS owns the gesture; this only reads which column the card was
         dropped into and writes that status back to the row. Reordering WITHIN
         a column is off: the board is ordered by the active sort, so a
         hand-placed position could not survive the next render. */
      if (window.Sortable) {
        $scope.find("[data-task-col]").each(function () {
          window.Sortable.create(this, {
            group: "vionex-tasks",
            animation: prefersReducedMotion() ? 0 : 150,
            sort: false,
            draggable: "[data-task-card]",
            filter: "[data-task-placeholder]",
            ghostClass: "drag-ghost",
            chosenClass: "drag-chosen",
            onAdd: function (evt) {
              var id = $(evt.item).attr("data-task-card");
              var key = $(evt.to).attr("data-task-col");
              /* let the library finish its own DOM work before the re-render
                 moves the card it is still holding */
              window.setTimeout(function () {
                setStatus(id, key);
              }, 0);
            },
          });
        });
      }

      resolveDates();
      render();
    }

    initTasksApp();

    /* ======================================================================
       File Manager App
       ====================================================================== */
    /* A drive browser: the locations pane, the file surface (grid ⇄ list) and
       the details drawer.

       EVERYTHING this app shows is written in the markup. Every folder and
       file exists TWICE — once as a grid card ([data-file-card]) and once as a
       list row ([data-file-row]) — and both ship complete, so switching view
       reveals a panel that is already rendered. The LIST ROW is the record:
       it carries the name, type, category, locations, size, dates, owner and
       flags, and the card is its twin. Nothing here builds a record, a cell,
       a name or a menu.

       Filtering hides with .d-none. Sorting re-`append`s the nodes that are
       already on the page, so it MOVES them and never re-renders one. Renaming
       rewrites the text of the two labels the markup already spells; deleting
       removes those two nodes. The details drawer, the preview dialog and the
       demo notes read their words back out of the record or out of their own
       markup — one message per case, revealed rather than composed.

       The only node a reader can create is an upload queue row, stamped from
       the page's own <template>. */

    /* the five LOCATIONS; anything else in the pane is a CATEGORY */
    var FILE_PLACES = {
      myfiles: 1,
      recent: 1,
      starred: 1,
      shared: 1,
      trash: 1,
    };

    function initFilesApp() {
      var $scope = $("[data-file-scope]").first();
      if (!$scope.length) return;

      var $tbody = $scope.find("[data-file-tbody]").first();
      var $folderGrid = $scope.find('[data-file-group="folders"] ul').first();
      var $fileGrid = $scope.find('[data-file-group="files"] ul').first();
      var $bulkBar = $scope.find("[data-file-bulk-bar]").first();
      var $search = $scope.find("[data-file-search]").first();
      var $note = $scope.find("[data-file-note]").first();
      var queueTpl = $scope.find("[data-file-queue-template]").first()[0];

      var nav = "myfiles";
      var filter = "all";
      var sort = "modified";
      var query = "";
      var pending = ""; /* the record the drawer / preview / rename is about */
      var doomed = []; /* the records the delete dialog is about */

      /* ---- records ---- */

      function rowOf(id) {
        return $scope.find('[data-file-row="' + id + '"]').first();
      }

      function cardOf(id) {
        return $scope.find('[data-file-card="' + id + '"]').first();
      }

      /* both of a record's nodes, so a change can never land on only one */
      function bothOf(id) {
        return rowOf(id).add(cardOf(id));
      }

      function val($row, name) {
        return $row.attr("data-file-" + name) || "";
      }

      function eachRec(fn) {
        $tbody.children("[data-file-row]").each(function () {
          fn($(this), $(this).attr("data-file-row"));
        });
      }

      /* the row's own rendered words, cached — nothing is duplicated into an
         attribute just so it can be searched */
      function textOf($row) {
        var cached = $row.data("fileText");
        if (typeof cached !== "string") {
          cached = $.trim(
            val($row, "name") +
              " " +
              val($row, "owner") +
              " " +
              val($row, "type-label") +
              " " +
              val($row, "where"),
          )
            .replace(/\s+/g, " ")
            .toLowerCase();
          $row.data("fileText", cached);
        }
        return cached;
      }

      /* ---- what is on screen ---- */

      function inNav($row) {
        var loc = " " + val($row, "loc") + " ";
        if (FILE_PLACES[nav]) return loc.indexOf(" " + nav + " ") > -1;
        /* a category never reaches into the Trash */
        return (
          val($row, "cat") === nav && loc.indexOf(" trash ") < 0
        );
      }

      function passesFilter($row) {
        if (filter === "all") return true;
        if (filter === "starred") return $row.is("[data-file-starred]");
        if (filter === "shared") return $row.is("[data-file-shared]");
        return val($row, "cat") === filter;
      }

      function isVisible($row) {
        return (
          inNav($row) &&
          passesFilter($row) &&
          (!query || textOf($row).indexOf(query) > -1)
        );
      }

      /* ---- ordering ---- */

      function compare($a, $b) {
        /* folders lead, whatever the sort — the one convention every file
           manager shares */
        var fa = val($a, "kind") === "folder" ? 0 : 1;
        var fb = val($b, "kind") === "folder" ? 0 : 1;
        if (fa !== fb) return fa - fb;

        if (sort === "name") {
          return val($a, "name").localeCompare(val($b, "name"));
        }
        if (sort === "size") {
          return (
            (parseInt(val($b, "size"), 10) || 0) -
            (parseInt(val($a, "size"), 10) || 0)
          );
        }
        if (sort === "type") {
          var t = val($a, "type").localeCompare(val($b, "type"));
          return t || val($a, "name").localeCompare(val($b, "name"));
        }
        var x = val($a, "modified");
        var y = val($b, "modified");
        if (x === y) return 0;
        return x < y ? 1 : -1; /* newest first */
      }

      /* ---- the whole of "rendering": decide, then MOVE ---- */

      function render() {
        var recs = [];
        var shown = 0;
        var here = 0; /* what this location holds before search and filter */
        var folders = 0;
        var files = 0;

        eachRec(function ($row, id) {
          var on = isVisible($row);
          if (inNav($row)) here++;
          recs.push({ id: id, $row: $row, on: on });
          bothOf(id).toggleClass("d-none", !on);
          if (on) {
            shown++;
            if (val($row, "kind") === "folder") folders++;
            else files++;
          } else {
            /* a hidden record must not stay selected, or the bulk bar would
               act on something the reader cannot see */
            bothOf(id).find("[data-file-pick]").prop("checked", false);
          }
        });

        recs.sort(function (a, b) {
          return compare(a.$row, b.$row);
        });

        var rowNodes = [];
        var folderNodes = [];
        var fileNodes = [];
        $.each(recs, function (_, rec) {
          rowNodes.push(rec.$row[0]);
          var card = cardOf(rec.id)[0];
          if (!card) return;
          if (val(rec.$row, "kind") === "folder") folderNodes.push(card);
          else fileNodes.push(card);
        });
        /* appending MOVES nodes that are already in the page */
        $tbody.append(rowNodes);
        if ($folderGrid.length) $folderGrid.append(folderNodes);
        if ($fileGrid.length) $fileGrid.append(fileNodes);

        /* a heading with nothing under it reads as a loading failure */
        $scope
          .find('[data-file-group="folders"]')
          .toggleClass("d-none", folders === 0);
        $scope
          .find('[data-file-group="files"]')
          .toggleClass("d-none", files === 0);
        $scope.find("[data-file-empty]").toggleClass("d-none", shown > 0);

        $scope.find('[data-file-out="shown"]').text(String(shown));
        $scope.find('[data-file-out="total"]').text(String(here));

        paintNav();
        syncPicks();
      }

      /* ---- the locations pane ---- */

      function paintNav() {
        $scope.find("[data-file-nav]").each(function () {
          var $btn = $(this);
          var key = $btn.attr("data-file-nav");
          var on = key === nav;
          $btn.toggleClass("active", on);
          $btn.attr("aria-pressed", on ? "true" : "false");

          /* the count each location or category would show */
          var n = 0;
          eachRec(function ($row) {
            var loc = " " + val($row, "loc") + " ";
            var hit = FILE_PLACES[key]
              ? loc.indexOf(" " + key + " ") > -1
              : val($row, "cat") === key && loc.indexOf(" trash ") < 0;
            if (hit) n++;
          });
          $scope
            .find('[data-file-count="' + key + '"]')
            .find("bdi")
            .text(String(n));
        });

        /* the heading and the crumb are the active button's OWN words */
        var label = $.trim(
          $scope
            .find('[data-file-nav="' + nav + '"]')
            .first()
            .find("span")
            .first()
            .text(),
        );
        if (label) {
          $scope.find('[data-file-out="heading"]').text(label);
          $scope.find('[data-file-out="crumb"]').text(label);
        }
      }

      /* ---- selection ---- */

      function picked() {
        /* one entry per record: read the LIST row's box, which every record
           has, so a record is never counted twice */
        var ids = [];
        eachRec(function ($row, id) {
          if ($row.find("[data-file-pick]").prop("checked")) ids.push(id);
        });
        return ids;
      }

      function syncPicks() {
        var ids = picked();
        eachRec(function ($row, id) {
          var on = $.inArray(id, ids) > -1;
          bothOf(id).find("[data-file-pick]").prop("checked", on);
          $row.toggleClass("row-selected", on);
          cardOf(id).find("[data-file-tile]").toggleClass("active-tile", on);
        });

        $scope.find('[data-file-out="picked"]').text(String(ids.length));
        if ($bulkBar.length) {
          $bulkBar.toggleClass("d-none", ids.length === 0);
          $bulkBar.toggleClass("d-flex", ids.length > 0);
        }

        var $all = $scope.find("[data-file-pick-all]");
        if ($all.length) {
          var visibleIds = [];
          eachRec(function ($row, id) {
            if (!$row.hasClass("d-none")) visibleIds.push(id);
          });
          $all.prop(
            "checked",
            visibleIds.length > 0 && ids.length === visibleIds.length,
          );
          $all.prop(
            "indeterminate",
            ids.length > 0 && ids.length < visibleIds.length,
          );
        }
      }

      function setPicked(id, on) {
        bothOf(id).find("[data-file-pick]").prop("checked", on);
        syncPicks();
      }

      function clearPicks() {
        $scope.find("[data-file-pick]").prop("checked", false);
        syncPicks();
      }

      /* ---- one demo message, revealed rather than written ---- */

      function note(key, name) {
        if (!$note.length) return;
        $note.removeClass("d-none");
        $note.find("[data-file-note-for]").each(function () {
          $(this).toggleClass(
            "d-none",
            $(this).attr("data-file-note-for") !== key,
          );
        });
        if (name) $note.find("[data-file-note-name]").text(name);
      }

      /* ---- stars ---- */

      function setStar(id, on) {
        var $row = rowOf(id);
        if (!$row.length) return;
        var $both = bothOf(id);

        if (on) $both.attr("data-file-starred", "");
        else $both.removeAttr("data-file-starred");

        /* the Starred location reads the same token the filter does, so the
           two can never disagree */
        var loc = (" " + val($row, "loc") + " ")
          .replace(/\bstarred\b/g, "")
          .replace(/\s+/g, " ");
        loc = $.trim(on ? loc + " starred" : loc);
        $both.attr("data-file-loc", loc);

        $both.find("[data-file-star]").attr("aria-pressed", on ? "true" : "false");
        $both.find("[data-file-star-on]").toggleClass("d-none", !on);
        $both.find("[data-file-star-off]").toggleClass("d-none", on);
        $both.find("[data-file-star-text-on]").toggleClass("d-none", !on);
        $both.find("[data-file-star-text-off]").toggleClass("d-none", on);
      }

      /* ---- details drawer / preview dialog: echo the record's own words ---- */

      function out(key, text) {
        $scope
          .add(".modal")
          .find('[data-file-out="' + key + '"]')
          .text(text);
      }

      function paintDetail(id) {
        var $row = rowOf(id);
        if (!$row.length) return;
        var folder = val($row, "kind") === "folder";
        out("detail-name", val($row, "name"));
        out("detail-type", folder ? "Folder" : val($row, "type").toUpperCase());
        out("detail-type-label", val($row, "type-label"));
        out(
          "detail-size",
          folder
            ? val($row, "size-label") +
                " · " +
                val($row, "items") +
                " items"
            : val($row, "size-label"),
        );
        out("detail-where", val($row, "where"));
        out("detail-created", val($row, "created-label"));
        out("detail-modified", val($row, "modified-label"));
        out("detail-owner", val($row, "owner"));
        var shared = $row.is("[data-file-shared]");
        out(
          "detail-share",
          shared
            ? "Shared with " + val($row, "share-with")
            : "Private to the owner",
        );
        $("#fmDetailPane")
          .find('[data-file-detail-block="share"]')
          .toggleClass("d-none", !shared);
      }

      function paintPreview(id) {
        var $row = rowOf(id);
        if (!$row.length) return;
        out("preview-name", val($row, "name"));
        out("preview-type", val($row, "type-label"));
        out("preview-size", val($row, "size-label"));
        out("preview-modified", val($row, "modified-label"));
        out("preview-owner", val($row, "owner"));
        out("preview-where", val($row, "where"));
        out("preview-created", val($row, "created-label"));
        /* reveal the stage that belongs to this file and retire the rest */
        $("#fmPreviewModal")
          .find("[data-file-preview-for]")
          .each(function () {
            $(this).toggleClass(
              "d-none",
              $(this).attr("data-file-preview-for") !== id,
            );
          });
      }

      function show(sel) {
        var el = document.querySelector(sel);
        if (!el || !window.bootstrap) return;
        if (sel === "#fmDetailPane") {
          window.bootstrap.Offcanvas.getOrCreateInstance(el).show();
        } else {
          window.bootstrap.Modal.getOrCreateInstance(el).show();
        }
      }

      /* ---- removal ---- */

      function drop(ids) {
        $.each(ids, function (_, id) {
          var $both = bothOf(id);
          /* dispose each dropdown first: Bootstrap keeps its instances in a
             plain Map, which would otherwise hold the detached node */
          $both.find('[data-bs-toggle="dropdown"]').each(function () {
            if (!window.bootstrap) return;
            var inst = window.bootstrap.Dropdown.getInstance(this);
            if (inst) inst.dispose();
          });
          $both.remove();
        });
        render();
      }

      /* the record a control sits inside — "" for a toolbar or dialog button,
         which acts on the selection (or on the open record) instead */
      function idOf($el) {
        var $host = $el.closest("[data-file-row], [data-file-card]");
        if (!$host.length) return "";
        return $host.attr("data-file-row") || $host.attr("data-file-card") || "";
      }

      /* ---- events: the locations pane ---- */

      $scope.on("click", "[data-file-nav]", function () {
        nav = $(this).attr("data-file-nav");
        render();
        /* below xl the pane is a drawer — picking a location closes it */
        var el = document.getElementById("fmSidePane");
        if (el && window.bootstrap) {
          var drawer = window.bootstrap.Offcanvas.getInstance(el);
          if (drawer) drawer.hide();
        }
      });

      /* ---- events: search, filter, sort ---- */

      $scope.on(
        "input",
        "[data-file-search]",
        debounce(function () {
          query = $.trim($search.val() || "").toLowerCase();
          render();
        }, 150),
      );

      $scope.on("change", "[data-file-filter]", function () {
        filter = $(this).val();
        render();
      });

      $scope.on("click", "[data-file-sort]", function () {
        sort = $(this).attr("data-file-sort");
        /* the button's own text is the label — no lookup table needed */
        $scope
          .find('[data-file-out="sort"]')
          .text($.trim($(this).text()));
        render();
      });

      /* ---- events: selection ---- */

      $scope.on("change", "[data-file-pick]", function () {
        var id = idOf($(this));
        if (id) setPicked(id, $(this).prop("checked"));
      });

      $scope.on("change", "[data-file-pick-all]", function () {
        var on = $(this).prop("checked");
        eachRec(function ($row, id) {
          if (!$row.hasClass("d-none")) {
            bothOf(id).find("[data-file-pick]").prop("checked", on);
          }
        });
        syncPicks();
      });

      /* ---- events: a right-click opens the item's OWN menu ---- */

      $scope.on(
        "contextmenu",
        "[data-file-card], [data-file-row]",
        function (e) {
          var $toggle = $(this)
            .find('[data-bs-toggle="dropdown"]')
            .first();
          if (!$toggle.length || !window.bootstrap) return;
          e.preventDefault();
          window.bootstrap.Dropdown.getOrCreateInstance($toggle[0]).show();
        },
      );

      /* ---- events: opening ---- */

      $scope.on("click", "[data-file-open]", function () {
        var id = idOf($(this));
        if (!id) return;
        pending = id;
        if (val(rowOf(id), "kind") === "folder") {
          paintDetail(id);
          show("#fmDetailPane");
        } else {
          paintPreview(id);
          show("#fmPreviewModal");
        }
      });

      $scope.on("click", "[data-file-star]", function () {
        var id = idOf($(this));
        if (!id) return;
        setStar(id, !rowOf(id).is("[data-file-starred]"));
        render();
      });

      /* ---- events: the action menus, the bulk bar and the dialogs ---- */

      $(document).on("click", "[data-file-action]", function (e) {
        var $btn = $(this);
        if ($btn.is("a")) e.preventDefault();
        var action = $btn.attr("data-file-action");
        var id = idOf($btn);
        var ids = picked();
        /* an item's own menu acts on that item; the bulk bar acts on the
           selection; a dialog or the drawer acts on the record it is about */
        var targets = id ? [id] : ids;
        if (!targets.length && pending) targets = [pending];

        if (action === "reset") {
          nav = "myfiles";
          filter = "all";
          sort = "modified";
          query = "";
          $search.val("");
          $scope.find("[data-file-filter]").val("all");
          clearPicks();
          render();
          return;
        }

        if (action === "clear") {
          clearPicks();
          return;
        }

        if (action === "select-all") {
          eachRec(function ($row, rid) {
            if (!$row.hasClass("d-none")) {
              bothOf(rid).find("[data-file-pick]").prop("checked", true);
            }
          });
          syncPicks();
          return;
        }

        if (!targets.length) return;
        pending = targets[0];

        if (action === "open" || action === "preview") {
          if (val(rowOf(pending), "kind") === "folder") {
            paintDetail(pending);
            show("#fmDetailPane");
          } else {
            paintPreview(pending);
            show("#fmPreviewModal");
          }
          return;
        }

        if (action === "details") {
          paintDetail(pending);
          show("#fmDetailPane");
          return;
        }

        if (action === "star") {
          setStar(pending, !rowOf(pending).is("[data-file-starred]"));
          render();
          return;
        }

        if (action === "rename") {
          out("rename-current", val(rowOf(pending), "name"));
          $("#fmRenameName").val(val(rowOf(pending), "name"));
          show("#fmRenameModal");
          return;
        }

        if (action === "delete") {
          doomed = targets.slice();
          out(
            "delete-name",
            targets.length === 1
              ? val(rowOf(targets[0]), "name")
              : targets.length + " items",
          );
          show("#fmDeleteModal");
          return;
        }

        /* download / share / move are demonstrations in a static template */
        note(action);
      });

      /* Bound to the form ELEMENT, not delegated: the dialogs live outside
         [data-file-scope], and an element handler also runs before the shared
         form[data-modal-form] handler that validates and closes the dialog. */
      $("[data-file-rename-form]").on("submit", function () {
        if (!this.checkValidity()) return;
        var id = pending;
        var name = $.trim($("#fmRenameName").val() || "");
        if (!id || !name) return;
        var $both = bothOf(id);
        $both.attr("data-file-name", name);
        $both.find("[data-file-label]").text(name);
        /* the menus and boxes that spell the old name in their labels */
        $both.find("[aria-label]").each(function () {
          var $el = $(this);
          var was = $el.attr("aria-label") || "";
          var lead = was.split(" for ")[0];
          if (was.indexOf(" for ") > -1) $el.attr("aria-label", lead + " for " + name);
          else if (/^Select /.test(was)) $el.attr("aria-label", "Select " + name);
          else if (/^Open /.test(was)) $el.attr("aria-label", "Open " + name);
        });
        rowOf(id).removeData("fileText");
        render();
      });

      $("[data-file-folder-form]").on("submit", function () {
        if (!this.checkValidity()) return;
        note("folder", $.trim($("#fmFolderName").val() || ""));
      });

      $(document).on("click", "[data-file-delete-confirm]", function () {
        if (!doomed.length) return;
        drop(doomed);
        if ($.inArray(pending, doomed) > -1) pending = "";
        doomed = [];
        if (window.bootstrap) {
          var el = document.getElementById("fmDeleteModal");
          if (el) window.bootstrap.Modal.getOrCreateInstance(el).hide();
        }
      });

      /* ---- events: the upload dialog ---- */

      $(document).on("click", "[data-file-upload-pick]", function () {
        $("#fmUploadInput").trigger("click");
      });

      $(document).on("change", "[data-file-upload-input]", function () {
        var files = this.files;
        var $list = $("[data-file-queue]").first().empty();
        var $title = $("[data-file-queue-title]").first();
        var n = files ? files.length : 0;
        $list.toggleClass("d-none", n === 0);
        $title.toggleClass("d-none", n === 0);
        if (!queueTpl) return;
        for (var i = 0; i < n; i++) {
          /* the row's shape is the page's own <template> */
          var $li = $(queueTpl.content).children().first().clone();
          $li.find("[data-file-queue-name]").text(files[i].name);
          $li
            .find("[data-file-queue-size]")
            .text(
              files[i].size >= 1048576
                ? (files[i].size / 1048576).toFixed(1) + " MB"
                : Math.max(1, Math.round(files[i].size / 1024)) + " KB",
            );
          $list.append($li);
        }
        drawIcons();
      });

      $("#fmUploadModal form").on("submit", function () {
        if (!this.checkValidity()) return;
        note("upload");
      });

      /* a dialog that has closed is no longer about anything */
      $(document).on("hidden.bs.modal", "#fmUploadModal", function () {
        $("[data-file-queue]").first().empty().addClass("d-none");
        $("[data-file-queue-title]").first().addClass("d-none");
      });

      render();
    }

    initFilesApp();

    /* ======================================================================
       Reusable Component Scripts - Step Wizard
       ====================================================================== */
    /* Opt in by marking a wrapper [data-wizard] and, inside it:

         [data-wizard-steps]     the rail; one [data-step] per step, each with
                                 a [data-step-node] circle holding both a
                                 [data-step-num] and a [data-step-check]
         [data-wizard-body]      the panes; one [data-pane] per step
         [data-wizard-progress]  optional bar whose width follows the position
         [data-wizard-success]   optional panel shown after the last step
         [data-wizard-footer]    prev / next / finish / draft controls
         [data-wizard-reset]     returns the wizard to its first step

       EVERY step, pane, label and success message is written in the page. This
       only reveals one pane at a time and restyles the rail with utilities the
       design system already has, so nothing is rendered. The step count comes
       from the markup too - add a [data-step] and a [data-pane] and the
       wizard simply has another step.

       Steps advance only when the current pane's own constraint validation
       passes, so `required` on a field is all a page has to write. */

    /* the three looks a step node can have, as existing utilities */
    var WIZ_NODE = {
      done: "icon-box tint-emerald rounded-circle",
      current: "icon-box tint-primary rounded-circle",
      todo: "icon-box bg-muted text-body-2 rounded-circle",
    };

    function initWizard($root) {
      var $steps = $root.find("[data-step]");
      var $panes = $root.find("[data-wizard-body]").first().children("[data-pane]");
      var $progress = $root.find("[data-wizard-progress]").first();
      var $success = $root.find("[data-wizard-success]").first();
      var $footer = $root.find("[data-wizard-footer]").first();
      var $rail = $root.find("[data-wizard-steps]").first();
      var total = $panes.length;
      if (!total) return;
      var at = 0;

      function paint() {
        $steps.each(function (i) {
          var $step = $(this);
          var state = i < at ? "done" : i === at ? "current" : "todo";
          var $node = $step.find("[data-step-node]").first();
          /* keep the size modifier the markup chose (icon-box-lg / plain) and
             the layout utilities beside it; only the state changes */
          var keep = ($node.attr("class") || "")
            .split(/\s+/)
            .filter(function (c) {
              return /^(icon-box-|mx-auto|flex-shrink-0|fw-|me-|ms-)/.test(c);
            })
            .join(" ");
          $node.attr("class", $.trim(WIZ_NODE[state] + " " + keep));
          $step.toggleClass("is-done", i < at);
          $step.find("[data-step-num]").toggleClass("d-none", i < at);
          $step.find("[data-step-check]").toggleClass("d-none", i >= at);
        });

        $panes.each(function (i) {
          $(this).toggleClass("d-none", i !== at).toggleClass("show", i === at);
        });

        if ($progress.length) {
          var pct = Math.round(((at + 1) / total) * 100);
          $progress.css("width", pct + "%");
          $progress.closest("[role='progressbar']").attr("aria-valuenow", pct);
        }

        $root.find("[data-wizard-prev]").prop("disabled", at === 0);
        $root.find("[data-wizard-next]").toggleClass("d-none", at === total - 1);
        $root.find("[data-wizard-finish]").toggleClass("d-none", at !== total - 1);
        drawIcons();
      }

      /* a step may only be left once its own fields are satisfied */
      function stepValid() {
        var ok = true;
        $panes
          .eq(at)
          .find("input, select, textarea")
          .each(function () {
            if (this.willValidate && !this.checkValidity()) {
              $(this).addClass("is-invalid");
              ok = false;
            } else {
              $(this).removeClass("is-invalid");
            }
          });
        return ok;
      }

      function go(i) {
        at = Math.max(0, Math.min(total - 1, i));
        paint();
      }

      $root.on("click", "[data-wizard-next]", function () {
        if (!stepValid()) return;
        go(at + 1);
      });

      $root.on("click", "[data-wizard-prev]", function () {
        go(at - 1);
      });

      $root.on("click", "[data-wizard-finish]", function () {
        if (!stepValid()) return;
        if (!$success.length) return;
        $rail.addClass("d-none");
        $root.find("[data-wizard-body]").first().addClass("d-none");
        $footer.addClass("d-none");
        $success.removeClass("d-none");
      });

      $root.on("click", "[data-wizard-reset]", function () {
        $rail.removeClass("d-none");
        $root.find("[data-wizard-body]").first().removeClass("d-none");
        $footer.removeClass("d-none");
        $success.addClass("d-none");
        $panes.find(".is-invalid").removeClass("is-invalid");
        go(0);
      });

      /* the acknowledgement is a word the button itself carries, so nothing
         about it is written here */
      $root.on("click", "[data-wizard-draft]", function () {
        var $btn = $(this);
        var $label = $btn.find("[data-draft-label]").first();
        if (!$label.length || $btn.data("draftBusy")) return;
        var idle = $label.text();
        $label.text($btn.attr("data-draft-saved") || idle);
        $btn.data("draftBusy", true);
        window.setTimeout(function () {
          $label.text(idle);
          $btn.data("draftBusy", false);
        }, 1600);
      });

      paint();
    }

    $("[data-wizard]").each(function () {
      initWizard($(this));
    });

    /* ---- everything that is safe to re-run over injected markup ---- */
    initDynamic($doc);
  });

  /* ==========================================================================
     Public API
     ========================================================================== */
  /* Reusable hooks for host pages and for charts.js (which consumes only
     enableDragScroll - no chart logic crosses into this file). */
  window.VionexUI = {
    enableDragScroll: enableDragScroll,
    initRailNav: initRailNav,
    initMarquee: initMarquee,
    drawIcons: drawIcons,
    applyOption: applyOption,
    selectCategory: selectCategory,
    toggleSidebar: toggleSidebar,
    refreshNotif: refreshNotif,
    loadPartial: loadPartial,
    init: initDynamic,
  };
})(window.jQuery);

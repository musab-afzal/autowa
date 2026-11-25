/* Generated from the Vionex HTML theme by scripts/convert-html.mjs */
import AppShell from "@/components/AppShell";

export const metadata = {
  title: "Vionex — Error Pages",
  description: "Vionex enterprise admin dashboard — a polished 404 recovery state plus every client and server error page the template ships, built with Bootstrap 5, CSS variables and a scalable design system.",
};

const scripts = [
    "/assets/js/jquery.min.js",
    "/assets/js/bootstrap.bundle.min.js",
    "/assets/js/lucide.min.js",
    "/assets/js/apexcharts.min.js",
    "/assets/js/dashboard.js",
    "/assets/js/charts.js",
  ];

export default function Page() {
  return (
    <AppShell
      scripts={scripts}
    >
      {/* ===== Page header ===== */}
      <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
        <h1 className="fs-4 fw-bold text-title mb-0">
          Error Pages
        </h1>
        <nav aria-label="breadcrumb" className="d-none d-md-block">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="/">
                Dashboard
              </a>
            </li>
            <li className="breadcrumb-item">
              Pages
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Error Pages
            </li>
          </ol>
        </nav>
      </div>
      {/* ===== 404 recovery state ===== */}
      {/* flex-shrink-0: .app-content is a flex column, so a tall hero would
         otherwise be squeezed once the page overflows the viewport */}
      <section
        className="on-dark bg-grad-theme flex-shrink-0 p-3 p-md-4 p-xl-5 rounded-4 mb-3"
        aria-labelledby="errHeroTitle"
      >
        <div className="row g-4 align-items-center">
          <div className="col-12 col-lg-7">
            <span className="badge-soft d-inline-flex align-items-center gap-2 mb-3">
              {" "}
              <i className="icon-14" data-lucide="map-pin-off" aria-hidden="true" />
              {" "}
              <span>
                HTTP
                {" "}
                <bdi>
                  404
                </bdi>
                {" "}
                · Not found
              </span>
              {" "}
            </span>
            <p className="display-1 fw-bold text-title lh-1 mb-3" aria-hidden="true">
              <bdi>
                4
                <span className="text-accent">
                  0
                </span>
                4
              </bdi>
            </p>
            <h2 id="errHeroTitle" className="fs-2 fw-bold text-title mb-2">
              We couldn’t find that page
            </h2>
            <p className="fs-lg text-primary mb-4">
              The link you followed may be broken, or the page may have been renamed and moved somewhere else. Nothing you were working on is lost — carry on from where you were, or head straight back to your dashboard.
            </p>
            <div className="d-flex flex-wrap align-items-center gap-2">
              <a href="/" className="btn btn-accent d-inline-flex align-items-center gap-2 text-nowrap">
                {" "}
                <i className="icon-18" data-lucide="house" aria-hidden="true" />
                Back to dashboard
                {" "}
              </a>
              <a
                href="/"
                className="btn btn-accent-ghost d-inline-flex align-items-center gap-2 text-nowrap"
                data-history-back=""
              >
                {" "}
                <i className="icon-18 flip-rtl" data-lucide="corner-up-left" aria-hidden="true" />
                Go back
                {" "}
              </a>
              <a href="/help-desk" className="btn btn-accent-ghost d-inline-flex align-items-center gap-2 text-nowrap">
                {" "}
                <i className="icon-18" data-lucide="life-buoy" aria-hidden="true" />
                Contact support
                {" "}
              </a>
            </div>
          </div>
          <div className="col-lg-5 d-none d-lg-flex justify-content-center">
            <img src="/assets/images/rocket-b.svg" alt="" width="190" height="221" className="img-fluid float-y" />
          </div>
        </div>
      </section>
      {/* ===== Recovery aids — destinations & request details ===== */}
      <section className="mb-4">
        <h2 className="visually-hidden">
          Get back on track
        </h2>
        <div className="row g-3">
          <div className="col-12 col-xl-8">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <div className="min-w-0">
                    <h3 className="fs-5 fw-bold text-title mb-1">
                      Where would you like to go?
                    </h3>
                    <p className="fs-md text-muted-2 mb-0">
                      The places people reach for most after a broken link.
                    </p>
                  </div>
                  <a href="/" className="d-inline-flex align-items-center gap-1 fs-md fw-medium text-brand">
                    All pages
                    <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                  </a>
                </div>
                <ul className="list-unstyled row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-2 flex-grow-1 mb-0">
                  <li className="col">
                    <a
                      href="/"
                      className="tile-soft d-flex flex-column align-items-start gap-2 h-100 p-3 rounded-3 transition-base"
                    >
                      <span className="icon-box tint-brand" aria-hidden="true">
                        <i data-lucide="sparkles" />
                      </span>
                      <span className="d-block w-100 min-w-0">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-title text-truncate">
                          AI Dashboard
                        </span>
                        {" "}
                        <span className="d-block fs-sm text-muted-2 text-truncate">
                          {"Models & spend"}
                        </span>
                        {" "}
                      </span>
                    </a>
                  </li>
                  <li className="col">
                    <a
                      href="/analytics-dashboard"
                      className="tile-soft d-flex flex-column align-items-start gap-2 h-100 p-3 rounded-3 transition-base"
                    >
                      <span className="icon-box tint-violet" aria-hidden="true">
                        <i data-lucide="bar-chart-3" />
                      </span>
                      <span className="d-block w-100 min-w-0">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-title text-truncate">
                          Analytics
                        </span>
                        {" "}
                        <span className="d-block fs-sm text-muted-2 text-truncate">
                          {"Traffic & funnels"}
                        </span>
                        {" "}
                      </span>
                    </a>
                  </li>
                  <li className="col">
                    <a
                      href="/crm-dashboard"
                      className="tile-soft d-flex flex-column align-items-start gap-2 h-100 p-3 rounded-3 transition-base"
                    >
                      <span className="icon-box tint-blue" aria-hidden="true">
                        <i data-lucide="contact-round" />
                      </span>
                      <span className="d-block w-100 min-w-0">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-title text-truncate">
                          CRM
                        </span>
                        {" "}
                        <span className="d-block fs-sm text-muted-2 text-truncate">
                          {"Deals & contacts"}
                        </span>
                        {" "}
                      </span>
                    </a>
                  </li>
                  <li className="col">
                    <a
                      href="/ecommerce-dashboard"
                      className="tile-soft d-flex flex-column align-items-start gap-2 h-100 p-3 rounded-3 transition-base"
                    >
                      <span className="icon-box tint-amber" aria-hidden="true">
                        <i data-lucide="shopping-basket" />
                      </span>
                      <span className="d-block w-100 min-w-0">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-title text-truncate">
                          Ecommerce
                        </span>
                        {" "}
                        <span className="d-block fs-sm text-muted-2 text-truncate">
                          {"Orders & revenue"}
                        </span>
                        {" "}
                      </span>
                    </a>
                  </li>
                  <li className="col">
                    <a
                      href="/finance-dashboard"
                      className="tile-soft d-flex flex-column align-items-start gap-2 h-100 p-3 rounded-3 transition-base"
                    >
                      <span className="icon-box tint-emerald" aria-hidden="true">
                        <i data-lucide="credit-card" />
                      </span>
                      <span className="d-block w-100 min-w-0">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-title text-truncate">
                          Finance
                        </span>
                        {" "}
                        <span className="d-block fs-sm text-muted-2 text-truncate">
                          {"Cash & invoices"}
                        </span>
                        {" "}
                      </span>
                    </a>
                  </li>
                  <li className="col">
                    <a
                      href="/inventory-dashboard"
                      className="tile-soft d-flex flex-column align-items-start gap-2 h-100 p-3 rounded-3 transition-base"
                    >
                      <span className="icon-box tint-cyan" aria-hidden="true">
                        <i data-lucide="package" />
                      </span>
                      <span className="d-block w-100 min-w-0">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-title text-truncate">
                          Inventory
                        </span>
                        {" "}
                        <span className="d-block fs-sm text-muted-2 text-truncate">
                          {"Stock & suppliers"}
                        </span>
                        {" "}
                      </span>
                    </a>
                  </li>
                  <li className="col">
                    <a
                      href="/settings"
                      className="tile-soft d-flex flex-column align-items-start gap-2 h-100 p-3 rounded-3 transition-base"
                    >
                      <span className="icon-box tint-slate" aria-hidden="true">
                        <i data-lucide="settings" />
                      </span>
                      <span className="d-block w-100 min-w-0">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-title text-truncate">
                          Settings
                        </span>
                        {" "}
                        <span className="d-block fs-sm text-muted-2 text-truncate">
                          {"Profile & security"}
                        </span>
                        {" "}
                      </span>
                    </a>
                  </li>
                  <li className="col">
                    <a
                      href="/help-desk"
                      className="tile-soft d-flex flex-column align-items-start gap-2 h-100 p-3 rounded-3 transition-base"
                    >
                      <span className="icon-box tint-rose" aria-hidden="true">
                        <i data-lucide="life-buoy" />
                      </span>
                      <span className="d-block w-100 min-w-0">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-title text-truncate">
                          Help Desk
                        </span>
                        {" "}
                        <span className="d-block fs-sm text-muted-2 text-truncate">
                          {"Tickets & support"}
                        </span>
                        {" "}
                      </span>
                    </a>
                  </li>
                  <li className="col">
                    <a
                      href="/faq"
                      className="tile-soft d-flex flex-column align-items-start gap-2 h-100 p-3 rounded-3 transition-base"
                    >
                      <span className="icon-box tint-magenta" aria-hidden="true">
                        <i data-lucide="circle-help" />
                      </span>
                      <span className="d-block w-100 min-w-0">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-title text-truncate">
                          FAQ
                        </span>
                        {" "}
                        <span className="d-block fs-sm text-muted-2 text-truncate">
                          Common answers
                        </span>
                        {" "}
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <span className="icon-box tint-slate" aria-hidden="true">
                    <i data-lucide="fingerprint" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="fs-5 fw-bold text-title mb-0">
                      Request details
                    </h3>
                    <p className="fs-sm text-muted-2 mb-0">
                      Handy if you report this page
                    </p>
                  </div>
                </div>
                {/* flex-grow-1 + justify-content-between: when the paired card
                   next door is taller, the rows spread evenly instead of
                   leaving one dead block above the footer */}
                <dl
                  className="d-flex flex-column justify-content-between gap-2 flex-grow-1 mb-3"
                  id="errRequestDetails"
                >
                  <div className="d-flex align-items-center justify-content-between gap-3">
                    <dt className="fs-md fw-normal text-muted-2 flex-shrink-0">
                      Status
                    </dt>
                    <dd className="min-w-0 fs-md fw-semibold text-title text-truncate mb-0">
                      <bdi>
                        404 Not Found
                      </bdi>
                    </dd>
                  </div>
                  <div className="d-flex align-items-center justify-content-between gap-3">
                    <dt className="fs-md fw-normal text-muted-2 flex-shrink-0">
                      Request ID
                    </dt>
                    <dd className="min-w-0 fs-md fw-semibold text-title text-truncate mb-0">
                      <bdi>
                        req_9f2c41ab7de0
                      </bdi>
                    </dd>
                  </div>
                  <div className="d-flex align-items-center justify-content-between gap-3">
                    <dt className="fs-md fw-normal text-muted-2 flex-shrink-0">
                      Path
                    </dt>
                    <dd className="min-w-0 fs-md fw-semibold text-title text-truncate mb-0">
                      <bdi>
                        /reports/q3-forecast
                      </bdi>
                    </dd>
                  </div>
                  <div className="d-flex align-items-center justify-content-between gap-3">
                    <dt className="fs-md fw-normal text-muted-2 flex-shrink-0">
                      Method
                    </dt>
                    <dd className="min-w-0 fs-md fw-semibold text-title text-truncate mb-0">
                      <bdi>
                        GET
                      </bdi>
                    </dd>
                  </div>
                  <div className="d-flex align-items-center justify-content-between gap-3">
                    <dt className="fs-md fw-normal text-muted-2 flex-shrink-0">
                      Time
                    </dt>
                    <dd className="min-w-0 fs-md fw-semibold text-title text-truncate mb-0">
                      <bdi>
                        2 Sep 2026, 14:32 UTC
                      </bdi>
                    </dd>
                  </div>
                </dl>
                <a href="#" className="tile-soft d-flex align-items-center gap-2 p-2 rounded-3 transition-base">
                  <span className="legend-dot bg-cat-emerald" aria-hidden="true" />
                  <span className="min-w-0 flex-grow-1 fs-md fw-semibold text-truncate">
                    All systems operational
                  </span>
                  <i
                    className="icon-16 flip-rtl flex-shrink-0 text-muted-2"
                    data-lucide="chevron-right"
                    aria-hidden="true"
                  />
                </a>
                <div className="d-flex flex-wrap align-items-center gap-2 pt-3 mt-3 border-t-soft">
                  <button
                    type="button"
                    className="btn btn-outline-soft btn-sm d-inline-flex align-items-center gap-2"
                    data-copy="#errRequestDetails"
                    aria-live="polite"
                  >
                    <span className="d-inline-flex align-items-center gap-2" data-copy-label="">
                      <i className="icon-14" data-lucide="copy" aria-hidden="true" />
                      Copy details
                    </span>
                    {" "}
                    <span className="d-none d-inline-flex align-items-center gap-2" data-copy-done="">
                      <i className="icon-14" data-lucide="check" aria-hidden="true" />
                      Copied
                    </span>
                  </button>
                  <a href="/help-desk" className="btn btn-primary btn-sm d-inline-flex align-items-center gap-2">
                    {" "}
                    <i className="icon-14" data-lucide="bug" aria-hidden="true" />
                    Report this page
                    {" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Error state catalogue ===== */}
      <section className="mb-4" aria-labelledby="errCatalogueTitle" data-search-scope="">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
          <div className="min-w-0">
            <h2 id="errCatalogueTitle" className="fs-2 fw-bold text-title mb-1">
              Every error state, ready to ship
            </h2>
            <p className="fw-medium text-body-2 mb-0">
              Twelve designed responses cover what your app actually returns — each one themed, responsive and written in plain language rather than stack-trace shorthand.
            </p>
          </div>
          <a href="/error-sections" className="btn btn-outline-soft d-inline-flex align-items-center gap-2 text-nowrap">
            {" "}
            <i className="icon-18" data-lucide="code" aria-hidden="true" />
            Copy-ready sections
            {" "}
          </a>
        </div>
        <div className="row g-2 align-items-center mb-3">
          <div className="col-12 col-lg-5">
            <label htmlFor="errSearch" className="visually-hidden">
              Search error states
            </label>
            <div className="field-icon" role="search">
              <i className="icon-18" data-lucide="search" aria-hidden="true" />
              {" "}
              <input
                type="search"
                className="form-control rounded-pill"
                id="errSearch"
                name="errSearch"
                placeholder="Search by code, name or message…"
                data-search-input=""
              />
            </div>
          </div>
          <div className="col-12 col-lg-7 d-flex flex-wrap align-items-center justify-content-lg-end gap-2">
            <p className="fs-md text-muted-2 mb-0" aria-live="polite">
              Showing
              {" "}
              <bdi className="fw-semibold text-title" data-search-count="">
                12
              </bdi>
              {" "}of{" "}
              <bdi data-search-total="">
                12
              </bdi>
              {" "}
              states
            </p>
            <span
              className="badge-soft tint-primary d-none d-inline-flex align-items-center gap-2"
              data-search-active=""
            >
              {" "}
              <i className="icon-12" data-lucide="search" aria-hidden="true" />
              {" "}
              <bdi data-search-query="" />
              {" "}
              <button
                type="button"
                className="btn btn-ghost btn-sm d-inline-flex p-0 lh-1 text-reset"
                data-search-clear=""
                aria-label="Clear search"
              >
                <i className="icon-14" data-lucide="x" aria-hidden="true" />
              </button>
              {" "}
            </span>
            <div
              className="nav nav-pills seg-toggle d-inline-flex flex-nowrap gap-1 p-1 mw-100 rounded-pill bg-soft overflow-x-auto scrollbar-none"
              role="group"
              aria-label="Filter error states by kind"
            >
              <button
                type="button"
                className="nav-link active fw-semibold text-nowrap"
                data-filter="all"
                aria-pressed="true"
              >
                All
              </button>
              <button
                type="button"
                className="nav-link fw-semibold text-nowrap"
                data-filter="client"
                aria-pressed="false"
              >
                Client
                {" "}
                <bdi>
                  4xx
                </bdi>
              </button>
              <button
                type="button"
                className="nav-link fw-semibold text-nowrap"
                data-filter="server"
                aria-pressed="false"
              >
                Server
                {" "}
                <bdi>
                  5xx
                </bdi>
              </button>
            </div>
          </div>
        </div>
        <ul className="list-unstyled row row-cols-1 row-cols-sm-2 row-cols-xl-3 row-cols-xxl-4 g-3 mb-0">
          <li className="col" data-filter-tags="client">
            <div className="card hover-lift h-100 overflow-hidden">
              <div className="card-body d-flex flex-column ">
                <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                  <span className="icon-box icon-box-lg tint-rose" aria-hidden="true">
                    <i data-lucide="file-warning" />
                  </span>
                  <span className="display-6 fw-bold text-title lh-1">
                    <bdi>
                      400
                    </bdi>
                  </span>
                </div>
                <h3 className="fs-5 fw-bold text-title mb-1">
                  Bad Request
                </h3>
                <p className="fs-md text-muted-2 mb-3">
                  The server could not read the request — usually a malformed parameter or a payload that failed validation. The state names the field at fault so it can be fixed in one pass.
                </p>
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mt-auto pt-3 border-t-soft">
                  <span className="fs-sm text-muted-2 text-nowrap">
                    Client error ·
                    {" "}
                    <bdi>
                      4xx
                    </bdi>
                  </span>
                  <a
                    href="/error-preview?code=400"
                    className="d-inline-flex align-items-center gap-1 fs-md fw-medium text-brand"
                  >
                    Preview
                    <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                  </a>
                </div>
              </div>
              <span className="accent-edge-b text-cat-rose" aria-hidden="true" />
            </div>
          </li>
          <li className="col" data-filter-tags="client">
            <div className="card hover-lift h-100 overflow-hidden">
              <div className="card-body d-flex flex-column">
                <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                  <span className="icon-box icon-box-lg tint-amber" aria-hidden="true">
                    <i data-lucide="lock-keyhole" />
                  </span>
                  <span className="display-6 fw-bold text-title lh-1">
                    <bdi>
                      401
                    </bdi>
                  </span>
                </div>
                <h3 className="fs-5 fw-bold text-title mb-1">
                  Unauthorized
                </h3>
                <p className="fs-md text-muted-2 mb-3">
                  No valid credentials arrived with the request, or the session quietly expired. Signing in again issues a fresh token and drops you back where you were.
                </p>
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mt-auto pt-3 border-t-soft">
                  <span className="fs-sm text-muted-2 text-nowrap">
                    Client error ·
                    {" "}
                    <bdi>
                      4xx
                    </bdi>
                  </span>
                  <a
                    href="/error-preview?code=401"
                    className="d-inline-flex align-items-center gap-1 fs-md fw-medium text-brand"
                  >
                    Preview
                    <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                  </a>
                </div>
              </div>
              <span className="accent-edge-b text-cat-amber" aria-hidden="true" />
            </div>
          </li>
          <li className="col" data-filter-tags="client">
            <div className="card hover-lift h-100 overflow-hidden">
              <div className="card-body d-flex flex-column">
                <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                  <span className="icon-box icon-box-lg tint-orange" aria-hidden="true">
                    <i data-lucide="shield-x" />
                  </span>
                  <span className="display-6 fw-bold text-title lh-1">
                    <bdi>
                      403
                    </bdi>
                  </span>
                </div>
                <h3 className="fs-5 fw-bold text-title mb-1">
                  Forbidden
                </h3>
                <p className="fs-md text-muted-2 mb-3">
                  You are signed in, but this workspace role cannot open that resource. An owner can grant access from Settings without anyone raising a ticket.
                </p>
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mt-auto pt-3 border-t-soft">
                  <span className="fs-sm text-muted-2 text-nowrap">
                    Client error ·
                    {" "}
                    <bdi>
                      4xx
                    </bdi>
                  </span>
                  <a
                    href="/error-preview?code=403"
                    className="d-inline-flex align-items-center gap-1 fs-md fw-medium text-brand"
                  >
                    Preview
                    <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                  </a>
                </div>
              </div>
              <span className="accent-edge-b text-cat-orange" aria-hidden="true" />
            </div>
          </li>
          <li className="col" data-filter-tags="client">
            <div className="card ring-primary hover-lift h-100 overflow-hidden">
              <div className="card-body d-flex flex-column">
                <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                  <span className="icon-box icon-box-lg tint-violet" aria-hidden="true">
                    <i data-lucide="map-pin-off" />
                  </span>
                  <span className="display-6 fw-bold text-title lh-1">
                    <bdi>
                      404
                    </bdi>
                  </span>
                </div>
                <h3 className="fs-5 fw-bold text-title mb-1">
                  Page Not Found
                </h3>
                <p className="fs-md text-muted-2 mb-3">
                  The page has moved, been renamed, or never existed at all. Search from the state itself, or step back to a dashboard you use every day.
                </p>
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mt-auto pt-3 border-t-soft">
                  <span className="fs-sm text-muted-2 text-nowrap">
                    Client error ·
                    {" "}
                    <bdi>
                      4xx
                    </bdi>
                  </span>
                  <a
                    href="/error-preview?code=404"
                    className="d-inline-flex align-items-center gap-1 fs-md fw-medium text-brand"
                  >
                    Preview
                    <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                  </a>
                </div>
              </div>
              <span className="accent-edge-b text-cat-violet" aria-hidden="true" />
            </div>
          </li>
          <li className="col" data-filter-tags="client">
            <div className="card hover-lift h-100 overflow-hidden">
              <div className="card-body d-flex flex-column">
                <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                  <span className="icon-box icon-box-lg tint-brand" aria-hidden="true">
                    <i data-lucide="ban" />
                  </span>
                  <span className="display-6 fw-bold text-title lh-1">
                    <bdi>
                      405
                    </bdi>
                  </span>
                </div>
                <h3 className="fs-5 fw-bold text-title mb-1">
                  Method Not Allowed
                </h3>
                <p className="fs-md text-muted-2 mb-3">
                  The endpoint exists, but it does not accept the verb the request used. The state prints the methods it does accept, so the fix is obvious.
                </p>
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mt-auto pt-3 border-t-soft">
                  <span className="fs-sm text-muted-2 text-nowrap">
                    Client error ·
                    {" "}
                    <bdi>
                      4xx
                    </bdi>
                  </span>
                  <a
                    href="/error-preview?code=405"
                    className="d-inline-flex align-items-center gap-1 fs-md fw-medium text-brand"
                  >
                    Preview
                    <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                  </a>
                </div>
              </div>
              <span className="accent-edge-b text-cat-brand" aria-hidden="true" />
            </div>
          </li>
          <li className="col" data-filter-tags="client">
            <div className="card hover-lift h-100 overflow-hidden">
              <div className="card-body d-flex flex-column">
                <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                  <span className="icon-box icon-box-lg tint-blue" aria-hidden="true">
                    <i data-lucide="timer-off" />
                  </span>
                  <span className="display-6 fw-bold text-title lh-1">
                    <bdi>
                      408
                    </bdi>
                  </span>
                </div>
                <h3 className="fs-5 fw-bold text-title mb-1">
                  Request Timeout
                </h3>
                <p className="fs-md text-muted-2 mb-3">
                  The request took longer to arrive than the gateway was willing to wait. A retry on a steadier connection almost always goes straight through.
                </p>
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mt-auto pt-3 border-t-soft">
                  <span className="fs-sm text-muted-2 text-nowrap">
                    Client error ·
                    {" "}
                    <bdi>
                      4xx
                    </bdi>
                  </span>
                  <a
                    href="/error-preview?code=408"
                    className="d-inline-flex align-items-center gap-1 fs-md fw-medium text-brand"
                  >
                    Preview
                    <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                  </a>
                </div>
              </div>
              <span className="accent-edge-b text-cat-blue" aria-hidden="true" />
            </div>
          </li>
          <li className="col" data-filter-tags="client">
            <div className="card hover-lift h-100 overflow-hidden">
              <div className="card-body d-flex flex-column">
                <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                  <span className="icon-box icon-box-lg tint-slate" aria-hidden="true">
                    <i data-lucide="link-2-off" />
                  </span>
                  <span className="display-6 fw-bold text-title lh-1">
                    <bdi>
                      410
                    </bdi>
                  </span>
                </div>
                <h3 className="fs-5 fw-bold text-title mb-1">
                  Gone
                </h3>
                <p className="fs-md text-muted-2 mb-3">
                  The resource was deliberately removed and no forwarding address exists. The state offers the archive and the nearest live alternative instead of a dead end.
                </p>
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mt-auto pt-3 border-t-soft">
                  <span className="fs-sm text-muted-2 text-nowrap">
                    Client error ·
                    {" "}
                    <bdi>
                      4xx
                    </bdi>
                  </span>
                  <a
                    href="/error-preview?code=410"
                    className="d-inline-flex align-items-center gap-1 fs-md fw-medium text-brand"
                  >
                    Preview
                    <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                  </a>
                </div>
              </div>
              <span className="accent-edge-b text-cat-slate" aria-hidden="true" />
            </div>
          </li>
          <li className="col" data-filter-tags="client">
            <div className="card hover-lift h-100 overflow-hidden">
              <div className="card-body d-flex flex-column">
                <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                  <span className="icon-box icon-box-lg tint-cyan" aria-hidden="true">
                    <i data-lucide="gauge" />
                  </span>
                  <span className="display-6 fw-bold text-title lh-1">
                    <bdi>
                      429
                    </bdi>
                  </span>
                </div>
                <h3 className="fs-5 fw-bold text-title mb-1">
                  Too Many Requests
                </h3>
                <p className="fs-md text-muted-2 mb-3">
                  The caller passed your plan’s rate limit for this window. The state shows the exact reset time and the plan that lifts the cap.
                </p>
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mt-auto pt-3 border-t-soft">
                  <span className="fs-sm text-muted-2 text-nowrap">
                    Client error ·
                    {" "}
                    <bdi>
                      4xx
                    </bdi>
                  </span>
                  <a
                    href="/error-preview?code=429"
                    className="d-inline-flex align-items-center gap-1 fs-md fw-medium text-brand"
                  >
                    Preview
                    <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                  </a>
                </div>
              </div>
              <span className="accent-edge-b text-cat-cyan" aria-hidden="true" />
            </div>
          </li>
          <li className="col" data-filter-tags="server">
            <div className="card hover-lift h-100 overflow-hidden">
              <div className="card-body d-flex flex-column">
                <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                  <span className="icon-box icon-box-lg tint-danger" aria-hidden="true">
                    <i data-lucide="server-crash" />
                  </span>
                  <span className="display-6 fw-bold text-title lh-1">
                    <bdi>
                      500
                    </bdi>
                  </span>
                </div>
                <h3 className="fs-5 fw-bold text-title mb-1">
                  Internal Server Error
                </h3>
                <p className="fs-md text-muted-2 mb-3">
                  Something broke on our side while the request was being handled. The state carries an incident ID, so support can trace it without asking for a screenshot.
                </p>
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mt-auto pt-3 border-t-soft">
                  <span className="fs-sm text-muted-2 text-nowrap">
                    Server error ·
                    {" "}
                    <bdi>
                      5xx
                    </bdi>
                  </span>
                  <a
                    href="/error-preview?code=500"
                    className="d-inline-flex align-items-center gap-1 fs-md fw-medium text-brand"
                  >
                    Preview
                    <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                  </a>
                </div>
              </div>
              <span className="accent-edge-b text-danger" aria-hidden="true" />
            </div>
          </li>
          <li className="col" data-filter-tags="server">
            <div className="card hover-lift h-100 overflow-hidden">
              <div className="card-body d-flex flex-column">
                <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                  <span className="icon-box icon-box-lg tint-magenta" aria-hidden="true">
                    <i data-lucide="unplug" />
                  </span>
                  <span className="display-6 fw-bold text-title lh-1">
                    <bdi>
                      502
                    </bdi>
                  </span>
                </div>
                <h3 className="fs-5 fw-bold text-title mb-1">
                  Bad Gateway
                </h3>
                <p className="fs-md text-muted-2 mb-3">
                  An upstream service answered with something the gateway could not use. These clear on their own more often than not, so the state leads with a retry.
                </p>
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mt-auto pt-3 border-t-soft">
                  <span className="fs-sm text-muted-2 text-nowrap">
                    Server error ·
                    {" "}
                    <bdi>
                      5xx
                    </bdi>
                  </span>
                  <a
                    href="/error-preview?code=502"
                    className="d-inline-flex align-items-center gap-1 fs-md fw-medium text-brand"
                  >
                    Preview
                    <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                  </a>
                </div>
              </div>
              <span className="accent-edge-b text-cat-magenta" aria-hidden="true" />
            </div>
          </li>
          <li className="col" data-filter-tags="server">
            <div className="card hover-lift h-100 overflow-hidden">
              <div className="card-body d-flex flex-column">
                <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                  <span className="icon-box icon-box-lg tint-emerald" aria-hidden="true">
                    <i data-lucide="wrench" />
                  </span>
                  <span className="display-6 fw-bold text-title lh-1">
                    <bdi>
                      503
                    </bdi>
                  </span>
                </div>
                <h3 className="fs-5 fw-bold text-title mb-1">
                  Service Unavailable
                </h3>
                <p className="fs-md text-muted-2 mb-3">
                  The service is briefly out of capacity, or a planned maintenance window is open. The state shows live status and when normal service resumes.
                </p>
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mt-auto pt-3 border-t-soft">
                  <span className="fs-sm text-muted-2 text-nowrap">
                    Server error ·
                    {" "}
                    <bdi>
                      5xx
                    </bdi>
                  </span>
                  <a
                    href="/error-preview?code=503"
                    className="d-inline-flex align-items-center gap-1 fs-md fw-medium text-brand"
                  >
                    Preview
                    <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                  </a>
                </div>
              </div>
              <span className="accent-edge-b text-cat-emerald" aria-hidden="true" />
            </div>
          </li>
          <li className="col" data-filter-tags="server">
            <div className="card hover-lift h-100 overflow-hidden">
              <div className="card-body d-flex flex-column">
                <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                  <span className="icon-box icon-box-lg tint-blue" aria-hidden="true">
                    <i data-lucide="hourglass" />
                  </span>
                  <span className="display-6 fw-bold text-title lh-1">
                    <bdi>
                      504
                    </bdi>
                  </span>
                </div>
                <h3 className="fs-5 fw-bold text-title mb-1">
                  Gateway Timeout
                </h3>
                <p className="fs-md text-muted-2 mb-3">
                  An upstream service accepted the request but never answered in time. Retrying is safe: nothing was written before the gateway gave up waiting.
                </p>
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mt-auto pt-3 border-t-soft">
                  <span className="fs-sm text-muted-2 text-nowrap">
                    Server error ·
                    {" "}
                    <bdi>
                      5xx
                    </bdi>
                  </span>
                  <a
                    href="/error-preview?code=504"
                    className="d-inline-flex align-items-center gap-1 fs-md fw-medium text-brand"
                  >
                    Preview
                    <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                  </a>
                </div>
              </div>
              <span className="accent-edge-b text-cat-blue" aria-hidden="true" />
            </div>
          </li>
          {/* Empty state — shown by the search module when nothing matches */}
          <li className="col-12 d-none" data-search-empty="">
            <div className="card border-dashed">
              <div className="card-body text-center py-5">
                <span className="icon-box icon-box-xl tint-primary mx-auto mb-3" aria-hidden="true">
                  <i data-lucide="search-x" />
                </span>
                <h3 className="fs-5 fw-bold text-title mb-1">
                  No error state matched “
                  <bdi data-search-query="" />
                  ”
                </h3>
                <p className="fs-md text-muted-2 mb-3">
                  Try a status code such as
                  {" "}
                  <bdi>
                    404
                  </bdi>
                  , a name such as “timeout”, or clear the search to see all twelve again.
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-2">
                  <button
                    type="button"
                    className="btn btn-outline-soft d-inline-flex align-items-center gap-2"
                    data-search-clear=""
                  >
                    <i className="icon-18" data-lucide="rotate-ccw" aria-hidden="true" />
                    Clear search
                  </button>
                  <a href="/help-desk" className="btn btn-primary d-inline-flex align-items-center gap-2">
                    {" "}
                    <i className="icon-18" data-lucide="ticket" aria-hidden="true" />
                    Ask our team
                    {" "}
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </section>
      {/* ========== FOOTER ========== */}
    </AppShell>
  );
}

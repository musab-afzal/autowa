/* Generated from the Vionex HTML theme by scripts/convert-html.mjs */
import AppShell from "@/components/AppShell";

export const metadata = {
  title: "Vionex — AI Dashboard",
  description: "Vionex enterprise admin dashboard — AI operations overview built with Bootstrap 5, CSS variables and a scalable design system.",
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
          AI Dashboard
        </h1>
        <nav aria-label="breadcrumb" className="d-none d-md-block">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="/">
                Dashboard
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              AI Dashboard
            </li>
          </ol>
        </nav>
      </div>
      {/* ===== Dashboard sections go here ===== */}
      {/* ===== Support overview ===== */}
      <section className="mb-4" aria-labelledby="hd-overview-title">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
          <div className="min-w-0">
            <h2 id="hd-overview-title" className="fs-4 fw-bold text-title mb-1">
              Support Overview
            </h2>
            <p className="fs-md text-body-2 mb-0">
              Everything sitting in the queue right now — status mix, workload and SLA health.
            </p>
          </div>
          <div className="d-flex flex-wrap align-items-center gap-2">
            <span className="badge-soft tint-emerald border-current d-inline-flex align-self-stretch align-items-center gap-2 px-3">
              {" "}
              <i className="icon-12" data-lucide="activity" aria-hidden="true" />
              {" "}
              <bdi>
                Live · synced 2 min ago
              </bdi>
              {" "}
            </span>
            <button
              type="button"
              className="btn btn-accent d-inline-flex flex-nowrap align-items-center justify-content-center gap-2 text-nowrap"
            >
              <i className="icon-20" data-lucide="ticket-plus" aria-hidden="true" />
              New Ticket
            </button>
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-outline-soft btn-18 rounded-circle"
                id="hdOverviewMenu"
                data-bs-toggle="dropdown"
                data-bs-offset="0,8"
                aria-expanded="false"
                aria-label="Overview options"
              >
                <i data-lucide="ellipsis-vertical" />
              </button>
              {" "}
              <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="hdOverviewMenu">
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="refresh-cw" />
                    Refresh queue
                  </button>
                </li>
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="user-round-cog" />
                    Assign unclaimed
                  </button>
                </li>
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="download" />
                    Export report
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row g-3">
          {/* Ticket pipeline */}
          <div className="col-12 col-xxl-8">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-start justify-content-between gap-3 mb-3">
                  <div className="min-w-0">
                    <h3 className="fs-xs fw-semibold text-uppercase text-muted-2 mb-2">
                      Total Tickets
                    </h3>
                    <p className="d-flex flex-wrap align-items-baseline gap-2 mb-0">
                      <span className="fs-1 fw-bold text-title lh-1">
                        <bdi>
                          12,486
                        </bdi>
                      </span>
                      <span className="badge-soft tint-emerald d-inline-flex align-items-center gap-1">
                        {" "}
                        <i className="icon-12 flip-rtl" data-lucide="trending-up" aria-hidden="true" />
                        <bdi>
                          +8.4%
                        </bdi>
                        {" "}
                      </span>
                      <span className="fs-md text-body-2">
                        vs last month
                      </span>
                    </p>
                  </div>
                  <div
                    className="nav nav-pills seg-toggle flex-nowrap gap-1 p-1 rounded-pill bg-soft"
                    role="group"
                    aria-label="Ticket volume range"
                  >
                    <button type="button" className="nav-link fw-semibold" aria-pressed="false">
                      Today
                    </button>
                    <button type="button" className="nav-link fw-semibold" aria-pressed="false">
                      7D
                    </button>
                    <button type="button" className="nav-link active fw-semibold" aria-pressed="true">
                      30D
                    </button>
                  </div>
                </div>
                <p className="d-flex flex-wrap align-items-center justify-content-between gap-2 fs-xs text-muted-2 mb-2">
                  <span className="fw-semibold text-uppercase">
                    Status mix
                  </span>
                  <bdi>
                    Resolution rate 84.1%
                  </bdi>
                </p>
                <div className="progress-stacked progress-lg mb-3">
                  <div
                    className="progress progress-lg"
                    role="progressbar"
                    aria-label="Open tickets"
                    aria-valuenow="10"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "10%" }}
                  >
                    <div className="progress-bar bg-cat-blue" />
                  </div>
                  <div
                    className="progress progress-lg"
                    role="progressbar"
                    aria-label="Pending tickets"
                    aria-valuenow="6"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "5.9%" }}
                  >
                    <div className="progress-bar bg-cat-amber" />
                  </div>
                  <div
                    className="progress progress-lg"
                    role="progressbar"
                    aria-label="Resolved tickets"
                    aria-valuenow="84"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "84.1%" }}
                  >
                    <div className="progress-bar bg-cat-emerald" />
                  </div>
                </div>
                <ul className="list-unstyled row row-cols-1 row-cols-sm-3 g-3 flex-grow-1 mb-0">
                  <li className="col">
                    <div className="tile-soft d-flex flex-column h-100 p-3 rounded-3">
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <span className="legend-dot bg-cat-blue" aria-hidden="true" />
                        <h4 className="flex-grow-1 min-w-0 fs-md fw-semibold text-title text-truncate mb-0">
                          Open
                        </h4>
                        <span className="badge-soft tint-blue flex-shrink-0">
                          <bdi>
                            10.0%
                          </bdi>
                        </span>
                      </div>
                      <p className="fs-2 fw-bold text-title lh-1 mb-1">
                        <bdi>
                          1,248
                        </bdi>
                      </p>
                      <p className="d-flex align-items-center gap-1 fs-xs text-body-2 mb-0">
                        <i className="icon-12 flip-rtl text-cat-amber" data-lucide="trending-up" aria-hidden="true" />
                        <bdi>
                          +38 vs yesterday
                        </bdi>
                      </p>
                      <div id="hdOpenSpark" className="chart-area mt-auto" />
                    </div>
                  </li>
                  <li className="col">
                    <div className="tile-soft d-flex flex-column h-100 p-3 rounded-3">
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <span className="legend-dot bg-cat-amber" aria-hidden="true" />
                        <h4 className="flex-grow-1 min-w-0 fs-md fw-semibold text-title text-truncate mb-0">
                          Pending
                        </h4>
                        <span className="badge-soft tint-amber flex-shrink-0">
                          <bdi>
                            5.9%
                          </bdi>
                        </span>
                      </div>
                      <p className="fs-2 fw-bold text-title lh-1 mb-1">
                        <bdi>
                          736
                        </bdi>
                      </p>
                      <p className="d-flex align-items-center gap-1 fs-xs text-body-2 mb-0">
                        <i
                          className="icon-12 flip-rtl text-cat-emerald"
                          data-lucide="trending-down"
                          aria-hidden="true"
                        />
                        <bdi>
                          −14 vs yesterday
                        </bdi>
                      </p>
                      <div id="hdPendingSpark" className="chart-area mt-auto" />
                    </div>
                  </li>
                  <li className="col">
                    <div className="tile-soft d-flex flex-column h-100 p-3 rounded-3">
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <span className="legend-dot bg-cat-emerald" aria-hidden="true" />
                        <h4 className="flex-grow-1 min-w-0 fs-md fw-semibold text-title text-truncate mb-0">
                          Resolved
                        </h4>
                        <span className="badge-soft tint-emerald flex-shrink-0">
                          <bdi>
                            84.1%
                          </bdi>
                        </span>
                      </div>
                      <p className="fs-2 fw-bold text-title lh-1 mb-1">
                        <bdi>
                          10,502
                        </bdi>
                      </p>
                      <p className="d-flex align-items-center gap-1 fs-xs text-body-2 mb-0">
                        <i className="icon-12 flip-rtl text-cat-emerald" data-lucide="trending-up" aria-hidden="true" />
                        <bdi>
                          +318 vs yesterday
                        </bdi>
                      </p>
                      <div id="hdResolvedSpark" className="chart-area mt-auto" />
                    </div>
                  </li>
                </ul>
                <ul className="list-unstyled row row-cols-1 row-cols-sm-3 g-3 border-t-soft pt-3 mt-3 mb-0">
                  <li className="col d-flex align-items-center gap-2">
                    <span className="icon-box icon-box-sm tint-rose border-current" aria-hidden="true">
                      <i data-lucide="user-round-x" />
                    </span>
                    <span className="min-w-0">
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        Unassigned
                      </span>
                      {" "}
                      <span className="d-block fs-6 fw-semibold text-title">
                        <bdi>
                          84 tickets
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </li>
                  <li className="col d-flex align-items-center gap-2">
                    <span className="icon-box icon-box-sm tint-amber border-current" aria-hidden="true">
                      <i data-lucide="chevrons-up" />
                    </span>
                    <span className="min-w-0">
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        Escalated
                      </span>
                      {" "}
                      <span className="d-block fs-6 fw-semibold text-title">
                        <bdi>
                          26 tickets
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </li>
                  <li className="col d-flex align-items-center gap-2">
                    <span className="icon-box icon-box-sm tint-blue border-current" aria-hidden="true">
                      <i data-lucide="inbox" />
                    </span>
                    <span className="min-w-0">
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        New today
                      </span>
                      {" "}
                      <span className="d-block fs-6 fw-semibold text-title">
                        <bdi>
                          342 tickets
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* SLA performance */}
          <div className="col-12 col-xxl-4">
            <div className="on-dark bg-grad-theme d-flex flex-column gap-3 h-100 p-3 p-md-4 rounded-4">
              <div className="d-flex align-items-center gap-3">
                <span className="icon-box icon-box-lg bg-soft border-theme" aria-hidden="true">
                  <i data-lucide="gauge" />
                </span>
                <div className="min-w-0">
                  <h3 className="fs-xs fw-semibold text-uppercase text-primary mb-0">
                    SLA Performance
                  </h3>
                  <span className="d-block fs-md text-title text-truncate">
                    <bdi>
                      Rolling 30 days · target 95%
                    </bdi>
                  </span>
                </div>
              </div>
              {/* Below xxl the panel spans the full page, so the gauge and its
                 readings sit side by side rather than stacking into a tall,
                 sparse column; at xxl they stack back into the narrow column. */}
              <div className="row g-3 g-xl-4 align-items-center flex-grow-1">
                <div className="col-12 col-md-5 col-xxl-12">
                  <div className="bg-soft border-theme rounded-4 p-3">
                    <div className="position-relative d-flex justify-content-center">
                      <div id="hdSlaGauge" className="chart-area" />
                      <span className="chart-center mt-3">
                        <span className="d-block fs-2 fw-bold text-title lh-1">
                          <span className="visually-hidden">
                            SLA compliance:
                          </span>
                          <bdi>
                            94.6%
                          </bdi>
                        </span>
                        <span className="d-block fs-xs text-primary mt-1">
                          SLA met
                        </span>
                      </span>
                    </div>
                    <p className="fs-xs text-primary text-center mb-0">
                      <bdi>
                        11,812 of 12,486 tickets closed inside target
                      </bdi>
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-7 col-xxl-12">
                  <ul className="list-unstyled row row-cols-1 row-cols-sm-2 g-3 mb-0">
                    <li className="col d-flex align-items-center gap-2">
                      <span className="icon-box icon-box-sm tint-emerald border-current" aria-hidden="true">
                        <i data-lucide="timer" />
                      </span>
                      <span className="min-w-0">
                        {" "}
                        <span className="d-block fs-xs text-primary text-truncate">
                          First response
                        </span>
                        {" "}
                        <span className="d-block fs-6 fw-semibold text-title">
                          <bdi>
                            18m 42s
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </li>
                    <li className="col d-flex align-items-center gap-2">
                      <span className="icon-box icon-box-sm tint-blue border-current" aria-hidden="true">
                        <i data-lucide="circle-check-big" />
                      </span>
                      <span className="min-w-0">
                        {" "}
                        <span className="d-block fs-xs text-primary text-truncate">
                          Avg resolution
                        </span>
                        {" "}
                        <span className="d-block fs-6 fw-semibold text-title">
                          <bdi>
                            6h 12m
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </li>
                    <li className="col d-flex align-items-center gap-2">
                      <span className="icon-box icon-box-sm tint-amber border-current" aria-hidden="true">
                        <i data-lucide="alarm-clock" />
                      </span>
                      <span className="min-w-0">
                        {" "}
                        <span className="d-block fs-xs text-primary text-truncate">
                          Breaching in 2h
                        </span>
                        {" "}
                        <span className="d-block fs-6 fw-semibold text-title">
                          <bdi>
                            38 tickets
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </li>
                    <li className="col d-flex align-items-center gap-2">
                      <span className="icon-box icon-box-sm tint-rose border-current" aria-hidden="true">
                        <i data-lucide="shield-alert" />
                      </span>
                      <span className="min-w-0">
                        {" "}
                        <span className="d-block fs-xs text-primary text-truncate">
                          SLA breaches
                        </span>
                        {" "}
                        <span className="d-block fs-6 fw-semibold text-title">
                          <bdi>
                            674 tickets
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-accent w-100 d-inline-flex flex-nowrap align-items-center justify-content-center gap-2 text-nowrap"
              >
                <i className="icon-20" data-lucide="file-chart-column" aria-hidden="true" />
                View SLA report
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Ticket analytics ===== */}
      <section className="mb-4" aria-labelledby="hd-analytics-title">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
          <div className="min-w-0">
            <h2 id="hd-analytics-title" className="fs-4 fw-bold text-title mb-1">
              Ticket Analytics
            </h2>
            <p className="fs-md text-body-2 mb-0">
              How volume, resolution speed and response times have moved over the last twelve months.
            </p>
          </div>
          <div className="d-flex flex-wrap align-items-center gap-2">
            <span className="badge-soft tint-blue border-current d-inline-flex align-self-stretch align-items-center gap-2 px-3">
              {" "}
              <i className="icon-12" data-lucide="calendar-range" aria-hidden="true" />
              {" "}
              <bdi>
                Sep 2025 – Aug 2026
              </bdi>
              {" "}
            </span>
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-outline-soft btn-18 rounded-circle"
                id="hdAnalyticsMenu"
                data-bs-toggle="dropdown"
                data-bs-offset="0,8"
                aria-expanded="false"
                aria-label="Analytics options"
              >
                <i data-lucide="ellipsis-vertical" />
              </button>
              {" "}
              <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="hdAnalyticsMenu">
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="sliders-horizontal" />
                    Compare queues
                  </button>
                </li>
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="file-down" />
                    Download report
                  </button>
                </li>
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="download" />
                    Export chart data
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row g-3 mb-3">
          {/* Ticket volume */}
          <div className="col-12 col-xxl-8">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <div className="min-w-0">
                    <h3 className="fs-5 fw-bold text-title mb-1">
                      Ticket Volume
                    </h3>
                    <p className="fs-md text-body-2 mb-0">
                      Tickets created against tickets resolved, month by month
                    </p>
                  </div>
                  <div
                    className="nav nav-pills seg-toggle flex-nowrap gap-1 p-1 rounded-pill bg-soft"
                    role="group"
                    aria-label="Volume time range"
                  >
                    <button type="button" className="nav-link fw-semibold" aria-pressed="false">
                      3M
                    </button>
                    <button type="button" className="nav-link fw-semibold" aria-pressed="false">
                      6M
                    </button>
                    <button type="button" className="nav-link active fw-semibold" aria-pressed="true">
                      12M
                    </button>
                  </div>
                </div>
                <ul className="list-unstyled d-flex flex-wrap align-items-center gap-3 mb-2">
                  <li className="d-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-blue" aria-hidden="true" />
                    <span className="fs-md text-body-2">
                      Created
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-emerald" aria-hidden="true" />
                    <span className="fs-md text-body-2">
                      Resolved
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-brand" aria-hidden="true" />
                    <span className="fs-md text-body-2">
                      Resolution rate
                    </span>
                  </li>
                </ul>
                <div className="my-auto">
                  <div id="hdVolumeChart" className="chart-area" />
                </div>
                <ul className="list-unstyled row row-cols-1 row-cols-sm-3 g-3 border-t-soft pt-3 mt-3 mb-0">
                  <li className="col d-flex align-items-center gap-2">
                    <span className="icon-box icon-box-sm tint-blue border-current" aria-hidden="true">
                      <i data-lucide="inbox" />
                    </span>
                    <span className="min-w-0">
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        Tickets created
                      </span>
                      {" "}
                      <span className="d-block fs-6 fw-semibold text-title">
                        <bdi>
                          133,226
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </li>
                  <li className="col d-flex align-items-center gap-2">
                    <span className="icon-box icon-box-sm tint-emerald border-current" aria-hidden="true">
                      <i data-lucide="ticket-check" />
                    </span>
                    <span className="min-w-0">
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        Tickets resolved
                      </span>
                      {" "}
                      <span className="d-block fs-6 fw-semibold text-title">
                        <bdi>
                          127,002
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </li>
                  <li className="col d-flex align-items-center gap-2">
                    <span className="icon-box icon-box-sm tint-brand border-current" aria-hidden="true">
                      <i data-lucide="percent" />
                    </span>
                    <span className="min-w-0">
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        Avg resolution rate
                      </span>
                      {" "}
                      <span className="d-block fs-6 fw-semibold text-title">
                        <bdi>
                          95.3%
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Resolution trend */}
          <div className="col-12 col-xxl-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-start justify-content-between gap-2 mb-3">
                  <div className="min-w-0">
                    <h3 className="fs-5 fw-bold text-title mb-1">
                      Resolution Trend
                    </h3>
                    <p className="fs-md text-body-2 mb-0">
                      Average time from first reply to close
                    </p>
                  </div>
                  <span className="icon-box icon-box-sm tint-emerald border-current" aria-hidden="true">
                    <i data-lucide="history" />
                  </span>
                </div>
                <p className="d-flex flex-wrap align-items-baseline gap-2 mb-0">
                  <span className="fs-2 fw-bold text-title lh-1">
                    <bdi>
                      6h 12m
                    </bdi>
                  </span>
                  <span className="badge-soft tint-emerald d-inline-flex align-items-center gap-1">
                    {" "}
                    <i className="icon-12 flip-rtl" data-lucide="trending-down" aria-hidden="true" />
                    <bdi>
                      26.2%
                    </bdi>
                    {" "}
                  </span>
                  <span className="fs-md text-body-2">
                    faster than a year ago
                  </span>
                </p>
                {/* Below xxl the card spans the full page, so the trace and its
                   readings sit side by side rather than stretching into a wide,
                   sparse band; at xxl they stack back into the narrow column. */}
                <div className="row g-3 g-xl-4 align-items-center flex-grow-1 mt-0">
                  <div className="col-12 col-md-6 col-xxl-12">
                    <div id="hdResolutionChart" className="chart-area" />
                  </div>
                  <div className="col-12 col-md-6 col-xxl-12">
                    <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                      <li>
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <span className="legend-dot bg-cat-blue" aria-hidden="true" />
                          <span className="flex-grow-1 min-w-0 fs-md fw-medium text-title text-truncate">
                            First-contact resolution
                          </span>
                          <span className="fs-md fw-semibold text-title">
                            <bdi>
                              62.4%
                            </bdi>
                          </span>
                        </div>
                        <div
                          className="progress progress-sm"
                          role="progressbar"
                          aria-label="First-contact resolution rate"
                          aria-valuenow="62"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div className="progress-bar bg-cat-blue" style={{ width: "62.4%" }} />
                        </div>
                      </li>
                      <li>
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <span className="legend-dot bg-cat-emerald" aria-hidden="true" />
                          <span className="flex-grow-1 min-w-0 fs-md fw-medium text-title text-truncate">
                            Closed within SLA
                          </span>
                          <span className="fs-md fw-semibold text-title">
                            <bdi>
                              94.6%
                            </bdi>
                          </span>
                        </div>
                        <div
                          className="progress progress-sm"
                          role="progressbar"
                          aria-label="Closed within SLA"
                          aria-valuenow="95"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div className="progress-bar bg-cat-emerald" style={{ width: "94.6%" }} />
                        </div>
                      </li>
                      <li>
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <span className="legend-dot bg-cat-rose" aria-hidden="true" />
                          <span className="flex-grow-1 min-w-0 fs-md fw-medium text-title text-truncate">
                            Reopened after close
                          </span>
                          <span className="fs-md fw-semibold text-title">
                            <bdi>
                              3.2%
                            </bdi>
                          </span>
                        </div>
                        <div
                          className="progress progress-sm"
                          role="progressbar"
                          aria-label="Reopened after close"
                          aria-valuenow="3"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div className="progress-bar bg-cat-rose" style={{ width: "3.2%" }} />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-3">
          {/* Response performance */}
          <div className="col-12 col-xl-7 col-xxl-8">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <div className="min-w-0">
                    <h3 className="fs-5 fw-bold text-title mb-1">
                      Response Performance
                    </h3>
                    <p className="fs-md text-body-2 mb-0">
                      Median time to first reply, by weekday and shift
                    </p>
                  </div>
                  <span className="badge-soft tint-amber border-current d-inline-flex align-items-center gap-2 px-3">
                    {" "}
                    <i className="icon-12" data-lucide="moon-star" aria-hidden="true" />
                    {" "}
                    <bdi>
                      Weekend nights are slowest
                    </bdi>
                    {" "}
                  </span>
                </div>
                <div className="my-auto">
                  <div id="hdResponseHeatmap" className="chart-area" />
                </div>
              </div>
            </div>
          </div>
          {/* First response by priority */}
          <div className="col-12 col-xl-5 col-xxl-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="min-w-0 mb-3">
                  <h3 className="fs-5 fw-bold text-title mb-1">
                    First Response by Priority
                  </h3>
                  <p className="fs-md text-body-2 mb-0">
                    Median first reply as a share of each queue's target
                  </p>
                </div>
                <ul className="list-unstyled d-flex flex-wrap align-items-center gap-3 mb-2">
                  <li className="d-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-emerald" aria-hidden="true" />
                    <span className="fs-md text-body-2">
                      <bdi>
                        Under 50%
                      </bdi>
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-amber" aria-hidden="true" />
                    <span className="fs-md text-body-2">
                      <bdi>
                        50 – 80%
                      </bdi>
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-rose" aria-hidden="true" />
                    <span className="fs-md text-body-2">
                      <bdi>
                        Over 80%
                      </bdi>
                    </span>
                  </li>
                </ul>
                <div className="my-auto">
                  <div id="hdPriorityResponseChart" className="chart-area" />
                </div>
                <ul className="list-unstyled row row-cols-1 row-cols-sm-2 g-3 border-t-soft pt-3 mt-3 mb-0">
                  <li className="col d-flex align-items-center gap-2">
                    <span className="icon-box icon-box-sm tint-emerald border-current" aria-hidden="true">
                      <i data-lucide="target" />
                    </span>
                    <span className="min-w-0">
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        Answered in target
                      </span>
                      {" "}
                      <span className="d-block fs-6 fw-semibold text-title">
                        <bdi>
                          91.2%
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </li>
                  <li className="col d-flex align-items-center gap-2">
                    <span className="icon-box icon-box-sm tint-rose border-current" aria-hidden="true">
                      <i data-lucide="flame" />
                    </span>
                    <span className="min-w-0">
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        Slowest queue
                      </span>
                      {" "}
                      <span className="d-block fs-6 fw-semibold text-title">
                        Billing
                      </span>
                      {" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Ticket queue ===== */}
      <section className="mb-4" aria-labelledby="hd-queue-title">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
          <div className="min-w-0">
            <h2 id="hd-queue-title" className="fs-4 fw-bold text-title mb-1">
              Ticket Queue
            </h2>
            <p className="fs-md text-body-2 mb-0">
              Everything still waiting on an agent, ordered by how close it is to breaching.
            </p>
          </div>
          <div className="d-flex flex-wrap align-items-center gap-2">
            <span className="badge-soft tint-rose border-current d-inline-flex align-self-stretch align-items-center gap-2 px-3">
              {" "}
              <i className="icon-12" data-lucide="alarm-clock" aria-hidden="true" />
              {" "}
              <bdi>
                38 breaching within 2h
              </bdi>
              {" "}
            </span>
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-outline-soft btn-18 rounded-circle"
                id="hdQueueMenu"
                data-bs-toggle="dropdown"
                data-bs-offset="0,8"
                aria-expanded="false"
                aria-label="Queue options"
              >
                <i data-lucide="ellipsis-vertical" />
              </button>
              {" "}
              <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="hdQueueMenu">
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="user-round-plus" />
                    Auto-assign unclaimed
                  </button>
                </li>
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="list-filter" />
                    Saved views
                  </button>
                </li>
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="download" />
                    Export queue
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card" data-bulk-scope="" data-filter-scope="">
          <div className="card-body">
            <div className="row g-3 align-items-center mb-3">
              <div className="col-12 col-xl">
                <h3 className="fs-5 fw-bold text-title mb-1">
                  Recent Tickets
                </h3>
                <p className="fs-md text-body-2 mb-0">
                  Latest activity across every channel and support queue
                </p>
              </div>
              <div className="col-12 col-sm">
                <label htmlFor="hdQueueSearch" className="visually-hidden">
                  Search tickets
                </label>
                <div className="field-icon">
                  <i className="icon-18" data-lucide="search" aria-hidden="true" />
                  {" "}
                  <input
                    type="search"
                    className="form-control rounded-pill"
                    id="hdQueueSearch"
                    name="ticketSearch"
                    placeholder="Search ticket, customer or agent"
                  />
                </div>
              </div>
              <div className="col-12 col-sm-auto">
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn btn-outline-soft d-inline-flex align-items-center gap-2 w-100"
                    id="hdQueueSort"
                    data-bs-toggle="dropdown"
                    data-bs-offset="0,8"
                    aria-expanded="false"
                  >
                    <i className="icon-16" data-lucide="arrow-down-wide-narrow" aria-hidden="true" />
                    {" "}
                    <span className="text-nowrap">
                      SLA first
                    </span>
                  </button>
                  {" "}
                  <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="hdQueueSort">
                    <li>
                      <button type="button" className="dropdown-item">
                        <i data-lucide="alarm-clock" />
                        SLA first
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        <i data-lucide="flame" />
                        Priority
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        <i data-lucide="arrow-down-wide-narrow" />
                        Newest first
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="nav nav-pills d-inline-flex flex-nowrap mw-100 gap-1 p-1 mb-3 rounded-pill bg-soft overflow-x-auto scrollbar-none"
              role="group"
              aria-label="Filter the queue"
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
                data-filter="urgent"
                aria-pressed="false"
              >
                Urgent
              </button>
              <button
                type="button"
                className="nav-link fw-semibold text-nowrap"
                data-filter="overdue"
                aria-pressed="false"
              >
                Overdue
              </button>
              <button
                type="button"
                className="nav-link fw-semibold text-nowrap"
                data-filter="unassigned"
                aria-pressed="false"
              >
                Unassigned
              </button>
              <button
                type="button"
                className="nav-link fw-semibold text-nowrap"
                data-filter="pending"
                aria-pressed="false"
              >
                Pending
              </button>
            </div>
            {" "}
            {/* Bulk action bar — revealed by the selection module while rows are checked */}
            {" "}
            <div
              className="d-flex flex-wrap align-items-center justify-content-between gap-2 px-3 py-2 mb-3 rounded-2 tint-primary d-none"
              data-bulk-bar=""
              role="status"
            >
              <span className="d-inline-flex align-items-center gap-2 fs-md fw-semibold">
                <i className="icon-18" data-lucide="check-check" aria-hidden="true" />
                <span data-bulk-count="">
                  0
                </span>
                selected
              </span>
              <div className="d-flex flex-wrap align-items-center gap-2">
                <button
                  type="button"
                  className="btn btn-outline-soft d-inline-flex align-items-center gap-2 text-nowrap"
                >
                  <i className="icon-18" data-lucide="user-round-plus" aria-hidden="true" />
                  Assign to agent
                </button>
                <button type="button" className="btn btn-primary d-inline-flex align-items-center gap-2 text-nowrap">
                  <i className="icon-18" data-lucide="chevrons-up" aria-hidden="true" />
                  Escalate
                </button>
                <button
                  type="button"
                  className="btn btn-ghost btn-18 rounded-circle"
                  data-bulk-clear=""
                  aria-label="Clear selection"
                >
                  <i data-lucide="x" />
                </button>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <caption className="visually-hidden">
                  Open and pending tickets, closest to breaching first
                </caption>
                <thead>
                  <tr>
                    <th scope="col">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="hdQueueSelectAll"
                        data-bulk-all=""
                        aria-label="Select all tickets"
                      />
                    </th>
                    <th scope="col">
                      Ticket
                    </th>
                    <th scope="col">
                      Customer
                    </th>
                    <th scope="col">
                      Assignee
                    </th>
                    <th scope="col">
                      Priority
                    </th>
                    <th scope="col">
                      Status
                    </th>
                    <th scope="col">
                      SLA
                    </th>
                    <th scope="col">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr data-filter-tags="urgent overdue">
                    <td>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        data-bulk-item=""
                        aria-label="Select ticket TK-8421"
                      />
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="legend-dot bg-cat-rose" aria-hidden="true" />
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-nowrap">
                            Payment declined on annual renewal
                          </span>
                          {" "}
                          <span className="d-flex align-items-center gap-1 fs-xs text-muted-2 text-nowrap">
                            <i className="icon-12" data-lucide="mail" aria-hidden="true" />
                            <bdi>
                              TK-8421 · Email · 3h ago
                            </bdi>
                          </span>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-sm bg-grad-2" aria-hidden="true">
                          MF
                        </span>
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-medium text-title text-nowrap">
                            Maya Fernandes
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-nowrap">
                            Northwind Retail
                          </span>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-sm bg-grad-3" aria-hidden="true">
                          AS
                        </span>
                        <span className="fs-md text-body-2 text-nowrap">
                          Aarav Shah
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="seg-meter" role="img" aria-label="Priority 4 out of 4">
                          <span className="bg-cat-rose" />
                          <span className="bg-cat-rose" />
                          <span className="bg-cat-rose" />
                          <span className="bg-cat-rose" />
                        </span>
                        <span className="fs-md fw-semibold text-cat-rose text-nowrap">
                          Urgent
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-blue text-nowrap">
                        Open
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-1 fs-md fw-semibold text-cat-rose text-nowrap">
                        <i className="icon-14" data-lucide="alarm-clock" aria-hidden="true" />
                        <bdi>
                          Overdue 12m
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <button type="button" className="btn btn-primary-soft btn-sm fw-semibold text-nowrap">
                        Reply
                      </button>
                    </td>
                  </tr>
                  <tr data-filter-tags="urgent overdue">
                    <td>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        data-bulk-item=""
                        aria-label="Select ticket TK-8391"
                      />
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="legend-dot bg-cat-rose" aria-hidden="true" />
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-nowrap">
                            Duplicate charge on card ending 4417
                          </span>
                          {" "}
                          <span className="d-flex align-items-center gap-1 fs-xs text-muted-2 text-nowrap">
                            <i className="icon-12" data-lucide="mail" aria-hidden="true" />
                            <bdi>
                              TK-8391 · Email · 3d ago
                            </bdi>
                          </span>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-sm bg-grad-4" aria-hidden="true">
                          IC
                        </span>
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-medium text-title text-nowrap">
                            Isabel Cruz
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-nowrap">
                            Tidewater Co.
                          </span>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-sm bg-grad-6" aria-hidden="true">
                          MB
                        </span>
                        <span className="fs-md text-body-2 text-nowrap">
                          Marcus Bell
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="seg-meter" role="img" aria-label="Priority 4 out of 4">
                          <span className="bg-cat-rose" />
                          <span className="bg-cat-rose" />
                          <span className="bg-cat-rose" />
                          <span className="bg-cat-rose" />
                        </span>
                        <span className="fs-md fw-semibold text-cat-rose text-nowrap">
                          Urgent
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-blue text-nowrap">
                        Open
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-1 fs-md fw-semibold text-cat-rose text-nowrap">
                        <i className="icon-14" data-lucide="alarm-clock" aria-hidden="true" />
                        <bdi>
                          Overdue 1h 20m
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <button type="button" className="btn btn-primary-soft btn-sm fw-semibold text-nowrap">
                        Reply
                      </button>
                    </td>
                  </tr>
                  <tr data-filter-tags="urgent unassigned">
                    <td>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        data-bulk-item=""
                        aria-label="Select ticket TK-8417"
                      />
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="legend-dot bg-cat-rose" aria-hidden="true" />
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-nowrap">
                            SSO login loop after password reset
                          </span>
                          {" "}
                          <span className="d-flex align-items-center gap-1 fs-xs text-muted-2 text-nowrap">
                            <i className="icon-12" data-lucide="globe" aria-hidden="true" />
                            <bdi>
                              TK-8417 · Web form · 5h ago
                            </bdi>
                          </span>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-sm bg-grad-1" aria-hidden="true">
                          SM
                        </span>
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-medium text-title text-nowrap">
                            Sofia Marchetti
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-nowrap">
                            Vertex Labs
                          </span>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-rose border-current border-dashed d-inline-flex align-items-center gap-2 text-nowrap">
                        {" "}
                        <i className="icon-12" data-lucide="user-round-x" aria-hidden="true" />
                        Unassigned
                        {" "}
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="seg-meter" role="img" aria-label="Priority 4 out of 4">
                          <span className="bg-cat-rose" />
                          <span className="bg-cat-rose" />
                          <span className="bg-cat-rose" />
                          <span className="bg-cat-rose" />
                        </span>
                        <span className="fs-md fw-semibold text-cat-rose text-nowrap">
                          Urgent
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-blue text-nowrap">
                        Open
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-1 fs-md fw-semibold text-cat-orange text-nowrap">
                        <i className="icon-14" data-lucide="clock" aria-hidden="true" />
                        <bdi>
                          Due in 8m
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <button type="button" className="btn btn-primary-soft btn-sm fw-semibold text-nowrap">
                        Claim
                      </button>
                    </td>
                  </tr>
                  <tr data-filter-tags="high">
                    <td>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        data-bulk-item=""
                        aria-label="Select ticket TK-8419"
                      />
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="legend-dot bg-cat-amber" aria-hidden="true" />
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-nowrap">
                            Cannot export invoices to CSV
                          </span>
                          {" "}
                          <span className="d-flex align-items-center gap-1 fs-xs text-muted-2 text-nowrap">
                            <i className="icon-12" data-lucide="message-circle" aria-hidden="true" />
                            <bdi>
                              TK-8419 · Live chat · 4h ago
                            </bdi>
                          </span>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-sm bg-grad-5" aria-hidden="true">
                          DO
                        </span>
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-medium text-title text-nowrap">
                            Daniel Okafor
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-nowrap">
                            Lumen Systems
                          </span>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-sm bg-grad-1" aria-hidden="true">
                          PN
                        </span>
                        <span className="fs-md text-body-2 text-nowrap">
                          Priya Nair
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="seg-meter" role="img" aria-label="Priority 3 out of 4">
                          <span className="bg-cat-amber" />
                          <span className="bg-cat-amber" />
                          <span className="bg-cat-amber" />
                          <span />
                        </span>
                        <span className="fs-md fw-semibold text-cat-orange text-nowrap">
                          High
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-blue text-nowrap">
                        Open
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-1 fs-md fw-semibold text-cat-orange text-nowrap">
                        <i className="icon-14" data-lucide="clock" aria-hidden="true" />
                        <bdi>
                          Due in 24m
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <button type="button" className="btn btn-primary-soft btn-sm fw-semibold text-nowrap">
                        Reply
                      </button>
                    </td>
                  </tr>
                  <tr data-filter-tags="high pending">
                    <td>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        data-bulk-item=""
                        aria-label="Select ticket TK-8412"
                      />
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="legend-dot bg-cat-amber" aria-hidden="true" />
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-nowrap">
                            Refund not received after 10 days
                          </span>
                          {" "}
                          <span className="d-flex align-items-center gap-1 fs-xs text-muted-2 text-nowrap">
                            <i className="icon-12" data-lucide="mail" aria-hidden="true" />
                            <bdi>
                              TK-8412 · Email · 1d ago
                            </bdi>
                          </span>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-sm bg-grad-3" aria-hidden="true">
                          LW
                        </span>
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-medium text-title text-nowrap">
                            Liam Whitaker
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-nowrap">
                            Craftly
                          </span>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-sm bg-grad-6" aria-hidden="true">
                          MB
                        </span>
                        <span className="fs-md text-body-2 text-nowrap">
                          Marcus Bell
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="seg-meter" role="img" aria-label="Priority 3 out of 4">
                          <span className="bg-cat-amber" />
                          <span className="bg-cat-amber" />
                          <span className="bg-cat-amber" />
                          <span />
                        </span>
                        <span className="fs-md fw-semibold text-cat-orange text-nowrap">
                          High
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-amber text-nowrap">
                        Pending
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-1 fs-md text-body-2 text-nowrap">
                        <i className="icon-14" data-lucide="clock" aria-hidden="true" />
                        <bdi>
                          Waiting 2d 4h
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <button type="button" className="btn btn-primary-soft btn-sm fw-semibold text-nowrap">
                        Nudge
                      </button>
                    </td>
                  </tr>
                  <tr data-filter-tags="normal">
                    <td>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        data-bulk-item=""
                        aria-label="Select ticket TK-8408"
                      />
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="legend-dot bg-cat-blue" aria-hidden="true" />
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-nowrap">
                            API rate limit hit on bulk sync
                          </span>
                          {" "}
                          <span className="d-flex align-items-center gap-1 fs-xs text-muted-2 text-nowrap">
                            <i className="icon-12" data-lucide="message-circle" aria-hidden="true" />
                            <bdi>
                              TK-8408 · Live chat · 1d ago
                            </bdi>
                          </span>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-sm bg-grad-2" aria-hidden="true">
                          CW
                        </span>
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-medium text-title text-nowrap">
                            Chen Wei
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-nowrap">
                            Orbit Freight
                          </span>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-sm bg-grad-1" aria-hidden="true">
                          PN
                        </span>
                        <span className="fs-md text-body-2 text-nowrap">
                          Priya Nair
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="seg-meter" role="img" aria-label="Priority 2 out of 4">
                          <span className="bg-cat-blue" />
                          <span className="bg-cat-blue" />
                          <span />
                          <span />
                        </span>
                        <span className="fs-md fw-semibold text-cat-blue text-nowrap">
                          Normal
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-blue text-nowrap">
                        Open
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-1 fs-md text-body-2 text-nowrap">
                        <i className="icon-14" data-lucide="clock" aria-hidden="true" />
                        <bdi>
                          Due in 3h 40m
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <button type="button" className="btn btn-primary-soft btn-sm fw-semibold text-nowrap">
                        Reply
                      </button>
                    </td>
                  </tr>
                  <tr data-filter-tags="normal">
                    <td>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        data-bulk-item=""
                        aria-label="Select ticket TK-8399"
                      />
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="legend-dot bg-cat-blue" aria-hidden="true" />
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-nowrap">
                            Seat count wrong after team merge
                          </span>
                          {" "}
                          <span className="d-flex align-items-center gap-1 fs-xs text-muted-2 text-nowrap">
                            <i className="icon-12" data-lucide="phone" aria-hidden="true" />
                            <bdi>
                              TK-8399 · Phone · 2d ago
                            </bdi>
                          </span>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-sm bg-grad-5" aria-hidden="true">
                          NB
                        </span>
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-medium text-title text-nowrap">
                            Noah Berger
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-nowrap">
                            Halcyon Group
                          </span>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-sm bg-grad-3" aria-hidden="true">
                          AS
                        </span>
                        <span className="fs-md text-body-2 text-nowrap">
                          Aarav Shah
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="seg-meter" role="img" aria-label="Priority 2 out of 4">
                          <span className="bg-cat-blue" />
                          <span className="bg-cat-blue" />
                          <span />
                          <span />
                        </span>
                        <span className="fs-md fw-semibold text-cat-blue text-nowrap">
                          Normal
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-blue text-nowrap">
                        Open
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-1 fs-md text-body-2 text-nowrap">
                        <i className="icon-14" data-lucide="clock" aria-hidden="true" />
                        <bdi>
                          Due in 6h 15m
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <button type="button" className="btn btn-primary-soft btn-sm fw-semibold text-nowrap">
                        Reply
                      </button>
                    </td>
                  </tr>
                  <tr data-filter-tags="low unassigned pending">
                    <td>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        data-bulk-item=""
                        aria-label="Select ticket TK-8404"
                      />
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="legend-dot bg-cat-slate" aria-hidden="true" />
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-nowrap">
                            Add Portuguese to the help centre
                          </span>
                          {" "}
                          <span className="d-flex align-items-center gap-1 fs-xs text-muted-2 text-nowrap">
                            <i className="icon-12" data-lucide="globe" aria-hidden="true" />
                            <bdi>
                              TK-8404 · Web form · 2d ago
                            </bdi>
                          </span>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-sm bg-grad-4" aria-hidden="true">
                          AR
                        </span>
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-medium text-title text-nowrap">
                            Ana Ribeiro
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-nowrap">
                            Solstice Media
                          </span>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-rose border-current border-dashed d-inline-flex align-items-center gap-2 text-nowrap">
                        {" "}
                        <i className="icon-12" data-lucide="user-round-x" aria-hidden="true" />
                        Unassigned
                        {" "}
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="seg-meter" role="img" aria-label="Priority 1 out of 4">
                          <span className="bg-cat-slate" />
                          <span />
                          <span />
                          <span />
                        </span>
                        <span className="fs-md fw-semibold text-muted-2 text-nowrap">
                          Low
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-amber text-nowrap">
                        Pending
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-1 fs-md text-body-2 text-nowrap">
                        <i className="icon-14" data-lucide="clock" aria-hidden="true" />
                        <bdi>
                          Waiting 1d 6h
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <button type="button" className="btn btn-primary-soft btn-sm fw-semibold text-nowrap">
                        Claim
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 pt-3 mt-3 border-t-soft">
              <span className="fs-md text-muted-2">
                <bdi>
                  Showing 1–8 of 1,984 tickets in the queue
                </bdi>
              </span>
              <nav aria-label="Ticket queue pagination">
                <ul className="pagination mb-0">
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous page">
                      <i className="flip-rtl" data-lucide="chevron-left" aria-hidden="true" />
                    </a>
                  </li>
                  <li className="page-item active" aria-current="page">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next page">
                      <i className="flip-rtl" data-lucide="chevron-right" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* ===== SLA & priority alerts ===== */}
      <section className="mb-4" aria-labelledby="hd-alerts-title">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
          <div className="min-w-0">
            <h2 id="hd-alerts-title" className="fs-4 fw-bold text-title mb-1">
              {"SLA & Priority Alerts"}
            </h2>
            <p className="fs-md text-body-2 mb-0">
              Everything at risk of breaching, grouped by how little time is left to act.
            </p>
          </div>
          <div className="d-flex flex-wrap align-items-center gap-2">
            <span className="badge-soft tint-brand border-current d-inline-flex align-self-stretch align-items-center gap-2 px-3">
              {" "}
              <i className="icon-12" data-lucide="radar" aria-hidden="true" />
              {" "}
              <bdi>
                Monitoring 1,984 open tickets
              </bdi>
              {" "}
            </span>
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-outline-soft btn-18 rounded-circle"
                id="hdAlertsMenu"
                data-bs-toggle="dropdown"
                data-bs-offset="0,8"
                aria-expanded="false"
                aria-label="Alert options"
              >
                <i data-lucide="ellipsis-vertical" />
              </button>
              {" "}
              <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="hdAlertsMenu">
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="shield-alert" />
                    SLA policies
                  </button>
                </li>
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="bell-ring" />
                    Notification rules
                  </button>
                </li>
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="download" />
                    Export alerts
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* The one thing to act on before anything else in this section */}
        <div
          className="d-flex flex-wrap align-items-center justify-content-between gap-3 px-3 py-3 mb-3 rounded-3 tint-rose"
          role="status"
        >
          <span className="d-flex align-items-center gap-3 min-w-0">
            <i className="icon-24 flex-shrink-0" data-lucide="siren" aria-hidden="true" />
            <span className="min-w-0">
              {" "}
              <span className="d-block fs-6 fw-semibold">
                <bdi>
                  3 urgent tickets are unassigned and breach within the hour
                </bdi>
              </span>
              {" "}
              <span className="d-block fs-md opacity-75">
                Nobody is working them — assign an agent to stop the clock.
              </span>
              {" "}
            </span>
          </span>
          <button
            type="button"
            className="btn btn-danger d-inline-flex flex-nowrap align-items-center justify-content-center gap-2 text-nowrap"
          >
            <i className="icon-18" data-lucide="user-round-plus" aria-hidden="true" />
            Assign now
          </button>
        </div>
        <ul className="list-unstyled row row-cols-1 row-cols-xxl-3 g-3 mb-0">
          {/* Breached SLA */}
          <li className="col">
            <div className="card h-100 overflow-hidden text-cat-rose">
              <div className="card-body d-flex flex-column">
                {/* Below xxl a lane spans the full page, so its summary and its
                   alert rows sit side by side rather than stretching into one
                   sparse band; at xxl they stack back into the narrow lane. */}
                <div className="row g-3 g-xl-4 align-items-center flex-grow-1">
                  <div className="col-12 col-md-5 col-xxl-12">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <span className="icon-box icon-box-lg tint-rose border-current" aria-hidden="true">
                        <i data-lucide="alarm-clock" />
                      </span>
                      <div className="min-w-0">
                        <h3 className="fs-5 fw-bold text-title text-truncate mb-0">
                          Breached SLA
                        </h3>
                        <span className="d-block fs-md text-body-2 text-truncate">
                          Past target and still open
                        </span>
                      </div>
                    </div>
                    <p className="d-flex flex-wrap align-items-baseline gap-2 mb-2">
                      <span className="fs-1 fw-bold text-title lh-1">
                        <bdi>
                          42
                        </bdi>
                      </span>
                      <span className="badge-soft tint-rose d-inline-flex align-items-center gap-1">
                        {" "}
                        <i className="icon-12 flip-rtl" data-lucide="trending-up" aria-hidden="true" />
                        <bdi>
                          +6 vs yesterday
                        </bdi>
                        {" "}
                      </span>
                    </p>
                    <div className="progress-stacked progress-sm mb-2">
                      <div
                        className="progress progress-sm"
                        role="progressbar"
                        aria-label="Breached up to 1 hour ago"
                        aria-valuenow="43"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "42.9%" }}
                      >
                        <div className="progress-bar bg-cat-amber" />
                      </div>
                      <div
                        className="progress progress-sm"
                        role="progressbar"
                        aria-label="Breached 1 to 4 hours ago"
                        aria-valuenow="36"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "35.7%" }}
                      >
                        <div className="progress-bar bg-cat-orange" />
                      </div>
                      <div
                        className="progress progress-sm"
                        role="progressbar"
                        aria-label="Breached over 4 hours ago"
                        aria-valuenow="21"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "21.4%" }}
                      >
                        <div className="progress-bar bg-cat-rose" />
                      </div>
                    </div>
                    <ul className="list-unstyled d-flex flex-wrap align-items-center gap-3 mb-0">
                      <li className="d-flex align-items-center gap-2">
                        <span className="legend-dot legend-dot-sm bg-cat-amber" aria-hidden="true" />
                        <span className="fs-xs text-body-2">
                          <bdi>
                            Under 1h · 18
                          </bdi>
                        </span>
                      </li>
                      <li className="d-flex align-items-center gap-2">
                        <span className="legend-dot legend-dot-sm bg-cat-orange" aria-hidden="true" />
                        <span className="fs-xs text-body-2">
                          <bdi>
                            1 – 4h · 15
                          </bdi>
                        </span>
                      </li>
                      <li className="d-flex align-items-center gap-2">
                        <span className="legend-dot legend-dot-sm bg-cat-rose" aria-hidden="true" />
                        <span className="fs-xs text-body-2">
                          <bdi>
                            Over 4h · 9
                          </bdi>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12 col-md-7 col-xxl-12">
                    <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                      <li className="d-flex align-items-center gap-2">
                        <span className="avatar avatar-xs bg-grad-2" aria-hidden="true">
                          MF
                        </span>
                        <span className="flex-grow-1 min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-medium text-title text-truncate">
                            Payment declined on annual renewal
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi>
                              TK-8421 · Northwind Retail
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <span className="badge-soft tint-rose flex-shrink-0 text-nowrap">
                          <bdi>
                            12m over
                          </bdi>
                        </span>
                      </li>
                      <li className="d-flex align-items-center gap-2">
                        <span className="avatar avatar-xs bg-grad-4" aria-hidden="true">
                          IC
                        </span>
                        <span className="flex-grow-1 min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-medium text-title text-truncate">
                            Duplicate charge on card ending 4417
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi>
                              TK-8391 · Tidewater Co.
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <span className="badge-soft tint-rose flex-shrink-0 text-nowrap">
                          <bdi>
                            1h 20m over
                          </bdi>
                        </span>
                      </li>
                      <li className="d-flex align-items-center gap-2">
                        <span className="avatar avatar-xs bg-grad-6" aria-hidden="true">
                          RM
                        </span>
                        <span className="flex-grow-1 min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-medium text-title text-truncate">
                            Data export stuck in processing
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi>
                              TK-8376 · Meridian Bank
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <span className="badge-soft tint-rose flex-shrink-0 text-nowrap">
                          <bdi>
                            3h 05m over
                          </bdi>
                        </span>
                      </li>
                    </ul>
                    <button
                      type="button"
                      className="btn btn-outline-soft w-100 d-inline-flex flex-nowrap align-items-center justify-content-center gap-2 mt-3 text-nowrap"
                    >
                      Open breached queue
                      <i className="icon-18 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
              <span className="accent-edge-b" aria-hidden="true" />
            </div>
          </li>
          {/* Approaching SLA */}
          <li className="col">
            <div className="card h-100 overflow-hidden text-cat-amber">
              <div className="card-body d-flex flex-column">
                <div className="row g-3 g-xl-4 align-items-center flex-grow-1">
                  <div className="col-12 col-md-5 col-xxl-12">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <span className="icon-box icon-box-lg tint-amber border-current" aria-hidden="true">
                        <i data-lucide="hourglass" />
                      </span>
                      <div className="min-w-0">
                        <h3 className="fs-5 fw-bold text-title text-truncate mb-0">
                          Approaching SLA
                        </h3>
                        <span className="d-block fs-md text-body-2 text-truncate">
                          Breaching in the next two hours
                        </span>
                      </div>
                    </div>
                    <p className="d-flex flex-wrap align-items-baseline gap-2 mb-2">
                      <span className="fs-1 fw-bold text-title lh-1">
                        <bdi>
                          38
                        </bdi>
                      </span>
                      <span className="badge-soft tint-rose d-inline-flex align-items-center gap-1">
                        {" "}
                        <i className="icon-12" data-lucide="clock-alert" aria-hidden="true" />
                        <bdi>
                          12 within 30 min
                        </bdi>
                        {" "}
                      </span>
                    </p>
                    <div className="progress-stacked progress-sm mb-2">
                      <div
                        className="progress progress-sm"
                        role="progressbar"
                        aria-label="Due within 30 minutes"
                        aria-valuenow="32"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "31.6%" }}
                      >
                        <div className="progress-bar bg-cat-rose" />
                      </div>
                      <div
                        className="progress progress-sm"
                        role="progressbar"
                        aria-label="Due in 30 to 60 minutes"
                        aria-valuenow="24"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "23.7%" }}
                      >
                        <div className="progress-bar bg-cat-orange" />
                      </div>
                      <div
                        className="progress progress-sm"
                        role="progressbar"
                        aria-label="Due in 1 to 2 hours"
                        aria-valuenow="45"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "44.7%" }}
                      >
                        <div className="progress-bar bg-cat-amber" />
                      </div>
                    </div>
                    <ul className="list-unstyled d-flex flex-wrap align-items-center gap-3 mb-3">
                      <li className="d-flex align-items-center gap-2">
                        <span className="legend-dot legend-dot-sm bg-cat-rose" aria-hidden="true" />
                        <span className="fs-xs text-body-2">
                          <bdi>
                            Under 30m · 12
                          </bdi>
                        </span>
                      </li>
                      <li className="d-flex align-items-center gap-2">
                        <span className="legend-dot legend-dot-sm bg-cat-orange" aria-hidden="true" />
                        <span className="fs-xs text-body-2">
                          <bdi>
                            30m – 1h · 9
                          </bdi>
                        </span>
                      </li>
                      <li className="d-flex align-items-center gap-2">
                        <span className="legend-dot legend-dot-sm bg-cat-amber" aria-hidden="true" />
                        <span className="fs-xs text-body-2">
                          <bdi>
                            1 – 2h · 17
                          </bdi>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12 col-md-7 col-xxl-12">
                    <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                      <li className="d-flex align-items-center gap-2">
                        <span className="avatar avatar-xs bg-grad-1" aria-hidden="true">
                          SM
                        </span>
                        <span className="flex-grow-1 min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-medium text-title text-truncate">
                            SSO login loop after password reset
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi>
                              TK-8417 · Vertex Labs · unassigned
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <span className="badge-soft tint-rose flex-shrink-0 text-nowrap">
                          <bdi>
                            8m left
                          </bdi>
                        </span>
                      </li>
                      <li className="d-flex align-items-center gap-2">
                        <span className="avatar avatar-xs bg-grad-5" aria-hidden="true">
                          DO
                        </span>
                        <span className="flex-grow-1 min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-medium text-title text-truncate">
                            Cannot export invoices to CSV
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi>
                              TK-8419 · Lumen Systems
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <span className="badge-soft tint-rose flex-shrink-0 text-nowrap">
                          <bdi>
                            24m left
                          </bdi>
                        </span>
                      </li>
                      <li className="d-flex align-items-center gap-2">
                        <span className="avatar avatar-xs bg-grad-3" aria-hidden="true">
                          KA
                        </span>
                        <span className="flex-grow-1 min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-medium text-title text-truncate">
                            Webhook retries failing silently
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi>
                              TK-8431 · Kestrel Apps
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <span className="badge-soft tint-amber flex-shrink-0 text-nowrap">
                          <bdi>
                            1h 05m left
                          </bdi>
                        </span>
                      </li>
                    </ul>
                    <button
                      type="button"
                      className="btn btn-outline-soft w-100 d-inline-flex flex-nowrap align-items-center justify-content-center gap-2 mt-3 text-nowrap"
                    >
                      Open watchlist
                      <i className="icon-18 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
              <span className="accent-edge-b" aria-hidden="true" />
            </div>
          </li>
          {/* High priority open */}
          <li className="col">
            <div className="card h-100 overflow-hidden text-cat-violet">
              <div className="card-body d-flex flex-column">
                <div className="row g-3 g-xl-4 align-items-center flex-grow-1">
                  <div className="col-12 col-md-5 col-xxl-12">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <span className="icon-box icon-box-lg tint-violet border-current" aria-hidden="true">
                        <i data-lucide="flame" />
                      </span>
                      <div className="min-w-0">
                        <h3 className="fs-5 fw-bold text-title text-truncate mb-0">
                          High Priority Open
                        </h3>
                        <span className="d-block fs-md text-body-2 text-truncate">
                          Urgent and high, still unresolved
                        </span>
                      </div>
                    </div>
                    <p className="d-flex flex-wrap align-items-baseline gap-2 mb-2">
                      <span className="fs-1 fw-bold text-title lh-1">
                        <bdi>
                          186
                        </bdi>
                      </span>
                      <span className="badge-soft tint-violet d-inline-flex align-items-center gap-1">
                        {" "}
                        <i className="icon-12" data-lucide="chevrons-up" aria-hidden="true" />
                        <bdi>
                          26 escalated
                        </bdi>
                        {" "}
                      </span>
                    </p>
                    <div className="progress-stacked progress-sm mb-2">
                      <div
                        className="progress progress-sm"
                        role="progressbar"
                        aria-label="Urgent priority share"
                        aria-valuenow="23"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "22.6%" }}
                      >
                        <div className="progress-bar bg-cat-rose" />
                      </div>
                      <div
                        className="progress progress-sm"
                        role="progressbar"
                        aria-label="High priority share"
                        aria-valuenow="77"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "77.4%" }}
                      >
                        <div className="progress-bar bg-cat-amber" />
                      </div>
                    </div>
                    <ul className="list-unstyled d-flex flex-wrap align-items-center gap-3 mb-3">
                      <li className="d-flex align-items-center gap-2">
                        <span className="legend-dot legend-dot-sm bg-cat-rose" aria-hidden="true" />
                        <span className="fs-xs text-body-2">
                          <bdi>
                            Urgent · 42
                          </bdi>
                        </span>
                      </li>
                      <li className="d-flex align-items-center gap-2">
                        <span className="legend-dot legend-dot-sm bg-cat-amber" aria-hidden="true" />
                        <span className="fs-xs text-body-2">
                          <bdi>
                            High · 144
                          </bdi>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12 col-md-7 col-xxl-12">
                    <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                      <li className="d-flex align-items-center gap-2">
                        <span className="avatar avatar-xs bg-grad-5" aria-hidden="true">
                          BP
                        </span>
                        <span className="flex-grow-1 min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-medium text-title text-truncate">
                            Checkout failing for EU cards
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi>
                              TK-8428 · Brightpath
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <span className="badge-soft tint-rose flex-shrink-0 text-nowrap">
                          Urgent
                        </span>
                      </li>
                      <li className="d-flex align-items-center gap-2">
                        <span className="avatar avatar-xs bg-grad-2" aria-hidden="true">
                          NH
                        </span>
                        <span className="flex-grow-1 min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-medium text-title text-truncate">
                            Admin console 502 on save
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi>
                              TK-8433 · Nimbus Health
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <span className="badge-soft tint-rose flex-shrink-0 text-nowrap">
                          Urgent
                        </span>
                      </li>
                      <li className="d-flex align-items-center gap-2">
                        <span className="avatar avatar-xs bg-grad-3" aria-hidden="true">
                          LW
                        </span>
                        <span className="flex-grow-1 min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-medium text-title text-truncate">
                            Refund not received after 10 days
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi>
                              TK-8412 · Craftly
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <span className="badge-soft tint-amber flex-shrink-0 text-nowrap">
                          High
                        </span>
                      </li>
                    </ul>
                    <button
                      type="button"
                      className="btn btn-outline-soft w-100 d-inline-flex flex-nowrap align-items-center justify-content-center gap-2 mt-3 text-nowrap"
                    >
                      Open priority queue
                      <i className="icon-18 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
              <span className="accent-edge-b" aria-hidden="true" />
            </div>
          </li>
        </ul>
      </section>
      {/* ===== Agent performance ===== */}
      <section className="mb-4" aria-labelledby="hd-agents-title">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
          <div className="min-w-0">
            <h2 id="hd-agents-title" className="fs-4 fw-bold text-title mb-1">
              Agent Performance
            </h2>
            <p className="fs-md text-body-2 mb-0">
              Who is closing the most, replying the fastest and carrying the heaviest desk this month.
            </p>
          </div>
          <div className="d-flex flex-wrap align-items-center gap-2">
            <span className="badge-soft tint-brand border-current d-inline-flex align-self-stretch align-items-center gap-2 px-3">
              {" "}
              <i className="icon-12" data-lucide="users-round" aria-hidden="true" />
              {" "}
              <bdi>
                24 agents · 18 on shift
              </bdi>
              {" "}
            </span>
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-outline-soft btn-18 rounded-circle"
                id="hdAgentsMenu"
                data-bs-toggle="dropdown"
                data-bs-offset="0,8"
                aria-expanded="false"
                aria-label="Agent options"
              >
                <i data-lucide="ellipsis-vertical" />
              </button>
              {" "}
              <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="hdAgentsMenu">
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="calendar-clock" />
                    Manage shifts
                  </button>
                </li>
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="sliders-horizontal" />
                    Set capacity limits
                  </button>
                </li>
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="download" />
                    Export scorecard
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row g-3 mb-3">
          {/* Speed against output */}
          <div className="col-12 col-xl-7 col-xxl-8">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <div className="min-w-0">
                    <h3 className="fs-5 fw-bold text-title mb-1">
                      Speed Against Output
                    </h3>
                    <p className="fs-md text-body-2 mb-0">
                      The twelve busiest agents by median first reply and tickets resolved — bubble size is the desk each one is carrying right now
                    </p>
                  </div>
                  <span className="badge-soft tint-rose border-current d-inline-flex align-items-center gap-2 px-3">
                    {" "}
                    <i className="icon-12" data-lucide="user-round-cog" aria-hidden="true" />
                    {" "}
                    <bdi>
                      3 agents over capacity
                    </bdi>
                    {" "}
                  </span>
                </div>
                <ul className="list-unstyled d-flex flex-wrap align-items-center gap-3 mb-2">
                  <li className="d-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-brand" aria-hidden="true" />
                    <span className="fs-md text-body-2">
                      Tier 1 support
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-violet" aria-hidden="true" />
                    <span className="fs-md text-body-2">
                      Tier 2 technical
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-blue" aria-hidden="true" />
                    <span className="fs-md text-body-2">
                      Billing
                    </span>
                  </li>
                </ul>
                <div className="my-auto">
                  <div id="hdAgentLoadChart" className="chart-area" />
                </div>
                <ul className="list-unstyled row row-cols-1 row-cols-sm-3 g-3 border-t-soft pt-3 mt-3 mb-0">
                  <li className="col d-flex align-items-center gap-2">
                    <span className="icon-box icon-box-sm tint-brand border-current" aria-hidden="true">
                      <i data-lucide="timer" />
                    </span>
                    <span className="min-w-0">
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        Median first reply
                      </span>
                      {" "}
                      <span className="d-block fs-6 fw-semibold text-title">
                        <bdi>
                          17m 30s
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        <bdi>
                          against a 20 min target
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </li>
                  <li className="col d-flex align-items-center gap-2">
                    <span className="icon-box icon-box-sm tint-violet border-current" aria-hidden="true">
                      <i data-lucide="ticket-check" />
                    </span>
                    <span className="min-w-0">
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        Resolved per agent
                      </span>
                      {" "}
                      <span className="d-block fs-6 fw-semibold text-title">
                        <bdi>
                          353 tickets
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        <bdi>
                          4,236 of 10,502 closed
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </li>
                  <li className="col d-flex align-items-center gap-2">
                    <span className="icon-box icon-box-sm tint-rose border-current" aria-hidden="true">
                      <i data-lucide="user-round-cog" />
                    </span>
                    <span className="min-w-0">
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        Over capacity
                      </span>
                      {" "}
                      <span className="d-block fs-6 fw-semibold text-title">
                        <bdi>
                          3 agents
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        <bdi>
                          holding more than 25 open
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Agent of the month */}
          <div className="col-12 col-xl-5 col-xxl-4">
            <div className="on-dark bg-grad-theme d-flex flex-column justify-content-between gap-3 h-100 p-3 p-md-4 rounded-4">
              <div className="d-flex align-items-center gap-3">
                <span className="icon-box icon-box-lg bg-soft border-theme" aria-hidden="true">
                  <i data-lucide="award" />
                </span>
                <div className="min-w-0">
                  <h3 className="fs-xs fw-semibold text-uppercase text-primary mb-0">
                    Agent of the month
                  </h3>
                  <span className="d-block fs-md text-title text-truncate">
                    <bdi>
                      August 2026 · rank 1 of 24
                    </bdi>
                  </span>
                </div>
              </div>
              {/* Below xl the panel spans the full page, so the profile and its
                 readings sit side by side rather than stacking into a tall,
                 sparse column; at xl they stack back into the narrow column. */}
              <div className="row g-3 g-xl-4 align-items-center flex-grow-1">
                <div className="col-12 col-md-6 col-xl-12">
                  <div className="bg-soft border-theme d-flex align-items-center gap-3 p-3 rounded-4">
                    <span className="avatar avatar-lg bg-grad-1" aria-hidden="true">
                      PN
                    </span>
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-block fs-lg fw-semibold text-title text-truncate">
                        Priya Nair
                      </span>
                      {" "}
                      <span className="d-block fs-sm text-primary text-truncate">
                        <bdi>
                          Tier 2 · Technical
                        </bdi>
                      </span>
                      {" "}
                    </span>
                    <span className="badge-soft flex-shrink-0 text-nowrap">
                      On shift
                    </span>
                  </div>
                  <p className="d-flex flex-wrap align-items-baseline gap-2 mt-3 mb-1">
                    <span className="fs-1 fw-bold text-title lh-1">
                      <bdi>
                        486
                      </bdi>
                    </span>
                    <span className="badge-soft tint-emerald d-inline-flex align-items-center gap-1">
                      {" "}
                      <i className="icon-12 flip-rtl" data-lucide="trending-up" aria-hidden="true" />
                      <bdi>
                        +18.4%
                      </bdi>
                      {" "}
                    </span>
                  </p>
                  <p className="fs-md text-primary mb-3">
                    <bdi>
                      tickets resolved · 4.6% of everything the desk closed
                    </bdi>
                  </p>
                  <ul className="list-unstyled row row-cols-3 g-2 mb-0">
                    <li className="col min-w-0">
                      <span className="d-block fs-xs text-primary text-truncate">
                        First reply
                      </span>
                      {" "}
                      <span className="d-block fs-6 fw-semibold text-title text-truncate">
                        <bdi>
                          8m 24s
                        </bdi>
                      </span>
                    </li>
                    <li className="col min-w-0">
                      <span className="d-block fs-xs text-primary text-truncate">
                        Avg resolution
                      </span>
                      {" "}
                      <span className="d-block fs-6 fw-semibold text-title text-truncate">
                        <bdi>
                          4h 06m
                        </bdi>
                      </span>
                    </li>
                    <li className="col min-w-0">
                      <span className="d-block fs-xs text-primary text-truncate">
                        CSAT
                      </span>
                      {" "}
                      <span className="d-block fs-6 fw-semibold text-title text-truncate">
                        <bdi>
                          4.9 / 5
                        </bdi>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-md-6 col-xl-12">
                  <div className="divider-fade d-none d-xl-block mb-3" aria-hidden="true" />
                  <h4 className="fs-xs fw-semibold text-uppercase text-primary mb-2">
                    Close behind
                  </h4>
                  <ol className="list-unstyled d-flex flex-column gap-3 mb-0">
                    <li className="d-flex align-items-center gap-2">
                      <span className="avatar avatar-xs bg-grad-3" aria-hidden="true">
                        AS
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-md fw-medium text-title text-truncate">
                          Aarav Shah
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-primary text-truncate">
                          <bdi>
                            Tier 1 · Support · 11m 05s
                          </bdi>
                        </span>
                        {" "}
                      </span>
                      <span className="badge-soft flex-shrink-0 text-nowrap">
                        <bdi>
                          452
                        </bdi>
                      </span>
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      <span className="avatar avatar-xs bg-grad-5" aria-hidden="true">
                        HS
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-md fw-medium text-title text-truncate">
                          Hana Sato
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-primary text-truncate">
                          <bdi>
                            Tier 1 · Support · 9m 48s
                          </bdi>
                        </span>
                        {" "}
                      </span>
                      <span className="badge-soft flex-shrink-0 text-nowrap">
                        <bdi>
                          418
                        </bdi>
                      </span>
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      <span className="avatar avatar-xs bg-grad-2" aria-hidden="true">
                        EV
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-md fw-medium text-title text-truncate">
                          Elena Vasquez
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-primary text-truncate">
                          <bdi>
                            Tier 2 · Technical · 13m 20s
                          </bdi>
                        </span>
                        {" "}
                      </span>
                      <span className="badge-soft flex-shrink-0 text-nowrap">
                        <bdi>
                          404
                        </bdi>
                      </span>
                    </li>
                  </ol>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-accent w-100 d-inline-flex flex-nowrap align-items-center justify-content-center gap-2 text-nowrap"
              >
                <i className="icon-20" data-lucide="file-user" aria-hidden="true" />
                View agent report
              </button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
              <div className="min-w-0">
                <h3 className="fs-5 fw-bold text-title mb-1">
                  Agent Scorecard
                </h3>
                <p className="fs-md text-body-2 mb-0">
                  Resolved volume, reply speed and current desk load, agent by agent
                </p>
              </div>
              <div
                className="nav nav-pills seg-toggle flex-nowrap gap-1 p-1 rounded-pill bg-soft"
                role="group"
                aria-label="Scorecard time range"
              >
                <button type="button" className="nav-link fw-semibold" aria-pressed="false">
                  7D
                </button>
                <button type="button" className="nav-link active fw-semibold" aria-pressed="true">
                  30D
                </button>
                <button type="button" className="nav-link fw-semibold" aria-pressed="false">
                  QTD
                </button>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <caption className="visually-hidden">
                  The six agents who resolved the most tickets this month
                </caption>
                <thead>
                  <tr>
                    <th scope="col">
                      Agent
                    </th>
                    <th scope="col">
                      Resolved
                    </th>
                    <th scope="col">
                      First response
                    </th>
                    <th scope="col">
                      Avg resolution
                    </th>
                    <th scope="col">
                      CSAT
                    </th>
                    <th scope="col">
                      Workload
                    </th>
                    <th scope="col">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-sm bg-grad-1" aria-hidden="true">
                          PN
                        </span>
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-nowrap">
                            Priya Nair
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-nowrap">
                            <bdi>
                              Tier 2 · Technical
                            </bdi>
                          </span>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="fs-md fw-semibold text-title text-nowrap">
                          <bdi>
                            486
                          </bdi>
                        </span>
                        <span className="badge-soft tint-emerald d-inline-flex align-items-center gap-1">
                          {" "}
                          <i className="icon-12 flip-rtl" data-lucide="trending-up" aria-hidden="true" />
                          <bdi>
                            +18.4%
                          </bdi>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-1 fs-md fw-semibold text-cat-emerald text-nowrap">
                        <i className="icon-14" data-lucide="timer" aria-hidden="true" />
                        <bdi>
                          8m 24s
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md text-body-2 text-nowrap">
                        <bdi>
                          4h 06m
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="seg-meter" role="img" aria-label="Satisfaction 4.9 out of 5">
                          <span className="bg-cat-emerald" />
                          <span className="bg-cat-emerald" />
                          <span className="bg-cat-emerald" />
                          <span className="bg-cat-emerald" />
                          <span className="bg-cat-emerald" />
                        </span>
                        <span className="fs-md fw-semibold text-title text-nowrap">
                          <bdi>
                            4.9
                          </bdi>
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="fs-md fw-semibold text-title text-nowrap">
                          <bdi>
                            16 / 25
                          </bdi>
                        </span>
                        <span
                          className="progress progress-sm progress-inline"
                          role="progressbar"
                          aria-label="Priya Nair's open tickets against capacity"
                          aria-valuenow="64"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="progress-bar bg-cat-emerald" style={{ width: "64%" }} />
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-emerald text-nowrap">
                        On shift
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-sm bg-grad-3" aria-hidden="true">
                          AS
                        </span>
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-nowrap">
                            Aarav Shah
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-nowrap">
                            <bdi>
                              Tier 1 · Support
                            </bdi>
                          </span>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="fs-md fw-semibold text-title text-nowrap">
                          <bdi>
                            452
                          </bdi>
                        </span>
                        <span className="badge-soft tint-emerald d-inline-flex align-items-center gap-1">
                          {" "}
                          <i className="icon-12 flip-rtl" data-lucide="trending-up" aria-hidden="true" />
                          <bdi>
                            +11.2%
                          </bdi>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-1 fs-md fw-semibold text-cat-orange text-nowrap">
                        <i className="icon-14" data-lucide="timer" aria-hidden="true" />
                        <bdi>
                          11m 05s
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md text-body-2 text-nowrap">
                        <bdi>
                          5h 12m
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="seg-meter" role="img" aria-label="Satisfaction 4.7 out of 5">
                          <span className="bg-cat-emerald" />
                          <span className="bg-cat-emerald" />
                          <span className="bg-cat-emerald" />
                          <span className="bg-cat-emerald" />
                          <span className="bg-cat-emerald" />
                        </span>
                        <span className="fs-md fw-semibold text-title text-nowrap">
                          <bdi>
                            4.7
                          </bdi>
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="fs-md fw-semibold text-title text-nowrap">
                          <bdi>
                            21 / 25
                          </bdi>
                        </span>
                        <span
                          className="progress progress-sm progress-inline"
                          role="progressbar"
                          aria-label="Aarav Shah's open tickets against capacity"
                          aria-valuenow="84"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="progress-bar bg-cat-amber" style={{ width: "84%" }} />
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-emerald text-nowrap">
                        On shift
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-sm bg-grad-5" aria-hidden="true">
                          HS
                        </span>
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-nowrap">
                            Hana Sato
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-nowrap">
                            <bdi>
                              Tier 1 · Support
                            </bdi>
                          </span>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="fs-md fw-semibold text-title text-nowrap">
                          <bdi>
                            418
                          </bdi>
                        </span>
                        <span className="badge-soft tint-emerald d-inline-flex align-items-center gap-1">
                          {" "}
                          <i className="icon-12 flip-rtl" data-lucide="trending-up" aria-hidden="true" />
                          <bdi>
                            +9.6%
                          </bdi>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-1 fs-md fw-semibold text-cat-emerald text-nowrap">
                        <i className="icon-14" data-lucide="timer" aria-hidden="true" />
                        <bdi>
                          9m 48s
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md text-body-2 text-nowrap">
                        <bdi>
                          4h 51m
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="seg-meter" role="img" aria-label="Satisfaction 4.8 out of 5">
                          <span className="bg-cat-emerald" />
                          <span className="bg-cat-emerald" />
                          <span className="bg-cat-emerald" />
                          <span className="bg-cat-emerald" />
                          <span className="bg-cat-emerald" />
                        </span>
                        <span className="fs-md fw-semibold text-title text-nowrap">
                          <bdi>
                            4.8
                          </bdi>
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="fs-md fw-semibold text-title text-nowrap">
                          <bdi>
                            14 / 25
                          </bdi>
                        </span>
                        <span
                          className="progress progress-sm progress-inline"
                          role="progressbar"
                          aria-label="Hana Sato's open tickets against capacity"
                          aria-valuenow="56"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="progress-bar bg-cat-emerald" style={{ width: "56%" }} />
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-emerald text-nowrap">
                        On shift
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-sm bg-grad-2" aria-hidden="true">
                          EV
                        </span>
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-nowrap">
                            Elena Vasquez
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-nowrap">
                            <bdi>
                              Tier 2 · Technical
                            </bdi>
                          </span>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="fs-md fw-semibold text-title text-nowrap">
                          <bdi>
                            404
                          </bdi>
                        </span>
                        <span className="badge-soft tint-emerald d-inline-flex align-items-center gap-1">
                          {" "}
                          <i className="icon-12 flip-rtl" data-lucide="trending-up" aria-hidden="true" />
                          <bdi>
                            +6.1%
                          </bdi>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-1 fs-md fw-semibold text-cat-orange text-nowrap">
                        <i className="icon-14" data-lucide="timer" aria-hidden="true" />
                        <bdi>
                          13m 20s
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md text-body-2 text-nowrap">
                        <bdi>
                          6h 02m
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="seg-meter" role="img" aria-label="Satisfaction 4.3 out of 5">
                          <span className="bg-cat-amber" />
                          <span className="bg-cat-amber" />
                          <span className="bg-cat-amber" />
                          <span className="bg-cat-amber" />
                          <span />
                        </span>
                        <span className="fs-md fw-semibold text-title text-nowrap">
                          <bdi>
                            4.3
                          </bdi>
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="fs-md fw-semibold text-title text-nowrap">
                          <bdi>
                            23 / 25
                          </bdi>
                        </span>
                        <span
                          className="progress progress-sm progress-inline"
                          role="progressbar"
                          aria-label="Elena Vasquez's open tickets against capacity"
                          aria-valuenow="92"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="progress-bar bg-cat-rose" style={{ width: "92%" }} />
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-emerald text-nowrap">
                        On shift
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-sm bg-grad-6" aria-hidden="true">
                          MB
                        </span>
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-nowrap">
                            Marcus Bell
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-nowrap">
                            Billing
                          </span>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="fs-md fw-semibold text-title text-nowrap">
                          <bdi>
                            389
                          </bdi>
                        </span>
                        <span className="badge-soft tint-rose d-inline-flex align-items-center gap-1">
                          {" "}
                          <i className="icon-12 flip-rtl" data-lucide="trending-down" aria-hidden="true" />
                          <bdi>
                            −3.4%
                          </bdi>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-1 fs-md fw-semibold text-cat-orange text-nowrap">
                        <i className="icon-14" data-lucide="timer" aria-hidden="true" />
                        <bdi>
                          14m 36s
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md text-body-2 text-nowrap">
                        <bdi>
                          7h 18m
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="seg-meter" role="img" aria-label="Satisfaction 4.0 out of 5">
                          <span className="bg-cat-amber" />
                          <span className="bg-cat-amber" />
                          <span className="bg-cat-amber" />
                          <span className="bg-cat-amber" />
                          <span />
                        </span>
                        <span className="fs-md fw-semibold text-title text-nowrap">
                          <bdi>
                            4.0
                          </bdi>
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="fs-md fw-semibold text-title text-nowrap">
                          <bdi>
                            25 / 25
                          </bdi>
                        </span>
                        <span
                          className="progress progress-sm progress-inline"
                          role="progressbar"
                          aria-label="Marcus Bell's open tickets against capacity"
                          aria-valuenow="100"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="progress-bar bg-cat-rose" style={{ width: "100%" }} />
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-amber text-nowrap">
                        On break
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-sm bg-grad-4" aria-hidden="true">
                          FM
                        </span>
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-nowrap">
                            Felix Moreau
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-nowrap">
                            <bdi>
                              Tier 1 · Support
                            </bdi>
                          </span>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="fs-md fw-semibold text-title text-nowrap">
                          <bdi>
                            371
                          </bdi>
                        </span>
                        <span className="badge-soft tint-emerald d-inline-flex align-items-center gap-1">
                          {" "}
                          <i className="icon-12 flip-rtl" data-lucide="trending-up" aria-hidden="true" />
                          <bdi>
                            +4.8%
                          </bdi>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-1 fs-md fw-semibold text-cat-rose text-nowrap">
                        <i className="icon-14" data-lucide="timer" aria-hidden="true" />
                        <bdi>
                          18m 40s
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md text-body-2 text-nowrap">
                        <bdi>
                          6h 44m
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="seg-meter" role="img" aria-label="Satisfaction 3.6 out of 5">
                          <span className="bg-cat-rose" />
                          <span className="bg-cat-rose" />
                          <span className="bg-cat-rose" />
                          <span className="bg-cat-rose" />
                          <span />
                        </span>
                        <span className="fs-md fw-semibold text-title text-nowrap">
                          <bdi>
                            3.6
                          </bdi>
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="fs-md fw-semibold text-title text-nowrap">
                          <bdi>
                            19 / 25
                          </bdi>
                        </span>
                        <span
                          className="progress progress-sm progress-inline"
                          role="progressbar"
                          aria-label="Felix Moreau's open tickets against capacity"
                          aria-valuenow="76"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="progress-bar bg-cat-amber" style={{ width: "76%" }} />
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-slate text-nowrap">
                        Off shift
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 pt-3 mt-3 border-t-soft">
              <span className="fs-md text-muted-2">
                <bdi>
                  Showing the top 6 of 24 agents by tickets resolved
                </bdi>
              </span>
              <button type="button" className="btn btn-outline-soft d-inline-flex align-items-center gap-2 text-nowrap">
                View all agents
                <i className="icon-18 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Customer & category insights ===== */}
      <section className="mb-4" aria-labelledby="hd-insights-title">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
          <div className="min-w-0">
            <h2 id="hd-insights-title" className="fs-4 fw-bold text-title mb-1">
              {"Customer & Category Insights"}
            </h2>
            <p className="fs-md text-body-2 mb-0">
              What customers are raising, who is raising it, and which accounts lean hardest on the desk.
            </p>
          </div>
          <div className="d-flex flex-wrap align-items-center gap-2">
            <span className="badge-soft tint-blue border-current d-inline-flex align-self-stretch align-items-center gap-2 px-3">
              {" "}
              <i className="icon-12" data-lucide="building-2" aria-hidden="true" />
              {" "}
              <bdi>
                1,284 accounts · 3,412 customers
              </bdi>
              {" "}
            </span>
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-outline-soft btn-18 rounded-circle"
                id="hdInsightsMenu"
                data-bs-toggle="dropdown"
                data-bs-offset="0,8"
                aria-expanded="false"
                aria-label="Insight options"
              >
                <i data-lucide="ellipsis-vertical" />
              </button>
              {" "}
              <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="hdInsightsMenu">
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="tags" />
                    Manage categories
                  </button>
                </li>
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="users-round" />
                    Customer segments
                  </button>
                </li>
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="download" />
                    Export insights
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row g-3 mb-3">
          {/* Ticket categories */}
          <div className="col-12 col-xxl-8">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <div className="min-w-0">
                    <h3 className="fs-5 fw-bold text-title mb-1">
                      Ticket Categories
                    </h3>
                    <p className="fs-md text-body-2 mb-0">
                      What the month's tickets were about, and how quickly each subject clears
                    </p>
                  </div>
                  <span className="badge-soft tint-rose border-current d-inline-flex align-items-center gap-2 px-3">
                    {" "}
                    <i className="icon-12" data-lucide="flame" aria-hidden="true" />
                    {" "}
                    <bdi>
                      Billing is the biggest and the slowest
                    </bdi>
                    {" "}
                  </span>
                </div>
                <div className="row g-3 g-xl-4 align-items-center flex-grow-1">
                  <div className="col-12 col-md-5">
                    <div id="hdCategoryMixChart" className="chart-area" />
                  </div>
                  <div className="col-12 col-md-7">
                    <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                      <li className="d-flex align-items-center gap-2 gap-sm-3">
                        <span className="legend-dot bg-cat-brand" aria-hidden="true" />
                        <span className="flex-grow-1 min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-truncate">
                            {"Billing & Payments"}
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi>
                              avg 8h 12m · 89.4% in SLA
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <span className="figure-col text-end">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-nowrap">
                            <bdi>
                              3,246
                            </bdi>
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-nowrap">
                            <bdi>
                              26.0%
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <span className="badge-soft tint-rose figure-col text-center text-nowrap">
                          <bdi>
                            +6.2%
                          </bdi>
                        </span>
                      </li>
                      <li className="d-flex align-items-center gap-2 gap-sm-3">
                        <span className="legend-dot bg-cat-violet" aria-hidden="true" />
                        <span className="flex-grow-1 min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-truncate">
                            Technical Issues
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi>
                              avg 7h 26m · 91.8% in SLA
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <span className="figure-col text-end">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-nowrap">
                            <bdi>
                              2,871
                            </bdi>
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-nowrap">
                            <bdi>
                              23.0%
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <span className="badge-soft tint-emerald figure-col text-center text-nowrap">
                          <bdi>
                            −4.8%
                          </bdi>
                        </span>
                      </li>
                      <li className="d-flex align-items-center gap-2 gap-sm-3">
                        <span className="legend-dot bg-cat-blue" aria-hidden="true" />
                        <span className="flex-grow-1 min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-truncate">
                            {"Account & Access"}
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi>
                              avg 3h 42m · 97.1% in SLA
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <span className="figure-col text-end">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-nowrap">
                            <bdi>
                              2,122
                            </bdi>
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-nowrap">
                            <bdi>
                              17.0%
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <span className="badge-soft tint-rose figure-col text-center text-nowrap">
                          <bdi>
                            +11.4%
                          </bdi>
                        </span>
                      </li>
                      <li className="d-flex align-items-center gap-2 gap-sm-3">
                        <span className="legend-dot bg-cat-amber" aria-hidden="true" />
                        <span className="flex-grow-1 min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-truncate">
                            Product Questions
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi>
                              avg 2h 55m · 98.4% in SLA
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <span className="figure-col text-end">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-nowrap">
                            <bdi>
                              1,748
                            </bdi>
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-nowrap">
                            <bdi>
                              14.0%
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <span className="badge-soft tint-emerald figure-col text-center text-nowrap">
                          <bdi>
                            −2.1%
                          </bdi>
                        </span>
                      </li>
                      <li className="d-flex align-items-center gap-2 gap-sm-3">
                        <span className="legend-dot bg-cat-emerald" aria-hidden="true" />
                        <span className="flex-grow-1 min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-truncate">
                            {"Shipping & Delivery"}
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi>
                              avg 5h 26m · 95.3% in SLA
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <span className="figure-col text-end">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-nowrap">
                            <bdi>
                              1,373
                            </bdi>
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-nowrap">
                            <bdi>
                              11.0%
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <span className="badge-soft tint-emerald figure-col text-center text-nowrap">
                          <bdi>
                            −8.6%
                          </bdi>
                        </span>
                      </li>
                      <li className="d-flex align-items-center gap-2 gap-sm-3">
                        <span className="legend-dot bg-cat-slate" aria-hidden="true" />
                        <span className="flex-grow-1 min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-truncate">
                            Other
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi>
                              avg 4h 10m · 96.0% in SLA
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <span className="figure-col text-end">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-nowrap">
                            <bdi>
                              1,126
                            </bdi>
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-nowrap">
                            <bdi>
                              9.0%
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <span className="badge-soft tint-slate figure-col text-center text-nowrap">
                          <bdi>
                            +1.3%
                          </bdi>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <ul className="list-unstyled row row-cols-1 row-cols-sm-2 g-3 border-t-soft pt-3 mt-3 mb-0">
                  <li className="col d-flex align-items-center gap-2">
                    <span className="icon-box icon-box-sm tint-rose border-current" aria-hidden="true">
                      <i data-lucide="hourglass" />
                    </span>
                    <span className="min-w-0">
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        Slowest to clear
                      </span>
                      {" "}
                      <span className="d-block fs-6 fw-semibold text-title text-truncate">
                        {"Billing & Payments"}
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        <bdi>
                          8h 12m on average
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </li>
                  <li className="col d-flex align-items-center gap-2">
                    <span className="icon-box icon-box-sm tint-emerald border-current" aria-hidden="true">
                      <i data-lucide="zap" />
                    </span>
                    <span className="min-w-0">
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        Fastest to clear
                      </span>
                      {" "}
                      <span className="d-block fs-6 fw-semibold text-title text-truncate">
                        Product Questions
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        <bdi>
                          2h 55m on average
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Customer activity */}
          <div className="col-12 col-xxl-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-start justify-content-between gap-2 mb-3">
                  <div className="min-w-0">
                    <h3 className="fs-5 fw-bold text-title mb-1">
                      Customer Activity
                    </h3>
                    <p className="fs-md text-body-2 mb-0">
                      How many people wrote in each week, and whether the desk had heard from them before
                    </p>
                  </div>
                  <span className="icon-box icon-box-sm tint-brand border-current" aria-hidden="true">
                    <i data-lucide="user-round-plus" />
                  </span>
                </div>
                <ul className="list-unstyled d-flex flex-wrap align-items-center gap-3 mb-2">
                  <li className="d-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-brand" aria-hidden="true" />
                    <span className="fs-md text-body-2">
                      Returning
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-violet" aria-hidden="true" />
                    <span className="fs-md text-body-2">
                      First-time
                    </span>
                  </li>
                </ul>
                {/* Below xxl the card spans the full page, so the plot and its
                   readings sit side by side rather than stretching into a wide,
                   sparse band; at xxl they stack back into the narrow column. */}
                <div className="row g-3 g-xl-4 align-items-center flex-grow-1">
                  <div className="col-12 col-md-6 col-xxl-12">
                    <div id="hdCustomerActivityChart" className="chart-area" />
                  </div>
                  <div className="col-12 col-md-6 col-xxl-12">
                    <ul className="list-unstyled row row-cols-1 row-cols-sm-2 g-3 mb-0">
                      <li className="col d-flex align-items-center gap-2">
                        <span className="icon-box icon-box-sm tint-brand border-current" aria-hidden="true">
                          <i data-lucide="users-round" />
                        </span>
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            Customers writing in
                          </span>
                          {" "}
                          <span className="d-block fs-6 fw-semibold text-title">
                            <bdi>
                              3,412
                            </bdi>
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2">
                            <bdi>
                              +7.2% on last month
                            </bdi>
                          </span>
                          {" "}
                        </span>
                      </li>
                      <li className="col d-flex align-items-center gap-2">
                        <span className="icon-box icon-box-sm tint-violet border-current" aria-hidden="true">
                          <i data-lucide="user-round-plus" />
                        </span>
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            First-time contacts
                          </span>
                          {" "}
                          <span className="d-block fs-6 fw-semibold text-title">
                            <bdi>
                              946
                            </bdi>
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2">
                            <bdi>
                              27.7% of everyone
                            </bdi>
                          </span>
                          {" "}
                        </span>
                      </li>
                      <li className="col d-flex align-items-center gap-2">
                        <span className="icon-box icon-box-sm tint-amber border-current" aria-hidden="true">
                          <i data-lucide="repeat" />
                        </span>
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            Repeat contact rate
                          </span>
                          {" "}
                          <span className="d-block fs-6 fw-semibold text-title">
                            <bdi>
                              18.4%
                            </bdi>
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2">
                            <bdi>
                              wrote in twice or more
                            </bdi>
                          </span>
                          {" "}
                        </span>
                      </li>
                      <li className="col d-flex align-items-center gap-2">
                        <span className="icon-box icon-box-sm tint-emerald border-current" aria-hidden="true">
                          <i data-lucide="inbox" />
                        </span>
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            Tickets per customer
                          </span>
                          {" "}
                          <span className="d-block fs-6 fw-semibold text-title">
                            <bdi>
                              3.7
                            </bdi>
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2">
                            <bdi>
                              12,486 across 3,412
                            </bdi>
                          </span>
                          {" "}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card" data-filter-scope="">
          <div className="card-body">
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
              <div className="min-w-0">
                <h3 className="fs-5 fw-bold text-title mb-1">
                  Accounts Leaning Hardest
                </h3>
                <p className="fs-md text-body-2 mb-0">
                  The busiest accounts this month, with the six-month shape of their demand
                </p>
              </div>
              <div
                className="nav nav-pills d-inline-flex flex-nowrap mw-100 gap-1 p-1 rounded-pill bg-soft overflow-x-auto scrollbar-none"
                role="group"
                aria-label="Filter accounts by segment"
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
                  data-filter="enterprise"
                  aria-pressed="false"
                >
                  Enterprise
                </button>
                <button
                  type="button"
                  className="nav-link fw-semibold text-nowrap"
                  data-filter="growth"
                  aria-pressed="false"
                >
                  Growth
                </button>
                <button
                  type="button"
                  className="nav-link fw-semibold text-nowrap"
                  data-filter="starter"
                  aria-pressed="false"
                >
                  Starter
                </button>
                <button
                  type="button"
                  className="nav-link fw-semibold text-nowrap"
                  data-filter="at-risk"
                  aria-pressed="false"
                >
                  At risk
                </button>
              </div>
            </div>
            {/* The leaderboard keeps a column rather than the card's full
               width: its rows end on a fixed trailing block, so on the
               widest screens the flexible name column stretches into a band
               of empty space. The summary reads beside it there instead of
               under it, and the pair stacks again below xxl where the row
               needs its whole width for the account name. */}
            <div className="row g-3 g-xl-4">
              <div className="col-12 col-xxl-8">
                <ol className="list-unstyled d-flex flex-column gap-3 mb-0">
                  <li className="d-flex align-items-center gap-2 gap-sm-3" data-filter-tags="enterprise at-risk">
                    <span className="icon-box icon-box-sm tint-brand border-current fs-md fw-bold" aria-hidden="true">
                      <bdi>
                        1
                      </bdi>
                    </span>
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-block fs-md fw-semibold text-title text-truncate">
                        Meridian Bank
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        <bdi>
                          Enterprise · mostly Billing · CSAT 3.9
                        </bdi>
                      </span>
                      {" "}
                    </span>
                    <div id="hdAccountSpark1" className="chart-inline-lg d-none d-lg-block" />
                    <span className="figure-col text-end">
                      {" "}
                      <span className="d-block fs-md fw-semibold text-title text-nowrap">
                        <bdi>
                          418
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-nowrap">
                        <bdi>
                          34 open now
                        </bdi>
                      </span>
                      {" "}
                    </span>
                    <span className="badge-soft tint-rose figure-col text-center text-nowrap">
                      At risk
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2 gap-sm-3" data-filter-tags="enterprise">
                    <span className="icon-box icon-box-sm tint-emerald border-current fs-md fw-bold" aria-hidden="true">
                      <bdi>
                        2
                      </bdi>
                    </span>
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-block fs-md fw-semibold text-title text-truncate">
                        Northwind Retail
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        <bdi>
                          Enterprise · mostly Shipping · CSAT 4.6
                        </bdi>
                      </span>
                      {" "}
                    </span>
                    <div id="hdAccountSpark2" className="chart-inline-lg d-none d-lg-block" />
                    <span className="figure-col text-end">
                      {" "}
                      <span className="d-block fs-md fw-semibold text-title text-nowrap">
                        <bdi>
                          366
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-nowrap">
                        <bdi>
                          21 open now
                        </bdi>
                      </span>
                      {" "}
                    </span>
                    <span className="badge-soft tint-emerald figure-col text-center text-nowrap">
                      Healthy
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2 gap-sm-3" data-filter-tags="growth at-risk">
                    <span className="icon-box icon-box-sm tint-violet border-current fs-md fw-bold" aria-hidden="true">
                      <bdi>
                        3
                      </bdi>
                    </span>
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-block fs-md fw-semibold text-title text-truncate">
                        Vertex Labs
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        <bdi>
                          Growth · mostly Technical · CSAT 4.0
                        </bdi>
                      </span>
                      {" "}
                    </span>
                    <div id="hdAccountSpark3" className="chart-inline-lg d-none d-lg-block" />
                    <span className="figure-col text-end">
                      {" "}
                      <span className="d-block fs-md fw-semibold text-title text-nowrap">
                        <bdi>
                          291
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-nowrap">
                        <bdi>
                          27 open now
                        </bdi>
                      </span>
                      {" "}
                    </span>
                    <span className="badge-soft tint-rose figure-col text-center text-nowrap">
                      At risk
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2 gap-sm-3" data-filter-tags="enterprise">
                    <span className="icon-box icon-box-sm tint-blue border-current fs-md fw-bold" aria-hidden="true">
                      <bdi>
                        4
                      </bdi>
                    </span>
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-block fs-md fw-semibold text-title text-truncate">
                        Lumen Systems
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        <bdi>
                          Enterprise · mostly Account access · CSAT 4.7
                        </bdi>
                      </span>
                      {" "}
                    </span>
                    <div id="hdAccountSpark4" className="chart-inline-lg d-none d-lg-block" />
                    <span className="figure-col text-end">
                      {" "}
                      <span className="d-block fs-md fw-semibold text-title text-nowrap">
                        <bdi>
                          254
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-nowrap">
                        <bdi>
                          12 open now
                        </bdi>
                      </span>
                      {" "}
                    </span>
                    <span className="badge-soft tint-emerald figure-col text-center text-nowrap">
                      Healthy
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2 gap-sm-3" data-filter-tags="growth">
                    <span className="icon-box icon-box-sm tint-emerald border-current fs-md fw-bold" aria-hidden="true">
                      <bdi>
                        5
                      </bdi>
                    </span>
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-block fs-md fw-semibold text-title text-truncate">
                        Orbit Freight
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        <bdi>
                          Growth · mostly Shipping · CSAT 4.2
                        </bdi>
                      </span>
                      {" "}
                    </span>
                    <div id="hdAccountSpark5" className="chart-inline-lg d-none d-lg-block" />
                    <span className="figure-col text-end">
                      {" "}
                      <span className="d-block fs-md fw-semibold text-title text-nowrap">
                        <bdi>
                          208
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-nowrap">
                        <bdi>
                          19 open now
                        </bdi>
                      </span>
                      {" "}
                    </span>
                    <span className="badge-soft tint-amber figure-col text-center text-nowrap">
                      Watch
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2 gap-sm-3" data-filter-tags="starter">
                    <span className="icon-box icon-box-sm tint-amber border-current fs-md fw-bold" aria-hidden="true">
                      <bdi>
                        6
                      </bdi>
                    </span>
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-block fs-md fw-semibold text-title text-truncate">
                        Brightpath
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        <bdi>
                          Starter · mostly Product questions · CSAT 4.5
                        </bdi>
                      </span>
                      {" "}
                    </span>
                    <div id="hdAccountSpark6" className="chart-inline-lg d-none d-lg-block" />
                    <span className="figure-col text-end">
                      {" "}
                      <span className="d-block fs-md fw-semibold text-title text-nowrap">
                        <bdi>
                          176
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-nowrap">
                        <bdi>
                          8 open now
                        </bdi>
                      </span>
                      {" "}
                    </span>
                    <span className="badge-soft tint-emerald figure-col text-center text-nowrap">
                      Healthy
                    </span>
                  </li>
                </ol>
              </div>
              <div className="col-12 col-xxl-4">
                <div className="tile-soft d-flex flex-column justify-content-between gap-3 h-100 p-3 rounded-3">
                  {/* Three across while the tile is the full width of the card,
                     stacked again at xxl where it is a narrow side column. */}
                  <ul className="list-unstyled row row-cols-1 row-cols-sm-3 row-cols-xxl-1 g-3 mb-0">
                    <li className="col d-flex align-items-center gap-2">
                      <span className="icon-box icon-box-sm tint-rose border-current" aria-hidden="true">
                        <i data-lucide="shield-alert" />
                      </span>
                      <span className="min-w-0">
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-truncate">
                          Accounts at risk
                        </span>
                        {" "}
                        <span className="d-block fs-6 fw-semibold text-title">
                          <bdi>
                            18 accounts
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2">
                          <bdi>
                            rising volume, CSAT under 4
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </li>
                    <li className="col d-flex align-items-center gap-2">
                      <span className="icon-box icon-box-sm tint-brand border-current" aria-hidden="true">
                        <i data-lucide="building-2" />
                      </span>
                      <span className="min-w-0">
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-truncate">
                          Accounts writing in
                        </span>
                        {" "}
                        <span className="d-block fs-6 fw-semibold text-title">
                          <bdi>
                            1,284
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2">
                          <bdi>
                            of 4,910 on the books
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </li>
                    <li className="col d-flex align-items-center gap-2">
                      <span className="icon-box icon-box-sm tint-violet border-current" aria-hidden="true">
                        <i data-lucide="percent" />
                      </span>
                      <span className="min-w-0">
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-truncate">
                          These six between them
                        </span>
                        {" "}
                        <span className="d-block fs-6 fw-semibold text-title">
                          <bdi>
                            13.7%
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2">
                          <bdi>
                            1,713 of 12,486 tickets
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="btn btn-outline-soft w-100 d-inline-flex flex-nowrap align-items-center justify-content-center gap-2 text-nowrap"
                  >
                    View all accounts
                    <i className="icon-18 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Recent support activity ===== */}
      <section className="mb-4" aria-labelledby="hd-activity-title">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
          <div className="min-w-0">
            <h2 id="hd-activity-title" className="fs-4 fw-bold text-title mb-1">
              Recent Support Activity
            </h2>
            <p className="fs-md text-body-2 mb-0">
              Every reply, assignment and status change the desk has logged, newest first.
            </p>
          </div>
          <div className="d-flex flex-wrap align-items-center gap-2">
            <span className="badge-soft tint-emerald border-current d-inline-flex align-self-stretch align-items-center gap-2 px-3">
              {" "}
              <i className="icon-12" data-lucide="activity" aria-hidden="true" />
              {" "}
              <bdi>
                Live · 2,570 events today
              </bdi>
              {" "}
            </span>
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-outline-soft btn-18 rounded-circle"
                id="hdActivityMenu"
                data-bs-toggle="dropdown"
                data-bs-offset="0,8"
                aria-expanded="false"
                aria-label="Activity options"
              >
                <i data-lucide="ellipsis-vertical" />
              </button>
              {" "}
              <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="hdActivityMenu">
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="bell-ring" />
                    Activity alerts
                  </button>
                </li>
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="file-text" />
                    Open audit log
                  </button>
                </li>
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="download" />
                    Export activity
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row g-3">
          {/* Activity timeline */}
          <div className="col-12 col-xxl-8">
            <div className="card h-100" data-filter-scope="">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
                  <div className="min-w-0">
                    <h3 className="fs-5 fw-bold text-title mb-1">
                      Activity Timeline
                    </h3>
                    <p className="fs-md text-body-2 mb-0">
                      What changed on a ticket, who changed it and when
                    </p>
                  </div>
                  <div
                    className="nav nav-pills d-inline-flex flex-nowrap mw-100 gap-1 p-1 rounded-pill bg-soft overflow-x-auto scrollbar-none"
                    role="group"
                    aria-label="Filter activity by event type"
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
                      data-filter="reply"
                      aria-pressed="false"
                    >
                      Replies
                    </button>
                    <button
                      type="button"
                      className="nav-link fw-semibold text-nowrap"
                      data-filter="assignment"
                      aria-pressed="false"
                    >
                      Assignments
                    </button>
                    <button
                      type="button"
                      className="nav-link fw-semibold text-nowrap"
                      data-filter="status"
                      aria-pressed="false"
                    >
                      Status
                    </button>
                    <button
                      type="button"
                      className="nav-link fw-semibold text-nowrap"
                      data-filter="escalation"
                      aria-pressed="false"
                    >
                      Escalations
                    </button>
                  </div>
                </div>
                {/* Each day label carries the tags of the events beneath it, so a
                   filter that empties a day hides its heading with it. */}
                <p
                  className="fs-xs fw-semibold text-uppercase text-muted-2 mb-2"
                  data-filter-tags="reply assignment status escalation"
                >
                  <bdi>
                    Today · 27 August 2026
                  </bdi>
                </p>
                <ol className="rail-list list-unstyled d-flex flex-column mb-0">
                  <li className="d-flex align-items-center gap-3 py-2" data-filter-tags="reply">
                    <span className="rail-dot bg-cat-blue" aria-hidden="true" />
                    <span className="flex-grow-1 min-w-0 d-flex align-items-center gap-2 gap-sm-3 rounded-3 px-2 px-sm-3 py-2">
                      <span className="avatar avatar-sm bg-grad-3" aria-hidden="true">
                        AS
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-md text-body-2 text-truncate">
                          <bdi>
                            <span className="fw-semibold text-title">
                              Aarav Shah
                            </span>
                            {" "}replied to{" "}
                            <span className="fw-semibold text-title">
                              <bdi>
                                TK-8421
                              </bdi>
                            </span>
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-truncate">
                          <bdi>
                            {"Northwind Retail · Billing & Payments"}
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-block bg-soft rounded-2 px-2 py-1 mt-1 fs-xs text-body-2 text-truncate">
                          <bdi>
                            “Your card issuer declined the renewal — I’ve sent a secure link to retry it.”
                          </bdi>
                        </span>
                        {" "}
                      </span>
                      <span className="badge-soft tint-blue d-none d-md-inline-block flex-shrink-0 text-nowrap">
                        Reply sent
                      </span>
                      <span className="fs-xs text-muted-2 text-nowrap flex-shrink-0">
                        <bdi>
                          14:32
                        </bdi>
                      </span>
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3 py-2" data-filter-tags="status">
                    <span className="rail-dot bg-cat-amber" aria-hidden="true" />
                    <span className="flex-grow-1 min-w-0 d-flex align-items-center gap-2 gap-sm-3 rounded-3 px-2 px-sm-3 py-2">
                      <span className="avatar avatar-sm bg-grad-1" aria-hidden="true">
                        PN
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-md text-body-2 text-truncate">
                          <bdi>
                            <span className="fw-semibold text-title">
                              Priya Nair
                            </span>
                            {" "}put{" "}
                            <span className="fw-semibold text-title">
                              <bdi>
                                TK-8419
                              </bdi>
                            </span>
                            {" "}
                            on hold
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-truncate">
                          <bdi>
                            Lumen Systems · Technical Issues · waiting on the customer
                          </bdi>
                        </span>
                        {" "}
                      </span>
                      <span className="badge-soft tint-amber d-none d-md-inline-block flex-shrink-0 text-nowrap">
                        Moved to Pending
                      </span>
                      <span className="fs-xs text-muted-2 text-nowrap flex-shrink-0">
                        <bdi>
                          14:05
                        </bdi>
                      </span>
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3 py-2" data-filter-tags="assignment">
                    <span className="rail-dot bg-cat-violet" aria-hidden="true" />
                    <span className="flex-grow-1 min-w-0 d-flex align-items-center gap-2 gap-sm-3 rounded-3 px-2 px-sm-3 py-2">
                      <span className="avatar avatar-sm bg-grad-6" aria-hidden="true">
                        MB
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-md text-body-2 text-truncate">
                          <bdi>
                            <span className="fw-semibold text-title">
                              Marcus Bell
                            </span>
                            {" "}claimed{" "}
                            <span className="fw-semibold text-title">
                              <bdi>
                                TK-8417
                              </bdi>
                            </span>
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-truncate">
                          <bdi>
                            {"Vertex Labs · Account & Access · unassigned for 5h"}
                          </bdi>
                        </span>
                        {" "}
                      </span>
                      <span className="badge-soft tint-violet d-none d-md-inline-block flex-shrink-0 text-nowrap">
                        Now assigned
                      </span>
                      <span className="fs-xs text-muted-2 text-nowrap flex-shrink-0">
                        <bdi>
                          13:41
                        </bdi>
                      </span>
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3 py-2" data-filter-tags="escalation">
                    <span className="rail-dot bg-cat-rose" aria-hidden="true" />
                    <span className="flex-grow-1 min-w-0 d-flex align-items-center gap-2 gap-sm-3 rounded-3 px-2 px-sm-3 py-2">
                      <span className="avatar avatar-sm bg-grad-2" aria-hidden="true">
                        EV
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-md text-body-2 text-truncate">
                          <bdi>
                            <span className="fw-semibold text-title">
                              Elena Vasquez
                            </span>
                            {" "}escalated{" "}
                            <span className="fw-semibold text-title">
                              <bdi>
                                TK-8428
                              </bdi>
                            </span>
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-truncate">
                          <bdi>
                            {"Brightpath · Billing & Payments · EU checkout failing"}
                          </bdi>
                        </span>
                        {" "}
                      </span>
                      <span className="badge-soft tint-rose d-none d-md-inline-block flex-shrink-0 text-nowrap">
                        Sent to Tier 2
                      </span>
                      <span className="fs-xs text-muted-2 text-nowrap flex-shrink-0">
                        <bdi>
                          12:58
                        </bdi>
                      </span>
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3 py-2" data-filter-tags="reply">
                    <span className="rail-dot bg-cat-blue" aria-hidden="true" />
                    <span className="flex-grow-1 min-w-0 d-flex align-items-center gap-2 gap-sm-3 rounded-3 px-2 px-sm-3 py-2">
                      <span className="avatar avatar-sm bg-grad-5" aria-hidden="true">
                        HS
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-md text-body-2 text-truncate">
                          <bdi>
                            <span className="fw-semibold text-title">
                              Hana Sato
                            </span>
                            {" "}replied to{" "}
                            <span className="fw-semibold text-title">
                              <bdi>
                                TK-8446
                              </bdi>
                            </span>
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-truncate">
                          <bdi>
                            {"Meridian Bank · Billing & Payments"}
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-block bg-soft rounded-2 px-2 py-1 mt-1 fs-xs text-body-2 text-truncate">
                          <bdi>
                            “I’ve split the August invoice across your two cost centres as requested.”
                          </bdi>
                        </span>
                        {" "}
                      </span>
                      <span className="badge-soft tint-blue d-none d-md-inline-block flex-shrink-0 text-nowrap">
                        Reply sent
                      </span>
                      <span className="fs-xs text-muted-2 text-nowrap flex-shrink-0">
                        <bdi>
                          11:20
                        </bdi>
                      </span>
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3 py-2" data-filter-tags="status">
                    <span className="rail-dot bg-cat-amber" aria-hidden="true" />
                    <span className="flex-grow-1 min-w-0 d-flex align-items-center gap-2 gap-sm-3 rounded-3 px-2 px-sm-3 py-2">
                      <span className="avatar avatar-sm bg-grad-3" aria-hidden="true">
                        AS
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-md text-body-2 text-truncate">
                          <bdi>
                            <span className="fw-semibold text-title">
                              Aarav Shah
                            </span>
                            {" "}resolved{" "}
                            <span className="fw-semibold text-title">
                              <bdi>
                                TK-8402
                              </bdi>
                            </span>
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-truncate">
                          <bdi>
                            Craftly · Product Questions · closed in 2h 14m
                          </bdi>
                        </span>
                        {" "}
                      </span>
                      <span className="badge-soft tint-emerald d-none d-md-inline-block flex-shrink-0 text-nowrap">
                        Marked resolved
                      </span>
                      <span className="fs-xs text-muted-2 text-nowrap flex-shrink-0">
                        <bdi>
                          10:47
                        </bdi>
                      </span>
                    </span>
                  </li>
                </ol>
                <p
                  className="fs-xs fw-semibold text-uppercase text-muted-2 mt-3 mb-2"
                  data-filter-tags="reply assignment status"
                >
                  <bdi>
                    Yesterday · 26 August 2026
                  </bdi>
                </p>
                <ol className="rail-list list-unstyled d-flex flex-column mb-0">
                  <li className="d-flex align-items-center gap-3 py-2" data-filter-tags="assignment">
                    <span className="rail-dot bg-cat-violet" aria-hidden="true" />
                    <span className="flex-grow-1 min-w-0 d-flex align-items-center gap-2 gap-sm-3 rounded-3 px-2 px-sm-3 py-2">
                      <span className="avatar avatar-sm bg-grad-1" aria-hidden="true">
                        PN
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-md text-body-2 text-truncate">
                          <bdi>
                            <span className="fw-semibold text-title">
                              Priya Nair
                            </span>
                            {" "}handed{" "}
                            <span className="fw-semibold text-title">
                              <bdi>
                                TK-8412
                              </bdi>
                            </span>
                            {" "}
                            to Marcus Bell
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-truncate">
                          <bdi>
                            {"Craftly · Billing & Payments · refund chase"}
                          </bdi>
                        </span>
                        {" "}
                      </span>
                      <span className="badge-soft tint-violet d-none d-md-inline-block flex-shrink-0 text-nowrap">
                        Reassigned
                      </span>
                      <span className="fs-xs text-muted-2 text-nowrap flex-shrink-0">
                        <bdi>
                          18:12
                        </bdi>
                      </span>
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3 py-2" data-filter-tags="status">
                    <span className="rail-dot bg-cat-amber" aria-hidden="true" />
                    <span className="flex-grow-1 min-w-0 d-flex align-items-center gap-2 gap-sm-3 rounded-3 px-2 px-sm-3 py-2">
                      <span className="avatar avatar-sm bg-grad-4" aria-hidden="true">
                        FM
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-md text-body-2 text-truncate">
                          <bdi>
                            <span className="fw-semibold text-title">
                              Felix Moreau
                            </span>
                            {" "}reopened{" "}
                            <span className="fw-semibold text-title">
                              <bdi>
                                TK-8377
                              </bdi>
                            </span>
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-truncate">
                          <bdi>
                            Kestrel Apps · Technical Issues · customer replied again
                          </bdi>
                        </span>
                        {" "}
                      </span>
                      <span className="badge-soft tint-rose d-none d-md-inline-block flex-shrink-0 text-nowrap">
                        Reopened
                      </span>
                      <span className="fs-xs text-muted-2 text-nowrap flex-shrink-0">
                        <bdi>
                          17:40
                        </bdi>
                      </span>
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3 py-2" data-filter-tags="reply">
                    <span className="rail-dot bg-cat-blue" aria-hidden="true" />
                    <span className="flex-grow-1 min-w-0 d-flex align-items-center gap-2 gap-sm-3 rounded-3 px-2 px-sm-3 py-2">
                      <span className="avatar avatar-sm bg-grad-2" aria-hidden="true">
                        EV
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-md text-body-2 text-truncate">
                          <bdi>
                            <span className="fw-semibold text-title">
                              Elena Vasquez
                            </span>
                            {" "}replied to{" "}
                            <span className="fw-semibold text-title">
                              <bdi>
                                TK-8376
                              </bdi>
                            </span>
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-truncate">
                          <bdi>
                            Meridian Bank · Technical Issues
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-block bg-soft rounded-2 px-2 py-1 mt-1 fs-xs text-body-2 text-truncate">
                          <bdi>
                            “The export job was stuck behind a queue backlog — it’s processing now.”
                          </bdi>
                        </span>
                        {" "}
                      </span>
                      <span className="badge-soft tint-blue d-none d-md-inline-block flex-shrink-0 text-nowrap">
                        Reply sent
                      </span>
                      <span className="fs-xs text-muted-2 text-nowrap flex-shrink-0">
                        <bdi>
                          16:55
                        </bdi>
                      </span>
                    </span>
                  </li>
                </ol>
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 pt-3 mt-3 border-t-soft">
                  <span className="fs-md text-muted-2">
                    <bdi>
                      Showing the 9 most recent events
                    </bdi>
                  </span>
                  <button
                    type="button"
                    className="btn btn-outline-soft d-inline-flex align-items-center gap-2 text-nowrap"
                  >
                    Open full activity log
                    <i className="icon-18 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Activity pulse */}
          <div className="col-12 col-xxl-4">
            <div className="card h-100">
              {/* The column stands beside a nine-event timeline, so the blocks
                 share the slack between them rather than centring one growing
                 row and leaving a dead band in the middle of the card. */}
              <div className="card-body d-flex flex-column justify-content-between">
                <div className="d-flex flex-wrap align-items-start justify-content-between gap-2 mb-3">
                  <div className="min-w-0">
                    <h3 className="fs-5 fw-bold text-title mb-1">
                      Activity Pulse
                    </h3>
                    <p className="fs-md text-body-2 mb-0">
                      Everything logged today, hour by hour
                    </p>
                  </div>
                  <span className="icon-box icon-box-sm tint-brand border-current" aria-hidden="true">
                    <i data-lucide="history" />
                  </span>
                </div>
                <p className="d-flex flex-wrap align-items-baseline gap-2 mb-0">
                  <span className="fs-2 fw-bold text-title lh-1">
                    <bdi>
                      2,570
                    </bdi>
                  </span>
                  <span className="badge-soft tint-emerald d-inline-flex align-items-center gap-1">
                    {" "}
                    <i className="icon-12 flip-rtl" data-lucide="trending-up" aria-hidden="true" />
                    <bdi>
                      +12.4%
                    </bdi>
                    {" "}
                  </span>
                  <span className="fs-md text-body-2">
                    events on yesterday
                  </span>
                </p>
                {/* Below xxl the card spans the full page, so the trace and its
                   breakdown sit side by side rather than stretching into a wide,
                   sparse band; at xxl they stack back into the narrow column. */}
                <div className="row g-3 g-xl-4 align-items-center mt-0">
                  <div className="col-12 col-md-6 col-xxl-12">
                    <div id="hdActivityPulseChart" className="chart-area" />
                  </div>
                  <div className="col-12 col-md-6 col-xxl-12">
                    <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                      <li>
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <span className="legend-dot bg-cat-blue" aria-hidden="true" />
                          <span className="flex-grow-1 min-w-0 fs-md fw-medium text-title text-truncate">
                            Replies sent
                          </span>
                          <span className="fs-md fw-semibold text-title">
                            <bdi>
                              1,284
                            </bdi>
                          </span>
                        </div>
                        <div
                          className="progress progress-sm"
                          role="progressbar"
                          aria-label="Replies sent, share of today"
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div className="progress-bar bg-cat-blue" style={{ width: "50%" }} />
                        </div>
                      </li>
                      <li>
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <span className="legend-dot bg-cat-amber" aria-hidden="true" />
                          <span className="flex-grow-1 min-w-0 fs-md fw-medium text-title text-truncate">
                            Status changes
                          </span>
                          <span className="fs-md fw-semibold text-title">
                            <bdi>
                              918
                            </bdi>
                          </span>
                        </div>
                        <div
                          className="progress progress-sm"
                          role="progressbar"
                          aria-label="Status changes, share of today"
                          aria-valuenow="36"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div className="progress-bar bg-cat-amber" style={{ width: "35.7%" }} />
                        </div>
                      </li>
                      <li>
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <span className="legend-dot bg-cat-violet" aria-hidden="true" />
                          <span className="flex-grow-1 min-w-0 fs-md fw-medium text-title text-truncate">
                            Assignments
                          </span>
                          <span className="fs-md fw-semibold text-title">
                            <bdi>
                              342
                            </bdi>
                          </span>
                        </div>
                        <div
                          className="progress progress-sm"
                          role="progressbar"
                          aria-label="Assignments, share of today"
                          aria-valuenow="13"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div className="progress-bar bg-cat-violet" style={{ width: "13.3%" }} />
                        </div>
                      </li>
                      <li>
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <span className="legend-dot bg-cat-rose" aria-hidden="true" />
                          <span className="flex-grow-1 min-w-0 fs-md fw-medium text-title text-truncate">
                            Escalations
                          </span>
                          <span className="fs-md fw-semibold text-title">
                            <bdi>
                              26
                            </bdi>
                          </span>
                        </div>
                        <div
                          className="progress progress-sm"
                          role="progressbar"
                          aria-label="Escalations, share of today"
                          aria-valuenow="1"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div className="progress-bar bg-cat-rose" style={{ width: "1%" }} />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <ul className="list-unstyled row row-cols-1 row-cols-sm-2 g-3 border-t-soft pt-3 mt-3 mb-0">
                  <li className="col d-flex align-items-center gap-2">
                    <span className="icon-box icon-box-sm tint-brand border-current" aria-hidden="true">
                      <i data-lucide="activity" />
                    </span>
                    <span className="min-w-0">
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        Busiest window
                      </span>
                      {" "}
                      <span className="d-block fs-6 fw-semibold text-title">
                        <bdi>
                          10:00 – 12:00
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        <bdi>
                          421 events
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </li>
                  <li className="col d-flex align-items-center gap-2">
                    <span className="icon-box icon-box-sm tint-slate border-current" aria-hidden="true">
                      <i data-lucide="moon" />
                    </span>
                    <span className="min-w-0">
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        Quietest window
                      </span>
                      {" "}
                      <span className="d-block fs-6 fw-semibold text-title">
                        <bdi>
                          04:00 – 06:00
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        <bdi>
                          6 events
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </li>
                </ul>
                <div className="d-flex align-items-center justify-content-between gap-2 border-t-soft pt-3 mt-3">
                  <span className="min-w-0">
                    {" "}
                    <span className="d-block fs-xs text-muted-2 text-truncate">
                      Logging activity right now
                    </span>
                    {" "}
                    <span className="d-block fs-6 fw-semibold text-title">
                      <bdi>
                        18 agents on shift
                      </bdi>
                    </span>
                    {" "}
                  </span>
                  <span className="avatar-stack flex-shrink-0">
                    <span className="avatar avatar-sm bg-grad-1" aria-hidden="true">
                      PN
                    </span>
                    <span className="avatar avatar-sm bg-grad-3" aria-hidden="true">
                      AS
                    </span>
                    <span className="avatar avatar-sm bg-grad-5" aria-hidden="true">
                      HS
                    </span>
                    <span className="avatar avatar-sm bg-grad-2" aria-hidden="true">
                      EV
                    </span>
                    <span className="avatar avatar-sm bg-muted text-title" aria-hidden="true">
                      <bdi>
                        +14
                      </bdi>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ========== FOOTER ========== */}
    </AppShell>
  );
}

/* Generated from the Vionex HTML theme by scripts/convert-html.mjs */
import AppShell from "@/components/AppShell";

export const metadata = {
  title: "Vionex — Booking Dashboard",
  description: "Vionex enterprise admin dashboard — booking operations overview built with Bootstrap 5, CSS variables and a scalable design system.",
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
          Booking Dashboard
        </h1>
        <nav aria-label="breadcrumb" className="d-none d-md-block">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="/">
                Dashboard
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Booking Dashboard
            </li>
          </ol>
        </nav>
      </div>
      {/* ===== Dashboard sections go here ===== */}
      {/* ===== Booking overview ===== */}
      <section className="mb-4" aria-labelledby="bkg-overview-title">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
          <div className="min-w-0">
            <h2 id="bkg-overview-title" className="fs-4 fw-bold text-title mb-1">
              Booking Overview
            </h2>
            <p className="fs-md text-body-2 mb-0">
              Every reservation taken across web, mobile and the front desk this billing period.
            </p>
          </div>
          <div className="d-flex flex-wrap align-items-center gap-2">
            <span className="badge-soft tint-brand border-current d-inline-flex align-self-stretch align-items-center gap-2 px-3">
              {" "}
              <i className="icon-12" data-lucide="calendar-range" aria-hidden="true" />
              {" "}
              <bdi>
                1 – 31 August 2026
              </bdi>
              {" "}
            </span>
            <button
              type="button"
              className="btn btn-accent d-inline-flex flex-nowrap align-items-center justify-content-center gap-2 text-nowrap"
            >
              <i className="icon-20" data-lucide="plus" aria-hidden="true" />
              New Booking
            </button>
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-outline-soft btn-18 rounded-circle"
                id="bkgOverviewMenu"
                data-bs-toggle="dropdown"
                data-bs-offset="0,8"
                aria-expanded="false"
                aria-label="Overview options"
              >
                <i data-lucide="ellipsis-vertical" />
              </button>
              {" "}
              <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="bkgOverviewMenu">
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="refresh-cw" />
                    Refresh data
                  </button>
                </li>
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="calendar-days" />
                    Open schedule
                  </button>
                </li>
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="download" />
                    Export overview
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row g-3">
          {/* Total bookings spotlight */}
          <div className="col-12 col-xxl-4">
            <div className="on-dark bg-grad-theme rounded-4 h-100 d-flex flex-column p-3 p-md-4">
              <div className="row g-3 g-md-4 flex-grow-1">
                <div className="col-12 col-md-6 col-xxl-12 d-flex flex-column gap-3">
                  <div className="d-flex align-items-center gap-3">
                    <span className="icon-box icon-box-lg bg-soft border-theme" aria-hidden="true">
                      <i data-lucide="calendar-check" />
                    </span>
                    <span className="min-w-0">
                      {" "}
                      <span className="d-block fs-xs fw-semibold text-uppercase text-primary">
                        Total bookings
                      </span>
                      {" "}
                      <span className="d-block fs-md text-title text-truncate">
                        <bdi>
                          1 – 31 August 2026
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </div>
                  <div>
                    <p className="display-3 fw-bold text-title lh-1 mb-2">
                      <bdi>
                        12,486
                      </bdi>
                    </p>
                    <div className="d-flex flex-wrap align-items-center gap-2">
                      <span className="badge-soft tint-success border-current d-inline-flex align-items-center gap-1">
                        {" "}
                        <i className="icon-12 flip-rtl" data-lucide="arrow-up-right" aria-hidden="true" />
                        <bdi>
                          +8.4%
                        </bdi>
                        {" "}
                      </span>
                      <span className="fs-md text-primary">
                        vs last month
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-xxl-12 d-flex flex-column gap-3">
                  <div className="divider-fade d-block d-md-none d-xxl-block" aria-hidden="true" />
                  <div>
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
                      <span className="fs-md fw-medium text-title">
                        Monthly target
                      </span>
                      <span className="fs-md text-primary">
                        <bdi>
                          12,486 of 14,000
                        </bdi>
                      </span>
                    </div>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="Monthly booking target progress"
                      aria-valuenow="89"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-cyan" style={{ width: "89%" }} />
                    </div>
                    <p className="fs-xs text-primary mt-2 mb-0">
                      <bdi>
                        1,514 bookings to go · 5 days left in this period
                      </bdi>
                    </p>
                  </div>
                  <div className="bg-soft border-theme rounded-4 d-flex align-items-center gap-3 p-3 mt-auto">
                    <div className="position-relative flex-shrink-0">
                      <div id="bkgCapacityRing" />
                      <span className="chart-center fs-md fw-semibold text-title">
                        <span className="visually-hidden">
                          Capacity used:
                        </span>
                        <bdi>
                          86%
                        </bdi>
                      </span>
                    </div>
                    <span className="min-w-0">
                      {" "}
                      <span className="d-block fs-lg fw-semibold text-title text-truncate">
                        Capacity used
                      </span>
                      {" "}
                      <span className="d-block fs-sm text-primary text-truncate">
                        <bdi>
                          1,204 of 1,400 slots
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Status mix & key summary */}
          <div className="col-12 col-xxl-8">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <div className="min-w-0">
                    <h3 className="fs-5 fw-bold text-title mb-1">
                      Booking Status
                    </h3>
                    <p className="fs-md text-body-2 mb-0">
                      How this period’s reservations are resolving
                    </p>
                  </div>
                  <div
                    className="nav nav-pills seg-toggle flex-nowrap gap-1 p-1 rounded-pill bg-soft"
                    role="group"
                    aria-label="Status time range"
                  >
                    <button type="button" className="nav-link fw-semibold" aria-pressed="false">
                      7D
                    </button>
                    <button type="button" className="nav-link active fw-semibold" aria-pressed="true">
                      30D
                    </button>
                    <button type="button" className="nav-link fw-semibold" aria-pressed="false">
                      90D
                    </button>
                  </div>
                </div>
                <div className="my-auto">
                  <div className="row g-3 g-xl-4 align-items-center">
                    <div className="col-12 col-md-5 col-xl-4">
                      <div id="bkgStatusMixChart" className="chart-area" />
                    </div>
                    <div className="col-12 col-md-7 col-xl-8">
                      <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                        <li>
                          <div className="d-flex align-items-center gap-2 mb-2">
                            <span className="legend-dot bg-cat-emerald" aria-hidden="true" />
                            <span className="flex-grow-1 min-w-0 fs-md fw-medium text-title text-truncate">
                              Confirmed
                            </span>
                            <span className="fs-md fw-semibold text-title">
                              <bdi>
                                9,764
                              </bdi>
                            </span>
                            <span className="badge-soft tint-emerald flex-shrink-0">
                              <bdi>
                                78.2%
                              </bdi>
                            </span>
                          </div>
                          <div
                            className="progress progress-sm"
                            role="progressbar"
                            aria-label="Confirmed share of all bookings"
                            aria-valuenow="78"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <div className="progress-bar bg-cat-emerald" style={{ width: "78.2%" }} />
                          </div>
                        </li>
                        <li>
                          <div className="d-flex align-items-center gap-2 mb-2">
                            <span className="legend-dot bg-cat-amber" aria-hidden="true" />
                            <span className="flex-grow-1 min-w-0 fs-md fw-medium text-title text-truncate">
                              Pending
                            </span>
                            <span className="fs-md fw-semibold text-title">
                              <bdi>
                                1,842
                              </bdi>
                            </span>
                            <span className="badge-soft tint-amber flex-shrink-0">
                              <bdi>
                                14.8%
                              </bdi>
                            </span>
                          </div>
                          <div
                            className="progress progress-sm"
                            role="progressbar"
                            aria-label="Pending share of all bookings"
                            aria-valuenow="15"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <div className="progress-bar bg-cat-amber" style={{ width: "14.8%" }} />
                          </div>
                        </li>
                        <li>
                          <div className="d-flex align-items-center gap-2 mb-2">
                            <span className="legend-dot bg-cat-rose" aria-hidden="true" />
                            <span className="flex-grow-1 min-w-0 fs-md fw-medium text-title text-truncate">
                              Cancelled
                            </span>
                            <span className="fs-md fw-semibold text-title">
                              <bdi>
                                880
                              </bdi>
                            </span>
                            <span className="badge-soft tint-rose flex-shrink-0">
                              <bdi>
                                7.0%
                              </bdi>
                            </span>
                          </div>
                          <div
                            className="progress progress-sm"
                            role="progressbar"
                            aria-label="Cancelled share of all bookings"
                            aria-valuenow="7"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <div className="progress-bar bg-cat-rose" style={{ width: "7%" }} />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <ul className="list-unstyled row row-cols-1 row-cols-sm-3 g-3 border-t-soft pt-3 mt-3 mb-0">
                  <li className="col d-flex align-items-center gap-2">
                    <span className="icon-box icon-box-sm tint-blue border-current" aria-hidden="true">
                      <i data-lucide="timer" />
                    </span>
                    <span className="min-w-0">
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        Average lead time
                      </span>
                      {" "}
                      <span className="d-block fs-6 fw-semibold text-title">
                        <bdi>
                          6.2 days
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </li>
                  <li className="col d-flex align-items-center gap-2">
                    <span className="icon-box icon-box-sm tint-rose border-current" aria-hidden="true">
                      <i data-lucide="user-round-x" />
                    </span>
                    <span className="min-w-0">
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        No-show rate
                      </span>
                      {" "}
                      <span className="d-block fs-6 fw-semibold text-title">
                        <bdi>
                          2.4%
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </li>
                  <li className="col d-flex align-items-center gap-2">
                    <span className="icon-box icon-box-sm tint-emerald border-current" aria-hidden="true">
                      <i data-lucide="wallet" />
                    </span>
                    <span className="min-w-0">
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        Average booking value
                      </span>
                      {" "}
                      <span className="d-block fs-6 fw-semibold text-title">
                        <bdi>
                          $184
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Status volume & momentum */}
          <div className="col-12">
            <ul className="list-unstyled row row-cols-1 row-cols-md-3 g-3 mb-0">
              <li className="col">
                <div className="card overflow-hidden h-100">
                  <div className="card-body d-flex flex-column gap-3 pb-0">
                    <div className="d-flex align-items-center gap-2 min-w-0">
                      <span className="icon-box icon-box-sm tint-emerald border-current" aria-hidden="true">
                        <i data-lucide="calendar-check" />
                      </span>
                      <div className="min-w-0">
                        <h3 className="fs-6 fw-semibold text-title text-truncate mb-0">
                          Confirmed
                        </h3>
                        <span className="d-block fs-xs text-muted-2 text-truncate">
                          {"Paid & scheduled"}
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="fs-2 fw-bold text-title lh-1 mb-2">
                        <bdi>
                          9,764
                        </bdi>
                      </p>
                      <p className="d-flex align-items-center gap-1 fs-md text-body-2 mb-0">
                        <i className="icon-16 flip-rtl text-cat-emerald" data-lucide="trending-up" aria-hidden="true" />
                        <bdi>
                          +6.2% vs last month
                        </bdi>
                      </p>
                    </div>
                  </div>
                  <div id="bkgConfirmedSpark" className="chart-area mt-3" />
                </div>
              </li>
              <li className="col">
                <div className="card overflow-hidden h-100">
                  <div className="card-body d-flex flex-column gap-3 pb-0">
                    <div className="d-flex align-items-center gap-2 min-w-0">
                      <span className="icon-box icon-box-sm tint-amber border-current" aria-hidden="true">
                        <i data-lucide="hourglass" />
                      </span>
                      <div className="min-w-0">
                        <h3 className="fs-6 fw-semibold text-title text-truncate mb-0">
                          Pending
                        </h3>
                        <span className="d-block fs-xs text-muted-2 text-truncate">
                          Awaiting confirmation
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="fs-2 fw-bold text-title lh-1 mb-2">
                        <bdi>
                          1,842
                        </bdi>
                      </p>
                      <p className="d-flex align-items-center gap-1 fs-md text-body-2 mb-0">
                        <i className="icon-16 text-cat-amber" data-lucide="clock" aria-hidden="true" />
                        <bdi>
                          318 past the 24h window
                        </bdi>
                      </p>
                    </div>
                  </div>
                  <div id="bkgPendingSpark" className="chart-area mt-3" />
                </div>
              </li>
              <li className="col">
                <div className="card overflow-hidden h-100">
                  <div className="card-body d-flex flex-column gap-3 pb-0">
                    <div className="d-flex align-items-center gap-2 min-w-0">
                      <span className="icon-box icon-box-sm tint-rose border-current" aria-hidden="true">
                        <i data-lucide="calendar-x" />
                      </span>
                      <div className="min-w-0">
                        <h3 className="fs-6 fw-semibold text-title text-truncate mb-0">
                          Cancelled
                        </h3>
                        <span className="d-block fs-xs text-muted-2 text-truncate">
                          Refunded or released
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="fs-2 fw-bold text-title lh-1 mb-2">
                        <bdi>
                          880
                        </bdi>
                      </p>
                      <p className="d-flex align-items-center gap-1 fs-md text-body-2 mb-0">
                        <i
                          className="icon-16 flip-rtl text-cat-emerald"
                          data-lucide="trending-down"
                          aria-hidden="true"
                        />
                        <bdi>
                          -3.6% vs last month
                        </bdi>
                      </p>
                    </div>
                  </div>
                  <div id="bkgCancelledSpark" className="chart-area mt-3" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* ===== Booking trends ===== */}
      <section className="mb-4" aria-labelledby="bkg-trends-title">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
          <div className="min-w-0">
            <h2 id="bkg-trends-title" className="fs-4 fw-bold text-title mb-1">
              Booking Trends
            </h2>
            <p className="fs-md text-body-2 mb-0">
              Volume and earnings across the last twelve months of trading.
            </p>
          </div>
          <div
            className="nav nav-pills seg-toggle flex-nowrap gap-1 p-1 rounded-pill bg-soft"
            role="group"
            aria-label="Trend time range"
          >
            <button type="button" className="nav-link fw-semibold" aria-pressed="false">
              90D
            </button>
            <button type="button" className="nav-link fw-semibold" aria-pressed="false">
              6M
            </button>
            <button type="button" className="nav-link active fw-semibold" aria-pressed="true">
              12M
            </button>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
              <div className="min-w-0">
                <h3 className="fs-5 fw-bold text-title mb-1">
                  {"Bookings & Revenue"}
                </h3>
                <p className="fs-md text-body-2 mb-0">
                  Monthly volume against the earnings it produced
                </p>
              </div>
              <ul className="list-unstyled d-flex flex-wrap align-items-center gap-3 fs-md mb-0">
                <li className="d-inline-flex align-items-center gap-2">
                  <span className="legend-dot bg-cat-violet" aria-hidden="true" />
                  <span className="text-body-2">
                    Bookings
                  </span>
                </li>
                <li className="d-inline-flex align-items-center gap-2">
                  <span className="legend-dot bg-cat-cyan" aria-hidden="true" />
                  <span className="text-body-2">
                    Revenue
                  </span>
                </li>
              </ul>
            </div>
            <div className="row g-3 g-xl-4">
              <div className="col-12 col-xl-3">
                <ul className="list-unstyled row row-cols-1 row-cols-sm-3 row-cols-xl-1 g-3 h-100 mb-0">
                  <li className="col">
                    <div className="bg-soft border-soft rounded-3 h-100 p-3">
                      <span className="d-flex align-items-center gap-2 mb-2">
                        <span className="icon-box icon-box-sm tint-violet border-current" aria-hidden="true">
                          <i data-lucide="calendar-range" />
                        </span>
                        <span className="min-w-0 fs-md text-body-2 text-truncate">
                          Total bookings
                        </span>
                      </span>
                      <p className="fs-4 fw-bold text-title lh-1 mb-2">
                        <bdi>
                          125,466
                        </bdi>
                      </p>
                      <p className="d-flex flex-wrap align-items-center gap-1 fs-md mb-0">
                        <i className="icon-16 flip-rtl text-cat-emerald" data-lucide="trending-up" aria-hidden="true" />
                        <span className="fw-semibold text-cat-emerald">
                          <bdi>
                            +12.8%
                          </bdi>
                        </span>
                        <span className="text-muted-2">
                          vs last year
                        </span>
                      </p>
                    </div>
                  </li>
                  <li className="col">
                    <div className="bg-soft border-soft rounded-3 h-100 p-3">
                      <span className="d-flex align-items-center gap-2 mb-2">
                        <span className="icon-box icon-box-sm tint-cyan border-current" aria-hidden="true">
                          <i data-lucide="banknote" />
                        </span>
                        <span className="min-w-0 fs-md text-body-2 text-truncate">
                          Total revenue
                        </span>
                      </span>
                      <p className="fs-4 fw-bold text-title lh-1 mb-2">
                        <bdi>
                          $23.33M
                        </bdi>
                      </p>
                      <p className="d-flex flex-wrap align-items-center gap-1 fs-md mb-0">
                        <i className="icon-16 flip-rtl text-cat-emerald" data-lucide="trending-up" aria-hidden="true" />
                        <span className="fw-semibold text-cat-emerald">
                          <bdi>
                            +16.4%
                          </bdi>
                        </span>
                        <span className="text-muted-2">
                          vs last year
                        </span>
                      </p>
                    </div>
                  </li>
                  <li className="col">
                    <div className="bg-soft border-soft rounded-3 h-100 p-3">
                      <span className="d-flex align-items-center gap-2 mb-2">
                        <span className="icon-box icon-box-sm tint-amber border-current" aria-hidden="true">
                          <i data-lucide="receipt" />
                        </span>
                        <span className="min-w-0 fs-md text-body-2 text-truncate">
                          Avg booking value
                        </span>
                      </span>
                      <p className="fs-4 fw-bold text-title lh-1 mb-2">
                        <bdi>
                          $186
                        </bdi>
                      </p>
                      <p className="d-flex flex-wrap align-items-center gap-1 fs-md mb-0">
                        <i className="icon-16 flip-rtl text-cat-emerald" data-lucide="trending-up" aria-hidden="true" />
                        <span className="fw-semibold text-cat-emerald">
                          <bdi>
                            +3.2%
                          </bdi>
                        </span>
                        <span className="text-muted-2">
                          vs last year
                        </span>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-xl-9">
                <div id="bkgTrendChart" className="chart-area" />
              </div>
            </div>
            <ul className="list-unstyled row row-cols-1 row-cols-md-2 row-cols-xl-3 g-2 border-t-soft pt-3 mt-3 mb-0">
              <li className="col d-flex align-items-center gap-2 fs-md">
                <i className="icon-16 flip-rtl text-cat-violet" data-lucide="trending-up" aria-hidden="true" />
                <span className="text-body-2 text-nowrap">
                  Peak volume
                </span>
                <span className="min-w-0 fw-semibold text-title text-truncate">
                  <bdi>
                    August · 12,486
                  </bdi>
                </span>
              </li>
              <li className="col d-flex align-items-center gap-2 fs-md">
                <i className="icon-16 text-cat-cyan" data-lucide="banknote" aria-hidden="true" />
                <span className="text-body-2 text-nowrap">
                  Peak revenue
                </span>
                <span className="min-w-0 fw-semibold text-title text-truncate">
                  <bdi>
                    December · $2.43M
                  </bdi>
                </span>
              </li>
              <li className="col d-flex align-items-center gap-2 fs-md">
                <i className="icon-16 flip-rtl text-cat-rose" data-lucide="trending-down" aria-hidden="true" />
                <span className="text-body-2 text-nowrap">
                  Quietest
                </span>
                <span className="min-w-0 fw-semibold text-title text-truncate">
                  <bdi>
                    February · 7,860
                  </bdi>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* ===== Today's schedule ===== */}
      <section className="mb-4" aria-labelledby="bkg-schedule-title">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
          <div className="min-w-0">
            <h2 id="bkg-schedule-title" className="fs-4 fw-bold text-title mb-1">
              Today’s Schedule
            </h2>
            <p className="fs-md text-body-2 mb-0">
              Five appointments still to come out of eighteen on the book.
            </p>
          </div>
          <div className="d-flex flex-wrap align-items-center gap-2">
            <div className="d-flex align-items-center gap-2">
              <button type="button" className="btn btn-outline-soft btn-18 rounded-circle" aria-label="Previous day">
                <i className="flip-rtl" data-lucide="chevron-left" />
              </button>
              <span className="badge-soft tint-brand border-current text-nowrap px-3">
                <bdi>
                  Today · 26 Aug
                </bdi>
              </span>
              <button type="button" className="btn btn-outline-soft btn-18 rounded-circle" aria-label="Next day">
                <i className="flip-rtl" data-lucide="chevron-right" />
              </button>
            </div>
            <a
              href="/calendar"
              className="btn btn-primary-soft d-inline-flex flex-nowrap align-items-center justify-content-center gap-2 text-nowrap"
            >
              {" "}
              <i className="icon-20" data-lucide="calendar-days" aria-hidden="true" />
              Open calendar
              {" "}
            </a>
          </div>
        </div>
        <div className="row g-3">
          {/* Upcoming appointments timeline */}
          <div className="col-12 col-xxl-8">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <div className="min-w-0">
                    <h3 className="fs-5 fw-bold text-title mb-1">
                      Upcoming Appointments
                    </h3>
                    <p className="fs-md text-body-2 mb-0">
                      Ordered by start time from the current slot
                    </p>
                  </div>
                  <span className="badge-soft tint-emerald border-current d-inline-flex align-items-center gap-2">
                    {" "}
                    <span className="legend-dot legend-dot-sm bg-cat-emerald" aria-hidden="true" />
                    {" "}
                    <bdi>
                      Next in 10 min
                    </bdi>
                    {" "}
                  </span>
                </div>
                <ol className="rail-list list-unstyled d-flex flex-column mb-0">
                  <li className="d-flex align-items-center gap-3 py-2">
                    <span className="rail-dot bg-cat-cyan" aria-hidden="true" />
                    <span className="tint-brand border-current flex-grow-1 min-w-0 d-flex align-items-center gap-2 gap-sm-3 rounded-3 px-2 px-sm-3 py-2">
                      <span className="text-center flex-shrink-0">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-title">
                          <bdi>
                            10:15
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2">
                          <bdi>
                            45 min
                          </bdi>
                        </span>
                        {" "}
                      </span>
                      <span className="avatar avatar-sm flex-shrink-0">
                        <img src="/assets/images/avatar-1.png" width="34" height="34" alt="" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-title text-truncate">
                          Amelia Brooks
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-truncate">
                          <bdi>
                            Deep Tissue Massage · Sofia Reyes
                          </bdi>
                        </span>
                        {" "}
                      </span>
                      <span className="badge-soft bg-plain text-brand border-current flex-shrink-0 d-none d-md-inline-block">
                        Next up
                      </span>
                      <button type="button" className="btn btn-accent btn-sm flex-shrink-0 text-nowrap">
                        Check in
                      </button>
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3 py-2">
                    <span className="rail-dot bg-cat-emerald" aria-hidden="true" />
                    <span className="flex-grow-1 min-w-0 d-flex align-items-center gap-2 gap-sm-3 rounded-3 px-2 px-sm-3 py-2">
                      <span className="text-center flex-shrink-0">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-title">
                          <bdi>
                            11:00
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2">
                          <bdi>
                            60 min
                          </bdi>
                        </span>
                        {" "}
                      </span>
                      <span className="avatar avatar-sm flex-shrink-0">
                        <img src="/assets/images/avatar-2.png" width="34" height="34" alt="" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-title text-truncate">
                          Marcus Feld
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-truncate">
                          <bdi>
                            {"Hair Colour & Style · Priya Nair"}
                          </bdi>
                        </span>
                        {" "}
                      </span>
                      <span className="badge-soft tint-emerald flex-shrink-0 d-none d-md-inline-block">
                        Confirmed
                      </span>
                      <button
                        type="button"
                        className="btn btn-outline-soft btn-18 rounded-circle flex-shrink-0"
                        aria-label="Open booking for Marcus Feld"
                      >
                        <i className="flip-rtl" data-lucide="chevron-right" />
                      </button>
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3 py-2">
                    <span className="rail-dot bg-cat-emerald" aria-hidden="true" />
                    <span className="flex-grow-1 min-w-0 d-flex align-items-center gap-2 gap-sm-3 rounded-3 px-2 px-sm-3 py-2">
                      <span className="text-center flex-shrink-0">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-title">
                          <bdi>
                            11:30
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2">
                          <bdi>
                            30 min
                          </bdi>
                        </span>
                        {" "}
                      </span>
                      <span className="avatar avatar-sm flex-shrink-0">
                        <img src="/assets/images/avatar-3.png" width="34" height="34" alt="" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-title text-truncate">
                          Dana Okafor
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-truncate">
                          <bdi>
                            Express Manicure · Leah Kim
                          </bdi>
                        </span>
                        {" "}
                      </span>
                      <span className="badge-soft tint-emerald flex-shrink-0 d-none d-md-inline-block">
                        Confirmed
                      </span>
                      <button
                        type="button"
                        className="btn btn-outline-soft btn-18 rounded-circle flex-shrink-0"
                        aria-label="Open booking for Dana Okafor"
                      >
                        <i className="flip-rtl" data-lucide="chevron-right" />
                      </button>
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3 py-2">
                    <span className="rail-dot bg-cat-amber" aria-hidden="true" />
                    <span className="flex-grow-1 min-w-0 d-flex align-items-center gap-2 gap-sm-3 rounded-3 px-2 px-sm-3 py-2">
                      <span className="text-center flex-shrink-0">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-title">
                          <bdi>
                            12:15
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2">
                          <bdi>
                            90 min
                          </bdi>
                        </span>
                        {" "}
                      </span>
                      <span className="avatar avatar-sm flex-shrink-0">
                        <img src="/assets/images/avatar-4.png" width="34" height="34" alt="" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-title text-truncate">
                          Theo Almeida
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-truncate">
                          <bdi>
                            Couples Spa Package · Deposit due
                          </bdi>
                        </span>
                        {" "}
                      </span>
                      <span className="badge-soft tint-amber flex-shrink-0 d-none d-md-inline-block">
                        Pending
                      </span>
                      <button
                        type="button"
                        className="btn btn-outline-soft btn-18 rounded-circle flex-shrink-0"
                        aria-label="Open booking for Theo Almeida"
                      >
                        <i className="flip-rtl" data-lucide="chevron-right" />
                      </button>
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3 py-2">
                    <span className="rail-dot bg-cat-emerald" aria-hidden="true" />
                    <span className="flex-grow-1 min-w-0 d-flex align-items-center gap-2 gap-sm-3 rounded-3 px-2 px-sm-3 py-2">
                      <span className="text-center flex-shrink-0">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-title">
                          <bdi>
                            14:00
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2">
                          <bdi>
                            45 min
                          </bdi>
                        </span>
                        {" "}
                      </span>
                      <span className="avatar avatar-sm flex-shrink-0">
                        <img src="/assets/images/avatar-2.png" width="34" height="34" alt="" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-title text-truncate">
                          Nina Kovač
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-truncate">
                          <bdi>
                            Facial Rejuvenation · Priya Nair
                          </bdi>
                        </span>
                        {" "}
                      </span>
                      <span className="badge-soft tint-emerald flex-shrink-0 d-none d-md-inline-block">
                        Confirmed
                      </span>
                      <button
                        type="button"
                        className="btn btn-outline-soft btn-18 rounded-circle flex-shrink-0"
                        aria-label="Open booking for Nina Kovač"
                      >
                        <i className="flip-rtl" data-lucide="chevron-right" />
                      </button>
                    </span>
                  </li>
                </ol>
                <a
                  href="/calendar"
                  className="d-inline-flex align-items-center justify-content-center gap-2 fs-md fw-medium text-brand border-t-soft pt-3 mt-3"
                >
                  <span>
                    View all
                    {" "}
                    <bdi>
                      18 bookings
                    </bdi>
                    {" "}
                    for today
                  </span>
                  <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
          {/* Hour-by-hour load */}
          <div className="col-12 col-xxl-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    Day Load
                  </h3>
                  <span className="badge-soft tint-brand">
                    <bdi>
                      09:00 – 18:00
                    </bdi>
                  </span>
                </div>
                <div className="my-auto">
                  <div id="bkgDayLoadChart" className="chart-area" />
                </div>
                <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                  <li className="d-flex align-items-center gap-2">
                    <span className="icon-box icon-box-sm tint-cyan border-current" aria-hidden="true">
                      <i data-lucide="calendar-check" />
                    </span>
                    <span className="flex-grow-1 min-w-0 fs-md text-body-2 text-truncate">
                      Slots booked
                    </span>
                    <span className="fs-md fw-semibold text-title">
                      <bdi>
                        18 of 24
                      </bdi>
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <span className="icon-box icon-box-sm tint-emerald border-current" aria-hidden="true">
                      <i data-lucide="calendar-plus" />
                    </span>
                    <span className="flex-grow-1 min-w-0 fs-md text-body-2 text-truncate">
                      Still bookable
                    </span>
                    <span className="fs-md fw-semibold text-title">
                      <bdi>
                        6 slots
                      </bdi>
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <span className="icon-box icon-box-sm tint-amber border-current" aria-hidden="true">
                      <i data-lucide="hourglass" />
                    </span>
                    <span className="flex-grow-1 min-w-0 fs-md text-body-2 text-truncate">
                      Quietest window
                    </span>
                    <span className="fs-md fw-semibold text-title">
                      <bdi>
                        13:00 – 15:00
                      </bdi>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Recent bookings ===== */}
      <section className="mb-4" aria-labelledby="bkg-recent-title">
        <h2 id="bkg-recent-title" className="visually-hidden">
          Recent bookings
        </h2>
        <div className="card">
          <div className="card-body">
            <div className="row g-3 align-items-center mb-3">
              <div className="col-12 col-xl">
                <h3 className="fs-5 fw-bold text-title mb-1">
                  Recent Bookings
                </h3>
                <p className="fs-md text-body-2 mb-0">
                  Every reservation taken in the last 24 hours, newest first
                </p>
              </div>
              <div className="col-12 col-sm">
                <label htmlFor="bkgBookingSearch" className="visually-hidden">
                  Search bookings
                </label>
                <div className="field-icon">
                  <i className="icon-18" data-lucide="search" aria-hidden="true" />
                  {" "}
                  <input
                    type="search"
                    className="form-control rounded-pill"
                    id="bkgBookingSearch"
                    name="bookingSearch"
                    placeholder="Search reference, customer or service"
                  />
                </div>
              </div>
              <div className="col-12 col-sm-auto">
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn btn-outline-soft d-inline-flex align-items-center gap-2 w-100"
                    id="bkgSortMenu"
                    data-bs-toggle="dropdown"
                    data-bs-offset="0,8"
                    aria-expanded="false"
                  >
                    <i className="icon-16" data-lucide="arrow-down-wide-narrow" aria-hidden="true" />
                    {" "}
                    <span className="text-nowrap">
                      Newest first
                    </span>
                  </button>
                  {" "}
                  <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="bkgSortMenu">
                    <li>
                      <button type="button" className="dropdown-item">
                        <i data-lucide="arrow-down-wide-narrow" />
                        Newest first
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        <i data-lucide="arrow-up-narrow-wide" />
                        Oldest first
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        <i data-lucide="banknote" />
                        Highest value
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="nav nav-pills seg-toggle d-inline-flex flex-nowrap mw-100 gap-1 p-1 mb-3 rounded-pill bg-soft overflow-x-auto scrollbar-none"
              role="group"
              aria-label="Filter bookings by status"
            >
              <button type="button" className="nav-link active fw-semibold text-nowrap" aria-pressed="true">
                All
                {" "}
                <bdi>
                  412
                </bdi>
              </button>
              <button
                type="button"
                className="nav-link fw-semibold text-nowrap d-inline-flex align-items-center gap-2 flex-shrink-0"
                aria-pressed="false"
              >
                <span className="legend-dot legend-dot-sm bg-cat-emerald" aria-hidden="true" />
                Confirmed
                {" "}
                <bdi>
                  322
                </bdi>
              </button>
              <button
                type="button"
                className="nav-link fw-semibold text-nowrap d-inline-flex align-items-center gap-2 flex-shrink-0"
                aria-pressed="false"
              >
                <span className="legend-dot legend-dot-sm bg-cat-amber" aria-hidden="true" />
                Pending
                {" "}
                <bdi>
                  61
                </bdi>
              </button>
              <button
                type="button"
                className="nav-link fw-semibold text-nowrap d-inline-flex align-items-center gap-2 flex-shrink-0"
                aria-pressed="false"
              >
                <span className="legend-dot legend-dot-sm bg-cat-rose" aria-hidden="true" />
                Cancelled
                {" "}
                <bdi>
                  29
                </bdi>
              </button>
            </div>
            <div className="table-responsive">
              <table className="table table-sm table-striped table-hover align-middle text-nowrap mb-0">
                <caption className="visually-hidden">
                  Bookings taken in the last 24 hours, newest first
                </caption>
                <thead>
                  <tr>
                    <th scope="col">
                      Booking
                    </th>
                    <th scope="col">
                      Customer
                    </th>
                    <th scope="col">
                      Service
                    </th>
                    <th scope="col">
                      Scheduled for
                    </th>
                    <th scope="col">
                      Amount
                    </th>
                    <th scope="col">
                      Status
                    </th>
                    <th scope="col">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" className="fw-normal">
                      <span className="d-block fs-md fw-semibold text-title">
                        <bdi>
                          #BK-24817
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        <bdi>
                          4 min ago
                        </bdi>
                      </span>
                    </th>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-sm bg-grad-1" aria-hidden="true">
                          AB
                        </span>
                        <span className="d-flex flex-column">
                          <span className="fs-md fw-semibold text-title">
                            Amelia Brooks
                          </span>
                          <span className="fs-xs text-muted-2">
                            <bdi>
                              amelia.b@mailbox.com
                            </bdi>
                          </span>
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-block fs-md fw-semibold text-title">
                        Deep Tissue Massage
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        <bdi>
                          45 min · Sofia Reyes
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="d-block fs-md fw-semibold text-title">
                        <bdi>
                          Today
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        <bdi>
                          10:15
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="d-block fs-md fw-semibold text-title">
                        <bdi>
                          $148
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-cat-emerald">
                        Paid
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-emerald">
                        Confirmed
                      </span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <button
                          type="button"
                          className="btn btn-outline-soft btn-18 rounded-circle"
                          data-bs-toggle="dropdown"
                          data-dd-fixed=""
                          data-bs-offset="0,8"
                          aria-expanded="false"
                          aria-label="Actions for booking BK-24817"
                        >
                          <i data-lucide="ellipsis" />
                        </button>
                        {" "}
                        <ul className="dropdown-menu dropdown-menu-end p-2">
                          <li>
                            <button type="button" className="dropdown-item">
                              <i data-lucide="eye" />
                              View booking
                            </button>
                          </li>
                          <li>
                            <button type="button" className="dropdown-item">
                              <i data-lucide="calendar-clock" />
                              Reschedule
                            </button>
                          </li>
                          <li>
                            <button type="button" className="dropdown-item">
                              <i data-lucide="send" />
                              Send reminder
                            </button>
                          </li>
                          <li>
                            <hr className="dropdown-divider my-1" />
                          </li>
                          <li>
                            <button type="button" className="dropdown-item dropdown-item-danger">
                              <i data-lucide="calendar-x" />
                              Cancel booking
                            </button>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="fw-normal">
                      <span className="d-block fs-md fw-semibold text-title">
                        <bdi>
                          #BK-24816
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        <bdi>
                          18 min ago
                        </bdi>
                      </span>
                    </th>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-sm bg-grad-3" aria-hidden="true">
                          OE
                        </span>
                        <span className="d-flex flex-column">
                          <span className="fs-md fw-semibold text-title">
                            Owen Ellis
                          </span>
                          <span className="fs-xs text-muted-2">
                            <bdi>
                              owen.ellis@mailbox.com
                            </bdi>
                          </span>
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-block fs-md fw-semibold text-title">
                        Sports Therapy
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        <bdi>
                          60 min · Marco Silva
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="d-block fs-md fw-semibold text-title">
                        <bdi>
                          Tomorrow
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        <bdi>
                          09:30
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="d-block fs-md fw-semibold text-title">
                        <bdi>
                          $210
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-cat-amber">
                        <bdi>
                          Deposit · $60
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-amber">
                        Pending
                      </span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <button
                          type="button"
                          className="btn btn-outline-soft btn-18 rounded-circle"
                          data-bs-toggle="dropdown"
                          data-dd-fixed=""
                          data-bs-offset="0,8"
                          aria-expanded="false"
                          aria-label="Actions for booking BK-24816"
                        >
                          <i data-lucide="ellipsis" />
                        </button>
                        {" "}
                        <ul className="dropdown-menu dropdown-menu-end p-2">
                          <li>
                            <button type="button" className="dropdown-item">
                              <i data-lucide="eye" />
                              View booking
                            </button>
                          </li>
                          <li>
                            <button type="button" className="dropdown-item">
                              <i data-lucide="calendar-clock" />
                              Reschedule
                            </button>
                          </li>
                          <li>
                            <button type="button" className="dropdown-item">
                              <i data-lucide="send" />
                              Send reminder
                            </button>
                          </li>
                          <li>
                            <hr className="dropdown-divider my-1" />
                          </li>
                          <li>
                            <button type="button" className="dropdown-item dropdown-item-danger">
                              <i data-lucide="calendar-x" />
                              Cancel booking
                            </button>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="fw-normal">
                      <span className="d-block fs-md fw-semibold text-title">
                        <bdi>
                          #BK-24815
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        <bdi>
                          42 min ago
                        </bdi>
                      </span>
                    </th>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-sm bg-grad-5" aria-hidden="true">
                          PR
                        </span>
                        <span className="d-flex flex-column">
                          <span className="fs-md fw-semibold text-title">
                            Priya Raman
                          </span>
                          <span className="fs-xs text-muted-2">
                            <bdi>
                              priya.r@mailbox.com
                            </bdi>
                          </span>
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-block fs-md fw-semibold text-title">
                        {"Hair Colour & Style"}
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        <bdi>
                          90 min · Priya Nair
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="d-block fs-md fw-semibold text-title">
                        <bdi>
                          28 Aug
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        <bdi>
                          14:00
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="d-block fs-md fw-semibold text-title">
                        <bdi>
                          $265
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-cat-emerald">
                        Paid
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-emerald">
                        Confirmed
                      </span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <button
                          type="button"
                          className="btn btn-outline-soft btn-18 rounded-circle"
                          data-bs-toggle="dropdown"
                          data-dd-fixed=""
                          data-bs-offset="0,8"
                          aria-expanded="false"
                          aria-label="Actions for booking BK-24815"
                        >
                          <i data-lucide="ellipsis" />
                        </button>
                        {" "}
                        <ul className="dropdown-menu dropdown-menu-end p-2">
                          <li>
                            <button type="button" className="dropdown-item">
                              <i data-lucide="eye" />
                              View booking
                            </button>
                          </li>
                          <li>
                            <button type="button" className="dropdown-item">
                              <i data-lucide="calendar-clock" />
                              Reschedule
                            </button>
                          </li>
                          <li>
                            <button type="button" className="dropdown-item">
                              <i data-lucide="send" />
                              Send reminder
                            </button>
                          </li>
                          <li>
                            <hr className="dropdown-divider my-1" />
                          </li>
                          <li>
                            <button type="button" className="dropdown-item dropdown-item-danger">
                              <i data-lucide="calendar-x" />
                              Cancel booking
                            </button>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="fw-normal">
                      <span className="d-block fs-md fw-semibold text-title">
                        <bdi>
                          #BK-24814
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        <bdi>
                          1 hr ago
                        </bdi>
                      </span>
                    </th>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-sm bg-grad-2" aria-hidden="true">
                          TA
                        </span>
                        <span className="d-flex flex-column">
                          <span className="fs-md fw-semibold text-title">
                            Theo Almeida
                          </span>
                          <span className="fs-xs text-muted-2">
                            <bdi>
                              theo.a@mailbox.com
                            </bdi>
                          </span>
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-block fs-md fw-semibold text-title">
                        Couples Spa Package
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        <bdi>
                          120 min · Sofia Reyes
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="d-block fs-md fw-semibold text-title">
                        <bdi>
                          Today
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        <bdi>
                          12:15
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="d-block fs-md fw-semibold text-title">
                        <bdi>
                          $420
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-cat-amber">
                        <bdi>
                          Deposit · $120
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-amber">
                        Pending
                      </span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <button
                          type="button"
                          className="btn btn-outline-soft btn-18 rounded-circle"
                          data-bs-toggle="dropdown"
                          data-dd-fixed=""
                          data-bs-offset="0,8"
                          aria-expanded="false"
                          aria-label="Actions for booking BK-24814"
                        >
                          <i data-lucide="ellipsis" />
                        </button>
                        {" "}
                        <ul className="dropdown-menu dropdown-menu-end p-2">
                          <li>
                            <button type="button" className="dropdown-item">
                              <i data-lucide="eye" />
                              View booking
                            </button>
                          </li>
                          <li>
                            <button type="button" className="dropdown-item">
                              <i data-lucide="calendar-clock" />
                              Reschedule
                            </button>
                          </li>
                          <li>
                            <button type="button" className="dropdown-item">
                              <i data-lucide="send" />
                              Send reminder
                            </button>
                          </li>
                          <li>
                            <hr className="dropdown-divider my-1" />
                          </li>
                          <li>
                            <button type="button" className="dropdown-item dropdown-item-danger">
                              <i data-lucide="calendar-x" />
                              Cancel booking
                            </button>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="fw-normal">
                      <span className="d-block fs-md fw-semibold text-title">
                        <bdi>
                          #BK-24813
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        <bdi>
                          2 hr ago
                        </bdi>
                      </span>
                    </th>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-sm bg-grad-6" aria-hidden="true">
                          NK
                        </span>
                        <span className="d-flex flex-column">
                          <span className="fs-md fw-semibold text-title">
                            Nina Kovač
                          </span>
                          <span className="fs-xs text-muted-2">
                            <bdi>
                              nina.k@mailbox.com
                            </bdi>
                          </span>
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-block fs-md fw-semibold text-title">
                        Facial Rejuvenation
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        <bdi>
                          45 min · Priya Nair
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="d-block fs-md fw-semibold text-title">
                        <bdi>
                          Today
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        <bdi>
                          14:00
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="d-block fs-md fw-semibold text-title">
                        <bdi>
                          $165
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-cat-emerald">
                        Paid
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-emerald">
                        Confirmed
                      </span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <button
                          type="button"
                          className="btn btn-outline-soft btn-18 rounded-circle"
                          data-bs-toggle="dropdown"
                          data-dd-fixed=""
                          data-bs-offset="0,8"
                          aria-expanded="false"
                          aria-label="Actions for booking BK-24813"
                        >
                          <i data-lucide="ellipsis" />
                        </button>
                        {" "}
                        <ul className="dropdown-menu dropdown-menu-end p-2">
                          <li>
                            <button type="button" className="dropdown-item">
                              <i data-lucide="eye" />
                              View booking
                            </button>
                          </li>
                          <li>
                            <button type="button" className="dropdown-item">
                              <i data-lucide="calendar-clock" />
                              Reschedule
                            </button>
                          </li>
                          <li>
                            <button type="button" className="dropdown-item">
                              <i data-lucide="send" />
                              Send reminder
                            </button>
                          </li>
                          <li>
                            <hr className="dropdown-divider my-1" />
                          </li>
                          <li>
                            <button type="button" className="dropdown-item dropdown-item-danger">
                              <i data-lucide="calendar-x" />
                              Cancel booking
                            </button>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="fw-normal">
                      <span className="d-block fs-md fw-semibold text-title">
                        <bdi>
                          #BK-24812
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        <bdi>
                          3 hr ago
                        </bdi>
                      </span>
                    </th>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-sm bg-grad-4" aria-hidden="true">
                          JW
                        </span>
                        <span className="d-flex flex-column">
                          <span className="fs-md fw-semibold text-title">
                            Jonas Wexler
                          </span>
                          <span className="fs-xs text-muted-2">
                            <bdi>
                              jonas.w@mailbox.com
                            </bdi>
                          </span>
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-block fs-md fw-semibold text-title">
                        Express Manicure
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        <bdi>
                          30 min · Leah Kim
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="d-block fs-md fw-semibold text-title">
                        <bdi>
                          27 Aug
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        <bdi>
                          11:00
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="d-block fs-md fw-semibold text-title">
                        <bdi>
                          $58
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-cat-rose">
                        Refunded
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-rose">
                        Cancelled
                      </span>
                    </td>
                    <td>
                      <div className="dropdown">
                        <button
                          type="button"
                          className="btn btn-outline-soft btn-18 rounded-circle"
                          data-bs-toggle="dropdown"
                          data-dd-fixed=""
                          data-bs-offset="0,8"
                          aria-expanded="false"
                          aria-label="Actions for booking BK-24812"
                        >
                          <i data-lucide="ellipsis" />
                        </button>
                        {" "}
                        <ul className="dropdown-menu dropdown-menu-end p-2">
                          <li>
                            <button type="button" className="dropdown-item">
                              <i data-lucide="eye" />
                              View booking
                            </button>
                          </li>
                          <li>
                            <button type="button" className="dropdown-item">
                              <i data-lucide="rotate-ccw" />
                              Reinstate
                            </button>
                          </li>
                          <li>
                            <button type="button" className="dropdown-item">
                              <i data-lucide="receipt" />
                              Refund receipt
                            </button>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 pt-3 mt-3 border-t-soft">
              <span className="fs-md text-muted-2">
                <bdi>
                  Showing 1–6 of 412 bookings
                </bdi>
              </span>
              <nav aria-label="Recent bookings pagination">
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
      {/* ===== Availability &amp; upcoming schedule ===== */}
      <section className="mb-4" aria-labelledby="bkg-avail-title">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
          <div className="min-w-0">
            <h2 id="bkg-avail-title" className="fs-4 fw-bold text-title mb-1">
              {"Availability & Upcoming Schedule"}
            </h2>
            <p className="fs-md text-body-2 mb-0">
              Where the capacity is over the next seven days, and what is already in it.
            </p>
          </div>
          <div className="d-flex flex-wrap align-items-center gap-2">
            <span className="badge-soft tint-brand border-current text-nowrap px-3">
              <bdi>
                26 Aug – 1 Sep
              </bdi>
            </span>
            <button
              type="button"
              className="btn btn-outline-soft d-inline-flex flex-nowrap align-items-center justify-content-center gap-2 text-nowrap"
            >
              <i className="icon-16" data-lucide="calendar-off" aria-hidden="true" />
              Block time off
            </button>
          </div>
        </div>
        <div className="row g-3">
          {/* Seven-day availability board */}
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <div className="min-w-0">
                    <h3 className="fs-5 fw-bold text-title mb-1">
                      Availability
                    </h3>
                    <p className="fs-md text-body-2 mb-0">
                      Slots sold against the bookable capacity of each day
                    </p>
                  </div>
                  <ul className="list-unstyled d-flex flex-wrap align-items-center gap-3 fs-md mb-0">
                    <li className="d-inline-flex align-items-center gap-2">
                      <span className="legend-dot legend-dot-sm bg-cat-emerald" aria-hidden="true" />
                      <span className="text-body-2">
                        Open
                      </span>
                    </li>
                    <li className="d-inline-flex align-items-center gap-2">
                      <span className="legend-dot legend-dot-sm bg-cat-amber" aria-hidden="true" />
                      <span className="text-body-2">
                        Limited
                      </span>
                    </li>
                    <li className="d-inline-flex align-items-center gap-2">
                      <span className="legend-dot legend-dot-sm bg-cat-rose" aria-hidden="true" />
                      <span className="text-body-2">
                        Full
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="position-relative" data-scroll-rail="">
                  <ul className="scroll-row list-unstyled d-flex align-items-stretch gap-2 gap-md-3 mb-0 pb-1">
                    <li className="scroll-col scroll-col-xs">
                      <div className="tint-brand border-current rounded-3 h-100 d-flex flex-column gap-2 p-3 text-center">
                        <span className="d-block fs-xs fw-semibold text-uppercase text-title">
                          Today
                        </span>
                        <span className="d-block fs-4 fw-bold text-title lh-1">
                          <bdi>
                            26
                          </bdi>
                        </span>
                        <div
                          className="progress progress-sm"
                          role="progressbar"
                          aria-label="Wednesday 26 August capacity used"
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div className="progress-bar bg-cat-emerald" style={{ width: "75%" }} />
                        </div>
                        <span className="d-block fs-md fw-semibold text-cat-emerald">
                          <bdi>
                            6 open
                          </bdi>
                        </span>
                        <span className="d-block fs-xs text-muted-2">
                          <bdi>
                            18 / 24
                          </bdi>
                        </span>
                      </div>
                    </li>
                    <li className="scroll-col scroll-col-xs">
                      <div className="bg-soft border-soft rounded-3 h-100 d-flex flex-column gap-2 p-3 text-center">
                        <span className="d-block fs-xs fw-semibold text-uppercase text-muted-2">
                          Thu
                        </span>
                        <span className="d-block fs-4 fw-bold text-title lh-1">
                          <bdi>
                            27
                          </bdi>
                        </span>
                        <div
                          className="progress progress-sm"
                          role="progressbar"
                          aria-label="Thursday 27 August capacity used"
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div className="progress-bar bg-cat-emerald" style={{ width: "75%" }} />
                        </div>
                        <span className="d-block fs-md fw-semibold text-cat-emerald">
                          <bdi>
                            7 open
                          </bdi>
                        </span>
                        <span className="d-block fs-xs text-muted-2">
                          <bdi>
                            21 / 28
                          </bdi>
                        </span>
                      </div>
                    </li>
                    <li className="scroll-col scroll-col-xs">
                      <div className="bg-soft border-soft rounded-3 h-100 d-flex flex-column gap-2 p-3 text-center">
                        <span className="d-block fs-xs fw-semibold text-uppercase text-muted-2">
                          Fri
                        </span>
                        <span className="d-block fs-4 fw-bold text-title lh-1">
                          <bdi>
                            28
                          </bdi>
                        </span>
                        <div
                          className="progress progress-sm"
                          role="progressbar"
                          aria-label="Friday 28 August capacity used"
                          aria-valuenow="93"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div className="progress-bar bg-cat-amber" style={{ width: "93%" }} />
                        </div>
                        <span className="d-block fs-md fw-semibold text-cat-amber">
                          <bdi>
                            2 open
                          </bdi>
                        </span>
                        <span className="d-block fs-xs text-muted-2">
                          <bdi>
                            26 / 28
                          </bdi>
                        </span>
                      </div>
                    </li>
                    <li className="scroll-col scroll-col-xs">
                      <div className="bg-soft border-soft rounded-3 h-100 d-flex flex-column gap-2 p-3 text-center">
                        <span className="d-block fs-xs fw-semibold text-uppercase text-muted-2">
                          Sat
                        </span>
                        <span className="d-block fs-4 fw-bold text-title lh-1">
                          <bdi>
                            29
                          </bdi>
                        </span>
                        <div
                          className="progress progress-sm"
                          role="progressbar"
                          aria-label="Saturday 29 August capacity used"
                          aria-valuenow="100"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div className="progress-bar bg-cat-rose" style={{ width: "100%" }} />
                        </div>
                        <span className="d-block fs-md fw-semibold text-cat-rose">
                          Full
                        </span>
                        <span className="d-block fs-xs text-muted-2">
                          <bdi>
                            28 / 28
                          </bdi>
                        </span>
                      </div>
                    </li>
                    <li className="scroll-col scroll-col-xs">
                      <div className="bg-soft border-soft rounded-3 h-100 d-flex flex-column gap-2 p-3 text-center">
                        <span className="d-block fs-xs fw-semibold text-uppercase text-muted-2">
                          Sun
                        </span>
                        <span className="d-block fs-4 fw-bold text-title lh-1">
                          <bdi>
                            30
                          </bdi>
                        </span>
                        <div
                          className="progress progress-sm"
                          role="progressbar"
                          aria-label="Sunday 30 August capacity used"
                          aria-valuenow="56"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div className="progress-bar bg-cat-emerald" style={{ width: "56%" }} />
                        </div>
                        <span className="d-block fs-md fw-semibold text-cat-emerald">
                          <bdi>
                            7 open
                          </bdi>
                        </span>
                        <span className="d-block fs-xs text-muted-2">
                          <bdi>
                            9 / 16
                          </bdi>
                        </span>
                      </div>
                    </li>
                    <li className="scroll-col scroll-col-xs">
                      <div className="bg-soft border-soft rounded-3 h-100 d-flex flex-column gap-2 p-3 text-center">
                        <span className="d-block fs-xs fw-semibold text-uppercase text-muted-2">
                          Mon
                        </span>
                        <span className="d-block fs-4 fw-bold text-title lh-1">
                          <bdi>
                            31
                          </bdi>
                        </span>
                        <div
                          className="progress progress-sm"
                          role="progressbar"
                          aria-label="Monday 31 August capacity used"
                          aria-valuenow="79"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div className="progress-bar bg-cat-amber" style={{ width: "79%" }} />
                        </div>
                        <span className="d-block fs-md fw-semibold text-cat-amber">
                          <bdi>
                            6 open
                          </bdi>
                        </span>
                        <span className="d-block fs-xs text-muted-2">
                          <bdi>
                            22 / 28
                          </bdi>
                        </span>
                      </div>
                    </li>
                    <li className="scroll-col scroll-col-xs">
                      <div className="bg-soft border-soft rounded-3 h-100 d-flex flex-column gap-2 p-3 text-center">
                        <span className="d-block fs-xs fw-semibold text-uppercase text-muted-2">
                          Tue
                        </span>
                        <span className="d-block fs-4 fw-bold text-title lh-1">
                          <bdi>
                            1 Sep
                          </bdi>
                        </span>
                        <div
                          className="progress progress-sm"
                          role="progressbar"
                          aria-label="Tuesday 1 September capacity used"
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div className="progress-bar bg-cat-emerald" style={{ width: "50%" }} />
                        </div>
                        <span className="d-block fs-md fw-semibold text-cat-emerald">
                          <bdi>
                            14 open
                          </bdi>
                        </span>
                        <span className="d-block fs-xs text-muted-2">
                          <bdi>
                            14 / 28
                          </bdi>
                        </span>
                      </div>
                    </li>
                  </ul>
                  {" "}
                  <button
                    type="button"
                    data-scroll-nav="prev"
                    className="scroll-nav btn btn-primary btn-18 rounded-circle position-absolute top-50 start-0 translate-middle-y z-2"
                    aria-label="Previous days"
                  >
                    <i className="flip-rtl" data-lucide="arrow-left" />
                  </button>
                  {" "}
                  <button
                    type="button"
                    data-scroll-nav="next"
                    className="scroll-nav btn btn-primary btn-18 rounded-circle position-absolute top-50 end-0 translate-middle-y z-2"
                    aria-label="Next days"
                  >
                    <i className="flip-rtl" data-lucide="arrow-right" />
                  </button>
                </div>
                <ul className="list-unstyled row row-cols-1 row-cols-sm-3 g-2 border-t-soft pt-3 mt-3 mb-0">
                  <li className="col d-flex align-items-center gap-2 fs-md">
                    <i className="icon-16 text-cat-emerald" data-lucide="calendar-plus" aria-hidden="true" />
                    <span className="text-body-2 text-nowrap">
                      Open slots
                    </span>
                    <span className="min-w-0 fw-semibold text-title text-truncate">
                      <bdi>
                        42 across 7 days
                      </bdi>
                    </span>
                  </li>
                  <li className="col d-flex align-items-center gap-2 fs-md">
                    <i className="icon-16 text-cat-rose" data-lucide="calendar-x" aria-hidden="true" />
                    <span className="text-body-2 text-nowrap">
                      Fully booked
                    </span>
                    <span className="min-w-0 fw-semibold text-title text-truncate">
                      <bdi>
                        1 day · Sat 29
                      </bdi>
                    </span>
                  </li>
                  <li className="col d-flex align-items-center gap-2 fs-md">
                    <i className="icon-16 text-cat-cyan" data-lucide="users-round" aria-hidden="true" />
                    <span className="text-body-2 text-nowrap">
                      On shift
                    </span>
                    <span className="min-w-0 fw-semibold text-title text-truncate">
                      <bdi>
                        6 specialists
                      </bdi>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Next three days of bookings */}
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <div className="min-w-0">
                    <h3 className="fs-5 fw-bold text-title mb-1">
                      Upcoming Schedule
                    </h3>
                    <p className="fs-md text-body-2 mb-0">
                      The first appointments on each of the next three days
                    </p>
                  </div>
                  <a href="/calendar" className="fs-md fw-medium text-brand d-inline-flex align-items-center gap-1">
                    <span>
                      Open week view
                    </span>
                    <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                  </a>
                </div>
                <ul className="list-unstyled row row-cols-1 row-cols-md-3 g-3 mb-0">
                  <li className="col">
                    <div className="bg-soft border-soft rounded-3 h-100 d-flex flex-column p-3">
                      <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-truncate">
                            Tomorrow
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi>
                              Thu 27 August
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <span className="badge-soft tint-emerald flex-shrink-0">
                          <bdi>
                            21 booked
                          </bdi>
                        </span>
                      </div>
                      <ol className="list-unstyled d-flex flex-column gap-3 mb-0">
                        <li className="d-flex align-items-baseline gap-2">
                          <span className="fs-md fw-semibold text-title flex-shrink-0">
                            <bdi>
                              09:30
                            </bdi>
                          </span>
                          <span className="flex-grow-1 min-w-0">
                            {" "}
                            <span className="d-block fs-md text-title text-truncate">
                              Sports Therapy
                            </span>
                            {" "}
                            <span className="d-block fs-xs text-muted-2 text-truncate">
                              <bdi>
                                Owen Ellis · Marco Silva
                              </bdi>
                            </span>
                            {" "}
                          </span>
                        </li>
                        <li className="d-flex align-items-baseline gap-2">
                          <span className="fs-md fw-semibold text-title flex-shrink-0">
                            <bdi>
                              11:00
                            </bdi>
                          </span>
                          <span className="flex-grow-1 min-w-0">
                            {" "}
                            <span className="d-block fs-md text-title text-truncate">
                              Express Manicure
                            </span>
                            {" "}
                            <span className="d-block fs-xs text-muted-2 text-truncate">
                              <bdi>
                                Jonas Wexler · Leah Kim
                              </bdi>
                            </span>
                            {" "}
                          </span>
                        </li>
                        <li className="d-flex align-items-baseline gap-2">
                          <span className="fs-md fw-semibold text-title flex-shrink-0">
                            <bdi>
                              15:30
                            </bdi>
                          </span>
                          <span className="flex-grow-1 min-w-0">
                            {" "}
                            <span className="d-block fs-md text-title text-truncate">
                              Deep Tissue Massage
                            </span>
                            {" "}
                            <span className="d-block fs-xs text-muted-2 text-truncate">
                              <bdi>
                                Clara Nyman · Sofia Reyes
                              </bdi>
                            </span>
                            {" "}
                          </span>
                        </li>
                      </ol>
                      <p className="fs-xs text-muted-2 mt-3 mb-0">
                        <bdi>
                          +18 more that day
                        </bdi>
                      </p>
                    </div>
                  </li>
                  <li className="col">
                    <div className="bg-soft border-soft rounded-3 h-100 d-flex flex-column p-3">
                      <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-truncate">
                            Friday
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi>
                              Fri 28 August
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <span className="badge-soft tint-amber flex-shrink-0">
                          <bdi>
                            26 booked
                          </bdi>
                        </span>
                      </div>
                      <ol className="list-unstyled d-flex flex-column gap-3 mb-0">
                        <li className="d-flex align-items-baseline gap-2">
                          <span className="fs-md fw-semibold text-title flex-shrink-0">
                            <bdi>
                              10:00
                            </bdi>
                          </span>
                          <span className="flex-grow-1 min-w-0">
                            {" "}
                            <span className="d-block fs-md text-title text-truncate">
                              Facial Rejuvenation
                            </span>
                            {" "}
                            <span className="d-block fs-xs text-muted-2 text-truncate">
                              <bdi>
                                Inês Duarte · Priya Nair
                              </bdi>
                            </span>
                            {" "}
                          </span>
                        </li>
                        <li className="d-flex align-items-baseline gap-2">
                          <span className="fs-md fw-semibold text-title flex-shrink-0">
                            <bdi>
                              14:00
                            </bdi>
                          </span>
                          <span className="flex-grow-1 min-w-0">
                            {" "}
                            <span className="d-block fs-md text-title text-truncate">
                              {"Hair Colour & Style"}
                            </span>
                            {" "}
                            <span className="d-block fs-xs text-muted-2 text-truncate">
                              <bdi>
                                Priya Raman · Priya Nair
                              </bdi>
                            </span>
                            {" "}
                          </span>
                        </li>
                        <li className="d-flex align-items-baseline gap-2">
                          <span className="fs-md fw-semibold text-title flex-shrink-0">
                            <bdi>
                              16:45
                            </bdi>
                          </span>
                          <span className="flex-grow-1 min-w-0">
                            {" "}
                            <span className="d-block fs-md text-title text-truncate">
                              Sports Therapy
                            </span>
                            {" "}
                            <span className="d-block fs-xs text-muted-2 text-truncate">
                              <bdi>
                                Ben Adeyemi · Marco Silva
                              </bdi>
                            </span>
                            {" "}
                          </span>
                        </li>
                      </ol>
                      <p className="fs-xs text-muted-2 mt-3 mb-0">
                        <bdi>
                          +23 more that day
                        </bdi>
                      </p>
                    </div>
                  </li>
                  <li className="col">
                    <div className="bg-soft border-soft rounded-3 h-100 d-flex flex-column p-3">
                      <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-truncate">
                            Saturday
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi>
                              Sat 29 August
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <span className="badge-soft tint-rose flex-shrink-0">
                          Full
                        </span>
                      </div>
                      <ol className="list-unstyled d-flex flex-column gap-3 mb-0">
                        <li className="d-flex align-items-baseline gap-2">
                          <span className="fs-md fw-semibold text-title flex-shrink-0">
                            <bdi>
                              09:00
                            </bdi>
                          </span>
                          <span className="flex-grow-1 min-w-0">
                            {" "}
                            <span className="d-block fs-md text-title text-truncate">
                              Couples Spa Package
                            </span>
                            {" "}
                            <span className="d-block fs-xs text-muted-2 text-truncate">
                              <bdi>
                                {"Mia & Tom Weller · Sofia Reyes"}
                              </bdi>
                            </span>
                            {" "}
                          </span>
                        </li>
                        <li className="d-flex align-items-baseline gap-2">
                          <span className="fs-md fw-semibold text-title flex-shrink-0">
                            <bdi>
                              12:30
                            </bdi>
                          </span>
                          <span className="flex-grow-1 min-w-0">
                            {" "}
                            <span className="d-block fs-md text-title text-truncate">
                              Express Manicure
                            </span>
                            {" "}
                            <span className="d-block fs-xs text-muted-2 text-truncate">
                              <bdi>
                                Hana Sato · Leah Kim
                              </bdi>
                            </span>
                            {" "}
                          </span>
                        </li>
                        <li className="d-flex align-items-baseline gap-2">
                          <span className="fs-md fw-semibold text-title flex-shrink-0">
                            <bdi>
                              17:00
                            </bdi>
                          </span>
                          <span className="flex-grow-1 min-w-0">
                            {" "}
                            <span className="d-block fs-md text-title text-truncate">
                              Deep Tissue Massage
                            </span>
                            {" "}
                            <span className="d-block fs-xs text-muted-2 text-truncate">
                              <bdi>
                                Luca Ferri · Sofia Reyes
                              </bdi>
                            </span>
                            {" "}
                          </span>
                        </li>
                      </ol>
                      <p className="fs-xs text-muted-2 mt-3 mb-0">
                        <bdi>
                          +25 more that day
                        </bdi>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Popular services ===== */}
      <section className="mb-4" aria-labelledby="bkg-services-title">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
          <div className="min-w-0">
            <h2 id="bkg-services-title" className="fs-4 fw-bold text-title mb-1">
              Popular Services
            </h2>
            <p className="fs-md text-body-2 mb-0">
              What customers actually booked this period — by service, and by the category it belongs to.
            </p>
          </div>
          <div className="d-flex flex-wrap align-items-center gap-2">
            <div
              className="nav nav-pills seg-toggle flex-nowrap gap-1 p-1 rounded-pill bg-soft"
              role="group"
              aria-label="Rank services by"
            >
              <button type="button" className="nav-link active fw-semibold" aria-pressed="true">
                Bookings
              </button>
              <button type="button" className="nav-link fw-semibold" aria-pressed="false">
                Revenue
              </button>
            </div>
            <a
              href="#"
              className="btn btn-outline-soft d-inline-flex flex-nowrap align-items-center justify-content-center gap-2 text-nowrap"
            >
              {" "}
              <i className="icon-16" data-lucide="layout-list" aria-hidden="true" />
              Service catalogue
              {" "}
            </a>
          </div>
        </div>
        <div className="row g-3">
          {/* Most booked services leaderboard */}
          <div className="col-12 col-xxl-8">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <div className="min-w-0">
                    <h3 className="fs-5 fw-bold text-title mb-1">
                      Most Booked Services
                    </h3>
                    <p className="fs-md text-body-2 mb-0">
                      Ranked by volume, against each service’s share of every booking taken
                    </p>
                  </div>
                  <span className="badge-soft tint-brand border-current text-nowrap">
                    <bdi>
                      Top 5 of 24
                    </bdi>
                  </span>
                </div>
                <ol className="list-unstyled d-flex flex-column justify-content-between flex-grow-1 gap-2 mb-0">
                  <li className="tint-brand border-current d-flex align-items-center gap-2 gap-sm-3 rounded-3 px-2 px-sm-3 py-2">
                    <span className="avatar avatar-xs bg-plain text-title flex-shrink-0">
                      <bdi>
                        1
                      </bdi>
                    </span>
                    <span
                      className="icon-box icon-box-sm tint-violet border-current d-none d-sm-grid"
                      aria-hidden="true"
                    >
                      <i data-lucide="hand-heart" />
                    </span>
                    <div className="flex-grow-1 min-w-0">
                      <div className="d-flex align-items-center gap-2 mb-1">
                        <span className="flex-grow-1 min-w-0 fs-md fw-semibold text-title text-truncate">
                          Deep Tissue Massage
                        </span>
                        <span className="fs-md fw-semibold text-title flex-shrink-0">
                          <bdi>
                            2,148
                          </bdi>
                        </span>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <div
                          className="progress progress-sm flex-grow-1"
                          role="progressbar"
                          aria-label="Deep Tissue Massage share of all bookings"
                          aria-valuenow="17"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div className="progress-bar bg-cat-violet" style={{ width: "17.2%" }} />
                        </div>
                        <span className="fs-xs text-muted-2 flex-shrink-0">
                          <bdi>
                            17.2%
                          </bdi>
                        </span>
                      </div>
                    </div>
                    <div className="d-none d-md-block text-end text-nowrap flex-shrink-0">
                      <span className="d-block fs-md fw-semibold text-title">
                        <bdi>
                          $318K
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        {"Massage & Bodywork"}
                      </span>
                    </div>
                    <span className="badge-soft tint-emerald flex-shrink-0 d-inline-flex align-items-center gap-1">
                      {" "}
                      <i className="icon-12 flip-rtl" data-lucide="trending-up" aria-hidden="true" />
                      <bdi>
                        +18.4%
                      </bdi>
                      {" "}
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2 gap-sm-3 rounded-3 px-2 px-sm-3 py-2">
                    <span className="avatar avatar-xs bg-soft text-title flex-shrink-0">
                      <bdi>
                        2
                      </bdi>
                    </span>
                    <span className="icon-box icon-box-sm tint-cyan border-current d-none d-sm-grid" aria-hidden="true">
                      <i data-lucide="scissors" />
                    </span>
                    <div className="flex-grow-1 min-w-0">
                      <div className="d-flex align-items-center gap-2 mb-1">
                        <span className="flex-grow-1 min-w-0 fs-md fw-semibold text-title text-truncate">
                          {"Hair Colour & Style"}
                        </span>
                        <span className="fs-md fw-semibold text-title flex-shrink-0">
                          <bdi>
                            1,864
                          </bdi>
                        </span>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <div
                          className="progress progress-sm flex-grow-1"
                          role="progressbar"
                          aria-label="Hair Colour and Style share of all bookings"
                          aria-valuenow="15"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div className="progress-bar bg-cat-cyan" style={{ width: "14.9%" }} />
                        </div>
                        <span className="fs-xs text-muted-2 flex-shrink-0">
                          <bdi>
                            14.9%
                          </bdi>
                        </span>
                      </div>
                    </div>
                    <div className="d-none d-md-block text-end text-nowrap flex-shrink-0">
                      <span className="d-block fs-md fw-semibold text-title">
                        <bdi>
                          $494K
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        {"Hair & Styling"}
                      </span>
                    </div>
                    <span className="badge-soft tint-emerald flex-shrink-0 d-inline-flex align-items-center gap-1">
                      {" "}
                      <i className="icon-12 flip-rtl" data-lucide="trending-up" aria-hidden="true" />
                      <bdi>
                        +12.1%
                      </bdi>
                      {" "}
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2 gap-sm-3 rounded-3 px-2 px-sm-3 py-2">
                    <span className="avatar avatar-xs bg-soft text-title flex-shrink-0">
                      <bdi>
                        3
                      </bdi>
                    </span>
                    <span
                      className="icon-box icon-box-sm tint-emerald border-current d-none d-sm-grid"
                      aria-hidden="true"
                    >
                      <i data-lucide="sparkles" />
                    </span>
                    <div className="flex-grow-1 min-w-0">
                      <div className="d-flex align-items-center gap-2 mb-1">
                        <span className="flex-grow-1 min-w-0 fs-md fw-semibold text-title text-truncate">
                          Facial Rejuvenation
                        </span>
                        <span className="fs-md fw-semibold text-title flex-shrink-0">
                          <bdi>
                            1,452
                          </bdi>
                        </span>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <div
                          className="progress progress-sm flex-grow-1"
                          role="progressbar"
                          aria-label="Facial Rejuvenation share of all bookings"
                          aria-valuenow="12"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div className="progress-bar bg-cat-emerald" style={{ width: "11.6%" }} />
                        </div>
                        <span className="fs-xs text-muted-2 flex-shrink-0">
                          <bdi>
                            11.6%
                          </bdi>
                        </span>
                      </div>
                    </div>
                    <div className="d-none d-md-block text-end text-nowrap flex-shrink-0">
                      <span className="d-block fs-md fw-semibold text-title">
                        <bdi>
                          $240K
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        {"Skin & Facial"}
                      </span>
                    </div>
                    <span className="badge-soft tint-emerald flex-shrink-0 d-inline-flex align-items-center gap-1">
                      {" "}
                      <i className="icon-12 flip-rtl" data-lucide="trending-up" aria-hidden="true" />
                      <bdi>
                        +9.6%
                      </bdi>
                      {" "}
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2 gap-sm-3 rounded-3 px-2 px-sm-3 py-2">
                    <span className="avatar avatar-xs bg-soft text-title flex-shrink-0">
                      <bdi>
                        4
                      </bdi>
                    </span>
                    <span
                      className="icon-box icon-box-sm tint-amber border-current d-none d-sm-grid"
                      aria-hidden="true"
                    >
                      <i data-lucide="gem" />
                    </span>
                    <div className="flex-grow-1 min-w-0">
                      <div className="d-flex align-items-center gap-2 mb-1">
                        <span className="flex-grow-1 min-w-0 fs-md fw-semibold text-title text-truncate">
                          Express Manicure
                        </span>
                        <span className="fs-md fw-semibold text-title flex-shrink-0">
                          <bdi>
                            1,208
                          </bdi>
                        </span>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <div
                          className="progress progress-sm flex-grow-1"
                          role="progressbar"
                          aria-label="Express Manicure share of all bookings"
                          aria-valuenow="10"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div className="progress-bar bg-cat-amber" style={{ width: "9.7%" }} />
                        </div>
                        <span className="fs-xs text-muted-2 flex-shrink-0">
                          <bdi>
                            9.7%
                          </bdi>
                        </span>
                      </div>
                    </div>
                    <div className="d-none d-md-block text-end text-nowrap flex-shrink-0">
                      <span className="d-block fs-md fw-semibold text-title">
                        <bdi>
                          $70K
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        {"Nails & Beauty"}
                      </span>
                    </div>
                    <span className="badge-soft tint-rose flex-shrink-0 d-inline-flex align-items-center gap-1">
                      {" "}
                      <i className="icon-12 flip-rtl" data-lucide="trending-down" aria-hidden="true" />
                      <bdi>
                        -2.4%
                      </bdi>
                      {" "}
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2 gap-sm-3 rounded-3 px-2 px-sm-3 py-2">
                    <span className="avatar avatar-xs bg-soft text-title flex-shrink-0">
                      <bdi>
                        5
                      </bdi>
                    </span>
                    <span
                      className="icon-box icon-box-sm tint-violet border-current d-none d-sm-grid"
                      aria-hidden="true"
                    >
                      <i data-lucide="flower-2" />
                    </span>
                    <div className="flex-grow-1 min-w-0">
                      <div className="d-flex align-items-center gap-2 mb-1">
                        <span className="flex-grow-1 min-w-0 fs-md fw-semibold text-title text-truncate">
                          Couples Spa Package
                        </span>
                        <span className="fs-md fw-semibold text-title flex-shrink-0">
                          <bdi>
                            964
                          </bdi>
                        </span>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <div
                          className="progress progress-sm flex-grow-1"
                          role="progressbar"
                          aria-label="Couples Spa Package share of all bookings"
                          aria-valuenow="8"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div className="progress-bar bg-cat-violet" style={{ width: "7.7%" }} />
                        </div>
                        <span className="fs-xs text-muted-2 flex-shrink-0">
                          <bdi>
                            7.7%
                          </bdi>
                        </span>
                      </div>
                    </div>
                    <div className="d-none d-md-block text-end text-nowrap flex-shrink-0">
                      <span className="d-block fs-md fw-semibold text-title">
                        <bdi>
                          $405K
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        {"Massage & Bodywork"}
                      </span>
                    </div>
                    <span className="badge-soft tint-emerald flex-shrink-0 d-inline-flex align-items-center gap-1">
                      {" "}
                      <i className="icon-12 flip-rtl" data-lucide="trending-up" aria-hidden="true" />
                      <bdi>
                        +24.6%
                      </bdi>
                      {" "}
                    </span>
                  </li>
                </ol>
                <ul className="list-unstyled row row-cols-1 row-cols-sm-3 g-3 border-t-soft pt-3 mt-3 mb-0">
                  <li className="col d-flex align-items-center gap-2">
                    <span className="icon-box icon-box-sm tint-amber border-current" aria-hidden="true">
                      <i data-lucide="crown" />
                    </span>
                    <span className="min-w-0">
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        Leading category
                      </span>
                      {" "}
                      <span className="d-block fs-6 fw-semibold text-title text-truncate">
                        {"Massage & Bodywork"}
                      </span>
                      {" "}
                    </span>
                  </li>
                  <li className="col d-flex align-items-center gap-2">
                    <span className="icon-box icon-box-sm tint-emerald border-current" aria-hidden="true">
                      <i data-lucide="flame" />
                    </span>
                    <span className="min-w-0">
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        Fastest riser
                      </span>
                      {" "}
                      <span className="d-block fs-6 fw-semibold text-title text-truncate">
                        <bdi>
                          Couples Spa · +24.6%
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </li>
                  <li className="col d-flex align-items-center gap-2">
                    <span className="icon-box icon-box-sm tint-blue border-current" aria-hidden="true">
                      <i data-lucide="repeat" />
                    </span>
                    <span className="min-w-0">
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        Rebooked within 60 days
                      </span>
                      {" "}
                      <span className="d-block fs-6 fw-semibold text-title text-truncate">
                        <bdi>
                          63.4%
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Category mix */}
          <div className="col-12 col-xxl-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <div className="min-w-0">
                    <h3 className="fs-5 fw-bold text-title mb-1">
                      Category Mix
                    </h3>
                    <p className="fs-md text-body-2 mb-0">
                      How the period’s bookings split across the menu
                    </p>
                  </div>
                  <span className="badge-soft tint-brand border-current text-nowrap">
                    <bdi>
                      5 categories
                    </bdi>
                  </span>
                </div>
                <div className="row g-3 g-xl-4 align-items-center my-auto">
                  <div className="col-12 col-md-6 col-xxl-12">
                    <div className="position-relative">
                      <div id="bkgCategoryMixChart" className="chart-area" />
                      <span className="chart-center">
                        <span className="d-block fs-4 fw-bold text-title lh-1">
                          <bdi>
                            12,486
                          </bdi>
                        </span>
                        <span className="d-block fs-xs fw-medium text-uppercase text-muted-2 mt-1">
                          Bookings
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xxl-12">
                    <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                      <li className="d-flex align-items-center gap-2">
                        <span className="legend-dot bg-cat-violet" aria-hidden="true" />
                        <span className="flex-grow-1 min-w-0 fs-md text-body-2 text-truncate">
                          {"Massage & Bodywork"}
                        </span>
                        <span className="fs-md fw-semibold text-title">
                          <bdi>
                            4,236
                          </bdi>
                        </span>
                        <span className="badge-soft tint-violet flex-shrink-0">
                          <bdi>
                            33.9%
                          </bdi>
                        </span>
                      </li>
                      <li className="d-flex align-items-center gap-2">
                        <span className="legend-dot bg-cat-cyan" aria-hidden="true" />
                        <span className="flex-grow-1 min-w-0 fs-md text-body-2 text-truncate">
                          {"Hair & Styling"}
                        </span>
                        <span className="fs-md fw-semibold text-title">
                          <bdi>
                            3,118
                          </bdi>
                        </span>
                        <span className="badge-soft tint-cyan flex-shrink-0">
                          <bdi>
                            25.0%
                          </bdi>
                        </span>
                      </li>
                      <li className="d-flex align-items-center gap-2">
                        <span className="legend-dot bg-cat-emerald" aria-hidden="true" />
                        <span className="flex-grow-1 min-w-0 fs-md text-body-2 text-truncate">
                          {"Skin & Facial"}
                        </span>
                        <span className="fs-md fw-semibold text-title">
                          <bdi>
                            2,364
                          </bdi>
                        </span>
                        <span className="badge-soft tint-emerald flex-shrink-0">
                          <bdi>
                            18.9%
                          </bdi>
                        </span>
                      </li>
                      <li className="d-flex align-items-center gap-2">
                        <span className="legend-dot bg-cat-amber" aria-hidden="true" />
                        <span className="flex-grow-1 min-w-0 fs-md text-body-2 text-truncate">
                          {"Nails & Beauty"}
                        </span>
                        <span className="fs-md fw-semibold text-title">
                          <bdi>
                            1,642
                          </bdi>
                        </span>
                        <span className="badge-soft tint-amber flex-shrink-0">
                          <bdi>
                            13.2%
                          </bdi>
                        </span>
                      </li>
                      <li className="d-flex align-items-center gap-2">
                        <span className="legend-dot bg-cat-rose" aria-hidden="true" />
                        <span className="flex-grow-1 min-w-0 fs-md text-body-2 text-truncate">
                          Wellness Classes
                        </span>
                        <span className="fs-md fw-semibold text-title">
                          <bdi>
                            1,126
                          </bdi>
                        </span>
                        <span className="badge-soft tint-rose flex-shrink-0">
                          <bdi>
                            9.0%
                          </bdi>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2 border-t-soft pt-3 mt-3">
                  <span className="icon-box icon-box-sm tint-rose border-current" aria-hidden="true">
                    <i data-lucide="flame" />
                  </span>
                  <span className="min-w-0">
                    {" "}
                    <span className="d-block fs-xs text-muted-2 text-truncate">
                      Fastest growing category
                    </span>
                    {" "}
                    <span className="d-block fs-6 fw-semibold text-title text-truncate">
                      <bdi>
                        Wellness Classes · +34.2%
                      </bdi>
                    </span>
                    {" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Customer overview ===== */}
      <section className="mb-4" aria-labelledby="bkg-customers-title">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
          <div className="min-w-0">
            <h2 id="bkg-customers-title" className="fs-4 fw-bold text-title mb-1">
              Customer Overview
            </h2>
            <p className="fs-md text-body-2 mb-0">
              Who is filling the diary — the new faces, the regulars, and what they have been doing.
            </p>
          </div>
          <div className="d-flex flex-wrap align-items-center gap-2">
            <span className="badge-soft tint-brand border-current d-inline-flex align-self-stretch align-items-center gap-2 px-3">
              {" "}
              <i className="icon-12" data-lucide="users-round" aria-hidden="true" />
              {" "}
              <bdi>
                8,942 on the books
              </bdi>
              {" "}
            </span>
            <a
              href="#"
              className="btn btn-outline-soft d-inline-flex flex-nowrap align-items-center justify-content-center gap-2 text-nowrap"
            >
              {" "}
              <i className="icon-16" data-lucide="contact-round" aria-hidden="true" />
              All customers
              {" "}
            </a>
          </div>
        </div>
        <div className="row g-3">
          {/* New vs returning over time */}
          <div className="col-12 col-xxl-8">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <div className="min-w-0">
                    <h3 className="fs-5 fw-bold text-title mb-1">
                      New vs Returning
                    </h3>
                    <p className="fs-md text-body-2 mb-0">
                      Active customers each month, split by whether they had booked before
                    </p>
                  </div>
                  <div
                    className="nav nav-pills seg-toggle flex-nowrap gap-1 p-1 rounded-pill bg-soft"
                    role="group"
                    aria-label="Customer mix time range"
                  >
                    <button type="button" className="nav-link fw-semibold" aria-pressed="false">
                      6M
                    </button>
                    <button type="button" className="nav-link active fw-semibold" aria-pressed="true">
                      12M
                    </button>
                  </div>
                </div>
                <ul className="list-unstyled d-flex flex-wrap align-items-center gap-3 gap-sm-4 mb-3">
                  <li className="min-w-0">
                    <span className="d-flex align-items-center gap-2">
                      <span className="legend-dot bg-cat-cyan" aria-hidden="true" />
                      <span className="fs-md text-body-2 text-truncate">
                        New this period
                      </span>
                    </span>
                    {" "}
                    <span className="d-flex flex-wrap align-items-baseline gap-2 mt-1">
                      <span className="fs-3 fw-bold text-title lh-1">
                        <bdi>
                          1,284
                        </bdi>
                      </span>
                      <span className="d-inline-flex align-items-center gap-1 fs-md fw-semibold text-cat-emerald">
                        <i className="icon-12 flip-rtl" data-lucide="trending-up" aria-hidden="true" />
                        <bdi>
                          +12.4%
                        </bdi>
                      </span>
                    </span>
                  </li>
                  <li className="min-w-0">
                    <span className="d-flex align-items-center gap-2">
                      <span className="legend-dot bg-cat-violet" aria-hidden="true" />
                      <span className="fs-md text-body-2 text-truncate">
                        Returning
                      </span>
                    </span>
                    {" "}
                    <span className="d-flex flex-wrap align-items-baseline gap-2 mt-1">
                      <span className="fs-3 fw-bold text-title lh-1">
                        <bdi>
                          4,318
                        </bdi>
                      </span>
                      <span className="d-inline-flex align-items-center gap-1 fs-md fw-semibold text-cat-emerald">
                        <i className="icon-12 flip-rtl" data-lucide="trending-up" aria-hidden="true" />
                        <bdi>
                          +5.1%
                        </bdi>
                      </span>
                    </span>
                  </li>
                  <li className="min-w-0">
                    <span className="d-flex align-items-center gap-2">
                      <span className="legend-dot bg-cat-emerald" aria-hidden="true" />
                      <span className="fs-md text-body-2 text-truncate">
                        Repeat rate
                      </span>
                    </span>
                    {" "}
                    <span className="d-flex flex-wrap align-items-baseline gap-2 mt-1">
                      <span className="fs-3 fw-bold text-title lh-1">
                        <bdi>
                          77.1%
                        </bdi>
                      </span>
                      <span className="d-inline-flex align-items-center gap-1 fs-md fw-semibold text-cat-emerald">
                        <i className="icon-12 flip-rtl" data-lucide="trending-up" aria-hidden="true" />
                        <bdi>
                          +2.6 pts
                        </bdi>
                      </span>
                    </span>
                  </li>
                </ul>
                <div id="bkgCustomerMixChart" className="chart-area" />
                <ul className="list-unstyled row row-cols-1 row-cols-md-3 g-2 border-t-soft pt-3 mt-3 mb-0">
                  <li className="col d-flex align-items-center gap-2 fs-md">
                    <i className="icon-16 text-cat-cyan" data-lucide="user-round-plus" aria-hidden="true" />
                    <span className="text-body-2 text-nowrap">
                      Best month
                    </span>
                    <span className="min-w-0 fw-semibold text-title text-truncate">
                      <bdi>
                        August · 1,284 new
                      </bdi>
                    </span>
                  </li>
                  <li className="col d-flex align-items-center gap-2 fs-md">
                    <i className="icon-16 text-cat-violet" data-lucide="repeat" aria-hidden="true" />
                    <span className="text-body-2 text-nowrap">
                      Time to rebook
                    </span>
                    <span className="min-w-0 fw-semibold text-title text-truncate">
                      <bdi>
                        34 days
                      </bdi>
                    </span>
                  </li>
                  <li className="col d-flex align-items-center gap-2 fs-md">
                    <i className="icon-16 text-cat-emerald" data-lucide="wallet" aria-hidden="true" />
                    <span className="text-body-2 text-nowrap">
                      Regulars spend
                    </span>
                    <span className="min-w-0 fw-semibold text-title text-truncate">
                      <bdi>
                        2.3× a first-timer
                      </bdi>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Loyalty depth */}
          <div className="col-12 col-xxl-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                  <div className="min-w-0">
                    <h3 className="fs-5 fw-bold text-title mb-1">
                      Customer Loyalty
                    </h3>
                    <p className="fs-md text-body-2 mb-0">
                      How deep the relationship goes
                    </p>
                  </div>
                  <span className="badge-soft tint-brand border-current text-nowrap">
                    <bdi>
                      90 days
                    </bdi>
                  </span>
                </div>
                <div className="row g-3 g-xl-4 align-items-center my-auto">
                  <div className="col-12 col-md-6 col-xxl-12">
                    <div className="position-relative d-flex justify-content-center">
                      <div id="bkgRetentionGauge" className="chart-area" />
                      <span className="chart-center mt-4">
                        <span className="d-block fs-1 fw-bold text-title lh-1">
                          <bdi>
                            68.5%
                          </bdi>
                        </span>
                        <span className="d-block fs-md text-body-2 mt-1">
                          Retention
                        </span>
                      </span>
                    </div>
                    <p className="fs-xs text-muted-2 text-center mb-0">
                      <bdi>
                        Customers who booked again within 90 days of their last visit
                      </bdi>
                    </p>
                  </div>
                  <div className="col-12 col-md-6 col-xxl-12">
                    <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                      <li>
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <span className="legend-dot bg-cat-cyan" aria-hidden="true" />
                          <span className="flex-grow-1 min-w-0 fs-md fw-medium text-title text-truncate">
                            First visit only
                          </span>
                          <span className="fs-md fw-semibold text-title">
                            <bdi>
                              2,864
                            </bdi>
                          </span>
                          <span className="badge-soft tint-cyan flex-shrink-0">
                            <bdi>
                              32.0%
                            </bdi>
                          </span>
                        </div>
                        <div
                          className="progress progress-sm"
                          role="progressbar"
                          aria-label="Share of customers with a single visit"
                          aria-valuenow="32"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div className="progress-bar bg-cat-cyan" style={{ width: "32%" }} />
                        </div>
                      </li>
                      <li>
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <span className="legend-dot bg-cat-violet" aria-hidden="true" />
                          <span className="flex-grow-1 min-w-0 fs-md fw-medium text-title text-truncate">
                            <bdi>
                              2 – 4 visits
                            </bdi>
                          </span>
                          <span className="fs-md fw-semibold text-title">
                            <bdi>
                              3,918
                            </bdi>
                          </span>
                          <span className="badge-soft tint-violet flex-shrink-0">
                            <bdi>
                              43.8%
                            </bdi>
                          </span>
                        </div>
                        <div
                          className="progress progress-sm"
                          role="progressbar"
                          aria-label="Share of customers with two to four visits"
                          aria-valuenow="44"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div className="progress-bar bg-cat-violet" style={{ width: "43.8%" }} />
                        </div>
                      </li>
                      <li>
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <span className="legend-dot bg-cat-emerald" aria-hidden="true" />
                          <span className="flex-grow-1 min-w-0 fs-md fw-medium text-title text-truncate">
                            <bdi>
                              5+ visits
                            </bdi>
                          </span>
                          <span className="fs-md fw-semibold text-title">
                            <bdi>
                              2,160
                            </bdi>
                          </span>
                          <span className="badge-soft tint-emerald flex-shrink-0">
                            <bdi>
                              24.2%
                            </bdi>
                          </span>
                        </div>
                        <div
                          className="progress progress-sm"
                          role="progressbar"
                          aria-label="Share of customers with five or more visits"
                          aria-valuenow="24"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div className="progress-bar bg-cat-emerald" style={{ width: "24.2%" }} />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2 border-t-soft pt-3 mt-3">
                  <span className="icon-box icon-box-sm tint-brand border-current" aria-hidden="true">
                    <i data-lucide="calendar-check" />
                  </span>
                  <span className="min-w-0">
                    {" "}
                    <span className="d-block fs-xs text-muted-2 text-truncate">
                      Lifetime average
                    </span>
                    {" "}
                    <span className="d-block fs-6 fw-semibold text-title text-truncate">
                      <bdi>
                        3.4 visits · $624 spent
                      </bdi>
                    </span>
                    {" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Customer activity feed */}
          <div className="col-12 col-xl-7">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <div className="min-w-0">
                    <h3 className="fs-5 fw-bold text-title mb-1">
                      Customer Activity
                    </h3>
                    <p className="fs-md text-body-2 mb-0">
                      What customers did across web, app and the front desk
                    </p>
                  </div>
                  <span className="badge-soft tint-brand border-current text-nowrap">
                    <bdi>
                      Today · 46 events
                    </bdi>
                  </span>
                </div>
                <ul className="list-unstyled d-flex flex-column gap-1 mb-0">
                  <li>
                    <a href="#" className="feed-row d-flex align-items-start gap-3 rounded-3 p-2 text-decoration-none">
                      <span className="feed-icon tint-emerald" aria-hidden="true">
                        <i data-lucide="user-round-plus" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-title text-truncate">
                          Amelia Brooks joined
                        </span>
                        {" "}
                        <span className="d-block fs-md text-body-2 text-truncate">
                          <bdi>
                            First booking — Deep Tissue Massage, today at 10:15
                          </bdi>
                        </span>
                        {" "}
                      </span>
                      <span className="fs-xs text-muted-2 text-nowrap flex-shrink-0">
                        <bdi>
                          4 min ago
                        </bdi>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="feed-row d-flex align-items-start gap-3 rounded-3 p-2 text-decoration-none">
                      <span className="feed-icon tint-cyan" aria-hidden="true">
                        <i data-lucide="repeat" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-title text-truncate">
                          Marcus Feld rebooked
                        </span>
                        {" "}
                        <span className="d-block fs-md text-body-2 text-truncate">
                          <bdi>
                            {"Third visit this quarter — Hair Colour & Style with Priya Nair"}
                          </bdi>
                        </span>
                        {" "}
                      </span>
                      <span className="fs-xs text-muted-2 text-nowrap flex-shrink-0">
                        <bdi>
                          22 min ago
                        </bdi>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="feed-row d-flex align-items-start gap-3 rounded-3 p-2 text-decoration-none">
                      <span className="feed-icon tint-amber" aria-hidden="true">
                        <i data-lucide="calendar-clock" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-title text-truncate">
                          Theo Almeida rescheduled
                        </span>
                        {" "}
                        <span className="d-block fs-md text-body-2 text-truncate">
                          <bdi>
                            Couples Spa Package moved to Sat 29 Aug, 09:00
                          </bdi>
                        </span>
                        {" "}
                      </span>
                      <span className="fs-xs text-muted-2 text-nowrap flex-shrink-0">
                        <bdi>
                          1 hr ago
                        </bdi>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="feed-row d-flex align-items-start gap-3 rounded-3 p-2 text-decoration-none">
                      <span className="feed-icon tint-violet" aria-hidden="true">
                        <i data-lucide="star" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-title text-truncate">
                          Nina Kovač left a review
                        </span>
                        {" "}
                        <span className="d-block fs-md text-body-2 text-truncate">
                          <bdi>
                            5.0 for Facial Rejuvenation with Priya Nair
                          </bdi>
                        </span>
                        {" "}
                      </span>
                      <span className="fs-xs text-muted-2 text-nowrap flex-shrink-0">
                        <bdi>
                          3 hr ago
                        </bdi>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="feed-row d-flex align-items-start gap-3 rounded-3 p-2 text-decoration-none">
                      <span className="feed-icon tint-rose" aria-hidden="true">
                        <i data-lucide="user-round-x" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-title text-truncate">
                          Jonas Wexler cancelled
                        </span>
                        {" "}
                        <span className="d-block fs-md text-body-2 text-truncate">
                          <bdi>
                            Express Manicure on 27 Aug — $58 refunded
                          </bdi>
                        </span>
                        {" "}
                      </span>
                      <span className="fs-xs text-muted-2 text-nowrap flex-shrink-0">
                        <bdi>
                          5 hr ago
                        </bdi>
                      </span>
                    </a>
                  </li>
                </ul>
                <a
                  href="#"
                  className="d-inline-flex align-items-center justify-content-center gap-2 fs-md fw-medium text-brand border-t-soft pt-3 mt-3"
                >
                  <span>
                    View all customer activity
                  </span>
                  <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
          {/* Most active customers */}
          <div className="col-12 col-xl-5">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <div className="min-w-0">
                    <h3 className="fs-5 fw-bold text-title mb-1">
                      Most Active Customers
                    </h3>
                    <p className="fs-md text-body-2 mb-0">
                      By visits over the last 90 days
                    </p>
                  </div>
                  <span className="badge-soft tint-brand border-current text-nowrap">
                    <bdi>
                      Top 4
                    </bdi>
                  </span>
                </div>
                <ol className="list-unstyled d-flex flex-column justify-content-between flex-grow-1 gap-2 mb-0">
                  <li className="d-flex align-items-center gap-2 gap-sm-3 rounded-3 p-2 bg-soft">
                    <span className="avatar avatar-sm flex-shrink-0">
                      <img src="/assets/images/avatar-1.png" width="34" height="34" alt="" />
                    </span>
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-block fs-md fw-semibold text-title text-truncate">
                        Amelia Brooks
                      </span>
                      {" "}
                      <span className="d-flex align-items-center gap-2">
                        <span className="badge-soft tint-violet flex-shrink-0 fs-xs px-2 py-0">
                          VIP
                        </span>
                        <span className="min-w-0 fs-xs text-muted-2 text-truncate">
                          <bdi>
                            Last visit 24 Aug
                          </bdi>
                        </span>
                      </span>
                      {" "}
                    </span>
                    <span className="text-end text-nowrap flex-shrink-0">
                      {" "}
                      <span className="d-block fs-md fw-semibold text-title">
                        <bdi>
                          $2,184
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        <bdi>
                          14 visits
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2 gap-sm-3 rounded-3 p-2">
                    <span className="avatar avatar-sm flex-shrink-0">
                      <img src="/assets/images/avatar-2.png" width="34" height="34" alt="" />
                    </span>
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-block fs-md fw-semibold text-title text-truncate">
                        Marcus Feld
                      </span>
                      {" "}
                      <span className="d-flex align-items-center gap-2">
                        <span className="badge-soft tint-emerald flex-shrink-0 fs-xs px-2 py-0">
                          Loyal
                        </span>
                        <span className="min-w-0 fs-xs text-muted-2 text-truncate">
                          <bdi>
                            Last visit 21 Aug
                          </bdi>
                        </span>
                      </span>
                      {" "}
                    </span>
                    <span className="text-end text-nowrap flex-shrink-0">
                      {" "}
                      <span className="d-block fs-md fw-semibold text-title">
                        <bdi>
                          $1,946
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        <bdi>
                          11 visits
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2 gap-sm-3 rounded-3 p-2">
                    <span className="avatar avatar-sm flex-shrink-0">
                      <img src="/assets/images/avatar-3.png" width="34" height="34" alt="" />
                    </span>
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-block fs-md fw-semibold text-title text-truncate">
                        Dana Okafor
                      </span>
                      {" "}
                      <span className="d-flex align-items-center gap-2">
                        <span className="badge-soft tint-emerald flex-shrink-0 fs-xs px-2 py-0">
                          Loyal
                        </span>
                        <span className="min-w-0 fs-xs text-muted-2 text-truncate">
                          <bdi>
                            Last visit 18 Aug
                          </bdi>
                        </span>
                      </span>
                      {" "}
                    </span>
                    <span className="text-end text-nowrap flex-shrink-0">
                      {" "}
                      <span className="d-block fs-md fw-semibold text-title">
                        <bdi>
                          $1,428
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        <bdi>
                          9 visits
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2 gap-sm-3 rounded-3 p-2">
                    <span className="avatar avatar-sm flex-shrink-0">
                      <img src="/assets/images/avatar-4.png" width="34" height="34" alt="" />
                    </span>
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-block fs-md fw-semibold text-title text-truncate">
                        Theo Almeida
                      </span>
                      {" "}
                      <span className="d-flex align-items-center gap-2">
                        <span className="badge-soft tint-cyan flex-shrink-0 fs-xs px-2 py-0">
                          Regular
                        </span>
                        <span className="min-w-0 fs-xs text-muted-2 text-truncate">
                          <bdi>
                            Last visit 12 Aug
                          </bdi>
                        </span>
                      </span>
                      {" "}
                    </span>
                    <span className="text-end text-nowrap flex-shrink-0">
                      {" "}
                      <span className="d-block fs-md fw-semibold text-title">
                        <bdi>
                          $1,320
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        <bdi>
                          8 visits
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </li>
                </ol>
                <a
                  href="#"
                  className="d-inline-flex align-items-center justify-content-center gap-2 fs-md fw-medium text-brand border-t-soft pt-3 mt-3"
                >
                  <span>
                    View all customers
                  </span>
                  <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ========== FOOTER ========== */}
    </AppShell>
  );
}

/* Generated from the Vionex HTML theme by scripts/convert-html.mjs */
import AppShell from "@/components/AppShell";

export const metadata = {
  title: "Vionex — Cards",
  description: "Vionex cards — basic, media, statistic, profile, pricing, gradient and selectable tile variants, built with Bootstrap 5, CSS variables and a scalable design system.",
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
          Cards
        </h1>
        <nav aria-label="breadcrumb" className="d-none d-md-block">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="/">
                Dashboard
              </a>
            </li>
            <li className="breadcrumb-item">
              Components
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Cards
            </li>
          </ol>
        </nav>
      </div>
      {/* ===== Dashboard patterns ===== */}
      <div className="min-w-0 mt-4 mb-3">
        <h2 className="fs-4 fw-bold text-title mb-1">
          Dashboard Widget Patterns
        </h2>
        <p className="fs-md text-body-2 mb-0">
          The card shapes already in service across the dashboards, gathered in one place. Charts are real ApexCharts mounts registered in
          {" "}
          <code>
            charts.js
          </code>
          , so they follow the theme, dark mode and RTL exactly as they do on the pages they came from.
        </p>
      </div>
      <div className="row g-3 g-xl-4">
        {/* ===== KPI: wash & watermark ===== */}
        <div className="col-12">
          <section className="card mb-0" aria-labelledby="sec-kpi-wash">
            <div className="card-body">
              <div className="mb-4">
                <h3 id="sec-kpi-wash" className="fs-5 fw-bold text-title mb-1">
                  {"KPI — Wash & Watermark"}
                </h3>
                <p className="fs-md text-body-2 mb-0">
                  The headline metric row. A tinted wash panel, a burst watermark and a filled circular icon, with the delta carried in a soft badge.
                </p>
              </div>
              <ul className="list-unstyled row row-cols-1 row-cols-sm-2 row-cols-xl-4 g-3 mb-0">
                <li className="col">
                  <div className="position-relative overflow-hidden h-100 p-3 rounded-4 bg-wash-rose">
                    <img
                      src="/assets/images/burst-art.svg"
                      width="136"
                      height="136"
                      alt=""
                      className="card-watermark position-absolute top-0 pe-none"
                    />
                    <div className="position-relative d-flex flex-column justify-content-between gap-4 h-100">
                      <div className="d-flex flex-column gap-2">
                        <span className="icon-box bg-cat-red text-white rounded-circle" aria-hidden="true">
                          <i data-lucide="send" />
                        </span>
                        <p className="fs-5 fw-medium text-primary mb-0">
                          Total Requests
                        </p>
                      </div>
                      <div className="d-flex flex-column gap-2">
                        <span className="fs-2 fw-bold text-title">
                          <bdi>
                            2.84M
                          </bdi>
                        </span>
                        <span className="d-flex flex-wrap align-items-center gap-2 fs-md">
                          <span className="badge-soft tint-success d-inline-flex align-items-center gap-1">
                            {" "}
                            <i className="icon-20" data-lucide="trending-up" aria-hidden="true" />
                            <span dir="ltr">
                              +18.2%
                            </span>
                            {" "}
                          </span>
                          <span className="text-muted-2">
                            vs last month
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col">
                  <div className="position-relative overflow-hidden h-100 p-3 rounded-4 bg-wash-emerald">
                    <img
                      src="/assets/images/burst-art.svg"
                      width="136"
                      height="136"
                      alt=""
                      className="card-watermark position-absolute top-0 pe-none"
                    />
                    <div className="position-relative d-flex flex-column justify-content-between gap-4 h-100">
                      <div className="d-flex flex-column gap-2">
                        <span className="icon-box bg-cat-emerald text-white rounded-circle" aria-hidden="true">
                          <i data-lucide="timer" />
                        </span>
                        <p className="fs-5 fw-medium text-primary mb-0">
                          Average Response
                        </p>
                      </div>
                      <div className="d-flex flex-column gap-2">
                        <span className="fs-2 fw-bold text-title">
                          <bdi>
                            0.82 sec
                          </bdi>
                        </span>
                        <span className="d-flex flex-wrap align-items-center gap-2 fs-md">
                          <span className="badge-soft tint-danger d-inline-flex align-items-center gap-1">
                            {" "}
                            <i className="icon-20" data-lucide="trending-down" aria-hidden="true" />
                            <span dir="ltr">
                              +10.5%
                            </span>
                            {" "}
                          </span>
                          <span className="text-muted-2">
                            vs last month
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col">
                  <div className="position-relative overflow-hidden h-100 p-3 rounded-4 bg-wash-amber">
                    <img
                      src="/assets/images/burst-art.svg"
                      width="136"
                      height="136"
                      alt=""
                      className="card-watermark position-absolute top-0 pe-none"
                    />
                    <div className="position-relative d-flex flex-column justify-content-between gap-4 h-100">
                      <div className="d-flex flex-column gap-2">
                        <span className="icon-box bg-cat-orange text-white rounded-circle" aria-hidden="true">
                          <i data-lucide="circle-check" />
                        </span>
                        <p className="fs-5 fw-medium text-primary mb-0">
                          Success Rate
                        </p>
                      </div>
                      <div className="d-flex flex-column gap-2">
                        <span className="fs-2 fw-bold text-title">
                          <bdi>
                            98.7%
                          </bdi>
                        </span>
                        <span className="d-flex flex-wrap align-items-center gap-2 fs-md">
                          <span className="badge-soft tint-success d-inline-flex align-items-center gap-1">
                            {" "}
                            <i className="icon-20" data-lucide="trending-up" aria-hidden="true" />
                            <span dir="ltr">
                              +2.4%
                            </span>
                            {" "}
                          </span>
                          <span className="text-muted-2">
                            vs last month
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col">
                  <div className="position-relative overflow-hidden h-100 p-3 rounded-4 bg-wash-violet">
                    <img
                      src="/assets/images/burst-art.svg"
                      width="136"
                      height="136"
                      alt=""
                      className="card-watermark position-absolute top-0 pe-none"
                    />
                    <div className="position-relative d-flex flex-column justify-content-between gap-4 h-100">
                      <div className="d-flex flex-column gap-2">
                        <span className="icon-box bg-cat-violet text-white rounded-circle" aria-hidden="true">
                          <i data-lucide="users-round" />
                        </span>
                        <p className="fs-5 fw-medium text-primary mb-0">
                          Active Seats
                        </p>
                      </div>
                      <div className="d-flex flex-column gap-2">
                        <span className="fs-2 fw-bold text-title">
                          <bdi>
                            1,248
                          </bdi>
                        </span>
                        <span className="d-flex flex-wrap align-items-center gap-2 fs-md">
                          <span className="badge-soft tint-success d-inline-flex align-items-center gap-1">
                            {" "}
                            <i className="icon-20" data-lucide="trending-up" aria-hidden="true" />
                            <span dir="ltr">
                              +6.9%
                            </span>
                            {" "}
                          </span>
                          <span className="text-muted-2">
                            vs last month
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>
        {/* ===== KPI: sparkline trend ===== */}
        <div className="col-12">
          <section className="card mb-0" aria-labelledby="sec-kpi-spark">
            <div className="card-body">
              <div className="mb-4">
                <h3 id="sec-kpi-spark" className="fs-5 fw-bold text-title mb-1">
                  KPI — Sparkline Trend
                </h3>
                <p className="fs-md text-body-2 mb-0">
                  Value, delta and a six-period spark in one line. The chart is an ApexCharts mount in a
                  {" "}
                  <code>
                    chart-inline
                  </code>
                  {" "}
                  box, with the current period highlighted.
                </p>
              </div>
              <ul className="list-unstyled row row-cols-1 row-cols-sm-2 row-cols-xl-4 g-3 mb-0">
                <li className="col">
                  <div className="card h-100 mb-0">
                    <div className="card-body d-flex flex-column gap-3">
                      <div className="d-flex align-items-center justify-content-between gap-2">
                        <p className="fs-5 fw-medium text-body-2 text-truncate mb-0">
                          Total Income
                        </p>
                        <div className="dropdown flex-shrink-0">
                          <button
                            type="button"
                            className="btn btn-ghost btn-18 rounded-circle"
                            id="cardKpiMenuA"
                            data-bs-toggle="dropdown"
                            data-bs-offset="0,8"
                            aria-expanded="false"
                            aria-label="More actions for Total Income"
                          >
                            <i data-lucide="ellipsis" aria-hidden="true" />
                          </button>
                          {" "}
                          <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="cardKpiMenuA">
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="eye" aria-hidden="true" />
                                View report
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="download" aria-hidden="true" />
                                Export data
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="d-flex align-items-end justify-content-between gap-3 mt-auto">
                        <div className="min-w-0">
                          <p className="fs-2 fw-bold text-title text-nowrap lh-1 mb-2">
                            <bdi>
                              $72,428
                            </bdi>
                          </p>
                          <div className="d-flex flex-wrap align-items-center gap-2">
                            <span className="badge-soft tint-success d-inline-flex align-items-center gap-1 px-2 py-1 fs-xs">
                              {" "}
                              <i className="icon-12" data-lucide="trending-up" aria-hidden="true" />
                              <span dir="ltr">
                                +10%
                              </span>
                              {" "}
                            </span>
                            <span className="fs-xs fw-medium text-body-2">
                              <bdi>
                                +$142
                              </bdi>
                            </span>
                          </div>
                        </div>
                        <div id="cardKpiSparkA" className="chart-inline" />
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col">
                  <div className="card h-100 mb-0">
                    <div className="card-body d-flex flex-column gap-3">
                      <div className="d-flex align-items-center justify-content-between gap-2">
                        <p className="fs-5 fw-medium text-body-2 text-truncate mb-0">
                          Total Orders
                        </p>
                        <div className="dropdown flex-shrink-0">
                          <button
                            type="button"
                            className="btn btn-ghost btn-18 rounded-circle"
                            id="cardKpiMenuB"
                            data-bs-toggle="dropdown"
                            data-bs-offset="0,8"
                            aria-expanded="false"
                            aria-label="More actions for Total Orders"
                          >
                            <i data-lucide="ellipsis" aria-hidden="true" />
                          </button>
                          {" "}
                          <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="cardKpiMenuB">
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="eye" aria-hidden="true" />
                                View report
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="download" aria-hidden="true" />
                                Export data
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="d-flex align-items-end justify-content-between gap-3 mt-auto">
                        <div className="min-w-0">
                          <p className="fs-2 fw-bold text-title text-nowrap lh-1 mb-2">
                            <bdi>
                              3,842
                            </bdi>
                          </p>
                          <div className="d-flex flex-wrap align-items-center gap-2">
                            <span className="badge-soft tint-success d-inline-flex align-items-center gap-1 px-2 py-1 fs-xs">
                              {" "}
                              <i className="icon-12" data-lucide="trending-up" aria-hidden="true" />
                              <span dir="ltr">
                                +4.2%
                              </span>
                              {" "}
                            </span>
                            <span className="fs-xs fw-medium text-body-2">
                              <bdi>
                                +156
                              </bdi>
                            </span>
                          </div>
                        </div>
                        <div id="cardKpiSparkB" className="chart-inline" />
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col">
                  <div className="card h-100 mb-0">
                    <div className="card-body d-flex flex-column gap-3">
                      <div className="d-flex align-items-center justify-content-between gap-2">
                        <p className="fs-5 fw-medium text-body-2 text-truncate mb-0">
                          Net Profit
                        </p>
                        <div className="dropdown flex-shrink-0">
                          <button
                            type="button"
                            className="btn btn-ghost btn-18 rounded-circle"
                            id="cardKpiMenuC"
                            data-bs-toggle="dropdown"
                            data-bs-offset="0,8"
                            aria-expanded="false"
                            aria-label="More actions for Net Profit"
                          >
                            <i data-lucide="ellipsis" aria-hidden="true" />
                          </button>
                          {" "}
                          <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="cardKpiMenuC">
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="eye" aria-hidden="true" />
                                View report
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="download" aria-hidden="true" />
                                Export data
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="d-flex align-items-end justify-content-between gap-3 mt-auto">
                        <div className="min-w-0">
                          <p className="fs-2 fw-bold text-title text-nowrap lh-1 mb-2">
                            <bdi>
                              $18,940
                            </bdi>
                          </p>
                          <div className="d-flex flex-wrap align-items-center gap-2">
                            <span className="badge-soft tint-success d-inline-flex align-items-center gap-1 px-2 py-1 fs-xs">
                              {" "}
                              <i className="icon-12" data-lucide="trending-up" aria-hidden="true" />
                              <span dir="ltr">
                                +8.6%
                              </span>
                              {" "}
                            </span>
                            <span className="fs-xs fw-medium text-body-2">
                              <bdi>
                                +$1.4K
                              </bdi>
                            </span>
                          </div>
                        </div>
                        <div id="cardKpiSparkC" className="chart-inline" />
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col">
                  <div className="card h-100 mb-0">
                    <div className="card-body d-flex flex-column gap-3">
                      <div className="d-flex align-items-center justify-content-between gap-2">
                        <p className="fs-5 fw-medium text-body-2 text-truncate mb-0">
                          Refunds
                        </p>
                        <div className="dropdown flex-shrink-0">
                          <button
                            type="button"
                            className="btn btn-ghost btn-18 rounded-circle"
                            id="cardKpiMenuD"
                            data-bs-toggle="dropdown"
                            data-bs-offset="0,8"
                            aria-expanded="false"
                            aria-label="More actions for Refunds"
                          >
                            <i data-lucide="ellipsis" aria-hidden="true" />
                          </button>
                          {" "}
                          <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="cardKpiMenuD">
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="eye" aria-hidden="true" />
                                View report
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="download" aria-hidden="true" />
                                Export data
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="d-flex align-items-end justify-content-between gap-3 mt-auto">
                        <div className="min-w-0">
                          <p className="fs-2 fw-bold text-title text-nowrap lh-1 mb-2">
                            <bdi>
                              $2,106
                            </bdi>
                          </p>
                          <div className="d-flex flex-wrap align-items-center gap-2">
                            <span className="badge-soft tint-danger d-inline-flex align-items-center gap-1 px-2 py-1 fs-xs">
                              {" "}
                              <i className="icon-12" data-lucide="trending-down" aria-hidden="true" />
                              <span dir="ltr">
                                -3.1%
                              </span>
                              {" "}
                            </span>
                            <span className="fs-xs fw-medium text-body-2">
                              <bdi>
                                -$68
                              </bdi>
                            </span>
                          </div>
                        </div>
                        <div id="cardKpiSparkD" className="chart-inline" />
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>
        {/* ===== KPI: compact icon & delta ===== */}
        <div className="col-12">
          <section className="card mb-0" aria-labelledby="sec-kpi-compact">
            <div className="card-body">
              <div className="mb-4">
                <h3 id="sec-kpi-compact" className="fs-5 fw-bold text-title mb-1">
                  KPI — Compact Tile
                </h3>
                <p className="fs-md text-body-2 mb-0">
                  The densest of the three: an icon box, a label and a value on one row. Used where four or five metrics have to share a narrow column.
                </p>
              </div>
              <ul className="list-unstyled row row-cols-1 row-cols-sm-2 row-cols-xl-4 g-3 mb-0">
                <li className="col">
                  <div className="tile-soft border-soft rounded-4 p-3 h-100 d-flex align-items-center gap-3">
                    <span className="icon-box icon-box-lg tint-blue" aria-hidden="true">
                      <i data-lucide="eye" />
                    </span>
                    <div className="min-w-0">
                      <p className="fs-sm text-muted-2 text-truncate mb-1">
                        Page Views
                      </p>
                      <p className="fs-4 fw-bold text-title lh-1 mb-0">
                        <bdi>
                          524,756
                        </bdi>
                      </p>
                    </div>
                  </div>
                </li>
                <li className="col">
                  <div className="tile-soft border-soft rounded-4 p-3 h-100 d-flex align-items-center gap-3">
                    <span className="icon-box icon-box-lg tint-emerald" aria-hidden="true">
                      <i data-lucide="mouse-pointer-click" />
                    </span>
                    <div className="min-w-0">
                      <p className="fs-sm text-muted-2 text-truncate mb-1">
                        Click Rate
                      </p>
                      <p className="fs-4 fw-bold text-title lh-1 mb-0">
                        <bdi>
                          6.84%
                        </bdi>
                      </p>
                    </div>
                  </div>
                </li>
                <li className="col">
                  <div className="tile-soft border-soft rounded-4 p-3 h-100 d-flex align-items-center gap-3">
                    <span className="icon-box icon-box-lg tint-amber" aria-hidden="true">
                      <i data-lucide="hourglass" />
                    </span>
                    <div className="min-w-0">
                      <p className="fs-sm text-muted-2 text-truncate mb-1">
                        Avg. Session
                      </p>
                      <p className="fs-4 fw-bold text-title lh-1 mb-0">
                        <bdi>
                          4m 12s
                        </bdi>
                      </p>
                    </div>
                  </div>
                </li>
                <li className="col">
                  <div className="tile-soft border-soft rounded-4 p-3 h-100 d-flex align-items-center gap-3">
                    <span className="icon-box icon-box-lg tint-rose" aria-hidden="true">
                      <i data-lucide="log-out" />
                    </span>
                    <div className="min-w-0">
                      <p className="fs-sm text-muted-2 text-truncate mb-1">
                        Bounce Rate
                      </p>
                      <p className="fs-4 fw-bold text-title lh-1 mb-0">
                        <bdi>
                          38.2%
                        </bdi>
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>
        {/* ===== KPI: radial rings ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-rings">
            <div className="card-body">
              <div className="mb-4">
                <h3 id="sec-rings" className="fs-5 fw-bold text-title mb-1">
                  Goal Rings
                </h3>
                <p className="fs-md text-body-2 mb-0">
                  Progress towards a target, drawn as an ApexCharts radial bar with the figure sitting in the ring's hollow.
                </p>
              </div>
              <ul className="list-unstyled row row-cols-1 row-cols-sm-3 g-3 mb-0">
                <li className="col text-center">
                  <div className="position-relative d-inline-block">
                    <div id="cardRingA" />
                    <span className="chart-center">
                      <span className="fs-lg fw-bold text-title">
                        <bdi>
                          78%
                        </bdi>
                      </span>
                    </span>
                  </div>
                  <p className="fs-md fw-semibold text-title mb-0">
                    Revenue
                  </p>
                  <p className="fs-sm text-muted-2 mb-0">
                    <bdi>
                      $78K
                    </bdi>
                    {" "}of{" "}
                    <bdi>
                      $100K
                    </bdi>
                  </p>
                </li>
                <li className="col text-center">
                  <div className="position-relative d-inline-block">
                    <div id="cardRingB" />
                    <span className="chart-center">
                      <span className="fs-lg fw-bold text-title">
                        <bdi>
                          54%
                        </bdi>
                      </span>
                    </span>
                  </div>
                  <p className="fs-md fw-semibold text-title mb-0">
                    New Users
                  </p>
                  <p className="fs-sm text-muted-2 mb-0">
                    <bdi>
                      1,080
                    </bdi>
                    {" "}of{" "}
                    <bdi>
                      2,000
                    </bdi>
                  </p>
                </li>
                <li className="col text-center">
                  <div className="position-relative d-inline-block">
                    <div id="cardRingC" />
                    <span className="chart-center">
                      <span className="fs-lg fw-bold text-title">
                        <bdi>
                          92%
                        </bdi>
                      </span>
                    </span>
                  </div>
                  <p className="fs-md fw-semibold text-title mb-0">
                    Uptime
                  </p>
                  <p className="fs-sm text-muted-2 mb-0">
                    Target
                    {" "}
                    <bdi>
                      99.9%
                    </bdi>
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </div>
        {/* ===== Donut breakdown ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-mix">
            <div className="card-body">
              <div className="mb-4">
                <h3 id="sec-mix" className="fs-5 fw-bold text-title mb-1">
                  {"Donut & Legend"}
                </h3>
                <p className="fs-md text-body-2 mb-0">
                  A share-of-total chart beside the rows it explains, with an icon parked in the hollow. The legend doubles as the detail list.
                </p>
              </div>
              <div className="row align-items-center g-3">
                <div className="col-12 col-sm-5">
                  <div className="position-relative">
                    <div id="cardMixDonut" className="chart-area" />
                    <span className="chart-center">
                      <span className="icon-box icon-box-xl bg-nav-strong text-white rounded-circle" aria-hidden="true">
                        <i data-lucide="wallet" />
                      </span>
                    </span>
                  </div>
                </div>
                <div className="col-12 col-sm-7">
                  <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                    <li className="bg-plain border-theme p-2 rounded-3">
                      <div className="d-flex align-items-center justify-content-between gap-2">
                        <span className="d-inline-flex align-items-center gap-2 min-w-0">
                          <span className="icon-box icon-box-sm tint-blue rounded-circle" aria-hidden="true">
                            <i data-lucide="line-chart" />
                          </span>
                          <span className="min-w-0">
                            {" "}
                            <span className="d-block fs-md fw-semibold text-title text-truncate">
                              Stocks
                            </span>
                            {" "}
                            <span className="d-block fs-xs text-muted-2 text-truncate">
                              <bdi>
                                $10,944
                              </bdi>
                            </span>
                            {" "}
                          </span>
                        </span>
                        <span className="bg-soft border-theme flex-shrink-0 px-2 py-1 rounded-pill fs-xs fw-semibold text-muted-2">
                          <bdi>
                            45%
                          </bdi>
                        </span>
                      </div>
                    </li>
                    <li className="bg-plain border-theme p-2 rounded-3">
                      <div className="d-flex align-items-center justify-content-between gap-2">
                        <span className="d-inline-flex align-items-center gap-2 min-w-0">
                          <span className="icon-box icon-box-sm tint-emerald rounded-circle" aria-hidden="true">
                            <i data-lucide="landmark" />
                          </span>
                          <span className="min-w-0">
                            {" "}
                            <span className="d-block fs-md fw-semibold text-title text-truncate">
                              Bonds
                            </span>
                            {" "}
                            <span className="d-block fs-xs text-muted-2 text-truncate">
                              <bdi>
                                $7,296
                              </bdi>
                            </span>
                            {" "}
                          </span>
                        </span>
                        <span className="bg-soft border-theme flex-shrink-0 px-2 py-1 rounded-pill fs-xs fw-semibold text-muted-2">
                          <bdi>
                            30%
                          </bdi>
                        </span>
                      </div>
                    </li>
                    <li className="bg-plain border-theme p-2 rounded-3">
                      <div className="d-flex align-items-center justify-content-between gap-2">
                        <span className="d-inline-flex align-items-center gap-2 min-w-0">
                          <span className="icon-box icon-box-sm tint-amber rounded-circle" aria-hidden="true">
                            <i data-lucide="coins" />
                          </span>
                          <span className="min-w-0">
                            {" "}
                            <span className="d-block fs-md fw-semibold text-title text-truncate">
                              Cash
                            </span>
                            {" "}
                            <span className="d-block fs-xs text-muted-2 text-truncate">
                              <bdi>
                                $6,080
                              </bdi>
                            </span>
                            {" "}
                          </span>
                        </span>
                        <span className="bg-soft border-theme flex-shrink-0 px-2 py-1 rounded-pill fs-xs fw-semibold text-muted-2">
                          <bdi>
                            25%
                          </bdi>
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* ===== Leaderboard ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-leaderboard">
            <div className="card-header d-flex flex-wrap align-items-center justify-content-between gap-2">
              <h3 id="sec-leaderboard" className="fs-5 fw-bold text-title mb-0">
                Leaderboard
              </h3>
              <span className="bg-plain border-theme flex-shrink-0 px-3 py-1 rounded-pill fs-sm fw-bold text-title text-nowrap">
                <bdi>
                  79 hrs total
                </bdi>
              </span>
            </div>
            <div className="card-body">
              <p className="fs-md text-body-2 mb-3">
                A ranked list where the bar carries the comparison. The rank chip is an avatar, so the row reuses the same sizing as every other people list.
              </p>
              <ol className="list-unstyled d-flex flex-column gap-3 mb-0">
                <li className="d-flex align-items-center gap-3">
                  <span className="avatar avatar-xs bg-cat-violet fw-bold">
                    1
                  </span>
                  <span className="w-25 flex-shrink-0 fs-md fw-semibold text-title text-truncate">
                    Sarah Robinson
                  </span>
                  <span
                    className="progress progress-sm flex-grow-1 min-w-0"
                    role="progressbar"
                    aria-label="Hours logged by Sarah Robinson"
                    aria-valuenow="24"
                    aria-valuemin="0"
                    aria-valuemax="24"
                    aria-valuetext="24 hours"
                  >
                    <span className="progress-bar bg-grad-cat from-cat-violet to-cat-blue w-100" />
                  </span>
                  <span className="flex-shrink-0 fs-md fw-bold text-title text-end text-nowrap">
                    <bdi>
                      24
                      {" "}
                      <span className="fs-xs fw-medium text-muted-2">
                        h
                      </span>
                    </bdi>
                  </span>
                </li>
                <li className="d-flex align-items-center gap-3">
                  <span className="avatar avatar-xs bg-cat-blue fw-bold">
                    2
                  </span>
                  <span className="w-25 flex-shrink-0 fs-md fw-semibold text-title text-truncate">
                    Kevin Smith
                  </span>
                  <span
                    className="progress progress-sm flex-grow-1 min-w-0"
                    role="progressbar"
                    aria-label="Hours logged by Kevin Smith"
                    aria-valuenow="18"
                    aria-valuemin="0"
                    aria-valuemax="24"
                    aria-valuetext="18 hours"
                  >
                    <span className="progress-bar bg-grad-cat from-cat-blue to-cat-emerald w-75" />
                  </span>
                  <span className="flex-shrink-0 fs-md fw-bold text-title text-end text-nowrap">
                    <bdi>
                      18
                      {" "}
                      <span className="fs-xs fw-medium text-muted-2">
                        h
                      </span>
                    </bdi>
                  </span>
                </li>
                <li className="d-flex align-items-center gap-3">
                  <span className="avatar avatar-xs bg-cat-emerald fw-bold">
                    3
                  </span>
                  <span className="w-25 flex-shrink-0 fs-md fw-semibold text-title text-truncate">
                    Meera Iyer
                  </span>
                  <span
                    className="progress progress-sm flex-grow-1 min-w-0"
                    role="progressbar"
                    aria-label="Hours logged by Meera Iyer"
                    aria-valuenow="12"
                    aria-valuemin="0"
                    aria-valuemax="24"
                    aria-valuetext="12 hours"
                  >
                    <span className="progress-bar bg-grad-cat from-cat-emerald to-cat-amber w-50" />
                  </span>
                  <span className="flex-shrink-0 fs-md fw-bold text-title text-end text-nowrap">
                    <bdi>
                      12
                      {" "}
                      <span className="fs-xs fw-medium text-muted-2">
                        h
                      </span>
                    </bdi>
                  </span>
                </li>
                <li className="d-flex align-items-center gap-3">
                  <span className="avatar avatar-xs bg-cat-amber fw-bold">
                    4
                  </span>
                  <span className="w-25 flex-shrink-0 fs-md fw-semibold text-title text-truncate">
                    Dev Sharma
                  </span>
                  <span
                    className="progress progress-sm flex-grow-1 min-w-0"
                    role="progressbar"
                    aria-label="Hours logged by Dev Sharma"
                    aria-valuenow="6"
                    aria-valuemin="0"
                    aria-valuemax="24"
                    aria-valuetext="6 hours"
                  >
                    <span className="progress-bar bg-grad-cat from-cat-amber to-cat-orange w-25" />
                  </span>
                  <span className="flex-shrink-0 fs-md fw-bold text-title text-end text-nowrap">
                    <bdi>
                      6
                      {" "}
                      <span className="fs-xs fw-medium text-muted-2">
                        h
                      </span>
                    </bdi>
                  </span>
                </li>
                <li className="d-flex align-items-center gap-3">
                  <span className="avatar avatar-xs bg-cat-slate fw-bold">
                    5
                  </span>
                  <span className="w-25 flex-shrink-0 fs-md fw-semibold text-title text-truncate">
                    Nisha Bose
                  </span>
                  <span
                    className="progress progress-sm flex-grow-1 min-w-0"
                    role="progressbar"
                    aria-label="Hours logged by Nisha Bose"
                    aria-valuenow="6"
                    aria-valuemin="0"
                    aria-valuemax="24"
                    aria-valuetext="6 hours"
                  >
                    <span className="progress-bar bg-grad-cat from-cat-blue to-cat-violet w-25" />
                  </span>
                  <span className="flex-shrink-0 fs-md fw-bold text-title text-end text-nowrap">
                    <bdi>
                      6
                      {" "}
                      <span className="fs-xs fw-medium text-muted-2">
                        h
                      </span>
                    </bdi>
                  </span>
                </li>
                <li className="d-flex align-items-center gap-3">
                  <span className="avatar avatar-xs bg-cat-rose fw-bold">
                    6
                  </span>
                  <span className="w-25 flex-shrink-0 fs-md fw-semibold text-title text-truncate">
                    Aarav Shah
                  </span>
                  <span
                    className="progress progress-sm flex-grow-1 min-w-0"
                    role="progressbar"
                    aria-label="Hours logged by Aarav Shah"
                    aria-valuenow="3"
                    aria-valuemin="0"
                    aria-valuemax="24"
                    aria-valuetext="3 hours"
                  >
                    <span className="progress-bar bg-grad-cat from-cat-orange to-cat-amber w-25" />
                  </span>
                  <span className="flex-shrink-0 fs-md fw-bold text-title text-end text-nowrap">
                    <bdi>
                      3
                      {" "}
                      <span className="fs-xs fw-medium text-muted-2">
                        h
                      </span>
                    </bdi>
                  </span>
                </li>
              </ol>
            </div>
          </section>
        </div>
        {/* ===== Pipeline card ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-pipeline">
            <div className="card-body">
              <div className="mb-3">
                <h3 id="sec-pipeline" className="fs-5 fw-bold text-title mb-1">
                  Pipeline Stage
                </h3>
                <p className="fs-md text-body-2 mb-0">
                  A stage total, its share of the pipeline, then the deals inside it. The five-segment
                  {" "}
                  <code>
                    seg-meter
                  </code>
                  {" "}
                  reads as a health score without needing a number.
                </p>
              </div>
              <p className="fs-md fw-bold text-title mb-1">
                <bdi>
                  $126K
                </bdi>
              </p>
              <div
                className="progress mb-3"
                role="progressbar"
                aria-label="Qualifying share of pipeline value"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div className="progress-bar bg-cat-slate w-25" />
              </div>
              <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                <li className="bg-plain border-theme rounded-2 p-2">
                  <p className="fs-md fw-semibold text-title mb-1">
                    Meridian Dental
                  </p>
                  <p className="fs-xs text-muted-2 mb-2">
                    Qualify budget on the Friday call.
                  </p>
                  <div className="d-flex align-items-center justify-content-between gap-2">
                    <span className="d-inline-flex align-items-center gap-2 min-w-0">
                      <span className="avatar avatar-xs bg-grad-4" aria-hidden="true">
                        TK
                      </span>
                      <span className="fs-md fw-bold text-title">
                        <bdi>
                          $38K
                        </bdi>
                      </span>
                    </span>
                    <span className="seg-meter" role="img" aria-label="Deal health 2 out of 5">
                      <span className="bg-cat-rose" />
                      <span className="bg-cat-rose" />
                      <span />
                      <span />
                      <span />
                    </span>
                  </div>
                </li>
                <li className="bg-plain border-theme rounded-2 p-2">
                  <p className="fs-md fw-semibold text-title mb-1">
                    Harborline Logistics
                  </p>
                  <p className="fs-xs text-muted-2 mb-2">
                    Waiting on the procurement contact.
                  </p>
                  <div className="d-flex align-items-center justify-content-between gap-2">
                    <span className="d-inline-flex align-items-center gap-2 min-w-0">
                      <span className="avatar avatar-xs bg-grad-2" aria-hidden="true">
                        AS
                      </span>
                      <span className="fs-md fw-bold text-title">
                        <bdi>
                          $52K
                        </bdi>
                      </span>
                    </span>
                    <span className="seg-meter" role="img" aria-label="Deal health 4 out of 5">
                      <span className="bg-cat-emerald" />
                      <span className="bg-cat-emerald" />
                      <span className="bg-cat-emerald" />
                      <span className="bg-cat-emerald" />
                      <span />
                    </span>
                  </div>
                </li>
                <li className="bg-plain border-theme rounded-2 p-2">
                  <p className="fs-md fw-semibold text-title mb-1">
                    Vertex Labs
                  </p>
                  <p className="fs-xs text-muted-2 mb-2">
                    Security review booked for next Tuesday.
                  </p>
                  <div className="d-flex align-items-center justify-content-between gap-2">
                    <span className="d-inline-flex align-items-center gap-2 min-w-0">
                      <span className="avatar avatar-xs bg-grad-6" aria-hidden="true">
                        NB
                      </span>
                      <span className="fs-md fw-bold text-title">
                        <bdi>
                          $36K
                        </bdi>
                      </span>
                    </span>
                    <span className="seg-meter" role="img" aria-label="Deal health 3 out of 5">
                      <span className="bg-cat-amber" />
                      <span className="bg-cat-amber" />
                      <span className="bg-cat-amber" />
                      <span />
                      <span />
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>
        {/* ===== Activity feed ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-feed">
            <div className="card-header d-flex flex-wrap align-items-center justify-content-between gap-2">
              <h3 id="sec-feed" className="fs-5 fw-bold text-title mb-0">
                Activity Feed
              </h3>
              <a href="/timeline" className="fs-md fw-medium text-brand">
                Full timeline
              </a>
            </div>
            <div className="card-body">
              <ul className="list-unstyled d-flex flex-column gap-1 mb-0">
                <li>
                  <div className="feed-row d-flex align-items-start gap-3 p-2 rounded-3">
                    <span className="feed-icon tint-emerald" aria-hidden="true">
                      <i className="icon-18" data-lucide="circle-check" />
                    </span>
                    <div className="min-w-0 flex-grow-1">
                      <p className="fs-md fw-semibold text-title mb-0">
                        Invoice
                        {" "}
                        <bdi>
                          INV-2026-0146
                        </bdi>
                        {" "}
                        paid
                      </p>
                      <p className="fs-sm text-muted-2 mb-0">
                        Lumen Systems ·
                        {" "}
                        <bdi>
                          $21,560.00
                        </bdi>
                      </p>
                    </div>
                    <span className="fs-sm text-muted-2 flex-shrink-0 text-nowrap">
                      <bdi>
                        2h
                      </bdi>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="feed-row d-flex align-items-start gap-3 p-2 rounded-3">
                    <span className="feed-icon tint-blue" aria-hidden="true">
                      <i className="icon-18" data-lucide="user-plus" />
                    </span>
                    <div className="min-w-0 flex-grow-1">
                      <p className="fs-md fw-semibold text-title mb-0">
                        Dev Sharma joined the workspace
                      </p>
                      <p className="fs-sm text-muted-2 mb-0">
                        Invited by Kabir Nair
                      </p>
                    </div>
                    <span className="fs-sm text-muted-2 flex-shrink-0 text-nowrap">
                      <bdi>
                        5h
                      </bdi>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="feed-row d-flex align-items-start gap-3 p-2 rounded-3">
                    <span className="feed-icon tint-amber" aria-hidden="true">
                      <i className="icon-18" data-lucide="triangle-alert" />
                    </span>
                    <div className="min-w-0 flex-grow-1">
                      <p className="fs-md fw-semibold text-title mb-0">
                        Storage passed
                        {" "}
                        <bdi>
                          90%
                        </bdi>
                      </p>
                      <p className="fs-sm text-muted-2 mb-0">
                        Uploads stop at the limit
                      </p>
                    </div>
                    <span className="fs-sm text-muted-2 flex-shrink-0 text-nowrap">
                      <bdi>
                        1d
                      </bdi>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="feed-row d-flex align-items-start gap-3 p-2 rounded-3">
                    <span className="feed-icon tint-violet" aria-hidden="true">
                      <i className="icon-18" data-lucide="rocket" />
                    </span>
                    <div className="min-w-0 flex-grow-1">
                      <p className="fs-md fw-semibold text-title mb-0">
                        Release
                        {" "}
                        <bdi>
                          v4.2.0
                        </bdi>
                        {" "}
                        deployed
                      </p>
                      <p className="fs-sm text-muted-2 mb-0">
                        All regions · no rollback
                      </p>
                    </div>
                    <span className="fs-sm text-muted-2 flex-shrink-0 text-nowrap">
                      <bdi>
                        2d
                      </bdi>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>
        {/* ===== Product rows ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-products">
            <div className="card-header d-flex flex-wrap align-items-center justify-content-between gap-2">
              <h3 id="sec-products" className="fs-5 fw-bold text-title mb-0">
                Top Products
              </h3>
              <div className="dropdown">
                <button
                  type="button"
                  className="btn btn-outline-soft btn-sm d-inline-flex align-items-center gap-2"
                  id="cardProductRange"
                  data-bs-toggle="dropdown"
                  data-bs-offset="0,8"
                  aria-expanded="false"
                >
                  This Month
                  {" "}
                  <i data-lucide="chevron-down" className="dd-caret icon-16" aria-hidden="true" />
                </button>
                {" "}
                <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="cardProductRange">
                  <li>
                    <button type="button" className="dropdown-item">
                      This Week
                    </button>
                  </li>
                  <li>
                    <button type="button" className="dropdown-item active" aria-current="true">
                      This Month
                    </button>
                  </li>
                  <li>
                    <button type="button" className="dropdown-item">
                      This Quarter
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card-body">
              <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                <li className="d-flex align-items-center gap-3">
                  <span className="avatar avatar-lg radius-md" aria-hidden="true">
                    <img src="/assets/images/product-2.jpg" width="56" height="56" alt="" />
                  </span>
                  <div className="min-w-0 flex-grow-1">
                    <p className="fs-md fw-semibold text-title text-truncate mb-0">
                      Structured Wool Coat
                    </p>
                    <p className="fs-sm text-muted-2 text-truncate mb-0">
                      <bdi>
                        842
                      </bdi>
                      {" "}
                      sold · Outerwear
                    </p>
                  </div>
                  <div className="flex-shrink-0 text-end">
                    <p className="fs-md fw-bold text-title mb-0">
                      <bdi>
                        $18,940
                      </bdi>
                    </p>
                    <span className="badge-soft tint-emerald">
                      <bdi>
                        +12%
                      </bdi>
                    </span>
                  </div>
                </li>
                <li className="d-flex align-items-center gap-3">
                  <span className="avatar avatar-lg radius-md" aria-hidden="true">
                    <img src="/assets/images/product-3.jpg" width="56" height="56" alt="" />
                  </span>
                  <div className="min-w-0 flex-grow-1">
                    <p className="fs-md fw-semibold text-title text-truncate mb-0">
                      Scarlet Evening Top
                    </p>
                    <p className="fs-sm text-muted-2 text-truncate mb-0">
                      <bdi>
                        614
                      </bdi>
                      {" "}
                      sold · Tops
                    </p>
                  </div>
                  <div className="flex-shrink-0 text-end">
                    <p className="fs-md fw-bold text-title mb-0">
                      <bdi>
                        $14,120
                      </bdi>
                    </p>
                    <span className="badge-soft tint-emerald">
                      <bdi>
                        +8%
                      </bdi>
                    </span>
                  </div>
                </li>
                <li className="d-flex align-items-center gap-3">
                  <span className="avatar avatar-lg radius-md" aria-hidden="true">
                    <img src="/assets/images/product-4.jpg" width="56" height="56" alt="" />
                  </span>
                  <div className="min-w-0 flex-grow-1">
                    <p className="fs-md fw-semibold text-title text-truncate mb-0">
                      Sunlit Cotton Dress
                    </p>
                    <p className="fs-sm text-muted-2 text-truncate mb-0">
                      <bdi>
                        438
                      </bdi>
                      {" "}
                      sold · Dresses
                    </p>
                  </div>
                  <div className="flex-shrink-0 text-end">
                    <p className="fs-md fw-bold text-title mb-0">
                      <bdi>
                        $6,570
                      </bdi>
                    </p>
                    <span className="badge-soft tint-rose">
                      <bdi>
                        -3%
                      </bdi>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>
        {/* ===== Capacity card ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-capacity">
            <div className="card-body d-flex flex-column">
              <div className="mb-4">
                <h3 id="sec-capacity" className="fs-5 fw-bold text-title mb-1">
                  {"Capacity & Split"}
                </h3>
                <p className="fs-md text-body-2 mb-0">
                  One bar carrying several shares. The stacked track keeps the whole allocation on a single line, with the legend underneath doing the naming.
                </p>
              </div>
              <div className="d-flex flex-wrap align-items-end justify-content-between gap-2 mb-2">
                <span className="fs-2 fw-bold text-title lh-1">
                  <bdi>
                    68.4 GB
                  </bdi>
                </span>
                <span className="fs-md text-muted-2">
                  of
                  {" "}
                  <bdi>
                    100 GB
                  </bdi>
                  {" "}
                  used
                </span>
              </div>
              <div className="progress-stacked mb-3">
                <div
                  className="progress w-50"
                  role="progressbar"
                  aria-label="Documents"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="progress-bar bg-cat-violet" />
                </div>
                <div
                  className="progress w-25"
                  role="progressbar"
                  aria-label="Media"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="progress-bar bg-cat-emerald" />
                </div>
                <div
                  className="progress w-25"
                  role="progressbar"
                  aria-label="Archives"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="progress-bar bg-cat-amber" />
                </div>
              </div>
              <ul className="list-unstyled d-flex flex-wrap gap-3 mb-4">
                <li className="d-inline-flex align-items-center gap-2 fs-md text-body-2">
                  <span className="legend-dot bg-cat-violet" aria-hidden="true" />
                  Documents
                  <span className="fw-semibold text-title">
                    <bdi>
                      34.2 GB
                    </bdi>
                  </span>
                </li>
                <li className="d-inline-flex align-items-center gap-2 fs-md text-body-2">
                  <span className="legend-dot bg-cat-emerald" aria-hidden="true" />
                  Media
                  <span className="fw-semibold text-title">
                    <bdi>
                      17.1 GB
                    </bdi>
                  </span>
                </li>
                <li className="d-inline-flex align-items-center gap-2 fs-md text-body-2">
                  <span className="legend-dot bg-cat-amber" aria-hidden="true" />
                  Archives
                  <span className="fw-semibold text-title">
                    <bdi>
                      17.1 GB
                    </bdi>
                  </span>
                </li>
              </ul>
              <div className="d-flex flex-wrap gap-2 mt-auto">
                <button type="button" className="btn btn-primary btn-sm">
                  Upgrade storage
                </button>
                <button type="button" className="btn btn-outline-soft btn-sm">
                  Manage files
                </button>
              </div>
            </div>
          </section>
        </div>
        {/* ===== Welcome banner ===== */}
        <div className="col-12">
          <section
            className="card on-dark bg-grad-theme mb-0 overflow-hidden position-relative"
            aria-labelledby="sec-welcome"
          >
            <span className="corner-orb position-absolute rounded-circle text-accent" aria-hidden="true" />
            <div className="card-body position-relative">
              <div className="row align-items-center g-4">
                <div className="col-12 col-lg-7">
                  <span className="badge-soft d-inline-flex align-items-center gap-2 mb-3">
                    {" "}
                    <i className="icon-14" data-lucide="sparkles" aria-hidden="true" />
                    {" "}
                    <span>
                      Monday,
                      {" "}
                      <bdi>
                        3 September
                      </bdi>
                    </span>
                    {" "}
                  </span>
                  <h3 id="sec-welcome" className="fs-2 fw-bold text-title mb-2">
                    Welcome back, Ravisha
                  </h3>
                  <p className="fs-lg text-primary measure-lg mb-4">
                    Revenue is
                    {" "}
                    <bdi>
                      6.1%
                    </bdi>
                    {" "}
                    ahead of target and two approvals are waiting on you. Everything else is running clean.
                  </p>
                  <div className="d-flex flex-wrap align-items-center gap-2">
                    <button type="button" className="btn btn-accent d-inline-flex align-items-center gap-2">
                      Review approvals
                      <i className="icon-18 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                    </button>
                    <button type="button" className="btn btn-accent-ghost">
                      View report
                    </button>
                  </div>
                </div>
                <div className="col-12 col-lg-5">
                  <ul className="list-unstyled row row-cols-2 g-3 mb-0">
                    <li className="col">
                      <div className="bg-glass rounded-4 p-3 h-100">
                        <p className="fs-sm text-primary mb-1">
                          Revenue
                        </p>
                        <p className="fs-4 fw-bold text-title lh-1 mb-0">
                          <bdi>
                            $84.3K
                          </bdi>
                        </p>
                      </div>
                    </li>
                    <li className="col">
                      <div className="bg-glass rounded-4 p-3 h-100">
                        <p className="fs-sm text-primary mb-1">
                          Open deals
                        </p>
                        <p className="fs-4 fw-bold text-title lh-1 mb-0">
                          <bdi>
                            36
                          </bdi>
                        </p>
                      </div>
                    </li>
                    <li className="col">
                      <div className="bg-glass rounded-4 p-3 h-100">
                        <p className="fs-sm text-primary mb-1">
                          Tasks due
                        </p>
                        <p className="fs-4 fw-bold text-title lh-1 mb-0">
                          <bdi>
                            12
                          </bdi>
                        </p>
                      </div>
                    </li>
                    <li className="col">
                      <div className="bg-glass rounded-4 p-3 h-100">
                        <p className="fs-sm text-primary mb-1">
                          New leads
                        </p>
                        <p className="fs-4 fw-bold text-title lh-1 mb-0">
                          <bdi>
                            48
                          </bdi>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <img
              src="/assets/images/rocket-b.svg"
              width="140"
              height="140"
              alt=""
              className="card-art position-absolute bottom-0 d-none d-xl-block pe-none"
            />
          </section>
        </div>
      </div>
      <div className="row g-3 g-xl-4 mt-4">
        {/* ===== Basic Card ===== */}
        <div className="col-12 col-md-6 col-xl-4">
          <section className="card h-100 mb-0" aria-labelledby="sec-basic">
            <div className="card-header d-flex flex-wrap align-items-center justify-content-between gap-2">
              <h3 id="sec-basic" className="fs-5 fw-bold text-title mb-0">
                Basic Card
              </h3>
              <span className="badge-soft tint-primary text-nowrap">
                Default
              </span>
            </div>
            <div className="card-body">
              <p className="fs-md text-body-2 mb-3">
                Header, body and footer — the plain three-part card every other variant on this page is built from. Radius, border and shadow all come from the theme, so a card restyles itself with the palette rather than needing its own rules.
              </p>
              <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                <li className="d-flex align-items-center gap-2 fs-md text-body-2">
                  <i className="icon-16 text-muted-2" data-lucide="panel-top" aria-hidden="true" />
                  <code>
                    card-header
                  </code>
                  — title and controls
                </li>
                <li className="d-flex align-items-center gap-2 fs-md text-body-2">
                  <i className="icon-16 text-muted-2" data-lucide="align-left" aria-hidden="true" />
                  <code>
                    card-body
                  </code>
                  — the content itself
                </li>
                <li className="d-flex align-items-center gap-2 fs-md text-body-2">
                  <i className="icon-16 text-muted-2" data-lucide="panel-bottom" aria-hidden="true" />
                  <code>
                    card-footer
                  </code>
                  — meta and actions
                </li>
              </ul>
            </div>
            <div className="card-footer d-flex flex-wrap align-items-center justify-content-between gap-2">
              <span className="fs-sm text-muted-2">
                Updated
                {" "}
                <bdi>
                  2 hours ago
                </bdi>
              </span>
              <button type="button" className="btn btn-ghost btn-sm">
                View
              </button>
            </div>
          </section>
        </div>
        {/* ===== Media Card ===== */}
        <div className="col-12 col-md-6 col-xl-4">
          <section className="card h-100 mb-0 overflow-hidden" aria-labelledby="sec-media">
            <div className="ratio ratio-16x9">
              <img
                src="/assets/images/product-1.jpg"
                width="640"
                height="360"
                alt=""
                className="object-fit-cover pe-none"
              />
            </div>
            <div className="card-body">
              <h3 id="sec-media" className="fs-5 fw-bold text-title mb-1">
                Media Card
              </h3>
              <p className="fs-md text-body-2 mb-3">
                A fixed
                {" "}
                <code>
                  ratio
                </code>
                {" "}
                box keeps every thumbnail the same height, whatever the source image measures.
              </p>
              <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                <span className="fs-lg fw-bold text-title">
                  <bdi>
                    $249.00
                  </bdi>
                </span>
                <button type="button" className="btn btn-primary-soft btn-sm rounded-pill">
                  Add to cart
                </button>
              </div>
            </div>
          </section>
        </div>
        {/* ===== Statistic Card ===== */}
        <div className="col-12 col-md-6 col-xl-4">
          <section className="card h-100 mb-0" aria-labelledby="sec-stat">
            <div className="card-body">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <span className="icon-box icon-box-lg tint-emerald" aria-hidden="true">
                  <i data-lucide="trending-up" />
                </span>
                <button
                  type="button"
                  className="btn btn-ghost btn-18 rounded-circle"
                  aria-label="Revenue options"
                  title="Options"
                >
                  <i className="icon-18" data-lucide="ellipsis-vertical" aria-hidden="true" />
                </button>
              </div>
              <h3 id="sec-stat" className="fs-md fw-semibold text-muted-2 text-uppercase mb-1">
                Total Revenue
              </h3>
              <p className="fs-2 fw-bold text-title lh-1 mb-2">
                <bdi>
                  $84,320
                </bdi>
              </p>
              <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
                <span className="badge-soft tint-emerald d-inline-flex align-items-center gap-1">
                  {" "}
                  <i className="icon-12" data-lucide="arrow-up-right" aria-hidden="true" />
                  <bdi>
                    12.4%
                  </bdi>
                  {" "}
                </span>
                <span className="fs-sm text-muted-2">
                  vs last month
                </span>
              </div>
              <div className="divider-fade mb-3" aria-hidden="true" />
              <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                <li className="d-flex align-items-center justify-content-between gap-2">
                  <span className="d-inline-flex align-items-center gap-2 fs-md text-body-2">
                    <span className="legend-dot bg-cat-violet" aria-hidden="true" />
                    Subscriptions
                  </span>
                  <span className="fs-md fw-semibold text-title">
                    <bdi>
                      $52,180
                    </bdi>
                  </span>
                </li>
                <li className="d-flex align-items-center justify-content-between gap-2">
                  <span className="d-inline-flex align-items-center gap-2 fs-md text-body-2">
                    <span className="legend-dot bg-cat-emerald" aria-hidden="true" />
                    Licences
                  </span>
                  <span className="fs-md fw-semibold text-title">
                    <bdi>
                      $21,940
                    </bdi>
                  </span>
                </li>
                <li className="d-flex align-items-center justify-content-between gap-2">
                  <span className="d-inline-flex align-items-center gap-2 fs-md text-body-2">
                    <span className="legend-dot bg-cat-amber" aria-hidden="true" />
                    Services
                  </span>
                  <span className="fs-md fw-semibold text-title">
                    <bdi>
                      $10,200
                    </bdi>
                  </span>
                </li>
              </ul>
            </div>
            <div className="card-footer d-flex flex-wrap align-items-center justify-content-between gap-2">
              <span className="fs-sm text-muted-2">
                Closed
                {" "}
                <bdi>
                  31 August 2026
                </bdi>
              </span>
              <a href="#" className="fs-md fw-medium text-brand">
                Full report
              </a>
            </div>
            <span className="accent-edge-b text-cat-emerald" aria-hidden="true" />
          </section>
        </div>
        {/* ===== Profile Card ===== */}
        <div className="col-12 col-md-6 col-xl-4">
          <section className="card h-100 mb-0 text-center" aria-labelledby="sec-profile">
            <div className="card-body">
              <span className="avatar avatar-xl mx-auto mb-3">
                <img src="/assets/images/avatar-2.png" width="72" height="72" alt="" />
                <span className="avatar-status" aria-hidden="true" />
              </span>
              <h3 id="sec-profile" className="fs-5 fw-bold text-title mb-1">
                Meera Iyer
              </h3>
              <p className="fs-md text-muted-2 mb-3">
                Lead Product Designer
              </p>
              <div className="d-flex justify-content-center gap-4 mb-3">
                <div>
                  <p className="fs-lg fw-bold text-title mb-0">
                    <bdi>
                      128
                    </bdi>
                  </p>
                  <p className="fs-sm text-muted-2 mb-0">
                    Projects
                  </p>
                </div>
                <div>
                  <p className="fs-lg fw-bold text-title mb-0">
                    <bdi>
                      2.4k
                    </bdi>
                  </p>
                  <p className="fs-sm text-muted-2 mb-0">
                    Followers
                  </p>
                </div>
                <div>
                  <p className="fs-lg fw-bold text-title mb-0">
                    <bdi>
                      96%
                    </bdi>
                  </p>
                  <p className="fs-sm text-muted-2 mb-0">
                    Rating
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-center gap-2">
                <button type="button" className="btn btn-primary btn-sm rounded-pill">
                  Follow
                </button>
                <button type="button" className="btn btn-outline-soft btn-sm rounded-pill">
                  Message
                </button>
              </div>
            </div>
          </section>
        </div>
        {/* ===== List Card ===== */}
        <div className="col-12 col-md-6 col-xl-4">
          <section className="card h-100 mb-0" aria-labelledby="sec-list">
            <div className="card-header d-flex flex-wrap align-items-center justify-content-between gap-2">
              <h3 id="sec-list" className="fs-5 fw-bold text-title mb-0">
                Team Activity
              </h3>
              <a href="#" className="fs-md fw-medium text-brand">
                See all
              </a>
            </div>
            <div className="card-body">
              <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                <li className="d-flex align-items-center gap-3">
                  <span className="avatar avatar-sm">
                    <img src="/assets/images/avatar-1.png" width="32" height="32" alt="" />
                  </span>
                  <div className="min-w-0 flex-grow-1">
                    <p className="fs-md fw-semibold text-title text-truncate mb-0">
                      Kabir Nair
                    </p>
                    <p className="fs-sm text-muted-2 text-truncate mb-0">
                      Shipped the billing rewrite
                    </p>
                  </div>
                  <span className="badge-soft tint-emerald text-nowrap">
                    Done
                  </span>
                </li>
                <li className="d-flex align-items-center gap-3">
                  <span className="avatar avatar-sm">
                    <img src="/assets/images/avatar-3.png" width="32" height="32" alt="" />
                  </span>
                  <div className="min-w-0 flex-grow-1">
                    <p className="fs-md fw-semibold text-title text-truncate mb-0">
                      Nisha Bose
                    </p>
                    <p className="fs-sm text-muted-2 text-truncate mb-0">
                      Reviewing the icon set
                    </p>
                  </div>
                  <span className="badge-soft tint-amber text-nowrap">
                    Review
                  </span>
                </li>
                <li className="d-flex align-items-center gap-3">
                  <span className="avatar avatar-sm">
                    <img src="/assets/images/avatar-4.png" width="32" height="32" alt="" />
                  </span>
                  <div className="min-w-0 flex-grow-1">
                    <p className="fs-md fw-semibold text-title text-truncate mb-0">
                      Dev Sharma
                    </p>
                    <p className="fs-sm text-muted-2 text-truncate mb-0">
                      Blocked on API access
                    </p>
                  </div>
                  <span className="badge-soft tint-rose text-nowrap">
                    Blocked
                  </span>
                </li>
              </ul>
            </div>
          </section>
        </div>
        {/* ===== Progress Card ===== */}
        <div className="col-12 col-md-6 col-xl-4">
          <section className="card h-100 mb-0" aria-labelledby="sec-progress">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-center gap-3 mb-3">
                <span className="icon-box icon-box-lg tint-violet" aria-hidden="true">
                  <i data-lucide="target" />
                </span>
                <div className="min-w-0">
                  <h3 id="sec-progress" className="fs-5 fw-bold text-title mb-0">
                    Quarterly Goal
                  </h3>
                  <p className="fs-sm text-muted-2 mb-0">
                    Closes
                    {" "}
                    <bdi>
                      31 December
                    </bdi>
                  </p>
                </div>
              </div>
              <p className="fs-md text-body-2 mb-3">
                Three of four milestones are signed off. The last one is waiting on the security review.
              </p>
              <div className="d-flex align-items-center justify-content-between gap-2 mb-2">
                <span className="fs-md fw-semibold text-title">
                  Progress
                </span>
                <span className="fs-md fw-semibold text-title">
                  <bdi>
                    75%
                  </bdi>
                </span>
              </div>
              <div
                className="progress progress-sm mb-3"
                role="progressbar"
                aria-label="Quarterly goal progress"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div className="progress-bar w-75" />
              </div>
              <div className="d-flex flex-wrap align-items-center gap-2 mt-auto">
                <span className="avatar-stack d-inline-flex" aria-hidden="true">
                  <span className="avatar avatar-xs">
                    <img src="/assets/images/avatar-1.png" width="24" height="24" alt="" />
                  </span>
                  <span className="avatar avatar-xs">
                    <img src="/assets/images/avatar-2.png" width="24" height="24" alt="" />
                  </span>
                  <span className="avatar avatar-xs">
                    <img src="/assets/images/avatar-3.png" width="24" height="24" alt="" />
                  </span>
                </span>
                <span className="fs-sm text-muted-2">
                  <bdi>
                    6 people
                  </bdi>
                  {" "}
                  on this goal
                </span>
              </div>
            </div>
          </section>
        </div>
        {/* ===== Horizontal Card ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0 overflow-hidden" aria-labelledby="sec-horizontal">
            <div className="row g-0 h-100">
              <div className="col-4 col-sm-5">
                <div className="ratio ratio-1x1 h-100">
                  <img
                    src="/assets/images/inventory-3.jpg"
                    width="480"
                    height="480"
                    alt=""
                    className="object-fit-cover pe-none"
                  />
                </div>
              </div>
              <div className="col-8 col-sm-7">
                <div className="card-body h-100 d-flex flex-column">
                  <span className="badge-soft tint-cyan align-self-start mb-2">
                    Warehouse
                  </span>
                  <h3 id="sec-horizontal" className="fs-5 fw-bold text-title mb-1">
                    Horizontal Card
                  </h3>
                  <p className="fs-md text-body-2 mb-3">
                    Image and copy side by side, stacking sensibly on the narrowest screens. Built with the grid rather than a bespoke layout.
                  </p>
                  <div className="d-flex flex-wrap align-items-center gap-2 mt-auto">
                    <span className="fs-md fw-semibold text-title">
                      <bdi>
                        842 units
                      </bdi>
                    </span>
                    <span className="fs-sm text-muted-2">
                      · Aisle
                      {" "}
                      <bdi>
                        C4
                      </bdi>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* ===== Feature Card ===== */}
        <div className="col-12 col-xl-6">
          <section
            className="card on-dark bg-grad-theme h-100 mb-0 overflow-hidden position-relative"
            aria-labelledby="sec-feature"
          >
            <span className="corner-orb position-absolute rounded-circle text-accent" aria-hidden="true" />
            <div className="card-body d-flex flex-column position-relative">
              <span className="badge-soft align-self-start mb-3">
                Pro plan
              </span>
              <h3 id="sec-feature" className="fs-3 fw-bold text-title mb-2">
                Unlock advanced analytics
              </h3>
              <p className="fs-lg text-primary measure-sm mb-4">
                Cohort retention, funnel breakdowns and exportable reports — on every dashboard in the suite.
              </p>
              <div className="d-flex flex-wrap align-items-center gap-2 mt-auto">
                <button type="button" className="btn btn-accent d-inline-flex align-items-center gap-2">
                  Upgrade now
                  <i className="icon-18 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                </button>
                <button type="button" className="btn btn-accent-ghost">
                  Compare plans
                </button>
              </div>
            </div>
            <img
              src="/assets/images/rocket-a.svg"
              width="140"
              height="140"
              alt=""
              className="card-art position-absolute bottom-0 d-none d-sm-block pe-none"
            />
          </section>
        </div>
        {/* ===== Overlay Card ===== */}
        <div className="col-12 col-md-6 col-xl-4">
          <section className="card h-100 mb-0 overflow-hidden" aria-labelledby="sec-overlay">
            <div className="card-body p-3">
              <div className="ratio ratio-4x3 rounded-4 overflow-hidden position-relative">
                <img
                  src="/assets/images/news-ethereum.jpg"
                  width="640"
                  height="480"
                  alt=""
                  className="object-fit-cover pe-none"
                />
                {" "}
                <span className="media-scrim" aria-hidden="true" />
              </div>
              <div className="mt-3">
                <span className="badge-soft tint-violet mb-2">
                  Market
                </span>
                <h3 id="sec-overlay" className="fs-5 fw-bold text-title mb-1">
                  Overlay Media
                </h3>
                <p className="fs-md text-body-2 mb-0">
                  A scrim over the artwork keeps captions legible whatever the photo behind it happens to be.
                </p>
              </div>
            </div>
          </section>
        </div>
        {/* ===== Pricing Card ===== */}
        <div className="col-12 col-md-6 col-xl-4">
          <section className="card ring-primary h-100 mb-0" aria-labelledby="sec-pricing">
            <div className="card-body d-flex flex-column">
              <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                <h3 id="sec-pricing" className="fs-5 fw-bold text-title mb-0">
                  Business
                </h3>
                <span className="badge-soft tint-primary text-nowrap">
                  Most popular
                </span>
              </div>
              <p className="mb-1">
                <span className="fs-2 fw-bold text-title lh-1">
                  <bdi>
                    $49
                  </bdi>
                </span>
                {" "}
                <span className="fs-md text-muted-2">
                  / month
                </span>
              </p>
              <p className="fs-sm text-muted-2 mb-3">
                Billed annually, per workspace
              </p>
              <ul className="list-unstyled d-flex flex-column gap-2 mb-4">
                <li className="d-flex align-items-center gap-2 fs-md text-body-2">
                  <i className="icon-16 text-success" data-lucide="check" aria-hidden="true" />
                  Unlimited dashboards
                </li>
                <li className="d-flex align-items-center gap-2 fs-md text-body-2">
                  <i className="icon-16 text-success" data-lucide="check" aria-hidden="true" />
                  <bdi>
                    25
                  </bdi>
                  team seats
                </li>
                <li className="d-flex align-items-center gap-2 fs-md text-body-2">
                  <i className="icon-16 text-success" data-lucide="check" aria-hidden="true" />
                  Priority support
                </li>
              </ul>
              <button type="button" className="btn btn-primary w-100 mt-auto">
                Choose Business
              </button>
            </div>
          </section>
        </div>
        {/* ===== Tabbed Card ===== */}
        <div className="col-12 col-md-6 col-xl-4">
          <section className="card h-100 mb-0" aria-labelledby="sec-tabbed">
            <div className="card-header">
              <h3 id="sec-tabbed" className="fs-5 fw-bold text-title mb-2">
                Tabbed Card
              </h3>
              <ul className="nav nav-pills gap-1" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    type="button"
                    className="nav-link active fw-semibold"
                    id="cardTabWeek"
                    data-bs-toggle="tab"
                    data-bs-target="#cardPaneWeek"
                    role="tab"
                    aria-controls="cardPaneWeek"
                    aria-selected="true"
                  >
                    Week
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    type="button"
                    className="nav-link fw-semibold"
                    id="cardTabMonth"
                    data-bs-toggle="tab"
                    data-bs-target="#cardPaneMonth"
                    role="tab"
                    aria-controls="cardPaneMonth"
                    aria-selected="false"
                  >
                    Month
                  </button>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="cardPaneWeek"
                  role="tabpanel"
                  aria-labelledby="cardTabWeek"
                  tabIndex="0"
                >
                  <p className="fs-2 fw-bold text-title lh-1 mb-1">
                    <bdi>
                      1,284
                    </bdi>
                  </p>
                  <p className="fs-md text-body-2 mb-3">
                    Sessions in the last seven days, up
                    {" "}
                    <bdi>
                      8.2%
                    </bdi>
                    {" "}
                    on the week before.
                  </p>
                  <dl className="row g-2 mb-0">
                    <dt className="col-7 fs-md text-muted-2 fw-normal">
                      New visitors
                    </dt>
                    <dd className="col-5 fs-md fw-semibold text-title text-end mb-0">
                      <bdi>
                        612
                      </bdi>
                    </dd>
                    <dt className="col-7 fs-md text-muted-2 fw-normal">
                      Returning
                    </dt>
                    <dd className="col-5 fs-md fw-semibold text-title text-end mb-0">
                      <bdi>
                        672
                      </bdi>
                    </dd>
                    <dt className="col-7 fs-md text-muted-2 fw-normal">
                      Average duration
                    </dt>
                    <dd className="col-5 fs-md fw-semibold text-title text-end mb-0">
                      <bdi>
                        4m 12s
                      </bdi>
                    </dd>
                  </dl>
                </div>
                {" "}
                <div
                  className="tab-pane fade"
                  id="cardPaneMonth"
                  role="tabpanel"
                  aria-labelledby="cardTabMonth"
                  tabIndex="0"
                >
                  <p className="fs-2 fw-bold text-title lh-1 mb-1">
                    <bdi>
                      5,916
                    </bdi>
                  </p>
                  <p className="fs-md text-body-2 mb-3">
                    Sessions this month, the strongest since the spring campaign.
                  </p>
                  <dl className="row g-2 mb-0">
                    <dt className="col-7 fs-md text-muted-2 fw-normal">
                      New visitors
                    </dt>
                    <dd className="col-5 fs-md fw-semibold text-title text-end mb-0">
                      <bdi>
                        2,845
                      </bdi>
                    </dd>
                    <dt className="col-7 fs-md text-muted-2 fw-normal">
                      Returning
                    </dt>
                    <dd className="col-5 fs-md fw-semibold text-title text-end mb-0">
                      <bdi>
                        3,071
                      </bdi>
                    </dd>
                    <dt className="col-7 fs-md text-muted-2 fw-normal">
                      Average duration
                    </dt>
                    <dd className="col-5 fs-md fw-semibold text-title text-end mb-0">
                      <bdi>
                        3m 58s
                      </bdi>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* ===== Interactive Cards ===== */}
        <div className="col-12">
          <section className="card mb-0" aria-labelledby="sec-interactive">
            <div className="card-body">
              <div className="mb-4">
                <h3 id="sec-interactive" className="fs-5 fw-bold text-title mb-1">
                  Selectable Tiles
                </h3>
                <p className="fs-md text-body-2 mb-0">
                  Lighter than a card and built to be clicked — the pattern used for pickers, plan choosers and quick actions.
                  {" "}
                  <code>
                    hover-lift
                  </code>
                  {" "}
                  supplies the raise.
                </p>
              </div>
              <ul className="list-unstyled row row-cols-1 row-cols-sm-2 row-cols-xl-4 g-3 mb-0">
                <li className="col">
                  <button
                    type="button"
                    className="tile-plain hover-lift border-soft rounded-4 p-3 w-100 h-100 d-flex flex-column align-items-start gap-2 text-start transition-base"
                  >
                    <span className="icon-box tint-primary" aria-hidden="true">
                      <i data-lucide="zap" />
                    </span>
                    <span className="fs-md fw-semibold text-title">
                      Automations
                    </span>
                    <span className="fs-sm text-muted-2">
                      Trigger work from any event
                    </span>
                  </button>
                </li>
                <li className="col">
                  <button
                    type="button"
                    className="tile-plain hover-lift border-soft rounded-4 p-3 w-100 h-100 d-flex flex-column align-items-start gap-2 text-start transition-base"
                  >
                    <span className="icon-box tint-violet" aria-hidden="true">
                      <i data-lucide="users-round" />
                    </span>
                    <span className="fs-md fw-semibold text-title">
                      Audiences
                    </span>
                    <span className="fs-sm text-muted-2">
                      Group people by behaviour
                    </span>
                  </button>
                </li>
                <li className="col">
                  <button
                    type="button"
                    className="tile-plain hover-lift border-soft rounded-4 p-3 w-100 h-100 d-flex flex-column align-items-start gap-2 text-start transition-base"
                  >
                    <span className="icon-box tint-amber" aria-hidden="true">
                      <i data-lucide="bell-ring" />
                    </span>
                    <span className="fs-md fw-semibold text-title">
                      Alerting
                    </span>
                    <span className="fs-sm text-muted-2">
                      Notify the right on-call
                    </span>
                  </button>
                </li>
                <li className="col">
                  <button
                    type="button"
                    className="tile-soft hover-lift border-soft rounded-4 p-3 w-100 h-100 d-flex flex-column align-items-start gap-2 text-start transition-base"
                  >
                    <span className="icon-box tint-emerald" aria-hidden="true">
                      <i data-lucide="plug" />
                    </span>
                    <span className="fs-md fw-semibold text-title">
                      Integrations
                    </span>
                    <span className="fs-sm text-muted-2">
                      Connect the rest of the stack
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
      {/* ========== FOOTER ========== */}
    </AppShell>
  );
}

/* Generated from the Vionex HTML theme by scripts/convert-html.mjs */
import AppShell from "@/components/AppShell";

export const metadata = {
  title: "Vionex — Chart.js",
  description: "Vionex Chart.js showcase — line, bar, pie, doughnut, polar area, radar, bubble, scatter and mixed plots, themed from the design-system CSS variables.",
};

const scripts = [
    "/assets/js/jquery.min.js",
    "/assets/js/bootstrap.bundle.min.js",
    "/assets/js/lucide.min.js",
    "/assets/js/chart.umd.min.js",
    "/assets/js/dashboard.js",
    "/assets/js/chartjstheme.js",
  ];

export default function Page() {
  return (
    <AppShell
      scripts={scripts}
    >
      {/* ===== Page header ===== */}
      <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
        <h1 className="fs-4 fw-bold text-title mb-0">
          Chart.js
        </h1>
        <nav aria-label="breadcrumb" className="d-none d-md-block">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="/">
                Dashboard
              </a>
            </li>
            <li className="breadcrumb-item">
              Charts
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Chart.js
            </li>
          </ol>
        </nav>
      </div>
      {/* ===== Chart-type filter rail =====
         .sticky-toolbar pins it to the top of .app-content, spanning the
         scroller's own padding so no card shows above it; bg-app covers
         what passes behind. d-inline-flex + mw-100 keeps the first pill
         from being clipped once the rail itself overflows. */}
      <div className="position-sticky sticky-toolbar z-2 bg-app pb-2 mb-3 mb-xl-4">
        <div
          className="nav nav-pills seg-toggle d-inline-flex flex-nowrap gap-1 p-1 mw-100 rounded-pill bg-soft overflow-x-auto scrollbar-none"
          role="group"
          aria-label="Filter charts by type"
          data-chart-tabs=""
        >
          <button
            type="button"
            className="nav-link active fw-semibold text-nowrap"
            data-filter="all"
            aria-pressed="true"
          >
            All Charts
          </button>
          <button type="button" className="nav-link fw-semibold text-nowrap" data-filter="line" aria-pressed="false">
            Line
          </button>
          <button type="button" className="nav-link fw-semibold text-nowrap" data-filter="bar" aria-pressed="false">
            Bar
          </button>
          <button type="button" className="nav-link fw-semibold text-nowrap" data-filter="pie" aria-pressed="false">
            Pie
          </button>
          <button
            type="button"
            className="nav-link fw-semibold text-nowrap"
            data-filter="doughnut"
            aria-pressed="false"
          >
            Doughnut
          </button>
          <button type="button" className="nav-link fw-semibold text-nowrap" data-filter="polar" aria-pressed="false">
            Polar Area
          </button>
          <button type="button" className="nav-link fw-semibold text-nowrap" data-filter="radar" aria-pressed="false">
            Radar
          </button>
          <button type="button" className="nav-link fw-semibold text-nowrap" data-filter="bubble" aria-pressed="false">
            Bubble
          </button>
          <button type="button" className="nav-link fw-semibold text-nowrap" data-filter="scatter" aria-pressed="false">
            Scatter
          </button>
          <button type="button" className="nav-link fw-semibold text-nowrap" data-filter="mixed" aria-pressed="false">
            Mixed
          </button>
        </div>
      </div>
      {/* ===== Chart card grid ===== */}
      <div className="row g-3 g-xl-4" data-chart-grid="">
        {/* Line */}
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="line">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-cjLineBasic">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-cjLineBasic" className="fs-5 fw-bold text-title mb-1">
                    Basic Line
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Single-series monthly trend.
                  </p>
                </div>
                <div className="d-flex align-items-center gap-1 flex-shrink-0">
                  <button
                    type="button"
                    className="btn btn-ghost btn-18 rounded-circle"
                    data-chart-export="png"
                    aria-label="Download chart"
                    title="Download chart (PNG)"
                  >
                    <i data-lucide="download" aria-hidden="true" />
                  </button>
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn btn-ghost btn-18 rounded-circle"
                      data-bs-toggle="dropdown"
                      data-bs-offset="0,8"
                      data-dd-fixed=""
                      aria-expanded="false"
                      aria-label="Chart options"
                    >
                      <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                    </button>
                    {" "}
                    <ul className="dropdown-menu dropdown-menu-end p-2">
                      <li>
                        <a className="dropdown-item" href="#" data-chart-refresh="">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="chart-canvas mt-auto">
                <canvas id="cjLineBasic" />
              </div>
            </div>
          </article>
        </div>
        {/* Multi Line */}
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="line">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-cjLineMulti">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-cjLineMulti" className="fs-5 fw-bold text-title mb-1">
                    Multi Line
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Compare several series at once.
                  </p>
                </div>
                <div className="d-flex align-items-center gap-1 flex-shrink-0">
                  <button
                    type="button"
                    className="btn btn-ghost btn-18 rounded-circle"
                    data-chart-export="png"
                    aria-label="Download chart"
                    title="Download chart (PNG)"
                  >
                    <i data-lucide="download" aria-hidden="true" />
                  </button>
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn btn-ghost btn-18 rounded-circle"
                      data-bs-toggle="dropdown"
                      data-bs-offset="0,8"
                      data-dd-fixed=""
                      aria-expanded="false"
                      aria-label="Chart options"
                    >
                      <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                    </button>
                    {" "}
                    <ul className="dropdown-menu dropdown-menu-end p-2">
                      <li>
                        <a className="dropdown-item" href="#" data-chart-refresh="">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="chart-canvas mt-auto">
                <canvas id="cjLineMulti" />
              </div>
            </div>
          </article>
        </div>
        {/* Gradient Line */}
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="line">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-cjLineGradient">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-cjLineGradient" className="fs-5 fw-bold text-title mb-1">
                    Gradient Line
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Stroke fades through a vertical gradient.
                  </p>
                </div>
                <div className="d-flex align-items-center gap-1 flex-shrink-0">
                  <button
                    type="button"
                    className="btn btn-ghost btn-18 rounded-circle"
                    data-chart-export="png"
                    aria-label="Download chart"
                    title="Download chart (PNG)"
                  >
                    <i data-lucide="download" aria-hidden="true" />
                  </button>
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn btn-ghost btn-18 rounded-circle"
                      data-bs-toggle="dropdown"
                      data-bs-offset="0,8"
                      data-dd-fixed=""
                      aria-expanded="false"
                      aria-label="Chart options"
                    >
                      <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                    </button>
                    {" "}
                    <ul className="dropdown-menu dropdown-menu-end p-2">
                      <li>
                        <a className="dropdown-item" href="#" data-chart-refresh="">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="chart-canvas mt-auto">
                <canvas id="cjLineGradient" />
              </div>
            </div>
          </article>
        </div>
        {/* Area */}
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="line">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-cjArea">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-cjArea" className="fs-5 fw-bold text-title mb-1">
                    Area
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Filled line with a soft gradient body.
                  </p>
                </div>
                <div className="d-flex align-items-center gap-1 flex-shrink-0">
                  <button
                    type="button"
                    className="btn btn-ghost btn-18 rounded-circle"
                    data-chart-export="png"
                    aria-label="Download chart"
                    title="Download chart (PNG)"
                  >
                    <i data-lucide="download" aria-hidden="true" />
                  </button>
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn btn-ghost btn-18 rounded-circle"
                      data-bs-toggle="dropdown"
                      data-bs-offset="0,8"
                      data-dd-fixed=""
                      aria-expanded="false"
                      aria-label="Chart options"
                    >
                      <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                    </button>
                    {" "}
                    <ul className="dropdown-menu dropdown-menu-end p-2">
                      <li>
                        <a className="dropdown-item" href="#" data-chart-refresh="">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="chart-canvas mt-auto">
                <canvas id="cjArea" />
              </div>
            </div>
          </article>
        </div>
        {/* Realtime Demo */}
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="line">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-cjLineRealtime">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-cjLineRealtime" className="fs-5 fw-bold text-title mb-1">
                    Realtime Demo
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Live feed updating every 2.5s.
                  </p>
                </div>
                <div className="d-flex align-items-center gap-1 flex-shrink-0">
                  <span className="badge-soft d-inline-flex align-items-center gap-1">
                    <span className="pulse-dot" />
                    Live
                  </span>
                  <button
                    type="button"
                    className="btn btn-ghost btn-18 rounded-circle"
                    data-chart-export="png"
                    aria-label="Download chart"
                    title="Download chart (PNG)"
                  >
                    <i data-lucide="download" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="chart-canvas mt-auto">
                <canvas id="cjLineRealtime" />
              </div>
            </div>
          </article>
        </div>
        {/* Bar */}
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="bar">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-cjBar">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-cjBar" className="fs-5 fw-bold text-title mb-1">
                    Bar
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Vertical single-series columns.
                  </p>
                </div>
                <div className="d-flex align-items-center gap-1 flex-shrink-0">
                  <button
                    type="button"
                    className="btn btn-ghost btn-18 rounded-circle"
                    data-chart-export="png"
                    aria-label="Download chart"
                    title="Download chart (PNG)"
                  >
                    <i data-lucide="download" aria-hidden="true" />
                  </button>
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn btn-ghost btn-18 rounded-circle"
                      data-bs-toggle="dropdown"
                      data-bs-offset="0,8"
                      data-dd-fixed=""
                      aria-expanded="false"
                      aria-label="Chart options"
                    >
                      <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                    </button>
                    {" "}
                    <ul className="dropdown-menu dropdown-menu-end p-2">
                      <li>
                        <a className="dropdown-item" href="#" data-chart-refresh="">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="chart-canvas mt-auto">
                <canvas id="cjBar" />
              </div>
            </div>
          </article>
        </div>
        {/* Horizontal Bar */}
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="bar">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-cjBarHorizontal">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-cjBarHorizontal" className="fs-5 fw-bold text-title mb-1">
                    Horizontal Bar
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Ranked categories, left to right.
                  </p>
                </div>
                <div className="d-flex align-items-center gap-1 flex-shrink-0">
                  <button
                    type="button"
                    className="btn btn-ghost btn-18 rounded-circle"
                    data-chart-export="png"
                    aria-label="Download chart"
                    title="Download chart (PNG)"
                  >
                    <i data-lucide="download" aria-hidden="true" />
                  </button>
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn btn-ghost btn-18 rounded-circle"
                      data-bs-toggle="dropdown"
                      data-bs-offset="0,8"
                      data-dd-fixed=""
                      aria-expanded="false"
                      aria-label="Chart options"
                    >
                      <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                    </button>
                    {" "}
                    <ul className="dropdown-menu dropdown-menu-end p-2">
                      <li>
                        <a className="dropdown-item" href="#" data-chart-refresh="">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="chart-canvas mt-auto">
                <canvas id="cjBarHorizontal" />
              </div>
            </div>
          </article>
        </div>
        {/* Stacked */}
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="bar">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-cjBarStacked">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-cjBarStacked" className="fs-5 fw-bold text-title mb-1">
                    Stacked
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Segments summed per category.
                  </p>
                </div>
                <div className="d-flex align-items-center gap-1 flex-shrink-0">
                  <button
                    type="button"
                    className="btn btn-ghost btn-18 rounded-circle"
                    data-chart-export="png"
                    aria-label="Download chart"
                    title="Download chart (PNG)"
                  >
                    <i data-lucide="download" aria-hidden="true" />
                  </button>
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn btn-ghost btn-18 rounded-circle"
                      data-bs-toggle="dropdown"
                      data-bs-offset="0,8"
                      data-dd-fixed=""
                      aria-expanded="false"
                      aria-label="Chart options"
                    >
                      <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                    </button>
                    {" "}
                    <ul className="dropdown-menu dropdown-menu-end p-2">
                      <li>
                        <a className="dropdown-item" href="#" data-chart-refresh="">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="chart-canvas mt-auto">
                <canvas id="cjBarStacked" />
              </div>
            </div>
          </article>
        </div>
        {/* Floating Bar */}
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="bar">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-cjBarFloating">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-cjBarFloating" className="fs-5 fw-bold text-title mb-1">
                    Floating Bar
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Bars spanning a low–high range.
                  </p>
                </div>
                <div className="d-flex align-items-center gap-1 flex-shrink-0">
                  <button
                    type="button"
                    className="btn btn-ghost btn-18 rounded-circle"
                    data-chart-export="png"
                    aria-label="Download chart"
                    title="Download chart (PNG)"
                  >
                    <i data-lucide="download" aria-hidden="true" />
                  </button>
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn btn-ghost btn-18 rounded-circle"
                      data-bs-toggle="dropdown"
                      data-bs-offset="0,8"
                      data-dd-fixed=""
                      aria-expanded="false"
                      aria-label="Chart options"
                    >
                      <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                    </button>
                    {" "}
                    <ul className="dropdown-menu dropdown-menu-end p-2">
                      <li>
                        <a className="dropdown-item" href="#" data-chart-refresh="">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="chart-canvas mt-auto">
                <canvas id="cjBarFloating" />
              </div>
            </div>
          </article>
        </div>
        {/* Financial Style */}
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="bar">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-cjFinancial">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-cjFinancial" className="fs-5 fw-bold text-title mb-1">
                    Financial Style
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    OHLC candles drawn as floating bars.
                  </p>
                </div>
                <div className="d-flex align-items-center gap-1 flex-shrink-0">
                  <button
                    type="button"
                    className="btn btn-ghost btn-18 rounded-circle"
                    data-chart-export="png"
                    aria-label="Download chart"
                    title="Download chart (PNG)"
                  >
                    <i data-lucide="download" aria-hidden="true" />
                  </button>
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn btn-ghost btn-18 rounded-circle"
                      data-bs-toggle="dropdown"
                      data-bs-offset="0,8"
                      data-dd-fixed=""
                      aria-expanded="false"
                      aria-label="Chart options"
                    >
                      <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                    </button>
                    {" "}
                    <ul className="dropdown-menu dropdown-menu-end p-2">
                      <li>
                        <a className="dropdown-item" href="#" data-chart-refresh="">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="chart-canvas mt-auto">
                <canvas id="cjFinancial" />
              </div>
            </div>
          </article>
        </div>
        {/* Pie */}
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="pie">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-cjPie">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-cjPie" className="fs-5 fw-bold text-title mb-1">
                    Pie
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Share of total by segment.
                  </p>
                </div>
                <div className="d-flex align-items-center gap-1 flex-shrink-0">
                  <button
                    type="button"
                    className="btn btn-ghost btn-18 rounded-circle"
                    data-chart-export="png"
                    aria-label="Download chart"
                    title="Download chart (PNG)"
                  >
                    <i data-lucide="download" aria-hidden="true" />
                  </button>
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn btn-ghost btn-18 rounded-circle"
                      data-bs-toggle="dropdown"
                      data-bs-offset="0,8"
                      data-dd-fixed=""
                      aria-expanded="false"
                      aria-label="Chart options"
                    >
                      <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                    </button>
                    {" "}
                    <ul className="dropdown-menu dropdown-menu-end p-2">
                      <li>
                        <a className="dropdown-item" href="#" data-chart-refresh="">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="chart-canvas chart-canvas-tall mt-auto">
                <canvas id="cjPie" />
              </div>
            </div>
          </article>
        </div>
        {/* Doughnut */}
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="doughnut">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-cjDoughnut">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-cjDoughnut" className="fs-5 fw-bold text-title mb-1">
                    Doughnut
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Pie with a hollow center.
                  </p>
                </div>
                <div className="d-flex align-items-center gap-1 flex-shrink-0">
                  <button
                    type="button"
                    className="btn btn-ghost btn-18 rounded-circle"
                    data-chart-export="png"
                    aria-label="Download chart"
                    title="Download chart (PNG)"
                  >
                    <i data-lucide="download" aria-hidden="true" />
                  </button>
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn btn-ghost btn-18 rounded-circle"
                      data-bs-toggle="dropdown"
                      data-bs-offset="0,8"
                      data-dd-fixed=""
                      aria-expanded="false"
                      aria-label="Chart options"
                    >
                      <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                    </button>
                    {" "}
                    <ul className="dropdown-menu dropdown-menu-end p-2">
                      <li>
                        <a className="dropdown-item" href="#" data-chart-refresh="">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="chart-canvas chart-canvas-tall mt-auto">
                <canvas id="cjDoughnut" />
              </div>
            </div>
          </article>
        </div>
        {/* Polar Area */}
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="polar">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-cjPolar">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-cjPolar" className="fs-5 fw-bold text-title mb-1">
                    Polar Area
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Radial segments scaled by value.
                  </p>
                </div>
                <div className="d-flex align-items-center gap-1 flex-shrink-0">
                  <button
                    type="button"
                    className="btn btn-ghost btn-18 rounded-circle"
                    data-chart-export="png"
                    aria-label="Download chart"
                    title="Download chart (PNG)"
                  >
                    <i data-lucide="download" aria-hidden="true" />
                  </button>
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn btn-ghost btn-18 rounded-circle"
                      data-bs-toggle="dropdown"
                      data-bs-offset="0,8"
                      data-dd-fixed=""
                      aria-expanded="false"
                      aria-label="Chart options"
                    >
                      <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                    </button>
                    {" "}
                    <ul className="dropdown-menu dropdown-menu-end p-2">
                      <li>
                        <a className="dropdown-item" href="#" data-chart-refresh="">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="chart-canvas chart-canvas-tall mt-auto">
                <canvas id="cjPolar" />
              </div>
            </div>
          </article>
        </div>
        {/* Radar */}
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="radar">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-cjRadar">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-cjRadar" className="fs-5 fw-bold text-title mb-1">
                    Radar
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Multi-axis profile comparison.
                  </p>
                </div>
                <div className="d-flex align-items-center gap-1 flex-shrink-0">
                  <button
                    type="button"
                    className="btn btn-ghost btn-18 rounded-circle"
                    data-chart-export="png"
                    aria-label="Download chart"
                    title="Download chart (PNG)"
                  >
                    <i data-lucide="download" aria-hidden="true" />
                  </button>
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn btn-ghost btn-18 rounded-circle"
                      data-bs-toggle="dropdown"
                      data-bs-offset="0,8"
                      data-dd-fixed=""
                      aria-expanded="false"
                      aria-label="Chart options"
                    >
                      <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                    </button>
                    {" "}
                    <ul className="dropdown-menu dropdown-menu-end p-2">
                      <li>
                        <a className="dropdown-item" href="#" data-chart-refresh="">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="chart-canvas chart-canvas-tall mt-auto">
                <canvas id="cjRadar" />
              </div>
            </div>
          </article>
        </div>
        {/* Bubble */}
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="bubble">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-cjBubble">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-cjBubble" className="fs-5 fw-bold text-title mb-1">
                    Bubble
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Three dimensions: x, y and radius.
                  </p>
                </div>
                <div className="d-flex align-items-center gap-1 flex-shrink-0">
                  <button
                    type="button"
                    className="btn btn-ghost btn-18 rounded-circle"
                    data-chart-export="png"
                    aria-label="Download chart"
                    title="Download chart (PNG)"
                  >
                    <i data-lucide="download" aria-hidden="true" />
                  </button>
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn btn-ghost btn-18 rounded-circle"
                      data-bs-toggle="dropdown"
                      data-bs-offset="0,8"
                      data-dd-fixed=""
                      aria-expanded="false"
                      aria-label="Chart options"
                    >
                      <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                    </button>
                    {" "}
                    <ul className="dropdown-menu dropdown-menu-end p-2">
                      <li>
                        <a className="dropdown-item" href="#" data-chart-refresh="">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="chart-canvas mt-auto">
                <canvas id="cjBubble" />
              </div>
            </div>
          </article>
        </div>
        {/* Scatter */}
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="scatter">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-cjScatter">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-cjScatter" className="fs-5 fw-bold text-title mb-1">
                    Scatter
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Correlation across two measures.
                  </p>
                </div>
                <div className="d-flex align-items-center gap-1 flex-shrink-0">
                  <button
                    type="button"
                    className="btn btn-ghost btn-18 rounded-circle"
                    data-chart-export="png"
                    aria-label="Download chart"
                    title="Download chart (PNG)"
                  >
                    <i data-lucide="download" aria-hidden="true" />
                  </button>
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn btn-ghost btn-18 rounded-circle"
                      data-bs-toggle="dropdown"
                      data-bs-offset="0,8"
                      data-dd-fixed=""
                      aria-expanded="false"
                      aria-label="Chart options"
                    >
                      <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                    </button>
                    {" "}
                    <ul className="dropdown-menu dropdown-menu-end p-2">
                      <li>
                        <a className="dropdown-item" href="#" data-chart-refresh="">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="chart-canvas mt-auto">
                <canvas id="cjScatter" />
              </div>
            </div>
          </article>
        </div>
        {/* Mixed */}
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="mixed">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-cjMixed">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-cjMixed" className="fs-5 fw-bold text-title mb-1">
                    Mixed
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Bar and line series combined.
                  </p>
                </div>
                <div className="d-flex align-items-center gap-1 flex-shrink-0">
                  <button
                    type="button"
                    className="btn btn-ghost btn-18 rounded-circle"
                    data-chart-export="png"
                    aria-label="Download chart"
                    title="Download chart (PNG)"
                  >
                    <i data-lucide="download" aria-hidden="true" />
                  </button>
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn btn-ghost btn-18 rounded-circle"
                      data-bs-toggle="dropdown"
                      data-bs-offset="0,8"
                      data-dd-fixed=""
                      aria-expanded="false"
                      aria-label="Chart options"
                    >
                      <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                    </button>
                    {" "}
                    <ul className="dropdown-menu dropdown-menu-end p-2">
                      <li>
                        <a className="dropdown-item" href="#" data-chart-refresh="">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="chart-canvas mt-auto">
                <canvas id="cjMixed" />
              </div>
            </div>
          </article>
        </div>
      </div>
      {/* ========== FOOTER ========== */}
    </AppShell>
  );
}

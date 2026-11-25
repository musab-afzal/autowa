/* Generated from the Vionex HTML theme by scripts/convert-html.mjs */
import AppShell from "@/components/AppShell";

export const metadata = {
  title: "Vionex — Apex Charts",
  description: "Vionex Apex Charts — line, area, bar, column, mixed, pie, donut, radial, radar, bubble, scatter, heatmap, treemap, candlestick and timeline plots, themed from the design-system CSS variables.",
};

const scripts = [
    "/assets/js/jquery.min.js",
    "/assets/js/bootstrap.bundle.min.js",
    "/assets/js/lucide.min.js",
    "/assets/js/apexcharts.min.js",
    "/assets/js/dashboard.js",
    "/assets/js/charts.js",
    "/assets/js/apexcharttheme.js",
  ];

export default function Page() {
  return (
    <AppShell
      scripts={scripts}
    >
      {/* ===== Page header ===== */}
      <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
        <h1 className="fs-4 fw-bold text-title mb-0">
          Apex Charts
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
              Apex Charts
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
          <button type="button" className="nav-link fw-semibold text-nowrap" data-filter="area" aria-pressed="false">
            Area
          </button>
          <button type="button" className="nav-link fw-semibold text-nowrap" data-filter="bar" aria-pressed="false">
            Bar
          </button>
          <button type="button" className="nav-link fw-semibold text-nowrap" data-filter="column" aria-pressed="false">
            Column
          </button>
          <button type="button" className="nav-link fw-semibold text-nowrap" data-filter="mixed" aria-pressed="false">
            Mixed
          </button>
          <button type="button" className="nav-link fw-semibold text-nowrap" data-filter="pie" aria-pressed="false">
            Pie
          </button>
          <button type="button" className="nav-link fw-semibold text-nowrap" data-filter="donut" aria-pressed="false">
            Donut
          </button>
          <button type="button" className="nav-link fw-semibold text-nowrap" data-filter="radial" aria-pressed="false">
            Radial
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
          <button type="button" className="nav-link fw-semibold text-nowrap" data-filter="heatmap" aria-pressed="false">
            Heatmap
          </button>
          <button type="button" className="nav-link fw-semibold text-nowrap" data-filter="treemap" aria-pressed="false">
            Treemap
          </button>
          <button
            type="button"
            className="nav-link fw-semibold text-nowrap"
            data-filter="candlestick"
            aria-pressed="false"
          >
            Candlestick
          </button>
          <button type="button" className="nav-link fw-semibold text-nowrap" data-filter="boxplot" aria-pressed="false">
            Box Plot
          </button>
          <button
            type="button"
            className="nav-link fw-semibold text-nowrap"
            data-filter="rangearea"
            aria-pressed="false"
          >
            Range Area
          </button>
          <button
            type="button"
            className="nav-link fw-semibold text-nowrap"
            data-filter="timeline"
            aria-pressed="false"
          >
            Timeline
          </button>
        </div>
      </div>
      {/* ===== Chart card grid ===== */}
      <div className="row g-3 g-xl-4" data-chart-grid="">
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="line">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-axLineBasic">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-axLineBasic" className="fs-5 fw-bold text-title mb-1">
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
                        <a className="dropdown-item" href="#">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i data-lucide="maximize-2" aria-hidden="true" />
                          Fullscreen
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="svg">
                          <i data-lucide="download" aria-hidden="true" />
                          Download SVG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="axLineBasic" className="chart-area flex-grow-1" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="line">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-axLineSmooth">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-axLineSmooth" className="fs-5 fw-bold text-title mb-1">
                    Smooth Line
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Curved spline interpolation.
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
                        <a className="dropdown-item" href="#">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i data-lucide="maximize-2" aria-hidden="true" />
                          Fullscreen
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="svg">
                          <i data-lucide="download" aria-hidden="true" />
                          Download SVG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="axLineSmooth" className="chart-area flex-grow-1" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="line">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-axLineMulti">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-axLineMulti" className="fs-5 fw-bold text-title mb-1">
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
                        <a className="dropdown-item" href="#">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i data-lucide="maximize-2" aria-hidden="true" />
                          Fullscreen
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="svg">
                          <i data-lucide="download" aria-hidden="true" />
                          Download SVG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="axLineMulti" className="chart-area flex-grow-1" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="line">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-axLineDashed">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-axLineDashed" className="fs-5 fw-bold text-title mb-1">
                    Dashed Line
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Solid actual vs dashed forecast.
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
                        <a className="dropdown-item" href="#">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i data-lucide="maximize-2" aria-hidden="true" />
                          Fullscreen
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="svg">
                          <i data-lucide="download" aria-hidden="true" />
                          Download SVG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="axLineDashed" className="chart-area flex-grow-1" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="line">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-axLineZoom">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-axLineZoom" className="fs-5 fw-bold text-title mb-1">
                    Zoomable Line
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Drag across the plot to zoom.
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
                        <a className="dropdown-item" href="#">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i data-lucide="maximize-2" aria-hidden="true" />
                          Fullscreen
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="svg">
                          <i data-lucide="download" aria-hidden="true" />
                          Download SVG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="axLineZoom" className="chart-area flex-grow-1" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="line">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-axLineStep">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-axLineStep" className="fs-5 fw-bold text-title mb-1">
                    Stepline
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Discrete step transitions.
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
                        <a className="dropdown-item" href="#">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i data-lucide="maximize-2" aria-hidden="true" />
                          Fullscreen
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="svg">
                          <i data-lucide="download" aria-hidden="true" />
                          Download SVG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="axLineStep" className="chart-area flex-grow-1" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="line">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-axLineRealtime">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-axLineRealtime" className="fs-5 fw-bold text-title mb-1">
                    Realtime Line
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Live streaming data feed.
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
                        <a className="dropdown-item" href="#">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i data-lucide="maximize-2" aria-hidden="true" />
                          Fullscreen
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="svg">
                          <i data-lucide="download" aria-hidden="true" />
                          Download SVG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="axLineRealtime" className="chart-area flex-grow-1" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="area">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-axAreaBasic">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-axAreaBasic" className="fs-5 fw-bold text-title mb-1">
                    Basic Area
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Filled single-series area.
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
                        <a className="dropdown-item" href="#">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i data-lucide="maximize-2" aria-hidden="true" />
                          Fullscreen
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="svg">
                          <i data-lucide="download" aria-hidden="true" />
                          Download SVG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="axAreaBasic" className="chart-area flex-grow-1" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="area">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-axAreaSpline">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-axAreaSpline" className="fs-5 fw-bold text-title mb-1">
                    Spline Area
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Smooth curved area fill.
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
                        <a className="dropdown-item" href="#">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i data-lucide="maximize-2" aria-hidden="true" />
                          Fullscreen
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="svg">
                          <i data-lucide="download" aria-hidden="true" />
                          Download SVG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="axAreaSpline" className="chart-area flex-grow-1" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="area">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-axAreaGradient">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-axAreaGradient" className="fs-5 fw-bold text-title mb-1">
                    Gradient Area
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Vertical gradient fill.
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
                        <a className="dropdown-item" href="#">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i data-lucide="maximize-2" aria-hidden="true" />
                          Fullscreen
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="svg">
                          <i data-lucide="download" aria-hidden="true" />
                          Download SVG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="axAreaGradient" className="chart-area flex-grow-1" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="area">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-axAreaStacked">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-axAreaStacked" className="fs-5 fw-bold text-title mb-1">
                    Stacked Area
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Cumulative stacked series.
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
                        <a className="dropdown-item" href="#">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i data-lucide="maximize-2" aria-hidden="true" />
                          Fullscreen
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="svg">
                          <i data-lucide="download" aria-hidden="true" />
                          Download SVG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="axAreaStacked" className="chart-area flex-grow-1" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="area">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-axAreaNegative">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-axAreaNegative" className="fs-5 fw-bold text-title mb-1">
                    Negative Area
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Area crossing the zero axis.
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
                        <a className="dropdown-item" href="#">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i data-lucide="maximize-2" aria-hidden="true" />
                          Fullscreen
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="svg">
                          <i data-lucide="download" aria-hidden="true" />
                          Download SVG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="axAreaNegative" className="chart-area flex-grow-1" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="bar">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-axBarBasic">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-axBarBasic" className="fs-5 fw-bold text-title mb-1">
                    Basic Bar
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Horizontal category ranking.
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
                        <a className="dropdown-item" href="#">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i data-lucide="maximize-2" aria-hidden="true" />
                          Fullscreen
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="svg">
                          <i data-lucide="download" aria-hidden="true" />
                          Download SVG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="axBarBasic" className="chart-area flex-grow-1" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="bar">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-axBarGrouped">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-axBarGrouped" className="fs-5 fw-bold text-title mb-1">
                    Grouped Bar
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Side-by-side comparison.
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
                        <a className="dropdown-item" href="#">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i data-lucide="maximize-2" aria-hidden="true" />
                          Fullscreen
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="svg">
                          <i data-lucide="download" aria-hidden="true" />
                          Download SVG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="axBarGrouped" className="chart-area flex-grow-1" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="bar">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-axBarStacked">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-axBarStacked" className="fs-5 fw-bold text-title mb-1">
                    Stacked Bar
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Stacked horizontal totals.
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
                        <a className="dropdown-item" href="#">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i data-lucide="maximize-2" aria-hidden="true" />
                          Fullscreen
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="svg">
                          <i data-lucide="download" aria-hidden="true" />
                          Download SVG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="axBarStacked" className="chart-area flex-grow-1" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="bar">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-axBarFull">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-axBarFull" className="fs-5 fw-bold text-title mb-1">
                    100% Stacked Bar
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Proportional share per row.
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
                        <a className="dropdown-item" href="#">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i data-lucide="maximize-2" aria-hidden="true" />
                          Fullscreen
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="svg">
                          <i data-lucide="download" aria-hidden="true" />
                          Download SVG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="axBarFull" className="chart-area flex-grow-1" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="bar">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-axBarNegative">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-axBarNegative" className="fs-5 fw-bold text-title mb-1">
                    Negative Bar
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Diverging positive and negative.
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
                        <a className="dropdown-item" href="#">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i data-lucide="maximize-2" aria-hidden="true" />
                          Fullscreen
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="svg">
                          <i data-lucide="download" aria-hidden="true" />
                          Download SVG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="axBarNegative" className="chart-area flex-grow-1" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="column">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-axColBasic">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-axColBasic" className="fs-5 fw-bold text-title mb-1">
                    Basic Column
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Vertical value comparison.
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
                        <a className="dropdown-item" href="#">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i data-lucide="maximize-2" aria-hidden="true" />
                          Fullscreen
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="svg">
                          <i data-lucide="download" aria-hidden="true" />
                          Download SVG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="axColBasic" className="chart-area flex-grow-1" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="column">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-axColGrouped">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-axColGrouped" className="fs-5 fw-bold text-title mb-1">
                    Grouped Column
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Multiple series per category.
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
                        <a className="dropdown-item" href="#">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i data-lucide="maximize-2" aria-hidden="true" />
                          Fullscreen
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="svg">
                          <i data-lucide="download" aria-hidden="true" />
                          Download SVG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="axColGrouped" className="chart-area flex-grow-1" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="column">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-axColStacked">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-axColStacked" className="fs-5 fw-bold text-title mb-1">
                    Stacked Column
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Stacked vertical totals.
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
                        <a className="dropdown-item" href="#">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i data-lucide="maximize-2" aria-hidden="true" />
                          Fullscreen
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="svg">
                          <i data-lucide="download" aria-hidden="true" />
                          Download SVG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="axColStacked" className="chart-area flex-grow-1" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="column">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-axColDist">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-axColDist" className="fs-5 fw-bold text-title mb-1">
                    Distributed Bar
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    One color per column.
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
                        <a className="dropdown-item" href="#">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i data-lucide="maximize-2" aria-hidden="true" />
                          Fullscreen
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="svg">
                          <i data-lucide="download" aria-hidden="true" />
                          Download SVG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="axColDist" className="chart-area flex-grow-1" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="mixed">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-axMixLineCol">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-axMixLineCol" className="fs-5 fw-bold text-title mb-1">
                    Line and Column
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Combined column and line.
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
                        <a className="dropdown-item" href="#">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i data-lucide="maximize-2" aria-hidden="true" />
                          Fullscreen
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="svg">
                          <i data-lucide="download" aria-hidden="true" />
                          Download SVG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="axMixLineCol" className="chart-area flex-grow-1" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="mixed">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-axMixAreaLine">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-axMixAreaLine" className="fs-5 fw-bold text-title mb-1">
                    Line and Area
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Area baseline with trend line.
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
                        <a className="dropdown-item" href="#">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i data-lucide="maximize-2" aria-hidden="true" />
                          Fullscreen
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="svg">
                          <i data-lucide="download" aria-hidden="true" />
                          Download SVG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="axMixAreaLine" className="chart-area flex-grow-1" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="mixed">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-axMixMultiY">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-axMixMultiY" className="fs-5 fw-bold text-title mb-1">
                    Multiple Y-Axis
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Two independent scales.
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
                        <a className="dropdown-item" href="#">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i data-lucide="maximize-2" aria-hidden="true" />
                          Fullscreen
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="svg">
                          <i data-lucide="download" aria-hidden="true" />
                          Download SVG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="axMixMultiY" className="chart-area flex-grow-1" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="pie">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-axPieBasic">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-axPieBasic" className="fs-5 fw-bold text-title mb-1">
                    Basic Pie
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Part-to-whole distribution.
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
                        <a className="dropdown-item" href="#">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i data-lucide="maximize-2" aria-hidden="true" />
                          Fullscreen
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="svg">
                          <i data-lucide="download" aria-hidden="true" />
                          Download SVG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="axPieBasic" className="chart-area flex-grow-1" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="pie">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-axPieMono">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-axPieMono" className="fs-5 fw-bold text-title mb-1">
                    Monochrome Pie
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Single-hue gradient slices.
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
                        <a className="dropdown-item" href="#">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i data-lucide="maximize-2" aria-hidden="true" />
                          Fullscreen
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="svg">
                          <i data-lucide="download" aria-hidden="true" />
                          Download SVG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="axPieMono" className="chart-area flex-grow-1" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="donut">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-axDonutBasic">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-axDonutBasic" className="fs-5 fw-bold text-title mb-1">
                    Basic Donut
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Donut with total in center.
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
                        <a className="dropdown-item" href="#">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i data-lucide="maximize-2" aria-hidden="true" />
                          Fullscreen
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="svg">
                          <i data-lucide="download" aria-hidden="true" />
                          Download SVG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="axDonutBasic" className="chart-area flex-grow-1" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="donut">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-axDonutGradient">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-axDonutGradient" className="fs-5 fw-bold text-title mb-1">
                    Gradient Donut
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Gradient-filled ring.
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
                        <a className="dropdown-item" href="#">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i data-lucide="maximize-2" aria-hidden="true" />
                          Fullscreen
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="svg">
                          <i data-lucide="download" aria-hidden="true" />
                          Download SVG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="axDonutGradient" className="chart-area flex-grow-1" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="radial">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-axRadialBasic">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-axRadialBasic" className="fs-5 fw-bold text-title mb-1">
                    Basic Radial Bar
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Single circular progress.
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
                        <a className="dropdown-item" href="#">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i data-lucide="maximize-2" aria-hidden="true" />
                          Fullscreen
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="svg">
                          <i data-lucide="download" aria-hidden="true" />
                          Download SVG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="axRadialBasic" className="chart-area flex-grow-1" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="radial">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-axRadialMulti">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-axRadialMulti" className="fs-5 fw-bold text-title mb-1">
                    Multiple Radial
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Several tracks at once.
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
                        <a className="dropdown-item" href="#">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i data-lucide="maximize-2" aria-hidden="true" />
                          Fullscreen
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="svg">
                          <i data-lucide="download" aria-hidden="true" />
                          Download SVG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="axRadialMulti" className="chart-area flex-grow-1" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="radial">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-axRadialGauge">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-axRadialGauge" className="fs-5 fw-bold text-title mb-1">
                    Gauge
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Semi-circle KPI gauge.
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
                        <a className="dropdown-item" href="#">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i data-lucide="maximize-2" aria-hidden="true" />
                          Fullscreen
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="svg">
                          <i data-lucide="download" aria-hidden="true" />
                          Download SVG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="axRadialGauge" className="chart-area flex-grow-1" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="radial">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-axRadialStroked">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-axRadialStroked" className="fs-5 fw-bold text-title mb-1">
                    Custom Angle Circle
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Rounded stroke with track.
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
                        <a className="dropdown-item" href="#">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i data-lucide="maximize-2" aria-hidden="true" />
                          Fullscreen
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="svg">
                          <i data-lucide="download" aria-hidden="true" />
                          Download SVG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="axRadialStroked" className="chart-area flex-grow-1" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="polar">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-axPolarBasic">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-axPolarBasic" className="fs-5 fw-bold text-title mb-1">
                    Polar Area
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Radial category magnitudes.
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
                        <a className="dropdown-item" href="#">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i data-lucide="maximize-2" aria-hidden="true" />
                          Fullscreen
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="svg">
                          <i data-lucide="download" aria-hidden="true" />
                          Download SVG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="axPolarBasic" className="chart-area flex-grow-1" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="radar">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-axRadarBasic">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-axRadarBasic" className="fs-5 fw-bold text-title mb-1">
                    Basic Radar
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Single-series skill profile.
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
                        <a className="dropdown-item" href="#">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i data-lucide="maximize-2" aria-hidden="true" />
                          Fullscreen
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="svg">
                          <i data-lucide="download" aria-hidden="true" />
                          Download SVG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="axRadarBasic" className="chart-area flex-grow-1" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="radar">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-axRadarMulti">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-axRadarMulti" className="fs-5 fw-bold text-title mb-1">
                    Multi Radar
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Compare two profiles.
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
                        <a className="dropdown-item" href="#">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i data-lucide="maximize-2" aria-hidden="true" />
                          Fullscreen
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="svg">
                          <i data-lucide="download" aria-hidden="true" />
                          Download SVG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="axRadarMulti" className="chart-area flex-grow-1" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="bubble">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-axBubbleBasic">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-axBubbleBasic" className="fs-5 fw-bold text-title mb-1">
                    Basic Bubble
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Three-dimension scatter.
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
                        <a className="dropdown-item" href="#">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i data-lucide="maximize-2" aria-hidden="true" />
                          Fullscreen
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="svg">
                          <i data-lucide="download" aria-hidden="true" />
                          Download SVG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="axBubbleBasic" className="chart-area flex-grow-1" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="bubble">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-axBubble3D">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-axBubble3D" className="fs-5 fw-bold text-title mb-1">
                    3D Bubble
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Size-encoded data points.
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
                        <a className="dropdown-item" href="#">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i data-lucide="maximize-2" aria-hidden="true" />
                          Fullscreen
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="svg">
                          <i data-lucide="download" aria-hidden="true" />
                          Download SVG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="axBubble3D" className="chart-area flex-grow-1" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="scatter">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-axScatterBasic">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-axScatterBasic" className="fs-5 fw-bold text-title mb-1">
                    Basic Scatter
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Correlation point cloud.
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
                        <a className="dropdown-item" href="#">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i data-lucide="maximize-2" aria-hidden="true" />
                          Fullscreen
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="svg">
                          <i data-lucide="download" aria-hidden="true" />
                          Download SVG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="axScatterBasic" className="chart-area flex-grow-1" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="scatter">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-axScatterDate">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-axScatterDate" className="fs-5 fw-bold text-title mb-1">
                    Datetime Scatter
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Points across a timeline.
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
                        <a className="dropdown-item" href="#">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i data-lucide="maximize-2" aria-hidden="true" />
                          Fullscreen
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="svg">
                          <i data-lucide="download" aria-hidden="true" />
                          Download SVG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="axScatterDate" className="chart-area flex-grow-1" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="line">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-axSparkA">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-axSparkA" className="fs-5 fw-bold text-title mb-1">
                    Sparklines
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Compact inline KPI trends.
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
                        <a className="dropdown-item" href="#">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i data-lucide="maximize-2" aria-hidden="true" />
                          Fullscreen
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="svg">
                          <i data-lucide="download" aria-hidden="true" />
                          Download SVG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column gap-3 flex-grow-1 justify-content-center">
                <div className="row align-items-center g-2">
                  <div className="col-auto">
                    <span className="d-block fs-md text-body-2">
                      Revenue
                    </span>
                    <span className="d-block fs-5 fw-bold text-title">
                      <bdi>
                        $48.2K
                      </bdi>
                    </span>
                  </div>
                  <div className="col">
                    <div id="axSparkA" />
                  </div>
                </div>
                <div className="row align-items-center g-2 border-t-soft pt-3">
                  <div className="col-auto">
                    <span className="d-block fs-md text-body-2">
                      Orders
                    </span>
                    <span className="d-block fs-5 fw-bold text-title">
                      <bdi>
                        3,204
                      </bdi>
                    </span>
                  </div>
                  <div className="col">
                    <div id="axSparkB" />
                  </div>
                </div>
                <div className="row align-items-center g-2 border-t-soft pt-3">
                  <div className="col-auto">
                    <span className="d-block fs-md text-body-2">
                      Sessions
                    </span>
                    <span className="d-block fs-5 fw-bold text-title">
                      <bdi>
                        18.9K
                      </bdi>
                    </span>
                  </div>
                  <div className="col">
                    <div id="axSparkC" />
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div className="col-12" data-chart-cat="area">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-axAreaBrushMain">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-axAreaBrushMain" className="fs-5 fw-bold text-title mb-1">
                    Brush Area
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Select a range below to zoom the detail chart above.
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
                        <a className="dropdown-item" href="#">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i data-lucide="maximize-2" aria-hidden="true" />
                          Fullscreen
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="svg">
                          <i data-lucide="download" aria-hidden="true" />
                          Download SVG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="axAreaBrushMain" className="chart-area" />
              <div id="axAreaBrushSel" className="chart-area" />
            </div>
          </article>
        </div>
        <div className="col-12 col-xxl-8" data-chart-cat="heatmap">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-axHeatBasic">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-axHeatBasic" className="fs-5 fw-bold text-title mb-1">
                    Basic Heatmap
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Density across a weekly grid.
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
                        <a className="dropdown-item" href="#">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i data-lucide="maximize-2" aria-hidden="true" />
                          Fullscreen
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="svg">
                          <i data-lucide="download" aria-hidden="true" />
                          Download SVG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="axHeatBasic" className="chart-area flex-grow-1" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="heatmap">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-axHeatRange">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-axHeatRange" className="fs-5 fw-bold text-title mb-1">
                    Color Range Heatmap
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Bucketed color ranges.
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
                        <a className="dropdown-item" href="#">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i data-lucide="maximize-2" aria-hidden="true" />
                          Fullscreen
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="svg">
                          <i data-lucide="download" aria-hidden="true" />
                          Download SVG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="axHeatRange" className="chart-area flex-grow-1" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-6" data-chart-cat="treemap">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-axTreeBasic">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-axTreeBasic" className="fs-5 fw-bold text-title mb-1">
                    Basic Treemap
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Nested proportional tiles.
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
                        <a className="dropdown-item" href="#">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i data-lucide="maximize-2" aria-hidden="true" />
                          Fullscreen
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="svg">
                          <i data-lucide="download" aria-hidden="true" />
                          Download SVG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="axTreeBasic" className="chart-area flex-grow-1" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-6" data-chart-cat="treemap">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-axTreeRange">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-axTreeRange" className="fs-5 fw-bold text-title mb-1">
                    Color Range Treemap
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Value-colored tiles.
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
                        <a className="dropdown-item" href="#">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i data-lucide="maximize-2" aria-hidden="true" />
                          Fullscreen
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="svg">
                          <i data-lucide="download" aria-hidden="true" />
                          Download SVG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="axTreeRange" className="chart-area flex-grow-1" />
            </div>
          </article>
        </div>
        <div className="col-12 col-xxl-8" data-chart-cat="candlestick">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-axCandleBasic">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-axCandleBasic" className="fs-5 fw-bold text-title mb-1">
                    Candlestick
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    OHLC financial series.
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
                        <a className="dropdown-item" href="#">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i data-lucide="maximize-2" aria-hidden="true" />
                          Fullscreen
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="svg">
                          <i data-lucide="download" aria-hidden="true" />
                          Download SVG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="axCandleBasic" className="chart-area flex-grow-1" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="boxplot">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-axBoxBasic">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-axBoxBasic" className="fs-5 fw-bold text-title mb-1">
                    Box Plot
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Quartile distribution.
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
                        <a className="dropdown-item" href="#">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i data-lucide="maximize-2" aria-hidden="true" />
                          Fullscreen
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="svg">
                          <i data-lucide="download" aria-hidden="true" />
                          Download SVG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="axBoxBasic" className="chart-area flex-grow-1" />
            </div>
          </article>
        </div>
        <div className="col-12 col-xxl-6" data-chart-cat="rangearea">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-axRangeBasic">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-axRangeBasic" className="fs-5 fw-bold text-title mb-1">
                    Range Area
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Min-max band with mid line.
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
                        <a className="dropdown-item" href="#">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i data-lucide="maximize-2" aria-hidden="true" />
                          Fullscreen
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="svg">
                          <i data-lucide="download" aria-hidden="true" />
                          Download SVG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="axRangeBasic" className="chart-area flex-grow-1" />
            </div>
          </article>
        </div>
        <div className="col-12 col-xxl-6" data-chart-cat="timeline">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-axTimelineBasic">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-axTimelineBasic" className="fs-5 fw-bold text-title mb-1">
                    Timeline
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Task duration ranges.
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
                        <a className="dropdown-item" href="#">
                          <i data-lucide="refresh-cw" aria-hidden="true" />
                          Refresh
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <i data-lucide="maximize-2" aria-hidden="true" />
                          Fullscreen
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="png">
                          <i data-lucide="image-down" aria-hidden="true" />
                          Download PNG
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#" data-chart-export="svg">
                          <i data-lucide="download" aria-hidden="true" />
                          Download SVG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div id="axTimelineBasic" className="chart-area flex-grow-1" />
            </div>
          </article>
        </div>
      </div>
      {/* ========== FOOTER ========== */}
    </AppShell>
  );
}

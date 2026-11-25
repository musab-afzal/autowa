/* Generated from the Vionex HTML theme by scripts/convert-html.mjs */
import AppShell from "@/components/AppShell";

export const metadata = {
  title: "Vionex — ECharts",
  description: "Vionex ECharts showcase — line, bar, pie, funnel, scatter, radar, gauge, tree, treemap, sankey, parallel, heatmap, map, graph, candlestick and calendar plots, themed from the design-system CSS variables.",
};

const scripts = [
    "/assets/js/jquery.min.js",
    "/assets/js/bootstrap.bundle.min.js",
    "/assets/js/lucide.min.js",
    "/assets/js/echarts.min.js",
    "/assets/js/echarts-world.js",
    "/assets/js/dashboard.js",
    "/assets/js/echarttheme.js",
  ];

export default function Page() {
  return (
    <AppShell
      scripts={scripts}
    >
      {/* ===== Page header ===== */}
      <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
        <h1 className="fs-4 fw-bold text-title mb-0">
          ECharts
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
              ECharts
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
            All
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
          <button type="button" className="nav-link fw-semibold text-nowrap" data-filter="scatter" aria-pressed="false">
            Scatter
          </button>
          <button type="button" className="nav-link fw-semibold text-nowrap" data-filter="radar" aria-pressed="false">
            Radar
          </button>
          <button type="button" className="nav-link fw-semibold text-nowrap" data-filter="tree" aria-pressed="false">
            Tree
          </button>
          <button type="button" className="nav-link fw-semibold text-nowrap" data-filter="treemap" aria-pressed="false">
            TreeMap
          </button>
          <button type="button" className="nav-link fw-semibold text-nowrap" data-filter="sankey" aria-pressed="false">
            Sankey
          </button>
          <button type="button" className="nav-link fw-semibold text-nowrap" data-filter="funnel" aria-pressed="false">
            Funnel
          </button>
          <button type="button" className="nav-link fw-semibold text-nowrap" data-filter="gauge" aria-pressed="false">
            Gauge
          </button>
          <button type="button" className="nav-link fw-semibold text-nowrap" data-filter="graph" aria-pressed="false">
            Graph
          </button>
          <button type="button" className="nav-link fw-semibold text-nowrap" data-filter="heatmap" aria-pressed="false">
            Heatmap
          </button>
          <button
            type="button"
            className="nav-link fw-semibold text-nowrap"
            data-filter="parallel"
            aria-pressed="false"
          >
            Parallel
          </button>
          <button
            type="button"
            className="nav-link fw-semibold text-nowrap"
            data-filter="candlestick"
            aria-pressed="false"
          >
            Candlestick
          </button>
          <button
            type="button"
            className="nav-link fw-semibold text-nowrap"
            data-filter="calendar"
            aria-pressed="false"
          >
            Calendar
          </button>
          <button type="button" className="nav-link fw-semibold text-nowrap" data-filter="geo" aria-pressed="false">
            Geo Map
          </button>
        </div>
      </div>
      {/* ===== Chart card grid ===== */}
      <div className="row g-3 g-xl-4" data-chart-grid="">
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="line">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-ecLine">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-ecLine" className="fs-5 fw-bold text-title mb-1">
                    Line
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
              <div className="chart-canvas mt-auto" id="ecLine" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="line">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-ecArea">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-ecArea" className="fs-5 fw-bold text-title mb-1">
                    Area
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Smooth line with a gradient body.
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
              <div className="chart-canvas mt-auto" id="ecArea" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="line">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-ecTimeline">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-ecTimeline" className="fs-5 fw-bold text-title mb-1">
                    Timeline
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Streamgraph flow over time.
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
              <div className="chart-canvas mt-auto" id="ecTimeline" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="bar">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-ecBar">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-ecBar" className="fs-5 fw-bold text-title mb-1">
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
              <div className="chart-canvas mt-auto" id="ecBar" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="bar">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-ecBarH">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-ecBarH" className="fs-5 fw-bold text-title mb-1">
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
              <div className="chart-canvas mt-auto" id="ecBarH" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="bar">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-ecBarStack">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-ecBarStack" className="fs-5 fw-bold text-title mb-1">
                    Stacked Bar
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
              <div className="chart-canvas mt-auto" id="ecBarStack" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="pie">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-ecPie">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-ecPie" className="fs-5 fw-bold text-title mb-1">
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
              <div className="chart-canvas chart-canvas-tall mt-auto" id="ecPie" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="pie">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-ecDonut">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-ecDonut" className="fs-5 fw-bold text-title mb-1">
                    Donut
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
              <div className="chart-canvas chart-canvas-tall mt-auto" id="ecDonut" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="funnel">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-ecFunnel">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-ecFunnel" className="fs-5 fw-bold text-title mb-1">
                    Funnel
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Conversion drop-off by stage.
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
              <div className="chart-canvas chart-canvas-tall mt-auto" id="ecFunnel" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="scatter">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-ecScatter">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-ecScatter" className="fs-5 fw-bold text-title mb-1">
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
              <div className="chart-canvas mt-auto" id="ecScatter" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="scatter">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-ecBubble">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-ecBubble" className="fs-5 fw-bold text-title mb-1">
                    Bubble
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Three dimensions: x, y and size.
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
              <div className="chart-canvas mt-auto" id="ecBubble" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="radar">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-ecRadar">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-ecRadar" className="fs-5 fw-bold text-title mb-1">
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
              <div className="chart-canvas chart-canvas-tall mt-auto" id="ecRadar" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="gauge">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-ecGauge">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-ecGauge" className="fs-5 fw-bold text-title mb-1">
                    Gauge
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Progress toward a single target.
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
              <div className="chart-canvas chart-canvas-tall mt-auto" id="ecGauge" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="tree">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-ecTree">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-ecTree" className="fs-5 fw-bold text-title mb-1">
                    Tree
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Orthogonal hierarchy layout.
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
              <div className="chart-canvas chart-canvas-tall mt-auto" id="ecTree" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="treemap">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-ecTreemap">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-ecTreemap" className="fs-5 fw-bold text-title mb-1">
                    TreeMap
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Nested rectangles sized by value.
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
              <div className="chart-canvas chart-canvas-tall mt-auto" id="ecTreemap" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="treemap">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-ecSunburst">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-ecSunburst" className="fs-5 fw-bold text-title mb-1">
                    Sunburst
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Radial multi-level hierarchy.
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
              <div className="chart-canvas chart-canvas-tall mt-auto" id="ecSunburst" />
            </div>
          </article>
        </div>
        <div className="col-12 col-xxl-8" data-chart-cat="sankey">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-ecSankey">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-ecSankey" className="fs-5 fw-bold text-title mb-1">
                    Sankey
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Flow volume between nodes.
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
              <div className="chart-canvas chart-canvas-tall mt-auto" id="ecSankey" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="parallel">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-ecParallel">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-ecParallel" className="fs-5 fw-bold text-title mb-1">
                    Parallel
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Multi-dimension coordinates.
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
              <div className="chart-canvas chart-canvas-tall mt-auto" id="ecParallel" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="heatmap">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-ecHeatmap">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-ecHeatmap" className="fs-5 fw-bold text-title mb-1">
                    Heatmap
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Density across a day-by-hour grid.
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
              <div className="chart-canvas chart-canvas-tall mt-auto" id="ecHeatmap" />
            </div>
          </article>
        </div>
        <div className="col-12 col-xxl-8" data-chart-cat="geo">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-ecGeo">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-ecGeo" className="fs-5 fw-bold text-title mb-1">
                    Geo Map
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    World choropleth by metric.
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
              <div className="chart-canvas chart-canvas-tall mt-auto" id="ecGeo" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="graph">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-ecGraph">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-ecGraph" className="fs-5 fw-bold text-title mb-1">
                    Graph
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Force-directed relationship network.
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
              <div className="chart-canvas chart-canvas-tall mt-auto" id="ecGraph" />
            </div>
          </article>
        </div>
        <div className="col-12 col-md-6 col-xxl-4" data-chart-cat="candlestick">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-ecCandle">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-ecCandle" className="fs-5 fw-bold text-title mb-1">
                    Candlestick
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    OHLC price action over time.
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
              <div className="chart-canvas mt-auto" id="ecCandle" />
            </div>
          </article>
        </div>
        <div className="col-12 col-xxl-8" data-chart-cat="calendar">
          <article className="card bg-glass h-100 mb-0" aria-labelledby="ct-ecCalendar">
            <div className="card-body d-flex flex-column">
              <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                <div>
                  <h2 id="ct-ecCalendar" className="fs-5 fw-bold text-title mb-1">
                    Calendar
                  </h2>
                  <p className="fs-md text-body-2 mb-0">
                    Daily activity across the year.
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
              <div className="chart-canvas chart-canvas-tall mt-auto" id="ecCalendar" />
            </div>
          </article>
        </div>
      </div>
      {/* ========== FOOTER ========== */}
    </AppShell>
  );
}

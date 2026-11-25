/* Generated from the Vionex HTML theme by scripts/convert-html.mjs */
import AppShell from "@/components/AppShell";

export const metadata = {
  title: "Vionex — Inventory Dashboard",
  description: "Vionex enterprise admin dashboard — inventory and stock overview built with Bootstrap 5, CSS variables and a scalable design system.",
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
          Inventory Dashboard
        </h1>
        <nav aria-label="breadcrumb" className="d-none d-md-block">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="/">
                Dashboard
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Inventory Dashboard
            </li>
          </ol>
        </nav>
      </div>
      {/* ===== Dashboard sections go here ===== */}
      {/* ===== Inventory overview ===== */}
      <section className="mb-4" aria-labelledby="invt-overview-title">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
          <div className="min-w-0">
            <h2 id="invt-overview-title" className="fs-4 fw-bold text-title mb-1">
              Inventory Overview
            </h2>
            <p className="fs-md text-body-2 mb-0">
              Live stock position across every warehouse, product line and storage location.
            </p>
          </div>
          <div className="d-flex flex-wrap align-items-center gap-2">
            <span className="badge-soft tint-brand border-current d-inline-flex align-self-stretch align-items-center gap-2 px-3">
              {" "}
              <i className="icon-12" data-lucide="refresh-cw" aria-hidden="true" />
              {" "}
              <bdi>
                Synced 12 min ago
              </bdi>
              {" "}
            </span>
            <button
              type="button"
              className="btn btn-accent d-inline-flex flex-nowrap align-items-center justify-content-center gap-2 text-nowrap"
            >
              <i className="icon-20" data-lucide="plus" aria-hidden="true" />
              Add Product
            </button>
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-outline-soft btn-18 rounded-circle"
                id="invtOverviewMenu"
                data-bs-toggle="dropdown"
                data-bs-offset="0,8"
                aria-expanded="false"
                aria-label="Overview options"
              >
                <i data-lucide="ellipsis-vertical" />
              </button>
              {" "}
              <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="invtOverviewMenu">
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="refresh-cw" />
                    Resync stock
                  </button>
                </li>
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="scan-barcode" />
                    Stock adjustment
                  </button>
                </li>
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="download" />
                    Export inventory
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Headline stock metrics */}
        <ul className="list-unstyled row row-cols-1 row-cols-sm-2 row-cols-xl-4 g-3 mb-3">
          <li className="col">
            <div className="card overflow-hidden h-100">
              <div className="card-body d-flex flex-column gap-3 pb-0">
                <div className="d-flex align-items-center gap-2 min-w-0">
                  <span className="icon-box icon-box-sm tint-brand border-current" aria-hidden="true">
                    <i data-lucide="boxes" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="fs-6 fw-semibold text-title text-truncate mb-0">
                      Total Items
                    </h3>
                    <span className="d-block fs-xs text-muted-2 text-truncate">
                      <bdi>
                        Across 4,286 SKUs
                      </bdi>
                    </span>
                  </div>
                </div>
                <div className="mt-auto">
                  <p className="fs-2 fw-bold text-title lh-1 mb-2">
                    <bdi>
                      48,592
                    </bdi>
                  </p>
                  <p className="d-flex align-items-center gap-1 fs-md text-body-2 mb-0">
                    <i className="icon-16 flip-rtl text-cat-emerald" data-lucide="trending-up" aria-hidden="true" />
                    <bdi>
                      +3.8% vs last month
                    </bdi>
                  </p>
                </div>
              </div>
              <div id="invtItemsSpark" className="chart-area mt-3" />
            </div>
          </li>
          <li className="col">
            <div className="card overflow-hidden h-100">
              <div className="card-body d-flex flex-column gap-3 pb-0">
                <div className="d-flex align-items-center gap-2 min-w-0">
                  <span className="icon-box icon-box-sm tint-violet border-current" aria-hidden="true">
                    <i data-lucide="circle-dollar-sign" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="fs-6 fw-semibold text-title text-truncate mb-0">
                      Stock Value
                    </h3>
                    <span className="d-block fs-xs text-muted-2 text-truncate">
                      <bdi>
                        $58.44 average per unit
                      </bdi>
                    </span>
                  </div>
                </div>
                <div className="mt-auto">
                  <p className="fs-2 fw-bold text-title lh-1 mb-2">
                    <bdi>
                      $2.84M
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
              <div id="invtValueSpark" className="chart-area mt-3" />
            </div>
          </li>
          <li className="col">
            <div className="card overflow-hidden h-100">
              <div className="card-body d-flex flex-column gap-3 pb-0">
                <div className="d-flex align-items-center gap-2 min-w-0">
                  <span className="icon-box icon-box-sm tint-amber border-current" aria-hidden="true">
                    <i data-lucide="triangle-alert" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="fs-6 fw-semibold text-title text-truncate mb-0">
                      Low Stock
                    </h3>
                    <span className="d-block fs-xs text-muted-2 text-truncate">
                      Below reorder point
                    </span>
                  </div>
                </div>
                <div className="mt-auto">
                  <p className="fs-2 fw-bold text-title lh-1 mb-2">
                    <bdi>
                      312
                    </bdi>
                  </p>
                  <p className="d-flex align-items-center gap-1 fs-md text-body-2 mb-0">
                    <i className="icon-16 flip-rtl text-cat-amber" data-lucide="trending-up" aria-hidden="true" />
                    <bdi>
                      +44 in the last 7 days
                    </bdi>
                  </p>
                </div>
              </div>
              <div id="invtLowStockSpark" className="chart-area mt-3" />
            </div>
          </li>
          <li className="col">
            <div className="card overflow-hidden h-100">
              <div className="card-body d-flex flex-column gap-3 pb-0">
                <div className="d-flex align-items-center gap-2 min-w-0">
                  <span className="icon-box icon-box-sm tint-rose border-current" aria-hidden="true">
                    <i data-lucide="package-x" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="fs-6 fw-semibold text-title text-truncate mb-0">
                      Out of Stock
                    </h3>
                    <span className="d-block fs-xs text-muted-2 text-truncate">
                      <bdi>
                        $74.2K sales at risk
                      </bdi>
                    </span>
                  </div>
                </div>
                <div className="mt-auto">
                  <p className="fs-2 fw-bold text-title lh-1 mb-2">
                    <bdi>
                      48
                    </bdi>
                  </p>
                  <p className="d-flex align-items-center gap-1 fs-md text-body-2 mb-0">
                    <i className="icon-16 flip-rtl text-cat-emerald" data-lucide="trending-down" aria-hidden="true" />
                    <bdi>
                      -14 in the last 7 days
                    </bdi>
                  </p>
                </div>
              </div>
              <div id="invtOutOfStockSpark" className="chart-area mt-3" />
            </div>
          </li>
        </ul>
        <div className="row g-3">
          {/* Stock status breakdown */}
          <div className="col-12 col-xl-7 col-xxl-8">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <div className="min-w-0">
                    <h3 className="fs-5 fw-bold text-title mb-1">
                      Stock Status
                    </h3>
                    <p className="fs-md text-body-2 mb-0">
                      <bdi>
                        How all 4,286 SKUs are sitting right now
                      </bdi>
                    </p>
                  </div>
                  <div
                    className="nav nav-pills seg-toggle flex-nowrap gap-1 p-1 rounded-pill bg-soft"
                    role="group"
                    aria-label="Stock status measure"
                  >
                    <button type="button" className="nav-link active fw-semibold" aria-pressed="true">
                      SKUs
                    </button>
                    <button type="button" className="nav-link fw-semibold" aria-pressed="false">
                      Units
                    </button>
                    <button type="button" className="nav-link fw-semibold" aria-pressed="false">
                      Value
                    </button>
                  </div>
                </div>
                <div className="my-auto">
                  <div className="row g-3 g-xl-4 align-items-center">
                    <div className="col-12 col-md-5 col-xl-4">
                      <div id="invtStockStatusChart" className="chart-area" />
                    </div>
                    <div className="col-12 col-md-7 col-xl-8">
                      <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                        <li>
                          <div className="d-flex align-items-center gap-2 mb-2">
                            <span className="legend-dot bg-cat-emerald" aria-hidden="true" />
                            <span className="flex-grow-1 min-w-0 fs-md fw-medium text-title text-truncate">
                              In stock
                            </span>
                            <span className="fs-md fw-semibold text-title">
                              <bdi>
                                3,742
                              </bdi>
                            </span>
                            <span className="badge-soft tint-emerald flex-shrink-0">
                              <bdi>
                                87.3%
                              </bdi>
                            </span>
                          </div>
                          <div
                            className="progress progress-sm"
                            role="progressbar"
                            aria-label="In stock share of all SKUs"
                            aria-valuenow="87"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <div className="progress-bar bg-cat-emerald" style={{ width: "87.3%" }} />
                          </div>
                        </li>
                        <li>
                          <div className="d-flex align-items-center gap-2 mb-2">
                            <span className="legend-dot bg-cat-amber" aria-hidden="true" />
                            <span className="flex-grow-1 min-w-0 fs-md fw-medium text-title text-truncate">
                              Low stock
                            </span>
                            <span className="fs-md fw-semibold text-title">
                              <bdi>
                                312
                              </bdi>
                            </span>
                            <span className="badge-soft tint-amber flex-shrink-0">
                              <bdi>
                                7.3%
                              </bdi>
                            </span>
                          </div>
                          <div
                            className="progress progress-sm"
                            role="progressbar"
                            aria-label="Low stock share of all SKUs"
                            aria-valuenow="7"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <div className="progress-bar bg-cat-amber" style={{ width: "7.3%" }} />
                          </div>
                        </li>
                        <li>
                          <div className="d-flex align-items-center gap-2 mb-2">
                            <span className="legend-dot bg-cat-blue" aria-hidden="true" />
                            <span className="flex-grow-1 min-w-0 fs-md fw-medium text-title text-truncate">
                              Overstock
                            </span>
                            <span className="fs-md fw-semibold text-title">
                              <bdi>
                                184
                              </bdi>
                            </span>
                            <span className="badge-soft tint-blue flex-shrink-0">
                              <bdi>
                                4.3%
                              </bdi>
                            </span>
                          </div>
                          <div
                            className="progress progress-sm"
                            role="progressbar"
                            aria-label="Overstock share of all SKUs"
                            aria-valuenow="4"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <div className="progress-bar bg-cat-blue" style={{ width: "4.3%" }} />
                          </div>
                        </li>
                        <li>
                          <div className="d-flex align-items-center gap-2 mb-2">
                            <span className="legend-dot bg-cat-rose" aria-hidden="true" />
                            <span className="flex-grow-1 min-w-0 fs-md fw-medium text-title text-truncate">
                              Out of stock
                            </span>
                            <span className="fs-md fw-semibold text-title">
                              <bdi>
                                48
                              </bdi>
                            </span>
                            <span className="badge-soft tint-rose flex-shrink-0">
                              <bdi>
                                1.1%
                              </bdi>
                            </span>
                          </div>
                          <div
                            className="progress progress-sm"
                            role="progressbar"
                            aria-label="Out of stock share of all SKUs"
                            aria-valuenow="1"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <div className="progress-bar bg-cat-rose" style={{ width: "1.1%" }} />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <ul className="list-unstyled row row-cols-1 row-cols-sm-3 g-3 border-t-soft pt-3 mt-3 mb-0">
                  <li className="col d-flex align-items-center gap-2">
                    <span className="icon-box icon-box-sm tint-violet border-current" aria-hidden="true">
                      <i data-lucide="repeat" />
                    </span>
                    <span className="min-w-0">
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        Inventory turnover
                      </span>
                      {" "}
                      <span className="d-block fs-6 fw-semibold text-title">
                        <bdi>
                          8.7× / year
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </li>
                  <li className="col d-flex align-items-center gap-2">
                    <span className="icon-box icon-box-sm tint-blue border-current" aria-hidden="true">
                      <i data-lucide="calendar-days" />
                    </span>
                    <span className="min-w-0">
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        Average days of cover
                      </span>
                      {" "}
                      <span className="d-block fs-6 fw-semibold text-title">
                        <bdi>
                          42 days
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </li>
                  <li className="col d-flex align-items-center gap-2">
                    <span className="icon-box icon-box-sm tint-slate border-current" aria-hidden="true">
                      <i data-lucide="archive" />
                    </span>
                    <span className="min-w-0">
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        Dead stock value
                      </span>
                      {" "}
                      <span className="d-block fs-6 fw-semibold text-title">
                        <bdi>
                          $128K
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Availability & replenishment */}
          <div className="col-12 col-xl-5 col-xxl-4">
            <div className="on-dark bg-grad-theme rounded-4 h-100 d-flex flex-column gap-3 p-3 p-md-4">
              <div className="d-flex align-items-center gap-3">
                <span className="icon-box icon-box-lg bg-soft border-theme" aria-hidden="true">
                  <i data-lucide="shield-check" />
                </span>
                <span className="min-w-0">
                  {" "}
                  <span className="d-block fs-xs fw-semibold text-uppercase text-primary">
                    Stock availability
                  </span>
                  {" "}
                  <span className="d-block fs-md text-title text-truncate">
                    <bdi>
                      4 warehouses · live
                    </bdi>
                  </span>
                  {" "}
                </span>
              </div>
              <div className="bg-soft border-theme rounded-4 d-flex align-items-center gap-3 p-3">
                <div className="position-relative flex-shrink-0">
                  <div id="invtAvailabilityRing" />
                  <span className="chart-center fs-md fw-semibold text-title">
                    <span className="visually-hidden">
                      In-stock rate:
                    </span>
                    <bdi>
                      98.9%
                    </bdi>
                  </span>
                </div>
                <span className="min-w-0">
                  {" "}
                  <span className="d-block fs-lg fw-semibold text-title text-truncate">
                    In-stock rate
                  </span>
                  {" "}
                  <span className="d-block fs-sm text-primary text-truncate">
                    <bdi>
                      4,238 of 4,286 SKUs sellable
                    </bdi>
                  </span>
                  {" "}
                </span>
              </div>
              <div className="divider-fade" aria-hidden="true" />
              <ul className="list-unstyled d-flex flex-column justify-content-between gap-3 flex-grow-1 mb-0">
                <li className="d-flex align-items-center gap-3">
                  <span className="icon-box icon-box-sm tint-rose border-current" aria-hidden="true">
                    <i data-lucide="package-x" />
                  </span>
                  <span className="flex-grow-1 min-w-0">
                    {" "}
                    <span className="d-block fs-md fw-medium text-title text-truncate">
                      Reorder immediately
                    </span>
                    {" "}
                    <span className="d-block fs-xs text-primary text-truncate">
                      Zero units on hand
                    </span>
                    {" "}
                  </span>
                  <span className="fs-6 fw-semibold text-title">
                    <bdi>
                      48
                    </bdi>
                  </span>
                </li>
                <li className="d-flex align-items-center gap-3">
                  <span className="icon-box icon-box-sm tint-amber border-current" aria-hidden="true">
                    <i data-lucide="package-search" />
                  </span>
                  <span className="flex-grow-1 min-w-0">
                    {" "}
                    <span className="d-block fs-md fw-medium text-title text-truncate">
                      Below reorder point
                    </span>
                    {" "}
                    <span className="d-block fs-xs text-primary text-truncate">
                      <bdi>
                        Under 14 days of cover
                      </bdi>
                    </span>
                    {" "}
                  </span>
                  <span className="fs-6 fw-semibold text-title">
                    <bdi>
                      312
                    </bdi>
                  </span>
                </li>
                <li className="d-flex align-items-center gap-3">
                  <span className="icon-box icon-box-sm tint-emerald border-current" aria-hidden="true">
                    <i data-lucide="truck" />
                  </span>
                  <span className="flex-grow-1 min-w-0">
                    {" "}
                    <span className="d-block fs-md fw-medium text-title text-truncate">
                      Incoming stock
                    </span>
                    {" "}
                    <span className="d-block fs-xs text-primary text-truncate">
                      <bdi>
                        18 purchase orders in transit
                      </bdi>
                    </span>
                    {" "}
                  </span>
                  <span className="fs-6 fw-semibold text-title">
                    <bdi>
                      $186.4K
                    </bdi>
                  </span>
                </li>
              </ul>
              <button
                type="button"
                className="btn btn-accent w-100 d-inline-flex flex-nowrap align-items-center justify-content-center gap-2 text-nowrap"
              >
                <i className="icon-20" data-lucide="clipboard-list" aria-hidden="true" />
                Create purchase order
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Stock analytics ===== */}
      <section className="mb-4" aria-labelledby="invt-analytics-title">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
          <div className="min-w-0">
            <h2 id="invt-analytics-title" className="fs-4 fw-bold text-title mb-1">
              Stock Analytics
            </h2>
            <p className="fs-md text-body-2 mb-0">
              How stock levels and inventory value have moved over the last twelve months.
            </p>
          </div>
          <div className="d-flex flex-wrap align-items-center gap-2">
            <span className="badge-soft tint-violet border-current d-inline-flex align-self-stretch align-items-center gap-2 px-3">
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
                id="invtAnalyticsMenu"
                data-bs-toggle="dropdown"
                data-bs-offset="0,8"
                aria-expanded="false"
                aria-label="Analytics options"
              >
                <i data-lucide="ellipsis-vertical" />
              </button>
              {" "}
              <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="invtAnalyticsMenu">
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="sliders-horizontal" />
                    Compare warehouses
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
        <div className="row g-3">
          {/* Inventory value & units on hand */}
          <div className="col-12 col-xl-8">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <div className="min-w-0">
                    <h3 className="fs-5 fw-bold text-title mb-1">
                      {"Inventory Value & Units"}
                    </h3>
                    <p className="fs-md text-body-2 mb-0">
                      Closing stock value against units on hand, month by month
                    </p>
                  </div>
                  <div
                    className="nav nav-pills seg-toggle flex-nowrap gap-1 p-1 rounded-pill bg-soft"
                    role="group"
                    aria-label="Trend time range"
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
                      Units on hand
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-brand" aria-hidden="true" />
                    <span className="fs-md text-body-2">
                      Stock value
                    </span>
                  </li>
                </ul>
                <div className="my-auto">
                  <div id="invtValueTrendChart" className="chart-area" />
                </div>
                <ul className="list-unstyled row row-cols-1 row-cols-sm-3 g-3 border-t-soft pt-3 mt-3 mb-0">
                  <li className="col d-flex align-items-center gap-2">
                    <span className="icon-box icon-box-sm tint-brand border-current" aria-hidden="true">
                      <i data-lucide="circle-dollar-sign" />
                    </span>
                    <span className="min-w-0">
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        Closing value
                      </span>
                      {" "}
                      <span className="d-block fs-6 fw-semibold text-title">
                        <bdi>
                          $2.84M
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-cat-emerald">
                        <bdi>
                          +19.3% since Sep 2025
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </li>
                  <li className="col d-flex align-items-center gap-2">
                    <span className="icon-box icon-box-sm tint-amber border-current" aria-hidden="true">
                      <i data-lucide="chart-no-axes-column-increasing" />
                    </span>
                    <span className="min-w-0">
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        Twelve-month peak
                      </span>
                      {" "}
                      <span className="d-block fs-6 fw-semibold text-title">
                        <bdi>
                          $3.01M
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        <bdi>
                          December 2025 build-up
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </li>
                  <li className="col d-flex align-items-center gap-2">
                    <span className="icon-box icon-box-sm tint-blue border-current" aria-hidden="true">
                      <i data-lucide="boxes" />
                    </span>
                    <span className="min-w-0">
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        Average on hand
                      </span>
                      {" "}
                      <span className="d-block fs-6 fw-semibold text-title">
                        <bdi>
                          45,809
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        <bdi>
                          units per month
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Stock cover bands */}
          <div className="col-12 col-xl-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="min-w-0 mb-3">
                  <h3 className="fs-5 fw-bold text-title mb-1">
                    Stock Cover
                  </h3>
                  <p className="fs-md text-body-2 mb-0">
                    Days of demand the stock on hand covers, by product category
                  </p>
                </div>
                <div className="my-auto">
                  <div id="invtStockCoverChart" className="chart-area" />
                </div>
                <p className="fs-xs fw-semibold text-uppercase text-muted-2 border-t-soft pt-3 mt-3 mb-2">
                  <bdi>
                    Across all 4,286 SKUs
                  </bdi>
                </p>
                <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                  <li className="d-flex align-items-center gap-2">
                    <span className="icon-box icon-box-sm tint-rose border-current" aria-hidden="true">
                      <i data-lucide="triangle-alert" />
                    </span>
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-block fs-md fw-medium text-title text-truncate">
                        Needs action
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        <bdi>
                          Under 31 days of cover
                        </bdi>
                      </span>
                      {" "}
                    </span>
                    <span className="fs-6 fw-semibold text-title">
                      <bdi>
                        964
                      </bdi>
                    </span>
                    <span className="badge-soft tint-rose flex-shrink-0">
                      <bdi>
                        22.5%
                      </bdi>
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <span className="icon-box icon-box-sm tint-emerald border-current" aria-hidden="true">
                      <i data-lucide="shield-check" />
                    </span>
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-block fs-md fw-medium text-title text-truncate">
                        Healthy
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        <bdi>
                          31 to 90 days of cover
                        </bdi>
                      </span>
                      {" "}
                    </span>
                    <span className="fs-6 fw-semibold text-title">
                      <bdi>
                        3,138
                      </bdi>
                    </span>
                    <span className="badge-soft tint-emerald flex-shrink-0">
                      <bdi>
                        73.2%
                      </bdi>
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <span className="icon-box icon-box-sm tint-violet border-current" aria-hidden="true">
                      <i data-lucide="archive" />
                    </span>
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-block fs-md fw-medium text-title text-truncate">
                        Overstocked
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        <bdi>
                          Over 90 days of cover
                        </bdi>
                      </span>
                      {" "}
                    </span>
                    <span className="fs-6 fw-semibold text-title">
                      <bdi>
                        184
                      </bdi>
                    </span>
                    <span className="badge-soft tint-violet flex-shrink-0">
                      <bdi>
                        4.3%
                      </bdi>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* ABC value analysis */}
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <div className="min-w-0">
                    <h3 className="fs-5 fw-bold text-title mb-1">
                      ABC Value Analysis
                    </h3>
                    <p className="fs-md text-body-2 mb-0">
                      Where the inventory value actually sits, ranked by each SKU’s contribution
                    </p>
                  </div>
                  <span className="badge-soft tint-brand border-current d-inline-flex align-items-center gap-2 px-3">
                    {" "}
                    <i className="icon-12" data-lucide="scan-barcode" aria-hidden="true" />
                    {" "}
                    <bdi>
                      4,286 SKUs classified
                    </bdi>
                    {" "}
                  </span>
                </div>
                <ul className="list-unstyled row row-cols-1 row-cols-md-3 g-3 mb-0">
                  <li className="col">
                    <div className="bg-soft border-theme rounded-4 h-100 d-flex flex-column gap-3 p-3">
                      <div className="d-flex align-items-center gap-2 min-w-0">
                        <span className="icon-box tint-emerald border-current fs-5 fw-bold" aria-hidden="true">
                          A
                        </span>
                        <div className="min-w-0">
                          <h4 className="fs-6 fw-semibold text-title mb-0">
                            Fast movers
                          </h4>
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi>
                              857 SKUs · 14.2× turnover
                            </bdi>
                          </span>
                        </div>
                      </div>
                      <div>
                        <p className="fs-3 fw-bold text-title lh-1 mb-1">
                          <bdi>
                            $2.22M
                          </bdi>
                        </p>
                        <p className="fs-xs text-muted-2 mb-0">
                          Stock value held
                        </p>
                      </div>
                      <div className="d-flex flex-column gap-2 mt-auto">
                        <div>
                          <div className="d-flex align-items-center justify-content-between gap-2 mb-1">
                            <span className="fs-xs text-body-2">
                              Share of SKUs
                            </span>
                            <span className="fs-xs fw-semibold text-title">
                              <bdi>
                                20.0%
                              </bdi>
                            </span>
                          </div>
                          <div
                            className="progress progress-sm"
                            role="progressbar"
                            aria-label="Class A share of all SKUs"
                            aria-valuenow="20"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <div className="progress-bar bg-cat-slate" style={{ width: "20%" }} />
                          </div>
                        </div>
                        <div>
                          <div className="d-flex align-items-center justify-content-between gap-2 mb-1">
                            <span className="fs-xs text-body-2">
                              Share of value
                            </span>
                            <span className="fs-xs fw-semibold text-title">
                              <bdi>
                                78.2%
                              </bdi>
                            </span>
                          </div>
                          <div
                            className="progress progress-sm"
                            role="progressbar"
                            aria-label="Class A share of inventory value"
                            aria-valuenow="78"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <div className="progress-bar bg-cat-emerald" style={{ width: "78.2%" }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="col">
                    <div className="bg-soft border-theme rounded-4 h-100 d-flex flex-column gap-3 p-3">
                      <div className="d-flex align-items-center gap-2 min-w-0">
                        <span className="icon-box tint-amber border-current fs-5 fw-bold" aria-hidden="true">
                          B
                        </span>
                        <div className="min-w-0">
                          <h4 className="fs-6 fw-semibold text-title mb-0">
                            Steady movers
                          </h4>
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi>
                              1,286 SKUs · 6.1× turnover
                            </bdi>
                          </span>
                        </div>
                      </div>
                      <div>
                        <p className="fs-3 fw-bold text-title lh-1 mb-1">
                          <bdi>
                            $0.45M
                          </bdi>
                        </p>
                        <p className="fs-xs text-muted-2 mb-0">
                          Stock value held
                        </p>
                      </div>
                      <div className="d-flex flex-column gap-2 mt-auto">
                        <div>
                          <div className="d-flex align-items-center justify-content-between gap-2 mb-1">
                            <span className="fs-xs text-body-2">
                              Share of SKUs
                            </span>
                            <span className="fs-xs fw-semibold text-title">
                              <bdi>
                                30.0%
                              </bdi>
                            </span>
                          </div>
                          <div
                            className="progress progress-sm"
                            role="progressbar"
                            aria-label="Class B share of all SKUs"
                            aria-valuenow="30"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <div className="progress-bar bg-cat-slate" style={{ width: "30%" }} />
                          </div>
                        </div>
                        <div>
                          <div className="d-flex align-items-center justify-content-between gap-2 mb-1">
                            <span className="fs-xs text-body-2">
                              Share of value
                            </span>
                            <span className="fs-xs fw-semibold text-title">
                              <bdi>
                                15.8%
                              </bdi>
                            </span>
                          </div>
                          <div
                            className="progress progress-sm"
                            role="progressbar"
                            aria-label="Class B share of inventory value"
                            aria-valuenow="16"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <div className="progress-bar bg-cat-amber" style={{ width: "15.8%" }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="col">
                    <div className="bg-soft border-theme rounded-4 h-100 d-flex flex-column gap-3 p-3">
                      <div className="d-flex align-items-center gap-2 min-w-0">
                        <span className="icon-box tint-violet border-current fs-5 fw-bold" aria-hidden="true">
                          C
                        </span>
                        <div className="min-w-0">
                          <h4 className="fs-6 fw-semibold text-title mb-0">
                            Slow movers
                          </h4>
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi>
                              2,143 SKUs · 1.8× turnover
                            </bdi>
                          </span>
                        </div>
                      </div>
                      <div>
                        <p className="fs-3 fw-bold text-title lh-1 mb-1">
                          <bdi>
                            $0.17M
                          </bdi>
                        </p>
                        <p className="fs-xs text-muted-2 mb-0">
                          Stock value held
                        </p>
                      </div>
                      <div className="d-flex flex-column gap-2 mt-auto">
                        <div>
                          <div className="d-flex align-items-center justify-content-between gap-2 mb-1">
                            <span className="fs-xs text-body-2">
                              Share of SKUs
                            </span>
                            <span className="fs-xs fw-semibold text-title">
                              <bdi>
                                50.0%
                              </bdi>
                            </span>
                          </div>
                          <div
                            className="progress progress-sm"
                            role="progressbar"
                            aria-label="Class C share of all SKUs"
                            aria-valuenow="50"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <div className="progress-bar bg-cat-slate" style={{ width: "50%" }} />
                          </div>
                        </div>
                        <div>
                          <div className="d-flex align-items-center justify-content-between gap-2 mb-1">
                            <span className="fs-xs text-body-2">
                              Share of value
                            </span>
                            <span className="fs-xs fw-semibold text-title">
                              <bdi>
                                6.0%
                              </bdi>
                            </span>
                          </div>
                          <div
                            className="progress progress-sm"
                            role="progressbar"
                            aria-label="Class C share of inventory value"
                            aria-valuenow="6"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <div className="progress-bar bg-cat-violet" style={{ width: "6%" }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Low stock & reorder alerts ===== */}
      <section className="mb-4" aria-labelledby="invt-alerts-title">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
          <div className="min-w-0">
            <h2 id="invt-alerts-title" className="fs-4 fw-bold text-title mb-1">
              {"Low Stock & Reorder Alerts"}
            </h2>
            <p className="fs-md text-body-2 mb-0">
              Every SKU that has run out, fallen below its reorder point, or is running its cover down.
            </p>
          </div>
          <div className="d-flex flex-wrap align-items-center gap-2">
            <span className="badge-soft tint-rose border-current d-inline-flex align-self-stretch align-items-center gap-2 px-3">
              {" "}
              <i className="icon-12" data-lucide="bell-ring" aria-hidden="true" />
              {" "}
              <bdi>
                964 need attention
              </bdi>
              {" "}
            </span>
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-outline-soft btn-18 rounded-circle"
                id="invtAlertsMenu"
                data-bs-toggle="dropdown"
                data-bs-offset="0,8"
                aria-expanded="false"
                aria-label="Alert options"
              >
                <i data-lucide="ellipsis-vertical" />
              </button>
              {" "}
              <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="invtAlertsMenu">
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="sliders-horizontal" />
                    Reorder rules
                  </button>
                </li>
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="send" />
                    Notify suppliers
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
        {/* Alert triage */}
        <ul className="list-unstyled row row-cols-1 row-cols-md-3 g-3 mb-3">
          <li className="col">
            <div className="card h-100 overflow-hidden text-cat-rose">
              <div className="card-body d-flex align-items-center gap-3">
                <span className="icon-box icon-box-lg tint-rose border-current" aria-hidden="true">
                  <i data-lucide="package-x" />
                </span>
                <div className="min-w-0">
                  <p className="fs-2 fw-bold text-title lh-1 mb-1">
                    <bdi>
                      48
                    </bdi>
                  </p>
                  <h3 className="fs-6 fw-semibold text-title text-truncate mb-0">
                    Out of stock
                  </h3>
                  <span className="d-block fs-xs text-muted-2 text-truncate">
                    <bdi>
                      $74.2K of sales at risk
                    </bdi>
                  </span>
                </div>
              </div>
              <span className="accent-edge-b" aria-hidden="true" />
            </div>
          </li>
          <li className="col">
            <div className="card h-100 overflow-hidden text-cat-amber">
              <div className="card-body d-flex align-items-center gap-3">
                <span className="icon-box icon-box-lg tint-amber border-current" aria-hidden="true">
                  <i data-lucide="package-search" />
                </span>
                <div className="min-w-0">
                  <p className="fs-2 fw-bold text-title lh-1 mb-1">
                    <bdi>
                      312
                    </bdi>
                  </p>
                  <h3 className="fs-6 fw-semibold text-title text-truncate mb-0">
                    Reorder now
                  </h3>
                  <span className="d-block fs-xs text-muted-2 text-truncate">
                    Below their reorder point
                  </span>
                </div>
              </div>
              <span className="accent-edge-b" aria-hidden="true" />
            </div>
          </li>
          <li className="col">
            <div className="card h-100 overflow-hidden text-cat-blue">
              <div className="card-body d-flex align-items-center gap-3">
                <span className="icon-box icon-box-lg tint-blue border-current" aria-hidden="true">
                  <i data-lucide="eye" />
                </span>
                <div className="min-w-0">
                  <p className="fs-2 fw-bold text-title lh-1 mb-1">
                    <bdi>
                      604
                    </bdi>
                  </p>
                  <h3 className="fs-6 fw-semibold text-title text-truncate mb-0">
                    Watch list
                  </h3>
                  <span className="d-block fs-xs text-muted-2 text-truncate">
                    <bdi>
                      15 to 30 days of cover left
                    </bdi>
                  </span>
                </div>
              </div>
              <span className="accent-edge-b" aria-hidden="true" />
            </div>
          </li>
        </ul>
        {/* Reorder queue */}
        <div className="card" data-bulk-scope="" data-filter-scope="">
          <div className="card-body">
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
              <div className="min-w-0">
                <h3 className="fs-5 fw-bold text-title mb-1">
                  Reorder Queue
                </h3>
                <p className="fs-md text-body-2 mb-0">
                  Ranked by how much revenue each shortfall is holding up
                </p>
              </div>
              <div
                className="nav nav-pills flex-nowrap gap-1 p-1 rounded-pill bg-soft scrollbar-none overflow-x-auto"
                role="group"
                aria-label="Filter the queue by alert severity"
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
                  data-filter="critical"
                  aria-pressed="false"
                >
                  Out of stock
                </button>
                <button
                  type="button"
                  className="nav-link fw-semibold text-nowrap"
                  data-filter="reorder"
                  aria-pressed="false"
                >
                  Reorder
                </button>
                <button
                  type="button"
                  className="nav-link fw-semibold text-nowrap"
                  data-filter="watch"
                  aria-pressed="false"
                >
                  Watch
                </button>
              </div>
            </div>
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
                  <i className="icon-18" data-lucide="alarm-clock" aria-hidden="true" />
                  Snooze 7 days
                </button>
                <button type="button" className="btn btn-primary d-inline-flex align-items-center gap-2 text-nowrap">
                  <i className="icon-18" data-lucide="clipboard-list" aria-hidden="true" />
                  Add to purchase order
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
                  SKUs needing a reorder decision, worst first
                </caption>
                <thead>
                  <tr>
                    <th scope="col">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="invtQueueSelectAll"
                        data-bulk-all=""
                        aria-label="Select all rows"
                      />
                    </th>
                    <th scope="col">
                      Product
                    </th>
                    <th scope="col">
                      Warehouse
                    </th>
                    <th scope="col">
                      Stock level
                    </th>
                    <th scope="col">
                      Cover
                    </th>
                    <th scope="col">
                      Status
                    </th>
                    <th scope="col">
                      Suggested qty
                    </th>
                    <th scope="col">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr data-filter-tags="critical">
                    <td>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        data-bulk-item=""
                        aria-label="Select Nebula ANC Headphones"
                      />
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar bg-plain">
                          <img src="/assets/images/inventory-3.jpg" alt="" width="40" height="40" />
                        </span>
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-nowrap">
                            Nebula ANC Headphones
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-nowrap">
                            <bdi>
                              ELC-2481 · Electronics
                            </bdi>
                          </span>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md text-body-2 text-nowrap">
                        East Hub
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="fs-md fw-semibold text-title text-nowrap">
                          <bdi>
                            0 / 200
                          </bdi>
                        </span>
                        <span
                          className="progress progress-sm progress-inline"
                          role="progressbar"
                          aria-label="Nebula ANC Headphones stock against its reorder point"
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="progress-bar bg-cat-rose" />
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-cat-rose text-nowrap">
                        <bdi>
                          0 days
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-rose text-nowrap">
                        Out of stock
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        <bdi>
                          600
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <button type="button" className="btn btn-primary-soft btn-sm fw-semibold text-nowrap">
                        Reorder
                      </button>
                    </td>
                  </tr>
                  <tr data-filter-tags="critical">
                    <td>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        data-bulk-item=""
                        aria-label="Select Blush High-Top Sneaker"
                      />
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar bg-plain">
                          <img src="/assets/images/inventory-1.jpg" alt="" width="40" height="40" />
                        </span>
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-nowrap">
                            Blush High-Top Sneaker
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-nowrap">
                            <bdi>
                              APR-7734 · Apparel
                            </bdi>
                          </span>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md text-body-2 text-nowrap">
                        Central DC
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="fs-md fw-semibold text-title text-nowrap">
                          <bdi>
                            0 / 120
                          </bdi>
                        </span>
                        <span
                          className="progress progress-sm progress-inline"
                          role="progressbar"
                          aria-label="Blush High-Top Sneaker stock against its reorder point"
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="progress-bar bg-cat-rose" />
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-cat-rose text-nowrap">
                        <bdi>
                          0 days
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-rose text-nowrap">
                        Out of stock
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        <bdi>
                          400
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <button type="button" className="btn btn-primary-soft btn-sm fw-semibold text-nowrap">
                        Reorder
                      </button>
                    </td>
                  </tr>
                  <tr data-filter-tags="reorder">
                    <td>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        data-bulk-item=""
                        aria-label="Select Velocity Trail Runner"
                      />
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar bg-plain">
                          <img src="/assets/images/inventory-6.jpg" alt="" width="40" height="40" />
                        </span>
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-nowrap">
                            Velocity Trail Runner
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-nowrap">
                            <bdi>
                              {"SPT-1902 · Sports & Outdoor"}
                            </bdi>
                          </span>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md text-body-2 text-nowrap">
                        Central DC
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="fs-md fw-semibold text-title text-nowrap">
                          <bdi>
                            34 / 150
                          </bdi>
                        </span>
                        <span
                          className="progress progress-sm progress-inline"
                          role="progressbar"
                          aria-label="Velocity Trail Runner stock against its reorder point"
                          aria-valuenow="23"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="progress-bar bg-cat-amber" style={{ width: "23%" }} />
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-cat-amber text-nowrap">
                        <bdi>
                          5 days
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-amber text-nowrap">
                        Reorder now
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        <bdi>
                          450
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <button type="button" className="btn btn-primary-soft btn-sm fw-semibold text-nowrap">
                        Reorder
                      </button>
                    </td>
                  </tr>
                  <tr data-filter-tags="reorder">
                    <td>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        data-bulk-item=""
                        aria-label="Select Emerald Leather Satchel"
                      />
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar bg-plain">
                          <img src="/assets/images/inventory-5.jpg" alt="" width="40" height="40" />
                        </span>
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-nowrap">
                            Emerald Leather Satchel
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-nowrap">
                            <bdi>
                              APR-4415 · Apparel
                            </bdi>
                          </span>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md text-body-2 text-nowrap">
                        West Depot
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="fs-md fw-semibold text-title text-nowrap">
                          <bdi>
                            68 / 180
                          </bdi>
                        </span>
                        <span
                          className="progress progress-sm progress-inline"
                          role="progressbar"
                          aria-label="Emerald Leather Satchel stock against its reorder point"
                          aria-valuenow="38"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="progress-bar bg-cat-amber" style={{ width: "38%" }} />
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-cat-amber text-nowrap">
                        <bdi>
                          9 days
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-amber text-nowrap">
                        Reorder now
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        <bdi>
                          500
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <button type="button" className="btn btn-primary-soft btn-sm fw-semibold text-nowrap">
                        Reorder
                      </button>
                    </td>
                  </tr>
                  <tr data-filter-tags="reorder">
                    <td>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        data-bulk-item=""
                        aria-label="Select Alpine Kids Puffer Jacket"
                      />
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar bg-plain">
                          <img src="/assets/images/inventory-4.jpg" alt="" width="40" height="40" />
                        </span>
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-nowrap">
                            Alpine Kids Puffer Jacket
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-nowrap">
                            <bdi>
                              APR-6620 · Apparel
                            </bdi>
                          </span>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md text-body-2 text-nowrap">
                        North Store
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="fs-md fw-semibold text-title text-nowrap">
                          <bdi>
                            96 / 220
                          </bdi>
                        </span>
                        <span
                          className="progress progress-sm progress-inline"
                          role="progressbar"
                          aria-label="Alpine Kids Puffer Jacket stock against its reorder point"
                          aria-valuenow="44"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="progress-bar bg-cat-amber" style={{ width: "44%" }} />
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-cat-amber text-nowrap">
                        <bdi>
                          12 days
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-amber text-nowrap">
                        Reorder now
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        <bdi>
                          600
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <button type="button" className="btn btn-primary-soft btn-sm fw-semibold text-nowrap">
                        Reorder
                      </button>
                    </td>
                  </tr>
                  <tr data-filter-tags="reorder">
                    <td>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        data-bulk-item=""
                        aria-label="Select Camel Leather Tote"
                      />
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar bg-plain">
                          <img src="/assets/images/inventory-7.jpg" alt="" width="40" height="40" />
                        </span>
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-nowrap">
                            Camel Leather Tote
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-nowrap">
                            <bdi>
                              APR-3308 · Apparel
                            </bdi>
                          </span>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md text-body-2 text-nowrap">
                        East Hub
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="fs-md fw-semibold text-title text-nowrap">
                          <bdi>
                            142 / 260
                          </bdi>
                        </span>
                        <span
                          className="progress progress-sm progress-inline"
                          role="progressbar"
                          aria-label="Camel Leather Tote stock against its reorder point"
                          aria-valuenow="55"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="progress-bar bg-cat-amber" style={{ width: "55%" }} />
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-cat-amber text-nowrap">
                        <bdi>
                          14 days
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-amber text-nowrap">
                        Reorder now
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        <bdi>
                          700
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <button type="button" className="btn btn-primary-soft btn-sm fw-semibold text-nowrap">
                        Reorder
                      </button>
                    </td>
                  </tr>
                  <tr data-filter-tags="watch">
                    <td>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        data-bulk-item=""
                        aria-label="Select Cobalt Court Sneaker"
                      />
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar bg-plain">
                          <img src="/assets/images/inventory-8.jpg" alt="" width="40" height="40" />
                        </span>
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-nowrap">
                            Cobalt Court Sneaker
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-nowrap">
                            <bdi>
                              APR-5177 · Apparel
                            </bdi>
                          </span>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md text-body-2 text-nowrap">
                        West Depot
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="fs-md fw-semibold text-title text-nowrap">
                          <bdi>
                            318 / 300
                          </bdi>
                        </span>
                        <span
                          className="progress progress-sm progress-inline"
                          role="progressbar"
                          aria-label="Cobalt Court Sneaker stock against its reorder point"
                          aria-valuenow="100"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="progress-bar bg-cat-blue" style={{ width: "100%" }} />
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-cat-blue text-nowrap">
                        <bdi>
                          22 days
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-blue text-nowrap">
                        Watch
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        <bdi>
                          400
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <button type="button" className="btn btn-primary-soft btn-sm fw-semibold text-nowrap">
                        Reorder
                      </button>
                    </td>
                  </tr>
                  <tr data-filter-tags="watch">
                    <td>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        data-bulk-item=""
                        aria-label="Select Nordic Knit Kids Hoodie"
                      />
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar bg-plain">
                          <img src="/assets/images/inventory-9.jpg" alt="" width="40" height="40" />
                        </span>
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-nowrap">
                            Nordic Knit Kids Hoodie
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-nowrap">
                            <bdi>
                              APR-8840 · Apparel
                            </bdi>
                          </span>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md text-body-2 text-nowrap">
                        Central DC
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="fs-md fw-semibold text-title text-nowrap">
                          <bdi>
                            245 / 240
                          </bdi>
                        </span>
                        <span
                          className="progress progress-sm progress-inline"
                          role="progressbar"
                          aria-label="Nordic Knit Kids Hoodie stock against its reorder point"
                          aria-valuenow="100"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="progress-bar bg-cat-blue" style={{ width: "100%" }} />
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-cat-blue text-nowrap">
                        <bdi>
                          27 days
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-blue text-nowrap">
                        Watch
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        <bdi>
                          300
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <button type="button" className="btn btn-primary-soft btn-sm fw-semibold text-nowrap">
                        Reorder
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 pt-3 mt-3 border-t-soft">
              <span className="fs-md text-muted-2">
                <bdi>
                  Showing 1–8 of 964 results
                </bdi>
              </span>
              <nav aria-label="Reorder queue pagination">
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
      {/* ===== Recent inventory activity ===== */}
      <section className="mb-4" aria-labelledby="invt-activity-title">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
          <div className="min-w-0">
            <h2 id="invt-activity-title" className="fs-4 fw-bold text-title mb-1">
              Recent Inventory Activity
            </h2>
            <p className="fs-md text-body-2 mb-0">
              Every receipt, pick and correction posted against stock in the last 24 hours.
            </p>
          </div>
          <div className="d-flex flex-wrap align-items-center gap-2">
            <span className="badge-soft tint-emerald border-current d-inline-flex align-self-stretch align-items-center gap-2 px-3">
              {" "}
              <i className="icon-12" data-lucide="history" aria-hidden="true" />
              {" "}
              <bdi>
                Live feed
              </bdi>
              {" "}
            </span>
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-outline-soft btn-18 rounded-circle"
                id="invtActivityMenu"
                data-bs-toggle="dropdown"
                data-bs-offset="0,8"
                aria-expanded="false"
                aria-label="Activity options"
              >
                <i data-lucide="ellipsis-vertical" />
              </button>
              {" "}
              <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="invtActivityMenu">
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="square-pen" />
                    New stock adjustment
                  </button>
                </li>
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="clipboard-check" />
                    Start cycle count
                  </button>
                </li>
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="download" />
                    Export movement log
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row g-3">
          {/* Stock in against stock out */}
          <div className="col-12 col-xl-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="min-w-0 mb-2">
                  <h3 className="fs-5 fw-bold text-title mb-1">
                    Net Movement
                  </h3>
                  <p className="fs-md text-body-2 mb-0">
                    Units received against units issued, last seven days
                  </p>
                </div>
                <ul className="list-unstyled d-flex flex-wrap align-items-center gap-3 mb-2">
                  <li className="d-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-emerald" aria-hidden="true" />
                    <span className="fs-md text-body-2">
                      Stock in
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-blue" aria-hidden="true" />
                    <span className="fs-md text-body-2">
                      Stock out
                    </span>
                  </li>
                </ul>
                <div className="my-auto">
                  <div id="invtStockFlowChart" className="chart-area" />
                </div>
                <div className="d-flex flex-wrap align-items-end justify-content-between gap-2 border-t-soft pt-3 mt-3">
                  <span className="min-w-0">
                    {" "}
                    <span className="d-block fs-xs fw-semibold text-uppercase text-muted-2">
                      Net change today
                    </span>
                    {" "}
                    <span className="d-block fs-3 fw-bold text-cat-emerald lh-1">
                      <bdi>
                        +1,570
                      </bdi>
                    </span>
                    {" "}
                  </span>
                  <span className="fs-xs text-muted-2">
                    <bdi>
                      units across 4 warehouses
                    </bdi>
                  </span>
                </div>
                <ul className="list-unstyled d-flex flex-column gap-3 mt-3 mb-0">
                  <li className="d-flex align-items-center gap-2">
                    <span className="icon-box icon-box-sm tint-emerald border-current" aria-hidden="true">
                      <i data-lucide="package-plus" />
                    </span>
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-block fs-md fw-medium text-title text-truncate">
                        Stock in
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        <bdi>
                          18 receipts posted
                        </bdi>
                      </span>
                      {" "}
                    </span>
                    <span className="fs-6 fw-semibold text-cat-emerald text-nowrap">
                      <bdi>
                        +4,820
                      </bdi>
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <span className="icon-box icon-box-sm tint-blue border-current" aria-hidden="true">
                      <i data-lucide="package-minus" />
                    </span>
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-block fs-md fw-medium text-title text-truncate">
                        Stock out
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        <bdi>
                          96 orders picked
                        </bdi>
                      </span>
                      {" "}
                    </span>
                    <span className="fs-6 fw-semibold text-cat-blue text-nowrap">
                      <bdi>
                        -3,164
                      </bdi>
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <span className="icon-box icon-box-sm tint-amber border-current" aria-hidden="true">
                      <i data-lucide="clipboard-check" />
                    </span>
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-block fs-md fw-medium text-title text-truncate">
                        Adjustments
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        <bdi>
                          12 corrections logged
                        </bdi>
                      </span>
                      {" "}
                    </span>
                    <span className="fs-6 fw-semibold text-cat-amber text-nowrap">
                      <bdi>
                        -86
                      </bdi>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Movement log */}
          <div className="col-12 col-xl-8">
            <div className="card h-100" data-filter-scope="">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
                  <div className="min-w-0">
                    <h3 className="fs-5 fw-bold text-title mb-1">
                      Movement Log
                    </h3>
                    <p className="fs-md text-body-2 mb-0">
                      Newest first, across every warehouse
                    </p>
                  </div>
                  <div
                    className="nav nav-pills flex-nowrap gap-1 p-1 rounded-pill bg-soft scrollbar-none overflow-x-auto"
                    role="group"
                    aria-label="Filter the log by movement type"
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
                      data-filter="in"
                      aria-pressed="false"
                    >
                      Stock in
                    </button>
                    <button
                      type="button"
                      className="nav-link fw-semibold text-nowrap"
                      data-filter="out"
                      aria-pressed="false"
                    >
                      Stock out
                    </button>
                    <button
                      type="button"
                      className="nav-link fw-semibold text-nowrap"
                      data-filter="adjust"
                      aria-pressed="false"
                    >
                      Adjustments
                    </button>
                  </div>
                </div>
                <p className="fs-xs fw-semibold text-uppercase text-muted-2 mb-2">
                  <bdi>
                    Today · 26 August 2026
                  </bdi>
                </p>
                <ol className="rail-list list-unstyled d-flex flex-column mb-0">
                  <li className="d-flex align-items-center gap-3 py-2" data-filter-tags="out">
                    <span className="rail-dot bg-cat-blue" aria-hidden="true" />
                    <span className="flex-grow-1 min-w-0 d-flex align-items-center gap-2 gap-sm-3 rounded-3 px-2 px-sm-3 py-2">
                      <span className="icon-box icon-box-sm tint-blue border-current" aria-hidden="true">
                        <i data-lucide="package-minus" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-title text-truncate">
                          Sales order SO-99310 picked
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-truncate">
                          <bdi>
                            Cobalt Court Sneaker · APR-5177 · West Depot
                          </bdi>
                        </span>
                        {" "}
                      </span>
                      <span className="d-none d-lg-inline-flex align-items-center gap-2 flex-shrink-0">
                        <span className="avatar avatar-xs">
                          <img src="/assets/images/avatar-1.png" width="28" height="28" alt="" />
                        </span>
                        <span className="fs-xs text-muted-2 text-nowrap">
                          Marcus Feld
                        </span>
                      </span>
                      <span className="text-end flex-shrink-0">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-cat-blue text-nowrap">
                          <bdi>
                            -180
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-nowrap">
                          <bdi>
                            14:32
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3 py-2" data-filter-tags="in">
                    <span className="rail-dot bg-cat-emerald" aria-hidden="true" />
                    <span className="flex-grow-1 min-w-0 d-flex align-items-center gap-2 gap-sm-3 rounded-3 px-2 px-sm-3 py-2">
                      <span className="icon-box icon-box-sm tint-emerald border-current" aria-hidden="true">
                        <i data-lucide="package-plus" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-title text-truncate">
                          Purchase order PO-4821 received
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-truncate">
                          <bdi>
                            Aurora Canvas Backpack · SPT-2290 · Central DC
                          </bdi>
                        </span>
                        {" "}
                      </span>
                      <span className="d-none d-lg-inline-flex align-items-center gap-2 flex-shrink-0">
                        <span className="avatar avatar-xs">
                          <img src="/assets/images/avatar-2.png" width="28" height="28" alt="" />
                        </span>
                        <span className="fs-xs text-muted-2 text-nowrap">
                          Priya Nair
                        </span>
                      </span>
                      <span className="text-end flex-shrink-0">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-cat-emerald text-nowrap">
                          <bdi>
                            +600
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-nowrap">
                          <bdi>
                            13:58
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3 py-2" data-filter-tags="adjust">
                    <span className="rail-dot bg-cat-amber" aria-hidden="true" />
                    <span className="flex-grow-1 min-w-0 d-flex align-items-center gap-2 gap-sm-3 rounded-3 px-2 px-sm-3 py-2">
                      <span className="icon-box icon-box-sm tint-amber border-current" aria-hidden="true">
                        <i data-lucide="clipboard-check" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-title text-truncate">
                          Cycle count correction
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-truncate">
                          <bdi>
                            Camel Leather Tote · APR-3308 · East Hub
                          </bdi>
                        </span>
                        {" "}
                      </span>
                      <span className="d-none d-lg-inline-flex align-items-center gap-2 flex-shrink-0">
                        <span className="avatar avatar-xs">
                          <img src="/assets/images/avatar-3.png" width="28" height="28" alt="" />
                        </span>
                        <span className="fs-xs text-muted-2 text-nowrap">
                          Sofia Reyes
                        </span>
                      </span>
                      <span className="text-end flex-shrink-0">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-cat-amber text-nowrap">
                          <bdi>
                            -14
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-nowrap">
                          <bdi>
                            12:45
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3 py-2" data-filter-tags="out">
                    <span className="rail-dot bg-cat-blue" aria-hidden="true" />
                    <span className="flex-grow-1 min-w-0 d-flex align-items-center gap-2 gap-sm-3 rounded-3 px-2 px-sm-3 py-2">
                      <span className="icon-box icon-box-sm tint-blue border-current" aria-hidden="true">
                        <i data-lucide="package-minus" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-title text-truncate">
                          Sales order SO-99284 picked
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-truncate">
                          <bdi>
                            Emerald Leather Satchel · APR-4415 · West Depot
                          </bdi>
                        </span>
                        {" "}
                      </span>
                      <span className="d-none d-lg-inline-flex align-items-center gap-2 flex-shrink-0">
                        <span className="avatar avatar-xs">
                          <img src="/assets/images/avatar-4.png" width="28" height="28" alt="" />
                        </span>
                        <span className="fs-xs text-muted-2 text-nowrap">
                          Jordan Davis
                        </span>
                      </span>
                      <span className="text-end flex-shrink-0">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-cat-blue text-nowrap">
                          <bdi>
                            -96
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-nowrap">
                          <bdi>
                            11:20
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3 py-2" data-filter-tags="in">
                    <span className="rail-dot bg-cat-emerald" aria-hidden="true" />
                    <span className="flex-grow-1 min-w-0 d-flex align-items-center gap-2 gap-sm-3 rounded-3 px-2 px-sm-3 py-2">
                      <span className="icon-box icon-box-sm tint-emerald border-current" aria-hidden="true">
                        <i data-lucide="package-plus" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-title text-truncate">
                          Transfer received from North Store
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-truncate">
                          <bdi>
                            Nordic Knit Kids Hoodie · APR-8840 · Central DC
                          </bdi>
                        </span>
                        {" "}
                      </span>
                      <span className="d-none d-lg-inline-flex align-items-center gap-2 flex-shrink-0">
                        <span className="avatar avatar-xs">
                          <img src="/assets/images/avatar-user.png" width="28" height="28" alt="" />
                        </span>
                        <span className="fs-xs text-muted-2 text-nowrap">
                          Ravisha V
                        </span>
                      </span>
                      <span className="text-end flex-shrink-0">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-cat-emerald text-nowrap">
                          <bdi>
                            +120
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-nowrap">
                          <bdi>
                            10:04
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3 py-2" data-filter-tags="adjust">
                    <span className="rail-dot bg-cat-amber" aria-hidden="true" />
                    <span className="flex-grow-1 min-w-0 d-flex align-items-center gap-2 gap-sm-3 rounded-3 px-2 px-sm-3 py-2">
                      <span className="icon-box icon-box-sm tint-amber border-current" aria-hidden="true">
                        <i data-lucide="clipboard-check" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-title text-truncate">
                          Damaged goods written off
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-truncate">
                          <bdi>
                            Alpine Kids Puffer Jacket · APR-6620 · North Store
                          </bdi>
                        </span>
                        {" "}
                      </span>
                      <span className="d-none d-lg-inline-flex align-items-center gap-2 flex-shrink-0">
                        <span className="avatar avatar-xs">
                          <img src="/assets/images/avatar-3.png" width="28" height="28" alt="" />
                        </span>
                        <span className="fs-xs text-muted-2 text-nowrap">
                          Sofia Reyes
                        </span>
                      </span>
                      <span className="text-end flex-shrink-0">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-cat-amber text-nowrap">
                          <bdi>
                            -22
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-nowrap">
                          <bdi>
                            09:12
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3 py-2" data-filter-tags="in">
                    <span className="rail-dot bg-cat-emerald" aria-hidden="true" />
                    <span className="flex-grow-1 min-w-0 d-flex align-items-center gap-2 gap-sm-3 rounded-3 px-2 px-sm-3 py-2">
                      <span className="icon-box icon-box-sm tint-emerald border-current" aria-hidden="true">
                        <i data-lucide="package-plus" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-title text-truncate">
                          Purchase order PO-4816 received
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-truncate">
                          <bdi>
                            Solstice Linen Shirt · APR-7712 · East Hub
                          </bdi>
                        </span>
                        {" "}
                      </span>
                      <span className="d-none d-lg-inline-flex align-items-center gap-2 flex-shrink-0">
                        <span className="avatar avatar-xs">
                          <img src="/assets/images/avatar-2.png" width="28" height="28" alt="" />
                        </span>
                        <span className="fs-xs text-muted-2 text-nowrap">
                          Priya Nair
                        </span>
                      </span>
                      <span className="text-end flex-shrink-0">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-cat-emerald text-nowrap">
                          <bdi>
                            +840
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-nowrap">
                          <bdi>
                            08:35
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </span>
                  </li>
                </ol>
                <div className="border-t-soft pt-3 mt-3">
                  <a
                    href="#"
                    className="btn btn-outline-soft w-100 d-inline-flex align-items-center justify-content-center gap-2 text-nowrap"
                  >
                    {" "}View full movement history{" "}
                    <i className="icon-18 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                    {" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Product / stock overview ===== */}
      <section className="mb-4" aria-labelledby="invt-products-title">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
          <div className="min-w-0">
            <h2 id="invt-products-title" className="fs-4 fw-bold text-title mb-1">
              Product / Stock Overview
            </h2>
            <p className="fs-md text-body-2 mb-0">
              Quantity on hand, stock value and status for every tracked SKU.
            </p>
          </div>
          <div className="d-flex flex-wrap align-items-center gap-2">
            <span className="badge-soft tint-blue border-current d-inline-flex align-self-stretch align-items-center gap-2 px-3">
              {" "}
              <i className="icon-12" data-lucide="boxes" aria-hidden="true" />
              {" "}
              <bdi>
                4,286 SKUs · $2.84M
              </bdi>
              {" "}
            </span>
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-outline-soft btn-18 rounded-circle"
                id="invtProductsMenu"
                data-bs-toggle="dropdown"
                data-bs-offset="0,8"
                aria-expanded="false"
                aria-label="Catalogue options"
              >
                <i data-lucide="ellipsis-vertical" />
              </button>
              {" "}
              <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="invtProductsMenu">
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="plus" />
                    Add product
                  </button>
                </li>
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="upload" />
                    Import from CSV
                  </button>
                </li>
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="download" />
                    Export catalogue
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body" data-view-switch="">
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
              <div className="min-w-0">
                <h3 className="fs-5 fw-bold text-title mb-1">
                  Product Catalogue
                </h3>
                <p className="fs-md text-body-2 mb-0">
                  Every SKU measured against the reorder point set for it
                </p>
              </div>
              <div
                className="nav nav-pills seg-toggle flex-nowrap gap-1 p-1 rounded-pill bg-soft"
                role="group"
                aria-label="Catalogue view"
              >
                <button
                  type="button"
                  className="nav-link active fw-semibold d-inline-flex align-items-center gap-2"
                  data-view-target="grid"
                  aria-pressed="true"
                >
                  <i className="icon-16" data-lucide="layout-grid" aria-hidden="true" />
                  Grid
                </button>
                <button
                  type="button"
                  className="nav-link fw-semibold d-inline-flex align-items-center gap-2"
                  data-view-target="table"
                  aria-pressed="false"
                >
                  <i className="icon-16" data-lucide="list" aria-hidden="true" />
                  Table
                </button>
              </div>
            </div>
            {/* Grid view */}
            <ul
              className="list-unstyled row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 g-3 mb-0"
              data-view-panel="grid"
            >
              <li className="col">
                <div className="border-theme rounded-4 h-100 d-flex flex-column gap-3 p-3">
                  <div className="d-flex align-items-center gap-2">
                    <span className="avatar avatar-lg bg-plain flex-shrink-0">
                      <img src="/assets/images/inventory-6.jpg" alt="" width="56" height="56" />
                    </span>
                    <div className="flex-grow-1 min-w-0">
                      <h4 className="fs-6 fw-semibold text-title mb-0">
                        Velocity Trail Runner
                      </h4>
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        <bdi>
                          {"SPT-1902 · Sports & Outdoor"}
                        </bdi>
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-end justify-content-between gap-2">
                    <span className="min-w-0">
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        On hand
                      </span>
                      {" "}
                      <span className="d-block fs-5 fw-bold text-title lh-1">
                        <bdi>
                          34
                        </bdi>
                      </span>
                      {" "}
                    </span>
                    <span className="text-end min-w-0">
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        Stock value
                      </span>
                      {" "}
                      <span className="d-block fs-5 fw-bold text-title lh-1">
                        <bdi>
                          $2.9K
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </div>
                  <div className="mt-auto">
                    <div className="d-flex align-items-center justify-content-between gap-2 mb-1">
                      <span className="badge-soft tint-amber">
                        Low stock
                      </span>
                      <span className="fs-xs text-muted-2">
                        <bdi>
                          34 of 150
                        </bdi>
                      </span>
                    </div>
                    <div
                      className="progress progress-sm"
                      role="progressbar"
                      aria-label="Velocity Trail Runner stock against its reorder point"
                      aria-valuenow="23"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-amber" style={{ width: "23%" }} />
                    </div>
                  </div>
                </div>
              </li>
              <li className="col">
                <div className="border-theme rounded-4 h-100 d-flex flex-column gap-3 p-3">
                  <div className="d-flex align-items-center gap-2">
                    <span className="avatar avatar-lg bg-plain flex-shrink-0">
                      <img src="/assets/images/inventory-5.jpg" alt="" width="56" height="56" />
                    </span>
                    <div className="flex-grow-1 min-w-0">
                      <h4 className="fs-6 fw-semibold text-title mb-0">
                        Emerald Leather Satchel
                      </h4>
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        <bdi>
                          APR-4415 · Apparel
                        </bdi>
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-end justify-content-between gap-2">
                    <span className="min-w-0">
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        On hand
                      </span>
                      {" "}
                      <span className="d-block fs-5 fw-bold text-title lh-1">
                        <bdi>
                          68
                        </bdi>
                      </span>
                      {" "}
                    </span>
                    <span className="text-end min-w-0">
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        Stock value
                      </span>
                      {" "}
                      <span className="d-block fs-5 fw-bold text-title lh-1">
                        <bdi>
                          $9.7K
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </div>
                  <div className="mt-auto">
                    <div className="d-flex align-items-center justify-content-between gap-2 mb-1">
                      <span className="badge-soft tint-amber">
                        Low stock
                      </span>
                      <span className="fs-xs text-muted-2">
                        <bdi>
                          68 of 180
                        </bdi>
                      </span>
                    </div>
                    <div
                      className="progress progress-sm"
                      role="progressbar"
                      aria-label="Emerald Leather Satchel stock against its reorder point"
                      aria-valuenow="38"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-amber" style={{ width: "38%" }} />
                    </div>
                  </div>
                </div>
              </li>
              <li className="col">
                <div className="border-theme rounded-4 h-100 d-flex flex-column gap-3 p-3">
                  <div className="d-flex align-items-center gap-2">
                    <span className="avatar avatar-lg bg-plain flex-shrink-0">
                      <img src="/assets/images/inventory-4.jpg" alt="" width="56" height="56" />
                    </span>
                    <div className="flex-grow-1 min-w-0">
                      <h4 className="fs-6 fw-semibold text-title mb-0">
                        Alpine Kids Puffer Jacket
                      </h4>
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        <bdi>
                          APR-6620 · Apparel
                        </bdi>
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-end justify-content-between gap-2">
                    <span className="min-w-0">
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        On hand
                      </span>
                      {" "}
                      <span className="d-block fs-5 fw-bold text-title lh-1">
                        <bdi>
                          96
                        </bdi>
                      </span>
                      {" "}
                    </span>
                    <span className="text-end min-w-0">
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        Stock value
                      </span>
                      {" "}
                      <span className="d-block fs-5 fw-bold text-title lh-1">
                        <bdi>
                          $6.1K
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </div>
                  <div className="mt-auto">
                    <div className="d-flex align-items-center justify-content-between gap-2 mb-1">
                      <span className="badge-soft tint-amber">
                        Low stock
                      </span>
                      <span className="fs-xs text-muted-2">
                        <bdi>
                          96 of 220
                        </bdi>
                      </span>
                    </div>
                    <div
                      className="progress progress-sm"
                      role="progressbar"
                      aria-label="Alpine Kids Puffer Jacket stock against its reorder point"
                      aria-valuenow="44"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-amber" style={{ width: "44%" }} />
                    </div>
                  </div>
                </div>
              </li>
              <li className="col">
                <div className="border-theme rounded-4 h-100 d-flex flex-column gap-3 p-3">
                  <div className="d-flex align-items-center gap-2">
                    <span className="avatar avatar-lg bg-plain flex-shrink-0">
                      <img src="/assets/images/inventory-7.jpg" alt="" width="56" height="56" />
                    </span>
                    <div className="flex-grow-1 min-w-0">
                      <h4 className="fs-6 fw-semibold text-title mb-0">
                        Camel Leather Tote
                      </h4>
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        <bdi>
                          APR-3308 · Apparel
                        </bdi>
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-end justify-content-between gap-2">
                    <span className="min-w-0">
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        On hand
                      </span>
                      {" "}
                      <span className="d-block fs-5 fw-bold text-title lh-1">
                        <bdi>
                          142
                        </bdi>
                      </span>
                      {" "}
                    </span>
                    <span className="text-end min-w-0">
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        Stock value
                      </span>
                      {" "}
                      <span className="d-block fs-5 fw-bold text-title lh-1">
                        <bdi>
                          $16.8K
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </div>
                  <div className="mt-auto">
                    <div className="d-flex align-items-center justify-content-between gap-2 mb-1">
                      <span className="badge-soft tint-amber">
                        Low stock
                      </span>
                      <span className="fs-xs text-muted-2">
                        <bdi>
                          142 of 260
                        </bdi>
                      </span>
                    </div>
                    <div
                      className="progress progress-sm"
                      role="progressbar"
                      aria-label="Camel Leather Tote stock against its reorder point"
                      aria-valuenow="55"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-amber" style={{ width: "55%" }} />
                    </div>
                  </div>
                </div>
              </li>
              <li className="col">
                <div className="border-theme rounded-4 h-100 d-flex flex-column gap-3 p-3">
                  <div className="d-flex align-items-center gap-2">
                    <span className="avatar avatar-lg bg-plain flex-shrink-0">
                      <img src="/assets/images/inventory-8.jpg" alt="" width="56" height="56" />
                    </span>
                    <div className="flex-grow-1 min-w-0">
                      <h4 className="fs-6 fw-semibold text-title mb-0">
                        Cobalt Court Sneaker
                      </h4>
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        <bdi>
                          APR-5177 · Apparel
                        </bdi>
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-end justify-content-between gap-2">
                    <span className="min-w-0">
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        On hand
                      </span>
                      {" "}
                      <span className="d-block fs-5 fw-bold text-title lh-1">
                        <bdi>
                          318
                        </bdi>
                      </span>
                      {" "}
                    </span>
                    <span className="text-end min-w-0">
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        Stock value
                      </span>
                      {" "}
                      <span className="d-block fs-5 fw-bold text-title lh-1">
                        <bdi>
                          $29.9K
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </div>
                  <div className="mt-auto">
                    <div className="d-flex align-items-center justify-content-between gap-2 mb-1">
                      <span className="badge-soft tint-emerald">
                        In stock
                      </span>
                      <span className="fs-xs text-muted-2">
                        <bdi>
                          318 of 300
                        </bdi>
                      </span>
                    </div>
                    <div
                      className="progress progress-sm"
                      role="progressbar"
                      aria-label="Cobalt Court Sneaker stock against its reorder point"
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-emerald" style={{ width: "100%" }} />
                    </div>
                  </div>
                </div>
              </li>
              <li className="col">
                <div className="border-theme rounded-4 h-100 d-flex flex-column gap-3 p-3">
                  <div className="d-flex align-items-center gap-2">
                    <span className="avatar avatar-lg bg-plain flex-shrink-0">
                      <img src="/assets/images/inventory-9.jpg" alt="" width="56" height="56" />
                    </span>
                    <div className="flex-grow-1 min-w-0">
                      <h4 className="fs-6 fw-semibold text-title mb-0">
                        Nordic Knit Kids Hoodie
                      </h4>
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        <bdi>
                          APR-8840 · Apparel
                        </bdi>
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-end justify-content-between gap-2">
                    <span className="min-w-0">
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        On hand
                      </span>
                      {" "}
                      <span className="d-block fs-5 fw-bold text-title lh-1">
                        <bdi>
                          245
                        </bdi>
                      </span>
                      {" "}
                    </span>
                    <span className="text-end min-w-0">
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        Stock value
                      </span>
                      {" "}
                      <span className="d-block fs-5 fw-bold text-title lh-1">
                        <bdi>
                          $11.8K
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </div>
                  <div className="mt-auto">
                    <div className="d-flex align-items-center justify-content-between gap-2 mb-1">
                      <span className="badge-soft tint-emerald">
                        In stock
                      </span>
                      <span className="fs-xs text-muted-2">
                        <bdi>
                          245 of 240
                        </bdi>
                      </span>
                    </div>
                    <div
                      className="progress progress-sm"
                      role="progressbar"
                      aria-label="Nordic Knit Kids Hoodie stock against its reorder point"
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-emerald" style={{ width: "100%" }} />
                    </div>
                  </div>
                </div>
              </li>
              <li className="col">
                <div className="border-theme rounded-4 h-100 d-flex flex-column gap-3 p-3">
                  <div className="d-flex align-items-center gap-2">
                    <span className="avatar avatar-lg bg-plain flex-shrink-0">
                      <img src="/assets/images/inventory-3.jpg" alt="" width="56" height="56" />
                    </span>
                    <div className="flex-grow-1 min-w-0">
                      <h4 className="fs-6 fw-semibold text-title mb-0">
                        Nebula ANC Headphones
                      </h4>
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        <bdi>
                          ELC-2481 · Electronics
                        </bdi>
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-end justify-content-between gap-2">
                    <span className="min-w-0">
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        On hand
                      </span>
                      {" "}
                      <span className="d-block fs-5 fw-bold text-title lh-1">
                        <bdi>
                          0
                        </bdi>
                      </span>
                      {" "}
                    </span>
                    <span className="text-end min-w-0">
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        Stock value
                      </span>
                      {" "}
                      <span className="d-block fs-5 fw-bold text-title lh-1">
                        <bdi>
                          $0
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </div>
                  <div className="mt-auto">
                    <div className="d-flex align-items-center justify-content-between gap-2 mb-1">
                      <span className="badge-soft tint-rose">
                        Out of stock
                      </span>
                      <span className="fs-xs text-muted-2">
                        <bdi>
                          0 of 200
                        </bdi>
                      </span>
                    </div>
                    <div
                      className="progress progress-sm"
                      role="progressbar"
                      aria-label="Nebula ANC Headphones stock against its reorder point"
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-rose" />
                    </div>
                  </div>
                </div>
              </li>
              <li className="col">
                <div className="border-theme rounded-4 h-100 d-flex flex-column gap-3 p-3">
                  <div className="d-flex align-items-center gap-2">
                    <span className="avatar avatar-lg bg-plain flex-shrink-0">
                      <img src="/assets/images/inventory-1.jpg" alt="" width="56" height="56" />
                    </span>
                    <div className="flex-grow-1 min-w-0">
                      <h4 className="fs-6 fw-semibold text-title mb-0">
                        Blush High-Top Sneaker
                      </h4>
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        <bdi>
                          APR-7734 · Apparel
                        </bdi>
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-end justify-content-between gap-2">
                    <span className="min-w-0">
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        On hand
                      </span>
                      {" "}
                      <span className="d-block fs-5 fw-bold text-title lh-1">
                        <bdi>
                          0
                        </bdi>
                      </span>
                      {" "}
                    </span>
                    <span className="text-end min-w-0">
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        Stock value
                      </span>
                      {" "}
                      <span className="d-block fs-5 fw-bold text-title lh-1">
                        <bdi>
                          $0
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </div>
                  <div className="mt-auto">
                    <div className="d-flex align-items-center justify-content-between gap-2 mb-1">
                      <span className="badge-soft tint-rose">
                        Out of stock
                      </span>
                      <span className="fs-xs text-muted-2">
                        <bdi>
                          0 of 120
                        </bdi>
                      </span>
                    </div>
                    <div
                      className="progress progress-sm"
                      role="progressbar"
                      aria-label="Blush High-Top Sneaker stock against its reorder point"
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-rose" />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            {/* Table view */}
            {" "}
            <div className="table-responsive d-none" data-view-panel="table">
              <table className="table table-hover align-middle mb-0">
                <caption className="visually-hidden">
                  Tracked products with quantity on hand, stock value and status
                </caption>
                <thead>
                  <tr>
                    <th scope="col">
                      Product
                    </th>
                    <th scope="col">
                      Category
                    </th>
                    <th scope="col">
                      On hand
                    </th>
                    <th scope="col">
                      Stock value
                    </th>
                    <th scope="col">
                      Status
                    </th>
                    <th scope="col">
                      Against reorder point
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar bg-plain">
                          <img src="/assets/images/inventory-6.jpg" alt="" width="40" height="40" />
                        </span>
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-nowrap">
                            Velocity Trail Runner
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-nowrap">
                            <bdi>
                              SPT-1902
                            </bdi>
                          </span>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md text-body-2 text-nowrap">
                        {"Sports & Outdoor"}
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        <bdi>
                          34
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        <bdi>
                          $2.9K
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-amber text-nowrap">
                        Low stock
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span
                          className="progress progress-sm progress-inline"
                          role="progressbar"
                          aria-label="Velocity Trail Runner stock against its reorder point"
                          aria-valuenow="23"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="progress-bar bg-cat-amber" style={{ width: "23%" }} />
                        </span>
                        <span className="fs-xs text-muted-2 text-nowrap">
                          <bdi>
                            34 of 150
                          </bdi>
                        </span>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar bg-plain">
                          <img src="/assets/images/inventory-5.jpg" alt="" width="40" height="40" />
                        </span>
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-nowrap">
                            Emerald Leather Satchel
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-nowrap">
                            <bdi>
                              APR-4415
                            </bdi>
                          </span>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md text-body-2 text-nowrap">
                        Apparel
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        <bdi>
                          68
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        <bdi>
                          $9.7K
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-amber text-nowrap">
                        Low stock
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span
                          className="progress progress-sm progress-inline"
                          role="progressbar"
                          aria-label="Emerald Leather Satchel stock against its reorder point"
                          aria-valuenow="38"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="progress-bar bg-cat-amber" style={{ width: "38%" }} />
                        </span>
                        <span className="fs-xs text-muted-2 text-nowrap">
                          <bdi>
                            68 of 180
                          </bdi>
                        </span>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar bg-plain">
                          <img src="/assets/images/inventory-4.jpg" alt="" width="40" height="40" />
                        </span>
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-nowrap">
                            Alpine Kids Puffer Jacket
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-nowrap">
                            <bdi>
                              APR-6620
                            </bdi>
                          </span>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md text-body-2 text-nowrap">
                        Apparel
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        <bdi>
                          96
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        <bdi>
                          $6.1K
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-amber text-nowrap">
                        Low stock
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span
                          className="progress progress-sm progress-inline"
                          role="progressbar"
                          aria-label="Alpine Kids Puffer Jacket stock against its reorder point"
                          aria-valuenow="44"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="progress-bar bg-cat-amber" style={{ width: "44%" }} />
                        </span>
                        <span className="fs-xs text-muted-2 text-nowrap">
                          <bdi>
                            96 of 220
                          </bdi>
                        </span>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar bg-plain">
                          <img src="/assets/images/inventory-7.jpg" alt="" width="40" height="40" />
                        </span>
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-nowrap">
                            Camel Leather Tote
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-nowrap">
                            <bdi>
                              APR-3308
                            </bdi>
                          </span>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md text-body-2 text-nowrap">
                        Apparel
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        <bdi>
                          142
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        <bdi>
                          $16.8K
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-amber text-nowrap">
                        Low stock
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span
                          className="progress progress-sm progress-inline"
                          role="progressbar"
                          aria-label="Camel Leather Tote stock against its reorder point"
                          aria-valuenow="55"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="progress-bar bg-cat-amber" style={{ width: "55%" }} />
                        </span>
                        <span className="fs-xs text-muted-2 text-nowrap">
                          <bdi>
                            142 of 260
                          </bdi>
                        </span>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar bg-plain">
                          <img src="/assets/images/inventory-8.jpg" alt="" width="40" height="40" />
                        </span>
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-nowrap">
                            Cobalt Court Sneaker
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-nowrap">
                            <bdi>
                              APR-5177
                            </bdi>
                          </span>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md text-body-2 text-nowrap">
                        Apparel
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        <bdi>
                          318
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        <bdi>
                          $29.9K
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-emerald text-nowrap">
                        In stock
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span
                          className="progress progress-sm progress-inline"
                          role="progressbar"
                          aria-label="Cobalt Court Sneaker stock against its reorder point"
                          aria-valuenow="100"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="progress-bar bg-cat-emerald" style={{ width: "100%" }} />
                        </span>
                        <span className="fs-xs text-muted-2 text-nowrap">
                          <bdi>
                            318 of 300
                          </bdi>
                        </span>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar bg-plain">
                          <img src="/assets/images/inventory-9.jpg" alt="" width="40" height="40" />
                        </span>
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-nowrap">
                            Nordic Knit Kids Hoodie
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-nowrap">
                            <bdi>
                              APR-8840
                            </bdi>
                          </span>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md text-body-2 text-nowrap">
                        Apparel
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        <bdi>
                          245
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        <bdi>
                          $11.8K
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-emerald text-nowrap">
                        In stock
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span
                          className="progress progress-sm progress-inline"
                          role="progressbar"
                          aria-label="Nordic Knit Kids Hoodie stock against its reorder point"
                          aria-valuenow="100"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="progress-bar bg-cat-emerald" style={{ width: "100%" }} />
                        </span>
                        <span className="fs-xs text-muted-2 text-nowrap">
                          <bdi>
                            245 of 240
                          </bdi>
                        </span>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar bg-plain">
                          <img src="/assets/images/inventory-3.jpg" alt="" width="40" height="40" />
                        </span>
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-nowrap">
                            Nebula ANC Headphones
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-nowrap">
                            <bdi>
                              ELC-2481
                            </bdi>
                          </span>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md text-body-2 text-nowrap">
                        Electronics
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        <bdi>
                          0
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        <bdi>
                          $0
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-rose text-nowrap">
                        Out of stock
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span
                          className="progress progress-sm progress-inline"
                          role="progressbar"
                          aria-label="Nebula ANC Headphones stock against its reorder point"
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="progress-bar bg-cat-rose" />
                        </span>
                        <span className="fs-xs text-muted-2 text-nowrap">
                          <bdi>
                            0 of 200
                          </bdi>
                        </span>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar bg-plain">
                          <img src="/assets/images/inventory-1.jpg" alt="" width="40" height="40" />
                        </span>
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-nowrap">
                            Blush High-Top Sneaker
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-nowrap">
                            <bdi>
                              APR-7734
                            </bdi>
                          </span>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md text-body-2 text-nowrap">
                        Apparel
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        <bdi>
                          0
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        <bdi>
                          $0
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-rose text-nowrap">
                        Out of stock
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span
                          className="progress progress-sm progress-inline"
                          role="progressbar"
                          aria-label="Blush High-Top Sneaker stock against its reorder point"
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="progress-bar bg-cat-rose" />
                        </span>
                        <span className="fs-xs text-muted-2 text-nowrap">
                          <bdi>
                            0 of 120
                          </bdi>
                        </span>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 pt-3 mt-3 border-t-soft">
              <span className="fs-md text-muted-2">
                <bdi>
                  Showing 1–8 of 4,286 products
                </bdi>
              </span>
              <nav aria-label="Product catalogue pagination">
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
      {/* ===== Warehouse / location overview ===== */}
      <section className="mb-4" aria-labelledby="invt-warehouse-title">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
          <div className="min-w-0">
            <h2 id="invt-warehouse-title" className="fs-4 fw-bold text-title mb-1">
              Warehouse / Location Overview
            </h2>
            <p className="fs-md text-body-2 mb-0">
              Where the stock on hand actually sits, and how much room each site has left.
            </p>
          </div>
          <div className="d-flex flex-wrap align-items-center gap-2">
            <span className="badge-soft tint-brand border-current d-inline-flex align-self-stretch align-items-center gap-2 px-3">
              {" "}
              <i className="icon-12" data-lucide="warehouse" aria-hidden="true" />
              {" "}
              <bdi>
                4 sites · 48,592 units
              </bdi>
              {" "}
            </span>
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-outline-soft btn-18 rounded-circle"
                id="invtWarehouseMenu"
                data-bs-toggle="dropdown"
                data-bs-offset="0,8"
                aria-expanded="false"
                aria-label="Warehouse options"
              >
                <i data-lucide="ellipsis-vertical" />
              </button>
              {" "}
              <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="invtWarehouseMenu">
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="arrow-left-right" />
                    Transfer stock
                  </button>
                </li>
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="sliders-horizontal" />
                    Capacity settings
                  </button>
                </li>
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="download" />
                    Export by location
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row g-3">
          {/* Stock distribution by location */}
          <div className="col-12 col-xl-7 col-xxl-8">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <div className="min-w-0">
                    <h3 className="fs-5 fw-bold text-title mb-1">
                      Stock Distribution
                    </h3>
                    <p className="fs-md text-body-2 mb-0">
                      Units on hand at each site, split by product category
                    </p>
                  </div>
                  <span className="badge-soft tint-blue border-current d-inline-flex align-items-center gap-2 px-3">
                    {" "}
                    <i className="icon-12" data-lucide="layers" aria-hidden="true" />
                    {" "}
                    <bdi>
                      5 categories
                    </bdi>
                    {" "}
                  </span>
                </div>
                <ul className="list-unstyled d-flex flex-wrap align-items-center gap-3 mb-2">
                  <li className="d-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-brand" aria-hidden="true" />
                    <span className="fs-md text-body-2">
                      Electronics
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-violet" aria-hidden="true" />
                    <span className="fs-md text-body-2">
                      Apparel
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-blue" aria-hidden="true" />
                    <span className="fs-md text-body-2">
                      {"Home & Kitchen"}
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-magenta" aria-hidden="true" />
                    <span className="fs-md text-body-2">
                      {"Sports & Outdoor"}
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-slate" aria-hidden="true" />
                    <span className="fs-md text-body-2">
                      Other
                    </span>
                  </li>
                </ul>
                <div className="my-auto">
                  <div id="invtWarehouseMixChart" className="chart-area" />
                </div>
                <ul className="list-unstyled row row-cols-1 row-cols-sm-3 g-3 border-t-soft pt-3 mt-3 mb-0">
                  <li className="col d-flex align-items-center gap-2">
                    <span className="icon-box icon-box-sm tint-brand border-current" aria-hidden="true">
                      <i data-lucide="boxes" />
                    </span>
                    <span className="min-w-0">
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        Units on hand
                      </span>
                      {" "}
                      <span className="d-block fs-6 fw-semibold text-title">
                        <bdi>
                          48,592
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        <bdi>
                          across 4 active sites
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </li>
                  <li className="col d-flex align-items-center gap-2">
                    <span className="icon-box icon-box-sm tint-blue border-current" aria-hidden="true">
                      <i data-lucide="gauge" />
                    </span>
                    <span className="min-w-0">
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        Network capacity used
                      </span>
                      {" "}
                      <span className="d-block fs-6 fw-semibold text-title">
                        <bdi>
                          64.7%
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        <bdi>
                          26,508 units still free
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </li>
                  <li className="col d-flex align-items-center gap-2">
                    <span className="icon-box icon-box-sm tint-emerald border-current" aria-hidden="true">
                      <i data-lucide="truck" />
                    </span>
                    <span className="min-w-0">
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        Inbound in transit
                      </span>
                      {" "}
                      <span className="d-block fs-6 fw-semibold text-title">
                        <bdi>
                          3,190
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        <bdi>
                          18 purchase orders · $186.4K
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Capacity utilisation */}
          <div className="col-12 col-xl-5 col-xxl-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="min-w-0 mb-3">
                  <h3 className="fs-5 fw-bold text-title mb-1">
                    Capacity Utilisation
                  </h3>
                  <p className="fs-md text-body-2 mb-0">
                    How full each site’s rack space is right now
                  </p>
                </div>
                <div className="row g-3 g-xl-4 align-items-center my-auto">
                  <div className="col-12 col-md-6 col-xl-12">
                    <div className="position-relative d-flex justify-content-center">
                      <div id="invtCapacityChart" className="chart-area" />
                      <span className="chart-center">
                        <span className="d-block fs-3 fw-bold text-title lh-1">
                          <bdi>
                            64.7%
                          </bdi>
                        </span>
                        <span className="d-block fs-xs text-muted-2 mt-1">
                          Network used
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-12">
                    <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                      <li className="d-flex align-items-center gap-2">
                        <span className="legend-dot bg-cat-rose" aria-hidden="true" />
                        <span className="flex-grow-1 min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-medium text-title text-truncate">
                            North Store
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi>
                              6,652 of 7,300 units
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <span className="badge-soft tint-rose flex-shrink-0">
                          <bdi>
                            91%
                          </bdi>
                        </span>
                      </li>
                      <li className="d-flex align-items-center gap-2">
                        <span className="legend-dot bg-cat-amber" aria-hidden="true" />
                        <span className="flex-grow-1 min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-medium text-title text-truncate">
                            East Hub
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi>
                              13,640 of 17,500 units
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <span className="badge-soft tint-amber flex-shrink-0">
                          <bdi>
                            78%
                          </bdi>
                        </span>
                      </li>
                      <li className="d-flex align-items-center gap-2">
                        <span className="legend-dot bg-cat-emerald" aria-hidden="true" />
                        <span className="flex-grow-1 min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-medium text-title text-truncate">
                            Central DC
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi>
                              18,420 of 28,800 units
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <span className="badge-soft tint-emerald flex-shrink-0">
                          <bdi>
                            64%
                          </bdi>
                        </span>
                      </li>
                      <li className="d-flex align-items-center gap-2">
                        <span className="legend-dot bg-cat-blue" aria-hidden="true" />
                        <span className="flex-grow-1 min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-medium text-title text-truncate">
                            West Depot
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi>
                              9,880 of 21,500 units
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <span className="badge-soft tint-blue flex-shrink-0">
                          <bdi>
                            46%
                          </bdi>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="d-flex flex-wrap align-items-end justify-content-between gap-2 border-t-soft pt-3 mt-3">
                  <span className="min-w-0">
                    {" "}
                    <span className="d-block fs-xs fw-semibold text-uppercase text-muted-2">
                      Free space
                    </span>
                    {" "}
                    <span className="d-block fs-3 fw-bold text-cat-emerald lh-1">
                      <bdi>
                        26,508
                      </bdi>
                    </span>
                    {" "}
                  </span>
                  <span className="fs-xs text-muted-2">
                    <bdi>
                      units of 75,100 total capacity
                    </bdi>
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Site directory */}
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <div className="min-w-0">
                    <h3 className="fs-5 fw-bold text-title mb-1">
                      Site Directory
                    </h3>
                    <p className="fs-md text-body-2 mb-0">
                      Every location, ranked by the share of network stock it holds
                    </p>
                  </div>
                  <span className="badge-soft tint-brand border-current d-inline-flex align-items-center gap-2 px-3">
                    {" "}
                    <i className="icon-12" data-lucide="map-pin" aria-hidden="true" />
                    {" "}
                    <bdi>
                      4 locations · 12 zones
                    </bdi>
                    {" "}
                  </span>
                </div>
                <ul className="list-unstyled row row-cols-1 row-cols-sm-2 row-cols-xl-4 g-3 mb-0">
                  <li className="col">
                    <div className="bg-soft border-theme rounded-4 h-100 d-flex flex-column gap-3 p-3">
                      <div className="d-flex align-items-center gap-2">
                        <span className="icon-box icon-box-sm tint-emerald border-current" aria-hidden="true">
                          <i data-lucide="warehouse" />
                        </span>
                        <div className="flex-grow-1 min-w-0">
                          <h4 className="fs-6 fw-semibold text-title text-truncate mb-0">
                            Central DC
                          </h4>
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi>
                              Dallas, TX · 4 zones
                            </bdi>
                          </span>
                        </div>
                        <span className="badge-soft tint-emerald flex-shrink-0">
                          Optimal
                        </span>
                      </div>
                      <div className="d-flex align-items-end justify-content-between gap-2">
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-xs text-muted-2">
                            On hand
                          </span>
                          {" "}
                          <span className="d-block fs-5 fw-bold text-title lh-1">
                            <bdi>
                              18,420
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <span className="text-end min-w-0">
                          {" "}
                          <span className="d-block fs-xs text-muted-2">
                            Stock value
                          </span>
                          {" "}
                          <span className="d-block fs-5 fw-bold text-title lh-1">
                            <bdi>
                              $1.08M
                            </bdi>
                          </span>
                          {" "}
                        </span>
                      </div>
                      <div className="d-flex flex-wrap align-items-center gap-2">
                        <span className="badge-soft tint-amber">
                          <bdi>
                            96 low
                          </bdi>
                        </span>
                        <span className="badge-soft tint-rose">
                          <bdi>
                            12 out
                          </bdi>
                        </span>
                        <span className="fs-xs text-muted-2 text-nowrap">
                          <bdi>
                            3,120 SKUs
                          </bdi>
                        </span>
                      </div>
                      <div className="mt-auto">
                        <div className="d-flex align-items-center justify-content-between gap-2 mb-1">
                          <span className="fs-xs text-body-2">
                            Share of network stock
                          </span>
                          <span className="fs-xs fw-semibold text-title">
                            <bdi>
                              37.9%
                            </bdi>
                          </span>
                        </div>
                        <div
                          className="progress progress-sm"
                          role="progressbar"
                          aria-label="Central DC share of network stock"
                          aria-valuenow="38"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div className="progress-bar bg-cat-brand" style={{ width: "37.9%" }} />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="col">
                    <div className="bg-soft border-theme rounded-4 h-100 d-flex flex-column gap-3 p-3">
                      <div className="d-flex align-items-center gap-2">
                        <span className="icon-box icon-box-sm tint-amber border-current" aria-hidden="true">
                          <i data-lucide="warehouse" />
                        </span>
                        <div className="flex-grow-1 min-w-0">
                          <h4 className="fs-6 fw-semibold text-title text-truncate mb-0">
                            East Hub
                          </h4>
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi>
                              Newark, NJ · 3 zones
                            </bdi>
                          </span>
                        </div>
                        <span className="badge-soft tint-amber flex-shrink-0">
                          Filling up
                        </span>
                      </div>
                      <div className="d-flex align-items-end justify-content-between gap-2">
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-xs text-muted-2">
                            On hand
                          </span>
                          {" "}
                          <span className="d-block fs-5 fw-bold text-title lh-1">
                            <bdi>
                              13,640
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <span className="text-end min-w-0">
                          {" "}
                          <span className="d-block fs-xs text-muted-2">
                            Stock value
                          </span>
                          {" "}
                          <span className="d-block fs-5 fw-bold text-title lh-1">
                            <bdi>
                              $0.82M
                            </bdi>
                          </span>
                          {" "}
                        </span>
                      </div>
                      <div className="d-flex flex-wrap align-items-center gap-2">
                        <span className="badge-soft tint-amber">
                          <bdi>
                            88 low
                          </bdi>
                        </span>
                        <span className="badge-soft tint-rose">
                          <bdi>
                            18 out
                          </bdi>
                        </span>
                        <span className="fs-xs text-muted-2 text-nowrap">
                          <bdi>
                            2,480 SKUs
                          </bdi>
                        </span>
                      </div>
                      <div className="mt-auto">
                        <div className="d-flex align-items-center justify-content-between gap-2 mb-1">
                          <span className="fs-xs text-body-2">
                            Share of network stock
                          </span>
                          <span className="fs-xs fw-semibold text-title">
                            <bdi>
                              28.1%
                            </bdi>
                          </span>
                        </div>
                        <div
                          className="progress progress-sm"
                          role="progressbar"
                          aria-label="East Hub share of network stock"
                          aria-valuenow="28"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div className="progress-bar bg-cat-brand" style={{ width: "28.1%" }} />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="col">
                    <div className="bg-soft border-theme rounded-4 h-100 d-flex flex-column gap-3 p-3">
                      <div className="d-flex align-items-center gap-2">
                        <span className="icon-box icon-box-sm tint-blue border-current" aria-hidden="true">
                          <i data-lucide="warehouse" />
                        </span>
                        <div className="flex-grow-1 min-w-0">
                          <h4 className="fs-6 fw-semibold text-title text-truncate mb-0">
                            West Depot
                          </h4>
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi>
                              Fresno, CA · 3 zones
                            </bdi>
                          </span>
                        </div>
                        <span className="badge-soft tint-blue flex-shrink-0">
                          Space free
                        </span>
                      </div>
                      <div className="d-flex align-items-end justify-content-between gap-2">
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-xs text-muted-2">
                            On hand
                          </span>
                          {" "}
                          <span className="d-block fs-5 fw-bold text-title lh-1">
                            <bdi>
                              9,880
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <span className="text-end min-w-0">
                          {" "}
                          <span className="d-block fs-xs text-muted-2">
                            Stock value
                          </span>
                          {" "}
                          <span className="d-block fs-5 fw-bold text-title lh-1">
                            <bdi>
                              $0.57M
                            </bdi>
                          </span>
                          {" "}
                        </span>
                      </div>
                      <div className="d-flex flex-wrap align-items-center gap-2">
                        <span className="badge-soft tint-amber">
                          <bdi>
                            74 low
                          </bdi>
                        </span>
                        <span className="badge-soft tint-rose">
                          <bdi>
                            11 out
                          </bdi>
                        </span>
                        <span className="fs-xs text-muted-2 text-nowrap">
                          <bdi>
                            1,860 SKUs
                          </bdi>
                        </span>
                      </div>
                      <div className="mt-auto">
                        <div className="d-flex align-items-center justify-content-between gap-2 mb-1">
                          <span className="fs-xs text-body-2">
                            Share of network stock
                          </span>
                          <span className="fs-xs fw-semibold text-title">
                            <bdi>
                              20.3%
                            </bdi>
                          </span>
                        </div>
                        <div
                          className="progress progress-sm"
                          role="progressbar"
                          aria-label="West Depot share of network stock"
                          aria-valuenow="20"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div className="progress-bar bg-cat-brand" style={{ width: "20.3%" }} />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="col">
                    <div className="bg-soft border-theme rounded-4 h-100 d-flex flex-column gap-3 p-3">
                      <div className="d-flex align-items-center gap-2">
                        <span className="icon-box icon-box-sm tint-rose border-current" aria-hidden="true">
                          <i data-lucide="store" />
                        </span>
                        <div className="flex-grow-1 min-w-0">
                          <h4 className="fs-6 fw-semibold text-title text-truncate mb-0">
                            North Store
                          </h4>
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi>
                              Chicago, IL · 2 zones
                            </bdi>
                          </span>
                        </div>
                        <span className="badge-soft tint-rose flex-shrink-0">
                          Near full
                        </span>
                      </div>
                      <div className="d-flex align-items-end justify-content-between gap-2">
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-xs text-muted-2">
                            On hand
                          </span>
                          {" "}
                          <span className="d-block fs-5 fw-bold text-title lh-1">
                            <bdi>
                              6,652
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <span className="text-end min-w-0">
                          {" "}
                          <span className="d-block fs-xs text-muted-2">
                            Stock value
                          </span>
                          {" "}
                          <span className="d-block fs-5 fw-bold text-title lh-1">
                            <bdi>
                              $0.37M
                            </bdi>
                          </span>
                          {" "}
                        </span>
                      </div>
                      <div className="d-flex flex-wrap align-items-center gap-2">
                        <span className="badge-soft tint-amber">
                          <bdi>
                            54 low
                          </bdi>
                        </span>
                        <span className="badge-soft tint-rose">
                          <bdi>
                            7 out
                          </bdi>
                        </span>
                        <span className="fs-xs text-muted-2 text-nowrap">
                          <bdi>
                            1,240 SKUs
                          </bdi>
                        </span>
                      </div>
                      <div className="mt-auto">
                        <div className="d-flex align-items-center justify-content-between gap-2 mb-1">
                          <span className="fs-xs text-body-2">
                            Share of network stock
                          </span>
                          <span className="fs-xs fw-semibold text-title">
                            <bdi>
                              13.7%
                            </bdi>
                          </span>
                        </div>
                        <div
                          className="progress progress-sm"
                          role="progressbar"
                          aria-label="North Store share of network stock"
                          aria-valuenow="14"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div className="progress-bar bg-cat-brand" style={{ width: "13.7%" }} />
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Top / fast-moving products ===== */}
      <section className="mb-4" aria-labelledby="invt-movers-title">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
          <div className="min-w-0">
            <h2 id="invt-movers-title" className="fs-4 fw-bold text-title mb-1">
              Top / Fast-Moving Products
            </h2>
            <p className="fs-md text-body-2 mb-0">
              The SKUs shifting fastest off the shelf — and how long the stock behind them will last.
            </p>
          </div>
          <div className="d-flex flex-wrap align-items-center gap-2">
            <span className="badge-soft tint-brand border-current d-inline-flex align-self-stretch align-items-center gap-2 px-3">
              {" "}
              <i className="icon-12" data-lucide="zap" aria-hidden="true" />
              {" "}
              <bdi>
                Last 7 days
              </bdi>
              {" "}
            </span>
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-outline-soft btn-18 rounded-circle"
                id="invtMoversMenu"
                data-bs-toggle="dropdown"
                data-bs-offset="0,8"
                aria-expanded="false"
                aria-label="Fast mover options"
              >
                <i data-lucide="ellipsis-vertical" />
              </button>
              {" "}
              <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="invtMoversMenu">
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="bell-ring" />
                    Set velocity alerts
                  </button>
                </li>
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="sliders-horizontal" />
                    Compare periods
                  </button>
                </li>
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="download" />
                    Export movers
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row g-3">
          {/* Fast mover leaderboard */}
          <div className="col-12 col-xl-8" data-filter-scope="">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
                  <div className="min-w-0">
                    <h3 className="fs-5 fw-bold text-title mb-1">
                      Fast Movers
                    </h3>
                    <p className="fs-md text-body-2 mb-0">
                      Ranked by units shipped over the last seven days
                    </p>
                  </div>
                  <div
                    className="nav nav-pills flex-nowrap gap-1 p-1 rounded-pill bg-soft scrollbar-none overflow-x-auto"
                    role="group"
                    aria-label="Filter fast movers by category"
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
                      data-filter="apparel"
                      aria-pressed="false"
                    >
                      Apparel
                    </button>
                    <button
                      type="button"
                      className="nav-link fw-semibold text-nowrap"
                      data-filter="electronics"
                      aria-pressed="false"
                    >
                      Electronics
                    </button>
                    <button
                      type="button"
                      className="nav-link fw-semibold text-nowrap"
                      data-filter="home"
                      aria-pressed="false"
                    >
                      Home
                    </button>
                    <button
                      type="button"
                      className="nav-link fw-semibold text-nowrap"
                      data-filter="sports"
                      aria-pressed="false"
                    >
                      Sports
                    </button>
                  </div>
                </div>
                <ol className="list-unstyled d-flex flex-column justify-content-between flex-grow-1 gap-3 mb-0">
                  <li className="d-flex align-items-center gap-2 gap-sm-3" data-filter-tags="apparel">
                    <span className="icon-box icon-box-sm tint-violet border-current fs-md fw-bold" aria-hidden="true">
                      <bdi>
                        1
                      </bdi>
                    </span>
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-block fs-md fw-semibold text-title text-truncate">
                        Solstice Linen Shirt
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        <bdi>
                          APR-7712 · Apparel
                        </bdi>
                      </span>
                      {" "}
                    </span>
                    <div id="invtMoverSpark1" className="chart-inline-lg d-none d-lg-block" />
                    <span className="figure-col text-end">
                      {" "}
                      <span className="d-block fs-md fw-semibold text-title text-nowrap">
                        <bdi>
                          861
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-nowrap">
                        <bdi>
                          123 / day
                        </bdi>
                      </span>
                      {" "}
                    </span>
                    <span className="badge-soft tint-amber figure-col text-center text-nowrap">
                      <bdi>
                        14d cover
                      </bdi>
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2 gap-sm-3" data-filter-tags="sports">
                    <span className="icon-box icon-box-sm tint-magenta border-current fs-md fw-bold" aria-hidden="true">
                      <bdi>
                        2
                      </bdi>
                    </span>
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-block fs-md fw-semibold text-title text-truncate">
                        Aurora Canvas Backpack
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        <bdi>
                          {"SPT-2290 · Sports & Outdoor"}
                        </bdi>
                      </span>
                      {" "}
                    </span>
                    <div id="invtMoverSpark2" className="chart-inline-lg d-none d-lg-block" />
                    <span className="figure-col text-end">
                      {" "}
                      <span className="d-block fs-md fw-semibold text-title text-nowrap">
                        <bdi>
                          742
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-nowrap">
                        <bdi>
                          106 / day
                        </bdi>
                      </span>
                      {" "}
                    </span>
                    <span className="badge-soft tint-blue figure-col text-center text-nowrap">
                      <bdi>
                        22d cover
                      </bdi>
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2 gap-sm-3" data-filter-tags="electronics">
                    <span className="icon-box icon-box-sm tint-brand border-current fs-md fw-bold" aria-hidden="true">
                      <bdi>
                        3
                      </bdi>
                    </span>
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-block fs-md fw-semibold text-title text-truncate">
                        Halo Wireless Earbuds
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        <bdi>
                          ELC-3390 · Electronics
                        </bdi>
                      </span>
                      {" "}
                    </span>
                    <div id="invtMoverSpark3" className="chart-inline-lg d-none d-lg-block" />
                    <span className="figure-col text-end">
                      {" "}
                      <span className="d-block fs-md fw-semibold text-title text-nowrap">
                        <bdi>
                          693
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-nowrap">
                        <bdi>
                          99 / day
                        </bdi>
                      </span>
                      {" "}
                    </span>
                    <span className="badge-soft tint-amber figure-col text-center text-nowrap">
                      <bdi>
                        11d cover
                      </bdi>
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2 gap-sm-3" data-filter-tags="home">
                    <span className="icon-box icon-box-sm tint-blue border-current fs-md fw-bold" aria-hidden="true">
                      <bdi>
                        4
                      </bdi>
                    </span>
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-block fs-md fw-semibold text-title text-truncate">
                        Cascade Steel Kettle
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        <bdi>
                          {"HKT-1145 · Home & Kitchen"}
                        </bdi>
                      </span>
                      {" "}
                    </span>
                    <div id="invtMoverSpark4" className="chart-inline-lg d-none d-lg-block" />
                    <span className="figure-col text-end">
                      {" "}
                      <span className="d-block fs-md fw-semibold text-title text-nowrap">
                        <bdi>
                          588
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-nowrap">
                        <bdi>
                          84 / day
                        </bdi>
                      </span>
                      {" "}
                    </span>
                    <span className="badge-soft tint-blue figure-col text-center text-nowrap">
                      <bdi>
                        30d cover
                      </bdi>
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2 gap-sm-3" data-filter-tags="sports">
                    <span className="icon-box icon-box-sm tint-magenta border-current fs-md fw-bold" aria-hidden="true">
                      <bdi>
                        5
                      </bdi>
                    </span>
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-block fs-md fw-semibold text-title text-truncate">
                        Meridian Yoga Mat
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        <bdi>
                          {"SPT-4408 · Sports & Outdoor"}
                        </bdi>
                      </span>
                      {" "}
                    </span>
                    <div id="invtMoverSpark5" className="chart-inline-lg d-none d-lg-block" />
                    <span className="figure-col text-end">
                      {" "}
                      <span className="d-block fs-md fw-semibold text-title text-nowrap">
                        <bdi>
                          511
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-nowrap">
                        <bdi>
                          73 / day
                        </bdi>
                      </span>
                      {" "}
                    </span>
                    <span className="badge-soft tint-amber figure-col text-center text-nowrap">
                      <bdi>
                        9d cover
                      </bdi>
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2 gap-sm-3" data-filter-tags="apparel">
                    <span className="icon-box icon-box-sm tint-violet border-current fs-md fw-bold" aria-hidden="true">
                      <bdi>
                        6
                      </bdi>
                    </span>
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-block fs-md fw-semibold text-title text-truncate">
                        Vela Knit Cardigan
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        <bdi>
                          APR-5520 · Apparel
                        </bdi>
                      </span>
                      {" "}
                    </span>
                    <div id="invtMoverSpark6" className="chart-inline-lg d-none d-lg-block" />
                    <span className="figure-col text-end">
                      {" "}
                      <span className="d-block fs-md fw-semibold text-title text-nowrap">
                        <bdi>
                          476
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-nowrap">
                        <bdi>
                          68 / day
                        </bdi>
                      </span>
                      {" "}
                    </span>
                    <span className="badge-soft tint-blue figure-col text-center text-nowrap">
                      <bdi>
                        26d cover
                      </bdi>
                    </span>
                  </li>
                </ol>
                <ul className="list-unstyled row row-cols-1 row-cols-sm-3 g-3 border-t-soft pt-3 mt-3 mb-0">
                  <li className="col d-flex align-items-center gap-2">
                    <span className="icon-box icon-box-sm tint-brand border-current" aria-hidden="true">
                      <i data-lucide="package-minus" />
                    </span>
                    <span className="min-w-0">
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        Units shipped
                      </span>
                      {" "}
                      <span className="d-block fs-6 fw-semibold text-title">
                        <bdi>
                          3,871
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        <bdi>
                          by these six SKUs
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </li>
                  <li className="col d-flex align-items-center gap-2">
                    <span className="icon-box icon-box-sm tint-violet border-current" aria-hidden="true">
                      <i data-lucide="activity" />
                    </span>
                    <span className="min-w-0">
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        Share of outbound
                      </span>
                      {" "}
                      <span className="d-block fs-6 fw-semibold text-title">
                        <bdi>
                          19.8%
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        <bdi>
                          of 19,544 units shipped
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </li>
                  <li className="col d-flex align-items-center gap-2">
                    <span className="icon-box icon-box-sm tint-emerald border-current" aria-hidden="true">
                      <i data-lucide="repeat" />
                    </span>
                    <span className="min-w-0">
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        Average turnover
                      </span>
                      {" "}
                      <span className="d-block fs-6 fw-semibold text-title">
                        <bdi>
                          24.0× / year
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        <bdi>
                          against 8.7× catalogue-wide
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Fastest mover spotlight */}
          <div className="col-12 col-xl-4">
            <div className="on-dark bg-grad-theme rounded-4 h-100 d-flex flex-column justify-content-between gap-3 p-3 p-md-4">
              <div className="d-flex align-items-center gap-3">
                <span className="icon-box icon-box-lg bg-soft border-theme" aria-hidden="true">
                  <i data-lucide="zap" />
                </span>
                <span className="min-w-0">
                  {" "}
                  <span className="d-block fs-xs fw-semibold text-uppercase text-primary">
                    Fastest mover
                  </span>
                  {" "}
                  <span className="d-block fs-md text-title text-truncate">
                    <bdi>
                      Rank 1 of 4,286 SKUs
                    </bdi>
                  </span>
                  {" "}
                </span>
              </div>
              <div className="bg-soft border-theme rounded-4 d-flex align-items-center justify-content-between gap-2 p-3">
                <span className="min-w-0">
                  {" "}
                  <span className="d-block fs-lg fw-semibold text-title text-truncate">
                    Solstice Linen Shirt
                  </span>
                  {" "}
                  <span className="d-block fs-sm text-primary text-truncate">
                    <bdi>
                      APR-7712 · Apparel
                    </bdi>
                  </span>
                  {" "}
                </span>
                <span className="badge-soft tint-amber flex-shrink-0 text-nowrap">
                  Reorder now
                </span>
              </div>
              <div>
                <p className="fs-1 fw-bold text-title lh-1 mb-1">
                  <bdi>
                    123
                  </bdi>
                </p>
                <p className="fs-md text-primary mb-0">
                  <bdi>
                    units a day · 861 shipped this week
                  </bdi>
                </p>
                <div id="invtSpotlightSpark" className="chart-area mt-2" />
              </div>
              <div className="divider-fade" aria-hidden="true" />
              <ul className="list-unstyled row row-cols-3 g-2 mb-0">
                <li className="col min-w-0">
                  <span className="d-block fs-xs text-primary text-truncate">
                    On hand
                  </span>
                  {" "}
                  <span className="d-block fs-6 fw-semibold text-title text-truncate">
                    <bdi>
                      1,720
                    </bdi>
                  </span>
                </li>
                <li className="col min-w-0">
                  <span className="d-block fs-xs text-primary text-truncate">
                    Cover left
                  </span>
                  {" "}
                  <span className="d-block fs-6 fw-semibold text-title text-truncate">
                    <bdi>
                      14 days
                    </bdi>
                  </span>
                </li>
                <li className="col min-w-0">
                  <span className="d-block fs-xs text-primary text-truncate">
                    Turnover
                  </span>
                  {" "}
                  <span className="d-block fs-6 fw-semibold text-title text-truncate">
                    <bdi>
                      26.1×
                    </bdi>
                  </span>
                </li>
              </ul>
              <button
                type="button"
                className="btn btn-accent w-100 d-inline-flex flex-nowrap align-items-center justify-content-center gap-2 text-nowrap"
              >
                <i className="icon-20" data-lucide="package-plus" aria-hidden="true" />
                Reorder 1,200 units
              </button>
            </div>
          </div>
          {/* Velocity against cover */}
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <div className="min-w-0">
                    <h3 className="fs-5 fw-bold text-title mb-1">
                      Velocity Against Cover
                    </h3>
                    <p className="fs-md text-body-2 mb-0">
                      Each bubble is one of the twelve fastest movers, sized by the stock value behind it
                    </p>
                  </div>
                  <span className="badge-soft tint-rose border-current d-inline-flex align-items-center gap-2 px-3">
                    {" "}
                    <i className="icon-12" data-lucide="triangle-alert" aria-hidden="true" />
                    {" "}
                    <bdi>
                      3 at or below the reorder point
                    </bdi>
                    {" "}
                  </span>
                </div>
                <ul className="list-unstyled d-flex flex-wrap align-items-center gap-3 mb-2">
                  <li className="d-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-brand" aria-hidden="true" />
                    <span className="fs-md text-body-2">
                      Electronics
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-violet" aria-hidden="true" />
                    <span className="fs-md text-body-2">
                      Apparel
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-blue" aria-hidden="true" />
                    <span className="fs-md text-body-2">
                      {"Home & Kitchen"}
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-magenta" aria-hidden="true" />
                    <span className="fs-md text-body-2">
                      {"Sports & Outdoor"}
                    </span>
                  </li>
                </ul>
                <div id="invtVelocityCoverChart" className="chart-area" />
                <ul className="list-unstyled row row-cols-1 row-cols-sm-3 g-3 border-t-soft pt-3 mt-3 mb-0">
                  <li className="col d-flex align-items-center gap-2">
                    <span className="icon-box icon-box-sm tint-rose border-current" aria-hidden="true">
                      <i data-lucide="timer" />
                    </span>
                    <span className="min-w-0">
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        Below reorder cover
                      </span>
                      {" "}
                      <span className="d-block fs-6 fw-semibold text-title">
                        <bdi>
                          3 SKUs
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        <bdi>
                          under 14 days of demand
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </li>
                  <li className="col d-flex align-items-center gap-2">
                    <span className="icon-box icon-box-sm tint-brand border-current" aria-hidden="true">
                      <i data-lucide="activity" />
                    </span>
                    <span className="min-w-0">
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        Median velocity
                      </span>
                      {" "}
                      <span className="d-block fs-6 fw-semibold text-title">
                        <bdi>
                          66 / day
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        <bdi>
                          across the twelve
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </li>
                  <li className="col d-flex align-items-center gap-2">
                    <span className="icon-box icon-box-sm tint-blue border-current" aria-hidden="true">
                      <i data-lucide="calendar-days" />
                    </span>
                    <span className="min-w-0">
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        Average cover
                      </span>
                      {" "}
                      <span className="d-block fs-6 fw-semibold text-title">
                        <bdi>
                          25.4 days
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        <bdi>
                          against 42 catalogue-wide
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
      </section>
      {/* ========== FOOTER ========== */}
    </AppShell>
  );
}

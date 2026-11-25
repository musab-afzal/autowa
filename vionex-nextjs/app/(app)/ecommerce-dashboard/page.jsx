/* Generated from the Vionex HTML theme by scripts/convert-html.mjs */
import AppShell from "@/components/AppShell";

export const metadata = {
  title: "Vionex — Ecommerce Dashboard",
  description: "Vionex enterprise admin dashboard — AI operations overview built with Bootstrap 5, CSS variables and a scalable design system.",
};

const scripts = [
    "/assets/js/jquery.min.js",
    "/assets/js/bootstrap.bundle.min.js",
    "/assets/js/lucide.min.js",
    "/assets/js/apexcharts.min.js",
    "/assets/js/jsvectormap.min.js",
    "/assets/js/jsvectormap-world.js",
    "/assets/js/maps.js",
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
          Ecommerce Dashboard
        </h1>
        <nav aria-label="breadcrumb" className="d-none d-md-block">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="/">
                Dashboard
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Ecommerce Dashboard
            </li>
          </ol>
        </nav>
      </div>
      {/* ===== Dashboard sections go here ===== */}
      {/* ===== Welcome & business KPIs ===== */}
      <section className="mb-4" aria-labelledby="welcome-title">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
          <div className="min-w-0">
            <h2 id="welcome-title" className="fs-2 fw-bold text-title mb-1">
              Welcome back, Alex
              {" "}
              <span aria-hidden="true">
                👋
              </span>
            </h2>
            <p className="fw-medium text-body-2 mb-0">
              Here’s what’s happening with your business today.
            </p>
          </div>
          <div className="d-flex flex-wrap align-items-center gap-2">
            <button
              type="button"
              className="btn btn-accent flex-grow-1 flex-sm-grow-0 d-inline-flex flex-nowrap align-items-center justify-content-center gap-2 text-nowrap"
            >
              View All Stock
            </button>
            <button
              type="button"
              className="btn btn-primary flex-grow-1 flex-sm-grow-0 d-inline-flex flex-nowrap align-items-center justify-content-center gap-2 text-nowrap"
            >
              <i className="icon-20" data-lucide="download" aria-hidden="true" />
              Download Sheet
            </button>
          </div>
        </div>
        <ul className="list-unstyled row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-5 g-3 mb-0">
          <li className="col">
            <div className="card h-100">
              <div className="card-body d-flex flex-column gap-3">
                <div className="d-flex align-items-center justify-content-between gap-2">
                  <h3 className="fs-5 fw-medium text-body-2 text-truncate mb-0">
                    Total Income
                  </h3>
                  <div className="dropdown flex-shrink-0">
                    <button
                      type="button"
                      className="btn btn-ghost btn-18 rounded-circle"
                      data-bs-toggle="dropdown"
                      data-bs-offset="0,8"
                      aria-expanded="false"
                      aria-label="More actions for Total Income"
                    >
                      <i data-lucide="ellipsis" />
                    </button>
                    {" "}
                    <ul className="dropdown-menu dropdown-menu-end p-2">
                      <li>
                        <button type="button" className="dropdown-item">
                          <i data-lucide="eye" />
                          View report
                        </button>
                      </li>
                      <li>
                        <button type="button" className="dropdown-item">
                          <i data-lucide="download" />
                          Export data
                        </button>
                      </li>
                      <li>
                        <button type="button" className="dropdown-item">
                          <i data-lucide="refresh-cw" />
                          Refresh
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="d-flex align-items-end justify-content-between gap-3 mt-auto">
                  <div className="min-w-0">
                    <p className="fs-1 fw-bold text-title lh-1 mb-2">
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
                  <div id="ecomIncomeSpark" className="chart-inline" />
                </div>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body d-flex flex-column gap-3">
                <div className="d-flex align-items-center justify-content-between gap-2">
                  <h3 className="fs-5 fw-medium text-body-2 text-truncate mb-0">
                    Total Order
                  </h3>
                  <div className="dropdown flex-shrink-0">
                    <button
                      type="button"
                      className="btn btn-ghost btn-18 rounded-circle"
                      data-bs-toggle="dropdown"
                      data-bs-offset="0,8"
                      aria-expanded="false"
                      aria-label="More actions for Total Order"
                    >
                      <i data-lucide="ellipsis" />
                    </button>
                    {" "}
                    <ul className="dropdown-menu dropdown-menu-end p-2">
                      <li>
                        <button type="button" className="dropdown-item">
                          <i data-lucide="eye" />
                          View report
                        </button>
                      </li>
                      <li>
                        <button type="button" className="dropdown-item">
                          <i data-lucide="download" />
                          Export data
                        </button>
                      </li>
                      <li>
                        <button type="button" className="dropdown-item">
                          <i data-lucide="refresh-cw" />
                          Refresh
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="d-flex align-items-end justify-content-between gap-3 mt-auto">
                  <div className="min-w-0">
                    <p className="fs-1 fw-bold text-title lh-1 mb-2">
                      <bdi>
                        24,210
                      </bdi>
                    </p>
                    <div className="d-flex flex-wrap align-items-center gap-2">
                      <span className="badge-soft tint-success d-inline-flex align-items-center gap-1 px-2 py-1 fs-xs">
                        {" "}
                        <i className="icon-12" data-lucide="trending-up" aria-hidden="true" />
                        <span dir="ltr">
                          +8.4%
                        </span>
                        {" "}
                      </span>
                      <span className="fs-xs fw-medium text-body-2">
                        <bdi>
                          +1,208
                        </bdi>
                      </span>
                    </div>
                  </div>
                  <div id="ecomOrderSpark" className="chart-inline" />
                </div>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body d-flex flex-column gap-3">
                <div className="d-flex align-items-center justify-content-between gap-2">
                  <h3 className="fs-5 fw-medium text-body-2 text-truncate mb-0">
                    Total Profit
                  </h3>
                  <div className="dropdown flex-shrink-0">
                    <button
                      type="button"
                      className="btn btn-ghost btn-18 rounded-circle"
                      data-bs-toggle="dropdown"
                      data-bs-offset="0,8"
                      aria-expanded="false"
                      aria-label="More actions for Total Profit"
                    >
                      <i data-lucide="ellipsis" />
                    </button>
                    {" "}
                    <ul className="dropdown-menu dropdown-menu-end p-2">
                      <li>
                        <button type="button" className="dropdown-item">
                          <i data-lucide="eye" />
                          View report
                        </button>
                      </li>
                      <li>
                        <button type="button" className="dropdown-item">
                          <i data-lucide="download" />
                          Export data
                        </button>
                      </li>
                      <li>
                        <button type="button" className="dropdown-item">
                          <i data-lucide="refresh-cw" />
                          Refresh
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="d-flex align-items-end justify-content-between gap-3 mt-auto">
                  <div className="min-w-0">
                    <p className="fs-1 fw-bold text-title lh-1 mb-2">
                      <bdi>
                        $46,787
                      </bdi>
                    </p>
                    <div className="d-flex flex-wrap align-items-center gap-2">
                      <span className="badge-soft tint-success d-inline-flex align-items-center gap-1 px-2 py-1 fs-xs">
                        {" "}
                        <i className="icon-12" data-lucide="trending-up" aria-hidden="true" />
                        <span dir="ltr">
                          +12.6%
                        </span>
                        {" "}
                      </span>
                      <span className="fs-xs fw-medium text-body-2">
                        <bdi>
                          +$5,240
                        </bdi>
                      </span>
                    </div>
                  </div>
                  <div id="ecomProfitSpark" className="chart-inline" />
                </div>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body d-flex flex-column gap-3">
                <div className="d-flex align-items-center justify-content-between gap-2">
                  <h3 className="fs-5 fw-medium text-body-2 text-truncate mb-0">
                    Pending Order
                  </h3>
                  <div className="dropdown flex-shrink-0">
                    <button
                      type="button"
                      className="btn btn-ghost btn-18 rounded-circle"
                      data-bs-toggle="dropdown"
                      data-bs-offset="0,8"
                      aria-expanded="false"
                      aria-label="More actions for Pending Order"
                    >
                      <i data-lucide="ellipsis" />
                    </button>
                    {" "}
                    <ul className="dropdown-menu dropdown-menu-end p-2">
                      <li>
                        <button type="button" className="dropdown-item">
                          <i data-lucide="eye" />
                          View report
                        </button>
                      </li>
                      <li>
                        <button type="button" className="dropdown-item">
                          <i data-lucide="download" />
                          Export data
                        </button>
                      </li>
                      <li>
                        <button type="button" className="dropdown-item">
                          <i data-lucide="refresh-cw" />
                          Refresh
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="d-flex align-items-end justify-content-between gap-3 mt-auto">
                  <div className="min-w-0">
                    <p className="fs-1 fw-bold text-title lh-1 mb-2">
                      <bdi>
                        1,842
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
                          +76
                        </bdi>
                      </span>
                    </div>
                  </div>
                  <div id="ecomPendingSpark" className="chart-inline" />
                </div>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body d-flex flex-column gap-3">
                <div className="d-flex align-items-center justify-content-between gap-2">
                  <h3 className="fs-5 fw-medium text-body-2 text-truncate mb-0">
                    Total Expenses
                  </h3>
                  <div className="dropdown flex-shrink-0">
                    <button
                      type="button"
                      className="btn btn-ghost btn-18 rounded-circle"
                      data-bs-toggle="dropdown"
                      data-bs-offset="0,8"
                      aria-expanded="false"
                      aria-label="More actions for Total Expenses"
                    >
                      <i data-lucide="ellipsis" />
                    </button>
                    {" "}
                    <ul className="dropdown-menu dropdown-menu-end p-2">
                      <li>
                        <button type="button" className="dropdown-item">
                          <i data-lucide="eye" />
                          View report
                        </button>
                      </li>
                      <li>
                        <button type="button" className="dropdown-item">
                          <i data-lucide="download" />
                          Export data
                        </button>
                      </li>
                      <li>
                        <button type="button" className="dropdown-item">
                          <i data-lucide="refresh-cw" />
                          Refresh
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="d-flex align-items-end justify-content-between gap-3 mt-auto">
                  <div className="min-w-0">
                    <p className="fs-1 fw-bold text-title lh-1 mb-2">
                      <bdi>
                        $25,641
                      </bdi>
                    </p>
                    <div className="d-flex flex-wrap align-items-center gap-2">
                      <span className="badge-soft tint-success d-inline-flex align-items-center gap-1 px-2 py-1 fs-xs">
                        {" "}
                        <i className="icon-12" data-lucide="trending-up" aria-hidden="true" />
                        <span dir="ltr">
                          +6.8%
                        </span>
                        {" "}
                      </span>
                      <span className="fs-xs fw-medium text-body-2">
                        <bdi>
                          +$1,630
                        </bdi>
                      </span>
                    </div>
                  </div>
                  <div id="ecomExpensesSpark" className="chart-inline" />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </section>
      {/* ===== Stock overview & top products ===== */}
      <section className="bg-wash-nav rounded-4 p-3 p-md-4 mb-4" aria-labelledby="stock-title">
        <h2 id="stock-title" className="visually-hidden">
          Stock overview and top products
        </h2>
        <div className="row g-4">
          <div className="col-12 col-xxl-4">
            <div className="d-flex flex-column justify-content-between gap-4 h-100">
              <div>
                <p className="display-1 fw-bold text-title lh-1 mb-2">
                  <bdi>
                    50,000
                  </bdi>
                </p>
                <div className="d-flex flex-wrap align-items-center gap-3">
                  <h3 className="fs-3 fw-medium text-body-2 mb-0">
                    Products in Stock
                  </h3>
                  <span className="badge-soft tint-success d-inline-flex align-items-center gap-2 fs-lg">
                    {" "}
                    <i className="icon-18" data-lucide="trending-up" aria-hidden="true" />
                    <span dir="ltr">
                      +18.2%
                    </span>
                    {" "}
                  </span>
                </div>
              </div>
              <ul className="list-unstyled row row-cols-1 row-cols-sm-2 g-3 mb-0">
                <li className="col">
                  <div className="on-dark bg-nav rounded-3 h-100 d-flex align-items-center gap-3 p-3">
                    <span className="icon-box bg-cat-blue text-white rounded-circle" aria-hidden="true">
                      <i data-lucide="wallet" />
                    </span>
                    <span className="min-w-0">
                      {" "}
                      <span className="d-flex flex-wrap align-items-baseline gap-2">
                        <span className="fs-5 fw-bold text-title">
                          <bdi>
                            $2,480
                          </bdi>
                        </span>
                        <span className="d-inline-flex align-items-center gap-1 fs-md fw-semibold text-cat-cyan">
                          <i className="icon-12" data-lucide="trending-up" aria-hidden="true" />
                          <span dir="ltr">
                            +18.2%
                          </span>
                        </span>
                      </span>
                      {" "}
                      <span className="d-block text-truncate">
                        Total Value
                      </span>
                      {" "}
                    </span>
                  </div>
                </li>
                <li className="col">
                  <div className="on-dark bg-nav rounded-3 h-100 d-flex align-items-center gap-3 p-3">
                    <span className="icon-box bg-cat-amber text-white rounded-circle" aria-hidden="true">
                      <i data-lucide="circle-alert" />
                    </span>
                    <span className="min-w-0">
                      {" "}
                      <span className="d-flex flex-wrap align-items-baseline gap-2">
                        <span className="fs-5 fw-bold text-title">
                          <bdi>
                            420
                          </bdi>
                        </span>
                        <span className="d-inline-flex align-items-center gap-1 fs-md fw-semibold text-cat-amber">
                          <i className="icon-12" data-lucide="trending-up" aria-hidden="true" />
                          <span dir="ltr">
                            +18.2%
                          </span>
                        </span>
                      </span>
                      {" "}
                      <span className="d-block text-truncate">
                        Low Stock
                      </span>
                      {" "}
                    </span>
                  </div>
                </li>
                <li className="col">
                  <div className="on-dark bg-nav rounded-3 h-100 d-flex align-items-center gap-3 p-3">
                    <span className="icon-box bg-cat-red text-white rounded-circle" aria-hidden="true">
                      <i data-lucide="circle-x" />
                    </span>
                    <span className="min-w-0">
                      {" "}
                      <span className="d-flex flex-wrap align-items-baseline gap-2">
                        <span className="fs-5 fw-bold text-title">
                          <bdi>
                            128
                          </bdi>
                        </span>
                        <span className="d-inline-flex align-items-center gap-1 fs-md fw-semibold text-cat-red">
                          <i className="icon-12" data-lucide="trending-up" aria-hidden="true" />
                          <span dir="ltr">
                            +18.2%
                          </span>
                        </span>
                      </span>
                      {" "}
                      <span className="d-block text-truncate">
                        Out of Stock
                      </span>
                      {" "}
                    </span>
                  </div>
                </li>
                <li className="col">
                  <div className="on-dark bg-nav rounded-3 h-100 d-flex align-items-center gap-3 p-3">
                    <span className="icon-box bg-cat-emerald text-white rounded-circle" aria-hidden="true">
                      <i data-lucide="shopping-cart" />
                    </span>
                    <span className="min-w-0">
                      {" "}
                      <span className="d-flex flex-wrap align-items-baseline gap-2">
                        <span className="fs-5 fw-bold text-title">
                          <bdi>
                            316
                          </bdi>
                        </span>
                        <span className="d-inline-flex align-items-center gap-1 fs-md fw-semibold text-cat-emerald">
                          <i className="icon-12" data-lucide="trending-up" aria-hidden="true" />
                          <span dir="ltr">
                            +18.2%
                          </span>
                        </span>
                      </span>
                      {" "}
                      <span className="d-block text-truncate">
                        Reorder Soon
                      </span>
                      {" "}
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-xxl-8">
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
              <h3 className="fs-4 fw-bold text-title mb-0">
                Top Products
              </h3>
              <div className="d-flex flex-wrap align-items-center gap-2">
                <button
                  type="button"
                  className="btn btn-primary btn-sm d-inline-flex flex-nowrap align-items-center gap-2 text-nowrap"
                >
                  <i className="icon-18" data-lucide="package-plus" aria-hidden="true" />
                  Add New Product
                </button>
                <button type="button" className="btn btn-accent btn-sm text-nowrap">
                  View All
                </button>
              </div>
            </div>
            <div className="position-relative" data-scroll-rail="">
              <ul className="scroll-row list-unstyled d-flex align-items-stretch gap-3 mb-0 pb-1">
                <li className="scroll-col flex-grow-0">
                  <div className="card bg-plain border-2 rounded-5 h-100">
                    <div className="card-body d-flex flex-column gap-2 p-2">
                      <div className="position-relative">
                        <div className="ratio ratio-16x9 rounded-4 overflow-hidden">
                          <img
                            src="/assets/images/product-1.jpg"
                            alt="Premium Linen Shirt"
                            width="560"
                            height="373"
                            className="object-fit-cover"
                          />
                        </div>
                        <span className="badge-soft tint-primary position-absolute top-0 end-0 m-2 fs-xs">
                          Women’s
                        </span>
                      </div>
                      <div className="px-1">
                        <h4 className="fs-lg fw-medium text-title text-truncate mb-1">
                          Premium Linen Shirt
                        </h4>
                        <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                          <span className="d-inline-flex align-items-center gap-1">
                            <i className="icon-14 icon-fill text-cat-amber" data-lucide="star" aria-hidden="true" />
                            <span className="fs-md fw-semibold text-title">
                              <bdi>
                                4.8
                              </bdi>
                            </span>
                            <span className="fs-md text-muted-2">
                              <bdi>
                                (1,023)
                              </bdi>
                            </span>
                          </span>
                          <span className="badge-soft tint-success d-inline-flex align-items-center gap-1 px-2 py-1 fs-xs">
                            {" "}
                            <i className="icon-12" data-lucide="trending-up" aria-hidden="true" />
                            <span dir="ltr">
                              +18.2%
                            </span>
                            {" "}
                          </span>
                        </div>
                      </div>
                      <ul className="list-unstyled d-flex text-center mb-0">
                        <li className="flex-fill min-w-0 px-1">
                          <span className="d-block fs-md fw-bold text-title">
                            <bdi>
                              122
                            </bdi>
                          </span>
                          {" "}
                          <span className="fs-xs text-muted-2">
                            Sold
                          </span>
                        </li>
                        <li className="flex-fill min-w-0 px-1 border-start">
                          <span className="d-block fs-md fw-bold text-title">
                            <bdi>
                              $122K
                            </bdi>
                          </span>
                          {" "}
                          <span className="fs-xs text-muted-2">
                            Revenue
                          </span>
                        </li>
                        <li className="flex-fill min-w-0 px-1 border-start">
                          <span className="d-block fs-md fw-bold text-title">
                            <bdi>
                              450
                            </bdi>
                          </span>
                          {" "}
                          <span className="fs-xs text-muted-2">
                            Stock
                          </span>
                        </li>
                      </ul>
                      <hr className="my-1" />
                      <div className="d-flex align-items-center justify-content-between gap-2 px-1 mt-auto">
                        <a href="#" className="fs-md fw-semibold text-title text-decoration-none">
                          View Details
                        </a>
                        <div className="d-flex align-items-center gap-1">
                          <button
                            type="button"
                            className="btn btn-primary-soft btn-18 rounded-circle"
                            aria-label="Preview Premium Linen Shirt"
                          >
                            <i data-lucide="eye" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary-soft btn-18 rounded-circle"
                            aria-label="Edit Premium Linen Shirt"
                          >
                            <i data-lucide="pencil" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary-soft btn-18 rounded-circle"
                            aria-label="Sales report for Premium Linen Shirt"
                          >
                            <i data-lucide="chart-column" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="scroll-col flex-grow-0">
                  <div className="card bg-plain border-2 rounded-5 h-100">
                    <div className="card-body d-flex flex-column gap-2 p-2">
                      <div className="position-relative">
                        <div className="ratio ratio-16x9 rounded-4 overflow-hidden">
                          <img
                            src="/assets/images/product-2.jpg"
                            alt="Structured Wool Coat"
                            width="560"
                            height="373"
                            className="object-fit-cover"
                          />
                        </div>
                        <span className="badge-soft tint-primary position-absolute top-0 end-0 m-2 fs-xs">
                          Women’s
                        </span>
                      </div>
                      <div className="px-1">
                        <h4 className="fs-lg fw-medium text-title text-truncate mb-1">
                          Structured Wool Coat
                        </h4>
                        <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                          <span className="d-inline-flex align-items-center gap-1">
                            <i className="icon-14 icon-fill text-cat-amber" data-lucide="star" aria-hidden="true" />
                            <span className="fs-md fw-semibold text-title">
                              <bdi>
                                4.6
                              </bdi>
                            </span>
                            <span className="fs-md text-muted-2">
                              <bdi>
                                (842)
                              </bdi>
                            </span>
                          </span>
                          <span className="badge-soft tint-success d-inline-flex align-items-center gap-1 px-2 py-1 fs-xs">
                            {" "}
                            <i className="icon-12" data-lucide="trending-up" aria-hidden="true" />
                            <span dir="ltr">
                              +12.4%
                            </span>
                            {" "}
                          </span>
                        </div>
                      </div>
                      <ul className="list-unstyled d-flex text-center mb-0">
                        <li className="flex-fill min-w-0 px-1">
                          <span className="d-block fs-md fw-bold text-title">
                            <bdi>
                              96
                            </bdi>
                          </span>
                          {" "}
                          <span className="fs-xs text-muted-2">
                            Sold
                          </span>
                        </li>
                        <li className="flex-fill min-w-0 px-1 border-start">
                          <span className="d-block fs-md fw-bold text-title">
                            <bdi>
                              $98K
                            </bdi>
                          </span>
                          {" "}
                          <span className="fs-xs text-muted-2">
                            Revenue
                          </span>
                        </li>
                        <li className="flex-fill min-w-0 px-1 border-start">
                          <span className="d-block fs-md fw-bold text-title">
                            <bdi>
                              318
                            </bdi>
                          </span>
                          {" "}
                          <span className="fs-xs text-muted-2">
                            Stock
                          </span>
                        </li>
                      </ul>
                      <hr className="my-1" />
                      <div className="d-flex align-items-center justify-content-between gap-2 px-1 mt-auto">
                        <a href="#" className="fs-md fw-semibold text-title text-decoration-none">
                          View Details
                        </a>
                        <div className="d-flex align-items-center gap-1">
                          <button
                            type="button"
                            className="btn btn-primary-soft btn-18 rounded-circle"
                            aria-label="Preview Structured Wool Coat"
                          >
                            <i data-lucide="eye" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary-soft btn-18 rounded-circle"
                            aria-label="Edit Structured Wool Coat"
                          >
                            <i data-lucide="pencil" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary-soft btn-18 rounded-circle"
                            aria-label="Sales report for Structured Wool Coat"
                          >
                            <i data-lucide="chart-column" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="scroll-col flex-grow-0">
                  <div className="card bg-plain border-2 rounded-5 h-100">
                    <div className="card-body d-flex flex-column gap-2 p-2">
                      <div className="position-relative">
                        <div className="ratio ratio-16x9 rounded-4 overflow-hidden">
                          <img
                            src="/assets/images/product-3.jpg"
                            alt="Scarlet Evening Top"
                            width="560"
                            height="374"
                            className="object-fit-cover"
                          />
                        </div>
                        <span className="badge-soft tint-primary position-absolute top-0 end-0 m-2 fs-xs">
                          Women’s
                        </span>
                      </div>
                      <div className="px-1">
                        <h4 className="fs-lg fw-medium text-title text-truncate mb-1">
                          Scarlet Evening Top
                        </h4>
                        <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                          <span className="d-inline-flex align-items-center gap-1">
                            <i className="icon-14 icon-fill text-cat-amber" data-lucide="star" aria-hidden="true" />
                            <span className="fs-md fw-semibold text-title">
                              <bdi>
                                4.9
                              </bdi>
                            </span>
                            <span className="fs-md text-muted-2">
                              <bdi>
                                (1,486)
                              </bdi>
                            </span>
                          </span>
                          <span className="badge-soft tint-success d-inline-flex align-items-center gap-1 px-2 py-1 fs-xs">
                            {" "}
                            <i className="icon-12" data-lucide="trending-up" aria-hidden="true" />
                            <span dir="ltr">
                              +24.8%
                            </span>
                            {" "}
                          </span>
                        </div>
                      </div>
                      <ul className="list-unstyled d-flex text-center mb-0">
                        <li className="flex-fill min-w-0 px-1">
                          <span className="d-block fs-md fw-bold text-title">
                            <bdi>
                              184
                            </bdi>
                          </span>
                          {" "}
                          <span className="fs-xs text-muted-2">
                            Sold
                          </span>
                        </li>
                        <li className="flex-fill min-w-0 px-1 border-start">
                          <span className="d-block fs-md fw-bold text-title">
                            <bdi>
                              $164K
                            </bdi>
                          </span>
                          {" "}
                          <span className="fs-xs text-muted-2">
                            Revenue
                          </span>
                        </li>
                        <li className="flex-fill min-w-0 px-1 border-start">
                          <span className="d-block fs-md fw-bold text-title">
                            <bdi>
                              212
                            </bdi>
                          </span>
                          {" "}
                          <span className="fs-xs text-muted-2">
                            Stock
                          </span>
                        </li>
                      </ul>
                      <hr className="my-1" />
                      <div className="d-flex align-items-center justify-content-between gap-2 px-1 mt-auto">
                        <a href="#" className="fs-md fw-semibold text-title text-decoration-none">
                          View Details
                        </a>
                        <div className="d-flex align-items-center gap-1">
                          <button
                            type="button"
                            className="btn btn-primary-soft btn-18 rounded-circle"
                            aria-label="Preview Scarlet Evening Top"
                          >
                            <i data-lucide="eye" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary-soft btn-18 rounded-circle"
                            aria-label="Edit Scarlet Evening Top"
                          >
                            <i data-lucide="pencil" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary-soft btn-18 rounded-circle"
                            aria-label="Sales report for Scarlet Evening Top"
                          >
                            <i data-lucide="chart-column" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="scroll-col flex-grow-0">
                  <div className="card bg-plain border-2 rounded-5 h-100">
                    <div className="card-body d-flex flex-column gap-2 p-2">
                      <div className="position-relative">
                        <div className="ratio ratio-16x9 rounded-4 overflow-hidden">
                          <img
                            src="/assets/images/product-4.jpg"
                            alt="Sunlit Cotton Dress"
                            width="560"
                            height="373"
                            className="object-fit-cover"
                          />
                        </div>
                        <span className="badge-soft tint-primary position-absolute top-0 end-0 m-2 fs-xs">
                          Women’s
                        </span>
                      </div>
                      <div className="px-1">
                        <h4 className="fs-lg fw-medium text-title text-truncate mb-1">
                          Sunlit Cotton Dress
                        </h4>
                        <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                          <span className="d-inline-flex align-items-center gap-1">
                            <i className="icon-14 icon-fill text-cat-amber" data-lucide="star" aria-hidden="true" />
                            <span className="fs-md fw-semibold text-title">
                              <bdi>
                                4.7
                              </bdi>
                            </span>
                            <span className="fs-md text-muted-2">
                              <bdi>
                                (964)
                              </bdi>
                            </span>
                          </span>
                          <span className="badge-soft tint-success d-inline-flex align-items-center gap-1 px-2 py-1 fs-xs">
                            {" "}
                            <i className="icon-12" data-lucide="trending-up" aria-hidden="true" />
                            <span dir="ltr">
                              +9.6%
                            </span>
                            {" "}
                          </span>
                        </div>
                      </div>
                      <ul className="list-unstyled d-flex text-center mb-0">
                        <li className="flex-fill min-w-0 px-1">
                          <span className="d-block fs-md fw-bold text-title">
                            <bdi>
                              142
                            </bdi>
                          </span>
                          {" "}
                          <span className="fs-xs text-muted-2">
                            Sold
                          </span>
                        </li>
                        <li className="flex-fill min-w-0 px-1 border-start">
                          <span className="d-block fs-md fw-bold text-title">
                            <bdi>
                              $118K
                            </bdi>
                          </span>
                          {" "}
                          <span className="fs-xs text-muted-2">
                            Revenue
                          </span>
                        </li>
                        <li className="flex-fill min-w-0 px-1 border-start">
                          <span className="d-block fs-md fw-bold text-title">
                            <bdi>
                              386
                            </bdi>
                          </span>
                          {" "}
                          <span className="fs-xs text-muted-2">
                            Stock
                          </span>
                        </li>
                      </ul>
                      <hr className="my-1" />
                      <div className="d-flex align-items-center justify-content-between gap-2 px-1 mt-auto">
                        <a href="#" className="fs-md fw-semibold text-title text-decoration-none">
                          View Details
                        </a>
                        <div className="d-flex align-items-center gap-1">
                          <button
                            type="button"
                            className="btn btn-primary-soft btn-18 rounded-circle"
                            aria-label="Preview Sunlit Cotton Dress"
                          >
                            <i data-lucide="eye" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary-soft btn-18 rounded-circle"
                            aria-label="Edit Sunlit Cotton Dress"
                          >
                            <i data-lucide="pencil" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary-soft btn-18 rounded-circle"
                            aria-label="Sales report for Sunlit Cotton Dress"
                          >
                            <i data-lucide="chart-column" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="scroll-col flex-grow-0">
                  <div className="card bg-plain border-2 rounded-5 h-100">
                    <div className="card-body d-flex flex-column gap-2 p-2">
                      <div className="position-relative">
                        <div className="ratio ratio-16x9 rounded-4 overflow-hidden">
                          <img
                            src="/assets/images/product-5.jpg"
                            alt="Elegant Striped Blouse"
                            width="560"
                            height="373"
                            className="object-fit-cover"
                          />
                        </div>
                        <span className="badge-soft tint-primary position-absolute top-0 end-0 m-2 fs-xs">
                          Women’s
                        </span>
                      </div>
                      <div className="px-1">
                        <h4 className="fs-lg fw-medium text-title text-truncate mb-1">
                          Elegant Striped Blouse
                        </h4>
                        <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                          <span className="d-inline-flex align-items-center gap-1">
                            <i className="icon-14 icon-fill text-cat-amber" data-lucide="star" aria-hidden="true" />
                            <span className="fs-md fw-semibold text-title">
                              <bdi>
                                4.5
                              </bdi>
                            </span>
                            <span className="fs-md text-muted-2">
                              <bdi>
                                (723)
                              </bdi>
                            </span>
                          </span>
                          <span className="badge-soft tint-success d-inline-flex align-items-center gap-1 px-2 py-1 fs-xs">
                            {" "}
                            <i className="icon-12" data-lucide="trending-up" aria-hidden="true" />
                            <span dir="ltr">
                              +6.2%
                            </span>
                            {" "}
                          </span>
                        </div>
                      </div>
                      <ul className="list-unstyled d-flex text-center mb-0">
                        <li className="flex-fill min-w-0 px-1">
                          <span className="d-block fs-md fw-bold text-title">
                            <bdi>
                              78
                            </bdi>
                          </span>
                          {" "}
                          <span className="fs-xs text-muted-2">
                            Sold
                          </span>
                        </li>
                        <li className="flex-fill min-w-0 px-1 border-start">
                          <span className="d-block fs-md fw-bold text-title">
                            <bdi>
                              $74K
                            </bdi>
                          </span>
                          {" "}
                          <span className="fs-xs text-muted-2">
                            Revenue
                          </span>
                        </li>
                        <li className="flex-fill min-w-0 px-1 border-start">
                          <span className="d-block fs-md fw-bold text-title">
                            <bdi>
                              504
                            </bdi>
                          </span>
                          {" "}
                          <span className="fs-xs text-muted-2">
                            Stock
                          </span>
                        </li>
                      </ul>
                      <hr className="my-1" />
                      <div className="d-flex align-items-center justify-content-between gap-2 px-1 mt-auto">
                        <a href="#" className="fs-md fw-semibold text-title text-decoration-none">
                          View Details
                        </a>
                        <div className="d-flex align-items-center gap-1">
                          <button
                            type="button"
                            className="btn btn-primary-soft btn-18 rounded-circle"
                            aria-label="Preview Elegant Striped Blouse"
                          >
                            <i data-lucide="eye" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary-soft btn-18 rounded-circle"
                            aria-label="Edit Elegant Striped Blouse"
                          >
                            <i data-lucide="pencil" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary-soft btn-18 rounded-circle"
                            aria-label="Sales report for Elegant Striped Blouse"
                          >
                            <i data-lucide="chart-column" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              {" "}
              <button
                type="button"
                data-scroll-nav="prev"
                className="scroll-nav btn btn-primary btn-18 rounded-circle position-absolute top-50 start-0 translate-middle-y z-2"
                aria-label="Previous products"
              >
                <i className="flip-rtl" data-lucide="arrow-left" />
              </button>
              {" "}
              <button
                type="button"
                data-scroll-nav="next"
                className="scroll-nav btn btn-primary btn-18 rounded-circle position-absolute top-50 end-0 translate-middle-y z-2"
                aria-label="Next products"
              >
                <i className="flip-rtl" data-lucide="arrow-right" />
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Order status ===== */}
      <section className="mb-4">
        <h2 className="visually-hidden">
          Order status
        </h2>
        <ul className="list-unstyled row row-cols-1 row-cols-sm-2 row-cols-xxl-4 g-3 mb-0">
          <li className="col">
            <div className="tint-amber h-100 d-flex align-items-center gap-3 p-3 rounded-4">
              <div className="flex-grow-1 align-self-stretch min-w-0 d-flex flex-column justify-content-between gap-3">
                <div>
                  <h3 className="fs-4 fw-semibold text-title mb-2">
                    Pending Order
                  </h3>
                  <p className="text-body-2 mb-0">
                    12% · est. 38 on-time
                  </p>
                </div>
                <p className="display-5 fw-bold text-title lh-1 mb-0">
                  <bdi>
                    200
                  </bdi>
                </p>
              </div>
              <img src="/assets/images/order-pending.svg" alt="" width="114" height="114" className="tile-art" />
            </div>
          </li>
          <li className="col">
            <div className="tint-blue h-100 d-flex align-items-center gap-3 p-3 rounded-4">
              <div className="flex-grow-1 align-self-stretch min-w-0 d-flex flex-column justify-content-between gap-3">
                <div>
                  <h3 className="fs-4 fw-semibold text-title mb-2">
                    Processing Order
                  </h3>
                  <p className="text-body-2 mb-0">
                    3% · est. 46 on-time
                  </p>
                </div>
                <p className="display-5 fw-bold text-title lh-1 mb-0">
                  <bdi>
                    50
                  </bdi>
                </p>
              </div>
              <img src="/assets/images/order-processing.svg" alt="" width="116" height="113" className="tile-art" />
            </div>
          </li>
          <li className="col">
            <div className="tint-emerald h-100 d-flex align-items-center gap-3 p-3 rounded-4">
              <div className="flex-grow-1 align-self-stretch min-w-0 d-flex flex-column justify-content-between gap-3">
                <div>
                  <h3 className="fs-4 fw-semibold text-title mb-2">
                    Delivered Order
                  </h3>
                  <p className="text-body-2 mb-0">
                    78% · est. 54 on-time
                  </p>
                </div>
                <p className="display-5 fw-bold text-title lh-1 mb-0">
                  <bdi>
                    60
                  </bdi>
                </p>
              </div>
              <img src="/assets/images/order-delivered.svg" alt="" width="113" height="113" className="tile-art" />
            </div>
          </li>
          <li className="col">
            <div className="tint-rose h-100 d-flex align-items-center gap-3 p-3 rounded-4">
              <div className="flex-grow-1 align-self-stretch min-w-0 d-flex flex-column justify-content-between gap-3">
                <div>
                  <h3 className="fs-4 fw-semibold text-title mb-2">
                    Return Order
                  </h3>
                  <p className="text-body-2 mb-0">
                    7% · est. 12 resolved
                  </p>
                </div>
                <p className="display-5 fw-bold text-title lh-1 mb-0">
                  <bdi>
                    20
                  </bdi>
                </p>
              </div>
              <img src="/assets/images/order-returned.svg" alt="" width="102" height="102" className="tile-art" />
            </div>
          </li>
        </ul>
      </section>
      {/* ===== Store performance ===== */}
      <section className="mb-4">
        <h2 className="visually-hidden">
          Store performance
        </h2>
        <ul className="list-unstyled row row-cols-1 row-cols-sm-2 row-cols-xl-4 g-3 mb-0">
          <li className="col">
            <div className="card h-100">
              <div className="card-body d-flex align-items-center justify-content-between gap-3">
                <div className="d-flex align-items-center gap-2 min-w-0">
                  <span className="icon-box icon-box-lg bg-accent text-nav rounded-circle" aria-hidden="true">
                    <i data-lucide="user-round-search" />
                  </span>
                  <div className="d-flex flex-column-reverse min-w-0">
                    <h3 className="fs-md fw-normal text-body-2 text-truncate mb-0">
                      Real-Time Visitors
                    </h3>
                    <p className="fs-3 fw-semibold text-title lh-1 mb-1">
                      <bdi>
                        23,526
                      </bdi>
                    </p>
                  </div>
                </div>
                <div id="ecomVisitorsSpark" className="chart-inline" />
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body d-flex align-items-center justify-content-between gap-3">
                <div className="d-flex align-items-center gap-2 min-w-0">
                  <span className="icon-box icon-box-lg bg-accent text-nav rounded-circle" aria-hidden="true">
                    <i data-lucide="dollar-sign" />
                  </span>
                  <div className="d-flex flex-column-reverse min-w-0">
                    <h3 className="fs-md fw-normal text-body-2 text-truncate mb-0">
                      Conversion Rate
                    </h3>
                    <p className="fs-3 fw-semibold text-title lh-1 mb-1">
                      <bdi>
                        20%
                      </bdi>
                    </p>
                  </div>
                </div>
                <div id="ecomConversionSpark" className="chart-inline" />
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body d-flex align-items-center justify-content-between gap-3">
                <div className="d-flex align-items-center gap-2 min-w-0">
                  <span className="icon-box icon-box-lg bg-accent text-nav rounded-circle" aria-hidden="true">
                    <i data-lucide="shopping-bag" />
                  </span>
                  <div className="d-flex flex-column-reverse min-w-0">
                    <h3 className="fs-md fw-normal text-body-2 text-truncate mb-0">
                      Abandoned Carts
                    </h3>
                    <p className="fs-3 fw-semibold text-title lh-1 mb-1">
                      <bdi>
                        1,284
                      </bdi>
                    </p>
                  </div>
                </div>
                <div id="ecomAbandonedSpark" className="chart-inline" />
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body d-flex align-items-center justify-content-between gap-3">
                <div className="d-flex align-items-center gap-2 min-w-0">
                  <span className="icon-box icon-box-lg bg-accent text-nav rounded-circle" aria-hidden="true">
                    <i data-lucide="package" />
                  </span>
                  <div className="d-flex flex-column-reverse min-w-0">
                    <h3 className="fs-md fw-normal text-body-2 text-truncate mb-0">
                      Products Sold
                    </h3>
                    <p className="fs-3 fw-semibold text-title lh-1 mb-1">
                      <bdi>
                        8,940
                      </bdi>
                    </p>
                  </div>
                </div>
                <div id="ecomProductsSpark" className="chart-inline" />
              </div>
            </div>
          </li>
        </ul>
      </section>
      {/* ===== Revenue overview & AI assistant ===== */}
      <section className="mb-4">
        <h2 className="visually-hidden">
          Revenue overview and AI assistant
        </h2>
        <div className="row g-3">
          <div className="col-12 col-xxl-8">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    Revenue Overview
                  </h3>
                  <div
                    className="nav nav-pills seg-toggle flex-nowrap gap-1 p-1 rounded-pill bg-soft"
                    role="group"
                    aria-label="Revenue overview time range"
                  >
                    <button type="button" className="nav-link fw-semibold">
                      Week
                    </button>
                    <button type="button" className="nav-link active fw-semibold">
                      Month
                    </button>
                    <button type="button" className="nav-link fw-semibold">
                      Year
                    </button>
                  </div>
                </div>
                <div id="ecomRevenueChart" className="chart-area flex-grow-1" />
                <ul className="d-flex flex-wrap align-items-center gap-3 fs-md text-body-2 mt-3 mb-0">
                  <li className="d-inline-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-emerald" />
                    Revenue
                  </li>
                  <li className="d-inline-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-blue" />
                    Total Orders
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-xxl-4">
            <div className="card on-dark bg-nav-strong h-100">
              <div className="card-body d-flex flex-column p-0">
                <div className="d-flex align-items-center gap-3 flex-shrink-0 p-3 border-b-soft">
                  <span
                    className="icon-box icon-box-lg bg-accent text-nav radius-md position-relative flex-shrink-0"
                    aria-hidden="true"
                  >
                    <i data-lucide="bot" />
                    <span className="avatar-status" />
                  </span>
                  <span className="lh-sm min-w-0">
                    {" "}
                    <span className="d-block fs-5 fw-bold text-title">
                      AI Assistant
                    </span>
                    {" "}
                    <span className="d-block fs-md text-body-2">
                      Online • Ready to help
                    </span>
                    {" "}
                  </span>
                </div>
                <div className="flex-fill min-h-0 d-flex flex-column justify-content-center overflow-y-auto scrollbar-thin p-3">
                  <div className="text-center mb-4">
                    <p className="fs-4 fw-bold text-title mb-1">
                      Welcome back!
                    </p>
                    <p className="fs-md text-body-2 mb-0">
                      How can I assist you today?
                    </p>
                  </div>
                  <ul className="list-unstyled row row-cols-2 g-3 mb-0">
                    <li className="col">
                      <button
                        type="button"
                        className="tile-soft border-soft d-flex flex-column gap-3 w-100 h-100 p-3 rounded-4 text-start transition-base"
                      >
                        <span className="icon-box bg-grad-3 fs-5" aria-hidden="true">
                          💡
                        </span>
                        <span className="fs-md fw-semibold">
                          How can you help me?
                        </span>
                      </button>
                    </li>
                    <li className="col">
                      <button
                        type="button"
                        className="tile-soft border-soft d-flex flex-column gap-3 w-100 h-100 p-3 rounded-4 text-start transition-base"
                      >
                        <span className="icon-box bg-grad-1 fs-5" aria-hidden="true">
                          🚀
                        </span>
                        <span className="fs-md fw-semibold">
                          Show me more features
                        </span>
                      </button>
                    </li>
                    <li className="col">
                      <button
                        type="button"
                        className="tile-soft border-soft d-flex flex-column gap-3 w-100 h-100 p-3 rounded-4 text-start transition-base"
                      >
                        <span className="icon-box bg-grad-5 fs-5" aria-hidden="true">
                          📊
                        </span>
                        <span className="fs-md fw-semibold">
                          Explain store analytics
                        </span>
                      </button>
                    </li>
                    <li className="col">
                      <button
                        type="button"
                        className="tile-soft border-soft d-flex flex-column gap-3 w-100 h-100 p-3 rounded-4 text-start transition-base"
                      >
                        <span className="icon-box bg-grad-2 fs-5" aria-hidden="true">
                          ⚡
                        </span>
                        <span className="fs-md fw-semibold">
                          Book a quick demo
                        </span>
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="flex-shrink-0 p-3 border-t-soft">
                  <form className="d-flex align-items-center gap-2 p-1 rounded-pill bg-soft border-soft">
                    <button
                      type="button"
                      className="btn btn-outline-soft btn-18 rounded-circle flex-shrink-0"
                      aria-label="Attach a file"
                    >
                      <i data-lucide="paperclip" />
                    </button>
                    <label htmlFor="ecomAssistantPrompt" className="visually-hidden">
                      Ask the AI assistant
                    </label>
                    <input
                      type="text"
                      id="ecomAssistantPrompt"
                      name="assistant-prompt"
                      autoComplete="off"
                      className="form-control flex-grow-1 min-w-0 px-0 border-0 bg-transparent shadow-none"
                      placeholder="Ask me anything…"
                    />
                    <button
                      type="button"
                      className="btn btn-outline-soft btn-18 rounded-circle flex-shrink-0"
                      aria-label="Use voice input"
                    >
                      <i data-lucide="mic" />
                    </button>
                    <button
                      type="submit"
                      className="btn btn-accent btn-18 rounded-circle flex-shrink-0"
                      aria-label="Send message"
                    >
                      <i data-lucide="send" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Payment methods & order analytics ===== */}
      <section className="mb-4">
        <h2 className="visually-hidden">
          Payment methods and order analytics
        </h2>
        <div className="row g-3">
          <div className="col-12 col-xxl-6">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    Payment Method
                  </h3>
                  <a href="#" className="btn btn-accent fw-semibold">
                    View All
                  </a>
                </div>
                <div className="row align-items-center flex-grow-1 g-3">
                  <div className="col-12 col-md-7">
                    <ul className="d-flex flex-column gap-2 mb-0">
                      <li className="bg-plain border-theme d-flex flex-wrap align-items-center justify-content-between gap-2 p-2 rounded-3">
                        <span className="d-inline-flex align-items-center gap-2 min-w-0">
                          <span className="icon-box bg-cat-blue text-white rounded-circle" aria-hidden="true">
                            <i data-lucide="credit-card" />
                          </span>
                          <span className="min-w-0">
                            {" "}
                            <span className="d-block fs-6 fw-semibold text-title text-truncate">
                              Credit Card
                            </span>
                            {" "}
                            <span className="d-block fs-md text-body-2 text-truncate">
                              <bdi>
                                1,145
                              </bdi>
                              {" "}
                              Customers
                            </span>
                            {" "}
                          </span>
                        </span>
                        <span className="fs-5 fw-bold text-title flex-shrink-0">
                          <bdi>
                            45%
                          </bdi>
                        </span>
                      </li>
                      <li className="bg-plain border-theme d-flex flex-wrap align-items-center justify-content-between gap-2 p-2 rounded-3">
                        <span className="d-inline-flex align-items-center gap-2 min-w-0">
                          <span className="icon-box bg-cat-emerald text-white rounded-circle" aria-hidden="true">
                            <i data-lucide="smartphone" />
                          </span>
                          <span className="min-w-0">
                            {" "}
                            <span className="d-block fs-6 fw-semibold text-title text-truncate">
                              UPI
                            </span>
                            {" "}
                            <span className="d-block fs-md text-body-2 text-truncate">
                              <bdi>
                                783
                              </bdi>
                              {" "}
                              Customers
                            </span>
                            {" "}
                          </span>
                        </span>
                        <span className="fs-5 fw-bold text-title flex-shrink-0">
                          <bdi>
                            30%
                          </bdi>
                        </span>
                      </li>
                      <li className="bg-plain border-theme d-flex flex-wrap align-items-center justify-content-between gap-2 p-2 rounded-3">
                        <span className="d-inline-flex align-items-center gap-2 min-w-0">
                          <span className="icon-box bg-cat-orange text-white rounded-circle" aria-hidden="true">
                            <i data-lucide="banknote" />
                          </span>
                          <span className="min-w-0">
                            {" "}
                            <span className="d-block fs-6 fw-semibold text-title text-truncate">
                              Cash On Delivery
                            </span>
                            {" "}
                            <span className="d-block fs-md text-body-2 text-truncate">
                              <bdi>
                                382
                              </bdi>
                              {" "}
                              Customers
                            </span>
                            {" "}
                          </span>
                        </span>
                        <span className="fs-5 fw-bold text-title flex-shrink-0">
                          <bdi>
                            15%
                          </bdi>
                        </span>
                      </li>
                      <li className="bg-plain border-theme d-flex flex-wrap align-items-center justify-content-between gap-2 p-2 rounded-3">
                        <span className="d-inline-flex align-items-center gap-2 min-w-0">
                          <span className="icon-box bg-cat-rose text-white rounded-circle" aria-hidden="true">
                            <i data-lucide="inbox" />
                          </span>
                          <span className="min-w-0">
                            {" "}
                            <span className="d-block fs-6 fw-semibold text-title text-truncate">
                              Other
                            </span>
                            {" "}
                            <span className="d-block fs-md text-body-2 text-truncate">
                              <bdi>
                                254
                              </bdi>
                              {" "}
                              Customers
                            </span>
                            {" "}
                          </span>
                        </span>
                        <span className="fs-5 fw-bold text-title flex-shrink-0">
                          <bdi>
                            10%
                          </bdi>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12 col-md-5">
                    <div className="position-relative">
                      <div id="ecomPaymentMethodChart" className="chart-area" />
                      <p className="chart-center fs-1 fw-bold text-title mb-0">
                        <bdi>
                          88%
                        </bdi>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-xxl-6">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-start justify-content-between gap-2 mb-3">
                  <div className="min-w-0">
                    <h3 className="fs-5 fw-bold text-title mb-1">
                      Order Analytics
                    </h3>
                    <p className="fs-md text-muted-2 mb-0">
                      Revenue vs Expenses comparison
                    </p>
                  </div>
                  <div
                    className="nav nav-pills seg-toggle flex-nowrap gap-1 p-1 rounded-pill bg-soft"
                    role="group"
                    aria-label="Order analytics time range"
                  >
                    <button type="button" className="nav-link fw-semibold">
                      Week
                    </button>
                    <button type="button" className="nav-link active fw-semibold">
                      Month
                    </button>
                    <button type="button" className="nav-link fw-semibold">
                      Year
                    </button>
                  </div>
                </div>
                <div id="ecomOrderAnalyticsChart" className="chart-area flex-grow-1" />
                <ul className="list-unstyled row row-cols-2 row-cols-md-4 g-3 border-t-soft pt-3 mt-3 mb-0">
                  <li className="col">
                    <p className="d-flex align-items-center gap-2 fs-md fw-semibold text-body-2 mb-2">
                      <span className="legend-dot bg-cat-violet" aria-hidden="true" />
                      Completed
                    </p>
                    <p className="d-flex flex-wrap align-items-center gap-2 mb-0">
                      <span className="fs-4 fw-medium text-title lh-1">
                        <bdi>
                          2.3K
                        </bdi>
                      </span>
                      <span className="badge-soft tint-success px-2 py-1 fs-xs" dir="ltr">
                        +11.4%
                      </span>
                    </p>
                  </li>
                  <li className="col">
                    <p className="d-flex align-items-center gap-2 fs-md fw-semibold text-body-2 mb-2">
                      <span className="legend-dot bg-cat-magenta" aria-hidden="true" />
                      Processing
                    </p>
                    <p className="d-flex flex-wrap align-items-center gap-2 mb-0">
                      <span className="fs-4 fw-medium text-title lh-1">
                        <bdi>
                          1.6K
                        </bdi>
                      </span>
                      <span className="badge-soft tint-magenta px-2 py-1 fs-xs" dir="ltr">
                        +4.0%
                      </span>
                    </p>
                  </li>
                  <li className="col">
                    <p className="d-flex align-items-center gap-2 fs-md fw-semibold text-body-2 mb-2">
                      <span className="legend-dot bg-cat-amber" aria-hidden="true" />
                      Pending
                    </p>
                    <p className="d-flex flex-wrap align-items-center gap-2 mb-0">
                      <span className="fs-4 fw-medium text-title lh-1">
                        <bdi>
                          1.1K
                        </bdi>
                      </span>
                      <span className="badge-soft tint-warning px-2 py-1 fs-xs" dir="ltr">
                        +7.0%
                      </span>
                    </p>
                  </li>
                  <li className="col">
                    <p className="d-flex align-items-center gap-2 fs-md fw-semibold text-body-2 mb-2">
                      <span className="legend-dot bg-cat-red" aria-hidden="true" />
                      Cancelled
                    </p>
                    <p className="d-flex flex-wrap align-items-center gap-2 mb-0">
                      <span className="fs-4 fw-medium text-title lh-1">
                        <bdi>
                          1.1K
                        </bdi>
                      </span>
                      <span className="badge-soft tint-danger px-2 py-1 fs-xs" dir="ltr">
                        +7.0%
                      </span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Lead sources & sales channels ===== */}
      <section className="mb-4">
        <h2 className="visually-hidden">
          Lead source attribution and sales by channel
        </h2>
        <div className="row g-3">
          <div className="col-12 col-xxl-7">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    Lead Source Attribution
                  </h3>
                  <span className="badge-soft tint-success d-inline-flex align-items-center gap-2">
                    {" "}
                    <span className="legend-dot legend-dot-sm bg-cat-emerald" aria-hidden="true" />
                    Live
                    {" "}
                  </span>
                </div>
                <div className="row g-3 flex-grow-1">
                  <div className="col-12 col-lg-6 d-flex align-items-center">
                    <div className="position-relative w-100">
                      <div id="ecomLeadSourceChart" className="chart-area" />
                      <span className="chart-center">
                        <span className="d-block fs-1 fw-bold text-title">
                          <bdi>
                            486
                          </bdi>
                        </span>
                        <span className="d-block fs-xs fw-semibold text-uppercase text-muted-2">
                          New Leads
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <ul className="list-unstyled h-100 d-flex flex-column justify-content-center gap-2 mb-0">
                      <li className="bg-plain border-theme d-flex flex-column gap-2 p-3 rounded-2">
                        <span className="d-flex align-items-center justify-content-between gap-2">
                          <span className="d-inline-flex align-items-center gap-2 min-w-0">
                            <span
                              className="icon-box icon-box-sm bg-cat-violet text-white rounded-circle flex-shrink-0"
                              aria-hidden="true"
                            >
                              <i data-lucide="search" />
                            </span>
                            <span className="fw-medium text-title text-truncate">
                              Organic Search
                            </span>
                          </span>
                          <span className="d-inline-flex align-items-baseline gap-2 flex-shrink-0">
                            <span className="fs-md text-muted-2">
                              <bdi>
                                482K
                              </bdi>
                            </span>
                            <span className="fw-bold text-title">
                              <bdi>
                                38.4%
                              </bdi>
                            </span>
                          </span>
                        </span>
                        <span
                          className="progress"
                          role="progressbar"
                          aria-label="Organic Search share of new leads"
                          aria-valuenow="38.4"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="progress-bar bg-cat-violet" style={{ width: "38.4%" }} />
                        </span>
                      </li>
                      <li className="bg-plain border-theme d-flex flex-column gap-2 p-3 rounded-2">
                        <span className="d-flex align-items-center justify-content-between gap-2">
                          <span className="d-inline-flex align-items-center gap-2 min-w-0">
                            <span
                              className="icon-box icon-box-sm bg-cat-emerald text-white rounded-circle flex-shrink-0"
                              aria-hidden="true"
                            >
                              <i data-lucide="mouse-pointer-click" />
                            </span>
                            <span className="fw-medium text-title text-truncate">
                              Direct
                            </span>
                          </span>
                          <span className="d-inline-flex align-items-baseline gap-2 flex-shrink-0">
                            <span className="fs-md text-muted-2">
                              <bdi>
                                311K
                              </bdi>
                            </span>
                            <span className="fw-bold text-title">
                              <bdi>
                                24.8%
                              </bdi>
                            </span>
                          </span>
                        </span>
                        <span
                          className="progress"
                          role="progressbar"
                          aria-label="Direct share of new leads"
                          aria-valuenow="24.8"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="progress-bar bg-cat-emerald" style={{ width: "24.8%" }} />
                        </span>
                      </li>
                      <li className="bg-plain border-theme d-flex flex-column gap-2 p-3 rounded-2">
                        <span className="d-flex align-items-center justify-content-between gap-2">
                          <span className="d-inline-flex align-items-center gap-2 min-w-0">
                            <span
                              className="icon-box icon-box-sm bg-cat-blue text-white rounded-circle flex-shrink-0"
                              aria-hidden="true"
                            >
                              <i data-lucide="link" />
                            </span>
                            <span className="fw-medium text-title text-truncate">
                              Referral
                            </span>
                          </span>
                          <span className="d-inline-flex align-items-baseline gap-2 flex-shrink-0">
                            <span className="fs-md text-muted-2">
                              <bdi>
                                228K
                              </bdi>
                            </span>
                            <span className="fw-bold text-title">
                              <bdi>
                                18.2%
                              </bdi>
                            </span>
                          </span>
                        </span>
                        <span
                          className="progress"
                          role="progressbar"
                          aria-label="Referral share of new leads"
                          aria-valuenow="18.2"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="progress-bar bg-cat-blue" style={{ width: "18.2%" }} />
                        </span>
                      </li>
                      <li className="bg-plain border-theme d-flex flex-column gap-2 p-3 rounded-2">
                        <span className="d-flex align-items-center justify-content-between gap-2">
                          <span className="d-inline-flex align-items-center gap-2 min-w-0">
                            <span
                              className="icon-box icon-box-sm bg-cat-amber text-white rounded-circle flex-shrink-0"
                              aria-hidden="true"
                            >
                              <i data-lucide="share-2" />
                            </span>
                            <span className="fw-medium text-title text-truncate">
                              Social Media
                            </span>
                          </span>
                          <span className="d-inline-flex align-items-baseline gap-2 flex-shrink-0">
                            <span className="fs-md text-muted-2">
                              <bdi>
                                158K
                              </bdi>
                            </span>
                            <span className="fw-bold text-title">
                              <bdi>
                                12.6%
                              </bdi>
                            </span>
                          </span>
                        </span>
                        <span
                          className="progress"
                          role="progressbar"
                          aria-label="Social Media share of new leads"
                          aria-valuenow="12.6"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="progress-bar bg-cat-amber" style={{ width: "12.6%" }} />
                        </span>
                      </li>
                      <li className="bg-plain border-theme d-flex flex-column gap-2 p-3 rounded-2">
                        <span className="d-flex align-items-center justify-content-between gap-2">
                          <span className="d-inline-flex align-items-center gap-2 min-w-0">
                            <span
                              className="icon-box icon-box-sm bg-cat-magenta text-white rounded-circle flex-shrink-0"
                              aria-hidden="true"
                            >
                              <i data-lucide="mail" />
                            </span>
                            <span className="fw-medium text-title text-truncate">
                              Email
                            </span>
                          </span>
                          <span className="d-inline-flex align-items-baseline gap-2 flex-shrink-0">
                            <span className="fs-md text-muted-2">
                              <bdi>
                                75K
                              </bdi>
                            </span>
                            <span className="fw-bold text-title">
                              <bdi>
                                6%
                              </bdi>
                            </span>
                          </span>
                        </span>
                        <span
                          className="progress"
                          role="progressbar"
                          aria-label="Email share of new leads"
                          aria-valuenow="6"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="progress-bar bg-cat-magenta" style={{ width: "6%" }} />
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="bg-cat-emerald text-white fs-5 fw-medium px-3 py-2 rounded-4 mt-3 mb-0">
                  <span className="legend-dot legend-dot-sm bg-white align-middle me-2" aria-hidden="true" />
                  Organic search leads with
                  {" "}
                  <strong>
                    38.4%
                  </strong>
                  {" "}
                  — up 6.2% from last month
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-xxl-5">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <h3 className="fs-5 fw-bold text-title mb-3">
                  Sales by Channel
                </h3>
                <div className="row align-items-center g-3 mb-3">
                  <div className="col-12 col-sm-6">
                    <div className="position-relative">
                      <div id="ecomSalesByChannelChart" className="chart-area" />
                      <span className="chart-center">
                        <img src="/assets/images/order-delivered.svg" alt="" width="70" height="70" />
                      </span>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <p className="fs-5 text-muted-2 mb-1">
                      Total
                    </p>
                    <p className="fs-1 fw-bold text-title lh-1 mb-2">
                      <bdi>
                        $248,420
                      </bdi>
                    </p>
                    <span className="badge-soft tint-success d-inline-flex align-items-center gap-2 fs-lg">
                      {" "}
                      <i className="icon-18" data-lucide="trending-up" aria-hidden="true" />
                      <span dir="ltr">
                        +18.2%
                      </span>
                      {" "}
                    </span>
                  </div>
                </div>
                <ul className="list-unstyled d-flex flex-column gap-2 mt-auto mb-0">
                  <li className="bg-plain border-theme d-flex flex-wrap align-items-center justify-content-between gap-2 p-2 rounded-3">
                    <span className="d-inline-flex align-items-center gap-2 min-w-0">
                      <span className="avatar bg-plain flex-shrink-0">
                        <img src="/assets/images/channels/walmart.png" alt="Walmart" width="40" height="40" />
                      </span>
                      <span className="min-w-0">
                        {" "}
                        <span className="d-flex align-items-center gap-2">
                          <span className="fs-6 fw-semibold text-title text-truncate">
                            Walmart
                          </span>
                          <span className="legend-dot legend-dot-sm bg-cat-blue flex-shrink-0" aria-hidden="true" />
                        </span>
                        {" "}
                        <span className="d-block fs-md fw-semibold text-muted-2 text-truncate">
                          <bdi>
                            $254,55
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </span>
                    <span className="fs-5 fw-bold text-title flex-shrink-0">
                      <bdi>
                        52%
                      </bdi>
                    </span>
                  </li>
                  <li className="bg-plain border-theme d-flex flex-wrap align-items-center justify-content-between gap-2 p-2 rounded-3">
                    <span className="d-inline-flex align-items-center gap-2 min-w-0">
                      <span className="avatar bg-plain flex-shrink-0">
                        <img src="/assets/images/channels/amazon.png" alt="Amazon" width="40" height="40" />
                      </span>
                      <span className="min-w-0">
                        {" "}
                        <span className="d-flex align-items-center gap-2">
                          <span className="fs-6 fw-semibold text-title text-truncate">
                            Amazon
                          </span>
                          <span className="legend-dot legend-dot-sm bg-cat-amber flex-shrink-0" aria-hidden="true" />
                        </span>
                        {" "}
                        <span className="d-block fs-md fw-semibold text-muted-2 text-truncate">
                          <bdi>
                            $254,55
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </span>
                    <span className="fs-5 fw-bold text-title flex-shrink-0">
                      <bdi>
                        18%
                      </bdi>
                    </span>
                  </li>
                  <li className="bg-plain border-theme d-flex flex-wrap align-items-center justify-content-between gap-2 p-2 rounded-3">
                    <span className="d-inline-flex align-items-center gap-2 min-w-0">
                      <span className="avatar bg-plain flex-shrink-0">
                        <img src="/assets/images/channels/ebay.png" alt="eBay" width="40" height="40" />
                      </span>
                      <span className="min-w-0">
                        {" "}
                        <span className="d-flex align-items-center gap-2">
                          <span className="fs-6 fw-semibold text-title text-truncate">
                            eBay
                          </span>
                          <span className="legend-dot legend-dot-sm bg-cat-violet flex-shrink-0" aria-hidden="true" />
                        </span>
                        {" "}
                        <span className="d-block fs-md fw-semibold text-muted-2 text-truncate">
                          <bdi>
                            $254,55
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </span>
                    <span className="fs-5 fw-bold text-title flex-shrink-0">
                      <bdi>
                        18%
                      </bdi>
                    </span>
                  </li>
                  <li className="bg-plain border-theme d-flex flex-wrap align-items-center justify-content-between gap-2 p-2 rounded-3">
                    <span className="d-inline-flex align-items-center gap-2 min-w-0">
                      <span
                        className="icon-box bg-cat-slate text-white rounded-circle flex-shrink-0"
                        aria-hidden="true"
                      >
                        <i data-lucide="store" />
                      </span>
                      <span className="min-w-0">
                        {" "}
                        <span className="d-flex align-items-center gap-2">
                          <span className="fs-6 fw-semibold text-title text-truncate">
                            Others
                          </span>
                          <span className="legend-dot legend-dot-sm bg-cat-slate flex-shrink-0" aria-hidden="true" />
                        </span>
                        {" "}
                        <span className="d-block fs-md fw-semibold text-muted-2 text-truncate">
                          <bdi>
                            $254,55
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </span>
                    <span className="fs-5 fw-bold text-title flex-shrink-0">
                      <bdi>
                        12%
                      </bdi>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Top categories & inventory overview ===== */}
      <section className="mb-4">
        <h2 className="visually-hidden">
          Top categories and inventory overview
        </h2>
        <div className="row g-3">
          <div className="col-12 col-xxl-5">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <h3 className="fs-5 fw-bold text-title text-capitalize mb-0">
                    Top Category
                  </h3>
                  <div className="d-flex flex-wrap align-items-center gap-2">
                    <div className="dropdown">
                      <button
                        type="button"
                        className="btn btn-accent btn-sm d-inline-flex flex-nowrap align-items-center gap-2 text-nowrap"
                        id="topCategoryExport"
                        data-bs-toggle="dropdown"
                        data-bs-offset="0,8"
                        aria-expanded="false"
                      >
                        <i className="icon-18" data-lucide="download" aria-hidden="true" />
                        Export
                        {" "}
                        <i className="dd-caret icon-16" data-lucide="chevron-down" aria-hidden="true" />
                      </button>
                      {" "}
                      <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="topCategoryExport">
                        <li>
                          <button type="button" className="dropdown-item">
                            Export as CSV
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item">
                            Export as Excel
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item">
                            Export as PDF
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdown">
                      <button
                        type="button"
                        className="btn btn-accent-soft btn-sm d-inline-flex flex-nowrap align-items-center gap-2 text-nowrap"
                        id="topCategoryShare"
                        data-bs-toggle="dropdown"
                        data-bs-offset="0,8"
                        aria-expanded="false"
                      >
                        <i className="icon-18" data-lucide="link" aria-hidden="true" />
                        Share
                        {" "}
                        <i className="dd-caret icon-16" data-lucide="chevron-down" aria-hidden="true" />
                      </button>
                      {" "}
                      <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="topCategoryShare">
                        <li>
                          <button type="button" className="dropdown-item">
                            Copy link
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item">
                            Invite by email
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item">
                            Embed report
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table table-striped table-hover align-middle mb-0">
                    <caption className="visually-hidden">
                      Top performing categories by orders, revenue and growth
                    </caption>
                    <thead>
                      <tr>
                        <th scope="col">
                          Category
                        </th>
                        <th scope="col">
                          Order
                        </th>
                        <th scope="col">
                          Revenue
                        </th>
                        <th scope="col">
                          Growth
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row" className="fs-md fw-semibold text-title text-capitalize">
                          Electronics
                        </th>
                        <td>
                          <span className="fs-md fw-bold text-title">
                            <bdi>
                              400
                            </bdi>
                          </span>
                        </td>
                        <td>
                          <span className="fs-md fw-bold text-title">
                            <bdi>
                              $29,43,265
                            </bdi>
                          </span>
                        </td>
                        <td>
                          <span className="d-inline-flex align-items-center gap-1 fs-md fw-bold text-cat-emerald">
                            <i className="icon-14" data-lucide="trending-up" aria-hidden="true" />
                            <span dir="ltr">
                              +18.2%
                            </span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="fs-md fw-semibold text-title text-capitalize">
                          Fashion
                        </th>
                        <td>
                          <span className="fs-md fw-bold text-title">
                            <bdi>
                              600
                            </bdi>
                          </span>
                        </td>
                        <td>
                          <span className="fs-md fw-bold text-title">
                            <bdi>
                              $29,43,265
                            </bdi>
                          </span>
                        </td>
                        <td>
                          <span className="d-inline-flex align-items-center gap-1 fs-md fw-bold text-cat-emerald">
                            <i className="icon-14" data-lucide="trending-up" aria-hidden="true" />
                            <span dir="ltr">
                              +18.2%
                            </span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="fs-md fw-semibold text-title text-capitalize">
                          Sports
                        </th>
                        <td>
                          <span className="fs-md fw-bold text-title">
                            <bdi>
                              500
                            </bdi>
                          </span>
                        </td>
                        <td>
                          <span className="fs-md fw-bold text-title">
                            <bdi>
                              $29,43,265
                            </bdi>
                          </span>
                        </td>
                        <td>
                          <span className="d-inline-flex align-items-center gap-1 fs-md fw-bold text-cat-emerald">
                            <i className="icon-14" data-lucide="trending-up" aria-hidden="true" />
                            <span dir="ltr">
                              +18.2%
                            </span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="fs-md fw-semibold text-title text-capitalize">
                          {"Home & Living"}
                        </th>
                        <td>
                          <span className="fs-md fw-bold text-title">
                            <bdi>
                              500
                            </bdi>
                          </span>
                        </td>
                        <td>
                          <span className="fs-md fw-bold text-title">
                            <bdi>
                              $29,43,265
                            </bdi>
                          </span>
                        </td>
                        <td>
                          <span className="d-inline-flex align-items-center gap-1 fs-md fw-bold text-cat-emerald">
                            <i className="icon-14" data-lucide="trending-up" aria-hidden="true" />
                            <span dir="ltr">
                              +18.2%
                            </span>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 pt-3 border-t-soft mt-auto">
                  <span className="fs-md text-muted-2">
                    Showing 1–8 of 8 results
                  </span>
                  <nav aria-label="Top category pagination">
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
          </div>
          <div className="col-12 col-xxl-7">
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
              <h3 className="fs-5 fw-bold text-title text-capitalize mb-0">
                Inventory Overview
              </h3>
              <a href="#" className="btn btn-accent btn-sm fw-semibold text-nowrap">
                View All
              </a>
            </div>
            <ul className="list-unstyled row row-cols-1 row-cols-sm-2 row-cols-xl-3 g-3 mb-0">
              <li className="col">
                <div className="card position-relative h-100">
                  <div className="card-body d-flex flex-column gap-2 p-3">
                    <img
                      src="/assets/images/inventory-1.jpg"
                      alt="Trail Running Sneakers"
                      width="50"
                      height="50"
                      className="rounded-3 object-fit-cover"
                    />
                    <h4 className="fs-6 fw-semibold text-title mb-0">
                      Trail Running Sneakers
                    </h4>
                    <div className="d-flex align-items-center gap-3 mt-auto">
                      <span
                        className="progress flex-grow-1"
                        role="progressbar"
                        aria-label="Trail Running Sneakers stock"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <span className="progress-bar bg-cat-red" style={{ width: "100%" }} />
                      </span>
                      <span className="fs-md fw-semibold text-muted-2 flex-shrink-0">
                        <bdi>
                          500/500
                        </bdi>
                      </span>
                    </div>
                  </div>
                  <span className="badge-soft bg-cat-red text-white position-absolute top-0 end-0 m-2 fs-xs">
                    Out Of Stock
                  </span>
                </div>
              </li>
              <li className="col">
                <div className="card position-relative h-100">
                  <div className="card-body d-flex flex-column gap-2 p-3">
                    <img
                      src="/assets/images/inventory-2.jpg"
                      alt="Wireless Sports Headphones"
                      width="50"
                      height="50"
                      className="rounded-3 object-fit-cover"
                    />
                    <h4 className="fs-6 fw-semibold text-title mb-0">
                      Wireless Sports Headphones
                    </h4>
                    <div className="d-flex align-items-center gap-3 mt-auto">
                      <span
                        className="progress flex-grow-1"
                        role="progressbar"
                        aria-label="Wireless Sports Headphones stock"
                        aria-valuenow="20"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <span className="progress-bar bg-cat-emerald" style={{ width: "20%" }} />
                      </span>
                      <span className="fs-md fw-semibold text-muted-2 flex-shrink-0">
                        <bdi>
                          100/500
                        </bdi>
                      </span>
                    </div>
                  </div>
                  <span className="badge-soft bg-cat-emerald text-white position-absolute top-0 end-0 m-2 fs-xs">
                    In Stock
                  </span>
                </div>
              </li>
              <li className="col">
                <div className="card position-relative h-100">
                  <div className="card-body d-flex flex-column gap-2 p-3">
                    <img
                      src="/assets/images/inventory-3.jpg"
                      alt="Noise Cancelling Headset"
                      width="50"
                      height="50"
                      className="rounded-3 object-fit-cover"
                    />
                    <h4 className="fs-6 fw-semibold text-title mb-0">
                      Noise Cancelling Headset
                    </h4>
                    <div className="d-flex align-items-center gap-3 mt-auto">
                      <span
                        className="progress flex-grow-1"
                        role="progressbar"
                        aria-label="Noise Cancelling Headset stock"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <span className="progress-bar bg-cat-red" style={{ width: "100%" }} />
                      </span>
                      <span className="fs-md fw-semibold text-muted-2 flex-shrink-0">
                        <bdi>
                          500/500
                        </bdi>
                      </span>
                    </div>
                  </div>
                  <span className="badge-soft bg-cat-red text-white position-absolute top-0 end-0 m-2 fs-xs">
                    Out Of Stock
                  </span>
                </div>
              </li>
              <li className="col">
                <div className="card position-relative h-100">
                  <div className="card-body d-flex flex-column gap-2 p-3">
                    <img
                      src="/assets/images/inventory-4.jpg"
                      alt="Kids Winter Coat"
                      width="50"
                      height="50"
                      className="rounded-3 object-fit-cover"
                    />
                    <h4 className="fs-6 fw-semibold text-title mb-0">
                      Kids Winter Coat
                    </h4>
                    <div className="d-flex align-items-center gap-3 mt-auto">
                      <span
                        className="progress flex-grow-1"
                        role="progressbar"
                        aria-label="Kids Winter Coat stock"
                        aria-valuenow="20"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <span className="progress-bar bg-cat-emerald" style={{ width: "20%" }} />
                      </span>
                      <span className="fs-md fw-semibold text-muted-2 flex-shrink-0">
                        <bdi>
                          100/500
                        </bdi>
                      </span>
                    </div>
                  </div>
                  <span className="badge-soft bg-cat-emerald text-white position-absolute top-0 end-0 m-2 fs-xs">
                    In Stock
                  </span>
                </div>
              </li>
              <li className="col">
                <div className="card position-relative h-100">
                  <div className="card-body d-flex flex-column gap-2 p-3">
                    <img
                      src="/assets/images/inventory-5.jpg"
                      alt="Canvas Shoulder Bag"
                      width="50"
                      height="50"
                      className="rounded-3 object-fit-cover"
                    />
                    <h4 className="fs-6 fw-semibold text-title mb-0">
                      Canvas Shoulder Bag
                    </h4>
                    <div className="d-flex align-items-center gap-3 mt-auto">
                      <span
                        className="progress flex-grow-1"
                        role="progressbar"
                        aria-label="Canvas Shoulder Bag stock"
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <span className="progress-bar bg-cat-orange" style={{ width: "80%" }} />
                      </span>
                      <span className="fs-md fw-semibold text-muted-2 flex-shrink-0">
                        <bdi>
                          400/500
                        </bdi>
                      </span>
                    </div>
                  </div>
                  <span className="badge-soft bg-cat-orange text-white position-absolute top-0 end-0 m-2 fs-xs">
                    Low Stock
                  </span>
                </div>
              </li>
              <li className="col">
                <div className="card position-relative h-100">
                  <div className="card-body d-flex flex-column gap-2 p-3">
                    <img
                      src="/assets/images/inventory-6.jpg"
                      alt="Crossfit Training Shoes"
                      width="50"
                      height="50"
                      className="rounded-3 object-fit-cover"
                    />
                    <h4 className="fs-6 fw-semibold text-title mb-0">
                      Crossfit Training Shoes
                    </h4>
                    <div className="d-flex align-items-center gap-3 mt-auto">
                      <span
                        className="progress flex-grow-1"
                        role="progressbar"
                        aria-label="Crossfit Training Shoes stock"
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <span className="progress-bar bg-cat-orange" style={{ width: "80%" }} />
                      </span>
                      <span className="fs-md fw-semibold text-muted-2 flex-shrink-0">
                        <bdi>
                          400/500
                        </bdi>
                      </span>
                    </div>
                  </div>
                  <span className="badge-soft bg-cat-orange text-white position-absolute top-0 end-0 m-2 fs-xs">
                    Low Stock
                  </span>
                </div>
              </li>
              <li className="col">
                <div className="card position-relative h-100">
                  <div className="card-body d-flex flex-column gap-2 p-3">
                    <img
                      src="/assets/images/inventory-7.jpg"
                      alt="Designer Handbag"
                      width="50"
                      height="50"
                      className="rounded-3 object-fit-cover"
                    />
                    <h4 className="fs-6 fw-semibold text-title mb-0">
                      Designer Handbag
                    </h4>
                    <div className="d-flex align-items-center gap-3 mt-auto">
                      <span
                        className="progress flex-grow-1"
                        role="progressbar"
                        aria-label="Designer Handbag stock"
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <span className="progress-bar bg-cat-orange" style={{ width: "80%" }} />
                      </span>
                      <span className="fs-md fw-semibold text-muted-2 flex-shrink-0">
                        <bdi>
                          400/500
                        </bdi>
                      </span>
                    </div>
                  </div>
                  <span className="badge-soft bg-cat-orange text-white position-absolute top-0 end-0 m-2 fs-xs">
                    Low Stock
                  </span>
                </div>
              </li>
              <li className="col">
                <div className="card position-relative h-100">
                  <div className="card-body d-flex flex-column gap-2 p-3">
                    <img
                      src="/assets/images/inventory-8.jpg"
                      alt="Basketball Sneakers"
                      width="50"
                      height="50"
                      className="rounded-3 object-fit-cover"
                    />
                    <h4 className="fs-6 fw-semibold text-title mb-0">
                      Basketball Sneakers
                    </h4>
                    <div className="d-flex align-items-center gap-3 mt-auto">
                      <span
                        className="progress flex-grow-1"
                        role="progressbar"
                        aria-label="Basketball Sneakers stock"
                        aria-valuenow="20"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <span className="progress-bar bg-cat-emerald" style={{ width: "20%" }} />
                      </span>
                      <span className="fs-md fw-semibold text-muted-2 flex-shrink-0">
                        <bdi>
                          100/500
                        </bdi>
                      </span>
                    </div>
                  </div>
                  <span className="badge-soft bg-cat-emerald text-white position-absolute top-0 end-0 m-2 fs-xs">
                    In Stock
                  </span>
                </div>
              </li>
              <li className="col">
                <div className="card position-relative h-100">
                  <div className="card-body d-flex flex-column gap-2 p-3">
                    <img
                      src="/assets/images/inventory-9.jpg"
                      alt="Fleece Hoodie for Kids"
                      width="50"
                      height="50"
                      className="rounded-3 object-fit-cover"
                    />
                    <h4 className="fs-6 fw-semibold text-title mb-0">
                      Fleece Hoodie for Kids
                    </h4>
                    <div className="d-flex align-items-center gap-3 mt-auto">
                      <span
                        className="progress flex-grow-1"
                        role="progressbar"
                        aria-label="Fleece Hoodie for Kids stock"
                        aria-valuenow="20"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <span className="progress-bar bg-cat-emerald" style={{ width: "20%" }} />
                      </span>
                      <span className="fs-md fw-semibold text-muted-2 flex-shrink-0">
                        <bdi>
                          100/500
                        </bdi>
                      </span>
                    </div>
                  </div>
                  <span className="badge-soft bg-cat-emerald text-white position-absolute top-0 end-0 m-2 fs-xs">
                    In Stock
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* ===== Recent activity & recent orders ===== */}
      <section className="mb-4">
        <h2 className="visually-hidden">
          Recent activity and recent orders
        </h2>
        <div className="row g-3">
          <div className="col-12 col-xxl-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    Recent Activity
                  </h3>
                  <a href="#" className="btn btn-accent btn-sm fw-semibold text-nowrap">
                    View All
                  </a>
                </div>
                <ul className="d-flex flex-column gap-3 mb-0">
                  <li className="d-flex flex-wrap align-items-center gap-3 pb-3 border-b-soft">
                    <span className="icon-box icon-box-sm tint-violet" aria-hidden="true">
                      <i data-lucide="user-round-plus" />
                    </span>
                    <span className="d-flex flex-column flex-grow-1 min-w-0">
                      <span className="fs-6 text-title">
                        New Registration
                      </span>
                      <span className="fs-md text-muted-2 text-truncate">
                        maria.santos@gmail.com created an account
                      </span>
                    </span>
                    <span className="fs-xs text-muted-2 flex-shrink-0">
                      2 min ago
                    </span>
                  </li>
                  <li className="d-flex flex-wrap align-items-center gap-3 pb-3 border-b-soft">
                    <span className="icon-box icon-box-sm tint-emerald" aria-hidden="true">
                      <i data-lucide="shopping-bag" />
                    </span>
                    <span className="d-flex flex-column flex-grow-1 min-w-0">
                      <span className="fs-6 text-title">
                        New Order
                      </span>
                      <span className="fs-md text-muted-2 text-truncate">
                        <bdi>
                          Order #INV-2847 placed for $4,200.00
                        </bdi>
                      </span>
                    </span>
                    <span className="fs-xs text-muted-2 flex-shrink-0">
                      5 min ago
                    </span>
                  </li>
                  <li className="d-flex flex-wrap align-items-center gap-3 pb-3 border-b-soft">
                    <span className="icon-box icon-box-sm tint-cyan" aria-hidden="true">
                      <i data-lucide="credit-card" />
                    </span>
                    <span className="d-flex flex-column flex-grow-1 min-w-0">
                      <span className="fs-6 text-title">
                        Payment Received
                      </span>
                      <span className="fs-md text-muted-2 text-truncate">
                        <bdi>
                          Payment of $12,400 confirmed from James W.
                        </bdi>
                      </span>
                    </span>
                    <span className="fs-xs text-muted-2 flex-shrink-0">
                      12 min ago
                    </span>
                  </li>
                  <li className="d-flex flex-wrap align-items-center gap-3 pb-3 border-b-soft">
                    <span className="icon-box icon-box-sm tint-amber" aria-hidden="true">
                      <i data-lucide="star" />
                    </span>
                    <span className="d-flex flex-column flex-grow-1 min-w-0">
                      <span className="fs-6 text-title">
                        New Review
                      </span>
                      <span className="fs-md text-muted-2 text-truncate">
                        5★ review on Analytics Pro module
                      </span>
                    </span>
                    <span className="fs-xs text-muted-2 flex-shrink-0">
                      28 min ago
                    </span>
                  </li>
                  <li className="d-flex flex-wrap align-items-center gap-3 pb-3 border-b-soft">
                    <span className="icon-box icon-box-sm bg-muted text-body-2" aria-hidden="true">
                      <i data-lucide="settings" />
                    </span>
                    <span className="d-flex flex-column flex-grow-1 min-w-0">
                      <span className="fs-6 text-title">
                        System Update
                      </span>
                      <span className="fs-md text-muted-2 text-truncate">
                        <bdi>
                          Dashboard v2.4.1 deployed successfully
                        </bdi>
                      </span>
                    </span>
                    <span className="fs-xs text-muted-2 flex-shrink-0">
                      1h ago
                    </span>
                  </li>
                  <li className="d-flex flex-wrap align-items-center gap-3 pb-3 border-b-soft">
                    <span className="icon-box icon-box-sm tint-violet" aria-hidden="true">
                      <i data-lucide="user-round-plus" />
                    </span>
                    <span className="d-flex flex-column flex-grow-1 min-w-0">
                      <span className="fs-6 text-title">
                        New Registration
                      </span>
                      <span className="fs-md text-muted-2 text-truncate">
                        dev.team@cloudbase.io joined the platform
                      </span>
                    </span>
                    <span className="fs-xs text-muted-2 flex-shrink-0">
                      1h 20m ago
                    </span>
                  </li>
                  <li className="d-flex flex-wrap align-items-center gap-3">
                    <span className="icon-box icon-box-sm tint-danger" aria-hidden="true">
                      <i data-lucide="refresh-cw" />
                    </span>
                    <span className="d-flex flex-column flex-grow-1 min-w-0">
                      <span className="fs-6 text-title">
                        Subscription Renewed
                      </span>
                      <span className="fs-md text-muted-2 text-truncate">
                        <bdi>
                          Enterprise plan renewed by TechCorp ($2,400/mo)
                        </bdi>
                      </span>
                    </span>
                    <span className="fs-xs text-muted-2 flex-shrink-0">
                      2h ago
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-xxl-8">
            <div className="card h-100">
              <div className="card-body d-flex flex-column" data-bulk-scope="">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    Recent Order
                  </h3>
                  <div className="d-flex flex-wrap flex-lg-nowrap align-items-center gap-2">
                    <div className="header-search min-w-0" role="search">
                      <i data-lucide="search" />
                      {" "}
                      <input
                        type="search"
                        id="orderSearch"
                        name="order-q"
                        placeholder="Search files..."
                        aria-label="Search recent orders"
                      />
                      {" "}
                      <kbd className="d-none d-sm-block">
                        ⌘ F
                      </kbd>
                    </div>
                    <div className="dropdown flex-grow-1 flex-sm-grow-0">
                      <button
                        type="button"
                        className="btn btn-accent w-100 d-inline-flex flex-nowrap align-items-center justify-content-center gap-2 text-nowrap"
                        id="orderExport"
                        data-bs-toggle="dropdown"
                        data-bs-offset="0,8"
                        aria-expanded="false"
                      >
                        <i className="icon-20" data-lucide="download" aria-hidden="true" />
                        Export
                        {" "}
                        <i className="dd-caret icon-18" data-lucide="chevron-down" aria-hidden="true" />
                      </button>
                      {" "}
                      <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="orderExport">
                        <li>
                          <button type="button" className="dropdown-item">
                            Export as CSV
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item">
                            Export as Excel
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item">
                            Export as PDF
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdown flex-grow-1 flex-sm-grow-0">
                      <button
                        type="button"
                        className="btn btn-accent-soft w-100 d-inline-flex flex-nowrap align-items-center justify-content-center gap-2 text-nowrap"
                        id="orderShare"
                        data-bs-toggle="dropdown"
                        data-bs-offset="0,8"
                        aria-expanded="false"
                      >
                        <i className="icon-20" data-lucide="link" aria-hidden="true" />
                        Share
                        {" "}
                        <i className="dd-caret icon-18" data-lucide="chevron-down" aria-hidden="true" />
                      </button>
                      {" "}
                      <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="orderShare">
                        <li>
                          <button type="button" className="dropdown-item">
                            Copy link
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item">
                            Invite by email
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item">
                            Embed report
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Bulk action bar — revealed by the selection module while rows are checked */}
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
                      <i className="icon-18" data-lucide="download" aria-hidden="true" />
                      Export
                    </button>
                    <button type="button" className="btn btn-danger d-inline-flex align-items-center gap-2 text-nowrap">
                      <i className="icon-18" data-lucide="trash-2" aria-hidden="true" />
                      Delete
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
                  <table className="table table-striped table-hover align-middle mb-0">
                    <caption className="visually-hidden">
                      Most recent store orders
                    </caption>
                    <thead>
                      <tr>
                        <th scope="col">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="orderSelectAll"
                            data-bulk-all=""
                            aria-label="Select all rows"
                          />
                        </th>
                        <th scope="col">
                          Product ID
                        </th>
                        <th scope="col">
                          Order By
                        </th>
                        <th scope="col">
                          Time
                        </th>
                        <th scope="col">
                          Product
                        </th>
                        <th scope="col">
                          Payment
                        </th>
                        <th scope="col">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            data-bulk-item=""
                            defaultChecked
                            aria-label="Select order INV-48275910384 for VisionPro VR Headset"
                          />
                        </td>
                        <td>
                          <span className="fs-md fw-semibold text-title text-uppercase">
                            <bdi>
                              INV-48275910384
                            </bdi>
                          </span>
                        </td>
                        <td>
                          <span className="d-inline-flex align-items-center gap-2">
                            <span className="avatar avatar-sm bg-grad-1" aria-hidden="true">
                              SR
                            </span>
                            <span className="fs-md fw-semibold text-title text-capitalize">
                              Jordan Davis
                            </span>
                          </span>
                        </td>
                        <td>
                          <span className="fs-md fw-semibold text-title text-nowrap">
                            <bdi>
                              10:00 AM
                            </bdi>
                          </span>
                        </td>
                        <td>
                          <span className="d-inline-flex align-items-center gap-2">
                            <span className="avatar avatar-sm bg-plain">
                              <img src="/assets/images/order-product-1.jpg" alt="" width="34" height="34" />
                            </span>
                            <span className="fs-md fw-semibold text-title text-capitalize">
                              VisionPro VR Headset
                            </span>
                          </span>
                        </td>
                        <td>
                          <span className="badge-soft tint-success">
                            Paid
                          </span>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-1">
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle"
                              aria-label="Open order INV-48275910384"
                            >
                              <i data-lucide="external-link" />
                            </button>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-outline-soft btn-18 rounded-circle"
                                data-bs-toggle="dropdown"
                                data-dd-fixed=""
                                data-bs-offset="0,8"
                                aria-expanded="false"
                                aria-label="More actions for order INV-48275910384"
                              >
                                <i data-lucide="ellipsis" />
                              </button>
                              {" "}
                              <ul className="dropdown-menu dropdown-menu-end p-2">
                                <li>
                                  <button type="button" className="dropdown-item">
                                    <i data-lucide="eye" />
                                    View details
                                  </button>
                                </li>
                                <li>
                                  <button type="button" className="dropdown-item">
                                    <i data-lucide="download" />
                                    Download invoice
                                  </button>
                                </li>
                                <li>
                                  <hr className="dropdown-divider my-1" />
                                </li>
                                <li>
                                  <button type="button" className="dropdown-item dropdown-item-danger">
                                    <i data-lucide="trash-2" />
                                    Delete
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            data-bulk-item=""
                            aria-label="Select order INV-48275910384 for AeroView Smart Glasses"
                          />
                        </td>
                        <td>
                          <span className="fs-md fw-semibold text-title text-uppercase">
                            <bdi>
                              INV-48275910384
                            </bdi>
                          </span>
                        </td>
                        <td>
                          <span className="d-inline-flex align-items-center gap-2">
                            <span className="avatar avatar-sm bg-grad-2" aria-hidden="true">
                              KS
                            </span>
                            <span className="fs-md fw-semibold text-title text-capitalize">
                              Jordan Davis
                            </span>
                          </span>
                        </td>
                        <td>
                          <span className="fs-md fw-semibold text-title text-nowrap">
                            <bdi>
                              10:00 AM
                            </bdi>
                          </span>
                        </td>
                        <td>
                          <span className="d-inline-flex align-items-center gap-2">
                            <span className="avatar avatar-sm bg-plain">
                              <img src="/assets/images/order-product-2.jpg" alt="" width="34" height="34" />
                            </span>
                            <span className="fs-md fw-semibold text-title text-capitalize">
                              AeroView Smart Glasses
                            </span>
                          </span>
                        </td>
                        <td>
                          <span className="badge-soft tint-warning">
                            COD
                          </span>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-1">
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle"
                              aria-label="Open order for AeroView Smart Glasses"
                            >
                              <i data-lucide="external-link" />
                            </button>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-outline-soft btn-18 rounded-circle"
                                data-bs-toggle="dropdown"
                                data-dd-fixed=""
                                data-bs-offset="0,8"
                                aria-expanded="false"
                                aria-label="More actions for order for AeroView Smart Glasses"
                              >
                                <i data-lucide="ellipsis" />
                              </button>
                              {" "}
                              <ul className="dropdown-menu dropdown-menu-end p-2">
                                <li>
                                  <button type="button" className="dropdown-item">
                                    <i data-lucide="eye" />
                                    View details
                                  </button>
                                </li>
                                <li>
                                  <button type="button" className="dropdown-item">
                                    <i data-lucide="download" />
                                    Download invoice
                                  </button>
                                </li>
                                <li>
                                  <hr className="dropdown-divider my-1" />
                                </li>
                                <li>
                                  <button type="button" className="dropdown-item dropdown-item-danger">
                                    <i data-lucide="trash-2" />
                                    Delete
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            data-bulk-item=""
                            aria-label="Select order INV-48275910384 for SpectraLens 3D Goggles"
                          />
                        </td>
                        <td>
                          <span className="fs-md fw-semibold text-title text-uppercase">
                            <bdi>
                              INV-48275910384
                            </bdi>
                          </span>
                        </td>
                        <td>
                          <span className="d-inline-flex align-items-center gap-2">
                            <span className="avatar avatar-sm bg-grad-3" aria-hidden="true">
                              RS
                            </span>
                            <span className="fs-md fw-semibold text-title text-capitalize">
                              Rajat Singh
                            </span>
                          </span>
                        </td>
                        <td>
                          <span className="fs-md fw-semibold text-title text-nowrap">
                            <bdi>
                              10:00 AM
                            </bdi>
                          </span>
                        </td>
                        <td>
                          <span className="d-inline-flex align-items-center gap-2">
                            <span className="avatar avatar-sm bg-plain">
                              <img src="/assets/images/order-product-3.jpg" alt="" width="34" height="34" />
                            </span>
                            <span className="fs-md fw-semibold text-title text-capitalize">
                              SpectraLens 3D Goggles
                            </span>
                          </span>
                        </td>
                        <td>
                          <span className="badge-soft tint-danger">
                            Failed
                          </span>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-1">
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle"
                              aria-label="Open order for SpectraLens 3D Goggles"
                            >
                              <i data-lucide="external-link" />
                            </button>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-outline-soft btn-18 rounded-circle"
                                data-bs-toggle="dropdown"
                                data-dd-fixed=""
                                data-bs-offset="0,8"
                                aria-expanded="false"
                                aria-label="More actions for order for SpectraLens 3D Goggles"
                              >
                                <i data-lucide="ellipsis" />
                              </button>
                              {" "}
                              <ul className="dropdown-menu dropdown-menu-end p-2">
                                <li>
                                  <button type="button" className="dropdown-item">
                                    <i data-lucide="eye" />
                                    View details
                                  </button>
                                </li>
                                <li>
                                  <button type="button" className="dropdown-item">
                                    <i data-lucide="download" />
                                    Download invoice
                                  </button>
                                </li>
                                <li>
                                  <hr className="dropdown-divider my-1" />
                                </li>
                                <li>
                                  <button type="button" className="dropdown-item dropdown-item-danger">
                                    <i data-lucide="trash-2" />
                                    Delete
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            data-bulk-item=""
                            aria-label="Select order INV-48275910384 for UltraSight AR Visors"
                          />
                        </td>
                        <td>
                          <span className="fs-md fw-semibold text-title text-uppercase">
                            <bdi>
                              INV-48275910384
                            </bdi>
                          </span>
                        </td>
                        <td>
                          <span className="d-inline-flex align-items-center gap-2">
                            <span className="avatar avatar-sm bg-grad-4" aria-hidden="true">
                              MG
                            </span>
                            <span className="fs-md fw-semibold text-title text-capitalize">
                              Manish Gurjar
                            </span>
                          </span>
                        </td>
                        <td>
                          <span className="fs-md fw-semibold text-title text-nowrap">
                            <bdi>
                              10:00 AM
                            </bdi>
                          </span>
                        </td>
                        <td>
                          <span className="d-inline-flex align-items-center gap-2">
                            <span className="avatar avatar-sm bg-plain">
                              <img src="/assets/images/order-product-4.jpg" alt="" width="34" height="34" />
                            </span>
                            <span className="fs-md fw-semibold text-title text-capitalize">
                              UltraSight AR Visors
                            </span>
                          </span>
                        </td>
                        <td>
                          <span className="badge-soft tint-danger">
                            Failed
                          </span>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-1">
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle"
                              aria-label="Open order for UltraSight AR Visors"
                            >
                              <i data-lucide="external-link" />
                            </button>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-outline-soft btn-18 rounded-circle"
                                data-bs-toggle="dropdown"
                                data-dd-fixed=""
                                data-bs-offset="0,8"
                                aria-expanded="false"
                                aria-label="More actions for order for UltraSight AR Visors"
                              >
                                <i data-lucide="ellipsis" />
                              </button>
                              {" "}
                              <ul className="dropdown-menu dropdown-menu-end p-2">
                                <li>
                                  <button type="button" className="dropdown-item">
                                    <i data-lucide="eye" />
                                    View details
                                  </button>
                                </li>
                                <li>
                                  <button type="button" className="dropdown-item">
                                    <i data-lucide="download" />
                                    Download invoice
                                  </button>
                                </li>
                                <li>
                                  <hr className="dropdown-divider my-1" />
                                </li>
                                <li>
                                  <button type="button" className="dropdown-item dropdown-item-danger">
                                    <i data-lucide="trash-2" />
                                    Delete
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            data-bulk-item=""
                            aria-label="Select order INV-48275910384 for FocusWave Eye Gear"
                          />
                        </td>
                        <td>
                          <span className="fs-md fw-semibold text-title text-uppercase">
                            <bdi>
                              INV-48275910384
                            </bdi>
                          </span>
                        </td>
                        <td>
                          <span className="d-inline-flex align-items-center gap-2">
                            <span className="avatar avatar-sm bg-grad-5" aria-hidden="true">
                              PK
                            </span>
                            <span className="fs-md fw-semibold text-title">
                              davis@innovatech.com
                            </span>
                          </span>
                        </td>
                        <td>
                          <span className="fs-md fw-semibold text-title text-nowrap">
                            <bdi>
                              10:00 AM
                            </bdi>
                          </span>
                        </td>
                        <td>
                          <span className="d-inline-flex align-items-center gap-2">
                            <span className="avatar avatar-sm bg-plain">
                              <img src="/assets/images/order-product-5.jpg" alt="" width="34" height="34" />
                            </span>
                            <span className="fs-md fw-semibold text-title text-capitalize">
                              FocusWave Eye Gear
                            </span>
                          </span>
                        </td>
                        <td>
                          <span className="badge-soft tint-success">
                            Paid
                          </span>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-1">
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle"
                              aria-label="Open order for FocusWave Eye Gear"
                            >
                              <i data-lucide="external-link" />
                            </button>
                            <div className="dropdown">
                              <button
                                type="button"
                                className="btn btn-outline-soft btn-18 rounded-circle"
                                data-bs-toggle="dropdown"
                                data-dd-fixed=""
                                data-bs-offset="0,8"
                                aria-expanded="false"
                                aria-label="More actions for order for FocusWave Eye Gear"
                              >
                                <i data-lucide="ellipsis" />
                              </button>
                              {" "}
                              <ul className="dropdown-menu dropdown-menu-end p-2">
                                <li>
                                  <button type="button" className="dropdown-item">
                                    <i data-lucide="eye" />
                                    View details
                                  </button>
                                </li>
                                <li>
                                  <button type="button" className="dropdown-item">
                                    <i data-lucide="download" />
                                    Download invoice
                                  </button>
                                </li>
                                <li>
                                  <hr className="dropdown-divider my-1" />
                                </li>
                                <li>
                                  <button type="button" className="dropdown-item dropdown-item-danger">
                                    <i data-lucide="trash-2" />
                                    Delete
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 pt-3 border-t-soft mt-auto">
                  <span className="fs-md text-muted-2">
                    Showing 1–8 of 8 results
                  </span>
                  <nav aria-label="Recent order pagination">
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
          </div>
        </div>
      </section>
      {/* ===== Recent transactions ===== */}
      <section className="mb-4">
        <h2 className="visually-hidden">
          Recent transactions
        </h2>
        <div className="card">
          <div className="card-body" data-bulk-scope="">
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
              <h3 className="fs-5 fw-bold text-title mb-0">
                Recent Transactions
              </h3>
              <div className="d-flex flex-wrap flex-lg-nowrap align-items-center gap-2">
                <div className="header-search min-w-0" role="search">
                  <i data-lucide="search" />
                  {" "}
                  <input
                    type="search"
                    id="txnSearch"
                    name="txn-q"
                    placeholder="Search files..."
                    aria-label="Search transactions"
                  />
                  {" "}
                  <kbd className="d-none d-sm-block">
                    ⌘ F
                  </kbd>
                </div>
                <div className="dropdown flex-grow-1 flex-sm-grow-0">
                  <button
                    type="button"
                    className="btn btn-accent w-100 d-inline-flex flex-nowrap align-items-center justify-content-center gap-2 text-nowrap"
                    id="txnExport"
                    data-bs-toggle="dropdown"
                    data-bs-offset="0,8"
                    aria-expanded="false"
                  >
                    <i className="icon-20" data-lucide="download" aria-hidden="true" />
                    Export
                    {" "}
                    <i className="dd-caret icon-18" data-lucide="chevron-down" aria-hidden="true" />
                  </button>
                  {" "}
                  <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="txnExport">
                    <li>
                      <button type="button" className="dropdown-item">
                        Export as CSV
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        Export as Excel
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        Export as PDF
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="dropdown flex-grow-1 flex-sm-grow-0">
                  <button
                    type="button"
                    className="btn btn-accent-soft w-100 d-inline-flex flex-nowrap align-items-center justify-content-center gap-2 text-nowrap"
                    id="txnShare"
                    data-bs-toggle="dropdown"
                    data-bs-offset="0,8"
                    aria-expanded="false"
                  >
                    <i className="icon-20" data-lucide="link" aria-hidden="true" />
                    Share
                    {" "}
                    <i className="dd-caret icon-18" data-lucide="chevron-down" aria-hidden="true" />
                  </button>
                  {" "}
                  <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="txnShare">
                    <li>
                      <button type="button" className="dropdown-item">
                        Copy link
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        Invite by email
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        Embed report
                      </button>
                    </li>
                  </ul>
                </div>
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
                  <i className="icon-18" data-lucide="download" aria-hidden="true" />
                  Export
                </button>
                <button type="button" className="btn btn-danger d-inline-flex align-items-center gap-2 text-nowrap">
                  <i className="icon-18" data-lucide="trash-2" aria-hidden="true" />
                  Delete
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
              <table className="table table-striped table-hover align-middle mb-0">
                <caption className="visually-hidden">
                  Most recent store transactions
                </caption>
                <thead>
                  <tr>
                    <th scope="col">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="txnSelectAll"
                        data-bulk-all=""
                        aria-label="Select all rows"
                      />
                    </th>
                    <th scope="col">
                      Invoice Number
                    </th>
                    <th scope="col">
                      Client
                    </th>
                    <th scope="col">
                      Total
                    </th>
                    <th scope="col">
                      Payment Status
                    </th>
                    <th scope="col">
                      Transaction Date
                    </th>
                    <th scope="col">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        data-bulk-item=""
                        defaultChecked
                        aria-label="Select invoice INV-48275910384"
                      />
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title text-uppercase">
                        <bdi>
                          INV-48275910384
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-sm bg-grad-1" aria-hidden="true">
                          SR
                        </span>
                        <span className="d-flex flex-column">
                          <span className="fs-md fw-semibold text-title">
                            Sofia Ramirez
                          </span>
                          <span className="fs-xs text-muted-2">
                            sofia.ramirez@innovatech.com
                          </span>
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-bold text-title">
                        <bdi>
                          $3,750.00
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-success">
                        Completed
                      </span>
                    </td>
                    <td>
                      <span className="fs-md text-muted-2">
                        Sep 28, 2025
                      </span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-1">
                        <button
                          type="button"
                          className="btn btn-outline-soft btn-18 rounded-circle"
                          aria-label="Open invoice INV-48275910384"
                        >
                          <i data-lucide="external-link" />
                        </button>
                        <div className="dropdown">
                          <button
                            type="button"
                            className="btn btn-outline-soft btn-18 rounded-circle"
                            data-bs-toggle="dropdown"
                            data-dd-fixed=""
                            data-bs-offset="0,8"
                            aria-expanded="false"
                            aria-label="More actions for invoice INV-48275910384"
                          >
                            <i data-lucide="ellipsis" />
                          </button>
                          {" "}
                          <ul className="dropdown-menu dropdown-menu-end p-2">
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="eye" />
                                View details
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="download" />
                                Download receipt
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="rotate-ccw" />
                                Refund
                              </button>
                            </li>
                            <li>
                              <hr className="dropdown-divider my-1" />
                            </li>
                            <li>
                              <button type="button" className="dropdown-item dropdown-item-danger">
                                <i data-lucide="trash-2" />
                                Delete
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        data-bulk-item=""
                        aria-label="Select invoice INV-48275910385"
                      />
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title text-uppercase">
                        <bdi>
                          INV-48275910385
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-sm bg-grad-2" aria-hidden="true">
                          KS
                        </span>
                        <span className="d-flex flex-column">
                          <span className="fs-md fw-semibold text-title">
                            Kai Sato
                          </span>
                          <span className="fs-xs text-muted-2">
                            kai.sato@innovatech.com
                          </span>
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-bold text-title">
                        <bdi>
                          $3,750.00
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-warning">
                        Pending
                      </span>
                    </td>
                    <td>
                      <span className="fs-md text-muted-2">
                        Sep 28, 2025
                      </span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-1">
                        <button
                          type="button"
                          className="btn btn-outline-soft btn-18 rounded-circle"
                          aria-label="Open invoice INV-48275910385"
                        >
                          <i data-lucide="external-link" />
                        </button>
                        <div className="dropdown">
                          <button
                            type="button"
                            className="btn btn-outline-soft btn-18 rounded-circle"
                            data-bs-toggle="dropdown"
                            data-dd-fixed=""
                            data-bs-offset="0,8"
                            aria-expanded="false"
                            aria-label="More actions for invoice INV-48275910385"
                          >
                            <i data-lucide="ellipsis" />
                          </button>
                          {" "}
                          <ul className="dropdown-menu dropdown-menu-end p-2">
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="eye" />
                                View details
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="download" />
                                Download receipt
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="rotate-ccw" />
                                Refund
                              </button>
                            </li>
                            <li>
                              <hr className="dropdown-divider my-1" />
                            </li>
                            <li>
                              <button type="button" className="dropdown-item dropdown-item-danger">
                                <i data-lucide="trash-2" />
                                Delete
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        data-bulk-item=""
                        aria-label="Select invoice INV-48275910386"
                      />
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title text-uppercase">
                        <bdi>
                          INV-48275910386
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-sm bg-grad-3" aria-hidden="true">
                          JD
                        </span>
                        <span className="d-flex flex-column">
                          <span className="fs-md fw-semibold text-title">
                            Jordan Davis
                          </span>
                          <span className="fs-xs text-muted-2">
                            jordan.davis@innovatech.com
                          </span>
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-bold text-title">
                        <bdi>
                          $3,750.00
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-danger">
                        Failed
                      </span>
                    </td>
                    <td>
                      <span className="fs-md text-muted-2">
                        Sep 28, 2025
                      </span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-1">
                        <button
                          type="button"
                          className="btn btn-outline-soft btn-18 rounded-circle"
                          aria-label="Open invoice INV-48275910386"
                        >
                          <i data-lucide="external-link" />
                        </button>
                        <div className="dropdown">
                          <button
                            type="button"
                            className="btn btn-outline-soft btn-18 rounded-circle"
                            data-bs-toggle="dropdown"
                            data-dd-fixed=""
                            data-bs-offset="0,8"
                            aria-expanded="false"
                            aria-label="More actions for invoice INV-48275910386"
                          >
                            <i data-lucide="ellipsis" />
                          </button>
                          {" "}
                          <ul className="dropdown-menu dropdown-menu-end p-2">
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="eye" />
                                View details
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="download" />
                                Download receipt
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="rotate-ccw" />
                                Refund
                              </button>
                            </li>
                            <li>
                              <hr className="dropdown-divider my-1" />
                            </li>
                            <li>
                              <button type="button" className="dropdown-item dropdown-item-danger">
                                <i data-lucide="trash-2" />
                                Delete
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        data-bulk-item=""
                        aria-label="Select invoice INV-48275910387"
                      />
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title text-uppercase">
                        <bdi>
                          INV-48275910387
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-sm bg-grad-6" aria-hidden="true">
                          PK
                        </span>
                        <span className="d-flex flex-column">
                          <span className="fs-md fw-semibold text-title">
                            Priya Kapoor
                          </span>
                          <span className="fs-xs text-muted-2">
                            priya.kapoor@techcorp.io
                          </span>
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-bold text-title">
                        <bdi>
                          $3,750.00
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-success">
                        Completed
                      </span>
                    </td>
                    <td>
                      <span className="fs-md text-muted-2">
                        Sep 28, 2025
                      </span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-1">
                        <button
                          type="button"
                          className="btn btn-outline-soft btn-18 rounded-circle"
                          aria-label="Open invoice INV-48275910387"
                        >
                          <i data-lucide="external-link" />
                        </button>
                        <div className="dropdown">
                          <button
                            type="button"
                            className="btn btn-outline-soft btn-18 rounded-circle"
                            data-bs-toggle="dropdown"
                            data-dd-fixed=""
                            data-bs-offset="0,8"
                            aria-expanded="false"
                            aria-label="More actions for invoice INV-48275910387"
                          >
                            <i data-lucide="ellipsis" />
                          </button>
                          {" "}
                          <ul className="dropdown-menu dropdown-menu-end p-2">
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="eye" />
                                View details
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="download" />
                                Download receipt
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="rotate-ccw" />
                                Refund
                              </button>
                            </li>
                            <li>
                              <hr className="dropdown-divider my-1" />
                            </li>
                            <li>
                              <button type="button" className="dropdown-item dropdown-item-danger">
                                <i data-lucide="trash-2" />
                                Delete
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 pt-3 mt-3 border-t-soft">
              <span className="fs-md text-muted-2">
                Showing 1–4 of 8 results
              </span>
              <nav aria-label="Recent transactions pagination">
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
      {/* ===== Recent reviews ===== */}
      <section className="mb-4">
        <h2 className="visually-hidden">
          Recent reviews
        </h2>
        <div className="card">
          <div className="card-body">
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
              <h3 className="fs-5 fw-bold text-title mb-0">
                Recent Review
              </h3>
              <a href="#" className="btn btn-accent btn-sm fw-semibold text-nowrap">
                View All
              </a>
            </div>
            <ul className="list-unstyled row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-5 g-3 mb-0">
              <li className="col">
                <div className="card bg-plain h-100">
                  <div className="card-body d-flex flex-column justify-content-between gap-3 p-4 text-center">
                    <div className="d-flex flex-column align-items-center gap-3">
                      <span className="d-inline-flex align-items-center gap-1" role="img" aria-label="Rated 5 out of 5">
                        <i className="icon-20 icon-fill text-cat-amber" data-lucide="star" aria-hidden="true" />
                        <i className="icon-20 icon-fill text-cat-amber" data-lucide="star" aria-hidden="true" />
                        <i className="icon-20 icon-fill text-cat-amber" data-lucide="star" aria-hidden="true" />
                        <i className="icon-20 icon-fill text-cat-amber" data-lucide="star" aria-hidden="true" />
                        <i className="icon-20 icon-fill text-cat-amber" data-lucide="star" aria-hidden="true" />
                      </span>
                      <blockquote className="fs-6 text-title mb-0">
                        A fantastic experience from start to finish. Highly recommended for anyone looking for quality work!
                      </blockquote>
                    </div>
                    <div className="d-flex flex-column align-items-center gap-3">
                      <div className="d-flex flex-column align-items-center gap-3">
                        <span className="avatar bg-cat-violet" aria-hidden="true">
                          M
                        </span>
                        <span className="d-block">
                          {" "}
                          <span className="d-block fs-6 fw-semibold text-title">
                            Michael Brown
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2">
                            {"Founder, Brown & Co."}
                          </span>
                          {" "}
                        </span>
                      </div>
                      <span className="d-flex flex-column align-items-center gap-2">
                        <span className="fs-xs text-muted-2">
                          Posted on
                          {" "}
                          <time dateTime="2024-01-10">
                            January 10, 2024
                          </time>
                        </span>
                        <img src="/assets/images/logo-google.svg" alt="Google" width="64" height="21" />
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="col">
                <div className="card bg-plain h-100">
                  <div className="card-body d-flex flex-column justify-content-between gap-3 p-4 text-center">
                    <div className="d-flex flex-column align-items-center gap-3">
                      <span className="d-inline-flex align-items-center gap-1" role="img" aria-label="Rated 5 out of 5">
                        <i className="icon-20 icon-fill text-cat-amber" data-lucide="star" aria-hidden="true" />
                        <i className="icon-20 icon-fill text-cat-amber" data-lucide="star" aria-hidden="true" />
                        <i className="icon-20 icon-fill text-cat-amber" data-lucide="star" aria-hidden="true" />
                        <i className="icon-20 icon-fill text-cat-amber" data-lucide="star" aria-hidden="true" />
                        <i className="icon-20 icon-fill text-cat-amber" data-lucide="star" aria-hidden="true" />
                      </span>
                      <blockquote className="fs-6 text-title mb-0">
                        Delivery was quick and the packaging was immaculate. Support answered every question within minutes.
                      </blockquote>
                    </div>
                    <div className="d-flex flex-column align-items-center gap-3">
                      <div className="d-flex flex-column align-items-center gap-3">
                        <span className="avatar bg-cat-violet" aria-hidden="true">
                          S
                        </span>
                        <span className="d-block">
                          {" "}
                          <span className="d-block fs-6 fw-semibold text-title">
                            Sofia Ramirez
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2">
                            Head of Ops, Innovatech
                          </span>
                          {" "}
                        </span>
                      </div>
                      <span className="d-flex flex-column align-items-center gap-2">
                        <span className="fs-xs text-muted-2">
                          Posted on
                          {" "}
                          <time dateTime="2024-01-14">
                            January 14, 2024
                          </time>
                        </span>
                        <img src="/assets/images/logo-google.svg" alt="Google" width="64" height="21" />
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="col">
                <div className="card bg-plain h-100">
                  <div className="card-body d-flex flex-column justify-content-between gap-3 p-4 text-center">
                    <div className="d-flex flex-column align-items-center gap-3">
                      <span className="d-inline-flex align-items-center gap-1" role="img" aria-label="Rated 5 out of 5">
                        <i className="icon-20 icon-fill text-cat-amber" data-lucide="star" aria-hidden="true" />
                        <i className="icon-20 icon-fill text-cat-amber" data-lucide="star" aria-hidden="true" />
                        <i className="icon-20 icon-fill text-cat-amber" data-lucide="star" aria-hidden="true" />
                        <i className="icon-20 icon-fill text-cat-amber" data-lucide="star" aria-hidden="true" />
                        <i className="icon-20 icon-fill text-cat-amber" data-lucide="star" aria-hidden="true" />
                      </span>
                      <blockquote className="fs-6 text-title mb-0">
                        Exactly as described, and the build quality is well beyond what I expected at this price.
                      </blockquote>
                    </div>
                    <div className="d-flex flex-column align-items-center gap-3">
                      <div className="d-flex flex-column align-items-center gap-3">
                        <span className="avatar bg-cat-violet" aria-hidden="true">
                          K
                        </span>
                        <span className="d-block">
                          {" "}
                          <span className="d-block fs-6 fw-semibold text-title">
                            Kai Sato
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2">
                            Product Lead, Northwind
                          </span>
                          {" "}
                        </span>
                      </div>
                      <span className="d-flex flex-column align-items-center gap-2">
                        <span className="fs-xs text-muted-2">
                          Posted on
                          {" "}
                          <time dateTime="2024-01-18">
                            January 18, 2024
                          </time>
                        </span>
                        <img src="/assets/images/logo-google.svg" alt="Google" width="64" height="21" />
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="col">
                <div className="card bg-plain h-100">
                  <div className="card-body d-flex flex-column justify-content-between gap-3 p-4 text-center">
                    <div className="d-flex flex-column align-items-center gap-3">
                      <span className="d-inline-flex align-items-center gap-1" role="img" aria-label="Rated 5 out of 5">
                        <i className="icon-20 icon-fill text-cat-amber" data-lucide="star" aria-hidden="true" />
                        <i className="icon-20 icon-fill text-cat-amber" data-lucide="star" aria-hidden="true" />
                        <i className="icon-20 icon-fill text-cat-amber" data-lucide="star" aria-hidden="true" />
                        <i className="icon-20 icon-fill text-cat-amber" data-lucide="star" aria-hidden="true" />
                        <i className="icon-20 icon-fill text-cat-amber" data-lucide="star" aria-hidden="true" />
                      </span>
                      <blockquote className="fs-6 text-title mb-0">
                        Our second order this quarter. Consistent quality and the returns process is genuinely painless.
                      </blockquote>
                    </div>
                    <div className="d-flex flex-column align-items-center gap-3">
                      <div className="d-flex flex-column align-items-center gap-3">
                        <span className="avatar bg-cat-violet" aria-hidden="true">
                          P
                        </span>
                        <span className="d-block">
                          {" "}
                          <span className="d-block fs-6 fw-semibold text-title">
                            Priya Kapoor
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2">
                            Director, TechCorp
                          </span>
                          {" "}
                        </span>
                      </div>
                      <span className="d-flex flex-column align-items-center gap-2">
                        <span className="fs-xs text-muted-2">
                          Posted on
                          {" "}
                          <time dateTime="2024-01-22">
                            January 22, 2024
                          </time>
                        </span>
                        <img src="/assets/images/logo-google.svg" alt="Google" width="64" height="21" />
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="col">
                <div className="card bg-plain h-100">
                  <div className="card-body d-flex flex-column justify-content-between gap-3 p-4 text-center">
                    <div className="d-flex flex-column align-items-center gap-3">
                      <span className="d-inline-flex align-items-center gap-1" role="img" aria-label="Rated 5 out of 5">
                        <i className="icon-20 icon-fill text-cat-amber" data-lucide="star" aria-hidden="true" />
                        <i className="icon-20 icon-fill text-cat-amber" data-lucide="star" aria-hidden="true" />
                        <i className="icon-20 icon-fill text-cat-amber" data-lucide="star" aria-hidden="true" />
                        <i className="icon-20 icon-fill text-cat-amber" data-lucide="star" aria-hidden="true" />
                        <i className="icon-20 icon-fill text-cat-amber" data-lucide="star" aria-hidden="true" />
                      </span>
                      <blockquote className="fs-6 text-title mb-0">
                        Great value and genuinely helpful staff. The whole process was effortless from order to delivery.
                      </blockquote>
                    </div>
                    <div className="d-flex flex-column align-items-center gap-3">
                      <div className="d-flex flex-column align-items-center gap-3">
                        <span className="avatar bg-cat-violet" aria-hidden="true">
                          J
                        </span>
                        <span className="d-block">
                          {" "}
                          <span className="d-block fs-6 fw-semibold text-title">
                            Jordan Davis
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2">
                            Owner, Davis Supply
                          </span>
                          {" "}
                        </span>
                      </div>
                      <span className="d-flex flex-column align-items-center gap-2">
                        <span className="fs-xs text-muted-2">
                          Posted on
                          {" "}
                          <time dateTime="2024-01-26">
                            January 26, 2024
                          </time>
                        </span>
                        <img src="/assets/images/logo-google.svg" alt="Google" width="64" height="21" />
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* ===== Geographic reach & real-time users ===== */}
      <section className="mb-4" aria-labelledby="geography-title">
        <h2 id="geography-title" className="visually-hidden">
          Geographic reach and real-time users
        </h2>
        <div className="row g-3">
          {/* Geographic analytics */}
          <div className="col-12 col-xxl-6">
            <div className="card bg-glass h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    Geographic Analytics
                  </h3>
                  <div className="d-flex flex-wrap align-items-center gap-2">
                    <button type="button" className="btn btn-accent d-inline-flex align-items-center gap-2 text-nowrap">
                      <i className="icon-20" data-lucide="chart-column" aria-hidden="true" />
                      Revenue
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary d-inline-flex align-items-center gap-2 text-nowrap"
                    >
                      <i className="icon-20" data-lucide="users-round" aria-hidden="true" />
                      Users
                    </button>
                  </div>
                </div>
                <div
                  id="geoAnalyticsMap"
                  className="map-area"
                  role="img"
                  aria-label="World map shaded by share of traffic per country"
                />
                <div className="bg-plain border-theme mt-3 p-3 rounded-3">
                  <h4 className="fs-5 fw-bold text-title mb-3">
                    Top Regions
                  </h4>
                  <ul className="d-flex flex-column gap-3 mb-0">
                    <li className="d-flex flex-wrap align-items-center gap-3">
                      <span className="d-inline-flex align-items-center gap-2 flex-shrink-0">
                        <img src="/assets/images/flag-us.svg" alt="" width="23" height="14" className="flag pe-none" />
                        <span className="fs-6 fw-medium text-body-2">
                          United States
                        </span>
                      </span>
                      <div
                        className="progress progress-lg flex-grow-1"
                        role="progressbar"
                        aria-label="United States share of traffic"
                        aria-valuenow="35"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="progress-bar bg-cat-blue" style={{ width: "35%" }}>
                          35%
                        </div>
                      </div>
                    </li>
                    <li className="d-flex flex-wrap align-items-center gap-3">
                      <span className="d-inline-flex align-items-center gap-2 flex-shrink-0">
                        <img src="/assets/images/flag-ca.svg" alt="" width="23" height="14" className="flag pe-none" />
                        <span className="fs-6 fw-medium text-body-2">
                          Canada
                        </span>
                      </span>
                      <div
                        className="progress progress-lg flex-grow-1"
                        role="progressbar"
                        aria-label="Canada share of traffic"
                        aria-valuenow="26"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="progress-bar bg-cat-blue" style={{ width: "26%" }}>
                          26%
                        </div>
                      </div>
                    </li>
                    <li className="d-flex flex-wrap align-items-center gap-3">
                      <span className="d-inline-flex align-items-center gap-2 flex-shrink-0">
                        <img src="/assets/images/flag-fr.svg" alt="" width="23" height="14" className="flag pe-none" />
                        <span className="fs-6 fw-medium text-body-2">
                          France
                        </span>
                      </span>
                      <div
                        className="progress progress-lg flex-grow-1"
                        role="progressbar"
                        aria-label="France share of traffic"
                        aria-valuenow="18"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="progress-bar bg-cat-blue" style={{ width: "18%" }}>
                          18%
                        </div>
                      </div>
                    </li>
                    <li className="d-flex flex-wrap align-items-center gap-3">
                      <span className="d-inline-flex align-items-center gap-2 flex-shrink-0">
                        <img src="/assets/images/flag-it.svg" alt="" width="23" height="14" className="flag pe-none" />
                        <span className="fs-6 fw-medium text-body-2">
                          Italy
                        </span>
                      </span>
                      <div
                        className="progress progress-lg flex-grow-1"
                        role="progressbar"
                        aria-label="Italy share of traffic"
                        aria-valuenow="14"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="progress-bar bg-cat-blue" style={{ width: "14%" }}>
                          14%
                        </div>
                      </div>
                    </li>
                    <li className="d-flex flex-wrap align-items-center gap-3">
                      <span className="d-inline-flex align-items-center gap-2 flex-shrink-0">
                        <img src="/assets/images/flag-au.svg" alt="" width="23" height="14" className="flag pe-none" />
                        <span className="fs-6 fw-medium text-body-2">
                          Australia
                        </span>
                      </span>
                      <div
                        className="progress progress-lg flex-grow-1"
                        role="progressbar"
                        aria-label="Australia share of traffic"
                        aria-valuenow="10"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="progress-bar bg-cat-blue" style={{ width: "10%" }}>
                          10%
                        </div>
                      </div>
                    </li>
                    <li className="d-flex flex-wrap align-items-center gap-3">
                      <span className="d-inline-flex align-items-center gap-2 flex-shrink-0">
                        <img src="/assets/images/flag-in.svg" alt="" width="23" height="14" className="flag pe-none" />
                        <span className="fs-6 fw-medium text-body-2">
                          India
                        </span>
                      </span>
                      <div
                        className="progress progress-lg flex-grow-1"
                        role="progressbar"
                        aria-label="India share of traffic"
                        aria-valuenow="7"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="progress-bar bg-cat-blue" style={{ width: "7%" }}>
                          7%
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Real-time users */}
          <div className="col-12 col-xxl-6">
            <div className="card bg-glass h-100">
              <div className="card-body d-flex justify-content-between flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    Real-Time Users
                  </h3>
                  <div className="d-flex flex-wrap align-items-center gap-2">
                    <span className="badge-soft tint-success d-inline-flex align-items-center gap-2">
                      {" "}
                      <span className="legend-dot legend-dot-sm bg-cat-emerald" aria-hidden="true" />
                      Live
                      {" "}
                    </span>
                    <button type="button" className="btn btn-accent d-inline-flex align-items-center gap-2 text-nowrap">
                      <i className="icon-20" data-lucide="download" aria-hidden="true" />
                      Report
                    </button>
                  </div>
                </div>
                <div className="text-center my-4">
                  <p className="display-1 fw-bold text-cat-emerald lh-1 mb-2">
                    <bdi>
                      1,370
                    </bdi>
                  </p>
                  <p className="fs-4 text-muted-2 mb-0">
                    Active Users Last 48 Hours
                  </p>
                </div>
                <div id="realTimeUsersChart" className="chart-area" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ========== FOOTER ========== */}
    </AppShell>
  );
}

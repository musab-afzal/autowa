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
      <section className="card p-4 mb-4">
        {/* ===== Welcome & finance KPIs ===== */}
        <div className="mb-4">
          <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
            <div className="min-w-0">
              <h2 id="finance-welcome-title" className="fs-2 fw-bold text-title mb-1">
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
              <div className="dropdown flex-grow-1 flex-sm-grow-0">
                <button
                  type="button"
                  className="btn btn-accent w-100 d-inline-flex flex-nowrap align-items-center justify-content-center gap-2 text-nowrap"
                  id="finExport"
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
                <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="finExport">
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
                  id="finShare"
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
                <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="finShare">
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
                      Schedule report
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <ul className="list-unstyled row row-cols-1 row-cols-sm-2 row-cols-xl-4 g-3 mb-0">
            <li className="col">
              <div className="card h-100 border-2 border-plain shadow-sm text-cat-blue bg-wash-current">
                <div className="card-body d-flex flex-column gap-3">
                  <div className="d-flex align-items-start justify-content-between gap-3">
                    <div className="min-w-0">
                      <h3 className="fs-5 fw-semibold text-body-2 text-truncate mb-2">
                        Total Balance
                      </h3>
                      <p className="fs-1 fw-bold text-title lh-1 mb-0">
                        <bdi>
                          $2.44M
                        </bdi>
                      </p>
                    </div>
                    <span className="icon-box bg-cat-blue text-white rounded-circle" aria-hidden="true">
                      <i data-lucide="wallet" />
                    </span>
                  </div>
                  <div className="d-flex align-items-end justify-content-between gap-2 mt-auto">
                    <div className="d-inline-flex align-items-center gap-2 min-w-0 p-1 pe-2 bg-plain rounded-pill">
                      <span className="badge-soft tint-success d-inline-flex flex-shrink-0 align-items-center gap-1 px-2 py-1 fs-xs">
                        {" "}
                        <i className="icon-12" data-lucide="trending-up" aria-hidden="true" />
                        <span dir="ltr">
                          +10%
                        </span>
                        {" "}
                      </span>
                      <span className="fs-xs fw-medium text-body-2 text-truncate">
                        vs last month
                      </span>
                    </div>
                    <div id="finBalanceSpark" className="chart-inline" />
                  </div>
                </div>
              </div>
            </li>
            <li className="col">
              <div className="card h-100 border-2 border-plain shadow-sm text-cat-emerald bg-wash-current">
                <div className="card-body d-flex flex-column gap-3">
                  <div className="d-flex align-items-start justify-content-between gap-3">
                    <div className="min-w-0">
                      <h3 className="fs-5 fw-semibold text-body-2 text-truncate mb-2">
                        Monthly Revenue
                      </h3>
                      <p className="fs-1 fw-bold text-title lh-1 mb-0">
                        <bdi>
                          $521K
                        </bdi>
                      </p>
                    </div>
                    <span className="icon-box bg-cat-emerald text-white rounded-circle" aria-hidden="true">
                      <i data-lucide="trending-up" />
                    </span>
                  </div>
                  <div className="d-flex align-items-end justify-content-between gap-2 mt-auto">
                    <div className="d-inline-flex align-items-center gap-2 min-w-0 p-1 pe-2 bg-plain rounded-pill">
                      <span className="badge-soft tint-success d-inline-flex flex-shrink-0 align-items-center gap-1 px-2 py-1 fs-xs">
                        {" "}
                        <i className="icon-12" data-lucide="trending-up" aria-hidden="true" />
                        <span dir="ltr">
                          +10%
                        </span>
                        {" "}
                      </span>
                      <span className="fs-xs fw-medium text-body-2 text-truncate">
                        vs last month
                      </span>
                    </div>
                    <div id="finRevenueSpark" className="chart-inline" />
                  </div>
                </div>
              </div>
            </li>
            <li className="col">
              <div className="card h-100 border-2 border-plain shadow-sm text-cat-magenta bg-wash-current">
                <div className="card-body d-flex flex-column gap-3">
                  <div className="d-flex align-items-start justify-content-between gap-3">
                    <div className="min-w-0">
                      <h3 className="fs-5 fw-semibold text-body-2 text-truncate mb-2">
                        Net Profit
                      </h3>
                      <p className="fs-1 fw-bold text-title lh-1 mb-0">
                        <bdi>
                          $187K
                        </bdi>
                      </p>
                    </div>
                    <span className="icon-box bg-cat-magenta text-white rounded-circle" aria-hidden="true">
                      <i data-lucide="arrow-up-right" />
                    </span>
                  </div>
                  <div className="d-flex align-items-end justify-content-between gap-2 mt-auto">
                    <div className="d-inline-flex align-items-center gap-2 min-w-0 p-1 pe-2 bg-plain rounded-pill">
                      <span className="badge-soft tint-success d-inline-flex flex-shrink-0 align-items-center gap-1 px-2 py-1 fs-xs">
                        {" "}
                        <i className="icon-12" data-lucide="trending-up" aria-hidden="true" />
                        <span dir="ltr">
                          +10%
                        </span>
                        {" "}
                      </span>
                      <span className="fs-xs fw-medium text-body-2 text-truncate">
                        vs last month
                      </span>
                    </div>
                    <div id="finProfitSpark" className="chart-inline" />
                  </div>
                </div>
              </div>
            </li>
            <li className="col">
              <div className="card h-100 border-2 border-plain shadow-sm text-cat-red bg-wash-current">
                <div className="card-body d-flex flex-column gap-3">
                  <div className="d-flex align-items-start justify-content-between gap-3">
                    <div className="min-w-0">
                      <h3 className="fs-5 fw-semibold text-body-2 text-truncate mb-2">
                        Total Expenses
                      </h3>
                      <p className="fs-1 fw-bold text-title lh-1 mb-0">
                        <bdi>
                          $334K
                        </bdi>
                      </p>
                    </div>
                    <span className="icon-box bg-cat-red text-white rounded-circle" aria-hidden="true">
                      <i data-lucide="trending-down" />
                    </span>
                  </div>
                  <div className="d-flex align-items-end justify-content-between gap-2 mt-auto">
                    <div className="d-inline-flex align-items-center gap-2 min-w-0 p-1 pe-2 bg-plain rounded-pill">
                      <span className="badge-soft tint-danger d-inline-flex flex-shrink-0 align-items-center gap-1 px-2 py-1 fs-xs">
                        {" "}
                        <i className="icon-12" data-lucide="trending-up" aria-hidden="true" />
                        <span dir="ltr">
                          +10%
                        </span>
                        {" "}
                      </span>
                      <span className="fs-xs fw-medium text-body-2 text-truncate">
                        vs last month
                      </span>
                    </div>
                    <div id="finExpensesSpark" className="chart-inline" />
                  </div>
                </div>
              </div>
            </li>
            <li className="col">
              <div className="card h-100 border-2 border-plain shadow-sm text-cat-cyan bg-wash-current">
                <div className="card-body d-flex flex-column gap-3">
                  <div className="d-flex align-items-start justify-content-between gap-3">
                    <div className="min-w-0">
                      <h3 className="fs-5 fw-semibold text-body-2 text-truncate mb-2">
                        Cash Flow
                      </h3>
                      <p className="fs-1 fw-bold text-title lh-1 mb-0">
                        <bdi>
                          $892K
                        </bdi>
                      </p>
                    </div>
                    <span className="icon-box bg-cat-cyan text-white rounded-circle" aria-hidden="true">
                      <i data-lucide="activity" />
                    </span>
                  </div>
                  <div className="d-flex align-items-end justify-content-between gap-2 mt-auto">
                    <div className="d-inline-flex align-items-center gap-2 min-w-0 p-1 pe-2 bg-plain rounded-pill">
                      <span className="badge-soft tint-success d-inline-flex flex-shrink-0 align-items-center gap-1 px-2 py-1 fs-xs">
                        {" "}
                        <i className="icon-12" data-lucide="trending-up" aria-hidden="true" />
                        <span dir="ltr">
                          +10%
                        </span>
                        {" "}
                      </span>
                      <span className="fs-xs fw-medium text-body-2 text-truncate">
                        vs last month
                      </span>
                    </div>
                    <div id="finCashFlowSpark" className="chart-inline" />
                  </div>
                </div>
              </div>
            </li>
            <li className="col">
              <div className="card h-100 border-2 border-plain shadow-sm text-cat-orange bg-wash-current">
                <div className="card-body d-flex flex-column gap-3">
                  <div className="d-flex align-items-start justify-content-between gap-3">
                    <div className="min-w-0">
                      <h3 className="fs-5 fw-semibold text-body-2 text-truncate mb-2">
                        Profit Margin
                      </h3>
                      <p className="fs-1 fw-bold text-title lh-1 mb-0">
                        <bdi>
                          35.9%
                        </bdi>
                      </p>
                    </div>
                    <span className="icon-box bg-cat-orange text-white rounded-circle" aria-hidden="true">
                      <i data-lucide="pie-chart" />
                    </span>
                  </div>
                  <div className="d-flex align-items-end justify-content-between gap-2 mt-auto">
                    <div className="d-inline-flex align-items-center gap-2 min-w-0 p-1 pe-2 bg-plain rounded-pill">
                      <span className="badge-soft tint-success d-inline-flex flex-shrink-0 align-items-center gap-1 px-2 py-1 fs-xs">
                        {" "}
                        <i className="icon-12" data-lucide="trending-up" aria-hidden="true" />
                        <span dir="ltr">
                          +10%
                        </span>
                        {" "}
                      </span>
                      <span className="fs-xs fw-medium text-body-2 text-truncate">
                        vs last month
                      </span>
                    </div>
                    <div id="finMarginSpark" className="chart-inline" />
                  </div>
                </div>
              </div>
            </li>
            <li className="col">
              <div className="card h-100 border-2 border-plain shadow-sm text-cat-violet bg-wash-current">
                <div className="card-body d-flex flex-column gap-3">
                  <div className="d-flex align-items-start justify-content-between gap-3">
                    <div className="min-w-0">
                      <h3 className="fs-5 fw-semibold text-body-2 text-truncate mb-2">
                        ROI
                      </h3>
                      <p className="fs-1 fw-bold text-title lh-1 mb-0">
                        <bdi>
                          24.8%
                        </bdi>
                      </p>
                    </div>
                    <span className="icon-box bg-cat-violet text-white rounded-circle" aria-hidden="true">
                      <i data-lucide="star" />
                    </span>
                  </div>
                  <div className="d-flex align-items-end justify-content-between gap-2 mt-auto">
                    <div className="d-inline-flex align-items-center gap-2 min-w-0 p-1 pe-2 bg-plain rounded-pill">
                      <span className="badge-soft tint-success d-inline-flex flex-shrink-0 align-items-center gap-1 px-2 py-1 fs-xs">
                        {" "}
                        <i className="icon-12" data-lucide="trending-up" aria-hidden="true" />
                        <span dir="ltr">
                          +10%
                        </span>
                        {" "}
                      </span>
                      <span className="fs-xs fw-medium text-body-2 text-truncate">
                        vs last month
                      </span>
                    </div>
                    <div id="finRoiSpark" className="chart-inline" />
                  </div>
                </div>
              </div>
            </li>
            <li className="col">
              <div className="card h-100 border-2 border-plain shadow-sm text-cat-amber bg-wash-current">
                <div className="card-body d-flex flex-column gap-3">
                  <div className="d-flex align-items-start justify-content-between gap-3">
                    <div className="min-w-0">
                      <h3 className="fs-5 fw-semibold text-body-2 text-truncate mb-2">
                        Investment Growth
                      </h3>
                      <p className="fs-1 fw-bold text-title lh-1 mb-0">
                        <bdi>
                          $2.84M
                        </bdi>
                      </p>
                    </div>
                    <span className="icon-box bg-cat-amber text-white rounded-circle" aria-hidden="true">
                      <i data-lucide="briefcase" />
                    </span>
                  </div>
                  <div className="d-flex align-items-end justify-content-between gap-2 mt-auto">
                    <div className="d-inline-flex align-items-center gap-2 min-w-0 p-1 pe-2 bg-plain rounded-pill">
                      <span className="badge-soft tint-success d-inline-flex flex-shrink-0 align-items-center gap-1 px-2 py-1 fs-xs">
                        {" "}
                        <i className="icon-12" data-lucide="trending-up" aria-hidden="true" />
                        <span dir="ltr">
                          +10%
                        </span>
                        {" "}
                      </span>
                      <span className="fs-xs fw-medium text-body-2 text-truncate">
                        vs last month
                      </span>
                    </div>
                    <div id="finInvestmentSpark" className="chart-inline" />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/* ===== Wallet balance & linked bank accounts ===== */}
        <div className="row g-4 mb-4">
          <div className="col-12 col-xxl-4">
            <section className="h-100 d-flex flex-column" aria-labelledby="wallet-balance-title">
              <div className="on-dark bg-grad-slate rounded-4 p-4 mb-4 flex-grow-1 d-flex flex-column justify-content-between">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                  <h2 id="wallet-balance-title" className="fs-4 fw-bold text-title mb-0">
                    Wallet Balance
                  </h2>
                  <span className="d-inline-flex align-items-center gap-2 min-w-0 p-1 pe-2 bg-muted rounded-pill">
                    <span className="badge-soft tint-success d-inline-flex flex-shrink-0 align-items-center gap-1 px-2 py-1 fs-md">
                      {" "}
                      <i className="icon-14" data-lucide="trending-up" aria-hidden="true" />
                      <span dir="ltr">
                        +10%
                      </span>
                      {" "}
                    </span>
                    <span className="fs-md fw-medium text-title text-truncate">
                      Than last month
                    </span>
                  </span>
                </div>
                <p className="display-3 fw-bold text-title lh-1 mt-3 mb-0">
                  <bdi>
                    $47,392
                  </bdi>
                </p>
              </div>
              <ul className="list-unstyled row row-cols-2 row-cols-sm-4 g-3 mb-0">
                <li className="col">
                  <button
                    type="button"
                    className="on-dark bg-cat-blue border-0 rounded-4 w-100 h-100 d-flex flex-column align-items-center justify-content-center gap-2 px-2 py-3"
                  >
                    <span className="icon-box icon-24 bg-muted text-white rounded-circle" aria-hidden="true">
                      <i data-lucide="circle-plus" />
                    </span>
                    <span className="fs-md fw-medium text-title text-nowrap">
                      Top Up
                    </span>
                  </button>
                </li>
                <li className="col">
                  <button
                    type="button"
                    className="on-dark bg-cat-orange border-0 rounded-4 w-100 h-100 d-flex flex-column align-items-center justify-content-center gap-2 px-2 py-3"
                  >
                    <span className="icon-box icon-24 bg-muted text-white rounded-circle" aria-hidden="true">
                      <i data-lucide="arrow-right-left" />
                    </span>
                    <span className="fs-md fw-medium text-title text-nowrap">
                      Transfer
                    </span>
                  </button>
                </li>
                <li className="col">
                  <button
                    type="button"
                    className="on-dark bg-cat-violet border-0 rounded-4 w-100 h-100 d-flex flex-column align-items-center justify-content-center gap-2 px-2 py-3"
                  >
                    <span className="icon-box icon-24 bg-muted text-white rounded-circle" aria-hidden="true">
                      <i data-lucide="hand-coins" />
                    </span>
                    <span className="fs-md fw-medium text-title text-nowrap">
                      Request
                    </span>
                  </button>
                </li>
                <li className="col">
                  <button
                    type="button"
                    className="on-dark bg-cat-emerald border-0 rounded-4 w-100 h-100 d-flex flex-column align-items-center justify-content-center gap-2 px-2 py-3"
                  >
                    <span className="icon-box icon-24 bg-muted text-white rounded-circle" aria-hidden="true">
                      <i data-lucide="gallery-horizontal-end" />
                    </span>
                    <span className="fs-md fw-medium text-title text-nowrap">
                      History
                    </span>
                  </button>
                </li>
              </ul>
            </section>
          </div>
          <div className="col-12 col-xxl-8">
            <section className="h-100 d-flex flex-column" aria-labelledby="bank-accounts-title">
              <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
                <h2 id="bank-accounts-title" className="fs-4 fw-bold text-title mb-0">
                  {"Bank Accounts & Wallets"}
                </h2>
                <button type="button" className="btn btn-accent btn-sm text-nowrap">
                  View All
                </button>
              </div>
              <div className="position-relative flex-grow-1" data-scroll-rail="">
                <ul className="scroll-row list-unstyled d-flex align-items-stretch gap-3 h-100 mb-0 pb-1">
                  <li className="scroll-col scroll-col-lg flex-grow-0">
                    <div className="on-dark bg-grad-indigo rounded-5 overflow-hidden h-100 d-flex flex-column">
                      <div className="d-flex align-items-start justify-content-between gap-3 p-4 pb-0">
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md text-body-2">
                            Business Checking
                          </span>
                          {" "}
                          <span className="d-block fs-5 fw-semibold text-title text-truncate mt-1">
                            State Bank Of India
                          </span>
                          {" "}
                        </span>
                        <img
                          src="/assets/images/bank-sbi.svg"
                          alt=""
                          width="57"
                          height="57"
                          className="brand-logo brand-logo-lg flex-shrink-0"
                        />
                      </div>
                      <div className="px-4 pt-4 pb-3">
                        <p className="display-6 fw-bold text-title lh-1 mb-1">
                          <bdi>
                            $1,284,500
                          </bdi>
                        </p>
                        <span className="fs-6 text-body-2">
                          Available Balance
                        </span>
                      </div>
                      <p className="fs-4 fw-bold text-title bg-sheen-down mt-auto mb-0 px-4 py-3">
                        <bdi>
                          3778 5858 5855 1234
                        </bdi>
                      </p>
                    </div>
                  </li>
                  <li className="scroll-col scroll-col-lg flex-grow-0">
                    <div className="on-dark bg-grad-crimson rounded-5 overflow-hidden h-100 d-flex flex-column">
                      <div className="d-flex align-items-start justify-content-between gap-3 p-4 pb-0">
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md text-body-2">
                            Business Checking
                          </span>
                          {" "}
                          <span className="d-block fs-5 fw-semibold text-title text-truncate mt-1">
                            HDFC Bank
                          </span>
                          {" "}
                        </span>
                        <img
                          src="/assets/images/bank-hdfc.svg"
                          alt=""
                          width="48"
                          height="48"
                          className="brand-logo brand-logo-lg flex-shrink-0"
                        />
                      </div>
                      <div className="px-4 pt-4 pb-3">
                        <p className="display-6 fw-bold text-title lh-1 mb-1">
                          <bdi>
                            $1,284,500
                          </bdi>
                        </p>
                        <span className="fs-6 text-body-2">
                          Available Balance
                        </span>
                      </div>
                      <p className="fs-4 fw-bold text-title bg-sheen-down mt-auto mb-0 px-4 py-3">
                        <bdi>
                          3778 5858 5855 1234
                        </bdi>
                      </p>
                    </div>
                  </li>
                  <li className="scroll-col scroll-col-lg flex-grow-0">
                    <div className="on-dark bg-grad-orchid rounded-5 overflow-hidden h-100 d-flex flex-column">
                      <div className="d-flex align-items-start justify-content-between gap-3 p-4 pb-0">
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md text-body-2">
                            Business Checking
                          </span>
                          {" "}
                          <span className="d-block fs-5 fw-semibold text-title text-truncate mt-1">
                            State Bank Of India
                          </span>
                          {" "}
                        </span>
                        <img
                          src="/assets/images/bank-sbi.svg"
                          alt=""
                          width="57"
                          height="57"
                          className="brand-logo brand-logo-lg flex-shrink-0"
                        />
                      </div>
                      <div className="px-4 pt-4 pb-3">
                        <p className="display-6 fw-bold text-title lh-1 mb-1">
                          <bdi>
                            $1,284,500
                          </bdi>
                        </p>
                        <span className="fs-6 text-body-2">
                          Available Balance
                        </span>
                      </div>
                      <p className="fs-4 fw-bold text-title bg-sheen-down mt-auto mb-0 px-4 py-3">
                        <bdi>
                          3778 5858 5855 1234
                        </bdi>
                      </p>
                    </div>
                  </li>
                </ul>
                {" "}
                <button
                  type="button"
                  data-scroll-nav="prev"
                  className="scroll-nav btn btn-primary btn-18 rounded-circle position-absolute top-50 start-0 translate-middle-y z-2"
                  aria-label="Previous accounts"
                >
                  <i className="flip-rtl" data-lucide="arrow-left" />
                </button>
                {" "}
                <button
                  type="button"
                  data-scroll-nav="next"
                  className="scroll-nav btn btn-primary btn-18 rounded-circle position-absolute top-50 end-0 translate-middle-y z-2"
                  aria-label="Next accounts"
                >
                  <i className="flip-rtl" data-lucide="arrow-right" />
                </button>
              </div>
            </section>
          </div>
        </div>
      </section>
      {/* ===== Revenue performance & AI assistant ===== */}
      <section className="mb-4">
        <h2 className="visually-hidden">
          Revenue performance and AI assistant
        </h2>
        <div className="row g-3">
          <div className="col-12 col-xxl-8">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    Revenue vs Expenses
                  </h3>
                  <div
                    className="nav nav-pills seg-toggle flex-nowrap gap-1 p-1 rounded-pill bg-soft"
                    role="group"
                    aria-label="Revenue vs expenses time range"
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
                <div id="finRevenueExpensesChart" className="chart-area flex-grow-1" />
                <ul className="d-flex flex-wrap align-items-center gap-3 fs-md text-body-2 mt-3 mb-0">
                  <li className="d-inline-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-emerald" />
                    Revenue
                  </li>
                  <li className="d-inline-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-blue" />
                    Expenses
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
      {/* ===== Financial overview, activity & payment mix ===== */}
      <section className="mb-4">
        <h2 className="visually-hidden">
          Financial overview, activity feed and payment methods
        </h2>
        <div className="row g-3">
          <div className="col-12 col-xl-6 col-xxl-3">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <h3 className="fs-5 fw-bold text-title mb-3">
                  Financial Overview
                </h3>
                <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                  <li className="bg-plain border-theme d-flex flex-wrap align-items-center justify-content-between gap-2 p-2 rounded-3">
                    <span className="d-inline-flex align-items-center gap-2 min-w-0">
                      <span className="feed-icon tint-violet" aria-hidden="true">
                        <i data-lucide="trending-up" />
                      </span>
                      <span className="fs-md fw-semibold text-title text-truncate">
                        Total Revenue
                      </span>
                    </span>
                    <span className="d-inline-flex align-items-baseline gap-2 flex-shrink-0">
                      <span className="fs-md text-body-2">
                        <bdi>
                          $1.24M
                        </bdi>
                      </span>
                      <span className="fs-5 fw-bold text-success">
                        <bdi>
                          +12.4%
                        </bdi>
                      </span>
                    </span>
                  </li>
                  <li className="bg-plain border-theme d-flex flex-wrap align-items-center justify-content-between gap-2 p-2 rounded-3">
                    <span className="d-inline-flex align-items-center gap-2 min-w-0">
                      <span className="feed-icon tint-amber" aria-hidden="true">
                        <i data-lucide="wallet" />
                      </span>
                      <span className="fs-md fw-semibold text-title text-truncate">
                        Net Profit
                      </span>
                    </span>
                    <span className="d-inline-flex align-items-baseline gap-2 flex-shrink-0">
                      <span className="fs-md text-body-2">
                        <bdi>
                          $420k
                        </bdi>
                      </span>
                      <span className="fs-5 fw-bold text-success">
                        <bdi>
                          +8.1%
                        </bdi>
                      </span>
                    </span>
                  </li>
                  <li className="bg-plain border-theme d-flex flex-wrap align-items-center justify-content-between gap-2 p-2 rounded-3">
                    <span className="d-inline-flex align-items-center gap-2 min-w-0">
                      <span className="feed-icon tint-blue" aria-hidden="true">
                        <i data-lucide="credit-card" />
                      </span>
                      <span className="fs-md fw-semibold text-title text-truncate">
                        Expenses
                      </span>
                    </span>
                    <span className="d-inline-flex align-items-baseline gap-2 flex-shrink-0">
                      <span className="fs-md text-body-2">
                        <bdi>
                          $810k
                        </bdi>
                      </span>
                      <span className="fs-5 fw-bold text-danger">
                        <bdi>
                          +4.2%
                        </bdi>
                      </span>
                    </span>
                  </li>
                  <li className="bg-plain border-theme d-flex flex-wrap align-items-center justify-content-between gap-2 p-2 rounded-3">
                    <span className="d-inline-flex align-items-center gap-2 min-w-0">
                      <span className="feed-icon tint-emerald" aria-hidden="true">
                        <i data-lucide="file-check" />
                      </span>
                      <span className="fs-md fw-semibold text-title text-truncate">
                        Invoices Paid
                      </span>
                    </span>
                    <span className="d-inline-flex align-items-baseline gap-2 flex-shrink-0">
                      <span className="fs-md text-body-2">
                        <bdi>
                          1,284
                        </bdi>
                      </span>
                      <span className="fs-5 fw-bold text-success">
                        <bdi>
                          98.2%
                        </bdi>
                      </span>
                    </span>
                  </li>
                  <li className="bg-plain border-theme d-flex flex-wrap align-items-center justify-content-between gap-2 p-2 rounded-3">
                    <span className="d-inline-flex align-items-center gap-2 min-w-0">
                      <span className="feed-icon tint-rose" aria-hidden="true">
                        <i data-lucide="hourglass" />
                      </span>
                      <span className="fs-md fw-semibold text-title text-truncate">
                        Pending Payments
                      </span>
                    </span>
                    <span className="d-inline-flex align-items-baseline gap-2 flex-shrink-0">
                      <span className="fs-md text-body-2">
                        <bdi>
                          28
                        </bdi>
                      </span>
                      <span className="fs-5 fw-bold text-danger">
                        <bdi>
                          +2
                        </bdi>
                      </span>
                    </span>
                  </li>
                  <li className="bg-plain border-theme d-flex flex-wrap align-items-center justify-content-between gap-2 p-2 rounded-3">
                    <span className="d-inline-flex align-items-center gap-2 min-w-0">
                      <span className="feed-icon tint-blue" aria-hidden="true">
                        <i data-lucide="percent" />
                      </span>
                      <span className="fs-md fw-semibold text-title text-truncate">
                        Tax Deductions
                      </span>
                    </span>
                    <span className="d-inline-flex align-items-baseline gap-2 flex-shrink-0">
                      <span className="fs-md text-body-2">
                        <bdi>
                          $92k
                        </bdi>
                      </span>
                      <span className="fs-5 fw-bold text-danger">
                        <bdi>
                          +1.1%
                        </bdi>
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-6 col-xxl-3">
            <div className="card h-100">
              <div className="card-body">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    Active Feed
                  </h3>
                  <a href="#" className="btn btn-accent btn-sm rounded-pill">
                    View All
                  </a>
                </div>
                <ul className="list-unstyled mb-0">
                  <li className="d-flex align-items-center gap-3 py-3">
                    <span className="feed-icon tint-violet" aria-hidden="true">
                      <i data-lucide="user-round-plus" />
                    </span>
                    <span className="flex-grow-1 min-w-0 fs-md fw-medium text-title">
                      Robert Fox created a new lead
                    </span>
                    <span className="fs-xs text-muted-2 text-nowrap flex-shrink-0">
                      10:30 AM
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3 py-3 border-t-soft">
                    <span className="feed-icon tint-emerald" aria-hidden="true">
                      <i data-lucide="briefcase-business" />
                    </span>
                    <span className="flex-grow-1 min-w-0 fs-md fw-medium text-title">
                      Emma Johnson scheduled a product demo
                    </span>
                    <span className="fs-xs text-muted-2 text-nowrap flex-shrink-0">
                      09:45 PM
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3 py-3 border-t-soft">
                    <span className="feed-icon tint-info" aria-hidden="true">
                      <i data-lucide="credit-card" />
                    </span>
                    <span className="flex-grow-1 min-w-0 fs-md fw-medium text-title">
                      Payment received
                    </span>
                    <span className="fs-xs text-muted-2 text-nowrap flex-shrink-0">
                      10:30 AM
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3 py-3 border-t-soft">
                    <span className="feed-icon tint-amber" aria-hidden="true">
                      <i data-lucide="star" />
                    </span>
                    <span className="flex-grow-1 min-w-0 fs-md fw-medium text-title">
                      Proposal sent to PixelEdge Co.
                    </span>
                    <span className="fs-xs text-muted-2 text-nowrap flex-shrink-0">
                      Yesterday
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3 py-3 border-t-soft">
                    <span className="feed-icon bg-soft text-body-2" aria-hidden="true">
                      <i data-lucide="settings" />
                    </span>
                    <span className="flex-grow-1 min-w-0 fs-md fw-medium text-title">
                      System Update
                    </span>
                    <span className="fs-xs text-muted-2 text-nowrap flex-shrink-0">
                      May 10, 2026
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3 py-3 border-t-soft">
                    <span className="feed-icon tint-magenta" aria-hidden="true">
                      <i data-lucide="user-round-plus" />
                    </span>
                    <span className="flex-grow-1 min-w-0 fs-md fw-medium text-title">
                      New Registration
                    </span>
                    <span className="fs-xs text-muted-2 text-nowrap flex-shrink-0">
                      Yesterday
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-xxl-6">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    Payment Method
                  </h3>
                  <a href="#" className="btn btn-accent btn-sm rounded-pill">
                    View All
                  </a>
                </div>
                <ul className="list-unstyled row row-cols-1 row-cols-sm-2 g-3 mb-0">
                  <li className="col">
                    <div className="bg-plain border-theme d-flex flex-wrap align-items-center justify-content-between gap-2 h-100 p-2 rounded-3">
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
                    </div>
                  </li>
                  <li className="col">
                    <div className="bg-plain border-theme d-flex flex-wrap align-items-center justify-content-between gap-2 h-100 p-2 rounded-3">
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
                          15%
                        </bdi>
                      </span>
                    </div>
                  </li>
                  <li className="col">
                    <div className="bg-plain border-theme d-flex flex-wrap align-items-center justify-content-between gap-2 h-100 p-2 rounded-3">
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
                    </div>
                  </li>
                  <li className="col">
                    <div className="bg-plain border-theme d-flex flex-wrap align-items-center justify-content-between gap-2 h-100 p-2 rounded-3">
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
                          10%
                        </bdi>
                      </span>
                    </div>
                  </li>
                </ul>
                <div className="row align-items-center g-3 mt-0 flex-grow-1">
                  <div className="col-12 col-md-7">
                    <div className="position-relative">
                      <div id="finPaymentMethodChart" className="chart-area" />
                      <p className="chart-center fs-1 fw-bold text-title mb-0">
                        <bdi>
                          88%
                        </bdi>
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-md-5">
                    <p className="fs-3 text-body-2 mb-2">
                      Total Payment
                    </p>
                    <p className="display-5 fw-bold text-title lh-1 mb-3">
                      <bdi>
                        $248,420
                      </bdi>
                    </p>
                    <span className="d-inline-flex align-items-center gap-2 min-w-0 p-1 pe-2 bg-plain rounded-pill">
                      <span className="badge-soft tint-success d-inline-flex flex-shrink-0 align-items-center gap-1 px-2 py-1 fs-xs">
                        {" "}
                        <i className="icon-12" data-lucide="trending-up" aria-hidden="true" />
                        <span dir="ltr">
                          +10%
                        </span>
                        {" "}
                      </span>
                      <span className="fs-xs fw-medium text-body-2 text-truncate">
                        vs last month
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Budget allocation & profit margins ===== */}
      <section className="mb-4">
        <h2 className="visually-hidden">
          Budget allocation and profit margins
        </h2>
        <div className="row g-3">
          <div className="col-12 col-xxl-6">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    Budget Allocation
                  </h3>
                  <a href="#" className="btn btn-accent btn-sm rounded-pill">
                    View All
                  </a>
                </div>
                <ul className="list-unstyled row row-cols-1 row-cols-sm-3 g-3 mb-4">
                  <li className="col">
                    <div className="on-dark bg-grad-slate rounded-4 h-100 p-3">
                      <span className="d-block fs-6 fw-medium text-title">
                        Total Budget
                      </span>
                      {" "}
                      <span className="d-block fs-3 fw-bold text-title lh-1 my-1">
                        <bdi>
                          $880K
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-md text-body-2">
                        <bdi>
                          6
                        </bdi>
                        {" "}
                        departments
                      </span>
                    </div>
                  </li>
                  <li className="col">
                    <div className="on-dark bg-grad-azure rounded-4 h-100 p-3">
                      <span className="d-block fs-6 fw-medium text-title">
                        Total Spent
                      </span>
                      {" "}
                      <span className="d-block fs-3 fw-bold text-title lh-1 my-1">
                        <bdi>
                          $649K
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-md text-body-2">
                        <bdi>
                          73.7%
                        </bdi>
                        {" "}
                        used
                      </span>
                    </div>
                  </li>
                  <li className="col">
                    <div className="on-dark bg-grad-orchid rounded-4 h-100 p-3">
                      <span className="d-block fs-6 fw-medium text-title">
                        Remaining
                      </span>
                      {" "}
                      <span className="d-block fs-3 fw-bold text-title lh-1 my-1">
                        <bdi>
                          $231K
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-md text-body-2">
                        <bdi>
                          26.3%
                        </bdi>
                        {" "}
                        left
                      </span>
                    </div>
                  </li>
                </ul>
                <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                  <li>
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                      <span className="d-inline-flex align-items-center gap-2 min-w-0">
                        <span className="feed-icon tint-violet" aria-hidden="true">
                          <i data-lucide="terminal" />
                        </span>
                        <span className="fs-6 fw-medium text-title text-truncate">
                          Engineering
                        </span>
                      </span>
                      <span className="d-inline-flex align-items-center gap-2 flex-shrink-0">
                        <span className="fs-md text-body-2">
                          <bdi>
                            $218.4K / $280.0K
                          </bdi>
                        </span>
                        <span className="bg-soft rounded-pill px-2 fs-5 fw-bold text-title">
                          <bdi>
                            78%
                          </bdi>
                        </span>
                      </span>
                    </div>
                    <div
                      className="progress mt-2"
                      role="progressbar"
                      aria-label="Engineering budget used"
                      aria-valuenow="78"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-blue" style={{ width: "78%" }} />
                    </div>
                  </li>
                  <li>
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                      <span className="d-inline-flex align-items-center gap-2 min-w-0">
                        <span className="feed-icon tint-amber" aria-hidden="true">
                          <i data-lucide="megaphone" />
                        </span>
                        <span className="fs-6 fw-medium text-title text-truncate">
                          Marketing
                        </span>
                      </span>
                      <span className="d-inline-flex align-items-center gap-2 flex-shrink-0">
                        <span className="fs-md text-body-2">
                          <bdi>
                            $84.6K / $120.0K
                          </bdi>
                        </span>
                        <span className="bg-soft rounded-pill px-2 fs-5 fw-bold text-title">
                          <bdi>
                            71%
                          </bdi>
                        </span>
                      </span>
                    </div>
                    <div
                      className="progress mt-2"
                      role="progressbar"
                      aria-label="Marketing budget used"
                      aria-valuenow="71"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-cyan" style={{ width: "71%" }} />
                    </div>
                  </li>
                  <li>
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                      <span className="d-inline-flex align-items-center gap-2 min-w-0">
                        <span className="feed-icon tint-blue" aria-hidden="true">
                          <i data-lucide="settings" />
                        </span>
                        <span className="fs-6 fw-medium text-title text-truncate">
                          Operations
                        </span>
                      </span>
                      <span className="d-inline-flex align-items-center gap-2 flex-shrink-0">
                        <span className="fs-md text-body-2">
                          <bdi>
                            $72.1K / $95.0K
                          </bdi>
                        </span>
                        <span className="bg-soft rounded-pill px-2 fs-5 fw-bold text-title">
                          <bdi>
                            76%
                          </bdi>
                        </span>
                      </span>
                    </div>
                    <div
                      className="progress mt-2"
                      role="progressbar"
                      aria-label="Operations budget used"
                      aria-valuenow="76"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-emerald" style={{ width: "76%" }} />
                    </div>
                  </li>
                  <li>
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                      <span className="d-inline-flex align-items-center gap-2 min-w-0">
                        <span className="feed-icon tint-emerald" aria-hidden="true">
                          <i data-lucide="trending-up" />
                        </span>
                        <span className="fs-6 fw-medium text-title text-truncate">
                          Sales
                        </span>
                      </span>
                      <span className="d-inline-flex align-items-center gap-2 flex-shrink-0">
                        <span className="fs-md text-body-2">
                          <bdi>
                            $134.8K / $160.0K
                          </bdi>
                        </span>
                        <span className="bg-soft rounded-pill px-2 fs-5 fw-bold text-title">
                          <bdi>
                            84%
                          </bdi>
                        </span>
                      </span>
                    </div>
                    <div
                      className="progress mt-2"
                      role="progressbar"
                      aria-label="Sales budget used"
                      aria-valuenow="84"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-amber" style={{ width: "84%" }} />
                    </div>
                  </li>
                  <li>
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                      <span className="d-inline-flex align-items-center gap-2 min-w-0">
                        <span className="feed-icon tint-blue" aria-hidden="true">
                          <i data-lucide="users" />
                        </span>
                        <span className="fs-6 fw-medium text-title text-truncate">
                          {"HR & Admin"}
                        </span>
                      </span>
                      <span className="d-inline-flex align-items-center gap-2 flex-shrink-0">
                        <span className="fs-md text-body-2">
                          <bdi>
                            $41.2K / $85.0K
                          </bdi>
                        </span>
                        <span className="bg-soft rounded-pill px-2 fs-5 fw-bold text-title">
                          <bdi>
                            48%
                          </bdi>
                        </span>
                      </span>
                    </div>
                    <div
                      className="progress mt-2"
                      role="progressbar"
                      aria-label="HR and Admin budget used"
                      aria-valuenow="48"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-violet" style={{ width: "48%" }} />
                    </div>
                  </li>
                  <li>
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                      <span className="d-inline-flex align-items-center gap-2 min-w-0">
                        <span className="feed-icon tint-rose" aria-hidden="true">
                          <i data-lucide="flask-round" />
                        </span>
                        <span className="fs-6 fw-medium text-title text-truncate">
                          {"R&D"}
                        </span>
                      </span>
                      <span className="d-inline-flex align-items-center gap-2 flex-shrink-0">
                        <span className="fs-md text-body-2">
                          <bdi>
                            $98.3K / $140.0K
                          </bdi>
                        </span>
                        <span className="bg-soft rounded-pill px-2 fs-5 fw-bold text-title">
                          <bdi>
                            70%
                          </bdi>
                        </span>
                      </span>
                    </div>
                    <div
                      className="progress mt-2"
                      role="progressbar"
                      aria-label="R and D budget used"
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-red" style={{ width: "70%" }} />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-xxl-6">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-start justify-content-between gap-2 mb-3">
                  <div className="min-w-0">
                    <h3 className="fs-5 fw-bold text-title mb-1">
                      Profit Margin
                    </h3>
                    <p className="fs-md text-muted-2 mb-0">
                      Revenue vs Expenses comparison
                    </p>
                  </div>
                  <div
                    className="nav nav-pills seg-toggle flex-nowrap gap-1 p-1 rounded-pill bg-soft"
                    role="group"
                    aria-label="Profit margin time range"
                  >
                    <button type="button" className="nav-link fw-semibold">
                      Today
                    </button>
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
                <ul className="list-unstyled d-flex flex-column gap-3 flex-grow-1 mb-0">
                  <li className="tint-emerald d-flex align-items-center gap-3 h-100 p-3 rounded-4 overflow-hidden">
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-block fs-4 fw-medium text-primary">
                        Operating Margin
                      </span>
                      {" "}
                      <span className="d-flex flex-wrap align-items-center gap-1 fs-xs mt-1">
                        <span className="fw-semibold text-success">
                          <bdi>
                            ↑ 18.2%
                          </bdi>
                        </span>
                        <span className="text-muted-2">
                          Vs last month
                        </span>
                      </span>
                      {" "}
                      <span className="d-block fs-1 fw-bold text-title lh-1 mt-3">
                        <bdi>
                          48%
                        </bdi>
                      </span>
                      {" "}
                      <span
                        className="progress bg-plain mt-2"
                        role="progressbar"
                        aria-label="Operating margin"
                        aria-valuenow="48"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <span className="progress-bar bg-cat-emerald" style={{ width: "48%" }} />
                      </span>
                      {" "}
                    </span>
                    <img
                      src="/assets/images/margin-operating.svg"
                      alt=""
                      width="114"
                      height="114"
                      className="tile-art"
                    />
                  </li>
                  <li className="tint-blue d-flex align-items-center gap-3 h-100 p-3 rounded-4 overflow-hidden">
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-block fs-4 fw-medium text-primary">
                        Gross Margin
                      </span>
                      {" "}
                      <span className="d-flex flex-wrap align-items-center gap-1 fs-xs mt-1">
                        <span className="fw-semibold text-success">
                          <bdi>
                            ↑ 18.2%
                          </bdi>
                        </span>
                        <span className="text-muted-2">
                          Vs last month
                        </span>
                      </span>
                      {" "}
                      <span className="d-block fs-1 fw-bold text-title lh-1 mt-3">
                        <bdi>
                          20%
                        </bdi>
                      </span>
                      {" "}
                      <span
                        className="progress bg-plain mt-2"
                        role="progressbar"
                        aria-label="Gross margin"
                        aria-valuenow="20"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <span className="progress-bar bg-cat-blue" style={{ width: "20%" }} />
                      </span>
                      {" "}
                    </span>
                    <img src="/assets/images/margin-gross.svg" alt="" width="116" height="113" className="tile-art" />
                  </li>
                  <li className="tint-violet d-flex align-items-center gap-3 h-100 p-3 rounded-4 overflow-hidden">
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-block fs-4 fw-medium text-primary">
                        Net Margin
                      </span>
                      {" "}
                      <span className="d-flex flex-wrap align-items-center gap-1 fs-xs mt-1">
                        <span className="fw-semibold text-success">
                          <bdi>
                            ↑ 18.2%
                          </bdi>
                        </span>
                        <span className="text-muted-2">
                          Vs last month
                        </span>
                      </span>
                      {" "}
                      <span className="d-block fs-1 fw-bold text-title lh-1 mt-3">
                        <bdi>
                          28%
                        </bdi>
                      </span>
                      {" "}
                      <span
                        className="progress bg-plain mt-2"
                        role="progressbar"
                        aria-label="Net margin"
                        aria-valuenow="28"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <span className="progress-bar bg-cat-violet" style={{ width: "28%" }} />
                      </span>
                      {" "}
                    </span>
                    <img src="/assets/images/margin-net.svg" alt="" width="113" height="113" className="tile-art" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Recent transactions ===== */}
      <section className="mb-4" aria-labelledby="fin-transactions-title">
        <h2 id="fin-transactions-title" className="visually-hidden">
          Recent transactions
        </h2>
        <div className="card bg-glass">
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
                    id="finTransactionSearch"
                    name="transaction-q"
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
                    id="finTransactionExport"
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
                  <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="finTransactionExport">
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
                    id="finTransactionShare"
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
                  <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="finTransactionShare">
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
            {/* Bulk action bar &mdash; revealed by the selection module while rows are checked */}
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
                <button
                  type="button"
                  className="btn btn-outline-soft d-inline-flex align-items-center gap-2 text-nowrap"
                >
                  <i className="icon-18" data-lucide="archive" aria-hidden="true" />
                  Archive
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
                  Recent finance transactions
                </caption>
                <thead>
                  <tr>
                    <th scope="col">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="finTransactionSelectAll"
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
                            sophia@techcorp.io
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
                Showing 1–8 of 8 results
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
      {/* ===== Financial goals, investment portfolio & revenue sources ===== */}
      <section className="mb-4" aria-labelledby="fin-goals-title">
        <h2 id="fin-goals-title" className="visually-hidden">
          Financial goals, investment portfolio and revenue sources
        </h2>
        <div className="row g-3">
          <div className="col-12 col-xxl-7">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    Financial Goals
                  </h3>
                  <button
                    type="button"
                    className="btn btn-accent btn-sm d-inline-flex align-items-center gap-2 rounded-pill text-nowrap"
                  >
                    <i className="icon-18" data-lucide="plus" aria-hidden="true" />
                    New Goal
                  </button>
                </div>
                <ul className="list-unstyled row row-cols-1 row-cols-md-2 g-3 mb-3">
                  <li className="col">
                    <div className="card bg-plain h-100">
                      <div className="card-body d-flex flex-column">
                        <div className="d-flex align-items-center justify-content-between gap-2">
                          <span className="d-inline-flex align-items-center gap-3 min-w-0">
                            <span className="feed-icon tint-violet" aria-hidden="true">
                              <i data-lucide="trending-up" />
                            </span>
                            <span className="min-w-0">
                              {" "}
                              <span className="d-block fs-6 fw-semibold text-title text-truncate">
                                Annual Revenue Target
                              </span>
                              {" "}
                              <span className="d-block fs-md text-muted-2 text-truncate">
                                Due Dec 31, 2026
                              </span>
                              {" "}
                            </span>
                          </span>
                          <span className="badge-soft border-theme tint-violet flex-shrink-0 fs-5 fw-bold">
                            <bdi>
                              81%
                            </bdi>
                          </span>
                        </div>
                        <div className="position-relative d-flex justify-content-center my-2">
                          <div id="finGoalRevenueRing" />
                          <span className="chart-center">
                            <span className="d-block fs-sm fw-bold text-muted-2">
                              Raised
                            </span>
                            <span className="d-block fs-4 fw-bold text-title">
                              <bdi>
                                $4.21M
                              </bdi>
                            </span>
                          </span>
                        </div>
                        <p className="fs-6 fw-semibold text-body-2 text-center mt-auto mb-0">
                          <bdi>
                            Target: $5.20M
                          </bdi>
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="col">
                    <div className="card bg-plain h-100">
                      <div className="card-body d-flex flex-column">
                        <div className="d-flex align-items-center justify-content-between gap-2">
                          <span className="d-inline-flex align-items-center gap-3 min-w-0">
                            <span className="feed-icon tint-emerald" aria-hidden="true">
                              <i data-lucide="shield" />
                            </span>
                            <span className="min-w-0">
                              {" "}
                              <span className="d-block fs-6 fw-semibold text-title text-truncate">
                                Emergency Fund Reserve
                              </span>
                              {" "}
                              <span className="d-block fs-md text-muted-2 text-truncate">
                                Due Sep 30, 2026
                              </span>
                              {" "}
                            </span>
                          </span>
                          <span className="badge-soft border-theme tint-emerald flex-shrink-0 fs-5 fw-bold">
                            <bdi>
                              82%
                            </bdi>
                          </span>
                        </div>
                        <div className="position-relative d-flex justify-content-center my-2">
                          <div id="finGoalEmergencyRing" />
                          <span className="chart-center">
                            <span className="d-block fs-sm fw-bold text-muted-2">
                              Raised
                            </span>
                            <span className="d-block fs-4 fw-bold text-title">
                              <bdi>
                                $820k
                              </bdi>
                            </span>
                          </span>
                        </div>
                        <p className="fs-6 fw-semibold text-body-2 text-center mt-auto mb-0">
                          <bdi>
                            Target: $1.00M
                          </bdi>
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="col">
                    <div className="card bg-plain h-100">
                      <div className="card-body d-flex flex-column">
                        <div className="d-flex align-items-center justify-content-between gap-2">
                          <span className="d-inline-flex align-items-center gap-3 min-w-0">
                            <span className="feed-icon tint-amber" aria-hidden="true">
                              <i data-lucide="target" />
                            </span>
                            <span className="min-w-0">
                              {" "}
                              <span className="d-block fs-6 fw-semibold text-title text-truncate">
                                Q4 Profit Goal
                              </span>
                              {" "}
                              <span className="d-block fs-md text-muted-2 text-truncate">
                                Due Dec 31, 2026
                              </span>
                              {" "}
                            </span>
                          </span>
                          <span className="badge-soft border-theme tint-amber flex-shrink-0 fs-5 fw-bold">
                            <bdi>
                              69%
                            </bdi>
                          </span>
                        </div>
                        <div className="position-relative d-flex justify-content-center my-2">
                          <div id="finGoalProfitRing" />
                          <span className="chart-center">
                            <span className="d-block fs-sm fw-bold text-muted-2">
                              Raised
                            </span>
                            <span className="d-block fs-4 fw-bold text-title">
                              <bdi>
                                $412k
                              </bdi>
                            </span>
                          </span>
                        </div>
                        <p className="fs-6 fw-semibold text-body-2 text-center mt-auto mb-0">
                          <bdi>
                            Target: $600k
                          </bdi>
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="col">
                    <div className="card bg-plain h-100">
                      <div className="card-body d-flex flex-column">
                        <div className="d-flex align-items-center justify-content-between gap-2">
                          <span className="d-inline-flex align-items-center gap-3 min-w-0">
                            <span className="feed-icon tint-violet" aria-hidden="true">
                              <i data-lucide="briefcase" />
                            </span>
                            <span className="min-w-0">
                              {" "}
                              <span className="d-block fs-6 fw-semibold text-title text-truncate">
                                Investment Portfolio
                              </span>
                              {" "}
                              <span className="d-block fs-md text-muted-2 text-truncate">
                                Due Dec 31, 2026
                              </span>
                              {" "}
                            </span>
                          </span>
                          <span className="badge-soft border-theme tint-violet flex-shrink-0 fs-5 fw-bold">
                            <bdi>
                              81%
                            </bdi>
                          </span>
                        </div>
                        <div className="position-relative d-flex justify-content-center my-2">
                          <div id="finGoalPortfolioRing" />
                          <span className="chart-center">
                            <span className="d-block fs-sm fw-bold text-muted-2">
                              Raised
                            </span>
                            <span className="d-block fs-4 fw-bold text-title">
                              <bdi>
                                $2.84M
                              </bdi>
                            </span>
                          </span>
                        </div>
                        <p className="fs-6 fw-semibold text-body-2 text-center mt-auto mb-0">
                          <bdi>
                            Target: $3.50M
                          </bdi>
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="card bg-plain mt-auto">
                  <div className="card-body">
                    <h4 className="fs-5 fw-bold text-title mb-3">
                      Portfolio Allocation
                    </h4>
                    <div className="row align-items-center g-3">
                      <div className="col-12 col-sm-5 col-xl-4">
                        <div className="position-relative">
                          <div id="finPortfolioAllocationChart" className="chart-area" />
                          <span className="chart-center">
                            <span className="d-block fs-xs fw-bold text-muted-2">
                              Allocation
                            </span>
                            <span className="d-block fs-5 fw-bold text-title">
                              <bdi>
                                100%
                              </bdi>
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="col-12 col-sm-7 col-xl-8">
                        <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                          <li className="d-flex align-items-center gap-3">
                            <span className="legend-dot bg-cat-blue" aria-hidden="true" />
                            <span className="flex-grow-1 min-w-0">
                              {" "}
                              <span className="d-flex align-items-center justify-content-between gap-2">
                                <span className="fs-6 fw-semibold text-title text-truncate">
                                  US Equities
                                </span>
                                <span className="fs-sm fw-bold text-title flex-shrink-0">
                                  <bdi>
                                    42%
                                  </bdi>
                                </span>
                              </span>
                              {" "}
                              <span className="d-block fs-md text-body-2">
                                <bdi>
                                  $2.10M
                                </bdi>
                              </span>
                              {" "}
                              <span
                                className="progress mt-1"
                                role="progressbar"
                                aria-label="US Equities allocation"
                                aria-valuenow="42"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                <span className="progress-bar bg-cat-blue" style={{ width: "42%" }} />
                              </span>
                              {" "}
                            </span>
                          </li>
                          <li className="d-flex align-items-center gap-3">
                            <span className="legend-dot bg-cat-emerald" aria-hidden="true" />
                            <span className="flex-grow-1 min-w-0">
                              {" "}
                              <span className="d-flex align-items-center justify-content-between gap-2">
                                <span className="fs-6 fw-semibold text-title text-truncate">
                                  Bonds
                                </span>
                                <span className="fs-sm fw-bold text-title flex-shrink-0">
                                  <bdi>
                                    22%
                                  </bdi>
                                </span>
                              </span>
                              {" "}
                              <span className="d-block fs-md text-body-2">
                                <bdi>
                                  $1.10M
                                </bdi>
                              </span>
                              {" "}
                              <span
                                className="progress mt-1"
                                role="progressbar"
                                aria-label="Bonds allocation"
                                aria-valuenow="22"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                <span className="progress-bar bg-cat-emerald" style={{ width: "22%" }} />
                              </span>
                              {" "}
                            </span>
                          </li>
                          <li className="d-flex align-items-center gap-3">
                            <span className="legend-dot bg-cat-violet" aria-hidden="true" />
                            <span className="flex-grow-1 min-w-0">
                              {" "}
                              <span className="d-flex align-items-center justify-content-between gap-2">
                                <span className="fs-6 fw-semibold text-title text-truncate">
                                  Real Estate
                                </span>
                                <span className="fs-sm fw-bold text-title flex-shrink-0">
                                  <bdi>
                                    16%
                                  </bdi>
                                </span>
                              </span>
                              {" "}
                              <span className="d-block fs-md text-body-2">
                                <bdi>
                                  $800k
                                </bdi>
                              </span>
                              {" "}
                              <span
                                className="progress mt-1"
                                role="progressbar"
                                aria-label="Real Estate allocation"
                                aria-valuenow="16"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                <span className="progress-bar bg-cat-violet" style={{ width: "16%" }} />
                              </span>
                              {" "}
                            </span>
                          </li>
                          <li className="d-flex align-items-center gap-3">
                            <span className="legend-dot bg-cat-amber" aria-hidden="true" />
                            <span className="flex-grow-1 min-w-0">
                              {" "}
                              <span className="d-flex align-items-center justify-content-between gap-2">
                                <span className="fs-6 fw-semibold text-title text-truncate">
                                  Crypto
                                </span>
                                <span className="fs-sm fw-bold text-title flex-shrink-0">
                                  <bdi>
                                    10%
                                  </bdi>
                                </span>
                              </span>
                              {" "}
                              <span className="d-block fs-md text-body-2">
                                <bdi>
                                  $500k
                                </bdi>
                              </span>
                              {" "}
                              <span
                                className="progress mt-1"
                                role="progressbar"
                                aria-label="Crypto allocation"
                                aria-valuenow="10"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                <span className="progress-bar bg-cat-amber" style={{ width: "10%" }} />
                              </span>
                              {" "}
                            </span>
                          </li>
                          <li className="d-flex align-items-center gap-3">
                            <span className="legend-dot bg-cat-slate" aria-hidden="true" />
                            <span className="flex-grow-1 min-w-0">
                              {" "}
                              <span className="d-flex align-items-center justify-content-between gap-2">
                                <span className="fs-6 fw-semibold text-title text-truncate">
                                  Cash
                                </span>
                                <span className="fs-sm fw-bold text-title flex-shrink-0">
                                  <bdi>
                                    10%
                                  </bdi>
                                </span>
                              </span>
                              {" "}
                              <span className="d-block fs-md text-body-2">
                                <bdi>
                                  $500k
                                </bdi>
                              </span>
                              {" "}
                              <span
                                className="progress mt-1"
                                role="progressbar"
                                aria-label="Cash allocation"
                                aria-valuenow="10"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                <span className="progress-bar bg-cat-slate" style={{ width: "10%" }} />
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
          </div>
          <div className="col-12 col-xxl-5">
            <div className="d-flex flex-column gap-3 h-100">
              <div className="card flex-grow-1">
                <div className="card-body d-flex flex-column">
                  <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                    <h3 className="fs-5 fw-bold text-title mb-0">
                      Investment Portfolio
                    </h3>
                    <div className="dropdown">
                      <button
                        type="button"
                        className="btn btn-outline-soft d-inline-flex align-items-center gap-2"
                        id="finInvestmentRange"
                        data-bs-toggle="dropdown"
                        data-bs-offset="0,8"
                        aria-expanded="false"
                      >
                        This Month
                        {" "}
                        <i data-lucide="chevron-down" className="dd-caret icon-18" aria-hidden="true" />
                      </button>
                      {" "}
                      <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="finInvestmentRange">
                        <li>
                          <button type="button" className="dropdown-item">
                            This Week
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item active">
                            This Month
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item">
                            This Quarter
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item">
                            This Year
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p className="display-6 fw-bold text-title lh-1 mb-1">
                    <bdi>
                      $36,480
                    </bdi>
                  </p>
                  <p className="fs-6 text-muted-2 mb-3">
                    Portfolio Value
                  </p>
                  <div className="row align-items-center flex-grow-1 g-3">
                    <div className="col-12 col-sm-5">
                      <div className="position-relative">
                        <div id="finInvestmentMixChart" className="chart-area" />
                        <span className="chart-center">
                          <span
                            className="icon-box icon-box-xl bg-nav-strong text-white rounded-circle"
                            aria-hidden="true"
                          >
                            <i data-lucide="credit-card" />
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
                                30%
                              </bdi>
                            </span>
                          </div>
                          <div
                            className="progress mt-2"
                            role="progressbar"
                            aria-label="Stocks share of portfolio"
                            aria-valuenow="30"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <div className="progress-bar bg-cat-blue" style={{ width: "30%" }} />
                          </div>
                        </li>
                        <li className="bg-plain border-theme p-2 rounded-3">
                          <div className="d-flex align-items-center justify-content-between gap-2">
                            <span className="d-inline-flex align-items-center gap-2 min-w-0">
                              <span className="icon-box icon-box-sm tint-violet rounded-circle" aria-hidden="true">
                                <i data-lucide="layers" />
                              </span>
                              <span className="min-w-0">
                                {" "}
                                <span className="d-block fs-md fw-semibold text-title text-truncate">
                                  Mutual Funds
                                </span>
                                {" "}
                                <span className="d-block fs-xs text-muted-2 text-truncate">
                                  <bdi>
                                    $9,120
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
                          <div
                            className="progress mt-2"
                            role="progressbar"
                            aria-label="Mutual funds share of portfolio"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <div className="progress-bar bg-cat-violet" style={{ width: "25%" }} />
                          </div>
                        </li>
                        <li className="bg-plain border-theme p-2 rounded-3">
                          <div className="d-flex align-items-center justify-content-between gap-2">
                            <span className="d-inline-flex align-items-center gap-2 min-w-0">
                              <span className="icon-box icon-box-sm tint-amber rounded-circle" aria-hidden="true">
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
                                    $5,472
                                  </bdi>
                                </span>
                                {" "}
                              </span>
                            </span>
                            <span className="bg-soft border-theme flex-shrink-0 px-2 py-1 rounded-pill fs-xs fw-semibold text-muted-2">
                              <bdi>
                                15%
                              </bdi>
                            </span>
                          </div>
                          <div
                            className="progress mt-2"
                            role="progressbar"
                            aria-label="Bonds share of portfolio"
                            aria-valuenow="15"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <div className="progress-bar bg-cat-amber" style={{ width: "15%" }} />
                          </div>
                        </li>
                        <li className="bg-plain border-theme p-2 rounded-3">
                          <div className="d-flex align-items-center justify-content-between gap-2">
                            <span className="d-inline-flex align-items-center gap-2 min-w-0">
                              <span
                                className="icon-box icon-box-sm bg-soft text-muted-2 rounded-circle"
                                aria-hidden="true"
                              >
                                <i data-lucide="grid" />
                              </span>
                              <span className="min-w-0">
                                {" "}
                                <span className="d-block fs-md fw-semibold text-title text-truncate">
                                  Other Assets
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
                                30%
                              </bdi>
                            </span>
                          </div>
                          <div
                            className="progress mt-2"
                            role="progressbar"
                            aria-label="Other assets share of portfolio"
                            aria-valuenow="30"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <div className="progress-bar bg-cat-slate" style={{ width: "30%" }} />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card flex-grow-1">
                <div className="card-body d-flex flex-column">
                  <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                    <h3 className="fs-5 fw-bold text-title mb-0">
                      Revenue Sources
                    </h3>
                    <div className="dropdown">
                      <button
                        type="button"
                        className="btn btn-outline-soft d-inline-flex align-items-center gap-2"
                        id="finRevenueSourcesRange"
                        data-bs-toggle="dropdown"
                        data-bs-offset="0,8"
                        aria-expanded="false"
                      >
                        This Month
                        {" "}
                        <i data-lucide="chevron-down" className="dd-caret icon-18" aria-hidden="true" />
                      </button>
                      {" "}
                      <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="finRevenueSourcesRange">
                        <li>
                          <button type="button" className="dropdown-item">
                            This Week
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item active">
                            This Month
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item">
                            This Quarter
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item">
                            This Year
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row align-items-center flex-grow-1 g-3">
                    <div className="col-12 col-sm-5">
                      <div className="position-relative">
                        <div id="finRevenueSourcesChart" className="chart-area" />
                        <span className="chart-center">
                          <span
                            className="icon-box icon-box-xl bg-nav-strong text-white rounded-circle"
                            aria-hidden="true"
                          >
                            <i data-lucide="credit-card" />
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="col-12 col-sm-7">
                      <div className="bg-plain border-theme p-3 rounded-3">
                        <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                          <span className="min-w-0">
                            {" "}
                            <span className="d-block fs-6 fw-bold text-title text-truncate">
                              Revenue Streams
                            </span>
                            {" "}
                            <span className="d-block fs-xs text-muted-2 text-truncate">
                              Distribution by category
                            </span>
                            {" "}
                          </span>
                          <span className="tint-emerald px-3 py-2 rounded-3 text-center flex-shrink-0">
                            {" "}
                            <span className="d-block fs-4 fw-bold text-title lh-1">
                              <bdi>
                                $8.42M
                              </bdi>
                            </span>
                            {" "}
                            <span className="d-block fs-xs fw-medium text-muted-2 mt-1">
                              Total Revenue
                            </span>
                            {" "}
                          </span>
                        </div>
                        <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                          <li>
                            <div className="d-flex align-items-center justify-content-between gap-2">
                              <span className="d-inline-flex align-items-center gap-2 min-w-0">
                                <span className="icon-box icon-box-sm tint-blue rounded-circle" aria-hidden="true">
                                  <i data-lucide="shopping-bag" />
                                </span>
                                <span className="min-w-0">
                                  {" "}
                                  <span className="d-block fs-md fw-semibold text-title text-truncate">
                                    Product Sales
                                  </span>
                                  {" "}
                                  <span className="d-block fs-xs text-muted-2 text-truncate">
                                    <bdi>
                                      $2.53M
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
                            <div
                              className="progress mt-2"
                              role="progressbar"
                              aria-label="Product sales share of revenue"
                              aria-valuenow="30"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              <div className="progress-bar bg-cat-blue" style={{ width: "30%" }} />
                            </div>
                          </li>
                          <li>
                            <div className="d-flex align-items-center justify-content-between gap-2">
                              <span className="d-inline-flex align-items-center gap-2 min-w-0">
                                <span className="icon-box icon-box-sm tint-emerald rounded-circle" aria-hidden="true">
                                  <i data-lucide="repeat" />
                                </span>
                                <span className="min-w-0">
                                  {" "}
                                  <span className="d-block fs-md fw-semibold text-title text-truncate">
                                    Subscriptions
                                  </span>
                                  {" "}
                                  <span className="d-block fs-xs text-muted-2 text-truncate">
                                    <bdi>
                                      $2.11M
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
                            <div
                              className="progress mt-2"
                              role="progressbar"
                              aria-label="Subscriptions share of revenue"
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              <div className="progress-bar bg-cat-emerald" style={{ width: "25%" }} />
                            </div>
                          </li>
                          <li>
                            <div className="d-flex align-items-center justify-content-between gap-2">
                              <span className="d-inline-flex align-items-center gap-2 min-w-0">
                                <span className="icon-box icon-box-sm tint-amber rounded-circle" aria-hidden="true">
                                  <i data-lucide="briefcase" />
                                </span>
                                <span className="min-w-0">
                                  {" "}
                                  <span className="d-block fs-md fw-semibold text-title text-truncate">
                                    Services
                                  </span>
                                  {" "}
                                  <span className="d-block fs-xs text-muted-2 text-truncate">
                                    <bdi>
                                      $1.26M
                                    </bdi>
                                  </span>
                                  {" "}
                                </span>
                              </span>
                              <span className="bg-soft border-theme flex-shrink-0 px-2 py-1 rounded-pill fs-xs fw-semibold text-muted-2">
                                <bdi>
                                  15%
                                </bdi>
                              </span>
                            </div>
                            <div
                              className="progress mt-2"
                              role="progressbar"
                              aria-label="Services share of revenue"
                              aria-valuenow="15"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              <div className="progress-bar bg-cat-amber" style={{ width: "15%" }} />
                            </div>
                          </li>
                          <li>
                            <div className="d-flex align-items-center justify-content-between gap-2">
                              <span className="d-inline-flex align-items-center gap-2 min-w-0">
                                <span
                                  className="icon-box icon-box-sm bg-soft text-muted-2 rounded-circle"
                                  aria-hidden="true"
                                >
                                  <i data-lucide="handshake" />
                                </span>
                                <span className="min-w-0">
                                  {" "}
                                  <span className="d-block fs-md fw-semibold text-title text-truncate">
                                    Partnerships
                                  </span>
                                  {" "}
                                  <span className="d-block fs-xs text-muted-2 text-truncate">
                                    <bdi>
                                      $2.52M
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
                            <div
                              className="progress mt-2"
                              role="progressbar"
                              aria-label="Partnerships share of revenue"
                              aria-valuenow="30"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              <div className="progress-bar bg-cat-slate" style={{ width: "30%" }} />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

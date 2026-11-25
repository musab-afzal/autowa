/* Generated from the Vionex HTML theme by scripts/convert-html.mjs */
import AppShell from "@/components/AppShell";

export const metadata = {
  title: "Vionex — Pricing",
  description: "Vionex enterprise admin dashboard — pricing page with plan comparison, usage quotas, add-ons and billing FAQs, built with Bootstrap 5, CSS variables and a scalable design system.",
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
          Pricing
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
              Pricing
            </li>
          </ol>
        </nav>
      </div>
      {/* ===== Current plan & usage ===== */}
      <section className="mb-4">
        <h2 className="visually-hidden">
          Your current plan and usage
        </h2>
        <div className="row g-3">
          <div className="col-12 col-xl-5">
            <div className="on-dark bg-grad-theme d-flex flex-column justify-content-between gap-3 h-100 p-3 p-md-4 rounded-4">
              <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                <h3 className="d-flex align-items-center gap-2 fs-5 text-title mb-0">
                  <span className="icon-box bg-white bg-opacity-25 rounded-circle" aria-hidden="true">
                    <i data-lucide="gem" />
                  </span>
                  Current Plan
                </h3>
                <span className="badge-soft tint-emerald border-current d-inline-flex align-items-center gap-2">
                  {" "}
                  <span className="legend-dot bg-cat-emerald" aria-hidden="true" />
                  Active
                  {" "}
                </span>
              </div>
              <div>
                <p className="d-flex flex-wrap align-items-baseline gap-2 mb-1">
                  <span className="fs-1 fw-bold text-title lh-1">
                    Professional
                  </span>
                  <span className="fs-md text-primary">
                    <bdi>
                      $49 / user / month
                    </bdi>
                  </span>
                </p>
                <ul className="list-unstyled d-flex flex-wrap align-items-center gap-3 fs-md text-primary mb-0">
                  <li className="d-inline-flex align-items-center gap-2">
                    <i className="icon-16" data-lucide="calendar-days" aria-hidden="true" />
                    <bdi>
                      Renews 27 September 2026
                    </bdi>
                  </li>
                  <li className="d-inline-flex align-items-center gap-2">
                    <i className="icon-16" data-lucide="users-round" aria-hidden="true" />
                    <bdi>
                      10 seats included
                    </bdi>
                  </li>
                </ul>
              </div>
              <div className="d-flex flex-wrap align-items-center gap-2">
                <a href="#pricing-plans" className="btn btn-accent d-inline-flex align-items-center gap-2 text-nowrap">
                  {" "}
                  <i className="icon-18" data-lucide="arrow-up-circle" aria-hidden="true" />
                  Upgrade plan
                  {" "}
                </a>
                <a
                  href="/invoice-list"
                  className="btn btn-accent-ghost d-inline-flex align-items-center gap-2 text-nowrap"
                >
                  {" "}
                  <i className="icon-18" data-lucide="receipt" aria-hidden="true" />
                  Billing history
                  {" "}
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-7">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <div className="min-w-0">
                    <h3 className="fs-5 fw-bold text-title mb-1">
                      Plan Usage
                    </h3>
                    <p className="fs-xs text-muted-2 mb-0">
                      <bdi>
                        Billing cycle 28 Aug – 27 Sep 2026
                      </bdi>
                    </p>
                  </div>
                  <span className="badge-soft tint-warning d-inline-flex align-items-center gap-1">
                    {" "}
                    <i className="icon-12" data-lucide="triangle-alert" aria-hidden="true" />
                    Compute almost full
                    {" "}
                  </span>
                </div>
                <ul className="list-unstyled row row-cols-1 row-cols-sm-3 g-3 flex-grow-1 mb-0">
                  <li className="col">
                    <div className="bg-plain border-theme rounded-3 d-flex flex-column align-items-center h-100 p-3">
                      <div className="position-relative d-flex justify-content-center">
                        <div id="pricingSeatsRing" />
                        <span className="chart-center">
                          <span className="d-block fs-5 fw-bold text-title lh-1">
                            <bdi>
                              70%
                            </bdi>
                          </span>
                        </span>
                      </div>
                      <h4 className="fs-md fw-semibold text-title text-center mt-3 mb-1">
                        Team seats
                      </h4>
                      <p className="fs-sm text-muted-2 text-center mb-0">
                        <bdi>
                          7 of 10 used
                        </bdi>
                      </p>
                    </div>
                  </li>
                  <li className="col">
                    <div className="bg-plain border-theme rounded-3 d-flex flex-column align-items-center h-100 p-3">
                      <div className="position-relative d-flex justify-content-center">
                        <div id="pricingComputeRing" />
                        <span className="chart-center">
                          <span className="d-block fs-5 fw-bold text-title lh-1">
                            <bdi>
                              92%
                            </bdi>
                          </span>
                        </span>
                      </div>
                      <h4 className="fs-md fw-semibold text-title text-center mt-3 mb-1">
                        GPU hours
                      </h4>
                      <p className="fs-sm text-muted-2 text-center mb-0">
                        <bdi>
                          231 of 250 used
                        </bdi>
                      </p>
                    </div>
                  </li>
                  <li className="col">
                    <div className="bg-plain border-theme rounded-3 d-flex flex-column align-items-center h-100 p-3">
                      <div className="position-relative d-flex justify-content-center">
                        <div id="pricingApiRing" />
                        <span className="chart-center">
                          <span className="d-block fs-5 fw-bold text-title lh-1">
                            <bdi>
                              46%
                            </bdi>
                          </span>
                        </span>
                      </div>
                      <h4 className="fs-md fw-semibold text-title text-center mt-3 mb-1">
                        API calls
                      </h4>
                      <p className="fs-sm text-muted-2 text-center mb-0">
                        <bdi>
                          114K of 250K used
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
      {/* ===== Plans ===== */}
      <section className="mb-4" id="pricing-plans" aria-labelledby="pricing-plans-title" data-price-scope="">
        <div className="d-flex flex-wrap align-items-end justify-content-between gap-3 mb-3">
          <div className="min-w-0">
            <h2 id="pricing-plans-title" className="fs-2 fw-bold text-title mb-1">
              Choose the plan that fits your team
            </h2>
            <p className="fw-medium text-body-2 mb-0">
              Every plan includes the full analytics suite. Change or cancel whenever you like — we bill the difference pro rata.
            </p>
          </div>
          <div
            className="nav nav-pills seg-toggle d-inline-flex flex-nowrap mw-100 gap-1 p-1 rounded-pill bg-soft overflow-x-auto scrollbar-none"
            role="group"
            aria-label="Billing cycle"
          >
            <button
              type="button"
              className="nav-link active fw-semibold text-nowrap"
              data-price-cycle="monthly"
              aria-pressed="true"
            >
              Monthly
            </button>
            <button
              type="button"
              className="nav-link fw-semibold text-nowrap d-inline-flex align-items-center gap-2"
              data-price-cycle="yearly"
              aria-pressed="false"
            >
              Yearly
              {" "}
              <span className="badge-soft tint-success fs-xs px-2 py-0">
                <bdi>
                  Save 20%
                </bdi>
              </span>
            </button>
          </div>
        </div>
        <ul className="list-unstyled row row-cols-1 row-cols-md-2 row-cols-xl-4 g-3 mb-0">
          <li className="col">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <span className="icon-box icon-box-lg tint-blue mb-3" aria-hidden="true">
                  <i data-lucide="rocket" />
                </span>
                <h3 className="fs-5 fw-bold text-title mb-1">
                  Starter
                </h3>
                <p className="fs-sm text-muted-2 mb-3">
                  For solo builders shipping their first models.
                </p>
                <p className="d-flex flex-wrap align-items-baseline gap-1 mb-1">
                  <span className="display-5 fw-bold text-title lh-1">
                    <bdi data-price-monthly="$19" data-price-yearly="$15">
                      $19
                    </bdi>
                  </span>
                  <span className="fs-md text-muted-2">
                    / user / month
                  </span>
                </p>
                <p className="fs-sm text-muted-2 mb-3">
                  <span data-price-only="monthly">
                    <bdi>
                      Billed monthly
                    </bdi>
                  </span>
                  {" "}
                  <span className="d-none" data-price-only="yearly">
                    <bdi>
                      $180 billed yearly
                    </bdi>
                  </span>
                </p>
                <button type="button" className="btn btn-outline-soft w-100 mb-3">
                  Downgrade to Starter
                </button>
                <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                  <li className="d-flex align-items-start gap-2">
                    <i className="icon-18 text-cat-emerald flex-shrink-0" data-lucide="check" aria-hidden="true" />
                    <span className="fs-md text-body-2">
                      <bdi>
                        3 team seats
                      </bdi>
                    </span>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <i className="icon-18 text-cat-emerald flex-shrink-0" data-lucide="check" aria-hidden="true" />
                    <span className="fs-md text-body-2">
                      <bdi>
                        50 GPU hours a month
                      </bdi>
                    </span>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <i className="icon-18 text-cat-emerald flex-shrink-0" data-lucide="check" aria-hidden="true" />
                    <span className="fs-md text-body-2">
                      <bdi>
                        10K API calls a month
                      </bdi>
                    </span>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <i className="icon-18 text-cat-emerald flex-shrink-0" data-lucide="check" aria-hidden="true" />
                    <span className="fs-md text-body-2">
                      <bdi>
                        7-day analytics history
                      </bdi>
                    </span>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <i className="icon-18 text-cat-emerald flex-shrink-0" data-lucide="check" aria-hidden="true" />
                    <span className="fs-md text-body-2">
                      Community support
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card position-relative h-100">
              <span className="corner-tag position-absolute badge-soft tint-success d-inline-flex align-items-center gap-1 px-3 py-2">
                {" "}
                <i className="icon-12" data-lucide="circle-check" aria-hidden="true" />
                Current plan
                {" "}
              </span>
              <div className="card-body d-flex flex-column">
                <span className="icon-box icon-box-lg tint-violet mb-3" aria-hidden="true">
                  <i data-lucide="zap" />
                </span>
                <h3 className="fs-5 fw-bold text-title mb-1">
                  Professional
                </h3>
                <p className="fs-sm text-muted-2 mb-3">
                  For product teams running models in production.
                </p>
                <p className="d-flex flex-wrap align-items-baseline gap-1 mb-1">
                  <span className="display-5 fw-bold text-title lh-1">
                    <bdi data-price-monthly="$49" data-price-yearly="$39">
                      $49
                    </bdi>
                  </span>
                  <span className="fs-md text-muted-2">
                    / user / month
                  </span>
                </p>
                <p className="fs-sm text-muted-2 mb-3">
                  <span data-price-only="monthly">
                    <bdi>
                      Billed monthly
                    </bdi>
                  </span>
                  {" "}
                  <span className="d-none" data-price-only="yearly">
                    <bdi>
                      $468 billed yearly
                    </bdi>
                  </span>
                </p>
                <button type="button" className="btn btn-outline-soft w-100 mb-3" disabled>
                  Your current plan
                </button>
                <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                  <li className="d-flex align-items-start gap-2">
                    <i className="icon-18 text-cat-emerald flex-shrink-0" data-lucide="check" aria-hidden="true" />
                    <span className="fs-md text-body-2">
                      <bdi>
                        10 team seats
                      </bdi>
                    </span>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <i className="icon-18 text-cat-emerald flex-shrink-0" data-lucide="check" aria-hidden="true" />
                    <span className="fs-md text-body-2">
                      <bdi>
                        250 GPU hours a month
                      </bdi>
                    </span>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <i className="icon-18 text-cat-emerald flex-shrink-0" data-lucide="check" aria-hidden="true" />
                    <span className="fs-md text-body-2">
                      <bdi>
                        250K API calls a month
                      </bdi>
                    </span>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <i className="icon-18 text-cat-emerald flex-shrink-0" data-lucide="check" aria-hidden="true" />
                    <span className="fs-md text-body-2">
                      <bdi>
                        90-day analytics history
                      </bdi>
                    </span>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <i className="icon-18 text-cat-emerald flex-shrink-0" data-lucide="check" aria-hidden="true" />
                    <span className="fs-md text-body-2">
                      <bdi>
                        Email support within 24h
                      </bdi>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card ring-primary position-relative h-100">
              <span className="corner-tag position-absolute badge-soft tint-primary d-inline-flex align-items-center gap-1 px-3 py-2">
                {" "}
                <i className="icon-12" data-lucide="sparkles" aria-hidden="true" />
                Most popular
                {" "}
              </span>
              <div className="card-body d-flex flex-column">
                <span className="icon-box icon-box-lg tint-brand mb-3" aria-hidden="true">
                  <i data-lucide="building-2" />
                </span>
                <h3 className="fs-5 fw-bold text-title mb-1">
                  Business
                </h3>
                <p className="fs-sm text-muted-2 mb-3">
                  For scaling companies that need governance.
                </p>
                <p className="d-flex flex-wrap align-items-baseline gap-1 mb-1">
                  <span className="display-5 fw-bold text-title lh-1">
                    <bdi data-price-monthly="$99" data-price-yearly="$79">
                      $99
                    </bdi>
                  </span>
                  <span className="fs-md text-muted-2">
                    / user / month
                  </span>
                </p>
                <p className="fs-sm text-muted-2 mb-3">
                  <span data-price-only="monthly">
                    <bdi>
                      Billed monthly
                    </bdi>
                  </span>
                  {" "}
                  <span className="d-none" data-price-only="yearly">
                    <bdi>
                      $948 billed yearly
                    </bdi>
                  </span>
                </p>
                <button type="button" className="btn btn-primary w-100 mb-3">
                  Upgrade to Business
                </button>
                <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                  <li className="d-flex align-items-start gap-2">
                    <i className="icon-18 text-cat-emerald flex-shrink-0" data-lucide="check" aria-hidden="true" />
                    <span className="fs-md text-body-2">
                      <bdi>
                        25 team seats
                      </bdi>
                    </span>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <i className="icon-18 text-cat-emerald flex-shrink-0" data-lucide="check" aria-hidden="true" />
                    <span className="fs-md text-body-2">
                      <bdi>
                        1,000 GPU hours a month
                      </bdi>
                    </span>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <i className="icon-18 text-cat-emerald flex-shrink-0" data-lucide="check" aria-hidden="true" />
                    <span className="fs-md text-body-2">
                      <bdi>
                        2M API calls a month
                      </bdi>
                    </span>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <i className="icon-18 text-cat-emerald flex-shrink-0" data-lucide="check" aria-hidden="true" />
                    <span className="fs-md text-body-2">
                      <bdi>
                        {"SSO, audit log & 12-month history"}
                      </bdi>
                    </span>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <i className="icon-18 text-cat-emerald flex-shrink-0" data-lucide="check" aria-hidden="true" />
                    <span className="fs-md text-body-2">
                      <bdi>
                        Priority support within 4h
                      </bdi>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <span className="icon-box icon-box-lg tint-slate mb-3" aria-hidden="true">
                  <i data-lucide="server" />
                </span>
                <h3 className="fs-5 fw-bold text-title mb-1">
                  Enterprise
                </h3>
                <p className="fs-sm text-muted-2 mb-3">
                  For regulated organisations with their own rules.
                </p>
                <p className="d-flex flex-wrap align-items-baseline gap-1 mb-1">
                  <span className="display-5 fw-bold text-title lh-1">
                    Custom
                  </span>
                </p>
                <p className="fs-sm text-muted-2 mb-3">
                  Annual contract, invoiced
                </p>
                <button type="button" className="btn btn-outline-soft w-100 mb-3">
                  Contact sales
                </button>
                <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                  <li className="d-flex align-items-start gap-2">
                    <i className="icon-18 text-cat-emerald flex-shrink-0" data-lucide="check" aria-hidden="true" />
                    <span className="fs-md text-body-2">
                      Unlimited team seats
                    </span>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <i className="icon-18 text-cat-emerald flex-shrink-0" data-lucide="check" aria-hidden="true" />
                    <span className="fs-md text-body-2">
                      Dedicated compute pool
                    </span>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <i className="icon-18 text-cat-emerald flex-shrink-0" data-lucide="check" aria-hidden="true" />
                    <span className="fs-md text-body-2">
                      Unlimited API calls
                    </span>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <i className="icon-18 text-cat-emerald flex-shrink-0" data-lucide="check" aria-hidden="true" />
                    <span className="fs-md text-body-2">
                      <bdi>
                        On-prem or VPC deployment
                      </bdi>
                    </span>
                  </li>
                  <li className="d-flex align-items-start gap-2">
                    <i className="icon-18 text-cat-emerald flex-shrink-0" data-lucide="check" aria-hidden="true" />
                    <span className="fs-md text-body-2">
                      <bdi>
                        {"Dedicated CSM & 99.99% SLA"}
                      </bdi>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </section>
      {/* ===== Feature comparison ===== */}
      <section className="mb-4" aria-labelledby="pricing-compare-title">
        <div className="mb-3">
          <h2 id="pricing-compare-title" className="fs-4 fw-bold text-title mb-1">
            Compare all features
          </h2>
          <p className="fs-md text-muted-2 mb-0">
            Everything each plan includes, side by side.
          </p>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <caption className="visually-hidden">
                  Feature availability across the Starter, Professional, Business and Enterprise plans
                </caption>
                <thead>
                  <tr>
                    <th scope="col">
                      Feature
                    </th>
                    <th scope="col" className="text-center">
                      Starter
                    </th>
                    <th scope="col" className="text-center">
                      Professional
                    </th>
                    <th scope="col" className="text-center">
                      Business
                    </th>
                    <th scope="col" className="text-center">
                      Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th
                      scope="rowgroup"
                      colSpan="5"
                      className="bg-soft fs-xs fw-semibold text-uppercase text-muted-2 text-nowrap"
                    >
                      Core platform
                    </th>
                  </tr>
                  <tr>
                    <th scope="row" className="fs-md fw-medium text-body-2 text-nowrap">
                      Team seats
                    </th>
                    <td className="text-center fs-md fw-semibold text-title">
                      <bdi>
                        3
                      </bdi>
                    </td>
                    <td className="text-center fs-md fw-semibold text-title">
                      <bdi>
                        10
                      </bdi>
                    </td>
                    <td className="text-center fs-md fw-semibold text-title">
                      <bdi>
                        25
                      </bdi>
                    </td>
                    <td className="text-center fs-md fw-semibold text-title text-nowrap">
                      Unlimited
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="fs-md fw-medium text-body-2 text-nowrap">
                      Active projects
                    </th>
                    <td className="text-center fs-md fw-semibold text-title">
                      <bdi>
                        5
                      </bdi>
                    </td>
                    <td className="text-center fs-md fw-semibold text-title">
                      <bdi>
                        50
                      </bdi>
                    </td>
                    <td className="text-center fs-md fw-semibold text-title text-nowrap">
                      Unlimited
                    </td>
                    <td className="text-center fs-md fw-semibold text-title text-nowrap">
                      Unlimited
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="fs-md fw-medium text-body-2 text-nowrap">
                      Analytics history
                    </th>
                    <td className="text-center fs-md fw-semibold text-title text-nowrap">
                      <bdi>
                        7 days
                      </bdi>
                    </td>
                    <td className="text-center fs-md fw-semibold text-title text-nowrap">
                      <bdi>
                        90 days
                      </bdi>
                    </td>
                    <td className="text-center fs-md fw-semibold text-title text-nowrap">
                      <bdi>
                        12 months
                      </bdi>
                    </td>
                    <td className="text-center fs-md fw-semibold text-title text-nowrap">
                      Unlimited
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="fs-md fw-medium text-body-2 text-nowrap">
                      Custom dashboards
                    </th>
                    <td className="text-center">
                      <i className="icon-18 text-muted-2" data-lucide="minus" aria-hidden="true" />
                      <span className="visually-hidden">
                        Not included
                      </span>
                    </td>
                    <td className="text-center">
                      <i className="icon-18 text-cat-emerald" data-lucide="check" aria-hidden="true" />
                      <span className="visually-hidden">
                        Included
                      </span>
                    </td>
                    <td className="text-center">
                      <i className="icon-18 text-cat-emerald" data-lucide="check" aria-hidden="true" />
                      <span className="visually-hidden">
                        Included
                      </span>
                    </td>
                    <td className="text-center">
                      <i className="icon-18 text-cat-emerald" data-lucide="check" aria-hidden="true" />
                      <span className="visually-hidden">
                        Included
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="fs-md fw-medium text-body-2 text-nowrap">
                      {"Data export (CSV & PDF)"}
                    </th>
                    <td className="text-center">
                      <i className="icon-18 text-cat-emerald" data-lucide="check" aria-hidden="true" />
                      <span className="visually-hidden">
                        Included
                      </span>
                    </td>
                    <td className="text-center">
                      <i className="icon-18 text-cat-emerald" data-lucide="check" aria-hidden="true" />
                      <span className="visually-hidden">
                        Included
                      </span>
                    </td>
                    <td className="text-center">
                      <i className="icon-18 text-cat-emerald" data-lucide="check" aria-hidden="true" />
                      <span className="visually-hidden">
                        Included
                      </span>
                    </td>
                    <td className="text-center">
                      <i className="icon-18 text-cat-emerald" data-lucide="check" aria-hidden="true" />
                      <span className="visually-hidden">
                        Included
                      </span>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <th
                      scope="rowgroup"
                      colSpan="5"
                      className="bg-soft fs-xs fw-semibold text-uppercase text-muted-2 text-nowrap"
                    >
                      {"AI & compute"}
                    </th>
                  </tr>
                  <tr>
                    <th scope="row" className="fs-md fw-medium text-body-2 text-nowrap">
                      GPU hours a month
                    </th>
                    <td className="text-center fs-md fw-semibold text-title">
                      <bdi>
                        50
                      </bdi>
                    </td>
                    <td className="text-center fs-md fw-semibold text-title">
                      <bdi>
                        250
                      </bdi>
                    </td>
                    <td className="text-center fs-md fw-semibold text-title">
                      <bdi>
                        1,000
                      </bdi>
                    </td>
                    <td className="text-center fs-md fw-semibold text-title text-nowrap">
                      Custom
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="fs-md fw-medium text-body-2 text-nowrap">
                      API calls a month
                    </th>
                    <td className="text-center fs-md fw-semibold text-title">
                      <bdi>
                        10K
                      </bdi>
                    </td>
                    <td className="text-center fs-md fw-semibold text-title">
                      <bdi>
                        250K
                      </bdi>
                    </td>
                    <td className="text-center fs-md fw-semibold text-title">
                      <bdi>
                        2M
                      </bdi>
                    </td>
                    <td className="text-center fs-md fw-semibold text-title text-nowrap">
                      Unlimited
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="fs-md fw-medium text-body-2 text-nowrap">
                      Model fine-tuning
                    </th>
                    <td className="text-center">
                      <i className="icon-18 text-muted-2" data-lucide="minus" aria-hidden="true" />
                      <span className="visually-hidden">
                        Not included
                      </span>
                    </td>
                    <td className="text-center">
                      <i className="icon-18 text-cat-emerald" data-lucide="check" aria-hidden="true" />
                      <span className="visually-hidden">
                        Included
                      </span>
                    </td>
                    <td className="text-center">
                      <i className="icon-18 text-cat-emerald" data-lucide="check" aria-hidden="true" />
                      <span className="visually-hidden">
                        Included
                      </span>
                    </td>
                    <td className="text-center">
                      <i className="icon-18 text-cat-emerald" data-lucide="check" aria-hidden="true" />
                      <span className="visually-hidden">
                        Included
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="fs-md fw-medium text-body-2 text-nowrap">
                      Private model hosting
                    </th>
                    <td className="text-center">
                      <i className="icon-18 text-muted-2" data-lucide="minus" aria-hidden="true" />
                      <span className="visually-hidden">
                        Not included
                      </span>
                    </td>
                    <td className="text-center">
                      <i className="icon-18 text-muted-2" data-lucide="minus" aria-hidden="true" />
                      <span className="visually-hidden">
                        Not included
                      </span>
                    </td>
                    <td className="text-center">
                      <i className="icon-18 text-cat-emerald" data-lucide="check" aria-hidden="true" />
                      <span className="visually-hidden">
                        Included
                      </span>
                    </td>
                    <td className="text-center">
                      <i className="icon-18 text-cat-emerald" data-lucide="check" aria-hidden="true" />
                      <span className="visually-hidden">
                        Included
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="fs-md fw-medium text-body-2 text-nowrap">
                      Dedicated compute pool
                    </th>
                    <td className="text-center">
                      <i className="icon-18 text-muted-2" data-lucide="minus" aria-hidden="true" />
                      <span className="visually-hidden">
                        Not included
                      </span>
                    </td>
                    <td className="text-center">
                      <i className="icon-18 text-muted-2" data-lucide="minus" aria-hidden="true" />
                      <span className="visually-hidden">
                        Not included
                      </span>
                    </td>
                    <td className="text-center">
                      <i className="icon-18 text-muted-2" data-lucide="minus" aria-hidden="true" />
                      <span className="visually-hidden">
                        Not included
                      </span>
                    </td>
                    <td className="text-center">
                      <i className="icon-18 text-cat-emerald" data-lucide="check" aria-hidden="true" />
                      <span className="visually-hidden">
                        Included
                      </span>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <th
                      scope="rowgroup"
                      colSpan="5"
                      className="bg-soft fs-xs fw-semibold text-uppercase text-muted-2 text-nowrap"
                    >
                      {"Support & security"}
                    </th>
                  </tr>
                  <tr>
                    <th scope="row" className="fs-md fw-medium text-body-2 text-nowrap">
                      Support channel
                    </th>
                    <td className="text-center fs-md fw-semibold text-title text-nowrap">
                      Community
                    </td>
                    <td className="text-center fs-md fw-semibold text-title text-nowrap">
                      <bdi>
                        Email · 24h
                      </bdi>
                    </td>
                    <td className="text-center fs-md fw-semibold text-title text-nowrap">
                      <bdi>
                        Priority · 4h
                      </bdi>
                    </td>
                    <td className="text-center fs-md fw-semibold text-title text-nowrap">
                      Dedicated CSM
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="fs-md fw-medium text-body-2 text-nowrap">
                      {"SSO (SAML & OIDC)"}
                    </th>
                    <td className="text-center">
                      <i className="icon-18 text-muted-2" data-lucide="minus" aria-hidden="true" />
                      <span className="visually-hidden">
                        Not included
                      </span>
                    </td>
                    <td className="text-center">
                      <i className="icon-18 text-muted-2" data-lucide="minus" aria-hidden="true" />
                      <span className="visually-hidden">
                        Not included
                      </span>
                    </td>
                    <td className="text-center">
                      <i className="icon-18 text-cat-emerald" data-lucide="check" aria-hidden="true" />
                      <span className="visually-hidden">
                        Included
                      </span>
                    </td>
                    <td className="text-center">
                      <i className="icon-18 text-cat-emerald" data-lucide="check" aria-hidden="true" />
                      <span className="visually-hidden">
                        Included
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="fs-md fw-medium text-body-2 text-nowrap">
                      {"Audit log & retention policy"}
                    </th>
                    <td className="text-center">
                      <i className="icon-18 text-muted-2" data-lucide="minus" aria-hidden="true" />
                      <span className="visually-hidden">
                        Not included
                      </span>
                    </td>
                    <td className="text-center">
                      <i className="icon-18 text-muted-2" data-lucide="minus" aria-hidden="true" />
                      <span className="visually-hidden">
                        Not included
                      </span>
                    </td>
                    <td className="text-center">
                      <i className="icon-18 text-cat-emerald" data-lucide="check" aria-hidden="true" />
                      <span className="visually-hidden">
                        Included
                      </span>
                    </td>
                    <td className="text-center">
                      <i className="icon-18 text-cat-emerald" data-lucide="check" aria-hidden="true" />
                      <span className="visually-hidden">
                        Included
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="fs-md fw-medium text-body-2 text-nowrap">
                      Uptime SLA
                    </th>
                    <td className="text-center">
                      <i className="icon-18 text-muted-2" data-lucide="minus" aria-hidden="true" />
                      <span className="visually-hidden">
                        Not included
                      </span>
                    </td>
                    <td className="text-center fs-md fw-semibold text-title">
                      <bdi>
                        99.5%
                      </bdi>
                    </td>
                    <td className="text-center fs-md fw-semibold text-title">
                      <bdi>
                        99.9%
                      </bdi>
                    </td>
                    <td className="text-center fs-md fw-semibold text-title">
                      <bdi>
                        99.99%
                      </bdi>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="fs-md fw-medium text-body-2 text-nowrap">
                      On-prem or VPC deployment
                    </th>
                    <td className="text-center">
                      <i className="icon-18 text-muted-2" data-lucide="minus" aria-hidden="true" />
                      <span className="visually-hidden">
                        Not included
                      </span>
                    </td>
                    <td className="text-center">
                      <i className="icon-18 text-muted-2" data-lucide="minus" aria-hidden="true" />
                      <span className="visually-hidden">
                        Not included
                      </span>
                    </td>
                    <td className="text-center">
                      <i className="icon-18 text-muted-2" data-lucide="minus" aria-hidden="true" />
                      <span className="visually-hidden">
                        Not included
                      </span>
                    </td>
                    <td className="text-center">
                      <i className="icon-18 text-cat-emerald" data-lucide="check" aria-hidden="true" />
                      <span className="visually-hidden">
                        Included
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Add-ons ===== */}
      <section className="mb-4" aria-labelledby="pricing-addons-title">
        <div className="mb-3">
          <h2 id="pricing-addons-title" className="fs-4 fw-bold text-title mb-1">
            {"Add-ons & extras"}
          </h2>
          <p className="fs-md text-muted-2 mb-0">
            Top up any plan without changing it. Charges appear on your next invoice.
          </p>
        </div>
        <ul className="list-unstyled row row-cols-1 row-cols-md-3 g-3 mb-0">
          <li className="col">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                  <span className="icon-box icon-box-lg tint-violet" aria-hidden="true">
                    <i data-lucide="user-round-plus" />
                  </span>
                  <span className="badge-soft tint-violet text-nowrap">
                    <bdi>
                      $9 / seat
                    </bdi>
                  </span>
                </div>
                <h3 className="fs-6 fw-bold text-title mb-1">
                  Extra team seats
                </h3>
                <p className="fs-md text-body-2 mb-3">
                  Add collaborators beyond your plan’s allowance, billed pro rata for the rest of the cycle.
                </p>
                <button
                  type="button"
                  className="btn btn-primary-soft w-100 d-inline-flex align-items-center justify-content-center gap-2 mt-auto"
                >
                  <i className="icon-18" data-lucide="plus" aria-hidden="true" />
                  Add seats
                </button>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                  <span className="icon-box icon-box-lg tint-amber" aria-hidden="true">
                    <i data-lucide="cpu" />
                  </span>
                  <span className="badge-soft tint-amber text-nowrap">
                    <bdi>
                      $0.60 / hour
                    </bdi>
                  </span>
                </div>
                <h3 className="fs-6 fw-bold text-title mb-1">
                  GPU hour packs
                </h3>
                <p className="fs-md text-body-2 mb-3">
                  Burst past your monthly compute quota. Metered by the minute and capped at a budget you set.
                </p>
                <button
                  type="button"
                  className="btn btn-primary-soft w-100 d-inline-flex align-items-center justify-content-center gap-2 mt-auto"
                >
                  <i className="icon-18" data-lucide="plus" aria-hidden="true" />
                  Buy compute
                </button>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                  <span className="icon-box icon-box-lg tint-cyan" aria-hidden="true">
                    <i data-lucide="headset" />
                  </span>
                  <span className="badge-soft tint-cyan text-nowrap">
                    <bdi>
                      $199 / month
                    </bdi>
                  </span>
                </div>
                <h3 className="fs-6 fw-bold text-title mb-1">
                  Priority support
                </h3>
                <p className="fs-md text-body-2 mb-3">
                  A four-hour first-response target and a named engineer on your shared Slack channel.
                </p>
                <button
                  type="button"
                  className="btn btn-primary-soft w-100 d-inline-flex align-items-center justify-content-center gap-2 mt-auto"
                >
                  <i className="icon-18" data-lucide="plus" aria-hidden="true" />
                  Add support
                </button>
              </div>
            </div>
          </li>
        </ul>
      </section>
      {/* ===== Billing questions & sales ===== */}
      <section className="mb-4">
        <h2 className="visually-hidden">
          Billing questions and sales contact
        </h2>
        <div className="row g-3">
          <div className="col-12 col-xl-8">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    Billing questions
                  </h3>
                  <a href="/faq" className="fs-md fw-medium text-brand d-inline-flex align-items-center gap-1">
                    All FAQs
                    <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                  </a>
                </div>
                <ul className="list-unstyled d-flex flex-column flex-grow-1 gap-2 mb-0">
                  <li className="bg-plain border-theme rounded-3 overflow-hidden">
                    <button
                      type="button"
                      className="d-flex align-items-center justify-content-between w-100 gap-3 px-3 py-3 border-0 bg-transparent text-start transition-base"
                      data-bs-toggle="collapse"
                      data-bs-target="#pricingFaq1"
                      aria-expanded="false"
                      aria-controls="pricingFaq1"
                    >
                      <span className="fs-md fw-semibold text-title">
                        Can I change my plan later?
                      </span>
                      <i
                        className="dd-caret icon-18 flex-shrink-0 text-muted-2"
                        data-lucide="chevron-down"
                        aria-hidden="true"
                      />
                    </button>
                    {" "}
                    <div className="collapse" id="pricingFaq1">
                      <p className="fs-md text-body-2 px-3 pb-3 mb-0">
                        Yes — upgrade or downgrade at any time from this page. Upgrades take effect immediately and we bill the difference pro rata; downgrades apply at the start of your next cycle so you keep what you have already paid for.
                      </p>
                    </div>
                  </li>
                  <li className="bg-plain border-theme rounded-3 overflow-hidden">
                    <button
                      type="button"
                      className="d-flex align-items-center justify-content-between w-100 gap-3 px-3 py-3 border-0 bg-transparent text-start transition-base"
                      data-bs-toggle="collapse"
                      data-bs-target="#pricingFaq2"
                      aria-expanded="false"
                      aria-controls="pricingFaq2"
                    >
                      <span className="fs-md fw-semibold text-title">
                        Do unused GPU hours roll over?
                      </span>
                      <i
                        className="dd-caret icon-18 flex-shrink-0 text-muted-2"
                        data-lucide="chevron-down"
                        aria-hidden="true"
                      />
                    </button>
                    {" "}
                    <div className="collapse" id="pricingFaq2">
                      <p className="fs-md text-body-2 px-3 pb-3 mb-0">
                        Included hours reset with each billing cycle and do not carry over. Anything you buy as a GPU hour pack stays on your account for twelve months.
                      </p>
                    </div>
                  </li>
                  <li className="bg-plain border-theme rounded-3 overflow-hidden">
                    <button
                      type="button"
                      className="d-flex align-items-center justify-content-between w-100 gap-3 px-3 py-3 border-0 bg-transparent text-start transition-base"
                      data-bs-toggle="collapse"
                      data-bs-target="#pricingFaq3"
                      aria-expanded="false"
                      aria-controls="pricingFaq3"
                    >
                      <span className="fs-md fw-semibold text-title">
                        What happens if I go over my quota?
                      </span>
                      <i
                        className="dd-caret icon-18 flex-shrink-0 text-muted-2"
                        data-lucide="chevron-down"
                        aria-hidden="true"
                      />
                    </button>
                    {" "}
                    <div className="collapse" id="pricingFaq3">
                      <p className="fs-md text-body-2 px-3 pb-3 mb-0">
                        Nothing stops working. We alert your workspace owners at 80% and 100%, then meter the overage at the add-on rate up to the budget cap you set in billing settings.
                      </p>
                    </div>
                  </li>
                  <li className="bg-plain border-theme rounded-3 overflow-hidden">
                    <button
                      type="button"
                      className="d-flex align-items-center justify-content-between w-100 gap-3 px-3 py-3 border-0 bg-transparent text-start transition-base"
                      data-bs-toggle="collapse"
                      data-bs-target="#pricingFaq4"
                      aria-expanded="false"
                      aria-controls="pricingFaq4"
                    >
                      <span className="fs-md fw-semibold text-title">
                        Which payment methods do you accept?
                      </span>
                      <i
                        className="dd-caret icon-18 flex-shrink-0 text-muted-2"
                        data-lucide="chevron-down"
                        aria-hidden="true"
                      />
                    </button>
                    {" "}
                    <div className="collapse" id="pricingFaq4">
                      <p className="fs-md text-body-2 px-3 pb-3 mb-0">
                        All major cards, UPI and net banking for monthly plans. Yearly and Enterprise contracts can also be paid by bank transfer against an invoice with net-30 terms.
                      </p>
                    </div>
                  </li>
                  <li className="bg-plain border-theme rounded-3 overflow-hidden">
                    <button
                      type="button"
                      className="d-flex align-items-center justify-content-between w-100 gap-3 px-3 py-3 border-0 bg-transparent text-start transition-base"
                      data-bs-toggle="collapse"
                      data-bs-target="#pricingFaq5"
                      aria-expanded="false"
                      aria-controls="pricingFaq5"
                    >
                      <span className="fs-md fw-semibold text-title">
                        Can I get an invoice for my company?
                      </span>
                      <i
                        className="dd-caret icon-18 flex-shrink-0 text-muted-2"
                        data-lucide="chevron-down"
                        aria-hidden="true"
                      />
                    </button>
                    {" "}
                    <div className="collapse" id="pricingFaq5">
                      <p className="fs-md text-body-2 px-3 pb-3 mb-0">
                        Every payment generates a tax invoice with your company name, address and registration number. Find them all under Billing history, or have them emailed to your finance team automatically.
                      </p>
                    </div>
                  </li>
                  <li className="bg-plain border-theme rounded-3 overflow-hidden">
                    <button
                      type="button"
                      className="d-flex align-items-center justify-content-between w-100 gap-3 px-3 py-3 border-0 bg-transparent text-start transition-base"
                      data-bs-toggle="collapse"
                      data-bs-target="#pricingFaq6"
                      aria-expanded="false"
                      aria-controls="pricingFaq6"
                    >
                      <span className="fs-md fw-semibold text-title">
                        Do you discount for education or non-profits?
                      </span>
                      <i
                        className="dd-caret icon-18 flex-shrink-0 text-muted-2"
                        data-lucide="chevron-down"
                        aria-hidden="true"
                      />
                    </button>
                    {" "}
                    <div className="collapse" id="pricingFaq6">
                      <p className="fs-md text-body-2 px-3 pb-3 mb-0">
                        Accredited schools, universities and registered non-profits get 40% off any plan. Send us proof of status and we will apply it to your workspace within two working days.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-4">
            <div className="on-dark bg-grad-theme position-relative overflow-hidden d-flex flex-column justify-content-between gap-3 h-100 p-3 p-md-4 rounded-4">
              <img
                src="/assets/images/rocket-b.svg"
                alt=""
                width="140"
                height="163"
                className="card-art position-absolute top-50 translate-middle-y pe-none"
              />
              <div className="position-relative">
                <span className="icon-box icon-box-lg bg-white bg-opacity-25 mb-3" aria-hidden="true">
                  <i data-lucide="handshake" />
                </span>
                <h3 className="fs-4 fw-bold text-title mb-2">
                  Need something custom?
                </h3>
                <p className="fs-md text-primary mb-0">
                  Tell us about your workload and we will put together a contract that matches it — usually within two working days.
                </p>
              </div>
              <ul className="position-relative list-unstyled d-flex flex-column gap-2 mb-0">
                <li className="d-flex align-items-start gap-2 fs-md text-primary">
                  <i className="icon-18 flex-shrink-0" data-lucide="badge-check" aria-hidden="true" />
                  Volume pricing for larger teams
                </li>
                <li className="d-flex align-items-start gap-2 fs-md text-primary">
                  <i className="icon-18 flex-shrink-0" data-lucide="shield-check" aria-hidden="true" />
                  {"Security review & DPA"}
                </li>
                <li className="d-flex align-items-start gap-2 fs-md text-primary">
                  <i className="icon-18 flex-shrink-0" data-lucide="database" aria-hidden="true" />
                  Migration and data onboarding
                </li>
              </ul>
              <div className="position-relative d-flex flex-wrap align-items-center gap-2">
                <button type="button" className="btn btn-accent d-inline-flex align-items-center gap-2 text-nowrap">
                  <i className="icon-18" data-lucide="calendar-check" aria-hidden="true" />
                  Book a demo
                </button>
                <button
                  type="button"
                  className="btn btn-accent-ghost d-inline-flex align-items-center gap-2 text-nowrap"
                >
                  <i className="icon-18" data-lucide="mail" aria-hidden="true" />
                  Email sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ========== FOOTER ========== */}
    </AppShell>
  );
}

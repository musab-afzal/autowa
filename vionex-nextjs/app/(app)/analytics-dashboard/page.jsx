/* Generated from the Vionex HTML theme by scripts/convert-html.mjs */
import AppShell from "@/components/AppShell";

export const metadata = {
  title: "Vionex — Analytics Dashboard",
  description: "Vionex enterprise admin dashboard — AI operations overview built with Bootstrap 5, CSS variables and a scalable design system.",
};

const scripts = [
    "/assets/js/jquery.min.js",
    "/assets/js/bootstrap.bundle.min.js",
    "/assets/js/lucide.min.js",
    "/assets/js/apexcharts.min.js",
    "/assets/js/jsvectormap.min.js",
    "/assets/js/jsvectormap-world.js",
    "/assets/js/dashboard.js",
    "/assets/js/charts.js",
    "/assets/js/maps.js",
  ];

export default function Page() {
  return (
    <AppShell
      scripts={scripts}
    >
      {/* ===== Page header ===== */}
      <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
        <h1 className="fs-4 fw-bold text-title mb-0">
          Analytics Dashboard
        </h1>
        <nav aria-label="breadcrumb" className="d-none d-md-block">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="/">
                Dashboard
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Analytics Dashboard
            </li>
          </ol>
        </nav>
      </div>
      {/* ===== Dashboard sections go here ===== */}
      {/* ===== Overview: welcome, key metrics & quick actions ===== */}
      <section className="mb-4" aria-labelledby="overview-title">
        <h2 id="overview-title" className="visually-hidden">
          Business overview
        </h2>
        <div className="row g-3">
          {/* Welcome banner */}
          <div className="col-12 col-xl-6 col-xxl-4">
            <div className="on-dark bg-nav d-flex flex-column h-100 overflow-hidden rounded-4">
              <div className="p-3 p-md-4">
                <h3 className="fs-3 fw-bold text-title mb-1">
                  Welcome back, Alex
                  {" "}
                  <span aria-hidden="true">
                    👋
                  </span>
                </h3>
                <p className="fw-medium text-primary mb-4">
                  Here’s what’s happening with your business today.
                </p>
                <div className="d-flex flex-wrap gap-2">
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn btn-accent d-inline-flex align-items-center gap-2"
                      id="overviewExport"
                      data-bs-toggle="dropdown"
                      data-bs-offset="0,8"
                      aria-expanded="false"
                    >
                      <i className="icon-20" data-lucide="download" aria-hidden="true" />
                      Export
                      {" "}
                      <i className="dd-caret icon-16" data-lucide="chevron-down" aria-hidden="true" />
                    </button>
                    {" "}
                    <ul className="dropdown-menu p-2" aria-labelledby="overviewExport">
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
                      className="btn btn-accent-soft d-inline-flex align-items-center gap-2"
                      id="overviewShare"
                      data-bs-toggle="dropdown"
                      data-bs-offset="0,8"
                      aria-expanded="false"
                    >
                      <i className="icon-20" data-lucide="link" aria-hidden="true" />
                      Share
                      {" "}
                      <i className="dd-caret icon-16" data-lucide="chevron-down" aria-hidden="true" />
                    </button>
                    {" "}
                    <ul className="dropdown-menu p-2" aria-labelledby="overviewShare">
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
              <img
                src="/assets/images/ai-research-art.png"
                alt=""
                width="2000"
                height="888"
                className="blend-luminosity w-100 h-auto mt-auto pe-none"
              />
            </div>
          </div>
          {/* Key metrics */}
          <div className="col-12 col-xl-6 col-xxl-5">
            <div className="row row-cols-1 row-cols-sm-2 g-3 h-100">
              <div className="col">
                <div className="position-relative overflow-hidden h-100 p-3 rounded-4 bg-wash-brand border-soft">
                  <span className="corner-orb tint-brand position-absolute rounded-circle pe-none" aria-hidden="true">
                    <img src="/assets/images/kpi-revenue.svg" alt="" width="64" height="64" className="orb-art" />
                  </span>
                  <div className="position-relative d-flex flex-column justify-content-end gap-2 h-100 pt-5">
                    <h3 className="fs-5 fw-medium text-primary pe-5 mb-0">
                      Total Revenue
                    </h3>
                    <div className="d-flex flex-column gap-2">
                      <span className="fs-2 fw-bold text-title">
                        <bdi>
                          $2,847,392
                        </bdi>
                      </span>
                      <span className="bg-plain d-inline-flex flex-wrap align-items-center gap-1 mw-fit p-1 pe-3 rounded-pill fs-md">
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
              </div>
              <div className="col">
                <div className="position-relative overflow-hidden h-100 p-3 rounded-4 bg-wash-brand border-soft">
                  <span className="corner-orb tint-brand position-absolute rounded-circle pe-none" aria-hidden="true">
                    <img src="/assets/images/kpi-orders.svg" alt="" width="64" height="64" className="orb-art" />
                  </span>
                  <div className="position-relative d-flex flex-column justify-content-end gap-2 h-100 pt-5">
                    <h3 className="fs-5 fw-medium text-primary pe-5 mb-0">
                      Total Orders
                    </h3>
                    <div className="d-flex flex-column gap-2">
                      <span className="fs-2 fw-bold text-title">
                        <bdi>
                          184,209
                        </bdi>
                      </span>
                      <span className="bg-plain d-inline-flex flex-wrap align-items-center gap-1 mw-fit p-1 pe-3 rounded-pill fs-md">
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
              </div>
              <div className="col">
                <div className="position-relative overflow-hidden h-100 p-3 rounded-4 bg-wash-brand border-soft">
                  <span className="corner-orb tint-brand position-absolute rounded-circle pe-none" aria-hidden="true">
                    <img src="/assets/images/kpi-users.svg" alt="" width="64" height="64" className="orb-art" />
                  </span>
                  <div className="position-relative d-flex flex-column justify-content-end gap-2 h-100 pt-5">
                    <h3 className="fs-5 fw-medium text-primary pe-5 mb-0">
                      Total Users
                    </h3>
                    <div className="d-flex flex-column gap-2">
                      <span className="fs-2 fw-bold text-title">
                        <bdi>
                          847,392
                        </bdi>
                      </span>
                      <span className="bg-plain d-inline-flex flex-wrap align-items-center gap-1 mw-fit p-1 pe-3 rounded-pill fs-md">
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
              </div>
              <div className="col">
                <div className="position-relative overflow-hidden h-100 p-3 rounded-4 bg-wash-brand border-soft">
                  <span className="corner-orb tint-brand position-absolute rounded-circle pe-none" aria-hidden="true">
                    <img src="/assets/images/kpi-conversion.svg" alt="" width="64" height="64" className="orb-art" />
                  </span>
                  <div className="position-relative d-flex flex-column justify-content-end gap-1 h-100 pt-5">
                    <h3 className="fs-5 fw-medium text-primary pe-5 mb-0">
                      Conversion Rate
                    </h3>
                    <div className="d-flex flex-column gap-2">
                      <span className="fs-2 fw-bold text-title">
                        <bdi>
                          12.8%
                        </bdi>
                      </span>
                      <span className="bg-plain d-inline-flex flex-wrap align-items-center gap-2 mw-fit p-1 pe-3 rounded-pill fs-md">
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
              </div>
            </div>
          </div>
          {/* Quick actions */}
          <div className="col-12 col-xxl-3">
            <div className="card bg-glass h-100">
              <div className="card-body d-flex flex-column">
                <h3 className="fs-4 fw-bold text-title mb-3">
                  Quick Actions
                </h3>
                <ul className="d-flex flex-column flex-grow-1 gap-2 mb-0">
                  <li className="flex-grow-1">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-between h-100 gap-2 px-3 py-2 rounded-3 tile-plain border-soft transition-base"
                    >
                      <div className="d-flex align-items-center gap-2">
                        <span className="icon-box bg-cat-violet text-white rounded-circle" aria-hidden="true">
                          <i data-lucide="file-chart-column" />
                        </span>
                        <span className="min-w-0 fs-md fw-bold text-truncate">
                          Create New Report
                        </span>
                      </div>
                      <i className="icon-14 flip-rtl flex-shrink-0" data-lucide="chevron-right" aria-hidden="true" />
                    </a>
                  </li>
                  <li className="flex-grow-1">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-between h-100 gap-2 px-3 py-2 rounded-3 tile-plain border-soft transition-base"
                    >
                      <div className="d-flex align-items-center gap-2">
                        <span className="icon-box bg-cat-blue text-white rounded-circle" aria-hidden="true">
                          <i data-lucide="download" />
                        </span>
                        <span className="min-w-0 fs-md fw-bold text-truncate">
                          Download Analytics
                        </span>
                      </div>
                      <i className="icon-14 flip-rtl flex-shrink-0" data-lucide="chevron-right" aria-hidden="true" />
                    </a>
                  </li>
                  <li className="flex-grow-1">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-between h-100 gap-2 px-3 py-2 rounded-3 tile-plain border-soft transition-base"
                    >
                      <div className="d-flex align-items-center gap-2">
                        <span className="icon-box bg-cat-emerald text-white rounded-circle" aria-hidden="true">
                          <i data-lucide="external-link" />
                        </span>
                        <span className="min-w-0 fs-md fw-bold text-truncate">
                          Invite Team Member
                        </span>
                      </div>
                      <i className="icon-14 flip-rtl flex-shrink-0" data-lucide="chevron-right" aria-hidden="true" />
                    </a>
                  </li>
                  <li className="flex-grow-1">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-between h-100 gap-2 px-3 py-2 rounded-3 tile-plain border-soft transition-base"
                    >
                      <div className="d-flex align-items-center gap-2">
                        <span className="icon-box bg-cat-orange text-white rounded-circle" aria-hidden="true">
                          <i data-lucide="user-round-plus" />
                        </span>
                        <span className="min-w-0 fs-md fw-bold text-truncate">
                          Add New Customer
                        </span>
                      </div>
                      <i className="icon-14 flip-rtl flex-shrink-0" data-lucide="chevron-right" aria-hidden="true" />
                    </a>
                  </li>
                  <li className="flex-grow-1">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-between h-100 gap-2 px-3 py-2 rounded-3 tile-plain border-soft transition-base"
                    >
                      <div className="d-flex align-items-center gap-2">
                        <span className="icon-box bg-cat-red text-white rounded-circle" aria-hidden="true">
                          <i data-lucide="file-text" />
                        </span>
                        <span className="min-w-0 fs-md fw-bold text-truncate">
                          Generate Invoice
                        </span>
                      </div>
                      <i className="icon-14 flip-rtl flex-shrink-0" data-lucide="chevron-right" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Traffic sources & goals tracking ===== */}
      <section className="mb-4" aria-labelledby="acquisition-title">
        <h2 id="acquisition-title" className="visually-hidden">
          Traffic sources and goals
        </h2>
        <div className="row g-3">
          {/* Traffic sources */}
          <div className="col-12 col-xxl-5">
            <div className="card bg-glass h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    Traffic Sources
                  </h3>
                  <a href="#" className="btn btn-accent">
                    View Live
                  </a>
                </div>
                <div className="row row-cols-1 row-cols-md-2 g-3">
                  <div className="col">
                    <div className="h-100 p-3 rounded-2 bg-plain border-theme">
                      <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
                        <span className="d-inline-flex align-items-center gap-2 min-w-0">
                          <span className="icon-box icon-box-sm tint-violet rounded-circle" aria-hidden="true">
                            <i data-lucide="search" />
                          </span>
                          <span className="fs-md fw-medium text-body-2">
                            Organic Search
                          </span>
                        </span>
                        <span className="d-inline-flex align-items-baseline flex-shrink-0 gap-2">
                          <span className="fs-sm fw-medium text-muted-2">
                            <bdi>
                              482K
                            </bdi>
                          </span>
                          <span className="fs-md fw-bold text-title">
                            <bdi>
                              38.4%
                            </bdi>
                          </span>
                        </span>
                      </div>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Organic Search share of traffic"
                        aria-valuenow="38.4"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="progress-bar bg-cat-violet" style={{ width: "38.4%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="h-100 p-3 rounded-2 bg-plain border-theme">
                      <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
                        <span className="d-inline-flex align-items-center gap-2 min-w-0">
                          <span className="icon-box icon-box-sm tint-amber rounded-circle" aria-hidden="true">
                            <i data-lucide="share-2" />
                          </span>
                          <span className="fs-md fw-medium text-body-2">
                            Social Media
                          </span>
                        </span>
                        <span className="d-inline-flex align-items-baseline flex-shrink-0 gap-2">
                          <span className="fs-sm fw-medium text-muted-2">
                            <bdi>
                              158K
                            </bdi>
                          </span>
                          <span className="fs-md fw-bold text-title">
                            <bdi>
                              12.6%
                            </bdi>
                          </span>
                        </span>
                      </div>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Social Media share of traffic"
                        aria-valuenow="12.6"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="progress-bar bg-cat-amber" style={{ width: "12.6%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="h-100 p-3 rounded-2 bg-plain border-theme">
                      <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
                        <span className="d-inline-flex align-items-center gap-2 min-w-0">
                          <span className="icon-box icon-box-sm tint-cyan rounded-circle" aria-hidden="true">
                            <i data-lucide="mouse-pointer-2" />
                          </span>
                          <span className="fs-md fw-medium text-body-2">
                            Direct
                          </span>
                        </span>
                        <span className="d-inline-flex align-items-baseline flex-shrink-0 gap-2">
                          <span className="fs-sm fw-medium text-muted-2">
                            <bdi>
                              311K
                            </bdi>
                          </span>
                          <span className="fs-md fw-bold text-title">
                            <bdi>
                              24.8%
                            </bdi>
                          </span>
                        </span>
                      </div>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Direct share of traffic"
                        aria-valuenow="24.8"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="progress-bar bg-cat-cyan" style={{ width: "24.8%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="h-100 p-3 rounded-2 bg-plain border-theme">
                      <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
                        <span className="d-inline-flex align-items-center gap-2 min-w-0">
                          <span className="icon-box icon-box-sm tint-rose rounded-circle" aria-hidden="true">
                            <i data-lucide="mail" />
                          </span>
                          <span className="fs-md fw-medium text-body-2">
                            Email
                          </span>
                        </span>
                        <span className="d-inline-flex align-items-baseline flex-shrink-0 gap-2">
                          <span className="fs-sm fw-medium text-muted-2">
                            <bdi>
                              75K
                            </bdi>
                          </span>
                          <span className="fs-md fw-bold text-title">
                            <bdi>
                              6%
                            </bdi>
                          </span>
                        </span>
                      </div>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Email share of traffic"
                        aria-valuenow="6"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="progress-bar bg-cat-rose" style={{ width: "6%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="h-100 p-3 rounded-2 bg-plain border-theme">
                      <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
                        <span className="d-inline-flex align-items-center gap-2 min-w-0">
                          <span className="icon-box icon-box-sm tint-emerald rounded-circle" aria-hidden="true">
                            <i data-lucide="link-2" />
                          </span>
                          <span className="fs-md fw-medium text-body-2">
                            Referral
                          </span>
                        </span>
                        <span className="d-inline-flex align-items-baseline flex-shrink-0 gap-2">
                          <span className="fs-sm fw-medium text-muted-2">
                            <bdi>
                              228K
                            </bdi>
                          </span>
                          <span className="fs-md fw-bold text-title">
                            <bdi>
                              18.2%
                            </bdi>
                          </span>
                        </span>
                      </div>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Referral share of traffic"
                        aria-valuenow="18.2"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="progress-bar bg-cat-emerald" style={{ width: "18.2%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="h-100 p-3 rounded-2 bg-plain border-theme">
                      <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
                        <span className="d-inline-flex align-items-center gap-2 min-w-0">
                          <span className="icon-box icon-box-sm tint-amber rounded-circle" aria-hidden="true">
                            <img
                              src="/assets/images/logo-adsense.svg"
                              alt=""
                              width="20"
                              height="20"
                              className="brand-art"
                            />
                          </span>
                          <span className="fs-md fw-medium text-body-2">
                            Google Ad
                          </span>
                        </span>
                        <span className="d-inline-flex align-items-baseline flex-shrink-0 gap-2">
                          <span className="fs-sm fw-medium text-muted-2">
                            <bdi>
                              228K
                            </bdi>
                          </span>
                          <span className="fs-md fw-bold text-title">
                            <bdi>
                              18.2%
                            </bdi>
                          </span>
                        </span>
                      </div>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Google Advertisement share of traffic"
                        aria-valuenow="18.2"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="progress-bar bg-cat-orange" style={{ width: "18.2%" }} />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="tint-success d-flex align-items-center gap-2 mt-3 mb-0 px-3 py-2 rounded-pill fs-md">
                  <span className="legend-dot legend-dot-sm bg-cat-emerald" aria-hidden="true" />
                  Organic search leads with
                  <strong className="fw-bold">
                    38.4%
                  </strong>
                  — up 6.2% from last month
                </p>
              </div>
            </div>
          </div>
          {/* Goals tracking */}
          <div className="col-12 col-xxl-7">
            <div className="card bg-glass h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    Goals Tracking
                  </h3>
                  <button type="button" className="btn btn-accent">
                    Set Goal
                  </button>
                </div>
                <div className="row row-cols-1 row-cols-md-2 flex-grow-1 g-3">
                  <div className="col">
                    <div className="tint-violet border-current d-flex flex-column justify-content-between h-100 gap-3 p-3 rounded-2">
                      <div className="d-flex align-items-start justify-content-between gap-2">
                        <span className="d-inline-flex align-items-center gap-2 min-w-0">
                          <span
                            className="icon-box icon-box-sm bg-cat-violet text-white rounded-circle"
                            aria-hidden="true"
                          >
                            <i data-lucide="circle-dollar-sign" />
                          </span>
                          <span className="d-flex flex-column min-w-0">
                            <span className="fs-6 fw-semibold text-title text-truncate">
                              Revenue Goal
                            </span>
                            <span className="fs-md text-body-2 text-truncate">
                              Due: Dec 31, 2025
                            </span>
                          </span>
                        </span>
                        <span className="bg-plain flex-shrink-0 px-2 py-1 rounded-pill fs-sm fw-bold">
                          <bdi>
                            81.4%
                          </bdi>
                        </span>
                      </div>
                      <div>
                        <div className="d-flex flex-wrap align-items-baseline justify-content-between gap-2 mb-2">
                          <span className="fs-md fw-bold text-title">
                            <bdi>
                              $2.85M
                            </bdi>
                          </span>
                          <span className="fs-md text-body-2">
                            <bdi>
                              of $3.50M
                            </bdi>
                          </span>
                        </div>
                        <div
                          className="progress bg-plain"
                          role="progressbar"
                          aria-label="Revenue Goal progress"
                          aria-valuenow="81.4"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div className="progress-bar bg-cat-violet" style={{ width: "81.4%" }} />
                        </div>
                        <p className="fs-md text-body-2 mt-2 mb-0">
                          <span className="fw-semibold text-danger">
                            <bdi>
                              $0.65M
                            </bdi>
                          </span>
                          {" "}
                          remaining to goal
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="tint-emerald border-current d-flex flex-column justify-content-between h-100 gap-3 p-3 rounded-2">
                      <div className="d-flex align-items-start justify-content-between gap-2">
                        <span className="d-inline-flex align-items-center gap-2 min-w-0">
                          <span
                            className="icon-box icon-box-sm bg-cat-emerald text-white rounded-circle"
                            aria-hidden="true"
                          >
                            <i data-lucide="trending-up" />
                          </span>
                          <span className="d-flex flex-column min-w-0">
                            <span className="fs-6 fw-semibold text-title text-truncate">
                              Lead Goal
                            </span>
                            <span className="fs-md text-body-2 text-truncate">
                              Due: Dec 31, 2025
                            </span>
                          </span>
                        </span>
                        <span className="bg-plain flex-shrink-0 px-2 py-1 rounded-pill fs-sm fw-bold">
                          <bdi>
                            73.7%
                          </bdi>
                        </span>
                      </div>
                      <div>
                        <div className="d-flex flex-wrap align-items-baseline justify-content-between gap-2 mb-2">
                          <span className="fs-md fw-bold text-title">
                            <bdi>
                              18,420
                            </bdi>
                          </span>
                          <span className="fs-md text-body-2">
                            <bdi>
                              of 25,000
                            </bdi>
                          </span>
                        </div>
                        <div
                          className="progress bg-plain"
                          role="progressbar"
                          aria-label="Lead Goal progress"
                          aria-valuenow="73.7"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div className="progress-bar bg-cat-emerald" style={{ width: "73.7%" }} />
                        </div>
                        <p className="fs-md text-body-2 mt-2 mb-0">
                          <span className="fw-semibold text-danger">
                            <bdi>
                              6,580
                            </bdi>
                          </span>
                          {" "}
                          remaining to goal
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="tint-cyan border-current d-flex flex-column justify-content-between h-100 gap-3 p-3 rounded-2">
                      <div className="d-flex align-items-start justify-content-between gap-2">
                        <span className="d-inline-flex align-items-center gap-2 min-w-0">
                          <span
                            className="icon-box icon-box-sm bg-cat-cyan text-white rounded-circle"
                            aria-hidden="true"
                          >
                            <i data-lucide="users-round" />
                          </span>
                          <span className="d-flex flex-column min-w-0">
                            <span className="fs-6 fw-semibold text-title text-truncate">
                              User Growth
                            </span>
                            <span className="fs-md text-body-2 text-truncate">
                              Due: Dec 31, 2025
                            </span>
                          </span>
                        </span>
                        <span className="bg-plain flex-shrink-0 px-2 py-1 rounded-pill fs-sm fw-bold">
                          <bdi>
                            85.6%
                          </bdi>
                        </span>
                      </div>
                      <div>
                        <div className="d-flex flex-wrap align-items-baseline justify-content-between gap-2 mb-2">
                          <span className="fs-md fw-bold text-title">
                            <bdi>
                              42,800
                            </bdi>
                          </span>
                          <span className="fs-md text-body-2">
                            <bdi>
                              of 50,000
                            </bdi>
                          </span>
                        </div>
                        <div
                          className="progress bg-plain"
                          role="progressbar"
                          aria-label="User Growth progress"
                          aria-valuenow="85.6"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div className="progress-bar bg-cat-cyan" style={{ width: "85.6%" }} />
                        </div>
                        <p className="fs-md text-body-2 mt-2 mb-0">
                          <span className="fw-semibold text-danger">
                            <bdi>
                              7,200
                            </bdi>
                          </span>
                          {" "}
                          remaining to goal
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="tint-amber border-current d-flex flex-column justify-content-between h-100 gap-3 p-3 rounded-2">
                      <div className="d-flex align-items-start justify-content-between gap-2">
                        <span className="d-inline-flex align-items-center gap-2 min-w-0">
                          <span
                            className="icon-box icon-box-sm bg-cat-amber text-white rounded-circle"
                            aria-hidden="true"
                          >
                            <i data-lucide="target" />
                          </span>
                          <span className="d-flex flex-column min-w-0">
                            <span className="fs-6 fw-semibold text-title text-truncate">
                              Conversion Goal
                            </span>
                            <span className="fs-md text-body-2 text-truncate">
                              Due: Dec 31, 2025
                            </span>
                          </span>
                        </span>
                        <span className="bg-plain flex-shrink-0 px-2 py-1 rounded-pill fs-sm fw-bold">
                          <bdi>
                            76.8%
                          </bdi>
                        </span>
                      </div>
                      <div>
                        <div className="d-flex flex-wrap align-items-baseline justify-content-between gap-2 mb-2">
                          <span className="fs-md fw-bold text-title">
                            <bdi>
                              3,840
                            </bdi>
                          </span>
                          <span className="fs-md text-body-2">
                            <bdi>
                              of 5,000
                            </bdi>
                          </span>
                        </div>
                        <div
                          className="progress bg-plain"
                          role="progressbar"
                          aria-label="Conversion Goal progress"
                          aria-valuenow="76.8"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div className="progress-bar bg-cat-amber" style={{ width: "76.8%" }} />
                        </div>
                        <p className="fs-md text-body-2 mt-2 mb-0">
                          <span className="fw-semibold text-danger">
                            <bdi>
                              1,160
                            </bdi>
                          </span>
                          {" "}
                          remaining to goal
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Revenue, sales & campaign performance ===== */}
      <section className="mb-4" aria-labelledby="performance-title">
        <h2 id="performance-title" className="visually-hidden">
          Revenue, sales and campaign performance
        </h2>
        <div className="row g-3">
          {/* Revenue analytics */}
          <div className="col-12 col-xl-6 col-xxl-4">
            <div className="card bg-glass h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    Revenue Analytics
                  </h3>
                  <div
                    className="nav nav-pills seg-toggle flex-nowrap gap-1 p-1 rounded-pill bg-soft"
                    role="group"
                    aria-label="Revenue analytics time range"
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
                <div id="revenueAnalyticsChart" className="chart-area flex-grow-1" />
                <div className="bg-plain border-theme d-flex flex-wrap align-items-center justify-content-between gap-3 mt-3 p-3 rounded-3">
                  <div>
                    <p className="fs-5 fw-bold text-title mb-1">
                      <bdi>
                        $6.00M
                      </bdi>
                    </p>
                    <p className="d-flex flex-wrap align-items-center gap-2 fs-xs mb-0">
                      <span className="text-success d-inline-flex align-items-center gap-1 fw-semibold">
                        <i className="icon-12" data-lucide="arrow-up" aria-hidden="true" />
                        <span dir="ltr">
                          18.2%
                        </span>
                      </span>
                      <span className="text-muted-2">
                        Total Revenue
                      </span>
                    </p>
                  </div>
                  <span className="vr d-none d-sm-block" aria-hidden="true" />
                  <div>
                    <p className="fs-5 fw-bold text-title mb-1">
                      <bdi>
                        $3.41M
                      </bdi>
                    </p>
                    <p className="d-flex flex-wrap align-items-center gap-2 fs-xs mb-0">
                      <span className="text-danger d-inline-flex align-items-center gap-1 fw-semibold">
                        <i className="icon-12" data-lucide="arrow-up" aria-hidden="true" />
                        <span dir="ltr">
                          12.4%
                        </span>
                      </span>
                      <span className="text-muted-2">
                        Expenses
                      </span>
                    </p>
                  </div>
                  <span className="vr d-none d-sm-block" aria-hidden="true" />
                  <div>
                    <p className="fs-5 fw-bold text-success mb-1">
                      <bdi>
                        $2.59M
                      </bdi>
                    </p>
                    <p className="fs-xs text-muted-2 mb-0">
                      Net Profit (43.2%)
                    </p>
                  </div>
                </div>
                <ul className="d-flex flex-wrap align-items-center gap-3 fs-md text-body-2 mt-3 mb-0">
                  <li className="d-inline-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-violet" />
                    Revenue
                  </li>
                  <li className="d-inline-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-amber" />
                    Expenses
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Sales performance */}
          <div className="col-12 col-xl-6 col-xxl-4">
            <div className="card bg-glass h-100">
              <div className="card-body d-flex flex-column">
                <h3 className="fs-5 fw-bold text-title mb-3">
                  Sales Performance
                </h3>
                <div id="salesPerformanceChart" className="chart-area flex-grow-1" />
                <ul className="d-flex flex-wrap align-items-center gap-3 fs-md text-body-2 mt-3 mb-0">
                  <li className="d-inline-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-violet" />
                    Electronics
                  </li>
                  <li className="d-inline-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-cyan" />
                    Clothing
                  </li>
                  <li className="d-inline-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-emerald" />
                    Software
                  </li>
                  <li className="d-inline-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-amber" />
                    Services
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Monthly campaign state */}
          <div className="col-12 col-xxl-4">
            <div className="card bg-glass h-100">
              <div className="card-body d-flex flex-column">
                <h3 className="fs-5 fw-bold text-title mb-3">
                  Monthly Campaign State
                </h3>
                <ul className="d-flex flex-column flex-grow-1 gap-2 mb-0">
                  <li className="bg-plain border-theme d-flex flex-wrap align-items-center justify-content-between flex-grow-1 gap-2 p-2 rounded-3">
                    <span className="d-inline-flex align-items-center gap-3 min-w-0">
                      <span className="icon-box tint-violet rounded-circle" aria-hidden="true">
                        <i data-lucide="mail-open" />
                      </span>
                      <span className="fs-6 fw-semibold text-title text-truncate">
                        Email
                      </span>
                    </span>
                    <span className="d-inline-flex align-items-baseline flex-shrink-0 gap-2">
                      <span className="fs-6 fw-medium text-body-2">
                        <bdi>
                          6,200
                        </bdi>
                      </span>
                      <span className="fs-5 fw-bold text-success">
                        <bdi>
                          0.3%
                        </bdi>
                      </span>
                    </span>
                  </li>
                  <li className="bg-plain border-theme d-flex flex-wrap align-items-center justify-content-between flex-grow-1 gap-2 p-2 rounded-3">
                    <span className="d-inline-flex align-items-center gap-3 min-w-0">
                      <span className="icon-box tint-amber rounded-circle" aria-hidden="true">
                        <i data-lucide="mouse-pointer-click" />
                      </span>
                      <span className="fs-6 fw-semibold text-title text-truncate">
                        Clicked
                      </span>
                    </span>
                    <span className="d-inline-flex align-items-baseline flex-shrink-0 gap-2">
                      <span className="fs-6 fw-medium text-body-2">
                        <bdi>
                          4,860
                        </bdi>
                      </span>
                      <span className="fs-5 fw-bold text-danger">
                        <bdi>
                          1.3%
                        </bdi>
                      </span>
                    </span>
                  </li>
                  <li className="bg-plain border-theme d-flex flex-wrap align-items-center justify-content-between flex-grow-1 gap-2 p-2 rounded-3">
                    <span className="d-inline-flex align-items-center gap-3 min-w-0">
                      <span className="icon-box tint-blue rounded-circle" aria-hidden="true">
                        <i data-lucide="calendar-check" />
                      </span>
                      <span className="fs-6 fw-semibold text-title text-truncate">
                        Subscribe
                      </span>
                    </span>
                    <span className="d-inline-flex align-items-baseline flex-shrink-0 gap-2">
                      <span className="fs-6 fw-medium text-body-2">
                        <bdi>
                          5,175
                        </bdi>
                      </span>
                      <span className="fs-5 fw-bold text-success">
                        <bdi>
                          0.3%
                        </bdi>
                      </span>
                    </span>
                  </li>
                  <li className="bg-plain border-theme d-flex flex-wrap align-items-center justify-content-between flex-grow-1 gap-2 p-2 rounded-3">
                    <span className="d-inline-flex align-items-center gap-3 min-w-0">
                      <span className="icon-box tint-emerald rounded-circle" aria-hidden="true">
                        <i data-lucide="shield-alert" />
                      </span>
                      <span className="fs-6 fw-semibold text-title text-truncate">
                        Complaints
                      </span>
                    </span>
                    <span className="d-inline-flex align-items-baseline flex-shrink-0 gap-2">
                      <span className="fs-6 fw-medium text-body-2">
                        <bdi>
                          3,780
                        </bdi>
                      </span>
                      <span className="fs-5 fw-bold text-success">
                        <bdi>
                          0.3%
                        </bdi>
                      </span>
                    </span>
                  </li>
                  <li className="bg-plain border-theme d-flex flex-wrap align-items-center justify-content-between flex-grow-1 gap-2 p-2 rounded-3">
                    <span className="d-inline-flex align-items-center gap-3 min-w-0">
                      <span className="icon-box tint-rose rounded-circle" aria-hidden="true">
                        <i data-lucide="user-round-minus" />
                      </span>
                      <span className="fs-6 fw-semibold text-title text-truncate">
                        Unsubscribe
                      </span>
                    </span>
                    <span className="d-inline-flex align-items-baseline flex-shrink-0 gap-2">
                      <span className="fs-6 fw-medium text-body-2">
                        <bdi>
                          4,120
                        </bdi>
                      </span>
                      <span className="fs-5 fw-bold text-success">
                        <bdi>
                          0.3%
                        </bdi>
                      </span>
                    </span>
                  </li>
                  <li className="bg-plain border-theme d-flex flex-wrap align-items-center justify-content-between flex-grow-1 gap-2 p-2 rounded-3">
                    <span className="d-inline-flex align-items-center gap-3 min-w-0">
                      <span className="icon-box tint-blue rounded-circle" aria-hidden="true">
                        <i data-lucide="eye" />
                      </span>
                      <span className="fs-6 fw-semibold text-title text-truncate">
                        Views
                      </span>
                    </span>
                    <span className="d-inline-flex align-items-baseline flex-shrink-0 gap-2">
                      <span className="fs-6 fw-medium text-body-2">
                        <bdi>
                          5,175
                        </bdi>
                      </span>
                      <span className="fs-5 fw-bold text-success">
                        <bdi>
                          0.3%
                        </bdi>
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Device split & visitor sources ===== */}
      <section className="mb-4" aria-labelledby="audience-title">
        <h2 id="audience-title" className="visually-hidden">
          Device split and visitor sources
        </h2>
        <div className="row g-3">
          {/* Device analytics */}
          <div className="col-12 col-xxl-5">
            <div className="card bg-glass h-100">
              <div className="card-body d-flex flex-column">
                <h3 className="fs-5 fw-bold text-title mb-3">
                  Device Analytics
                </h3>
                <div className="row align-items-center g-3">
                  <div className="col-12 col-sm-6 col-xxl-5">
                    <div className="position-relative">
                      <div id="deviceAnalyticsChart" className="chart-area" />
                      <p className="chart-center fs-1 fw-bold text-title mb-0">
                        <bdi>
                          54.2%
                        </bdi>
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-xxl-7">
                    <ul className="d-flex flex-column gap-2 mb-0">
                      <li className="bg-plain border-theme d-flex flex-wrap align-items-center justify-content-between gap-2 p-3 rounded-2">
                        <span className="d-flex flex-column gap-2 min-w-0">
                          <span className="icon-box bg-cat-emerald text-white rounded-circle" aria-hidden="true">
                            <i data-lucide="monitor" />
                          </span>
                          <span className="d-flex flex-column min-w-0">
                            <span className="fs-5 fw-semibold text-title text-truncate">
                              Desktop Analytics
                            </span>
                            <span className="fs-md text-muted-2">
                              <bdi>
                                693K users
                              </bdi>
                            </span>
                          </span>
                        </span>
                        <span className="fs-2 fw-bold text-title flex-shrink-0">
                          <bdi>
                            20%
                          </bdi>
                        </span>
                      </li>
                      <li className="bg-plain border-theme d-flex flex-wrap align-items-center justify-content-between gap-2 p-3 rounded-2">
                        <span className="d-flex flex-column gap-2 min-w-0">
                          <span className="icon-box bg-cat-orange text-white rounded-circle" aria-hidden="true">
                            <i data-lucide="smartphone" />
                          </span>
                          <span className="d-flex flex-column min-w-0">
                            <span className="fs-5 fw-semibold text-title text-truncate">
                              Mobile Analytics
                            </span>
                            <span className="fs-md text-muted-2">
                              <bdi>
                                693K users
                              </bdi>
                            </span>
                          </span>
                        </span>
                        <span className="fs-2 fw-bold text-title flex-shrink-0">
                          <bdi>
                            50%
                          </bdi>
                        </span>
                      </li>
                      <li className="bg-plain border-theme d-flex flex-wrap align-items-center justify-content-between gap-2 p-3 rounded-2">
                        <span className="d-flex flex-column gap-2 min-w-0">
                          <span className="icon-box bg-cat-violet text-white rounded-circle" aria-hidden="true">
                            <i data-lucide="tablet" />
                          </span>
                          <span className="d-flex flex-column min-w-0">
                            <span className="fs-5 fw-semibold text-title text-truncate">
                              Tablet Analytics
                            </span>
                            <span className="fs-md text-muted-2">
                              <bdi>
                                693K users
                              </bdi>
                            </span>
                          </span>
                        </span>
                        <span className="fs-2 fw-bold text-title flex-shrink-0">
                          <bdi>
                            30%
                          </bdi>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Source visitors */}
          <div className="col-12 col-xxl-7">
            <div className="card bg-glass h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    Source Visitors
                  </h3>
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn btn-outline-soft d-inline-flex align-items-center gap-2"
                      id="sourceVisitorsRange"
                      data-bs-toggle="dropdown"
                      data-bs-offset="0,8"
                      aria-expanded="false"
                    >
                      This Month
                      {" "}
                      <i data-lucide="chevron-down" className="dd-caret icon-18" aria-hidden="true" />
                    </button>
                    {" "}
                    <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="sourceVisitorsRange">
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
                <div>
                  <p className="fs-1 fw-bold fst-italic text-title mb-0">
                    <bdi>
                      524,756
                    </bdi>
                  </p>
                  <p className="fs-5 text-body-2 mb-0">
                    Total Platform Visitors
                  </p>
                </div>
                <ul className="scroll-row stat-rail d-flex align-items-end gap-3 flex-grow-1 mt-3 mb-0">
                  <li className="d-flex flex-column justify-content-end flex-grow-1 h-100">
                    <div
                      className="bg-pastel-amber text-ink d-flex flex-column align-items-center justify-content-end stat-rail-fill gap-1 px-3 pt-4 pb-3 rounded-top-pill"
                      style={{ height: "50%" }}
                    >
                      <img
                        src="/assets/images/logo-tiktok.svg"
                        alt=""
                        width="48"
                        height="48"
                        className="brand-logo mb-1 pe-none"
                      />
                      <span className="fs-5">
                        TikTok
                      </span>
                      <span className="fs-1 fw-semibold">
                        <bdi>
                          50%
                        </bdi>
                      </span>
                    </div>
                  </li>
                  <li className="d-flex flex-column justify-content-end flex-grow-1 h-100">
                    <div
                      className="bg-pastel-rose text-ink d-flex flex-column align-items-center justify-content-end stat-rail-fill gap-1 px-3 pt-4 pb-3 rounded-top-pill"
                      style={{ height: "66%" }}
                    >
                      <img
                        src="/assets/images/logo-instagram.svg"
                        alt=""
                        width="48"
                        height="48"
                        className="brand-logo mb-1 pe-none"
                      />
                      <span className="fs-5">
                        Instagram
                      </span>
                      <span className="fs-1 fw-semibold">
                        <bdi>
                          66%
                        </bdi>
                      </span>
                    </div>
                  </li>
                  <li className="d-flex flex-column justify-content-end flex-grow-1 h-100">
                    <div
                      className="bg-pastel-cyan text-ink d-flex flex-column align-items-center justify-content-end stat-rail-fill gap-1 px-3 pt-4 pb-3 rounded-top-pill"
                      style={{ height: "82%" }}
                    >
                      <img
                        src="/assets/images/logo-facebook.svg"
                        alt=""
                        width="48"
                        height="48"
                        className="brand-logo mb-1 pe-none"
                      />
                      <span className="fs-5">
                        Facebook
                      </span>
                      <span className="fs-1 fw-semibold">
                        <bdi>
                          82%
                        </bdi>
                      </span>
                    </div>
                  </li>
                  <li className="d-flex flex-column justify-content-end flex-grow-1 h-100">
                    <div
                      className="bg-pastel-emerald text-ink d-flex flex-column align-items-center justify-content-end stat-rail-fill gap-1 px-3 pt-4 pb-3 rounded-top-pill"
                      style={{ height: "96%" }}
                    >
                      <img
                        src="/assets/images/logo-chrome.svg"
                        alt=""
                        width="48"
                        height="48"
                        className="brand-logo mb-1 pe-none"
                      />
                      <span className="fs-5">
                        Website
                      </span>
                      <span className="fs-1 fw-semibold">
                        <bdi>
                          96%
                        </bdi>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Audience engagement & recent activity ===== */}
      <section className="mb-4" aria-labelledby="engagement-title">
        <h2 id="engagement-title" className="visually-hidden">
          Audience engagement and recent activity
        </h2>
        <div className="row g-3">
          {/* Audience analytics */}
          <div className="col-12 col-xxl-7">
            <div className="card bg-glass h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
                  <div>
                    <h3 className="fs-5 fw-bold text-title mb-1">
                      Audience Analytics
                    </h3>
                    <p className="fs-md text-muted-2 mb-0">
                      Built for Smarter Business Intelligence.
                    </p>
                  </div>
                  <div className="bg-primary-soft d-flex flex-wrap align-items-center justify-content-between flex-grow-1 gap-3 p-3 rounded-2">
                    <div>
                      <p className="fs-5 fw-bold text-title mb-0">
                        <bdi>
                          4m 32s
                        </bdi>
                      </p>
                      <p className="fs-md text-muted-2 mb-1">
                        Avg. Session
                      </p>
                      <p className="text-success d-flex align-items-center gap-1 fs-xs fw-semibold mb-0">
                        <i className="icon-12" data-lucide="arrow-up" aria-hidden="true" />
                        <span dir="ltr">
                          +18.2%
                        </span>
                      </p>
                    </div>
                    <span className="vr d-none d-sm-block" aria-hidden="true" />
                    <div>
                      <p className="fs-5 fw-bold text-title mb-0">
                        <bdi>
                          38.4%
                        </bdi>
                      </p>
                      <p className="fs-md text-muted-2 mb-1">
                        Bounce Rate
                      </p>
                      <p className="text-success d-flex align-items-center gap-1 fs-xs fw-semibold mb-0">
                        <i className="icon-12" data-lucide="arrow-up" aria-hidden="true" />
                        <span dir="ltr">
                          +5%
                        </span>
                      </p>
                    </div>
                    <span className="vr d-none d-sm-block" aria-hidden="true" />
                    <div>
                      <p className="fs-5 fw-bold text-title mb-0">
                        <bdi>
                          6.8
                        </bdi>
                      </p>
                      <p className="fs-md text-muted-2 mb-1">
                        Pages/Session
                      </p>
                      <p className="text-success d-flex align-items-center gap-1 fs-xs fw-semibold mb-0">
                        <i className="icon-12" data-lucide="arrow-up" aria-hidden="true" />
                        <span dir="ltr">
                          +8%
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row row-cols-1 row-cols-md-2 flex-grow-1 g-3">
                  <div className="col">
                    <div className="bg-plain border-theme h-100 p-3 rounded-3">
                      <h4 className="fs-6 fw-medium text-primary mb-3">
                        User Types
                      </h4>
                      <div className="row align-items-center g-3">
                        <div className="col-12 col-sm-6">
                          <div className="position-relative">
                            <div id="userTypesChart" className="chart-area" />
                            <span className="chart-center">
                              <span className="d-block fs-5 fw-bold text-title">
                                <bdi>
                                  1.28M
                                </bdi>
                              </span>
                              <span className="d-block fs-xs fw-medium text-uppercase text-muted-2">
                                Total
                              </span>
                            </span>
                          </div>
                        </div>
                        <div className="col-12 col-sm-6">
                          <ul className="d-flex flex-column gap-2 fs-xs mb-0">
                            <li className="d-flex align-items-center justify-content-between gap-2">
                              <span className="d-inline-flex align-items-center gap-2 min-w-0 text-muted-2">
                                <span className="legend-dot bg-cat-violet" />
                                New Users
                              </span>
                              <span className="fw-semibold text-title flex-shrink-0">
                                <bdi>
                                  58.4%
                                </bdi>
                              </span>
                            </li>
                            <li className="d-flex align-items-center justify-content-between gap-2">
                              <span className="d-inline-flex align-items-center gap-2 min-w-0 text-muted-2">
                                <span className="legend-dot bg-cat-cyan" />
                                Returning
                              </span>
                              <span className="fw-semibold text-title flex-shrink-0">
                                <bdi>
                                  31.2%
                                </bdi>
                              </span>
                            </li>
                            <li className="d-flex align-items-center justify-content-between gap-2">
                              <span className="d-inline-flex align-items-center gap-2 min-w-0 text-muted-2">
                                <span className="legend-dot bg-cat-neutral" />
                                Anonymous
                              </span>
                              <span className="fw-semibold text-title flex-shrink-0">
                                <bdi>
                                  10.4%
                                </bdi>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="bg-plain border-theme h-100 p-3 rounded-3">
                      <h4 className="fs-6 fw-medium text-primary mb-3">
                        Sessions by Channel
                      </h4>
                      <div className="row align-items-center g-3">
                        <div className="col-12 col-sm-6">
                          <div className="position-relative">
                            <div id="sessionsByChannelChart" className="chart-area" />
                            <span className="chart-center">
                              <span className="d-block fs-5 fw-bold text-title">
                                <bdi>
                                  1.28M
                                </bdi>
                              </span>
                              <span className="d-block fs-xs fw-medium text-uppercase text-muted-2">
                                Total
                              </span>
                            </span>
                          </div>
                        </div>
                        <div className="col-12 col-sm-6">
                          <ul className="d-flex flex-column gap-2 fs-xs mb-0">
                            <li className="d-flex align-items-center justify-content-between gap-2">
                              <span className="d-inline-flex align-items-center gap-2 min-w-0 text-muted-2">
                                <span className="legend-dot bg-cat-violet" />
                                Mobile App
                              </span>
                              <span className="fw-semibold text-title flex-shrink-0">
                                <bdi>
                                  58.4%
                                </bdi>
                              </span>
                            </li>
                            <li className="d-flex align-items-center justify-content-between gap-2">
                              <span className="d-inline-flex align-items-center gap-2 min-w-0 text-muted-2">
                                <span className="legend-dot bg-cat-emerald" />
                                Web Browser
                              </span>
                              <span className="fw-semibold text-title flex-shrink-0">
                                <bdi>
                                  31.2%
                                </bdi>
                              </span>
                            </li>
                            <li className="d-flex align-items-center justify-content-between gap-2">
                              <span className="d-inline-flex align-items-center gap-2 min-w-0 text-muted-2">
                                <span className="legend-dot bg-cat-amber" />
                                API
                              </span>
                              <span className="fw-semibold text-title flex-shrink-0">
                                <bdi>
                                  10.4%
                                </bdi>
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
          </div>
          {/* Recent activity */}
          <div className="col-12 col-xxl-5">
            <div className="card bg-glass h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <div>
                    <h3 className="fs-5 fw-bold text-title mb-1">
                      Recent Activity
                    </h3>
                    <p className="fs-md text-muted-2 mb-0">
                      Latest platform events
                    </p>
                  </div>
                  <a href="#" className="btn btn-accent fw-semibold">
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
                  <li className="d-flex flex-wrap align-items-center gap-3">
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
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Recent transactions ===== */}
      <section className="mb-4" aria-labelledby="transactions-title">
        <h2 id="transactions-title" className="visually-hidden">
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
                    id="transactionSearch"
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
                    id="transactionExport"
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
                  <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="transactionExport">
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
                    className="btn btn-primary w-100 d-inline-flex flex-nowrap align-items-center justify-content-center gap-2 text-nowrap"
                    id="transactionShare"
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
                  <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="transactionShare">
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
                  Recent platform transactions
                </caption>
                <thead>
                  <tr>
                    <th scope="col">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="transactionSelectAll"
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

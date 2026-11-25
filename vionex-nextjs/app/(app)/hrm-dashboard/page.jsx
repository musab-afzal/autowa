/* Generated from the Vionex HTML theme by scripts/convert-html.mjs */
import AppShell from "@/components/AppShell";

export const metadata = {
  title: "Vionex — HRM Dashboard",
  description: "Vionex enterprise admin dashboard — HRM operations overview built with Bootstrap 5, CSS variables and a scalable design system.",
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
          HRM Dashboard
        </h1>
        <nav aria-label="breadcrumb" className="d-none d-md-block">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="/">
                Dashboard
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              HRM Dashboard
            </li>
          </ol>
        </nav>
      </div>
      {/* ===== Dashboard sections go here ===== */}
      {/* ===== Welcome & workforce overview ===== */}
      <section className="mb-4" aria-labelledby="hrm-welcome-title">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
          <div className="min-w-0">
            <h2 id="hrm-welcome-title" className="fs-2 fw-bold text-title mb-1">
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
          <div className="d-flex align-items-center gap-2">
            <span className="badge-soft tint-emerald border-current d-inline-flex align-items-center gap-2">
              {" "}
              <span className="legend-dot bg-cat-emerald" aria-hidden="true" />
              Live
              {" "}
            </span>
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-outline-soft btn-18 rounded-circle"
                id="hrmOverviewMenu"
                data-bs-toggle="dropdown"
                data-bs-offset="0,8"
                aria-expanded="false"
                aria-label="Overview options"
              >
                <i data-lucide="ellipsis-vertical" />
              </button>
              {" "}
              <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="hrmOverviewMenu">
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="refresh-cw" />
                    Refresh data
                  </button>
                </li>
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="download" />
                    Export overview
                  </button>
                </li>
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="settings-2" />
                    Customise widgets
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row g-3">
          {/* Headcount hero + quick actions */}
          <div className="col-12 col-xxl-5">
            <div className="d-flex flex-column gap-3 h-100">
              <div className="on-dark bg-grad-slate rounded-4 d-flex flex-column justify-content-between flex-grow-1 p-3 p-md-4">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                  <h3 className="fs-4 fw-bold text-title mb-0">
                    Total Employees
                  </h3>
                  <span className="bg-soft rounded-pill d-inline-flex align-items-center gap-2 p-1 pe-3">
                    <span className="badge-soft tint-success d-inline-flex align-items-center gap-1 px-2">
                      {" "}
                      <i className="icon-16 flip-rtl" data-lucide="trending-up" aria-hidden="true" />
                      <bdi>
                        +10%
                      </bdi>
                      {" "}
                    </span>
                    <span className="fs-md text-title">
                      Than last month
                    </span>
                  </span>
                </div>
                <p className="display-1 fw-bold text-title lh-1 mt-3 mb-0">
                  <bdi>
                    1,392
                  </bdi>
                </p>
              </div>
              <ul className="list-unstyled row row-cols-2 row-cols-sm-4 g-2 mb-0">
                <li className="col">
                  <a
                    href="#"
                    className="d-flex flex-column align-items-center justify-content-center gap-2 h-100 px-2 py-3 rounded-4 bg-fill-blue text-white text-decoration-none hover-lift"
                  >
                    <span className="icon-box rounded-circle bg-white bg-opacity-25" aria-hidden="true">
                      <i data-lucide="circle-plus" />
                    </span>
                    <span className="fs-5 fw-medium text-center">
                      Add New
                    </span>
                  </a>
                </li>
                <li className="col">
                  <a
                    href="#"
                    className="d-flex flex-column align-items-center justify-content-center gap-2 h-100 px-2 py-3 rounded-4 bg-fill-amber text-white text-decoration-none hover-lift"
                  >
                    <span className="icon-box rounded-circle bg-white bg-opacity-25" aria-hidden="true">
                      <i data-lucide="dollar-sign" />
                    </span>
                    <span className="fs-5 fw-medium text-center">
                      Payroll
                    </span>
                  </a>
                </li>
                <li className="col">
                  <a
                    href="#"
                    className="d-flex flex-column align-items-center justify-content-center gap-2 h-100 px-2 py-3 rounded-4 bg-fill-violet text-white text-decoration-none hover-lift"
                  >
                    <span className="icon-box rounded-circle bg-white bg-opacity-25" aria-hidden="true">
                      <i data-lucide="calendar" />
                    </span>
                    <span className="fs-5 fw-medium text-center">
                      Leave
                    </span>
                  </a>
                </li>
                <li className="col">
                  <a
                    href="#"
                    className="d-flex flex-column align-items-center justify-content-center gap-2 h-100 px-2 py-3 rounded-4 bg-fill-emerald text-white text-decoration-none hover-lift"
                  >
                    <span className="icon-box rounded-circle bg-white bg-opacity-25" aria-hidden="true">
                      <i data-lucide="file-text" />
                    </span>
                    <span className="fs-5 fw-medium text-center">
                      Reports
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Workforce stats */}
          <div className="col-12 col-xxl-7 d-flex flex-column">
            <ul className="list-unstyled row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3 flex-grow-1 mb-0">
              <li className="col">
                <div className="card h-100">
                  <div className="card-body d-flex flex-column p-3">
                    <div className="d-flex align-items-start gap-2">
                      <span className="icon-box rounded-circle bg-cat-violet text-white" aria-hidden="true">
                        <i data-lucide="user-round-plus" />
                      </span>
                      <div className="min-w-0 flex-grow-1">
                        <p className="fs-2 fw-bold text-title lh-1 mb-1">
                          <bdi>
                            28
                          </bdi>
                        </p>
                        <h3 className="fs-6 fw-normal text-body-2 mb-0">
                          New Hires
                        </h3>
                      </div>
                    </div>
                    <p className="fs-md fw-medium text-body-2 mt-auto pt-3 mb-2">
                      <bdi>
                        2.1% of total
                      </bdi>
                    </p>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="New hires against the quarterly hiring plan"
                      aria-valuenow="21"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-violet" style={{ width: "21%" }} />
                    </div>
                  </div>
                </div>
              </li>
              <li className="col">
                <div className="card h-100">
                  <div className="card-body d-flex flex-column p-3">
                    <div className="d-flex align-items-start gap-2">
                      <span className="icon-box rounded-circle bg-cat-blue text-white" aria-hidden="true">
                        <i data-lucide="laptop" />
                      </span>
                      <div className="min-w-0 flex-grow-1">
                        <p className="fs-2 fw-bold text-title lh-1 mb-1">
                          <bdi>
                            318
                          </bdi>
                        </p>
                        <h3 className="fs-6 fw-normal text-body-2 mb-0">
                          Remote Today
                        </h3>
                      </div>
                    </div>
                    <p className="fs-md fw-medium text-body-2 mt-auto pt-3 mb-2">
                      <bdi>
                        23.7% of total
                      </bdi>
                    </p>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="Remote employees share of total headcount"
                      aria-valuenow="24"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-blue" style={{ width: "24%" }} />
                    </div>
                  </div>
                </div>
              </li>
              <li className="col">
                <div className="card h-100">
                  <div className="card-body d-flex flex-column p-3">
                    <div className="d-flex align-items-start gap-2">
                      <span className="icon-box rounded-circle bg-cat-magenta text-white" aria-hidden="true">
                        <i data-lucide="circle-check" />
                      </span>
                      <div className="min-w-0 flex-grow-1">
                        <p className="fs-2 fw-bold text-title lh-1 mb-1">
                          <bdi>
                            318
                          </bdi>
                        </p>
                        <h3 className="fs-6 fw-normal text-body-2 mb-0">
                          Attendance
                        </h3>
                      </div>
                    </div>
                    <p className="fs-md fw-medium text-body-2 mt-auto pt-3 mb-2">
                      <bdi>
                        23.7% of total
                      </bdi>
                    </p>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="Employees checked in today"
                      aria-valuenow="24"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-magenta" style={{ width: "24%" }} />
                    </div>
                  </div>
                </div>
              </li>
              <li className="col">
                <div className="card h-100">
                  <div className="card-body d-flex flex-column p-3">
                    <div className="d-flex align-items-start gap-2">
                      <span className="icon-box rounded-circle bg-cat-amber text-white" aria-hidden="true">
                        <i data-lucide="briefcase" />
                      </span>
                      <div className="min-w-0 flex-grow-1">
                        <p className="fs-2 fw-bold text-title lh-1 mb-1">
                          <bdi>
                            32
                          </bdi>
                        </p>
                        <h3 className="fs-6 fw-normal text-body-2 mb-0">
                          Open Positions
                        </h3>
                      </div>
                    </div>
                    <p className="fs-md fw-medium text-body-2 mt-auto pt-3 mb-2">
                      <bdi>
                        12 urgent
                      </bdi>
                    </p>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="Open positions filled this quarter"
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
                <div className="card h-100">
                  <div className="card-body d-flex flex-column p-3">
                    <div className="d-flex align-items-start gap-2">
                      <span className="icon-box rounded-circle bg-cat-emerald text-white" aria-hidden="true">
                        <i data-lucide="user-check" />
                      </span>
                      <div className="min-w-0 flex-grow-1">
                        <p className="fs-2 fw-bold text-title lh-1 mb-1">
                          <bdi>
                            94%
                          </bdi>
                        </p>
                        <h3 className="fs-6 fw-normal text-body-2 mb-0">
                          Retention Rate
                        </h3>
                      </div>
                    </div>
                    <p className="d-flex align-items-center gap-1 fs-md text-cat-emerald mt-auto pt-3 mb-2">
                      <i className="icon-18 flip-rtl" data-lucide="trending-up" aria-hidden="true" />
                      <bdi>
                        1.8% vs last month
                      </bdi>
                    </p>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="Employee retention rate"
                      aria-valuenow="94"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-emerald" style={{ width: "94%" }} />
                    </div>
                  </div>
                </div>
              </li>
              <li className="col">
                <div className="card h-100">
                  <div className="card-body d-flex flex-column p-3">
                    <div className="d-flex align-items-start gap-2">
                      <span className="icon-box rounded-circle bg-cat-cyan text-white" aria-hidden="true">
                        <i data-lucide="graduation-cap" />
                      </span>
                      <div className="min-w-0 flex-grow-1">
                        <p className="fs-2 fw-bold text-title lh-1 mb-1">
                          <bdi>
                            44%
                          </bdi>
                        </p>
                        <h3 className="fs-6 fw-normal text-body-2 mb-0">
                          Trainings
                        </h3>
                      </div>
                    </div>
                    <p className="d-flex align-items-center gap-1 fs-md text-cat-emerald mt-auto pt-3 mb-2">
                      <i className="icon-18 flip-rtl" data-lucide="trending-up" aria-hidden="true" />
                      <bdi>
                        1.8% vs last year
                      </bdi>
                    </p>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="Training programme completion"
                      aria-valuenow="44"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-cyan" style={{ width: "44%" }} />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* ===== Workforce KPIs ===== */}
      <section className="mb-4" aria-labelledby="hrm-kpi-title">
        <h2 id="hrm-kpi-title" className="visually-hidden">
          Workforce key performance indicators
        </h2>
        <ul className="list-unstyled row row-cols-1 row-cols-sm-2 row-cols-xl-4 g-3 mb-0">
          <li className="col">
            <div className="card h-100 border-2 border-plain shadow-sm text-cat-blue bg-wash-current">
              <div className="card-body d-flex flex-column gap-3">
                <div className="d-flex align-items-center justify-content-between gap-3">
                  <div className="min-w-0">
                    <h3 className="fs-5 fw-semibold text-body-2 text-truncate mb-2">
                      Total Employees
                    </h3>
                    <p className="fs-2 fw-bold text-title lh-1 mb-0">
                      <bdi>
                        1,248
                      </bdi>
                    </p>
                  </div>
                  <span
                    className="icon-box rounded-circle border border-2 border-white border-opacity-25 bg-cat-blue text-white"
                    aria-hidden="true"
                  >
                    <i data-lucide="users" />
                  </span>
                </div>
                <div className="d-flex align-items-end justify-content-between gap-2 mt-auto">
                  <div className="d-inline-flex align-items-center gap-2 min-w-0 p-1 pe-2 rounded-pill bg-plain">
                    <span className="badge-soft tint-success d-inline-flex flex-shrink-0 align-items-center gap-1 px-2 py-1">
                      {" "}
                      <i className="icon-16 flip-rtl" data-lucide="trending-up" aria-hidden="true" />
                      <bdi>
                        +5.2%
                      </bdi>
                      {" "}
                    </span>
                    <span className="fs-md text-body-2 text-truncate">
                      vs last quarter
                    </span>
                  </div>
                  <div id="hrmEmployeesSpark" className="chart-inline" />
                </div>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100 border-2 border-plain shadow-sm text-cat-magenta bg-wash-current">
              <div className="card-body d-flex flex-column gap-3">
                <div className="d-flex align-items-center justify-content-between gap-3">
                  <div className="min-w-0">
                    <h3 className="fs-5 fw-semibold text-body-2 text-truncate mb-2">
                      Attendance Rate
                    </h3>
                    <p className="fs-2 fw-bold text-title lh-1 mb-0">
                      <bdi>
                        96.4%
                      </bdi>
                    </p>
                  </div>
                  <span
                    className="icon-box rounded-circle border border-2 border-white border-opacity-25 bg-cat-magenta text-white"
                    aria-hidden="true"
                  >
                    <i data-lucide="clock" />
                  </span>
                </div>
                <div className="d-flex align-items-end justify-content-between gap-2 mt-auto">
                  <div className="d-inline-flex align-items-center gap-2 min-w-0 p-1 pe-2 rounded-pill bg-plain">
                    <span className="badge-soft tint-success d-inline-flex flex-shrink-0 align-items-center gap-1 px-2 py-1">
                      {" "}
                      <i className="icon-16 flip-rtl" data-lucide="trending-up" aria-hidden="true" />
                      <bdi>
                        +2.1%
                      </bdi>
                      {" "}
                    </span>
                    <span className="fs-md text-body-2 text-truncate">
                      vs last month
                    </span>
                  </div>
                  <div id="hrmAttendanceSpark" className="chart-inline" />
                </div>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100 border-2 border-plain shadow-sm text-cat-emerald bg-wash-current">
              <div className="card-body d-flex flex-column gap-3">
                <div className="d-flex align-items-center justify-content-between gap-3">
                  <div className="min-w-0">
                    <h3 className="fs-5 fw-semibold text-body-2 text-truncate mb-2">
                      Open Positions
                    </h3>
                    <p className="fs-2 fw-bold text-title lh-1 mb-0">
                      <bdi>
                        47
                      </bdi>
                    </p>
                  </div>
                  <span
                    className="icon-box rounded-circle border border-2 border-white border-opacity-25 bg-cat-emerald text-white"
                    aria-hidden="true"
                  >
                    <i data-lucide="briefcase" />
                  </span>
                </div>
                <div className="d-flex align-items-end justify-content-between gap-2 mt-auto">
                  <div className="d-inline-flex align-items-center gap-2 min-w-0 p-1 pe-2 rounded-pill bg-plain">
                    <span className="badge-soft tint-success d-inline-flex flex-shrink-0 align-items-center gap-1 px-2 py-1">
                      {" "}
                      <i className="icon-16 flip-rtl" data-lucide="trending-down" aria-hidden="true" />
                      <bdi>
                        -8
                      </bdi>
                      {" "}
                    </span>
                    <span className="fs-md text-body-2 text-truncate">
                      filled this month
                    </span>
                  </div>
                  <div id="hrmOpenRolesSpark" className="chart-inline" />
                </div>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100 border-2 border-plain shadow-sm text-cat-red bg-wash-current">
              <div className="card-body d-flex flex-column gap-3">
                <div className="d-flex align-items-center justify-content-between gap-3">
                  <div className="min-w-0">
                    <h3 className="fs-5 fw-semibold text-body-2 text-truncate mb-2">
                      Turnover Rate
                    </h3>
                    <p className="fs-2 fw-bold text-title lh-1 mb-0">
                      <bdi>
                        4.2%
                      </bdi>
                    </p>
                  </div>
                  <span
                    className="icon-box rounded-circle border border-2 border-white border-opacity-25 bg-cat-red text-white"
                    aria-hidden="true"
                  >
                    <i data-lucide="door-open" />
                  </span>
                </div>
                <div className="d-flex align-items-end justify-content-between gap-2 mt-auto">
                  <div className="d-inline-flex align-items-center gap-2 min-w-0 p-1 pe-2 rounded-pill bg-plain">
                    <span className="badge-soft tint-success d-inline-flex flex-shrink-0 align-items-center gap-1 px-2 py-1">
                      {" "}
                      <i className="icon-16 flip-rtl" data-lucide="trending-down" aria-hidden="true" />
                      <bdi>
                        -1.3%
                      </bdi>
                      {" "}
                    </span>
                    <span className="fs-md text-body-2 text-truncate">
                      vs last quarter
                    </span>
                  </div>
                  <div id="hrmTurnoverSpark" className="chart-inline" />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </section>
      {/* ===== Quick actions & headcount growth ===== */}
      <section className="mb-4">
        <h2 className="visually-hidden">
          Quick actions and headcount growth
        </h2>
        <div className="row g-3">
          <div className="col-12 col-xl-4">
            <div className="on-dark bg-nav-strong border-theme rounded-4 d-flex flex-column h-100 p-3">
              <h3 className="fs-4 fw-bold text-title mb-3">
                Quick Actions
              </h3>
              <ul className="d-flex flex-column flex-grow-1 gap-2 mb-0">
                <li className="flex-grow-1">
                  <button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#hrmAddEmployeeModal"
                    className="d-flex align-items-center justify-content-between w-100 h-100 gap-2 px-3 py-2 rounded-3 tile-plain border-soft text-start transition-base"
                  >
                    <span className="d-inline-flex align-items-center gap-2 min-w-0">
                      <span className="icon-box icon-box-sm bg-cat-violet text-white" aria-hidden="true">
                        <i data-lucide="circle-plus" />
                      </span>
                      <span className="d-flex flex-column min-w-0">
                        <span className="fs-md fw-bold text-title">
                          Add Employee
                        </span>
                        <span className="fs-sm text-body-2">
                          Onboard new hire
                        </span>
                      </span>
                    </span>
                    <i className="icon-14 flip-rtl flex-shrink-0" data-lucide="chevron-right" aria-hidden="true" />
                  </button>
                </li>
                <li className="flex-grow-1">
                  <button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#hrmLeaveRequestModal"
                    className="d-flex align-items-center justify-content-between w-100 h-100 gap-2 px-3 py-2 rounded-3 tile-plain border-soft text-start transition-base"
                  >
                    <span className="d-inline-flex align-items-center gap-2 min-w-0">
                      <span className="icon-box icon-box-sm bg-cat-blue text-white" aria-hidden="true">
                        <i data-lucide="calendar" />
                      </span>
                      <span className="d-flex flex-column min-w-0">
                        <span className="fs-md fw-bold text-title">
                          Leave Request
                        </span>
                        <span className="fs-sm text-body-2">
                          Submit time-off request
                        </span>
                      </span>
                    </span>
                    <i className="icon-14 flip-rtl flex-shrink-0" data-lucide="chevron-right" aria-hidden="true" />
                  </button>
                </li>
                <li className="flex-grow-1">
                  <button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#hrmRunPayrollModal"
                    className="d-flex align-items-center justify-content-between w-100 h-100 gap-2 px-3 py-2 rounded-3 tile-plain border-soft text-start transition-base"
                  >
                    <span className="d-inline-flex align-items-center gap-2 min-w-0">
                      <span className="icon-box icon-box-sm bg-cat-emerald text-white" aria-hidden="true">
                        <i data-lucide="dollar-sign" />
                      </span>
                      <span className="d-flex flex-column min-w-0">
                        <span className="fs-md fw-bold text-title">
                          Run Payroll
                        </span>
                        <span className="fs-sm text-body-2">
                          Process monthly salary
                        </span>
                      </span>
                    </span>
                    <i className="icon-14 flip-rtl flex-shrink-0" data-lucide="chevron-right" aria-hidden="true" />
                  </button>
                </li>
                <li className="flex-grow-1">
                  <button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#hrmReviewModal"
                    className="d-flex align-items-center justify-content-between w-100 h-100 gap-2 px-3 py-2 rounded-3 tile-plain border-soft text-start transition-base"
                  >
                    <span className="d-inline-flex align-items-center gap-2 min-w-0">
                      <span className="icon-box icon-box-sm bg-cat-orange text-white" aria-hidden="true">
                        <i data-lucide="star" />
                      </span>
                      <span className="d-flex flex-column min-w-0">
                        <span className="fs-md fw-bold text-title">
                          Performance Review
                        </span>
                        <span className="fs-sm text-body-2">
                          Evaluate team members
                        </span>
                      </span>
                    </span>
                    <i className="icon-14 flip-rtl flex-shrink-0" data-lucide="chevron-right" aria-hidden="true" />
                  </button>
                </li>
                <li className="flex-grow-1">
                  <button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#hrmJobOpeningModal"
                    className="d-flex align-items-center justify-content-between w-100 h-100 gap-2 px-3 py-2 rounded-3 tile-plain border-soft text-start transition-base"
                  >
                    <span className="d-inline-flex align-items-center gap-2 min-w-0">
                      <span className="icon-box icon-box-sm bg-cat-cyan text-white" aria-hidden="true">
                        <i data-lucide="briefcase" />
                      </span>
                      <span className="d-flex flex-column min-w-0">
                        <span className="fs-md fw-bold text-title">
                          Post Job Opening
                        </span>
                        <span className="fs-sm text-body-2">
                          Create new job listing
                        </span>
                      </span>
                    </span>
                    <i className="icon-14 flip-rtl flex-shrink-0" data-lucide="chevron-right" aria-hidden="true" />
                  </button>
                </li>
                <li className="flex-grow-1">
                  <button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#hrmReportModal"
                    className="d-flex align-items-center justify-content-between w-100 h-100 gap-2 px-3 py-2 rounded-3 tile-plain border-soft text-start transition-base"
                  >
                    <span className="d-inline-flex align-items-center gap-2 min-w-0">
                      <span className="icon-box icon-box-sm bg-cat-red text-white" aria-hidden="true">
                        <i data-lucide="chart-column" />
                      </span>
                      <span className="d-flex flex-column min-w-0">
                        <span className="fs-md fw-bold text-title">
                          Generate Report
                        </span>
                        <span className="fs-sm text-body-2">
                          Export HR analytics
                        </span>
                      </span>
                    </span>
                    <i className="icon-14 flip-rtl flex-shrink-0" data-lucide="chevron-right" aria-hidden="true" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-xl-8">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-start justify-content-between gap-3 mb-3">
                  <div className="min-w-0">
                    <h3 className="fs-5 fw-bold text-title mb-1">
                      Headcount Growth
                    </h3>
                    <p className="fs-xs text-muted-2 mb-0">
                      Total employees over the last 8 months
                    </p>
                  </div>
                  <div className="bg-plain border-soft rounded-3 px-3 py-2">
                    <span className="d-block fs-xs fw-semibold text-uppercase text-muted-2">
                      Net growth YTD
                    </span>
                    {" "}
                    <span className="d-flex flex-wrap align-items-center gap-2 mt-1">
                      <span className="fs-4 fw-bold text-title lh-1">
                        <bdi>
                          +162
                        </bdi>
                      </span>
                      <span className="badge-soft tint-success d-inline-flex align-items-center gap-1 px-2 py-1 fs-xs">
                        {" "}
                        <i className="icon-14 flip-rtl" data-lucide="trending-up" aria-hidden="true" />
                        <bdi>
                          +13.7%
                        </bdi>
                        {" "}
                      </span>
                    </span>
                  </div>
                </div>
                <div id="hrmHeadcountChart" className="chart-area flex-grow-1" />
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
                      <span className="badge-soft tint-success px-2 py-1 fs-xs" dir="ltr">
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
                      <span className="badge-soft tint-success px-2 py-1 fs-xs" dir="ltr">
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
                      <span className="badge-soft tint-success px-2 py-1 fs-xs" dir="ltr">
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
      {/* ===== Employees overview & payroll ===== */}
      <section className="mb-4">
        <h2 className="visually-hidden">
          Employees overview and payroll
        </h2>
        <div className="row g-3">
          <div className="col-12 col-xl-7">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
                  <div className="min-w-0">
                    <h3 className="fs-4 fw-bold text-title mb-1">
                      Employees Overview
                    </h3>
                    <p className="fs-md text-muted-2 mb-0">
                      Built for Smarter HR Management.
                    </p>
                  </div>
                  <ul className="list-unstyled d-flex flex-wrap align-items-center gap-3 bg-soft rounded-3 px-3 py-2 mb-0">
                    <li>
                      <span className="d-block fs-5 fw-bold text-title lh-sm">
                        <bdi>
                          1,248
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-md text-muted-2">
                        Total Employees
                      </span>
                      {" "}
                      <span className="d-inline-flex align-items-center gap-1 fs-xs fw-semibold text-cat-emerald">
                        <i className="icon-12" data-lucide="arrow-up" aria-hidden="true" />
                        <bdi>
                          +3.8%
                        </bdi>
                      </span>
                    </li>
                    <li className="vr opacity-25 align-self-stretch" />
                    <li>
                      <span className="d-block fs-5 fw-bold text-title lh-sm">
                        <bdi>
                          4.8%
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-md text-muted-2">
                        Attrition Rate
                      </span>
                      {" "}
                      <span className="d-inline-flex align-items-center gap-1 fs-xs fw-semibold text-cat-emerald">
                        <i className="icon-12" data-lucide="arrow-down" aria-hidden="true" />
                        <bdi>
                          -1.2%
                        </bdi>
                      </span>
                    </li>
                    <li className="vr opacity-25 align-self-stretch" />
                    <li>
                      <span className="d-block fs-5 fw-bold text-title lh-sm">
                        <bdi>
                          94%
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-md text-muted-2">
                        Retention Rate
                      </span>
                      {" "}
                      <span className="d-inline-flex align-items-center gap-1 fs-xs fw-semibold text-cat-emerald">
                        <i className="icon-12" data-lucide="arrow-up" aria-hidden="true" />
                        <bdi>
                          +2.5%
                        </bdi>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="row row-cols-1 row-cols-md-2 flex-grow-1 g-3">
                  <div className="col">
                    <div className="bg-plain border-theme d-flex flex-column h-100 p-3 rounded-3">
                      <h4 className="fs-6 fw-medium text-primary mb-3">
                        Department Distribution
                      </h4>
                      <div className="row align-items-center flex-grow-1 g-3">
                        <div className="col-12 col-sm-6">
                          <div className="position-relative">
                            <div id="hrmDepartmentChart" className="chart-area" />
                            <span className="chart-center">
                              <span className="d-block fs-5 fw-bold text-title">
                                <bdi>
                                  1,248
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
                                Engineering
                              </span>
                              <span className="fw-semibold text-title flex-shrink-0">
                                <bdi>
                                  45.2%
                                </bdi>
                              </span>
                            </li>
                            <li className="d-flex align-items-center justify-content-between gap-2">
                              <span className="d-inline-flex align-items-center gap-2 min-w-0 text-muted-2">
                                <span className="legend-dot bg-cat-cyan" />
                                Marketing
                              </span>
                              <span className="fw-semibold text-title flex-shrink-0">
                                <bdi>
                                  28.6%
                                </bdi>
                              </span>
                            </li>
                            <li className="d-flex align-items-center justify-content-between gap-2">
                              <span className="d-inline-flex align-items-center gap-2 min-w-0 text-muted-2">
                                <span className="legend-dot bg-cat-slate" />
                                Operations
                              </span>
                              <span className="fw-semibold text-title flex-shrink-0">
                                <bdi>
                                  26.2%
                                </bdi>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="bg-plain border-theme d-flex flex-column h-100 p-3 rounded-3">
                      <h4 className="fs-6 fw-medium text-primary mb-3">
                        Employee Status
                      </h4>
                      <div className="row align-items-center flex-grow-1 g-3">
                        <div className="col-12 col-sm-6">
                          <div className="position-relative">
                            <div id="hrmEmployeeStatusChart" className="chart-area" />
                            <span className="chart-center">
                              <span className="d-block fs-5 fw-bold text-title">
                                <bdi>
                                  1,248
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
                                Full-time
                              </span>
                              <span className="fw-semibold text-title flex-shrink-0">
                                <bdi>
                                  72.4%
                                </bdi>
                              </span>
                            </li>
                            <li className="d-flex align-items-center justify-content-between gap-2">
                              <span className="d-inline-flex align-items-center gap-2 min-w-0 text-muted-2">
                                <span className="legend-dot bg-cat-emerald" />
                                Part-time
                              </span>
                              <span className="fw-semibold text-title flex-shrink-0">
                                <bdi>
                                  18.3%
                                </bdi>
                              </span>
                            </li>
                            <li className="d-flex align-items-center justify-content-between gap-2">
                              <span className="d-inline-flex align-items-center gap-2 min-w-0 text-muted-2">
                                <span className="legend-dot bg-cat-amber" />
                                Contract
                              </span>
                              <span className="fw-semibold text-title flex-shrink-0">
                                <bdi>
                                  9.3%
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
          <div className="col-12 col-xl-5">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <h3 className="fs-4 fw-bold text-title mb-0">
                    Payroll Overview
                  </h3>
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn btn-outline-soft d-inline-flex align-items-center gap-2"
                      id="hrmPayrollYear"
                      data-bs-toggle="dropdown"
                      data-bs-offset="0,8"
                      aria-expanded="false"
                    >
                      Select Year
                      {" "}
                      <i data-lucide="chevron-down" className="dd-caret icon-18" aria-hidden="true" />
                    </button>
                    {" "}
                    <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="hrmPayrollYear">
                      <li>
                        <button type="button" className="dropdown-item active">
                          2026
                        </button>
                      </li>
                      <li>
                        <button type="button" className="dropdown-item">
                          2025
                        </button>
                      </li>
                      <li>
                        <button type="button" className="dropdown-item">
                          2024
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="d-flex flex-wrap align-items-center gap-2 mb-1">
                  <span className="fs-3 fw-bold text-title lh-1">
                    <bdi>
                      $348,920
                    </bdi>
                  </span>
                  <span className="badge-soft tint-success px-2 py-1 fs-xs" dir="ltr">
                    +6.2%
                  </span>
                </p>
                <p className="fs-xs text-muted-2 mb-3">
                  vs last month
                </p>
                <div id="hrmPayrollChart" className="chart-area flex-grow-1" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Workload & team utilisation ===== */}
      <section className="mb-4">
        <h2 className="visually-hidden">
          Workload and team utilisation
        </h2>
        <div className="row g-3">
          <div className="col-12 col-xl-8">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-start justify-content-between gap-3 mb-3">
                  <div className="min-w-0">
                    <h3 className="fs-5 fw-bold text-title mb-1">
                      Workload by Department
                    </h3>
                    <p className="fs-md text-muted-2 mb-0">
                      Task hours logged per department
                    </p>
                  </div>
                  <ul className="list-unstyled d-flex flex-wrap align-items-center gap-3 fs-md text-body-2 mb-0">
                    <li className="d-inline-flex align-items-center gap-2">
                      <span className="legend-dot bg-cat-violet" aria-hidden="true" />
                      Billable
                    </li>
                    <li className="d-inline-flex align-items-center gap-2">
                      <span className="legend-dot bg-cat-amber" aria-hidden="true" />
                      Internal
                    </li>
                    <li className="d-inline-flex align-items-center gap-2">
                      <span className="legend-dot bg-cat-emerald" aria-hidden="true" />
                      Training
                    </li>
                  </ul>
                </div>
                <div id="hrmWorkloadChart" className="chart-area" />
                <ul className="list-unstyled d-flex flex-wrap align-items-center justify-content-between gap-3 bg-plain border-theme rounded-3 p-3 mt-auto mb-0">
                  <li className="d-flex align-items-center gap-2 min-w-0">
                    <span className="icon-box icon-box-sm tint-violet" aria-hidden="true">
                      <i data-lucide="users-round" />
                    </span>
                    <span className="min-w-0">
                      {" "}
                      <span className="d-block fs-5 fw-bold text-title lh-1">
                        <bdi>
                          248
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs fw-semibold text-uppercase text-muted-2">
                        Total Employees
                      </span>
                      {" "}
                    </span>
                  </li>
                  <li className="vr opacity-25 align-self-stretch" />
                  <li className="d-flex align-items-center gap-2 min-w-0">
                    <span className="icon-box icon-box-sm tint-blue" aria-hidden="true">
                      <i data-lucide="clipboard-check" />
                    </span>
                    <span className="min-w-0">
                      {" "}
                      <span className="d-block fs-5 fw-bold text-title lh-1">
                        <bdi>
                          215
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs fw-semibold text-uppercase text-muted-2">
                        Present Today
                      </span>
                      {" "}
                    </span>
                  </li>
                  <li className="vr opacity-25 align-self-stretch" />
                  <li className="d-flex align-items-center gap-2 min-w-0">
                    <span className="icon-box icon-box-sm tint-amber" aria-hidden="true">
                      <i data-lucide="gauge" />
                    </span>
                    <span className="min-w-0">
                      {" "}
                      <span className="d-block fs-5 fw-bold text-title lh-1">
                        <bdi>
                          92.4%
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs fw-semibold text-uppercase text-muted-2">
                        Attendance Rate
                      </span>
                      {" "}
                    </span>
                  </li>
                  <li className="vr opacity-25 align-self-stretch" />
                  <li className="d-flex align-items-center gap-2 min-w-0">
                    <span className="icon-box icon-box-sm tint-rose" aria-hidden="true">
                      <i data-lucide="plane" />
                    </span>
                    <span className="min-w-0">
                      {" "}
                      <span className="d-block fs-5 fw-bold text-title lh-1">
                        <bdi>
                          18
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs fw-semibold text-uppercase text-muted-2">
                        On Leave
                      </span>
                      {" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="min-w-0 mb-3">
                  <h3 className="fs-5 fw-bold text-title mb-1">
                    Team Utilization
                  </h3>
                  <p className="fs-md text-muted-2 mb-0">
                    Capacity used this week
                  </p>
                </div>
                <ul className="list-unstyled d-flex flex-column justify-content-between gap-3 flex-grow-1 mb-0">
                  <li>
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <span className="avatar avatar-sm bg-grad-1" aria-hidden="true">
                        EJ
                      </span>
                      <span className="fs-6 fw-semibold text-title flex-grow-1 min-w-0 text-truncate">
                        Engineering
                      </span>
                      <span className="fs-md fw-semibold text-title flex-shrink-0">
                        <bdi>
                          92%
                        </bdi>
                      </span>
                    </div>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="Engineering capacity used"
                      aria-valuenow="92"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-emerald" style={{ width: "92%" }} />
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <span className="avatar avatar-sm bg-grad-3" aria-hidden="true">
                        SL
                      </span>
                      <span className="fs-6 fw-semibold text-title flex-grow-1 min-w-0 text-truncate">
                        Sales
                      </span>
                      <span className="fs-md fw-semibold text-title flex-shrink-0">
                        <bdi>
                          100%
                        </bdi>
                      </span>
                    </div>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="Sales capacity used"
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-rose" style={{ width: "100%" }} />
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <span className="avatar avatar-sm bg-grad-2" aria-hidden="true">
                        SP
                      </span>
                      <span className="fs-6 fw-semibold text-title flex-grow-1 min-w-0 text-truncate">
                        Support
                      </span>
                      <span className="fs-md fw-semibold text-title flex-shrink-0">
                        <bdi>
                          78%
                        </bdi>
                      </span>
                    </div>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="Support capacity used"
                      aria-valuenow="78"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-violet" style={{ width: "78%" }} />
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <span className="avatar avatar-sm bg-grad-4" aria-hidden="true">
                        MK
                      </span>
                      <span className="fs-6 fw-semibold text-title flex-grow-1 min-w-0 text-truncate">
                        Marketing
                      </span>
                      <span className="fs-md fw-semibold text-title flex-shrink-0">
                        <bdi>
                          68%
                        </bdi>
                      </span>
                    </div>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="Marketing capacity used"
                      aria-valuenow="68"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-amber" style={{ width: "68%" }} />
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <span className="avatar avatar-sm bg-grad-5" aria-hidden="true">
                        OP
                      </span>
                      <span className="fs-6 fw-semibold text-title flex-grow-1 min-w-0 text-truncate">
                        Operations
                      </span>
                      <span className="fs-md fw-semibold text-title flex-shrink-0">
                        <bdi>
                          55%
                        </bdi>
                      </span>
                    </div>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="Operations capacity used"
                      aria-valuenow="55"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-cyan" style={{ width: "55%" }} />
                    </div>
                  </li>
                </ul>
                <p className="d-flex flex-wrap align-items-center justify-content-between gap-2 bg-plain border-theme rounded-3 px-3 py-2 mt-3 mb-0">
                  <span className="fs-md text-muted-2">
                    Avg. utilization
                  </span>
                  <span className="fs-6 fw-bold text-title">
                    <bdi>
                      78%
                    </bdi>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Employee overview & hiring goal ===== */}
      <section className="mb-4">
        <h2 className="visually-hidden">
          Employee overview and hiring goal
        </h2>
        <div className="row g-3">
          <div className="col-12 col-xl-6">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-start justify-content-between gap-2 mb-3">
                  <div className="min-w-0">
                    <h3 className="fs-4 fw-bold text-title mb-1">
                      Employee Overview
                    </h3>
                    <p className="fs-md text-muted-2 mb-0">
                      Headcount vs Attrition comparison
                    </p>
                  </div>
                  <div
                    className="nav nav-pills seg-toggle flex-nowrap gap-1 p-1 rounded-pill bg-soft"
                    role="group"
                    aria-label="Employee overview time range"
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
                <ul className="list-unstyled d-flex flex-wrap align-items-center gap-3 fs-md text-body-2 mb-2">
                  <li className="d-inline-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-violet" aria-hidden="true" />
                    Headcount
                  </li>
                  <li className="d-inline-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-orange" aria-hidden="true" />
                    New Hires
                  </li>
                  <li className="d-inline-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-emerald" aria-hidden="true" />
                    Attrition
                  </li>
                </ul>
                <div id="hrmEmployeeTrendChart" className="chart-area" />
                <ul className="list-unstyled d-flex flex-wrap align-items-center justify-content-between gap-3 bg-plain border-theme rounded-3 p-3 mt-auto mb-0">
                  <li className="min-w-0">
                    <span className="d-block fs-md fw-medium text-body-2">
                      Total Employees
                    </span>
                    {" "}
                    <span className="d-block fs-4 fw-semibold text-title lh-sm">
                      <bdi>
                        1,248
                      </bdi>
                    </span>
                  </li>
                  <li className="vr opacity-25 align-self-stretch" />
                  <li className="min-w-0">
                    <span className="d-block fs-md fw-medium text-body-2">
                      New Hires
                    </span>
                    {" "}
                    <span className="d-block fs-4 fw-semibold text-title lh-sm">
                      <bdi>
                        86
                      </bdi>
                    </span>
                  </li>
                  <li className="vr opacity-25 align-self-stretch" />
                  <li className="min-w-0">
                    <span className="d-block fs-md fw-medium text-body-2">
                      Retention Rate
                    </span>
                    {" "}
                    <span className="d-block fs-4 fw-semibold text-cat-emerald lh-sm">
                      <bdi>
                        94.2%
                      </bdi>
                    </span>
                  </li>
                  <li className="vr opacity-25 align-self-stretch" />
                  <li className="min-w-0">
                    <span className="d-block fs-md fw-medium text-body-2">
                      Peak Month
                    </span>
                    {" "}
                    <span className="d-flex align-items-center gap-2 fs-4 fw-semibold text-title lh-sm">
                      <i className="icon-20 text-primary" data-lucide="calendar-days" aria-hidden="true" />
                      <bdi>
                        Mar 24
                      </bdi>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-6">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <h3 className="fs-4 fw-bold text-title mb-0">
                    Hiring Goal Progress
                  </h3>
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn btn-outline-soft d-inline-flex align-items-center gap-2"
                      id="hrmHiringGoalRange"
                      data-bs-toggle="dropdown"
                      data-bs-offset="0,8"
                      aria-expanded="false"
                    >
                      This Quarter
                      {" "}
                      <i data-lucide="chevron-down" className="dd-caret icon-18" aria-hidden="true" />
                    </button>
                    {" "}
                    <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="hrmHiringGoalRange">
                      <li>
                        <button type="button" className="dropdown-item active">
                          This Quarter
                        </button>
                      </li>
                      <li>
                        <button type="button" className="dropdown-item">
                          This Month
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
                <div className="position-relative d-flex justify-content-center my-auto">
                  <div id="hrmHiringGoalChart" className="chart-area" />
                  <span className="chart-center mt-4">
                    <span className="d-block display-4 fw-bold text-title lh-1">
                      <bdi>
                        72%
                      </bdi>
                    </span>
                    <span className="d-block fs-5 text-title mt-1">
                      Completed
                    </span>
                  </span>
                </div>
                {/* Held to roughly the ring's own width so the two readings land
                   under the arc ends rather than the card edges, as the design
                   shows; full width below sm, where the labels need the room. */}
                <div className="col-12 col-sm-8 col-xl-7 mx-auto">
                  <ul className="list-unstyled d-flex flex-wrap align-items-start justify-content-between gap-3 mb-0">
                    <li className="min-w-0">
                      <span className="d-block fs-6 fw-semibold text-body-2">
                        Filled
                      </span>
                      {" "}
                      <span className="d-block fs-5 fw-bold text-title lh-sm">
                        <bdi>
                          54
                        </bdi>
                      </span>
                    </li>
                    <li className="min-w-0">
                      <span className="d-block fs-6 fw-semibold text-body-2">
                        Remaining
                      </span>
                      {" "}
                      <span className="d-block fs-5 fw-bold text-title lh-sm">
                        <bdi>
                          21
                        </bdi>
                      </span>
                    </li>
                  </ul>
                </div>
                <ul className="list-unstyled row row-cols-2 g-3 pt-3 mb-0">
                  <li className="col">
                    <div className="tint-blue d-flex flex-column align-items-center justify-content-center h-100 gap-1 p-3 rounded-4 text-center">
                      <span className="fs-1 fw-bold text-title lh-1">
                        <bdi>
                          54
                        </bdi>
                      </span>
                      <span className="fs-6 fw-medium text-body-2">
                        Positions Filled
                      </span>
                    </div>
                  </li>
                  <li className="col">
                    <div className="tint-emerald d-flex flex-column align-items-center justify-content-center h-100 gap-1 p-3 rounded-4 text-center">
                      <span className="fs-1 fw-bold text-title lh-1">
                        <bdi>
                          75
                        </bdi>
                      </span>
                      <span className="fs-6 fw-medium text-body-2">
                        Total Openings
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Leave requests & recent activity ===== */}
      <section className="mb-4">
        <h2 className="visually-hidden">
          Leave requests and recent activity
        </h2>
        <div className="row g-3">
          <div className="col-12 col-xxl-8">
            <div className="card h-100">
              <div className="card-body" data-bulk-scope="">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
                  <h3 className="fs-4 fw-bold text-title mb-0">
                    Leave Request
                  </h3>
                  <div className="d-flex flex-wrap flex-lg-nowrap align-items-center gap-2">
                    <div className="header-search min-w-0" role="search">
                      <i data-lucide="search" />
                      {" "}
                      <input
                        type="search"
                        id="hrmLeaveSearch"
                        name="leave-q"
                        placeholder="Search files..."
                        aria-label="Search leave requests"
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
                        id="hrmLeaveExport"
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
                      <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="hrmLeaveExport">
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
                        id="hrmLeaveShare"
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
                      <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="hrmLeaveShare">
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
                      <i className="icon-18" data-lucide="circle-check" aria-hidden="true" />
                      Approve
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-soft d-inline-flex align-items-center gap-2 text-nowrap"
                    >
                      <i className="icon-18" data-lucide="circle-x" aria-hidden="true" />
                      Reject
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
                      Pending and processed leave requests
                    </caption>
                    <thead>
                      <tr>
                        <th scope="col">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="hrmLeaveSelectAll"
                            data-bulk-all=""
                            aria-label="Select all rows"
                          />
                        </th>
                        <th scope="col">
                          Leave ID
                        </th>
                        <th scope="col">
                          Employee
                        </th>
                        <th scope="col">
                          Duration
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
                        <td>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            data-bulk-item=""
                            defaultChecked
                            aria-label="Select leave request LR-20240801"
                          />
                        </td>
                        <td>
                          <span className="fs-md fw-semibold text-title text-uppercase text-nowrap">
                            <bdi>
                              LR-20240801
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
                                Sarah Robinson
                              </span>
                              <span className="fs-xs text-muted-2">
                                sarah.robinson@company.com
                              </span>
                            </span>
                          </span>
                        </td>
                        <td>
                          <span className="fs-md fw-bold text-title text-nowrap">
                            <bdi>
                              Aug 5 – Aug 9
                            </bdi>
                          </span>
                        </td>
                        <td>
                          <span className="badge-soft tint-success">
                            Approved
                          </span>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-1">
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle"
                              aria-label="Edit leave request LR-20240801"
                            >
                              <i data-lucide="square-pen" />
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle"
                              aria-label="Open leave request LR-20240801"
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
                                aria-label="More actions for leave request LR-20240801"
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
                                    <i data-lucide="circle-check" />
                                    Approve
                                  </button>
                                </li>
                                <li>
                                  <button type="button" className="dropdown-item">
                                    <i data-lucide="circle-x" />
                                    Reject
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
                            aria-label="Select leave request LR-20240802"
                          />
                        </td>
                        <td>
                          <span className="fs-md fw-semibold text-title text-uppercase text-nowrap">
                            <bdi>
                              LR-20240802
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
                                Kevin Smith
                              </span>
                              <span className="fs-xs text-muted-2">
                                kevin.smith@company.com
                              </span>
                            </span>
                          </span>
                        </td>
                        <td>
                          <span className="fs-md fw-bold text-title text-nowrap">
                            <bdi>
                              Aug 11 – Aug 13
                            </bdi>
                          </span>
                        </td>
                        <td>
                          <span className="badge-soft tint-warning">
                            Pending
                          </span>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-1">
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle"
                              aria-label="Edit leave request LR-20240802"
                            >
                              <i data-lucide="square-pen" />
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle"
                              aria-label="Open leave request LR-20240802"
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
                                aria-label="More actions for leave request LR-20240802"
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
                                    <i data-lucide="circle-check" />
                                    Approve
                                  </button>
                                </li>
                                <li>
                                  <button type="button" className="dropdown-item">
                                    <i data-lucide="circle-x" />
                                    Reject
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
                            aria-label="Select leave request LR-20240803"
                          />
                        </td>
                        <td>
                          <span className="fs-md fw-semibold text-title text-uppercase text-nowrap">
                            <bdi>
                              LR-20240803
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
                                James Dean
                              </span>
                              <span className="fs-xs text-muted-2">
                                james.dean@company.com
                              </span>
                            </span>
                          </span>
                        </td>
                        <td>
                          <span className="fs-md fw-bold text-title text-nowrap">
                            <bdi>
                              Aug 15 – Aug 15
                            </bdi>
                          </span>
                        </td>
                        <td>
                          <span className="badge-soft tint-danger">
                            Rejected
                          </span>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-1">
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle"
                              aria-label="Edit leave request LR-20240803"
                            >
                              <i data-lucide="square-pen" />
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle"
                              aria-label="Open leave request LR-20240803"
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
                                aria-label="More actions for leave request LR-20240803"
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
                                    <i data-lucide="circle-check" />
                                    Approve
                                  </button>
                                </li>
                                <li>
                                  <button type="button" className="dropdown-item">
                                    <i data-lucide="circle-x" />
                                    Reject
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
                            aria-label="Select leave request LR-20240804"
                          />
                        </td>
                        <td>
                          <span className="fs-md fw-semibold text-title text-uppercase text-nowrap">
                            <bdi>
                              LR-20240804
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
                                Priya Kumar
                              </span>
                              <span className="fs-xs text-muted-2">
                                priya.kumar@company.com
                              </span>
                            </span>
                          </span>
                        </td>
                        <td>
                          <span className="fs-md fw-bold text-title text-nowrap">
                            <bdi>
                              Aug 18 – Aug 22
                            </bdi>
                          </span>
                        </td>
                        <td>
                          <span className="badge-soft tint-success">
                            Approved
                          </span>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-1">
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle"
                              aria-label="Edit leave request LR-20240804"
                            >
                              <i data-lucide="square-pen" />
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle"
                              aria-label="Open leave request LR-20240804"
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
                                aria-label="More actions for leave request LR-20240804"
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
                                    <i data-lucide="circle-check" />
                                    Approve
                                  </button>
                                </li>
                                <li>
                                  <button type="button" className="dropdown-item">
                                    <i data-lucide="circle-x" />
                                    Reject
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
                    <bdi>
                      Showing 1–4 of 4 results
                    </bdi>
                  </span>
                  <nav aria-label="Leave requests pagination">
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
          <div className="col-12 col-xxl-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <h3 className="fs-4 fw-bold text-title mb-0">
                    Recent Activity
                  </h3>
                  <a href="#" className="btn btn-accent btn-sm fw-semibold text-nowrap">
                    View All
                  </a>
                </div>
                <ul className="d-flex flex-column gap-3 mb-0">
                  <li className="d-flex align-items-center gap-3 pb-3 border-b-soft">
                    <span className="icon-box icon-box-sm tint-violet" aria-hidden="true">
                      <i data-lucide="user-round-plus" />
                    </span>
                    <span className="fs-6 text-title flex-grow-1 min-w-0 text-truncate">
                      Sarah Robinson applied for sick leave
                    </span>
                    <span className="fs-xs text-muted-2 flex-shrink-0">
                      <bdi>
                        11:20 AM
                      </bdi>
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3 pb-3 border-b-soft">
                    <span className="icon-box icon-box-sm tint-emerald" aria-hidden="true">
                      <i data-lucide="clock" />
                    </span>
                    <span className="fs-6 text-title flex-grow-1 min-w-0 text-truncate">
                      Kevin Smith clocked in late
                    </span>
                    <span className="fs-xs text-muted-2 flex-shrink-0">
                      <bdi>
                        09:15 AM
                      </bdi>
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3 pb-3 border-b-soft">
                    <span className="icon-box icon-box-sm tint-cyan" aria-hidden="true">
                      <i data-lucide="calendar-check" />
                    </span>
                    <span className="fs-6 text-title flex-grow-1 min-w-0 text-truncate">
                      Leave approved for James Dean
                    </span>
                    <span className="fs-xs text-muted-2 flex-shrink-0">
                      <bdi>
                        08:45 AM
                      </bdi>
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3 pb-3 border-b-soft">
                    <span className="icon-box icon-box-sm tint-amber" aria-hidden="true">
                      <i data-lucide="user-round-x" />
                    </span>
                    <span className="fs-6 text-title flex-grow-1 min-w-0 text-truncate">
                      Priya Kumar marked absent today
                    </span>
                    <span className="fs-xs text-muted-2 flex-shrink-0">
                      Yesterday
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3 pb-3 border-b-soft">
                    <span className="icon-box icon-box-sm bg-soft text-body-2" aria-hidden="true">
                      <i data-lucide="banknote" />
                    </span>
                    <span className="fs-6 text-title flex-grow-1 min-w-0 text-truncate">
                      Payroll processed for August
                    </span>
                    <span className="fs-xs text-muted-2 flex-shrink-0">
                      <bdi>
                        Aug 10, 2024
                      </bdi>
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3 pb-3 border-b-soft">
                    <span className="icon-box icon-box-sm tint-violet" aria-hidden="true">
                      <i data-lucide="user-round-plus" />
                    </span>
                    <span className="fs-6 text-title flex-grow-1 min-w-0 text-truncate">
                      New employee onboarded
                    </span>
                    <span className="fs-xs text-muted-2 flex-shrink-0">
                      Yesterday
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3">
                    <span className="icon-box icon-box-sm tint-rose" aria-hidden="true">
                      <i data-lucide="users-round" />
                    </span>
                    <span className="fs-6 text-title flex-grow-1 min-w-0 text-truncate">
                      Team meeting attendance logged
                    </span>
                    <span className="fs-xs text-muted-2 flex-shrink-0">
                      Yesterday
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Attendance overview & celebrations ===== */}
      <section className="mb-4">
        <h2 className="visually-hidden">
          Attendance overview and today’s celebrations
        </h2>
        <div className="row g-3">
          <div className="col-12 col-xxl-8">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <h3 className="fs-4 fw-bold text-title mb-0">
                    Attendance Overview
                  </h3>
                  <div
                    className="nav nav-pills seg-toggle flex-nowrap gap-1 p-1 rounded-pill bg-soft"
                    role="group"
                    aria-label="Attendance time range"
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
                <div id="hrmAttendanceChart" className="chart-area" />
                <ul className="list-unstyled d-flex flex-wrap align-items-center gap-3 fs-md text-body-2 pt-3 mb-0">
                  <li className="d-inline-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-emerald" aria-hidden="true" />
                    Present
                  </li>
                  <li className="d-inline-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-blue" aria-hidden="true" />
                    Absent
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-xxl-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <h3 className="fs-4 fw-bold text-title mb-0">
                    Today’s Celebrations
                  </h3>
                  <a href="#" className="btn btn-accent btn-sm fw-semibold text-nowrap">
                    View All
                  </a>
                </div>
                <ul className="d-flex flex-column flex-grow-1 gap-2 mb-0">
                  <li className="bg-plain border-theme d-flex align-items-center justify-content-between flex-grow-1 gap-3 p-3 rounded-3">
                    <span className="d-flex align-items-center gap-3 min-w-0">
                      <span className="avatar avatar-md">
                        <img src="/assets/images/avatar-1.png" width="48" height="48" alt="" />
                      </span>
                      <span className="d-flex flex-column min-w-0">
                        <span className="fs-6 fw-bold text-title text-truncate">
                          Sarah Johnson
                        </span>
                        <span className="fs-md fw-medium text-muted-2 text-truncate">
                          Marketing Team
                        </span>
                      </span>
                    </span>
                    <span className="badge-soft tint-success flex-shrink-0 fs-xs fw-bold text-nowrap">
                      Birthday
                      {" "}
                      <span aria-hidden="true">
                        🎂
                      </span>
                    </span>
                  </li>
                  <li className="bg-plain border-theme d-flex align-items-center justify-content-between flex-grow-1 gap-3 p-3 rounded-3">
                    <span className="d-flex align-items-center gap-3 min-w-0">
                      <span className="avatar avatar-md">
                        <img src="/assets/images/avatar-2.png" width="48" height="48" alt="" />
                      </span>
                      <span className="d-flex flex-column min-w-0">
                        <span className="fs-6 fw-bold text-title text-truncate">
                          Michael Chen
                        </span>
                        <span className="fs-md fw-medium text-muted-2 text-truncate">
                          Engineering Team
                        </span>
                      </span>
                    </span>
                    <span className="badge-soft tint-info flex-shrink-0 fs-xs fw-bold text-nowrap">
                      <bdi>
                        5 Year Anniversary
                      </bdi>
                    </span>
                  </li>
                  <li className="bg-plain border-theme d-flex align-items-center justify-content-between flex-grow-1 gap-3 p-3 rounded-3">
                    <span className="d-flex align-items-center gap-3 min-w-0">
                      <span className="avatar avatar-md">
                        <img src="/assets/images/avatar-3.png" width="48" height="48" alt="" />
                      </span>
                      <span className="d-flex flex-column min-w-0">
                        <span className="fs-6 fw-bold text-title text-truncate">
                          Emily Rodriguez
                        </span>
                        <span className="fs-md fw-medium text-muted-2 text-truncate">
                          Design Team
                        </span>
                      </span>
                    </span>
                    <span className="badge-soft tint-success flex-shrink-0 fs-xs fw-bold text-nowrap">
                      Birthday
                      {" "}
                      <span aria-hidden="true">
                        🎂
                      </span>
                    </span>
                  </li>
                  <li className="bg-plain border-theme d-flex align-items-center justify-content-between flex-grow-1 gap-3 p-3 rounded-3">
                    <span className="d-flex align-items-center gap-3 min-w-0">
                      <span className="avatar avatar-md">
                        <img src="/assets/images/avatar-4.png" width="48" height="48" alt="" />
                      </span>
                      <span className="d-flex flex-column min-w-0">
                        <span className="fs-6 fw-bold text-title text-truncate">
                          David Kim
                        </span>
                        <span className="fs-md fw-medium text-muted-2 text-truncate">
                          Sales Team
                        </span>
                      </span>
                    </span>
                    <span className="badge-soft tint-info flex-shrink-0 fs-xs fw-bold text-nowrap">
                      <bdi>
                        3 Year Anniversary
                      </bdi>
                    </span>
                  </li>
                  <li className="bg-plain border-theme d-flex align-items-center justify-content-between flex-grow-1 gap-3 p-3 rounded-3">
                    <span className="d-flex align-items-center gap-3 min-w-0">
                      <span className="avatar avatar-md">
                        <img src="/assets/images/avatar-user.png" width="48" height="48" alt="" />
                      </span>
                      <span className="d-flex flex-column min-w-0">
                        <span className="fs-6 fw-bold text-title text-truncate">
                          Lisa Thompson
                        </span>
                        <span className="fs-md fw-medium text-muted-2 text-truncate">
                          HR Team
                        </span>
                      </span>
                    </span>
                    <span className="badge-soft tint-success flex-shrink-0 fs-xs fw-bold text-nowrap">
                      Birthday
                      {" "}
                      <span aria-hidden="true">
                        🎂
                      </span>
                    </span>
                  </li>
                  <li className="bg-plain border-theme d-flex align-items-center justify-content-between flex-grow-1 gap-3 p-3 rounded-3">
                    <span className="d-flex align-items-center gap-3 min-w-0">
                      <span className="avatar avatar-md">
                        <img src="/assets/images/avatar-2.png" width="48" height="48" alt="" />
                      </span>
                      <span className="d-flex flex-column min-w-0">
                        <span className="fs-6 fw-bold text-title text-truncate">
                          James Patel
                        </span>
                        <span className="fs-md fw-medium text-muted-2 text-truncate">
                          Finance Team
                        </span>
                      </span>
                    </span>
                    <span className="badge-soft tint-info flex-shrink-0 fs-xs fw-bold text-nowrap">
                      <bdi>
                        10 Year Anniversary
                      </bdi>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Upcoming holidays & overtime tracker ===== */}
      <section className="mb-4">
        <h2 className="visually-hidden">
          Upcoming holidays and overtime tracker
        </h2>
        <div className="row g-3">
          <div className="col-12 col-xl-6">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex align-items-center justify-content-between gap-3 mb-3">
                  <div className="min-w-0">
                    <h3 className="fs-4 fw-bold text-title mb-1">
                      Upcoming Holidays
                    </h3>
                    <p className="fs-md text-muted-2 mb-0">
                      Next 5 scheduled company calendar events
                    </p>
                  </div>
                  <span className="icon-box icon-box-sm bg-soft border-theme text-brand" aria-hidden="true">
                    <i data-lucide="calendar" />
                  </span>
                </div>
                <ul className="list-unstyled d-flex flex-column flex-grow-1 gap-2 mb-0">
                  <li className="bg-soft border-theme d-flex align-items-center justify-content-between flex-grow-1 gap-3 px-3 py-3 rounded-3">
                    <span className="d-flex align-items-center gap-3 min-w-0">
                      <span className="legend-dot bg-cat-orange" aria-hidden="true" />
                      <span className="fs-lg fw-semibold text-title text-truncate">
                        Independence Day
                      </span>
                    </span>
                    <span className="d-flex align-items-center flex-shrink-0 gap-3">
                      <span className="badge-soft tint-orange fs-xs fw-bold text-uppercase">
                        National
                      </span>
                      <span className="fs-lg fw-bold text-title text-nowrap">
                        <bdi>
                          Aug 15
                        </bdi>
                      </span>
                    </span>
                  </li>
                  <li className="bg-plain border-theme d-flex align-items-center justify-content-between flex-grow-1 gap-3 px-3 py-3 rounded-3">
                    <span className="d-flex align-items-center gap-3 min-w-0">
                      <span className="legend-dot bg-cat-violet" aria-hidden="true" />
                      <span className="fs-lg fw-semibold text-title text-truncate">
                        Labor Day
                      </span>
                    </span>
                    <span className="d-flex align-items-center flex-shrink-0 gap-3">
                      <span className="badge-soft tint-violet fs-xs fw-bold text-uppercase">
                        Holiday
                      </span>
                      <span className="fs-lg fw-bold text-title text-nowrap">
                        <bdi>
                          Sep 2
                        </bdi>
                      </span>
                    </span>
                  </li>
                  <li className="bg-soft border-theme d-flex align-items-center justify-content-between flex-grow-1 gap-3 px-3 py-3 rounded-3">
                    <span className="d-flex align-items-center gap-3 min-w-0">
                      <span className="legend-dot bg-cat-emerald" aria-hidden="true" />
                      <span className="fs-lg fw-semibold text-title text-truncate">
                        Company Anniversary
                      </span>
                    </span>
                    <span className="d-flex align-items-center flex-shrink-0 gap-3">
                      <span className="badge-soft tint-emerald fs-xs fw-bold text-uppercase">
                        Event
                      </span>
                      <span className="fs-lg fw-bold text-title text-nowrap">
                        <bdi>
                          Sep 15
                        </bdi>
                      </span>
                    </span>
                  </li>
                  <li className="bg-plain border-theme d-flex align-items-center justify-content-between flex-grow-1 gap-3 px-3 py-3 rounded-3">
                    <span className="d-flex align-items-center gap-3 min-w-0">
                      <span className="legend-dot bg-cat-amber" aria-hidden="true" />
                      <span className="fs-lg fw-semibold text-title text-truncate">
                        Thanksgiving
                      </span>
                    </span>
                    <span className="d-flex align-items-center flex-shrink-0 gap-3">
                      <span className="badge-soft tint-amber fs-xs fw-bold text-uppercase">
                        Holiday
                      </span>
                      <span className="fs-lg fw-bold text-title text-nowrap">
                        <bdi>
                          Nov 28
                        </bdi>
                      </span>
                    </span>
                  </li>
                  <li className="bg-soft border-theme d-flex align-items-center justify-content-between flex-grow-1 gap-3 px-3 py-3 rounded-3">
                    <span className="d-flex align-items-center gap-3 min-w-0">
                      <span className="legend-dot bg-cat-cyan" aria-hidden="true" />
                      <span className="fs-lg fw-semibold text-title text-truncate">
                        Christmas
                      </span>
                    </span>
                    <span className="d-flex align-items-center flex-shrink-0 gap-3">
                      <span className="badge-soft tint-cyan fs-xs fw-bold text-uppercase">
                        Holiday
                      </span>
                      <span className="fs-lg fw-bold text-title text-nowrap">
                        <bdi>
                          Dec 25
                        </bdi>
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-6">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex align-items-center justify-content-between gap-3 mb-3">
                  <div className="min-w-0">
                    <h3 className="fs-4 fw-bold text-title mb-1">
                      Overtime Tracker
                    </h3>
                    <p className="fs-md text-muted-2 mb-0">
                      Hours logged this month (Top 5 leaderboard)
                    </p>
                  </div>
                  <span className="bg-plain border-theme flex-shrink-0 px-3 py-1 rounded-pill fs-sm fw-bold text-title text-nowrap">
                    <bdi>
                      79 Hrs Total
                    </bdi>
                  </span>
                </div>
                <ol className="list-unstyled d-flex flex-column flex-grow-1 justify-content-between gap-3 mb-0">
                  <li className="d-flex align-items-center border-b-soft gap-3 pb-3">
                    <span className="avatar avatar-xs bg-cat-violet fw-bold">
                      1
                    </span>
                    <span className="w-25 flex-shrink-0 fs-md fw-semibold text-title text-truncate">
                      Sarah Robinson
                    </span>
                    <span
                      className="progress progress-sm flex-grow-1 min-w-0"
                      role="progressbar"
                      aria-label="Overtime hours logged by Sarah Robinson"
                      aria-valuenow="24"
                      aria-valuemin="0"
                      aria-valuemax="24"
                      aria-valuetext="24 hours"
                    >
                      <span
                        className="progress-bar bg-grad-cat from-cat-violet to-cat-blue"
                        style={{ width: "100%" }}
                      />
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
                  <li className="d-flex align-items-center border-b-soft gap-3 pb-3">
                    <span className="avatar avatar-xs bg-cat-blue fw-bold">
                      2
                    </span>
                    <span className="w-25 flex-shrink-0 fs-md fw-semibold text-title text-truncate">
                      Kevin Smith
                    </span>
                    <span
                      className="progress progress-sm flex-grow-1 min-w-0"
                      role="progressbar"
                      aria-label="Overtime hours logged by Kevin Smith"
                      aria-valuenow="18"
                      aria-valuemin="0"
                      aria-valuemax="24"
                      aria-valuetext="18 hours"
                    >
                      <span
                        className="progress-bar bg-grad-cat from-cat-blue to-cat-emerald"
                        style={{ width: "75%" }}
                      />
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
                  <li className="d-flex align-items-center border-b-soft gap-3 pb-3">
                    <span className="avatar avatar-xs bg-cat-amber fw-bold">
                      3
                    </span>
                    <span className="w-25 flex-shrink-0 fs-md fw-semibold text-title text-truncate">
                      James Dean
                    </span>
                    <span
                      className="progress progress-sm flex-grow-1 min-w-0"
                      role="progressbar"
                      aria-label="Overtime hours logged by James Dean"
                      aria-valuenow="15"
                      aria-valuemin="0"
                      aria-valuemax="24"
                      aria-valuetext="15 hours"
                    >
                      <span
                        className="progress-bar bg-grad-cat from-cat-amber to-cat-orange"
                        style={{ width: "63%" }}
                      />
                    </span>
                    <span className="flex-shrink-0 fs-md fw-bold text-title text-end text-nowrap">
                      <bdi>
                        15
                        {" "}
                        <span className="fs-xs fw-medium text-muted-2">
                          h
                        </span>
                      </bdi>
                    </span>
                  </li>
                  <li className="d-flex align-items-center border-b-soft gap-3 pb-3">
                    <span className="avatar avatar-xs bg-cat-emerald fw-bold">
                      4
                    </span>
                    <span className="w-25 flex-shrink-0 fs-md fw-semibold text-title text-truncate">
                      Priya Kumar
                    </span>
                    <span
                      className="progress progress-sm flex-grow-1 min-w-0"
                      role="progressbar"
                      aria-label="Overtime hours logged by Priya Kumar"
                      aria-valuenow="12"
                      aria-valuemin="0"
                      aria-valuemax="24"
                      aria-valuetext="12 hours"
                    >
                      <span
                        className="progress-bar bg-grad-cat from-cat-emerald to-cat-violet"
                        style={{ width: "50%" }}
                      />
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
                    <span className="avatar avatar-xs bg-cat-orange fw-bold">
                      5
                    </span>
                    <span className="w-25 flex-shrink-0 fs-md fw-semibold text-title text-truncate">
                      Alex Chen
                    </span>
                    <span
                      className="progress progress-sm flex-grow-1 min-w-0"
                      role="progressbar"
                      aria-label="Overtime hours logged by Alex Chen"
                      aria-valuenow="10"
                      aria-valuemin="0"
                      aria-valuemax="24"
                      aria-valuetext="10 hours"
                    >
                      <span
                        className="progress-bar bg-grad-cat from-cat-orange to-cat-amber"
                        style={{ width: "42%" }}
                      />
                    </span>
                    <span className="flex-shrink-0 fs-md fw-bold text-title text-end text-nowrap">
                      <bdi>
                        10
                        {" "}
                        <span className="fs-xs fw-medium text-muted-2">
                          h
                        </span>
                      </bdi>
                    </span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Quick-action modals ===== */}
      <div
        role="dialog"
        className="modal fade"
        id="hrmAddEmployeeModal"
        tabIndex="-1"
        aria-labelledby="hrmAddEmployeeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
          <div className="modal-content">
            <div className="modal-header border-b-soft justify-content-between">
              <div>
                <h2 className="modal-title h5 mb-0" id="hrmAddEmployeeModalLabel">
                  Add Employee
                </h2>
                <p className="fs-md text-muted-2 mb-0">
                  Onboard a new hire and assign their reporting line
                </p>
              </div>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <form data-modal-form="" noValidate>
              <div className="modal-body">
                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <label htmlFor="empName" className="form-label fs-md fw-semibold text-title">
                      Full name
                    </label>
                    {" "}
                    <input
                      type="text"
                      className="form-control"
                      id="empName"
                      name="emp-name"
                      placeholder="e.g. Priya Nair"
                      required
                    />
                    {" "}
                    <div className="invalid-feedback">
                      Enter the employee's full name.
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="empEmail" className="form-label fs-md fw-semibold text-title">
                      Work email
                    </label>
                    {" "}
                    <input
                      type="email"
                      className="form-control"
                      id="empEmail"
                      name="emp-email"
                      placeholder="priya@vionex.com"
                      required
                    />
                    {" "}
                    <div className="invalid-feedback">
                      Enter a valid work email address.
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="empId" className="form-label fs-md fw-semibold text-title">
                      Employee ID
                    </label>
                    {" "}
                    <input type="text" className="form-control" id="empId" name="emp-id" placeholder="VX-1393" />
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="empPhone" className="form-label fs-md fw-semibold text-title">
                      Phone
                    </label>
                    {" "}
                    <input
                      type="tel"
                      className="form-control"
                      id="empPhone"
                      name="emp-phone"
                      placeholder="+1 555 0134"
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="empDepartment" className="form-label fs-md fw-semibold text-title">
                      Department
                    </label>
                    {" "}
                    <select className="form-select" id="empDepartment" name="emp-department" defaultValue="Engineering">
                      <option>
                        Engineering
                      </option>
                      <option>
                        Product
                      </option>
                      <option>
                        Design
                      </option>
                      <option>
                        Sales
                      </option>
                      <option>
                        Marketing
                      </option>
                      <option>
                        Operations
                      </option>
                      <option>
                        {"People & Culture"}
                      </option>
                    </select>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="empTitle" className="form-label fs-md fw-semibold text-title">
                      Job title
                    </label>
                    {" "}
                    <input
                      type="text"
                      className="form-control"
                      id="empTitle"
                      name="emp-title"
                      placeholder="e.g. Senior Engineer"
                      required
                    />
                    {" "}
                    <div className="invalid-feedback">
                      Enter a job title.
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="empType" className="form-label fs-md fw-semibold text-title">
                      Employment type
                    </label>
                    {" "}
                    <select className="form-select" id="empType" name="emp-type" defaultValue="Full-time">
                      <option>
                        Full-time
                      </option>
                      <option>
                        Part-time
                      </option>
                      <option>
                        Contract
                      </option>
                      <option>
                        Intern
                      </option>
                    </select>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="empStart" className="form-label fs-md fw-semibold text-title">
                      Start date
                    </label>
                    {" "}
                    <input type="date" className="form-control" id="empStart" name="emp-start" required />
                    {" "}
                    <div className="invalid-feedback">
                      Choose a start date.
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="empManager" className="form-label fs-md fw-semibold text-title">
                      Reporting manager
                    </label>
                    {" "}
                    <select className="form-select" id="empManager" name="emp-manager" defaultValue="Alex Morgan">
                      <option>
                        Alex Morgan
                      </option>
                      <option>
                        Jordan Davis
                      </option>
                      <option>
                        Kayla Simmons
                      </option>
                      <option>
                        Marcus Bell
                      </option>
                    </select>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="empSalary" className="form-label fs-md fw-semibold text-title">
                      Annual salary
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        $
                      </span>
                      <input
                        type="number"
                        className="form-control"
                        id="empSalary"
                        name="emp-salary"
                        min="0"
                        step="1000"
                        placeholder="95000"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <label htmlFor="empNotes" className="form-label fs-md fw-semibold text-title">
                      Notes
                    </label>
                    {" "}
                    <textarea
                      className="form-control"
                      id="empNotes"
                      name="emp-notes"
                      rows="3"
                      placeholder="Equipment, seating, or anything the onboarding buddy should know."
                    />
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="empOnboarding"
                        name="emp-onboarding"
                        defaultChecked
                      />
                      {" "}
                      <label className="form-check-label fs-md" htmlFor="empOnboarding">
                        Send the onboarding checklist on their start date
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer border-t-soft">
                <button type="button" className="btn btn-outline-soft" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary d-inline-flex align-items-center gap-2">
                  <i className="icon-18" data-lucide="circle-plus" aria-hidden="true" />
                  Add Employee
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        role="dialog"
        className="modal fade"
        id="hrmLeaveRequestModal"
        tabIndex="-1"
        aria-labelledby="hrmLeaveRequestModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
          <div className="modal-content">
            <div className="modal-header border-b-soft justify-content-between">
              <div>
                <h2 className="modal-title h5 mb-0" id="hrmLeaveRequestModalLabel">
                  Leave Request
                </h2>
                <p className="fs-md text-muted-2 mb-0">
                  Submit a time-off request for approval
                </p>
              </div>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <form data-modal-form="" noValidate>
              <div className="modal-body">
                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <label htmlFor="leaveEmployee" className="form-label fs-md fw-semibold text-title">
                      Employee
                    </label>
                    {" "}
                    <select
                      className="form-select"
                      id="leaveEmployee"
                      name="leave-employee"
                      defaultValue="Alex Morgan (me)"
                    >
                      <option>
                        Alex Morgan (me)
                      </option>
                      <option>
                        Priya Nair
                      </option>
                      <option>
                        Jordan Davis
                      </option>
                      <option>
                        Kayla Simmons
                      </option>
                    </select>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="leaveType" className="form-label fs-md fw-semibold text-title">
                      Leave type
                    </label>
                    {" "}
                    <select className="form-select" id="leaveType" name="leave-type" defaultValue="Annual leave">
                      <option>
                        Annual leave
                      </option>
                      <option>
                        Sick leave
                      </option>
                      <option>
                        Parental leave
                      </option>
                      <option>
                        Unpaid leave
                      </option>
                      <option>
                        Compassionate leave
                      </option>
                    </select>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="leaveStart" className="form-label fs-md fw-semibold text-title">
                      First day
                    </label>
                    {" "}
                    <input type="date" className="form-control" id="leaveStart" name="leave-start" required />
                    {" "}
                    <div className="invalid-feedback">
                      Choose the first day of leave.
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="leaveEnd" className="form-label fs-md fw-semibold text-title">
                      Last day
                    </label>
                    {" "}
                    <input type="date" className="form-control" id="leaveEnd" name="leave-end" required />
                    {" "}
                    <div className="invalid-feedback">
                      Choose the last day of leave.
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="leaveCover" className="form-label fs-md fw-semibold text-title">
                      Cover contact
                    </label>
                    {" "}
                    <select className="form-select" id="leaveCover" name="leave-cover" defaultValue="Jordan Davis">
                      <option>
                        Jordan Davis
                      </option>
                      <option>
                        Priya Nair
                      </option>
                      <option>
                        Kayla Simmons
                      </option>
                      <option>
                        No cover required
                      </option>
                    </select>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="leaveBalance" className="form-label fs-md fw-semibold text-title">
                      Days requested
                    </label>
                    {" "}
                    <input
                      type="number"
                      className="form-control"
                      id="leaveBalance"
                      name="leave-days"
                      min="0.5"
                      step="0.5"
                      placeholder="5"
                      aria-describedby="leaveBalanceHelp"
                    />
                    {" "}
                    <span className="d-block fs-xs text-muted-2 mt-1" id="leaveBalanceHelp">
                      <bdi>
                        18.5 days remaining this year.
                      </bdi>
                    </span>
                  </div>
                  <div className="col-12">
                    <label htmlFor="leaveReason" className="form-label fs-md fw-semibold text-title">
                      Reason
                    </label>
                    {" "}
                    <textarea
                      className="form-control"
                      id="leaveReason"
                      name="leave-reason"
                      rows="3"
                      placeholder="Optional context for your approver."
                    />
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="leaveHalfDay" name="leave-half-day" />
                      {" "}
                      <label className="form-check-label fs-md" htmlFor="leaveHalfDay">
                        The first and last days are half days
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer border-t-soft">
                <button type="button" className="btn btn-outline-soft" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary d-inline-flex align-items-center gap-2">
                  <i className="icon-18" data-lucide="calendar" aria-hidden="true" />
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        role="dialog"
        className="modal fade"
        id="hrmRunPayrollModal"
        tabIndex="-1"
        aria-labelledby="hrmRunPayrollModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header border-b-soft justify-content-between">
              <div>
                <h2 className="modal-title h5 mb-0" id="hrmRunPayrollModalLabel">
                  Run Payroll
                </h2>
                <p className="fs-md text-muted-2 mb-0">
                  Review the run before you release it
                </p>
              </div>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <form data-modal-form="" noValidate>
              <div className="modal-body">
                <ul className="list-unstyled bg-soft border-soft rounded-3 p-3 mb-3">
                  <li className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                    <span className="fs-md text-body-2">
                      Pay period
                    </span>
                    <span className="fs-md fw-semibold text-title">
                      <bdi>
                        1 – 31 August 2026
                      </bdi>
                    </span>
                  </li>
                  <li className="d-flex flex-wrap align-items-center justify-content-between gap-2 mt-2">
                    <span className="fs-md text-body-2">
                      Employees included
                    </span>
                    <span className="fs-md fw-semibold text-title">
                      <bdi>
                        1,392
                      </bdi>
                    </span>
                  </li>
                  <li className="d-flex flex-wrap align-items-center justify-content-between gap-2 mt-2">
                    <span className="fs-md text-body-2">
                      Gross total
                    </span>
                    <span className="fs-5 fw-bold text-title">
                      <bdi>
                        $4,218,600
                      </bdi>
                    </span>
                  </li>
                </ul>
                <div className="mb-3">
                  <label htmlFor="payrollDate" className="form-label fs-md fw-semibold text-title">
                    Payment date
                  </label>
                  {" "}
                  <input type="date" className="form-control" id="payrollDate" name="payroll-date" required />
                  {" "}
                  <div className="invalid-feedback">
                    Choose the date salaries should land.
                  </div>
                </div>
                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="payrollBonuses"
                    name="payroll-bonuses"
                    defaultChecked
                  />
                  {" "}
                  <label className="form-check-label fs-md" htmlFor="payrollBonuses">
                    Include bonuses and overtime
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="payrollConfirm"
                    name="payroll-confirm"
                    required
                  />
                  {" "}
                  <label className="form-check-label fs-md" htmlFor="payrollConfirm">
                    I have reviewed this run and approve it
                  </label>
                  {" "}
                  <div className="invalid-feedback">
                    Confirm the run before releasing it.
                  </div>
                </div>
              </div>
              <div className="modal-footer border-t-soft">
                <button type="button" className="btn btn-outline-soft" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary d-inline-flex align-items-center gap-2">
                  <i className="icon-18" data-lucide="dollar-sign" aria-hidden="true" />
                  Release Payroll
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        role="dialog"
        className="modal fade"
        id="hrmReviewModal"
        tabIndex="-1"
        aria-labelledby="hrmReviewModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
          <div className="modal-content">
            <div className="modal-header border-b-soft justify-content-between">
              <div>
                <h2 className="modal-title h5 mb-0" id="hrmReviewModalLabel">
                  Performance Review
                </h2>
                <p className="fs-md text-muted-2 mb-0">
                  Open a review cycle for a team member
                </p>
              </div>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <form data-modal-form="" noValidate>
              <div className="modal-body">
                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <label htmlFor="reviewEmployee" className="form-label fs-md fw-semibold text-title">
                      Employee
                    </label>
                    {" "}
                    <select className="form-select" id="reviewEmployee" name="review-employee" required>
                      <option value="">
                        Choose a team member
                      </option>
                      <option>
                        Priya Nair
                      </option>
                      <option>
                        Jordan Davis
                      </option>
                      <option>
                        Kayla Simmons
                      </option>
                      <option>
                        Marcus Bell
                      </option>
                    </select>
                    {" "}
                    <div className="invalid-feedback">
                      Choose who this review is for.
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="reviewReviewer" className="form-label fs-md fw-semibold text-title">
                      Reviewer
                    </label>
                    {" "}
                    <select
                      className="form-select"
                      id="reviewReviewer"
                      name="review-reviewer"
                      defaultValue="Alex Morgan (me)"
                    >
                      <option>
                        Alex Morgan (me)
                      </option>
                      <option>
                        Jordan Davis
                      </option>
                      <option>
                        Kayla Simmons
                      </option>
                    </select>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="reviewCycle" className="form-label fs-md fw-semibold text-title">
                      Review cycle
                    </label>
                    {" "}
                    <select className="form-select" id="reviewCycle" name="review-cycle" defaultValue="Half-yearly">
                      <option>
                        Half-yearly
                      </option>
                      <option>
                        Quarterly
                      </option>
                      <option>
                        Annual
                      </option>
                      <option>
                        Probation
                      </option>
                    </select>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="reviewRating" className="form-label fs-md fw-semibold text-title">
                      Overall rating
                    </label>
                    {" "}
                    <select
                      className="form-select"
                      id="reviewRating"
                      name="review-rating"
                      defaultValue="Exceeds expectations"
                    >
                      <option>
                        Exceeds expectations
                      </option>
                      <option>
                        Outstanding
                      </option>
                      <option>
                        Meets expectations
                      </option>
                      <option>
                        Needs improvement
                      </option>
                    </select>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="reviewFrom" className="form-label fs-md fw-semibold text-title">
                      Period from
                    </label>
                    {" "}
                    <input type="date" className="form-control" id="reviewFrom" name="review-from" required />
                    {" "}
                    <div className="invalid-feedback">
                      Choose the start of the review period.
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="reviewTo" className="form-label fs-md fw-semibold text-title">
                      Period to
                    </label>
                    {" "}
                    <input type="date" className="form-control" id="reviewTo" name="review-to" required />
                    {" "}
                    <div className="invalid-feedback">
                      Choose the end of the review period.
                    </div>
                  </div>
                  <div className="col-12">
                    <label htmlFor="reviewStrengths" className="form-label fs-md fw-semibold text-title">
                      Strengths
                    </label>
                    {" "}
                    <textarea
                      className="form-control"
                      id="reviewStrengths"
                      name="review-strengths"
                      rows="3"
                      placeholder="What has this person done well this cycle?"
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="reviewFocus" className="form-label fs-md fw-semibold text-title">
                      Focus areas
                    </label>
                    {" "}
                    <textarea
                      className="form-control"
                      id="reviewFocus"
                      name="review-focus"
                      rows="3"
                      placeholder="Where should they grow next cycle?"
                    />
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="reviewSelfAssessment"
                        name="review-self-assessment"
                        defaultChecked
                      />
                      {" "}
                      <label className="form-check-label fs-md" htmlFor="reviewSelfAssessment">
                        Ask the employee for a self-assessment first
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer border-t-soft">
                <button type="button" className="btn btn-outline-soft" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary d-inline-flex align-items-center gap-2">
                  <i className="icon-18" data-lucide="star" aria-hidden="true" />
                  Open Review
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        role="dialog"
        className="modal fade"
        id="hrmJobOpeningModal"
        tabIndex="-1"
        aria-labelledby="hrmJobOpeningModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
          <div className="modal-content">
            <div className="modal-header border-b-soft justify-content-between">
              <div>
                <h2 className="modal-title h5 mb-0" id="hrmJobOpeningModalLabel">
                  Post Job Opening
                </h2>
                <p className="fs-md text-muted-2 mb-0">
                  Publish a new listing to the careers board
                </p>
              </div>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <form data-modal-form="" noValidate>
              <div className="modal-body">
                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <label htmlFor="jobTitle" className="form-label fs-md fw-semibold text-title">
                      Job title
                    </label>
                    {" "}
                    <input
                      type="text"
                      className="form-control"
                      id="jobTitle"
                      name="job-title"
                      placeholder="e.g. Product Designer"
                      required
                    />
                    {" "}
                    <div className="invalid-feedback">
                      Enter the role title.
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="jobDepartment" className="form-label fs-md fw-semibold text-title">
                      Department
                    </label>
                    {" "}
                    <select className="form-select" id="jobDepartment" name="job-department" defaultValue="Engineering">
                      <option>
                        Engineering
                      </option>
                      <option>
                        Product
                      </option>
                      <option>
                        Design
                      </option>
                      <option>
                        Sales
                      </option>
                      <option>
                        Marketing
                      </option>
                      <option>
                        Operations
                      </option>
                    </select>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="jobLocation" className="form-label fs-md fw-semibold text-title">
                      Location
                    </label>
                    {" "}
                    <input
                      type="text"
                      className="form-control"
                      id="jobLocation"
                      name="job-location"
                      placeholder="e.g. Remote — EU"
                      required
                    />
                    {" "}
                    <div className="invalid-feedback">
                      Enter a location or “Remote”.
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="jobType" className="form-label fs-md fw-semibold text-title">
                      Employment type
                    </label>
                    {" "}
                    <select className="form-select" id="jobType" name="job-type" defaultValue="Full-time">
                      <option>
                        Full-time
                      </option>
                      <option>
                        Part-time
                      </option>
                      <option>
                        Contract
                      </option>
                      <option>
                        Internship
                      </option>
                    </select>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="jobOpenings" className="form-label fs-md fw-semibold text-title">
                      Openings
                    </label>
                    {" "}
                    <input
                      type="number"
                      className="form-control"
                      id="jobOpenings"
                      name="job-openings"
                      min="1"
                      step="1"
                      defaultValue="1"
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="jobClosing" className="form-label fs-md fw-semibold text-title">
                      Closing date
                    </label>
                    {" "}
                    <input type="date" className="form-control" id="jobClosing" name="job-closing" />
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="jobSalaryMin" className="form-label fs-md fw-semibold text-title">
                      Salary from
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        $
                      </span>
                      <input
                        type="number"
                        className="form-control"
                        id="jobSalaryMin"
                        name="job-salary-min"
                        min="0"
                        step="1000"
                        placeholder="80000"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="jobSalaryMax" className="form-label fs-md fw-semibold text-title">
                      Salary to
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        $
                      </span>
                      <input
                        type="number"
                        className="form-control"
                        id="jobSalaryMax"
                        name="job-salary-max"
                        min="0"
                        step="1000"
                        placeholder="110000"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <label htmlFor="jobDescription" className="form-label fs-md fw-semibold text-title">
                      Description
                    </label>
                    {" "}
                    <textarea
                      className="form-control"
                      id="jobDescription"
                      name="job-description"
                      rows="4"
                      placeholder="What the role owns, who it works with, and what a great candidate looks like."
                      required
                    />
                    {" "}
                    <div className="invalid-feedback">
                      Add a short description of the role.
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="jobInternal" name="job-internal" />
                      {" "}
                      <label className="form-check-label fs-md" htmlFor="jobInternal">
                        Post internally first for 7 days
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer border-t-soft">
                <button type="button" className="btn btn-outline-soft" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary d-inline-flex align-items-center gap-2">
                  <i className="icon-18" data-lucide="briefcase" aria-hidden="true" />
                  Publish Opening
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        role="dialog"
        className="modal fade"
        id="hrmReportModal"
        tabIndex="-1"
        aria-labelledby="hrmReportModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header border-b-soft justify-content-between">
              <div>
                <h2 className="modal-title h5 mb-0" id="hrmReportModalLabel">
                  Generate Report
                </h2>
                <p className="fs-md text-muted-2 mb-0">
                  Export HR analytics for a date range
                </p>
              </div>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <form data-modal-form="" noValidate>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="reportType" className="form-label fs-md fw-semibold text-title">
                    Report
                  </label>
                  {" "}
                  <select
                    className="form-select"
                    id="reportType"
                    name="report-type"
                    defaultValue={"Headcount & growth"}
                  >
                    <option>
                      {"Headcount & growth"}
                    </option>
                    <option>
                      Attendance summary
                    </option>
                    <option>
                      Payroll register
                    </option>
                    <option>
                      Recruitment pipeline
                    </option>
                    <option>
                      {"Turnover & retention"}
                    </option>
                  </select>
                </div>
                <div className="row g-3 mb-3">
                  <div className="col-12 col-sm-6">
                    <label htmlFor="reportFrom" className="form-label fs-md fw-semibold text-title">
                      From
                    </label>
                    {" "}
                    <input type="date" className="form-control" id="reportFrom" name="report-from" required />
                    {" "}
                    <div className="invalid-feedback">
                      Choose a start date.
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <label htmlFor="reportTo" className="form-label fs-md fw-semibold text-title">
                      To
                    </label>
                    {" "}
                    <input type="date" className="form-control" id="reportTo" name="report-to" required />
                    {" "}
                    <div className="invalid-feedback">
                      Choose an end date.
                    </div>
                  </div>
                </div>
                <fieldset className="mb-3">
                  <legend className="form-label fs-md fw-semibold text-title float-none">
                    Format
                  </legend>
                  <div className="d-flex flex-wrap gap-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="report-format"
                        id="reportPdf"
                        defaultValue="pdf"
                        defaultChecked
                      />
                      {" "}
                      <label className="form-check-label fs-md" htmlFor="reportPdf">
                        PDF
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="report-format"
                        id="reportCsv"
                        defaultValue="csv"
                      />
                      {" "}
                      <label className="form-check-label fs-md" htmlFor="reportCsv">
                        CSV
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="report-format"
                        id="reportXlsx"
                        defaultValue="xlsx"
                      />
                      {" "}
                      <label className="form-check-label fs-md" htmlFor="reportXlsx">
                        XLSX
                      </label>
                    </div>
                  </div>
                </fieldset>
                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="reportCharts"
                    name="report-charts"
                    defaultChecked
                  />
                  {" "}
                  <label className="form-check-label fs-md" htmlFor="reportCharts">
                    Include charts and trend lines
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="reportEmail" name="report-email" />
                  {" "}
                  <label className="form-check-label fs-md" htmlFor="reportEmail">
                    Email me a copy when it is ready
                  </label>
                </div>
              </div>
              <div className="modal-footer border-t-soft">
                <button type="button" className="btn btn-outline-soft" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary d-inline-flex align-items-center gap-2">
                  <i className="icon-18" data-lucide="chart-column" aria-hidden="true" />
                  Generate Report
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* ========== FOOTER ========== */}
    </AppShell>
  );
}

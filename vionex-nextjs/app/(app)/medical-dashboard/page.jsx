/* Generated from the Vionex HTML theme by scripts/convert-html.mjs */
import AppShell from "@/components/AppShell";

export const metadata = {
  title: "Vionex — Medical Dashboard",
  description: "Vionex enterprise admin dashboard — Medical operations overview built with Bootstrap 5, CSS variables and a scalable design system.",
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
          Medical Dashboard
        </h1>
        <nav aria-label="breadcrumb" className="d-none d-md-block">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="/">
                Dashboard
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Medical Dashboard
            </li>
          </ol>
        </nav>
      </div>
      {/* ===== Dashboard sections go here ===== */}
      {/* ===== Welcome & medical KPIs ===== */}
      <section className="mb-4" aria-labelledby="med-welcome-title">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
          <div className="min-w-0">
            <h2 id="med-welcome-title" className="fs-2 fw-bold text-title mb-1">
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
          <button
            type="button"
            className="btn btn-accent flex-grow-1 flex-sm-grow-0 d-inline-flex flex-nowrap align-items-center justify-content-center gap-2 text-nowrap"
          >
            <i className="icon-20" data-lucide="plus" aria-hidden="true" />
            New Appointment
          </button>
        </div>
        <ul className="list-unstyled row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-5 g-3 mb-0">
          <li className="col">
            <div className="card h-100 border-0 bg-fill-blue">
              <div className="card-body d-flex flex-column gap-3 text-white">
                <div className="d-flex align-items-center justify-content-between gap-2">
                  <span className="icon-box rounded-circle bg-white bg-opacity-25" aria-hidden="true">
                    <i data-lucide="calendar" />
                  </span>
                  <div id="medAppointmentsSpark" className="chart-inline" />
                </div>
                <div className="mt-auto">
                  <h3 className="fs-5 fw-medium text-white text-truncate mb-1">
                    Total Appointments
                  </h3>
                  <p className="fs-2 fw-bold lh-1 mb-3">
                    <bdi>
                      1,248
                    </bdi>
                  </p>
                  <div className="d-flex flex-wrap align-items-center gap-2">
                    <span className="badge-soft bg-black bg-opacity-50 text-white d-inline-flex align-items-center gap-1 px-2">
                      {" "}
                      <i className="icon-12 flip-rtl" data-lucide="arrow-up-right" aria-hidden="true" />
                      <bdi>
                        +2.1%
                      </bdi>
                      {" "}
                    </span>
                    <span className="fs-md">
                      vs last month
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100 border-0 bg-fill-violet">
              <div className="card-body d-flex flex-column gap-3 text-white">
                <div className="d-flex align-items-center justify-content-between gap-2">
                  <span className="icon-box rounded-circle bg-white bg-opacity-25" aria-hidden="true">
                    <i data-lucide="users" />
                  </span>
                  <div id="medPatientsSpark" className="chart-inline" />
                </div>
                <div className="mt-auto">
                  <h3 className="fs-5 fw-medium text-white text-truncate mb-1">
                    Total Patients
                  </h3>
                  <p className="fs-2 fw-bold lh-1 mb-3">
                    <bdi>
                      1,248
                    </bdi>
                  </p>
                  <div className="d-flex flex-wrap align-items-center gap-2">
                    <span className="badge-soft bg-black bg-opacity-50 text-white d-inline-flex align-items-center gap-1 px-2">
                      {" "}
                      <i className="icon-12 flip-rtl" data-lucide="arrow-up-right" aria-hidden="true" />
                      <bdi>
                        +2.1%
                      </bdi>
                      {" "}
                    </span>
                    <span className="fs-md">
                      vs last month
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100 border-0 bg-fill-rose">
              <div className="card-body d-flex flex-column gap-3 text-white">
                <div className="d-flex align-items-center justify-content-between gap-2">
                  <span className="icon-box rounded-circle bg-white bg-opacity-25" aria-hidden="true">
                    <i data-lucide="stethoscope" />
                  </span>
                  <div id="medDoctorsSpark" className="chart-inline" />
                </div>
                <div className="mt-auto">
                  <h3 className="fs-5 fw-medium text-white text-truncate mb-1">
                    Active Doctors
                  </h3>
                  <p className="fs-2 fw-bold lh-1 mb-3">
                    <bdi>
                      248
                    </bdi>
                  </p>
                  <div className="d-flex flex-wrap align-items-center gap-2">
                    <span className="badge-soft bg-black bg-opacity-50 text-white d-inline-flex align-items-center gap-1 px-2">
                      {" "}
                      <i className="icon-12 flip-rtl" data-lucide="arrow-up-right" aria-hidden="true" />
                      <bdi>
                        +2.1%
                      </bdi>
                      {" "}
                    </span>
                    <span className="fs-md">
                      vs last month
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100 border-0 bg-fill-emerald">
              <div className="card-body d-flex flex-column gap-3 text-white">
                <div className="d-flex align-items-center justify-content-between gap-2">
                  <span className="icon-box rounded-circle bg-white bg-opacity-25" aria-hidden="true">
                    <i data-lucide="credit-card" />
                  </span>
                  <div id="medRevenueSpark" className="chart-inline" />
                </div>
                <div className="mt-auto">
                  <h3 className="fs-5 fw-medium text-white text-truncate mb-1">
                    Total Revenue
                  </h3>
                  <p className="fs-2 fw-bold lh-1 mb-3">
                    <bdi>
                      $248,560
                    </bdi>
                  </p>
                  <div className="d-flex flex-wrap align-items-center gap-2">
                    <span className="badge-soft bg-black bg-opacity-50 text-white d-inline-flex align-items-center gap-1 px-2">
                      {" "}
                      <i className="icon-12 flip-rtl" data-lucide="arrow-up-right" aria-hidden="true" />
                      <bdi>
                        +2.1%
                      </bdi>
                      {" "}
                    </span>
                    <span className="fs-md">
                      vs last month
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100 border-0 bg-fill-magenta">
              <div className="card-body d-flex flex-column gap-3 text-white">
                <div className="d-flex align-items-center justify-content-between gap-2">
                  <span className="icon-box rounded-circle bg-white bg-opacity-25" aria-hidden="true">
                    <i data-lucide="activity" />
                  </span>
                  <div id="medTestsSpark" className="chart-inline" />
                </div>
                <div className="mt-auto">
                  <h3 className="fs-5 fw-medium text-white text-truncate mb-1">
                    Tests Conducted
                  </h3>
                  <p className="fs-2 fw-bold lh-1 mb-3">
                    <bdi>
                      2,589
                    </bdi>
                  </p>
                  <div className="d-flex flex-wrap align-items-center gap-2">
                    <span className="badge-soft bg-black bg-opacity-50 text-white d-inline-flex align-items-center gap-1 px-2">
                      {" "}
                      <i className="icon-12 flip-rtl" data-lucide="arrow-up-right" aria-hidden="true" />
                      <bdi>
                        +2.1%
                      </bdi>
                      {" "}
                    </span>
                    <span className="fs-md">
                      vs last month
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </section>
      {/* ===== Appointments overview & active cases ===== */}
      <section className="mb-4" aria-labelledby="med-overview-title">
        <h2 id="med-overview-title" className="visually-hidden">
          Appointments overview and active cases
        </h2>
        <div className="row g-3">
          <div className="col-12 col-xl-8">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    Appointments Overview
                  </h3>
                  <div
                    className="nav nav-pills seg-toggle flex-nowrap gap-1 p-1 rounded-pill bg-soft"
                    role="group"
                    aria-label="Appointments time range"
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
                <div id="medAppointmentsChart" className="chart-area" />
                <ul className="d-flex flex-wrap align-items-center gap-3 fs-md text-body-2 mt-auto pt-3 mb-0">
                  <li className="d-inline-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-emerald" />
                    Completed
                  </li>
                  <li className="d-inline-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-blue" />
                    Total Appointments
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-4">
            <div className="on-dark bg-grad-theme rounded-4 h-100 p-3 p-md-4">
              <span className="badge-soft tint-emerald border-current d-inline-flex align-items-center gap-2">
                {" "}
                <span className="legend-dot legend-dot-sm bg-cat-emerald" aria-hidden="true" />
                {" "}
                <bdi>
                  Health Score: 92%
                </bdi>
                {" "}
              </span>
              <p className="display-1 fw-bold text-title lh-1 mt-3 mb-2">
                <bdi>
                  1,248
                </bdi>
              </p>
              <div className="d-flex flex-wrap align-items-center gap-2 mb-4">
                <span className="fs-5 text-title">
                  Active Cases
                </span>
                <span className="badge-soft tint-emerald border-current d-inline-flex align-items-center gap-1">
                  {" "}
                  <i className="icon-12 flip-rtl" data-lucide="arrow-up-right" aria-hidden="true" />
                  <bdi>
                    +12%
                  </bdi>
                  {" "}
                </span>
                <span className="fs-md text-primary">
                  vs last week
                </span>
              </div>
              <div className="bg-soft border-theme rounded-4 p-3 p-md-4 mb-4">
                <span className="d-block fs-xs fw-semibold text-uppercase text-primary">
                  Recovery Rate
                </span>
                {" "}
                <span className="d-flex flex-wrap align-items-baseline gap-2 mt-2">
                  <span className="fs-2 fw-bold text-title lh-1">
                    <bdi>
                      72%
                    </bdi>
                  </span>
                  <span className="d-inline-flex align-items-center gap-1 fs-md fw-bold text-cat-blue">
                    <i className="icon-12 flip-rtl" data-lucide="trending-up" aria-hidden="true" />
                    <bdi>
                      +8% this week
                    </bdi>
                  </span>
                </span>
                {" "}
                <span
                  className="progress mt-3"
                  role="progressbar"
                  aria-label="Progress toward recovery rate target"
                  aria-valuenow="72"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <span className="progress-bar bg-accent" style={{ width: "72%" }} />
                </span>
                {" "}
                <span className="d-flex flex-wrap align-items-center justify-content-between gap-2 fs-xs text-primary mt-2">
                  <bdi>
                    0%
                  </bdi>
                  <bdi>
                    Target 80% · 72%
                  </bdi>
                </span>
              </div>
              <ul className="list-unstyled row g-3 mb-0">
                <li className="col-6">
                  <a
                    href="#"
                    className="bg-grad-5 d-flex flex-column align-items-center justify-content-center gap-2 h-100 p-3 rounded-4 text-title text-decoration-none transition-base hover-lift"
                  >
                    <span className="icon-box bg-muted rounded-circle" aria-hidden="true">
                      <i data-lucide="plus" />
                    </span>
                    <span className="fs-6 fw-medium text-center">
                      Appointments
                    </span>
                  </a>
                </li>
                <li className="col-6">
                  <a
                    href="#"
                    className="bg-grad-crimson d-flex flex-column align-items-center justify-content-center gap-2 h-100 p-3 rounded-4 text-title text-decoration-none transition-base hover-lift"
                  >
                    <span className="icon-box bg-muted rounded-circle" aria-hidden="true">
                      <i data-lucide="minus" />
                    </span>
                    <span className="fs-6 fw-medium text-center">
                      Prescriptions
                    </span>
                  </a>
                </li>
                <li className="col-4">
                  <a
                    href="#"
                    className="bg-grad-bronze d-flex flex-column align-items-center justify-content-center gap-2 h-100 p-3 rounded-4 text-title text-decoration-none transition-base hover-lift"
                  >
                    <span className="icon-box bg-muted rounded-circle" aria-hidden="true">
                      <i className="flip-rtl" data-lucide="arrow-up-right" />
                    </span>
                    <span className="fs-6 fw-medium text-center">
                      Records
                    </span>
                  </a>
                </li>
                <li className="col-4">
                  <a
                    href="#"
                    className="bg-grad-3 d-flex flex-column align-items-center justify-content-center gap-2 h-100 p-3 rounded-4 text-title text-decoration-none transition-base hover-lift"
                  >
                    <span className="icon-box bg-muted rounded-circle" aria-hidden="true">
                      <i className="flip-rtl" data-lucide="arrow-down-left" />
                    </span>
                    <span className="fs-6 fw-medium text-center">
                      Lab Results
                    </span>
                  </a>
                </li>
                <li className="col-4">
                  <a
                    href="#"
                    className="bg-grad-1 d-flex flex-column align-items-center justify-content-center gap-2 h-100 p-3 rounded-4 text-title text-decoration-none transition-base hover-lift"
                  >
                    <span className="icon-box bg-muted rounded-circle" aria-hidden="true">
                      <i data-lucide="pie-chart" />
                    </span>
                    <span className="fs-6 fw-medium text-center">
                      Vitals
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Patients overview & revenue ===== */}
      <section className="mb-4" aria-labelledby="med-patients-title">
        <h2 id="med-patients-title" className="visually-hidden">
          Patients overview and revenue
        </h2>
        <div className="row g-3">
          <div className="col-12 col-xxl-7">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
                  <div>
                    <h3 className="fs-5 fw-bold text-title mb-1">
                      Patients Overview
                    </h3>
                    <p className="fs-md text-muted-2 mb-0">
                      Built for Smarter Healthcare Management.
                    </p>
                  </div>
                  <div className="bg-primary-soft d-flex flex-wrap align-items-center justify-content-between flex-grow-1 gap-3 p-3 rounded-2">
                    <div>
                      <p className="fs-5 fw-bold text-title mb-0">
                        <bdi>
                          12.4k
                        </bdi>
                      </p>
                      <p className="fs-md text-muted-2 mb-1">
                        Total Patients
                      </p>
                      <p className="text-success d-flex align-items-center gap-1 fs-xs fw-semibold mb-0">
                        <i className="icon-12" data-lucide="arrow-up" aria-hidden="true" />
                        <span dir="ltr">
                          +4.2%
                        </span>
                      </p>
                    </div>
                    <span className="vr d-none d-sm-block" aria-hidden="true" />
                    <div>
                      <p className="fs-5 fw-bold text-title mb-0">
                        <bdi>
                          6.2d
                        </bdi>
                      </p>
                      <p className="fs-md text-muted-2 mb-1">
                        Avg. Stay
                      </p>
                      <p className="text-success d-flex align-items-center gap-1 fs-xs fw-semibold mb-0">
                        <i className="icon-12" data-lucide="arrow-down" aria-hidden="true" />
                        <span dir="ltr">
                          -0.8d
                        </span>
                      </p>
                    </div>
                    <span className="vr d-none d-sm-block" aria-hidden="true" />
                    <div>
                      <p className="fs-5 fw-bold text-title mb-0">
                        <bdi>
                          82%
                        </bdi>
                      </p>
                      <p className="fs-md text-muted-2 mb-1">
                        Recovery Rate
                      </p>
                      <p className="text-success d-flex align-items-center gap-1 fs-xs fw-semibold mb-0">
                        <i className="icon-12" data-lucide="arrow-up" aria-hidden="true" />
                        <span dir="ltr">
                          +2.1%
                        </span>
                      </p>
                    </div>
                  </div>
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
                            <div id="medDepartmentChart" className="chart-area" />
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
                                Cardiology
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
                                Neurology
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
                                Orthopedics
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
                    <div className="bg-plain border-theme d-flex flex-column h-100 p-3 rounded-3">
                      <h4 className="fs-6 fw-medium text-primary mb-3">
                        Patient Admissions
                      </h4>
                      <div className="row align-items-center flex-grow-1 g-3">
                        <div className="col-12 col-sm-6">
                          <div className="position-relative">
                            <div id="medAdmissionsChart" className="chart-area" />
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
                                Emergency
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
                                Outpatient
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
                                Referral
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
          <div className="col-12 col-xxl-5">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    Revenue Overview
                  </h3>
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn btn-outline-soft d-inline-flex align-items-center gap-2"
                      id="medRevenueYear"
                      data-bs-toggle="dropdown"
                      data-bs-offset="0,8"
                      aria-expanded="false"
                    >
                      Select Year
                      {" "}
                      <i data-lucide="chevron-down" className="dd-caret icon-18" aria-hidden="true" />
                    </button>
                    {" "}
                    <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="medRevenueYear">
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
                <div className="d-flex flex-wrap align-items-baseline gap-2">
                  <p className="fs-3 fw-bold text-title mb-0">
                    <bdi>
                      $248,560
                    </bdi>
                  </p>
                  <span className="badge-soft tint-success fs-xs fw-bold">
                    <bdi>
                      +14.3%
                    </bdi>
                  </span>
                </div>
                <p className="fs-xs text-muted-2 mb-3">
                  vs last month
                </p>
                <div id="medRevenueOverviewChart" className="chart-area mt-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Today's schedule, hospital stats & doctors ===== */}
      <section className="mb-4" aria-labelledby="med-ops-title">
        <h2 id="med-ops-title" className="visually-hidden">
          Today’s schedule, hospital stats and doctors
        </h2>
        <div className="row g-3">
          <div className="col-12 col-lg-6 col-xxl-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    Today’s Schedule
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
                          John Smith
                        </span>
                        <span className="fs-md fw-medium text-muted-2 text-truncate">
                          General Consultation
                        </span>
                      </span>
                    </span>
                    <span className="d-flex flex-column align-items-end flex-shrink-0 gap-2">
                      <span className="fs-sm fw-bold text-body-2">
                        <bdi>
                          09:00 AM
                        </bdi>
                      </span>
                      <span className="badge-soft tint-success fs-xs fw-bold">
                        Confirmed
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
                          Amelia Ford
                        </span>
                        <span className="fs-md fw-medium text-muted-2 text-truncate">
                          Cardiac Screening
                        </span>
                      </span>
                    </span>
                    <span className="d-flex flex-column align-items-end flex-shrink-0 gap-2">
                      <span className="fs-sm fw-bold text-body-2">
                        <bdi>
                          09:45 AM
                        </bdi>
                      </span>
                      <span className="badge-soft tint-warning fs-xs fw-bold">
                        Pending
                      </span>
                    </span>
                  </li>
                  <li className="bg-plain border-theme d-flex align-items-center justify-content-between flex-grow-1 gap-3 p-3 rounded-3">
                    <span className="d-flex align-items-center gap-3 min-w-0">
                      <span className="avatar avatar-md">
                        <img src="/assets/images/avatar-3.png" width="48" height="48" alt="" />
                      </span>
                      <span className="d-flex flex-column min-w-0">
                        <span className="fs-6 fw-bold text-title text-truncate">
                          Daniel Okafor
                        </span>
                        <span className="fs-md fw-medium text-muted-2 text-truncate">
                          Post-Op Follow-up
                        </span>
                      </span>
                    </span>
                    <span className="d-flex flex-column align-items-end flex-shrink-0 gap-2">
                      <span className="fs-sm fw-bold text-body-2">
                        <bdi>
                          10:30 AM
                        </bdi>
                      </span>
                      <span className="badge-soft tint-success fs-xs fw-bold">
                        Confirmed
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
                          Sofia Marquez
                        </span>
                        <span className="fs-md fw-medium text-muted-2 text-truncate">
                          Prenatal Checkup
                        </span>
                      </span>
                    </span>
                    <span className="d-flex flex-column align-items-end flex-shrink-0 gap-2">
                      <span className="fs-sm fw-bold text-body-2">
                        <bdi>
                          11:15 AM
                        </bdi>
                      </span>
                      <span className="badge-soft tint-success fs-xs fw-bold">
                        Confirmed
                      </span>
                    </span>
                  </li>
                  <li className="bg-plain border-theme d-flex align-items-center justify-content-between flex-grow-1 gap-3 p-3 rounded-3">
                    <span className="d-flex align-items-center gap-3 min-w-0">
                      <span className="avatar avatar-md">
                        <img src="/assets/images/avatar-1.png" width="48" height="48" alt="" />
                      </span>
                      <span className="d-flex flex-column min-w-0">
                        <span className="fs-6 fw-bold text-title text-truncate">
                          Ethan Brooks
                        </span>
                        <span className="fs-md fw-medium text-muted-2 text-truncate">
                          Physiotherapy
                        </span>
                      </span>
                    </span>
                    <span className="d-flex flex-column align-items-end flex-shrink-0 gap-2">
                      <span className="fs-sm fw-bold text-body-2">
                        <bdi>
                          01:00 PM
                        </bdi>
                      </span>
                      <span className="badge-soft tint-info fs-xs fw-bold">
                        In Progress
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
                          Hannah Weber
                        </span>
                        <span className="fs-md fw-medium text-muted-2 text-truncate">
                          Dermatology Review
                        </span>
                      </span>
                    </span>
                    <span className="d-flex flex-column align-items-end flex-shrink-0 gap-2">
                      <span className="fs-sm fw-bold text-body-2">
                        <bdi>
                          02:30 PM
                        </bdi>
                      </span>
                      <span className="badge-soft bg-muted text-body-2 fs-xs fw-bold">
                        Upcoming
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-4">
            <div className="d-flex flex-column h-100 gap-3">
              <ul className="list-unstyled row row-cols-1 row-cols-sm-2 g-3 mb-0">
                <li className="col">
                  <div className="card h-100 border-0 bg-fill-magenta">
                    <div className="card-body d-flex align-items-center gap-2 text-white">
                      <span className="icon-box rounded-circle bg-white bg-opacity-25" aria-hidden="true">
                        <i data-lucide="layers" />
                      </span>
                      <span className="d-flex flex-column min-w-0">
                        <span className="fs-5 fw-bold lh-1">
                          <bdi>
                            12
                          </bdi>
                        </span>
                        <span className="fs-md fw-medium opacity-75">
                          Total Departments
                        </span>
                        <a href="#" className="align-self-start fs-xs fw-semibold text-white text-decoration-none">
                          View all
                        </a>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="col">
                  <div className="card h-100 border-0 bg-fill-violet">
                    <div className="card-body d-flex align-items-center gap-2 text-white">
                      <span className="icon-box rounded-circle bg-white bg-opacity-25" aria-hidden="true">
                        <i data-lucide="pill" />
                      </span>
                      <span className="d-flex flex-column min-w-0">
                        <span className="fs-5 fw-bold lh-1">
                          <bdi>
                            1,285
                          </bdi>
                        </span>
                        <span className="fs-md fw-medium opacity-75">
                          Medicines in Stock
                        </span>
                        <a href="#" className="align-self-start fs-xs fw-semibold text-white text-decoration-none">
                          View all
                        </a>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="col">
                  <div className="card h-100 border-0 bg-fill-emerald">
                    <div className="card-body d-flex align-items-center gap-2 text-white">
                      <span className="icon-box rounded-circle bg-white bg-opacity-25" aria-hidden="true">
                        <i data-lucide="activity" />
                      </span>
                      <span className="d-flex flex-column min-w-0">
                        <span className="fs-5 fw-bold lh-1">
                          <bdi>
                            3,256
                          </bdi>
                        </span>
                        <span className="fs-md fw-medium opacity-75">
                          Tests Conducted
                        </span>
                        <a href="#" className="align-self-start fs-xs fw-semibold text-white text-decoration-none">
                          View all
                        </a>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="col">
                  <div className="card h-100 border-0 bg-fill-amber">
                    <div className="card-body d-flex align-items-center gap-2 text-white">
                      <span className="icon-box rounded-circle bg-white bg-opacity-25" aria-hidden="true">
                        <i data-lucide="bed" />
                      </span>
                      <span className="d-flex flex-column min-w-0">
                        <span className="fs-5 fw-bold lh-1">
                          <bdi>
                            78%
                          </bdi>
                        </span>
                        <span className="fs-md fw-medium opacity-75">
                          Average Occupancy
                        </span>
                        <a href="#" className="align-self-start fs-xs fw-semibold text-white text-decoration-none">
                          View all
                        </a>
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="card flex-grow-1">
                <div className="card-body d-flex flex-column">
                  <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                    <h3 className="fs-5 fw-bold text-title mb-0">
                      Recent Activities
                    </h3>
                    <a href="#" className="btn btn-accent btn-sm fw-semibold text-nowrap">
                      View All
                    </a>
                  </div>
                  <ul className="d-flex flex-column flex-grow-1 gap-3 mb-0">
                    <li className="d-flex align-items-center flex-grow-1 gap-3 pb-3 border-b-soft">
                      <span className="icon-box icon-box-sm tint-violet" aria-hidden="true">
                        <i data-lucide="user-plus" />
                      </span>
                      <span className="fs-6 text-title flex-grow-1 min-w-0 text-truncate">
                        Robert Fox created a new lead
                      </span>
                      <span className="fs-xs text-muted-2 flex-shrink-0">
                        <bdi>
                          10:30 AM
                        </bdi>
                      </span>
                    </li>
                    <li className="d-flex align-items-center flex-grow-1 gap-3 pb-3 border-b-soft">
                      <span className="icon-box icon-box-sm tint-emerald" aria-hidden="true">
                        <i data-lucide="shopping-bag" />
                      </span>
                      <span className="fs-6 text-title flex-grow-1 min-w-0 text-truncate">
                        Emma Johnson scheduled a product demo
                      </span>
                      <span className="fs-xs text-muted-2 flex-shrink-0">
                        <bdi>
                          09:45 PM
                        </bdi>
                      </span>
                    </li>
                    <li className="d-flex align-items-center flex-grow-1 gap-3 pb-3 border-b-soft">
                      <span className="icon-box icon-box-sm tint-cyan" aria-hidden="true">
                        <i data-lucide="credit-card" />
                      </span>
                      <span className="fs-6 text-title flex-grow-1 min-w-0 text-truncate">
                        Payment received
                      </span>
                      <span className="fs-xs text-muted-2 flex-shrink-0">
                        <bdi>
                          10:30 AM
                        </bdi>
                      </span>
                    </li>
                    <li className="d-flex align-items-center flex-grow-1 gap-3 pb-3 border-b-soft">
                      <span className="icon-box icon-box-sm tint-amber" aria-hidden="true">
                        <i data-lucide="star" />
                      </span>
                      <span className="fs-6 text-title flex-grow-1 min-w-0 text-truncate">
                        Proposal sent to PixelEdge Co.
                      </span>
                      <span className="fs-xs text-muted-2 flex-shrink-0">
                        Yesterday
                      </span>
                    </li>
                    <li className="d-flex align-items-center flex-grow-1 gap-3">
                      <span className="icon-box icon-box-sm tint-violet" aria-hidden="true">
                        <i data-lucide="user-plus" />
                      </span>
                      <span className="fs-6 text-title flex-grow-1 min-w-0 text-truncate">
                        New Registration
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
          <div className="col-12 col-lg-6 col-xxl-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    Doctors List
                  </h3>
                  <a href="#" className="btn btn-accent btn-sm fw-semibold text-nowrap">
                    View All
                  </a>
                </div>
                <ul className="d-flex flex-column flex-grow-1 gap-2 mb-0">
                  <li className="bg-plain border-theme d-flex align-items-center justify-content-between flex-grow-1 gap-3 p-3 rounded-3">
                    <span className="d-flex align-items-center gap-3 min-w-0">
                      <span className="avatar avatar-md">
                        <img src="/assets/images/avatar-3.png" width="48" height="48" alt="" />
                      </span>
                      <span className="d-flex flex-column min-w-0">
                        <span className="fs-6 fw-bold text-title text-truncate">
                          Dr. John Smith
                        </span>
                        <span className="fs-md fw-medium text-muted-2 text-truncate">
                          Cardiology
                        </span>
                      </span>
                    </span>
                    <span className="badge-soft tint-success flex-shrink-0 fs-xs fw-bold">
                      Available
                    </span>
                  </li>
                  <li className="bg-plain border-theme d-flex align-items-center justify-content-between flex-grow-1 gap-3 p-3 rounded-3">
                    <span className="d-flex align-items-center gap-3 min-w-0">
                      <span className="avatar avatar-md">
                        <img src="/assets/images/avatar-4.png" width="48" height="48" alt="" />
                      </span>
                      <span className="d-flex flex-column min-w-0">
                        <span className="fs-6 fw-bold text-title text-truncate">
                          Dr. Sarah Chen
                        </span>
                        <span className="fs-md fw-medium text-muted-2 text-truncate">
                          Neurology
                        </span>
                      </span>
                    </span>
                    <span className="badge-soft tint-danger flex-shrink-0 fs-xs fw-bold">
                      Not Available
                    </span>
                  </li>
                  <li className="bg-plain border-theme d-flex align-items-center justify-content-between flex-grow-1 gap-3 p-3 rounded-3">
                    <span className="d-flex align-items-center gap-3 min-w-0">
                      <span className="avatar avatar-md">
                        <img src="/assets/images/avatar-1.png" width="48" height="48" alt="" />
                      </span>
                      <span className="d-flex flex-column min-w-0">
                        <span className="fs-6 fw-bold text-title text-truncate">
                          Dr. Michael Torres
                        </span>
                        <span className="fs-md fw-medium text-muted-2 text-truncate">
                          Orthopedics
                        </span>
                      </span>
                    </span>
                    <span className="badge-soft tint-success flex-shrink-0 fs-xs fw-bold">
                      Available
                    </span>
                  </li>
                  <li className="bg-plain border-theme d-flex align-items-center justify-content-between flex-grow-1 gap-3 p-3 rounded-3">
                    <span className="d-flex align-items-center gap-3 min-w-0">
                      <span className="avatar avatar-md">
                        <img src="/assets/images/avatar-2.png" width="48" height="48" alt="" />
                      </span>
                      <span className="d-flex flex-column min-w-0">
                        <span className="fs-6 fw-bold text-title text-truncate">
                          Dr. Emily Parker
                        </span>
                        <span className="fs-md fw-medium text-muted-2 text-truncate">
                          Pediatrics
                        </span>
                      </span>
                    </span>
                    <span className="badge-soft tint-danger flex-shrink-0 fs-xs fw-bold">
                      Not Available
                    </span>
                  </li>
                  <li className="bg-plain border-theme d-flex align-items-center justify-content-between flex-grow-1 gap-3 p-3 rounded-3">
                    <span className="d-flex align-items-center gap-3 min-w-0">
                      <span className="avatar avatar-md">
                        <img src="/assets/images/avatar-3.png" width="48" height="48" alt="" />
                      </span>
                      <span className="d-flex flex-column min-w-0">
                        <span className="fs-6 fw-bold text-title text-truncate">
                          Dr. James Wilson
                        </span>
                        <span className="fs-md fw-medium text-muted-2 text-truncate">
                          Dermatology
                        </span>
                      </span>
                    </span>
                    <span className="badge-soft tint-success flex-shrink-0 fs-xs fw-bold">
                      Available
                    </span>
                  </li>
                  <li className="bg-plain border-theme d-flex align-items-center justify-content-between flex-grow-1 gap-3 p-3 rounded-3">
                    <span className="d-flex align-items-center gap-3 min-w-0">
                      <span className="avatar avatar-md">
                        <img src="/assets/images/avatar-4.png" width="48" height="48" alt="" />
                      </span>
                      <span className="d-flex flex-column min-w-0">
                        <span className="fs-6 fw-bold text-title text-truncate">
                          Dr. Priya Sharma
                        </span>
                        <span className="fs-md fw-medium text-muted-2 text-truncate">
                          Oncology
                        </span>
                      </span>
                    </span>
                    <span className="badge-soft tint-success flex-shrink-0 fs-xs fw-bold">
                      Available
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Recent patients ===== */}
      <section className="mb-4" aria-labelledby="med-recent-patients-title">
        <h2 id="med-recent-patients-title" className="visually-hidden">
          Recent patients
        </h2>
        <div className="card bg-glass">
          <div className="card-body">
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
              <h3 className="fs-5 fw-bold text-title mb-0">
                Recent Patients
              </h3>
              <a href="#" className="btn btn-accent btn-sm fw-semibold text-nowrap">
                View All
              </a>
            </div>
            <div className="table-responsive">
              <table className="table table-striped table-hover align-middle mb-0">
                <caption className="visually-hidden">
                  Recently admitted and scheduled patients
                </caption>
                <thead>
                  <tr>
                    <th scope="col">
                      #
                    </th>
                    <th scope="col">
                      Name
                    </th>
                    <th scope="col">
                      Diagnosis
                    </th>
                    <th scope="col">
                      Status
                    </th>
                    <th scope="col">
                      Doctor
                    </th>
                    <th scope="col">
                      Date
                    </th>
                    <th scope="col">
                      Next Visit
                    </th>
                    <th scope="col">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span className="fs-md fw-medium text-muted-2">
                        <bdi>
                          1
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-sm bg-grad-4" aria-hidden="true">
                          AP
                        </span>
                        <span className="d-flex flex-column">
                          <span className="fs-md fw-semibold text-title">
                            Ava Patel
                          </span>
                          <span className="fs-xs text-muted-2">
                            <bdi>
                              ID: 10482
                            </bdi>
                          </span>
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        Hypertension
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-success">
                        Admitted
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        Dr. A. Patel
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        <bdi>
                          2026-03-12
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md text-muted-2">
                        <bdi>
                          2026-03-26
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-1">
                        <button
                          type="button"
                          className="btn btn-outline-soft btn-18 rounded-circle"
                          aria-label="Open patient record for Ava Patel"
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
                            aria-label="More actions for patient Ava Patel"
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
                                <i data-lucide="file-text" />
                                Medical history
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="calendar-plus" />
                                Schedule visit
                              </button>
                            </li>
                            <li>
                              <hr className="dropdown-divider my-1" />
                            </li>
                            <li>
                              <button type="button" className="dropdown-item dropdown-item-danger">
                                <i data-lucide="trash-2" />
                                Delete record
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="fs-md fw-medium text-muted-2">
                        <bdi>
                          2
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-sm bg-grad-1" aria-hidden="true">
                          MC
                        </span>
                        <span className="d-flex flex-column">
                          <span className="fs-md fw-semibold text-title">
                            Marcus Chen
                          </span>
                          <span className="fs-xs text-muted-2">
                            <bdi>
                              ID: 10491
                            </bdi>
                          </span>
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        Type 2 Diabetes
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-success">
                        Discharged
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        Dr. M. Chen
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        <bdi>
                          2026-03-11
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md text-muted-2">
                        <bdi>
                          2026-04-08
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-1">
                        <button
                          type="button"
                          className="btn btn-outline-soft btn-18 rounded-circle"
                          aria-label="Open patient record for Marcus Chen"
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
                            aria-label="More actions for patient Marcus Chen"
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
                                <i data-lucide="file-text" />
                                Medical history
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="calendar-plus" />
                                Schedule visit
                              </button>
                            </li>
                            <li>
                              <hr className="dropdown-divider my-1" />
                            </li>
                            <li>
                              <button type="button" className="dropdown-item dropdown-item-danger">
                                <i data-lucide="trash-2" />
                                Delete record
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="fs-md fw-medium text-muted-2">
                        <bdi>
                          3
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-sm bg-grad-2" aria-hidden="true">
                          SL
                        </span>
                        <span className="d-flex flex-column">
                          <span className="fs-md fw-semibold text-title">
                            Sofia Lee
                          </span>
                          <span className="fs-xs text-muted-2">
                            <bdi>
                              ID: 10503
                            </bdi>
                          </span>
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        Migraine
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-success">
                        In Treatment
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        Dr. S. Lee
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        <bdi>
                          2026-03-10
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md text-muted-2">
                        <bdi>
                          2026-03-24
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-1">
                        <button
                          type="button"
                          className="btn btn-outline-soft btn-18 rounded-circle"
                          aria-label="Open patient record for Sofia Lee"
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
                            aria-label="More actions for patient Sofia Lee"
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
                                <i data-lucide="file-text" />
                                Medical history
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="calendar-plus" />
                                Schedule visit
                              </button>
                            </li>
                            <li>
                              <hr className="dropdown-divider my-1" />
                            </li>
                            <li>
                              <button type="button" className="dropdown-item dropdown-item-danger">
                                <i data-lucide="trash-2" />
                                Delete record
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="fs-md fw-medium text-muted-2">
                        <bdi>
                          4
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-sm bg-grad-3" aria-hidden="true">
                          JR
                        </span>
                        <span className="d-flex flex-column">
                          <span className="fs-md fw-semibold text-title">
                            Jordan Rivera
                          </span>
                          <span className="fs-xs text-muted-2">
                            <bdi>
                              ID: 10512
                            </bdi>
                          </span>
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        Asthma
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-danger">
                        Scheduled
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        Dr. J. Rivera
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        <bdi>
                          2026-03-09
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md text-muted-2">
                        <bdi>
                          2026-03-19
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-1">
                        <button
                          type="button"
                          className="btn btn-outline-soft btn-18 rounded-circle"
                          aria-label="Open patient record for Jordan Rivera"
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
                            aria-label="More actions for patient Jordan Rivera"
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
                                <i data-lucide="file-text" />
                                Medical history
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="calendar-plus" />
                                Schedule visit
                              </button>
                            </li>
                            <li>
                              <hr className="dropdown-divider my-1" />
                            </li>
                            <li>
                              <button type="button" className="dropdown-item dropdown-item-danger">
                                <i data-lucide="trash-2" />
                                Delete record
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
                Showing 1–4 of 24 patients
              </span>
              <nav aria-label="Recent patients pagination">
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
      {/* ===== Available treatments ===== */}
      <section className="mb-4" aria-labelledby="med-treatments-title">
        <h2 id="med-treatments-title" className="visually-hidden">
          Available treatments
        </h2>
        <div className="card on-dark bg-nav-deep">
          <div className="card-body">
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
              <h3 className="fs-5 fw-bold text-title mb-0">
                Available Treatments
              </h3>
              <a href="#" className="btn btn-accent btn-sm fw-semibold text-nowrap">
                View All
              </a>
            </div>
            <ul className="list-unstyled row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-5 g-3 mb-0">
              <li className="col">
                <div className="card bg-nav-strong h-100">
                  <div className="card-body d-flex flex-column gap-3 p-3">
                    <div className="ratio ratio-4x3 rounded-4 overflow-hidden">
                      <img
                        src="/assets/images/treatment-physiotherapy.jpg"
                        alt=""
                        width="640"
                        height="480"
                        className="object-fit-cover pe-none"
                      />
                      {" "}
                      <span className="media-scrim" aria-hidden="true" />
                    </div>
                    <div className="d-flex flex-column flex-grow-1 gap-2">
                      <h4 className="fs-5 fw-bold text-title mb-0">
                        Physiotherapy
                      </h4>
                      <p className="fs-md text-body-2 flex-grow-1 mb-0">
                        Personalized recovery and mobility plans.
                      </p>
                      <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                        <span className="fs-md fw-semibold text-title">
                          <bdi>
                            From $85
                          </bdi>
                        </span>
                        <button
                          type="button"
                          className="btn btn-accent-ghost btn-sm rounded-pill fw-semibold text-nowrap"
                          aria-label="Book Physiotherapy"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="col">
                <div className="card bg-nav-strong h-100">
                  <div className="card-body d-flex flex-column gap-3 p-3">
                    <div className="ratio ratio-4x3 rounded-4 overflow-hidden">
                      <img
                        src="/assets/images/treatment-dental-care.jpg"
                        alt=""
                        width="640"
                        height="480"
                        className="object-fit-cover pe-none"
                      />
                      {" "}
                      <span className="media-scrim" aria-hidden="true" />
                    </div>
                    <div className="d-flex flex-column flex-grow-1 gap-2">
                      <h4 className="fs-5 fw-bold text-title mb-0">
                        Dental Care
                      </h4>
                      <p className="fs-md text-body-2 flex-grow-1 mb-0">
                        Comprehensive checkups and cosmetic services.
                      </p>
                      <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                        <span className="fs-md fw-semibold text-title">
                          <bdi>
                            From $120
                          </bdi>
                        </span>
                        <button
                          type="button"
                          className="btn btn-accent-ghost btn-sm rounded-pill fw-semibold text-nowrap"
                          aria-label="Book Dental Care"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="col">
                <div className="card bg-nav-strong h-100">
                  <div className="card-body d-flex flex-column gap-3 p-3">
                    <div className="ratio ratio-4x3 rounded-4 overflow-hidden">
                      <img
                        src="/assets/images/treatment-cardiology.jpg"
                        alt=""
                        width="640"
                        height="480"
                        className="object-fit-cover pe-none"
                      />
                      {" "}
                      <span className="media-scrim" aria-hidden="true" />
                    </div>
                    <div className="d-flex flex-column flex-grow-1 gap-2">
                      <h4 className="fs-5 fw-bold text-title mb-0">
                        Cardiology
                      </h4>
                      <p className="fs-md text-body-2 flex-grow-1 mb-0">
                        Advanced heart health diagnostics and care.
                      </p>
                      <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                        <span className="fs-md fw-semibold text-title">
                          <bdi>
                            From $150
                          </bdi>
                        </span>
                        <button
                          type="button"
                          className="btn btn-accent-ghost btn-sm rounded-pill fw-semibold text-nowrap"
                          aria-label="Book Cardiology"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="col">
                <div className="card bg-nav-strong h-100">
                  <div className="card-body d-flex flex-column gap-3 p-3">
                    <div className="ratio ratio-4x3 rounded-4 overflow-hidden">
                      <img
                        src="/assets/images/treatment-dermatology.jpg"
                        alt=""
                        width="640"
                        height="480"
                        className="object-fit-cover pe-none"
                      />
                      {" "}
                      <span className="media-scrim" aria-hidden="true" />
                    </div>
                    <div className="d-flex flex-column flex-grow-1 gap-2">
                      <h4 className="fs-5 fw-bold text-title mb-0">
                        Dermatology
                      </h4>
                      <p className="fs-md text-body-2 flex-grow-1 mb-0">
                        Skin health and aesthetic treatments.
                      </p>
                      <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                        <span className="fs-md fw-semibold text-title">
                          <bdi>
                            From $95
                          </bdi>
                        </span>
                        <button
                          type="button"
                          className="btn btn-accent-ghost btn-sm rounded-pill fw-semibold text-nowrap"
                          aria-label="Book Dermatology"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="col">
                <div className="card bg-nav-strong h-100">
                  <div className="card-body d-flex flex-column gap-3 p-3">
                    <div className="ratio ratio-4x3 rounded-4 overflow-hidden">
                      <img
                        src="/assets/images/treatment-eye-care.jpg"
                        alt=""
                        width="640"
                        height="480"
                        className="object-fit-cover pe-none"
                      />
                      {" "}
                      <span className="media-scrim" aria-hidden="true" />
                    </div>
                    <div className="d-flex flex-column flex-grow-1 gap-2">
                      <h4 className="fs-5 fw-bold text-title mb-0">
                        Eye Care
                      </h4>
                      <p className="fs-md text-body-2 flex-grow-1 mb-0">
                        Vision exams and corrective procedures.
                      </p>
                      <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                        <span className="fs-md fw-semibold text-title">
                          <bdi>
                            From $110
                          </bdi>
                        </span>
                        <button
                          type="button"
                          className="btn btn-accent-ghost btn-sm rounded-pill fw-semibold text-nowrap"
                          aria-label="Book Eye Care"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* ===== Medication & prescriptions ===== */}
      <section className="mb-4" aria-labelledby="med-prescriptions-title">
        <h2 id="med-prescriptions-title" className="visually-hidden">
          Medication and prescriptions
        </h2>
        <div className="card bg-glass">
          <div className="card-body">
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
              <h3 className="fs-5 fw-bold text-title mb-0">
                {"Medication & Prescriptions"}
              </h3>
              <div className="d-flex flex-wrap align-items-center gap-2">
                <span className="badge-soft tint-blue px-3 py-2">
                  <bdi>
                    Total Prescriptions: 842
                  </bdi>
                </span>
                <span className="badge-soft tint-emerald px-3 py-2">
                  <bdi>
                    Active: 634
                  </bdi>
                </span>
                <span className="badge-soft tint-danger px-3 py-2">
                  <bdi>
                    Expiring Soon: 28
                  </bdi>
                </span>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-striped table-hover align-middle mb-0">
                <caption className="visually-hidden">
                  Current medications and prescriptions
                </caption>
                <thead>
                  <tr>
                    <th scope="col">
                      #
                    </th>
                    <th scope="col">
                      Medication Name
                    </th>
                    <th scope="col">
                      Dosage
                    </th>
                    <th scope="col">
                      Frequency
                    </th>
                    <th scope="col">
                      Patient Name
                    </th>
                    <th scope="col">
                      Prescribing Doctor
                    </th>
                    <th scope="col">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span className="fs-md fw-medium text-muted-2">
                        <bdi>
                          1
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="fs-6 fw-bold text-title">
                        Amoxicillin
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        <bdi>
                          500 mg
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        <bdi>
                          3 times daily
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        Sophia Martinez
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        Dr. A. Patel
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-success">
                        Active
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="fs-md fw-medium text-muted-2">
                        <bdi>
                          2
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="fs-6 fw-bold text-title">
                        Lisinopril
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        <bdi>
                          200 mg
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        <bdi>
                          Twice daily (with meals)
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        Marcus Chen
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        Dr. M. Chen
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-success">
                        Active
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="fs-md fw-medium text-muted-2">
                        <bdi>
                          3
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="fs-6 fw-bold text-title">
                        Metformin
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        <bdi>
                          10 mg
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        <bdi>
                          Once daily (morning)
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        Sophia Martinez
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        Dr. S. Lee
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-warning">
                        Pending
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="fs-md fw-medium text-muted-2">
                        <bdi>
                          4
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="fs-6 fw-bold text-title">
                        Albuterol Inhaler
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        <bdi>
                          20 mg
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        <bdi>
                          3 times daily
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        James Park
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        Dr. J. Rivera
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-info">
                        Completed
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 pt-3 mt-3 border-t-soft">
              <span className="fs-md text-muted-2">
                Showing 1–4 of 24 prescriptions
              </span>
              <nav aria-label="Medication and prescriptions pagination">
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
      {/* ===== Lab results & bed occupancy ===== */}
      <section className="mb-4" aria-labelledby="med-lab-beds-title">
        <h2 id="med-lab-beds-title" className="visually-hidden">
          Lab results and bed occupancy
        </h2>
        <div className="row g-3">
          <div className="col-12 col-xl-5">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    Lab Results Summary
                  </h3>
                  <a href="#" className="btn btn-accent btn-sm fw-semibold text-nowrap">
                    View Patient Files
                  </a>
                </div>
                <ul className="d-flex flex-column flex-grow-1 gap-2 mb-0">
                  <li className="bg-plain border-theme d-flex align-items-center flex-grow-1 gap-2 p-3 rounded-3">
                    <span className="legend-dot bg-cat-emerald" aria-hidden="true" />
                    <span className="d-flex flex-column flex-grow-1 min-w-0">
                      <span className="fs-6 fw-bold text-title">
                        Complete Blood Panel
                      </span>
                      <span className="fs-xs text-muted-2 text-truncate">
                        Patient: Ava Patel
                      </span>
                    </span>
                    <span className="d-flex align-items-center flex-shrink-0 gap-2">
                      <span className="fs-md fw-medium text-body-2 text-nowrap d-none d-sm-inline">
                        <bdi>
                          Submitted: 2026-03-12
                        </bdi>
                      </span>
                      <span className="badge-soft tint-success">
                        Normal
                      </span>
                    </span>
                  </li>
                  <li className="bg-plain border-theme d-flex align-items-center flex-grow-1 gap-2 p-3 rounded-3">
                    <span className="legend-dot bg-cat-orange" aria-hidden="true" />
                    <span className="d-flex flex-column flex-grow-1 min-w-0">
                      <span className="fs-6 fw-bold text-title">
                        Urinalysis
                      </span>
                      <span className="fs-xs text-muted-2 text-truncate">
                        Patient: Marcus Chen
                      </span>
                    </span>
                    <span className="d-flex align-items-center flex-shrink-0 gap-2">
                      <span className="fs-md fw-medium text-body-2 text-nowrap d-none d-sm-inline">
                        <bdi>
                          Submitted: 2026-03-11
                        </bdi>
                      </span>
                      <span className="badge-soft tint-warning">
                        Abnormal
                      </span>
                    </span>
                  </li>
                  <li className="bg-plain border-theme d-flex align-items-center flex-grow-1 gap-2 p-3 rounded-3">
                    <span className="legend-dot bg-cat-emerald" aria-hidden="true" />
                    <span className="d-flex flex-column flex-grow-1 min-w-0">
                      <span className="fs-6 fw-bold text-title">
                        Chest X-Ray
                      </span>
                      <span className="fs-xs text-muted-2 text-truncate">
                        Patient: Sofia Lee
                      </span>
                    </span>
                    <span className="d-flex align-items-center flex-shrink-0 gap-2">
                      <span className="fs-md fw-medium text-body-2 text-nowrap d-none d-sm-inline">
                        <bdi>
                          Submitted: 2026-03-11
                        </bdi>
                      </span>
                      <span className="badge-soft tint-success">
                        Normal
                      </span>
                    </span>
                  </li>
                  <li className="bg-plain border-theme d-flex align-items-center flex-grow-1 gap-2 p-3 rounded-3">
                    <span className="legend-dot bg-cat-red" aria-hidden="true" />
                    <span className="d-flex flex-column flex-grow-1 min-w-0">
                      <span className="fs-6 fw-bold text-title">
                        MRI Brain
                      </span>
                      <span className="fs-xs text-muted-2 text-truncate">
                        Patient: Jordan Rivera
                      </span>
                    </span>
                    <span className="d-flex align-items-center flex-shrink-0 gap-2">
                      <span className="fs-md fw-medium text-body-2 text-nowrap d-none d-sm-inline">
                        <bdi>
                          Submitted: 2026-03-10
                        </bdi>
                      </span>
                      <span className="badge-soft tint-danger">
                        Critical
                      </span>
                    </span>
                  </li>
                  <li className="bg-plain border-theme d-flex align-items-center flex-grow-1 gap-2 p-3 rounded-3">
                    <span className="legend-dot bg-cat-orange" aria-hidden="true" />
                    <span className="d-flex flex-column flex-grow-1 min-w-0">
                      <span className="fs-6 fw-bold text-title">
                        Lipid Panel
                      </span>
                      <span className="fs-xs text-muted-2 text-truncate">
                        Patient: Emma Johnson
                      </span>
                    </span>
                    <span className="d-flex align-items-center flex-shrink-0 gap-2">
                      <span className="fs-md fw-medium text-body-2 text-nowrap d-none d-sm-inline">
                        <bdi>
                          Submitted: 2026-03-09
                        </bdi>
                      </span>
                      <span className="badge-soft tint-warning">
                        Abnormal
                      </span>
                    </span>
                  </li>
                  <li className="bg-plain border-theme d-flex align-items-center flex-grow-1 gap-2 p-3 rounded-3">
                    <span className="legend-dot bg-cat-emerald" aria-hidden="true" />
                    <span className="d-flex flex-column flex-grow-1 min-w-0">
                      <span className="fs-6 fw-bold text-title">
                        Thyroid Function Test
                      </span>
                      <span className="fs-xs text-muted-2 text-truncate">
                        Patient: Sarah Williams
                      </span>
                    </span>
                    <span className="d-flex align-items-center flex-shrink-0 gap-2">
                      <span className="fs-md fw-medium text-body-2 text-nowrap d-none d-sm-inline">
                        <bdi>
                          Submitted: 2026-03-08
                        </bdi>
                      </span>
                      <span className="badge-soft tint-success">
                        Normal
                      </span>
                    </span>
                  </li>
                  <li className="bg-plain border-theme d-flex align-items-center flex-grow-1 gap-2 p-3 rounded-3">
                    <span className="legend-dot bg-cat-red" aria-hidden="true" />
                    <span className="d-flex flex-column flex-grow-1 min-w-0">
                      <span className="fs-6 fw-bold text-title">
                        Electrocardiogram (ECG)
                      </span>
                      <span className="fs-xs text-muted-2 text-truncate">
                        Patient: David Kim
                      </span>
                    </span>
                    <span className="d-flex align-items-center flex-shrink-0 gap-2">
                      <span className="fs-md fw-medium text-body-2 text-nowrap d-none d-sm-inline">
                        <bdi>
                          Submitted: 2026-03-07
                        </bdi>
                      </span>
                      <span className="badge-soft tint-danger">
                        Critical
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-7">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    {"Bed Occupancy & Ward Status"}
                  </h3>
                  <span className="fs-md fw-medium text-muted-2">
                    System Updated: Real-time
                  </span>
                </div>
                <ul className="d-flex flex-column flex-grow-1 gap-3 mb-0">
                  <li className="bg-plain border-theme d-flex flex-column flex-grow-1 justify-content-center gap-2 p-3 rounded-3">
                    <span className="d-flex align-items-center gap-3">
                      <span className="d-flex flex-column flex-grow-1 min-w-0">
                        <span className="fs-6 fw-bold text-title text-truncate">
                          ICU (Intensive Care Unit)
                        </span>
                        <span className="fs-xs text-muted-2 text-truncate">
                          <bdi>
                            Total Beds: 20 · Available: 2
                          </bdi>
                        </span>
                      </span>
                      <span className="d-flex align-items-baseline flex-shrink-0 gap-2">
                        <span className="fs-5 fw-bold text-title text-nowrap">
                          <bdi>
                            18 Occupied
                          </bdi>
                        </span>
                        <span className="fs-md fw-semibold text-muted-2">
                          <bdi>
                            (90%)
                          </bdi>
                        </span>
                      </span>
                    </span>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="ICU bed occupancy"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-red" style={{ width: "90%" }} />
                    </div>
                  </li>
                  <li className="bg-plain border-theme d-flex flex-column flex-grow-1 justify-content-center gap-2 p-3 rounded-3">
                    <span className="d-flex align-items-center gap-3">
                      <span className="d-flex flex-column flex-grow-1 min-w-0">
                        <span className="fs-6 fw-bold text-title text-truncate">
                          General Ward
                        </span>
                        <span className="fs-xs text-muted-2 text-truncate">
                          <bdi>
                            Total Beds: 120 · Available: 46
                          </bdi>
                        </span>
                      </span>
                      <span className="d-flex align-items-baseline flex-shrink-0 gap-2">
                        <span className="fs-5 fw-bold text-title text-nowrap">
                          <bdi>
                            74 Occupied
                          </bdi>
                        </span>
                        <span className="fs-md fw-semibold text-muted-2">
                          <bdi>
                            (62%)
                          </bdi>
                        </span>
                      </span>
                    </span>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="General Ward bed occupancy"
                      aria-valuenow="62"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-emerald" style={{ width: "62%" }} />
                    </div>
                  </li>
                  <li className="bg-plain border-theme d-flex flex-column flex-grow-1 justify-content-center gap-2 p-3 rounded-3">
                    <span className="d-flex align-items-center gap-3">
                      <span className="d-flex flex-column flex-grow-1 min-w-0">
                        <span className="fs-6 fw-bold text-title text-truncate">
                          Pediatrics
                        </span>
                        <span className="fs-xs text-muted-2 text-truncate">
                          <bdi>
                            Total Beds: 30 · Available: 15
                          </bdi>
                        </span>
                      </span>
                      <span className="d-flex align-items-baseline flex-shrink-0 gap-2">
                        <span className="fs-5 fw-bold text-title text-nowrap">
                          <bdi>
                            15 Occupied
                          </bdi>
                        </span>
                        <span className="fs-md fw-semibold text-muted-2">
                          <bdi>
                            (50%)
                          </bdi>
                        </span>
                      </span>
                    </span>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="Pediatrics bed occupancy"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-emerald" style={{ width: "50%" }} />
                    </div>
                  </li>
                  <li className="bg-plain border-theme d-flex flex-column flex-grow-1 justify-content-center gap-2 p-3 rounded-3">
                    <span className="d-flex align-items-center gap-3">
                      <span className="d-flex flex-column flex-grow-1 min-w-0">
                        <span className="fs-6 fw-bold text-title text-truncate">
                          Maternity
                        </span>
                        <span className="fs-xs text-muted-2 text-truncate">
                          <bdi>
                            Total Beds: 25 · Available: 4
                          </bdi>
                        </span>
                      </span>
                      <span className="d-flex align-items-baseline flex-shrink-0 gap-2">
                        <span className="fs-5 fw-bold text-title text-nowrap">
                          <bdi>
                            21 Occupied
                          </bdi>
                        </span>
                        <span className="fs-md fw-semibold text-muted-2">
                          <bdi>
                            (84%)
                          </bdi>
                        </span>
                      </span>
                    </span>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="Maternity bed occupancy"
                      aria-valuenow="84"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-amber" style={{ width: "84%" }} />
                    </div>
                  </li>
                  <li className="bg-plain border-theme d-flex flex-column flex-grow-1 justify-content-center gap-2 p-3 rounded-3">
                    <span className="d-flex align-items-center gap-3">
                      <span className="d-flex flex-column flex-grow-1 min-w-0">
                        <span className="fs-6 fw-bold text-title text-truncate">
                          Surgery Recovery
                        </span>
                        <span className="fs-xs text-muted-2 text-truncate">
                          <bdi>
                            Total Beds: 40 · Available: 4
                          </bdi>
                        </span>
                      </span>
                      <span className="d-flex align-items-baseline flex-shrink-0 gap-2">
                        <span className="fs-5 fw-bold text-title text-nowrap">
                          <bdi>
                            36 Occupied
                          </bdi>
                        </span>
                        <span className="fs-md fw-semibold text-muted-2">
                          <bdi>
                            (90%)
                          </bdi>
                        </span>
                      </span>
                    </span>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="Surgery Recovery bed occupancy"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-red" style={{ width: "90%" }} />
                    </div>
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

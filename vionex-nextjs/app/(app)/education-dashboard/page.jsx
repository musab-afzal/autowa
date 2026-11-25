/* Generated from the Vionex HTML theme by scripts/convert-html.mjs */
import AppShell from "@/components/AppShell";

export const metadata = {
  title: "Vionex — Education Dashboard",
  description: "Vionex enterprise admin dashboard — education overview built with Bootstrap 5, CSS variables and a scalable design system.",
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
          Education Dashboard
        </h1>
        <nav aria-label="breadcrumb" className="d-none d-md-block">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="/">
                Dashboard
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Education Dashboard
            </li>
          </ol>
        </nav>
      </div>
      {/* ===== Welcome & academic overview ===== */}
      <section className="mb-4" aria-labelledby="edu-welcome-title">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
          <div className="min-w-0">
            <h2 id="edu-welcome-title" className="fs-2 fw-bold text-title mb-1">
              Good morning, Alex
              {" "}
              <span aria-hidden="true">
                👋
              </span>
            </h2>
            <p className="fw-medium text-body-2 mb-0">
              Fall Semester 2026 is under way — here’s how your campus is tracking today.
            </p>
          </div>
          <div className="d-flex flex-wrap align-items-center gap-2">
            <span className="badge-soft tint-emerald border-current d-inline-flex align-self-stretch align-items-center gap-2 px-3">
              {" "}
              <span className="legend-dot legend-dot-sm bg-cat-emerald" aria-hidden="true" />
              {" "}
              <bdi>
                24 classes live
              </bdi>
              {" "}
            </span>
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#eduAddCourseModal"
              className="btn btn-accent d-inline-flex flex-nowrap align-items-center justify-content-center gap-2 text-nowrap"
            >
              <i className="icon-20" data-lucide="plus" aria-hidden="true" />
              New Course
            </button>
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-outline-soft btn-18 rounded-circle"
                id="eduOverviewMenu"
                data-bs-toggle="dropdown"
                data-bs-offset="0,8"
                aria-expanded="false"
                aria-label="Overview options"
              >
                <i data-lucide="ellipsis-vertical" />
              </button>
              {" "}
              <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="eduOverviewMenu">
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="refresh-cw" />
                    Refresh data
                  </button>
                </li>
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="calendar-days" />
                    Academic calendar
                  </button>
                </li>
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="download" />
                    Export overview
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row g-3">
          {/* Semester hero + next class */}
          <div className="col-12 col-xxl-8">
            <div className="on-dark bg-grad-theme rounded-4 h-100 d-flex flex-column gap-4 p-3 p-md-4">
              <div className="row g-3 g-md-4 align-items-center">
                <div className="col-12 col-md-6 col-xxl-7">
                  <span className="badge-soft tint-cyan border-current d-inline-flex align-items-center gap-2">
                    {" "}
                    <i className="icon-12" data-lucide="graduation-cap" aria-hidden="true" />
                    Fall Semester 2026
                    {" "}
                  </span>
                  <p className="display-1 fw-bold text-title lh-1 mt-3 mb-2">
                    <bdi>
                      8,642
                    </bdi>
                  </p>
                  <div className="d-flex flex-wrap align-items-center gap-2">
                    <span className="fs-5 text-title">
                      Enrolled learners
                    </span>
                    <span className="badge-soft tint-emerald border-current d-inline-flex align-items-center gap-1">
                      {" "}
                      <i className="icon-12 flip-rtl" data-lucide="arrow-up-right" aria-hidden="true" />
                      <bdi>
                        +6.4%
                      </bdi>
                      {" "}
                    </span>
                    <span className="fs-md text-primary">
                      vs last term
                    </span>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-xxl-5">
                  <div className="bg-soft border-theme rounded-4 p-3">
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
                      <span className="fs-xs fw-semibold text-uppercase text-primary">
                        Up next
                      </span>
                      <span className="badge-soft tint-amber d-inline-flex align-items-center gap-1 px-2">
                        {" "}
                        <i className="icon-12" data-lucide="clock" aria-hidden="true" />
                        <bdi>
                          10:30 AM
                        </bdi>
                        {" "}
                      </span>
                    </div>
                    <h3 className="fs-5 fw-semibold text-title mb-3">
                      Advanced Calculus II
                    </h3>
                    <div className="d-flex align-items-center gap-2 mb-3">
                      <span className="avatar avatar-sm">
                        <img src="/assets/images/avatar-2.png" width="34" height="34" alt="" />
                      </span>
                      <span className="min-w-0">
                        {" "}
                        <span className="d-block fs-md fw-medium text-title text-truncate">
                          Dr. Maya Chen
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-truncate">
                          <bdi>
                            Room B-204 · 42 students
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </div>
                    <button
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#eduJoinClassModal"
                      className="btn btn-accent btn-sm w-100 d-inline-flex align-items-center justify-content-center gap-2"
                    >
                      <i className="icon-16" data-lucide="video" aria-hidden="true" />
                      Join live class
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-auto">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
                  <span className="fs-md fw-medium text-title">
                    Semester progress
                  </span>
                  <span className="fs-md text-primary">
                    <bdi>
                      Week 6 of 14
                    </bdi>
                    {" "}·{" "}
                    <bdi>
                      43%
                    </bdi>
                    {" "}
                    complete
                  </span>
                </div>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Fall Semester 2026 progress"
                  aria-valuenow="43"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="progress-bar bg-cat-emerald" style={{ width: "43%" }} />
                </div>
                <ul className="list-unstyled d-flex flex-wrap align-items-center justify-content-between gap-2 fs-xs text-primary mt-2 mb-0">
                  <li className="d-inline-flex align-items-center gap-1">
                    <i className="icon-12 text-cat-emerald" data-lucide="circle-check" aria-hidden="true" />
                    Orientation done
                  </li>
                  <li className="d-inline-flex align-items-center gap-1">
                    <i className="icon-12" data-lucide="pencil-line" aria-hidden="true" />
                    <bdi>
                      Midterms · Week 8
                    </bdi>
                  </li>
                  <li className="d-inline-flex align-items-center gap-1">
                    <i className="icon-12" data-lucide="flag" aria-hidden="true" />
                    <bdi>
                      Finals · Week 14
                    </bdi>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Learning progress gauge */}
          <div className="col-12 col-xxl-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    Learning Progress
                  </h3>
                  <span className="badge-soft tint-brand">
                    This term
                  </span>
                </div>
                <div className="position-relative d-flex justify-content-center my-auto">
                  <div id="eduLearningProgressChart" className="chart-area" />
                  <span className="chart-center mt-3">
                    <span className="d-block display-5 fw-bold text-title lh-1">
                      <bdi>
                        78%
                      </bdi>
                    </span>
                    <span className="d-block fs-md text-body-2 mt-1">
                      On track
                    </span>
                  </span>
                </div>
                <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                  <li className="d-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-violet" aria-hidden="true" />
                    <span className="flex-grow-1 min-w-0 fs-md text-body-2 text-truncate">
                      On track to graduate
                    </span>
                    <span className="fs-md fw-semibold text-title">
                      <bdi>
                        6,742
                      </bdi>
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-amber" aria-hidden="true" />
                    <span className="flex-grow-1 min-w-0 fs-md text-body-2 text-truncate">
                      Needs support
                    </span>
                    <span className="fs-md fw-semibold text-title">
                      <bdi>
                        1,284
                      </bdi>
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-rose" aria-hidden="true" />
                    <span className="flex-grow-1 min-w-0 fs-md text-body-2 text-truncate">
                      At risk of dropping
                    </span>
                    <span className="fs-md fw-semibold text-title">
                      <bdi>
                        616
                      </bdi>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Academic KPIs */}
          <div className="col-12">
            <ul className="list-unstyled row row-cols-1 row-cols-sm-2 row-cols-xl-4 g-3 mb-0">
              <li className="col">
                <div className="card overflow-hidden h-100">
                  <div className="card-body d-flex flex-column gap-3">
                    <h3 className="d-flex align-items-center gap-2 min-w-0 fs-6 fw-semibold text-title mb-0">
                      <span className="icon-box icon-box-sm tint-violet border-current" aria-hidden="true">
                        <i data-lucide="book-open" />
                      </span>
                      <span className="text-truncate">
                        Active Courses
                      </span>
                    </h3>
                    <div className="d-flex align-items-end justify-content-between gap-3 mt-auto">
                      <div className="min-w-0">
                        <p className="fs-2 fw-bold text-title lh-1 mb-2">
                          <bdi>
                            348
                          </bdi>
                        </p>
                        <p className="d-flex align-items-center gap-1 fs-md text-body-2 mb-0">
                          <i
                            className="icon-16 flip-rtl text-cat-emerald"
                            data-lucide="trending-up"
                            aria-hidden="true"
                          />
                          <bdi>
                            +12 new this week
                          </bdi>
                        </p>
                      </div>
                      <div className="position-relative flex-shrink-0">
                        <div id="eduCoursesRing" />
                        <span className="chart-center fs-md fw-semibold text-title">
                          <span className="visually-hidden">
                            Term target:
                          </span>
                          <bdi>
                            87%
                          </bdi>
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="accent-edge-b text-cat-violet" aria-hidden="true" />
                </div>
              </li>
              <li className="col">
                <div className="card overflow-hidden h-100">
                  <div className="card-body d-flex flex-column gap-3">
                    <h3 className="d-flex align-items-center gap-2 min-w-0 fs-6 fw-semibold text-title mb-0">
                      <span className="icon-box icon-box-sm tint-blue border-current" aria-hidden="true">
                        <i data-lucide="presentation" />
                      </span>
                      <span className="text-truncate">
                        Faculty Online
                      </span>
                    </h3>
                    <div className="d-flex align-items-end justify-content-between gap-3 mt-auto">
                      <div className="min-w-0">
                        <p className="fs-2 fw-bold text-title lh-1 mb-2">
                          <bdi>
                            186
                          </bdi>
                        </p>
                        <p className="d-flex align-items-center gap-1 fs-md text-body-2 mb-0">
                          <i className="icon-16 text-cat-blue" data-lucide="radio" aria-hidden="true" />
                          <bdi>
                            12 in live sessions
                          </bdi>
                        </p>
                      </div>
                      <div className="position-relative flex-shrink-0">
                        <div id="eduInstructorsRing" />
                        <span className="chart-center fs-md fw-semibold text-title">
                          <span className="visually-hidden">
                            Term target:
                          </span>
                          <bdi>
                            92%
                          </bdi>
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="accent-edge-b text-cat-blue" aria-hidden="true" />
                </div>
              </li>
              <li className="col">
                <div className="card overflow-hidden h-100">
                  <div className="card-body d-flex flex-column gap-3">
                    <h3 className="d-flex align-items-center gap-2 min-w-0 fs-6 fw-semibold text-title mb-0">
                      <span className="icon-box icon-box-sm tint-emerald border-current" aria-hidden="true">
                        <i data-lucide="calendar-check" />
                      </span>
                      <span className="text-truncate">
                        Attendance Rate
                      </span>
                    </h3>
                    <div className="d-flex align-items-end justify-content-between gap-3 mt-auto">
                      <div className="min-w-0">
                        <p className="fs-2 fw-bold text-title lh-1 mb-2">
                          <bdi>
                            94.2%
                          </bdi>
                        </p>
                        <p className="d-flex align-items-center gap-1 fs-md text-body-2 mb-0">
                          <i
                            className="icon-16 flip-rtl text-cat-emerald"
                            data-lucide="trending-up"
                            aria-hidden="true"
                          />
                          <bdi>
                            +2.1 pts vs last week
                          </bdi>
                        </p>
                      </div>
                      <div className="position-relative flex-shrink-0">
                        <div id="eduAttendanceRing" />
                        <span className="chart-center fs-md fw-semibold text-title">
                          <span className="visually-hidden">
                            Term target:
                          </span>
                          <bdi>
                            94%
                          </bdi>
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="accent-edge-b text-cat-emerald" aria-hidden="true" />
                </div>
              </li>
              <li className="col">
                <div className="card overflow-hidden h-100">
                  <div className="card-body d-flex flex-column gap-3">
                    <h3 className="d-flex align-items-center gap-2 min-w-0 fs-6 fw-semibold text-title mb-0">
                      <span className="icon-box icon-box-sm tint-amber border-current" aria-hidden="true">
                        <i data-lucide="clipboard-check" />
                      </span>
                      <span className="text-truncate">
                        Assignments Graded
                      </span>
                    </h3>
                    <div className="d-flex align-items-end justify-content-between gap-3 mt-auto">
                      <div className="min-w-0">
                        <p className="fs-2 fw-bold text-title lh-1 mb-2">
                          <bdi>
                            2,164
                          </bdi>
                        </p>
                        <p className="d-flex align-items-center gap-1 fs-md text-body-2 mb-0">
                          <i className="icon-16 text-cat-amber" data-lucide="hourglass" aria-hidden="true" />
                          <bdi>
                            512 awaiting review
                          </bdi>
                        </p>
                      </div>
                      <div className="position-relative flex-shrink-0">
                        <div id="eduGradingRing" />
                        <span className="chart-center fs-md fw-semibold text-title">
                          <span className="visually-hidden">
                            Term target:
                          </span>
                          <bdi>
                            76%
                          </bdi>
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="accent-edge-b text-cat-amber" aria-hidden="true" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* ===== Learning statistics ===== */}
      <section className="mb-4" aria-labelledby="edu-stats-title">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
          <div className="min-w-0">
            <h2 id="edu-stats-title" className="fs-4 fw-bold text-title mb-1">
              Learning Statistics
            </h2>
            <p className="fs-md text-body-2 mb-0">
              How the cohort is enrolling, studying and performing this academic year.
            </p>
          </div>
          <a href="#" className="fs-md fw-medium text-brand d-inline-flex align-items-center gap-1">
            Full analytics report
            <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
          </a>
        </div>
        <div className="row g-3">
          {/* Enrolment & completion */}
          <div className="col-12 col-xxl-8">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <div className="min-w-0">
                    <h3 className="fs-5 fw-bold text-title mb-1">
                      {"Enrolment & Completion"}
                    </h3>
                    <p className="fs-md text-body-2 mb-0">
                      Monthly intake against courses finished
                    </p>
                  </div>
                  <div
                    className="nav nav-pills seg-toggle flex-nowrap gap-1 p-1 rounded-pill bg-soft"
                    role="group"
                    aria-label="Enrolment time range"
                  >
                    <button type="button" className="nav-link fw-semibold" aria-pressed="false">
                      6M
                    </button>
                    <button type="button" className="nav-link active fw-semibold" aria-pressed="true">
                      1Y
                    </button>
                    <button type="button" className="nav-link fw-semibold" aria-pressed="false">
                      All
                    </button>
                  </div>
                </div>
                <ul className="list-unstyled row row-cols-1 row-cols-sm-3 g-2 mb-3">
                  <li className="col">
                    <div className="bg-soft border-soft rounded-3 h-100 p-3">
                      <span className="d-block fs-md text-body-2 mb-1">
                        New enrolments
                      </span>
                      {" "}
                      <span className="d-flex flex-wrap align-items-center gap-2">
                        <span className="fs-4 fw-bold text-title lh-1">
                          <bdi>
                            4,286
                          </bdi>
                        </span>
                        <span className="badge-soft tint-success d-inline-flex align-items-center gap-1 px-2">
                          {" "}
                          <i className="icon-12 flip-rtl" data-lucide="trending-up" aria-hidden="true" />
                          <bdi>
                            +8.2%
                          </bdi>
                          {" "}
                        </span>
                      </span>
                    </div>
                  </li>
                  <li className="col">
                    <div className="bg-soft border-soft rounded-3 h-100 p-3">
                      <span className="d-block fs-md text-body-2 mb-1">
                        Courses completed
                      </span>
                      {" "}
                      <span className="d-flex flex-wrap align-items-center gap-2">
                        <span className="fs-4 fw-bold text-title lh-1">
                          <bdi>
                            2,794
                          </bdi>
                        </span>
                        <span className="badge-soft tint-success d-inline-flex align-items-center gap-1 px-2">
                          {" "}
                          <i className="icon-12 flip-rtl" data-lucide="trending-up" aria-hidden="true" />
                          <bdi>
                            +5.6%
                          </bdi>
                          {" "}
                        </span>
                      </span>
                    </div>
                  </li>
                  <li className="col">
                    <div className="bg-soft border-soft rounded-3 h-100 p-3">
                      <span className="d-block fs-md text-body-2 mb-1">
                        Completion rate
                      </span>
                      {" "}
                      <span className="d-flex flex-wrap align-items-center gap-2">
                        <span className="fs-4 fw-bold text-title lh-1">
                          <bdi>
                            65.2%
                          </bdi>
                        </span>
                        <span className="badge-soft tint-success d-inline-flex align-items-center gap-1 px-2">
                          {" "}
                          <i className="icon-12 flip-rtl" data-lucide="trending-up" aria-hidden="true" />
                          <bdi>
                            +2.4 pts
                          </bdi>
                          {" "}
                        </span>
                      </span>
                    </div>
                  </li>
                </ul>
                <div id="eduEnrolmentChart" className="chart-area" />
                <ul className="list-unstyled d-flex flex-wrap align-items-center gap-3 fs-md text-body-2 mt-auto pt-3 mb-0">
                  <li className="d-inline-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-violet" aria-hidden="true" />
                    Enrolments
                  </li>
                  <li className="d-inline-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-cyan" aria-hidden="true" />
                    Completions
                  </li>
                  <li className="d-inline-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-amber" aria-hidden="true" />
                    Completion rate
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Subject mastery */}
          <div className="col-12 col-md-6 col-xxl-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                  <div className="min-w-0">
                    <h3 className="fs-5 fw-bold text-title mb-1">
                      Subject Mastery
                    </h3>
                    <p className="fs-md text-body-2 mb-0">
                      Average assessment score by subject
                    </p>
                  </div>
                  <span className="badge-soft tint-brand">
                    <bdi>
                      6 subjects
                    </bdi>
                  </span>
                </div>
                <div id="eduMasteryChart" className="chart-area my-auto" />
                <ul className="list-unstyled bg-soft border-soft rounded-3 p-3 mb-0">
                  <li className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                    <span className="d-inline-flex align-items-center gap-2 min-w-0 fs-md text-body-2">
                      <i className="icon-16 text-cat-emerald" data-lucide="award" aria-hidden="true" />
                      Strongest
                    </span>
                    <span className="fs-md fw-semibold text-title">
                      <bdi>
                        Mathematics · 92%
                      </bdi>
                    </span>
                  </li>
                  <li className="d-flex flex-wrap align-items-center justify-content-between gap-2 mt-2">
                    <span className="d-inline-flex align-items-center gap-2 min-w-0 fs-md text-body-2">
                      <i className="icon-16 text-cat-rose" data-lucide="life-buoy" aria-hidden="true" />
                      Needs focus
                    </span>
                    <span className="fs-md fw-semibold text-title">
                      <bdi>
                        History · 61%
                      </bdi>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Study hours */}
          <div className="col-12 col-md-6 col-xxl-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-start justify-content-between gap-2 mb-3">
                  <div className="min-w-0">
                    <h3 className="fs-5 fw-bold text-title mb-1">
                      Study Hours
                    </h3>
                    <p className="fs-md text-body-2 mb-0">
                      Average learner hours per weekday
                    </p>
                  </div>
                  <div className="text-end">
                    <span className="d-block fs-4 fw-bold text-title lh-1">
                      <bdi>
                        6.8h
                      </bdi>
                    </span>
                    {" "}
                    <span className="d-block fs-xs text-muted-2 mt-1">
                      daily average
                    </span>
                  </div>
                </div>
                <div id="eduStudyHoursChart" className="chart-area" />
                <ul className="list-unstyled d-flex flex-wrap align-items-center gap-3 fs-md text-body-2 mt-auto pt-3 mb-0">
                  <li className="d-inline-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-blue" aria-hidden="true" />
                    Live classes
                  </li>
                  <li className="d-inline-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-cyan" aria-hidden="true" />
                    Self-paced
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Course category mix */}
          <div className="col-12 col-md-6 col-xxl-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    Catalogue Mix
                  </h3>
                  <span className="badge-soft tint-violet">
                    <bdi>
                      348 courses
                    </bdi>
                  </span>
                </div>
                <div className="position-relative d-flex justify-content-center my-3">
                  <div id="eduCategoryChart" className="chart-area" />
                  <span className="chart-center">
                    <span className="d-block fs-3 fw-bold text-title lh-1">
                      <bdi>
                        348
                      </bdi>
                    </span>
                    <span className="d-block fs-xs text-muted-2 mt-1">
                      courses
                    </span>
                  </span>
                </div>
                <ul className="list-unstyled d-flex flex-column gap-2 mt-auto mb-0">
                  <li className="d-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-violet" aria-hidden="true" />
                    <span className="flex-grow-1 min-w-0 fs-md text-body-2 text-truncate">
                      STEM
                    </span>
                    <span className="fs-md fw-semibold text-title">
                      <bdi>
                        113
                      </bdi>
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-blue" aria-hidden="true" />
                    <span className="flex-grow-1 min-w-0 fs-md text-body-2 text-truncate">
                      Business
                    </span>
                    <span className="fs-md fw-semibold text-title">
                      <bdi>
                        86
                      </bdi>
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-emerald" aria-hidden="true" />
                    <span className="flex-grow-1 min-w-0 fs-md text-body-2 text-truncate">
                      Languages
                    </span>
                    <span className="fs-md fw-semibold text-title">
                      <bdi>
                        63
                      </bdi>
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-amber" aria-hidden="true" />
                    <span className="flex-grow-1 min-w-0 fs-md text-body-2 text-truncate">
                      {"Arts & Design"}
                    </span>
                    <span className="fs-md fw-semibold text-title">
                      <bdi>
                        50
                      </bdi>
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-rose" aria-hidden="true" />
                    <span className="flex-grow-1 min-w-0 fs-md text-body-2 text-truncate">
                      Health
                    </span>
                    <span className="fs-md fw-semibold text-title">
                      <bdi>
                        36
                      </bdi>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Grade distribution */}
          <div className="col-12 col-md-6 col-xxl-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    Grade Distribution
                  </h3>
                  <span className="badge-soft tint-success d-inline-flex align-items-center gap-1">
                    {" "}
                    <i className="icon-12" data-lucide="circle-check" aria-hidden="true" />
                    <bdi>
                      81.3% pass
                    </bdi>
                    {" "}
                  </span>
                </div>
                <div id="eduGradeChart" className="chart-area my-auto" />
                <ul className="list-unstyled row row-cols-3 g-2 mt-auto mb-0">
                  <li className="col">
                    <div className="bg-soft border-soft rounded-3 h-100 p-2 text-center">
                      <span className="d-block fs-5 fw-bold text-title lh-1">
                        <bdi>
                          3.4
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 mt-1">
                        Mean GPA
                      </span>
                    </div>
                  </li>
                  <li className="col">
                    <div className="bg-soft border-soft rounded-3 h-100 p-2 text-center">
                      <span className="d-block fs-5 fw-bold text-title lh-1">
                        <bdi>
                          7,022
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 mt-1">
                        Passed
                      </span>
                    </div>
                  </li>
                  <li className="col">
                    <div className="bg-soft border-soft rounded-3 h-100 p-2 text-center">
                      <span className="d-block fs-5 fw-bold text-title lh-1">
                        <bdi>
                          634
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 mt-1">
                        Resitting
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== My courses / continue learning ===== */}
      <section className="mb-4" aria-labelledby="edu-courses-title">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
          <div className="min-w-0">
            <h2 id="edu-courses-title" className="fs-4 fw-bold text-title mb-1">
              My Courses
            </h2>
            <p className="fs-md text-body-2 mb-0">
              Pick up where you left off, or start something new from the catalogue.
            </p>
          </div>
          <a href="#" className="fs-md fw-medium text-brand d-inline-flex align-items-center gap-1">
            Browse catalogue
            <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
          </a>
        </div>
        <div className="row g-3">
          {/* Continue learning */}
          <div className="col-12 col-xl-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    Continue Learning
                  </h3>
                  <span className="badge-soft tint-violet">
                    <bdi>
                      Lesson 13 of 24
                    </bdi>
                  </span>
                </div>
                <div className="position-relative d-flex justify-content-center py-3 my-auto">
                  <div id="eduResumeRing" />
                  <span className="chart-center">
                    <span className="d-block fs-2 fw-bold text-title lh-1">
                      <bdi>
                        75%
                      </bdi>
                    </span>
                    <span className="d-block fs-xs text-muted-2 mt-1">
                      complete
                    </span>
                  </span>
                </div>
                <div className="text-center mb-3">
                  <h4 className="fs-5 fw-semibold text-title mb-2">
                    Machine Learning Foundations
                  </h4>
                  <span className="d-inline-flex align-items-center gap-2">
                    <span className="avatar avatar-xs">
                      <img src="/assets/images/avatar-2.png" width="28" height="28" alt="" />
                    </span>
                    <span className="fs-md text-body-2">
                      Dr. Maya Chen
                    </span>
                  </span>
                </div>
                <ol className="list-unstyled rail-list d-flex flex-column gap-3 mb-0">
                  <li className="d-flex align-items-center gap-3">
                    <span className="rail-dot bg-cat-emerald" aria-hidden="true" />
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-block fs-md fw-medium text-title text-truncate">
                        Gradient Descent
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        <bdi>
                          Lesson 12 · 18 min
                        </bdi>
                      </span>
                      {" "}
                    </span>
                    <i
                      className="icon-16 text-cat-emerald flex-shrink-0"
                      data-lucide="circle-check"
                      aria-hidden="true"
                    />
                  </li>
                  <li className="d-flex align-items-center gap-3">
                    <span className="rail-dot bg-cat-violet" aria-hidden="true" />
                    <span className="flex-grow-1 min-w-0 tint-violet border-current d-flex flex-column px-3 py-2 rounded-3">
                      <span className="fs-md fw-semibold text-title text-truncate">
                        Backpropagation
                      </span>
                      <span className="fs-xs text-body-2">
                        <bdi>
                          Lesson 13 · 24 min · In progress
                        </bdi>
                      </span>
                    </span>
                    <i className="icon-16 text-cat-violet flex-shrink-0" data-lucide="circle-play" aria-hidden="true" />
                  </li>
                  <li className="d-flex align-items-center gap-3">
                    <span className="rail-dot bg-cat-slate" aria-hidden="true" />
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-block fs-md fw-medium text-body-2 text-truncate">
                        Regularisation
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        <bdi>
                          Lesson 14 · 21 min
                        </bdi>
                      </span>
                      {" "}
                    </span>
                    <i className="icon-16 text-muted-2 flex-shrink-0" data-lucide="lock" aria-hidden="true" />
                  </li>
                </ol>
                <ul className="list-unstyled row row-cols-2 g-2 mt-3 mb-0">
                  <li className="col">
                    <div className="bg-soft border-soft rounded-3 h-100 p-2 text-center">
                      <span className="d-block fs-5 fw-bold text-title lh-1">
                        <bdi>
                          8 / 10
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 mt-1">
                        Quizzes passed
                      </span>
                    </div>
                  </li>
                  <li className="col">
                    <div className="bg-soft border-soft rounded-3 h-100 p-2 text-center">
                      <span className="d-block fs-5 fw-bold text-title lh-1">
                        <bdi>
                          3 / 4
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 mt-1">
                        Assignments in
                      </span>
                    </div>
                  </li>
                </ul>
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mt-auto pt-3">
                  <span className="d-inline-flex align-items-center gap-1 fs-md text-body-2">
                    <i className="icon-16" data-lucide="clock" aria-hidden="true" />
                    <bdi>
                      4h 20m left
                    </bdi>
                  </span>
                  <button type="button" className="btn btn-primary d-inline-flex align-items-center gap-2">
                    <i className="icon-18 flip-rtl" data-lucide="play" aria-hidden="true" />
                    Resume
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Enrolled courses */}
          <div className="col-12 col-xl-8" data-filter-scope="">
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
              <h3 className="fs-5 fw-bold text-title mb-0">
                Enrolled Courses
              </h3>
              <div className="nav nav-pills gap-1 p-1 rounded-pill bg-soft" role="group" aria-label="Filter courses">
                <button type="button" className="nav-link active fw-semibold" data-filter="all" aria-pressed="true">
                  All
                </button>
                <button type="button" className="nav-link fw-semibold" data-filter="progress" aria-pressed="false">
                  In progress
                </button>
                <button type="button" className="nav-link fw-semibold" data-filter="done" aria-pressed="false">
                  Completed
                </button>
                <button type="button" className="nav-link fw-semibold" data-filter="soon" aria-pressed="false">
                  Upcoming
                </button>
              </div>
            </div>
            <ul className="list-unstyled row row-cols-1 row-cols-sm-2 g-3 mb-0">
              <li className="col" data-filter-tags="progress">
                <div className="card h-100 overflow-hidden">
                  <div className="card-body d-flex flex-column gap-3">
                    <div className="d-flex align-items-start gap-3">
                      <span className="icon-box icon-box-lg tint-violet border-current" aria-hidden="true">
                        <i data-lucide="brain-circuit" />
                      </span>
                      <div className="min-w-0 flex-grow-1">
                        <span className="badge-soft tint-violet mb-2">
                          STEM
                        </span>
                        <h4 className="fs-6 fw-semibold text-title mb-0">
                          Machine Learning Foundations
                        </h4>
                      </div>
                    </div>
                    <p className="d-flex align-items-center gap-2 fs-md text-body-2 mb-0">
                      <span className="avatar avatar-xs">
                        <img src="/assets/images/avatar-2.png" width="28" height="28" alt="" />
                      </span>
                      <span className="text-truncate">
                        Dr. Maya Chen
                      </span>
                    </p>
                    <div className="mt-auto">
                      <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
                        <span className="fs-md text-body-2">
                          <bdi>
                            18 of 24 lessons
                          </bdi>
                        </span>
                        <span className="fs-md fw-semibold text-title">
                          <bdi>
                            75%
                          </bdi>
                        </span>
                      </div>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Machine Learning Foundations progress"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="progress-bar bg-cat-violet" style={{ width: "75%" }} />
                      </div>
                    </div>
                  </div>
                  <span className="accent-edge-b text-cat-violet" aria-hidden="true" />
                </div>
              </li>
              <li className="col" data-filter-tags="progress">
                <div className="card h-100 overflow-hidden">
                  <div className="card-body d-flex flex-column gap-3">
                    <div className="d-flex align-items-start gap-3">
                      <span className="icon-box icon-box-lg tint-blue border-current" aria-hidden="true">
                        <i data-lucide="calculator" />
                      </span>
                      <div className="min-w-0 flex-grow-1">
                        <span className="badge-soft tint-blue mb-2">
                          Business
                        </span>
                        <h4 className="fs-6 fw-semibold text-title mb-0">
                          Financial Accounting II
                        </h4>
                      </div>
                    </div>
                    <p className="d-flex align-items-center gap-2 fs-md text-body-2 mb-0">
                      <span className="avatar avatar-xs">
                        <img src="/assets/images/avatar-1.png" width="28" height="28" alt="" />
                      </span>
                      <span className="text-truncate">
                        Prof. Daniel Okafor
                      </span>
                    </p>
                    <div className="mt-auto">
                      <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
                        <span className="fs-md text-body-2">
                          <bdi>
                            12 of 20 lessons
                          </bdi>
                        </span>
                        <span className="fs-md fw-semibold text-title">
                          <bdi>
                            60%
                          </bdi>
                        </span>
                      </div>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Financial Accounting II progress"
                        aria-valuenow="60"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="progress-bar bg-cat-blue" style={{ width: "60%" }} />
                      </div>
                    </div>
                  </div>
                  <span className="accent-edge-b text-cat-blue" aria-hidden="true" />
                </div>
              </li>
              <li className="col" data-filter-tags="progress">
                <div className="card h-100 overflow-hidden">
                  <div className="card-body d-flex flex-column gap-3">
                    <div className="d-flex align-items-start gap-3">
                      <span className="icon-box icon-box-lg tint-amber border-current" aria-hidden="true">
                        <i data-lucide="palette" />
                      </span>
                      <div className="min-w-0 flex-grow-1">
                        <span className="badge-soft tint-amber mb-2">
                          Design
                        </span>
                        <h4 className="fs-6 fw-semibold text-title mb-0">
                          UX Research Methods
                        </h4>
                      </div>
                    </div>
                    <p className="d-flex align-items-center gap-2 fs-md text-body-2 mb-0">
                      <span className="avatar avatar-xs">
                        <img src="/assets/images/avatar-3.png" width="28" height="28" alt="" />
                      </span>
                      <span className="text-truncate">
                        Priya Nair
                      </span>
                    </p>
                    <div className="mt-auto">
                      <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
                        <span className="fs-md text-body-2">
                          <bdi>
                            8 of 16 lessons
                          </bdi>
                        </span>
                        <span className="fs-md fw-semibold text-title">
                          <bdi>
                            50%
                          </bdi>
                        </span>
                      </div>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="UX Research Methods progress"
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="progress-bar bg-cat-amber" style={{ width: "50%" }} />
                      </div>
                    </div>
                  </div>
                  <span className="accent-edge-b text-cat-amber" aria-hidden="true" />
                </div>
              </li>
              <li className="col" data-filter-tags="done">
                <div className="card h-100 overflow-hidden">
                  <div className="card-body d-flex flex-column gap-3">
                    <div className="d-flex align-items-start gap-3">
                      <span className="icon-box icon-box-lg tint-emerald border-current" aria-hidden="true">
                        <i data-lucide="languages" />
                      </span>
                      <div className="min-w-0 flex-grow-1">
                        <span className="badge-soft tint-emerald mb-2">
                          Languages
                        </span>
                        <h4 className="fs-6 fw-semibold text-title mb-0">
                          Conversational Spanish
                        </h4>
                      </div>
                    </div>
                    <p className="d-flex align-items-center gap-2 fs-md text-body-2 mb-0">
                      <span className="avatar avatar-xs">
                        <img src="/assets/images/avatar-4.png" width="28" height="28" alt="" />
                      </span>
                      <span className="text-truncate">
                        Dr. Elena Rossi
                      </span>
                    </p>
                    <div className="mt-auto">
                      <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
                        <span className="fs-md text-body-2">
                          <bdi>
                            30 of 30 lessons
                          </bdi>
                        </span>
                        <span className="badge-soft tint-success d-inline-flex align-items-center gap-1 px-2">
                          {" "}
                          <i className="icon-12" data-lucide="circle-check" aria-hidden="true" />
                          Certified
                          {" "}
                        </span>
                      </div>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Conversational Spanish progress"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="progress-bar bg-cat-emerald" style={{ width: "100%" }} />
                      </div>
                    </div>
                  </div>
                  <span className="accent-edge-b text-cat-emerald" aria-hidden="true" />
                </div>
              </li>
              <li className="col" data-filter-tags="done">
                <div className="card h-100 overflow-hidden">
                  <div className="card-body d-flex flex-column gap-3">
                    <div className="d-flex align-items-start gap-3">
                      <span className="icon-box icon-box-lg tint-rose border-current" aria-hidden="true">
                        <i data-lucide="flask-conical" />
                      </span>
                      <div className="min-w-0 flex-grow-1">
                        <span className="badge-soft tint-rose mb-2">
                          STEM
                        </span>
                        <h4 className="fs-6 fw-semibold text-title mb-0">
                          Organic Chemistry
                        </h4>
                      </div>
                    </div>
                    <p className="d-flex align-items-center gap-2 fs-md text-body-2 mb-0">
                      <span className="avatar avatar-xs">
                        <img src="/assets/images/avatar-1.png" width="28" height="28" alt="" />
                      </span>
                      <span className="text-truncate">
                        Jordan Davis
                      </span>
                    </p>
                    <div className="mt-auto">
                      <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
                        <span className="fs-md text-body-2">
                          <bdi>
                            22 of 22 lessons
                          </bdi>
                        </span>
                        <span className="badge-soft tint-success d-inline-flex align-items-center gap-1 px-2">
                          {" "}
                          <i className="icon-12" data-lucide="circle-check" aria-hidden="true" />
                          Certified
                          {" "}
                        </span>
                      </div>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Organic Chemistry progress"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="progress-bar bg-cat-rose" style={{ width: "100%" }} />
                      </div>
                    </div>
                  </div>
                  <span className="accent-edge-b text-cat-rose" aria-hidden="true" />
                </div>
              </li>
              <li className="col" data-filter-tags="soon">
                <div className="card h-100 overflow-hidden">
                  <div className="card-body d-flex flex-column gap-3">
                    <div className="d-flex align-items-start gap-3">
                      <span className="icon-box icon-box-lg tint-cyan border-current" aria-hidden="true">
                        <i data-lucide="braces" />
                      </span>
                      <div className="min-w-0 flex-grow-1">
                        <span className="badge-soft tint-cyan mb-2">
                          STEM
                        </span>
                        <h4 className="fs-6 fw-semibold text-title mb-0">
                          Data Structures in Python
                        </h4>
                      </div>
                    </div>
                    <p className="d-flex align-items-center gap-2 fs-md text-body-2 mb-0">
                      <span className="avatar avatar-xs">
                        <img src="/assets/images/avatar-3.png" width="28" height="28" alt="" />
                      </span>
                      <span className="text-truncate">
                        Prof. Daniel Okafor
                      </span>
                    </p>
                    <div className="mt-auto">
                      <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
                        <span className="fs-md text-body-2">
                          <bdi>
                            28 lessons
                          </bdi>
                        </span>
                        <span className="badge-soft tint-amber d-inline-flex align-items-center gap-1 px-2">
                          {" "}
                          <i className="icon-12" data-lucide="calendar-clock" aria-hidden="true" />
                          <bdi>
                            Starts 12 Sep
                          </bdi>
                          {" "}
                        </span>
                      </div>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Data Structures in Python progress"
                        aria-valuenow="0"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="progress-bar bg-cat-cyan" />
                      </div>
                    </div>
                  </div>
                  <span className="accent-edge-b text-cat-cyan" aria-hidden="true" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* ===== Course progress ===== */}
      <section className="mb-4" aria-labelledby="edu-progress-title">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
          <div className="min-w-0">
            <h2 id="edu-progress-title" className="fs-4 fw-bold text-title mb-1">
              Course Progress
            </h2>
            <p className="fs-md text-body-2 mb-0">
              Where every running cohort stands against its module plan.
            </p>
          </div>
          <a href="#" className="fs-md fw-medium text-brand d-inline-flex align-items-center gap-1">
            All 348 courses
            <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
          </a>
        </div>
        <div className="card">
          <div className="card-body" data-bulk-scope="">
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
              <h3 className="fs-5 fw-bold text-title mb-0">
                Cohort Progress by Course
              </h3>
              <div className="d-flex flex-wrap flex-lg-nowrap align-items-center gap-2">
                <div className="header-search min-w-0" role="search">
                  <i data-lucide="search" />
                  {" "}
                  <input
                    type="search"
                    id="eduCourseSearch"
                    name="course-q"
                    placeholder="Search courses..."
                    aria-label="Search courses"
                  />
                </div>
                <div className="dropdown flex-grow-1 flex-sm-grow-0">
                  <button
                    type="button"
                    className="btn btn-accent w-100 d-inline-flex flex-nowrap align-items-center justify-content-center gap-2 text-nowrap"
                    id="eduProgressExport"
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
                  <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="eduProgressExport">
                    <li>
                      <button type="button" className="dropdown-item">
                        Progress report (CSV)
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        Gradebook (Excel)
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        Cohort summary (PDF)
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Where the 348 running cohorts sit against their module plan */}
            <div className="bg-soft border-soft rounded-3 p-3 mb-3">
              <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
                <span className="fs-md fw-medium text-title">
                  Delivery health
                </span>
                <span className="fs-md text-body-2">
                  Average progress
                  {" "}
                  <span className="fw-semibold text-title">
                    <bdi>
                      68%
                    </bdi>
                  </span>
                </span>
              </div>
              <div className="progress-stacked progress-lg">
                <div
                  className="progress progress-lg"
                  role="progressbar"
                  aria-label="Completed courses"
                  aria-valuenow="7"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "7.2%" }}
                >
                  <div className="progress-bar bg-cat-blue" />
                </div>
                <div
                  className="progress progress-lg"
                  role="progressbar"
                  aria-label="Courses on track"
                  aria-valuenow="62"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "61.5%" }}
                >
                  <div className="progress-bar bg-cat-emerald" />
                </div>
                <div
                  className="progress progress-lg"
                  role="progressbar"
                  aria-label="Courses at risk"
                  aria-valuenow="19"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "19.5%" }}
                >
                  <div className="progress-bar bg-cat-amber" />
                </div>
                <div
                  className="progress progress-lg"
                  role="progressbar"
                  aria-label="Courses behind schedule"
                  aria-valuenow="12"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "11.8%" }}
                >
                  <div className="progress-bar bg-cat-rose" />
                </div>
              </div>
              <ul className="list-unstyled d-flex flex-wrap align-items-center gap-3 fs-md text-body-2 mt-3 mb-0">
                <li className="d-inline-flex align-items-center gap-2">
                  <span className="legend-dot bg-cat-blue" aria-hidden="true" />
                  Completed
                  <span className="fw-semibold text-title">
                    <bdi>
                      25
                    </bdi>
                  </span>
                </li>
                <li className="d-inline-flex align-items-center gap-2">
                  <span className="legend-dot bg-cat-emerald" aria-hidden="true" />
                  On track
                  <span className="fw-semibold text-title">
                    <bdi>
                      214
                    </bdi>
                  </span>
                </li>
                <li className="d-inline-flex align-items-center gap-2">
                  <span className="legend-dot bg-cat-amber" aria-hidden="true" />
                  At risk
                  <span className="fw-semibold text-title">
                    <bdi>
                      68
                    </bdi>
                  </span>
                </li>
                <li className="d-inline-flex align-items-center gap-2">
                  <span className="legend-dot bg-cat-rose" aria-hidden="true" />
                  Behind
                  <span className="fw-semibold text-title">
                    <bdi>
                      41
                    </bdi>
                  </span>
                </li>
              </ul>
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
                  <i className="icon-18" data-lucide="bell-ring" aria-hidden="true" />
                  Nudge learners
                </button>
                <button
                  type="button"
                  className="btn btn-outline-soft d-inline-flex align-items-center gap-2 text-nowrap"
                >
                  <i className="icon-18" data-lucide="calendar-clock" aria-hidden="true" />
                  Reschedule
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
                  Running course cohorts with module progress, average score and delivery status
                </caption>
                <thead>
                  <tr>
                    <th scope="col">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="eduProgressSelectAll"
                        data-bulk-all=""
                        aria-label="Select all courses"
                      />
                    </th>
                    <th scope="col">
                      Course
                    </th>
                    <th scope="col">
                      Instructor
                    </th>
                    <th scope="col">
                      Cohort
                    </th>
                    <th scope="col">
                      Progress
                    </th>
                    <th scope="col">
                      Avg. score
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
                        aria-label="Select Machine Learning Foundations"
                      />
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="icon-box icon-box-sm tint-violet border-current" aria-hidden="true">
                          <i data-lucide="brain-circuit" />
                        </span>
                        <span className="d-flex flex-column">
                          <span className="fs-md fw-semibold text-title text-nowrap">
                            Machine Learning Foundations
                          </span>
                          <span className="fs-xs text-muted-2 text-uppercase">
                            <bdi>
                              ML-301
                            </bdi>
                          </span>
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-xs">
                          <img src="/assets/images/avatar-2.png" width="28" height="28" alt="" />
                        </span>
                        <span className="fs-md text-body-2 text-nowrap">
                          Dr. Maya Chen
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar-stack">
                          <span className="avatar avatar-xs bg-grad-1" aria-hidden="true">
                            AR
                          </span>
                          <span className="avatar avatar-xs bg-grad-3" aria-hidden="true">
                            MK
                          </span>
                          <span className="avatar avatar-xs bg-grad-5" aria-hidden="true">
                            JL
                          </span>
                        </span>
                        <span className="fs-md text-body-2 text-nowrap">
                          <bdi>
                            42 learners
                          </bdi>
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-flex align-items-center gap-2">
                        <span
                          className="progress progress-inline"
                          role="progressbar"
                          aria-label="Machine Learning Foundations cohort progress"
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="progress-bar bg-cat-emerald" style={{ width: "75%" }} />
                        </span>
                        <span className="fs-md fw-semibold text-title">
                          <bdi>
                            75%
                          </bdi>
                        </span>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 mt-1 text-nowrap">
                        <bdi>
                          18 of 24 modules
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="seg-meter" role="img" aria-label="Average score band 4 out of 5">
                          <span className="bg-cat-emerald" />
                          <span className="bg-cat-emerald" />
                          <span className="bg-cat-emerald" />
                          <span className="bg-cat-emerald" />
                          <span />
                        </span>
                        <span className="fs-md fw-bold text-title">
                          <bdi>
                            88
                          </bdi>
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-emerald text-nowrap">
                        On track
                      </span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-1">
                        <button
                          type="button"
                          className="btn btn-outline-soft btn-18 rounded-circle"
                          aria-label="Open Machine Learning Foundations"
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
                            aria-label="More actions for Machine Learning Foundations"
                          >
                            <i data-lucide="ellipsis" />
                          </button>
                          {" "}
                          <ul className="dropdown-menu dropdown-menu-end p-2">
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="users" />
                                View cohort
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="bell-ring" />
                                Nudge learners
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="calendar-clock" />
                                Reschedule modules
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
                        aria-label="Select Financial Accounting II"
                      />
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="icon-box icon-box-sm tint-blue border-current" aria-hidden="true">
                          <i data-lucide="calculator" />
                        </span>
                        <span className="d-flex flex-column">
                          <span className="fs-md fw-semibold text-title text-nowrap">
                            Financial Accounting II
                          </span>
                          <span className="fs-xs text-muted-2 text-uppercase">
                            <bdi>
                              ACC-210
                            </bdi>
                          </span>
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-xs">
                          <img src="/assets/images/avatar-1.png" width="28" height="28" alt="" />
                        </span>
                        <span className="fs-md text-body-2 text-nowrap">
                          Prof. Daniel Okafor
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar-stack">
                          <span className="avatar avatar-xs bg-grad-2" aria-hidden="true">
                            TN
                          </span>
                          <span className="avatar avatar-xs bg-grad-4" aria-hidden="true">
                            SB
                          </span>
                          <span className="avatar avatar-xs bg-grad-3" aria-hidden="true">
                            RC
                          </span>
                        </span>
                        <span className="fs-md text-body-2 text-nowrap">
                          <bdi>
                            64 learners
                          </bdi>
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-flex align-items-center gap-2">
                        <span
                          className="progress progress-inline"
                          role="progressbar"
                          aria-label="Financial Accounting II cohort progress"
                          aria-valuenow="60"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="progress-bar bg-cat-emerald" style={{ width: "60%" }} />
                        </span>
                        <span className="fs-md fw-semibold text-title">
                          <bdi>
                            60%
                          </bdi>
                        </span>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 mt-1 text-nowrap">
                        <bdi>
                          12 of 20 modules
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="seg-meter" role="img" aria-label="Average score band 3 out of 5">
                          <span className="bg-cat-amber" />
                          <span className="bg-cat-amber" />
                          <span className="bg-cat-amber" />
                          <span />
                          <span />
                        </span>
                        <span className="fs-md fw-bold text-title">
                          <bdi>
                            76
                          </bdi>
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-emerald text-nowrap">
                        On track
                      </span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-1">
                        <button
                          type="button"
                          className="btn btn-outline-soft btn-18 rounded-circle"
                          aria-label="Open Financial Accounting II"
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
                            aria-label="More actions for Financial Accounting II"
                          >
                            <i data-lucide="ellipsis" />
                          </button>
                          {" "}
                          <ul className="dropdown-menu dropdown-menu-end p-2">
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="users" />
                                View cohort
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="bell-ring" />
                                Nudge learners
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="calendar-clock" />
                                Reschedule modules
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
                        aria-label="Select UX Research Methods"
                      />
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="icon-box icon-box-sm tint-amber border-current" aria-hidden="true">
                          <i data-lucide="palette" />
                        </span>
                        <span className="d-flex flex-column">
                          <span className="fs-md fw-semibold text-title text-nowrap">
                            UX Research Methods
                          </span>
                          <span className="fs-xs text-muted-2 text-uppercase">
                            <bdi>
                              UXR-140
                            </bdi>
                          </span>
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-xs">
                          <img src="/assets/images/avatar-3.png" width="28" height="28" alt="" />
                        </span>
                        <span className="fs-md text-body-2 text-nowrap">
                          Priya Nair
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar-stack">
                          <span className="avatar avatar-xs bg-grad-5" aria-hidden="true">
                            DW
                          </span>
                          <span className="avatar avatar-xs bg-grad-1" aria-hidden="true">
                            EM
                          </span>
                          <span className="avatar avatar-xs bg-grad-2" aria-hidden="true">
                            HP
                          </span>
                        </span>
                        <span className="fs-md text-body-2 text-nowrap">
                          <bdi>
                            38 learners
                          </bdi>
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-flex align-items-center gap-2">
                        <span
                          className="progress progress-inline"
                          role="progressbar"
                          aria-label="UX Research Methods cohort progress"
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="progress-bar bg-cat-amber" style={{ width: "50%" }} />
                        </span>
                        <span className="fs-md fw-semibold text-title">
                          <bdi>
                            50%
                          </bdi>
                        </span>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 mt-1 text-nowrap">
                        <bdi>
                          8 of 16 modules
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="seg-meter" role="img" aria-label="Average score band 3 out of 5">
                          <span className="bg-cat-amber" />
                          <span className="bg-cat-amber" />
                          <span className="bg-cat-amber" />
                          <span />
                          <span />
                        </span>
                        <span className="fs-md fw-bold text-title">
                          <bdi>
                            71
                          </bdi>
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-amber text-nowrap">
                        At risk
                      </span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-1">
                        <button
                          type="button"
                          className="btn btn-outline-soft btn-18 rounded-circle"
                          aria-label="Open UX Research Methods"
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
                            aria-label="More actions for UX Research Methods"
                          >
                            <i data-lucide="ellipsis" />
                          </button>
                          {" "}
                          <ul className="dropdown-menu dropdown-menu-end p-2">
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="users" />
                                View cohort
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="bell-ring" />
                                Nudge learners
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="calendar-clock" />
                                Reschedule modules
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
                        aria-label="Select Data Structures in Python"
                      />
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="icon-box icon-box-sm tint-cyan border-current" aria-hidden="true">
                          <i data-lucide="braces" />
                        </span>
                        <span className="d-flex flex-column">
                          <span className="fs-md fw-semibold text-title text-nowrap">
                            Data Structures in Python
                          </span>
                          <span className="fs-xs text-muted-2 text-uppercase">
                            <bdi>
                              DSA-305
                            </bdi>
                          </span>
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-xs">
                          <img src="/assets/images/avatar-1.png" width="28" height="28" alt="" />
                        </span>
                        <span className="fs-md text-body-2 text-nowrap">
                          Prof. Daniel Okafor
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar-stack">
                          <span className="avatar avatar-xs bg-grad-3" aria-hidden="true">
                            NV
                          </span>
                          <span className="avatar avatar-xs bg-grad-5" aria-hidden="true">
                            OA
                          </span>
                          <span className="avatar avatar-xs bg-grad-4" aria-hidden="true">
                            LC
                          </span>
                        </span>
                        <span className="fs-md text-body-2 text-nowrap">
                          <bdi>
                            29 learners
                          </bdi>
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-flex align-items-center gap-2">
                        <span
                          className="progress progress-inline"
                          role="progressbar"
                          aria-label="Data Structures in Python cohort progress"
                          aria-valuenow="18"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="progress-bar bg-cat-rose" style={{ width: "18%" }} />
                        </span>
                        <span className="fs-md fw-semibold text-title">
                          <bdi>
                            18%
                          </bdi>
                        </span>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 mt-1 text-nowrap">
                        <bdi>
                          5 of 28 modules
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="seg-meter" role="img" aria-label="Average score band 2 out of 5">
                          <span className="bg-cat-rose" />
                          <span className="bg-cat-rose" />
                          <span />
                          <span />
                          <span />
                        </span>
                        <span className="fs-md fw-bold text-title">
                          <bdi>
                            63
                          </bdi>
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-rose text-nowrap">
                        Behind
                      </span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-1">
                        <button
                          type="button"
                          className="btn btn-outline-soft btn-18 rounded-circle"
                          aria-label="Open Data Structures in Python"
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
                            aria-label="More actions for Data Structures in Python"
                          >
                            <i data-lucide="ellipsis" />
                          </button>
                          {" "}
                          <ul className="dropdown-menu dropdown-menu-end p-2">
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="users" />
                                View cohort
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="bell-ring" />
                                Nudge learners
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="calendar-clock" />
                                Reschedule modules
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
                        aria-label="Select Conversational Spanish"
                      />
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="icon-box icon-box-sm tint-emerald border-current" aria-hidden="true">
                          <i data-lucide="languages" />
                        </span>
                        <span className="d-flex flex-column">
                          <span className="fs-md fw-semibold text-title text-nowrap">
                            Conversational Spanish
                          </span>
                          <span className="fs-xs text-muted-2 text-uppercase">
                            <bdi>
                              SPA-110
                            </bdi>
                          </span>
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-xs">
                          <img src="/assets/images/avatar-4.png" width="28" height="28" alt="" />
                        </span>
                        <span className="fs-md text-body-2 text-nowrap">
                          Dr. Elena Rossi
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar-stack">
                          <span className="avatar avatar-xs bg-grad-4" aria-hidden="true">
                            IS
                          </span>
                          <span className="avatar avatar-xs bg-grad-2" aria-hidden="true">
                            FG
                          </span>
                          <span className="avatar avatar-xs bg-grad-1" aria-hidden="true">
                            BT
                          </span>
                        </span>
                        <span className="fs-md text-body-2 text-nowrap">
                          <bdi>
                            47 learners
                          </bdi>
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-flex align-items-center gap-2">
                        <span
                          className="progress progress-inline"
                          role="progressbar"
                          aria-label="Conversational Spanish cohort progress"
                          aria-valuenow="100"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="progress-bar bg-cat-blue" style={{ width: "100%" }} />
                        </span>
                        <span className="fs-md fw-semibold text-title">
                          <bdi>
                            100%
                          </bdi>
                        </span>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 mt-1 text-nowrap">
                        <bdi>
                          30 of 30 modules
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="seg-meter" role="img" aria-label="Average score band 5 out of 5">
                          <span className="bg-cat-emerald" />
                          <span className="bg-cat-emerald" />
                          <span className="bg-cat-emerald" />
                          <span className="bg-cat-emerald" />
                          <span className="bg-cat-emerald" />
                        </span>
                        <span className="fs-md fw-bold text-title">
                          <bdi>
                            91
                          </bdi>
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-blue text-nowrap">
                        Completed
                      </span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-1">
                        <button
                          type="button"
                          className="btn btn-outline-soft btn-18 rounded-circle"
                          aria-label="Open Conversational Spanish"
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
                            aria-label="More actions for Conversational Spanish"
                          >
                            <i data-lucide="ellipsis" />
                          </button>
                          {" "}
                          <ul className="dropdown-menu dropdown-menu-end p-2">
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="users" />
                                View cohort
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="award" />
                                Issue certificates
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="rotate-ccw" />
                                Open next intake
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
                        aria-label="Select Organic Chemistry"
                      />
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="icon-box icon-box-sm tint-rose border-current" aria-hidden="true">
                          <i data-lucide="flask-conical" />
                        </span>
                        <span className="d-flex flex-column">
                          <span className="fs-md fw-semibold text-title text-nowrap">
                            Organic Chemistry
                          </span>
                          <span className="fs-xs text-muted-2 text-uppercase">
                            <bdi>
                              CHM-220
                            </bdi>
                          </span>
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-xs">
                          <img src="/assets/images/avatar-1.png" width="28" height="28" alt="" />
                        </span>
                        <span className="fs-md text-body-2 text-nowrap">
                          Jordan Davis
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar-stack">
                          <span className="avatar avatar-xs bg-grad-1" aria-hidden="true">
                            YK
                          </span>
                          <span className="avatar avatar-xs bg-grad-5" aria-hidden="true">
                            PD
                          </span>
                          <span className="avatar avatar-xs bg-grad-3" aria-hidden="true">
                            CM
                          </span>
                        </span>
                        <span className="fs-md text-body-2 text-nowrap">
                          <bdi>
                            51 learners
                          </bdi>
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-flex align-items-center gap-2">
                        <span
                          className="progress progress-inline"
                          role="progressbar"
                          aria-label="Organic Chemistry cohort progress"
                          aria-valuenow="100"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="progress-bar bg-cat-blue" style={{ width: "100%" }} />
                        </span>
                        <span className="fs-md fw-semibold text-title">
                          <bdi>
                            100%
                          </bdi>
                        </span>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 mt-1 text-nowrap">
                        <bdi>
                          22 of 22 modules
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="seg-meter" role="img" aria-label="Average score band 4 out of 5">
                          <span className="bg-cat-emerald" />
                          <span className="bg-cat-emerald" />
                          <span className="bg-cat-emerald" />
                          <span className="bg-cat-emerald" />
                          <span />
                        </span>
                        <span className="fs-md fw-bold text-title">
                          <bdi>
                            84
                          </bdi>
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-blue text-nowrap">
                        Completed
                      </span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-1">
                        <button
                          type="button"
                          className="btn btn-outline-soft btn-18 rounded-circle"
                          aria-label="Open Organic Chemistry"
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
                            aria-label="More actions for Organic Chemistry"
                          >
                            <i data-lucide="ellipsis" />
                          </button>
                          {" "}
                          <ul className="dropdown-menu dropdown-menu-end p-2">
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="users" />
                                View cohort
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="award" />
                                Issue certificates
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="rotate-ccw" />
                                Open next intake
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
                  Showing 1–6 of 348 courses
                </bdi>
              </span>
              <nav aria-label="Course progress pagination">
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
      {/* ===== Learning performance analytics ===== */}
      <section className="mb-4" aria-labelledby="edu-analytics-title">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
          <div className="min-w-0">
            <h2 id="edu-analytics-title" className="fs-4 fw-bold text-title mb-1">
              Learning Performance Analytics
            </h2>
            <p className="fs-md text-body-2 mb-0">
              How study behaviour turns into attainment across the cohort.
            </p>
          </div>
          <div className="dropdown">
            <button
              type="button"
              className="btn btn-outline-soft d-inline-flex align-items-center gap-2 text-nowrap"
              id="eduAnalyticsRange"
              data-bs-toggle="dropdown"
              data-bs-offset="0,8"
              aria-expanded="false"
            >
              This term
              {" "}
              <i className="dd-caret icon-18" data-lucide="chevron-down" aria-hidden="true" />
            </button>
            {" "}
            <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="eduAnalyticsRange">
              <li>
                <button type="button" className="dropdown-item active">
                  This term
                </button>
              </li>
              <li>
                <button type="button" className="dropdown-item">
                  Last term
                </button>
              </li>
              <li>
                <button type="button" className="dropdown-item">
                  Academic year
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="row g-3">
          {/* Engagement heatmap */}
          <div className="col-12 col-xxl-8">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-start justify-content-between gap-2 mb-3">
                  <div className="min-w-0">
                    <h3 className="fs-5 fw-bold text-title mb-1">
                      Engagement Heatmap
                    </h3>
                    <p className="fs-md text-body-2 mb-0">
                      Share of learners active by weekday and session slot
                    </p>
                  </div>
                  <span className="badge-soft tint-violet d-inline-flex align-items-center gap-1">
                    {" "}
                    <i className="icon-12" data-lucide="flame" aria-hidden="true" />
                    <bdi>
                      Peak Wed 15:00
                    </bdi>
                    {" "}
                  </span>
                </div>
                <div id="eduEngagementChart" className="chart-area" />
              </div>
            </div>
          </div>
          {/* Top performers */}
          <div className="col-12 col-xxl-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    Top Performers
                  </h3>
                  <span className="badge-soft tint-brand">
                    This term
                  </span>
                </div>
                <ol className="list-unstyled d-flex flex-column gap-2 mb-0">
                  <li className="d-flex align-items-center gap-3 p-2 rounded-3 tint-amber border-current">
                    <span
                      className="icon-box icon-box-sm rounded-circle bg-cat-amber text-white fw-bold flex-shrink-0"
                      aria-hidden="true"
                    >
                      1
                    </span>
                    <span className="avatar avatar-sm">
                      <img src="/assets/images/avatar-4.png" width="34" height="34" alt="" />
                    </span>
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-block fs-md fw-semibold text-title text-truncate">
                        Amara Okonkwo
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-body-2 text-truncate">
                        Conversational Spanish
                      </span>
                      {" "}
                    </span>
                    <span className="text-end flex-shrink-0">
                      {" "}
                      <span className="d-block fs-md fw-bold text-title lh-1">
                        <bdi>
                          98.4
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-inline-flex align-items-center gap-1 fs-xs text-cat-emerald">
                        <i className="icon-12 flip-rtl" data-lucide="trending-up" aria-hidden="true" />
                        <bdi>
                          +2.1
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3 p-2 rounded-3">
                    <span
                      className="icon-box icon-box-sm rounded-circle bg-cat-slate text-white fw-bold flex-shrink-0"
                      aria-hidden="true"
                    >
                      2
                    </span>
                    <span className="avatar avatar-sm">
                      <img src="/assets/images/avatar-1.png" width="34" height="34" alt="" />
                    </span>
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-block fs-md fw-semibold text-title text-truncate">
                        Ethan Brooks
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-body-2 text-truncate">
                        Machine Learning Foundations
                      </span>
                      {" "}
                    </span>
                    <span className="text-end flex-shrink-0">
                      {" "}
                      <span className="d-block fs-md fw-bold text-title lh-1">
                        <bdi>
                          96.8
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-inline-flex align-items-center gap-1 fs-xs text-cat-emerald">
                        <i className="icon-12 flip-rtl" data-lucide="trending-up" aria-hidden="true" />
                        <bdi>
                          +1.4
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3 p-2 rounded-3">
                    <span
                      className="icon-box icon-box-sm rounded-circle bg-cat-orange text-white fw-bold flex-shrink-0"
                      aria-hidden="true"
                    >
                      3
                    </span>
                    <span className="avatar avatar-sm">
                      <img src="/assets/images/avatar-3.png" width="34" height="34" alt="" />
                    </span>
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-block fs-md fw-semibold text-title text-truncate">
                        Sofia Marchetti
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-body-2 text-truncate">
                        Organic Chemistry
                      </span>
                      {" "}
                    </span>
                    <span className="text-end flex-shrink-0">
                      {" "}
                      <span className="d-block fs-md fw-bold text-title lh-1">
                        <bdi>
                          95.2
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-inline-flex align-items-center gap-1 fs-xs text-cat-emerald">
                        <i className="icon-12 flip-rtl" data-lucide="trending-up" aria-hidden="true" />
                        <bdi>
                          +3.6
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3 p-2 rounded-3">
                    <span
                      className="icon-box icon-box-sm rounded-circle bg-soft text-body-2 fw-bold flex-shrink-0"
                      aria-hidden="true"
                    >
                      4
                    </span>
                    <span className="avatar avatar-sm">
                      <img src="/assets/images/avatar-2.png" width="34" height="34" alt="" />
                    </span>
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-block fs-md fw-semibold text-title text-truncate">
                        Noah Lindqvist
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-body-2 text-truncate">
                        Financial Accounting II
                      </span>
                      {" "}
                    </span>
                    <span className="text-end flex-shrink-0">
                      {" "}
                      <span className="d-block fs-md fw-bold text-title lh-1">
                        <bdi>
                          93.7
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-inline-flex align-items-center gap-1 fs-xs text-cat-rose">
                        <i className="icon-12 flip-rtl" data-lucide="trending-down" aria-hidden="true" />
                        <bdi>
                          -0.8
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3 p-2 rounded-3">
                    <span
                      className="icon-box icon-box-sm rounded-circle bg-soft text-body-2 fw-bold flex-shrink-0"
                      aria-hidden="true"
                    >
                      5
                    </span>
                    <span className="avatar avatar-sm">
                      <img src="/assets/images/avatar-3.png" width="34" height="34" alt="" />
                    </span>
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-block fs-md fw-semibold text-title text-truncate">
                        Priya Raman
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-body-2 text-truncate">
                        UX Research Methods
                      </span>
                      {" "}
                    </span>
                    <span className="text-end flex-shrink-0">
                      {" "}
                      <span className="d-block fs-md fw-bold text-title lh-1">
                        <bdi>
                          92.1
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-inline-flex align-items-center gap-1 fs-xs text-cat-emerald">
                        <i className="icon-12 flip-rtl" data-lucide="trending-up" aria-hidden="true" />
                        <bdi>
                          +1.9
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </li>
                </ol>
                <a
                  href="#"
                  className="d-flex align-items-center justify-content-center gap-1 fs-md fw-medium text-brand mt-auto pt-3"
                >
                  View full leaderboard
                  <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
          {/* Score vs study time */}
          <div className="col-12 col-xl-7">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-start justify-content-between gap-2 mb-3">
                  <div className="min-w-0">
                    <h3 className="fs-5 fw-bold text-title mb-1">
                      Score vs Study Time
                    </h3>
                    <p className="fs-md text-body-2 mb-0">
                      One bubble per cohort — area is the number of learners
                    </p>
                  </div>
                </div>
                <div id="eduScoreEngagementChart" className="chart-area" />
                <ul className="list-unstyled d-flex flex-wrap align-items-center gap-3 fs-md text-body-2 mt-auto pt-3 mb-0">
                  <li className="d-inline-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-violet" aria-hidden="true" />
                    STEM
                  </li>
                  <li className="d-inline-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-blue" aria-hidden="true" />
                    Business
                  </li>
                  <li className="d-inline-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-emerald" aria-hidden="true" />
                    Languages
                  </li>
                  <li className="d-inline-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-amber" aria-hidden="true" />
                    Design
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Attainment bands */}
          <div className="col-12 col-xl-5">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-start justify-content-between gap-2 mb-3">
                  <div className="min-w-0">
                    <h3 className="fs-5 fw-bold text-title mb-1">
                      Attainment Bands
                    </h3>
                    <p className="fs-md text-body-2 mb-0">
                      Average score across the last eight assessments
                    </p>
                  </div>
                </div>
                <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                  <li className="d-flex align-items-center gap-3 p-3 rounded-3 bg-soft border-soft">
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-block fs-md fw-semibold text-title text-truncate">
                        Top quartile
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        <bdi>
                          2,161 learners
                        </bdi>
                      </span>
                      {" "}
                    </span>
                    <div id="eduBandTopSpark" className="chart-inline d-none d-sm-block" />
                    <span className="text-end flex-shrink-0">
                      {" "}
                      <span className="d-block fs-4 fw-bold text-title lh-1">
                        <bdi>
                          95
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-inline-flex align-items-center gap-1 fs-xs text-cat-emerald">
                        <i className="icon-12 flip-rtl" data-lucide="trending-up" aria-hidden="true" />
                        <bdi>
                          +7
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3 p-3 rounded-3 bg-soft border-soft">
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-block fs-md fw-semibold text-title text-truncate">
                        Median band
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        <bdi>
                          4,320 learners
                        </bdi>
                      </span>
                      {" "}
                    </span>
                    <div id="eduBandMidSpark" className="chart-inline d-none d-sm-block" />
                    <span className="text-end flex-shrink-0">
                      {" "}
                      <span className="d-block fs-4 fw-bold text-title lh-1">
                        <bdi>
                          79
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-inline-flex align-items-center gap-1 fs-xs text-cat-emerald">
                        <i className="icon-12 flip-rtl" data-lucide="trending-up" aria-hidden="true" />
                        <bdi>
                          +7
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3 p-3 rounded-3 bg-soft border-soft">
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-block fs-md fw-semibold text-title text-truncate">
                        Lower quartile
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        <bdi>
                          2,161 learners
                        </bdi>
                      </span>
                      {" "}
                    </span>
                    <div id="eduBandLowSpark" className="chart-inline d-none d-sm-block" />
                    <span className="text-end flex-shrink-0">
                      {" "}
                      <span className="d-block fs-4 fw-bold text-title lh-1">
                        <bdi>
                          56
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-inline-flex align-items-center gap-1 fs-xs text-cat-rose">
                        <i className="icon-12 flip-rtl" data-lucide="trending-down" aria-hidden="true" />
                        <bdi>
                          -2
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </li>
                </ul>
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mt-auto pt-3">
                  <span className="d-inline-flex align-items-center gap-2 fs-md text-body-2">
                    <i className="icon-16 text-cat-amber" data-lucide="triangle-alert" aria-hidden="true" />
                    Attainment gap
                  </span>
                  <span className="d-inline-flex align-items-center gap-2">
                    <span className="fs-5 fw-bold text-title">
                      <bdi>
                        39 pts
                      </bdi>
                    </span>
                    <span className="badge-soft tint-danger d-inline-flex align-items-center gap-1 px-2">
                      {" "}
                      <i className="icon-12 flip-rtl" data-lucide="trending-up" aria-hidden="true" />
                      <bdi>
                        +9 vs term start
                      </bdi>
                      {" "}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Upcoming classes / schedule ===== */}
      <section className="mb-4" aria-labelledby="edu-schedule-title">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
          <div className="min-w-0">
            <h2 id="edu-schedule-title" className="fs-4 fw-bold text-title mb-1">
              Upcoming Classes
            </h2>
            <p className="fs-md text-body-2 mb-0">
              Week of
              {" "}
              <bdi>
                24 – 30 August 2026
              </bdi>
              {" "}·{" "}
              <bdi>
                31 sessions scheduled
              </bdi>
            </p>
          </div>
          <a href="#" className="fs-md fw-medium text-brand d-inline-flex align-items-center gap-1">
            Full timetable
            <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
          </a>
        </div>
        <div className="row g-3">
          {/* Timetable */}
          <div className="col-12 col-xl-8">
            <div className="card h-100">
              <div className="card-body d-flex flex-column" data-view-switch="">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <div className="min-w-0">
                    <h3 className="fs-5 fw-bold text-title mb-1">
                      Timetable
                    </h3>
                    <p className="fs-md text-body-2 mb-0">
                      <bdi>
                        Tuesday, 25 August
                      </bdi>
                      {" "}·{" "}
                      <bdi>
                        5 classes
                      </bdi>
                    </p>
                  </div>
                  <div
                    className="nav nav-pills seg-toggle flex-nowrap gap-1 p-1 rounded-pill bg-soft"
                    role="group"
                    aria-label="Timetable view"
                  >
                    <button
                      type="button"
                      className="nav-link active fw-semibold"
                      data-view-target="agenda"
                      aria-pressed="true"
                    >
                      Agenda
                    </button>
                    <button type="button" className="nav-link fw-semibold" data-view-target="week" aria-pressed="false">
                      Week
                    </button>
                  </div>
                </div>
                {/* Day strip */}
                <div className="position-relative mb-3" data-scroll-rail="">
                  <ul className="scroll-row list-unstyled d-flex align-items-stretch gap-2 mb-0 pb-1">
                    <li className="scroll-col-xs">
                      <button
                        type="button"
                        className="tile-soft border-soft transition-base d-flex flex-column align-items-center justify-content-center gap-1 w-100 h-100 px-2 py-3 rounded-3"
                      >
                        <span className="fs-xs fw-semibold text-uppercase text-muted-2">
                          Mon
                        </span>
                        <span className="fs-4 fw-bold text-title lh-1">
                          <bdi>
                            24
                          </bdi>
                        </span>
                        <span className="fs-xs text-body-2">
                          <bdi>
                            4 classes
                          </bdi>
                        </span>
                      </button>
                    </li>
                    <li className="scroll-col-xs">
                      <button
                        type="button"
                        aria-current="date"
                        className="tint-violet border-current transition-base d-flex flex-column align-items-center justify-content-center gap-1 w-100 h-100 px-2 py-3 rounded-3"
                      >
                        <span className="fs-xs fw-semibold text-uppercase">
                          Tue
                        </span>
                        <span className="fs-4 fw-bold text-title lh-1">
                          <bdi>
                            25
                          </bdi>
                        </span>
                        <span className="fs-xs">
                          <bdi>
                            5 classes
                          </bdi>
                        </span>
                      </button>
                    </li>
                    <li className="scroll-col-xs">
                      <button
                        type="button"
                        className="tile-soft border-soft transition-base d-flex flex-column align-items-center justify-content-center gap-1 w-100 h-100 px-2 py-3 rounded-3"
                      >
                        <span className="fs-xs fw-semibold text-uppercase text-muted-2">
                          Wed
                        </span>
                        <span className="fs-4 fw-bold text-title lh-1">
                          <bdi>
                            26
                          </bdi>
                        </span>
                        <span className="fs-xs text-body-2">
                          <bdi>
                            6 classes
                          </bdi>
                        </span>
                      </button>
                    </li>
                    <li className="scroll-col-xs">
                      <button
                        type="button"
                        className="tile-soft border-soft transition-base d-flex flex-column align-items-center justify-content-center gap-1 w-100 h-100 px-2 py-3 rounded-3"
                      >
                        <span className="fs-xs fw-semibold text-uppercase text-muted-2">
                          Thu
                        </span>
                        <span className="fs-4 fw-bold text-title lh-1">
                          <bdi>
                            27
                          </bdi>
                        </span>
                        <span className="fs-xs text-body-2">
                          <bdi>
                            6 classes
                          </bdi>
                        </span>
                      </button>
                    </li>
                    <li className="scroll-col-xs">
                      <button
                        type="button"
                        className="tile-soft border-soft transition-base d-flex flex-column align-items-center justify-content-center gap-1 w-100 h-100 px-2 py-3 rounded-3"
                      >
                        <span className="fs-xs fw-semibold text-uppercase text-muted-2">
                          Fri
                        </span>
                        <span className="fs-4 fw-bold text-title lh-1">
                          <bdi>
                            28
                          </bdi>
                        </span>
                        <span className="fs-xs text-body-2">
                          <bdi>
                            5 classes
                          </bdi>
                        </span>
                      </button>
                    </li>
                    <li className="scroll-col-xs">
                      <button
                        type="button"
                        className="tile-soft border-soft transition-base d-flex flex-column align-items-center justify-content-center gap-1 w-100 h-100 px-2 py-3 rounded-3"
                      >
                        <span className="fs-xs fw-semibold text-uppercase text-muted-2">
                          Sat
                        </span>
                        <span className="fs-4 fw-bold text-title lh-1">
                          <bdi>
                            29
                          </bdi>
                        </span>
                        <span className="fs-xs text-body-2">
                          <bdi>
                            3 labs
                          </bdi>
                        </span>
                      </button>
                    </li>
                    <li className="scroll-col-xs">
                      <button
                        type="button"
                        className="tile-soft border-soft transition-base d-flex flex-column align-items-center justify-content-center gap-1 w-100 h-100 px-2 py-3 rounded-3"
                      >
                        <span className="fs-xs fw-semibold text-uppercase text-muted-2">
                          Sun
                        </span>
                        <span className="fs-4 fw-bold text-title lh-1">
                          <bdi>
                            30
                          </bdi>
                        </span>
                        <span className="fs-xs text-muted-2">
                          No classes
                        </span>
                      </button>
                    </li>
                  </ul>
                  {" "}
                  <button
                    type="button"
                    data-scroll-nav="prev"
                    className="scroll-nav btn btn-primary btn-18 rounded-circle position-absolute top-50 start-0 translate-middle-y z-2"
                    aria-label="Previous days"
                  >
                    <i className="flip-rtl" data-lucide="arrow-left" />
                  </button>
                  {" "}
                  <button
                    type="button"
                    data-scroll-nav="next"
                    className="scroll-nav btn btn-primary btn-18 rounded-circle position-absolute top-50 end-0 translate-middle-y z-2"
                    aria-label="Next days"
                  >
                    <i className="flip-rtl" data-lucide="arrow-right" />
                  </button>
                </div>
                {/* Agenda view */}
                <ol className="list-unstyled d-flex flex-column gap-2 mb-0" data-view-panel="agenda">
                  <li className="d-flex flex-wrap align-items-center gap-3 p-3 rounded-3 tint-violet border-current">
                    <span className="text-center flex-shrink-0">
                      {" "}
                      <span className="d-block fs-5 fw-bold text-title lh-1">
                        <bdi>
                          09:00
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs mt-1">
                        <bdi>
                          60 min
                        </bdi>
                      </span>
                      {" "}
                    </span>
                    <span className="icon-box icon-box-lg bg-cat-violet text-white flex-shrink-0" aria-hidden="true">
                      <i data-lucide="brain-circuit" />
                    </span>
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-flex flex-wrap align-items-center gap-2 mb-1">
                        <span className="fs-md fw-semibold text-title">
                          Machine Learning Foundations
                        </span>
                        <span className="badge-soft tint-success d-inline-flex align-items-center gap-1 px-2">
                          {" "}
                          <span className="legend-dot legend-dot-sm bg-cat-emerald" aria-hidden="true" />
                          Live now
                          {" "}
                        </span>
                      </span>
                      {" "}
                      <span className="d-flex flex-wrap align-items-center gap-3 fs-xs text-body-2">
                        <span className="d-inline-flex align-items-center gap-1">
                          <i className="icon-12" data-lucide="user-round" aria-hidden="true" />
                          Dr. Maya Chen
                        </span>
                        <span className="d-inline-flex align-items-center gap-1">
                          <i className="icon-12" data-lucide="map-pin" aria-hidden="true" />
                          <bdi>
                            Room B-204
                          </bdi>
                        </span>
                        <span className="d-inline-flex align-items-center gap-1">
                          <i className="icon-12" data-lucide="users" aria-hidden="true" />
                          <bdi>
                            42 learners
                          </bdi>
                        </span>
                      </span>
                      {" "}
                    </span>
                    <button
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#eduJoinClassModal"
                      className="btn btn-primary btn-sm d-inline-flex align-items-center gap-2 flex-shrink-0"
                    >
                      <i className="icon-16" data-lucide="video" aria-hidden="true" />
                      Join
                    </button>
                  </li>
                  <li className="d-flex flex-wrap align-items-center gap-3 p-3 rounded-3 bg-soft border-soft">
                    <span className="text-center flex-shrink-0">
                      {" "}
                      <span className="d-block fs-5 fw-bold text-title lh-1">
                        <bdi>
                          10:30
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 mt-1">
                        <bdi>
                          90 min
                        </bdi>
                      </span>
                      {" "}
                    </span>
                    <span className="icon-box icon-box-lg tint-rose border-current flex-shrink-0" aria-hidden="true">
                      <i data-lucide="flask-conical" />
                    </span>
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-flex flex-wrap align-items-center gap-2 mb-1">
                        <span className="fs-md fw-semibold text-title">
                          Organic Chemistry Lab
                        </span>
                        <span className="badge-soft tint-amber d-inline-flex align-items-center gap-1 px-2">
                          {" "}
                          <i className="icon-12" data-lucide="beaker" aria-hidden="true" />
                          Practical
                          {" "}
                        </span>
                      </span>
                      {" "}
                      <span className="d-flex flex-wrap align-items-center gap-3 fs-xs text-body-2">
                        <span className="d-inline-flex align-items-center gap-1">
                          <i className="icon-12" data-lucide="user-round" aria-hidden="true" />
                          Jordan Davis
                        </span>
                        <span className="d-inline-flex align-items-center gap-1">
                          <i className="icon-12" data-lucide="map-pin" aria-hidden="true" />
                          <bdi>
                            Lab C-11
                          </bdi>
                        </span>
                        <span className="d-inline-flex align-items-center gap-1">
                          <i className="icon-12" data-lucide="users" aria-hidden="true" />
                          <bdi>
                            26 learners
                          </bdi>
                        </span>
                      </span>
                      {" "}
                    </span>
                    <button
                      type="button"
                      className="btn btn-outline-soft btn-sm d-inline-flex align-items-center gap-2 flex-shrink-0"
                    >
                      <i className="icon-16" data-lucide="bell" aria-hidden="true" />
                      Remind
                    </button>
                  </li>
                  <li className="d-flex flex-wrap align-items-center gap-3 p-3 rounded-3 bg-soft border-soft">
                    <span className="text-center flex-shrink-0">
                      {" "}
                      <span className="d-block fs-5 fw-bold text-title lh-1">
                        <bdi>
                          13:00
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 mt-1">
                        <bdi>
                          45 min
                        </bdi>
                      </span>
                      {" "}
                    </span>
                    <span className="icon-box icon-box-lg tint-blue border-current flex-shrink-0" aria-hidden="true">
                      <i data-lucide="calculator" />
                    </span>
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-flex flex-wrap align-items-center gap-2 mb-1">
                        <span className="fs-md fw-semibold text-title">
                          Financial Accounting II
                        </span>
                        <span className="badge-soft tint-cyan d-inline-flex align-items-center gap-1 px-2">
                          {" "}
                          <i className="icon-12" data-lucide="video" aria-hidden="true" />
                          Live online
                          {" "}
                        </span>
                      </span>
                      {" "}
                      <span className="d-flex flex-wrap align-items-center gap-3 fs-xs text-body-2">
                        <span className="d-inline-flex align-items-center gap-1">
                          <i className="icon-12" data-lucide="user-round" aria-hidden="true" />
                          Prof. Daniel Okafor
                        </span>
                        <span className="d-inline-flex align-items-center gap-1">
                          <i className="icon-12" data-lucide="map-pin" aria-hidden="true" />
                          Virtual hall
                        </span>
                        <span className="d-inline-flex align-items-center gap-1">
                          <i className="icon-12" data-lucide="users" aria-hidden="true" />
                          <bdi>
                            64 learners
                          </bdi>
                        </span>
                      </span>
                      {" "}
                    </span>
                    <button
                      type="button"
                      className="btn btn-outline-soft btn-sm d-inline-flex align-items-center gap-2 flex-shrink-0"
                    >
                      <i className="icon-16" data-lucide="bell" aria-hidden="true" />
                      Remind
                    </button>
                  </li>
                  <li className="d-flex flex-wrap align-items-center gap-3 p-3 rounded-3 bg-soft border-soft">
                    <span className="text-center flex-shrink-0">
                      {" "}
                      <span className="d-block fs-5 fw-bold text-title lh-1">
                        <bdi>
                          15:00
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 mt-1">
                        <bdi>
                          60 min
                        </bdi>
                      </span>
                      {" "}
                    </span>
                    <span className="icon-box icon-box-lg tint-amber border-current flex-shrink-0" aria-hidden="true">
                      <i data-lucide="palette" />
                    </span>
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-flex flex-wrap align-items-center gap-2 mb-1">
                        <span className="fs-md fw-semibold text-title">
                          UX Research Methods
                        </span>
                        <span className="badge-soft tint-violet d-inline-flex align-items-center gap-1 px-2">
                          {" "}
                          <i className="icon-12" data-lucide="presentation" aria-hidden="true" />
                          Workshop
                          {" "}
                        </span>
                      </span>
                      {" "}
                      <span className="d-flex flex-wrap align-items-center gap-3 fs-xs text-body-2">
                        <span className="d-inline-flex align-items-center gap-1">
                          <i className="icon-12" data-lucide="user-round" aria-hidden="true" />
                          Priya Nair
                        </span>
                        <span className="d-inline-flex align-items-center gap-1">
                          <i className="icon-12" data-lucide="map-pin" aria-hidden="true" />
                          <bdi>
                            Studio 2
                          </bdi>
                        </span>
                        <span className="d-inline-flex align-items-center gap-1">
                          <i className="icon-12" data-lucide="users" aria-hidden="true" />
                          <bdi>
                            38 learners
                          </bdi>
                        </span>
                      </span>
                      {" "}
                    </span>
                    <button
                      type="button"
                      className="btn btn-outline-soft btn-sm d-inline-flex align-items-center gap-2 flex-shrink-0"
                    >
                      <i className="icon-16" data-lucide="bell" aria-hidden="true" />
                      Remind
                    </button>
                  </li>
                  <li className="d-flex flex-wrap align-items-center gap-3 p-3 rounded-3 bg-soft border-soft">
                    <span className="text-center flex-shrink-0">
                      {" "}
                      <span className="d-block fs-5 fw-bold text-title lh-1">
                        <bdi>
                          16:30
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 mt-1">
                        <bdi>
                          30 min
                        </bdi>
                      </span>
                      {" "}
                    </span>
                    <span className="icon-box icon-box-lg tint-emerald border-current flex-shrink-0" aria-hidden="true">
                      <i data-lucide="languages" />
                    </span>
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-flex flex-wrap align-items-center gap-2 mb-1">
                        <span className="fs-md fw-semibold text-title">
                          Spanish Conversation Clinic
                        </span>
                        <span className="badge-soft tint-emerald d-inline-flex align-items-center gap-1 px-2">
                          {" "}
                          <i className="icon-12" data-lucide="message-circle" aria-hidden="true" />
                          Drop-in
                          {" "}
                        </span>
                      </span>
                      {" "}
                      <span className="d-flex flex-wrap align-items-center gap-3 fs-xs text-body-2">
                        <span className="d-inline-flex align-items-center gap-1">
                          <i className="icon-12" data-lucide="user-round" aria-hidden="true" />
                          Dr. Elena Rossi
                        </span>
                        <span className="d-inline-flex align-items-center gap-1">
                          <i className="icon-12" data-lucide="map-pin" aria-hidden="true" />
                          <bdi>
                            Room A-07
                          </bdi>
                        </span>
                        <span className="d-inline-flex align-items-center gap-1">
                          <i className="icon-12" data-lucide="users" aria-hidden="true" />
                          <bdi>
                            12 learners
                          </bdi>
                        </span>
                      </span>
                      {" "}
                    </span>
                    <button
                      type="button"
                      className="btn btn-outline-soft btn-sm d-inline-flex align-items-center gap-2 flex-shrink-0"
                    >
                      <i className="icon-16" data-lucide="bell" aria-hidden="true" />
                      Remind
                    </button>
                  </li>
                </ol>
                {/* Week view */}
                <div className="d-none" data-view-panel="week">
                  <ul className="scroll-row list-unstyled d-flex align-items-stretch gap-2 mb-0 pb-1">
                    <li className="scroll-col-xs">
                      <div className="h-100 d-flex flex-column gap-2">
                        <p className="text-center pb-2 mb-0 border-b-soft">
                          <span className="d-block fs-xs fw-semibold text-uppercase text-muted-2">
                            Mon
                          </span>
                          {" "}
                          <span className="d-block fs-5 fw-bold text-title lh-1">
                            <bdi>
                              24
                            </bdi>
                          </span>
                        </p>
                        <span className="d-block p-2 rounded-2 tint-violet fs-xs">
                          {" "}
                          <span className="d-block fw-semibold text-truncate">
                            <bdi>
                              ML-301
                            </bdi>
                          </span>
                          {" "}
                          <bdi>
                            09:00
                          </bdi>
                          {" "}
                        </span>
                        <span className="d-block p-2 rounded-2 tint-blue fs-xs">
                          {" "}
                          <span className="d-block fw-semibold text-truncate">
                            <bdi>
                              ACC-210
                            </bdi>
                          </span>
                          {" "}
                          <bdi>
                            11:00
                          </bdi>
                          {" "}
                        </span>
                        <span className="d-block p-2 rounded-2 tint-amber fs-xs">
                          {" "}
                          <span className="d-block fw-semibold text-truncate">
                            <bdi>
                              UXR-140
                            </bdi>
                          </span>
                          {" "}
                          <bdi>
                            14:00
                          </bdi>
                          {" "}
                        </span>
                      </div>
                    </li>
                    <li className="scroll-col-xs">
                      <div className="h-100 d-flex flex-column gap-2">
                        <p className="text-center pb-2 mb-0 border-b-soft">
                          <span className="d-block fs-xs fw-semibold text-uppercase text-brand">
                            Tue
                          </span>
                          {" "}
                          <span className="d-block fs-5 fw-bold text-brand lh-1">
                            <bdi>
                              25
                            </bdi>
                          </span>
                        </p>
                        <span className="d-block p-2 rounded-2 tint-violet fs-xs">
                          {" "}
                          <span className="d-block fw-semibold text-truncate">
                            <bdi>
                              ML-301
                            </bdi>
                          </span>
                          {" "}
                          <bdi>
                            09:00
                          </bdi>
                          {" "}
                        </span>
                        <span className="d-block p-2 rounded-2 tint-rose fs-xs">
                          {" "}
                          <span className="d-block fw-semibold text-truncate">
                            <bdi>
                              CHM-220
                            </bdi>
                          </span>
                          {" "}
                          <bdi>
                            10:30
                          </bdi>
                          {" "}
                        </span>
                        <span className="d-block p-2 rounded-2 tint-blue fs-xs">
                          {" "}
                          <span className="d-block fw-semibold text-truncate">
                            <bdi>
                              ACC-210
                            </bdi>
                          </span>
                          {" "}
                          <bdi>
                            13:00
                          </bdi>
                          {" "}
                        </span>
                      </div>
                    </li>
                    <li className="scroll-col-xs">
                      <div className="h-100 d-flex flex-column gap-2">
                        <p className="text-center pb-2 mb-0 border-b-soft">
                          <span className="d-block fs-xs fw-semibold text-uppercase text-muted-2">
                            Wed
                          </span>
                          {" "}
                          <span className="d-block fs-5 fw-bold text-title lh-1">
                            <bdi>
                              26
                            </bdi>
                          </span>
                        </p>
                        <span className="d-block p-2 rounded-2 tint-cyan fs-xs">
                          {" "}
                          <span className="d-block fw-semibold text-truncate">
                            <bdi>
                              DSA-305
                            </bdi>
                          </span>
                          {" "}
                          <bdi>
                            08:30
                          </bdi>
                          {" "}
                        </span>
                        <span className="d-block p-2 rounded-2 tint-emerald fs-xs">
                          {" "}
                          <span className="d-block fw-semibold text-truncate">
                            <bdi>
                              SPA-110
                            </bdi>
                          </span>
                          {" "}
                          <bdi>
                            11:30
                          </bdi>
                          {" "}
                        </span>
                        <span className="d-block p-2 rounded-2 tint-amber fs-xs">
                          {" "}
                          <span className="d-block fw-semibold text-truncate">
                            <bdi>
                              UXR-140
                            </bdi>
                          </span>
                          {" "}
                          <bdi>
                            15:00
                          </bdi>
                          {" "}
                        </span>
                      </div>
                    </li>
                    <li className="scroll-col-xs">
                      <div className="h-100 d-flex flex-column gap-2">
                        <p className="text-center pb-2 mb-0 border-b-soft">
                          <span className="d-block fs-xs fw-semibold text-uppercase text-muted-2">
                            Thu
                          </span>
                          {" "}
                          <span className="d-block fs-5 fw-bold text-title lh-1">
                            <bdi>
                              27
                            </bdi>
                          </span>
                        </p>
                        <span className="d-block p-2 rounded-2 tint-violet fs-xs">
                          {" "}
                          <span className="d-block fw-semibold text-truncate">
                            <bdi>
                              ML-301
                            </bdi>
                          </span>
                          {" "}
                          <bdi>
                            09:00
                          </bdi>
                          {" "}
                        </span>
                        <span className="d-block p-2 rounded-2 tint-rose fs-xs">
                          {" "}
                          <span className="d-block fw-semibold text-truncate">
                            <bdi>
                              CHM-220
                            </bdi>
                          </span>
                          {" "}
                          <bdi>
                            10:30
                          </bdi>
                          {" "}
                        </span>
                        <span className="d-block p-2 rounded-2 tint-cyan fs-xs">
                          {" "}
                          <span className="d-block fw-semibold text-truncate">
                            <bdi>
                              DSA-305
                            </bdi>
                          </span>
                          {" "}
                          <bdi>
                            14:30
                          </bdi>
                          {" "}
                        </span>
                      </div>
                    </li>
                    <li className="scroll-col-xs">
                      <div className="h-100 d-flex flex-column gap-2">
                        <p className="text-center pb-2 mb-0 border-b-soft">
                          <span className="d-block fs-xs fw-semibold text-uppercase text-muted-2">
                            Fri
                          </span>
                          {" "}
                          <span className="d-block fs-5 fw-bold text-title lh-1">
                            <bdi>
                              28
                            </bdi>
                          </span>
                        </p>
                        <span className="d-block p-2 rounded-2 tint-blue fs-xs">
                          {" "}
                          <span className="d-block fw-semibold text-truncate">
                            <bdi>
                              ACC-210
                            </bdi>
                          </span>
                          {" "}
                          <bdi>
                            09:30
                          </bdi>
                          {" "}
                        </span>
                        <span className="d-block p-2 rounded-2 tint-emerald fs-xs">
                          {" "}
                          <span className="d-block fw-semibold text-truncate">
                            <bdi>
                              SPA-110
                            </bdi>
                          </span>
                          {" "}
                          <bdi>
                            13:00
                          </bdi>
                          {" "}
                        </span>
                      </div>
                    </li>
                    <li className="scroll-col-xs">
                      <div className="h-100 d-flex flex-column gap-2">
                        <p className="text-center pb-2 mb-0 border-b-soft">
                          <span className="d-block fs-xs fw-semibold text-uppercase text-muted-2">
                            Sat
                          </span>
                          {" "}
                          <span className="d-block fs-5 fw-bold text-title lh-1">
                            <bdi>
                              29
                            </bdi>
                          </span>
                        </p>
                        <span className="d-block p-2 rounded-2 tint-rose fs-xs">
                          {" "}
                          <span className="d-block fw-semibold text-truncate">
                            <bdi>
                              CHM-220
                            </bdi>
                          </span>
                          {" "}
                          <bdi>
                            10:00
                          </bdi>
                          {" "}
                        </span>
                      </div>
                    </li>
                    <li className="scroll-col-xs">
                      <div className="h-100 d-flex flex-column gap-2">
                        <p className="text-center pb-2 mb-0 border-b-soft">
                          <span className="d-block fs-xs fw-semibold text-uppercase text-muted-2">
                            Sun
                          </span>
                          {" "}
                          <span className="d-block fs-5 fw-bold text-title lh-1">
                            <bdi>
                              30
                            </bdi>
                          </span>
                        </p>
                        <span className={"d-flex align-items-center justify-content-center h-100 p-2 rounded-2 bg-soft\n                          border-soft border-dashed fs-xs text-muted-2 text-center"}>
                          No classes
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Deadlines */}
          <div className="col-12 col-xl-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    Deadlines This Week
                  </h3>
                  <span className="badge-soft tint-danger">
                    <bdi>
                      4 due
                    </bdi>
                  </span>
                </div>
                <ol className="list-unstyled d-flex flex-column flex-grow-1 gap-2 mb-0">
                  <li className="d-flex align-items-start gap-3 p-3 rounded-3 bg-soft border-soft">
                    <span className="icon-box icon-box-sm tint-rose border-current flex-shrink-0" aria-hidden="true">
                      <i data-lucide="file-text" />
                    </span>
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-1">
                        <span className="fs-md fw-semibold text-title text-truncate">
                          Reaction Mechanisms Report
                        </span>
                        <span className="badge-soft tint-danger flex-shrink-0">
                          <bdi>
                            Today
                          </bdi>
                        </span>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 mb-2">
                        <bdi>
                          Organic Chemistry · CHM-220
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-flex align-items-center gap-2">
                        <span
                          className="progress progress-sm flex-grow-1"
                          role="progressbar"
                          aria-label="Reaction Mechanisms Report scripts marked"
                          aria-valuenow="45"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="progress-bar bg-cat-rose" style={{ width: "45%" }} />
                        </span>
                        <span className="fs-xs text-body-2 text-nowrap">
                          <bdi>
                            19 / 42 marked
                          </bdi>
                        </span>
                      </span>
                      {" "}
                    </span>
                  </li>
                  <li className="d-flex align-items-start gap-3 p-3 rounded-3 bg-soft border-soft">
                    <span className="icon-box icon-box-sm tint-amber border-current flex-shrink-0" aria-hidden="true">
                      <i data-lucide="clipboard-check" />
                    </span>
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-1">
                        <span className="fs-md fw-semibold text-title text-truncate">
                          Midterm Problem Set
                        </span>
                        <span className="badge-soft tint-warning flex-shrink-0">
                          <bdi>
                            2 days
                          </bdi>
                        </span>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 mb-2">
                        <bdi>
                          Machine Learning · ML-301
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-flex align-items-center gap-2">
                        <span
                          className="progress progress-sm flex-grow-1"
                          role="progressbar"
                          aria-label="Midterm Problem Set submissions received"
                          aria-valuenow="45"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="progress-bar bg-cat-amber" style={{ width: "45%" }} />
                        </span>
                        <span className="fs-xs text-body-2 text-nowrap">
                          <bdi>
                            19 / 42 in
                          </bdi>
                        </span>
                      </span>
                      {" "}
                    </span>
                  </li>
                  <li className="d-flex align-items-start gap-3 p-3 rounded-3 bg-soft border-soft">
                    <span className="icon-box icon-box-sm tint-blue border-current flex-shrink-0" aria-hidden="true">
                      <i data-lucide="presentation" />
                    </span>
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-1">
                        <span className="fs-md fw-semibold text-title text-truncate">
                          Usability Study Deck
                        </span>
                        <span className="badge-soft tint-warning flex-shrink-0">
                          <bdi>
                            3 days
                          </bdi>
                        </span>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 mb-2">
                        <bdi>
                          UX Research · UXR-140
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-flex align-items-center gap-2">
                        <span
                          className="progress progress-sm flex-grow-1"
                          role="progressbar"
                          aria-label="Usability Study Deck submissions received"
                          aria-valuenow="29"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="progress-bar bg-cat-blue" style={{ width: "29%" }} />
                        </span>
                        <span className="fs-xs text-body-2 text-nowrap">
                          <bdi>
                            11 / 38 in
                          </bdi>
                        </span>
                      </span>
                      {" "}
                    </span>
                  </li>
                  <li className="d-flex align-items-start gap-3 p-3 rounded-3 bg-soft border-soft">
                    <span className="icon-box icon-box-sm tint-emerald border-current flex-shrink-0" aria-hidden="true">
                      <i data-lucide="mic" />
                    </span>
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-1">
                        <span className="fs-md fw-semibold text-title text-truncate">
                          Oral Assessment
                        </span>
                        <span className="badge-soft tint-emerald flex-shrink-0">
                          <bdi>
                            5 days
                          </bdi>
                        </span>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 mb-2">
                        <bdi>
                          Conversational Spanish · SPA-110
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-flex align-items-center gap-2">
                        <span
                          className="progress progress-sm flex-grow-1"
                          role="progressbar"
                          aria-label="Oral Assessment slots booked"
                          aria-valuenow="66"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="progress-bar bg-cat-emerald" style={{ width: "66%" }} />
                        </span>
                        <span className="fs-xs text-body-2 text-nowrap">
                          <bdi>
                            31 / 47 booked
                          </bdi>
                        </span>
                      </span>
                      {" "}
                    </span>
                  </li>
                </ol>
                <a
                  href="#"
                  className="d-flex align-items-center justify-content-center gap-1 fs-md fw-medium text-brand mt-auto pt-3"
                >
                  Open assignment centre
                  <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Assignments & tasks ===== */}
      <section className="mb-4" aria-labelledby="edu-assignments-title">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
          <div className="min-w-0">
            <h2 id="edu-assignments-title" className="fs-4 fw-bold text-title mb-1">
              {"Assignments & Tasks"}
            </h2>
            <p className="fs-md text-body-2 mb-0">
              Set the work, watch submissions land, and keep the grading desk clear.
            </p>
          </div>
          <div className="d-flex flex-wrap align-items-center gap-2">
            <span className="badge-soft tint-warning border-current d-inline-flex align-self-stretch align-items-center gap-2 px-3">
              {" "}
              <i className="icon-12" data-lucide="hourglass" aria-hidden="true" />
              <bdi>
                32 scripts to mark
              </bdi>
              {" "}
            </span>
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#eduNewAssignmentModal"
              className="btn btn-accent d-inline-flex flex-nowrap align-items-center justify-content-center gap-2 text-nowrap"
            >
              <i className="icon-20" data-lucide="file-plus-2" aria-hidden="true" />
              New Assignment
            </button>
          </div>
        </div>
        <div className="row g-3">
          {/* Workflow board */}
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
                  <div className="min-w-0">
                    <h3 className="fs-5 fw-bold text-title mb-1">
                      Assignment Workflow
                    </h3>
                    <p className="fs-md text-body-2 mb-0">
                      <bdi>
                        60 assignments
                      </bdi>
                      {" "}
                      moving through Fall Semester 2026
                    </p>
                  </div>
                  <div className="d-flex flex-wrap flex-lg-nowrap align-items-center gap-2">
                    <div className="header-search min-w-0" role="search">
                      <i data-lucide="search" />
                      {" "}
                      <input
                        type="search"
                        id="eduAssignmentSearch"
                        name="assignment-q"
                        placeholder="Search assignments..."
                        aria-label="Search assignments"
                      />
                    </div>
                    <div className="dropdown flex-grow-1 flex-sm-grow-0">
                      <button
                        type="button"
                        className="btn btn-outline-soft w-100 d-inline-flex flex-nowrap align-items-center justify-content-center gap-2 text-nowrap"
                        id="eduAssignmentScope"
                        data-bs-toggle="dropdown"
                        data-bs-offset="0,8"
                        aria-expanded="false"
                      >
                        All courses
                        {" "}
                        <i className="dd-caret icon-18" data-lucide="chevron-down" aria-hidden="true" />
                      </button>
                      {" "}
                      <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="eduAssignmentScope">
                        <li>
                          <button type="button" className="dropdown-item active">
                            All courses
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item">
                            My courses
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item">
                            STEM department
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item">
                            Needs my attention
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <ul className="scroll-row list-unstyled d-flex align-items-start gap-3 mb-0 pb-1">
                  <li className="scroll-col bg-soft rounded-3 p-3">
                    <div className="d-flex align-items-center justify-content-between gap-2 mb-2">
                      <h4 className="d-flex align-items-center gap-2 min-w-0 fs-lg fw-semibold text-title mb-0">
                        <span className="legend-dot bg-cat-slate" aria-hidden="true" />
                        <span className="text-truncate">
                          Drafting
                        </span>
                      </h4>
                      <span className="fs-5 fw-bold text-muted-2 lh-1">
                        <bdi>
                          6
                        </bdi>
                      </span>
                    </div>
                    <div
                      className="progress mb-3"
                      role="progressbar"
                      aria-label="Drafting share of all assignments"
                      aria-valuenow="10"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-slate" style={{ width: "10%" }} />
                    </div>
                    <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                      <li className="bg-plain border-theme rounded-3 p-3">
                        <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
                          <span className="badge-soft tint-violet d-inline-flex align-items-center gap-1">
                            {" "}
                            <i className="icon-12" data-lucide="file-text" aria-hidden="true" />
                            Essay
                            {" "}
                          </span>
                          <span className="fs-xs fw-bold text-uppercase text-muted-2">
                            <bdi>
                              LIT-150
                            </bdi>
                          </span>
                        </div>
                        <h5 className="fs-md fw-semibold text-title mb-2">
                          Modernism Close Reading
                        </h5>
                        <p className="d-flex flex-wrap align-items-center gap-3 fs-xs text-muted-2 mb-3">
                          <span className="d-inline-flex align-items-center gap-1">
                            <i className="icon-12" data-lucide="calendar-clock" aria-hidden="true" />
                            <bdi>
                              Opens 29 Aug
                            </bdi>
                          </span>
                          <span className="d-inline-flex align-items-center gap-1">
                            <i className="icon-12" data-lucide="users" aria-hidden="true" />
                            <bdi>
                              34 learners
                            </bdi>
                          </span>
                        </p>
                        <div className="d-flex align-items-center justify-content-between gap-2 pt-2 border-t-soft">
                          <span className="avatar-stack">
                            <span className="avatar avatar-xs bg-grad-2" aria-hidden="true">
                              EM
                            </span>
                            <span className="avatar avatar-xs bg-grad-4" aria-hidden="true">
                              RS
                            </span>
                          </span>
                          <span className="fs-xs fw-semibold text-muted-2">
                            <bdi>
                              60 pts
                            </bdi>
                          </span>
                        </div>
                      </li>
                      <li className="bg-plain border-theme rounded-3 p-3">
                        <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
                          <span className="badge-soft tint-rose d-inline-flex align-items-center gap-1">
                            {" "}
                            <i className="icon-12" data-lucide="flask-conical" aria-hidden="true" />
                            Lab report
                            {" "}
                          </span>
                          <span className="fs-xs fw-bold text-uppercase text-muted-2">
                            <bdi>
                              PHY-105
                            </bdi>
                          </span>
                        </div>
                        <h5 className="fs-md fw-semibold text-title mb-2">
                          Kinematics Lab Brief
                        </h5>
                        <p className="d-flex flex-wrap align-items-center gap-3 fs-xs text-muted-2 mb-3">
                          <span className="d-inline-flex align-items-center gap-1">
                            <i className="icon-12" data-lucide="calendar-clock" aria-hidden="true" />
                            <bdi>
                              Opens 1 Sep
                            </bdi>
                          </span>
                          <span className="d-inline-flex align-items-center gap-1">
                            <i className="icon-12" data-lucide="users" aria-hidden="true" />
                            <bdi>
                              28 learners
                            </bdi>
                          </span>
                        </p>
                        <div className="d-flex align-items-center justify-content-between gap-2 pt-2 border-t-soft">
                          <span className="avatar-stack">
                            <span className="avatar avatar-xs bg-grad-1" aria-hidden="true">
                              JD
                            </span>
                            <span className="avatar avatar-xs bg-grad-5" aria-hidden="true">
                              TN
                            </span>
                          </span>
                          <span className="fs-xs fw-semibold text-muted-2">
                            <bdi>
                              40 pts
                            </bdi>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="scroll-col bg-soft rounded-3 p-3">
                    <div className="d-flex align-items-center justify-content-between gap-2 mb-2">
                      <h4 className="d-flex align-items-center gap-2 min-w-0 fs-lg fw-semibold text-title mb-0">
                        <span className="legend-dot bg-cat-blue" aria-hidden="true" />
                        <span className="text-truncate">
                          Open for submission
                        </span>
                      </h4>
                      <span className="fs-5 fw-bold text-muted-2 lh-1">
                        <bdi>
                          14
                        </bdi>
                      </span>
                    </div>
                    <div
                      className="progress mb-3"
                      role="progressbar"
                      aria-label="Open for submission share of all assignments"
                      aria-valuenow="23"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-blue" style={{ width: "23%" }} />
                    </div>
                    <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                      <li className="bg-plain border-theme rounded-3 p-3">
                        <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
                          <span className="badge-soft tint-blue d-inline-flex align-items-center gap-1">
                            {" "}
                            <i className="icon-12" data-lucide="clipboard-list" aria-hidden="true" />
                            Problem set
                            {" "}
                          </span>
                          <span className="fs-xs fw-bold text-uppercase text-muted-2">
                            <bdi>
                              ML-301
                            </bdi>
                          </span>
                        </div>
                        <h5 className="fs-md fw-semibold text-title mb-2">
                          Midterm Problem Set
                        </h5>
                        <p className="d-flex flex-wrap align-items-center gap-3 fs-xs text-muted-2 mb-2">
                          <span className="d-inline-flex align-items-center gap-1">
                            <i className="icon-12" data-lucide="calendar-clock" aria-hidden="true" />
                            <bdi>
                              Due in 2 days
                            </bdi>
                          </span>
                          <span className="d-inline-flex align-items-center gap-1">
                            <i className="icon-12" data-lucide="users" aria-hidden="true" />
                            <bdi>
                              42 learners
                            </bdi>
                          </span>
                        </p>
                        <div className="d-flex align-items-center gap-2 mb-3">
                          <span
                            className="progress progress-sm flex-grow-1"
                            role="progressbar"
                            aria-label="Midterm Problem Set submissions received"
                            aria-valuenow="45"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <span className="progress-bar bg-cat-blue" style={{ width: "45%" }} />
                          </span>
                          <span className="fs-xs text-body-2 text-nowrap">
                            <bdi>
                              19 / 42 in
                            </bdi>
                          </span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between gap-2 pt-2 border-t-soft">
                          <span className="avatar-stack">
                            <span className="avatar avatar-xs">
                              <img src="/assets/images/avatar-2.png" width="28" height="28" alt="" />
                            </span>
                            <span className="avatar avatar-xs bg-grad-3" aria-hidden="true">
                              AR
                            </span>
                          </span>
                          <span className="badge-soft tint-warning">
                            <bdi>
                              23 outstanding
                            </bdi>
                          </span>
                        </div>
                      </li>
                      <li className="bg-plain border-theme rounded-3 p-3">
                        <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
                          <span className="badge-soft tint-amber d-inline-flex align-items-center gap-1">
                            {" "}
                            <i className="icon-12" data-lucide="presentation" aria-hidden="true" />
                            Presentation
                            {" "}
                          </span>
                          <span className="fs-xs fw-bold text-uppercase text-muted-2">
                            <bdi>
                              UXR-140
                            </bdi>
                          </span>
                        </div>
                        <h5 className="fs-md fw-semibold text-title mb-2">
                          Usability Study Deck
                        </h5>
                        <p className="d-flex flex-wrap align-items-center gap-3 fs-xs text-muted-2 mb-2">
                          <span className="d-inline-flex align-items-center gap-1">
                            <i className="icon-12" data-lucide="calendar-clock" aria-hidden="true" />
                            <bdi>
                              Due in 3 days
                            </bdi>
                          </span>
                          <span className="d-inline-flex align-items-center gap-1">
                            <i className="icon-12" data-lucide="users" aria-hidden="true" />
                            <bdi>
                              38 learners
                            </bdi>
                          </span>
                        </p>
                        <div className="d-flex align-items-center gap-2 mb-3">
                          <span
                            className="progress progress-sm flex-grow-1"
                            role="progressbar"
                            aria-label="Usability Study Deck submissions received"
                            aria-valuenow="29"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <span className="progress-bar bg-cat-amber" style={{ width: "29%" }} />
                          </span>
                          <span className="fs-xs text-body-2 text-nowrap">
                            <bdi>
                              11 / 38 in
                            </bdi>
                          </span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between gap-2 pt-2 border-t-soft">
                          <span className="avatar-stack">
                            <span className="avatar avatar-xs">
                              <img src="/assets/images/avatar-3.png" width="28" height="28" alt="" />
                            </span>
                            <span className="avatar avatar-xs bg-grad-1" aria-hidden="true">
                              DW
                            </span>
                          </span>
                          <span className="badge-soft tint-warning">
                            <bdi>
                              27 outstanding
                            </bdi>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="scroll-col bg-soft rounded-3 p-3">
                    <div className="d-flex align-items-center justify-content-between gap-2 mb-2">
                      <h4 className="d-flex align-items-center gap-2 min-w-0 fs-lg fw-semibold text-title mb-0">
                        <span className="legend-dot bg-cat-amber" aria-hidden="true" />
                        <span className="text-truncate">
                          Awaiting grading
                        </span>
                      </h4>
                      <span className="fs-5 fw-bold text-muted-2 lh-1">
                        <bdi>
                          18
                        </bdi>
                      </span>
                    </div>
                    <div
                      className="progress mb-3"
                      role="progressbar"
                      aria-label="Awaiting grading share of all assignments"
                      aria-valuenow="30"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-amber" style={{ width: "30%" }} />
                    </div>
                    <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                      <li className="bg-plain border-theme rounded-3 p-3">
                        <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
                          <span className="badge-soft tint-rose d-inline-flex align-items-center gap-1">
                            {" "}
                            <i className="icon-12" data-lucide="file-text" aria-hidden="true" />
                            Report
                            {" "}
                          </span>
                          <span className="fs-xs fw-bold text-uppercase text-muted-2">
                            <bdi>
                              CHM-220
                            </bdi>
                          </span>
                        </div>
                        <h5 className="fs-md fw-semibold text-title mb-2">
                          Reaction Mechanisms Report
                        </h5>
                        <p className="d-flex flex-wrap align-items-center gap-3 fs-xs text-muted-2 mb-2">
                          <span className="d-inline-flex align-items-center gap-1">
                            <i className="icon-12" data-lucide="lock" aria-hidden="true" />
                            <bdi>
                              Closed 24 Aug
                            </bdi>
                          </span>
                          <span className="d-inline-flex align-items-center gap-1">
                            <i className="icon-12" data-lucide="inbox" aria-hidden="true" />
                            <bdi>
                              42 collected
                            </bdi>
                          </span>
                        </p>
                        <div className="d-flex align-items-center gap-2 mb-3">
                          <span
                            className="progress progress-sm flex-grow-1"
                            role="progressbar"
                            aria-label="Reaction Mechanisms Report scripts marked"
                            aria-valuenow="45"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <span className="progress-bar bg-cat-rose" style={{ width: "45%" }} />
                          </span>
                          <span className="fs-xs text-body-2 text-nowrap">
                            <bdi>
                              19 / 42 marked
                            </bdi>
                          </span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between gap-2 pt-2 border-t-soft">
                          <span className="avatar-stack">
                            <span className="avatar avatar-xs">
                              <img src="/assets/images/avatar-1.png" width="28" height="28" alt="" />
                            </span>
                            <span className="avatar avatar-xs bg-grad-4" aria-hidden="true">
                              SB
                            </span>
                          </span>
                          <span className="badge-soft tint-danger">
                            <bdi>
                              23 to mark
                            </bdi>
                          </span>
                        </div>
                      </li>
                      <li className="bg-plain border-theme rounded-3 p-3">
                        <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
                          <span className="badge-soft tint-cyan d-inline-flex align-items-center gap-1">
                            {" "}
                            <i className="icon-12" data-lucide="braces" aria-hidden="true" />
                            Code review
                            {" "}
                          </span>
                          <span className="fs-xs fw-bold text-uppercase text-muted-2">
                            <bdi>
                              CS-210
                            </bdi>
                          </span>
                        </div>
                        <h5 className="fs-md fw-semibold text-title mb-2">
                          Sprint 2 Code Review
                        </h5>
                        <p className="d-flex flex-wrap align-items-center gap-3 fs-xs text-muted-2 mb-2">
                          <span className="d-inline-flex align-items-center gap-1">
                            <i className="icon-12" data-lucide="lock" aria-hidden="true" />
                            <bdi>
                              Closed 23 Aug
                            </bdi>
                          </span>
                          <span className="d-inline-flex align-items-center gap-1">
                            <i className="icon-12" data-lucide="inbox" aria-hidden="true" />
                            <bdi>
                              33 collected
                            </bdi>
                          </span>
                        </p>
                        <div className="d-flex align-items-center gap-2 mb-3">
                          <span
                            className="progress progress-sm flex-grow-1"
                            role="progressbar"
                            aria-label="Sprint 2 Code Review scripts marked"
                            aria-valuenow="73"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <span className="progress-bar bg-cat-cyan" style={{ width: "73%" }} />
                          </span>
                          <span className="fs-xs text-body-2 text-nowrap">
                            <bdi>
                              24 / 33 marked
                            </bdi>
                          </span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between gap-2 pt-2 border-t-soft">
                          <span className="avatar-stack">
                            <span className="avatar avatar-xs">
                              <img src="/assets/images/avatar-4.png" width="28" height="28" alt="" />
                            </span>
                            <span className="avatar avatar-xs bg-grad-2" aria-hidden="true">
                              HP
                            </span>
                          </span>
                          <span className="badge-soft tint-warning">
                            <bdi>
                              9 to mark
                            </bdi>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="scroll-col bg-soft rounded-3 p-3">
                    <div className="d-flex align-items-center justify-content-between gap-2 mb-2">
                      <h4 className="d-flex align-items-center gap-2 min-w-0 fs-lg fw-semibold text-title mb-0">
                        <span className="legend-dot bg-cat-emerald" aria-hidden="true" />
                        <span className="text-truncate">
                          Returned
                        </span>
                      </h4>
                      <span className="fs-5 fw-bold text-muted-2 lh-1">
                        <bdi>
                          22
                        </bdi>
                      </span>
                    </div>
                    <div
                      className="progress mb-3"
                      role="progressbar"
                      aria-label="Returned share of all assignments"
                      aria-valuenow="37"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-emerald" style={{ width: "37%" }} />
                    </div>
                    <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                      <li className="bg-plain border-theme rounded-3 p-3">
                        <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
                          <span className="badge-soft tint-emerald d-inline-flex align-items-center gap-1">
                            {" "}
                            <i className="icon-12" data-lucide="mic" aria-hidden="true" />
                            Oral
                            {" "}
                          </span>
                          <span className="fs-xs fw-bold text-uppercase text-muted-2">
                            <bdi>
                              SPA-110
                            </bdi>
                          </span>
                        </div>
                        <h5 className="fs-md fw-semibold text-title mb-2">
                          Oral Assessment Rubric
                        </h5>
                        <p className="d-flex flex-wrap align-items-center gap-3 fs-xs text-muted-2 mb-2">
                          <span className="d-inline-flex align-items-center gap-1">
                            <i className="icon-12" data-lucide="undo-2" aria-hidden="true" />
                            <bdi>
                              Returned 22 Aug
                            </bdi>
                          </span>
                          <span className="d-inline-flex align-items-center gap-1">
                            <i className="icon-12" data-lucide="circle-check" aria-hidden="true" />
                            <bdi>
                              47 graded
                            </bdi>
                          </span>
                        </p>
                        <div className="d-flex align-items-center gap-2 mb-3">
                          <span
                            className="progress progress-sm flex-grow-1"
                            role="progressbar"
                            aria-label="Oral Assessment Rubric class average"
                            aria-valuenow="88"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <span className="progress-bar bg-cat-emerald" style={{ width: "88%" }} />
                          </span>
                          <span className="fs-xs text-body-2 text-nowrap">
                            <bdi>
                              Avg 88
                            </bdi>
                          </span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between gap-2 pt-2 border-t-soft">
                          <span className="avatar-stack">
                            <span className="avatar avatar-xs">
                              <img src="/assets/images/avatar-4.png" width="28" height="28" alt="" />
                            </span>
                            <span className="avatar avatar-xs bg-grad-5" aria-hidden="true">
                              EM
                            </span>
                          </span>
                          <span className="badge-soft tint-success">
                            <bdi>
                              Feedback sent
                            </bdi>
                          </span>
                        </div>
                      </li>
                      <li className="bg-plain border-theme rounded-3 p-3">
                        <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
                          <span className="badge-soft tint-violet d-inline-flex align-items-center gap-1">
                            {" "}
                            <i className="icon-12" data-lucide="list-checks" aria-hidden="true" />
                            Quiz
                            {" "}
                          </span>
                          <span className="fs-xs fw-bold text-uppercase text-muted-2">
                            <bdi>
                              MTH-204
                            </bdi>
                          </span>
                        </div>
                        <h5 className="fs-md fw-semibold text-title mb-2">
                          Statistics Quiz 3
                        </h5>
                        <p className="d-flex flex-wrap align-items-center gap-3 fs-xs text-muted-2 mb-2">
                          <span className="d-inline-flex align-items-center gap-1">
                            <i className="icon-12" data-lucide="undo-2" aria-hidden="true" />
                            <bdi>
                              Returned 20 Aug
                            </bdi>
                          </span>
                          <span className="d-inline-flex align-items-center gap-1">
                            <i className="icon-12" data-lucide="circle-check" aria-hidden="true" />
                            <bdi>
                              55 graded
                            </bdi>
                          </span>
                        </p>
                        <div className="d-flex align-items-center gap-2 mb-3">
                          <span
                            className="progress progress-sm flex-grow-1"
                            role="progressbar"
                            aria-label="Statistics Quiz 3 class average"
                            aria-valuenow="76"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <span className="progress-bar bg-cat-violet" style={{ width: "76%" }} />
                          </span>
                          <span className="fs-xs text-body-2 text-nowrap">
                            <bdi>
                              Avg 76
                            </bdi>
                          </span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between gap-2 pt-2 border-t-soft">
                          <span className="avatar-stack">
                            <span className="avatar avatar-xs">
                              <img src="/assets/images/avatar-2.png" width="28" height="28" alt="" />
                            </span>
                            <span className="avatar avatar-xs bg-grad-3" aria-hidden="true">
                              MK
                            </span>
                          </span>
                          <span className="badge-soft tint-info">
                            <bdi>
                              Resit offered
                            </bdi>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Grading desk */}
          <div className="col-12 col-lg-6 col-xxl-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-start justify-content-between gap-2">
                  <div className="min-w-0">
                    <h3 className="fs-5 fw-bold text-title mb-1">
                      Grading Desk
                    </h3>
                    <p className="fs-md text-body-2 mb-0">
                      Marked inside the 48-hour promise
                    </p>
                  </div>
                  <span className="badge-soft tint-warning flex-shrink-0">
                    <bdi>
                      32 in queue
                    </bdi>
                  </span>
                </div>
                <div className="position-relative d-flex justify-content-center my-auto">
                  <div id="eduGradingTurnaroundChart" className="chart-area" />
                  <span className="chart-center mt-3">
                    <span className="d-block display-5 fw-bold text-title lh-1">
                      <bdi>
                        82%
                      </bdi>
                    </span>
                    <span className="d-block fs-md text-body-2 mt-1">
                      on time
                    </span>
                  </span>
                </div>
                <p className="fs-md fw-semibold text-title mb-2">
                  Marker workload
                </p>
                <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                  <li className="d-flex align-items-center gap-3">
                    <span className="avatar avatar-sm">
                      <img src="/assets/images/avatar-2.png" width="34" height="34" alt="" />
                    </span>
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-flex align-items-center justify-content-between gap-2 mb-1">
                        <span className="fs-md fw-medium text-title text-truncate">
                          Dr. Maya Chen
                        </span>
                        <span className="fs-xs text-body-2 text-nowrap flex-shrink-0">
                          <bdi>
                            19 scripts
                          </bdi>
                        </span>
                      </span>
                      {" "}
                      <span
                        className="progress progress-sm"
                        role="progressbar"
                        aria-label="Dr. Maya Chen marking load"
                        aria-valuenow="72"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <span className="progress-bar bg-cat-violet" style={{ width: "72%" }} />
                      </span>
                      {" "}
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3">
                    <span className="avatar avatar-sm">
                      <img src="/assets/images/avatar-1.png" width="34" height="34" alt="" />
                    </span>
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-flex align-items-center justify-content-between gap-2 mb-1">
                        <span className="fs-md fw-medium text-title text-truncate">
                          Jordan Davis
                        </span>
                        <span className="fs-xs text-body-2 text-nowrap flex-shrink-0">
                          <bdi>
                            9 scripts
                          </bdi>
                        </span>
                      </span>
                      {" "}
                      <span
                        className="progress progress-sm"
                        role="progressbar"
                        aria-label="Jordan Davis marking load"
                        aria-valuenow="41"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <span className="progress-bar bg-cat-amber" style={{ width: "41%" }} />
                      </span>
                      {" "}
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3">
                    <span className="avatar avatar-sm">
                      <img src="/assets/images/avatar-3.png" width="34" height="34" alt="" />
                    </span>
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-flex align-items-center justify-content-between gap-2 mb-1">
                        <span className="fs-md fw-medium text-title text-truncate">
                          Priya Nair
                        </span>
                        <span className="fs-xs text-body-2 text-nowrap flex-shrink-0">
                          <bdi>
                            4 scripts
                          </bdi>
                        </span>
                      </span>
                      {" "}
                      <span
                        className="progress progress-sm"
                        role="progressbar"
                        aria-label="Priya Nair marking load"
                        aria-valuenow="18"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <span className="progress-bar bg-cat-emerald" style={{ width: "18%" }} />
                      </span>
                      {" "}
                    </span>
                  </li>
                </ul>
                <button
                  type="button"
                  className="btn btn-primary w-100 d-inline-flex align-items-center justify-content-center gap-2 mt-3"
                >
                  <i className="icon-18" data-lucide="pen-line" aria-hidden="true" />
                  Start grading
                </button>
              </div>
            </div>
          </div>
          {/* Submission activity */}
          <div className="col-12 col-lg-6 col-xxl-4" data-filter-scope="">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    Submission Activity
                  </h3>
                  <div
                    className="nav nav-pills gap-1 p-1 rounded-pill bg-soft"
                    role="group"
                    aria-label="Filter submissions"
                  >
                    <button type="button" className="nav-link active fw-semibold" data-filter="all" aria-pressed="true">
                      All
                    </button>
                    <button type="button" className="nav-link fw-semibold" data-filter="late" aria-pressed="false">
                      Late
                    </button>
                    <button type="button" className="nav-link fw-semibold" data-filter="graded" aria-pressed="false">
                      Graded
                    </button>
                  </div>
                </div>
                <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                  <li
                    className="d-flex align-items-center gap-3 p-2 rounded-3 bg-soft border-soft"
                    data-filter-tags="graded"
                  >
                    <span className="avatar avatar-sm">
                      <img src="/assets/images/avatar-1.png" width="34" height="34" alt="" />
                    </span>
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-block fs-md fw-semibold text-title text-truncate">
                        Ethan Brooks
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        <bdi>
                          Midterm Problem Set · ML-301
                        </bdi>
                      </span>
                      {" "}
                    </span>
                    <span className="text-end flex-shrink-0">
                      {" "}
                      <span className="badge-soft tint-success">
                        <bdi>
                          94
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 mt-1">
                        <bdi>
                          12 min ago
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </li>
                  <li
                    className="d-flex align-items-center gap-3 p-2 rounded-3 bg-soft border-soft"
                    data-filter-tags="review"
                  >
                    <span className="avatar avatar-sm">
                      <img src="/assets/images/avatar-4.png" width="34" height="34" alt="" />
                    </span>
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-block fs-md fw-semibold text-title text-truncate">
                        Amara Okonkwo
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        <bdi>
                          Usability Study Deck · UXR-140
                        </bdi>
                      </span>
                      {" "}
                    </span>
                    <span className="text-end flex-shrink-0">
                      {" "}
                      <span className="badge-soft tint-info">
                        In review
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 mt-1">
                        <bdi>
                          38 min ago
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </li>
                  <li
                    className="d-flex align-items-center gap-3 p-2 rounded-3 bg-soft border-soft"
                    data-filter-tags="late"
                  >
                    <span className="avatar avatar-sm bg-grad-3" aria-hidden="true">
                      LZ
                    </span>
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-block fs-md fw-semibold text-title text-truncate">
                        Liam Zhang
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        <bdi>
                          Reaction Mechanisms Report · CHM-220
                        </bdi>
                      </span>
                      {" "}
                    </span>
                    <span className="text-end flex-shrink-0">
                      {" "}
                      <span className="badge-soft tint-danger">
                        Late
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 mt-1">
                        <bdi>
                          1 hr ago
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </li>
                  <li
                    className="d-flex align-items-center gap-3 p-2 rounded-3 bg-soft border-soft"
                    data-filter-tags="graded"
                  >
                    <span className="avatar avatar-sm">
                      <img src="/assets/images/avatar-3.png" width="34" height="34" alt="" />
                    </span>
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-block fs-md fw-semibold text-title text-truncate">
                        Sofia Marino
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        <bdi>
                          Sprint 2 Code Review · CS-210
                        </bdi>
                      </span>
                      {" "}
                    </span>
                    <span className="text-end flex-shrink-0">
                      {" "}
                      <span className="badge-soft tint-success">
                        <bdi>
                          88
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 mt-1">
                        <bdi>
                          2 hrs ago
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </li>
                  <li
                    className="d-flex align-items-center gap-3 p-2 rounded-3 bg-soft border-soft"
                    data-filter-tags="late"
                  >
                    <span className="avatar avatar-sm bg-grad-5" aria-hidden="true">
                      NA
                    </span>
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-block fs-md fw-semibold text-title text-truncate">
                        Noah Adeyemi
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        <bdi>
                          Reaction Mechanisms Report · CHM-220
                        </bdi>
                      </span>
                      {" "}
                    </span>
                    <span className="text-end flex-shrink-0">
                      {" "}
                      <span className="badge-soft tint-danger">
                        Late
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 mt-1">
                        <bdi>
                          3 hrs ago
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </li>
                  <li
                    className="d-flex align-items-center gap-3 p-2 rounded-3 bg-soft border-soft"
                    data-filter-tags="graded"
                  >
                    <span className="avatar avatar-sm bg-grad-2" aria-hidden="true">
                      HP
                    </span>
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-block fs-md fw-semibold text-title text-truncate">
                        Hana Petrov
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate">
                        <bdi>
                          Statistics Quiz 3 · MTH-204
                        </bdi>
                      </span>
                      {" "}
                    </span>
                    <span className="text-end flex-shrink-0">
                      {" "}
                      <span className="badge-soft tint-warning">
                        <bdi>
                          76
                        </bdi>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 mt-1">
                        <bdi>
                          5 hrs ago
                        </bdi>
                      </span>
                      {" "}
                    </span>
                  </li>
                </ul>
                <a
                  href="#"
                  className="d-flex align-items-center justify-content-center gap-1 fs-md fw-medium text-brand mt-auto pt-3"
                >
                  Open submission log
                  <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
          {/* My tasks */}
          <div className="col-12 col-lg-6 col-xxl-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    My Tasks
                  </h3>
                  <span className="badge-soft tint-brand">
                    Today
                  </span>
                </div>
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mt-3 mb-2">
                  <span className="fs-md text-body-2">
                    <bdi>
                      2 of 6 done
                    </bdi>
                  </span>
                  <span className="fs-md fw-semibold text-title">
                    <bdi>
                      33%
                    </bdi>
                  </span>
                </div>
                <div
                  className="progress mb-3"
                  role="progressbar"
                  aria-label="Personal task completion"
                  aria-valuenow="33"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="progress-bar bg-cat-emerald" style={{ width: "33%" }} />
                </div>
                <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                  <li className="check-strike d-flex align-items-start gap-2 p-2 rounded-3 bg-soft border-soft">
                    <input className="form-check-input flex-shrink-0 mt-1" type="checkbox" id="eduTaskModerate" />
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <label
                        className="form-check-label d-block fs-md fw-semibold text-title"
                        htmlFor="eduTaskModerate"
                      >
                        Moderate CHM-220 grade boundaries
                      </label>
                      {" "}
                      <span className="d-flex flex-wrap align-items-center gap-2 mt-1">
                        <span className="badge-soft tint-danger">
                          High
                        </span>
                        <span className="fs-xs text-muted-2">
                          <bdi>
                            Due today
                          </bdi>
                        </span>
                      </span>
                      {" "}
                    </span>
                  </li>
                  <li className="check-strike d-flex align-items-start gap-2 p-2 rounded-3 bg-soft border-soft">
                    <input className="form-check-input flex-shrink-0 mt-1" type="checkbox" id="eduTaskMarkScripts" />
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <label
                        className="form-check-label d-block fs-md fw-semibold text-title"
                        htmlFor="eduTaskMarkScripts"
                      >
                        Mark the 23 outstanding chemistry scripts
                      </label>
                      {" "}
                      <span className="d-flex flex-wrap align-items-center gap-2 mt-1">
                        <span className="badge-soft tint-danger">
                          High
                        </span>
                        <span className="fs-xs text-muted-2">
                          <bdi>
                            Due tomorrow
                          </bdi>
                        </span>
                      </span>
                      {" "}
                    </span>
                  </li>
                  <li className="check-strike d-flex align-items-start gap-2 p-2 rounded-3 bg-soft border-soft">
                    <input className="form-check-input flex-shrink-0 mt-1" type="checkbox" id="eduTaskLabBrief" />
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <label
                        className="form-check-label d-block fs-md fw-semibold text-title"
                        htmlFor="eduTaskLabBrief"
                      >
                        Finish the PHY-105 lab brief
                      </label>
                      {" "}
                      <span className="d-flex flex-wrap align-items-center gap-2 mt-1">
                        <span className="badge-soft tint-warning">
                          Medium
                        </span>
                        <span className="fs-xs text-muted-2">
                          <bdi>
                            Due 29 Aug
                          </bdi>
                        </span>
                      </span>
                      {" "}
                    </span>
                  </li>
                  <li className="check-strike d-flex align-items-start gap-2 p-2 rounded-3 bg-soft border-soft">
                    <input className="form-check-input flex-shrink-0 mt-1" type="checkbox" id="eduTaskBookSlots" />
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <label
                        className="form-check-label d-block fs-md fw-semibold text-title"
                        htmlFor="eduTaskBookSlots"
                      >
                        Book the remaining oral assessment slots
                      </label>
                      {" "}
                      <span className="d-flex flex-wrap align-items-center gap-2 mt-1">
                        <span className="badge-soft tint-info">
                          Low
                        </span>
                        <span className="fs-xs text-muted-2">
                          <bdi>
                            Due 30 Aug
                          </bdi>
                        </span>
                      </span>
                      {" "}
                    </span>
                  </li>
                  <li className="check-strike d-flex align-items-start gap-2 p-2 rounded-3 bg-soft border-soft">
                    <input
                      className="form-check-input flex-shrink-0 mt-1"
                      type="checkbox"
                      id="eduTaskPublishQuiz"
                      defaultChecked
                    />
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <label
                        className="form-check-label d-block fs-md fw-semibold text-title"
                        htmlFor="eduTaskPublishQuiz"
                      >
                        Publish the MTH-204 quiz results
                      </label>
                      {" "}
                      <span className="d-flex flex-wrap align-items-center gap-2 mt-1">
                        <span className="badge-soft tint-success">
                          Done
                        </span>
                        <span className="fs-xs text-muted-2">
                          <bdi>
                            24 Aug
                          </bdi>
                        </span>
                      </span>
                      {" "}
                    </span>
                  </li>
                  <li className="check-strike d-flex align-items-start gap-2 p-2 rounded-3 bg-soft border-soft">
                    <input
                      className="form-check-input flex-shrink-0 mt-1"
                      type="checkbox"
                      id="eduTaskReminders"
                      defaultChecked
                    />
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <label
                        className="form-check-label d-block fs-md fw-semibold text-title"
                        htmlFor="eduTaskReminders"
                      >
                        Send the late-submission reminders
                      </label>
                      {" "}
                      <span className="d-flex flex-wrap align-items-center gap-2 mt-1">
                        <span className="badge-soft tint-success">
                          Done
                        </span>
                        <span className="fs-xs text-muted-2">
                          <bdi>
                            23 Aug
                          </bdi>
                        </span>
                      </span>
                      {" "}
                    </span>
                  </li>
                </ul>
                <button
                  type="button"
                  className="btn btn-outline-soft w-100 d-inline-flex align-items-center justify-content-center gap-2 mt-3"
                >
                  <i className="icon-18" data-lucide="plus" aria-hidden="true" />
                  Add task
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Calendar & events ===== */}
      <section className="mb-4" aria-labelledby="edu-calendar-title">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
          <div className="min-w-0">
            <h2 id="edu-calendar-title" className="fs-4 fw-bold text-title mb-1">
              Events
            </h2>
            <p className="fs-md text-body-2 mb-0">
              Every date in the academic diary beyond the weekly timetable.
            </p>
          </div>
          <div className="d-flex flex-wrap align-items-center gap-2">
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#eduAddEventModal"
              className="btn btn-accent d-inline-flex flex-nowrap align-items-center justify-content-center gap-2 text-nowrap"
            >
              <i className="icon-20" data-lucide="calendar-plus" aria-hidden="true" />
              New Event
            </button>
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-outline-soft btn-18 rounded-circle"
                id="eduCalendarMenu"
                data-bs-toggle="dropdown"
                data-bs-offset="0,8"
                aria-expanded="false"
                aria-label="Calendar options"
              >
                <i data-lucide="ellipsis-vertical" />
              </button>
              {" "}
              <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="eduCalendarMenu">
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="rss" />
                    Subscribe to feed
                  </button>
                </li>
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="download" />
                    Export term calendar
                  </button>
                </li>
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="printer" />
                    Print month
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row g-3">
          {/* Events list */}
          <div className="col-12" data-events-scope="">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
                  <div className="min-w-0">
                    <h3 className="fs-5 fw-bold text-title mb-1">
                      Events List
                    </h3>
                    <p className="fs-md text-body-2 mb-0">
                      <bdi>
                        <span data-events-count="">
                          19
                        </span>
                        {" "}
                        events
                      </bdi>
                      {" "}
                      in the academic diary
                    </p>
                  </div>
                  <div className="d-flex flex-wrap flex-lg-nowrap align-items-center gap-2">
                    <div className="header-search min-w-0" role="search">
                      <i data-lucide="search" />
                      {" "}
                      <input
                        type="search"
                        id="eduEventSearch"
                        name="event-q"
                        placeholder="Search events..."
                        aria-label="Search events"
                        data-events-search=""
                      />
                    </div>
                    <div className="dropdown flex-grow-1 flex-sm-grow-0">
                      <button
                        type="button"
                        className="btn btn-outline-soft w-100 d-inline-flex flex-nowrap align-items-center justify-content-center gap-2 text-nowrap"
                        id="eduEventSort"
                        data-bs-toggle="dropdown"
                        data-bs-offset="0,8"
                        aria-expanded="false"
                      >
                        <i className="icon-18" data-lucide="arrow-down-up" aria-hidden="true" />
                        Sort
                        {" "}
                        <i className="dd-caret icon-18" data-lucide="chevron-down" aria-hidden="true" />
                      </button>
                      {" "}
                      <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="eduEventSort">
                        <li>
                          <button type="button" className="dropdown-item active" data-events-sort="soonest">
                            Date — soonest first
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-events-sort="latest">
                            Date — latest first
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-events-sort="title">
                            Title — A to Z
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="nav nav-pills flex-wrap gap-1 p-1 mb-3 rounded-4 bg-soft"
                  role="group"
                  aria-label="Filter events by type"
                >
                  <button
                    type="button"
                    className="nav-link active fw-semibold"
                    data-events-filter="all"
                    aria-pressed="true"
                  >
                    All events
                  </button>
                  <button
                    type="button"
                    className="nav-link d-inline-flex align-items-center gap-2 fw-semibold"
                    data-events-filter="lecture"
                    aria-pressed="false"
                  >
                    <span className="legend-dot legend-dot-sm bg-cat-violet" aria-hidden="true" />
                    Lectures
                  </button>
                  <button
                    type="button"
                    className="nav-link d-inline-flex align-items-center gap-2 fw-semibold"
                    data-events-filter="deadline"
                    aria-pressed="false"
                  >
                    <span className="legend-dot legend-dot-sm bg-cat-rose" aria-hidden="true" />
                    Deadlines
                  </button>
                  <button
                    type="button"
                    className="nav-link d-inline-flex align-items-center gap-2 fw-semibold"
                    data-events-filter="workshop"
                    aria-pressed="false"
                  >
                    <span className="legend-dot legend-dot-sm bg-cat-cyan" aria-hidden="true" />
                    Workshops
                  </button>
                  <button
                    type="button"
                    className="nav-link d-inline-flex align-items-center gap-2 fw-semibold"
                    data-events-filter="meeting"
                    aria-pressed="false"
                  >
                    <span className="legend-dot legend-dot-sm bg-cat-blue" aria-hidden="true" />
                    Meetings
                  </button>
                  <button
                    type="button"
                    className="nav-link d-inline-flex align-items-center gap-2 fw-semibold"
                    data-events-filter="campus"
                    aria-pressed="false"
                  >
                    <span className="legend-dot legend-dot-sm bg-cat-emerald" aria-hidden="true" />
                    Campus life
                  </button>
                  <button
                    type="button"
                    className="nav-link d-inline-flex align-items-center gap-2 fw-semibold"
                    data-events-filter="holiday"
                    aria-pressed="false"
                  >
                    <span className="legend-dot legend-dot-sm bg-cat-slate" aria-hidden="true" />
                    Holidays
                  </button>
                </div>
                <div className="table-responsive">
                  <table className="table table-hover align-middle mb-0">
                    <caption className="visually-hidden">
                      Academic diary events with type, date, time and capacity
                    </caption>
                    <thead>
                      <tr>
                        <th scope="col">
                          Event
                        </th>
                        <th scope="col">
                          Type
                        </th>
                        <th scope="col">
                          Date
                        </th>
                        <th scope="col">
                          Time
                        </th>
                        <th scope="col">
                          Seats
                        </th>
                        <th scope="col">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    {/* Every event in the academic diary is written here. The list
                       controls only reorder these rows and retire the ones a filter
                       or a search excludes (.d-none) - no row is built in script.
                       The machine-readable values each control needs travel on the
                       row itself, so what a row shows and what it is sorted by can
                       never drift apart. */}
                    <tbody data-events-body="">
                      <tr
                        data-event-row=""
                        data-event-id="edu-1"
                        data-event-category="deadline"
                        data-event-start="2026-08-03"
                        data-event-notes=""
                      >
                        <td>
                          <span className="d-inline-flex align-items-center gap-2">
                            <span
                              className="icon-box icon-box-sm border-current tint-rose"
                              data-event-icon=""
                              aria-hidden="true"
                            >
                              <i data-lucide="alarm-clock" />
                            </span>
                            <span className="d-flex flex-column min-w-0">
                              <span className="fs-md fw-semibold text-title text-nowrap" data-event-title="">
                                Add/Drop opens
                              </span>
                              <span className="fs-xs text-muted-2 text-nowrap" data-event-venue="">
                                Registry
                              </span>
                            </span>
                          </span>
                        </td>
                        <td>
                          <span className="badge-soft text-nowrap tint-rose" data-event-type="">
                            Deadline
                          </span>
                        </td>
                        <td>
                          <bdi className="fs-md text-body-2 text-nowrap" data-event-date="">
                            Mon 3 Aug
                          </bdi>
                        </td>
                        <td>
                          <bdi className="fs-md text-body-2 text-nowrap d-none" data-event-time="" />
                          {" "}
                          <span className="badge-soft tint-slate text-nowrap" data-event-allday="">
                            All day
                          </span>
                        </td>
                        <td>
                          <bdi className="fs-md text-body-2" data-event-seats-out="">
                            —
                          </bdi>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-1">
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle"
                              data-events-edit=""
                              aria-label="Edit Add/Drop opens"
                            >
                              <i data-lucide="pencil" aria-hidden="true" />
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle hover-danger"
                              data-events-remove=""
                              aria-label="Delete Add/Drop opens"
                            >
                              <i data-lucide="trash-2" aria-hidden="true" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr
                        data-event-row=""
                        data-event-id="edu-2"
                        data-event-category="meeting"
                        data-event-start="2026-08-06T14:00:00"
                        data-event-end="2026-08-06T15:30:00"
                        data-event-seats="40"
                        data-event-notes=""
                      >
                        <td>
                          <span className="d-inline-flex align-items-center gap-2">
                            <span
                              className="icon-box icon-box-sm border-current tint-blue"
                              data-event-icon=""
                              aria-hidden="true"
                            >
                              <i data-lucide="users" />
                            </span>
                            <span className="d-flex flex-column min-w-0">
                              <span className="fs-md fw-semibold text-title text-nowrap" data-event-title="">
                                Faculty Senate
                              </span>
                              <span className="fs-xs text-muted-2 text-nowrap" data-event-venue="">
                                Senate Room
                              </span>
                            </span>
                          </span>
                        </td>
                        <td>
                          <span className="badge-soft text-nowrap tint-blue" data-event-type="">
                            Meeting
                          </span>
                        </td>
                        <td>
                          <bdi className="fs-md text-body-2 text-nowrap" data-event-date="">
                            Thu 6 Aug
                          </bdi>
                        </td>
                        <td>
                          <bdi className="fs-md text-body-2 text-nowrap" data-event-time="">
                            14:00 – 15:30
                          </bdi>
                          {" "}
                          <span className="badge-soft tint-slate text-nowrap d-none" data-event-allday="">
                            All day
                          </span>
                        </td>
                        <td>
                          <bdi className="fs-md text-body-2" data-event-seats-out="">
                            40
                          </bdi>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-1">
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle"
                              data-events-edit=""
                              aria-label="Edit Faculty Senate"
                            >
                              <i data-lucide="pencil" aria-hidden="true" />
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle hover-danger"
                              data-events-remove=""
                              aria-label="Delete Faculty Senate"
                            >
                              <i data-lucide="trash-2" aria-hidden="true" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr
                        data-event-row=""
                        data-event-id="edu-3"
                        data-event-category="workshop"
                        data-event-start="2026-08-07T09:30:00"
                        data-event-end="2026-08-07T12:00:00"
                        data-event-seats="60"
                        data-event-notes=""
                      >
                        <td>
                          <span className="d-inline-flex align-items-center gap-2">
                            <span
                              className="icon-box icon-box-sm border-current tint-cyan"
                              data-event-icon=""
                              aria-hidden="true"
                            >
                              <i data-lucide="flask-conical" />
                            </span>
                            <span className="d-flex flex-column min-w-0">
                              <span className="fs-md fw-semibold text-title text-nowrap" data-event-title="">
                                New Staff Induction
                              </span>
                              <span className="fs-xs text-muted-2 text-nowrap" data-event-venue="">
                                Faculty Hall A
                              </span>
                            </span>
                          </span>
                        </td>
                        <td>
                          <span className="badge-soft text-nowrap tint-cyan" data-event-type="">
                            Workshop
                          </span>
                        </td>
                        <td>
                          <bdi className="fs-md text-body-2 text-nowrap" data-event-date="">
                            Fri 7 Aug
                          </bdi>
                        </td>
                        <td>
                          <bdi className="fs-md text-body-2 text-nowrap" data-event-time="">
                            09:30 – 12:00
                          </bdi>
                          {" "}
                          <span className="badge-soft tint-slate text-nowrap d-none" data-event-allday="">
                            All day
                          </span>
                        </td>
                        <td>
                          <bdi className="fs-md text-body-2" data-event-seats-out="">
                            60
                          </bdi>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-1">
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle"
                              data-events-edit=""
                              aria-label="Edit New Staff Induction"
                            >
                              <i data-lucide="pencil" aria-hidden="true" />
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle hover-danger"
                              data-events-remove=""
                              aria-label="Delete New Staff Induction"
                            >
                              <i data-lucide="trash-2" aria-hidden="true" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr
                        data-event-row=""
                        data-event-id="edu-4"
                        data-event-category="campus"
                        data-event-start="2026-08-10"
                        data-event-end="2026-08-15"
                        data-event-seats="900"
                        data-event-notes=""
                      >
                        <td>
                          <span className="d-inline-flex align-items-center gap-2">
                            <span
                              className="icon-box icon-box-sm border-current tint-emerald"
                              data-event-icon=""
                              aria-hidden="true"
                            >
                              <i data-lucide="party-popper" />
                            </span>
                            <span className="d-flex flex-column min-w-0">
                              <span className="fs-md fw-semibold text-title text-nowrap" data-event-title="">
                                Orientation Week
                              </span>
                              <span className="fs-xs text-muted-2 text-nowrap" data-event-venue="">
                                Main Campus
                              </span>
                            </span>
                          </span>
                        </td>
                        <td>
                          <span className="badge-soft text-nowrap tint-emerald" data-event-type="">
                            Campus life
                          </span>
                        </td>
                        <td>
                          <bdi className="fs-md text-body-2 text-nowrap" data-event-date="">
                            Mon 10 Aug
                          </bdi>
                        </td>
                        <td>
                          <bdi className="fs-md text-body-2 text-nowrap d-none" data-event-time="" />
                          {" "}
                          <span className="badge-soft tint-slate text-nowrap" data-event-allday="">
                            All day
                          </span>
                        </td>
                        <td>
                          <bdi className="fs-md text-body-2" data-event-seats-out="">
                            900
                          </bdi>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-1">
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle"
                              data-events-edit=""
                              aria-label="Edit Orientation Week"
                            >
                              <i data-lucide="pencil" aria-hidden="true" />
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle hover-danger"
                              data-events-remove=""
                              aria-label="Delete Orientation Week"
                            >
                              <i data-lucide="trash-2" aria-hidden="true" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr
                        data-event-row=""
                        data-event-id="edu-5"
                        data-event-category="lecture"
                        data-event-start="2026-08-12T16:00:00"
                        data-event-end="2026-08-12T17:30:00"
                        data-event-seats="180"
                        data-event-notes=""
                      >
                        <td>
                          <span className="d-inline-flex align-items-center gap-2">
                            <span
                              className="icon-box icon-box-sm border-current tint-violet"
                              data-event-icon=""
                              aria-hidden="true"
                            >
                              <i data-lucide="graduation-cap" />
                            </span>
                            <span className="d-flex flex-column min-w-0">
                              <span className="fs-md fw-semibold text-title text-nowrap" data-event-title="">
                                Guest Lecture
                              </span>
                              <span className="fs-xs text-muted-2 text-nowrap" data-event-venue="">
                                Faculty Hall A
                              </span>
                            </span>
                          </span>
                        </td>
                        <td>
                          <span className="badge-soft text-nowrap tint-violet" data-event-type="">
                            Lecture
                          </span>
                        </td>
                        <td>
                          <bdi className="fs-md text-body-2 text-nowrap" data-event-date="">
                            Wed 12 Aug
                          </bdi>
                        </td>
                        <td>
                          <bdi className="fs-md text-body-2 text-nowrap" data-event-time="">
                            16:00 – 17:30
                          </bdi>
                          {" "}
                          <span className="badge-soft tint-slate text-nowrap d-none" data-event-allday="">
                            All day
                          </span>
                        </td>
                        <td>
                          <bdi className="fs-md text-body-2" data-event-seats-out="">
                            180
                          </bdi>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-1">
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle"
                              data-events-edit=""
                              aria-label="Edit Guest Lecture"
                            >
                              <i data-lucide="pencil" aria-hidden="true" />
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle hover-danger"
                              data-events-remove=""
                              aria-label="Delete Guest Lecture"
                            >
                              <i data-lucide="trash-2" aria-hidden="true" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr
                        data-event-row=""
                        data-event-id="edu-6"
                        data-event-category="workshop"
                        data-event-start="2026-08-13T11:00:00"
                        data-event-end="2026-08-13T12:00:00"
                        data-event-seats="45"
                        data-event-notes=""
                      >
                        <td>
                          <span className="d-inline-flex align-items-center gap-2">
                            <span
                              className="icon-box icon-box-sm border-current tint-cyan"
                              data-event-icon=""
                              aria-hidden="true"
                            >
                              <i data-lucide="flask-conical" />
                            </span>
                            <span className="d-flex flex-column min-w-0">
                              <span className="fs-md fw-semibold text-title text-nowrap" data-event-title="">
                                Library Induction
                              </span>
                              <span className="fs-xs text-muted-2 text-nowrap" data-event-venue="">
                                Central Library
                              </span>
                            </span>
                          </span>
                        </td>
                        <td>
                          <span className="badge-soft text-nowrap tint-cyan" data-event-type="">
                            Workshop
                          </span>
                        </td>
                        <td>
                          <bdi className="fs-md text-body-2 text-nowrap" data-event-date="">
                            Thu 13 Aug
                          </bdi>
                        </td>
                        <td>
                          <bdi className="fs-md text-body-2 text-nowrap" data-event-time="">
                            11:00 – 12:00
                          </bdi>
                          {" "}
                          <span className="badge-soft tint-slate text-nowrap d-none" data-event-allday="">
                            All day
                          </span>
                        </td>
                        <td>
                          <bdi className="fs-md text-body-2" data-event-seats-out="">
                            45
                          </bdi>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-1">
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle"
                              data-events-edit=""
                              aria-label="Edit Library Induction"
                            >
                              <i data-lucide="pencil" aria-hidden="true" />
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle hover-danger"
                              data-events-remove=""
                              aria-label="Delete Library Induction"
                            >
                              <i data-lucide="trash-2" aria-hidden="true" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr
                        data-event-row=""
                        data-event-id="edu-7"
                        data-event-category="deadline"
                        data-event-start="2026-08-14"
                        data-event-notes=""
                      >
                        <td>
                          <span className="d-inline-flex align-items-center gap-2">
                            <span
                              className="icon-box icon-box-sm border-current tint-rose"
                              data-event-icon=""
                              aria-hidden="true"
                            >
                              <i data-lucide="alarm-clock" />
                            </span>
                            <span className="d-flex flex-column min-w-0">
                              <span className="fs-md fw-semibold text-title text-nowrap" data-event-title="">
                                Add/Drop closes
                              </span>
                              <span className="fs-xs text-muted-2 text-nowrap" data-event-venue="">
                                Registry
                              </span>
                            </span>
                          </span>
                        </td>
                        <td>
                          <span className="badge-soft text-nowrap tint-rose" data-event-type="">
                            Deadline
                          </span>
                        </td>
                        <td>
                          <bdi className="fs-md text-body-2 text-nowrap" data-event-date="">
                            Fri 14 Aug
                          </bdi>
                        </td>
                        <td>
                          <bdi className="fs-md text-body-2 text-nowrap d-none" data-event-time="" />
                          {" "}
                          <span className="badge-soft tint-slate text-nowrap" data-event-allday="">
                            All day
                          </span>
                        </td>
                        <td>
                          <bdi className="fs-md text-body-2" data-event-seats-out="">
                            —
                          </bdi>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-1">
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle"
                              data-events-edit=""
                              aria-label="Edit Add/Drop closes"
                            >
                              <i data-lucide="pencil" aria-hidden="true" />
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle hover-danger"
                              data-events-remove=""
                              aria-label="Delete Add/Drop closes"
                            >
                              <i data-lucide="trash-2" aria-hidden="true" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr
                        data-event-row=""
                        data-event-id="edu-8"
                        data-event-category="workshop"
                        data-event-start="2026-08-18T10:00:00"
                        data-event-end="2026-08-18T12:00:00"
                        data-event-seats="30"
                        data-event-notes=""
                      >
                        <td>
                          <span className="d-inline-flex align-items-center gap-2">
                            <span
                              className="icon-box icon-box-sm border-current tint-cyan"
                              data-event-icon=""
                              aria-hidden="true"
                            >
                              <i data-lucide="flask-conical" />
                            </span>
                            <span className="d-flex flex-column min-w-0">
                              <span className="fs-md fw-semibold text-title text-nowrap" data-event-title="">
                                Lab Safety Workshop
                              </span>
                              <span className="fs-xs text-muted-2 text-nowrap" data-event-venue="">
                                Lab C-11
                              </span>
                            </span>
                          </span>
                        </td>
                        <td>
                          <span className="badge-soft text-nowrap tint-cyan" data-event-type="">
                            Workshop
                          </span>
                        </td>
                        <td>
                          <bdi className="fs-md text-body-2 text-nowrap" data-event-date="">
                            Tue 18 Aug
                          </bdi>
                        </td>
                        <td>
                          <bdi className="fs-md text-body-2 text-nowrap" data-event-time="">
                            10:00 – 12:00
                          </bdi>
                          {" "}
                          <span className="badge-soft tint-slate text-nowrap d-none" data-event-allday="">
                            All day
                          </span>
                        </td>
                        <td>
                          <bdi className="fs-md text-body-2" data-event-seats-out="">
                            30
                          </bdi>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-1">
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle"
                              data-events-edit=""
                              aria-label="Edit Lab Safety Workshop"
                            >
                              <i data-lucide="pencil" aria-hidden="true" />
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle hover-danger"
                              data-events-remove=""
                              aria-label="Delete Lab Safety Workshop"
                            >
                              <i data-lucide="trash-2" aria-hidden="true" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr
                        data-event-row=""
                        data-event-id="edu-9"
                        data-event-category="meeting"
                        data-event-start="2026-08-19T13:00:00"
                        data-event-end="2026-08-19T15:00:00"
                        data-event-seats="24"
                        data-event-notes=""
                      >
                        <td>
                          <span className="d-inline-flex align-items-center gap-2">
                            <span
                              className="icon-box icon-box-sm border-current tint-blue"
                              data-event-icon=""
                              aria-hidden="true"
                            >
                              <i data-lucide="users" />
                            </span>
                            <span className="d-flex flex-column min-w-0">
                              <span className="fs-md fw-semibold text-title text-nowrap" data-event-title="">
                                Curriculum Review
                              </span>
                              <span className="fs-xs text-muted-2 text-nowrap" data-event-venue="">
                                Senate Room
                              </span>
                            </span>
                          </span>
                        </td>
                        <td>
                          <span className="badge-soft text-nowrap tint-blue" data-event-type="">
                            Meeting
                          </span>
                        </td>
                        <td>
                          <bdi className="fs-md text-body-2 text-nowrap" data-event-date="">
                            Wed 19 Aug
                          </bdi>
                        </td>
                        <td>
                          <bdi className="fs-md text-body-2 text-nowrap" data-event-time="">
                            13:00 – 15:00
                          </bdi>
                          {" "}
                          <span className="badge-soft tint-slate text-nowrap d-none" data-event-allday="">
                            All day
                          </span>
                        </td>
                        <td>
                          <bdi className="fs-md text-body-2" data-event-seats-out="">
                            24
                          </bdi>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-1">
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle"
                              data-events-edit=""
                              aria-label="Edit Curriculum Review"
                            >
                              <i data-lucide="pencil" aria-hidden="true" />
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle hover-danger"
                              data-events-remove=""
                              aria-label="Delete Curriculum Review"
                            >
                              <i data-lucide="trash-2" aria-hidden="true" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr
                        data-event-row=""
                        data-event-id="edu-10"
                        data-event-category="meeting"
                        data-event-start="2026-08-20T09:00:00"
                        data-event-end="2026-08-20T11:00:00"
                        data-event-seats="16"
                        data-event-notes=""
                      >
                        <td>
                          <span className="d-inline-flex align-items-center gap-2">
                            <span
                              className="icon-box icon-box-sm border-current tint-blue"
                              data-event-icon=""
                              aria-hidden="true"
                            >
                              <i data-lucide="users" />
                            </span>
                            <span className="d-flex flex-column min-w-0">
                              <span className="fs-md fw-semibold text-title text-nowrap" data-event-title="">
                                Scholarship Panel
                              </span>
                              <span className="fs-xs text-muted-2 text-nowrap" data-event-venue="">
                                Room B-204
                              </span>
                            </span>
                          </span>
                        </td>
                        <td>
                          <span className="badge-soft text-nowrap tint-blue" data-event-type="">
                            Meeting
                          </span>
                        </td>
                        <td>
                          <bdi className="fs-md text-body-2 text-nowrap" data-event-date="">
                            Thu 20 Aug
                          </bdi>
                        </td>
                        <td>
                          <bdi className="fs-md text-body-2 text-nowrap" data-event-time="">
                            09:00 – 11:00
                          </bdi>
                          {" "}
                          <span className="badge-soft tint-slate text-nowrap d-none" data-event-allday="">
                            All day
                          </span>
                        </td>
                        <td>
                          <bdi className="fs-md text-body-2" data-event-seats-out="">
                            16
                          </bdi>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-1">
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle"
                              data-events-edit=""
                              aria-label="Edit Scholarship Panel"
                            >
                              <i data-lucide="pencil" aria-hidden="true" />
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle hover-danger"
                              data-events-remove=""
                              aria-label="Delete Scholarship Panel"
                            >
                              <i data-lucide="trash-2" aria-hidden="true" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr
                        data-event-row=""
                        data-event-id="edu-11"
                        data-event-category="campus"
                        data-event-start="2026-08-21"
                        data-event-seats="1200"
                        data-event-notes=""
                      >
                        <td>
                          <span className="d-inline-flex align-items-center gap-2">
                            <span
                              className="icon-box icon-box-sm border-current tint-emerald"
                              data-event-icon=""
                              aria-hidden="true"
                            >
                              <i data-lucide="party-popper" />
                            </span>
                            <span className="d-flex flex-column min-w-0">
                              <span className="fs-md fw-semibold text-title text-nowrap" data-event-title="">
                                Sports Day
                              </span>
                              <span className="fs-xs text-muted-2 text-nowrap" data-event-venue="">
                                Sports Ground
                              </span>
                            </span>
                          </span>
                        </td>
                        <td>
                          <span className="badge-soft text-nowrap tint-emerald" data-event-type="">
                            Campus life
                          </span>
                        </td>
                        <td>
                          <bdi className="fs-md text-body-2 text-nowrap" data-event-date="">
                            Fri 21 Aug
                          </bdi>
                        </td>
                        <td>
                          <bdi className="fs-md text-body-2 text-nowrap d-none" data-event-time="" />
                          {" "}
                          <span className="badge-soft tint-slate text-nowrap" data-event-allday="">
                            All day
                          </span>
                        </td>
                        <td>
                          <bdi className="fs-md text-body-2" data-event-seats-out="">
                            1200
                          </bdi>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-1">
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle"
                              data-events-edit=""
                              aria-label="Edit Sports Day"
                            >
                              <i data-lucide="pencil" aria-hidden="true" />
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle hover-danger"
                              data-events-remove=""
                              aria-label="Delete Sports Day"
                            >
                              <i data-lucide="trash-2" aria-hidden="true" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr
                        data-event-row=""
                        data-event-id="edu-12"
                        data-event-category="meeting"
                        data-event-start="2026-08-24T09:00:00"
                        data-event-end="2026-08-24T09:30:00"
                        data-event-seats="18"
                        data-event-notes=""
                      >
                        <td>
                          <span className="d-inline-flex align-items-center gap-2">
                            <span
                              className="icon-box icon-box-sm border-current tint-blue"
                              data-event-icon=""
                              aria-hidden="true"
                            >
                              <i data-lucide="users" />
                            </span>
                            <span className="d-flex flex-column min-w-0">
                              <span className="fs-md fw-semibold text-title text-nowrap" data-event-title="">
                                Dept. Heads Standup
                              </span>
                              <span className="fs-xs text-muted-2 text-nowrap" data-event-venue="">
                                Room B-204
                              </span>
                            </span>
                          </span>
                        </td>
                        <td>
                          <span className="badge-soft text-nowrap tint-blue" data-event-type="">
                            Meeting
                          </span>
                        </td>
                        <td>
                          <bdi className="fs-md text-body-2 text-nowrap" data-event-date="">
                            Mon 24 Aug
                          </bdi>
                        </td>
                        <td>
                          <bdi className="fs-md text-body-2 text-nowrap" data-event-time="">
                            09:00 – 09:30
                          </bdi>
                          {" "}
                          <span className="badge-soft tint-slate text-nowrap d-none" data-event-allday="">
                            All day
                          </span>
                        </td>
                        <td>
                          <bdi className="fs-md text-body-2" data-event-seats-out="">
                            18
                          </bdi>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-1">
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle"
                              data-events-edit=""
                              aria-label="Edit Dept. Heads Standup"
                            >
                              <i data-lucide="pencil" aria-hidden="true" />
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle hover-danger"
                              data-events-remove=""
                              aria-label="Delete Dept. Heads Standup"
                            >
                              <i data-lucide="trash-2" aria-hidden="true" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr
                        data-event-row=""
                        data-event-id="edu-13"
                        data-event-category="deadline"
                        data-event-start="2026-08-25T11:00:00"
                        data-event-end="2026-08-25T13:00:00"
                        data-event-seats="12"
                        data-event-notes=""
                      >
                        <td>
                          <span className="d-inline-flex align-items-center gap-2">
                            <span
                              className="icon-box icon-box-sm border-current tint-rose"
                              data-event-icon=""
                              aria-hidden="true"
                            >
                              <i data-lucide="alarm-clock" />
                            </span>
                            <span className="d-flex flex-column min-w-0">
                              <span className="fs-md fw-semibold text-title text-nowrap" data-event-title="">
                                Grade Moderation
                              </span>
                              <span className="fs-xs text-muted-2 text-nowrap" data-event-venue="">
                                Registry
                              </span>
                            </span>
                          </span>
                        </td>
                        <td>
                          <span className="badge-soft text-nowrap tint-rose" data-event-type="">
                            Deadline
                          </span>
                        </td>
                        <td>
                          <bdi className="fs-md text-body-2 text-nowrap" data-event-date="">
                            Tue 25 Aug
                          </bdi>
                        </td>
                        <td>
                          <bdi className="fs-md text-body-2 text-nowrap" data-event-time="">
                            11:00 – 13:00
                          </bdi>
                          {" "}
                          <span className="badge-soft tint-slate text-nowrap d-none" data-event-allday="">
                            All day
                          </span>
                        </td>
                        <td>
                          <bdi className="fs-md text-body-2" data-event-seats-out="">
                            12
                          </bdi>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-1">
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle"
                              data-events-edit=""
                              aria-label="Edit Grade Moderation"
                            >
                              <i data-lucide="pencil" aria-hidden="true" />
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle hover-danger"
                              data-events-remove=""
                              aria-label="Delete Grade Moderation"
                            >
                              <i data-lucide="trash-2" aria-hidden="true" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr
                        data-event-row=""
                        data-event-id="edu-14"
                        data-event-category="lecture"
                        data-event-start="2026-08-25T15:00:00"
                        data-event-end="2026-08-25T16:00:00"
                        data-event-seats="120"
                        data-event-notes=""
                      >
                        <td>
                          <span className="d-inline-flex align-items-center gap-2">
                            <span
                              className="icon-box icon-box-sm border-current tint-violet"
                              data-event-icon=""
                              aria-hidden="true"
                            >
                              <i data-lucide="graduation-cap" />
                            </span>
                            <span className="d-flex flex-column min-w-0">
                              <span className="fs-md fw-semibold text-title text-nowrap" data-event-title="">
                                Open Day Briefing
                              </span>
                              <span className="fs-xs text-muted-2 text-nowrap" data-event-venue="">
                                Faculty Hall A
                              </span>
                            </span>
                          </span>
                        </td>
                        <td>
                          <span className="badge-soft text-nowrap tint-violet" data-event-type="">
                            Lecture
                          </span>
                        </td>
                        <td>
                          <bdi className="fs-md text-body-2 text-nowrap" data-event-date="">
                            Tue 25 Aug
                          </bdi>
                        </td>
                        <td>
                          <bdi className="fs-md text-body-2 text-nowrap" data-event-time="">
                            15:00 – 16:00
                          </bdi>
                          {" "}
                          <span className="badge-soft tint-slate text-nowrap d-none" data-event-allday="">
                            All day
                          </span>
                        </td>
                        <td>
                          <bdi className="fs-md text-body-2" data-event-seats-out="">
                            120
                          </bdi>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-1">
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle"
                              data-events-edit=""
                              aria-label="Edit Open Day Briefing"
                            >
                              <i data-lucide="pencil" aria-hidden="true" />
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle hover-danger"
                              data-events-remove=""
                              aria-label="Delete Open Day Briefing"
                            >
                              <i data-lucide="trash-2" aria-hidden="true" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr
                        data-event-row=""
                        data-event-id="edu-15"
                        data-event-category="deadline"
                        data-event-start="2026-08-26T09:30:00"
                        data-event-end="2026-08-26T10:00:00"
                        data-event-notes=""
                      >
                        <td>
                          <span className="d-inline-flex align-items-center gap-2">
                            <span
                              className="icon-box icon-box-sm border-current tint-rose"
                              data-event-icon=""
                              aria-hidden="true"
                            >
                              <i data-lucide="alarm-clock" />
                            </span>
                            <span className="d-flex flex-column min-w-0">
                              <span className="fs-md fw-semibold text-title text-nowrap" data-event-title="">
                                Midterm Timetable
                              </span>
                              <span className="fs-xs text-muted-2 text-nowrap" data-event-venue="">
                                Registry
                              </span>
                            </span>
                          </span>
                        </td>
                        <td>
                          <span className="badge-soft text-nowrap tint-rose" data-event-type="">
                            Deadline
                          </span>
                        </td>
                        <td>
                          <bdi className="fs-md text-body-2 text-nowrap" data-event-date="">
                            Wed 26 Aug
                          </bdi>
                        </td>
                        <td>
                          <bdi className="fs-md text-body-2 text-nowrap" data-event-time="">
                            09:30 – 10:00
                          </bdi>
                          {" "}
                          <span className="badge-soft tint-slate text-nowrap d-none" data-event-allday="">
                            All day
                          </span>
                        </td>
                        <td>
                          <bdi className="fs-md text-body-2" data-event-seats-out="">
                            —
                          </bdi>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-1">
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle"
                              data-events-edit=""
                              aria-label="Edit Midterm Timetable"
                            >
                              <i data-lucide="pencil" aria-hidden="true" />
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle hover-danger"
                              data-events-remove=""
                              aria-label="Delete Midterm Timetable"
                            >
                              <i data-lucide="trash-2" aria-hidden="true" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr
                        data-event-row=""
                        data-event-id="edu-16"
                        data-event-category="campus"
                        data-event-start="2026-08-27T17:00:00"
                        data-event-end="2026-08-27T19:00:00"
                        data-event-seats="150"
                        data-event-notes=""
                      >
                        <td>
                          <span className="d-inline-flex align-items-center gap-2">
                            <span
                              className="icon-box icon-box-sm border-current tint-emerald"
                              data-event-icon=""
                              aria-hidden="true"
                            >
                              <i data-lucide="party-popper" />
                            </span>
                            <span className="d-flex flex-column min-w-0">
                              <span className="fs-md fw-semibold text-title text-nowrap" data-event-title="">
                                Alumni Mentor Meet
                              </span>
                              <span className="fs-xs text-muted-2 text-nowrap" data-event-venue="">
                                Student Union
                              </span>
                            </span>
                          </span>
                        </td>
                        <td>
                          <span className="badge-soft text-nowrap tint-emerald" data-event-type="">
                            Campus life
                          </span>
                        </td>
                        <td>
                          <bdi className="fs-md text-body-2 text-nowrap" data-event-date="">
                            Thu 27 Aug
                          </bdi>
                        </td>
                        <td>
                          <bdi className="fs-md text-body-2 text-nowrap" data-event-time="">
                            17:00 – 19:00
                          </bdi>
                          {" "}
                          <span className="badge-soft tint-slate text-nowrap d-none" data-event-allday="">
                            All day
                          </span>
                        </td>
                        <td>
                          <bdi className="fs-md text-body-2" data-event-seats-out="">
                            150
                          </bdi>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-1">
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle"
                              data-events-edit=""
                              aria-label="Edit Alumni Mentor Meet"
                            >
                              <i data-lucide="pencil" aria-hidden="true" />
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle hover-danger"
                              data-events-remove=""
                              aria-label="Delete Alumni Mentor Meet"
                            >
                              <i data-lucide="trash-2" aria-hidden="true" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr
                        data-event-row=""
                        data-event-id="edu-17"
                        data-event-category="campus"
                        data-event-start="2026-08-28T10:00:00"
                        data-event-end="2026-08-28T16:00:00"
                        data-event-seats="1500"
                        data-event-notes=""
                      >
                        <td>
                          <span className="d-inline-flex align-items-center gap-2">
                            <span
                              className="icon-box icon-box-sm border-current tint-emerald"
                              data-event-icon=""
                              aria-hidden="true"
                            >
                              <i data-lucide="party-popper" />
                            </span>
                            <span className="d-flex flex-column min-w-0">
                              <span className="fs-md fw-semibold text-title text-nowrap" data-event-title="">
                                Autumn Open Day
                              </span>
                              <span className="fs-xs text-muted-2 text-nowrap" data-event-venue="">
                                Main Campus
                              </span>
                            </span>
                          </span>
                        </td>
                        <td>
                          <span className="badge-soft text-nowrap tint-emerald" data-event-type="">
                            Campus life
                          </span>
                        </td>
                        <td>
                          <bdi className="fs-md text-body-2 text-nowrap" data-event-date="">
                            Fri 28 Aug
                          </bdi>
                        </td>
                        <td>
                          <bdi className="fs-md text-body-2 text-nowrap" data-event-time="">
                            10:00 – 16:00
                          </bdi>
                          {" "}
                          <span className="badge-soft tint-slate text-nowrap d-none" data-event-allday="">
                            All day
                          </span>
                        </td>
                        <td>
                          <bdi className="fs-md text-body-2" data-event-seats-out="">
                            1500
                          </bdi>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-1">
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle"
                              data-events-edit=""
                              aria-label="Edit Autumn Open Day"
                            >
                              <i data-lucide="pencil" aria-hidden="true" />
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle hover-danger"
                              data-events-remove=""
                              aria-label="Delete Autumn Open Day"
                            >
                              <i data-lucide="trash-2" aria-hidden="true" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr
                        data-event-row=""
                        data-event-id="edu-18"
                        data-event-category="campus"
                        data-event-start="2026-08-29T14:00:00"
                        data-event-end="2026-08-29T16:00:00"
                        data-event-seats="80"
                        data-event-notes=""
                      >
                        <td>
                          <span className="d-inline-flex align-items-center gap-2">
                            <span
                              className="icon-box icon-box-sm border-current tint-emerald"
                              data-event-icon=""
                              aria-hidden="true"
                            >
                              <i data-lucide="party-popper" />
                            </span>
                            <span className="d-flex flex-column min-w-0">
                              <span className="fs-md fw-semibold text-title text-nowrap" data-event-title="">
                                Robotics Club Demo
                              </span>
                              <span className="fs-xs text-muted-2 text-nowrap" data-event-venue="">
                                Lab C-11
                              </span>
                            </span>
                          </span>
                        </td>
                        <td>
                          <span className="badge-soft text-nowrap tint-emerald" data-event-type="">
                            Campus life
                          </span>
                        </td>
                        <td>
                          <bdi className="fs-md text-body-2 text-nowrap" data-event-date="">
                            Sat 29 Aug
                          </bdi>
                        </td>
                        <td>
                          <bdi className="fs-md text-body-2 text-nowrap" data-event-time="">
                            14:00 – 16:00
                          </bdi>
                          {" "}
                          <span className="badge-soft tint-slate text-nowrap d-none" data-event-allday="">
                            All day
                          </span>
                        </td>
                        <td>
                          <bdi className="fs-md text-body-2" data-event-seats-out="">
                            80
                          </bdi>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-1">
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle"
                              data-events-edit=""
                              aria-label="Edit Robotics Club Demo"
                            >
                              <i data-lucide="pencil" aria-hidden="true" />
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle hover-danger"
                              data-events-remove=""
                              aria-label="Delete Robotics Club Demo"
                            >
                              <i data-lucide="trash-2" aria-hidden="true" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr
                        data-event-row=""
                        data-event-id="edu-19"
                        data-event-category="holiday"
                        data-event-start="2026-08-31"
                        data-event-notes=""
                      >
                        <td>
                          <span className="d-inline-flex align-items-center gap-2">
                            <span
                              className="icon-box icon-box-sm border-current tint-slate"
                              data-event-icon=""
                              aria-hidden="true"
                            >
                              <i data-lucide="palmtree" />
                            </span>
                            <span className="d-flex flex-column min-w-0">
                              <span className="fs-md fw-semibold text-title text-nowrap" data-event-title="">
                                Bank Holiday
                              </span>
                              <span className="fs-xs text-muted-2 text-nowrap" data-event-venue="">
                                Campus closed
                              </span>
                            </span>
                          </span>
                        </td>
                        <td>
                          <span className="badge-soft text-nowrap tint-slate" data-event-type="">
                            Holiday
                          </span>
                        </td>
                        <td>
                          <bdi className="fs-md text-body-2 text-nowrap" data-event-date="">
                            Mon 31 Aug
                          </bdi>
                        </td>
                        <td>
                          <bdi className="fs-md text-body-2 text-nowrap d-none" data-event-time="" />
                          {" "}
                          <span className="badge-soft tint-slate text-nowrap" data-event-allday="">
                            All day
                          </span>
                        </td>
                        <td>
                          <bdi className="fs-md text-body-2" data-event-seats-out="">
                            —
                          </bdi>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-1">
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle"
                              data-events-edit=""
                              aria-label="Edit Bank Holiday"
                            >
                              <i data-lucide="pencil" aria-hidden="true" />
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle hover-danger"
                              data-events-remove=""
                              aria-label="Delete Bank Holiday"
                            >
                              <i data-lucide="trash-2" aria-hidden="true" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="d-none text-center fs-md text-body-2 py-4 mb-0" data-events-empty="" role="status">
                  No events match this filter.
                </p>
              </div>
            </div>
          </div>
          {/* Upcoming events */}
          <div className="col-12 col-xl-6 col-xxl-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    What’s Next
                  </h3>
                  <span className="badge-soft tint-brand">
                    <bdi>
                      Next 7 days
                    </bdi>
                  </span>
                </div>
                <ol className="list-unstyled d-flex flex-column gap-2 mb-0">
                  <li className="d-flex align-items-start gap-3 p-2 rounded-3 bg-soft border-soft">
                    <span className="rail-dot bg-cat-violet mt-1" aria-hidden="true" />
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-flex flex-wrap align-items-center gap-2 mb-1">
                        <span className="fs-md fw-semibold text-title">
                          Open Day Briefing
                        </span>
                        <span className="badge-soft tint-violet">
                          Lecture
                        </span>
                      </span>
                      {" "}
                      <span className="d-flex flex-wrap align-items-center gap-3 fs-xs text-muted-2">
                        <span className="d-inline-flex align-items-center gap-1">
                          <i className="icon-12" data-lucide="clock" aria-hidden="true" />
                          <bdi>
                            Today · 15:00
                          </bdi>
                        </span>
                        <span className="d-inline-flex align-items-center gap-1">
                          <i className="icon-12" data-lucide="map-pin" aria-hidden="true" />
                          <bdi>
                            Faculty Hall A
                          </bdi>
                        </span>
                      </span>
                      {" "}
                      <span className="d-flex align-items-center gap-2 mt-2">
                        <span className="avatar-stack">
                          <span className="avatar avatar-xs">
                            <img src="/assets/images/avatar-2.png" width="28" height="28" alt="" />
                          </span>
                          <span className="avatar avatar-xs bg-grad-3" aria-hidden="true">
                            AR
                          </span>
                          <span className="avatar avatar-xs bg-grad-5" aria-hidden="true">
                            +92
                          </span>
                        </span>
                        <span className="fs-xs text-body-2">
                          <bdi>
                            94 of 120 attending
                          </bdi>
                        </span>
                      </span>
                      {" "}
                    </span>
                  </li>
                  <li className="d-flex align-items-start gap-3 p-2 rounded-3 bg-soft border-soft">
                    <span className="rail-dot bg-cat-emerald mt-1" aria-hidden="true" />
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-flex flex-wrap align-items-center gap-2 mb-1">
                        <span className="fs-md fw-semibold text-title">
                          Autumn Open Day
                        </span>
                        <span className="badge-soft tint-emerald">
                          Campus life
                        </span>
                        <span className="badge-soft tint-warning d-inline-flex align-items-center gap-1">
                          {" "}
                          <i className="icon-12" data-lucide="sparkles" aria-hidden="true" />
                          Flagship
                          {" "}
                        </span>
                      </span>
                      {" "}
                      <span className="d-flex flex-wrap align-items-center gap-3 fs-xs text-muted-2">
                        <span className="d-inline-flex align-items-center gap-1">
                          <i className="icon-12" data-lucide="clock" aria-hidden="true" />
                          <bdi>
                            Fri 28 Aug · 10:00
                          </bdi>
                        </span>
                        <span className="d-inline-flex align-items-center gap-1">
                          <i className="icon-12" data-lucide="map-pin" aria-hidden="true" />
                          <bdi>
                            Main Campus
                          </bdi>
                        </span>
                      </span>
                      {" "}
                      <span className="d-flex align-items-center gap-2 mt-2">
                        <span className="avatar-stack">
                          <span className="avatar avatar-xs">
                            <img src="/assets/images/avatar-3.png" width="28" height="28" alt="" />
                          </span>
                          <span className="avatar avatar-xs">
                            <img src="/assets/images/avatar-2.png" width="28" height="28" alt="" />
                          </span>
                          <span className="avatar avatar-xs bg-grad-4" aria-hidden="true">
                            +1k
                          </span>
                        </span>
                        <span className="fs-xs text-body-2">
                          <bdi>
                            1,240 of 1,500 registered
                          </bdi>
                        </span>
                      </span>
                      {" "}
                    </span>
                  </li>
                  <li className="d-flex align-items-start gap-3 p-2 rounded-3 bg-soft border-soft">
                    <span className="rail-dot bg-cat-emerald mt-1" aria-hidden="true" />
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-flex flex-wrap align-items-center gap-2 mb-1">
                        <span className="fs-md fw-semibold text-title">
                          Robotics Club Demo
                        </span>
                        <span className="badge-soft tint-emerald">
                          Campus life
                        </span>
                      </span>
                      {" "}
                      <span className="d-flex flex-wrap align-items-center gap-3 fs-xs text-muted-2">
                        <span className="d-inline-flex align-items-center gap-1">
                          <i className="icon-12" data-lucide="clock" aria-hidden="true" />
                          <bdi>
                            Sat 29 Aug · 14:00
                          </bdi>
                        </span>
                        <span className="d-inline-flex align-items-center gap-1">
                          <i className="icon-12" data-lucide="map-pin" aria-hidden="true" />
                          <bdi>
                            Lab C-11
                          </bdi>
                        </span>
                      </span>
                      {" "}
                      <span className="d-flex align-items-center gap-2 mt-2">
                        <span className="avatar-stack">
                          <span className="avatar avatar-xs">
                            <img src="/assets/images/avatar-1.png" width="28" height="28" alt="" />
                          </span>
                          <span className="avatar avatar-xs bg-grad-5" aria-hidden="true">
                            MK
                          </span>
                          <span className="avatar avatar-xs bg-grad-1" aria-hidden="true">
                            +60
                          </span>
                        </span>
                        <span className="fs-xs text-body-2">
                          <bdi>
                            62 of 80 registered
                          </bdi>
                        </span>
                      </span>
                      {" "}
                    </span>
                  </li>
                  <li className="d-flex align-items-start gap-3 p-2 rounded-3 bg-soft border-soft">
                    <span className="rail-dot bg-cat-slate mt-1" aria-hidden="true" />
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-flex flex-wrap align-items-center gap-2 mb-1">
                        <span className="fs-md fw-semibold text-title">
                          Bank Holiday
                        </span>
                        <span className="badge-soft tint-slate">
                          Holiday
                        </span>
                      </span>
                      {" "}
                      <span className="d-flex flex-wrap align-items-center gap-3 fs-xs text-muted-2">
                        <span className="d-inline-flex align-items-center gap-1">
                          <i className="icon-12" data-lucide="clock" aria-hidden="true" />
                          <bdi>
                            Mon 31 Aug · All day
                          </bdi>
                        </span>
                        <span className="d-inline-flex align-items-center gap-1">
                          <i className="icon-12" data-lucide="map-pin" aria-hidden="true" />
                          <bdi>
                            Campus closed
                          </bdi>
                        </span>
                      </span>
                      {" "}
                    </span>
                  </li>
                </ol>
                <a
                  href="#"
                  className="d-flex align-items-center justify-content-center gap-1 fs-md fw-medium text-brand mt-auto pt-3"
                >
                  Open full calendar
                  <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
          {/* Event spotlight */}
          <div className="col-12 col-xl-6 col-xxl-4">
            <div className="on-dark bg-grad-theme rounded-4 h-100 d-flex flex-column gap-3 p-3 p-md-4">
              <div>
                <span className="badge-soft tint-cyan border-current d-inline-flex align-items-center gap-2">
                  {" "}
                  <i className="icon-12" data-lucide="sparkles" aria-hidden="true" />
                  Flagship event
                  {" "}
                </span>
                <h3 className="fs-2 fw-bold text-title lh-1 mt-3 mb-2">
                  Autumn Open Day
                </h3>
                <p className="d-flex flex-wrap align-items-center gap-3 fs-md text-primary mb-0">
                  <span className="d-inline-flex align-items-center gap-1">
                    <i className="icon-16" data-lucide="calendar-days" aria-hidden="true" />
                    <bdi>
                      Fri 28 Aug · 10:00–16:00
                    </bdi>
                  </span>
                  <span className="d-inline-flex align-items-center gap-1">
                    <i className="icon-16" data-lucide="map-pin" aria-hidden="true" />
                    Main Campus
                  </span>
                </p>
              </div>
              <ul className="list-unstyled row row-cols-3 g-2 mb-0">
                <li className="col">
                  <div className="bg-soft border-theme rounded-3 h-100 p-2 text-center">
                    <span className="d-block fs-3 fw-bold text-title lh-1">
                      <bdi>
                        03
                      </bdi>
                    </span>
                    {" "}
                    <span className="d-block fs-xs text-primary mt-1">
                      Days
                    </span>
                  </div>
                </li>
                <li className="col">
                  <div className="bg-soft border-theme rounded-3 h-100 p-2 text-center">
                    <span className="d-block fs-3 fw-bold text-title lh-1">
                      <bdi>
                        14
                      </bdi>
                    </span>
                    {" "}
                    <span className="d-block fs-xs text-primary mt-1">
                      Hours
                    </span>
                  </div>
                </li>
                <li className="col">
                  <div className="bg-soft border-theme rounded-3 h-100 p-2 text-center">
                    <span className="d-block fs-3 fw-bold text-title lh-1">
                      <bdi>
                        22
                      </bdi>
                    </span>
                    {" "}
                    <span className="d-block fs-xs text-primary mt-1">
                      Minutes
                    </span>
                  </div>
                </li>
              </ul>
              <div>
                <p className="fs-xs fw-semibold text-uppercase text-primary mb-2">
                  Programme
                </p>
                <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                  <li className="d-flex align-items-center gap-3 bg-soft border-theme rounded-3 p-2">
                    <span className="fs-md fw-semibold text-title text-nowrap">
                      <bdi>
                        10:00
                      </bdi>
                    </span>
                    <span className="flex-grow-1 min-w-0 fs-md text-primary text-truncate">
                      {"Campus tours & welcome"}
                    </span>
                    <span className="badge-soft tint-emerald flex-shrink-0">
                      <bdi>
                        6 groups
                      </bdi>
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3 bg-soft border-theme rounded-3 p-2">
                    <span className="fs-md fw-semibold text-title text-nowrap">
                      <bdi>
                        12:30
                      </bdi>
                    </span>
                    <span className="flex-grow-1 min-w-0 fs-md text-primary text-truncate">
                      Faculty subject talks
                    </span>
                    <span className="badge-soft tint-violet flex-shrink-0">
                      <bdi>
                        9 halls
                      </bdi>
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3 bg-soft border-theme rounded-3 p-2">
                    <span className="fs-md fw-semibold text-title text-nowrap">
                      <bdi>
                        14:00
                      </bdi>
                    </span>
                    <span className="flex-grow-1 min-w-0 fs-md text-primary text-truncate">
                      {"Open labs & studios"}
                    </span>
                    <span className="badge-soft tint-cyan flex-shrink-0">
                      <bdi>
                        14 rooms
                      </bdi>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-auto">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
                  <span className="fs-md fw-medium text-title">
                    Seat registrations
                  </span>
                  <span className="fs-md text-primary">
                    <bdi>
                      1,240 of 1,500
                    </bdi>
                  </span>
                </div>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Autumn Open Day seat registrations"
                  aria-valuenow="83"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="progress-bar bg-cat-emerald" style={{ width: "83%" }} />
                </div>
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mt-3">
                  <span className="d-flex align-items-center gap-2">
                    <span className="avatar-stack">
                      <span className="avatar avatar-xs">
                        <img src="/assets/images/avatar-3.png" width="28" height="28" alt="" />
                      </span>
                      <span className="avatar avatar-xs">
                        <img src="/assets/images/avatar-1.png" width="28" height="28" alt="" />
                      </span>
                      <span className="avatar avatar-xs bg-grad-4" aria-hidden="true">
                        TN
                      </span>
                    </span>
                    <span className="fs-xs text-primary">
                      <bdi>
                        18 hosts
                      </bdi>
                    </span>
                  </span>
                  <button
                    type="button"
                    className="btn btn-accent btn-sm d-inline-flex align-items-center gap-2 text-nowrap"
                  >
                    <i className="icon-16" data-lucide="ticket" aria-hidden="true" />
                    Manage seats
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Term milestones */}
          <div className="col-12 col-xxl-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <div className="min-w-0">
                    <h3 className="fs-5 fw-bold text-title mb-1">
                      Term Milestones
                    </h3>
                    <p className="fs-md text-body-2 mb-0">
                      The dates that shape Fall Semester 2026
                    </p>
                  </div>
                  <span className="badge-soft tint-brand">
                    <bdi>
                      Week 6 of 14
                    </bdi>
                  </span>
                </div>
                <ul className="list-unstyled row row-cols-2 row-cols-md-3 row-cols-xxl-2 g-3 mb-0">
                  <li className="col">
                    <div className="h-100 d-flex flex-column gap-2 p-3 rounded-3 bg-soft border-soft">
                      <span className="icon-box icon-box-sm tint-emerald border-current" aria-hidden="true">
                        <i data-lucide="flag" />
                      </span>
                      <h4 className="fs-md fw-semibold text-title mb-0">
                        Orientation
                      </h4>
                      <span className="fs-xs text-muted-2">
                        <bdi>
                          10 – 14 Aug
                        </bdi>
                      </span>
                      <span className="badge-soft tint-success d-inline-flex align-self-start align-items-center gap-1 mt-auto text-nowrap">
                        {" "}
                        <i className="icon-12" data-lucide="circle-check" aria-hidden="true" />
                        Complete
                        {" "}
                      </span>
                    </div>
                  </li>
                  <li className="col">
                    <div className="h-100 d-flex flex-column gap-2 p-3 rounded-3 bg-soft border-soft">
                      <span className="icon-box icon-box-sm tint-emerald border-current" aria-hidden="true">
                        <i data-lucide="list-checks" />
                      </span>
                      <h4 className="fs-md fw-semibold text-title mb-0">
                        Add / Drop
                      </h4>
                      <span className="fs-xs text-muted-2">
                        <bdi>
                          3 – 14 Aug
                        </bdi>
                      </span>
                      <span className="badge-soft tint-success d-inline-flex align-self-start align-items-center gap-1 mt-auto text-nowrap">
                        {" "}
                        <i className="icon-12" data-lucide="circle-check" aria-hidden="true" />
                        Complete
                        {" "}
                      </span>
                    </div>
                  </li>
                  <li className="col">
                    <div className="h-100 d-flex flex-column gap-2 p-3 rounded-3 tint-violet border-current">
                      <span className="icon-box icon-box-sm bg-cat-violet text-white" aria-hidden="true">
                        <i data-lucide="sparkles" />
                      </span>
                      <h4 className="fs-md fw-semibold text-title mb-0">
                        Open Day
                      </h4>
                      <span className="fs-xs">
                        <bdi>
                          28 Aug
                        </bdi>
                      </span>
                      <span className="badge-soft tint-violet d-inline-flex align-self-start align-items-center gap-1 mt-auto text-nowrap">
                        {" "}
                        <i className="icon-12" data-lucide="clock" aria-hidden="true" />
                        <bdi>
                          In 3 days
                        </bdi>
                        {" "}
                      </span>
                    </div>
                  </li>
                  <li className="col">
                    <div className="h-100 d-flex flex-column gap-2 p-3 rounded-3 bg-soft border-soft">
                      <span className="icon-box icon-box-sm tint-amber border-current" aria-hidden="true">
                        <i data-lucide="pencil-line" />
                      </span>
                      <h4 className="fs-md fw-semibold text-title mb-0">
                        Midterms
                      </h4>
                      <span className="fs-xs text-muted-2">
                        <bdi>
                          7 – 11 Sep
                        </bdi>
                      </span>
                      <span className="badge-soft tint-amber d-inline-flex align-self-start align-items-center gap-1 mt-auto text-nowrap">
                        {" "}
                        <bdi>
                          Week 8
                        </bdi>
                        {" "}
                      </span>
                    </div>
                  </li>
                  <li className="col">
                    <div className="h-100 d-flex flex-column gap-2 p-3 rounded-3 bg-soft border-soft">
                      <span className="icon-box icon-box-sm tint-blue border-current" aria-hidden="true">
                        <i data-lucide="book-open" />
                      </span>
                      <h4 className="fs-md fw-semibold text-title mb-0">
                        Reading Week
                      </h4>
                      <span className="fs-xs text-muted-2">
                        <bdi>
                          12 – 16 Oct
                        </bdi>
                      </span>
                      <span className="badge-soft tint-blue d-inline-flex align-self-start align-items-center gap-1 mt-auto text-nowrap">
                        {" "}
                        <bdi>
                          Week 12
                        </bdi>
                        {" "}
                      </span>
                    </div>
                  </li>
                  <li className="col">
                    <div className="h-100 d-flex flex-column gap-2 p-3 rounded-3 bg-soft border-soft">
                      <span className="icon-box icon-box-sm tint-rose border-current" aria-hidden="true">
                        <i data-lucide="award" />
                      </span>
                      <h4 className="fs-md fw-semibold text-title mb-0">
                        Finals
                      </h4>
                      <span className="fs-xs text-muted-2">
                        <bdi>
                          30 Nov – 11 Dec
                        </bdi>
                      </span>
                      <span className="badge-soft tint-rose d-inline-flex align-self-start align-items-center gap-1 mt-auto text-nowrap">
                        {" "}
                        <bdi>
                          Week 14
                        </bdi>
                        {" "}
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Recommended courses ===== */}
      <section className="mb-4" aria-labelledby="edu-recommended-title">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
          <div className="min-w-0">
            <h2 id="edu-recommended-title" className="fs-4 fw-bold text-title mb-1">
              Recommended Courses
            </h2>
            <p className="fs-md text-body-2 mb-0">
              Matched to your goals, your grades and what your cohort studies next.
            </p>
          </div>
          <div className="d-flex flex-wrap align-items-center gap-2">
            <span className="badge-soft tint-brand border-current d-inline-flex align-self-stretch align-items-center gap-2 px-3">
              {" "}
              <i className="icon-12" data-lucide="sparkles" aria-hidden="true" />
              <bdi>
                Refreshed today
              </bdi>
              {" "}
            </span>
            <button
              type="button"
              className="btn btn-accent d-inline-flex flex-nowrap align-items-center justify-content-center gap-2 text-nowrap"
            >
              <i className="icon-20" data-lucide="library-big" aria-hidden="true" />
              Browse Catalogue
            </button>
          </div>
        </div>
        <div className="row g-3">
          {/* Picked for you */}
          <div className="col-12 col-xl-7 col-xxl-6" data-filter-scope="">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <div className="min-w-0">
                    <h3 className="fs-5 fw-bold text-title mb-1">
                      Picked For You
                    </h3>
                    <p className="fs-md text-body-2 mb-0">
                      <bdi>
                        4 matches from 348 catalogue courses
                      </bdi>
                    </p>
                  </div>
                  <div
                    className="nav nav-pills gap-1 p-1 rounded-pill bg-soft"
                    role="group"
                    aria-label="Filter recommendations by subject"
                  >
                    <button type="button" className="nav-link active fw-semibold" data-filter="all" aria-pressed="true">
                      All
                    </button>
                    <button type="button" className="nav-link fw-semibold" data-filter="stem" aria-pressed="false">
                      STEM
                    </button>
                    <button type="button" className="nav-link fw-semibold" data-filter="design" aria-pressed="false">
                      Design
                    </button>
                    <button type="button" className="nav-link fw-semibold" data-filter="languages" aria-pressed="false">
                      Languages
                    </button>
                  </div>
                </div>
                <ul className="list-unstyled row row-cols-1 row-cols-md-2 g-3 mb-0">
                  <li className="col" data-filter-tags="stem">
                    <div className="h-100 d-flex flex-column gap-3 p-3 rounded-3 bg-soft border-soft">
                      <div className="d-flex align-items-start gap-3">
                        <span
                          className="icon-box icon-box-lg tint-violet border-current flex-shrink-0"
                          aria-hidden="true"
                        >
                          <i data-lucide="brain-circuit" />
                        </span>
                        <div className="flex-grow-1 min-w-0">
                          <span className="d-flex flex-wrap align-items-center gap-2 mb-1">
                            <span className="badge-soft tint-violet">
                              STEM
                            </span>
                            <span className="badge-soft tint-brand d-inline-flex align-items-center gap-1">
                              {" "}
                              <i className="icon-12" data-lucide="sparkles" aria-hidden="true" />
                              <bdi>
                                96% match
                              </bdi>
                              {" "}
                            </span>
                          </span>
                          <h4 className="fs-6 fw-semibold text-title mb-0">
                            Deep Learning Specialisation
                          </h4>
                          <span className="d-block fs-xs fw-bold text-uppercase text-muted-2">
                            <bdi>
                              ML-410
                            </bdi>
                          </span>
                        </div>
                      </div>
                      <p className="d-flex align-items-start gap-2 fs-xs text-body-2 mb-0">
                        <i
                          className="icon-12 flex-shrink-0 mt-1 text-brand"
                          data-lucide="waypoints"
                          aria-hidden="true"
                        />
                        <bdi>
                          Follows Machine Learning Foundations — 75% done
                        </bdi>
                      </p>
                      <ul className="list-unstyled d-flex flex-wrap align-items-center gap-3 fs-xs text-muted-2 mb-0">
                        <li className="d-inline-flex align-items-center gap-1">
                          <i className="icon-12 icon-fill text-cat-amber" data-lucide="star" aria-hidden="true" />
                          <bdi>
                            <span className="fw-semibold text-title">
                              4.9
                            </span>
                            {" "}
                            (312)
                          </bdi>
                        </li>
                        <li className="d-inline-flex align-items-center gap-1">
                          <i className="icon-12" data-lucide="clock" aria-hidden="true" />
                          <bdi>
                            12 weeks
                          </bdi>
                        </li>
                        <li className="d-inline-flex align-items-center gap-1">
                          <i className="icon-12" data-lucide="signal" aria-hidden="true" />
                          Advanced
                        </li>
                      </ul>
                      <div className="mt-auto">
                        <div className="d-flex align-items-center gap-2 mb-3">
                          <div
                            className="progress progress-sm flex-grow-1"
                            role="progressbar"
                            aria-label="Deep Learning Specialisation seats taken"
                            aria-valuenow="85"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <div className="progress-bar bg-cat-violet" style={{ width: "85%" }} />
                          </div>
                          <span className="fs-xs text-body-2 text-nowrap">
                            <bdi>
                              34 / 40 seats
                            </bdi>
                          </span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between gap-2">
                          <span className="d-inline-flex align-items-center gap-2 min-w-0">
                            <span className="avatar avatar-xs">
                              <img src="/assets/images/avatar-2.png" width="28" height="28" alt="" />
                            </span>
                            <span className="fs-xs text-body-2 text-truncate">
                              Dr. Maya Chen
                            </span>
                          </span>
                          <button
                            type="button"
                            className="btn btn-primary-soft btn-sm d-inline-flex flex-shrink-0 align-items-center gap-1 text-nowrap"
                          >
                            <i className="icon-14" data-lucide="plus" aria-hidden="true" />
                            Enrol
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="col" data-filter-tags="stem">
                    <div className="h-100 d-flex flex-column gap-3 p-3 rounded-3 bg-soft border-soft">
                      <div className="d-flex align-items-start gap-3">
                        <span
                          className="icon-box icon-box-lg tint-violet border-current flex-shrink-0"
                          aria-hidden="true"
                        >
                          <i data-lucide="sigma" />
                        </span>
                        <div className="flex-grow-1 min-w-0">
                          <span className="d-flex flex-wrap align-items-center gap-2 mb-1">
                            <span className="badge-soft tint-violet">
                              STEM
                            </span>
                            <span className="badge-soft tint-brand d-inline-flex align-items-center gap-1">
                              {" "}
                              <i className="icon-12" data-lucide="sparkles" aria-hidden="true" />
                              <bdi>
                                91% match
                              </bdi>
                              {" "}
                            </span>
                          </span>
                          <h4 className="fs-6 fw-semibold text-title mb-0">
                            Statistical Inference
                          </h4>
                          <span className="d-block fs-xs fw-bold text-uppercase text-muted-2">
                            <bdi>
                              MTH-320
                            </bdi>
                          </span>
                        </div>
                      </div>
                      <p className="d-flex align-items-start gap-2 fs-xs text-body-2 mb-0">
                        <i className="icon-12 flex-shrink-0 mt-1 text-brand" data-lucide="target" aria-hidden="true" />
                        <span>
                          Closes the gap flagged by Statistics Quiz 3
                        </span>
                      </p>
                      <ul className="list-unstyled d-flex flex-wrap align-items-center gap-3 fs-xs text-muted-2 mb-0">
                        <li className="d-inline-flex align-items-center gap-1">
                          <i className="icon-12 icon-fill text-cat-amber" data-lucide="star" aria-hidden="true" />
                          <bdi>
                            <span className="fw-semibold text-title">
                              4.7
                            </span>
                            {" "}
                            (208)
                          </bdi>
                        </li>
                        <li className="d-inline-flex align-items-center gap-1">
                          <i className="icon-12" data-lucide="clock" aria-hidden="true" />
                          <bdi>
                            8 weeks
                          </bdi>
                        </li>
                        <li className="d-inline-flex align-items-center gap-1">
                          <i className="icon-12" data-lucide="signal" aria-hidden="true" />
                          Intermediate
                        </li>
                      </ul>
                      <div className="mt-auto">
                        <div className="d-flex align-items-center gap-2 mb-3">
                          <div
                            className="progress progress-sm flex-grow-1"
                            role="progressbar"
                            aria-label="Statistical Inference seats taken"
                            aria-valuenow="58"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <div className="progress-bar bg-cat-violet" style={{ width: "58%" }} />
                          </div>
                          <span className="fs-xs text-body-2 text-nowrap">
                            <bdi>
                              26 / 45 seats
                            </bdi>
                          </span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between gap-2">
                          <span className="d-inline-flex align-items-center gap-2 min-w-0">
                            <span className="avatar avatar-xs">
                              <img src="/assets/images/avatar-1.png" width="28" height="28" alt="" />
                            </span>
                            <span className="fs-xs text-body-2 text-truncate">
                              Prof. Daniel Okafor
                            </span>
                          </span>
                          <button
                            type="button"
                            className="btn btn-primary-soft btn-sm d-inline-flex flex-shrink-0 align-items-center gap-1 text-nowrap"
                          >
                            <i className="icon-14" data-lucide="plus" aria-hidden="true" />
                            Enrol
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="col" data-filter-tags="design">
                    <div className="h-100 d-flex flex-column gap-3 p-3 rounded-3 bg-soft border-soft">
                      <div className="d-flex align-items-start gap-3">
                        <span
                          className="icon-box icon-box-lg tint-amber border-current flex-shrink-0"
                          aria-hidden="true"
                        >
                          <i data-lucide="component" />
                        </span>
                        <div className="flex-grow-1 min-w-0">
                          <span className="d-flex flex-wrap align-items-center gap-2 mb-1">
                            <span className="badge-soft tint-amber">
                              Design
                            </span>
                            <span className="badge-soft tint-brand d-inline-flex align-items-center gap-1">
                              {" "}
                              <i className="icon-12" data-lucide="sparkles" aria-hidden="true" />
                              <bdi>
                                88% match
                              </bdi>
                              {" "}
                            </span>
                          </span>
                          <h4 className="fs-6 fw-semibold text-title mb-0">
                            Design Systems in Figma
                          </h4>
                          <span className="d-block fs-xs fw-bold text-uppercase text-muted-2">
                            <bdi>
                              UXD-210
                            </bdi>
                          </span>
                        </div>
                      </div>
                      <p className="d-flex align-items-start gap-2 fs-xs text-body-2 mb-0">
                        <i
                          className="icon-12 flex-shrink-0 mt-1 text-brand"
                          data-lucide="waypoints"
                          aria-hidden="true"
                        />
                        <bdi>
                          Pairs with UX Research Methods — 50% done
                        </bdi>
                      </p>
                      <ul className="list-unstyled d-flex flex-wrap align-items-center gap-3 fs-xs text-muted-2 mb-0">
                        <li className="d-inline-flex align-items-center gap-1">
                          <i className="icon-12 icon-fill text-cat-amber" data-lucide="star" aria-hidden="true" />
                          <bdi>
                            <span className="fw-semibold text-title">
                              4.8
                            </span>
                            {" "}
                            (176)
                          </bdi>
                        </li>
                        <li className="d-inline-flex align-items-center gap-1">
                          <i className="icon-12" data-lucide="clock" aria-hidden="true" />
                          <bdi>
                            6 weeks
                          </bdi>
                        </li>
                        <li className="d-inline-flex align-items-center gap-1">
                          <i className="icon-12" data-lucide="signal" aria-hidden="true" />
                          Intermediate
                        </li>
                      </ul>
                      <div className="mt-auto">
                        <div className="d-flex align-items-center gap-2 mb-3">
                          <div
                            className="progress progress-sm flex-grow-1"
                            role="progressbar"
                            aria-label="Design Systems in Figma seats taken"
                            aria-valuenow="89"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <div className="progress-bar bg-cat-amber" style={{ width: "89%" }} />
                          </div>
                          <span className="fs-xs text-body-2 text-nowrap">
                            <bdi>
                              31 / 35 seats
                            </bdi>
                          </span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between gap-2">
                          <span className="d-inline-flex align-items-center gap-2 min-w-0">
                            <span className="avatar avatar-xs">
                              <img src="/assets/images/avatar-3.png" width="28" height="28" alt="" />
                            </span>
                            <span className="fs-xs text-body-2 text-truncate">
                              Priya Nair
                            </span>
                          </span>
                          <button
                            type="button"
                            className="btn btn-primary-soft btn-sm d-inline-flex flex-shrink-0 align-items-center gap-1 text-nowrap"
                          >
                            <i className="icon-14" data-lucide="plus" aria-hidden="true" />
                            Enrol
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="col" data-filter-tags="languages">
                    <div className="h-100 d-flex flex-column gap-3 p-3 rounded-3 bg-soft border-soft">
                      <div className="d-flex align-items-start gap-3">
                        <span
                          className="icon-box icon-box-lg tint-emerald border-current flex-shrink-0"
                          aria-hidden="true"
                        >
                          <i data-lucide="languages" />
                        </span>
                        <div className="flex-grow-1 min-w-0">
                          <span className="d-flex flex-wrap align-items-center gap-2 mb-1">
                            <span className="badge-soft tint-emerald">
                              Languages
                            </span>
                            <span className="badge-soft tint-brand d-inline-flex align-items-center gap-1">
                              {" "}
                              <i className="icon-12" data-lucide="sparkles" aria-hidden="true" />
                              <bdi>
                                84% match
                              </bdi>
                              {" "}
                            </span>
                          </span>
                          <h4 className="fs-6 fw-semibold text-title mb-0">
                            Spanish for Business
                          </h4>
                          <span className="d-block fs-xs fw-bold text-uppercase text-muted-2">
                            <bdi>
                              SPA-240
                            </bdi>
                          </span>
                        </div>
                      </div>
                      <p className="d-flex align-items-start gap-2 fs-xs text-body-2 mb-0">
                        <i
                          className="icon-12 flex-shrink-0 mt-1 text-brand"
                          data-lucide="waypoints"
                          aria-hidden="true"
                        />
                        <span>
                          Next step after Conversational Spanish
                        </span>
                      </p>
                      <ul className="list-unstyled d-flex flex-wrap align-items-center gap-3 fs-xs text-muted-2 mb-0">
                        <li className="d-inline-flex align-items-center gap-1">
                          <i className="icon-12 icon-fill text-cat-amber" data-lucide="star" aria-hidden="true" />
                          <bdi>
                            <span className="fw-semibold text-title">
                              4.6
                            </span>
                            {" "}
                            (143)
                          </bdi>
                        </li>
                        <li className="d-inline-flex align-items-center gap-1">
                          <i className="icon-12" data-lucide="clock" aria-hidden="true" />
                          <bdi>
                            10 weeks
                          </bdi>
                        </li>
                        <li className="d-inline-flex align-items-center gap-1">
                          <i className="icon-12" data-lucide="signal" aria-hidden="true" />
                          Intermediate
                        </li>
                      </ul>
                      <div className="mt-auto">
                        <div className="d-flex align-items-center gap-2 mb-3">
                          <div
                            className="progress progress-sm flex-grow-1"
                            role="progressbar"
                            aria-label="Spanish for Business seats taken"
                            aria-valuenow="60"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <div className="progress-bar bg-cat-emerald" style={{ width: "60%" }} />
                          </div>
                          <span className="fs-xs text-body-2 text-nowrap">
                            <bdi>
                              18 / 30 seats
                            </bdi>
                          </span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between gap-2">
                          <span className="d-inline-flex align-items-center gap-2 min-w-0">
                            <span className="avatar avatar-xs bg-grad-5" aria-hidden="true">
                              ER
                            </span>
                            <span className="fs-xs text-body-2 text-truncate">
                              Dr. Elena Rossi
                            </span>
                          </span>
                          <button
                            type="button"
                            className="btn btn-primary-soft btn-sm d-inline-flex flex-shrink-0 align-items-center gap-1 text-nowrap"
                          >
                            <i className="icon-14" data-lucide="plus" aria-hidden="true" />
                            Enrol
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <a
                  href="#"
                  className="d-flex align-items-center justify-content-center gap-1 fs-md fw-medium text-brand mt-auto pt-3"
                >
                  See all matches
                  <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
          {/* Top pick */}
          <div className="col-12 col-xl-5 col-xxl-3">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="on-dark bg-grad-theme rounded-4 p-3 mb-3">
                  <span className="badge-soft tint-cyan border-current d-inline-flex align-items-center gap-2">
                    {" "}
                    <i className="icon-12" data-lucide="crown" aria-hidden="true" />
                    Top pick this term
                    {" "}
                  </span>
                  <h3 className="fs-4 fw-bold text-title lh-1 mt-3 mb-2">
                    Data Science Career Track
                  </h3>
                  <p className="d-flex flex-wrap align-items-center gap-3 fs-xs text-primary mb-0">
                    <span className="d-inline-flex align-items-center gap-1">
                      <i className="icon-12" data-lucide="layers" aria-hidden="true" />
                      <bdi>
                        6 courses
                      </bdi>
                    </span>
                    <span className="d-inline-flex align-items-center gap-1">
                      <i className="icon-12" data-lucide="calendar-days" aria-hidden="true" />
                      <bdi>
                        22 weeks
                      </bdi>
                    </span>
                  </p>
                </div>
                <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
                  <span className="d-inline-flex align-items-center gap-1">
                    <i className="icon-14 icon-fill text-cat-amber" data-lucide="star" aria-hidden="true" />
                    <bdi className="d-inline-flex align-items-center gap-1">
                      <span className="fs-md fw-semibold text-title">
                        4.9
                      </span>
                      <span className="fs-xs text-muted-2">
                        (1,120 learners)
                      </span>
                    </bdi>
                  </span>
                  <span className="badge-soft tint-emerald">
                    Starts 7 Sep
                  </span>
                </div>
                <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                  <li className="d-flex align-items-start gap-2 fs-md text-body-2">
                    <i
                      className="icon-16 flex-shrink-0 mt-1 text-cat-emerald"
                      data-lucide="circle-check"
                      aria-hidden="true"
                    />
                    <span>
                      Python, SQL and statistics foundations
                    </span>
                  </li>
                  <li className="d-flex align-items-start gap-2 fs-md text-body-2">
                    <i
                      className="icon-16 flex-shrink-0 mt-1 text-cat-emerald"
                      data-lucide="circle-check"
                      aria-hidden="true"
                    />
                    <span>
                      Two portfolio projects with peer review
                    </span>
                  </li>
                  <li className="d-flex align-items-start gap-2 fs-md text-body-2">
                    <i
                      className="icon-16 flex-shrink-0 mt-1 text-cat-emerald"
                      data-lucide="circle-check"
                      aria-hidden="true"
                    />
                    <span>
                      Career coaching and mock interviews
                    </span>
                  </li>
                </ul>
                <p className="fs-xs fw-semibold text-uppercase text-muted-2 mt-3 mb-2">
                  Track path
                </p>
                <ol className="list-unstyled d-flex flex-column flex-grow-1 gap-2 mb-0">
                  <li className="d-flex flex-grow-1 align-items-center gap-3 p-2 rounded-3 bg-soft border-soft">
                    <span className="avatar avatar-xs bg-cat-violet text-white" aria-hidden="true">
                      <bdi>
                        1
                      </bdi>
                    </span>
                    <span className="flex-grow-1 min-w-0 fs-md text-title text-truncate">
                      Python Foundations
                    </span>
                  </li>
                  <li className="d-flex flex-grow-1 align-items-center gap-3 p-2 rounded-3 bg-soft border-soft">
                    <span className="avatar avatar-xs bg-cat-violet text-white" aria-hidden="true">
                      <bdi>
                        2
                      </bdi>
                    </span>
                    <span className="flex-grow-1 min-w-0 fs-md text-title text-truncate">
                      {"SQL & Data Wrangling"}
                    </span>
                  </li>
                  <li className="d-flex flex-grow-1 align-items-center gap-3 p-2 rounded-3 bg-soft border-soft">
                    <span className="avatar avatar-xs bg-cat-violet text-white" aria-hidden="true">
                      <bdi>
                        3
                      </bdi>
                    </span>
                    <span className="flex-grow-1 min-w-0 fs-md text-title text-truncate">
                      Statistical Inference
                    </span>
                  </li>
                  <li className="d-flex flex-grow-1 align-items-center gap-3 p-2 rounded-3 bg-soft border-soft border-dashed">
                    <span className="avatar avatar-xs bg-grad-2" aria-hidden="true">
                      +3
                    </span>
                    <span className="flex-grow-1 min-w-0 fs-md text-body-2 text-truncate">
                      Three more courses
                    </span>
                  </li>
                </ol>
                <div className="mt-auto pt-3">
                  <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
                    <span className="fs-md text-body-2">
                      Cohort filling
                    </span>
                    <span className="fs-md fw-semibold text-title">
                      <bdi>
                        168 of 240
                      </bdi>
                    </span>
                  </div>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Data Science Career Track places filled"
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div className="progress-bar bg-cat-violet" style={{ width: "70%" }} />
                  </div>
                  <div className="d-flex align-items-center gap-2 mt-3">
                    <span className="avatar-stack">
                      <span className="avatar avatar-xs">
                        <img src="/assets/images/avatar-4.png" width="28" height="28" alt="" />
                      </span>
                      <span className="avatar avatar-xs bg-grad-3" aria-hidden="true">
                        LZ
                      </span>
                      <span className="avatar avatar-xs bg-grad-2" aria-hidden="true">
                        +22
                      </span>
                    </span>
                    <span className="fs-xs text-body-2">
                      <bdi>
                        24 classmates joined
                      </bdi>
                    </span>
                  </div>
                  <div className="d-flex align-items-center gap-2 mt-3">
                    <button
                      type="button"
                      className="btn btn-primary flex-grow-1 d-inline-flex align-items-center justify-content-center gap-2"
                    >
                      <i className="icon-18" data-lucide="graduation-cap" aria-hidden="true" />
                      Enrol now
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-soft btn-18 rounded-circle flex-shrink-0"
                      aria-label="Save Data Science Career Track for later"
                    >
                      <i data-lucide="bookmark" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Why these picks */}
          <div className="col-12 col-xxl-3">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    Why These Picks
                  </h3>
                  <span className="badge-soft tint-brand">
                    <bdi>
                      4 signals
                    </bdi>
                  </span>
                </div>
                <ul className="list-unstyled row row-cols-1 row-cols-sm-2 row-cols-xxl-1 g-2 flex-grow-1 mb-0">
                  <li className="col">
                    <div className="h-100 d-flex align-items-start gap-3 p-3 rounded-3 bg-soft border-soft">
                      <span
                        className="icon-box icon-box-sm tint-violet border-current flex-shrink-0"
                        aria-hidden="true"
                      >
                        <i data-lucide="target" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-xs fw-semibold text-uppercase text-muted-2">
                          Your goal
                        </span>
                        {" "}
                        <span className="d-block fs-md fw-semibold text-title">
                          Become a data scientist
                        </span>
                        {" "}
                        <span className="d-flex align-items-center gap-2 mt-2">
                          <span
                            className="progress progress-sm flex-grow-1"
                            role="progressbar"
                            aria-label="Career goal milestones reached"
                            aria-valuenow="50"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <span className="progress-bar bg-cat-violet" style={{ width: "50%" }} />
                          </span>
                          <span className="fs-xs text-body-2 text-nowrap">
                            <bdi>
                              3 / 6
                            </bdi>
                          </span>
                        </span>
                        {" "}
                      </span>
                    </div>
                  </li>
                  <li className="col">
                    <div className="h-100 d-flex align-items-start gap-3 p-3 rounded-3 bg-soft border-soft">
                      <span
                        className="icon-box icon-box-sm tint-emerald border-current flex-shrink-0"
                        aria-hidden="true"
                      >
                        <i data-lucide="trophy" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-xs fw-semibold text-uppercase text-muted-2">
                          Your strength
                        </span>
                        {" "}
                        <span className="d-block fs-md fw-semibold text-title">
                          Mathematics
                        </span>
                        {" "}
                        <span className="d-flex align-items-center gap-2 mt-2">
                          <span className="seg-meter" role="img" aria-label="Mathematics strength 5 out of 5">
                            <span className="bg-cat-emerald" />
                            <span className="bg-cat-emerald" />
                            <span className="bg-cat-emerald" />
                            <span className="bg-cat-emerald" />
                            <span className="bg-cat-emerald" />
                          </span>
                          <span className="fs-xs text-body-2">
                            <bdi>
                              Top 8% of your cohort
                            </bdi>
                          </span>
                        </span>
                        {" "}
                      </span>
                    </div>
                  </li>
                  <li className="col">
                    <div className="h-100 d-flex align-items-start gap-3 p-3 rounded-3 bg-soft border-soft">
                      <span className="icon-box icon-box-sm tint-amber border-current flex-shrink-0" aria-hidden="true">
                        <i data-lucide="gauge" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-xs fw-semibold text-uppercase text-muted-2">
                          Skill gap
                        </span>
                        {" "}
                        <span className="d-block fs-md fw-semibold text-title">
                          Statistical inference
                        </span>
                        {" "}
                        <span className="d-flex align-items-center gap-2 mt-2">
                          <span className="seg-meter" role="img" aria-label="Statistical inference strength 2 out of 5">
                            <span className="bg-cat-amber" />
                            <span className="bg-cat-amber" />
                            <span />
                            <span />
                            <span />
                          </span>
                          <span className="fs-xs text-body-2">
                            Below cohort median
                          </span>
                        </span>
                        {" "}
                      </span>
                    </div>
                  </li>
                  <li className="col">
                    <div className="h-100 d-flex align-items-start gap-3 p-3 rounded-3 bg-soft border-soft">
                      <span className="icon-box icon-box-sm tint-blue border-current flex-shrink-0" aria-hidden="true">
                        <i data-lucide="users" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-xs fw-semibold text-uppercase text-muted-2">
                          Your cohort
                        </span>
                        {" "}
                        <span className="d-block fs-md fw-semibold text-title">
                          <bdi>
                            24 classmates studied these next
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-flex align-items-center gap-2 mt-2">
                          <span className="avatar-stack">
                            <span className="avatar avatar-xs">
                              <img src="/assets/images/avatar-1.png" width="28" height="28" alt="" />
                            </span>
                            <span className="avatar avatar-xs">
                              <img src="/assets/images/avatar-3.png" width="28" height="28" alt="" />
                            </span>
                            <span className="avatar avatar-xs bg-grad-4" aria-hidden="true">
                              +22
                            </span>
                          </span>
                          <span className="fs-xs text-body-2">
                            After Machine Learning
                          </span>
                        </span>
                        {" "}
                      </span>
                    </div>
                  </li>
                </ul>
                <button
                  type="button"
                  className="btn btn-outline-soft w-100 d-inline-flex align-items-center justify-content-center gap-2 mt-3"
                >
                  <i className="icon-18" data-lucide="sliders-horizontal" aria-hidden="true" />
                  Tune recommendations
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Quick-action modals ===== */}
      <div
        role="dialog"
        className="modal fade"
        id="eduAddCourseModal"
        tabIndex="-1"
        aria-labelledby="eduAddCourseModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
          <div className="modal-content">
            <div className="modal-header border-b-soft justify-content-between">
              <div>
                <h2 className="modal-title h5 mb-0" id="eduAddCourseModalLabel">
                  Add New Course
                </h2>
                <p className="fs-md text-muted-2 mb-0">
                  Set up a course and publish it to the student catalogue
                </p>
              </div>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <form data-modal-form="" noValidate>
              <div className="modal-body">
                <div className="row g-3">
                  <div className="col-12 col-md-8">
                    <label htmlFor="courseTitle" className="form-label fs-md fw-semibold text-title">
                      Course title
                    </label>
                    {" "}
                    <input
                      type="text"
                      className="form-control"
                      id="courseTitle"
                      name="course-title"
                      placeholder="e.g. Advanced Calculus II"
                      required
                    />
                    {" "}
                    <div className="invalid-feedback">
                      Enter the course title.
                    </div>
                  </div>
                  <div className="col-12 col-md-4">
                    <label htmlFor="courseCode" className="form-label fs-md fw-semibold text-title">
                      Course code
                    </label>
                    {" "}
                    <input
                      type="text"
                      className="form-control"
                      id="courseCode"
                      name="course-code"
                      placeholder="MTH-204"
                      required
                    />
                    {" "}
                    <div className="invalid-feedback">
                      Enter a course code.
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="courseDepartment" className="form-label fs-md fw-semibold text-title">
                      Department
                    </label>
                    {" "}
                    <select
                      className="form-select"
                      id="courseDepartment"
                      name="course-department"
                      defaultValue="Mathematics"
                    >
                      <option>
                        Mathematics
                      </option>
                      <option>
                        Computer Science
                      </option>
                      <option>
                        Physics
                      </option>
                      <option>
                        {"Business & Economics"}
                      </option>
                      <option>
                        Design
                      </option>
                      <option>
                        Humanities
                      </option>
                    </select>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="courseLevel" className="form-label fs-md fw-semibold text-title">
                      Level
                    </label>
                    {" "}
                    <select className="form-select" id="courseLevel" name="course-level" defaultValue="Undergraduate">
                      <option>
                        Foundation
                      </option>
                      <option>
                        Undergraduate
                      </option>
                      <option>
                        Postgraduate
                      </option>
                      <option>
                        Professional certificate
                      </option>
                    </select>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="courseInstructor" className="form-label fs-md fw-semibold text-title">
                      Lead instructor
                    </label>
                    {" "}
                    <select className="form-select" id="courseInstructor" name="course-instructor" required>
                      <option value="">
                        Choose an instructor
                      </option>
                      <option>
                        Dr. Maya Chen
                      </option>
                      <option>
                        Prof. Daniel Okafor
                      </option>
                      <option>
                        Dr. Elena Rossi
                      </option>
                      <option>
                        Priya Nair
                      </option>
                      <option>
                        Jordan Davis
                      </option>
                    </select>
                    {" "}
                    <div className="invalid-feedback">
                      Assign a lead instructor.
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="courseMode" className="form-label fs-md fw-semibold text-title">
                      Delivery mode
                    </label>
                    {" "}
                    <select className="form-select" id="courseMode" name="course-mode" defaultValue="In person">
                      <option>
                        In person
                      </option>
                      <option>
                        Live online
                      </option>
                      <option>
                        Hybrid
                      </option>
                      <option>
                        Self-paced
                      </option>
                    </select>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="courseStart" className="form-label fs-md fw-semibold text-title">
                      First session
                    </label>
                    {" "}
                    <input type="date" className="form-control" id="courseStart" name="course-start" required />
                    {" "}
                    <div className="invalid-feedback">
                      Choose the first session date.
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="courseEnd" className="form-label fs-md fw-semibold text-title">
                      Last session
                    </label>
                    {" "}
                    <input type="date" className="form-control" id="courseEnd" name="course-end" required />
                    {" "}
                    <div className="invalid-feedback">
                      Choose the last session date.
                    </div>
                  </div>
                  <div className="col-12 col-md-4">
                    <label htmlFor="courseCredits" className="form-label fs-md fw-semibold text-title">
                      Credits
                    </label>
                    {" "}
                    <input
                      type="number"
                      className="form-control"
                      id="courseCredits"
                      name="course-credits"
                      min="1"
                      max="30"
                      step="1"
                      placeholder="6"
                    />
                  </div>
                  <div className="col-12 col-md-4">
                    <label htmlFor="courseHours" className="form-label fs-md fw-semibold text-title">
                      Weekly hours
                    </label>
                    {" "}
                    <input
                      type="number"
                      className="form-control"
                      id="courseHours"
                      name="course-hours"
                      min="1"
                      max="40"
                      step="0.5"
                      placeholder="4"
                    />
                  </div>
                  <div className="col-12 col-md-4">
                    <label htmlFor="courseSeats" className="form-label fs-md fw-semibold text-title">
                      Seat capacity
                    </label>
                    {" "}
                    <input
                      type="number"
                      className="form-control"
                      id="courseSeats"
                      name="course-seats"
                      min="1"
                      step="1"
                      placeholder="42"
                      aria-describedby="courseSeatsHelp"
                    />
                    {" "}
                    <span className="d-block fs-xs text-muted-2 mt-1" id="courseSeatsHelp">
                      <bdi>
                        Rooms hold 60 students max.
                      </bdi>
                    </span>
                  </div>
                  <div className="col-12">
                    <label htmlFor="courseSummary" className="form-label fs-md fw-semibold text-title">
                      Course summary
                    </label>
                    {" "}
                    <textarea
                      className="form-control"
                      id="courseSummary"
                      name="course-summary"
                      rows="3"
                      placeholder="What learners will cover and what they will be able to do by the end."
                    />
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="coursePublish"
                        name="course-publish"
                        defaultChecked
                      />
                      {" "}
                      <label className="form-check-label fs-md" htmlFor="coursePublish">
                        Publish to the student catalogue straight away
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="courseNotify" name="course-notify" />
                      {" "}
                      <label className="form-check-label fs-md" htmlFor="courseNotify">
                        Email the department when enrolment opens
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
                  <i className="icon-18" data-lucide="book-plus" aria-hidden="true" />
                  Create Course
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        role="dialog"
        className="modal fade"
        id="eduJoinClassModal"
        tabIndex="-1"
        aria-labelledby="eduJoinClassModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header border-b-soft justify-content-between">
              <div>
                <h2 className="modal-title h5 mb-0" id="eduJoinClassModalLabel">
                  Join Live Class
                </h2>
                <p className="fs-md text-muted-2 mb-0">
                  Check your setup before you go on air
                </p>
              </div>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <form data-modal-form="" noValidate>
              <div className="modal-body">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <span className="icon-box icon-box-lg tint-cyan border-current" aria-hidden="true">
                    <i data-lucide="video" />
                  </span>
                  <div className="min-w-0">
                    <p className="fs-5 fw-semibold text-title text-truncate mb-1">
                      Advanced Calculus II
                    </p>
                    <span className="badge-soft tint-amber d-inline-flex align-items-center gap-1 px-2">
                      {" "}
                      <i className="icon-12" data-lucide="clock" aria-hidden="true" />
                      <bdi>
                        Starts 10:30 AM
                      </bdi>
                      {" "}
                    </span>
                  </div>
                </div>
                <ul className="list-unstyled bg-soft border-soft rounded-3 p-3 mb-3">
                  <li className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                    <span className="fs-md text-body-2">
                      Instructor
                    </span>
                    <span className="fs-md fw-semibold text-title">
                      Dr. Maya Chen
                    </span>
                  </li>
                  <li className="d-flex flex-wrap align-items-center justify-content-between gap-2 mt-2">
                    <span className="fs-md text-body-2">
                      Room
                    </span>
                    <span className="fs-md fw-semibold text-title">
                      <bdi>
                        B-204
                      </bdi>
                    </span>
                  </li>
                  <li className="d-flex flex-wrap align-items-center justify-content-between gap-2 mt-2">
                    <span className="fs-md text-body-2">
                      Already in the room
                    </span>
                    <span className="fs-md fw-semibold text-title">
                      <bdi>
                        18 of 42 students
                      </bdi>
                    </span>
                  </li>
                </ul>
                <div className="mb-3">
                  <label htmlFor="joinRole" className="form-label fs-md fw-semibold text-title">
                    Join as
                  </label>
                  {" "}
                  <select className="form-select" id="joinRole" name="join-role" defaultValue="Host">
                    <option>
                      Host
                    </option>
                    <option>
                      Co-host
                    </option>
                    <option>
                      Observer
                    </option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="joinDevice" className="form-label fs-md fw-semibold text-title">
                    Audio device
                  </label>
                  {" "}
                  <select
                    className="form-select"
                    id="joinDevice"
                    name="join-device"
                    defaultValue="Default — System microphone"
                  >
                    <option>
                      Default — System microphone
                    </option>
                    <option>
                      Headset microphone
                    </option>
                    <option>
                      Room microphone (B-204)
                    </option>
                  </select>
                </div>
                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="joinCamera"
                    name="join-camera"
                    defaultChecked
                  />
                  {" "}
                  <label className="form-check-label fs-md" htmlFor="joinCamera">
                    Turn my camera on when I join
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" id="joinMic" name="join-mic" />
                  {" "}
                  <label className="form-check-label fs-md" htmlFor="joinMic">
                    Turn my microphone on when I join
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="joinRecord"
                    name="join-record"
                    defaultChecked
                  />
                  {" "}
                  <label className="form-check-label fs-md" htmlFor="joinRecord">
                    Record the session for the class library
                  </label>
                </div>
              </div>
              <div className="modal-footer border-t-soft">
                <button type="button" className="btn btn-outline-soft" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary d-inline-flex align-items-center gap-2">
                  <i className="icon-18" data-lucide="video" aria-hidden="true" />
                  Join Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        role="dialog"
        className="modal fade"
        id="eduNewAssignmentModal"
        tabIndex="-1"
        aria-labelledby="eduNewAssignmentModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
          <div className="modal-content">
            <div className="modal-header border-b-soft justify-content-between">
              <div>
                <h2 className="modal-title h5 mb-0" id="eduNewAssignmentModalLabel">
                  New Assignment
                </h2>
                <p className="fs-md text-muted-2 mb-0">
                  Publish work to a cohort and open the submission window
                </p>
              </div>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <form data-modal-form="" noValidate>
              <div className="modal-body">
                <div className="row g-3">
                  <div className="col-12 col-md-8">
                    <label htmlFor="assignmentTitle" className="form-label fs-md fw-semibold text-title">
                      Assignment title
                    </label>
                    {" "}
                    <input
                      type="text"
                      className="form-control"
                      id="assignmentTitle"
                      name="assignment-title"
                      placeholder="e.g. Midterm Problem Set"
                      required
                    />
                    {" "}
                    <div className="invalid-feedback">
                      Enter the assignment title.
                    </div>
                  </div>
                  <div className="col-12 col-md-4">
                    <label htmlFor="assignmentType" className="form-label fs-md fw-semibold text-title">
                      Type
                    </label>
                    {" "}
                    <select
                      className="form-select"
                      id="assignmentType"
                      name="assignment-type"
                      defaultValue="Problem set"
                    >
                      <option>
                        Problem set
                      </option>
                      <option>
                        Essay
                      </option>
                      <option>
                        Lab report
                      </option>
                      <option>
                        Presentation
                      </option>
                      <option>
                        Code review
                      </option>
                      <option>
                        Quiz
                      </option>
                      <option>
                        Oral assessment
                      </option>
                    </select>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="assignmentCourse" className="form-label fs-md fw-semibold text-title">
                      Course
                    </label>
                    {" "}
                    <select className="form-select" id="assignmentCourse" name="assignment-course" required>
                      <option value="">
                        Choose a course
                      </option>
                      <option>
                        Machine Learning Foundations (ML-301)
                      </option>
                      <option>
                        Financial Accounting II (ACC-210)
                      </option>
                      <option>
                        UX Research Methods (UXR-140)
                      </option>
                      <option>
                        Organic Chemistry (CHM-220)
                      </option>
                      <option>
                        Conversational Spanish (SPA-110)
                      </option>
                    </select>
                    {" "}
                    <div className="invalid-feedback">
                      Pick the course this assignment belongs to.
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="assignmentMarker" className="form-label fs-md fw-semibold text-title">
                      Assigned marker
                    </label>
                    {" "}
                    <select
                      className="form-select"
                      id="assignmentMarker"
                      name="assignment-marker"
                      defaultValue="Dr. Maya Chen"
                    >
                      <option>
                        Dr. Maya Chen
                      </option>
                      <option>
                        Prof. Daniel Okafor
                      </option>
                      <option>
                        Dr. Elena Rossi
                      </option>
                      <option>
                        Priya Nair
                      </option>
                      <option>
                        Jordan Davis
                      </option>
                    </select>
                  </div>
                  <div className="col-12 col-md-4">
                    <label htmlFor="assignmentOpens" className="form-label fs-md fw-semibold text-title">
                      Opens
                    </label>
                    {" "}
                    <input type="date" className="form-control" id="assignmentOpens" name="assignment-opens" />
                  </div>
                  <div className="col-12 col-md-4">
                    <label htmlFor="assignmentDue" className="form-label fs-md fw-semibold text-title">
                      Due date
                    </label>
                    {" "}
                    <input type="date" className="form-control" id="assignmentDue" name="assignment-due" required />
                    {" "}
                    <div className="invalid-feedback">
                      Set a due date.
                    </div>
                  </div>
                  <div className="col-12 col-md-4">
                    <label htmlFor="assignmentPoints" className="form-label fs-md fw-semibold text-title">
                      Total points
                    </label>
                    {" "}
                    <input
                      type="number"
                      className="form-control"
                      id="assignmentPoints"
                      name="assignment-points"
                      min="1"
                      placeholder="100"
                      required
                    />
                    {" "}
                    <div className="invalid-feedback">
                      Enter the points this assignment is worth.
                    </div>
                  </div>
                  <div className="col-12">
                    <label htmlFor="assignmentBrief" className="form-label fs-md fw-semibold text-title">
                      Brief
                    </label>
                    {" "}
                    <textarea
                      className="form-control"
                      id="assignmentBrief"
                      name="assignment-brief"
                      rows="3"
                      placeholder="What are learners asked to produce, and how will it be marked?"
                    />
                  </div>
                  <div className="col-12">
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="assignmentLate"
                        name="assignment-late"
                        defaultChecked
                      />
                      {" "}
                      <label className="form-check-label fs-md" htmlFor="assignmentLate">
                        Accept late submissions with a penalty
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="assignmentNotify"
                        name="assignment-notify"
                        defaultChecked
                      />
                      {" "}
                      <label className="form-check-label fs-md" htmlFor="assignmentNotify">
                        Notify enrolled learners when it goes live
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
                  <i className="icon-18" data-lucide="send" aria-hidden="true" />
                  Publish Assignment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        role="dialog"
        className="modal fade"
        id="eduAddEventModal"
        tabIndex="-1"
        aria-labelledby="eduAddEventModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
          <div className="modal-content">
            <div className="modal-header border-b-soft justify-content-between">
              <div>
                <h2
                  className="modal-title h5 mb-0"
                  id="eduAddEventModalLabel"
                  data-event-label=""
                  data-event-label-new="New Event"
                  data-event-label-edit="Edit Event"
                >
                  New Event
                </h2>
                <p
                  className="fs-md text-muted-2 mb-0"
                  data-event-subtitle=""
                  data-event-label=""
                  data-event-label-new="Add a date to the academic diary and open registrations"
                  data-event-label-edit="Change the details, move it in the diary, or take it off"
                >
                  Add a date to the academic diary and open registrations
                </p>
              </div>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <form data-modal-form="" noValidate>
              <div className="modal-body">
                <div className="row g-3">
                  <div className="col-12 col-md-8">
                    <label htmlFor="eventTitle" className="form-label fs-md fw-semibold text-title">
                      Event title
                    </label>
                    {" "}
                    <input
                      type="text"
                      className="form-control"
                      id="eventTitle"
                      name="event-title"
                      placeholder="e.g. Autumn Open Day"
                      required
                    />
                    {" "}
                    <div className="invalid-feedback">
                      Enter the event title.
                    </div>
                  </div>
                  <div className="col-12 col-md-4">
                    <label htmlFor="eventType" className="form-label fs-md fw-semibold text-title">
                      Type
                    </label>
                    {" "}
                    {/* The value is the key a row files itself under, so this
                       select is the one place a type is named. */}
                    {" "}
                    <select className="form-select" id="eventType" name="event-type" defaultValue="lecture">
                      <option value="lecture">
                        Lecture
                      </option>
                      <option value="deadline">
                        Deadline
                      </option>
                      <option value="workshop">
                        Workshop
                      </option>
                      <option value="meeting">
                        Meeting
                      </option>
                      <option value="campus">
                        Campus life
                      </option>
                      <option value="holiday">
                        Holiday
                      </option>
                    </select>
                  </div>
                  <div className="col-12 col-md-4">
                    <label htmlFor="eventDate" className="form-label fs-md fw-semibold text-title">
                      Date
                    </label>
                    {" "}
                    <input type="date" className="form-control" id="eventDate" name="event-date" required />
                    {" "}
                    <div className="invalid-feedback">
                      Pick a date.
                    </div>
                  </div>
                  <div className="col-6 col-md-4">
                    <label htmlFor="eventStart" className="form-label fs-md fw-semibold text-title">
                      Starts
                    </label>
                    {" "}
                    <input type="time" className="form-control" id="eventStart" name="event-start" />
                  </div>
                  <div className="col-6 col-md-4">
                    <label htmlFor="eventEnd" className="form-label fs-md fw-semibold text-title">
                      Ends
                    </label>
                    {" "}
                    <input type="time" className="form-control" id="eventEnd" name="event-end" />
                  </div>
                  <div className="col-12 col-md-8">
                    <label htmlFor="eventVenue" className="form-label fs-md fw-semibold text-title">
                      Venue
                    </label>
                    {" "}
                    <input
                      type="text"
                      className="form-control"
                      id="eventVenue"
                      name="event-venue"
                      placeholder="e.g. Faculty Hall A"
                      required
                    />
                    {" "}
                    <div className="invalid-feedback">
                      Say where it takes place.
                    </div>
                  </div>
                  <div className="col-12 col-md-4">
                    <label htmlFor="eventCapacity" className="form-label fs-md fw-semibold text-title">
                      Seats
                    </label>
                    {" "}
                    <input
                      type="number"
                      className="form-control"
                      id="eventCapacity"
                      name="event-capacity"
                      min="1"
                      placeholder="150"
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="eventNotes" className="form-label fs-md fw-semibold text-title">
                      Description
                    </label>
                    {" "}
                    <textarea
                      className="form-control"
                      id="eventNotes"
                      name="event-notes"
                      rows="3"
                      placeholder="Who is this for, and what should attendees expect?"
                    />
                  </div>
                  <div className="col-12">
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="eventPublish"
                        name="event-publish"
                        defaultChecked
                      />
                      {" "}
                      <label className="form-check-label fs-md" htmlFor="eventPublish">
                        Publish to the student portal
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="eventReminder"
                        name="event-reminder"
                        defaultChecked
                      />
                      {" "}
                      <label className="form-check-label fs-md" htmlFor="eventReminder">
                        Send a reminder 24 hours before
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer border-t-soft">
                <button
                  type="button"
                  className="btn btn-outline-soft text-danger align-items-center gap-2 me-auto d-none"
                  data-event-delete=""
                >
                  <i className="icon-18" data-lucide="trash-2" aria-hidden="true" />
                  Delete
                </button>
                <button type="button" className="btn btn-outline-soft" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary d-inline-flex align-items-center gap-2">
                  <i className="icon-18" data-lucide="calendar-plus" aria-hidden="true" />
                  {" "}
                  <span
                    data-event-submit-label=""
                    data-event-label=""
                    data-event-label-new="Add to Diary"
                    data-event-label-edit="Save Changes"
                  >
                    Add to Diary
                  </span>
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

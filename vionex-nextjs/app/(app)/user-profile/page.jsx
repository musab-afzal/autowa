/* Generated from the Vionex HTML theme by scripts/convert-html.mjs */
import AppShell from "@/components/AppShell";

export const metadata = {
  title: "Vionex — User Profile",
  description: "Vionex enterprise admin dashboard — user profile page with account details, activity, projects and session security, built with Bootstrap 5, CSS variables and a scalable design system.",
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
          User Profile
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
              User Profile
            </li>
          </ol>
        </nav>
      </div>
      {/* ===== Profile identity ===== */}
      <section className="mb-4" aria-labelledby="profile-identity-title">
        <div className="on-dark bg-grad-theme rounded-4 p-3 p-md-4">
          <div className="d-flex flex-wrap align-items-start justify-content-between gap-3">
            <div className="d-flex flex-wrap align-items-center gap-3 min-w-0">
              <span className="avatar avatar-xl border border-3 border-white border-opacity-25">
                <img src="/assets/images/avatar-user.png" width="84" height="84" alt="Ravisha V" />
              </span>
              <div className="min-w-0">
                <h2 id="profile-identity-title" className="fs-2 fw-bold text-title mb-1">
                  Ravisha V
                </h2>
                <p className="fs-lg text-primary mb-2">
                  Lead Product Designer · AI Platform
                </p>
                <ul className="list-unstyled d-flex flex-wrap align-items-center gap-2 mb-0">
                  <li>
                    <span className="badge-soft tint-cyan border-current d-inline-flex align-items-center gap-1">
                      {" "}
                      <i className="icon-12" data-lucide="shield-check" aria-hidden="true" />
                      Administrator
                      {" "}
                    </span>
                  </li>
                  <li>
                    <span className="badge-soft tint-emerald border-current d-inline-flex align-items-center gap-2">
                      {" "}
                      <span className="legend-dot bg-cat-emerald" aria-hidden="true" />
                      Available
                      {" "}
                    </span>
                  </li>
                  <li>
                    <span className="badge-soft tint-amber border-current d-inline-flex align-items-center gap-1">
                      {" "}
                      <i className="icon-12" data-lucide="badge-check" aria-hidden="true" />
                      Verified
                      {" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="d-flex flex-wrap align-items-center gap-2">
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#profileEditModal"
                className="btn btn-accent d-inline-flex flex-nowrap align-items-center gap-2 text-nowrap"
              >
                <i className="icon-18" data-lucide="square-pen" aria-hidden="true" />
                Edit Profile
              </button>
              <button
                type="button"
                className="btn btn-accent-ghost d-inline-flex flex-nowrap align-items-center gap-2 text-nowrap"
              >
                <i className="icon-18" data-lucide="message-circle" aria-hidden="true" />
                Message
              </button>
              <div className="dropdown">
                <button
                  type="button"
                  className="btn btn-outline-soft btn-18 rounded-circle"
                  id="profileHeroMenu"
                  data-bs-toggle="dropdown"
                  data-bs-offset="0,8"
                  aria-expanded="false"
                  aria-label="Profile options"
                >
                  <i data-lucide="ellipsis-vertical" />
                </button>
                {" "}
                <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="profileHeroMenu">
                  <li>
                    <button type="button" className="dropdown-item">
                      <i data-lucide="link" />
                      Copy profile link
                    </button>
                  </li>
                  <li>
                    <button type="button" className="dropdown-item">
                      <i data-lucide="download" />
                      Download vCard
                    </button>
                  </li>
                  <li>
                    <a href="/settings" className="dropdown-item">
                      <i data-lucide="settings" />
                      Account settings
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider my-1" />
                  </li>
                  <li>
                    <button type="button" className="dropdown-item dropdown-item-danger">
                      <i data-lucide="user-round-x" />
                      Deactivate account
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <ul className="list-unstyled d-flex flex-wrap align-items-center gap-3 gap-md-4 fs-md text-primary mt-3 mb-0">
            <li className="d-inline-flex align-items-center gap-2">
              <i className="icon-16" data-lucide="mail" aria-hidden="true" />
              <bdi>
                ravisha@vionex.com
              </bdi>
            </li>
            <li className="d-inline-flex align-items-center gap-2">
              <i className="icon-16" data-lucide="map-pin" aria-hidden="true" />
              Bengaluru, India
            </li>
            <li className="d-inline-flex align-items-center gap-2">
              <i className="icon-16" data-lucide="building-2" aria-hidden="true" />
              {"Design & Research"}
            </li>
            <li className="d-inline-flex align-items-center gap-2">
              <i className="icon-16" data-lucide="calendar-days" aria-hidden="true" />
              <bdi>
                Joined 14 March 2022
              </bdi>
            </li>
          </ul>
          <ul className="list-unstyled row row-cols-2 row-cols-lg-4 g-2 g-md-3 border-t-soft pt-3 mt-3 mb-0">
            <li className="col">
              <div className="bg-soft border-theme rounded-3 h-100 p-3">
                <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                  <span
                    className="icon-box icon-box-sm rounded-circle bg-white bg-opacity-25 text-title"
                    aria-hidden="true"
                  >
                    <i data-lucide="folder-kanban" />
                  </span>
                  <div id="profileProjectsSpark" className="chart-inline" />
                </div>
                <p className="fs-3 fw-bold text-title lh-1 mb-1">
                  <bdi>
                    34
                  </bdi>
                </p>
                <h3 className="fs-md fw-normal text-primary mb-0">
                  Projects Led
                </h3>
              </div>
            </li>
            <li className="col">
              <div className="bg-soft border-theme rounded-3 h-100 p-3">
                <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                  <span
                    className="icon-box icon-box-sm rounded-circle bg-white bg-opacity-25 text-title"
                    aria-hidden="true"
                  >
                    <i data-lucide="circle-check-big" />
                  </span>
                  <div id="profileTasksSpark" className="chart-inline" />
                </div>
                <p className="fs-3 fw-bold text-title lh-1 mb-1">
                  <bdi>
                    1,284
                  </bdi>
                </p>
                <h3 className="fs-md fw-normal text-primary mb-0">
                  Tasks Completed
                </h3>
              </div>
            </li>
            <li className="col">
              <div className="bg-soft border-theme rounded-3 h-100 p-3">
                <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                  <span
                    className="icon-box icon-box-sm rounded-circle bg-white bg-opacity-25 text-title"
                    aria-hidden="true"
                  >
                    <i data-lucide="users-round" />
                  </span>
                  <div id="profileTeamSpark" className="chart-inline" />
                </div>
                <p className="fs-3 fw-bold text-title lh-1 mb-1">
                  <bdi>
                    18
                  </bdi>
                </p>
                <h3 className="fs-md fw-normal text-primary mb-0">
                  Team Members
                </h3>
              </div>
            </li>
            <li className="col">
              <div className="bg-soft border-theme rounded-3 h-100 p-3">
                <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                  <span
                    className="icon-box icon-box-sm rounded-circle bg-white bg-opacity-25 text-title"
                    aria-hidden="true"
                  >
                    <i data-lucide="star" />
                  </span>
                  <div id="profileRatingSpark" className="chart-inline" />
                </div>
                <p className="fs-3 fw-bold text-title lh-1 mb-1">
                  <bdi>
                    4.9
                  </bdi>
                </p>
                <h3 className="fs-md fw-normal text-primary mb-0">
                  Peer Rating
                </h3>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* ===== Profile details ===== */}
      <section className="mb-4">
        <h2 className="visually-hidden">
          Profile details
        </h2>
        <div className="row g-3">
          <div className="col-12 col-md-6 col-xl-4">
            <div className="card h-100">
              <div className="card-body">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    About
                  </h3>
                  <span className="badge-soft tint-brand">
                    <bdi>
                      ID VX-1042
                    </bdi>
                  </span>
                </div>
                <p className="fs-md text-body-2 mb-3">
                  Design lead for the Vionex AI platform. I look after the design system, the model-configuration surfaces and the research practice behind them — and I still ship in Figma most weeks.
                </p>
                <dl className="d-flex flex-column gap-3 mb-0">
                  <div className="d-flex flex-wrap align-items-center gap-1 column-gap-3">
                    <dt className="d-inline-flex align-items-center gap-2 fs-md fw-normal text-muted-2 mb-0">
                      <i className="icon-16" data-lucide="mail" aria-hidden="true" />
                      Email
                    </dt>
                    <dd className="ms-auto min-w-0 fs-md fw-semibold text-title text-truncate mb-0">
                      <bdi>
                        ravisha@vionex.com
                      </bdi>
                    </dd>
                  </div>
                  <div className="d-flex flex-wrap align-items-center gap-1 column-gap-3">
                    <dt className="d-inline-flex align-items-center gap-2 fs-md fw-normal text-muted-2 mb-0">
                      <i className="icon-16" data-lucide="phone" aria-hidden="true" />
                      Phone
                    </dt>
                    <dd className="ms-auto min-w-0 fs-md fw-semibold text-title text-truncate mb-0">
                      <bdi>
                        +91 80 4718 2204
                      </bdi>
                    </dd>
                  </div>
                  <div className="d-flex flex-wrap align-items-center gap-1 column-gap-3">
                    <dt className="d-inline-flex align-items-center gap-2 fs-md fw-normal text-muted-2 mb-0">
                      <i className="icon-16" data-lucide="map-pin" aria-hidden="true" />
                      Location
                    </dt>
                    <dd className="ms-auto min-w-0 fs-md fw-semibold text-title text-truncate mb-0">
                      Bengaluru, India
                    </dd>
                  </div>
                  <div className="d-flex flex-wrap align-items-center gap-1 column-gap-3">
                    <dt className="d-inline-flex align-items-center gap-2 fs-md fw-normal text-muted-2 mb-0">
                      <i className="icon-16" data-lucide="clock" aria-hidden="true" />
                      Timezone
                    </dt>
                    <dd className="ms-auto min-w-0 fs-md fw-semibold text-title text-truncate mb-0">
                      <bdi>
                        IST (GMT+5:30)
                      </bdi>
                    </dd>
                  </div>
                  <div className="d-flex flex-wrap align-items-center gap-1 column-gap-3">
                    <dt className="d-inline-flex align-items-center gap-2 fs-md fw-normal text-muted-2 mb-0">
                      <i className="icon-16" data-lucide="building-2" aria-hidden="true" />
                      Department
                    </dt>
                    <dd className="ms-auto min-w-0 fs-md fw-semibold text-title text-truncate mb-0">
                      {"Design & Research"}
                    </dd>
                  </div>
                  <div className="d-flex flex-wrap align-items-center gap-1 column-gap-3">
                    <dt className="d-inline-flex align-items-center gap-2 fs-md fw-normal text-muted-2 mb-0">
                      <i className="icon-16" data-lucide="user-round-cog" aria-hidden="true" />
                      Reports to
                    </dt>
                    <dd className="ms-auto min-w-0 fs-md fw-semibold text-title text-truncate mb-0">
                      Alex Morgan
                    </dd>
                  </div>
                  <div className="d-flex flex-wrap align-items-center gap-1 column-gap-3">
                    <dt className="d-inline-flex align-items-center gap-2 fs-md fw-normal text-muted-2 mb-0">
                      <i className="icon-16" data-lucide="languages" aria-hidden="true" />
                      Languages
                    </dt>
                    <dd className="ms-auto min-w-0 fs-md fw-semibold text-title text-truncate mb-0">
                      English, Hindi, Kannada
                    </dd>
                  </div>
                  <div className="d-flex flex-wrap align-items-center gap-1 column-gap-3">
                    <dt className="d-inline-flex align-items-center gap-2 fs-md fw-normal text-muted-2 mb-0">
                      <i className="icon-16" data-lucide="calendar-days" aria-hidden="true" />
                      Joined
                    </dt>
                    <dd className="ms-auto min-w-0 fs-md fw-semibold text-title text-truncate mb-0">
                      <bdi>
                        14 March 2022
                      </bdi>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    Profile Strength
                  </h3>
                  <span className="badge-soft tint-success">
                    Strong
                  </span>
                </div>
                <div className="position-relative d-flex justify-content-center">
                  <div id="profileStrengthChart" className="chart-area" />
                  <span className="chart-center">
                    <span className="d-block display-5 fw-bold text-title lh-1">
                      <bdi>
                        82%
                      </bdi>
                    </span>
                    <span className="d-block fs-md text-body-2 mt-1">
                      Complete
                    </span>
                  </span>
                </div>
                <ul className="list-unstyled d-flex flex-column flex-grow-1 gap-2 mb-3">
                  <li className="d-flex align-items-center gap-2">
                    <i className="icon-18 text-cat-emerald" data-lucide="circle-check" aria-hidden="true" />
                    <span className="flex-grow-1 min-w-0 fs-md text-body-2 text-truncate">
                      {"Identity & work email verified"}
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <i className="icon-18 text-cat-emerald" data-lucide="circle-check" aria-hidden="true" />
                    <span className="flex-grow-1 min-w-0 fs-md text-body-2 text-truncate">
                      Two-factor authentication on
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <i className="icon-18 text-cat-emerald" data-lucide="circle-check" aria-hidden="true" />
                    <span className="flex-grow-1 min-w-0 fs-md text-body-2 text-truncate">
                      {"Role & reporting line set"}
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <i className="icon-18 text-muted-2" data-lucide="circle-dashed" aria-hidden="true" />
                    <span className="flex-grow-1 min-w-0 fs-md text-muted-2 text-truncate">
                      Portfolio links not added
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <i className="icon-18 text-muted-2" data-lucide="circle-dashed" aria-hidden="true" />
                    <span className="flex-grow-1 min-w-0 fs-md text-muted-2 text-truncate">
                      Emergency contact missing
                    </span>
                  </li>
                </ul>
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#profileEditModal"
                  className="btn btn-primary-soft w-100 d-inline-flex align-items-center justify-content-center gap-2"
                >
                  <i className="icon-18" data-lucide="sparkles" aria-hidden="true" />
                  Finish your profile
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    {"Skills & Expertise"}
                  </h3>
                  <span className="badge-soft tint-violet">
                    <bdi>
                      12 endorsed
                    </bdi>
                  </span>
                </div>
                <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                  <li>
                    <p className="d-flex align-items-center justify-content-between gap-2 fs-md mb-2">
                      <span className="fw-semibold text-title">
                        Design systems
                      </span>
                      <span className="text-body-2">
                        <bdi>
                          94%
                        </bdi>
                      </span>
                    </p>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="Design systems proficiency"
                      aria-valuenow="94"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-violet" style={{ width: "94%" }} />
                    </div>
                  </li>
                  <li>
                    <p className="d-flex align-items-center justify-content-between gap-2 fs-md mb-2">
                      <span className="fw-semibold text-title">
                        Product research
                      </span>
                      <span className="text-body-2">
                        <bdi>
                          88%
                        </bdi>
                      </span>
                    </p>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="Product research proficiency"
                      aria-valuenow="88"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-cyan" style={{ width: "88%" }} />
                    </div>
                  </li>
                  <li>
                    <p className="d-flex align-items-center justify-content-between gap-2 fs-md mb-2">
                      <span className="fw-semibold text-title">
                        Prototyping
                      </span>
                      <span className="text-body-2">
                        <bdi>
                          81%
                        </bdi>
                      </span>
                    </p>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="Prototyping proficiency"
                      aria-valuenow="81"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-amber" style={{ width: "81%" }} />
                    </div>
                  </li>
                  <li>
                    <p className="d-flex align-items-center justify-content-between gap-2 fs-md mb-2">
                      <span className="fw-semibold text-title">
                        Design ops
                      </span>
                      <span className="text-body-2">
                        <bdi>
                          79%
                        </bdi>
                      </span>
                    </p>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="Design ops proficiency"
                      aria-valuenow="79"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-blue" style={{ width: "79%" }} />
                    </div>
                  </li>
                  <li>
                    <p className="d-flex align-items-center justify-content-between gap-2 fs-md mb-2">
                      <span className="fw-semibold text-title">
                        Front-end craft
                      </span>
                      <span className="text-body-2">
                        <bdi>
                          74%
                        </bdi>
                      </span>
                    </p>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="Front-end craft proficiency"
                      aria-valuenow="74"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-emerald" style={{ width: "74%" }} />
                    </div>
                  </li>
                  <li>
                    <p className="d-flex align-items-center justify-content-between gap-2 fs-md mb-2">
                      <span className="fw-semibold text-title">
                        {"Motion & interaction"}
                      </span>
                      <span className="text-body-2">
                        <bdi>
                          66%
                        </bdi>
                      </span>
                    </p>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="Motion and interaction proficiency"
                      aria-valuenow="66"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-rose" style={{ width: "66%" }} />
                    </div>
                  </li>
                </ul>
                <div className="border-t-soft pt-3 mt-auto">
                  <p className="fs-xs fw-semibold text-uppercase text-muted-2 mb-2">
                    Also works with
                  </p>
                  <ul className="list-unstyled d-flex flex-wrap gap-2 mb-0">
                    <li>
                      <span className="badge-soft tint-blue">
                        Figma
                      </span>
                    </li>
                    <li>
                      <span className="badge-soft tint-emerald">
                        Accessibility
                      </span>
                    </li>
                    <li>
                      <span className="badge-soft tint-magenta">
                        {"AI\u00a0UX"}
                      </span>
                    </li>
                    <li>
                      <span className="badge-soft tint-cyan">
                        Data viz
                      </span>
                    </li>
                    <li>
                      <span className="badge-soft tint-slate">
                        Workshops
                      </span>
                    </li>
                    <li>
                      <span className="badge-soft tint-violet">
                        Mentoring
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Workspace ===== */}
      <section className="mb-4">
        <h2 className="visually-hidden">
          Workspace activity, projects and security
        </h2>
        <div className="card">
          <div className="card-body">
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
              <h3 className="fs-5 fw-bold text-title mb-0">
                Workspace
              </h3>
              <div
                className="nav nav-pills seg-toggle d-inline-flex flex-nowrap mw-100 gap-1 p-1 rounded-pill bg-soft overflow-x-auto scrollbar-none"
                role="tablist"
                aria-label="Profile workspace sections"
              >
                <button
                  type="button"
                  className="nav-link active fw-semibold text-nowrap"
                  id="profileOverviewTab"
                  role="tab"
                  data-bs-toggle="pill"
                  data-bs-target="#profileOverviewPane"
                  aria-controls="profileOverviewPane"
                  aria-selected="true"
                >
                  Overview
                </button>
                <button
                  type="button"
                  className="nav-link fw-semibold text-nowrap"
                  id="profileProjectsTab"
                  role="tab"
                  data-bs-toggle="pill"
                  data-bs-target="#profileProjectsPane"
                  aria-controls="profileProjectsPane"
                  aria-selected="false"
                >
                  Projects
                </button>
                <button
                  type="button"
                  className="nav-link fw-semibold text-nowrap"
                  id="profileSecurityTab"
                  role="tab"
                  data-bs-toggle="pill"
                  data-bs-target="#profileSecurityPane"
                  aria-controls="profileSecurityPane"
                  aria-selected="false"
                >
                  Security
                </button>
              </div>
            </div>
            <div className="tab-content">
              {/* Overview */}
              {" "}
              <div
                className="tab-pane fade show active"
                id="profileOverviewPane"
                role="tabpanel"
                aria-labelledby="profileOverviewTab"
                tabIndex="0"
              >
                <ul className="list-unstyled row row-cols-1 row-cols-sm-3 g-3 mb-3">
                  <li className="col">
                    <div className="bg-plain border-theme rounded-3 h-100 p-3">
                      <p className="d-flex align-items-center gap-2 fs-md text-muted-2 mb-2">
                        <i className="icon-16 text-cat-violet" data-lucide="square-check-big" aria-hidden="true" />
                        Tasks this month
                      </p>
                      <p className="d-flex flex-wrap align-items-center gap-2 mb-0">
                        <span className="fs-4 fw-bold text-title lh-1">
                          <bdi>
                            96
                          </bdi>
                        </span>
                        <span className="badge-soft tint-success d-inline-flex align-items-center gap-1 px-2 py-1 fs-xs">
                          {" "}
                          <i className="icon-12 flip-rtl" data-lucide="trending-up" aria-hidden="true" />
                          <bdi>
                            +12%
                          </bdi>
                          {" "}
                        </span>
                      </p>
                    </div>
                  </li>
                  <li className="col">
                    <div className="bg-plain border-theme rounded-3 h-100 p-3">
                      <p className="d-flex align-items-center gap-2 fs-md text-muted-2 mb-2">
                        <i className="icon-16 text-cat-cyan" data-lucide="timer" aria-hidden="true" />
                        Hours logged
                      </p>
                      <p className="d-flex flex-wrap align-items-center gap-2 mb-0">
                        <span className="fs-4 fw-bold text-title lh-1">
                          <bdi>
                            168
                          </bdi>
                        </span>
                        <span className="badge-soft tint-success d-inline-flex align-items-center gap-1 px-2 py-1 fs-xs">
                          {" "}
                          <i className="icon-12 flip-rtl" data-lucide="trending-up" aria-hidden="true" />
                          <bdi>
                            +4%
                          </bdi>
                          {" "}
                        </span>
                      </p>
                    </div>
                  </li>
                  <li className="col">
                    <div className="bg-plain border-theme rounded-3 h-100 p-3">
                      <p className="d-flex align-items-center gap-2 fs-md text-muted-2 mb-2">
                        <i className="icon-16 text-cat-emerald" data-lucide="target" aria-hidden="true" />
                        On-time delivery
                      </p>
                      <p className="d-flex flex-wrap align-items-center gap-2 mb-0">
                        <span className="fs-4 fw-bold text-title lh-1">
                          <bdi>
                            97%
                          </bdi>
                        </span>
                        <span className="badge-soft tint-success d-inline-flex align-items-center gap-1 px-2 py-1 fs-xs">
                          {" "}
                          <i className="icon-12 flip-rtl" data-lucide="trending-up" aria-hidden="true" />
                          <bdi>
                            +2%
                          </bdi>
                          {" "}
                        </span>
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="bg-plain border-theme rounded-3 p-3">
                  <div className="d-flex flex-wrap align-items-start justify-content-between gap-2 mb-2">
                    <div className="min-w-0">
                      <h4 className="fs-6 fw-bold text-title mb-1">
                        Contribution Activity
                      </h4>
                      <p className="fs-xs text-muted-2 mb-0">
                        Tasks shipped against hours logged, last 12 months
                      </p>
                    </div>
                    <ul className="list-unstyled d-flex flex-wrap align-items-center gap-3 mb-0">
                      <li className="d-inline-flex align-items-center gap-2 fs-md text-body-2">
                        <span className="legend-dot bg-cat-violet" aria-hidden="true" />
                        Tasks shipped
                      </li>
                      <li className="d-inline-flex align-items-center gap-2 fs-md text-body-2">
                        <span className="legend-dot bg-cat-cyan" aria-hidden="true" />
                        Hours logged
                      </li>
                    </ul>
                  </div>
                  <div id="profileActivityChart" className="chart-area" />
                </div>
              </div>
              {" "}
              {/* Projects */}
              {" "}
              <div
                className="tab-pane fade"
                id="profileProjectsPane"
                role="tabpanel"
                aria-labelledby="profileProjectsTab"
                tabIndex="0"
              >
                <ul className="list-unstyled row row-cols-1 row-cols-xl-2 g-3 mb-0">
                  <li className="col">
                    <div className="bg-plain border-theme rounded-3 d-flex flex-column h-100 p-3">
                      <div className="d-flex flex-wrap align-items-start justify-content-between gap-2">
                        <div className="d-flex align-items-center gap-3 min-w-0">
                          <span className="icon-box icon-box-lg tint-violet" aria-hidden="true">
                            <i data-lucide="layout-dashboard" />
                          </span>
                          <div className="min-w-0">
                            <h4 className="fs-6 fw-bold text-title text-truncate mb-1">
                              Vionex Design System 3.0
                            </h4>
                            <p className="fs-sm text-muted-2 text-truncate mb-0">
                              <bdi>
                                Internal platform · 24 components shipped
                              </bdi>
                            </p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center flex-shrink-0 gap-2">
                          <span className="badge-soft tint-success text-nowrap">
                            On track
                          </span>
                          <div className="dropdown">
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle"
                              data-bs-toggle="dropdown"
                              data-dd-fixed=""
                              data-bs-offset="0,8"
                              aria-expanded="false"
                              aria-label="Actions for Vionex Design System 3.0"
                            >
                              <i data-lucide="ellipsis" />
                            </button>
                            {" "}
                            <ul className="dropdown-menu dropdown-menu-end p-2">
                              <li>
                                <button type="button" className="dropdown-item">
                                  <i data-lucide="eye" />
                                  Open project
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item">
                                  <i data-lucide="users" />
                                  Manage team
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item">
                                  <i data-lucide="bell-off" />
                                  Mute updates
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mt-3 mb-2">
                        <span className="fs-md text-body-2">
                          Progress
                        </span>
                        <span className="fs-md fw-semibold text-title">
                          <bdi>
                            78%
                          </bdi>
                        </span>
                      </div>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Vionex Design System 3.0 progress"
                        aria-valuenow="78"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="progress-bar bg-cat-violet" style={{ width: "78%" }} />
                      </div>
                      <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mt-auto pt-3">
                        <span className="avatar-stack">
                          <span className="avatar avatar-xs">
                            <img src="/assets/images/avatar-1.png" width="28" height="28" alt="Alex Morgan" />
                          </span>
                          <span className="avatar avatar-xs">
                            <img src="/assets/images/avatar-2.png" width="28" height="28" alt="Maya Chen" />
                          </span>
                          <span className="avatar avatar-xs">
                            <img src="/assets/images/avatar-3.png" width="28" height="28" alt="Priya Nair" />
                          </span>
                          <span className="avatar avatar-xs bg-grad-1" aria-hidden="true">
                            +5
                          </span>
                        </span>
                        <span className="d-inline-flex align-items-center gap-1 fs-md text-muted-2">
                          <i className="icon-16" data-lucide="calendar-days" aria-hidden="true" />
                          <bdi>
                            Due 12 Sep 2026
                          </bdi>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="col">
                    <div className="bg-plain border-theme rounded-3 d-flex flex-column h-100 p-3">
                      <div className="d-flex flex-wrap align-items-start justify-content-between gap-2">
                        <div className="d-flex align-items-center gap-3 min-w-0">
                          <span className="icon-box icon-box-lg tint-cyan" aria-hidden="true">
                            <i data-lucide="bot" />
                          </span>
                          <div className="min-w-0">
                            <h4 className="fs-6 fw-bold text-title text-truncate mb-1">
                              Model Studio Redesign
                            </h4>
                            <p className="fs-sm text-muted-2 text-truncate mb-0">
                              <bdi>
                                AI Platform · discovery complete
                              </bdi>
                            </p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center flex-shrink-0 gap-2">
                          <span className="badge-soft tint-warning text-nowrap">
                            At risk
                          </span>
                          <div className="dropdown">
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle"
                              data-bs-toggle="dropdown"
                              data-dd-fixed=""
                              data-bs-offset="0,8"
                              aria-expanded="false"
                              aria-label="Actions for Model Studio Redesign"
                            >
                              <i data-lucide="ellipsis" />
                            </button>
                            {" "}
                            <ul className="dropdown-menu dropdown-menu-end p-2">
                              <li>
                                <button type="button" className="dropdown-item">
                                  <i data-lucide="eye" />
                                  Open project
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item">
                                  <i data-lucide="users" />
                                  Manage team
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item">
                                  <i data-lucide="bell-off" />
                                  Mute updates
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mt-3 mb-2">
                        <span className="fs-md text-body-2">
                          Progress
                        </span>
                        <span className="fs-md fw-semibold text-title">
                          <bdi>
                            46%
                          </bdi>
                        </span>
                      </div>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Model Studio Redesign progress"
                        aria-valuenow="46"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="progress-bar bg-cat-cyan" style={{ width: "46%" }} />
                      </div>
                      <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mt-auto pt-3">
                        <span className="avatar-stack">
                          <span className="avatar avatar-xs">
                            <img src="/assets/images/avatar-4.png" width="28" height="28" alt="Marcus Bell" />
                          </span>
                          <span className="avatar avatar-xs">
                            <img src="/assets/images/avatar-2.png" width="28" height="28" alt="Maya Chen" />
                          </span>
                          <span className="avatar avatar-xs bg-grad-3" aria-hidden="true">
                            +3
                          </span>
                        </span>
                        <span className="d-inline-flex align-items-center gap-1 fs-md text-muted-2">
                          <i className="icon-16" data-lucide="calendar-days" aria-hidden="true" />
                          <bdi>
                            Due 30 Sep 2026
                          </bdi>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="col">
                    <div className="bg-plain border-theme rounded-3 d-flex flex-column h-100 p-3">
                      <div className="d-flex flex-wrap align-items-start justify-content-between gap-2">
                        <div className="d-flex align-items-center gap-3 min-w-0">
                          <span className="icon-box icon-box-lg tint-emerald" aria-hidden="true">
                            <i data-lucide="accessibility" />
                          </span>
                          <div className="min-w-0">
                            <h4 className="fs-6 fw-bold text-title text-truncate mb-1">
                              Accessibility Audit — Q3
                            </h4>
                            <p className="fs-sm text-muted-2 text-truncate mb-0">
                              <bdi>
                                Compliance · 118 of 132 checks passed
                              </bdi>
                            </p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center flex-shrink-0 gap-2">
                          <span className="badge-soft tint-success text-nowrap">
                            On track
                          </span>
                          <div className="dropdown">
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle"
                              data-bs-toggle="dropdown"
                              data-dd-fixed=""
                              data-bs-offset="0,8"
                              aria-expanded="false"
                              aria-label="Actions for the Q3 accessibility audit"
                            >
                              <i data-lucide="ellipsis" />
                            </button>
                            {" "}
                            <ul className="dropdown-menu dropdown-menu-end p-2">
                              <li>
                                <button type="button" className="dropdown-item">
                                  <i data-lucide="eye" />
                                  Open project
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item">
                                  <i data-lucide="users" />
                                  Manage team
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item">
                                  <i data-lucide="bell-off" />
                                  Mute updates
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mt-3 mb-2">
                        <span className="fs-md text-body-2">
                          Progress
                        </span>
                        <span className="fs-md fw-semibold text-title">
                          <bdi>
                            89%
                          </bdi>
                        </span>
                      </div>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Q3 accessibility audit progress"
                        aria-valuenow="89"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="progress-bar bg-cat-emerald" style={{ width: "89%" }} />
                      </div>
                      <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mt-auto pt-3">
                        <span className="avatar-stack">
                          <span className="avatar avatar-xs">
                            <img src="/assets/images/avatar-3.png" width="28" height="28" alt="Priya Nair" />
                          </span>
                          <span className="avatar avatar-xs">
                            <img src="/assets/images/avatar-1.png" width="28" height="28" alt="Alex Morgan" />
                          </span>
                          <span className="avatar avatar-xs bg-grad-5" aria-hidden="true">
                            +2
                          </span>
                        </span>
                        <span className="d-inline-flex align-items-center gap-1 fs-md text-muted-2">
                          <i className="icon-16" data-lucide="calendar-days" aria-hidden="true" />
                          <bdi>
                            Due 05 Sep 2026
                          </bdi>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="col">
                    <div className="bg-plain border-theme rounded-3 d-flex flex-column h-100 p-3">
                      <div className="d-flex flex-wrap align-items-start justify-content-between gap-2">
                        <div className="d-flex align-items-center gap-3 min-w-0">
                          <span className="icon-box icon-box-lg tint-amber" aria-hidden="true">
                            <i data-lucide="smartphone" />
                          </span>
                          <div className="min-w-0">
                            <h4 className="fs-6 fw-bold text-title text-truncate mb-1">
                              Mobile Companion App
                            </h4>
                            <p className="fs-sm text-muted-2 text-truncate mb-0">
                              <bdi>
                                New product · beta with 40 testers
                              </bdi>
                            </p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center flex-shrink-0 gap-2">
                          <span className="badge-soft tint-blue text-nowrap">
                            In review
                          </span>
                          <div className="dropdown">
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle"
                              data-bs-toggle="dropdown"
                              data-dd-fixed=""
                              data-bs-offset="0,8"
                              aria-expanded="false"
                              aria-label="Actions for Mobile Companion App"
                            >
                              <i data-lucide="ellipsis" />
                            </button>
                            {" "}
                            <ul className="dropdown-menu dropdown-menu-end p-2">
                              <li>
                                <button type="button" className="dropdown-item">
                                  <i data-lucide="eye" />
                                  Open project
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item">
                                  <i data-lucide="users" />
                                  Manage team
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item">
                                  <i data-lucide="bell-off" />
                                  Mute updates
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mt-3 mb-2">
                        <span className="fs-md text-body-2">
                          Progress
                        </span>
                        <span className="fs-md fw-semibold text-title">
                          <bdi>
                            62%
                          </bdi>
                        </span>
                      </div>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Mobile Companion App progress"
                        aria-valuenow="62"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="progress-bar bg-cat-amber" style={{ width: "62%" }} />
                      </div>
                      <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mt-auto pt-3">
                        <span className="avatar-stack">
                          <span className="avatar avatar-xs">
                            <img src="/assets/images/avatar-2.png" width="28" height="28" alt="Maya Chen" />
                          </span>
                          <span className="avatar avatar-xs">
                            <img src="/assets/images/avatar-4.png" width="28" height="28" alt="Marcus Bell" />
                          </span>
                          <span className="avatar avatar-xs bg-grad-4" aria-hidden="true">
                            +6
                          </span>
                        </span>
                        <span className="d-inline-flex align-items-center gap-1 fs-md text-muted-2">
                          <i className="icon-16" data-lucide="calendar-days" aria-hidden="true" />
                          <bdi>
                            Due 21 Oct 2026
                          </bdi>
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              {" "}
              {/* Security */}
              {" "}
              <div
                className="tab-pane fade"
                id="profileSecurityPane"
                role="tabpanel"
                aria-labelledby="profileSecurityTab"
                tabIndex="0"
                data-bulk-scope=""
              >
                <ul className="list-unstyled row row-cols-1 row-cols-md-3 g-3 mb-4">
                  <li className="col">
                    <div className="bg-plain border-theme rounded-3 d-flex flex-column h-100 p-3">
                      <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                        <span className="icon-box tint-emerald" aria-hidden="true">
                          <i data-lucide="shield-check" />
                        </span>
                        <span className="badge-soft tint-success">
                          Enabled
                        </span>
                      </div>
                      <h4 className="fs-6 fw-bold text-title mb-1">
                        Two-factor auth
                      </h4>
                      <p className="fs-sm text-muted-2 mb-3">
                        Authenticator app, with backup codes saved.
                      </p>
                      <button type="button" className="btn btn-outline-soft btn-sm w-100 mt-auto">
                        Manage
                      </button>
                    </div>
                  </li>
                  <li className="col">
                    <div className="bg-plain border-theme rounded-3 d-flex flex-column h-100 p-3">
                      <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                        <span className="icon-box tint-amber" aria-hidden="true">
                          <i data-lucide="key-round" />
                        </span>
                        <span className="badge-soft tint-warning">
                          <bdi>
                            42 days
                          </bdi>
                        </span>
                      </div>
                      <h4 className="fs-6 fw-bold text-title mb-1">
                        Password
                      </h4>
                      <p className="fs-sm text-muted-2 mb-3">
                        Last changed on
                        {" "}
                        <bdi>
                          16 July 2026
                        </bdi>
                        .
                      </p>
                      <button type="button" className="btn btn-outline-soft btn-sm w-100 mt-auto">
                        Update
                      </button>
                    </div>
                  </li>
                  <li className="col">
                    <div className="bg-plain border-theme rounded-3 d-flex flex-column h-100 p-3">
                      <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                        <span className="icon-box tint-blue" aria-hidden="true">
                          <i data-lucide="mail-check" />
                        </span>
                        <span className="badge-soft tint-info">
                          Verified
                        </span>
                      </div>
                      <h4 className="fs-6 fw-bold text-title mb-1">
                        Recovery email
                      </h4>
                      <p className="fs-sm text-muted-2 mb-3">
                        <bdi>
                          r.backup@outlook.com
                        </bdi>
                      </p>
                      <button type="button" className="btn btn-outline-soft btn-sm w-100 mt-auto">
                        Change
                      </button>
                    </div>
                  </li>
                </ul>
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <div className="min-w-0">
                    <h4 className="fs-6 fw-bold text-title mb-1">
                      Active Sessions
                    </h4>
                    <p className="fs-xs text-muted-2 mb-0">
                      Devices currently signed in to this account
                    </p>
                  </div>
                  <button
                    type="button"
                    className="btn btn-outline-soft btn-sm d-inline-flex align-items-center gap-2 text-nowrap"
                  >
                    <i className="icon-16" data-lucide="log-out" aria-hidden="true" />
                    Sign out everywhere
                  </button>
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
                      className="btn btn-outline-soft btn-sm d-inline-flex align-items-center gap-2 text-nowrap"
                    >
                      <i className="icon-16" data-lucide="power" aria-hidden="true" />
                      Revoke access
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
                      Devices currently signed in to the Ravisha V account
                    </caption>
                    <thead>
                      <tr>
                        <th scope="col">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="profileSessionSelectAll"
                            data-bulk-all=""
                            aria-label="Select all sessions"
                          />
                        </th>
                        <th scope="col">
                          Device
                        </th>
                        <th scope="col">
                          Location
                        </th>
                        <th scope="col">
                          IP address
                        </th>
                        <th scope="col">
                          Last active
                        </th>
                        <th scope="col">
                          Status
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
                            aria-label="Select the MacBook Pro session"
                          />
                        </td>
                        <td>
                          <span className="d-inline-flex align-items-center gap-2">
                            <span className="icon-box icon-box-sm tint-brand" aria-hidden="true">
                              <i data-lucide="laptop" />
                            </span>
                            <span className="d-flex flex-column lh-sm">
                              <span className="fs-md fw-semibold text-title text-nowrap">
                                <bdi>
                                  MacBook Pro 16″
                                </bdi>
                              </span>
                              <span className="fs-xs text-muted-2 text-nowrap">
                                <bdi>
                                  Chrome 128 · macOS 15
                                </bdi>
                              </span>
                            </span>
                          </span>
                        </td>
                        <td>
                          <span className="fs-md text-body-2 text-nowrap">
                            Bengaluru, India
                          </span>
                        </td>
                        <td>
                          <span className="fs-md text-body-2 text-nowrap">
                            <bdi>
                              103.21.58.14
                            </bdi>
                          </span>
                        </td>
                        <td>
                          <span className="fs-md fw-semibold text-title text-nowrap">
                            Active now
                          </span>
                        </td>
                        <td>
                          <span className="badge-soft tint-brand text-nowrap">
                            This device
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            data-bulk-item=""
                            aria-label="Select the iPhone 15 Pro session"
                          />
                        </td>
                        <td>
                          <span className="d-inline-flex align-items-center gap-2">
                            <span className="icon-box icon-box-sm tint-violet" aria-hidden="true">
                              <i data-lucide="smartphone" />
                            </span>
                            <span className="d-flex flex-column lh-sm">
                              <span className="fs-md fw-semibold text-title text-nowrap">
                                <bdi>
                                  iPhone 15 Pro
                                </bdi>
                              </span>
                              <span className="fs-xs text-muted-2 text-nowrap">
                                Vionex for iOS
                              </span>
                            </span>
                          </span>
                        </td>
                        <td>
                          <span className="fs-md text-body-2 text-nowrap">
                            Bengaluru, India
                          </span>
                        </td>
                        <td>
                          <span className="fs-md text-body-2 text-nowrap">
                            <bdi>
                              103.21.58.77
                            </bdi>
                          </span>
                        </td>
                        <td>
                          <span className="fs-md fw-semibold text-title text-nowrap">
                            <bdi>
                              2 hours ago
                            </bdi>
                          </span>
                        </td>
                        <td>
                          <span className="badge-soft tint-success text-nowrap">
                            Signed in
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            data-bulk-item=""
                            aria-label="Select the Windows 11 session"
                          />
                        </td>
                        <td>
                          <span className="d-inline-flex align-items-center gap-2">
                            <span className="icon-box icon-box-sm tint-blue" aria-hidden="true">
                              <i data-lucide="monitor" />
                            </span>
                            <span className="d-flex flex-column lh-sm">
                              <span className="fs-md fw-semibold text-title text-nowrap">
                                <bdi>
                                  Windows 11
                                </bdi>
                              </span>
                              <span className="fs-xs text-muted-2 text-nowrap">
                                <bdi>
                                  Edge 127 · office desk
                                </bdi>
                              </span>
                            </span>
                          </span>
                        </td>
                        <td>
                          <span className="fs-md text-body-2 text-nowrap">
                            Mumbai, India
                          </span>
                        </td>
                        <td>
                          <span className="fs-md text-body-2 text-nowrap">
                            <bdi>
                              49.36.180.92
                            </bdi>
                          </span>
                        </td>
                        <td>
                          <span className="fs-md fw-semibold text-title text-nowrap">
                            <bdi>
                              Yesterday, 18:24
                            </bdi>
                          </span>
                        </td>
                        <td>
                          <span className="badge-soft tint-success text-nowrap">
                            Signed in
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            data-bulk-item=""
                            aria-label="Select the iPad Air session"
                          />
                        </td>
                        <td>
                          <span className="d-inline-flex align-items-center gap-2">
                            <span className="icon-box icon-box-sm tint-slate" aria-hidden="true">
                              <i data-lucide="tablet" />
                            </span>
                            <span className="d-flex flex-column lh-sm">
                              <span className="fs-md fw-semibold text-title text-nowrap">
                                <bdi>
                                  iPad Air
                                </bdi>
                              </span>
                              <span className="fs-xs text-muted-2 text-nowrap">
                                <bdi>
                                  Safari 18
                                </bdi>
                              </span>
                            </span>
                          </span>
                        </td>
                        <td>
                          <span className="fs-md text-body-2 text-nowrap">
                            Pune, India
                          </span>
                        </td>
                        <td>
                          <span className="fs-md text-body-2 text-nowrap">
                            <bdi>
                              106.51.14.203
                            </bdi>
                          </span>
                        </td>
                        <td>
                          <span className="fs-md fw-semibold text-title text-nowrap">
                            <bdi>
                              24 Aug 2026
                            </bdi>
                          </span>
                        </td>
                        <td>
                          <span className="badge-soft tint-warning text-nowrap">
                            Idle
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Recent activity & team ===== */}
      <section className="mb-4">
        <h2 className="visually-hidden">
          Recent activity and team
        </h2>
        <div className="row g-3">
          <div className="col-12 col-xl-8" data-filter-scope="">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    Recent Activity
                  </h3>
                  <div
                    className="nav nav-pills seg-toggle d-inline-flex flex-nowrap mw-100 gap-1 p-1 rounded-pill bg-soft overflow-x-auto scrollbar-none"
                    role="group"
                    aria-label="Filter activity by type"
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
                      data-filter="design"
                      aria-pressed="false"
                    >
                      Design
                    </button>
                    <button
                      type="button"
                      className="nav-link fw-semibold text-nowrap"
                      data-filter="review"
                      aria-pressed="false"
                    >
                      Reviews
                    </button>
                    <button
                      type="button"
                      className="nav-link fw-semibold text-nowrap"
                      data-filter="team"
                      aria-pressed="false"
                    >
                      Team
                    </button>
                  </div>
                </div>
                {/* Each day label carries the tags of the events beneath it, so a
                   filter that empties a day hides its heading with it. */}
                <p className="fs-xs fw-semibold text-uppercase text-muted-2 mb-2" data-filter-tags="design review">
                  <bdi>
                    Today · 27 August 2026
                  </bdi>
                </p>
                <ol className="rail-list list-unstyled d-flex flex-column mb-0">
                  <li className="d-flex align-items-center gap-3 py-2" data-filter-tags="design">
                    <span className="rail-dot bg-cat-violet" aria-hidden="true" />
                    <span className="flex-grow-1 min-w-0 d-flex align-items-center gap-2 gap-sm-3 rounded-3 px-2 px-sm-3 py-2">
                      <span className="icon-box icon-box-sm tint-violet flex-shrink-0" aria-hidden="true">
                        <i data-lucide="component" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-md text-body-2 text-truncate">
                          Published
                          {" "}
                          <span className="fw-semibold text-title">
                            Data Table v4
                          </span>
                          {" "}
                          to the design system
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-truncate">
                          <bdi>
                            Vionex Design System 3.0 · 6 variants, 12 tokens
                          </bdi>
                        </span>
                        {" "}
                      </span>
                      <span className="badge-soft tint-violet d-none d-md-inline-block flex-shrink-0 text-nowrap">
                        Published
                      </span>
                      <span className="fs-xs text-muted-2 text-nowrap flex-shrink-0">
                        <bdi>
                          15:20
                        </bdi>
                      </span>
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3 py-2" data-filter-tags="review">
                    <span className="rail-dot bg-cat-blue" aria-hidden="true" />
                    <span className="flex-grow-1 min-w-0 d-flex align-items-center gap-2 gap-sm-3 rounded-3 px-2 px-sm-3 py-2">
                      <span className="avatar avatar-sm flex-shrink-0">
                        <img src="/assets/images/avatar-2.png" width="34" height="34" alt="" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-md text-body-2 text-truncate">
                          Reviewed
                          {" "}
                          <span className="fw-semibold text-title">
                            Maya Chen
                          </span>
                          ’s prompt-builder flow
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-truncate">
                          <bdi>
                            Model Studio Redesign · 4 comments left
                          </bdi>
                        </span>
                        {" "}
                      </span>
                      <span className="badge-soft tint-blue d-none d-md-inline-block flex-shrink-0 text-nowrap">
                        Approved
                      </span>
                      <span className="fs-xs text-muted-2 text-nowrap flex-shrink-0">
                        <bdi>
                          13:05
                        </bdi>
                      </span>
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3 py-2" data-filter-tags="design">
                    <span className="rail-dot bg-cat-emerald" aria-hidden="true" />
                    <span className="flex-grow-1 min-w-0 d-flex align-items-center gap-2 gap-sm-3 rounded-3 px-2 px-sm-3 py-2">
                      <span className="icon-box icon-box-sm tint-emerald flex-shrink-0" aria-hidden="true">
                        <i data-lucide="accessibility" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-md text-body-2 text-truncate">
                          Closed
                          {" "}
                          <span className="fw-semibold text-title">
                            14 contrast findings
                          </span>
                          {" "}
                          in the audit
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-truncate">
                          <bdi>
                            Accessibility Audit — Q3 · 118 of 132 checks passing
                          </bdi>
                        </span>
                        {" "}
                      </span>
                      <span className="badge-soft tint-emerald d-none d-md-inline-block flex-shrink-0 text-nowrap">
                        Resolved
                      </span>
                      <span className="fs-xs text-muted-2 text-nowrap flex-shrink-0">
                        <bdi>
                          10:42
                        </bdi>
                      </span>
                    </span>
                  </li>
                </ol>
                <p className="fs-xs fw-semibold text-uppercase text-muted-2 mt-3 mb-2" data-filter-tags="team review">
                  <bdi>
                    Yesterday · 26 August 2026
                  </bdi>
                </p>
                <ol className="rail-list list-unstyled d-flex flex-column flex-grow-1 mb-0">
                  <li className="d-flex align-items-center gap-3 py-2" data-filter-tags="team">
                    <span className="rail-dot bg-cat-amber" aria-hidden="true" />
                    <span className="flex-grow-1 min-w-0 d-flex align-items-center gap-2 gap-sm-3 rounded-3 px-2 px-sm-3 py-2">
                      <span className="avatar avatar-sm flex-shrink-0">
                        <img src="/assets/images/avatar-3.png" width="34" height="34" alt="" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-md text-body-2 text-truncate">
                          Welcomed
                          {" "}
                          <span className="fw-semibold text-title">
                            Priya Nair
                          </span>
                          {" "}
                          to the design team
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-truncate">
                          <bdi>
                            {"Design & Research · onboarding buddy assigned"}
                          </bdi>
                        </span>
                        {" "}
                      </span>
                      <span className="badge-soft tint-amber d-none d-md-inline-block flex-shrink-0 text-nowrap">
                        New joiner
                      </span>
                      <span className="fs-xs text-muted-2 text-nowrap flex-shrink-0">
                        <bdi>
                          17:10
                        </bdi>
                      </span>
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3 py-2" data-filter-tags="review">
                    <span className="rail-dot bg-cat-rose" aria-hidden="true" />
                    <span className="flex-grow-1 min-w-0 d-flex align-items-center gap-2 gap-sm-3 rounded-3 px-2 px-sm-3 py-2">
                      <span className="icon-box icon-box-sm tint-rose flex-shrink-0" aria-hidden="true">
                        <i data-lucide="message-square-quote" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-md text-body-2 text-truncate">
                          Requested changes on
                          {" "}
                          <span className="fw-semibold text-title">
                            Mobile onboarding
                          </span>
                        </span>
                        {" "}
                        <span className="d-block bg-soft rounded-2 px-2 py-1 mt-1 fs-xs text-body-2 text-truncate">
                          {" "}
                          <bdi>
                            “Step 3 needs a skip route — testers stalled there twice.”
                          </bdi>
                          {" "}
                        </span>
                        {" "}
                      </span>
                      <span className="badge-soft tint-rose d-none d-md-inline-block flex-shrink-0 text-nowrap">
                        Changes requested
                      </span>
                      <span className="fs-xs text-muted-2 text-nowrap flex-shrink-0">
                        <bdi>
                          11:38
                        </bdi>
                      </span>
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3 py-2" data-filter-tags="team">
                    <span className="rail-dot bg-cat-cyan" aria-hidden="true" />
                    <span className="flex-grow-1 min-w-0 d-flex align-items-center gap-2 gap-sm-3 rounded-3 px-2 px-sm-3 py-2">
                      <span className="icon-box icon-box-sm tint-cyan flex-shrink-0" aria-hidden="true">
                        <i data-lucide="presentation" />
                      </span>
                      <span className="flex-grow-1 min-w-0">
                        {" "}
                        <span className="d-block fs-md text-body-2 text-truncate">
                          Ran the
                          {" "}
                          <span className="fw-semibold text-title">
                            quarterly design review
                          </span>
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-truncate">
                          <bdi>
                            18 attendees · recording shared with the platform group
                          </bdi>
                        </span>
                        {" "}
                      </span>
                      <span className="badge-soft tint-cyan d-none d-md-inline-block flex-shrink-0 text-nowrap">
                        Workshop
                      </span>
                      <span className="fs-xs text-muted-2 text-nowrap flex-shrink-0">
                        <bdi>
                          09:00
                        </bdi>
                      </span>
                    </span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    Team
                  </h3>
                  <span className="badge-soft tint-brand">
                    <bdi>
                      18 members
                    </bdi>
                  </span>
                </div>
                <ul className="list-unstyled d-flex flex-column flex-grow-1 gap-2 mb-3">
                  <li className="flex-grow-1">
                    <a
                      href="#"
                      className="tile-soft border-soft d-flex align-items-center gap-3 h-100 p-2 rounded-3 transition-base"
                    >
                      <span className="avatar flex-shrink-0">
                        <img src="/assets/images/avatar-1.png" width="40" height="40" alt="" />
                      </span>
                      <span className="flex-grow-1 min-w-0 lh-sm">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-title text-truncate">
                          Alex Morgan
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-truncate">
                          Head of Product · Manager
                        </span>
                        {" "}
                      </span>
                      <span className="badge-soft tint-success flex-shrink-0 text-nowrap">
                        Online
                      </span>
                    </a>
                  </li>
                  <li className="flex-grow-1">
                    <a
                      href="#"
                      className="tile-soft border-soft d-flex align-items-center gap-3 h-100 p-2 rounded-3 transition-base"
                    >
                      <span className="avatar flex-shrink-0">
                        <img src="/assets/images/avatar-2.png" width="40" height="40" alt="" />
                      </span>
                      <span className="flex-grow-1 min-w-0 lh-sm">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-title text-truncate">
                          Maya Chen
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-truncate">
                          Senior Product Designer
                        </span>
                        {" "}
                      </span>
                      <span className="badge-soft tint-success flex-shrink-0 text-nowrap">
                        Online
                      </span>
                    </a>
                  </li>
                  <li className="flex-grow-1">
                    <a
                      href="#"
                      className="tile-soft border-soft d-flex align-items-center gap-3 h-100 p-2 rounded-3 transition-base"
                    >
                      <span className="avatar flex-shrink-0">
                        <img src="/assets/images/avatar-3.png" width="40" height="40" alt="" />
                      </span>
                      <span className="flex-grow-1 min-w-0 lh-sm">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-title text-truncate">
                          Priya Nair
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-truncate">
                          UX Researcher · Direct report
                        </span>
                        {" "}
                      </span>
                      <span className="badge-soft tint-amber flex-shrink-0 text-nowrap">
                        Away
                      </span>
                    </a>
                  </li>
                  <li className="flex-grow-1">
                    <a
                      href="#"
                      className="tile-soft border-soft d-flex align-items-center gap-3 h-100 p-2 rounded-3 transition-base"
                    >
                      <span className="avatar flex-shrink-0">
                        <img src="/assets/images/avatar-4.png" width="40" height="40" alt="" />
                      </span>
                      <span className="flex-grow-1 min-w-0 lh-sm">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-title text-truncate">
                          Marcus Bell
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-truncate">
                          Design Engineer · Direct report
                        </span>
                        {" "}
                      </span>
                      <span className="badge-soft tint-slate flex-shrink-0 text-nowrap">
                        Offline
                      </span>
                    </a>
                  </li>
                  <li className="flex-grow-1">
                    <a
                      href="#"
                      className="tile-soft border-soft d-flex align-items-center gap-3 h-100 p-2 rounded-3 transition-base"
                    >
                      <span className="avatar bg-grad-5 flex-shrink-0" aria-hidden="true">
                        SR
                      </span>
                      <span className="flex-grow-1 min-w-0 lh-sm">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-title text-truncate">
                          Sarah Robinson
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-truncate">
                          Content Designer
                        </span>
                        {" "}
                      </span>
                      <span className="badge-soft tint-success flex-shrink-0 text-nowrap">
                        Online
                      </span>
                    </a>
                  </li>
                </ul>
                <a
                  href="#"
                  className="btn btn-outline-soft w-100 d-inline-flex align-items-center justify-content-center gap-2"
                >
                  {" "}View all members{" "}
                  <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                  {" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Edit profile modal ===== */}
      <div
        role="dialog"
        className="modal fade"
        id="profileEditModal"
        tabIndex="-1"
        aria-labelledby="profileEditModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
          <div className="modal-content">
            <div className="modal-header border-b-soft justify-content-between">
              <div>
                <h2 className="modal-title h5 mb-0" id="profileEditModalLabel">
                  Edit Profile
                </h2>
                <p className="fs-md text-muted-2 mb-0">
                  Update the details your teammates see across the workspace
                </p>
              </div>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <form data-modal-form="" noValidate>
              <div className="modal-body">
                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <label htmlFor="pfFullName" className="form-label fs-md fw-semibold text-title">
                      Full name
                    </label>
                    {" "}
                    <input
                      type="text"
                      className="form-control"
                      id="pfFullName"
                      name="pf-full-name"
                      defaultValue="Ravisha V"
                      required
                    />
                    {" "}
                    <div className="invalid-feedback">
                      Enter your full name.
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="pfTitle" className="form-label fs-md fw-semibold text-title">
                      Job title
                    </label>
                    {" "}
                    <input
                      type="text"
                      className="form-control"
                      id="pfTitle"
                      name="pf-title"
                      defaultValue="Lead Product Designer"
                      required
                    />
                    {" "}
                    <div className="invalid-feedback">
                      Enter a job title.
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="pfEmail" className="form-label fs-md fw-semibold text-title">
                      Work email
                    </label>
                    {" "}
                    <input
                      type="email"
                      className="form-control"
                      id="pfEmail"
                      name="pf-email"
                      defaultValue="ravisha@vionex.com"
                      required
                    />
                    {" "}
                    <div className="invalid-feedback">
                      Enter a valid work email address.
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="pfPhone" className="form-label fs-md fw-semibold text-title">
                      Phone
                    </label>
                    {" "}
                    <input
                      type="tel"
                      className="form-control"
                      id="pfPhone"
                      name="pf-phone"
                      defaultValue="+91 80 4718 2204"
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="pfDepartment" className="form-label fs-md fw-semibold text-title">
                      Department
                    </label>
                    {" "}
                    <select
                      className="form-select"
                      id="pfDepartment"
                      name="pf-department"
                      defaultValue={"Design & Research"}
                    >
                      <option>
                        {"Design & Research"}
                      </option>
                      <option>
                        Engineering
                      </option>
                      <option>
                        Product
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
                    <label htmlFor="pfLocation" className="form-label fs-md fw-semibold text-title">
                      Location
                    </label>
                    {" "}
                    <input
                      type="text"
                      className="form-control"
                      id="pfLocation"
                      name="pf-location"
                      defaultValue="Bengaluru, India"
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="pfTimezone" className="form-label fs-md fw-semibold text-title">
                      Timezone
                    </label>
                    {" "}
                    <select
                      className="form-select"
                      id="pfTimezone"
                      name="pf-timezone"
                      defaultValue="IST — India Standard Time (GMT+5:30)"
                    >
                      <option>
                        IST — India Standard Time (GMT+5:30)
                      </option>
                      <option>
                        GMT — Greenwich Mean Time
                      </option>
                      <option>
                        CET — Central European Time (GMT+1)
                      </option>
                      <option>
                        EST — Eastern Standard Time (GMT−5)
                      </option>
                      <option>
                        PST — Pacific Standard Time (GMT−8)
                      </option>
                    </select>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="pfLanguages" className="form-label fs-md fw-semibold text-title">
                      Languages
                    </label>
                    {" "}
                    <input
                      type="text"
                      className="form-control"
                      id="pfLanguages"
                      name="pf-languages"
                      defaultValue="English, Hindi, Kannada"
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="pfBio" className="form-label fs-md fw-semibold text-title">
                      Bio
                    </label>
                    {" "}
                    <textarea
                      className="form-control"
                      id="pfBio"
                      name="pf-bio"
                      rows="3"
                      placeholder="A short introduction for your teammates."
                      defaultValue="Design lead for the Vionex AI platform. I look after the design system, the model-configuration surfaces and the research practice behind them."
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="pfPortfolio" className="form-label fs-md fw-semibold text-title">
                      Portfolio link
                    </label>
                    {" "}
                    <input
                      type="url"
                      className="form-control"
                      id="pfPortfolio"
                      name="pf-portfolio"
                      placeholder="https://ravisha.design/"
                    />
                    {" "}
                    <div className="invalid-feedback">
                      Enter a valid URL, including https://
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="pfVisible"
                        name="pf-visible"
                        defaultChecked
                      />
                      {" "}
                      <label className="form-check-label fs-md" htmlFor="pfVisible">
                        Show my profile in the workspace directory
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
                  <i className="icon-18" data-lucide="check" aria-hidden="true" />
                  Save changes
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

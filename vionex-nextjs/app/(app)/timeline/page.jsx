/* Generated from the Vionex HTML theme by scripts/convert-html.mjs */
import AppShell from "@/components/AppShell";

export const metadata = {
  title: "Vionex — Timeline",
  description: "Vionex enterprise admin dashboard — workspace activity timeline with day-grouped releases, deployments, team and security updates, search and topic filters, built with Bootstrap 5, CSS variables and a scalable design system.",
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
          Timeline
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
              Timeline
            </li>
          </ol>
        </nav>
      </div>
      {/* ===== Activity overview ===== */}
      <section className="mb-4" aria-labelledby="tl-overview-title">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
          <div className="min-w-0">
            <h2 id="tl-overview-title" className="fs-4 fw-bold text-title mb-1">
              Workspace Activity
            </h2>
            <p className="fs-md text-body-2 mb-0">
              Every release, deployment, review and account change across the Vionex workspace — newest first.
            </p>
          </div>
          <div className="d-flex flex-wrap align-items-center gap-2">
            <label htmlFor="tlRange" className="visually-hidden">
              Activity period
            </label>
            <select className="form-select w-auto pe-5" id="tlRange" name="tlRange" defaultValue="30">
              <option value="30">
                Last 30 days
              </option>
              <option value="7">
                Last 7 days
              </option>
              <option value="90">
                This quarter
              </option>
              <option value="365">
                This year
              </option>
            </select>
            <button type="button" className="btn btn-outline-soft d-inline-flex align-items-center gap-2 text-nowrap">
              <i className="icon-18" data-lucide="download" aria-hidden="true" />
              Export
            </button>
            <button type="button" className="btn btn-accent d-inline-flex align-items-center gap-2 text-nowrap">
              <i className="icon-20" data-lucide="plus" aria-hidden="true" />
              New Update
            </button>
          </div>
        </div>
        <ul className="list-unstyled row row-cols-1 row-cols-sm-2 row-cols-xl-4 g-3 mb-0">
          <li className="col">
            <div className="card h-100 overflow-hidden border-2 border-plain shadow-sm text-cat-brand bg-wash-current">
              <div className="card-body d-flex flex-column gap-3 pb-0">
                <div className="d-flex align-items-start justify-content-between gap-3">
                  <div className="min-w-0">
                    <h3 className="fs-6 fw-semibold text-body-2 text-truncate mb-2">
                      Updates Logged
                    </h3>
                    <p className="fs-1 fw-bold text-title lh-1 mb-0">
                      <bdi>
                        1,284
                      </bdi>
                    </p>
                  </div>
                  <span className="icon-box bg-cat-brand text-white rounded-circle" aria-hidden="true">
                    <i data-lucide="activity" />
                  </span>
                </div>
                <div className="d-inline-flex align-self-start align-items-center gap-2 min-w-0 mt-auto p-1 pe-2 bg-plain rounded-pill">
                  <span className="badge-soft tint-success d-inline-flex flex-shrink-0 align-items-center gap-1 px-2 py-1 fs-xs">
                    {" "}
                    <i className="icon-12" data-lucide="trending-up" aria-hidden="true" />
                    <span dir="ltr">
                      +14.2%
                    </span>
                    {" "}
                  </span>
                  <span className="fs-xs fw-medium text-body-2 text-truncate">
                    vs last month
                  </span>
                </div>
              </div>
              <div id="timelineUpdatesSpark" className="chart-area mt-3" />
            </div>
          </li>
          <li className="col">
            <div className="card h-100 overflow-hidden border-2 border-plain shadow-sm text-cat-violet bg-wash-current">
              <div className="card-body d-flex flex-column gap-3 pb-0">
                <div className="d-flex align-items-start justify-content-between gap-3">
                  <div className="min-w-0">
                    <h3 className="fs-6 fw-semibold text-body-2 text-truncate mb-2">
                      Releases Shipped
                    </h3>
                    <p className="fs-1 fw-bold text-title lh-1 mb-0">
                      <bdi>
                        36
                      </bdi>
                    </p>
                  </div>
                  <span className="icon-box bg-cat-violet text-white rounded-circle" aria-hidden="true">
                    <i data-lucide="rocket" />
                  </span>
                </div>
                <div className="d-inline-flex align-self-start align-items-center gap-2 min-w-0 mt-auto p-1 pe-2 bg-plain rounded-pill">
                  <span className="badge-soft tint-success d-inline-flex flex-shrink-0 align-items-center gap-1 px-2 py-1 fs-xs">
                    {" "}
                    <i className="icon-12" data-lucide="trending-up" aria-hidden="true" />
                    <span dir="ltr">
                      +6
                    </span>
                    {" "}
                  </span>
                  <span className="fs-xs fw-medium text-body-2 text-truncate">
                    <bdi>
                      1 rollback
                    </bdi>
                  </span>
                </div>
              </div>
              <div id="timelineReleasesSpark" className="chart-area mt-3" />
            </div>
          </li>
          <li className="col">
            <div className="card h-100 overflow-hidden border-2 border-plain shadow-sm text-cat-blue bg-wash-current">
              <div className="card-body d-flex flex-column gap-3 pb-0">
                <div className="d-flex align-items-start justify-content-between gap-3">
                  <div className="min-w-0">
                    <h3 className="fs-6 fw-semibold text-body-2 text-truncate mb-2">
                      Contributors
                    </h3>
                    <p className="fs-1 fw-bold text-title lh-1 mb-0">
                      <bdi>
                        42
                      </bdi>
                    </p>
                  </div>
                  <span className="icon-box bg-cat-blue text-white rounded-circle" aria-hidden="true">
                    <i data-lucide="users-round" />
                  </span>
                </div>
                <div className="d-inline-flex align-self-start align-items-center gap-2 min-w-0 mt-auto p-1 pe-2 bg-plain rounded-pill">
                  <span className="badge-soft tint-success d-inline-flex flex-shrink-0 align-items-center gap-1 px-2 py-1 fs-xs">
                    {" "}
                    <i className="icon-12" data-lucide="trending-up" aria-hidden="true" />
                    <span dir="ltr">
                      +5
                    </span>
                    {" "}
                  </span>
                  <span className="fs-xs fw-medium text-body-2 text-truncate">
                    across 9 teams
                  </span>
                </div>
              </div>
              <div id="timelineContributorsSpark" className="chart-area mt-3" />
            </div>
          </li>
          <li className="col">
            <div className="card h-100 overflow-hidden border-2 border-plain shadow-sm text-cat-amber bg-wash-current">
              <div className="card-body d-flex flex-column gap-3 pb-0">
                <div className="d-flex align-items-start justify-content-between gap-3">
                  <div className="min-w-0">
                    <h3 className="fs-6 fw-semibold text-body-2 text-truncate mb-2">
                      Open Reviews
                    </h3>
                    <p className="fs-1 fw-bold text-title lh-1 mb-0">
                      <bdi>
                        14
                      </bdi>
                    </p>
                  </div>
                  <span className="icon-box bg-cat-amber text-white rounded-circle" aria-hidden="true">
                    <i data-lucide="message-square-quote" />
                  </span>
                </div>
                <div className="d-inline-flex align-self-start align-items-center gap-2 min-w-0 mt-auto p-1 pe-2 bg-plain rounded-pill">
                  <span className="badge-soft tint-success d-inline-flex flex-shrink-0 align-items-center gap-1 px-2 py-1 fs-xs">
                    {" "}
                    <i className="icon-12" data-lucide="trending-down" aria-hidden="true" />
                    <span dir="ltr">
                      −3
                    </span>
                    {" "}
                  </span>
                  <span className="fs-xs fw-medium text-body-2 text-truncate">
                    <bdi>
                      6h median wait
                    </bdi>
                  </span>
                </div>
              </div>
              <div id="timelineReviewsSpark" className="chart-area mt-3" />
            </div>
          </li>
        </ul>
      </section>
      {/* ===== Activity timeline ===== */}
      <section className="mb-4" aria-labelledby="tl-feed-title" data-search-scope="">
        <div className="min-w-0 mb-3">
          <h2 id="tl-feed-title" className="fs-4 fw-bold text-title mb-1">
            Activity Timeline
          </h2>
          <p className="fs-md text-body-2 mb-0">
            Grouped by day. Search the feed or narrow it to the kind of change you care about.
          </p>
        </div>
        <div className="row g-3 align-items-center mb-3">
          <div className="col-12 col-lg-5 col-xxl-4">
            <label htmlFor="tlSearch" className="visually-hidden">
              Search the timeline
            </label>
            <div className="field-icon" role="search">
              <i className="icon-18" data-lucide="search" aria-hidden="true" />
              {" "}
              <input
                type="search"
                className="form-control rounded-pill"
                id="tlSearch"
                name="tlSearch"
                placeholder="Search updates, people, releases…"
                data-search-input=""
              />
            </div>
          </div>
          <div className="col-12 col-lg-7 col-xxl-8 d-flex flex-wrap align-items-center justify-content-lg-end gap-2 gap-lg-3">
            <span
              className="badge-soft tint-primary d-none d-inline-flex align-items-center gap-2"
              data-search-active=""
            >
              {" "}
              <i className="icon-12" data-lucide="search" aria-hidden="true" />
              {" "}
              <bdi data-search-query="" />
              {" "}
              <button
                type="button"
                className="btn btn-ghost btn-sm d-inline-flex p-0 lh-1 text-reset"
                data-search-clear=""
                aria-label="Clear search"
              >
                <i className="icon-14" data-lucide="x" aria-hidden="true" />
              </button>
              {" "}
            </span>
            <div
              className="nav nav-pills seg-toggle d-inline-flex flex-nowrap gap-1 p-1 mw-100 rounded-pill bg-soft overflow-x-auto scrollbar-none"
              role="group"
              aria-label="Filter the timeline by update type"
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
                data-filter="release"
                aria-pressed="false"
              >
                Releases
              </button>
              <button
                type="button"
                className="nav-link fw-semibold text-nowrap"
                data-filter="deploy"
                aria-pressed="false"
              >
                Deployments
              </button>
              <button
                type="button"
                className="nav-link fw-semibold text-nowrap"
                data-filter="team"
                aria-pressed="false"
              >
                Team
              </button>
              <button
                type="button"
                className="nav-link fw-semibold text-nowrap"
                data-filter="security"
                aria-pressed="false"
              >
                Security
              </button>
              <button
                type="button"
                className="nav-link fw-semibold text-nowrap"
                data-filter="billing"
                aria-pressed="false"
              >
                Billing
              </button>
            </div>
          </div>
        </div>
        <div className="row g-3">
          {/* Feed */}
          <div className="col-12 col-xl-8">
            <ol className="timeline list-unstyled mb-0">
              {/* Day marker — carries the tags of the entries beneath it, so a
                 filter that empties a day hides its heading with it. */}
              {" "}
              <li className="timeline-item pb-3" data-filter-tags="deploy security team">
                <span className="timeline-node icon-box tint-primary border-current" aria-hidden="true">
                  <i data-lucide="calendar-days" />
                </span>
                <div className="d-flex flex-wrap align-items-center gap-2 py-2">
                  <h3 className="fs-6 fw-bold text-title mb-0">
                    Today
                  </h3>
                  <span className="fs-md text-muted-2">
                    {"·\u00a0"}
                    <bdi>
                      31 August 2026
                    </bdi>
                  </span>
                  <span className="badge-soft tint-primary text-nowrap">
                    <bdi>
                      4 updates
                    </bdi>
                  </span>
                </div>
              </li>
              {" "}
              <li className="timeline-item pb-3" data-filter-tags="team">
                <span className="timeline-node icon-box tint-rose border-current" aria-hidden="true">
                  <i data-lucide="message-square-quote" />
                </span>
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex flex-wrap align-items-start justify-content-between gap-2 mb-2">
                      <h3 className="flex-grow-1 min-w-0 fs-6 fw-semibold text-title mb-0">
                        Requested changes on
                        {" "}
                        <span className="text-brand">
                          Model Studio redesign
                        </span>
                      </h3>
                      <span className="d-flex align-items-center gap-2 flex-shrink-0">
                        <span className="badge-soft tint-rose text-nowrap">
                          Changes requested
                        </span>
                        <span className="fs-xs text-muted-2 text-nowrap">
                          <bdi>
                            14:05
                          </bdi>
                        </span>
                      </span>
                    </div>
                    <p className="fs-md text-body-2 mb-2">
                      Three of the four prompt-builder screens are ready to merge; the run history panel still loses its scroll position when a job finishes.
                    </p>
                    <blockquote className="bg-soft rounded-2 px-3 py-2 mb-3">
                      <p className="fs-md text-body-2 mb-0">
                        “Pin the list to the newest run instead of resetting it — testers lost their place twice in the same session.”
                      </p>
                    </blockquote>
                    <div className="d-flex flex-wrap align-items-center gap-2 gap-md-3 pt-3 border-t-soft">
                      <span className="d-flex align-items-center gap-2 min-w-0">
                        <span className="avatar avatar-xs">
                          <img src="/assets/images/avatar-2.png" width="28" height="28" alt="" />
                        </span>
                        <span className="fs-xs text-muted-2 text-truncate">
                          Maya Chen · Design
                        </span>
                      </span>
                      <span className="badge-soft tint-slate d-inline-flex align-items-center gap-1 text-nowrap">
                        <i className="icon-12" data-lucide="paperclip" aria-hidden="true" />
                        <bdi>
                          3 files
                        </bdi>
                      </span>
                      <a
                        href="#"
                        className="d-inline-flex align-items-center gap-1 fs-md fw-medium text-brand text-nowrap ms-md-auto"
                      >
                        Open review
                        <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              {" "}
              <li className="timeline-item pb-3" data-filter-tags="team">
                <span className="timeline-node icon-box tint-violet border-current" aria-hidden="true">
                  <i data-lucide="user-round-plus" />
                </span>
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex flex-wrap align-items-start justify-content-between gap-2 mb-2">
                      <h3 className="flex-grow-1 min-w-0 fs-6 fw-semibold text-title mb-0">
                        <span className="text-brand">
                          Priya Nair
                        </span>
                        {" "}
                        joined AI Research
                      </h3>
                      <span className="d-flex align-items-center gap-2 flex-shrink-0">
                        <span className="badge-soft tint-violet text-nowrap">
                          New joiner
                        </span>
                        <span className="fs-xs text-muted-2 text-nowrap">
                          <bdi>
                            11:20
                          </bdi>
                        </span>
                      </span>
                    </div>
                    <p className="fs-md text-body-2 mb-3">
                      Starting as Senior Research Engineer on the evaluation team. Workspace access, on-call rota and an onboarding buddy are already assigned.
                    </p>
                    <div className="d-flex flex-wrap align-items-center gap-2 gap-md-3 pt-3 border-t-soft">
                      <span className="d-flex align-items-center gap-2 min-w-0">
                        <span className="avatar-stack">
                          <span className="avatar avatar-xs">
                            <img src="/assets/images/avatar-1.png" width="28" height="28" alt="" />
                          </span>
                          <span className="avatar avatar-xs">
                            <img src="/assets/images/avatar-3.png" width="28" height="28" alt="" />
                          </span>
                          <span className="avatar avatar-xs">
                            <img src="/assets/images/avatar-4.png" width="28" height="28" alt="" />
                          </span>
                        </span>
                        <span className="fs-xs text-muted-2 text-truncate">
                          <bdi>
                            Welcomed by 8 teammates
                          </bdi>
                        </span>
                      </span>
                      <a
                        href="/user-profile"
                        className="d-inline-flex align-items-center gap-1 fs-md fw-medium text-brand text-nowrap ms-md-auto"
                      >
                        Open profile
                        <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              {" "}
              <li className="timeline-item pb-3" data-filter-tags="deploy">
                <span className="timeline-node icon-box tint-emerald border-current" aria-hidden="true">
                  <i data-lucide="rocket" />
                </span>
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex flex-wrap align-items-start justify-content-between gap-2 mb-2">
                      <h3 className="flex-grow-1 min-w-0 fs-6 fw-semibold text-title mb-0">
                        Deployed
                        {" "}
                        <span className="text-brand">
                          Atlas-7 v2.4
                        </span>
                        {" "}
                        to production
                      </h3>
                      <span className="d-flex align-items-center gap-2 flex-shrink-0">
                        <span className="badge-soft tint-emerald text-nowrap">
                          Deployed
                        </span>
                        <span className="fs-xs text-muted-2 text-nowrap">
                          <bdi>
                            09:42
                          </bdi>
                        </span>
                      </span>
                    </div>
                    <p className="fs-md text-body-2 mb-3">
                      Rollout completed across all six regions with no error-budget burn. Response time at p95 came down
                      {" "}
                      <bdi>
                        {"38\u00a0ms"}
                      </bdi>
                      {" "}
                      against the v2.3 baseline.
                    </p>
                    <dl className="row row-cols-3 g-2 mb-3">
                      <div className="col">
                        <dt className="fs-xs fw-medium text-muted-2 mb-1">
                          Regions
                        </dt>
                        <dd className="fs-md fw-semibold text-title mb-0">
                          <bdi>
                            6 of 6
                          </bdi>
                        </dd>
                      </div>
                      <div className="col">
                        <dt className="fs-xs fw-medium text-muted-2 mb-1">
                          Duration
                        </dt>
                        <dd className="fs-md fw-semibold text-title mb-0">
                          <bdi>
                            21 min
                          </bdi>
                        </dd>
                      </div>
                      <div className="col">
                        <dt className="fs-xs fw-medium text-muted-2 mb-1">
                          Error rate
                        </dt>
                        <dd className="fs-md fw-semibold text-success mb-0">
                          <bdi>
                            0.01%
                          </bdi>
                        </dd>
                      </div>
                    </dl>
                    <div className="d-flex flex-wrap align-items-center gap-2 gap-md-3 pt-3 border-t-soft">
                      <span className="d-flex align-items-center gap-2 min-w-0">
                        <span className="avatar avatar-xs">
                          <img src="/assets/images/avatar-user.png" width="28" height="28" alt="" />
                        </span>
                        <span className="fs-xs text-muted-2 text-truncate">
                          Ravisha V · Platform
                        </span>
                      </span>
                      <span className="badge-soft tint-slate d-inline-flex align-items-center gap-1 text-nowrap">
                        <i className="icon-12" data-lucide="git-branch" aria-hidden="true" />
                        <bdi>
                          release/2.4.0
                        </bdi>
                      </span>
                      <a
                        href="#"
                        className="d-inline-flex align-items-center gap-1 fs-md fw-medium text-brand text-nowrap ms-md-auto"
                      >
                        View release
                        <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              {" "}
              <li className="timeline-item pb-3" data-filter-tags="security">
                <span className="timeline-node icon-box tint-blue border-current" aria-hidden="true">
                  <i data-lucide="shield-check" />
                </span>
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex flex-wrap align-items-start justify-content-between gap-2 mb-2">
                      <h3 className="flex-grow-1 min-w-0 fs-6 fw-semibold text-title mb-0">
                        Rotated the production signing keys
                      </h3>
                      <span className="d-flex align-items-center gap-2 flex-shrink-0">
                        <span className="badge-soft tint-blue text-nowrap">
                          Security
                        </span>
                        <span className="fs-xs text-muted-2 text-nowrap">
                          <bdi>
                            08:15
                          </bdi>
                        </span>
                      </span>
                    </div>
                    <p className="fs-md text-body-2 mb-3">
                      The scheduled 90-day rotation ran for the API and webhook signing keys. Retired keys keep verifying until
                      {" "}
                      <bdi>
                        07 September 2026
                      </bdi>
                      , so nothing has to be redeployed today.
                    </p>
                    <div className="d-flex flex-wrap align-items-center gap-2 gap-md-3 pt-3 border-t-soft">
                      <span className="d-flex align-items-center gap-2 min-w-0">
                        <span className="icon-box icon-box-sm tint-blue" aria-hidden="true">
                          <i data-lucide="key-round" />
                        </span>
                        <span className="fs-xs text-muted-2 text-truncate">
                          Automated · Vionex Secrets
                        </span>
                      </span>
                      <a
                        href="#"
                        className="d-inline-flex align-items-center gap-1 fs-md fw-medium text-brand text-nowrap ms-md-auto"
                      >
                        View audit entry
                        <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              {" "}
              <li className="timeline-item pb-3" data-filter-tags="release deploy billing team">
                <span className="timeline-node icon-box tint-primary border-current" aria-hidden="true">
                  <i data-lucide="calendar-days" />
                </span>
                <div className="d-flex flex-wrap align-items-center gap-2 py-2">
                  <h3 className="fs-6 fw-bold text-title mb-0">
                    Yesterday
                  </h3>
                  <span className="fs-md text-muted-2">
                    {"·\u00a0"}
                    <bdi>
                      30 August 2026
                    </bdi>
                  </span>
                  <span className="badge-soft tint-primary text-nowrap">
                    <bdi>
                      4 updates
                    </bdi>
                  </span>
                </div>
              </li>
              {" "}
              <li className="timeline-item pb-3" data-filter-tags="release">
                <span className="timeline-node icon-box tint-violet border-current" aria-hidden="true">
                  <i data-lucide="git-merge" />
                </span>
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex flex-wrap align-items-start justify-content-between gap-2 mb-2">
                      <h3 className="flex-grow-1 min-w-0 fs-6 fw-semibold text-title mb-0">
                        Merged
                        {" "}
                        <span className="text-brand">
                          #4127 — Streaming responses for the Chat API
                        </span>
                      </h3>
                      <span className="d-flex align-items-center gap-2 flex-shrink-0">
                        <span className="badge-soft tint-violet text-nowrap">
                          Merged
                        </span>
                        <span className="fs-xs text-muted-2 text-nowrap">
                          <bdi>
                            17:48
                          </bdi>
                        </span>
                      </span>
                    </div>
                    <p className="fs-md text-body-2 mb-3">
                      Token-by-token streaming is now the default for every chat completion, with a compatibility flag for clients still reading whole responses.
                    </p>
                    <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
                      <span className="badge-soft tint-emerald d-inline-flex align-items-center gap-1 text-nowrap">
                        <i className="icon-12" data-lucide="plus" aria-hidden="true" />
                        <bdi>
                          1,284
                        </bdi>
                      </span>
                      <span className="badge-soft tint-rose d-inline-flex align-items-center gap-1 text-nowrap">
                        <i className="icon-12" data-lucide="minus" aria-hidden="true" />
                        <bdi>
                          318
                        </bdi>
                      </span>
                      <span className="badge-soft tint-slate d-inline-flex align-items-center gap-1 text-nowrap">
                        <i className="icon-12" data-lucide="file-text" aria-hidden="true" />
                        <bdi>
                          24 files
                        </bdi>
                      </span>
                    </div>
                    <div className="d-flex flex-wrap align-items-center gap-2 gap-md-3 pt-3 border-t-soft">
                      <span className="d-flex align-items-center gap-2 min-w-0">
                        <span className="avatar-stack">
                          <span className="avatar avatar-xs">
                            <img src="/assets/images/avatar-3.png" width="28" height="28" alt="" />
                          </span>
                          <span className="avatar avatar-xs">
                            <img src="/assets/images/avatar-user.png" width="28" height="28" alt="" />
                          </span>
                        </span>
                        <span className="fs-xs text-muted-2 text-truncate">
                          <bdi>
                            Approved by 2 reviewers
                          </bdi>
                        </span>
                      </span>
                      <a
                        href="#"
                        className="d-inline-flex align-items-center gap-1 fs-md fw-medium text-brand text-nowrap ms-md-auto"
                      >
                        View pull request
                        <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              {" "}
              <li className="timeline-item pb-3" data-filter-tags="deploy">
                <span className="timeline-node icon-box tint-danger border-current" aria-hidden="true">
                  <i data-lucide="undo-2" />
                </span>
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex flex-wrap align-items-start justify-content-between gap-2 mb-2">
                      <h3 className="flex-grow-1 min-w-0 fs-6 fw-semibold text-title mb-0">
                        Rolled back
                        {" "}
                        <span className="text-brand">
                          Vector Index v9
                        </span>
                        {" "}
                        after latency spiked
                      </h3>
                      <span className="d-flex align-items-center gap-2 flex-shrink-0">
                        <span className="badge-soft tint-danger text-nowrap">
                          Rolled back
                        </span>
                        <span className="fs-xs text-muted-2 text-nowrap">
                          <bdi>
                            15:12
                          </bdi>
                        </span>
                      </span>
                    </div>
                    <p className="fs-md text-body-2 mb-3">
                      Search p99 tripled within four minutes of the canary. Traffic was returned to v8 automatically and stayed degraded for
                      {" "}
                      <bdi>
                        11 minutes
                      </bdi>
                      {" "}
                      in the EU region only.
                    </p>
                    <div className="d-flex flex-wrap align-items-center gap-2 gap-md-3 pt-3 border-t-soft">
                      <span className="d-flex align-items-center gap-2 min-w-0">
                        <span className="avatar avatar-xs">
                          <img src="/assets/images/avatar-3.png" width="28" height="28" alt="" />
                        </span>
                        <span className="fs-xs text-muted-2 text-truncate">
                          Arjun Patel · Infrastructure
                        </span>
                      </span>
                      <span className="badge-soft tint-danger d-inline-flex align-items-center gap-1 text-nowrap">
                        <i className="icon-12" data-lucide="triangle-alert" aria-hidden="true" />
                        <bdi>
                          INC-318
                        </bdi>
                      </span>
                      <a
                        href="#"
                        className="d-inline-flex align-items-center gap-1 fs-md fw-medium text-brand text-nowrap ms-md-auto"
                      >
                        Read the postmortem
                        <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              {" "}
              <li className="timeline-item pb-3" data-filter-tags="billing">
                <span className="timeline-node icon-box tint-amber border-current" aria-hidden="true">
                  <i data-lucide="credit-card" />
                </span>
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex flex-wrap align-items-start justify-content-between gap-2 mb-2">
                      <h3 className="flex-grow-1 min-w-0 fs-6 fw-semibold text-title mb-0">
                        Invoice
                        {" "}
                        <span className="text-brand">
                          INV-2048
                        </span>
                        {" "}
                        marked as paid
                      </h3>
                      <span className="d-flex align-items-center gap-2 flex-shrink-0">
                        <span className="badge-soft tint-amber text-nowrap">
                          Payment
                        </span>
                        <span className="fs-xs text-muted-2 text-nowrap">
                          <bdi>
                            12:30
                          </bdi>
                        </span>
                      </span>
                    </div>
                    <p className="fs-md text-body-2 mb-3">
                      <bdi>
                        $12,480
                      </bdi>
                      {" "}
                      received from Northwind Analytics for the August enterprise seats. The account is settled in full with nothing outstanding.
                    </p>
                    <div className="d-flex flex-wrap align-items-center gap-2 gap-md-3 pt-3 border-t-soft">
                      <span className="d-flex align-items-center gap-2 min-w-0">
                        <span className="icon-box icon-box-sm tint-amber" aria-hidden="true">
                          <i data-lucide="building-2" />
                        </span>
                        <span className="fs-xs text-muted-2 text-truncate">
                          Northwind Analytics · Enterprise
                        </span>
                      </span>
                      <a
                        href="/invoice-list"
                        className="d-inline-flex align-items-center gap-1 fs-md fw-medium text-brand text-nowrap ms-md-auto"
                      >
                        Open invoice
                        <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              {" "}
              <li className="timeline-item pb-3" data-filter-tags="team">
                <span className="timeline-node icon-box tint-cyan border-current" aria-hidden="true">
                  <i data-lucide="users-round" />
                </span>
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex flex-wrap align-items-start justify-content-between gap-2 mb-2">
                      <h3 className="flex-grow-1 min-w-0 fs-6 fw-semibold text-title mb-0">
                        Ran the quarterly design review
                      </h3>
                      <span className="d-flex align-items-center gap-2 flex-shrink-0">
                        <span className="badge-soft tint-cyan text-nowrap">
                          Workshop
                        </span>
                        <span className="fs-xs text-muted-2 text-nowrap">
                          <bdi>
                            10:05
                          </bdi>
                        </span>
                      </span>
                    </div>
                    <p className="fs-md text-body-2 mb-3">
                      Eighteen attendees across design, research and platform. The recording and the decision log are shared with everyone in the workspace.
                    </p>
                    <div className="d-flex flex-wrap align-items-center gap-2 gap-md-3 pt-3 border-t-soft">
                      <span className="d-flex align-items-center gap-2 min-w-0">
                        <span className="avatar avatar-xs">
                          <img src="/assets/images/avatar-2.png" width="28" height="28" alt="" />
                        </span>
                        <span className="fs-xs text-muted-2 text-truncate">
                          Maya Chen · Design
                        </span>
                      </span>
                      <span className="badge-soft tint-slate d-inline-flex align-items-center gap-1 text-nowrap">
                        <i className="icon-12" data-lucide="clock" aria-hidden="true" />
                        <bdi>
                          52 min
                        </bdi>
                      </span>
                      <a
                        href="#"
                        className="d-inline-flex align-items-center gap-1 fs-md fw-medium text-brand text-nowrap ms-md-auto"
                      >
                        Watch the recording
                        <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              {" "}
              <li className="timeline-item pb-3" data-filter-tags="security release">
                <span className="timeline-node icon-box tint-primary border-current" aria-hidden="true">
                  <i data-lucide="calendar-days" />
                </span>
                <div className="d-flex flex-wrap align-items-center gap-2 py-2">
                  <h3 className="fs-6 fw-bold text-title mb-0">
                    Saturday
                  </h3>
                  <span className="fs-md text-muted-2">
                    {"·\u00a0"}
                    <bdi>
                      29 August 2026
                    </bdi>
                  </span>
                  <span className="badge-soft tint-primary text-nowrap">
                    <bdi>
                      2 updates
                    </bdi>
                  </span>
                </div>
              </li>
              {" "}
              <li className="timeline-item pb-3" data-filter-tags="security">
                <span className="timeline-node icon-box tint-blue border-current" aria-hidden="true">
                  <i data-lucide="lock" />
                </span>
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex flex-wrap align-items-start justify-content-between gap-2 mb-2">
                      <h3 className="flex-grow-1 min-w-0 fs-6 fw-semibold text-title mb-0">
                        Single sign-on is now required for every member
                      </h3>
                      <span className="d-flex align-items-center gap-2 flex-shrink-0">
                        <span className="badge-soft tint-blue text-nowrap">
                          Policy
                        </span>
                        <span className="fs-xs text-muted-2 text-nowrap">
                          <bdi>
                            16:40
                          </bdi>
                        </span>
                      </span>
                    </div>
                    <p className="fs-md text-body-2 mb-3">
                      Password sign-in has been switched off for the workspace. All
                      {" "}
                      <bdi>
                        42 members
                      </bdi>
                      {" "}
                      completed the move to Okta before the cut-over, so no accounts were locked out.
                    </p>
                    <div className="d-flex flex-wrap align-items-center gap-2 gap-md-3 pt-3 border-t-soft">
                      <span className="d-flex align-items-center gap-2 min-w-0">
                        <span className="avatar avatar-xs">
                          <img src="/assets/images/avatar-user.png" width="28" height="28" alt="" />
                        </span>
                        <span className="fs-xs text-muted-2 text-truncate">
                          Ravisha V · Administrator
                        </span>
                      </span>
                      <a
                        href="#"
                        className="d-inline-flex align-items-center gap-1 fs-md fw-medium text-brand text-nowrap ms-md-auto"
                      >
                        Review policy
                        <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              {" "}
              <li className="timeline-item pb-3" data-filter-tags="release">
                <span className="timeline-node icon-box tint-emerald border-current" aria-hidden="true">
                  <i data-lucide="milestone" />
                </span>
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex flex-wrap align-items-start justify-content-between gap-2 mb-2">
                      <h3 className="flex-grow-1 min-w-0 fs-6 fw-semibold text-title mb-0">
                        Shipped
                        {" "}
                        <span className="text-brand">
                          {"Timeline & Audit Log"}
                        </span>
                        {" "}
                        to general availability
                      </h3>
                      <span className="d-flex align-items-center gap-2 flex-shrink-0">
                        <span className="badge-soft tint-emerald text-nowrap">
                          Released
                        </span>
                        <span className="fs-xs text-muted-2 text-nowrap">
                          <bdi>
                            09:15
                          </bdi>
                        </span>
                      </span>
                    </div>
                    <p className="fs-md text-body-2 mb-3">
                      Out of preview after six weeks with
                      {" "}
                      <bdi>
                        214 workspaces
                      </bdi>
                      {" "}
                      on the beta. Retention stays at ninety days on Pro and two years on Enterprise.
                    </p>
                    <div className="d-flex flex-wrap align-items-center gap-2 gap-md-3 pt-3 border-t-soft">
                      <span className="d-flex align-items-center gap-2 min-w-0">
                        <span className="icon-box icon-box-sm tint-emerald" aria-hidden="true">
                          <i data-lucide="sparkles" />
                        </span>
                        <span className="fs-xs text-muted-2 text-truncate">
                          Product · Platform
                        </span>
                      </span>
                      <a
                        href="#"
                        className="d-inline-flex align-items-center gap-1 fs-md fw-medium text-brand text-nowrap ms-md-auto"
                      >
                        Read the changelog
                        <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ol>
            {/* Earlier days, revealed by the control below */}
            {" "}
            <div className="collapse" id="tlEarlier">
              <ol className="timeline list-unstyled mb-0">
                <li className="timeline-item pb-3" data-filter-tags="deploy billing">
                  <span className="timeline-node icon-box tint-primary border-current" aria-hidden="true">
                    <i data-lucide="calendar-days" />
                  </span>
                  <div className="d-flex flex-wrap align-items-center gap-2 py-2">
                    <h3 className="fs-6 fw-bold text-title mb-0">
                      Friday
                    </h3>
                    <span className="fs-md text-muted-2">
                      {"·\u00a0"}
                      <bdi>
                        28 August 2026
                      </bdi>
                    </span>
                    <span className="badge-soft tint-primary text-nowrap">
                      <bdi>
                        2 updates
                      </bdi>
                    </span>
                  </div>
                </li>
                {" "}
                <li className="timeline-item pb-3" data-filter-tags="deploy">
                  <span className="timeline-node icon-box tint-emerald border-current" aria-hidden="true">
                    <i data-lucide="server" />
                  </span>
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex flex-wrap align-items-start justify-content-between gap-2 mb-2">
                        <h3 className="flex-grow-1 min-w-0 fs-6 fw-semibold text-title mb-0">
                          Promoted
                          {" "}
                          <span className="text-brand">
                            Atlas-7 v2.4
                          </span>
                          {" "}
                          to the staging fleet
                        </h3>
                        <span className="d-flex align-items-center gap-2 flex-shrink-0">
                          <span className="badge-soft tint-emerald text-nowrap">
                            Staging
                          </span>
                          <span className="fs-xs text-muted-2 text-nowrap">
                            <bdi>
                              18:20
                            </bdi>
                          </span>
                        </span>
                      </div>
                      <p className="fs-md text-body-2 mb-3">
                        Soak test ran for
                        {" "}
                        <bdi>
                          36 hours
                        </bdi>
                        {" "}
                        against replayed production traffic. Every regression suite passed, clearing the release for Monday.
                      </p>
                      <div className="d-flex flex-wrap align-items-center gap-2 gap-md-3 pt-3 border-t-soft">
                        <span className="d-flex align-items-center gap-2 min-w-0">
                          <span className="avatar avatar-xs">
                            <img src="/assets/images/avatar-3.png" width="28" height="28" alt="" />
                          </span>
                          <span className="fs-xs text-muted-2 text-truncate">
                            Arjun Patel · Infrastructure
                          </span>
                        </span>
                        <a
                          href="#"
                          className="d-inline-flex align-items-center gap-1 fs-md fw-medium text-brand text-nowrap ms-md-auto"
                        >
                          View run
                          <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                {" "}
                <li className="timeline-item pb-3" data-filter-tags="billing">
                  <span className="timeline-node icon-box tint-amber border-current" aria-hidden="true">
                    <i data-lucide="zap" />
                  </span>
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex flex-wrap align-items-start justify-content-between gap-2 mb-2">
                        <h3 className="flex-grow-1 min-w-0 fs-6 fw-semibold text-title mb-0">
                          Compute budget alert cleared
                        </h3>
                        <span className="d-flex align-items-center gap-2 flex-shrink-0">
                          <span className="badge-soft tint-amber text-nowrap">
                            Usage
                          </span>
                          <span className="fs-xs text-muted-2 text-nowrap">
                            <bdi>
                              09:40
                            </bdi>
                          </span>
                        </span>
                      </div>
                      <p className="fs-md text-body-2 mb-3">
                        Training jobs were rescheduled off peak hours, taking GPU spend back to
                        {" "}
                        <bdi>
                          78%
                        </bdi>
                        {" "}of the monthly budget from a high of{" "}
                        <bdi>
                          94%
                        </bdi>
                        .
                      </p>
                      <div className="d-flex flex-wrap align-items-center gap-2 gap-md-3 pt-3 border-t-soft">
                        <span className="d-flex align-items-center gap-2 min-w-0">
                          <span className="icon-box icon-box-sm tint-amber" aria-hidden="true">
                            <i data-lucide="database" />
                          </span>
                          <span className="fs-xs text-muted-2 text-truncate">
                            Automated · Cost Guard
                          </span>
                        </span>
                        <a
                          href="/pricing"
                          className="d-inline-flex align-items-center gap-1 fs-md fw-medium text-brand text-nowrap ms-md-auto"
                        >
                          Review plan
                          <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
            {" "}
            {/* Empty state — shown by the shared search module when nothing matches */}
            {" "}
            <div className="d-none" data-search-empty="">
              <div className="card border-dashed">
                <div className="card-body text-center py-5">
                  <span className="icon-box icon-box-xl tint-primary mx-auto mb-3" aria-hidden="true">
                    <i data-lucide="search-x" />
                  </span>
                  <h3 className="fs-5 fw-bold text-title mb-1">
                    Nothing matched that
                  </h3>
                  <p className="fs-md text-muted-2 mb-3">
                    No updates in this period match
                    <span className="d-none" data-search-active="">
                      {" "}
                      “
                      <bdi data-search-query="" />
                      ”
                    </span>
                    . Try a shorter phrase or pick another type.
                  </p>
                  <button
                    type="button"
                    className="btn btn-outline-soft d-inline-flex align-items-center gap-2 mx-auto"
                    data-search-clear=""
                  >
                    <i className="icon-18" data-lucide="rotate-ccw" aria-hidden="true" />
                    Clear search
                  </button>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center pt-2">
              <button
                type="button"
                className="btn btn-outline-soft d-inline-flex align-items-center gap-2"
                data-bs-toggle="collapse"
                data-bs-target="#tlEarlier"
                aria-expanded="false"
                aria-controls="tlEarlier"
              >
                Show earlier activity
                {" "}
                <i className="dd-caret icon-18" data-lucide="chevron-down" aria-hidden="true" />
              </button>
            </div>
          </div>
          {/* Side rail */}
          <div className="col-12 col-xl-4 d-flex flex-column gap-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    Release Milestones
                  </h3>
                  <span className="badge-soft tint-primary text-nowrap">
                    <bdi>
                      Q3 2026
                    </bdi>
                  </span>
                </div>
                <ol className="timeline timeline-sm list-unstyled mb-0">
                  <li className="timeline-item pb-3">
                    <span className="timeline-node icon-box icon-box-sm tint-emerald border-current" aria-hidden="true">
                      <i data-lucide="circle-check-big" />
                    </span>
                    <div className="d-flex align-items-start gap-2 mb-1">
                      <h4 className="flex-grow-1 min-w-0 fs-md fw-semibold text-title mb-0">
                        Atlas-7 v2.4 rollout
                      </h4>
                      <span className="badge-soft tint-emerald flex-shrink-0 text-nowrap">
                        Shipped
                      </span>
                    </div>
                    <p className="fs-xs text-muted-2 mb-2">
                      <bdi>
                        31 August 2026 · 6 regions · 100%
                      </bdi>
                    </p>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="Atlas-7 v2.4 rollout progress"
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-emerald w-100" />
                    </div>
                  </li>
                  {" "}
                  <li className="timeline-item pb-3">
                    <span className="timeline-node icon-box icon-box-sm tint-violet border-current" aria-hidden="true">
                      <i data-lucide="zap" />
                    </span>
                    <div className="d-flex align-items-start gap-2 mb-1">
                      <h4 className="flex-grow-1 min-w-0 fs-md fw-semibold text-title mb-0">
                        Realtime Voice beta
                      </h4>
                      <span className="badge-soft tint-violet flex-shrink-0 text-nowrap">
                        In progress
                      </span>
                    </div>
                    <p className="fs-xs text-muted-2 mb-2">
                      <bdi>
                        Due 12 September 2026 · 18 of 24 tasks · 75%
                      </bdi>
                    </p>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="Realtime Voice beta progress"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-violet w-75" />
                    </div>
                  </li>
                  {" "}
                  <li className="timeline-item pb-3">
                    <span className="timeline-node icon-box icon-box-sm tint-blue border-current" aria-hidden="true">
                      <i data-lucide="shield-check" />
                    </span>
                    <div className="d-flex align-items-start gap-2 mb-1">
                      <h4 className="flex-grow-1 min-w-0 fs-md fw-semibold text-title mb-0">
                        SOC 2 Type II renewal
                      </h4>
                      <span className="badge-soft tint-blue flex-shrink-0 text-nowrap">
                        In progress
                      </span>
                    </div>
                    <p className="fs-xs text-muted-2 mb-2">
                      <bdi>
                        Due 30 September 2026 · evidence window open · 50%
                      </bdi>
                    </p>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="SOC 2 Type II renewal progress"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-blue w-50" />
                    </div>
                  </li>
                  {" "}
                  <li className="timeline-item">
                    <span className="timeline-node icon-box icon-box-sm tint-slate border-current" aria-hidden="true">
                      <i data-lucide="flag" />
                    </span>
                    <div className="d-flex align-items-start gap-2 mb-1">
                      <h4 className="flex-grow-1 min-w-0 fs-md fw-semibold text-title mb-0">
                        Vionex 4.0 public launch
                      </h4>
                      <span className="badge-soft tint-slate flex-shrink-0 text-nowrap">
                        Planned
                      </span>
                    </div>
                    <p className="fs-xs text-muted-2 mb-2">
                      <bdi>
                        Due 18 November 2026 · scope locked · 25%
                      </bdi>
                    </p>
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="Vionex 4.0 public launch progress"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-slate w-25" />
                    </div>
                  </li>
                </ol>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    Most Active
                  </h3>
                  <span className="fs-xs text-muted-2 text-nowrap">
                    Last 30 days
                  </span>
                </div>
                <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                  <li className="d-flex align-items-center gap-3">
                    <span className="avatar">
                      <img src="/assets/images/avatar-user.png" width="40" height="40" alt="" />
                    </span>
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-flex align-items-center gap-2">
                        <span className="flex-grow-1 min-w-0 fs-md fw-semibold text-title text-truncate">
                          Ravisha V
                        </span>
                        <span className="fs-xs fw-semibold text-title text-nowrap flex-shrink-0">
                          <bdi>
                            128
                          </bdi>
                        </span>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate mb-1">
                        Platform Engineering
                      </span>
                      {" "}
                      <span
                        className="progress progress-sm"
                        role="progressbar"
                        aria-label="Updates by Ravisha V, 128 of 128"
                        aria-valuenow="128"
                        aria-valuemin="0"
                        aria-valuemax="128"
                      >
                        <span className="progress-bar bg-cat-brand w-100" />
                      </span>
                      {" "}
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3">
                    <span className="avatar">
                      <img src="/assets/images/avatar-3.png" width="40" height="40" alt="" />
                    </span>
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-flex align-items-center gap-2">
                        <span className="flex-grow-1 min-w-0 fs-md fw-semibold text-title text-truncate">
                          Arjun Patel
                        </span>
                        <span className="fs-xs fw-semibold text-title text-nowrap flex-shrink-0">
                          <bdi>
                            96
                          </bdi>
                        </span>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate mb-1">
                        Infrastructure
                      </span>
                      {" "}
                      <span
                        className="progress progress-sm"
                        role="progressbar"
                        aria-label="Updates by Arjun Patel, 96 of 128"
                        aria-valuenow="96"
                        aria-valuemin="0"
                        aria-valuemax="128"
                      >
                        <span className="progress-bar bg-cat-blue w-75" />
                      </span>
                      {" "}
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3">
                    <span className="avatar">
                      <img src="/assets/images/avatar-2.png" width="40" height="40" alt="" />
                    </span>
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-flex align-items-center gap-2">
                        <span className="flex-grow-1 min-w-0 fs-md fw-semibold text-title text-truncate">
                          Maya Chen
                        </span>
                        <span className="fs-xs fw-semibold text-title text-nowrap flex-shrink-0">
                          <bdi>
                            64
                          </bdi>
                        </span>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate mb-1">
                        Product Design
                      </span>
                      {" "}
                      <span
                        className="progress progress-sm"
                        role="progressbar"
                        aria-label="Updates by Maya Chen, 64 of 128"
                        aria-valuenow="64"
                        aria-valuemin="0"
                        aria-valuemax="128"
                      >
                        <span className="progress-bar bg-cat-violet w-50" />
                      </span>
                      {" "}
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3">
                    <span className="avatar">
                      <img src="/assets/images/avatar-1.png" width="40" height="40" alt="" />
                    </span>
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-flex align-items-center gap-2">
                        <span className="flex-grow-1 min-w-0 fs-md fw-semibold text-title text-truncate">
                          Priya Nair
                        </span>
                        <span className="fs-xs fw-semibold text-title text-nowrap flex-shrink-0">
                          <bdi>
                            32
                          </bdi>
                        </span>
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2 text-truncate mb-1">
                        AI Research
                      </span>
                      {" "}
                      <span
                        className="progress progress-sm"
                        role="progressbar"
                        aria-label="Updates by Priya Nair, 32 of 128"
                        aria-valuenow="32"
                        aria-valuemin="0"
                        aria-valuemax="128"
                      >
                        <span className="progress-bar bg-cat-amber w-25" />
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

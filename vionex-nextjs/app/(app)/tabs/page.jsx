/* Generated from the Vionex HTML theme by scripts/convert-html.mjs */
import AppShell from "@/components/AppShell";

export const metadata = {
  title: "Vionex — Tabs",
  description: "Vionex tabs — bordered, pill, underline, vertical, filled and scrollable segment variants with fully labelled panels, built with Bootstrap 5, CSS variables and a scalable design system.",
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
          Tabs
        </h1>
        <nav aria-label="breadcrumb" className="d-none d-md-block">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="/">
                Dashboard
              </a>
            </li>
            <li className="breadcrumb-item">
              Components
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Tabs
            </li>
          </ol>
        </nav>
      </div>
      <div className="row g-3 g-xl-4">
        {/* ===== Basic Tabs ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-basic">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-basic" className="fs-5 fw-bold text-title mb-1">
                  Basic Tabs
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  The classic bordered set. Each panel is keyboard reachable and announced through
                  {" "}
                  <code>
                    role="tabpanel"
                  </code>
                  .
                </p>
              </div>
              <ul className="nav nav-tabs mb-3" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    type="button"
                    className="nav-link active fw-semibold"
                    id="tbBasicOverview"
                    data-bs-toggle="tab"
                    data-bs-target="#tbPaneOverview"
                    role="tab"
                    aria-controls="tbPaneOverview"
                    aria-selected="true"
                  >
                    Overview
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    type="button"
                    className="nav-link fw-semibold"
                    id="tbBasicActivity"
                    data-bs-toggle="tab"
                    data-bs-target="#tbPaneActivity"
                    role="tab"
                    aria-controls="tbPaneActivity"
                    aria-selected="false"
                  >
                    Activity
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    type="button"
                    className="nav-link fw-semibold"
                    id="tbBasicSettings"
                    data-bs-toggle="tab"
                    data-bs-target="#tbPaneSettings"
                    role="tab"
                    aria-controls="tbPaneSettings"
                    aria-selected="false"
                  >
                    Settings
                  </button>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="tbPaneOverview"
                  role="tabpanel"
                  aria-labelledby="tbBasicOverview"
                  tabIndex="0"
                >
                  <p className="fs-md text-body-2 mb-0">
                    A summary of the workspace:
                    {" "}
                    <bdi>
                      18
                    </bdi>
                    {" "}active projects,{" "}
                    <bdi>
                      6
                    </bdi>
                    {" "}awaiting review and{" "}
                    <bdi>
                      2
                    </bdi>
                    {" "}
                    archived this week.
                  </p>
                </div>
                {" "}
                <div
                  className="tab-pane fade"
                  id="tbPaneActivity"
                  role="tabpanel"
                  aria-labelledby="tbBasicActivity"
                  tabIndex="0"
                >
                  <p className="fs-md text-body-2 mb-0">
                    Everything the team touched, newest first. Filters carry over from the main activity feed.
                  </p>
                </div>
                {" "}
                <div
                  className="tab-pane fade"
                  id="tbPaneSettings"
                  role="tabpanel"
                  aria-labelledby="tbBasicSettings"
                  tabIndex="0"
                >
                  <p className="fs-md text-body-2 mb-0">
                    Workspace name, default timezone and who may invite new members.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* ===== Pill Tabs ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-pills">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-pills" className="fs-5 fw-bold text-title mb-1">
                  Pills
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Filled rather than bordered. Lighter on dense pages where a tab underline would add another rule to the layout.
                </p>
              </div>
              <ul className="nav nav-pills gap-1 mb-3" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    type="button"
                    className="nav-link active fw-semibold"
                    id="tbPillAll"
                    data-bs-toggle="pill"
                    data-bs-target="#tbPaneAll"
                    role="tab"
                    aria-controls="tbPaneAll"
                    aria-selected="true"
                  >
                    All
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    type="button"
                    className="nav-link fw-semibold"
                    id="tbPillOpen"
                    data-bs-toggle="pill"
                    data-bs-target="#tbPaneOpen"
                    role="tab"
                    aria-controls="tbPaneOpen"
                    aria-selected="false"
                  >
                    Open
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    type="button"
                    className="nav-link fw-semibold"
                    id="tbPillClosed"
                    data-bs-toggle="pill"
                    data-bs-target="#tbPaneClosed"
                    role="tab"
                    aria-controls="tbPaneClosed"
                    aria-selected="false"
                  >
                    Closed
                  </button>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="tbPaneAll"
                  role="tabpanel"
                  aria-labelledby="tbPillAll"
                  tabIndex="0"
                >
                  <p className="fs-md text-body-2 mb-0">
                    Every ticket raised this quarter, regardless of state.
                  </p>
                </div>
                {" "}
                <div
                  className="tab-pane fade"
                  id="tbPaneOpen"
                  role="tabpanel"
                  aria-labelledby="tbPillOpen"
                  tabIndex="0"
                >
                  <p className="fs-md text-body-2 mb-0">
                    <bdi>
                      24
                    </bdi>
                    {" "}
                    tickets are still waiting on a first reply.
                  </p>
                </div>
                {" "}
                <div
                  className="tab-pane fade"
                  id="tbPaneClosed"
                  role="tabpanel"
                  aria-labelledby="tbPillClosed"
                  tabIndex="0"
                >
                  <p className="fs-md text-body-2 mb-0">
                    Resolved and closed, with the median time to close at
                    {" "}
                    <bdi>
                      4h 12m
                    </bdi>
                    .
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* ===== Underline Tabs ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-underline">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-underline" className="fs-5 fw-bold text-title mb-1">
                  Underline
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Marks the active item with a rule instead of a box — the quietest of the three, and a good default inside cards.
                </p>
              </div>
              <ul className="nav nav-underline gap-3 mb-3" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    type="button"
                    className="nav-link active fw-semibold"
                    id="tbUlProfile"
                    data-bs-toggle="tab"
                    data-bs-target="#tbPaneProfile"
                    role="tab"
                    aria-controls="tbPaneProfile"
                    aria-selected="true"
                  >
                    Profile
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    type="button"
                    className="nav-link fw-semibold"
                    id="tbUlSecurity"
                    data-bs-toggle="tab"
                    data-bs-target="#tbPaneSecurity"
                    role="tab"
                    aria-controls="tbPaneSecurity"
                    aria-selected="false"
                  >
                    Security
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    type="button"
                    className="nav-link fw-semibold disabled"
                    id="tbUlBilling"
                    data-bs-toggle="tab"
                    data-bs-target="#tbPaneBilling"
                    role="tab"
                    aria-controls="tbPaneBilling"
                    aria-selected="false"
                    disabled
                  >
                    Billing
                  </button>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="tbPaneProfile"
                  role="tabpanel"
                  aria-labelledby="tbUlProfile"
                  tabIndex="0"
                >
                  <p className="fs-md text-body-2 mb-0">
                    Name, avatar and the handle other members see beside your comments.
                  </p>
                </div>
                {" "}
                <div
                  className="tab-pane fade"
                  id="tbPaneSecurity"
                  role="tabpanel"
                  aria-labelledby="tbUlSecurity"
                  tabIndex="0"
                >
                  <p className="fs-md text-body-2 mb-0">
                    Password, two-factor devices and the sessions currently signed in.
                  </p>
                </div>
                {" "}
                <div
                  className="tab-pane fade"
                  id="tbPaneBilling"
                  role="tabpanel"
                  aria-labelledby="tbUlBilling"
                  tabIndex="0"
                >
                  <p className="fs-md text-body-2 mb-0">
                    Only workspace owners can open billing, so this tab is disabled.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* ===== Tabs with Icons & Counts ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-icons">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-icons" className="fs-5 fw-bold text-title mb-1">
                  {"Icons & Counts"}
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  A glyph speeds up recognition; a count tells you whether the panel is worth opening.
                </p>
              </div>
              <ul className="nav nav-pills gap-1 mb-3" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    type="button"
                    className="nav-link active fw-semibold d-inline-flex align-items-center gap-2"
                    id="tbIcInbox"
                    data-bs-toggle="pill"
                    data-bs-target="#tbPaneInbox"
                    role="tab"
                    aria-controls="tbPaneInbox"
                    aria-selected="true"
                  >
                    <i className="icon-16" data-lucide="inbox" aria-hidden="true" />
                    Inbox
                    {" "}
                    <span className="badge-soft">
                      <bdi>
                        12
                      </bdi>
                    </span>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    type="button"
                    className="nav-link fw-semibold d-inline-flex align-items-center gap-2"
                    id="tbIcStarred"
                    data-bs-toggle="pill"
                    data-bs-target="#tbPaneStarred"
                    role="tab"
                    aria-controls="tbPaneStarred"
                    aria-selected="false"
                  >
                    <i className="icon-16" data-lucide="star" aria-hidden="true" />
                    Starred
                    {" "}
                    <span className="badge-soft">
                      <bdi>
                        4
                      </bdi>
                    </span>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    type="button"
                    className="nav-link fw-semibold d-inline-flex align-items-center gap-2"
                    id="tbIcSent"
                    data-bs-toggle="pill"
                    data-bs-target="#tbPaneSent"
                    role="tab"
                    aria-controls="tbPaneSent"
                    aria-selected="false"
                  >
                    <i className="icon-16" data-lucide="send" aria-hidden="true" />
                    Sent
                  </button>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="tbPaneInbox"
                  role="tabpanel"
                  aria-labelledby="tbIcInbox"
                  tabIndex="0"
                >
                  <p className="fs-md text-body-2 mb-0">
                    Twelve unread messages, three of them flagged as urgent by the triage rules.
                  </p>
                </div>
                {" "}
                <div
                  className="tab-pane fade"
                  id="tbPaneStarred"
                  role="tabpanel"
                  aria-labelledby="tbIcStarred"
                  tabIndex="0"
                >
                  <p className="fs-md text-body-2 mb-0">
                    Threads you marked to come back to. Stars are private to you.
                  </p>
                </div>
                {" "}
                <div className="tab-pane fade" id="tbPaneSent" role="tabpanel" aria-labelledby="tbIcSent" tabIndex="0">
                  <p className="fs-md text-body-2 mb-0">
                    Everything sent from this address in the last
                    {" "}
                    <bdi>
                      90 days
                    </bdi>
                    .
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* ===== Vertical Tabs ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-vertical">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-vertical" className="fs-5 fw-bold text-title mb-1">
                  Vertical Tabs
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  A side rail for longer lists of panels. It stacks above the content on small screens.
                </p>
              </div>
              <div className="row g-3">
                <div className="col-12 col-sm-5">
                  <div className="nav nav-pills flex-column gap-1" role="tablist" aria-orientation="vertical">
                    <button
                      type="button"
                      className="nav-link active fw-semibold text-start"
                      id="tbVertGeneral"
                      data-bs-toggle="pill"
                      data-bs-target="#tbPaneGeneral"
                      role="tab"
                      aria-controls="tbPaneGeneral"
                      aria-selected="true"
                    >
                      General
                    </button>
                    <button
                      type="button"
                      className="nav-link fw-semibold text-start"
                      id="tbVertMembers"
                      data-bs-toggle="pill"
                      data-bs-target="#tbPaneMembers"
                      role="tab"
                      aria-controls="tbPaneMembers"
                      aria-selected="false"
                    >
                      Members
                    </button>
                    <button
                      type="button"
                      className="nav-link fw-semibold text-start"
                      id="tbVertApi"
                      data-bs-toggle="pill"
                      data-bs-target="#tbPaneApi"
                      role="tab"
                      aria-controls="tbPaneApi"
                      aria-selected="false"
                    >
                      API keys
                    </button>
                  </div>
                </div>
                <div className="col-12 col-sm-7">
                  <div className="tab-content">
                    <div
                      className="tab-pane fade show active"
                      id="tbPaneGeneral"
                      role="tabpanel"
                      aria-labelledby="tbVertGeneral"
                      tabIndex="0"
                    >
                      <p className="fs-md text-body-2 mb-3">
                        Workspace name, region and the default currency used in every report.
                      </p>
                      <dl className="row g-2 mb-0">
                        <dt className="col-5 fs-md text-muted-2 fw-normal">
                          Region
                        </dt>
                        <dd className="col-7 fs-md fw-medium text-title mb-0">
                          Asia Pacific
                        </dd>
                        <dt className="col-5 fs-md text-muted-2 fw-normal">
                          Currency
                        </dt>
                        <dd className="col-7 fs-md fw-medium text-title mb-0">
                          <bdi>
                            USD
                          </bdi>
                        </dd>
                        <dt className="col-5 fs-md text-muted-2 fw-normal">
                          Created
                        </dt>
                        <dd className="col-7 fs-md fw-medium text-title mb-0">
                          <bdi>
                            4 March 2026
                          </bdi>
                        </dd>
                      </dl>
                    </div>
                    {" "}
                    <div
                      className="tab-pane fade"
                      id="tbPaneMembers"
                      role="tabpanel"
                      aria-labelledby="tbVertMembers"
                      tabIndex="0"
                    >
                      <p className="fs-md text-body-2 mb-3">
                        <bdi>
                          25
                        </bdi>
                        {" "}seats in use of{" "}
                        <bdi>
                          30
                        </bdi>
                        . Invitations expire after a week.
                      </p>
                      <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                        <li className="d-flex align-items-center gap-2">
                          <span className="avatar avatar-xs">
                            <img src="/assets/images/avatar-1.png" width="24" height="24" alt="" />
                          </span>
                          <span className="fs-md text-body-2 flex-grow-1 min-w-0 text-truncate">
                            Kabir Nair
                          </span>
                          <span className="badge-soft tint-primary text-nowrap">
                            Owner
                          </span>
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <span className="avatar avatar-xs">
                            <img src="/assets/images/avatar-3.png" width="24" height="24" alt="" />
                          </span>
                          <span className="fs-md text-body-2 flex-grow-1 min-w-0 text-truncate">
                            Nisha Bose
                          </span>
                          <span className="badge-soft tint-slate text-nowrap">
                            Editor
                          </span>
                        </li>
                      </ul>
                    </div>
                    {" "}
                    <div
                      className="tab-pane fade"
                      id="tbPaneApi"
                      role="tabpanel"
                      aria-labelledby="tbVertApi"
                      tabIndex="0"
                    >
                      <p className="fs-md text-body-2 mb-3">
                        Two live keys. Rotating a key revokes the old one immediately.
                      </p>
                      <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                        <li className="d-flex align-items-center justify-content-between gap-2">
                          <span className="fs-md text-body-2">
                            Production
                          </span>
                          <span className="badge-soft tint-emerald text-nowrap">
                            Active
                          </span>
                        </li>
                        <li className="d-flex align-items-center justify-content-between gap-2">
                          <span className="fs-md text-body-2">
                            Staging
                          </span>
                          <span className="badge-soft tint-amber text-nowrap">
                            Expiring
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* ===== Fill & Justified ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-fill">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-fill" className="fs-5 fw-bold text-title mb-1">
                  {"Fill & Justified"}
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  <code>
                    nav-fill
                  </code>
                  {" "}shares the width in proportion to each label;{" "}
                  <code>
                    nav-justified
                  </code>
                  {" "}
                  gives every tab exactly the same width.
                </p>
              </div>
              <ul className="nav nav-pills nav-fill gap-1 mb-4" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    type="button"
                    className="nav-link active fw-semibold"
                    id="tbFillDay"
                    data-bs-toggle="pill"
                    data-bs-target="#tbPaneDay"
                    role="tab"
                    aria-controls="tbPaneDay"
                    aria-selected="true"
                  >
                    Today
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    type="button"
                    className="nav-link fw-semibold"
                    id="tbFillWeek"
                    data-bs-toggle="pill"
                    data-bs-target="#tbPaneWeek"
                    role="tab"
                    aria-controls="tbPaneWeek"
                    aria-selected="false"
                  >
                    This week
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    type="button"
                    className="nav-link fw-semibold"
                    id="tbFillQuarter"
                    data-bs-toggle="pill"
                    data-bs-target="#tbPaneQuarter"
                    role="tab"
                    aria-controls="tbPaneQuarter"
                    aria-selected="false"
                  >
                    Quarter
                  </button>
                </li>
              </ul>
              <div className="tab-content mb-4">
                <div
                  className="tab-pane fade show active"
                  id="tbPaneDay"
                  role="tabpanel"
                  aria-labelledby="tbFillDay"
                  tabIndex="0"
                >
                  <p className="fs-md text-body-2 mb-0">
                    <bdi>
                      1,284
                    </bdi>
                    {" "}
                    sessions so far today.
                  </p>
                </div>
                {" "}
                <div
                  className="tab-pane fade"
                  id="tbPaneWeek"
                  role="tabpanel"
                  aria-labelledby="tbFillWeek"
                  tabIndex="0"
                >
                  <p className="fs-md text-body-2 mb-0">
                    <bdi>
                      9,043
                    </bdi>
                    {" "}
                    sessions since Monday.
                  </p>
                </div>
                {" "}
                <div
                  className="tab-pane fade"
                  id="tbPaneQuarter"
                  role="tabpanel"
                  aria-labelledby="tbFillQuarter"
                  tabIndex="0"
                >
                  <p className="fs-md text-body-2 mb-0">
                    <bdi>
                      112,760
                    </bdi>
                    {" "}
                    sessions this quarter.
                  </p>
                </div>
              </div>
              <ul className="nav nav-tabs nav-justified" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    type="button"
                    className="nav-link active fw-semibold"
                    id="tbJustA"
                    data-bs-toggle="tab"
                    data-bs-target="#tbPaneJustA"
                    role="tab"
                    aria-controls="tbPaneJustA"
                    aria-selected="true"
                  >
                    Design
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    type="button"
                    className="nav-link fw-semibold"
                    id="tbJustB"
                    data-bs-toggle="tab"
                    data-bs-target="#tbPaneJustB"
                    role="tab"
                    aria-controls="tbPaneJustB"
                    aria-selected="false"
                  >
                    Engineering
                  </button>
                </li>
              </ul>
              <div className="tab-content pt-3">
                <div
                  className="tab-pane fade show active"
                  id="tbPaneJustA"
                  role="tabpanel"
                  aria-labelledby="tbJustA"
                  tabIndex="0"
                >
                  <p className="fs-md text-body-2 mb-0">
                    Equal-width tabs keep a two or three item switch balanced.
                  </p>
                </div>
                {" "}
                <div className="tab-pane fade" id="tbPaneJustB" role="tabpanel" aria-labelledby="tbJustB" tabIndex="0">
                  <p className="fs-md text-body-2 mb-0">
                    Useful when the labels differ in length but should look uniform.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* ===== Scrollable Tabs ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-scroll">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-scroll" className="fs-5 fw-bold text-title mb-1">
                  Scrollable Segments
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  More tabs than fit? The pill rail scrolls sideways instead of wrapping.
                  {" "}
                  <code>
                    d-inline-flex mw-100
                  </code>
                  {" "}
                  is what stops the first pill being clipped.
                </p>
              </div>
              <div
                className="nav nav-pills seg-toggle d-inline-flex flex-nowrap gap-1 p-1 mw-100 rounded-pill bg-soft overflow-x-auto scrollbar-none mb-3"
                role="tablist"
              >
                <button
                  type="button"
                  className="nav-link active fw-semibold text-nowrap"
                  id="tbScrollOverview"
                  data-bs-toggle="pill"
                  data-bs-target="#tbPaneScrollA"
                  role="tab"
                  aria-controls="tbPaneScrollA"
                  aria-selected="true"
                >
                  Overview
                </button>
                <button
                  type="button"
                  className="nav-link fw-semibold text-nowrap"
                  id="tbScrollTraffic"
                  data-bs-toggle="pill"
                  data-bs-target="#tbPaneScrollB"
                  role="tab"
                  aria-controls="tbPaneScrollB"
                  aria-selected="false"
                >
                  Traffic
                </button>
                <button
                  type="button"
                  className="nav-link fw-semibold text-nowrap"
                  id="tbScrollConv"
                  data-bs-toggle="pill"
                  data-bs-target="#tbPaneScrollC"
                  role="tab"
                  aria-controls="tbPaneScrollC"
                  aria-selected="false"
                >
                  Conversions
                </button>
                <button
                  type="button"
                  className="nav-link fw-semibold text-nowrap"
                  id="tbScrollRetention"
                  data-bs-toggle="pill"
                  data-bs-target="#tbPaneScrollD"
                  role="tab"
                  aria-controls="tbPaneScrollD"
                  aria-selected="false"
                >
                  Retention
                </button>
                <button
                  type="button"
                  className="nav-link fw-semibold text-nowrap"
                  id="tbScrollRevenue"
                  data-bs-toggle="pill"
                  data-bs-target="#tbPaneScrollE"
                  role="tab"
                  aria-controls="tbPaneScrollE"
                  aria-selected="false"
                >
                  Revenue
                </button>
              </div>
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="tbPaneScrollA"
                  role="tabpanel"
                  aria-labelledby="tbScrollOverview"
                  tabIndex="0"
                >
                  <p className="fs-md text-body-2 mb-0">
                    Headline numbers across every channel.
                  </p>
                </div>
                {" "}
                <div
                  className="tab-pane fade"
                  id="tbPaneScrollB"
                  role="tabpanel"
                  aria-labelledby="tbScrollTraffic"
                  tabIndex="0"
                >
                  <p className="fs-md text-body-2 mb-0">
                    Sessions, sources and the pages people land on first.
                  </p>
                </div>
                {" "}
                <div
                  className="tab-pane fade"
                  id="tbPaneScrollC"
                  role="tabpanel"
                  aria-labelledby="tbScrollConv"
                  tabIndex="0"
                >
                  <p className="fs-md text-body-2 mb-0">
                    Goal completions and the steps where people drop out.
                  </p>
                </div>
                {" "}
                <div
                  className="tab-pane fade"
                  id="tbPaneScrollD"
                  role="tabpanel"
                  aria-labelledby="tbScrollRetention"
                  tabIndex="0"
                >
                  <p className="fs-md text-body-2 mb-0">
                    Weekly cohorts and how many of each come back.
                  </p>
                </div>
                {" "}
                <div
                  className="tab-pane fade"
                  id="tbPaneScrollE"
                  role="tabpanel"
                  aria-labelledby="tbScrollRevenue"
                  tabIndex="0"
                >
                  <p className="fs-md text-body-2 mb-0">
                    Recognised revenue, refunds and net movement.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* ===== Card Header Tabs ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-header-tabs">
            <div className="card-header">
              <h2 id="sec-header-tabs" className="fs-5 fw-bold text-title mb-2">
                Tabs in a Card Header
              </h2>
              <ul className="nav nav-tabs card-header-tabs" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    type="button"
                    className="nav-link active fw-semibold"
                    id="tbHeadSummary"
                    data-bs-toggle="tab"
                    data-bs-target="#tbPaneSummary"
                    role="tab"
                    aria-controls="tbPaneSummary"
                    aria-selected="true"
                  >
                    Summary
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    type="button"
                    className="nav-link fw-semibold"
                    id="tbHeadBreakdown"
                    data-bs-toggle="tab"
                    data-bs-target="#tbPaneBreakdown"
                    role="tab"
                    aria-controls="tbPaneBreakdown"
                    aria-selected="false"
                  >
                    Breakdown
                  </button>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="tbPaneSummary"
                  role="tabpanel"
                  aria-labelledby="tbHeadSummary"
                  tabIndex="0"
                >
                  <p className="fs-2 fw-bold text-title lh-1 mb-1">
                    <bdi>
                      $84,320
                    </bdi>
                  </p>
                  <p className="fs-md text-body-2 mb-0">
                    Total revenue this month, ahead of target by
                    {" "}
                    <bdi>
                      6.1%
                    </bdi>
                    .
                  </p>
                </div>
                {" "}
                <div
                  className="tab-pane fade"
                  id="tbPaneBreakdown"
                  role="tabpanel"
                  aria-labelledby="tbHeadBreakdown"
                  tabIndex="0"
                >
                  <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                    <li className="d-flex align-items-center justify-content-between gap-2">
                      <span className="d-inline-flex align-items-center gap-2 fs-md text-body-2">
                        <span className="legend-dot bg-cat-violet" aria-hidden="true" />
                        Subscriptions
                      </span>
                      <span className="fs-md fw-semibold text-title">
                        <bdi>
                          $52,180
                        </bdi>
                      </span>
                    </li>
                    <li className="d-flex align-items-center justify-content-between gap-2">
                      <span className="d-inline-flex align-items-center gap-2 fs-md text-body-2">
                        <span className="legend-dot bg-cat-emerald" aria-hidden="true" />
                        One-off licences
                      </span>
                      <span className="fs-md fw-semibold text-title">
                        <bdi>
                          $21,940
                        </bdi>
                      </span>
                    </li>
                    <li className="d-flex align-items-center justify-content-between gap-2">
                      <span className="d-inline-flex align-items-center gap-2 fs-md text-body-2">
                        <span className="legend-dot bg-cat-amber" aria-hidden="true" />
                        Services
                      </span>
                      <span className="fs-md fw-semibold text-title">
                        <bdi>
                          $10,200
                        </bdi>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* ========== FOOTER ========== */}
    </AppShell>
  );
}

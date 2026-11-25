/* Generated from the Vionex HTML theme by scripts/convert-html.mjs */
import AppShell from "@/components/AppShell";

export const metadata = {
  title: "Vionex — Modals",
  description: "Vionex modals — every dialog size, centred and scrollable bodies, static backdrops, form and confirmation dialogs plus offcanvas drawers, built with Bootstrap 5, CSS variables and a scalable design system.",
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
          Modals
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
              Modals
            </li>
          </ol>
        </nav>
      </div>
      <div className="row g-3 g-xl-4">
        {/* ===== Basic Modals ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-basic">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-basic" className="fs-5 fw-bold text-title mb-1">
                  Basic Modal
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Header, body and a footer holding the decision. Every dialog on this page returns focus to its trigger when it closes.
                </p>
              </div>
              <div className="d-flex flex-wrap gap-2">
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mdBasic">
                  Open modal
                </button>
                <button
                  type="button"
                  className="btn btn-outline-soft"
                  data-bs-toggle="modal"
                  data-bs-target="#mdCentered"
                >
                  Vertically centred
                </button>
              </div>
            </div>
          </section>
        </div>
        {/* ===== Modal Sizes ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-sizes">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-sizes" className="fs-5 fw-bold text-title mb-1">
                  Sizes
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Four widths plus a full-screen variant for editors and previews. All of them collapse to the viewport width on phones.
                </p>
              </div>
              <div className="d-flex flex-wrap gap-2">
                <button
                  type="button"
                  className="btn btn-outline-soft btn-sm"
                  data-bs-toggle="modal"
                  data-bs-target="#mdSmall"
                >
                  Small
                </button>
                <button
                  type="button"
                  className="btn btn-outline-soft btn-sm"
                  data-bs-toggle="modal"
                  data-bs-target="#mdBasic"
                >
                  Default
                </button>
                <button
                  type="button"
                  className="btn btn-outline-soft btn-sm"
                  data-bs-toggle="modal"
                  data-bs-target="#mdLarge"
                >
                  Large
                </button>
                <button
                  type="button"
                  className="btn btn-outline-soft btn-sm"
                  data-bs-toggle="modal"
                  data-bs-target="#mdXl"
                >
                  Extra large
                </button>
                <button
                  type="button"
                  className="btn btn-outline-soft btn-sm"
                  data-bs-toggle="modal"
                  data-bs-target="#mdFull"
                >
                  Full screen
                </button>
              </div>
            </div>
          </section>
        </div>
        {/* ===== Scrollable & Static ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-behaviour">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-behaviour" className="fs-5 fw-bold text-title mb-1">
                  {"Scroll & Backdrop"}
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  A long dialog scrolls its own body rather than the page. A static backdrop refuses to close on an outside click, for anything unsaved.
                </p>
              </div>
              <div className="d-flex flex-wrap gap-2">
                <button
                  type="button"
                  className="btn btn-outline-soft"
                  data-bs-toggle="modal"
                  data-bs-target="#mdScroll"
                >
                  Scrollable body
                </button>
                <button
                  type="button"
                  className="btn btn-outline-soft"
                  data-bs-toggle="modal"
                  data-bs-target="#mdStatic"
                >
                  Static backdrop
                </button>
              </div>
            </div>
          </section>
        </div>
        {/* ===== Form Modal ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-form">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-form" className="fs-5 fw-bold text-title mb-1">
                  Form Dialog
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  The most common dialog in a dashboard: create or edit a record without leaving the list behind it.
                </p>
              </div>
              <div className="d-flex flex-wrap gap-2">
                <button
                  type="button"
                  className="btn btn-primary d-inline-flex align-items-center gap-2"
                  data-bs-toggle="modal"
                  data-bs-target="#mdForm"
                >
                  <i className="icon-18" data-lucide="plus" aria-hidden="true" />
                  New member
                </button>
                <button type="button" className="btn btn-outline-soft" data-bs-toggle="modal" data-bs-target="#mdShare">
                  {"Share & invite"}
                </button>
              </div>
            </div>
          </section>
        </div>
        {/* ===== Confirmation Modals ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-confirm">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-confirm" className="fs-5 fw-bold text-title mb-1">
                  {"Confirm & Result"}
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Short, centred dialogs carrying a single message — a destructive confirmation, and the receipt that follows a successful one.
                </p>
              </div>
              <div className="d-flex flex-wrap gap-2">
                <button
                  type="button"
                  className="btn btn-danger d-inline-flex align-items-center gap-2"
                  data-bs-toggle="modal"
                  data-bs-target="#mdDelete"
                >
                  <i className="icon-18" data-lucide="trash-2" aria-hidden="true" />
                  Delete project
                </button>
                <button
                  type="button"
                  className="btn btn-primary-soft"
                  data-bs-toggle="modal"
                  data-bs-target="#mdSuccess"
                >
                  Show success
                </button>
              </div>
            </div>
          </section>
        </div>
        {/* ===== Offcanvas ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-offcanvas">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-offcanvas" className="fs-5 fw-bold text-title mb-1">
                  Offcanvas Panels
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Sliding drawers for filters, details and settings — the same component the theme customiser uses. They can enter from any edge.
                </p>
              </div>
              <div className="d-flex flex-wrap gap-2">
                <button
                  type="button"
                  className="btn btn-outline-soft"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#ocStart"
                >
                  Start
                </button>
                <button
                  type="button"
                  className="btn btn-outline-soft"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#ocEnd"
                >
                  End
                </button>
                <button
                  type="button"
                  className="btn btn-outline-soft"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#ocTop"
                >
                  Top
                </button>
                <button
                  type="button"
                  className="btn btn-outline-soft"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#ocBottom"
                >
                  Bottom
                </button>
              </div>
            </div>
          </section>
        </div>
        {/* ===== Dialog Anatomy ===== */}
        <div className="col-12">
          <section className="card mb-0" aria-labelledby="sec-anatomy">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-anatomy" className="fs-5 fw-bold text-title mb-1">
                  Dialog Anatomy
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  The same two shapes, rendered in place so the structure is visible without opening anything. A dialog is a header, a body and a footer; a confirmation drops the header and leads with the icon instead.
                </p>
              </div>
              <div className="row g-3">
                <div className="col-12 col-lg-7">
                  <p className="fs-md fw-semibold text-title mb-2">
                    Standard dialog
                  </p>
                  {/* .modal carries the Bootstrap modal CSS custom properties the panel is built from,
                     so a preview outside a real dialog has to keep the wrapper.
                     position-static d-block h-auto drops only the overlay behaviour. */}
                  {" "}
                  <div className="modal position-static d-block h-auto">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h3 className="modal-title fs-5 fw-bold text-title">
                          Edit project
                        </h3>
                        <button type="button" className="btn-close" aria-label="Close" disabled />
                      </div>
                      <div className="modal-body">
                        <div className="row g-3">
                          <div className="col-12 col-sm-7">
                            <label className="form-label fs-md fw-semibold text-title" htmlFor="mdDemoName">
                              Project name
                            </label>
                            {" "}
                            <input
                              type="text"
                              className="form-control"
                              id="mdDemoName"
                              defaultValue="Website Redesign"
                              disabled
                            />
                          </div>
                          <div className="col-12 col-sm-5">
                            <label className="form-label fs-md fw-semibold text-title" htmlFor="mdDemoStage">
                              Stage
                            </label>
                            {" "}
                            <select className="form-select" id="mdDemoStage" disabled defaultValue="In progress">
                              <option>
                                In progress
                              </option>
                              <option>
                                In review
                              </option>
                              <option>
                                Complete
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-ghost" disabled>
                          Cancel
                        </button>
                        <button type="button" className="btn btn-primary" disabled>
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-5">
                  <p className="fs-md fw-semibold text-title mb-2">
                    Confirmation
                  </p>
                  <div className="modal position-static d-block h-auto">
                    <div className="modal-content">
                      <div className="modal-body text-center p-4">
                        <span className="icon-box icon-box-xl tint-warning mx-auto mb-3" aria-hidden="true">
                          <i data-lucide="triangle-alert" />
                        </span>
                        <h4 className="fs-5 fw-bold text-title mb-2">
                          Move to archive?
                        </h4>
                        <p className="fs-md text-body-2 mb-0">
                          Archived projects stay searchable but stop counting towards your plan.
                        </p>
                      </div>
                      <div className="modal-footer justify-content-center">
                        <button type="button" className="btn btn-ghost" disabled>
                          Cancel
                        </button>
                        <button type="button" className="btn btn-primary" disabled>
                          Archive
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* ========== Basic modal ========== */}
      <div
        role="dialog"
        className="modal fade"
        id="mdBasic"
        tabIndex="-1"
        aria-labelledby="mdBasicTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title fs-5 fw-bold text-title" id="mdBasicTitle">
                Release notes
              </h3>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <p className="fs-md text-body-2 mb-0">
                Version
                {" "}
                <bdi>
                  4.2.0
                </bdi>
                {" "}
                adds saved views to every dashboard, a faster export pipeline and forty new icons. Nothing in this release changes an existing API.
              </p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-ghost" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Read the full log
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ========== Centred modal ========== */}
      <div
        role="dialog"
        className="modal fade"
        id="mdCentered"
        tabIndex="-1"
        aria-labelledby="mdCenteredTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title fs-5 fw-bold text-title" id="mdCenteredTitle">
                Vertically centred
              </h3>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <p className="fs-md text-body-2 mb-0">
                Sits in the middle of the viewport instead of near the top. Best for short dialogs where the extra space above would look accidental.
              </p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
                Got it
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ========== Small modal ========== */}
      <div
        role="dialog"
        className="modal fade"
        id="mdSmall"
        tabIndex="-1"
        aria-labelledby="mdSmallTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-sm modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title fs-5 fw-bold text-title" id="mdSmallTitle">
                Rename
              </h3>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <label className="form-label fs-md fw-semibold text-title" htmlFor="mdSmallName">
                New name
              </label>
              {" "}
              <input type="text" className="form-control" id="mdSmallName" defaultValue="Q4 Revenue Forecast" />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-ghost" data-bs-dismiss="modal">
                Cancel
              </button>
              <button type="button" className="btn btn-primary">
                Rename
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ========== Large modal ========== */}
      <div
        role="dialog"
        className="modal fade"
        id="mdLarge"
        tabIndex="-1"
        aria-labelledby="mdLargeTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title fs-5 fw-bold text-title" id="mdLargeTitle">
                Plan comparison
              </h3>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <div className="table-responsive">
                <table className="table table-sm align-middle mb-0">
                  <caption className="visually-hidden">
                    Feature comparison across the three plans
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">
                        Feature
                      </th>
                      <th scope="col">
                        Starter
                      </th>
                      <th scope="col">
                        Business
                      </th>
                      <th scope="col">
                        Enterprise
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" className="fw-medium">
                        Team seats
                      </th>
                      <td>
                        <bdi>
                          5
                        </bdi>
                      </td>
                      <td>
                        <bdi>
                          25
                        </bdi>
                      </td>
                      <td>
                        Unlimited
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="fw-medium">
                        Saved dashboards
                      </th>
                      <td>
                        <bdi>
                          10
                        </bdi>
                      </td>
                      <td>
                        Unlimited
                      </td>
                      <td>
                        Unlimited
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="fw-medium">
                        Data retention
                      </th>
                      <td>
                        <bdi>
                          90 days
                        </bdi>
                      </td>
                      <td>
                        <bdi>
                          2 years
                        </bdi>
                      </td>
                      <td>
                        <bdi>
                          7 years
                        </bdi>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="fw-medium">
                        Support
                      </th>
                      <td>
                        Email
                      </td>
                      <td>
                        Priority
                      </td>
                      <td>
                        Dedicated
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-ghost" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Choose Business
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ========== Extra large modal ========== */}
      <div role="dialog" className="modal fade" id="mdXl" tabIndex="-1" aria-labelledby="mdXlTitle" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title fs-5 fw-bold text-title" id="mdXlTitle">
                Asset preview
              </h3>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <div className="ratio ratio-21x9 rounded-4 overflow-hidden mb-3">
                <img
                  src="/assets/images/inventory-5.jpg"
                  width="1260"
                  height="540"
                  alt=""
                  className="object-fit-cover pe-none"
                />
              </div>
              <p className="fs-md text-body-2 mb-0">
                Extra-large dialogs suit previews, editors and anything with a wide table. Below the large breakpoint they behave exactly like the default size.
              </p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-ghost" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary d-inline-flex align-items-center gap-2">
                <i className="icon-18" data-lucide="download" aria-hidden="true" />
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ========== Full screen modal ========== */}
      <div
        role="dialog"
        className="modal fade"
        id="mdFull"
        tabIndex="-1"
        aria-labelledby="mdFullTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen-lg-down modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title fs-5 fw-bold text-title" id="mdFullTitle">
                Report builder
              </h3>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <p className="fs-md text-body-2 mb-3">
                <code>
                  modal-fullscreen-lg-down
                </code>
                {" "}
                fills the screen on phones and tablets, then behaves like a normal dialog from large up — the right compromise for a builder.
              </p>
              <div className="row g-3">
                <div className="col-12 col-md-6">
                  <label className="form-label fs-md fw-semibold text-title" htmlFor="mdFullName">
                    Report name
                  </label>
                  {" "}
                  <input type="text" className="form-control" id="mdFullName" placeholder="Quarterly revenue" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label fs-md fw-semibold text-title" htmlFor="mdFullRange">
                    Date range
                  </label>
                  {" "}
                  <select className="form-select" id="mdFullRange" defaultValue="Last 30 days">
                    <option>
                      Last 30 days
                    </option>
                    <option>
                      This quarter
                    </option>
                    <option>
                      Year to date
                    </option>
                  </select>
                </div>
                <div className="col-12">
                  <label className="form-label fs-md fw-semibold text-title" htmlFor="mdFullNotes">
                    Notes
                  </label>
                  {" "}
                  <textarea
                    className="form-control"
                    id="mdFullNotes"
                    rows="4"
                    placeholder="Anything the reader should know before the numbers"
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-ghost" data-bs-dismiss="modal">
                Cancel
              </button>
              <button type="button" className="btn btn-primary">
                Build report
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ========== Scrollable modal ========== */}
      <div
        role="dialog"
        className="modal fade"
        id="mdScroll"
        tabIndex="-1"
        aria-labelledby="mdScrollTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title fs-5 fw-bold text-title" id="mdScrollTitle">
                Terms of service
              </h3>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <p className="fs-md text-body-2">
                These terms govern your use of the Vionex workspace. By creating an account you agree to them on behalf of yourself and the organisation you represent.
              </p>
              <p className="fs-md text-body-2">
                Your data remains yours. We process it only to provide the service, and we delete it within
                {" "}
                <bdi>
                  30 days
                </bdi>
                {" "}
                of a workspace being closed.
              </p>
              <p className="fs-md text-body-2">
                Uptime is measured monthly across all regions. Credits apply automatically whenever availability falls below
                {" "}
                <bdi>
                  99.9%
                </bdi>
                .
              </p>
              <p className="fs-md text-body-2">
                Support is available on business days for Starter plans and around the clock on Business and Enterprise.
              </p>
              <p className="fs-md text-body-2">
                You may export everything you have stored at any time, in CSV or JSON, with no charge and no rate limit.
              </p>
              <p className="fs-md text-body-2 mb-0">
                We will give
                {" "}
                <bdi>
                  60 days
                </bdi>
                {" "}
                notice before any change that materially reduces the service you receive.
              </p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-ghost" data-bs-dismiss="modal">
                Decline
              </button>
              <button type="button" className="btn btn-primary">
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ========== Static backdrop modal ========== */}
      <div
        role="dialog"
        className="modal fade"
        id="mdStatic"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="mdStaticTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title fs-5 fw-bold text-title" id="mdStaticTitle">
                Unsaved changes
              </h3>
            </div>
            <div className="modal-body">
              <p className="fs-md text-body-2 mb-0">
                Clicking outside won't dismiss this one, and neither will Escape. Use it only when losing the dialog would lose work — and always leave a visible way out.
              </p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-ghost" data-bs-dismiss="modal">
                Discard
              </button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
                Keep editing
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ========== Form modal ========== */}
      <div
        role="dialog"
        className="modal fade"
        id="mdForm"
        tabIndex="-1"
        aria-labelledby="mdFormTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title fs-5 fw-bold text-title" id="mdFormTitle">
                Add a team member
              </h3>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <form>
              <div className="modal-body">
                <div className="row g-3">
                  <div className="col-12 col-sm-6">
                    <label className="form-label fs-md fw-semibold text-title" htmlFor="mdFormFirst">
                      First name
                    </label>
                    {" "}
                    <input type="text" className="form-control" id="mdFormFirst" placeholder="Ravisha" />
                  </div>
                  <div className="col-12 col-sm-6">
                    <label className="form-label fs-md fw-semibold text-title" htmlFor="mdFormLast">
                      Last name
                    </label>
                    {" "}
                    <input type="text" className="form-control" id="mdFormLast" placeholder="Verma" />
                  </div>
                  <div className="col-12">
                    <label className="form-label fs-md fw-semibold text-title" htmlFor="mdFormEmail">
                      Work email
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <i data-lucide="at-sign" aria-hidden="true" />
                      </span>
                      <input type="email" className="form-control" id="mdFormEmail" placeholder="ravisha@vionex.com" />
                    </div>
                  </div>
                  <div className="col-12">
                    <label className="form-label fs-md fw-semibold text-title" htmlFor="mdFormRole">
                      Role
                    </label>
                    {" "}
                    <select className="form-select" id="mdFormRole" defaultValue="Member">
                      <option>
                        Member
                      </option>
                      <option>
                        Editor
                      </option>
                      <option>
                        Administrator
                      </option>
                    </select>
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="mdFormNotify" defaultChecked />
                      {" "}
                      <label className="form-check-label fs-md" htmlFor="mdFormNotify">
                        Send an invitation email now
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-ghost" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Add member
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* ========== Share modal ========== */}
      <div
        role="dialog"
        className="modal fade"
        id="mdShare"
        tabIndex="-1"
        aria-labelledby="mdShareTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title fs-5 fw-bold text-title" id="mdShareTitle">
                Share “Q4 Forecast”
              </h3>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <label className="form-label fs-md fw-semibold text-title" htmlFor="mdShareLink">
                Anyone with the link
              </label>
              <div className="input-group mb-4">
                <input
                  type="text"
                  className="form-control"
                  id="mdShareLink"
                  defaultValue="https://vionex.app/s/q4-forecast"
                  readOnly
                />
                <button type="button" className="btn btn-primary-soft d-inline-flex align-items-center gap-2">
                  <i className="icon-18" data-lucide="copy" aria-hidden="true" />
                  Copy
                </button>
              </div>
              <p className="fs-md fw-semibold text-title mb-2">
                People with access
              </p>
              <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                <li className="d-flex align-items-center gap-3">
                  <span className="avatar avatar-sm">
                    <img src="/assets/images/avatar-1.png" width="32" height="32" alt="" />
                  </span>
                  <div className="min-w-0 flex-grow-1">
                    <p className="fs-md fw-semibold text-title text-truncate mb-0">
                      Kabir Nair
                    </p>
                    <p className="fs-sm text-muted-2 text-truncate mb-0">
                      kabir@vionex.com
                    </p>
                  </div>
                  <span className="badge-soft tint-primary text-nowrap">
                    Owner
                  </span>
                </li>
                <li className="d-flex align-items-center gap-3">
                  <span className="avatar avatar-sm">
                    <img src="/assets/images/avatar-3.png" width="32" height="32" alt="" />
                  </span>
                  <div className="min-w-0 flex-grow-1">
                    <p className="fs-md fw-semibold text-title text-truncate mb-0">
                      Nisha Bose
                    </p>
                    <p className="fs-sm text-muted-2 text-truncate mb-0">
                      nisha@vionex.com
                    </p>
                  </div>
                  <span className="badge-soft tint-slate text-nowrap">
                    Can edit
                  </span>
                </li>
              </ul>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ========== Delete confirmation ========== */}
      <div
        role="dialog"
        className="modal fade"
        id="mdDelete"
        tabIndex="-1"
        aria-labelledby="mdDeleteTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center p-4">
              <span className="icon-box icon-box-xl tint-danger mx-auto mb-3" aria-hidden="true">
                <i data-lucide="trash-2" />
              </span>
              <h3 className="fs-5 fw-bold text-title mb-2" id="mdDeleteTitle">
                Delete this project?
              </h3>
              <p className="fs-md text-body-2 mb-0">
                Every dashboard and saved view inside “Website Redesign” will be removed. This cannot be undone.
              </p>
            </div>
            <div className="modal-footer justify-content-center">
              <button type="button" className="btn btn-ghost" data-bs-dismiss="modal">
                Cancel
              </button>
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
                Delete project
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ========== Success result ========== */}
      <div
        role="dialog"
        className="modal fade"
        id="mdSuccess"
        tabIndex="-1"
        aria-labelledby="mdSuccessTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center p-4">
              <span className="icon-box icon-box-xl tint-emerald mx-auto mb-3" aria-hidden="true">
                <i data-lucide="circle-check" />
              </span>
              <h3 className="fs-5 fw-bold text-title mb-2" id="mdSuccessTitle">
                Payment received
              </h3>
              <p className="fs-md text-body-2 mb-0">
                Invoice
                {" "}
                <bdi>
                  INV-2026-0148
                </bdi>
                {" "}for{" "}
                <bdi>
                  $12,540.00
                </bdi>
                {" "}
                has been settled. A receipt is on its way.
              </p>
            </div>
            <div className="modal-footer justify-content-center">
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ========== Offcanvas: start ========== */}
      <div
        role="dialog"
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="ocStart"
        aria-labelledby="ocStartTitle"
      >
        <div className="offcanvas-header">
          <h3 className="offcanvas-title fs-5 fw-bold text-title" id="ocStartTitle">
            Filters
          </h3>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
        <div className="offcanvas-body">
          <p className="fs-md fw-semibold text-title mb-2">
            Status
          </p>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="ocFilterActive" defaultChecked />
            {" "}
            <label className="form-check-label fs-md" htmlFor="ocFilterActive">
              Active
            </label>
          </div>
          <div className="form-check mb-4">
            <input className="form-check-input" type="checkbox" id="ocFilterArchived" />
            {" "}
            <label className="form-check-label fs-md" htmlFor="ocFilterArchived">
              Archived
            </label>
          </div>
          <label className="form-label fs-md fw-semibold text-title" htmlFor="ocFilterOwner">
            Owner
          </label>
          <select className="form-select mb-4" id="ocFilterOwner" defaultValue="Anyone">
            <option>
              Anyone
            </option>
            <option>
              Me
            </option>
            <option>
              My team
            </option>
          </select>
          <div className="d-grid gap-2">
            <button type="button" className="btn btn-primary" data-bs-dismiss="offcanvas">
              Apply filters
            </button>
            <button type="button" className="btn btn-ghost">
              Reset
            </button>
          </div>
        </div>
      </div>
      {/* ========== Offcanvas: end ========== */}
      <div role="dialog" className="offcanvas offcanvas-end" tabIndex="-1" id="ocEnd" aria-labelledby="ocEndTitle">
        <div className="offcanvas-header">
          <h3 className="offcanvas-title fs-5 fw-bold text-title" id="ocEndTitle">
            Record details
          </h3>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
        <div className="offcanvas-body">
          <div className="d-flex align-items-center gap-3 mb-4">
            <span className="avatar avatar-lg">
              <img src="/assets/images/avatar-2.png" width="56" height="56" alt="" />
            </span>
            <div className="min-w-0">
              <p className="fs-lg fw-bold text-title text-truncate mb-0">
                Meera Iyer
              </p>
              <p className="fs-md text-muted-2 text-truncate mb-0">
                Lead Product Designer
              </p>
            </div>
          </div>
          <dl className="row g-2 mb-0">
            <dt className="col-5 fs-md text-muted-2 fw-normal">
              Team
            </dt>
            <dd className="col-7 fs-md fw-medium text-title mb-0">
              Design System
            </dd>
            <dt className="col-5 fs-md text-muted-2 fw-normal">
              Location
            </dt>
            <dd className="col-7 fs-md fw-medium text-title mb-0">
              Bengaluru
            </dd>
            <dt className="col-5 fs-md text-muted-2 fw-normal">
              Joined
            </dt>
            <dd className="col-7 fs-md fw-medium text-title mb-0">
              <bdi>
                11 June 2026
              </bdi>
            </dd>
            <dt className="col-5 fs-md text-muted-2 fw-normal">
              Projects
            </dt>
            <dd className="col-7 fs-md fw-medium text-title mb-0">
              <bdi>
                128
              </bdi>
            </dd>
          </dl>
        </div>
      </div>
      {/* ========== Offcanvas: top ========== */}
      <div role="dialog" className="offcanvas offcanvas-top" tabIndex="-1" id="ocTop" aria-labelledby="ocTopTitle">
        <div className="offcanvas-header">
          <h3 className="offcanvas-title fs-5 fw-bold text-title" id="ocTopTitle">
            Announcement
          </h3>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
        <div className="offcanvas-body">
          <p className="fs-md text-body-2 mb-0">
            A top drawer works well for workspace-wide notices that should interrupt without covering the whole screen.
          </p>
        </div>
      </div>
      {/* ========== Offcanvas: bottom ========== */}
      <div
        role="dialog"
        className="offcanvas offcanvas-bottom"
        tabIndex="-1"
        id="ocBottom"
        aria-labelledby="ocBottomTitle"
      >
        <div className="offcanvas-header">
          <h3 className="offcanvas-title fs-5 fw-bold text-title" id="ocBottomTitle">
            Quick actions
          </h3>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
        <div className="offcanvas-body">
          <div className="d-flex flex-wrap gap-2">
            <button type="button" className="btn btn-outline-soft d-inline-flex align-items-center gap-2">
              <i className="icon-18" data-lucide="plus" aria-hidden="true" />
              New project
            </button>
            <button type="button" className="btn btn-outline-soft d-inline-flex align-items-center gap-2">
              <i className="icon-18" data-lucide="upload" aria-hidden="true" />
              Import data
            </button>
            <button type="button" className="btn btn-outline-soft d-inline-flex align-items-center gap-2">
              <i className="icon-18" data-lucide="user-plus" aria-hidden="true" />
              Invite a teammate
            </button>
          </div>
        </div>
      </div>
      {/* ========== FOOTER ========== */}
    </AppShell>
  );
}

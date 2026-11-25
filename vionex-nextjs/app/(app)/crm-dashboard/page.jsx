/* Generated from the Vionex HTML theme by scripts/convert-html.mjs */
import AppShell from "@/components/AppShell";

export const metadata = {
  title: "Vionex — CRM Dashboard",
  description: "Vionex enterprise admin dashboard — CRM operations overview built with Bootstrap 5, CSS variables and a scalable design system.",
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
          CRM Dashboard
        </h1>
        <nav aria-label="breadcrumb" className="d-none d-md-block">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="/">
                Dashboard
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              CRM Dashboard
            </li>
          </ol>
        </nav>
      </div>
      {/* ===== Dashboard sections go here ===== */}
      {/* ===== Welcome banner ===== */}
      <section
        className="on-dark bg-nav rounded-3 overflow-hidden flex-shrink-0 p-3 p-md-4 mb-4"
        aria-labelledby="welcome-title"
      >
        <div className="row g-4 align-items-center">
          {/* Greeting + quick actions */}
          <div className="col-12 col-xxl-7">
            <ul className="list-unstyled d-flex flex-wrap align-items-center gap-2 mb-3">
              <li>
                <span className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill bg-soft border-soft fs-xs fw-bold text-title">
                  <i className="icon-14 text-accent" data-lucide="sparkles" aria-hidden="true" />
                  AI Executive Overview • August 2026
                </span>
              </li>
              <li>
                <span className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill bg-soft border-soft fs-xs fw-semibold text-title">
                  <span className="legend-dot legend-dot-sm bg-cat-emerald" aria-hidden="true" />
                  Pipeline Health: 98.4%
                </span>
              </li>
            </ul>
            <h2 id="welcome-title" className="text-title mb-2">
              Good Morning, Alex
              {" "}
              <span aria-hidden="true">
                👋
              </span>
            </h2>
            <p className="text-primary mb-4">
              Manage customer relationships, sales pipeline, and revenue velocity from a unified workspace. Your team is currently pacing
              {" "}
              <strong className="text-title">
                18.4% ahead
              </strong>
              {" "}
              of Q3 target expectations.
            </p>
            <ul className="list-unstyled d-flex flex-wrap gap-2 mb-0">
              <li>
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#createLeadModal"
                  className="on-page tile-plain border-0 d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill fs-md fw-medium text-title transition-base"
                >
                  <i className="icon-20 text-cat-magenta" data-lucide="user-round-plus" aria-hidden="true" />
                  Create Lead
                </button>
              </li>
              <li>
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#addContactModal"
                  className="on-page tile-plain border-0 d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill fs-md fw-medium text-title transition-base"
                >
                  <i className="icon-20 text-cat-blue" data-lucide="circle-plus" aria-hidden="true" />
                  Add Contact
                </button>
              </li>
              <li>
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#scheduleMeetingModal"
                  className="on-page tile-plain border-0 d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill fs-md fw-medium text-title transition-base"
                >
                  <i className="icon-20 text-cat-blue" data-lucide="calendar-days" aria-hidden="true" />
                  Schedule Meeting
                </button>
              </li>
              <li>
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#createDealModal"
                  className="on-page tile-plain border-0 d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill fs-md fw-medium text-title transition-base"
                >
                  <i className="icon-20 text-cat-emerald" data-lucide="briefcase-business" aria-hidden="true" />
                  Create Deal
                </button>
              </li>
              <li>
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#importCsvModal"
                  className="on-page tile-plain border-0 d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill fs-md fw-medium text-muted-2 transition-base"
                >
                  <i className="icon-20" data-lucide="file-up" aria-hidden="true" />
                  Import CSV
                </button>
              </li>
            </ul>
          </div>
          {/* Pipeline snapshot */}
          <div className="col-12 col-xxl-5">
            <h3 className="visually-hidden">
              Pipeline snapshot
            </h3>
            <ul className="list-unstyled row row-cols-1 row-cols-sm-2 g-3 mb-0">
              <li className="col">
                <div className="d-flex flex-column gap-3 h-100 p-3 rounded-2 bg-soft border-soft">
                  <span className="icon-box bg-cat-emerald text-white rounded-circle" aria-hidden="true">
                    <i data-lucide="circle-dollar-sign" />
                  </span>
                  <div className="d-flex flex-column gap-1">
                    <h4 className="fs-xs fw-bold text-uppercase text-title mb-0">
                      Today’s Revenue
                    </h4>
                    <div className="d-flex flex-wrap align-items-center gap-2">
                      <span className="fs-4 fw-bold text-title">
                        <bdi>
                          $128.4K
                        </bdi>
                      </span>
                      <span className="badge-soft tint-success d-inline-flex align-items-center gap-1 px-2 py-1 fs-xs">
                        {" "}
                        <i className="icon-12" data-lucide="trending-up" aria-hidden="true" />
                        <span dir="ltr">
                          +14%
                        </span>
                        {" "}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="col">
                <div className="d-flex flex-column gap-3 h-100 p-3 rounded-2 bg-soft border-soft">
                  <span className="icon-box bg-cat-blue text-white rounded-circle" aria-hidden="true">
                    <i data-lucide="briefcase-business" />
                  </span>
                  <div className="d-flex flex-column gap-1">
                    <h4 className="fs-xs fw-bold text-uppercase text-title mb-0">
                      Open Deals
                    </h4>
                    <div className="d-flex flex-wrap align-items-center gap-2">
                      <span className="fs-4 fw-bold text-title">
                        <bdi>
                          1,248
                        </bdi>
                      </span>
                      <span className="badge-soft tint-warning d-inline-flex align-items-center gap-1 px-2 py-1 fs-xs">
                        {" "}
                        <i className="icon-12" data-lucide="trending-down" aria-hidden="true" />
                        <span dir="ltr">
                          $8.4M
                        </span>
                        {" "}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="col">
                <div className="d-flex flex-column gap-3 h-100 p-3 rounded-2 bg-soft border-soft">
                  <span className="icon-box bg-cat-violet text-white rounded-circle" aria-hidden="true">
                    <i data-lucide="users-round" />
                  </span>
                  <div className="d-flex flex-column gap-1">
                    <h4 className="fs-xs fw-bold text-uppercase text-title mb-0">
                      New Leads
                    </h4>
                    <div className="d-flex flex-wrap align-items-center gap-2">
                      <span className="fs-4 fw-bold text-title">
                        <bdi>
                          486
                        </bdi>
                      </span>
                      <span className="badge-soft tint-success d-inline-flex align-items-center gap-1 px-2 py-1 fs-xs">
                        {" "}
                        <i className="icon-12" data-lucide="trending-up" aria-hidden="true" />
                        <span dir="ltr">
                          +24%
                        </span>
                        {" "}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="col">
                <div className="d-flex flex-column gap-3 h-100 p-3 rounded-2 bg-soft border-soft">
                  <span className="icon-box bg-cat-magenta text-white rounded-circle" aria-hidden="true">
                    <i data-lucide="target" />
                  </span>
                  <div className="d-flex flex-column gap-1">
                    <h4 className="fs-xs fw-bold text-uppercase text-title mb-0">
                      Conversion
                    </h4>
                    <div className="d-flex flex-wrap align-items-center gap-2">
                      <span className="fs-4 fw-bold text-title">
                        <bdi>
                          68.4%
                        </bdi>
                      </span>
                      <span className="badge-soft tint-success d-inline-flex align-items-center gap-1 px-2 py-1 fs-xs">
                        {" "}
                        <i className="icon-12" data-lucide="trending-up" aria-hidden="true" />
                        <span dir="ltr">
                          +4.2%
                        </span>
                        {" "}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* ===== Quick-action modals (triggered by the welcome banner) ===== */}
      <div
        role="dialog"
        className="modal fade"
        id="createLeadModal"
        tabIndex="-1"
        aria-labelledby="createLeadModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
          <div className="modal-content">
            <div className="modal-header border-b-soft justify-content-between">
              <div>
                <h2 className="modal-title h5 mb-0" id="createLeadModalLabel">
                  Create Lead
                </h2>
                <p className="fs-md text-muted-2 mb-0">
                  Capture a new prospect and route it to an owner
                </p>
              </div>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <form data-modal-form="" noValidate>
              <div className="modal-body">
                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <label htmlFor="leadName" className="form-label fs-md fw-semibold text-title">
                      Full name
                    </label>
                    {" "}
                    <input
                      type="text"
                      className="form-control"
                      id="leadName"
                      name="lead-name"
                      placeholder="e.g. Marcus Bell"
                      required
                    />
                    {" "}
                    <div className="invalid-feedback">
                      Enter the lead's full name.
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="leadCompany" className="form-label fs-md fw-semibold text-title">
                      Company
                    </label>
                    {" "}
                    <input
                      type="text"
                      className="form-control"
                      id="leadCompany"
                      name="lead-company"
                      placeholder="e.g. Northwind Labs"
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="leadEmail" className="form-label fs-md fw-semibold text-title">
                      Work email
                    </label>
                    {" "}
                    <input
                      type="email"
                      className="form-control"
                      id="leadEmail"
                      name="lead-email"
                      placeholder="marcus@northwind.com"
                      required
                    />
                    {" "}
                    <div className="invalid-feedback">
                      Enter a valid work email address.
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="leadPhone" className="form-label fs-md fw-semibold text-title">
                      Phone
                    </label>
                    {" "}
                    <input
                      type="tel"
                      className="form-control"
                      id="leadPhone"
                      name="lead-phone"
                      placeholder="+1 555 0134"
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="leadSource" className="form-label fs-md fw-semibold text-title">
                      Lead source
                    </label>
                    {" "}
                    <select className="form-select" id="leadSource" name="lead-source" defaultValue="Website">
                      <option>
                        Website
                      </option>
                      <option>
                        Referral
                      </option>
                      <option>
                        Cold outreach
                      </option>
                      <option>
                        Event
                      </option>
                      <option>
                        Paid ads
                      </option>
                      <option>
                        Partner
                      </option>
                    </select>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="leadValue" className="form-label fs-md fw-semibold text-title">
                      Estimated value
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        $
                      </span>
                      <input
                        type="number"
                        className="form-control"
                        id="leadValue"
                        name="lead-value"
                        min="0"
                        step="100"
                        placeholder="25000"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="leadOwner" className="form-label fs-md fw-semibold text-title">
                      Lead owner
                    </label>
                    {" "}
                    <select className="form-select" id="leadOwner" name="lead-owner" defaultValue="Alex Morgan">
                      <option>
                        Alex Morgan
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
                    <label htmlFor="leadStatus" className="form-label fs-md fw-semibold text-title">
                      Status
                    </label>
                    {" "}
                    <select className="form-select" id="leadStatus" name="lead-status" defaultValue="New">
                      <option>
                        New
                      </option>
                      <option>
                        Contacted
                      </option>
                      <option>
                        Qualified
                      </option>
                      <option>
                        Unqualified
                      </option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label htmlFor="leadNotes" className="form-label fs-md fw-semibold text-title">
                      Notes
                    </label>
                    {" "}
                    <textarea
                      className="form-control"
                      id="leadNotes"
                      name="lead-notes"
                      rows="3"
                      placeholder="What does this prospect need, and where did the conversation start?"
                    />
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="leadFollowUp"
                        name="lead-follow-up"
                        defaultChecked
                      />
                      {" "}
                      <label className="form-check-label fs-md" htmlFor="leadFollowUp">
                        Create a follow-up task for the owner
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
                  <i className="icon-18" data-lucide="user-round-plus" aria-hidden="true" />
                  Create Lead
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        role="dialog"
        className="modal fade"
        id="addContactModal"
        tabIndex="-1"
        aria-labelledby="addContactModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
          <div className="modal-content">
            <div className="modal-header border-b-soft justify-content-between">
              <div>
                <h2 className="modal-title h5 mb-0" id="addContactModalLabel">
                  Add Contact
                </h2>
                <p className="fs-md text-muted-2 mb-0">
                  Add a person to an existing account
                </p>
              </div>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <form data-modal-form="" noValidate>
              <div className="modal-body">
                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <label htmlFor="contactFirstName" className="form-label fs-md fw-semibold text-title">
                      First name
                    </label>
                    {" "}
                    <input
                      type="text"
                      className="form-control"
                      id="contactFirstName"
                      name="contact-first-name"
                      placeholder="e.g. Dana"
                      required
                    />
                    {" "}
                    <div className="invalid-feedback">
                      Enter a first name.
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="contactLastName" className="form-label fs-md fw-semibold text-title">
                      Last name
                    </label>
                    {" "}
                    <input
                      type="text"
                      className="form-control"
                      id="contactLastName"
                      name="contact-last-name"
                      placeholder="e.g. Whitfield"
                      required
                    />
                    {" "}
                    <div className="invalid-feedback">
                      Enter a last name.
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="contactEmail" className="form-label fs-md fw-semibold text-title">
                      Email
                    </label>
                    {" "}
                    <input
                      type="email"
                      className="form-control"
                      id="contactEmail"
                      name="contact-email"
                      placeholder="dana@acme.com"
                      required
                    />
                    {" "}
                    <div className="invalid-feedback">
                      Enter a valid email address.
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="contactPhone" className="form-label fs-md fw-semibold text-title">
                      Phone
                    </label>
                    {" "}
                    <input
                      type="tel"
                      className="form-control"
                      id="contactPhone"
                      name="contact-phone"
                      placeholder="+1 555 0198"
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="contactTitle" className="form-label fs-md fw-semibold text-title">
                      Job title
                    </label>
                    {" "}
                    <input
                      type="text"
                      className="form-control"
                      id="contactTitle"
                      name="contact-title"
                      placeholder="e.g. Head of Operations"
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="contactCompany" className="form-label fs-md fw-semibold text-title">
                      Company
                    </label>
                    {" "}
                    <input
                      type="text"
                      className="form-control"
                      id="contactCompany"
                      name="contact-company"
                      placeholder="e.g. Acme Corp"
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="contactStage" className="form-label fs-md fw-semibold text-title">
                      Lifecycle stage
                    </label>
                    {" "}
                    <select className="form-select" id="contactStage" name="contact-stage" defaultValue="Lead">
                      <option>
                        Subscriber
                      </option>
                      <option>
                        Lead
                      </option>
                      <option>
                        Marketing qualified
                      </option>
                      <option>
                        Sales qualified
                      </option>
                      <option>
                        Customer
                      </option>
                    </select>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="contactOwner" className="form-label fs-md fw-semibold text-title">
                      Account owner
                    </label>
                    {" "}
                    <select className="form-select" id="contactOwner" name="contact-owner" defaultValue="Alex Morgan">
                      <option>
                        Alex Morgan
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
                  <div className="col-12">
                    <label htmlFor="contactNotes" className="form-label fs-md fw-semibold text-title">
                      Notes
                    </label>
                    {" "}
                    <textarea
                      className="form-control"
                      id="contactNotes"
                      name="contact-notes"
                      rows="3"
                      placeholder="Role in the buying committee, preferred channel, anything the team should know."
                    />
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="contactOptIn"
                        name="contact-opt-in"
                        defaultChecked
                      />
                      {" "}
                      <label className="form-check-label fs-md" htmlFor="contactOptIn">
                        Contact has opted in to marketing email
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
                  Add Contact
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        role="dialog"
        className="modal fade"
        id="scheduleMeetingModal"
        tabIndex="-1"
        aria-labelledby="scheduleMeetingModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
          <div className="modal-content">
            <div className="modal-header border-b-soft justify-content-between">
              <div>
                <h2 className="modal-title h5 mb-0" id="scheduleMeetingModalLabel">
                  Schedule Meeting
                </h2>
                <p className="fs-md text-muted-2 mb-0">
                  Book time with a contact and send the invite
                </p>
              </div>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <form data-modal-form="" noValidate>
              <div className="modal-body">
                <div className="row g-3">
                  <div className="col-12">
                    <label htmlFor="meetingTitle" className="form-label fs-md fw-semibold text-title">
                      Meeting title
                    </label>
                    {" "}
                    <input
                      type="text"
                      className="form-control"
                      id="meetingTitle"
                      name="meeting-title"
                      placeholder="e.g. Northwind — pricing walkthrough"
                      required
                    />
                    {" "}
                    <div className="invalid-feedback">
                      Give the meeting a title.
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="meetingRelated" className="form-label fs-md fw-semibold text-title">
                      Related to
                    </label>
                    {" "}
                    <select
                      className="form-select"
                      id="meetingRelated"
                      name="meeting-related"
                      defaultValue="Northwind Labs — Enterprise renewal"
                    >
                      <option>
                        Northwind Labs — Enterprise renewal
                      </option>
                      <option>
                        Acme Corp — Platform migration
                      </option>
                      <option>
                        Vertex Retail — Pilot expansion
                      </option>
                      <option>
                        No related record
                      </option>
                    </select>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="meetingAttendees" className="form-label fs-md fw-semibold text-title">
                      Attendees
                    </label>
                    {" "}
                    <input
                      type="text"
                      className="form-control"
                      id="meetingAttendees"
                      name="meeting-attendees"
                      placeholder="dana@acme.com, priya@vionex.com"
                      aria-describedby="meetingAttendeesHelp"
                    />
                    {" "}
                    <span className="d-block fs-xs text-muted-2 mt-1" id="meetingAttendeesHelp">
                      Separate email addresses with a comma.
                    </span>
                  </div>
                  <div className="col-12 col-md-4">
                    <label htmlFor="meetingDate" className="form-label fs-md fw-semibold text-title">
                      Date
                    </label>
                    {" "}
                    <input type="date" className="form-control" id="meetingDate" name="meeting-date" required />
                    {" "}
                    <div className="invalid-feedback">
                      Pick a date.
                    </div>
                  </div>
                  <div className="col-12 col-md-4">
                    <label htmlFor="meetingTime" className="form-label fs-md fw-semibold text-title">
                      Start time
                    </label>
                    {" "}
                    <input type="time" className="form-control" id="meetingTime" name="meeting-time" required />
                    {" "}
                    <div className="invalid-feedback">
                      Pick a start time.
                    </div>
                  </div>
                  <div className="col-12 col-md-4">
                    <label htmlFor="meetingDuration" className="form-label fs-md fw-semibold text-title">
                      Duration
                    </label>
                    {" "}
                    <select
                      className="form-select"
                      id="meetingDuration"
                      name="meeting-duration"
                      defaultValue="30 minutes"
                    >
                      <option>
                        15 minutes
                      </option>
                      <option>
                        30 minutes
                      </option>
                      <option>
                        45 minutes
                      </option>
                      <option>
                        1 hour
                      </option>
                      <option>
                        1 hour 30 minutes
                      </option>
                    </select>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="meetingType" className="form-label fs-md fw-semibold text-title">
                      Meeting type
                    </label>
                    {" "}
                    <select className="form-select" id="meetingType" name="meeting-type" defaultValue="Video call">
                      <option>
                        Video call
                      </option>
                      <option>
                        Phone call
                      </option>
                      <option>
                        In person
                      </option>
                    </select>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="meetingLocation" className="form-label fs-md fw-semibold text-title">
                      Link or location
                    </label>
                    {" "}
                    <input
                      type="text"
                      className="form-control"
                      id="meetingLocation"
                      name="meeting-location"
                      placeholder="https://meet.vionex.com/northwind"
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="meetingAgenda" className="form-label fs-md fw-semibold text-title">
                      Agenda
                    </label>
                    {" "}
                    <textarea
                      className="form-control"
                      id="meetingAgenda"
                      name="meeting-agenda"
                      rows="3"
                      placeholder="What needs to be decided by the end of this call?"
                    />
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="meetingInvite"
                        name="meeting-invite"
                        defaultChecked
                      />
                      {" "}
                      <label className="form-check-label fs-md" htmlFor="meetingInvite">
                        Send a calendar invite to all attendees
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
                  <i className="icon-18" data-lucide="calendar-days" aria-hidden="true" />
                  Schedule Meeting
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        role="dialog"
        className="modal fade"
        id="createDealModal"
        tabIndex="-1"
        aria-labelledby="createDealModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
          <div className="modal-content">
            <div className="modal-header border-b-soft justify-content-between">
              <div>
                <h2 className="modal-title h5 mb-0" id="createDealModalLabel">
                  Create Deal
                </h2>
                <p className="fs-md text-muted-2 mb-0">
                  Open an opportunity and place it on the pipeline
                </p>
              </div>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <form data-modal-form="" noValidate>
              <div className="modal-body">
                <div className="row g-3">
                  <div className="col-12">
                    <label htmlFor="dealName" className="form-label fs-md fw-semibold text-title">
                      Deal name
                    </label>
                    {" "}
                    <input
                      type="text"
                      className="form-control"
                      id="dealName"
                      name="deal-name"
                      placeholder="e.g. Northwind Labs — Enterprise renewal"
                      required
                    />
                    {" "}
                    <div className="invalid-feedback">
                      Give the deal a name.
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="dealAccount" className="form-label fs-md fw-semibold text-title">
                      Account
                    </label>
                    {" "}
                    <input
                      type="text"
                      className="form-control"
                      id="dealAccount"
                      name="deal-account"
                      placeholder="e.g. Northwind Labs"
                      required
                    />
                    {" "}
                    <div className="invalid-feedback">
                      Enter the account this deal belongs to.
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="dealContact" className="form-label fs-md fw-semibold text-title">
                      Primary contact
                    </label>
                    {" "}
                    <select className="form-select" id="dealContact" name="deal-contact" defaultValue="Dana Whitfield">
                      <option>
                        Dana Whitfield
                      </option>
                      <option>
                        Marcus Bell
                      </option>
                      <option>
                        Elena Sokolova
                      </option>
                      <option>
                        Tobias Reed
                      </option>
                    </select>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="dealValue" className="form-label fs-md fw-semibold text-title">
                      Deal value
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        $
                      </span>
                      <input
                        type="number"
                        className="form-control"
                        id="dealValue"
                        name="deal-value"
                        min="0"
                        step="500"
                        placeholder="120000"
                        required
                      />
                      <div className="invalid-feedback">
                        Enter the expected deal value.
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="dealStage" className="form-label fs-md fw-semibold text-title">
                      Stage
                    </label>
                    {" "}
                    <select className="form-select" id="dealStage" name="deal-stage" defaultValue="Qualification">
                      <option>
                        Qualification
                      </option>
                      <option>
                        Discovery
                      </option>
                      <option>
                        Proposal
                      </option>
                      <option>
                        Negotiation
                      </option>
                      <option>
                        Closed won
                      </option>
                      <option>
                        Closed lost
                      </option>
                    </select>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="dealProbability" className="form-label fs-md fw-semibold text-title">
                      Probability
                    </label>
                    <div className="input-group">
                      <input
                        type="number"
                        className="form-control"
                        id="dealProbability"
                        name="deal-probability"
                        min="0"
                        max="100"
                        step="5"
                        placeholder="40"
                      />
                      <span className="input-group-text">
                        %
                      </span>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="dealClose" className="form-label fs-md fw-semibold text-title">
                      Expected close date
                    </label>
                    {" "}
                    <input type="date" className="form-control" id="dealClose" name="deal-close" />
                  </div>
                  <div className="col-12">
                    <label htmlFor="dealOwner" className="form-label fs-md fw-semibold text-title">
                      Deal owner
                    </label>
                    {" "}
                    <select className="form-select" id="dealOwner" name="deal-owner" defaultValue="Alex Morgan">
                      <option>
                        Alex Morgan
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
                  <div className="col-12">
                    <label htmlFor="dealNotes" className="form-label fs-md fw-semibold text-title">
                      Description
                    </label>
                    {" "}
                    <textarea
                      className="form-control"
                      id="dealNotes"
                      name="deal-notes"
                      rows="3"
                      placeholder="Scope, competing vendors, and what has to happen before close."
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer border-t-soft">
                <button type="button" className="btn btn-outline-soft" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary d-inline-flex align-items-center gap-2">
                  <i className="icon-18" data-lucide="briefcase-business" aria-hidden="true" />
                  Create Deal
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        role="dialog"
        className="modal fade"
        id="importCsvModal"
        tabIndex="-1"
        aria-labelledby="importCsvModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header border-b-soft justify-content-between">
              <div>
                <h2 className="modal-title h5 mb-0" id="importCsvModalLabel">
                  Import CSV
                </h2>
                <p className="fs-md text-muted-2 mb-0">
                  Bulk-load records from a spreadsheet export
                </p>
              </div>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <form data-modal-form="" noValidate>
              <div className="modal-body">
                <div className="row g-3">
                  <div className="col-12">
                    <label htmlFor="importType" className="form-label fs-md fw-semibold text-title">
                      Record type
                    </label>
                    {" "}
                    <select className="form-select" id="importType" name="import-type" defaultValue="Leads">
                      <option>
                        Leads
                      </option>
                      <option>
                        Contacts
                      </option>
                      <option>
                        Deals
                      </option>
                      <option>
                        Companies
                      </option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label htmlFor="importFile" className="form-label fs-md fw-semibold text-title">
                      CSV file
                    </label>
                    {" "}
                    <input
                      type="file"
                      className="form-control"
                      id="importFile"
                      name="import-file"
                      accept=".csv,text/csv"
                      aria-describedby="importFileHelp"
                      required
                    />
                    {" "}
                    <div className="invalid-feedback">
                      Choose a .csv file to import.
                    </div>
                    {" "}
                    <span className="d-block fs-xs text-muted-2 mt-1" id="importFileHelp">
                      Up to 10 MB. Need the column layout?
                      {" "}
                      <a href="#" className="text-body-2">
                        Download the sample template
                      </a>
                      .
                    </span>
                  </div>
                  <div className="col-12 col-sm-6">
                    <label htmlFor="importDelimiter" className="form-label fs-md fw-semibold text-title">
                      Delimiter
                    </label>
                    {" "}
                    <select
                      className="form-select"
                      id="importDelimiter"
                      name="import-delimiter"
                      defaultValue="Comma (,)"
                    >
                      <option>
                        Comma (,)
                      </option>
                      <option>
                        Semicolon (;)
                      </option>
                      <option>
                        Tab
                      </option>
                    </select>
                  </div>
                  <div className="col-12 col-sm-6">
                    <label htmlFor="importDuplicates" className="form-label fs-md fw-semibold text-title">
                      Duplicates
                    </label>
                    {" "}
                    <select
                      className="form-select"
                      id="importDuplicates"
                      name="import-duplicates"
                      defaultValue="Skip duplicate rows"
                    >
                      <option>
                        Skip duplicate rows
                      </option>
                      <option>
                        Update existing records
                      </option>
                      <option>
                        Import anyway
                      </option>
                    </select>
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="importHeader"
                        name="import-header"
                        defaultChecked
                      />
                      {" "}
                      <label className="form-check-label fs-md" htmlFor="importHeader">
                        First row contains column headers
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
                  <i className="icon-18" data-lucide="file-up" aria-hidden="true" />
                  Import CSV
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* ===== Key metrics ===== */}
      <section className="mb-4">
        <h2 className="visually-hidden">
          Key metrics
        </h2>
        <ul className="list-unstyled row row-cols-1 row-cols-sm-2 row-cols-xl-3 row-cols-xxl-5 g-3 mb-0">
          <li className="col">
            <div className="d-flex flex-column gap-3 h-100 p-3 rounded-4 bg-wash-violet">
              <div className="d-flex align-items-start justify-content-between gap-2">
                <div className="d-flex flex-column gap-2 min-w-0">
                  <h3 className="fs-xs fw-semibold text-uppercase text-body-2 mb-0">
                    Total Revenue
                  </h3>
                  <span className="fs-2 fw-bold text-title">
                    <bdi>
                      $2,840,500
                    </bdi>
                  </span>
                </div>
                <span className="icon-box bg-cat-violet text-white rounded-circle" aria-hidden="true">
                  <i data-lucide="dollar-sign" />
                </span>
              </div>
              <div id="crmRevenueSpark" className="chart-area" />
              <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 border-t-soft pt-2 mt-auto">
                <span className="badge-soft tint-success d-inline-flex align-items-center gap-1 px-2 py-1 fs-xs">
                  {" "}
                  <i className="icon-12" data-lucide="trending-up" aria-hidden="true" />
                  <span dir="ltr">
                    +18.4%
                  </span>
                  {" "}
                </span>
                <span className="fs-xs fw-medium text-body-2">
                  vs last quarter ($2.4M)
                </span>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="d-flex flex-column gap-3 h-100 p-3 rounded-4 bg-wash-blue">
              <div className="d-flex align-items-start justify-content-between gap-2">
                <div className="d-flex flex-column gap-2 min-w-0">
                  <h3 className="fs-xs fw-semibold text-uppercase text-body-2 mb-0">
                    Open Deals
                  </h3>
                  <span className="fs-2 fw-bold text-title">
                    <bdi>
                      1,248
                    </bdi>
                  </span>
                </div>
                <span className="icon-box bg-cat-blue text-white rounded-circle" aria-hidden="true">
                  <i data-lucide="briefcase-business" />
                </span>
              </div>
              <div id="crmOpenDealsSpark" className="chart-area" />
              <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 border-t-soft pt-2 mt-auto">
                <span className="badge-soft tint-success d-inline-flex align-items-center gap-1 px-2 py-1 fs-xs">
                  {" "}
                  <i className="icon-12" data-lucide="trending-up" aria-hidden="true" />
                  <span dir="ltr">
                    +12.2%
                  </span>
                  {" "}
                </span>
                <span className="fs-xs fw-medium text-body-2">
                  Pipeline value $8.4M
                </span>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="d-flex flex-column gap-3 h-100 p-3 rounded-4 bg-wash-emerald">
              <div className="d-flex align-items-start justify-content-between gap-2">
                <div className="d-flex flex-column gap-2 min-w-0">
                  <h3 className="fs-xs fw-semibold text-uppercase text-body-2 mb-0">
                    New Leads
                  </h3>
                  <span className="fs-2 fw-bold text-title">
                    <bdi>
                      486
                    </bdi>
                  </span>
                </div>
                <span className="icon-box bg-cat-emerald text-white rounded-circle" aria-hidden="true">
                  <i data-lucide="users-round" />
                </span>
              </div>
              <div id="crmNewLeadsSpark" className="chart-area" />
              <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 border-t-soft pt-2 mt-auto">
                <span className="badge-soft tint-success d-inline-flex align-items-center gap-1 px-2 py-1 fs-xs">
                  {" "}
                  <i className="icon-12" data-lucide="trending-up" aria-hidden="true" />
                  <span dir="ltr">
                    +24.5%
                  </span>
                  {" "}
                </span>
                <span className="fs-xs fw-medium text-body-2">
                  142 SQLs this month
                </span>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="d-flex flex-column gap-3 h-100 p-3 rounded-4 bg-wash-amber">
              <div className="d-flex align-items-start justify-content-between gap-2">
                <div className="d-flex flex-column gap-2 min-w-0">
                  <h3 className="fs-xs fw-semibold text-uppercase text-body-2 mb-0">
                    Won Deals
                  </h3>
                  <span className="fs-2 fw-bold text-title">
                    <bdi>
                      824
                    </bdi>
                  </span>
                </div>
                <span className="icon-box bg-cat-amber text-white rounded-circle" aria-hidden="true">
                  <i data-lucide="trophy" />
                </span>
              </div>
              <div id="crmWonDealsSpark" className="chart-area" />
              <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 border-t-soft pt-2 mt-auto">
                <span className="badge-soft tint-success d-inline-flex align-items-center gap-1 px-2 py-1 fs-xs">
                  {" "}
                  <i className="icon-12" data-lucide="trending-up" aria-hidden="true" />
                  <span dir="ltr">
                    +15.8%
                  </span>
                  {" "}
                </span>
                <span className="fs-xs fw-medium text-body-2">
                  Avg deal length 18 days
                </span>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="d-flex flex-column gap-3 h-100 p-3 rounded-4 bg-wash-brand">
              <div className="d-flex align-items-start justify-content-between gap-2">
                <div className="d-flex flex-column gap-2 min-w-0">
                  <h3 className="fs-xs fw-semibold text-uppercase text-body-2 mb-0">
                    Conversion Rate
                  </h3>
                  <span className="fs-2 fw-bold text-title">
                    <bdi>
                      68.4%
                    </bdi>
                  </span>
                </div>
                <span className="icon-box bg-cat-brand text-white rounded-circle" aria-hidden="true">
                  <i data-lucide="trending-up" />
                </span>
              </div>
              <div id="crmConversionSpark" className="chart-area" />
              <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 border-t-soft pt-2 mt-auto">
                <span className="badge-soft tint-success d-inline-flex align-items-center gap-1 px-2 py-1 fs-xs">
                  {" "}
                  <i className="icon-12" data-lucide="trending-up" aria-hidden="true" />
                  <span dir="ltr">
                    +4.2%
                  </span>
                  {" "}
                </span>
                <span className="fs-xs fw-medium text-body-2">
                  Industry benchmark 52%
                </span>
              </div>
            </div>
          </li>
        </ul>
      </section>
      {/* ===== Deal performance & AI assistant ===== */}
      <section className="mb-4">
        <h2 className="visually-hidden">
          Deal performance and AI assistant
        </h2>
        <div className="row g-3">
          <div className="col-12 col-xxl-8">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    Deal Performance
                  </h3>
                  <div
                    className="nav nav-pills seg-toggle flex-nowrap gap-1 p-1 rounded-pill bg-soft"
                    role="group"
                    aria-label="Deal performance time range"
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
                <div id="dealPerformanceChart" className="chart-area flex-grow-1" />
                <ul className="d-flex flex-wrap align-items-center gap-3 fs-md text-body-2 mt-3 mb-0">
                  <li className="d-inline-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-emerald" />
                    Revenue
                  </li>
                  <li className="d-inline-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-blue" />
                    Closed Deals
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
                          Explain pipeline analytics
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
                    <label htmlFor="crmAssistantPrompt" className="visually-hidden">
                      Ask the AI assistant
                    </label>
                    <input
                      type="text"
                      id="crmAssistantPrompt"
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
      {/* ===== Pipeline & lead sources ===== */}
      <section className="mb-4">
        <h2 className="visually-hidden">
          Sales pipeline and lead sources
        </h2>
        <div className="row g-3">
          <div className="col-12 col-xxl-6">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <h3 className="fs-5 fw-bold text-title mb-3">
                  Sales Pipeline Overview
                </h3>
                <div className="row g-3">
                  <div className="col-12 col-md-7">
                    <ul className="rail-list list-unstyled d-flex flex-column mb-0">
                      <li className="d-flex align-items-center gap-3 py-2">
                        <span className="rail-dot bg-cat-brand" aria-hidden="true" />
                        <div className="flex-grow-1 min-w-0 d-flex align-items-center gap-2 px-3 py-2 rounded-pill tint-blue border-current">
                          <span
                            className="icon-box icon-box-lg bg-cat-blue text-white rounded-circle flex-shrink-0"
                            aria-hidden="true"
                          >
                            <i data-lucide="user-round-plus" />
                          </span>
                          <span className="flex-grow-1 min-w-0">
                            {" "}
                            <span className="d-block fw-medium text-title text-truncate">
                              New Lead
                            </span>
                            {" "}
                            <span className="d-flex flex-wrap align-items-baseline gap-2">
                              <span className="fs-3 fw-bold text-title">
                                <bdi>
                                  1,482
                                </bdi>
                              </span>
                              <span className="text-body-2">
                                <bdi>
                                  $9.6M
                                </bdi>
                              </span>
                            </span>
                            {" "}
                          </span>
                          <div className="position-relative flex-shrink-0">
                            <div id="crmStageNewLead" />
                            <span className="chart-center fs-md fw-semibold text-title">
                              <bdi>
                                100%
                              </bdi>
                            </span>
                          </div>
                        </div>
                      </li>
                      <li className="d-flex align-items-center gap-3 py-2">
                        <span className="rail-dot bg-cat-brand" aria-hidden="true" />
                        <div className="flex-grow-1 min-w-0 d-flex align-items-center gap-2 px-3 py-2 rounded-pill tint-violet border-current">
                          <span
                            className="icon-box icon-box-lg bg-cat-violet text-white rounded-circle flex-shrink-0"
                            aria-hidden="true"
                          >
                            <i data-lucide="user-round-check" />
                          </span>
                          <span className="flex-grow-1 min-w-0">
                            {" "}
                            <span className="d-block fw-medium text-title text-truncate">
                              Qualified
                            </span>
                            {" "}
                            <span className="d-flex flex-wrap align-items-baseline gap-2">
                              <span className="fs-3 fw-bold text-title">
                                <bdi>
                                  964
                                </bdi>
                              </span>
                              <span className="text-body-2">
                                <bdi>
                                  $6.2M
                                </bdi>
                              </span>
                            </span>
                            {" "}
                          </span>
                          <div className="position-relative flex-shrink-0">
                            <div id="crmStageQualified" />
                            <span className="chart-center fs-md fw-semibold text-title">
                              <bdi>
                                65%
                              </bdi>
                            </span>
                          </div>
                        </div>
                      </li>
                      <li className="d-flex align-items-center gap-3 py-2">
                        <span className="rail-dot bg-cat-brand" aria-hidden="true" />
                        <div className="flex-grow-1 min-w-0 d-flex align-items-center gap-2 px-3 py-2 rounded-pill tint-magenta border-current">
                          <span
                            className="icon-box icon-box-lg bg-cat-magenta text-white rounded-circle flex-shrink-0"
                            aria-hidden="true"
                          >
                            <i data-lucide="file-text" />
                          </span>
                          <span className="flex-grow-1 min-w-0">
                            {" "}
                            <span className="d-block fw-medium text-title text-truncate">
                              Proposal
                            </span>
                            {" "}
                            <span className="d-flex flex-wrap align-items-baseline gap-2">
                              <span className="fs-3 fw-bold text-title">
                                <bdi>
                                  612
                                </bdi>
                              </span>
                              <span className="text-body-2">
                                <bdi>
                                  $4.1M
                                </bdi>
                              </span>
                            </span>
                            {" "}
                          </span>
                          <div className="position-relative flex-shrink-0">
                            <div id="crmStageProposal" />
                            <span className="chart-center fs-md fw-semibold text-title">
                              <bdi>
                                41%
                              </bdi>
                            </span>
                          </div>
                        </div>
                      </li>
                      <li className="d-flex align-items-center gap-3 py-2">
                        <span className="rail-dot bg-cat-brand" aria-hidden="true" />
                        <div className="flex-grow-1 min-w-0 d-flex align-items-center gap-2 px-3 py-2 rounded-pill tint-amber border-current">
                          <span
                            className="icon-box icon-box-lg bg-cat-amber text-white rounded-circle flex-shrink-0"
                            aria-hidden="true"
                          >
                            <i data-lucide="handshake" />
                          </span>
                          <span className="flex-grow-1 min-w-0">
                            {" "}
                            <span className="d-block fw-medium text-title text-truncate">
                              Negotiation
                            </span>
                            {" "}
                            <span className="d-flex flex-wrap align-items-baseline gap-2">
                              <span className="fs-3 fw-bold text-title">
                                <bdi>
                                  386
                                </bdi>
                              </span>
                              <span className="text-body-2">
                                <bdi>
                                  $2.8M
                                </bdi>
                              </span>
                            </span>
                            {" "}
                          </span>
                          <div className="position-relative flex-shrink-0">
                            <div id="crmStageNegotiation" />
                            <span className="chart-center fs-md fw-semibold text-title">
                              <bdi>
                                26%
                              </bdi>
                            </span>
                          </div>
                        </div>
                      </li>
                      <li className="d-flex align-items-center gap-3 py-2">
                        <span className="rail-dot bg-cat-brand" aria-hidden="true" />
                        <div className="flex-grow-1 min-w-0 d-flex align-items-center gap-2 px-3 py-2 rounded-pill tint-emerald border-current">
                          <span
                            className="icon-box icon-box-lg bg-cat-emerald text-white rounded-circle flex-shrink-0"
                            aria-hidden="true"
                          >
                            <i data-lucide="trophy" />
                          </span>
                          <span className="flex-grow-1 min-w-0">
                            {" "}
                            <span className="d-block fw-medium text-title text-truncate">
                              Won
                            </span>
                            {" "}
                            <span className="d-flex flex-wrap align-items-baseline gap-2">
                              <span className="fs-3 fw-bold text-title">
                                <bdi>
                                  248
                                </bdi>
                              </span>
                              <span className="text-body-2">
                                <bdi>
                                  $1.9M
                                </bdi>
                              </span>
                            </span>
                            {" "}
                          </span>
                          <div className="position-relative flex-shrink-0">
                            <div id="crmStageWon" />
                            <span className="chart-center fs-md fw-semibold text-title">
                              <bdi>
                                17%
                              </bdi>
                            </span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12 col-md-5">
                    <ul className="list-unstyled bg-plain border-theme rounded-4 h-100 d-flex flex-column justify-content-between gap-3 p-3 mb-0">
                      <li className="d-flex align-items-center gap-2">
                        <span
                          className="icon-box bg-soft text-cat-violet rounded-circle flex-shrink-0"
                          aria-hidden="true"
                        >
                          <i data-lucide="filter" />
                        </span>
                        <span className="min-w-0">
                          {" "}
                          <span className="d-flex flex-wrap align-items-baseline gap-2">
                            <span className="fs-5 fw-bold text-title">
                              <bdi>
                                18.6%
                              </bdi>
                            </span>
                            <span className="d-inline-flex align-items-center gap-1 fs-md fw-semibold text-cat-emerald">
                              <i className="icon-12" data-lucide="trending-up" aria-hidden="true" />
                              <span dir="ltr">
                                +18.2%
                              </span>
                            </span>
                          </span>
                          {" "}
                          <span className="d-block text-muted-2">
                            Conversion Rate
                          </span>
                          {" "}
                        </span>
                      </li>
                      <li className="divider-fade flex-shrink-0" aria-hidden="true" />
                      <li className="d-flex align-items-center gap-2">
                        <span
                          className="icon-box bg-soft text-cat-blue rounded-circle flex-shrink-0"
                          aria-hidden="true"
                        >
                          <i data-lucide="circle-dollar-sign" />
                        </span>
                        <span className="min-w-0">
                          {" "}
                          <span className="d-flex flex-wrap align-items-baseline gap-2">
                            <span className="fs-5 fw-bold text-title">
                              <bdi>
                                $122K
                              </bdi>
                            </span>
                            <span className="d-inline-flex align-items-center gap-1 fs-md fw-semibold text-cat-emerald">
                              <i className="icon-12" data-lucide="trending-up" aria-hidden="true" />
                              <span dir="ltr">
                                +6.4%
                              </span>
                            </span>
                          </span>
                          {" "}
                          <span className="d-block text-muted-2">
                            Avg. Deal Value
                          </span>
                          {" "}
                        </span>
                      </li>
                      <li className="divider-fade flex-shrink-0" aria-hidden="true" />
                      <li className="d-flex align-items-center gap-2">
                        <span
                          className="icon-box bg-soft text-cat-blue rounded-circle flex-shrink-0"
                          aria-hidden="true"
                        >
                          <i data-lucide="user-round-plus" />
                        </span>
                        <span className="min-w-0">
                          {" "}
                          <span className="d-flex flex-wrap align-items-baseline gap-2">
                            <span className="fs-5 fw-bold text-title">
                              <bdi>
                                46
                              </bdi>
                            </span>
                            <span className="d-inline-flex align-items-center gap-1 fs-md fw-semibold text-cat-emerald">
                              <i className="icon-12" data-lucide="trending-up" aria-hidden="true" />
                              <span dir="ltr">
                                +12.1%
                              </span>
                            </span>
                          </span>
                          {" "}
                          <span className="d-block text-muted-2">
                            Avg. Daily Leads
                          </span>
                          {" "}
                        </span>
                      </li>
                      <li className="divider-fade flex-shrink-0" aria-hidden="true" />
                      <li className="d-flex align-items-center gap-2">
                        <span
                          className="icon-box bg-soft text-cat-violet rounded-circle flex-shrink-0"
                          aria-hidden="true"
                        >
                          <i data-lucide="target" />
                        </span>
                        <span className="min-w-0">
                          {" "}
                          <span className="d-flex flex-wrap align-items-baseline gap-2">
                            <span className="fs-5 fw-bold text-title">
                              <bdi>
                                24.5%
                              </bdi>
                            </span>
                            <span className="d-inline-flex align-items-center gap-1 fs-md fw-semibold text-cat-emerald">
                              <i className="icon-12" data-lucide="trending-up" aria-hidden="true" />
                              <span dir="ltr">
                                +3.8%
                              </span>
                            </span>
                          </span>
                          {" "}
                          <span className="d-block text-muted-2">
                            Win Rate
                          </span>
                          {" "}
                        </span>
                      </li>
                      <li className="divider-fade flex-shrink-0" aria-hidden="true" />
                      <li className="d-flex align-items-center gap-2">
                        <span
                          className="icon-box bg-soft text-cat-blue rounded-circle flex-shrink-0"
                          aria-hidden="true"
                        >
                          <i data-lucide="calendar-days" />
                        </span>
                        <span className="min-w-0">
                          {" "}
                          <span className="d-flex flex-wrap align-items-baseline gap-2">
                            <span className="fs-5 fw-bold text-title">
                              30 Days
                            </span>
                            <span className="d-inline-flex align-items-center gap-1 fs-md fw-semibold text-cat-emerald">
                              <i className="icon-12" data-lucide="trending-down" aria-hidden="true" />
                              <span dir="ltr">
                                -4 days
                              </span>
                            </span>
                          </span>
                          {" "}
                          <span className="d-block text-muted-2">
                            Avg. Sales Cycle
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
          <div className="col-12 col-xxl-6">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    Lead Source Attribution
                  </h3>
                  <span className="badge-soft tint-success d-inline-flex align-items-center gap-2">
                    {" "}
                    <span className="legend-dot legend-dot-sm bg-cat-emerald" aria-hidden="true" />
                    Live
                    {" "}
                  </span>
                </div>
                <div className="row g-3 flex-grow-1">
                  <div className="col-12 col-lg-6 d-flex align-items-center">
                    <div className="position-relative w-100">
                      <div id="crmLeadSourceChart" className="chart-area" />
                      <span className="chart-center">
                        <span className="d-block fs-1 fw-bold text-title">
                          <bdi>
                            486
                          </bdi>
                        </span>
                        <span className="d-block fs-xs fw-semibold text-uppercase text-muted-2">
                          New Leads
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <ul className="list-unstyled h-100 d-flex flex-column justify-content-center gap-2 mb-0">
                      <li className="bg-plain border-theme d-flex flex-column gap-2 p-3 rounded-2">
                        <span className="d-flex align-items-center justify-content-between gap-2">
                          <span className="d-inline-flex align-items-center gap-2 min-w-0">
                            <span
                              className="icon-box icon-box-sm bg-cat-violet text-white rounded-circle flex-shrink-0"
                              aria-hidden="true"
                            >
                              <i data-lucide="search" />
                            </span>
                            <span className="fw-medium text-title text-truncate">
                              Organic Search
                            </span>
                          </span>
                          <span className="d-inline-flex align-items-baseline gap-2 flex-shrink-0">
                            <span className="fs-md text-muted-2">
                              <bdi>
                                482K
                              </bdi>
                            </span>
                            <span className="fw-bold text-title">
                              <bdi>
                                38.4%
                              </bdi>
                            </span>
                          </span>
                        </span>
                        <span
                          className="progress"
                          role="progressbar"
                          aria-label="Organic Search share of new leads"
                          aria-valuenow="38.4"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="progress-bar bg-cat-violet" style={{ width: "38.4%" }} />
                        </span>
                      </li>
                      <li className="bg-plain border-theme d-flex flex-column gap-2 p-3 rounded-2">
                        <span className="d-flex align-items-center justify-content-between gap-2">
                          <span className="d-inline-flex align-items-center gap-2 min-w-0">
                            <span
                              className="icon-box icon-box-sm bg-cat-emerald text-white rounded-circle flex-shrink-0"
                              aria-hidden="true"
                            >
                              <i data-lucide="mouse-pointer-click" />
                            </span>
                            <span className="fw-medium text-title text-truncate">
                              Direct
                            </span>
                          </span>
                          <span className="d-inline-flex align-items-baseline gap-2 flex-shrink-0">
                            <span className="fs-md text-muted-2">
                              <bdi>
                                311K
                              </bdi>
                            </span>
                            <span className="fw-bold text-title">
                              <bdi>
                                24.8%
                              </bdi>
                            </span>
                          </span>
                        </span>
                        <span
                          className="progress"
                          role="progressbar"
                          aria-label="Direct share of new leads"
                          aria-valuenow="24.8"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="progress-bar bg-cat-emerald" style={{ width: "24.8%" }} />
                        </span>
                      </li>
                      <li className="bg-plain border-theme d-flex flex-column gap-2 p-3 rounded-2">
                        <span className="d-flex align-items-center justify-content-between gap-2">
                          <span className="d-inline-flex align-items-center gap-2 min-w-0">
                            <span
                              className="icon-box icon-box-sm bg-cat-blue text-white rounded-circle flex-shrink-0"
                              aria-hidden="true"
                            >
                              <i data-lucide="link" />
                            </span>
                            <span className="fw-medium text-title text-truncate">
                              Referral
                            </span>
                          </span>
                          <span className="d-inline-flex align-items-baseline gap-2 flex-shrink-0">
                            <span className="fs-md text-muted-2">
                              <bdi>
                                228K
                              </bdi>
                            </span>
                            <span className="fw-bold text-title">
                              <bdi>
                                18.2%
                              </bdi>
                            </span>
                          </span>
                        </span>
                        <span
                          className="progress"
                          role="progressbar"
                          aria-label="Referral share of new leads"
                          aria-valuenow="18.2"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="progress-bar bg-cat-blue" style={{ width: "18.2%" }} />
                        </span>
                      </li>
                      <li className="bg-plain border-theme d-flex flex-column gap-2 p-3 rounded-2">
                        <span className="d-flex align-items-center justify-content-between gap-2">
                          <span className="d-inline-flex align-items-center gap-2 min-w-0">
                            <span
                              className="icon-box icon-box-sm bg-cat-amber text-white rounded-circle flex-shrink-0"
                              aria-hidden="true"
                            >
                              <i data-lucide="share-2" />
                            </span>
                            <span className="fw-medium text-title text-truncate">
                              Social Media
                            </span>
                          </span>
                          <span className="d-inline-flex align-items-baseline gap-2 flex-shrink-0">
                            <span className="fs-md text-muted-2">
                              <bdi>
                                158K
                              </bdi>
                            </span>
                            <span className="fw-bold text-title">
                              <bdi>
                                12.6%
                              </bdi>
                            </span>
                          </span>
                        </span>
                        <span
                          className="progress"
                          role="progressbar"
                          aria-label="Social Media share of new leads"
                          aria-valuenow="12.6"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="progress-bar bg-cat-amber" style={{ width: "12.6%" }} />
                        </span>
                      </li>
                      <li className="bg-plain border-theme d-flex flex-column gap-2 p-3 rounded-2">
                        <span className="d-flex align-items-center justify-content-between gap-2">
                          <span className="d-inline-flex align-items-center gap-2 min-w-0">
                            <span
                              className="icon-box icon-box-sm bg-cat-magenta text-white rounded-circle flex-shrink-0"
                              aria-hidden="true"
                            >
                              <i data-lucide="mail" />
                            </span>
                            <span className="fw-medium text-title text-truncate">
                              Email
                            </span>
                          </span>
                          <span className="d-inline-flex align-items-baseline gap-2 flex-shrink-0">
                            <span className="fs-md text-muted-2">
                              <bdi>
                                75K
                              </bdi>
                            </span>
                            <span className="fw-bold text-title">
                              <bdi>
                                6%
                              </bdi>
                            </span>
                          </span>
                        </span>
                        <span
                          className="progress"
                          role="progressbar"
                          aria-label="Email share of new leads"
                          aria-valuenow="6"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="progress-bar bg-cat-magenta" style={{ width: "6%" }} />
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="d-flex align-items-center gap-2 bg-cat-emerald text-white fs-5 fw-medium px-3 py-2 rounded-pill mt-3 mb-0">
                  <span className="legend-dot legend-dot-sm bg-white flex-shrink-0" aria-hidden="true" />
                  Organic search leads with
                  <strong>
                    38.4%
                  </strong>
                  — up 6.2% from last month
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Team activity ===== */}
      <section className="mb-4">
        <h2 className="visually-hidden">
          Team activity
        </h2>
        <div className="row g-3">
          <div className="col-12 col-lg-6 col-xxl-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="fs-5 fw-bold text-title mb-2">
                  Top Performers
                </h3>
                <ul className="list-unstyled mb-0">
                  <li className="d-flex align-items-center gap-3 py-3">
                    <span className="avatar bg-cat-violet" aria-hidden="true">
                      SK
                    </span>
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-block fw-semibold text-title text-truncate">
                        Sarah Kim
                      </span>
                      {" "}
                      <span className="d-block fs-md text-muted-2 text-truncate">
                        <bdi>
                          $428K
                        </bdi>
                        {" "}
                        · 94 deals
                      </span>
                      {" "}
                    </span>
                    <span className="fw-bold text-title flex-shrink-0">
                      <bdi>
                        92%
                      </bdi>
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3 py-3 border-t-soft">
                    <span className="avatar bg-cat-emerald" aria-hidden="true">
                      MR
                    </span>
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-block fw-semibold text-title text-truncate">
                        Marcus Reid
                      </span>
                      {" "}
                      <span className="d-block fs-md text-muted-2 text-truncate">
                        <bdi>
                          $386K
                        </bdi>
                        {" "}
                        · 81 deals
                      </span>
                      {" "}
                    </span>
                    <span className="fw-bold text-title flex-shrink-0">
                      <bdi>
                        86%
                      </bdi>
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3 py-3 border-t-soft">
                    <span className="avatar bg-cat-orange" aria-hidden="true">
                      EL
                    </span>
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-block fw-semibold text-title text-truncate">
                        Elena Lopez
                      </span>
                      {" "}
                      <span className="d-block fs-md text-muted-2 text-truncate">
                        <bdi>
                          $352K
                        </bdi>
                        {" "}
                        · 76 deals
                      </span>
                      {" "}
                    </span>
                    <span className="fw-bold text-title flex-shrink-0">
                      <bdi>
                        78%
                      </bdi>
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3 py-3 border-t-soft">
                    <span className="avatar bg-cat-blue" aria-hidden="true">
                      JW
                    </span>
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-block fw-semibold text-title text-truncate">
                        James Wu
                      </span>
                      {" "}
                      <span className="d-block fs-md text-muted-2 text-truncate">
                        <bdi>
                          $298K
                        </bdi>
                        {" "}
                        · 64 deals
                      </span>
                      {" "}
                    </span>
                    <span className="fw-bold text-title flex-shrink-0">
                      <bdi>
                        66%
                      </bdi>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="fs-5 fw-bold text-title mb-2">
                  Today’s Meetings
                </h3>
                <ul className="list-unstyled mb-0">
                  <li className="d-flex align-items-center gap-3 py-3">
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-block fw-semibold text-title text-truncate">
                        09:30 · Product Demo
                      </span>
                      {" "}
                      <span className="d-block fs-md text-muted-2 text-truncate">
                        Acme Corp · Zoom
                      </span>
                      {" "}
                    </span>
                    <span className="badge-soft tint-danger flex-shrink-0">
                      High
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3 py-3 border-t-soft">
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-block fw-semibold text-title text-truncate">
                        11:00 · Contract Review
                      </span>
                      {" "}
                      <span className="d-block fs-md text-muted-2 text-truncate">
                        Globex · Office
                      </span>
                      {" "}
                    </span>
                    <span className="badge-soft tint-warning flex-shrink-0">
                      Med
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3 py-3 border-t-soft">
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-block fw-semibold text-title text-truncate">
                        14:15 · Discovery Call
                      </span>
                      {" "}
                      <span className="d-block fs-md text-muted-2 text-truncate">
                        Initech · Google Meet
                      </span>
                      {" "}
                    </span>
                    <span className="badge-soft tint-danger flex-shrink-0">
                      High
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3 py-3 border-t-soft">
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-block fw-semibold text-title text-truncate">
                        16:00 · Pipeline Sync
                      </span>
                      {" "}
                      <span className="d-block fs-md text-muted-2 text-truncate">
                        Team · Room B
                      </span>
                      {" "}
                    </span>
                    <span className="badge-soft tint-success flex-shrink-0">
                      Low
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="fs-5 fw-bold text-title mb-2">
                  Hot Leads
                </h3>
                <ul className="list-unstyled mb-0">
                  <li className="d-flex align-items-center gap-3 py-3">
                    <span className="avatar bg-cat-emerald">
                      <span className="visually-hidden">
                        Lead score
                      </span>
                      <bdi>
                        92
                      </bdi>
                    </span>
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-block fw-semibold text-title text-truncate">
                        David Chen
                      </span>
                      {" "}
                      <span className="d-block fs-md text-muted-2 text-truncate">
                        NovaTech · LinkedIn
                      </span>
                      {" "}
                    </span>
                    <span className="badge-soft tint-success flex-shrink-0">
                      Qualified
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3 py-3 border-t-soft">
                    <span className="avatar bg-cat-emerald">
                      <span className="visually-hidden">
                        Lead score
                      </span>
                      <bdi>
                        88
                      </bdi>
                    </span>
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-block fw-semibold text-title text-truncate">
                        Priya Sharma
                      </span>
                      {" "}
                      <span className="d-block fs-md text-muted-2 text-truncate">
                        CloudPeak · Website
                      </span>
                      {" "}
                    </span>
                    <span className="badge-soft tint-violet flex-shrink-0">
                      New
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3 py-3 border-t-soft">
                    <span className="avatar bg-cat-amber">
                      <span className="visually-hidden">
                        Lead score
                      </span>
                      <bdi>
                        74
                      </bdi>
                    </span>
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-block fw-semibold text-title text-truncate">
                        Tom Bradley
                      </span>
                      {" "}
                      <span className="d-block fs-md text-muted-2 text-truncate">
                        Horizon · Referral
                      </span>
                      {" "}
                    </span>
                    <span className="badge-soft tint-blue flex-shrink-0">
                      Contacted
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3 py-3 border-t-soft">
                    <span className="avatar bg-cat-orange">
                      <span className="visually-hidden">
                        Lead score
                      </span>
                      <bdi>
                        68
                      </bdi>
                    </span>
                    <span className="flex-grow-1 min-w-0">
                      {" "}
                      <span className="d-block fw-semibold text-title text-truncate">
                        Lisa Nguyen
                      </span>
                      {" "}
                      <span className="d-block fs-md text-muted-2 text-truncate">
                        BrightLabs · Event
                      </span>
                      {" "}
                    </span>
                    <span className="badge-soft tint-amber flex-shrink-0">
                      Proposal
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Upcoming tasks & activity feed ===== */}
      <section className="mb-4">
        <h2 className="visually-hidden">
          Upcoming tasks and activity feed
        </h2>
        <div className="row g-3">
          <div className="col-12 col-xxl-8">
            <div className="card h-100">
              <div className="card-body d-flex flex-column" data-bulk-scope="">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    Upcoming Task
                  </h3>
                  <div className="d-flex flex-wrap flex-lg-nowrap align-items-center gap-2">
                    <div className="header-search min-w-0" role="search">
                      <i data-lucide="search" />
                      {" "}
                      <input
                        type="search"
                        id="taskSearch"
                        name="task-q"
                        placeholder="Search files..."
                        aria-label="Search upcoming tasks"
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
                        id="taskExport"
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
                      <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="taskExport">
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
                        id="taskShare"
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
                      <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="taskShare">
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
                            Embed board
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Bulk action bar — revealed by the selection module while rows are checked */}
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
                      <i className="icon-18" data-lucide="user-round-check" aria-hidden="true" />
                      Reassign
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-soft d-inline-flex align-items-center gap-2 text-nowrap"
                    >
                      <i className="icon-18" data-lucide="circle-check" aria-hidden="true" />
                      Complete
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
                  <table className="table table-hover align-middle mb-0">
                    <caption className="visually-hidden">
                      Upcoming tasks assigned to your team
                    </caption>
                    <thead>
                      <tr>
                        <th scope="col">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="taskSelectAll"
                            data-bulk-all=""
                            aria-label="Select all rows"
                          />
                        </th>
                        <th scope="col">
                          Task ID
                        </th>
                        <th scope="col">
                          Assigned By
                        </th>
                        <th scope="col">
                          Time
                        </th>
                        <th scope="col">
                          Priority Status
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
                            aria-label="Select task TSK-48275910384"
                          />
                        </td>
                        <td>
                          <span className="fs-md fw-semibold text-title text-uppercase">
                            <bdi>
                              TSK-48275910384
                            </bdi>
                          </span>
                        </td>
                        <td>
                          <span className="d-inline-flex align-items-center gap-2">
                            <span className="avatar avatar-sm bg-grad-1" aria-hidden="true">
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
                              10:00 AM
                            </bdi>
                          </span>
                        </td>
                        <td>
                          <span className="badge-soft tint-success">
                            Low
                          </span>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-1">
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle"
                              aria-label="Edit task TSK-48275910384"
                            >
                              <i data-lucide="pencil" />
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle"
                              aria-label="Open task TSK-48275910384"
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
                                aria-label="More actions for task TSK-48275910384"
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
                                    <i data-lucide="user-round-check" />
                                    Reassign
                                  </button>
                                </li>
                                <li>
                                  <button type="button" className="dropdown-item">
                                    <i data-lucide="circle-check" />
                                    Mark complete
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
                            aria-label="Select task TSK-48275910385"
                          />
                        </td>
                        <td>
                          <span className="fs-md fw-semibold text-title text-uppercase">
                            <bdi>
                              TSK-48275910385
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
                              11:30 AM
                            </bdi>
                          </span>
                        </td>
                        <td>
                          <span className="badge-soft tint-warning">
                            Medium
                          </span>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-1">
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle"
                              aria-label="Edit task TSK-48275910385"
                            >
                              <i data-lucide="pencil" />
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle"
                              aria-label="Open task TSK-48275910385"
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
                                aria-label="More actions for task TSK-48275910385"
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
                                    <i data-lucide="user-round-check" />
                                    Reassign
                                  </button>
                                </li>
                                <li>
                                  <button type="button" className="dropdown-item">
                                    <i data-lucide="circle-check" />
                                    Mark complete
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
                            aria-label="Select task TSK-48275910386"
                          />
                        </td>
                        <td>
                          <span className="fs-md fw-semibold text-title text-uppercase">
                            <bdi>
                              TSK-48275910386
                            </bdi>
                          </span>
                        </td>
                        <td>
                          <span className="d-inline-flex align-items-center gap-2">
                            <span className="avatar avatar-sm bg-grad-3" aria-hidden="true">
                              SC
                            </span>
                            <span className="d-flex flex-column">
                              <span className="fs-md fw-semibold text-title">
                                Sophia Chen
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
                              02:15 PM
                            </bdi>
                          </span>
                        </td>
                        <td>
                          <span className="badge-soft tint-danger">
                            High
                          </span>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-1">
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle"
                              aria-label="Edit task TSK-48275910386"
                            >
                              <i data-lucide="pencil" />
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle"
                              aria-label="Open task TSK-48275910386"
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
                                aria-label="More actions for task TSK-48275910386"
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
                                    <i data-lucide="user-round-check" />
                                    Reassign
                                  </button>
                                </li>
                                <li>
                                  <button type="button" className="dropdown-item">
                                    <i data-lucide="circle-check" />
                                    Mark complete
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
                            aria-label="Select task TSK-48275910387"
                          />
                        </td>
                        <td>
                          <span className="fs-md fw-semibold text-title text-uppercase">
                            <bdi>
                              TSK-48275910387
                            </bdi>
                          </span>
                        </td>
                        <td>
                          <span className="d-inline-flex align-items-center gap-2">
                            <span className="avatar avatar-sm bg-grad-4" aria-hidden="true">
                              PK
                            </span>
                            <span className="d-flex flex-column">
                              <span className="fs-md fw-semibold text-title">
                                Priya Kaur
                              </span>
                              <span className="fs-xs text-muted-2">
                                priya.kaur@brightlabs.io
                              </span>
                            </span>
                          </span>
                        </td>
                        <td>
                          <span className="fs-md fw-bold text-title">
                            <bdi>
                              04:00 PM
                            </bdi>
                          </span>
                        </td>
                        <td>
                          <span className="badge-soft tint-success">
                            Low
                          </span>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-1">
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle"
                              aria-label="Edit task TSK-48275910387"
                            >
                              <i data-lucide="pencil" />
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-soft btn-18 rounded-circle"
                              aria-label="Open task TSK-48275910387"
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
                                aria-label="More actions for task TSK-48275910387"
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
                                    <i data-lucide="user-round-check" />
                                    Reassign
                                  </button>
                                </li>
                                <li>
                                  <button type="button" className="dropdown-item">
                                    <i data-lucide="circle-check" />
                                    Mark complete
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
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 pt-3 mt-3 border-t-soft mt-auto">
                  <span className="fs-md text-muted-2">
                    Showing 1–4 of 8 results
                  </span>
                  <nav aria-label="Upcoming tasks pagination">
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
                    <span className="flex-grow-1 min-w-0 fw-medium text-title">
                      Robert Fox created a new lead
                    </span>
                    <span className="fs-md text-muted-2 text-nowrap flex-shrink-0">
                      10:30 AM
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3 py-3 border-t-soft">
                    <span className="feed-icon tint-emerald" aria-hidden="true">
                      <i data-lucide="briefcase-business" />
                    </span>
                    <span className="flex-grow-1 min-w-0 fw-medium text-title">
                      Emma Johnson scheduled a product demo
                    </span>
                    <span className="fs-md text-muted-2 text-nowrap flex-shrink-0">
                      09:45 PM
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3 py-3 border-t-soft">
                    <span className="feed-icon tint-info" aria-hidden="true">
                      <i data-lucide="credit-card" />
                    </span>
                    <span className="flex-grow-1 min-w-0 fw-medium text-title">
                      Payment received
                    </span>
                    <span className="fs-md text-muted-2 text-nowrap flex-shrink-0">
                      10:30 AM
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3 py-3 border-t-soft">
                    <span className="feed-icon tint-amber" aria-hidden="true">
                      <i data-lucide="star" />
                    </span>
                    <span className="flex-grow-1 min-w-0 fw-medium text-title">
                      Proposal sent to PixelEdge Co.
                    </span>
                    <span className="fs-md text-muted-2 text-nowrap flex-shrink-0">
                      Yesterday
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3 py-3 border-t-soft">
                    <span className="feed-icon bg-soft text-body-2" aria-hidden="true">
                      <i data-lucide="settings" />
                    </span>
                    <span className="flex-grow-1 min-w-0 fw-medium text-title">
                      System Update
                    </span>
                    <span className="fs-md text-muted-2 text-nowrap flex-shrink-0">
                      May 10, 2026
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3 py-3 border-t-soft">
                    <span className="feed-icon tint-magenta" aria-hidden="true">
                      <i data-lucide="user-round-plus" />
                    </span>
                    <span className="flex-grow-1 min-w-0 fw-medium text-title">
                      New Registration
                    </span>
                    <span className="fs-md text-muted-2 text-nowrap flex-shrink-0">
                      Yesterday
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-3 py-3 border-t-soft">
                    <span className="feed-icon tint-danger" aria-hidden="true">
                      <i data-lucide="refresh-cw" />
                    </span>
                    <span className="flex-grow-1 min-w-0 fw-medium text-title">
                      Meeting completed
                    </span>
                    <span className="fs-md text-muted-2 text-nowrap flex-shrink-0">
                      Yesterday
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Recent leads ===== */}
      <section className="mb-4" aria-labelledby="leads-title">
        <h2 id="leads-title" className="visually-hidden">
          Recent leads
        </h2>
        <div className="card bg-glass">
          <div className="card-body" data-bulk-scope="">
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
              <h3 className="fs-5 fw-bold text-title mb-0">
                Recent Lead
              </h3>
              <div className="d-flex flex-wrap flex-lg-nowrap align-items-center gap-2">
                <div className="header-search min-w-0" role="search">
                  <i data-lucide="search" />
                  {" "}
                  <input
                    type="search"
                    id="leadSearch"
                    name="lead-q"
                    placeholder="Search files..."
                    aria-label="Search leads"
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
                    id="leadExport"
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
                  <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="leadExport">
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
                    id="leadShare"
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
                  <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="leadShare">
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
                  Recent sales leads
                </caption>
                <thead>
                  <tr>
                    <th scope="col">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="leadSelectAll"
                        data-bulk-all=""
                        aria-label="Select all rows"
                      />
                    </th>
                    <th scope="col">
                      Lead Name
                    </th>
                    <th scope="col">
                      Company
                    </th>
                    <th scope="col">
                      Source
                    </th>
                    <th scope="col">
                      Assigned To
                    </th>
                    <th scope="col">
                      Value
                    </th>
                    <th scope="col">
                      Status
                    </th>
                    <th scope="col">
                      Date
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
                        aria-label="Select lead Robert Fox at TechNova Inc."
                      />
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        Robert Fox
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        TechNova Inc.
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        Website
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
                        Qualified
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
                          aria-label="Edit lead Robert Fox at TechNova Inc."
                        >
                          <i data-lucide="pencil" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-soft btn-18 rounded-circle"
                          aria-label="Open lead Robert Fox at TechNova Inc."
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
                            aria-label="More actions for lead Robert Fox at TechNova Inc."
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
                                <i data-lucide="user-round-plus" />
                                Reassign owner
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="mail" />
                                Email lead
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
                        aria-label="Select lead Marcus Hall at TechNova Inc."
                      />
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        Marcus Hall
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        TechNova Inc.
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        Website
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
                        New
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
                          aria-label="Edit lead Marcus Hall at TechNova Inc."
                        >
                          <i data-lucide="pencil" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-soft btn-18 rounded-circle"
                          aria-label="Open lead Marcus Hall at TechNova Inc."
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
                            aria-label="More actions for lead Marcus Hall at TechNova Inc."
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
                                <i data-lucide="user-round-plus" />
                                Reassign owner
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="mail" />
                                Email lead
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
                        aria-label="Select lead Elena Rossi at TechNova Inc."
                      />
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        Elena Rossi
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        TechNova Inc.
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        Website
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
                        Proposal
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
                          aria-label="Edit lead Elena Rossi at TechNova Inc."
                        >
                          <i data-lucide="pencil" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-soft btn-18 rounded-circle"
                          aria-label="Open lead Elena Rossi at TechNova Inc."
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
                            aria-label="More actions for lead Elena Rossi at TechNova Inc."
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
                                <i data-lucide="user-round-plus" />
                                Reassign owner
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="mail" />
                                Email lead
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
                        aria-label="Select lead Noah Bennett at TechNova Inc."
                      />
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        Noah Bennett
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        TechNova Inc.
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title">
                        Website
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
                        Qualified
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
                          aria-label="Edit lead Noah Bennett at TechNova Inc."
                        >
                          <i data-lucide="pencil" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-soft btn-18 rounded-circle"
                          aria-label="Open lead Noah Bennett at TechNova Inc."
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
                            aria-label="More actions for lead Noah Bennett at TechNova Inc."
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
                                <i data-lucide="user-round-plus" />
                                Reassign owner
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="mail" />
                                Email lead
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
              <nav aria-label="Recent leads pagination">
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
      {/* ===== Deals pipeline (Kanban view) ===== */}
      <section className="mb-4" aria-labelledby="kanban-title">
        <h2 id="kanban-title" className="visually-hidden">
          Deals pipeline
        </h2>
        <div className="card bg-glass">
          <div className="card-body">
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
              <h3 className="fs-5 fw-bold text-title mb-0">
                Deals Pipeline (Kanban View)
              </h3>
              <div className="d-flex flex-wrap flex-sm-nowrap align-items-center gap-2">
                <div className="header-search min-w-0" role="search">
                  <i data-lucide="search" />
                  {" "}
                  <input
                    type="search"
                    id="dealSearch"
                    name="deal-q"
                    placeholder="Search files..."
                    aria-label="Search deals"
                  />
                  {" "}
                  <kbd className="d-none d-sm-block">
                    ⌘ F
                  </kbd>
                </div>
                <button
                  type="button"
                  className="btn btn-accent flex-grow-1 flex-sm-grow-0 d-inline-flex flex-nowrap align-items-center justify-content-center gap-2 text-nowrap"
                >
                  <i className="icon-20" data-lucide="circle-plus" aria-hidden="true" />
                  Create New
                </button>
              </div>
            </div>
            <ul className="scroll-row list-unstyled d-flex align-items-start gap-3 mb-0 pb-1">
              <li className="scroll-col bg-soft rounded-3 p-3">
                <div className="d-flex align-items-center justify-content-between gap-2 mb-2">
                  <div className="d-flex align-items-center gap-2 min-w-0">
                    <span className="legend-dot bg-cat-slate" aria-hidden="true" />
                    <h4 className="fs-lg fw-semibold text-title text-truncate mb-0">
                      Qualifying
                    </h4>
                  </div>
                  <span className="fs-5 fw-bold text-muted-2 lh-1">
                    <bdi>
                      2
                    </bdi>
                  </span>
                </div>
                <p className="fs-md fw-bold text-title mb-1">
                  <bdi>
                    $126K
                  </bdi>
                </p>
                <div
                  className="progress mb-3"
                  role="progressbar"
                  aria-label="Qualifying share of pipeline value"
                  aria-valuenow="21"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="progress-bar bg-cat-slate" style={{ width: "21%" }} />
                </div>
                <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                  <li className="bg-plain border-theme rounded-2 p-2">
                    <p className="fs-md fw-semibold text-title mb-1">
                      Meridian Dental
                    </p>
                    <p className="fs-xs text-muted-2 mb-2">
                      Qualify budget on the Friday call.
                    </p>
                    <div className="d-flex align-items-center justify-content-between gap-2">
                      <span className="d-inline-flex align-items-center gap-2 min-w-0">
                        <span className="avatar avatar-xs bg-grad-4" aria-hidden="true">
                          TK
                        </span>
                        <span className="fs-md fw-bold text-title">
                          <bdi>
                            $38K
                          </bdi>
                        </span>
                      </span>
                      <span className="seg-meter" role="img" aria-label="Deal health 2 out of 5">
                        <span className="bg-cat-rose" />
                        <span className="bg-cat-rose" />
                        <span />
                        <span />
                        <span />
                      </span>
                    </div>
                  </li>
                  <li className="bg-plain border-theme rounded-2 p-2">
                    <p className="fs-md fw-semibold text-title mb-1">
                      Harborline Logistics
                    </p>
                    <p className="fs-xs text-muted-2 mb-2">
                      Waiting on the procurement contact.
                    </p>
                    <div className="d-flex align-items-center justify-content-between gap-2">
                      <span className="d-inline-flex align-items-center gap-2 min-w-0">
                        <span className="avatar avatar-xs bg-grad-3" aria-hidden="true">
                          AR
                        </span>
                        <span className="fs-md fw-bold text-title">
                          <bdi>
                            $88K
                          </bdi>
                        </span>
                      </span>
                      <span className="seg-meter" role="img" aria-label="Deal health 1 out of 5">
                        <span className="bg-cat-rose" />
                        <span />
                        <span />
                        <span />
                        <span />
                      </span>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="scroll-col bg-soft rounded-3 p-3">
                <div className="d-flex align-items-center justify-content-between gap-2 mb-2">
                  <div className="d-flex align-items-center gap-2 min-w-0">
                    <span className="legend-dot bg-cat-amber" aria-hidden="true" />
                    <h4 className="fs-lg fw-semibold text-title text-truncate mb-0">
                      Discovery
                    </h4>
                  </div>
                  <span className="fs-5 fw-bold text-muted-2 lh-1">
                    <bdi>
                      2
                    </bdi>
                  </span>
                </div>
                <p className="fs-md fw-bold text-title mb-1">
                  <bdi>
                    $184K
                  </bdi>
                </p>
                <div
                  className="progress mb-3"
                  role="progressbar"
                  aria-label="Discovery share of pipeline value"
                  aria-valuenow="32"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="progress-bar bg-cat-amber" style={{ width: "32%" }} />
                </div>
                <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                  <li className="bg-plain border-theme rounded-2 p-2">
                    <p className="fs-md fw-semibold text-title mb-1">
                      Northwind Clinics
                    </p>
                    <p className="fs-xs text-muted-2 mb-2">
                      Book the technical discovery session.
                    </p>
                    <div className="d-flex align-items-center justify-content-between gap-2">
                      <span className="d-inline-flex align-items-center gap-2 min-w-0">
                        <span className="avatar avatar-xs bg-grad-5" aria-hidden="true">
                          SR
                        </span>
                        <span className="fs-md fw-bold text-title">
                          <bdi>
                            $96K
                          </bdi>
                        </span>
                      </span>
                      <span className="seg-meter" role="img" aria-label="Deal health 2 out of 5">
                        <span className="bg-cat-rose" />
                        <span className="bg-cat-rose" />
                        <span />
                        <span />
                        <span />
                      </span>
                    </div>
                  </li>
                  <li className="bg-plain border-theme rounded-2 p-2">
                    <p className="fs-md fw-semibold text-title mb-1">
                      Vertex Media Group
                    </p>
                    <p className="fs-xs text-muted-2 mb-2">
                      Map the stakeholders before the demo.
                    </p>
                    <div className="d-flex align-items-center justify-content-between gap-2">
                      <span className="d-inline-flex align-items-center gap-2 min-w-0">
                        <span className="avatar avatar-xs bg-grad-1" aria-hidden="true">
                          KS
                        </span>
                        <span className="fs-md fw-bold text-title">
                          <bdi>
                            $88K
                          </bdi>
                        </span>
                      </span>
                      <span className="seg-meter" role="img" aria-label="Deal health 3 out of 5">
                        <span className="bg-cat-rose" />
                        <span className="bg-cat-rose" />
                        <span className="bg-cat-rose" />
                        <span />
                        <span />
                      </span>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="scroll-col bg-soft rounded-3 p-3">
                <div className="d-flex align-items-center justify-content-between gap-2 mb-2">
                  <div className="d-flex align-items-center gap-2 min-w-0">
                    <span className="legend-dot bg-cat-rose" aria-hidden="true" />
                    <h4 className="fs-lg fw-semibold text-title text-truncate mb-0">
                      Proposal
                    </h4>
                  </div>
                  <span className="fs-5 fw-bold text-muted-2 lh-1">
                    <bdi>
                      2
                    </bdi>
                  </span>
                </div>
                <p className="fs-md fw-bold text-title mb-1">
                  <bdi>
                    $242K
                  </bdi>
                </p>
                <div
                  className="progress mb-3"
                  role="progressbar"
                  aria-label="Proposal share of pipeline value"
                  aria-valuenow="48"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="progress-bar bg-cat-rose" style={{ width: "48%" }} />
                </div>
                <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                  <li className="bg-plain border-theme rounded-2 p-2">
                    <p className="fs-md fw-semibold text-title mb-1">
                      Arcadia Retail
                    </p>
                    <p className="fs-xs text-muted-2 mb-2">
                      Send the revised pricing sheet.
                    </p>
                    <div className="d-flex align-items-center justify-content-between gap-2">
                      <span className="d-inline-flex align-items-center gap-2 min-w-0">
                        <span className="avatar avatar-xs bg-grad-3" aria-hidden="true">
                          JD
                        </span>
                        <span className="fs-md fw-bold text-title">
                          <bdi>
                            $132K
                          </bdi>
                        </span>
                      </span>
                      <span className="seg-meter" role="img" aria-label="Deal health 3 out of 5">
                        <span className="bg-cat-rose" />
                        <span className="bg-cat-rose" />
                        <span className="bg-cat-rose" />
                        <span />
                        <span />
                      </span>
                    </div>
                  </li>
                  <li className="bg-plain border-theme rounded-2 p-2">
                    <p className="fs-md fw-semibold text-title mb-1">
                      Lumen Health
                    </p>
                    <p className="fs-xs text-muted-2 mb-2">
                      Proposal review scheduled for Tuesday.
                    </p>
                    <div className="d-flex align-items-center justify-content-between gap-2">
                      <span className="d-inline-flex align-items-center gap-2 min-w-0">
                        <span className="avatar avatar-xs bg-grad-2" aria-hidden="true">
                          PK
                        </span>
                        <span className="fs-md fw-bold text-title">
                          <bdi>
                            $110K
                          </bdi>
                        </span>
                      </span>
                      <span className="seg-meter" role="img" aria-label="Deal health 2 out of 5">
                        <span className="bg-cat-rose" />
                        <span className="bg-cat-rose" />
                        <span />
                        <span />
                        <span />
                      </span>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="scroll-col bg-soft rounded-3 p-3">
                <div className="d-flex align-items-center justify-content-between gap-2 mb-2">
                  <div className="d-flex align-items-center gap-2 min-w-0">
                    <span className="legend-dot bg-cat-violet" aria-hidden="true" />
                    <h4 className="fs-lg fw-semibold text-title text-truncate mb-0">
                      Negotiation
                    </h4>
                  </div>
                  <span className="fs-5 fw-bold text-muted-2 lh-1">
                    <bdi>
                      2
                    </bdi>
                  </span>
                </div>
                <p className="fs-md fw-bold text-title mb-1">
                  <bdi>
                    $318K
                  </bdi>
                </p>
                <div
                  className="progress mb-3"
                  role="progressbar"
                  aria-label="Negotiation share of pipeline value"
                  aria-valuenow="64"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="progress-bar bg-cat-violet" style={{ width: "64%" }} />
                </div>
                <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                  <li className="bg-plain border-theme rounded-2 p-2">
                    <p className="fs-md fw-semibold text-title mb-1">
                      Solstice Manufacturing
                    </p>
                    <p className="fs-xs text-muted-2 mb-2">
                      Legal is reviewing the MSA redlines.
                    </p>
                    <div className="d-flex align-items-center justify-content-between gap-2">
                      <span className="d-inline-flex align-items-center gap-2 min-w-0">
                        <span className="avatar avatar-xs bg-grad-1" aria-hidden="true">
                          TK
                        </span>
                        <span className="fs-md fw-bold text-title">
                          <bdi>
                            $186K
                          </bdi>
                        </span>
                      </span>
                      <span className="seg-meter" role="img" aria-label="Deal health 4 out of 5">
                        <span className="bg-cat-rose" />
                        <span className="bg-cat-rose" />
                        <span className="bg-cat-rose" />
                        <span className="bg-cat-rose" />
                        <span />
                      </span>
                    </div>
                  </li>
                  <li className="bg-plain border-theme rounded-2 p-2">
                    <p className="fs-md fw-semibold text-title mb-1">
                      Cobalt Systems
                    </p>
                    <p className="fs-xs text-muted-2 mb-2">
                      Agree the rollout timeline with IT.
                    </p>
                    <div className="d-flex align-items-center justify-content-between gap-2">
                      <span className="d-inline-flex align-items-center gap-2 min-w-0">
                        <span className="avatar avatar-xs bg-grad-4" aria-hidden="true">
                          AR
                        </span>
                        <span className="fs-md fw-bold text-title">
                          <bdi>
                            $132K
                          </bdi>
                        </span>
                      </span>
                      <span className="seg-meter" role="img" aria-label="Deal health 3 out of 5">
                        <span className="bg-cat-rose" />
                        <span className="bg-cat-rose" />
                        <span className="bg-cat-rose" />
                        <span />
                        <span />
                      </span>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="scroll-col bg-soft rounded-3 p-3">
                <div className="d-flex align-items-center justify-content-between gap-2 mb-2">
                  <div className="d-flex align-items-center gap-2 min-w-0">
                    <span className="legend-dot bg-cat-emerald" aria-hidden="true" />
                    <h4 className="fs-lg fw-semibold text-title text-truncate mb-0">
                      Won
                    </h4>
                  </div>
                  <span className="fs-5 fw-bold text-muted-2 lh-1">
                    <bdi>
                      2
                    </bdi>
                  </span>
                </div>
                <p className="fs-md fw-bold text-title mb-1">
                  <bdi>
                    $486K
                  </bdi>
                </p>
                <div
                  className="progress mb-3"
                  role="progressbar"
                  aria-label="Won share of pipeline value"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="progress-bar bg-cat-emerald" style={{ width: "100%" }} />
                </div>
                <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                  <li className="bg-plain border-theme rounded-2 p-2">
                    <p className="fs-md fw-semibold text-title mb-1">
                      Pinecrest Group
                    </p>
                    <p className="fs-xs text-muted-2 mb-2">
                      Kick-off handover to onboarding.
                    </p>
                    <div className="d-flex align-items-center justify-content-between gap-2">
                      <span className="d-inline-flex align-items-center gap-2 min-w-0">
                        <span className="avatar avatar-xs bg-grad-5" aria-hidden="true">
                          SR
                        </span>
                        <span className="fs-md fw-bold text-title">
                          <bdi>
                            $264K
                          </bdi>
                        </span>
                      </span>
                      <span className="seg-meter" role="img" aria-label="Deal health 5 out of 5">
                        <span className="bg-cat-emerald" />
                        <span className="bg-cat-emerald" />
                        <span className="bg-cat-emerald" />
                        <span className="bg-cat-emerald" />
                        <span className="bg-cat-emerald" />
                      </span>
                    </div>
                  </li>
                  <li className="bg-plain border-theme rounded-2 p-2">
                    <p className="fs-md fw-semibold text-title mb-1">
                      Atlas Freight
                    </p>
                    <p className="fs-xs text-muted-2 mb-2">
                      Contract signed — invoice issued.
                    </p>
                    <div className="d-flex align-items-center justify-content-between gap-2">
                      <span className="d-inline-flex align-items-center gap-2 min-w-0">
                        <span className="avatar avatar-xs bg-grad-6" aria-hidden="true">
                          JD
                        </span>
                        <span className="fs-md fw-bold text-title">
                          <bdi>
                            $222K
                          </bdi>
                        </span>
                      </span>
                      <span className="seg-meter" role="img" aria-label="Deal health 5 out of 5">
                        <span className="bg-cat-emerald" />
                        <span className="bg-cat-emerald" />
                        <span className="bg-cat-emerald" />
                        <span className="bg-cat-emerald" />
                        <span className="bg-cat-emerald" />
                      </span>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
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

/* Generated from the Vionex HTML theme by scripts/convert-html.mjs */
import AppShell from "@/components/AppShell";

export const metadata = {
  title: "Vionex — Settings",
  description: "Vionex enterprise admin dashboard — account settings with profile, regional preferences, notification channels, security and billing panels, built with Bootstrap 5, CSS variables and a scalable design system.",
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
          Settings
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
              Settings
            </li>
          </ol>
        </nav>
      </div>
      {/* ===== Account settings ===== */}
      <section className="mb-4" aria-labelledby="st-settings-title">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
          <div className="min-w-0">
            <h2 id="st-settings-title" className="fs-4 fw-bold text-title mb-1">
              Account Settings
            </h2>
            <p className="fs-md text-body-2 mb-0">
              Manage how you appear in Vionex, what reaches you and how this workspace is secured and billed.
            </p>
          </div>
          <span className="badge-soft tint-emerald border-current d-inline-flex align-items-center gap-2 px-3">
            {" "}
            <i className="icon-12" data-lucide="check" aria-hidden="true" />
            {" "}
            <bdi>
              All changes saved
            </bdi>
            {" "}
          </span>
        </div>
        <div className="row g-3">
          {/* Section switcher */}
          <div className="col-12 col-xl-3">
            <div className="card mb-3">
              <div className="d-flex align-items-center gap-3 p-3 border-b-soft">
                <span className="avatar avatar-md radius-md">
                  <img src="/assets/images/avatar-user.png" width="48" height="48" alt="" />
                </span>
                <span className="min-w-0">
                  {" "}
                  <span className="d-block fw-semibold text-title text-truncate">
                    Ravisha V
                  </span>
                  {" "}
                  <span className="d-block fs-md text-body-2 text-truncate">
                    ravisha@vionex.com
                  </span>
                  {" "}
                </span>
              </div>
              <div className="p-2">
                <div
                  className="nav nav-pills flex-nowrap flex-xl-column gap-1 overflow-x-auto scrollbar-none"
                  role="tablist"
                  aria-label="Settings sections"
                >
                  <button
                    type="button"
                    className="nav-link active d-flex align-items-center gap-2 px-3 py-2 fw-semibold text-nowrap"
                    id="stProfileTab"
                    data-bs-toggle="pill"
                    data-bs-target="#stProfilePane"
                    role="tab"
                    aria-controls="stProfilePane"
                    aria-selected="true"
                  >
                    <i className="icon-18" data-lucide="user-round" aria-hidden="true" />
                    Profile
                  </button>
                  <button
                    type="button"
                    className="nav-link d-flex align-items-center gap-2 px-3 py-2 fw-semibold text-nowrap"
                    id="stPrefsTab"
                    data-bs-toggle="pill"
                    data-bs-target="#stPrefsPane"
                    role="tab"
                    aria-controls="stPrefsPane"
                    aria-selected="false"
                  >
                    <i className="icon-18" data-lucide="sliders-horizontal" aria-hidden="true" />
                    Preferences
                  </button>
                  <button
                    type="button"
                    className="nav-link d-flex align-items-center gap-2 px-3 py-2 fw-semibold text-nowrap"
                    id="stNotifyTab"
                    data-bs-toggle="pill"
                    data-bs-target="#stNotifyPane"
                    role="tab"
                    aria-controls="stNotifyPane"
                    aria-selected="false"
                  >
                    <i className="icon-18" data-lucide="bell" aria-hidden="true" />
                    Notifications
                  </button>
                  <button
                    type="button"
                    className="nav-link d-flex align-items-center gap-2 px-3 py-2 fw-semibold text-nowrap"
                    id="stSecurityTab"
                    data-bs-toggle="pill"
                    data-bs-target="#stSecurityPane"
                    role="tab"
                    aria-controls="stSecurityPane"
                    aria-selected="false"
                  >
                    <i className="icon-18" data-lucide="shield-check" aria-hidden="true" />
                    Security
                  </button>
                  <button
                    type="button"
                    className="nav-link d-flex align-items-center gap-2 px-3 py-2 fw-semibold text-nowrap"
                    id="stBillingTab"
                    data-bs-toggle="pill"
                    data-bs-target="#stBillingPane"
                    role="tab"
                    aria-controls="stBillingPane"
                    aria-selected="false"
                  >
                    <i className="icon-18" data-lucide="credit-card" aria-hidden="true" />
                    Billing
                  </button>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="fs-5 fw-bold text-title mb-1">
                  Account setup
                </h3>
                <p className="fs-md text-body-2 mb-0">
                  One step left before this account is fully hardened.
                </p>
                <div className="position-relative d-flex justify-content-center my-2">
                  <div id="settingsSetupRing" className="chart-inline-lg" />
                  <span className="chart-center">
                    <span className="d-block fs-4 fw-bold text-title lh-1">
                      <bdi>
                        75%
                      </bdi>
                    </span>
                    <span className="d-block fs-xs text-muted-2">
                      complete
                    </span>
                  </span>
                </div>
                <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                  <li className="d-flex align-items-center gap-2">
                    <span className="icon-box icon-box-sm tint-emerald flex-shrink-0" aria-hidden="true">
                      <i data-lucide="check" />
                    </span>
                    <span className="flex-grow-1 min-w-0 fs-md text-body-2 text-truncate">
                      Profile details added
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <span className="icon-box icon-box-sm tint-emerald flex-shrink-0" aria-hidden="true">
                      <i data-lucide="check" />
                    </span>
                    <span className="flex-grow-1 min-w-0 fs-md text-body-2 text-truncate">
                      Email address verified
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <span className="icon-box icon-box-sm tint-emerald flex-shrink-0" aria-hidden="true">
                      <i data-lucide="check" />
                    </span>
                    <span className="flex-grow-1 min-w-0 fs-md text-body-2 text-truncate">
                      Two-factor turned on
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <span className="icon-box icon-box-sm tint-amber flex-shrink-0" aria-hidden="true">
                      <i data-lucide="key-round" />
                    </span>
                    <span className="flex-grow-1 min-w-0 fs-md text-body-2 text-truncate">
                      Recovery codes not saved
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Section panels */}
          <div className="col-12 col-xl-9">
            <div className="tab-content">
              {/* ===== Profile ===== */}
              {" "}
              <div
                className="tab-pane fade show active"
                id="stProfilePane"
                role="tabpanel"
                aria-labelledby="stProfileTab"
                tabIndex="0"
              >
                <form id="stProfileForm" noValidate data-validate="">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="mb-3">
                        <h3 className="fs-5 fw-bold text-title mb-1">
                          Profile details
                        </h3>
                        <p className="fs-md text-body-2 mb-0">
                          This is what teammates see next to your comments, reviews and timeline entries.
                        </p>
                      </div>
                      <div className="d-flex flex-wrap align-items-center gap-3 bg-soft rounded-3 p-3 mb-3">
                        <span className="avatar avatar-xl radius-lg">
                          <img src="/assets/images/avatar-user.png" width="84" height="84" alt="" />
                        </span>
                        <div className="flex-grow-1 min-w-0">
                          <label htmlFor="stAvatar" className="form-label fs-md fw-semibold text-title">
                            Profile photo
                          </label>
                          {" "}
                          <input
                            type="file"
                            className="form-control"
                            id="stAvatar"
                            name="avatar"
                            accept="image/png,image/jpeg"
                          />
                          <p className="fs-xs text-muted-2 mt-2 mb-0">
                            <bdi>
                              PNG or JPG, square, at least 256 px and under 2 MB.
                            </bdi>
                          </p>
                        </div>
                        <button
                          type="button"
                          className="btn btn-ghost hover-danger d-inline-flex align-items-center gap-2 text-nowrap"
                        >
                          <i className="icon-18" data-lucide="trash-2" aria-hidden="true" />
                          Remove
                        </button>
                      </div>
                      <div className="row g-3">
                        <div className="col-12 col-md-6">
                          <label htmlFor="stFirstName" className="form-label fs-md fw-semibold text-title">
                            First name
                          </label>
                          {" "}
                          <input
                            type="text"
                            className="form-control"
                            id="stFirstName"
                            name="first-name"
                            defaultValue="Ravisha"
                            autoComplete="given-name"
                            required
                          />
                          {" "}
                          <div className="invalid-feedback">
                            Tell us your first name.
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <label htmlFor="stLastName" className="form-label fs-md fw-semibold text-title">
                            Last name
                          </label>
                          {" "}
                          <input
                            type="text"
                            className="form-control"
                            id="stLastName"
                            name="last-name"
                            defaultValue="Verma"
                            autoComplete="family-name"
                            required
                          />
                          {" "}
                          <div className="invalid-feedback">
                            Tell us your last name.
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <label htmlFor="stDisplayName" className="form-label fs-md fw-semibold text-title">
                            Display name
                            {" "}
                            <span className="fw-normal text-muted-2">
                              (optional)
                            </span>
                          </label>
                          {" "}
                          <input
                            type="text"
                            className="form-control"
                            id="stDisplayName"
                            name="display-name"
                            defaultValue="Ravisha"
                            autoComplete="nickname"
                          />
                        </div>
                        <div className="col-12 col-md-6">
                          <label
                            htmlFor="stEmail"
                            className="form-label fs-md fw-semibold text-title d-flex flex-wrap align-items-center gap-2"
                          >
                            <span>
                              Email address
                            </span>
                            <span className="badge-soft tint-emerald d-inline-flex align-items-center gap-1 fw-semibold">
                              {" "}
                              <i className="icon-12" data-lucide="badge-check" aria-hidden="true" />
                              Verified
                              {" "}
                            </span>
                          </label>
                          {" "}
                          <input
                            type="email"
                            className="form-control"
                            id="stEmail"
                            name="email"
                            defaultValue="ravisha@vionex.com"
                            autoComplete="email"
                            required
                          />
                          {" "}
                          <div className="invalid-feedback">
                            Enter an email address we can reach you on.
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <label htmlFor="stJobTitle" className="form-label fs-md fw-semibold text-title">
                            Job title
                          </label>
                          {" "}
                          <input
                            type="text"
                            className="form-control"
                            id="stJobTitle"
                            name="job-title"
                            defaultValue="Head of Platform"
                            autoComplete="organization-title"
                          />
                        </div>
                        <div className="col-12 col-md-6">
                          <label htmlFor="stDepartment" className="form-label fs-md fw-semibold text-title">
                            Department
                          </label>
                          {" "}
                          <select
                            className="form-select pe-5"
                            id="stDepartment"
                            name="department"
                            defaultValue="Platform Engineering"
                          >
                            <option>
                              Platform Engineering
                            </option>
                            <option>
                              AI Research
                            </option>
                            <option>
                              Product Design
                            </option>
                            <option>
                              Infrastructure
                            </option>
                            <option>
                              {"Finance & Operations"}
                            </option>
                          </select>
                        </div>
                        <div className="col-12 col-md-6">
                          <label htmlFor="stPhone" className="form-label fs-md fw-semibold text-title">
                            Phone
                            {" "}
                            <span className="fw-normal text-muted-2">
                              (optional)
                            </span>
                          </label>
                          {" "}
                          <input
                            type="tel"
                            className="form-control"
                            id="stPhone"
                            name="phone"
                            defaultValue="+1 512 555 4417"
                            autoComplete="tel"
                          />
                        </div>
                        <div className="col-12 col-md-6">
                          <label htmlFor="stLocation" className="form-label fs-md fw-semibold text-title">
                            Location
                          </label>
                          {" "}
                          <input
                            type="text"
                            className="form-control"
                            id="stLocation"
                            name="location"
                            defaultValue="Austin, Texas"
                            autoComplete="address-level2"
                          />
                        </div>
                        <div className="col-12">
                          <label htmlFor="stBio" className="form-label fs-md fw-semibold text-title">
                            About you
                          </label>
                          {" "}
                          <textarea
                            className="form-control"
                            id="stBio"
                            name="bio"
                            rows="3"
                            maxLength="240"
                            defaultValue="Platform lead at Vionex. I look after model rollouts, the release train and anything that has to stay up at 3am."
                          />
                          <p className="fs-xs text-muted-2 mt-2 mb-0">
                            <bdi>
                              Up to 240 characters. Shown on your public profile.
                            </bdi>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <div className="mb-3">
                        <h3 className="fs-5 fw-bold text-title mb-1">
                          Public profile
                        </h3>
                        <p className="fs-md text-body-2 mb-0">
                          Decide what people outside your immediate team can see.
                        </p>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="stSlug" className="form-label fs-md fw-semibold text-title">
                          Profile URL
                        </label>
                        <div className="input-group">
                          <span className="input-group-text" id="stSlugPrefix">
                            <bdi>
                              vionex.com/u/
                            </bdi>
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            id="stSlug"
                            name="profile-slug"
                            defaultValue="ravisha"
                            pattern="[a-z0-9-]+"
                            aria-describedby="stSlugPrefix stSlugHelp"
                            required
                          />
                          <div className="invalid-feedback">
                            Use lower-case letters, numbers and hyphens only.
                          </div>
                        </div>
                        <p id="stSlugHelp" className="fs-xs text-muted-2 mt-2 mb-0">
                          Changing this breaks any link already shared.
                        </p>
                      </div>
                      <ul className="list-unstyled d-flex flex-column mb-0">
                        <li className="d-flex flex-wrap align-items-center justify-content-between gap-3 py-3 border-b-soft">
                          <span className="min-w-0">
                            {" "}
                            <span className="d-block fs-md fw-semibold text-title">
                              Show my email address
                            </span>
                            {" "}
                            <span className="d-block fs-xs text-muted-2">
                              Workspace members can see it on your profile card.
                            </span>
                            {" "}
                          </span>
                          <span className="form-check form-switch flex-shrink-0 m-0 ps-0">
                            {" "}
                            <input
                              className="form-check-input m-0"
                              type="checkbox"
                              role="switch"
                              id="stShowEmail"
                              name="show-email"
                              defaultChecked
                            />
                            {" "}
                            <label className="visually-hidden" htmlFor="stShowEmail">
                              Show my email address
                            </label>
                            {" "}
                          </span>
                        </li>
                        <li className="d-flex flex-wrap align-items-center justify-content-between gap-3 pt-3">
                          <span className="min-w-0">
                            {" "}
                            <span className="d-block fs-md fw-semibold text-title">
                              Show my activity
                            </span>
                            {" "}
                            <span className="d-block fs-xs text-muted-2">
                              Your releases and reviews appear in the workspace timeline.
                            </span>
                            {" "}
                          </span>
                          <span className="form-check form-switch flex-shrink-0 m-0 ps-0">
                            {" "}
                            <input
                              className="form-check-input m-0"
                              type="checkbox"
                              role="switch"
                              id="stShowActivity"
                              name="show-activity"
                              defaultChecked
                            />
                            {" "}
                            <label className="visually-hidden" htmlFor="stShowActivity">
                              Show my activity
                            </label>
                            {" "}
                          </span>
                        </li>
                      </ul>
                      <div className="tint-success rounded-3 p-3 mt-3 d-none" role="status" data-validate-success="">
                        <p className="d-flex align-items-center gap-2 fs-md fw-semibold mb-0">
                          <i className="icon-20 flex-shrink-0" data-lucide="circle-check-big" aria-hidden="true" />
                          <span>
                            Profile updated — teammates will see the change straight away.
                          </span>
                        </p>
                      </div>
                      <div className="d-flex flex-wrap justify-content-end gap-2 pt-3 mt-3 border-t-soft">
                        <button type="reset" className="btn btn-outline-soft text-nowrap">
                          Discard
                        </button>
                        <button
                          type="submit"
                          className="btn btn-accent d-inline-flex align-items-center gap-2 text-nowrap"
                        >
                          <i className="icon-18" data-lucide="check" aria-hidden="true" />
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              {" "}
              {/* ===== Preferences ===== */}
              {" "}
              <div className="tab-pane fade" id="stPrefsPane" role="tabpanel" aria-labelledby="stPrefsTab" tabIndex="0">
                <form id="stPrefsForm" noValidate data-validate="">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="mb-3">
                        <h3 className="fs-5 fw-bold text-title mb-1">
                          {"Language & region"}
                        </h3>
                        <p className="fs-md text-body-2 mb-0">
                          How dates, times and numbers are written across every dashboard.
                        </p>
                      </div>
                      <div className="row g-3">
                        <div className="col-12 col-md-6">
                          <label htmlFor="stLanguage" className="form-label fs-md fw-semibold text-title">
                            Language
                          </label>
                          {" "}
                          <select
                            className="form-select pe-5"
                            id="stLanguage"
                            name="language"
                            defaultValue="English (United States)"
                          >
                            <option>
                              English (United States)
                            </option>
                            <option>
                              English (United Kingdom)
                            </option>
                            <option>
                              Français
                            </option>
                            <option>
                              Deutsch
                            </option>
                            <option>
                              العربية
                            </option>
                            <option>
                              हिन्दी
                            </option>
                          </select>
                        </div>
                        <div className="col-12 col-md-6">
                          <label htmlFor="stTimezone" className="form-label fs-md fw-semibold text-title">
                            Time zone
                          </label>
                          {" "}
                          <select
                            className="form-select pe-5"
                            id="stTimezone"
                            name="timezone"
                            defaultValue="(GMT−05:00) Central Time — Austin"
                          >
                            <option>
                              (GMT−05:00) Central Time — Austin
                            </option>
                            <option>
                              (GMT−08:00) Pacific Time — Los Angeles
                            </option>
                            <option>
                              (GMT+00:00) Greenwich Mean Time — London
                            </option>
                            <option>
                              (GMT+01:00) Central European Time — Berlin
                            </option>
                            <option>
                              (GMT+05:30) India Standard Time — Mumbai
                            </option>
                            <option>
                              (GMT+09:00) Japan Standard Time — Tokyo
                            </option>
                          </select>
                        </div>
                        <div className="col-12 col-md-6">
                          <label htmlFor="stDateFormat" className="form-label fs-md fw-semibold text-title">
                            Date format
                          </label>
                          {" "}
                          <select
                            className="form-select pe-5"
                            id="stDateFormat"
                            name="date-format"
                            defaultValue="31 August 2026"
                          >
                            <option>
                              31 August 2026
                            </option>
                            <option>
                              08/31/2026
                            </option>
                            <option>
                              31/08/2026
                            </option>
                            <option>
                              2026-08-31
                            </option>
                          </select>
                        </div>
                        <div className="col-12 col-md-6">
                          <label htmlFor="stTimeFormat" className="form-label fs-md fw-semibold text-title">
                            Time format
                          </label>
                          {" "}
                          <select
                            className="form-select pe-5"
                            id="stTimeFormat"
                            name="time-format"
                            defaultValue="24-hour — 14:05"
                          >
                            <option>
                              24-hour — 14:05
                            </option>
                            <option>
                              12-hour — 2:05 PM
                            </option>
                          </select>
                        </div>
                        <div className="col-12 col-md-6">
                          <label htmlFor="stWeekStart" className="form-label fs-md fw-semibold text-title">
                            First day of the week
                          </label>
                          {" "}
                          <select className="form-select pe-5" id="stWeekStart" name="week-start" defaultValue="Monday">
                            <option>
                              Monday
                            </option>
                            <option>
                              Sunday
                            </option>
                            <option>
                              Saturday
                            </option>
                          </select>
                        </div>
                        <div className="col-12 col-md-6">
                          <label htmlFor="stCurrency" className="form-label fs-md fw-semibold text-title">
                            Reporting currency
                          </label>
                          {" "}
                          <select
                            className="form-select pe-5"
                            id="stCurrency"
                            name="currency"
                            defaultValue="USD — US Dollar"
                          >
                            <option>
                              USD — US Dollar
                            </option>
                            <option>
                              EUR — Euro
                            </option>
                            <option>
                              GBP — Pound Sterling
                            </option>
                            <option>
                              INR — Indian Rupee
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <div className="mb-3">
                        <h3 className="fs-5 fw-bold text-title mb-1">
                          Workspace defaults
                        </h3>
                        <p className="fs-md text-body-2 mb-0">
                          Where Vionex opens and how much it shows before you touch a control.
                        </p>
                      </div>
                      <div className="row g-3 mb-1">
                        <div className="col-12 col-md-6">
                          <label htmlFor="stLanding" className="form-label fs-md fw-semibold text-title">
                            Landing page
                          </label>
                          {" "}
                          <select
                            className="form-select pe-5"
                            id="stLanding"
                            name="landing-page"
                            defaultValue="AI Dashboard"
                          >
                            <option>
                              AI Dashboard
                            </option>
                            <option>
                              Analytics Dashboard
                            </option>
                            <option>
                              CRM Dashboard
                            </option>
                            <option>
                              Timeline
                            </option>
                            <option>
                              Help Desk
                            </option>
                          </select>
                        </div>
                        <div className="col-12 col-md-6">
                          <label htmlFor="stRows" className="form-label fs-md fw-semibold text-title">
                            Rows per table
                          </label>
                          {" "}
                          <select className="form-select pe-5" id="stRows" name="rows-per-page" defaultValue="25">
                            <option>
                              10
                            </option>
                            <option>
                              25
                            </option>
                            <option>
                              50
                            </option>
                            <option>
                              100
                            </option>
                          </select>
                        </div>
                      </div>
                      <ul className="list-unstyled d-flex flex-column mb-0">
                        <li className="d-flex flex-wrap align-items-center justify-content-between gap-3 py-3 border-b-soft">
                          <span className="min-w-0">
                            {" "}
                            <span className="d-block fs-md fw-semibold text-title">
                              Auto-refresh live dashboards
                            </span>
                            {" "}
                            <span className="d-block fs-xs text-muted-2">
                              Pull fresh figures every 60 seconds while a dashboard is open.
                            </span>
                            {" "}
                          </span>
                          <span className="form-check form-switch flex-shrink-0 m-0 ps-0">
                            {" "}
                            <input
                              className="form-check-input m-0"
                              type="checkbox"
                              role="switch"
                              id="stAutoRefresh"
                              name="auto-refresh"
                              defaultChecked
                            />
                            {" "}
                            <label className="visually-hidden" htmlFor="stAutoRefresh">
                              Auto-refresh live dashboards
                            </label>
                            {" "}
                          </span>
                        </li>
                        <li className="d-flex flex-wrap align-items-center justify-content-between gap-3 py-3 border-b-soft">
                          <span className="min-w-0">
                            {" "}
                            <span className="d-block fs-md fw-semibold text-title">
                              Show onboarding tips
                            </span>
                            {" "}
                            <span className="d-block fs-xs text-muted-2">
                              Short hints on panels you have not opened before.
                            </span>
                            {" "}
                          </span>
                          <span className="form-check form-switch flex-shrink-0 m-0 ps-0">
                            {" "}
                            <input
                              className="form-check-input m-0"
                              type="checkbox"
                              role="switch"
                              id="stTips"
                              name="tips"
                            />
                            {" "}
                            <label className="visually-hidden" htmlFor="stTips">
                              Show onboarding tips
                            </label>
                            {" "}
                          </span>
                        </li>
                        <li className="d-flex flex-wrap align-items-center justify-content-between gap-3 pt-3">
                          <span className="min-w-0">
                            {" "}
                            <span className="d-block fs-md fw-semibold text-title">
                              Open reports in a new tab
                            </span>
                            {" "}
                            <span className="d-block fs-xs text-muted-2">
                              Keeps the dashboard you started from underneath.
                            </span>
                            {" "}
                          </span>
                          <span className="form-check form-switch flex-shrink-0 m-0 ps-0">
                            {" "}
                            <input
                              className="form-check-input m-0"
                              type="checkbox"
                              role="switch"
                              id="stNewTab"
                              name="new-tab"
                              defaultChecked
                            />
                            {" "}
                            <label className="visually-hidden" htmlFor="stNewTab">
                              Open reports in a new tab
                            </label>
                            {" "}
                          </span>
                        </li>
                      </ul>
                      <div className="tint-success rounded-3 p-3 mt-3 d-none" role="status" data-validate-success="">
                        <p className="d-flex align-items-center gap-2 fs-md fw-semibold mb-0">
                          <i className="icon-20 flex-shrink-0" data-lucide="circle-check-big" aria-hidden="true" />
                          <span>
                            Preferences saved — they apply the next time a dashboard loads.
                          </span>
                        </p>
                      </div>
                      <div className="d-flex flex-wrap justify-content-end gap-2 pt-3 mt-3 border-t-soft">
                        <button type="reset" className="btn btn-outline-soft text-nowrap">
                          Discard
                        </button>
                        <button
                          type="submit"
                          className="btn btn-accent d-inline-flex align-items-center gap-2 text-nowrap"
                        >
                          <i className="icon-18" data-lucide="check" aria-hidden="true" />
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              {" "}
              {/* ===== Notifications ===== */}
              {" "}
              <div
                className="tab-pane fade"
                id="stNotifyPane"
                role="tabpanel"
                aria-labelledby="stNotifyTab"
                tabIndex="0"
              >
                <form id="stNotifyForm" noValidate data-validate="">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="mb-3">
                        <h3 className="fs-5 fw-bold text-title mb-1">
                          What reaches you
                        </h3>
                        <p className="fs-md text-body-2 mb-0">
                          Pick a channel per topic. Security alerts always go out on at least one channel.
                        </p>
                      </div>
                      <div className="table-responsive">
                        <table className="table table-hover align-middle mb-0">
                          <caption className="visually-hidden">
                            Notification channels for each topic
                          </caption>
                          <thead>
                            <tr>
                              <th scope="col">
                                Topic
                              </th>
                              <th scope="col" className="text-center">
                                Email
                              </th>
                              <th scope="col" className="text-center">
                                Push
                              </th>
                              <th scope="col" className="text-center">
                                SMS
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row" className="fw-normal">
                                <span className="d-flex align-items-center gap-2">
                                  <span className="icon-box icon-box-sm tint-emerald flex-shrink-0" aria-hidden="true">
                                    <i data-lucide="rocket" />
                                  </span>
                                  <span className="min-w-0">
                                    {" "}
                                    <span className="d-block fs-md fw-semibold text-title">
                                      {"Releases & deployments"}
                                    </span>
                                    {" "}
                                    <span className="d-block fs-xs text-muted-2">
                                      Rollouts, rollbacks and failed builds.
                                    </span>
                                    {" "}
                                  </span>
                                </span>
                              </th>
                              <td className="text-center">
                                <span className="form-check form-switch d-inline-flex m-0 ps-0">
                                  {" "}
                                  <input
                                    className="form-check-input m-0"
                                    type="checkbox"
                                    role="switch"
                                    id="stRelEmail"
                                    name="releases-email"
                                    defaultChecked
                                  />
                                  {" "}
                                  <label className="visually-hidden" htmlFor="stRelEmail">
                                    Email me about releases and deployments
                                  </label>
                                  {" "}
                                </span>
                              </td>
                              <td className="text-center">
                                <span className="form-check form-switch d-inline-flex m-0 ps-0">
                                  {" "}
                                  <input
                                    className="form-check-input m-0"
                                    type="checkbox"
                                    role="switch"
                                    id="stRelPush"
                                    name="releases-push"
                                    defaultChecked
                                  />
                                  {" "}
                                  <label className="visually-hidden" htmlFor="stRelPush">
                                    Push me about releases and deployments
                                  </label>
                                  {" "}
                                </span>
                              </td>
                              <td className="text-center">
                                <span className="form-check form-switch d-inline-flex m-0 ps-0">
                                  {" "}
                                  <input
                                    className="form-check-input m-0"
                                    type="checkbox"
                                    role="switch"
                                    id="stRelSms"
                                    name="releases-sms"
                                  />
                                  {" "}
                                  <label className="visually-hidden" htmlFor="stRelSms">
                                    Text me about releases and deployments
                                  </label>
                                  {" "}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row" className="fw-normal">
                                <span className="d-flex align-items-center gap-2">
                                  <span className="icon-box icon-box-sm tint-violet flex-shrink-0" aria-hidden="true">
                                    <i data-lucide="message-square" />
                                  </span>
                                  <span className="min-w-0">
                                    {" "}
                                    <span className="d-block fs-md fw-semibold text-title">
                                      {"Mentions & reviews"}
                                    </span>
                                    {" "}
                                    <span className="d-block fs-xs text-muted-2">
                                      Someone names you or asks for changes.
                                    </span>
                                    {" "}
                                  </span>
                                </span>
                              </th>
                              <td className="text-center">
                                <span className="form-check form-switch d-inline-flex m-0 ps-0">
                                  {" "}
                                  <input
                                    className="form-check-input m-0"
                                    type="checkbox"
                                    role="switch"
                                    id="stMentionEmail"
                                    name="mentions-email"
                                    defaultChecked
                                  />
                                  {" "}
                                  <label className="visually-hidden" htmlFor="stMentionEmail">
                                    Email me about mentions and reviews
                                  </label>
                                  {" "}
                                </span>
                              </td>
                              <td className="text-center">
                                <span className="form-check form-switch d-inline-flex m-0 ps-0">
                                  {" "}
                                  <input
                                    className="form-check-input m-0"
                                    type="checkbox"
                                    role="switch"
                                    id="stMentionPush"
                                    name="mentions-push"
                                    defaultChecked
                                  />
                                  {" "}
                                  <label className="visually-hidden" htmlFor="stMentionPush">
                                    Push me about mentions and reviews
                                  </label>
                                  {" "}
                                </span>
                              </td>
                              <td className="text-center">
                                <span className="form-check form-switch d-inline-flex m-0 ps-0">
                                  {" "}
                                  <input
                                    className="form-check-input m-0"
                                    type="checkbox"
                                    role="switch"
                                    id="stMentionSms"
                                    name="mentions-sms"
                                  />
                                  {" "}
                                  <label className="visually-hidden" htmlFor="stMentionSms">
                                    Text me about mentions and reviews
                                  </label>
                                  {" "}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row" className="fw-normal">
                                <span className="d-flex align-items-center gap-2">
                                  <span className="icon-box icon-box-sm tint-blue flex-shrink-0" aria-hidden="true">
                                    <i data-lucide="shield-check" />
                                  </span>
                                  <span className="min-w-0">
                                    {" "}
                                    <span className="d-block fs-md fw-semibold text-title">
                                      Security alerts
                                    </span>
                                    {" "}
                                    <span className="d-block fs-xs text-muted-2">
                                      New sign-ins, key rotations, policy changes.
                                    </span>
                                    {" "}
                                  </span>
                                </span>
                              </th>
                              <td className="text-center">
                                <span className="form-check form-switch d-inline-flex m-0 ps-0">
                                  {" "}
                                  <input
                                    className="form-check-input m-0"
                                    type="checkbox"
                                    role="switch"
                                    id="stSecEmail"
                                    name="security-email"
                                    defaultChecked
                                  />
                                  {" "}
                                  <label className="visually-hidden" htmlFor="stSecEmail">
                                    Email me about security alerts
                                  </label>
                                  {" "}
                                </span>
                              </td>
                              <td className="text-center">
                                <span className="form-check form-switch d-inline-flex m-0 ps-0">
                                  {" "}
                                  <input
                                    className="form-check-input m-0"
                                    type="checkbox"
                                    role="switch"
                                    id="stSecPush"
                                    name="security-push"
                                    defaultChecked
                                  />
                                  {" "}
                                  <label className="visually-hidden" htmlFor="stSecPush">
                                    Push me about security alerts
                                  </label>
                                  {" "}
                                </span>
                              </td>
                              <td className="text-center">
                                <span className="form-check form-switch d-inline-flex m-0 ps-0">
                                  {" "}
                                  <input
                                    className="form-check-input m-0"
                                    type="checkbox"
                                    role="switch"
                                    id="stSecSms"
                                    name="security-sms"
                                    defaultChecked
                                  />
                                  {" "}
                                  <label className="visually-hidden" htmlFor="stSecSms">
                                    Text me about security alerts
                                  </label>
                                  {" "}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row" className="fw-normal">
                                <span className="d-flex align-items-center gap-2">
                                  <span className="icon-box icon-box-sm tint-amber flex-shrink-0" aria-hidden="true">
                                    <i data-lucide="receipt" />
                                  </span>
                                  <span className="min-w-0">
                                    {" "}
                                    <span className="d-block fs-md fw-semibold text-title">
                                      {"Billing & usage"}
                                    </span>
                                    {" "}
                                    <span className="d-block fs-xs text-muted-2">
                                      Invoices, payment failures, quota warnings.
                                    </span>
                                    {" "}
                                  </span>
                                </span>
                              </th>
                              <td className="text-center">
                                <span className="form-check form-switch d-inline-flex m-0 ps-0">
                                  {" "}
                                  <input
                                    className="form-check-input m-0"
                                    type="checkbox"
                                    role="switch"
                                    id="stBillEmail"
                                    name="billing-email"
                                    defaultChecked
                                  />
                                  {" "}
                                  <label className="visually-hidden" htmlFor="stBillEmail">
                                    Email me about billing and usage
                                  </label>
                                  {" "}
                                </span>
                              </td>
                              <td className="text-center">
                                <span className="form-check form-switch d-inline-flex m-0 ps-0">
                                  {" "}
                                  <input
                                    className="form-check-input m-0"
                                    type="checkbox"
                                    role="switch"
                                    id="stBillPush"
                                    name="billing-push"
                                  />
                                  {" "}
                                  <label className="visually-hidden" htmlFor="stBillPush">
                                    Push me about billing and usage
                                  </label>
                                  {" "}
                                </span>
                              </td>
                              <td className="text-center">
                                <span className="form-check form-switch d-inline-flex m-0 ps-0">
                                  {" "}
                                  <input
                                    className="form-check-input m-0"
                                    type="checkbox"
                                    role="switch"
                                    id="stBillSms"
                                    name="billing-sms"
                                  />
                                  {" "}
                                  <label className="visually-hidden" htmlFor="stBillSms">
                                    Text me about billing and usage
                                  </label>
                                  {" "}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row" className="fw-normal">
                                <span className="d-flex align-items-center gap-2">
                                  <span className="icon-box icon-box-sm tint-slate flex-shrink-0" aria-hidden="true">
                                    <i data-lucide="sparkles" />
                                  </span>
                                  <span className="min-w-0">
                                    {" "}
                                    <span className="d-block fs-md fw-semibold text-title">
                                      Product updates
                                    </span>
                                    {" "}
                                    <span className="d-block fs-xs text-muted-2">
                                      What shipped in Vionex this month.
                                    </span>
                                    {" "}
                                  </span>
                                </span>
                              </th>
                              <td className="text-center">
                                <span className="form-check form-switch d-inline-flex m-0 ps-0">
                                  {" "}
                                  <input
                                    className="form-check-input m-0"
                                    type="checkbox"
                                    role="switch"
                                    id="stNewsEmail"
                                    name="product-email"
                                    defaultChecked
                                  />
                                  {" "}
                                  <label className="visually-hidden" htmlFor="stNewsEmail">
                                    Email me product updates
                                  </label>
                                  {" "}
                                </span>
                              </td>
                              <td className="text-center">
                                <span className="form-check form-switch d-inline-flex m-0 ps-0">
                                  {" "}
                                  <input
                                    className="form-check-input m-0"
                                    type="checkbox"
                                    role="switch"
                                    id="stNewsPush"
                                    name="product-push"
                                  />
                                  {" "}
                                  <label className="visually-hidden" htmlFor="stNewsPush">
                                    Push me product updates
                                  </label>
                                  {" "}
                                </span>
                              </td>
                              <td className="text-center">
                                <span className="form-check form-switch d-inline-flex m-0 ps-0">
                                  {" "}
                                  <input
                                    className="form-check-input m-0"
                                    type="checkbox"
                                    role="switch"
                                    id="stNewsSms"
                                    name="product-sms"
                                  />
                                  {" "}
                                  <label className="visually-hidden" htmlFor="stNewsSms">
                                    Text me product updates
                                  </label>
                                  {" "}
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <div className="mb-3">
                        <h3 className="fs-5 fw-bold text-title mb-1">
                          Delivery
                        </h3>
                        <p className="fs-md text-body-2 mb-0">
                          How often the quieter topics are batched, and when we should leave you alone.
                        </p>
                      </div>
                      <div className="row g-3 mb-1">
                        <div className="col-12 col-md-6">
                          <label htmlFor="stDigest" className="form-label fs-md fw-semibold text-title">
                            Email digest
                          </label>
                          {" "}
                          <select
                            className="form-select pe-5"
                            id="stDigest"
                            name="digest"
                            defaultValue="Daily at 09:00"
                          >
                            <option>
                              As it happens
                            </option>
                            <option>
                              Daily at 09:00
                            </option>
                            <option>
                              Weekly on Monday
                            </option>
                            <option>
                              Never
                            </option>
                          </select>
                        </div>
                        <div className="col-6 col-md-3">
                          <label htmlFor="stQuietFrom" className="form-label fs-md fw-semibold text-title">
                            Quiet from
                          </label>
                          {" "}
                          <input
                            type="time"
                            className="form-control"
                            id="stQuietFrom"
                            name="quiet-from"
                            defaultValue="19:00"
                          />
                        </div>
                        <div className="col-6 col-md-3">
                          <label htmlFor="stQuietTo" className="form-label fs-md fw-semibold text-title">
                            Quiet until
                          </label>
                          {" "}
                          <input
                            type="time"
                            className="form-control"
                            id="stQuietTo"
                            name="quiet-to"
                            defaultValue="08:00"
                          />
                        </div>
                      </div>
                      <ul className="list-unstyled d-flex flex-column mb-0">
                        <li className="d-flex flex-wrap align-items-center justify-content-between gap-3 py-3 border-b-soft">
                          <span className="min-w-0">
                            {" "}
                            <span className="d-block fs-md fw-semibold text-title">
                              Respect quiet hours
                            </span>
                            {" "}
                            <span className="d-block fs-xs text-muted-2">
                              Everything except security alerts waits until morning.
                            </span>
                            {" "}
                          </span>
                          <span className="form-check form-switch flex-shrink-0 m-0 ps-0">
                            {" "}
                            <input
                              className="form-check-input m-0"
                              type="checkbox"
                              role="switch"
                              id="stQuiet"
                              name="quiet"
                              defaultChecked
                            />
                            {" "}
                            <label className="visually-hidden" htmlFor="stQuiet">
                              Respect quiet hours
                            </label>
                            {" "}
                          </span>
                        </li>
                        <li className="d-flex flex-wrap align-items-center justify-content-between gap-3 pt-3">
                          <span className="min-w-0">
                            {" "}
                            <span className="d-block fs-md fw-semibold text-title">
                              Pause everything for 24 hours
                            </span>
                            {" "}
                            <span className="d-block fs-xs text-muted-2">
                              Nothing is sent until this switches itself back on.
                            </span>
                            {" "}
                          </span>
                          <span className="form-check form-switch flex-shrink-0 m-0 ps-0">
                            {" "}
                            <input
                              className="form-check-input m-0"
                              type="checkbox"
                              role="switch"
                              id="stPause"
                              name="pause"
                            />
                            {" "}
                            <label className="visually-hidden" htmlFor="stPause">
                              Pause everything for 24 hours
                            </label>
                            {" "}
                          </span>
                        </li>
                      </ul>
                      <div className="tint-success rounded-3 p-3 mt-3 d-none" role="status" data-validate-success="">
                        <p className="d-flex align-items-center gap-2 fs-md fw-semibold mb-0">
                          <i className="icon-20 flex-shrink-0" data-lucide="circle-check-big" aria-hidden="true" />
                          <span>
                            Notification settings saved.
                          </span>
                        </p>
                      </div>
                      <div className="d-flex flex-wrap justify-content-end gap-2 pt-3 mt-3 border-t-soft">
                        <button type="reset" className="btn btn-outline-soft text-nowrap">
                          Discard
                        </button>
                        <button
                          type="submit"
                          className="btn btn-accent d-inline-flex align-items-center gap-2 text-nowrap"
                        >
                          <i className="icon-18" data-lucide="check" aria-hidden="true" />
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              {" "}
              {/* ===== Security ===== */}
              {" "}
              <div
                className="tab-pane fade"
                id="stSecurityPane"
                role="tabpanel"
                aria-labelledby="stSecurityTab"
                tabIndex="0"
              >
                <form id="stPasswordForm" className="card mb-3" noValidate data-validate="">
                  <div className="card-body">
                    <div className="mb-3">
                      <h3 className="fs-5 fw-bold text-title mb-1">
                        Password
                      </h3>
                      <p className="fs-md text-body-2 mb-0">
                        Last changed
                        {" "}
                        <bdi>
                          12 June 2026
                        </bdi>
                        . Signing in with a password still needs your second factor.
                      </p>
                    </div>
                    <div className="row g-3 mb-3">
                      <div className="col-12 col-md-6">
                        <label htmlFor="stCurrentPass" className="form-label fs-md fw-semibold text-title">
                          Current password
                        </label>
                        {" "}
                        <input
                          type="password"
                          className="form-control"
                          id="stCurrentPass"
                          name="current-password"
                          autoComplete="current-password"
                          required
                        />
                        {" "}
                        <div className="invalid-feedback">
                          Enter your current password.
                        </div>
                      </div>
                    </div>
                    <div className="row g-3">
                      <div className="col-12 col-md-6">
                        <label htmlFor="stNewPass" className="form-label fs-md fw-semibold text-title">
                          New password
                        </label>
                        {" "}
                        <input
                          type="password"
                          className="form-control"
                          id="stNewPass"
                          name="new-password"
                          minLength="12"
                          autoComplete="new-password"
                          aria-describedby="stPassStrength stPassHelp"
                          required
                        />
                        {" "}
                        <div className="invalid-feedback">
                          Use at least 12 characters.
                        </div>
                        <p id="stPassStrength" className="d-flex align-items-center gap-2 mt-2 mb-0">
                          <span className="seg-meter" role="img" aria-label="Password strength 3 out of 4">
                            <span className="bg-cat-emerald" />
                            <span className="bg-cat-emerald" />
                            <span className="bg-cat-emerald" />
                            <span />
                          </span>
                          <span className="fs-xs fw-semibold text-cat-emerald">
                            Strong
                          </span>
                        </p>
                      </div>
                      <div className="col-12 col-md-6">
                        <label htmlFor="stConfirmPass" className="form-label fs-md fw-semibold text-title">
                          Confirm new password
                        </label>
                        {" "}
                        <input
                          type="password"
                          className="form-control"
                          id="stConfirmPass"
                          name="confirm-password"
                          minLength="12"
                          autoComplete="new-password"
                          required
                        />
                        {" "}
                        <div className="invalid-feedback">
                          Type the new password again.
                        </div>
                      </div>
                      <div className="col-12">
                        <p id="stPassHelp" className="fs-xs text-muted-2 mb-0">
                          <bdi>
                            At least 12 characters, mixing letters, numbers and one symbol. Anything found in a breach list is rejected.
                          </bdi>
                        </p>
                      </div>
                    </div>
                    <div className="tint-success rounded-3 p-3 mt-3 d-none" role="status" data-validate-success="">
                      <p className="d-flex align-items-center gap-2 fs-md fw-semibold mb-0">
                        <i className="icon-20 flex-shrink-0" data-lucide="circle-check-big" aria-hidden="true" />
                        <span>
                          Password updated — other devices will be asked to sign in again.
                        </span>
                      </p>
                    </div>
                    <div className="d-flex flex-wrap justify-content-end gap-2 pt-3 mt-3 border-t-soft">
                      <button type="reset" className="btn btn-outline-soft text-nowrap">
                        Discard
                      </button>
                      <button
                        type="submit"
                        className="btn btn-accent d-inline-flex align-items-center gap-2 text-nowrap"
                      >
                        <i className="icon-18" data-lucide="lock" aria-hidden="true" />
                        Update password
                      </button>
                    </div>
                  </div>
                </form>
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                      <div className="min-w-0">
                        <h3 className="fs-5 fw-bold text-title mb-1">
                          Two-factor authentication
                        </h3>
                        <p className="fs-md text-body-2 mb-0">
                          A second step whenever you sign in from a new device.
                        </p>
                      </div>
                      <span className="badge-soft tint-emerald d-inline-flex align-items-center gap-1 text-nowrap">
                        {" "}
                        <i className="icon-12" data-lucide="shield-check" aria-hidden="true" />
                        On
                        {" "}
                      </span>
                    </div>
                    <ul className="list-unstyled d-flex flex-column mb-0">
                      <li className="d-flex flex-wrap align-items-center gap-3 py-3 border-b-soft">
                        <span className="icon-box tint-emerald border-current flex-shrink-0" aria-hidden="true">
                          <i data-lucide="smartphone" />
                        </span>
                        <span className="flex-grow-1 min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title">
                            Authenticator app
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2">
                            <bdi>
                              1Password · added 12 June 2026
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <button type="button" className="btn btn-outline-soft btn-sm text-nowrap flex-shrink-0">
                          Manage
                        </button>
                      </li>
                      <li className="d-flex flex-wrap align-items-center gap-3 py-3 border-b-soft">
                        <span className="icon-box tint-amber border-current flex-shrink-0" aria-hidden="true">
                          <i data-lucide="key-round" />
                        </span>
                        <span className="flex-grow-1 min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title">
                            Recovery codes
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2">
                            <bdi>
                              3 of 10 unused · download them before you lose the last one
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <button
                          type="button"
                          className="btn btn-outline-soft btn-sm d-inline-flex align-items-center gap-2 text-nowrap flex-shrink-0"
                        >
                          <i className="icon-14" data-lucide="download" aria-hidden="true" />
                          Regenerate
                        </button>
                      </li>
                      <li className="d-flex flex-wrap align-items-center gap-3 pt-3">
                        <span className="icon-box tint-slate border-current flex-shrink-0" aria-hidden="true">
                          <i data-lucide="mail" />
                        </span>
                        <span className="flex-grow-1 min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title">
                            Text message backup
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2">
                            <bdi>
                              +1 512 555 4417
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <span className="form-check form-switch flex-shrink-0 m-0 ps-0">
                          {" "}
                          <input className="form-check-input m-0" type="checkbox" role="switch" id="stSmsBackup" />
                          {" "}
                          <label className="visually-hidden" htmlFor="stSmsBackup">
                            Use text message as a backup second factor
                          </label>
                          {" "}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="mb-3">
                      <h3 className="fs-5 fw-bold text-title mb-1">
                        Where you’re signed in
                      </h3>
                      <p className="fs-md text-body-2 mb-0">
                        Sign out anything you do not recognise, then change your password.
                      </p>
                    </div>
                    <ul className="list-unstyled d-flex flex-column mb-0">
                      <li className="d-flex flex-wrap align-items-center gap-3 py-3 border-b-soft">
                        <span className="icon-box tint-brand border-current flex-shrink-0" aria-hidden="true">
                          <i data-lucide="laptop" />
                        </span>
                        <span className="flex-grow-1 min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-truncate">
                            MacBook Pro · Chrome
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi>
                              Austin, US · 103.21.58.14 · active now
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <span className="badge-soft tint-brand text-nowrap flex-shrink-0">
                          This device
                        </span>
                      </li>
                      <li className="d-flex flex-wrap align-items-center gap-3 py-3 border-b-soft">
                        <span className="icon-box tint-violet border-current flex-shrink-0" aria-hidden="true">
                          <i data-lucide="smartphone" />
                        </span>
                        <span className="flex-grow-1 min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-truncate">
                            iPhone 15 Pro · Vionex app
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi>
                              Austin, US · 103.21.58.77 · 2 hours ago
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <button type="button" className="btn btn-ghost hover-danger btn-sm text-nowrap flex-shrink-0">
                          Sign out
                        </button>
                      </li>
                      <li className="d-flex flex-wrap align-items-center gap-3 pt-3">
                        <span className="icon-box tint-slate border-current flex-shrink-0" aria-hidden="true">
                          <i data-lucide="monitor" />
                        </span>
                        <span className="flex-grow-1 min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-truncate">
                            Windows 11 · Edge
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi>
                              Frankfurt, DE · 88.214.30.6 · 4 days ago
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <button type="button" className="btn btn-ghost hover-danger btn-sm text-nowrap flex-shrink-0">
                          Sign out
                        </button>
                      </li>
                    </ul>
                    <div className="d-flex flex-wrap justify-content-end pt-3 mt-3 border-t-soft">
                      <button
                        type="button"
                        className="btn btn-outline-soft d-inline-flex align-items-center gap-2 text-nowrap"
                      >
                        <i className="icon-18 flip-rtl" data-lucide="log-out" aria-hidden="true" />
                        Sign out of every other device
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card overflow-hidden text-cat-red">
                  <div className="card-body d-flex align-items-start gap-3">
                    <span className="icon-box icon-box-lg tint-danger border-current flex-shrink-0" aria-hidden="true">
                      <i data-lucide="triangle-alert" />
                    </span>
                    <div className="flex-grow-1 min-w-0">
                      <h3 className="fs-6 fw-semibold text-title mb-1">
                        Delete this workspace
                      </h3>
                      <p className="fs-md text-body-2 mb-3">
                        Dashboards, connected sources and
                        {" "}
                        <bdi>
                          2 years
                        </bdi>
                        {" "}
                        of audit history go with it. This cannot be undone.
                      </p>
                      <button
                        type="button"
                        className="btn btn-danger d-inline-flex align-items-center gap-2 text-nowrap"
                        data-bs-toggle="modal"
                        data-bs-target="#stDeleteWorkspace"
                      >
                        <i className="icon-18" data-lucide="trash-2" aria-hidden="true" />
                        Delete workspace
                      </button>
                    </div>
                  </div>
                  <span className="accent-edge-b" aria-hidden="true" />
                </div>
              </div>
              {" "}
              {/* ===== Billing ===== */}
              {" "}
              <div
                className="tab-pane fade"
                id="stBillingPane"
                role="tabpanel"
                aria-labelledby="stBillingTab"
                tabIndex="0"
              >
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="d-flex flex-wrap align-items-start justify-content-between gap-3 mb-3">
                      <div className="min-w-0">
                        <h3 className="fs-5 fw-bold text-title mb-1">
                          {"Plan & usage"}
                        </h3>
                        <p className="fs-md text-body-2 mb-0">
                          Billed monthly. Overages are invoiced at the end of the period.
                        </p>
                      </div>
                      <a
                        href="/pricing"
                        className="btn btn-accent d-inline-flex align-items-center gap-2 text-nowrap flex-shrink-0"
                      >
                        {" "}
                        <i className="icon-18" data-lucide="zap" aria-hidden="true" />
                        Change plan
                        {" "}
                      </a>
                    </div>
                    <div className="d-flex flex-wrap align-items-center gap-3 border-2 border-plain shadow-sm text-cat-violet bg-wash-current rounded-3 p-3 mb-3">
                      <span
                        className="icon-box icon-box-lg bg-cat-violet text-white rounded-circle flex-shrink-0"
                        aria-hidden="true"
                      >
                        <i data-lucide="sparkles" />
                      </span>
                      <div className="flex-grow-1 min-w-0">
                        <span className="d-flex flex-wrap align-items-center gap-2">
                          <span className="fs-5 fw-bold text-title">
                            Enterprise
                          </span>
                          <span className="badge-soft tint-violet text-nowrap">
                            Current plan
                          </span>
                        </span>
                        {" "}
                        <span className="d-block fs-md text-body-2">
                          <bdi>
                            Renews 30 September 2026 · 24 seats included
                          </bdi>
                        </span>
                      </div>
                      <p className="fs-2 fw-bold text-title lh-1 mb-0 flex-shrink-0">
                        <bdi>
                          $249
                        </bdi>
                        <span className="fs-md fw-medium text-muted-2">
                          /mo
                        </span>
                      </p>
                    </div>
                    <ul className="list-unstyled row row-cols-1 row-cols-md-3 g-3 mb-0">
                      <li className="col">
                        <div className="bg-soft rounded-3 p-3 h-100">
                          <p className="d-flex align-items-center justify-content-between gap-2 fs-md fw-semibold text-title mb-1">
                            <span className="min-w-0 text-truncate">
                              Team seats
                            </span>
                            <span className="fs-xs text-muted-2 text-nowrap flex-shrink-0">
                              <bdi>
                                75%
                              </bdi>
                            </span>
                          </p>
                          <p className="fs-xs text-muted-2 mb-2">
                            <bdi>
                              18 of 24 used
                            </bdi>
                          </p>
                          <div
                            className="progress"
                            role="progressbar"
                            aria-label="Team seats used"
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <div className="progress-bar bg-cat-violet w-75" />
                          </div>
                        </div>
                      </li>
                      <li className="col">
                        <div className="bg-soft rounded-3 p-3 h-100">
                          <p className="d-flex align-items-center justify-content-between gap-2 fs-md fw-semibold text-title mb-1">
                            <span className="min-w-0 text-truncate">
                              Compute hours
                            </span>
                            <span className="fs-xs text-muted-2 text-nowrap flex-shrink-0">
                              <bdi>
                                50%
                              </bdi>
                            </span>
                          </p>
                          <p className="fs-xs text-muted-2 mb-2">
                            <bdi>
                              620 of 1,240 GPU-hours
                            </bdi>
                          </p>
                          <div
                            className="progress"
                            role="progressbar"
                            aria-label="Compute hours used"
                            aria-valuenow="50"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <div className="progress-bar bg-cat-blue w-50" />
                          </div>
                        </div>
                      </li>
                      <li className="col">
                        <div className="bg-soft rounded-3 p-3 h-100">
                          <p className="d-flex align-items-center justify-content-between gap-2 fs-md fw-semibold text-title mb-1">
                            <span className="min-w-0 text-truncate">
                              API calls
                            </span>
                            <span className="fs-xs text-muted-2 text-nowrap flex-shrink-0">
                              <bdi>
                                25%
                              </bdi>
                            </span>
                          </p>
                          <p className="fs-xs text-muted-2 mb-2">
                            <bdi>
                              1.2M of 4.8M
                            </bdi>
                          </p>
                          <div
                            className="progress"
                            role="progressbar"
                            aria-label="API calls used"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <div className="progress-bar bg-cat-emerald w-25" />
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <form id="stBillingForm" className="card" noValidate data-validate="">
                  <div className="card-body">
                    <div className="mb-3">
                      <h3 className="fs-5 fw-bold text-title mb-1">
                        {"Payment & invoices"}
                      </h3>
                      <p className="fs-md text-body-2 mb-0">
                        Where we charge, and who receives the receipt.
                      </p>
                    </div>
                    <ul className="list-unstyled d-flex flex-column mb-3">
                      <li className="d-flex flex-wrap align-items-center gap-3 py-3 border-b-soft">
                        <span className="icon-box tint-blue border-current flex-shrink-0" aria-hidden="true">
                          <i data-lucide="credit-card" />
                        </span>
                        <span className="flex-grow-1 min-w-0">
                          {" "}
                          <span className="d-flex flex-wrap align-items-center gap-2">
                            <span className="fs-md fw-semibold text-title">
                              <bdi>
                                Visa •••• 4242
                              </bdi>
                            </span>
                            <span className="badge-soft tint-emerald text-nowrap">
                              Default
                            </span>
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2">
                            <bdi>
                              Expires 09/2029 · Ravisha Verma
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <button
                          type="button"
                          className="btn btn-outline-soft btn-sm d-inline-flex align-items-center gap-2 text-nowrap flex-shrink-0"
                        >
                          <i className="icon-14" data-lucide="pencil" aria-hidden="true" />
                          Edit
                        </button>
                      </li>
                      <li className="d-flex flex-wrap align-items-center gap-3 pt-3">
                        <span className="icon-box tint-slate border-current flex-shrink-0" aria-hidden="true">
                          <i data-lucide="building-2" />
                        </span>
                        <span className="flex-grow-1 min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title">
                            <bdi>
                              Bank transfer · HDFC •••• 8810
                            </bdi>
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2">
                            Backup method for annual invoices
                          </span>
                          {" "}
                        </span>
                        <button type="button" className="btn btn-ghost hover-danger btn-sm text-nowrap flex-shrink-0">
                          Remove
                        </button>
                      </li>
                    </ul>
                    <button
                      type="button"
                      className="btn btn-outline-soft border-dashed d-inline-flex align-items-center gap-2 w-100 justify-content-center mb-3"
                    >
                      <i className="icon-18" data-lucide="plus" aria-hidden="true" />
                      Add a payment method
                    </button>
                    <div className="row g-3">
                      <div className="col-12 col-md-6">
                        <label htmlFor="stBillingEmail" className="form-label fs-md fw-semibold text-title">
                          Billing email
                        </label>
                        {" "}
                        <input
                          type="email"
                          className="form-control"
                          id="stBillingEmail"
                          name="billing-email"
                          defaultValue="accounts@vionex.com"
                          autoComplete="email"
                          required
                        />
                        {" "}
                        <div className="invalid-feedback">
                          Receipts need an email address to go to.
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <label htmlFor="stCompany" className="form-label fs-md fw-semibold text-title">
                          Company name
                        </label>
                        {" "}
                        <input
                          type="text"
                          className="form-control"
                          id="stCompany"
                          name="company"
                          defaultValue="Vionex Inc."
                          autoComplete="organization"
                          required
                        />
                        {" "}
                        <div className="invalid-feedback">
                          Add the name that should appear on the invoice.
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <label htmlFor="stTaxId" className="form-label fs-md fw-semibold text-title">
                          Tax ID
                          {" "}
                          <span className="fw-normal text-muted-2">
                            (optional)
                          </span>
                        </label>
                        {" "}
                        <input
                          type="text"
                          className="form-control"
                          id="stTaxId"
                          name="tax-id"
                          defaultValue="US 84-3921754"
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        <label htmlFor="stBillingCountry" className="form-label fs-md fw-semibold text-title">
                          Billing country
                        </label>
                        {" "}
                        <select
                          className="form-select pe-5"
                          id="stBillingCountry"
                          name="billing-country"
                          defaultValue="United States"
                        >
                          <option>
                            United States
                          </option>
                          <option>
                            United Kingdom
                          </option>
                          <option>
                            Germany
                          </option>
                          <option>
                            India
                          </option>
                          <option>
                            Australia
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="tint-success rounded-3 p-3 mt-3 d-none" role="status" data-validate-success="">
                      <p className="d-flex align-items-center gap-2 fs-md fw-semibold mb-0">
                        <i className="icon-20 flex-shrink-0" data-lucide="circle-check-big" aria-hidden="true" />
                        <span>
                          Billing details saved — the next invoice will use them.
                        </span>
                      </p>
                    </div>
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 pt-3 mt-3 border-t-soft">
                      <a
                        href="/invoice-list"
                        className="d-inline-flex align-items-center gap-1 fs-md fw-medium text-brand text-nowrap"
                      >
                        View all invoices
                        <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                      </a>
                      <span className="d-flex flex-wrap gap-2">
                        <button type="reset" className="btn btn-outline-soft text-nowrap">
                          Discard
                        </button>
                        <button
                          type="submit"
                          className="btn btn-accent d-inline-flex align-items-center gap-2 text-nowrap"
                        >
                          <i className="icon-18" data-lucide="check" aria-hidden="true" />
                          Save changes
                        </button>
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Delete workspace confirmation ===== */}
      <div
        role="dialog"
        className="modal fade"
        id="stDeleteWorkspace"
        tabIndex="-1"
        aria-labelledby="stDeleteWorkspaceLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <form className="modal-content" noValidate data-modal-form="">
            <div className="modal-header border-b-soft gap-3">
              <span className="icon-box icon-box-lg tint-danger border-current flex-shrink-0" aria-hidden="true">
                <i data-lucide="triangle-alert" />
              </span>
              <div className="min-w-0">
                <h2 className="modal-title h5 mb-1" id="stDeleteWorkspaceLabel">
                  Delete this workspace?
                </h2>
                <p className="fs-md text-muted-2 mb-0">
                  Vionex Inc. and everything inside it.
                </p>
              </div>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <ul className="list-unstyled d-flex flex-column gap-2 mb-3">
                <li className="d-flex align-items-center gap-2 fs-md text-body-2">
                  <i className="icon-16 flex-shrink-0 text-cat-red" data-lucide="triangle-alert" aria-hidden="true" />
                  <span>
                    <bdi>
                      14 dashboards and 9 connected sources are removed
                    </bdi>
                  </span>
                </li>
                <li className="d-flex align-items-center gap-2 fs-md text-body-2">
                  <i className="icon-16 flex-shrink-0 text-cat-red" data-lucide="triangle-alert" aria-hidden="true" />
                  <span>
                    <bdi>
                      All 24 members lose access immediately
                    </bdi>
                  </span>
                </li>
                <li className="d-flex align-items-center gap-2 fs-md text-body-2">
                  <i className="icon-16 flex-shrink-0 text-cat-red" data-lucide="triangle-alert" aria-hidden="true" />
                  <span>
                    <bdi>
                      2 years of audit history cannot be restored
                    </bdi>
                  </span>
                </li>
              </ul>
              <label htmlFor="stDeleteConfirm" className="form-label fs-md fw-semibold text-title">
                Type
                {" "}
                <bdi className="text-cat-red">
                  Vionex Inc.
                </bdi>
                {" "}
                to confirm
              </label>
              {" "}
              <input
                type="text"
                className="form-control"
                id="stDeleteConfirm"
                name="confirm-name"
                pattern={"Vionex Inc\\."}
                placeholder="Vionex Inc."
                autoComplete="off"
                required
              />
              {" "}
              <div className="invalid-feedback">
                Type the workspace name exactly as shown.
              </div>
            </div>
            <div className="modal-footer border-t-soft gap-2">
              <button type="button" className="btn btn-outline-soft text-nowrap" data-bs-dismiss="modal">
                Keep workspace
              </button>
              <button type="submit" className="btn btn-danger d-inline-flex align-items-center gap-2 text-nowrap">
                <i className="icon-18" data-lucide="trash-2" aria-hidden="true" />
                Delete permanently
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* ========== FOOTER ========== */}
    </AppShell>
  );
}

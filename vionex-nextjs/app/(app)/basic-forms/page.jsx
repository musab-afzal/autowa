/* Generated from the Vionex HTML theme by scripts/convert-html.mjs */
import AppShell from "@/components/AppShell";

export const metadata = {
  title: "Vionex — Basic Forms",
  description: "Vionex basic forms — text inputs, floating labels, input groups, selects, checkboxes, switches and range controls, built with Bootstrap 5, CSS variables and a scalable design system.",
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
          Basic Forms
        </h1>
        <nav aria-label="breadcrumb" className="d-none d-md-block">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="/">
                Dashboard
              </a>
            </li>
            <li className="breadcrumb-item">
              Forms
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Basic Forms
            </li>
          </ol>
        </nav>
      </div>
      <div className="row g-3 g-xl-4">
        {/* ===== Default Inputs ===== */}
        <div className="col-12 col-lg-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-default-inputs">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-default-inputs" className="fs-5 fw-bold text-title mb-1">
                  Default Inputs
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Standard text, email, password, and number fields with labels and helper text.
                </p>
              </div>
              <form>
                <div className="mb-3">
                  <label className="form-label fs-md fw-semibold text-title" htmlFor="bfName">
                    Full Name
                  </label>
                  {" "}
                  <input type="text" className="form-control" id="bfName" placeholder="Ravisha Verma" />
                </div>
                <div className="mb-3">
                  <label className="form-label fs-md fw-semibold text-title" htmlFor="bfEmail">
                    Email Address
                  </label>
                  {" "}
                  <input type="email" className="form-control" id="bfEmail" placeholder="ravisha@vionex.com" />
                  {" "}
                  <span className="form-text">
                    We'll never share your email with anyone else.
                  </span>
                </div>
                <div className="row g-3">
                  <div className="col-12 col-sm-6">
                    <label className="form-label fs-md fw-semibold text-title" htmlFor="bfPassword">
                      Password
                    </label>
                    {" "}
                    <input
                      type="password"
                      className="form-control"
                      id="bfPassword"
                      placeholder="At least 8 characters"
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <label className="form-label fs-md fw-semibold text-title" htmlFor="bfAge">
                      Age
                    </label>
                    {" "}
                    <input type="number" className="form-control" id="bfAge" placeholder="28" min="0" max="120" />
                  </div>
                </div>
              </form>
            </div>
          </section>
        </div>
        {/* ===== Floating Labels ===== */}
        <div className="col-12 col-lg-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-floating-labels">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-floating-labels" className="fs-5 fw-bold text-title mb-1">
                  Floating Labels
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Labels that animate into place, ideal for compact, modern forms.
                </p>
              </div>
              <form>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="flName" placeholder="Full Name" />
                  {" "}
                  <label htmlFor="flName">
                    Full Name
                  </label>
                </div>
                <div className="form-floating mb-3">
                  <input type="email" className="form-control" id="flEmail" placeholder="Email Address" />
                  {" "}
                  <label htmlFor="flEmail">
                    Email Address
                  </label>
                </div>
                <div className="form-floating">
                  <select className="form-select" id="flRole" defaultValue="Product Designer">
                    <option>
                      Product Designer
                    </option>
                    <option>
                      Frontend Engineer
                    </option>
                    <option>
                      Project Manager
                    </option>
                    <option>
                      QA Analyst
                    </option>
                  </select>
                  {" "}
                  <label htmlFor="flRole">
                    Team Role
                  </label>
                </div>
              </form>
            </div>
          </section>
        </div>
        {/* ===== Input Groups ===== */}
        <div className="col-12 col-lg-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-input-groups">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-input-groups" className="fs-5 fw-bold text-title mb-1">
                  Input Groups
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Attach icons, text, or buttons to inputs for added context.
                </p>
              </div>
              <form>
                <div className="mb-3">
                  <label className="form-label fs-md fw-semibold text-title" htmlFor="igUser">
                    Username
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i data-lucide="at-sign" />
                    </span>
                    <input type="text" className="form-control" id="igUser" placeholder="ravisha" />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label fs-md fw-semibold text-title" htmlFor="igAmount">
                    Amount
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      $
                    </span>
                    <input type="number" className="form-control" id="igAmount" placeholder="1,499.00" />
                    <span className="input-group-text">
                      .00
                    </span>
                  </div>
                </div>
                <div>
                  <label className="form-label fs-md fw-semibold text-title" htmlFor="igSite">
                    Website
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      https://
                    </span>
                    <input type="text" className="form-control" id="igSite" placeholder="vionex.com" />
                    <button className="btn btn-primary" type="button">
                      Verify
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </div>
        {/* ===== Textarea ===== */}
        <div className="col-12 col-lg-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-textarea">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-textarea" className="fs-5 fw-bold text-title mb-1">
                  Textarea
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Multi-line text inputs for longer descriptions and notes.
                </p>
              </div>
              <form>
                <div className="mb-3">
                  <label className="form-label fs-md fw-semibold text-title" htmlFor="taBio">
                    Short Bio
                  </label>
                  {" "}
                  <textarea
                    className="form-control"
                    id="taBio"
                    rows="3"
                    placeholder="Tell us a little about yourself..."
                  />
                </div>
                <div>
                  <label className="form-label fs-md fw-semibold text-title" htmlFor="taNotes">
                    Project Notes
                  </label>
                  {" "}
                  <textarea
                    className="form-control"
                    id="taNotes"
                    rows="5"
                    defaultValue="Kickoff scheduled for Monday. Design system audit complete, moving to component build next sprint."
                  />
                </div>
              </form>
            </div>
          </section>
        </div>
        {/* ===== Select Menus ===== */}
        <div className="col-12 col-lg-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-select-amp-multi-select">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-select-amp-multi-select" className="fs-5 fw-bold text-title mb-1">
                  {"Select & Multi Select"}
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Single-choice dropdowns and multi-select lists for grouped options.
                </p>
              </div>
              <form>
                <div className="mb-3">
                  <label className="form-label fs-md fw-semibold text-title" htmlFor="selRole">
                    Team Role
                  </label>
                  {" "}
                  <select className="form-select" id="selRole" defaultValue="Product Designer">
                    <option>
                      Product Designer
                    </option>
                    <option>
                      Frontend Engineer
                    </option>
                    <option>
                      Project Manager
                    </option>
                    <option>
                      QA Analyst
                    </option>
                  </select>
                </div>
                <div>
                  <label className="form-label fs-md fw-semibold text-title" htmlFor="selSkills">
                    Skills
                  </label>
                  {" "}
                  <select
                    className="form-select radius-sm"
                    id="selSkills"
                    multiple
                    size="4"
                    defaultValue={["UI Design","Prototyping"]}
                  >
                    <option>
                      UI Design
                    </option>
                    <option>
                      Prototyping
                    </option>
                    <option>
                      User Research
                    </option>
                    <option>
                      Design Systems
                    </option>
                    <option>
                      Accessibility
                    </option>
                  </select>
                  {" "}
                  <span className="form-text">
                    Hold Ctrl (Cmd on Mac) to select multiple.
                  </span>
                </div>
              </form>
            </div>
          </section>
        </div>
        {/* ===== Checkboxes & Radios ===== */}
        <div className="col-12 col-lg-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-checkboxes-amp-radios">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-checkboxes-amp-radios" className="fs-5 fw-bold text-title mb-1">
                  {"Checkboxes & Radios"}
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Selection controls for multiple and single choices.
                </p>
              </div>
              <form>
                <div className="row g-3">
                  <div className="col-12 col-sm-6">
                    <p className="form-label fs-md fw-semibold text-title mb-2">
                      Notifications
                    </p>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="chkEmail" defaultChecked />
                      {" "}
                      <label className="form-check-label" htmlFor="chkEmail">
                        Email alerts
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="chkPush" />
                      {" "}
                      <label className="form-check-label" htmlFor="chkPush">
                        Push notifications
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="chkSms" disabled />
                      {" "}
                      <label className="form-check-label" htmlFor="chkSms">
                        SMS (unavailable)
                      </label>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <p className="form-label fs-md fw-semibold text-title mb-2">
                      Plan
                    </p>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="plan" id="radStarter" defaultChecked />
                      {" "}
                      <label className="form-check-label" htmlFor="radStarter">
                        Starter
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="plan" id="radPro" />
                      {" "}
                      <label className="form-check-label" htmlFor="radPro">
                        Pro
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="plan" id="radEnt" />
                      {" "}
                      <label className="form-check-label" htmlFor="radEnt">
                        Enterprise
                      </label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </div>
        {/* ===== Switches ===== */}
        <div className="col-12 col-lg-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-switches">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-switches" className="fs-5 fw-bold text-title mb-1">
                  Switches
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Toggle switches for enabling or disabling settings.
                </p>
              </div>
              <form>
                <div className="form-check form-switch mb-2">
                  <input className="form-check-input" type="checkbox" role="switch" id="swDark" defaultChecked />
                  {" "}
                  <label className="form-check-label" htmlFor="swDark">
                    Enable dark mode
                  </label>
                </div>
                <div className="form-check form-switch mb-2">
                  <input className="form-check-input" type="checkbox" role="switch" id="swAuto" />
                  {" "}
                  <label className="form-check-label" htmlFor="swAuto">
                    Auto-save changes
                  </label>
                </div>
                <div className="form-check form-switch mb-2">
                  <input className="form-check-input" type="checkbox" role="switch" id="swBeta" defaultChecked />
                  {" "}
                  <label className="form-check-label" htmlFor="swBeta">
                    Join beta program
                  </label>
                </div>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" role="switch" id="swLocked" disabled />
                  {" "}
                  <label className="form-check-label" htmlFor="swLocked">
                    Two-factor auth (locked)
                  </label>
                </div>
              </form>
            </div>
          </section>
        </div>
        {/* ===== Range Slider ===== */}
        <div className="col-12 col-lg-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-range-slider">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-range-slider" className="fs-5 fw-bold text-title mb-1">
                  Range Slider
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Slide-to-select controls for values within a defined range.
                </p>
              </div>
              <form>
                <div className="mb-3">
                  <label className="form-label fs-md fw-semibold text-title" htmlFor="rngVolume">
                    Volume
                  </label>
                  {" "}
                  <input type="range" className="form-range" id="rngVolume" defaultValue="60" />
                </div>
                <div className="mb-3">
                  <label className="form-label fs-md fw-semibold text-title" htmlFor="rngBudget">
                    Budget (steps of 500)
                  </label>
                  {" "}
                  <input
                    type="range"
                    className="form-range"
                    id="rngBudget"
                    min="0"
                    max="5000"
                    step="500"
                    defaultValue="2500"
                  />
                </div>
                <div>
                  <label className="form-label fs-md fw-semibold text-title" htmlFor="rngDisabled">
                    Disabled
                  </label>
                  {" "}
                  <input type="range" className="form-range" id="rngDisabled" defaultValue="40" disabled />
                </div>
              </form>
            </div>
          </section>
        </div>
        {/* ===== Date, Time & Color ===== */}
        <div className="col-12 col-lg-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-date-time-amp-color">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-date-time-amp-color" className="fs-5 fw-bold text-title mb-1">
                  {"Date, Time & Color"}
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Native pickers for scheduling and color selection.
                </p>
              </div>
              <form>
                <div className="row g-3">
                  <div className="col-12 col-sm-6">
                    <label className="form-label fs-md fw-semibold text-title" htmlFor="dpDate">
                      Start Date
                    </label>
                    {" "}
                    <input type="date" className="form-control" id="dpDate" defaultValue="2026-07-09" />
                  </div>
                  <div className="col-12 col-sm-6">
                    <label className="form-label fs-md fw-semibold text-title" htmlFor="tpTime">
                      Start Time
                    </label>
                    {" "}
                    <input type="time" className="form-control" id="tpTime" defaultValue="09:30" />
                  </div>
                  <div className="col-12">
                    <label className="form-label fs-md fw-semibold text-title" htmlFor="cpColor">
                      Brand Color
                    </label>
                    {" "}
                    <input
                      type="color"
                      className="form-control form-control-color"
                      id="cpColor"
                      defaultValue="#06b6d4"
                      title="Choose a color"
                    />
                  </div>
                </div>
              </form>
            </div>
          </section>
        </div>
        {/* ===== Search Input ===== */}
        <div className="col-12 col-lg-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-search-input">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-search-input" className="fs-5 fw-bold text-title mb-1">
                  Search Input
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Search fields with leading icons and optional action buttons.
                </p>
              </div>
              <form>
                <div className="mb-3">
                  <label className="form-label fs-md fw-semibold text-title" htmlFor="srchBasic">
                    Quick Search
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i data-lucide="search" />
                    </span>
                    <input type="search" className="form-control" id="srchBasic" placeholder="Search projects..." />
                  </div>
                </div>
                <div>
                  <label className="form-label fs-md fw-semibold text-title" htmlFor="srchAction">
                    Search with Button
                  </label>
                  <div className="input-group">
                    <input type="search" className="form-control" id="srchAction" placeholder="Search members..." />
                    <button className="btn btn-primary" type="button">
                      <i data-lucide="search" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </div>
        {/* ===== Disabled & Readonly ===== */}
        <div className="col-12 col-lg-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-disabled-amp-readonly">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-disabled-amp-readonly" className="fs-5 fw-bold text-title mb-1">
                  {"Disabled & Readonly"}
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Non-editable states for locked or system-generated values.
                </p>
              </div>
              <form>
                <div className="mb-3">
                  <label className="form-label fs-md fw-semibold text-title" htmlFor="disInput">
                    Disabled Input
                  </label>
                  {" "}
                  <input type="text" className="form-control" id="disInput" defaultValue="Cannot be edited" disabled />
                </div>
                <div className="mb-3">
                  <label className="form-label fs-md fw-semibold text-title" htmlFor="roInput">
                    Readonly Input
                  </label>
                  {" "}
                  <input type="text" className="form-control" id="roInput" defaultValue="ACC-1024-7788" readOnly />
                </div>
                <div className="mb-3">
                  <label className="form-label fs-md fw-semibold text-title" htmlFor="disSelect">
                    Disabled Select
                  </label>
                  {" "}
                  <select className="form-select" id="disSelect" disabled defaultValue="Locked selection">
                    <option>
                      Locked selection
                    </option>
                  </select>
                </div>
                <div>
                  <label className="form-label fs-md fw-semibold text-title" htmlFor="roPlain">
                    Readonly Plaintext
                  </label>
                  {" "}
                  <input
                    type="text"
                    className="form-control-plaintext"
                    id="roPlain"
                    defaultValue="ravisha@vionex.com"
                    readOnly
                  />
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
      {/* ========== FOOTER ========== */}
    </AppShell>
  );
}

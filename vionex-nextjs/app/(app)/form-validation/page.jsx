/* Generated from the Vionex HTML theme by scripts/convert-html.mjs */
import AppShell from "@/components/AppShell";

export const metadata = {
  title: "Vionex — Form Validation",
  description: "Vionex form validation — Bootstrap browser validation, custom feedback, inline states and server-style errors, built with Bootstrap 5, CSS variables and a scalable design system.",
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
          Form Validation
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
              Form Validation
            </li>
          </ol>
        </nav>
      </div>
      <div className="row g-3 g-xl-4">
        {/* ===== Basic Validation ===== */}
        <div className="col-12 col-lg-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-basic-validation">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-basic-validation" className="fs-5 fw-bold text-title mb-1">
                  Basic Validation
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Inline feedback shown directly beneath each field.
                </p>
              </div>
              <form className="was-validated" noValidate>
                <div className="mb-3">
                  <label className="form-label fs-md fw-semibold text-title" htmlFor="bvName">
                    Full Name
                  </label>
                  {" "}
                  <input
                    type="text"
                    className="form-control is-valid"
                    id="bvName"
                    defaultValue="Ravisha Verma"
                    required
                  />
                  {" "}
                  <div className="valid-feedback">
                    Looks good!
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label fs-md fw-semibold text-title" htmlFor="bvUser">
                    Username
                  </label>
                  {" "}
                  <input type="text" className="form-control is-invalid" id="bvUser" defaultValue="rv" required />
                  {" "}
                  <div className="invalid-feedback">
                    Username must be at least 4 characters.
                  </div>
                </div>
                <button type="submit" className="btn btn-primary px-4">
                  Submit
                </button>
              </form>
            </div>
          </section>
        </div>
        {/* ===== Required Fields ===== */}
        <div className="col-12 col-lg-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-required-fields">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-required-fields" className="fs-5 fw-bold text-title mb-1">
                  Required Fields
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Mandatory inputs that must be completed before submitting.
                </p>
              </div>
              <form noValidate>
                <div className="mb-3">
                  <label className="form-label fs-md fw-semibold text-title" htmlFor="rqCompany">
                    Company
                    {" "}
                    <span className="text-danger">
                      *
                    </span>
                  </label>
                  {" "}
                  <input
                    type="text"
                    className="form-control is-invalid"
                    id="rqCompany"
                    placeholder="Acme Inc."
                    required
                  />
                  {" "}
                  <div className="invalid-feedback">
                    This field is required.
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label fs-md fw-semibold text-title" htmlFor="rqRole">
                    Role
                    {" "}
                    <span className="text-danger">
                      *
                    </span>
                  </label>
                  {" "}
                  <select className="form-select is-invalid" id="rqRole" required defaultValue="">
                    <option value="" disabled>
                      Choose a role...
                    </option>
                    <option>
                      Designer
                    </option>
                    <option>
                      Engineer
                    </option>
                    <option>
                      Manager
                    </option>
                  </select>
                  {" "}
                  <div className="invalid-feedback">
                    Please select a role.
                  </div>
                </div>
                <div className="form-check mb-3">
                  <input className="form-check-input is-invalid" type="checkbox" id="rqTerms" required />
                  {" "}
                  <label className="form-check-label fs-md" htmlFor="rqTerms">
                    I agree to the terms
                    {" "}
                    <span className="text-danger">
                      *
                    </span>
                  </label>
                  {" "}
                  <div className="invalid-feedback">
                    You must accept before continuing.
                  </div>
                </div>
                <button type="submit" className="btn btn-primary px-4">
                  Submit
                </button>
              </form>
            </div>
          </section>
        </div>
        {/* ===== Email & URL Validation ===== */}
        <div className="col-12 col-lg-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-email-amp-url-validation">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-email-amp-url-validation" className="fs-5 fw-bold text-title mb-1">
                  {"Email & URL Validation"}
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Pattern checks for correctly formatted addresses and links.
                </p>
              </div>
              <form noValidate>
                <div className="mb-3">
                  <label className="form-label fs-md fw-semibold text-title" htmlFor="evEmail">
                    Email Address
                  </label>
                  <div className="input-group has-validation">
                    <span className="input-group-text">
                      <i data-lucide="mail" className="icon-16" />
                    </span>
                    <input
                      type="email"
                      className="form-control is-invalid"
                      id="evEmail"
                      defaultValue="ravisha@vionex"
                    />
                    <div className="invalid-feedback">
                      Please enter a valid email address.
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label fs-md fw-semibold text-title" htmlFor="evUrl">
                    Website
                  </label>
                  <div className="input-group has-validation">
                    <span className="input-group-text">
                      https://
                    </span>
                    <input type="url" className="form-control is-valid" id="evUrl" defaultValue="https://vionex.com" />
                    <div className="valid-feedback">
                      Valid URL.
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </div>
        {/* ===== Password Validation ===== */}
        <div className="col-12 col-lg-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-password-amp-confirm-password">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-password-amp-confirm-password" className="fs-5 fw-bold text-title mb-1">
                  {"Password & Confirm Password"}
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Strength rules with a matching confirmation field.
                </p>
              </div>
              <form noValidate>
                <div className="mb-3">
                  <label className="form-label fs-md fw-semibold text-title" htmlFor="pvPass">
                    Password
                  </label>
                  {" "}
                  <input type="password" className="form-control is-valid" id="pvPass" defaultValue="Vionex@2026" />
                  {" "}
                  <div className="valid-feedback">
                    Strong password.
                  </div>
                </div>
                <div className="mb-2">
                  <label className="form-label fs-md fw-semibold text-title" htmlFor="pvConfirm">
                    Confirm Password
                  </label>
                  {" "}
                  <input
                    type="password"
                    className="form-control is-invalid"
                    id="pvConfirm"
                    defaultValue="Vionex@2025"
                  />
                  {" "}
                  <div className="invalid-feedback">
                    Passwords do not match.
                  </div>
                </div>
                <span className="form-text">
                  Use 8+ characters with a number and a symbol.
                </span>
              </form>
            </div>
          </section>
        </div>
        {/* ===== Phone Validation ===== */}
        <div className="col-12 col-lg-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-phone-validation">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-phone-validation" className="fs-5 fw-bold text-title mb-1">
                  Phone Validation
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Numeric-only checks for valid contact numbers.
                </p>
              </div>
              <form noValidate>
                <div className="mb-3">
                  <label className="form-label fs-md fw-semibold text-title" htmlFor="phValid">
                    Mobile Number
                  </label>
                  <div className="input-group has-validation">
                    <span className="input-group-text">
                      <i data-lucide="phone" className="icon-16" />
                    </span>
                    <input type="tel" className="form-control is-valid" id="phValid" defaultValue="+1 (555) 018-2043" />
                    <div className="valid-feedback">
                      Valid phone number.
                    </div>
                  </div>
                </div>
                <div>
                  <label className="form-label fs-md fw-semibold text-title" htmlFor="phInvalid">
                    Office Number
                  </label>
                  <div className="input-group has-validation">
                    <span className="input-group-text">
                      <i data-lucide="phone" className="icon-16" />
                    </span>
                    <input type="tel" className="form-control is-invalid" id="phInvalid" defaultValue="555-abc" />
                    <div className="invalid-feedback">
                      Enter digits only, including area code.
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </div>
        {/* ===== Validation States ===== */}
        <div className="col-12 col-lg-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-validation-states">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-validation-states" className="fs-5 fw-bold text-title mb-1">
                  Validation States
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Success, warning, and error styling for input feedback.
                </p>
              </div>
              <form noValidate>
                <div className="mb-3">
                  <label className="form-label fs-md fw-semibold text-title" htmlFor="stSuccess">
                    Success State
                  </label>
                  {" "}
                  <input type="text" className="form-control is-valid" id="stSuccess" defaultValue="Available" />
                  {" "}
                  <div className="valid-feedback">
                    This username is available.
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label fs-md fw-semibold text-title" htmlFor="stWarning">
                    Warning State
                  </label>
                  {" "}
                  <input type="text" className="form-control border-warning" id="stWarning" defaultValue="admin123" />
                  {" "}
                  <span className="small text-warning mt-1 d-flex align-items-center gap-1">
                    <i data-lucide="triangle-alert" className="icon-14" />
                    This value is weak but allowed.
                  </span>
                </div>
                <div>
                  <label className="form-label fs-md fw-semibold text-title" htmlFor="stError">
                    Error State
                  </label>
                  {" "}
                  <input type="text" className="form-control is-invalid" id="stError" defaultValue="!!!" />
                  {" "}
                  <div className="invalid-feedback">
                    Only letters and numbers are allowed.
                  </div>
                </div>
              </form>
            </div>
          </section>
        </div>
        {/* ===== Tooltip Validation ===== */}
        <div className="col-12 col-lg-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-tooltip-validation">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-tooltip-validation" className="fs-5 fw-bold text-title mb-1">
                  Tooltip Validation
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Floating feedback that overlays the field without shifting layout.
                </p>
              </div>
              <form noValidate>
                <div className="mb-4 position-relative">
                  <label className="form-label fs-md fw-semibold text-title" htmlFor="ttFirst">
                    First Name
                  </label>
                  {" "}
                  <input type="text" className="form-control is-valid" id="ttFirst" defaultValue="Ravisha" />
                  {" "}
                  <div className="valid-tooltip">
                    Looks good!
                  </div>
                </div>
                <div className="mb-2 position-relative">
                  <label className="form-label fs-md fw-semibold text-title" htmlFor="ttCity">
                    City
                  </label>
                  {" "}
                  <input type="text" className="form-control is-invalid" id="ttCity" defaultValue="" />
                  {" "}
                  <div className="invalid-tooltip">
                    Please provide a city.
                  </div>
                </div>
              </form>
            </div>
          </section>
        </div>
        {/* ===== Live Validation ===== */}
        <div className="col-12 col-lg-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-live-validation">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-live-validation" className="fs-5 fw-bold text-title mb-1">
                  Live Validation
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Feedback that updates instantly as the user types.
                </p>
              </div>
              <form noValidate>
                <div className="mb-3">
                  <label className="form-label fs-md fw-semibold text-title" htmlFor="lvUser">
                    Username
                  </label>
                  <div className="input-group has-validation">
                    <input type="text" className="form-control is-valid" id="lvUser" defaultValue="ravisha_v" />
                    <span className="input-group-text text-success">
                      <i data-lucide="check" className="icon-16" />
                    </span>
                    <div className="valid-feedback">
                      Available — nice choice!
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label fs-md fw-semibold text-title" htmlFor="lvHandle">
                    Handle
                  </label>
                  <div className="input-group has-validation">
                    <span className="input-group-text">
                      @
                    </span>
                    <input type="text" className="form-control is-invalid" id="lvHandle" defaultValue="ravisha v" />
                    <span className="input-group-text text-danger">
                      <i data-lucide="x" className="icon-16" />
                    </span>
                    <div className="invalid-feedback">
                      Handles can't contain spaces.
                    </div>
                  </div>
                </div>
                <span className="form-text">
                  Validation runs on every keystroke.
                </span>
              </form>
            </div>
          </section>
        </div>
        {/* ===== Validation Summary ===== */}
        <div className="col-12">
          <section className="card h-100 mb-0" aria-labelledby="sec-validation-summary">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-validation-summary" className="fs-5 fw-bold text-title mb-1">
                  Validation Summary
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  A consolidated list of all errors shown above the form on submit.
                </p>
              </div>
              <div className="alert alert-danger d-flex gap-3" role="alert">
                <i data-lucide="circle-alert" className="flex-shrink-0 mt-1" />
                <div>
                  <p className="fw-semibold mb-1">
                    Please fix the following 3 errors:
                  </p>
                  <ul className="mb-0 ps-3">
                    <li>
                      Email address is not valid.
                    </li>
                    <li>
                      Password must be at least 8 characters.
                    </li>
                    <li>
                      You must accept the terms and conditions.
                    </li>
                  </ul>
                </div>
              </div>
              <form noValidate>
                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <label className="form-label fs-md fw-semibold text-title" htmlFor="vsEmail">
                      Email Address
                    </label>
                    {" "}
                    <input
                      type="email"
                      className="form-control is-invalid"
                      id="vsEmail"
                      defaultValue="ravisha@vionex"
                    />
                    {" "}
                    <div className="invalid-feedback">
                      Email address is not valid.
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label fs-md fw-semibold text-title" htmlFor="vsPass">
                      Password
                    </label>
                    {" "}
                    <input type="password" className="form-control is-invalid" id="vsPass" defaultValue="123" />
                    {" "}
                    <div className="invalid-feedback">
                      Password must be at least 8 characters.
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input className="form-check-input is-invalid" type="checkbox" id="vsTerms" required />
                      {" "}
                      <label className="form-check-label fs-md" htmlFor="vsTerms">
                        I accept the terms and conditions
                      </label>
                      {" "}
                      <div className="invalid-feedback">
                        You must accept the terms and conditions.
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary px-4">
                      Create Account
                    </button>
                  </div>
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

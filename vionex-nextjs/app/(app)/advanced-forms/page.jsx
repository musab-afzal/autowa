/* Generated from the Vionex HTML theme by scripts/convert-html.mjs */
import AppShell from "@/components/AppShell";

export const metadata = {
  title: "Vionex — Advanced Forms",
  description: "Vionex advanced forms — file upload, tags, ratings, sliders, masked inputs, editors and layout patterns, built with Bootstrap 5, CSS variables and a scalable design system.",
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
          Advanced Forms
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
              Advanced Forms
            </li>
          </ol>
        </nav>
      </div>
      <div className="row g-3 g-xl-4">
        {/* ===== Input Masks ===== */}
        <div className="col-12 col-lg-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-input-masks">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-input-masks" className="fs-5 fw-bold text-title mb-1">
                  Input Masks
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Formatted inputs that guide users toward a valid pattern.
                </p>
              </div>
              <form>
                <div className="row g-3">
                  <div className="col-12 col-sm-6">
                    <label className="form-label fs-md fw-semibold text-title" htmlFor="mkDate">
                      Date
                    </label>
                    {" "}
                    <input type="text" className="form-control" id="mkDate" placeholder="MM / DD / YYYY" />
                  </div>
                  <div className="col-12 col-sm-6">
                    <label className="form-label fs-md fw-semibold text-title" htmlFor="mkCard">
                      Card Number
                    </label>
                    {" "}
                    <input type="text" className="form-control" id="mkCard" placeholder="0000 0000 0000 0000" />
                  </div>
                  <div className="col-12 col-sm-6">
                    <label className="form-label fs-md fw-semibold text-title" htmlFor="mkExpiry">
                      Expiry
                    </label>
                    {" "}
                    <input type="text" className="form-control" id="mkExpiry" placeholder="MM / YY" />
                  </div>
                  <div className="col-12 col-sm-6">
                    <label className="form-label fs-md fw-semibold text-title" htmlFor="mkSsn">
                      Tax ID
                    </label>
                    {" "}
                    <input type="text" className="form-control" id="mkSsn" placeholder="000-00-0000" />
                  </div>
                </div>
              </form>
            </div>
          </section>
        </div>
        {/* ===== Tags Input ===== */}
        <div className="col-12 col-lg-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-tags-input">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-tags-input" className="fs-5 fw-bold text-title mb-1">
                  Tags Input
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Add multiple keywords as removable pills within a single field.
                </p>
              </div>
              <form>
                <label className="form-label fs-md fw-semibold text-title" htmlFor="tagField">
                  Skills
                </label>
                <div className="form-control d-flex flex-wrap align-items-center gap-2">
                  <span className="badge-soft d-inline-flex align-items-center gap-1">
                    Design
                    <i data-lucide="x" className="icon-14" />
                  </span>
                  {" "}
                  <span className="badge-soft d-inline-flex align-items-center gap-1">
                    Bootstrap
                    <i data-lucide="x" className="icon-14" />
                  </span>
                  {" "}
                  <span className="badge-soft d-inline-flex align-items-center gap-1">
                    Figma
                    <i data-lucide="x" className="icon-14" />
                  </span>
                  {" "}
                  <input
                    type="text"
                    className="border-0 bg-transparent flex-grow-1 p-0"
                    id="tagField"
                    placeholder="Add a tag..."
                  />
                </div>
                <span className="form-text">
                  Press Enter to add a new tag.
                </span>
              </form>
            </div>
          </section>
        </div>
        {/* ===== Select2 Style Dropdown ===== */}
        <div className="col-12 col-lg-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-select2-style-dropdown">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-select2-style-dropdown" className="fs-5 fw-bold text-title mb-1">
                  Select2 Style Dropdown
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  A rich single-select with avatar-style options.
                </p>
              </div>
              <form>
                <span className="form-label fs-md fw-semibold text-title d-block" id="lbl-assign-to">
                  Assign To
                </span>
                <div className="dropdown">
                  <button
                    className="form-select text-start d-flex align-items-center gap-2"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    aria-labelledby="lbl-assign-to"
                  >
                    <span className="avatar avatar-sm bg-grad-1">
                      RV
                    </span>
                    {" "}
                    <span className="fw-medium text-title">
                      Ravisha Verma
                    </span>
                  </button>
                  {" "}
                  <div className="dropdown-menu w-100 p-2">
                    <a className="dropdown-item d-flex align-items-center gap-2 rounded-3" href="#">
                      <span className="avatar avatar-sm bg-grad-1">
                        RV
                      </span>
                      Ravisha Verma
                    </a>
                    {" "}
                    <a className="dropdown-item d-flex align-items-center gap-2 rounded-3" href="#">
                      <span className="avatar avatar-sm bg-grad-2">
                        MK
                      </span>
                      Mark Klein
                    </a>
                    {" "}
                    <a className="dropdown-item d-flex align-items-center gap-2 rounded-3" href="#">
                      <span className="avatar avatar-sm bg-grad-3">
                        PN
                      </span>
                      Priya Nair
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </div>
        {/* ===== Searchable Dropdown ===== */}
        <div className="col-12 col-lg-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-searchable-dropdown">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-searchable-dropdown" className="fs-5 fw-bold text-title mb-1">
                  Searchable Dropdown
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Filter long option lists with an inline search field.
                </p>
              </div>
              <form>
                <span className="form-label fs-md fw-semibold text-title d-block" id="lbl-project">
                  Project
                </span>
                <div className="dropdown">
                  <button
                    className="form-select text-start d-flex align-items-center gap-2"
                    type="button"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="false"
                    aria-labelledby="lbl-project"
                  >
                    Vionex Dashboard 2.0
                  </button>
                  {" "}
                  <div className="dropdown-menu w-100 p-2">
                    <div className="input-group input-group-sm mb-2">
                      <span className="input-group-text">
                        <i data-lucide="search" className="icon-14" />
                      </span>
                      <input
                        type="search"
                        className="form-control"
                        placeholder="Search projects..."
                        aria-label="Search projects"
                      />
                    </div>
                    <a className="dropdown-item rounded-3 active" href="#">
                      Vionex Dashboard 2.0
                    </a>
                    {" "}
                    <a className="dropdown-item rounded-3" href="#">
                      Mobile App Redesign
                    </a>
                    {" "}
                    <a className="dropdown-item rounded-3" href="#">
                      Marketing Website
                    </a>
                    {" "}
                    <a className="dropdown-item rounded-3" href="#">
                      Design System Library
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </div>
        {/* ===== Multi Select ===== */}
        <div className="col-12 col-lg-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-multi-select">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-multi-select" className="fs-5 fw-bold text-title mb-1">
                  Multi Select
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Select several values, shown as pills inside the control.
                </p>
              </div>
              <form>
                <span className="form-label fs-md fw-semibold text-title d-block" id="lbl-categories">
                  Categories
                </span>
                <div className="dropdown">
                  <button
                    type="button"
                    className="form-control d-flex flex-wrap align-items-center gap-2 text-start"
                    aria-labelledby="lbl-categories"
                  >
                    <span className="badge-soft d-inline-flex align-items-center gap-1">
                      Analytics
                      <i data-lucide="x" className="icon-14" />
                    </span>
                    {" "}
                    <span className="badge-soft d-inline-flex align-items-center gap-1">
                      Finance
                      <i data-lucide="x" className="icon-14" />
                    </span>
                    {" "}
                    <span className="text-muted-2 fs-xs">
                      Add more...
                    </span>
                  </button>
                  {" "}
                  <div className="dropdown-menu w-100 p-2">
                    <label className="dropdown-item d-flex align-items-center gap-2 rounded-3">
                      <input className="form-check-input m-0" type="checkbox" defaultChecked />
                      Analytics
                    </label>
                    {" "}
                    <label className="dropdown-item d-flex align-items-center gap-2 rounded-3">
                      <input className="form-check-input m-0" type="checkbox" defaultChecked />
                      Finance
                    </label>
                    {" "}
                    <label className="dropdown-item d-flex align-items-center gap-2 rounded-3">
                      <input className="form-check-input m-0" type="checkbox" />
                      Marketing
                    </label>
                    {" "}
                    <label className="dropdown-item d-flex align-items-center gap-2 rounded-3">
                      <input className="form-check-input m-0" type="checkbox" />
                      Operations
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </div>
        {/* ===== Country Selector ===== */}
        <div className="col-12 col-lg-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-country-selector">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-country-selector" className="fs-5 fw-bold text-title mb-1">
                  Country Selector
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Searchable country picker with flags and names.
                </p>
              </div>
              <form>
                <span className="form-label fs-md fw-semibold text-title d-block" id="lbl-country">
                  Country
                </span>
                <div className="dropdown">
                  <button
                    className="form-select text-start d-flex align-items-center gap-2"
                    type="button"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="false"
                    aria-labelledby="lbl-country"
                  >
                    <img src="/assets/images/flag-us.svg" alt="" width="23" height="14" className="flag pe-none" />
                    United States
                  </button>
                  {" "}
                  <div className="dropdown-menu w-100 p-2">
                    <div className="input-group input-group-sm mb-2">
                      <span className="input-group-text">
                        <i data-lucide="search" className="icon-14" />
                      </span>
                      <input
                        type="search"
                        className="form-control"
                        placeholder="Search countries..."
                        aria-label="Search countries"
                      />
                    </div>
                    <a className="dropdown-item rounded-3 d-flex align-items-center gap-2 active" href="#">
                      <img src="/assets/images/flag-us.svg" alt="" width="23" height="14" className="flag pe-none" />
                      United States
                    </a>
                    {" "}
                    <a className="dropdown-item rounded-3 d-flex align-items-center gap-2" href="#">
                      <img src="/assets/images/flag-ca.svg" alt="" width="23" height="14" className="flag pe-none" />
                      Canada
                    </a>
                    {" "}
                    <a className="dropdown-item rounded-3 d-flex align-items-center gap-2" href="#">
                      <img src="/assets/images/flag-au.svg" alt="" width="23" height="14" className="flag pe-none" />
                      Australia
                    </a>
                    {" "}
                    <a className="dropdown-item rounded-3 d-flex align-items-center gap-2" href="#">
                      <img src="/assets/images/flag-in.svg" alt="" width="23" height="14" className="flag pe-none" />
                      India
                    </a>
                    {" "}
                    <a className="dropdown-item rounded-3 d-flex align-items-center gap-2" href="#">
                      <img src="/assets/images/flag-fr.svg" alt="" width="23" height="14" className="flag pe-none" />
                      France
                    </a>
                    {" "}
                    <a className="dropdown-item rounded-3 d-flex align-items-center gap-2" href="#">
                      <img src="/assets/images/flag-it.svg" alt="" width="23" height="14" className="flag pe-none" />
                      Italy
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </div>
        {/* ===== Phone Input ===== */}
        <div className="col-12 col-lg-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-phone-input">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-phone-input" className="fs-5 fw-bold text-title mb-1">
                  Phone Input
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  International dial code selector paired with a number field.
                </p>
              </div>
              <form>
                <label className="form-label fs-md fw-semibold text-title" htmlFor="phoneField">
                  Mobile Number
                </label>
                <div className="input-group">
                  <button
                    className="btn btn-outline-soft dropdown-toggle d-inline-flex align-items-center gap-2"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src="/assets/images/flag-us.svg" alt="" width="23" height="14" className="flag pe-none" />
                    <bdi>
                      +1
                    </bdi>
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item d-flex align-items-center gap-2" href="#">
                        <img src="/assets/images/flag-us.svg" alt="" width="23" height="14" className="flag pe-none" />
                        <bdi>
                          +1
                        </bdi>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item d-flex align-items-center gap-2" href="#">
                        <img src="/assets/images/flag-ca.svg" alt="" width="23" height="14" className="flag pe-none" />
                        <bdi>
                          +1
                        </bdi>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item d-flex align-items-center gap-2" href="#">
                        <img src="/assets/images/flag-au.svg" alt="" width="23" height="14" className="flag pe-none" />
                        <bdi>
                          +61
                        </bdi>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item d-flex align-items-center gap-2" href="#">
                        <img src="/assets/images/flag-in.svg" alt="" width="23" height="14" className="flag pe-none" />
                        <bdi>
                          +91
                        </bdi>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item d-flex align-items-center gap-2" href="#">
                        <img src="/assets/images/flag-fr.svg" alt="" width="23" height="14" className="flag pe-none" />
                        <bdi>
                          +33
                        </bdi>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item d-flex align-items-center gap-2" href="#">
                        <img src="/assets/images/flag-it.svg" alt="" width="23" height="14" className="flag pe-none" />
                        <bdi>
                          +39
                        </bdi>
                      </a>
                    </li>
                  </ul>
                  <input type="tel" className="form-control" id="phoneField" placeholder="(555) 000-0000" />
                </div>
              </form>
            </div>
          </section>
        </div>
        {/* ===== Currency Input ===== */}
        <div className="col-12 col-lg-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-currency-input">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-currency-input" className="fs-5 fw-bold text-title mb-1">
                  Currency Input
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Amount field with symbol and switchable currency.
                </p>
              </div>
              <form>
                <label className="form-label fs-md fw-semibold text-title" htmlFor="curField">
                  Budget
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    $
                  </span>
                  <input type="text" className="form-control" id="curField" defaultValue="12,499.00" />
                  <select className="form-select flex-grow-0 w-auto pe-5" aria-label="Currency" defaultValue="USD">
                    <option>
                      USD
                    </option>
                    <option>
                      EUR
                    </option>
                    <option>
                      GBP
                    </option>
                    <option>
                      INR
                    </option>
                  </select>
                </div>
              </form>
            </div>
          </section>
        </div>
        {/* ===== Password Strength ===== */}
        <div className="col-12 col-lg-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-password-strength">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-password-strength" className="fs-5 fw-bold text-title mb-1">
                  Password Strength
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Live strength meter with a show / hide toggle.
                </p>
              </div>
              <form>
                <label className="form-label fs-md fw-semibold text-title" htmlFor="pwField">
                  Password
                </label>
                <div className="input-group">
                  <input type="password" className="form-control" id="pwField" defaultValue="Vionex@2026" />
                  <button className="btn btn-outline-soft" type="button" aria-label="Show password">
                    <i data-lucide="eye" />
                  </button>
                </div>
                <div
                  className="progress mt-3"
                  role="progressbar"
                  aria-label="Password strength"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="progress-bar bg-success w-75" />
                </div>
                <span className="form-text d-flex justify-content-between">
                  <span>
                    Use 8+ characters with a symbol.
                  </span>
                  <span className="text-success fw-medium">
                    Strong
                  </span>
                </span>
              </form>
            </div>
          </section>
        </div>
        {/* ===== Auto Complete ===== */}
        <div className="col-12 col-lg-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-auto-complete">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-auto-complete" className="fs-5 fw-bold text-title mb-1">
                  Auto Complete
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Type-ahead suggestions surfaced as you enter text.
                </p>
              </div>
              <form>
                <label className="form-label fs-md fw-semibold text-title" htmlFor="acField">
                  City
                </label>
                {" "}
                <input type="text" className="form-control" id="acField" defaultValue="San" />
                <ul className="list-group mt-1 shadow-sm">
                  <li className="list-group-item d-flex align-items-center gap-2">
                    <i data-lucide="map-pin" className="icon-16 text-body-2" />
                    San Francisco, USA
                  </li>
                  <li className="list-group-item d-flex align-items-center gap-2">
                    <i data-lucide="map-pin" className="icon-16 text-body-2" />
                    San Diego, USA
                  </li>
                  <li className="list-group-item d-flex align-items-center gap-2">
                    <i data-lucide="map-pin" className="icon-16 text-body-2" />
                    Santiago, Chile
                  </li>
                </ul>
              </form>
            </div>
          </section>
        </div>
        {/* ===== Rating Input ===== */}
        <div className="col-12 col-lg-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-rating-input">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-rating-input" className="fs-5 fw-bold text-title mb-1">
                  Rating Input
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Star-based rating control for feedback and reviews.
                </p>
              </div>
              <form>
                <span className="form-label fs-md fw-semibold text-title d-block d-block" id="lbl-your-rating">
                  Your Rating
                </span>
                <div className="d-flex align-items-center gap-3">
                  <div
                    className="d-inline-flex align-items-center gap-1 icon-20"
                    role="img"
                    aria-label="Rated 4 out of 5"
                  >
                    <i data-lucide="star" className="icon-fill text-cat-amber" />
                    <i data-lucide="star" className="icon-fill text-cat-amber" />
                    <i data-lucide="star" className="icon-fill text-cat-amber" />
                    <i data-lucide="star" className="icon-fill text-cat-amber" />
                    <i data-lucide="star" className="text-muted-2" />
                  </div>
                  <span className="fs-md text-body-2">
                    4.0 out of 5
                  </span>
                </div>
              </form>
            </div>
          </section>
        </div>
        {/* ===== Stepper Input ===== */}
        <div className="col-12 col-lg-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-stepper-input">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-stepper-input" className="fs-5 fw-bold text-title mb-1">
                  Stepper Input
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Increment or decrement numeric values with controls.
                </p>
              </div>
              <form>
                <label className="form-label fs-md fw-semibold text-title" htmlFor="stepField">
                  Quantity
                </label>
                <div className="input-group">
                  <button className="btn btn-outline-soft" type="button" aria-label="Decrease">
                    <i data-lucide="minus" />
                  </button>
                  <input type="text" className="form-control text-center" id="stepField" defaultValue="3" />
                  <button className="btn btn-outline-soft" type="button" aria-label="Increase">
                    <i data-lucide="plus" />
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
        {/* ===== Character Counter ===== */}
        <div className="col-12 col-lg-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-character-counter">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-character-counter" className="fs-5 fw-bold text-title mb-1">
                  Character Counter
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Track remaining characters against a set limit.
                </p>
              </div>
              <form>
                <label className="form-label fs-md fw-semibold text-title" htmlFor="ccField">
                  Bio
                </label>
                {" "}
                <textarea
                  className="form-control"
                  id="ccField"
                  rows="4"
                  maxLength="280"
                  defaultValue="Product designer focused on scalable design systems and delightful user experiences."
                />
                {" "}
                <span className="form-text d-flex justify-content-between">
                  <span>
                    Keep it short and clear.
                  </span>
                  <span>
                    84 / 280
                  </span>
                </span>
              </form>
            </div>
          </section>
        </div>
        {/* ===== Drag & Drop Inputs ===== */}
        <div className="col-12 col-lg-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-drag-amp-drop-inputs">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-drag-amp-drop-inputs" className="fs-5 fw-bold text-title mb-1">
                  {"Drag & Drop Inputs"}
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Drop files onto the zone or click to browse.
                </p>
              </div>
              <label
                className="border-soft border-dashed rounded-4 tile-soft transition-base w-100 d-flex flex-column align-items-center justify-content-center text-center gap-2 p-4"
                htmlFor="ddFile"
              >
                <span className="icon-box tint-primary">
                  <i data-lucide="cloud-upload" />
                </span>
                <span className="fw-semibold text-title">
                  {"Drag & drop files here"}
                </span>
                <span className="fs-md text-body-2">
                  or
                  {" "}
                  <span className="text-primary-soft fw-medium">
                    browse
                  </span>
                  {" "}
                  — PNG, JPG, PDF up to 10 MB
                </span>
                <input type="file" id="ddFile" className="d-none" multiple />
              </label>
            </div>
          </section>
        </div>
        {/* ===== File Preview ===== */}
        <div className="col-12 col-lg-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-file-preview">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-file-preview" className="fs-5 fw-bold text-title mb-1">
                  File Preview
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Uploaded files shown with type icon, size, and remove action.
                </p>
              </div>
              <div className="d-flex flex-column gap-2">
                <div className="d-flex align-items-center gap-3 bg-soft border-soft rounded-3 p-2 px-3">
                  <span className="icon-box icon-box-sm tint-danger flex-shrink-0">
                    <i data-lucide="file-text" />
                  </span>
                  <span className="d-flex flex-column lh-sm flex-grow-1 min-w-0">
                    <span className="fw-semibold text-title text-truncate">
                      brand-guidelines.pdf
                    </span>
                    <span className="fs-xs text-muted-2">
                      3.4 MB
                    </span>
                  </span>
                  <button
                    type="button"
                    className="icon-box icon-box-sm bg-muted text-body-2 border-0 transition-base"
                    aria-label="Remove file"
                  >
                    <i data-lucide="x" />
                  </button>
                </div>
                <div className="d-flex align-items-center gap-3 bg-soft border-soft rounded-3 p-2 px-3">
                  <span className="icon-box icon-box-sm tint-info flex-shrink-0">
                    <i data-lucide="image" />
                  </span>
                  <span className="d-flex flex-column lh-sm flex-grow-1 min-w-0">
                    <span className="fw-semibold text-title text-truncate">
                      dashboard-hero.png
                    </span>
                    <span className="fs-xs text-muted-2">
                      1.2 MB
                    </span>
                  </span>
                  <button
                    type="button"
                    className="icon-box icon-box-sm bg-muted text-body-2 border-0 transition-base"
                    aria-label="Remove file"
                  >
                    <i data-lucide="x" />
                  </button>
                </div>
                <div className="d-flex align-items-center gap-3 bg-soft border-soft rounded-3 p-2 px-3">
                  <span className="icon-box icon-box-sm tint-success flex-shrink-0">
                    <i data-lucide="sheet" />
                  </span>
                  <span className="d-flex flex-column lh-sm flex-grow-1 min-w-0">
                    <span className="fw-semibold text-title text-truncate">
                      q3-budget.xlsx
                    </span>
                    <span className="fs-xs text-muted-2">
                      86 KB
                    </span>
                  </span>
                  <button
                    type="button"
                    className="icon-box icon-box-sm bg-muted text-body-2 border-0 transition-base"
                    aria-label="Remove file"
                  >
                    <i data-lucide="x" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* ===== Rich Text Editor ===== */}
        <div className="col-12">
          <section className="card h-100 mb-0" aria-labelledby="sec-rich-text-editor">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-rich-text-editor" className="fs-5 fw-bold text-title mb-1">
                  Rich Text Editor
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  WYSIWYG editing with a formatting toolbar.
                </p>
              </div>
              <div className="border-soft rounded-3 overflow-hidden">
                <div className="d-flex flex-wrap align-items-center gap-1 bg-soft border-b-soft p-2">
                  <button className="btn btn-sm btn-outline-soft border-0" type="button" aria-label="Bold">
                    <i data-lucide="bold" className="icon-16" />
                  </button>
                  <button className="btn btn-sm btn-outline-soft border-0" type="button" aria-label="Italic">
                    <i data-lucide="italic" className="icon-16" />
                  </button>
                  <button className="btn btn-sm btn-outline-soft border-0" type="button" aria-label="Underline">
                    <i data-lucide="underline" className="icon-16" />
                  </button>
                  <span className="vr mx-1" />
                  <button className="btn btn-sm btn-outline-soft border-0" type="button" aria-label="Bulleted list">
                    <i data-lucide="list" className="icon-16" />
                  </button>
                  <button className="btn btn-sm btn-outline-soft border-0" type="button" aria-label="Numbered list">
                    <i data-lucide="list-ordered" className="icon-16" />
                  </button>
                  <span className="vr mx-1" />
                  <button className="btn btn-sm btn-outline-soft border-0" type="button" aria-label="Insert link">
                    <i data-lucide="link" className="icon-16" />
                  </button>
                  <button className="btn btn-sm btn-outline-soft border-0" type="button" aria-label="Insert image">
                    <i data-lucide="image" className="icon-16" />
                  </button>
                  <button className="btn btn-sm btn-outline-soft border-0" type="button" aria-label="Code block">
                    <i data-lucide="code" className="icon-16" />
                  </button>
                </div>
                <div className="p-3" suppressContentEditableWarning contentEditable="true">
                  <h3 className="fs-6 fw-bold text-title">
                    Release Notes — v2.0
                  </h3>
                  <p className="text-body-2 mb-2">
                    This release focuses on a refreshed
                    {" "}
                    <strong>
                      design system
                    </strong>
                    {" "}and improved{" "}
                    <em>
                      accessibility
                    </em>
                    {" "}
                    across every dashboard.
                  </p>
                  <ul className="text-body-2 mb-0">
                    <li>
                      New theme customizer with six accent colors
                    </li>
                    <li>
                      Dark mode refinements for charts and tables
                    </li>
                    <li>
                      Faster page loads and smoother transitions
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* ===== Markdown Editor ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-markdown-editor">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-markdown-editor" className="fs-5 fw-bold text-title mb-1">
                  Markdown Editor
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Write in Markdown and preview the rendered output.
                </p>
              </div>
              <ul className="nav nav-tabs mb-3" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    data-bs-toggle="tab"
                    data-bs-target="#md-write"
                    type="button"
                    role="tab"
                  >
                    Write
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#md-preview"
                    type="button"
                    role="tab"
                  >
                    Preview
                  </button>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane fade show active" id="md-write" role="tabpanel">
                  <textarea
                    className="form-control font-monospace fs-sm"
                    rows="7"
                    aria-label="Markdown source"
                    defaultValue={"# Getting Started\n\nInstall with **npm** and import the `theme`:\n\n- Bootstrap 5.3\n- Lucide icons\n\n[Read the docs](#)"}
                  />
                </div>
                {" "}
                <div className="tab-pane fade" id="md-preview" role="tabpanel">
                  <div className="border-soft rounded-3 p-3">
                    <h3 className="fs-6 fw-bold text-title">
                      Getting Started
                    </h3>
                    <p className="text-body-2">
                      Install with
                      {" "}
                      <strong>
                        npm
                      </strong>
                      {" "}and import the{" "}
                      <code>
                        theme
                      </code>
                      :
                    </p>
                    <ul className="text-body-2 mb-2">
                      <li>
                        Bootstrap 5.3
                      </li>
                      <li>
                        Lucide icons
                      </li>
                    </ul>
                    <a href="#" className="text-primary-soft fw-medium text-decoration-none">
                      Read the docs
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* ===== Code Editor ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-code-editor">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-code-editor" className="fs-5 fw-bold text-title mb-1">
                  Code Editor
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Monospaced editor surface with line numbers.
                </p>
              </div>
              <div className="bg-app border-soft rounded-3 overflow-hidden">
                <div className="d-flex align-items-center justify-content-between bg-soft border-b-soft px-3 py-2">
                  <span className="fs-sm fw-medium text-body-2 font-monospace">
                    theme.config.js
                  </span>
                  <button className="btn btn-sm btn-outline-soft border-0" type="button" aria-label="Copy code">
                    <i data-lucide="copy" className="icon-16" />
                  </button>
                </div>
                <div className="d-flex overflow-x-auto">
                  <div className="text-muted-2 text-end px-3 py-3 font-monospace fs-sm lh-lg user-select-none">
                    1
                    <br />
                    2
                    <br />
                    3
                    <br />
                    4
                    <br />
                    5
                    <br />
                    6
                  </div>
                  <pre className="flex-grow-1 m-0 px-3 py-3 font-monospace fs-sm lh-lg text-body">
                    <span className="text-primary-soft">
                      {"export const"}
                    </span>
                    {" theme = {\n    name: "}
                    <span className="text-success">
                      {"'vionex'"}
                    </span>
                    {",\n    mode: "}
                    <span className="text-success">
                      {"'light'"}
                    </span>
                    {",\n    accent: "}
                    <span className="text-success">
                      {"'purple'"}
                    </span>
                    {",\n    radius: "}
                    <span className="text-warning">
                      {"12"}
                    </span>
                    {",\n}"}
                  </pre>
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

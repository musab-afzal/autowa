/* Generated from the Vionex HTML theme by scripts/convert-html.mjs */
import AppShell from "@/components/AppShell";

export const metadata = {
  title: "Vionex — Form Wizard",
  description: "Vionex form wizard — multi-step forms with a progress rail, validated steps and a review summary, built with Bootstrap 5, CSS variables and a scalable design system.",
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
          Form Wizard
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
              Form Wizard
            </li>
          </ol>
        </nav>
      </div>
      <div className="d-flex flex-column gap-3 gap-xl-4">
        {/* ===== Example 1 — Multi-Step Wizard ===== */}
        <section className="card mb-0" data-wizard="" aria-labelledby="sec-multi-step-wizard">
          <div className="card-body">
            <div className="mb-4">
              <h2 id="sec-multi-step-wizard" className="fs-5 fw-bold text-title mb-1">
                Multi-Step Wizard
              </h2>
              <p className="fs-md text-body-2 mb-0">
                Personal info, account, address, and review across four guided steps.
              </p>
            </div>
            {/* Step indicator */}
            <div className="flow-steps pb-2 mb-4" data-wizard-steps="">
              <div className="flow-step px-1" data-step="">
                <span className="icon-box icon-box-lg tint-primary rounded-circle mx-auto" data-step-node="">
                  <i data-lucide="user" data-step-num="" />
                  <i data-lucide="check" data-step-check="" className="d-none" />
                </span>
                {" "}
                <span className="d-block fw-semibold text-title lh-1 mt-3">
                  Personal
                </span>
                {" "}
                <span className="d-block fs-xs text-muted-2 mt-1">
                  Your details
                </span>
              </div>
              <div className="flow-step px-1" data-step="">
                <span className="icon-box icon-box-lg bg-muted text-body-2 rounded-circle mx-auto" data-step-node="">
                  <i data-lucide="at-sign" data-step-num="" />
                  <i data-lucide="check" data-step-check="" className="d-none" />
                </span>
                {" "}
                <span className="d-block fw-semibold text-title lh-1 mt-3">
                  Account
                </span>
                {" "}
                <span className="d-block fs-xs text-muted-2 mt-1">
                  Login setup
                </span>
              </div>
              <div className="flow-step px-1" data-step="">
                <span className="icon-box icon-box-lg bg-muted text-body-2 rounded-circle mx-auto" data-step-node="">
                  <i data-lucide="map-pin" data-step-num="" />
                  <i data-lucide="check" data-step-check="" className="d-none" />
                </span>
                {" "}
                <span className="d-block fw-semibold text-title lh-1 mt-3">
                  Address
                </span>
                {" "}
                <span className="d-block fs-xs text-muted-2 mt-1">
                  Location
                </span>
              </div>
              <div className="flow-step px-1" data-step="">
                <span className="icon-box icon-box-lg bg-muted text-body-2 rounded-circle mx-auto" data-step-node="">
                  <i data-lucide="clipboard-check" data-step-num="" />
                  <i data-lucide="check" data-step-check="" className="d-none" />
                </span>
                {" "}
                <span className="d-block fw-semibold text-title lh-1 mt-3">
                  Review
                </span>
                {" "}
                <span className="d-block fs-xs text-muted-2 mt-1">
                  Confirm
                </span>
              </div>
            </div>
            {/* Step panes */}
            <div data-wizard-body="">
              <div className="fade show" data-pane="">
                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <label className="form-label fs-md fw-semibold text-title" htmlFor="w1First">
                      First Name
                    </label>
                    {" "}
                    <input type="text" className="form-control" id="w1First" defaultValue="Ravisha" />
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label fs-md fw-semibold text-title" htmlFor="w1Last">
                      Last Name
                    </label>
                    {" "}
                    <input type="text" className="form-control" id="w1Last" defaultValue="Verma" />
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label fs-md fw-semibold text-title" htmlFor="w1Phone">
                      Phone
                    </label>
                    {" "}
                    <input type="tel" className="form-control" id="w1Phone" defaultValue="+1 (555) 018-2043" />
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label fs-md fw-semibold text-title" htmlFor="w1Dob">
                      Date of Birth
                    </label>
                    {" "}
                    <input type="date" className="form-control" id="w1Dob" defaultValue="1994-03-12" />
                  </div>
                </div>
              </div>
              {" "}
              <div className="fade d-none" data-pane="">
                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <label className="form-label fs-md fw-semibold text-title" htmlFor="w1Email">
                      Email Address
                    </label>
                    {" "}
                    <input type="email" className="form-control" id="w1Email" defaultValue="ravisha@vionex.com" />
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label fs-md fw-semibold text-title" htmlFor="w1User">
                      Username
                    </label>
                    {" "}
                    <input type="text" className="form-control" id="w1User" defaultValue="ravisha_v" />
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label fs-md fw-semibold text-title" htmlFor="w1Pass">
                      Password
                    </label>
                    {" "}
                    <input type="password" className="form-control" id="w1Pass" defaultValue="Vionex@2026" />
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label fs-md fw-semibold text-title" htmlFor="w1Confirm">
                      Confirm Password
                    </label>
                    {" "}
                    <input type="password" className="form-control" id="w1Confirm" defaultValue="Vionex@2026" />
                  </div>
                </div>
              </div>
              {" "}
              <div className="fade d-none" data-pane="">
                <div className="row g-3">
                  <div className="col-12">
                    <label className="form-label fs-md fw-semibold text-title" htmlFor="w1Street">
                      Street Address
                    </label>
                    {" "}
                    <input type="text" className="form-control" id="w1Street" defaultValue="742 Evergreen Terrace" />
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label fs-md fw-semibold text-title" htmlFor="w1City">
                      City
                    </label>
                    {" "}
                    <input type="text" className="form-control" id="w1City" defaultValue="San Francisco" />
                  </div>
                  <div className="col-12 col-md-3">
                    <label className="form-label fs-md fw-semibold text-title" htmlFor="w1State">
                      State
                    </label>
                    {" "}
                    <input type="text" className="form-control" id="w1State" defaultValue="CA" />
                  </div>
                  <div className="col-12 col-md-3">
                    <label className="form-label fs-md fw-semibold text-title" htmlFor="w1Zip">
                      ZIP Code
                    </label>
                    {" "}
                    <input type="text" className="form-control" id="w1Zip" defaultValue="94102" />
                  </div>
                </div>
              </div>
              {" "}
              <div className="fade d-none" data-pane="">
                <p className="fw-semibold text-title mb-3">
                  Review your information
                </p>
                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <div className="bg-soft border-soft rounded-3 p-3">
                      <span className="d-block fs-xs text-muted-2 mb-1">
                        Personal
                      </span>
                      {" "}
                      <span className="d-block fw-medium text-title">
                        Ravisha Verma
                      </span>
                      {" "}
                      <span className="d-block fs-md text-body-2">
                        +1 (555) 018-2043 · 12 Mar 1994
                      </span>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="bg-soft border-soft rounded-3 p-3">
                      <span className="d-block fs-xs text-muted-2 mb-1">
                        Account
                      </span>
                      {" "}
                      <span className="d-block fw-medium text-title">
                        ravisha@vionex.com
                      </span>
                      {" "}
                      <span className="d-block fs-md text-body-2">
                        @ravisha_v
                      </span>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="bg-soft border-soft rounded-3 p-3">
                      <span className="d-block fs-xs text-muted-2 mb-1">
                        Address
                      </span>
                      {" "}
                      <span className="d-block fw-medium text-title">
                        742 Evergreen Terrace
                      </span>
                      {" "}
                      <span className="d-block fs-md text-body-2">
                        San Francisco, CA 94102
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Success screen */}
            {" "}
            <div className="text-center py-4 d-none" data-wizard-success="">
              <span className="icon-box icon-box-lg tint-success rounded-circle mx-auto mb-3">
                <i data-lucide="check-check" />
              </span>
              <h3 className="fs-4 fw-bold text-title mb-2">
                All Done! 🎉
              </h3>
              <p className="text-body-2 mb-4">
                Your account has been created successfully. A confirmation email is on its way.
              </p>
              <button type="button" className="btn btn-outline-soft px-4" data-wizard-reset="">
                Start Over
              </button>
            </div>
            {" "}
            {/* Footer controls */}
            <div className="d-flex flex-wrap align-items-center gap-2 mt-4 pt-4 border-t-soft" data-wizard-footer="">
              <button
                type="button"
                className="btn btn-outline-soft px-4 d-inline-flex align-items-center gap-2"
                data-wizard-prev=""
              >
                <i data-lucide="arrow-left" className="icon-16" />
                Previous
              </button>
              <button
                type="button"
                className="btn btn-ghost hover-surface px-4 ms-auto d-inline-flex align-items-center gap-2"
                data-wizard-draft=""
                data-draft-saved="Draft saved"
              >
                <i data-lucide="save" className="icon-16" />
                <span data-draft-label="">
                  Save Draft
                </span>
              </button>
              <button
                type="button"
                className="btn btn-primary px-4 d-inline-flex align-items-center gap-2"
                data-wizard-next=""
              >
                Next
                <i data-lucide="arrow-right" className="icon-16" />
              </button>
              <button
                type="button"
                className="btn btn-primary px-4 d-none d-inline-flex align-items-center gap-2"
                data-wizard-finish=""
              >
                <i data-lucide="check" className="icon-16" />
                Finish
              </button>
            </div>
          </div>
        </section>
        {/* ===== Example 2 — Horizontal Step Wizard ===== */}
        <section className="card mb-0" data-wizard="" aria-labelledby="sec-horizontal-step-wizard">
          <div className="card-body">
            <div className="mb-4">
              <h2 id="sec-horizontal-step-wizard" className="fs-5 fw-bold text-title mb-1">
                Horizontal Step Wizard
              </h2>
              <p className="fs-md text-body-2 mb-0">
                Compact numbered steps with a live progress bar.
              </p>
            </div>
            <div data-wizard-steps="">
              <div className="flow-steps mb-2">
                <div className="flow-step px-1" data-step="">
                  <span className="icon-box tint-primary rounded-circle mx-auto fw-semibold" data-step-node="">
                    <span data-step-num="">
                      1
                    </span>
                    <i data-lucide="check" data-step-check="" className="d-none" />
                  </span>
                  {" "}
                  <span className="d-block fs-md fw-medium text-title mt-2">
                    Cart
                  </span>
                </div>
                <div className="flow-step px-1" data-step="">
                  <span className="icon-box bg-muted text-body-2 rounded-circle mx-auto fw-semibold" data-step-node="">
                    <span data-step-num="">
                      2
                    </span>
                    <i data-lucide="check" data-step-check="" className="d-none" />
                  </span>
                  {" "}
                  <span className="d-block fs-md fw-medium text-title mt-2">
                    Shipping
                  </span>
                </div>
                <div className="flow-step px-1" data-step="">
                  <span className="icon-box bg-muted text-body-2 rounded-circle mx-auto fw-semibold" data-step-node="">
                    <span data-step-num="">
                      3
                    </span>
                    <i data-lucide="check" data-step-check="" className="d-none" />
                  </span>
                  {" "}
                  <span className="d-block fs-md fw-medium text-title mt-2">
                    Payment
                  </span>
                </div>
              </div>
              <div className="progress" role="progressbar" aria-label="Wizard progress">
                <div className="progress-bar" style={{ width: "33%" }} data-wizard-progress="" />
              </div>
            </div>
            <div className="mt-4" data-wizard-body="">
              <div className="fade show" data-pane="">
                <div className="row g-3">
                  <div className="col-12 col-md-8">
                    <label className="form-label fs-md fw-semibold text-title" htmlFor="w2Item">
                      Item
                    </label>
                    {" "}
                    <input type="text" className="form-control" id="w2Item" defaultValue="Vionex Pro — Annual Plan" />
                  </div>
                  <div className="col-12 col-md-4">
                    <label className="form-label fs-md fw-semibold text-title" htmlFor="w2Qty">
                      Quantity
                    </label>
                    {" "}
                    <input type="number" className="form-control" id="w2Qty" defaultValue="1" min="1" />
                  </div>
                </div>
              </div>
              {" "}
              <div className="fade d-none" data-pane="">
                <div className="row g-3">
                  <div className="col-12">
                    <label className="form-label fs-md fw-semibold text-title" htmlFor="w2Addr">
                      Shipping Address
                    </label>
                    {" "}
                    <input
                      type="text"
                      className="form-control"
                      id="w2Addr"
                      defaultValue="742 Evergreen Terrace, San Francisco"
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label fs-md fw-semibold text-title" htmlFor="w2Method">
                      Method
                    </label>
                    {" "}
                    <select className="form-select" id="w2Method" defaultValue="Standard (3–5 days)">
                      <option>
                        Standard (3–5 days)
                      </option>
                      <option>
                        Express (1–2 days)
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              {" "}
              <div className="fade d-none" data-pane="">
                <div className="row g-3">
                  <div className="col-12">
                    <label className="form-label fs-md fw-semibold text-title" htmlFor="w2Card">
                      Card Number
                    </label>
                    {" "}
                    <input type="text" className="form-control" id="w2Card" placeholder="0000 0000 0000 0000" />
                  </div>
                  <div className="col-6 col-md-4">
                    <label className="form-label fs-md fw-semibold text-title" htmlFor="w2Exp">
                      Expiry
                    </label>
                    {" "}
                    <input type="text" className="form-control" id="w2Exp" placeholder="MM / YY" />
                  </div>
                  <div className="col-6 col-md-4">
                    <label className="form-label fs-md fw-semibold text-title" htmlFor="w2Cvc">
                      CVC
                    </label>
                    {" "}
                    <input type="text" className="form-control" id="w2Cvc" placeholder="123" />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center py-4 d-none" data-wizard-success="">
              <span className="icon-box icon-box-lg tint-success rounded-circle mx-auto mb-3">
                <i data-lucide="party-popper" />
              </span>
              <h3 className="fs-4 fw-bold text-title mb-2">
                Order Placed!
              </h3>
              <p className="text-body-2 mb-4">
                Thank you for your purchase — your order is being processed.
              </p>
              <button type="button" className="btn btn-outline-soft px-4" data-wizard-reset="">
                New Order
              </button>
            </div>
            <div className="d-flex flex-wrap align-items-center gap-2 mt-4 pt-4 border-t-soft" data-wizard-footer="">
              <button
                type="button"
                className="btn btn-outline-soft px-4 d-inline-flex align-items-center gap-2"
                data-wizard-prev=""
              >
                <i data-lucide="arrow-left" className="icon-16" />
                Previous
              </button>
              <button
                type="button"
                className="btn btn-ghost hover-surface px-4 ms-auto d-inline-flex align-items-center gap-2"
                data-wizard-draft=""
                data-draft-saved="Draft saved"
              >
                <i data-lucide="save" className="icon-16" />
                <span data-draft-label="">
                  Save Draft
                </span>
              </button>
              <button
                type="button"
                className="btn btn-primary px-4 d-inline-flex align-items-center gap-2"
                data-wizard-next=""
              >
                Next
                <i data-lucide="arrow-right" className="icon-16" />
              </button>
              <button
                type="button"
                className="btn btn-primary px-4 d-none d-inline-flex align-items-center gap-2"
                data-wizard-finish=""
              >
                <i data-lucide="check" className="icon-16" />
                Place Order
              </button>
            </div>
          </div>
        </section>
        {/* ===== Example 3 — Vertical Wizard ===== */}
        <section className="card mb-0" data-wizard="" aria-labelledby="sec-vertical-wizard">
          <div className="card-body">
            <div className="mb-4">
              <h2 id="sec-vertical-wizard" className="fs-5 fw-bold text-title mb-1">
                Vertical Wizard
              </h2>
              <p className="fs-md text-body-2 mb-0">
                Side-aligned steps ideal for wider forms and detailed flows.
              </p>
            </div>
            <div className="row g-4">
              {/* Vertical steps */}
              <div className="col-12 col-md-4 col-lg-3" data-wizard-steps="">
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex align-items-center gap-3" data-step="">
                    <span className="icon-box tint-primary rounded-circle flex-shrink-0 fw-semibold" data-step-node="">
                      <span data-step-num="">
                        1
                      </span>
                      <i data-lucide="check" data-step-check="" className="d-none" />
                    </span>
                    <span className="lh-sm">
                      {" "}
                      <span className="d-block fw-semibold text-title">
                        Company
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        Business details
                      </span>
                      {" "}
                    </span>
                  </div>
                  <div className="d-flex align-items-center gap-3" data-step="">
                    <span
                      className="icon-box bg-muted text-body-2 rounded-circle flex-shrink-0 fw-semibold"
                      data-step-node=""
                    >
                      <span data-step-num="">
                        2
                      </span>
                      <i data-lucide="check" data-step-check="" className="d-none" />
                    </span>
                    <span className="lh-sm">
                      {" "}
                      <span className="d-block fw-semibold text-title">
                        Team
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        {"Members & roles"}
                      </span>
                      {" "}
                    </span>
                  </div>
                  <div className="d-flex align-items-center gap-3" data-step="">
                    <span
                      className="icon-box bg-muted text-body-2 rounded-circle flex-shrink-0 fw-semibold"
                      data-step-node=""
                    >
                      <span data-step-num="">
                        3
                      </span>
                      <i data-lucide="check" data-step-check="" className="d-none" />
                    </span>
                    <span className="lh-sm">
                      {" "}
                      <span className="d-block fw-semibold text-title">
                        Billing
                      </span>
                      {" "}
                      <span className="d-block fs-xs text-muted-2">
                        {"Plan & payment"}
                      </span>
                      {" "}
                    </span>
                  </div>
                </div>
              </div>
              {/* Panes + controls */}
              <div className="col-12 col-md-8 col-lg-9">
                <div data-wizard-body="">
                  <div className="fade show" data-pane="">
                    <div className="row g-3">
                      <div className="col-12 col-md-6">
                        <label className="form-label fs-md fw-semibold text-title" htmlFor="w3Company">
                          Company Name
                        </label>
                        {" "}
                        <input type="text" className="form-control" id="w3Company" defaultValue="Acme Inc." />
                      </div>
                      <div className="col-12 col-md-6">
                        <label className="form-label fs-md fw-semibold text-title" htmlFor="w3Industry">
                          Industry
                        </label>
                        {" "}
                        <select className="form-select" id="w3Industry" defaultValue={"Software & SaaS"}>
                          <option>
                            {"Software & SaaS"}
                          </option>
                          <option>
                            Finance
                          </option>
                          <option>
                            Retail
                          </option>
                        </select>
                      </div>
                      <div className="col-12">
                        <label className="form-label fs-md fw-semibold text-title" htmlFor="w3Site">
                          Website
                        </label>
                        {" "}
                        <input type="url" className="form-control" id="w3Site" defaultValue="https://acme.com/" />
                      </div>
                    </div>
                  </div>
                  {" "}
                  <div className="fade d-none" data-pane="">
                    <div className="row g-3">
                      <div className="col-12 col-md-6">
                        <label className="form-label fs-md fw-semibold text-title" htmlFor="w3Size">
                          Team Size
                        </label>
                        {" "}
                        <select className="form-select" id="w3Size" defaultValue="1–10">
                          <option>
                            1–10
                          </option>
                          <option>
                            11–50
                          </option>
                          <option>
                            51–200
                          </option>
                        </select>
                      </div>
                      <div className="col-12 col-md-6">
                        <label className="form-label fs-md fw-semibold text-title" htmlFor="w3Invite">
                          Invite Members
                        </label>
                        {" "}
                        <input type="email" className="form-control" id="w3Invite" placeholder="teammate@acme.com" />
                      </div>
                    </div>
                  </div>
                  {" "}
                  <div className="fade d-none" data-pane="">
                    <div className="row g-3">
                      <div className="col-12 col-md-6">
                        <label className="form-label fs-md fw-semibold text-title" htmlFor="w3Plan">
                          Plan
                        </label>
                        {" "}
                        <select className="form-select" id="w3Plan" defaultValue="Pro — $29 / mo">
                          <option>
                            Pro — $29 / mo
                          </option>
                          <option>
                            Business — $79 / mo
                          </option>
                          <option>
                            Enterprise — Custom
                          </option>
                        </select>
                      </div>
                      <div className="col-12 col-md-6">
                        <label className="form-label fs-md fw-semibold text-title" htmlFor="w3CardV">
                          Card Number
                        </label>
                        {" "}
                        <input type="text" className="form-control" id="w3CardV" placeholder="0000 0000 0000 0000" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center py-4 d-none" data-wizard-success="">
                  <span className="icon-box icon-box-lg tint-success rounded-circle mx-auto mb-3">
                    <i data-lucide="badge-check" />
                  </span>
                  <h3 className="fs-4 fw-bold text-title mb-2">
                    Workspace Ready!
                  </h3>
                  <p className="text-body-2 mb-4">
                    Your company workspace is set up and ready to go.
                  </p>
                  <button type="button" className="btn btn-outline-soft px-4" data-wizard-reset="">
                    Start Over
                  </button>
                </div>
                <div
                  className="d-flex flex-wrap align-items-center gap-2 mt-4 pt-4 border-t-soft"
                  data-wizard-footer=""
                >
                  <button
                    type="button"
                    className="btn btn-outline-soft px-4 d-inline-flex align-items-center gap-2"
                    data-wizard-prev=""
                  >
                    <i data-lucide="arrow-left" className="icon-16" />
                    Previous
                  </button>
                  <button
                    type="button"
                    className="btn btn-ghost hover-surface px-4 ms-auto d-inline-flex align-items-center gap-2"
                    data-wizard-draft=""
                    data-draft-saved="Draft saved"
                  >
                    <i data-lucide="save" className="icon-16" />
                    <span data-draft-label="">
                      Save Draft
                    </span>
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary px-4 d-inline-flex align-items-center gap-2"
                    data-wizard-next=""
                  >
                    Next
                    <i data-lucide="arrow-right" className="icon-16" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary px-4 d-none d-inline-flex align-items-center gap-2"
                    data-wizard-finish=""
                  >
                    <i data-lucide="check" className="icon-16" />
                    Finish
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* ========== FOOTER ========== */}
    </AppShell>
  );
}

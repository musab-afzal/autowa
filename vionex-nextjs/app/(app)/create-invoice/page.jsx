/* Generated from the Vionex HTML theme by scripts/convert-html.mjs */
import AppShell from "@/components/AppShell";

export const metadata = {
  title: "Vionex — Create Invoice",
  description: "Vionex enterprise admin dashboard — create an invoice with client details, editable line items, live totals and a send-ready preview, built with Bootstrap 5, CSS variables and a scalable design system.",
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
          Create Invoice
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
            <li className="breadcrumb-item">
              <a href="/invoice-list">
                Invoice
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Create Invoice
            </li>
          </ol>
        </nav>
      </div>
      {/* ===== Invoice builder =====
         One form drives the whole page: [data-items-scope] owns the line-item
         arithmetic, [data-mirror-scope] keeps the preview dialog in step with
         what is typed, and [data-validate] gates the send. */}
      <form id="createInvoiceForm" noValidate data-validate="" data-items-scope="" data-mirror-scope="">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
          <div className="min-w-0">
            <h2 className="fs-4 fw-bold text-title mb-1">
              New Invoice
            </h2>
            <p className="fs-md text-body-2 mb-0">
              Add the client, list the work and Vionex does the maths — every total updates as you type.
            </p>
          </div>
          <div className="d-flex flex-wrap align-items-center gap-2">
            <span className="badge-soft tint-slate border-current border-dashed d-inline-flex align-self-stretch align-items-center gap-2 px-3">
              {" "}
              <i className="icon-12" data-lucide="pen-line" aria-hidden="true" />
              {" "}
              <bdi>
                Draft · saved 2 min ago
              </bdi>
              {" "}
            </span>
            <button
              type="button"
              className="btn btn-outline-soft d-inline-flex flex-nowrap align-items-center justify-content-center gap-2 text-nowrap"
              data-bs-toggle="modal"
              data-bs-target="#invoiceDraftPreview"
            >
              <i className="icon-18" data-lucide="eye" aria-hidden="true" />
              Preview
            </button>
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-outline-soft btn-18 rounded-circle"
                id="ciBuilderMenu"
                data-bs-toggle="dropdown"
                data-bs-offset="0,8"
                aria-expanded="false"
                aria-label="Invoice options"
              >
                <i data-lucide="ellipsis-vertical" />
              </button>
              {" "}
              <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="ciBuilderMenu">
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="copy" />
                    Duplicate last invoice
                  </button>
                </li>
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="list-plus" />
                    Import billable hours
                  </button>
                </li>
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="settings-2" />
                    Invoice settings
                  </button>
                </li>
                <li>
                  <hr className="dropdown-divider my-1" />
                </li>
                <li>
                  <a className="dropdown-item" href="/invoice-list">
                    <i data-lucide="arrow-left" className="flip-rtl" />
                    Back to invoice list
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Confirmation panel — revealed by the validation module on a valid send */}
        {" "}
        <div className="tint-success rounded-3 p-3 mb-3 d-none" role="status" data-validate-success="">
          <p className="d-flex align-items-center gap-2 fs-md fw-semibold mb-0">
            <i className="icon-20 flex-shrink-0" data-lucide="circle-check-big" aria-hidden="true" />
            <span>
              Invoice queued for delivery — your client will get it in the next few minutes.
            </span>
          </p>
        </div>
        <div className="row g-3">
          <div className="col-12 col-xl-8">
            {/* ===== Invoice details ===== */}
            <section className="card mb-3" aria-labelledby="ciDetailsTitle">
              <div className="card-body">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <div className="d-flex align-items-center gap-2 min-w-0">
                    <span className="icon-box icon-box-sm tint-brand border-current" aria-hidden="true">
                      <i data-lucide="receipt-text" />
                    </span>
                    <h2 id="ciDetailsTitle" className="fs-5 fw-bold text-title mb-0">
                      Invoice details
                    </h2>
                  </div>
                  <span className="fs-xs text-muted-2 text-nowrap">
                    <bdi>
                      Step 1 of 4
                    </bdi>
                  </span>
                </div>
                <div className="row g-3">
                  <div className="col-12 col-md-6 col-xl-4">
                    <label htmlFor="ciNumber" className="form-label fs-md fw-semibold text-title">
                      Invoice number
                    </label>
                    {" "}
                    <input
                      type="text"
                      className="form-control"
                      id="ciNumber"
                      name="invoice-number"
                      defaultValue="INV-2026-0149"
                      required
                      data-mirror="number"
                    />
                    {" "}
                    <div className="invalid-feedback">
                      Give this invoice a number.
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-4">
                    <label htmlFor="ciIssued" className="form-label fs-md fw-semibold text-title">
                      Issue date
                    </label>
                    {" "}
                    <input
                      type="date"
                      className="form-control"
                      id="ciIssued"
                      name="issue-date"
                      defaultValue="2026-08-31"
                      required
                      data-mirror="issued"
                    />
                    {" "}
                    <div className="invalid-feedback">
                      Choose the date this invoice is raised.
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-4">
                    <label htmlFor="ciDue" className="form-label fs-md fw-semibold text-title">
                      Due date
                    </label>
                    {" "}
                    <input
                      type="date"
                      className="form-control"
                      id="ciDue"
                      name="due-date"
                      defaultValue="2026-09-14"
                      required
                      data-mirror="due"
                    />
                    {" "}
                    <div className="invalid-feedback">
                      Choose when payment is due.
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-4">
                    <label htmlFor="ciTerms" className="form-label fs-md fw-semibold text-title">
                      Payment terms
                    </label>
                    {" "}
                    <select
                      className="form-select pe-5"
                      id="ciTerms"
                      name="payment-terms"
                      data-mirror="paymentTerms"
                      defaultValue="Net 14 days"
                    >
                      <option>
                        Due on receipt
                      </option>
                      <option>
                        Net 7 days
                      </option>
                      <option>
                        Net 14 days
                      </option>
                      <option>
                        Net 30 days
                      </option>
                      <option>
                        Net 60 days
                      </option>
                    </select>
                  </div>
                  <div className="col-12 col-md-6 col-xl-4">
                    <label htmlFor="ciCurrency" className="form-label fs-md fw-semibold text-title">
                      Currency
                    </label>
                    {" "}
                    <select
                      className="form-select pe-5"
                      id="ciCurrency"
                      name="currency"
                      data-items-currency=""
                      defaultValue="USD — Dollar"
                    >
                      <option data-symbol="$">
                        USD — Dollar
                      </option>
                      <option data-symbol="€">
                        EUR — Euro
                      </option>
                      <option data-symbol="£">
                        GBP — Pound
                      </option>
                      <option data-symbol="₹">
                        INR — Rupee
                      </option>
                    </select>
                  </div>
                  <div className="col-12 col-md-6 col-xl-4">
                    <label htmlFor="ciReference" className="form-label fs-md fw-semibold text-title">
                      Reference
                      {" "}
                      <span className="fw-normal text-muted-2">
                        (optional)
                      </span>
                    </label>
                    {" "}
                    <input
                      type="text"
                      className="form-control"
                      id="ciReference"
                      name="reference"
                      placeholder="PO number or project code"
                    />
                  </div>
                </div>
              </div>
            </section>
            {/* ===== Billing details ===== */}
            <section className="card mb-3" aria-labelledby="ciPartiesTitle">
              <div className="card-body">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <div className="d-flex align-items-center gap-2 min-w-0">
                    <span className="icon-box icon-box-sm tint-violet border-current" aria-hidden="true">
                      <i data-lucide="users-round" />
                    </span>
                    <h2 id="ciPartiesTitle" className="fs-5 fw-bold text-title mb-0">
                      Billing details
                    </h2>
                  </div>
                  <span className="fs-xs text-muted-2 text-nowrap">
                    <bdi>
                      Step 2 of 4
                    </bdi>
                  </span>
                </div>
                <div className="row g-3">
                  {/* Side by side only where the column is genuinely wide: at xl
                     the builder sits in col-xl-8, which is too narrow to halve. */}
                  <div className="col-12 col-lg-6 col-xl-12 col-xxl-6 d-flex flex-column">
                    <p className="fs-xs fw-semibold text-uppercase text-muted-2 mb-2">
                      Billed from
                    </p>
                    <div className="d-flex align-items-start gap-3 flex-grow-1 p-3 rounded-3 bg-soft border-theme">
                      <img src="/assets/images/logo-icon.svg" className="brand-logo" width="48" height="48" alt="" />
                      <div className="min-w-0 flex-grow-1">
                        <p className="fs-6 fw-semibold text-title mb-1">
                          <bdi>
                            Vionex Inc.
                          </bdi>
                        </p>
                        <p className="fs-md text-body-2 mb-1">
                          <bdi>
                            18 Harbour Street, Austin, TX 78701
                          </bdi>
                        </p>
                        <p className="fs-md text-body-2 mb-2">
                          <bdi>
                            billing@vionex.com · +1 512 555 0134
                          </bdi>
                        </p>
                        <span className="badge-soft tint-slate fs-xs">
                          <bdi>
                            Tax ID · US-84-2910773
                          </bdi>
                        </span>
                        <p className="d-flex align-items-center gap-2 fs-xs text-muted-2 mt-3 mb-0">
                          <i className="icon-14 flex-shrink-0" data-lucide="badge-check" aria-hidden="true" />
                          <span>
                            Registered for VAT — tax is applied automatically on every line.
                          </span>
                        </p>
                      </div>
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle flex-shrink-0"
                        aria-label="Edit business profile"
                      >
                        <i data-lucide="square-pen" />
                      </button>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 col-xl-12 col-xxl-6">
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-2">
                      <p className="fs-xs fw-semibold text-uppercase text-muted-2 mb-0">
                        Billed to
                      </p>
                      <button
                        type="button"
                        className="btn btn-ghost d-inline-flex align-items-center gap-1 px-2 py-0 fs-md text-nowrap"
                      >
                        <i className="icon-14" data-lucide="user-round-plus" aria-hidden="true" />
                        New client
                      </button>
                    </div>
                    <div className="row g-3">
                      <div className="col-12">
                        <label htmlFor="ciClient" className="form-label fs-md fw-semibold text-title">
                          Client
                        </label>
                        {" "}
                        <select
                          className="form-select pe-5"
                          id="ciClient"
                          name="client"
                          required
                          data-mirror="client"
                          defaultValue="Maya Fernandes — Northwind Retail"
                        >
                          <option value="">
                            Choose a client
                          </option>
                          <option>
                            Maya Fernandes — Northwind Retail
                          </option>
                          <option>
                            Sofia Marchetti — Vertex Labs
                          </option>
                          <option>
                            Daniel Okafor — Lumen Systems
                          </option>
                          <option>
                            Aarav Shah — Halcyon Media
                          </option>
                          <option>
                            Nina Kaur — Solstice Labs
                          </option>
                        </select>
                        {" "}
                        <div className="invalid-feedback">
                          Pick the client this invoice is for.
                        </div>
                      </div>
                      <div className="col-12 col-sm-6">
                        <label htmlFor="ciEmail" className="form-label fs-md fw-semibold text-title">
                          Billing email
                        </label>
                        {" "}
                        <input
                          type="email"
                          className="form-control"
                          id="ciEmail"
                          name="client-email"
                          defaultValue="maya@northwindretail.com"
                          required
                          data-mirror="email"
                        />
                        {" "}
                        <div className="invalid-feedback">
                          Enter a valid billing email address.
                        </div>
                      </div>
                      <div className="col-12 col-sm-6">
                        <label htmlFor="ciPhone" className="form-label fs-md fw-semibold text-title">
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
                          id="ciPhone"
                          name="client-phone"
                          defaultValue="+1 206 555 0118"
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="ciAddress" className="form-label fs-md fw-semibold text-title">
                          Billing address
                        </label>
                        {" "}
                        <textarea
                          className="form-control"
                          id="ciAddress"
                          name="client-address"
                          rows="2"
                          data-mirror="address"
                          defaultValue="44 Market Row, Seattle, WA 98104, United States"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* ===== Line items ===== */}
            <section className="card mb-3" aria-labelledby="ciItemsTitle">
              <div className="card-body">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <div className="d-flex align-items-center gap-2 min-w-0">
                    <span className="icon-box icon-box-sm tint-amber border-current" aria-hidden="true">
                      <i data-lucide="list-plus" />
                    </span>
                    <h2 id="ciItemsTitle" className="fs-5 fw-bold text-title mb-0">
                      Line items
                    </h2>
                  </div>
                  <span className="fs-xs text-muted-2 text-nowrap">
                    <bdi>
                      Step 3 of 4
                    </bdi>
                  </span>
                </div>
                <div className="row g-3 d-none d-lg-flex pb-2 mb-3 border-b-soft" aria-hidden="true">
                  <p className="col-lg-4 col-xxl-5 fs-xs fw-semibold text-uppercase text-muted-2 mb-0">
                    Description
                  </p>
                  <p className="col-lg-2 fs-xs fw-semibold text-uppercase text-muted-2 mb-0">
                    Qty
                  </p>
                  <p className="col-lg-3 col-xxl-2 fs-xs fw-semibold text-uppercase text-muted-2 mb-0">
                    Rate
                  </p>
                  <p className="col-lg-3 fs-xs fw-semibold text-uppercase text-muted-2 text-end mb-0">
                    Amount
                  </p>
                </div>
                <ul className="list-unstyled d-flex flex-column gap-3 mb-0" data-items-body="">
                  <li className="row g-2 g-md-3 align-items-center pb-3 border-b-soft" data-items-row="">
                    <div className="col-12 col-lg-4 col-xxl-5">
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Brand identity system"
                        placeholder="Describe the item or service"
                        aria-label="Item description"
                        required
                        data-item-desc=""
                      />
                    </div>
                    <div className="col-6 col-sm-4 col-lg-2">
                      <span className="d-block d-lg-none fs-xs text-muted-2 mb-1" aria-hidden="true">
                        Qty
                      </span>
                      {" "}
                      <input
                        type="number"
                        className="form-control text-end"
                        defaultValue="1"
                        min="0"
                        step="1"
                        aria-label="Quantity"
                        data-item-qty=""
                      />
                    </div>
                    <div className="col-6 col-sm-4 col-lg-3 col-xxl-2">
                      <span className="d-block d-lg-none fs-xs text-muted-2 mb-1" aria-hidden="true">
                        Rate
                      </span>
                      {" "}
                      <input
                        type="number"
                        className="form-control text-end"
                        defaultValue="6400"
                        min="0"
                        step="0.01"
                        aria-label="Unit rate"
                        data-item-rate=""
                      />
                    </div>
                    <div className="col-12 col-sm-4 col-lg-3 d-flex align-items-center justify-content-between justify-content-sm-end gap-2">
                      <span className="d-lg-none fs-xs text-muted-2" aria-hidden="true">
                        Amount
                      </span>
                      <bdi className="fs-md fw-bold text-title text-nowrap" data-item-amount="">
                        $6,400.00
                      </bdi>
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle hover-danger flex-shrink-0"
                        aria-label="Remove this line item"
                        data-items-remove=""
                      >
                        <i data-lucide="trash-2" />
                      </button>
                    </div>
                  </li>
                  <li className="row g-2 g-md-3 align-items-center pb-3 border-b-soft" data-items-row="">
                    <div className="col-12 col-lg-4 col-xxl-5">
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="UI design retainer — September"
                        placeholder="Describe the item or service"
                        aria-label="Item description"
                        required
                        data-item-desc=""
                      />
                    </div>
                    <div className="col-6 col-sm-4 col-lg-2">
                      <span className="d-block d-lg-none fs-xs text-muted-2 mb-1" aria-hidden="true">
                        Qty
                      </span>
                      {" "}
                      <input
                        type="number"
                        className="form-control text-end"
                        defaultValue="1"
                        min="0"
                        step="1"
                        aria-label="Quantity"
                        data-item-qty=""
                      />
                    </div>
                    <div className="col-6 col-sm-4 col-lg-3 col-xxl-2">
                      <span className="d-block d-lg-none fs-xs text-muted-2 mb-1" aria-hidden="true">
                        Rate
                      </span>
                      {" "}
                      <input
                        type="number"
                        className="form-control text-end"
                        defaultValue="3720"
                        min="0"
                        step="0.01"
                        aria-label="Unit rate"
                        data-item-rate=""
                      />
                    </div>
                    <div className="col-12 col-sm-4 col-lg-3 d-flex align-items-center justify-content-between justify-content-sm-end gap-2">
                      <span className="d-lg-none fs-xs text-muted-2" aria-hidden="true">
                        Amount
                      </span>
                      <bdi className="fs-md fw-bold text-title text-nowrap" data-item-amount="">
                        $3,720.00
                      </bdi>
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle hover-danger flex-shrink-0"
                        aria-label="Remove this line item"
                        data-items-remove=""
                      >
                        <i data-lucide="trash-2" />
                      </button>
                    </div>
                  </li>
                  <li className="row g-2 g-md-3 align-items-center pb-3 border-b-soft" data-items-row="">
                    <div className="col-12 col-lg-4 col-xxl-5">
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Design QA session"
                        placeholder="Describe the item or service"
                        aria-label="Item description"
                        required
                        data-item-desc=""
                      />
                    </div>
                    <div className="col-6 col-sm-4 col-lg-2">
                      <span className="d-block d-lg-none fs-xs text-muted-2 mb-1" aria-hidden="true">
                        Qty
                      </span>
                      {" "}
                      <input
                        type="number"
                        className="form-control text-end"
                        defaultValue="8"
                        min="0"
                        step="1"
                        aria-label="Quantity"
                        data-item-qty=""
                      />
                    </div>
                    <div className="col-6 col-sm-4 col-lg-3 col-xxl-2">
                      <span className="d-block d-lg-none fs-xs text-muted-2 mb-1" aria-hidden="true">
                        Rate
                      </span>
                      {" "}
                      <input
                        type="number"
                        className="form-control text-end"
                        defaultValue="160"
                        min="0"
                        step="0.01"
                        aria-label="Unit rate"
                        data-item-rate=""
                      />
                    </div>
                    <div className="col-12 col-sm-4 col-lg-3 d-flex align-items-center justify-content-between justify-content-sm-end gap-2">
                      <span className="d-lg-none fs-xs text-muted-2" aria-hidden="true">
                        Amount
                      </span>
                      <bdi className="fs-md fw-bold text-title text-nowrap" data-item-amount="">
                        $1,280.00
                      </bdi>
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle hover-danger flex-shrink-0"
                        aria-label="Remove this line item"
                        data-items-remove=""
                      >
                        <i data-lucide="trash-2" />
                      </button>
                    </div>
                  </li>
                </ul>
                <button
                  type="button"
                  className="btn btn-outline-soft border-dashed d-flex align-items-center justify-content-center gap-2 w-100 mt-3"
                  data-items-add=""
                >
                  <i className="icon-18" data-lucide="plus" aria-hidden="true" />
                  Add line item
                </button>
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 pt-3 mt-3 border-t-soft">
                  <p className="fs-md text-muted-2 mb-0">
                    <bdi>
                      <span data-items-out="count">
                        3
                      </span>
                      {" "}
                      items on this invoice
                    </bdi>
                  </p>
                  <p className="fs-md text-body-2 mb-0">
                    Subtotal
                    {" "}
                    <bdi className="fw-bold text-title" data-items-out="subtotal">
                      $11,400.00
                    </bdi>
                  </p>
                </div>
              </div>
            </section>
            {/* ===== Notes & terms ===== */}
            <section className="card mb-3 mb-xl-0" aria-labelledby="ciNotesTitle">
              <div className="card-body">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <div className="d-flex align-items-center gap-2 min-w-0">
                    <span className="icon-box icon-box-sm tint-blue border-current" aria-hidden="true">
                      <i data-lucide="notebook-pen" />
                    </span>
                    <h2 id="ciNotesTitle" className="fs-5 fw-bold text-title mb-0">
                      {"Notes & terms"}
                    </h2>
                  </div>
                  <span className="fs-xs text-muted-2 text-nowrap">
                    <bdi>
                      Step 4 of 4
                    </bdi>
                  </span>
                </div>
                <div className="row g-3">
                  <div className="col-12 col-lg-6">
                    <label htmlFor="ciNotes" className="form-label fs-md fw-semibold text-title">
                      Note to the client
                    </label>
                    {" "}
                    <textarea
                      className="form-control"
                      id="ciNotes"
                      name="notes"
                      rows="3"
                      data-mirror="notes"
                      defaultValue="Thank you for your business. Please quote the invoice number with your payment."
                    />
                  </div>
                  <div className="col-12 col-lg-6">
                    <label htmlFor="ciConditions" className="form-label fs-md fw-semibold text-title">
                      {"Terms & conditions"}
                    </label>
                    {" "}
                    <textarea
                      className="form-control"
                      id="ciConditions"
                      name="conditions"
                      rows="3"
                      defaultValue="Payments after the due date carry a 1.5% monthly late fee. Work remains the property of Vionex Inc. until settled."
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="ciAttachment" className="form-label fs-md fw-semibold text-title">
                      Attachments
                      {" "}
                      <span className="fw-normal text-muted-2">
                        (optional)
                      </span>
                    </label>
                    {" "}
                    <input type="file" className="form-control" id="ciAttachment" name="attachments" multiple />
                    <p className="d-flex align-items-center gap-2 fs-xs text-muted-2 mt-2 mb-0">
                      <i className="icon-14 flex-shrink-0" data-lucide="paperclip" aria-hidden="true" />
                      <span>
                        {"Timesheets, delivery notes or a signed statement of work — PDF, PNG or JPG up to 10\u00a0MB each."}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="col-12 col-xl-4">
            <div className="d-flex flex-column gap-3">
              {/* ===== Summary ===== */}
              <section className="card" aria-labelledby="ciSummaryTitle">
                <div className="card-body">
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <span className="icon-box icon-box-sm tint-emerald border-current" aria-hidden="true">
                      <i data-lucide="circle-dollar-sign" />
                    </span>
                    <h2 id="ciSummaryTitle" className="fs-5 fw-bold text-title mb-0">
                      Summary
                    </h2>
                  </div>
                  <div className="row g-2 align-items-end mb-3">
                    <div className="col-4">
                      <label
                        htmlFor="ciDiscount"
                        className="form-label fs-xs fw-semibold text-uppercase text-muted-2 mb-1"
                      >
                        <bdi>
                          Discount %
                        </bdi>
                      </label>
                      {" "}
                      <input
                        type="number"
                        className="form-control text-end"
                        id="ciDiscount"
                        name="discount"
                        defaultValue="5"
                        min="0"
                        max="100"
                        step="0.5"
                        data-items-percent="discount"
                        data-mirror="discountPct"
                      />
                    </div>
                    <div className="col-4">
                      <label htmlFor="ciTax" className="form-label fs-xs fw-semibold text-uppercase text-muted-2 mb-1">
                        <bdi>
                          Tax %
                        </bdi>
                      </label>
                      {" "}
                      <input
                        type="number"
                        className="form-control text-end"
                        id="ciTax"
                        name="tax"
                        defaultValue="10"
                        min="0"
                        max="100"
                        step="0.5"
                        data-items-percent="tax"
                        data-mirror="taxPct"
                      />
                    </div>
                    <div className="col-4">
                      <label
                        htmlFor="ciShipping"
                        className="form-label fs-xs fw-semibold text-uppercase text-muted-2 mb-1"
                      >
                        Delivery
                      </label>
                      {" "}
                      <input
                        type="number"
                        className="form-control text-end"
                        id="ciShipping"
                        name="shipping"
                        defaultValue="0"
                        min="0"
                        step="0.01"
                        data-items-value="shipping"
                      />
                    </div>
                  </div>
                  <ul className="list-unstyled mb-0">
                    <li className="d-flex align-items-center justify-content-between gap-2 fs-md mb-2">
                      <span className="text-body-2">
                        Subtotal
                      </span>
                      <bdi className="fw-semibold text-title" data-items-out="subtotal">
                        $11,400.00
                      </bdi>
                    </li>
                    <li className="d-flex align-items-center justify-content-between gap-2 fs-md mb-2">
                      <span className="text-body-2">
                        Discount
                        {" "}
                        <bdi>
                          (
                          <span data-mirror-out="discountPct">
                            5
                          </span>
                          %)
                        </bdi>
                      </span>
                      <bdi className="fw-semibold text-cat-emerald" data-items-out="discount">
                        −$570.00
                      </bdi>
                    </li>
                    <li className="d-flex align-items-center justify-content-between gap-2 fs-md mb-2">
                      <span className="text-body-2">
                        Tax
                        {" "}
                        <bdi>
                          (
                          <span data-mirror-out="taxPct">
                            10
                          </span>
                          %)
                        </bdi>
                      </span>
                      <bdi className="fw-semibold text-title" data-items-out="tax">
                        $1,083.00
                      </bdi>
                    </li>
                    <li className="d-flex align-items-center justify-content-between gap-2 fs-md pb-3 mb-3 border-b-soft">
                      <span className="text-body-2">
                        Delivery
                      </span>
                      <bdi className="fw-semibold text-title" data-items-out="shipping">
                        $0.00
                      </bdi>
                    </li>
                    <li className="d-flex align-items-center justify-content-between gap-2">
                      <span className="fs-6 fw-semibold text-title">
                        Total due
                      </span>
                      <bdi className="fs-4 fw-bold text-title lh-1" data-items-out="total">
                        $11,913.00
                      </bdi>
                    </li>
                  </ul>
                  <p className="d-flex align-items-center gap-2 fs-xs text-muted-2 mt-3 mb-0">
                    <i className="icon-14 flex-shrink-0" data-lucide="calendar-clock" aria-hidden="true" />
                    <bdi>
                      Payable by
                      {" "}
                      <span data-mirror-out="due" data-mirror-format="date">
                        14 Sep 2026
                      </span>
                      {" "}·{" "}
                      <span data-mirror-out="paymentTerms">
                        Net 14 days
                      </span>
                    </bdi>
                  </p>
                  <div className="d-grid gap-2 mt-3">
                    <button
                      type="submit"
                      className="btn btn-primary d-flex align-items-center justify-content-center gap-2"
                    >
                      <i className="icon-18" data-lucide="send" aria-hidden="true" />
                      Send invoice
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-soft d-flex align-items-center justify-content-center gap-2"
                    >
                      <i className="icon-18" data-lucide="save" aria-hidden="true" />
                      Save as draft
                    </button>
                  </div>
                </div>
              </section>
              {/* ===== Payment & delivery ===== */}
              <section className="card" aria-labelledby="ciPaymentTitle">
                <div className="card-body">
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <span className="icon-box icon-box-sm tint-rose border-current" aria-hidden="true">
                      <i data-lucide="banknote" />
                    </span>
                    <h2 id="ciPaymentTitle" className="fs-5 fw-bold text-title mb-0">
                      {"Payment & delivery"}
                    </h2>
                  </div>
                  <div className="row g-3">
                    <div className="col-12">
                      <label htmlFor="ciMethod" className="form-label fs-md fw-semibold text-title">
                        Payment method
                      </label>
                      {" "}
                      <select
                        className="form-select pe-5"
                        id="ciMethod"
                        name="payment-method"
                        data-mirror="method"
                        defaultValue="Bank transfer"
                      >
                        <option>
                          Bank transfer
                        </option>
                        <option>
                          Credit or debit card
                        </option>
                        <option>
                          Direct debit
                        </option>
                        <option>
                          PayPal
                        </option>
                      </select>
                    </div>
                    <div className="col-12">
                      <div className="d-flex align-items-center gap-2 p-3 rounded-3 bg-soft border-theme">
                        <img
                          src="/assets/images/bank-hdfc.svg"
                          className="brand-logo brand-logo-sm flex-shrink-0"
                          width="24"
                          height="24"
                          alt=""
                        />
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-truncate">
                            Vionex Operating · HDFC
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2">
                            <bdi>
                              Acct ••••4417 · SWIFT HDFCINBB
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <button
                          type="button"
                          className="btn btn-ghost btn-18 rounded-circle ms-auto flex-shrink-0"
                          aria-label="Change payout account"
                        >
                          <i data-lucide="square-pen" />
                        </button>
                      </div>
                    </div>
                    <div className="col-12">
                      <label htmlFor="ciRepeat" className="form-label fs-md fw-semibold text-title">
                        Repeat this invoice
                      </label>
                      {" "}
                      <select className="form-select pe-5" id="ciRepeat" name="repeat" defaultValue="Do not repeat">
                        <option>
                          Do not repeat
                        </option>
                        <option>
                          Every week
                        </option>
                        <option>
                          Every month
                        </option>
                        <option>
                          Every quarter
                        </option>
                      </select>
                    </div>
                    <div className="col-12">
                      <p className="fs-xs fw-semibold text-uppercase text-muted-2 mb-2">
                        When you send
                      </p>
                      <div className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="ciCopyMe"
                          name="copy-me"
                          defaultChecked
                        />
                        {" "}
                        <label className="form-check-label fs-md" htmlFor="ciCopyMe">
                          Email a copy to billing@vionex.com
                        </label>
                      </div>
                      <div className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="ciReminders"
                          name="reminders"
                          defaultChecked
                        />
                        {" "}
                        <label className="form-check-label fs-md" htmlFor="ciReminders">
                          Send automatic payment reminders
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="ciOnline" name="online-payment" />
                        {" "}
                        <label className="form-check-label fs-md" htmlFor="ciOnline">
                          Let the client pay online by card
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        {/* ===== Invoice preview dialog ===== */}
        {" "}
        {/* Lives inside the form on purpose: the totals engine and the field
           mirrors already own these hooks, so the dialog is a live view of the
           draft rather than a second copy that can go stale. */}
        {" "}
        <div
          role="dialog"
          className="modal fade"
          id="invoiceDraftPreview"
          tabIndex="-1"
          aria-labelledby="invoiceDraftPreviewLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
            <div className="modal-content">
              <div className="modal-header border-b-soft gap-3">
                <div className="min-w-0">
                  <h2 className="modal-title h5 mb-1" id="invoiceDraftPreviewLabel">
                    Invoice Preview
                  </h2>
                  <p className="fs-md text-muted-2 mb-0">
                    Exactly what your client will receive.
                  </p>
                </div>
                <span className="badge-soft tint-slate border-current border-dashed text-nowrap ms-auto">
                  Draft
                </span>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <div className="border-theme rounded-4 p-3 p-sm-4">
                  <div className="d-flex flex-wrap align-items-start justify-content-between gap-3 pb-3 mb-3 border-b-soft">
                    <div className="d-flex align-items-center gap-2">
                      <img src="/assets/images/logo-icon.svg" className="brand-logo" width="48" height="48" alt="" />
                      <span className="min-w-0">
                        {" "}
                        <span className="d-block fs-5 fw-bold text-title">
                          <bdi>
                            Vionex Inc.
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2">
                          <bdi>
                            18 Harbour Street, Austin, TX 78701
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </div>
                    <ul className="list-unstyled fs-md text-sm-end mb-0">
                      <li>
                        <span className="text-muted-2">
                          Invoice
                        </span>
                        {" "}
                        <bdi className="fw-semibold text-title" data-mirror-out="number">
                          INV-2026-0149
                        </bdi>
                      </li>
                      <li>
                        <span className="text-muted-2">
                          Issued
                        </span>
                        {" "}
                        <bdi className="fw-medium text-body-2" data-mirror-out="issued" data-mirror-format="date">
                          31 Aug 2026
                        </bdi>
                      </li>
                      <li>
                        <span className="text-muted-2">
                          Due
                        </span>
                        {" "}
                        <bdi className="fw-medium text-body-2" data-mirror-out="due" data-mirror-format="date">
                          14 Sep 2026
                        </bdi>
                      </li>
                    </ul>
                  </div>
                  <div className="row g-3 mb-3">
                    <div className="col-12 col-sm-6">
                      <p className="fs-xs fw-semibold text-uppercase text-muted-2 mb-2">
                        Billed to
                      </p>
                      <div className="d-flex align-items-center gap-2">
                        <span className="icon-box icon-box-lg tint-brand border-current" aria-hidden="true">
                          <i data-lucide="building-2" />
                        </span>
                        <span className="min-w-0">
                          {" "}
                          <bdi className="d-block fs-6 fw-semibold text-title" data-mirror-out="client">
                            Maya Fernandes — Northwind Retail
                          </bdi>
                          {" "}
                          <bdi className="d-block fs-md text-body-2" data-mirror-out="email">
                            maya@northwindretail.com
                          </bdi>
                          {" "}
                          <bdi className="d-block fs-xs text-muted-2" data-mirror-out="address">
                            44 Market Row, Seattle, WA 98104, United States
                          </bdi>
                          {" "}
                        </span>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <p className="fs-xs fw-semibold text-uppercase text-muted-2 mb-2">
                        Payment details
                      </p>
                      <ul className="list-unstyled fs-md mb-0">
                        <li className="d-flex align-items-center gap-2 mb-1">
                          <i className="icon-14 text-muted-2 flex-shrink-0" data-lucide="landmark" aria-hidden="true" />
                          <span className="text-body-2" data-mirror-out="method">
                            Bank transfer
                          </span>
                        </li>
                        <li className="d-flex align-items-center gap-2 mb-1">
                          <i
                            className="icon-14 text-muted-2 flex-shrink-0"
                            data-lucide="calendar-clock"
                            aria-hidden="true"
                          />
                          <span className="text-body-2">
                            Terms:
                            {" "}
                            <span data-mirror-out="paymentTerms">
                              Net 14 days
                            </span>
                          </span>
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <i className="icon-14 text-muted-2 flex-shrink-0" data-lucide="wallet" aria-hidden="true" />
                          <span className="text-body-2">
                            <bdi>
                              Acct ••••4417 · HDFC
                            </bdi>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-sm align-middle mb-0">
                      <caption className="visually-hidden">
                        Line items on this invoice
                      </caption>
                      <thead>
                        <tr>
                          <th scope="col">
                            Description
                          </th>
                          <th scope="col" className="text-end">
                            Qty
                          </th>
                          <th scope="col" className="text-end">
                            Rate
                          </th>
                          <th scope="col" className="text-end">
                            Amount
                          </th>
                        </tr>
                      </thead>
                      <tbody data-items-preview="">
                        <tr>
                          <td className="fs-md fw-medium text-title">
                            Brand identity system
                          </td>
                          <td className="fs-md text-body-2 text-end">
                            <bdi>
                              1
                            </bdi>
                          </td>
                          <td className="fs-md text-body-2 text-end">
                            <bdi>
                              $6,400.00
                            </bdi>
                          </td>
                          <td className="fs-md fw-semibold text-title text-end">
                            <bdi>
                              $6,400.00
                            </bdi>
                          </td>
                        </tr>
                        <tr>
                          <td className="fs-md fw-medium text-title">
                            UI design retainer — September
                          </td>
                          <td className="fs-md text-body-2 text-end">
                            <bdi>
                              1
                            </bdi>
                          </td>
                          <td className="fs-md text-body-2 text-end">
                            <bdi>
                              $3,720.00
                            </bdi>
                          </td>
                          <td className="fs-md fw-semibold text-title text-end">
                            <bdi>
                              $3,720.00
                            </bdi>
                          </td>
                        </tr>
                        <tr>
                          <td className="fs-md fw-medium text-title">
                            Design QA session
                          </td>
                          <td className="fs-md text-body-2 text-end">
                            <bdi>
                              8
                            </bdi>
                          </td>
                          <td className="fs-md text-body-2 text-end">
                            <bdi>
                              $160.00
                            </bdi>
                          </td>
                          <td className="fs-md fw-semibold text-title text-end">
                            <bdi>
                              $1,280.00
                            </bdi>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="row g-3 pt-3 mt-3 border-t-soft">
                    <div className="col-12 col-sm-6">
                      <p className="fs-xs fw-semibold text-uppercase text-muted-2 mb-2">
                        Notes
                      </p>
                      <p className="fs-md text-body-2 mb-0" data-mirror-out="notes">
                        Thank you for your business. Please quote the invoice number with your payment.
                      </p>
                    </div>
                    <div className="col-12 col-sm-6">
                      <ul className="list-unstyled mb-0">
                        <li className="d-flex align-items-center justify-content-between gap-3 fs-md mb-2">
                          <span className="text-body-2">
                            Subtotal
                          </span>
                          <bdi className="fw-semibold text-title" data-items-out="subtotal">
                            $11,400.00
                          </bdi>
                        </li>
                        <li className="d-flex align-items-center justify-content-between gap-3 fs-md mb-2">
                          <span className="text-body-2">
                            Discount
                          </span>
                          <bdi className="fw-semibold text-cat-emerald" data-items-out="discount">
                            −$570.00
                          </bdi>
                        </li>
                        <li className="d-flex align-items-center justify-content-between gap-3 fs-md mb-2">
                          <span className="text-body-2">
                            Tax
                          </span>
                          <bdi className="fw-semibold text-title" data-items-out="tax">
                            $1,083.00
                          </bdi>
                        </li>
                        <li className="d-flex align-items-center justify-content-between gap-3 fs-md pb-2 mb-2 border-b-soft">
                          <span className="text-body-2">
                            Delivery
                          </span>
                          <bdi className="fw-semibold text-title" data-items-out="shipping">
                            $0.00
                          </bdi>
                        </li>
                        <li className="d-flex align-items-center justify-content-between gap-3">
                          <span className="fs-6 fw-semibold text-title">
                            Total
                          </span>
                          <bdi className="fs-5 fw-bold text-title" data-items-out="total">
                            $11,913.00
                          </bdi>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer border-t-soft gap-2">
                <button type="button" className="btn btn-outline-soft d-inline-flex align-items-center gap-2">
                  <i className="icon-18" data-lucide="printer" aria-hidden="true" />
                  Print
                </button>
                <button type="button" className="btn btn-outline-soft d-inline-flex align-items-center gap-2">
                  <i className="icon-18" data-lucide="download" aria-hidden="true" />
                  Download PDF
                </button>
                <button
                  type="button"
                  className="btn btn-primary d-inline-flex align-items-center gap-2"
                  data-bs-dismiss="modal"
                >
                  <i className="icon-18" data-lucide="pen-line" aria-hidden="true" />
                  Keep editing
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      {/* ========== FOOTER ========== */}
    </AppShell>
  );
}

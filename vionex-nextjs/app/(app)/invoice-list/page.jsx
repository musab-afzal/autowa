/* Generated from the Vionex HTML theme by scripts/convert-html.mjs */
import AppShell from "@/components/AppShell";

export const metadata = {
  title: "Vionex — Invoice List",
  description: "Vionex enterprise admin dashboard — invoice list with billing KPIs, status filters, bulk actions and a searchable invoice table, built with Bootstrap 5, CSS variables and a scalable design system.",
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
          Invoice List
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
              Invoice List
            </li>
          </ol>
        </nav>
      </div>
      {/* ===== Billing overview ===== */}
      <section className="mb-4" aria-labelledby="inv-overview-title">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
          <div className="min-w-0">
            <h2 id="inv-overview-title" className="fs-4 fw-bold text-title mb-1">
              Billing Overview
            </h2>
            <p className="fs-md text-body-2 mb-0">
              Everything raised this quarter — what has been collected, what is still open and what has slipped past its due date.
            </p>
          </div>
          <div className="d-flex flex-wrap align-items-center gap-2">
            <span className="badge-soft tint-emerald border-current d-inline-flex align-self-stretch align-items-center gap-2 px-3">
              {" "}
              <i className="icon-12" data-lucide="activity" aria-hidden="true" />
              {" "}
              <bdi>
                Synced 5 min ago
              </bdi>
              {" "}
            </span>
            <a
              href="/create-invoice"
              className="btn btn-accent d-inline-flex flex-nowrap align-items-center justify-content-center gap-2 text-nowrap"
            >
              {" "}
              <i className="icon-20" data-lucide="plus" aria-hidden="true" />
              New Invoice
              {" "}
            </a>
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-outline-soft btn-18 rounded-circle"
                id="invOverviewMenu"
                data-bs-toggle="dropdown"
                data-bs-offset="0,8"
                aria-expanded="false"
                aria-label="Billing options"
              >
                <i data-lucide="ellipsis-vertical" />
              </button>
              {" "}
              <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="invOverviewMenu">
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="bell-ring" />
                    Send payment reminders
                  </button>
                </li>
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="landmark" />
                    Reconcile payouts
                  </button>
                </li>
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="download" />
                    Export statement
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ul className="list-unstyled row row-cols-1 row-cols-sm-2 row-cols-xl-4 g-3 mb-0">
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                  <h3 className="flex-grow-1 min-w-0 fs-md fw-medium text-body-2 text-truncate mb-0">
                    Total Invoiced
                  </h3>
                  <span className="icon-box icon-box-sm tint-blue border-current" aria-hidden="true">
                    <i data-lucide="receipt-text" />
                  </span>
                </div>
                <p className="fs-2 fw-bold text-title lh-1 mb-2">
                  <bdi>
                    $486.2K
                  </bdi>
                </p>
                <p className="d-flex flex-wrap align-items-center gap-2 mb-0">
                  <span className="badge-soft tint-success d-inline-flex align-items-center gap-1 px-2 py-1 fs-xs">
                    {" "}
                    <i className="icon-12" data-lucide="trending-up" aria-hidden="true" />
                    <span dir="ltr">
                      +12.4%
                    </span>
                    {" "}
                  </span>
                  <span className="fs-xs text-muted-2">
                    vs last quarter
                  </span>
                </p>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                  <h3 className="flex-grow-1 min-w-0 fs-md fw-medium text-body-2 text-truncate mb-0">
                    Paid
                  </h3>
                  <span className="icon-box icon-box-sm tint-emerald border-current" aria-hidden="true">
                    <i data-lucide="badge-check" />
                  </span>
                </div>
                <p className="fs-2 fw-bold text-title lh-1 mb-2">
                  <bdi>
                    $362.8K
                  </bdi>
                </p>
                <p className="d-flex flex-wrap align-items-center gap-2 mb-0">
                  <span className="badge-soft tint-success d-inline-flex align-items-center gap-1 px-2 py-1 fs-xs">
                    {" "}
                    <i className="icon-12" data-lucide="trending-up" aria-hidden="true" />
                    <span dir="ltr">
                      +9.8%
                    </span>
                    {" "}
                  </span>
                  <span className="fs-xs text-muted-2">
                    <bdi>
                      74.6% collected
                    </bdi>
                  </span>
                </p>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                  <h3 className="flex-grow-1 min-w-0 fs-md fw-medium text-body-2 text-truncate mb-0">
                    Outstanding
                  </h3>
                  <span className="icon-box icon-box-sm tint-amber border-current" aria-hidden="true">
                    <i data-lucide="hourglass" />
                  </span>
                </div>
                <p className="fs-2 fw-bold text-title lh-1 mb-2">
                  <bdi>
                    $94.6K
                  </bdi>
                </p>
                <p className="d-flex flex-wrap align-items-center gap-2 mb-0">
                  <span className="badge-soft tint-success d-inline-flex align-items-center gap-1 px-2 py-1 fs-xs">
                    {" "}
                    <i className="icon-12" data-lucide="trending-down" aria-hidden="true" />
                    <span dir="ltr">
                      −4.2%
                    </span>
                    {" "}
                  </span>
                  <span className="fs-xs text-muted-2">
                    <bdi>
                      62 still open
                    </bdi>
                  </span>
                </p>
              </div>
            </div>
          </li>
          <li className="col">
            <div className="card h-100">
              <div className="card-body">
                <div className="d-flex align-items-start justify-content-between gap-2 mb-3">
                  <h3 className="flex-grow-1 min-w-0 fs-md fw-medium text-body-2 text-truncate mb-0">
                    Overdue
                  </h3>
                  <span className="icon-box icon-box-sm tint-rose border-current" aria-hidden="true">
                    <i data-lucide="triangle-alert" />
                  </span>
                </div>
                <p className="fs-2 fw-bold text-title lh-1 mb-2">
                  <bdi>
                    $28.8K
                  </bdi>
                </p>
                <p className="d-flex flex-wrap align-items-center gap-2 mb-0">
                  <span className="badge-soft tint-danger d-inline-flex align-items-center gap-1 px-2 py-1 fs-xs">
                    {" "}
                    <i className="icon-12" data-lucide="trending-up" aria-hidden="true" />
                    <span dir="ltr">
                      +5.6%
                    </span>
                    {" "}
                  </span>
                  <span className="fs-xs text-muted-2">
                    <bdi>
                      12 need chasing
                    </bdi>
                  </span>
                </p>
              </div>
            </div>
          </li>
        </ul>
      </section>
      {/* ===== Invoice list ===== */}
      <section className="mb-4" aria-labelledby="inv-list-title">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
          <div className="min-w-0">
            <h2 id="inv-list-title" className="fs-4 fw-bold text-title mb-1">
              All Invoices
            </h2>
            <p className="fs-md text-body-2 mb-0">
              Search, filter and act on every invoice raised across the workspace.
            </p>
          </div>
          <div className="d-flex flex-wrap align-items-center gap-2">
            <span className="badge-soft tint-rose border-current d-inline-flex align-self-stretch align-items-center gap-2 px-3">
              {" "}
              <i className="icon-12" data-lucide="alarm-clock" aria-hidden="true" />
              {" "}
              <bdi>
                12 past due
              </bdi>
              {" "}
            </span>
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-outline-soft d-inline-flex flex-nowrap align-items-center justify-content-center gap-2 text-nowrap"
                id="invExportMenu"
                data-bs-toggle="dropdown"
                data-bs-offset="0,8"
                aria-expanded="false"
              >
                <i className="icon-18" data-lucide="download" aria-hidden="true" />
                Export
                {" "}
                <i className="dd-caret icon-16" data-lucide="chevron-down" aria-hidden="true" />
              </button>
              {" "}
              <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="invExportMenu">
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="file-down" />
                    Export as CSV
                  </button>
                </li>
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="printer" />
                    Print list
                  </button>
                </li>
                <li>
                  <button type="button" className="dropdown-item">
                    <i data-lucide="banknote" />
                    Ageing report
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card" data-bulk-scope="" data-search-scope="">
          <div className="card-body">
            <div className="row g-3 align-items-center mb-3">
              <div className="col-12 col-sm">
                <label htmlFor="invSearch" className="visually-hidden">
                  Search invoices
                </label>
                <div className="field-icon">
                  <i className="icon-18" data-lucide="search" aria-hidden="true" />
                  {" "}
                  <input
                    type="search"
                    className="form-control rounded-pill"
                    id="invSearch"
                    name="invoiceSearch"
                    placeholder="Search invoice number, client or amount"
                    data-search-input=""
                  />
                </div>
              </div>
              <div className="col-6 col-sm-auto">
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn btn-outline-soft d-inline-flex align-items-center gap-2 w-100"
                    id="invPeriodMenu"
                    data-bs-toggle="dropdown"
                    data-bs-offset="0,8"
                    aria-expanded="false"
                  >
                    <i className="icon-16" data-lucide="calendar-days" aria-hidden="true" />
                    {" "}
                    <span className="text-nowrap">
                      This quarter
                    </span>
                  </button>
                  {" "}
                  <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="invPeriodMenu">
                    <li>
                      <button type="button" className="dropdown-item">
                        <i data-lucide="calendar-days" />
                        Last 30 days
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        <i data-lucide="calendar-days" />
                        This quarter
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        <i data-lucide="calendar-days" />
                        This year
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-6 col-sm-auto">
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn btn-outline-soft d-inline-flex align-items-center gap-2 w-100"
                    id="invSortMenu"
                    data-bs-toggle="dropdown"
                    data-bs-offset="0,8"
                    aria-expanded="false"
                  >
                    <i className="icon-16" data-lucide="arrow-down-wide-narrow" aria-hidden="true" />
                    {" "}
                    <span className="text-nowrap">
                      Newest first
                    </span>
                  </button>
                  {" "}
                  <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="invSortMenu">
                    <li>
                      <button type="button" className="dropdown-item">
                        <i data-lucide="arrow-down-wide-narrow" />
                        Newest first
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        <i data-lucide="alarm-clock" />
                        Due date
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        <i data-lucide="circle-dollar-sign" />
                        Highest amount
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="nav nav-pills d-inline-flex flex-nowrap mw-100 gap-1 p-1 mb-3 rounded-pill bg-soft overflow-x-auto scrollbar-none"
              role="group"
              aria-label="Filter invoices by status"
            >
              <button
                type="button"
                className="nav-link active fw-semibold text-nowrap"
                data-filter="all"
                aria-pressed="true"
              >
                All
                {" "}
                <span className="opacity-75">
                  10
                </span>
              </button>
              <button
                type="button"
                className="nav-link fw-semibold text-nowrap"
                data-filter="paid"
                aria-pressed="false"
              >
                Paid
                {" "}
                <span className="opacity-75">
                  3
                </span>
              </button>
              <button
                type="button"
                className="nav-link fw-semibold text-nowrap"
                data-filter="pending"
                aria-pressed="false"
              >
                Pending
                {" "}
                <span className="opacity-75">
                  3
                </span>
              </button>
              <button
                type="button"
                className="nav-link fw-semibold text-nowrap"
                data-filter="overdue"
                aria-pressed="false"
              >
                Overdue
                {" "}
                <span className="opacity-75">
                  3
                </span>
              </button>
              <button
                type="button"
                className="nav-link fw-semibold text-nowrap"
                data-filter="draft"
                aria-pressed="false"
              >
                Draft
                {" "}
                <span className="opacity-75">
                  1
                </span>
              </button>
            </div>
            {" "}
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
                  <i className="icon-18" data-lucide="send" aria-hidden="true" />
                  Send reminder
                </button>
                <button
                  type="button"
                  className="btn btn-outline-soft d-inline-flex align-items-center gap-2 text-nowrap"
                >
                  <i className="icon-18" data-lucide="download" aria-hidden="true" />
                  Download PDF
                </button>
                <button type="button" className="btn btn-primary d-inline-flex align-items-center gap-2 text-nowrap">
                  <i className="icon-18" data-lucide="hand-coins" aria-hidden="true" />
                  Mark as paid
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
                  Invoices raised this quarter, newest first
                </caption>
                <thead>
                  <tr>
                    <th scope="col">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="invSelectAll"
                        data-bulk-all=""
                        aria-label="Select all invoices"
                      />
                    </th>
                    <th scope="col">
                      Invoice
                    </th>
                    <th scope="col">
                      Client
                    </th>
                    <th scope="col">
                      Amount
                    </th>
                    <th scope="col">
                      Due
                    </th>
                    <th scope="col">
                      Status
                    </th>
                    <th scope="col">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr data-filter-tags="pending">
                    <td>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        data-bulk-item=""
                        aria-label="Select invoice INV-2026-0148"
                      />
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="legend-dot bg-cat-amber" aria-hidden="true" />
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-nowrap">
                            <bdi>
                              INV-2026-0148
                            </bdi>
                          </span>
                          {" "}
                          <span className="d-flex align-items-center gap-1 fs-xs text-muted-2 text-nowrap">
                            <i className="icon-12" data-lucide="calendar-days" aria-hidden="true" />
                            <bdi>
                              Issued 28 Aug 2026
                            </bdi>
                          </span>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-sm bg-grad-2" aria-hidden="true">
                          MF
                        </span>
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-medium text-title text-nowrap">
                            Maya Fernandes
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-nowrap">
                            Northwind Retail
                          </span>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="min-w-0">
                        {" "}
                        <span className="d-block fs-md fw-bold text-title text-nowrap">
                          <bdi>
                            $12,540.00
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-nowrap">
                          <bdi>
                            3 items · USD
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </td>
                    <td>
                      <span className="min-w-0">
                        {" "}
                        <span className="d-block fs-md text-body-2 text-nowrap">
                          <bdi>
                            11 Sep 2026
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-flex align-items-center gap-1 fs-xs text-muted-2 text-nowrap">
                          <i className="icon-12" data-lucide="clock" aria-hidden="true" />
                          <bdi>
                            In 11 days
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-amber d-inline-flex align-items-center gap-1 text-nowrap">
                        {" "}
                        <i className="icon-12" data-lucide="hourglass" aria-hidden="true" />
                        Pending
                        {" "}
                      </span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-1">
                        <button
                          type="button"
                          className="btn btn-outline-soft btn-18 rounded-circle"
                          data-bs-toggle="modal"
                          data-bs-target="#invoicePreview"
                          aria-label="Preview invoice INV-2026-0148"
                          data-fill-number="INV-2026-0148"
                          data-fill-client="Maya Fernandes"
                          data-fill-company="Northwind Retail"
                          data-fill-email="maya@northwindretail.com"
                          data-fill-initials="MF"
                          data-fill-avatarclass="bg-grad-2"
                          data-fill-issued="28 Aug 2026"
                          data-fill-due="11 Sep 2026"
                          data-fill-status="Pending"
                          data-fill-statusclass="tint-amber"
                          data-fill-note="Due in 11 days"
                          data-fill-subtotal="$11,400.00"
                          data-fill-tax="$1,140.00"
                          data-fill-total="$12,540.00"
                          data-fill-items="Brand identity system;;1;;$6,400.00;;$6,400.00|UI design retainer — August;;1;;$3,720.00;;$3,720.00|Design QA session;;8;;$160.00;;$1,280.00"
                        >
                          <i data-lucide="eye" />
                        </button>
                        <div className="dropdown">
                          <button
                            type="button"
                            className="btn btn-outline-soft btn-18 rounded-circle"
                            data-bs-toggle="dropdown"
                            data-dd-fixed=""
                            data-bs-offset="0,8"
                            aria-expanded="false"
                            aria-label="More actions for invoice INV-2026-0148"
                          >
                            <i data-lucide="ellipsis" />
                          </button>
                          {" "}
                          <ul className="dropdown-menu dropdown-menu-end p-2">
                            <li>
                              <a className="dropdown-item" href="/create-invoice">
                                <i data-lucide="pen-line" />
                                Edit invoice
                              </a>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="send" />
                                Send reminder
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="download" />
                                Download PDF
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="copy" />
                                Duplicate
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
                  <tr data-filter-tags="pending">
                    <td>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        data-bulk-item=""
                        aria-label="Select invoice INV-2026-0147"
                      />
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="legend-dot bg-cat-amber" aria-hidden="true" />
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-nowrap">
                            <bdi>
                              INV-2026-0147
                            </bdi>
                          </span>
                          {" "}
                          <span className="d-flex align-items-center gap-1 fs-xs text-muted-2 text-nowrap">
                            <i className="icon-12" data-lucide="calendar-days" aria-hidden="true" />
                            <bdi>
                              Issued 26 Aug 2026
                            </bdi>
                          </span>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-sm bg-grad-1" aria-hidden="true">
                          SM
                        </span>
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-medium text-title text-nowrap">
                            Sofia Marchetti
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-nowrap">
                            Vertex Labs
                          </span>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="min-w-0">
                        {" "}
                        <span className="d-block fs-md fw-bold text-title text-nowrap">
                          <bdi>
                            $8,250.00
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-nowrap">
                          <bdi>
                            2 items · USD
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </td>
                    <td>
                      <span className="min-w-0">
                        {" "}
                        <span className="d-block fs-md text-body-2 text-nowrap">
                          <bdi>
                            09 Sep 2026
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-flex align-items-center gap-1 fs-xs text-muted-2 text-nowrap">
                          <i className="icon-12" data-lucide="clock" aria-hidden="true" />
                          <bdi>
                            In 9 days
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-amber d-inline-flex align-items-center gap-1 text-nowrap">
                        {" "}
                        <i className="icon-12" data-lucide="hourglass" aria-hidden="true" />
                        Pending
                        {" "}
                      </span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-1">
                        <button
                          type="button"
                          className="btn btn-outline-soft btn-18 rounded-circle"
                          data-bs-toggle="modal"
                          data-bs-target="#invoicePreview"
                          aria-label="Preview invoice INV-2026-0147"
                          data-fill-number="INV-2026-0147"
                          data-fill-client="Sofia Marchetti"
                          data-fill-company="Vertex Labs"
                          data-fill-email="sofia@vertexlabs.io"
                          data-fill-initials="SM"
                          data-fill-avatarclass="bg-grad-1"
                          data-fill-issued="26 Aug 2026"
                          data-fill-due="09 Sep 2026"
                          data-fill-status="Pending"
                          data-fill-statusclass="tint-amber"
                          data-fill-note="Due in 9 days"
                          data-fill-subtotal="$7,500.00"
                          data-fill-tax="$750.00"
                          data-fill-total="$8,250.00"
                          data-fill-items="Data pipeline audit;;1;;$4,500.00;;$4,500.00|Engineering support hours;;20;;$150.00;;$3,000.00"
                        >
                          <i data-lucide="eye" />
                        </button>
                        <div className="dropdown">
                          <button
                            type="button"
                            className="btn btn-outline-soft btn-18 rounded-circle"
                            data-bs-toggle="dropdown"
                            data-dd-fixed=""
                            data-bs-offset="0,8"
                            aria-expanded="false"
                            aria-label="More actions for invoice INV-2026-0147"
                          >
                            <i data-lucide="ellipsis" />
                          </button>
                          {" "}
                          <ul className="dropdown-menu dropdown-menu-end p-2">
                            <li>
                              <a className="dropdown-item" href="/create-invoice">
                                <i data-lucide="pen-line" />
                                Edit invoice
                              </a>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="send" />
                                Send reminder
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="download" />
                                Download PDF
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="copy" />
                                Duplicate
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
                  <tr data-filter-tags="paid">
                    <td>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        data-bulk-item=""
                        aria-label="Select invoice INV-2026-0146"
                      />
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="legend-dot bg-cat-emerald" aria-hidden="true" />
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-nowrap">
                            <bdi>
                              INV-2026-0146
                            </bdi>
                          </span>
                          {" "}
                          <span className="d-flex align-items-center gap-1 fs-xs text-muted-2 text-nowrap">
                            <i className="icon-12" data-lucide="calendar-days" aria-hidden="true" />
                            <bdi>
                              Issued 24 Aug 2026
                            </bdi>
                          </span>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-sm bg-grad-5" aria-hidden="true">
                          DO
                        </span>
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-medium text-title text-nowrap">
                            Daniel Okafor
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-nowrap">
                            Lumen Systems
                          </span>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="min-w-0">
                        {" "}
                        <span className="d-block fs-md fw-bold text-title text-nowrap">
                          <bdi>
                            $21,560.00
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-nowrap">
                          <bdi>
                            3 items · USD
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </td>
                    <td>
                      <span className="min-w-0">
                        {" "}
                        <span className="d-block fs-md text-body-2 text-nowrap">
                          <bdi>
                            07 Sep 2026
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-flex align-items-center gap-1 fs-xs fw-semibold text-success text-nowrap">
                          <i className="icon-12" data-lucide="circle-check-big" aria-hidden="true" />
                          <bdi>
                            Paid 27 Aug 2026
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-emerald d-inline-flex align-items-center gap-1 text-nowrap">
                        {" "}
                        <i className="icon-12" data-lucide="badge-check" aria-hidden="true" />
                        Paid
                        {" "}
                      </span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-1">
                        <button
                          type="button"
                          className="btn btn-outline-soft btn-18 rounded-circle"
                          data-bs-toggle="modal"
                          data-bs-target="#invoicePreview"
                          aria-label="Preview invoice INV-2026-0146"
                          data-fill-number="INV-2026-0146"
                          data-fill-client="Daniel Okafor"
                          data-fill-company="Lumen Systems"
                          data-fill-email="daniel@lumensystems.com"
                          data-fill-initials="DO"
                          data-fill-avatarclass="bg-grad-5"
                          data-fill-issued="24 Aug 2026"
                          data-fill-due="07 Sep 2026"
                          data-fill-status="Paid"
                          data-fill-statusclass="tint-emerald"
                          data-fill-note="Paid in full on 27 Aug 2026"
                          data-fill-subtotal="$19,600.00"
                          data-fill-tax="$1,960.00"
                          data-fill-total="$21,560.00"
                          data-fill-items={"Platform licence — annual;;1;;$12,000.00;;$12,000.00|Onboarding & migration;;1;;$4,800.00;;$4,800.00|Priority support;;8;;$350.00;;$2,800.00"}
                        >
                          <i data-lucide="eye" />
                        </button>
                        <div className="dropdown">
                          <button
                            type="button"
                            className="btn btn-outline-soft btn-18 rounded-circle"
                            data-bs-toggle="dropdown"
                            data-dd-fixed=""
                            data-bs-offset="0,8"
                            aria-expanded="false"
                            aria-label="More actions for invoice INV-2026-0146"
                          >
                            <i data-lucide="ellipsis" />
                          </button>
                          {" "}
                          <ul className="dropdown-menu dropdown-menu-end p-2">
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="download" />
                                Download receipt
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="printer" />
                                Print
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="copy" />
                                Duplicate
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
                  <tr data-filter-tags="paid">
                    <td>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        data-bulk-item=""
                        aria-label="Select invoice INV-2026-0145"
                      />
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="legend-dot bg-cat-emerald" aria-hidden="true" />
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-nowrap">
                            <bdi>
                              INV-2026-0145
                            </bdi>
                          </span>
                          {" "}
                          <span className="d-flex align-items-center gap-1 fs-xs text-muted-2 text-nowrap">
                            <i className="icon-12" data-lucide="calendar-days" aria-hidden="true" />
                            <bdi>
                              Issued 22 Aug 2026
                            </bdi>
                          </span>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-sm bg-grad-4" aria-hidden="true">
                          IC
                        </span>
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-medium text-title text-nowrap">
                            Isabel Cruz
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-nowrap">
                            <bdi>
                              Tidewater Co.
                            </bdi>
                          </span>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="min-w-0">
                        {" "}
                        <span className="d-block fs-md fw-bold text-title text-nowrap">
                          <bdi>
                            $6,160.00
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-nowrap">
                          <bdi>
                            2 items · USD
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </td>
                    <td>
                      <span className="min-w-0">
                        {" "}
                        <span className="d-block fs-md text-body-2 text-nowrap">
                          <bdi>
                            05 Sep 2026
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-flex align-items-center gap-1 fs-xs fw-semibold text-success text-nowrap">
                          <i className="icon-12" data-lucide="circle-check-big" aria-hidden="true" />
                          <bdi>
                            Paid 23 Aug 2026
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-emerald d-inline-flex align-items-center gap-1 text-nowrap">
                        {" "}
                        <i className="icon-12" data-lucide="badge-check" aria-hidden="true" />
                        Paid
                        {" "}
                      </span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-1">
                        <button
                          type="button"
                          className="btn btn-outline-soft btn-18 rounded-circle"
                          data-bs-toggle="modal"
                          data-bs-target="#invoicePreview"
                          aria-label="Preview invoice INV-2026-0145"
                          data-fill-number="INV-2026-0145"
                          data-fill-client="Isabel Cruz"
                          data-fill-company="Tidewater Co."
                          data-fill-email="isabel@tidewater.co"
                          data-fill-initials="IC"
                          data-fill-avatarclass="bg-grad-4"
                          data-fill-issued="22 Aug 2026"
                          data-fill-due="05 Sep 2026"
                          data-fill-status="Paid"
                          data-fill-statusclass="tint-emerald"
                          data-fill-note="Paid in full on 23 Aug 2026"
                          data-fill-subtotal="$5,600.00"
                          data-fill-tax="$560.00"
                          data-fill-total="$6,160.00"
                          data-fill-items={"Managed hosting — Q3;;1;;$3,600.00;;$3,600.00|SSL & domain renewal;;4;;$500.00;;$2,000.00"}
                        >
                          <i data-lucide="eye" />
                        </button>
                        <div className="dropdown">
                          <button
                            type="button"
                            className="btn btn-outline-soft btn-18 rounded-circle"
                            data-bs-toggle="dropdown"
                            data-dd-fixed=""
                            data-bs-offset="0,8"
                            aria-expanded="false"
                            aria-label="More actions for invoice INV-2026-0145"
                          >
                            <i data-lucide="ellipsis" />
                          </button>
                          {" "}
                          <ul className="dropdown-menu dropdown-menu-end p-2">
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="download" />
                                Download receipt
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="printer" />
                                Print
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="copy" />
                                Duplicate
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
                  <tr data-filter-tags="draft">
                    <td>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        data-bulk-item=""
                        aria-label="Select invoice INV-2026-0144"
                      />
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="legend-dot bg-cat-slate" aria-hidden="true" />
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-nowrap">
                            <bdi>
                              INV-2026-0144
                            </bdi>
                          </span>
                          {" "}
                          <span className="d-flex align-items-center gap-1 fs-xs text-muted-2 text-nowrap">
                            <i className="icon-12" data-lucide="calendar-days" aria-hidden="true" />
                            <bdi>
                              Created 21 Aug 2026
                            </bdi>
                          </span>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-sm bg-grad-6" aria-hidden="true">
                          MB
                        </span>
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-medium text-title text-nowrap">
                            Marcus Bell
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-nowrap">
                            Orbit Freight
                          </span>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="min-w-0">
                        {" "}
                        <span className="d-block fs-md fw-bold text-title text-nowrap">
                          <bdi>
                            $1,485.00
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-nowrap">
                          <bdi>
                            2 items · USD
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </td>
                    <td>
                      <span className="min-w-0">
                        {" "}
                        <span className="d-block fs-md text-muted-2 text-nowrap" aria-hidden="true">
                          —
                        </span>
                        {" "}
                        <span className="d-flex align-items-center gap-1 fs-xs text-muted-2 text-nowrap">
                          <i className="icon-12" data-lucide="pen-line" aria-hidden="true" />
                          Not sent yet
                        </span>
                        {" "}
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-slate border-current border-dashed d-inline-flex align-items-center gap-1 text-nowrap">
                        {" "}
                        <i className="icon-12" data-lucide="pen-line" aria-hidden="true" />
                        Draft
                        {" "}
                      </span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-1">
                        <button
                          type="button"
                          className="btn btn-outline-soft btn-18 rounded-circle"
                          data-bs-toggle="modal"
                          data-bs-target="#invoicePreview"
                          aria-label="Preview invoice INV-2026-0144"
                          data-fill-number="INV-2026-0144"
                          data-fill-client="Marcus Bell"
                          data-fill-company="Orbit Freight"
                          data-fill-email="marcus@orbitfreight.com"
                          data-fill-initials="MB"
                          data-fill-avatarclass="bg-grad-6"
                          data-fill-issued="21 Aug 2026"
                          data-fill-due="—"
                          data-fill-status="Draft"
                          data-fill-statusclass="tint-slate"
                          data-fill-note="Draft — not sent to the client yet"
                          data-fill-subtotal="$1,350.00"
                          data-fill-tax="$135.00"
                          data-fill-total="$1,485.00"
                          data-fill-items="Logistics dashboard revisions;;6;;$175.00;;$1,050.00|Team training session;;1;;$300.00;;$300.00"
                        >
                          <i data-lucide="eye" />
                        </button>
                        <div className="dropdown">
                          <button
                            type="button"
                            className="btn btn-outline-soft btn-18 rounded-circle"
                            data-bs-toggle="dropdown"
                            data-dd-fixed=""
                            data-bs-offset="0,8"
                            aria-expanded="false"
                            aria-label="More actions for invoice INV-2026-0144"
                          >
                            <i data-lucide="ellipsis" />
                          </button>
                          {" "}
                          <ul className="dropdown-menu dropdown-menu-end p-2">
                            <li>
                              <a className="dropdown-item" href="/create-invoice">
                                <i data-lucide="pen-line" />
                                Continue editing
                              </a>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="send" />
                                Send to client
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="download" />
                                Download PDF
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="copy" />
                                Duplicate
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
                  <tr data-filter-tags="pending">
                    <td>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        data-bulk-item=""
                        aria-label="Select invoice INV-2026-0143"
                      />
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="legend-dot bg-cat-amber" aria-hidden="true" />
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-nowrap">
                            <bdi>
                              INV-2026-0143
                            </bdi>
                          </span>
                          {" "}
                          <span className="d-flex align-items-center gap-1 fs-xs text-muted-2 text-nowrap">
                            <i className="icon-12" data-lucide="calendar-days" aria-hidden="true" />
                            <bdi>
                              Issued 18 Aug 2026
                            </bdi>
                          </span>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-sm bg-grad-3" aria-hidden="true">
                          AS
                        </span>
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-medium text-title text-nowrap">
                            Aarav Shah
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-nowrap">
                            Halcyon Media
                          </span>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="min-w-0">
                        {" "}
                        <span className="d-block fs-md fw-bold text-title text-nowrap">
                          <bdi>
                            $9,350.00
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-nowrap">
                          <bdi>
                            3 items · USD
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </td>
                    <td>
                      <span className="min-w-0">
                        {" "}
                        <span className="d-block fs-md text-body-2 text-nowrap">
                          <bdi>
                            01 Sep 2026
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-flex align-items-center gap-1 fs-xs fw-semibold text-cat-orange text-nowrap">
                          <i className="icon-12" data-lucide="alarm-clock" aria-hidden="true" />
                          <bdi>
                            Due tomorrow
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-amber d-inline-flex align-items-center gap-1 text-nowrap">
                        {" "}
                        <i className="icon-12" data-lucide="hourglass" aria-hidden="true" />
                        Pending
                        {" "}
                      </span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-1">
                        <button
                          type="button"
                          className="btn btn-outline-soft btn-18 rounded-circle"
                          data-bs-toggle="modal"
                          data-bs-target="#invoicePreview"
                          aria-label="Preview invoice INV-2026-0143"
                          data-fill-number="INV-2026-0143"
                          data-fill-client="Aarav Shah"
                          data-fill-company="Halcyon Media"
                          data-fill-email="aarav@halcyonmedia.com"
                          data-fill-initials="AS"
                          data-fill-avatarclass="bg-grad-3"
                          data-fill-issued="18 Aug 2026"
                          data-fill-due="01 Sep 2026"
                          data-fill-status="Pending"
                          data-fill-statusclass="tint-amber"
                          data-fill-note="Due tomorrow"
                          data-fill-subtotal="$8,500.00"
                          data-fill-tax="$850.00"
                          data-fill-total="$9,350.00"
                          data-fill-items="Campaign production;;1;;$5,200.00;;$5,200.00|Media buying fee;;1;;$2,100.00;;$2,100.00|Copywriting;;8;;$150.00;;$1,200.00"
                        >
                          <i data-lucide="eye" />
                        </button>
                        <div className="dropdown">
                          <button
                            type="button"
                            className="btn btn-outline-soft btn-18 rounded-circle"
                            data-bs-toggle="dropdown"
                            data-dd-fixed=""
                            data-bs-offset="0,8"
                            aria-expanded="false"
                            aria-label="More actions for invoice INV-2026-0143"
                          >
                            <i data-lucide="ellipsis" />
                          </button>
                          {" "}
                          <ul className="dropdown-menu dropdown-menu-end p-2">
                            <li>
                              <a className="dropdown-item" href="/create-invoice">
                                <i data-lucide="pen-line" />
                                Edit invoice
                              </a>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="send" />
                                Send reminder
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="download" />
                                Download PDF
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="copy" />
                                Duplicate
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
                  <tr data-filter-tags="overdue">
                    <td>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        data-bulk-item=""
                        aria-label="Select invoice INV-2026-0142"
                      />
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="legend-dot bg-cat-rose" aria-hidden="true" />
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-nowrap">
                            <bdi>
                              INV-2026-0142
                            </bdi>
                          </span>
                          {" "}
                          <span className="d-flex align-items-center gap-1 fs-xs text-muted-2 text-nowrap">
                            <i className="icon-12" data-lucide="calendar-days" aria-hidden="true" />
                            <bdi>
                              Issued 12 Aug 2026
                            </bdi>
                          </span>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-sm bg-grad-1" aria-hidden="true">
                          EP
                        </span>
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-medium text-title text-nowrap">
                            Elena Petrova
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-nowrap">
                            Cobalt Studio
                          </span>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="min-w-0">
                        {" "}
                        <span className="d-block fs-md fw-bold text-title text-nowrap">
                          <bdi>
                            $3,740.00
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-nowrap">
                          <bdi>
                            2 items · USD
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </td>
                    <td>
                      <span className="min-w-0">
                        {" "}
                        <span className="d-block fs-md text-body-2 text-nowrap">
                          <bdi>
                            26 Aug 2026
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-flex align-items-center gap-1 fs-xs fw-semibold text-cat-rose text-nowrap">
                          <i className="icon-12" data-lucide="alarm-clock" aria-hidden="true" />
                          <bdi>
                            5 days late
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-rose d-inline-flex align-items-center gap-1 text-nowrap">
                        {" "}
                        <i className="icon-12" data-lucide="triangle-alert" aria-hidden="true" />
                        Overdue
                        {" "}
                      </span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-1">
                        <button
                          type="button"
                          className="btn btn-outline-soft btn-18 rounded-circle"
                          data-bs-toggle="modal"
                          data-bs-target="#invoicePreview"
                          aria-label="Preview invoice INV-2026-0142"
                          data-fill-number="INV-2026-0142"
                          data-fill-client="Elena Petrova"
                          data-fill-company="Cobalt Studio"
                          data-fill-email="elena@cobaltstudio.design"
                          data-fill-initials="EP"
                          data-fill-avatarclass="bg-grad-1"
                          data-fill-issued="12 Aug 2026"
                          data-fill-due="26 Aug 2026"
                          data-fill-status="Overdue"
                          data-fill-statusclass="tint-rose"
                          data-fill-note="5 days past due"
                          data-fill-subtotal="$3,400.00"
                          data-fill-tax="$340.00"
                          data-fill-total="$3,740.00"
                          data-fill-items="Studio retainer — August;;1;;$2,800.00;;$2,800.00|Stock footage licence;;4;;$150.00;;$600.00"
                        >
                          <i data-lucide="eye" />
                        </button>
                        <div className="dropdown">
                          <button
                            type="button"
                            className="btn btn-outline-soft btn-18 rounded-circle"
                            data-bs-toggle="dropdown"
                            data-dd-fixed=""
                            data-bs-offset="0,8"
                            aria-expanded="false"
                            aria-label="More actions for invoice INV-2026-0142"
                          >
                            <i data-lucide="ellipsis" />
                          </button>
                          {" "}
                          <ul className="dropdown-menu dropdown-menu-end p-2">
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="bell-ring" />
                                Chase payment
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="hand-coins" />
                                Mark as paid
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="download" />
                                Download PDF
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
                  <tr data-filter-tags="overdue">
                    <td>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        data-bulk-item=""
                        aria-label="Select invoice INV-2026-0141"
                      />
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="legend-dot bg-cat-rose" aria-hidden="true" />
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-nowrap">
                            <bdi>
                              INV-2026-0141
                            </bdi>
                          </span>
                          {" "}
                          <span className="d-flex align-items-center gap-1 fs-xs text-muted-2 text-nowrap">
                            <i className="icon-12" data-lucide="calendar-days" aria-hidden="true" />
                            <bdi>
                              Issued 09 Aug 2026
                            </bdi>
                          </span>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-sm bg-grad-5" aria-hidden="true">
                          PN
                        </span>
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-medium text-title text-nowrap">
                            Priya Nair
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-nowrap">
                            Beacon Health
                          </span>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="min-w-0">
                        {" "}
                        <span className="d-block fs-md fw-bold text-title text-nowrap">
                          <bdi>
                            $5,940.00
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-nowrap">
                          <bdi>
                            2 items · USD
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </td>
                    <td>
                      <span className="min-w-0">
                        {" "}
                        <span className="d-block fs-md text-body-2 text-nowrap">
                          <bdi>
                            23 Aug 2026
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-flex align-items-center gap-1 fs-xs fw-semibold text-cat-rose text-nowrap">
                          <i className="icon-12" data-lucide="alarm-clock" aria-hidden="true" />
                          <bdi>
                            8 days late
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-rose d-inline-flex align-items-center gap-1 text-nowrap">
                        {" "}
                        <i className="icon-12" data-lucide="triangle-alert" aria-hidden="true" />
                        Overdue
                        {" "}
                      </span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-1">
                        <button
                          type="button"
                          className="btn btn-outline-soft btn-18 rounded-circle"
                          data-bs-toggle="modal"
                          data-bs-target="#invoicePreview"
                          aria-label="Preview invoice INV-2026-0141"
                          data-fill-number="INV-2026-0141"
                          data-fill-client="Priya Nair"
                          data-fill-company="Beacon Health"
                          data-fill-email="priya@beaconhealth.org"
                          data-fill-initials="PN"
                          data-fill-avatarclass="bg-grad-5"
                          data-fill-issued="09 Aug 2026"
                          data-fill-due="23 Aug 2026"
                          data-fill-status="Overdue"
                          data-fill-statusclass="tint-rose"
                          data-fill-note="8 days past due"
                          data-fill-subtotal="$5,400.00"
                          data-fill-tax="$540.00"
                          data-fill-total="$5,940.00"
                          data-fill-items="Clinic booking module;;1;;$4,200.00;;$4,200.00|Staff training;;4;;$300.00;;$1,200.00"
                        >
                          <i data-lucide="eye" />
                        </button>
                        <div className="dropdown">
                          <button
                            type="button"
                            className="btn btn-outline-soft btn-18 rounded-circle"
                            data-bs-toggle="dropdown"
                            data-dd-fixed=""
                            data-bs-offset="0,8"
                            aria-expanded="false"
                            aria-label="More actions for invoice INV-2026-0141"
                          >
                            <i data-lucide="ellipsis" />
                          </button>
                          {" "}
                          <ul className="dropdown-menu dropdown-menu-end p-2">
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="bell-ring" />
                                Chase payment
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="hand-coins" />
                                Mark as paid
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="download" />
                                Download PDF
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
                  <tr data-filter-tags="paid">
                    <td>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        data-bulk-item=""
                        aria-label="Select invoice INV-2026-0140"
                      />
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="legend-dot bg-cat-emerald" aria-hidden="true" />
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-nowrap">
                            <bdi>
                              INV-2026-0140
                            </bdi>
                          </span>
                          {" "}
                          <span className="d-flex align-items-center gap-1 fs-xs text-muted-2 text-nowrap">
                            <i className="icon-12" data-lucide="calendar-days" aria-hidden="true" />
                            <bdi>
                              Issued 04 Aug 2026
                            </bdi>
                          </span>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-sm bg-grad-2" aria-hidden="true">
                          TH
                        </span>
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-medium text-title text-nowrap">
                            Tomás Herrera
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-nowrap">
                            Ridgeline Group
                          </span>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="min-w-0">
                        {" "}
                        <span className="d-block fs-md fw-bold text-title text-nowrap">
                          <bdi>
                            $16,940.00
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-nowrap">
                          <bdi>
                            3 items · USD
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </td>
                    <td>
                      <span className="min-w-0">
                        {" "}
                        <span className="d-block fs-md text-body-2 text-nowrap">
                          <bdi>
                            18 Aug 2026
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-flex align-items-center gap-1 fs-xs fw-semibold text-success text-nowrap">
                          <i className="icon-12" data-lucide="circle-check-big" aria-hidden="true" />
                          <bdi>
                            Paid 15 Aug 2026
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-emerald d-inline-flex align-items-center gap-1 text-nowrap">
                        {" "}
                        <i className="icon-12" data-lucide="badge-check" aria-hidden="true" />
                        Paid
                        {" "}
                      </span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-1">
                        <button
                          type="button"
                          className="btn btn-outline-soft btn-18 rounded-circle"
                          data-bs-toggle="modal"
                          data-bs-target="#invoicePreview"
                          aria-label="Preview invoice INV-2026-0140"
                          data-fill-number="INV-2026-0140"
                          data-fill-client="Tomás Herrera"
                          data-fill-company="Ridgeline Group"
                          data-fill-email="tomas@ridgelinegroup.com"
                          data-fill-initials="TH"
                          data-fill-avatarclass="bg-grad-2"
                          data-fill-issued="04 Aug 2026"
                          data-fill-due="18 Aug 2026"
                          data-fill-status="Paid"
                          data-fill-statusclass="tint-emerald"
                          data-fill-note="Paid in full on 15 Aug 2026"
                          data-fill-subtotal="$15,400.00"
                          data-fill-tax="$1,540.00"
                          data-fill-total="$16,940.00"
                          data-fill-items={"Warehouse automation build;;1;;$9,800.00;;$9,800.00|Integration services;;20;;$220.00;;$4,400.00|Documentation & handover;;1;;$1,200.00;;$1,200.00"}
                        >
                          <i data-lucide="eye" />
                        </button>
                        <div className="dropdown">
                          <button
                            type="button"
                            className="btn btn-outline-soft btn-18 rounded-circle"
                            data-bs-toggle="dropdown"
                            data-dd-fixed=""
                            data-bs-offset="0,8"
                            aria-expanded="false"
                            aria-label="More actions for invoice INV-2026-0140"
                          >
                            <i data-lucide="ellipsis" />
                          </button>
                          {" "}
                          <ul className="dropdown-menu dropdown-menu-end p-2">
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="download" />
                                Download receipt
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="printer" />
                                Print
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="copy" />
                                Duplicate
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
                  <tr data-filter-tags="overdue">
                    <td>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        data-bulk-item=""
                        aria-label="Select invoice INV-2026-0139"
                      />
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="legend-dot bg-cat-rose" aria-hidden="true" />
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title text-nowrap">
                            <bdi>
                              INV-2026-0139
                            </bdi>
                          </span>
                          {" "}
                          <span className="d-flex align-items-center gap-1 fs-xs text-muted-2 text-nowrap">
                            <i className="icon-12" data-lucide="calendar-days" aria-hidden="true" />
                            <bdi>
                              Issued 26 Jul 2026
                            </bdi>
                          </span>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-sm bg-grad-3" aria-hidden="true">
                          NK
                        </span>
                        <span className="min-w-0">
                          {" "}
                          <span className="d-block fs-md fw-medium text-title text-nowrap">
                            Nina Kaur
                          </span>
                          {" "}
                          <span className="d-block fs-xs text-muted-2 text-nowrap">
                            Solstice Labs
                          </span>
                          {" "}
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="min-w-0">
                        {" "}
                        <span className="d-block fs-md fw-bold text-title text-nowrap">
                          <bdi>
                            $4,290.00
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-nowrap">
                          <bdi>
                            2 items · USD
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </td>
                    <td>
                      <span className="min-w-0">
                        {" "}
                        <span className="d-block fs-md text-body-2 text-nowrap">
                          <bdi>
                            09 Aug 2026
                          </bdi>
                        </span>
                        {" "}
                        <span className="d-flex align-items-center gap-1 fs-xs fw-semibold text-cat-rose text-nowrap">
                          <i className="icon-12" data-lucide="alarm-clock" aria-hidden="true" />
                          <bdi>
                            22 days late
                          </bdi>
                        </span>
                        {" "}
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-rose d-inline-flex align-items-center gap-1 text-nowrap">
                        {" "}
                        <i className="icon-12" data-lucide="triangle-alert" aria-hidden="true" />
                        Overdue
                        {" "}
                      </span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-1">
                        <button
                          type="button"
                          className="btn btn-outline-soft btn-18 rounded-circle"
                          data-bs-toggle="modal"
                          data-bs-target="#invoicePreview"
                          aria-label="Preview invoice INV-2026-0139"
                          data-fill-number="INV-2026-0139"
                          data-fill-client="Nina Kaur"
                          data-fill-company="Solstice Labs"
                          data-fill-email="nina@solsticelabs.ai"
                          data-fill-initials="NK"
                          data-fill-avatarclass="bg-grad-3"
                          data-fill-issued="26 Jul 2026"
                          data-fill-due="09 Aug 2026"
                          data-fill-status="Overdue"
                          data-fill-statusclass="tint-rose"
                          data-fill-note="22 days past due"
                          data-fill-subtotal="$3,900.00"
                          data-fill-tax="$390.00"
                          data-fill-total="$4,290.00"
                          data-fill-items={"Research sprint;;1;;$3,000.00;;$3,000.00|Report & readout;;3;;$300.00;;$900.00"}
                        >
                          <i data-lucide="eye" />
                        </button>
                        <div className="dropdown">
                          <button
                            type="button"
                            className="btn btn-outline-soft btn-18 rounded-circle"
                            data-bs-toggle="dropdown"
                            data-dd-fixed=""
                            data-bs-offset="0,8"
                            aria-expanded="false"
                            aria-label="More actions for invoice INV-2026-0139"
                          >
                            <i data-lucide="ellipsis" />
                          </button>
                          {" "}
                          <ul className="dropdown-menu dropdown-menu-end p-2">
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="bell-ring" />
                                Chase payment
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="hand-coins" />
                                Mark as paid
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="download" />
                                Download PDF
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
                  {/* Empty state — revealed by the search module when nothing matches */}
                  <tr className="d-none" data-search-empty="">
                    <td colSpan="7">
                      <div className="d-flex flex-column align-items-center text-center gap-2 py-4">
                        <span className="icon-box icon-box-lg tint-slate rounded-circle" aria-hidden="true">
                          <i data-lucide="search-x" />
                        </span>
                        <p className="fs-6 fw-semibold text-title mb-0">
                          No invoices found
                        </p>
                        <p className="fs-md text-body-2 mb-0">
                          Nothing matches this filter
                          <span className="d-none" data-search-active="">
                            {" "}
                            for “
                            <span data-search-query="" />
                            ”
                          </span>
                          . Try another status or a different search term.
                        </p>
                        <button type="button" className="btn btn-outline-soft mt-1" data-search-clear="">
                          Clear search
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 pt-3 mt-3 border-t-soft">
              <p className="fs-md text-muted-2 mb-0">
                <bdi>
                  Showing
                  {" "}
                  <span data-search-count="">
                    10
                  </span>
                  {" "}of{" "}
                  <span data-search-total="">
                    10
                  </span>
                  {" "}
                  invoices on this page · 1,284 in total
                </bdi>
              </p>
              <div className="d-flex flex-wrap align-items-center gap-3">
                <div className="d-flex align-items-center gap-2">
                  <label htmlFor="invRows" className="fs-md text-muted-2 mb-0 text-nowrap">
                    Rows
                  </label>
                  <select className="form-select w-auto pe-5" id="invRows" name="rows" defaultValue="10">
                    <option value="10">
                      10
                    </option>
                    <option value="25">
                      25
                    </option>
                    <option value="50">
                      50
                    </option>
                  </select>
                </div>
                <nav aria-label="Invoice list pagination">
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
      </section>
      {/* ===== Invoice preview modal ===== */}
      {/* One dialog for the whole table: the row's eye button carries that
         invoice's values as data-fill-* attributes and the shared modal-fill
         behaviour copies them in on open. */}
      <div
        role="dialog"
        className="modal fade"
        id="invoicePreview"
        tabIndex="-1"
        aria-labelledby="invoicePreviewLabel"
        aria-hidden="true"
        data-modal-fill=""
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
          <div className="modal-content">
            <div className="modal-header border-b-soft gap-3">
              <div className="min-w-0">
                <h2 className="modal-title h5 mb-1" id="invoicePreviewLabel">
                  Invoice Preview
                </h2>
                <p className="fs-md text-muted-2 mb-0">
                  Check it over before you send, download or print.
                </p>
              </div>
              <span
                className="badge-soft tint-amber text-nowrap ms-auto"
                data-fill="status"
                data-fill-class="statusclass"
                data-fill-base="badge-soft text-nowrap ms-auto"
              >
                Pending
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
                      <bdi className="fw-semibold text-title" data-fill="number">
                        INV-2026-0148
                      </bdi>
                    </li>
                    <li>
                      <span className="text-muted-2">
                        Issued
                      </span>
                      {" "}
                      <bdi className="fw-medium text-body-2" data-fill="issued">
                        28 Aug 2026
                      </bdi>
                    </li>
                    <li>
                      <span className="text-muted-2">
                        Due
                      </span>
                      {" "}
                      <bdi className="fw-medium text-body-2" data-fill="due">
                        11 Sep 2026
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
                      <span
                        className="avatar avatar-md bg-grad-2"
                        aria-hidden="true"
                        data-fill-class="avatarclass"
                        data-fill-base="avatar avatar-md"
                      >
                        <span data-fill="initials">
                          MF
                        </span>
                      </span>
                      <span className="min-w-0">
                        {" "}
                        <span className="d-block fs-6 fw-semibold text-title" data-fill="client">
                          Maya Fernandes
                        </span>
                        {" "}
                        <span className="d-block fs-md text-body-2" data-fill="company">
                          Northwind Retail
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-truncate" data-fill="email">
                          maya@northwindretail.com
                        </span>
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
                        <i className="icon-14 text-muted-2" data-lucide="landmark" aria-hidden="true" />
                        <span className="text-body-2">
                          Bank transfer ·
                          {" "}
                          <bdi>
                            Acct ••4417
                          </bdi>
                        </span>
                      </li>
                      <li className="d-flex align-items-center gap-2">
                        <i className="icon-14 text-muted-2" data-lucide="calendar-clock" aria-hidden="true" />
                        <span className="text-body-2">
                          Terms: Net 14 days
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
                    {/* Every line-item row an invoice in this list can show is
                       written here; the dialog fills their values from the row
                       that opened it and retires the ones it does not need
                       with .d-none, so no row is ever built in script. */}
                    <tbody data-fill-rows="items">
                      <tr data-fill-row="">
                        <td className="fs-md fw-medium text-title" data-fill-cell="">
                          Brand identity system
                        </td>
                        <td className="fs-md text-body-2 text-end">
                          <bdi data-fill-cell="">
                            1
                          </bdi>
                        </td>
                        <td className="fs-md text-body-2 text-end">
                          <bdi data-fill-cell="">
                            $6,400.00
                          </bdi>
                        </td>
                        <td className="fs-md fw-semibold text-title text-end">
                          <bdi data-fill-cell="">
                            $6,400.00
                          </bdi>
                        </td>
                      </tr>
                      <tr data-fill-row="">
                        <td className="fs-md fw-medium text-title" data-fill-cell="">
                          UI design retainer — August
                        </td>
                        <td className="fs-md text-body-2 text-end">
                          <bdi data-fill-cell="">
                            1
                          </bdi>
                        </td>
                        <td className="fs-md text-body-2 text-end">
                          <bdi data-fill-cell="">
                            $3,720.00
                          </bdi>
                        </td>
                        <td className="fs-md fw-semibold text-title text-end">
                          <bdi data-fill-cell="">
                            $3,720.00
                          </bdi>
                        </td>
                      </tr>
                      <tr data-fill-row="">
                        <td className="fs-md fw-medium text-title" data-fill-cell="">
                          Design QA session
                        </td>
                        <td className="fs-md text-body-2 text-end">
                          <bdi data-fill-cell="">
                            8
                          </bdi>
                        </td>
                        <td className="fs-md text-body-2 text-end">
                          <bdi data-fill-cell="">
                            $160.00
                          </bdi>
                        </td>
                        <td className="fs-md fw-semibold text-title text-end">
                          <bdi data-fill-cell="">
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
                    <p className="fs-md text-body-2 mb-0">
                      Thank you for your business. Please quote the invoice number with your payment.
                    </p>
                  </div>
                  <div className="col-12 col-sm-6">
                    <ul className="list-unstyled mb-0">
                      <li className="d-flex align-items-center justify-content-between gap-3 fs-md mb-2">
                        <span className="text-body-2">
                          Subtotal
                        </span>
                        <bdi className="fw-semibold text-title" data-fill="subtotal">
                          $11,400.00
                        </bdi>
                      </li>
                      <li className="d-flex align-items-center justify-content-between gap-3 fs-md pb-2 mb-2 border-b-soft">
                        <span className="text-body-2">
                          Tax (10%)
                        </span>
                        <bdi className="fw-semibold text-title" data-fill="tax">
                          $1,140.00
                        </bdi>
                      </li>
                      <li className="d-flex align-items-center justify-content-between gap-3">
                        <span className="fs-6 fw-semibold text-title">
                          Total
                        </span>
                        <bdi className="fs-5 fw-bold text-title" data-fill="total">
                          $12,540.00
                        </bdi>
                      </li>
                    </ul>
                    <p className="fs-xs text-muted-2 mt-2 mb-0" data-fill="note">
                      Due in 11 days
                    </p>
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
              <button type="button" className="btn btn-primary d-inline-flex align-items-center gap-2">
                <i className="icon-18" data-lucide="send" aria-hidden="true" />
                Send invoice
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ========== FOOTER ========== */}
    </AppShell>
  );
}

/* Generated from the Vionex HTML theme by scripts/convert-html.mjs */
import AppShell from "@/components/AppShell";

export const metadata = {
  title: "Vionex — Dropdowns",
  description: "Vionex dropdowns — button and split menus, every direction and alignment, menus holding forms, search and rich content, built with Bootstrap 5, CSS variables and a scalable design system.",
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
          Dropdowns
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
              Dropdowns
            </li>
          </ol>
        </nav>
      </div>
      <div className="row g-3 g-xl-4">
        {/* ===== Basic Dropdowns ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-basic">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-basic" className="fs-5 fw-bold text-title mb-1">
                  Basic Dropdowns
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Any button weight can carry a menu. The caret is added by
                  {" "}
                  <code>
                    dropdown-toggle
                  </code>
                  {" "}
                  and flips with the menu.
                </p>
              </div>
              <div className="d-flex flex-wrap align-items-center gap-2">
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn btn-primary dropdown-toggle"
                    id="ddPrimary"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Primary
                  </button>
                  {" "}
                  <ul className="dropdown-menu p-2" aria-labelledby="ddPrimary">
                    <li>
                      <button type="button" className="dropdown-item">
                        Overview
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        Reports
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        Exports
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn btn-outline-soft dropdown-toggle"
                    id="ddOutline"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Outline
                  </button>
                  {" "}
                  <ul className="dropdown-menu p-2" aria-labelledby="ddOutline">
                    <li>
                      <button type="button" className="dropdown-item">
                        Overview
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        Reports
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        Exports
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn btn-ghost dropdown-toggle"
                    id="ddGhost"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Ghost
                  </button>
                  {" "}
                  <ul className="dropdown-menu p-2" aria-labelledby="ddGhost">
                    <li>
                      <button type="button" className="dropdown-item">
                        Overview
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        Reports
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        Exports
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn btn-ghost btn-18 rounded-circle"
                    id="ddIconOnly"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    aria-label="More actions"
                  >
                    <i className="icon-18" data-lucide="ellipsis-vertical" aria-hidden="true" />
                  </button>
                  {" "}
                  <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="ddIconOnly">
                    <li>
                      <button type="button" className="dropdown-item">
                        Rename
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        Duplicate
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item dropdown-item-danger">
                        Delete
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* ===== Menu Content ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-content">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-content" className="fs-5 fw-bold text-title mb-1">
                  {"Headers, Dividers & States"}
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Everything a menu can hold: section headers, rules, free text, and items that are active, disabled or destructive.
                </p>
              </div>
              <div className="d-flex flex-wrap gap-2">
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn btn-outline-soft dropdown-toggle"
                    id="ddShortcuts"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Navigation menu
                  </button>
                  {" "}
                  <ul className="dropdown-menu p-2" aria-labelledby="ddShortcuts">
                    <li>
                      <a className="dropdown-item d-flex align-items-center gap-2" href="/">
                        <i data-lucide="layout-grid" aria-hidden="true" />
                        <span className="flex-grow-1">
                          Dashboard
                        </span>
                        {" "}
                        <kbd className="fs-xs">
                          G D
                        </kbd>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item d-flex align-items-center gap-2" href="/tasks">
                        <i data-lucide="square-check-big" aria-hidden="true" />
                        <span className="flex-grow-1">
                          Tasks
                        </span>
                        {" "}
                        <kbd className="fs-xs">
                          G T
                        </kbd>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item d-flex align-items-center gap-2" href="/file-manager">
                        <i data-lucide="folder" aria-hidden="true" />
                        <span className="flex-grow-1">
                          Files
                        </span>
                        {" "}
                        <kbd className="fs-xs">
                          G F
                        </kbd>
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item d-flex align-items-center gap-2" href="/settings">
                        <i data-lucide="settings" aria-hidden="true" />
                        <span className="flex-grow-1">
                          Settings
                        </span>
                        {" "}
                        <kbd className="fs-xs">
                          G S
                        </kbd>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn btn-outline-soft dropdown-toggle"
                    id="ddContent"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Open the full menu
                  </button>
                  {" "}
                  <ul className="dropdown-menu p-2" aria-labelledby="ddContent">
                    <li>
                      <h3 className="dropdown-header fs-sm fw-semibold text-uppercase">
                        Workspace
                      </h3>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item active" aria-current="true">
                        <i data-lucide="check" aria-hidden="true" />
                        Vionex HQ
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        <i data-lucide="building-2" aria-hidden="true" />
                        Northwind Retail
                      </button>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <h3 className="dropdown-header fs-sm fw-semibold text-uppercase">
                        Actions
                      </h3>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        <i data-lucide="settings" aria-hidden="true" />
                        Workspace settings
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item" disabled>
                        <i data-lucide="lock" aria-hidden="true" />
                        Billing (owners only)
                      </button>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <p className="dropdown-item-text fs-sm text-muted-2 mb-0">
                        You are signed in as an editor.
                      </p>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item dropdown-item-danger">
                        <i data-lucide="log-out" aria-hidden="true" />
                        Leave workspace
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* ===== Split & Sizes ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-split">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-split" className="fs-5 fw-bold text-title mb-1">
                  {"Split & Sizes"}
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  A split button keeps the common action one click away and hides the rest. Menus inherit the trigger's size.
                </p>
              </div>
              <div className="d-flex flex-wrap align-items-center gap-2">
                <div className="btn-group">
                  <button type="button" className="btn btn-primary btn-sm">
                    Publish
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm dropdown-toggle dropdown-toggle-split"
                    id="ddSplitSm"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="visually-hidden">
                      More publish options
                    </span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="ddSplitSm">
                    <li>
                      <button type="button" className="dropdown-item">
                        Publish now
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        Schedule…
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="btn-group">
                  <button type="button" className="btn btn-outline-soft">
                    Export
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-soft dropdown-toggle dropdown-toggle-split"
                    id="ddSplitMd"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="visually-hidden">
                      More export formats
                    </span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="ddSplitMd">
                    <li>
                      <button type="button" className="dropdown-item">
                        <i data-lucide="file-spreadsheet" aria-hidden="true" />
                        CSV
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        <i data-lucide="file-json" aria-hidden="true" />
                        JSON
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        <i data-lucide="file-text" aria-hidden="true" />
                        PDF
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="btn-group">
                  <button type="button" className="btn btn-primary-soft btn-lg">
                    Deploy
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary-soft btn-lg dropdown-toggle dropdown-toggle-split"
                    id="ddSplitLg"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="visually-hidden">
                      More deploy targets
                    </span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="ddSplitLg">
                    <li>
                      <button type="button" className="dropdown-item">
                        Staging
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        Production
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* ===== Directions ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-directions">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-directions" className="fs-5 fw-bold text-title mb-1">
                  {"Directions & Alignment"}
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Menus open downward by default and flip when they run out of room. The start and end variants follow the reading direction, so they mirror in RTL.
                </p>
              </div>
              <div className="d-flex flex-wrap gap-2">
                <div className="dropup">
                  <button
                    type="button"
                    className="btn btn-outline-soft dropdown-toggle"
                    id="ddUp"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropup
                  </button>
                  {" "}
                  <ul className="dropdown-menu p-2" aria-labelledby="ddUp">
                    <li>
                      <button type="button" className="dropdown-item">
                        Newest first
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        Oldest first
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="dropend">
                  <button
                    type="button"
                    className="btn btn-outline-soft dropdown-toggle"
                    id="ddEnd"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropend
                  </button>
                  {" "}
                  <ul className="dropdown-menu p-2" aria-labelledby="ddEnd">
                    <li>
                      <button type="button" className="dropdown-item">
                        Move to…
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        Copy to…
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="dropstart">
                  <button
                    type="button"
                    className="btn btn-outline-soft dropdown-toggle"
                    id="ddStart"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropstart
                  </button>
                  {" "}
                  <ul className="dropdown-menu p-2" aria-labelledby="ddStart">
                    <li>
                      <button type="button" className="dropdown-item">
                        Compact rows
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        Comfortable rows
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="dropdown-center">
                  <button
                    type="button"
                    className="btn btn-outline-soft dropdown-toggle"
                    id="ddCenter"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Centred
                  </button>
                  {" "}
                  <ul className="dropdown-menu p-2" aria-labelledby="ddCenter">
                    <li>
                      <button type="button" className="dropdown-item">
                        Light
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        Dark
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        Match system
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn btn-outline-soft dropdown-toggle"
                    id="ddAlignEnd"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    End aligned
                  </button>
                  {" "}
                  <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="ddAlignEnd">
                    <li>
                      <button type="button" className="dropdown-item">
                        Aligned to the button's end edge
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        Useful in a right-hand toolbar
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* ===== Dropdown with Form ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-form">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-form" className="fs-5 fw-bold text-title mb-1">
                  Menus that Hold Controls
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Filters and sign-in panels live comfortably in a menu.
                  {" "}
                  <code>
                    data-bs-auto-close="outside"
                  </code>
                  {" "}
                  keeps it open while the controls are used.
                </p>
              </div>
              <div className="d-flex flex-wrap gap-2">
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn btn-outline-soft dropdown-toggle d-inline-flex align-items-center gap-2"
                    id="ddFilters"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="false"
                  >
                    <i className="icon-18" data-lucide="sliders-horizontal" aria-hidden="true" />
                    Filters
                    {" "}
                    <span className="badge-soft">
                      <bdi>
                        2
                      </bdi>
                    </span>
                  </button>
                  {" "}
                  <div className="dropdown-menu p-3">
                    <p className="fs-md fw-semibold text-title mb-2">
                      Status
                    </p>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="ddFilterOpen" defaultChecked />
                      {" "}
                      <label className="form-check-label fs-md" htmlFor="ddFilterOpen">
                        Open
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="ddFilterProgress" defaultChecked />
                      {" "}
                      <label className="form-check-label fs-md" htmlFor="ddFilterProgress">
                        In progress
                      </label>
                    </div>
                    <div className="form-check mb-3">
                      <input className="form-check-input" type="checkbox" id="ddFilterDone" />
                      {" "}
                      <label className="form-check-label fs-md" htmlFor="ddFilterDone">
                        Completed
                      </label>
                    </div>
                    <label className="form-label fs-md fw-semibold text-title" htmlFor="ddFilterOwner">
                      Owner
                    </label>
                    {" "}
                    <select className="form-select mb-3" id="ddFilterOwner" defaultValue="Anyone">
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
                    <div className="d-grid">
                      <button type="button" className="btn btn-primary btn-sm">
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn btn-primary-soft dropdown-toggle"
                    id="ddSignIn"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="false"
                  >
                    Quick sign in
                  </button>
                  {" "}
                  <form className="dropdown-menu dropdown-menu-end p-3" aria-labelledby="ddSignIn">
                    <div className="mb-3">
                      <label className="form-label fs-md fw-semibold text-title" htmlFor="ddSignInEmail">
                        Email
                      </label>
                      {" "}
                      <input type="email" className="form-control" id="ddSignInEmail" placeholder="you@company.com" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label fs-md fw-semibold text-title" htmlFor="ddSignInPass">
                        Password
                      </label>
                      {" "}
                      <input type="password" className="form-control" id="ddSignInPass" placeholder="••••••••" />
                    </div>
                    <div className="form-check mb-3">
                      <input className="form-check-input" type="checkbox" id="ddSignInRemember" />
                      {" "}
                      <label className="form-check-label fs-md" htmlFor="ddSignInRemember">
                        Remember me
                      </label>
                    </div>
                    <div className="d-grid">
                      <button type="submit" className="btn btn-primary btn-sm">
                        Sign in
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* ===== Searchable Menu ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-search">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-search" className="fs-5 fw-bold text-title mb-1">
                  {"Searchable & Scrolling"}
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  A long list gets a search box and its own scroll area, so the menu never grows past the space available.
                </p>
              </div>
              <div className="dropdown">
                <button
                  type="button"
                  className="btn btn-outline-soft dropdown-toggle d-inline-flex align-items-center gap-2"
                  id="ddSearch"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-expanded="false"
                >
                  <i className="icon-18" data-lucide="users-round" aria-hidden="true" />
                  Assign to
                </button>
                {" "}
                <div className="dropdown-menu p-2">
                  <div className="field-icon mb-2" role="search">
                    <i className="icon-18" data-lucide="search" aria-hidden="true" />
                    {" "}
                    <label className="visually-hidden" htmlFor="ddSearchInput">
                      Search people
                    </label>
                    {" "}
                    <input
                      type="search"
                      className="form-control rounded-pill"
                      id="ddSearchInput"
                      placeholder="Search people…"
                    />
                  </div>
                  <ul className="list-unstyled scroll-col-sm overflow-y-auto scrollbar-thin mb-0">
                    <li>
                      <button type="button" className="dropdown-item d-flex align-items-center gap-2">
                        <span className="avatar avatar-xs">
                          <img src="/assets/images/avatar-1.png" width="24" height="24" alt="" />
                        </span>
                        Kabir Nair
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item d-flex align-items-center gap-2">
                        <span className="avatar avatar-xs">
                          <img src="/assets/images/avatar-2.png" width="24" height="24" alt="" />
                        </span>
                        Meera Iyer
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item d-flex align-items-center gap-2">
                        <span className="avatar avatar-xs">
                          <img src="/assets/images/avatar-3.png" width="24" height="24" alt="" />
                        </span>
                        Nisha Bose
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item d-flex align-items-center gap-2">
                        <span className="avatar avatar-xs">
                          <img src="/assets/images/avatar-4.png" width="24" height="24" alt="" />
                        </span>
                        Dev Sharma
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item d-flex align-items-center gap-2">
                        <span className="avatar avatar-xs">
                          <img src="/assets/images/avatar-1.png" width="24" height="24" alt="" />
                        </span>
                        Priya Nair
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item d-flex align-items-center gap-2">
                        <span className="avatar avatar-xs">
                          <img src="/assets/images/avatar-2.png" width="24" height="24" alt="" />
                        </span>
                        Aarav Shah
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* ===== Rich Menus ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-rich">
            <div className="card-body">
              <div className="mb-4">
                <h2 id="sec-rich" className="fs-5 fw-bold text-title mb-1">
                  Rich Menus
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Wider panels carrying an identity or a feed — the same shapes the header uses for the profile and notification menus.
                </p>
              </div>
              <div className="d-flex flex-wrap gap-2">
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn btn-outline-soft d-inline-flex align-items-center gap-2 rounded-pill ps-1 pe-3"
                    id="ddProfile"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="avatar avatar-sm">
                      <img src="/assets/images/avatar-user.png" width="32" height="32" alt="" />
                    </span>
                    {" "}
                    <span className="fw-medium">
                      Ravisha V
                    </span>
                    {" "}
                    <i className="icon-16" data-lucide="chevron-down" aria-hidden="true" />
                  </button>
                  {" "}
                  <div className="dropdown-menu dropdown-menu-end p-2">
                    <div className="d-flex align-items-center gap-3 p-2 mb-1">
                      <span className="avatar">
                        <img src="/assets/images/avatar-user.png" width="40" height="40" alt="" />
                      </span>
                      <div className="min-w-0">
                        <p className="fs-md fw-semibold text-title text-truncate mb-0">
                          Ravisha Verma
                        </p>
                        <p className="fs-sm text-muted-2 text-truncate mb-0">
                          ravisha@vionex.com
                        </p>
                      </div>
                    </div>
                    <hr className="dropdown-divider" />
                    <a className="dropdown-item" href="/user-profile">
                      <i data-lucide="user-round" aria-hidden="true" />
                      My profile
                    </a>
                    {" "}
                    <a className="dropdown-item" href="/settings">
                      <i data-lucide="settings" aria-hidden="true" />
                      Settings
                    </a>
                    {" "}
                    <a className="dropdown-item" href="/pricing">
                      <i data-lucide="credit-card" aria-hidden="true" />
                      Billing
                    </a>
                    <hr className="dropdown-divider" />
                    <a className="dropdown-item dropdown-item-danger" href="/login">
                      <i data-lucide="log-out" aria-hidden="true" />
                      Sign out
                    </a>
                  </div>
                </div>
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn btn-outline-soft btn-18 rounded-circle position-relative"
                    id="ddNotif"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    aria-label="Notifications"
                  >
                    <i className="icon-18" data-lucide="bell" aria-hidden="true" />
                    {" "}
                    <span className="notif-count position-absolute" aria-hidden="true">
                      <bdi>
                        3
                      </bdi>
                    </span>
                  </button>
                  {" "}
                  <div className="dropdown-menu dropdown-menu-end p-2">
                    <div className="d-flex align-items-center justify-content-between gap-2 p-2">
                      <p className="fs-md fw-semibold text-title mb-0">
                        Notifications
                      </p>
                      <button type="button" className="btn btn-ghost btn-sm">
                        Mark all read
                      </button>
                    </div>
                    <hr className="dropdown-divider" />
                    <ul className="list-unstyled mb-0">
                      <li className="d-flex align-items-start gap-2 p-2">
                        <span className="icon-box icon-box-sm tint-emerald" aria-hidden="true">
                          <i data-lucide="circle-check" />
                        </span>
                        <div className="min-w-0">
                          <p className="fs-md fw-medium text-title mb-0">
                            Deployment finished
                          </p>
                          <p className="fs-sm text-muted-2 mb-0">
                            <bdi>
                              4 minutes ago
                            </bdi>
                          </p>
                        </div>
                      </li>
                      <li className="d-flex align-items-start gap-2 p-2">
                        <span className="icon-box icon-box-sm tint-amber" aria-hidden="true">
                          <i data-lucide="clock" />
                        </span>
                        <div className="min-w-0">
                          <p className="fs-md fw-medium text-title mb-0">
                            Two approvals waiting
                          </p>
                          <p className="fs-sm text-muted-2 mb-0">
                            <bdi>
                              1 hour ago
                            </bdi>
                          </p>
                        </div>
                      </li>
                      <li className="d-flex align-items-start gap-2 p-2">
                        <span className="icon-box icon-box-sm tint-rose" aria-hidden="true">
                          <i data-lucide="triangle-alert" />
                        </span>
                        <div className="min-w-0">
                          <p className="fs-md fw-medium text-title mb-0">
                            Card expires this month
                          </p>
                          <p className="fs-sm text-muted-2 mb-0">
                            <bdi>
                              Yesterday
                            </bdi>
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn btn-outline-soft d-inline-flex align-items-center gap-2"
                    id="ddWorkspace"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="avatar avatar-xs bg-grad-2" aria-hidden="true">
                      VH
                    </span>
                    {" "}
                    <span className="fw-medium">
                      Vionex HQ
                    </span>
                    {" "}
                    <i className="icon-16" data-lucide="chevrons-up-down" aria-hidden="true" />
                  </button>
                  {" "}
                  <div className="dropdown-menu p-2">
                    <h3 className="dropdown-header fs-sm fw-semibold text-uppercase">
                      Switch workspace
                    </h3>
                    <button
                      type="button"
                      className="dropdown-item active d-flex align-items-center gap-2"
                      aria-current="true"
                    >
                      <span className="avatar avatar-xs bg-grad-2" aria-hidden="true">
                        VH
                      </span>
                      {" "}
                      <span className="min-w-0 flex-grow-1">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-truncate">
                          Vionex HQ
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-truncate">
                          <bdi>
                            25
                          </bdi>
                          {" "}
                          members
                        </span>
                        {" "}
                      </span>
                    </button>
                    {" "}
                    <button type="button" className="dropdown-item d-flex align-items-center gap-2">
                      <span className="avatar avatar-xs bg-grad-4" aria-hidden="true">
                        NR
                      </span>
                      {" "}
                      <span className="min-w-0 flex-grow-1">
                        {" "}
                        <span className="d-block fs-md fw-semibold text-truncate">
                          Northwind Retail
                        </span>
                        {" "}
                        <span className="d-block fs-xs text-muted-2 text-truncate">
                          <bdi>
                            8
                          </bdi>
                          {" "}
                          members
                        </span>
                        {" "}
                      </span>
                    </button>
                    <hr className="dropdown-divider" />
                    <button type="button" className="dropdown-item">
                      <i data-lucide="plus" aria-hidden="true" />
                      New workspace
                    </button>
                  </div>
                </div>
              </div>
              <p className="fs-sm text-muted-2 mt-3 mb-2">
                Menus carrying image content
              </p>
              <div className="d-flex flex-wrap align-items-center gap-2">
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn btn-outline-soft d-inline-flex align-items-center gap-2"
                    id="ddLocale"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src="/assets/images/flag-us.svg" width="20" height="20" alt="" className="flag" />
                    {" "}
                    <span className="fw-medium">
                      English (US)
                    </span>
                    {" "}
                    <i className="icon-16" data-lucide="chevron-down" aria-hidden="true" />
                  </button>
                  {" "}
                  <ul className="dropdown-menu p-2" aria-labelledby="ddLocale">
                    <li>
                      <button type="button" className="dropdown-item active" aria-current="true">
                        <img src="/assets/images/flag-us.svg" width="20" height="20" alt="" className="flag" />
                        English (US)
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        <img src="/assets/images/flag-fr.svg" width="20" height="20" alt="" className="flag" />
                        Français
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        <img src="/assets/images/flag-it.svg" width="20" height="20" alt="" className="flag" />
                        Italiano
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        <img src="/assets/images/flag-in.svg" width="20" height="20" alt="" className="flag" />
                        हिन्दी
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn btn-outline-soft d-inline-flex align-items-center gap-2"
                    id="ddShare"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="icon-18" data-lucide="share-2" aria-hidden="true" />
                    Share
                  </button>
                  {" "}
                  <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="ddShare">
                    <li>
                      <button type="button" className="dropdown-item">
                        <i data-lucide="link" aria-hidden="true" />
                        Copy link
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        <i data-lucide="mail" aria-hidden="true" />
                        Email a copy
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        <i data-lucide="printer" aria-hidden="true" />
                        Print
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* ===== Menus in a Scrolling Pane ===== */}
        <div className="col-12 col-xl-6">
          <section className="card h-100 mb-0" aria-labelledby="sec-pane">
            <div className="card-body d-flex flex-column">
              <div className="mb-4">
                <h2 id="sec-pane" className="fs-5 fw-bold text-title mb-1">
                  Menus in a Scrolling Pane
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  A menu inside a scroll area would normally be cut off by it. Add
                  {" "}
                  <code>
                    data-dd-fixed
                  </code>
                  {" "}
                  and the theme positions it so it escapes the clip, stays inside the pane, and scrolls itself if the list is taller than the space.
                </p>
              </div>
              <ul className="list-unstyled scroll-col-sm overflow-y-auto scrollbar-thin border-soft rounded-4 p-2 mb-0">
                <li className="d-flex align-items-center gap-2 p-2">
                  <span className="icon-box icon-box-sm tint-primary" aria-hidden="true">
                    <i data-lucide="file-text" />
                  </span>
                  <span className="fs-md fw-medium text-title flex-grow-1 min-w-0 text-truncate">
                    Product Launch Brief
                  </span>
                  <div className="dropdown flex-shrink-0">
                    <button
                      type="button"
                      className="btn btn-ghost btn-18 rounded-circle"
                      id="ddPaneA"
                      data-bs-toggle="dropdown"
                      data-dd-fixed=""
                      data-bs-offset="0,8"
                      aria-expanded="false"
                      aria-label="Actions for Product Launch Brief"
                    >
                      <i className="icon-18" data-lucide="ellipsis-vertical" aria-hidden="true" />
                    </button>
                    {" "}
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-compact p-2" aria-labelledby="ddPaneA">
                      <li>
                        <button type="button" className="dropdown-item">
                          <i data-lucide="eye" aria-hidden="true" />
                          Preview
                        </button>
                      </li>
                      <li>
                        <button type="button" className="dropdown-item">
                          <i data-lucide="download" aria-hidden="true" />
                          Download
                        </button>
                      </li>
                      <li>
                        <button type="button" className="dropdown-item">
                          <i data-lucide="pencil" aria-hidden="true" />
                          Rename
                        </button>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <button type="button" className="dropdown-item dropdown-item-danger">
                          <i data-lucide="trash-2" aria-hidden="true" />
                          Delete
                        </button>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="d-flex align-items-center gap-2 p-2">
                  <span className="icon-box icon-box-sm tint-emerald" aria-hidden="true">
                    <i data-lucide="file-spreadsheet" />
                  </span>
                  <span className="fs-md fw-medium text-title flex-grow-1 min-w-0 text-truncate">
                    Q3 Revenue Forecast
                  </span>
                  <div className="dropdown flex-shrink-0">
                    <button
                      type="button"
                      className="btn btn-ghost btn-18 rounded-circle"
                      id="ddPaneB"
                      data-bs-toggle="dropdown"
                      data-dd-fixed=""
                      data-bs-offset="0,8"
                      aria-expanded="false"
                      aria-label="Actions for Q3 Revenue Forecast"
                    >
                      <i className="icon-18" data-lucide="ellipsis-vertical" aria-hidden="true" />
                    </button>
                    {" "}
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-compact p-2" aria-labelledby="ddPaneB">
                      <li>
                        <button type="button" className="dropdown-item">
                          <i data-lucide="eye" aria-hidden="true" />
                          Preview
                        </button>
                      </li>
                      <li>
                        <button type="button" className="dropdown-item">
                          <i data-lucide="download" aria-hidden="true" />
                          Download
                        </button>
                      </li>
                      <li>
                        <button type="button" className="dropdown-item">
                          <i data-lucide="pencil" aria-hidden="true" />
                          Rename
                        </button>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <button type="button" className="dropdown-item dropdown-item-danger">
                          <i data-lucide="trash-2" aria-hidden="true" />
                          Delete
                        </button>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="d-flex align-items-center gap-2 p-2">
                  <span className="icon-box icon-box-sm tint-rose" aria-hidden="true">
                    <i data-lucide="file-image" />
                  </span>
                  <span className="fs-md fw-medium text-title flex-grow-1 min-w-0 text-truncate">
                    Autumn Campaign Hero
                  </span>
                  <div className="dropdown flex-shrink-0">
                    <button
                      type="button"
                      className="btn btn-ghost btn-18 rounded-circle"
                      id="ddPaneC"
                      data-bs-toggle="dropdown"
                      data-dd-fixed=""
                      data-bs-offset="0,8"
                      aria-expanded="false"
                      aria-label="Actions for Autumn Campaign Hero"
                    >
                      <i className="icon-18" data-lucide="ellipsis-vertical" aria-hidden="true" />
                    </button>
                    {" "}
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-compact p-2" aria-labelledby="ddPaneC">
                      <li>
                        <button type="button" className="dropdown-item">
                          <i data-lucide="eye" aria-hidden="true" />
                          Preview
                        </button>
                      </li>
                      <li>
                        <button type="button" className="dropdown-item">
                          <i data-lucide="download" aria-hidden="true" />
                          Download
                        </button>
                      </li>
                      <li>
                        <button type="button" className="dropdown-item">
                          <i data-lucide="pencil" aria-hidden="true" />
                          Rename
                        </button>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <button type="button" className="dropdown-item dropdown-item-danger">
                          <i data-lucide="trash-2" aria-hidden="true" />
                          Delete
                        </button>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="d-flex align-items-center gap-2 p-2">
                  <span className="icon-box icon-box-sm tint-amber" aria-hidden="true">
                    <i data-lucide="file-archive" />
                  </span>
                  <span className="fs-md fw-medium text-title flex-grow-1 min-w-0 text-truncate">
                    Legacy Assets Backup
                  </span>
                  <div className="dropdown flex-shrink-0">
                    <button
                      type="button"
                      className="btn btn-ghost btn-18 rounded-circle"
                      id="ddPaneD"
                      data-bs-toggle="dropdown"
                      data-dd-fixed=""
                      data-bs-offset="0,8"
                      aria-expanded="false"
                      aria-label="Actions for Legacy Assets Backup"
                    >
                      <i className="icon-18" data-lucide="ellipsis-vertical" aria-hidden="true" />
                    </button>
                    {" "}
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-compact p-2" aria-labelledby="ddPaneD">
                      <li>
                        <button type="button" className="dropdown-item">
                          <i data-lucide="eye" aria-hidden="true" />
                          Preview
                        </button>
                      </li>
                      <li>
                        <button type="button" className="dropdown-item">
                          <i data-lucide="download" aria-hidden="true" />
                          Download
                        </button>
                      </li>
                      <li>
                        <button type="button" className="dropdown-item">
                          <i data-lucide="pencil" aria-hidden="true" />
                          Rename
                        </button>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <button type="button" className="dropdown-item dropdown-item-danger">
                          <i data-lucide="trash-2" aria-hidden="true" />
                          Delete
                        </button>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
      {/* ========== FOOTER ========== */}
    </AppShell>
  );
}

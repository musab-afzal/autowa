/* Generated from the Vionex HTML theme by scripts/convert-html.mjs */
import AppShell from "@/components/AppShell";

export const metadata = {
  title: "Vionex — Cryptocurrency Dashboard",
  description: "Vionex enterprise admin dashboard — Cryptocurrency operations overview built with Bootstrap 5, CSS variables and a scalable design system.",
};

const scripts = [
    "/assets/js/jquery.min.js",
    "/assets/js/bootstrap.bundle.min.js",
    "/assets/js/lucide.min.js",
    "/assets/js/apexcharts.min.js",
    "/assets/js/echarts.min.js",
    "/assets/js/jsvectormap.min.js",
    "/assets/js/jsvectormap-world.js",
    "/assets/js/maps.js",
    "/assets/js/dashboard.js",
    "/assets/js/charts.js",
    "/assets/js/echarts-dashboard.js",
  ];

export default function Page() {
  return (
    <AppShell
      scripts={scripts}
      header={
      <>
        <header className="app-header on-dark d-flex align-items-center gap-2 gap-md-3 px-3 px-lg-4 flex-shrink-0">
          <button
            type="button"
            className="icon-btn transition-base d-lg-none"
            data-action="toggle-sidebar"
            aria-label="Toggle menu"
          >
            <i data-lucide="menu" />
          </button>
          <button
            type="button"
            className="icon-btn transition-base header-expand"
            data-action="toggle-sidebar"
            aria-label="Expand sidebar"
            title="Expand sidebar"
          >
            <i data-lucide="panel-left-open" />
          </button>
          <div className="header-search d-none d-sm-block" role="search">
            <i data-lucide="search" />
            {" "}
            <input type="search" id="globalSearch" name="q" placeholder="Global search" aria-label="Global search" />
            {" "}
            <kbd>
              ⌘ F
            </kbd>
          </div>
          <div className="d-flex align-items-center gap-2 gap-md-3 ms-auto">
            <button
              type="button"
              className="icon-btn transition-base"
              data-bs-toggle="offcanvas"
              data-bs-target="#customizer"
              aria-controls="customizer"
              aria-label="Theme settings"
            >
              <i data-lucide="settings" />
            </button>
            <button
              type="button"
              className="icon-btn transition-base d-none d-sm-inline-flex"
              data-action="toggle-mode"
              aria-label="Toggle theme"
            >
              <i data-lucide="moon" data-mode-icon="" />
            </button>
            {/* ========== NOTIFICATION CENTER ========== */}
            <div className="dropdown">
              <button
                className="icon-btn transition-base"
                type="button"
                id="notifToggle"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                data-bs-offset="0,10"
                aria-expanded="false"
                aria-label="Notifications, 3 unread"
              >
                <i data-lucide="bell" />
                <span className="notif-count" data-notif-count="">
                  3
                </span>
              </button>
              {" "}
              <div className="dropdown-menu dropdown-menu-end notif-menu p-0">
                <div className="d-flex align-items-center justify-content-between p-3 border-b-soft">
                  <span className="d-flex align-items-center gap-2">
                    <span className="fw-semibold text-title">
                      Notifications
                    </span>
                    <span className="badge-soft" data-notif-pill="">
                      3 New
                    </span>
                  </span>
                  <button className="btn btn-ghost btn-sm px-2 py-1" type="button" data-action="notif-read-all">
                    Mark all read
                  </button>
                </div>
                <div className="notif-body overflow-y-auto p-2 scrollbar-thin" data-notif-body="">
                  <div className="notif-state d-none" data-notif-loading="">
                    <span className="spinner-border spinner-border-sm" role="status">
                      <span className="visually-hidden">
                        Loading…
                      </span>
                    </span>
                    <p className="fs-md text-body-2 mb-0 mt-2">
                      Loading notifications…
                    </p>
                  </div>
                  {" "}
                  <div className="notif-state d-none" data-notif-empty="">
                    <span className="notif-empty-icon">
                      <i data-lucide="bell-off" />
                    </span>
                    <p className="fw-semibold text-title mb-1 mt-2">
                      You're all caught up
                    </p>
                    <p className="fs-md text-body-2 mb-0">
                      No new notifications right now.
                    </p>
                  </div>
                  <div className="notif-list d-flex flex-column" data-notif-list="">
                    <a href="#" className="notif-item unread">
                      <span className="feed-icon tint-success">
                        <i data-lucide="circle-check-big" />
                      </span>
                      <span className="notif-content d-flex flex-column">
                        <span className="notif-title">
                          Model deployed
                        </span>
                        <span className="notif-text">
                          GPT-4o fine-tune v3 is live in production.
                        </span>
                        <span className="notif-time">
                          <i data-lucide="clock" />
                          2 min ago
                        </span>
                      </span>
                      <span className="notif-unread-dot" role="img" aria-label="Unread" />
                    </a>
                    <a href="#" className="notif-item unread">
                      <span className="feed-icon tint-primary">
                        <i data-lucide="user-round-plus" />
                      </span>
                      <span className="notif-content d-flex flex-column">
                        <span className="notif-title">
                          New team member
                        </span>
                        <span className="notif-text">
                          Priya Nair joined the AI Research workspace.
                        </span>
                        <span className="notif-time">
                          <i data-lucide="clock" />
                          25 min ago
                        </span>
                      </span>
                      <span className="notif-unread-dot" role="img" aria-label="Unread" />
                    </a>
                    <a href="#" className="notif-item unread">
                      <span className="feed-icon tint-warning">
                        <i data-lucide="triangle-alert" />
                      </span>
                      <span className="notif-content d-flex flex-column">
                        <span className="notif-title">
                          GPU quota almost full
                        </span>
                        <span className="notif-text">
                          You've used 92% of this month's compute budget.
                        </span>
                        <span className="notif-time">
                          <i data-lucide="clock" />
                          1 hour ago
                        </span>
                      </span>
                      <span className="notif-unread-dot" role="img" aria-label="Unread" />
                    </a>
                    <a href="#" className="notif-item">
                      <span className="feed-icon tint-info">
                        <i data-lucide="message-square" />
                      </span>
                      <span className="notif-content d-flex flex-column">
                        <span className="notif-title">
                          New comment
                        </span>
                        <span className="notif-text">
                          Mark replied to your report “Q2 Token Spend”.
                        </span>
                        <span className="notif-time">
                          <i data-lucide="clock" />
                          Yesterday
                        </span>
                      </span>
                      <span className="notif-unread-dot" aria-hidden="true" />
                    </a>
                  </div>
                </div>
                <div className="notif-foot p-2">
                  <a href="#" className="d-flex align-items-center justify-content-center gap-2 fw-medium">
                    View all notifications
                    <i data-lucide="arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <span className="vr d-none d-md-block opacity-25" />
            {/* ========== PROFILE MENU ========== */}
            <div className="dropdown">
              <button
                type="button"
                className="header-user d-flex align-items-center gap-2 p-1 rounded-pill transition-base"
                id="profileToggle"
                data-bs-toggle="dropdown"
                data-bs-offset="0,10"
                aria-expanded="false"
                aria-label="Open profile menu"
              >
                <span className="avatar radius-md">
                  <img src="/assets/images/avatar-user.png" width="45" height="45" alt="Ravisha V" />
                </span>
                <span className="d-none d-xl-block lh-sm text-start pe-1">
                  {" "}
                  <span className="d-block fs-md text-muted-2">
                    Hey, Welcome!
                  </span>
                  {" "}
                  <span className="d-block fw-medium text-title">
                    Ravisha V
                  </span>
                  {" "}
                </span>
                <i data-lucide="chevron-down" className="d-none d-xl-block dd-caret icon-18" />
              </button>
              {" "}
              <div className="dropdown-menu dropdown-menu-end profile-menu p-0">
                <div className="d-flex align-items-center gap-3 p-3 bg-soft border-b-soft">
                  <span className="avatar avatar-lg radius-md">
                    <img src="/assets/images/avatar-user.png" width="56" height="56" alt="" />
                  </span>
                  <span className="lh-sm overflow-hidden">
                    {" "}
                    <span className="d-block fw-semibold text-title text-truncate">
                      Ravisha V
                    </span>
                    {" "}
                    <span className="d-block fs-md text-body-2 text-truncate">
                      ravisha@vionex.com
                    </span>
                    {" "}
                    <span className="badge-soft d-inline-block mt-1">
                      Administrator
                    </span>
                    {" "}
                  </span>
                </div>
                <div className="p-2">
                  <a href="/user-profile" className="dropdown-item">
                    <i data-lucide="user-round" />
                    My Profile
                  </a>
                  {" "}
                  <a href="/settings" className="dropdown-item">
                    <i data-lucide="settings" />
                    Account Settings
                  </a>
                  {" "}
                  <a href="/pricing" className="dropdown-item">
                    <i data-lucide="wallet" />
                    {"Billing & Plans"}
                  </a>
                  {" "}
                  <a href="#" className="dropdown-item">
                    <i data-lucide="life-buoy" />
                    {"Help & Support"}
                  </a>
                </div>
                <div className="dropdown-divider" />
                <div className="p-2">
                  <a href="/login" className="dropdown-item dropdown-item-danger">
                    <i data-lucide="log-out" />
                    Log out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    }
    >
      {/* ===== Page header ===== */}
      <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
        <h1 className="fs-4 fw-bold text-title mb-0">
          Cryptocurrency Dashboard
        </h1>
        <nav aria-label="breadcrumb" className="d-none d-md-block">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="/">
                Dashboard
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Cryptocurrency Dashboard
            </li>
          </ol>
        </nav>
      </div>
      {/* ===== Dashboard sections go here ===== */}
      {/* ===== Market KPIs ===== */}
      <section className="mb-4">
        <h2 className="visually-hidden">
          Key cryptocurrency metrics
        </h2>
        <ul className="list-unstyled row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-5 g-3 mb-0">
          <li className="col">
            <div className="card overflow-hidden h-100">
              <div className="card-body d-flex flex-column gap-3">
                <div className="d-flex align-items-center justify-content-between gap-2">
                  <span className="icon-box rounded-circle tint-blue border-current" aria-hidden="true">
                    <i data-lucide="wallet" />
                  </span>
                  <span className="badge-soft tint-success border-current d-inline-flex align-items-center gap-2 px-2">
                    {" "}
                    <i className="icon-14 flip-rtl" data-lucide="arrow-up-right" aria-hidden="true" />
                    <bdi>
                      +2.1%
                    </bdi>
                    {" "}
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="fs-2 fw-bold text-title text-truncate lh-1 mb-2">
                    <bdi>
                      $128,245.32
                    </bdi>
                  </p>
                  <h3 className="fs-sm fw-semibold text-body-2 mb-0">
                    Total Portfolio
                  </h3>
                </div>
                <p className="fs-xs fw-medium text-muted-2 text-capitalize mt-auto mb-0">
                  vs last month
                </p>
              </div>
              <span className="accent-edge-b accent-edge-b-flat text-cat-blue" aria-hidden="true" />
            </div>
          </li>
          <li className="col">
            <div className="card overflow-hidden h-100">
              <div className="card-body d-flex flex-column gap-3">
                <div className="d-flex align-items-center justify-content-between gap-2">
                  <span className="icon-box rounded-circle tint-violet border-current" aria-hidden="true">
                    <i data-lucide="trending-up" />
                  </span>
                  <span className="badge-soft tint-success border-current d-inline-flex align-items-center gap-2 px-2">
                    {" "}
                    <i className="icon-14 flip-rtl" data-lucide="arrow-up-right" aria-hidden="true" />
                    <bdi>
                      +2.1%
                    </bdi>
                    {" "}
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="fs-2 fw-bold text-title text-truncate lh-1 mb-2">
                    <bdi>
                      $45,782.66
                    </bdi>
                  </p>
                  <h3 className="fs-sm fw-semibold text-body-2 mb-0">
                    Safe Volume
                  </h3>
                </div>
                <p className="fs-xs fw-medium text-muted-2 text-capitalize mt-auto mb-0">
                  rolling 24 hours
                </p>
              </div>
              <span className="accent-edge-b accent-edge-b-flat text-cat-violet" aria-hidden="true" />
            </div>
          </li>
          <li className="col">
            <div className="card overflow-hidden h-100">
              <div className="card-body d-flex flex-column gap-3">
                <div className="d-flex align-items-center justify-content-between gap-2">
                  <span className="icon-box rounded-circle tint-emerald border-current" aria-hidden="true">
                    <i data-lucide="receipt" />
                  </span>
                  <span className="badge-soft tint-success border-current d-inline-flex align-items-center gap-2 px-2">
                    {" "}
                    <i className="icon-14 flip-rtl" data-lucide="arrow-up-right" aria-hidden="true" />
                    <bdi>
                      +2.1%
                    </bdi>
                    {" "}
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="fs-2 fw-bold text-title text-truncate lh-1 mb-2">
                    <bdi>
                      $18,573.21
                    </bdi>
                  </p>
                  <h3 className="fs-sm fw-semibold text-body-2 mb-0">
                    Total Sale
                  </h3>
                </div>
                <p className="fs-xs fw-medium text-muted-2 text-capitalize mt-auto mb-0">
                  all time realized
                </p>
              </div>
              <span className="accent-edge-b accent-edge-b-flat text-cat-emerald" aria-hidden="true" />
            </div>
          </li>
          <li className="col">
            <div className="card overflow-hidden h-100">
              <div className="card-body d-flex flex-column gap-3">
                <div className="d-flex align-items-center justify-content-between gap-2">
                  <span className="icon-box rounded-circle tint-amber border-current" aria-hidden="true">
                    <i data-lucide="globe" />
                  </span>
                  <span className="badge-soft tint-success border-current d-inline-flex align-items-center gap-2 px-2">
                    {" "}
                    <i className="icon-14 flip-rtl" data-lucide="arrow-up-right" aria-hidden="true" />
                    <bdi>
                      +2.1%
                    </bdi>
                    {" "}
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="fs-2 fw-bold text-title text-truncate lh-1 mb-2">
                    <bdi>
                      $2.63T
                    </bdi>
                  </p>
                  <h3 className="fs-sm fw-semibold text-body-2 mb-0">
                    Market Cap
                  </h3>
                </div>
                <p className="fs-xs fw-medium text-muted-2 text-capitalize mt-auto mb-0">
                  global crypto market
                </p>
              </div>
              <span className="accent-edge-b accent-edge-b-flat text-cat-orange" aria-hidden="true" />
            </div>
          </li>
          <li className="col">
            <div className="card overflow-hidden h-100">
              <div className="card-body d-flex flex-column gap-3">
                <div className="d-flex align-items-center justify-content-between gap-2">
                  <span className="icon-box rounded-circle tint-danger border-current" aria-hidden="true">
                    <i data-lucide="percent" />
                  </span>
                  <span className="badge-soft tint-danger border-current d-inline-flex align-items-center gap-2 px-2">
                    {" "}
                    <i className="icon-14 flip-rtl" data-lucide="arrow-down-left" aria-hidden="true" />
                    <bdi>
                      +2.1%
                    </bdi>
                    {" "}
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="fs-2 fw-bold text-title text-truncate lh-1 mb-2">
                    <bdi>
                      52.35%
                    </bdi>
                  </p>
                  <h3 className="fs-sm fw-semibold text-body-2 mb-0">
                    BTC Dominance
                  </h3>
                </div>
                <p className="fs-xs fw-medium text-muted-2 text-capitalize mt-auto mb-0">
                  of total market cap
                </p>
              </div>
              <span className="accent-edge-b accent-edge-b-flat text-cat-red" aria-hidden="true" />
            </div>
          </li>
        </ul>
      </section>
      {/* ===== Live market ticker ===== */}
      <section className="on-dark bg-nav-deep border-soft rounded-1 overflow-hidden flex-shrink-0 mb-4">
        <h2 className="visually-hidden">
          Live cryptocurrency prices
        </h2>
        <div className="marquee marquee-fade">
          <ul
            className="marquee-track list-unstyled d-flex align-items-stretch mb-0"
            aria-label="Live cryptocurrency market data"
          >
            <li className="scroll-col-sm border-e-soft d-flex align-items-center justify-content-between gap-2 px-3 py-2">
              <span className="min-w-0">
                {" "}
                <span className="d-block fs-xs fw-semibold text-uppercase text-title text-truncate">
                  BTC/USD
                </span>
                {" "}
                <span className="d-block fs-6 fw-bold text-primary text-truncate">
                  <bdi>
                    $67,450.32
                  </bdi>
                </span>
                {" "}
              </span>
              <span className="badge-soft tint-emerald border-current flex-shrink-0 fs-xs fw-bold">
                <bdi>
                  +4.2%
                </bdi>
              </span>
            </li>
            <li className="scroll-col-sm border-e-soft d-flex align-items-center justify-content-between gap-2 px-3 py-2">
              <span className="min-w-0">
                {" "}
                <span className="d-block fs-xs fw-semibold text-uppercase text-title text-truncate">
                  ETH/USD
                </span>
                {" "}
                <span className="d-block fs-6 fw-bold text-primary text-truncate">
                  <bdi>
                    $3,580.15
                  </bdi>
                </span>
                {" "}
              </span>
              <span className="badge-soft tint-emerald border-current flex-shrink-0 fs-xs fw-bold">
                <bdi>
                  +6.8%
                </bdi>
              </span>
            </li>
            <li className="scroll-col-sm border-e-soft d-flex align-items-center justify-content-between gap-2 px-3 py-2">
              <span className="min-w-0">
                {" "}
                <span className="d-block fs-xs fw-semibold text-uppercase text-title text-truncate">
                  SOL/USD
                </span>
                {" "}
                <span className="d-block fs-6 fw-bold text-primary text-truncate">
                  <bdi>
                    $178.50
                  </bdi>
                </span>
                {" "}
              </span>
              <span className="badge-soft tint-emerald border-current flex-shrink-0 fs-xs fw-bold">
                <bdi>
                  +12.3%
                </bdi>
              </span>
            </li>
            <li className="scroll-col-sm border-e-soft d-flex align-items-center justify-content-between gap-2 px-3 py-2">
              <span className="min-w-0">
                {" "}
                <span className="d-block fs-xs fw-semibold text-uppercase text-title text-truncate">
                  BNB/USD
                </span>
                {" "}
                <span className="d-block fs-6 fw-bold text-primary text-truncate">
                  <bdi>
                    $612.40
                  </bdi>
                </span>
                {" "}
              </span>
              <span className="badge-soft tint-rose border-current flex-shrink-0 fs-xs fw-bold">
                <bdi>
                  -1.2%
                </bdi>
              </span>
            </li>
            <li className="scroll-col-sm border-e-soft d-flex align-items-center justify-content-between gap-2 px-3 py-2">
              <span className="min-w-0">
                {" "}
                <span className="d-block fs-xs fw-semibold text-uppercase text-title text-truncate">
                  XRP/USD
                </span>
                {" "}
                <span className="d-block fs-6 fw-bold text-primary text-truncate">
                  <bdi>
                    $0.5842
                  </bdi>
                </span>
                {" "}
              </span>
              <span className="badge-soft tint-emerald border-current flex-shrink-0 fs-xs fw-bold">
                <bdi>
                  +3.5%
                </bdi>
              </span>
            </li>
            <li className="scroll-col-sm border-e-soft d-flex align-items-center justify-content-between gap-2 px-3 py-2">
              <span className="min-w-0">
                {" "}
                <span className="d-block fs-xs fw-semibold text-uppercase text-title text-truncate">
                  ADA/USD
                </span>
                {" "}
                <span className="d-block fs-6 fw-bold text-primary text-truncate">
                  <bdi>
                    $0.62
                  </bdi>
                </span>
                {" "}
              </span>
              <span className="badge-soft tint-emerald border-current flex-shrink-0 fs-xs fw-bold">
                <bdi>
                  +8.7%
                </bdi>
              </span>
            </li>
            <li className="scroll-col-sm border-e-soft d-flex align-items-center justify-content-between gap-2 px-3 py-2">
              <span className="min-w-0">
                {" "}
                <span className="d-block fs-xs fw-semibold text-uppercase text-title text-truncate">
                  AVAX/USD
                </span>
                {" "}
                <span className="d-block fs-6 fw-bold text-primary text-truncate">
                  <bdi>
                    $42.30
                  </bdi>
                </span>
                {" "}
              </span>
              <span className="badge-soft tint-emerald border-current flex-shrink-0 fs-xs fw-bold">
                <bdi>
                  +9.5%
                </bdi>
              </span>
            </li>
            <li className="scroll-col-sm border-e-soft d-flex align-items-center justify-content-between gap-2 px-3 py-2">
              <span className="min-w-0">
                {" "}
                <span className="d-block fs-xs fw-semibold text-uppercase text-title text-truncate">
                  DOT/USD
                </span>
                {" "}
                <span className="d-block fs-6 fw-bold text-primary text-truncate">
                  <bdi>
                    $8.45
                  </bdi>
                </span>
                {" "}
              </span>
              <span className="badge-soft tint-emerald border-current flex-shrink-0 fs-xs fw-bold">
                <bdi>
                  +7.1%
                </bdi>
              </span>
            </li>
            {/* Second copy — the marquee keyframes travel -50%, so the track has
               to hold exactly two copies for the loop to be seamless. Hidden
               from assistive tech so the list is still announced once. */}
            <li
              className="scroll-col-sm border-e-soft d-flex align-items-center justify-content-between gap-2 px-3 py-2"
              aria-hidden="true"
            >
              <span className="min-w-0">
                {" "}
                <span className="d-block fs-xs fw-semibold text-uppercase text-title text-truncate">
                  BTC/USD
                </span>
                {" "}
                <span className="d-block fs-6 fw-bold text-primary text-truncate">
                  <bdi>
                    $67,450.32
                  </bdi>
                </span>
                {" "}
              </span>
              <span className="badge-soft tint-emerald border-current flex-shrink-0 fs-xs fw-bold">
                <bdi>
                  +4.2%
                </bdi>
              </span>
            </li>
            <li
              className="scroll-col-sm border-e-soft d-flex align-items-center justify-content-between gap-2 px-3 py-2"
              aria-hidden="true"
            >
              <span className="min-w-0">
                {" "}
                <span className="d-block fs-xs fw-semibold text-uppercase text-title text-truncate">
                  ETH/USD
                </span>
                {" "}
                <span className="d-block fs-6 fw-bold text-primary text-truncate">
                  <bdi>
                    $3,580.15
                  </bdi>
                </span>
                {" "}
              </span>
              <span className="badge-soft tint-emerald border-current flex-shrink-0 fs-xs fw-bold">
                <bdi>
                  +6.8%
                </bdi>
              </span>
            </li>
            <li
              className="scroll-col-sm border-e-soft d-flex align-items-center justify-content-between gap-2 px-3 py-2"
              aria-hidden="true"
            >
              <span className="min-w-0">
                {" "}
                <span className="d-block fs-xs fw-semibold text-uppercase text-title text-truncate">
                  SOL/USD
                </span>
                {" "}
                <span className="d-block fs-6 fw-bold text-primary text-truncate">
                  <bdi>
                    $178.50
                  </bdi>
                </span>
                {" "}
              </span>
              <span className="badge-soft tint-emerald border-current flex-shrink-0 fs-xs fw-bold">
                <bdi>
                  +12.3%
                </bdi>
              </span>
            </li>
            <li
              className="scroll-col-sm border-e-soft d-flex align-items-center justify-content-between gap-2 px-3 py-2"
              aria-hidden="true"
            >
              <span className="min-w-0">
                {" "}
                <span className="d-block fs-xs fw-semibold text-uppercase text-title text-truncate">
                  BNB/USD
                </span>
                {" "}
                <span className="d-block fs-6 fw-bold text-primary text-truncate">
                  <bdi>
                    $612.40
                  </bdi>
                </span>
                {" "}
              </span>
              <span className="badge-soft tint-rose border-current flex-shrink-0 fs-xs fw-bold">
                <bdi>
                  -1.2%
                </bdi>
              </span>
            </li>
            <li
              className="scroll-col-sm border-e-soft d-flex align-items-center justify-content-between gap-2 px-3 py-2"
              aria-hidden="true"
            >
              <span className="min-w-0">
                {" "}
                <span className="d-block fs-xs fw-semibold text-uppercase text-title text-truncate">
                  XRP/USD
                </span>
                {" "}
                <span className="d-block fs-6 fw-bold text-primary text-truncate">
                  <bdi>
                    $0.5842
                  </bdi>
                </span>
                {" "}
              </span>
              <span className="badge-soft tint-emerald border-current flex-shrink-0 fs-xs fw-bold">
                <bdi>
                  +3.5%
                </bdi>
              </span>
            </li>
            <li
              className="scroll-col-sm border-e-soft d-flex align-items-center justify-content-between gap-2 px-3 py-2"
              aria-hidden="true"
            >
              <span className="min-w-0">
                {" "}
                <span className="d-block fs-xs fw-semibold text-uppercase text-title text-truncate">
                  ADA/USD
                </span>
                {" "}
                <span className="d-block fs-6 fw-bold text-primary text-truncate">
                  <bdi>
                    $0.62
                  </bdi>
                </span>
                {" "}
              </span>
              <span className="badge-soft tint-emerald border-current flex-shrink-0 fs-xs fw-bold">
                <bdi>
                  +8.7%
                </bdi>
              </span>
            </li>
            <li
              className="scroll-col-sm border-e-soft d-flex align-items-center justify-content-between gap-2 px-3 py-2"
              aria-hidden="true"
            >
              <span className="min-w-0">
                {" "}
                <span className="d-block fs-xs fw-semibold text-uppercase text-title text-truncate">
                  AVAX/USD
                </span>
                {" "}
                <span className="d-block fs-6 fw-bold text-primary text-truncate">
                  <bdi>
                    $42.30
                  </bdi>
                </span>
                {" "}
              </span>
              <span className="badge-soft tint-emerald border-current flex-shrink-0 fs-xs fw-bold">
                <bdi>
                  +9.5%
                </bdi>
              </span>
            </li>
            <li
              className="scroll-col-sm border-e-soft d-flex align-items-center justify-content-between gap-2 px-3 py-2"
              aria-hidden="true"
            >
              <span className="min-w-0">
                {" "}
                <span className="d-block fs-xs fw-semibold text-uppercase text-title text-truncate">
                  DOT/USD
                </span>
                {" "}
                <span className="d-block fs-6 fw-bold text-primary text-truncate">
                  <bdi>
                    $8.45
                  </bdi>
                </span>
                {" "}
              </span>
              <span className="badge-soft tint-emerald border-current flex-shrink-0 fs-xs fw-bold">
                <bdi>
                  +7.1%
                </bdi>
              </span>
            </li>
          </ul>
        </div>
      </section>
      {/* ===== Market overview & top gainers ===== */}
      <section className="mb-4">
        <h2 className="visually-hidden">
          Market overview and top gainers
        </h2>
        <div className="row g-3">
          <div className="col-12 col-xxl-8">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <div className="min-w-0">
                    <h3 className="fs-5 fw-bold text-title mb-1">
                      Market Overview
                    </h3>
                    <p className="d-flex flex-wrap align-items-baseline gap-2 mb-0">
                      <span className="fs-sm fw-semibold text-uppercase text-muted-2">
                        BTC/USD
                      </span>
                      <span className="fs-4 fw-bold text-title lh-1">
                        <bdi>
                          $67,450.32
                        </bdi>
                      </span>
                      <span className="badge-soft tint-emerald border-current d-inline-flex align-items-center gap-1 px-2 fs-sm fw-bold">
                        {" "}
                        <i className="icon-12 flip-rtl" data-lucide="arrow-up-right" aria-hidden="true" />
                        <bdi>
                          +4.2%
                        </bdi>
                        {" "}
                      </span>
                    </p>
                  </div>
                  <div className="d-flex flex-wrap align-items-center gap-2">
                    <div
                      className="nav nav-pills seg-toggle flex-nowrap gap-1 p-1 rounded-pill bg-soft"
                      role="group"
                      aria-label="Market overview chart type"
                      data-chart-views=""
                    >
                      <button
                        type="button"
                        className="nav-link active fw-semibold"
                        aria-pressed="true"
                        data-chart-view="candlestick"
                      >
                        Candles
                      </button>
                      <button
                        type="button"
                        className="nav-link fw-semibold"
                        aria-pressed="false"
                        data-chart-view="line"
                      >
                        Line
                      </button>
                      <button
                        type="button"
                        className="nav-link fw-semibold"
                        aria-pressed="false"
                        data-chart-view="area"
                      >
                        Area
                      </button>
                    </div>
                    <div
                      className="nav nav-pills seg-toggle flex-nowrap gap-1 p-1 rounded-pill bg-soft"
                      role="group"
                      aria-label="Market overview time range"
                    >
                      <button type="button" className="nav-link active fw-semibold" aria-pressed="true">
                        24h
                      </button>
                      <button type="button" className="nav-link fw-semibold" aria-pressed="false">
                        7d
                      </button>
                      <button type="button" className="nav-link fw-semibold" aria-pressed="false">
                        30d
                      </button>
                      <button type="button" className="nav-link fw-semibold" aria-pressed="false">
                        90d
                      </button>
                      <button type="button" className="nav-link fw-semibold" aria-pressed="false">
                        1y
                      </button>
                      <button type="button" className="nav-link fw-semibold" aria-pressed="false">
                        All
                      </button>
                    </div>
                    <div className="dropdown flex-shrink-0">
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle"
                        data-bs-toggle="dropdown"
                        data-dd-fixed=""
                        data-bs-offset="0,8"
                        aria-expanded="false"
                        aria-label="More actions for Market Overview"
                      >
                        <i data-lucide="ellipsis-vertical" />
                      </button>
                      {" "}
                      <ul className="dropdown-menu dropdown-menu-end p-2">
                        <li>
                          <button type="button" className="dropdown-item">
                            <i data-lucide="eye" />
                            View report
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item">
                            <i data-lucide="download" />
                            Export data
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item">
                            <i data-lucide="refresh-cw" />
                            Refresh
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Session readout: the four prices that define the candles,
                   plus the turnover the strip below them totals. */}
                <ul className="list-unstyled bg-soft border-theme rounded-3 d-flex flex-wrap align-items-center mb-3 py-2 px-1">
                  <li className="border-e-soft flex-grow-1 px-3 py-1">
                    <span className="d-block fs-xs fw-semibold text-uppercase text-muted-2">
                      Open
                    </span>
                    {" "}
                    <span className="d-block fs-md fw-bold text-title">
                      <bdi>
                        $64,730
                      </bdi>
                    </span>
                  </li>
                  <li className="border-e-soft flex-grow-1 px-3 py-1">
                    <span className="d-block fs-xs fw-semibold text-uppercase text-muted-2">
                      High
                    </span>
                    {" "}
                    <span className="d-block fs-md fw-bold text-cat-emerald">
                      <bdi>
                        $67,610
                      </bdi>
                    </span>
                  </li>
                  <li className="border-e-soft flex-grow-1 px-3 py-1">
                    <span className="d-block fs-xs fw-semibold text-uppercase text-muted-2">
                      Low
                    </span>
                    {" "}
                    <span className="d-block fs-md fw-bold text-cat-red">
                      <bdi>
                        $63,980
                      </bdi>
                    </span>
                  </li>
                  <li className="border-e-soft flex-grow-1 px-3 py-1">
                    <span className="d-block fs-xs fw-semibold text-uppercase text-muted-2">
                      Close
                    </span>
                    {" "}
                    <span className="d-block fs-md fw-bold text-title">
                      <bdi>
                        $67,450
                      </bdi>
                    </span>
                  </li>
                  <li className="flex-grow-1 px-3 py-1">
                    <span className="d-block fs-xs fw-semibold text-uppercase text-muted-2">
                      Volume
                    </span>
                    {" "}
                    <span className="d-block fs-md fw-bold text-title">
                      <bdi>
                        $7.11B
                      </bdi>
                    </span>
                  </li>
                </ul>
                {/* One shared .chart-scroll so the candles and the volume strip
                   pan together below lg; the mount helper leaves an existing
                   wrapper alone rather than giving each plot its own. */}
                <div className="chart-scroll flex-grow-1">
                  <div id="cryptoMarketOverviewChart" className="chart-area" />
                  <div id="cryptoMarketVolumeChart" className="chart-area" />
                </div>
                <ul className="d-flex flex-wrap align-items-center gap-3 fs-md text-body-2 mt-2 mb-0">
                  <li className="d-inline-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-emerald" />
                    BTC/USD
                  </li>
                  <li className="d-inline-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-amber" />
                    MA 6H
                  </li>
                  <li className="d-inline-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-violet" />
                    MA 12H
                  </li>
                </ul>
                <div className="bg-soft border-theme rounded-3 p-3 mt-3">
                  <div className="row g-3">
                    <div className="col-12 col-md-4 col-xl-3">
                      <div className="bg-wash-current text-cat-emerald border-theme d-flex flex-column gap-2 h-100 p-3 rounded-3 text-center">
                        <div className="d-flex align-items-center justify-content-center gap-2">
                          <span className="icon-box icon-box-sm bg-cat-emerald text-white" aria-hidden="true">
                            <i data-lucide="gauge" />
                          </span>
                          <h4 className="fs-xs fw-semibold text-uppercase text-muted-2 mb-0">
                            Trading Sentiment
                          </h4>
                        </div>
                        <div className="position-relative d-flex justify-content-center my-auto">
                          <div id="cryptoFearGreedChart" className="chart-area" />
                          <span className="chart-center mt-4">
                            <span className="d-block fs-2 fw-bold text-title lh-1">
                              <bdi>
                                68%
                              </bdi>
                            </span>
                            <span className="d-block fs-sm fw-bold text-cat-emerald mt-1">
                              Bullish
                            </span>
                          </span>
                        </div>
                        <p className="fs-xs text-muted-2 mb-0">
                          Positive market momentum
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-md-8 col-xl-9">
                      <ul className="list-unstyled row row-cols-2 row-cols-xl-4 g-3 h-100 mb-0">
                        <li className="col">
                          <div className="bg-wash-current text-cat-emerald border-theme d-flex flex-column gap-2 h-100 p-3 rounded-3">
                            <span className="icon-box icon-box-sm bg-cat-emerald text-white" aria-hidden="true">
                              <i data-lucide="trending-up" />
                            </span>
                            <h4 className="fs-xs fw-semibold text-uppercase text-muted-2 mb-0">
                              Day High
                            </h4>
                            <p className="fs-5 fw-bold text-cat-emerald lh-1 text-truncate mt-auto mb-0">
                              <bdi>
                                $67,610
                              </bdi>
                            </p>
                          </div>
                        </li>
                        <li className="col">
                          <div className="bg-wash-current text-cat-red border-theme d-flex flex-column gap-2 h-100 p-3 rounded-3">
                            <span className="icon-box icon-box-sm bg-cat-red text-white" aria-hidden="true">
                              <i data-lucide="trending-down" />
                            </span>
                            <h4 className="fs-xs fw-semibold text-uppercase text-muted-2 mb-0">
                              Day Low
                            </h4>
                            <p className="fs-5 fw-bold text-cat-red lh-1 text-truncate mt-auto mb-0">
                              <bdi>
                                $63,980
                              </bdi>
                            </p>
                          </div>
                        </li>
                        <li className="col">
                          <div className="bg-plain border-theme d-flex flex-column gap-2 h-100 p-3 rounded-3">
                            <span className="icon-box icon-box-sm bg-cat-blue text-white" aria-hidden="true">
                              <i data-lucide="layers" />
                            </span>
                            <h4 className="fs-xs fw-semibold text-uppercase text-muted-2 mb-0">
                              Open Positions
                            </h4>
                            <p className="fs-5 fw-bold text-title lh-1 text-truncate mt-auto mb-0">
                              <bdi>
                                24 assets
                              </bdi>
                            </p>
                          </div>
                        </li>
                        <li className="col">
                          <div className="bg-wash-current text-cat-emerald border-theme d-flex flex-column gap-2 h-100 p-3 rounded-3">
                            <span className="icon-box icon-box-sm bg-cat-emerald text-white" aria-hidden="true">
                              <i className="flip-rtl" data-lucide="arrow-up-right" />
                            </span>
                            <h4 className="fs-xs fw-semibold text-uppercase text-muted-2 mb-0">
                              {"Unrealized P&L"}
                            </h4>
                            <p className="fs-5 fw-bold text-cat-emerald lh-1 text-truncate mt-auto mb-0">
                              <bdi>
                                +$71,288
                              </bdi>
                            </p>
                          </div>
                        </li>
                        <li className="col">
                          <div className="bg-plain border-theme d-flex flex-column gap-2 h-100 p-3 rounded-3">
                            <span className="icon-box icon-box-sm bg-cat-violet text-white" aria-hidden="true">
                              <i data-lucide="pie-chart" />
                            </span>
                            <h4 className="fs-xs fw-semibold text-uppercase text-muted-2 mb-0">
                              BTC Dominance
                            </h4>
                            <p className="fs-5 fw-bold text-title lh-1 text-truncate mt-auto mb-0">
                              <bdi>
                                52.35%
                              </bdi>
                            </p>
                          </div>
                        </li>
                        <li className="col">
                          <div className="bg-plain border-theme d-flex flex-column gap-2 h-100 p-3 rounded-3">
                            <span className="icon-box icon-box-sm bg-cat-cyan text-white" aria-hidden="true">
                              <i data-lucide="globe" />
                            </span>
                            <h4 className="fs-xs fw-semibold text-uppercase text-muted-2 mb-0">
                              BTC Market Cap
                            </h4>
                            <p className="fs-5 fw-bold text-title lh-1 text-truncate mt-auto mb-0">
                              <bdi>
                                $1.33T
                              </bdi>
                            </p>
                          </div>
                        </li>
                        <li className="col">
                          <div className="bg-plain border-theme d-flex flex-column gap-2 h-100 p-3 rounded-3">
                            <span className="icon-box icon-box-sm bg-cat-amber text-white" aria-hidden="true">
                              <i data-lucide="coins" />
                            </span>
                            <h4 className="fs-xs fw-semibold text-uppercase text-muted-2 mb-0">
                              Circulating Supply · BTC
                            </h4>
                            <p className="fs-5 fw-bold text-title lh-1 text-truncate mt-auto mb-0">
                              <bdi>
                                19.8M
                              </bdi>
                            </p>
                          </div>
                        </li>
                        <li className="col">
                          <div className="bg-plain border-theme d-flex flex-column gap-2 h-100 p-3 rounded-3">
                            <span className="icon-box icon-box-sm bg-cat-orange text-white" aria-hidden="true">
                              <i data-lucide="trophy" />
                            </span>
                            <h4 className="fs-xs fw-semibold text-uppercase text-muted-2 mb-0">
                              All-Time High
                            </h4>
                            <p className="fs-5 fw-bold text-title lh-1 text-truncate mt-auto mb-0">
                              <bdi>
                                $73,750
                              </bdi>
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-xxl-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    Top Movers
                  </h3>
                  <div
                    className="nav nav-pills seg-toggle flex-nowrap gap-1 p-1 rounded-pill bg-soft"
                    role="tablist"
                    aria-label="Top movers direction"
                  >
                    <button
                      type="button"
                      className="nav-link active fw-semibold"
                      id="cryptoGainersTab"
                      role="tab"
                      data-bs-toggle="pill"
                      data-bs-target="#cryptoGainersPane"
                      aria-controls="cryptoGainersPane"
                      aria-selected="true"
                    >
                      Gainers
                    </button>
                    <button
                      type="button"
                      className="nav-link fw-semibold"
                      id="cryptoLosersTab"
                      role="tab"
                      data-bs-toggle="pill"
                      data-bs-target="#cryptoLosersPane"
                      aria-controls="cryptoLosersPane"
                      aria-selected="false"
                    >
                      Losers
                    </button>
                  </div>
                </div>
                <p className="fs-sm fw-semibold text-muted-2 mb-2">
                  24h Change
                </p>
                <div className="tab-content d-flex flex-column flex-grow-1">
                  <div
                    className="tab-pane fade show active flex-grow-1"
                    id="cryptoGainersPane"
                    role="tabpanel"
                    aria-labelledby="cryptoGainersTab"
                    tabIndex="0"
                  >
                    <ul className="list-unstyled d-flex flex-column gap-2 h-100 mb-0">
                      <li className="bg-plain border-theme d-flex align-items-center justify-content-between flex-grow-1 gap-2 p-3 rounded-3">
                        <span className="d-flex align-items-center gap-3 min-w-0">
                          <img
                            src="/assets/images/coin-btc.svg"
                            alt=""
                            width="48"
                            height="48"
                            className="brand-logo flex-shrink-0 pe-none"
                          />
                          <span className="d-flex flex-column min-w-0 lh-sm">
                            <span className="fs-md fw-bold text-title text-truncate">
                              Bitcoin
                            </span>
                            <span className="fs-sm text-muted-2 text-truncate">
                              BTC
                            </span>
                          </span>
                        </span>
                        <span className="d-flex align-items-center flex-shrink-0 gap-3">
                          <span className="fs-md fw-bold text-title">
                            <bdi>
                              $67,450
                            </bdi>
                          </span>
                          <span className="badge-soft tint-emerald fs-sm fw-bold">
                            <bdi>
                              +4.2%
                            </bdi>
                          </span>
                        </span>
                      </li>
                      <li className="bg-plain border-theme d-flex align-items-center justify-content-between flex-grow-1 gap-2 p-3 rounded-3">
                        <span className="d-flex align-items-center gap-3 min-w-0">
                          <img
                            src="/assets/images/coin-eth.svg"
                            alt=""
                            width="48"
                            height="48"
                            className="brand-logo flex-shrink-0 pe-none"
                          />
                          <span className="d-flex flex-column min-w-0 lh-sm">
                            <span className="fs-md fw-bold text-title text-truncate">
                              Ethereum
                            </span>
                            <span className="fs-sm text-muted-2 text-truncate">
                              ETH
                            </span>
                          </span>
                        </span>
                        <span className="d-flex align-items-center flex-shrink-0 gap-3">
                          <span className="fs-md fw-bold text-title">
                            <bdi>
                              $3,580
                            </bdi>
                          </span>
                          <span className="badge-soft tint-emerald fs-sm fw-bold">
                            <bdi>
                              +6.8%
                            </bdi>
                          </span>
                        </span>
                      </li>
                      <li className="bg-plain border-theme d-flex align-items-center justify-content-between flex-grow-1 gap-2 p-3 rounded-3">
                        <span className="d-flex align-items-center gap-3 min-w-0">
                          <img
                            src="/assets/images/coin-ltc.svg"
                            alt=""
                            width="48"
                            height="48"
                            className="brand-logo flex-shrink-0 pe-none"
                          />
                          <span className="d-flex flex-column min-w-0 lh-sm">
                            <span className="fs-md fw-bold text-title text-truncate">
                              Litecoin
                            </span>
                            <span className="fs-sm text-muted-2 text-truncate">
                              ITC / USDT
                            </span>
                          </span>
                        </span>
                        <span className="d-flex align-items-center flex-shrink-0 gap-3">
                          <span className="fs-md fw-bold text-title">
                            <bdi>
                              $178.50
                            </bdi>
                          </span>
                          <span className="badge-soft tint-emerald fs-sm fw-bold">
                            <bdi>
                              +12.3%
                            </bdi>
                          </span>
                        </span>
                      </li>
                      <li className="bg-plain border-theme d-flex align-items-center justify-content-between flex-grow-1 gap-2 p-3 rounded-3">
                        <span className="d-flex align-items-center gap-3 min-w-0">
                          <img
                            src="/assets/images/coin-ada.svg"
                            alt=""
                            width="48"
                            height="48"
                            className="brand-logo flex-shrink-0 pe-none"
                          />
                          <span className="d-flex flex-column min-w-0 lh-sm">
                            <span className="fs-md fw-bold text-title text-truncate">
                              Cardano
                            </span>
                            <span className="fs-sm text-muted-2 text-truncate">
                              ADA
                            </span>
                          </span>
                        </span>
                        <span className="d-flex align-items-center flex-shrink-0 gap-3">
                          <span className="fs-md fw-bold text-title">
                            <bdi>
                              $0.62
                            </bdi>
                          </span>
                          <span className="badge-soft tint-emerald fs-sm fw-bold">
                            <bdi>
                              +8.7%
                            </bdi>
                          </span>
                        </span>
                      </li>
                      <li className="bg-plain border-theme d-flex align-items-center justify-content-between flex-grow-1 gap-2 p-3 rounded-3">
                        <span className="d-flex align-items-center gap-3 min-w-0">
                          <img
                            src="/assets/images/coin-avax.svg"
                            alt=""
                            width="48"
                            height="48"
                            className="brand-logo flex-shrink-0 pe-none"
                          />
                          <span className="d-flex flex-column min-w-0 lh-sm">
                            <span className="fs-md fw-bold text-title text-truncate">
                              Avalanche
                            </span>
                            <span className="fs-sm text-muted-2 text-truncate">
                              AVAX
                            </span>
                          </span>
                        </span>
                        <span className="d-flex align-items-center flex-shrink-0 gap-3">
                          <span className="fs-md fw-bold text-title">
                            <bdi>
                              $42.30
                            </bdi>
                          </span>
                          <span className="badge-soft tint-emerald fs-sm fw-bold">
                            <bdi>
                              +9.5%
                            </bdi>
                          </span>
                        </span>
                      </li>
                      <li className="bg-plain border-theme d-flex align-items-center justify-content-between flex-grow-1 gap-2 p-3 rounded-3">
                        <span className="d-flex align-items-center gap-3 min-w-0">
                          <img
                            src="/assets/images/coin-dot.svg"
                            alt=""
                            width="48"
                            height="48"
                            className="brand-logo flex-shrink-0 pe-none"
                          />
                          <span className="d-flex flex-column min-w-0 lh-sm">
                            <span className="fs-md fw-bold text-title text-truncate">
                              Polkadot
                            </span>
                            <span className="fs-sm text-muted-2 text-truncate">
                              DOT
                            </span>
                          </span>
                        </span>
                        <span className="d-flex align-items-center flex-shrink-0 gap-3">
                          <span className="fs-md fw-bold text-title">
                            <bdi>
                              $8.45
                            </bdi>
                          </span>
                          <span className="badge-soft tint-emerald fs-sm fw-bold">
                            <bdi>
                              +7.1%
                            </bdi>
                          </span>
                        </span>
                      </li>
                      <li className="bg-plain border-theme d-flex align-items-center justify-content-between flex-grow-1 gap-2 p-3 rounded-3">
                        <span className="d-flex align-items-center gap-3 min-w-0">
                          <span className="avatar avatar-md tint-blue fw-bold" aria-hidden="true">
                            XRP
                          </span>
                          <span className="d-flex flex-column min-w-0 lh-sm">
                            <span className="fs-md fw-bold text-title text-truncate">
                              XRP
                            </span>
                            <span className="fs-sm text-muted-2 text-truncate">
                              XRP
                            </span>
                          </span>
                        </span>
                        <span className="d-flex align-items-center flex-shrink-0 gap-3">
                          <span className="fs-md fw-bold text-title">
                            <bdi>
                              $0.5842
                            </bdi>
                          </span>
                          <span className="badge-soft tint-emerald fs-sm fw-bold">
                            <bdi>
                              +3.5%
                            </bdi>
                          </span>
                        </span>
                      </li>
                      <li className="bg-plain border-theme d-flex align-items-center justify-content-between flex-grow-1 gap-2 p-3 rounded-3">
                        <span className="d-flex align-items-center gap-3 min-w-0">
                          <span className="avatar avatar-md tint-rose fw-bold" aria-hidden="true">
                            TRX
                          </span>
                          <span className="d-flex flex-column min-w-0 lh-sm">
                            <span className="fs-md fw-bold text-title text-truncate">
                              Tron
                            </span>
                            <span className="fs-sm text-muted-2 text-truncate">
                              TRX
                            </span>
                          </span>
                        </span>
                        <span className="d-flex align-items-center flex-shrink-0 gap-3">
                          <span className="fs-md fw-bold text-title">
                            <bdi>
                              $0.2841
                            </bdi>
                          </span>
                          <span className="badge-soft tint-emerald fs-sm fw-bold">
                            <bdi>
                              +5.4%
                            </bdi>
                          </span>
                        </span>
                      </li>
                      <li className="bg-plain border-theme d-flex align-items-center justify-content-between flex-grow-1 gap-2 p-3 rounded-3">
                        <span className="d-flex align-items-center gap-3 min-w-0">
                          <span className="avatar avatar-md tint-cyan fw-bold" aria-hidden="true">
                            XLM
                          </span>
                          <span className="d-flex flex-column min-w-0 lh-sm">
                            <span className="fs-md fw-bold text-title text-truncate">
                              Stellar
                            </span>
                            <span className="fs-sm text-muted-2 text-truncate">
                              XLM
                            </span>
                          </span>
                        </span>
                        <span className="d-flex align-items-center flex-shrink-0 gap-3">
                          <span className="fs-md fw-bold text-title">
                            <bdi>
                              $0.1372
                            </bdi>
                          </span>
                          <span className="badge-soft tint-emerald fs-sm fw-bold">
                            <bdi>
                              +6.2%
                            </bdi>
                          </span>
                        </span>
                      </li>
                      <li className="bg-plain border-theme d-flex align-items-center justify-content-between flex-grow-1 gap-2 p-3 rounded-3">
                        <span className="d-flex align-items-center gap-3 min-w-0">
                          <span className="avatar avatar-md tint-violet fw-bold" aria-hidden="true">
                            HBAR
                          </span>
                          <span className="d-flex flex-column min-w-0 lh-sm">
                            <span className="fs-md fw-bold text-title text-truncate">
                              Hedera
                            </span>
                            <span className="fs-sm text-muted-2 text-truncate">
                              HBAR
                            </span>
                          </span>
                        </span>
                        <span className="d-flex align-items-center flex-shrink-0 gap-3">
                          <span className="fs-md fw-bold text-title">
                            <bdi>
                              $0.0894
                            </bdi>
                          </span>
                          <span className="badge-soft tint-emerald fs-sm fw-bold">
                            <bdi>
                              +11.8%
                            </bdi>
                          </span>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="tab-pane fade flex-grow-1"
                    id="cryptoLosersPane"
                    role="tabpanel"
                    aria-labelledby="cryptoLosersTab"
                    tabIndex="0"
                  >
                    <ul className="list-unstyled d-flex flex-column gap-2 h-100 mb-0">
                      <li className="bg-plain border-theme d-flex align-items-center justify-content-between flex-grow-1 gap-2 p-3 rounded-3">
                        <span className="d-flex align-items-center gap-3 min-w-0">
                          <span className="avatar avatar-md tint-amber fw-bold" aria-hidden="true">
                            BNB
                          </span>
                          <span className="d-flex flex-column min-w-0 lh-sm">
                            <span className="fs-md fw-bold text-title text-truncate">
                              Binance Coin
                            </span>
                            <span className="fs-sm text-muted-2 text-truncate">
                              BNB
                            </span>
                          </span>
                        </span>
                        <span className="d-flex align-items-center flex-shrink-0 gap-3">
                          <span className="fs-md fw-bold text-title">
                            <bdi>
                              $612.40
                            </bdi>
                          </span>
                          <span className="badge-soft tint-rose fs-sm fw-bold">
                            <bdi>
                              -1.2%
                            </bdi>
                          </span>
                        </span>
                      </li>
                      <li className="bg-plain border-theme d-flex align-items-center justify-content-between flex-grow-1 gap-2 p-3 rounded-3">
                        <span className="d-flex align-items-center gap-3 min-w-0">
                          <span className="avatar avatar-md tint-blue fw-bold" aria-hidden="true">
                            LINK
                          </span>
                          <span className="d-flex flex-column min-w-0 lh-sm">
                            <span className="fs-md fw-bold text-title text-truncate">
                              Chainlink
                            </span>
                            <span className="fs-sm text-muted-2 text-truncate">
                              LINK
                            </span>
                          </span>
                        </span>
                        <span className="d-flex align-items-center flex-shrink-0 gap-3">
                          <span className="fs-md fw-bold text-title">
                            <bdi>
                              $14.82
                            </bdi>
                          </span>
                          <span className="badge-soft tint-rose fs-sm fw-bold">
                            <bdi>
                              -2.4%
                            </bdi>
                          </span>
                        </span>
                      </li>
                      <li className="bg-plain border-theme d-flex align-items-center justify-content-between flex-grow-1 gap-2 p-3 rounded-3">
                        <span className="d-flex align-items-center gap-3 min-w-0">
                          <span className="avatar avatar-md tint-magenta fw-bold" aria-hidden="true">
                            UNI
                          </span>
                          <span className="d-flex flex-column min-w-0 lh-sm">
                            <span className="fs-md fw-bold text-title text-truncate">
                              Uniswap
                            </span>
                            <span className="fs-sm text-muted-2 text-truncate">
                              UNI
                            </span>
                          </span>
                        </span>
                        <span className="d-flex align-items-center flex-shrink-0 gap-3">
                          <span className="fs-md fw-bold text-title">
                            <bdi>
                              $7.94
                            </bdi>
                          </span>
                          <span className="badge-soft tint-rose fs-sm fw-bold">
                            <bdi>
                              -3.1%
                            </bdi>
                          </span>
                        </span>
                      </li>
                      <li className="bg-plain border-theme d-flex align-items-center justify-content-between flex-grow-1 gap-2 p-3 rounded-3">
                        <span className="d-flex align-items-center gap-3 min-w-0">
                          <span className="avatar avatar-md tint-violet fw-bold" aria-hidden="true">
                            ATOM
                          </span>
                          <span className="d-flex flex-column min-w-0 lh-sm">
                            <span className="fs-md fw-bold text-title text-truncate">
                              Cosmos
                            </span>
                            <span className="fs-sm text-muted-2 text-truncate">
                              ATOM
                            </span>
                          </span>
                        </span>
                        <span className="d-flex align-items-center flex-shrink-0 gap-3">
                          <span className="fs-md fw-bold text-title">
                            <bdi>
                              $6.12
                            </bdi>
                          </span>
                          <span className="badge-soft tint-rose fs-sm fw-bold">
                            <bdi>
                              -4.6%
                            </bdi>
                          </span>
                        </span>
                      </li>
                      <li className="bg-plain border-theme d-flex align-items-center justify-content-between flex-grow-1 gap-2 p-3 rounded-3">
                        <span className="d-flex align-items-center gap-3 min-w-0">
                          <span className="avatar avatar-md tint-cyan fw-bold" aria-hidden="true">
                            FIL
                          </span>
                          <span className="d-flex flex-column min-w-0 lh-sm">
                            <span className="fs-md fw-bold text-title text-truncate">
                              Filecoin
                            </span>
                            <span className="fs-sm text-muted-2 text-truncate">
                              FIL
                            </span>
                          </span>
                        </span>
                        <span className="d-flex align-items-center flex-shrink-0 gap-3">
                          <span className="fs-md fw-bold text-title">
                            <bdi>
                              $3.87
                            </bdi>
                          </span>
                          <span className="badge-soft tint-rose fs-sm fw-bold">
                            <bdi>
                              -5.2%
                            </bdi>
                          </span>
                        </span>
                      </li>
                      <li className="bg-plain border-theme d-flex align-items-center justify-content-between flex-grow-1 gap-2 p-3 rounded-3">
                        <span className="d-flex align-items-center gap-3 min-w-0">
                          <span className="avatar avatar-md tint-emerald fw-bold" aria-hidden="true">
                            APT
                          </span>
                          <span className="d-flex flex-column min-w-0 lh-sm">
                            <span className="fs-md fw-bold text-title text-truncate">
                              Aptos
                            </span>
                            <span className="fs-sm text-muted-2 text-truncate">
                              APT
                            </span>
                          </span>
                        </span>
                        <span className="d-flex align-items-center flex-shrink-0 gap-3">
                          <span className="fs-md fw-bold text-title">
                            <bdi>
                              $6.45
                            </bdi>
                          </span>
                          <span className="badge-soft tint-rose fs-sm fw-bold">
                            <bdi>
                              -6.9%
                            </bdi>
                          </span>
                        </span>
                      </li>
                      <li className="bg-plain border-theme d-flex align-items-center justify-content-between flex-grow-1 gap-2 p-3 rounded-3">
                        <span className="d-flex align-items-center gap-3 min-w-0">
                          <span className="avatar avatar-md tint-rose fw-bold" aria-hidden="true">
                            OP
                          </span>
                          <span className="d-flex flex-column min-w-0 lh-sm">
                            <span className="fs-md fw-bold text-title text-truncate">
                              Optimism
                            </span>
                            <span className="fs-sm text-muted-2 text-truncate">
                              OP
                            </span>
                          </span>
                        </span>
                        <span className="d-flex align-items-center flex-shrink-0 gap-3">
                          <span className="fs-md fw-bold text-title">
                            <bdi>
                              $1.84
                            </bdi>
                          </span>
                          <span className="badge-soft tint-rose fs-sm fw-bold">
                            <bdi>
                              -7.4%
                            </bdi>
                          </span>
                        </span>
                      </li>
                      <li className="bg-plain border-theme d-flex align-items-center justify-content-between flex-grow-1 gap-2 p-3 rounded-3">
                        <span className="d-flex align-items-center gap-3 min-w-0">
                          <span className="avatar avatar-md tint-blue fw-bold" aria-hidden="true">
                            ARB
                          </span>
                          <span className="d-flex flex-column min-w-0 lh-sm">
                            <span className="fs-md fw-bold text-title text-truncate">
                              Arbitrum
                            </span>
                            <span className="fs-sm text-muted-2 text-truncate">
                              ARB
                            </span>
                          </span>
                        </span>
                        <span className="d-flex align-items-center flex-shrink-0 gap-3">
                          <span className="fs-md fw-bold text-title">
                            <bdi>
                              $0.61
                            </bdi>
                          </span>
                          <span className="badge-soft tint-rose fs-sm fw-bold">
                            <bdi>
                              -8.1%
                            </bdi>
                          </span>
                        </span>
                      </li>
                      <li className="bg-plain border-theme d-flex align-items-center justify-content-between flex-grow-1 gap-2 p-3 rounded-3">
                        <span className="d-flex align-items-center gap-3 min-w-0">
                          <span className="avatar avatar-md tint-violet fw-bold" aria-hidden="true">
                            GRT
                          </span>
                          <span className="d-flex flex-column min-w-0 lh-sm">
                            <span className="fs-md fw-bold text-title text-truncate">
                              The Graph
                            </span>
                            <span className="fs-sm text-muted-2 text-truncate">
                              GRT
                            </span>
                          </span>
                        </span>
                        <span className="d-flex align-items-center flex-shrink-0 gap-3">
                          <span className="fs-md fw-bold text-title">
                            <bdi>
                              $0.1280
                            </bdi>
                          </span>
                          <span className="badge-soft tint-rose fs-sm fw-bold">
                            <bdi>
                              -9.3%
                            </bdi>
                          </span>
                        </span>
                      </li>
                      <li className="bg-plain border-theme d-flex align-items-center justify-content-between flex-grow-1 gap-2 p-3 rounded-3">
                        <span className="d-flex align-items-center gap-3 min-w-0">
                          <span className="avatar avatar-md tint-emerald fw-bold" aria-hidden="true">
                            MKR
                          </span>
                          <span className="d-flex flex-column min-w-0 lh-sm">
                            <span className="fs-md fw-bold text-title text-truncate">
                              Maker
                            </span>
                            <span className="fs-sm text-muted-2 text-truncate">
                              MKR
                            </span>
                          </span>
                        </span>
                        <span className="d-flex align-items-center flex-shrink-0 gap-3">
                          <span className="fs-md fw-bold text-title">
                            <bdi>
                              $1,482
                            </bdi>
                          </span>
                          <span className="badge-soft tint-rose fs-sm fw-bold">
                            <bdi>
                              -10.6%
                            </bdi>
                          </span>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Market sentiment & portfolio allocation ===== */}
      <section className="mb-4" aria-labelledby="crypto-sentiment-allocation-title">
        <h2 className="visually-hidden" id="crypto-sentiment-allocation-title">
          Market sentiment and portfolio allocation
        </h2>
        <div className="row g-4">
          {/* Sentiment index: the reading, the band it lands in, and the scale
             that gives the band its meaning. */}
          <div className="col-12 col-xl-4">
            <div className="on-dark bg-grad-slate border-theme d-flex flex-column gap-3 h-100 p-4 rounded-4">
              <div className="min-w-0">
                <p className="fs-xs fw-semibold text-uppercase text-body-2 mb-1">
                  Sentiment Index
                </p>
                <h3 className="fs-4 fw-bold text-title mb-0">
                  Market Sentiment
                </h3>
              </div>
              {/* The gauge draws its own reading under the needle hub, so this
                 mount carries no .chart-center overlay. */}
              <div
                id="cryptoSentimentGaugeChart"
                className="chart-area my-auto"
                role="img"
                aria-label="Fear and Greed index: 72, Greed"
              />
              {/* The gauge arc is drawn left-to-right in both directions, so
                 its end labels stay pinned to it rather than mirroring. */}
              <div className="d-flex align-items-center justify-content-between gap-2 fs-md fw-bold" dir="ltr">
                <span className="d-inline-flex align-items-center gap-2 text-cat-red">
                  <span className="legend-dot legend-dot-sm bg-cat-red" aria-hidden="true" />
                  Fear
                </span>
                <span className="d-inline-flex align-items-center gap-2 text-cat-emerald">
                  <span className="legend-dot legend-dot-sm bg-cat-emerald" aria-hidden="true" />
                  Greed
                </span>
              </div>
              <p className="fs-md text-body-2 text-center mb-0">
                Market is currently in
                {" "}
                <span className="fw-bold text-cat-emerald">
                  Greed
                </span>
                {" "}
                territory — consider managing risk accordingly.
              </p>
              <hr className="border-t-soft opacity-100 mt-auto mb-0" />
              <ul className="list-unstyled d-flex flex-wrap justify-content-center column-gap-3 row-gap-2 mb-0">
                <li className="d-inline-flex align-items-center gap-2 fs-sm fw-semibold text-title">
                  <span className="legend-dot legend-dot-sm bg-cat-red" aria-hidden="true" />
                  Extreme Fear
                </li>
                <li className="d-inline-flex align-items-center gap-2 fs-sm fw-semibold text-title">
                  <span className="legend-dot legend-dot-sm bg-cat-orange" aria-hidden="true" />
                  Fear
                </li>
                <li className="d-inline-flex align-items-center gap-2 fs-sm fw-semibold text-title">
                  <span className="legend-dot legend-dot-sm bg-cat-amber" aria-hidden="true" />
                  Neutral
                </li>
                <li className="d-inline-flex align-items-center gap-2 fs-sm fw-semibold text-title">
                  <span className="legend-dot legend-dot-sm bg-cat-lime" aria-hidden="true" />
                  Greed
                </li>
                <li className="d-inline-flex align-items-center gap-2 fs-sm fw-semibold text-title">
                  <span className="legend-dot legend-dot-sm bg-cat-emerald" aria-hidden="true" />
                  Extreme Greed
                </li>
              </ul>
            </div>
          </div>
          {/* Holdings: the split as a whole (donut), per asset (rows), and the
             four measures that qualify it (pills). */}
          <div className="col-12 col-xl-8">
            <div className="card h-100">
              <div className="card-body d-flex flex-column gap-3">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                  <div className="min-w-0">
                    <h3 className="fs-5 fw-bold text-title mb-1">
                      Portfolio Allocation
                    </h3>
                    <p className="fs-md text-muted-2 mb-0">
                      Crypto portfolio breakdown
                    </p>
                  </div>
                  <span className="badge-soft tint-amber border-current d-inline-flex align-items-center gap-2 flex-shrink-0 fs-xs fw-bold">
                    {" "}
                    <span className="legend-dot legend-dot-sm bg-cat-amber" aria-hidden="true" />
                    Rebalance
                    {" "}
                  </span>
                </div>
                <hr className="border-t-soft opacity-100 my-0" />
                {/* The three zones stretch to one shared height, and each
                   distributes its own content across it, so the donut, the
                   holdings and the metrics start and end on the same lines. */}
                <div className="row g-4 flex-grow-1">
                  <div className="col-12 col-lg-5 col-xxl-4">
                    <div className="d-flex flex-column justify-content-center h-100">
                      <div className="position-relative">
                        <div id="cryptoPortfolioAllocationChart" className="chart-area" />
                        <span className="chart-center">
                          <span className="d-block fs-md fw-medium text-muted-2">
                            Total Portfolio
                          </span>
                          <span className="d-block fs-3 fw-bold text-title">
                            <bdi>
                              $128,245
                            </bdi>
                          </span>
                        </span>
                      </div>
                      <p className="fs-xs text-muted-2 text-center mt-3 mb-0">
                        {"Last updated: Today, 10:32\u00a0AM"}
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-lg-7 col-xxl-5">
                    <ul className="list-unstyled d-flex flex-column justify-content-between gap-2 h-100 mb-0">
                      <li className="bg-plain border-theme d-flex align-items-center gap-3 p-3 rounded-3">
                        <span className="legend-dot bg-cat-violet" aria-hidden="true" />
                        <span className="d-flex flex-column gap-1 flex-grow-1 min-w-0">
                          <span className="d-flex align-items-center gap-2">
                            <span className="flex-grow-1 min-w-0 fs-md fw-semibold text-title text-truncate">
                              Bitcoin (BTC)
                            </span>
                            <span className="flex-shrink-0 fs-md fw-bold text-title">
                              <bdi>
                                42%
                              </bdi>
                            </span>
                            <span
                              className="progress progress-inline"
                              role="progressbar"
                              aria-label="Bitcoin share of portfolio"
                              aria-valuenow="42"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              <span className="progress-bar bg-cat-violet" style={{ width: "42%" }} />
                            </span>
                          </span>
                          <span className="fs-xs text-muted-2">
                            <bdi>
                              $53,862
                            </bdi>
                          </span>
                        </span>
                      </li>
                      <li className="bg-plain border-theme d-flex align-items-center gap-3 p-3 rounded-3">
                        <span className="legend-dot bg-cat-emerald" aria-hidden="true" />
                        <span className="d-flex flex-column gap-1 flex-grow-1 min-w-0">
                          <span className="d-flex align-items-center gap-2">
                            <span className="flex-grow-1 min-w-0 fs-md fw-semibold text-title text-truncate">
                              Ethereum (ETH)
                            </span>
                            <span className="flex-shrink-0 fs-md fw-bold text-title">
                              <bdi>
                                24%
                              </bdi>
                            </span>
                            <span
                              className="progress progress-inline"
                              role="progressbar"
                              aria-label="Ethereum share of portfolio"
                              aria-valuenow="24"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              <span className="progress-bar bg-cat-emerald" style={{ width: "24%" }} />
                            </span>
                          </span>
                          <span className="fs-xs text-muted-2">
                            <bdi>
                              $30,778
                            </bdi>
                          </span>
                        </span>
                      </li>
                      <li className="bg-plain border-theme d-flex align-items-center gap-3 p-3 rounded-3">
                        <span className="legend-dot bg-cat-cyan" aria-hidden="true" />
                        <span className="d-flex flex-column gap-1 flex-grow-1 min-w-0">
                          <span className="d-flex align-items-center gap-2">
                            <span className="flex-grow-1 min-w-0 fs-md fw-semibold text-title text-truncate">
                              Solana (SOL)
                            </span>
                            <span className="flex-shrink-0 fs-md fw-bold text-title">
                              <bdi>
                                14%
                              </bdi>
                            </span>
                            <span
                              className="progress progress-inline"
                              role="progressbar"
                              aria-label="Solana share of portfolio"
                              aria-valuenow="14"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              <span className="progress-bar bg-cat-cyan" style={{ width: "14%" }} />
                            </span>
                          </span>
                          <span className="fs-xs text-muted-2">
                            <bdi>
                              $17,954
                            </bdi>
                          </span>
                        </span>
                      </li>
                      <li className="bg-plain border-theme d-flex align-items-center gap-3 p-3 rounded-3">
                        <span className="legend-dot bg-cat-amber" aria-hidden="true" />
                        <span className="d-flex flex-column gap-1 flex-grow-1 min-w-0">
                          <span className="d-flex align-items-center gap-2">
                            <span className="flex-grow-1 min-w-0 fs-md fw-semibold text-title text-truncate">
                              Cardano (ADA)
                            </span>
                            <span className="flex-shrink-0 fs-md fw-bold text-title">
                              <bdi>
                                10%
                              </bdi>
                            </span>
                            <span
                              className="progress progress-inline"
                              role="progressbar"
                              aria-label="Cardano share of portfolio"
                              aria-valuenow="10"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              <span className="progress-bar bg-cat-amber" style={{ width: "10%" }} />
                            </span>
                          </span>
                          <span className="fs-xs text-muted-2">
                            <bdi>
                              $12,824
                            </bdi>
                          </span>
                        </span>
                      </li>
                      <li className="bg-plain border-theme d-flex align-items-center gap-3 p-3 rounded-3">
                        <span className="legend-dot bg-cat-slate" aria-hidden="true" />
                        <span className="d-flex flex-column gap-1 flex-grow-1 min-w-0">
                          <span className="d-flex align-items-center gap-2">
                            <span className="flex-grow-1 min-w-0 fs-md fw-semibold text-title text-truncate">
                              Others
                            </span>
                            <span className="flex-shrink-0 fs-md fw-bold text-title">
                              <bdi>
                                10%
                              </bdi>
                            </span>
                            <span
                              className="progress progress-inline"
                              role="progressbar"
                              aria-label="Other holdings share of portfolio"
                              aria-valuenow="10"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              <span className="progress-bar bg-cat-slate" style={{ width: "10%" }} />
                            </span>
                          </span>
                          <span className="fs-xs text-muted-2">
                            <bdi>
                              $12,827
                            </bdi>
                          </span>
                        </span>
                      </li>
                    </ul>
                  </div>
                  {/* Bootstrap's own vertical rule, riding inside this column
                     rather than taking a grid column of its own, and shown
                     only once the metrics sit beside the holdings. */}
                  <div className="col-12 col-xxl-3">
                    <div className="d-flex gap-4 h-100">
                      <div className="vr flex-shrink-0 d-none d-xxl-block" />
                      <ul className="list-unstyled row row-cols-1 row-cols-sm-2 row-cols-xxl-1 flex-grow-1 g-3 h-100 align-content-between mb-0">
                        <li className="col">
                          <div className="bg-plain border-theme d-flex align-items-center gap-3 h-100 p-3 rounded-3">
                            <span className="icon-box tint-amber" aria-hidden="true">
                              <i data-lucide="shield-alert" />
                            </span>
                            <span className="d-flex flex-column gap-1 min-w-0">
                              <span className="fs-xs fw-semibold text-muted-2 text-truncate">
                                Risk Score
                              </span>
                              <span className="fs-5 fw-bold text-title lh-1">
                                <bdi>
                                  6.8/10
                                </bdi>
                              </span>
                              <span className="fs-xs text-muted-2 text-truncate">
                                Moderate
                              </span>
                            </span>
                          </div>
                        </li>
                        <li className="col">
                          <div className="bg-plain border-theme d-flex align-items-center gap-3 h-100 p-3 rounded-3">
                            <span className="icon-box tint-rose" aria-hidden="true">
                              <i data-lucide="activity" />
                            </span>
                            <span className="d-flex flex-column gap-1 min-w-0">
                              <span className="fs-xs fw-semibold text-muted-2 text-truncate">
                                Volatility Index
                              </span>
                              <span className="fs-5 fw-bold text-title lh-1">
                                <bdi>
                                  7.2/10
                                </bdi>
                              </span>
                              <span className="fs-xs text-muted-2 text-truncate">
                                High
                              </span>
                            </span>
                          </div>
                        </li>
                        <li className="col">
                          <div className="bg-plain border-theme d-flex align-items-center gap-3 h-100 p-3 rounded-3">
                            <span className="icon-box tint-blue" aria-hidden="true">
                              <i data-lucide="layout-grid" />
                            </span>
                            <span className="d-flex flex-column gap-1 min-w-0">
                              <span className="fs-xs fw-semibold text-muted-2 text-truncate">
                                Diversification
                              </span>
                              <span className="fs-5 fw-bold text-title lh-1">
                                <bdi>
                                  72%
                                </bdi>
                              </span>
                              <span className="fs-xs text-muted-2 text-truncate">
                                Good
                              </span>
                            </span>
                          </div>
                        </li>
                        <li className="col">
                          <div className="bg-plain border-theme d-flex align-items-center gap-3 h-100 p-3 rounded-3">
                            <span className="icon-box tint-emerald" aria-hidden="true">
                              <i data-lucide="trending-up" />
                            </span>
                            <span className="d-flex flex-column gap-1 min-w-0">
                              <span className="fs-xs fw-semibold text-muted-2 text-truncate">
                                YTD Return
                              </span>
                              <span className="fs-5 fw-bold text-cat-emerald lh-1">
                                <bdi>
                                  +4.2%
                                </bdi>
                              </span>
                              <span className="fs-xs text-muted-2 text-truncate">
                                vs Benchmark
                              </span>
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Quick trade & converter ===== */}
      <section className="mb-4" aria-labelledby="crypto-trade-convert-title">
        <h2 className="visually-hidden" id="crypto-trade-convert-title">
          Quick trade and currency conversion
        </h2>
        <div className="row g-4">
          <div className="col-12 col-xl-7">
            <div className="card h-100">
              <div className="card-body d-flex flex-column gap-3">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    Quick Trade
                  </h3>
                  <p className="fs-sm fw-semibold text-muted-2 mb-0">
                    Instant execution
                  </p>
                </div>
                {/* Two sibling forms rather than one: buy and sell submit
                   independently and share no fields. */}
                <div className="row g-3 flex-grow-1">
                  <div className="col-12 col-md-6">
                    <form
                      className="tint-emerald border-current d-flex flex-column gap-3 h-100 p-3 rounded-4"
                      aria-labelledby="quickTradeBuyTitle"
                    >
                      <h4
                        id="quickTradeBuyTitle"
                        className="d-flex align-items-center gap-2 fs-md fw-bold text-title mb-0"
                      >
                        <i className="icon-18 text-cat-emerald" data-lucide="circle-plus" aria-hidden="true" />
                        Buy
                      </h4>
                      <div className="dropdown">
                        <button
                          type="button"
                          className="btn btn-outline-soft bg-plain d-flex align-items-center justify-content-between gap-2 w-100 px-3 rounded-3"
                          data-bs-toggle="dropdown"
                          data-bs-offset="0,6"
                          aria-expanded="false"
                        >
                          <span className="d-flex align-items-center gap-2 min-w-0">
                            <img
                              src="/assets/images/coin-btc.svg"
                              alt=""
                              width="24"
                              height="24"
                              className="brand-logo brand-logo-sm flex-shrink-0 pe-none"
                            />
                            <span className="fs-md fw-semibold text-title">
                              BTC
                            </span>
                          </span>
                          {" "}
                          <i className="icon-16" data-lucide="chevron-down" aria-hidden="true" />
                        </button>
                        {" "}
                        <ul className="dropdown-menu w-100 p-2">
                          <li>
                            <button type="button" className="dropdown-item">
                              BTC · Bitcoin
                            </button>
                          </li>
                          <li>
                            <button type="button" className="dropdown-item">
                              ETH · Ethereum
                            </button>
                          </li>
                          <li>
                            <button type="button" className="dropdown-item">
                              SOL · Solana
                            </button>
                          </li>
                          <li>
                            <button type="button" className="dropdown-item">
                              ADA · Cardano
                            </button>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-plain border-theme d-flex align-items-center gap-2 px-3 py-2 rounded-3">
                        <label htmlFor="quickTradeBuyAmount" className="visually-hidden">
                          Amount to buy
                        </label>
                        <input
                          type="text"
                          inputMode="decimal"
                          id="quickTradeBuyAmount"
                          name="buy-amount"
                          defaultValue="0.05"
                          className="form-control border-0 bg-transparent p-0 fs-6 fw-bold text-title"
                        />
                        <span className="flex-shrink-0 fs-sm text-muted-2">
                          BTC
                        </span>
                      </div>
                      <p className="d-flex align-items-center justify-content-between gap-2 fs-sm mb-0">
                        <span className="text-muted-2">
                          Price
                        </span>
                        <span className="fw-semibold text-title">
                          <bdi>
                            $67,450.32
                          </bdi>
                        </span>
                      </p>
                      <button type="submit" className="btn btn-success w-100 fw-bold">
                        Buy BTC
                      </button>
                      <p className="d-flex align-items-center justify-content-between gap-2 fs-sm mb-0">
                        <span className="text-muted-2">
                          Estimated total
                        </span>
                        <span className="fw-semibold text-title">
                          <bdi>
                            $3,372.51
                          </bdi>
                        </span>
                      </p>
                      <p className="d-flex align-items-center justify-content-between gap-2 fs-sm mt-auto mb-0">
                        <span className="text-muted-2">
                          Fee
                        </span>
                        <span className="fw-semibold text-title">
                          <bdi>
                            $1.20
                          </bdi>
                        </span>
                      </p>
                    </form>
                  </div>
                  <div className="col-12 col-md-6">
                    <form
                      className="tint-rose border-current d-flex flex-column gap-3 h-100 p-3 rounded-4"
                      aria-labelledby="quickTradeSellTitle"
                    >
                      <h4
                        id="quickTradeSellTitle"
                        className="d-flex align-items-center gap-2 fs-md fw-bold text-title mb-0"
                      >
                        <i className="icon-18 text-cat-red" data-lucide="circle-minus" aria-hidden="true" />
                        Sell
                      </h4>
                      <div className="dropdown">
                        <button
                          type="button"
                          className="btn btn-outline-soft bg-plain d-flex align-items-center justify-content-between gap-2 w-100 px-3 rounded-3"
                          data-bs-toggle="dropdown"
                          data-bs-offset="0,6"
                          aria-expanded="false"
                        >
                          <span className="d-flex align-items-center gap-2 min-w-0">
                            <img
                              src="/assets/images/coin-eth.svg"
                              alt=""
                              width="24"
                              height="24"
                              className="brand-logo brand-logo-sm flex-shrink-0 pe-none"
                            />
                            <span className="fs-md fw-semibold text-title">
                              ETH
                            </span>
                          </span>
                          {" "}
                          <i className="icon-16" data-lucide="chevron-down" aria-hidden="true" />
                        </button>
                        {" "}
                        <ul className="dropdown-menu w-100 p-2">
                          <li>
                            <button type="button" className="dropdown-item">
                              ETH · Ethereum
                            </button>
                          </li>
                          <li>
                            <button type="button" className="dropdown-item">
                              BTC · Bitcoin
                            </button>
                          </li>
                          <li>
                            <button type="button" className="dropdown-item">
                              AVAX · Avalanche
                            </button>
                          </li>
                          <li>
                            <button type="button" className="dropdown-item">
                              DOT · Polkadot
                            </button>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-plain border-theme d-flex align-items-center gap-2 px-3 py-2 rounded-3">
                        <label htmlFor="quickTradeSellAmount" className="visually-hidden">
                          Amount to sell
                        </label>
                        <input
                          type="text"
                          inputMode="decimal"
                          id="quickTradeSellAmount"
                          name="sell-amount"
                          defaultValue="2.0"
                          className="form-control border-0 bg-transparent p-0 fs-6 fw-bold text-title"
                        />
                        <span className="flex-shrink-0 fs-sm text-muted-2">
                          ETH
                        </span>
                      </div>
                      <p className="d-flex align-items-center justify-content-between gap-2 fs-sm mb-0">
                        <span className="text-muted-2">
                          Price
                        </span>
                        <span className="fw-semibold text-title">
                          <bdi>
                            $3,580.15
                          </bdi>
                        </span>
                      </p>
                      <button type="submit" className="btn btn-danger w-100 fw-bold">
                        Sell ETH
                      </button>
                      <p className="d-flex align-items-center justify-content-between gap-2 fs-sm mb-0">
                        <span className="text-muted-2">
                          Estimated total
                        </span>
                        <span className="fw-semibold text-title">
                          <bdi>
                            $7,160.30
                          </bdi>
                        </span>
                      </p>
                      <p className="d-flex align-items-center justify-content-between gap-2 fs-sm mt-auto mb-0">
                        <span className="text-muted-2">
                          Fee
                        </span>
                        <span className="fw-semibold text-title">
                          <bdi>
                            $1.20
                          </bdi>
                        </span>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-5">
            <div className="card h-100">
              <div className="card-body d-flex flex-column gap-3">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    Crypto Converter
                  </h3>
                  <span className="badge-soft tint-emerald border-current d-inline-flex align-items-center gap-2 flex-shrink-0 fs-xs fw-bold">
                    {" "}
                    <span className="legend-dot legend-dot-sm bg-cat-emerald" aria-hidden="true" />
                    Live rates
                    {" "}
                  </span>
                </div>
                {/* The pair stacks below sm, so the swap control centres
                   itself in whichever direction the row is running. */}
                <form className="d-flex flex-column flex-sm-row align-items-stretch align-items-sm-center gap-2">
                  <div className="bg-plain border-theme d-flex align-items-center gap-2 flex-grow-1 min-w-0 px-3 py-2 rounded-3">
                    <label htmlFor="cryptoConvertFrom" className="visually-hidden">
                      Amount to convert
                    </label>
                    <input
                      type="text"
                      inputMode="decimal"
                      id="cryptoConvertFrom"
                      name="convert-from"
                      defaultValue="1"
                      className="form-control border-0 bg-transparent p-0 fs-6 fw-bold text-title"
                    />
                    <div className="dropdown flex-shrink-0">
                      <button
                        type="button"
                        className="btn btn-ghost d-flex align-items-center gap-2 px-2 py-1 fs-md fw-semibold text-title"
                        data-bs-toggle="dropdown"
                        data-bs-offset="0,6"
                        aria-expanded="false"
                        aria-label="Convert from currency: BTC"
                      >
                        BTC
                        <i className="icon-16" data-lucide="chevron-down" aria-hidden="true" />
                      </button>
                      {" "}
                      <ul className="dropdown-menu dropdown-menu-end p-2">
                        <li>
                          <button type="button" className="dropdown-item">
                            BTC
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item">
                            ETH
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item">
                            SOL
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-accent btn-18 rounded-circle align-self-center flex-shrink-0"
                    aria-label="Swap the two currencies"
                  >
                    <i data-lucide="arrow-left-right" aria-hidden="true" />
                  </button>
                  <div className="bg-plain border-theme d-flex align-items-center gap-2 flex-grow-1 min-w-0 px-3 py-2 rounded-3">
                    <label htmlFor="cryptoConvertTo" className="visually-hidden">
                      Converted amount
                    </label>
                    <input
                      type="text"
                      inputMode="decimal"
                      id="cryptoConvertTo"
                      name="convert-to"
                      defaultValue="67,450.32"
                      readOnly
                      className="form-control border-0 bg-transparent p-0 fs-6 fw-bold text-title"
                    />
                    <div className="dropdown flex-shrink-0">
                      <button
                        type="button"
                        className="btn btn-ghost d-flex align-items-center gap-2 px-2 py-1 fs-md fw-semibold text-title"
                        data-bs-toggle="dropdown"
                        data-bs-offset="0,6"
                        aria-expanded="false"
                        aria-label="Convert to currency: USD"
                      >
                        USD
                        <i className="icon-16" data-lucide="chevron-down" aria-hidden="true" />
                      </button>
                      {" "}
                      <ul className="dropdown-menu dropdown-menu-end p-2">
                        <li>
                          <button type="button" className="dropdown-item">
                            USD
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item">
                            EUR
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item">
                            GBP
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </form>
                <div className="d-flex flex-column gap-2 flex-grow-1">
                  <h4 className="fs-sm fw-semibold text-muted-2 mb-0">
                    Recent rates
                  </h4>
                  <ul className="list-unstyled row row-cols-2 row-cols-sm-3 g-3 h-100 align-content-between mb-0">
                    <li className="col">
                      <div className="bg-plain border-theme d-flex flex-column h-100 p-3 rounded-3">
                        <span className="fs-sm text-muted-2 text-truncate">
                          ETH/BTC
                        </span>
                        <span className="fs-md fw-bold text-title">
                          <bdi>
                            0.0531
                          </bdi>
                        </span>
                      </div>
                    </li>
                    <li className="col">
                      <div className="bg-plain border-theme d-flex flex-column h-100 p-3 rounded-3">
                        <span className="fs-sm text-muted-2 text-truncate">
                          SOL/BTC
                        </span>
                        <span className="fs-md fw-bold text-title">
                          <bdi>
                            0.00264
                          </bdi>
                        </span>
                      </div>
                    </li>
                    <li className="col">
                      <div className="bg-plain border-theme d-flex flex-column h-100 p-3 rounded-3">
                        <span className="fs-sm text-muted-2 text-truncate">
                          ADA/ETH
                        </span>
                        <span className="fs-md fw-bold text-title">
                          <bdi>
                            0.0173
                          </bdi>
                        </span>
                      </div>
                    </li>
                    <li className="col">
                      <div className="bg-plain border-theme d-flex flex-column h-100 p-3 rounded-3">
                        <span className="fs-sm text-muted-2 text-truncate">
                          AVAX/BTC
                        </span>
                        <span className="fs-md fw-bold text-title">
                          <bdi>
                            0.000627
                          </bdi>
                        </span>
                      </div>
                    </li>
                    <li className="col">
                      <div className="bg-plain border-theme d-flex flex-column h-100 p-3 rounded-3">
                        <span className="fs-sm text-muted-2 text-truncate">
                          DOT/ETH
                        </span>
                        <span className="fs-md fw-bold text-title">
                          <bdi>
                            0.00236
                          </bdi>
                        </span>
                      </div>
                    </li>
                    <li className="col">
                      <div className="bg-plain border-theme d-flex flex-column h-100 p-3 rounded-3">
                        <span className="fs-sm text-muted-2 text-truncate">
                          LTC/ETH
                        </span>
                        <span className="fs-md fw-bold text-title">
                          <bdi>
                            0.0498
                          </bdi>
                        </span>
                      </div>
                    </li>
                    <li className="col">
                      <div className="bg-plain border-theme d-flex flex-column h-100 p-3 rounded-3">
                        <span className="fs-sm text-muted-2 text-truncate">
                          XRP/BTC
                        </span>
                        <span className="fs-md fw-bold text-title">
                          <bdi>
                            0.0000087
                          </bdi>
                        </span>
                      </div>
                    </li>
                    <li className="col">
                      <div className="bg-plain border-theme d-flex flex-column h-100 p-3 rounded-3">
                        <span className="fs-sm text-muted-2 text-truncate">
                          XLM/ETH
                        </span>
                        <span className="fs-md fw-bold text-title">
                          <bdi>
                            0.0000383
                          </bdi>
                        </span>
                      </div>
                    </li>
                    <li className="col">
                      <div className="bg-plain border-theme d-flex flex-column h-100 p-3 rounded-3">
                        <span className="fs-sm text-muted-2 text-truncate">
                          TRX/BTC
                        </span>
                        <span className="fs-md fw-bold text-title">
                          <bdi>
                            0.0000042
                          </bdi>
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Popular cryptocurrencies ===== */}
      <section className="mb-4" aria-labelledby="crypto-popular-title">
        <div className="card">
          <div className="card-body">
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
              <h2 id="crypto-popular-title" className="fs-4 fw-bold text-title mb-0">
                Popular Cryptocurrencies
              </h2>
              <div className="d-flex flex-wrap align-items-center gap-2">
                {/* Filters, not tab panels: one table is re-queried rather than
                   four being swapped, so these are pressed buttons. */}
                <div
                  className="nav nav-pills seg-toggle flex-wrap gap-1 p-1 rounded-pill bg-soft"
                  role="group"
                  aria-label="Filter popular cryptocurrencies"
                >
                  <button type="button" className="nav-link active fw-semibold" aria-pressed="true">
                    All
                  </button>
                  <button type="button" className="nav-link fw-semibold" aria-pressed="false">
                    Top Gainers
                  </button>
                  <button type="button" className="nav-link fw-semibold" aria-pressed="false">
                    Top Losers
                  </button>
                  <button type="button" className="nav-link fw-semibold" aria-pressed="false">
                    New Listing
                  </button>
                </div>
                <div className="dropdown flex-shrink-0">
                  <button
                    type="button"
                    className="btn btn-ghost btn-18 rounded-circle"
                    data-bs-toggle="dropdown"
                    data-dd-fixed=""
                    data-bs-offset="0,8"
                    aria-expanded="false"
                    aria-label="More actions for Popular Cryptocurrencies"
                  >
                    <i data-lucide="ellipsis-vertical" />
                  </button>
                  {" "}
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <button type="button" className="dropdown-item">
                        <i data-lucide="download" />
                        Export list
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        <i data-lucide="refresh-cw" />
                        Refresh
                      </button>
                    </li>
                    <li>
                      <button type="button" className="dropdown-item">
                        <i data-lucide="settings-2" />
                        Manage columns
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-striped table-hover align-middle mb-0">
                <caption className="visually-hidden">
                  Popular cryptocurrencies by recent trade activity
                </caption>
                <thead>
                  <tr>
                    <th scope="col">
                      #
                    </th>
                    <th scope="col">
                      Name
                    </th>
                    <th scope="col">
                      Amount
                    </th>
                    <th scope="col">
                      <bdi>
                        24h %
                      </bdi>
                    </th>
                    <th scope="col">
                      Market Cap
                    </th>
                    <th scope="col">
                      Volume (24h)
                    </th>
                    <th scope="col">
                      Chart
                    </th>
                    <th scope="col">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" className="fw-medium text-muted-2">
                      <bdi>
                        1
                      </bdi>
                    </th>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-sm bg-grad-bronze" aria-hidden="true">
                          B
                        </span>
                        <span className="d-flex flex-column min-w-0">
                          <span className="fs-md fw-semibold text-title text-truncate">
                            Bitcoin
                          </span>
                          <span className="fs-xs text-muted-2 text-truncate">
                            BTC · Buy Order
                          </span>
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-bold text-title">
                        <bdi>
                          $12,450.00
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-success border-current d-inline-flex align-items-center gap-2 fw-bold">
                        {" "}
                        <i className="icon-12 flip-rtl" data-lucide="arrow-up-right" aria-hidden="true" />
                        <bdi>
                          +4.2%
                        </bdi>
                        {" "}
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-bold text-title">
                        <bdi>
                          $1.33T
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-bold text-title">
                        <bdi>
                          $7.11B
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <div id="cryptoPopularBtcSpark" className="chart-inline" />
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-1">
                        <button
                          type="button"
                          className="btn btn-outline-soft btn-18 rounded-circle"
                          aria-label="Open Bitcoin market"
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
                            aria-label="More actions for Bitcoin"
                          >
                            <i data-lucide="ellipsis" />
                          </button>
                          {" "}
                          <ul className="dropdown-menu dropdown-menu-end p-2">
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="eye" />
                                View market
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="star" />
                                Add to watchlist
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="arrow-left-right" />
                                Trade
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="fw-medium text-muted-2">
                      <bdi>
                        2
                      </bdi>
                    </th>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-sm bg-grad-indigo" aria-hidden="true">
                          E
                        </span>
                        <span className="d-flex flex-column min-w-0">
                          <span className="fs-md fw-semibold text-title text-truncate">
                            Ethereum
                          </span>
                          <span className="fs-xs text-muted-2 text-truncate">
                            ETH · Sell Order
                          </span>
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-bold text-title">
                        <bdi>
                          $8,300.50
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-success border-current d-inline-flex align-items-center gap-2 fw-bold">
                        {" "}
                        <i className="icon-12 flip-rtl" data-lucide="arrow-up-right" aria-hidden="true" />
                        <bdi>
                          +6.8%
                        </bdi>
                        {" "}
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-bold text-title">
                        <bdi>
                          $430.2B
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-bold text-title">
                        <bdi>
                          $2.84B
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <div id="cryptoPopularEthSpark" className="chart-inline" />
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-1">
                        <button
                          type="button"
                          className="btn btn-outline-soft btn-18 rounded-circle"
                          aria-label="Open Ethereum market"
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
                            aria-label="More actions for Ethereum"
                          >
                            <i data-lucide="ellipsis" />
                          </button>
                          {" "}
                          <ul className="dropdown-menu dropdown-menu-end p-2">
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="eye" />
                                View market
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="star" />
                                Add to watchlist
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="arrow-left-right" />
                                Trade
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="fw-medium text-muted-2">
                      <bdi>
                        3
                      </bdi>
                    </th>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-sm bg-grad-orchid" aria-hidden="true">
                          S
                        </span>
                        <span className="d-flex flex-column min-w-0">
                          <span className="fs-md fw-semibold text-title text-truncate">
                            Solana
                          </span>
                          <span className="fs-xs text-muted-2 text-truncate">
                            SOL · Buy Order
                          </span>
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-bold text-title">
                        <bdi>
                          $15,780.00
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-success border-current d-inline-flex align-items-center gap-2 fw-bold">
                        {" "}
                        <i className="icon-12 flip-rtl" data-lucide="arrow-up-right" aria-hidden="true" />
                        <bdi>
                          +12.3%
                        </bdi>
                        {" "}
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-bold text-title">
                        <bdi>
                          $82.6B
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-bold text-title">
                        <bdi>
                          $1.12B
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <div id="cryptoPopularSolSpark" className="chart-inline" />
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-1">
                        <button
                          type="button"
                          className="btn btn-outline-soft btn-18 rounded-circle"
                          aria-label="Open Solana market"
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
                            aria-label="More actions for Solana"
                          >
                            <i data-lucide="ellipsis" />
                          </button>
                          {" "}
                          <ul className="dropdown-menu dropdown-menu-end p-2">
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="eye" />
                                View market
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="star" />
                                Add to watchlist
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="arrow-left-right" />
                                Trade
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="fw-medium text-muted-2">
                      <bdi>
                        4
                      </bdi>
                    </th>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-sm bg-grad-azure" aria-hidden="true">
                          BN
                        </span>
                        <span className="d-flex flex-column min-w-0">
                          <span className="fs-md fw-semibold text-title text-truncate">
                            BNB
                          </span>
                          <span className="fs-xs text-muted-2 text-truncate">
                            BNB · Sell Order
                          </span>
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-bold text-title">
                        <bdi>
                          $2,960.75
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-danger border-current d-inline-flex align-items-center gap-2 fw-bold">
                        {" "}
                        <i className="icon-12 flip-rtl" data-lucide="arrow-down-right" aria-hidden="true" />
                        <bdi>
                          -1.2%
                        </bdi>
                        {" "}
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-bold text-title">
                        <bdi>
                          $88.4B
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="fs-md fw-bold text-title">
                        <bdi>
                          $684M
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <div id="cryptoPopularBnbSpark" className="chart-inline" />
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-1">
                        <button
                          type="button"
                          className="btn btn-outline-soft btn-18 rounded-circle"
                          aria-label="Open BNB market"
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
                            aria-label="More actions for BNB"
                          >
                            <i data-lucide="ellipsis" />
                          </button>
                          {" "}
                          <ul className="dropdown-menu dropdown-menu-end p-2">
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="eye" />
                                View market
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="star" />
                                Add to watchlist
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="arrow-left-right" />
                                Trade
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
                Showing 1–4 of 24 trades
              </span>
              <nav aria-label="Popular cryptocurrencies pagination">
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
      {/* ===== DeFi, staking & news ===== */}
      <section className="mb-4" aria-labelledby="crypto-defi-news-title">
        <h2 className="visually-hidden" id="crypto-defi-news-title">
          DeFi ecosystem, staking yield and market news
        </h2>
        <div className="row g-4">
          {/* Ecosystem: the three headline DeFi measures, each with its own
             24h move. */}
          <div className="col-12 col-md-6 col-xxl-3">
            <div className="card h-100">
              <div className="card-body d-flex flex-column gap-3">
                <div className="min-w-0">
                  <p className="fs-xs fw-semibold text-uppercase text-body-2 mb-1">
                    Ecosystem
                  </p>
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    DeFi Overview
                  </h3>
                </div>
                {/* Each row grows to an equal share of whatever height the
                   tallest card in the row sets, so the list stays contiguous
                   instead of drifting apart around empty space. */}
                <ul className="list-unstyled d-flex flex-column gap-3 flex-grow-1 mb-0">
                  <li className="bg-plain border-theme d-flex flex-wrap align-items-center gap-3 flex-grow-1 p-3 rounded-3">
                    <span className="icon-box icon-box-sm tint-blue" aria-hidden="true">
                      <i data-lucide="landmark" />
                    </span>
                    <span className="d-flex flex-column flex-grow-1">
                      <span className="fs-xs fw-semibold text-muted-2">
                        Total Value Locked
                      </span>
                      <span className="fs-md fw-bold text-title">
                        <bdi>
                          $64.52B
                        </bdi>
                      </span>
                    </span>
                    <span className="badge-soft tint-success border-current d-inline-flex align-items-center gap-2 flex-shrink-0 fw-bold">
                      {" "}
                      <i className="icon-12 flip-rtl" data-lucide="arrow-up-right" aria-hidden="true" />
                      <bdi>
                        +2.1%
                      </bdi>
                      {" "}
                    </span>
                  </li>
                  <li className="bg-plain border-theme d-flex flex-wrap align-items-center gap-3 flex-grow-1 p-3 rounded-3">
                    <span className="icon-box icon-box-sm tint-violet" aria-hidden="true">
                      <i data-lucide="gem" />
                    </span>
                    <span className="d-flex flex-column flex-grow-1">
                      <span className="fs-xs fw-semibold text-muted-2">
                        AAVE (Top Protocol)
                      </span>
                      <span className="fs-md fw-bold text-title">
                        <bdi>
                          $12.45B
                        </bdi>
                      </span>
                    </span>
                    <span className="badge-soft tint-success border-current d-inline-flex align-items-center gap-2 flex-shrink-0 fw-bold">
                      {" "}
                      <i className="icon-12 flip-rtl" data-lucide="arrow-up-right" aria-hidden="true" />
                      <bdi>
                        +2.1%
                      </bdi>
                      {" "}
                    </span>
                  </li>
                  <li className="bg-plain border-theme d-flex flex-wrap align-items-center gap-3 flex-grow-1 p-3 rounded-3">
                    <span className="icon-box icon-box-sm tint-emerald" aria-hidden="true">
                      <i data-lucide="recycle" />
                    </span>
                    <span className="d-flex flex-column flex-grow-1">
                      <span className="fs-xs fw-semibold text-muted-2">
                        24h DeFi Volume
                      </span>
                      <span className="fs-md fw-bold text-title">
                        <bdi>
                          $5.32B
                        </bdi>
                      </span>
                    </span>
                    <span className="badge-soft tint-success border-current d-inline-flex align-items-center gap-2 flex-shrink-0 fw-bold">
                      {" "}
                      <i className="icon-12 flip-rtl" data-lucide="arrow-up-right" aria-hidden="true" />
                      <bdi>
                        +2.1%
                      </bdi>
                      {" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Yield: the staked total, then the per-coin positions that make
             it up. */}
          <div className="col-12 col-md-6 col-xxl-3">
            <div className="card h-100">
              <div className="card-body d-flex flex-column gap-3">
                <div className="min-w-0">
                  <p className="fs-xs fw-semibold text-uppercase text-body-2 mb-1">
                    Yield
                  </p>
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    Staking Overview
                  </h3>
                </div>
                <div className="bg-wash-indigo border-theme d-flex flex-wrap align-items-center justify-content-between gap-2 p-3 rounded-3">
                  <span className="d-flex flex-column min-w-0">
                    <span className="fs-xs fw-semibold text-muted-2 text-truncate">
                      Total Staked
                    </span>
                    <span className="fs-4 fw-bold text-title">
                      <bdi>
                        $18,245.32
                      </bdi>
                    </span>
                  </span>
                  <span className="badge-soft tint-success border-current d-inline-flex align-items-center gap-2 flex-shrink-0 fw-bold">
                    {" "}
                    <i className="icon-12 flip-rtl" data-lucide="arrow-up-right" aria-hidden="true" />
                    <bdi>
                      +2.1%
                    </bdi>
                    {" "}
                  </span>
                </div>
                {/* Dense cell padding: four columns have to clear a quarter-
                   width card without the value scrolling out of view. */}
                <div className="table-responsive">
                  <table className="table table-sm table-hover align-middle mb-0">
                    <caption className="visually-hidden">
                      Staked positions by coin, with annual percentage yield
                    </caption>
                    <thead>
                      <tr>
                        <th scope="col">
                          Coin
                        </th>
                        <th scope="col">
                          APY
                        </th>
                        <th scope="col">
                          Staked
                        </th>
                        <th scope="col" className="text-end">
                          Value
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
                          <span className="d-inline-flex align-items-center gap-2">
                            <span className="legend-dot bg-cat-emerald" aria-hidden="true" />
                            <span className="fs-md fw-bold text-title">
                              ETH
                            </span>
                          </span>
                        </th>
                        <td>
                          <span className="fs-md fw-bold text-cat-emerald">
                            <bdi>
                              4.2%
                            </bdi>
                          </span>
                        </td>
                        <td>
                          <span className="fs-sm fw-medium text-muted-2">
                            <bdi>
                              2.5 ETH
                            </bdi>
                          </span>
                        </td>
                        <td className="text-end">
                          <span className="fs-md fw-bold text-title">
                            <bdi>
                              $8,803
                            </bdi>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <span className="d-inline-flex align-items-center gap-2">
                            <span className="legend-dot bg-cat-cyan" aria-hidden="true" />
                            <span className="fs-md fw-bold text-title">
                              SOL
                            </span>
                          </span>
                        </th>
                        <td>
                          <span className="fs-md fw-bold text-cat-emerald">
                            <bdi>
                              6.8%
                            </bdi>
                          </span>
                        </td>
                        <td>
                          <span className="fs-sm fw-medium text-muted-2">
                            <bdi>
                              24 SOL
                            </bdi>
                          </span>
                        </td>
                        <td className="text-end">
                          <span className="fs-md fw-bold text-title">
                            <bdi>
                              $4,379
                            </bdi>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <span className="d-inline-flex align-items-center gap-2">
                            <span className="legend-dot bg-cat-amber" aria-hidden="true" />
                            <span className="fs-md fw-bold text-title">
                              ADA
                            </span>
                          </span>
                        </th>
                        <td>
                          <span className="fs-md fw-bold text-cat-emerald">
                            <bdi>
                              5.1%
                            </bdi>
                          </span>
                        </td>
                        <td>
                          <span className="fs-sm fw-medium text-muted-2">
                            <bdi>
                              1,200 ADA
                            </bdi>
                          </span>
                        </td>
                        <td className="text-end">
                          <span className="fs-md fw-bold text-title">
                            <bdi>
                              $504
                            </bdi>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* Latest: syndicated news items, so each one is a genuine article
             rather than a dashboard tile. */}
          <div className="col-12 col-xxl-6">
            <div className="card h-100">
              <div className="card-body d-flex flex-column gap-3">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                  <div className="min-w-0">
                    <p className="fs-xs fw-semibold text-uppercase text-body-2 mb-1">
                      Latest
                    </p>
                    <h3 className="fs-5 fw-bold text-title mb-0">
                      {"News & Updates"}
                    </h3>
                  </div>
                  <a href="#" className="btn btn-accent btn-sm fw-semibold text-nowrap">
                    View All
                  </a>
                </div>
                <ul className="list-unstyled row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3 mb-0">
                  <li className="col">
                    <article className="card bg-plain h-100">
                      <div className="card-body d-flex flex-column gap-2 p-2">
                        <div className="ratio ratio-16x9 rounded-4 overflow-hidden">
                          <img
                            src="/assets/images/news-bitcoin.jpg"
                            alt=""
                            width="768"
                            height="336"
                            className="object-fit-cover pe-none"
                          />
                        </div>
                        <div className="px-1">
                          <h4 className="fs-md fw-semibold text-title mb-1">
                            Bitcoin Hits New All-Time High
                          </h4>
                          <p className="fs-xs text-muted-2 mb-0">
                            Bitcoin surges past $70K as institutional adoption accelerates and ETF inflows reach record levels.
                          </p>
                        </div>
                      </div>
                    </article>
                  </li>
                  <li className="col">
                    <article className="card bg-plain h-100">
                      <div className="card-body d-flex flex-column gap-2 p-2">
                        <div className="ratio ratio-16x9 rounded-4 overflow-hidden">
                          <img
                            src="/assets/images/news-ethereum.jpg"
                            alt=""
                            width="768"
                            height="336"
                            className="object-fit-cover pe-none"
                          />
                        </div>
                        <div className="px-1">
                          <h4 className="fs-md fw-semibold text-title mb-1">
                            Ethereum 2.0 Staking Soars
                          </h4>
                          <p className="fs-xs text-muted-2 mb-0">
                            Ethereum staking reaches 30M ETH milestone as the network sees growing validator participation and DeFi growth.
                          </p>
                        </div>
                      </div>
                    </article>
                  </li>
                  <li className="col">
                    <article className="card bg-plain h-100">
                      <div className="card-body d-flex flex-column gap-2 p-2">
                        <div className="ratio ratio-16x9 rounded-4 overflow-hidden">
                          <img
                            src="/assets/images/news-solana.jpg"
                            alt=""
                            width="768"
                            height="336"
                            className="object-fit-cover pe-none"
                          />
                        </div>
                        <div className="px-1">
                          <h4 className="fs-md fw-semibold text-title mb-1">
                            Solana DeFi Ecosystem Grows
                          </h4>
                          <p className="fs-xs text-muted-2 mb-0">
                            Solana ecosystem TVL surpasses $8B as new protocols and NFT marketplaces drive network activity to new heights.
                          </p>
                        </div>
                      </div>
                    </article>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Watchlist, DeFi insights & activity ===== */}
      <section className="mb-4" aria-labelledby="crypto-watchlist-activity-title">
        <h2 className="visually-hidden" id="crypto-watchlist-activity-title">
          Watchlist, DeFi market insights, upcoming events and activity feed
        </h2>
        <div className="row g-4">
          {/* Watchlist: the same gainer row as the market overview above,
             carrying a per-coin trend mount alongside the 24h move. */}
          <div className="col-12 col-lg-6 col-xxl-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column gap-3">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    My Watchlist
                  </h3>
                  <p className="fs-sm fw-semibold text-muted-2 mb-0">
                    24h Change
                  </p>
                </div>
                <ul className="list-unstyled d-flex flex-column gap-2 flex-grow-1 mb-0">
                  <li className="bg-plain border-theme d-flex align-items-center justify-content-between flex-grow-1 gap-2 p-3 rounded-3">
                    <span className="d-flex align-items-center gap-3 min-w-0">
                      <img
                        src="/assets/images/coin-btc.svg"
                        alt=""
                        width="48"
                        height="48"
                        className="brand-logo flex-shrink-0 pe-none"
                      />
                      <span className="d-flex flex-column min-w-0 lh-sm">
                        <span className="fs-md fw-bold text-title text-truncate">
                          Bitcoin
                        </span>
                        <span className="fs-sm text-muted-2 text-truncate">
                          BTC
                        </span>
                      </span>
                    </span>
                    <div className="d-flex align-items-center flex-shrink-0 gap-3">
                      <span className="fs-md fw-bold text-title">
                        <bdi>
                          $67,450
                        </bdi>
                      </span>
                      <span className="badge-soft tint-success border-current d-inline-flex align-items-center gap-2 fw-bold">
                        {" "}
                        <i className="icon-12 flip-rtl" data-lucide="arrow-up-right" aria-hidden="true" />
                        <bdi>
                          +2.1%
                        </bdi>
                        {" "}
                      </span>
                      <div id="cryptoWatchlistBtcSpark" className="chart-inline" />
                    </div>
                  </li>
                  <li className="bg-plain border-theme d-flex align-items-center justify-content-between flex-grow-1 gap-2 p-3 rounded-3">
                    <span className="d-flex align-items-center gap-3 min-w-0">
                      <img
                        src="/assets/images/coin-eth.svg"
                        alt=""
                        width="48"
                        height="48"
                        className="brand-logo flex-shrink-0 pe-none"
                      />
                      <span className="d-flex flex-column min-w-0 lh-sm">
                        <span className="fs-md fw-bold text-title text-truncate">
                          Ethereum
                        </span>
                        <span className="fs-sm text-muted-2 text-truncate">
                          ETH
                        </span>
                      </span>
                    </span>
                    <div className="d-flex align-items-center flex-shrink-0 gap-3">
                      <span className="fs-md fw-bold text-title">
                        <bdi>
                          $67,450
                        </bdi>
                      </span>
                      <span className="badge-soft tint-success border-current d-inline-flex align-items-center gap-2 fw-bold">
                        {" "}
                        <i className="icon-12 flip-rtl" data-lucide="arrow-up-right" aria-hidden="true" />
                        <bdi>
                          +2.1%
                        </bdi>
                        {" "}
                      </span>
                      <div id="cryptoWatchlistEthSpark" className="chart-inline" />
                    </div>
                  </li>
                  <li className="bg-plain border-theme d-flex align-items-center justify-content-between flex-grow-1 gap-2 p-3 rounded-3">
                    <span className="d-flex align-items-center gap-3 min-w-0">
                      <img
                        src="/assets/images/coin-ltc.svg"
                        alt=""
                        width="48"
                        height="48"
                        className="brand-logo flex-shrink-0 pe-none"
                      />
                      <span className="d-flex flex-column min-w-0 lh-sm">
                        <span className="fs-md fw-bold text-title text-truncate">
                          Litecoin
                        </span>
                        <span className="fs-sm text-muted-2 text-truncate">
                          ITC / USDT
                        </span>
                      </span>
                    </span>
                    <div className="d-flex align-items-center flex-shrink-0 gap-3">
                      <span className="fs-md fw-bold text-title">
                        <bdi>
                          $67,450
                        </bdi>
                      </span>
                      <span className="badge-soft tint-success border-current d-inline-flex align-items-center gap-2 fw-bold">
                        {" "}
                        <i className="icon-12 flip-rtl" data-lucide="arrow-up-right" aria-hidden="true" />
                        <bdi>
                          +2.1%
                        </bdi>
                        {" "}
                      </span>
                      <div id="cryptoWatchlistLtcSpark" className="chart-inline" />
                    </div>
                  </li>
                  <li className="bg-plain border-theme d-flex align-items-center justify-content-between flex-grow-1 gap-2 p-3 rounded-3">
                    <span className="d-flex align-items-center gap-3 min-w-0">
                      <img
                        src="/assets/images/coin-ada.svg"
                        alt=""
                        width="48"
                        height="48"
                        className="brand-logo flex-shrink-0 pe-none"
                      />
                      <span className="d-flex flex-column min-w-0 lh-sm">
                        <span className="fs-md fw-bold text-title text-truncate">
                          Cardano
                        </span>
                        <span className="fs-sm text-muted-2 text-truncate">
                          ADA
                        </span>
                      </span>
                    </span>
                    <div className="d-flex align-items-center flex-shrink-0 gap-3">
                      <span className="fs-md fw-bold text-title">
                        <bdi>
                          $67,450
                        </bdi>
                      </span>
                      <span className="badge-soft tint-success border-current d-inline-flex align-items-center gap-2 fw-bold">
                        {" "}
                        <i className="icon-12 flip-rtl" data-lucide="arrow-up-right" aria-hidden="true" />
                        <bdi>
                          +2.1%
                        </bdi>
                        {" "}
                      </span>
                      <div id="cryptoWatchlistAdaSpark" className="chart-inline" />
                    </div>
                  </li>
                  <li className="bg-plain border-theme d-flex align-items-center justify-content-between flex-grow-1 gap-2 p-3 rounded-3">
                    <span className="d-flex align-items-center gap-3 min-w-0">
                      <img
                        src="/assets/images/coin-avax.svg"
                        alt=""
                        width="48"
                        height="48"
                        className="brand-logo flex-shrink-0 pe-none"
                      />
                      <span className="d-flex flex-column min-w-0 lh-sm">
                        <span className="fs-md fw-bold text-title text-truncate">
                          Avalanche
                        </span>
                        <span className="fs-sm text-muted-2 text-truncate">
                          AVAX
                        </span>
                      </span>
                    </span>
                    <div className="d-flex align-items-center flex-shrink-0 gap-3">
                      <span className="fs-md fw-bold text-title">
                        <bdi>
                          $67,450
                        </bdi>
                      </span>
                      <span className="badge-soft tint-success border-current d-inline-flex align-items-center gap-2 fw-bold">
                        {" "}
                        <i className="icon-12 flip-rtl" data-lucide="arrow-up-right" aria-hidden="true" />
                        <bdi>
                          +2.1%
                        </bdi>
                        {" "}
                      </span>
                      <div id="cryptoWatchlistAvaxSpark" className="chart-inline" />
                    </div>
                  </li>
                  <li className="bg-plain border-theme d-flex align-items-center justify-content-between flex-grow-1 gap-2 p-3 rounded-3">
                    <span className="d-flex align-items-center gap-3 min-w-0">
                      <img
                        src="/assets/images/coin-dot.svg"
                        alt=""
                        width="48"
                        height="48"
                        className="brand-logo flex-shrink-0 pe-none"
                      />
                      <span className="d-flex flex-column min-w-0 lh-sm">
                        <span className="fs-md fw-bold text-title text-truncate">
                          Polkadot
                        </span>
                        <span className="fs-sm text-muted-2 text-truncate">
                          DOT
                        </span>
                      </span>
                    </span>
                    <div className="d-flex align-items-center flex-shrink-0 gap-3">
                      <span className="fs-md fw-bold text-title">
                        <bdi>
                          $67,450
                        </bdi>
                      </span>
                      <span className="badge-soft tint-success border-current d-inline-flex align-items-center gap-2 fw-bold">
                        {" "}
                        <i className="icon-12 flip-rtl" data-lucide="arrow-up-right" aria-hidden="true" />
                        <bdi>
                          +2.1%
                        </bdi>
                        {" "}
                      </span>
                      <div id="cryptoWatchlistDotSpark" className="chart-inline" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Two stacked panels share this column, so they rise and fall
             together with the watchlist beside them. */}
          <div className="col-12 col-lg-6 col-xxl-5">
            <div className="d-flex flex-column gap-4 h-100">
              <div className="card">
                <div className="card-body d-flex flex-column gap-3">
                  <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                    <h3 className="fs-5 fw-bold text-title mb-0">
                      DeFi Market Insights
                    </h3>
                    <span className="badge-soft tint-success border-current d-inline-flex align-items-center gap-2 flex-shrink-0 fw-bold">
                      {" "}
                      <i className="icon-12 flip-rtl" data-lucide="arrow-up-right" aria-hidden="true" />
                      <bdi>
                        +2.1%
                      </bdi>
                      {" "}
                    </span>
                  </div>
                  <ul className="list-unstyled row row-cols-2 row-cols-xxl-4 g-3 mb-0">
                    <li className="col">
                      <div className="bg-plain border-theme d-flex flex-column gap-1 h-100 p-3 rounded-3">
                        <span className="fs-xs fw-semibold text-muted-2">
                          Total Value Locked
                        </span>
                        <span className="fs-5 fw-bold text-title lh-1">
                          <bdi>
                            $8.2B
                          </bdi>
                        </span>
                      </div>
                    </li>
                    <li className="col">
                      <div className="bg-plain border-theme d-flex flex-column gap-1 h-100 p-3 rounded-3">
                        <span className="fs-xs fw-semibold text-muted-2">
                          Active Protocols
                        </span>
                        <span className="fs-5 fw-bold text-title lh-1">
                          <bdi>
                            342
                          </bdi>
                        </span>
                      </div>
                    </li>
                    <li className="col">
                      <div className="bg-plain border-theme d-flex flex-column gap-1 h-100 p-3 rounded-3">
                        <span className="fs-xs fw-semibold text-muted-2">
                          Average APY
                        </span>
                        <span className="fs-5 fw-bold text-title lh-1">
                          <bdi>
                            12.4%
                          </bdi>
                        </span>
                      </div>
                    </li>
                    <li className="col">
                      <div className="bg-plain border-theme d-flex flex-column gap-1 h-100 p-3 rounded-3">
                        <span className="fs-xs fw-semibold text-muted-2">
                          Total Users
                        </span>
                        <span className="fs-5 fw-bold text-title lh-1">
                          <bdi>
                            2.1M
                          </bdi>
                        </span>
                      </div>
                    </li>
                  </ul>
                  {/* Shares of the largest protocol's $2.4B, so the bars read
                     against each other rather than against a hidden total. */}
                  <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                    <li>
                      <div className="d-flex align-items-center justify-content-between gap-2 mb-1">
                        <span className="d-inline-flex align-items-center gap-2 min-w-0">
                          <span className="legend-dot bg-cat-blue" aria-hidden="true" />
                          <span className="fs-md text-body-2 text-truncate">
                            Aave
                          </span>
                        </span>
                        <span className="fs-md fw-semibold text-title flex-shrink-0">
                          <bdi>
                            $2.4B
                          </bdi>
                        </span>
                      </div>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Aave value locked relative to the largest protocol"
                        aria-valuenow="63"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="progress-bar bg-cat-blue" style={{ width: "63%" }} />
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center justify-content-between gap-2 mb-1">
                        <span className="d-inline-flex align-items-center gap-2 min-w-0">
                          <span className="legend-dot bg-cat-emerald" aria-hidden="true" />
                          <span className="fs-md text-body-2 text-truncate">
                            Uniswap
                          </span>
                        </span>
                        <span className="fs-md fw-semibold text-title flex-shrink-0">
                          <bdi>
                            $1.8B
                          </bdi>
                        </span>
                      </div>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Uniswap value locked relative to the largest protocol"
                        aria-valuenow="48"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="progress-bar bg-cat-emerald" style={{ width: "48%" }} />
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center justify-content-between gap-2 mb-1">
                        <span className="d-inline-flex align-items-center gap-2 min-w-0">
                          <span className="legend-dot bg-cat-violet" aria-hidden="true" />
                          <span className="fs-md text-body-2 text-truncate">
                            Lido
                          </span>
                        </span>
                        <span className="fs-md fw-semibold text-title flex-shrink-0">
                          <bdi>
                            $1.2B
                          </bdi>
                        </span>
                      </div>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Lido value locked relative to the largest protocol"
                        aria-valuenow="32"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="progress-bar bg-cat-violet" style={{ width: "32%" }} />
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center justify-content-between gap-2 mb-1">
                        <span className="d-inline-flex align-items-center gap-2 min-w-0">
                          <span className="legend-dot bg-cat-amber" aria-hidden="true" />
                          <span className="fs-md text-body-2 text-truncate">
                            MakerDAO
                          </span>
                        </span>
                        <span className="fs-md fw-semibold text-title flex-shrink-0">
                          <bdi>
                            $0.9B
                          </bdi>
                        </span>
                      </div>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="MakerDAO value locked relative to the largest protocol"
                        aria-valuenow="24"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div className="progress-bar bg-cat-amber" style={{ width: "24%" }} />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card flex-grow-1">
                <div className="card-body d-flex flex-column gap-3">
                  <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                    <h3 className="fs-5 fw-bold text-title mb-0">
                      Upcoming Events
                    </h3>
                    <a href="#" className="btn btn-accent btn-sm fw-semibold text-nowrap">
                      View All
                    </a>
                  </div>
                  <ul className="list-unstyled d-flex flex-column justify-content-between gap-3 flex-grow-1 mb-0">
                    <li className="bg-plain border-theme d-flex align-items-center gap-3 p-3 rounded-3">
                      <span className="badge-soft bg-accent text-nav flex-shrink-0 fs-xs fw-bold">
                        <bdi>
                          Aug 15
                        </bdi>
                      </span>
                      <span className="d-flex flex-column flex-grow-1 min-w-0">
                        <span className="fs-md fw-bold text-title">
                          Bitcoin Halving Anniversary
                        </span>
                        <span className="fs-sm text-muted-2">
                          Market sentiment expected to shift as investors reflect.
                        </span>
                      </span>
                    </li>
                    <li className="bg-plain border-theme d-flex align-items-center gap-3 p-3 rounded-3">
                      <span className="badge-soft bg-accent text-nav flex-shrink-0 fs-xs fw-bold">
                        <bdi>
                          Aug 22
                        </bdi>
                      </span>
                      <span className="d-flex flex-column flex-grow-1 min-w-0">
                        <span className="fs-md fw-bold text-title">
                          Ethereum Shanghai Update
                        </span>
                        <span className="fs-sm text-muted-2">
                          Withdrawals enabled for staked ETH, impacting validator incentives.
                        </span>
                      </span>
                    </li>
                    <li className="bg-plain border-theme d-flex align-items-center gap-3 p-3 rounded-3">
                      <span className="badge-soft bg-accent text-nav flex-shrink-0 fs-xs fw-bold">
                        <bdi>
                          Sep 01
                        </bdi>
                      </span>
                      <span className="d-flex flex-column flex-grow-1 min-w-0">
                        <span className="fs-md fw-bold text-title">
                          Solana Breakpoint Conference
                        </span>
                        <span className="fs-sm text-muted-2">
                          Developer updates and ecosystem announcements.
                        </span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* The CRM dashboard's activity feed, unchanged apart from its
             entries — same component, same rows, same tints. */}
          <div className="col-12 col-xxl-3">
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
                    <span className="feed-icon tint-violet" aria-hidden="true">
                      <i data-lucide="user-round-plus" />
                    </span>
                    <span className="flex-grow-1 min-w-0 fw-medium text-title">
                      New Registration
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
      {/* ===== Recent transactions ===== */}
      <section className="mb-4">
        <h2 className="visually-hidden">
          Recent transactions
        </h2>
        <div className="card">
          <div className="card-body" data-bulk-scope="">
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
              <h3 className="fs-5 fw-bold text-title mb-0">
                Recent Transactions
              </h3>
              <div className="d-flex flex-wrap flex-lg-nowrap align-items-center gap-2">
                <div className="header-search min-w-0" role="search">
                  <i data-lucide="search" />
                  {" "}
                  <input
                    type="search"
                    id="txnSearch"
                    name="txn-q"
                    placeholder="Search files..."
                    aria-label="Search transactions"
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
                    id="txnExport"
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
                  <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="txnExport">
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
                    className="btn btn-accent-soft w-100 d-inline-flex flex-nowrap align-items-center justify-content-center gap-2 text-nowrap"
                    id="txnShare"
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
                  <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="txnShare">
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
                  Most recent store transactions
                </caption>
                <thead>
                  <tr>
                    <th scope="col">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="txnSelectAll"
                        data-bulk-all=""
                        aria-label="Select all rows"
                      />
                    </th>
                    <th scope="col">
                      Invoice Number
                    </th>
                    <th scope="col">
                      Client
                    </th>
                    <th scope="col">
                      Total
                    </th>
                    <th scope="col">
                      Payment Status
                    </th>
                    <th scope="col">
                      Transaction Date
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
                        aria-label="Select invoice INV-48275910384"
                      />
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title text-uppercase">
                        <bdi>
                          INV-48275910384
                        </bdi>
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
                        Completed
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
                          aria-label="Open invoice INV-48275910384"
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
                            aria-label="More actions for invoice INV-48275910384"
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
                                <i data-lucide="download" />
                                Download receipt
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="rotate-ccw" />
                                Refund
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
                        aria-label="Select invoice INV-48275910385"
                      />
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title text-uppercase">
                        <bdi>
                          INV-48275910385
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
                          $3,750.00
                        </bdi>
                      </span>
                    </td>
                    <td>
                      <span className="badge-soft tint-warning">
                        Pending
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
                          aria-label="Open invoice INV-48275910385"
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
                            aria-label="More actions for invoice INV-48275910385"
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
                                <i data-lucide="download" />
                                Download receipt
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="rotate-ccw" />
                                Refund
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
                        aria-label="Select invoice INV-48275910386"
                      />
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title text-uppercase">
                        <bdi>
                          INV-48275910386
                        </bdi>
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
                        Failed
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
                          aria-label="Open invoice INV-48275910386"
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
                            aria-label="More actions for invoice INV-48275910386"
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
                                <i data-lucide="download" />
                                Download receipt
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="rotate-ccw" />
                                Refund
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
                        aria-label="Select invoice INV-48275910387"
                      />
                    </td>
                    <td>
                      <span className="fs-md fw-semibold text-title text-uppercase">
                        <bdi>
                          INV-48275910387
                        </bdi>
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
                            priya.kapoor@techcorp.io
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
                        Completed
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
                          aria-label="Open invoice INV-48275910387"
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
                            aria-label="More actions for invoice INV-48275910387"
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
                                <i data-lucide="download" />
                                Download receipt
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="rotate-ccw" />
                                Refund
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
              <nav aria-label="Recent transactions pagination">
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

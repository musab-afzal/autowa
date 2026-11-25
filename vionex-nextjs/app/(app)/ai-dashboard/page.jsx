/* Generated from the Vionex HTML theme by scripts/convert-html.mjs */
import AppShell from "@/components/AppShell";

export const metadata = {
  title: "Vionex — AI Dashboard",
  description: "Vionex enterprise admin dashboard — AI operations overview built with Bootstrap 5, CSS variables and a scalable design system.",
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
      sidebar={
      <>
        <a
          href="#main-content"
          className="visually-hidden-focusable position-absolute top-0 start-0 z-3 m-2 px-3 py-2 rounded-3 shadow bg-body text-body"
        >
          Skip to main content
        </a>
        <div className="sidebar-backdrop" data-action="toggle-sidebar" />
        <aside className="app-sidebar d-flex">
          <div className="sidebar-rail d-flex flex-column align-items-center flex-shrink-0 gap-3 py-3 overflow-hidden position-relative">
            <span className="rail-shape" />
            <a className="logo-rail position-relative flex-shrink-0" href="/" aria-label="Vionex home">
              {" "}
              <svg
                className="rail-logo"
                width="46"
                height="36"
                viewBox="0 0 46 36"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  className="fill-secondary"
                  d="M2.88281 0.0130655H16.5386C18.0073 0.0118779 19.1038 0.277932 19.5104 1.5122L21.9449 8.89126H8.28917L5.85463 1.5122C5.44807 0.277932 4.10735 0.090336 2.88281 0.0130655Z"
                />
                {" "}
                <path
                  className="fill-primary"
                  d="M1.61826 0.0130615H15.3479C14.1132 0.419484 13.4418 1.74979 13.8482 2.98418L24.1236 34.1273C24.5301 35.3616 25.8384 35.6866 27.0955 35.6264C24.971 35.6264 12.4347 36.0199 11.4157 35.4075C10.9494 35.127 10.5775 34.6844 10.3941 34.1274L0.118659 2.98422C-0.287818 1.74979 0.383706 0.419484 1.61826 0.0130615Z"
                />
                {" "}
                <path
                  className="fill-secondary"
                  d="M28.6641 0.108919L40.5936 0.0130044C42.0624 0.0118169 43.1589 0.277869 43.5655 1.51214L46 8.8912H32.3443L29.9097 1.51214C29.5031 0.277908 29.8886 0.18611 28.6641 0.108919Z"
                />
                {" "}
                <path
                  className="fill-secondary"
                  d="M19.0244 35.7508H32.6802C34.1489 35.752 35.2454 35.486 35.652 34.2515L38.0865 26.8726H24.4308L21.9963 34.2515C21.5897 35.486 20.249 35.6736 19.0244 35.7508Z"
                />
                {" "}
                <path
                  className="fill-primary"
                  d="M17.7602 35.7508H31.4898C30.2551 35.3443 29.5836 34.0141 29.9901 32.7797L40.2655 1.63664C40.672 0.402131 40.6487 0.0467343 41.9057 0.106706C39.7812 0.106706 28.5764 -0.256174 27.5577 0.356448C27.0914 0.636752 26.7195 1.07928 26.5359 1.63664L16.2606 32.7797C15.8539 34.0141 16.5254 35.3443 17.7602 35.7508Z"
                />
              </svg>
              {" "}
            </a>
            <div className="position-relative my-auto w-100 min-h-0 d-flex flex-column align-items-center gap-3 py-2 overflow-y-auto scrollbar-thin">
              <button
                type="button"
                className="rail-btn active transition-base"
                data-cat="dashboards"
                aria-label="Dashboards"
                title="Dashboards"
              >
                <i data-lucide="layout-grid" />
              </button>
              <button type="button" className="rail-btn transition-base" data-cat="pages" aria-label="Pages" title="Pages">
                <i data-lucide="file-text" />
              </button>
              <button
                type="button"
                className="rail-btn transition-base"
                data-cat="authentication"
                aria-label="Authentication"
                title="Authentication"
              >
                <i data-lucide="key-round" />
              </button>
              <button type="button" className="rail-btn transition-base" data-cat="apps" aria-label="Apps" title="Apps">
                <i data-lucide="layout-dashboard" />
              </button>
              <button type="button" className="rail-btn transition-base" data-cat="forms" aria-label="Forms" title="Forms">
                <i data-lucide="clipboard-list" />
              </button>
              <button type="button" className="rail-btn transition-base" data-cat="charts" aria-label="Charts" title="Charts">
                <i data-lucide="pie-chart" />
              </button>
              <button
                type="button"
                className="rail-btn transition-base"
                data-cat="components"
                aria-label="Components"
                title="Components"
              >
                <i data-lucide="blocks" />
              </button>
              <button
                type="button"
                className="rail-btn transition-base"
                data-cat="ai"
                aria-label="AI Assistant"
                title="AI Assistant"
              >
                <i data-lucide="bot" />
              </button>
            </div>
          </div>
          {/* LEVEL 2 — nav panel (content swaps with the selected rail category) */}
          <div className="sidebar-panel d-flex flex-column overflow-hidden">
            <div className="app-brand d-flex align-items-center justify-content-between gap-2 flex-shrink-0 px-2 px-sm-3 pt-4 pb-3">
              <a href="/" className="brand-name" aria-label="Vionex">
                {" "}
                <svg width="95" height="24" viewBox="0 0 95 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path
                    className="fill-secondary"
                    d="M9.67236 18.4214L15.167 0.696289H19.7837L12.0034 22.7354H8.93066L9.67236 18.4214ZM4.60156 0.696289L10.0659 18.4214L10.853 22.7354H7.75L0 0.696289H4.60156Z"
                  />
                  {" "}
                  <path
                    className="fill-secondary"
                    d="M25.9897 6.35742V22.7354H21.9785V6.35742H25.9897ZM21.7061 2.07373C21.7061 1.47835 21.9079 0.983887 22.3115 0.590332C22.7253 0.196777 23.2803 0 23.9766 0C24.6729 0 25.2228 0.196777 25.6265 0.590332C26.0402 0.983887 26.2471 1.47835 26.2471 2.07373C26.2471 2.65902 26.0402 3.14844 25.6265 3.54199C25.2228 3.93555 24.6729 4.13232 23.9766 4.13232C23.2803 4.13232 22.7253 3.93555 22.3115 3.54199C21.9079 3.14844 21.7061 2.65902 21.7061 2.07373Z"
                  />
                  {" "}
                  <path
                    className="fill-secondary"
                    d="M29.0928 14.7129V14.395C29.0928 13.1942 29.2643 12.0892 29.6074 11.0801C29.9505 10.0609 30.45 9.1779 31.106 8.43115C31.7619 7.68441 32.5641 7.10417 33.5127 6.69043C34.4613 6.2666 35.541 6.05469 36.752 6.05469C37.9831 6.05469 39.0729 6.2666 40.0215 6.69043C40.9801 7.10417 41.7874 7.68441 42.4434 8.43115C43.0993 9.1779 43.5988 10.0609 43.9419 11.0801C44.285 12.0892 44.4565 13.1942 44.4565 14.395V14.7129C44.4565 15.9036 44.285 17.0086 43.9419 18.0278C43.5988 19.0369 43.0993 19.9199 42.4434 20.6768C41.7874 21.4235 40.9852 22.0037 40.0366 22.4175C39.0881 22.8312 38.0033 23.0381 36.7822 23.0381C35.5713 23.0381 34.4865 22.8312 33.5278 22.4175C32.5692 22.0037 31.7619 21.4235 31.106 20.6768C30.45 19.9199 29.9505 19.0369 29.6074 18.0278C29.2643 17.0086 29.0928 15.9036 29.0928 14.7129ZM33.0889 14.395V14.7129C33.0889 15.4294 33.1595 16.1004 33.3008 16.7261C33.4421 17.3517 33.659 17.9017 33.9517 18.376C34.2443 18.8503 34.6227 19.2236 35.0869 19.4961C35.5612 19.7585 36.1263 19.8896 36.7822 19.8896C37.4281 19.8896 37.9831 19.7585 38.4473 19.4961C38.9115 19.2236 39.2899 18.8503 39.5825 18.376C39.8853 17.9017 40.1073 17.3517 40.2485 16.7261C40.3898 16.1004 40.4604 15.4294 40.4604 14.7129V14.395C40.4604 13.6886 40.3898 13.0277 40.2485 12.4121C40.1073 11.7865 39.8853 11.2365 39.5825 10.7622C39.2899 10.2778 38.9064 9.89941 38.4321 9.62695C37.9679 9.3444 37.4079 9.20312 36.752 9.20312C36.1061 9.20312 35.5511 9.3444 35.0869 9.62695C34.6227 9.89941 34.2443 10.2778 33.9517 10.7622C33.659 11.2365 33.4421 11.7865 33.3008 12.4121C33.1595 13.0277 33.0889 13.6886 33.0889 14.395Z"
                  />
                  {" "}
                  <path
                    className="fill-secondary"
                    d="M51.2832 9.854V22.7354H47.2871V6.35742H51.041L51.2832 9.854ZM50.6475 13.9561H49.4668C49.4769 12.7653 49.6383 11.6855 49.9512 10.7168C50.264 9.74805 50.703 8.91553 51.2681 8.21924C51.8433 7.52295 52.5244 6.98812 53.3115 6.61475C54.0986 6.24137 54.9766 6.05469 55.9453 6.05469C56.7324 6.05469 57.4438 6.16569 58.0796 6.3877C58.7153 6.6097 59.2603 6.96289 59.7144 7.44727C60.1785 7.93164 60.5317 8.56738 60.7739 9.35449C61.0262 10.1315 61.1523 11.0902 61.1523 12.2305V22.7354H57.126V12.2002C57.126 11.4535 57.015 10.8631 56.793 10.4292C56.5811 9.99528 56.2682 9.6875 55.8545 9.50586C55.4508 9.32422 54.9513 9.2334 54.356 9.2334C53.7404 9.2334 53.2005 9.35954 52.7363 9.61182C52.2822 9.854 51.8988 10.1921 51.5859 10.626C51.2832 11.0599 51.0511 11.5594 50.8896 12.1245C50.7282 12.6896 50.6475 13.3001 50.6475 13.9561Z"
                  />
                  {" "}
                  <path
                    className="fill-secondary"
                    d="M72.0356 23.0381C70.7944 23.0381 69.6794 22.8363 68.6904 22.4326C67.7015 22.029 66.8589 21.4689 66.1626 20.7524C65.4764 20.0259 64.9466 19.1833 64.5732 18.2246C64.21 17.2559 64.0283 16.2165 64.0283 15.1064V14.501C64.0283 13.2396 64.21 12.0942 64.5732 11.0649C64.9365 10.0256 65.4512 9.13249 66.1172 8.38574C66.7832 7.639 67.5804 7.0638 68.5088 6.66016C69.4372 6.25651 70.4614 6.05469 71.5815 6.05469C72.742 6.05469 73.7663 6.25146 74.6543 6.64502C75.5423 7.02848 76.284 7.5734 76.8794 8.27979C77.4748 8.98617 77.9238 9.83382 78.2266 10.8228C78.5293 11.8016 78.6807 12.8864 78.6807 14.0771V15.7573H65.8447V13.0024H74.7451V12.6997C74.7249 12.064 74.6038 11.4837 74.3818 10.959C74.1598 10.4242 73.8167 10.0003 73.3525 9.6875C72.8883 9.36458 72.2879 9.20312 71.5513 9.20312C70.9559 9.20312 70.4362 9.33431 69.9922 9.59668C69.5583 9.84896 69.195 10.2122 68.9023 10.6865C68.6198 11.1507 68.4079 11.7057 68.2666 12.3516C68.1253 12.9974 68.0547 13.7139 68.0547 14.501V15.1064C68.0547 15.7926 68.1455 16.4284 68.3271 17.0137C68.5189 17.599 68.7964 18.1086 69.1597 18.5425C69.533 18.9663 69.9771 19.2993 70.4917 19.5415C71.0164 19.7736 71.6118 19.8896 72.2778 19.8896C73.1154 19.8896 73.8722 19.7282 74.5483 19.4053C75.2345 19.0723 75.8299 18.5828 76.3345 17.937L78.3477 20.0259C78.0046 20.5304 77.5404 21.0148 76.9551 21.479C76.3799 21.9432 75.6836 22.3216 74.8662 22.6143C74.0488 22.8968 73.1053 23.0381 72.0356 23.0381Z"
                  />
                  {" "}
                  <path
                    className="fill-secondary"
                    d="M84.4932 6.35742L87.4146 11.5645L90.3813 6.35742H94.7256L89.9121 14.3799L94.9224 22.7354H90.5781L87.4448 17.271L84.2964 22.7354H79.9521L84.9473 14.3799L80.1641 6.35742H84.4932Z"
                  />
                </svg>
                {" "}
              </a>
              <button
                type="button"
                className="brand-collapse d-flex align-items-center justify-content-center flex-shrink-0"
                data-action="toggle-sidebar"
                aria-label="Collapse sidebar"
              >
                <i data-lucide="panel-left-close" />
              </button>
            </div>
            <div className="flex-fill min-h-0 overflow-y-auto scrollbar-thin px-2 px-sm-3">
              <nav className="sidebar-nav is-active" data-menu="dashboards" aria-label="Core Business">
                <p className="nav-section-title fs-xs fw-semibold text-uppercase mb-2 px-3">
                  Core Business
                </p>
                <a
                  href="/"
                  className="sidebar-link active transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
                >
                  <i data-lucide="sparkles" />
                  <span>
                    AI Dashboard
                  </span>
                </a>
                {" "}
                <a
                  href="/analytics-dashboard"
                  className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
                >
                  <i data-lucide="bar-chart-3" />
                  <span>
                    Analytics Dashboard
                  </span>
                </a>
                {" "}
                <a
                  href="/crm-dashboard"
                  className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
                >
                  <i data-lucide="contact-round" />
                  <span>
                    CRM Dashboard
                  </span>
                </a>
                {" "}
                <a
                  href="/ecommerce-dashboard"
                  className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
                >
                  <i data-lucide="shopping-basket" />
                  <span>
                    Ecommerce Dashboard
                  </span>
                </a>
                {" "}
                <a
                  href="/finance-dashboard"
                  className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
                >
                  <i data-lucide="credit-card" />
                  <span>
                    Finance Dashboard
                  </span>
                </a>
                {" "}
                <a
                  href="/investment-dashboard"
                  className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
                >
                  <i data-lucide="circle-percent" />
                  <span>
                    Investment Dashboard
                  </span>
                </a>
                {" "}
                <a
                  href="/crypto-dashboard"
                  className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
                >
                  <i data-lucide="bitcoin" />
                  <span>
                    Cryptocurrency
                  </span>
                </a>
                {" "}
                <a
                  href="/medical-dashboard"
                  className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
                >
                  <i data-lucide="heart-pulse" />
                  <span>
                    Medical
                  </span>
                </a>
                {" "}
                <a
                  href="/hrm-dashboard"
                  className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
                >
                  <i data-lucide="users-round" />
                  <span>
                    HRM Dashboard
                  </span>
                </a>
                {" "}
                <a
                  href="/education-dashboard"
                  className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
                >
                  <i data-lucide="graduation-cap" />
                  <span>
                    Education
                  </span>
                </a>
                {" "}
                <a
                  href="/booking-dashboard"
                  className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
                >
                  <i data-lucide="calendar-check" />
                  <span>
                    Booking System
                  </span>
                </a>
                {" "}
                <a
                  href="/inventory-dashboard"
                  className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
                >
                  <i data-lucide="package" />
                  <span>
                    Inventory Dashboard
                  </span>
                </a>
                {" "}
                <a
                  href="/help-desk"
                  className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
                >
                  <i data-lucide="circle-help" />
                  <span>
                    Help Desk
                  </span>
                </a>
              </nav>
              {" "}
              <nav className="sidebar-nav" data-menu="pages" aria-label="Pages">
                <p className="nav-section-title fs-xs fw-semibold text-uppercase mb-2 px-3">
                  Pages
                </p>
                <a
                  href="/user-profile"
                  className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
                >
                  <i data-lucide="user-round" />
                  <span>
                    User Profile
                  </span>
                </a>
                {" "}
                <a
                  href="/pricing"
                  className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
                >
                  <i data-lucide="tag" />
                  <span>
                    Pricing
                  </span>
                </a>
                {" "}
                <a
                  href="/faq"
                  className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
                >
                  <i data-lucide="circle-help" />
                  <span>
                    FAQ
                  </span>
                </a>
                {" "}
                <button
                  type="button"
                  className="sidebar-link sidebar-parent collapsed transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap w-100 border-0 bg-transparent text-start"
                  data-bs-toggle="collapse"
                  data-bs-target="#sm-invoice"
                  aria-expanded="false"
                  aria-controls="sm-invoice"
                >
                  <i data-lucide="receipt" />
                  <span>
                    Invoice
                  </span>
                  <i data-lucide="chevron-right" className="sidebar-caret ms-auto" />
                </button>
                {" "}
                <div className="collapse sidebar-submenu" id="sm-invoice">
                  <a
                    href="/invoice-list"
                    className="sidebar-link sidebar-child transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
                  >
                    <span>
                      Invoice List
                    </span>
                  </a>
                  {" "}
                  <a
                    href="/create-invoice"
                    className="sidebar-link sidebar-child transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
                  >
                    <span>
                      Create Invoice
                    </span>
                  </a>
                </div>
                {" "}
                <a
                  href="/timeline"
                  className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
                >
                  <i data-lucide="git-commit-horizontal" />
                  <span>
                    Timeline
                  </span>
                </a>
                {" "}
                <a
                  href="/settings"
                  className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
                >
                  <i data-lucide="settings" />
                  <span>
                    Settings
                  </span>
                </a>
                {" "}
                <a
                  href="/error-pages"
                  className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
                >
                  <i data-lucide="triangle-alert" />
                  <span>
                    Error Pages
                  </span>
                </a>
              </nav>
              {" "}
              <nav className="sidebar-nav" data-menu="authentication" aria-label="Authentication">
                <p className="nav-section-title fs-xs fw-semibold text-uppercase mb-2 px-3">
                  Authentication
                </p>
                <a
                  href="/login"
                  className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
                >
                  <i data-lucide="log-in" />
                  <span>
                    Login
                  </span>
                </a>
                {" "}
                <a
                  href="/register"
                  className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
                >
                  <i data-lucide="user-plus" />
                  <span>
                    Register
                  </span>
                </a>
                {" "}
                <a
                  href="/forgot-password"
                  className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
                >
                  <i data-lucide="key-round" />
                  <span>
                    Forgot Password
                  </span>
                </a>
                {" "}
                <a
                  href="/lock-screen"
                  className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
                >
                  <i data-lucide="lock" />
                  <span>
                    Lock Screen
                  </span>
                </a>
                {" "}
                <a
                  href="/otp-verification"
                  className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
                >
                  <i data-lucide="shield-check" />
                  <span>
                    OTP Verification
                  </span>
                </a>
              </nav>
              {" "}
              <nav className="sidebar-nav" data-menu="apps" aria-label="Apps">
                <p className="nav-section-title fs-xs fw-semibold text-uppercase mb-2 px-3">
                  Apps
                </p>
                <a
                  href="/chat"
                  className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
                >
                  <i data-lucide="message-circle" />
                  <span>
                    Chat
                  </span>
                </a>
                {" "}
                <a
                  href="/email-inbox"
                  className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
                >
                  <i data-lucide="mail" />
                  <span>
                    Email
                  </span>
                </a>
                {" "}
                <a
                  href="/calendar"
                  className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
                >
                  <i data-lucide="calendar-days" />
                  <span>
                    Calendar
                  </span>
                </a>
                {" "}
                <a
                  href="/tasks"
                  className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
                >
                  <i data-lucide="square-check-big" />
                  <span>
                    Tasks
                  </span>
                </a>
                {" "}
                <a
                  href="/file-manager"
                  className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
                >
                  <i data-lucide="folder" />
                  <span>
                    File Manager
                  </span>
                </a>
              </nav>
              {" "}
              <nav className="sidebar-nav" data-menu="forms" aria-label="Forms">
                <p className="nav-section-title fs-xs fw-semibold text-uppercase mb-2 px-3">
                  Forms
                </p>
                <a
                  href="/basic-forms"
                  className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
                >
                  <i data-lucide="text-cursor-input" />
                  <span>
                    Basic Forms
                  </span>
                </a>
                {" "}
                <a
                  href="/advanced-forms"
                  className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
                >
                  <i data-lucide="sliders-horizontal" />
                  <span>
                    Advanced Forms
                  </span>
                </a>
                {" "}
                <a
                  href="/form-validation"
                  className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
                >
                  <i data-lucide="circle-check" />
                  <span>
                    Form Validation
                  </span>
                </a>
                {" "}
                <a
                  href="/form-wizard"
                  className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
                >
                  <i data-lucide="wand-sparkles" />
                  <span>
                    Form Wizard
                  </span>
                </a>
              </nav>
              {" "}
              <nav className="sidebar-nav" data-menu="charts" aria-label="Charts">
                <p className="nav-section-title fs-xs fw-semibold text-uppercase mb-2 px-3">
                  Charts
                </p>
                <a
                  href="/apex-charts"
                  className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
                >
                  <i data-lucide="chart-area" />
                  <span>
                    Apex Charts
                  </span>
                </a>
                {" "}
                <a
                  href="/chart-js"
                  className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
                >
                  <i data-lucide="chart-line" />
                  <span>
                    Chart.js
                  </span>
                </a>
                {" "}
                <a
                  href="/echarts"
                  className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
                >
                  <i data-lucide="chart-column" />
                  <span>
                    ECharts
                  </span>
                </a>
              </nav>
              {" "}
              <nav className="sidebar-nav" data-menu="components" aria-label="Components">
                <p className="nav-section-title fs-xs fw-semibold text-uppercase mb-2 px-3">
                  Components
                </p>
                <a
                  href="/buttons"
                  className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
                >
                  <i data-lucide="square-mouse-pointer" />
                  <span>
                    Buttons
                  </span>
                </a>
                {" "}
                <a
                  href="/cards"
                  className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
                >
                  <i data-lucide="square" />
                  <span>
                    Cards
                  </span>
                </a>
                {" "}
                <a
                  href="/alerts"
                  className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
                >
                  <i data-lucide="circle-alert" />
                  <span>
                    Alerts
                  </span>
                </a>
                {" "}
                <a
                  href="/tabs"
                  className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
                >
                  <i data-lucide="panels-top-left" />
                  <span>
                    Tabs
                  </span>
                </a>
                {" "}
                <a
                  href="/modals"
                  className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
                >
                  <i data-lucide="square-stack" />
                  <span>
                    Modals
                  </span>
                </a>
                {" "}
                <a
                  href="/dropdowns"
                  className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
                >
                  <i data-lucide="chevron-down-square" />
                  <span>
                    Dropdowns
                  </span>
                </a>
                {" "}
                <a
                  href="/accordions"
                  className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
                >
                  <i data-lucide="rows-3" />
                  <span>
                    Accordions
                  </span>
                </a>
              </nav>
              {" "}
              <nav className="sidebar-nav" data-menu="ai" aria-label="AI Assistant">
                <p className="nav-section-title fs-xs fw-semibold text-uppercase mb-2 px-3">
                  AI Assistant
                </p>
                <a
                  href="/ai-chat-bot"
                  className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
                >
                  <i data-lucide="brain" />
                  <span>
                    Think Longer
                  </span>
                </a>
                {" "}
                <a
                  href="/ai-chat-deep"
                  className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
                >
                  <i data-lucide="telescope" />
                  <span>
                    Deep Research
                  </span>
                </a>
                {" "}
                <a
                  href="/ai-chat-images"
                  className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
                >
                  <i data-lucide="image-plus" />
                  <span>
                    Create Image
                  </span>
                </a>
              </nav>
            </div>
            <div className="p-2 p-sm-3 flex-shrink-0">
              <div className="promo-card d-flex align-items-center gap-2 p-2 p-sm-3">
                <div className="lh-sm">
                  <p className="fs-xs fw-semibold text-white mb-1">
                    Your access expires in 2 days. Upgrade now for access!
                  </p>
                  <a href="/pricing" className="fs-md fw-medium text-accent">
                    Upgrade to Pro
                  </a>
                </div>
                <svg
                  className="promo-rocket float-y"
                  viewBox="0 0 86 93"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M28.6504 60.8477C21.9673 68.7544 11.888 76.318 0 86.5331L16.2206 79.922C14.2317 83.2183 11.3352 87.8306 9.71115 89.809C13.4498 88.083 19.4656 84.2866 21.4582 82.2739C21.4569 85.0827 18.0736 89.7807 16.5986 92.3473C25.2504 84.9428 33.1212 75.9026 35.6636 67.9619L28.6504 60.8477Z"
                    fill="#FFA121"
                  />
                  {" "}
                  <path
                    opacity="0.4"
                    d="M30.5448 61.248C26.5917 66.4886 20.6744 71.5397 13.6821 78.3438L23.1475 73.8525C21.9614 76.0292 20.2359 79.0759 19.2746 80.3866C21.4583 79.2192 24.9826 76.6741 26.1578 75.3369C26.1281 77.1741 24.1197 80.2819 23.2389 81.9761C28.3274 77.0437 32.9803 71.0496 34.5349 65.8293L30.5448 61.248Z"
                    fill="white"
                  />
                  {" "}
                  <path
                    className="fill-secondary"
                    d="M54.7562 14.4502C44.8723 23.1019 27.8257 17.1386 22.5286 24.0476L37.6649 36.0335L54.7562 14.4502Z"
                  />
                  {" "}
                  <path
                    d="M22.1069 24.4698C21.3494 26.485 21.7601 28.7536 23.1761 30.3755L33.9018 42.6611L37.2433 36.4559L22.1069 24.4698Z"
                    fill="white"
                  />
                  {" "}
                  <path
                    className="fill-secondary"
                    d="M77.1577 32.1891C71.0017 43.7929 80.7135 59.0186 75.2028 65.7584L60.0664 53.7724L77.1577 32.1891Z"
                  />
                  {" "}
                  <path
                    d="M74.7813 66.1801C72.9933 67.3793 70.691 67.4995 68.7878 66.4932L54.3708 58.8689L59.645 54.1942L74.7813 66.1801Z"
                    fill="white"
                  />
                  {" "}
                  <path d="M85.5213 0L72.0452 4.94741L83.7948 14.2514L85.5213 0Z" fill="#FFA121" />
                  {" "}
                  <path
                    className="fill-primary"
                    d="M84.2573 13.4907C82.3748 34.815 66.6188 54.7122 47.4824 65.7643L30.0437 51.9696C37.361 28.9476 50.9888 12.473 72.5079 4.18671L84.2573 13.4907Z"
                  />
                  {" "}
                  <path
                    className="fill-secondary"
                    d="M28.4858 52.7305L20.9216 57.9679L42.5576 75.101L45.9245 66.5252L28.4858 52.7305Z"
                  />
                  {" "}
                  <path
                    d="M66.8457 31.4464C71.2844 30.9187 74.4549 26.8926 73.9271 22.454C73.3994 18.0153 69.3734 14.8449 64.9347 15.3726C60.4961 15.9003 57.3256 19.9263 57.8533 24.365C58.381 28.8036 62.4071 31.9741 66.8457 31.4464Z"
                    fill="white"
                  />
                  {" "}
                  <path
                    className="fill-nav"
                    d="M66.5026 29.1437L66.4511 28.6586C66.9152 28.6091 67.3711 28.4986 67.8068 28.3296L67.9831 28.7847C67.508 28.9692 67.0095 29.09 66.5024 29.1439L66.5026 29.1437ZM64.9792 29.105C64.4747 29.025 63.9828 28.878 63.5187 28.668L63.7197 28.2234C64.1443 28.4153 64.5938 28.5497 65.0554 28.6231L64.979 29.1048L64.9792 29.105ZM69.3183 28.0493L69.0286 27.6572C69.4022 27.3806 69.7397 27.0541 70.0307 26.6864L70.4128 26.9895C70.0951 27.391 69.7272 27.7474 69.3183 28.0493ZM62.2258 27.8625C61.8298 27.5371 61.48 27.1622 61.1861 26.7482L61.5835 26.4656C61.8526 26.8445 62.1729 27.1876 62.5356 27.4856L62.2258 27.8625ZM71.0089 26.0712L70.5762 25.8457C70.7915 25.4321 70.9511 24.991 71.0509 24.5343L71.5275 24.6381C71.4188 25.137 71.2445 25.6191 71.0091 26.071L71.0089 26.0712ZM60.4756 25.3997C60.3008 24.9221 60.1887 24.4217 60.144 23.9125L60.63 23.8695C60.6714 24.336 60.7735 24.7943 60.9341 25.2313L60.4756 25.3997ZM71.1652 23.1439C71.141 22.6762 71.0558 22.2144 70.9117 21.7713L71.3758 21.6209C71.5332 22.1045 71.6261 22.6085 71.6522 23.1189L71.1652 23.1439ZM60.6915 22.4758L60.2112 22.3899C60.3008 21.8869 60.4575 21.3988 60.6763 20.9385L61.1166 21.1477C60.917 21.5689 60.7735 22.0157 60.6915 22.4758ZM70.309 20.5138C70.0541 20.1248 69.7467 19.7698 69.3959 19.4589L69.7199 19.0939C70.1025 19.4333 70.438 19.8211 70.7167 20.2466L70.3088 20.514L70.309 20.5138ZM61.8761 19.9773L61.5054 19.6605C61.8376 19.2711 62.2188 18.9286 62.6386 18.6416L62.914 19.0447C62.5295 19.307 62.1805 19.6209 61.8761 19.9773ZM68.2403 18.6778C67.8224 18.4697 67.3778 18.3184 66.9203 18.2279L67.0146 17.7489C67.515 17.848 68.0004 18.0134 68.4575 18.2408L68.2403 18.6778ZM64.1601 18.4186L64.0008 17.9573C64.4815 17.7912 64.9839 17.6888 65.4933 17.6533L65.5277 18.1402C65.0606 18.1726 64.601 18.2663 64.1601 18.4186Z"
                  />
                  {" "}
                  <path
                    className="fill-nav"
                    d="M42.8161 52.9427L42.4303 52.6373C41.8619 52.1872 41.0363 52.283 40.5861 52.8514L25.4081 72.0185C24.958 72.5869 25.0539 73.4126 25.6223 73.8627L26.008 74.1682C26.5764 74.6183 27.4021 74.5224 27.8522 73.954L43.0302 54.7869C43.4803 54.2185 43.3844 53.3928 42.8161 52.9427Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </aside>
        <div className="sidebar-flyout scrollbar-thin" role="menu">
          <div data-flyout-menu="dashboards">
            <p className="sidebar-flyout-title">
              Dashboards
            </p>
            <nav className="sidebar-nav" aria-label="Core Business">
              <p className="nav-section-title fs-xs fw-semibold text-uppercase mb-2 px-3">
                Core Business
              </p>
              <a href="/" className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap">
                <i data-lucide="sparkles" />
                <span>
                  AI Dashboard
                </span>
              </a>
              {" "}
              <a
                href="/analytics-dashboard"
                className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
              >
                <i data-lucide="bar-chart-3" />
                <span>
                  Analytics Dashboard
                </span>
              </a>
              {" "}
              <a
                href="/crm-dashboard"
                className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
              >
                <i data-lucide="contact-round" />
                <span>
                  CRM Dashboard
                </span>
              </a>
              {" "}
              <a
                href="/ecommerce-dashboard"
                className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
              >
                <i data-lucide="shopping-basket" />
                <span>
                  Ecommerce Dashboard
                </span>
              </a>
              {" "}
              <a
                href="/finance-dashboard"
                className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
              >
                <i data-lucide="credit-card" />
                <span>
                  Finance Dashboard
                </span>
              </a>
              {" "}
              <a
                href="/investment-dashboard"
                className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
              >
                <i data-lucide="circle-percent" />
                <span>
                  Investment Dashboard
                </span>
              </a>
              {" "}
              <a
                href="/crypto-dashboard"
                className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
              >
                <i data-lucide="bitcoin" />
                <span>
                  Cryptocurrency
                </span>
              </a>
              {" "}
              <a
                href="/medical-dashboard"
                className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
              >
                <i data-lucide="heart-pulse" />
                <span>
                  Medical
                </span>
              </a>
              {" "}
              <a
                href="/hrm-dashboard"
                className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
              >
                <i data-lucide="users-round" />
                <span>
                  HRM Dashboard
                </span>
              </a>
              {" "}
              <a
                href="/education-dashboard"
                className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
              >
                <i data-lucide="graduation-cap" />
                <span>
                  Education
                </span>
              </a>
              {" "}
              <a
                href="/booking-dashboard"
                className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
              >
                <i data-lucide="calendar-check" />
                <span>
                  Booking System
                </span>
              </a>
              {" "}
              <a
                href="/inventory-dashboard"
                className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
              >
                <i data-lucide="package" />
                <span>
                  Inventory Dashboard
                </span>
              </a>
              {" "}
              <a
                href="/help-desk"
                className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
              >
                <i data-lucide="circle-help" />
                <span>
                  Help Desk
                </span>
              </a>
            </nav>
          </div>
          <div className="d-none" data-flyout-menu="pages">
            <p className="sidebar-flyout-title">
              Pages
            </p>
            <nav className="sidebar-nav" aria-label="Pages">
              <p className="nav-section-title fs-xs fw-semibold text-uppercase mb-2 px-3">
                Pages
              </p>
              <a
                href="/user-profile"
                className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
              >
                <i data-lucide="user-round" />
                <span>
                  User Profile
                </span>
              </a>
              {" "}
              <a
                href="/pricing"
                className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
              >
                <i data-lucide="tag" />
                <span>
                  Pricing
                </span>
              </a>
              {" "}
              <a
                href="/faq"
                className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
              >
                <i data-lucide="circle-help" />
                <span>
                  FAQ
                </span>
              </a>
              {" "}
              <button
                type="button"
                className="sidebar-link sidebar-parent menu-open transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap w-100 border-0 bg-transparent text-start"
                aria-expanded="true"
              >
                <i data-lucide="receipt" />
                <span>
                  Invoice
                </span>
                <i data-lucide="chevron-right" className="sidebar-caret ms-auto" />
              </button>
              {" "}
              <div className="collapse show sidebar-submenu">
                <a
                  href="/invoice-list"
                  className="sidebar-link sidebar-child transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
                >
                  <span>
                    Invoice List
                  </span>
                </a>
                {" "}
                <a
                  href="/create-invoice"
                  className="sidebar-link sidebar-child transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
                >
                  <span>
                    Create Invoice
                  </span>
                </a>
              </div>
              {" "}
              <a
                href="/timeline"
                className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
              >
                <i data-lucide="git-commit-horizontal" />
                <span>
                  Timeline
                </span>
              </a>
              {" "}
              <a
                href="/settings"
                className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
              >
                <i data-lucide="settings" />
                <span>
                  Settings
                </span>
              </a>
              {" "}
              <a
                href="/error-pages"
                className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
              >
                <i data-lucide="triangle-alert" />
                <span>
                  Error Pages
                </span>
              </a>
            </nav>
          </div>
          {" "}
          <div className="d-none" data-flyout-menu="authentication">
            <p className="sidebar-flyout-title">
              Authentication
            </p>
            <nav className="sidebar-nav" aria-label="Authentication">
              <p className="nav-section-title fs-xs fw-semibold text-uppercase mb-2 px-3">
                Authentication
              </p>
              <a
                href="/login"
                className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
              >
                <i data-lucide="log-in" />
                <span>
                  Login
                </span>
              </a>
              {" "}
              <a
                href="/register"
                className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
              >
                <i data-lucide="user-plus" />
                <span>
                  Register
                </span>
              </a>
              {" "}
              <a
                href="/forgot-password"
                className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
              >
                <i data-lucide="key-round" />
                <span>
                  Forgot Password
                </span>
              </a>
              {" "}
              <a
                href="/lock-screen"
                className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
              >
                <i data-lucide="lock" />
                <span>
                  Lock Screen
                </span>
              </a>
              {" "}
              <a
                href="/otp-verification"
                className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
              >
                <i data-lucide="shield-check" />
                <span>
                  OTP Verification
                </span>
              </a>
            </nav>
          </div>
          {" "}
          <div className="d-none" data-flyout-menu="apps">
            <p className="sidebar-flyout-title">
              Apps
            </p>
            <nav className="sidebar-nav" aria-label="Apps">
              <p className="nav-section-title fs-xs fw-semibold text-uppercase mb-2 px-3">
                Apps
              </p>
              <a
                href="/chat"
                className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
              >
                <i data-lucide="message-circle" />
                <span>
                  Chat
                </span>
              </a>
              {" "}
              <a
                href="/email-inbox"
                className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
              >
                <i data-lucide="mail" />
                <span>
                  Email
                </span>
              </a>
              {" "}
              <a
                href="/calendar"
                className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
              >
                <i data-lucide="calendar-days" />
                <span>
                  Calendar
                </span>
              </a>
              {" "}
              <a
                href="/tasks"
                className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
              >
                <i data-lucide="square-check-big" />
                <span>
                  Tasks
                </span>
              </a>
              {" "}
              <a
                href="/file-manager"
                className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
              >
                <i data-lucide="folder" />
                <span>
                  File Manager
                </span>
              </a>
            </nav>
          </div>
          {" "}
          <div className="d-none" data-flyout-menu="forms">
            <p className="sidebar-flyout-title">
              Forms
            </p>
            <nav className="sidebar-nav" aria-label="Forms">
              <p className="nav-section-title fs-xs fw-semibold text-uppercase mb-2 px-3">
                Forms
              </p>
              <a
                href="/basic-forms"
                className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
              >
                <i data-lucide="text-cursor-input" />
                <span>
                  Basic Forms
                </span>
              </a>
              {" "}
              <a
                href="/advanced-forms"
                className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
              >
                <i data-lucide="sliders-horizontal" />
                <span>
                  Advanced Forms
                </span>
              </a>
              {" "}
              <a
                href="/form-validation"
                className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
              >
                <i data-lucide="circle-check" />
                <span>
                  Form Validation
                </span>
              </a>
              {" "}
              <a
                href="/form-wizard"
                className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
              >
                <i data-lucide="wand-sparkles" />
                <span>
                  Form Wizard
                </span>
              </a>
            </nav>
          </div>
          {" "}
          <div className="d-none" data-flyout-menu="charts">
            <p className="sidebar-flyout-title">
              Charts
            </p>
            <nav className="sidebar-nav" aria-label="Charts">
              <p className="nav-section-title fs-xs fw-semibold text-uppercase mb-2 px-3">
                Charts
              </p>
              <a
                href="/apex-charts"
                className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
              >
                <i data-lucide="chart-area" />
                <span>
                  Apex Charts
                </span>
              </a>
              {" "}
              <a
                href="/chart-js"
                className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
              >
                <i data-lucide="chart-line" />
                <span>
                  Chart.js
                </span>
              </a>
              {" "}
              <a
                href="/echarts"
                className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
              >
                <i data-lucide="chart-column" />
                <span>
                  ECharts
                </span>
              </a>
            </nav>
          </div>
          {" "}
          <div className="d-none" data-flyout-menu="components">
            <p className="sidebar-flyout-title">
              Components
            </p>
            <nav className="sidebar-nav" aria-label="Components">
              <p className="nav-section-title fs-xs fw-semibold text-uppercase mb-2 px-3">
                Components
              </p>
              <a
                href="/buttons"
                className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
              >
                <i data-lucide="square-mouse-pointer" />
                <span>
                  Buttons
                </span>
              </a>
              {" "}
              <a
                href="/cards"
                className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
              >
                <i data-lucide="square" />
                <span>
                  Cards
                </span>
              </a>
              {" "}
              <a
                href="/alerts"
                className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
              >
                <i data-lucide="circle-alert" />
                <span>
                  Alerts
                </span>
              </a>
              {" "}
              <a
                href="/tabs"
                className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
              >
                <i data-lucide="panels-top-left" />
                <span>
                  Tabs
                </span>
              </a>
              {" "}
              <a
                href="/modals"
                className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
              >
                <i data-lucide="square-stack" />
                <span>
                  Modals
                </span>
              </a>
              {" "}
              <a
                href="/dropdowns"
                className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
              >
                <i data-lucide="chevron-down-square" />
                <span>
                  Dropdowns
                </span>
              </a>
              {" "}
              <a
                href="/accordions"
                className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
              >
                <i data-lucide="rows-3" />
                <span>
                  Accordions
                </span>
              </a>
            </nav>
          </div>
          {" "}
          <div className="d-none" data-flyout-menu="ai">
            <p className="sidebar-flyout-title">
              AI Assistant
            </p>
            <nav className="sidebar-nav" aria-label="AI Assistant">
              <p className="nav-section-title fs-xs fw-semibold text-uppercase mb-2 px-3">
                AI Assistant
              </p>
              <a
                href="/ai-chat-bot"
                className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
              >
                <i data-lucide="brain" />
                <span>
                  Think Longer
                </span>
              </a>
              {" "}
              <a
                href="/ai-chat-deep"
                className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
              >
                <i data-lucide="telescope" />
                <span>
                  Deep Research
                </span>
              </a>
              {" "}
              <a
                href="/ai-chat-images"
                className="sidebar-link transition-base d-flex align-items-center gap-2 mb-1 fw-medium text-nowrap"
              >
                <i data-lucide="image-plus" />
                <span>
                  Create Image
                </span>
              </a>
            </nav>
          </div>
        </div>
      </>
    }
    >
      {/* ===== Page header ===== */}
      <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
        <h1 className="fs-4 fw-bold text-title mb-0">
          AI Dashboard
        </h1>
        <nav aria-label="breadcrumb" className="d-none d-md-block">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="/">
                Dashboard
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              AI Dashboard
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
            <h2 id="welcome-title" className="text-title mb-1">
              Welcome back, Alex
              {" "}
              <span aria-hidden="true">
                👋
              </span>
            </h2>
            <p className="fw-medium text-primary mb-4">
              Here's what's happening with your business today.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <a
                href="#"
                className="d-flex flex-grow-1 mw-fit align-items-center gap-2 ps-2 pe-3 py-2 rounded-pill tile-soft transition-base"
              >
                <span className="icon-box bg-muted rounded-circle" aria-hidden="true">
                  <i data-lucide="bot" />
                </span>
                <span className="flex-grow-1 min-w-0 fw-medium text-truncate">
                  Create Agents
                </span>
                <i className="icon-20 flip-rtl" data-lucide="chevron-right" aria-hidden="true" />
              </a>
              <a
                href="#"
                className="d-flex flex-grow-1 mw-fit align-items-center gap-2 ps-2 pe-3 py-2 rounded-pill tile-soft transition-base"
              >
                <span className="icon-box bg-muted rounded-circle" aria-hidden="true">
                  <i data-lucide="database" />
                </span>
                <span className="flex-grow-1 min-w-0 fw-medium text-truncate">
                  Upload Datasets
                </span>
                <i className="icon-20 flip-rtl" data-lucide="chevron-right" aria-hidden="true" />
              </a>
              <a
                href="#"
                className="d-flex flex-grow-1 mw-fit align-items-center gap-2 ps-2 pe-3 py-2 rounded-pill tile-soft transition-base"
              >
                <span className="icon-box bg-muted rounded-circle" aria-hidden="true">
                  <i data-lucide="clipboard-list" />
                </span>
                <span className="flex-grow-1 min-w-0 fw-medium text-truncate">
                  Generate Report
                </span>
                <i className="icon-20 flip-rtl" data-lucide="chevron-right" aria-hidden="true" />
              </a>
            </div>
          </div>
          {/* Account summary */}
          <div className="col-12 col-xxl-5">
            <div className="row g-3">
              <div className="col-12 col-sm-5">
                <div className="on-page d-flex flex-column justify-content-between gap-3 h-100 p-3 rounded-4 bg-plain">
                  <h3 className="d-flex align-items-center gap-2 fs-5 text-title mb-0">
                    <span className="icon-box bg-accent text-nav rounded-circle" aria-hidden="true">
                      <i data-lucide="wallet" />
                    </span>
                    AI Credits
                  </h3>
                  <div className="d-flex flex-column gap-1">
                    <span className="fs-5 fw-bold text-title">
                      $248,420
                    </span>
                    <span className="d-flex flex-wrap align-items-center gap-2 fs-md">
                      <span className="d-inline-flex align-items-center gap-1 fw-semibold text-cat-emerald">
                        <i className="icon-20" data-lucide="trending-up" aria-hidden="true" />
                        <span dir="ltr">
                          +18.2%
                        </span>
                      </span>
                      <span className="text-muted-2">
                        vs last month
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-7">
                <div className="position-relative overflow-hidden d-flex flex-column justify-content-between gap-3 h-100 p-3 rounded-4 bg-grad-6">
                  <img
                    src="/assets/images/invoice-art.svg"
                    alt=""
                    className="card-art position-absolute top-50 translate-middle-y pe-none"
                  />
                  <h3 className="position-relative d-flex align-items-center gap-2 fs-5 text-title mb-0">
                    <span className="icon-box bg-muted rounded-circle" aria-hidden="true">
                      <i data-lucide="gem" />
                    </span>
                    Current Plan
                  </h3>
                  <div className="position-relative d-flex flex-column gap-1">
                    <span className="fs-5 fw-bold text-title">
                      Enterprise
                    </span>
                    <span className="fs-md text-title">
                      Renews in 12 Days
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Key metrics ===== */}
      <section className="mb-4">
        <h2 className="visually-hidden">
          Key metrics
        </h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-xl-3 row-cols-xxl-5 g-3">
          <div className="col">
            <div className="position-relative overflow-hidden h-100 p-3 rounded-4 bg-wash-rose">
              <img
                src="/assets/images/burst-art.svg"
                alt=""
                className="card-watermark position-absolute top-0 pe-none"
              />
              <div className="position-relative d-flex flex-column justify-content-between gap-4 h-100">
                <div className="d-flex flex-column gap-2">
                  <span className="icon-box bg-cat-red text-white rounded-circle" aria-hidden="true">
                    <i data-lucide="send" />
                  </span>
                  <h3 className="fs-5 fw-medium text-primary mb-0">
                    AI Requests
                  </h3>
                </div>
                <div className="d-flex flex-column gap-2">
                  <span className="fs-2 fw-bold text-title">
                    <bdi>
                      2.84M
                    </bdi>
                  </span>
                  <span className="d-flex flex-wrap align-items-center gap-2 fs-md">
                    <span className="badge-soft tint-success d-inline-flex align-items-center gap-1">
                      {" "}
                      <i className="icon-20" data-lucide="trending-up" aria-hidden="true" />
                      <span dir="ltr">
                        +18.2%
                      </span>
                      {" "}
                    </span>
                    <span className="text-muted-2">
                      vs last month
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="position-relative overflow-hidden h-100 p-3 rounded-4 bg-wash-emerald">
              <img
                src="/assets/images/burst-art.svg"
                alt=""
                className="card-watermark position-absolute top-0 pe-none"
              />
              <div className="position-relative d-flex flex-column justify-content-between gap-4 h-100">
                <div className="d-flex flex-column gap-2">
                  <span className="icon-box bg-cat-emerald text-white rounded-circle" aria-hidden="true">
                    <i data-lucide="timer" />
                  </span>
                  <h3 className="fs-5 fw-medium text-primary mb-0">
                    Average Response Time
                  </h3>
                </div>
                <div className="d-flex flex-column gap-2">
                  <span className="fs-2 fw-bold text-title">
                    <bdi>
                      0.82 sec
                    </bdi>
                  </span>
                  <span className="d-flex flex-wrap align-items-center gap-2 fs-md">
                    <span className="badge-soft tint-danger d-inline-flex align-items-center gap-1">
                      {" "}
                      <i className="icon-20" data-lucide="trending-down" aria-hidden="true" />
                      <span dir="ltr">
                        +10.5%
                      </span>
                      {" "}
                    </span>
                    <span className="text-muted-2">
                      vs last month
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="position-relative overflow-hidden h-100 p-3 rounded-4 bg-wash-amber">
              <img
                src="/assets/images/burst-art.svg"
                alt=""
                className="card-watermark position-absolute top-0 pe-none"
              />
              <div className="position-relative d-flex flex-column justify-content-between gap-4 h-100">
                <div className="d-flex flex-column gap-2">
                  <span className="icon-box bg-cat-orange text-white rounded-circle" aria-hidden="true">
                    <i data-lucide="circle-check" />
                  </span>
                  <h3 className="fs-5 fw-medium text-primary mb-0">
                    Model Accuracy
                  </h3>
                </div>
                <div className="d-flex flex-column gap-2">
                  <span className="fs-2 fw-bold text-title">
                    <bdi>
                      98.7%
                    </bdi>
                  </span>
                  <span className="d-flex flex-wrap align-items-center gap-2 fs-md">
                    <span className="badge-soft tint-success d-inline-flex align-items-center gap-1">
                      {" "}
                      <i className="icon-20" data-lucide="trending-up" aria-hidden="true" />
                      <span dir="ltr">
                        +18.2%
                      </span>
                      {" "}
                    </span>
                    <span className="text-muted-2">
                      vs last month
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="position-relative overflow-hidden h-100 p-3 rounded-4 bg-wash-blue">
              <img
                src="/assets/images/burst-art.svg"
                alt=""
                className="card-watermark position-absolute top-0 pe-none"
              />
              <div className="position-relative d-flex flex-column justify-content-between gap-4 h-100">
                <div className="d-flex flex-column gap-2">
                  <span className="icon-box bg-cat-blue text-white rounded-circle" aria-hidden="true">
                    <i data-lucide="hand-coins" />
                  </span>
                  <h3 className="fs-5 fw-medium text-primary mb-0">
                    AI Cost Savings
                  </h3>
                </div>
                <div className="d-flex flex-column gap-2">
                  <span className="fs-2 fw-bold text-title">
                    <bdi>
                      $2,847,392
                    </bdi>
                  </span>
                  <span className="d-flex flex-wrap align-items-center gap-2 fs-md">
                    <span className="badge-soft tint-success d-inline-flex align-items-center gap-1">
                      {" "}
                      <i className="icon-20" data-lucide="trending-up" aria-hidden="true" />
                      <span dir="ltr">
                        +12%
                      </span>
                      {" "}
                    </span>
                    <span className="text-muted-2">
                      vs last month
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="position-relative overflow-hidden h-100 p-3 rounded-4 bg-wash-violet">
              <img
                src="/assets/images/burst-art.svg"
                alt=""
                className="card-watermark position-absolute top-0 pe-none"
              />
              <div className="position-relative d-flex flex-column justify-content-between gap-4 h-100">
                <div className="d-flex flex-column gap-2">
                  <span className="icon-box bg-cat-violet text-white rounded-circle" aria-hidden="true">
                    <i data-lucide="user-round" />
                  </span>
                  <h3 className="fs-5 fw-medium text-primary mb-0">
                    Active AI Users
                  </h3>
                </div>
                <div className="d-flex flex-column gap-2">
                  <span className="fs-2 fw-bold text-title">
                    <bdi>
                      847,392
                    </bdi>
                  </span>
                  <span className="d-flex flex-wrap align-items-center gap-2 fs-md">
                    <span className="badge-soft tint-success d-inline-flex align-items-center gap-1">
                      {" "}
                      <i className="icon-20" data-lucide="trending-up" aria-hidden="true" />
                      <span dir="ltr">
                        +20.2%
                      </span>
                      {" "}
                    </span>
                    <span className="text-muted-2">
                      vs last month
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Usage & model performance ===== */}
      <section className="mb-4">
        <h2 className="visually-hidden">
          Usage and model performance
        </h2>
        <div className="row g-3">
          <div className="col-12 col-xl-6">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    AI Usage Over Time
                  </h3>
                  <div
                    className="nav nav-pills seg-toggle flex-nowrap gap-1 p-1 rounded-pill bg-soft"
                    role="group"
                    aria-label="AI usage time range"
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
                <div id="aiUsageChart" className="chart-area flex-grow-1" />
                <ul className="d-flex flex-wrap align-items-center gap-3 fs-md text-body-2 mt-3 mb-0">
                  <li className="d-inline-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-violet" />
                    Requests
                  </li>
                  <li className="d-inline-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-magenta" />
                    Orders
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-6">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    Model Performance
                  </h3>
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn btn-outline-soft d-inline-flex align-items-center gap-2"
                      id="modelRange"
                      data-bs-toggle="dropdown"
                      data-bs-offset="0,8"
                      aria-expanded="false"
                    >
                      This Month
                      {" "}
                      <i data-lucide="chevron-down" className="dd-caret icon-18" aria-hidden="true" />
                    </button>
                    {" "}
                    <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="modelRange">
                      <li>
                        <button type="button" className="dropdown-item">
                          This Week
                        </button>
                      </li>
                      <li>
                        <button type="button" className="dropdown-item active">
                          This Month
                        </button>
                      </li>
                      <li>
                        <button type="button" className="dropdown-item">
                          This Quarter
                        </button>
                      </li>
                      <li>
                        <button type="button" className="dropdown-item">
                          This Year
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div id="modelPerformanceChart" className="chart-area flex-grow-1" />
                <ul className="d-flex flex-wrap align-items-center gap-3 fs-md text-body-2 mt-3 mb-0">
                  <li className="d-inline-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-violet" />
                    GPT
                  </li>
                  <li className="d-inline-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-amber" />
                    Claude
                  </li>
                  <li className="d-inline-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-magenta" />
                    Gemini
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== AI activity ===== */}
      <section className="mb-4">
        <h2 className="visually-hidden">
          AI activity
        </h2>
        <div className="row g-3">
          <div className="col-12 col-xl-6 col-xxl-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    Recent AI Conversations
                  </h3>
                  <a href="#" className="btn btn-accent fw-semibold">
                    View All
                  </a>
                </div>
                <ul className="d-flex flex-column gap-3 mb-0">
                  <li className="d-flex flex-wrap align-items-center justify-content-between gap-2 pb-3 border-b-soft">
                    <span className="d-inline-flex align-items-center gap-2 flex-grow-1 min-w-0">
                      <i
                        className="icon-18 flex-shrink-0 text-cat-violet"
                        data-lucide="chart-line"
                        aria-hidden="true"
                      />
                      <span className="fs-md text-body-2">
                        Market Analysis Report
                      </span>
                    </span>
                    <span className="d-inline-flex align-items-center gap-3 flex-shrink-0 fs-xs">
                      <span className="text-body-2">
                        GPT-4o
                      </span>
                      <span className="text-muted-2">
                        2 min ago
                      </span>
                    </span>
                  </li>
                  <li className="d-flex flex-wrap align-items-center justify-content-between gap-2 pb-3 border-b-soft">
                    <span className="d-inline-flex align-items-center gap-2 flex-grow-1 min-w-0">
                      <i className="icon-18 flex-shrink-0 text-cat-violet" data-lucide="code" aria-hidden="true" />
                      <span className="fs-md text-body-2">
                        Code Review Assistant
                      </span>
                    </span>
                    <span className="d-inline-flex align-items-center gap-3 flex-shrink-0 fs-xs">
                      <span className="text-body-2">
                        Claude 3.5
                      </span>
                      <span className="text-muted-2">
                        2 min ago
                      </span>
                    </span>
                  </li>
                  <li className="d-flex flex-wrap align-items-center justify-content-between gap-2 pb-3 border-b-soft">
                    <span className="d-inline-flex align-items-center gap-2 flex-grow-1 min-w-0">
                      <i className="icon-18 flex-shrink-0 text-cat-violet" data-lucide="headset" aria-hidden="true" />
                      <span className="fs-md text-body-2">
                        Customer Support Bot
                      </span>
                    </span>
                    <span className="d-inline-flex align-items-center gap-3 flex-shrink-0 fs-xs">
                      <span className="text-body-2">
                        GPT-4o
                      </span>
                      <span className="text-muted-2">
                        1 hour ago
                      </span>
                    </span>
                  </li>
                  <li className="d-flex flex-wrap align-items-center justify-content-between gap-2 pb-3 border-b-soft">
                    <span className="d-inline-flex align-items-center gap-2 flex-grow-1 min-w-0">
                      <i
                        className="icon-18 flex-shrink-0 text-cat-violet"
                        data-lucide="file-chart-column"
                        aria-hidden="true"
                      />
                      <span className="fs-md text-body-2">
                        Market Analysis Report
                      </span>
                    </span>
                    <span className="d-inline-flex align-items-center gap-3 flex-shrink-0 fs-xs">
                      <span className="text-body-2">
                        GPT-4o
                      </span>
                      <span className="text-muted-2">
                        2 min ago
                      </span>
                    </span>
                  </li>
                  <li className="d-flex flex-wrap align-items-center justify-content-between gap-2 pb-3 border-b-soft">
                    <span className="d-inline-flex align-items-center gap-2 flex-grow-1 min-w-0">
                      <i className="icon-18 flex-shrink-0 text-cat-violet" data-lucide="package" aria-hidden="true" />
                      <span className="fs-md text-body-2">
                        Product Description Generator
                      </span>
                    </span>
                    <span className="d-inline-flex align-items-center gap-3 flex-shrink-0 fs-xs">
                      <span className="text-body-2">
                        GPT-4o
                      </span>
                      <span className="text-muted-2">
                        2 min ago
                      </span>
                    </span>
                  </li>
                  <li className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                    <span className="d-inline-flex align-items-center gap-2 flex-grow-1 min-w-0">
                      <i
                        className="icon-18 flex-shrink-0 text-cat-violet"
                        data-lucide="trending-up"
                        aria-hidden="true"
                      />
                      <span className="fs-md text-body-2">
                        Market Analysis Report
                      </span>
                    </span>
                    <span className="d-inline-flex align-items-center gap-3 flex-shrink-0 fs-xs">
                      <span className="text-body-2">
                        GPT-4o
                      </span>
                      <span className="text-muted-2">
                        2 min ago
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-6 col-xxl-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    Token Consumption
                  </h3>
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn btn-outline-soft d-inline-flex align-items-center gap-2"
                      id="tokenRange"
                      data-bs-toggle="dropdown"
                      data-bs-offset="0,8"
                      aria-expanded="false"
                    >
                      Last 30 Days
                      {" "}
                      <i data-lucide="chevron-down" className="dd-caret icon-18" aria-hidden="true" />
                    </button>
                    {" "}
                    <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="tokenRange">
                      <li>
                        <button type="button" className="dropdown-item">
                          Last 7 Days
                        </button>
                      </li>
                      <li>
                        <button type="button" className="dropdown-item active">
                          Last 30 Days
                        </button>
                      </li>
                      <li>
                        <button type="button" className="dropdown-item">
                          Last 90 Days
                        </button>
                      </li>
                      <li>
                        <button type="button" className="dropdown-item">
                          Last 12 Months
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div id="tokenConsumptionChart" className="chart-area flex-grow-1" />
                <ul className="d-flex flex-wrap align-items-center gap-3 fs-md text-body-2 mt-3 mb-0">
                  <li className="d-inline-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-violet" />
                    Input Tokens
                  </li>
                  <li className="d-inline-flex align-items-center gap-2">
                    <span className="legend-dot bg-cat-magenta" />
                    Output Tokens
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-xxl-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    Recent AI Jobs
                  </h3>
                  <a href="#" className="btn btn-accent fw-semibold">
                    View All Jobs
                  </a>
                </div>
                <ul className="d-flex flex-column gap-3 mb-0">
                  <li className="d-flex flex-wrap align-items-center justify-content-between gap-2 pb-3 border-b-soft">
                    <div className="d-flex align-items-center gap-2 flex-grow-1 min-w-0">
                      <span className="icon-box tint-violet rounded-circle" aria-hidden="true">
                        <i data-lucide="graduation-cap" />
                      </span>
                      <div className="d-flex flex-column min-w-0">
                        <span className="fs-md fw-semibold text-title">
                          Customer Support Agent Training
                        </span>
                        <span className="fs-xs text-muted-2">
                          2 min ago
                        </span>
                      </div>
                    </div>
                    <span className="badge-soft tint-success flex-shrink-0">
                      Completed
                    </span>
                  </li>
                  <li className="d-flex flex-wrap align-items-center justify-content-between gap-2 pb-3 border-b-soft">
                    <div className="d-flex align-items-center gap-2 flex-grow-1 min-w-0">
                      <span className="icon-box tint-violet rounded-circle" aria-hidden="true">
                        <i data-lucide="scale" />
                      </span>
                      <div className="d-flex flex-column gap-1 min-w-0">
                        <span className="fs-md fw-semibold text-title">
                          Legal Model Fine-tuning
                        </span>
                        <div className="d-flex align-items-center gap-2">
                          <span className="fs-xs fw-semibold text-cat-blue">
                            30%
                          </span>
                          <div
                            className="progress flex-grow-1"
                            role="progressbar"
                            aria-label="Legal Model Fine-tuning progress"
                            aria-valuenow="30"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <div className="progress-bar bg-cat-blue" style={{ width: "30%" }} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <span className="badge-soft tint-info flex-shrink-0">
                      Processing
                    </span>
                  </li>
                  <li className="d-flex flex-wrap align-items-center justify-content-between gap-2 pb-3 border-b-soft">
                    <div className="d-flex align-items-center gap-2 flex-grow-1 min-w-0">
                      <span className="icon-box tint-violet rounded-circle" aria-hidden="true">
                        <i data-lucide="boxes" />
                      </span>
                      <div className="d-flex flex-column min-w-0">
                        <span className="fs-md fw-semibold text-title">
                          Product Embedding Index
                        </span>
                        <span className="fs-xs text-muted-2">
                          2 min ago
                        </span>
                      </div>
                    </div>
                    <span className="badge-soft tint-success flex-shrink-0">
                      Completed
                    </span>
                  </li>
                  <li className="d-flex flex-wrap align-items-center justify-content-between gap-2 pb-3 border-b-soft">
                    <div className="d-flex align-items-center gap-2 flex-grow-1 min-w-0">
                      <span className="icon-box tint-violet rounded-circle" aria-hidden="true">
                        <i data-lucide="refresh-cw" />
                      </span>
                      <div className="d-flex flex-column min-w-0">
                        <span className="fs-md fw-semibold text-title">
                          Knowledge Base Synchronization
                        </span>
                        <span className="fs-xs text-muted-2">
                          2 min ago
                        </span>
                      </div>
                    </div>
                    <span className="badge-soft tint-warning flex-shrink-0">
                      Queued
                    </span>
                  </li>
                  <li className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                    <div className="d-flex align-items-center gap-2 flex-grow-1 min-w-0">
                      <span className="icon-box tint-violet rounded-circle" aria-hidden="true">
                        <i data-lucide="database-backup" />
                      </span>
                      <div className="d-flex flex-column min-w-0">
                        <span className="fs-md fw-semibold text-title">
                          AI Model Backup Snapshot
                        </span>
                        <span className="fs-xs text-muted-2">
                          2 min ago
                        </span>
                      </div>
                    </div>
                    <span className="badge-soft tint-success flex-shrink-0">
                      Completed
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Prompts, departments & quick actions ===== */}
      <section className="mb-4">
        <h2 className="visually-hidden">
          Prompts, departments and quick actions
        </h2>
        <div className="row g-3">
          <div className="col-12 col-xl-6 col-xxl-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <h3 className="fs-5 fw-bold text-title mb-3">
                  Prompt Analytics
                </h3>
                <ul className="d-flex flex-column gap-3 mb-0">
                  <li className="px-3 py-2 rounded-2 bg-plain border-theme">
                    <div className="d-flex flex-wrap align-items-start justify-content-between gap-2">
                      <span className="fs-md fw-semibold text-title">
                        Summarize customer feedback
                      </span>
                      <span className="badge-soft tint-success d-inline-flex align-items-center gap-2 flex-shrink-0">
                        {" "}
                        <span className="legend-dot legend-dot-sm bg-cat-emerald" />
                        Active
                        {" "}
                      </span>
                    </div>
                    <div className="d-flex flex-wrap align-items-center gap-3 fs-xs text-muted-2 mt-1">
                      <span>
                        Calls:
                        {" "}
                        <span className="fw-bold text-title">
                          12.4K
                        </span>
                      </span>
                      <span>
                        Rate:
                        {" "}
                        <span className="fw-bold text-cat-emerald">
                          99.2%
                        </span>
                      </span>
                      <span>
                        ~284t
                      </span>
                    </div>
                  </li>
                  <li className="px-3 py-2 rounded-2 bg-plain border-theme">
                    <div className="d-flex flex-wrap align-items-start justify-content-between gap-2">
                      <span className="fs-md fw-semibold text-title">
                        Generate product description
                      </span>
                      <span className="badge-soft tint-success d-inline-flex align-items-center gap-2 flex-shrink-0">
                        {" "}
                        <span className="legend-dot legend-dot-sm bg-cat-emerald" />
                        Active
                        {" "}
                      </span>
                    </div>
                    <div className="d-flex flex-wrap align-items-center gap-3 fs-xs text-muted-2 mt-1">
                      <span>
                        Calls:
                        {" "}
                        <span className="fw-bold text-title">
                          8.7K
                        </span>
                      </span>
                      <span>
                        Rate:
                        {" "}
                        <span className="fw-bold text-cat-emerald">
                          97.8%
                        </span>
                      </span>
                      <span>
                        ~512t
                      </span>
                    </div>
                  </li>
                  <li className="px-3 py-2 rounded-2 bg-plain border-theme">
                    <div className="d-flex flex-wrap align-items-start justify-content-between gap-2">
                      <span className="fs-md fw-semibold text-title">
                        Classify support ticket
                      </span>
                      <span className="badge-soft tint-success d-inline-flex align-items-center gap-2 flex-shrink-0">
                        {" "}
                        <span className="legend-dot legend-dot-sm bg-cat-emerald" />
                        Active
                        {" "}
                      </span>
                    </div>
                    <div className="d-flex flex-wrap align-items-center gap-3 fs-xs text-muted-2 mt-1">
                      <span>
                        Calls:
                        {" "}
                        <span className="fw-bold text-title">
                          6.2K
                        </span>
                      </span>
                      <span>
                        Rate:
                        {" "}
                        <span className="fw-bold text-cat-emerald">
                          98.4%
                        </span>
                      </span>
                      <span>
                        ~128t
                      </span>
                    </div>
                  </li>
                  <li className="px-3 py-2 rounded-2 bg-plain border-theme">
                    <div className="d-flex flex-wrap align-items-start justify-content-between gap-2">
                      <span className="fs-md fw-semibold text-title">
                        Extract key entities
                      </span>
                      <span className="badge-soft tint-success d-inline-flex align-items-center gap-2 flex-shrink-0">
                        {" "}
                        <span className="legend-dot legend-dot-sm bg-cat-emerald" />
                        Active
                        {" "}
                      </span>
                    </div>
                    <div className="d-flex flex-wrap align-items-center gap-3 fs-xs text-muted-2 mt-1">
                      <span>
                        Calls:
                        {" "}
                        <span className="fw-bold text-title">
                          4.9K
                        </span>
                      </span>
                      <span>
                        Rate:
                        {" "}
                        <span className="fw-bold text-cat-emerald">
                          96.1%
                        </span>
                      </span>
                      <span>
                        ~196t
                      </span>
                    </div>
                  </li>
                  <li className="px-3 py-2 rounded-2 bg-plain border-theme">
                    <div className="d-flex flex-wrap align-items-start justify-content-between gap-2">
                      <span className="fs-md fw-semibold text-title">
                        Translate knowledge base
                      </span>
                      <span className="badge-soft tint-success d-inline-flex align-items-center gap-2 flex-shrink-0">
                        {" "}
                        <span className="legend-dot legend-dot-sm bg-cat-emerald" />
                        Active
                        {" "}
                      </span>
                    </div>
                    <div className="d-flex flex-wrap align-items-center gap-3 fs-xs text-muted-2 mt-1">
                      <span>
                        Calls:
                        {" "}
                        <span className="fw-bold text-title">
                          3.5K
                        </span>
                      </span>
                      <span>
                        Rate:
                        {" "}
                        <span className="fw-bold text-cat-emerald">
                          95.6%
                        </span>
                      </span>
                      <span>
                        ~342t
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-6 col-xxl-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <h3 className="fs-5 fw-bold text-title mb-3">
                  Department Usage
                </h3>
                <div id="departmentUsageChart" className="chart-area flex-grow-1" />
                <ul className="row row-cols-1 row-cols-sm-2 g-2 gx-4 fs-md mt-3 mb-0">
                  <li className="col">
                    <div className="d-flex align-items-center justify-content-between gap-2">
                      <span className="d-inline-flex align-items-center gap-2 fw-medium text-body-2">
                        <span className="legend-dot bg-cat-violet" />
                        Engineering
                      </span>
                      <span className="fs-5 fw-bold text-title">
                        34%
                      </span>
                    </div>
                  </li>
                  <li className="col">
                    <div className="d-flex align-items-center justify-content-between gap-2">
                      <span className="d-inline-flex align-items-center gap-2 fw-medium text-body-2">
                        <span className="legend-dot bg-cat-blue" />
                        Marketing
                      </span>
                      <span className="fs-5 fw-bold text-title">
                        22%
                      </span>
                    </div>
                  </li>
                  <li className="col">
                    <div className="d-flex align-items-center justify-content-between gap-2">
                      <span className="d-inline-flex align-items-center gap-2 fw-medium text-body-2">
                        <span className="legend-dot bg-cat-emerald" />
                        Sales
                      </span>
                      <span className="fs-5 fw-bold text-title">
                        18%
                      </span>
                    </div>
                  </li>
                  <li className="col">
                    <div className="d-flex align-items-center justify-content-between gap-2">
                      <span className="d-inline-flex align-items-center gap-2 fw-medium text-body-2">
                        <span className="legend-dot bg-cat-orange" />
                        Support
                      </span>
                      <span className="fs-5 fw-bold text-title">
                        15%
                      </span>
                    </div>
                  </li>
                  <li className="col">
                    <div className="d-flex align-items-center justify-content-between gap-2">
                      <span className="d-inline-flex align-items-center gap-2 fw-medium text-body-2">
                        <span className="legend-dot bg-cat-red" />
                        Product
                      </span>
                      <span className="fs-5 fw-bold text-title">
                        11%
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-xxl-4">
            <div className="card on-dark bg-nav-strong h-100">
              <div className="card-body d-flex flex-column">
                <h3 className="fs-5 fw-bold text-title mb-3">
                  Quick Actions
                </h3>
                <ul className="d-flex flex-column gap-3 mb-0">
                  <li>
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-between gap-2 px-3 py-2 rounded-2 tile-soft border-soft transition-base"
                    >
                      <span className="d-inline-flex align-items-center gap-2 min-w-0">
                        <span className="icon-box icon-box-sm bg-cat-violet text-white" aria-hidden="true">
                          <i data-lucide="folder-kanban" />
                        </span>
                        <span className="d-flex flex-column min-w-0">
                          <span className="fs-md fw-bold text-title">
                            Create Project
                          </span>
                          <span className="fs-sm text-body-2">
                            Start a new AI project
                          </span>
                        </span>
                      </span>
                      <i className="icon-14 flip-rtl flex-shrink-0" data-lucide="chevron-right" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-between gap-2 px-3 py-2 rounded-2 tile-soft border-soft transition-base"
                    >
                      <span className="d-inline-flex align-items-center gap-2 min-w-0">
                        <span className="icon-box icon-box-sm bg-cat-blue text-white" aria-hidden="true">
                          <i data-lucide="upload" />
                        </span>
                        <span className="d-flex flex-column min-w-0">
                          <span className="fs-md fw-bold text-title">
                            Upload Dataset
                          </span>
                          <span className="fs-sm text-body-2">
                            Import training data
                          </span>
                        </span>
                      </span>
                      <i className="icon-14 flip-rtl flex-shrink-0" data-lucide="chevron-right" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-between gap-2 px-3 py-2 rounded-2 tile-soft border-soft transition-base"
                    >
                      <span className="d-inline-flex align-items-center gap-2 min-w-0">
                        <span className="icon-box icon-box-sm bg-cat-emerald text-white" aria-hidden="true">
                          <i data-lucide="wand-sparkles" />
                        </span>
                        <span className="d-flex flex-column min-w-0">
                          <span className="fs-md fw-bold text-title">
                            New Prompt
                          </span>
                          <span className="fs-sm text-body-2">
                            Design in Prompt Studio
                          </span>
                        </span>
                      </span>
                      <i className="icon-14 flip-rtl flex-shrink-0" data-lucide="chevron-right" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-between gap-2 px-3 py-2 rounded-2 tile-soft border-soft transition-base"
                    >
                      <span className="d-inline-flex align-items-center gap-2 min-w-0">
                        <span className="icon-box icon-box-sm bg-cat-orange text-white" aria-hidden="true">
                          <i data-lucide="rocket" />
                        </span>
                        <span className="d-flex flex-column min-w-0">
                          <span className="fs-md fw-bold text-title">
                            Deploy Model
                          </span>
                          <span className="fs-sm text-body-2">
                            Push to production
                          </span>
                        </span>
                      </span>
                      <i className="icon-14 flip-rtl flex-shrink-0" data-lucide="chevron-right" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-between gap-2 px-3 py-2 rounded-2 tile-soft border-soft transition-base"
                    >
                      <span className="d-inline-flex align-items-center gap-2 min-w-0">
                        <span className="icon-box icon-box-sm bg-cat-cyan text-white" aria-hidden="true">
                          <i data-lucide="users" />
                        </span>
                        <span className="d-flex flex-column min-w-0">
                          <span className="fs-md fw-bold text-title">
                            Invite Member
                          </span>
                          <span className="fs-sm text-body-2">
                            Add team collaborators
                          </span>
                        </span>
                      </span>
                      <i className="icon-14 flip-rtl flex-shrink-0" data-lucide="chevron-right" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-between gap-2 px-3 py-2 rounded-2 tile-soft border-soft transition-base"
                    >
                      <span className="d-inline-flex align-items-center gap-2 min-w-0">
                        <span className="icon-box icon-box-sm bg-cat-red text-white" aria-hidden="true">
                          <i data-lucide="file-chart-column" />
                        </span>
                        <span className="d-flex flex-column min-w-0">
                          <span className="fs-md fw-bold text-title">
                            Generate Report
                          </span>
                          <span className="fs-sm text-body-2">
                            Export analytics PDF
                          </span>
                        </span>
                      </span>
                      <i className="icon-14 flip-rtl flex-shrink-0" data-lucide="chevron-right" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Recent leads ===== */}
      <section className="mb-4">
        <h2 className="visually-hidden">
          Recent leads
        </h2>
        <div className="card">
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
              <table className="table table-hover align-middle mb-0">
                <caption className="visually-hidden">
                  Recent AI project leads
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
                      Project
                    </th>
                    <th scope="col">
                      Model
                    </th>
                    <th scope="col">
                      Owner
                    </th>
                    <th scope="col">
                      Progress
                    </th>
                    <th scope="col">
                      Status
                    </th>
                    <th scope="col">
                      Last Update
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
                        aria-label="Select Customer Sentiment Analyzer"
                      />
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="icon-box icon-box-sm tint-violet" aria-hidden="true">
                          <i data-lucide="brain" />
                        </span>
                        <span className="fs-md fw-semibold text-title">
                          Customer Sentiment Analyzer
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-block px-2 py-1 rounded-1 bg-soft border-soft fs-md text-body-2">
                        GPT-4o
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-sm bg-grad-1">
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
                      <div className="d-flex align-items-center gap-2">
                        <div
                          className="progress progress-inline"
                          role="progressbar"
                          aria-label="Customer Sentiment Analyzer progress"
                          aria-valuenow="87"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div className="progress-bar bg-cat-violet" style={{ width: "87%" }} />
                        </div>
                        <span className="fs-xs fw-bold text-muted-2">
                          87%
                        </span>
                      </div>
                    </td>
                    <td>
                      <span className="badge-soft tint-success">
                        Active
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
                          aria-label="Edit Customer Sentiment Analyzer"
                        >
                          <i data-lucide="pen-line" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-soft btn-18 rounded-circle"
                          aria-label="Open Customer Sentiment Analyzer"
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
                            aria-label="More actions for Customer Sentiment Analyzer"
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
                                <i data-lucide="copy" />
                                Duplicate
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="archive" />
                                Archive
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
                        aria-label="Select Code Review Automation"
                      />
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="icon-box icon-box-sm tint-blue" aria-hidden="true">
                          <i data-lucide="brain" />
                        </span>
                        <span className="fs-md fw-semibold text-title">
                          Code Review Automation
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-block px-2 py-1 rounded-1 bg-soft border-soft fs-md text-body-2">
                        Claude 3 Opus
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-sm bg-grad-2">
                          KS
                        </span>
                        <span className="d-flex flex-column">
                          <span className="fs-md fw-semibold text-title">
                            Kayla Simmons
                          </span>
                          <span className="fs-xs text-muted-2">
                            kayla.simmons@innovatech.com
                          </span>
                        </span>
                      </span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <div
                          className="progress progress-inline"
                          role="progressbar"
                          aria-label="Code Review Automation progress"
                          aria-valuenow="64"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div className="progress-bar bg-cat-violet" style={{ width: "64%" }} />
                        </div>
                        <span className="fs-xs fw-bold text-muted-2">
                          64%
                        </span>
                      </div>
                    </td>
                    <td>
                      <span className="badge-soft tint-warning">
                        Paused
                      </span>
                    </td>
                    <td>
                      <span className="fs-md text-muted-2">
                        Sep 26, 2025
                      </span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-1">
                        <button
                          type="button"
                          className="btn btn-outline-soft btn-18 rounded-circle"
                          aria-label="Edit Code Review Automation"
                        >
                          <i data-lucide="pen-line" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-soft btn-18 rounded-circle"
                          aria-label="Open Code Review Automation"
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
                            aria-label="More actions for Code Review Automation"
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
                                <i data-lucide="copy" />
                                Duplicate
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="archive" />
                                Archive
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
                        aria-label="Select Legal Document Summarizer"
                      />
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="icon-box icon-box-sm tint-amber" aria-hidden="true">
                          <i data-lucide="brain" />
                        </span>
                        <span className="fs-md fw-semibold text-title">
                          Legal Document Summarizer
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-block px-2 py-1 rounded-1 bg-soft border-soft fs-md text-body-2">
                        Claude 3 Sonnet
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-sm bg-grad-3">
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
                      <div className="d-flex align-items-center gap-2">
                        <div
                          className="progress progress-inline"
                          role="progressbar"
                          aria-label="Legal Document Summarizer progress"
                          aria-valuenow="38"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div className="progress-bar bg-cat-violet" style={{ width: "38%" }} />
                        </div>
                        <span className="fs-xs fw-bold text-muted-2">
                          38%
                        </span>
                      </div>
                    </td>
                    <td>
                      <span className="badge-soft tint-danger">
                        Failed
                      </span>
                    </td>
                    <td>
                      <span className="fs-md text-muted-2">
                        Sep 24, 2025
                      </span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-1">
                        <button
                          type="button"
                          className="btn btn-outline-soft btn-18 rounded-circle"
                          aria-label="Edit Legal Document Summarizer"
                        >
                          <i data-lucide="pen-line" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-soft btn-18 rounded-circle"
                          aria-label="Open Legal Document Summarizer"
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
                            aria-label="More actions for Legal Document Summarizer"
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
                                <i data-lucide="copy" />
                                Duplicate
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="archive" />
                                Archive
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
                        aria-label="Select Support Ticket Classifier"
                      />
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="icon-box icon-box-sm tint-danger" aria-hidden="true">
                          <i data-lucide="brain" />
                        </span>
                        <span className="fs-md fw-semibold text-title">
                          Support Ticket Classifier
                        </span>
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-block px-2 py-1 rounded-1 bg-soft border-soft fs-md text-body-2">
                        Mistral Large
                      </span>
                    </td>
                    <td>
                      <span className="d-inline-flex align-items-center gap-2">
                        <span className="avatar avatar-sm bg-grad-4">
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
                      <div className="d-flex align-items-center gap-2">
                        <div
                          className="progress progress-inline"
                          role="progressbar"
                          aria-label="Support Ticket Classifier progress"
                          aria-valuenow="92"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div className="progress-bar bg-cat-violet" style={{ width: "92%" }} />
                        </div>
                        <span className="fs-xs fw-bold text-muted-2">
                          92%
                        </span>
                      </div>
                    </td>
                    <td>
                      <span className="badge-soft tint-success">
                        Active
                      </span>
                    </td>
                    <td>
                      <span className="fs-md text-muted-2">
                        Sep 21, 2025
                      </span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-1">
                        <button
                          type="button"
                          className="btn btn-outline-soft btn-18 rounded-circle"
                          aria-label="Edit Support Ticket Classifier"
                        >
                          <i data-lucide="pen-line" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-soft btn-18 rounded-circle"
                          aria-label="Open Support Ticket Classifier"
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
                            aria-label="More actions for Support Ticket Classifier"
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
                                <i data-lucide="copy" />
                                Duplicate
                              </button>
                            </li>
                            <li>
                              <button type="button" className="dropdown-item">
                                <i data-lucide="archive" />
                                Archive
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
                Showing 1–4 of 12 results
              </span>
              <nav aria-label="Recent lead pagination">
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
      {/* ===== API, cost & security ===== */}
      <section className="mb-4">
        <h2 className="visually-hidden">
          API, cost and security
        </h2>
        <div className="row g-3">
          <div className="col-12 col-xl-6 col-xxl-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <h3 className="fs-5 fw-bold text-title mb-3">
                  API Analytics
                </h3>
                <div className="row row-cols-2 g-2 mb-3">
                  <div className="col">
                    <div className="h-100 px-3 py-2 rounded-2 bg-plain border-theme">
                      <span className="d-block fs-md fw-medium text-muted-2">
                        Total Calls
                      </span>
                      {" "}
                      <span className="d-block fs-5 fw-bold text-cat-violet">
                        8.4M
                      </span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="h-100 px-3 py-2 rounded-2 bg-plain border-theme">
                      <span className="d-block fs-md fw-medium text-muted-2">
                        Avg Latency
                      </span>
                      {" "}
                      <span className="d-block fs-5 fw-bold text-cat-blue">
                        142ms
                      </span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="h-100 px-3 py-2 rounded-2 bg-plain border-theme">
                      <span className="d-block fs-md fw-medium text-muted-2">
                        Error Rate
                      </span>
                      {" "}
                      <span className="d-block fs-5 fw-bold text-cat-red">
                        0.18%
                      </span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="h-100 px-3 py-2 rounded-2 bg-plain border-theme">
                      <span className="d-block fs-md fw-medium text-muted-2">
                        P99 Latency
                      </span>
                      {" "}
                      <span className="d-block fs-5 fw-bold text-cat-orange">
                        480ms
                      </span>
                    </div>
                  </div>
                </div>
                <ul className="d-flex flex-column gap-3 mt-auto mb-0">
                  <li>
                    <div className="d-flex align-items-center justify-content-between gap-2">
                      <span className="fs-md fw-medium text-body-2">
                        GET /completions
                      </span>
                      <span className="fs-md fw-bold text-title">
                        5.1M
                      </span>
                    </div>
                    <div
                      className="progress mt-2"
                      role="progressbar"
                      aria-label="GET /completions share of calls"
                      aria-valuenow="71"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-violet" style={{ width: "71%" }} />
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center justify-content-between gap-2">
                      <span className="fs-md fw-medium text-body-2">
                        POST /chat
                      </span>
                      <span className="fs-md fw-bold text-title">
                        2.4M
                      </span>
                    </div>
                    <div
                      className="progress mt-2"
                      role="progressbar"
                      aria-label="POST /chat share of calls"
                      aria-valuenow="34"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-blue" style={{ width: "34%" }} />
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center justify-content-between gap-2">
                      <span className="fs-md fw-medium text-body-2">
                        GET /embeddings
                      </span>
                      <span className="fs-md fw-bold text-title">
                        0.9M
                      </span>
                    </div>
                    <div
                      className="progress mt-2"
                      role="progressbar"
                      aria-label="GET /embeddings share of calls"
                      aria-valuenow="12"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-emerald" style={{ width: "12%" }} />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-6 col-xxl-5">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <h3 className="fs-5 fw-bold text-title mb-3">
                  AI Cost Analysis
                </h3>
                <div className="on-dark position-relative overflow-hidden px-3 py-3 mb-3 rounded-3 bg-nav-strong">
                  <img
                    src="/assets/images/wallet-art.svg"
                    alt=""
                    width="75"
                    height="75"
                    className="position-absolute top-0 end-0 m-3 pe-none d-none d-sm-block"
                  />
                  {" "}
                  <span className="d-block fs-md fw-medium text-body-2">
                    Monthly Spend
                  </span>
                  {" "}
                  <span className="d-flex flex-wrap align-items-baseline gap-2 mt-1">
                    <span className="display-6 fw-bold text-title">
                      $18,420
                    </span>
                    <span className="d-inline-flex align-items-center gap-1 fs-md fw-semibold text-cat-amber">
                      <i className="icon-12 flip-rtl" data-lucide="arrow-up-right" aria-hidden="true" />
                      <span dir="ltr">
                        +14.2%
                      </span>
                      vs last month
                    </span>
                  </span>
                </div>
                <ul className="d-flex flex-column gap-3 mb-0">
                  <li>
                    <div className="d-flex align-items-center justify-content-between gap-2">
                      <span className="fs-md fw-medium text-body-2">
                        GPT-4o
                      </span>
                      <span className="fs-md fw-bold text-title">
                        $8,240
                      </span>
                    </div>
                    <div
                      className="progress mt-2"
                      role="progressbar"
                      aria-label="GPT-4o share of spend"
                      aria-valuenow="45"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-violet" style={{ width: "45%" }} />
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center justify-content-between gap-2">
                      <span className="fs-md fw-medium text-body-2">
                        Claude 3 Opus
                      </span>
                      <span className="fs-md fw-bold text-title">
                        $5,180
                      </span>
                    </div>
                    <div
                      className="progress mt-2"
                      role="progressbar"
                      aria-label="Claude 3 Opus share of spend"
                      aria-valuenow="28"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-blue" style={{ width: "28%" }} />
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center justify-content-between gap-2">
                      <span className="fs-md fw-medium text-body-2">
                        Gemini Pro
                      </span>
                      <span className="fs-md fw-bold text-title">
                        $2,840
                      </span>
                    </div>
                    <div
                      className="progress mt-2"
                      role="progressbar"
                      aria-label="Gemini Pro share of spend"
                      aria-valuenow="15"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-cyan" style={{ width: "15%" }} />
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center justify-content-between gap-2">
                      <span className="fs-md fw-medium text-body-2">
                        Other Models
                      </span>
                      <span className="fs-md fw-bold text-title">
                        $2,160
                      </span>
                    </div>
                    <div
                      className="progress mt-2"
                      role="progressbar"
                      aria-label="Other models share of spend"
                      aria-valuenow="12"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-orange" style={{ width: "12%" }} />
                    </div>
                  </li>
                </ul>
                <div className="px-3 py-2 mt-3 rounded-2 bg-plain border-theme">
                  <div className="d-flex align-items-center justify-content-between gap-2">
                    <span className="fs-md fw-medium text-body-2">
                      Budget · $25,000
                    </span>
                    <span className="fs-md fw-bold text-cat-orange">
                      73.7%
                    </span>
                  </div>
                  <div
                    className="progress mt-2"
                    role="progressbar"
                    aria-label="Budget used"
                    aria-valuenow="74"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div className="progress-bar bg-cat-orange" style={{ width: "74%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-6 col-xxl-3">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <h3 className="fs-5 fw-bold text-title mb-3">
                  Security Center
                </h3>
                <div className="row row-cols-2 g-2">
                  <div className="col">
                    <div className="h-100 p-3 rounded-2 bg-plain border-theme">
                      <i className="icon-20 text-cat-emerald" data-lucide="shield" aria-hidden="true" />
                      {" "}
                      <span className="d-block fs-5 fw-bold text-cat-emerald mt-2">
                        0
                      </span>
                      {" "}
                      <span className="d-block fs-md text-body-2">
                        Threats Blocked
                      </span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="h-100 p-3 rounded-2 bg-plain border-theme">
                      <i className="icon-20 text-cat-blue" data-lucide="lock" aria-hidden="true" />
                      {" "}
                      <span className="d-block fs-5 fw-bold text-cat-blue mt-2">
                        1,284
                      </span>
                      {" "}
                      <span className="d-block fs-md text-body-2">
                        Auth Events
                      </span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="h-100 p-3 rounded-2 bg-plain border-theme">
                      <i className="icon-20 text-cat-violet" data-lucide="key" aria-hidden="true" />
                      {" "}
                      <span className="d-block fs-5 fw-bold text-cat-violet mt-2">
                        100%
                      </span>
                      {" "}
                      <span className="d-block fs-md text-body-2">
                        API Security
                      </span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="h-100 p-3 rounded-2 bg-plain border-theme">
                      <i className="icon-20 text-cat-orange" data-lucide="file-text" aria-hidden="true" />
                      {" "}
                      <span className="d-block fs-5 fw-bold text-cat-orange mt-2">
                        28.4K
                      </span>
                      {" "}
                      <span className="d-block fs-md text-body-2">
                        Audit Logs
                      </span>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between gap-3 p-3 mt-3 rounded-3 tint-emerald border-soft">
                  <span className="d-flex flex-column gap-2">
                    <span className="display-5 fw-bold lh-1">
                      <bdi>
                        2
                      </bdi>
                      <span className="text-muted-2">
                        /100
                      </span>
                    </span>
                    <span className="fs-5 fw-medium text-body-2">
                      Risk Score
                    </span>
                  </span>
                  <img
                    src="/assets/images/shield-art.svg"
                    alt=""
                    width="72"
                    height="72"
                    className="flex-shrink-0 pe-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Task board & executive insights ===== */}
      <section className="mb-4">
        <h2 className="visually-hidden">
          Task board and executive insights
        </h2>
        <div className="row g-3">
          <div className="col-12 col-md-6 col-xxl-3">
            <div className="h-100 p-3 rounded-4 border-theme bg-info-soft">
              <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                <h3 className="d-flex align-items-center gap-2 fs-5 fw-bold text-title mb-0">
                  <span className="legend-dot bg-cat-violet" />
                  Upcoming Tasks (12)
                </h3>
                <div className="d-flex align-items-center gap-2 flex-shrink-0">
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn btn-outline-soft btn-18 rounded-circle"
                      data-bs-toggle="dropdown"
                      data-bs-offset="0,8"
                      aria-expanded="false"
                      aria-label="Upcoming tasks options"
                    >
                      <i data-lucide="ellipsis" />
                    </button>
                    {" "}
                    <ul className="dropdown-menu dropdown-menu-end p-2">
                      <li>
                        <button
                          type="button"
                          className="dropdown-item"
                          data-bs-toggle="modal"
                          data-bs-target="#taskModal"
                        >
                          <i data-lucide="plus" />
                          Add task
                        </button>
                      </li>
                      <li>
                        <button type="button" className="dropdown-item">
                          <i data-lucide="pen-line" />
                          Rename column
                        </button>
                      </li>
                      <li>
                        <button type="button" className="dropdown-item">
                          <i data-lucide="arrow-down-up" />
                          Sort by priority
                        </button>
                      </li>
                      <li>
                        <button type="button" className="dropdown-item">
                          <i data-lucide="eye-off" />
                          Hide column
                        </button>
                      </li>
                      <li>
                        <hr className="dropdown-divider my-1" />
                      </li>
                      <li>
                        <button type="button" className="dropdown-item dropdown-item-danger">
                          <i data-lucide="trash-2" />
                          Clear column
                        </button>
                      </li>
                    </ul>
                  </div>
                  <button
                    type="button"
                    className="btn btn-outline-soft btn-18 rounded-circle"
                    data-bs-toggle="modal"
                    data-bs-target="#taskModal"
                    aria-label="Add upcoming task"
                  >
                    <i data-lucide="plus" />
                  </button>
                </div>
              </div>
              <ul className="d-flex flex-column gap-3 mb-0">
                <li className="p-3 rounded-4 bg-plain">
                  <span className="badge-soft tint-violet d-inline-flex align-items-center gap-1">
                    {" "}
                    <i className="icon-12" data-lucide="circle" aria-hidden="true" />
                    Medium Priority
                    {" "}
                  </span>
                  <h4 className="fs-6 fw-bold text-title mt-3 mb-2">
                    Create calendar, chat and email app pages
                  </h4>
                  <div className="d-flex flex-wrap gap-2">
                    <span className="px-2 py-1 rounded-pill fs-xs fw-bold bg-plain border-soft text-muted-2">
                      #UI007
                    </span>
                    <span className="px-2 py-1 rounded-pill fs-xs fw-bold tint-blue">
                      Design
                    </span>
                    <span className="px-2 py-1 rounded-pill fs-xs fw-bold tint-amber">
                      Backlog
                    </span>
                  </div>
                  <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 pt-3 mt-3 border-t-soft">
                    <span className="d-flex align-items-center gap-2">
                      <span className="avatar-stack">
                        <span className="avatar avatar-sm">
                          <img src="/assets/images/avatar-1.png" width="34" height="34" alt="" />
                        </span>
                        <span className="avatar avatar-sm">
                          <img src="/assets/images/avatar-2.png" width="34" height="34" alt="" />
                        </span>
                        <span className="avatar avatar-sm">
                          <img src="/assets/images/avatar-3.png" width="34" height="34" alt="" />
                        </span>
                        <span className="avatar avatar-sm bg-soft text-title">
                          +5
                        </span>
                      </span>
                      <button
                        type="button"
                        className="btn btn-outline-soft btn-18 rounded-circle border-dashed"
                        aria-label="Add assignee"
                      >
                        <i data-lucide="circle-plus" />
                      </button>
                    </span>
                    <span className="d-flex align-items-center gap-3">
                      <span className="d-inline-flex align-items-center gap-1 fs-xs fw-bold text-cat-violet">
                        <i className="icon-16" data-lucide="paperclip" aria-hidden="true" />
                        2
                      </span>
                      <span className="d-inline-flex align-items-center gap-1 fs-xs fw-bold text-cat-orange">
                        <i className="icon-16" data-lucide="message-square-text" aria-hidden="true" />
                        3
                      </span>
                    </span>
                  </div>
                </li>
                <li className="p-3 rounded-4 bg-plain">
                  <span className="badge-soft tint-danger d-inline-flex align-items-center gap-1">
                    {" "}
                    <i className="icon-12" data-lucide="circle" aria-hidden="true" />
                    High Priority
                    {" "}
                  </span>
                  <h4 className="fs-6 fw-bold text-title mt-3 mb-2">
                    Wire up the model comparison dashboard
                  </h4>
                  <div className="d-flex flex-wrap gap-2">
                    <span className="px-2 py-1 rounded-pill fs-xs fw-bold bg-plain border-soft text-muted-2">
                      #UI012
                    </span>
                    <span className="px-2 py-1 rounded-pill fs-xs fw-bold tint-blue">
                      Design
                    </span>
                    <span className="px-2 py-1 rounded-pill fs-xs fw-bold tint-amber">
                      Backlog
                    </span>
                  </div>
                  <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 pt-3 mt-3 border-t-soft">
                    <span className="d-flex align-items-center gap-2">
                      <span className="avatar-stack">
                        <span className="avatar avatar-sm">
                          <img src="/assets/images/avatar-1.png" width="34" height="34" alt="" />
                        </span>
                        <span className="avatar avatar-sm">
                          <img src="/assets/images/avatar-3.png" width="34" height="34" alt="" />
                        </span>
                        <span className="avatar avatar-sm bg-soft text-title">
                          +5
                        </span>
                      </span>
                      <button
                        type="button"
                        className="btn btn-outline-soft btn-18 rounded-circle border-dashed"
                        aria-label="Add assignee"
                      >
                        <i data-lucide="circle-plus" />
                      </button>
                    </span>
                    <span className="d-flex align-items-center gap-3">
                      <span className="d-inline-flex align-items-center gap-1 fs-xs fw-bold text-cat-violet">
                        <i className="icon-16" data-lucide="paperclip" aria-hidden="true" />
                        2
                      </span>
                      <span className="d-inline-flex align-items-center gap-1 fs-xs fw-bold text-cat-orange">
                        <i className="icon-16" data-lucide="message-square-text" aria-hidden="true" />
                        3
                      </span>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xxl-3">
            <div className="h-100 p-3 rounded-4 border-theme bg-warning-soft">
              <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                <h3 className="d-flex align-items-center gap-2 fs-5 fw-bold text-title mb-0">
                  <span className="legend-dot bg-cat-violet" />
                  Running Task
                </h3>
                <div className="d-flex align-items-center gap-2 flex-shrink-0">
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn btn-outline-soft btn-18 rounded-circle"
                      data-bs-toggle="dropdown"
                      data-bs-offset="0,8"
                      aria-expanded="false"
                      aria-label="Running tasks options"
                    >
                      <i data-lucide="ellipsis" />
                    </button>
                    {" "}
                    <ul className="dropdown-menu dropdown-menu-end p-2">
                      <li>
                        <button
                          type="button"
                          className="dropdown-item"
                          data-bs-toggle="modal"
                          data-bs-target="#taskModal"
                        >
                          <i data-lucide="plus" />
                          Add task
                        </button>
                      </li>
                      <li>
                        <button type="button" className="dropdown-item">
                          <i data-lucide="pen-line" />
                          Rename column
                        </button>
                      </li>
                      <li>
                        <button type="button" className="dropdown-item">
                          <i data-lucide="arrow-down-up" />
                          Sort by priority
                        </button>
                      </li>
                      <li>
                        <button type="button" className="dropdown-item">
                          <i data-lucide="eye-off" />
                          Hide column
                        </button>
                      </li>
                      <li>
                        <hr className="dropdown-divider my-1" />
                      </li>
                      <li>
                        <button type="button" className="dropdown-item dropdown-item-danger">
                          <i data-lucide="trash-2" />
                          Clear column
                        </button>
                      </li>
                    </ul>
                  </div>
                  <button
                    type="button"
                    className="btn btn-outline-soft btn-18 rounded-circle"
                    data-bs-toggle="modal"
                    data-bs-target="#taskModal"
                    aria-label="Add running task"
                  >
                    <i data-lucide="plus" />
                  </button>
                </div>
              </div>
              <ul className="d-flex flex-column gap-3 mb-0">
                <li className="p-3 rounded-4 bg-plain">
                  <span className="badge-soft tint-violet d-inline-flex align-items-center gap-1">
                    {" "}
                    <i className="icon-12" data-lucide="circle" aria-hidden="true" />
                    Medium Priority
                    {" "}
                  </span>
                  <h4 className="fs-6 fw-bold text-title mt-3 mb-2">
                    Refactor the prompt studio editor
                  </h4>
                  <div className="d-flex flex-wrap gap-2">
                    <span className="px-2 py-1 rounded-pill fs-xs fw-bold bg-plain border-soft text-muted-2">
                      #UI021
                    </span>
                    <span className="px-2 py-1 rounded-pill fs-xs fw-bold tint-blue">
                      Design
                    </span>
                  </div>
                  <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 pt-3 mt-3 border-t-soft">
                    <span className="d-flex align-items-center gap-2">
                      <span className="avatar-stack">
                        <span className="avatar avatar-sm">
                          <img src="/assets/images/avatar-1.png" width="34" height="34" alt="" />
                        </span>
                        <span className="avatar avatar-sm">
                          <img src="/assets/images/avatar-2.png" width="34" height="34" alt="" />
                        </span>
                        <span className="avatar avatar-sm">
                          <img src="/assets/images/avatar-4.png" width="34" height="34" alt="" />
                        </span>
                        <span className="avatar avatar-sm">
                          <img src="/assets/images/avatar-3.png" width="34" height="34" alt="" />
                        </span>
                        <span className="avatar avatar-sm bg-soft text-title">
                          +5
                        </span>
                      </span>
                      <button
                        type="button"
                        className="btn btn-outline-soft btn-18 rounded-circle border-dashed"
                        aria-label="Add assignee"
                      >
                        <i data-lucide="circle-plus" />
                      </button>
                    </span>
                    <span className="d-flex align-items-center gap-3">
                      <span className="d-inline-flex align-items-center gap-1 fs-xs fw-bold text-cat-violet">
                        <i className="icon-16" data-lucide="paperclip" aria-hidden="true" />
                        2
                      </span>
                      <span className="d-inline-flex align-items-center gap-1 fs-xs fw-bold text-cat-orange">
                        <i className="icon-16" data-lucide="message-square-text" aria-hidden="true" />
                        3
                      </span>
                    </span>
                  </div>
                </li>
                <li className="p-3 rounded-4 bg-plain">
                  <span className="badge-soft tint-danger d-inline-flex align-items-center gap-1">
                    {" "}
                    <i className="icon-12" data-lucide="circle" aria-hidden="true" />
                    High Priority
                    {" "}
                  </span>
                  <h4 className="fs-6 fw-bold text-title mt-3 mb-2">
                    Ship streaming responses for chat
                  </h4>
                  <div className="d-flex flex-wrap gap-2">
                    <span className="px-2 py-1 rounded-pill fs-xs fw-bold bg-plain border-soft text-muted-2">
                      #UI024
                    </span>
                    <span className="px-2 py-1 rounded-pill fs-xs fw-bold tint-blue">
                      Design
                    </span>
                  </div>
                  <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 pt-3 mt-3 border-t-soft">
                    <span className="d-flex align-items-center gap-2">
                      <span className="avatar-stack">
                        <span className="avatar avatar-sm">
                          <img src="/assets/images/avatar-1.png" width="34" height="34" alt="" />
                        </span>
                        <span className="avatar avatar-sm">
                          <img src="/assets/images/avatar-3.png" width="34" height="34" alt="" />
                        </span>
                        <span className="avatar avatar-sm bg-soft text-title">
                          +5
                        </span>
                      </span>
                      <button
                        type="button"
                        className="btn btn-outline-soft btn-18 rounded-circle border-dashed"
                        aria-label="Add assignee"
                      >
                        <i data-lucide="circle-plus" />
                      </button>
                    </span>
                    <span className="d-flex align-items-center gap-3">
                      <span className="d-inline-flex align-items-center gap-1 fs-xs fw-bold text-cat-violet">
                        <i className="icon-16" data-lucide="paperclip" aria-hidden="true" />
                        2
                      </span>
                      <span className="d-inline-flex align-items-center gap-1 fs-xs fw-bold text-cat-orange">
                        <i className="icon-16" data-lucide="message-square-text" aria-hidden="true" />
                        3
                      </span>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xxl-3">
            <div className="h-100 p-3 rounded-4 border-theme bg-success-soft">
              <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                <h3 className="d-flex align-items-center gap-2 fs-5 fw-bold text-title mb-0">
                  <span className="legend-dot bg-cat-violet" />
                  Completed Task
                </h3>
                <div className="d-flex align-items-center gap-2 flex-shrink-0">
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn btn-outline-soft btn-18 rounded-circle"
                      data-bs-toggle="dropdown"
                      data-bs-offset="0,8"
                      aria-expanded="false"
                      aria-label="Completed tasks options"
                    >
                      <i data-lucide="ellipsis" />
                    </button>
                    {" "}
                    <ul className="dropdown-menu dropdown-menu-end p-2">
                      <li>
                        <button
                          type="button"
                          className="dropdown-item"
                          data-bs-toggle="modal"
                          data-bs-target="#taskModal"
                        >
                          <i data-lucide="plus" />
                          Add task
                        </button>
                      </li>
                      <li>
                        <button type="button" className="dropdown-item">
                          <i data-lucide="pen-line" />
                          Rename column
                        </button>
                      </li>
                      <li>
                        <button type="button" className="dropdown-item">
                          <i data-lucide="arrow-down-up" />
                          Sort by priority
                        </button>
                      </li>
                      <li>
                        <button type="button" className="dropdown-item">
                          <i data-lucide="eye-off" />
                          Hide column
                        </button>
                      </li>
                      <li>
                        <hr className="dropdown-divider my-1" />
                      </li>
                      <li>
                        <button type="button" className="dropdown-item dropdown-item-danger">
                          <i data-lucide="trash-2" />
                          Clear column
                        </button>
                      </li>
                    </ul>
                  </div>
                  <button
                    type="button"
                    className="btn btn-outline-soft btn-18 rounded-circle"
                    data-bs-toggle="modal"
                    data-bs-target="#taskModal"
                    aria-label="Add completed task"
                  >
                    <i data-lucide="plus" />
                  </button>
                </div>
              </div>
              <ul className="d-flex flex-column gap-3 mb-0">
                <li className="p-3 rounded-4 bg-plain">
                  <span className="badge-soft tint-violet d-inline-flex align-items-center gap-1">
                    {" "}
                    <i className="icon-12" data-lucide="circle" aria-hidden="true" />
                    Medium Priority
                    {" "}
                  </span>
                  <h4 className="fs-6 fw-bold text-title mt-3 mb-2">
                    Add dark mode to the analytics views
                  </h4>
                  <div className="d-flex flex-wrap gap-2">
                    <span className="px-2 py-1 rounded-pill fs-xs fw-bold bg-plain border-soft text-muted-2">
                      #UI031
                    </span>
                    <span className="px-2 py-1 rounded-pill fs-xs fw-bold tint-blue">
                      Design
                    </span>
                    <span className="px-2 py-1 rounded-pill fs-xs fw-bold tint-emerald">
                      Done
                    </span>
                  </div>
                  <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 pt-3 mt-3 border-t-soft">
                    <span className="d-flex align-items-center gap-2">
                      <span className="avatar-stack">
                        <span className="avatar avatar-sm">
                          <img src="/assets/images/avatar-1.png" width="34" height="34" alt="" />
                        </span>
                        <span className="avatar avatar-sm">
                          <img src="/assets/images/avatar-3.png" width="34" height="34" alt="" />
                        </span>
                        <span className="avatar avatar-sm bg-soft text-title">
                          +5
                        </span>
                      </span>
                      <button
                        type="button"
                        className="btn btn-outline-soft btn-18 rounded-circle border-dashed"
                        aria-label="Add assignee"
                      >
                        <i data-lucide="circle-plus" />
                      </button>
                    </span>
                    <span className="d-flex align-items-center gap-3">
                      <span className="d-inline-flex align-items-center gap-1 fs-xs fw-bold text-cat-violet">
                        <i className="icon-16" data-lucide="paperclip" aria-hidden="true" />
                        2
                      </span>
                      <span className="d-inline-flex align-items-center gap-1 fs-xs fw-bold text-cat-orange">
                        <i className="icon-16" data-lucide="message-square-text" aria-hidden="true" />
                        3
                      </span>
                    </span>
                  </div>
                </li>
                <li className="p-3 rounded-4 bg-plain">
                  <span className="badge-soft tint-danger d-inline-flex align-items-center gap-1">
                    {" "}
                    <i className="icon-12" data-lucide="circle" aria-hidden="true" />
                    High Priority
                    {" "}
                  </span>
                  <h4 className="fs-6 fw-bold text-title mt-3 mb-2">
                    Migrate auth to the new token service
                  </h4>
                  <div className="d-flex flex-wrap gap-2">
                    <span className="px-2 py-1 rounded-pill fs-xs fw-bold bg-plain border-soft text-muted-2">
                      #UI034
                    </span>
                    <span className="px-2 py-1 rounded-pill fs-xs fw-bold tint-blue">
                      Design
                    </span>
                    <span className="px-2 py-1 rounded-pill fs-xs fw-bold tint-emerald">
                      Done
                    </span>
                  </div>
                  <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 pt-3 mt-3 border-t-soft">
                    <span className="d-flex align-items-center gap-2">
                      <span className="avatar-stack">
                        <span className="avatar avatar-sm">
                          <img src="/assets/images/avatar-1.png" width="34" height="34" alt="" />
                        </span>
                        <span className="avatar avatar-sm">
                          <img src="/assets/images/avatar-2.png" width="34" height="34" alt="" />
                        </span>
                        <span className="avatar avatar-sm">
                          <img src="/assets/images/avatar-4.png" width="34" height="34" alt="" />
                        </span>
                        <span className="avatar avatar-sm">
                          <img src="/assets/images/avatar-3.png" width="34" height="34" alt="" />
                        </span>
                        <span className="avatar avatar-sm bg-soft text-title">
                          +5
                        </span>
                      </span>
                      <button
                        type="button"
                        className="btn btn-outline-soft btn-18 rounded-circle border-dashed"
                        aria-label="Add assignee"
                      >
                        <i data-lucide="circle-plus" />
                      </button>
                    </span>
                    <span className="d-flex align-items-center gap-3">
                      <span className="d-inline-flex align-items-center gap-1 fs-xs fw-bold text-cat-violet">
                        <i className="icon-16" data-lucide="paperclip" aria-hidden="true" />
                        2
                      </span>
                      <span className="d-inline-flex align-items-center gap-1 fs-xs fw-bold text-cat-orange">
                        <i className="icon-16" data-lucide="message-square-text" aria-hidden="true" />
                        3
                      </span>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xxl-3">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <h3 className="fs-5 fw-bold text-title mb-3">
                  Executive Insights
                </h3>
                <ul className="d-flex flex-column gap-3 mb-0">
                  <li className="d-flex align-items-center gap-2 px-3 py-2 rounded-2 bg-plain border-theme">
                    <span className="icon-box icon-box-sm tint-emerald" aria-hidden="true">
                      <i data-lucide="trending-up" />
                    </span>
                    <span className="d-flex flex-column flex-grow-1 min-w-0">
                      <span className="fs-md fw-semibold text-title">
                        ROI
                      </span>
                      <span className="fs-md text-body-2">
                        vs 280% target
                      </span>
                    </span>
                    <span className="fs-6 fw-bold text-cat-emerald">
                      312%
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2 px-3 py-2 rounded-2 bg-plain border-theme">
                    <span className="icon-box icon-box-sm tint-blue" aria-hidden="true">
                      <i data-lucide="clock" />
                    </span>
                    <span className="d-flex flex-column flex-grow-1 min-w-0">
                      <span className="fs-md fw-semibold text-title">
                        Hours Saved
                      </span>
                      <span className="fs-md text-body-2">
                        this month
                      </span>
                    </span>
                    <span className="fs-6 fw-bold text-cat-blue">
                      14,820
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2 px-3 py-2 rounded-2 bg-plain border-theme">
                    <span className="icon-box icon-box-sm tint-violet" aria-hidden="true">
                      <i data-lucide="zap" />
                    </span>
                    <span className="d-flex flex-column flex-grow-1 min-w-0">
                      <span className="fs-md fw-semibold text-title">
                        Automation Rate
                      </span>
                      <span className="fs-md text-body-2">
                        <span dir="ltr">
                          +8.2%
                        </span>
                        {" "}
                        MoM
                      </span>
                    </span>
                    <span className="fs-6 fw-bold text-cat-violet">
                      68.4%
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2 px-3 py-2 rounded-2 bg-plain border-theme">
                    <span className="icon-box icon-box-sm tint-amber" aria-hidden="true">
                      <i data-lucide="dollar-sign" />
                    </span>
                    <span className="d-flex flex-column flex-grow-1 min-w-0">
                      <span className="fs-md fw-semibold text-title">
                        Revenue Impact
                      </span>
                      <span className="fs-md text-body-2">
                        attributed
                      </span>
                    </span>
                    <span className="fs-6 fw-bold text-cat-orange">
                      $2.4M
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2 px-3 py-2 rounded-2 bg-plain border-theme">
                    <span className="icon-box icon-box-sm tint-cyan" aria-hidden="true">
                      <i data-lucide="users" />
                    </span>
                    <span className="d-flex flex-column flex-grow-1 min-w-0">
                      <span className="fs-md fw-semibold text-title">
                        Adoption Rate
                      </span>
                      <span className="fs-md text-body-2">
                        48,392 users
                      </span>
                    </span>
                    <span className="fs-6 fw-bold text-cat-cyan">
                      84.7%
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Task modal (shared by every board column) ===== */}
      <div
        role="dialog"
        className="modal fade"
        id="taskModal"
        tabIndex="-1"
        aria-labelledby="taskModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
          <div className="modal-content">
            <div className="modal-header border-b-soft justify-content-between">
              <div>
                <h2 className="modal-title h5 mb-0" id="taskModalLabel">
                  Add Task
                </h2>
                <p className="fs-md text-muted-2 mb-0">
                  Create a task and assign it to your team
                </p>
              </div>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <form>
              <div className="modal-body">
                <div className="row g-3">
                  <div className="col-12">
                    <label htmlFor="taskTitle" className="form-label fs-md fw-semibold text-title">
                      Task title
                    </label>
                    {" "}
                    <input
                      type="text"
                      className="form-control"
                      id="taskTitle"
                      name="task-title"
                      placeholder="e.g. Wire up the model comparison dashboard"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="taskDesc" className="form-label fs-md fw-semibold text-title">
                      Description
                    </label>
                    {" "}
                    <textarea
                      className="form-control"
                      id="taskDesc"
                      name="task-desc"
                      rows="3"
                      placeholder="Add the context, acceptance criteria or links a teammate would need."
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="taskColumn" className="form-label fs-md fw-semibold text-title">
                      Column
                    </label>
                    {" "}
                    <select className="form-select" id="taskColumn" name="task-column" defaultValue="Upcoming Tasks">
                      <option>
                        Upcoming Tasks
                      </option>
                      <option>
                        Running Task
                      </option>
                      <option>
                        Completed Task
                      </option>
                    </select>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="taskPriority" className="form-label fs-md fw-semibold text-title">
                      Priority
                    </label>
                    {" "}
                    <select
                      className="form-select"
                      id="taskPriority"
                      name="task-priority"
                      defaultValue="Medium Priority"
                    >
                      <option>
                        Low Priority
                      </option>
                      <option>
                        Medium Priority
                      </option>
                      <option>
                        High Priority
                      </option>
                    </select>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="taskTicket" className="form-label fs-md fw-semibold text-title">
                      Ticket ID
                    </label>
                    {" "}
                    <input
                      type="text"
                      className="form-control"
                      id="taskTicket"
                      name="task-ticket"
                      placeholder="#UI007"
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="taskDue" className="form-label fs-md fw-semibold text-title">
                      Due date
                    </label>
                    {" "}
                    <input type="date" className="form-control" id="taskDue" name="task-due" />
                  </div>
                  <div className="col-12">
                    <label htmlFor="taskTags" className="form-label fs-md fw-semibold text-title">
                      Tags
                    </label>
                    {" "}
                    <input
                      type="text"
                      className="form-control"
                      id="taskTags"
                      name="task-tags"
                      placeholder="Design, Backlog"
                      aria-describedby="taskTagsHelp"
                    />
                    {" "}
                    <span className="d-block fs-xs text-muted-2 mt-1" id="taskTagsHelp">
                      Separate tags with a comma.
                    </span>
                  </div>
                  <div className="col-12">
                    <span className="d-block form-label fs-md fw-semibold text-title">
                      Assignees
                    </span>
                    <div className="d-flex align-items-center gap-2">
                      <span className="avatar-stack">
                        <span className="avatar avatar-sm">
                          <img src="/assets/images/avatar-1.png" width="34" height="34" alt="Jordan Davis" />
                        </span>
                        <span className="avatar avatar-sm">
                          <img src="/assets/images/avatar-2.png" width="34" height="34" alt="Kayla Simmons" />
                        </span>
                        <span className="avatar avatar-sm">
                          <img src="/assets/images/avatar-3.png" width="34" height="34" alt="Sophia Chen" />
                        </span>
                      </span>
                      <button
                        type="button"
                        className="btn btn-outline-soft btn-18 rounded-circle border-dashed"
                        aria-label="Add assignee"
                      >
                        <i data-lucide="circle-plus" />
                      </button>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="taskNotify"
                        name="task-notify"
                        defaultChecked
                      />
                      {" "}
                      <label className="form-check-label fs-md" htmlFor="taskNotify">
                        Notify assignees when this task is created
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer border-t-soft">
                <button type="button" className="btn btn-outline-soft" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button type="button" className="btn btn-primary d-inline-flex align-items-center gap-2">
                  <i className="icon-18" data-lucide="plus" aria-hidden="true" />
                  Create Task
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* ===== Operations centre ===== */}
      <section className="mb-4" aria-labelledby="ops-title">
        <div className="mb-3">
          <h2 className="fs-4 fw-bold text-title mb-0" id="ops-title">
            Operations Center
          </h2>
          <p className="fs-md fw-medium text-body-2 mb-0">
            {"Agents, workflows & infrastructure"}
          </p>
        </div>
        <div className="row g-3">
          <div className="col-12 col-xl-6 col-xxl-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="mb-3">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    AI Agent Center
                  </h3>
                  <span className="fs-md text-muted-2">
                    48 agents total
                  </span>
                </div>
                <ul className="d-flex flex-column gap-2 mt-auto mb-0">
                  <li className="d-flex align-items-center gap-2 p-2 rounded-2 bg-plain border-theme">
                    <span className="icon-box icon-box-sm tint-emerald" aria-hidden="true">
                      <i data-lucide="play" />
                    </span>
                    <span className="fs-md text-body-2 flex-grow-1 min-w-0">
                      Active
                    </span>
                    <div
                      className="progress progress-inline"
                      role="progressbar"
                      aria-label="Active agents share"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-emerald" style={{ width: "50%" }} />
                    </div>
                    <span className="fs-md fw-bold text-title">
                      24
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2 p-2 rounded-2 bg-plain border-theme">
                    <span className="icon-box icon-box-sm tint-blue" aria-hidden="true">
                      <i data-lucide="activity" />
                    </span>
                    <span className="fs-md text-body-2 flex-grow-1 min-w-0">
                      Running
                    </span>
                    <div
                      className="progress progress-inline"
                      role="progressbar"
                      aria-label="Running agents share"
                      aria-valuenow="38"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-blue" style={{ width: "38%" }} />
                    </div>
                    <span className="fs-md fw-bold text-title">
                      18
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2 p-2 rounded-2 bg-plain border-theme">
                    <span className="icon-box icon-box-sm tint-danger" aria-hidden="true">
                      <i data-lucide="circle-x" />
                    </span>
                    <span className="fs-md text-body-2 flex-grow-1 min-w-0">
                      Failed
                    </span>
                    <div
                      className="progress progress-inline"
                      role="progressbar"
                      aria-label="Failed agents share"
                      aria-valuenow="4"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-red" style={{ width: "4%" }} />
                    </div>
                    <span className="fs-md fw-bold text-title">
                      2
                    </span>
                  </li>
                  <li className="d-flex align-items-center gap-2 p-2 rounded-2 bg-plain border-theme">
                    <span className="icon-box icon-box-sm tint-amber" aria-hidden="true">
                      <i data-lucide="clock" />
                    </span>
                    <span className="fs-md text-body-2 flex-grow-1 min-w-0">
                      Queue
                    </span>
                    <div
                      className="progress progress-inline"
                      role="progressbar"
                      aria-label="Queued agents share"
                      aria-valuenow="19"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-orange" style={{ width: "19%" }} />
                    </div>
                    <span className="fs-md fw-bold text-title">
                      9
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-6 col-xxl-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="mb-3">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    Workflow Automation
                  </h3>
                  <span className="fs-md text-muted-2">
                    156 workflows
                  </span>
                </div>
                <ul className="d-flex flex-column gap-3 mb-0">
                  <li>
                    <div className="d-flex align-items-center justify-content-between gap-2">
                      <span className="fs-md fw-medium text-body-2">
                        Active Workflows
                      </span>
                      <span className="fs-md fw-bold text-title">
                        89
                      </span>
                    </div>
                    <div
                      className="progress mt-2"
                      role="progressbar"
                      aria-label="Active workflows share"
                      aria-valuenow="57"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-blue" style={{ width: "57%" }} />
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center justify-content-between gap-2">
                      <span className="fs-md fw-medium text-body-2">
                        Completed Today
                      </span>
                      <span className="fs-md fw-bold text-title">
                        2,847
                      </span>
                    </div>
                    <div
                      className="progress mt-2"
                      role="progressbar"
                      aria-label="Completed today share"
                      aria-valuenow="82"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-emerald" style={{ width: "82%" }} />
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center justify-content-between gap-2">
                      <span className="fs-md fw-medium text-body-2">
                        Failed
                      </span>
                      <span className="fs-md fw-bold text-title">
                        14
                      </span>
                    </div>
                    <div
                      className="progress mt-2"
                      role="progressbar"
                      aria-label="Failed workflows share"
                      aria-valuenow="9"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-red" style={{ width: "9%" }} />
                    </div>
                  </li>
                </ul>
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 p-3 mt-auto rounded-3 tint-emerald border-soft">
                  <span className="d-flex flex-column">
                    <span className="fs-md fw-medium text-body-2">
                      Success Rate
                    </span>
                    <span className="fs-2 fw-bold text-cat-emerald lh-1">
                      98.1%
                    </span>
                  </span>
                  <span className="badge-soft tint-success d-inline-flex align-items-center gap-1">
                    {" "}
                    <i className="icon-12 flip-rtl" data-lucide="arrow-up-right" aria-hidden="true" />
                    {" "}
                    <span dir="ltr">
                      +2.3%
                    </span>
                    {" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-6 col-xxl-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <div className="mb-3">
                  <h3 className="fs-5 fw-bold text-title mb-0">
                    GPU Infrastructure
                  </h3>
                  <span className="fs-md text-muted-2">
                    8× A100 80GB
                  </span>
                </div>
                <ul className="d-flex flex-column gap-3 mt-auto mb-0">
                  <li>
                    <div className="d-flex align-items-center justify-content-between gap-2">
                      <span className="fs-md fw-medium text-body-2">
                        GPU Utilization
                      </span>
                      <span className="fs-md fw-bold text-title">
                        84%
                      </span>
                    </div>
                    <div
                      className="progress mt-2"
                      role="progressbar"
                      aria-label="GPU utilization"
                      aria-valuenow="84"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-violet" style={{ width: "84%" }} />
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center justify-content-between gap-2">
                      <span className="fs-md fw-medium text-body-2">
                        CPU Load
                      </span>
                      <span className="fs-md fw-bold text-title">
                        67%
                      </span>
                    </div>
                    <div
                      className="progress mt-2"
                      role="progressbar"
                      aria-label="CPU load"
                      aria-valuenow="67"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-blue" style={{ width: "67%" }} />
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center justify-content-between gap-2">
                      <span className="fs-md fw-medium text-body-2">
                        RAM Usage
                      </span>
                      <span className="fs-md fw-bold text-title">
                        78%
                      </span>
                    </div>
                    <div
                      className="progress mt-2"
                      role="progressbar"
                      aria-label="RAM usage"
                      aria-valuenow="78"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-emerald" style={{ width: "78%" }} />
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center justify-content-between gap-2">
                      <span className="fs-md fw-medium text-body-2">
                        Storage
                      </span>
                      <span className="fs-md fw-bold text-title">
                        54%
                      </span>
                    </div>
                    <div
                      className="progress mt-2"
                      role="progressbar"
                      aria-label="Storage used"
                      aria-valuenow="54"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-orange" style={{ width: "54%" }} />
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center justify-content-between gap-2">
                      <span className="fs-md fw-medium text-body-2">
                        Network
                      </span>
                      <span className="fs-md fw-bold text-title">
                        2.4 Gbps
                      </span>
                    </div>
                    <div
                      className="progress mt-2"
                      role="progressbar"
                      aria-label="Network throughput"
                      aria-valuenow="43"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="progress-bar bg-cat-cyan" style={{ width: "43%" }} />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ========== FOOTER ========== */}
    </AppShell>
  );
}

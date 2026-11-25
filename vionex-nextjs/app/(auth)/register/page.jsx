/* Generated from the Vionex HTML theme by scripts/convert-html.mjs */
import VendorScripts from "@/components/VendorScripts";

export const metadata = {
  title: "Vionex — Create Account",
  description: "Create your Vionex account — the enterprise admin dashboard for AI operations. A split authentication layout built with Bootstrap 5, CSS variables and a scalable design system.",
};

const scripts = [
    "/assets/js/jquery.min.js",
    "/assets/js/bootstrap.bundle.min.js",
    "/assets/js/lucide.min.js",
    "/assets/js/dashboard.js",
  ];

export default function Page() {
  return (
    <>
      {/* ============================ AUTH SHELL ============================ */}
      <div className="row g-0 h-100">
        {/* ========== FORM COLUMN ========== */}
        <main
          className="col-12 col-lg-6 col-xxl-5 order-lg-last d-flex flex-column h-100 overflow-y-auto scrollbar-thin p-3 p-sm-4 p-xl-5"
          id="main-content"
        >
          {/* Top bar — the brand shows here only while the panel beside it is hidden */}
          <div className="d-flex align-items-center justify-content-between gap-3 mb-4">
            <a href="/" className="d-lg-none" aria-label="Vionex home">
              {" "}
              <svg width="95" height="24" viewBox="0 0 95 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path
                  className="fill-primary"
                  d="M9.67236 18.4214L15.167 0.696289H19.7837L12.0034 22.7354H8.93066L9.67236 18.4214ZM4.60156 0.696289L10.0659 18.4214L10.853 22.7354H7.75L0 0.696289H4.60156Z"
                />
                {" "}
                <path
                  className="fill-primary"
                  d="M25.9897 6.35742V22.7354H21.9785V6.35742H25.9897ZM21.7061 2.07373C21.7061 1.47835 21.9079 0.983887 22.3115 0.590332C22.7253 0.196777 23.2803 0 23.9766 0C24.6729 0 25.2228 0.196777 25.6265 0.590332C26.0402 0.983887 26.2471 1.47835 26.2471 2.07373C26.2471 2.65902 26.0402 3.14844 25.6265 3.54199C25.2228 3.93555 24.6729 4.13232 23.9766 4.13232C23.2803 4.13232 22.7253 3.93555 22.3115 3.54199C21.9079 3.14844 21.7061 2.65902 21.7061 2.07373Z"
                />
                {" "}
                <path
                  className="fill-primary"
                  d="M29.0928 14.7129V14.395C29.0928 13.1942 29.2643 12.0892 29.6074 11.0801C29.9505 10.0609 30.45 9.1779 31.106 8.43115C31.7619 7.68441 32.5641 7.10417 33.5127 6.69043C34.4613 6.2666 35.541 6.05469 36.752 6.05469C37.9831 6.05469 39.0729 6.2666 40.0215 6.69043C40.9801 7.10417 41.7874 7.68441 42.4434 8.43115C43.0993 9.1779 43.5988 10.0609 43.9419 11.0801C44.285 12.0892 44.4565 13.1942 44.4565 14.395V14.7129C44.4565 15.9036 44.285 17.0086 43.9419 18.0278C43.5988 19.0369 43.0993 19.9199 42.4434 20.6768C41.7874 21.4235 40.9852 22.0037 40.0366 22.4175C39.0881 22.8312 38.0033 23.0381 36.7822 23.0381C35.5713 23.0381 34.4865 22.8312 33.5278 22.4175C32.5692 22.0037 31.7619 21.4235 31.106 20.6768C30.45 19.9199 29.9505 19.0369 29.6074 18.0278C29.2643 17.0086 29.0928 15.9036 29.0928 14.7129ZM33.0889 14.395V14.7129C33.0889 15.4294 33.1595 16.1004 33.3008 16.7261C33.4421 17.3517 33.659 17.9017 33.9517 18.376C34.2443 18.8503 34.6227 19.2236 35.0869 19.4961C35.5612 19.7585 36.1263 19.8896 36.7822 19.8896C37.4281 19.8896 37.9831 19.7585 38.4473 19.4961C38.9115 19.2236 39.2899 18.8503 39.5825 18.376C39.8853 17.9017 40.1073 17.3517 40.2485 16.7261C40.3898 16.1004 40.4604 15.4294 40.4604 14.7129V14.395C40.4604 13.6886 40.3898 13.0277 40.2485 12.4121C40.1073 11.7865 39.8853 11.2365 39.5825 10.7622C39.2899 10.2778 38.9064 9.89941 38.4321 9.62695C37.9679 9.3444 37.4079 9.20312 36.752 9.20312C36.1061 9.20312 35.5511 9.3444 35.0869 9.62695C34.6227 9.89941 34.2443 10.2778 33.9517 10.7622C33.659 11.2365 33.4421 11.7865 33.3008 12.4121C33.1595 13.0277 33.0889 13.6886 33.0889 14.395Z"
                />
                {" "}
                <path
                  className="fill-primary"
                  d="M51.2832 9.854V22.7354H47.2871V6.35742H51.041L51.2832 9.854ZM50.6475 13.9561H49.4668C49.4769 12.7653 49.6383 11.6855 49.9512 10.7168C50.264 9.74805 50.703 8.91553 51.2681 8.21924C51.8433 7.52295 52.5244 6.98812 53.3115 6.61475C54.0986 6.24137 54.9766 6.05469 55.9453 6.05469C56.7324 6.05469 57.4438 6.16569 58.0796 6.3877C58.7153 6.6097 59.2603 6.96289 59.7144 7.44727C60.1785 7.93164 60.5317 8.56738 60.7739 9.35449C61.0262 10.1315 61.1523 11.0902 61.1523 12.2305V22.7354H57.126V12.2002C57.126 11.4535 57.015 10.8631 56.793 10.4292C56.5811 9.99528 56.2682 9.6875 55.8545 9.50586C55.4508 9.32422 54.9513 9.2334 54.356 9.2334C53.7404 9.2334 53.2005 9.35954 52.7363 9.61182C52.2822 9.854 51.8988 10.1921 51.5859 10.626C51.2832 11.0599 51.0511 11.5594 50.8896 12.1245C50.7282 12.6896 50.6475 13.3001 50.6475 13.9561Z"
                />
                {" "}
                <path
                  className="fill-primary"
                  d="M72.0356 23.0381C70.7944 23.0381 69.6794 22.8363 68.6904 22.4326C67.7015 22.029 66.8589 21.4689 66.1626 20.7524C65.4764 20.0259 64.9466 19.1833 64.5732 18.2246C64.21 17.2559 64.0283 16.2165 64.0283 15.1064V14.501C64.0283 13.2396 64.21 12.0942 64.5732 11.0649C64.9365 10.0256 65.4512 9.13249 66.1172 8.38574C66.7832 7.639 67.5804 7.0638 68.5088 6.66016C69.4372 6.25651 70.4614 6.05469 71.5815 6.05469C72.742 6.05469 73.7663 6.25146 74.6543 6.64502C75.5423 7.02848 76.284 7.5734 76.8794 8.27979C77.4748 8.98617 77.9238 9.83382 78.2266 10.8228C78.5293 11.8016 78.6807 12.8864 78.6807 14.0771V15.7573H65.8447V13.0024H74.7451V12.6997C74.7249 12.064 74.6038 11.4837 74.3818 10.959C74.1598 10.4242 73.8167 10.0003 73.3525 9.6875C72.8883 9.36458 72.2879 9.20312 71.5513 9.20312C70.9559 9.20312 70.4362 9.33431 69.9922 9.59668C69.5583 9.84896 69.195 10.2122 68.9023 10.6865C68.6198 11.1507 68.4079 11.7057 68.2666 12.3516C68.1253 12.9974 68.0547 13.7139 68.0547 14.501V15.1064C68.0547 15.7926 68.1455 16.4284 68.3271 17.0137C68.5189 17.599 68.7964 18.1086 69.1597 18.5425C69.533 18.9663 69.9771 19.2993 70.4917 19.5415C71.0164 19.7736 71.6118 19.8896 72.2778 19.8896C73.1154 19.8896 73.8722 19.7282 74.5483 19.4053C75.2345 19.0723 75.8299 18.5828 76.3345 17.937L78.3477 20.0259C78.0046 20.5304 77.5404 21.0148 76.9551 21.479C76.3799 21.9432 75.6836 22.3216 74.8662 22.6143C74.0488 22.8968 73.1053 23.0381 72.0356 23.0381Z"
                />
                {" "}
                <path
                  className="fill-primary"
                  d="M84.4932 6.35742L87.4146 11.5645L90.3813 6.35742H94.7256L89.9121 14.3799L94.9224 22.7354H90.5781L87.4448 17.271L84.2964 22.7354H79.9521L84.9473 14.3799L80.1641 6.35742H84.4932Z"
                />
              </svg>
              {" "}
            </a>
            <button
              type="button"
              className="icon-btn transition-base ms-auto"
              data-action="toggle-mode"
              aria-label="Toggle light and dark mode"
              title="Toggle light and dark mode"
            >
              <i data-lucide="moon" data-mode-icon="" />
            </button>
          </div>
          {/* Sign-up form — vertically centred in whatever height is left */}
          <div className="measure-sm w-100 mx-auto my-auto py-4">
            <h1 className="fs-2 fw-bold text-title mb-2">
              Create your account
            </h1>
            <p className="fs-lg text-body-2 mb-4">
              Fourteen days on the full plan, no card needed. Your workspace is ready the moment you finish this form.
            </p>
            {/* Federated sign-up */}
            <div className="row g-2 mb-3">
              <div className="col-12 col-sm-6">
                <button
                  type="button"
                  className="btn btn-outline-soft w-100 d-inline-flex align-items-center justify-content-center gap-2"
                  aria-label="Sign up with Google"
                >
                  <img src="/assets/images/logo-google.svg" alt="" width="64" height="21" className="d-block" />
                </button>
              </div>
              <div className="col-12 col-sm-6">
                <button
                  type="button"
                  className="btn btn-outline-soft w-100 d-inline-flex align-items-center justify-content-center gap-2 text-nowrap"
                >
                  <i className="icon-18" data-lucide="key-round" aria-hidden="true" />
                  Single sign-on
                </button>
              </div>
            </div>
            <p className="rule-label fs-sm text-muted-2 mb-3">
              or sign up with email
            </p>
            <form id="registerForm" noValidate data-validate="">
              <div className="mb-3">
                <label htmlFor="regName" className="form-label fs-md fw-semibold text-title">
                  Full name
                </label>
                <div className="field-icon">
                  <i className="icon-18" data-lucide="user-round" aria-hidden="true" />
                  {" "}
                  <input
                    type="text"
                    className="form-control"
                    id="regName"
                    name="name"
                    placeholder="Ravisha Verma"
                    autoComplete="name"
                    required
                  />
                </div>
                <div className="invalid-feedback">
                  Tell us what to call you.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="regEmail" className="form-label fs-md fw-semibold text-title">
                  Work email
                </label>
                <div className="field-icon">
                  <i className="icon-18" data-lucide="mail" aria-hidden="true" />
                  {" "}
                  <input
                    type="email"
                    className="form-control"
                    id="regEmail"
                    name="email"
                    placeholder="you@company.com"
                    autoComplete="email"
                    required
                  />
                </div>
                <div className="invalid-feedback">
                  Enter a valid email address.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="regPassword" className="form-label fs-md fw-semibold text-title">
                  Password
                </label>
                <div className="field-icon">
                  <i className="icon-18" data-lucide="lock-keyhole" aria-hidden="true" />
                  {" "}
                  <input
                    type="password"
                    className="form-control"
                    id="regPassword"
                    name="password"
                    placeholder="At least 8 characters"
                    autoComplete="new-password"
                    minLength="8"
                    required
                  />
                  {" "}
                  <button
                    type="button"
                    className="btn btn-ghost btn-18 rounded-circle"
                    data-password-toggle="#regPassword"
                    aria-controls="regPassword"
                    aria-pressed="false"
                    aria-label="Show password"
                  >
                    <span data-password-icon="">
                      <i data-password-glyph="show" data-lucide="eye" />
                      <i className="d-none" data-password-glyph="hide" data-lucide="eye-off" />
                    </span>
                  </button>
                </div>
                <div className="invalid-feedback">
                  Choose a password of at least 8 characters.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="regConfirm" className="form-label fs-md fw-semibold text-title">
                  Confirm password
                </label>
                <div className="field-icon">
                  <i className="icon-18" data-lucide="lock-keyhole" aria-hidden="true" />
                  {" "}
                  <input
                    type="password"
                    className="form-control"
                    id="regConfirm"
                    name="confirm-password"
                    placeholder="Repeat your password"
                    autoComplete="new-password"
                    required
                    data-match="#regPassword"
                    data-match-message="Both passwords must be the same."
                  />
                  {" "}
                  <button
                    type="button"
                    className="btn btn-ghost btn-18 rounded-circle"
                    data-password-toggle="#regConfirm"
                    aria-controls="regConfirm"
                    aria-pressed="false"
                    aria-label="Show password"
                  >
                    <span data-password-icon="">
                      <i data-password-glyph="show" data-lucide="eye" />
                      <i className="d-none" data-password-glyph="hide" data-lucide="eye-off" />
                    </span>
                  </button>
                </div>
                <div className="invalid-feedback">
                  Re-enter exactly the same password.
                </div>
              </div>
              <div className="form-check mb-4">
                <input className="form-check-input" type="checkbox" id="regTerms" name="terms" required />
                {" "}
                <label className="form-check-label fs-md text-body-2" htmlFor="regTerms">
                  I agree to the
                  {" "}
                  <a href="#" className="fw-medium text-brand">
                    Terms of Service
                  </a>
                  {" "}and{" "}
                  <a href="#" className="fw-medium text-brand">
                    Privacy Policy
                  </a>
                </label>
                {" "}
                <div className="invalid-feedback">
                  Please accept the terms before continuing.
                </div>
              </div>
              {/* Confirmation panel — revealed by the validation module on a valid sign-up */}
              {" "}
              <div className="tint-success rounded-3 p-3 mb-3 d-none" role="status" data-validate-success="">
                <p className="d-flex align-items-center gap-2 fs-md fw-semibold mb-0">
                  <i className="icon-20 flex-shrink-0" data-lucide="circle-check-big" aria-hidden="true" />
                  <span>
                    Account created — check your inbox for the verification link, then
                    {" "}
                    <a href="/login" className="text-reset text-decoration-underline">
                      sign in
                    </a>
                    .
                  </span>
                </p>
              </div>
              {" "}
              <button
                type="submit"
                className="btn btn-primary w-100 d-inline-flex align-items-center justify-content-center gap-2"
              >
                <i className="icon-18" data-lucide="user-plus" aria-hidden="true" />
                Create account
              </button>
            </form>
            <p className="fs-md text-body-2 text-center mt-4 mb-0">
              Already have an account?
              {" "}
              <a href="/login" className="fw-semibold text-brand">
                Sign in
              </a>
            </p>
          </div>
          {/* Page foot */}
          <p className="fs-sm text-muted-2 text-center mb-0">
            © 2026 Vionex ·
            {" "}
            <a href="#" className="text-body-2">
              Privacy
            </a>
            {" "}·{" "}
            <a href="#" className="text-body-2">
              Terms
            </a>
          </p>
        </main>
        {/* ========== BRAND PANEL ========== */}
        <aside className="col-lg-6 col-xxl-7 order-lg-first on-dark bg-grad-theme panel-aura position-relative d-none d-lg-flex flex-column justify-content-between h-100 overflow-y-auto scrollbar-none gap-4 p-4 p-xl-5">
          {/* Top row — brand, and the status pill that says the product is live */}
          <div className="position-relative d-flex align-items-center justify-content-between gap-3">
            <a href="/" aria-label="Vionex home">
              {" "}
              <svg width="119" height="30" viewBox="0 0 95 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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
            <span className="badge-soft bg-white bg-opacity-10 border-glass text-primary d-none d-xl-inline-flex align-items-center gap-2 fs-sm fw-medium">
              {" "}
              <span className="legend-dot bg-cat-emerald" aria-hidden="true" />
              All systems operational
              {" "}
            </span>
          </div>
          <div className="position-relative measure-lg">
            <span className="badge-soft bg-white bg-opacity-25 border-glass text-title d-inline-flex align-items-center gap-2 mb-3">
              {" "}
              <i className="icon-14" data-lucide="sparkles" aria-hidden="true" />
              {" "}
              <span>
                Free for
                {" "}
                <bdi>
                  14 days
                </bdi>
                , no card
              </span>
              {" "}
            </span>
            <h2 className="display-6 fw-bold text-title mb-3">
              Your first model board, live this afternoon.
            </h2>
            <p className="fs-lg text-primary mb-4">
              Setting Vionex up is three short steps. Most teams have real numbers on a real dashboard before their coffee goes cold.
            </p>
            <ol className="timeline list-unstyled mb-4">
              <li className="timeline-item pb-4">
                <span
                  className="timeline-node icon-box bg-white bg-opacity-25 border-glass fw-bold text-title"
                  aria-hidden="true"
                >
                  1
                </span>
                {" "}
                <span className="d-flex align-items-center gap-2 fw-semibold text-title">
                  Create your workspace
                  <i className="icon-16 text-accent" data-lucide="rocket" aria-hidden="true" />
                </span>
                {" "}
                <span className="d-block fs-md text-primary">
                  Name it, choose the region your data lives in, and you are in.
                </span>
              </li>
              {" "}
              <li className="timeline-item pb-4">
                <span
                  className="timeline-node icon-box bg-white bg-opacity-25 border-glass fw-bold text-title"
                  aria-hidden="true"
                >
                  2
                </span>
                {" "}
                <span className="d-flex align-items-center gap-2 fw-semibold text-title">
                  Connect a source
                  <i className="icon-16 text-accent" data-lucide="database" aria-hidden="true" />
                </span>
                {" "}
                <span className="d-block fs-md text-primary">
                  Postgres, BigQuery, Snowflake, S3 or a plain CSV — pick one to start.
                </span>
                {" "}
                <span className="d-none d-xxl-flex flex-wrap gap-2 mt-2" aria-hidden="true">
                  <span className="badge-soft bg-white bg-opacity-10 border-glass text-primary fs-xs fw-medium">
                    Postgres
                  </span>
                  <span className="badge-soft bg-white bg-opacity-10 border-glass text-primary fs-xs fw-medium">
                    BigQuery
                  </span>
                  <span className="badge-soft bg-white bg-opacity-10 border-glass text-primary fs-xs fw-medium">
                    Snowflake
                  </span>
                  <span className="badge-soft bg-white bg-opacity-10 border-glass text-primary fs-xs fw-medium">
                    S3
                  </span>
                </span>
              </li>
              {" "}
              <li className="timeline-item">
                <span
                  className="timeline-node icon-box bg-white bg-opacity-25 border-glass fw-bold text-title"
                  aria-hidden="true"
                >
                  3
                </span>
                {" "}
                <span className="d-flex align-items-center gap-2 fw-semibold text-title">
                  Invite your team
                  <i className="icon-16 text-accent" data-lucide="users-round" aria-hidden="true" />
                </span>
                {" "}
                <span className="d-block fs-md text-primary">
                  Roles are per workspace, so everyone sees exactly what they should.
                </span>
              </li>
            </ol>
            {/* The three numbers a sceptical sign-up actually wants */}
            <ul className="row g-3 list-unstyled mb-0">
              <li className="col-4">
                <span className="d-block fs-4 fw-bold text-title lh-1 mb-1">
                  <bdi>
                    4 min
                  </bdi>
                </span>
                {" "}
                <span className="d-block fs-sm text-muted-2">
                  Median setup
                </span>
              </li>
              <li className="col-4">
                <span className="d-block fs-4 fw-bold text-title lh-1 mb-1">
                  <bdi>
                    99.98%
                  </bdi>
                </span>
                {" "}
                <span className="d-block fs-sm text-muted-2">
                  Uptime, 90 days
                </span>
              </li>
              <li className="col-4">
                <span className="d-block fs-4 fw-bold text-title lh-1 mb-1">
                  <bdi>
                    60+
                  </bdi>
                </span>
                {" "}
                <span className="d-block fs-sm text-muted-2">
                  Connectors
                </span>
              </li>
            </ul>
          </div>
          {/* Trust card — social proof above the rule, the compliance line below */}
          <div className="position-relative bg-white bg-opacity-10 border-glass rounded-4 p-3 p-xl-4">
            <div className="d-flex flex-wrap align-items-center gap-3">
              <span className="avatar-stack" aria-hidden="true">
                <span className="avatar avatar-sm">
                  <img src="/assets/images/avatar-1.png" width="34" height="34" alt="" />
                </span>
                <span className="avatar avatar-sm">
                  <img src="/assets/images/avatar-2.png" width="34" height="34" alt="" />
                </span>
                <span className="avatar avatar-sm">
                  <img src="/assets/images/avatar-3.png" width="34" height="34" alt="" />
                </span>
                <span className="avatar avatar-sm">
                  <img src="/assets/images/avatar-4.png" width="34" height="34" alt="" />
                </span>
              </span>
              <span className="min-w-0 flex-grow-1">
                {" "}
                <span className="d-block fw-semibold text-title">
                  Join
                  {" "}
                  <bdi>
                    12,000+
                  </bdi>
                  {" "}
                  teams already on Vionex
                </span>
                {" "}
                <span className="d-block fs-md text-primary">
                  Trial for 14 days · no card required · cancel any time
                </span>
                {" "}
              </span>
              <span className="d-flex align-items-center gap-2 flex-shrink-0">
                <span className="d-flex text-cat-amber" role="img" aria-label="Rated 4.9 out of 5">
                  <i className="icon-16 icon-fill" data-lucide="star" aria-hidden="true" />
                  <i className="icon-16 icon-fill" data-lucide="star" aria-hidden="true" />
                  <i className="icon-16 icon-fill" data-lucide="star" aria-hidden="true" />
                  <i className="icon-16 icon-fill" data-lucide="star" aria-hidden="true" />
                  <i className="icon-16 icon-fill" data-lucide="star" aria-hidden="true" />
                </span>
                <span className="fs-md fw-semibold text-title">
                  <bdi>
                    4.9
                  </bdi>
                </span>
              </span>
            </div>
            <div className="border-t-soft d-flex flex-wrap align-items-center gap-3 mt-3 pt-3">
              <span className="d-inline-flex align-items-center gap-2 fs-sm text-primary">
                <i className="icon-16 text-accent" data-lucide="shield-check" aria-hidden="true" />
                SOC 2 Type II
              </span>
              <span className="d-inline-flex align-items-center gap-2 fs-sm text-primary">
                <i className="icon-16 text-accent" data-lucide="lock-keyhole" aria-hidden="true" />
                Encrypted at rest
              </span>
              <span className="d-inline-flex align-items-center gap-2 fs-sm text-primary">
                <i className="icon-16 text-accent" data-lucide="key-round" aria-hidden="true" />
                {"SSO & SCIM"}
              </span>
            </div>
          </div>
        </aside>
      </div>
      {/* Scripts (design-system plumbing only — no app logic) */}
      {" "}
      {/* Vendor */}
      {" "}
      {" "}
      {" "}
      {" "}
      {/* App: shared dashboard interaction layer (jQuery) */}
      {" "}
      <VendorScripts scripts={scripts} />
    </>
  );
}

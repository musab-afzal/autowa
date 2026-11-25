/* Generated from the Vionex HTML theme by scripts/convert-html.mjs */
import AppShell from "@/components/AppShell";

export const metadata = {
  title: "Vionex — FAQ",
  description: "Vionex enterprise admin dashboard — help centre FAQ with searchable answers by topic, popular guides and support contacts, built with Bootstrap 5, CSS variables and a scalable design system.",
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
          FAQ
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
              FAQ
            </li>
          </ol>
        </nav>
      </div>
      {/* ===== Help centre ===== */}
      <section className="mb-4" aria-labelledby="faqTitle" data-search-scope="">
        {/* Hero — search & popular topics */}
        <div className="on-dark bg-grad-theme overflow-hidden p-3 p-md-4 p-xl-5 rounded-4 mb-4">
          <div className="row g-4 align-items-center">
            <div className="col-12 col-lg-8">
              <span className="badge-soft d-inline-flex align-items-center gap-2 mb-3">
                {" "}
                <i className="icon-14" data-lucide="life-buoy" aria-hidden="true" />
                Vionex Help Centre
                {" "}
              </span>
              <h2 id="faqTitle" className="fs-2 fw-bold text-title mb-2">
                How can we help you today?
              </h2>
              <p className="fs-lg text-primary mb-3">
                Search the questions our team answers most, or browse them by topic. Every answer is reviewed with each release, so what you read here matches what you see in the product.
              </p>
              <label htmlFor="faqSearch" className="visually-hidden">
                Search the help centre
              </label>
              <div className="field-icon mb-3" role="search">
                <i className="icon-18" data-lucide="search" aria-hidden="true" />
                {" "}
                <input
                  type="search"
                  className="form-control py-3 rounded-pill"
                  id="faqSearch"
                  name="faqSearch"
                  placeholder="Search billing, security, models…"
                  data-search-input=""
                />
              </div>
              <ul className="list-unstyled d-flex flex-wrap align-items-center gap-2 mb-0">
                <li className="fs-sm text-primary">
                  Popular:
                </li>
                <li>
                  <button type="button" className="btn btn-accent-ghost btn-sm px-3 py-1" data-search-term="billing">
                    Billing
                  </button>
                </li>
                <li>
                  <button type="button" className="btn btn-accent-ghost btn-sm px-3 py-1" data-search-term="SSO">
                    SSO
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="btn btn-accent-ghost btn-sm px-3 py-1"
                    data-search-term="fine-tuning"
                  >
                    Fine-tuning
                  </button>
                </li>
                <li>
                  <button type="button" className="btn btn-accent-ghost btn-sm px-3 py-1" data-search-term="export">
                    Export
                  </button>
                </li>
                <li>
                  <button type="button" className="btn btn-accent-ghost btn-sm px-3 py-1" data-search-term="2FA">
                    2FA
                  </button>
                </li>
                <li>
                  <button type="button" className="btn btn-accent-ghost btn-sm px-3 py-1" data-search-term="API">
                    API
                  </button>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 d-none d-lg-flex justify-content-center">
              <img src="/assets/images/shield-art.svg" alt="" width="150" height="176" className="img-fluid float-y" />
            </div>
          </div>
        </div>
        {/* Result count & topic filter */}
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
          <div className="d-flex flex-wrap align-items-center gap-2">
            <p className="fs-md text-muted-2 mb-0" aria-live="polite">
              Showing
              {" "}
              <bdi className="fw-semibold text-title" data-search-count="">
                16
              </bdi>
              {" "}of{" "}
              <bdi data-search-total="">
                16
              </bdi>
              {" "}
              questions
            </p>
            <span
              className="badge-soft tint-primary d-none d-inline-flex align-items-center gap-2"
              data-search-active=""
            >
              {" "}
              <i className="icon-12" data-lucide="search" aria-hidden="true" />
              {" "}
              <bdi data-search-query="" />
              {" "}
              <button
                type="button"
                className="btn btn-ghost btn-sm d-inline-flex p-0 lh-1 text-reset"
                data-search-clear=""
                aria-label="Clear search"
              >
                <i className="icon-14" data-lucide="x" aria-hidden="true" />
              </button>
              {" "}
            </span>
          </div>
          <div
            className="nav nav-pills seg-toggle d-inline-flex flex-nowrap gap-1 p-1 mw-100 rounded-pill bg-soft overflow-x-auto scrollbar-none"
            role="group"
            aria-label="Filter questions by topic"
          >
            <button
              type="button"
              className="nav-link active fw-semibold text-nowrap"
              data-filter="all"
              aria-pressed="true"
            >
              All
            </button>
            <button type="button" className="nav-link fw-semibold text-nowrap" data-filter="start" aria-pressed="false">
              Getting started
            </button>
            <button
              type="button"
              className="nav-link fw-semibold text-nowrap"
              data-filter="billing"
              aria-pressed="false"
            >
              Billing
            </button>
            <button
              type="button"
              className="nav-link fw-semibold text-nowrap"
              data-filter="security"
              aria-pressed="false"
            >
              Security
            </button>
            <button
              type="button"
              className="nav-link fw-semibold text-nowrap"
              data-filter="models"
              aria-pressed="false"
            >
              {"AI & models"}
            </button>
            <button type="button" className="nav-link fw-semibold text-nowrap" data-filter="data" aria-pressed="false">
              {"Data & privacy"}
            </button>
            <button type="button" className="nav-link fw-semibold text-nowrap" data-filter="api" aria-pressed="false">
              API
            </button>
          </div>
        </div>
        <div className="row g-3">
          {/* Questions */}
          <div className="col-12 col-xl-8">
            <ul className="list-unstyled d-flex flex-column gap-2 mb-0" id="faqList">
              <li className="bg-plain border-theme rounded-3 overflow-hidden" data-filter-tags="start">
                <h3 className="fs-md mb-0">
                  <button
                    type="button"
                    className="tile-plain d-flex align-items-center gap-3 w-100 px-3 py-3 border-0 text-start transition-base"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqA1"
                    aria-expanded="true"
                    aria-controls="faqA1"
                  >
                    <span className="icon-box icon-box-sm tint-violet" aria-hidden="true">
                      <i data-lucide="rocket" />
                    </span>
                    <span className="flex-grow-1 fs-md fw-semibold text-title">
                      How do I set up my first Vionex workspace?
                    </span>
                    <span className="badge-soft tint-violet d-none d-md-inline-block text-nowrap">
                      Getting started
                    </span>
                    <i
                      className="dd-caret icon-18 flex-shrink-0 text-muted-2"
                      data-lucide="chevron-down"
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div className="collapse show" id="faqA1" data-bs-parent="#faqList">
                  <div className="px-3 pb-3">
                    <p className="fs-md text-body-2 mb-3">
                      Pick a workspace name, choose the region your data should live in and invite the people you work with — the whole thing takes about three minutes. Vionex then seeds a starter dashboard so you have something live to look at before you connect a single source.
                    </p>
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 pt-3 border-t-soft">
                      <a href="#" className="d-inline-flex align-items-center gap-1 fs-md fw-medium text-brand">
                        Read the setup guide
                        <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                      </a>
                      <span className="d-flex align-items-center gap-2" data-vote-group="">
                        <span className="d-inline-flex align-items-center gap-2" data-vote-ask="">
                          <span className="fs-sm text-muted-2">
                            Was this helpful?
                          </span>
                          <button
                            type="button"
                            className="btn btn-outline-soft btn-sm d-inline-flex align-items-center gap-1 px-3 py-1"
                            data-vote="up"
                            aria-label="Yes, this answer was helpful"
                          >
                            <i className="icon-14" data-lucide="thumbs-up" aria-hidden="true" />
                            Yes
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-soft btn-sm d-inline-flex align-items-center gap-1 px-3 py-1"
                            data-vote="down"
                            aria-label="No, this answer was not helpful"
                          >
                            <i className="icon-14" data-lucide="thumbs-down" aria-hidden="true" />
                            No
                          </button>
                        </span>
                        <span
                          className="badge-soft tint-success d-none d-inline-flex align-items-center gap-1"
                          data-vote-thanks=""
                        >
                          <i className="icon-12" data-lucide="check" aria-hidden="true" />
                          Thanks for the feedback
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="bg-plain border-theme rounded-3 overflow-hidden" data-filter-tags="start">
                <h3 className="fs-md mb-0">
                  <button
                    type="button"
                    className="tile-plain d-flex align-items-center gap-3 w-100 px-3 py-3 border-0 text-start transition-base"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqA2"
                    aria-expanded="false"
                    aria-controls="faqA2"
                  >
                    <span className="icon-box icon-box-sm tint-violet" aria-hidden="true">
                      <i data-lucide="folder-sync" />
                    </span>
                    <span className="flex-grow-1 fs-md fw-semibold text-title">
                      Can I bring across the data I already have?
                    </span>
                    <span className="badge-soft tint-violet d-none d-md-inline-block text-nowrap">
                      Getting started
                    </span>
                    <i
                      className="dd-caret icon-18 flex-shrink-0 text-muted-2"
                      data-lucide="chevron-down"
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div className="collapse" id="faqA2" data-bs-parent="#faqList">
                  <div className="px-3 pb-3">
                    <p className="fs-md text-body-2 mb-3">
                      Yes. Vionex ships managed connectors for Postgres, BigQuery, Snowflake, S3 and plain CSV upload, and anything you build on top of them stays in sync. Boards you already maintain in Metabase, Looker or Tableau can be brought over as editable templates from Settings → Import.
                    </p>
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 pt-3 border-t-soft">
                      <a href="#" className="d-inline-flex align-items-center gap-1 fs-md fw-medium text-brand">
                        Browse all connectors
                        <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                      </a>
                      <span className="d-flex align-items-center gap-2" data-vote-group="">
                        <span className="d-inline-flex align-items-center gap-2" data-vote-ask="">
                          <span className="fs-sm text-muted-2">
                            Was this helpful?
                          </span>
                          <button
                            type="button"
                            className="btn btn-outline-soft btn-sm d-inline-flex align-items-center gap-1 px-3 py-1"
                            data-vote="up"
                            aria-label="Yes, this answer was helpful"
                          >
                            <i className="icon-14" data-lucide="thumbs-up" aria-hidden="true" />
                            Yes
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-soft btn-sm d-inline-flex align-items-center gap-1 px-3 py-1"
                            data-vote="down"
                            aria-label="No, this answer was not helpful"
                          >
                            <i className="icon-14" data-lucide="thumbs-down" aria-hidden="true" />
                            No
                          </button>
                        </span>
                        <span
                          className="badge-soft tint-success d-none d-inline-flex align-items-center gap-1"
                          data-vote-thanks=""
                        >
                          <i className="icon-12" data-lucide="check" aria-hidden="true" />
                          Thanks for the feedback
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="bg-plain border-theme rounded-3 overflow-hidden" data-filter-tags="start">
                <h3 className="fs-md mb-0">
                  <button
                    type="button"
                    className="tile-plain d-flex align-items-center gap-3 w-100 px-3 py-3 border-0 text-start transition-base"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqA3"
                    aria-expanded="false"
                    aria-controls="faqA3"
                  >
                    <span className="icon-box icon-box-sm tint-violet" aria-hidden="true">
                      <i data-lucide="users-round" />
                    </span>
                    <span className="flex-grow-1 fs-md fw-semibold text-title">
                      How do I invite teammates and set their roles?
                    </span>
                    <span className="badge-soft tint-violet d-none d-md-inline-block text-nowrap">
                      Getting started
                    </span>
                    <i
                      className="dd-caret icon-18 flex-shrink-0 text-muted-2"
                      data-lucide="chevron-down"
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div className="collapse" id="faqA3" data-bs-parent="#faqList">
                  <div className="px-3 pb-3">
                    <p className="fs-md text-body-2 mb-3">
                      Open Settings → Members, paste in a list of email addresses and pick a role: Viewer, Editor, Analyst or Owner. Roles are granted per workspace, so the same person can be an Editor on one project and a Viewer on another without holding two accounts.
                    </p>
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 pt-3 border-t-soft">
                      <a
                        href="/user-profile"
                        className="d-inline-flex align-items-center gap-1 fs-md fw-medium text-brand"
                      >
                        Compare the four roles
                        <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                      </a>
                      <span className="d-flex align-items-center gap-2" data-vote-group="">
                        <span className="d-inline-flex align-items-center gap-2" data-vote-ask="">
                          <span className="fs-sm text-muted-2">
                            Was this helpful?
                          </span>
                          <button
                            type="button"
                            className="btn btn-outline-soft btn-sm d-inline-flex align-items-center gap-1 px-3 py-1"
                            data-vote="up"
                            aria-label="Yes, this answer was helpful"
                          >
                            <i className="icon-14" data-lucide="thumbs-up" aria-hidden="true" />
                            Yes
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-soft btn-sm d-inline-flex align-items-center gap-1 px-3 py-1"
                            data-vote="down"
                            aria-label="No, this answer was not helpful"
                          >
                            <i className="icon-14" data-lucide="thumbs-down" aria-hidden="true" />
                            No
                          </button>
                        </span>
                        <span
                          className="badge-soft tint-success d-none d-inline-flex align-items-center gap-1"
                          data-vote-thanks=""
                        >
                          <i className="icon-12" data-lucide="check" aria-hidden="true" />
                          Thanks for the feedback
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="bg-plain border-theme rounded-3 overflow-hidden" data-filter-tags="billing">
                <h3 className="fs-md mb-0">
                  <button
                    type="button"
                    className="tile-plain d-flex align-items-center gap-3 w-100 px-3 py-3 border-0 text-start transition-base"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqA4"
                    aria-expanded="false"
                    aria-controls="faqA4"
                  >
                    <span className="icon-box icon-box-sm tint-amber" aria-hidden="true">
                      <i data-lucide="credit-card" />
                    </span>
                    <span className="flex-grow-1 fs-md fw-semibold text-title">
                      How does per-seat billing work?
                    </span>
                    <span className="badge-soft tint-amber d-none d-md-inline-block text-nowrap">
                      Billing
                    </span>
                    <i
                      className="dd-caret icon-18 flex-shrink-0 text-muted-2"
                      data-lucide="chevron-down"
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div className="collapse" id="faqA4" data-bs-parent="#faqList">
                  <div className="px-3 pb-3">
                    <p className="fs-md text-body-2 mb-3">
                      You are billed for the seats you have filled, not the seats you reserved. Adding someone part-way through a cycle is charged pro rata for the days that remain; removing someone frees the seat straight away and credits the balance against your next invoice.
                    </p>
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 pt-3 border-t-soft">
                      <a href="/pricing" className="d-inline-flex align-items-center gap-1 fs-md fw-medium text-brand">
                        See all plans
                        <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                      </a>
                      <span className="d-flex align-items-center gap-2" data-vote-group="">
                        <span className="d-inline-flex align-items-center gap-2" data-vote-ask="">
                          <span className="fs-sm text-muted-2">
                            Was this helpful?
                          </span>
                          <button
                            type="button"
                            className="btn btn-outline-soft btn-sm d-inline-flex align-items-center gap-1 px-3 py-1"
                            data-vote="up"
                            aria-label="Yes, this answer was helpful"
                          >
                            <i className="icon-14" data-lucide="thumbs-up" aria-hidden="true" />
                            Yes
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-soft btn-sm d-inline-flex align-items-center gap-1 px-3 py-1"
                            data-vote="down"
                            aria-label="No, this answer was not helpful"
                          >
                            <i className="icon-14" data-lucide="thumbs-down" aria-hidden="true" />
                            No
                          </button>
                        </span>
                        <span
                          className="badge-soft tint-success d-none d-inline-flex align-items-center gap-1"
                          data-vote-thanks=""
                        >
                          <i className="icon-12" data-lucide="check" aria-hidden="true" />
                          Thanks for the feedback
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="bg-plain border-theme rounded-3 overflow-hidden" data-filter-tags="billing">
                <h3 className="fs-md mb-0">
                  <button
                    type="button"
                    className="tile-plain d-flex align-items-center gap-3 w-100 px-3 py-3 border-0 text-start transition-base"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqA5"
                    aria-expanded="false"
                    aria-controls="faqA5"
                  >
                    <span className="icon-box icon-box-sm tint-amber" aria-hidden="true">
                      <i data-lucide="cpu" />
                    </span>
                    <span className="flex-grow-1 fs-md fw-semibold text-title">
                      What happens if I run out of GPU hours mid-month?
                    </span>
                    <span className="badge-soft tint-amber d-none d-md-inline-block text-nowrap">
                      Billing
                    </span>
                    <i
                      className="dd-caret icon-18 flex-shrink-0 text-muted-2"
                      data-lucide="chevron-down"
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div className="collapse" id="faqA5" data-bs-parent="#faqList">
                  <div className="px-3 pb-3">
                    <p className="fs-md text-body-2 mb-3">
                      Nothing stops working. We alert the workspace owners at
                      {" "}
                      <bdi>
                        80%
                      </bdi>
                      {" "}and again at{" "}
                      <bdi>
                        100%
                      </bdi>
                      , then meter any overage at the published add-on rate up to the budget cap you set in billing settings. Raise the cap at any time, or let runs queue until the next cycle begins.
                    </p>
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 pt-3 border-t-soft">
                      <a href="/pricing" className="d-inline-flex align-items-center gap-1 fs-md fw-medium text-brand">
                        See add-on rates
                        <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                      </a>
                      <span className="d-flex align-items-center gap-2" data-vote-group="">
                        <span className="d-inline-flex align-items-center gap-2" data-vote-ask="">
                          <span className="fs-sm text-muted-2">
                            Was this helpful?
                          </span>
                          <button
                            type="button"
                            className="btn btn-outline-soft btn-sm d-inline-flex align-items-center gap-1 px-3 py-1"
                            data-vote="up"
                            aria-label="Yes, this answer was helpful"
                          >
                            <i className="icon-14" data-lucide="thumbs-up" aria-hidden="true" />
                            Yes
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-soft btn-sm d-inline-flex align-items-center gap-1 px-3 py-1"
                            data-vote="down"
                            aria-label="No, this answer was not helpful"
                          >
                            <i className="icon-14" data-lucide="thumbs-down" aria-hidden="true" />
                            No
                          </button>
                        </span>
                        <span
                          className="badge-soft tint-success d-none d-inline-flex align-items-center gap-1"
                          data-vote-thanks=""
                        >
                          <i className="icon-12" data-lucide="check" aria-hidden="true" />
                          Thanks for the feedback
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="bg-plain border-theme rounded-3 overflow-hidden" data-filter-tags="billing">
                <h3 className="fs-md mb-0">
                  <button
                    type="button"
                    className="tile-plain d-flex align-items-center gap-3 w-100 px-3 py-3 border-0 text-start transition-base"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqA6"
                    aria-expanded="false"
                    aria-controls="faqA6"
                  >
                    <span className="icon-box icon-box-sm tint-amber" aria-hidden="true">
                      <i data-lucide="receipt" />
                    </span>
                    <span className="flex-grow-1 fs-md fw-semibold text-title">
                      Can I get a tax invoice for my company?
                    </span>
                    <span className="badge-soft tint-amber d-none d-md-inline-block text-nowrap">
                      Billing
                    </span>
                    <i
                      className="dd-caret icon-18 flex-shrink-0 text-muted-2"
                      data-lucide="chevron-down"
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div className="collapse" id="faqA6" data-bs-parent="#faqList">
                  <div className="px-3 pb-3">
                    <p className="fs-md text-body-2 mb-3">
                      Every payment generates a tax invoice carrying your company name, billing address and registration number. They are all filed under Billing history, and your finance team can have each one emailed to them automatically as the cycle closes.
                    </p>
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 pt-3 border-t-soft">
                      <a
                        href="/invoice-list"
                        className="d-inline-flex align-items-center gap-1 fs-md fw-medium text-brand"
                      >
                        Open billing history
                        <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                      </a>
                      <span className="d-flex align-items-center gap-2" data-vote-group="">
                        <span className="d-inline-flex align-items-center gap-2" data-vote-ask="">
                          <span className="fs-sm text-muted-2">
                            Was this helpful?
                          </span>
                          <button
                            type="button"
                            className="btn btn-outline-soft btn-sm d-inline-flex align-items-center gap-1 px-3 py-1"
                            data-vote="up"
                            aria-label="Yes, this answer was helpful"
                          >
                            <i className="icon-14" data-lucide="thumbs-up" aria-hidden="true" />
                            Yes
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-soft btn-sm d-inline-flex align-items-center gap-1 px-3 py-1"
                            data-vote="down"
                            aria-label="No, this answer was not helpful"
                          >
                            <i className="icon-14" data-lucide="thumbs-down" aria-hidden="true" />
                            No
                          </button>
                        </span>
                        <span
                          className="badge-soft tint-success d-none d-inline-flex align-items-center gap-1"
                          data-vote-thanks=""
                        >
                          <i className="icon-12" data-lucide="check" aria-hidden="true" />
                          Thanks for the feedback
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="bg-plain border-theme rounded-3 overflow-hidden" data-filter-tags="security">
                <h3 className="fs-md mb-0">
                  <button
                    type="button"
                    className="tile-plain d-flex align-items-center gap-3 w-100 px-3 py-3 border-0 text-start transition-base"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqA7"
                    aria-expanded="false"
                    aria-controls="faqA7"
                  >
                    <span className="icon-box icon-box-sm tint-blue" aria-hidden="true">
                      <i data-lucide="scan-face" />
                    </span>
                    <span className="flex-grow-1 fs-md fw-semibold text-title">
                      How do I turn on two-factor authentication?
                    </span>
                    <span className="badge-soft tint-blue d-none d-md-inline-block text-nowrap">
                      Security
                    </span>
                    <i
                      className="dd-caret icon-18 flex-shrink-0 text-muted-2"
                      data-lucide="chevron-down"
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div className="collapse" id="faqA7" data-bs-parent="#faqList">
                  <div className="px-3 pb-3">
                    <p className="fs-md text-body-2 mb-3">
                      Go to Settings → Security and pair an authenticator app or a hardware key. Workspace owners can also make two-factor authentication (2FA) mandatory, which prompts every member to enrol the next time they sign in.
                    </p>
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 pt-3 border-t-soft">
                      <a href="/settings" className="d-inline-flex align-items-center gap-1 fs-md fw-medium text-brand">
                        Open security settings
                        <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                      </a>
                      <span className="d-flex align-items-center gap-2" data-vote-group="">
                        <span className="d-inline-flex align-items-center gap-2" data-vote-ask="">
                          <span className="fs-sm text-muted-2">
                            Was this helpful?
                          </span>
                          <button
                            type="button"
                            className="btn btn-outline-soft btn-sm d-inline-flex align-items-center gap-1 px-3 py-1"
                            data-vote="up"
                            aria-label="Yes, this answer was helpful"
                          >
                            <i className="icon-14" data-lucide="thumbs-up" aria-hidden="true" />
                            Yes
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-soft btn-sm d-inline-flex align-items-center gap-1 px-3 py-1"
                            data-vote="down"
                            aria-label="No, this answer was not helpful"
                          >
                            <i className="icon-14" data-lucide="thumbs-down" aria-hidden="true" />
                            No
                          </button>
                        </span>
                        <span
                          className="badge-soft tint-success d-none d-inline-flex align-items-center gap-1"
                          data-vote-thanks=""
                        >
                          <i className="icon-12" data-lucide="check" aria-hidden="true" />
                          Thanks for the feedback
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="bg-plain border-theme rounded-3 overflow-hidden" data-filter-tags="security">
                <h3 className="fs-md mb-0">
                  <button
                    type="button"
                    className="tile-plain d-flex align-items-center gap-3 w-100 px-3 py-3 border-0 text-start transition-base"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqA8"
                    aria-expanded="false"
                    aria-controls="faqA8"
                  >
                    <span className="icon-box icon-box-sm tint-blue" aria-hidden="true">
                      <i data-lucide="key-round" />
                    </span>
                    <span className="flex-grow-1 fs-md fw-semibold text-title">
                      I have lost my authenticator device. How do I get back in?
                    </span>
                    <span className="badge-soft tint-blue d-none d-md-inline-block text-nowrap">
                      Security
                    </span>
                    <i
                      className="dd-caret icon-18 flex-shrink-0 text-muted-2"
                      data-lucide="chevron-down"
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div className="collapse" id="faqA8" data-bs-parent="#faqList">
                  <div className="px-3 pb-3">
                    <p className="fs-md text-body-2 mb-3">
                      Use one of the
                      {" "}
                      <bdi>
                        10
                      </bdi>
                      {" "}
                      recovery codes issued when you enrolled. If those are gone as well, any workspace owner can reset your second factor from Settings → Members — and for a solo account our support team will verify you over email and a short video call.
                    </p>
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 pt-3 border-t-soft">
                      <a
                        href="/help-desk"
                        className="d-inline-flex align-items-center gap-1 fs-md fw-medium text-brand"
                      >
                        Contact support
                        <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                      </a>
                      <span className="d-flex align-items-center gap-2" data-vote-group="">
                        <span className="d-inline-flex align-items-center gap-2" data-vote-ask="">
                          <span className="fs-sm text-muted-2">
                            Was this helpful?
                          </span>
                          <button
                            type="button"
                            className="btn btn-outline-soft btn-sm d-inline-flex align-items-center gap-1 px-3 py-1"
                            data-vote="up"
                            aria-label="Yes, this answer was helpful"
                          >
                            <i className="icon-14" data-lucide="thumbs-up" aria-hidden="true" />
                            Yes
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-soft btn-sm d-inline-flex align-items-center gap-1 px-3 py-1"
                            data-vote="down"
                            aria-label="No, this answer was not helpful"
                          >
                            <i className="icon-14" data-lucide="thumbs-down" aria-hidden="true" />
                            No
                          </button>
                        </span>
                        <span
                          className="badge-soft tint-success d-none d-inline-flex align-items-center gap-1"
                          data-vote-thanks=""
                        >
                          <i className="icon-12" data-lucide="check" aria-hidden="true" />
                          Thanks for the feedback
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="bg-plain border-theme rounded-3 overflow-hidden" data-filter-tags="security">
                <h3 className="fs-md mb-0">
                  <button
                    type="button"
                    className="tile-plain d-flex align-items-center gap-3 w-100 px-3 py-3 border-0 text-start transition-base"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqA9"
                    aria-expanded="false"
                    aria-controls="faqA9"
                  >
                    <span className="icon-box icon-box-sm tint-blue" aria-hidden="true">
                      <i data-lucide="shield-check" />
                    </span>
                    <span className="flex-grow-1 fs-md fw-semibold text-title">
                      Do you support SSO with SAML or OIDC?
                    </span>
                    <span className="badge-soft tint-blue d-none d-md-inline-block text-nowrap">
                      Security
                    </span>
                    <i
                      className="dd-caret icon-18 flex-shrink-0 text-muted-2"
                      data-lucide="chevron-down"
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div className="collapse" id="faqA9" data-bs-parent="#faqList">
                  <div className="px-3 pb-3">
                    <p className="fs-md text-body-2 mb-3">
                      SSO ships with the Business and Enterprise plans and works with Okta, Entra ID, Google Workspace and any
                      {" "}
                      <bdi>
                        SAML 2.0
                      </bdi>
                      {" "}
                      or OIDC provider. SCIM provisioning keeps your directory and your member list in step, so leavers lose access the moment HR removes them.
                    </p>
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 pt-3 border-t-soft">
                      <a href="/pricing" className="d-inline-flex align-items-center gap-1 fs-md fw-medium text-brand">
                        See plans with SSO
                        <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                      </a>
                      <span className="d-flex align-items-center gap-2" data-vote-group="">
                        <span className="d-inline-flex align-items-center gap-2" data-vote-ask="">
                          <span className="fs-sm text-muted-2">
                            Was this helpful?
                          </span>
                          <button
                            type="button"
                            className="btn btn-outline-soft btn-sm d-inline-flex align-items-center gap-1 px-3 py-1"
                            data-vote="up"
                            aria-label="Yes, this answer was helpful"
                          >
                            <i className="icon-14" data-lucide="thumbs-up" aria-hidden="true" />
                            Yes
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-soft btn-sm d-inline-flex align-items-center gap-1 px-3 py-1"
                            data-vote="down"
                            aria-label="No, this answer was not helpful"
                          >
                            <i className="icon-14" data-lucide="thumbs-down" aria-hidden="true" />
                            No
                          </button>
                        </span>
                        <span
                          className="badge-soft tint-success d-none d-inline-flex align-items-center gap-1"
                          data-vote-thanks=""
                        >
                          <i className="icon-12" data-lucide="check" aria-hidden="true" />
                          Thanks for the feedback
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="bg-plain border-theme rounded-3 overflow-hidden" data-filter-tags="models">
                <h3 className="fs-md mb-0">
                  <button
                    type="button"
                    className="tile-plain d-flex align-items-center gap-3 w-100 px-3 py-3 border-0 text-start transition-base"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqA10"
                    aria-expanded="false"
                    aria-controls="faqA10"
                  >
                    <span className="icon-box icon-box-sm tint-brand" aria-hidden="true">
                      <i data-lucide="brain-circuit" />
                    </span>
                    <span className="flex-grow-1 fs-md fw-semibold text-title">
                      Which models can I fine-tune on Vionex?
                    </span>
                    <span className="badge-soft tint-brand d-none d-md-inline-block text-nowrap">
                      {"AI & models"}
                    </span>
                    <i
                      className="dd-caret icon-18 flex-shrink-0 text-muted-2"
                      data-lucide="chevron-down"
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div className="collapse" id="faqA10" data-bs-parent="#faqList">
                  <div className="px-3 pb-3">
                    <p className="fs-md text-body-2 mb-3">
                      Fine-tuning is available for every open-weight family we host — Llama, Mistral, Qwen and Gemma — plus any checkpoint you upload yourself. Hosted third-party models can be prompt-tuned and evaluated side by side, but not retrained.
                    </p>
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 pt-3 border-t-soft">
                      <a href="/" className="d-inline-flex align-items-center gap-1 fs-md fw-medium text-brand">
                        Open the model catalogue
                        <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                      </a>
                      <span className="d-flex align-items-center gap-2" data-vote-group="">
                        <span className="d-inline-flex align-items-center gap-2" data-vote-ask="">
                          <span className="fs-sm text-muted-2">
                            Was this helpful?
                          </span>
                          <button
                            type="button"
                            className="btn btn-outline-soft btn-sm d-inline-flex align-items-center gap-1 px-3 py-1"
                            data-vote="up"
                            aria-label="Yes, this answer was helpful"
                          >
                            <i className="icon-14" data-lucide="thumbs-up" aria-hidden="true" />
                            Yes
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-soft btn-sm d-inline-flex align-items-center gap-1 px-3 py-1"
                            data-vote="down"
                            aria-label="No, this answer was not helpful"
                          >
                            <i className="icon-14" data-lucide="thumbs-down" aria-hidden="true" />
                            No
                          </button>
                        </span>
                        <span
                          className="badge-soft tint-success d-none d-inline-flex align-items-center gap-1"
                          data-vote-thanks=""
                        >
                          <i className="icon-12" data-lucide="check" aria-hidden="true" />
                          Thanks for the feedback
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="bg-plain border-theme rounded-3 overflow-hidden" data-filter-tags="models">
                <h3 className="fs-md mb-0">
                  <button
                    type="button"
                    className="tile-plain d-flex align-items-center gap-3 w-100 px-3 py-3 border-0 text-start transition-base"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqA11"
                    aria-expanded="false"
                    aria-controls="faqA11"
                  >
                    <span className="icon-box icon-box-sm tint-brand" aria-hidden="true">
                      <i data-lucide="timer" />
                    </span>
                    <span className="flex-grow-1 fs-md fw-semibold text-title">
                      How long does a fine-tuning run usually take?
                    </span>
                    <span className="badge-soft tint-brand d-none d-md-inline-block text-nowrap">
                      {"AI & models"}
                    </span>
                    <i
                      className="dd-caret icon-18 flex-shrink-0 text-muted-2"
                      data-lucide="chevron-down"
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div className="collapse" id="faqA11" data-bs-parent="#faqList">
                  <div className="px-3 pb-3">
                    <p className="fs-md text-body-2 mb-3">
                      A LoRA run over a few thousand examples finishes inside an hour on a single GPU. Full-parameter runs on larger datasets take
                      {" "}
                      <bdi>
                        4
                      </bdi>
                      {" "}to{" "}
                      <bdi>
                        12
                      </bdi>
                      {" "}
                      hours, and the run page streams loss curves with a live estimate while it works.
                    </p>
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 pt-3 border-t-soft">
                      <a
                        href="/analytics-dashboard"
                        className="d-inline-flex align-items-center gap-1 fs-md fw-medium text-brand"
                      >
                        See a sample run
                        <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                      </a>
                      <span className="d-flex align-items-center gap-2" data-vote-group="">
                        <span className="d-inline-flex align-items-center gap-2" data-vote-ask="">
                          <span className="fs-sm text-muted-2">
                            Was this helpful?
                          </span>
                          <button
                            type="button"
                            className="btn btn-outline-soft btn-sm d-inline-flex align-items-center gap-1 px-3 py-1"
                            data-vote="up"
                            aria-label="Yes, this answer was helpful"
                          >
                            <i className="icon-14" data-lucide="thumbs-up" aria-hidden="true" />
                            Yes
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-soft btn-sm d-inline-flex align-items-center gap-1 px-3 py-1"
                            data-vote="down"
                            aria-label="No, this answer was not helpful"
                          >
                            <i className="icon-14" data-lucide="thumbs-down" aria-hidden="true" />
                            No
                          </button>
                        </span>
                        <span
                          className="badge-soft tint-success d-none d-inline-flex align-items-center gap-1"
                          data-vote-thanks=""
                        >
                          <i className="icon-12" data-lucide="check" aria-hidden="true" />
                          Thanks for the feedback
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="bg-plain border-theme rounded-3 overflow-hidden" data-filter-tags="models data">
                <h3 className="fs-md mb-0">
                  <button
                    type="button"
                    className="tile-plain d-flex align-items-center gap-3 w-100 px-3 py-3 border-0 text-start transition-base"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqA12"
                    aria-expanded="false"
                    aria-controls="faqA12"
                  >
                    <span className="icon-box icon-box-sm tint-emerald" aria-hidden="true">
                      <i data-lucide="lock" />
                    </span>
                    <span className="flex-grow-1 fs-md fw-semibold text-title">
                      Do you train on the data I upload?
                    </span>
                    <span className="badge-soft tint-emerald d-none d-md-inline-block text-nowrap">
                      {"Data & privacy"}
                    </span>
                    <i
                      className="dd-caret icon-18 flex-shrink-0 text-muted-2"
                      data-lucide="chevron-down"
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div className="collapse" id="faqA12" data-bs-parent="#faqList">
                  <div className="px-3 pb-3">
                    <p className="fs-md text-body-2 mb-3">
                      No. Your prompts, datasets and model outputs are never used to train shared models and are never visible to another workspace. Anything you fine-tune stays private to the workspace that created it, and you can delete both the weights and the training data at any point.
                    </p>
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 pt-3 border-t-soft">
                      <a href="#" className="d-inline-flex align-items-center gap-1 fs-md fw-medium text-brand">
                        Read the privacy policy
                        <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                      </a>
                      <span className="d-flex align-items-center gap-2" data-vote-group="">
                        <span className="d-inline-flex align-items-center gap-2" data-vote-ask="">
                          <span className="fs-sm text-muted-2">
                            Was this helpful?
                          </span>
                          <button
                            type="button"
                            className="btn btn-outline-soft btn-sm d-inline-flex align-items-center gap-1 px-3 py-1"
                            data-vote="up"
                            aria-label="Yes, this answer was helpful"
                          >
                            <i className="icon-14" data-lucide="thumbs-up" aria-hidden="true" />
                            Yes
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-soft btn-sm d-inline-flex align-items-center gap-1 px-3 py-1"
                            data-vote="down"
                            aria-label="No, this answer was not helpful"
                          >
                            <i className="icon-14" data-lucide="thumbs-down" aria-hidden="true" />
                            No
                          </button>
                        </span>
                        <span
                          className="badge-soft tint-success d-none d-inline-flex align-items-center gap-1"
                          data-vote-thanks=""
                        >
                          <i className="icon-12" data-lucide="check" aria-hidden="true" />
                          Thanks for the feedback
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="bg-plain border-theme rounded-3 overflow-hidden" data-filter-tags="data">
                <h3 className="fs-md mb-0">
                  <button
                    type="button"
                    className="tile-plain d-flex align-items-center gap-3 w-100 px-3 py-3 border-0 text-start transition-base"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqA13"
                    aria-expanded="false"
                    aria-controls="faqA13"
                  >
                    <span className="icon-box icon-box-sm tint-emerald" aria-hidden="true">
                      <i data-lucide="database" />
                    </span>
                    <span className="flex-grow-1 fs-md fw-semibold text-title">
                      Where is my data stored, and how long do you keep it?
                    </span>
                    <span className="badge-soft tint-emerald d-none d-md-inline-block text-nowrap">
                      {"Data & privacy"}
                    </span>
                    <i
                      className="dd-caret icon-18 flex-shrink-0 text-muted-2"
                      data-lucide="chevron-down"
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div className="collapse" id="faqA13" data-bs-parent="#faqList">
                  <div className="px-3 pb-3">
                    <p className="fs-md text-body-2 mb-3">
                      You choose a region when the workspace is created — Mumbai, Frankfurt, London or Virginia — and everything stays there, encrypted at rest with
                      {" "}
                      <bdi>
                        AES-256
                      </bdi>
                      . Deleted records leave live systems immediately and drop out of backups within
                      {" "}
                      <bdi>
                        30
                      </bdi>
                      {" "}
                      days.
                    </p>
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 pt-3 border-t-soft">
                      <a href="#" className="d-inline-flex align-items-center gap-1 fs-md fw-medium text-brand">
                        See the security overview
                        <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                      </a>
                      <span className="d-flex align-items-center gap-2" data-vote-group="">
                        <span className="d-inline-flex align-items-center gap-2" data-vote-ask="">
                          <span className="fs-sm text-muted-2">
                            Was this helpful?
                          </span>
                          <button
                            type="button"
                            className="btn btn-outline-soft btn-sm d-inline-flex align-items-center gap-1 px-3 py-1"
                            data-vote="up"
                            aria-label="Yes, this answer was helpful"
                          >
                            <i className="icon-14" data-lucide="thumbs-up" aria-hidden="true" />
                            Yes
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-soft btn-sm d-inline-flex align-items-center gap-1 px-3 py-1"
                            data-vote="down"
                            aria-label="No, this answer was not helpful"
                          >
                            <i className="icon-14" data-lucide="thumbs-down" aria-hidden="true" />
                            No
                          </button>
                        </span>
                        <span
                          className="badge-soft tint-success d-none d-inline-flex align-items-center gap-1"
                          data-vote-thanks=""
                        >
                          <i className="icon-12" data-lucide="check" aria-hidden="true" />
                          Thanks for the feedback
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="bg-plain border-theme rounded-3 overflow-hidden" data-filter-tags="data">
                <h3 className="fs-md mb-0">
                  <button
                    type="button"
                    className="tile-plain d-flex align-items-center gap-3 w-100 px-3 py-3 border-0 text-start transition-base"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqA14"
                    aria-expanded="false"
                    aria-controls="faqA14"
                  >
                    <span className="icon-box icon-box-sm tint-emerald" aria-hidden="true">
                      <i data-lucide="download" />
                    </span>
                    <span className="flex-grow-1 fs-md fw-semibold text-title">
                      How do I export or permanently delete my workspace?
                    </span>
                    <span className="badge-soft tint-emerald d-none d-md-inline-block text-nowrap">
                      {"Data & privacy"}
                    </span>
                    <i
                      className="dd-caret icon-18 flex-shrink-0 text-muted-2"
                      data-lucide="chevron-down"
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div className="collapse" id="faqA14" data-bs-parent="#faqList">
                  <div className="px-3 pb-3">
                    <p className="fs-md text-body-2 mb-3">
                      Owners can start a full export from Settings → Data: dashboards, saved queries and raw tables arrive as a signed archive within the hour. Deleting a workspace takes a two-step confirmation and becomes irreversible once the
                      {" "}
                      <bdi>
                        30
                      </bdi>
                      -day grace period ends.
                    </p>
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 pt-3 border-t-soft">
                      <a href="/settings" className="d-inline-flex align-items-center gap-1 fs-md fw-medium text-brand">
                        Open data settings
                        <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                      </a>
                      <span className="d-flex align-items-center gap-2" data-vote-group="">
                        <span className="d-inline-flex align-items-center gap-2" data-vote-ask="">
                          <span className="fs-sm text-muted-2">
                            Was this helpful?
                          </span>
                          <button
                            type="button"
                            className="btn btn-outline-soft btn-sm d-inline-flex align-items-center gap-1 px-3 py-1"
                            data-vote="up"
                            aria-label="Yes, this answer was helpful"
                          >
                            <i className="icon-14" data-lucide="thumbs-up" aria-hidden="true" />
                            Yes
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-soft btn-sm d-inline-flex align-items-center gap-1 px-3 py-1"
                            data-vote="down"
                            aria-label="No, this answer was not helpful"
                          >
                            <i className="icon-14" data-lucide="thumbs-down" aria-hidden="true" />
                            No
                          </button>
                        </span>
                        <span
                          className="badge-soft tint-success d-none d-inline-flex align-items-center gap-1"
                          data-vote-thanks=""
                        >
                          <i className="icon-12" data-lucide="check" aria-hidden="true" />
                          Thanks for the feedback
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="bg-plain border-theme rounded-3 overflow-hidden" data-filter-tags="api">
                <h3 className="fs-md mb-0">
                  <button
                    type="button"
                    className="tile-plain d-flex align-items-center gap-3 w-100 px-3 py-3 border-0 text-start transition-base"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqA15"
                    aria-expanded="false"
                    aria-controls="faqA15"
                  >
                    <span className="icon-box icon-box-sm tint-cyan" aria-hidden="true">
                      <i data-lucide="plug" />
                    </span>
                    <span className="flex-grow-1 fs-md fw-semibold text-title">
                      Which tools does Vionex connect to out of the box?
                    </span>
                    <span className="badge-soft tint-cyan d-none d-md-inline-block text-nowrap">
                      API
                    </span>
                    <i
                      className="dd-caret icon-18 flex-shrink-0 text-muted-2"
                      data-lucide="chevron-down"
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div className="collapse" id="faqA15" data-bs-parent="#faqList">
                  <div className="px-3 pb-3">
                    <p className="fs-md text-body-2 mb-3">
                      Slack, Microsoft Teams, Jira, Linear, PagerDuty, GitHub, Notion and Zapier are all one-click connections, and any of them can receive scheduled reports or alert rules. New connectors ship most months and appear under Settings → Integrations.
                    </p>
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 pt-3 border-t-soft">
                      <a href="/settings" className="d-inline-flex align-items-center gap-1 fs-md fw-medium text-brand">
                        Browse integrations
                        <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                      </a>
                      <span className="d-flex align-items-center gap-2" data-vote-group="">
                        <span className="d-inline-flex align-items-center gap-2" data-vote-ask="">
                          <span className="fs-sm text-muted-2">
                            Was this helpful?
                          </span>
                          <button
                            type="button"
                            className="btn btn-outline-soft btn-sm d-inline-flex align-items-center gap-1 px-3 py-1"
                            data-vote="up"
                            aria-label="Yes, this answer was helpful"
                          >
                            <i className="icon-14" data-lucide="thumbs-up" aria-hidden="true" />
                            Yes
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-soft btn-sm d-inline-flex align-items-center gap-1 px-3 py-1"
                            data-vote="down"
                            aria-label="No, this answer was not helpful"
                          >
                            <i className="icon-14" data-lucide="thumbs-down" aria-hidden="true" />
                            No
                          </button>
                        </span>
                        <span
                          className="badge-soft tint-success d-none d-inline-flex align-items-center gap-1"
                          data-vote-thanks=""
                        >
                          <i className="icon-12" data-lucide="check" aria-hidden="true" />
                          Thanks for the feedback
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              <li className="bg-plain border-theme rounded-3 overflow-hidden" data-filter-tags="api">
                <h3 className="fs-md mb-0">
                  <button
                    type="button"
                    className="tile-plain d-flex align-items-center gap-3 w-100 px-3 py-3 border-0 text-start transition-base"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqA16"
                    aria-expanded="false"
                    aria-controls="faqA16"
                  >
                    <span className="icon-box icon-box-sm tint-cyan" aria-hidden="true">
                      <i data-lucide="webhook" />
                    </span>
                    <span className="flex-grow-1 fs-md fw-semibold text-title">
                      Is there a public API and webhooks?
                    </span>
                    <span className="badge-soft tint-cyan d-none d-md-inline-block text-nowrap">
                      API
                    </span>
                    <i
                      className="dd-caret icon-18 flex-shrink-0 text-muted-2"
                      data-lucide="chevron-down"
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div className="collapse" id="faqA16" data-bs-parent="#faqList">
                  <div className="px-3 pb-3">
                    <p className="fs-md text-body-2 mb-3">
                      Yes — a REST API and signed webhooks come with every plan, alongside SDKs for JavaScript, Python and Go. Rate limits follow your plan’s monthly call allowance, and every response carries the quota you have left in its headers.
                    </p>
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 pt-3 border-t-soft">
                      <a href="#" className="d-inline-flex align-items-center gap-1 fs-md fw-medium text-brand">
                        Read the API reference
                        <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                      </a>
                      <span className="d-flex align-items-center gap-2" data-vote-group="">
                        <span className="d-inline-flex align-items-center gap-2" data-vote-ask="">
                          <span className="fs-sm text-muted-2">
                            Was this helpful?
                          </span>
                          <button
                            type="button"
                            className="btn btn-outline-soft btn-sm d-inline-flex align-items-center gap-1 px-3 py-1"
                            data-vote="up"
                            aria-label="Yes, this answer was helpful"
                          >
                            <i className="icon-14" data-lucide="thumbs-up" aria-hidden="true" />
                            Yes
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-soft btn-sm d-inline-flex align-items-center gap-1 px-3 py-1"
                            data-vote="down"
                            aria-label="No, this answer was not helpful"
                          >
                            <i className="icon-14" data-lucide="thumbs-down" aria-hidden="true" />
                            No
                          </button>
                        </span>
                        <span
                          className="badge-soft tint-success d-none d-inline-flex align-items-center gap-1"
                          data-vote-thanks=""
                        >
                          <i className="icon-12" data-lucide="check" aria-hidden="true" />
                          Thanks for the feedback
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              {/* Empty state — shown by the search module when nothing matches */}
              <li className="d-none" data-search-empty="">
                <div className="card border-dashed">
                  <div className="card-body text-center py-5">
                    <span className="icon-box icon-box-xl tint-primary mx-auto mb-3" aria-hidden="true">
                      <i data-lucide="search-x" />
                    </span>
                    <h3 className="fs-5 fw-bold text-title mb-1">
                      No answers matched “
                      <bdi data-search-query="" />
                      ”
                    </h3>
                    <p className="fs-md text-muted-2 mb-3">
                      Try a shorter phrase, pick another topic, or ask us directly — a support engineer will pick it up.
                    </p>
                    <div className="d-flex flex-wrap justify-content-center gap-2">
                      <button
                        type="button"
                        className="btn btn-outline-soft d-inline-flex align-items-center gap-2"
                        data-search-clear=""
                      >
                        <i className="icon-18" data-lucide="rotate-ccw" aria-hidden="true" />
                        Clear search
                      </button>
                      <a href="/help-desk" className="btn btn-primary d-inline-flex align-items-center gap-2">
                        {" "}
                        <i className="icon-18" data-lucide="ticket" aria-hidden="true" />
                        Ask our team
                        {" "}
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/* Support rail */}
          <div className="col-12 col-xl-4">
            <div className="d-flex flex-column gap-3">
              <div className="on-dark bg-grad-theme d-flex flex-column gap-3 p-3 p-md-4 rounded-4">
                <div>
                  <span className="icon-box icon-box-lg bg-white bg-opacity-25 mb-3" aria-hidden="true">
                    <i data-lucide="headset" />
                  </span>
                  <h3 className="fs-5 fw-bold text-title mb-2">
                    Still need help?
                  </h3>
                  <p className="fs-md text-primary mb-0">
                    Our support engineers reply in under two hours on weekdays, and a person reads every conversation before anything automated does.
                  </p>
                </div>
                <div className="d-flex align-items-center gap-3">
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
                  <span className="d-flex align-items-center gap-2 fs-md text-primary">
                    <span className="legend-dot bg-cat-emerald" aria-hidden="true" />
                    <bdi>
                      6 engineers online now
                    </bdi>
                  </span>
                </div>
                <div className="d-flex flex-wrap align-items-center gap-2">
                  <a href="/help-desk" className="btn btn-accent d-inline-flex align-items-center gap-2 text-nowrap">
                    {" "}
                    <i className="icon-18" data-lucide="ticket" aria-hidden="true" />
                    Open a ticket
                    {" "}
                  </a>
                  <a href="/chat" className="btn btn-accent-ghost d-inline-flex align-items-center gap-2 text-nowrap">
                    {" "}
                    <i className="icon-18" data-lucide="message-circle" aria-hidden="true" />
                    Start a chat
                    {" "}
                  </a>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                    <h3 className="fs-5 fw-bold text-title mb-0">
                      Popular guides
                    </h3>
                    <a href="#" className="d-inline-flex align-items-center gap-1 fs-md fw-medium text-brand">
                      All docs
                      <i className="icon-16 flip-rtl" data-lucide="arrow-right" aria-hidden="true" />
                    </a>
                  </div>
                  <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                    <li>
                      <a href="#" className="tile-soft d-flex align-items-center gap-3 p-2 rounded-3 transition-base">
                        <span className="icon-box tint-violet" aria-hidden="true">
                          <i data-lucide="book-open" />
                        </span>
                        <span className="min-w-0 flex-grow-1">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title">
                            Connecting your first data source
                          </span>
                          {" "}
                          <span className="d-block fs-sm text-muted-2">
                            <bdi>
                              4 min read · Getting started
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <i
                          className="icon-16 flip-rtl flex-shrink-0 text-muted-2"
                          data-lucide="chevron-right"
                          aria-hidden="true"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="tile-soft d-flex align-items-center gap-3 p-2 rounded-3 transition-base">
                        <span className="icon-box tint-blue" aria-hidden="true">
                          <i data-lucide="shield-check" />
                        </span>
                        <span className="min-w-0 flex-grow-1">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title">
                            Hardening a workspace with SSO
                          </span>
                          {" "}
                          <span className="d-block fs-sm text-muted-2">
                            <bdi>
                              6 min read · Security
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <i
                          className="icon-16 flip-rtl flex-shrink-0 text-muted-2"
                          data-lucide="chevron-right"
                          aria-hidden="true"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="tile-soft d-flex align-items-center gap-3 p-2 rounded-3 transition-base">
                        <span className="icon-box tint-brand" aria-hidden="true">
                          <i data-lucide="brain-circuit" />
                        </span>
                        <span className="min-w-0 flex-grow-1">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title">
                            Fine-tuning a model end to end
                          </span>
                          {" "}
                          <span className="d-block fs-sm text-muted-2">
                            <bdi>
                              {"9 min read · AI & models"}
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <i
                          className="icon-16 flip-rtl flex-shrink-0 text-muted-2"
                          data-lucide="chevron-right"
                          aria-hidden="true"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="tile-soft d-flex align-items-center gap-3 p-2 rounded-3 transition-base">
                        <span className="icon-box tint-amber" aria-hidden="true">
                          <i data-lucide="credit-card" />
                        </span>
                        <span className="min-w-0 flex-grow-1">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title">
                            Reading your monthly invoice
                          </span>
                          {" "}
                          <span className="d-block fs-sm text-muted-2">
                            <bdi>
                              3 min read · Billing
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <i
                          className="icon-16 flip-rtl flex-shrink-0 text-muted-2"
                          data-lucide="chevron-right"
                          aria-hidden="true"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="tile-soft d-flex align-items-center gap-3 p-2 rounded-3 transition-base">
                        <span className="icon-box tint-cyan" aria-hidden="true">
                          <i data-lucide="webhook" />
                        </span>
                        <span className="min-w-0 flex-grow-1">
                          {" "}
                          <span className="d-block fs-md fw-semibold text-title">
                            Building your first webhook
                          </span>
                          {" "}
                          <span className="d-block fs-sm text-muted-2">
                            <bdi>
                              7 min read · API
                            </bdi>
                          </span>
                          {" "}
                        </span>
                        <i
                          className="icon-16 flip-rtl flex-shrink-0 text-muted-2"
                          data-lucide="chevron-right"
                          aria-hidden="true"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-plain border-theme d-flex align-items-center gap-3 p-3 rounded-3">
                <span className="icon-box tint-emerald" aria-hidden="true">
                  <i data-lucide="activity" />
                </span>
                <span className="min-w-0 flex-grow-1">
                  {" "}
                  <span className="d-block fs-md fw-semibold text-title text-truncate">
                    All systems operational
                  </span>
                  {" "}
                  <span className="d-block fs-sm text-muted-2">
                    <bdi>
                      Checked 2 minutes ago
                    </bdi>
                  </span>
                  {" "}
                </span>
                <a href="#" className="btn btn-outline-soft btn-sm flex-shrink-0 px-3 py-1 text-nowrap">
                  Status
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ========== FOOTER ========== */}
    </AppShell>
  );
}

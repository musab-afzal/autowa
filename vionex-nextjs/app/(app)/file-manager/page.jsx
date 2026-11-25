/* Generated from the Vionex HTML theme by scripts/convert-html.mjs */
import AppShell from "@/components/AppShell";

export const metadata = {
  title: "Vionex — File Manager",
  description: "Vionex file manager app — browse folders and files in a grid or list, search, filter, sort, preview and share, built with Bootstrap 5, CSS variables and a scalable design system.",
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
          File Manager
        </h1>
        <nav aria-label="breadcrumb" className="d-none d-md-block">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="/">
                Dashboard
              </a>
            </li>
            <li className="breadcrumb-item">
              Apps
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              File Manager
            </li>
          </ol>
        </nav>
      </div>
      {/* ===== File workspace =====
         Every folder, file, row, card, preview and empty state below is
         written here in the HTML. dashboard.js only reveals, reorders and
         restyles what is already on the page - it never builds a record. */}
      <section className="app-workspace d-flex flex-fill gap-3" aria-label="File manager" data-file-scope="">
        {/* ========== Pane 1 - locations &amp; categories (drawer under xl) ========== */}
        <section
          className="offcanvas-xl offcanvas-start app-pane d-flex flex-column"
          tabIndex="-1"
          id="fmSidePane"
          aria-labelledby="fmSideTitle"
        >
          <div className="offcanvas-body d-flex flex-fill min-h-0 p-3 p-xl-0 overflow-hidden">
            <div className="card flex-fill min-w-0 mb-0 overflow-hidden">
              <div className="p-3 border-b-soft flex-shrink-0">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <h2 id="fmSideTitle" className="fs-5 fw-bold text-title mb-0 me-auto">
                    My Drive
                  </h2>
                  <button
                    type="button"
                    className="btn btn-outline-soft btn-18 rounded-circle flex-shrink-0 d-xl-none"
                    data-bs-dismiss="offcanvas"
                    data-bs-target="#fmSidePane"
                    aria-label="Close the drive menu"
                  >
                    <i data-lucide="x" aria-hidden="true" />
                  </button>
                </div>
                <div className="d-flex flex-column gap-2">
                  <button
                    type="button"
                    className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2"
                    data-bs-toggle="modal"
                    data-bs-target="#fmUploadModal"
                  >
                    <i className="icon-18" data-lucide="cloud-upload" aria-hidden="true" />
                    Upload files
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-soft w-100 d-flex align-items-center justify-content-center gap-2"
                    data-bs-toggle="modal"
                    data-bs-target="#fmFolderModal"
                  >
                    <i className="icon-18" data-lucide="folder-plus" aria-hidden="true" />
                    New folder
                  </button>
                </div>
              </div>
              <div className="flex-fill min-h-0 overflow-y-auto scrollbar-thin p-2">
                <p className="fs-xs fw-semibold text-uppercase text-muted-2 px-2 mt-1 mb-1">
                  Locations
                </p>
                <ul className="list-unstyled d-flex flex-column gap-1 mb-3">
                  <li>
                    <button
                      type="button"
                      className="list-row-select active transition-base w-100 d-flex align-items-center gap-2 p-2 border-0 rounded-3 text-start"
                      data-file-nav="myfiles"
                      aria-pressed="true"
                    >
                      <i className="icon-18 flex-shrink-0" data-lucide="hard-drive" aria-hidden="true" />
                      {" "}
                      <span className="flex-grow-1 min-w-0 fs-md fw-medium text-truncate">
                        My Files
                      </span>
                      {" "}
                      <span className="badge-soft flex-shrink-0 px-2 py-0" data-file-count="myfiles">
                        <bdi>
                          20
                        </bdi>
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="list-row-select transition-base w-100 d-flex align-items-center gap-2 p-2 border-0 rounded-3 text-start"
                      data-file-nav="recent"
                      aria-pressed="false"
                    >
                      <i className="icon-18 flex-shrink-0" data-lucide="clock" aria-hidden="true" />
                      <span className="flex-grow-1 min-w-0 fs-md fw-medium text-truncate">
                        Recent
                      </span>
                      <span className="badge-soft flex-shrink-0 px-2 py-0" data-file-count="recent">
                        <bdi>
                          8
                        </bdi>
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="list-row-select transition-base w-100 d-flex align-items-center gap-2 p-2 border-0 rounded-3 text-start"
                      data-file-nav="starred"
                      aria-pressed="false"
                    >
                      <i className="icon-18 flex-shrink-0" data-lucide="star" aria-hidden="true" />
                      <span className="flex-grow-1 min-w-0 fs-md fw-medium text-truncate">
                        Starred
                      </span>
                      <span className="badge-soft flex-shrink-0 px-2 py-0" data-file-count="starred">
                        <bdi>
                          6
                        </bdi>
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="list-row-select transition-base w-100 d-flex align-items-center gap-2 p-2 border-0 rounded-3 text-start"
                      data-file-nav="shared"
                      aria-pressed="false"
                    >
                      <i className="icon-18 flex-shrink-0" data-lucide="users" aria-hidden="true" />
                      <span className="flex-grow-1 min-w-0 fs-md fw-medium text-truncate">
                        Shared with me
                      </span>
                      <span className="badge-soft flex-shrink-0 px-2 py-0" data-file-count="shared">
                        <bdi>
                          8
                        </bdi>
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="list-row-select transition-base w-100 d-flex align-items-center gap-2 p-2 border-0 rounded-3 text-start"
                      data-file-nav="trash"
                      aria-pressed="false"
                    >
                      <i className="icon-18 flex-shrink-0" data-lucide="trash-2" aria-hidden="true" />
                      <span className="flex-grow-1 min-w-0 fs-md fw-medium text-truncate">
                        Trash
                      </span>
                      <span className="badge-soft tint-danger flex-shrink-0 px-2 py-0" data-file-count="trash">
                        <bdi>
                          2
                        </bdi>
                      </span>
                    </button>
                  </li>
                </ul>
                <p className="fs-xs fw-semibold text-uppercase text-muted-2 px-2 mb-1">
                  Categories
                </p>
                <ul className="list-unstyled d-flex flex-column gap-1 mb-0">
                  <li>
                    <button
                      type="button"
                      className="list-row-select transition-base w-100 d-flex align-items-center gap-2 p-2 border-0 rounded-3 text-start"
                      data-file-nav="documents"
                      aria-pressed="false"
                    >
                      <i className="icon-18 flex-shrink-0" data-lucide="file-text" aria-hidden="true" />
                      <span className="flex-grow-1 min-w-0 fs-md fw-medium text-truncate">
                        Documents
                      </span>
                      <span className="badge-soft flex-shrink-0 px-2 py-0" data-file-count="documents">
                        <bdi>
                          6
                        </bdi>
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="list-row-select transition-base w-100 d-flex align-items-center gap-2 p-2 border-0 rounded-3 text-start"
                      data-file-nav="images"
                      aria-pressed="false"
                    >
                      <i className="icon-18 flex-shrink-0" data-lucide="image" aria-hidden="true" />
                      <span className="flex-grow-1 min-w-0 fs-md fw-medium text-truncate">
                        Images
                      </span>
                      <span className="badge-soft flex-shrink-0 px-2 py-0" data-file-count="images">
                        <bdi>
                          3
                        </bdi>
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="list-row-select transition-base w-100 d-flex align-items-center gap-2 p-2 border-0 rounded-3 text-start"
                      data-file-nav="videos"
                      aria-pressed="false"
                    >
                      <i className="icon-18 flex-shrink-0" data-lucide="file-video" aria-hidden="true" />
                      <span className="flex-grow-1 min-w-0 fs-md fw-medium text-truncate">
                        Videos
                      </span>
                      <span className="badge-soft flex-shrink-0 px-2 py-0" data-file-count="videos">
                        <bdi>
                          2
                        </bdi>
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="list-row-select transition-base w-100 d-flex align-items-center gap-2 p-2 border-0 rounded-3 text-start"
                      data-file-nav="audio"
                      aria-pressed="false"
                    >
                      <i className="icon-18 flex-shrink-0" data-lucide="file-audio" aria-hidden="true" />
                      <span className="flex-grow-1 min-w-0 fs-md fw-medium text-truncate">
                        Audio
                      </span>
                      <span className="badge-soft flex-shrink-0 px-2 py-0" data-file-count="audio">
                        <bdi>
                          1
                        </bdi>
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="list-row-select transition-base w-100 d-flex align-items-center gap-2 p-2 border-0 rounded-3 text-start"
                      data-file-nav="archives"
                      aria-pressed="false"
                    >
                      <i className="icon-18 flex-shrink-0" data-lucide="file-archive" aria-hidden="true" />
                      <span className="flex-grow-1 min-w-0 fs-md fw-medium text-truncate">
                        Downloads
                      </span>
                      <span className="badge-soft flex-shrink-0 px-2 py-0" data-file-count="archives">
                        <bdi>
                          2
                        </bdi>
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
              <div className="p-3 border-t-soft flex-shrink-0">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <i className="icon-16 text-muted-2 flex-shrink-0" data-lucide="database" aria-hidden="true" />
                  <span className="fs-md fw-semibold text-title me-auto">
                    Storage
                  </span>
                  <bdi className="fs-xs text-muted-2">
                    68.4 GB of 100 GB
                  </bdi>
                </div>
                <div
                  className="progress progress-sm mb-2"
                  role="progressbar"
                  aria-label="Storage used"
                  aria-valuenow="68"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="progress-bar" style={{ width: "68%" }} />
                </div>
                <button type="button" className="btn btn-outline-soft btn-sm w-100">
                  Upgrade storage
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* ========== Pane 2 - the file surface (grid &#8646; list) ========== */}
        <section
          className="card flex-fill min-w-0 mb-0 overflow-hidden"
          aria-labelledby="fmSurfaceTitle"
          data-view-switch=""
        >
          <div className="p-3 border-b-soft flex-shrink-0">
            <div className="d-flex align-items-center gap-2 mb-3">
              <button
                type="button"
                className="btn btn-outline-soft btn-18 rounded-circle flex-shrink-0 d-xl-none"
                data-bs-toggle="offcanvas"
                data-bs-target="#fmSidePane"
                aria-controls="fmSidePane"
                aria-label="Show locations and categories"
              >
                <i data-lucide="menu" aria-hidden="true" />
              </button>
              <h2
                id="fmSurfaceTitle"
                className="fs-5 fw-bold text-title text-truncate mb-0 me-auto"
                data-file-out="heading"
              >
                My Files
              </h2>
              <span className="badge-soft flex-shrink-0">
                <bdi data-file-out="shown">
                  20
                </bdi>
              </span>
              <div
                className="nav nav-pills seg-toggle d-inline-flex flex-nowrap min-w-0 gap-1 p-1 rounded-pill bg-soft overflow-x-auto scrollbar-none flex-shrink-0"
                role="group"
                aria-label="File view"
              >
                <button
                  type="button"
                  className="nav-link active fw-semibold d-flex align-items-center gap-2"
                  data-view-target="grid"
                  aria-pressed="true"
                >
                  <i className="icon-16" data-lucide="layout-grid" aria-hidden="true" />
                  <span className="d-none d-sm-inline">
                    Grid
                  </span>
                </button>
                <button
                  type="button"
                  className="nav-link fw-semibold d-flex align-items-center gap-2"
                  data-view-target="list"
                  aria-pressed="false"
                >
                  <i className="icon-16" data-lucide="layout-list" aria-hidden="true" />
                  <span className="d-none d-sm-inline">
                    List
                  </span>
                </button>
              </div>
              <button
                type="button"
                className="btn btn-ghost btn-18 rounded-circle flex-shrink-0"
                data-bs-toggle="offcanvas"
                data-bs-target="#fmDetailPane"
                aria-controls="fmDetailPane"
                aria-label="Show details panel"
                title="Details"
              >
                <i data-lucide="info" aria-hidden="true" />
              </button>
              <div className="dropdown flex-shrink-0">
                <button
                  type="button"
                  className="btn btn-ghost btn-18 rounded-circle"
                  id="fmSurfaceMenu"
                  data-bs-toggle="dropdown"
                  data-dd-fixed=""
                  data-bs-offset="0,8"
                  aria-expanded="false"
                  aria-label="More file actions"
                >
                  <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                </button>
                {" "}
                <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="fmSurfaceMenu">
                  <li>
                    <button type="button" className="dropdown-item" data-file-action="select-all">
                      <i data-lucide="check-check" aria-hidden="true" />
                      Select everything shown
                    </button>
                  </li>
                  <li>
                    <button type="button" className="dropdown-item" data-file-action="reset">
                      <i data-lucide="rotate-ccw" aria-hidden="true" />
                      Reset filters
                    </button>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <button
                      type="button"
                      className="dropdown-item"
                      data-bs-toggle="modal"
                      data-bs-target="#fmUploadModal"
                    >
                      <i data-lucide="cloud-upload" aria-hidden="true" />
                      Upload files
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="dropdown-item"
                      data-bs-toggle="modal"
                      data-bs-target="#fmFolderModal"
                    >
                      <i data-lucide="folder-plus" aria-hidden="true" />
                      New folder
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="d-flex flex-wrap align-items-center gap-2">
              <nav aria-label="Folder path" className="flex-shrink-0 d-none d-lg-block">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <a href="#" data-file-action="reset">
                      My Drive
                    </a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    <span data-file-out="crumb">
                      My Files
                    </span>
                  </li>
                </ol>
              </nav>
              <div className="field-icon flex-grow-1 min-w-0">
                <i className="icon-18" data-lucide="search" aria-hidden="true" />
                {" "}
                <label htmlFor="fmSearch" className="visually-hidden">
                  Search files and folders
                </label>
                {" "}
                <input
                  type="search"
                  className="form-control"
                  id="fmSearch"
                  name="file-search"
                  placeholder={"Search files & folders"}
                  data-file-search=""
                />
              </div>
              <label htmlFor="fmFilterType" className="visually-hidden">
                Filter by type
              </label>
              <select className="form-select w-auto pe-5 flex-shrink-0" id="fmFilterType" data-file-filter="">
                <option value="all">
                  All files
                </option>
                <option value="folders">
                  Folders
                </option>
                <option value="documents">
                  Documents
                </option>
                <option value="images">
                  Images
                </option>
                <option value="videos">
                  Videos
                </option>
                <option value="audio">
                  Audio
                </option>
                <option value="archives">
                  Archives
                </option>
                <option value="starred">
                  Starred
                </option>
                <option value="shared">
                  Shared
                </option>
              </select>
              <div className="dropdown flex-shrink-0">
                <button
                  type="button"
                  className="btn btn-outline-soft d-flex align-items-center gap-2"
                  id="fmSortMenu"
                  data-bs-toggle="dropdown"
                  data-dd-fixed=""
                  data-bs-offset="0,8"
                  aria-expanded="false"
                >
                  <i className="icon-16" data-lucide="arrow-up-down" aria-hidden="true" />
                  {" "}
                  <span className="visually-hidden">
                    Sort by
                  </span>
                  {" "}
                  <span className="d-none d-xl-inline fs-md" data-file-out="sort">
                    Last modified
                  </span>
                </button>
                {" "}
                <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="fmSortMenu">
                  <li>
                    <button type="button" className="dropdown-item" data-file-sort="modified">
                      <i data-lucide="clock" aria-hidden="true" />
                      Last modified
                    </button>
                  </li>
                  <li>
                    <button type="button" className="dropdown-item" data-file-sort="name">
                      <i data-lucide="file-text" aria-hidden="true" />
                      Name A–Z
                    </button>
                  </li>
                  <li>
                    <button type="button" className="dropdown-item" data-file-sort="size">
                      <i data-lucide="database" aria-hidden="true" />
                      Size
                    </button>
                  </li>
                  <li>
                    <button type="button" className="dropdown-item" data-file-sort="type">
                      <i data-lucide="shapes" aria-hidden="true" />
                      File type
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* ===== Bulk action bar - shown once something is selected ===== */}
          <div
            className="d-none flex-wrap align-items-center gap-2 px-3 py-2 border-b-soft bg-soft flex-shrink-0"
            data-file-bulk-bar=""
          >
            <span className="fs-md fw-semibold text-title me-auto">
              <bdi data-file-out="picked">
                0
              </bdi>
              {" "}
              selected
            </span>
            {" "}
            <button
              type="button"
              className="btn btn-outline-soft btn-sm d-flex align-items-center gap-2"
              data-file-action="download"
            >
              <i className="icon-16" data-lucide="download" aria-hidden="true" />
              <span className="d-none d-sm-inline">
                Download
              </span>
            </button>
            {" "}
            <button
              type="button"
              className="btn btn-outline-soft btn-sm d-flex align-items-center gap-2"
              data-file-action="share"
            >
              <i className="icon-16" data-lucide="share-2" aria-hidden="true" />
              <span className="d-none d-sm-inline">
                Share
              </span>
            </button>
            {" "}
            <button
              type="button"
              className="btn btn-outline-soft btn-sm d-flex align-items-center gap-2"
              data-file-action="move"
            >
              <i className="icon-16" data-lucide="folder-input" aria-hidden="true" />
              <span className="d-none d-sm-inline">
                Move
              </span>
            </button>
            {" "}
            <button
              type="button"
              className="btn btn-danger btn-sm d-flex align-items-center gap-2"
              data-file-action="delete"
            >
              <i className="icon-16" data-lucide="trash-2" aria-hidden="true" />
              <span className="d-none d-sm-inline">
                Delete
              </span>
            </button>
            {" "}
            <button
              type="button"
              className="btn btn-ghost btn-18 rounded-circle"
              data-file-action="clear"
              aria-label="Clear the selection"
            >
              <i data-lucide="x" aria-hidden="true" />
            </button>
          </div>
          {/* ===== Grid view ===== */}
          <div className="d-flex flex-column flex-fill min-h-0" data-view-panel="grid">
            <div className="flex-fill min-h-0 overflow-y-auto scrollbar-thin p-3">
              <section aria-labelledby="fmFoldersTitle" data-file-group="folders">
                <h3 id="fmFoldersTitle" className="fs-md fw-semibold text-uppercase text-muted-2 mb-2">
                  Folders
                </h3>
                <ul className="list-unstyled row row-cols-1 row-cols-sm-2 row-cols-xxl-3 g-3 mb-4">
                  <li
                    className="col"
                    data-file-card="fm-f1"
                    data-file-kind="folder"
                    data-file-type="folder"
                    data-file-cat="folders"
                    data-file-loc="myfiles recent starred shared"
                    data-file-name="Design Assets"
                    data-file-size="2576980378"
                    data-file-size-label="2.4 GB"
                    data-file-modified="2026-09-02"
                    data-file-modified-label="2 Sep 2026"
                    data-file-created-label="11 Jun 2026"
                    data-file-owner="Meera Iyer"
                    data-file-where="My Files"
                    data-file-type-label="Folder"
                    data-file-items="128"
                    data-file-starred=""
                    data-file-shared=""
                    data-file-share-with="8 people"
                  >
                    <div
                      className="tile-plain hover-lift border-soft rounded-4 p-2 h-100 d-flex flex-column gap-2 transition-base"
                      data-file-tile=""
                    >
                      <div className="position-relative">
                        <button
                          type="button"
                          data-file-open=""
                          className="d-block w-100 p-0 border-0 bg-transparent"
                          aria-label="Open Design Assets"
                        >
                          <span className="d-block ratio ratio-16x9 rounded-3 overflow-hidden tint-violet">
                            {" "}
                            <span className="d-flex align-items-center justify-content-center">
                              <span className="icon-box icon-box-xl bg-glass shadow-sm" aria-hidden="true">
                                <i data-lucide="folder" />
                              </span>
                            </span>
                            {" "}
                          </span>
                        </button>
                        {" "}
                        <input
                          className="form-check-input position-absolute top-0 start-0 m-2"
                          type="checkbox"
                          data-file-pick=""
                          id="fmPickCard-fm-f1"
                          aria-label="Select Design Assets"
                        />
                        {" "}
                        <div className="position-absolute top-0 end-0 m-1 d-flex align-items-center rounded-pill bg-glass">
                          <button
                            type="button"
                            className="btn btn-ghost btn-18 rounded-circle flex-shrink-0"
                            data-file-star=""
                            aria-pressed="true"
                            aria-label="Star Design Assets"
                            title="Star"
                          >
                            <i
                              className="icon-16 text-cat-amber icon-fill"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-on=""
                            />
                            {" "}
                            <i
                              className="icon-16 text-muted-2 d-none"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-off=""
                            />
                          </button>
                          <div className="dropdown flex-shrink-0">
                            <button
                              type="button"
                              className="btn btn-ghost btn-18 rounded-circle"
                              id="fmCardMenu-fm-f1"
                              data-bs-toggle="dropdown"
                              data-bs-auto-close="outside"
                              data-dd-fixed=""
                              data-bs-offset="0,8"
                              aria-expanded="false"
                              aria-label="More actions for Design Assets"
                            >
                              <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                            </button>
                            {" "}
                            <ul
                              className="dropdown-menu dropdown-menu-end dropdown-menu-compact p-2"
                              aria-labelledby="fmCardMenu-fm-f1"
                            >
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="open">
                                  <i data-lucide="folder-open" aria-hidden="true" />
                                  Open
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="details">
                                  <i data-lucide="info" aria-hidden="true" />
                                  Details
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="download">
                                  <i data-lucide="download" aria-hidden="true" />
                                  Download
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="share">
                                  <i data-lucide="share-2" aria-hidden="true" />
                                  Share
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="rename">
                                  <i data-lucide="pencil" aria-hidden="true" />
                                  Rename
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="move">
                                  <i data-lucide="folder-input" aria-hidden="true" />
                                  Move to…
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="star">
                                  <i data-lucide="star" aria-hidden="true" />
                                  <span>
                                    <span className="" data-file-star-text-on="">
                                      Remove star
                                    </span>
                                    <span className="d-none" data-file-star-text-off="">
                                      Add star
                                    </span>
                                  </span>
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="dropdown-item dropdown-item-danger"
                                  data-file-action="delete"
                                >
                                  <i data-lucide="trash-2" aria-hidden="true" />
                                  Delete
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {" "}
                        <span
                          className="avatar-stack position-absolute bottom-0 start-0 m-2"
                          role="img"
                          aria-label="Shared with 8 people"
                        >
                          <span className="avatar avatar-xs">
                            <img src="/assets/images/avatar-1.png" width="28" height="28" alt="" />
                          </span>
                          <span className="avatar avatar-xs">
                            <img src="/assets/images/avatar-2.png" width="28" height="28" alt="" />
                          </span>
                          <span className="avatar avatar-xs">
                            <img src="/assets/images/avatar-3.png" width="28" height="28" alt="" />
                          </span>
                          <span className="avatar avatar-xs bg-cat-slate fs-xs">
                            +5
                          </span>
                        </span>
                        {" "}
                        <span className="badge-soft bg-glass text-cat-violet position-absolute bottom-0 end-0 m-2 px-2 py-0 fs-xs">
                          <bdi>
                            128
                          </bdi>
                          {" "}
                          items
                        </span>
                      </div>
                      <div className="d-flex align-items-center gap-2 px-1 pb-1">
                        <span className="icon-box icon-box-sm tint-violet flex-shrink-0" aria-hidden="true">
                          <i data-lucide="folder" />
                        </span>
                        <button
                          type="button"
                          data-file-open=""
                          className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                        >
                          <span className="d-block fs-md fw-semibold text-title text-truncate" data-file-label="">
                            Design Assets
                          </span>
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi>
                              2.4 GB
                            </bdi>
                            {" "}·{" "}
                            <bdi>
                              2 Sep 2026
                            </bdi>
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li
                    className="col"
                    data-file-card="fm-f2"
                    data-file-kind="folder"
                    data-file-type="folder"
                    data-file-cat="folders"
                    data-file-loc="myfiles recent"
                    data-file-name="Documents"
                    data-file-size="985661440"
                    data-file-size-label="940 MB"
                    data-file-modified="2026-09-01"
                    data-file-modified-label="1 Sep 2026"
                    data-file-created-label="4 Mar 2026"
                    data-file-owner="Ravisha V"
                    data-file-where="My Files"
                    data-file-type-label="Folder"
                    data-file-items="86"
                  >
                    <div
                      className="tile-plain hover-lift border-soft rounded-4 p-2 h-100 d-flex flex-column gap-2 transition-base"
                      data-file-tile=""
                    >
                      <div className="position-relative">
                        <button
                          type="button"
                          data-file-open=""
                          className="d-block w-100 p-0 border-0 bg-transparent"
                          aria-label="Open Documents"
                        >
                          <span className="d-block ratio ratio-16x9 rounded-3 overflow-hidden tint-blue">
                            {" "}
                            <span className="d-flex align-items-center justify-content-center">
                              <span className="icon-box icon-box-xl bg-glass shadow-sm" aria-hidden="true">
                                <i data-lucide="folder" />
                              </span>
                            </span>
                            {" "}
                          </span>
                        </button>
                        {" "}
                        <input
                          className="form-check-input position-absolute top-0 start-0 m-2"
                          type="checkbox"
                          data-file-pick=""
                          id="fmPickCard-fm-f2"
                          aria-label="Select Documents"
                        />
                        {" "}
                        <div className="position-absolute top-0 end-0 m-1 d-flex align-items-center rounded-pill bg-glass">
                          <button
                            type="button"
                            className="btn btn-ghost btn-18 rounded-circle flex-shrink-0"
                            data-file-star=""
                            aria-pressed="false"
                            aria-label="Star Documents"
                            title="Star"
                          >
                            <i
                              className="icon-16 text-cat-amber icon-fill d-none"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-on=""
                            />
                            {" "}
                            <i
                              className="icon-16 text-muted-2"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-off=""
                            />
                          </button>
                          <div className="dropdown flex-shrink-0">
                            <button
                              type="button"
                              className="btn btn-ghost btn-18 rounded-circle"
                              id="fmCardMenu-fm-f2"
                              data-bs-toggle="dropdown"
                              data-bs-auto-close="outside"
                              data-dd-fixed=""
                              data-bs-offset="0,8"
                              aria-expanded="false"
                              aria-label="More actions for Documents"
                            >
                              <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                            </button>
                            {" "}
                            <ul
                              className="dropdown-menu dropdown-menu-end dropdown-menu-compact p-2"
                              aria-labelledby="fmCardMenu-fm-f2"
                            >
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="open">
                                  <i data-lucide="folder-open" aria-hidden="true" />
                                  Open
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="details">
                                  <i data-lucide="info" aria-hidden="true" />
                                  Details
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="download">
                                  <i data-lucide="download" aria-hidden="true" />
                                  Download
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="share">
                                  <i data-lucide="share-2" aria-hidden="true" />
                                  Share
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="rename">
                                  <i data-lucide="pencil" aria-hidden="true" />
                                  Rename
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="move">
                                  <i data-lucide="folder-input" aria-hidden="true" />
                                  Move to…
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="star">
                                  <i data-lucide="star" aria-hidden="true" />
                                  <span>
                                    <span className="d-none" data-file-star-text-on="">
                                      Remove star
                                    </span>
                                    <span className="" data-file-star-text-off="">
                                      Add star
                                    </span>
                                  </span>
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="dropdown-item dropdown-item-danger"
                                  data-file-action="delete"
                                >
                                  <i data-lucide="trash-2" aria-hidden="true" />
                                  Delete
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {" "}
                        <span className="badge-soft bg-glass text-muted-2 position-absolute bottom-0 start-0 m-2 px-2 py-0 fs-xs d-inline-flex align-items-center gap-1">
                          {" "}
                          <i className="icon-12" data-lucide="lock" aria-hidden="true" />
                          Private
                          {" "}
                        </span>
                        {" "}
                        <span className="badge-soft bg-glass text-cat-blue position-absolute bottom-0 end-0 m-2 px-2 py-0 fs-xs">
                          <bdi>
                            86
                          </bdi>
                          {" "}
                          items
                        </span>
                      </div>
                      <div className="d-flex align-items-center gap-2 px-1 pb-1">
                        <span className="icon-box icon-box-sm tint-blue flex-shrink-0" aria-hidden="true">
                          <i data-lucide="folder" />
                        </span>
                        <button
                          type="button"
                          data-file-open=""
                          className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                        >
                          <span className="d-block fs-md fw-semibold text-title text-truncate" data-file-label="">
                            Documents
                          </span>
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi>
                              940 MB
                            </bdi>
                            {" "}·{" "}
                            <bdi>
                              1 Sep 2026
                            </bdi>
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li
                    className="col"
                    data-file-card="fm-f3"
                    data-file-kind="folder"
                    data-file-type="folder"
                    data-file-cat="folders"
                    data-file-loc="myfiles shared"
                    data-file-name="Marketing"
                    data-file-size="1288490189"
                    data-file-size-label="1.2 GB"
                    data-file-modified="2026-08-30"
                    data-file-modified-label="30 Aug 2026"
                    data-file-created-label="19 Apr 2026"
                    data-file-owner="Aarav Shah"
                    data-file-where="My Files"
                    data-file-type-label="Folder"
                    data-file-items="54"
                    data-file-shared=""
                    data-file-share-with="5 people"
                  >
                    <div
                      className="tile-plain hover-lift border-soft rounded-4 p-2 h-100 d-flex flex-column gap-2 transition-base"
                      data-file-tile=""
                    >
                      <div className="position-relative">
                        <button
                          type="button"
                          data-file-open=""
                          className="d-block w-100 p-0 border-0 bg-transparent"
                          aria-label="Open Marketing"
                        >
                          <span className="d-block ratio ratio-16x9 rounded-3 overflow-hidden tint-rose">
                            {" "}
                            <span className="d-flex align-items-center justify-content-center">
                              <span className="icon-box icon-box-xl bg-glass shadow-sm" aria-hidden="true">
                                <i data-lucide="folder" />
                              </span>
                            </span>
                            {" "}
                          </span>
                        </button>
                        {" "}
                        <input
                          className="form-check-input position-absolute top-0 start-0 m-2"
                          type="checkbox"
                          data-file-pick=""
                          id="fmPickCard-fm-f3"
                          aria-label="Select Marketing"
                        />
                        {" "}
                        <div className="position-absolute top-0 end-0 m-1 d-flex align-items-center rounded-pill bg-glass">
                          <button
                            type="button"
                            className="btn btn-ghost btn-18 rounded-circle flex-shrink-0"
                            data-file-star=""
                            aria-pressed="false"
                            aria-label="Star Marketing"
                            title="Star"
                          >
                            <i
                              className="icon-16 text-cat-amber icon-fill d-none"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-on=""
                            />
                            {" "}
                            <i
                              className="icon-16 text-muted-2"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-off=""
                            />
                          </button>
                          <div className="dropdown flex-shrink-0">
                            <button
                              type="button"
                              className="btn btn-ghost btn-18 rounded-circle"
                              id="fmCardMenu-fm-f3"
                              data-bs-toggle="dropdown"
                              data-bs-auto-close="outside"
                              data-dd-fixed=""
                              data-bs-offset="0,8"
                              aria-expanded="false"
                              aria-label="More actions for Marketing"
                            >
                              <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                            </button>
                            {" "}
                            <ul
                              className="dropdown-menu dropdown-menu-end dropdown-menu-compact p-2"
                              aria-labelledby="fmCardMenu-fm-f3"
                            >
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="open">
                                  <i data-lucide="folder-open" aria-hidden="true" />
                                  Open
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="details">
                                  <i data-lucide="info" aria-hidden="true" />
                                  Details
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="download">
                                  <i data-lucide="download" aria-hidden="true" />
                                  Download
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="share">
                                  <i data-lucide="share-2" aria-hidden="true" />
                                  Share
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="rename">
                                  <i data-lucide="pencil" aria-hidden="true" />
                                  Rename
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="move">
                                  <i data-lucide="folder-input" aria-hidden="true" />
                                  Move to…
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="star">
                                  <i data-lucide="star" aria-hidden="true" />
                                  <span>
                                    <span className="d-none" data-file-star-text-on="">
                                      Remove star
                                    </span>
                                    <span className="" data-file-star-text-off="">
                                      Add star
                                    </span>
                                  </span>
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="dropdown-item dropdown-item-danger"
                                  data-file-action="delete"
                                >
                                  <i data-lucide="trash-2" aria-hidden="true" />
                                  Delete
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {" "}
                        <span
                          className="avatar-stack position-absolute bottom-0 start-0 m-2"
                          role="img"
                          aria-label="Shared with 5 people"
                        >
                          <span className="avatar avatar-xs">
                            <img src="/assets/images/avatar-2.png" width="28" height="28" alt="" />
                          </span>
                          <span className="avatar avatar-xs">
                            <img src="/assets/images/avatar-4.png" width="28" height="28" alt="" />
                          </span>
                          <span className="avatar avatar-xs">
                            <img src="/assets/images/avatar-1.png" width="28" height="28" alt="" />
                          </span>
                          <span className="avatar avatar-xs bg-cat-slate fs-xs">
                            +2
                          </span>
                        </span>
                        {" "}
                        <span className="badge-soft bg-glass text-cat-rose position-absolute bottom-0 end-0 m-2 px-2 py-0 fs-xs">
                          <bdi>
                            54
                          </bdi>
                          {" "}
                          items
                        </span>
                      </div>
                      <div className="d-flex align-items-center gap-2 px-1 pb-1">
                        <span className="icon-box icon-box-sm tint-rose flex-shrink-0" aria-hidden="true">
                          <i data-lucide="folder" />
                        </span>
                        <button
                          type="button"
                          data-file-open=""
                          className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                        >
                          <span className="d-block fs-md fw-semibold text-title text-truncate" data-file-label="">
                            Marketing
                          </span>
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi>
                              1.2 GB
                            </bdi>
                            {" "}·{" "}
                            <bdi>
                              30 Aug 2026
                            </bdi>
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li
                    className="col"
                    data-file-card="fm-f4"
                    data-file-kind="folder"
                    data-file-type="folder"
                    data-file-cat="folders"
                    data-file-loc="myfiles starred shared"
                    data-file-name="Projects"
                    data-file-size="5153960755"
                    data-file-size-label="4.8 GB"
                    data-file-modified="2026-08-28"
                    data-file-modified-label="28 Aug 2026"
                    data-file-created-label="2 Feb 2026"
                    data-file-owner="Kabir Nair"
                    data-file-where="My Files"
                    data-file-type-label="Folder"
                    data-file-items="212"
                    data-file-starred=""
                    data-file-shared=""
                    data-file-share-with="12 people"
                  >
                    <div
                      className="tile-plain hover-lift border-soft rounded-4 p-2 h-100 d-flex flex-column gap-2 transition-base"
                      data-file-tile=""
                    >
                      <div className="position-relative">
                        <button
                          type="button"
                          data-file-open=""
                          className="d-block w-100 p-0 border-0 bg-transparent"
                          aria-label="Open Projects"
                        >
                          <span className="d-block ratio ratio-16x9 rounded-3 overflow-hidden tint-emerald">
                            {" "}
                            <span className="d-flex align-items-center justify-content-center">
                              <span className="icon-box icon-box-xl bg-glass shadow-sm" aria-hidden="true">
                                <i data-lucide="folder" />
                              </span>
                            </span>
                            {" "}
                          </span>
                        </button>
                        {" "}
                        <input
                          className="form-check-input position-absolute top-0 start-0 m-2"
                          type="checkbox"
                          data-file-pick=""
                          id="fmPickCard-fm-f4"
                          aria-label="Select Projects"
                        />
                        {" "}
                        <div className="position-absolute top-0 end-0 m-1 d-flex align-items-center rounded-pill bg-glass">
                          <button
                            type="button"
                            className="btn btn-ghost btn-18 rounded-circle flex-shrink-0"
                            data-file-star=""
                            aria-pressed="true"
                            aria-label="Star Projects"
                            title="Star"
                          >
                            <i
                              className="icon-16 text-cat-amber icon-fill"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-on=""
                            />
                            {" "}
                            <i
                              className="icon-16 text-muted-2 d-none"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-off=""
                            />
                          </button>
                          <div className="dropdown flex-shrink-0">
                            <button
                              type="button"
                              className="btn btn-ghost btn-18 rounded-circle"
                              id="fmCardMenu-fm-f4"
                              data-bs-toggle="dropdown"
                              data-bs-auto-close="outside"
                              data-dd-fixed=""
                              data-bs-offset="0,8"
                              aria-expanded="false"
                              aria-label="More actions for Projects"
                            >
                              <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                            </button>
                            {" "}
                            <ul
                              className="dropdown-menu dropdown-menu-end dropdown-menu-compact p-2"
                              aria-labelledby="fmCardMenu-fm-f4"
                            >
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="open">
                                  <i data-lucide="folder-open" aria-hidden="true" />
                                  Open
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="details">
                                  <i data-lucide="info" aria-hidden="true" />
                                  Details
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="download">
                                  <i data-lucide="download" aria-hidden="true" />
                                  Download
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="share">
                                  <i data-lucide="share-2" aria-hidden="true" />
                                  Share
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="rename">
                                  <i data-lucide="pencil" aria-hidden="true" />
                                  Rename
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="move">
                                  <i data-lucide="folder-input" aria-hidden="true" />
                                  Move to…
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="star">
                                  <i data-lucide="star" aria-hidden="true" />
                                  <span>
                                    <span className="" data-file-star-text-on="">
                                      Remove star
                                    </span>
                                    <span className="d-none" data-file-star-text-off="">
                                      Add star
                                    </span>
                                  </span>
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="dropdown-item dropdown-item-danger"
                                  data-file-action="delete"
                                >
                                  <i data-lucide="trash-2" aria-hidden="true" />
                                  Delete
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {" "}
                        <span
                          className="avatar-stack position-absolute bottom-0 start-0 m-2"
                          role="img"
                          aria-label="Shared with 12 people"
                        >
                          <span className="avatar avatar-xs">
                            <img src="/assets/images/avatar-3.png" width="28" height="28" alt="" />
                          </span>
                          <span className="avatar avatar-xs">
                            <img src="/assets/images/avatar-1.png" width="28" height="28" alt="" />
                          </span>
                          <span className="avatar avatar-xs">
                            <img src="/assets/images/avatar-4.png" width="28" height="28" alt="" />
                          </span>
                          <span className="avatar avatar-xs bg-cat-slate fs-xs">
                            +9
                          </span>
                        </span>
                        {" "}
                        <span className="badge-soft bg-glass text-cat-emerald position-absolute bottom-0 end-0 m-2 px-2 py-0 fs-xs">
                          <bdi>
                            212
                          </bdi>
                          {" "}
                          items
                        </span>
                      </div>
                      <div className="d-flex align-items-center gap-2 px-1 pb-1">
                        <span className="icon-box icon-box-sm tint-emerald flex-shrink-0" aria-hidden="true">
                          <i data-lucide="folder" />
                        </span>
                        <button
                          type="button"
                          data-file-open=""
                          className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                        >
                          <span className="d-block fs-md fw-semibold text-title text-truncate" data-file-label="">
                            Projects
                          </span>
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi>
                              4.8 GB
                            </bdi>
                            {" "}·{" "}
                            <bdi>
                              28 Aug 2026
                            </bdi>
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li
                    className="col"
                    data-file-card="fm-f5"
                    data-file-kind="folder"
                    data-file-type="folder"
                    data-file-cat="folders"
                    data-file-loc="myfiles"
                    data-file-name="Reports"
                    data-file-size="536870912"
                    data-file-size-label="512 MB"
                    data-file-modified="2026-08-24"
                    data-file-modified-label="24 Aug 2026"
                    data-file-created-label="8 Jan 2026"
                    data-file-owner="Priya Nair"
                    data-file-where="My Files"
                    data-file-type-label="Folder"
                    data-file-items="37"
                  >
                    <div
                      className="tile-plain hover-lift border-soft rounded-4 p-2 h-100 d-flex flex-column gap-2 transition-base"
                      data-file-tile=""
                    >
                      <div className="position-relative">
                        <button
                          type="button"
                          data-file-open=""
                          className="d-block w-100 p-0 border-0 bg-transparent"
                          aria-label="Open Reports"
                        >
                          <span className="d-block ratio ratio-16x9 rounded-3 overflow-hidden tint-amber">
                            {" "}
                            <span className="d-flex align-items-center justify-content-center">
                              <span className="icon-box icon-box-xl bg-glass shadow-sm" aria-hidden="true">
                                <i data-lucide="folder" />
                              </span>
                            </span>
                            {" "}
                          </span>
                        </button>
                        {" "}
                        <input
                          className="form-check-input position-absolute top-0 start-0 m-2"
                          type="checkbox"
                          data-file-pick=""
                          id="fmPickCard-fm-f5"
                          aria-label="Select Reports"
                        />
                        {" "}
                        <div className="position-absolute top-0 end-0 m-1 d-flex align-items-center rounded-pill bg-glass">
                          <button
                            type="button"
                            className="btn btn-ghost btn-18 rounded-circle flex-shrink-0"
                            data-file-star=""
                            aria-pressed="false"
                            aria-label="Star Reports"
                            title="Star"
                          >
                            <i
                              className="icon-16 text-cat-amber icon-fill d-none"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-on=""
                            />
                            {" "}
                            <i
                              className="icon-16 text-muted-2"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-off=""
                            />
                          </button>
                          <div className="dropdown flex-shrink-0">
                            <button
                              type="button"
                              className="btn btn-ghost btn-18 rounded-circle"
                              id="fmCardMenu-fm-f5"
                              data-bs-toggle="dropdown"
                              data-bs-auto-close="outside"
                              data-dd-fixed=""
                              data-bs-offset="0,8"
                              aria-expanded="false"
                              aria-label="More actions for Reports"
                            >
                              <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                            </button>
                            {" "}
                            <ul
                              className="dropdown-menu dropdown-menu-end dropdown-menu-compact p-2"
                              aria-labelledby="fmCardMenu-fm-f5"
                            >
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="open">
                                  <i data-lucide="folder-open" aria-hidden="true" />
                                  Open
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="details">
                                  <i data-lucide="info" aria-hidden="true" />
                                  Details
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="download">
                                  <i data-lucide="download" aria-hidden="true" />
                                  Download
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="share">
                                  <i data-lucide="share-2" aria-hidden="true" />
                                  Share
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="rename">
                                  <i data-lucide="pencil" aria-hidden="true" />
                                  Rename
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="move">
                                  <i data-lucide="folder-input" aria-hidden="true" />
                                  Move to…
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="star">
                                  <i data-lucide="star" aria-hidden="true" />
                                  <span>
                                    <span className="d-none" data-file-star-text-on="">
                                      Remove star
                                    </span>
                                    <span className="" data-file-star-text-off="">
                                      Add star
                                    </span>
                                  </span>
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="dropdown-item dropdown-item-danger"
                                  data-file-action="delete"
                                >
                                  <i data-lucide="trash-2" aria-hidden="true" />
                                  Delete
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {" "}
                        <span className="badge-soft bg-glass text-muted-2 position-absolute bottom-0 start-0 m-2 px-2 py-0 fs-xs d-inline-flex align-items-center gap-1">
                          {" "}
                          <i className="icon-12" data-lucide="lock" aria-hidden="true" />
                          Private
                          {" "}
                        </span>
                        {" "}
                        <span className="badge-soft bg-glass text-cat-amber position-absolute bottom-0 end-0 m-2 px-2 py-0 fs-xs">
                          <bdi>
                            37
                          </bdi>
                          {" "}
                          items
                        </span>
                      </div>
                      <div className="d-flex align-items-center gap-2 px-1 pb-1">
                        <span className="icon-box icon-box-sm tint-amber flex-shrink-0" aria-hidden="true">
                          <i data-lucide="folder" />
                        </span>
                        <button
                          type="button"
                          data-file-open=""
                          className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                        >
                          <span className="d-block fs-md fw-semibold text-title text-truncate" data-file-label="">
                            Reports
                          </span>
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi>
                              512 MB
                            </bdi>
                            {" "}·{" "}
                            <bdi>
                              24 Aug 2026
                            </bdi>
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li
                    className="col"
                    data-file-card="fm-f6"
                    data-file-kind="folder"
                    data-file-type="folder"
                    data-file-cat="folders"
                    data-file-loc="myfiles shared"
                    data-file-name="Presentations"
                    data-file-size="1717986918"
                    data-file-size-label="1.6 GB"
                    data-file-modified="2026-08-19"
                    data-file-modified-label="19 Aug 2026"
                    data-file-created-label="27 Feb 2026"
                    data-file-owner="Dev Sharma"
                    data-file-where="My Files"
                    data-file-type-label="Folder"
                    data-file-items="41"
                    data-file-shared=""
                    data-file-share-with="3 people"
                  >
                    <div
                      className="tile-plain hover-lift border-soft rounded-4 p-2 h-100 d-flex flex-column gap-2 transition-base"
                      data-file-tile=""
                    >
                      <div className="position-relative">
                        <button
                          type="button"
                          data-file-open=""
                          className="d-block w-100 p-0 border-0 bg-transparent"
                          aria-label="Open Presentations"
                        >
                          <span className="d-block ratio ratio-16x9 rounded-3 overflow-hidden tint-cyan">
                            {" "}
                            <span className="d-flex align-items-center justify-content-center">
                              <span className="icon-box icon-box-xl bg-glass shadow-sm" aria-hidden="true">
                                <i data-lucide="folder" />
                              </span>
                            </span>
                            {" "}
                          </span>
                        </button>
                        {" "}
                        <input
                          className="form-check-input position-absolute top-0 start-0 m-2"
                          type="checkbox"
                          data-file-pick=""
                          id="fmPickCard-fm-f6"
                          aria-label="Select Presentations"
                        />
                        {" "}
                        <div className="position-absolute top-0 end-0 m-1 d-flex align-items-center rounded-pill bg-glass">
                          <button
                            type="button"
                            className="btn btn-ghost btn-18 rounded-circle flex-shrink-0"
                            data-file-star=""
                            aria-pressed="false"
                            aria-label="Star Presentations"
                            title="Star"
                          >
                            <i
                              className="icon-16 text-cat-amber icon-fill d-none"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-on=""
                            />
                            {" "}
                            <i
                              className="icon-16 text-muted-2"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-off=""
                            />
                          </button>
                          <div className="dropdown flex-shrink-0">
                            <button
                              type="button"
                              className="btn btn-ghost btn-18 rounded-circle"
                              id="fmCardMenu-fm-f6"
                              data-bs-toggle="dropdown"
                              data-bs-auto-close="outside"
                              data-dd-fixed=""
                              data-bs-offset="0,8"
                              aria-expanded="false"
                              aria-label="More actions for Presentations"
                            >
                              <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                            </button>
                            {" "}
                            <ul
                              className="dropdown-menu dropdown-menu-end dropdown-menu-compact p-2"
                              aria-labelledby="fmCardMenu-fm-f6"
                            >
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="open">
                                  <i data-lucide="folder-open" aria-hidden="true" />
                                  Open
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="details">
                                  <i data-lucide="info" aria-hidden="true" />
                                  Details
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="download">
                                  <i data-lucide="download" aria-hidden="true" />
                                  Download
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="share">
                                  <i data-lucide="share-2" aria-hidden="true" />
                                  Share
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="rename">
                                  <i data-lucide="pencil" aria-hidden="true" />
                                  Rename
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="move">
                                  <i data-lucide="folder-input" aria-hidden="true" />
                                  Move to…
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="star">
                                  <i data-lucide="star" aria-hidden="true" />
                                  <span>
                                    <span className="d-none" data-file-star-text-on="">
                                      Remove star
                                    </span>
                                    <span className="" data-file-star-text-off="">
                                      Add star
                                    </span>
                                  </span>
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="dropdown-item dropdown-item-danger"
                                  data-file-action="delete"
                                >
                                  <i data-lucide="trash-2" aria-hidden="true" />
                                  Delete
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {" "}
                        <span
                          className="avatar-stack position-absolute bottom-0 start-0 m-2"
                          role="img"
                          aria-label="Shared with 3 people"
                        >
                          <span className="avatar avatar-xs">
                            <img src="/assets/images/avatar-4.png" width="28" height="28" alt="" />
                          </span>
                          <span className="avatar avatar-xs">
                            <img src="/assets/images/avatar-3.png" width="28" height="28" alt="" />
                          </span>
                          <span className="avatar avatar-xs">
                            <img src="/assets/images/avatar-2.png" width="28" height="28" alt="" />
                          </span>
                        </span>
                        {" "}
                        <span className="badge-soft bg-glass text-cat-cyan position-absolute bottom-0 end-0 m-2 px-2 py-0 fs-xs">
                          <bdi>
                            41
                          </bdi>
                          {" "}
                          items
                        </span>
                      </div>
                      <div className="d-flex align-items-center gap-2 px-1 pb-1">
                        <span className="icon-box icon-box-sm tint-cyan flex-shrink-0" aria-hidden="true">
                          <i data-lucide="folder" />
                        </span>
                        <button
                          type="button"
                          data-file-open=""
                          className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                        >
                          <span className="d-block fs-md fw-semibold text-title text-truncate" data-file-label="">
                            Presentations
                          </span>
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi>
                              1.6 GB
                            </bdi>
                            {" "}·{" "}
                            <bdi>
                              19 Aug 2026
                            </bdi>
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </section>
              <section aria-labelledby="fmFilesTitle" data-file-group="files">
                <h3 id="fmFilesTitle" className="fs-md fw-semibold text-uppercase text-muted-2 mb-2">
                  Files
                </h3>
                <ul className="list-unstyled row row-cols-1 row-cols-sm-2 row-cols-xxl-3 g-3 mb-0">
                  <li
                    className="col"
                    data-file-card="fm-1"
                    data-file-kind="file"
                    data-file-type="pdf"
                    data-file-cat="documents"
                    data-file-loc="myfiles recent starred shared"
                    data-file-name="Brand Guidelines.pdf"
                    data-file-size="4823449"
                    data-file-size-label="4.6 MB"
                    data-file-modified="2026-09-02"
                    data-file-modified-label="2 Sep 2026"
                    data-file-created-label="14 Aug 2026"
                    data-file-owner="Meera Iyer"
                    data-file-where="My Files / Design Assets"
                    data-file-type-label="PDF document"
                    data-file-starred=""
                    data-file-shared=""
                    data-file-share-with="8 people"
                  >
                    <div
                      className="tile-plain hover-lift border-soft rounded-4 p-2 h-100 d-flex flex-column gap-2 transition-base"
                      data-file-tile=""
                    >
                      <div className="position-relative">
                        <button
                          type="button"
                          data-file-open=""
                          className="d-block w-100 p-0 border-0 bg-transparent"
                          aria-label="Open Brand Guidelines.pdf"
                        >
                          <span className="d-block ratio ratio-16x9 rounded-3 overflow-hidden bg-soft">
                            {" "}
                            <span className="d-flex align-items-center justify-content-center">
                              <span className="icon-box icon-box-lg tint-rose" aria-hidden="true">
                                <i data-lucide="file-text" />
                              </span>
                            </span>
                            {" "}
                          </span>
                        </button>
                        {" "}
                        <input
                          className="form-check-input position-absolute top-0 start-0 m-2"
                          type="checkbox"
                          data-file-pick=""
                          id="fmPickCard-fm-1"
                          aria-label="Select Brand Guidelines.pdf"
                        />
                        {" "}
                        <div className="position-absolute top-0 end-0 m-1 d-flex align-items-center rounded-pill bg-glass">
                          <button
                            type="button"
                            className="btn btn-ghost btn-18 rounded-circle flex-shrink-0"
                            data-file-star=""
                            aria-pressed="true"
                            aria-label="Star Brand Guidelines.pdf"
                            title="Star"
                          >
                            <i
                              className="icon-16 text-cat-amber icon-fill"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-on=""
                            />
                            {" "}
                            <i
                              className="icon-16 text-muted-2 d-none"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-off=""
                            />
                          </button>
                          <div className="dropdown flex-shrink-0">
                            <button
                              type="button"
                              className="btn btn-ghost btn-18 rounded-circle"
                              id="fmCardMenu-fm-1"
                              data-bs-toggle="dropdown"
                              data-bs-auto-close="outside"
                              data-dd-fixed=""
                              data-bs-offset="0,8"
                              aria-expanded="false"
                              aria-label="More actions for Brand Guidelines.pdf"
                            >
                              <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                            </button>
                            {" "}
                            <ul
                              className="dropdown-menu dropdown-menu-end dropdown-menu-compact p-2"
                              aria-labelledby="fmCardMenu-fm-1"
                            >
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="open">
                                  <i data-lucide="external-link" aria-hidden="true" />
                                  Open
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="preview">
                                  <i data-lucide="eye" aria-hidden="true" />
                                  Preview
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="details">
                                  <i data-lucide="info" aria-hidden="true" />
                                  Details
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="download">
                                  <i data-lucide="download" aria-hidden="true" />
                                  Download
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="share">
                                  <i data-lucide="share-2" aria-hidden="true" />
                                  Share
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="rename">
                                  <i data-lucide="pencil" aria-hidden="true" />
                                  Rename
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="move">
                                  <i data-lucide="folder-input" aria-hidden="true" />
                                  Move to…
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="star">
                                  <i data-lucide="star" aria-hidden="true" />
                                  <span>
                                    <span className="" data-file-star-text-on="">
                                      Remove star
                                    </span>
                                    <span className="d-none" data-file-star-text-off="">
                                      Add star
                                    </span>
                                  </span>
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="dropdown-item dropdown-item-danger"
                                  data-file-action="delete"
                                >
                                  <i data-lucide="trash-2" aria-hidden="true" />
                                  Delete
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {" "}
                        <span className="badge-soft tint-rose position-absolute bottom-0 end-0 m-2 px-2 py-0 fs-xs text-uppercase">
                          pdf
                        </span>
                      </div>
                      <div className="d-flex align-items-center gap-2 px-1 pb-1">
                        <span className="icon-box icon-box-sm tint-rose flex-shrink-0" aria-hidden="true">
                          <i data-lucide="file-text" />
                        </span>
                        <button
                          type="button"
                          data-file-open=""
                          className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                        >
                          <span className="d-block fs-md fw-semibold text-title text-truncate" data-file-label="">
                            Brand Guidelines.pdf
                          </span>
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi>
                              4.6 MB
                            </bdi>
                            {" "}·{" "}
                            <bdi>
                              2 Sep 2026
                            </bdi>
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li
                    className="col"
                    data-file-card="fm-2"
                    data-file-kind="file"
                    data-file-type="xls"
                    data-file-cat="documents"
                    data-file-loc="myfiles recent shared"
                    data-file-name="Q3 Revenue Forecast.xlsx"
                    data-file-size="1887437"
                    data-file-size-label="1.8 MB"
                    data-file-modified="2026-09-01"
                    data-file-modified-label="1 Sep 2026"
                    data-file-created-label="21 Jul 2026"
                    data-file-owner="Priya Nair"
                    data-file-where="My Files / Reports"
                    data-file-type-label="Excel spreadsheet"
                    data-file-shared=""
                    data-file-share-with="4 people"
                  >
                    <div
                      className="tile-plain hover-lift border-soft rounded-4 p-2 h-100 d-flex flex-column gap-2 transition-base"
                      data-file-tile=""
                    >
                      <div className="position-relative">
                        <button
                          type="button"
                          data-file-open=""
                          className="d-block w-100 p-0 border-0 bg-transparent"
                          aria-label="Open Q3 Revenue Forecast.xlsx"
                        >
                          <span className="d-block ratio ratio-16x9 rounded-3 overflow-hidden bg-soft">
                            {" "}
                            <span className="d-flex align-items-center justify-content-center">
                              <span className="icon-box icon-box-lg tint-emerald" aria-hidden="true">
                                <i data-lucide="file-spreadsheet" />
                              </span>
                            </span>
                            {" "}
                          </span>
                        </button>
                        {" "}
                        <input
                          className="form-check-input position-absolute top-0 start-0 m-2"
                          type="checkbox"
                          data-file-pick=""
                          id="fmPickCard-fm-2"
                          aria-label="Select Q3 Revenue Forecast.xlsx"
                        />
                        {" "}
                        <div className="position-absolute top-0 end-0 m-1 d-flex align-items-center rounded-pill bg-glass">
                          <button
                            type="button"
                            className="btn btn-ghost btn-18 rounded-circle flex-shrink-0"
                            data-file-star=""
                            aria-pressed="false"
                            aria-label="Star Q3 Revenue Forecast.xlsx"
                            title="Star"
                          >
                            <i
                              className="icon-16 text-cat-amber icon-fill d-none"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-on=""
                            />
                            {" "}
                            <i
                              className="icon-16 text-muted-2"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-off=""
                            />
                          </button>
                          <div className="dropdown flex-shrink-0">
                            <button
                              type="button"
                              className="btn btn-ghost btn-18 rounded-circle"
                              id="fmCardMenu-fm-2"
                              data-bs-toggle="dropdown"
                              data-bs-auto-close="outside"
                              data-dd-fixed=""
                              data-bs-offset="0,8"
                              aria-expanded="false"
                              aria-label="More actions for Q3 Revenue Forecast.xlsx"
                            >
                              <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                            </button>
                            {" "}
                            <ul
                              className="dropdown-menu dropdown-menu-end dropdown-menu-compact p-2"
                              aria-labelledby="fmCardMenu-fm-2"
                            >
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="open">
                                  <i data-lucide="external-link" aria-hidden="true" />
                                  Open
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="preview">
                                  <i data-lucide="eye" aria-hidden="true" />
                                  Preview
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="details">
                                  <i data-lucide="info" aria-hidden="true" />
                                  Details
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="download">
                                  <i data-lucide="download" aria-hidden="true" />
                                  Download
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="share">
                                  <i data-lucide="share-2" aria-hidden="true" />
                                  Share
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="rename">
                                  <i data-lucide="pencil" aria-hidden="true" />
                                  Rename
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="move">
                                  <i data-lucide="folder-input" aria-hidden="true" />
                                  Move to…
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="star">
                                  <i data-lucide="star" aria-hidden="true" />
                                  <span>
                                    <span className="d-none" data-file-star-text-on="">
                                      Remove star
                                    </span>
                                    <span className="" data-file-star-text-off="">
                                      Add star
                                    </span>
                                  </span>
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="dropdown-item dropdown-item-danger"
                                  data-file-action="delete"
                                >
                                  <i data-lucide="trash-2" aria-hidden="true" />
                                  Delete
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {" "}
                        <span className="badge-soft tint-emerald position-absolute bottom-0 end-0 m-2 px-2 py-0 fs-xs text-uppercase">
                          xlsx
                        </span>
                      </div>
                      <div className="d-flex align-items-center gap-2 px-1 pb-1">
                        <span className="icon-box icon-box-sm tint-emerald flex-shrink-0" aria-hidden="true">
                          <i data-lucide="file-spreadsheet" />
                        </span>
                        <button
                          type="button"
                          data-file-open=""
                          className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                        >
                          <span className="d-block fs-md fw-semibold text-title text-truncate" data-file-label="">
                            Q3 Revenue Forecast.xlsx
                          </span>
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi>
                              1.8 MB
                            </bdi>
                            {" "}·{" "}
                            <bdi>
                              1 Sep 2026
                            </bdi>
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li
                    className="col"
                    data-file-card="fm-3"
                    data-file-kind="file"
                    data-file-type="ppt"
                    data-file-cat="documents"
                    data-file-loc="myfiles recent starred"
                    data-file-name="Investor Deck 2026.pptx"
                    data-file-size="19293798"
                    data-file-size-label="18.4 MB"
                    data-file-modified="2026-08-31"
                    data-file-modified-label="31 Aug 2026"
                    data-file-created-label="9 Jul 2026"
                    data-file-owner="Aarav Shah"
                    data-file-where="My Files / Presentations"
                    data-file-type-label="PowerPoint deck"
                    data-file-starred=""
                  >
                    <div
                      className="tile-plain hover-lift border-soft rounded-4 p-2 h-100 d-flex flex-column gap-2 transition-base"
                      data-file-tile=""
                    >
                      <div className="position-relative">
                        <button
                          type="button"
                          data-file-open=""
                          className="d-block w-100 p-0 border-0 bg-transparent"
                          aria-label="Open Investor Deck 2026.pptx"
                        >
                          <span className="d-block ratio ratio-16x9 rounded-3 overflow-hidden bg-soft">
                            {" "}
                            <span className="d-flex align-items-center justify-content-center">
                              <span className="icon-box icon-box-lg tint-orange" aria-hidden="true">
                                <i data-lucide="presentation" />
                              </span>
                            </span>
                            {" "}
                          </span>
                        </button>
                        {" "}
                        <input
                          className="form-check-input position-absolute top-0 start-0 m-2"
                          type="checkbox"
                          data-file-pick=""
                          id="fmPickCard-fm-3"
                          aria-label="Select Investor Deck 2026.pptx"
                        />
                        {" "}
                        <div className="position-absolute top-0 end-0 m-1 d-flex align-items-center rounded-pill bg-glass">
                          <button
                            type="button"
                            className="btn btn-ghost btn-18 rounded-circle flex-shrink-0"
                            data-file-star=""
                            aria-pressed="true"
                            aria-label="Star Investor Deck 2026.pptx"
                            title="Star"
                          >
                            <i
                              className="icon-16 text-cat-amber icon-fill"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-on=""
                            />
                            {" "}
                            <i
                              className="icon-16 text-muted-2 d-none"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-off=""
                            />
                          </button>
                          <div className="dropdown flex-shrink-0">
                            <button
                              type="button"
                              className="btn btn-ghost btn-18 rounded-circle"
                              id="fmCardMenu-fm-3"
                              data-bs-toggle="dropdown"
                              data-bs-auto-close="outside"
                              data-dd-fixed=""
                              data-bs-offset="0,8"
                              aria-expanded="false"
                              aria-label="More actions for Investor Deck 2026.pptx"
                            >
                              <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                            </button>
                            {" "}
                            <ul
                              className="dropdown-menu dropdown-menu-end dropdown-menu-compact p-2"
                              aria-labelledby="fmCardMenu-fm-3"
                            >
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="open">
                                  <i data-lucide="external-link" aria-hidden="true" />
                                  Open
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="preview">
                                  <i data-lucide="eye" aria-hidden="true" />
                                  Preview
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="details">
                                  <i data-lucide="info" aria-hidden="true" />
                                  Details
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="download">
                                  <i data-lucide="download" aria-hidden="true" />
                                  Download
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="share">
                                  <i data-lucide="share-2" aria-hidden="true" />
                                  Share
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="rename">
                                  <i data-lucide="pencil" aria-hidden="true" />
                                  Rename
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="move">
                                  <i data-lucide="folder-input" aria-hidden="true" />
                                  Move to…
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="star">
                                  <i data-lucide="star" aria-hidden="true" />
                                  <span>
                                    <span className="" data-file-star-text-on="">
                                      Remove star
                                    </span>
                                    <span className="d-none" data-file-star-text-off="">
                                      Add star
                                    </span>
                                  </span>
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="dropdown-item dropdown-item-danger"
                                  data-file-action="delete"
                                >
                                  <i data-lucide="trash-2" aria-hidden="true" />
                                  Delete
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {" "}
                        <span className="badge-soft tint-orange position-absolute bottom-0 end-0 m-2 px-2 py-0 fs-xs text-uppercase">
                          pptx
                        </span>
                      </div>
                      <div className="d-flex align-items-center gap-2 px-1 pb-1">
                        <span className="icon-box icon-box-sm tint-orange flex-shrink-0" aria-hidden="true">
                          <i data-lucide="presentation" />
                        </span>
                        <button
                          type="button"
                          data-file-open=""
                          className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                        >
                          <span className="d-block fs-md fw-semibold text-title text-truncate" data-file-label="">
                            Investor Deck 2026.pptx
                          </span>
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi>
                              18.4 MB
                            </bdi>
                            {" "}·{" "}
                            <bdi>
                              31 Aug 2026
                            </bdi>
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li
                    className="col"
                    data-file-card="fm-4"
                    data-file-kind="file"
                    data-file-type="doc"
                    data-file-cat="documents"
                    data-file-loc="myfiles recent"
                    data-file-name="Product Launch Brief.docx"
                    data-file-size="634880"
                    data-file-size-label="620 KB"
                    data-file-modified="2026-08-30"
                    data-file-modified-label="30 Aug 2026"
                    data-file-created-label="30 Jun 2026"
                    data-file-owner="Ravisha V"
                    data-file-where="My Files / Marketing"
                    data-file-type-label="Word document"
                  >
                    <div
                      className="tile-plain hover-lift border-soft rounded-4 p-2 h-100 d-flex flex-column gap-2 transition-base"
                      data-file-tile=""
                    >
                      <div className="position-relative">
                        <button
                          type="button"
                          data-file-open=""
                          className="d-block w-100 p-0 border-0 bg-transparent"
                          aria-label="Open Product Launch Brief.docx"
                        >
                          <span className="d-block ratio ratio-16x9 rounded-3 overflow-hidden bg-soft">
                            {" "}
                            <span className="d-flex align-items-center justify-content-center">
                              <span className="icon-box icon-box-lg tint-blue" aria-hidden="true">
                                <i data-lucide="file-text" />
                              </span>
                            </span>
                            {" "}
                          </span>
                        </button>
                        {" "}
                        <input
                          className="form-check-input position-absolute top-0 start-0 m-2"
                          type="checkbox"
                          data-file-pick=""
                          id="fmPickCard-fm-4"
                          aria-label="Select Product Launch Brief.docx"
                        />
                        {" "}
                        <div className="position-absolute top-0 end-0 m-1 d-flex align-items-center rounded-pill bg-glass">
                          <button
                            type="button"
                            className="btn btn-ghost btn-18 rounded-circle flex-shrink-0"
                            data-file-star=""
                            aria-pressed="false"
                            aria-label="Star Product Launch Brief.docx"
                            title="Star"
                          >
                            <i
                              className="icon-16 text-cat-amber icon-fill d-none"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-on=""
                            />
                            {" "}
                            <i
                              className="icon-16 text-muted-2"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-off=""
                            />
                          </button>
                          <div className="dropdown flex-shrink-0">
                            <button
                              type="button"
                              className="btn btn-ghost btn-18 rounded-circle"
                              id="fmCardMenu-fm-4"
                              data-bs-toggle="dropdown"
                              data-bs-auto-close="outside"
                              data-dd-fixed=""
                              data-bs-offset="0,8"
                              aria-expanded="false"
                              aria-label="More actions for Product Launch Brief.docx"
                            >
                              <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                            </button>
                            {" "}
                            <ul
                              className="dropdown-menu dropdown-menu-end dropdown-menu-compact p-2"
                              aria-labelledby="fmCardMenu-fm-4"
                            >
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="open">
                                  <i data-lucide="external-link" aria-hidden="true" />
                                  Open
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="preview">
                                  <i data-lucide="eye" aria-hidden="true" />
                                  Preview
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="details">
                                  <i data-lucide="info" aria-hidden="true" />
                                  Details
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="download">
                                  <i data-lucide="download" aria-hidden="true" />
                                  Download
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="share">
                                  <i data-lucide="share-2" aria-hidden="true" />
                                  Share
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="rename">
                                  <i data-lucide="pencil" aria-hidden="true" />
                                  Rename
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="move">
                                  <i data-lucide="folder-input" aria-hidden="true" />
                                  Move to…
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="star">
                                  <i data-lucide="star" aria-hidden="true" />
                                  <span>
                                    <span className="d-none" data-file-star-text-on="">
                                      Remove star
                                    </span>
                                    <span className="" data-file-star-text-off="">
                                      Add star
                                    </span>
                                  </span>
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="dropdown-item dropdown-item-danger"
                                  data-file-action="delete"
                                >
                                  <i data-lucide="trash-2" aria-hidden="true" />
                                  Delete
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {" "}
                        <span className="badge-soft tint-blue position-absolute bottom-0 end-0 m-2 px-2 py-0 fs-xs text-uppercase">
                          docx
                        </span>
                      </div>
                      <div className="d-flex align-items-center gap-2 px-1 pb-1">
                        <span className="icon-box icon-box-sm tint-blue flex-shrink-0" aria-hidden="true">
                          <i data-lucide="file-text" />
                        </span>
                        <button
                          type="button"
                          data-file-open=""
                          className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                        >
                          <span className="d-block fs-md fw-semibold text-title text-truncate" data-file-label="">
                            Product Launch Brief.docx
                          </span>
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi>
                              620 KB
                            </bdi>
                            {" "}·{" "}
                            <bdi>
                              30 Aug 2026
                            </bdi>
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li
                    className="col"
                    data-file-card="fm-5"
                    data-file-kind="file"
                    data-file-type="img"
                    data-file-cat="images"
                    data-file-loc="myfiles recent starred"
                    data-file-name="Autumn Campaign Hero.jpg"
                    data-file-size="3355443"
                    data-file-size-label="3.2 MB"
                    data-file-modified="2026-08-29"
                    data-file-modified-label="29 Aug 2026"
                    data-file-created-label="18 Aug 2026"
                    data-file-owner="Meera Iyer"
                    data-file-where="My Files / Marketing"
                    data-file-type-label="Image"
                    data-file-starred=""
                  >
                    <div
                      className="tile-plain hover-lift border-soft rounded-4 p-2 h-100 d-flex flex-column gap-2 transition-base"
                      data-file-tile=""
                    >
                      <div className="position-relative">
                        <button
                          type="button"
                          data-file-open=""
                          className="d-block w-100 p-0 border-0 bg-transparent"
                          aria-label="Open Autumn Campaign Hero.jpg"
                        >
                          <span className="d-block ratio ratio-16x9 rounded-3 overflow-hidden bg-soft">
                            {" "}
                            <img
                              src="/assets/images/inventory-1.jpg"
                              width="320"
                              height="180"
                              className="object-fit-cover"
                              alt=""
                              loading="lazy"
                            />
                            {" "}
                          </span>
                        </button>
                        {" "}
                        <input
                          className="form-check-input position-absolute top-0 start-0 m-2"
                          type="checkbox"
                          data-file-pick=""
                          id="fmPickCard-fm-5"
                          aria-label="Select Autumn Campaign Hero.jpg"
                        />
                        {" "}
                        <div className="position-absolute top-0 end-0 m-1 d-flex align-items-center rounded-pill bg-glass">
                          <button
                            type="button"
                            className="btn btn-ghost btn-18 rounded-circle flex-shrink-0"
                            data-file-star=""
                            aria-pressed="true"
                            aria-label="Star Autumn Campaign Hero.jpg"
                            title="Star"
                          >
                            <i
                              className="icon-16 text-cat-amber icon-fill"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-on=""
                            />
                            {" "}
                            <i
                              className="icon-16 text-muted-2 d-none"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-off=""
                            />
                          </button>
                          <div className="dropdown flex-shrink-0">
                            <button
                              type="button"
                              className="btn btn-ghost btn-18 rounded-circle"
                              id="fmCardMenu-fm-5"
                              data-bs-toggle="dropdown"
                              data-bs-auto-close="outside"
                              data-dd-fixed=""
                              data-bs-offset="0,8"
                              aria-expanded="false"
                              aria-label="More actions for Autumn Campaign Hero.jpg"
                            >
                              <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                            </button>
                            {" "}
                            <ul
                              className="dropdown-menu dropdown-menu-end dropdown-menu-compact p-2"
                              aria-labelledby="fmCardMenu-fm-5"
                            >
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="open">
                                  <i data-lucide="external-link" aria-hidden="true" />
                                  Open
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="preview">
                                  <i data-lucide="eye" aria-hidden="true" />
                                  Preview
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="details">
                                  <i data-lucide="info" aria-hidden="true" />
                                  Details
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="download">
                                  <i data-lucide="download" aria-hidden="true" />
                                  Download
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="share">
                                  <i data-lucide="share-2" aria-hidden="true" />
                                  Share
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="rename">
                                  <i data-lucide="pencil" aria-hidden="true" />
                                  Rename
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="move">
                                  <i data-lucide="folder-input" aria-hidden="true" />
                                  Move to…
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="star">
                                  <i data-lucide="star" aria-hidden="true" />
                                  <span>
                                    <span className="" data-file-star-text-on="">
                                      Remove star
                                    </span>
                                    <span className="d-none" data-file-star-text-off="">
                                      Add star
                                    </span>
                                  </span>
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="dropdown-item dropdown-item-danger"
                                  data-file-action="delete"
                                >
                                  <i data-lucide="trash-2" aria-hidden="true" />
                                  Delete
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {" "}
                        <span className="badge-soft tint-violet position-absolute bottom-0 end-0 m-2 px-2 py-0 fs-xs text-uppercase">
                          jpg
                        </span>
                      </div>
                      <div className="d-flex align-items-center gap-2 px-1 pb-1">
                        <span className="icon-box icon-box-sm tint-violet flex-shrink-0" aria-hidden="true">
                          <i data-lucide="image" />
                        </span>
                        <button
                          type="button"
                          data-file-open=""
                          className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                        >
                          <span className="d-block fs-md fw-semibold text-title text-truncate" data-file-label="">
                            Autumn Campaign Hero.jpg
                          </span>
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi>
                              3.2 MB
                            </bdi>
                            {" "}·{" "}
                            <bdi>
                              29 Aug 2026
                            </bdi>
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li
                    className="col"
                    data-file-card="fm-6"
                    data-file-kind="file"
                    data-file-type="img"
                    data-file-cat="images"
                    data-file-loc="myfiles recent"
                    data-file-name="Studio Lookbook.png"
                    data-file-size="5976883"
                    data-file-size-label="5.7 MB"
                    data-file-modified="2026-08-29"
                    data-file-modified-label="29 Aug 2026"
                    data-file-created-label="17 Aug 2026"
                    data-file-owner="Nisha Bose"
                    data-file-where="My Files / Design Assets"
                    data-file-type-label="Image"
                  >
                    <div
                      className="tile-plain hover-lift border-soft rounded-4 p-2 h-100 d-flex flex-column gap-2 transition-base"
                      data-file-tile=""
                    >
                      <div className="position-relative">
                        <button
                          type="button"
                          data-file-open=""
                          className="d-block w-100 p-0 border-0 bg-transparent"
                          aria-label="Open Studio Lookbook.png"
                        >
                          <span className="d-block ratio ratio-16x9 rounded-3 overflow-hidden bg-soft">
                            {" "}
                            <img
                              src="/assets/images/product-1.jpg"
                              width="320"
                              height="180"
                              className="object-fit-cover"
                              alt=""
                              loading="lazy"
                            />
                            {" "}
                          </span>
                        </button>
                        {" "}
                        <input
                          className="form-check-input position-absolute top-0 start-0 m-2"
                          type="checkbox"
                          data-file-pick=""
                          id="fmPickCard-fm-6"
                          aria-label="Select Studio Lookbook.png"
                        />
                        {" "}
                        <div className="position-absolute top-0 end-0 m-1 d-flex align-items-center rounded-pill bg-glass">
                          <button
                            type="button"
                            className="btn btn-ghost btn-18 rounded-circle flex-shrink-0"
                            data-file-star=""
                            aria-pressed="false"
                            aria-label="Star Studio Lookbook.png"
                            title="Star"
                          >
                            <i
                              className="icon-16 text-cat-amber icon-fill d-none"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-on=""
                            />
                            {" "}
                            <i
                              className="icon-16 text-muted-2"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-off=""
                            />
                          </button>
                          <div className="dropdown flex-shrink-0">
                            <button
                              type="button"
                              className="btn btn-ghost btn-18 rounded-circle"
                              id="fmCardMenu-fm-6"
                              data-bs-toggle="dropdown"
                              data-bs-auto-close="outside"
                              data-dd-fixed=""
                              data-bs-offset="0,8"
                              aria-expanded="false"
                              aria-label="More actions for Studio Lookbook.png"
                            >
                              <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                            </button>
                            {" "}
                            <ul
                              className="dropdown-menu dropdown-menu-end dropdown-menu-compact p-2"
                              aria-labelledby="fmCardMenu-fm-6"
                            >
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="open">
                                  <i data-lucide="external-link" aria-hidden="true" />
                                  Open
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="preview">
                                  <i data-lucide="eye" aria-hidden="true" />
                                  Preview
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="details">
                                  <i data-lucide="info" aria-hidden="true" />
                                  Details
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="download">
                                  <i data-lucide="download" aria-hidden="true" />
                                  Download
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="share">
                                  <i data-lucide="share-2" aria-hidden="true" />
                                  Share
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="rename">
                                  <i data-lucide="pencil" aria-hidden="true" />
                                  Rename
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="move">
                                  <i data-lucide="folder-input" aria-hidden="true" />
                                  Move to…
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="star">
                                  <i data-lucide="star" aria-hidden="true" />
                                  <span>
                                    <span className="d-none" data-file-star-text-on="">
                                      Remove star
                                    </span>
                                    <span className="" data-file-star-text-off="">
                                      Add star
                                    </span>
                                  </span>
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="dropdown-item dropdown-item-danger"
                                  data-file-action="delete"
                                >
                                  <i data-lucide="trash-2" aria-hidden="true" />
                                  Delete
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {" "}
                        <span className="badge-soft tint-violet position-absolute bottom-0 end-0 m-2 px-2 py-0 fs-xs text-uppercase">
                          png
                        </span>
                      </div>
                      <div className="d-flex align-items-center gap-2 px-1 pb-1">
                        <span className="icon-box icon-box-sm tint-violet flex-shrink-0" aria-hidden="true">
                          <i data-lucide="image" />
                        </span>
                        <button
                          type="button"
                          data-file-open=""
                          className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                        >
                          <span className="d-block fs-md fw-semibold text-title text-truncate" data-file-label="">
                            Studio Lookbook.png
                          </span>
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi>
                              5.7 MB
                            </bdi>
                            {" "}·{" "}
                            <bdi>
                              29 Aug 2026
                            </bdi>
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li
                    className="col"
                    data-file-card="fm-7"
                    data-file-kind="file"
                    data-file-type="video"
                    data-file-cat="videos"
                    data-file-loc="myfiles shared"
                    data-file-name="Onboarding Walkthrough.mp4"
                    data-file-size="155189248"
                    data-file-size-label="148 MB"
                    data-file-modified="2026-08-27"
                    data-file-modified-label="27 Aug 2026"
                    data-file-created-label="12 Aug 2026"
                    data-file-owner="Dev Sharma"
                    data-file-where="My Files / Projects"
                    data-file-type-label="Video"
                    data-file-shared=""
                    data-file-share-with="6 people"
                  >
                    <div
                      className="tile-plain hover-lift border-soft rounded-4 p-2 h-100 d-flex flex-column gap-2 transition-base"
                      data-file-tile=""
                    >
                      <div className="position-relative">
                        <button
                          type="button"
                          data-file-open=""
                          className="d-block w-100 p-0 border-0 bg-transparent"
                          aria-label="Open Onboarding Walkthrough.mp4"
                        >
                          <span className="d-block ratio ratio-16x9 rounded-3 overflow-hidden bg-soft">
                            {" "}
                            <img
                              src="/assets/images/product-3.jpg"
                              width="320"
                              height="180"
                              className="object-fit-cover"
                              alt=""
                              loading="lazy"
                            />
                            {" "}
                          </span>
                        </button>
                        {" "}
                        <input
                          className="form-check-input position-absolute top-0 start-0 m-2"
                          type="checkbox"
                          data-file-pick=""
                          id="fmPickCard-fm-7"
                          aria-label="Select Onboarding Walkthrough.mp4"
                        />
                        {" "}
                        <div className="position-absolute top-0 end-0 m-1 d-flex align-items-center rounded-pill bg-glass">
                          <button
                            type="button"
                            className="btn btn-ghost btn-18 rounded-circle flex-shrink-0"
                            data-file-star=""
                            aria-pressed="false"
                            aria-label="Star Onboarding Walkthrough.mp4"
                            title="Star"
                          >
                            <i
                              className="icon-16 text-cat-amber icon-fill d-none"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-on=""
                            />
                            {" "}
                            <i
                              className="icon-16 text-muted-2"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-off=""
                            />
                          </button>
                          <div className="dropdown flex-shrink-0">
                            <button
                              type="button"
                              className="btn btn-ghost btn-18 rounded-circle"
                              id="fmCardMenu-fm-7"
                              data-bs-toggle="dropdown"
                              data-bs-auto-close="outside"
                              data-dd-fixed=""
                              data-bs-offset="0,8"
                              aria-expanded="false"
                              aria-label="More actions for Onboarding Walkthrough.mp4"
                            >
                              <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                            </button>
                            {" "}
                            <ul
                              className="dropdown-menu dropdown-menu-end dropdown-menu-compact p-2"
                              aria-labelledby="fmCardMenu-fm-7"
                            >
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="open">
                                  <i data-lucide="external-link" aria-hidden="true" />
                                  Open
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="preview">
                                  <i data-lucide="eye" aria-hidden="true" />
                                  Preview
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="details">
                                  <i data-lucide="info" aria-hidden="true" />
                                  Details
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="download">
                                  <i data-lucide="download" aria-hidden="true" />
                                  Download
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="share">
                                  <i data-lucide="share-2" aria-hidden="true" />
                                  Share
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="rename">
                                  <i data-lucide="pencil" aria-hidden="true" />
                                  Rename
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="move">
                                  <i data-lucide="folder-input" aria-hidden="true" />
                                  Move to…
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="star">
                                  <i data-lucide="star" aria-hidden="true" />
                                  <span>
                                    <span className="d-none" data-file-star-text-on="">
                                      Remove star
                                    </span>
                                    <span className="" data-file-star-text-off="">
                                      Add star
                                    </span>
                                  </span>
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="dropdown-item dropdown-item-danger"
                                  data-file-action="delete"
                                >
                                  <i data-lucide="trash-2" aria-hidden="true" />
                                  Delete
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {" "}
                        <span className="badge-soft tint-magenta position-absolute bottom-0 end-0 m-2 px-2 py-0 fs-xs text-uppercase">
                          mp4
                        </span>
                      </div>
                      <div className="d-flex align-items-center gap-2 px-1 pb-1">
                        <span className="icon-box icon-box-sm tint-magenta flex-shrink-0" aria-hidden="true">
                          <i data-lucide="file-video" />
                        </span>
                        <button
                          type="button"
                          data-file-open=""
                          className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                        >
                          <span className="d-block fs-md fw-semibold text-title text-truncate" data-file-label="">
                            Onboarding Walkthrough.mp4
                          </span>
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi>
                              148 MB
                            </bdi>
                            {" "}·{" "}
                            <bdi>
                              27 Aug 2026
                            </bdi>
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li
                    className="col"
                    data-file-card="fm-8"
                    data-file-kind="file"
                    data-file-type="zip"
                    data-file-cat="archives"
                    data-file-loc="myfiles"
                    data-file-name="Design System Archive.zip"
                    data-file-size="100977868"
                    data-file-size-label="96.3 MB"
                    data-file-modified="2026-08-26"
                    data-file-modified-label="26 Aug 2026"
                    data-file-created-label="26 Aug 2026"
                    data-file-owner="Kabir Nair"
                    data-file-where="My Files / Design Assets"
                    data-file-type-label="Archive"
                  >
                    <div
                      className="tile-plain hover-lift border-soft rounded-4 p-2 h-100 d-flex flex-column gap-2 transition-base"
                      data-file-tile=""
                    >
                      <div className="position-relative">
                        <button
                          type="button"
                          data-file-open=""
                          className="d-block w-100 p-0 border-0 bg-transparent"
                          aria-label="Open Design System Archive.zip"
                        >
                          <span className="d-block ratio ratio-16x9 rounded-3 overflow-hidden bg-soft">
                            {" "}
                            <span className="d-flex align-items-center justify-content-center">
                              <span className="icon-box icon-box-lg tint-amber" aria-hidden="true">
                                <i data-lucide="file-archive" />
                              </span>
                            </span>
                            {" "}
                          </span>
                        </button>
                        {" "}
                        <input
                          className="form-check-input position-absolute top-0 start-0 m-2"
                          type="checkbox"
                          data-file-pick=""
                          id="fmPickCard-fm-8"
                          aria-label="Select Design System Archive.zip"
                        />
                        {" "}
                        <div className="position-absolute top-0 end-0 m-1 d-flex align-items-center rounded-pill bg-glass">
                          <button
                            type="button"
                            className="btn btn-ghost btn-18 rounded-circle flex-shrink-0"
                            data-file-star=""
                            aria-pressed="false"
                            aria-label="Star Design System Archive.zip"
                            title="Star"
                          >
                            <i
                              className="icon-16 text-cat-amber icon-fill d-none"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-on=""
                            />
                            {" "}
                            <i
                              className="icon-16 text-muted-2"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-off=""
                            />
                          </button>
                          <div className="dropdown flex-shrink-0">
                            <button
                              type="button"
                              className="btn btn-ghost btn-18 rounded-circle"
                              id="fmCardMenu-fm-8"
                              data-bs-toggle="dropdown"
                              data-bs-auto-close="outside"
                              data-dd-fixed=""
                              data-bs-offset="0,8"
                              aria-expanded="false"
                              aria-label="More actions for Design System Archive.zip"
                            >
                              <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                            </button>
                            {" "}
                            <ul
                              className="dropdown-menu dropdown-menu-end dropdown-menu-compact p-2"
                              aria-labelledby="fmCardMenu-fm-8"
                            >
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="open">
                                  <i data-lucide="external-link" aria-hidden="true" />
                                  Open
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="preview">
                                  <i data-lucide="eye" aria-hidden="true" />
                                  Preview
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="details">
                                  <i data-lucide="info" aria-hidden="true" />
                                  Details
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="download">
                                  <i data-lucide="download" aria-hidden="true" />
                                  Download
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="share">
                                  <i data-lucide="share-2" aria-hidden="true" />
                                  Share
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="rename">
                                  <i data-lucide="pencil" aria-hidden="true" />
                                  Rename
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="move">
                                  <i data-lucide="folder-input" aria-hidden="true" />
                                  Move to…
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="star">
                                  <i data-lucide="star" aria-hidden="true" />
                                  <span>
                                    <span className="d-none" data-file-star-text-on="">
                                      Remove star
                                    </span>
                                    <span className="" data-file-star-text-off="">
                                      Add star
                                    </span>
                                  </span>
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="dropdown-item dropdown-item-danger"
                                  data-file-action="delete"
                                >
                                  <i data-lucide="trash-2" aria-hidden="true" />
                                  Delete
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {" "}
                        <span className="badge-soft tint-amber position-absolute bottom-0 end-0 m-2 px-2 py-0 fs-xs text-uppercase">
                          zip
                        </span>
                      </div>
                      <div className="d-flex align-items-center gap-2 px-1 pb-1">
                        <span className="icon-box icon-box-sm tint-amber flex-shrink-0" aria-hidden="true">
                          <i data-lucide="file-archive" />
                        </span>
                        <button
                          type="button"
                          data-file-open=""
                          className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                        >
                          <span className="d-block fs-md fw-semibold text-title text-truncate" data-file-label="">
                            Design System Archive.zip
                          </span>
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi>
                              96.3 MB
                            </bdi>
                            {" "}·{" "}
                            <bdi>
                              26 Aug 2026
                            </bdi>
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li
                    className="col"
                    data-file-card="fm-9"
                    data-file-kind="file"
                    data-file-type="txt"
                    data-file-cat="documents"
                    data-file-loc="myfiles"
                    data-file-name="Release Notes v4.2.txt"
                    data-file-size="12288"
                    data-file-size-label="12 KB"
                    data-file-modified="2026-08-25"
                    data-file-modified-label="25 Aug 2026"
                    data-file-created-label="25 Aug 2026"
                    data-file-owner="Kabir Nair"
                    data-file-where="My Files / Projects"
                    data-file-type-label="Text file"
                  >
                    <div
                      className="tile-plain hover-lift border-soft rounded-4 p-2 h-100 d-flex flex-column gap-2 transition-base"
                      data-file-tile=""
                    >
                      <div className="position-relative">
                        <button
                          type="button"
                          data-file-open=""
                          className="d-block w-100 p-0 border-0 bg-transparent"
                          aria-label="Open Release Notes v4.2.txt"
                        >
                          <span className="d-block ratio ratio-16x9 rounded-3 overflow-hidden bg-soft">
                            {" "}
                            <span className="d-flex align-items-center justify-content-center">
                              <span className="icon-box icon-box-lg tint-slate" aria-hidden="true">
                                <i data-lucide="file-text" />
                              </span>
                            </span>
                            {" "}
                          </span>
                        </button>
                        {" "}
                        <input
                          className="form-check-input position-absolute top-0 start-0 m-2"
                          type="checkbox"
                          data-file-pick=""
                          id="fmPickCard-fm-9"
                          aria-label="Select Release Notes v4.2.txt"
                        />
                        {" "}
                        <div className="position-absolute top-0 end-0 m-1 d-flex align-items-center rounded-pill bg-glass">
                          <button
                            type="button"
                            className="btn btn-ghost btn-18 rounded-circle flex-shrink-0"
                            data-file-star=""
                            aria-pressed="false"
                            aria-label="Star Release Notes v4.2.txt"
                            title="Star"
                          >
                            <i
                              className="icon-16 text-cat-amber icon-fill d-none"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-on=""
                            />
                            {" "}
                            <i
                              className="icon-16 text-muted-2"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-off=""
                            />
                          </button>
                          <div className="dropdown flex-shrink-0">
                            <button
                              type="button"
                              className="btn btn-ghost btn-18 rounded-circle"
                              id="fmCardMenu-fm-9"
                              data-bs-toggle="dropdown"
                              data-bs-auto-close="outside"
                              data-dd-fixed=""
                              data-bs-offset="0,8"
                              aria-expanded="false"
                              aria-label="More actions for Release Notes v4.2.txt"
                            >
                              <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                            </button>
                            {" "}
                            <ul
                              className="dropdown-menu dropdown-menu-end dropdown-menu-compact p-2"
                              aria-labelledby="fmCardMenu-fm-9"
                            >
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="open">
                                  <i data-lucide="external-link" aria-hidden="true" />
                                  Open
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="preview">
                                  <i data-lucide="eye" aria-hidden="true" />
                                  Preview
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="details">
                                  <i data-lucide="info" aria-hidden="true" />
                                  Details
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="download">
                                  <i data-lucide="download" aria-hidden="true" />
                                  Download
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="share">
                                  <i data-lucide="share-2" aria-hidden="true" />
                                  Share
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="rename">
                                  <i data-lucide="pencil" aria-hidden="true" />
                                  Rename
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="move">
                                  <i data-lucide="folder-input" aria-hidden="true" />
                                  Move to…
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="star">
                                  <i data-lucide="star" aria-hidden="true" />
                                  <span>
                                    <span className="d-none" data-file-star-text-on="">
                                      Remove star
                                    </span>
                                    <span className="" data-file-star-text-off="">
                                      Add star
                                    </span>
                                  </span>
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="dropdown-item dropdown-item-danger"
                                  data-file-action="delete"
                                >
                                  <i data-lucide="trash-2" aria-hidden="true" />
                                  Delete
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {" "}
                        <span className="badge-soft tint-slate position-absolute bottom-0 end-0 m-2 px-2 py-0 fs-xs text-uppercase">
                          txt
                        </span>
                      </div>
                      <div className="d-flex align-items-center gap-2 px-1 pb-1">
                        <span className="icon-box icon-box-sm tint-slate flex-shrink-0" aria-hidden="true">
                          <i data-lucide="file-text" />
                        </span>
                        <button
                          type="button"
                          data-file-open=""
                          className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                        >
                          <span className="d-block fs-md fw-semibold text-title text-truncate" data-file-label="">
                            Release Notes v4.2.txt
                          </span>
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi>
                              12 KB
                            </bdi>
                            {" "}·{" "}
                            <bdi>
                              25 Aug 2026
                            </bdi>
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li
                    className="col"
                    data-file-card="fm-10"
                    data-file-kind="file"
                    data-file-type="audio"
                    data-file-cat="audio"
                    data-file-loc="myfiles"
                    data-file-name="Podcast Episode 14.mp3"
                    data-file-size="44145049"
                    data-file-size-label="42.1 MB"
                    data-file-modified="2026-08-23"
                    data-file-modified-label="23 Aug 2026"
                    data-file-created-label="23 Aug 2026"
                    data-file-owner="Nisha Bose"
                    data-file-where="My Files / Marketing"
                    data-file-type-label="Audio"
                  >
                    <div
                      className="tile-plain hover-lift border-soft rounded-4 p-2 h-100 d-flex flex-column gap-2 transition-base"
                      data-file-tile=""
                    >
                      <div className="position-relative">
                        <button
                          type="button"
                          data-file-open=""
                          className="d-block w-100 p-0 border-0 bg-transparent"
                          aria-label="Open Podcast Episode 14.mp3"
                        >
                          <span className="d-block ratio ratio-16x9 rounded-3 overflow-hidden bg-soft">
                            {" "}
                            <span className="d-flex align-items-center justify-content-center">
                              <span className="icon-box icon-box-lg tint-cyan" aria-hidden="true">
                                <i data-lucide="file-audio" />
                              </span>
                            </span>
                            {" "}
                          </span>
                        </button>
                        {" "}
                        <input
                          className="form-check-input position-absolute top-0 start-0 m-2"
                          type="checkbox"
                          data-file-pick=""
                          id="fmPickCard-fm-10"
                          aria-label="Select Podcast Episode 14.mp3"
                        />
                        {" "}
                        <div className="position-absolute top-0 end-0 m-1 d-flex align-items-center rounded-pill bg-glass">
                          <button
                            type="button"
                            className="btn btn-ghost btn-18 rounded-circle flex-shrink-0"
                            data-file-star=""
                            aria-pressed="false"
                            aria-label="Star Podcast Episode 14.mp3"
                            title="Star"
                          >
                            <i
                              className="icon-16 text-cat-amber icon-fill d-none"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-on=""
                            />
                            {" "}
                            <i
                              className="icon-16 text-muted-2"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-off=""
                            />
                          </button>
                          <div className="dropdown flex-shrink-0">
                            <button
                              type="button"
                              className="btn btn-ghost btn-18 rounded-circle"
                              id="fmCardMenu-fm-10"
                              data-bs-toggle="dropdown"
                              data-bs-auto-close="outside"
                              data-dd-fixed=""
                              data-bs-offset="0,8"
                              aria-expanded="false"
                              aria-label="More actions for Podcast Episode 14.mp3"
                            >
                              <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                            </button>
                            {" "}
                            <ul
                              className="dropdown-menu dropdown-menu-end dropdown-menu-compact p-2"
                              aria-labelledby="fmCardMenu-fm-10"
                            >
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="open">
                                  <i data-lucide="external-link" aria-hidden="true" />
                                  Open
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="preview">
                                  <i data-lucide="eye" aria-hidden="true" />
                                  Preview
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="details">
                                  <i data-lucide="info" aria-hidden="true" />
                                  Details
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="download">
                                  <i data-lucide="download" aria-hidden="true" />
                                  Download
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="share">
                                  <i data-lucide="share-2" aria-hidden="true" />
                                  Share
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="rename">
                                  <i data-lucide="pencil" aria-hidden="true" />
                                  Rename
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="move">
                                  <i data-lucide="folder-input" aria-hidden="true" />
                                  Move to…
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="star">
                                  <i data-lucide="star" aria-hidden="true" />
                                  <span>
                                    <span className="d-none" data-file-star-text-on="">
                                      Remove star
                                    </span>
                                    <span className="" data-file-star-text-off="">
                                      Add star
                                    </span>
                                  </span>
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="dropdown-item dropdown-item-danger"
                                  data-file-action="delete"
                                >
                                  <i data-lucide="trash-2" aria-hidden="true" />
                                  Delete
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {" "}
                        <span className="badge-soft tint-cyan position-absolute bottom-0 end-0 m-2 px-2 py-0 fs-xs text-uppercase">
                          mp3
                        </span>
                      </div>
                      <div className="d-flex align-items-center gap-2 px-1 pb-1">
                        <span className="icon-box icon-box-sm tint-cyan flex-shrink-0" aria-hidden="true">
                          <i data-lucide="file-audio" />
                        </span>
                        <button
                          type="button"
                          data-file-open=""
                          className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                        >
                          <span className="d-block fs-md fw-semibold text-title text-truncate" data-file-label="">
                            Podcast Episode 14.mp3
                          </span>
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi>
                              42.1 MB
                            </bdi>
                            {" "}·{" "}
                            <bdi>
                              23 Aug 2026
                            </bdi>
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li
                    className="col"
                    data-file-card="fm-11"
                    data-file-kind="file"
                    data-file-type="img"
                    data-file-cat="images"
                    data-file-loc="myfiles"
                    data-file-name="Storefront Mockup.jpg"
                    data-file-size="3040870"
                    data-file-size-label="2.9 MB"
                    data-file-modified="2026-08-22"
                    data-file-modified-label="22 Aug 2026"
                    data-file-created-label="20 Aug 2026"
                    data-file-owner="Meera Iyer"
                    data-file-where="My Files / Design Assets"
                    data-file-type-label="Image"
                  >
                    <div
                      className="tile-plain hover-lift border-soft rounded-4 p-2 h-100 d-flex flex-column gap-2 transition-base"
                      data-file-tile=""
                    >
                      <div className="position-relative">
                        <button
                          type="button"
                          data-file-open=""
                          className="d-block w-100 p-0 border-0 bg-transparent"
                          aria-label="Open Storefront Mockup.jpg"
                        >
                          <span className="d-block ratio ratio-16x9 rounded-3 overflow-hidden bg-soft">
                            {" "}
                            <img
                              src="/assets/images/product-2.jpg"
                              width="320"
                              height="180"
                              className="object-fit-cover"
                              alt=""
                              loading="lazy"
                            />
                            {" "}
                          </span>
                        </button>
                        {" "}
                        <input
                          className="form-check-input position-absolute top-0 start-0 m-2"
                          type="checkbox"
                          data-file-pick=""
                          id="fmPickCard-fm-11"
                          aria-label="Select Storefront Mockup.jpg"
                        />
                        {" "}
                        <div className="position-absolute top-0 end-0 m-1 d-flex align-items-center rounded-pill bg-glass">
                          <button
                            type="button"
                            className="btn btn-ghost btn-18 rounded-circle flex-shrink-0"
                            data-file-star=""
                            aria-pressed="false"
                            aria-label="Star Storefront Mockup.jpg"
                            title="Star"
                          >
                            <i
                              className="icon-16 text-cat-amber icon-fill d-none"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-on=""
                            />
                            {" "}
                            <i
                              className="icon-16 text-muted-2"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-off=""
                            />
                          </button>
                          <div className="dropdown flex-shrink-0">
                            <button
                              type="button"
                              className="btn btn-ghost btn-18 rounded-circle"
                              id="fmCardMenu-fm-11"
                              data-bs-toggle="dropdown"
                              data-bs-auto-close="outside"
                              data-dd-fixed=""
                              data-bs-offset="0,8"
                              aria-expanded="false"
                              aria-label="More actions for Storefront Mockup.jpg"
                            >
                              <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                            </button>
                            {" "}
                            <ul
                              className="dropdown-menu dropdown-menu-end dropdown-menu-compact p-2"
                              aria-labelledby="fmCardMenu-fm-11"
                            >
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="open">
                                  <i data-lucide="external-link" aria-hidden="true" />
                                  Open
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="preview">
                                  <i data-lucide="eye" aria-hidden="true" />
                                  Preview
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="details">
                                  <i data-lucide="info" aria-hidden="true" />
                                  Details
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="download">
                                  <i data-lucide="download" aria-hidden="true" />
                                  Download
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="share">
                                  <i data-lucide="share-2" aria-hidden="true" />
                                  Share
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="rename">
                                  <i data-lucide="pencil" aria-hidden="true" />
                                  Rename
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="move">
                                  <i data-lucide="folder-input" aria-hidden="true" />
                                  Move to…
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="star">
                                  <i data-lucide="star" aria-hidden="true" />
                                  <span>
                                    <span className="d-none" data-file-star-text-on="">
                                      Remove star
                                    </span>
                                    <span className="" data-file-star-text-off="">
                                      Add star
                                    </span>
                                  </span>
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="dropdown-item dropdown-item-danger"
                                  data-file-action="delete"
                                >
                                  <i data-lucide="trash-2" aria-hidden="true" />
                                  Delete
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {" "}
                        <span className="badge-soft tint-violet position-absolute bottom-0 end-0 m-2 px-2 py-0 fs-xs text-uppercase">
                          jpg
                        </span>
                      </div>
                      <div className="d-flex align-items-center gap-2 px-1 pb-1">
                        <span className="icon-box icon-box-sm tint-violet flex-shrink-0" aria-hidden="true">
                          <i data-lucide="image" />
                        </span>
                        <button
                          type="button"
                          data-file-open=""
                          className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                        >
                          <span className="d-block fs-md fw-semibold text-title text-truncate" data-file-label="">
                            Storefront Mockup.jpg
                          </span>
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi>
                              2.9 MB
                            </bdi>
                            {" "}·{" "}
                            <bdi>
                              22 Aug 2026
                            </bdi>
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li
                    className="col"
                    data-file-card="fm-12"
                    data-file-kind="file"
                    data-file-type="pdf"
                    data-file-cat="documents"
                    data-file-loc="myfiles shared"
                    data-file-name="Annual Report 2025.pdf"
                    data-file-size="9856614"
                    data-file-size-label="9.4 MB"
                    data-file-modified="2026-08-20"
                    data-file-modified-label="20 Aug 2026"
                    data-file-created-label="3 Feb 2026"
                    data-file-owner="Priya Nair"
                    data-file-where="My Files / Reports"
                    data-file-type-label="PDF document"
                    data-file-shared=""
                    data-file-share-with="11 people"
                  >
                    <div
                      className="tile-plain hover-lift border-soft rounded-4 p-2 h-100 d-flex flex-column gap-2 transition-base"
                      data-file-tile=""
                    >
                      <div className="position-relative">
                        <button
                          type="button"
                          data-file-open=""
                          className="d-block w-100 p-0 border-0 bg-transparent"
                          aria-label="Open Annual Report 2025.pdf"
                        >
                          <span className="d-block ratio ratio-16x9 rounded-3 overflow-hidden bg-soft">
                            {" "}
                            <span className="d-flex align-items-center justify-content-center">
                              <span className="icon-box icon-box-lg tint-rose" aria-hidden="true">
                                <i data-lucide="file-text" />
                              </span>
                            </span>
                            {" "}
                          </span>
                        </button>
                        {" "}
                        <input
                          className="form-check-input position-absolute top-0 start-0 m-2"
                          type="checkbox"
                          data-file-pick=""
                          id="fmPickCard-fm-12"
                          aria-label="Select Annual Report 2025.pdf"
                        />
                        {" "}
                        <div className="position-absolute top-0 end-0 m-1 d-flex align-items-center rounded-pill bg-glass">
                          <button
                            type="button"
                            className="btn btn-ghost btn-18 rounded-circle flex-shrink-0"
                            data-file-star=""
                            aria-pressed="false"
                            aria-label="Star Annual Report 2025.pdf"
                            title="Star"
                          >
                            <i
                              className="icon-16 text-cat-amber icon-fill d-none"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-on=""
                            />
                            {" "}
                            <i
                              className="icon-16 text-muted-2"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-off=""
                            />
                          </button>
                          <div className="dropdown flex-shrink-0">
                            <button
                              type="button"
                              className="btn btn-ghost btn-18 rounded-circle"
                              id="fmCardMenu-fm-12"
                              data-bs-toggle="dropdown"
                              data-bs-auto-close="outside"
                              data-dd-fixed=""
                              data-bs-offset="0,8"
                              aria-expanded="false"
                              aria-label="More actions for Annual Report 2025.pdf"
                            >
                              <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                            </button>
                            {" "}
                            <ul
                              className="dropdown-menu dropdown-menu-end dropdown-menu-compact p-2"
                              aria-labelledby="fmCardMenu-fm-12"
                            >
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="open">
                                  <i data-lucide="external-link" aria-hidden="true" />
                                  Open
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="preview">
                                  <i data-lucide="eye" aria-hidden="true" />
                                  Preview
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="details">
                                  <i data-lucide="info" aria-hidden="true" />
                                  Details
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="download">
                                  <i data-lucide="download" aria-hidden="true" />
                                  Download
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="share">
                                  <i data-lucide="share-2" aria-hidden="true" />
                                  Share
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="rename">
                                  <i data-lucide="pencil" aria-hidden="true" />
                                  Rename
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="move">
                                  <i data-lucide="folder-input" aria-hidden="true" />
                                  Move to…
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="star">
                                  <i data-lucide="star" aria-hidden="true" />
                                  <span>
                                    <span className="d-none" data-file-star-text-on="">
                                      Remove star
                                    </span>
                                    <span className="" data-file-star-text-off="">
                                      Add star
                                    </span>
                                  </span>
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="dropdown-item dropdown-item-danger"
                                  data-file-action="delete"
                                >
                                  <i data-lucide="trash-2" aria-hidden="true" />
                                  Delete
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {" "}
                        <span className="badge-soft tint-rose position-absolute bottom-0 end-0 m-2 px-2 py-0 fs-xs text-uppercase">
                          pdf
                        </span>
                      </div>
                      <div className="d-flex align-items-center gap-2 px-1 pb-1">
                        <span className="icon-box icon-box-sm tint-rose flex-shrink-0" aria-hidden="true">
                          <i data-lucide="file-text" />
                        </span>
                        <button
                          type="button"
                          data-file-open=""
                          className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                        >
                          <span className="d-block fs-md fw-semibold text-title text-truncate" data-file-label="">
                            Annual Report 2025.pdf
                          </span>
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi>
                              9.4 MB
                            </bdi>
                            {" "}·{" "}
                            <bdi>
                              20 Aug 2026
                            </bdi>
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li
                    className="col"
                    data-file-card="fm-13"
                    data-file-kind="file"
                    data-file-type="video"
                    data-file-cat="videos"
                    data-file-loc="myfiles starred"
                    data-file-name="Feature Demo Reel.mp4"
                    data-file-size="222298112"
                    data-file-size-label="212 MB"
                    data-file-modified="2026-08-18"
                    data-file-modified-label="18 Aug 2026"
                    data-file-created-label="16 Aug 2026"
                    data-file-owner="Dev Sharma"
                    data-file-where="My Files / Projects"
                    data-file-type-label="Video"
                    data-file-starred=""
                  >
                    <div
                      className="tile-plain hover-lift border-soft rounded-4 p-2 h-100 d-flex flex-column gap-2 transition-base"
                      data-file-tile=""
                    >
                      <div className="position-relative">
                        <button
                          type="button"
                          data-file-open=""
                          className="d-block w-100 p-0 border-0 bg-transparent"
                          aria-label="Open Feature Demo Reel.mp4"
                        >
                          <span className="d-block ratio ratio-16x9 rounded-3 overflow-hidden bg-soft">
                            {" "}
                            <img
                              src="/assets/images/inventory-4.jpg"
                              width="320"
                              height="180"
                              className="object-fit-cover"
                              alt=""
                              loading="lazy"
                            />
                            {" "}
                          </span>
                        </button>
                        {" "}
                        <input
                          className="form-check-input position-absolute top-0 start-0 m-2"
                          type="checkbox"
                          data-file-pick=""
                          id="fmPickCard-fm-13"
                          aria-label="Select Feature Demo Reel.mp4"
                        />
                        {" "}
                        <div className="position-absolute top-0 end-0 m-1 d-flex align-items-center rounded-pill bg-glass">
                          <button
                            type="button"
                            className="btn btn-ghost btn-18 rounded-circle flex-shrink-0"
                            data-file-star=""
                            aria-pressed="true"
                            aria-label="Star Feature Demo Reel.mp4"
                            title="Star"
                          >
                            <i
                              className="icon-16 text-cat-amber icon-fill"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-on=""
                            />
                            {" "}
                            <i
                              className="icon-16 text-muted-2 d-none"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-off=""
                            />
                          </button>
                          <div className="dropdown flex-shrink-0">
                            <button
                              type="button"
                              className="btn btn-ghost btn-18 rounded-circle"
                              id="fmCardMenu-fm-13"
                              data-bs-toggle="dropdown"
                              data-bs-auto-close="outside"
                              data-dd-fixed=""
                              data-bs-offset="0,8"
                              aria-expanded="false"
                              aria-label="More actions for Feature Demo Reel.mp4"
                            >
                              <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                            </button>
                            {" "}
                            <ul
                              className="dropdown-menu dropdown-menu-end dropdown-menu-compact p-2"
                              aria-labelledby="fmCardMenu-fm-13"
                            >
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="open">
                                  <i data-lucide="external-link" aria-hidden="true" />
                                  Open
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="preview">
                                  <i data-lucide="eye" aria-hidden="true" />
                                  Preview
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="details">
                                  <i data-lucide="info" aria-hidden="true" />
                                  Details
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="download">
                                  <i data-lucide="download" aria-hidden="true" />
                                  Download
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="share">
                                  <i data-lucide="share-2" aria-hidden="true" />
                                  Share
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="rename">
                                  <i data-lucide="pencil" aria-hidden="true" />
                                  Rename
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="move">
                                  <i data-lucide="folder-input" aria-hidden="true" />
                                  Move to…
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="star">
                                  <i data-lucide="star" aria-hidden="true" />
                                  <span>
                                    <span className="" data-file-star-text-on="">
                                      Remove star
                                    </span>
                                    <span className="d-none" data-file-star-text-off="">
                                      Add star
                                    </span>
                                  </span>
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="dropdown-item dropdown-item-danger"
                                  data-file-action="delete"
                                >
                                  <i data-lucide="trash-2" aria-hidden="true" />
                                  Delete
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {" "}
                        <span className="badge-soft tint-magenta position-absolute bottom-0 end-0 m-2 px-2 py-0 fs-xs text-uppercase">
                          mp4
                        </span>
                      </div>
                      <div className="d-flex align-items-center gap-2 px-1 pb-1">
                        <span className="icon-box icon-box-sm tint-magenta flex-shrink-0" aria-hidden="true">
                          <i data-lucide="file-video" />
                        </span>
                        <button
                          type="button"
                          data-file-open=""
                          className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                        >
                          <span className="d-block fs-md fw-semibold text-title text-truncate" data-file-label="">
                            Feature Demo Reel.mp4
                          </span>
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi>
                              212 MB
                            </bdi>
                            {" "}·{" "}
                            <bdi>
                              18 Aug 2026
                            </bdi>
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li
                    className="col"
                    data-file-card="fm-14"
                    data-file-kind="file"
                    data-file-type="zip"
                    data-file-cat="archives"
                    data-file-loc="myfiles"
                    data-file-name="Legacy Assets Backup.zip"
                    data-file-size="1181116006"
                    data-file-size-label="1.1 GB"
                    data-file-modified="2026-08-15"
                    data-file-modified-label="15 Aug 2026"
                    data-file-created-label="15 Aug 2026"
                    data-file-owner="Kabir Nair"
                    data-file-where="My Files / Projects"
                    data-file-type-label="Archive"
                  >
                    <div
                      className="tile-plain hover-lift border-soft rounded-4 p-2 h-100 d-flex flex-column gap-2 transition-base"
                      data-file-tile=""
                    >
                      <div className="position-relative">
                        <button
                          type="button"
                          data-file-open=""
                          className="d-block w-100 p-0 border-0 bg-transparent"
                          aria-label="Open Legacy Assets Backup.zip"
                        >
                          <span className="d-block ratio ratio-16x9 rounded-3 overflow-hidden bg-soft">
                            {" "}
                            <span className="d-flex align-items-center justify-content-center">
                              <span className="icon-box icon-box-lg tint-amber" aria-hidden="true">
                                <i data-lucide="file-archive" />
                              </span>
                            </span>
                            {" "}
                          </span>
                        </button>
                        {" "}
                        <input
                          className="form-check-input position-absolute top-0 start-0 m-2"
                          type="checkbox"
                          data-file-pick=""
                          id="fmPickCard-fm-14"
                          aria-label="Select Legacy Assets Backup.zip"
                        />
                        {" "}
                        <div className="position-absolute top-0 end-0 m-1 d-flex align-items-center rounded-pill bg-glass">
                          <button
                            type="button"
                            className="btn btn-ghost btn-18 rounded-circle flex-shrink-0"
                            data-file-star=""
                            aria-pressed="false"
                            aria-label="Star Legacy Assets Backup.zip"
                            title="Star"
                          >
                            <i
                              className="icon-16 text-cat-amber icon-fill d-none"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-on=""
                            />
                            {" "}
                            <i
                              className="icon-16 text-muted-2"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-off=""
                            />
                          </button>
                          <div className="dropdown flex-shrink-0">
                            <button
                              type="button"
                              className="btn btn-ghost btn-18 rounded-circle"
                              id="fmCardMenu-fm-14"
                              data-bs-toggle="dropdown"
                              data-bs-auto-close="outside"
                              data-dd-fixed=""
                              data-bs-offset="0,8"
                              aria-expanded="false"
                              aria-label="More actions for Legacy Assets Backup.zip"
                            >
                              <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                            </button>
                            {" "}
                            <ul
                              className="dropdown-menu dropdown-menu-end dropdown-menu-compact p-2"
                              aria-labelledby="fmCardMenu-fm-14"
                            >
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="open">
                                  <i data-lucide="external-link" aria-hidden="true" />
                                  Open
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="preview">
                                  <i data-lucide="eye" aria-hidden="true" />
                                  Preview
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="details">
                                  <i data-lucide="info" aria-hidden="true" />
                                  Details
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="download">
                                  <i data-lucide="download" aria-hidden="true" />
                                  Download
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="share">
                                  <i data-lucide="share-2" aria-hidden="true" />
                                  Share
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="rename">
                                  <i data-lucide="pencil" aria-hidden="true" />
                                  Rename
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="move">
                                  <i data-lucide="folder-input" aria-hidden="true" />
                                  Move to…
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="star">
                                  <i data-lucide="star" aria-hidden="true" />
                                  <span>
                                    <span className="d-none" data-file-star-text-on="">
                                      Remove star
                                    </span>
                                    <span className="" data-file-star-text-off="">
                                      Add star
                                    </span>
                                  </span>
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="dropdown-item dropdown-item-danger"
                                  data-file-action="delete"
                                >
                                  <i data-lucide="trash-2" aria-hidden="true" />
                                  Delete
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {" "}
                        <span className="badge-soft tint-amber position-absolute bottom-0 end-0 m-2 px-2 py-0 fs-xs text-uppercase">
                          zip
                        </span>
                      </div>
                      <div className="d-flex align-items-center gap-2 px-1 pb-1">
                        <span className="icon-box icon-box-sm tint-amber flex-shrink-0" aria-hidden="true">
                          <i data-lucide="file-archive" />
                        </span>
                        <button
                          type="button"
                          data-file-open=""
                          className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                        >
                          <span className="d-block fs-md fw-semibold text-title text-truncate" data-file-label="">
                            Legacy Assets Backup.zip
                          </span>
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi>
                              1.1 GB
                            </bdi>
                            {" "}·{" "}
                            <bdi>
                              15 Aug 2026
                            </bdi>
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li
                    className="col d-none"
                    data-file-card="fm-t1"
                    data-file-kind="file"
                    data-file-type="doc"
                    data-file-cat="documents"
                    data-file-loc="trash"
                    data-file-name="Old Pricing Sheet.docx"
                    data-file-size="249856"
                    data-file-size-label="244 KB"
                    data-file-modified="2026-08-11"
                    data-file-modified-label="11 Aug 2026"
                    data-file-created-label="2 May 2026"
                    data-file-owner="Ravisha V"
                    data-file-where="Trash"
                    data-file-type-label="Word document"
                  >
                    <div
                      className="tile-plain hover-lift border-soft rounded-4 p-2 h-100 d-flex flex-column gap-2 transition-base"
                      data-file-tile=""
                    >
                      <div className="position-relative">
                        <button
                          type="button"
                          data-file-open=""
                          className="d-block w-100 p-0 border-0 bg-transparent"
                          aria-label="Open Old Pricing Sheet.docx"
                        >
                          <span className="d-block ratio ratio-16x9 rounded-3 overflow-hidden bg-soft">
                            {" "}
                            <span className="d-flex align-items-center justify-content-center">
                              <span className="icon-box icon-box-lg tint-blue" aria-hidden="true">
                                <i data-lucide="file-text" />
                              </span>
                            </span>
                            {" "}
                          </span>
                        </button>
                        {" "}
                        <input
                          className="form-check-input position-absolute top-0 start-0 m-2"
                          type="checkbox"
                          data-file-pick=""
                          id="fmPickCard-fm-t1"
                          aria-label="Select Old Pricing Sheet.docx"
                        />
                        {" "}
                        <div className="position-absolute top-0 end-0 m-1 d-flex align-items-center rounded-pill bg-glass">
                          <button
                            type="button"
                            className="btn btn-ghost btn-18 rounded-circle flex-shrink-0"
                            data-file-star=""
                            aria-pressed="false"
                            aria-label="Star Old Pricing Sheet.docx"
                            title="Star"
                          >
                            <i
                              className="icon-16 text-cat-amber icon-fill d-none"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-on=""
                            />
                            {" "}
                            <i
                              className="icon-16 text-muted-2"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-off=""
                            />
                          </button>
                          <div className="dropdown flex-shrink-0">
                            <button
                              type="button"
                              className="btn btn-ghost btn-18 rounded-circle"
                              id="fmCardMenu-fm-t1"
                              data-bs-toggle="dropdown"
                              data-bs-auto-close="outside"
                              data-dd-fixed=""
                              data-bs-offset="0,8"
                              aria-expanded="false"
                              aria-label="More actions for Old Pricing Sheet.docx"
                            >
                              <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                            </button>
                            {" "}
                            <ul
                              className="dropdown-menu dropdown-menu-end dropdown-menu-compact p-2"
                              aria-labelledby="fmCardMenu-fm-t1"
                            >
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="open">
                                  <i data-lucide="external-link" aria-hidden="true" />
                                  Open
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="preview">
                                  <i data-lucide="eye" aria-hidden="true" />
                                  Preview
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="details">
                                  <i data-lucide="info" aria-hidden="true" />
                                  Details
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="download">
                                  <i data-lucide="download" aria-hidden="true" />
                                  Download
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="share">
                                  <i data-lucide="share-2" aria-hidden="true" />
                                  Share
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="rename">
                                  <i data-lucide="pencil" aria-hidden="true" />
                                  Rename
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="move">
                                  <i data-lucide="folder-input" aria-hidden="true" />
                                  Move to…
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="star">
                                  <i data-lucide="star" aria-hidden="true" />
                                  <span>
                                    <span className="d-none" data-file-star-text-on="">
                                      Remove star
                                    </span>
                                    <span className="" data-file-star-text-off="">
                                      Add star
                                    </span>
                                  </span>
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="dropdown-item dropdown-item-danger"
                                  data-file-action="delete"
                                >
                                  <i data-lucide="trash-2" aria-hidden="true" />
                                  Delete
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {" "}
                        <span className="badge-soft tint-blue position-absolute bottom-0 end-0 m-2 px-2 py-0 fs-xs text-uppercase">
                          docx
                        </span>
                      </div>
                      <div className="d-flex align-items-center gap-2 px-1 pb-1">
                        <span className="icon-box icon-box-sm tint-blue flex-shrink-0" aria-hidden="true">
                          <i data-lucide="file-text" />
                        </span>
                        <button
                          type="button"
                          data-file-open=""
                          className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                        >
                          <span className="d-block fs-md fw-semibold text-title text-truncate" data-file-label="">
                            Old Pricing Sheet.docx
                          </span>
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi>
                              244 KB
                            </bdi>
                            {" "}·{" "}
                            <bdi>
                              11 Aug 2026
                            </bdi>
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li
                    className="col d-none"
                    data-file-card="fm-t2"
                    data-file-kind="file"
                    data-file-type="img"
                    data-file-cat="images"
                    data-file-loc="trash"
                    data-file-name="Deprecated Logo.png"
                    data-file-size="831488"
                    data-file-size-label="812 KB"
                    data-file-modified="2026-08-06"
                    data-file-modified-label="6 Aug 2026"
                    data-file-created-label="9 Jan 2026"
                    data-file-owner="Meera Iyer"
                    data-file-where="Trash"
                    data-file-type-label="Image"
                  >
                    <div
                      className="tile-plain hover-lift border-soft rounded-4 p-2 h-100 d-flex flex-column gap-2 transition-base"
                      data-file-tile=""
                    >
                      <div className="position-relative">
                        <button
                          type="button"
                          data-file-open=""
                          className="d-block w-100 p-0 border-0 bg-transparent"
                          aria-label="Open Deprecated Logo.png"
                        >
                          <span className="d-block ratio ratio-16x9 rounded-3 overflow-hidden bg-soft">
                            {" "}
                            <img
                              src="/assets/images/inventory-7.jpg"
                              width="320"
                              height="180"
                              className="object-fit-cover"
                              alt=""
                              loading="lazy"
                            />
                            {" "}
                          </span>
                        </button>
                        {" "}
                        <input
                          className="form-check-input position-absolute top-0 start-0 m-2"
                          type="checkbox"
                          data-file-pick=""
                          id="fmPickCard-fm-t2"
                          aria-label="Select Deprecated Logo.png"
                        />
                        {" "}
                        <div className="position-absolute top-0 end-0 m-1 d-flex align-items-center rounded-pill bg-glass">
                          <button
                            type="button"
                            className="btn btn-ghost btn-18 rounded-circle flex-shrink-0"
                            data-file-star=""
                            aria-pressed="false"
                            aria-label="Star Deprecated Logo.png"
                            title="Star"
                          >
                            <i
                              className="icon-16 text-cat-amber icon-fill d-none"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-on=""
                            />
                            {" "}
                            <i
                              className="icon-16 text-muted-2"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-off=""
                            />
                          </button>
                          <div className="dropdown flex-shrink-0">
                            <button
                              type="button"
                              className="btn btn-ghost btn-18 rounded-circle"
                              id="fmCardMenu-fm-t2"
                              data-bs-toggle="dropdown"
                              data-bs-auto-close="outside"
                              data-dd-fixed=""
                              data-bs-offset="0,8"
                              aria-expanded="false"
                              aria-label="More actions for Deprecated Logo.png"
                            >
                              <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                            </button>
                            {" "}
                            <ul
                              className="dropdown-menu dropdown-menu-end dropdown-menu-compact p-2"
                              aria-labelledby="fmCardMenu-fm-t2"
                            >
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="open">
                                  <i data-lucide="external-link" aria-hidden="true" />
                                  Open
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="preview">
                                  <i data-lucide="eye" aria-hidden="true" />
                                  Preview
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="details">
                                  <i data-lucide="info" aria-hidden="true" />
                                  Details
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="download">
                                  <i data-lucide="download" aria-hidden="true" />
                                  Download
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="share">
                                  <i data-lucide="share-2" aria-hidden="true" />
                                  Share
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="rename">
                                  <i data-lucide="pencil" aria-hidden="true" />
                                  Rename
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="move">
                                  <i data-lucide="folder-input" aria-hidden="true" />
                                  Move to…
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="star">
                                  <i data-lucide="star" aria-hidden="true" />
                                  <span>
                                    <span className="d-none" data-file-star-text-on="">
                                      Remove star
                                    </span>
                                    <span className="" data-file-star-text-off="">
                                      Add star
                                    </span>
                                  </span>
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="dropdown-item dropdown-item-danger"
                                  data-file-action="delete"
                                >
                                  <i data-lucide="trash-2" aria-hidden="true" />
                                  Delete
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {" "}
                        <span className="badge-soft tint-violet position-absolute bottom-0 end-0 m-2 px-2 py-0 fs-xs text-uppercase">
                          png
                        </span>
                      </div>
                      <div className="d-flex align-items-center gap-2 px-1 pb-1">
                        <span className="icon-box icon-box-sm tint-violet flex-shrink-0" aria-hidden="true">
                          <i data-lucide="image" />
                        </span>
                        <button
                          type="button"
                          data-file-open=""
                          className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                        >
                          <span className="d-block fs-md fw-semibold text-title text-truncate" data-file-label="">
                            Deprecated Logo.png
                          </span>
                          <span className="d-block fs-xs text-muted-2 text-truncate">
                            <bdi>
                              812 KB
                            </bdi>
                            {" "}·{" "}
                            <bdi>
                              6 Aug 2026
                            </bdi>
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </section>
              <div className="d-none text-center px-3 py-5" data-file-empty="grid">
                <span className="notif-empty-icon" aria-hidden="true">
                  <i data-lucide="search-x" />
                </span>
                <p className="fw-semibold text-title mt-2 mb-1">
                  Nothing to show here
                </p>
                <p className="fs-md text-body-2 mb-3">
                  No file or folder matches this location, search or filter.
                </p>
                <button type="button" className="btn btn-outline-soft btn-sm" data-file-action="reset">
                  Reset filters
                </button>
              </div>
            </div>
          </div>
          {/* ===== List view ===== */}
          <div className="d-flex flex-column flex-fill min-h-0 d-none" data-view-panel="list">
            <div className="flex-fill min-h-0 overflow-y-auto scrollbar-thin">
              <div className="table-responsive">
                <table className="table table-sm align-middle mb-0">
                  <caption className="visually-hidden">
                    Files and folders in the current location
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col" className="ps-3">
                        <input
                          className="form-check-input mt-0"
                          type="checkbox"
                          id="fmPickAll"
                          data-file-pick-all=""
                          aria-label="Select every file and folder shown"
                        />
                      </th>
                      <th scope="col">
                        Name
                      </th>
                      <th scope="col" className="d-none d-xl-table-cell">
                        Owner
                      </th>
                      <th scope="col" className="d-none d-lg-table-cell">
                        Size
                      </th>
                      <th scope="col" className="d-none d-md-table-cell">
                        Modified
                      </th>
                      <th scope="col" className="text-end pe-3">
                        <span className="visually-hidden">
                          Actions
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody data-file-tbody="">
                    <tr
                      className=""
                      data-file-row="fm-f1"
                      data-file-kind="folder"
                      data-file-type="folder"
                      data-file-cat="folders"
                      data-file-loc="myfiles recent starred shared"
                      data-file-name="Design Assets"
                      data-file-size="2576980378"
                      data-file-size-label="2.4 GB"
                      data-file-modified="2026-09-02"
                      data-file-modified-label="2 Sep 2026"
                      data-file-created-label="11 Jun 2026"
                      data-file-owner="Meera Iyer"
                      data-file-where="My Files"
                      data-file-type-label="Folder"
                      data-file-items="128"
                      data-file-starred=""
                      data-file-shared=""
                      data-file-share-with="8 people"
                    >
                      <td className="ps-3">
                        <input
                          className="form-check-input mt-0"
                          type="checkbox"
                          data-file-pick=""
                          id="fmPickRow-fm-f1"
                          aria-label="Select Design Assets"
                        />
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-2 gap-md-3">
                          <span className="icon-box icon-box-sm tint-violet flex-shrink-0" aria-hidden="true">
                            <i data-lucide="folder" />
                          </span>
                          <button
                            type="button"
                            data-file-open=""
                            className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                          >
                            <span className="d-block fs-md fw-semibold text-title text-truncate" data-file-label="">
                              Design Assets
                            </span>
                            <span className="d-block fs-xs text-muted-2 text-truncate d-lg-none">
                              <bdi>
                                2.4 GB
                              </bdi>
                              {" "}·{" "}
                              <bdi>
                                2 Sep 2026
                              </bdi>
                            </span>
                            <span className="d-none d-lg-block fs-xs text-muted-2 text-truncate">
                              <bdi>
                                128 items
                              </bdi>
                            </span>
                          </button>
                          <i
                            className="icon-14 text-muted-2 flex-shrink-0 d-none d-sm-inline"
                            data-lucide="users"
                            role="img"
                            aria-label="Shared"
                            title="Shared"
                          />
                        </div>
                      </td>
                      <td className="d-none d-xl-table-cell">
                        <div className="d-flex align-items-center gap-2">
                          <span
                            className="avatar avatar-xs flex-shrink-0"
                            role="img"
                            aria-label="Owner Meera Iyer"
                            title="Meera Iyer"
                          >
                            <img src="/assets/images/avatar-2.png" width="28" height="28" alt="" />
                          </span>
                          <span className="fs-md text-body-2 text-truncate">
                            Meera Iyer
                          </span>
                        </div>
                      </td>
                      <td className="d-none d-lg-table-cell fs-md text-body-2 text-nowrap">
                        <bdi>
                          2.4 GB
                        </bdi>
                      </td>
                      <td className="d-none d-md-table-cell fs-md text-body-2 text-nowrap">
                        <bdi>
                          2 Sep 2026
                        </bdi>
                      </td>
                      <td className="text-end pe-3">
                        <div className="d-flex align-items-center justify-content-end gap-1">
                          <button
                            type="button"
                            className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 d-none d-sm-inline-flex"
                            data-file-star=""
                            aria-pressed="true"
                            aria-label="Star Design Assets"
                            title="Star"
                          >
                            <i
                              className="icon-16 text-cat-amber icon-fill"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-on=""
                            />
                            {" "}
                            <i
                              className="icon-16 text-muted-2 d-none"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-off=""
                            />
                          </button>
                          <div className="dropdown flex-shrink-0">
                            <button
                              type="button"
                              className="btn btn-ghost btn-18 rounded-circle"
                              id="fmRowMenu-fm-f1"
                              data-bs-toggle="dropdown"
                              data-bs-auto-close="outside"
                              data-dd-fixed=""
                              data-bs-offset="0,8"
                              aria-expanded="false"
                              aria-label="More actions for Design Assets"
                            >
                              <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                            </button>
                            {" "}
                            <ul
                              className="dropdown-menu dropdown-menu-end dropdown-menu-compact p-2"
                              aria-labelledby="fmRowMenu-fm-f1"
                            >
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="open">
                                  <i data-lucide="folder-open" aria-hidden="true" />
                                  Open
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="details">
                                  <i data-lucide="info" aria-hidden="true" />
                                  Details
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="download">
                                  <i data-lucide="download" aria-hidden="true" />
                                  Download
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="share">
                                  <i data-lucide="share-2" aria-hidden="true" />
                                  Share
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="rename">
                                  <i data-lucide="pencil" aria-hidden="true" />
                                  Rename
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="move">
                                  <i data-lucide="folder-input" aria-hidden="true" />
                                  Move to…
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="star">
                                  <i data-lucide="star" aria-hidden="true" />
                                  <span>
                                    <span className="" data-file-star-text-on="">
                                      Remove star
                                    </span>
                                    <span className="d-none" data-file-star-text-off="">
                                      Add star
                                    </span>
                                  </span>
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="dropdown-item dropdown-item-danger"
                                  data-file-action="delete"
                                >
                                  <i data-lucide="trash-2" aria-hidden="true" />
                                  Delete
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr
                      className=""
                      data-file-row="fm-f2"
                      data-file-kind="folder"
                      data-file-type="folder"
                      data-file-cat="folders"
                      data-file-loc="myfiles recent"
                      data-file-name="Documents"
                      data-file-size="985661440"
                      data-file-size-label="940 MB"
                      data-file-modified="2026-09-01"
                      data-file-modified-label="1 Sep 2026"
                      data-file-created-label="4 Mar 2026"
                      data-file-owner="Ravisha V"
                      data-file-where="My Files"
                      data-file-type-label="Folder"
                      data-file-items="86"
                    >
                      <td className="ps-3">
                        <input
                          className="form-check-input mt-0"
                          type="checkbox"
                          data-file-pick=""
                          id="fmPickRow-fm-f2"
                          aria-label="Select Documents"
                        />
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-2 gap-md-3">
                          <span className="icon-box icon-box-sm tint-blue flex-shrink-0" aria-hidden="true">
                            <i data-lucide="folder" />
                          </span>
                          <button
                            type="button"
                            data-file-open=""
                            className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                          >
                            <span className="d-block fs-md fw-semibold text-title text-truncate" data-file-label="">
                              Documents
                            </span>
                            <span className="d-block fs-xs text-muted-2 text-truncate d-lg-none">
                              <bdi>
                                940 MB
                              </bdi>
                              {" "}·{" "}
                              <bdi>
                                1 Sep 2026
                              </bdi>
                            </span>
                            <span className="d-none d-lg-block fs-xs text-muted-2 text-truncate">
                              <bdi>
                                86 items
                              </bdi>
                            </span>
                          </button>
                        </div>
                      </td>
                      <td className="d-none d-xl-table-cell">
                        <div className="d-flex align-items-center gap-2">
                          <span
                            className="avatar avatar-xs flex-shrink-0"
                            role="img"
                            aria-label="Owner Ravisha V"
                            title="Ravisha V"
                          >
                            <img src="/assets/images/avatar-user.png" width="28" height="28" alt="" />
                          </span>
                          <span className="fs-md text-body-2 text-truncate">
                            Ravisha V
                          </span>
                        </div>
                      </td>
                      <td className="d-none d-lg-table-cell fs-md text-body-2 text-nowrap">
                        <bdi>
                          940 MB
                        </bdi>
                      </td>
                      <td className="d-none d-md-table-cell fs-md text-body-2 text-nowrap">
                        <bdi>
                          1 Sep 2026
                        </bdi>
                      </td>
                      <td className="text-end pe-3">
                        <div className="d-flex align-items-center justify-content-end gap-1">
                          <button
                            type="button"
                            className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 d-none d-sm-inline-flex"
                            data-file-star=""
                            aria-pressed="false"
                            aria-label="Star Documents"
                            title="Star"
                          >
                            <i
                              className="icon-16 text-cat-amber icon-fill d-none"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-on=""
                            />
                            {" "}
                            <i
                              className="icon-16 text-muted-2"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-off=""
                            />
                          </button>
                          <div className="dropdown flex-shrink-0">
                            <button
                              type="button"
                              className="btn btn-ghost btn-18 rounded-circle"
                              id="fmRowMenu-fm-f2"
                              data-bs-toggle="dropdown"
                              data-bs-auto-close="outside"
                              data-dd-fixed=""
                              data-bs-offset="0,8"
                              aria-expanded="false"
                              aria-label="More actions for Documents"
                            >
                              <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                            </button>
                            {" "}
                            <ul
                              className="dropdown-menu dropdown-menu-end dropdown-menu-compact p-2"
                              aria-labelledby="fmRowMenu-fm-f2"
                            >
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="open">
                                  <i data-lucide="folder-open" aria-hidden="true" />
                                  Open
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="details">
                                  <i data-lucide="info" aria-hidden="true" />
                                  Details
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="download">
                                  <i data-lucide="download" aria-hidden="true" />
                                  Download
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="share">
                                  <i data-lucide="share-2" aria-hidden="true" />
                                  Share
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="rename">
                                  <i data-lucide="pencil" aria-hidden="true" />
                                  Rename
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="move">
                                  <i data-lucide="folder-input" aria-hidden="true" />
                                  Move to…
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="star">
                                  <i data-lucide="star" aria-hidden="true" />
                                  <span>
                                    <span className="d-none" data-file-star-text-on="">
                                      Remove star
                                    </span>
                                    <span className="" data-file-star-text-off="">
                                      Add star
                                    </span>
                                  </span>
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="dropdown-item dropdown-item-danger"
                                  data-file-action="delete"
                                >
                                  <i data-lucide="trash-2" aria-hidden="true" />
                                  Delete
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr
                      className=""
                      data-file-row="fm-f3"
                      data-file-kind="folder"
                      data-file-type="folder"
                      data-file-cat="folders"
                      data-file-loc="myfiles shared"
                      data-file-name="Marketing"
                      data-file-size="1288490189"
                      data-file-size-label="1.2 GB"
                      data-file-modified="2026-08-30"
                      data-file-modified-label="30 Aug 2026"
                      data-file-created-label="19 Apr 2026"
                      data-file-owner="Aarav Shah"
                      data-file-where="My Files"
                      data-file-type-label="Folder"
                      data-file-items="54"
                      data-file-shared=""
                      data-file-share-with="5 people"
                    >
                      <td className="ps-3">
                        <input
                          className="form-check-input mt-0"
                          type="checkbox"
                          data-file-pick=""
                          id="fmPickRow-fm-f3"
                          aria-label="Select Marketing"
                        />
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-2 gap-md-3">
                          <span className="icon-box icon-box-sm tint-rose flex-shrink-0" aria-hidden="true">
                            <i data-lucide="folder" />
                          </span>
                          <button
                            type="button"
                            data-file-open=""
                            className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                          >
                            <span className="d-block fs-md fw-semibold text-title text-truncate" data-file-label="">
                              Marketing
                            </span>
                            <span className="d-block fs-xs text-muted-2 text-truncate d-lg-none">
                              <bdi>
                                1.2 GB
                              </bdi>
                              {" "}·{" "}
                              <bdi>
                                30 Aug 2026
                              </bdi>
                            </span>
                            <span className="d-none d-lg-block fs-xs text-muted-2 text-truncate">
                              <bdi>
                                54 items
                              </bdi>
                            </span>
                          </button>
                          <i
                            className="icon-14 text-muted-2 flex-shrink-0 d-none d-sm-inline"
                            data-lucide="users"
                            role="img"
                            aria-label="Shared"
                            title="Shared"
                          />
                        </div>
                      </td>
                      <td className="d-none d-xl-table-cell">
                        <div className="d-flex align-items-center gap-2">
                          <span
                            className="avatar avatar-xs flex-shrink-0"
                            role="img"
                            aria-label="Owner Aarav Shah"
                            title="Aarav Shah"
                          >
                            <img src="/assets/images/avatar-1.png" width="28" height="28" alt="" />
                          </span>
                          <span className="fs-md text-body-2 text-truncate">
                            Aarav Shah
                          </span>
                        </div>
                      </td>
                      <td className="d-none d-lg-table-cell fs-md text-body-2 text-nowrap">
                        <bdi>
                          1.2 GB
                        </bdi>
                      </td>
                      <td className="d-none d-md-table-cell fs-md text-body-2 text-nowrap">
                        <bdi>
                          30 Aug 2026
                        </bdi>
                      </td>
                      <td className="text-end pe-3">
                        <div className="d-flex align-items-center justify-content-end gap-1">
                          <button
                            type="button"
                            className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 d-none d-sm-inline-flex"
                            data-file-star=""
                            aria-pressed="false"
                            aria-label="Star Marketing"
                            title="Star"
                          >
                            <i
                              className="icon-16 text-cat-amber icon-fill d-none"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-on=""
                            />
                            {" "}
                            <i
                              className="icon-16 text-muted-2"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-off=""
                            />
                          </button>
                          <div className="dropdown flex-shrink-0">
                            <button
                              type="button"
                              className="btn btn-ghost btn-18 rounded-circle"
                              id="fmRowMenu-fm-f3"
                              data-bs-toggle="dropdown"
                              data-bs-auto-close="outside"
                              data-dd-fixed=""
                              data-bs-offset="0,8"
                              aria-expanded="false"
                              aria-label="More actions for Marketing"
                            >
                              <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                            </button>
                            {" "}
                            <ul
                              className="dropdown-menu dropdown-menu-end dropdown-menu-compact p-2"
                              aria-labelledby="fmRowMenu-fm-f3"
                            >
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="open">
                                  <i data-lucide="folder-open" aria-hidden="true" />
                                  Open
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="details">
                                  <i data-lucide="info" aria-hidden="true" />
                                  Details
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="download">
                                  <i data-lucide="download" aria-hidden="true" />
                                  Download
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="share">
                                  <i data-lucide="share-2" aria-hidden="true" />
                                  Share
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="rename">
                                  <i data-lucide="pencil" aria-hidden="true" />
                                  Rename
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="move">
                                  <i data-lucide="folder-input" aria-hidden="true" />
                                  Move to…
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="star">
                                  <i data-lucide="star" aria-hidden="true" />
                                  <span>
                                    <span className="d-none" data-file-star-text-on="">
                                      Remove star
                                    </span>
                                    <span className="" data-file-star-text-off="">
                                      Add star
                                    </span>
                                  </span>
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="dropdown-item dropdown-item-danger"
                                  data-file-action="delete"
                                >
                                  <i data-lucide="trash-2" aria-hidden="true" />
                                  Delete
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr
                      className=""
                      data-file-row="fm-f4"
                      data-file-kind="folder"
                      data-file-type="folder"
                      data-file-cat="folders"
                      data-file-loc="myfiles starred shared"
                      data-file-name="Projects"
                      data-file-size="5153960755"
                      data-file-size-label="4.8 GB"
                      data-file-modified="2026-08-28"
                      data-file-modified-label="28 Aug 2026"
                      data-file-created-label="2 Feb 2026"
                      data-file-owner="Kabir Nair"
                      data-file-where="My Files"
                      data-file-type-label="Folder"
                      data-file-items="212"
                      data-file-starred=""
                      data-file-shared=""
                      data-file-share-with="12 people"
                    >
                      <td className="ps-3">
                        <input
                          className="form-check-input mt-0"
                          type="checkbox"
                          data-file-pick=""
                          id="fmPickRow-fm-f4"
                          aria-label="Select Projects"
                        />
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-2 gap-md-3">
                          <span className="icon-box icon-box-sm tint-emerald flex-shrink-0" aria-hidden="true">
                            <i data-lucide="folder" />
                          </span>
                          <button
                            type="button"
                            data-file-open=""
                            className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                          >
                            <span className="d-block fs-md fw-semibold text-title text-truncate" data-file-label="">
                              Projects
                            </span>
                            <span className="d-block fs-xs text-muted-2 text-truncate d-lg-none">
                              <bdi>
                                4.8 GB
                              </bdi>
                              {" "}·{" "}
                              <bdi>
                                28 Aug 2026
                              </bdi>
                            </span>
                            <span className="d-none d-lg-block fs-xs text-muted-2 text-truncate">
                              <bdi>
                                212 items
                              </bdi>
                            </span>
                          </button>
                          <i
                            className="icon-14 text-muted-2 flex-shrink-0 d-none d-sm-inline"
                            data-lucide="users"
                            role="img"
                            aria-label="Shared"
                            title="Shared"
                          />
                        </div>
                      </td>
                      <td className="d-none d-xl-table-cell">
                        <div className="d-flex align-items-center gap-2">
                          <span
                            className="avatar avatar-xs flex-shrink-0"
                            role="img"
                            aria-label="Owner Kabir Nair"
                            title="Kabir Nair"
                          >
                            <img src="/assets/images/avatar-3.png" width="28" height="28" alt="" />
                          </span>
                          <span className="fs-md text-body-2 text-truncate">
                            Kabir Nair
                          </span>
                        </div>
                      </td>
                      <td className="d-none d-lg-table-cell fs-md text-body-2 text-nowrap">
                        <bdi>
                          4.8 GB
                        </bdi>
                      </td>
                      <td className="d-none d-md-table-cell fs-md text-body-2 text-nowrap">
                        <bdi>
                          28 Aug 2026
                        </bdi>
                      </td>
                      <td className="text-end pe-3">
                        <div className="d-flex align-items-center justify-content-end gap-1">
                          <button
                            type="button"
                            className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 d-none d-sm-inline-flex"
                            data-file-star=""
                            aria-pressed="true"
                            aria-label="Star Projects"
                            title="Star"
                          >
                            <i
                              className="icon-16 text-cat-amber icon-fill"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-on=""
                            />
                            {" "}
                            <i
                              className="icon-16 text-muted-2 d-none"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-off=""
                            />
                          </button>
                          <div className="dropdown flex-shrink-0">
                            <button
                              type="button"
                              className="btn btn-ghost btn-18 rounded-circle"
                              id="fmRowMenu-fm-f4"
                              data-bs-toggle="dropdown"
                              data-bs-auto-close="outside"
                              data-dd-fixed=""
                              data-bs-offset="0,8"
                              aria-expanded="false"
                              aria-label="More actions for Projects"
                            >
                              <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                            </button>
                            {" "}
                            <ul
                              className="dropdown-menu dropdown-menu-end dropdown-menu-compact p-2"
                              aria-labelledby="fmRowMenu-fm-f4"
                            >
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="open">
                                  <i data-lucide="folder-open" aria-hidden="true" />
                                  Open
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="details">
                                  <i data-lucide="info" aria-hidden="true" />
                                  Details
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="download">
                                  <i data-lucide="download" aria-hidden="true" />
                                  Download
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="share">
                                  <i data-lucide="share-2" aria-hidden="true" />
                                  Share
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="rename">
                                  <i data-lucide="pencil" aria-hidden="true" />
                                  Rename
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="move">
                                  <i data-lucide="folder-input" aria-hidden="true" />
                                  Move to…
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="star">
                                  <i data-lucide="star" aria-hidden="true" />
                                  <span>
                                    <span className="" data-file-star-text-on="">
                                      Remove star
                                    </span>
                                    <span className="d-none" data-file-star-text-off="">
                                      Add star
                                    </span>
                                  </span>
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="dropdown-item dropdown-item-danger"
                                  data-file-action="delete"
                                >
                                  <i data-lucide="trash-2" aria-hidden="true" />
                                  Delete
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr
                      className=""
                      data-file-row="fm-f5"
                      data-file-kind="folder"
                      data-file-type="folder"
                      data-file-cat="folders"
                      data-file-loc="myfiles"
                      data-file-name="Reports"
                      data-file-size="536870912"
                      data-file-size-label="512 MB"
                      data-file-modified="2026-08-24"
                      data-file-modified-label="24 Aug 2026"
                      data-file-created-label="8 Jan 2026"
                      data-file-owner="Priya Nair"
                      data-file-where="My Files"
                      data-file-type-label="Folder"
                      data-file-items="37"
                    >
                      <td className="ps-3">
                        <input
                          className="form-check-input mt-0"
                          type="checkbox"
                          data-file-pick=""
                          id="fmPickRow-fm-f5"
                          aria-label="Select Reports"
                        />
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-2 gap-md-3">
                          <span className="icon-box icon-box-sm tint-amber flex-shrink-0" aria-hidden="true">
                            <i data-lucide="folder" />
                          </span>
                          <button
                            type="button"
                            data-file-open=""
                            className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                          >
                            <span className="d-block fs-md fw-semibold text-title text-truncate" data-file-label="">
                              Reports
                            </span>
                            <span className="d-block fs-xs text-muted-2 text-truncate d-lg-none">
                              <bdi>
                                512 MB
                              </bdi>
                              {" "}·{" "}
                              <bdi>
                                24 Aug 2026
                              </bdi>
                            </span>
                            <span className="d-none d-lg-block fs-xs text-muted-2 text-truncate">
                              <bdi>
                                37 items
                              </bdi>
                            </span>
                          </button>
                        </div>
                      </td>
                      <td className="d-none d-xl-table-cell">
                        <div className="d-flex align-items-center gap-2">
                          <span
                            className="avatar avatar-xs flex-shrink-0"
                            role="img"
                            aria-label="Owner Priya Nair"
                            title="Priya Nair"
                          >
                            <img src="/assets/images/avatar-4.png" width="28" height="28" alt="" />
                          </span>
                          <span className="fs-md text-body-2 text-truncate">
                            Priya Nair
                          </span>
                        </div>
                      </td>
                      <td className="d-none d-lg-table-cell fs-md text-body-2 text-nowrap">
                        <bdi>
                          512 MB
                        </bdi>
                      </td>
                      <td className="d-none d-md-table-cell fs-md text-body-2 text-nowrap">
                        <bdi>
                          24 Aug 2026
                        </bdi>
                      </td>
                      <td className="text-end pe-3">
                        <div className="d-flex align-items-center justify-content-end gap-1">
                          <button
                            type="button"
                            className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 d-none d-sm-inline-flex"
                            data-file-star=""
                            aria-pressed="false"
                            aria-label="Star Reports"
                            title="Star"
                          >
                            <i
                              className="icon-16 text-cat-amber icon-fill d-none"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-on=""
                            />
                            {" "}
                            <i
                              className="icon-16 text-muted-2"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-off=""
                            />
                          </button>
                          <div className="dropdown flex-shrink-0">
                            <button
                              type="button"
                              className="btn btn-ghost btn-18 rounded-circle"
                              id="fmRowMenu-fm-f5"
                              data-bs-toggle="dropdown"
                              data-bs-auto-close="outside"
                              data-dd-fixed=""
                              data-bs-offset="0,8"
                              aria-expanded="false"
                              aria-label="More actions for Reports"
                            >
                              <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                            </button>
                            {" "}
                            <ul
                              className="dropdown-menu dropdown-menu-end dropdown-menu-compact p-2"
                              aria-labelledby="fmRowMenu-fm-f5"
                            >
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="open">
                                  <i data-lucide="folder-open" aria-hidden="true" />
                                  Open
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="details">
                                  <i data-lucide="info" aria-hidden="true" />
                                  Details
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="download">
                                  <i data-lucide="download" aria-hidden="true" />
                                  Download
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="share">
                                  <i data-lucide="share-2" aria-hidden="true" />
                                  Share
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="rename">
                                  <i data-lucide="pencil" aria-hidden="true" />
                                  Rename
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="move">
                                  <i data-lucide="folder-input" aria-hidden="true" />
                                  Move to…
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="star">
                                  <i data-lucide="star" aria-hidden="true" />
                                  <span>
                                    <span className="d-none" data-file-star-text-on="">
                                      Remove star
                                    </span>
                                    <span className="" data-file-star-text-off="">
                                      Add star
                                    </span>
                                  </span>
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="dropdown-item dropdown-item-danger"
                                  data-file-action="delete"
                                >
                                  <i data-lucide="trash-2" aria-hidden="true" />
                                  Delete
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr
                      className=""
                      data-file-row="fm-f6"
                      data-file-kind="folder"
                      data-file-type="folder"
                      data-file-cat="folders"
                      data-file-loc="myfiles shared"
                      data-file-name="Presentations"
                      data-file-size="1717986918"
                      data-file-size-label="1.6 GB"
                      data-file-modified="2026-08-19"
                      data-file-modified-label="19 Aug 2026"
                      data-file-created-label="27 Feb 2026"
                      data-file-owner="Dev Sharma"
                      data-file-where="My Files"
                      data-file-type-label="Folder"
                      data-file-items="41"
                      data-file-shared=""
                      data-file-share-with="3 people"
                    >
                      <td className="ps-3">
                        <input
                          className="form-check-input mt-0"
                          type="checkbox"
                          data-file-pick=""
                          id="fmPickRow-fm-f6"
                          aria-label="Select Presentations"
                        />
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-2 gap-md-3">
                          <span className="icon-box icon-box-sm tint-cyan flex-shrink-0" aria-hidden="true">
                            <i data-lucide="folder" />
                          </span>
                          <button
                            type="button"
                            data-file-open=""
                            className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                          >
                            <span className="d-block fs-md fw-semibold text-title text-truncate" data-file-label="">
                              Presentations
                            </span>
                            <span className="d-block fs-xs text-muted-2 text-truncate d-lg-none">
                              <bdi>
                                1.6 GB
                              </bdi>
                              {" "}·{" "}
                              <bdi>
                                19 Aug 2026
                              </bdi>
                            </span>
                            <span className="d-none d-lg-block fs-xs text-muted-2 text-truncate">
                              <bdi>
                                41 items
                              </bdi>
                            </span>
                          </button>
                          <i
                            className="icon-14 text-muted-2 flex-shrink-0 d-none d-sm-inline"
                            data-lucide="users"
                            role="img"
                            aria-label="Shared"
                            title="Shared"
                          />
                        </div>
                      </td>
                      <td className="d-none d-xl-table-cell">
                        <div className="d-flex align-items-center gap-2">
                          <span
                            className="avatar avatar-xs bg-grad-6 flex-shrink-0"
                            role="img"
                            aria-label="Owner Dev Sharma"
                            title="Dev Sharma"
                          >
                            DS
                          </span>
                          <span className="fs-md text-body-2 text-truncate">
                            Dev Sharma
                          </span>
                        </div>
                      </td>
                      <td className="d-none d-lg-table-cell fs-md text-body-2 text-nowrap">
                        <bdi>
                          1.6 GB
                        </bdi>
                      </td>
                      <td className="d-none d-md-table-cell fs-md text-body-2 text-nowrap">
                        <bdi>
                          19 Aug 2026
                        </bdi>
                      </td>
                      <td className="text-end pe-3">
                        <div className="d-flex align-items-center justify-content-end gap-1">
                          <button
                            type="button"
                            className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 d-none d-sm-inline-flex"
                            data-file-star=""
                            aria-pressed="false"
                            aria-label="Star Presentations"
                            title="Star"
                          >
                            <i
                              className="icon-16 text-cat-amber icon-fill d-none"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-on=""
                            />
                            {" "}
                            <i
                              className="icon-16 text-muted-2"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-off=""
                            />
                          </button>
                          <div className="dropdown flex-shrink-0">
                            <button
                              type="button"
                              className="btn btn-ghost btn-18 rounded-circle"
                              id="fmRowMenu-fm-f6"
                              data-bs-toggle="dropdown"
                              data-bs-auto-close="outside"
                              data-dd-fixed=""
                              data-bs-offset="0,8"
                              aria-expanded="false"
                              aria-label="More actions for Presentations"
                            >
                              <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                            </button>
                            {" "}
                            <ul
                              className="dropdown-menu dropdown-menu-end dropdown-menu-compact p-2"
                              aria-labelledby="fmRowMenu-fm-f6"
                            >
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="open">
                                  <i data-lucide="folder-open" aria-hidden="true" />
                                  Open
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="details">
                                  <i data-lucide="info" aria-hidden="true" />
                                  Details
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="download">
                                  <i data-lucide="download" aria-hidden="true" />
                                  Download
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="share">
                                  <i data-lucide="share-2" aria-hidden="true" />
                                  Share
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="rename">
                                  <i data-lucide="pencil" aria-hidden="true" />
                                  Rename
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="move">
                                  <i data-lucide="folder-input" aria-hidden="true" />
                                  Move to…
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="star">
                                  <i data-lucide="star" aria-hidden="true" />
                                  <span>
                                    <span className="d-none" data-file-star-text-on="">
                                      Remove star
                                    </span>
                                    <span className="" data-file-star-text-off="">
                                      Add star
                                    </span>
                                  </span>
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="dropdown-item dropdown-item-danger"
                                  data-file-action="delete"
                                >
                                  <i data-lucide="trash-2" aria-hidden="true" />
                                  Delete
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr
                      className=""
                      data-file-row="fm-1"
                      data-file-kind="file"
                      data-file-type="pdf"
                      data-file-cat="documents"
                      data-file-loc="myfiles recent starred shared"
                      data-file-name="Brand Guidelines.pdf"
                      data-file-size="4823449"
                      data-file-size-label="4.6 MB"
                      data-file-modified="2026-09-02"
                      data-file-modified-label="2 Sep 2026"
                      data-file-created-label="14 Aug 2026"
                      data-file-owner="Meera Iyer"
                      data-file-where="My Files / Design Assets"
                      data-file-type-label="PDF document"
                      data-file-starred=""
                      data-file-shared=""
                      data-file-share-with="8 people"
                    >
                      <td className="ps-3">
                        <input
                          className="form-check-input mt-0"
                          type="checkbox"
                          data-file-pick=""
                          id="fmPickRow-fm-1"
                          aria-label="Select Brand Guidelines.pdf"
                        />
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-2 gap-md-3">
                          <span className="icon-box icon-box-sm tint-rose flex-shrink-0" aria-hidden="true">
                            <i data-lucide="file-text" />
                          </span>
                          <button
                            type="button"
                            data-file-open=""
                            className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                          >
                            <span className="d-block fs-md fw-semibold text-title text-truncate" data-file-label="">
                              Brand Guidelines.pdf
                            </span>
                            <span className="d-block fs-xs text-muted-2 text-truncate d-lg-none">
                              <bdi>
                                4.6 MB
                              </bdi>
                              {" "}·{" "}
                              <bdi>
                                2 Sep 2026
                              </bdi>
                            </span>
                            <span className="d-none d-lg-block fs-xs text-muted-2 text-truncate">
                              PDF document
                            </span>
                          </button>
                          <i
                            className="icon-14 text-muted-2 flex-shrink-0 d-none d-sm-inline"
                            data-lucide="users"
                            role="img"
                            aria-label="Shared"
                            title="Shared"
                          />
                        </div>
                      </td>
                      <td className="d-none d-xl-table-cell">
                        <div className="d-flex align-items-center gap-2">
                          <span
                            className="avatar avatar-xs flex-shrink-0"
                            role="img"
                            aria-label="Owner Meera Iyer"
                            title="Meera Iyer"
                          >
                            <img src="/assets/images/avatar-2.png" width="28" height="28" alt="" />
                          </span>
                          <span className="fs-md text-body-2 text-truncate">
                            Meera Iyer
                          </span>
                        </div>
                      </td>
                      <td className="d-none d-lg-table-cell fs-md text-body-2 text-nowrap">
                        <bdi>
                          4.6 MB
                        </bdi>
                      </td>
                      <td className="d-none d-md-table-cell fs-md text-body-2 text-nowrap">
                        <bdi>
                          2 Sep 2026
                        </bdi>
                      </td>
                      <td className="text-end pe-3">
                        <div className="d-flex align-items-center justify-content-end gap-1">
                          <button
                            type="button"
                            className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 d-none d-sm-inline-flex"
                            data-file-star=""
                            aria-pressed="true"
                            aria-label="Star Brand Guidelines.pdf"
                            title="Star"
                          >
                            <i
                              className="icon-16 text-cat-amber icon-fill"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-on=""
                            />
                            {" "}
                            <i
                              className="icon-16 text-muted-2 d-none"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-off=""
                            />
                          </button>
                          <div className="dropdown flex-shrink-0">
                            <button
                              type="button"
                              className="btn btn-ghost btn-18 rounded-circle"
                              id="fmRowMenu-fm-1"
                              data-bs-toggle="dropdown"
                              data-bs-auto-close="outside"
                              data-dd-fixed=""
                              data-bs-offset="0,8"
                              aria-expanded="false"
                              aria-label="More actions for Brand Guidelines.pdf"
                            >
                              <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                            </button>
                            {" "}
                            <ul
                              className="dropdown-menu dropdown-menu-end dropdown-menu-compact p-2"
                              aria-labelledby="fmRowMenu-fm-1"
                            >
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="open">
                                  <i data-lucide="external-link" aria-hidden="true" />
                                  Open
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="preview">
                                  <i data-lucide="eye" aria-hidden="true" />
                                  Preview
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="details">
                                  <i data-lucide="info" aria-hidden="true" />
                                  Details
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="download">
                                  <i data-lucide="download" aria-hidden="true" />
                                  Download
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="share">
                                  <i data-lucide="share-2" aria-hidden="true" />
                                  Share
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="rename">
                                  <i data-lucide="pencil" aria-hidden="true" />
                                  Rename
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="move">
                                  <i data-lucide="folder-input" aria-hidden="true" />
                                  Move to…
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="star">
                                  <i data-lucide="star" aria-hidden="true" />
                                  <span>
                                    <span className="" data-file-star-text-on="">
                                      Remove star
                                    </span>
                                    <span className="d-none" data-file-star-text-off="">
                                      Add star
                                    </span>
                                  </span>
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="dropdown-item dropdown-item-danger"
                                  data-file-action="delete"
                                >
                                  <i data-lucide="trash-2" aria-hidden="true" />
                                  Delete
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr
                      className=""
                      data-file-row="fm-2"
                      data-file-kind="file"
                      data-file-type="xls"
                      data-file-cat="documents"
                      data-file-loc="myfiles recent shared"
                      data-file-name="Q3 Revenue Forecast.xlsx"
                      data-file-size="1887437"
                      data-file-size-label="1.8 MB"
                      data-file-modified="2026-09-01"
                      data-file-modified-label="1 Sep 2026"
                      data-file-created-label="21 Jul 2026"
                      data-file-owner="Priya Nair"
                      data-file-where="My Files / Reports"
                      data-file-type-label="Excel spreadsheet"
                      data-file-shared=""
                      data-file-share-with="4 people"
                    >
                      <td className="ps-3">
                        <input
                          className="form-check-input mt-0"
                          type="checkbox"
                          data-file-pick=""
                          id="fmPickRow-fm-2"
                          aria-label="Select Q3 Revenue Forecast.xlsx"
                        />
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-2 gap-md-3">
                          <span className="icon-box icon-box-sm tint-emerald flex-shrink-0" aria-hidden="true">
                            <i data-lucide="file-spreadsheet" />
                          </span>
                          <button
                            type="button"
                            data-file-open=""
                            className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                          >
                            <span className="d-block fs-md fw-semibold text-title text-truncate" data-file-label="">
                              Q3 Revenue Forecast.xlsx
                            </span>
                            <span className="d-block fs-xs text-muted-2 text-truncate d-lg-none">
                              <bdi>
                                1.8 MB
                              </bdi>
                              {" "}·{" "}
                              <bdi>
                                1 Sep 2026
                              </bdi>
                            </span>
                            <span className="d-none d-lg-block fs-xs text-muted-2 text-truncate">
                              Excel spreadsheet
                            </span>
                          </button>
                          <i
                            className="icon-14 text-muted-2 flex-shrink-0 d-none d-sm-inline"
                            data-lucide="users"
                            role="img"
                            aria-label="Shared"
                            title="Shared"
                          />
                        </div>
                      </td>
                      <td className="d-none d-xl-table-cell">
                        <div className="d-flex align-items-center gap-2">
                          <span
                            className="avatar avatar-xs flex-shrink-0"
                            role="img"
                            aria-label="Owner Priya Nair"
                            title="Priya Nair"
                          >
                            <img src="/assets/images/avatar-4.png" width="28" height="28" alt="" />
                          </span>
                          <span className="fs-md text-body-2 text-truncate">
                            Priya Nair
                          </span>
                        </div>
                      </td>
                      <td className="d-none d-lg-table-cell fs-md text-body-2 text-nowrap">
                        <bdi>
                          1.8 MB
                        </bdi>
                      </td>
                      <td className="d-none d-md-table-cell fs-md text-body-2 text-nowrap">
                        <bdi>
                          1 Sep 2026
                        </bdi>
                      </td>
                      <td className="text-end pe-3">
                        <div className="d-flex align-items-center justify-content-end gap-1">
                          <button
                            type="button"
                            className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 d-none d-sm-inline-flex"
                            data-file-star=""
                            aria-pressed="false"
                            aria-label="Star Q3 Revenue Forecast.xlsx"
                            title="Star"
                          >
                            <i
                              className="icon-16 text-cat-amber icon-fill d-none"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-on=""
                            />
                            {" "}
                            <i
                              className="icon-16 text-muted-2"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-off=""
                            />
                          </button>
                          <div className="dropdown flex-shrink-0">
                            <button
                              type="button"
                              className="btn btn-ghost btn-18 rounded-circle"
                              id="fmRowMenu-fm-2"
                              data-bs-toggle="dropdown"
                              data-bs-auto-close="outside"
                              data-dd-fixed=""
                              data-bs-offset="0,8"
                              aria-expanded="false"
                              aria-label="More actions for Q3 Revenue Forecast.xlsx"
                            >
                              <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                            </button>
                            {" "}
                            <ul
                              className="dropdown-menu dropdown-menu-end dropdown-menu-compact p-2"
                              aria-labelledby="fmRowMenu-fm-2"
                            >
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="open">
                                  <i data-lucide="external-link" aria-hidden="true" />
                                  Open
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="preview">
                                  <i data-lucide="eye" aria-hidden="true" />
                                  Preview
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="details">
                                  <i data-lucide="info" aria-hidden="true" />
                                  Details
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="download">
                                  <i data-lucide="download" aria-hidden="true" />
                                  Download
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="share">
                                  <i data-lucide="share-2" aria-hidden="true" />
                                  Share
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="rename">
                                  <i data-lucide="pencil" aria-hidden="true" />
                                  Rename
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="move">
                                  <i data-lucide="folder-input" aria-hidden="true" />
                                  Move to…
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="star">
                                  <i data-lucide="star" aria-hidden="true" />
                                  <span>
                                    <span className="d-none" data-file-star-text-on="">
                                      Remove star
                                    </span>
                                    <span className="" data-file-star-text-off="">
                                      Add star
                                    </span>
                                  </span>
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="dropdown-item dropdown-item-danger"
                                  data-file-action="delete"
                                >
                                  <i data-lucide="trash-2" aria-hidden="true" />
                                  Delete
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr
                      className=""
                      data-file-row="fm-3"
                      data-file-kind="file"
                      data-file-type="ppt"
                      data-file-cat="documents"
                      data-file-loc="myfiles recent starred"
                      data-file-name="Investor Deck 2026.pptx"
                      data-file-size="19293798"
                      data-file-size-label="18.4 MB"
                      data-file-modified="2026-08-31"
                      data-file-modified-label="31 Aug 2026"
                      data-file-created-label="9 Jul 2026"
                      data-file-owner="Aarav Shah"
                      data-file-where="My Files / Presentations"
                      data-file-type-label="PowerPoint deck"
                      data-file-starred=""
                    >
                      <td className="ps-3">
                        <input
                          className="form-check-input mt-0"
                          type="checkbox"
                          data-file-pick=""
                          id="fmPickRow-fm-3"
                          aria-label="Select Investor Deck 2026.pptx"
                        />
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-2 gap-md-3">
                          <span className="icon-box icon-box-sm tint-orange flex-shrink-0" aria-hidden="true">
                            <i data-lucide="presentation" />
                          </span>
                          <button
                            type="button"
                            data-file-open=""
                            className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                          >
                            <span className="d-block fs-md fw-semibold text-title text-truncate" data-file-label="">
                              Investor Deck 2026.pptx
                            </span>
                            <span className="d-block fs-xs text-muted-2 text-truncate d-lg-none">
                              <bdi>
                                18.4 MB
                              </bdi>
                              {" "}·{" "}
                              <bdi>
                                31 Aug 2026
                              </bdi>
                            </span>
                            <span className="d-none d-lg-block fs-xs text-muted-2 text-truncate">
                              PowerPoint deck
                            </span>
                          </button>
                        </div>
                      </td>
                      <td className="d-none d-xl-table-cell">
                        <div className="d-flex align-items-center gap-2">
                          <span
                            className="avatar avatar-xs flex-shrink-0"
                            role="img"
                            aria-label="Owner Aarav Shah"
                            title="Aarav Shah"
                          >
                            <img src="/assets/images/avatar-1.png" width="28" height="28" alt="" />
                          </span>
                          <span className="fs-md text-body-2 text-truncate">
                            Aarav Shah
                          </span>
                        </div>
                      </td>
                      <td className="d-none d-lg-table-cell fs-md text-body-2 text-nowrap">
                        <bdi>
                          18.4 MB
                        </bdi>
                      </td>
                      <td className="d-none d-md-table-cell fs-md text-body-2 text-nowrap">
                        <bdi>
                          31 Aug 2026
                        </bdi>
                      </td>
                      <td className="text-end pe-3">
                        <div className="d-flex align-items-center justify-content-end gap-1">
                          <button
                            type="button"
                            className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 d-none d-sm-inline-flex"
                            data-file-star=""
                            aria-pressed="true"
                            aria-label="Star Investor Deck 2026.pptx"
                            title="Star"
                          >
                            <i
                              className="icon-16 text-cat-amber icon-fill"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-on=""
                            />
                            {" "}
                            <i
                              className="icon-16 text-muted-2 d-none"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-off=""
                            />
                          </button>
                          <div className="dropdown flex-shrink-0">
                            <button
                              type="button"
                              className="btn btn-ghost btn-18 rounded-circle"
                              id="fmRowMenu-fm-3"
                              data-bs-toggle="dropdown"
                              data-bs-auto-close="outside"
                              data-dd-fixed=""
                              data-bs-offset="0,8"
                              aria-expanded="false"
                              aria-label="More actions for Investor Deck 2026.pptx"
                            >
                              <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                            </button>
                            {" "}
                            <ul
                              className="dropdown-menu dropdown-menu-end dropdown-menu-compact p-2"
                              aria-labelledby="fmRowMenu-fm-3"
                            >
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="open">
                                  <i data-lucide="external-link" aria-hidden="true" />
                                  Open
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="preview">
                                  <i data-lucide="eye" aria-hidden="true" />
                                  Preview
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="details">
                                  <i data-lucide="info" aria-hidden="true" />
                                  Details
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="download">
                                  <i data-lucide="download" aria-hidden="true" />
                                  Download
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="share">
                                  <i data-lucide="share-2" aria-hidden="true" />
                                  Share
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="rename">
                                  <i data-lucide="pencil" aria-hidden="true" />
                                  Rename
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="move">
                                  <i data-lucide="folder-input" aria-hidden="true" />
                                  Move to…
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="star">
                                  <i data-lucide="star" aria-hidden="true" />
                                  <span>
                                    <span className="" data-file-star-text-on="">
                                      Remove star
                                    </span>
                                    <span className="d-none" data-file-star-text-off="">
                                      Add star
                                    </span>
                                  </span>
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="dropdown-item dropdown-item-danger"
                                  data-file-action="delete"
                                >
                                  <i data-lucide="trash-2" aria-hidden="true" />
                                  Delete
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr
                      className=""
                      data-file-row="fm-4"
                      data-file-kind="file"
                      data-file-type="doc"
                      data-file-cat="documents"
                      data-file-loc="myfiles recent"
                      data-file-name="Product Launch Brief.docx"
                      data-file-size="634880"
                      data-file-size-label="620 KB"
                      data-file-modified="2026-08-30"
                      data-file-modified-label="30 Aug 2026"
                      data-file-created-label="30 Jun 2026"
                      data-file-owner="Ravisha V"
                      data-file-where="My Files / Marketing"
                      data-file-type-label="Word document"
                    >
                      <td className="ps-3">
                        <input
                          className="form-check-input mt-0"
                          type="checkbox"
                          data-file-pick=""
                          id="fmPickRow-fm-4"
                          aria-label="Select Product Launch Brief.docx"
                        />
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-2 gap-md-3">
                          <span className="icon-box icon-box-sm tint-blue flex-shrink-0" aria-hidden="true">
                            <i data-lucide="file-text" />
                          </span>
                          <button
                            type="button"
                            data-file-open=""
                            className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                          >
                            <span className="d-block fs-md fw-semibold text-title text-truncate" data-file-label="">
                              Product Launch Brief.docx
                            </span>
                            <span className="d-block fs-xs text-muted-2 text-truncate d-lg-none">
                              <bdi>
                                620 KB
                              </bdi>
                              {" "}·{" "}
                              <bdi>
                                30 Aug 2026
                              </bdi>
                            </span>
                            <span className="d-none d-lg-block fs-xs text-muted-2 text-truncate">
                              Word document
                            </span>
                          </button>
                        </div>
                      </td>
                      <td className="d-none d-xl-table-cell">
                        <div className="d-flex align-items-center gap-2">
                          <span
                            className="avatar avatar-xs flex-shrink-0"
                            role="img"
                            aria-label="Owner Ravisha V"
                            title="Ravisha V"
                          >
                            <img src="/assets/images/avatar-user.png" width="28" height="28" alt="" />
                          </span>
                          <span className="fs-md text-body-2 text-truncate">
                            Ravisha V
                          </span>
                        </div>
                      </td>
                      <td className="d-none d-lg-table-cell fs-md text-body-2 text-nowrap">
                        <bdi>
                          620 KB
                        </bdi>
                      </td>
                      <td className="d-none d-md-table-cell fs-md text-body-2 text-nowrap">
                        <bdi>
                          30 Aug 2026
                        </bdi>
                      </td>
                      <td className="text-end pe-3">
                        <div className="d-flex align-items-center justify-content-end gap-1">
                          <button
                            type="button"
                            className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 d-none d-sm-inline-flex"
                            data-file-star=""
                            aria-pressed="false"
                            aria-label="Star Product Launch Brief.docx"
                            title="Star"
                          >
                            <i
                              className="icon-16 text-cat-amber icon-fill d-none"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-on=""
                            />
                            {" "}
                            <i
                              className="icon-16 text-muted-2"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-off=""
                            />
                          </button>
                          <div className="dropdown flex-shrink-0">
                            <button
                              type="button"
                              className="btn btn-ghost btn-18 rounded-circle"
                              id="fmRowMenu-fm-4"
                              data-bs-toggle="dropdown"
                              data-bs-auto-close="outside"
                              data-dd-fixed=""
                              data-bs-offset="0,8"
                              aria-expanded="false"
                              aria-label="More actions for Product Launch Brief.docx"
                            >
                              <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                            </button>
                            {" "}
                            <ul
                              className="dropdown-menu dropdown-menu-end dropdown-menu-compact p-2"
                              aria-labelledby="fmRowMenu-fm-4"
                            >
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="open">
                                  <i data-lucide="external-link" aria-hidden="true" />
                                  Open
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="preview">
                                  <i data-lucide="eye" aria-hidden="true" />
                                  Preview
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="details">
                                  <i data-lucide="info" aria-hidden="true" />
                                  Details
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="download">
                                  <i data-lucide="download" aria-hidden="true" />
                                  Download
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="share">
                                  <i data-lucide="share-2" aria-hidden="true" />
                                  Share
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="rename">
                                  <i data-lucide="pencil" aria-hidden="true" />
                                  Rename
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="move">
                                  <i data-lucide="folder-input" aria-hidden="true" />
                                  Move to…
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="star">
                                  <i data-lucide="star" aria-hidden="true" />
                                  <span>
                                    <span className="d-none" data-file-star-text-on="">
                                      Remove star
                                    </span>
                                    <span className="" data-file-star-text-off="">
                                      Add star
                                    </span>
                                  </span>
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="dropdown-item dropdown-item-danger"
                                  data-file-action="delete"
                                >
                                  <i data-lucide="trash-2" aria-hidden="true" />
                                  Delete
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr
                      className=""
                      data-file-row="fm-5"
                      data-file-kind="file"
                      data-file-type="img"
                      data-file-cat="images"
                      data-file-loc="myfiles recent starred"
                      data-file-name="Autumn Campaign Hero.jpg"
                      data-file-size="3355443"
                      data-file-size-label="3.2 MB"
                      data-file-modified="2026-08-29"
                      data-file-modified-label="29 Aug 2026"
                      data-file-created-label="18 Aug 2026"
                      data-file-owner="Meera Iyer"
                      data-file-where="My Files / Marketing"
                      data-file-type-label="Image"
                      data-file-starred=""
                    >
                      <td className="ps-3">
                        <input
                          className="form-check-input mt-0"
                          type="checkbox"
                          data-file-pick=""
                          id="fmPickRow-fm-5"
                          aria-label="Select Autumn Campaign Hero.jpg"
                        />
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-2 gap-md-3">
                          <span className="icon-box icon-box-sm tint-violet flex-shrink-0" aria-hidden="true">
                            <i data-lucide="image" />
                          </span>
                          <button
                            type="button"
                            data-file-open=""
                            className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                          >
                            <span className="d-block fs-md fw-semibold text-title text-truncate" data-file-label="">
                              Autumn Campaign Hero.jpg
                            </span>
                            <span className="d-block fs-xs text-muted-2 text-truncate d-lg-none">
                              <bdi>
                                3.2 MB
                              </bdi>
                              {" "}·{" "}
                              <bdi>
                                29 Aug 2026
                              </bdi>
                            </span>
                            <span className="d-none d-lg-block fs-xs text-muted-2 text-truncate">
                              Image
                            </span>
                          </button>
                        </div>
                      </td>
                      <td className="d-none d-xl-table-cell">
                        <div className="d-flex align-items-center gap-2">
                          <span
                            className="avatar avatar-xs flex-shrink-0"
                            role="img"
                            aria-label="Owner Meera Iyer"
                            title="Meera Iyer"
                          >
                            <img src="/assets/images/avatar-2.png" width="28" height="28" alt="" />
                          </span>
                          <span className="fs-md text-body-2 text-truncate">
                            Meera Iyer
                          </span>
                        </div>
                      </td>
                      <td className="d-none d-lg-table-cell fs-md text-body-2 text-nowrap">
                        <bdi>
                          3.2 MB
                        </bdi>
                      </td>
                      <td className="d-none d-md-table-cell fs-md text-body-2 text-nowrap">
                        <bdi>
                          29 Aug 2026
                        </bdi>
                      </td>
                      <td className="text-end pe-3">
                        <div className="d-flex align-items-center justify-content-end gap-1">
                          <button
                            type="button"
                            className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 d-none d-sm-inline-flex"
                            data-file-star=""
                            aria-pressed="true"
                            aria-label="Star Autumn Campaign Hero.jpg"
                            title="Star"
                          >
                            <i
                              className="icon-16 text-cat-amber icon-fill"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-on=""
                            />
                            {" "}
                            <i
                              className="icon-16 text-muted-2 d-none"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-off=""
                            />
                          </button>
                          <div className="dropdown flex-shrink-0">
                            <button
                              type="button"
                              className="btn btn-ghost btn-18 rounded-circle"
                              id="fmRowMenu-fm-5"
                              data-bs-toggle="dropdown"
                              data-bs-auto-close="outside"
                              data-dd-fixed=""
                              data-bs-offset="0,8"
                              aria-expanded="false"
                              aria-label="More actions for Autumn Campaign Hero.jpg"
                            >
                              <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                            </button>
                            {" "}
                            <ul
                              className="dropdown-menu dropdown-menu-end dropdown-menu-compact p-2"
                              aria-labelledby="fmRowMenu-fm-5"
                            >
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="open">
                                  <i data-lucide="external-link" aria-hidden="true" />
                                  Open
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="preview">
                                  <i data-lucide="eye" aria-hidden="true" />
                                  Preview
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="details">
                                  <i data-lucide="info" aria-hidden="true" />
                                  Details
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="download">
                                  <i data-lucide="download" aria-hidden="true" />
                                  Download
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="share">
                                  <i data-lucide="share-2" aria-hidden="true" />
                                  Share
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="rename">
                                  <i data-lucide="pencil" aria-hidden="true" />
                                  Rename
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="move">
                                  <i data-lucide="folder-input" aria-hidden="true" />
                                  Move to…
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="star">
                                  <i data-lucide="star" aria-hidden="true" />
                                  <span>
                                    <span className="" data-file-star-text-on="">
                                      Remove star
                                    </span>
                                    <span className="d-none" data-file-star-text-off="">
                                      Add star
                                    </span>
                                  </span>
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="dropdown-item dropdown-item-danger"
                                  data-file-action="delete"
                                >
                                  <i data-lucide="trash-2" aria-hidden="true" />
                                  Delete
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr
                      className=""
                      data-file-row="fm-6"
                      data-file-kind="file"
                      data-file-type="img"
                      data-file-cat="images"
                      data-file-loc="myfiles recent"
                      data-file-name="Studio Lookbook.png"
                      data-file-size="5976883"
                      data-file-size-label="5.7 MB"
                      data-file-modified="2026-08-29"
                      data-file-modified-label="29 Aug 2026"
                      data-file-created-label="17 Aug 2026"
                      data-file-owner="Nisha Bose"
                      data-file-where="My Files / Design Assets"
                      data-file-type-label="Image"
                    >
                      <td className="ps-3">
                        <input
                          className="form-check-input mt-0"
                          type="checkbox"
                          data-file-pick=""
                          id="fmPickRow-fm-6"
                          aria-label="Select Studio Lookbook.png"
                        />
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-2 gap-md-3">
                          <span className="icon-box icon-box-sm tint-violet flex-shrink-0" aria-hidden="true">
                            <i data-lucide="image" />
                          </span>
                          <button
                            type="button"
                            data-file-open=""
                            className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                          >
                            <span className="d-block fs-md fw-semibold text-title text-truncate" data-file-label="">
                              Studio Lookbook.png
                            </span>
                            <span className="d-block fs-xs text-muted-2 text-truncate d-lg-none">
                              <bdi>
                                5.7 MB
                              </bdi>
                              {" "}·{" "}
                              <bdi>
                                29 Aug 2026
                              </bdi>
                            </span>
                            <span className="d-none d-lg-block fs-xs text-muted-2 text-truncate">
                              Image
                            </span>
                          </button>
                        </div>
                      </td>
                      <td className="d-none d-xl-table-cell">
                        <div className="d-flex align-items-center gap-2">
                          <span
                            className="avatar avatar-xs bg-grad-2 flex-shrink-0"
                            role="img"
                            aria-label="Owner Nisha Bose"
                            title="Nisha Bose"
                          >
                            NB
                          </span>
                          <span className="fs-md text-body-2 text-truncate">
                            Nisha Bose
                          </span>
                        </div>
                      </td>
                      <td className="d-none d-lg-table-cell fs-md text-body-2 text-nowrap">
                        <bdi>
                          5.7 MB
                        </bdi>
                      </td>
                      <td className="d-none d-md-table-cell fs-md text-body-2 text-nowrap">
                        <bdi>
                          29 Aug 2026
                        </bdi>
                      </td>
                      <td className="text-end pe-3">
                        <div className="d-flex align-items-center justify-content-end gap-1">
                          <button
                            type="button"
                            className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 d-none d-sm-inline-flex"
                            data-file-star=""
                            aria-pressed="false"
                            aria-label="Star Studio Lookbook.png"
                            title="Star"
                          >
                            <i
                              className="icon-16 text-cat-amber icon-fill d-none"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-on=""
                            />
                            {" "}
                            <i
                              className="icon-16 text-muted-2"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-off=""
                            />
                          </button>
                          <div className="dropdown flex-shrink-0">
                            <button
                              type="button"
                              className="btn btn-ghost btn-18 rounded-circle"
                              id="fmRowMenu-fm-6"
                              data-bs-toggle="dropdown"
                              data-bs-auto-close="outside"
                              data-dd-fixed=""
                              data-bs-offset="0,8"
                              aria-expanded="false"
                              aria-label="More actions for Studio Lookbook.png"
                            >
                              <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                            </button>
                            {" "}
                            <ul
                              className="dropdown-menu dropdown-menu-end dropdown-menu-compact p-2"
                              aria-labelledby="fmRowMenu-fm-6"
                            >
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="open">
                                  <i data-lucide="external-link" aria-hidden="true" />
                                  Open
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="preview">
                                  <i data-lucide="eye" aria-hidden="true" />
                                  Preview
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="details">
                                  <i data-lucide="info" aria-hidden="true" />
                                  Details
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="download">
                                  <i data-lucide="download" aria-hidden="true" />
                                  Download
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="share">
                                  <i data-lucide="share-2" aria-hidden="true" />
                                  Share
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="rename">
                                  <i data-lucide="pencil" aria-hidden="true" />
                                  Rename
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="move">
                                  <i data-lucide="folder-input" aria-hidden="true" />
                                  Move to…
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="star">
                                  <i data-lucide="star" aria-hidden="true" />
                                  <span>
                                    <span className="d-none" data-file-star-text-on="">
                                      Remove star
                                    </span>
                                    <span className="" data-file-star-text-off="">
                                      Add star
                                    </span>
                                  </span>
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="dropdown-item dropdown-item-danger"
                                  data-file-action="delete"
                                >
                                  <i data-lucide="trash-2" aria-hidden="true" />
                                  Delete
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr
                      className=""
                      data-file-row="fm-7"
                      data-file-kind="file"
                      data-file-type="video"
                      data-file-cat="videos"
                      data-file-loc="myfiles shared"
                      data-file-name="Onboarding Walkthrough.mp4"
                      data-file-size="155189248"
                      data-file-size-label="148 MB"
                      data-file-modified="2026-08-27"
                      data-file-modified-label="27 Aug 2026"
                      data-file-created-label="12 Aug 2026"
                      data-file-owner="Dev Sharma"
                      data-file-where="My Files / Projects"
                      data-file-type-label="Video"
                      data-file-shared=""
                      data-file-share-with="6 people"
                    >
                      <td className="ps-3">
                        <input
                          className="form-check-input mt-0"
                          type="checkbox"
                          data-file-pick=""
                          id="fmPickRow-fm-7"
                          aria-label="Select Onboarding Walkthrough.mp4"
                        />
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-2 gap-md-3">
                          <span className="icon-box icon-box-sm tint-magenta flex-shrink-0" aria-hidden="true">
                            <i data-lucide="file-video" />
                          </span>
                          <button
                            type="button"
                            data-file-open=""
                            className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                          >
                            <span className="d-block fs-md fw-semibold text-title text-truncate" data-file-label="">
                              Onboarding Walkthrough.mp4
                            </span>
                            <span className="d-block fs-xs text-muted-2 text-truncate d-lg-none">
                              <bdi>
                                148 MB
                              </bdi>
                              {" "}·{" "}
                              <bdi>
                                27 Aug 2026
                              </bdi>
                            </span>
                            <span className="d-none d-lg-block fs-xs text-muted-2 text-truncate">
                              Video
                            </span>
                          </button>
                          <i
                            className="icon-14 text-muted-2 flex-shrink-0 d-none d-sm-inline"
                            data-lucide="users"
                            role="img"
                            aria-label="Shared"
                            title="Shared"
                          />
                        </div>
                      </td>
                      <td className="d-none d-xl-table-cell">
                        <div className="d-flex align-items-center gap-2">
                          <span
                            className="avatar avatar-xs bg-grad-6 flex-shrink-0"
                            role="img"
                            aria-label="Owner Dev Sharma"
                            title="Dev Sharma"
                          >
                            DS
                          </span>
                          <span className="fs-md text-body-2 text-truncate">
                            Dev Sharma
                          </span>
                        </div>
                      </td>
                      <td className="d-none d-lg-table-cell fs-md text-body-2 text-nowrap">
                        <bdi>
                          148 MB
                        </bdi>
                      </td>
                      <td className="d-none d-md-table-cell fs-md text-body-2 text-nowrap">
                        <bdi>
                          27 Aug 2026
                        </bdi>
                      </td>
                      <td className="text-end pe-3">
                        <div className="d-flex align-items-center justify-content-end gap-1">
                          <button
                            type="button"
                            className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 d-none d-sm-inline-flex"
                            data-file-star=""
                            aria-pressed="false"
                            aria-label="Star Onboarding Walkthrough.mp4"
                            title="Star"
                          >
                            <i
                              className="icon-16 text-cat-amber icon-fill d-none"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-on=""
                            />
                            {" "}
                            <i
                              className="icon-16 text-muted-2"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-off=""
                            />
                          </button>
                          <div className="dropdown flex-shrink-0">
                            <button
                              type="button"
                              className="btn btn-ghost btn-18 rounded-circle"
                              id="fmRowMenu-fm-7"
                              data-bs-toggle="dropdown"
                              data-bs-auto-close="outside"
                              data-dd-fixed=""
                              data-bs-offset="0,8"
                              aria-expanded="false"
                              aria-label="More actions for Onboarding Walkthrough.mp4"
                            >
                              <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                            </button>
                            {" "}
                            <ul
                              className="dropdown-menu dropdown-menu-end dropdown-menu-compact p-2"
                              aria-labelledby="fmRowMenu-fm-7"
                            >
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="open">
                                  <i data-lucide="external-link" aria-hidden="true" />
                                  Open
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="preview">
                                  <i data-lucide="eye" aria-hidden="true" />
                                  Preview
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="details">
                                  <i data-lucide="info" aria-hidden="true" />
                                  Details
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="download">
                                  <i data-lucide="download" aria-hidden="true" />
                                  Download
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="share">
                                  <i data-lucide="share-2" aria-hidden="true" />
                                  Share
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="rename">
                                  <i data-lucide="pencil" aria-hidden="true" />
                                  Rename
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="move">
                                  <i data-lucide="folder-input" aria-hidden="true" />
                                  Move to…
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="star">
                                  <i data-lucide="star" aria-hidden="true" />
                                  <span>
                                    <span className="d-none" data-file-star-text-on="">
                                      Remove star
                                    </span>
                                    <span className="" data-file-star-text-off="">
                                      Add star
                                    </span>
                                  </span>
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="dropdown-item dropdown-item-danger"
                                  data-file-action="delete"
                                >
                                  <i data-lucide="trash-2" aria-hidden="true" />
                                  Delete
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr
                      className=""
                      data-file-row="fm-8"
                      data-file-kind="file"
                      data-file-type="zip"
                      data-file-cat="archives"
                      data-file-loc="myfiles"
                      data-file-name="Design System Archive.zip"
                      data-file-size="100977868"
                      data-file-size-label="96.3 MB"
                      data-file-modified="2026-08-26"
                      data-file-modified-label="26 Aug 2026"
                      data-file-created-label="26 Aug 2026"
                      data-file-owner="Kabir Nair"
                      data-file-where="My Files / Design Assets"
                      data-file-type-label="Archive"
                    >
                      <td className="ps-3">
                        <input
                          className="form-check-input mt-0"
                          type="checkbox"
                          data-file-pick=""
                          id="fmPickRow-fm-8"
                          aria-label="Select Design System Archive.zip"
                        />
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-2 gap-md-3">
                          <span className="icon-box icon-box-sm tint-amber flex-shrink-0" aria-hidden="true">
                            <i data-lucide="file-archive" />
                          </span>
                          <button
                            type="button"
                            data-file-open=""
                            className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                          >
                            <span className="d-block fs-md fw-semibold text-title text-truncate" data-file-label="">
                              Design System Archive.zip
                            </span>
                            <span className="d-block fs-xs text-muted-2 text-truncate d-lg-none">
                              <bdi>
                                96.3 MB
                              </bdi>
                              {" "}·{" "}
                              <bdi>
                                26 Aug 2026
                              </bdi>
                            </span>
                            <span className="d-none d-lg-block fs-xs text-muted-2 text-truncate">
                              Archive
                            </span>
                          </button>
                        </div>
                      </td>
                      <td className="d-none d-xl-table-cell">
                        <div className="d-flex align-items-center gap-2">
                          <span
                            className="avatar avatar-xs flex-shrink-0"
                            role="img"
                            aria-label="Owner Kabir Nair"
                            title="Kabir Nair"
                          >
                            <img src="/assets/images/avatar-3.png" width="28" height="28" alt="" />
                          </span>
                          <span className="fs-md text-body-2 text-truncate">
                            Kabir Nair
                          </span>
                        </div>
                      </td>
                      <td className="d-none d-lg-table-cell fs-md text-body-2 text-nowrap">
                        <bdi>
                          96.3 MB
                        </bdi>
                      </td>
                      <td className="d-none d-md-table-cell fs-md text-body-2 text-nowrap">
                        <bdi>
                          26 Aug 2026
                        </bdi>
                      </td>
                      <td className="text-end pe-3">
                        <div className="d-flex align-items-center justify-content-end gap-1">
                          <button
                            type="button"
                            className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 d-none d-sm-inline-flex"
                            data-file-star=""
                            aria-pressed="false"
                            aria-label="Star Design System Archive.zip"
                            title="Star"
                          >
                            <i
                              className="icon-16 text-cat-amber icon-fill d-none"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-on=""
                            />
                            {" "}
                            <i
                              className="icon-16 text-muted-2"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-off=""
                            />
                          </button>
                          <div className="dropdown flex-shrink-0">
                            <button
                              type="button"
                              className="btn btn-ghost btn-18 rounded-circle"
                              id="fmRowMenu-fm-8"
                              data-bs-toggle="dropdown"
                              data-bs-auto-close="outside"
                              data-dd-fixed=""
                              data-bs-offset="0,8"
                              aria-expanded="false"
                              aria-label="More actions for Design System Archive.zip"
                            >
                              <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                            </button>
                            {" "}
                            <ul
                              className="dropdown-menu dropdown-menu-end dropdown-menu-compact p-2"
                              aria-labelledby="fmRowMenu-fm-8"
                            >
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="open">
                                  <i data-lucide="external-link" aria-hidden="true" />
                                  Open
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="preview">
                                  <i data-lucide="eye" aria-hidden="true" />
                                  Preview
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="details">
                                  <i data-lucide="info" aria-hidden="true" />
                                  Details
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="download">
                                  <i data-lucide="download" aria-hidden="true" />
                                  Download
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="share">
                                  <i data-lucide="share-2" aria-hidden="true" />
                                  Share
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="rename">
                                  <i data-lucide="pencil" aria-hidden="true" />
                                  Rename
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="move">
                                  <i data-lucide="folder-input" aria-hidden="true" />
                                  Move to…
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="star">
                                  <i data-lucide="star" aria-hidden="true" />
                                  <span>
                                    <span className="d-none" data-file-star-text-on="">
                                      Remove star
                                    </span>
                                    <span className="" data-file-star-text-off="">
                                      Add star
                                    </span>
                                  </span>
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="dropdown-item dropdown-item-danger"
                                  data-file-action="delete"
                                >
                                  <i data-lucide="trash-2" aria-hidden="true" />
                                  Delete
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr
                      className=""
                      data-file-row="fm-9"
                      data-file-kind="file"
                      data-file-type="txt"
                      data-file-cat="documents"
                      data-file-loc="myfiles"
                      data-file-name="Release Notes v4.2.txt"
                      data-file-size="12288"
                      data-file-size-label="12 KB"
                      data-file-modified="2026-08-25"
                      data-file-modified-label="25 Aug 2026"
                      data-file-created-label="25 Aug 2026"
                      data-file-owner="Kabir Nair"
                      data-file-where="My Files / Projects"
                      data-file-type-label="Text file"
                    >
                      <td className="ps-3">
                        <input
                          className="form-check-input mt-0"
                          type="checkbox"
                          data-file-pick=""
                          id="fmPickRow-fm-9"
                          aria-label="Select Release Notes v4.2.txt"
                        />
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-2 gap-md-3">
                          <span className="icon-box icon-box-sm tint-slate flex-shrink-0" aria-hidden="true">
                            <i data-lucide="file-text" />
                          </span>
                          <button
                            type="button"
                            data-file-open=""
                            className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                          >
                            <span className="d-block fs-md fw-semibold text-title text-truncate" data-file-label="">
                              Release Notes v4.2.txt
                            </span>
                            <span className="d-block fs-xs text-muted-2 text-truncate d-lg-none">
                              <bdi>
                                12 KB
                              </bdi>
                              {" "}·{" "}
                              <bdi>
                                25 Aug 2026
                              </bdi>
                            </span>
                            <span className="d-none d-lg-block fs-xs text-muted-2 text-truncate">
                              Text file
                            </span>
                          </button>
                        </div>
                      </td>
                      <td className="d-none d-xl-table-cell">
                        <div className="d-flex align-items-center gap-2">
                          <span
                            className="avatar avatar-xs flex-shrink-0"
                            role="img"
                            aria-label="Owner Kabir Nair"
                            title="Kabir Nair"
                          >
                            <img src="/assets/images/avatar-3.png" width="28" height="28" alt="" />
                          </span>
                          <span className="fs-md text-body-2 text-truncate">
                            Kabir Nair
                          </span>
                        </div>
                      </td>
                      <td className="d-none d-lg-table-cell fs-md text-body-2 text-nowrap">
                        <bdi>
                          12 KB
                        </bdi>
                      </td>
                      <td className="d-none d-md-table-cell fs-md text-body-2 text-nowrap">
                        <bdi>
                          25 Aug 2026
                        </bdi>
                      </td>
                      <td className="text-end pe-3">
                        <div className="d-flex align-items-center justify-content-end gap-1">
                          <button
                            type="button"
                            className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 d-none d-sm-inline-flex"
                            data-file-star=""
                            aria-pressed="false"
                            aria-label="Star Release Notes v4.2.txt"
                            title="Star"
                          >
                            <i
                              className="icon-16 text-cat-amber icon-fill d-none"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-on=""
                            />
                            {" "}
                            <i
                              className="icon-16 text-muted-2"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-off=""
                            />
                          </button>
                          <div className="dropdown flex-shrink-0">
                            <button
                              type="button"
                              className="btn btn-ghost btn-18 rounded-circle"
                              id="fmRowMenu-fm-9"
                              data-bs-toggle="dropdown"
                              data-bs-auto-close="outside"
                              data-dd-fixed=""
                              data-bs-offset="0,8"
                              aria-expanded="false"
                              aria-label="More actions for Release Notes v4.2.txt"
                            >
                              <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                            </button>
                            {" "}
                            <ul
                              className="dropdown-menu dropdown-menu-end dropdown-menu-compact p-2"
                              aria-labelledby="fmRowMenu-fm-9"
                            >
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="open">
                                  <i data-lucide="external-link" aria-hidden="true" />
                                  Open
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="preview">
                                  <i data-lucide="eye" aria-hidden="true" />
                                  Preview
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="details">
                                  <i data-lucide="info" aria-hidden="true" />
                                  Details
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="download">
                                  <i data-lucide="download" aria-hidden="true" />
                                  Download
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="share">
                                  <i data-lucide="share-2" aria-hidden="true" />
                                  Share
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="rename">
                                  <i data-lucide="pencil" aria-hidden="true" />
                                  Rename
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="move">
                                  <i data-lucide="folder-input" aria-hidden="true" />
                                  Move to…
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="star">
                                  <i data-lucide="star" aria-hidden="true" />
                                  <span>
                                    <span className="d-none" data-file-star-text-on="">
                                      Remove star
                                    </span>
                                    <span className="" data-file-star-text-off="">
                                      Add star
                                    </span>
                                  </span>
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="dropdown-item dropdown-item-danger"
                                  data-file-action="delete"
                                >
                                  <i data-lucide="trash-2" aria-hidden="true" />
                                  Delete
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr
                      className=""
                      data-file-row="fm-10"
                      data-file-kind="file"
                      data-file-type="audio"
                      data-file-cat="audio"
                      data-file-loc="myfiles"
                      data-file-name="Podcast Episode 14.mp3"
                      data-file-size="44145049"
                      data-file-size-label="42.1 MB"
                      data-file-modified="2026-08-23"
                      data-file-modified-label="23 Aug 2026"
                      data-file-created-label="23 Aug 2026"
                      data-file-owner="Nisha Bose"
                      data-file-where="My Files / Marketing"
                      data-file-type-label="Audio"
                    >
                      <td className="ps-3">
                        <input
                          className="form-check-input mt-0"
                          type="checkbox"
                          data-file-pick=""
                          id="fmPickRow-fm-10"
                          aria-label="Select Podcast Episode 14.mp3"
                        />
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-2 gap-md-3">
                          <span className="icon-box icon-box-sm tint-cyan flex-shrink-0" aria-hidden="true">
                            <i data-lucide="file-audio" />
                          </span>
                          <button
                            type="button"
                            data-file-open=""
                            className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                          >
                            <span className="d-block fs-md fw-semibold text-title text-truncate" data-file-label="">
                              Podcast Episode 14.mp3
                            </span>
                            <span className="d-block fs-xs text-muted-2 text-truncate d-lg-none">
                              <bdi>
                                42.1 MB
                              </bdi>
                              {" "}·{" "}
                              <bdi>
                                23 Aug 2026
                              </bdi>
                            </span>
                            <span className="d-none d-lg-block fs-xs text-muted-2 text-truncate">
                              Audio
                            </span>
                          </button>
                        </div>
                      </td>
                      <td className="d-none d-xl-table-cell">
                        <div className="d-flex align-items-center gap-2">
                          <span
                            className="avatar avatar-xs bg-grad-2 flex-shrink-0"
                            role="img"
                            aria-label="Owner Nisha Bose"
                            title="Nisha Bose"
                          >
                            NB
                          </span>
                          <span className="fs-md text-body-2 text-truncate">
                            Nisha Bose
                          </span>
                        </div>
                      </td>
                      <td className="d-none d-lg-table-cell fs-md text-body-2 text-nowrap">
                        <bdi>
                          42.1 MB
                        </bdi>
                      </td>
                      <td className="d-none d-md-table-cell fs-md text-body-2 text-nowrap">
                        <bdi>
                          23 Aug 2026
                        </bdi>
                      </td>
                      <td className="text-end pe-3">
                        <div className="d-flex align-items-center justify-content-end gap-1">
                          <button
                            type="button"
                            className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 d-none d-sm-inline-flex"
                            data-file-star=""
                            aria-pressed="false"
                            aria-label="Star Podcast Episode 14.mp3"
                            title="Star"
                          >
                            <i
                              className="icon-16 text-cat-amber icon-fill d-none"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-on=""
                            />
                            {" "}
                            <i
                              className="icon-16 text-muted-2"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-off=""
                            />
                          </button>
                          <div className="dropdown flex-shrink-0">
                            <button
                              type="button"
                              className="btn btn-ghost btn-18 rounded-circle"
                              id="fmRowMenu-fm-10"
                              data-bs-toggle="dropdown"
                              data-bs-auto-close="outside"
                              data-dd-fixed=""
                              data-bs-offset="0,8"
                              aria-expanded="false"
                              aria-label="More actions for Podcast Episode 14.mp3"
                            >
                              <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                            </button>
                            {" "}
                            <ul
                              className="dropdown-menu dropdown-menu-end dropdown-menu-compact p-2"
                              aria-labelledby="fmRowMenu-fm-10"
                            >
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="open">
                                  <i data-lucide="external-link" aria-hidden="true" />
                                  Open
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="preview">
                                  <i data-lucide="eye" aria-hidden="true" />
                                  Preview
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="details">
                                  <i data-lucide="info" aria-hidden="true" />
                                  Details
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="download">
                                  <i data-lucide="download" aria-hidden="true" />
                                  Download
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="share">
                                  <i data-lucide="share-2" aria-hidden="true" />
                                  Share
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="rename">
                                  <i data-lucide="pencil" aria-hidden="true" />
                                  Rename
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="move">
                                  <i data-lucide="folder-input" aria-hidden="true" />
                                  Move to…
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="star">
                                  <i data-lucide="star" aria-hidden="true" />
                                  <span>
                                    <span className="d-none" data-file-star-text-on="">
                                      Remove star
                                    </span>
                                    <span className="" data-file-star-text-off="">
                                      Add star
                                    </span>
                                  </span>
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="dropdown-item dropdown-item-danger"
                                  data-file-action="delete"
                                >
                                  <i data-lucide="trash-2" aria-hidden="true" />
                                  Delete
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr
                      className=""
                      data-file-row="fm-11"
                      data-file-kind="file"
                      data-file-type="img"
                      data-file-cat="images"
                      data-file-loc="myfiles"
                      data-file-name="Storefront Mockup.jpg"
                      data-file-size="3040870"
                      data-file-size-label="2.9 MB"
                      data-file-modified="2026-08-22"
                      data-file-modified-label="22 Aug 2026"
                      data-file-created-label="20 Aug 2026"
                      data-file-owner="Meera Iyer"
                      data-file-where="My Files / Design Assets"
                      data-file-type-label="Image"
                    >
                      <td className="ps-3">
                        <input
                          className="form-check-input mt-0"
                          type="checkbox"
                          data-file-pick=""
                          id="fmPickRow-fm-11"
                          aria-label="Select Storefront Mockup.jpg"
                        />
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-2 gap-md-3">
                          <span className="icon-box icon-box-sm tint-violet flex-shrink-0" aria-hidden="true">
                            <i data-lucide="image" />
                          </span>
                          <button
                            type="button"
                            data-file-open=""
                            className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                          >
                            <span className="d-block fs-md fw-semibold text-title text-truncate" data-file-label="">
                              Storefront Mockup.jpg
                            </span>
                            <span className="d-block fs-xs text-muted-2 text-truncate d-lg-none">
                              <bdi>
                                2.9 MB
                              </bdi>
                              {" "}·{" "}
                              <bdi>
                                22 Aug 2026
                              </bdi>
                            </span>
                            <span className="d-none d-lg-block fs-xs text-muted-2 text-truncate">
                              Image
                            </span>
                          </button>
                        </div>
                      </td>
                      <td className="d-none d-xl-table-cell">
                        <div className="d-flex align-items-center gap-2">
                          <span
                            className="avatar avatar-xs flex-shrink-0"
                            role="img"
                            aria-label="Owner Meera Iyer"
                            title="Meera Iyer"
                          >
                            <img src="/assets/images/avatar-2.png" width="28" height="28" alt="" />
                          </span>
                          <span className="fs-md text-body-2 text-truncate">
                            Meera Iyer
                          </span>
                        </div>
                      </td>
                      <td className="d-none d-lg-table-cell fs-md text-body-2 text-nowrap">
                        <bdi>
                          2.9 MB
                        </bdi>
                      </td>
                      <td className="d-none d-md-table-cell fs-md text-body-2 text-nowrap">
                        <bdi>
                          22 Aug 2026
                        </bdi>
                      </td>
                      <td className="text-end pe-3">
                        <div className="d-flex align-items-center justify-content-end gap-1">
                          <button
                            type="button"
                            className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 d-none d-sm-inline-flex"
                            data-file-star=""
                            aria-pressed="false"
                            aria-label="Star Storefront Mockup.jpg"
                            title="Star"
                          >
                            <i
                              className="icon-16 text-cat-amber icon-fill d-none"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-on=""
                            />
                            {" "}
                            <i
                              className="icon-16 text-muted-2"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-off=""
                            />
                          </button>
                          <div className="dropdown flex-shrink-0">
                            <button
                              type="button"
                              className="btn btn-ghost btn-18 rounded-circle"
                              id="fmRowMenu-fm-11"
                              data-bs-toggle="dropdown"
                              data-bs-auto-close="outside"
                              data-dd-fixed=""
                              data-bs-offset="0,8"
                              aria-expanded="false"
                              aria-label="More actions for Storefront Mockup.jpg"
                            >
                              <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                            </button>
                            {" "}
                            <ul
                              className="dropdown-menu dropdown-menu-end dropdown-menu-compact p-2"
                              aria-labelledby="fmRowMenu-fm-11"
                            >
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="open">
                                  <i data-lucide="external-link" aria-hidden="true" />
                                  Open
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="preview">
                                  <i data-lucide="eye" aria-hidden="true" />
                                  Preview
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="details">
                                  <i data-lucide="info" aria-hidden="true" />
                                  Details
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="download">
                                  <i data-lucide="download" aria-hidden="true" />
                                  Download
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="share">
                                  <i data-lucide="share-2" aria-hidden="true" />
                                  Share
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="rename">
                                  <i data-lucide="pencil" aria-hidden="true" />
                                  Rename
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="move">
                                  <i data-lucide="folder-input" aria-hidden="true" />
                                  Move to…
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="star">
                                  <i data-lucide="star" aria-hidden="true" />
                                  <span>
                                    <span className="d-none" data-file-star-text-on="">
                                      Remove star
                                    </span>
                                    <span className="" data-file-star-text-off="">
                                      Add star
                                    </span>
                                  </span>
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="dropdown-item dropdown-item-danger"
                                  data-file-action="delete"
                                >
                                  <i data-lucide="trash-2" aria-hidden="true" />
                                  Delete
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr
                      className=""
                      data-file-row="fm-12"
                      data-file-kind="file"
                      data-file-type="pdf"
                      data-file-cat="documents"
                      data-file-loc="myfiles shared"
                      data-file-name="Annual Report 2025.pdf"
                      data-file-size="9856614"
                      data-file-size-label="9.4 MB"
                      data-file-modified="2026-08-20"
                      data-file-modified-label="20 Aug 2026"
                      data-file-created-label="3 Feb 2026"
                      data-file-owner="Priya Nair"
                      data-file-where="My Files / Reports"
                      data-file-type-label="PDF document"
                      data-file-shared=""
                      data-file-share-with="11 people"
                    >
                      <td className="ps-3">
                        <input
                          className="form-check-input mt-0"
                          type="checkbox"
                          data-file-pick=""
                          id="fmPickRow-fm-12"
                          aria-label="Select Annual Report 2025.pdf"
                        />
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-2 gap-md-3">
                          <span className="icon-box icon-box-sm tint-rose flex-shrink-0" aria-hidden="true">
                            <i data-lucide="file-text" />
                          </span>
                          <button
                            type="button"
                            data-file-open=""
                            className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                          >
                            <span className="d-block fs-md fw-semibold text-title text-truncate" data-file-label="">
                              Annual Report 2025.pdf
                            </span>
                            <span className="d-block fs-xs text-muted-2 text-truncate d-lg-none">
                              <bdi>
                                9.4 MB
                              </bdi>
                              {" "}·{" "}
                              <bdi>
                                20 Aug 2026
                              </bdi>
                            </span>
                            <span className="d-none d-lg-block fs-xs text-muted-2 text-truncate">
                              PDF document
                            </span>
                          </button>
                          <i
                            className="icon-14 text-muted-2 flex-shrink-0 d-none d-sm-inline"
                            data-lucide="users"
                            role="img"
                            aria-label="Shared"
                            title="Shared"
                          />
                        </div>
                      </td>
                      <td className="d-none d-xl-table-cell">
                        <div className="d-flex align-items-center gap-2">
                          <span
                            className="avatar avatar-xs flex-shrink-0"
                            role="img"
                            aria-label="Owner Priya Nair"
                            title="Priya Nair"
                          >
                            <img src="/assets/images/avatar-4.png" width="28" height="28" alt="" />
                          </span>
                          <span className="fs-md text-body-2 text-truncate">
                            Priya Nair
                          </span>
                        </div>
                      </td>
                      <td className="d-none d-lg-table-cell fs-md text-body-2 text-nowrap">
                        <bdi>
                          9.4 MB
                        </bdi>
                      </td>
                      <td className="d-none d-md-table-cell fs-md text-body-2 text-nowrap">
                        <bdi>
                          20 Aug 2026
                        </bdi>
                      </td>
                      <td className="text-end pe-3">
                        <div className="d-flex align-items-center justify-content-end gap-1">
                          <button
                            type="button"
                            className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 d-none d-sm-inline-flex"
                            data-file-star=""
                            aria-pressed="false"
                            aria-label="Star Annual Report 2025.pdf"
                            title="Star"
                          >
                            <i
                              className="icon-16 text-cat-amber icon-fill d-none"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-on=""
                            />
                            {" "}
                            <i
                              className="icon-16 text-muted-2"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-off=""
                            />
                          </button>
                          <div className="dropdown flex-shrink-0">
                            <button
                              type="button"
                              className="btn btn-ghost btn-18 rounded-circle"
                              id="fmRowMenu-fm-12"
                              data-bs-toggle="dropdown"
                              data-bs-auto-close="outside"
                              data-dd-fixed=""
                              data-bs-offset="0,8"
                              aria-expanded="false"
                              aria-label="More actions for Annual Report 2025.pdf"
                            >
                              <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                            </button>
                            {" "}
                            <ul
                              className="dropdown-menu dropdown-menu-end dropdown-menu-compact p-2"
                              aria-labelledby="fmRowMenu-fm-12"
                            >
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="open">
                                  <i data-lucide="external-link" aria-hidden="true" />
                                  Open
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="preview">
                                  <i data-lucide="eye" aria-hidden="true" />
                                  Preview
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="details">
                                  <i data-lucide="info" aria-hidden="true" />
                                  Details
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="download">
                                  <i data-lucide="download" aria-hidden="true" />
                                  Download
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="share">
                                  <i data-lucide="share-2" aria-hidden="true" />
                                  Share
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="rename">
                                  <i data-lucide="pencil" aria-hidden="true" />
                                  Rename
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="move">
                                  <i data-lucide="folder-input" aria-hidden="true" />
                                  Move to…
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="star">
                                  <i data-lucide="star" aria-hidden="true" />
                                  <span>
                                    <span className="d-none" data-file-star-text-on="">
                                      Remove star
                                    </span>
                                    <span className="" data-file-star-text-off="">
                                      Add star
                                    </span>
                                  </span>
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="dropdown-item dropdown-item-danger"
                                  data-file-action="delete"
                                >
                                  <i data-lucide="trash-2" aria-hidden="true" />
                                  Delete
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr
                      className=""
                      data-file-row="fm-13"
                      data-file-kind="file"
                      data-file-type="video"
                      data-file-cat="videos"
                      data-file-loc="myfiles starred"
                      data-file-name="Feature Demo Reel.mp4"
                      data-file-size="222298112"
                      data-file-size-label="212 MB"
                      data-file-modified="2026-08-18"
                      data-file-modified-label="18 Aug 2026"
                      data-file-created-label="16 Aug 2026"
                      data-file-owner="Dev Sharma"
                      data-file-where="My Files / Projects"
                      data-file-type-label="Video"
                      data-file-starred=""
                    >
                      <td className="ps-3">
                        <input
                          className="form-check-input mt-0"
                          type="checkbox"
                          data-file-pick=""
                          id="fmPickRow-fm-13"
                          aria-label="Select Feature Demo Reel.mp4"
                        />
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-2 gap-md-3">
                          <span className="icon-box icon-box-sm tint-magenta flex-shrink-0" aria-hidden="true">
                            <i data-lucide="file-video" />
                          </span>
                          <button
                            type="button"
                            data-file-open=""
                            className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                          >
                            <span className="d-block fs-md fw-semibold text-title text-truncate" data-file-label="">
                              Feature Demo Reel.mp4
                            </span>
                            <span className="d-block fs-xs text-muted-2 text-truncate d-lg-none">
                              <bdi>
                                212 MB
                              </bdi>
                              {" "}·{" "}
                              <bdi>
                                18 Aug 2026
                              </bdi>
                            </span>
                            <span className="d-none d-lg-block fs-xs text-muted-2 text-truncate">
                              Video
                            </span>
                          </button>
                        </div>
                      </td>
                      <td className="d-none d-xl-table-cell">
                        <div className="d-flex align-items-center gap-2">
                          <span
                            className="avatar avatar-xs bg-grad-6 flex-shrink-0"
                            role="img"
                            aria-label="Owner Dev Sharma"
                            title="Dev Sharma"
                          >
                            DS
                          </span>
                          <span className="fs-md text-body-2 text-truncate">
                            Dev Sharma
                          </span>
                        </div>
                      </td>
                      <td className="d-none d-lg-table-cell fs-md text-body-2 text-nowrap">
                        <bdi>
                          212 MB
                        </bdi>
                      </td>
                      <td className="d-none d-md-table-cell fs-md text-body-2 text-nowrap">
                        <bdi>
                          18 Aug 2026
                        </bdi>
                      </td>
                      <td className="text-end pe-3">
                        <div className="d-flex align-items-center justify-content-end gap-1">
                          <button
                            type="button"
                            className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 d-none d-sm-inline-flex"
                            data-file-star=""
                            aria-pressed="true"
                            aria-label="Star Feature Demo Reel.mp4"
                            title="Star"
                          >
                            <i
                              className="icon-16 text-cat-amber icon-fill"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-on=""
                            />
                            {" "}
                            <i
                              className="icon-16 text-muted-2 d-none"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-off=""
                            />
                          </button>
                          <div className="dropdown flex-shrink-0">
                            <button
                              type="button"
                              className="btn btn-ghost btn-18 rounded-circle"
                              id="fmRowMenu-fm-13"
                              data-bs-toggle="dropdown"
                              data-bs-auto-close="outside"
                              data-dd-fixed=""
                              data-bs-offset="0,8"
                              aria-expanded="false"
                              aria-label="More actions for Feature Demo Reel.mp4"
                            >
                              <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                            </button>
                            {" "}
                            <ul
                              className="dropdown-menu dropdown-menu-end dropdown-menu-compact p-2"
                              aria-labelledby="fmRowMenu-fm-13"
                            >
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="open">
                                  <i data-lucide="external-link" aria-hidden="true" />
                                  Open
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="preview">
                                  <i data-lucide="eye" aria-hidden="true" />
                                  Preview
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="details">
                                  <i data-lucide="info" aria-hidden="true" />
                                  Details
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="download">
                                  <i data-lucide="download" aria-hidden="true" />
                                  Download
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="share">
                                  <i data-lucide="share-2" aria-hidden="true" />
                                  Share
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="rename">
                                  <i data-lucide="pencil" aria-hidden="true" />
                                  Rename
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="move">
                                  <i data-lucide="folder-input" aria-hidden="true" />
                                  Move to…
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="star">
                                  <i data-lucide="star" aria-hidden="true" />
                                  <span>
                                    <span className="" data-file-star-text-on="">
                                      Remove star
                                    </span>
                                    <span className="d-none" data-file-star-text-off="">
                                      Add star
                                    </span>
                                  </span>
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="dropdown-item dropdown-item-danger"
                                  data-file-action="delete"
                                >
                                  <i data-lucide="trash-2" aria-hidden="true" />
                                  Delete
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr
                      className=""
                      data-file-row="fm-14"
                      data-file-kind="file"
                      data-file-type="zip"
                      data-file-cat="archives"
                      data-file-loc="myfiles"
                      data-file-name="Legacy Assets Backup.zip"
                      data-file-size="1181116006"
                      data-file-size-label="1.1 GB"
                      data-file-modified="2026-08-15"
                      data-file-modified-label="15 Aug 2026"
                      data-file-created-label="15 Aug 2026"
                      data-file-owner="Kabir Nair"
                      data-file-where="My Files / Projects"
                      data-file-type-label="Archive"
                    >
                      <td className="ps-3">
                        <input
                          className="form-check-input mt-0"
                          type="checkbox"
                          data-file-pick=""
                          id="fmPickRow-fm-14"
                          aria-label="Select Legacy Assets Backup.zip"
                        />
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-2 gap-md-3">
                          <span className="icon-box icon-box-sm tint-amber flex-shrink-0" aria-hidden="true">
                            <i data-lucide="file-archive" />
                          </span>
                          <button
                            type="button"
                            data-file-open=""
                            className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                          >
                            <span className="d-block fs-md fw-semibold text-title text-truncate" data-file-label="">
                              Legacy Assets Backup.zip
                            </span>
                            <span className="d-block fs-xs text-muted-2 text-truncate d-lg-none">
                              <bdi>
                                1.1 GB
                              </bdi>
                              {" "}·{" "}
                              <bdi>
                                15 Aug 2026
                              </bdi>
                            </span>
                            <span className="d-none d-lg-block fs-xs text-muted-2 text-truncate">
                              Archive
                            </span>
                          </button>
                        </div>
                      </td>
                      <td className="d-none d-xl-table-cell">
                        <div className="d-flex align-items-center gap-2">
                          <span
                            className="avatar avatar-xs flex-shrink-0"
                            role="img"
                            aria-label="Owner Kabir Nair"
                            title="Kabir Nair"
                          >
                            <img src="/assets/images/avatar-3.png" width="28" height="28" alt="" />
                          </span>
                          <span className="fs-md text-body-2 text-truncate">
                            Kabir Nair
                          </span>
                        </div>
                      </td>
                      <td className="d-none d-lg-table-cell fs-md text-body-2 text-nowrap">
                        <bdi>
                          1.1 GB
                        </bdi>
                      </td>
                      <td className="d-none d-md-table-cell fs-md text-body-2 text-nowrap">
                        <bdi>
                          15 Aug 2026
                        </bdi>
                      </td>
                      <td className="text-end pe-3">
                        <div className="d-flex align-items-center justify-content-end gap-1">
                          <button
                            type="button"
                            className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 d-none d-sm-inline-flex"
                            data-file-star=""
                            aria-pressed="false"
                            aria-label="Star Legacy Assets Backup.zip"
                            title="Star"
                          >
                            <i
                              className="icon-16 text-cat-amber icon-fill d-none"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-on=""
                            />
                            {" "}
                            <i
                              className="icon-16 text-muted-2"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-off=""
                            />
                          </button>
                          <div className="dropdown flex-shrink-0">
                            <button
                              type="button"
                              className="btn btn-ghost btn-18 rounded-circle"
                              id="fmRowMenu-fm-14"
                              data-bs-toggle="dropdown"
                              data-bs-auto-close="outside"
                              data-dd-fixed=""
                              data-bs-offset="0,8"
                              aria-expanded="false"
                              aria-label="More actions for Legacy Assets Backup.zip"
                            >
                              <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                            </button>
                            {" "}
                            <ul
                              className="dropdown-menu dropdown-menu-end dropdown-menu-compact p-2"
                              aria-labelledby="fmRowMenu-fm-14"
                            >
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="open">
                                  <i data-lucide="external-link" aria-hidden="true" />
                                  Open
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="preview">
                                  <i data-lucide="eye" aria-hidden="true" />
                                  Preview
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="details">
                                  <i data-lucide="info" aria-hidden="true" />
                                  Details
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="download">
                                  <i data-lucide="download" aria-hidden="true" />
                                  Download
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="share">
                                  <i data-lucide="share-2" aria-hidden="true" />
                                  Share
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="rename">
                                  <i data-lucide="pencil" aria-hidden="true" />
                                  Rename
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="move">
                                  <i data-lucide="folder-input" aria-hidden="true" />
                                  Move to…
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="star">
                                  <i data-lucide="star" aria-hidden="true" />
                                  <span>
                                    <span className="d-none" data-file-star-text-on="">
                                      Remove star
                                    </span>
                                    <span className="" data-file-star-text-off="">
                                      Add star
                                    </span>
                                  </span>
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="dropdown-item dropdown-item-danger"
                                  data-file-action="delete"
                                >
                                  <i data-lucide="trash-2" aria-hidden="true" />
                                  Delete
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr
                      className="d-none"
                      data-file-row="fm-t1"
                      data-file-kind="file"
                      data-file-type="doc"
                      data-file-cat="documents"
                      data-file-loc="trash"
                      data-file-name="Old Pricing Sheet.docx"
                      data-file-size="249856"
                      data-file-size-label="244 KB"
                      data-file-modified="2026-08-11"
                      data-file-modified-label="11 Aug 2026"
                      data-file-created-label="2 May 2026"
                      data-file-owner="Ravisha V"
                      data-file-where="Trash"
                      data-file-type-label="Word document"
                    >
                      <td className="ps-3">
                        <input
                          className="form-check-input mt-0"
                          type="checkbox"
                          data-file-pick=""
                          id="fmPickRow-fm-t1"
                          aria-label="Select Old Pricing Sheet.docx"
                        />
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-2 gap-md-3">
                          <span className="icon-box icon-box-sm tint-blue flex-shrink-0" aria-hidden="true">
                            <i data-lucide="file-text" />
                          </span>
                          <button
                            type="button"
                            data-file-open=""
                            className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                          >
                            <span className="d-block fs-md fw-semibold text-title text-truncate" data-file-label="">
                              Old Pricing Sheet.docx
                            </span>
                            <span className="d-block fs-xs text-muted-2 text-truncate d-lg-none">
                              <bdi>
                                244 KB
                              </bdi>
                              {" "}·{" "}
                              <bdi>
                                11 Aug 2026
                              </bdi>
                            </span>
                            <span className="d-none d-lg-block fs-xs text-muted-2 text-truncate">
                              Word document
                            </span>
                          </button>
                        </div>
                      </td>
                      <td className="d-none d-xl-table-cell">
                        <div className="d-flex align-items-center gap-2">
                          <span
                            className="avatar avatar-xs flex-shrink-0"
                            role="img"
                            aria-label="Owner Ravisha V"
                            title="Ravisha V"
                          >
                            <img src="/assets/images/avatar-user.png" width="28" height="28" alt="" />
                          </span>
                          <span className="fs-md text-body-2 text-truncate">
                            Ravisha V
                          </span>
                        </div>
                      </td>
                      <td className="d-none d-lg-table-cell fs-md text-body-2 text-nowrap">
                        <bdi>
                          244 KB
                        </bdi>
                      </td>
                      <td className="d-none d-md-table-cell fs-md text-body-2 text-nowrap">
                        <bdi>
                          11 Aug 2026
                        </bdi>
                      </td>
                      <td className="text-end pe-3">
                        <div className="d-flex align-items-center justify-content-end gap-1">
                          <button
                            type="button"
                            className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 d-none d-sm-inline-flex"
                            data-file-star=""
                            aria-pressed="false"
                            aria-label="Star Old Pricing Sheet.docx"
                            title="Star"
                          >
                            <i
                              className="icon-16 text-cat-amber icon-fill d-none"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-on=""
                            />
                            {" "}
                            <i
                              className="icon-16 text-muted-2"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-off=""
                            />
                          </button>
                          <div className="dropdown flex-shrink-0">
                            <button
                              type="button"
                              className="btn btn-ghost btn-18 rounded-circle"
                              id="fmRowMenu-fm-t1"
                              data-bs-toggle="dropdown"
                              data-bs-auto-close="outside"
                              data-dd-fixed=""
                              data-bs-offset="0,8"
                              aria-expanded="false"
                              aria-label="More actions for Old Pricing Sheet.docx"
                            >
                              <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                            </button>
                            {" "}
                            <ul
                              className="dropdown-menu dropdown-menu-end dropdown-menu-compact p-2"
                              aria-labelledby="fmRowMenu-fm-t1"
                            >
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="open">
                                  <i data-lucide="external-link" aria-hidden="true" />
                                  Open
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="preview">
                                  <i data-lucide="eye" aria-hidden="true" />
                                  Preview
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="details">
                                  <i data-lucide="info" aria-hidden="true" />
                                  Details
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="download">
                                  <i data-lucide="download" aria-hidden="true" />
                                  Download
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="share">
                                  <i data-lucide="share-2" aria-hidden="true" />
                                  Share
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="rename">
                                  <i data-lucide="pencil" aria-hidden="true" />
                                  Rename
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="move">
                                  <i data-lucide="folder-input" aria-hidden="true" />
                                  Move to…
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="star">
                                  <i data-lucide="star" aria-hidden="true" />
                                  <span>
                                    <span className="d-none" data-file-star-text-on="">
                                      Remove star
                                    </span>
                                    <span className="" data-file-star-text-off="">
                                      Add star
                                    </span>
                                  </span>
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="dropdown-item dropdown-item-danger"
                                  data-file-action="delete"
                                >
                                  <i data-lucide="trash-2" aria-hidden="true" />
                                  Delete
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr
                      className="d-none"
                      data-file-row="fm-t2"
                      data-file-kind="file"
                      data-file-type="img"
                      data-file-cat="images"
                      data-file-loc="trash"
                      data-file-name="Deprecated Logo.png"
                      data-file-size="831488"
                      data-file-size-label="812 KB"
                      data-file-modified="2026-08-06"
                      data-file-modified-label="6 Aug 2026"
                      data-file-created-label="9 Jan 2026"
                      data-file-owner="Meera Iyer"
                      data-file-where="Trash"
                      data-file-type-label="Image"
                    >
                      <td className="ps-3">
                        <input
                          className="form-check-input mt-0"
                          type="checkbox"
                          data-file-pick=""
                          id="fmPickRow-fm-t2"
                          aria-label="Select Deprecated Logo.png"
                        />
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-2 gap-md-3">
                          <span className="icon-box icon-box-sm tint-violet flex-shrink-0" aria-hidden="true">
                            <i data-lucide="image" />
                          </span>
                          <button
                            type="button"
                            data-file-open=""
                            className="d-flex flex-column align-items-stretch flex-grow-1 min-w-0 p-0 border-0 bg-transparent text-start"
                          >
                            <span className="d-block fs-md fw-semibold text-title text-truncate" data-file-label="">
                              Deprecated Logo.png
                            </span>
                            <span className="d-block fs-xs text-muted-2 text-truncate d-lg-none">
                              <bdi>
                                812 KB
                              </bdi>
                              {" "}·{" "}
                              <bdi>
                                6 Aug 2026
                              </bdi>
                            </span>
                            <span className="d-none d-lg-block fs-xs text-muted-2 text-truncate">
                              Image
                            </span>
                          </button>
                        </div>
                      </td>
                      <td className="d-none d-xl-table-cell">
                        <div className="d-flex align-items-center gap-2">
                          <span
                            className="avatar avatar-xs flex-shrink-0"
                            role="img"
                            aria-label="Owner Meera Iyer"
                            title="Meera Iyer"
                          >
                            <img src="/assets/images/avatar-2.png" width="28" height="28" alt="" />
                          </span>
                          <span className="fs-md text-body-2 text-truncate">
                            Meera Iyer
                          </span>
                        </div>
                      </td>
                      <td className="d-none d-lg-table-cell fs-md text-body-2 text-nowrap">
                        <bdi>
                          812 KB
                        </bdi>
                      </td>
                      <td className="d-none d-md-table-cell fs-md text-body-2 text-nowrap">
                        <bdi>
                          6 Aug 2026
                        </bdi>
                      </td>
                      <td className="text-end pe-3">
                        <div className="d-flex align-items-center justify-content-end gap-1">
                          <button
                            type="button"
                            className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 d-none d-sm-inline-flex"
                            data-file-star=""
                            aria-pressed="false"
                            aria-label="Star Deprecated Logo.png"
                            title="Star"
                          >
                            <i
                              className="icon-16 text-cat-amber icon-fill d-none"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-on=""
                            />
                            {" "}
                            <i
                              className="icon-16 text-muted-2"
                              data-lucide="star"
                              aria-hidden="true"
                              data-file-star-off=""
                            />
                          </button>
                          <div className="dropdown flex-shrink-0">
                            <button
                              type="button"
                              className="btn btn-ghost btn-18 rounded-circle"
                              id="fmRowMenu-fm-t2"
                              data-bs-toggle="dropdown"
                              data-bs-auto-close="outside"
                              data-dd-fixed=""
                              data-bs-offset="0,8"
                              aria-expanded="false"
                              aria-label="More actions for Deprecated Logo.png"
                            >
                              <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                            </button>
                            {" "}
                            <ul
                              className="dropdown-menu dropdown-menu-end dropdown-menu-compact p-2"
                              aria-labelledby="fmRowMenu-fm-t2"
                            >
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="open">
                                  <i data-lucide="external-link" aria-hidden="true" />
                                  Open
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="preview">
                                  <i data-lucide="eye" aria-hidden="true" />
                                  Preview
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="details">
                                  <i data-lucide="info" aria-hidden="true" />
                                  Details
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="download">
                                  <i data-lucide="download" aria-hidden="true" />
                                  Download
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="share">
                                  <i data-lucide="share-2" aria-hidden="true" />
                                  Share
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="rename">
                                  <i data-lucide="pencil" aria-hidden="true" />
                                  Rename
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="move">
                                  <i data-lucide="folder-input" aria-hidden="true" />
                                  Move to…
                                </button>
                              </li>
                              <li>
                                <button type="button" className="dropdown-item" data-file-action="star">
                                  <i data-lucide="star" aria-hidden="true" />
                                  <span>
                                    <span className="d-none" data-file-star-text-on="">
                                      Remove star
                                    </span>
                                    <span className="" data-file-star-text-off="">
                                      Add star
                                    </span>
                                  </span>
                                </button>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="dropdown-item dropdown-item-danger"
                                  data-file-action="delete"
                                >
                                  <i data-lucide="trash-2" aria-hidden="true" />
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
              <div className="d-none text-center px-3 py-5" data-file-empty="list">
                <span className="notif-empty-icon" aria-hidden="true">
                  <i data-lucide="search-x" />
                </span>
                <p className="fw-semibold text-title mt-2 mb-1">
                  Nothing to show here
                </p>
                <p className="fs-md text-body-2 mb-3">
                  No file or folder matches this location, search or filter.
                </p>
                <button type="button" className="btn btn-outline-soft btn-sm" data-file-action="reset">
                  Reset filters
                </button>
              </div>
            </div>
          </div>
          <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 px-3 py-2 border-t-soft flex-shrink-0">
            <p className="fs-xs text-muted-2 mb-0">
              Showing
              {" "}
              <bdi data-file-out="shown">
                20
              </bdi>
              {" "}of{" "}
              <bdi data-file-out="total">
                20
              </bdi>
              {" "}
              items
            </p>
            {/* Every demo message is written here; script only reveals one. */}
            <p className="fs-xs text-muted-2 mb-0 d-none" data-file-note="" aria-live="polite">
              <span className="d-none" data-file-note-for="folder">
                Static demo —
                {" "}
                <bdi data-file-note-name="" />
                {" "}
                was not added; the folder list lives in the HTML.
              </span>
              {" "}
              <span className="d-none" data-file-note-for="upload">
                Static demo — uploads are not added to the list; the files live in the HTML.
              </span>
              {" "}
              <span className="d-none" data-file-note-for="download">
                Static demo — downloading is not wired up in this template.
              </span>
              {" "}
              <span className="d-none" data-file-note-for="share">
                Static demo — sharing is not wired up in this template.
              </span>
              {" "}
              <span className="d-none" data-file-note-for="move">
                Static demo — moving is not wired up in this template.
              </span>
            </p>
          </div>
        </section>
        {/* ========== Details drawer (a drawer at every width) ========== */}
        <aside className="offcanvas offcanvas-end" tabIndex="-1" id="fmDetailPane" aria-labelledby="fmDetailTitle">
          <div className="offcanvas-header align-items-start gap-2 border-b-soft">
            <div className="min-w-0">
              <span className="badge-soft tint-primary" data-file-out="detail-type">
                Folder
              </span>
              <h2
                className="offcanvas-title fs-5 fw-bold text-title text-break mt-2 mb-0"
                id="fmDetailTitle"
                data-file-out="detail-name"
              >
                Design Assets
              </h2>
            </div>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
          </div>
          <div className="offcanvas-body d-flex flex-column gap-4">
            <div className="d-flex flex-wrap gap-2">
              <button
                type="button"
                className="btn btn-primary btn-sm d-flex align-items-center gap-2"
                data-file-action="download"
              >
                <i className="icon-16" data-lucide="download" aria-hidden="true" />
                Download
              </button>
              <button
                type="button"
                className="btn btn-outline-soft btn-sm d-flex align-items-center gap-2"
                data-file-action="share"
              >
                <i className="icon-16" data-lucide="share-2" aria-hidden="true" />
                Share
              </button>
              <button
                type="button"
                className="btn btn-outline-soft btn-sm d-flex align-items-center gap-2"
                data-file-action="rename"
              >
                <i className="icon-16" data-lucide="pencil" aria-hidden="true" />
                Rename
              </button>
            </div>
            <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
              <li className="d-flex align-items-start gap-2">
                <span className="icon-box icon-box-sm tint-primary flex-shrink-0" aria-hidden="true">
                  <i data-lucide="shapes" />
                </span>
                <span className="min-w-0">
                  {" "}
                  <span className="d-block fs-xs text-muted-2">
                    Type
                  </span>
                  {" "}
                  <span className="d-block fs-md text-body-2" data-file-out="detail-type-label">
                    Folder
                  </span>
                  {" "}
                </span>
              </li>
              <li className="d-flex align-items-start gap-2">
                <span className="icon-box icon-box-sm tint-primary flex-shrink-0" aria-hidden="true">
                  <i data-lucide="database" />
                </span>
                <span className="min-w-0">
                  {" "}
                  <span className="d-block fs-xs text-muted-2">
                    Size
                  </span>
                  {" "}
                  <span className="d-block fs-md text-body-2">
                    <bdi data-file-out="detail-size">
                      2.4 GB
                    </bdi>
                  </span>
                  {" "}
                </span>
              </li>
              <li className="d-flex align-items-start gap-2">
                <span className="icon-box icon-box-sm tint-primary flex-shrink-0" aria-hidden="true">
                  <i data-lucide="folder" />
                </span>
                <span className="min-w-0">
                  {" "}
                  <span className="d-block fs-xs text-muted-2">
                    Location
                  </span>
                  {" "}
                  <span className="d-block fs-md text-body-2" data-file-out="detail-where">
                    My Files
                  </span>
                  {" "}
                </span>
              </li>
              <li className="d-flex align-items-start gap-2">
                <span className="icon-box icon-box-sm tint-primary flex-shrink-0" aria-hidden="true">
                  <i data-lucide="calendar-days" />
                </span>
                <span className="min-w-0">
                  {" "}
                  <span className="d-block fs-xs text-muted-2">
                    Created
                  </span>
                  {" "}
                  <span className="d-block fs-md text-body-2">
                    <bdi data-file-out="detail-created">
                      11 Jun 2026
                    </bdi>
                  </span>
                  {" "}
                </span>
              </li>
              <li className="d-flex align-items-start gap-2">
                <span className="icon-box icon-box-sm tint-primary flex-shrink-0" aria-hidden="true">
                  <i data-lucide="clock" />
                </span>
                <span className="min-w-0">
                  {" "}
                  <span className="d-block fs-xs text-muted-2">
                    Modified
                  </span>
                  {" "}
                  <span className="d-block fs-md text-body-2">
                    <bdi data-file-out="detail-modified">
                      2 Sep 2026
                    </bdi>
                  </span>
                  {" "}
                </span>
              </li>
              <li className="d-flex align-items-start gap-2">
                <span className="icon-box icon-box-sm tint-primary flex-shrink-0" aria-hidden="true">
                  <i data-lucide="user-round" />
                </span>
                <span className="min-w-0">
                  {" "}
                  <span className="d-block fs-xs text-muted-2">
                    Owner
                  </span>
                  {" "}
                  <span className="d-block fs-md text-body-2" data-file-out="detail-owner">
                    Meera Iyer
                  </span>
                  {" "}
                </span>
              </li>
              <li className="d-flex align-items-start gap-2">
                <span className="icon-box icon-box-sm tint-primary flex-shrink-0" aria-hidden="true">
                  <i data-lucide="users" />
                </span>
                <span className="min-w-0">
                  {" "}
                  <span className="d-block fs-xs text-muted-2">
                    Sharing
                  </span>
                  {" "}
                  <span className="d-block fs-md text-body-2" data-file-out="detail-share">
                    Shared with 8 people
                  </span>
                  {" "}
                </span>
              </li>
            </ul>
            <div data-file-detail-block="share">
              <h3 className="fs-md fw-semibold text-title mb-2">
                Shared with
              </h3>
              <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                <li className="d-flex align-items-center gap-2 p-2 rounded-3 tile-soft">
                  <span className="avatar avatar-sm flex-shrink-0" aria-hidden="true">
                    <img src="/assets/images/avatar-2.png" width="34" height="34" alt="" />
                  </span>
                  <span className="flex-grow-1 min-w-0">
                    {" "}
                    <span className="d-block fs-md fw-semibold text-title text-truncate">
                      Meera Iyer
                    </span>
                    {" "}
                    <span className="d-block fs-xs text-muted-2 text-truncate">
                      Owner
                    </span>
                    {" "}
                  </span>
                </li>
                <li className="d-flex align-items-center gap-2 p-2 rounded-3 tile-soft">
                  <span className="avatar avatar-sm flex-shrink-0" aria-hidden="true">
                    <img src="/assets/images/avatar-1.png" width="34" height="34" alt="" />
                  </span>
                  <span className="flex-grow-1 min-w-0">
                    {" "}
                    <span className="d-block fs-md fw-semibold text-title text-truncate">
                      Aarav Shah
                    </span>
                    {" "}
                    <span className="d-block fs-xs text-muted-2 text-truncate">
                      Can edit
                    </span>
                    {" "}
                  </span>
                </li>
                <li className="d-flex align-items-center gap-2 p-2 rounded-3 tile-soft">
                  <span className="avatar avatar-sm flex-shrink-0" aria-hidden="true">
                    <img src="/assets/images/avatar-3.png" width="34" height="34" alt="" />
                  </span>
                  <span className="flex-grow-1 min-w-0">
                    {" "}
                    <span className="d-block fs-md fw-semibold text-title text-truncate">
                      Kabir Nair
                    </span>
                    {" "}
                    <span className="d-block fs-xs text-muted-2 text-truncate">
                      Can view
                    </span>
                    {" "}
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="fs-md fw-semibold text-title mb-2">
                Activity
              </h3>
              <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                <li className="d-flex align-items-start gap-2">
                  <span className="icon-box icon-box-sm tint-emerald flex-shrink-0" aria-hidden="true">
                    <i data-lucide="pencil" />
                  </span>
                  <span className="min-w-0">
                    {" "}
                    <span className="d-block fs-md text-body-2">
                      Meera Iyer renamed this item
                    </span>
                    {" "}
                    <span className="d-block fs-xs text-muted-2">
                      <bdi>
                        2 Sep 2026 · 14:20
                      </bdi>
                    </span>
                    {" "}
                  </span>
                </li>
                <li className="d-flex align-items-start gap-2">
                  <span className="icon-box icon-box-sm tint-blue flex-shrink-0" aria-hidden="true">
                    <i data-lucide="share-2" />
                  </span>
                  <span className="min-w-0">
                    {" "}
                    <span className="d-block fs-md text-body-2">
                      Aarav Shah was given edit access
                    </span>
                    {" "}
                    <span className="d-block fs-xs text-muted-2">
                      <bdi>
                        28 Aug 2026 · 09:41
                      </bdi>
                    </span>
                    {" "}
                  </span>
                </li>
                <li className="d-flex align-items-start gap-2">
                  <span className="icon-box icon-box-sm tint-violet flex-shrink-0" aria-hidden="true">
                    <i data-lucide="cloud-upload" />
                  </span>
                  <span className="min-w-0">
                    {" "}
                    <span className="d-block fs-md text-body-2">
                      Uploaded to My Files
                    </span>
                    {" "}
                    <span className="d-block fs-xs text-muted-2">
                      <bdi>
                        11 Jun 2026 · 17:05
                      </bdi>
                    </span>
                    {" "}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </section>
      {/* ========== Preview dialog ========== */}
      <div
        role="dialog"
        className="modal fade"
        id="fmPreviewModal"
        tabIndex="-1"
        aria-labelledby="fmPreviewLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header border-b-soft">
              <div className="min-w-0">
                <h2
                  className="modal-title fs-5 fw-bold text-title text-break mb-1"
                  id="fmPreviewLabel"
                  data-file-out="preview-name"
                >
                  Brand Guidelines.pdf
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  <span data-file-out="preview-type">
                    PDF document
                  </span>
                  {" "}·{" "}
                  <bdi data-file-out="preview-size">
                    4.6 MB
                  </bdi>
                  {" "}·{" "}
                  <bdi data-file-out="preview-modified">
                    2 Sep 2026
                  </bdi>
                </p>
              </div>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              {/* One stage per record. All ship hidden because the dialog is
                 closed; opening it reveals the one that belongs to the file. */}
              {" "}
              <div className="ratio ratio-16x9 rounded-3 overflow-hidden bg-soft d-none" data-file-preview-for="fm-f1">
                <span className="d-flex flex-column align-items-center justify-content-center gap-2 w-100 h-100">
                  <i className="icon-24 text-brand" data-lucide="folder" aria-hidden="true" />
                  <span className="fs-md text-body-2">
                    No preview for folders
                  </span>
                </span>
              </div>
              {" "}
              <div className="ratio ratio-16x9 rounded-3 overflow-hidden bg-soft d-none" data-file-preview-for="fm-f2">
                <span className="d-flex flex-column align-items-center justify-content-center gap-2 w-100 h-100">
                  <i className="icon-24 text-brand" data-lucide="folder" aria-hidden="true" />
                  <span className="fs-md text-body-2">
                    No preview for folders
                  </span>
                </span>
              </div>
              {" "}
              <div className="ratio ratio-16x9 rounded-3 overflow-hidden bg-soft d-none" data-file-preview-for="fm-f3">
                <span className="d-flex flex-column align-items-center justify-content-center gap-2 w-100 h-100">
                  <i className="icon-24 text-brand" data-lucide="folder" aria-hidden="true" />
                  <span className="fs-md text-body-2">
                    No preview for folders
                  </span>
                </span>
              </div>
              {" "}
              <div className="ratio ratio-16x9 rounded-3 overflow-hidden bg-soft d-none" data-file-preview-for="fm-f4">
                <span className="d-flex flex-column align-items-center justify-content-center gap-2 w-100 h-100">
                  <i className="icon-24 text-brand" data-lucide="folder" aria-hidden="true" />
                  <span className="fs-md text-body-2">
                    No preview for folders
                  </span>
                </span>
              </div>
              {" "}
              <div className="ratio ratio-16x9 rounded-3 overflow-hidden bg-soft d-none" data-file-preview-for="fm-f5">
                <span className="d-flex flex-column align-items-center justify-content-center gap-2 w-100 h-100">
                  <i className="icon-24 text-brand" data-lucide="folder" aria-hidden="true" />
                  <span className="fs-md text-body-2">
                    No preview for folders
                  </span>
                </span>
              </div>
              {" "}
              <div className="ratio ratio-16x9 rounded-3 overflow-hidden bg-soft d-none" data-file-preview-for="fm-f6">
                <span className="d-flex flex-column align-items-center justify-content-center gap-2 w-100 h-100">
                  <i className="icon-24 text-brand" data-lucide="folder" aria-hidden="true" />
                  <span className="fs-md text-body-2">
                    No preview for folders
                  </span>
                </span>
              </div>
              {" "}
              <div className="ratio ratio-16x9 rounded-3 overflow-hidden bg-soft d-none" data-file-preview-for="fm-1">
                <span className="d-flex flex-column align-items-center justify-content-center gap-2 w-100 h-100">
                  <i className="icon-24 text-cat-rose" data-lucide="file-text" aria-hidden="true" />
                  <span className="fs-md text-body-2">
                    No preview for pdf documents
                  </span>
                </span>
              </div>
              {" "}
              <div className="ratio ratio-16x9 rounded-3 overflow-hidden bg-soft d-none" data-file-preview-for="fm-2">
                <span className="d-flex flex-column align-items-center justify-content-center gap-2 w-100 h-100">
                  <i className="icon-24 text-cat-emerald" data-lucide="file-spreadsheet" aria-hidden="true" />
                  <span className="fs-md text-body-2">
                    No preview for excel spreadsheets
                  </span>
                </span>
              </div>
              {" "}
              <div className="ratio ratio-16x9 rounded-3 overflow-hidden bg-soft d-none" data-file-preview-for="fm-3">
                <span className="d-flex flex-column align-items-center justify-content-center gap-2 w-100 h-100">
                  <i className="icon-24 text-cat-orange" data-lucide="presentation" aria-hidden="true" />
                  <span className="fs-md text-body-2">
                    No preview for powerpoint decks
                  </span>
                </span>
              </div>
              {" "}
              <div className="ratio ratio-16x9 rounded-3 overflow-hidden bg-soft d-none" data-file-preview-for="fm-4">
                <span className="d-flex flex-column align-items-center justify-content-center gap-2 w-100 h-100">
                  <i className="icon-24 text-cat-blue" data-lucide="file-text" aria-hidden="true" />
                  <span className="fs-md text-body-2">
                    No preview for word documents
                  </span>
                </span>
              </div>
              {" "}
              <div className="ratio ratio-16x9 rounded-3 overflow-hidden bg-soft d-none" data-file-preview-for="fm-5">
                <img
                  src="/assets/images/inventory-1.jpg"
                  width="960"
                  height="540"
                  className="w-100 h-100 object-fit-contain"
                  alt="Preview of Autumn Campaign Hero.jpg"
                />
              </div>
              {" "}
              <div className="ratio ratio-16x9 rounded-3 overflow-hidden bg-soft d-none" data-file-preview-for="fm-6">
                <img
                  src="/assets/images/product-1.jpg"
                  width="960"
                  height="540"
                  className="w-100 h-100 object-fit-contain"
                  alt="Preview of Studio Lookbook.png"
                />
              </div>
              {" "}
              <div className="ratio ratio-16x9 rounded-3 overflow-hidden bg-soft d-none" data-file-preview-for="fm-7">
                <img
                  src="/assets/images/product-3.jpg"
                  width="960"
                  height="540"
                  className="w-100 h-100 object-fit-contain"
                  alt="Preview of Onboarding Walkthrough.mp4"
                />
              </div>
              {" "}
              <div className="ratio ratio-16x9 rounded-3 overflow-hidden bg-soft d-none" data-file-preview-for="fm-8">
                <span className="d-flex flex-column align-items-center justify-content-center gap-2 w-100 h-100">
                  <i className="icon-24 text-cat-amber" data-lucide="file-archive" aria-hidden="true" />
                  <span className="fs-md text-body-2">
                    No preview for archives
                  </span>
                </span>
              </div>
              {" "}
              <div className="ratio ratio-16x9 rounded-3 overflow-hidden bg-soft d-none" data-file-preview-for="fm-9">
                <span className="d-flex flex-column align-items-center justify-content-center gap-2 w-100 h-100">
                  <i className="icon-24 text-cat-slate" data-lucide="file-text" aria-hidden="true" />
                  <span className="fs-md text-body-2">
                    No preview for text files
                  </span>
                </span>
              </div>
              {" "}
              <div className="ratio ratio-16x9 rounded-3 overflow-hidden bg-soft d-none" data-file-preview-for="fm-10">
                <span className="d-flex flex-column align-items-center justify-content-center gap-2 w-100 h-100">
                  <i className="icon-24 text-cat-cyan" data-lucide="file-audio" aria-hidden="true" />
                  <span className="fs-md text-body-2">
                    No preview for audios
                  </span>
                </span>
              </div>
              {" "}
              <div className="ratio ratio-16x9 rounded-3 overflow-hidden bg-soft d-none" data-file-preview-for="fm-11">
                <img
                  src="/assets/images/product-2.jpg"
                  width="960"
                  height="540"
                  className="w-100 h-100 object-fit-contain"
                  alt="Preview of Storefront Mockup.jpg"
                />
              </div>
              {" "}
              <div className="ratio ratio-16x9 rounded-3 overflow-hidden bg-soft d-none" data-file-preview-for="fm-12">
                <span className="d-flex flex-column align-items-center justify-content-center gap-2 w-100 h-100">
                  <i className="icon-24 text-cat-rose" data-lucide="file-text" aria-hidden="true" />
                  <span className="fs-md text-body-2">
                    No preview for pdf documents
                  </span>
                </span>
              </div>
              {" "}
              <div className="ratio ratio-16x9 rounded-3 overflow-hidden bg-soft d-none" data-file-preview-for="fm-13">
                <img
                  src="/assets/images/inventory-4.jpg"
                  width="960"
                  height="540"
                  className="w-100 h-100 object-fit-contain"
                  alt="Preview of Feature Demo Reel.mp4"
                />
              </div>
              {" "}
              <div className="ratio ratio-16x9 rounded-3 overflow-hidden bg-soft d-none" data-file-preview-for="fm-14">
                <span className="d-flex flex-column align-items-center justify-content-center gap-2 w-100 h-100">
                  <i className="icon-24 text-cat-amber" data-lucide="file-archive" aria-hidden="true" />
                  <span className="fs-md text-body-2">
                    No preview for archives
                  </span>
                </span>
              </div>
              {" "}
              <div className="ratio ratio-16x9 rounded-3 overflow-hidden bg-soft d-none" data-file-preview-for="fm-t1">
                <span className="d-flex flex-column align-items-center justify-content-center gap-2 w-100 h-100">
                  <i className="icon-24 text-cat-blue" data-lucide="file-text" aria-hidden="true" />
                  <span className="fs-md text-body-2">
                    No preview for word documents
                  </span>
                </span>
              </div>
              {" "}
              <div className="ratio ratio-16x9 rounded-3 overflow-hidden bg-soft d-none" data-file-preview-for="fm-t2">
                <img
                  src="/assets/images/inventory-7.jpg"
                  width="960"
                  height="540"
                  className="w-100 h-100 object-fit-contain"
                  alt="Preview of Deprecated Logo.png"
                />
              </div>
              <ul className="list-unstyled row row-cols-1 row-cols-sm-3 g-3 mt-1 mb-0">
                <li className="col">
                  <span className="d-block p-2 rounded-3 tile-soft">
                    {" "}
                    <span className="d-block fs-xs text-muted-2">
                      Owner
                    </span>
                    {" "}
                    <span className="d-block fs-md fw-semibold text-title text-truncate" data-file-out="preview-owner">
                      Meera Iyer
                    </span>
                    {" "}
                  </span>
                </li>
                <li className="col">
                  <span className="d-block p-2 rounded-3 tile-soft">
                    {" "}
                    <span className="d-block fs-xs text-muted-2">
                      Location
                    </span>
                    {" "}
                    <span className="d-block fs-md fw-semibold text-title text-truncate" data-file-out="preview-where">
                      My Files / Design Assets
                    </span>
                    {" "}
                  </span>
                </li>
                <li className="col">
                  <span className="d-block p-2 rounded-3 tile-soft">
                    {" "}
                    <span className="d-block fs-xs text-muted-2">
                      Created
                    </span>
                    {" "}
                    <span className="d-block fs-md fw-semibold text-title text-truncate">
                      <bdi data-file-out="preview-created">
                        14 Aug 2026
                      </bdi>
                    </span>
                    {" "}
                  </span>
                </li>
              </ul>
            </div>
            <div className="modal-footer border-t-soft">
              <button type="button" className="btn btn-outline-soft" data-bs-dismiss="modal">
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary d-flex align-items-center gap-2"
                data-file-action="download"
              >
                <i className="icon-16" data-lucide="download" aria-hidden="true" />
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ========== Upload dialog ========== */}
      <div
        role="dialog"
        className="modal fade"
        id="fmUploadModal"
        tabIndex="-1"
        aria-labelledby="fmUploadLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header border-b-soft">
              <div className="min-w-0">
                <h2 className="modal-title fs-5 fw-bold text-title mb-1" id="fmUploadLabel">
                  Upload files
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Drop them here, or pick them from your device.
                </p>
              </div>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <form data-modal-form="" noValidate>
              <div className="modal-body">
                <div className="border-soft border-dashed rounded-4 text-center p-4 mb-3 tile-soft" data-file-drop="">
                  <span className="icon-box icon-box-xl tint-primary mx-auto mb-2" aria-hidden="true">
                    <i data-lucide="cloud-upload" />
                  </span>
                  <p className="fs-5 fw-semibold text-title mb-1">
                    {"Drag & drop your files"}
                  </p>
                  <p className="fs-md text-body-2 mb-3">
                    PDF, DOCX, XLSX, PPTX, JPG, PNG, MP4, ZIP — up to 250 MB each.
                  </p>
                  <input
                    type="file"
                    className="d-none"
                    id="fmUploadInput"
                    name="uploads"
                    multiple
                    aria-label="Choose files to upload"
                    data-file-upload-input=""
                  />
                  {" "}
                  <button
                    type="button"
                    className="btn btn-primary d-flex align-items-center gap-2 mx-auto"
                    data-file-upload-pick=""
                  >
                    <i className="icon-18" data-lucide="folder-open" aria-hidden="true" />
                    Browse files
                  </button>
                </div>
                <div className="mb-3">
                  <label htmlFor="fmUploadFolder" className="form-label fs-md fw-semibold text-title">
                    Upload into
                  </label>
                  {" "}
                  <select className="form-select" id="fmUploadFolder" name="upload-folder">
                    <option value="myfiles">
                      My Files
                    </option>
                    <option value="design">
                      Design Assets
                    </option>
                    <option value="documents">
                      Documents
                    </option>
                    <option value="marketing">
                      Marketing
                    </option>
                    <option value="projects">
                      Projects
                    </option>
                    <option value="reports">
                      Reports
                    </option>
                    <option value="presentations">
                      Presentations
                    </option>
                  </select>
                </div>
                {/* The queue a reader builds by picking files. Its row shape is
                   the page's own <template>, never a string assembled in JS. */}
                {" "}
                <p className="fs-md fw-semibold text-title mb-2 d-none" data-file-queue-title="">
                  Ready to upload
                </p>
                {" "}
                <ul className="list-unstyled d-flex flex-column gap-2 mb-0 d-none" data-file-queue="" />
                {" "}
                <template
                  data-file-queue-template=""
                  dangerouslySetInnerHTML={{ __html: "<li class=\"d-flex align-items-center gap-2 p-2 rounded-3 tile-soft\">\n                    <span class=\"icon-box icon-box-sm tint-primary flex-shrink-0\" aria-hidden=\"true\"><i data-lucide=\"paperclip\"></i></span>\n                    <span class=\"flex-grow-1 min-w-0\">\n                      <span class=\"d-block fs-md fw-semibold text-title text-truncate\" data-file-queue-name=\"\"></span>\n                      <span class=\"d-block fs-xs text-muted-2 text-truncate\"><bdi data-file-queue-size=\"\"></bdi></span>\n                    </span>\n                    <i class=\"icon-16 text-cat-emerald flex-shrink-0\" data-lucide=\"file-check\" aria-hidden=\"true\"></i>\n                  </li>" }}
                />
              </div>
              <div className="modal-footer border-t-soft">
                <button type="button" className="btn btn-outline-soft" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary d-flex align-items-center gap-2">
                  <i className="icon-16" data-lucide="cloud-upload" aria-hidden="true" />
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* ========== New folder dialog ========== */}
      <div
        role="dialog"
        className="modal fade"
        id="fmFolderModal"
        tabIndex="-1"
        aria-labelledby="fmFolderLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-b-soft">
              <div className="min-w-0">
                <h2 className="modal-title fs-5 fw-bold text-title mb-1" id="fmFolderLabel">
                  Create a folder
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Give it a name and choose where it belongs.
                </p>
              </div>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <form data-modal-form="" data-file-folder-form="" noValidate>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="fmFolderName" className="form-label fs-md fw-semibold text-title">
                    Folder name
                  </label>
                  {" "}
                  <input
                    type="text"
                    className="form-control"
                    id="fmFolderName"
                    name="folder-name"
                    placeholder="e.g. Campaign Assets"
                    required
                    maxLength="60"
                    data-file-folder-name=""
                  />
                  {" "}
                  <div className="invalid-feedback">
                    Give the folder a name.
                  </div>
                </div>
                <div>
                  <label htmlFor="fmFolderParent" className="form-label fs-md fw-semibold text-title">
                    Create inside
                  </label>
                  {" "}
                  <select className="form-select" id="fmFolderParent" name="folder-parent">
                    <option value="myfiles">
                      My Files
                    </option>
                    <option value="design">
                      Design Assets
                    </option>
                    <option value="documents">
                      Documents
                    </option>
                    <option value="marketing">
                      Marketing
                    </option>
                    <option value="projects">
                      Projects
                    </option>
                  </select>
                </div>
              </div>
              <div className="modal-footer border-t-soft">
                <button type="button" className="btn btn-outline-soft" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary d-flex align-items-center gap-2">
                  <i className="icon-16" data-lucide="folder-plus" aria-hidden="true" />
                  Create folder
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* ========== Rename dialog ========== */}
      <div
        role="dialog"
        className="modal fade"
        id="fmRenameModal"
        tabIndex="-1"
        aria-labelledby="fmRenameLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-b-soft">
              <div className="min-w-0">
                <h2 className="modal-title fs-5 fw-bold text-title mb-1" id="fmRenameLabel">
                  Rename
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  Renaming
                  {" "}
                  <bdi className="fw-semibold text-title" data-file-out="rename-current">
                    this item
                  </bdi>
                  .
                </p>
              </div>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <form data-modal-form="" data-file-rename-form="" noValidate>
              <div className="modal-body">
                <label htmlFor="fmRenameName" className="form-label fs-md fw-semibold text-title">
                  New name
                </label>
                {" "}
                <input
                  type="text"
                  className="form-control"
                  id="fmRenameName"
                  name="rename-name"
                  required
                  maxLength="120"
                  data-file-rename-name=""
                />
                {" "}
                <div className="invalid-feedback">
                  A name cannot be empty.
                </div>
              </div>
              <div className="modal-footer border-t-soft">
                <button type="button" className="btn btn-outline-soft" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary d-flex align-items-center gap-2">
                  <i className="icon-16" data-lucide="check" aria-hidden="true" />
                  Save name
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* ========== Delete confirmation ========== */}
      <div
        role="dialog"
        className="modal fade"
        id="fmDeleteModal"
        tabIndex="-1"
        aria-labelledby="fmDeleteLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-b-soft">
              <div className="min-w-0">
                <h2 className="modal-title fs-5 fw-bold text-title mb-1" id="fmDeleteLabel">
                  Move to Trash?
                </h2>
                <p className="fs-md text-body-2 mb-0">
                  This can be undone from the Trash for 30 days.
                </p>
              </div>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <div className="d-flex align-items-start gap-3 p-3 rounded-3 tile-soft">
                <span className="icon-box icon-box-lg tint-danger flex-shrink-0" aria-hidden="true">
                  <i data-lucide="trash-2" />
                </span>
                <div className="min-w-0">
                  <p className="fs-md fw-semibold text-title text-break mb-1" data-file-out="delete-name">
                    this item
                  </p>
                  <p className="fs-md text-body-2 mb-0">
                    Anyone it is shared with loses access straight away.
                  </p>
                </div>
              </div>
            </div>
            <div className="modal-footer border-t-soft">
              <button type="button" className="btn btn-outline-soft" data-bs-dismiss="modal">
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-danger d-flex align-items-center gap-2"
                data-file-delete-confirm=""
              >
                <i className="icon-16" data-lucide="trash-2" aria-hidden="true" />
                Move to Trash
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ========== FOOTER ========== */}
    </AppShell>
  );
}

/* Generated from the Vionex HTML theme by scripts/convert-html.mjs */
import AppShell from "@/components/AppShell";

export const metadata = {
  title: "Vionex — Create Image",
  description: "Create Image — an AI image generation studio and library built with Bootstrap 5, CSS variables and the Vionex design system.",
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
          Create Image
        </h1>
        <nav aria-label="breadcrumb" className="d-none d-md-block">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href="/">
                Dashboard
              </a>
            </li>
            <li className="breadcrumb-item">
              AI Assistant
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Create Image
            </li>
          </ol>
        </nav>
      </div>
      {/* ===== Create Image workspace ===== */}
      <section className="app-workspace d-flex flex-fill gap-3" aria-label="Image generation workspace">
        {/* ========== Pane 1 — the prompt (drawer under xl) ========== */}
        <section
          className="offcanvas-xl offcanvas-start app-pane app-pane-lg d-flex flex-column"
          tabIndex="-1"
          id="imageComposePane"
          aria-labelledby="imageComposeTitle"
        >
          <div className="offcanvas-body d-flex flex-fill min-h-0 p-3 p-xl-0 overflow-hidden">
            <form className="card flex-fill min-w-0 mb-0 overflow-hidden" data-mirror-scope="" noValidate>
              <div className="d-flex align-items-center gap-2 px-3 pt-4 pb-3 flex-shrink-0">
                <h2 id="imageComposeTitle" className="fs-5 fw-semibold text-title mb-0 me-auto">
                  Compose
                </h2>
                <button
                  type="reset"
                  className="btn btn-ghost btn-18 rounded-circle flex-shrink-0"
                  aria-label="Reset the prompt"
                  title="Reset"
                >
                  <i data-lucide="rotate-ccw" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 d-xl-none"
                  data-bs-dismiss="offcanvas"
                  data-bs-target="#imageComposePane"
                  aria-label="Close the prompt panel"
                >
                  <i data-lucide="x" aria-hidden="true" />
                </button>
              </div>
              <div className="flex-fill min-h-0 overflow-y-auto scrollbar-thin px-3 pb-3">
                <div className="border-soft rounded-4 shadow-sm p-2 mb-4">
                  <label htmlFor="imagePrompt" className="visually-hidden">
                    Prompt
                  </label>
                  {" "}
                  <textarea
                    className="form-control border-0 bg-transparent px-2 pt-2"
                    id="imagePrompt"
                    name="prompt"
                    rows="4"
                    placeholder="Describe the shot — subject, lighting, lens, mood"
                    defaultValue="Purple wireless headphones lit from below, seamless backdrop, deep shadow"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="imageStyle"
                    className="form-label fs-xs fw-semibold text-uppercase text-muted-2 text-tracked mb-2"
                  >
                    Style
                  </label>
                  {" "}
                  <select className="form-select" id="imageStyle" name="style" defaultValue="photographic">
                    <option value="photographic">
                      Photographic
                    </option>
                    <option value="cinematic">
                      Cinematic
                    </option>
                    <option value="editorial">
                      Editorial
                    </option>
                    <option value="illustration">
                      Illustration
                    </option>
                    <option value="render">
                      3D render
                    </option>
                    <option value="line-art">
                      Line art
                    </option>
                  </select>
                </div>
                <fieldset className="mb-4">
                  <legend className="fs-xs fw-semibold text-uppercase text-muted-2 text-tracked mb-2 float-none">
                    Aspect ratio
                  </legend>
                  <div className="d-flex flex-wrap gap-2">
                    <input
                      type="radio"
                      className="btn-check"
                      name="image-ratio"
                      id="imageRatio1x1"
                      defaultValue="1:1"
                      defaultChecked
                    />
                    <label className="btn btn-outline-soft btn-sm rounded-pill" htmlFor="imageRatio1x1">
                      <bdi>
                        1:1
                      </bdi>
                    </label>
                    <input
                      type="radio"
                      className="btn-check"
                      name="image-ratio"
                      id="imageRatio4x3"
                      defaultValue="4:3"
                    />
                    <label className="btn btn-outline-soft btn-sm rounded-pill" htmlFor="imageRatio4x3">
                      <bdi>
                        4:3
                      </bdi>
                    </label>
                    <input
                      type="radio"
                      className="btn-check"
                      name="image-ratio"
                      id="imageRatio3x2"
                      defaultValue="3:2"
                    />
                    <label className="btn btn-outline-soft btn-sm rounded-pill" htmlFor="imageRatio3x2">
                      <bdi>
                        3:2
                      </bdi>
                    </label>
                    <input
                      type="radio"
                      className="btn-check"
                      name="image-ratio"
                      id="imageRatio16x9"
                      defaultValue="16:9"
                    />
                    <label className="btn btn-outline-soft btn-sm rounded-pill" htmlFor="imageRatio16x9">
                      <bdi>
                        16:9
                      </bdi>
                    </label>
                    <input
                      type="radio"
                      className="btn-check"
                      name="image-ratio"
                      id="imageRatio9x16"
                      defaultValue="9:16"
                    />
                    <label className="btn btn-outline-soft btn-sm rounded-pill" htmlFor="imageRatio9x16">
                      <bdi>
                        9:16
                      </bdi>
                    </label>
                  </div>
                </fieldset>
                <fieldset className="mb-4">
                  <legend className="fs-xs fw-semibold text-uppercase text-muted-2 text-tracked mb-2 float-none">
                    Images per run
                  </legend>
                  <div className="d-flex flex-wrap gap-2">
                    <input type="radio" className="btn-check" name="image-count" id="imageCount1" defaultValue="1" />
                    <label className="btn btn-outline-soft btn-sm rounded-pill" htmlFor="imageCount1">
                      <bdi>
                        1
                      </bdi>
                    </label>
                    <input
                      type="radio"
                      className="btn-check"
                      name="image-count"
                      id="imageCount2"
                      defaultValue="2"
                      defaultChecked
                    />
                    <label className="btn btn-outline-soft btn-sm rounded-pill" htmlFor="imageCount2">
                      <bdi>
                        2
                      </bdi>
                    </label>
                    <input type="radio" className="btn-check" name="image-count" id="imageCount4" defaultValue="4" />
                    <label className="btn btn-outline-soft btn-sm rounded-pill" htmlFor="imageCount4">
                      <bdi>
                        4
                      </bdi>
                    </label>
                  </div>
                </fieldset>
                <div className="mb-4">
                  <label
                    htmlFor="imageModel"
                    className="form-label fs-xs fw-semibold text-uppercase text-muted-2 text-tracked mb-2"
                  >
                    Model
                  </label>
                  {" "}
                  <select className="form-select" id="imageModel" name="model" defaultValue="vision-3">
                    <option value="vision-3">
                      Vionex Vision 3
                    </option>
                    <option value="vision-3-turbo">
                      Vionex Vision 3 Turbo
                    </option>
                    <option value="vision-2-xl">
                      Vionex Vision 2 XL
                    </option>
                  </select>
                </div>
                {/* Everything below is the long tail: kept, but out of the way
                   until the reader asks for it. */}
                {" "}
                <button
                  className="btn btn-ghost btn-sm rounded-pill d-inline-flex align-items-center gap-2 px-2"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#imageAdvanced"
                  aria-expanded="false"
                  aria-controls="imageAdvanced"
                >
                  <span className="fs-md text-muted-2">
                    Advanced
                  </span>
                  <i className="icon-14" data-lucide="chevron-down" aria-hidden="true" />
                </button>
                {" "}
                <div className="collapse" id="imageAdvanced">
                  <div className="pt-4">
                    <div className="mb-4">
                      <label
                        htmlFor="imageNegative"
                        className="form-label fs-xs fw-semibold text-uppercase text-muted-2 text-tracked mb-2"
                      >
                        Avoid
                      </label>
                      {" "}
                      <textarea
                        className="form-control"
                        id="imageNegative"
                        name="negative-prompt"
                        rows="2"
                        placeholder="Anything the image should not contain"
                        defaultValue="text, watermark, extra limbs"
                      />
                    </div>
                    <div className="mb-4">
                      <div className="d-flex align-items-baseline gap-2 mb-2">
                        <label
                          htmlFor="imageGuidance"
                          className="form-label fs-xs fw-semibold text-uppercase text-muted-2 text-tracked mb-0 me-auto"
                        >
                          Prompt strength
                        </label>
                        <bdi className="fs-xs text-muted-2" data-mirror-out="guidance">
                          7
                        </bdi>
                      </div>
                      <input
                        type="range"
                        className="form-range"
                        id="imageGuidance"
                        name="guidance"
                        min="1"
                        max="12"
                        step="1"
                        defaultValue="7"
                        data-mirror="guidance"
                      />
                    </div>
                    <div className="mb-0">
                      <label
                        htmlFor="imageSeed"
                        className="form-label fs-xs fw-semibold text-uppercase text-muted-2 text-tracked mb-2"
                      >
                        Seed
                      </label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          id="imageSeed"
                          name="seed"
                          inputMode="numeric"
                          defaultValue="482913"
                        />
                        <button
                          type="button"
                          className="btn btn-outline-soft"
                          aria-label="Use a random seed"
                          title="Random seed"
                        >
                          <i className="icon-16" data-lucide="dice-5" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-3 py-4 border-t-soft flex-shrink-0">
                <button
                  type="submit"
                  className="btn btn-primary w-100 py-2 d-flex align-items-center justify-content-center gap-2"
                >
                  <i className="icon-16" data-lucide="sparkles" aria-hidden="true" />
                  Generate
                </button>
                <p className="fs-xs text-muted-2 text-center mt-3 mb-0">
                  <bdi>
                    2
                  </bdi>
                  {" "}images · about{" "}
                  <bdi>
                    18s
                  </bdi>
                </p>
              </div>
            </form>
          </div>
        </section>
        {/* ========== Pane 2 — the library ========== */}
        <section
          className="card flex-fill min-w-0 mb-0 overflow-hidden"
          aria-labelledby="imageLibraryTitle"
          data-search-scope=""
        >
          <div className="px-3 px-md-4 py-3 border-b-soft flex-shrink-0">
            <div className="d-flex align-items-center gap-2 mb-3">
              <button
                type="button"
                className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 d-xl-none"
                data-bs-toggle="offcanvas"
                data-bs-target="#imageComposePane"
                aria-controls="imageComposePane"
                aria-label="Show the prompt panel"
              >
                <i className="flip-rtl" data-lucide="arrow-left" aria-hidden="true" />
              </button>
              <div className="flex-grow-1 min-w-0">
                <h2 id="imageLibraryTitle" className="fs-5 fw-semibold text-title text-truncate mb-0">
                  Library
                </h2>
                <p className="fs-md text-muted-2 text-truncate mb-0">
                  <bdi data-search-count="">
                    9
                  </bdi>
                  {" "}of{" "}
                  <bdi data-search-total="">
                    9
                  </bdi>
                  {" "}
                  images generated today
                </p>
              </div>
              <button
                type="button"
                className="btn btn-ghost btn-18 rounded-circle flex-shrink-0 d-none d-sm-inline-flex"
                aria-label="Download every image"
                title="Download every image"
              >
                <i data-lucide="download" aria-hidden="true" />
              </button>
              <div className="dropdown flex-shrink-0">
                <button
                  type="button"
                  className="btn btn-ghost btn-18 rounded-circle"
                  id="imageLibraryMenu"
                  data-bs-toggle="dropdown"
                  data-dd-fixed=""
                  data-bs-offset="0,8"
                  aria-expanded="false"
                  aria-label="More library actions"
                >
                  <i data-lucide="ellipsis-vertical" aria-hidden="true" />
                </button>
                {" "}
                <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="imageLibraryMenu">
                  <li>
                    <button type="button" className="dropdown-item">
                      <i data-lucide="arrow-down-up" aria-hidden="true" />
                      Sort by oldest
                    </button>
                  </li>
                  <li>
                    <button type="button" className="dropdown-item">
                      <i data-lucide="star" aria-hidden="true" />
                      Favourite everything shown
                    </button>
                  </li>
                  <li>
                    <button type="button" className="dropdown-item">
                      <i data-lucide="maximize-2" aria-hidden="true" />
                      Upscale everything shown
                    </button>
                  </li>
                  <li>
                    <button type="button" className="dropdown-item">
                      <i data-lucide="folder-open" aria-hidden="true" />
                      Move to a collection
                    </button>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <button type="button" className="dropdown-item dropdown-item-danger">
                      <i data-lucide="trash-2" aria-hidden="true" />
                      Clear the library
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="d-flex flex-wrap align-items-center gap-2">
              <div className="field-icon flex-grow-1 min-w-0">
                <i className="icon-18" data-lucide="search" aria-hidden="true" />
                {" "}
                <label htmlFor="imageSearch" className="visually-hidden">
                  Search prompts
                </label>
                {" "}
                <input
                  type="search"
                  className="form-control"
                  id="imageSearch"
                  name="image-search"
                  placeholder="Search prompts"
                  data-search-input=""
                />
              </div>
              <div
                className="nav nav-pills seg-toggle d-inline-flex flex-nowrap gap-1 p-1 rounded-pill bg-soft"
                role="group"
                aria-label="Filter images"
              >
                <button type="button" className="nav-link active fw-medium" data-filter="all" aria-pressed="true">
                  All
                </button>
                <button type="button" className="nav-link fw-medium" data-filter="favourite" aria-pressed="false">
                  Favourites
                </button>
                <button type="button" className="nav-link fw-medium" data-filter="upscaled" aria-pressed="false">
                  Upscaled
                </button>
              </div>
            </div>
          </div>
          <div className="flex-fill min-h-0 overflow-y-auto scrollbar-thin px-3 px-md-4 py-4">
            {/* A run in progress */}
            <div className="d-flex align-items-center gap-3 pb-4 mb-4 border-b-soft">
              <div className="flex-grow-1 min-w-0">
                <div className="d-flex align-items-baseline gap-2 mb-2">
                  <p className="flex-grow-1 min-w-0 fs-lg text-truncate mb-0">
                    <span className="fs-xs fw-semibold text-uppercase text-muted-2 text-tracked">
                      Generating
                    </span>
                    {" "}
                    <span className="text-title">
                      Green leather handbag, catalogue lighting, plain sage background
                    </span>
                  </p>
                  <bdi className="fs-xs text-muted-2 flex-shrink-0">
                    2 of 2 · 6s left
                  </bdi>
                </div>
                <div
                  className="progress progress-sm"
                  role="progressbar"
                  aria-label="Generation progress"
                  aria-valuenow="64"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="progress-bar" style={{ width: "64%" }} />
                </div>
              </div>
              <button
                type="button"
                className="btn btn-ghost btn-18 rounded-circle flex-shrink-0"
                aria-label="Cancel this run"
                title="Cancel this run"
              >
                <i data-lucide="x" aria-hidden="true" />
              </button>
            </div>
            <ul className="list-unstyled row row-cols-1 row-cols-sm-2 row-cols-xxl-3 g-4 mb-0">
              <li className="col" data-filter-tags="run favourite upscaled">
                <div className="position-relative">
                  <div className="ratio ratio-1x1 rounded-4 overflow-hidden shadow-sm bg-soft">
                    <img
                      src="/assets/images/inventory-3.jpg"
                      width="600"
                      height="600"
                      className="object-fit-cover w-100 h-100"
                      alt="Purple wireless headphones lit from below"
                    />
                  </div>
                  <div className="position-absolute top-0 end-0 m-2 d-flex align-items-center gap-1 p-1 rounded-pill bg-glass shadow-sm">
                    <button
                      type="button"
                      className="btn btn-ghost btn-18 rounded-circle"
                      data-star="favourite"
                      aria-pressed="true"
                      aria-label="Favourite"
                      title="Favourite"
                    >
                      <i
                        className="icon-16 icon-fill text-cat-amber"
                        data-lucide="star"
                        aria-hidden="true"
                        data-star-on=""
                      />
                      {" "}
                      <i
                        className="icon-16 text-muted-2 d-none"
                        data-lucide="star"
                        aria-hidden="true"
                        data-star-off=""
                      />
                    </button>
                    <div className="dropdown">
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle"
                        id="shotMenu1"
                        data-bs-toggle="dropdown"
                        data-dd-fixed=""
                        data-bs-offset="0,8"
                        aria-expanded="false"
                        aria-label="Actions for this image"
                      >
                        <i className="icon-16" data-lucide="ellipsis-vertical" aria-hidden="true" />
                      </button>
                      {" "}
                      <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="shotMenu1">
                        <li>
                          <button type="button" className="dropdown-item">
                            <i data-lucide="maximize-2" aria-hidden="true" />
                            Upscale to 4K
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item">
                            <i data-lucide="shuffle" aria-hidden="true" />
                            Make four variations
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item">
                            <i data-lucide="wand-sparkles" aria-hidden="true" />
                            Reuse this prompt
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-star="favourite">
                            <i data-lucide="star" aria-hidden="true" />
                            <span>
                              <span data-star-text-on="">
                                Remove from favourites
                              </span>
                              <span className="d-none" data-star-text-off="">
                                Add to favourites
                              </span>
                            </span>
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item">
                            <i data-lucide="download" aria-hidden="true" />
                            Download PNG
                          </button>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <button type="button" className="dropdown-item dropdown-item-danger">
                            <i data-lucide="trash-2" aria-hidden="true" />
                            Delete image
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <p className="fs-lg text-title text-truncate mt-3 mb-1">
                  Purple wireless headphones lit from below, seamless backdrop, deep shadow
                </p>
                <p className="fs-xs text-muted-2 text-truncate mb-0">
                  <bdi>
                    Vision 3 · 1:1 · 4K
                  </bdi>
                </p>
              </li>
              <li className="col" data-filter-tags="run favourite">
                <div className="position-relative">
                  <div className="ratio ratio-1x1 rounded-4 overflow-hidden shadow-sm bg-soft">
                    <img
                      src="/assets/images/inventory-1.jpg"
                      width="600"
                      height="600"
                      className="object-fit-cover w-100 h-100"
                      alt="Pink high-top sneaker resting on an open hand"
                    />
                  </div>
                  <div className="position-absolute top-0 end-0 m-2 d-flex align-items-center gap-1 p-1 rounded-pill bg-glass shadow-sm">
                    <button
                      type="button"
                      className="btn btn-ghost btn-18 rounded-circle"
                      data-star="favourite"
                      aria-pressed="true"
                      aria-label="Favourite"
                      title="Favourite"
                    >
                      <i
                        className="icon-16 icon-fill text-cat-amber"
                        data-lucide="star"
                        aria-hidden="true"
                        data-star-on=""
                      />
                      {" "}
                      <i
                        className="icon-16 text-muted-2 d-none"
                        data-lucide="star"
                        aria-hidden="true"
                        data-star-off=""
                      />
                    </button>
                    <div className="dropdown">
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle"
                        id="shotMenu2"
                        data-bs-toggle="dropdown"
                        data-dd-fixed=""
                        data-bs-offset="0,8"
                        aria-expanded="false"
                        aria-label="Actions for this image"
                      >
                        <i className="icon-16" data-lucide="ellipsis-vertical" aria-hidden="true" />
                      </button>
                      {" "}
                      <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="shotMenu2">
                        <li>
                          <button type="button" className="dropdown-item">
                            <i data-lucide="maximize-2" aria-hidden="true" />
                            Upscale to 4K
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item">
                            <i data-lucide="shuffle" aria-hidden="true" />
                            Make four variations
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item">
                            <i data-lucide="wand-sparkles" aria-hidden="true" />
                            Reuse this prompt
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-star="favourite">
                            <i data-lucide="star" aria-hidden="true" />
                            <span>
                              <span data-star-text-on="">
                                Remove from favourites
                              </span>
                              <span className="d-none" data-star-text-off="">
                                Add to favourites
                              </span>
                            </span>
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item">
                            <i data-lucide="download" aria-hidden="true" />
                            Download PNG
                          </button>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <button type="button" className="dropdown-item dropdown-item-danger">
                            <i data-lucide="trash-2" aria-hidden="true" />
                            Delete image
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <p className="fs-lg text-title text-truncate mt-3 mb-1">
                  Pink high-top sneaker held on an open palm, soft daylight, pastel wall
                </p>
                <p className="fs-xs text-muted-2 text-truncate mb-0">
                  <bdi>
                    Vision 3 · 1:1
                  </bdi>
                </p>
              </li>
              <li className="col" data-filter-tags="run">
                <div className="position-relative">
                  <div className="ratio ratio-1x1 rounded-4 overflow-hidden shadow-sm bg-soft">
                    <img
                      src="/assets/images/product-1.jpg"
                      width="600"
                      height="600"
                      className="object-fit-cover w-100 h-100"
                      alt="Two models in autumn knitwear against a crimson backdrop"
                    />
                  </div>
                  <div className="position-absolute top-0 end-0 m-2 d-flex align-items-center gap-1 p-1 rounded-pill bg-glass shadow-sm">
                    <button
                      type="button"
                      className="btn btn-ghost btn-18 rounded-circle"
                      data-star="favourite"
                      aria-pressed="false"
                      aria-label="Favourite"
                      title="Favourite"
                    >
                      <i
                        className="icon-16 icon-fill text-cat-amber d-none"
                        data-lucide="star"
                        aria-hidden="true"
                        data-star-on=""
                      />
                      {" "}
                      <i className="icon-16 text-muted-2" data-lucide="star" aria-hidden="true" data-star-off="" />
                    </button>
                    <div className="dropdown">
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle"
                        id="shotMenu3"
                        data-bs-toggle="dropdown"
                        data-dd-fixed=""
                        data-bs-offset="0,8"
                        aria-expanded="false"
                        aria-label="Actions for this image"
                      >
                        <i className="icon-16" data-lucide="ellipsis-vertical" aria-hidden="true" />
                      </button>
                      {" "}
                      <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="shotMenu3">
                        <li>
                          <button type="button" className="dropdown-item">
                            <i data-lucide="maximize-2" aria-hidden="true" />
                            Upscale to 4K
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item">
                            <i data-lucide="shuffle" aria-hidden="true" />
                            Make four variations
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item">
                            <i data-lucide="wand-sparkles" aria-hidden="true" />
                            Reuse this prompt
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-star="favourite">
                            <i data-lucide="star" aria-hidden="true" />
                            <span>
                              <span className="d-none" data-star-text-on="">
                                Remove from favourites
                              </span>
                              <span data-star-text-off="">
                                Add to favourites
                              </span>
                            </span>
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item">
                            <i data-lucide="download" aria-hidden="true" />
                            Download PNG
                          </button>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <button type="button" className="dropdown-item dropdown-item-danger">
                            <i data-lucide="trash-2" aria-hidden="true" />
                            Delete image
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <p className="fs-lg text-title text-truncate mt-3 mb-1">
                  Editorial autumn knitwear, two models, crimson backdrop, 85mm
                </p>
                <p className="fs-xs text-muted-2 text-truncate mb-0">
                  <bdi>
                    Vision 3 · 1:1
                  </bdi>
                </p>
              </li>
              <li className="col" data-filter-tags="run upscaled">
                <div className="position-relative">
                  <div className="ratio ratio-1x1 rounded-4 overflow-hidden shadow-sm bg-soft">
                    <img
                      src="/assets/images/inventory-8.jpg"
                      width="600"
                      height="600"
                      className="object-fit-cover w-100 h-100"
                      alt="Blue high-top trainer under studio lighting"
                    />
                  </div>
                  <div className="position-absolute top-0 end-0 m-2 d-flex align-items-center gap-1 p-1 rounded-pill bg-glass shadow-sm">
                    <button
                      type="button"
                      className="btn btn-ghost btn-18 rounded-circle"
                      data-star="favourite"
                      aria-pressed="false"
                      aria-label="Favourite"
                      title="Favourite"
                    >
                      <i
                        className="icon-16 icon-fill text-cat-amber d-none"
                        data-lucide="star"
                        aria-hidden="true"
                        data-star-on=""
                      />
                      {" "}
                      <i className="icon-16 text-muted-2" data-lucide="star" aria-hidden="true" data-star-off="" />
                    </button>
                    <div className="dropdown">
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle"
                        id="shotMenu4"
                        data-bs-toggle="dropdown"
                        data-dd-fixed=""
                        data-bs-offset="0,8"
                        aria-expanded="false"
                        aria-label="Actions for this image"
                      >
                        <i className="icon-16" data-lucide="ellipsis-vertical" aria-hidden="true" />
                      </button>
                      {" "}
                      <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="shotMenu4">
                        <li>
                          <button type="button" className="dropdown-item">
                            <i data-lucide="maximize-2" aria-hidden="true" />
                            Upscale to 4K
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item">
                            <i data-lucide="shuffle" aria-hidden="true" />
                            Make four variations
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item">
                            <i data-lucide="wand-sparkles" aria-hidden="true" />
                            Reuse this prompt
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-star="favourite">
                            <i data-lucide="star" aria-hidden="true" />
                            <span>
                              <span className="d-none" data-star-text-on="">
                                Remove from favourites
                              </span>
                              <span data-star-text-off="">
                                Add to favourites
                              </span>
                            </span>
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item">
                            <i data-lucide="download" aria-hidden="true" />
                            Download PNG
                          </button>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <button type="button" className="dropdown-item dropdown-item-danger">
                            <i data-lucide="trash-2" aria-hidden="true" />
                            Delete image
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <p className="fs-lg text-title text-truncate mt-3 mb-1">
                  Blue high-top trainer, hard studio key light, seamless white sweep
                </p>
                <p className="fs-xs text-muted-2 text-truncate mb-0">
                  <bdi>
                    Vision 3 Turbo · 1:1 · 4K
                  </bdi>
                </p>
              </li>
              <li className="col" data-filter-tags="run">
                <div className="position-relative">
                  <div className="ratio ratio-1x1 rounded-4 overflow-hidden shadow-sm bg-soft">
                    <img
                      src="/assets/images/inventory-5.jpg"
                      width="600"
                      height="600"
                      className="object-fit-cover w-100 h-100"
                      alt="Green leather handbag on a plain background"
                    />
                  </div>
                  <div className="position-absolute top-0 end-0 m-2 d-flex align-items-center gap-1 p-1 rounded-pill bg-glass shadow-sm">
                    <button
                      type="button"
                      className="btn btn-ghost btn-18 rounded-circle"
                      data-star="favourite"
                      aria-pressed="false"
                      aria-label="Favourite"
                      title="Favourite"
                    >
                      <i
                        className="icon-16 icon-fill text-cat-amber d-none"
                        data-lucide="star"
                        aria-hidden="true"
                        data-star-on=""
                      />
                      {" "}
                      <i className="icon-16 text-muted-2" data-lucide="star" aria-hidden="true" data-star-off="" />
                    </button>
                    <div className="dropdown">
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle"
                        id="shotMenu5"
                        data-bs-toggle="dropdown"
                        data-dd-fixed=""
                        data-bs-offset="0,8"
                        aria-expanded="false"
                        aria-label="Actions for this image"
                      >
                        <i className="icon-16" data-lucide="ellipsis-vertical" aria-hidden="true" />
                      </button>
                      {" "}
                      <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="shotMenu5">
                        <li>
                          <button type="button" className="dropdown-item">
                            <i data-lucide="maximize-2" aria-hidden="true" />
                            Upscale to 4K
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item">
                            <i data-lucide="shuffle" aria-hidden="true" />
                            Make four variations
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item">
                            <i data-lucide="wand-sparkles" aria-hidden="true" />
                            Reuse this prompt
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-star="favourite">
                            <i data-lucide="star" aria-hidden="true" />
                            <span>
                              <span className="d-none" data-star-text-on="">
                                Remove from favourites
                              </span>
                              <span data-star-text-off="">
                                Add to favourites
                              </span>
                            </span>
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item">
                            <i data-lucide="download" aria-hidden="true" />
                            Download PNG
                          </button>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <button type="button" className="dropdown-item dropdown-item-danger">
                            <i data-lucide="trash-2" aria-hidden="true" />
                            Delete image
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <p className="fs-lg text-title text-truncate mt-3 mb-1">
                  Green leather handbag, catalogue lighting, plain sage background
                </p>
                <p className="fs-xs text-muted-2 text-truncate mb-0">
                  <bdi>
                    Vision 3 · 1:1
                  </bdi>
                </p>
              </li>
              <li className="col" data-filter-tags="run favourite">
                <div className="position-relative">
                  <div className="ratio ratio-1x1 rounded-4 overflow-hidden shadow-sm bg-soft">
                    <img
                      src="/assets/images/inventory-2.jpg"
                      width="600"
                      height="600"
                      className="object-fit-cover w-100 h-100"
                      alt="Runner outdoors wearing white over-ear headphones"
                    />
                  </div>
                  <div className="position-absolute top-0 end-0 m-2 d-flex align-items-center gap-1 p-1 rounded-pill bg-glass shadow-sm">
                    <button
                      type="button"
                      className="btn btn-ghost btn-18 rounded-circle"
                      data-star="favourite"
                      aria-pressed="true"
                      aria-label="Favourite"
                      title="Favourite"
                    >
                      <i
                        className="icon-16 icon-fill text-cat-amber"
                        data-lucide="star"
                        aria-hidden="true"
                        data-star-on=""
                      />
                      {" "}
                      <i
                        className="icon-16 text-muted-2 d-none"
                        data-lucide="star"
                        aria-hidden="true"
                        data-star-off=""
                      />
                    </button>
                    <div className="dropdown">
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle"
                        id="shotMenu6"
                        data-bs-toggle="dropdown"
                        data-dd-fixed=""
                        data-bs-offset="0,8"
                        aria-expanded="false"
                        aria-label="Actions for this image"
                      >
                        <i className="icon-16" data-lucide="ellipsis-vertical" aria-hidden="true" />
                      </button>
                      {" "}
                      <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="shotMenu6">
                        <li>
                          <button type="button" className="dropdown-item">
                            <i data-lucide="maximize-2" aria-hidden="true" />
                            Upscale to 4K
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item">
                            <i data-lucide="shuffle" aria-hidden="true" />
                            Make four variations
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item">
                            <i data-lucide="wand-sparkles" aria-hidden="true" />
                            Reuse this prompt
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-star="favourite">
                            <i data-lucide="star" aria-hidden="true" />
                            <span>
                              <span data-star-text-on="">
                                Remove from favourites
                              </span>
                              <span className="d-none" data-star-text-off="">
                                Add to favourites
                              </span>
                            </span>
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item">
                            <i data-lucide="download" aria-hidden="true" />
                            Download PNG
                          </button>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <button type="button" className="dropdown-item dropdown-item-danger">
                            <i data-lucide="trash-2" aria-hidden="true" />
                            Delete image
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <p className="fs-lg text-title text-truncate mt-3 mb-1">
                  Runner at golden hour wearing white over-ear headphones, shallow depth
                </p>
                <p className="fs-xs text-muted-2 text-truncate mb-0">
                  <bdi>
                    Vision 3 · 1:1
                  </bdi>
                </p>
              </li>
              <li className="col" data-filter-tags="run">
                <div className="position-relative">
                  <div className="ratio ratio-1x1 rounded-4 overflow-hidden shadow-sm bg-soft">
                    <img
                      src="/assets/images/inventory-7.jpg"
                      width="600"
                      height="600"
                      className="object-fit-cover w-100 h-100"
                      alt="Tan leather tote bag held against a plain wall"
                    />
                  </div>
                  <div className="position-absolute top-0 end-0 m-2 d-flex align-items-center gap-1 p-1 rounded-pill bg-glass shadow-sm">
                    <button
                      type="button"
                      className="btn btn-ghost btn-18 rounded-circle"
                      data-star="favourite"
                      aria-pressed="false"
                      aria-label="Favourite"
                      title="Favourite"
                    >
                      <i
                        className="icon-16 icon-fill text-cat-amber d-none"
                        data-lucide="star"
                        aria-hidden="true"
                        data-star-on=""
                      />
                      {" "}
                      <i className="icon-16 text-muted-2" data-lucide="star" aria-hidden="true" data-star-off="" />
                    </button>
                    <div className="dropdown">
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle"
                        id="shotMenu7"
                        data-bs-toggle="dropdown"
                        data-dd-fixed=""
                        data-bs-offset="0,8"
                        aria-expanded="false"
                        aria-label="Actions for this image"
                      >
                        <i className="icon-16" data-lucide="ellipsis-vertical" aria-hidden="true" />
                      </button>
                      {" "}
                      <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="shotMenu7">
                        <li>
                          <button type="button" className="dropdown-item">
                            <i data-lucide="maximize-2" aria-hidden="true" />
                            Upscale to 4K
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item">
                            <i data-lucide="shuffle" aria-hidden="true" />
                            Make four variations
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item">
                            <i data-lucide="wand-sparkles" aria-hidden="true" />
                            Reuse this prompt
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-star="favourite">
                            <i data-lucide="star" aria-hidden="true" />
                            <span>
                              <span className="d-none" data-star-text-on="">
                                Remove from favourites
                              </span>
                              <span data-star-text-off="">
                                Add to favourites
                              </span>
                            </span>
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item">
                            <i data-lucide="download" aria-hidden="true" />
                            Download PNG
                          </button>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <button type="button" className="dropdown-item dropdown-item-danger">
                            <i data-lucide="trash-2" aria-hidden="true" />
                            Delete image
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <p className="fs-lg text-title text-truncate mt-3 mb-1">
                  Tan leather tote held against a plain wall, muted palette, film grain
                </p>
                <p className="fs-xs text-muted-2 text-truncate mb-0">
                  <bdi>
                    Vision 2 XL · 1:1
                  </bdi>
                </p>
              </li>
              <li className="col" data-filter-tags="run upscaled">
                <div className="position-relative">
                  <div className="ratio ratio-1x1 rounded-4 overflow-hidden shadow-sm bg-soft">
                    <img
                      src="/assets/images/inventory-4.jpg"
                      width="600"
                      height="600"
                      className="object-fit-cover w-100 h-100"
                      alt="Toddler in a quilted winter coat and bobble hat"
                    />
                  </div>
                  <div className="position-absolute top-0 end-0 m-2 d-flex align-items-center gap-1 p-1 rounded-pill bg-glass shadow-sm">
                    <button
                      type="button"
                      className="btn btn-ghost btn-18 rounded-circle"
                      data-star="favourite"
                      aria-pressed="false"
                      aria-label="Favourite"
                      title="Favourite"
                    >
                      <i
                        className="icon-16 icon-fill text-cat-amber d-none"
                        data-lucide="star"
                        aria-hidden="true"
                        data-star-on=""
                      />
                      {" "}
                      <i className="icon-16 text-muted-2" data-lucide="star" aria-hidden="true" data-star-off="" />
                    </button>
                    <div className="dropdown">
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle"
                        id="shotMenu8"
                        data-bs-toggle="dropdown"
                        data-dd-fixed=""
                        data-bs-offset="0,8"
                        aria-expanded="false"
                        aria-label="Actions for this image"
                      >
                        <i className="icon-16" data-lucide="ellipsis-vertical" aria-hidden="true" />
                      </button>
                      {" "}
                      <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="shotMenu8">
                        <li>
                          <button type="button" className="dropdown-item">
                            <i data-lucide="maximize-2" aria-hidden="true" />
                            Upscale to 4K
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item">
                            <i data-lucide="shuffle" aria-hidden="true" />
                            Make four variations
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item">
                            <i data-lucide="wand-sparkles" aria-hidden="true" />
                            Reuse this prompt
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-star="favourite">
                            <i data-lucide="star" aria-hidden="true" />
                            <span>
                              <span className="d-none" data-star-text-on="">
                                Remove from favourites
                              </span>
                              <span data-star-text-off="">
                                Add to favourites
                              </span>
                            </span>
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item">
                            <i data-lucide="download" aria-hidden="true" />
                            Download PNG
                          </button>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <button type="button" className="dropdown-item dropdown-item-danger">
                            <i data-lucide="trash-2" aria-hidden="true" />
                            Delete image
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <p className="fs-lg text-title text-truncate mt-3 mb-1">
                  Toddler in a quilted winter coat and bobble hat, snowy park, overcast
                </p>
                <p className="fs-xs text-muted-2 text-truncate mb-0">
                  <bdi>
                    Vision 3 · 1:1 · 4K
                  </bdi>
                </p>
              </li>
              <li className="col" data-filter-tags="run">
                <div className="position-relative">
                  <div className="ratio ratio-1x1 rounded-4 overflow-hidden shadow-sm bg-soft">
                    <img
                      src="/assets/images/inventory-6.jpg"
                      width="600"
                      height="600"
                      className="object-fit-cover w-100 h-100"
                      alt="Black and orange running shoe in profile"
                    />
                  </div>
                  <div className="position-absolute top-0 end-0 m-2 d-flex align-items-center gap-1 p-1 rounded-pill bg-glass shadow-sm">
                    <button
                      type="button"
                      className="btn btn-ghost btn-18 rounded-circle"
                      data-star="favourite"
                      aria-pressed="false"
                      aria-label="Favourite"
                      title="Favourite"
                    >
                      <i
                        className="icon-16 icon-fill text-cat-amber d-none"
                        data-lucide="star"
                        aria-hidden="true"
                        data-star-on=""
                      />
                      {" "}
                      <i className="icon-16 text-muted-2" data-lucide="star" aria-hidden="true" data-star-off="" />
                    </button>
                    <div className="dropdown">
                      <button
                        type="button"
                        className="btn btn-ghost btn-18 rounded-circle"
                        id="shotMenu9"
                        data-bs-toggle="dropdown"
                        data-dd-fixed=""
                        data-bs-offset="0,8"
                        aria-expanded="false"
                        aria-label="Actions for this image"
                      >
                        <i className="icon-16" data-lucide="ellipsis-vertical" aria-hidden="true" />
                      </button>
                      {" "}
                      <ul className="dropdown-menu dropdown-menu-end p-2" aria-labelledby="shotMenu9">
                        <li>
                          <button type="button" className="dropdown-item">
                            <i data-lucide="maximize-2" aria-hidden="true" />
                            Upscale to 4K
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item">
                            <i data-lucide="shuffle" aria-hidden="true" />
                            Make four variations
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item">
                            <i data-lucide="wand-sparkles" aria-hidden="true" />
                            Reuse this prompt
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item" data-star="favourite">
                            <i data-lucide="star" aria-hidden="true" />
                            <span>
                              <span className="d-none" data-star-text-on="">
                                Remove from favourites
                              </span>
                              <span data-star-text-off="">
                                Add to favourites
                              </span>
                            </span>
                          </button>
                        </li>
                        <li>
                          <button type="button" className="dropdown-item">
                            <i data-lucide="download" aria-hidden="true" />
                            Download PNG
                          </button>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <button type="button" className="dropdown-item dropdown-item-danger">
                            <i data-lucide="trash-2" aria-hidden="true" />
                            Delete image
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <p className="fs-lg text-title text-truncate mt-3 mb-1">
                  Black and orange running shoe in profile, dramatic rim light, dark set
                </p>
                <p className="fs-xs text-muted-2 text-truncate mb-0">
                  <bdi>
                    Vision 3 Turbo · 1:1
                  </bdi>
                </p>
              </li>
            </ul>
            <p className="fs-lg text-muted-2 text-center py-5 mb-0 d-none" data-search-empty="">
              No image matches that search.
            </p>
          </div>
        </section>
      </section>
      {/* ========== FOOTER ========== */}
    </AppShell>
  );
}

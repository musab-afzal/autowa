/* Generated from the Vionex HTML theme by scripts/convert-html.mjs */
export default function Customizer() {
  return (
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="customizer" role="dialog" aria-labelledby="customizerLabel">
      <div className="offcanvas-header border-b-soft justify-content-between">
        <div>
          <h2 className="offcanvas-title h5 mb-0" id="customizerLabel">
            Theme Customizer
          </h2>
          <p className="fs-md text-muted-2 mb-0">
            Personalize your dashboard
          </p>
        </div>
        <div className="d-flex gap-2 align-items-center">
          <button
            type="button"
            className="btn btn-outline-soft btn-18 rounded-circle"
            data-action="reset-customizer"
            aria-label="Reset customizer"
          >
            <i data-lucide="rotate-ccw" />
          </button>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
      </div>
      <div className="offcanvas-body py-0">
        <div className="cz-section py-3 border-b-soft">
          <p className="cz-title fs-sm fw-bold text-uppercase text-muted-2 mb-2" id="czModeLabel">
            Theme Mode
          </p>
          <div className="opt-grid d-grid gap-2" role="group" aria-labelledby="czModeLabel">
            <button
              type="button"
              aria-pressed="false"
              className="opt-tile d-flex flex-column align-items-center gap-1 text-center py-2 px-1 fs-md fw-medium radius-md transition-base"
              data-cz="mode"
              data-value="light"
            >
              <i data-lucide="sun" />
              Light
            </button>
            <button
              type="button"
              aria-pressed="false"
              className="opt-tile d-flex flex-column align-items-center gap-1 text-center py-2 px-1 fs-md fw-medium radius-md transition-base"
              data-cz="mode"
              data-value="dark"
            >
              <i data-lucide="moon" />
              Dark
            </button>
          </div>
        </div>
        <div className="cz-section py-3 border-b-soft">
          <p className="cz-title fs-sm fw-bold text-uppercase text-muted-2 mb-2" id="czDirLabel">
            Direction
          </p>
          <div className="opt-grid d-grid gap-2" role="group" aria-labelledby="czDirLabel">
            <button
              type="button"
              aria-pressed="false"
              className="opt-tile d-flex flex-column align-items-center gap-1 text-center py-2 px-1 fs-md fw-medium radius-md transition-base"
              data-cz="dir"
              data-value="ltr"
            >
              <i data-lucide="align-left" />
              LTR
            </button>
            <button
              type="button"
              aria-pressed="false"
              className="opt-tile d-flex flex-column align-items-center gap-1 text-center py-2 px-1 fs-md fw-medium radius-md transition-base"
              data-cz="dir"
              data-value="rtl"
            >
              <i data-lucide="align-right" />
              RTL
            </button>
          </div>
        </div>
        <div className="cz-section py-3 border-b-soft">
          <p className="cz-title fs-sm fw-bold text-uppercase text-muted-2 mb-2" id="czThemeLabel">
            Theme Color
          </p>
          <div className="d-flex flex-wrap gap-2" role="group" aria-labelledby="czThemeLabel">
            <button
              type="button"
              aria-pressed="false"
              className="swatch rounded-circle transition-base"
              data-cz="theme"
              data-value="cyan"
              title="Cyan"
              aria-label="Cyan"
            />
            <button
              type="button"
              aria-pressed="false"
              className="swatch rounded-circle transition-base"
              data-cz="theme"
              data-value="blue"
              title="Blue"
              aria-label="Blue"
            />
            <button
              type="button"
              aria-pressed="false"
              className="swatch rounded-circle transition-base"
              data-cz="theme"
              data-value="indigo"
              title="Indigo"
              aria-label="Indigo"
            />
            <button
              type="button"
              aria-pressed="false"
              className="swatch rounded-circle transition-base"
              data-cz="theme"
              data-value="emerald"
              title="Emerald"
              aria-label="Emerald"
            />
            <button
              type="button"
              aria-pressed="false"
              className="swatch rounded-circle transition-base"
              data-cz="theme"
              data-value="orange"
              title="Orange"
              aria-label="Orange"
            />
            <button
              type="button"
              aria-pressed="false"
              className="swatch rounded-circle transition-base"
              data-cz="theme"
              data-value="rose"
              title="Rose"
              aria-label="Rose"
            />
          </div>
        </div>
        <div className="cz-section py-3 border-b-soft">
          <p className="cz-title fs-sm fw-bold text-uppercase text-muted-2 mb-2" id="czLayoutLabel">
            Layout
          </p>
          <div className="opt-grid d-grid gap-2" role="group" aria-labelledby="czLayoutLabel">
            <button
              type="button"
              aria-pressed="false"
              className="opt-tile d-flex flex-column align-items-center gap-1 text-center py-2 px-1 fs-md fw-medium radius-md transition-base"
              data-cz="layout"
              data-value="sidebar"
            >
              <i data-lucide="panel-left" />
              Sidebar
            </button>
            <button
              type="button"
              aria-pressed="false"
              className="opt-tile d-flex flex-column align-items-center gap-1 text-center py-2 px-1 fs-md fw-medium radius-md transition-base"
              data-cz="layout"
              data-value="horizontal"
            >
              <i data-lucide="panel-top" />
              Horizontal
            </button>
            <button
              type="button"
              aria-pressed="false"
              className="opt-tile d-flex flex-column align-items-center gap-1 text-center py-2 px-1 fs-md fw-medium radius-md transition-base"
              data-cz="layout"
              data-value="hybrid"
            >
              <i data-lucide="layout-template" />
              Hybrid
            </button>
            <button
              type="button"
              aria-pressed="false"
              className="opt-tile d-flex flex-column align-items-center gap-1 text-center py-2 px-1 fs-md fw-medium radius-md transition-base"
              data-cz="layout"
              data-value="compact"
            >
              <i data-lucide="layout-dashboard" />
              Compact
            </button>
          </div>
        </div>
        <div className="cz-section py-3 border-b-soft">
          <p className="cz-title fs-sm fw-bold text-uppercase text-muted-2 mb-2" id="czSidebarLabel">
            Sidebar Style
          </p>
          <div className="opt-grid d-grid gap-2" role="group" aria-labelledby="czSidebarLabel">
            <button
              type="button"
              aria-pressed="false"
              className="opt-tile d-flex flex-column align-items-center gap-1 text-center py-2 px-1 fs-md fw-medium radius-md transition-base"
              data-cz="sidebar"
              data-value="default"
            >
              <i data-lucide="panel-left" />
              Default
            </button>
            <button
              type="button"
              aria-pressed="false"
              className="opt-tile d-flex flex-column align-items-center gap-1 text-center py-2 px-1 fs-md fw-medium radius-md transition-base"
              data-cz="sidebar"
              data-value="compact"
            >
              <i data-lucide="panel-left-dashed" />
              Compact
            </button>
            <button
              type="button"
              aria-pressed="false"
              className="opt-tile d-flex flex-column align-items-center gap-1 text-center py-2 px-1 fs-md fw-medium radius-md transition-base"
              data-cz="sidebar"
              data-value="icon"
            >
              <i data-lucide="square-menu" />
              Icon Only
            </button>
            <button
              type="button"
              aria-pressed="false"
              className="opt-tile d-flex flex-column align-items-center gap-1 text-center py-2 px-1 fs-md fw-medium radius-md transition-base"
              data-cz="sidebar"
              data-value="floating"
            >
              <i data-lucide="square-dashed" />
              Floating
            </button>
          </div>
        </div>
        <div className="cz-section py-3 border-b-soft">
          <p className="cz-title fs-sm fw-bold text-uppercase text-muted-2 mb-2" id="czContainerLabel">
            Container
          </p>
          <div className="opt-grid d-grid gap-2" role="group" aria-labelledby="czContainerLabel">
            <button
              type="button"
              aria-pressed="false"
              className="opt-tile d-flex flex-column align-items-center gap-1 text-center py-2 px-1 fs-md fw-medium radius-md transition-base"
              data-cz="container"
              data-value="full"
            >
              <i data-lucide="move-horizontal" />
              Full Width
            </button>
            <button
              type="button"
              aria-pressed="false"
              className="opt-tile d-flex flex-column align-items-center gap-1 text-center py-2 px-1 fs-md fw-medium radius-md transition-base"
              data-cz="container"
              data-value="boxed"
            >
              <i data-lucide="square" />
              Boxed
            </button>
          </div>
        </div>
        <div className="cz-section py-3 border-b-soft">
          <p className="cz-title fs-sm fw-bold text-uppercase text-muted-2 mb-2" id="czRadiusLabel">
            Border Radius
          </p>
          <div className="opt-grid cols-3 d-grid gap-2" role="group" aria-labelledby="czRadiusLabel">
            <button
              type="button"
              aria-pressed="false"
              className="opt-tile d-flex flex-column align-items-center gap-1 text-center py-2 px-1 fs-md fw-medium radius-md transition-base"
              data-cz="radius"
              data-value="sm"
            >
              Small
            </button>
            <button
              type="button"
              aria-pressed="false"
              className="opt-tile d-flex flex-column align-items-center gap-1 text-center py-2 px-1 fs-md fw-medium radius-md transition-base"
              data-cz="radius"
              data-value="md"
            >
              Medium
            </button>
            <button
              type="button"
              aria-pressed="false"
              className="opt-tile d-flex flex-column align-items-center gap-1 text-center py-2 px-1 fs-md fw-medium radius-md transition-base"
              data-cz="radius"
              data-value="lg"
            >
              Large
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

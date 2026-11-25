/* Shared <head> for every page — same order as the original HTML theme:
   Bootstrap -> pre-paint theme restore -> themes.css -> dashboard.css.

   The inline script restores the customizer options (mode, direction, colour
   theme, layout, ...) from localStorage BEFORE first paint, exactly like the
   original theme, so there is no flash of the default theme. It changes
   attributes on <html> and the Bootstrap <link>, hence suppressHydrationWarning. */
const BOOT_SCRIPT = `(function () {
  var OPTIONS = {
    "mode": ["data-bs-theme", "light"],
    "dir": ["dir", "ltr"],
    "theme": ["data-theme", "cyan"],
    "layout": ["data-layout", "sidebar"],
    "sidebar": ["data-sidebar", "default"],
    "container": ["data-container", "full"],
    "radius": ["data-radius", "md"]
  };
  var root = document.documentElement, dir = "ltr", key, val;
  root.setAttribute("data-booting", "");
  for (key in OPTIONS) {
    try { val = localStorage.getItem("vionex-" + key); } catch (e) { val = null; }
    val = val || OPTIONS[key][1];
    root.setAttribute(OPTIONS[key][0], val);
    if (key === "dir") dir = val;
  }
  if (dir === "rtl") {
    document.getElementById("bootstrap-css").href = "/assets/css/bootstrap.rtl.min.css";
  }
})();`;

export default function ThemeHead() {
  return (
    <head>
      <link id="bootstrap-css" rel="stylesheet" href="/assets/css/bootstrap.min.css" suppressHydrationWarning />
      <script dangerouslySetInnerHTML={{ __html: BOOT_SCRIPT }} />
      <link rel="stylesheet" href="/assets/css/themes.css" />
      <link rel="stylesheet" href="/assets/css/dashboard.css" />
    </head>
  );
}

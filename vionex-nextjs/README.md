# Vionex — Next.js

The Vionex Bootstrap 5 admin theme as a Next.js (App Router) app. All 51 pages
are real JSX routes and render exactly like the original HTML.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Structure

```
app/
  (app)/layout.jsx         root layout for dashboard pages (body.app-shell)
  (app)/page.jsx           "/"  (was index.html)
  (app)/<page>/page.jsx    one route per original .html page
  (auth)/layout.jsx        root layout for login, register, lock-screen, ...
  (auth)/<page>/page.jsx
components/
  AppShell.jsx             sidebar + header + top nav + <main> + footer + customizer
  shell/*.jsx              the shared chrome, one component per piece
  ThemeHead.jsx            stylesheets + pre-paint theme restore script
  VendorScripts.jsx        loads the theme's original JS after hydration
public/assets/             original CSS, fonts, images and JS (unchanged except below)
scripts/convert-html.mjs   the HTML -> JSX converter used to generate the pages
```

Routes map 1:1 to the old files: `crm-dashboard.html` -> `/crm-dashboard`,
`index.html` -> `/`. The 12 HTTrack copies `error-previewXXXX.html?code=NNN` are
one route: `/error-preview?code=NNN`.

## How behaviour is preserved

- The theme's interactivity (customizer, sidebar, dropdowns, charts, calendar,
  kanban, maps...) is still the original jQuery / Bootstrap / ApexCharts /
  ECharts / Chart.js / FullCalendar code in `public/assets/js`. Each page lists
  the same scripts, in the same order, as its HTML original.
- `VendorScripts` runs them after React hydrates and replays the classic
  page-load timeline (scripts execute while `readyState` is `loading`, then
  `DOMContentLoaded`, then `load`), so their init code runs unmodified.
- Links are plain `<a>` tags, so every navigation is a full page load, exactly
  like the HTML theme. (Client-side `<Link>` navigation would need the jQuery
  layer rewritten, because it initialises once per page load.)
- Only change to the theme JS: `public/assets/js/dashboard.js` uses absolute
  `/assets/css/...` paths for the RTL switch and treats `/` as the index page
  when highlighting the active menu item.

## Editing

The pages are ordinary JSX, so edit them directly. To regenerate everything
from the HTML theme instead, run `npm run convert`. It overwrites
`app/(app)/**/page.jsx`, `app/(auth)/**/page.jsx` and `components/shell/*`.

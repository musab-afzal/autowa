#!/usr/bin/env node
/* ==========================================================================
   convert-html.mjs
   One-shot converter: Vionex Bootstrap HTML theme -> Next.js App Router (JSX).

   Usage:  node scripts/convert-html.mjs <path-to-html-theme-folder>

   - Parses each page with parse5 (spec-compliant, so the DOM React renders is
     exactly the DOM the browser built from the original HTML: no hydration
     mismatches from implied <tbody> etc.).
   - Emits real JSX (className, htmlFor, style objects, defaultValue, ...).
   - Pulls the shared chrome (sidebar, flyout, header, top nav, footer,
     customizer) into components/shell/*, using the variant most pages share.
   - Rewrites "page.html" links to Next routes and "assets/..." to "/assets/...".
   ========================================================================== */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parse, serialize } from "parse5";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SRC = path.resolve(process.argv[2] || path.join(ROOT, ".."));

/* ------------------------------------------------------------------ urls */
function pageRoute(name) {
  name = name.toLowerCase();
  if (/^error-preview[0-9a-f]{4}$/.test(name)) name = "error-preview";
  return name === "index" ? "/" : "/" + name;
}
function rewriteUrl(v) {
  if (typeof v !== "string") return v;
  let m = v.match(/^([\w-]+)\.html((?:\?[^#]*)?)((?:#.*)?)$/);
  if (m) return pageRoute(m[1]) + m[2] + m[3];
  if (/^(\.\/)?assets\//.test(v)) return "/" + v.replace(/^\.\//, "");
  return v;
}
function rewriteStyleUrls(v) {
  return v.replace(/url\((['"]?)(\.\/)?assets\//g, "url($1/assets/");
}

/* ------------------------------------------------------------- tree utils */
const isEl = (n) => n && n.tagName !== undefined;
const attr = (n, name) => (n.attrs || []).find((a) => a.name === name && !a.prefix)?.value;
const hasClass = (n, c) => isEl(n) && (attr(n, "class") || "").split(/\s+/).includes(c);
const elChildren = (n) => (n.childNodes || []).filter(isEl);
function find(n, pred) {
  if (pred(n)) return n;
  for (const c of n.childNodes || []) {
    const r = find(c, pred);
    if (r) return r;
  }
  if (n.content) return find(n.content, pred);
  return null;
}
/* rewrite every url-ish attribute in place (also inside <template> content) */
function rewriteTree(n) {
  for (const a of n.attrs || []) {
    if (a.name === "style") a.value = rewriteStyleUrls(a.value);
    else a.value = rewriteUrl(a.value);
  }
  for (const c of n.childNodes || []) rewriteTree(c);
  if (n.content) rewriteTree(n.content);
}

/* ---------------------------------------------------------- jsx emitting */
const VOID = new Set("area base br col embed hr img input link meta source track wbr".split(" "));
const NO_WS = new Set("table thead tbody tfoot tr colgroup select optgroup datalist html head".split(" "));
const ATTR_MAP = {
  class: "className", for: "htmlFor", tabindex: "tabIndex", readonly: "readOnly",
  maxlength: "maxLength", minlength: "minLength", colspan: "colSpan", rowspan: "rowSpan",
  autocomplete: "autoComplete", autofocus: "autoFocus", novalidate: "noValidate",
  enctype: "encType", crossorigin: "crossOrigin", contenteditable: "contentEditable",
  spellcheck: "spellCheck", srcset: "srcSet", frameborder: "frameBorder",
  allowfullscreen: "allowFullScreen", datetime: "dateTime", inputmode: "inputMode",
  enterkeyhint: "enterKeyHint", "accept-charset": "acceptCharset", "http-equiv": "httpEquiv",
  hreflang: "hrefLang", usemap: "useMap", cellpadding: "cellPadding", cellspacing: "cellSpacing",
  playsinline: "playsInline", autoplay: "autoPlay", formnovalidate: "formNoValidate",
  fetchpriority: "fetchPriority", referrerpolicy: "referrerPolicy", autocapitalize: "autoCapitalize",
  autocorrect: "autoCorrect", formaction: "formAction", formmethod: "formMethod",
  formtarget: "formTarget", accesskey: "accessKey", charset: "charSet", itemprop: "itemProp",
  itemscope: "itemScope", itemtype: "itemType", nomodule: "noModule",
  popovertarget: "popoverTarget", popovertargetaction: "popoverTargetAction",
  "xlink:href": "xlinkHref", "xml:space": "xmlSpace", "xmlns:xlink": "xmlnsXlink", "xml:lang": "xmlLang",
};
const BOOL = new Set([
  "allowFullScreen", "async", "autoFocus", "autoPlay", "controls", "default", "defer", "disabled",
  "formNoValidate", "hidden", "inert", "loop", "multiple", "muted", "noModule", "noValidate", "open",
  "playsInline", "readOnly", "required", "reversed", "itemScope", "defaultChecked",
]);
const camel = (s) => s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());

function jsxAttrName(a) {
  const full = a.prefix ? `${a.prefix}:${a.name}` : a.name;
  if (ATTR_MAP[full]) return ATTR_MAP[full];
  if (/^(data|aria)-/.test(full)) return full;
  if (full.includes("-") || full.includes(":")) return camel(full.replace(":", "-"));
  return full;
}
/* nbsp, line separator, paragraph separator: kept as escapes so they stay visible in source */
const SPECIAL_CHARS = [0xa0, 0x2028, 0x2029].map((c) => String.fromCharCode(c)).join("");
const SPECIAL_G = new RegExp("[" + SPECIAL_CHARS + "]", "g");
const SPECIAL = new RegExp("[" + SPECIAL_CHARS + "]");
const BACKSLASH = String.fromCharCode(92);
function jsString(s) {
  return JSON.stringify(s).replace(SPECIAL_G, (c) => BACKSLASH + "u" + c.charCodeAt(0).toString(16).padStart(4, "0"));
}
function attrValue(v) {
  if (/["&\n\r\\{}<>]/.test(v) || SPECIAL.test(v)) return `{${jsString(v)}}`;
  return `"${v}"`;
}
function styleObject(css) {
  const out = [];
  let buf = "", depth = 0, q = null;
  const decls = [];
  for (const ch of css) {
    if (q) { if (ch === q) q = null; buf += ch; continue; }
    if (ch === '"' || ch === "'") { q = ch; buf += ch; continue; }
    if (ch === "(") depth++;
    if (ch === ")") depth--;
    if (ch === ";" && depth === 0) { decls.push(buf); buf = ""; continue; }
    buf += ch;
  }
  decls.push(buf);
  for (const d of decls) {
    const i = d.indexOf(":");
    if (i < 0) continue;
    const prop = d.slice(0, i).trim();
    const val = d.slice(i + 1).trim();
    if (!prop) continue;
    let key;
    if (prop.startsWith("--")) key = jsString(prop);
    else {
      let p = prop.toLowerCase();
      if (p.startsWith("-ms-")) p = p.slice(1);
      key = camel(p);
      if (/^-/.test(key)) key = key.slice(1).replace(/^./, (c) => c.toUpperCase());
      if (/^webkit|^moz/.test(key) && prop.startsWith("-")) key = key[0].toUpperCase() + key.slice(1);
    }
    out.push(`${key}: ${jsString(val)}`);
  }
  return `{{ ${out.join(", ")} }}`;
}

function textOf(n) {
  return (n.childNodes || []).map((c) => (c.nodeName === "#text" ? c.value : textOf(c))).join("");
}

function emitAttrs(n, extra = []) {
  const parts = [];
  const tag = n.tagName;
  for (const a of n.attrs || []) {
    let name = jsxAttrName(a);
    let v = a.value;
    if (name === "style") { if (v.trim()) parts.push(`style=${styleObject(v)}`); continue; }
    if (tag === "input" && name === "value") name = "defaultValue";
    if (tag === "input" && name === "checked") name = "defaultChecked";
    if (tag === "option" && name === "selected") continue; /* handled on <select> */
    if (name === "contentEditable") parts.push("suppressContentEditableWarning");
    if (BOOL.has(name) && (v === "" || v.toLowerCase() === a.name.toLowerCase())) { parts.push(name); continue; }
    parts.push(`${name}=${attrValue(v)}`);
  }
  return parts.concat(extra);
}

function openTag(tag, parts, selfClose, pad) {
  const one = `<${tag}${parts.length ? " " + parts.join(" ") : ""}${selfClose ? " />" : ">"}`;
  if (one.length + pad.length <= 120 || parts.length < 2) return pad + one;
  return `${pad}<${tag}\n${parts.map((p) => pad + "  " + p).join("\n")}\n${pad}${selfClose ? "/>" : ">"}`;
}

/* ------------------------------------------------ whitespace significance
   A collapsible space is emitted as {" "} only where the browser could render
   it. It is provably dropped by CSS when it sits:
     - inside a flex/grid container (anonymous flex items trim whitespace),
     - at the start/end of a non-inline element's content (line trimming),
     - next to an in-flow block-level sibling (line break boundary).
   Display info is read from the theme's own stylesheets so a class that makes
   a <div> inline, hidden, floated or absolutely positioned is never treated
   as a block. Anything uncertain keeps its space. */
const CLASS_DISPLAY = new Map();
for (const f of ["bootstrap.min.css", "themes.css", "dashboard.css"]) {
  const css = fs.readFileSync(path.join(ROOT, "public/assets/css", f), "utf8").replace(/\/\*[\s\S]*?\*\//g, "");
  const re = /([^{}]+)\{([^{}]*)\}/g;
  let m;
  while ((m = re.exec(css))) {
    const vals = [];
    for (const d of m[2].matchAll(/(?:^|;)\s*display\s*:\s*([\w-]+)/g)) vals.push(d[1]);
    if (/(?:^|;)\s*position\s*:\s*(absolute|fixed)/.test(m[2])) vals.push("abs");
    if (/(?:^|;)\s*float\s*:\s*(left|right|inline-start|inline-end)/.test(m[2])) vals.push("float");
    if (!vals.length) continue;
    for (const sel of m[1].split(",")) {
      const last = sel.trim().split(/[\s>+~]+/).pop() || "";
      for (const c of last.matchAll(/\.((?:\\.|[\w-])+)/g)) {
        const k = c[1].replace(/\\/g, "");
        if (!CLASS_DISPLAY.has(k)) CLASS_DISPLAY.set(k, new Set());
        vals.forEach((v) => CLASS_DISPLAY.get(k).add(v));
      }
    }
  }
}
const BLOCK_TAGS = new Set("div section article aside header footer nav main p h1 h2 h3 h4 h5 h6 ul ol li dl dt dd form fieldset figure figcaption table hr blockquote pre address details hgroup".split(" "));
const INLINE_TAGS = new Set("a span strong em b i small label code abbr sup sub u s mark kbd q cite time var bdi bdo del ins dfn samp data".split(" "));
const BLOCKISH = new Set(["block", "flex", "grid", "table", "list-item", "flow-root"]);
const classes = (n) => (attr(n, "class") || "").split(/\s+/).filter(Boolean);
const styleOf = (n) => attr(n, "style") || "";
function displayVals(n) {
  const out = new Set();
  for (const c of classes(n)) for (const v of CLASS_DISPLAY.get(c) || []) out.add(v);
  return out;
}
function isDefiniteBlock(n) {
  if (!isEl(n) || !BLOCK_TAGS.has(n.tagName)) return false;
  if ((n.attrs || []).some((a) => a.name === "hidden")) return false;
  if (/display|position|float/.test(styleOf(n))) return false;
  for (const v of displayVals(n)) if (!BLOCKISH.has(v)) return false;
  return true;
}
function isFlexParent(n) {
  if (!isEl(n)) return false;
  const st = styleOf(n).match(/display\s*:\s*([\w-]+)/);
  if (st) return /^(inline-)?(flex|grid)$/.test(st[1]);
  const vals = [...displayVals(n)].filter((v) => v !== "abs" && v !== "float");
  return vals.some((v) => /flex|grid/.test(v)) && vals.every((v) => /^(inline-)?(flex|grid)$|^none$/.test(v));
}
function isInlineParent(n) {
  if (!isEl(n)) return true;
  if (INLINE_TAGS.has(n.tagName)) return true;
  if (/display\s*:\s*(inline|contents)\b(?!-)/.test(styleOf(n))) return true;
  for (const v of displayVals(n)) if (v === "inline" || v === "contents") return true;
  return false;
}
/* is a space at this side of `node` (within the sibling list) rendered? */
function spaceMatters(nodes, i, side) {
  const node = nodes[i];
  const parent = node.parentNode;
  if (parent && isFlexParent(parent)) return false;
  let j = i + side;
  while (j >= 0 && j < nodes.length && nodes[j].nodeName === "#comment") j += side;
  const sib = nodes[j];
  if (!sib) return !!parent && isInlineParent(parent); /* line start/end of a non-inline box is trimmed */
  return !isDefiniteBlock(sib);
}

function emitChildren(nodes, depth, parentTag, inPre) {
  const pad = "  ".repeat(depth);
  const lines = [];
  for (let i = 0; i < nodes.length; i++) {
    const c = nodes[i];
    if (c.nodeName === "#text") {
      if (inPre) { if (c.value) lines.push(pad + `{${jsString(c.value)}}`); continue; }
      const ws = !/[^ \t\n\r\f]/.test(c.value);
      if (ws) {
        if (!NO_WS.has(parentTag) && c.value.length && spaceMatters(nodes, i, -1) && spaceMatters(nodes, i, 1)) lines.push(pad + `{" "}`);
        continue;
      }
      const t = c.value.replace(/[ \t\n\r\f]+/g, " ");
      const lead = t.startsWith(" ") && spaceMatters(nodes, i, -1);
      const trail = t.endsWith(" ") && spaceMatters(nodes, i, 1);
      const core = t.replace(/^ | $/g, ""); /* not trim(): that would also eat &nbsp; */
      const txt = /[{}<>&]/.test(core) || SPECIAL.test(core) ? `{${jsString(core)}}` : core;
      if (lead && trail && !txt.startsWith("{")) lines.push(pad + `{" "}${txt}{" "}`);
      else {
        if (lead) lines.push(pad + `{" "}`);
        lines.push(pad + txt);
        if (trail) lines.push(pad + `{" "}`);
      }
    } else if (c.nodeName === "#comment") {
      const t = c.data.trim();
      if (!t || /HTTrack|Mirrored from/.test(t)) continue;
      lines.push(pad + `{/* ${t.replace(/\*\//g, "* /").replace(/\n\s*/g, "\n" + pad + "   ")} */}`);
    } else if (isEl(c)) {
      const s = emitEl(c, depth, inPre);
      if (s) lines.push(s);
    }
  }
  return lines.join("\n");
}

function emitEl(n, depth, inPre = false) {
  const pad = "  ".repeat(depth);
  const tag = n.tagName;
  if (tag === "script") return "";
  if (tag === "template") {
    const html = serialize(n.content).trim();
    return openTag(tag, emitAttrs(n, [`dangerouslySetInnerHTML={{ __html: ${jsString(html)} }}`]), true, pad);
  }
  if (tag === "textarea") {
    const val = textOf(n);
    return openTag(tag, emitAttrs(n, val ? [`defaultValue=${attrValue(val)}`] : []), true, pad);
  }
  const extra = [];
  if (tag === "select") {
    const sel = [];
    (function walk(x) {
      for (const c of elChildren(x)) {
        if (c.tagName === "option" && (c.attrs || []).some((a) => a.name === "selected"))
          sel.push(attr(c, "value") ?? textOf(c).replace(/\s+/g, " ").trim());
        else walk(c);
      }
    })(n);
    const multiple = (n.attrs || []).some((a) => a.name === "multiple");
    if (sel.length) extra.push(`defaultValue=${multiple ? `{${JSON.stringify(sel)}}` : attrValue(multiple ? sel : sel[sel.length - 1])}`);
  }
  const parts = emitAttrs(n, extra);
  const kids = (n.childNodes || []).filter((c) => !(c.nodeName === "#comment" && /HTTrack|Mirrored from/.test(c.data)));
  if (VOID.has(tag) || kids.length === 0) return openTag(tag, parts, true, pad);
  const pre = inPre || tag === "pre";
  const body = emitChildren(kids, depth + 1, tag, pre);
  if (!body.trim()) return openTag(tag, parts, true, pad);
  return `${openTag(tag, parts, false, pad)}\n${body}\n${pad}</${tag}>`;
}

/* emit a list of sibling nodes as a single JSX expression (fragment) */
function fragment(nodes, depth, parentTag = "div") {
  const pad = "  ".repeat(depth);
  const body = emitChildren(nodes, depth + 1, parentTag, false);
  return `${pad}<>\n${body}\n${pad}</>`;
}

/* --------------------------------------------------------------- loading */
const files = fs.readdirSync(SRC).filter((f) => f.endsWith(".html")).filter((f) => !/^error-preview[0-9a-f]{4}\.html$/.test(f)).sort();
const pages = [];
for (const file of files) {
  const doc = parse(fs.readFileSync(path.join(SRC, file), "utf8"));
  rewriteTree(doc);
  const html = find(doc, (n) => n.tagName === "html");
  const head = find(doc, (n) => n.tagName === "head");
  const body = find(doc, (n) => n.tagName === "body");
  const title = textOf(find(head, (n) => n.tagName === "title") || { childNodes: [] }).trim();
  const descEl = find(head, (n) => n.tagName === "meta" && attr(n, "name") === "description");
  const scripts = [];
  (function walk(x) {
    for (const c of x.childNodes || []) {
      if (c.tagName === "script" && attr(c, "src")) scripts.push(attr(c, "src"));
      walk(c);
    }
  })(body);
  const navPage = attr(body, "data-nav-page");
  pages.push({
    file,
    name: file.replace(/\.html$/, ""),
    title,
    description: descEl ? attr(descEl, "content").replace(/\s+/g, " ").trim() : "",
    scripts,
    navPage: navPage ? navPage.replace(/^\//, "") : null,
    bodyClass: attr(body, "class"),
    htmlAttrs: html.attrs,
    body,
    isApp: !!find(body, (n) => hasClass(n, "app-sidebar")),
  });
}

/* ----------------------------------------------------------- app pages */
const PIECES = ["sidebar", "header", "topnav", "footer", "customizer"];
const report = [];
for (const p of pages.filter((p) => p.isApp)) {
  const top = elChildren(p.body).filter((c) => c.tagName !== "script");
  const appMain = top.find((c) => hasClass(c, "app-main"));
  const iMain = top.indexOf(appMain);
  const before = top.slice(0, iMain);
  const after = top.slice(iMain + 1);
  const mainKids = elChildren(appMain);
  const header = mainKids.find((c) => c.tagName === "header");
  const topnav = mainKids.find((c) => hasClass(c, "app-topnav"));
  const main = mainKids.find((c) => c.tagName === "main");
  const others = mainKids.filter((c) => ![header, topnav, main].includes(c));
  if (others.length) report.push(`${p.file}: unexpected .app-main children: ${others.map((o) => o.tagName).join(",")}`);
  const footer = elChildren(main).find((c) => c.tagName === "footer" && hasClass(c, "app-footer"));
  const customizer = after.find((c) => attr(c, "id") === "customizer");
  const extras = after.filter((c) => c !== customizer);
  if (customizer && after.indexOf(customizer) !== 0) report.push(`${p.file}: customizer is not first after .app-main`);

  /* main content = main's child nodes minus the footer (and trailing whitespace before it) */
  const contentNodes = main.childNodes.filter((c) => c !== footer);
  while (contentNodes.length && contentNodes[contentNodes.length - 1].nodeName === "#text" && !contentNodes[contentNodes.length - 1].value.trim()) contentNodes.pop();
  while (contentNodes.length && contentNodes[0].nodeName === "#text" && !contentNodes[0].value.trim()) contentNodes.shift();

  p.pieces = {
    sidebar: fragment(before, 0, "body"),
    header: header ? emitEl(header, 0) : "",
    topnav: topnav ? emitEl(topnav, 0) : "",
    footer: footer ? emitEl(footer, 0) : "",
    customizer: customizer ? emitEl(customizer, 0) : "",
  };
  p.mainAttrs = emitAttrs(main);
  p.contentNodes = contentNodes;
  p.extras = extras;
}

/* majority variant per piece becomes the shared component */
const appPages = pages.filter((p) => p.isApp);
const shared = {};
for (const k of PIECES) {
  const counts = new Map();
  for (const p of appPages) counts.set(p.pieces[k], (counts.get(p.pieces[k]) || 0) + 1);
  const [best, n] = [...counts.entries()].sort((a, b) => b[1] - a[1])[0];
  shared[k] = best;
  report.push(`piece ${k}: ${counts.size} variant(s), shared by ${n}/${appPages.length}`);
}
const mainAttrCounts = new Map();
for (const p of appPages) { const k = p.mainAttrs.join(" "); mainAttrCounts.set(k, (mainAttrCounts.get(k) || 0) + 1); }
const sharedMainAttrs = [...mainAttrCounts.entries()].sort((a, b) => b[1] - a[1])[0][0];
report.push(`main attrs: ${mainAttrCounts.size} variant(s)`);

/* --------------------------------------------------------------- writers */
function write(rel, content) {
  const f = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(f), { recursive: true });
  fs.writeFileSync(f, content);
}
function indent(s, n) {
  const pad = "  ".repeat(n);
  return s.split("\n").map((l) => (l ? pad + l : l)).join("\n");
}
const COMP = { sidebar: "Sidebar", header: "Header", topnav: "TopNav", footer: "Footer", customizer: "Customizer" };
const HEADER_NOTE = "/* Generated from the Vionex HTML theme by scripts/convert-html.mjs */\n";

for (const k of PIECES) {
  write(
    `components/shell/${COMP[k]}.jsx`,
    `${HEADER_NOTE}export default function ${COMP[k]}() {\n  return (\n${indent(shared[k], 2)}\n  );\n}\n`
  );
}

function metadata(p) {
  return `export const metadata = {\n  title: ${jsString(p.title)},\n  description: ${jsString(p.description)},\n};\n`;
}
function scriptsProp(p) {
  return `[\n${p.scripts.map((s) => `    ${jsString(s)},`).join("\n")}\n  ]`;
}
function routeDir(p) {
  return p.name === "index" ? "" : p.name;
}

for (const p of appPages) {
  const props = [`scripts={scripts}`];
  if (p.navPage) props.push(`navPage=${jsString(rewriteUrl(p.navPage).replace(/^\//, "") || "index")}`);
  if (p.mainAttrs.join(" ") !== sharedMainAttrs) props.push(`mainProps={{ ${p.mainAttrs.map((a) => a.replace(/^([\w-]+)=/, (m, n) => `${/-/.test(n) ? jsString(n) : n}: `).replace(/: \{(.*)\}$/, ": $1")).join(", ")} }}`);
  for (const k of PIECES) {
    if (p.pieces[k] !== shared[k]) props.push(`${k}={\n${indent(p.pieces[k].startsWith("<>") ? p.pieces[k] : `<>\n${indent(p.pieces[k], 1)}\n</>`, 3)}\n    }`);
  }
  if (p.extras.length) props.push(`after={\n${fragment(p.extras, 3, "body")}\n    }`);
  const content = emitChildren(p.contentNodes, 3, "main", false);
  const src =
    `${HEADER_NOTE}import AppShell from "@/components/AppShell";\n\n${metadata(p)}\n` +
    `const scripts = ${scriptsProp(p)};\n\n` +
    `export default function Page() {\n  return (\n    <AppShell\n${props.map((x) => "      " + x).join("\n")}\n    >\n${content}\n    </AppShell>\n  );\n}\n`;
  write(`app/(app)/${routeDir(p) ? routeDir(p) + "/" : ""}page.jsx`, src);
}

/* ----------------------------------------------------------- auth pages */
for (const p of pages.filter((p) => !p.isApp)) {
  const nodes = p.body.childNodes.filter((c) => c.tagName !== "script");
  const props = [`scripts={scripts}`];
  if (p.navPage) props.push(`navPage=${jsString(p.navPage)}`);
  const src =
    `${HEADER_NOTE}import VendorScripts from "@/components/VendorScripts";\n\n${metadata(p)}\n` +
    `const scripts = ${scriptsProp(p)};\n\n` +
    `export default function Page() {\n  return (\n    <>\n${emitChildren(nodes, 3, "body", false)}\n      <VendorScripts ${props.join(" ")} />\n    </>\n  );\n}\n`;
  write(`app/(auth)/${p.name}/page.jsx`, src);
  if (p.bodyClass !== "vh-100 h-dvh overflow-hidden") report.push(`${p.file}: auth body class differs: ${p.bodyClass}`);
}
for (const p of appPages) if (p.bodyClass !== "app-shell vh-100 overflow-hidden") report.push(`${p.file}: app body class differs: ${p.bodyClass}`);

report.push(`sharedMainAttrs: ${sharedMainAttrs}`);
report.push(`pages: ${appPages.length} app, ${pages.length - appPages.length} auth`);
console.log(report.join("\n"));

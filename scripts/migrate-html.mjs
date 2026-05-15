#!/usr/bin/env node
/**
 * One-shot HTML -> Next.js App Router page.tsx converter for the factorcloud port.
 *
 * Reads HTML files from a source dir, walks the DOM with cheerio, emits a
 * page.tsx per route that returns real JSX (no dangerouslySetInnerHTML for body).
 *
 * - <title>, <meta description> -> exported metadata
 * - inline <style> blocks (head + body) -> single <style dangerouslySetInnerHTML> block
 * - inline <script> blocks -> single next/script block
 * - HTML attributes -> JSX attribute names
 * - style="..." -> style={{...}} objects (camelCase keys)
 * - on*="..." -> on*={(event) => { ... }} via new Function
 * - void elements self-close
 * - .html hrefs rewritten to Next.js routes
 */

import { load } from "cheerio";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, "..");
const SRC_DIR = process.argv[2] || "/Users/jorgesantibanez/Downloads/factorcloud-next-v5";
const DEST_DIR = path.join(PROJECT_ROOT, "src", "app");

const VOID = new Set([
  "area", "base", "br", "col", "embed", "hr", "img", "input",
  "link", "meta", "param", "source", "track", "wbr",
]);

// HTML attr -> JSX attr renames (lowercase keys; ARIA/data stay kebab)
const ATTR_MAP = {
  class: "className",
  for: "htmlFor",
  tabindex: "tabIndex",
  crossorigin: "crossOrigin",
  colspan: "colSpan",
  rowspan: "rowSpan",
  enctype: "encType",
  autocomplete: "autoComplete",
  spellcheck: "spellCheck",
  autofocus: "autoFocus",
  autoplay: "autoPlay",
  playsinline: "playsInline",
  readonly: "readOnly",
  maxlength: "maxLength",
  minlength: "minLength",
  novalidate: "noValidate",
  srcset: "srcSet",
  allowfullscreen: "allowFullScreen",
  contenteditable: "contentEditable",
  frameborder: "frameBorder",
  "http-equiv": "httpEquiv",
  "accept-charset": "acceptCharset",
  marginheight: "marginHeight",
  marginwidth: "marginWidth",
  formaction: "formAction",
  formenctype: "formEncType",
  formmethod: "formMethod",
  formnovalidate: "formNoValidate",
  formtarget: "formTarget",
  referrerpolicy: "referrerPolicy",
  // SVG
  "stroke-width": "strokeWidth",
  "stroke-linecap": "strokeLinecap",
  "stroke-linejoin": "strokeLinejoin",
  "stroke-miterlimit": "strokeMiterlimit",
  "stroke-dasharray": "strokeDasharray",
  "stroke-dashoffset": "strokeDashoffset",
  "stroke-opacity": "strokeOpacity",
  "fill-opacity": "fillOpacity",
  "fill-rule": "fillRule",
  "clip-rule": "clipRule",
  "clip-path": "clipPath",
  "text-anchor": "textAnchor",
  "dominant-baseline": "dominantBaseline",
  "alignment-baseline": "alignmentBaseline",
  "stop-color": "stopColor",
  "stop-opacity": "stopOpacity",
  "flood-color": "floodColor",
  "flood-opacity": "floodOpacity",
  "letter-spacing": "letterSpacing",
  "word-spacing": "wordSpacing",
  "text-rendering": "textRendering",
  "shape-rendering": "shapeRendering",
  "color-interpolation": "colorInterpolation",
  "color-rendering": "colorRendering",
  "image-rendering": "imageRendering",
  "vector-effect": "vectorEffect",
  "pointer-events": "pointerEvents",
  "marker-end": "markerEnd",
  "marker-mid": "markerMid",
  "marker-start": "markerStart",
  "xmlns:xlink": "xmlnsXlink",
  "xlink:href": "xlinkHref",
};

// React.HTMLAttributes properties typed strictly as `number` — emit {N} not "N"
const NUMERIC_ATTRS = new Set([
  "tabIndex", "colSpan", "rowSpan", "span",
]);

// JSX-only attributes that React expects in lowercase even though HTML attr is different
function mapAttr(name) {
  const lower = name.toLowerCase();
  if (lower in ATTR_MAP) return ATTR_MAP[lower];
  if (lower.startsWith("data-") || lower.startsWith("aria-")) return lower;
  if (lower.startsWith("on")) {
    // event handlers handled separately
    return null;
  }
  return name; // pass-through (covers id, href, src, type, name, role, viewBox, etc.)
}

function escapeBacktick(s) {
  return s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
}

function jsxText(s) {
  // Escape { and } so JSX doesn't treat them as expressions
  return s.replace(/[{}]/g, (c) => `{'${c}'}`);
}

function jsxAttrValue(v) {
  // Use JSON.stringify to handle quotes safely
  return JSON.stringify(v);
}

function styleStringToObject(css) {
  const decls = css.split(";");
  const pairs = [];
  for (const raw of decls) {
    const decl = raw.trim();
    if (!decl) continue;
    const colon = decl.indexOf(":");
    if (colon < 0) continue;
    let prop = decl.slice(0, colon).trim();
    let val = decl.slice(colon + 1).trim();
    // Strip "!important" — React doesn't support it via object form; convert to value with " !important"
    let important = false;
    if (/!important$/i.test(val)) {
      important = true;
      val = val.replace(/!important$/i, "").trim();
    }
    // camelCase the property unless it's a custom property (--var)
    let key;
    if (prop.startsWith("--")) {
      key = JSON.stringify(prop);
    } else {
      const camel = prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      // Quote keys that contain non-identifier chars (none expected after camelCase, but safe)
      key = /^[a-zA-Z_$][\w$]*$/.test(camel) ? camel : JSON.stringify(camel);
    }
    // For !important, wrap with `(value + " !important")` and use a helper at render
    // Simpler approach: just drop !important — most React renders apply !important via inline styles only with kebab-case keys, which JS objects don't accept. Annotate with comment.
    pairs.push(`${key}: ${JSON.stringify(important ? val + " !important" : val)}`);
  }
  return `{{${pairs.join(", ")}}}`;
}

function rewriteHref(href) {
  if (!href || typeof href !== "string") return href;
  // External links untouched
  if (/^(https?:|mailto:|tel:|#)/i.test(href)) return href;
  // Strip "/" + "index.html" -> "/"
  let h = href;
  h = h.replace(/\/index\.html(\?|#|$)/, "/$1");
  // Strip .html suffix
  h = h.replace(/\.html(\?|#|$)/, "$1");
  // Remove trailing slash on non-root
  if (h.length > 1 && h.endsWith("/") && !h.includes("#") && !h.includes("?")) {
    h = h.slice(0, -1);
  }
  return h;
}

function renderAttrs(attribs, ctx) {
  const parts = [];
  for (const [name, value] of Object.entries(attribs)) {
    const lower = name.toLowerCase();
    if (lower === "style") {
      parts.push(`style=${styleStringToObject(value)}`);
      continue;
    }
    if (lower.startsWith("on") && lower !== "on") {
      // on* event handler — convert to inline function via new Function
      const eventName = "on" + lower.slice(2).charAt(0).toUpperCase() + lower.slice(3);
      const code = value.replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
      parts.push(`${eventName}={(event) => { (new Function('event', \`${code}\`))(event); }}`);
      if (ctx) ctx.hasHandlers = true;
      continue;
    }
    if (lower === "href" || lower === "src" || lower === "action") {
      // Only rewrite href on <a>/link; for src/action keep as-is
      // But here we don't know the tag — caller can opt to skip. We'll rewrite hrefs anyway.
      const rewritten = lower === "href" ? rewriteHref(value) : value;
      const jsx = mapAttr(name);
      if (jsx === null) continue;
      // Boolean-ish: if value is "" and attr is boolean (disabled, checked, etc), output bare
      parts.push(`${jsx}=${jsxAttrValue(rewritten)}`);
      continue;
    }
    const jsx = mapAttr(name);
    if (jsx === null) continue;
    if (value === "" && (
      ["disabled", "checked", "readonly", "required", "selected", "multiple", "autofocus", "hidden", "open", "reversed", "default", "loop", "controls", "muted", "defer", "async", "autoplay", "playsinline", "allowfullscreen", "novalidate"].includes(lower)
    )) {
      parts.push(jsx);
      continue;
    }
    if (NUMERIC_ATTRS.has(jsx) && /^-?\d+$/.test(value)) {
      parts.push(`${jsx}={${value}}`);
      continue;
    }
    parts.push(`${jsx}=${jsxAttrValue(value)}`);
  }
  return parts.length ? " " + parts.join(" ") : "";
}

// Walk the DOM and emit JSX text
function emitJSX(node, ctx, indent = "") {
  if (node.type === "text") {
    return jsxText(node.data);
  }
  if (node.type === "comment") {
    // Strip comments
    return "";
  }
  if (node.type === "tag" || node.type === "script" || node.type === "style") {
    const tag = node.name;

    // <style>/<script> inside body are extracted to ctx, not inlined here
    if (tag === "style") {
      const content = (node.children || [])
        .filter((c) => c.type === "text")
        .map((c) => c.data)
        .join("");
      ctx.styles.push(content);
      return "";
    }
    if (tag === "script") {
      // Only inline scripts (no src) get captured; external scripts are dropped (components.js is replaced)
      if (!node.attribs?.src) {
        const content = (node.children || [])
          .filter((c) => c.type === "text")
          .map((c) => c.data)
          .join("");
        if (content.trim()) ctx.scripts.push(content);
      }
      return "";
    }

    const attribs = node.attribs || {};
    const isVoid = VOID.has(tag);
    const attrStr = renderAttrs(attribs, ctx);

    if (isVoid) {
      return `<${tag}${attrStr} />`;
    }

    const children = (node.children || []).map((c) => emitJSX(c, ctx, indent + "  ")).join("");
    return `<${tag}${attrStr}>${children}</${tag}>`;
  }
  return "";
}

function relPathToRoute(relPath) {
  // foo.html       -> foo
  // index.html     -> ''
  // foo/index.html -> foo
  // foo/bar.html   -> foo/bar
  let route = relPath.replace(/\.html$/, "");
  route = route.replace(/\/index$/, "");
  if (route === "index") route = "";
  return route;
}

function convertOne(htmlPath, relPath) {
  const html = fs.readFileSync(htmlPath, "utf8");
  const $ = load(html, { decodeEntities: false });

  const title = $("title").first().text().trim();
  const description = $('meta[name="description"]').attr("content") || "";

  const ctx = { styles: [], scripts: [], hasHandlers: false };

  // Collect <head> styles
  $("head style").each((_, el) => {
    const content = $(el).contents().toArray()
      .filter((c) => c.type === "text")
      .map((c) => c.data)
      .join("");
    ctx.styles.push(content);
  });

  // Body
  const $body = $("body");
  let bodyJSX = "";
  $body.contents().each((_, child) => {
    bodyJSX += emitJSX(child, ctx);
  });

  const allStyles = ctx.styles.join("\n\n");
  const allScripts = ctx.scripts.join("\n\n");

  // Output file path: src/app/<route>/page.tsx
  const route = relPathToRoute(relPath);
  const outDir = route ? path.join(DEST_DIR, route) : DEST_DIR;
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, "page.tsx");

  const titleEscaped = JSON.stringify(title);
  const descEscaped = JSON.stringify(description);

  const hasScripts = allScripts.trim().length > 0;
  const hasStyles = allStyles.trim().length > 0;
  const needsClient = ctx.hasHandlers;

  // Wrap body JSX in a fragment; emit a stable id for the inline script
  const scriptId = "page-" + (route || "home").replace(/\//g, "-");

  const headerComment = `// AUTO-GENERATED from ${relPath} by scripts/migrate-html.mjs.\n// Hand-edits are fine; re-running the migrator will overwrite this file.`;

  const scriptImport = hasScripts ? `import Script from "next/script";\n` : "";
  const cssConst = hasStyles ? `const PAGE_CSS = \`${escapeBacktick(allStyles)}\`;\n` : "";
  const jsConst = hasScripts ? `const PAGE_JS = \`${escapeBacktick(allScripts)}\`;\n` : "";
  const styleEl = hasStyles ? `      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />\n` : "";
  const scriptEl = hasScripts ? `      <Script id=${JSON.stringify(scriptId)} strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: PAGE_JS }} />\n` : "";

  if (needsClient) {
    // Two-file split: server page.tsx (metadata) + client content component
    const clientName = "PageContent";
    const clientPath = path.join(outDir, "page-content.tsx");
    const clientOut = `"use client";
${headerComment}
${scriptImport}
${cssConst}${jsConst}
export default function ${clientName}() {
  return (
    <>
${styleEl}      ${bodyJSX.trim()}
${scriptEl}    </>
  );
}
`;
    fs.writeFileSync(clientPath, clientOut);

    const serverOut = `${headerComment}
import type { Metadata } from "next";
import PageContent from "./page-content";

export const metadata: Metadata = {
  title: ${titleEscaped},
  description: ${descEscaped},
};

export default function Page() {
  return <PageContent />;
}
`;
    fs.writeFileSync(outPath, serverOut);
  } else {
    const out = `${headerComment}
import type { Metadata } from "next";
${scriptImport}
export const metadata: Metadata = {
  title: ${titleEscaped},
  description: ${descEscaped},
};

${cssConst}${jsConst}
export default function Page() {
  return (
    <>
${styleEl}      ${bodyJSX.trim()}
${scriptEl}    </>
  );
}
`;
    fs.writeFileSync(outPath, out);
  }
  return outPath;
}

// Discover HTML files to convert
function listHtml(dir, base = "") {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith(".")) continue;
    if (entry.name === "assets" || entry.name === "fonts") continue;
    const full = path.join(dir, entry.name);
    const rel = base ? `${base}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      out.push(...listHtml(full, rel));
    } else if (entry.isFile() && entry.name.endsWith(".html")) {
      // Skip old/duplicate index versions and the public-redirect shells
      const skip = new Set([
        "index-v1-stable.html",
        "index-v2.html",
        "index-v3.html",
        "privacy.html",
        "terms.html",
        "app-privacy.html",
      ]);
      if (skip.has(entry.name)) continue;
      // Skip privacy-policy and terms-and-conditions — those are hand-written
      if (rel === "privacy-policy.html" || rel === "terms-and-conditions.html") continue;
      out.push({ full, rel });
    }
  }
  return out;
}

const files = listHtml(SRC_DIR);
console.log(`Converting ${files.length} HTML files from ${SRC_DIR}`);
let okCount = 0;
const errs = [];
for (const { full, rel } of files) {
  try {
    const out = convertOne(full, rel);
    console.log(`  OK  ${rel} -> ${path.relative(PROJECT_ROOT, out)}`);
    okCount++;
  } catch (e) {
    console.error(`  ERR ${rel}: ${e.message}`);
    errs.push({ rel, err: e });
  }
}
console.log(`Done: ${okCount} converted, ${errs.length} errors`);
if (errs.length) process.exit(1);

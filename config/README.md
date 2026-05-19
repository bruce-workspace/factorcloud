# /config — Site-wide configuration

Two JSON files drive the look-and-feel and search/SEO behavior of the entire
site. **Marketing can edit these**, but every change here is high-leverage —
review carefully.

```
config/
├── seo.json            ← meta tags, OG defaults, hreflang, schema.org
└── design-tokens.json  ← brand colors, fonts, spacings ("the brand")
```

---

## seo.json — meta tags, schema.org, hreflang

This file is the **source of truth** for everything that ends up in `<head>`
or in a search result snippet. Edits here change the title, description,
share image, and structured data for every page that doesn't override them.

### Top-level shape

| Key            | Purpose |
| -------------- | ------- |
| `site`         | Global identity (domain, locales, default favicon) |
| `defaults`     | Per-locale fallbacks for title, description, OG image |
| `hreflang`     | Per-locale canonical roots, plus `x-default` |
| `organization` | Schema.org `Organization` JSON-LD (emitted on every page) |
| `robots`       | Global robots directives |
| `verification` | Search Console / Bing tokens |
| `pages`        | Per-page, per-locale overrides for title and description |

### When you edit which key

- **Changed the company name?** → `site.name`, `organization.name`.
- **New default share image?** → `defaults.<locale>.ogImage` (path under `/public/images/`).
- **New page added by engineering?** → add an entry under `pages.<slug>.<locale>`.
- **Going live in a new region (e.g. PT-BR)?** → add a locale to `site.locales`,
  add to `defaults`, add to `hreflang`. **Coordinate with engineering** —
  routes need to exist first.

### What never to touch without engineering

- `site.url` — changing this re-writes every canonical and OG URL.
- `hreflang` keys — must match the locales the app actually serves.
- `organization.@context` / `@type` — schema.org spec, not free-form.

---

## design-tokens.json — the brand

Single source of truth for color, typography, spacing, motion. Code reads these
through `src/lib/tokens.ts` (added in Phase 2). Edits here cascade everywhere.

### Top-level shape

| Group        | What lives here |
| ------------ | --------------- |
| `color`      | Background, brand, text, border, status colors |
| `typography` | Font families, sizes, weights, line-heights, letter-spacing |
| `spacing`    | Container width, nav height, spacing scale |
| `radius`     | Corner radii (small = `2px`, our default look) |
| `shadow`     | Drop shadows |
| `motion`     | Animation durations and easings |
| `breakpoint` | Responsive breakpoints |

### Editing safely

- **Color tweaks (small):** OK to nudge a hex value by a few points.
- **Color renames or restructures:** must coordinate with engineering — code
  consumes these by path (e.g. `color.brand.amber`).
- **New token group:** **don't.** File a ticket; engineering will add it
  alongside the code that needs it.
- **Font family change:** also requires updating font files under
  `/public/images/fonts/` and the `<link>` in `src/app/layout.tsx`.

### Why JSON, not CSS variables

The CSS variables you'll see in pages (e.g. `--amber`) are generated from this
JSON at build time, so design and code stay in lockstep. If you change the
JSON, the CSS variables update automatically — no need to touch CSS.

---

## Questions?

Ping `#marketing-eng` in Slack or open an issue with the `config` label.

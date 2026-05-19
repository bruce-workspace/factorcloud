# /content — Marketing-editable copy

This directory is **the home of all copy** that shows up on the FactorCloud
marketing site. Everything here is plain text (Markdown / MDX / JSON). You can
edit it without touching React, TypeScript, or CSS.

> **Rule of thumb:** if a sentence appears on the public site, it lives here —
> not in `/src/`.

---

## Layout

```
content/
├── pages/                 ← landing-page copy (one file per page, per locale)
│   ├── en/
│   │   ├── home.mdx
│   │   ├── features.mdx
│   │   ├── pricing.mdx
│   │   ├── about.mdx
│   │   ├── integrations.mdx
│   │   ├── contact.mdx
│   │   ├── resources.mdx
│   │   ├── get-demo.mdx
│   │   ├── privacy-policy.mdx
│   │   └── terms-and-conditions.mdx
│   └── es/                ← mirror of /en (same file names, Spanish copy)
│
├── blog/                  ← long-form posts
│   ├── _template.mdx      ← copy this to start a new post
│   ├── en/                ← English posts:  <slug>.mdx
│   └── es/                ← Spanish posts:  <slug>.mdx
│
├── help-center/           ← product docs (same en/es split as blog)
│   ├── en/
│   └── es/
│
├── integrations/          ← per-integration marketing copy (one file per partner)
├── podcasts/              ← episode notes
├── programs-json/         ← partner-program structured data
└── telematics-insurance/  ← vertical landing data
```

---

## What you CAN edit

- **Anywhere in `content/`.** All `.mdx`, `.md`, `.json`, `.yml`, `.yaml`.
- **`/public/images/`** — drop new images, photos, partner logos here.
- **`/config/seo.json`** — site-wide meta tags, OG defaults, hreflang.
- **`/config/design-tokens.json`** — brand colors, fonts, spacings (**ask a dev
  before changing values; visual regressions are easy here**).

## What you CANNOT edit

- **`/src/`** — that's the code. Renames, refactors, anything `.tsx`/`.ts`.
- **`/scripts/`**, **`/.github/`**, **`/Dockerfile`**, **`/package.json`**, etc.
- Frontmatter **keys** (the words before the colon) — only their **values**.
  If a page needs a new field, file a ticket with engineering.

---

## Frontmatter rules

Every page and post starts with a YAML frontmatter block between two `---`
fences. The keys are a contract with the code — **never invent new keys**, only
fill in their values. See `blog/_template.mdx` for the canonical post shape and
`pages/en/home.mdx` for the canonical landing shape.

Common keys you will see everywhere:

| Key            | What it controls                                   |
| -------------- | -------------------------------------------------- |
| `title`        | The H1 / `<title>` (falls back into SEO)           |
| `slug`         | URL path. Don't change after publishing.           |
| `locale`       | `en` or `es`. Must match the folder.               |
| `status`       | `draft` (hidden in prod) or `published`            |
| `date`         | ISO date (`yyyy-mm-dd`)                            |
| `seo.title`    | Override `<title>` only for search results         |
| `seo.description` | The `<meta name="description">`                 |
| `seo.ogImage`  | Path under `/public/images/...`                    |
| `seo.canonical`| Full URL. Use the live domain.                     |
| `seo.robots`   | `{ index: false }` to hide from Google             |

---

## Adding a blog post (the 5-step workflow)

1. `cp content/blog/_template.mdx content/blog/en/my-post.mdx`
2. Fill in the frontmatter. Keep `status: draft` while you work.
3. Drop the cover image into `/public/images/blog/my-post-cover.jpg`.
4. Write the body in Markdown.
5. Flip `status: published`, open a PR, ping a reviewer.

For a Spanish counterpart, repeat under `content/blog/es/` and set
`alternate.es: my-post-es` (and vice versa) so the language switcher links them.

---

## Adding a new landing page

Talk to engineering first — landing pages need a matching route in `/src/`.
The MDX file alone won't make the page exist.

---

## Locales (en / es)

- **English is the default.** URLs without a prefix are English: `/features`.
- **Spanish lives under `/es/`.** URLs are prefixed: `/es/features`.
- Every `pages/en/<file>.mdx` should have a counterpart at `pages/es/<file>.mdx`.
  Out-of-sync content is okay temporarily (mark `status: draft`), but the file
  must exist.

---

## Questions?

Ping `#marketing-eng` in Slack or open an issue with the `content` label.

# FactorCloud Website Redesign — Process Documentation
**Version 1 — March 21, 2026**
**This document is the Rule 1 SaaS design playbook. Every FactorCloud decision is documented here so the next build is faster and better.**

---

## The Goal
Build a mid-market enterprise SaaS site that reads at the level of Linear, Stripe, or Modern Treasury — not a bootstrapped startup. The site must communicate product depth, operational credibility, and design confidence in the first 5 seconds.

---

## Phase 1: Architecture First
**Before any design or code, define the information architecture.**

The live FactorCloud site had everything under "Features" — a flat list of modules with no narrative hierarchy. The first decision was to restructure around product story, not feature inventory.

### IA Decision: "Platform" not "Features"
Old nav: Features (flat list) → Integrations → Pricing → Resources → About

New nav:
```
Platform ▼
  Automation (leads — #1 differentiator)
  Client Management
  Operations
  Client Portal
  BrightBolt OCR
  Open API
Integrations ▼
Pricing
Resources
About ▼
```

**Why:** "Platform" signals depth and ecosystem. "Features" implies a checkbox list. The mega-menu under Platform tells the product story — Automation first because it's the differentiator, everything else flows from it. "Back-End Functionality" was renamed "Operations" because nobody buys software because of its reports pipeline.

**Rule:** The nav is a positioning statement. What you call things in the nav is what the product is. If the nav says "Features," the product feels like a feature set. If the nav says "Platform," the product feels like infrastructure.

---

## Phase 2: Competitive Research (Refero)

### Tool: Refero MCP
Used `refero_search_screens` and `refero_get_screen` to pull design patterns from:
- Ripple (fintech, dark, mega-menu navigation)
- Linear (B2B SaaS pricing)
- B2B fintech platforms generally

### Key Findings from Ripple Research

**Navigation pattern:** Two-column mega-menu. Left column: category label + description. Right column: link groups with bold title + lighter subtitle. Active state = thin 2px underline only (no background fills).

**Color restraint:** Background: deep navy-black. One saturated accent (vivid blue) used in exactly two places: active nav indicator + primary CTA. Nothing else gets the accent color. This scarcity is what makes the blue feel electric.

**Typography hierarchy (four tiers, achieved through opacity/color not size):**
1. Overline — 11px, all-caps, letter-spaced, accent color
2. H1/H2 — Instrument Serif, large, white
3. Card/section title — Geist Bold, 18-20px, white
4. Body — Geist Regular, 14-15px, muted gray

**Negative space rule:** ~40% of any section should be breathing room. Restraint signals confidence.

**What makes it premium:**
- No card borders by default — spatial separation organizes content
- No glassmorphism, no noise textures
- Single CTA per section — hierarchy not competition
- Generous padding (think 2x what feels "enough")

### Design System (derived from research)
```
Background: #000C12
Accent blue: #58BBED (overlines, 94% stat, active states ONLY)
CTA blue: #0070AA (primary buttons ONLY)
White: #FFFFFF
Muted: #8899AA
Card bg: rgba(255,255,255,0.03)
Card border (subtle): rgba(88,187,237,0.10)
Card border (hover): rgba(88,187,237,0.40)
Fonts: Instrument Serif (display) + Geist (body/UI)
```

**Full brief saved at:** `/Users/bruce/.openclaw/workspace/factorcloud/DESIGN-BRIEF.md`

---

## Phase 3: Competitive Intelligence Pass
**Before writing a word of copy, understand what competitors say and don't say.**

Jesse did a full competitive research pass against the three primary competitors and documented it in a comprehensive brief. This is the document that separates generic B2B copy from copy that actually positions.

**Key competitive findings:**

| Competitor | What They Own | What They Can't Say |
|---|---|---|
| FactorFox | "Built by factors, for factors" (exact phrase) | Automated cash application. Dual-ledger. Free migration. |
| WinFactor | Transportation vertical, Credit Alliance data moat | Any other vertical. No dual-ledger. Manual lockbox imports. |
| FactorSoft | Enterprise/banking relationships, ABL depth | No mobile portal. Professional services required. Factoring is a rounding error on Jack Henry's P&L. |

**FactorCloud's three unkillable differentiators:**
1. **Automated Cash Application** — Nobody else automates this. WinFactor does manual lockbox imports. FactorSoft does manual receipt posting. FactorFox doesn't mention it.
2. **Dual-Ledger Accounting** — Every transaction recorded twice, balanced automatically. No competitor leads with this.
3. **Free Migration and Onboarding** — FactorCloud handles everything. WinFactor charges. FactorSoft requires professional services. This is the #1 conversion lever and was invisible on the original site.

**Full rewrite brief saved at:** `/Users/bruce/.openclaw/workspace/factorcloud/REWRITE-BRIEF.md`

---

## Phase 4: Build

### What Was Built (in order)
1. **Homepage v1** — Subagent build from DESIGN-BRIEF.md. Full page structure, design system applied, real dashboard screenshots from FactorCloud assets.
2. **6 Features pages** — features/index.html (overview), automation.html (flagship), tracking.html (renamed to Back-Office Management), back-end.html, client-portal.html, ocr-automation.html
3. **Integrations overview** — Full filterable grid, 14 partners, category filter tabs, Open API section
4. **30+ inner pages** — All integration partner pages, About section, Pricing, Get a Demo, Resources, Contact, legal stubs

### What Was Skipped (and why it matters)
The Stitch scaffold step was skipped in the interest of speed. **This is why some sections feel solid but not electric.** Stitch (GEMINI_3_PRO, MOBILE, inline CSS, no Tailwind) produces a structural scaffold optimized for mobile-first, lightweight HTML. Building without it means the responsive behavior and some micro-interactions aren't as refined.

**Status:** Stitch + Claude UI pass is the next step for sections that need to pop more.

---

## Phase 5: Copy Rewrite
Copy was rewritten from the competitive intelligence brief. Key changes:

- **Killed "Built by factors, for factors"** — FactorFox owns this phrase
- **"Factor More Invoices. Hire Fewer People."** — New headline. Specific outcome, competitive claim, nothing a competitor can credibly say.
- **"Free onboarding" made visible** — Was invisible in original. Now in hero subhead, Step 2 headline, FAQ, footer CTA, and comparison table row.
- **Placeholder company logos removed** — Bolton Capital, Summit Funding Group, etc. were placeholder names. Removed entirely. 94% stat stands alone.
- **Comparison table expanded** — Added Cash Application and Migration Cost rows. Made legacy descriptions specific to actual competitor pain (not generic "Manual, outdated").
- **Q6 added to FAQ** — "What types of factors use FactorCloud?" directly counters WinFactor's transportation-only positioning.

### Copy Rules (enforce on every page)
- No em dashes — ever
- No "Built by factors, for factors"
- No: streamline / modernize / revolutionize / empower / leverage / unlock / cutting-edge
- Use named features: "BrightBolt" not "our OCR tool"
- Use operational language: schedules, reserves, rebates, chargebacks, aging, NFE, funding runs
- Lead with outcomes, not mechanism
- Test every claim: "could a competitor say this?" If yes, it's not specific enough.
- Run all copy through the humanizer before final ship

---

## Phase 6: UI Polish Pass (NEXT — Not Yet Done)

### What Needs It
The homepage has sections that are structurally correct but visually could hit harder. Specifically:
- Hero — the perspective-tilted dashboard card should feel more cinematic
- 94% stat section — should absolutely stop you cold. Is it doing that?
- Comparison table — the two-column card treatment could be more dramatic
- Automation section — the BrightBolt flow visualization could be animated more richly

### How to Run the UI Pass
1. Identify the 2-3 sections that feel flat
2. Run Stitch scaffold on those specific sections (GEMINI_3_PRO, MOBILE, inline CSS)
3. Apply the design system on top
4. Run a humanizer pass on any copy that changed
5. Screenshot QA — full page and mobile
6. Deploy

---

## Assets
- **Logo (white):** `assets/logo-white.png`
- **Logo (black):** `assets/logo-black.png`
- **Dashboard screenshots:** `assets/dash-1.png`, `dash-2.png`, `dash-3.png`
- **Live site screenshots:** `assets/fc-about-live.png`, `fc-integrations-live.png`
- **Chart asset:** `assets/fc-charts.png`

## Staging
- Current staging: https://e53d4175.factorcloud-staging.pages.dev
- Project: `factorcloud-staging` on Cloudflare Pages
- Deploy command: `cd /Users/bruce/.openclaw/workspace/factorcloud && wrangler pages deploy . --project-name factorcloud-staging --commit-dirty=true`

---

## Transferability — The Rule 1 SaaS Playbook

This process works for any Rule 1 portfolio company. The variables that change per company:

| Variable | FactorCloud | Bank Shot (next) | TruckerCloud | ROX |
|---|---|---|---|---|
| Primary differentiator | Dual-ledger + auto cash app | Agentic payments + KYC | 100k+ truck dataset | AI underwriting |
| Competitor weakness to exploit | No free migration, no cash app automation | Crypto-only alternatives | No real telematics depth | Manual underwriting, slow |
| IA anchor | Platform (Automation leads) | Infrastructure (Payments leads) | Data (Coverage leads) | Intelligence (Automation leads) |
| Social proof type | 94% demo close rate | Insurance PMF (Allstate) | 100k trucks | Credit decision speed |
| Audience | Factoring company operators | Insurance companies, AI agent builders | Fleet operators, factors | Lenders, factors |

**The research phase (Refero + competitive) is non-negotiable.** Everything downstream of that is execution.

---

## Tool Added: interface-design skill (March 21, 2026)

**Source:** https://github.com/Dammyjay93/interface-design
**Installed at:** ~/.openclaw/workspace/skills/interface-design/

**What it does:** Principle-based design craft for dashboards, admin panels, SaaS apps, and interactive product UIs. Saves decisions to a system.md that persists across sessions — spacing grid, surface elevation, border treatment, component patterns. Eliminates drift (buttons at 36px one session, 38px the next).

**When to use:** Any time building product UI — dashboard mockups, client portal screens, the inline data visualizations on the FactorCloud site (GL journal, client card, BrightBolt flow), and eventually the actual FactorCloud app UI itself.

**When NOT to use:** Landing pages, marketing sites (use frontend-design skill for those).

**Updated process order:**
1. Competitive research (Refero) — understand the space
2. Choose to break from it intentionally
3. Architecture/IA first
4. Marketing site: frontend-design skill (full creative latitude)
5. Product UI/dashboards: interface-design skill (craft + consistency)
6. Copy: competitive brief → voice pass → humanizer
7. Animation: narrative-first ("what just happened?"), not decorative
8. QA: screenshot, mobile, in-app browser
9. Deploy

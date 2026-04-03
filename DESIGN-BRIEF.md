# FactorCloud Website Redesign — Design Brief
**Version 1 — March 21, 2026**
**Research-informed. Build-ready.**

---

## The Goal
Transform a structurally solid draft into a design that reads as mid-market enterprise SaaS — not a bootstrapped startup. The bar: Linear, Stripe, Modern Treasury, Ripple. Premium B2B with the budget to mean it.

---

## What We're Fixing
1. **IA is confusing.** "Features" is a catch-all that includes back-office ops, which isn't a feature.
2. **Design lacks restraint.** Too many cards, too many borders, too many things competing.
3. **Copy feels AI.** Em dashes, hedging phrases, bullet overload, no voice.
4. **Navigation doesn't tell the product story.** You can't understand what FactorCloud *is* from the nav.
5. **No visual hierarchy.** Everything is the same visual weight.

---

## Information Architecture

### New Nav Structure
```
Platform ▼
  Automation
  Client Management
  Operations
  Client Portal
  BrightBolt OCR
  Open API

Integrations ▼
  [14 partners, by category]

Pricing
Resources ▼
  Blog
  About ▼
    Our Story
    Team
    Values
    Security
```

### Why "Platform" not "Features"
- "Platform" signals depth, ecosystem, infrastructure
- "Features" implies a checkbox list
- Mega-menu under Platform tells the story: Automation first (differentiator), then management, then ops, then client-facing, then developer tools

### Automation Leads Everything
Automation is the #1 differentiator. It should be first in nav, first on the Platform overview page, and the thing any newcomer encounters first. Everything else is table stakes.

---

## Design System

### Palette (unchanged from existing)
- **Background:** #000C12 (deep navy-black)
- **Accent blue:** #58BBED (headlines, numbers, accents — use sparingly)
- **CTA blue:** #0070AA (primary buttons only)
- **White:** #FFFFFF
- **Muted:** #8899AA (secondary text)
- **Surface:** rgba(255,255,255,0.03) — for card backgrounds when needed
- **Border (subtle):** rgba(88,187,237,0.10) — sparingly
- **Border (active):** rgba(88,187,237,0.40) — hover/focus states

### Typography
- **Display/H1:** Instrument Serif — large (72-96px desktop), tight tracking (-0.03em)
- **H2:** Instrument Serif — 48-64px
- **H3:** Geist Bold — 20-24px
- **Body:** Geist Regular — 15-16px, line-height 1.7
- **Overline:** Geist SemiBold — 11px, all-caps, letter-spacing 0.12em, #58BBED

### Four-Tier Type Hierarchy (from Ripple research)
1. Overline: 11px, caps, spaced, #58BBED
2. Section heading: Instrument Serif, 48px+, white
3. Card/feature title: Geist Bold, 18-20px, white
4. Supporting text: Geist Regular, 14-15px, #8899AA

Achieve hierarchy through **opacity and color, not size jumps**. Resist going larger when in doubt — tighten the spacing and color contrast instead.

### Restraint Rules (learned from Ripple)
- **One saturated accent.** #58BBED appears in: overlines, the "94%" stat, active nav states, and icon accents. Nowhere else except intentionally.
- **No card borders by default.** Use spatial separation to group content. Add subtle borders only when cards need hard edges (e.g., partner grid).
- **No glassmorphism, no noise textures, no gradients on text** (except the hero headline).
- **Negative space is design.** 40% of sections should feel like breathing room.
- **Single CTA per section.** Never two equal-weight CTAs. Hierarchy: primary (filled) + ghost (optional).

### Cards
- When cards are needed: `background: rgba(255,255,255,0.03)`, `border: 1px solid rgba(88,187,237,0.10)`
- Hover: `border-color: rgba(88,187,237,0.40)`, `box-shadow: 0 0 24px rgba(88,187,237,0.08)`
- No shadow by default — only on hover

### Motion
- Subtle scroll-based reveals: `opacity: 0 → 1`, `translateY: 20px → 0`, 600ms ease
- Hero content: `opacity: 1 !important`, no delays (iOS Safari fix)
- 800ms setTimeout fallback on all `.reveal` elements
- One well-orchestrated page load sequence — not scattered micro-interactions

---

## Page-by-Page Direction

### Homepage (index.html)
**Hero:**
- Overline: "The Factoring Platform Built by Factors"
- H1 (Instrument Serif, ~88px): "Factoring Software" in #58BBED + "That Does the Work for You" in white
- Subhead: "Dual-ledger precision. Automated cash application. Built by a factor who processed 60,000 invoices a month and knew the software wasn't keeping up."
- CTAs: "Get a Demo" (filled, #0070AA) + "See How It Works" (ghost)
- Background: #000C12 with subtle CSS-only animated grid
- Right side: real dashboard screenshot (dash-1.png) in a floating card with blue border glow

**94% Stat Section** (full-width, dark break):
- "94%" in Instrument Serif at 140px+, #58BBED
- "of teams that see FactorCloud make the switch."
- Below: 5 company name badges

**Platform Overview (zigzag sections, 4-5):**
- Each feature gets a two-column section: copy left/right alternating, visual right/left
- Visuals: HTML mockup cards, not images (except dashboard screenshots)
- Each has an anchor link to the full Platform subpage

**Integration Strip:**
- "20+ Integrations Built In" — logo grid (text-based, no images needed)
- Link to /integrations/

**Comparison Table:**
- Dark cards, not an HTML table
- Legacy: red-tinted (#E05050 at 8% opacity)
- FactorCloud: green-tinted (#2ECC9A at 8% opacity)
- Rows: Funding Process, Accounting, Integrations, Client Portal, Interface, Support

**Demo CTA (bottom):**
- Dark full-width section
- No noise, no gradient — just dark and clean
- Single CTA: "Schedule a Demo"

---

### Platform Overview (features/index.html)
6 module cards in a 2x3 grid. Each card:
- Overline (category)
- Title
- One sentence
- "Explore →" link
- Icon (SVG only, no emoji)
- Hover: border glow, card lifts 4px

---

### Automation (features/automation.html) — FLAGSHIP
3 full two-column sections (not cards). Each section:
- 60/40 split — copy side gets more room than visual
- Real product mockup on visual side (HTML, not image)
- Headline asks a question or makes a provocative claim
- Copy leads with the business outcome, then explains the mechanism

---

### Copy Rules (enforce everywhere)
- No em dashes — ever
- No "It's not X, it's Y" constructions
- No passive voice openers
- Lead with outcome, not mechanism
- Maximum 3 bullets per card
- Short paragraphs — 2-3 sentences max in cards
- Instrument Serif for emotional/narrative moments; Geist for technical/functional copy
- Run through humanizer before any copy ships

---

## Build Process

1. **Refero pass** ✅ (done — Ripple, Linear, B2B fintech patterns extracted)
2. **Stitch scaffold** — GEMINI_3_PRO, MOBILE, inline CSS, no Tailwind
3. **Design system applied** — implement the restraint rules above
4. **Humanizer pass** — on all copy, before deploy
5. **Screenshot QA** — full-page screenshot, check on mobile, check in Telegram in-app browser
6. **Deploy + verify** — Cloudflare Pages staging

## Reference
- Staging: https://c08f9d7b.factorcloud-staging.pages.dev
- Assets: /Users/bruce/.openclaw/workspace/factorcloud/assets/
- Existing pages: /Users/bruce/.openclaw/workspace/factorcloud/
- Logo (white): assets/logo-white.png
- Dashboard shots: assets/dash-1.png, dash-2.png, dash-3.png

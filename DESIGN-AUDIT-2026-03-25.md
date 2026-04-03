# FactorCloud Design Audit — 2026-03-25

## Summary
Design system is well-established (v3-design-system.md is solid). Two systemic issues found across the site, plus a few polish opportunities.

---

## 🔴 Issues — Fix Before Next Deploy

### 1. Em dashes across all pages (23 on homepage alone)
Per our design standards — no em dashes in visible copy. Fleet-wide.

Worst offenders:
- index.html: 23 instances
- index-v3.html: 13
- features/client-portal.html: 5
- features/index.html: 5
- about/index.html: 3

**Fix:** Run em dash sweep across all pages. Same rule as GTMDot — split into two sentences with a period, or use a comma.

### 2. Arbitrary spacing values (6px, 9px, 10px, 13px, 14px)
The design system specifies 4px base unit with valid values: 4, 8, 12, 16, 24, 32, 48, 64px. Several inline styles and utility classes use off-scale values.

**Fix:** Audit CSS for margin/padding values not on the scale. Replace with nearest valid value.

---

## 🟡 Polish Opportunities

### 3. Font consistency — IBM Plex stack is correct
DM Serif Display + IBM Plex Sans + IBM Plex Mono is well-applied. No rogue fonts found. ✅

### 4. Color tokens — well-defined
CSS custom properties are defined and used consistently. No hardcoded rogue hex values found outside the design system. ✅

### 5. Border radius consistency
Multiple values in use (4px, 6px, 8px, 12px). The design system doesn't explicitly define a single radius. Recommend picking one (8px) and applying consistently across cards, buttons, inputs.

### 6. Animation/motion
No motion design currently. The design-motion-principles skill could add meaningful hover states and micro-interactions that match the premium FactorCloud aesthetic — subtle, not flashy.

---

## ✅ What's Working Well
- Color system: amber on near-black is distinctive and ownable
- Typography: DM Serif Display headlines create premium feel appropriate for fintech
- Component structure: nav, footer, section patterns are consistent
- No rogue fonts, no blue (#58BBED cleaned out)
- CSS variables properly defined and referenced

---

## Recommended Action Order
1. **Em dash sweep** — all pages, quick automated fix
2. **Spacing audit** — standardize to 4px scale
3. **Border radius** — pick 8px, apply everywhere
4. **Hover states** — add to nav links, buttons, cards (design-motion-principles skill)

Em dash sweep can be done in 15 minutes. Everything else is polish, not urgent.

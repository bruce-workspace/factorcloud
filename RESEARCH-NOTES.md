# FactorCloud Homepage — Research Notes

## Design Brief

Building a B2B SaaS dark landing page for FactorCloud — a factoring software platform "built by factors, for factors."

**Job:** Convince factoring company operators that FactorCloud is the modern, trusted platform to replace legacy software.
**Main objection:** "Why switch? Our current system works."
**Hook:** "Software that does the work *for* you" — automation angle
**They should remember:** 94% switch rate + dual-ledger precision + automated cash application

---

## Research Findings

### Search 1: B2B SaaS Dark Hero Landing Pages

**Linear (screen_id 128354)**
- True dark (#000000) background, white text, clean nav
- Hero: large bold headline + product screenshot angled/skewed behind CTA
- Logo wall: "Powering the world's best product teams" — specific claim, not generic
- CTA: "Start building" — verb-forward, action-oriented
- No colored gradients — pure black + white with subtle gray accents
- **Key steal:** Product screenshot as hero visual is more credible than illustrations

**Doppler (screen_id 74199)**
- Deep black/purple backgrounds with neon green (#35ff7f) accent CTAs
- Tab nav inside hero for feature exploration (Manage / Govern / Develop etc.)
- Hero has animated screenshot with blurred UI card
- Client logos on purple gradient section
- **Key steal:** Segmented tab treatment for features exploration; bright accent for CTA vs dark for secondary

**RevenueCat (screen_id 2283)**
- Mostly white with dark sections for contrast
- Bold sans-serif headlines (38-48px, weight 700), generous vertical spacing (64px between sections)
- Timeline diagram for subscription lifecycle — dotted lines connecting events
- "For Product Teams" badge label above hero headline
- **Key steal:** Small ALL CAPS badge/label above hero headline to frame audience

### Search 2: Enterprise Software Comparison Table Dark Mode

**Play (screen_id 65163)**
- Black (#000000) background, dark grey (#1a1a1a) card containers
- Multi-column pricing/comparison table with colored plan highlights
- Feature comparison uses green checkmarks (#32d97a) for available, grey cross for unavailable
- Each plan column has distinct button style
- **Key steal:** Color-code columns for instant visual differentiation (legacy vs modern)

**Linear billing (screen_id 128966)**
- Dark mode settings/billing page — four columns, subtle card borders
- Clean feature checklist with horizontal rows and dividers
- Toggle between billing intervals
- **Key steal:** Subtle dividing lines and column headers make dense tables scannable

**Scale AI (screen_id 4651)**
- Two-column comparison table with black card backgrounds and white text
- Monospace font for code/data areas
- Subtle borders on cards, minimal visual noise
- **Key steal:** Dark cards with border give comparison table "premium" vs cluttered HTML table look

### Search 3: Fintech Feature Cards Bento Grid Dark

Results were less targeted (Savee, Threads modals) — pivoted to look at ROX (screen_id 163547)

**ROX (screen_id 163547)**
- Clean minimal enterprise interface using Geist font (same as our design system!)
- Three-column layout: nav rail + main content + right detail panel
- Step indicators with circular markers + connecting vertical line = good for switching timeline
- Empty state with subtle dotted pattern illustration
- **Key steal:** Circular step markers + thin vertical connecting line for the switching timeline section

**Resend.com (screen_id 162216)**
- Dark mode SaaS with step indicators and gradient animations
- **Key steal:** Step indicator styling for onboarding/switching flows

### Search 4: SaaS Switching Steps Timeline Dark

**ManyChat (screen_id 161586)**
- Timeline/sequence editor with vertical connector lines between steps
- "After X day" labeling pattern — clear temporal sequencing
- Cards within timeline have consistent padding and subtle shadows
- **Key steal:** Numbered step + connector line + description text card = clear visual hierarchy

---

## Pattern Synthesis

### Layout Patterns (What the Best Do)
1. **Nav:** Logo left, links center, CTA right — pill/rounded button for CTA
2. **Hero:** Full-width dark, large display text, product screenshot as visual (not illustration)
3. **Logo wall:** Named section heading ("94% switch to FactorCloud") + muted company names
4. **Feature zigzag:** 2-col, alternating text+visual, consistent section spacing (~80-96px)
5. **Comparison table:** NOT a standard HTML table — styled dark cards, color-coded columns, icon checkmarks

### Visual Craft Decisions
- **Background:** #000C12 (spec) — darker than typical #000, navy undertone = more premium than pure black
- **Typography:** Instrument Serif for display (H1, section headlines), Geist for all UI/body
- **Letter spacing:** -0.02em on H1/display, +0.02em on ALL CAPS labels, 0 on body
- **Accent:** #58BBED (bright sky blue — credible, not aggressive)
- **CTA:** #0070AA (deeper blue — trustworthy, enterprise)
- **Cards:** Background #071520 with 1px border #1a3a4a — subtle depth without harsh borders

### Steal List (Tactics to Implement)
| Source | What | Why It Works | How I'll Use It |
|--------|------|--------------|-----------------|
| Linear | Product screenshot as hero visual | More credible than illustration | Build fake dashboard UI card in HTML |
| RevenueCat | ALL CAPS small badge above headline | Frames the audience/product | "FACTORING PLATFORM" above hero H1 |
| Play | Color-coded comparison columns | Instant visual hierarchy | Red/salmon for Legacy, green-teal for FactorCloud |
| ROX | Circular step markers + vertical line | Timeline readability | Switching steps section |
| Doppler | Bright accent CTA vs dark nav | CTA clarity | #0070AA button vs transparent secondary |
| Linear | Logo wall with specific stat headline | Credibility, not generic | "94% of teams that see FactorCloud make the switch" |

### Anti-Patterns to Avoid
- ❌ No purple/indigo (per brief and anti-AI-slop guidance)
- ❌ No blob/wave backgrounds — use subtle linear gradients or solid dark
- ❌ No stock illustrations — build real-looking HTML UI mockup for hero
- ❌ No generic "lorem ipsum" copy
- ❌ No standard HTML tables for comparison — visually styled cards

---

## Unique Soul Elements for FactorCloud
1. **"Built by factors, for factors"** — industry insider credibility, put in nav or hero subtext
2. **Dual-ledger = precision** — visualize in feature section with simple accounting ledger motif
3. **BrightBolt** — named product feature = authenticity signal
4. **94% switch stat** — make this a HUGE number, dominant in social proof section
5. **"Days not weeks, not months"** — specific time claim in switching section

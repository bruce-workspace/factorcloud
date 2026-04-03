#!/usr/bin/env python3
"""
FactorCloud messaging pass — automated replacements across all HTML files.
Skips: HTML comments, CSS class names, JS variable names, href/src attributes.
"""

import os, re, glob

FACTORCLOUD = '/Users/bruce/.openclaw/workspace/factorcloud'

# ── Collect all HTML files (excluding stable/archive versions) ──────────────
all_html = glob.glob(FACTORCLOUD + '/**/*.html', recursive=True)
# We apply to index.html but not the v1/v2/v3 archive files
SKIP_FILES = {
    os.path.join(FACTORCLOUD, 'index-v1-stable.html'),
    os.path.join(FACTORCLOUD, 'index-v2.html'),
    os.path.join(FACTORCLOUD, 'index-v3.html'),
}
target_files = [f for f in all_html if f not in SKIP_FILES]

# ── Replacement map (order matters — more specific first) ────────────────────
# Each tuple: (exact_old, exact_new) applied via simple str.replace
# These are all visible-text only; the script below skips comment/class lines.

SIMPLE_REPLACEMENTS = [
    # ── Meta descriptions / titles ──
    ('FactorCloud — Factoring Software Built by Factors',
     'FactorCloud — Factoring Software for Modern Operators'),

    ('FactorCloud is the factoring platform built by factors who knew what was missing.',
     'Dual-ledger precision, automated cash application, and 20+ integrations. The factoring platform operators built when they got tired of software holding them back.'),

    # meta description on our-story
    ('Founded by a factor processing 60K+ invoices/month. Built FactorCloud in 2014. Saw 80% more NFE without growing workforce. Built by factors, for factors.',
     'FactorCloud was built by a team of operators who knew what modern factoring software should do. Dual-ledger precision, automated cash application, 80% NFE growth without adding headcount.'),

    # features/index meta
    ('FactorCloud combines automation, back-office management, and a client-facing portal into one platform built by factors who knew what was missing.',
     'FactorCloud combines automation, back-office management, and a client-facing portal into one platform — built by a team that processed 60,000 invoices a month and needed software that could keep up.'),

    # automation.html meta
    ("FactorCloud's automation engine handles terms, schedules, and credit checks automatically. BrightBolt does the work so your team doesn't have to.",
     "FactorCloud's automation engine handles terms, schedules, and credit checks automatically. AI-powered OCR does the work so your team doesn't have to."),

    # ocr-automation.html title + meta
    ('BrightBolt OCR Automation — FactorCloud Factoring Software',
     'AI-Powered OCR Automation — FactorCloud Factoring Software'),

    ('BrightBolt reads emailed invoice attachments and creates funding schedules automatically. No manual entry. No exceptions queue. Documents in, schedules out.',
     'FactorCloud reads emailed invoice attachments and creates funding schedules automatically. No manual entry. No exceptions queue. Documents in, schedules out.'),

    # integrations/brightbolt.html title + meta (this page is about the internal engine — rename)
    ('BrightBolt Integration — FactorCloud',
     'AI-Powered OCR — FactorCloud'),

    # ── Hero prop / feature list ──
    ('BrightBolt automates schedule creation. Cash applies itself.',
     'Schedule creation runs automatically. Cash applies itself.'),

    # ── Mockup bar title ──
    ('Schedule Creation — BrightBolt Automation',
     'Schedule Creation — AI Automation'),

    # ── Flow step node title ──
    ('BrightBolt Processing',
     'AI Processing'),

    # ── Footnote under mockup ──
    ('BrightBolt saves thousands of hours annually across the factors running on FactorCloud.',
     'Auto schedule creation saves thousands of hours annually across factors running on FactorCloud.'),

    # ── Nav dropdown / footer link label ──
    ('>BrightBolt OCR<',
     '>AI-Powered OCR<'),

    # ── Comparison table ──
    ('Automated via BrightBolt',
     'Automated — AI-powered'),

    # ── Integration pill name in index.html ──
    # (This pill is in the integrations section — replace its display name only)
    # Can't do this as pure str.replace safely without hitting the link; skip to manual below.

    # ── Footer tagline (all pages) ──
    ('The factoring platform built by factors who knew what was missing.',
     'Dual-ledger precision, automated cash application, 20+ integrations. Built for factors who needed software that could keep up.'),

    # ── features/back-end.html inline ──
    ('Built by factors who knew what they needed to see.',
     'Built around what factors actually need to see.'),

    # ── client-portal.html: BrightBolt reference ──
    ('Clients drop invoices into the portal and they flow directly into BrightBolt for processing.',
     'Clients drop invoices into the portal and they flow directly into automated processing.'),

    # ── automation.html body references ──
    ('BrightBolt extracts invoice data',
     'AI extracts invoice data'),

    ('BrightBolt reads your emailed invoice attachments, extracts the data, and creates funding schedules without anyone touching a keyboard. Multiple payout methods -- ACH, EFS, and more -- handled in the same flow.',
     'FactorCloud reads your emailed invoice attachments, extracts the data, and creates funding schedules without anyone touching a keyboard. Multiple payout methods -- ACH, EFS, and more -- handled in the same flow.'),

    ('Watch BrightBolt process invoices live. No slides, no script.',
     'Watch AI-powered invoice processing live. No slides, no script.'),

    # ── ocr-automation.html body ──
    ('Your team used to open every email, pull out the attachments, key in the data, and create the schedule by hand. BrightBolt does all of that. Every time. Without being asked twice.',
     'Your team used to open every email, pull out the attachments, key in the data, and create the schedule by hand. FactorCloud does all of that. Every time. Without being asked twice.'),

    ('The average factor processes <span style="color:var(--amber);">hundreds of invoices per week</span>. BrightBolt eliminates the data entry for every single one.',
     'The average factor processes <span style="color:var(--amber);">hundreds of invoices per week</span>. FactorCloud eliminates the data entry for every single one.'),

    ('BrightBolt is built into every FactorCloud plan. No add-ons required.',
     'AI-powered OCR is built into every FactorCloud plan. No add-ons required.'),

    # ── integrations/brightbolt.html page body (this is the dedicated BrightBolt page) ──
    # The h1, intro, card — rename to describe the feature plainly
    ('<h1 style="opacity:1 !important;">BrightBolt</h1>',
     '<h1 style="opacity:1 !important;">AI-Powered OCR</h1>'),

    ('BrightBolt is FactorCloud\'s native OCR and automation engine. It reads emailed invoice attachments, extracts all relevant data, and creates complete funding schedules automatically. No configuration needed -- it\'s built into every plan.',
     'FactorCloud\'s native OCR and automation engine reads emailed invoice attachments, extracts all relevant data, and creates complete funding schedules automatically. No configuration needed -- it\'s built into every plan.'),

    # Card inside brightbolt.html
    ('<div style="font-family:\'DM Serif Display\',Georgia,serif;font-size:32px;font-weight:400;margin-bottom:12px;color:var(--white);">BrightBolt</div>',
     '<div style="font-family:\'DM Serif Display\',Georgia,serif;font-size:32px;font-weight:400;margin-bottom:12px;color:var(--white);">AI-Powered OCR</div>'),

    ('<h2>BrightBolt + FactorCloud</h2>',
     '<h2>AI OCR + FactorCloud</h2>'),

    ('See how the BrightBolt integration works in a live FactorCloud demo.',
     'See how AI-powered invoice processing works in a live FactorCloud demo.'),

    # ── pricing.html feature list item ──
    ('BrightBolt OCR automation',
     'AI-powered OCR automation'),

    # ── FAQ / what-makes-us-different (index.html) ──
    ('We built this because we ran a factor processing 60,000 invoices a month and the existing software couldn\'t keep up.',
     'FactorCloud was built by a team of operators who processed 60,000 invoices a month and the existing software couldn\'t keep up.'),

    # ── our-story.html: founder → the team ──
    ('Our founders were running a factoring operation processing more than 60,000 invoices a month.',
     'The team behind FactorCloud was running a factoring operation processing more than 60,000 invoices a month.'),

    ('The automation layer -- what would later become BrightBolt -- eliminated manual data entry almost entirely.',
     'The automation layer eliminated manual data entry almost entirely.'),

    ('FactorCloud is now the most complete factoring platform on the market -- with BrightBolt OCR, 20+ integrations, a full dual-ledger accounting engine, white-labeled client portals, and an open API.',
     'FactorCloud is now the most complete factoring platform on the market -- with AI-powered OCR, 20+ integrations, a full dual-ledger accounting engine, white-labeled client portals, and an open API.'),

    # our-story pullquote + cite
    ('"We built FactorCloud because we were factors who needed better software. We knew what the job actually required. That knowledge is baked into every feature, every workflow, every decision we make about the platform."',
     '"We knew what the job actually required. That knowledge is baked into every feature, every workflow, every decision we make about the platform."'),

    ('-- FactorCloud Founding Team',
     '-- FactorCloud Leadership Team'),

    # ── Comparison table header (index.html) ──
    ('Built by factors',
     'Operators\' choice'),

    # ── Hero overline (if present) ──
    # 'Built by operators' is fine — keep as is (not founder language)
]

def apply_replacements(content, replacements):
    for old, new in replacements:
        content = content.replace(old, new)
    return content

changed_files = []
unchanged_files = []

for filepath in sorted(target_files):
    with open(filepath, 'r', encoding='utf-8') as f:
        original = f.read()
    updated = apply_replacements(original, SIMPLE_REPLACEMENTS)
    if updated != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(updated)
        changed_files.append(os.path.relpath(filepath, FACTORCLOUD))
    else:
        unchanged_files.append(os.path.relpath(filepath, FACTORCLOUD))

print(f"\n✅ CHANGED ({len(changed_files)} files):")
for f in changed_files:
    print(f"   {f}")

print(f"\n─ UNCHANGED ({len(unchanged_files)} files):")
for f in unchanged_files:
    print(f"   {f}")

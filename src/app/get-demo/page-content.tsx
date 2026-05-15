"use client";
// AUTO-GENERATED from get-demo.html by scripts/migrate-html.mjs.
// Hand-edits are fine; re-running the migrator will overwrite this file.
import Script from "next/script";

const PAGE_CSS = `
    html, body { overflow-x: hidden; }
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --bg:#0A0A08; --bg-2:#050504; --bg-3:#111109; --bg-4:#161512; --bg-5:#1C1B17;
      --amber:#D4A843; --amber-dim:rgba(212,168,67,0.15); --amber-faint:rgba(212,168,67,0.06);
      --white:#FFFFFF; --gray-1:#E8E0D0; --gray-2:#A89880; --gray-3:#5C5448;
      --border:rgba(212,168,67,0.12); --border-dim:rgba(212,168,67,0.07);
      --green:#27AE60; --red:#C0392B;
    }
    html { scroll-behavior: smooth; }
    body { background:var(--bg); color:var(--white); font-family:'Inter',-apple-system,BlinkMacSystemFont,sans-serif; font-size:15px; line-height:1.7; -webkit-font-smoothing:antialiased; overflow-x:hidden; }
    .serif { font-family:'Syne', sans-serif; }
    .mono  { font-family:'JetBrains Mono', monospace; }
    .overline { font-family:'JetBrains Mono', monospace; font-size:10px; font-weight:500; letter-spacing:0.14em; text-transform:uppercase; color:var(--amber); display:block; margin-bottom:16px; }
    h1,h2,h3 { font-weight:400; }
    h1 { font-family:'Syne', sans-serif; }
    h2 { font-family:'Syne', sans-serif; font-weight:700; font-size:clamp(34px,4vw,50px); letter-spacing:-0.01em; line-height:1.1; color:var(--white); }
    h3 { font-size:17px; font-weight:600; font-family:'Inter', sans-serif; line-height:1.35; }
    p  { color:var(--gray-2); line-height:1.75; }
    .container { max-width:1360px; margin:0 auto; padding:0 24px; }
    .container-sm { max-width:760px; margin:0 auto; padding:0 24px; }
    hr { border:none; border-top:0.5px solid var(--border); }
    a { text-decoration:none; }

    /* BUTTONS */
    .btn-primary {
      display:inline-flex; align-items:center; justify-content:center;
      background:var(--amber); color:#0A0A08;
      font-family:'Syne', sans-serif; font-size:14px; font-weight:700;
      letter-spacing:0.06em; text-transform:uppercase;
      padding:11px 22px; border-radius:2px; text-decoration:none;
      border:none; cursor:pointer; transition:background 0.2s,transform 0.15s; white-space:nowrap;
    }
    .btn-primary:hover { background:#C49A35; transform:translateY(-1px); }
    .btn-ghost {
      display:inline-flex; align-items:center; justify-content:center;
      background:transparent; color:var(--gray-1);
      font-family:'Syne', sans-serif; font-size:14px; font-weight:700;
      letter-spacing:0.06em; text-transform:uppercase;
      padding:11px 22px; border-radius:2px; text-decoration:none;
      border:1px solid var(--border); transition:border-color 0.2s,color 0.2s,transform 0.15s; white-space:nowrap;
    }
    .btn-ghost:hover { border-color:rgba(212,168,67,0.4); color:var(--amber); transform:translateY(-1px); }

    /* NAV */
    .nav { position:fixed; top:0; left:0; right:0; z-index:1000; height:64px; display:flex; align-items:center; border-bottom:0.5px solid transparent; transition:background 0.3s,border-color 0.3s; }
    .nav.scrolled { background:rgba(10,10,8,0.94); border-color:rgba(212,168,67,0.15); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px); }
    .nav-inner { display:flex; align-items:center; justify-content:space-between; width:100%; max-width:1360px; margin:0 auto; padding:0 24px; }
    .nav-logo img { height:30px; display:block; }
    .nav-links { display:flex; align-items:center; gap:4px; list-style:none; }
    .nav-links > li { position:relative; }
    .nav-links > li > a { display:flex; align-items:center; gap:4px; font-family:'JetBrains Mono', monospace; font-size:11px; font-weight:500; letter-spacing:0.06em; text-transform:uppercase; color:var(--gray-2); text-decoration:none; padding:8px 12px; border-radius:2px; transition:color 0.15s,background 0.15s; }
    .nav-links > li > a:hover { color:var(--white); background:rgba(212,168,67,0.04); }
    .nav-links > li > a .chevron { width:10px; height:10px; stroke:currentColor; fill:none; stroke-width:2; stroke-linecap:round; stroke-linejoin:round; transition:transform 0.2s; }
    .nav-links > li.open > a .chevron { transform:rotate(180deg); }
    .nav-dropdown { position:absolute; top:calc(100% + 8px); left:0; background:var(--bg-3); border:0.5px solid var(--border); border-radius:2px; padding:8px; min-width:220px; opacity:0; pointer-events:none; transform:translateY(-6px); transition:opacity 0.15s,transform 0.15s; box-shadow:0 24px 48px rgba(0,0,0,0.7); }
    .nav-links > li.open .nav-dropdown { opacity:1; pointer-events:auto; transform:translateY(0); }
    .nav-dropdown a { display:flex; align-items:center; gap:10px; font-family:'JetBrains Mono', monospace; font-size:11px; font-weight:400; letter-spacing:0.04em; color:var(--gray-2); text-decoration:none; padding:9px 12px; border-radius:2px; transition:background 0.12s,color 0.12s; }
    .nav-dropdown a:hover { background:rgba(212,168,67,0.06); color:var(--white); }
    .nav-dropdown a .dd-icon { width:26px; height:26px; background:var(--amber-faint); border:0.5px solid var(--border-dim); border-radius:2px; display:flex; align-items:center; justify-content:center; flex-shrink:0; font-size:12px; }
    .nav-right { display:flex; align-items:center; gap:16px; }
    .nav-demo { font-size:11px; padding:9px 20px; }
    .nav-hamburger { display:none; flex-direction:column; gap:5px; cursor:pointer; padding:4px; background:none; border:none; }
    .nav-hamburger span { width:22px; height:1.5px; background:var(--gray-2); border-radius:0; transition:transform 0.25s,opacity 0.25s; }
    .nav-hamburger.open span:nth-child(1) { transform:rotate(45deg) translate(4px,7px); }
    .nav-hamburger.open span:nth-child(2) { opacity:0; }
    .nav-hamburger.open span:nth-child(3) { transform:rotate(-45deg) translate(4px,-7px); }
    .mobile-nav { display:none; position:fixed; top:64px; left:0; right:0; bottom:0; background:var(--bg); padding:24px 32px 48px; overflow-y:auto; z-index:999; border-top:0.5px solid var(--border); }
    .mobile-nav.open { display:block; }
    .mobile-nav-section { margin-bottom:8px; }
    .mobile-nav-toggle { display:flex; justify-content:space-between; align-items:center; font-family:'JetBrains Mono', monospace; font-size:11px; font-weight:600; letter-spacing:0.08em; text-transform:uppercase; color:var(--gray-2); padding:14px 0; border-bottom:0.5px solid var(--border-dim); cursor:pointer; background:none; border:none; width:100%; text-align:left; }
    .mobile-nav-toggle .chevron { transition:transform 0.2s; stroke:var(--gray-3); fill:none; stroke-width:2; }
    .mobile-nav-toggle.open .chevron { transform:rotate(180deg); }
    .mobile-nav-sub { display:none; padding:8px 0; }
    .mobile-nav-sub.open { display:block; }
    .mobile-nav-sub a { display:block; font-family:'JetBrains Mono', monospace; font-size:11px; color:var(--gray-2); text-decoration:none; padding:9px 0; border-bottom:0.5px solid var(--border-dim); }
    .mobile-nav-link { display:block; font-family:'JetBrains Mono', monospace; font-size:11px; font-weight:600; letter-spacing:0.08em; text-transform:uppercase; color:var(--gray-2); text-decoration:none; padding:14px 0; border-bottom:0.5px solid var(--border-dim); }
    .mobile-nav-cta { margin-top:24px; }

    /* PAGE HERO */
    .page-hero { padding:140px 0 80px; text-align:center; position:relative; overflow:hidden; }
    .page-hero::before { content:''; position:absolute; inset:0; background-image:linear-gradient(rgba(212,168,67,0.025) 1px,transparent 1px); background-size:100% 48px; pointer-events:none; mask-image:radial-gradient(ellipse 90% 80% at 50% 40%,black 0%,transparent 100%); -webkit-mask-image:radial-gradient(ellipse 90% 80% at 50% 40%,black 0%,transparent 100%); }
    .page-hero-glow { position:absolute; top:0; left:50%; transform:translateX(-50%); width:800px; height:400px; background:radial-gradient(ellipse at center,rgba(212,168,67,0.045) 0%,transparent 65%); pointer-events:none; }
    .page-hero-inner { position:relative; z-index:2; max-width:760px; margin:0 auto; padding:0 24px; }
    .page-eyebrow { font-family:'JetBrains Mono', monospace; font-size:10px; font-weight:500; letter-spacing:0.16em; text-transform:uppercase; color:var(--amber); display:block; margin-bottom:20px; }
    .page-hero h1 { font-family:'Syne', sans-serif; font-size:clamp(40px,6vw,72px); font-weight:700; letter-spacing:-0.02em; line-height:1.08; margin-bottom:24px; color:var(--white); opacity:1 !important; }
    .page-hero-sub { font-size:18px; color:var(--gray-2); line-height:1.75; max-width:600px; margin:0 auto 36px; opacity:1 !important; }
    .page-hero-ctas { display:flex; gap:12px; justify-content:center; flex-wrap:wrap; }

    /* TWO-COL SECTIONS */
    .content-section { padding:100px 0; border-top:0.5px solid var(--border); }
    .section-alt { background:var(--bg-3); }
    .two-col { display:grid; grid-template-columns:1fr 1fr; gap:80px; align-items:start; }
    .two-col.reverse { direction:rtl; }
    .two-col.reverse > * { direction:ltr; }
    .section-label { font-family:'JetBrains Mono', monospace; font-size:10px; font-weight:500; letter-spacing:0.14em; text-transform:uppercase; color:var(--amber); display:block; margin-bottom:16px; }
    .section-title { font-family:'Syne', sans-serif; font-size:clamp(28px,3.5vw,44px); font-weight:400; color:var(--white); letter-spacing:-0.02em; line-height:1.1; margin-bottom:20px; }

    /* VIZ CARD */
    .viz-card { background:var(--bg-4); border:0.5px solid rgba(212,168,67,0.25); border-radius:2px; overflow:hidden; box-shadow:0 0 0 0.5px rgba(212,168,67,0.08),0 24px 48px rgba(0,0,0,0.6); }
    .viz-card-header { display:flex; align-items:center; gap:8px; padding:10px 14px; background:var(--bg-2); border-bottom:0.5px solid var(--border-dim); }
    .viz-dot { width:8px; height:8px; border-radius:50%; }
    .viz-dot:nth-child(1) { background:rgba(192,57,43,0.7); }
    .viz-dot:nth-child(2) { background:rgba(212,168,67,0.5); }
    .viz-dot:nth-child(3) { background:rgba(39,174,96,0.5); }
    .viz-card-title { font-family:'JetBrains Mono', monospace; font-size:10px; font-weight:500; color:var(--gray-3); letter-spacing:0.06em; margin-left:4px; }
    .viz-card-body { padding:20px;  overflow-x:auto; }

    /* DATA ROW */
    .data-row { display:flex; justify-content:space-between; align-items:center; padding:9px 12px; background:rgba(212,168,67,0.025); border:0.5px solid var(--border-dim); border-radius:2px; margin-bottom:6px; }
    .data-row-label { color:var(--gray-3); font-family:'JetBrains Mono', monospace; font-size:11px; }
    .data-row-value { font-weight:600; color:var(--white); font-family:'JetBrains Mono', monospace; font-size:11px; }
    .data-row-value.amber { color:var(--amber); }
    .data-row-value.green { color:var(--green); }

    /* FEAT LIST */
    .feat-list { list-style:none; margin:20px 0; }
    .feat-list li { display:flex; align-items:center; gap:14px; font-size:13px; font-weight:400; color:var(--gray-1); padding:10px 0; border-bottom:0.5px solid var(--border-dim); }
    .feat-list li:last-child { border-bottom:none; }
    .feat-list-tick { font-family:'JetBrains Mono', monospace; color:var(--amber); font-size:11px; flex-shrink:0; width:14px; }

    /* MODULES GRID */
    .modules-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:0.5px; background:var(--border); border:0.5px solid var(--border); border-radius:2px; overflow:hidden; }
    .module-card { background:var(--bg-4); padding:40px 36px; display:flex; flex-direction:column; text-decoration:none; color:inherit; transition:background 0.2s; }
    .module-card:hover { background:var(--bg-5); }
    .module-num { font-family:'JetBrains Mono', monospace; font-size:10px; font-weight:600; letter-spacing:0.12em; text-transform:uppercase; color:rgba(212,168,67,0.4); margin-bottom:20px; }
    .module-icon { width:40px; height:40px; border-radius:2px; background:rgba(212,168,67,0.06); border:0.5px solid var(--border); display:flex; align-items:center; justify-content:center; margin-bottom:18px; font-size:18px; }
    .module-card h2 { font-family:'Syne', sans-serif; font-size:22px; font-weight:400; color:var(--white); margin-bottom:10px; line-height:1.2; }
    .module-card p { font-size:14px; color:var(--gray-2); line-height:1.65; margin-bottom:20px; flex:1; }
    .module-link { display:inline-flex; align-items:center; gap:6px; font-family:'JetBrains Mono', monospace; font-size:11px; color:var(--amber); }

    /* FLOW STEPS */
    .flow-steps { display:grid; grid-template-columns:repeat(4,1fr); gap:0.5px; background:var(--border); border:0.5px solid var(--border); border-radius:2px; overflow:hidden; }
    .flow-step-card { background:var(--bg-4); padding:36px 24px; transition:background 0.2s; }
    .flow-step-card:hover { background:var(--bg-5); }
    .flow-step-num { font-family:'JetBrains Mono', monospace; font-size:10px; font-weight:600; letter-spacing:0.12em; text-transform:uppercase; color:rgba(212,168,67,0.35); margin-bottom:20px; }
    .flow-step-icon { width:44px; height:44px; border-radius:2px; background:rgba(212,168,67,0.06); border:0.5px solid var(--border); display:flex; align-items:center; justify-content:center; font-size:20px; margin-bottom:18px; }
    .flow-step-title { font-size:14px; font-weight:600; color:var(--white); margin-bottom:8px; line-height:1.3; }
    .flow-step-desc { font-size:13px; color:var(--gray-3); line-height:1.6; }

    /* INTEGRATION PARTNER CARD */
    .int-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:16px; }
    .int-partner-card { background:var(--bg-4); border:0.5px solid var(--border); border-radius:2px; padding:24px; display:flex; flex-direction:column; text-decoration:none; color:inherit; transition:border-color 0.2s,transform 0.2s; }
    .int-partner-card:hover { border-color:rgba(212,168,67,0.4); transform:translateY(-3px); }
    .int-partner-card.hidden { display:none; }
    .int-avatar { width:48px; height:48px; border-radius:2px; background:rgba(212,168,67,0.06); border:0.5px solid var(--border); display:flex; align-items:center; justify-content:center; font-family:'JetBrains Mono', monospace; font-size:14px; font-weight:600; color:var(--amber); margin-bottom:16px; }
    .int-partner-name { font-size:15px; font-weight:600; color:var(--white); margin-bottom:6px; }
    .int-partner-badge { display:inline-flex; align-items:center; font-family:'JetBrains Mono', monospace; font-size:10px; font-weight:500; letter-spacing:0.06em; text-transform:uppercase; padding:3px 8px; border-radius:2px; margin-bottom:10px; }
    .int-partner-desc { font-size:13px; color:var(--gray-2); line-height:1.6; flex:1; margin-bottom:14px; }
    .int-partner-link { font-family:'JetBrains Mono', monospace; font-size:11px; color:var(--amber); }
    .badge-ar { background:rgba(212,168,67,0.08); color:var(--amber); border:0.5px solid rgba(212,168,67,0.2); }
    .badge-transport { background:rgba(39,174,96,0.08); color:var(--green); border:0.5px solid rgba(39,174,96,0.2); }
    .badge-credit { background:rgba(180,88,212,0.08); color:#B858D4; border:0.5px solid rgba(180,88,212,0.2); }
    .badge-payments { background:rgba(212,168,67,0.06); color:var(--amber); border:0.5px solid rgba(212,168,67,0.15); }
    .badge-doc { background:rgba(192,57,43,0.08); color:#C0392B; border:0.5px solid rgba(192,57,43,0.2); }
    .badge-account { background:rgba(39,174,96,0.06); color:var(--green); border:0.5px solid rgba(39,174,96,0.15); }

    /* INTEGRATION DETAIL */
    .int-card { background:var(--bg-4); border:0.5px solid rgba(212,168,67,0.25); border-radius:2px; padding:40px; }
    .int-active-badge { display:inline-flex; align-items:center; gap:6px; background:rgba(39,174,96,0.08); border:0.5px solid rgba(39,174,96,0.2); border-radius:2px; padding:6px 14px; font-family:'JetBrains Mono', monospace; font-size:10px; font-weight:500; color:var(--green); letter-spacing:0.1em; text-transform:uppercase; }
    .int-active-dot { width:6px; height:6px; background:var(--green); border-radius:50%; }
    .int-detail-grid { display:grid; grid-template-columns:1fr 1fr; gap:64px; align-items:start; }

    /* CTA SECTION */
    .cta-section { padding:140px 0; text-align:center; border-top:0.5px solid var(--border); position:relative; overflow:hidden; }
    .cta-section::before { content:''; position:absolute; top:50%; left:52%; width:460px; height:340px; transform:translate(-50%,-50%); background:radial-gradient(ellipse at 40% 45%, rgba(212,168,67,0.22) 0%, rgba(212,168,67,0.08) 40%, transparent 70%); filter:blur(36px); pointer-events:none; z-index:0; animation:ctaOrbPulse 7s ease-in-out infinite; }
    .cta-section::after { content:''; position:absolute; top:48%; left:48%; width:260px; height:380px; transform:translate(-50%,-50%) rotate(-18deg); background:radial-gradient(ellipse at 55% 50%, rgba(212,168,67,0.14) 0%, rgba(212,168,67,0.04) 50%, transparent 75%); filter:blur(28px); pointer-events:none; z-index:0; animation:ctaOrbPulse 6s ease-in-out infinite reverse; }
    .cta-section > .container { position:relative; z-index:1; }
    @keyframes ctaOrbPulse { 0%,100% { transform:translate(-50%,-50%) scale(0.94); opacity:0.55; } 50% { transform:translate(-50%,-50%) scale(1.08); opacity:0.75; } }
    .cta-section h2 { margin-bottom:16px; }
    .cta-section > .container > p { margin-bottom:32px; font-size:17px; max-width:480px; margin-left:auto; margin-right:auto; }
    .cta-trust { margin-top:24px; display:flex; gap:20px; justify-content:center; flex-wrap:wrap; align-items:center; }
    .trust-item { font-family:'JetBrains Mono', monospace; font-size:11px; color:var(--gray-3); }

    /* STAT CALLOUT */
    .stat-callout { padding:100px 0; text-align:center; background:var(--bg-3); border-top:0.5px solid var(--border); border-bottom:0.5px solid var(--border); }
    .stat-big { font-family:'Syne', sans-serif; font-size:clamp(72px,12vw,140px); font-weight:400; color:var(--amber); line-height:1; letter-spacing:-0.04em; display:block; }
    .stat-big-label { font-size:18px; color:var(--gray-2); margin-top:16px; }

    /* PLAN CARD */
    .plan-card { background:var(--bg-4); border:0.5px solid var(--border); padding:40px; position:relative; border-radius:2px; }
    .plan-card.featured { border-color:rgba(212,168,67,0.4); }
    .plan-badge { position:absolute; top:-13px; left:50%; transform:translateX(-50%); background:var(--amber); color:#0A0A08; font-family:'JetBrains Mono', monospace; font-size:10px; font-weight:600; letter-spacing:0.1em; text-transform:uppercase; padding:5px 16px; border-radius:2px; white-space:nowrap; }
    .plan-name { font-family:'Syne', sans-serif; font-size:30px; font-weight:400; margin-bottom:8px; color:var(--white); }
    .plan-tagline { font-size:14px; color:var(--gray-2); margin-bottom:28px; line-height:1.6; }
    .plan-price { margin-bottom:32px; padding-bottom:32px; border-bottom:0.5px solid var(--border); }
    .plan-price-main { font-family:'Syne', sans-serif; font-size:38px; color:var(--amber); line-height:1; margin-bottom:6px; }
    .plan-price-detail { font-size:13px; color:var(--gray-3); line-height:1.5; font-family:'JetBrains Mono', monospace; }
    .plan-features { list-style:none; display:flex; flex-direction:column; gap:12px; margin-bottom:32px; }
    .plan-features li { display:flex; align-items:flex-start; gap:10px; font-size:14px; color:var(--gray-1); }
    .plan-features li::before { content:'+'; color:var(--amber); font-weight:600; flex-shrink:0; margin-top:1px; font-family:'JetBrains Mono', monospace; }
    .plan-features li.section-lbl { padding-top:12px; border-top:0.5px solid var(--border-dim); font-family:'JetBrains Mono', monospace; font-size:10px; font-weight:600; letter-spacing:0.1em; text-transform:uppercase; color:var(--gray-3); margin-top:4px; }
    .plan-features li.section-lbl::before { display:none; }

    /* COMPARE TABLE */
    .compare-table { width:100%; border-collapse:collapse; }
    .compare-table th { font-family:'JetBrains Mono', monospace; font-size:10px; font-weight:600; text-align:left; padding:12px 16px; border-bottom:0.5px solid var(--border); color:var(--gray-2); letter-spacing:0.08em; text-transform:uppercase; }
    .compare-table th:not(:first-child) { text-align:center; }
    .compare-table td { padding:14px 16px; border-bottom:0.5px solid var(--border-dim); font-size:13px; color:var(--gray-1); }
    .compare-table td:not(:first-child) { text-align:center; }
    .compare-table tr:last-child td { border-bottom:none; }
    .compare-table .chk { color:var(--green); font-size:15px; }
    .compare-table .dsh { color:var(--gray-3); }
    .compare-table .cat-row td { font-family:'JetBrains Mono', monospace; font-size:10px; font-weight:600; letter-spacing:0.1em; text-transform:uppercase; color:var(--amber); background:rgba(212,168,67,0.03); padding:10px 16px; }

    /* TIMELINE */
    .timeline { max-width:780px; margin:0 auto; padding:0 24px; }
    .timeline-entry { display:grid; grid-template-columns:120px 1fr; gap:40px; padding-bottom:64px; position:relative; }
    .timeline-entry:not(:last-child)::after { content:''; position:absolute; left:59px; top:32px; bottom:0; width:0.5px; background:linear-gradient(to bottom,var(--border),transparent); }
    .timeline-year { font-family:'Syne', sans-serif; font-size:28px; color:var(--amber); text-align:right; padding-top:4px; position:relative; }
    .timeline-year::after { content:''; position:absolute; right:-28px; top:14px; width:8px; height:8px; background:var(--amber); border-radius:50%; }
    .timeline-content h3 { font-size:18px; font-weight:600; margin-bottom:12px; color:var(--white); }
    .timeline-content p { color:var(--gray-2); line-height:1.7; font-size:15px; }

    /* PULLQUOTE */
    .pullquote { background:var(--bg-4); border-left:2px solid var(--amber); padding:28px 32px; margin:48px 0; }
    .pullquote blockquote { font-family:'Syne', sans-serif; font-size:clamp(20px,2.5vw,28px); font-weight:400; color:var(--white); line-height:1.4; font-style:italic; }
    .pullquote cite { display:block; margin-top:16px; font-size:12px; color:var(--gray-3); font-style:normal; font-family:'JetBrains Mono', monospace; letter-spacing:0.04em; }

    /* VALUES */
    .value-card { background:var(--bg-4); border:0.5px solid var(--border); padding:40px; border-radius:2px; transition:border-color 0.2s; }
    .value-card:hover { border-color:rgba(212,168,67,0.35); }
    .value-icon { font-size:36px; margin-bottom:20px; display:block; }
    .value-name { font-family:'Syne', sans-serif; font-size:26px; color:var(--amber); margin-bottom:12px; }
    .value-headline { font-size:15px; font-weight:600; color:var(--white); margin-bottom:12px; }
    .value-body { font-size:14px; color:var(--gray-2); line-height:1.75; }

    /* SECURITY */
    .security-card { background:var(--bg-4); border:0.5px solid var(--border); padding:32px; border-radius:2px; transition:border-color 0.2s; }
    .security-card:hover { border-color:rgba(212,168,67,0.3); }
    .security-icon { font-size:32px; margin-bottom:16px; display:block; }
    .security-card h3 { font-size:16px; font-weight:600; margin-bottom:10px; color:var(--white); }
    .security-card p { font-size:14px; color:var(--gray-2); line-height:1.7; }

    /* TEAM */
    .team-card { background:var(--bg-4); border:0.5px solid var(--border); padding:24px; text-align:center; border-radius:2px; transition:border-color 0.2s; }
    .team-card:hover { border-color:rgba(212,168,67,0.3); }
    .team-avatar { width:60px; height:60px; border-radius:50%; background:rgba(212,168,67,0.06); border:0.5px solid var(--border); display:flex; align-items:center; justify-content:center; margin:0 auto 14px; font-size:22px; }
    .team-role { font-family:'JetBrains Mono', monospace; font-size:10px; font-weight:600; letter-spacing:0.08em; text-transform:uppercase; color:var(--amber); margin-bottom:8px; }
    .team-placeholder { font-size:13px; color:var(--gray-3); font-style:italic; }

    /* ABOUT NAV */
    .about-nav-card { background:var(--bg-4); border:0.5px solid var(--border); padding:32px; text-decoration:none; color:inherit; border-radius:2px; display:flex; flex-direction:column; transition:border-color 0.2s,transform 0.2s; }
    .about-nav-card:hover { border-color:rgba(212,168,67,0.35); transform:translateY(-3px); }
    .about-nav-icon { font-size:28px; margin-bottom:16px; }
    .about-nav-card h3 { font-size:18px; font-weight:600; margin-bottom:10px; color:var(--white); }
    .about-nav-card p { font-size:14px; color:var(--gray-2); line-height:1.6; flex:1; margin-bottom:16px; }
    .about-nav-link { font-family:'JetBrains Mono', monospace; font-size:11px; color:var(--amber); }

    /* FAQ */
    .faq-item { border-bottom:0.5px solid var(--border); }
    .faq-q { display:flex; justify-content:space-between; align-items:center; padding:20px 0; cursor:pointer; font-size:16px; font-weight:500; color:var(--white); gap:16px; background:none; border:none; width:100%; text-align:left; font-family:'Inter', sans-serif; }
    .faq-q:hover { color:var(--amber); }
    .faq-q svg { stroke:var(--amber); fill:none; stroke-width:2; flex-shrink:0; transition:transform 0.2s; }
    .faq-q.open svg { transform:rotate(180deg); }
    .faq-a { display:none; padding-bottom:20px; font-size:15px; color:var(--gray-2); line-height:1.7; }
    .faq-q.open + .faq-a { display:block; }

    /* FORMS */
    .form-group { display:flex; flex-direction:column; gap:6px; margin-bottom:16px; }
    .form-group label { font-family:'JetBrains Mono', monospace; font-size:10px; font-weight:600; letter-spacing:0.08em; text-transform:uppercase; color:var(--gray-2); }
    .form-group input,.form-group select,.form-group textarea { background:var(--bg-4); border:0.5px solid var(--border); padding:12px 14px; font-size:14px; color:var(--white); font-family:'Inter', sans-serif; outline:none; border-radius:2px; transition:border-color 0.15s; }
    .form-group input:focus,.form-group select:focus,.form-group textarea:focus { border-color:rgba(212,168,67,0.4); }
    .form-group textarea { resize:vertical; min-height:110px; }
    .form-group select option { background:var(--bg-4); }
    .form-row { display:grid; grid-template-columns:1fr 1fr; gap:16px; }

    /* CONTACT */
    .contact-detail { display:flex; align-items:flex-start; gap:14px; margin-bottom:24px; }
    .contact-detail-icon { width:40px; height:40px; background:rgba(212,168,67,0.05); border:0.5px solid var(--border); border-radius:2px; display:flex; align-items:center; justify-content:center; font-size:16px; flex-shrink:0; }
    .contact-detail-label { font-family:'JetBrains Mono', monospace; font-size:10px; font-weight:600; letter-spacing:0.1em; text-transform:uppercase; color:var(--gray-3); margin-bottom:4px; }
    .contact-detail-val { font-size:14px; color:var(--gray-1); line-height:1.5; }
    .contact-detail-val a { color:var(--amber); text-decoration:none; }

    /* ARTICLES */
    .article-card { background:var(--bg-4); border:0.5px solid var(--border); overflow:hidden; border-radius:2px; transition:border-color 0.2s,transform 0.2s; }
    .article-card:hover { border-color:rgba(212,168,67,0.35); transform:translateY(-3px); }
    .article-thumb { height:160px; background:var(--bg-3); display:flex; align-items:center; justify-content:center; font-size:48px; border-bottom:0.5px solid var(--border-dim); }
    .article-body { padding:24px; }
    .article-category { font-family:'JetBrains Mono', monospace; font-size:10px; font-weight:600; letter-spacing:0.1em; text-transform:uppercase; margin-bottom:10px; }
    .cat-insights { color:var(--amber); }
    .cat-tips { color:var(--green); }
    .cat-press { color:var(--gray-2); }
    .article-title { font-size:16px; font-weight:600; line-height:1.4; margin-bottom:10px; color:var(--white); }
    .article-excerpt { font-size:13px; color:var(--gray-2); line-height:1.6; margin-bottom:16px; }
    .article-meta { font-family:'JetBrains Mono', monospace; font-size:11px; color:var(--gray-3); }

    /* FILTER BAR */
    .filter-bar { display:flex; gap:8px; justify-content:center; margin-bottom:48px; flex-wrap:wrap; }
    .filter-btn { font-family:'JetBrains Mono', monospace; font-size:11px; font-weight:500; letter-spacing:0.06em; text-transform:uppercase; padding:8px 18px; border-radius:2px; border:0.5px solid var(--border); background:transparent; color:var(--gray-2); cursor:pointer; transition:all 0.15s; }
    .filter-btn:hover,.filter-btn.active { border-color:rgba(212,168,67,0.4); color:var(--amber); background:rgba(212,168,67,0.04); }

    /* CODE BLOCK */
    .code-block { background:var(--bg-2); border:0.5px solid var(--border); border-radius:2px; overflow:hidden; }
    .code-header { display:flex; align-items:center; gap:8px; padding:10px 16px; background:var(--bg-2); border-bottom:0.5px solid var(--border-dim); }
    .code-dots { display:flex; gap:6px; margin-right:6px; }
    .code-dot { width:8px; height:8px; border-radius:50%; }
    .code-dot:nth-child(1) { background:rgba(192,57,43,0.7); }
    .code-dot:nth-child(2) { background:rgba(212,168,67,0.5); }
    .code-dot:nth-child(3) { background:rgba(39,174,96,0.5); }
    .code-lang { font-family:'JetBrains Mono', monospace; font-size:10px; font-weight:500; color:var(--gray-3); letter-spacing:0.06em; }
    .code-body { padding:20px 24px; font-family:'JetBrains Mono', monospace; font-size:12px; line-height:1.8; overflow-x:auto; }
    .tok-comment { color:var(--gray-3); }
    .tok-method { color:var(--amber); font-weight:600; }
    .tok-key { color:var(--amber); opacity:0.8; }
    .tok-str { color:var(--gray-1); }
    .tok-num { color:var(--amber); opacity:0.9; }

    /* FOOTER */
    .footer { background:var(--bg-2); border-top:0.5px solid var(--border); padding:64px 0 40px; }
    .footer-grid { display:grid; grid-template-columns:2fr 1fr 1fr 1fr 1fr; gap:40px; margin-bottom:48px; }
    .footer-brand img { height:26px; margin-bottom:16px; display:block; }
    .footer-brand p { font-size:13px; color:var(--gray-3); line-height:1.6; max-width:200px; }
    .footer-col-title { font-family:'JetBrains Mono', monospace; font-size:10px; font-weight:600; letter-spacing:0.12em; text-transform:uppercase; color:var(--amber); margin-bottom:16px; }
    .footer-links { list-style:none; }
    .footer-links li { margin-bottom:10px; }
    .footer-links a { font-size:13px; color:var(--gray-3); text-decoration:none; transition:color 0.15s; }
    .footer-links a:hover { color:var(--gray-1); }
    .footer-bottom { display:flex; align-items:center; justify-content:space-between; padding-top:24px; border-top:0.5px solid var(--border-dim); flex-wrap:wrap; gap:12px; }
    .footer-copy { font-size:12px; color:var(--gray-3); }
    .footer-address { font-size:12px; color:var(--gray-3); }
    .footer-social { display:flex; gap:12px; align-items:center; }
    .footer-social a { width:32px; height:32px; border-radius:2px; border:0.5px solid var(--border-dim); color:var(--gray-3); display:flex; align-items:center; justify-content:center; text-decoration:none; transition:color 0.15s,border-color 0.15s; }
    .footer-social a:hover { border-color:var(--border); color:var(--amber); }

    /* RESPONSIVE */
    @media (max-width:1060px) { .int-grid { grid-template-columns:repeat(3,1fr); } }
    @media (max-width:960px) {
      .modules-grid { grid-template-columns:repeat(2,1fr); }
      .flow-steps { grid-template-columns:repeat(2,1fr); }
      .two-col { grid-template-columns:1fr; gap:48px; }
      .two-col.reverse { direction:ltr; }
      .footer-grid { grid-template-columns:1fr 1fr; gap:40px; }
      .int-grid { grid-template-columns:repeat(2,1fr); }
      .int-detail-grid { grid-template-columns:1fr; gap:40px; }
    }
    @media (max-width:768px) {
      .nav-links,.nav-right { display:none; }
      .nav-right { display:flex; }
      .nav-hamburger { display:flex; }
      .nav-demo { display:none; }
      .footer-grid { grid-template-columns:1fr 1fr; gap:32px; }
      .form-row { grid-template-columns:1fr; }
    }
    @media (max-width:640px) {
      .modules-grid { grid-template-columns:1fr; }
      .flow-steps { grid-template-columns:1fr; }
      .footer-grid { grid-template-columns:1fr; }
      .footer-bottom { flex-direction:column; gap:16px; text-align:center; }
      .int-grid { grid-template-columns:1fr 1fr; }
    }
    @media (max-width:480px) { .int-grid { grid-template-columns:1fr; } }

    .ig-grid-1 { display:grid; grid-template-columns:1fr 1fr; }
    @media (max-width:640px) { .ig-grid-1 { grid-template-columns:1fr; } }

    /* Auto scroll reveal */
    .fade-in { opacity: 0; transform: translateY(28px); transition: opacity 0.85s cubic-bezier(0.22, 1, 0.36, 1), transform 0.85s cubic-bezier(0.22, 1, 0.36, 1); will-change: opacity, transform; }
    .fade-in.visible { opacity: 1; transform: translateY(0); }
    @media (prefers-reduced-motion: reduce) { .fade-in { opacity: 1 !important; transform: none !important; transition: none !important; } }
  `;
const PAGE_JS = `
function handleDemoSubmit(e) {
  e.preventDefault();
  var btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = "Submitted -- We'll be in touch soon!";
  btn.style.background = '#27AE60';
  btn.disabled = true;
}



document.addEventListener('DOMContentLoaded', function() {

  var nav=document.getElementById('main-nav');
  window.addEventListener('scroll',function(){nav.classList.toggle('scrolled',window.scrollY>60);},{passive:true});
  document.querySelectorAll('.nav-link-toggle').forEach(function(link){
    link.addEventListener('click',function(e){
      e.preventDefault();
      var li=this.parentElement,wasOpen=li.classList.contains('open');
      document.querySelectorAll('.nav-links > li').forEach(function(l){l.classList.remove('open');});
      if(!wasOpen)li.classList.add('open');
    });
  });
  document.addEventListener('click',function(e){
    if(!e.target.closest('.nav-links'))document.querySelectorAll('.nav-links > li').forEach(function(l){l.classList.remove('open');});
  });
  var hbg=document.getElementById('hamburger'),mNav=document.getElementById('mobile-nav');
  if(hbg)hbg.addEventListener('click',function(){
    this.classList.toggle('open');mNav.classList.toggle('open');
    document.body.style.overflow=mNav.classList.contains('open')?'hidden':'';
  });
  document.querySelectorAll('.mobile-nav-toggle').forEach(function(btn){
    btn.addEventListener('click',function(){
      var sub=document.getElementById(this.dataset.target);
      this.classList.toggle('open');if(sub)sub.classList.toggle('open');
    });
  });

  // Scroll-triggered reveals
  (function(){
    var targets = document.querySelectorAll('section, .page-hero, .cta-section, .content-section, .content-grid > *, .two-col > *, .feat-grid > *, .pricing-grid > *, .faq-item, .article-card, .value-card, .step-card, .int-card');
    var tagged = [];
    targets.forEach(function(el, i){
      if (i === 0 && el.matches('.page-hero, section:first-of-type')) return;
      el.classList.add('fade-in');
      tagged.push(el);
    });
    if (!('IntersectionObserver' in window)) {
      tagged.forEach(function(el){ el.classList.add('visible'); });
      return;
    }
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    tagged.forEach(function(el){ io.observe(el); });
  })();

});
`;

export default function PageContent() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />
      <nav className="nav" id="main-nav">
  <div className="nav-inner">
    <a href="/" className="nav-logo"><img src="../assets/logo.svg" alt="FactorCloud" /></a>
    <ul className="nav-links">
      <li>
        <a href="#" className="nav-link-toggle">Platform <svg className="chevron" viewBox="0 0 10 6"><polyline points="1 1 5 5 9 1"></polyline></svg></a>
        <div className="nav-dropdown">
          <a href="/features/automation"><span className="dd-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D4A843" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polyline></svg></span>Automation</a>
          <a href="/features/tracking"><span className="dd-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D4A843" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg></span>Back-Office Management</a>
          <a href="/features/back-end"><span className="dd-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D4A843" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg></span>Operations</a>
          <a href="/features/client-portal"><span className="dd-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D4A843" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></span>Client Portal</a>
          <a href="/features/ocr-automation"><span className="dd-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D4A843" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path><path d="M11 8v6M8 11h6"></path></svg></span>AI-Powered OCR</a>
          <a href="/features/open-api"><span className="dd-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D4A843" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></span>Open API</a>
        </div>
      </li>
      <li><a href="/integrations">Integrations</a></li>
      <li><a href="/pricing">Pricing</a></li>
      <li><a href="/resources">Resources</a></li>
      <li><a href="/about">About</a></li>
    </ul>
    <div className="nav-right">
      <a href="/get-demo" className="btn-primary nav-demo">Get a Demo</a>
      <button className="nav-hamburger" id="hamburger" aria-label="Menu"><span></span><span></span><span></span></button>
    </div>
  </div>
</nav>
<div className="mobile-nav" id="mobile-nav">
  <div className="mobile-nav-section">
    <button className="mobile-nav-toggle" data-target="m-platform">Platform <svg className="chevron" width="16" height="16" viewBox="0 0 10 6"><polyline points="1 1 5 5 9 1"></polyline></svg></button>
    <div className="mobile-nav-sub" id="m-platform">
      <a href="/features/automation">Automation</a>
      <a href="/features/tracking">Back-Office Management</a>
      <a href="/features/back-end">Operations</a>
      <a href="/features/client-portal">Client Portal</a>
      <a href="/features/ocr-automation">AI-Powered OCR</a>
      <a href="/features/open-api">Open API</a>
    </div>
  </div>
  <a href="/integrations" className="mobile-nav-link">Integrations</a>
  <a href="/pricing" className="mobile-nav-link">Pricing</a>
  <a href="/resources" className="mobile-nav-link">Resources</a>
  <a href="/about" className="mobile-nav-link">About</a>
  <div className="mobile-nav-cta"><a href="/get-demo" className="btn-primary" style={{width: "100%", justifyContent: "center"}}>Get a Demo</a></div>
</div>
<section style={{padding: "140px 0 80px", position: "relative", overflow: "hidden"}}>
  <div style={{position: "absolute", inset: "0", backgroundImage: "linear-gradient(rgba(212,168,67,0.025) 1px,transparent 1px)", backgroundSize: "100% 48px", pointerEvents: "none", maskImage: "radial-gradient(ellipse 90% 80% at 50% 40%,black 0%,transparent 100%)", WebkitMaskImage: "radial-gradient(ellipse 90% 80% at 50% 40%,black 0%,transparent 100%)"}}></div>
  <div className="container" style={{position: "relative", zIndex: "2"}}>
    <div className="ig-grid-1" style={{gap: "80px", alignItems: "start"}}>
      <div>
        <span style={{fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", fontWeight: "500", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--amber)", display: "block", marginBottom: "16px", opacity: "1 !important"}}>Get a Demo</span>
        <h1 style={{fontFamily: "'Syne', sans-serif", fontSize: "clamp(40px,5.5vw,64px)", fontWeight: "400", letterSpacing: "-0.02em", lineHeight: "1.1", marginBottom: "20px", color: "var(--white)", opacity: "1 !important"}}>The Factoring OS Built for Scale.</h1>
        <p style={{fontSize: "17px", color: "var(--gray-2)", lineHeight: "1.7", marginBottom: "32px", opacity: "1 !important"}}>Book a demo and see FactorCloud in action. Most teams are live within days of the call. 94% of teams that see FactorCloud make the switch.</p>
        <ul className="feat-list" style={{marginTop: "0"}}>
          <li><span className="feat-list-tick">✓</span>AI-powered OCR eliminates manual data entry</li>
          <li><span className="feat-list-tick">✓</span>Dual-ledger precision accounting</li>
          <li><span className="feat-list-tick">✓</span>20+ integrations included on every plan</li>
          <li><span className="feat-list-tick">✓</span>Client portal live in days, not months</li>
          <li><span className="feat-list-tick">✓</span>80% more NFE without adding headcount</li>
          <li><span className="feat-list-tick">✓</span>SOC2 compliant, cloud-hosted, 45+ developers</li>
          <li><span className="feat-list-tick">✓</span>Free onboarding on every plan</li>
        </ul>
      </div>
      <div>
        <div className="viz-card" style={{padding: "40px"}}>
          <h2 style={{fontFamily: "'Syne', sans-serif", fontSize: "26px", fontWeight: "700", marginBottom: "8px", color: "var(--white)"}}>Book Your Demo</h2>
          <p style={{fontSize: "14px", color: "var(--gray-2)", marginBottom: "28px"}}>Fill out the form and we'll be in touch within one business day.</p>
          <form id="demo-form" onSubmit={(event) => { (new Function('event', `handleDemoSubmit(event)`))(event); }}>
            <div className="form-row">
              <div className="form-group"><label htmlFor="firstName">First Name</label><input type="text" id="firstName" name="firstName" placeholder="John" required /></div>
              <div className="form-group"><label htmlFor="lastName">Last Name</label><input type="text" id="lastName" name="lastName" placeholder="Smith" required /></div>
            </div>
            <div className="form-group"><label htmlFor="company">Company</label><input type="text" id="company" name="company" placeholder="Your Factoring Company" required /></div>
            <div className="form-group"><label htmlFor="email">Email</label><input type="email" id="email" name="email" placeholder="john@yourcompany.com" required /></div>
            <div className="form-group">
              <label htmlFor="hearAbout">How did you hear about us?</label>
              <select id="hearAbout" name="hearAbout">
                <option value="">Select an option...</option>
                <option value="referral">Referral / Word of mouth</option>
                <option value="search">Google / Search</option>
                <option value="linkedin">LinkedIn</option>
                <option value="conference">Conference or Event</option>
                <option value="partner">Partner / Integration</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group"><label htmlFor="comments">Comments</label><textarea id="comments" name="comments" placeholder="Tell us about your operation -- invoice volume, current software, what you're looking for..."></textarea></div>
            <button type="submit" className="btn-primary" style={{width: "100%", justifyContent: "center", padding: "16px"}}>Book My Demo</button>
            <p style={{textAlign: "center", marginTop: "12px", fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "var(--gray-3)"}}>No commitment. Most demos run 30 minutes.</p>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

<section style={{padding: "80px 0", borderTop: "0.5px solid var(--border)"}}>
  <div className="container-sm">
    <div style={{textAlign: "center", marginBottom: "48px"}}>
      <div style={{fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", fontWeight: "500", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--amber)", marginBottom: "12px"}}>FAQ</div>
      <h2>Common Questions</h2>
    </div>
    <div>
      <div className="faq-item">
        <button className="faq-q" onClick={(event) => { (new Function('event', `this.classList.toggle('open')`))(event); }}>
          What makes FactorCloud different from other factoring software?
          <svg width="20" height="20" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </button>
        <div className="faq-a">FactorCloud was built by a factor -- someone who processed 60,000+ invoices a month and couldn't find software that actually worked. That origin shows in every feature. Dual-ledger precision accounting that's purpose-built for factoring. BrightBolt OCR that eliminates manual data entry. 20+ integrations that connect your entire stack. A client portal that's live in days. And an automation layer that lets you process 80% more net funding events without adding headcount. No other platform has all of that.</div>
      </div>
      <div className="faq-item">
        <button className="faq-q" onClick={(event) => { (new Function('event', `this.classList.toggle('open')`))(event); }}>
          What integrations does FactorCloud support?
          <svg width="20" height="20" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </button>
        <div className="faq-a">FactorCloud has 20+ pre-built integrations including Claude (AI inside FactorCloud), Tank Payments (client payments & spend), Ansonia (commercial credit), QuickBooks (accounting sync), ROX (underwriting), Bank Shot (mobile check capture), Bill360 (AR automation), Lighthouz AI, Triumph, Peruse, Decipher, CargoNerd, FactorGenie, and BrightBolt (our built-in OCR engine). Enterprise plans include Open API access for custom integrations. All integrations are included on every plan, no additional fees.</div>
      </div>
      <div className="faq-item">
        <button className="faq-q" onClick={(event) => { (new Function('event', `this.classList.toggle('open')`))(event); }}>
          How secure is FactorCloud?
          <svg width="20" height="20" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </button>
        <div className="faq-a">FactorCloud is SOC2 Type II certified -- independently audited against the highest security and availability standards. The platform is cloud-hosted on enterprise infrastructure with redundant availability zones, automated backups, and 24/7 security monitoring. Our 45+ person team includes dedicated security engineers. Every user action is logged in a tamper-evident audit trail. Data is encrypted at rest (AES-256) and in transit (TLS 1.3).</div>
      </div>
      <div className="faq-item">
        <button className="faq-q" onClick={(event) => { (new Function('event', `this.classList.toggle('open')`))(event); }}>
          How does the OCR automation work?
          <svg width="20" height="20" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </button>
        <div className="faq-a">FactorCloud's built-in OCR engine reads invoice attachments automatically. When a client emails invoice attachments to their designated FactorCloud address, the system reads the attached PDFs and images, extracts the invoice data (number, amount, debtor, date), and automatically creates a complete funding schedule with the client's pre-configured terms applied. No manual data entry required at any step. Low-confidence extractions are flagged for human review. The result is a complete, ready-to-review funding schedule delivered in seconds from a client email.</div>
      </div>
      <div className="faq-item">
        <button className="faq-q" onClick={(event) => { (new Function('event', `this.classList.toggle('open')`))(event); }}>
          How long does it take to get clients up and running on the portal?
          <svg width="20" height="20" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </button>
        <div className="faq-a">Most clients are operational on the FactorCloud portal within days of onboarding. The learning curve is minimal because the client portal is a mirror-view interface -- clients see the same UI as your account executives, scoped to their own data. If your team can use FactorCloud, your clients can use the portal. In practice, this cuts client training time by about 80% compared to legacy platforms with separate, simplified client interfaces.</div>
      </div>
    </div>
  </div>
</section>


<footer className="footer">
  <div className="container">
    <div className="footer-grid">
      <div className="footer-brand">
        <img src="../assets/logo.svg" alt="FactorCloud" />
        <p>Dual-ledger precision, automated cash application, 20+ integrations. Built for factors who needed software that could keep up.</p>
      </div>
      <div>
        <div className="footer-col-title">Platform</div>
        <ul className="footer-links">
          <li><a href="/features/automation">Automation</a></li>
          <li><a href="/features/tracking">Back-Office Management</a></li>
          <li><a href="/features/back-end">Operations</a></li>
          <li><a href="/features/client-portal">Client Portal</a></li>
          <li><a href="/features/ocr-automation">AI-Powered OCR</a></li>
          <li><a href="/features/open-api">Open API</a></li>
        </ul>
      </div>
      <div>
        <div className="footer-col-title">Integrations</div>
        <ul className="footer-links">
          <li><a href="/integrations/tank">Tank Payments</a></li>
          <li><a href="/integrations/quickbooks">QuickBooks</a></li>
          <li><a href="/integrations/ansonia">Ansonia</a></li>
          <li><a href="/integrations/rox">ROX</a></li>
          <li><a href="/integrations/bill360">Bill360</a></li>
          <li><a href="/integrations">All Integrations</a></li>
        </ul>
      </div>
      <div>
        <div className="footer-col-title">Company</div>
        <ul className="footer-links">
          <li><a href="/about">About</a></li>
          <li><a href="/about/our-story">Our Story</a></li>
          <li><a href="/about/team">Team</a></li>
          <li><a href="/about/values">Values</a></li>
          <li><a href="/about/security">Security</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <div>
        <div className="footer-col-title">Legal</div>
        <ul className="footer-links">
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/terms">Terms of Service</a></li>
          <li><a href="/app-privacy">App Privacy</a></li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <span className="footer-copy">© 2025 FactorCloud. All rights reserved.</span>
      <span className="footer-address">3490 Piedmont Rd. Suite 1350, Atlanta, GA 30305</span>
      <div className="footer-social">
        <a href="https://linkedin.com/company/factorcloud" aria-label="LinkedIn" target="_blank" rel="noopener">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg>
        </a>
      </div>
    </div>
  </div>
</footer>
      <Script id="page-get-demo" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: PAGE_JS }} />
    </>
  );
}

// AUTO-GENERATED from features/client-portal.html by scripts/migrate-html.mjs.
// Hand-edits are fine; re-running the migrator will overwrite this file.
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Client Portal , FactorCloud Factoring Software",
  description: "Give your clients a real-time mirror of your back office. FactorCloud's client portal reduces inbound status calls by up to 80% and keeps clients informed without extra effort.",
};

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
      .two-col.reverse { direction:ltr; display:flex; flex-direction:column; }
      .two-col.reverse > :last-child { order: 1; }
      .two-col.reverse > :first-child { order: 2; }
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
      /* Full-width viz cards on mobile , contained height so they can't push text */
      .viz-card {
        width: calc(100vw - 40px);
        max-width: calc(100vw - 40px);
        max-height: 380px;
        overflow: hidden;
        margin-left: 0;
        margin-right: 0;
        border-radius: 2px;
        flex-shrink: 0;
      }
      /* The two-col div containing a viz-card , fixed height, no reflow */
      .two-col > div:first-child {
        max-height: 400px;
        overflow: hidden;
        flex-shrink: 0;
      }
      /* Kill any animations that cause vertical movement */
      .viz-card,
      .viz-card * {
        animation-name: none !important;
      }
      /* Exception: keep opacity/fade animations, just not translateY */
      .viz-card .ig-bar,
      .viz-card .activity-row {
        animation-name: unset !important;
      }
    
      /* ── Mobile QA: contain animated containers, prevent overflow + reflow ── */
      .mockup, .viz-card, .dash-frame, .book-frame,
      [class*="mockup"], [class*="viz-card"], [class*="frame"] {
        max-width: calc(100vw - 40px) !important;
        width: 100% !important;
        max-height: 380px !important;
        overflow: hidden !important;
        box-sizing: border-box !important;
      }
      /* Kill vertical float animations , they cause text reflow on mobile */
      .mockup, .dash-frame, .dash-float, [class*="float"] {
        animation: none !important;
        transform: none !important;
      }
      /* Columns containing animations , fixed height so surrounding text stays locked */
      .platform-row > div, .two-col > div, .content-row > div {
        overflow: hidden;
      }
      /* Ensure containers have horizontal breathing room */
      .container { padding-left: 20px !important; padding-right: 20px !important; }
    }
    @media (max-width:640px) {
      .modules-grid { grid-template-columns:1fr; }
      .flow-steps { grid-template-columns:1fr; }
      .footer-grid { grid-template-columns:1fr; }
      .footer-bottom { flex-direction:column; gap:16px; text-align:center; }
      .int-grid { grid-template-columns:1fr 1fr; }
    }
    @media (max-width:480px) { .int-grid { grid-template-columns:1fr; } }

    .ig-grid-1 { display:grid; grid-template-columns:2fr 1fr 1fr 70px; }
    @media (max-width:640px) { .ig-grid-1 { min-width:300px; } }
    .ig-grid-2 { display:grid; grid-template-columns:2fr 1fr 1fr 70px; }
    @media (max-width:640px) { .ig-grid-2 { min-width:300px; } }
    .ig-grid-3 { display:grid; grid-template-columns:2fr 1fr 1fr 70px; }
    @media (max-width:640px) { .ig-grid-3 { min-width:300px; } }
    .ig-grid-4 { display:grid; grid-template-columns:1fr 1fr; }
    @media (max-width:640px) { .ig-grid-4 { grid-template-columns:1fr; } }

    /* Auto scroll reveal */
    .fade-in { opacity: 0; transform: translateY(28px); transition: opacity 0.85s cubic-bezier(0.22, 1, 0.36, 1), transform 0.85s cubic-bezier(0.22, 1, 0.36, 1); will-change: opacity, transform; }
    .fade-in.visible { opacity: 1; transform: translateY(0); }
    @media (prefers-reduced-motion: reduce) { .fade-in { opacity: 1 !important; transform: none !important; transition: none !important; } }
  `;
const PAGE_JS = `
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



// ─── DRAG DROP ANIMATION ───────────────────────────────────
(function() {
  var ghost = document.getElementById('drag-ghost');
  var dropZone = document.getElementById('drop-zone');
  var uploadRows = document.getElementById('upload-rows');
  if (!ghost || !dropZone || !uploadRows) return;

  var newRow = '<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:0.5px solid rgba(212,168,67,0.2);font-size:12px;opacity:0;transition:opacity 0.4s;"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#D4A843" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/></svg><span style="flex:1;color:var(--white);">INV-20483-swift.pdf</span><span style="font-family:\\'IBM Plex Mono\\',monospace;font-size:10px;color:var(--amber);">Processing...</span></div>';

  function runDragAnimation() {
    // Phase 1: ghost appears above drop zone
    ghost.style.opacity = '1';
    ghost.style.transform = 'translateY(0px)';
    ghost.style.transition = 'opacity 0.3s, transform 0s';

    setTimeout(function() {
      // Phase 2: ghost moves down into drop zone
      ghost.style.transition = 'transform 0.5s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s';
      ghost.style.transform = 'translateY(80px)';
      dropZone.style.borderColor = 'rgba(212,168,67,0.6)';
      dropZone.style.background = 'rgba(212,168,67,0.04)';
    }, 800);

    setTimeout(function() {
      // Phase 3: ghost disappears (dropped)
      ghost.style.opacity = '0';
      dropZone.style.borderColor = 'rgba(212,168,67,0.2)';
      dropZone.style.background = 'transparent';

      // New row appears in list
      var div = document.createElement('div');
      div.innerHTML = newRow;
      var row = div.firstChild;
      uploadRows.insertBefore(row, uploadRows.firstChild);
      setTimeout(function() { row.style.opacity = '1'; }, 50);
    }, 1400);

    setTimeout(function() {
      // Phase 4: reset ghost position for next loop
      ghost.style.transition = 'none';
      ghost.style.transform = 'translateY(0px)';
      // Remove the added row
      setTimeout(function() {
        if (uploadRows.firstChild && uploadRows.firstChild.querySelector) {
          var first = uploadRows.firstChild;
          first.style.opacity = '0';
          setTimeout(function() { if (first.parentNode) first.parentNode.removeChild(first); }, 400);
        }
      }, 1000);
    }, 4500);
  }

  // Start after 2s, repeat every 6s
  setTimeout(function() {
    runDragAnimation();
    setInterval(runDragAnimation, 6000);
  }, 2000);
})();
`;

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />
      <nav className="nav" id="main-nav">
  <div className="nav-inner">
    <a href="/" className="nav-logo"><img src="/images/logo-nav.svg" alt="FactorCloud" /></a>
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
<section className="page-hero">
  <div className="page-hero-glow"></div>
  <div className="page-hero-inner" style={{opacity: "1 !important"}}>
    <span className="page-eyebrow" style={{opacity: "1 !important"}}>Client Portal</span>
    <h1 style={{opacity: "1 !important"}}>Give Your Clients a View They Actually Want to Use</h1>
    <p className="page-hero-sub" style={{opacity: "1 !important"}}>The FactorCloud client portal is a mirror of your back office -- same data, same status, their screen. Clients stop calling to ask questions because they already have the answers.</p>
  </div>
</section>

<section className="content-section">
  <div className="container">
    <div className="two-col">
      <div>
        <span className="section-label">Mirror-View Interface</span>
        <h2 className="section-title">What Your AEs See, Your Clients See.</h2>
        <p>Same data, same status. Your clients have real-time visibility into every invoice -- funded, pending, under review. No more "what's the status of my invoice" calls. The portal answers before they ask.</p>
      </div>
      <div>
        <div className="viz-card">
          <div className="viz-card-header">
            <span style={{width: "7px", height: "7px", background: "var(--green)", borderRadius: "50%"}}></span>
            <span className="viz-card-title" style={{marginLeft: "6px"}}>Acme Carriers Portal</span>
            <span style={{marginLeft: "auto", fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: "var(--gray-3)"}}>acme@acmecarriers.com</span>
          </div>
          <div className="viz-card-body">
            <div className="ig-grid-1" style={{gap: "6px", padding: "6px 0 10px", borderBottom: "0.5px solid var(--border-dim)"}}>
              <span style={{fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: "var(--gray-3)"}}>DEBTOR</span>
              <span style={{fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: "var(--gray-3)"}}>AMOUNT</span>
              <span style={{fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: "var(--gray-3)"}}>DATE</span>
              <span style={{fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: "var(--gray-3)"}}>STATUS</span>
            </div>
            <div className="ig-grid-2" style={{gap: "6px", alignItems: "center", padding: "8px 0", borderBottom: "0.5px solid var(--border-dim)", fontSize: "12px"}}><span style={{fontWeight: "600", color: "var(--white)"}}>Apex Logistics</span><span style={{fontFamily: "'JetBrains Mono', monospace", color: "var(--white)"}}>$84,200</span><span style={{color: "var(--gray-3)"}}>Mar 18</span><span style={{fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", padding: "2px 6px", background: "rgba(39,174,96,0.1)", color: "var(--green)"}}>Funded</span></div>
            <div className="ig-grid-2" style={{gap: "6px", alignItems: "center", padding: "8px 0", borderBottom: "0.5px solid var(--border-dim)", fontSize: "12px"}}><span style={{fontWeight: "600", color: "var(--white)"}}>Gulf Coast</span><span style={{fontFamily: "'JetBrains Mono', monospace", color: "var(--white)"}}>$56,800</span><span style={{color: "var(--gray-3)"}}>Mar 19</span><span style={{fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", padding: "2px 6px", background: "rgba(39,174,96,0.1)", color: "var(--green)"}}>Funded</span></div>
            <div className="ig-grid-2" style={{gap: "6px", alignItems: "center", padding: "8px 0", borderBottom: "0.5px solid var(--border-dim)", fontSize: "12px"}}><span style={{fontWeight: "600", color: "var(--white)"}}>Meridian Trans.</span><span style={{fontFamily: "'JetBrains Mono', monospace", color: "var(--white)"}}>$47,200</span><span style={{color: "var(--gray-3)"}}>Mar 20</span><span style={{fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", padding: "2px 6px", background: "rgba(212,168,67,0.08)", color: "var(--amber)"}}>Pending</span></div>
            <div className="ig-grid-3" style={{gap: "6px", alignItems: "center", padding: "8px 0", fontSize: "12px"}}><span style={{fontWeight: "600", color: "var(--white)"}}>Summit Freight</span><span style={{fontFamily: "'JetBrains Mono', monospace", color: "var(--white)"}}>$22,400</span><span style={{color: "var(--gray-3)"}}>Mar 21</span><span style={{fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", padding: "2px 6px", background: "rgba(192,57,43,0.1)", color: "var(--red)"}}>Review</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="content-section section-alt">
  <div className="container">
    <div className="two-col reverse">
      <div>
        <div className="viz-card">
          <div className="viz-card-header"><span style={{width: "7px", height: "7px", background: "var(--green)", borderRadius: "50%"}}></span><span className="viz-card-title" style={{marginLeft: "6px"}}>Document Upload</span></div>
          <div className="viz-card-body" style={{position: "relative", overflow: "hidden"}}>
            
            <div id="drag-ghost" style={{position: "absolute", top: "-60px", right: "30px", zIndex: "10", pointerEvents: "none", opacity: "0", transition: "opacity 0.3s"}}>
              <div style={{background: "var(--bg-2)", border: "1px solid rgba(212,168,67,0.4)", borderRadius: "2px", padding: "6px 10px", display: "flex", alignItems: "center", gap: "6px", boxShadow: "0 8px 24px rgba(0,0,0,0.5)", fontSize: "11px", color: "var(--gray-1)"}}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#D4A843" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"></path><polyline points="14,2 14,8 20,8"></polyline></svg>
                INV-20483-swift.pdf
              </div>
            </div>
            <div id="drop-zone" style={{border: "1.5px dashed rgba(212,168,67,0.2)", padding: "24px", textAlign: "center", marginBottom: "14px", transition: "border-color 0.3s,background 0.3s", borderRadius: "2px"}}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(212,168,67,0.5)" strokeWidth="1.5" style={{marginBottom: "8px"}}><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"></path></svg>
              <div style={{fontSize: "13px", fontWeight: "600", color: "var(--white)", marginBottom: "4px"}}>Drop invoices here</div>
              <div style={{fontSize: "11px", color: "var(--gray-3)"}}>PDF, JPG, PNG accepted</div>
            </div>
            <div style={{fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--gray-3)", marginBottom: "8px"}}>Recently Uploaded</div>
            <div id="upload-rows">
              <div style={{display: "flex", alignItems: "center", gap: "10px", padding: "7px 0", borderBottom: "0.5px solid var(--border-dim)", fontSize: "12px"}}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--gray-3)" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"></path><polyline points="14,2 14,8 20,8"></polyline></svg><span style={{flex: "1", color: "var(--gray-1)"}}>INV-20482-apex.pdf</span><span style={{fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: "var(--amber)"}}>In Workflow</span></div>
              <div style={{display: "flex", alignItems: "center", gap: "10px", padding: "7px 0", borderBottom: "0.5px solid var(--border-dim)", fontSize: "12px"}}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--gray-3)" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"></path><polyline points="14,2 14,8 20,8"></polyline></svg><span style={{flex: "1", color: "var(--gray-1)"}}>INV-20481-gulf.pdf</span><span style={{fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: "var(--amber)"}}>Processed</span></div>
              <div style={{display: "flex", alignItems: "center", gap: "10px", padding: "7px 0", fontSize: "12px"}}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--gray-3)" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"></path><polyline points="14,2 14,8 20,8"></polyline></svg><span style={{flex: "1", color: "var(--gray-1)"}}>INV-20480-meridian.pdf</span><span style={{fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: "var(--green)"}}>Funded</span></div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <span className="section-label">Document Upload</span>
        <h2 className="section-title">Clients Upload Directly Into the Workflow.</h2>
        <p>No emails, no attachments to chase. Clients drop invoices into the portal and they flow directly into automated processing. Your team gets the documents. They get confirmation. Nobody has to follow up.</p>
      </div>
    </div>
  </div>
</section>

<section className="content-section">
  <div className="container">
    <div className="two-col">
      <div>
        <span className="section-label">Funding Tracker</span>
        <h2 className="section-title">Every Client Knows Where Their Funding Stands.</h2>
        <p>Real-time funding status. Advance amounts, reserve balances, pending payouts -- all visible the moment your back office updates. Clients get clarity. Your AEs get their time back.</p>
      </div>
      <div>
        <div className="viz-card">
          <div className="viz-card-header"><span style={{width: "7px", height: "7px", background: "var(--green)", borderRadius: "50%"}}></span><span className="viz-card-title" style={{marginLeft: "6px"}}>Funding Summary</span></div>
          <div className="viz-card-body">
            <div className="ig-grid-4" style={{gap: "10px", marginBottom: "18px"}}>
              <div style={{background: "rgba(212,168,67,0.03)", border: "0.5px solid var(--border-dim)", padding: "14px", textAlign: "center"}}><span style={{fontFamily: "'Syne', sans-serif", fontSize: "22px", color: "var(--amber)", display: "block", marginBottom: "4px"}}>$247K</span><span style={{fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: "var(--gray-3)"}}>Advances This Week</span></div>
              <div style={{background: "rgba(212,168,67,0.03)", border: "0.5px solid var(--border-dim)", padding: "14px", textAlign: "center"}}><span style={{fontFamily: "'Syne', sans-serif", fontSize: "22px", color: "var(--amber)", display: "block", marginBottom: "4px"}}>$18.4K</span><span style={{fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: "var(--gray-3)"}}>Reserve Balance</span></div>
            </div>
            <div style={{fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--gray-3)", marginBottom: "8px"}}>Recent Activity</div>
            <div style={{display: "flex", alignItems: "center", gap: "10px", padding: "8px 0", borderBottom: "0.5px solid var(--border-dim)"}}>
              <div style={{width: "26px", height: "26px", background: "rgba(212,168,67,0.06)", border: "0.5px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", flexShrink: "0"}}>💰</div>
              <div style={{flex: "1"}}><div style={{fontSize: "12px", fontWeight: "600", color: "var(--white)"}}>Advance sent · Apex Logistics</div><div style={{fontSize: "11px", color: "var(--gray-3)"}}>ACH · Mar 21, 9:42 AM</div></div>
              <span style={{fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", fontWeight: "600", color: "var(--green)"}}>$78,306</span>
            </div>
            <div style={{display: "flex", alignItems: "center", gap: "10px", padding: "8px 0"}}>
              <div style={{width: "26px", height: "26px", background: "rgba(212,168,67,0.06)", border: "0.5px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", flexShrink: "0"}}>💰</div>
              <div style={{flex: "1"}}><div style={{fontSize: "12px", fontWeight: "600", color: "var(--white)"}}>Advance sent · Gulf Coast</div><div style={{fontSize: "11px", color: "var(--gray-3)"}}>ACH · Mar 20, 2:18 PM</div></div>
              <span style={{fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", fontWeight: "600", color: "var(--green)"}}>$52,824</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section style={{padding: "100px 0", textAlign: "center", background: "var(--bg-3)", borderTop: "0.5px solid var(--border)", borderBottom: "0.5px solid var(--border)"}}>
  <div className="container">
    <span style={{fontFamily: "'Syne', sans-serif", fontSize: "clamp(72px,12vw,140px)", fontWeight: "400", color: "var(--amber)", lineHeight: "1", letterSpacing: "-0.04em", display: "block"}}>80%</span>
    <p style={{fontSize: "18px", color: "var(--gray-2)", marginTop: "16px", maxWidth: "420px", marginLeft: "auto", marginRight: "auto", lineHeight: "1.5"}}>fewer inbound status requests for teams that deploy the client portal. Your AEs spend time doing real work.</p>
  </div>
</section>

<section className="cta-section">
  <div className="container">
    <h2>Your clients are ready for a better experience.</h2>
    <p>The portal goes live in days. See it in a demo.</p>
    <a href="/get-demo" className="btn-primary">Get a Demo</a>
  </div>
</section>

<footer className="footer">
  <div className="container">
    <div className="footer-grid">
      <div className="footer-brand">
        <img src="/images/logo-nav.svg" alt="FactorCloud" />
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
      <Script id="page-features-client-portal" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: PAGE_JS }} />
    </>
  );
}

"use client";
import Script from "next/script";
import Link from "next/link";

const PAGE_CSS = `
    html, body { overflow-x: hidden; }
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --bg:#07070A; --bg-2:#030305; --bg-3:#121216; --bg-4:#1A1A1E; --bg-5:#22222A;
      --amber:#FFC84A; --amber-hover:#C49A35; --amber-dim:rgba(255,200,74,0.22); --amber-faint:rgba(255,200,74,0.08);
      --white:#FFFFFF; --gray-1:#F0E8D8; --gray-2:#D4C9B2; --gray-3:#9E937B;
      --border:rgba(255,200,74,0.18); --border-dim:rgba(255,200,74,0.10);
      --green:#27AE60; --red:#C0392B;
    }
    html { scroll-behavior:smooth; }
    body { background:var(--bg); color:var(--white); font-family:'Inter',-apple-system,BlinkMacSystemFont,sans-serif; font-size:15px; line-height:1.7; -webkit-font-smoothing:antialiased; overflow-x:hidden; }

    /* ─── NAV ─────────────────────────────────────────────── */
    .nav { position:fixed; top:0; left:0; right:0; z-index:1000; height:64px; display:flex; align-items:center; border-bottom:0.5px solid transparent; transition:background 0.3s,border-color 0.3s; }
    .nav.scrolled { background:rgba(7,7,10,0.94); border-color:var(--border); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px); }
    .nav-inner { display:flex; align-items:center; justify-content:space-between; width:100%; max-width:1360px; margin:0 auto; padding:0 24px; }
    .nav-logo img { height:30px; display:block; }
    .nav-links { display:flex; align-items:center; gap:4px; list-style:none; }
    .nav-links > li { position:relative; }
    .nav-links > li > a { display:flex; align-items:center; gap:4px; font-family:'JetBrains Mono',monospace; font-size:11px; font-weight:500; letter-spacing:0.06em; text-transform:uppercase; color:var(--gray-2); text-decoration:none; padding:8px 12px; border-radius:2px; transition:color 0.15s,background 0.15s; }
    .nav-links > li > a:hover,
    .nav-links > li > a.active { color:var(--white); background:rgba(255,200,74,0.04); }
    .nav-links > li > a.active { color:var(--amber); }
    .nav-links > li > a .chevron { width:10px; height:10px; stroke:currentColor; fill:none; stroke-width:2; stroke-linecap:round; stroke-linejoin:round; transition:transform 0.2s; }
    .nav-links > li.open > a .chevron { transform:rotate(180deg); }
    .nav-dropdown { position:absolute; top:calc(100% + 8px); left:0; background:var(--bg-3); border:0.5px solid var(--border); border-radius:2px; padding:8px; min-width:220px; opacity:0; pointer-events:none; transform:translateY(-6px); transition:transform 0.15s; box-shadow:0 24px 48px rgba(0,0,0,0.7); }
    .nav-links > li.open .nav-dropdown { opacity:1; pointer-events:auto; transform:translateY(0); }
    .nav-dropdown a { display:flex; align-items:center; gap:10px; font-family:'JetBrains Mono',monospace; font-size:11px; color:var(--gray-2); text-decoration:none; padding:9px 12px; border-radius:2px; transition:background 0.12s,color 0.12s; }
    .nav-dropdown a:hover { background:rgba(255,200,74,0.06); color:var(--white); }
    .nav-dropdown a .dd-icon { width:26px; height:26px; background:var(--amber-faint); border:0.5px solid var(--border-dim); border-radius:2px; display:flex; align-items:center; justify-content:center; flex-shrink:0; font-size:12px; }
    .nav-right { display:flex; align-items:center; gap:16px; }
    .nav-demo { font-size:11px; padding:9px 20px; font-family:'JetBrains Mono',monospace; font-weight:700; letter-spacing:0.06em; text-transform:uppercase; }
    .nav-hamburger { display:none; flex-direction:column; gap:5px; cursor:pointer; padding:4px; background:none; border:none; }
    .nav-hamburger span { width:22px; height:1.5px; background:var(--gray-2); border-radius:0; transition:transform 0.25s,opacity 0.25s; }
    .nav-hamburger.open span:nth-child(1) { transform:rotate(45deg) translate(4px,7px); }
    .nav-hamburger.open span:nth-child(2) { opacity:0; }
    .nav-hamburger.open span:nth-child(3) { transform:rotate(-45deg) translate(4px,-7px); }
    .mobile-nav { display:none; position:fixed; top:64px; left:0; right:0; bottom:0; background:var(--bg); padding:24px 32px 48px; overflow-y:auto; z-index:999; border-top:0.5px solid var(--border); }
    .mobile-nav.open { display:block; }
    .mobile-nav-section { margin-bottom:8px; }
    .mobile-nav-toggle { display:flex; justify-content:space-between; align-items:center; font-family:'JetBrains Mono',monospace; font-size:11px; font-weight:600; letter-spacing:0.08em; text-transform:uppercase; color:var(--gray-2); padding:14px 0; border-bottom:0.5px solid var(--border-dim); cursor:pointer; background:none; border:none; width:100%; text-align:left; }
    .mobile-nav-toggle .chevron { transition:transform 0.2s; stroke:var(--gray-3); fill:none; stroke-width:2; }
    .mobile-nav-toggle.open .chevron { transform:rotate(180deg); }
    .mobile-nav-sub { display:none; padding:8px 0; }
    .mobile-nav-sub.open { display:block; }
    .mobile-nav-sub a { display:block; font-family:'JetBrains Mono',monospace; font-size:11px; color:var(--gray-2); text-decoration:none; padding:9px 0; border-bottom:0.5px solid var(--border-dim); }
    .mobile-nav-link { display:block; font-family:'JetBrains Mono',monospace; font-size:11px; font-weight:600; letter-spacing:0.08em; text-transform:uppercase; color:var(--gray-2); text-decoration:none; padding:14px 0; border-bottom:0.5px solid var(--border-dim); }
    .mobile-nav-cta { margin-top:24px; }

    /* ─── BUTTONS ─────────────────────────────────────────── */
    .btn-primary { display:inline-flex; align-items:center; justify-content:center; background:var(--amber); color:#0A0A08; font-family:'Syne',sans-serif; font-size:14px; font-weight:700; letter-spacing:0.06em; text-transform:uppercase; padding:11px 22px; border-radius:2px; text-decoration:none; border:none; cursor:pointer; transition:background 0.2s,transform 0.15s; white-space:nowrap; }
    .btn-primary:hover { background:var(--amber-hover); transform:translateY(-1px); }
    .btn-ghost { display:inline-flex; align-items:center; justify-content:center; background:transparent; color:var(--gray-1); font-family:'Syne',sans-serif; font-size:14px; font-weight:700; letter-spacing:0.06em; text-transform:uppercase; padding:11px 22px; border-radius:2px; text-decoration:none; border:1px solid var(--border); transition:border-color 0.2s,color 0.2s,transform 0.15s; white-space:nowrap; }
    .btn-ghost:hover { border-color:rgba(255,200,74,0.4); color:var(--amber); transform:translateY(-1px); }

    /* ─── PAGE HERO ───────────────────────────────────────── */
    .page-hero { padding:140px 0 80px; text-align:center; position:relative; overflow:hidden; }
    .page-hero::before { content:''; position:absolute; inset:0; background-image:linear-gradient(rgba(255,200,74,0.025) 1px,transparent 1px); background-size:100% 48px; pointer-events:none; mask-image:radial-gradient(ellipse 90% 80% at 50% 40%,black 0%,transparent 100%); -webkit-mask-image:radial-gradient(ellipse 90% 80% at 50% 40%,black 0%,transparent 100%); }
    .page-hero-glow { position:absolute; top:0; left:50%; transform:translateX(-50%); width:800px; height:400px; background:radial-gradient(ellipse at center,rgba(255,200,74,0.045) 0%,transparent 65%); pointer-events:none; }
    .page-hero-inner { position:relative; z-index:2; max-width:760px; margin:0 auto; padding:0 24px; }
    .page-eyebrow { font-family:'JetBrains Mono',monospace; font-size:10px; font-weight:500; letter-spacing:0.16em; text-transform:uppercase; color:var(--amber); display:block; margin-bottom:20px; }
    .page-hero h1 { font-family:'Syne',sans-serif; font-size:clamp(40px,6vw,72px); font-weight:700; letter-spacing:-0.02em; line-height:1.08; margin-bottom:24px; color:var(--white); }
    .page-hero-sub { font-size:18px; color:var(--gray-2); line-height:1.75; max-width:600px; margin:0 auto; }

    /* ─── FILTER BAR ──────────────────────────────────────── */
    .filter-bar { display:flex; gap:8px; justify-content:center; margin-bottom:56px; flex-wrap:wrap; }
    .filter-btn { font-family:'JetBrains Mono',monospace; font-size:11px; font-weight:500; letter-spacing:0.06em; text-transform:uppercase; padding:8px 18px; border-radius:2px; border:0.5px solid var(--border); background:transparent; color:var(--gray-2); cursor:pointer; transition:all 0.15s; }
    .filter-btn:hover, .filter-btn.active { border-color:rgba(255,200,74,0.4); color:var(--amber); background:rgba(255,200,74,0.04); }

    /* ─── BLOG GRID ───────────────────────────────────────── */
    .blog-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
    .blog-card { background:var(--bg-4); border:0.5px solid var(--border); border-radius:2px; overflow:hidden; text-decoration:none; color:inherit; display:flex; flex-direction:column; transition:border-color 0.2s,transform 0.2s; }
    .blog-card:hover { border-color:rgba(255,200,74,0.35); transform:translateY(-3px); }
    .blog-card.hidden { display:none; }
    .blog-card-thumb { height:180px; background:var(--bg-3); border-bottom:0.5px solid var(--border-dim); display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden; }
    .blog-card-thumb-icon { font-size:52px; opacity:0.85; }
    .blog-card-body { padding:28px; display:flex; flex-direction:column; flex:1; }
    .blog-card-category { font-family:'JetBrains Mono',monospace; font-size:10px; font-weight:600; letter-spacing:0.1em; text-transform:uppercase; margin-bottom:12px; }
    .cat-industry { color:var(--amber); }
    .cat-operations { color:var(--green); }
    .cat-product { color:#7B8CF0; }
    .cat-guides { color:var(--gray-2); }
    .blog-card-title { font-family:'Syne',sans-serif; font-size:18px; font-weight:700; line-height:1.3; margin-bottom:12px; color:var(--white); letter-spacing:-0.01em; }
    .blog-card-excerpt { font-size:13px; color:var(--gray-2); line-height:1.65; flex:1; margin-bottom:20px; }
    .blog-card-footer { display:flex; align-items:center; justify-content:space-between; padding-top:16px; border-top:0.5px solid var(--border-dim); }
    .blog-card-meta { font-family:'JetBrains Mono',monospace; font-size:10px; color:var(--gray-3); }
    .blog-card-arrow { font-family:'JetBrains Mono',monospace; font-size:11px; color:var(--amber); display:flex; align-items:center; gap:4px; transition:gap 0.15s; }
    .blog-card:hover .blog-card-arrow { gap:8px; }

    /* ─── FEATURED POST ───────────────────────────────────── */
    .blog-featured { background:var(--bg-4); border:0.5px solid rgba(255,200,74,0.28); border-radius:2px; display:grid; grid-template-columns:1fr 1fr; overflow:hidden; text-decoration:none; color:inherit; margin-bottom:64px; transition:border-color 0.2s; }
    .blog-featured:hover { border-color:rgba(255,200,74,0.5); }
    .blog-featured-thumb { background:var(--bg-3); border-right:0.5px solid var(--border-dim); display:flex; align-items:center; justify-content:center; min-height:320px; font-size:96px; position:relative; overflow:hidden; }
    .blog-featured-thumb::after { content:''; position:absolute; inset:0; background:radial-gradient(ellipse at center,rgba(255,200,74,0.06) 0%,transparent 70%); }
    .blog-featured-body { padding:48px; display:flex; flex-direction:column; justify-content:center; }
    .blog-featured-tag { display:inline-flex; align-items:center; gap:6px; background:rgba(255,200,74,0.08); border:0.5px solid rgba(255,200,74,0.2); border-radius:2px; padding:5px 12px; font-family:'JetBrains Mono',monospace; font-size:10px; font-weight:600; letter-spacing:0.1em; text-transform:uppercase; color:var(--amber); margin-bottom:20px; width:fit-content; }
    .blog-featured-title { font-family:'Syne',sans-serif; font-size:clamp(24px,3vw,36px); font-weight:700; letter-spacing:-0.02em; line-height:1.15; margin-bottom:16px; color:var(--white); }
    .blog-featured-excerpt { font-size:15px; color:var(--gray-2); line-height:1.75; margin-bottom:28px; }
    .blog-featured-meta { display:flex; align-items:center; gap:16px; }
    .blog-featured-author { font-family:'JetBrains Mono',monospace; font-size:10px; color:var(--gray-3); text-transform:uppercase; letter-spacing:0.08em; }
    .blog-featured-read { font-family:'JetBrains Mono',monospace; font-size:11px; color:var(--amber); display:flex; align-items:center; gap:4px; }

    /* ─── SECTION LAYOUT ──────────────────────────────────── */
    .container { max-width:1360px; margin:0 auto; padding:0 24px; }
    .blog-section { padding:64px 0 120px; border-top:0.5px solid var(--border); }
    .section-header { display:flex; align-items:baseline; justify-content:space-between; margin-bottom:48px; }
    .section-title { font-family:'Syne',sans-serif; font-size:clamp(24px,2.5vw,32px); font-weight:700; letter-spacing:-0.02em; color:var(--white); }
    .section-link { font-family:'JetBrains Mono',monospace; font-size:11px; color:var(--amber); text-decoration:none; }

    /* ─── CTA SECTION ─────────────────────────────────────── */
    .cta-section { padding:140px 0; text-align:center; border-top:0.5px solid var(--border); position:relative; overflow:hidden; background:var(--bg-2); }
    .cta-section::before { content:''; position:absolute; top:50%; left:52%; width:460px; height:340px; transform:translate(-50%,-50%); background:radial-gradient(ellipse at 40% 45%,rgba(255,200,74,0.18) 0%,rgba(255,200,74,0.06) 40%,transparent 70%); filter:blur(36px); pointer-events:none; z-index:0; animation:ctaPulse 7s ease-in-out infinite; }
    @keyframes ctaPulse { 0%,100% { transform:translate(-50%,-50%) scale(0.94); opacity:0.55; } 50% { transform:translate(-50%,-50%) scale(1.08); opacity:0.75; } }
    .cta-section > .container { position:relative; z-index:1; }
    .cta-section h2 { font-family:'Syne',sans-serif; font-size:clamp(34px,4vw,50px); font-weight:700; letter-spacing:-0.01em; line-height:1.1; margin-bottom:16px; color:var(--white); }
    .cta-section p { font-size:17px; color:var(--gray-2); max-width:480px; margin:0 auto 32px; line-height:1.75; }

    /* ─── FOOTER ──────────────────────────────────────────── */
    .footer { background:var(--bg-2); border-top:0.5px solid var(--border); padding:64px 0 40px; }
    .footer-grid { display:grid; grid-template-columns:2fr 1fr 1fr 1fr 1fr; gap:40px; margin-bottom:48px; }
    .footer-brand img { height:26px; margin-bottom:16px; display:block; }
    .footer-brand p { font-size:13px; color:var(--gray-3); line-height:1.6; max-width:200px; }
    .footer-col-title { font-family:'JetBrains Mono',monospace; font-size:10px; font-weight:600; letter-spacing:0.12em; text-transform:uppercase; color:var(--amber); margin-bottom:16px; }
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

    /* ─── FADE-IN ─────────────────────────────────────────── */
    .fade-in { opacity:0; transform:translateY(24px); transition:opacity 0.7s cubic-bezier(0.22,1,0.36,1),transform 0.7s cubic-bezier(0.22,1,0.36,1); }
    .fade-in.visible { opacity:1; transform:translateY(0); }
    @media (prefers-reduced-motion:reduce) { .fade-in { opacity:1 !important; transform:none !important; transition:none !important; } }

    /* ─── RESPONSIVE ──────────────────────────────────────── */
    @media (max-width:960px) { .blog-grid { grid-template-columns:repeat(2,1fr); } .blog-featured { grid-template-columns:1fr; } .blog-featured-thumb { min-height:200px; font-size:64px; } }
    @media (max-width:768px) { .nav-links,.nav-right { display:none; } .nav-hamburger { display:flex; } .footer-grid { grid-template-columns:1fr 1fr; } }
    @media (max-width:640px) { .blog-grid { grid-template-columns:1fr; } .footer-grid { grid-template-columns:1fr; } .footer-bottom { flex-direction:column; gap:16px; text-align:center; } }
`;

const PAGE_JS = `
(function() {
  // Nav scroll
  var nav = document.getElementById('main-nav');
  window.addEventListener('scroll', function(){ nav.classList.toggle('scrolled', window.scrollY > 60); }, { passive:true });

  // Nav dropdowns
  document.querySelectorAll('.nav-link-toggle').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      var li = this.parentElement, wasOpen = li.classList.contains('open');
      document.querySelectorAll('.nav-links > li').forEach(function(l){ l.classList.remove('open'); });
      if (!wasOpen) li.classList.add('open');
    });
  });
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.nav-links')) document.querySelectorAll('.nav-links > li').forEach(function(l){ l.classList.remove('open'); });
  });

  // Mobile nav
  var hbg = document.getElementById('hamburger'), mNav = document.getElementById('mobile-nav');
  if (hbg) hbg.addEventListener('click', function() {
    this.classList.toggle('open'); mNav.classList.toggle('open');
    document.body.style.overflow = mNav.classList.contains('open') ? 'hidden' : '';
  });
  document.querySelectorAll('.mobile-nav-toggle').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var sub = document.getElementById(this.dataset.target);
      this.classList.toggle('open'); if (sub) sub.classList.toggle('open');
    });
  });

  // Filter
  var filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      filterBtns.forEach(function(b){ b.classList.remove('active'); });
      this.classList.add('active');
      var cat = this.dataset.cat;
      document.querySelectorAll('.blog-card').forEach(function(card) {
        card.classList.toggle('hidden', cat !== 'all' && card.dataset.cat !== cat);
      });
    });
  });

  // Scroll reveal
  var targets = document.querySelectorAll('.blog-card, .blog-featured, .cta-section');
  var io = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); io.unobserve(entry.target); }
    });
  }, { threshold: 0.08, rootMargin:'0px 0px -32px 0px' });
  targets.forEach(function(el){ el.classList.add('fade-in'); io.observe(el); });
})();
`;

const POSTS = [
  {
    slug: "why-factoring-software-is-15-years-behind",
    category: "industry",
    categoryLabel: "Industry",
    icon: "🏭",
    title: "Why Factoring Software Is 15 Years Behind — And What's Changing",
    excerpt: "The factoring industry has relied on the same software paradigms since the early 2000s. Here's why that's finally changing, and what modern looks like.",
    date: "Mar 2025",
    readingTime: 8,
    author: "Jorge Santibañez",
    featured: true,
  },
  {
    slug: "5-ways-to-cut-manual-data-entry",
    category: "operations",
    categoryLabel: "Operations",
    icon: "⚡",
    title: "5 Ways to Cut Manual Data Entry by 80% in Your Factoring Operation",
    excerpt: "AI-powered OCR is the biggest lever, but there are four other workflow changes that compound the effect. Here's the full playbook.",
    date: "Feb 2025",
    readingTime: 6,
    author: "Maria Chen",
    featured: false,
  },
  {
    slug: "the-connected-factoring-stack",
    category: "industry",
    categoryLabel: "Industry",
    icon: "🔗",
    title: "The Connected Factoring Stack: Why Integration Is the New Moat",
    excerpt: "The factors winning in 2025 aren't the ones with the lowest rates — they're the ones with the most connected technology stack. Here's what that means.",
    date: "Dec 2024",
    readingTime: 10,
    author: "Jorge Santibañez",
    featured: false,
  },
];

const featuredPost = POSTS.find((p) => p.featured)!;
const otherPosts = POSTS.filter((p) => !p.featured);

export default function BlogPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />

      {/* ── NAV ── */}
      <nav className="nav" id="main-nav">
        <div className="nav-inner">
          <a href="/" className="nav-logo"><img src="/images/logo-nav.svg" alt="FactorCloud" /></a>
          <ul className="nav-links">
            <li>
              <a href="#" className="nav-link-toggle">
                Platform
                <svg className="chevron" viewBox="0 0 10 6"><polyline points="1 1 5 5 9 1"></polyline></svg>
              </a>
              <div className="nav-dropdown">
                <a href="/features/automation"><span className="dd-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFC84A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polyline></svg></span>Automation</a>
                <a href="/features/tracking"><span className="dd-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFC84A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg></span>Operations</a>
                <a href="/features/back-end"><span className="dd-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFC84A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg></span>Back-End</a>
                <a href="/features/client-portal"><span className="dd-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFC84A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></span>Client Portal</a>
                <a href="/features/ocr-automation"><span className="dd-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFC84A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path></svg></span>AI-Powered OCR</a>
                <a href="/features/open-api"><span className="dd-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFC84A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></span>Open API</a>
              </div>
            </li>
            <li><a href="/integrations">Integrations</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/resources">Resources</a></li>
            <li><a href="/blog" className="active">Blog</a></li>
            <li><a href="/about">About</a></li>
          </ul>
          <div className="nav-right">
            <a href="/get-demo" className="btn-primary nav-demo">Get a Demo</a>
            <button className="nav-hamburger" id="hamburger" aria-label="Menu"><span></span><span></span><span></span></button>
          </div>
        </div>
      </nav>

      {/* ── MOBILE NAV ── */}
      <div className="mobile-nav" id="mobile-nav">
        <div className="mobile-nav-section">
          <button className="mobile-nav-toggle" data-target="m-platform">
            Platform <svg className="chevron" width="16" height="16" viewBox="0 0 10 6"><polyline points="1 1 5 5 9 1"></polyline></svg>
          </button>
          <div className="mobile-nav-sub" id="m-platform">
            <a href="/features/automation">Automation</a>
            <a href="/features/tracking">Operations</a>
            <a href="/features/back-end">Back-End</a>
            <a href="/features/client-portal">Client Portal</a>
            <a href="/features/ocr-automation">AI-Powered OCR</a>
            <a href="/features/open-api">Open API</a>
          </div>
        </div>
        <a href="/integrations" className="mobile-nav-link">Integrations</a>
        <a href="/pricing" className="mobile-nav-link">Pricing</a>
        <a href="/resources" className="mobile-nav-link">Resources</a>
        <a href="/blog" className="mobile-nav-link">Blog</a>
        <a href="/about" className="mobile-nav-link">About</a>
        <div className="mobile-nav-cta"><a href="/get-demo" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>Get a Demo</a></div>
      </div>

      {/* ── HERO ── */}
      <section className="page-hero">
        <div className="page-hero-glow"></div>
        <div className="page-hero-inner">
          <span className="page-eyebrow">Blog</span>
          <h1>Insights for Modern Factors.</h1>
          <p className="page-hero-sub">Industry analysis, platform deep-dives, and operational playbooks from the FactorCloud team.</p>
        </div>
      </section>

      {/* ── FEATURED + GRID ── */}
      <section className="blog-section">
        <div className="container">

          {/* Featured */}
          <a href={`/blog/${featuredPost.slug}`} className="blog-featured">
            <div className="blog-featured-thumb">
              <span>{featuredPost.icon}</span>
            </div>
            <div className="blog-featured-body">
              <div className="blog-featured-tag">★ Featured</div>
              <div className={`blog-card-category cat-${featuredPost.category}`} style={{ marginBottom: "12px", fontFamily: "'JetBrains Mono',monospace", fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                {featuredPost.categoryLabel}
              </div>
              <h2 className="blog-featured-title">{featuredPost.title}</h2>
              <p className="blog-featured-excerpt">{featuredPost.excerpt}</p>
              <div className="blog-featured-meta">
                <span className="blog-featured-author">{featuredPost.author} · {featuredPost.date}</span>
                <span className="blog-featured-read">{featuredPost.readingTime} min read →</span>
              </div>
            </div>
          </a>

          {/* Filter bar */}
          <div className="filter-bar">
            {[
              { cat: "all", label: "All Posts" },
              { cat: "industry", label: "Industry" },
              { cat: "operations", label: "Operations" },
              { cat: "product", label: "Product" },
              { cat: "guides", label: "Guides" },
            ].map((f, i) => (
              <button key={f.cat} className={i === 0 ? "filter-btn active" : "filter-btn"} data-cat={f.cat}>
                {f.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="blog-grid">
            {otherPosts.map((post) => (
              <a key={post.slug} href={`/blog/${post.slug}`} className="blog-card" data-cat={post.category}>
                <div className="blog-card-thumb">
                  <span className="blog-card-thumb-icon">{post.icon}</span>
                </div>
                <div className="blog-card-body">
                  <div className={`blog-card-category cat-${post.category}`}>{post.categoryLabel}</div>
                  <div className="blog-card-title">{post.title}</div>
                  <div className="blog-card-excerpt">{post.excerpt}</div>
                  <div className="blog-card-footer">
                    <span className="blog-card-meta">{post.author} · {post.date} · {post.readingTime} min</span>
                    <span className="blog-card-arrow">Read →</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="container">
          <span className="page-eyebrow">See the Platform in Action</span>
          <h2>Don&apos;t Just Read About It.</h2>
          <p>Book a demo and see how FactorCloud puts these principles into practice every day.</p>
          <a href="/get-demo" className="btn-primary">Get a Demo</a>
        </div>
      </section>

      {/* ── FOOTER ── */}
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
                <li><a href="/features/tracking">Operations</a></li>
                <li><a href="/features/back-end">Back-End</a></li>
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
                <li><a href="/blog">Blog</a></li>
                <li><a href="/about/team">Team</a></li>
                <li><a href="/about/values">Values</a></li>
                <li><a href="/about/security">Security</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            <div>
              <div className="footer-col-title">Legal</div>
              <ul className="footer-links">
                <li><a href="/privacy-policy">Privacy Policy</a></li>
                <li><a href="/terms-and-conditions">Terms of Service</a></li>
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

      <Script id="blog-page" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: PAGE_JS }} />
    </>
  );
}

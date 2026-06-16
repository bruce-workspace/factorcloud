"use client";
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
    .nav-dropdown { position:absolute; top:calc(100% + 8px); left:0; background:var(--bg-3); border:0.5px solid var(--border); border-radius:2px; padding:8px; min-width:220px; opacity:0; pointer-events:none; transform:translateY(-6px); transition:transform 0.15s; box-shadow:0 24px 48px rgba(0,0,0,0.7); }
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

    /* FEAT LIST */
    .feat-list { list-style:none; margin:20px 0; }
    .feat-list li { display:flex; align-items:center; gap:14px; font-size:14px; font-weight:400; color:var(--gray-1); padding:12px 0; border-bottom:0.5px solid var(--border-dim); }
    .feat-list li:last-child { border-bottom:none; }
    .feat-list-tick { font-family:'JetBrains Mono', monospace; color:var(--amber); font-size:11px; flex-shrink:0; width:14px; }

    /* VIZ CARD */
    .viz-card { background:var(--bg-4); border:0.5px solid rgba(212,168,67,0.25); border-radius:2px; overflow:hidden; box-shadow:0 0 0 0.5px rgba(212,168,67,0.08),0 24px 48px rgba(0,0,0,0.6); }

    /* FORMS */
    .form-group { display:flex; flex-direction:column; gap:6px; margin-bottom:16px; }
    .form-group label { font-family:'JetBrains Mono', monospace; font-size:10px; font-weight:600; letter-spacing:0.08em; text-transform:uppercase; color:var(--gray-2); }
    .form-group input,.form-group select,.form-group textarea { background:var(--bg-4); border:0.5px solid var(--border); padding:12px 14px; font-size:14px; color:var(--white); font-family:'Inter', sans-serif; outline:none; border-radius:2px; transition:border-color 0.15s; }
    .form-group input:focus,.form-group select:focus,.form-group textarea:focus { border-color:rgba(212,168,67,0.4); }
    .form-group textarea { resize:vertical; min-height:110px; }
    .form-group select option { background:var(--bg-4); }
    .form-row { display:grid; grid-template-columns:1fr 1fr; gap:16px; }

    /* STAT BANNER (from home) */
    .stat-section { background:var(--bg-2); padding:60px 0; border-top:0.5px solid var(--border-dim); border-bottom:0.5px solid var(--border-dim); }
    .stat-inner { display:block; }
    .stat-banner { display:flex; align-items:center; justify-content:center; gap:48px; padding:40px 56px; border-radius:14px; border:1px solid rgba(255,255,255,0.08); background:rgba(255,255,255,0.015); box-shadow:0 0 0 0 rgba(255,255,255,0); margin:0 auto; max-width:1024px; animation:statBannerPulse 3.6s ease-in-out infinite; }
    @keyframes statBannerPulse {
      0%, 100% { border-color:rgba(255,255,255,0.08); box-shadow:0 0 0 0 rgba(255,255,255,0); }
      50%      { border-color:rgba(255,255,255,0.5); box-shadow:0 0 32px rgba(255,255,255,0.14); }
    }
    .stat-number { font-family:'Inter', sans-serif; font-size:clamp(88px,14vw,180px); color:var(--amber); line-height:0.9; letter-spacing:-0.04em; font-weight:600; white-space:nowrap; flex-shrink:0; }
    .stat-right { display:flex; flex-direction:column; gap:20px; flex:1; min-width:0; }
    .stat-label { font-family:'Syne', sans-serif; font-size:clamp(22px,2.6vw,34px); color:var(--gray-1); font-weight:400; letter-spacing:-0.01em; line-height:1.22; margin:0; }
    @media (max-width:820px) {
      .stat-banner { flex-direction:column; align-items:flex-start; gap:16px; padding:22px 14px; text-align:left; }
      .stat-number { font-size:clamp(120px,32vw,160px); line-height:0.88; }
      .stat-right { align-items:flex-start; width:100%; gap:18px; }
      .stat-label { font-size:24px; line-height:1.22; letter-spacing:-0.015em; max-width:none; }
    }
    .stat-marquee { display:flex; flex-direction:column; gap:10px; width:100%; overflow:hidden; -webkit-mask-image:linear-gradient(90deg,transparent 0%,#000 8%,#000 92%,transparent 100%); mask-image:linear-gradient(90deg,transparent 0%,#000 8%,#000 92%,transparent 100%); }
    .stat-marquee-row { display:flex; overflow:hidden; }
    .stat-marquee-track { display:inline-flex; flex-shrink:0; gap:10px; padding-right:10px; white-space:nowrap; animation:marqueeLeft 36s linear infinite; }
    .stat-marquee-row.reverse .stat-marquee-track { animation:marqueeRight 36s linear infinite; }
    .stat-marquee .stat-badge { flex-shrink:0; }
    @keyframes marqueeLeft  { from { transform:translateX(0); } to { transform:translateX(-50%); } }
    @keyframes marqueeRight { from { transform:translateX(-50%); } to { transform:translateX(0); } }
    .stat-badge { font-family:'Inter', sans-serif; font-size:11px; font-weight:600; letter-spacing:0.05em; text-transform:uppercase; color:var(--amber); padding:8px 16px; border:1px solid rgba(212,168,67,0.3); border-radius:2px; background:rgba(212,168,67,0.06); transition:background 0.2s,border-color 0.2s; }
    .stat-badge:hover { background:rgba(212,168,67,0.12); border-color:rgba(212,168,67,0.5); }

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
    @media (max-width:960px) {
      .footer-grid { grid-template-columns:1fr 1fr; gap:40px; }
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
      .footer-grid { grid-template-columns:1fr; }
      .footer-bottom { flex-direction:column; gap:16px; text-align:center; }
    }

    .demo-grid { display:grid; grid-template-columns:1fr 1fr; }
    @media (max-width:640px) { .demo-grid { grid-template-columns:1fr; } }

    /* Auto scroll reveal */
    .fade-in { opacity: 0; transform: translateY(28px); transition: opacity 0.85s cubic-bezier(0.22, 1, 0.36, 1), transform 0.85s cubic-bezier(0.22, 1, 0.36, 1); will-change: opacity, transform; }
    .fade-in.visible { opacity: 1; transform: translateY(0); }
    @media (prefers-reduced-motion: reduce) { .fade-in { opacity: 1 !important; transform: none !important; transition: none !important; } }
  `;
const PAGE_JS = `
(function(fn){if(document.readyState!=='loading')fn();else document.addEventListener('DOMContentLoaded',fn);})(function() {

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
    var targets = document.querySelectorAll('section, .page-hero, .viz-card, .feat-list > li');
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

const HEAR_ABOUT_OPTIONS = [
  { value: "search", label: "Search engine" },
  { value: "referral", label: "Referral" },
  { value: "social", label: "Social media" },
  { value: "event", label: "Event or conference" },
  { value: "other", label: "Other" },
];

const CONTACT_REASONS = [
  "A direct line to the team that ran a factoring operation first",
  "Answers on pricing, onboarding, and migration from your current system",
  "A walkthrough of BrightBolt, dual-ledger accounting, and the client portal",
  "Help connecting any of our 20+ pre-built integrations",
  "A response within one business day",
];

export default function PageContent() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    window.location.href = "/thank-you";
  }

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
      <li><a href="/blog">Blog</a></li>
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
  <a href="/blog" className="mobile-nav-link">Blog</a>
  <a href="/about" className="mobile-nav-link">About</a>
  <div className="mobile-nav-cta"><a href="/get-demo" className="btn-primary" style={{width: "100%", justifyContent: "center"}}>Get a Demo</a></div>
</div>
<section style={{padding: "140px 0 80px", position: "relative", overflow: "hidden"}}>
  <div style={{position: "absolute", inset: "0", backgroundImage: "linear-gradient(rgba(212,168,67,0.025) 1px,transparent 1px)", backgroundSize: "100% 48px", pointerEvents: "none", maskImage: "radial-gradient(ellipse 90% 80% at 50% 40%,black 0%,transparent 100%)", WebkitMaskImage: "radial-gradient(ellipse 90% 80% at 50% 40%,black 0%,transparent 100%)"}}></div>
  <div className="container" style={{position: "relative", zIndex: "2"}}>
    <div className="demo-grid" style={{gap: "80px", alignItems: "start"}}>
      <div>
        <span style={{fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", fontWeight: "500", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--amber)", display: "block", marginBottom: "16px"}}>Contact Us</span>
        <h1 style={{fontFamily: "'Syne', sans-serif", fontSize: "clamp(40px,5.5vw,64px)", fontWeight: "400", letterSpacing: "-0.02em", lineHeight: "1.1", marginBottom: "20px", color: "var(--white)"}}>Get in touch.</h1>
        <p style={{fontSize: "17px", color: "var(--gray-2)", lineHeight: "1.7", marginBottom: "32px"}}>Questions about FactorCloud, pricing, migration, or a specific workflow. Tell us what you need and the right person on our team will get back to you.</p>
        <ul className="feat-list" style={{marginTop: "0"}}>
          {CONTACT_REASONS.map((f, i) => (
            <li key={i}><span className="feat-list-tick">✓</span>{f}</li>
          ))}
        </ul>
      </div>
      <div>
        <div className="viz-card" style={{padding: "40px"}}>
          <h2 style={{fontFamily: "'Syne', sans-serif", fontSize: "26px", fontWeight: "700", marginBottom: "8px", color: "var(--white)"}}>Send us a message</h2>
          <p style={{fontSize: "14px", color: "var(--gray-2)", marginBottom: "28px"}}>Fill in the details below and we will get back to you within one business day.</p>
          <form id="demo-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group"><label htmlFor="firstName">First Name</label><input type="text" id="firstName" name="firstName" placeholder="Jane" required /></div>
              <div className="form-group"><label htmlFor="lastName">Last Name</label><input type="text" id="lastName" name="lastName" placeholder="Doe" required /></div>
            </div>
            <div className="form-group"><label htmlFor="company">Company</label><input type="text" id="company" name="company" placeholder="Your factoring company" required /></div>
            <div className="form-group"><label htmlFor="email">Work Email</label><input type="email" id="email" name="email" placeholder="jane@company.com" required /></div>
            <div className="form-group">
              <label htmlFor="hearAbout">How did you hear about us?</label>
              <select id="hearAbout" name="hearAbout" defaultValue="">
                <option value="">Select an option</option>
                {HEAR_ABOUT_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>
            <div className="form-group"><label htmlFor="comments">How can we help?</label><textarea id="comments" name="comments" placeholder="Tell us about your operation, current software, or what you need." required></textarea></div>
            <button type="submit" className="btn-primary" style={{width: "100%", justifyContent: "center", padding: "16px"}}>Send Message</button>
            <p style={{textAlign: "center", marginTop: "12px", fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "var(--gray-3)"}}>We respond within one business day.</p>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="stat-section">
  <div className="container">
    <div className="stat-inner">
      <div className="stat-banner">
        <div className="stat-number">94%</div>
        <div className="stat-right">
          <p className="stat-label">of teams that see FactorCloud make the switch.</p>
          <div className="stat-marquee" aria-hidden="true">
            <div className="stat-marquee-row">
              <div className="stat-marquee-track">
                <span className="stat-badge">Dual-Ledger</span>
                <span className="stat-badge">Auto Cash Application</span>
                <span className="stat-badge">Free Onboarding</span>
                <span className="stat-badge">45+ Developers</span>
                <span className="stat-badge">SOC2 Compliant</span>
                <span className="stat-badge">Dual-Ledger</span>
                <span className="stat-badge">Auto Cash Application</span>
                <span className="stat-badge">Free Onboarding</span>
                <span className="stat-badge">45+ Developers</span>
                <span className="stat-badge">SOC2 Compliant</span>
              </div>
            </div>
            <div className="stat-marquee-row reverse">
              <div className="stat-marquee-track">
                <span className="stat-badge">SOC2 Compliant</span>
                <span className="stat-badge">45+ Developers</span>
                <span className="stat-badge">Free Onboarding</span>
                <span className="stat-badge">Auto Cash Application</span>
                <span className="stat-badge">Dual-Ledger</span>
                <span className="stat-badge">SOC2 Compliant</span>
                <span className="stat-badge">45+ Developers</span>
                <span className="stat-badge">Free Onboarding</span>
                <span className="stat-badge">Auto Cash Application</span>
                <span className="stat-badge">Dual-Ledger</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
      <Script id="page-contact" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: PAGE_JS }} />
    </>
  );
}

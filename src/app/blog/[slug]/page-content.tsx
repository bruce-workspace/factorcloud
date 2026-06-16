"use client";
import Script from "next/script";

const PAGE_CSS = `
    html, body { overflow-x: hidden; }
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --bg:#07070A; --bg-2:#030305; --bg-3:#121216; --bg-4:#1A1A1E; --bg-5:#22222A;
      --amber:#FFC84A; --amber-hover:#C49A35; --amber-dim:rgba(255,200,74,0.22); --amber-faint:rgba(255,200,74,0.08);
      --white:#FFFFFF; --gray-1:#F0E8D8; --gray-2:#D4C9B2; --gray-3:#9E937B;
      --border:rgba(255,200,74,0.18); --border-dim:rgba(255,200,74,0.10);
      --green:#27AE60;
    }
    html { scroll-behavior:smooth; }
    body { background:var(--bg); color:var(--white); font-family:'Inter',-apple-system,BlinkMacSystemFont,sans-serif; font-size:15px; line-height:1.7; -webkit-font-smoothing:antialiased; }

    .nav { position:fixed; top:0; left:0; right:0; z-index:1000; height:64px; display:flex; align-items:center; border-bottom:0.5px solid transparent; transition:background 0.3s,border-color 0.3s; }
    .nav.scrolled { background:rgba(7,7,10,0.94); border-color:var(--border); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px); }
    .nav-inner { display:flex; align-items:center; justify-content:space-between; width:100%; max-width:1360px; margin:0 auto; padding:0 24px; }
    .nav-logo img { height:30px; display:block; }
    .nav-links { display:flex; align-items:center; gap:4px; list-style:none; }
    .nav-links > li { position:relative; }
    .nav-links > li > a { display:flex; align-items:center; gap:4px; font-family:'JetBrains Mono',monospace; font-size:11px; font-weight:500; letter-spacing:0.06em; text-transform:uppercase; color:var(--gray-2); text-decoration:none; padding:8px 12px; border-radius:2px; transition:color 0.15s,background 0.15s; }
    .nav-links > li > a:hover { color:var(--white); background:rgba(255,200,74,0.04); }
    .nav-links > li > a.active { color:var(--amber); }
    .nav-links > li > a .chevron { width:10px; height:10px; stroke:currentColor; fill:none; stroke-width:2; stroke-linecap:round; stroke-linejoin:round; transition:transform 0.2s; }
    .nav-links > li.open > a .chevron { transform:rotate(180deg); }
    .nav-dropdown { position:absolute; top:calc(100% + 8px); left:0; background:var(--bg-3); border:0.5px solid var(--border); border-radius:2px; padding:8px; min-width:220px; opacity:0; pointer-events:none; transform:translateY(-6px); transition:transform 0.15s; box-shadow:0 24px 48px rgba(0,0,0,0.7); }
    .nav-links > li.open .nav-dropdown { opacity:1; pointer-events:auto; transform:translateY(0); }
    .nav-dropdown a { display:flex; align-items:center; gap:10px; font-family:'JetBrains Mono',monospace; font-size:11px; color:var(--gray-2); text-decoration:none; padding:9px 12px; border-radius:2px; transition:background 0.12s,color 0.12s; }
    .nav-dropdown a:hover { background:rgba(255,200,74,0.06); color:var(--white); }
    .nav-dropdown a .dd-icon { width:26px; height:26px; background:var(--amber-faint); border:0.5px solid var(--border-dim); border-radius:2px; display:flex; align-items:center; justify-content:center; flex-shrink:0; font-size:12px; }
    .nav-right { display:flex; align-items:center; gap:16px; }
    .nav-hamburger { display:none; flex-direction:column; gap:5px; cursor:pointer; padding:4px; background:none; border:none; }
    .nav-hamburger span { width:22px; height:1.5px; background:var(--gray-2); transition:transform 0.25s,opacity 0.25s; }
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

    .btn-primary { display:inline-flex; align-items:center; justify-content:center; background:var(--amber); color:#0A0A08; font-family:'Syne',sans-serif; font-size:14px; font-weight:700; letter-spacing:0.06em; text-transform:uppercase; padding:11px 22px; border-radius:2px; text-decoration:none; border:none; cursor:pointer; transition:background 0.2s,transform 0.15s; white-space:nowrap; }
    .btn-primary:hover { background:var(--amber-hover); transform:translateY(-1px); }

    .container { max-width:1360px; margin:0 auto; padding:0 24px; }
    .post-header { padding:140px 0 64px; position:relative; overflow:hidden; }
    .post-header::before { content:''; position:absolute; inset:0; background-image:linear-gradient(rgba(255,200,74,0.02) 1px,transparent 1px); background-size:100% 48px; pointer-events:none; mask-image:radial-gradient(ellipse 80% 70% at 50% 30%,black 0%,transparent 100%); -webkit-mask-image:radial-gradient(ellipse 80% 70% at 50% 30%,black 0%,transparent 100%); }
    .post-header-glow { position:absolute; top:0; left:50%; transform:translateX(-50%); width:700px; height:350px; background:radial-gradient(ellipse at center,rgba(255,200,74,0.04) 0%,transparent 65%); pointer-events:none; }
    .post-header-inner { position:relative; z-index:2; max-width:760px; margin:0 auto; padding:0 24px; }
    .post-breadcrumb { display:flex; align-items:center; gap:8px; margin-bottom:24px; }
    .post-breadcrumb a { font-family:'JetBrains Mono',monospace; font-size:11px; color:var(--gray-3); text-decoration:none; transition:color 0.15s; }
    .post-breadcrumb a:hover { color:var(--amber); }
    .post-breadcrumb-sep { font-family:'JetBrains Mono',monospace; font-size:11px; color:var(--gray-3); }
    .post-eyebrow { font-family:'JetBrains Mono',monospace; font-size:10px; font-weight:600; letter-spacing:0.16em; text-transform:uppercase; color:var(--amber); display:block; margin-bottom:20px; }
    .post-title { font-family:'Syne',sans-serif; font-size:clamp(32px,5vw,56px); font-weight:700; letter-spacing:-0.02em; line-height:1.1; color:var(--white); margin-bottom:24px; }
    .post-meta-row { display:flex; align-items:center; gap:20px; flex-wrap:wrap; padding-top:24px; border-top:0.5px solid var(--border-dim); }
    .post-author { display:flex; align-items:center; gap:10px; }
    .post-author-avatar { width:36px; height:36px; border-radius:50%; background:rgba(255,200,74,0.08); border:0.5px solid var(--border); display:flex; align-items:center; justify-content:center; font-size:14px; flex-shrink:0; }
    .post-author-name { font-size:14px; font-weight:500; color:var(--gray-1); }
    .post-author-role { font-family:'JetBrains Mono',monospace; font-size:10px; color:var(--gray-3); text-transform:uppercase; letter-spacing:0.06em; }
    .post-meta-divider { width:1px; height:24px; background:var(--border-dim); }
    .post-meta-item { font-family:'JetBrains Mono',monospace; font-size:11px; color:var(--gray-3); }

    .post-cover { max-width:900px; margin:0 auto; padding:0 24px 64px; }
    .post-cover-inner { background:var(--bg-4); border:0.5px solid var(--border); border-radius:2px; height:360px; display:flex; align-items:center; justify-content:center; font-size:96px; position:relative; overflow:hidden; }
    .post-cover-inner::after { content:''; position:absolute; inset:0; background:radial-gradient(ellipse at center,rgba(255,200,74,0.05) 0%,transparent 70%); }

    .post-layout { display:grid; grid-template-columns:1fr 280px; gap:64px; max-width:1100px; margin:0 auto; padding:0 24px 120px; align-items:start; }
    .post-body { min-width:0; }
    .post-body h2 { font-family:'Syne',sans-serif; font-size:clamp(22px,2.5vw,28px); font-weight:700; letter-spacing:-0.01em; color:var(--white); margin:48px 0 16px; line-height:1.25; }
    .post-body h3 { font-size:18px; font-weight:600; color:var(--white); margin:32px 0 12px; line-height:1.3; }
    .post-body p { color:var(--gray-2); line-height:1.8; font-size:16px; margin-bottom:20px; }
    .post-body strong { color:var(--gray-1); font-weight:600; }
    .post-body ul, .post-body ol { padding-left:20px; margin-bottom:20px; }
    .post-body li { color:var(--gray-2); line-height:1.8; font-size:16px; margin-bottom:8px; }
    .post-body li::marker { color:var(--amber); }
    .post-body blockquote { border-left:2px solid var(--amber); padding:20px 28px; margin:36px 0; background:var(--bg-4); border-radius:0 2px 2px 0; }
    .post-body blockquote p { color:var(--gray-1); font-size:17px; font-style:italic; margin:0; }
    .post-body a { color:var(--amber); text-decoration:underline; text-underline-offset:3px; }
    .post-body a:hover { color:var(--amber-hover); }

    .post-sidebar { position:sticky; top:88px; }
    .sidebar-card { background:var(--bg-4); border:0.5px solid var(--border); border-radius:2px; padding:24px; margin-bottom:16px; }
    .sidebar-label { font-family:'JetBrains Mono',monospace; font-size:10px; font-weight:600; letter-spacing:0.12em; text-transform:uppercase; color:var(--amber); margin-bottom:16px; }
    .sidebar-tags { display:flex; flex-wrap:wrap; gap:8px; }
    .sidebar-tag { font-family:'JetBrains Mono',monospace; font-size:10px; font-weight:500; letter-spacing:0.06em; text-transform:uppercase; padding:5px 12px; border:0.5px solid var(--border); border-radius:2px; color:var(--gray-3); }
    .sidebar-related-item { display:block; text-decoration:none; padding:12px 0; border-bottom:0.5px solid var(--border-dim); }
    .sidebar-related-item:last-child { border-bottom:none; padding-bottom:0; }
    .sidebar-related-cat { font-family:'JetBrains Mono',monospace; font-size:10px; color:var(--amber); text-transform:uppercase; letter-spacing:0.08em; margin-bottom:4px; }
    .sidebar-related-title { font-size:13px; font-weight:500; color:var(--gray-1); line-height:1.4; transition:color 0.15s; }
    .sidebar-related-item:hover .sidebar-related-title { color:var(--amber); }
    .sidebar-cta { background:rgba(255,200,74,0.05); border:0.5px solid rgba(255,200,74,0.2); border-radius:2px; padding:24px; text-align:center; }
    .sidebar-cta p { font-size:14px; color:var(--gray-2); line-height:1.6; margin-bottom:16px; }

    .post-footer-tags { display:flex; align-items:center; gap:12px; flex-wrap:wrap; padding:24px 0; border-top:0.5px solid var(--border); border-bottom:0.5px solid var(--border); margin-bottom:48px; }
    .post-footer-tags-label { font-family:'JetBrains Mono',monospace; font-size:10px; font-weight:600; letter-spacing:0.1em; text-transform:uppercase; color:var(--gray-3); }
    .post-tag { font-family:'JetBrains Mono',monospace; font-size:10px; padding:5px 12px; border:0.5px solid var(--border); border-radius:2px; color:var(--gray-3); }
    .post-nav { display:grid; grid-template-columns:1fr 1fr; gap:24px; margin-bottom:80px; }
    .post-nav-card { background:var(--bg-4); border:0.5px solid var(--border); border-radius:2px; padding:24px; text-decoration:none; color:inherit; transition:border-color 0.2s; }
    .post-nav-card:hover { border-color:rgba(255,200,74,0.35); }
    .post-nav-dir { font-family:'JetBrains Mono',monospace; font-size:10px; color:var(--gray-3); text-transform:uppercase; letter-spacing:0.08em; margin-bottom:8px; }
    .post-nav-title { font-size:14px; font-weight:500; color:var(--gray-1); line-height:1.4; }

    .cta-section { padding:120px 0; text-align:center; border-top:0.5px solid var(--border); position:relative; overflow:hidden; background:var(--bg-2); }
    .cta-section::before { content:''; position:absolute; top:50%; left:50%; width:460px; height:340px; transform:translate(-50%,-50%); background:radial-gradient(ellipse at center,rgba(255,200,74,0.14) 0%,transparent 70%); filter:blur(36px); pointer-events:none; }
    .cta-section > .container { position:relative; z-index:1; }
    .cta-section h2 { font-family:'Syne',sans-serif; font-size:clamp(30px,4vw,46px); font-weight:700; letter-spacing:-0.01em; line-height:1.1; margin-bottom:16px; color:var(--white); }
    .cta-section p { font-size:16px; color:var(--gray-2); max-width:460px; margin:0 auto 32px; line-height:1.75; }
    .page-eyebrow { font-family:'JetBrains Mono',monospace; font-size:10px; font-weight:500; letter-spacing:0.16em; text-transform:uppercase; color:var(--amber); display:block; margin-bottom:20px; }

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
    .footer-social { display:flex; gap:12px; }
    .footer-social a { width:32px; height:32px; border-radius:2px; border:0.5px solid var(--border-dim); color:var(--gray-3); display:flex; align-items:center; justify-content:center; text-decoration:none; transition:color 0.15s,border-color 0.15s; }
    .footer-social a:hover { border-color:var(--border); color:var(--amber); }

    @media (max-width:900px) { .post-layout { grid-template-columns:1fr; } .post-sidebar { position:static; } .post-nav { grid-template-columns:1fr; } }
    @media (max-width:768px) { .nav-links,.nav-right { display:none; } .nav-hamburger { display:flex; } .footer-grid { grid-template-columns:1fr 1fr; } }
    @media (max-width:640px) { .footer-grid { grid-template-columns:1fr; } .footer-bottom { flex-direction:column; gap:16px; text-align:center; } }
`;

const PAGE_JS = `
(function(fn){if(document.readyState!=='loading')fn();else document.addEventListener('DOMContentLoaded',fn);})(function() {
  var nav = document.getElementById('main-nav');
  window.addEventListener('scroll', function(){ nav.classList.toggle('scrolled', window.scrollY > 60); }, { passive:true });
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
});
`;

type Post = {
  category: string; categoryLabel: string; icon: string;
  title: string; date: string; readingTime: number;
  author: string; authorRole: string; tags: string[];
  body: string; related: { slug: string; category: string; title: string }[];
};

export default function BlogPostContent({ post }: { post: Post }) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />

      <nav className="nav" id="main-nav">
        <div className="nav-inner">
          <a href="/" className="nav-logo"><img src="/images/logo-nav.svg" alt="FactorCloud" /></a>
          <ul className="nav-links">
            <li>
              <a href="#" className="nav-link-toggle">Platform
                <svg className="chevron" viewBox="0 0 10 6"><polyline points="1 1 5 5 9 1"></polyline></svg>
              </a>
              <div className="nav-dropdown">
                <a href="/features/automation"><span className="dd-icon">⚡</span>Automation</a>
                <a href="/features/tracking"><span className="dd-icon">📊</span>Operations</a>
                <a href="/features/back-end"><span className="dd-icon">🗂️</span>Back-End</a>
                <a href="/features/client-portal"><span className="dd-icon">🔑</span>Client Portal</a>
                <a href="/features/ocr-automation"><span className="dd-icon">🤖</span>AI-Powered OCR</a>
                <a href="/features/open-api"><span className="dd-icon">⚙️</span>Open API</a>
              </div>
            </li>
            <li><a href="/integrations">Integrations</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/resources">Resources</a></li>
            <li><a href="/blog" className="active">Blog</a></li>
            <li><a href="/about">About</a></li>
          </ul>
          <div className="nav-right">
            <a href="/get-demo" className="btn-primary" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", padding: "9px 20px", letterSpacing: "0.06em" }}>Get a Demo</a>
            <button className="nav-hamburger" id="hamburger" aria-label="Menu"><span></span><span></span><span></span></button>
          </div>
        </div>
      </nav>

      <div className="mobile-nav" id="mobile-nav">
        <div className="mobile-nav-section">
          <button className="mobile-nav-toggle" data-target="m-platform">Platform
            <svg className="chevron" width="16" height="16" viewBox="0 0 10 6"><polyline points="1 1 5 5 9 1"></polyline></svg>
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

      <header className="post-header">
        <div className="post-header-glow"></div>
        <div className="post-header-inner">
          <nav className="post-breadcrumb">
            <a href="/blog">Blog</a>
            <span className="post-breadcrumb-sep">/</span>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "11px", color: "var(--gray-3)" }}>{post.categoryLabel}</span>
          </nav>
          <span className="post-eyebrow">{post.categoryLabel}</span>
          <h1 className="post-title">{post.title}</h1>
          <div className="post-meta-row">
            <div className="post-author">
              <div className="post-author-avatar">👤</div>
              <div>
                <div className="post-author-name">{post.author}</div>
                <div className="post-author-role">{post.authorRole}</div>
              </div>
            </div>
            <div className="post-meta-divider"></div>
            <span className="post-meta-item">{post.date}</span>
            <div className="post-meta-divider"></div>
            <span className="post-meta-item">{post.readingTime} min read</span>
          </div>
        </div>
      </header>

      <div className="post-cover">
        <div className="post-cover-inner">
          <span style={{ position: "relative", zIndex: 1 }}>{post.icon}</span>
        </div>
      </div>

      <div className="post-layout">
        <article>
          <div className="post-body" dangerouslySetInnerHTML={{ __html: post.body }} />
          <div className="post-footer-tags">
            <span className="post-footer-tags-label">Tags</span>
            {post.tags.map((t) => <span key={t} className="post-tag">{t}</span>)}
          </div>
          <div className="post-nav">
            <a href="/blog" className="post-nav-card">
              <div className="post-nav-dir">← Back to Blog</div>
              <div className="post-nav-title">All posts</div>
            </a>
            {post.related[0] && (
              <a href={`/blog/${post.related[0].slug}`} className="post-nav-card" style={{ textAlign: "right" }}>
                <div className="post-nav-dir">Next →</div>
                <div className="post-nav-title">{post.related[0].title}</div>
              </a>
            )}
          </div>
        </article>

        <aside className="post-sidebar">
          <div className="sidebar-card">
            <div className="sidebar-label">Tags</div>
            <div className="sidebar-tags">
              {post.tags.map((t) => <span key={t} className="sidebar-tag">{t}</span>)}
            </div>
          </div>
          {post.related.length > 0 && (
            <div className="sidebar-card">
              <div className="sidebar-label">Related Posts</div>
              {post.related.map((r) => (
                <a key={r.slug} href={`/blog/${r.slug}`} className="sidebar-related-item">
                  <div className="sidebar-related-cat">{r.category}</div>
                  <div className="sidebar-related-title">{r.title}</div>
                </a>
              ))}
            </div>
          )}
          <div className="sidebar-cta">
            <div className="sidebar-label" style={{ marginBottom: "12px" }}>Ready to See It?</div>
            <p>See how FactorCloud puts these ideas into practice every day.</p>
            <a href="/get-demo" className="btn-primary" style={{ width: "100%", justifyContent: "center", fontSize: "12px", marginTop: "4px" }}>Get a Demo</a>
          </div>
        </aside>
      </div>

      <section className="cta-section">
        <div className="container">
          <span className="page-eyebrow">See the Platform in Action</span>
          <h2>Don&apos;t Just Read About It.</h2>
          <p>Book a demo and see how FactorCloud puts these principles into practice every day.</p>
          <a href="/get-demo" className="btn-primary">Get a Demo</a>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <img src="/images/logo-nav.svg" alt="FactorCloud" />
              <p>Dual-ledger precision, automated cash application, 20+ integrations.</p>
            </div>
            <div>
              <div className="footer-col-title">Platform</div>
              <ul className="footer-links">
                <li><a href="/features/automation">Automation</a></li>
                <li><a href="/features/tracking">Operations</a></li>
                <li><a href="/features/back-end">Back-End</a></li>
                <li><a href="/features/client-portal">Client Portal</a></li>
              </ul>
            </div>
            <div>
              <div className="footer-col-title">Integrations</div>
              <ul className="footer-links">
                <li><a href="/integrations/tank">Tank Payments</a></li>
                <li><a href="/integrations/quickbooks">QuickBooks</a></li>
                <li><a href="/integrations/ansonia">Ansonia</a></li>
                <li><a href="/integrations">All Integrations</a></li>
              </ul>
            </div>
            <div>
              <div className="footer-col-title">Company</div>
              <ul className="footer-links">
                <li><a href="/about">About</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/about/team">Team</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            <div>
              <div className="footer-col-title">Legal</div>
              <ul className="footer-links">
                <li><a href="/privacy-policy">Privacy Policy</a></li>
                <li><a href="/terms-and-conditions">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span className="footer-copy">© 2025 FactorCloud. All rights reserved.</span>
            <div className="footer-social">
              <a href="https://linkedin.com/company/factorcloud" aria-label="LinkedIn" target="_blank" rel="noopener">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      <Script id="blog-post" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: PAGE_JS }} />
    </>
  );
}

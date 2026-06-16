// AUTO-GENERATED from index.html by scripts/migrate-html.mjs.
// Copy is sourced from /content/pages/{locale}/home.mdx — edit there, not here.
import { Fragment } from "react";
import type { Metadata } from "next";
import Script from "next/script";
import { loadPage } from "@/lib/content";
import { getMetadata } from "@/lib/seo";
import type { HomeFrontmatter } from "@/lib/content-types";

const LOCALE = "en" as const;

export function generateMetadata(): Metadata {
  const { frontmatter } = loadPage<HomeFrontmatter>("home", LOCALE);
  return getMetadata({ page: "home", locale: LOCALE, override: frontmatter.seo });
}

const PAGE_CSS = `
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --bg:       #07070A;
      --bg-2:     #030305;
      --bg-3:     #121216;
      --bg-4:     #1A1A1E;
      --bg-5:     #22222A;
      --amber:    #FFC84A;
      --amber-bright: #FFD868;
      --amber-dim: rgba(255,200,74,0.22);
      --amber-faint: rgba(255,200,74,0.08);
      --white:    #FFFFFF;
      --gray-1:   #F0E8D8;
      --gray-2:   #D4C9B2;
      --gray-3:   #9E937B;
      --border:   rgba(255,200,74,0.18);
      --border-dim: rgba(255,200,74,0.10);
      --green:    #27AE60;
      --red:      #C0392B;
    }

    html { scroll-behavior: smooth; }

    @font-face {
      font-family: 'Syne';
      src: url('/images/fonts/Syne/Syne-Regular.ttf') format('truetype');
      font-weight: 400;
      font-style: normal;
      font-display: swap;
    }
    @font-face {
      font-family: 'Syne';
      src: url('/images/fonts/Syne/Syne-Bold.ttf') format('truetype');
      font-weight: 700;
      font-style: normal;
      font-display: swap;
    }

    *, *::before, *::after { box-sizing: border-box; }
    html, body { overflow-x: hidden; }
    body {
      background: var(--bg);
      color: var(--white);
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      font-size: 15px;
      line-height: 1.7;
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
    }

    /* ─── TYPOGRAPHY ─────────────────────────────────────── */
    .serif { font-family: 'Syne', sans-serif; }
    .mono  { font-family: 'Inter', sans-serif; }

    .overline {
      font-family: 'Inter', sans-serif;
      font-size: 10px;
      font-weight: 500;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--gray-2);
      display: block;
      margin-bottom: 16px;
    }

    h1, h2, h3 { font-weight: 400; }
    h1 { font-family: 'Syne', 'Syne', sans-serif; font-weight: 700; }
    h2 { font-family: 'Syne', sans-serif; font-weight: 700; font-size: clamp(34px, 4vw, 50px); letter-spacing: -0.01em; line-height: 1.1; color: var(--white); }
    h3 { font-size: 17px; font-weight: 600; font-family: 'Inter', sans-serif; line-height: 1.35; }
    p  { color: var(--gray-2); line-height: 1.75; }

    .container { width: 100%; max-width: 1360px; margin: 0 auto; padding: 0 24px; box-sizing: border-box; }

    /* ─── HAIRLINE RULE ──────────────────────────────────── */
    hr {
      border: none;
      border-top: 0.5px solid var(--border);
    }

    /* ─── BUTTONS ────────────────────────────────────────── */
    .btn-primary {
      display: inline-flex; align-items: center; justify-content: center;
      background: var(--amber);
      color: #0A0A08;
      font-family: 'Syne', 'Inter', sans-serif;
      font-size: 14px; font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      padding: 11px 22px;
      border-radius: 2px;
      text-decoration: none;
      border: none; cursor: pointer;
      transition: background 0.2s, transform 0.15s;
      white-space: nowrap;
    }
    .btn-primary:hover { background: #C49A35; transform: translateY(-1px); }

    .btn-ghost {
      display: inline-flex; align-items: center; justify-content: center;
      background: transparent;
      color: var(--gray-1);
      font-family: 'Syne', 'Inter', sans-serif;
      font-size: 14px; font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      padding: 11px 22px;
      border-radius: 2px;
      text-decoration: none;
      border: 1px solid var(--border);
      transition: border-color 0.2s, color 0.2s, transform 0.15s;
      white-space: nowrap;
    }
    .btn-ghost:hover { border-color: rgba(212,168,67,0.4); color: var(--amber); transform: translateY(-1px); }

    /* ─── NAV ────────────────────────────────────────────── */
    .nav {
      position: fixed; top: 36px; left: 0; right: 0; z-index: 1000;
      height: 64px;
      display: flex; align-items: center;
      background: rgba(10,10,8,0.96);
      border-bottom: 0.5px solid rgba(212,168,67,0.12);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      transition: background 0.3s, border-color 0.3s;
    }
    .nav.scrolled {
      background: rgba(10,10,8,0.94);
      border-color: rgba(212,168,67,0.15);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
    }
    .nav-inner {
      display: flex; align-items: center; justify-content: space-between;
      width: 100%; max-width: 1360px; margin: 0 auto; padding: 0 24px;
    }
    .nav-logo img { height: 30px; display: block; }
    .nav-links { display: flex; align-items: center; gap: 4px; list-style: none; }
    .nav-links > li { position: relative; }
    .nav-links > li > a {
      display: flex; align-items: center; gap: 3px;
      font-family: 'Inter', sans-serif;
      font-size: 11px; font-weight: 500;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: var(--gray-2);
      text-decoration: none;
      padding: 6px 10px;
      border-radius: 2px;
      transition: color 0.15s, background 0.15s;
    }
    .nav-links > li > a:hover { color: var(--white); background: rgba(212,168,67,0.04); }
    .nav-links > li > a .chevron {
      width: 10px; height: 10px;
      stroke: currentColor; fill: none; stroke-width: 2;
      stroke-linecap: round; stroke-linejoin: round;
      transition: transform 0.2s;
    }
    .nav-links > li.open > a .chevron { transform: rotate(180deg); }

    .nav-dropdown {
      position: absolute; top: calc(100% + 8px); left: 0;
      background: var(--bg-3) !important;
      border: 0.5px solid var(--border) !important;
      border-radius: 2px !important;
      padding: 8px !important;
      min-width: 220px;
      opacity: 0; pointer-events: none;
      visibility: hidden;
      transform: translateY(-6px);
      transition: transform 0.15s !important;
      box-shadow: 0 24px 48px rgba(0,0,0,0.7);
      backdrop-filter: none !important;
      left: 0 !important;
    }
    .nav-links > li.open .nav-dropdown { opacity: 1 !important; pointer-events: auto !important; visibility: visible !important; transform: translateY(0) !important; }
    .nav-dropdown a {
      display: flex; align-items: center; gap: 10px;
      font-family: 'Inter', sans-serif;
      font-size: 11px; font-weight: 400;
      letter-spacing: 0.04em;
      color: var(--gray-2);
      text-decoration: none;
      padding: 9px 12px;
      border-radius: 2px;
      transition: background 0.12s, color 0.12s;
    }
    .nav-dropdown a:hover { background: rgba(212,168,67,0.06); color: var(--white); }
    .nav-dropdown a .dd-icon {
      width: 26px; height: 26px;
      background: var(--amber-faint);
      border: 0.5px solid var(--border-dim);
      border-radius: 2px;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
      font-size: 12px;
    }

    .nav-right { display: flex; align-items: center; gap: 16px; }
    .nav-demo { font-size: 13px; padding: 9px 18px; }

    .nav-hamburger {
      display: none; flex-direction: column; justify-content: center; gap: 6px;
      cursor: pointer; padding: 12px; background: rgba(212,168,67,0.1); border: 1px solid rgba(212,168,67,0.3);
      border-radius: 4px; min-width: 44px; min-height: 44px;
    }
    .nav-hamburger span {
      width: 22px; height: 2px; background: var(--amber); border-radius: 0;
      transition: transform 0.25s, opacity 0.25s;
      display: block;
    }
    .nav-hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(4px, 7px); }
    .nav-hamburger.open span:nth-child(2) { opacity: 0; }
    .nav-hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(4px, -7px); }

    .mobile-nav {
      display: none;
      position: fixed; top: 64px; left: 0; right: 0; bottom: 0;
      background: var(--bg);
      padding: 24px 32px 48px;
      overflow-y: auto;
      z-index: 999;
      border-top: 0.5px solid var(--border);
    }
    .mobile-nav.open { display: block; }
    .mobile-nav-section { margin-bottom: 8px; }
    .mobile-nav-toggle {
      display: flex; justify-content: space-between; align-items: center;
      font-family: 'Inter', sans-serif;
      font-size: 11px; font-weight: 600;
      letter-spacing: 0.08em; text-transform: uppercase;
      color: var(--gray-2);
      padding: 14px 0;
      border-bottom: 0.5px solid var(--border-dim);
      cursor: pointer; background: none; border: none; width: 100%;
      text-align: left;
    }
    .mobile-nav-toggle .chevron { transition: transform 0.2s; stroke: var(--gray-3); fill: none; stroke-width: 2; }
    .mobile-nav-toggle.open .chevron { transform: rotate(180deg); }
    .mobile-nav-sub { display: none; padding: 8px 0; }
    .mobile-nav-sub.open { display: block; }
    .mobile-nav-sub a {
      display: block;
      font-family: 'Inter', sans-serif;
      font-size: 11px; color: var(--gray-2);
      text-decoration: none; padding: 9px 0;
      border-bottom: 0.5px solid var(--border-dim);
    }
    .mobile-nav-link {
      display: block;
      font-family: 'Inter', sans-serif;
      font-size: 11px; font-weight: 600;
      letter-spacing: 0.08em; text-transform: uppercase;
      color: var(--gray-2);
      text-decoration: none;
      padding: 14px 0;
      border-bottom: 0.5px solid var(--border-dim);
    }
    .mobile-nav-cta { margin-top: 24px; }

    /* ─── HERO ───────────────────────────────────────────── */
    .hero {
      background: var(--bg);
      position: relative;
      padding: 160px 0 100px;
      min-height: auto;
      display: flex; align-items: center;
    }

    /* Animated amber mesh gradient hero background */
    .hero-glow {
      position: absolute;
      inset: 0;
      pointer-events: none;
      overflow: hidden;
    }
    .hero-glow::before,
    .hero-glow::after {
      content: '';
      position: absolute;
      border-radius: 50%;
      filter: blur(80px);
      pointer-events: none;
    }
    .hero-glow::before {
      width: 720px; height: 720px;
      top: -12%; right: -8%;
      background: radial-gradient(circle, rgba(232,181,71,0.22) 0%, rgba(232,181,71,0.06) 45%, transparent 75%);
      animation: heroMeshDrift1 18s ease-in-out infinite;
    }
    .hero-glow::after {
      width: 580px; height: 580px;
      bottom: -10%; left: -6%;
      background: radial-gradient(circle, rgba(232,181,71,0.14) 0%, rgba(232,181,71,0.03) 50%, transparent 75%);
      animation: heroMeshDrift2 22s ease-in-out infinite;
    }
    @keyframes heroMeshDrift1 {
      0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.9; }
      33%      { transform: translate(-8%, 6%) scale(1.08); opacity: 1; }
      66%      { transform: translate(4%, -4%) scale(0.95); opacity: 0.85; }
    }
    @keyframes heroMeshDrift2 {
      0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.85; }
      40%      { transform: translate(6%, -8%) scale(1.12); opacity: 1; }
      80%      { transform: translate(-4%, 3%) scale(0.92); opacity: 0.8; }
    }

    /* Modern dotted grid pattern */
    .hero::before {
      content: '';
      position: absolute; inset: 0;
      background-image:
        radial-gradient(circle, rgba(232,181,71,0.08) 1px, transparent 1px);
      background-size: 32px 32px;
      pointer-events: none;
      mask-image: radial-gradient(ellipse 100% 85% at 50% 45%, black 0%, black 40%, transparent 100%);
      -webkit-mask-image: radial-gradient(ellipse 100% 85% at 50% 45%, black 0%, black 40%, transparent 100%);
    }

    .hero-inner { position: relative; z-index: 2; width: 100%; }
    .hero-grid {
      display: grid;
      grid-template-columns: 54fr 46fr;
      gap: 16px; align-items: center;
    }

    .hero-overline {
      font-family: 'Inter', sans-serif;
      font-size: 10px; font-weight: 500;
      letter-spacing: 0.16em; text-transform: uppercase;
      color: var(--gray-2);
      margin-bottom: 20px; display: block;
    }

    .hero-h1 {
      font-family: 'Syne', 'Syne', sans-serif;
      font-size: clamp(36px, 4.7vw, 60px);
      font-weight: 700;
      letter-spacing: -0.015em;
      line-height: 1.08;
      margin-bottom: 28px;
      opacity: 1 !important;
    }
    .hero-h1 .h1-amber { color: var(--amber); }
    .hero-h1 .h1-white { color: var(--white); }

    .hero-sub {
      font-size: 16px; color: var(--gray-2);
      max-width: 480px; line-height: 1.6;
      margin-bottom: 20px;
    }

    .hero-props { list-style: none; margin-bottom: 24px; }
    .hero-prop {
      display: flex; align-items: center; gap: 16px;
      font-size: 13px; font-weight: 400; color: var(--gray-1);
      padding: 3px 0;
      border-bottom: 0.5px solid var(--border-dim);
    }
    .hero-prop:last-child { border-bottom: none; }
    .hero-prop-tick {
      font-family: 'Inter', sans-serif;
      color: var(--amber); font-size: 20px;
      flex-shrink: 0; width: 28px;
    }

    .hero-ctas { display: flex; gap: 12px; flex-wrap: wrap; }

    /* ─── Dashboard visual ───────────────────────────────── */
    .hero-visual { position: relative; overflow: hidden; }

    /* ─── Dashboard cursor animation ──────────────────────── */
    .dash-visual { position: relative; }
    .dash-visual img { width: 100%; display: block; }

    .dash-cursor {
      position: absolute;
      width: 3.2%; height: auto;
      top: 52%; left: 20%;
      pointer-events: none; z-index: 3;
      filter: drop-shadow(0 2px 3px rgba(0,0,0,0.45));
      animation: dashCursorPath 6s ease-in-out infinite;
    }
    .dash-click-pulse {
      position: absolute;
      top: 15%; left: 20.5%;
      width: 12px; height: 12px;
      border-radius: 50%;
      background: rgba(255,255,255,0.75);
      pointer-events: none; z-index: 2;
      opacity: 0;
      animation: dashClickPulse 6s ease-out infinite;
    }

    @keyframes dashCursorPath {
      0%, 12%  { top: 52%; left: 20%; opacity: 1; }   /* Additional Documents */
      50%      { top: 15%; left: 20%; opacity: 1; }   /* glide to Company Info */
      85%      { top: 15%; left: 20%; opacity: 1; }   /* stay */
      95%      { top: 15%; left: 20%; opacity: 0; }   /* fade out */
      100%     { top: 52%; left: 20%; opacity: 0; }   /* reset, invisible */
    }
    @keyframes dashClickPulse {
      /* Click ripple fires when cursor reaches Company Info (~50% mark) */
      0%, 48% { transform: scale(0.5); opacity: 0; }
      52%     { transform: scale(0.5); opacity: 0.8; }
      70%     { transform: scale(3.2); opacity: 0; }
      100%    { transform: scale(0.5); opacity: 0; }
    }

    .dash-frame {
      background: var(--bg-4);
      border: 0.5px solid rgba(212,168,67,0.3);
      border-radius: 2px;
      overflow: hidden;
      position: relative;
      box-shadow:
        0 0 0 0.5px rgba(212,168,67,0.08),
        0 40px 80px rgba(0,0,0,0.6),
        0 0 40px rgba(212,168,67,0.06);
    }
    .dash-frame::before {
      content: '';
      position: absolute;
      inset: -60px;
      background: radial-gradient(ellipse 70% 55% at 50% 50%, rgba(212,168,67,0.14) 0%, rgba(212,168,67,0.04) 45%, transparent 75%);
      z-index: -1;
      pointer-events: none;
      filter: blur(8px);
    }

    /* Subtle glow behind platform mockups */
    .platform-section .mockup { position: relative; }
    .platform-section .mockup::before {
      content: '';
      position: absolute;
      inset: -50px;
      background: radial-gradient(ellipse 70% 60% at 50% 50%, rgba(212,168,67,0.10) 0%, rgba(212,168,67,0.03) 45%, transparent 75%);
      z-index: -1;
      pointer-events: none;
      filter: blur(6px);
    }

    /* Integrations pills: rotating connection pulse */
    .int-pill {
      animation: intPillPulse 6s ease-in-out infinite;
    }
    .int-pill:nth-child(1) { animation-delay: 0s; }
    .int-pill:nth-child(2) { animation-delay: 0.5s; }
    .int-pill:nth-child(3) { animation-delay: 1.0s; }
    .int-pill:nth-child(4) { animation-delay: 1.5s; }
    .int-pill:nth-child(5) { animation-delay: 2.0s; }
    .int-pill:nth-child(6) { animation-delay: 2.5s; }
    @keyframes intPillPulse {
      0%, 88%, 100% {
        border-color: var(--border-dim);
        box-shadow: 0 0 0 0 rgba(212,168,67,0);
      }
      92% {
        border-color: rgba(212,168,67,0.5);
        box-shadow: 0 0 18px rgba(212,168,67,0.18);
      }
    }

    .dash-frame-bar {
      display: flex; align-items: center; gap: 8px;
      padding: 10px 14px;
      background: var(--bg-2);
      border-bottom: 0.5px solid var(--border-dim);
    }

    .dash-dot { width: 8px; height: 8px; border-radius: 50%; }
    .dash-dot:nth-child(1) { background: rgba(192,57,43,0.7); }
    .dash-dot:nth-child(2) { background: rgba(212,168,67,0.5); }
    .dash-dot:nth-child(3) { background: rgba(39,174,96,0.5); }

    .dash-frame-url {
      font-family: 'Inter', sans-serif;
      font-size: 10px; color: var(--gray-3);
      margin-left: 8px; letter-spacing: 0.04em;
    }

    .dash-frame img { width: 100%; display: block; }

    /* ─── STAT SECTION ───────────────────────────────────── */
    .stat-section {
      background: var(--bg-2);
      padding: 60px 0;
      border-top: 0.5px solid var(--border-dim);
      border-bottom: 0.5px solid var(--border-dim);
    }

    .stat-inner {
      display: block;
    }

    .stat-banner {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
      gap: 56px;
      padding: 40px 56px;
      border-radius: 14px;
      border: 1px solid rgba(255,255,255,0.08);
      background: rgba(255,255,255,0.015);
      box-shadow: 0 0 0 0 rgba(255,255,255,0);
      margin: 0 auto;
      max-width: 1024px;
      animation: statBannerPulse 3.6s ease-in-out infinite;
    }
    @keyframes statBannerPulse {
      0%, 100% {
        border-color: rgba(255,255,255,0.08);
        box-shadow: 0 0 0 0 rgba(255,255,255,0);
      }
      50% {
        border-color: rgba(255,255,255,0.5);
        box-shadow: 0 0 32px rgba(255,255,255,0.14);
      }
    }

    .stat-number {
      font-family: 'Inter', sans-serif;
      font-size: clamp(88px, 14vw, 180px);
      color: var(--amber);
      line-height: 0.9;
      letter-spacing: -0.04em;
      font-weight: 600;
      white-space: nowrap;
      flex-shrink: 0;
    }

    .stat-right {
      display: flex;
      flex-direction: column;
      gap: 20px;
      flex: 1;
      min-width: 0;
    }

    .stat-label {
      font-family: 'Syne', sans-serif;
      font-size: clamp(22px, 2.6vw, 34px);
      color: var(--gray-1);
      font-weight: 400;
      letter-spacing: -0.01em;
      line-height: 1.22;
      margin: 0;
    }

    @media (max-width: 820px) {
      .stat-banner {
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        padding: 22px 14px;
        text-align: left;
      }
      .stat-number {
        font-size: clamp(120px, 32vw, 160px);
        line-height: 0.88;
      }
      .stat-right {
        align-items: flex-start;
        width: 100%;
        gap: 18px;
      }
      .stat-label {
        font-size: 24px;
        line-height: 1.22;
        letter-spacing: -0.015em;
        max-width: none;
      }
      .stat-badges {
        justify-content: flex-start;
      }
    }

    /* Dual-row scrolling marquee for stat badges */
    .stat-marquee {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 100%;
      overflow: hidden;
      -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%);
              mask-image: linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%);
    }
    .stat-marquee-row {
      display: flex;
      overflow: hidden;
    }
    .stat-marquee-track {
      display: inline-flex;
      flex-shrink: 0;
      gap: 10px;
      padding-right: 10px;
      white-space: nowrap;
      animation: marqueeLeft 36s linear infinite;
    }
    .stat-marquee-row.reverse .stat-marquee-track {
      animation: marqueeRight 36s linear infinite;
    }
    .stat-marquee .stat-badge { flex-shrink: 0; }
    @keyframes marqueeLeft {
      from { transform: translateX(0); }
      to   { transform: translateX(-50%); }
    }
    @keyframes marqueeRight {
      from { transform: translateX(-50%); }
      to   { transform: translateX(0); }
    }
    .stat-badge {
      font-family: 'Inter', sans-serif;
      font-size: 11px; font-weight: 600;
      letter-spacing: 0.05em; text-transform: uppercase;
      color: var(--amber);
      padding: 8px 16px;
      border: 1px solid rgba(212,168,67,0.3);
      border-radius: 2px;
      background: rgba(212,168,67,0.06);
      transition: background 0.2s, border-color 0.2s;
    }
    .stat-badge:hover {
      background: rgba(212,168,67,0.12);
      border-color: rgba(212,168,67,0.5);
    }

    /* ─── ZIGZAG PLATFORM SECTIONS ───────────────────────── */
    .platform-wrap { padding: 0; }
    .platform-section {
      padding: 100px 0;
      border-bottom: 0.5px solid var(--border-dim);
    }
    .platform-section:last-child { border-bottom: none; }
    .platform-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 80px; align-items: center;
    }
    .platform-row.reverse { direction: rtl; }
    .platform-row.reverse > * { direction: ltr; }

    /* Stacked variant: copy centered on top, animation full-width below */
    .platform-section--stack .platform-row {
      grid-template-columns: 1fr;
      gap: 48px;
      justify-items: center;
      text-align: center;
    }
    .platform-section--stack .platform-copy {
      max-width: 760px;
    }
    .platform-section--stack .platform-copy .overline { margin-bottom: 14px; }
    .platform-section--stack .platform-row > .reveal:last-child {
      width: 100%;
      max-width: 760px;
    }

    /* Alt backgrounds for visual cuts between sections */
    .platform-section--alt {
      background: rgba(255,255,255,0.015);
      transition: background 0.35s ease;
    }
    .platform-section--alt:hover {
      background: rgba(255,255,255,0.035);
    }

    /* Sticky scroll-stacked cards with cursor spotlight */
    .platform-section--pin {
      position: sticky;
      background: linear-gradient(180deg, rgba(22,21,18,0.92) 0%, rgba(17,17,9,0.96) 100%);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      border: 1px solid rgba(232,181,71,0.08);
      border-radius: 24px;
      box-shadow:
        0 -20px 60px rgba(0,0,0,0.55),
        inset 0 1px 0 rgba(255,255,255,0.04);
      margin: 0 16px 14px;
      transition: border-color 0.4s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.4s cubic-bezier(0.22, 1, 0.36, 1);
      --spot-x: 50%;
      --spot-y: 50%;
    }
    .platform-section--pin::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      background: radial-gradient(600px circle at var(--spot-x) var(--spot-y), rgba(232,181,71,0.08), transparent 45%);
      opacity: 0;
      transition: opacity 0.3s ease;
      pointer-events: none;
      z-index: 0;
    }
    .platform-section--pin:hover::before { opacity: 1; }
    .platform-section--pin:hover {
      border-color: rgba(232,181,71,0.22);
      box-shadow:
        0 -20px 60px rgba(0,0,0,0.55),
        0 0 48px rgba(232,181,71,0.06),
        inset 0 1px 0 rgba(255,255,255,0.06);
    }
    .platform-section--pin > * { position: relative; z-index: 1; }

    /* Animated nav link underline */
    .nav-links > li > a { position: relative; }
    .nav-links > li > a::after {
      content: '';
      position: absolute;
      left: 10px; right: 10px; bottom: 4px;
      height: 1px;
      background: var(--amber);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
    }
    .nav-links > li > a:hover::after { transform: scaleX(1); }

    /* Focus states with amber glow */
    a:focus-visible,
    button:focus-visible,
    .faq-q:focus-visible {
      outline: 2px solid var(--amber);
      outline-offset: 3px;
      border-radius: 4px;
    }
    .platform-section--pin:nth-child(2) { top: 80px; }
    .platform-section--pin:nth-child(3) { top: 106px; }
    .platform-section--pin:nth-child(4) { top: 132px; }
    .platform-section--pin:nth-child(5) { top: 158px; }
    .platform-section--pin:nth-child(6) { top: 184px; }
    .platform-section--pin:last-of-type { margin-bottom: 40px; }

    @media (max-width: 820px) {
      .platform-section--pin {
        position: static;
        top: auto;
        margin: 0;
        border-radius: 0;
        border-left: none;
        border-right: none;
        box-shadow: none;
      }
      /* Stop float animations at the same breakpoint where layout reflows ,
         prevents 52px gap (820,768) where floats run on already-stacked layout */
      .platform-section .mockup,
      .dash-float,
      .mockup,
      .dash-frame,
      [class*="float"] {
        animation: none !important;
        transform: none !important;
      }
    }

    .platform-copy .overline { margin-bottom: 14px; }
    .platform-copy h2 { margin-bottom: 20px; }
    .platform-copy p { margin-bottom: 24px; font-size: 15px; line-height: 1.75; }
    .platform-link {
      font-family: 'Inter', sans-serif;
      font-size: 11px; font-weight: 500;
      letter-spacing: 0.06em; text-transform: uppercase;
      color: var(--amber);
      text-decoration: none;
      display: inline-flex; align-items: center; gap: 8px;
      transition: gap 0.2s;
    }
    .platform-link:hover { gap: 12px; }

    /* ─── MOCKUP SHARED ──────────────────────────────────── */
    /* contain: layout , internal DOM mutations (BB queue rows, ledger inserts, cash match cards)
       cannot reflow ancestors. Eliminates the vertical "page jitter" the user reported. */
    .mockup {
      background: var(--bg-3);
      border: 0.5px solid var(--border);
      border-radius: 2px;
      overflow: hidden;
      font-size: 12px;
      contain: layout paint;
    }
    .mockup-bar {
      background: var(--bg-2);
      border-bottom: 0.5px solid var(--border-dim);
      padding: 10px 14px;
      display: flex; align-items: center; gap: 8px;
    }
    .m-dots { display: flex; gap: 5px; }
    .m-dot { width: 7px; height: 7px; border-radius: 50%; }
    .m-dot:nth-child(1) { background: rgba(192,57,43,0.55); }
    .m-dot:nth-child(2) { background: rgba(212,168,67,0.45); }
    .m-dot:nth-child(3) { background: rgba(39,174,96,0.45); }
    .m-title {
      font-family: 'Inter', sans-serif;
      font-size: 10px; color: var(--gray-3);
      font-weight: 400; margin-left: 4px;
      letter-spacing: 0.04em;
    }

    /* ─── BRIGHTBOLT FLOW ────────────────────────────────── */
    .sched-flow { padding: 24px; }
    .sched-flow-col {
      display: flex;
      flex-direction: row;
      align-items: stretch;
      justify-content: center;
      gap: 0;
      flex-wrap: nowrap;
    }
    .sched-flow-col .sched-node,
    .sched-flow-col .sched-result {
      flex: 1 1 0;
      min-width: 0;
      align-self: stretch;
    }
    @media (max-width: 820px) {
      .sched-flow-col {
        flex-direction: column;
      }
    }

    .sched-node {
      background: var(--bg-4);
      border: 0.5px solid var(--border-dim);
      border-radius: 2px;
      padding: 14px 16px;
    }
    .sched-node-label {
      font-family: 'Inter', sans-serif;
      font-size: 9px; font-weight: 500;
      letter-spacing: 0.1em; text-transform: uppercase;
      color: var(--gray-3); margin-bottom: 6px;
    }
    .sched-node-title {
      font-size: 12px; font-weight: 600;
      color: var(--gray-1); margin-bottom: 4px;
    }
    .sched-node-sub {
      font-family: 'Inter', sans-serif;
      font-size: 10px; color: var(--gray-3);
    }

    .sched-spacer {
      width: 20px; height: 0.5px;
      background: var(--border-dim);
      align-self: center;
      flex-shrink: 0;
    }
    @media (max-width: 820px) {
      .sched-spacer {
        width: 0.5px; height: 20px;
        margin: 0 auto;
      }
    }

    .sched-result {
      background: rgba(39,174,96,0.05);
      border: 0.5px solid rgba(39,174,96,0.2);
      border-radius: 2px;
      padding: 14px 16px;
      display: flex; align-items: center; gap: 12px;
    }
    .sched-result-check {
      font-family: 'Inter', sans-serif;
      font-size: 14px;
      color: var(--green); flex-shrink: 0;
    }
    .sched-result-text {
      font-family: 'Inter', sans-serif;
      font-size: 11px; font-weight: 600; color: var(--green);
    }
    .sched-result-sub {
      font-family: 'Inter', sans-serif;
      font-size: 10px; color: var(--gray-3); margin-top: 3px;
    }
    .sched-pulse-dot {
      width: 7px; height: 7px; border-radius: 50%;
      background: var(--amber);
      animation: pulse-dot 2s ease-in-out infinite;
      margin-left: auto; flex-shrink: 0;
    }
    @keyframes pulse-dot {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.4; transform: scale(0.6); }
    }

    /* BrightBolt step animation states */
    .bb-step { opacity: 0.35; transition: opacity 0.5s ease, transform 0.5s ease; transform: translateX(-4px); }
    .bb-step.bb-active { opacity: 1; transform: translateX(0); }
    .sched-spacer { transform-origin: top center; }

    /* ─── CLIENT RECORD MOCKUP ───────────────────────────── */
    .client-mockup { padding: 0; }
    .client-tabs {
      display: flex; gap: 0;
      border-bottom: 0.5px solid var(--border-dim);
      padding: 0 16px; overflow-x: auto;
    }
    .client-tab {
      font-family: 'Inter', sans-serif;
      font-size: 10px; font-weight: 500;
      letter-spacing: 0.06em; text-transform: uppercase;
      color: var(--gray-3);
      padding: 10px 14px; cursor: default;
      border-bottom: 1.5px solid transparent;
      white-space: nowrap;
    }
    .client-tab.active { color: var(--amber); border-color: var(--amber); }
    .client-info { padding: 16px; }
    /* When .client-info is also the tab panels wrapper, remove outer padding
       so panels use their own padding (prevents double-padding) */
    .client-info.book-tab-panels { padding: 0; }
    .client-header { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 16px; }
    .client-name { font-size: 14px; font-weight: 600; color: var(--white); margin-bottom: 4px; }
    .client-code {
      font-family: 'Inter', sans-serif;
      font-size: 10px; color: var(--gray-3);
    }
    .client-badges { display: flex; gap: 6px; flex-wrap: wrap; margin-top: 8px; }

    .badge {
      font-family: 'Inter', sans-serif;
      font-size: 9px; font-weight: 600;
      letter-spacing: 0.06em; text-transform: uppercase;
      padding: 3px 8px;
      border-radius: 0;
    }
    .badge-green { background: rgba(39,174,96,0.1); color: var(--green); border: 0.5px solid rgba(39,174,96,0.25); }
    .badge-amber { background: rgba(212,168,67,0.1); color: var(--amber); border: 0.5px solid rgba(212,168,67,0.25); }
    .badge-gray  { background: rgba(255,255,255,0.04); color: var(--gray-2); border: 0.5px solid var(--border-dim); }

    .client-fields { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .client-field-label {
      font-family: 'Inter', sans-serif;
      font-size: 9px; font-weight: 600;
      letter-spacing: 0.08em; text-transform: uppercase;
      color: var(--gray-3); margin-bottom: 3px;
    }
    .client-field-val {
      font-family: 'Inter', sans-serif;
      font-size: 11px; color: var(--gray-1);
    }
    .client-meta-row {
      display: flex; justify-content: space-between; align-items: center;
      border-top: 0.5px solid var(--border-dim);
      padding-top: 12px; margin-top: 12px;
    }
    .client-meta-label {
      font-family: 'Inter', sans-serif;
      font-size: 9px; text-transform: uppercase; letter-spacing: 0.08em;
      color: var(--gray-3); margin-bottom: 3px;
    }
    .client-meta-val {
      font-family: 'Inter', sans-serif;
      font-size: 13px; font-weight: 600; color: var(--white);
    }

    /* ─── INTEGRATION PILLS ──────────────────────────────── */
    .int-grid-mockup { padding: 24px; }
    /* Fix: intFadeIn uses translateY which can cause reflow on mobile , disable on mobile */
    @media (max-width: 768px) {
      .int-pill { animation: none !important; opacity: 1 !important; transform: none !important; }
      /* Without entrance motion the previous glow looked orphaned ,
         drop it so the active state matches the static layout */
      .int-pill.int-active {
        box-shadow: none !important;
      }
    }
    .int-grid-title {
      font-family: 'Inter', sans-serif;
      font-size: 9px; font-weight: 600;
      letter-spacing: 0.1em; text-transform: uppercase;
      color: var(--gray-3); margin-bottom: 18px;
    }
    .int-pills {
      display: grid; grid-template-columns: 1fr 1fr 1fr;
      gap: 8px;
    }
    .int-pill {
      background: var(--bg-4);
      border: 0.5px solid var(--border-dim);
      border-radius: 2px;
      padding: 12px 14px;
      text-align: center;
      transition: background 0.2s, border-color 0.2s;
    }
    .int-pill:hover { background: var(--bg-5); border-color: var(--border); }
    .int-pill { animation: intFadeIn 0.4s ease both; }
    .int-pill:nth-child(1) { animation-delay: 0.0s; }
    .int-pill:nth-child(2) { animation-delay: 0.08s; }
    .int-pill:nth-child(3) { animation-delay: 0.16s; }
    .int-pill:nth-child(4) { animation-delay: 0.24s; }
    .int-pill:nth-child(5) { animation-delay: 0.32s; }
    .int-pill:nth-child(6) { animation-delay: 0.40s; }
    @keyframes intFadeIn { from { opacity:0; } to { opacity:1; } }
    .int-pill.int-active {
      border-color: rgba(88,187,237,0.5);
      background: rgba(88,187,237,0.06);
      box-shadow: 0 0 12px rgba(88,187,237,0.12);
    }
    .int-pill.int-active .int-pill-name { color: var(--blue); }
    /* Pulsing dots in the mockup header */
    .m-dot { animation: dotPulse 2.4s ease-in-out infinite; }
    .m-dot:nth-child(2) { animation-delay: 0.3s; }
    .m-dot:nth-child(3) { animation-delay: 0.6s; }
    @keyframes dotPulse { 0%,80%,100%{opacity:1} 40%{opacity:0.3} }
    .int-pill-name {
      font-family: 'Inter', sans-serif;
      font-size: 11px; font-weight: 500; color: var(--gray-1);
    }
    .int-pill-cat {
      font-family: 'Inter', sans-serif;
      font-size: 9px; color: var(--gray-3); margin-top: 3px;
    }
    .int-more {
      font-family: 'Inter', sans-serif;
      margin-top: 14px; text-align: center;
      font-size: 10px; color: var(--gray-3);
    }

    /* ─── CLIENT PORTAL MOCKUP ───────────────────────────── */
    .portal-mockup { padding: 0; }
    .portal-list { padding: 0 16px 16px; }
    .portal-header {
      display: flex; justify-content: space-between; align-items: center;
      padding: 12px 0; border-bottom: 0.5px solid var(--border-dim);
      margin-bottom: 8px;
    }
    .portal-header-title {
      font-size: 12px; font-weight: 600; color: var(--white);
    }
    .portal-header-count {
      font-family: 'Inter', sans-serif;
      font-size: 10px; color: var(--gray-3);
    }
    .portal-row {
      display: flex; align-items: center; gap: 10px;
      padding: 9px 0;
      border-bottom: 0.5px solid var(--border-dim);
      font-size: 11px;
    }
    .portal-row:last-child { border-bottom: none; }
    .portal-inv-num {
      font-family: 'Inter', sans-serif;
      font-weight: 500; color: var(--gray-2);
      width: 72px; flex-shrink: 0;
    }
    .portal-debtor { flex: 1; color: var(--gray-1); font-weight: 500; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .portal-amount {
      font-family: 'Inter', sans-serif;
      font-weight: 600; color: var(--white);
      font-size: 11px; flex-shrink: 0;
    }
    .portal-status { flex-shrink: 0; }
    .s-funded { background: rgba(39,174,96,0.1); color: var(--green); border: 0.5px solid rgba(39,174,96,0.25); }
    .s-pending { background: rgba(212,168,67,0.1); color: var(--amber); border: 0.5px solid rgba(212,168,67,0.25); }
    .s-review  { background: rgba(168,152,128,0.1); color: var(--gray-2); border: 0.5px solid var(--border-dim); }

    .portal-thread {
      margin: 0 16px 16px;
      background: var(--bg-2);
      border: 0.5px solid var(--border-dim);
      border-radius: 2px;
      padding: 12px;
    }
    .portal-thread-label {
      font-family: 'Inter', sans-serif;
      font-size: 9px; font-weight: 600;
      letter-spacing: 0.08em; text-transform: uppercase;
      color: var(--gray-3); margin-bottom: 10px;
    }
    .thread-msg { display: flex; gap: 8px; margin-bottom: 8px; }
    .thread-msg:last-child { margin-bottom: 0; }
    .thread-avatar {
      width: 20px; height: 20px; border-radius: 0;
      background: rgba(212,168,67,0.12);
      border: 0.5px solid var(--border);
      flex-shrink: 0; display: flex; align-items: center; justify-content: center;
      font-family: 'Inter', sans-serif;
      font-size: 8px; font-weight: 700; color: var(--amber);
    }
    .thread-body { flex: 1; }
    .thread-sender {
      font-family: 'Inter', sans-serif;
      font-size: 9px; font-weight: 700;
      color: var(--gray-2); margin-bottom: 2px;
    }
    .thread-text { font-size: 11px; color: var(--gray-3); line-height: 1.4; }

    /* ─── LEDGER MOCKUP ──────────────────────────────────── */
    .ledger-mockup { padding: 0; }
    .ledger-head {
      display: grid; grid-template-columns: 2fr 1fr 1fr 1fr;
      gap: 8px; padding: 10px 16px;
      background: var(--bg-2);
      border-bottom: 0.5px solid var(--border-dim);
      font-family: 'Inter', sans-serif;
      font-size: 9px; font-weight: 600;
      letter-spacing: 0.1em; text-transform: uppercase;
      color: var(--gray-3);
    }
    .ledger-row {
      display: grid; grid-template-columns: 2fr 1fr 1fr 1fr;
      gap: 8px; padding: 10px 16px;
      border-bottom: 0.5px solid var(--border-dim);
      font-size: 11px; align-items: center;
    }
    .ledger-row:last-child { border-bottom: none; }
    .ledger-desc { color: var(--gray-1); font-weight: 500; font-size: 11px; }
    .ledger-type {
      font-family: 'Inter', sans-serif;
      font-size: 9px; color: var(--gray-3); text-transform: uppercase; letter-spacing: 0.06em;
    }
    .ledger-debit {
      font-family: 'Inter', sans-serif;
      color: var(--red); font-weight: 600; font-size: 11px;
      font-feature-settings: 'tnum';
    }
    .ledger-credit {
      font-family: 'Inter', sans-serif;
      color: var(--green); font-weight: 600; font-size: 11px;
      font-feature-settings: 'tnum';
    }
    .ledger-balance {
      font-family: 'Inter', sans-serif;
      color: var(--gray-2); font-size: 11px;
      font-feature-settings: 'tnum';
    }
    .ledger-footer {
      padding: 10px 16px;
      background: rgba(39,174,96,0.04);
      border-top: 0.5px solid rgba(39,174,96,0.15);
      display: flex; justify-content: space-between; align-items: center;
    }
    .ledger-footer-label {
      font-family: 'Inter', sans-serif;
      font-size: 9px; font-weight: 700;
      text-transform: uppercase; letter-spacing: 0.08em;
      color: var(--gray-3);
    }
    .ledger-balanced {
      font-family: 'Inter', sans-serif;
      font-size: 10px; color: var(--green);
      font-weight: 600; display: flex; align-items: center; gap: 4px;
    }
    .ledger-footer-val {
      font-family: 'Inter', sans-serif;
      font-size: 13px; font-weight: 700; color: var(--green);
    }

    /* ─── COMPARISON TABLE ───────────────────────────────── */
    .compare-section {
      background: var(--bg-2);
      padding: 100px 0;
      border-top: 0.5px solid var(--border-dim);
    }
    .section-header { margin-bottom: 56px; }
    .section-header h2 { margin-bottom: 0; }
    .section-header .section-sub {
      margin: 18px auto 0;
      max-width: 640px;
      font-size: 16px;
      line-height: 1.6;
      color: var(--gray-2);
    }
    .compare-section .section-header,
    .steps-section .section-header { text-align: center; }

    .comp-wrap {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }
    .comp-grid {
      display: grid;
      grid-template-columns: 1.4fr 1fr 1fr;
      border: 0.5px solid var(--border-dim);
      border-radius: 2px;
      overflow: hidden;
      /* min-width ensures horizontal scrollability on mobile instead of text crunch */
      min-width: 560px;
    }

    .comp-col-head {
      padding: 20px 24px;
      border-bottom: 0.5px solid var(--border-dim);
    }
    .comp-col-head-label {
      font-family: 'Inter', sans-serif;
      font-size: 9px; font-weight: 600;
      text-transform: uppercase; letter-spacing: 0.12em;
      color: var(--gray-3); margin-bottom: 6px;
    }
    .comp-col-head-title { font-size: 15px; font-weight: 600; }
    .comp-col-head-sub {
      font-family: 'Inter', sans-serif;
      font-size: 10px; color: var(--gray-3); margin-top: 4px;
    }

    .comp-feat-head  { border-right: 0.5px solid var(--border-dim); }
    .comp-legacy-head { background: rgba(192,57,43,0.05); border-right: 0.5px solid var(--border-dim); }
    .comp-fc-head    { background: rgba(212,168,67,0.04); }
    .comp-feat-head  .comp-col-head-title { color: var(--gray-2); }
    .comp-legacy-head .comp-col-head-title { color: var(--red); }
    .comp-fc-head    .comp-col-head-title { color: var(--amber); }

    .comp-row-feat {
      padding: 14px 24px;
      border-bottom: 0.5px solid var(--border-dim);
      border-right: 0.5px solid var(--border-dim);
      font-family: 'Inter', sans-serif;
      font-size: 11px; font-weight: 500;
      letter-spacing: 0.03em;
      color: var(--gray-2);
      display: flex; align-items: center;
      background: var(--bg-3);
    }
    .comp-row-legacy {
      padding: 14px 20px;
      border-bottom: 0.5px solid var(--border-dim);
      border-right: 0.5px solid var(--border-dim);
      background: #1A0C0C;
      font-size: 12px; color: var(--gray-3);
      display: flex; align-items: flex-start; gap: 8px;
      transition: opacity 0.5s ease, transform 0.5s ease;
    }
    .comp-row-fc {
      padding: 14px 20px;
      border-bottom: 0.5px solid var(--border-dim);
      background: #15130A;
      font-size: 12px; color: var(--gray-1);
      display: flex; align-items: flex-start; gap: 8px;
      transition: opacity 0.5s ease, transform 0.5s ease;
    }

    .comp-row-feat:last-of-type,
    .comp-row-legacy:last-child,
    .comp-row-fc:last-child { border-bottom: none; }

    .x-mark {
      font-family: 'Inter', sans-serif;
      color: var(--red); font-weight: 700; font-size: 13px; flex-shrink: 0; margin-top: 1px;
    }
    .check-mark {
      font-family: 'Inter', sans-serif;
      color: var(--amber); font-weight: 700; font-size: 13px; flex-shrink: 0; margin-top: 1px;
    }

    /* Table animate initial states */
    .comp-table-animate .comp-row-legacy {
      opacity: 0;
      transform: translateX(-16px);
    }
    .comp-table-animate .comp-row-fc {
      opacity: 0;
      transform: translateX(16px);
    }

    /* ─── STEPS SECTION ──────────────────────────────────── */
    .steps-section { padding: 100px 0; }
    .steps-row {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0;
      position: relative;
      margin-top: 64px;
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 14px;
      background: rgba(255,255,255,0.015);
      overflow: hidden;
      box-shadow: 0 0 0 0 rgba(255,255,255,0);
      animation: statBannerPulse 3.6s ease-in-out infinite;
    }
    .step {
      padding: 40px;
      border-right: 0.5px solid var(--border-dim);
    }
    .step:last-child { border-right: none; }
    .step-number {
      font-family: 'Inter', sans-serif;
      font-size: 11px; font-weight: 600;
      color: var(--amber);
      letter-spacing: 0.1em; text-transform: uppercase;
      margin-bottom: 20px; display: block;
    }
    .step-title { font-size: 16px; font-weight: 600; color: var(--white); margin-bottom: 12px; }
    .step-desc { font-size: 13px; color: var(--gray-2); line-height: 1.65; }

    /* ─── FAQ ────────────────────────────────────────────── */
    .faq-section { padding: 100px 0; background: var(--bg-3); border-top: 0.5px solid var(--border-dim); }
    .faq-list { margin-top: 56px; }
    .faq-item { border-bottom: 0.5px solid var(--border-dim); }
    .faq-item:first-child { border-top: 0.5px solid var(--border-dim); }

    @media (min-width: 821px) {
      .faq-section .container { max-width: 1360px !important; }
      .faq-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-flow: column;
        grid-template-rows: repeat(3, auto);
        column-gap: 64px;
      }
      .faq-item:nth-child(4) { border-top: 0.5px solid var(--border-dim); }
    }
    .faq-q {
      display: flex; justify-content: space-between; align-items: center;
      padding: 22px 0; cursor: pointer;
      font-size: 15px; font-weight: 500; color: var(--gray-1);
      transition: color 0.2s; user-select: none;
    }
    .faq-q:hover { color: var(--white); }
    .faq-q.open { color: var(--white); }
    .faq-chevron {
      width: 16px; height: 16px; flex-shrink: 0;
      stroke: var(--gray-3); fill: none; stroke-width: 2;
      stroke-linecap: round; stroke-linejoin: round;
      transition: transform 0.25s, stroke 0.2s;
    }
    .faq-q.open .faq-chevron { transform: rotate(180deg); stroke: var(--amber); }
    .faq-a {
      display: none;
      padding: 0 0 22px;
      font-size: 14px; color: var(--gray-2); line-height: 1.75;
      max-width: 640px;
    }
    .faq-a.open { display: block; }

    /* ─── DEMO CTA ───────────────────────────────────────── */
    .demo-section {
      background: var(--bg);
      border-top: 0.5px solid var(--border-dim);
      padding: 160px 0;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    .demo-section::before {
      content: '';
      position: absolute;
      top: 50%; left: 52%;
      width: 460px; height: 340px;
      transform: translate(-50%, -50%);
      background: radial-gradient(ellipse at 40% 45%, rgba(212,168,67,0.22) 0%, rgba(212,168,67,0.08) 40%, transparent 70%);
      filter: blur(36px);
      pointer-events: none;
      z-index: 0;
      animation: demoOrbPulse 7s ease-in-out infinite;
    }
    .demo-section::after {
      content: '';
      position: absolute;
      top: 48%; left: 48%;
      width: 260px; height: 380px;
      transform: translate(-50%, -50%) rotate(-18deg);
      background: radial-gradient(ellipse at 55% 50%, rgba(212,168,67,0.14) 0%, rgba(212,168,67,0.04) 50%, transparent 75%);
      filter: blur(28px);
      pointer-events: none;
      z-index: 0;
      animation: demoOrbPulse 6s ease-in-out infinite reverse;
    }
    .demo-section > .container { position: relative; z-index: 1; }
    @keyframes demoOrbPulse {
      0%, 100% { transform: translate(-50%, -50%) scale(0.94); opacity: 0.55; }
      50%      { transform: translate(-50%, -50%) scale(1.08); opacity: 0.78; }
    }
    .demo-section .overline { margin-bottom: 20px; color: var(--amber); }
    .demo-section h2 {
      font-family: 'Syne', sans-serif;
      font-size: clamp(42px, 6.2vw, 76px);
      color: var(--white); margin-bottom: 22px;
      letter-spacing: -0.02em;
      line-height: 1.05;
    }
    .demo-section p {
      font-size: 16px; color: var(--gray-2);
      max-width: 680px; margin: 0 auto 44px;
      line-height: 1.55;
    }
    .demo-ctas {
      display: flex; gap: 12px;
      justify-content: center; flex-wrap: wrap;
    }
    .demo-trust {
      display: flex; flex-wrap: wrap; gap: 14px;
      justify-content: center; align-items: center;
      margin-top: 0; margin-bottom: 36px;
    }
    .trust-item {
      font-family: 'Inter', sans-serif;
      font-size: 11px; font-weight: 500;
      letter-spacing: 0.08em; text-transform: uppercase;
      color: var(--gray-2);
      padding: 0;
      border: none;
      background: none;
    }
    .trust-sep {
      display: inline-flex;
      color: rgba(212,168,67,0.4);
      font-size: 14px;
    }

    /* ─── FOOTER ─────────────────────────────────────────── */
    .footer {
      background: var(--bg-2);
      border-top: 0.5px solid var(--border-dim);
      padding: 80px 0 48px;
      position: relative;
    }
    .footer::before {
      content: '';
      position: absolute;
      top: -1px; left: 50%;
      transform: translateX(-50%);
      width: min(820px, 72%);
      height: 1px;
      background: linear-gradient(90deg, transparent 0%, rgba(212,168,67,0.85) 50%, transparent 100%);
      pointer-events: none;
    }
    .footer::after {
      content: '';
      position: absolute;
      top: -60px; left: 50%;
      transform: translateX(-50%);
      width: min(640px, 64%);
      height: 120px;
      background: radial-gradient(ellipse at 50% 50%, rgba(212,168,67,0.22) 0%, rgba(212,168,67,0.06) 40%, transparent 70%);
      filter: blur(18px);
      pointer-events: none;
      z-index: 0;
    }
    .footer > .container { position: relative; z-index: 1; }
    .footer-grid {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
      gap: 48px; margin-bottom: 64px;
    }
    .footer-brand img { height: 26px; margin-bottom: 16px; display: block; }
    .footer-brand p { font-size: 13px; color: var(--gray-3); line-height: 1.6; max-width: 200px; }
    .footer-col-title {
      font-family: 'Inter', sans-serif;
      font-size: 9px; font-weight: 700;
      text-transform: uppercase; letter-spacing: 0.12em;
      color: var(--gray-2); margin-bottom: 16px;
    }
    .footer-links { list-style: none; }
    .footer-links li { margin-bottom: 10px; }
    .footer-links a {
      font-size: 13px; color: var(--gray-3);
      text-decoration: none; transition: color 0.15s;
    }
    .footer-links a:hover { color: var(--gray-1); }
    .footer-bottom {
      display: flex; justify-content: space-between; align-items: center;
      border-top: 0.5px solid var(--border-dim);
      padding-top: 32px;
    }
    .footer-copy {
      font-family: 'Inter', sans-serif;
      font-size: 10px; color: var(--gray-3);
    }
    .footer-address {
      font-family: 'Inter', sans-serif;
      font-size: 10px; color: var(--gray-3);
    }
    .footer-social { display: flex; gap: 12px; align-items: center; }
    .footer-social a {
      display: flex; align-items: center; justify-content: center;
      width: 30px; height: 30px;
      border: 0.5px solid var(--border-dim);
      border-radius: 2px;
      color: var(--gray-3);
      text-decoration: none;
      transition: border-color 0.15s, color 0.15s;
    }
    .footer-social a:hover { border-color: var(--border); color: var(--amber); }

    /* ─── CLAUDE SPOTLIGHT SECTION ───────────────────────── */
    .claude-spot {
      padding: 120px 0;
      border-top: 0.5px solid var(--border-dim);
      border-bottom: 0.5px solid var(--border-dim);
      background:
        radial-gradient(ellipse 60% 100% at 50% 0%, rgba(212,168,67,0.06), transparent 60%),
        linear-gradient(180deg, var(--bg-2) 0%, var(--bg) 100%);
      position: relative;
      overflow: hidden;
    }
    .claude-spot::before {
      content: "";
      position: absolute; inset: 0;
      background-image:
        radial-gradient(circle at 1px 1px, rgba(212,168,67,0.05) 1px, transparent 0);
      background-size: 32px 32px;
      mask-image: radial-gradient(ellipse 60% 70% at 50% 50%, black 0%, transparent 70%);
      -webkit-mask-image: radial-gradient(ellipse 60% 70% at 50% 50%, black 0%, transparent 70%);
      pointer-events: none;
    }
    .claude-spot-inner { position: relative; z-index: 1; max-width: 980px; margin: 0 auto; text-align: center; padding: 0 24px; }
    .claude-spot-badge {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 6px 12px; border-radius: 2px;
      background: rgba(212,168,67,0.08);
      border: 0.5px solid rgba(212,168,67,0.35);
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px; font-weight: 600;
      letter-spacing: 0.14em; text-transform: uppercase;
      color: var(--amber);
      margin-bottom: 28px;
    }
    .claude-spot-badge .new-tag {
      background: var(--amber); color: #0A0A08;
      padding: 2px 6px; border-radius: 2px;
      font-size: 9px; letter-spacing: 0.1em;
    }
    .claude-spot-logo {
      display: inline-flex; align-items: center; justify-content: center;
      width: 88px; height: 88px; margin-bottom: 28px;
      background: rgba(212,168,67,0.06);
      border: 0.5px solid rgba(212,168,67,0.3);
      border-radius: 4px;
    }
    .claude-spot-logo svg { width: 44px; height: 44px; }
    .claude-spot h2 {
      font-family: 'Syne', sans-serif;
      font-size: clamp(34px, 4.2vw, 52px);
      font-weight: 700;
      line-height: 1.1;
      letter-spacing: -0.01em;
      color: var(--white);
      margin-bottom: 22px;
    }
    .claude-spot h2 .amber-word { color: var(--amber); }
    .claude-spot-sub {
      font-size: 17px;
      line-height: 1.7;
      color: var(--gray-1);
      max-width: 680px;
      margin: 0 auto 48px;
    }
    .claude-uses {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      margin-bottom: 48px;
      text-align: left;
    }
    .claude-use {
      background: rgba(255,255,255,0.02);
      border: 0.5px solid var(--border-dim);
      border-radius: 2px;
      padding: 22px 22px 24px;
      transition: border-color 0.2s, background 0.2s;
    }
    .claude-use:hover { border-color: rgba(212,168,67,0.3); background: rgba(212,168,67,0.03); }
    .claude-use-eyebrow {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px; font-weight: 600;
      letter-spacing: 0.14em; text-transform: uppercase;
      color: var(--amber); margin-bottom: 10px; display: block;
    }
    .claude-use-q {
      font-family: 'Syne', sans-serif;
      font-size: 15px; font-weight: 600;
      color: var(--white); line-height: 1.35; margin-bottom: 8px;
    }
    .claude-use-a {
      font-size: 13px; line-height: 1.55;
      color: var(--gray-2); margin: 0;
    }
    .claude-spot-ctas { display: inline-flex; gap: 12px; flex-wrap: wrap; justify-content: center; }
    @media (max-width: 820px) {
      .claude-spot { padding: 80px 0; }
      .claude-uses { grid-template-columns: 1fr; gap: 12px; margin-bottom: 36px; }
      .claude-spot-logo { width: 72px; height: 72px; margin-bottom: 24px; }
      .claude-spot-logo svg { width: 36px; height: 36px; }
      .claude-spot-sub { font-size: 15px; margin-bottom: 36px; }
    }

    /* ─── REVEAL ANIMATION ───────────────────────────────── */
    /* Opacity-only fade-in , removes vertical motion that was making the page feel like it jitters
       as the user scrolls and successive reveal targets settle into place. */
    .reveal {
      opacity: 0;
      transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1);
      will-change: opacity;
    }
    .reveal.visible { opacity: 1; }

    /* Soft gradient transitions between sections for modern flow */
    .platform-wrap {
      background: linear-gradient(180deg, transparent 0%, rgba(232,181,71,0.012) 50%, transparent 100%);
    }
    .stat-section,
    .compare-section,
    .steps-section,
    .faq-section {
      position: relative;
    }
    .stat-section::after,
    .compare-section::after,
    .steps-section::after {
      content: '';
      position: absolute;
      bottom: -1px; left: 0; right: 0;
      height: 80px;
      background: linear-gradient(180deg, transparent 0%, rgba(10,10,8,0.6) 100%);
      pointer-events: none;
      z-index: 1;
    }

    /* Modern card hover lift - Setrex/Nubien style */
    .mockup {
      transition:
        border-color 0.3s cubic-bezier(0.22, 1, 0.36, 1),
        transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
        box-shadow 0.3s cubic-bezier(0.22, 1, 0.36, 1) !important;
    }
    .int-grid-mockup,
    .book-frame,
    .portal-mockup,
    .ledger-mockup {
      transition: border-color 0.3s ease;
    }

    /* ─── HERO ENTRANCE ──────────────────────────────────── */
    /* Pure fade , no translateY , avoids visible page motion during initial load */
    @keyframes heroFadeUp {
      0%   { opacity: 0; }
      100% { opacity: 1; }
    }
    .hero-anim {
      opacity: 1 !important;
      animation: heroFadeUp 700ms cubic-bezier(0.16, 1, 0.3, 1) both;
    }

    /* ─── DASHBOARD AMBER GLOW BREATHE ───────────────────── */
    /* dashFloat removed (used to translate Y up to -3px). The amberGlow box-shadow pulse alone
       gives the dashboard a sense of life without moving anything on the Y axis. */
    @keyframes dashFloat {
      0%, 100% { transform: translate3d(0, 0, 0); }
      50%       { transform: translate3d(0, 0, 0); }
    }
    @keyframes amberGlow {
      0%, 100% { box-shadow: 0 0 0 0.5px rgba(212,168,67,0.08), 0 40px 80px rgba(0,0,0,0.6), 0 0 30px rgba(212,168,67,0.06); }
      50%       { box-shadow: 0 0 0 1px rgba(212,168,67,0.22),  0 40px 80px rgba(0,0,0,0.6), 0 0 60px rgba(212,168,67,0.13); }
    }
    .dash-float {
      animation: dashFloat 5s ease-in-out infinite, amberGlow 4s ease-in-out infinite;
      will-change: transform;
      backface-visibility: hidden;
    }
    /* Paint containment on float parents , animation cannot ripple repaint to siblings/page */
    .hero-visual,
    .hero-visual-mobile,
    .dash-frame-wrap,
    .platform-section .platform-row > *:not(.platform-copy) {
      contain: paint;
    }

    /* ─── CTA PULSE ──────────────────────────────────────── */
    @keyframes ctaPulse {
      0%   { box-shadow: 0 0 0 0 rgba(212,168,67,0.5); }
      70%  { box-shadow: 0 0 0 16px rgba(212,168,67,0); }
      100% { box-shadow: 0 0 0 0 rgba(212,168,67,0); }
    }
    .cta-pulse { animation: ctaPulse 1.4s cubic-bezier(0.22, 1, 0.36, 1); }

    /* ─── MOCKUP FLOAT ANIMATION (disabled vertical motion) ────────────────── */
    /* Vertical bobbing was making the page feel like it shifts while scrolling.
       Keyframes kept for animation-name compatibility but with 0 dy , no Y motion. */
    @keyframes mockupFloat {
      0%, 100% { transform: translate3d(0, 0, 0); }
      50%       { transform: translate3d(0, 0, 0); }
    }
    .platform-section .mockup {
      animation: mockupFloat 5s ease-in-out infinite;
      will-change: transform;
      backface-visibility: hidden;
    }
    /* Prevent float animation from shifting surrounding layout */
    .platform-section { overflow: hidden; }
    .dash-frame-wrap { overflow: hidden; }
    /* Stagger each platform mockup so they don't all bob in sync */
    .platform-section:nth-child(2) .mockup { animation-delay: 0.8s; }
    .platform-section:nth-child(3) .mockup { animation-delay: 1.6s; }
    .platform-section:nth-child(4) .mockup { animation-delay: 0.4s; }
    .platform-section:nth-child(5) .mockup { animation-delay: 1.2s; }
    .platform-section:nth-child(6) .mockup { animation-delay: 2.0s; }

    /* ─── CARD HOVER STATES ──────────────────────────────── */
    .mockup {
      transition: border-color 0.2s cubic-bezier(0.25, 1, 0.5, 1),
                  transform 0.2s cubic-bezier(0.25, 1, 0.5, 1),
                  box-shadow 0.2s cubic-bezier(0.25, 1, 0.5, 1);
    }
    .mockup:hover {
      border-color: rgba(212,168,67,0.28);
      animation-play-state: paused;
      transform: translateY(-4px);
      box-shadow: 0 16px 40px rgba(0,0,0,0.4), 0 0 20px rgba(212,168,67,0.05);
    }
    .step {
      transition: background 0.2s cubic-bezier(0.25, 1, 0.5, 1),
                  border-color 0.2s cubic-bezier(0.25, 1, 0.5, 1);
    }
    .step:hover {
      background: rgba(212,168,67,0.025);
    }

    /* ─── STAT STAMP ANIMATION ───────────────────────────── */
    @keyframes statStamp {
      0%   { transform: scale(1.15); opacity: 0; }
      60%  { transform: scale(0.97); opacity: 1; }
      80%  { transform: scale(1.01); }
      100% { transform: scale(1); opacity: 1; }
    }
    .stat-stamp {
      animation: statStamp 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    }

    /* ─── LEDGER ROW REVEAL ──────────────────────────────── */
    .ledger-row {
      transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .ledger-row.ledger-hidden {
      opacity: 0;
      transform: translateX(-8px);
    }
    .ledger-row.ledger-visible {
      opacity: 1;
      transform: translateX(0);
    }

    /* ─── COMPARISON TABLE LEGACY TINT ───────────────────── */
    .comp-row-legacy {
      transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                  transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                  background-color 0.6s ease;
    }
    .comp-row-legacy.comp-legacy-loaded {
      background-color: rgba(192, 57, 43, 0.08);
    }
    .comp-row-fc {
      transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                  transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }

    /* ─── BRIGHTBOLT CONNECTOR GLOW ─────────────────────── */
    .sched-spacer {
      transition: background 0.3s ease, box-shadow 0.3s ease;
    }
    .sched-spacer.bb-lit {
      background: var(--amber) !important;
      box-shadow: 0 0 6px rgba(212,168,67,0.4);
    }

    /* ─── STEP BUTTON HOVER ──────────────────────────────── */
    .btn-primary {
      position: relative;
    }
    .btn-primary:hover {
      box-shadow: 0 8px 24px rgba(255,200,74,0.28);
    }
    .btn-ghost:hover {
      box-shadow: 0 8px 24px rgba(255,200,74,0.18);
    }
    .btn-primary:active { transform: translateY(0) scale(0.97); }
    .btn-ghost:active   { transform: translateY(0) scale(0.97); }

    /* Override globals.css blue ::after line on homepage steps , use amber on-brand */
    .steps-section .step:not(:last-child)::after {
      background: linear-gradient(to bottom, var(--amber), transparent) !important;
    }

    /* Client Portal h2 , force 2 lines (5 + 5 words via <br>) by shrinking font enough to fit each half in column width */
    h2.client-portal-h2 {
      font-size: clamp(28px, 3vw, 40px);
    }

    /* ─── RESPONSIVE ─────────────────────────────────────── */
    @media (max-width: 1024px) {
      .hero-grid { grid-template-columns: 1fr; gap: 48px; }
      .hero-visual { display: none; }
      .hero-visual-mobile { display: block !important; }
      .platform-row { grid-template-columns: 1fr; gap: 48px; }
      .platform-row.reverse { direction: ltr; display: flex; flex-direction: column; }
      .platform-row.reverse > .platform-copy { order: 1; }
      .platform-row.reverse > :not(.platform-copy) { order: 2; }
      .footer-grid { grid-template-columns: 1fr 1fr; gap: 40px; }
      /* stat layout handled in dedicated breakpoint above */
    }
    @media (max-width: 768px) {
      .nav-right { display:flex; }
      .nav-demo { display:none; }
      .nav-hamburger { display:flex; }

      .nav-links { display: none; }
      .nav-right { display: flex; }
      .nav-demo { display: none; }
      .nav-hamburger { display: flex; }
      .hero { padding: 120px 0 80px; min-height: auto; }
      .stat-section { padding: 40px 0; }
      .platform-section { padding: 72px 0; }

      /* CRITICAL: on mobile, kill the float animation , translateY changes
         effective layout height when stacked, causing the whole page to shift */
      .platform-section .mockup {
        animation: none !important;
        transform: none !important;
      }

      /* Wrap each mockup column , use auto height but clip internal reflow */
      .platform-row > div:not(.platform-copy),
      .platform-row > .reveal {
        overflow: hidden;
        flex-shrink: 0;
      }

      /* Mockup clips internal content, stays within screen with margin , raised
         max-height so the 32px reveal translateY can complete without truncation */
      .platform-section .mockup {
        max-height: 420px;
        overflow: hidden;
        margin-left: 16px;
        margin-right: 16px;
      }
      .compare-section { padding: 72px 0; }
      .steps-row { grid-template-columns: 1fr; gap: 0; }
      .step { border-right: none; border-bottom: 0.5px solid var(--border-dim); }
      .step:last-child { border-bottom: none; }
      .faq-section { padding: 72px 0; }
      .demo-section { padding: 80px 0; }
      .footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
      .footer-bottom { flex-direction: column; gap: 16px; text-align: center; }
      .demo-trust { gap: 16px; }
      .int-pills { grid-template-columns: 1fr 1fr; }

      /* Marquee tweaks: soften mask edges and keep tracks wide enough so the ,50% slide completes cleanly */
      .stat-marquee {
        -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 4%, #000 96%, transparent 100%);
                mask-image: linear-gradient(90deg, transparent 0%, #000 4%, #000 96%, transparent 100%);
      }
      .stat-marquee-track { min-width: 200%; }

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
      /* Tighten stat section spacing on mobile */
    }
    @media (max-width: 480px) {
      /* Scoped to images and boxes , not applied universally which would break large mono numbers */
      img, video, iframe, .comp-grid { max-width: 100% !important; margin-left: auto !important; margin-right: auto !important; display: block; }
      * { min-width: 0 !important; }
      img { max-width: 100%; height: auto; }
      .container { max-width: 100%;  padding: 0 20px; }
      /* Scale down entire animation so full content is visible with ~15px margin each side */
      .container { padding-left: 15px !important; padding-right: 15px !important; }
      /* Use transform:scale instead of zoom , zoom does not preserve transform-origin
         on child animations, which made marquee translateX(,50%) and floats look
         misaligned. transform:scale + width compensation keeps inner motion in proportion. */
      .platform-section .mockup,
      .hero-visual-mobile .dash-frame,
      .book-frame,
      .viz-card {
        transform: scale(0.42) !important;
        transform-origin: top center !important;
        width: 238% !important;
        max-width: 238% !important;
        margin-left: -69% !important;
        margin-right: -69% !important;
        margin-bottom: -58% !important;
        overflow: hidden !important;
        box-sizing: border-box !important;
        display: block;
      }
      /* Cash match animation , prevent cards sliding outside mockup bounds */
      /* clip-path: inset(0) forces hardware clipping regardless of stacking context */
      .cash-match-widget { clip-path: inset(0) !important; overflow: hidden !important; }
      .cash-match-row { clip-path: inset(0) !important; overflow: hidden !important; }
      .cash-payment, .cash-invoice { min-width: 0 !important; flex: 1 !important; }
      .footer-grid { grid-template-columns: 1fr; }
      .hero-ctas { flex-direction: column; }
      .hero-ctas .btn-primary,
      .hero-ctas .btn-ghost { width: 100%; text-align: center; }
      /* Tightest screens: drop the mask fade further so first/last pills stay visible */
      .stat-marquee {
        -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 2%, #000 98%, transparent 100%);
                mask-image: linear-gradient(90deg, transparent 0%, #000 2%, #000 98%, transparent 100%);
      }
      .steps-section { padding: 72px 0; }
    }

    .hero-visual-mobile { display: none; margin-top: 48px; max-width: 100%; overflow: hidden; }

    /* ─── FOCUS INDICATORS ──────────────────────────────── */
    /* WCAG AA requires visible focus indicators for all keyboard-navigable elements */
    :focus-visible {
      outline: 2px solid var(--amber);
      outline-offset: 2px;
      border-radius: 2px;
    }
    /* Nav links get a subtler focus ring since they have their own hover bg */
    .nav-links a:focus-visible,
    .nav-dropdown a:focus-visible {
      outline: 1.5px solid var(--amber);
      outline-offset: 1px;
    }
    /* FAQ keyboard focus */
    .faq-q:focus-visible {
      outline: 1.5px solid var(--amber);
      outline-offset: 3px;
      border-radius: 2px;
    }

    /* ─── REDUCED MOTION ─────────────────────────────────── */
    /* Preserve functional transitions (opacity for show/hide) but kill decorative
       animations. duration: 0.01ms completes instantly while still firing events. */
    @media (prefers-reduced-motion: reduce) {
      *,
      *::before,
      *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    }

    /* ─── BB EMAIL QUEUE ─────────────────────────────────── */
    /* Fixed min-height prevents the queue from shrinking when a row is removed and
       before the new one is appended (was creating a visible ~50px vertical reflow). */
    .bb-queue { padding: 16px; display: flex; flex-direction: column; gap: 8px; min-height: 200px; }
    .bb-queue-row {
      display: flex; align-items: center; gap: 10px;
      padding: 10px 12px;
      background: var(--bg-4);
      border: 0.5px solid var(--border-dim);
      border-radius: 2px;
      font-family: 'Inter', sans-serif;
      font-size: 10px;
    }
    .bb-queue-status {
      font-size: 9px; font-weight: 600;
      letter-spacing: 0.06em; text-transform: uppercase;
      padding: 3px 8px; border-radius: 2px; flex-shrink: 0;
    }
    .bb-queue-status.status-done {
      background: rgba(39,174,96,0.1); color: var(--green);
      border: 0.5px solid rgba(39,174,96,0.25);
    }
    .bb-queue-status.status-processing {
      background: rgba(212,168,67,0.1); color: var(--amber);
      border: 0.5px solid rgba(212,168,67,0.25);
      animation: bb-status-pulse 1.5s ease-in-out infinite;
    }
    .bb-queue-status.status-queued {
      background: rgba(255,255,255,0.04); color: var(--gray-3);
      border: 0.5px solid var(--border-dim);
    }
    @keyframes bb-status-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.45; } }
    .bb-queue-subject { flex: 1; color: var(--gray-2); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

    /* ─── CASH MATCH ─────────────────────────────────────── */
    .cash-match-widget {
      padding: 20px 16px; display: flex; flex-direction: column;
      align-items: center; gap: 16px;
    }
    .cash-match-row {
      display: flex; align-items: center; justify-content: center;
      gap: 0; width: 100%; min-height: 80px; position: relative;
    }
    .cash-payment, .cash-invoice {
      display: flex; flex-direction: column; align-items: center;
      padding: 12px 18px;
      background: var(--bg-4);
      border: 1.5px solid rgba(200,60,60,0.7);
      border-radius: 2px;
      min-width: 130px;
      transition: border-color 400ms ease, box-shadow 400ms ease;
    }
    .cash-payment.cm-matched, .cash-invoice.cm-matched {
      border-color: #D4A843;
      box-shadow: 0 0 0 2px rgba(212,168,67,0.25), 0 0 24px rgba(212,168,67,0.2);
    }
    .cash-cards-wrap {
      display: flex; align-items: stretch;
      border-radius: 2px;
      transition: box-shadow 400ms ease;
    }
    .cash-cards-wrap.cm-matched {
      box-shadow: 0 0 0 1.5px #D4A843, 0 0 28px rgba(212,168,67,0.25);
    }
    .cash-payment.cm-matched {
      border: none;
      border-radius: 2px 0 0 2px;
    }
    .cash-invoice.cm-matched {
      border: none;
      border-radius: 0 2px 2px 0;
    }
    .cash-amount {
      font-family: 'Inter', sans-serif;
      font-size: 14px; font-weight: 600; color: var(--white);
    }
    .cash-label {
      font-family: 'Inter', sans-serif;
      font-size: 9px; text-transform: uppercase;
      letter-spacing: 0.08em; color: var(--gray-3); margin-top: 4px;
    }
    .cash-matched {
      font-family: 'Inter', sans-serif;
      font-size: 10px; font-weight: 600;
      color: var(--green);
      background: rgba(39,174,96,0.1);
      border: 0.5px solid rgba(39,174,96,0.25);
      padding: 6px 14px; border-radius: 2px;
      transform: scale(0);
      transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
      letter-spacing: 0.06em; text-transform: uppercase;
    }
    .cash-matched.cm-visible { transform: scale(1); }

    /* ─── PORTAL STATUS BADGE TRANSITION ─────────────────── */
    .portal-status {
      transition: background 0.4s ease, color 0.4s ease, border-color 0.4s ease;
    }

    /* ─── LEDGER BALANCED ROW ────────────────────────────── */
    .ledger-row-balanced {
      border-left: 3px solid var(--green) !important;
      background: rgba(39,174,96,0.04);
    }
    .ledger-mockup-wrap {
      transition: background 0.4s ease;
    }

    /* ─── BB QUEUE-TO-FLOW CONNECTOR ─────────────────────── */
    .bb-queue-connector {
      display: flex; justify-content: center;
      padding: 0 24px; pointer-events: none;
    }
    .bb-qc-line {
      width: 1.5px; height: 20px;
      background: var(--border-dim);
      transition: background 0.4s ease, box-shadow 0.4s ease;
    }
    .bb-qc-line.bb-qc-active {
      background: var(--amber);
      box-shadow: 0 0 8px rgba(212,168,67,0.45);
    }

    /* ─── BOOK OF BUSINESS TAB PANELS ────────────────────── */
    /* Fixed height prevents layout reflow when tabs switch.
       Panels are absolutely positioned so they don't push surrounding content. */
    .book-tab-panels { position: relative; height: 296px; overflow: hidden; }
    .book-tab-panel {
      position: absolute; top: 0; left: 0; right: 0;
      opacity: 0; pointer-events: none;
      transition: opacity 150ms ease;
      /* Panels carry their own padding so container can be padding:0 */
      padding: 16px;
    }
    .book-tab-panel.active {
      opacity: 1; pointer-events: auto;
      transition: opacity 200ms ease;
    }
    .book-data-label {
      font-family: 'Inter', sans-serif;
      font-size: 9px; font-weight: 600;
      letter-spacing: 0.1em; text-transform: uppercase;
      color: var(--gray-3); margin-bottom: 10px;
    }
    .book-data-rows { display: flex; flex-direction: column; }
    .book-data-row {
      display: flex; align-items: center; gap: 10px;
      padding: 8px 0;
      border-bottom: 0.5px solid var(--border-dim);
      font-family: 'Inter', sans-serif; font-size: 10px;
    }
    .book-data-row:last-child { border-bottom: none; }
    .book-data-id { color: var(--gray-3); width: 76px; flex-shrink: 0; }
    .book-data-name { flex: 1; color: var(--gray-2); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .book-data-amount { color: var(--white); font-weight: 600; flex-shrink: 0; }
    .book-data-date { font-family: 'Inter', sans-serif; font-size: 9px; color: var(--gray-3); flex-shrink: 0; }
    .book-kv-rows { display: flex; flex-direction: column; }
    .book-kv-row {
      display: flex; justify-content: space-between; align-items: center;
      padding: 9px 0; border-bottom: 0.5px solid var(--border-dim);
    }
    .book-kv-row:last-child { border-bottom: none; }
    .book-kv-label { font-family: 'Inter', sans-serif; font-size: 9px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--gray-3); }
    .book-kv-val { font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 600; color: var(--white); }
    .badge-red { background: rgba(192,57,43,0.1); color: var(--red); border: 0.5px solid rgba(192,57,43,0.25); }
  `;
const PAGE_JS = `
(function runPageInit() {
  // Script loads with strategy="afterInteractive", which fires after DOMContentLoaded —
  // listening for it would silently miss the event and leave all .reveal elements at opacity:0.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runPageInit, { once: true });
    return;
  }

  // ─── NAV SCROLL ──────────────────────────────────────────
  var nav = document.getElementById('main-nav');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 60) { nav.classList.add('scrolled'); }
    else { nav.classList.remove('scrolled'); }
  }, { passive: true });

  // ─── NAV DROPDOWNS ───────────────────────────────────────
  document.querySelectorAll('.nav-link-toggle').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      var li = this.parentElement;
      var wasOpen = li.classList.contains('open');
      document.querySelectorAll('.nav-links > li').forEach(function(l) {
        l.classList.remove('open');
        var toggle = l.querySelector('.nav-link-toggle');
        if (toggle) { toggle.setAttribute('aria-expanded', 'false'); }
      });
      if (!wasOpen) {
        li.classList.add('open');
        this.setAttribute('aria-expanded', 'true');
      }
    });
  });
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.nav-links')) {
      document.querySelectorAll('.nav-links > li').forEach(function(l) {
        l.classList.remove('open');
        var toggle = l.querySelector('.nav-link-toggle');
        if (toggle) { toggle.setAttribute('aria-expanded', 'false'); }
      });
    }
  });

  // ─── HAMBURGER ───────────────────────────────────────────
  var hamburger = document.getElementById('hamburger');
  var mobileNav = document.getElementById('mobile-nav');
  if (hamburger) {
    hamburger.addEventListener('click', function() {
      this.classList.toggle('open');
      mobileNav.classList.toggle('open');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });
  }

  // ─── MOBILE NAV TOGGLES ──────────────────────────────────
  document.querySelectorAll('.mobile-nav-toggle').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var targetId = this.dataset.target;
      var sub = document.getElementById(targetId);
      this.classList.toggle('open');
      if (sub) { sub.classList.toggle('open'); }
    });
  });

  // ─── CURSOR SPOTLIGHT on pin cards ─────────
  document.querySelectorAll('.platform-section--pin').forEach(function(card) {
    card.addEventListener('mousemove', function(e) {
      var rect = card.getBoundingClientRect();
      var x = ((e.clientX - rect.left) / rect.width * 100) + '%';
      var y = ((e.clientY - rect.top) / rect.height * 100) + '%';
      card.style.setProperty('--spot-x', x);
      card.style.setProperty('--spot-y', y);
    });
  });

  // ─── SCROLL REVEAL (10% threshold, 120ms stagger) ─────────
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var revealIO = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var siblings = Array.from(el.parentElement ? el.parentElement.querySelectorAll('.reveal') : []);
          var idx = siblings.indexOf(el);
          if (idx > 0) { el.style.transitionDelay = (idx * 120) + 'ms'; }
          el.classList.add('visible');
          revealIO.unobserve(el);
        }
      });
    }, { threshold: 0.1 });
    revealEls.forEach(function(el) { revealIO.observe(el); });
  } else {
    revealEls.forEach(function(el) { el.classList.add('visible'); });
  }
  // Fallback: reveal all after 250ms, clearing any stagger delay so they snap in.
  setTimeout(function() {
    document.querySelectorAll('.reveal:not(.visible)').forEach(function(el) {
      el.style.transitionDelay = '0ms';
      el.classList.add('visible');
    });
  }, 250);

  // ─── FAQ ACCORDION ───────────────────────────────────────
  document.querySelectorAll('.faq-q').forEach(function(q) {
    q.addEventListener('click', function() {
      var a = this.nextElementSibling;
      var isOpen = this.classList.contains('open');
      document.querySelectorAll('.faq-q').forEach(function(qq) {
        qq.classList.remove('open');
        qq.setAttribute('aria-expanded', 'false');
        if (qq.nextElementSibling) { qq.nextElementSibling.classList.remove('open'); }
      });
      if (!isOpen) {
        this.classList.add('open');
        this.setAttribute('aria-expanded', 'true');
        if (a) { a.classList.add('open'); }
      }
    });
    q.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); this.click(); }
    });
  });

  // ─── COUNTER ANIMATION ───────────────────────────────────
  function animateCounter(el, target, duration) {
    var start = performance.now();
    function update(now) {
      var elapsed = now - start;
      var progress = Math.min(elapsed / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target);
      if (progress < 1) { requestAnimationFrame(update); }
      else { el.textContent = target; }
    }
    requestAnimationFrame(update);
  }

  // ─── ANIMATION 6: INTEGRATIONS ACTIVE GLOW CYCLE ─────────
  (function() {
    var pills = document.querySelectorAll('.int-pill');
    if (!pills.length) return;
    var current = 0;
    function cycleActive() {
      pills.forEach(function(p) { p.classList.remove('int-active'); });
      pills[current].classList.add('int-active');
      current = (current + 1) % pills.length;
    }
    cycleActive();
    setInterval(cycleActive, 3000);
  })();

  // ─── ANIMATION 5: 94% STAMP ──────────────────────────────
  // Start hidden, snap in on intersection, punch to 0.95 then spring to 1.0
  var statEl = document.getElementById('stat-section');
  var statCounter = document.getElementById('stat-counter');
  var statRight = statEl ? statEl.querySelector('.stat-right') : null;
  if (statEl && statCounter && 'IntersectionObserver' in window) {
    // Initial state: scale(1.15) opacity 0
    statCounter.style.transform = 'scale(1.15)';
    statCounter.style.opacity = '0';
    statCounter.style.display = 'inline-block';
    if (statRight) {
      statRight.style.opacity = '0';
      statRight.style.transition = 'opacity 0.3s ease';
    }
    var statTriggered = false;
    var statIO = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting && !statTriggered) {
          statTriggered = true;
          statIO.unobserve(entry.target);
          // Snap opacity to 1
          statCounter.style.opacity = '1';
          statCounter.style.transition = 'transform 80ms ease';
          // Punch to scale(0.95)
          statCounter.style.transform = 'scale(0.95)';
          setTimeout(function() {
            // Spring back to scale(1.0)
            statCounter.style.transition = 'transform 200ms cubic-bezier(0.34,1.56,0.64,1)';
            statCounter.style.transform = 'scale(1.0)';
          }, 80);
          // stat-right fades in 150ms after stamp
          setTimeout(function() {
            if (statRight) { statRight.style.opacity = '1'; }
          }, 150);
          // Count up
          animateCounter(statCounter, 94, 1400);
        }
      });
    }, { threshold: 0.1 });
    statIO.observe(statEl);
  }

  // ─── INLINE COUNTERS (80%, 20+) ──────────────────────────
  if ('IntersectionObserver' in window) {
    document.querySelectorAll('.inline-counter').forEach(function(el) {
      var target = parseInt(el.dataset.target, 10);
      var suffix = el.dataset.suffix || '';
      var triggered = false;
      var icio = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting && !triggered) {
            triggered = true;
            var numEl = document.createElement('span');
            el.textContent = '';
            el.appendChild(numEl);
            el.appendChild(document.createTextNode(suffix));
            animateCounter(numEl, target, 1200);
            icio.unobserve(el);
          }
        });
      }, { threshold: 0.1 });
      icio.observe(el);
    });
  }

  // ─── ANIMATION 1: BRIGHTBOLT UNIFIED (QUEUE + FLOW, ONE LOOP) ───
  var bbQueue = document.getElementById('bb-queue');
  var bbFlow = document.getElementById('brightbolt-flow');
  var bbQcLine = document.getElementById('bb-qc-line');
  var bbEmailSubjects = [
    'apex@acmecarriers.com \\u00b7 Invoice #4821 \\u00b7 $14,200',
    'billing@truckingco.net \\u00b7 3 attachments \\u00b7 $8,750',
    'dispatch@swiftfreight.com \\u00b7 Invoice batch \\u00b7 $31,400',
    'ar@mountainlogistics.com \\u00b7 Invoice #2209 \\u00b7 $6,100',
    'invoices@greatplainshauling.com \\u00b7 $22,800'
  ];
  var bbSubjectIdx = 3;

  function makeBBRow(status, subject) {
    var row = document.createElement('div');
    row.className = 'bb-queue-row';
    var badge = document.createElement('span');
    badge.className = 'bb-queue-status status-' + status;
    badge.textContent = status.charAt(0).toUpperCase() + status.slice(1);
    var subj = document.createElement('span');
    subj.className = 'bb-queue-subject';
    subj.textContent = subject;
    row.appendChild(badge);
    row.appendChild(subj);
    return row;
  }

  function setBBRowStatus(row, status) {
    var badge = row.querySelector('.bb-queue-status');
    if (!badge) { return; }
    badge.className = 'bb-queue-status status-' + status;
    badge.textContent = status.charAt(0).toUpperCase() + status.slice(1);
  }

  var bbSteps = bbFlow ? bbFlow.querySelectorAll('.bb-step') : [];
  var bbConnectors = bbFlow ? bbFlow.querySelectorAll('.bb-connector') : [];

  function resetBBFlow() {
    bbSteps.forEach(function(s) { s.classList.remove('bb-active'); });
    bbConnectors.forEach(function(c) { c.classList.remove('bb-lit'); });
    if (bbQcLine) { bbQcLine.classList.remove('bb-qc-active'); }
  }

  // Full unified cycle: queue rolls, connector pulses, steps light up in sequence
  function runBBCycle() {
    if (!bbQueue) { return; }
    var rows = bbQueue.querySelectorAll('.bb-queue-row');
    if (rows.length < 1) { return; }
    var topRow = rows[0];

    // 1. Fade out DONE row
    topRow.style.transition = 'opacity 300ms ease, transform 300ms ease';
    topRow.style.opacity = '0';
    topRow.style.transform = 'translateY(-20px)';

    setTimeout(function() {
      if (topRow.parentNode) { topRow.parentNode.removeChild(topRow); }
      var remaining = bbQueue.querySelectorAll('.bb-queue-row');
      if (remaining[0]) { setBBRowStatus(remaining[0], 'done'); }
      if (remaining[1]) { setBBRowStatus(remaining[1], 'processing'); }

      // 2. Append new QUEUED row
      setTimeout(function() {
        var subject = bbEmailSubjects[bbSubjectIdx % bbEmailSubjects.length];
        bbSubjectIdx++;
        var newRow = makeBBRow('queued', subject);
        newRow.style.opacity = '0';
        newRow.style.transform = 'translateY(20px)';
        newRow.style.transition = 'none';
        bbQueue.appendChild(newRow);
        newRow.getBoundingClientRect();
        newRow.style.transition = 'opacity 300ms ease, transform 300ms ease';
        newRow.style.opacity = '1';
        newRow.style.transform = 'translateY(0)';

        // 3. New item enters QUEUED -> connector fires + Step 0 lights up
        resetBBFlow();
        if (bbQcLine) { bbQcLine.classList.add('bb-qc-active'); }
        if (bbSteps[0]) { bbSteps[0].classList.add('bb-active'); }

        // 4. QUEUED -> PROCESSING: Steps 1,2,3 fire sequentially (600ms apart)
        setTimeout(function() {
          if (bbQcLine) { bbQcLine.classList.remove('bb-qc-active'); }
          if (bbConnectors[0]) { bbConnectors[0].classList.add('bb-lit'); }
          if (bbSteps[1]) { bbSteps[1].classList.add('bb-active'); }
        }, 600);
        setTimeout(function() {
          if (bbConnectors[1]) { bbConnectors[1].classList.add('bb-lit'); }
          if (bbSteps[2]) { bbSteps[2].classList.add('bb-active'); }
        }, 1200);

        // 5. DONE: Step 3 goes green briefly then returns to amber
        setTimeout(function() {
          if (bbConnectors[2]) { bbConnectors[2].classList.add('bb-lit'); }
          var lastStep = bbSteps[3];
          if (lastStep) {
            lastStep.classList.add('bb-active');
            var resultText = lastStep.querySelector('.sched-result-text');
            var resultCheck = lastStep.querySelector('.sched-result-check');
            if (resultText) { resultText.style.transition = 'color 0.3s'; resultText.style.color = 'var(--green)'; }
            if (resultCheck) { resultCheck.style.transition = 'color 0.3s'; }
            // After 1.2s revert result colors to amber
            setTimeout(function() {
              if (resultText) { resultText.style.color = ''; }
            }, 1200);
          }
        }, 1800);

      }, 200);
    }, 300);
  }

  if (bbQueue && bbFlow && 'IntersectionObserver' in window) {
    var bbTriggered = false;
    var bbIO = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting && !bbTriggered) {
          bbTriggered = true;
          bbIO.unobserve(bbQueue);
          // Initial flow sequence on enter
          resetBBFlow();
          if (bbSteps[0]) { bbSteps[0].classList.add('bb-active'); }
          setTimeout(function() {
            if (bbConnectors[0]) { bbConnectors[0].classList.add('bb-lit'); }
            if (bbSteps[1]) { bbSteps[1].classList.add('bb-active'); }
          }, 550);
          setTimeout(function() {
            if (bbConnectors[1]) { bbConnectors[1].classList.add('bb-lit'); }
            if (bbSteps[2]) { bbSteps[2].classList.add('bb-active'); }
          }, 1100);
          setTimeout(function() {
            if (bbConnectors[2]) { bbConnectors[2].classList.add('bb-lit'); }
            if (bbSteps[3]) { bbSteps[3].classList.add('bb-active'); }
          }, 1650);
          // Then queue drives everything on a unified interval
          setInterval(runBBCycle, 4500);
        }
      });
    }, { threshold: 0.1 });
    bbIO.observe(bbQueue);
    setTimeout(function() {
      if (!bbTriggered) {
        bbTriggered = true;
        resetBBFlow();
        if (bbSteps[0]) { bbSteps[0].classList.add('bb-active'); }
        setTimeout(function() {
          if (bbConnectors[0]) { bbConnectors[0].classList.add('bb-lit'); }
          if (bbSteps[1]) { bbSteps[1].classList.add('bb-active'); }
        }, 550);
        setTimeout(function() {
          if (bbConnectors[1]) { bbConnectors[1].classList.add('bb-lit'); }
          if (bbSteps[2]) { bbSteps[2].classList.add('bb-active'); }
        }, 1100);
        setTimeout(function() {
          if (bbConnectors[2]) { bbConnectors[2].classList.add('bb-lit'); }
          if (bbSteps[3]) { bbSteps[3].classList.add('bb-active'); }
        }, 1650);
        setInterval(runBBCycle, 4500);
      }
    }, 1000);
  }

  // ─── ANIMATION 2: CASH MATCH (START SEPARATED) ───────────
  var cashMockup = document.getElementById('cash-match-mockup');
  var cashPayment = document.getElementById('cash-payment');
  var cashInvoice = document.getElementById('cash-invoice');
  var cashMatched = document.getElementById('cash-matched');
  var cashWrap = document.getElementById('cash-cards-wrap');

  // Mobile: use smaller offset so cards don't overflow the mockup
  var cashOffset = window.innerWidth <= 768 ? 30 : 80;

  // Set initial separated state immediately (no opacity:0 on above-fold risk)
  if (cashPayment && cashInvoice) {
    cashPayment.style.transform = 'translateX(-' + cashOffset + 'px)';
    cashPayment.style.opacity = '0.4';
    cashInvoice.style.transform = 'translateX(' + cashOffset + 'px)';
    cashInvoice.style.opacity = '0.4';
  }

  function resetCashMatch() {
    if (!cashPayment || !cashInvoice || !cashMatched) { return; }
    cashPayment.style.transition = 'transform 500ms ease, opacity 500ms ease';
    cashInvoice.style.transition = 'transform 500ms ease, opacity 500ms ease';
    cashPayment.style.transform = 'translateX(-' + cashOffset + 'px)';
    cashInvoice.style.transform = 'translateX(' + cashOffset + 'px)';
    cashPayment.style.opacity = '0.4';
    cashInvoice.style.opacity = '0.4';
    cashPayment.style.boxShadow = '';
    cashInvoice.style.boxShadow = '';
    cashPayment.classList.remove('cm-matched');
    cashInvoice.classList.remove('cm-matched');
    if (cashWrap) { cashWrap.classList.remove('cm-matched'); }
    cashMatched.classList.remove('cm-visible');
  }

  function runCashMatch() {
    if (!cashPayment || !cashInvoice || !cashMatched) { return; }
    // Reset to separated state
    cashPayment.style.transition = 'none';
    cashInvoice.style.transition = 'none';
    cashPayment.style.transform = 'translateX(-' + cashOffset + 'px)';
    cashInvoice.style.transform = 'translateX(' + cashOffset + 'px)';
    cashPayment.style.opacity = '0.4';
    cashInvoice.style.opacity = '0.4';
    cashMatched.classList.remove('cm-visible');
    cashPayment.style.boxShadow = '';
    cashInvoice.style.boxShadow = '';

    // Force reflow
    cashPayment.getBoundingClientRect();

    // Animate inward to center , fixed 80px offset works on all screen sizes
    setTimeout(function() {
      cashPayment.style.transition = 'transform 800ms cubic-bezier(0.34,1.56,0.64,1), opacity 600ms ease';
      cashInvoice.style.transition = 'transform 800ms cubic-bezier(0.34,1.56,0.64,1), opacity 600ms ease';
      cashPayment.style.transform = 'translateX(0)';
      cashInvoice.style.transform = 'translateX(0)';
      cashPayment.style.opacity = '1';
      cashInvoice.style.opacity = '1';

      setTimeout(function() {
        cashPayment.style.boxShadow = '';
        cashInvoice.style.boxShadow = '';
        cashPayment.classList.add('cm-matched');
        cashInvoice.classList.add('cm-matched');
        if (cashWrap) { cashWrap.classList.add('cm-matched'); }
        cashMatched.classList.add('cm-visible');

        // After showing the match, fade back to separated positions then replay
        setTimeout(function() {
          resetCashMatch();
          setTimeout(runCashMatch, 1000);
        }, 3000);
      }, 800);
    }, 300);
  }

  if (cashMockup && 'IntersectionObserver' in window) {
    var cashTriggered = false;
    var cashIO = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting && !cashTriggered) {
          cashTriggered = true;
          runCashMatch();
          cashIO.unobserve(cashMockup);
        }
      });
    }, { threshold: 0.1 });
    cashIO.observe(cashMockup);
  }

  // ─── ANIMATION 3: CLIENT PORTAL STATUS CASCADE ───────────
  var portalBadges = [
    document.getElementById('portal-badge-0'),
    document.getElementById('portal-badge-1'),
    document.getElementById('portal-badge-2')
  ];

  function setPortalBadge(badge, status) {
    if (!badge) { return; }
    badge.className = 'portal-status badge';
    if (status === 'funded') {
      badge.classList.add('s-funded');
      badge.textContent = 'Funded';
    } else {
      badge.classList.add('s-pending');
      badge.textContent = 'Pending';
    }
  }

  function runPortalCascade() {
    setTimeout(function() { setPortalBadge(portalBadges[0], 'funded'); }, 0);
    setTimeout(function() { setPortalBadge(portalBadges[1], 'funded'); }, 800);
    setTimeout(function() { setPortalBadge(portalBadges[2], 'funded'); }, 1600);
    setTimeout(function() {
      setPortalBadge(portalBadges[0], 'pending');
      setPortalBadge(portalBadges[1], 'pending');
      setPortalBadge(portalBadges[2], 'pending');
    }, 4000);
  }

  var portalSection = portalBadges[0] ? portalBadges[0].closest('.platform-section') : null;
  if (portalSection && 'IntersectionObserver' in window) {
    var portalTriggered = false;
    var portalIO = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting && !portalTriggered) {
          portalTriggered = true;
          runPortalCascade();
          setInterval(runPortalCascade, 5200);
          portalIO.unobserve(portalSection);
        }
      });
    }, { threshold: 0.1 });
    portalIO.observe(portalSection);
  }

  // ─── ANIMATION 4: GL JOURNAL BALANCED CLOSE ──────────────
  var ledgerMockup = document.getElementById('ledger-mockup');
  if (ledgerMockup && 'IntersectionObserver' in window) {
    var ledgerTriggered = false;
    var ledgerRows = ledgerMockup.querySelectorAll('.ledger-row');

    function runLedgerSequence() {
      ledgerRows.forEach(function(r, i) {
        setTimeout(function() {
          r.classList.add('ledger-visible');
          r.classList.remove('ledger-hidden');
        }, i * 280);
      });
      // After all rows visible, wait 400ms then add balanced row
      var totalTime = ledgerRows.length * 280 + 400;
      setTimeout(function() {
        // Check if balanced row already added
        if (ledgerMockup.querySelector('.ledger-row-balanced')) { return; }
        // Insert balanced row before footer
        var footer = ledgerMockup.querySelector('.ledger-footer');
        var balancedRow = document.createElement('div');
        balancedRow.className = 'ledger-row ledger-row-balanced ledger-hidden';
        balancedRow.innerHTML =
          '<span class="ledger-desc" style="color:var(--green);font-weight:600;">Balance</span>' +
          '<span class="ledger-type" style="color:var(--green);">Net</span>' +
          '<span class="ledger-debit" style="color:var(--green);">$0.00</span>' +
          '<span class="ledger-credit" style="color:var(--green);">$0.00</span>';
        if (footer) {
          ledgerMockup.insertBefore(balancedRow, footer);
        } else {
          ledgerMockup.appendChild(balancedRow);
        }
        // Trigger slide-in
        balancedRow.getBoundingClientRect();
        balancedRow.classList.add('ledger-visible');
        balancedRow.classList.remove('ledger-hidden');
        // Flash the journal green
        ledgerMockup.style.transition = 'background 0ms';
        ledgerMockup.style.background = 'rgba(39,174,96,0.08)';
        setTimeout(function() {
          ledgerMockup.style.transition = 'background 400ms ease';
          ledgerMockup.style.background = 'transparent';
        }, 400);
      }, totalTime);
    }

    var ledgerIO = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting && !ledgerTriggered) {
          ledgerTriggered = true;
          runLedgerSequence();
          ledgerIO.unobserve(ledgerMockup);
        }
      });
    }, { threshold: 0.1 });
    ledgerIO.observe(ledgerMockup);
    setTimeout(function() {
      if (!ledgerTriggered) {
        ledgerTriggered = true;
        runLedgerSequence();
      }
    }, 400);
  }

  // ─── COMPARISON TABLE: LEGACY TINT + SLIDE IN ────────────
  var compGrid = document.getElementById('comp-grid');
  if (compGrid && 'IntersectionObserver' in window) {
    var compTriggered = false;
    compGrid.classList.add('comp-table-animate');
    var compIO = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting && !compTriggered) {
          compTriggered = true;
          var legacyRows = compGrid.querySelectorAll('.comp-row-legacy');
          var fcRows = compGrid.querySelectorAll('.comp-row-fc');
          var maxRows = Math.max(legacyRows.length, fcRows.length);
          for (var i = 0; i < maxRows; i++) {
            (function(idx) {
              setTimeout(function() {
                if (legacyRows[idx]) {
                  legacyRows[idx].style.opacity = '1';
                  legacyRows[idx].style.transform = 'translateX(0)';
                  setTimeout(function() {
                    if (legacyRows[idx]) { legacyRows[idx].classList.add('comp-legacy-loaded'); }
                  }, 200);
                }
                if (fcRows[idx]) {
                  fcRows[idx].style.opacity = '1';
                  fcRows[idx].style.transform = 'translateX(0)';
                }
              }, idx * 70);
            })(i);
          }
          compIO.unobserve(compGrid);
        }
      });
    }, { threshold: 0.1 });
    compIO.observe(compGrid);
  }

  // ─── BOOK OF BUSINESS TAB CYCLING ────────────────────────
  var bookMockup = document.getElementById('book-mockup');
  var bookTabEls = document.querySelectorAll('[data-book-tab]');
  var bookPanelEls = document.querySelectorAll('[id^="book-panel-"]');
  var bookActiveTab = 0;
  var bookTabCount = bookTabEls.length;
  var bookCycleTimer = null;

  function setBookTab(idx) {
    bookTabEls.forEach(function(t, i) {
      if (i === idx) {
        t.classList.add('active');
      } else {
        t.classList.remove('active');
      }
    });
    bookPanelEls.forEach(function(p, i) {
      if (i === idx) {
        p.style.transition = 'opacity 200ms ease';
        p.style.opacity = '1';
        p.classList.add('active');
      } else {
        p.style.transition = 'opacity 150ms ease';
        p.style.opacity = '0';
        setTimeout(function() { p.classList.remove('active'); }, 150);
      }
    });
  }

  function advanceBookTab() {
    bookActiveTab = (bookActiveTab + 1) % bookTabCount;
    setBookTab(bookActiveTab);
  }

  function startBookCycle() {
    if (bookCycleTimer) { return; }
    bookCycleTimer = setInterval(advanceBookTab, 2200);
  }

  function stopBookCycle() {
    if (bookCycleTimer) { clearInterval(bookCycleTimer); bookCycleTimer = null; }
  }

  if (bookMockup && bookTabEls.length > 0 && 'IntersectionObserver' in window) {
    var bookIO = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          startBookCycle();
        } else {
          stopBookCycle();
        }
      });
    }, { threshold: 0.1 });
    bookIO.observe(bookMockup);
  }

  // ─── CTA PULSE AT 8s ────────────────────────────────────
  setTimeout(function() {
    var ctaBtn = document.getElementById('hero-cta-btn');
    if (ctaBtn) {
      ctaBtn.classList.add('cta-pulse');
      ctaBtn.addEventListener('animationend', function() {
        ctaBtn.classList.remove('cta-pulse');
      }, { once: true });
    }
  }, 8000);

})(); // end runPageInit
`;

export default function Page() {
  const { frontmatter: c } = loadPage<HomeFrontmatter>("home", LOCALE);
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />
      <div
        role="status"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1001,
          height: 36,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--amber)",
          color: "var(--bg-2)",
          textAlign: "center",
          padding: "0 16px",
          fontSize: "13px",
          fontWeight: 600,
          letterSpacing: "0.04em",
        }}
      >
        This is a demo for the marketing team
      </div>
      <nav className="nav" id="main-nav">
  <div className="nav-inner">
    <a href="/" className="nav-logo">
      <img src="/images/logo-nav.svg" alt="FactorCloud" />
    </a>

    <ul className="nav-links">
      <li>
        <a href="#" className="nav-link-toggle" data-dropdown="platform" aria-expanded="false" aria-haspopup="true">
          Platform
          <svg className="chevron" viewBox="0 0 10 6" aria-hidden="true"><polyline points="1 1 5 5 9 1"></polyline></svg>
        </a>
        <div className="nav-dropdown" id="dd-platform">
          <a href="/features/automation"><span className="dd-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D4A843" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polyline></svg></span>Automation</a>
          <a href="/features/back-end"><span className="dd-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D4A843" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg></span>Client Management</a>
          <a href="/features/tracking"><span className="dd-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D4A843" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg></span>Operations</a>
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
      <button className="nav-hamburger" id="hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</nav>


<div className="mobile-nav" id="mobile-nav">
  <div className="mobile-nav-section">
    <button className="mobile-nav-toggle" data-target="m-platform">
      Platform
      <svg className="chevron" width="16" height="16" viewBox="0 0 10 6"><polyline points="1 1 5 5 9 1"></polyline></svg>
    </button>
    <div className="mobile-nav-sub" id="m-platform">
      <a href="/features/automation">Automation</a>
      <a href="/features/back-end">Client Management</a>
      <a href="/features/tracking">Operations</a>
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
  <div className="mobile-nav-cta">
    <a href="/get-demo" className="btn-primary" style={{width: "100%", justifyContent: "center"}}>Get a Demo</a>
  </div>
</div>





<section className="hero">
  <div className="hero-glow"></div>
  <div className="hero-inner">
    <div className="container">
      <div className="hero-grid">

        <div className="hero-copy">
          <span className="hero-overline hero-anim" style={{animationDelay: "0ms"}}>{c.hero.overline}</span>
          <h1 className="hero-h1">
            <span className="h1-amber hero-anim" style={{animationDelay: "150ms", whiteSpace: "pre-line"}}>{c.hero.headlineAmber}</span>{" "}
            <span className="h1-white hero-anim" style={{animationDelay: "300ms", whiteSpace: "pre-line"}}>{c.hero.headlineWhite}</span>
          </h1>
          <p className="hero-sub hero-anim" style={{animationDelay: "450ms"}}>{c.hero.subheadline}</p>
          <ul className="hero-props">
            {c.hero.props.map((prop, i) => (
              <li key={i} className="hero-prop hero-anim" style={{animationDelay: `${600 + i * 60}ms`}}>
                <span className="hero-prop-tick">✓</span>
                {prop}
              </li>
            ))}
          </ul>
          <div className="hero-ctas hero-anim" style={{animationDelay: "820ms"}}>
            <a href={c.hero.primaryCta.href} className="btn-primary" id="hero-cta-btn">{c.hero.primaryCta.label}</a>
            <a href={c.hero.secondaryCta.href} className="btn-ghost">{c.hero.secondaryCta.label}</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="dash-frame dash-float">
            <div className="dash-frame-bar">
              <span className="dash-dot"></span>
              <span className="dash-dot"></span>
              <span className="dash-dot"></span>
              <span className="dash-frame-url">{c.hero.dashboardUrl}</span>
            </div>
            <div className="dash-visual">
              <img src={c.hero.dashboardImage} alt={c.hero.dashboardImageAlt} loading="eager" />
              <span className="dash-click-pulse" aria-hidden="true"></span>
              <svg className="dash-cursor" aria-hidden="true" viewBox="0 0 24 24">
                <path d="M4 2 L4 22 L10 16 L13 22 L16 21 L13 15 L20 13 Z" fill="#fff" stroke="#0a0a08" strokeWidth="1.2" strokeLinejoin="round"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-visual-mobile">
        <div className="dash-frame">
          <div className="dash-frame-bar">
            <span className="dash-dot"></span>
            <span className="dash-dot"></span>
            <span className="dash-dot"></span>
            <span className="dash-frame-url">{c.hero.dashboardUrl}</span>
          </div>
          <img src={c.hero.dashboardImage} alt={c.hero.dashboardImageAlt} loading="eager" />
        </div>
      </div>
    </div>
  </div>
</section>





<section className="stat-section" id="stat-section">
  <div className="container">
    <div className="stat-inner">
      <div className="stat-banner">
        <div className="stat-number"><span id="stat-counter" data-target={c.stat.number}>{c.stat.number}</span>{c.stat.suffix}</div>
        <div className="stat-right">
          <p className="stat-label">{c.stat.label}</p>
          <div className="stat-marquee" aria-hidden="true">
            <div className="stat-marquee-row">
              <div className="stat-marquee-track">
                {[...c.stat.badges, ...c.stat.badges].map((badge, i) => (
                  <span key={`a-${i}`} className="stat-badge">{badge}</span>
                ))}
              </div>
            </div>
            <div className="stat-marquee-row reverse">
              <div className="stat-marquee-track">
                {[...c.stat.badges.slice().reverse(), ...c.stat.badges.slice().reverse()].map((badge, i) => (
                  <span key={`b-${i}`} className="stat-badge">{badge}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>





<div className="platform-wrap">

  
  <section className="platform-section">
    <div className="container">
      <div className="platform-row">
        <div className="platform-copy reveal">
          <span className="overline">{c.platformSections[0].overline}</span>
          <h2>{c.platformSections[0].heading}</h2>
          {c.platformSections[0].body.map((p, i) => <p key={i}>{p}</p>)}
          {c.platformSections[0].link && (
            <a href={c.platformSections[0].link!.href} className="platform-link">{c.platformSections[0].link!.label} <span>→</span></a>
          )}
        </div>
        <div className="reveal">
          <div className="mockup">
            <div className="mockup-bar">
              <div className="m-dots"><span className="m-dot"></span><span className="m-dot"></span><span className="m-dot"></span></div>
              <span className="m-title">Schedule Creation , AI Automation</span>
            </div>
            
            <div className="bb-queue" id="bb-queue">
              <div className="bb-queue-row" id="bb-row-0">
                <span className="bb-queue-status status-done">Done</span>
                <span className="bb-queue-subject">apex@acmecarriers.com · Invoice #4821 · $14,200</span>
              </div>
              <div className="bb-queue-row" id="bb-row-1">
                <span className="bb-queue-status status-processing">Processing</span>
                <span className="bb-queue-subject">billing@truckingco.net · 3 attachments · $8,750</span>
              </div>
              <div className="bb-queue-row" id="bb-row-2">
                <span className="bb-queue-status status-queued">Queued</span>
                <span className="bb-queue-subject">dispatch@swiftfreight.com · Invoice batch · $31,400</span>
              </div>
            </div>
            
            <div className="bb-queue-connector">
              <div className="bb-qc-line" id="bb-qc-line"></div>
            </div>
            <div className="sched-flow" id="brightbolt-flow">
              <div className="sched-flow-col">
                <div className="sched-node bb-step" data-bb-step="0">
                  <div className="sched-node-label">Step 1 , Received</div>
                  <div className="sched-node-title">Email with Invoice</div>
                  <div className="sched-node-sub">apex@acmecarriers.com · 3 attachments</div>
                </div>
                <div className="sched-spacer bb-connector" data-bb-connector="0"></div>
                <div className="sched-node bb-step" data-bb-step="1">
                  <div className="sched-node-label">Step 2 , OCR Extraction</div>
                  <div className="sched-node-title">AI Processing</div>
                  <div className="sched-node-sub">Invoice # · Debtor · Amount · Date extracted</div>
                </div>
                <div className="sched-spacer bb-connector" data-bb-connector="1"></div>
                <div className="sched-node bb-step" data-bb-step="2">
                  <div className="sched-node-label">Step 3 , Credit Check</div>
                  <div className="sched-node-title">✓ Debtor Verified</div>
                  <div className="sched-node-sub">Ansonia · Limit $500k · Current balance $291k</div>
                </div>
                <div className="sched-spacer bb-connector" data-bb-connector="2"></div>
                <div className="sched-result bb-step" data-bb-step="3">
                  <div className="sched-result-check">✓</div>
                  <div>
                    <div className="sched-result-text">Schedule INV-20480 Created</div>
                    <div className="sched-result-sub">$84,200.00 · Apex Logistics · Ready to fund</div>
                  </div>
                  <div className="sched-pulse-dot"></div>
                </div>
              </div>
            </div>
          </div>
          {c.platformSections[0].footnote && <p style={{fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "var(--gray-3)", marginTop: "12px", textAlign: "center", letterSpacing: "0.04em"}}>{c.platformSections[0].footnote}</p>}
        </div>
      </div>
    </div>
  </section>

  
  <section className="platform-section platform-section--pin">
    <div className="container">
      <div className="platform-row reverse">
        <div className="platform-copy reveal">
          <span className="overline">{c.platformSections[1].overline}</span>
          <h2>{c.platformSections[1].heading}</h2>
          {c.platformSections[1].body.map((p, i) => <p key={i}>{p}</p>)}
          {c.platformSections[1].link && (
            <a href={c.platformSections[1].link!.href} className="platform-link">{c.platformSections[1].link!.label} <span>→</span></a>
          )}
        </div>
        <div className="reveal">
          <div className="mockup" id="cash-match-mockup">
            <div className="mockup-bar">
              <div className="m-dots"><span className="m-dot"></span><span className="m-dot"></span><span className="m-dot"></span></div>
              <span className="m-title">Cash Application , Auto Match</span>
            </div>
            <div className="cash-match-widget">
              <div className="cash-match-row">
                <div className="cash-cards-wrap" id="cash-cards-wrap">
                  <div className="cash-payment" id="cash-payment">
                    <span className="cash-amount">$14,200.00</span>
                    <span className="cash-label">Payment Received</span>
                  </div>
                  <div className="cash-invoice" id="cash-invoice">
                    <span className="cash-amount">$14,200.00</span>
                    <span className="cash-label">Open Invoice</span>
                  </div>
                </div>
              </div>
              <div className="cash-matched" id="cash-matched">✓ Matched , INV-4821</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  
  <section className="platform-section platform-section--pin">
    <div className="container">
      <div className="platform-row reverse">
        <div className="reveal">
          <div className="mockup">
            <div className="mockup-bar">
              <div className="m-dots"><span className="m-dot"></span><span className="m-dot"></span><span className="m-dot"></span></div>
              <span className="m-title">Companies / ACME Carrier, Inc.</span>
            </div>
            <div className="client-mockup" id="book-mockup">
              <div className="client-tabs" id="book-tabs">
                <div className="client-tab active" data-book-tab="0">Details</div>
                <div className="client-tab" data-book-tab="1">Invoices</div>
                <div className="client-tab" data-book-tab="2">Disbursements</div>
                <div className="client-tab" data-book-tab="3">Collections</div>
                <div className="client-tab" data-book-tab="4">Reports</div>
              </div>
              <div className="client-info book-tab-panels" id="book-panels">

                
                <div className="book-tab-panel active" id="book-panel-0">
                  <div className="client-header">
                    <div>
                      <div className="client-name">ACME Carrier, Inc.</div>
                      <div className="client-code">ID: 234123424534</div>
                      <div className="client-badges">
                        <span className="badge badge-green">Active Client</span>
                        <span className="badge badge-amber">Transport</span>
                        <span className="badge badge-gray">3% Fixed</span>
                      </div>
                    </div>
                  </div>
                  <div className="client-fields">
                    <div>
                      <div className="client-field-label">Primary Contact</div>
                      <div className="client-field-val">David Martinez</div>
                    </div>
                    <div>
                      <div className="client-field-label">Currency</div>
                      <div className="client-field-val">USD</div>
                    </div>
                    <div>
                      <div className="client-field-label">Fed Tax ID</div>
                      <div className="client-field-val">23-494xxxx</div>
                    </div>
                    <div>
                      <div className="client-field-label">MC / DOT</div>
                      <div className="client-field-val">MC-3234 · DOT-42484</div>
                    </div>
                  </div>
                  <div className="client-meta-row">
                    <div>
                      <div className="client-meta-label">Open Invoices</div>
                      <div className="client-meta-val">24</div>
                    </div>
                    <div>
                      <div className="client-meta-label">Outstanding</div>
                      <div className="client-meta-val">$1,240,800</div>
                    </div>
                    <div>
                      <div className="client-meta-label">Credit Limit</div>
                      <div className="client-meta-val">$500,000</div>
                    </div>
                  </div>
                </div>

                
                <div className="book-tab-panel" id="book-panel-1">
                  <div className="book-data-label">Open Invoices</div>
                  <div className="book-data-rows">
                    <div className="book-data-row">
                      <span className="book-data-id">INV-4821</span>
                      <span className="book-data-name">Wal-Mart Stores</span>
                      <span className="book-data-amount">$14,200</span>
                      <span className="book-data-date">03/18/26</span>
                    </div>
                    <div className="book-data-row">
                      <span className="book-data-id">INV-4820</span>
                      <span className="book-data-name">Kroger Co.</span>
                      <span className="book-data-amount">$8,750</span>
                      <span className="book-data-date">03/17/26</span>
                    </div>
                    <div className="book-data-row">
                      <span className="book-data-id">INV-4819</span>
                      <span className="book-data-name">Swift Freight LLC</span>
                      <span className="book-data-amount">$31,400</span>
                      <span className="book-data-date">03/15/26</span>
                    </div>
                  </div>
                </div>

                
                <div className="book-tab-panel" id="book-panel-2">
                  <div className="book-data-label">Recent Disbursements</div>
                  <div className="book-data-rows">
                    <div className="book-data-row">
                      <span className="book-data-id">DIS-1102</span>
                      <span className="book-data-name">Advance to ACME</span>
                      <span className="book-data-amount">$11,936</span>
                      <span className="book-data-date">03/18/26</span>
                    </div>
                    <div className="book-data-row">
                      <span className="book-data-id">DIS-1101</span>
                      <span className="book-data-name">Advance to ACME</span>
                      <span className="book-data-amount">$7,350</span>
                      <span className="book-data-date">03/17/26</span>
                    </div>
                    <div className="book-data-row">
                      <span className="book-data-id">DIS-1100</span>
                      <span className="book-data-name">Reserve Release</span>
                      <span className="book-data-amount">$2,100</span>
                      <span className="book-data-date">03/14/26</span>
                    </div>
                  </div>
                </div>

                
                <div className="book-tab-panel" id="book-panel-3">
                  <div className="book-data-label">Collections Queue</div>
                  <div className="book-data-rows">
                    <div className="book-data-row">
                      <span className="book-data-id">INV-4780</span>
                      <span className="book-data-name">Houdini Logistics</span>
                      <span className="book-data-amount">$810</span>
                      <span className="badge badge-amber" style={{fontSize: "9px", padding: "2px 6px"}}>30 Days</span>
                    </div>
                    <div className="book-data-row">
                      <span className="book-data-id">INV-4755</span>
                      <span className="book-data-name">Atlas Transport</span>
                      <span className="book-data-amount">$3,220</span>
                      <span className="badge badge-red" style={{fontSize: "9px", padding: "2px 6px"}}>60 Days</span>
                    </div>
                    <div className="book-data-row">
                      <span className="book-data-id">INV-4701</span>
                      <span className="book-data-name">Delta Haulers Inc.</span>
                      <span className="book-data-amount">$1,450</span>
                      <span className="badge badge-amber" style={{fontSize: "9px", padding: "2px 6px"}}>45 Days</span>
                    </div>
                  </div>
                </div>

                
                <div className="book-tab-panel" id="book-panel-4">
                  <div className="book-data-label">Summary</div>
                  <div className="book-kv-rows">
                    <div className="book-kv-row">
                      <span className="book-kv-label">Total Factored YTD</span>
                      <span className="book-kv-val">$4,820,400</span>
                    </div>
                    <div className="book-kv-row">
                      <span className="book-kv-label">Fees Earned YTD</span>
                      <span className="book-kv-val">$144,612</span>
                    </div>
                    <div className="book-kv-row">
                      <span className="book-kv-label">Average Invoice Size</span>
                      <span className="book-kv-val">$18,200</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="platform-copy reveal">
          <span className="overline">{c.platformSections[2].overline}</span>
          <h2 dangerouslySetInnerHTML={{ __html: c.platformSections[2].heading }} />
          {c.platformSections[2].body.map((p, i) => <p key={i} dangerouslySetInnerHTML={{ __html: p }} />)}
          {c.platformSections[2].link && (
            <a href={c.platformSections[2].link!.href} className="platform-link">{c.platformSections[2].link!.label} <span>→</span></a>
          )}
        </div>
      </div>
    </div>
  </section>

  
  <section className="platform-section platform-section--pin">
    <div className="container">
      <div className="platform-row reverse">
        <div className="platform-copy reveal">
          <span className="overline">{c.platformSections[3].overline}</span>
          <h2 dangerouslySetInnerHTML={{ __html: c.platformSections[3].heading }} />
          {c.platformSections[3].body.map((p, i) => <p key={i} dangerouslySetInnerHTML={{ __html: p }} />)}
          {c.platformSections[3].link && (
            <a href={c.platformSections[3].link!.href} className="platform-link">{c.platformSections[3].link!.label} <span>→</span></a>
          )}
        </div>
        <div className="reveal">
          <div className="mockup">
            <div className="mockup-bar">
              <div className="m-dots"><span className="m-dot"></span><span className="m-dot"></span><span className="m-dot"></span></div>
              <span className="m-title">Connected Partners</span>
            </div>
            <div className="int-grid-mockup">
              <div className="int-grid-title">Active Integrations</div>
              <div className="int-pills">
                <div className="int-pill">
                  <div className="int-pill-name">Tank Payments</div>
                  <div className="int-pill-cat">Payments</div>
                </div>
                <div className="int-pill">
                  <div className="int-pill-name">QuickBooks</div>
                  <div className="int-pill-cat">Accounting</div>
                </div>
                <div className="int-pill">
                  <div className="int-pill-name">FactorGenie</div>
                  <div className="int-pill-cat">Factoring Tools</div>
                </div>
                <div className="int-pill">
                  <div className="int-pill-name">ROX</div>
                  <div className="int-pill-cat">Underwriting</div>
                </div>
                <div className="int-pill">
                  <div className="int-pill-name">Bill360</div>
                  <div className="int-pill-cat">Collections</div>
                </div>
                <div className="int-pill">
                  <div className="int-pill-name">AI OCR</div>
                  <div className="int-pill-cat">OCR</div>
                </div>
              </div>
              <div className="int-more">+ 14 more partners · Open REST API</div>
              <div className="int-more" style={{marginTop: "6px", color: "var(--gray-2)"}}>Don't see your tool? Our REST API means you can connect anything.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  
  <section className="platform-section platform-section--pin">
    <div className="container">
      <div className="platform-row reverse">
        <div className="reveal">
          <div className="mockup">
            <div className="mockup-bar">
              <div className="m-dots"><span className="m-dot"></span><span className="m-dot"></span><span className="m-dot"></span></div>
              <span className="m-title">Client Portal , Acme Carrier</span>
            </div>
            <div className="portal-mockup">
              <div className="portal-list">
                <div className="portal-header">
                  <span className="portal-header-title">My Invoices</span>
                  <span className="portal-header-count">24 open · $1.24M</span>
                </div>
                <div className="portal-row" id="portal-card-0">
                  <span className="portal-inv-num">INV-2345</span>
                  <span className="portal-debtor">Wal-Mart Stores</span>
                  <span className="portal-amount">$245,002</span>
                  <span className="portal-status badge s-pending" id="portal-badge-0">Pending</span>
                </div>
                <div className="portal-row" id="portal-card-1">
                  <span className="portal-inv-num">INV-2346</span>
                  <span className="portal-debtor">CocaCola Enterprises</span>
                  <span className="portal-amount">$12,310</span>
                  <span className="portal-status badge s-pending" id="portal-badge-1">Pending</span>
                </div>
                <div className="portal-row" id="portal-card-2">
                  <span className="portal-inv-num">INV-2347</span>
                  <span className="portal-debtor">Houdini's Hallow LLC</span>
                  <span className="portal-amount">$810</span>
                  <span className="portal-status badge s-pending" id="portal-badge-2">Pending</span>
                </div>
                <div className="portal-row">
                  <span className="portal-inv-num">INV-2348</span>
                  <span className="portal-debtor">Schwin Logistics</span>
                  <span className="portal-amount">$12,310</span>
                  <span className="portal-status badge s-funded">Funded</span>
                </div>
              </div>
              <div className="portal-thread">
                <div className="portal-thread-label">Messages</div>
                <div className="thread-msg">
                  <div className="thread-avatar">FC</div>
                  <div className="thread-body">
                    <div className="thread-sender">FactorCloud Support</div>
                    <div className="thread-text">INV-2347 is under review. We'll update you within 2 hours.</div>
                  </div>
                </div>
                <div className="thread-msg">
                  <div className="thread-avatar" style={{background: "rgba(255,255,255,0.04)", color: "var(--gray-2)"}}>AC</div>
                  <div className="thread-body">
                    <div className="thread-sender">ACME Carrier</div>
                    <div className="thread-text">Thanks, I'll check back this afternoon.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="platform-copy reveal">
          <span className="overline">{c.platformSections[4].overline}</span>
          <h2 className="client-portal-h2" dangerouslySetInnerHTML={{ __html: c.platformSections[4].heading }} />
          {c.platformSections[4].body.map((p, i) => <p key={i}>{p}</p>)}
          {c.platformSections[4].link && (
            <a href={c.platformSections[4].link!.href} className="platform-link">{c.platformSections[4].link!.label} <span>→</span></a>
          )}
        </div>
      </div>
    </div>
  </section>

  
  <section className="platform-section platform-section--pin">
    <div className="container">
      <div className="platform-row reverse">
        <div className="platform-copy reveal">
          <span className="overline">{c.platformSections[5].overline}</span>
          <h2>{c.platformSections[5].heading}</h2>
          {c.platformSections[5].body.map((p, i) => <p key={i}>{p}</p>)}
          {c.platformSections[5].link && (
            <a href={c.platformSections[5].link!.href} className="platform-link">{c.platformSections[5].link!.label} <span>→</span></a>
          )}
        </div>
        <div className="reveal">
          <div className="mockup">
            <div className="mockup-bar">
              <div className="m-dots"><span className="m-dot"></span><span className="m-dot"></span><span className="m-dot"></span></div>
              <span className="m-title">General Ledger , INV-20480 Funding Event</span>
            </div>
            <div className="ledger-mockup ledger-mockup-wrap" id="ledger-mockup">
              <div className="ledger-head">
                <span>Description</span>
                <span>Type</span>
                <span>Debit</span>
                <span>Credit</span>
              </div>
              <div className="ledger-row ledger-hidden" data-ledger-row="0">
                <span className="ledger-desc">Accounts Receivable -- Apex Logistics</span>
                <span className="ledger-type">AR</span>
                <span className="ledger-debit">$84,200</span>
                <span className="ledger-credit"></span>
              </div>
              <div className="ledger-row ledger-hidden" data-ledger-row="1">
                <span className="ledger-desc">Factoring Fee Revenue</span>
                <span className="ledger-type">Revenue</span>
                <span className="ledger-debit"></span>
                <span className="ledger-credit">$2,526</span>
              </div>
              <div className="ledger-row ledger-hidden" data-ledger-row="2">
                <span className="ledger-desc">Advance to Client -- ACME Carrier</span>
                <span className="ledger-type">Advance</span>
                <span className="ledger-debit"></span>
                <span className="ledger-credit">$75,780</span>
              </div>
              <div className="ledger-row ledger-hidden" data-ledger-row="3">
                <span className="ledger-desc">Reserve Holdback</span>
                <span className="ledger-type">Reserve</span>
                <span className="ledger-debit"></span>
                <span className="ledger-credit">$5,894</span>
              </div>
              <div className="ledger-footer">
                <span className="ledger-footer-label">Status</span>
                <span className="ledger-balanced">✓ Balanced , $84,200 = $84,200</span>
                <span className="ledger-footer-val">$84,200</span>
              </div>
            </div>
          </div>
          {c.platformSections[5].footnote && <p style={{fontFamily: "'Inter', sans-serif", fontSize: "10px", color: "var(--gray-3)", marginTop: "12px", textAlign: "center", letterSpacing: "0.04em"}}>{c.platformSections[5].footnote}</p>}
        </div>
      </div>
    </div>
  </section>

</div>





<section className="claude-spot">
  <div className="claude-spot-inner">
    <span className="claude-spot-badge"><span className="new-tag">{c.claude.newTag}</span> {c.claude.badge}</span>
    <h2 style={{marginTop: "8px"}} dangerouslySetInnerHTML={{ __html: c.claude.heading }} />
    <p className="claude-spot-sub">{c.claude.subheadline}</p>

    <div className="claude-uses">
      {c.claude.uses.map((use, i) => (
        <div key={i} className="claude-use">
          <span className="claude-use-eyebrow">{use.eyebrow}</span>
          <div className="claude-use-q">&ldquo;{use.question}&rdquo;</div>
          <p className="claude-use-a">{use.answer}</p>
        </div>
      ))}
    </div>

    <div className="claude-spot-ctas">
      <a href={c.claude.primaryCta.href} {...(c.claude.primaryCta.external ? { target: "_blank", rel: "noopener" } : {})} className="btn-primary">{c.claude.primaryCta.label}</a>
      <a href={c.claude.secondaryCta.href} className="btn-ghost">{c.claude.secondaryCta.label}</a>
    </div>
  </div>
</section>





<section className="compare-section">
  <div className="container">
    <div className="section-header reveal">
      <span className="overline">{c.compare.overline}</span>
      <h2>{c.compare.heading}</h2>
    </div>
    <div className="comp-wrap">
      <div className="comp-grid" id="comp-grid">
        <div className="comp-col-head comp-feat-head">
          <div className="comp-col-head-label">{c.compare.columns.feature.eyebrow}</div>
          <div className="comp-col-head-title" style={{color: "var(--gray-2)"}}>{c.compare.columns.feature.label}</div>
        </div>
        <div className="comp-col-head comp-legacy-head">
          <div className="comp-col-head-label">{c.compare.columns.legacy.eyebrow}</div>
          <div className="comp-col-head-title" style={{color: "var(--red)"}}>{c.compare.columns.legacy.label}</div>
          <div className="comp-col-head-sub">{c.compare.columns.legacy.sub}</div>
        </div>
        <div className="comp-col-head comp-fc-head">
          <div className="comp-col-head-label">{c.compare.columns.factorcloud.eyebrow}</div>
          <div className="comp-col-head-title" style={{color: "var(--amber)"}}>{c.compare.columns.factorcloud.label}</div>
          <div className="comp-col-head-sub">{c.compare.columns.factorcloud.sub}</div>
        </div>

        {c.compare.rows.map((row, i) => (
          <Fragment key={i}>
            <div className="comp-row-feat">{row.feature}</div>
            <div className="comp-row-legacy"><span className="x-mark">✗</span> {row.legacy}</div>
            <div className="comp-row-fc"><span className="check-mark">✓</span> {row.factorcloud}</div>
          </Fragment>
        ))}
      </div>
    </div>
  </div>
</section>





<section className="steps-section">
  <div className="container">
    <div className="section-header reveal">
      <span className="overline">{c.steps.overline}</span>
      <h2>{c.steps.heading}</h2>
      <p className="section-sub">{c.steps.subheadline}</p>
    </div>
    <div className="steps-row">
      {c.steps.items.map((step, i) => (
        <div key={i} className="step reveal" style={i > 0 ? {transitionDelay: `${i * 0.1}s`} : undefined}>
          <span className="step-number">{step.number}</span>
          <div className="step-title">{step.title}</div>
          <p className="step-desc">{step.body}</p>
        </div>
      ))}
    </div>
  </div>
</section>





<section className="faq-section">
  <div className="container" style={{maxWidth: "800px"}}>
    <div className="section-header reveal">
      <span className="overline">{c.faq.overline}</span>
      <h2>{c.faq.heading}</h2>
    </div>
    <div className="faq-list">
      {c.faq.items.map((item, i) => (
        <div key={i} className="faq-item">
          <div className="faq-q" tabIndex={0} role="button" aria-expanded="false">
            {item.q}
            <svg className="faq-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </div>
          <div className="faq-a">{item.a}</div>
        </div>
      ))}
    </div>
  </div>
</section>





<section className="demo-section">
  <div className="container">
    <div className="reveal">
      <span className="overline">{c.demo.overline}</span>
      <h2 className="serif">{c.demo.heading}</h2>
      <p>{c.demo.body}</p>
      <div className="demo-trust">
        {c.demo.trustItems.map((item, i) => (
          <Fragment key={i}>
            {i > 0 && <span className="trust-sep">·</span>}
            <span className="trust-item">{item}</span>
          </Fragment>
        ))}
      </div>
      <div className="demo-ctas">
        <a href={c.demo.primaryCta.href} className="btn-primary">{c.demo.primaryCta.label}</a>
        <a href={c.demo.secondaryCta.href} className="btn-ghost">{c.demo.secondaryCta.label}</a>
      </div>
    </div>
  </div>
</section>





<footer className="footer">
  <div className="container">
    <div className="footer-grid">
      <div className="footer-brand">
        <img src="/images/logo-nav.svg" alt="FactorCloud" loading="lazy" />
        <p>Dual-ledger precision, automated cash application, 20+ integrations. Built for factors who needed software that could keep up.</p>
      </div>
      <div>
        <div className="footer-col-title">Platform</div>
        <ul className="footer-links">
          <li><a href="/features/automation">Automation</a></li>
          <li><a href="/features/back-end">Client Management</a></li>
          <li><a href="/features/tracking">Operations</a></li>
          <li><a href="/features/client-portal">Client Portal</a></li>
          <li><a href="/features/ocr-automation">AI-Powered OCR</a></li>
          <li><a href="/features/open-api">Open API</a></li>
        </ul>
      </div>
      <div>
        <div className="footer-col-title">Integrations</div>
        <ul className="footer-links">
          <li></li>
          <li><a href="/integrations/quickbooks">QuickBooks</a></li>
          <li><a href="/integrations/ansonia">Ansonia</a></li>
          <li><a href="/integrations/rox">ROX</a></li>
          <li><a href="/integrations/bill360">Bill360</a></li>
          <li><a href="/integrations/brightbolt">AI-Powered OCR</a></li>
          <li><a href="/integrations/bankshot">Bank Shot</a></li>
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
      <span className="footer-copy">© 2026 FactorCloud. All rights reserved.</span>
      <span className="footer-address">3490 Piedmont Rd. Suite 1350, Atlanta, GA 30305</span>
      <div className="footer-social">
        <a href="https://linkedin.com/company/factorcloud" aria-label="LinkedIn" target="_blank" rel="noopener">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg>
        </a>
      </div>
    </div>
  </div>
</footer>
      <Script id="page-home" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: PAGE_JS }} />
    </>
  );
}

/* FactorCloud — Shared Nav + Footer components */
(function() {
  'use strict';

  const LOGO_SVG = `<svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M9 2L2 6v6l7 4 7-4V6L9 2zm0 2.4l4.6 2.7L9 9.8 4.4 7.1 9 4.4zM3.6 8.1l4.8 2.8v4.7L3.6 12.8V8.1zm5.8 7.5v-4.7l4.8-2.8v4.7l-4.8 2.8z" fill="white"/></svg>`;

  const NAV_HTML = `
<nav class="site-nav">
  <div class="nav-inner">
    <a href="/" class="nav-logo">
      <div class="nav-logo-mark">${LOGO_SVG}</div>
      FactorCloud
    </a>
    <ul class="nav-links">
      <li class="nav-item">
        <button aria-haspopup="true">
          Features
          <svg class="nav-chevron" viewBox="0 0 10 6"><path d="M1 1l4 4 4-4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <div class="nav-dropdown">
          <a href="/features/automation.html">
            <div class="dd-icon">⚡</div>
            <div class="dd-text">Automation<small>Schedules, terms, credit</small></div>
          </a>
          <a href="/features/tracking.html">
            <div class="dd-icon">📊</div>
            <div class="dd-text">Tracking<small>Clients, debtors, vendors</small></div>
          </a>
          <a href="/features/back-end.html">
            <div class="dd-icon">🗂️</div>
            <div class="dd-text">Back-End<small>Reports, collections, payments</small></div>
          </a>
          <a href="/features/client-portal.html">
            <div class="dd-icon">🔑</div>
            <div class="dd-text">Client Portal<small>White-labeled access</small></div>
          </a>
          <a href="/features/ocr-automation.html">
            <div class="dd-icon">🤖</div>
            <div class="dd-text">OCR Automation<small>BrightBolt engine</small></div>
          </a>
          <a href="/features/open-api.html">
            <div class="dd-icon">⚙️</div>
            <div class="dd-text">Open API<small>REST + integrations</small></div>
          </a>
        </div>
      </li>
      <li class="nav-item">
        <button aria-haspopup="true">
          Integrations
          <svg class="nav-chevron" viewBox="0 0 10 6"><path d="M1 1l4 4 4-4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <div class="nav-dropdown mega">
          <div class="mega-section-label">All Integrations</div>
          <a href="/integrations/index.html">
            <div class="dd-icon">🌐</div>
            <div class="dd-text">Overview<small>All 14 partners</small></div>
          </a>
          <a href="/integrations/bill360.html">
            <div class="dd-icon">💰</div>
            <div class="dd-text">Bill360<small>AR automation</small></div>
          </a>
          <a href="/integrations/truckercloud.html">
            <div class="dd-icon">🚛</div>
            <div class="dd-text">TruckerCloud<small>ELD/telematics</small></div>
          </a>
          <a href="/integrations/brightbolt.html">
            <div class="dd-icon">⚡</div>
            <div class="dd-text">BrightBolt<small>OCR engine</small></div>
          </a>
          <a href="/integrations/rox.html">
            <div class="dd-icon">🔍</div>
            <div class="dd-text">ROX<small>Underwriting</small></div>
          </a>
          <a href="/integrations/quickbooks.html">
            <div class="dd-icon">📒</div>
            <div class="dd-text">QuickBooks<small>Accounting sync</small></div>
          </a>
          <a href="/integrations/ansonia.html">
            <div class="dd-icon">📈</div>
            <div class="dd-text">Ansonia<small>Commercial credit</small></div>
          </a>
          <a href="/integrations/bankshot.html">
            <div class="dd-icon">📱</div>
            <div class="dd-text">BankShot<small>Mobile check capture</small></div>
          </a>
          <a href="/integrations/lighthouz.html">
            <div class="dd-icon">🤖</div>
            <div class="dd-text">Lighthouz AI<small>AP/AR agents</small></div>
          </a>
          <a href="/integrations/triumph.html">
            <div class="dd-icon">🏦</div>
            <div class="dd-text">Triumph<small>Transport payments</small></div>
          </a>
          <a href="/integrations/peruse.html">
            <div class="dd-icon">📋</div>
            <div class="dd-text">Peruse<small>Document verification</small></div>
          </a>
          <a href="/integrations/decipher.html">
            <div class="dd-icon">🔮</div>
            <div class="dd-text">Decipher<small>Credit intelligence</small></div>
          </a>
          <a href="/integrations/cargonerd.html">
            <div class="dd-icon">📦</div>
            <div class="dd-text">CargoNerd<small>Freight visibility</small></div>
          </a>
          <a href="/integrations/factorgenie.html">
            <div class="dd-icon">📲</div>
            <div class="dd-text">FactorGenie<small>Mobile client app</small></div>
          </a>
          <a href="/integrations/tank.html">
            <div class="dd-icon">💳</div>
            <div class="dd-text">Tank<small>Client payments</small></div>
          </a>
        </div>
      </li>
      <li class="nav-item"><a href="/pricing.html">Pricing</a></li>
      <li class="nav-item"><a href="/resources.html">Resources</a></li>
      <li class="nav-item">
        <button aria-haspopup="true">
          About
          <svg class="nav-chevron" viewBox="0 0 10 6"><path d="M1 1l4 4 4-4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <div class="nav-dropdown">
          <a href="/about/our-story.html">
            <div class="dd-icon">📖</div>
            <div class="dd-text">Our Story<small>Built by factors, for factors</small></div>
          </a>
          <a href="/about/team.html">
            <div class="dd-icon">👥</div>
            <div class="dd-text">Team<small>45+ developers</small></div>
          </a>
          <a href="/about/values.html">
            <div class="dd-icon">🎯</div>
            <div class="dd-text">Values<small>What we stand for</small></div>
          </a>
          <a href="/about/security.html">
            <div class="dd-icon">🔒</div>
            <div class="dd-text">Security<small>SOC2 compliant</small></div>
          </a>
        </div>
      </li>
    </ul>
    <div class="nav-cta">
      <a href="https://app.factorcloud.com" class="nav-login">Log in</a>
      <a href="/get-demo.html" class="btn-primary btn-sm">Get a Demo</a>
    </div>
    <button class="nav-hamburger" id="nav-toggle" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
  <div class="nav-mobile" id="nav-mobile">
    <div class="mobile-section-label">Features</div>
    <a href="/features/automation.html">Automation</a>
    <a href="/features/tracking.html">Tracking</a>
    <a href="/features/back-end.html">Back-End</a>
    <a href="/features/client-portal.html">Client Portal</a>
    <a href="/features/ocr-automation.html">OCR Automation</a>
    <a href="/features/open-api.html">Open API</a>
    <div class="mobile-section-label">Integrations</div>
    <a href="/integrations/index.html">All Integrations</a>
    <a href="/integrations/bill360.html">Bill360</a>
    <a href="/integrations/truckercloud.html">TruckerCloud</a>
    <a href="/integrations/brightbolt.html">BrightBolt</a>
    <a href="/integrations/rox.html">ROX</a>
    <a href="/integrations/quickbooks.html">QuickBooks</a>
    <div class="mobile-section-label">Company</div>
    <a href="/pricing.html">Pricing</a>
    <a href="/resources.html">Resources</a>
    <a href="/about/our-story.html">About</a>
    <a href="/contact.html">Contact</a>
    <a href="/get-demo.html" class="btn-primary">Get a Demo</a>
  </div>
</nav>`;

  const FOOTER_HTML = `
<footer class="site-footer">
  <div class="footer-inner">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="footer-logo">
          <div class="footer-logo-mark">${LOGO_SVG}</div>
          FactorCloud
        </div>
        <p class="footer-tagline">Factoring software built by factors, for factors. Dual-ledger precision. Automated cash application.</p>
        <a href="https://linkedin.com/company/factorcloud" class="footer-linkedin" target="_blank" rel="noopener">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
          LinkedIn
        </a>
      </div>
      <div>
        <div class="footer-col-label">Product</div>
        <ul class="footer-links">
          <li><a href="/features/index.html">Features</a></li>
          <li><a href="/integrations/index.html">Integrations</a></li>
          <li><a href="/pricing.html">Pricing</a></li>
          <li><a href="/get-demo.html">Get a Demo</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-col-label">Company</div>
        <ul class="footer-links">
          <li><a href="/about/index.html">About</a></li>
          <li><a href="/about/our-story.html">Our Story</a></li>
          <li><a href="/about/team.html">Team</a></li>
          <li><a href="/about/values.html">Values</a></li>
          <li><a href="/about/security.html">Security</a></li>
          <li><a href="/contact.html">Contact</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-col-label">Resources</div>
        <ul class="footer-links">
          <li><a href="/resources.html">Blog</a></li>
          <li><a href="/resources.html#insights">Industry Insights</a></li>
          <li><a href="/resources.html#tips">Tips</a></li>
          <li><a href="/resources.html#press">Press Releases</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-col-label">Legal</div>
        <ul class="footer-links">
          <li><a href="/privacy.html">Privacy Policy</a></li>
          <li><a href="/app-privacy.html">App Privacy Policy</a></li>
          <li><a href="/terms.html">Terms</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span class="footer-copy">© 2025 FactorCloud. All rights reserved.</span>
      <div class="footer-legal">
        <a href="/privacy.html">Privacy</a>
        <a href="/terms.html">Terms</a>
      </div>
    </div>
  </div>
</footer>`;

  // Inject nav
  const navEl = document.getElementById('site-nav');
  if (navEl) navEl.innerHTML = NAV_HTML;

  // Inject footer
  const footerEl = document.getElementById('site-footer');
  if (footerEl) footerEl.innerHTML = FOOTER_HTML;

  // Hamburger toggle
  document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('nav-toggle');
    const mobile = document.getElementById('nav-mobile');
    if (toggle && mobile) {
      toggle.addEventListener('click', function() {
        mobile.classList.toggle('open');
        // Animate hamburger
        const spans = toggle.querySelectorAll('span');
        if (mobile.classList.contains('open')) {
          spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
          spans[1].style.opacity = '0';
          spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
          spans[0].style.transform = '';
          spans[1].style.opacity = '';
          spans[2].style.transform = '';
        }
      });
    }

    // Highlight active nav item
    const path = window.location.pathname;
    document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(a => {
      if (a.getAttribute('href') === path) {
        a.classList.add('active');
      }
    });
  });
})();

import Link from "next/link";

const LogoMark = () => (
  <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9 2L2 6v6l7 4 7-4V6L9 2zm0 2.4l4.6 2.7L9 9.8 4.4 7.1 9 4.4zM3.6 8.1l4.8 2.8v4.7L3.6 12.8V8.1zm5.8 7.5v-4.7l4.8-2.8v4.7l-4.8 2.8z"
      fill="white"
    />
  </svg>
);

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-mark">
                <LogoMark />
              </div>
              FactorCloud
            </div>
            <p className="footer-tagline">
              Factoring software built by factors, for factors. Dual-ledger
              precision. Automated cash application.
            </p>
            <a
              href="https://linkedin.com/company/factorcloud"
              className="footer-linkedin"
              target="_blank"
              rel="noopener"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn
            </a>
          </div>
          <div>
            <div className="footer-col-label">Product</div>
            <ul className="footer-links">
              <li>
                <Link href="/features">Features</Link>
              </li>
              <li>
                <Link href="/integrations">Integrations</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/get-demo">Get a Demo</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="footer-col-label">Company</div>
            <ul className="footer-links">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/about/our-story">Our Story</Link>
              </li>
              <li>
                <Link href="/about/team">Team</Link>
              </li>
              <li>
                <Link href="/about/values">Values</Link>
              </li>
              <li>
                <Link href="/about/security">Security</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="footer-col-label">Resources</div>
            <ul className="footer-links">
              <li>
                <Link href="/resources">Blog</Link>
              </li>
              <li>
                <Link href="/resources#insights">Industry Insights</Link>
              </li>
              <li>
                <Link href="/resources#tips">Tips</Link>
              </li>
              <li>
                <Link href="/resources#press">Press Releases</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="footer-col-label">Legal</div>
            <ul className="footer-links">
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/privacy-policy">App Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-and-conditions">Terms</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">
            © 2025 FactorCloud. All rights reserved.
          </span>
          <div className="footer-legal">
            <Link href="/privacy-policy">Privacy</Link>
            <Link href="/terms-and-conditions">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

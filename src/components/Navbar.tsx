"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Chevron = () => (
  <svg className="nav-chevron" viewBox="0 0 10 6">
    <path d="M1 1l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

type NavLinkProps = {
  href: string;
  active: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

const NavLink = ({ href, active, className, style, children }: NavLinkProps) => {
  const isActive = active === href;
  const cls = [className, isActive ? "active" : ""].filter(Boolean).join(" ");
  return (
    <Link href={href} className={cls} style={style}>
      {children}
    </Link>
  );
};

export default function Navbar() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);

  return (
    <nav className="site-nav">
      <div className="nav-inner">
        <Link href="/" className="nav-logo" aria-label="FactorCloud home">
          <Image
            src="/images/logo-nav.svg"
            alt="FactorCloud"
            width={751}
            height={120}
            priority
            className="nav-logo-img"
          />
        </Link>
        <ul className="nav-links">
          <li className="nav-item">
            <button aria-haspopup="true">
              Features
              <Chevron />
            </button>
            <div className="nav-dropdown">
              <NavLink href="/features/automation" active={pathname}>
                <div className="dd-icon">⚡</div>
                <div className="dd-text">
                  Automation<small>Schedules, terms, credit</small>
                </div>
              </NavLink>
              <NavLink href="/features/tracking" active={pathname}>
                <div className="dd-icon">📊</div>
                <div className="dd-text">
                  Tracking<small>Clients, debtors, vendors</small>
                </div>
              </NavLink>
              <NavLink href="/features/back-end" active={pathname}>
                <div className="dd-icon">🗂️</div>
                <div className="dd-text">
                  Back-End<small>Reports, collections, payments</small>
                </div>
              </NavLink>
              <NavLink href="/features/client-portal" active={pathname}>
                <div className="dd-icon">🔑</div>
                <div className="dd-text">
                  Client Portal<small>White-labeled access</small>
                </div>
              </NavLink>
              <NavLink href="/features/ocr-automation" active={pathname}>
                <div className="dd-icon">🤖</div>
                <div className="dd-text">
                  OCR Automation<small>BrightBolt engine</small>
                </div>
              </NavLink>
              <NavLink href="/features/open-api" active={pathname}>
                <div className="dd-icon">⚙️</div>
                <div className="dd-text">
                  Open API<small>REST + integrations</small>
                </div>
              </NavLink>
            </div>
          </li>
          <li className="nav-item">
            <button aria-haspopup="true">
              Integrations
              <Chevron />
            </button>
            <div className="nav-dropdown mega">
              <div className="mega-section-label">All Integrations</div>
              <NavLink href="/integrations" active={pathname}>
                <div className="dd-icon">🌐</div>
                <div className="dd-text">
                  Overview<small>All 14 partners</small>
                </div>
              </NavLink>
              <NavLink href="/integrations/bill360" active={pathname}>
                <div className="dd-icon">💰</div>
                <div className="dd-text">
                  Bill360<small>AR automation</small>
                </div>
              </NavLink>
              <NavLink
                href="/integrations/claude"
                active={pathname}
                style={{ background: "rgba(212,168,67,0.06)" }}
              >
                <div className="dd-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="#D4A843"
                    width="14"
                    height="14"
                  >
                    <path d="M17.3045 3.2H13.9528L20.4523 20.8H23.8L17.3045 3.2ZM6.81341 3.2L0.2 20.8H3.61824L4.96845 17.0848H11.8995L13.2497 20.8H16.668L10.0547 3.2H6.81341ZM6.07896 14.1909L8.40391 7.81818L10.7288 14.1909H6.07896Z" />
                  </svg>
                </div>
                <div className="dd-text">
                  Claude<small>New, AI inside FactorCloud</small>
                </div>
              </NavLink>
              <NavLink href="/integrations/tank" active={pathname}>
                <div className="dd-icon">💳</div>
                <div className="dd-text">
                  Tank Payments<small>Client payments & spend</small>
                </div>
              </NavLink>
              <NavLink href="/integrations/brightbolt" active={pathname}>
                <div className="dd-icon">⚡</div>
                <div className="dd-text">
                  BrightBolt<small>OCR engine</small>
                </div>
              </NavLink>
              <NavLink href="/integrations/rox" active={pathname}>
                <div className="dd-icon">🔍</div>
                <div className="dd-text">
                  ROX<small>Underwriting</small>
                </div>
              </NavLink>
              <NavLink href="/integrations/quickbooks" active={pathname}>
                <div className="dd-icon">📒</div>
                <div className="dd-text">
                  QuickBooks<small>Accounting sync</small>
                </div>
              </NavLink>
              <NavLink href="/integrations/ansonia" active={pathname}>
                <div className="dd-icon">📈</div>
                <div className="dd-text">
                  Ansonia<small>Commercial credit</small>
                </div>
              </NavLink>
              <NavLink href="/integrations/bankshot" active={pathname}>
                <div className="dd-icon">📱</div>
                <div className="dd-text">
                  BankShot<small>Mobile check capture</small>
                </div>
              </NavLink>
              <NavLink href="/integrations/lighthouz" active={pathname}>
                <div className="dd-icon">🤖</div>
                <div className="dd-text">
                  Lighthouz AI<small>AP/AR agents</small>
                </div>
              </NavLink>
              <NavLink href="/integrations/triumph" active={pathname}>
                <div className="dd-icon">🏦</div>
                <div className="dd-text">
                  Triumph<small>Transport payments</small>
                </div>
              </NavLink>
              <NavLink href="/integrations/peruse" active={pathname}>
                <div className="dd-icon">📋</div>
                <div className="dd-text">
                  Peruse<small>Document verification</small>
                </div>
              </NavLink>
              <NavLink href="/integrations/decipher" active={pathname}>
                <div className="dd-icon">🔮</div>
                <div className="dd-text">
                  Decipher<small>Credit intelligence</small>
                </div>
              </NavLink>
              <NavLink href="/integrations/cargonerd" active={pathname}>
                <div className="dd-icon">📦</div>
                <div className="dd-text">
                  CargoNerd<small>Freight visibility</small>
                </div>
              </NavLink>
              <NavLink href="/integrations/factorgenie" active={pathname}>
                <div className="dd-icon">📲</div>
                <div className="dd-text">
                  FactorGenie<small>Mobile client app</small>
                </div>
              </NavLink>
            </div>
          </li>
          <li className="nav-item">
            <NavLink href="/pricing" active={pathname}>
              Pricing
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink href="/resources" active={pathname}>
              Resources
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink href="/blog" active={pathname}>
              Blog
            </NavLink>
          </li>
          <li className="nav-item">
            <button aria-haspopup="true">
              About
              <Chevron />
            </button>
            <div className="nav-dropdown">
              <NavLink href="/about/our-story" active={pathname}>
                <div className="dd-icon">📖</div>
                <div className="dd-text">
                  Our Story<small>Built by factors, for factors</small>
                </div>
              </NavLink>
              <NavLink href="/about/team" active={pathname}>
                <div className="dd-icon">👥</div>
                <div className="dd-text">
                  Team<small>45+ developers</small>
                </div>
              </NavLink>
              <NavLink href="/about/values" active={pathname}>
                <div className="dd-icon">🎯</div>
                <div className="dd-text">
                  Values<small>What we stand for</small>
                </div>
              </NavLink>
              <NavLink href="/about/security" active={pathname}>
                <div className="dd-icon">🔒</div>
                <div className="dd-text">
                  Security<small>SOC2 compliant</small>
                </div>
              </NavLink>
            </div>
          </li>
        </ul>
        <div className="nav-cta">
          <a href="https://app.factorcloud.com" className="nav-login">
            Log in
          </a>
          <Link href="/get-demo" className="btn-primary btn-sm">
            Get a Demo
          </Link>
        </div>
        <button
          className="nav-hamburger"
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span
            style={
              open
                ? { transform: "rotate(45deg) translate(5px, 5px)" }
                : undefined
            }
          />
          <span style={open ? { opacity: 0 } : undefined} />
          <span
            style={
              open
                ? { transform: "rotate(-45deg) translate(5px, -5px)" }
                : undefined
            }
          />
        </button>
      </div>
      <div className={`nav-mobile${open ? " open" : ""}`}>
        <div className="mobile-section-label">Features</div>
        <Link href="/features/automation">Automation</Link>
        <Link href="/features/tracking">Tracking</Link>
        <Link href="/features/back-end">Back-End</Link>
        <Link href="/features/client-portal">Client Portal</Link>
        <Link href="/features/ocr-automation">OCR Automation</Link>
        <Link href="/features/open-api">Open API</Link>
        <div className="mobile-section-label">Integrations</div>
        <Link href="/integrations">All Integrations</Link>
        <Link href="/integrations/bill360">Bill360</Link>
        <Link href="/integrations/tank">Tank Payments</Link>
        <Link href="/integrations/brightbolt">BrightBolt</Link>
        <Link href="/integrations/rox">ROX</Link>
        <Link href="/integrations/quickbooks">QuickBooks</Link>
        <div className="mobile-section-label">Company</div>
        <Link href="/pricing">Pricing</Link>
        <Link href="/resources">Resources</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/about/our-story">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/get-demo" className="btn-primary">
          Get a Demo
        </Link>
      </div>
    </nav>
  );
}

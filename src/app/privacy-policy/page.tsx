import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { loadPage } from "@/lib/content";
import { getMetadata } from "@/lib/seo";

const LOCALE = "en" as const;

export function generateMetadata(): Metadata {
  const { frontmatter } = loadPage<{ seo?: { title?: string; description?: string; canonical?: string } }>("privacy-policy", LOCALE);
  return getMetadata({ page: "privacy-policy", locale: LOCALE, override: frontmatter.seo });
}

const LEGAL_CSS = `
.legal-hero {
  padding-top: 140px;
  padding-bottom: 60px;
  border-bottom: 1px solid var(--border);
}
.legal-hero h1 {
  font-family: 'Instrument Serif', Georgia, serif;
  font-size: clamp(36px, 5vw, 56px);
  font-weight: 400;
  letter-spacing: -0.025em;
  margin-bottom: 12px;
}
.legal-hero p { color: var(--gray-3); font-size: 14px; }
.legal-content {
  max-width: 760px;
  padding: 64px 32px;
  margin: 0 auto;
}
.legal-content h2 {
  font-size: 20px;
  font-weight: 600;
  margin: 40px 0 12px;
  color: var(--white);
}
.legal-content h2:first-child { margin-top: 0; }
.legal-content p {
  font-size: 15px;
  color: var(--gray-2);
  line-height: 1.8;
  margin-bottom: 16px;
}
.legal-content ul {
  list-style: disc;
  padding-left: 20px;
  margin-bottom: 16px;
}
.legal-content ul li {
  font-size: 15px;
  color: var(--gray-2);
  line-height: 1.8;
  margin-bottom: 6px;
}
.legal-content a { color: var(--accent); }
`;

export default function PrivacyPolicyPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: LEGAL_CSS }} />
      <Navbar />
      <div className="legal-hero">
        <div className="container-sm">
          <div className="label" style={{ marginBottom: "12px" }}>
            Legal
          </div>
          <h1>Privacy Policy</h1>
          <p>Last updated: March 2025</p>
        </div>
      </div>

      <div className="legal-content">
        <h2>Introduction</h2>
        <p>
          FactorCloud (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
          operates the FactorCloud factoring software platform (the
          &quot;Service&quot;). This Privacy Policy explains how we collect,
          use, disclose, and safeguard your information when you use our
          Service.
        </p>
        <p>
          By using FactorCloud, you agree to the collection and use of
          information in accordance with this policy. This is a placeholder
          document. The final Privacy Policy will be reviewed and approved by
          FactorCloud&apos;s legal counsel before publication.
        </p>

        <h2>Information We Collect</h2>
        <p>We collect information you provide directly to us, including:</p>
        <ul>
          <li>Account registration information (name, email address, company name)</li>
          <li>Financial data you enter into the platform (invoice information, client and debtor records)</li>
          <li>Payment and billing information</li>
          <li>Communications with our support team</li>
          <li>Usage data and platform analytics</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, maintain, and improve the FactorCloud platform</li>
          <li>Process transactions and send related information</li>
          <li>Send technical notices, updates, and support messages</li>
          <li>Respond to your comments, questions, and requests</li>
          <li>Monitor and analyze usage patterns to improve the Service</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>Data Security</h2>
        <p>
          FactorCloud is SOC2 Type II certified. We implement industry-standard
          security measures to protect your information, including:
        </p>
        <ul>
          <li>Encryption of data in transit (TLS 1.3) and at rest (AES-256)</li>
          <li>Role-based access controls</li>
          <li>Regular security audits and penetration testing</li>
          <li>24/7 security monitoring</li>
          <li>Incident response procedures</li>
        </ul>

        <h2>Data Retention</h2>
        <p>
          We retain your information for as long as your account is active or
          as needed to provide you services. You may request deletion of your
          data by contacting us at{" "}
          <a href="mailto:hello@factorcloud.com">hello@factorcloud.com</a>.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          FactorCloud integrates with third-party services including Tank
          Payments, Ansonia, QuickBooks, and others. Your use of these
          integrations is subject to the respective third-party privacy
          policies. We only share data necessary for the integration to
          function.
        </p>

        <h2>Your Rights</h2>
        <p>
          Depending on your location, you may have rights including the right
          to access, correct, or delete your personal data. To exercise these
          rights, contact us at{" "}
          <a href="mailto:hello@factorcloud.com">hello@factorcloud.com</a>.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new policy on this page and
          updating the &quot;Last updated&quot; date.
        </p>

        <h2>Contact Us</h2>
        <p>If you have questions about this Privacy Policy, please contact us:</p>
        <p>
          FactorCloud
          <br />
          3490 Piedmont Rd. Suite 1350
          <br />
          Atlanta, GA 30305
          <br />
          <a href="mailto:hello@factorcloud.com">hello@factorcloud.com</a>
        </p>
      </div>

      <Footer />
    </>
  );
}

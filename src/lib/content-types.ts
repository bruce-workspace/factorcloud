/**
 * Frontmatter shapes for content/pages/{locale}/*.mdx files.
 * Keys here mirror the YAML fields. If you add a key to a page, add it here too.
 */

export type LinkRef = { label: string; href: string; external?: boolean };

export type AboutFrontmatter = {
  page: "about";
  slug: string;
  locale: "en" | "es";
  status: "draft" | "published";
  seo?: SeoOverride;
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    primaryCta: LinkRef;
    secondaryCta: LinkRef;
  };
  stats: { number: string; label: string }[];
  sections: {
    eyebrow: string;
    heading: string;
    cards: { icon: string; title: string; body: string; linkLabel: string; href: string }[];
  };
  cta: {
    eyebrow: string;
    heading: string;
    body: string;
    primaryCta: LinkRef;
    secondaryCta: LinkRef;
  };
};

export type IntegrationsFrontmatter = {
  page: "integrations";
  slug: string;
  locale: "en" | "es";
  status: "draft" | "published";
  seo?: SeoOverride;
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    primaryCta: LinkRef;
    secondaryCta: LinkRef;
  };
  filters: { id: string; label: string }[];
  partners: {
    name: string;
    category: string;
    featured?: boolean;
    logoSize?: "sm";
    logo: string;
    badge: string;
    description: string;
  }[];
  developers: {
    eyebrow: string;
    heading: string;
    body: string;
    features: string[];
    cta: LinkRef;
  };
  cta: {
    heading: string;
    body: string;
    primaryCta: LinkRef;
    secondaryCta: LinkRef;
  };
};

export type ResourcesFrontmatter = {
  page: "resources";
  slug: string;
  locale: "en" | "es";
  status: "draft" | "published";
  seo?: SeoOverride;
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
  };
  filters: { id: string; label: string }[];
  articles: {
    category: string;
    icon: string;
    label: string;
    title: string;
    excerpt: string;
    meta: string;
  }[];
  cta: {
    eyebrow: string;
    heading: string;
    body: string;
    primaryCta: LinkRef;
  };
};

export type ContactFrontmatter = {
  page: "contact";
  slug: string;
  locale: "en" | "es";
  status: "draft" | "published";
  seo?: SeoOverride;
  hero: { eyebrow: string; headline: string };
  info: {
    heading: string;
    body: string;
    details: {
      icon: string;
      label: string;
      value: string;
      href?: string;
      linkLabel?: string;
      linkHref?: string;
    }[];
    responseBox: { title: string; body: string };
  };
  form: {
    heading: string;
    subheading: string;
    submitLabel: string;
    labels: Record<string, string>;
    subjects: { value: string; label: string }[];
  };
};

export type GetDemoFrontmatter = {
  page: "get-demo";
  slug: string;
  locale: "en" | "es";
  status: "draft" | "published";
  seo?: SeoOverride;
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    features: string[];
  };
  form: {
    heading: string;
    subheading: string;
    submitLabel: string;
    footnote: string;
    labels: Record<string, string>;
    hearAboutOptions: { value: string; label: string }[];
  };
  faq: {
    eyebrow: string;
    heading: string;
    items: { q: string; a: string }[];
  };
};

export type FeaturesFrontmatter = {
  page: "features";
  slug: string;
  locale: "en" | "es";
  status: "draft" | "published";
  seo?: SeoOverride;
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    primaryCta: LinkRef;
    secondaryCta: LinkRef;
  };
  modules: {
    num: string;
    icon: string;
    title: string;
    body: string;
    linkLabel: string;
    href: string;
  }[];
  stat: {
    number: string;
    label: string;
    cta: LinkRef;
  };
};

export type HomeFrontmatter = {
  page: "home";
  slug: string;
  locale: "en" | "es";
  status: "draft" | "published";
  seo?: SeoOverride;
  hero: {
    overline: string;
    headlineAmber: string;
    headlineWhite: string;
    subheadline: string;
    props: string[];
    primaryCta: LinkRef;
    secondaryCta: LinkRef;
    dashboardUrl: string;
    dashboardImage: string;
    dashboardImageAlt: string;
  };
  stat: {
    number: number;
    suffix: string;
    label: string;
    badges: string[];
  };
  platformSections: {
    id: string;
    layout: "standard" | "reverse";
    overline: string;
    heading: string;
    body: string[];
    link?: LinkRef;
    footnote?: string;
    mockup: string;
  }[];
  claude: {
    badge: string;
    newTag: string;
    heading: string;
    subheadline: string;
    uses: { eyebrow: string; question: string; answer: string }[];
    primaryCta: LinkRef;
    secondaryCta: LinkRef;
  };
  compare: {
    overline: string;
    heading: string;
    columns: {
      feature: { eyebrow: string; label: string };
      legacy: { eyebrow: string; label: string; sub: string };
      factorcloud: { eyebrow: string; label: string; sub: string };
    };
    rows: { feature: string; legacy: string; factorcloud: string }[];
  };
  steps: {
    overline: string;
    heading: string;
    subheadline: string;
    items: { number: string; title: string; body: string }[];
  };
  faq: {
    overline: string;
    heading: string;
    items: { q: string; a: string }[];
  };
  demo: {
    overline: string;
    heading: string;
    body: string;
    trustItems: string[];
    primaryCta: LinkRef;
    secondaryCta: LinkRef;
  };
};

export type SeoOverride = {
  title?: string;
  description?: string;
  ogImage?: string;
  canonical?: string;
  robots?: { index?: boolean; follow?: boolean };
};

export type CtaButton = {
  label: string;
  href: string;
  variant?: "primary" | "ghost";
};

export type PricingPlan = {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  featured?: boolean;
  priceMain: string;
  priceDetail: string;
  cta: CtaButton;
  featureGroups: { label: string; items: string[] }[];
};

export type PricingCompareRow = {
  feature: string;
  standard: boolean;
  enterprise: boolean;
};

export type PricingFrontmatter = {
  page: "pricing";
  slug: string;
  locale: "en" | "es";
  status: "draft" | "published";
  seo?: SeoOverride;
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
  };
  plans: PricingPlan[];
  compare: {
    eyebrow: string;
    heading: string;
    columns: { id: string; label: string; accent?: boolean }[];
    groups: { label: string; rows: PricingCompareRow[] }[];
  };
  why: {
    eyebrow: string;
    heading: string;
    cards: { icon: string; title: string; body: string }[];
  };
  cta: {
    eyebrow: string;
    heading: string;
    body: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
};

import type { Metadata } from "next";
import seoConfig from "../../config/seo.json";
import type { Locale } from "./content";

type LocaleRecord<T> = Record<Locale, T>;

type PageOverride = {
  title?: string;
  description?: string;
  ogImage?: string;
  canonical?: string;
  robots?: { index?: boolean; follow?: boolean };
};

type SeoConfig = {
  site: {
    name: string;
    url: string;
    defaultLocale: Locale;
    locales: Locale[];
    twitter?: string;
    favicon?: string;
    appleTouchIcon?: string;
  };
  defaults: LocaleRecord<{
    titleTemplate: string;
    defaultTitle: string;
    description: string;
    ogImage: string;
    ogImageAlt: string;
  }>;
  hreflang: Record<string, string>;
  organization: Record<string, unknown>;
  robots: {
    index: boolean;
    follow: boolean;
    googleBot?: Record<string, unknown>;
  };
  pages: Record<string, Partial<LocaleRecord<PageOverride>>>;
};

const config = seoConfig as unknown as SeoConfig;

export function getSiteConfig() {
  return config.site;
}

export function getOrganizationJsonLd() {
  return config.organization;
}

type GetMetadataInput = {
  page: string;
  locale?: Locale;
  /** Optional in-page overrides (e.g. from MDX frontmatter) */
  override?: PageOverride & { keywords?: string[] };
};

export function getMetadata({ page, locale = "en", override }: GetMetadataInput): Metadata {
  const defaults = config.defaults[locale];
  const pageOverride = config.pages[page]?.[locale] ?? {};

  const title = override?.title ?? pageOverride.title ?? defaults.defaultTitle;
  const description = override?.description ?? pageOverride.description ?? defaults.description;
  const ogImage = override?.ogImage ?? pageOverride.ogImage ?? defaults.ogImage;
  const robots = override?.robots ?? pageOverride.robots ?? {
    index: config.robots.index,
    follow: config.robots.follow,
  };

  const localeRoot = config.hreflang[locale] ?? config.site.url;
  const canonical =
    override?.canonical ?? pageOverride.canonical ?? buildCanonical(localeRoot, page);

  const alternates: Metadata["alternates"] = {
    canonical,
    languages: Object.fromEntries(
      Object.entries(config.hreflang).map(([loc, root]) => [loc, buildCanonical(root, page)]),
    ),
  };

  return {
    title: pageIsHome(page) ? defaults.defaultTitle : title,
    description,
    alternates,
    robots,
    openGraph: {
      type: "website",
      siteName: config.site.name,
      title,
      description,
      url: canonical,
      images: [{ url: ogImage, alt: defaults.ogImageAlt }],
      locale: locale === "es" ? "es_ES" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      site: config.site.twitter,
      title,
      description,
      images: [ogImage],
    },
  };
}

function buildCanonical(root: string, page: string): string {
  const cleanRoot = root.replace(/\/$/, "");
  if (pageIsHome(page)) return cleanRoot || "/";
  return `${cleanRoot}/${page}`;
}

function pageIsHome(page: string): boolean {
  return page === "home" || page === "" || page === "/";
}

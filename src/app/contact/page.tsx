// Metadata sourced from /content/pages/{locale}/contact.mdx — edit there, not here.
import type { Metadata } from "next";
import PageContent from "./page-content";
import { loadPage } from "@/lib/content";
import { getMetadata } from "@/lib/seo";
import type { ContactFrontmatter } from "@/lib/content-types";

const LOCALE = "en" as const;

export function generateMetadata(): Metadata {
  const { frontmatter } = loadPage<ContactFrontmatter>("contact", LOCALE);
  return getMetadata({ page: "contact", locale: LOCALE, override: frontmatter.seo });
}

export default function Page() {
  const { frontmatter } = loadPage<ContactFrontmatter>("contact", LOCALE);
  return <PageContent content={frontmatter} />;
}

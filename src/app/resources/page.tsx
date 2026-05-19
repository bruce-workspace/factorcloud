// Metadata sourced from /content/pages/{locale}/resources.mdx — edit there, not here.
import type { Metadata } from "next";
import PageContent from "./page-content";
import { loadPage } from "@/lib/content";
import { getMetadata } from "@/lib/seo";
import type { ResourcesFrontmatter } from "@/lib/content-types";

const LOCALE = "en" as const;

export function generateMetadata(): Metadata {
  const { frontmatter } = loadPage<ResourcesFrontmatter>("resources", LOCALE);
  return getMetadata({ page: "resources", locale: LOCALE, override: frontmatter.seo });
}

export default function Page() {
  const { frontmatter } = loadPage<ResourcesFrontmatter>("resources", LOCALE);
  return <PageContent content={frontmatter} />;
}

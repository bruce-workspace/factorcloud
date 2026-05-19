// Metadata sourced from /content/pages/{locale}/get-demo.mdx — edit there, not here.
import type { Metadata } from "next";
import PageContent from "./page-content";
import { loadPage } from "@/lib/content";
import { getMetadata } from "@/lib/seo";
import type { GetDemoFrontmatter } from "@/lib/content-types";

const LOCALE = "en" as const;

export function generateMetadata(): Metadata {
  const { frontmatter } = loadPage<GetDemoFrontmatter>("get-demo", LOCALE);
  return getMetadata({ page: "get-demo", locale: LOCALE, override: frontmatter.seo });
}

export default function Page() {
  const { frontmatter } = loadPage<GetDemoFrontmatter>("get-demo", LOCALE);
  return <PageContent content={frontmatter} />;
}

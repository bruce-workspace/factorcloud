import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type Locale = "en" | "es";

const CONTENT_ROOT = path.join(process.cwd(), "content");

export type PageContent<T = Record<string, unknown>> = {
  frontmatter: T;
  body: string;
};

function readMdx(absPath: string): { data: Record<string, unknown>; content: string } {
  const raw = fs.readFileSync(absPath, "utf8");
  const parsed = matter(raw);
  return { data: parsed.data, content: parsed.content };
}

export function loadPage<T = Record<string, unknown>>(
  page: string,
  locale: Locale = "en",
): PageContent<T> {
  const file = path.join(CONTENT_ROOT, "pages", locale, `${page}.mdx`);
  const { data, content } = readMdx(file);
  return { frontmatter: data as T, body: content };
}

export function loadPageSafe<T = Record<string, unknown>>(
  page: string,
  locale: Locale = "en",
): PageContent<T> | null {
  const file = path.join(CONTENT_ROOT, "pages", locale, `${page}.mdx`);
  if (!fs.existsSync(file)) return null;
  const { data, content } = readMdx(file);
  return { frontmatter: data as T, body: content };
}

export type BlogPost<T = Record<string, unknown>> = {
  slug: string;
  locale: Locale;
  frontmatter: T;
  body: string;
};

export function loadBlogPost<T = Record<string, unknown>>(
  slug: string,
  locale: Locale = "en",
): BlogPost<T> | null {
  const file = path.join(CONTENT_ROOT, "blog", locale, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const { data, content } = readMdx(file);
  return { slug, locale, frontmatter: data as T, body: content };
}

export function listBlogPosts<T = Record<string, unknown>>(
  locale: Locale = "en",
  opts: { includeDrafts?: boolean } = {},
): BlogPost<T>[] {
  const dir = path.join(CONTENT_ROOT, "blog", locale);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx") && !f.startsWith("_"))
    .map((f) => {
      const slug = f.replace(/\.mdx$/, "");
      const { data, content } = readMdx(path.join(dir, f));
      return { slug, locale, frontmatter: data as T, body: content };
    })
    .filter((post) => {
      if (opts.includeDrafts) return true;
      const status = (post.frontmatter as Record<string, unknown>)?.status;
      return status !== "draft";
    })
    .sort((a, b) => {
      const da = String((a.frontmatter as Record<string, unknown>)?.date ?? "");
      const db = String((b.frontmatter as Record<string, unknown>)?.date ?? "");
      return db.localeCompare(da);
    });
}

export function listHelpArticles<T = Record<string, unknown>>(
  locale: Locale = "en",
): BlogPost<T>[] {
  const dir = path.join(CONTENT_ROOT, "help-center", locale);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx") && !f.startsWith("_"))
    .map((f) => {
      const slug = f.replace(/\.mdx$/, "");
      const { data, content } = readMdx(path.join(dir, f));
      return { slug, locale, frontmatter: data as T, body: content };
    });
}

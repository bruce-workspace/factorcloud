import type { MetadataRoute } from "next";

const SITE_URL = "https://factorcloud.com";

const ROUTES: string[] = [
  "/",
  "/pricing",
  "/resources",
  "/contact",
  "/get-demo",
  "/privacy-policy",
  "/terms-and-conditions",
  "/about",
  "/about/our-story",
  "/about/team",
  "/about/values",
  "/about/security",
  "/features",
  "/features/automation",
  "/features/back-end",
  "/features/client-portal",
  "/features/ocr-automation",
  "/features/open-api",
  "/features/tracking",
  "/integrations",
  "/integrations/ansonia",
  "/integrations/bankshot",
  "/integrations/bill360",
  "/integrations/brightbolt",
  "/integrations/cargonerd",
  "/integrations/claude",
  "/integrations/decipher",
  "/integrations/factorgenie",
  "/integrations/iridium-credit",
  "/integrations/lighthouz",
  "/integrations/lighthouz-ai",
  "/integrations/peruse",
  "/integrations/quickbooks",
  "/integrations/rox",
  "/integrations/tank",
  "/integrations/triumph",
  "/integrations/truckercloud",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route === "/" ? "" : route}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.7,
  }));
}

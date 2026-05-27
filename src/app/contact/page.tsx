import type { Metadata } from "next";
import PageContent from "./page-content";

export const metadata: Metadata = {
  title: "Get a Demo",
  description:
    "See FactorCloud in action. Tell us about your factoring operation and our team will walk you through the platform live.",
};

export default function Page() {
  return <PageContent />;
}

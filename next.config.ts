import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  distDir: "build",
  images: {
    remotePatterns: [
      // Add allowed external image hosts here, e.g.:
      // { protocol: "https", hostname: "cdn.example.com" },
    ],
  },
  async redirects() {
    return [
      // Add 301 redirects here, e.g.:
      // { source: "/old", destination: "/new", permanent: true },
    ];
  },
};

export default nextConfig;

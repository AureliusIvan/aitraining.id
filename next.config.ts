import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  // NOTE: www → non-www redirect belongs in Vercel domain settings (not here),
  // because Vercel handles it at the CDN edge before Next.js runs.
  // Current Vercel config: aitraining.id → 307 → www.aitraining.id (WRONG)
  // Required Vercel config: www.aitraining.id → 301 → aitraining.id (to match canonicals)
};

export default nextConfig;

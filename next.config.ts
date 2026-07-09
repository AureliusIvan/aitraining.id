import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  // NOTE: the www redirect is handled at the Vercel CDN edge (in the project's
  // domain settings), before Next.js runs, so this file intentionally carries
  // no redirect logic.
  // Current live behavior: www.aitraining.id → 308 → aitraining.id (apex),
  // which matches the site canonicals (all canonical URLs use the bare apex).
};

export default nextConfig;

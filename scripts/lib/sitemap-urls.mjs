/**
 * Single source of truth for "which URLs should we ping": the sitemap that
 * src/app/sitemap.ts already generated at build time. postbuild runs after
 * `next build`, so the rendered body exists on disk. Both the IndexNow and
 * Google Indexing pings read from here, so a newly-shipped page is pinged
 * automatically the moment it appears in the sitemap — no per-script URL list
 * to maintain.
 */

import { readFileSync } from "node:fs";
import { join } from "node:path";

const SITEMAP_BODY = join(process.cwd(), ".next/server/app/sitemap.xml.body");

/**
 * Extract every <loc> URL from the built sitemap.
 * Returns [] if the file is missing (caller decides whether that's fatal).
 */
export function readSitemapUrls() {
  let xml;
  try {
    xml = readFileSync(SITEMAP_BODY, "utf8");
  } catch {
    return [];
  }
  const urls = [];
  const re = /<loc>([^<]+)<\/loc>/g;
  let m = re.exec(xml);
  while (m !== null) {
    urls.push(m[1].trim());
    m = re.exec(xml);
  }
  return urls;
}

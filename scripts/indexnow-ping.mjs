/**
 * Ping IndexNow after production builds so Bing (and ChatGPT Search) re-crawl
 * updated URLs quickly. Skips local/preview builds.
 *
 * The URL list is derived from the built sitemap (see lib/sitemap-urls.mjs), so
 * any newly-shipped page is pinged automatically. Non-page assets that aren't in
 * the sitemap (llms.txt, pricing.md) are appended explicitly.
 *
 * Key file: public/8026434a1e2f3b4c5d6e7f8091a2b3c4.txt
 */

import { readSitemapUrls } from "./lib/sitemap-urls.mjs";

const HOST = "aitraining.id";
const KEY = process.env.INDEXNOW_KEY ?? "8026434a1e2f3b4c5d6e7f8091a2b3c4";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const BASE = `https://${HOST}`;

// Machine-readable assets that live outside the sitemap but should still be
// crawled fresh.
const EXTRA_URLS = [`${BASE}/llms.txt`, `${BASE}/pricing.md`];

function buildUrlList() {
  const fromSitemap = readSitemapUrls();
  if (fromSitemap.length === 0) {
    console.warn(
      "[indexnow] sitemap body not found — falling back to homepage only",
    );
    return [BASE, ...EXTRA_URLS];
  }
  // De-dupe in case an extra asset is ever added to the sitemap too.
  return [...new Set([...fromSitemap, ...EXTRA_URLS])];
}

async function main() {
  const shouldPing =
    process.env.VERCEL_ENV === "production" ||
    process.env.INDEXNOW_FORCE === "1";

  if (!shouldPing) {
    console.log(
      "[indexnow] skip (production build or INDEXNOW_FORCE=1 required)",
    );
    return;
  }

  const urls = buildUrlList();
  const body = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  };

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });

  if (res.ok || res.status === 202) {
    console.log(`[indexnow] ok (${res.status}) — pinged ${urls.length} URLs`);
    return;
  }

  const text = await res.text().catch(() => "");
  console.warn(`[indexnow] warn (${res.status}): ${text || res.statusText}`);
}

main().catch((err) => {
  console.warn("[indexnow] failed (non-fatal):", err.message);
  process.exit(0);
});

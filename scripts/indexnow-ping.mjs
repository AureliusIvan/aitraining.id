/**
 * Ping IndexNow after production builds so Bing (and ChatGPT Search) re-crawl
 * updated URLs quickly. Skips local/preview builds.
 *
 * Key file: public/8026434a1e2f3b4c5d6e7f8091a2b3c4.txt
 */

const HOST = "aitraining.id";
const KEY =
  process.env.INDEXNOW_KEY ?? "8026434a1e2f3b4c5d6e7f8091a2b3c4";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const BASE = `https://${HOST}`;

const URLS = [
  BASE,
  `${BASE}/programs`,
  `${BASE}/best-ai-trainers-indonesia`,
  `${BASE}/geo-training`,
  `${BASE}/best-geo-trainers-indonesia`,
  `${BASE}/pelatihan-ai-untuk-perusahaan`,
  `${BASE}/about`,
  `${BASE}/cities`,
  `${BASE}/cities/jakarta`,
  `${BASE}/cities/surabaya`,
  `${BASE}/cities/bandung`,
  `${BASE}/cities/tangerang`,
  `${BASE}/compare`,
  `${BASE}/pricing`,
  `${BASE}/contact`,
  `${BASE}/playbook`,
  `${BASE}/playbook/daily-prompt`,
  `${BASE}/pricing.md`,
  `${BASE}/llms.txt`,
];

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

  const body = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: URLS,
  };

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });

  if (res.ok || res.status === 202) {
    console.log(`[indexnow] ok (${res.status}) — pinged ${URLS.length} URLs`);
    return;
  }

  const text = await res.text().catch(() => "");
  console.warn(`[indexnow] warn (${res.status}): ${text || res.statusText}`);
}

main().catch((err) => {
  console.warn("[indexnow] failed (non-fatal):", err.message);
  process.exit(0);
});

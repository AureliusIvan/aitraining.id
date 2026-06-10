# aitraining.id — SEO Improvement Plan

**Date:** 2026-06-10
**Goal:** Get aitraining.id / Aurelius Ivan Wijaya cited by all major AI engines (ChatGPT ✅ already, Claude, Gemini, Perplexity, Copilot) and ranking in traditional Google for corporate AI training queries in Indonesia.

---

## Where we stand (verified 2026-06-10)

Live checks against Brave Search (the retrieval backend Claude uses):

| Signal | Status |
|---|---|
| ChatGPT — "top 10 AI trainer in Indonesia" | ✅ Ranked ~#1 |
| Brave index — brand query "aitraining.id" | ✅ #1 result, rich extraction |
| Brave — "best corporate AI trainer Indonesia" | ✅ Ivan #2 (via LinkedIn + aurelivan.com) |
| Brave — "top 10 AI trainer in Indonesia" | ❌ Absent — no page anywhere with Ivan matches this phrase |
| Brave — "trainer AI terbaik di Indonesia" | ❌ Absent (competitor andreasagung.com ranks #1 with a self-published page titled exactly that) |
| On-site technicals | ✅ robots open to all bots, sitemap complete, JSON-LD on ~all pages, llms.txt, pricing.md |

**Core insight:** Claude's gap is *query-phrase coverage at the retrieval layer*, not trust or indexing. Brave retrieves pages whose titles/content match the query. Self-published ranked-list pages DO rank (Andreas Agung proves it). Nobody — neither our site nor any third party — currently associates Ivan with "top/terbaik AI trainer Indonesia" phrasing.

---

## Phase 1 — Quick wins (this week)

### 1.1 Publish a ranked-list page (highest leverage, fully in our control)
- **What:** An honest roundup page, e.g. `/best-ai-trainers-indonesia` — EN title "Top AI Trainers & Corporate AI Training Providers in Indonesia (2026)" + ID variant (`/trainer-ai-terbaik-indonesia` or hreflang'd section) "Trainer AI Terbaik di Indonesia".
- **How:** List real providers transparently — Ivan/aitraining.id, Indonesia AI, Hacktiv8, Pertama Partners, Coding Studio, Andreas Agung, NobleProg — with factual differentiation (individual trainer vs bootcamp vs institution, format, focus). Include comparison table, FAQ block, `ItemList` + `FAQPage` schema, last-updated date.
- **Why it works:** Best-of/listicle content earns ~10% of all AI citations; Brave retrieval is keyword-relevance-driven and currently has zero pages matching this phrase that mention Ivan. The honest-roundup format also makes the page citable by Gemini/Perplexity, not just retrievable.
- **Guardrail:** No fabricated rankings, credentials, or competitor claims. Factual descriptions only.

### 1.2 Fix LinkedIn headline
- Still reads "Founder of AICON ASIA" — contradicts the 2026-06-06 de-branding decision. LinkedIn is the #2 asset Brave serves for trainer queries, so this stale headline is what Claude quotes. Update to current positioning (Corporate AI Trainer · Cursor Ambassador · founder of aitraining.id).

### 1.3 Technical fixes (small, do in one PR)
- **OG image:** `public/` has no images; add a branded `opengraph-image` (Next.js convention) so shares/SERP previews render. Also favicon/icon set if missing.
- **Sitemap freshness:** `sitemap.ts` stamps every URL `lastModified: new Date()` on every build — a false freshness signal engines learn to ignore. Use real per-page dates (hardcode or derive from git).
- **Add the new ranked-list page** to `sitemap.ts` and `llms.txt`.

### 1.4 Google Search Console + Bing Webmaster Tools
- Verify aitraining.id in GSC (drives Gemini ≈ Google rank) and Bing WMT (drives Copilot, supplements ChatGPT). Submit sitemap. Zero-cost, unlocks all measurement in Phase 4.

---

## Phase 2 — Off-site authority (weeks 2–4)

### 2.1 Listicle outreach — named, *proven* targets first
These two are already retrieved AND cited by Claude/Brave for our exact money queries; inclusion = instant entry into Claude's answer:
1. **pakaiai.id** — "11 Pelatihan AI Terbaik untuk Karyawan 2026" (pakaiai.id/blog/11-pelatihan-ai-terbaik-karyawan)
2. **pertamapartners.com** — "Best AI Courses for Companies in Indonesia (2026)" (pertamapartners.com/insights/best-ai-courses-companies-indonesia)

Then broaden using `marketing/listicle-outreach-kit.md` (fill the `[[ IVAN TO PROVIDE ]]` slots first). Pitch angle: individual-trainer category is underrepresented in both lists (they skew institutional).

### 2.2 Entity building (Gemini Knowledge Graph)
- Execute `marketing/wikidata-and-gbp.md`: Wikidata items (Person: Aurelius Ivan Wijaya; Org: aitraining.id) + Google Business Profile.
- Cross-link: site ↔ aurelivan.com ↔ LinkedIn ↔ GitHub ↔ Scholar with consistent `sameAs` in Organization/Person JSON-LD.

### 2.3 Directory & review presence
- Indonesian training/B2B directories; Google Business Profile reviews from past clients (DPD RI engagement, corporate clients — with permission).
- Third-party sources are 6.5× more likely to be cited by AI than own domains — this multiplies everything in Phase 1.

---

## Phase 3 — Content engine (ongoing, 2–4 pages/month)

Build the topical cluster so query fan-out retrieves us for adjacent phrasings:

| Priority | Page | Target queries |
|---|---|---|
| 1 | Ranked-list page (Phase 1.1) | top/best AI trainer Indonesia (EN+ID) |
| 2 | "Pelatihan AI untuk Karyawan / Perusahaan" (ID-language pillar) | pelatihan AI korporat, training AI perusahaan |
| 3 | Case studies w/ outcomes & client names (permission) | proof + citable statistics |
| 4 | "AI training cost in Indonesia" guide | harga pelatihan AI, AI training cost — pairs with /pricing.md |
| 5 | Per-program deep pages (n8n, Cursor, OpenClaw) | tool-specific training queries |
| 6 | Expand /playbook (worked well — keep shipping) | prompt engineering how-tos |

Content rules (per Princeton GEO findings): cite sources, include dated statistics, expert attribution (Ivan's credentials on every page), 40–60-word direct-answer blocks under query-phrased H2s, visible "Last updated" dates. Bahasa Indonesia content is underserved — competitors ranking for ID queries are mostly institutions; an individual expert voice in ID is an open lane.

---

## Phase 4 — Measure (monthly, ~30 min)

Track in a simple sheet, first run immediately after Phase 1 ships, then monthly:

| Query | ChatGPT | Claude | Gemini | Perplexity | Google rank |
|---|---|---|---|---|---|
| top 10 AI trainer in Indonesia | | | | | |
| trainer AI terbaik di Indonesia | | | | | |
| best corporate AI trainer Indonesia | | | | | |
| pelatihan AI untuk karyawan | | | | | |
| AI training Jakarta (+ per-city spot checks) | | | | | |
| aitraining.id pricing | | | | | |

Plus: GSC impressions/clicks for the cluster, referral traffic from chatgpt.com / perplexity.ai / claude.ai in analytics.

**Success criteria (90 days):** cited by Claude for ≥1 ranked-list query; present in ≥2 third-party listicles; Wikidata + GBP live; GSC impressions trending up on ID-language queries.

---

## Portfolio: aurelivan.com & aiforkarir.com (audited 2026-06-10)

The three sites are one entity strategy. Verified state:

### aurelivan.com — strongest asset, treat as the entity hub
✅ Already ranks #2 in Brave for "best corporate AI trainer Indonesia". JSON-LD on every page (Person `@id`, rich `sameAs`), per-program + per-city training pages, Substack-fed articles with real dates, proper `opengraph-image.tsx`, AI bots allowed.

Fixes:
1. **Make the entity link bidirectional.** aitraining.id's JSON-LD already references `https://aurelivan.com/#person`, but aurelivan.com's `sameAs` does NOT list aitraining.id (nor aiforkarir.com, LinkedIn-only one-way). Add both sites + YouTube to `sameAs` in `src/app/layout.tsx:120`. This is how Gemini's KG and Claude's corroboration learn the three domains are one person.
2. **Add `/llms.txt`** (mirror aitraining.id's, personal-brand angle).
3. **Resolve duplication with aitraining.id.** `corporate-training/{ai-automation,ai-development,ai-strategy,openclaw,jakarta,surabaya,bandung,tangerang,...}` targets the same queries as aitraining.id's /programs + /cities. Since aurelivan.com is currently the domain Brave actually ranks, do NOT consolidate away from it. Differentiate: aurelivan.com pages = expert/personal angle (who teaches, speaking, credentials, articles) linking to aitraining.id for booking/pricing; aitraining.id = the service brand (pricing, programs, comparison). Cross-link every paired page both ways so engines see complementary, not competing, content.
4. The ranked-list page (Phase 1.1) could alternatively live on aurelivan.com given its proven Brave rank — but aitraining.id is the long-term brand; publish there and have aurelivan.com link to it prominently ("featured in / see ranking").

### aiforkarir.com — invisible; needs indexing + entity attachment before anything else
❌ **Not in Brave's index at all** — its own brand query returns nothing (karir.ai and others rank instead). ❌ **Zero mention of Aurelius Ivan anywhere** — no author, no entity link, so it contributes nothing to (and gains nothing from) the rest of the portfolio. Only 5 pages.

Fixes, in order:
1. **Attach it to the entity:** author attribution (Person JSON-LD referencing `aurelivan.com/#person`) on panduan/kursus/riset pages + a real "tentang penulis" block. E-E-A-T currently absent.
2. **Get indexed:** submit to Brave (search.brave.com/submit-url), GSC + Bing WMT, and link to it from aurelivan.com + aitraining.id footers (the portfolio's only controllable backlinks).
3. **Fix the OG image:** `og-image.svg` — SVG is not rendered by LinkedIn/WhatsApp/X/Facebook; replace with PNG/JPG (1200×630).
4. **Complete JSON-LD:** present on home/panduan/kursus, missing on riset/tentang.
5. **Add llms.txt**; fix `sitemap.ts` `lastModified: new Date()` (same false-freshness issue as aitraining.id).
6. **Strategic role:** B2C Indonesian-language top-of-funnel ("belajar AI untuk karir") feeding the B2B brand. Its content cluster should target individual-learner queries (career + AI skills) that aitraining.id shouldn't, then route "untuk perusahaan/tim?" CTAs to aitraining.id.

### Cross-site rules
- One canonical Person entity: `https://aurelivan.com/#person`, referenced by all three sites' JSON-LD; all profiles in one consistent `sameAs` set.
- Never publish near-identical pages on two of the domains for the same query — pick the domain whose role owns it and cross-link from the others.
- Footer of each site links the other two (descriptive anchor text, not bare URLs).

## Guardrails

- Never fabricate rankings, credentials, client names, or statistics — engines and editors both penalize it, and it risks the relationships outreach depends on.
- No AICON ASIA mentions anywhere (positioning decision 2026-06-06).
- Write for people, organize for clarity — no AI-bait chunking or keyword stuffing (−10% AI visibility per Princeton GEO study).
- Keep llms.txt, pricing.md, and the ranked-list page updated when programs/pricing change — stale machine-readable files are worse than none.

# CLAUDE.md — aitraining.id

Corporate AI training landing site for **Aurelius Ivan Wijaya** (Aurelivan brand). Next.js App Router, TypeScript, Tailwind CSS, deployed on **Vercel** (push to `main` = production deploy). Remote: `git@github-personal:AureliusIvan/aitraining.id.git`.

## Stack & commands

- `pnpm dev` — local dev (Turbopack)
- `pnpm build` — production build; `postbuild` runs `scripts/indexnow-ping.mjs` (only fires when `VERCEL_ENV=production` or `INDEXNOW_FORCE=1`)
- `pnpm lint` / `pnpm format` — Biome
- Deploy: push to `main`; Vercel builds and the IndexNow ping submits key URLs to Bing/ChatGPT Search.

## House rules that apply to copy

1. **No "prompting" as training content.** Everything is **agent building / automation**. Do not add "prompt engineering" to schema, keywords, or program copy. (Portfolio standing rule; a few legacy mentions remain in `page.tsx` FAQ, `best-ai-trainers-indonesia` CIPHER, and the `playbook/daily-prompt` route — Ivan tracks these deliberately, leave them until he asks.)
2. **Run the `anti-ai-slop-police` agent on any new user-facing copy** (EN + BI) before shipping. No em-dashes/en-dashes, no "X bukan Y" / "X, not Y" comparison-by-foil, ground every factual claim. The foil habit creeps into source-code comments too (seen in `partners.ts`/`articles.ts` header comments) — those don't gate a ship decision since they never render, but worth a quick self-check when writing them.
3. **No bald self-superlatives.** Target superlative keywords ("terbaik", "top 1") via FAQ/buyer-guide/listicle framing, never "we are #1" as bare fact. The honest pattern: answer the buyer question and link the transparent ranked listicle (`/best-ai-trainers-indonesia`, `/best-geo-trainers-indonesia`).
4. **Pricing:** Rp 1.500.000/jam for ≤10 peserta, Rp 2.000.000/jam for >10 peserta. Keep `public/pricing.md` and `public/llms.txt` consistent with this.
5. **Brand name is "AI Training Indonesia," not "aitraining.id."** (Standing instruction, 2026-07-03.) `aitraining.id` stays the domain/URL/canonical identity (every `https://aitraining.id/...` link, `metadataBase`, schema `@id`, and bare `aitraining.id/some-path` navigational pointer is unaffected), but wherever the site names itself as an entity — page titles, OG/Twitter `title`/`siteName`, `publisher`, JSON-LD `name` fields (`EducationalOrganization`, `WebSite`, `ProfessionalService`), the Nav wordmark, the OG image, and prose mentions like "delivered through X" or "trainer di X" — use "AI Training Indonesia." "Corporate" stays as a descriptive adjective in body copy/meta descriptions where it's doing positioning work; it's just not part of the brand name itself.

## GEO/AEO architecture (where the AI-search optimization lives)

- **`src/app/layout.tsx`** — global JSON-LD: `EducationalOrganization` (with city-level `areaServed`: Jakarta/Surabaya/Bandung/Tangerang + Indonesia), `Person`, `WebSite`. Global `<title>`, description, keywords, OpenGraph live in the `metadata` export here.
- **`src/app/robots.ts`** — explicitly **allows** AI crawlers (Google-Extended, GPTBot, OAI-SearchBot, ChatGPT-User, PerplexityBot, ClaudeBot, anthropic-ai, Bingbot). Do not add Disallow rules for these or those engines can't cite the site.
- **`src/app/sitemap.ts`** — **auto-discovers** static routes by walking `src/app` for `page.tsx` (the filesystem is the source of truth for *which* URLs exist, so a new page is in the sitemap the moment it ships — no manual list). A `STATIC_META` overlay (keyed by route path) supplies **real** content-change dates + crawl hints; update a date only when a page meaningfully changes, never stamp the build date (engines learn to ignore false freshness). A discovered route with no `STATIC_META` entry is still emitted (default priority, no `lastModified`) and logged with a `[sitemap]` build warning — add it to `STATIC_META` for editorial control. Dynamic routes (`cities/[city]`, `partners/[slug]`, `articles/[slug]`) are skipped by the walk and expanded from `cities.ts` / `partners.ts` / `articles.ts`; `/cities/jakarta` is special-cased to its own date. Drafts/thank-you pages go in the `EXCLUDE` set.
- **`public/llms.txt`** — context file for AI systems. Mirrors the program list, credentials, pricing, and key page URLs. Keep in sync when adding pages/programs.
- **`public/pricing.md`** — machine-readable pricing for AI buying agents.
- **`scripts/lib/sitemap-urls.mjs`** — reads the built sitemap (`.next/server/app/sitemap.xml.body`) and returns its `<loc>` URLs. Single source of truth for both ping scripts, so a newly-shipped page is pinged automatically.
- **`scripts/indexnow-ping.mjs`** — pings IndexNow (Bing/ChatGPT Search) with the sitemap-derived URL list plus `llms.txt` / `pricing.md`. Runs on `postbuild`, production-only. Key file: `public/8026434a1e2f3b4c5d6e7f8091a2b3c4.txt`.
- **`scripts/google-index-ping.mjs`** — pings the Google Indexing API with the same sitemap-derived list. Runs on `postbuild` but **dormant** until `GOOGLE_INDEXING_SA_JSON` (a service-account key) is set as a Vercel env var; see the script header for setup. Gray-area on general pages — a nudge on top of the sitemap, not the only mechanism.

### City pages (`src/app/cities/[city]/page.tsx` + `src/lib/cities.ts`)

Each city is a `City` object in `cities.ts`. Two optional blocks drive conditional content + schema on the city page, currently set only for **Jakarta**:

- **`aiTrainer`** — general "best AI trainer `<city>`" intent (`top 1 ai trainer di jakarta`, `AI trainer Jakarta pelatihan AI terbaik`, `best AI training di jakarta` — code-switched superlative query, added 2026-07-02). Renders a buyer-FAQ section + `FAQPage` JSON-LD. FAQs cover who / cost / on-site vs online / differentiator / best-training-provider (honest "no official ranking body" framing, same pattern as the national line in `llms.txt`). H2 is a buyer-guide ("Memilih Pelatihan AI dan AI Trainer Terbaik di `<city>`"), not a self-claim.
- **`geo`** — "GEO trainer `<city>`" intent. Renders a GEO FAQ section + GEO `Service` + `FAQPage` JSON-LD.

The page also emits `Service` (Corporate AI Training) and `BreadcrumbList` schema for every city, and city-specific `keywords` metadata when `aiTrainer` is set. To target a new city for these queries, add the block(s) to that city's object — no component changes needed.

### Partners vs Articles — pick the right container before writing a "what is X" page

Two separate content types cover third-party tools/communities, and they are **not interchangeable**:

- **`/partners/[slug]`** (`src/lib/partners.ts`) — reserved for tools/communities aitraining.id has a **genuine formal relationship** with: an ambassador program (n8n, Cursor, HeyGen) or a community leadership role (Build Club — Ivan is City Lead of the Jakarta chapter). The page's `credentialBadge` states that formal title.
- **`/articles/[slug]`** (`src/lib/articles.ts`, added 2026-07-01) — for topics Ivan has genuine hands-on expertise in but **no formal affiliation** with the underlying project/company. First (and currently only) entry: "Apa itu OpenClaw?" at `/articles/apa-itu-openclaw` — Ivan co-hosted a Build Club-organized hackathon about OpenClaw and built an OpenClaw training VM installer, but has no relationship with OpenClaw the project or its creator (Peter Steinberger). `Article.authorNote` states the real credential instead of an ambassador-style badge, and the article body explicitly discloses the lack of affiliation.

**Before adding a new "what is X" page, ask: does Ivan have a formal program/role with X, or just hands-on expertise?** Formal → `/partners`. Hands-on-only → `/articles`. Putting a no-affiliation tool under `/partners` overstates the relationship — this happened once (OpenClaw was briefly added to `/partners`, then moved to `/articles` same day after the honesty gap was flagged) and both `partners.ts` and `articles.ts` carry comments warning against re-adding it there.

Both engines share the same shape: a typed array + `[slug]` page (Article/Breadcrumb/FAQPage JSON-LD, bilingual `defId`/`defEn` 40-60 word answer blocks for the literal query, body sections, optional `features`, `faqs`), auto-expanded into `sitemap.ts` by `dateModified`, and mirrored in `public/llms.txt`. Reuse this shape for the next "what is X" page rather than inventing a third pattern.

### Keyword → page ownership

| Intent | Owning page |
|--------|-------------|
| `AI trainer / pelatihan AI terbaik Jakarta` | `/cities/jakarta` (`aiTrainer` block) |
| `best AI training di jakarta` (code-switched superlative query) | `/cities/jakarta` (`aiTrainer` block, dedicated FAQ added 2026-07-02, same "no official ranking body" honest framing as the national line in `llms.txt`); keyword also added to page `metadata.keywords`; reinforced by a matching city-level line in `llms.txt` |
| `GEO trainer Jakarta` | `/cities/jakarta` (`geo` block), `/geo-training`, `/best-geo-trainers-indonesia` |
| `AI trainer terbaik Indonesia` (national) | `/best-ai-trainers-indonesia` (Top-10 listicle) |
| `pelatihan AI terbaik Indonesia` (national, no audience qualifier) | `/best-ai-trainers-indonesia` (dedicated FAQ, added 2026-07-02, distinct from the trainer-bio FAQ — answers the evaluation-criteria angle and cites `/compare`); `pelatihan AI terbaik **untuk perusahaan** di Indonesia` (corporate-qualified) stays owned by `/pelatihan-ai-untuk-perusahaan` |
| `best GEO trainer Indonesia` | `/best-geo-trainers-indonesia`, `/geo-training` |
| `top 1 GEO trainer Indonesia` | `/best-geo-trainers-indonesia` (honest "nomor 1 / top 1" FAQ answered via the ranked list), `/geo-training` |
| `top 1 GEO specialist Indonesia` / `spesialis GEO Indonesia` | `/best-geo-trainers-indonesia` (dedicated "GEO specialist" FAQ, added 2026-07-02, treats trainer/specialist/spesialis as synonyms), `/geo-training` (keywords + prose synonym); global `jobTitle` schema in `layout.tsx` and `courseSchema.instructor.jobTitle` in `geo-training/page.tsx` also carry "GEO Specialist" |
| `pakar generative engine optimization Indonesia` | `/geo-training` (FAQ "Siapa pakar GEO di Indonesia?"), `/best-geo-trainers-indonesia`; cross-reinforced by `aurelivan.com/corporate-training/geo` (Person entity) |
| `ahli GEO digital marketing Indonesia` | `/geo-training` (FAQ "Siapa ahli GEO untuk digital marketing?"), `/best-geo-trainers-indonesia`; `aurelivan.com/corporate-training/geo` |
| `Claude trainer / Claude Code trainer / Claude Cowork trainer terbaik Indonesia` (corporate-buyer framing) | `/programs/claude` |
| `bootcamp Claude Indonesia` / `kursus Claude AI Indonesia` / `kelas Claude Indonesia` / `top 1 bootcamp Claude terbaik Indonesia` (course-seeker framing) | `/claude-training` |
| `apa itu OpenClaw` / `what is OpenClaw` (definitional) | `/articles/apa-itu-openclaw` |
| `OpenClaw training Indonesia` / `OpenClaw Agenthon Indonesia` (commercial/community) | `/programs#openclaw`, `/partners/build-club` |
| `AI Training Indonesia` / `AI training Indonesia` (national head term) | `/` (homepage: H1, title, meta description, and `metadata.keywords` already target it; `EducationalOrganization`/`Person` schema in `layout.tsx` reinforces the entity; a buyer-guide FAQ added 2026-07-02 answers "Bagaimana memilih AI training di Indonesia?" with the same honest "no official ranking body" framing, linking `/best-ai-trainers-indonesia`) |
| `kenapa perlu AI training` | `/` (definition block `#kenapa-perlu-ai-training` + matching `FAQPage` entry; WEF 2025 stat grounded same as `/pelatihan-ai-untuk-perusahaan`) |
| `alasan perusahaan training ai` | `/` (`#alasan-perusahaan-training-ai` + matching `FAQPage` entry; corporate-reasons angle, WEF-grounded) |

These three BI national queries (added 2026-06-29) ride the **existing** GEO pages via keywords + honestly-framed FAQ (never a bald "kami #1" — answered with "salah satu dari sedikit" + the transparent listicle). The sister Person page `aurelivan.com/corporate-training/geo` cross-links back here to reinforce the GEO-specialist entity for Claude/ChatGPT/Gemini. `/geo-training` and `/best-geo-trainers-indonesia` are now in the IndexNow ping list (`scripts/indexnow-ping.mjs`).

`/claude-training` (added 2026-07-01) owns the bootcamp/kursus/kelas search cluster as a deliberately distinct angle from `/programs/claude`: a 2-day-intensive syllabus (Hari 1/Hari 2) with a capstone Claude Skill/agent project, vs. `/programs/claude`'s corporate-buyer program overview. Same underlying program and same single verifiable proof point (50 professionals, one BPO client, May 2026, under NDA — state singular, never pluralize, per the Claude trademark/honesty guardrails) — do not invent a separate public cohort, fixed start date, or graduate count for the bootcamp page. The proposed brand "Claude Mastery by AI Training ID" was **not** used: fusing "Claude" into an invented sub-brand name reads as more than the required descriptive-only trademark use. The page title/H1 use "Claude" attributively ("Bootcamp Claude AI Indonesia") with "AI Training Indonesia" as the actual brand (see house rule 5), matching this site's existing naming convention.

`apa itu OpenClaw` (added 2026-07-01) is a high-competition global query already saturated by Wikipedia, DigitalOcean, Milvus, KDnuggets, and several Indonesian hosting-company content mills (Hostinger, Rumahweb, Biznetgio, AwanServers, Jetorbit) — none of this site's pages will outrank Wikipedia for the bare definition. The realistic win is the Indonesia/training long-tail (being cited as the secondary source for "OpenClaw training Indonesia", "OpenClaw Agenthon Indonesia") where Ivan has a real, undisputed first-hand credential (Agenthon co-host, training VM installer) that the generic content-mill articles don't. Don't over-invest in chasing the bare head term; the off-domain lever (listicle outreach, the Agenthon's own third-party footprint) matters more here than more on-domain pages.

`AI Training Indonesia` (added 2026-07-02) already drives the site's core H1, title, and meta description. As a bare blue link it is a long shot: it competes against large course marketplaces and government-adjacent or association-run training listings that outrank a single-trainer site on domain authority alone, not against peer trainers this site can credibly out-argue. The realistic play is GEO-citation (the homepage's honest buyer-guide FAQ and schema, plus `llms.txt`, feeding ChatGPT/Perplexity/AI Overviews answers) and qualified long-tail (`AI trainer Jakarta`, `Claude bootcamp Indonesia`, `GEO trainer Indonesia`) rather than chasing the bare head term's blue-link ranking.

## Evaluating SEO/GEO changes

Citation lift is a **later** check (indexing takes days). What's verifiable at ship time: `pnpm build` passes, target queries appear in H2s/FAQ questions, `FAQPage` JSON-LD is well-formed (the built `cities/jakarta.html` should contain the expected `"@type":"Question"` count), the page is in `sitemap.ts` + `llms.txt`, internal links are wired, and the IndexNow ping fires post-deploy. Track real AI-citation results manually (ChatGPT/Perplexity/Google AI Overviews) over the following weeks.

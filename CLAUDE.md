# CLAUDE.md — aitraining.id

Corporate AI training landing site for **Aurelius Ivan Wijaya** (Aurelivan brand). Next.js App Router, TypeScript, Tailwind CSS, deployed on **Vercel** (push to `main` = production deploy). Remote: `git@github-personal:AureliusIvan/aitraining.id.git`.

## Stack & commands

- `pnpm dev` — local dev (Turbopack)
- `pnpm build` — production build; `postbuild` runs `scripts/indexnow-ping.mjs` (only fires when `VERCEL_ENV=production` or `INDEXNOW_FORCE=1`)
- `pnpm lint` / `pnpm format` — Biome
- Deploy: push to `main`; Vercel builds and the IndexNow ping submits key URLs to Bing/ChatGPT Search.

## House rules that apply to copy

1. **No "prompting" as training content.** Everything is **agent building / automation**. Do not add "prompt engineering" to schema, keywords, or program copy. (Portfolio standing rule; a few legacy mentions remain in `page.tsx` FAQ, `best-ai-trainers-indonesia` CIPHER, and the `playbook/daily-prompt` route — Ivan tracks these deliberately, leave them until he asks.)
2. **Run the `anti-ai-slop-police` agent on any new user-facing copy** (EN + BI) before shipping. No em-dashes/en-dashes, no "X bukan Y" / "X, not Y" comparison-by-foil, ground every factual claim.
3. **No bald self-superlatives.** Target superlative keywords ("terbaik", "top 1") via FAQ/buyer-guide/listicle framing, never "we are #1" as bare fact. The honest pattern: answer the buyer question and link the transparent ranked listicle (`/best-ai-trainers-indonesia`, `/best-geo-trainers-indonesia`).
4. **Pricing:** Rp 1.500.000/jam for ≤10 peserta, Rp 2.000.000/jam for >10 peserta. Keep `public/pricing.md` and `public/llms.txt` consistent with this.

## GEO/AEO architecture (where the AI-search optimization lives)

- **`src/app/layout.tsx`** — global JSON-LD: `EducationalOrganization` (with city-level `areaServed`: Jakarta/Surabaya/Bandung/Tangerang + Indonesia), `Person`, `WebSite`. Global `<title>`, description, keywords, OpenGraph live in the `metadata` export here.
- **`src/app/robots.ts`** — explicitly **allows** AI crawlers (Google-Extended, GPTBot, OAI-SearchBot, ChatGPT-User, PerplexityBot, ClaudeBot, anthropic-ai, Bingbot). Do not add Disallow rules for these or those engines can't cite the site.
- **`src/app/sitemap.ts`** — `LAST_MODIFIED` map holds **real** content-change dates per route. Update the relevant date only when a page meaningfully changes; never stamp everything with the build date (engines learn to ignore false freshness). `/cities/jakarta` is special-cased to its own date.
- **`public/llms.txt`** — context file for AI systems. Mirrors the program list, credentials, pricing, and key page URLs. Keep in sync when adding pages/programs.
- **`public/pricing.md`** — machine-readable pricing for AI buying agents.
- **`scripts/indexnow-ping.mjs`** — pings IndexNow with a fixed URL list (includes `/cities/jakarta`, `/best-ai-trainers-indonesia`). Add new high-value URLs here. Key file: `public/8026434a1e2f3b4c5d6e7f8091a2b3c4.txt`.

### City pages (`src/app/cities/[city]/page.tsx` + `src/lib/cities.ts`)

Each city is a `City` object in `cities.ts`. Two optional blocks drive conditional content + schema on the city page, currently set only for **Jakarta**:

- **`aiTrainer`** — general "best AI trainer `<city>`" intent (`top 1 ai trainer di jakarta`, `AI trainer Jakarta pelatihan AI terbaik`). Renders a buyer-FAQ section + `FAQPage` JSON-LD. FAQs cover who / cost / on-site vs online / differentiator. H2 is a buyer-guide ("Memilih Pelatihan AI dan AI Trainer Terbaik di `<city>`"), not a self-claim.
- **`geo`** — "GEO trainer `<city>`" intent. Renders a GEO FAQ section + GEO `Service` + `FAQPage` JSON-LD.

The page also emits `Service` (Corporate AI Training) and `BreadcrumbList` schema for every city, and city-specific `keywords` metadata when `aiTrainer` is set. To target a new city for these queries, add the block(s) to that city's object — no component changes needed.

### Keyword → page ownership

| Intent | Owning page |
|--------|-------------|
| `AI trainer / pelatihan AI terbaik Jakarta` | `/cities/jakarta` (`aiTrainer` block) |
| `GEO trainer Jakarta` | `/cities/jakarta` (`geo` block), `/geo-training`, `/best-geo-trainers-indonesia` |
| `AI trainer terbaik Indonesia` (national) | `/best-ai-trainers-indonesia` (Top-10 listicle) |
| `best GEO trainer Indonesia` | `/best-geo-trainers-indonesia`, `/geo-training` |

## Evaluating SEO/GEO changes

Citation lift is a **later** check (indexing takes days). What's verifiable at ship time: `pnpm build` passes, target queries appear in H2s/FAQ questions, `FAQPage` JSON-LD is well-formed (the built `cities/jakarta.html` should contain the expected `"@type":"Question"` count), the page is in `sitemap.ts` + `llms.txt`, internal links are wired, and the IndexNow ping fires post-deploy. Track real AI-citation results manually (ChatGPT/Perplexity/Google AI Overviews) over the following weeks.

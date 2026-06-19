# Keyword Gap Report — aitraining.id
_Generated 2026-06-16 · repo-inferred demand, GEO overlay · re-validate with GSC once pages accrue impressions_

> Coverage-based pass. No search-volume data was used or invented; status is judged purely on whether a dedicated page exists and how directly it targets a phrase. Re-rank with real GSC impressions once pages index. Complements `seo-improvement-plan.md` (entity, off-site, technical) — this report covers on-site keyword coverage only and does not repeat its action items.

## 1. Current coverage (supply)

Routes found: 13 static `page.tsx` + 1 dynamic `cities/[city]` template expanding to 4 city pages (Jakarta, Surabaya, Bandung, Tangerang) = **18 live URLs**. Only the root `layout.tsx`, `/geo-training`, and `/playbook/daily-prompt` declare a `keywords[]` array; every other page relies on title + description + JSON-LD only.

| Route | Primary keyword | Declared keywords[] (count + notable) | Lang | Notes |
|---|---|---|---|---|
| `/` | AI Corporate Training Indonesia | layout: **20** (corporate AI training Indonesia, Generative AI training, AI workshop perusahaan, pelatihan AI korporat, enterprise AI training Jakarta, n8n / Cursor ambassador) | EN/BI | h1 visible text is bare "AI Training Indonesia". Strong EN brand line; BI body copy. The layout keywords still list "prompt engineering training Indonesia" — off current positioning. |
| `/about` | Corporate AI Trainer Indonesia (Aurelius Ivan Wijaya) | none | BI | Trainer-entity page, h1 is the person's name. Credentials, DPD RI, Tech in Asia. |
| `/programs` | Program Corporate AI Training Indonesia | none | BI/EN | Lists 5 programs: AI Workflow Automation, AI-Powered Development, AI Strategy & Adoption, OpenClaw Training, GEO. No per-program dedicated pages. |
| `/pricing` | Harga Corporate AI Training | none | BI | Rate from IDR 1.5jt/jam, half/full/multi-day packages. Owns "harga pelatihan AI" intent partially. |
| `/cities` | Corporate AI Training di kota Indonesia | none | BI/EN | Index for 4 cities. |
| `/cities/jakarta` | Corporate AI Training Jakarta | none (from `cities.ts`) | BI | Per-city title + description from data file. |
| `/cities/surabaya` | Corporate AI Training Surabaya | none | BI | Same template. |
| `/cities/bandung` | Corporate AI Training Bandung | none | BI | Same template. |
| `/cities/tangerang` | Corporate AI Training Tangerang | none | BI | Same template. |
| `/compare` | Cara memilih AI training provider Indonesia | none | BI | Evaluation guide, 7 criteria, format comparison. Comparison-intent page. |
| `/best-ai-trainers-indonesia` | Top 10 AI Trainer Terbaik di Indonesia (2026) | none | BI | The GEO ranked-list play (seo-plan Phase 1.1). |
| `/geo-training` | GEO Trainer Indonesia | **10** (GEO trainer Indonesia/Jakarta, best GEO trainer, Generative Engine Optimization training, answer engine optimization) | BI | Dedicated GEO pillar, well-keyworded. |
| `/pelatihan-ai-untuk-perusahaan` | Pelatihan AI untuk Perusahaan & Karyawan | none | BI | BI-language pillar (seo-plan Phase 3 #2). hreflang to EN home. |
| `/playbook` | AI Playbooks — panduan praktis AI | none | BI | Resource hub, top-of-funnel. |
| `/playbook/daily-prompt` | Daily Prompt Playbook | **11** (prompt template AI, cara pakai AI untuk kerja, AI untuk non-tech, webinar AI Indonesia) | BI | B2C/individual angle; keywords lean on "prompt" — off the agent-building positioning. |
| `/contact` | Book Corporate AI Training | none | BI/EN | Conversion page. |

Coverage themes already owned: corporate AI training (EN brand + BI), pricing, 4-city geo, GEO/answer-engine, comparison/how-to-choose, trainer entity, a BI "untuk perusahaan" pillar, ranked-list, playbook resources.

## 2. Target keyword universe (demand)

Theme × modifier grid. ✅ covered (dedicated page) · ⚠️ thin (mentioned but no dedicated page / weak title match) · ❌ missing.

### Theme A — Corporate AI training (core service)
- ✅ corporate AI training Indonesia — `/` + layout keywords
- ✅ pelatihan AI untuk perusahaan / karyawan (BI) — `/pelatihan-ai-untuk-perusahaan`
- ✅ AI training Jakarta — `/cities/jakarta`
- ✅ AI training Surabaya / Bandung / Tangerang — city pages
- ⚠️ in-house / on-site AI training (in-house AI workshop) — mentioned in `/compare` and city copy, no page titled for it
- ❌ AI training Bali / Medan / Semarang / Yogyakarta / Makassar / Bekasi / Batam — city universe stops at 4
- ⚠️ enterprise AI training Indonesia (EN) — in layout keywords only, no EN-titled landing
- ❌ pelatihan AI untuk UMKM / SME AI training — no page

### Theme B — AI agent building (positioning spearhead)
- ⚠️ AI agent training Indonesia — only inside `/programs` (OpenClaw); no dedicated page or title
- ❌ pelatihan AI agent / pelatihan membangun AI agent (BI) — missing entirely
- ❌ build AI agents workshop / agentic AI training — missing
- ❌ AI agent for business Indonesia — missing
- ⚠️ OpenClaw training — listed on `/programs`, no standalone deep page
- ❌ n8n agent training / multi-agent workshop — missing (n8n only appears as a tag)

### Theme C — AI automation
- ⚠️ AI workflow automation training — `/programs` section only, no dedicated page
- ❌ n8n training Indonesia (standalone) — n8n is a tag, no page despite "n8n ambassador" positioning
- ❌ pelatihan otomasi AI / workflow automation perusahaan (BI) — missing
- ❌ AI automation for business / automate with AI workshop — missing

### Theme D — AI for business / strategy / adoption
- ⚠️ AI strategy training / AI adoption for enterprise — `/programs` section only
- ❌ AI for business leaders / executive AI workshop / AI for managers — missing
- ❌ AI transformation Indonesia / digital transformation AI — missing
- ⚠️ AI-powered development training (Cursor) — `/programs` section only, no page despite "Cursor ambassador" positioning

### Theme E — Pricing / commercial
- ✅ harga corporate AI training / rate pelatihan AI — `/pricing`
- ⚠️ AI training cost Indonesia (EN) — page is BI-titled, no EN variant
- ❌ biaya pelatihan AI per jam / paket training AI perusahaan (long-tail) — partial on `/pricing`, no FAQ-targeted block

### Theme F — Comparison / evaluation
- ✅ cara memilih AI training provider — `/compare`
- ⚠️ in-house vs public AI training — inside `/compare`, not its own answer block
- ❌ aitraining.id vs [competitor] / bootcamp vs corporate trainer — only the ranked-list touches this

### Theme G — Trainer entity / credentials
- ✅ corporate AI trainer Indonesia (person) — `/about`
- ✅ best/top AI trainer Indonesia — `/best-ai-trainers-indonesia`
- ✅ GEO trainer Indonesia / Jakarta — `/geo-training`
- ❌ n8n ambassador Indonesia (entity-as-page) — claim sits in keywords, no page
- ❌ Cursor ambassador Indonesia (entity-as-page) — same

### Theme H — Informational / top-of-funnel
- ✅ AI playbook / panduan praktis AI — `/playbook`
- ⚠️ AI use cases for business / contoh penerapan AI di perusahaan — none beyond program blurbs
- ❌ AI agent use cases / what can an AI agent do for my company — missing

### Theme I — GEO / AI-search natural-language (see Section 4)
- ✅ "best GEO trainer Jakarta/Indonesia" answer — `/geo-training` + ranked-list
- ⚠️ "who trains companies to build AI agents in Indonesia" — no page phrased as the answer
- ❌ several buyer questions (Section 4)

## 3. Gaps — ranked

P1 = high commercial intent + zero/near-zero coverage. Sorted P1 first.

| Keyword / phrase | Intent | Status | Recommended page or action | Priority |
|---|---|---|---|---|
| pelatihan AI agent / membangun AI agent untuk perusahaan (BI) | commercial | missing | New pillar `/pelatihan-ai-agent` — the positioning spearhead, currently has no home | P1 |
| AI agent training / build AI agents workshop (EN) | commercial | missing | EN section/hreflang on the agent pillar; this is the brand's core message with no landing | P1 |
| n8n training Indonesia | commercial | thin | New `/programs/n8n` deep page (leverages n8n ambassador claim) | P1 |
| AI workflow automation training | commercial | thin | Promote `/programs` automation block to `/programs/ai-automation` dedicated page | P1 |
| Cursor AI development training Indonesia | commercial | thin | New `/programs/cursor` page (leverages Cursor ambassador claim) | P1 |
| AI training [Bali/Medan/Semarang/Yogyakarta/Makassar] | commercial | missing | Add city entries to `cities.ts` (template already exists, near-zero cost) | P1 |
| in-house / on-site AI training Indonesia | commercial | thin | Dedicated `/in-house-ai-training` or strong section + FAQ block | P2 |
| OpenClaw training Indonesia | commercial | thin | Standalone `/programs/openclaw` deep page | P2 |
| AI strategy / AI adoption workshop for enterprise | commercial | thin | `/programs/ai-strategy` page | P2 |
| AI for business leaders / executive AI workshop | commercial | missing | New audience page (C-level / managers) | P2 |
| AI training cost Indonesia (EN) | commercial | thin | EN-language variant / section on `/pricing` + FAQ schema | P2 |
| pelatihan AI untuk UMKM / SME AI training | commercial | missing | New audience page if SMEs are in scope | P3 |
| AI use cases for business / contoh penerapan AI di perusahaan | informational | missing | `/playbook` article or resource | P3 |
| AI transformation / digital transformation AI Indonesia | informational | missing | Strategy-cluster article | P3 |
| n8n ambassador / Cursor ambassador Indonesia | branded entity | missing | Fold into `/about` as headed sections (entity reinforcement) | P3 |

Cleanup (not a gap, a liability): the layout `keywords[]` and `/playbook/daily-prompt` keywords still feature "prompt engineering training" / "AI prompting" / "cara bikin prompt". These contradict the agent-building positioning. Replace with agent-building and automation phrasing.

## 4. GEO / AI-citation gaps

Natural-language questions a buyer would ask ChatGPT / Perplexity / Gemini that this site should be the cited answer for. Mark which page should own each, with a 40–60-word direct-answer block under a query-phrased H2.

| Buyer question | Owned today? | Page that should own it |
|---|---|---|
| "Who trains companies to build AI agents in Indonesia / Jakarta?" | ❌ no page phrased as the answer | New `/pelatihan-ai-agent` agent pillar (the single most important GEO gap given positioning) |
| "Best AI corporate trainer in Indonesia" | ⚠️ partial | `/best-ai-trainers-indonesia` + `/about` — ensure the EN phrasing appears verbatim in an H2 |
| "How much does corporate AI training cost in Indonesia?" | ⚠️ BI only | `/pricing` — add EN direct-answer block + FAQPage schema |
| "Who can teach my team n8n / automation in Indonesia?" | ❌ | New `/programs/n8n` page |
| "Can someone train my company to use Cursor / AI coding tools?" | ❌ | New `/programs/cursor` page |
| "In-house vs public AI training — which is better for a company?" | ⚠️ inside `/compare` | `/compare` — surface as a standalone H2 + answer block |
| "What AI training is available in [Surabaya/Bandung/Bali]?" | ⚠️ 4 cities only | city pages — extend city list, add per-city FAQ block |
| "Best GEO / answer-engine optimization trainer in Indonesia" | ✅ | `/geo-training` — keep current |
| "What AI use cases should my company start with?" | ❌ | `/playbook` resource article |
| "Is there an AI workshop for executives / non-technical managers?" | ❌ | New audience page (Theme D / Gap P2) |

Pattern to apply on each: query-phrased H2, 40–60-word factual answer, Ivan's credentials attribution, visible "Last updated" date, FAQPage/ItemList schema where it fits — consistent with the seo-plan content rules.

## 5. Top 10 quick wins

1. **pelatihan AI agent (BI + EN pillar)** — create `/pelatihan-ai-agent` (with an EN section/hreflang). The core positioning currently has zero dedicated page. Highest-leverage build.
2. **Extend the city list** — add Bali, Medan, Semarang, Yogyakarta, Makassar (and Bekasi/Batam) to `cities.ts`. The dynamic template already renders them; this is near-zero-effort coverage of 5+ commercial geo queries.
3. **n8n training deep page** — `/programs/n8n`, converting the program tag into a standalone page that cashes in the "n8n ambassador" claim.
4. **Cursor training deep page** — `/programs/cursor`, same move for the "Cursor ambassador" claim and AI-powered-development intent.
5. **AI automation page** — promote the `/programs` automation block to `/programs/ai-automation` with a query-phrased H2 and FAQ.
6. **EN pricing block + FAQ schema** — add an English "How much does corporate AI training cost in Indonesia?" answer block and FAQPage schema to `/pricing`.
7. **Purge "prompting" keywords** — remove "prompt engineering training Indonesia" from `layout.tsx` and the "AI prompting / cara bikin prompt" terms from `/playbook/daily-prompt`; replace with agent-building / automation phrasing.
8. **OpenClaw standalone page** — `/programs/openclaw` deep page; the program is listed but undiscoverable by tool-specific search.
9. **In-house vs public answer block** — inside `/compare`, lift the format comparison into its own query-phrased H2 answer block to win that question in AI answers.
10. **Ambassador entity sections on `/about`** — add headed "Official n8n Ambassador for Indonesia" and "Cursor Ambassador" sections so the entity claims live in body content, not just metadata, reinforcing E-E-A-T for the trainer queries.

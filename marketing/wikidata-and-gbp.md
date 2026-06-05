# Knowledge Graph Paste-and-Submit Kit

**Goal:** give Gemini and Google AI Overviews a recognized *entity* for the trainer (Aurelius Ivan Wijaya) and the business (aitraining.id). Gemini and AI Overviews lean on Google's Knowledge Graph, and the Knowledge Graph ingests structured, cross-referenced public data — Wikidata being one of the strongest signals. This kit gives you copy you paste into **Wikidata** and **Google Business Profile** yourself.

> **You fill the blanks.** Anything marked `[[ IVAN TO PROVIDE: ... ]]` is a fact I will not invent. Leave it out or supply a real, sourced value. Do not fabricate awards, client counts, years of experience, press, or dates — Wikidata reviewers remove unsourced claims and it damages the entity's credibility.

---

## 0. Honest notability assessment (read this first)

Wikidata's bar is **not** the same as Wikipedia's "general notability." Wikidata accepts an item if it meets *any* of: (a) a serious and publicly available reference exists about it, (b) it refers to a clearly identifiable conceptual/material entity that can be described with serious sources, or (c) it fulfills a structural need (e.g., links other items). The practical risk is **deletion for being unreferenceable / promotional**, not "not famous enough."

**Person — Aurelius Ivan Wijaya:** *Borderline today.* You have strong identity anchors (personal site, LinkedIn, GitHub, a named role "Cursor Ambassador", founder of AICON ASIA). What's thin is **independent, third-party referenceable coverage** — Wikidata prefers claims backed by sources that aren't self-published. Self-owned profiles establish *identity* (good for `sameAs` and disambiguation) but are weak for *notability*. Risk of deletion as "promotional / no notable sources" is real but moderate. **What would strengthen it:** press/news features naming you; a confirmed/listed Cursor Ambassador page or directory entry; conference speaker listings (with the event's own page); a podcast/interview; an authority-file ID (VIAF, ORCID, ISNI). Even one or two of these flips it from borderline to safe.

**Organization — aitraining.id:** *Weaker than the person today.* A live website and service list establish existence, but a young training business with no independent coverage is the classic profile that gets flagged as promotional. **What would strengthen it:** a business registration reference, news mentions, a listing in a recognized directory, client case studies on third-party sites, or an event where the org is named. **Recommendation:** create the **person item first**, get it stable, and only create the org item once you have at least one independent reference — or accept that the org item may be challenged. The org's `founder → person` link is its best structural justification.

Bottom line: these will function as **entity anchors** for Google's Knowledge Graph and `sameAs` corroboration immediately, but treat Wikidata acceptance as "likely-with-effort," not guaranteed. The Google Business Profile (Section 4) is the higher-certainty, faster win.

---

## 1. Wikidata — Person item: Aurelius Ivan Wijaya

**How to submit:** go to <https://www.wikidata.org/wiki/Special:NewItem> (log in first). Enter the **label**, **description**, and **aliases** from Section 3, then **Save**. On the new item page, click **+ add statement** for each row below. For URL-valued properties use the URL; for "external ID" properties (GitHub, LinkedIn, X) enter only the **handle/ID**, not the full URL — Wikidata builds the link.

| Statement | Property | Value to enter |
|---|---|---|
| instance of | **P31** | `human` (Q5) |
| sex or gender | **P21** | `[[ IVAN TO PROVIDE: male / female / prefer to omit ]]` |
| occupation | **P106** | `trainer` (search "trainer" Q-id), and add separate statements for: `consultant`, `entrepreneur`, `public speaker` |
| field of work | **P101** | `artificial intelligence` (Q11660) |
| country of citizenship | **P27** | `Indonesia` (Q252) |
| residence / work location | **P551** / **P937** | `Jakarta` (Q3630) |
| employer / owner of | **P108** / **P1830** | aitraining.id item (link once Section 2 item exists) |
| official website | **P856** | `https://aurelivan.com` |
| GitHub username | **P2037** | `AureliusIvan` |
| LinkedIn personal profile ID | **P6634** | `aurelius-ivan-wijaya` |
| X (Twitter) username | **P2002** | `[[ IVAN TO PROVIDE: X/Twitter handle, or omit ]]` |
| email address | **P968** | `mailto:ivan@aurelivan.com` (optional; some editors omit personal email) |
| described at URL | **P973** | `https://aurelivan.com` and `https://aitraining.id` |
| date of birth | **P569** | `[[ IVAN TO PROVIDE: only if you want it public — fine to omit ]]` |
| ORCID iD | **P496** | `[[ IVAN TO PROVIDE: if you have one — strong notability signal ]]` |
| image | **P18** | `[[ IVAN TO PROVIDE: a Wikimedia-Commons-hosted photo you own the rights to ]]` |

**References (do this for non-self-evident claims):** for biographical statements add a `reference URL (P854)` pointing to where it's verifiable, plus `retrieved (P813)` = today's date. Identity/`sameAs`-style claims (P856, P2037, P6634) are self-referencing and usually need no extra source.

**`sameAs` links (the corroboration set — keep these identical everywhere):**
- Personal site: <https://aurelivan.com>
- LinkedIn: <https://www.linkedin.com/in/aurelius-ivan-wijaya>
- GitHub: <https://github.com/AureliusIvan>
- Business site: <https://aitraining.id>

---

## 2. Wikidata — Organization item: aitraining.id

**How to submit:** same flow — <https://www.wikidata.org/wiki/Special:NewItem>, then label/description/aliases from Section 3, then add statements. **Cross-link:** set `founder (P112)` here to the **person item** from Section 1, and (optionally) set `employer (P108)` or `owner of (P1830)` on the person item back to this org. The bidirectional link is the strongest structural reason for this item to exist.

| Statement | Property | Value to enter |
|---|---|---|
| instance of | **P31** | `business` (Q4830453) — or `enterprise` (Q6881511); add `training` as field |
| industry | **P452** | `[[ IVAN TO PROVIDE: pick — e.g., "education" / "professional training" Q-id ]]` |
| field of work | **P101** | `artificial intelligence` (Q11660) and `corporate training` |
| founder | **P112** | **Aurelius Ivan Wijaya** (the Section 1 person item) |
| founded by → also: chief executive | **P169** | `[[ IVAN TO PROVIDE: only if you hold a formal CEO/director title ]]` |
| country | **P17** | `Indonesia` (Q252) |
| headquarters location | **P159** | `Jakarta` (Q3630) |
| inception (founding date) | **P571** | `[[ IVAN TO PROVIDE: year the business started ]]` |
| official website | **P856** | `https://aitraining.id` |
| described at URL | **P973** | `https://aitraining.id` |
| LinkedIn company ID | **P4264** | `[[ IVAN TO PROVIDE: if aitraining.id has a LinkedIn company page ]]` |
| legal form | **P1454** | `[[ IVAN TO PROVIDE: PT / CV / sole proprietorship / none yet ]]` |
| logo image | **P154** | `[[ IVAN TO PROVIDE: Commons-hosted logo you own ]]` |

**Reference each non-obvious claim** with `reference URL (P854)` + `retrieved (P813)`. The website-derived facts can cite `https://aitraining.id`.

---

## 3. Labels, descriptions, aliases (EN + ID)

Keep descriptions under 250 characters and **non-promotional** — Wikidata descriptions are neutral disambiguators, not marketing. No "leading", "expert", "best".

### Person — Aurelius Ivan Wijaya

| Field | English (en) | Bahasa Indonesia (id) |
|---|---|---|
| **Label** | Aurelius Ivan Wijaya | Aurelius Ivan Wijaya |
| **Description** | Indonesian corporate AI trainer and consultant; Cursor Ambassador and founder of AICON ASIA, based in Jakarta. | Pelatih dan konsultan AI korporat asal Indonesia; Cursor Ambassador dan pendiri AICON ASIA, berbasis di Jakarta. |
| **Aliases** | Ivan Wijaya · Aurelius Ivan · Aurel Ivan | Ivan Wijaya · Aurelius Ivan · Aurel Ivan |

### Organization — aitraining.id

| Field | English (en) | Bahasa Indonesia (id) |
|---|---|---|
| **Label** | aitraining.id | aitraining.id |
| **Description** | Corporate AI training provider in Indonesia, offering on-site and virtual programs in workflow automation, AI-assisted development, and AI strategy. | Penyedia pelatihan AI korporat di Indonesia, dengan program tatap muka dan daring untuk otomasi alur kerja, pengembangan berbantuan AI, dan strategi AI. |
| **Aliases** | AI Training ID · aitraining | AI Training ID · aitraining |

---

## 4. Google Business Profile (GBP) copy

GBP is the **faster, higher-certainty** Knowledge-Graph signal — a verified profile feeds Google directly. Create/claim it at <https://www.google.com/business/>.

> **Verification — Ivan must supply (GBP will not publish without this):**
> - A **real contact method**: phone number and/or the website (`https://aitraining.id`).
> - **Verification path:** Google may require video verification of the business, a physical address (or service-area declaration), or a postcard. A service-area business can **hide** its address but still must verify one. `[[ IVAN TO PROVIDE: phone number + verification method (video/address/postcard) ]]`
> - Business hours. `[[ IVAN TO PROVIDE: operating hours ]]`

**Business name:** `aitraining.id` (use the exact name — do **not** stuff keywords like "Corporate AI Training Jakarta"; keyword-stuffed names get suspended).

**Primary category:** `Training centre`
**Secondary categories (add all that apply):**
- `Business management consultant`
- `Educational consultant`
- `Software training institute` *(use if listed in your region's category picker)*
- `Computer training school` *(alternative if the above isn't available)*

**Business description (≤750 chars — paste as-is, 718 chars):**
> aitraining.id delivers corporate AI training for teams across Indonesia, on-site and virtually, in Bahasa Indonesia and English. We run practical, hands-on programs that help organisations adopt AI in real workflows: AI Workflow Automation with n8n, AI-Powered Development using Cursor and prompt engineering, AI Strategy & Adoption for leaders, and OpenClaw training. Sessions are tailored to your team's tools and goals rather than generic slideware, so people leave able to apply what they learned the same week. Led by corporate AI trainer and Cursor Ambassador Aurelius Ivan Wijaya, founder of AICON ASIA. Book a session or request a custom program at https://aitraining.id.

**Services (map to the 4 programs — add each under Services with its own short blurb):**
| Service name | Short description |
|---|---|
| AI Workflow Automation (n8n) | Hands-on automation of business workflows using n8n and AI agents. |
| AI-Powered Development (Cursor / Prompt Engineering) | Build faster with Cursor and effective prompt-engineering practices. |
| AI Strategy & Adoption | Help leaders plan and roll out AI across teams and processes. |
| OpenClaw Training | Practical training on OpenClaw for AI-assisted work. |

**Pricing note (optional field):** base rate IDR 1,500,000 / hour (you may keep pricing off the public profile and quote per engagement).

**Service area:** `Indonesia` (set as a service-area business; add specific cities such as Jakarta if you want local relevance).

**Attributes (toggle where offered):** "Online appointments / virtual sessions", "On-site services", "Language: Indonesian", "Language: English", "Identifies as / LGBTQ+ etc." `[[ IVAN TO PROVIDE: only toggle attributes that are actually true ]]`

**Website & social links (must match the Wikidata `sameAs` set exactly):**
- Website: `https://aitraining.id`
- Founder / personal: `https://aurelivan.com`
- LinkedIn: `https://www.linkedin.com/in/aurelius-ivan-wijaya`
- GitHub: `https://github.com/AureliusIvan`

---

## 5. After you submit — consistency checklist

The corroboration signal that makes Google trust an entity is **the same name, URL, and description appearing identically across independent profiles.** Inconsistency (e.g., "AI Training Indonesia" on one, "aitraining.id" on another) splits the entity and weakens it.

- [ ] **Name** is byte-for-byte identical everywhere: `aitraining.id` (org) / `Aurelius Ivan Wijaya` (person). No "Jakarta", no taglines appended.
- [ ] **Primary URLs** identical and `https://` (no trailing-slash mismatch): `https://aitraining.id`, `https://aurelivan.com`.
- [ ] **`sameAs` set** (site, LinkedIn, GitHub, business site) appears on: the website's schema.org markup, Wikidata, GBP, LinkedIn, GitHub bio.
- [ ] **Add Person + Organization JSON-LD `schema.org` markup** on the website that points `sameAs` to the Wikidata item URLs once they're live — this is what links your site to the new entities. (Verify the site already emits this; if not, that's the single highest-leverage follow-up.)
- [ ] On `aurelivan.com` and `aitraining.id`, cross-link: person page → business, business "about/founder" → person.
- [ ] Wikidata person ↔ org cross-link saved (P112 founder; optional P108/P1830 reverse).
- [ ] GBP **verified** (status shows "Verified", not "Pending").
- [ ] Once Wikidata items have Q-ids, paste those Q-id URLs into the site's `sameAs` and into each other's `described at URL`.
- [ ] **Strengthen notability over time** (raises survival odds + KG confidence): add any real press, conference speaker listings, the Cursor Ambassador directory entry, ORCID/VIAF/ISNI, or a LinkedIn company page for the org — each becomes a new reference/`sameAs`.

---

### Sources (for property/category verification only — no facts about Ivan came from these)
- [GitHub username (P2037) — Wikidata](https://www.wikidata.org/wiki/Property:P2037)
- [LinkedIn personal profile ID (P6634) — Wikidata](https://www.wikidata.org/wiki/Property:P6634)
- [LinkedIn company/organization ID (P4264) — Wikidata](https://www.wikidata.org/wiki/Property:P4264)
- [Google Business Profile categories — manage your category](https://support.google.com/business/answer/7249669)
- [Google Business Profile categories (2026 complete list reference)](https://localdominator.co/google-business-profile-categories/)

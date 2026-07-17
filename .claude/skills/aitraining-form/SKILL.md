---
name: aitraining-form
description: >-
  Build and manage cloud-controlled (Google Sheets-driven) pre-training
  assessment/screening forms on aitraining.id. Use when asked to add or
  change assessment questions, generate a new client's assessment link,
  create a similar Sheets-backed form elsewhere on the site, or troubleshoot
  the /assessment/[token] flow (submission, review screen, edit-after-submit,
  local draft persistence). Covers the Questions/Submissions/Links tab
  schema, the service-account-only backend access pattern, opaque per-client
  tokens, and deploy/tooling gotchas specific to this repo and Vercel team.
---

# aitraining.id Assessment Form

A pre-training participant assessment, published at `aitraining.id/assessment/<token>`,
whose entire schema (questions) and data (submissions) live in one Google Sheet — so a
new inquiry gets a working form without a code change or redeploy.

## Live artifacts

- **Sheet**: "AI Training - Assessment Form (aitraining.id)" —
  `1pizE6usUYvamOWK_c0uFCgfPhOEFyvLnwG7Tqsw4F_8`, in the training Drive parent folder.
- **Service account**: `aitraining-assessment-form@hermes-fedora.iam.gserviceaccount.com`
  (GCP project `hermes-fedora`), shared as **Editor on only this one Sheet** — least
  privilege, no other Drive access.
- **Code**: `src/lib/assessment-sheets.ts`, `src/app/assessment/[token]/{page.tsx,AssessmentForm.tsx}`,
  `src/app/api/assessment/submit/route.ts`.
- **Env vars** (`.env.local`, gitignored, and set on Vercel Production + Preview):
  `GOOGLE_SHEETS_SA_EMAIL`, `GOOGLE_SHEETS_SA_PRIVATE_KEY`, `ASSESSMENT_SHEET_ID`.

## Sheet structure

### `Questions` tab
`id | section | question | type | options | required | order`
- `type` ∈ `short_text | long_text | single_choice | multi_choice | rating`
- `options` — pipe-separated (`ChatGPT|Claude|...`), blank for text types
- `required` — literal string `TRUE`/`FALSE`
- Edit a row → live on the next page load, no redeploy (`getQuestions()` fetches
  fresh every request; the route has `dynamic = "force-dynamic"`).
- One universal question set for every client link as of 2026-07-17 (not
  per-client). If per-client variation is ever needed, add a `client_slug`
  filter column and adjust `getQuestions()` to accept a slug.

### `Submissions` tab
`timestamp | client_slug | q1 | q2 | ... | qN | submission_id`
- One row per participant, appended by `appendSubmission` / overwritten in
  place by `updateSubmission`. Both build the row by mapping over the
  **current** header row by name (`headers.map(h => ...)`), not a hardcoded
  order.
- **Safe**: adding a new column at the end.
- **Not safe**: renaming or reordering existing header cells — a rename/reorder
  changes what future writes mean for that column position, but the *values*
  already sitting in old rows don't move, so historical rows silently
  misread under the new header. Always extend, never rename/reorder.

### `Links` tab
`token | client_slug | label | active | created_at`
- `token` — opaque random hex, never a guessable name (see below).
- `active` — flip to `FALSE` to kill a link without touching its submission
  history (submissions are tied to `client_slug`, not the token).
- `resolveToken()` is the *only* place a token becomes a real client identity.
  It's called fresh, server-side, on every page load **and independently
  again on every submit** — never trust a client-supplied identity.

## Add a new client link

```bash
openssl rand -hex 12   # 96 bits — unguessable
```

Append a row to `Links`: `token=<generated>`, `client_slug=<slug>`,
`label=<display name for the "Untuk peserta training AI di ..." line>`,
`active=TRUE`, `created_at=<today>`. Hand out `aitraining.id/assessment/<token>`.

## Security model — don't casually simplify these away

1. **Backend-only Sheets access.** `assessment-sheets.ts` has no `"use client"`
   and is only imported by the Server Component (`page.tsx`) and the API
   route. The one Client Component (`AssessmentForm.tsx`) only ever calls
   `/api/assessment/submit` — it never sees the Sheet ID or credentials.
   Verified empirically by downloading the deployed JS chunks + page HTML and
   grepping for the sheet ID, service-account email, private key, and
   `googleapis` — zero matches. Re-run that check after any structural change
   to this route:
   ```bash
   curl -s https://aitraining.id/assessment/<token> -o page.html
   grep -oE '/_next/static/chunks/[a-zA-Z0-9_.\-]+\.js' page.html | sort -u \
     | xargs -I{} curl -s "https://aitraining.id{}" -o "chunk-{}.js"
   grep -l "PRIVATE KEY\|googleapis\|<sheet-id>\|<sa-email>" *.js page.html \
     || echo "clean"
   ```
2. **Opaque per-client tokens, not names.** `/assessment/bukalapak` would be
   guessable/enumerable and would leak "Bukalapak is a client" to anyone who
   tried it. Unknown/inactive tokens 404 identically to a nonexistent route —
   no oracle distinguishes "wrong token" from "no such page."
3. **Server re-resolves identity on submit**, never trusts client-supplied
   `client_slug`/token pairing — the POST body's `token` is looked up fresh
   against `Links` inside the API route.
4. **`RAW` value input, never `USER_ENTERED`**, on every Sheets write — a
   submitted answer starting with `=` must never be evaluated as a formula
   (Sheets/CSV formula-injection).
5. **Honeypot field** (`website`, visually hidden, `tabIndex={-1}`) — a
   filled honeypot returns `{ok:true}` without writing a row.

## UX pattern (Typeform-style, not a Tally-style single scroll)

- One question per screen, `max-w-3xl`, large type, light mode (white bg,
  amber-500 accent, `logo.png` — not `logo-ondark.png`, that's for the dark
  site nav).
- Progress bar + step counter at top; `animate-fade-in-up` (existing global
  class in `globals.css`, no new dependency) keyed by `step` drives the
  transition.
- `single_choice`/`rating` auto-advance ~250ms after picking; `multi_choice`
  needs an explicit "Lanjut" click. Enter submits the native `<form>` for
  `short_text`; `long_text` needs a manual `onKeyDown` handler (textareas
  don't submit on bare Enter, Shift+Enter still makes a newline).
- **Review screen before submit** (`step === total`, one past the last real
  question). The last question no longer auto-submits — it just advances to
  review like any other step. Only the review screen's own button (or Enter
  while it has focus) actually posts. Each row has an inline "Ubah"
  jump-back-to-edit link.
- **Edit after submit**: every submission gets a `submission_id`
  (`randomUUID()`, new last column). Re-submitting with the same id calls
  `updateSubmission` (overwrites the row via `values.update`, not append); an
  unknown/stale id falls back to `appendSubmission`. The done screen offers
  "Edit jawaban" (jump back to review, already in memory) and "Isi sebagai
  peserta baru" (full reset — for a second person on a shared device).
- **localStorage draft persistence**, keyed `assessment:<token>:draft`
  (`{step, answers}`, mirrored on every change) and
  `assessment:<token>:submissionId`. Restored via a `useEffect` on mount —
  **not** a `useState` lazy initializer, because reading `localStorage`
  during the very first render would mismatch the server-rendered HTML
  (hydration error). A `hydrated` boolean gates the real UI behind a brief
  "Memuat..." to avoid a flash of the wrong state.

## Gotchas hit building this (save yourself the rediscovery)

- **`vercel env add <NAME> <target>` piped via stdin can silently "succeed"
  with an empty value** if the piped variable was actually empty (e.g. wrong
  `cwd`, so a `grep` found nothing upstream) — no error is shown. Always
  `vercel env ls` afterward to confirm the value actually landed.
- **This Bash tool's cwd can silently reset** between calls in this
  environment (observed once right after a `pkill`). Don't chain long
  sequences assuming a `cd` from three tool calls ago is still in effect —
  re-`cd /full/path &&` before anything that touches Vercel or git if in
  doubt.
- **`git push` can silently NOT trigger a Vercel deployment.** This team's
  Hobby plan shares a deploy cap across every project under `websites/`, and
  a blocked deploy fails silently — push succeeds, no new deployment
  appears, nothing errors anywhere obvious. Confirm with
  `vercel ls aitraining-id` that a deployment actually exists for the new
  commit; if not, force one directly: `vercel deploy --prod --yes`
  (bypasses the Git integration, deploys the current working tree).
- **`pnpm lint` (Biome) crashes in this sandbox** — "Linter process
  terminated abnormally (possibly out of memory)" even on `--version`,
  unrelated to any specific file. Use `npx tsc --noEmit -p tsconfig.json`
  for correctness checking instead. `rm -rf .next` first if a dynamic route
  folder was just renamed — the generated route-validator types still
  reference the old path and fail tsc until cleared.
- **Google service-account private keys**: `jq -r '.private_key' key.json`
  converts the JSON-escaped `\n` into real newlines — write that directly
  into a quoted multi-line `.env.local` entry (Next.js's dotenv parsing
  handles it). Defensively still `.replace(/\\n/g, "\n")` in code, since some
  deployment UIs store the literal two-character `\n` instead of a real
  newline.

## House rules that apply here (inherited, not new)

Every new user-facing copy string (question text, button labels, banners)
needs an `anti-ai-slop-police` pass before shipping — this form has cleared
several rounds already, but any *new* addition needs its own pass. It's fine
for `Links.client_slug`/`label` values to name real clients inside the Sheet
(operational data); never put a client name in this form's own shipped copy,
schema comments, or commit messages beyond what's already there.

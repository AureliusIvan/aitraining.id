import { google } from "googleapis";

export type QuestionType =
  | "short_text"
  | "long_text"
  | "single_choice"
  | "multi_choice"
  | "rating";

export type Question = {
  id: string;
  section: string;
  question: string;
  type: QuestionType;
  options: string[];
  required: boolean;
  order: number;
};

const SHEET_ID = process.env.ASSESSMENT_SHEET_ID;

function getSheetsClient() {
  const email = process.env.GOOGLE_SHEETS_SA_EMAIL;
  const key = process.env.GOOGLE_SHEETS_SA_PRIVATE_KEY;
  if (!email || !key || !SHEET_ID) {
    throw new Error(
      "Assessment Sheets env vars are not configured (GOOGLE_SHEETS_SA_EMAIL / GOOGLE_SHEETS_SA_PRIVATE_KEY / ASSESSMENT_SHEET_ID)",
    );
  }
  const auth = new google.auth.JWT({
    email,
    key: key.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  return google.sheets({ version: "v4", auth });
}

// Questions tab drives what renders on the live form — edit rows there (id,
// section, question, type, options, required, order) and this reads it fresh
// on every request, no redeploy needed.
export async function getQuestions(): Promise<Question[]> {
  const sheets = getSheetsClient();
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SHEET_ID,
    range: "Questions!A2:G",
  });
  const rows = res.data.values ?? [];
  return rows
    .filter((r) => r[0])
    .map((r) => ({
      id: String(r[0]),
      section: String(r[1] ?? ""),
      question: String(r[2] ?? ""),
      type: (r[3] || "short_text") as QuestionType,
      options: r[4]
        ? String(r[4])
            .split("|")
            .map((o) => o.trim())
            .filter(Boolean)
        : [],
      required: String(r[5] ?? "").toUpperCase() === "TRUE",
      order: Number(r[6]) || 0,
    }))
    .sort((a, b) => a.order - b.order);
}

export type ResolvedLink = {
  clientSlug: string;
  label: string;
};

// The URL segment is an opaque random token, never a guessable client name.
// This is the only place a token is turned into a real client identity — the
// page and the submit API both call it fresh server-side, so a client can
// never claim to be a different client by sending a different value.
export async function resolveToken(
  token: string,
): Promise<ResolvedLink | null> {
  if (!token || !/^[a-zA-Z0-9_-]+$/.test(token)) return null;

  const sheets = getSheetsClient();
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SHEET_ID,
    range: "Links!A2:E",
  });
  const rows = res.data.values ?? [];
  const match = rows.find(
    (r) => r[0] === token && String(r[3] ?? "").toUpperCase() === "TRUE",
  );
  if (!match) return null;

  return {
    clientSlug: String(match[1] ?? ""),
    label: String(match[2] ?? ""),
  };
}

// Aligns to whatever the Submissions header row currently says (not to
// Questions order), so a manual header edit doesn't silently misalign columns.
export async function appendSubmission(
  clientSlug: string,
  answers: Record<string, string>,
): Promise<void> {
  const sheets = getSheetsClient();
  const headerRes = await sheets.spreadsheets.values.get({
    spreadsheetId: SHEET_ID,
    range: "Submissions!1:1",
  });
  const headers = (headerRes.data.values?.[0] ?? [
    "timestamp",
    "client_slug",
  ]) as string[];

  const row = headers.map((h) => {
    if (h === "timestamp") return new Date().toISOString();
    if (h === "client_slug") return clientSlug;
    return answers[h] ?? "";
  });

  await sheets.spreadsheets.values.append({
    spreadsheetId: SHEET_ID,
    range: "Submissions!A1",
    // RAW, not USER_ENTERED: a submitted answer starting with "=" must never
    // be evaluated as a formula (Sheets/CSV formula-injection risk).
    valueInputOption: "RAW",
    insertDataOption: "INSERT_ROWS",
    requestBody: { values: [row] },
  });
}

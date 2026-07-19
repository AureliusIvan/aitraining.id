import { randomUUID } from "node:crypto";
import { put } from "@vercel/blob";
import { google } from "googleapis";
import {
  EXT_TO_MIME,
  MAX_UPLOAD_BYTES,
  type FileAnswer,
  type Question,
  type QuestionType,
} from "@/lib/assessment-form-shared";

export type {
  FileAnswer,
  Question,
  QuestionType,
} from "@/lib/assessment-form-shared";
export {
  MAX_UPLOAD_BYTES,
  acceptAttrFor,
  allowedExtensionsFor,
  parseFileAnswer,
  serializeFileAnswer,
} from "@/lib/assessment-form-shared";

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

function extensionOf(filename: string): string {
  const base = filename.split(/[/\\]/).pop() ?? filename;
  const dot = base.lastIndexOf(".");
  if (dot <= 0) return "";
  return base.slice(dot + 1).toLowerCase();
}

function sanitizeFilename(name: string): string {
  const base = name.split(/[/\\]/).pop() ?? "upload";
  const cleaned = base.replace(/[^\w.\- ()[\]]+/g, "_").slice(0, 120);
  return cleaned || "upload";
}

export type UploadAssessmentFileInput = {
  clientSlug: string;
  questionId: string;
  filename: string;
  bytes: Buffer;
  /** From Questions.options allowlist (already validated against the question). */
  allowedExtensions: string[];
};

export type UploadAssessmentFileResult = FileAnswer;

// Files go to Vercel Blob (not Google Drive): personal-Drive folders shared
// with a service account hit "Service Accounts do not have storage quota."
// Blob URLs are public-read and stored in the Submissions cell as JSON.
export async function uploadAssessmentFile(
  input: UploadAssessmentFileInput,
): Promise<UploadAssessmentFileResult> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    throw new Error("BLOB_READ_WRITE_TOKEN is not configured");
  }
  if (input.bytes.byteLength === 0) {
    throw new Error("empty file");
  }
  if (input.bytes.byteLength > MAX_UPLOAD_BYTES) {
    throw new Error("file too large");
  }

  const ext = extensionOf(input.filename);
  if (!ext || !input.allowedExtensions.includes(ext)) {
    throw new Error("file type not allowed");
  }
  const contentType = EXT_TO_MIME[ext];
  const safeSlug =
    input.clientSlug.replace(/[^\w\-]+/g, "_").slice(0, 64) || "unknown";
  const safeName = sanitizeFilename(input.filename);
  const pathname = `assessment/${safeSlug}/${input.questionId}/${Date.now()}-${safeName}`;

  const blob = await put(pathname, input.bytes, {
    access: "public",
    contentType,
    token: process.env.BLOB_READ_WRITE_TOKEN,
    addRandomSuffix: true,
  });

  return {
    name: safeName,
    url: blob.url,
  };
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

function columnLetter(n: number): string {
  let s = "";
  let num = n;
  while (num > 0) {
    const rem = (num - 1) % 26;
    s = String.fromCharCode(65 + rem) + s;
    num = Math.floor((num - 1) / 26);
  }
  return s;
}

async function getSubmissionsGrid(
  sheets: ReturnType<typeof getSheetsClient>,
): Promise<{ headers: string[]; rows: string[][] }> {
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SHEET_ID,
    range: "Submissions!A:Z",
  });
  const values = (res.data.values ?? []) as string[][];
  return { headers: values[0] ?? [], rows: values.slice(1) };
}

function buildRow(
  headers: string[],
  clientSlug: string,
  submissionId: string,
  answers: Record<string, string>,
): string[] {
  return headers.map((h) => {
    if (h === "timestamp") return new Date().toISOString();
    if (h === "client_slug") return clientSlug;
    if (h === "submission_id") return submissionId;
    return answers[h] ?? "";
  });
}

// Aligns to whatever the Submissions header row currently says (not to
// Questions order), so a manual header edit doesn't silently misalign
// columns. Returns the generated submission_id so the caller can persist it
// client-side and pass it back on a future edit.
export async function appendSubmission(
  clientSlug: string,
  answers: Record<string, string>,
): Promise<string> {
  const sheets = getSheetsClient();
  const { headers } = await getSubmissionsGrid(sheets);
  const submissionId = randomUUID();
  const row = buildRow(headers, clientSlug, submissionId, answers);

  await sheets.spreadsheets.values.append({
    spreadsheetId: SHEET_ID,
    range: "Submissions!A1",
    // RAW, not USER_ENTERED: a submitted answer starting with "=" must never
    // be evaluated as a formula (Sheets/CSV formula-injection risk).
    valueInputOption: "RAW",
    insertDataOption: "INSERT_ROWS",
    requestBody: { values: [row] },
  });

  return submissionId;
}

// Overwrites an existing row in place (found by submission_id, cross-checked
// against client_slug) instead of appending a new one — an edited response
// replaces the original rather than creating a duplicate. Returns false if
// the id no longer resolves to a row (e.g. manually deleted from the Sheet),
// so the caller can fall back to creating a fresh submission.
export async function updateSubmission(
  submissionId: string,
  clientSlug: string,
  answers: Record<string, string>,
): Promise<boolean> {
  const sheets = getSheetsClient();
  const { headers, rows } = await getSubmissionsGrid(sheets);
  const idCol = headers.indexOf("submission_id");
  const slugCol = headers.indexOf("client_slug");
  if (idCol === -1) return false;

  const rowIndex = rows.findIndex(
    (r) =>
      r[idCol] === submissionId &&
      (slugCol === -1 || r[slugCol] === clientSlug),
  );
  if (rowIndex === -1) return false;

  const sheetRowNumber = rowIndex + 2; // +1 for the header row, +1 to 1-index
  const row = buildRow(headers, clientSlug, submissionId, answers);

  await sheets.spreadsheets.values.update({
    spreadsheetId: SHEET_ID,
    range: `Submissions!A${sheetRowNumber}:${columnLetter(headers.length)}${sheetRowNumber}`,
    valueInputOption: "RAW",
    requestBody: { values: [row] },
  });

  return true;
}

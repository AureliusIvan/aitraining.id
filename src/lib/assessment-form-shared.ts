export type QuestionType =
  | "short_text"
  | "long_text"
  | "single_choice"
  | "multi_choice"
  | "rating"
  | "file";

export type Question = {
  id: string;
  section: string;
  question: string;
  type: QuestionType;
  options: string[];
  required: boolean;
  order: number;
};

/** Stored in the Submissions cell for type=file questions. */
export type FileAnswer = {
  name: string;
  url: string;
};

export const MAX_UPLOAD_BYTES = 4 * 1024 * 1024; // under Vercel ~4.5 MB body limit

const DEFAULT_FILE_EXTENSIONS = [
  "pdf",
  "png",
  "jpg",
  "jpeg",
  "webp",
  "gif",
  "docx",
];

export const EXT_TO_MIME: Record<string, string> = {
  pdf: "application/pdf",
  png: "image/png",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  webp: "image/webp",
  gif: "image/gif",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
};

export function serializeFileAnswer(answer: FileAnswer): string {
  return JSON.stringify(answer);
}

export function parseFileAnswer(raw: string | undefined | null): FileAnswer | null {
  if (!raw?.trim()) return null;
  try {
    const parsed = JSON.parse(raw) as { name?: unknown; url?: unknown };
    if (
      typeof parsed?.name === "string" &&
      typeof parsed?.url === "string" &&
      parsed.url.startsWith("http")
    ) {
      return { name: parsed.name, url: parsed.url };
    }
  } catch {
    // bare URL from an older draft — treat as a file without a display name
  }
  if (raw.startsWith("http")) return { name: "File", url: raw };
  return null;
}

/** Extensions allowed for a file question (from options, or the safe default). */
export function allowedExtensionsFor(question: Question): string[] {
  if (question.type !== "file") return [];
  const fromOptions = question.options
    .map((o) => o.trim().toLowerCase().replace(/^\./, ""))
    .filter((o) => o && EXT_TO_MIME[o]);
  return fromOptions.length > 0 ? fromOptions : DEFAULT_FILE_EXTENSIONS;
}

export function acceptAttrFor(question: Question): string {
  return allowedExtensionsFor(question)
    .map((ext) => `.${ext}`)
    .join(",");
}

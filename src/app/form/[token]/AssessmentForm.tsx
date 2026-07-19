"use client";

import Image from "next/image";
import {
  type FormEvent,
  type KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  acceptAttrFor,
  allowedExtensionsFor,
  MAX_UPLOAD_BYTES,
  parseFileAnswer,
  type Question,
} from "@/lib/assessment-form-shared";
import { FORM_UPLOAD_RETENTION_DAYS } from "@/lib/form-upload-constants";

const AUTO_ADVANCE_DELAY_MS = 250;

function formatMaxUpload(): string {
  return `${Math.round(MAX_UPLOAD_BYTES / (1024 * 1024))} MB`;
}

function fileAnswerLabel(raw: string | undefined): string {
  const parsed = parseFileAnswer(raw);
  if (!parsed) return "";
  return parsed.name || "File terunggah";
}

function safeGetItem(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeSetItem(key: string, value: string): void {
  try {
    localStorage.setItem(key, value);
  } catch {
    // private browsing / storage full / disabled — draft persistence is a
    // convenience, not a hard requirement, so fail silently
  }
}

function safeRemoveItem(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch {
    // see safeSetItem
  }
}

export function AssessmentForm({
  token,
  questions,
  clientLabel,
}: {
  token: string;
  questions: Question[];
  clientLabel?: string;
}) {
  const draftKey = `assessment:${token}:draft`;
  const submissionIdKey = `assessment:${token}:submissionId`;

  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [step, setStep] = useState(0);
  const [submissionId, setSubmissionId] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "done" | "error"
  >("idle");
  const [uploadStatus, setUploadStatus] = useState<
    "idle" | "uploading" | "error"
  >("idle");

  // Answers are read from this ref at submit time, not the `answers` state —
  // the single_choice auto-advance path can fire before a delayed render has
  // caught up, and a stale closure would drop the last answer.
  const answersRef = useRef<Record<string, string>>({});
  const honeypotRef = useRef<HTMLInputElement>(null);
  const textInputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const total = questions.length;
  // step === total is the review screen — one past the last real question,
  // never auto-submitted into. Only the review screen's own button submits.
  const isReview = step === total;
  const current = questions[step];

  // Restore from localStorage on mount. Deferred to an effect (not a useState
  // lazy initializer) so the very first client render matches the
  // server-rendered HTML exactly — reading localStorage during the initial
  // render would produce a hydration mismatch.
  useEffect(() => {
    const draftRaw = safeGetItem(draftKey);
    if (draftRaw) {
      try {
        const parsed = JSON.parse(draftRaw) as {
          step?: number;
          answers?: Record<string, string>;
        };
        const restored = parsed.answers ?? {};
        answersRef.current = restored;
        setAnswers(restored);
        setStep(Math.min(Math.max(Number(parsed.step) || 0, 0), total));
      } catch {
        // corrupt entry — ignore, start fresh
      }
    }
    const savedSubmissionId = safeGetItem(submissionIdKey);
    if (savedSubmissionId) setSubmissionId(savedSubmissionId);
    setHydrated(true);
    // Restoring is keyed to this form instance (token/total are fixed props)
    // — intentionally runs once on mount, not on every draftKey change.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keep the draft mirrored to localStorage continuously, so a refresh mid
  // -fill (or mid-edit of an already-submitted response) never loses work.
  useEffect(() => {
    if (!hydrated) return;
    safeSetItem(draftKey, JSON.stringify({ step, answers }));
  }, [step, answers, hydrated, draftKey]);

  function setAnswer(id: string, value: string) {
    answersRef.current = { ...answersRef.current, [id]: value };
    setAnswers(answersRef.current);
  }

  function toggleMultiChoice(id: string, option: string) {
    const selectedValues = answersRef.current[id]
      ? answersRef.current[id].split("|")
      : [];
    const next = selectedValues.includes(option)
      ? selectedValues.filter((o) => o !== option)
      : [...selectedValues, option];
    setAnswer(id, next.join("|"));
  }

  function validateCurrent(): boolean {
    const value = answersRef.current[current.id];
    if (current.required && !value?.trim()) {
      setErrorMsg("Jawaban ini wajib diisi.");
      return false;
    }
    setErrorMsg(null);
    return true;
  }

  // Always just advances one step — the last question lands on the review
  // screen like any other, it never submits directly.
  function goNext() {
    if (!validateCurrent()) return;
    setUploadStatus("idle");
    setStep((s) => s + 1);
  }

  function goBack() {
    setErrorMsg(null);
    setUploadStatus("idle");
    setStep((s) => Math.max(0, s - 1));
  }

  // Clears this device's saved draft/submission and resets to a blank form —
  // for when a second person picks up the same shared link on the same
  // browser and shouldn't silently overwrite the first person's answers.
  function startFresh() {
    safeRemoveItem(draftKey);
    safeRemoveItem(submissionIdKey);
    answersRef.current = {};
    setAnswers({});
    setSubmissionId(null);
    setErrorMsg(null);
    setStatus("idle");
    setUploadStatus("idle");
    setStep(0);
  }

  async function submit() {
    setStatus("submitting");
    try {
      const res = await fetch("/api/form/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token,
          answers: answersRef.current,
          website: honeypotRef.current?.value ?? "",
          submissionId,
        }),
      });
      const data = (await res.json().catch(() => null)) as {
        submissionId?: string;
        error?: string;
        retryAfterSec?: number;
      } | null;
      if (!res.ok) {
        if (res.status === 429) {
          const wait = data?.retryAfterSec ?? 60;
          setStatus("error");
          setErrorMsg(
            `Terlalu banyak percobaan kirim. Coba lagi dalam ${wait} detik.`,
          );
          return;
        }
        throw new Error("submit failed");
      }
      if (data?.submissionId) {
        setSubmissionId(data.submissionId);
        safeSetItem(submissionIdKey, data.submissionId);
      }
      setStatus("done");
    } catch {
      setStatus("error");
      setErrorMsg("Terjadi kesalahan mengirim jawaban. Coba lagi.");
    }
  }

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isReview) {
      submit();
    } else {
      goNext();
    }
  }

  function handleTextareaKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      goNext();
    }
  }

  function selectSingleChoice(opt: string) {
    setAnswer(current.id, opt);
    setErrorMsg(null);
    window.setTimeout(goNext, AUTO_ADVANCE_DELAY_MS);
  }

  async function handleFilePicked(fileList: FileList | null) {
    const file = fileList?.[0];
    if (!file || !current || current.type !== "file") return;

    const allowed = allowedExtensionsFor(current);
    const ext = file.name.includes(".")
      ? file.name.slice(file.name.lastIndexOf(".") + 1).toLowerCase()
      : "";
    if (!ext || !allowed.includes(ext)) {
      setUploadStatus("error");
      setErrorMsg(
        `Tipe file tidak didukung. Unggah: ${allowed.map((e) => `.${e}`).join(", ")}.`,
      );
      return;
    }
    if (file.size > MAX_UPLOAD_BYTES) {
      setUploadStatus("error");
      setErrorMsg(`Ukuran file maksimal ${formatMaxUpload()}.`);
      return;
    }

    setUploadStatus("uploading");
    setErrorMsg(null);
    try {
      const body = new FormData();
      body.set("token", token);
      body.set("questionId", current.id);
      body.set("file", file);
      body.set("website", honeypotRef.current?.value ?? "");
      const res = await fetch("/api/form/upload", {
        method: "POST",
        body,
      });
      const data = (await res.json().catch(() => null)) as {
        answer?: string;
        error?: string;
        retryAfterSec?: number;
      } | null;
      if (!res.ok) {
        if (res.status === 429) {
          const wait = data?.retryAfterSec ?? 60;
          throw new Error(`rate limit:${wait}`);
        }
        throw new Error(data?.error || "upload failed");
      }
      if (!data?.answer) throw new Error("upload failed");
      setAnswer(current.id, data.answer);
      setUploadStatus("idle");
    } catch (err) {
      setUploadStatus("error");
      const msg = err instanceof Error ? err.message : "";
      if (msg.startsWith("rate limit:")) {
        const wait = msg.slice("rate limit:".length) || "60";
        setErrorMsg(
          `Terlalu banyak unggahan. Coba lagi dalam ${wait} detik.`,
        );
      } else if (msg === "file type not allowed") {
        setErrorMsg(
          `Tipe file tidak didukung. Unggah: ${allowed.map((e) => `.${e}`).join(", ")}.`,
        );
      } else if (msg === "file too large") {
        setErrorMsg(`Ukuran file maksimal ${formatMaxUpload()}.`);
      } else {
        setErrorMsg("Gagal mengunggah file. Coba lagi.");
      }
    } finally {
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  }

  function clearFileAnswer() {
    if (!current) return;
    setAnswer(current.id, "");
    setUploadStatus("idle");
    setErrorMsg(null);
  }

  useEffect(() => {
    if (isReview || current?.type === "file") return;
    textInputRef.current?.focus();
  }, [step, isReview, current?.type]);

  if (!hydrated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-neutral-400">Memuat...</p>
      </div>
    );
  }

  if (status === "done") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 text-center">
        <Image
          src="/assets/brand/logo.png"
          alt="AI Training Indonesia"
          width={220}
          height={39}
          className="h-9 w-auto mb-12"
        />
        <p className="text-4xl sm:text-5xl font-semibold mb-4">
          Terima kasih!
        </p>
        <p className="text-neutral-500 text-lg mb-8">
          Jawaban Anda sudah kami terima. Sampai jumpa di sesi training. Anda
          bisa kembali ke halaman ini kapan saja untuk mengedit jawaban.
        </p>
        <div className="flex items-center gap-6">
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="text-amber-600 font-medium hover:underline"
          >
            Edit jawaban
          </button>
          <button
            type="button"
            onClick={startFresh}
            className="text-neutral-400 hover:text-neutral-600 text-sm"
          >
            Isi sebagai peserta baru
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="h-1 bg-neutral-100">
        <div
          className="h-full bg-amber-500 transition-all duration-300 ease-out"
          style={{ width: `${(step / total) * 100}%` }}
        />
      </div>

      <div className="flex items-center justify-between px-6 sm:px-10 py-6">
        <Image
          src="/assets/brand/logo.png"
          alt="AI Training Indonesia"
          width={180}
          height={32}
          priority
          className="h-7 w-auto"
        />
        <span className="text-neutral-400 text-sm font-medium">
          {isReview ? "Review" : `${step + 1} / ${total}`}
        </span>
      </div>

      <form
        onSubmit={handleFormSubmit}
        className="flex-1 flex flex-col justify-center px-6 sm:px-10 py-10"
      >
        <input
          ref={honeypotRef}
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        <div key={step} className="w-full max-w-3xl mx-auto animate-fade-in-up">
          {isReview ? (
            <>
              <p className="text-sm uppercase tracking-wide text-neutral-400 font-semibold mb-3">
                Terakhir
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-4">
                Review jawaban Anda
              </h1>
              <p className="text-neutral-500 mb-4">
                Cek lagi sebelum dikirim. Klik &quot;Ubah&quot; untuk mengedit
                jawaban.
              </p>
              {submissionId && (
                <div className="mb-6 rounded-lg bg-amber-50 border border-amber-200 px-4 py-3 text-sm text-amber-800">
                  Kami menemukan jawaban tersimpan di perangkat ini
                  {answers.q1 ? ` atas nama ${answers.q1}` : ""}.{" "}
                  <button
                    type="button"
                    onClick={startFresh}
                    className="underline font-medium"
                  >
                    Bukan Anda? Isi sebagai peserta baru
                  </button>
                </div>
              )}
              <div className="space-y-4 mb-4">
                {questions.map((q, idx) => {
                  const raw = answers[q.id];
                  const fileMeta =
                    q.type === "file" ? parseFileAnswer(raw) : null;
                  const display =
                    q.type === "multi_choice"
                      ? raw?.split("|").join(", ")
                      : q.type === "file"
                        ? fileAnswerLabel(raw)
                        : raw;
                  return (
                    <div
                      key={q.id}
                      className="flex items-start justify-between gap-4 border-b border-neutral-100 pb-4"
                    >
                      <div>
                        <p className="text-sm text-neutral-400 mb-1">
                          {q.question}
                        </p>
                        {fileMeta ? (
                          <a
                            href={fileMeta.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg font-medium text-amber-700 hover:underline"
                          >
                            {fileMeta.name}
                          </a>
                        ) : (
                          <p className="text-lg font-medium">
                            {display || (
                              <span className="text-neutral-300 italic">
                                Tidak dijawab
                              </span>
                            )}
                          </p>
                        )}
                      </div>
                      <button
                        type="button"
                        onClick={() => setStep(idx)}
                        className="text-amber-600 text-sm font-medium hover:underline shrink-0"
                      >
                        Ubah
                      </button>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <>
              {clientLabel && step === 0 && (
                <p className="text-amber-600 font-medium text-sm sm:text-base mb-3">
                  Untuk peserta training AI di {clientLabel}
                </p>
              )}
              <p className="text-sm uppercase tracking-wide text-neutral-400 font-semibold mb-3">
                {current.section}
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-10">
                <span className="text-amber-500">{step + 1} → </span>
                {current.question}
                {current.required && (
                  <span className="text-amber-500">*</span>
                )}
              </h1>

              {current.type === "short_text" && (
                <input
                  ref={textInputRef as React.RefObject<HTMLInputElement>}
                  type="text"
                  value={answers[current.id] ?? ""}
                  onChange={(e) => setAnswer(current.id, e.target.value)}
                  className="w-full border-b-2 border-neutral-200 focus:border-amber-500 outline-none text-xl sm:text-2xl py-3 bg-transparent transition-colors"
                  placeholder="Ketik jawaban Anda di sini..."
                />
              )}

              {current.type === "long_text" && (
                <textarea
                  ref={textInputRef as React.RefObject<HTMLTextAreaElement>}
                  value={answers[current.id] ?? ""}
                  onChange={(e) => setAnswer(current.id, e.target.value)}
                  onKeyDown={handleTextareaKeyDown}
                  rows={4}
                  className="w-full border-b-2 border-neutral-200 focus:border-amber-500 outline-none text-xl sm:text-2xl py-3 bg-transparent transition-colors resize-none"
                  placeholder="Ketik jawaban Anda di sini..."
                />
              )}

              {(current.type === "single_choice" ||
                current.type === "rating") && (
                <div className="space-y-3">
                  {current.options.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      aria-pressed={answers[current.id] === opt}
                      onClick={() => selectSingleChoice(opt)}
                      className={`w-full text-left rounded-xl border-2 px-5 py-4 text-lg sm:text-xl transition-colors ${
                        answers[current.id] === opt
                          ? "border-amber-500 bg-amber-50"
                          : "border-neutral-200 hover:border-neutral-300"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}

              {current.type === "multi_choice" && (
                <div className="space-y-3">
                  {current.options.map((opt) => {
                    const selected = (answers[current.id] ?? "")
                      .split("|")
                      .includes(opt);
                    return (
                      <button
                        key={opt}
                        type="button"
                        aria-pressed={selected}
                        onClick={() => toggleMultiChoice(current.id, opt)}
                        className={`w-full text-left rounded-xl border-2 px-5 py-4 text-lg sm:text-xl transition-colors ${
                          selected
                            ? "border-amber-500 bg-amber-50"
                            : "border-neutral-200 hover:border-neutral-300"
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              )}

              {current.type === "file" && (
                <div className="space-y-4">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept={acceptAttrFor(current)}
                    disabled={uploadStatus === "uploading"}
                    onChange={(e) => handleFilePicked(e.target.files)}
                    className="sr-only"
                  />
                  {(() => {
                    const uploaded = parseFileAnswer(answers[current.id]);
                    if (uploaded) {
                      return (
                        <div className="rounded-xl border-2 border-amber-500 bg-amber-50 px-5 py-4">
                          <p className="text-sm text-neutral-500 mb-1">
                            File terunggah
                          </p>
                          <a
                            href={uploaded.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg sm:text-xl font-medium text-amber-800 hover:underline break-all"
                          >
                            {uploaded.name}
                          </a>
                          <div className="flex flex-wrap gap-4 mt-4">
                            <button
                              type="button"
                              onClick={() => fileInputRef.current?.click()}
                              disabled={uploadStatus === "uploading"}
                              className="text-amber-700 text-sm font-medium hover:underline disabled:opacity-50"
                            >
                              {uploadStatus === "uploading"
                                ? "Mengunggah..."
                                : "Ganti file"}
                            </button>
                            <button
                              type="button"
                              onClick={clearFileAnswer}
                              disabled={uploadStatus === "uploading"}
                              className="text-neutral-400 text-sm hover:text-neutral-600 disabled:opacity-50"
                            >
                              Hapus
                            </button>
                          </div>
                        </div>
                      );
                    }
                    return (
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        disabled={uploadStatus === "uploading"}
                        className="flex flex-col items-start gap-3 w-full text-left rounded-xl border-2 border-dashed border-neutral-300 hover:border-amber-400 px-5 py-8 transition-colors disabled:opacity-50"
                      >
                        <span className="text-lg sm:text-xl font-medium">
                          {uploadStatus === "uploading"
                            ? "Mengunggah..."
                            : "Pilih file untuk diunggah"}
                        </span>
                        <span className="text-sm text-neutral-500">
                          Maksimal {formatMaxUpload()}. Format:{" "}
                          {allowedExtensionsFor(current)
                            .map((e) => `.${e}`)
                            .join(", ")}
                          . File disimpan hingga {FORM_UPLOAD_RETENTION_DAYS}{" "}
                          hari.
                        </span>
                      </button>
                    );
                  })()}
                </div>
              )}
            </>
          )}

          {errorMsg && <p className="text-red-600 text-sm mt-4">{errorMsg}</p>}

          <div className="flex items-center gap-4 mt-10">
            {step > 0 && (
              <button
                type="button"
                onClick={goBack}
                className="text-neutral-400 hover:text-neutral-700 text-sm font-medium transition-colors"
              >
                ← Kembali
              </button>
            )}
            <button
              type="submit"
              disabled={
                status === "submitting" ||
                uploadStatus === "uploading" ||
                (!isReview &&
                  current?.type === "file" &&
                  current.required &&
                  !answers[current.id])
              }
              className="inline-flex items-center gap-2 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-semibold text-lg px-8 py-3 disabled:opacity-50 transition-colors"
            >
              {status === "submitting"
                ? "Mengirim..."
                : uploadStatus === "uploading"
                  ? "Mengunggah..."
                  : isReview
                    ? "Kirim Jawaban"
                    : "Lanjut"}
            </button>
            {current?.type !== "file" && (
              <span className="hidden sm:inline text-neutral-400 text-sm">
                tekan Enter ↵
              </span>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

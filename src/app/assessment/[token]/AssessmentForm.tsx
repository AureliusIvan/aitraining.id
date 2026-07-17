"use client";

import Image from "next/image";
import {
  type FormEvent,
  type KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import type { Question } from "@/lib/assessment-sheets";

const AUTO_ADVANCE_DELAY_MS = 250;

export function AssessmentForm({
  token,
  questions,
  clientLabel,
}: {
  token: string;
  questions: Question[];
  clientLabel?: string;
}) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [step, setStep] = useState(0);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "done" | "error"
  >("idle");

  // Answers are read from this ref at submit time, not the `answers` state —
  // the single_choice auto-advance path can fire the submit before a delayed
  // render has caught up, and a stale closure would drop the last answer.
  const answersRef = useRef<Record<string, string>>({});
  const honeypotRef = useRef<HTMLInputElement>(null);
  const textInputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  const total = questions.length;
  const current = questions[step];
  const isLast = step === total - 1;

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

  function goNext() {
    if (!validateCurrent()) return;
    if (isLast) {
      submit();
    } else {
      setStep((s) => s + 1);
    }
  }

  function goBack() {
    setErrorMsg(null);
    setStep((s) => Math.max(0, s - 1));
  }

  async function submit() {
    setStatus("submitting");
    try {
      const res = await fetch("/api/assessment/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token,
          answers: answersRef.current,
          website: honeypotRef.current?.value ?? "",
        }),
      });
      if (!res.ok) throw new Error("submit failed");
      setStatus("done");
    } catch {
      setStatus("error");
      setErrorMsg("Terjadi kesalahan mengirim jawaban. Coba lagi.");
    }
  }

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    goNext();
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

  useEffect(() => {
    textInputRef.current?.focus();
  }, [step]);

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
        <p className="text-neutral-500 text-lg">
          Jawaban Anda sudah kami terima. Sampai jumpa di sesi training.
        </p>
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
          {step + 1} / {total}
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
            {current.required && <span className="text-amber-500">*</span>}
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

          {(current.type === "single_choice" || current.type === "rating") && (
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

          {errorMsg && (
            <p className="text-red-600 text-sm mt-4">{errorMsg}</p>
          )}

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
              disabled={status === "submitting"}
              className="inline-flex items-center gap-2 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-semibold text-lg px-8 py-3 disabled:opacity-50 transition-colors"
            >
              {status === "submitting"
                ? "Mengirim..."
                : isLast
                  ? "Kirim Jawaban"
                  : "Lanjut"}
            </button>
            <span className="hidden sm:inline text-neutral-400 text-sm">
              tekan Enter ↵
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}

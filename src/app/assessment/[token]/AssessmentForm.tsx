"use client";

import { type FormEvent, useState } from "react";
import type { Question } from "@/lib/assessment-sheets";

function groupBySection(questions: Question[]): [string, Question[]][] {
  const sections = new Map<string, Question[]>();
  for (const q of questions) {
    if (!sections.has(q.section)) sections.set(q.section, []);
    sections.get(q.section)?.push(q);
  }
  return Array.from(sections.entries());
}

export function AssessmentForm({
  token,
  questions,
}: {
  token: string;
  questions: Question[];
}) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "done" | "error"
  >("idle");

  function setAnswer(id: string, value: string) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }

  function toggleMultiChoice(id: string, option: string) {
    setAnswers((prev) => {
      const current = prev[id] ? prev[id].split("|") : [];
      const next = current.includes(option)
        ? current.filter((o) => o !== option)
        : [...current, option];
      return { ...prev, [id]: next.join("|") };
    });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const missing = questions.filter(
      (q) => q.required && !answers[q.id]?.trim(),
    );
    if (missing.length > 0) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    const honeypot = new FormData(e.currentTarget).get("website");
    try {
      const res = await fetch("/api/assessment/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, answers, website: honeypot }),
      });
      if (!res.ok) throw new Error("submit failed");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="text-center">
        <p className="text-2xl font-semibold mb-2">Terima kasih!</p>
        <p className="text-white/70">
          Jawaban Anda sudah kami terima. Sampai jumpa di sesi training.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold mb-1">
          Assessment Awal Peserta
        </h1>
        <p className="text-white/60 text-sm">
          Isi sebelum sesi training dimulai, sekitar 3-5 menit.
        </p>
      </div>

      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      {groupBySection(questions).map(([section, items]) => (
        <fieldset key={section} className="space-y-6">
          <legend className="text-sm uppercase tracking-wide text-white/50 mb-4">
            {section}
          </legend>
          {items.map((q) => (
            <div key={q.id} className="space-y-2">
              <label className="block text-sm font-medium" htmlFor={q.id}>
                {q.question}
                {q.required && <span className="text-amber-400 ml-1">*</span>}
              </label>

              {q.type === "short_text" && (
                <input
                  id={q.id}
                  type="text"
                  value={answers[q.id] ?? ""}
                  onChange={(e) => setAnswer(q.id, e.target.value)}
                  className="w-full rounded-md bg-white/5 border border-white/15 px-3 py-2 text-sm focus:outline-none focus:border-amber-400"
                />
              )}

              {q.type === "long_text" && (
                <textarea
                  id={q.id}
                  value={answers[q.id] ?? ""}
                  onChange={(e) => setAnswer(q.id, e.target.value)}
                  rows={3}
                  className="w-full rounded-md bg-white/5 border border-white/15 px-3 py-2 text-sm focus:outline-none focus:border-amber-400"
                />
              )}

              {(q.type === "single_choice" || q.type === "rating") && (
                <div className="space-y-2">
                  {q.options.map((opt) => (
                    <label
                      key={opt}
                      className="flex items-center gap-2 text-sm"
                    >
                      <input
                        type="radio"
                        name={q.id}
                        value={opt}
                        checked={answers[q.id] === opt}
                        onChange={() => setAnswer(q.id, opt)}
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              )}

              {q.type === "multi_choice" && (
                <div className="space-y-2">
                  {q.options.map((opt) => (
                    <label
                      key={opt}
                      className="flex items-center gap-2 text-sm"
                    >
                      <input
                        type="checkbox"
                        checked={(answers[q.id] ?? "")
                          .split("|")
                          .includes(opt)}
                        onChange={() => toggleMultiChoice(q.id, opt)}
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              )}
            </div>
          ))}
        </fieldset>
      ))}

      {status === "error" && (
        <p className="text-red-400 text-sm">
          Ada jawaban wajib yang belum diisi, atau terjadi kesalahan. Coba
          lagi.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-md bg-amber-400 text-black font-medium py-3 hover:bg-amber-300 disabled:opacity-50"
      >
        {status === "submitting" ? "Mengirim..." : "Kirim Jawaban"}
      </button>
    </form>
  );
}

"use client";

import { useState } from "react";
import type { ModelWriting, Passage, QuoteCard } from "@/lib/types";

/** A text extract in a reading box. Verse keeps its line breaks; long texts can collapse. */
export function PassageBox({ passage, collapsible = false, compact = false }: { passage: Passage; collapsible?: boolean; compact?: boolean }) {
  const lines = passage.text.split("\n").length;
  const long = collapsible && (lines > 18 || passage.text.length > 1400);
  const [open, setOpen] = useState(!long);
  return (
    <figure className={`rounded-2xl border border-amber-200 bg-[#fffaf0] ${compact ? "p-4" : "p-5"}`}>
      <figcaption className="mb-2">
        <span className="block font-serif text-lg font-bold text-amber-950">{passage.title}</span>
        {passage.source && <span className="block text-xs font-medium italic text-amber-800/80">{passage.source}</span>}
      </figcaption>
      <div className={`relative ${open ? "" : "max-h-72 overflow-hidden"}`}>
        <blockquote className="whitespace-pre-wrap font-serif text-[15.5px] leading-relaxed text-slate-800">{passage.text}</blockquote>
        {!open && <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#fffaf0]" />}
      </div>
      {long && (
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="mt-2 min-h-10 rounded-lg px-2 text-sm font-semibold text-amber-800 underline underline-offset-4 hover:text-amber-950"
        >
          {open ? "Show less" : "Read the whole text"}
        </button>
      )}
      {passage.note && <p className="mt-3 rounded-lg bg-amber-100/60 p-3 text-sm text-amber-950">{passage.note}</p>}
    </figure>
  );
}

/** A short extract printed above a question. */
export function ExtractBox({ text }: { text: string }) {
  return (
    <blockquote className="mb-3 whitespace-pre-wrap rounded-xl border-l-4 border-amber-400 bg-[#fffaf0] px-4 py-3 font-serif text-[15px] leading-relaxed text-slate-800">
      {text}
    </blockquote>
  );
}

export function QuoteBank({ quotes }: { quotes: QuoteCard[] }) {
  const [filter, setFilter] = useState<string | null>(null);
  const themes = Array.from(new Set(quotes.flatMap((q) => q.themes ?? []))).sort();
  const shown = filter ? quotes.filter((q) => q.themes?.includes(filter)) : quotes;
  return (
    <section>
      <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-slate-900">💬 Quotation bank</h3>
      {themes.length > 1 && (
        <div className="mb-3 flex flex-wrap gap-2" role="group" aria-label="Filter quotations by theme">
          <button
            type="button"
            onClick={() => setFilter(null)}
            className={`min-h-9 rounded-full px-3 text-xs font-bold ${filter === null ? "bg-violet-600 text-white" : "bg-violet-50 text-violet-800 hover:bg-violet-100"}`}
          >
            All
          </button>
          {themes.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setFilter(filter === t ? null : t)}
              className={`min-h-9 rounded-full px-3 text-xs font-bold capitalize ${filter === t ? "bg-violet-600 text-white" : "bg-violet-50 text-violet-800 hover:bg-violet-100"}`}
            >
              {t}
            </button>
          ))}
        </div>
      )}
      <div className="grid gap-3 sm:grid-cols-2">
        {shown.map((q, i) => (
          <QuoteCardView key={i} q={q} />
        ))}
      </div>
    </section>
  );
}

function QuoteCardView({ q }: { q: QuoteCard }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col rounded-2xl border border-violet-200 bg-white p-4 shadow-sm">
      <p className="font-serif text-[16px] font-semibold leading-snug text-slate-900">“{q.quote}”</p>
      <p className="mt-1 text-xs font-semibold text-violet-700">— {q.source}</p>
      {q.themes && q.themes.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1">
          {q.themes.map((t) => (
            <span key={t} className="rounded-full bg-violet-50 px-2 py-0.5 text-[11px] font-semibold capitalize text-violet-700">{t}</span>
          ))}
        </div>
      )}
      {open ? (
        <p className="mt-3 rounded-lg bg-violet-50/70 p-3 text-sm text-slate-700">{q.analysis}</p>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="mt-3 min-h-10 self-start rounded-lg px-1 text-sm font-semibold text-violet-700 underline underline-offset-4 hover:text-violet-900"
        >
          Try analysing it first — then show the analysis
        </button>
      )}
    </div>
  );
}

export function ModelWritingList({ items }: { items: ModelWriting[] }) {
  return (
    <section>
      <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-slate-900">🏆 Model answers, annotated</h3>
      <div className="space-y-4">
        {items.map((m, i) => (
          <div key={i} className="rounded-2xl border border-emerald-200 bg-white p-5 shadow-sm">
            <p className="font-bold text-slate-900">{m.title}</p>
            <p className="mt-1 text-sm text-slate-600">
              <span className="font-semibold text-emerald-700">Task: </span>
              {m.task}
            </p>
            <div className="mt-3 whitespace-pre-wrap rounded-xl bg-emerald-50/60 p-4 font-serif text-[15px] leading-relaxed text-slate-800">{m.text}</div>
            <ul className="mt-3 space-y-1.5">
              {m.annotations.map((a, j) => (
                <li key={j} className="flex gap-2 text-sm text-slate-700">
                  <span className="text-emerald-600">✓</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

/** "Try this first": the task, with the idea revealed only after an attempt. */
export function Discovery({ problem, idea }: { problem: string; idea: string }) {
  const [shown, setShown] = useState(false);
  return (
    <div className="mb-4 rounded-xl border-2 border-dashed border-sky-300 bg-sky-50/70 p-4">
      <p className="text-xs font-bold uppercase tracking-wide text-sky-700">✋ Try this first</p>
      <p className="mt-1 whitespace-pre-wrap text-sm font-medium text-sky-950">{problem}</p>
      {shown ? (
        <p className="mt-3 rounded-lg bg-white/80 p-3 text-sm text-slate-700">
          <span className="font-bold text-sky-800">💡 The idea: </span>
          {idea}
        </p>
      ) : (
        <button
          type="button"
          onClick={() => setShown(true)}
          className="mt-3 min-h-10 rounded-lg bg-sky-600 px-3 py-1.5 text-sm font-bold text-white hover:bg-sky-700"
        >
          I&apos;ve had a go — show me the idea
        </button>
      )}
    </div>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import { SITCOMS } from "@/lib/sitcoms";
import { TOPIC_META, ACCENT, SUBJECT_LABEL, type Subject } from "@/lib/topics/_meta";
import { useStore } from "@/lib/store";

const SUBJECTS: ("All" | Subject)[] = ["All", "Shakespeare", "Poetry", "Novel", "Skills"];

export default function WatchPage() {
  const { hasAward } = useStore();
  const [filter, setFilter] = useState<"All" | Subject>("All");

  const episodes = TOPIC_META.map((meta) => ({
    meta,
    sitcom: SITCOMS[meta.id],
    watched: hasAward(`lesson:claude-sitcom-${meta.id}`),
  })).filter((x) => x.sitcom && (filter === "All" || x.meta.subject === filter));

  const watchedCount = TOPIC_META.filter((m) => hasAward(`lesson:claude-sitcom-${m.id}`)).length;

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <section className="overflow-hidden rounded-3xl border border-violet-200 bg-gradient-to-br from-violet-50 via-white to-sky-50 p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-bold text-violet-700">
            📺 Claude Sitcom · Season 1
          </span>
          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">
            ⭐ {watchedCount}/{TOPIC_META.length} completed
          </span>
        </div>
        <h1 className="mt-3 text-2xl font-extrabold text-slate-900 sm:text-3xl">
          All the School&apos;s a Stage — All 16 Episodes
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
          Sixteen narrated mockumentary episodes at Banyan Hill International School — one for every Year 8 English
          topic, complete with interactive chapters and quick-fire quizzes.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href="/lessons/claude-sitcom.html"
            className="rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-violet-700"
          >
            📺 Open Full-Screen Sitcom TV
          </a>
          <Link
            href="/topic/shakespeare-language?tab=watch"
            className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-50"
          >
            ▶ Start Episode 1 in Topic
          </Link>
        </div>
      </section>

      <div className="mt-6 flex flex-wrap gap-2">
        {SUBJECTS.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setFilter(s)}
            className={`rounded-full px-4 py-1.5 text-xs font-bold transition ${
              filter === s
                ? "bg-violet-600 text-white shadow-sm"
                : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
            }`}
          >
            {s === "All" ? "All 16 episodes" : SUBJECT_LABEL[s]}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {episodes.map(({ meta, sitcom, watched }) => {
          const a = ACCENT[meta.accent];
          return (
            <article
              key={meta.id}
              className={`flex flex-col justify-between rounded-2xl border bg-gradient-to-br p-5 shadow-sm ${a.card}`}
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${a.chip}`}>
                    {meta.icon} Ep {String(sitcom.episode).padStart(2, "0")} · {sitcom.minutes} min
                  </span>
                  {watched && (
                    <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-700">
                      ✓ Watched
                    </span>
                  )}
                </div>
                <h2 className="mt-3 text-lg font-extrabold text-slate-900">&ldquo;{sitcom.title}&rdquo;</h2>
                <p className="mt-0.5 text-xs font-semibold text-slate-500">{meta.title}</p>
                <p className="mt-2 text-sm text-slate-600">{sitcom.dek}</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 pt-2">
                <Link
                  href={`/topic/${meta.id}?tab=watch`}
                  className="rounded-xl bg-indigo-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-indigo-700"
                >
                  🎬 Watch in Topic
                </Link>
                <a
                  href={sitcom.href}
                  className="rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50"
                >
                  ↗ Full Screen
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { TOPIC_META, ACCENT, SUBJECT_LABEL, type Subject } from "@/lib/topics/_meta";
import { useStore } from "@/lib/store";

const SUBJECTS: ("All" | Subject)[] = ["All", "Shakespeare", "Poetry", "Novel", "Skills"];
const SUBJECT_ICON: Record<Subject, string> = {
  Shakespeare: "🎭",
  Poetry: "🪶",
  Novel: "📖",
  Skills: "✏️",
};

export default function TopicsPage() {
  const { guidesRead, attempts } = useStore();
  const [filter, setFilter] = useState<"All" | Subject>("All");
  const [query, setQuery] = useState("");

  const topicProgress = useMemo(() => {
    const map: Record<string, number> = {};
    for (const m of TOPIC_META) {
      let done = guidesRead[m.id] ? 1 : 0;
      const prefixes = [`quiz-mcq:${m.id}`, `quiz-qa:${m.id}`, `bank:${m.id}:`];
      for (const key of Object.keys(attempts)) {
        if (prefixes.some((p) => key.startsWith(p)) && (attempts[key] as { completed?: boolean }).completed) done++;
      }
      map[m.id] = Math.min(100, Math.round((done / 11) * 100));
    }
    return map;
  }, [guidesRead, attempts]);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return TOPIC_META.filter((m) => {
      if (filter !== "All" && m.subject !== filter) return false;
      if (!q) return true;
      return m.title.toLowerCase().includes(q) || m.summary.toLowerCase().includes(q) || m.term.toLowerCase().includes(q);
    });
  }, [filter, query]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">📚 All Topics</h1>
          <p className="mt-1 text-sm text-slate-600">
            {TOPIC_META.length} Year 8 English topics across Shakespeare, Poetry, the Novel and core skills.
          </p>
        </div>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search topics…"
          aria-label="Search topics"
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-800 shadow-sm focus:border-indigo-400 focus:outline-none sm:w-64"
        />
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {SUBJECTS.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setFilter(s)}
            className={`rounded-full px-4 py-1.5 text-xs font-bold transition ${
              filter === s
                ? "bg-indigo-600 text-white shadow-sm"
                : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
            }`}
          >
            {s === "All" ? "All 16 topics" : `${SUBJECT_ICON[s]} ${SUBJECT_LABEL[s]}`}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {visible.map((meta) => {
          const a = ACCENT[meta.accent];
          const progress = topicProgress[meta.id] ?? 0;
          return (
            <Link
              key={meta.id}
              href={`/topic/${meta.id}`}
              className={`group relative flex flex-col rounded-2xl border bg-gradient-to-br p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${a.card}`}
            >
              <div className="flex items-start gap-4">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white text-3xl shadow-sm">
                  {meta.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <span className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-bold ${a.chip}`}>
                    {meta.term}
                  </span>
                  <h2 className="mt-1 font-bold text-slate-900">{meta.title}</h2>
                  <p className="mt-0.5 text-sm text-slate-600">{meta.summary}</p>
                </div>
              </div>
              <div className="mt-4">
                <div className="mb-1 flex items-center justify-between text-xs font-medium text-slate-500">
                  <span>Progress</span>
                  <span className="tabular-nums">{progress}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/70">
                  <div className={`h-full rounded-full transition-all ${a.bar}`} style={{ width: `${progress}%` }} />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

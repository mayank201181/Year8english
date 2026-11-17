"use client";

import { useEffect, useRef, useState } from "react";
import type { Topic } from "@/lib/types";
import { SITCOMS } from "@/lib/sitcoms";
import { useStore } from "@/lib/store";

/** Stars for finishing each chapter of an animated lesson, and for finishing it all. */
const CHAPTER_STARS = 1;
const LESSON_STARS = 5;

/** Messages the lesson page (public/lessons/<topic>.html?embed=1 or /masterclass/<topic>.html?embed=1) posts to this window. */
type LessonMessage =
  | { source: "y8-lesson"; topic: string; type: "hello"; chapters: unknown }
  | { source: "y8-lesson"; topic: string; type: "height"; value: unknown }
  | { source: "y8-lesson"; topic: string; type: "chapter-done"; chapter: unknown }
  | { source: "y8-lesson"; topic: string; type: "complete" }
  | { source: "y8-lesson"; topic: string; type: "theater"; on: unknown };

export const lessonChapterKey = (topicId: string, chapterId: string) => `lesson:${topicId}:${chapterId}`;

/** Stars for a Claude Sitcom (scene ids like "cold" are shared between episodes, so they are keyed by episode). */
const sitcomStarId = (topicId: string) => `claude-sitcom-${topicId}`;

export function LessonTab({ topic }: { topic: Topic }) {
  const lesson = SITCOMS[topic.id];
  const starId = sitcomStarId(topic.id);
  const { award, hasAward } = useStore();
  const frame = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(900);
  const [theater, setTheater] = useState(false);
  const [chapters, setChapters] = useState<string[]>([]);
  const [, setTick] = useState(0);

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (e.origin !== window.location.origin || !frame.current || e.source !== frame.current.contentWindow) return;
      const m = e.data as LessonMessage;
      if (!m || m.source !== "y8-lesson" || m.topic !== topic.id) return;
      if (m.type === "hello") {
        const ids = Array.isArray(m.chapters) ? m.chapters.filter((x): x is string => typeof x === "string") : [];
        setChapters(ids);
        // Tick the chapters this learner has already finished, on any device.
        const watched = ids.filter((id) => hasAward(lessonChapterKey(starId, id)));
        frame.current.contentWindow?.postMessage({ source: "y8-app", type: "watched", ids: watched }, window.location.origin);
      } else if (m.type === "height") {
        if (typeof m.value === "number" && m.value > 200 && m.value < 20000) setHeight(Math.ceil(m.value));
      } else if (m.type === "chapter-done") {
        if (typeof m.chapter === "string") {
          award(lessonChapterKey(starId, m.chapter), CHAPTER_STARS);
          setTick((n) => n + 1);
        }
      } else if (m.type === "complete") {
        award(`lesson:${starId}`, LESSON_STARS);
        setTick((n) => n + 1);
      } else if (m.type === "theater") {
        setTheater(m.on === true);
      }
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [topic.id, starId, award, hasAward]);

  // Professor Quill sits bottom-right, over the player's controls; step him aside while a lesson is open.
  useEffect(() => {
    document.body.classList.add("lesson-watching");
    return () => document.body.classList.remove("lesson-watching");
  }, []);

  // While the lesson fills the screen (phones without element full screen), stop the page behind it scrolling.
  useEffect(() => {
    if (!theater) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [theater]);

  if (!lesson) {
    return (
      <p className="rounded-2xl border border-slate-200 bg-white p-6 text-center text-slate-500">
        The Claude Sitcom episode for this topic is being animated. In the meantime, read the Guide and try the Quiz!
      </p>
    );
  }

  const watched = chapters.filter((id) => hasAward(lessonChapterKey(starId, id))).length;
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border-l-4 border-emerald-400 bg-emerald-50 p-4">
        <div className="min-w-0 flex-1">
          <p className="text-xs font-bold uppercase tracking-wide text-emerald-700">
            🎬 Claude Sitcom · Episode {lesson.episode}
          </p>
          <p className="mt-1 text-lg font-extrabold text-emerald-950">{lesson.title}</p>
          <p className="mt-1 font-medium text-emerald-900">
            {lesson.dek} A {lesson.minutes}-minute mockumentary comedy written and animated by Claude, with every key idea,
            quotation and exam trap for this topic. Earn a star for every scene you finish.
          </p>
          <p className="mt-2 text-sm">
            <a href={lesson.href} target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-800 underline underline-offset-4">
              Open full screen ↗
            </a>
            <span className="mx-2 text-emerald-300">·</span>
            <a href="/lessons/claude-sitcom.html" target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-800 underline underline-offset-4">
              All episodes ↗
            </a>
          </p>
        </div>
        {chapters.length > 0 && (
          <span className="shrink-0 rounded-full bg-white px-3 py-1 text-sm font-bold text-emerald-800 ring-1 ring-emerald-200">
            {watched === chapters.length ? "✓ All scenes watched" : `${watched} of ${chapters.length} scenes watched`}
          </span>
        )}
      </div>
      <div className={theater ? "fixed inset-0 z-[100] bg-[#05101A]" : undefined}>
        <iframe
          ref={frame}
          src={`${lesson.href}?embed=1`}
          title={`${topic.title}: Claude Sitcom`}
          className="block w-full border-0"
          style={theater ? { height: "100%" } : { height }}
          allow="fullscreen; autoplay; screen-wake-lock"
          allowFullScreen
        />
      </div>
    </div>
  );
}

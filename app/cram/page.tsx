import { Suspense } from "react";
import type { Metadata } from "next";
import { ALL_TOPICS } from "@/lib/topics";
import { SUBJECT_LABEL, metaById } from "@/lib/topics/_meta";
import { buildTopicCramPack } from "@/lib/cram";
import { CramSheet } from "@/components/CramSheet";

export const metadata: Metadata = {
  title: "Exam Cram Sheet — Year 8 English",
  description: "Select any 1, 3, or 4 topics in your test for an instant Exam Cram & Mark-Savers Sheet.",
};

export default function CramPage() {
  const packs = ALL_TOPICS.map((t) => {
    const m = metaById(t.id);
    return buildTopicCramPack(t, m ? SUBJECT_LABEL[m.subject] : String(t.subject));
  });
  return (
    <Suspense fallback={<p className="p-6 text-slate-500">Building Exam Cram Sheet…</p>}>
      <CramSheet packs={packs} subjectLabel="Year 8 English" />
    </Suspense>
  );
}

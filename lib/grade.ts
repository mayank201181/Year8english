import type { QA } from "./types";

export type Verdict = "correct" | "partial" | "incorrect";

export interface QAResult {
  coverage: number; // 0..1
  verdict: Verdict;
  creditedPoints: boolean[]; // per mark point: was it credited?
  hitCount: number;
  total: number;
}

const NON_ANSWER_PHRASES = [
  "i don t know",
  "i dont know",
  "i do not know",
  "idk",
  "no idea",
  "not sure",
  "it makes the reader want to read on",
  "makes the reader want to read on",
  "make the reader want to read on",
  "wants to read on",
  "want to read on",
  "good words",
  "uses good words",
];

function canonPunct(s: string): string {
  return s
    .toLowerCase()
    .replace(/[’‘`]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[—–]/g, "-");
}

function toWords(s: string): string {
  return canonPunct(s)
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenMatches(candidate: string, target: string): boolean {
  if (candidate === target) return true;
  if (target.length < 4) return false;
  if (candidate.startsWith(target) && candidate.length <= target.length + 4) return true;
  // y -> ies / ied (e.g. mystery -> mysteries)
  if (target.length >= 5 && target.endsWith("y")) {
    const stem = target.slice(0, -1);
    if (candidate === `${stem}ies` || candidate === `${stem}ied`) return true;
  }
  // silent -e drop before -ing / -ation (e.g. reverse -> reversing, move -> moving)
  if (target.length >= 5 && target.endsWith("e")) {
    const stem = target.slice(0, -1);
    if (candidate === `${stem}ing` || candidate === `${stem}ation`) return true;
  }
  // -s / -es stripped from target verb when candidate uses base/participle (e.g. moves -> moving, slips -> slip)
  if (target.length >= 5 && target.endsWith("s") && !target.endsWith("ss")) {
    const base = target.slice(0, -1);
    if (candidate === base || (base.endsWith("e") && candidate === `${base.slice(0, -1)}ing`)) return true;
  }
  return false;
}

function findPhraseContexts(wordsStr: string, kwNorm: string): string[] {
  if (!wordsStr || !kwNorm) return [];
  const tokens = wordsStr.split(" ");
  const kwTokens = kwNorm.split(" ");
  const len = kwTokens.length;
  const contexts: string[] = [];

  for (let i = 0; i <= tokens.length - len; i++) {
    let ok = true;
    for (let j = 0; j < len; j++) {
      const allowInflect = j === 0 || j === len - 1;
      if (allowInflect ? !tokenMatches(tokens[i + j], kwTokens[j]) : tokens[i + j] !== kwTokens[j]) {
        ok = false;
        break;
      }
    }
    if (ok) {
      const matched = tokens.slice(i, i + len).join(" ");
      const prev2 = i > 1 ? tokens[i - 2] : "<bos2>";
      const prev1 = i > 0 ? tokens[i - 1] : "<bos1>";
      const next1 = i + len < tokens.length ? tokens[i + len] : "<eos1>";
      const next2 = i + len + 1 < tokens.length ? tokens[i + len + 1] : "<eos2>";
      contexts.push(`${matched}|${prev2} ${prev1}|${next1} ${next2}`);
    }
  }
  return contexts;
}

/**
 * Auto-assess a typed written answer against a mark scheme by keyword
 * coverage. Any keyword for a mark point credits that point, while
 * guarding against stem-copying and empty/cliché non-answers.
 * Runs fully client-side (no LLM needed).
 */
export function gradeQA(qa: QA, answer: string): QAResult {
  const total = qa.markScheme.length || 1;
  const zero = () => ({
    coverage: 0,
    verdict: "incorrect" as Verdict,
    creditedPoints: qa.markScheme.map(() => false),
    hitCount: 0,
    total,
  });

  if (answer.trim().length < 3) return zero();

  const qRaw = canonPunct(qa.question).replace(/\s+/g, " ").trim();
  const eRaw = qa.extract ? canonPunct(qa.extract).replace(/\s+/g, " ").trim() : "";
  const aRawCore = canonPunct(answer).replace(/\s+/g, " ").trim();
  if (aRawCore === qRaw || (eRaw && (aRawCore === eRaw || aRawCore === `${qRaw} ${eRaw}` || aRawCore === `${eRaw} ${qRaw}`))) {
    return zero();
  }

  const qWords = toWords(qa.question);
  const eWords = qa.extract ? toWords(qa.extract) : "";
  let aWords = toWords(answer);

  // Strip full verbatim prompt or extract paste if the student pasted it into the box
  if (qWords.length >= 8 && aWords.includes(qWords)) {
    aWords = ` ${aWords} `.replaceAll(` ${qWords} `, " ").replace(/\s+/g, " ").trim();
  }
  if (eWords.length >= 8 && aWords.includes(eWords)) {
    aWords = ` ${aWords} `.replaceAll(` ${eWords} `, " ").replace(/\s+/g, " ").trim();
  }
  for (const phrase of NON_ANSWER_PHRASES) {
    aWords = ` ${aWords} `.replaceAll(` ${phrase} `, " ").replace(/\s+/g, " ").trim();
  }
  if (!aWords || aWords === qWords || (eWords && aWords === eWords)) return zero();

  const raw = ` ${aRawCore} `;
  const credited = qa.markScheme.map((mp) =>
    mp.keywords.some((kw) => {
      const kRaw = canonPunct(kw).replace(/\s+/g, " ").trim();
      if (!kRaw) return false;

      // Keywords that deliberately test punctuation (; : ? , .) or Act.Scene refs (1.2)
      if (/[;:?,]|\.\s/.test(kRaw) || /^[;:?.!]+$/.test(kRaw) || /^\d+\.\d+$/.test(kRaw)) {
        if (!raw.includes(kRaw)) return false;
        if (` ${qRaw} `.includes(kRaw) && qRaw.includes(aRawCore)) return false;
        if (eRaw && ` ${eRaw} `.includes(kRaw) && eRaw.includes(aRawCore)) return false;
        return true;
      }

      const kNorm = toWords(kRaw);
      if (!kNorm) return false;

      const ansCtx = findPhraseContexts(aWords, kNorm);
      if (ansCtx.length === 0) return false;

      const stemCtx = new Set([
        ...findPhraseContexts(qWords, kNorm),
        ...(eWords ? findPhraseContexts(eWords, kNorm) : []),
      ]);
      if (stemCtx.size === 0) return true;
      return ansCtx.some((ctx) => !stemCtx.has(ctx));
    }),
  );

  const hitCount = credited.filter(Boolean).length;
  const coverage = hitCount / total;
  let verdict: Verdict = "incorrect";
  if (coverage >= 0.75) verdict = "correct";
  else if (coverage >= 0.34) verdict = "partial";
  return { coverage, verdict, creditedPoints: credited, hitCount, total };
}

export const VERDICT_META: Record<Verdict, { label: string; emoji: string; className: string }> = {
  correct: { label: "Correct!", emoji: "✅", className: "text-emerald-700 bg-emerald-50 border-emerald-200" },
  partial: { label: "Partially right", emoji: "🟡", className: "text-amber-700 bg-amber-50 border-amber-200" },
  incorrect: { label: "Needs work", emoji: "🔴", className: "text-rose-700 bg-rose-50 border-rose-200" },
};

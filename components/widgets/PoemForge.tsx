"use client";

import { useState } from "react";
import { Action, Chip, Frame, Note, Step } from "./ui";
import { lastWord, lineSyllables, rhymeKey, rhymesFor, scheme } from "./poemSounds";

interface Form {
  id: string;
  label: string;
  lines: number | null; // null = free verse (you choose)
  syl?: [number, number][];
  scheme?: string;
  about: string;
  example: string[];
}

const FORMS: Form[] = [
  {
    id: "haiku",
    label: "Haiku 5-7-5",
    lines: 3,
    syl: [[5, 5], [7, 7], [5, 5]],
    about: "Three lines of 5, 7 and 5 syllables capturing a single moment, often in nature or a season. No rhyme needed: the image does the work.",
    example: ["Monsoon afternoon", "the hawker centre roof drums", "grandma counts the drops"],
  },
  {
    id: "couplet",
    label: "Rhyming couplet",
    lines: 2,
    syl: [[8, 11], [8, 11]],
    scheme: "AA",
    about: "Two rhyming lines of similar length. Shakespeare ends every sonnet with one: it clicks shut like a lock.",
    example: ["Ammachi stirs the curry, hums a tune,", "her lullaby is older than the moon."],
  },
  {
    id: "quatrain",
    label: "Quatrain ABAB",
    lines: 4,
    syl: [[6, 10], [6, 10], [6, 10], [6, 10]],
    scheme: "ABAB",
    about: "Four lines with alternate rhyme (lines 1 and 3 rhyme, lines 2 and 4 rhyme). The pattern feels balanced and song-like: think of hymns and ballads.",
    example: ["The morning train is packed and grey,", "a hundred faces lit by screens;", "I count the stops and drift away", "and wonder what the silence means."],
  },
  {
    id: "limerick",
    label: "Limerick AABBA",
    lines: 5,
    syl: [[7, 10], [7, 10], [4, 7], [4, 7], [7, 10]],
    scheme: "AABBA",
    about: "Five bouncy lines, AABBA: three long lines and two short ones in the middle. Made for comedy, with a twist or punchline at the end.",
    example: ["A poet who lived in Penang", "wrote verses that rattled and rang;", "she rhymed every line", "till her teacher said, 'Fine!'", "and the whole of Year Eight joined the gang."],
  },
  {
    id: "free",
    label: "Free verse",
    lines: null,
    about: "No fixed rhyme or metre, so line breaks do the work. Where you end a line decides which word the reader lingers on.",
    example: ["My name is a suitcase", "packed in Chennai,", "unzipped in Singapore,", "and everything inside", "still smells of jasmine."],
  },
];

const MAX = 10;
const blank = () => Array<string>(MAX).fill("");

export function PoemForge() {
  const [fi, setFi] = useState(0);
  const [lines, setLines] = useState<string[]>(blank);
  const [freeCount, setFreeCount] = useState(5);
  const form = FORMS[fi];
  const count = form.lines ?? freeCount;
  const shown = lines.slice(0, count);
  const sylls = shown.map(lineSyllables);
  const letters = scheme(shown);
  const filled = shown.filter((l) => l.trim()).length;

  function setLine(i: number, v: string) {
    setLines(lines.map((l, j) => (j === i ? v : l)));
  }

  // Gentle feedback.
  const tips: { tone: "good" | "ok" | "info"; text: string }[] = [];
  if (filled === 0) tips.push({ tone: "info", text: "Start typing: each line is counted as you go." });
  else {
    if (form.syl) {
      shown.forEach((l, i) => {
        if (!l.trim()) return;
        const [lo, hi] = form.syl![i];
        const s = sylls[i];
        const want = lo === hi ? `${lo}` : `${lo}–${hi}`;
        if (s > hi) tips.push({ tone: "ok", text: `Line ${i + 1} has ${s} syllables; aim for ${want}. Try trimming a small word ('the', 'very', 'really') or a long one.` });
        else if (s < lo) tips.push({ tone: "ok", text: `Line ${i + 1} has ${s} syllables; aim for ${want}. Add a precise detail: a colour, a sound, a name.` });
      });
    }
    if (form.scheme) {
      const target = form.scheme;
      for (let i = 0; i < count; i++) {
        for (let j = i + 1; j < count; j++) {
          if (target[i] !== target[j] || !shown[i].trim() || !shown[j].trim()) continue;
          if (rhymeKey(lastWord(shown[i])) !== rhymeKey(lastWord(shown[j]))) {
            const w = lastWord(shown[i]).replace(/[^a-z']/gi, "");
            const ideas = rhymesFor(w);
            tips.push({ tone: "ok", text: `Lines ${i + 1} and ${j + 1} should rhyme (${target[i]}).${ideas.length ? ` Words that rhyme with '${w}': ${ideas.join(", ")}…` : ""} Half-rhymes are fine too, if they sound right aloud.` });
          }
          break; // only check each line against the next one sharing its letter
        }
      }
    }
    if (form.id === "free" && filled >= 3) {
      const ls = shown.filter((l) => l.trim()).map((l) => l.trim().split(/\s+/).length);
      if (Math.max(...ls) - Math.min(...ls) <= 1) tips.push({ tone: "info", text: "Your lines are all about the same length. Try one very short line: it creates a pause and puts weight on a single word." });
      if (shown.filter((l) => l.trim()).every((l) => /[.,;:!?]$/.test(l.trim()))) tips.push({ tone: "info", text: "Every line ends with punctuation. Try enjambment: let a sentence run over the line break so the reader is pulled forward." });
      const lettersUsed = letters.filter(Boolean);
      if (new Set(lettersUsed).size < lettersUsed.length) tips.push({ tone: "info", text: "Some of your lines rhyme. That's allowed in free verse, but make sure each rhyme is a choice, not an accident." });
    }
    const complete = filled === count;
    if (complete && tips.every((t) => t.tone === "info")) {
      tips.unshift({ tone: "good", text: `🎉 That fits the ${form.label.toLowerCase()} pattern! Now read it aloud: does every word earn its place? Would a reader see, hear or feel something?` });
    }
  }

  return (
    <Frame
      title="Poem forge: shape a poem"
      emoji="✍️"
      caption={
        <>
          Form is a set of rules a poet chooses: syllables per line, a rhyme scheme (lettered A, B, C… for each new end-sound), a number of lines. Rules can sharpen your ideas, and breaking them on purpose can make a point. The counters here are a rough guide: English spelling is tricky, so always <b>clap the syllables out loud</b> and trust your ear. Your poem stays on this page; nothing is sent anywhere.
        </>
      }
    >
      <Step n={1}>Choose a form</Step>
      <div className="flex flex-wrap gap-2">
        {FORMS.map((f, i) => (
          <Chip key={f.id} on={fi === i} onClick={() => setFi(i)}>{f.label}</Chip>
        ))}
      </div>
      <p className="mt-2 text-sm text-slate-600">{form.about}</p>

      <Step n={2}>Write, one line per box</Step>
      <div className="space-y-2">
        {shown.map((l, i) => {
          const range = form.syl?.[i];
          const s = sylls[i];
          const sylTone = !l.trim() ? "bg-slate-100 text-slate-400" : !range ? "bg-indigo-100 text-indigo-800" : s >= range[0] && s <= range[1] ? "bg-emerald-100 text-emerald-800" : Math.abs(s - (s < range[0] ? range[0] : range[1])) <= 2 ? "bg-amber-100 text-amber-800" : "bg-rose-100 text-rose-800";
          const targetLetter = form.scheme?.[i];
          return (
            <div key={i} className="flex items-center gap-1.5">
              <span className="w-5 shrink-0 text-right text-xs font-bold text-slate-400">{i + 1}</span>
              <input
                type="text"
                value={l}
                onChange={(e) => setLine(i, e.target.value)}
                aria-label={`Line ${i + 1}`}
                autoComplete="off"
                spellCheck
                className="min-h-11 min-w-0 flex-1 rounded-xl border border-slate-200 bg-white px-3 font-serif text-[16px] text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder={i === 0 ? form.example[0] : ""}
              />
              <span className={`grid h-11 w-12 shrink-0 place-items-center rounded-xl text-center text-xs font-bold leading-tight ${sylTone}`} aria-label={`${s} syllables${range ? `, target ${range[0] === range[1] ? range[0] : `${range[0]} to ${range[1]}`}` : ""}`}>
                <span>
                  {s}
                  {range && <span className="block text-[10px] font-medium opacity-70">/{range[0] === range[1] ? range[0] : `${range[0]}-${range[1]}`}</span>}
                </span>
              </span>
              <span className="grid h-11 w-10 shrink-0 place-items-center rounded-xl bg-white text-center text-sm font-black text-violet-700 ring-1 ring-slate-200" aria-label={letters[i] ? `Rhyme letter ${letters[i]}${targetLetter ? `, target ${targetLetter}` : ""}` : "No rhyme letter yet"}>
                <span>
                  {letters[i] || "–"}
                  {targetLetter && <span className="block text-[10px] font-medium text-slate-400">{targetLetter}</span>}
                </span>
              </span>
            </div>
          );
        })}
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        {form.lines === null && (
          <>
            <Action tone="light" disabled={freeCount >= MAX} onClick={() => setFreeCount(freeCount + 1)}>+ Add line</Action>
            <Action tone="light" disabled={freeCount <= 2} onClick={() => setFreeCount(freeCount - 1)}>− Remove line</Action>
          </>
        )}
        <Action tone="light" onClick={() => { const n = blank(); form.example.forEach((e, i) => (n[i] = e)); setLines(n); if (!form.lines) setFreeCount(form.example.length); }}>Show an example</Action>
        <Action tone="light" onClick={() => setLines(blank())}>Clear</Action>
      </div>
      <p className="mt-1 text-xs text-slate-500">Number = syllables in the line (target underneath: green is on target). Purple letter = its rhyme sound (target underneath).</p>

      <Step n={3}>Feedback</Step>
      <div className="space-y-2" aria-live="polite">
        {tips.slice(0, 4).map((t) => (
          <Note key={t.text} tone={t.tone}>{t.text}</Note>
        ))}
      </div>
    </Frame>
  );
}

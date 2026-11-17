"use client";

import { useState } from "react";
import { Action, Chip, Frame, Note, Step } from "./ui";

type Pov = "first_rel" | "first_unrel" | "third_lim" | "third_omni";

interface PovVersion {
  id: Pov;
  label: string;
  pronouns: string;
  passage: string;
  whatReaderKnows: string;
  effect: string;
}

const VERSIONS: PovVersion[] = [
  {
    id: "first_rel",
    label: "1st-person (honest)",
    pronouns: "I / my",
    passage: "My hands shook so badly that the brass key scraped twice against the lock. Behind me, the corridor floorboards creaked. I told myself it was only the rain settling in the rafters, though my stomach knew better: Mr Voss never left his study unlocked by accident.",
    whatReaderKnows: "Only what the narrator sees, hears and feels right now — including their fear.",
    effect: "Immediate intimacy and suspense: we are trapped inside one pair of eyes and don't know who is coming down the corridor.",
  },
  {
    id: "first_unrel",
    label: "1st-person (unreliable!)",
    pronouns: "I / my (suspect)",
    passage: "Naturally, I only borrowed Mr Voss's brass key for his own protection — a man so careless with confidential scholarship papers practically begs a helpful student to tidy his desk at midnight. If the lock scratched a little, that was poorly oiled ironwork, certainly not nerves. Nobody could call me a thief.",
    whatReaderKnows: "Two layers at once: the narrator's smooth excuses AND the truth leaking through between the lines!",
    effect: "Dramatic irony and psychological intrigue: the gap between 'tidy his desk at midnight' and reality makes the reader play detective.",
  },
  {
    id: "third_lim",
    label: "3rd-person limited",
    pronouns: "he / she (close to one mind)",
    passage: "Tariq's fingers trembled until the brass key grated against the lock. Somewhere down the dark corridor, a board groaned. Rain in the rafters, he told himself — yet the cold knot in his chest refused to loosen.",
    whatReaderKnows: "Close access to Tariq's thoughts ('Rain in the rafters, he told himself'), plus slight narrative distance to observe him.",
    effect: "Flexible empathy: we share Tariq's dread closely, while the writer can craft polished description he wouldn't speak aloud himself.",
  },
  {
    id: "third_omni",
    label: "3rd-person omniscient",
    pronouns: "all-seeing narrator",
    passage: "At the study door, Tariq fumbled with the stolen brass key, convinced the creak behind him was only the old roof cooling. Three yards away in the shadow of the stairwell, Mr Voss stood motionless with his arms folded, waiting to see which drawer the boy would open first.",
    whatReaderKnows: "Everything! Both Tariq's false reassurance AND Mr Voss watching silently in the dark.",
    effect: "Hitchcock-style suspense (dramatic irony): knowing Mr Voss is three yards away makes every second at the lock agonising.",
  },
];

const UNRELIABLE_SPANS: { clue: string; why: string }[] = [
  { clue: "for his own protection", why: "Self-serving rationalisation: framing a break-in as a generous favour." },
  { clue: "tidy his desk at midnight", why: "Absurd timing! Honest tidying never happens in the dark at midnight." },
  { clue: "certainly not nerves", why: "Over-denial: bringing up 'nerves' unprompted betrays that their hands WERE shaking." },
  { clue: "Nobody could call me a thief.", why: "Defensive protestation: the very word 'thief' tells the reader what they really are." },
];

export function NarratorLens() {
  const [pov, setPov] = useState<Pov>("first_rel");
  const [spotted, setSpotted] = useState<number[]>([]);

  const cur = VERSIONS.find((v) => v.id === pov)!;

  function toggleClue(i: number) {
    setSpotted((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]));
  }

  return (
    <Frame
      title="Narrator & point-of-view lens"
      emoji="📖"
      caption={
        <>
          Who tells a novel shapes everything we know and feel. Never confuse the <b>narrator</b> with the <b>author</b>! An <b>unreliable narrator</b> betrays the truth through excuses, contradictions and suspicious details, while <b>third-person omniscient</b> narration can build unbearable tension by showing us dangers the protagonist cannot see.
        </>
      }
    >
      <Step n={1}>Switch the narrative lens on the exact same moment</Step>
      <div className="flex flex-wrap gap-1.5">
        {VERSIONS.map((v) => (
          <Chip key={v.id} on={pov === v.id} onClick={() => setPov(v.id)}>
            {v.label}
          </Chip>
        ))}
      </div>

      <div className="mt-3 rounded-xl border border-amber-200 bg-[#fffaf0] p-3.5">
        <div className="mb-1.5 flex items-center justify-between text-xs font-bold uppercase tracking-wide text-amber-800">
          <span>{cur.label}</span>
          <span>Pronouns: {cur.pronouns}</span>
        </div>
        <p className="font-serif text-[16.5px] leading-relaxed text-slate-800">{cur.passage}</p>
      </div>

      <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-3 text-sm">
          <p className="text-xs font-bold uppercase tracking-wide text-slate-500">👁️ Information control</p>
          <p className="mt-1 leading-relaxed text-slate-800">{cur.whatReaderKnows}</p>
        </div>
        <div className="rounded-xl border border-indigo-200 bg-indigo-50/70 p-3 text-sm">
          <p className="text-xs font-bold uppercase tracking-wide text-indigo-700">✨ Effect on the reader</p>
          <p className="mt-1 leading-relaxed text-indigo-950">{cur.effect}</p>
        </div>
      </div>

      <Step n={2}>Detective challenge: tap the 4 clues that expose the unreliable narrator</Step>
      {pov !== "first_unrel" && (
        <div className="mb-2">
          <Action tone="light" onClick={() => setPov("first_unrel")}>Switch to 1st-person (unreliable!) above →</Action>
        </div>
      )}
      <div className="grid gap-2 sm:grid-cols-2">
        {UNRELIABLE_SPANS.map((item, idx) => {
          const on = spotted.includes(idx);
          return (
            <button
              key={idx}
              type="button"
              onClick={() => toggleClue(idx)}
              className={`min-h-10 rounded-xl p-3 text-left text-sm transition ${
                on ? "bg-emerald-50 ring-2 ring-emerald-400" : "bg-white ring-1 ring-slate-200 hover:bg-amber-50"
              }`}
            >
              <span className="font-serif font-bold text-slate-900">&ldquo;…{item.clue}…&rdquo;</span>
              {on ? (
                <span className="mt-1 block text-xs font-medium text-emerald-800">✓ {item.why}</span>
              ) : (
                <span className="mt-1 block text-xs text-slate-500">Tap to unmask why we don&apos;t trust this phrase</span>
              )}
            </button>
          );
        })}
      </div>

      {spotted.length === UNRELIABLE_SPANS.length && (
        <div className="mt-3">
          <Note tone="good">
            🕵️ All 4 clues unmasked! When analysing an unreliable narrator in an exam, quote the excuse AND explain the <b>gap between what the narrator claims and what the reader infers</b>.
          </Note>
        </div>
      )}
    </Frame>
  );
}

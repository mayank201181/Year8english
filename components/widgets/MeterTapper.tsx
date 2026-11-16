"use client";

import { useState } from "react";
import { Action, Chip, Frame, Note, Step } from "./ui";

// Stress key: 1 = stressed (DUM), 0 = unstressed (da), 2 = either is fine
// (a "promoted" beat the metre wants but natural speech may skip).
type Kind = "regular" | "trochaic" | "feminine";
interface MeterLine {
  id: string;
  text: string;
  source: string;
  words: string[][]; // syllables per word
  stress: (0 | 1 | 2)[];
  kind: Kind;
  explain: string;
}

const LINES: MeterLine[] = [
  {
    id: "s18",
    text: "Shall I compare thee to a summer's day?",
    source: "Sonnet 18",
    words: [["Shall"], ["I"], ["com", "pare"], ["thee"], ["to"], ["a"], ["sum", "mer's"], ["day?"]],
    stress: [0, 1, 0, 1, 2, 2, 0, 1, 0, 1],
    kind: "regular",
    explain:
      "Regular iambic pentameter: five da-DUM feet. The metre wants a light beat on 'to', although most actors lean on 'thee' instead, so either is fine. The calm, even rhythm suits a speaker who is confident he can praise the person he loves.",
  },
  {
    id: "rj22",
    text: "But soft, what light through yonder window breaks?",
    source: "Romeo and Juliet, 2.2",
    words: [["But"], ["soft,"], ["what"], ["light"], ["through"], ["yon", "der"], ["win", "dow"], ["breaks?"]],
    stress: [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    kind: "regular",
    explain:
      "Perfectly regular, like a steady heartbeat. Notice where the beats land: SOFT, LIGHT, YON-, WIN-, BREAKS. The stresses fall on the words that matter. 'Soft' means 'hush, wait', so Romeo starts with a whisper in the dark Capulet orchard.",
  },
  {
    id: "tn11",
    text: "If music be the food of love, play on",
    source: "Twelfth Night, 1.1",
    words: [["If"], ["mu", "sic"], ["be"], ["the"], ["food"], ["of"], ["love,"], ["play"], ["on"]],
    stress: [0, 1, 0, 2, 0, 1, 0, 1, 2, 1],
    kind: "regular",
    explain:
      "Regular iambic pentameter: Orsino's opening line. 'Be' takes a light, promoted beat. The two heavy words at the end, 'play on', slow the line down, like a lord giving a lazy command to his musicians.",
  },
  {
    id: "rjpro",
    text: "Two households, both alike in dignity,",
    source: "Romeo and Juliet, Prologue",
    words: [["Two"], ["house", "holds,"], ["both"], ["a", "like"], ["in"], ["dig", "ni", "ty,"]],
    stress: [2, 1, 0, 1, 0, 1, 0, 1, 0, 2],
    kind: "regular",
    explain:
      "The Prologue is a sonnet in strict iambic pentameter. The final '-ty' gets a promoted beat. That orderly, balanced rhythm is ironic: it describes two families whose hatred is anything but orderly.",
  },
  {
    id: "r3",
    text: "Now is the winter of our discontent",
    source: "Richard III, 1.1",
    words: [["Now"], ["is"], ["the"], ["win", "ter"], ["of"], ["our"], ["dis", "con", "tent"]],
    stress: [1, 0, 0, 1, 0, 2, 0, 2, 0, 1],
    kind: "trochaic",
    explain:
      "Trochaic inversion: the first foot is flipped from da-DUM to DUM-da ('NOW is'). Richard is alone on stage, and the hammer-blow on 'NOW' grabs the audience and puts all the weight on the present moment. Inversions often come at the start of a line or straight after a pause.",
  },
  {
    id: "ham31",
    text: "To be, or not to be, that is the question:",
    source: "Hamlet, 3.1",
    words: [["To"], ["be,"], ["or"], ["not"], ["to"], ["be,"], ["that"], ["is"], ["the"], ["ques", "tion:"]],
    stress: [0, 1, 0, 1, 0, 1, 2, 2, 0, 1, 0],
    kind: "feminine",
    explain:
      "Eleven syllables: a feminine ending. The extra unstressed '-tion' means the line doesn't land on a firm beat. It trails off, unresolved, just as Hamlet's question is left hanging. Many actors also stress 'THAT is' after the pause (the caesura), which adds a small inversion.",
  },
];

const VERDICT: Record<Kind, string> = {
  regular: "Regular iambic pentameter",
  trochaic: "Trochaic inversion (first foot flipped)",
  feminine: "Feminine ending (11 syllables)",
};

function feet(stress: (0 | 1 | 2)[]): string[] {
  // Group into pairs; a leftover 11th syllable joins the last foot.
  const out: string[] = [];
  for (let i = 0; i < stress.length; i += 2) {
    const group = stress.slice(i, i + 2).map((s, j) => (s === 1 ? "DUM" : s === 0 ? "da" : (i + j) % 2 ? "(DUM)" : "(da)"));
    if (stress.length - i === 3) {
      group.push(stress[i + 2] === 1 ? "DUM" : "da");
      out.push(group.join(" "));
      break;
    }
    out.push(group.join(" "));
  }
  return out;
}

export function MeterTapper() {
  const [li, setLi] = useState(0);
  const line = LINES[li];
  const n = line.stress.length;
  const [marks, setMarks] = useState<(0 | 1 | null)[]>(() => Array(LINES[0].stress.length).fill(null));
  const [checked, setChecked] = useState(false);

  function pick(i: number) {
    setLi(i);
    setMarks(Array(LINES[i].stress.length).fill(null));
    setChecked(false);
  }
  function tap(i: number) {
    setChecked(false);
    setMarks((m) => m.map((v, j) => (j === i ? (v === 1 ? 0 : 1) : v)));
  }
  function fillIambic() {
    setChecked(false);
    setMarks(Array.from({ length: n }, (_, i) => (i % 2 ? 1 : 0)));
  }

  const result = line.stress.map((s, i) => (s === 2 ? "flex" : marks[i] === s ? "ok" : "bad"));
  const strict = line.stress.filter((s) => s !== 2).length;
  const right = result.filter((r) => r === "ok").length;
  const unmarked = marks.filter((m) => m === null).length;

  const starts = line.words.map((_, wi) => line.words.slice(0, wi).reduce((a, w) => a + w.length, 0));
  return (
    <Frame
      title="Meter tapper: find the heartbeat"
      emoji="🥁"
      caption={
        <>
          Iambic pentameter is five pairs of beats per line, each pair an unstressed then a stressed syllable: <b>da-DUM da-DUM da-DUM da-DUM da-DUM</b>. That makes ten syllables, and it sounds like a heartbeat. Shakespeare breaks the pattern on purpose: a <b>trochaic inversion</b> (DUM-da) punches a word, and a <b>feminine ending</b> (an 11th, unstressed syllable) makes a line trail off. When the rhythm changes, ask yourself why.
        </>
      }
    >
      <Step n={1}>Pick a line</Step>
      <div className="flex flex-wrap gap-2">
        {LINES.map((l, i) => (
          <Chip key={l.id} on={li === i} onClick={() => pick(i)}>
            {l.source}
          </Chip>
        ))}
      </div>

      <Step n={2}>Say it aloud. Tap each syllable you hit harder</Step>
      <p className="mb-2 font-serif text-lg italic text-slate-800">&ldquo;{line.text}&rdquo;</p>
      <div className="flex flex-wrap gap-x-3 gap-y-2" role="group" aria-label="Syllables: tap to mark stressed or unstressed">
        {line.words.map((w, wi) => (
          <div key={wi} className="flex">
            {w.map((s, si) => {
              const i = starts[wi] + si;
              const m = marks[i];
              const r = checked ? result[i] : null;
              const ring = r === "ok" ? "ring-2 ring-emerald-500" : r === "bad" ? "ring-2 ring-rose-500" : r === "flex" ? "outline-2 outline-dashed outline-amber-500 -outline-offset-2" : "ring-1 ring-slate-300";
              const fill = m === 1 ? "bg-indigo-600 text-white" : m === 0 ? "bg-indigo-50 text-slate-600" : "bg-white text-slate-800";
              return (
                <button
                  key={si}
                  type="button"
                  onClick={() => tap(i)}
                  aria-label={`Syllable ${i + 1}, ${s.replace(/[^\w']/g, "")}: ${m === 1 ? "stressed" : m === 0 ? "unstressed" : "not marked"}`}
                  className={`flex min-h-14 min-w-11 flex-col items-center justify-center px-1.5 py-1 ${fill} ${ring} ${si === 0 ? "rounded-l-xl" : ""} ${si === w.length - 1 ? "rounded-r-xl" : ""} ${si > 0 ? "-ml-px" : ""}`}
                >
                  <span className={`text-[11px] leading-none ${m === 1 ? "font-black" : ""}`}>{m === 1 ? "/ DUM" : m === 0 ? "˘ da" : "·"}</span>
                  <span className={`mt-1 text-base leading-none ${m === 1 ? "font-extrabold" : "font-medium"}`}>{s}</span>
                </button>
              );
            })}
          </div>
        ))}
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        <Action onClick={() => setChecked(true)} tone="green">Check</Action>
        <Action onClick={fillIambic} tone="light">Fill with da-DUM</Action>
        <Action onClick={() => pick(li)} tone="light">Clear</Action>
      </div>
      {unmarked > 0 && !checked && <p className="mt-2 text-xs text-slate-500">{unmarked} syllable{unmarked === 1 ? "" : "s"} still to mark. Tap once for stressed, again for unstressed.</p>}

      {checked && (
        <div className="mt-4 space-y-3">
          <Note tone={right === strict ? "good" : right >= strict - 2 ? "ok" : "bad"}>
            <b>{right} of {strict}</b> fixed beats right{unmarked ? ` (${unmarked} left unmarked)` : ""}.{" "}
            {right === strict ? "You hear the rhythm like an actor." : "Green is right, red needs another listen; dashed amber means either reading works."}
          </Note>
          <div className="rounded-xl bg-white p-3 ring-1 ring-slate-200">
            <p className="text-xs font-bold uppercase tracking-wide text-slate-500">The pattern</p>
            <div className="mt-1 flex flex-wrap gap-1.5">
              {feet(line.stress).map((f, i) => (
                <span key={i} className={`rounded-lg px-2 py-1 font-mono text-sm ${line.kind === "trochaic" && i === 0 ? "bg-rose-100 text-rose-800" : line.kind === "feminine" && i === 4 ? "bg-amber-100 text-amber-800" : "bg-indigo-50 text-indigo-800"}`}>
                  {f}
                </span>
              ))}
            </div>
            <p className="mt-2 text-sm text-slate-700">
              <b>{n} syllables · 5 feet</b> · {VERDICT[line.kind]}
            </p>
            <p className="mt-1 text-sm text-slate-700">{line.explain}</p>
          </div>
        </div>
      )}
    </Frame>
  );
}

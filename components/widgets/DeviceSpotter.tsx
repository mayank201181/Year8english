"use client";

import { useState } from "react";
import { Action, Chip, Frame, Note, Step } from "./ui";

const DEVICES = ["simile", "metaphor", "personification", "alliteration", "sibilance", "onomatopoeia", "pathetic fallacy", "rhetorical question", "repetition"] as const;
type Device = (typeof DEVICES)[number];

interface Span {
  phrase: string;
  accept: Device[]; // first is the "main" label
  why: string;
}
interface Passage {
  id: string;
  title: string;
  source: string;
  text: string;
  spans: Span[];
}

const PASSAGES: Passage[] = [
  {
    id: "storm",
    title: "Storm over the harbour",
    source: "Original description written for this app",
    text: "The sky sulked over the harbour all afternoon. By evening, the wind was a wolf, howling through the alleys. Rain hissed on the hot tin roofs, and the shutters went bang, bang, bang. Boats bobbed and bumped like nervous children at the jetty. Somewhere, the sea sighed and slid against the stones. Who would dare to sail on a night like this?",
    spans: [
      { phrase: "The sky sulked", accept: ["pathetic fallacy", "personification"], why: "The weather is given a bad mood ('sulked'), which hints that trouble is coming. Weather that mirrors a mood is pathetic fallacy." },
      { phrase: "the wind was a wolf", accept: ["metaphor", "alliteration"], why: "A metaphor: the wind IS a wolf, so it sounds wild, hungry and dangerous. The 'w' alliteration adds a howling sound." },
      { phrase: "Rain hissed", accept: ["onomatopoeia", "personification"], why: "'Hissed' sounds like what it describes (onomatopoeia), and makes the rain sound like an angry snake." },
      { phrase: "bang, bang, bang", accept: ["onomatopoeia", "repetition"], why: "Onomatopoeia, repeated three times, so the reader hears the shutters slamming over and over." },
      { phrase: "Boats bobbed and bumped", accept: ["alliteration"], why: "Plosive 'b' alliteration: the hard sounds mimic boats knocking together." },
      { phrase: "like nervous children", accept: ["simile", "personification"], why: "A simile using 'like': the boats seem small, fragile and frightened, which builds sympathy and tension." },
      { phrase: "the sea sighed and slid against the stones", accept: ["sibilance", "personification", "alliteration"], why: "Sibilance: the soft repeated 's' sounds imitate the hush of waves, a calm moment before the question." },
      { phrase: "Who would dare to sail on a night like this?", accept: ["rhetorical question"], why: "A rhetorical question: no answer expected, but it pulls the reader in and suggests the danger." },
    ],
  },
  {
    id: "daffodils",
    title: "I Wandered Lonely as a Cloud (stanza 1)",
    source: "William Wordsworth (revised version, 1815)",
    text: "I wandered lonely as a cloud\nThat floats on high o'er vales and hills,\nWhen all at once I saw a crowd,\nA host, of golden daffodils;\nBeside the lake, beneath the trees,\nFluttering and dancing in the breeze.",
    spans: [
      { phrase: "lonely as a cloud", accept: ["simile"], why: "A simile using 'as': the speaker drifts, aimless and isolated, high above the world." },
      { phrase: "a crowd, A host", accept: ["metaphor", "personification"], why: "The daffodils become a 'crowd' and a 'host' (a great army), as if they were people. The lonely speaker suddenly has company." },
      { phrase: "Beside the lake, beneath the trees", accept: ["alliteration", "repetition"], why: "'Beside… beneath': alliteration and a repeated structure give the line a gentle, balanced rhythm." },
      { phrase: "Fluttering and dancing", accept: ["personification"], why: "Personification: the flowers 'dance', full of joy and life, which lifts the speaker's mood." },
    ],
  },
  {
    id: "tyger",
    title: "The Tyger (stanza 1)",
    source: "William Blake (1794)",
    text: "Tyger Tyger, burning bright,\nIn the forests of the night;\nWhat immortal hand or eye,\nCould frame thy fearful symmetry?",
    spans: [
      { phrase: "Tyger Tyger", accept: ["repetition"], why: "Repetition, like a chant or a spell: the speaker is calling out to the tiger in awe." },
      { phrase: "burning bright", accept: ["metaphor", "alliteration"], why: "A metaphor: the tiger's stripes blaze as if it were on fire. The 'b' alliteration makes it explosive." },
      { phrase: "forests of the night", accept: ["metaphor"], why: "A metaphor: the darkness is a forest, mysterious and full of hidden danger." },
      { phrase: "frame thy fearful", accept: ["alliteration"], why: "Alliteration on 'f' slows the line and stresses the fear the tiger causes." },
      { phrase: "What immortal hand or eye, Could frame thy fearful symmetry?", accept: ["rhetorical question"], why: "A rhetorical question: who (what god) could create something so beautiful AND terrifying? The poem never answers." },
    ],
  },
];

const norm = (w: string) => w.toLowerCase().replace(/[^a-z']/g, "");

function tokenise(p: Passage) {
  const tokens = p.text.split(/(\s+)/);
  const wordIdx: number[] = [];
  tokens.forEach((t, i) => { if (t.trim()) wordIdx.push(i); });
  // Map each span to the token indices it covers.
  const ranges = p.spans.map((s) => {
    const words = s.phrase.split(/\s+/).map(norm);
    for (let k = 0; k + words.length <= wordIdx.length; k++) {
      if (words.every((w, j) => norm(tokens[wordIdx[k + j]]) === w)) return new Set(wordIdx.slice(k, k + words.length));
    }
    return new Set<number>();
  });
  return { tokens, ranges };
}
const TOKENISED = PASSAGES.map(tokenise);

const HUE: Record<Device, string> = {
  simile: "bg-sky-200", metaphor: "bg-violet-200", personification: "bg-pink-200", alliteration: "bg-amber-200",
  sibilance: "bg-teal-200", onomatopoeia: "bg-orange-200", "pathetic fallacy": "bg-slate-300", "rhetorical question": "bg-lime-200", repetition: "bg-rose-200",
};

export function DeviceSpotter() {
  const [pi, setPi] = useState(0);
  const [found, setFound] = useState<number[][]>(PASSAGES.map(() => []));
  const [wrong, setWrong] = useState<number[]>(PASSAGES.map(() => 0));
  const [revealed, setRevealed] = useState<boolean[]>(PASSAGES.map(() => false));
  const [sel, setSel] = useState<number | null>(null);
  const [msg, setMsg] = useState<{ tone: "good" | "ok" | "bad"; text: string } | null>(null);

  const p = PASSAGES[pi];
  const { tokens, ranges } = TOKENISED[pi];
  const f = found[pi];
  const shownSpans = revealed[pi] ? p.spans.map((_, i) => i) : f;

  function choose(i: number) {
    setPi(i);
    setSel(null);
    setMsg(null);
  }
  function label(d: Device) {
    if (sel === null) return;
    const containing = ranges.map((r, i) => (r.has(sel) ? i : -1)).filter((i) => i >= 0);
    const open = containing.filter((i) => !f.includes(i));
    const hit = open.find((i) => p.spans[i].accept.includes(d));
    const word = tokens[sel].replace(/[^\w']/g, "");
    if (hit !== undefined) {
      setFound(found.map((x, j) => (j === pi ? [...x, hit] : x)));
      setMsg({ tone: "good", text: `✓ ${d[0].toUpperCase() + d.slice(1)}: "${p.spans[hit].phrase}". ${p.spans[hit].why}` });
      setSel(null);
      return;
    }
    setWrong(wrong.map((x, j) => (j === pi ? x + 1 : x)));
    if (open.length > 0) setMsg({ tone: "ok", text: `There is a device hiding around "${word}", but it isn't ${d}. Look again: what is the writer doing with sound, comparison or form?` });
    else if (containing.length > 0) setMsg({ tone: "ok", text: `You've already found the device on "${word}".` });
    else if (d === "simile" && norm(word) === "like") setMsg({ tone: "bad", text: "Careful: not every 'like' makes a simile. A simile compares two different things." });
    else setMsg({ tone: "bad", text: `No hidden device on "${word}". Try a different word.` });
  }

  const tokenClass = (i: number) => {
    const span = shownSpans.find((s) => ranges[s].has(i));
    if (span !== undefined) return `${HUE[p.spans[span].accept[0]]} text-slate-900`;
    return "hover:bg-indigo-100";
  };

  return (
    <Frame
      title="Device spotter: find the hidden techniques"
      emoji="🕵️"
      caption={
        <>
          Spotting a device is only step one. Examiners reward the <b>effect</b>: what the technique makes you see, hear or feel, and why the writer wanted that. So don&apos;t stop at &lsquo;this is a simile&rsquo;. Say what the comparison suggests.
        </>
      }
    >
      <div className="flex flex-wrap gap-2">
        {PASSAGES.map((x, i) => (
          <Chip key={x.id} on={pi === i} onClick={() => choose(i)}>
            {x.title.split(" (")[0]} · {found[i].length}/{x.spans.length}
          </Chip>
        ))}
      </div>

      <Step n={1}>Tap a word that you think is part of a device</Step>
      <figure className="rounded-xl border border-amber-200 bg-[#fffaf0] p-3">
        <div className="font-serif text-[16.5px] leading-[2.4] text-slate-800">
          {tokens.map((t, i) =>
            !t.trim() ? (
              t.includes("\n") ? <br key={i} /> : <span key={i}> </span>
            ) : (
              <button
                key={i}
                type="button"
                onClick={() => { setSel(i); setMsg(null); }}
                aria-pressed={sel === i}
                className={`min-h-10 rounded px-0.5 transition ${tokenClass(i)} ${sel === i ? "ring-2 ring-indigo-600" : ""}`}
              >
                {t}
              </button>
            ),
          )}
        </div>
        <figcaption className="mt-1 text-xs italic text-amber-800/80">{p.source}</figcaption>
      </figure>

      <Step n={2}>{sel === null ? "Then choose a label" : `Label "${tokens[sel].replace(/[^\w']/g, "")}" as…`}</Step>
      <div className="flex flex-wrap gap-1.5" role="group" aria-label="Device labels">
        {DEVICES.map((d) => (
          <Chip key={d} onClick={() => label(d)} disabled={sel === null} className="capitalize">
            <span className={`mr-1 inline-block h-2.5 w-2.5 rounded-full ${HUE[d]}`} aria-hidden />
            {d}
          </Chip>
        ))}
      </div>
      {msg && <div className="mt-3"><Note tone={msg.tone}>{msg.text}</Note></div>}

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className="rounded-xl bg-white px-3 py-2 text-sm font-semibold text-slate-700 ring-1 ring-slate-200">
          Found {f.length}/{p.spans.length} · Misses {wrong[pi]}
        </span>
        <Action tone="light" onClick={() => setRevealed(revealed.map((r, j) => (j === pi ? !r : r)))}>{revealed[pi] ? "Hide answers" : "Reveal all"}</Action>
      </div>
      {f.length === p.spans.length && !revealed[pi] && (
        <div className="mt-3"><Note tone="good">🎉 All {p.spans.length} found{wrong[pi] === 0 ? " with no misses" : ""}! Now pick ONE device and explain its effect in a sentence.</Note></div>
      )}
      {revealed[pi] && (
        <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
          {p.spans.map((s, i) => (
            <li key={i}>
              <span className={`rounded px-1 font-semibold capitalize ${HUE[s.accept[0]]}`}>{s.accept.join(" / ")}</span> &ldquo;{s.phrase}&rdquo;: {s.why}
            </li>
          ))}
        </ul>
      )}
    </Frame>
  );
}

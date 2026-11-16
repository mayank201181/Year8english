"use client";

import { useState } from "react";
import { Chip, Frame, Note, Step } from "./ui";
import { proseToScript, type ScriptItem } from "./scriptParse";

const SNIPPETS = [
  {
    id: "tempest",
    label: "The storm (The Tempest)",
    scene: "SCENE 1. The shore of Prospero's island. A storm rages.",
    prose: `Thunder rolled across the island. Miranda ran down to the shore, her hair whipping in the wind.
"Father, the ship! It's breaking apart!" she cried.
Prospero stood perfectly still. "Be calm," he said. "No harm is done."
Miranda stared at him. "But I heard them screaming..." she whispered.
"Sit down, child," said Prospero. "Is it not time you knew who you really are?"`,
  },
  {
    id: "juliet",
    label: "Banished (Romeo and Juliet)",
    scene: "SCENE 1. Juliet's bedroom, Verona. Evening.",
    prose: `The Nurse burst into Juliet's room, wringing her hands. Juliet looked up from the window.
"What news? Why do you look so pale?" asked Juliet.
"He's gone," sobbed the Nurse. "Banished. Romeo is banished."
Juliet gripped the curtain. "Banished? That word is worse than death," she said.
The Nurse sat down heavily on the bed. "Shall I find him for you?" she muttered.
Juliet nodded slowly.`,
  },
  {
    id: "hawker",
    label: "The tissue packet (Singapore)",
    scene: "SCENE 1. A crowded hawker centre in Singapore. Lunchtime.",
    prose: `The hawker centre was packed. Priya balanced two bowls of laksa and searched for a seat.
"Over here!" shouted Arjun, waving a packet of tissues.
Priya squeezed past an uncle with a tray of satay. "You choped a table with a packet of tissues?" she asked.
"It's the law," said Arjun. "Everybody knows that."
Priya laughed and sat down.`,
  },
];

const CONVENTIONS = [
  ["Scene heading", "Tells the director where and when, once, briefly, at the top."],
  ["NAMES IN CAPITALS", "The character's name, then the line. No speech marks and no 'said': the actor simply speaks."],
  ["Stage directions", "In brackets and italics, in the present tense ('Miranda runs', not 'Miranda ran'), because a script describes what happens now, on stage, every night."],
  ["Acting notes", "A short note like (whispering) replaces 'she whispered'. Use them sparingly and trust the actor."],
  ["Pauses and beats", "A (Pause.) after a question lets tension build and gives the other character time to react. Silence is a tool."],
];

function Badge({ n, show }: { n: number; show: boolean }) {
  if (!show) return null;
  return <span className="ml-1 inline-grid h-5 w-5 shrink-0 place-items-center rounded-full bg-amber-400 align-middle text-[11px] font-bold not-italic text-amber-950" aria-label={`Convention ${n}`}>{n}</span>;
}

export function ScriptFormatter() {
  const [src, setSrc] = useState(0); // index into SNIPPETS, or -1 for your own
  const [own, setOwn] = useState(`"Have you finished the commentary?" asked Mr Lee.\nZara shook her head. "I'm still on the first paragraph," she mumbled.\n"Then you had better get going," said Mr Lee.`);
  const [dirs, setDirs] = useState(true);
  const [pauses, setPauses] = useState(false);
  const [tense, setTense] = useState(true);
  const [explain, setExplain] = useState(true);

  const prose = src >= 0 ? SNIPPETS[src].prose : own;
  const scene = src >= 0 ? SNIPPETS[src].scene : "SCENE 1. [Where? When?]";
  const { items, changed } = proseToScript(prose);

  // Insert pauses after questions and after trailing-off lines.
  const shown: (ScriptItem | { kind: "pause"; text: string })[] = [];
  items.forEach((it, i) => {
    if (it.kind === "dir" && !dirs) return;
    shown.push(dirs || it.kind !== "line" ? it : { ...it, how: undefined });
    const next = items[i + 1];
    if (pauses && dirs && it.kind === "line" && next?.kind === "line") {
      if (/\.\.\.|…/.test(it.text)) shown.push({ kind: "pause", text: "Beat." });
      else if (/\?$/.test(it.text)) shown.push({ kind: "pause", text: "Pause." });
    }
  });

  const seen = new Set<number>();
  const first = (n: number) => {
    if (!explain || seen.has(n)) return false;
    seen.add(n);
    return true;
  };

  return (
    <Frame
      title="Script formatter: from page to stage"
      emoji="🎬"
      caption={
        <>
          A novel <b>tells</b> the reader what happened; a script <b>shows</b> actors what to do. So &lsquo;said&rsquo; disappears, speech marks vanish, narration becomes short <b>present-tense stage directions</b>, and feelings move into how the line is spoken. A common mistake is writing a novel with names in front: if a stage direction can&apos;t be acted or seen, cut it.
        </>
      }
    >
      <Step n={1}>Choose some prose (or write your own)</Step>
      <div className="flex flex-wrap gap-2">
        {SNIPPETS.map((s, i) => (
          <Chip key={s.id} on={src === i} onClick={() => setSrc(i)}>{s.label}</Chip>
        ))}
        <Chip on={src === -1} onClick={() => setSrc(-1)}>✏️ My own</Chip>
      </div>

      <div className="mt-3 grid gap-3 md:grid-cols-2">
        <div>
          <p className="mb-1 text-xs font-bold uppercase tracking-wide text-slate-500">Prose (novel style)</p>
          {src >= 0 ? (
            <div className="whitespace-pre-wrap rounded-xl border border-amber-200 bg-[#fffaf0] p-3 font-serif text-[15px] leading-relaxed text-slate-800">{prose}</div>
          ) : (
            <label className="block">
              <span className="sr-only">Your prose, with speech in quotation marks</span>
              <textarea
                value={own}
                onChange={(e) => setOwn(e.target.value)}
                rows={8}
                className="w-full rounded-xl border border-amber-200 bg-[#fffaf0] p-3 font-serif text-[15px] leading-relaxed text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder={'Use speech marks and tags, e.g. "Wait!" cried Ana.'}
              />
              <span className="text-xs text-slate-500">Put speech in &ldquo;quotation marks&rdquo; with a tag like &lsquo;said Ana&rsquo;. Nothing you type leaves this page.</span>
            </label>
          )}
        </div>

        <div>
          <p className="mb-1 text-xs font-bold uppercase tracking-wide text-slate-500">Script layout</p>
          <div className="rounded-xl bg-white p-3 font-mono text-[13.5px] leading-relaxed text-slate-800 ring-1 ring-slate-200" aria-live="polite">
            <p className="mb-2 font-bold uppercase tracking-wide">
              {scene}
              <Badge n={1} show={first(1)} />
            </p>
            {shown.map((it, i) =>
              it.kind === "line" ? (
                <div key={i} className="mb-1.5 grid grid-cols-[minmax(0,6.5rem)_1fr] gap-2">
                  <span className="break-words font-bold">
                    {it.who}
                    <Badge n={2} show={first(2)} />
                  </span>
                  <span>
                    {it.how && (
                      <i className="text-slate-500">
                        ({it.how})<Badge n={4} show={first(4)} />{" "}
                      </i>
                    )}
                    {it.text}
                  </span>
                </div>
              ) : it.kind === "dir" ? (
                <p key={i} className="mb-1.5 pl-4 italic text-slate-600 sm:pl-8">
                  (
                  {it.segs.map((s, j) =>
                    s.changed && tense ? (
                      <mark key={j} className="rounded bg-emerald-100 px-0.5 text-emerald-900">{s.t}</mark>
                    ) : (
                      <span key={j}>{s.t}</span>
                    ),
                  )}
                  )<Badge n={3} show={first(3)} />
                </p>
              ) : (
                <p key={i} className="mb-1.5 pl-4 italic text-rose-700 sm:pl-8">
                  ({it.text})<Badge n={5} show={first(5)} />
                </p>
              ),
            )}
            {shown.length === 0 && <p className="text-slate-400">Type some prose with speech in quotation marks…</p>}
          </div>
        </div>
      </div>

      <Step n={2}>Change the staging</Step>
      <div className="flex flex-wrap gap-2">
        <Chip on={dirs} onClick={() => setDirs(!dirs)}>Stage directions {dirs ? "on" : "off"}</Chip>
        <Chip on={pauses} onClick={() => setPauses(!pauses)}>Add pauses &amp; beats</Chip>
        <Chip on={tense} onClick={() => setTense(!tense)}>Highlight tense changes</Chip>
        <Chip on={explain} onClick={() => setExplain(!explain)}>Number the conventions</Chip>
      </div>
      <div className="mt-3 space-y-2">
        {!dirs && <Note tone="ok">Dialogue only: notice how much the audience now has to guess. Who is calm? Who is crying? Directions carry what the words don&apos;t.</Note>}
        {tense && changed > 0 && dirs && <Note tone="info">I changed <b>{changed}</b> verb{changed === 1 ? "" : "s"} into the present tense (highlighted green). Read the directions through: an automatic converter can miss some.</Note>}
        {explain && (
          <ol className="space-y-1.5 text-sm">
            {CONVENTIONS.map(([h, d], i) => (
              <li key={h} className="flex gap-2">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-amber-400 text-[11px] font-bold text-amber-950">{i + 1}</span>
                <span><b>{h}:</b> {d}{i === 4 && !pauses ? " (Turn on 'Add pauses' to see it.)" : ""}</span>
              </li>
            ))}
          </ol>
        )}
      </div>
    </Frame>
  );
}

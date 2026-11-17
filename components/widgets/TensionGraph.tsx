"use client";

import { useRef, useState } from "react";
import { Action, Chip, Frame, Note, Step } from "./ui";

interface Stage {
  name: string;
  where: string;
  event: string;
  model: number; // 0–10
}
type Mode = "freytag" | "imr";
interface Story {
  id: string;
  label: string;
  freytag: Stage[];
  imr: Stage[];
}

const STORIES: Story[] = [
  {
    id: "rj",
    label: "Romeo and Juliet",
    freytag: [
      { name: "Exposition", where: "Prologue, 1.1–1.4", event: "The Prologue gives away the ending ('A pair of star-crossed lovers take their life'). Then a street brawl, the Prince's death threat, and Romeo moping over Rosaline.", model: 3 },
      { name: "Rising action", where: "1.5–2.6", event: "Romeo and Juliet meet at the Capulet feast, the balcony scene, and Friar Laurence marries them in secret.", model: 6 },
      { name: "Climax", where: "3.1", event: "The turning point. Tybalt kills Mercutio ('A plague o' both your houses!') and Romeo kills Tybalt and is banished. 'O, I am fortune's fool!'", model: 9 },
      { name: "Falling action", where: "3.5–4.5", event: "Capulet forces Juliet to marry Paris; the Friar's sleeping-potion plan; the family find Juliet 'dead'. Dramatic irony keeps us on edge, so the tension hardly falls.", model: 7 },
      { name: "Resolution", where: "5.1–5.3", event: "The Friar's letter never arrives and both lovers die in the tomb (the catastrophe). Then the release: the fathers are reconciled. 'For never was a story of more woe'.", model: 4 },
    ],
    imr: [
      { name: "Hook: mid-action", where: "Open at 3.1", event: "Imagine opening with swords drawn: Mercutio is bleeding in the street and Romeo is about to go after Tybalt.", model: 8 },
      { name: "Flashback", where: "1.5", event: "Cut back three days: a masked feast, and two teenagers meeting for the first time. We already know it ends in blood, so every sweet moment hurts.", model: 4 },
      { name: "Rising action", where: "3.5–4.3", event: "Back to the present: banishment, a forced marriage, a desperate potion plan.", model: 7 },
      { name: "Climax", where: "5.3", event: "The tomb: Romeo drinks the poison moments before Juliet wakes.", model: 10 },
      { name: "Resolution", where: "5.3 (the end)", event: "The Prince's final judgement and the fathers' reconciliation.", model: 3 },
    ],
  },
  {
    id: "cc",
    label: "A Christmas Carol",
    freytag: [
      { name: "Exposition", where: "Stave 1", event: "Christmas Eve. Scrooge, 'a squeezing, wrenching, grasping, scraping, clutching, covetous, old sinner!', snaps 'Bah! Humbug!' and refuses to give to charity.", model: 2 },
      { name: "Rising action", where: "Staves 1–3", event: "Marley's ghost appears in chains, then the Ghosts of Christmas Past and Present show Scrooge his lonely past and the Cratchits' poor but loving Christmas.", model: 5 },
      { name: "Climax", where: "Stave 4", event: "The silent Ghost of Christmas Yet to Come shows Scrooge his own neglected grave. He begs for the chance to change.", model: 9 },
      { name: "Falling action", where: "Stave 5", event: "Scrooge wakes in his own bed. It is Christmas morning and there is still time! He sends the prize turkey to the Cratchits.", model: 4 },
      { name: "Resolution", where: "Stave 5", event: "He raises Bob's salary, and to Tiny Tim, 'who did NOT die, he was a second father.'", model: 1 },
    ],
    imr: [
      { name: "Hook: mid-action", where: "Open at Stave 4", event: "Imagine opening in a dark churchyard: a terrified old man scrubbing at the name on a neglected gravestone.", model: 8 },
      { name: "Flashback", where: "Stave 1", event: "Rewind to Christmas Eve. Who is this man, and why does nobody mourn him?", model: 3 },
      { name: "Rising action", where: "Staves 1–3", event: "Marley's chains, the past, the Cratchits' Christmas. The reader starts to guess where this is heading.", model: 6 },
      { name: "Climax", where: "Stave 4", event: "Back at the grave, we finally understand: it is Scrooge's own.", model: 10 },
      { name: "Resolution", where: "Stave 5", event: "Christmas morning and a second chance.", model: 2 },
    ],
  },
];

const X = [40, 100, 160, 220, 280];
const ty = (t: number) => 170 - t * 15;

function smooth(vals: number[]): string {
  const p = vals.map((v, i) => [X[i], ty(v)]);
  let d = `M${p[0][0]},${p[0][1]}`;
  for (let i = 0; i < p.length - 1; i++) {
    const p0 = p[Math.max(0, i - 1)], p1 = p[i], p2 = p[i + 1], p3 = p[Math.min(p.length - 1, i + 2)];
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C${c1[0].toFixed(1)},${c1[1].toFixed(1)} ${c2[0].toFixed(1)},${c2[1].toFixed(1)} ${p2[0]},${p2[1]}`;
  }
  return d;
}

function pacing(vals: number[], i: number): string {
  if (i === 0) return vals[0] >= 7 ? "You open at high tension: the reader is thrown straight into the action (that's in medias res)." : vals[0] <= 3 ? "A calm opening: time to meet the characters and setting before trouble starts." : "A medium-tension opening: there's a hint of trouble from the start.";
  const d = vals[i] - vals[i - 1];
  if (d >= 4) return `A steep climb into the ${i === 4 ? "ending" : "next stage"}: events pile up fast, so the pace feels breathless. Writers use short scenes, short sentences and cliffhangers here.`;
  if (d >= 1) return "A gradual build: slower pacing gives time for suspense, character and setting to grow.";
  if (d === 0) return "A plateau: tension holds steady. Fine for a moment, but a long flat stretch can make readers drift.";
  if (d <= -4) return "A sudden release: the big moment is over and the reader can breathe. Pace slows; reflection takes over.";
  return "A gentle dip: a breathing space, often a quieter scene before the next rise.";
}

export function TensionGraph() {
  const [si, setSi] = useState(0);
  const [mode, setMode] = useState<Mode>("freytag");
  const [vals, setVals] = useState<number[]>([5, 5, 5, 5, 5]);
  const [sel, setSel] = useState(0);
  const [compare, setCompare] = useState(false);
  const [drag, setDrag] = useState<number | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const stages = STORIES[si][mode];
  const model = stages.map((s) => s.model);
  const matches = vals.filter((v, i) => Math.abs(v - model[i]) <= 2).length;
  const peak = vals.indexOf(Math.max(...vals));

  function setVal(i: number, v: number) {
    const nv = Math.max(0, Math.min(10, v));
    setVals((vs) => vs.map((x, j) => (j === i ? nv : x)));
    setSel(i);
  }
  function onMove(e: React.PointerEvent<SVGSVGElement>) {
    if (drag === null || !svgRef.current) return;
    const r = svgRef.current.getBoundingClientRect();
    const vy = ((e.clientY - r.top) / r.height) * 200;
    setVal(drag, Math.round((170 - vy) / 15));
  }

  const shape =
    peak === 2 ? "Your peak is in the middle: the classic pyramid shape." : peak >= 3 ? "Your peak comes late: typical of thrillers, and of tragedies, whose catastrophe comes near the end." : peak === 0 ? "Your highest point is the opening: that's in medias res." : "Your peak comes early: make sure something keeps the reader hooked afterwards.";

  return (
    <Frame
      title="Tension graph: shape the story"
      emoji="📈"
      caption={
        <>
          <b>Freytag&apos;s pyramid</b> tells a story in order: exposition → rising action → climax (the turning point) → falling action → resolution. <b>In medias res</b> (Latin for &lsquo;into the middle of things&rsquo;) opens at a dramatic moment, then uses flashback to fill in the backstory. Either way, writers control <b>pace</b>: steep rises feel fast and breathless; plateaus and dips give the reader time to think.
        </>
      }
    >
      <div className="flex flex-wrap gap-2">
        {STORIES.map((s, i) => (
          <Chip key={s.id} on={si === i} onClick={() => { setSi(i); setCompare(false); }}>
            {s.label}
          </Chip>
        ))}
        <span className="mx-1 hidden w-px bg-slate-200 sm:block" />
        <Chip on={mode === "freytag"} onClick={() => { setMode("freytag"); setCompare(false); }}>Freytag&apos;s pyramid</Chip>
        <Chip on={mode === "imr"} onClick={() => { setMode("imr"); setCompare(false); }}>In medias res</Chip>
      </div>

      <Step>Drag the dots (or use ▲ ▼) to show how tense each stage feels</Step>
      <svg
        ref={svgRef}
        viewBox="0 0 320 200"
        className="w-full select-none rounded-xl bg-white ring-1 ring-slate-200"
        onPointerMove={onMove}
        onPointerUp={() => setDrag(null)}
        onPointerCancel={() => setDrag(null)}
        role="img"
        aria-label={`Tension graph. Your values: ${stages.map((s, i) => `${s.name} ${vals[i]}`).join(", ")}`}
      >
        {[0, 5, 10].map((t) => (
          <g key={t}>
            <line x1="22" x2="300" y1={ty(t)} y2={ty(t)} stroke="#e2e8f0" />
            <text x="14" y={ty(t) + 3} fontSize="8" textAnchor="middle" fill="#94a3b8">{t}</text>
          </g>
        ))}
        <text x="6" y="95" fontSize="8" fill="#64748b" transform="rotate(-90 6 95)" textAnchor="middle">tension</text>
        <text x="160" y="194" fontSize="8" fill="#64748b" textAnchor="middle">{mode === "freytag" ? "time (in story order) →" : "order of telling →"}</text>
        {compare && <path d={smooth(model)} fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="6 4" />}
        <path d={smooth(vals)} fill="none" stroke="#4f46e5" strokeWidth="3" />
        {vals.map((v, i) => (
          <g key={i}>
            <circle
              cx={X[i]}
              cy={ty(v)}
              r="20"
              fill="transparent"
              style={{ touchAction: "none", cursor: "grab" }}
              onPointerDown={(e) => { (e.currentTarget.ownerSVGElement as SVGSVGElement).setPointerCapture(e.pointerId); setDrag(i); setSel(i); }}
            />
            <circle cx={X[i]} cy={ty(v)} r={sel === i ? 9 : 7} fill={sel === i ? "#4f46e5" : "#818cf8"} stroke="white" strokeWidth="2" pointerEvents="none" />
            {compare && <circle cx={X[i]} cy={ty(model[i])} r="4" fill="#f59e0b" pointerEvents="none" />}
          </g>
        ))}
      </svg>

      <div className="mt-2 grid grid-cols-5 gap-1">
        {stages.map((s, i) => (
          <div key={i} className={`flex flex-col items-center rounded-xl p-1 ${sel === i ? "bg-indigo-100" : ""}`}>
            <button type="button" aria-label={`Raise tension at ${s.name}`} onClick={() => setVal(i, vals[i] + 1)} className="grid h-10 w-full max-w-14 place-items-center rounded-lg bg-white font-bold text-slate-700 ring-1 ring-slate-200">▲</button>
            <span className="my-0.5 text-sm font-bold tabular-nums text-indigo-700">{vals[i]}</span>
            <button type="button" aria-label={`Lower tension at ${s.name}`} onClick={() => setVal(i, vals[i] - 1)} className="grid h-10 w-full max-w-14 place-items-center rounded-lg bg-white font-bold text-slate-700 ring-1 ring-slate-200">▼</button>
            <button type="button" onClick={() => setSel(i)} className="mt-1 min-h-10 w-full rounded-lg px-0.5 text-center text-[11px] font-semibold leading-tight text-slate-700 underline decoration-dotted underline-offset-2 sm:text-xs">
              {s.name}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-3 rounded-xl bg-white p-3 ring-1 ring-slate-200" aria-live="polite">
        <p className="text-xs font-bold uppercase tracking-wide text-indigo-600">
          {stages[sel].name} · {stages[sel].where}
        </p>
        <p className="mt-1 text-sm text-slate-800">{stages[sel].event}</p>
        <p className="mt-2 text-sm text-slate-600"><b>Pacing:</b> {pacing(vals, sel)}</p>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        <Action tone="green" onClick={() => setCompare(true)}>Compare with a model reading</Action>
        <Action tone="light" onClick={() => { setVals([5, 5, 5, 5, 5]); setCompare(false); }}>Reset</Action>
      </div>
      {compare && (
        <div className="mt-3">
          <Note tone={matches >= 4 ? "good" : matches >= 2 ? "ok" : "bad"}>
            <b>{matches} of 5</b> stages within 2 points of the model (dashed orange). {shape} Disagreeing is allowed, as long as you can justify it with evidence from the text.
          </Note>
        </div>
      )}
    </Frame>
  );
}

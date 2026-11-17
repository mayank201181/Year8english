"use client";

import { useState } from "react";
import { Chip, Frame, Note, Step } from "./ui";

interface TellPrompt {
  id: string;
  telling: string;
  upgrades: [label: string, text: string, quality: "best" | "cliche" | "stuffed", why: string][];
}

const PROMPTS: TellPrompt[] = [
  {
    id: "nervous",
    telling: "Tariq was very nervous outside the headteacher's office.",
    upgrades: [
      [
        "Physical detail + sound",
        "Tariq stared at the scuffed linoleum, twisting his lanyard until the plastic clip bit into his thumb; every tick of the corridor clock sounded like a gavel.",
        "best",
        "Never uses the word 'nervous'! Concrete action ('twisting his lanyard'), touch ('bit into his thumb') and an apt simile ('like a gavel') make the reader feel the dread.",
      ],
      [
        "Adjective stuffing",
        "Anxious, terrified, petrified, sweaty-palmed Tariq sat nervously on the scary wooden chair.",
        "stuffed",
        "Four near-synonym adjectives plus 'nervously' still TELL rather than show — piling on thesaurus words weakens prose.",
      ],
      [
        "Worn-out cliché",
        "Tariq had butterflies in his stomach and his heart was beating a million miles an hour as he sweated buckets.",
        "cliche",
        "Three dead clichés in one sentence ('butterflies', 'million miles an hour', 'sweated buckets'): readers skim right past phrases they've heard a thousand times.",
      ],
    ],
  },
  {
    id: "hawker",
    telling: "The hawker centre was hot, noisy and smelled nice.",
    upgrades: [
      [
        "Thesaurus overload",
        "The sweltering, cacophonous, olfactory gastronomic establishment was exceedingly bustling with hungry patrons.",
        "stuffed",
        "Sounds like a swallowed dictionary! Over-elaborate Latinate words kill sensory immediacy.",
      ],
      [
        "Five senses + strong verbs",
        "Ceiling fans chopped lazily at air thick with charred garlic and lime; woks clashed, plastic trays clattered onto damp tabletops, and condensation slid down Mei's sugarcane cup.",
        "best",
        "Strong verbs ('chopped', 'clashed', 'slid') and four distinct senses (smell, sound, touch, sight) put the reader right at the table.",
      ],
      [
        "Vague telling",
        "People were eating delicious food everywhere and talking loudly because it was a super busy evening.",
        "cliche",
        "'Delicious', 'everywhere' and 'super busy' give the reader's imagination nothing specific to picture.",
      ],
    ],
  },
  {
    id: "storm",
    telling: "It started to rain really hard and the street looked gloomy.",
    upgrades: [
      [
        "Pathetic fallacy + rhythm",
        "One fat drop split on the hot tarmac. Then another. Within ten seconds, the afternoon bruised dark violet and the monsoon hammered the tin awnings in a single deafening roar.",
        "best",
        "Short minor/simple sentences ('Then another.') control the pace before a longer sentence unleashes the downpour, and 'bruised' personifies the sky.",
      ],
      [
        "Cliché storm",
        "It was a dark and stormy afternoon and suddenly it began raining cats and dogs.",
        "cliche",
        "'Dark and stormy' and 'raining cats and dogs' are textbook clichés — examiners specifically warn against them.",
      ],
      [
        "Runaway action plot",
        "Rain fell so a lightning bolt exploded a bus and then ninjas chased me onto a speedboat!",
        "stuffed",
        "Classic descriptive-writing trap: turning a description task into a frantic action thriller leaves no room for atmosphere or detail.",
      ],
    ],
  },
];

const SHOTS: { id: string; label: string; zoom: string; text: string; note: string }[] = [
  {
    id: "wide",
    label: "1. Wide establishing shot",
    zoom: "1× Panorama",
    text: "Dusk settled over Marina Barrage like warm ink, softening the glass towers across the bay while dozens of kites dipped and tangled against the apricot sky.",
    note: "Start wide: establish light, weather, time of day and overall mood in 2–3 sentences.",
  },
  {
    id: "mid",
    label: "2. Mid shot (one corner)",
    zoom: "3× Focus",
    text: "Near the stone parapet, an old uncle knelt beside a battered biscuit tin of spools, whistling through his teeth as he untangled a snapped red kite-string.",
    note: "Pan in to one human figure or focal point so the scene doesn't stay a static postcard.",
  },
  {
    id: "close",
    id2: "close",
    label: "3. Extreme close-up",
    zoom: "10× Macro detail",
    text: "A single groove of white salt crusted the knuckle of his thumb where forty years of taut nylon line had sawed into the skin.",
    note: "Zoom right in on one tiny, telling texture — this is where descriptive writing feels real and unforgettable.",
  } as { id: string; label: string; zoom: string; text: string; note: string },
  {
    id: "shift",
    label: "4. Temporal / weather shift",
    zoom: "Return wide (changed)",
    text: "The first harbour lights blinked on across the water. One by one the kites reeled down into the grass, leaving only the wind humming through empty railings.",
    note: "End by returning wide after a small shift in light or weather — structure without needing a car chase!",
  },
];

export function ShowDontTellStudio() {
  const [pi, setPi] = useState(0);
  const [picked, setPicked] = useState<Record<string, number>>({});
  const [shot, setShot] = useState(0);

  const p = PROMPTS[pi];
  const choice = picked[p.id];

  return (
    <Frame
      title="Show, don't tell & camera-zoom studio"
      emoji="🎨"
      caption={
        <>
          Don&apos;t tell the reader <i>&lsquo;it was scary&rsquo;</i> — give them the scuffed floor, the ticking clock and the cold thumb so they feel scared themselves. Choose <b>one precise verb</b> over three thesaurus adjectives, and structure a whole description like a <b>camera lens</b>: wide → mid → close-up → shift.
        </>
      }
    >
      <Step n={1}>Pick a flat &lsquo;telling&rsquo; sentence to upgrade</Step>
      <div className="flex flex-wrap gap-2">
        {PROMPTS.map((item, i) => (
          <Chip key={item.id} on={pi === i} onClick={() => setPi(i)}>
            Draft {i + 1} {picked[item.id] !== undefined && (item.upgrades[picked[item.id]][2] === "best" ? "✓" : "•")}
          </Chip>
        ))}
      </div>

      <div className="mt-2.5 rounded-xl border border-rose-200 bg-rose-50/70 p-3 text-sm text-rose-950">
        <span className="text-xs font-bold uppercase tracking-wide text-rose-700">❌ Flat &lsquo;telling&rsquo; draft:</span>
        <p className="mt-0.5 font-serif text-[16px]">{p.telling}</p>
      </div>

      <Step n={2}>Choose the strongest &lsquo;showing&rsquo; upgrade (watch out for clichés and thesaurus stuffing!)</Step>
      <div className="grid gap-2">
        {p.upgrades.map(([, text, quality], idx) => (
          <Chip key={idx} on={choice === idx} onClick={() => setPicked({ ...picked, [p.id]: idx })} className="font-normal">
            <span className="font-serif text-[15px]">{text}</span>
            {choice === idx ? (quality === "best" ? " ✓" : " ✗") : ""}
          </Chip>
        ))}
      </div>

      {choice !== undefined && (
        <div className="mt-2.5">
          <Note tone={p.upgrades[choice][2] === "best" ? "good" : "bad"}>
            <b>{p.upgrades[choice][0]}:</b> {p.upgrades[choice][3]}
          </Note>
        </div>
      )}

      <Step n={3}>Practise structuring a whole description with the 4-shot camera lens</Step>
      <div className="flex flex-wrap gap-1.5">
        {SHOTS.map((s, i) => (
          <Chip key={s.id} on={shot === i} onClick={() => setShot(i)}>
            {s.label}
          </Chip>
        ))}
      </div>
      <div className="mt-2.5 rounded-xl border border-sky-200 bg-white p-3.5 shadow-sm">
        <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wide text-sky-700">
          <span>📷 {SHOTS[shot].label}</span>
          <span className="rounded-full bg-sky-100 px-2 py-0.5">{SHOTS[shot].zoom}</span>
        </div>
        <p className="mt-2 font-serif text-[16.5px] leading-relaxed text-slate-800">{SHOTS[shot].text}</p>
        <p className="mt-2 text-xs text-slate-600"><b>Why this paragraph goes here:</b> {SHOTS[shot].note}</p>
      </div>
    </Frame>
  );
}

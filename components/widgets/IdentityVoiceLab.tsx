"use client";

import { useState } from "react";
import { Action, Chip, Frame, Note, Step } from "./ui";

interface IdentityCase {
  id: string;
  title: string;
  poet: string;
  extract: string;
  worldA: [heading: string, detail: string];
  worldB: [heading: string, detail: string];
  pivotLabel: string;
  pivotDetail: string;
  compQuestion: string;
  options: [sentence: string, grade: "top" | "mid" | "low", why: string][];
}

const CASES: IdentityCase[] = [
  {
    id: "mckay",
    title: "The Tropics in New York (1922)",
    poet: "Claude McKay",
    extract: "Bananas ripe and green, and ginger-root,\nCocoa in pods and alligator pears…\nSet in the window, bringing memories\nOf fruit-trees laden by low-singing rills…\nAnd, hungry for the old, familiar ways,\nI turned aside and bowed my head and wept.",
    worldA: ["Present: New York street", "Imported tropical fruit sits behind cold shop-window glass — visible, commercial, separated from its roots."],
    worldB: ["Memory: Jamaican homeland", "Living 'fruit-trees', 'dewy dawns' and 'mystical blue skies / In benediction over nun-like hills' — sacred, sensory abundance."],
    pivotLabel: "Stanza 3 shift: sight → physical grief",
    pivotDetail: "First-person pronouns ('My eyes', 'my body', 'I wept') flood stanza 3: 'hungry' turns literal fruit into a metaphor for aching homesickness.",
    compQuestion: "Which comparative sentence best links McKay's method to another poem of place and belonging?",
    options: [
      ["Both 'The Tropics in New York' and 'Island Man' are about the Caribbean and moving to a big city.", "low", "True, but this only compares topic/content. Top marks require comparing poetic methods and their effects."],
      ["McKay uses a rhyme scheme of ABAB, whereas Grace Nichols uses free verse in 'Island Man'.", "mid", "Names two forms with 'whereas', which is a start, but stops before explaining what either form DOES to the meaning."],
      ["Whereas McKay encloses his speaker's grief inside regular ABAB quatrains until emotion overflows in 'wept', Nichols uses unpunctuated free verse in 'Island Man' so Caribbean sea-dreams spill directly into grey London traffic.", "top", "Top-band integrated comparison: pairs both poets' structural choices and links each directly to the experience of migration."],
    ],
  },
  {
    id: "dunbar",
    title: "We Wear the Mask (1895)",
    poet: "Paul Laurence Dunbar",
    extract: "We wear the mask that grins and lies,\nIt hides our cheeks and shades our eyes,—\nThis debt we pay to human guile;\nWith torn and bleeding hearts we smile,",
    worldA: ["Outward face: 'grins and lies'", "A forced public performance of cheerfulness demanded by a prejudiced society ('This debt we pay')."],
    worldB: ["Inner truth: 'torn and bleeding hearts'", "Collective hidden trauma shared across a whole community through the inclusive plural pronoun 'We' / 'our'."],
    pivotLabel: "Juxtaposition inside a single line",
    pivotDetail: "'With torn and bleeding hearts we smile' presses violent visceral imagery right up against 'smile' with no punctuation between them.",
    compQuestion: "Pick the strongest analytical comment on voice and identity here:",
    options: [
      ["Dunbar's collective pronoun 'We' turns private pain into a shared cultural survival strategy, while the harsh juxtaposition of 'bleeding hearts' and 'smile' exposes the cost of hiding one's true self.", "top", "Zooms in on both pronoun choice ('We') and juxtaposition, connecting method to historical and emotional truth."],
      ["Dunbar says people wear masks because they like pretending to be happy.", "low", "Misreads the tone: 'debt' and 'bleeding hearts' show the mask is a painful necessity, not a game."],
      ["Dunbar uses the rhyme 'lies' and 'eyes' to make the poem flow nicely.", "mid", "Spots a rhyme, but 'flow nicely' is a banned vague phrase — notice instead how rhyming 'lies' with 'eyes' links deceit to what is hidden."],
    ],
  },
  {
    id: "lazarus",
    title: "The New Colossus (1883)",
    poet: "Emma Lazarus",
    extract: "Not like the brazen giant of Greek fame,\nWith conquering limbs astride from land to land;\nHere at our sea-washed, sunset gates shall stand\nA mighty woman with a torch…\n'Give me your tired, your poor,\nYour huddled masses yearning to breathe free,'",
    worldA: ["Old World empire: 'brazen giant'", "The male Colossus of Rhodes — arrogant military conquest, 'pomp' and exclusion."],
    worldB: ["New World refuge: 'Mother of Exiles'", "A 'mighty woman' whose 'beacon-hand' welcomes the 'tired', 'poor' and 'huddled masses' into belonging."],
    pivotLabel: "Petrarchan volta at line 9: statue speaks",
    pivotDetail: "In the sestet, the silent bronze statue is given direct speech ('cries she / With silent lips'), commanding the old world to hand over those it rejected.",
    compQuestion: "Which statement best analyses Lazarus's use of form and voice?",
    options: [
      ["The poem has 14 lines so it is a sonnet about a big statue in America.", "low", "Feature-spotting without analysis of how the sonnet structure shapes the argument."],
      ["Lazarus uses a Petrarchan sonnet whose octave rejects Old World 'storied pomp' before the sestet's volta gives direct, imperative voice ('Give me…') to the Mother of Exiles herself.", "top", "Links the exact sonnet form (octave → volta → sestet) and imperative verbs to the poem's redefinition of national identity."],
      ["Lazarus uses the oxymoron 'silent lips' which is an interesting technique.", "mid", "Correctly spots the paradox/oxymoron, but 'interesting technique' explains nothing — unpack how the statue speaks symbolically without sound!"],
    ],
  },
];

export function IdentityVoiceLab() {
  const [ci, setCi] = useState(0);
  const [showPivot, setShowPivot] = useState(false);
  const [picked, setPicked] = useState<Record<string, number>>({});

  const c = CASES[ci];
  const p = picked[c.id];

  function selectCase(i: number) {
    setCi(i);
    setShowPivot(false);
  }

  return (
    <Frame
      title="Dual worlds & voice mapper"
      emoji="🌏"
      caption={
        <>
          Poems of identity and culture almost always hold <b>two worlds in tension</b>: here vs there, mother tongue vs Standard English, public mask vs private self. When comparing two poems, pair <b>both poets&apos; methods</b> (form, voice, imagery, shifts) rather than just saying both are about identity.
        </>
      }
    >
      <Step n={1}>Choose a poem to map</Step>
      <div className="flex flex-wrap gap-2">
        {CASES.map((item, i) => (
          <Chip key={item.id} on={ci === i} onClick={() => selectCase(i)}>
            {item.poet}: {item.title.split(" (")[0]}
          </Chip>
        ))}
      </div>

      <blockquote className="mt-3 whitespace-pre-line rounded-xl border-l-4 border-violet-400 bg-[#fffaf0] px-3.5 py-2.5 font-serif text-[16px] leading-relaxed text-slate-800">
        {c.extract}
        <cite className="mt-1 block font-sans text-xs font-semibold not-italic text-violet-800/80">{c.poet}, &lsquo;{c.title}&rsquo;</cite>
      </blockquote>

      <Step n={2}>Inspect the two worlds in tension</Step>
      <div className="grid gap-2.5 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-3 text-sm">
          <p className="text-xs font-bold uppercase tracking-wide text-slate-600">🏙️ {c.worldA[0]}</p>
          <p className="mt-1 leading-relaxed text-slate-800">{c.worldA[1]}</p>
        </div>
        <div className="rounded-xl border border-violet-200 bg-violet-50/70 p-3 text-sm">
          <p className="text-xs font-bold uppercase tracking-wide text-violet-700">🌺 {c.worldB[0]}</p>
          <p className="mt-1 leading-relaxed text-violet-950">{c.worldB[1]}</p>
        </div>
      </div>

      <div className="mt-2.5 rounded-xl border border-amber-200 bg-amber-50/80 p-3 text-sm">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="font-bold text-amber-900">⚡ Structural pivot: {c.pivotLabel}</span>
          <button
            type="button"
            onClick={() => setShowPivot(!showPivot)}
            className="rounded-lg bg-amber-600 px-2.5 py-1 text-xs font-bold text-white hover:bg-amber-700"
          >
            {showPivot ? "Hide detail" : "How it works →"}
          </button>
        </div>
        {showPivot && <p className="mt-1.5 leading-relaxed text-amber-950">{c.pivotDetail}</p>}
      </div>

      <Step n={3}>{c.compQuestion}</Step>
      <div className="grid gap-2">
        {c.options.map(([sentence, grade], idx) => (
          <Chip key={idx} on={p === idx} onClick={() => setPicked({ ...picked, [c.id]: idx })} className="font-normal">
            {sentence} {p === idx ? (grade === "top" ? "✓" : grade === "mid" ? "~" : "✗") : ""}
          </Chip>
        ))}
      </div>

      {p !== undefined && (
        <div className="mt-3 space-y-2">
          <Note tone={c.options[p][1] === "top" ? "good" : c.options[p][1] === "mid" ? "ok" : "bad"}>
            <b>{c.options[p][1] === "top" ? "Top-band method comparison!" : c.options[p][1] === "mid" ? "Halfway there — push from naming to effect." : "Content-only or misreading."}</b>{" "}
            {c.options[p][2]}
          </Note>
          {ci < CASES.length - 1 && (
            <Action tone="light" onClick={() => selectCase(ci + 1)}>Next poem →</Action>
          )}
        </div>
      )}
    </Frame>
  );
}

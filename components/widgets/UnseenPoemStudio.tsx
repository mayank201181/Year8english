"use client";

import { useState } from "react";
import { Action, Chip, Frame, Note, Step } from "./ui";

type StageKey = "thesis" | "zoom1" | "shift" | "close";

interface UnseenPoem {
  id: string;
  title: string;
  poet: string;
  text: string;
  clues: [badge: string, note: string][];
  parts: Record<StageKey, [text: string, score: 0 | 1 | 2][]>;
}

const POEMS: UnseenPoem[] = [
  {
    id: "adlestrop",
    title: "Adlestrop (1917)",
    poet: "Edward Thomas",
    text: "Yes. I remember Adlestrop—\nThe name, because one afternoon\nOf heat the express-train drew up there\nUnwontedly. It was late June.\n\nThe steam hissed. Someone cleared his throat.\nNo one left and no one came\nOn the bare platform. What I saw\nWas Adlestrop—only the name\n\nAnd willows, willow-herb, and grass,\nAnd meadowsweet, and haycocks dry,\nNo whit less still and lonely fair\nThan the high cloudlets in the sky.\n\nAnd for that minute a blackbird sang\nClose by, and round him, mistier,\nFarther and farther, all the birds\nOf Oxfordshire and Gloucestershire.",
    clues: [
      ["Opening caesura", "'Yes. I remember Adlestrop—' sounds like a quiet, conversational answer mid-thought."],
      ["Sound contrast", "Stanza 2's tiny human noises ('hissed', 'cleared his throat') give way to vast natural birdsong."],
      ["Widening lens", "Stanzas 3–4 pan outward from the station sign → wildflowers → one blackbird → two whole counties."],
    ],
    parts: {
      thesis: [
        ["In 'Adlestrop', Edward Thomas shows how an unplanned one-minute train stop opens out into an unforgettable moment of stillness and natural wonder; I'll trace how the sound and widening structure create that shift.", 2],
        ["This unseen poem is about a man on a train in June who stops at a station and sees plants and birds.", 1],
        ["'Adlestrop' has four stanzas with ABCB rhyme and uses onomatopoeia and enjambment.", 0],
      ],
      zoom1: [
        ["First, the abrupt caesura after 'Yes.' hooks the listener as if mid-conversation, while stanza two's short end-stopped clauses ('The steam hissed. Someone cleared his throat.') make the sudden silence palpable.", 2],
        ["In stanza two there is onomatopoeia in 'hissed', which helps the reader imagine the train.", 1],
        ["Nobody gets on or off the train because Adlestrop is a very boring station.", 0],
      ],
      shift: [
        ["Then in stanza three the poem pivots: polysyndeton ('And willows… And meadowsweet') slows time down, before stanza four widens cinematically from one blackbird 'Close by' to 'all the birds / Of Oxfordshire and Gloucestershire'.", 2],
        ["Next, Thomas lists lots of plants in stanza three and mentions two places at the end.", 1],
        ["At the end the train crashes, which is a dramatic twist.", 0],
      ],
      close: [
        ["Ultimately, Thomas suggests that beauty isn't found in rushing destinations, but in the unscheduled pauses when we actually stop and listen.", 2],
        ["Overall I liked this poem because it felt peaceful and calm.", 1],
        ["That is all the techniques I found in this poem, thank you.", 0],
      ],
    },
  },
  {
    id: "innisfree",
    title: "The Lake Isle of Innisfree (1890)",
    poet: "W. B. Yeats",
    text: "I will arise and go now, and go to Innisfree,\nAnd a small cabin build there, of clay and wattles made:\nNine bean-rows will I have there, a hive for the honey-bee,\nAnd live alone in the bee-loud glade.\n\nAnd I shall have some peace there, for peace comes dropping slow,\nDropping from the veils of the morning to where the cricket sings;\nThere midnight's all a glimmer, and noon a purple glow,\nAnd evening full of the linnet's wings.\n\nI will arise and go now, for always night and day\nI hear lake water lapping with low sounds by the shore;\nWhile I stand on the roadway, or on the pavements grey,\nI hear it in the deep heart's core.",
    clues: [
      ["Biblical refrain", "'I will arise and go now' repeats with solemn determination — yet he hasn't actually moved!"],
      ["Sensory richness", "'bee-loud glade', 'purple glow', liquid 'l' alliteration ('lake water lapping with low sounds')."],
      ["Penultimate-line reveal", "'pavements grey' suddenly reveals he is standing in a bleak city street the whole time."],
    ],
    parts: {
      thesis: [
        ["In 'The Lake Isle of Innisfree', Yeats captures a city-dweller's fierce spiritual longing for nature; I'll explore how lush sensory soundscapes collide with the stark urban reveal at the end.", 2],
        ["Yeats writes about wanting to build a cabin with nine bean-rows and bees on an island.", 1],
        ["There are three stanzas of ABAB rhyme and lots of imagery.", 0],
      ],
      zoom1: [
        ["Throughout stanzas one and two, Yeats saturates the imagined island in sound and colour — the compound 'bee-loud' and the metaphor 'peace comes dropping slow' make tranquillity feel almost touchable.", 2],
        ["Yeats uses colour words like 'purple glow' to make the island sound pretty.", 1],
        ["The speaker hates bees because the glade is too loud.", 0],
      ],
      shift: [
        ["Crucially, line eleven springs the structural surprise: 'While I stand on the roadway, or on the pavements grey' — the inverted syntax ('pavements grey') drains all colour just after the soothing alliteration of 'lake water lapping with low sounds'.", 2],
        ["In the last stanza he says he is actually standing on a grey pavement, not on the island.", 1],
        ["In stanza three he arrives on the island and builds his house.", 0],
      ],
      close: [
        ["Ending on 'the deep heart's core' shows that Innisfree is more than a place on a map: it is an inner sanctuary the speaker carries inside the grey modern city.", 2],
        ["In conclusion, Yeats really prefers the countryside to the city.", 1],
        ["So those are the three stanzas of the poem.", 0],
      ],
    },
  },
];

const STAGE_META: { k: StageKey; label: string; tip: string }[] = [
  { k: "thesis", label: "1. Opening thesis & signpost", tip: "Name poet + title, state the big idea, and signpost your route." },
  { k: "zoom1", label: "2. First close-up (language / sound)", tip: "Embed a short quote, name the method, unpack connotations & listener effect." },
  { k: "shift", label: "3. Structural turn / shift", tip: "Track how the poem changes from start to end (zoom, contrast, surprise)." },
  { k: "close", label: "4. Big-idea conclusion", tip: "Step back to why the poem matters — never end with 'that's all I found'." },
];

export function UnseenPoemStudio() {
  const [pi, setPi] = useState(0);
  const [showClues, setShowClues] = useState(false);
  const [picks, setPicks] = useState<Record<StageKey, number | null>>({ thesis: null, zoom1: null, shift: null, close: null });
  const [checked, setChecked] = useState(false);

  const poem = POEMS[pi];
  const complete = STAGE_META.every((s) => picks[s.k] !== null);
  const score = STAGE_META.reduce((acc, s) => acc + (picks[s.k] !== null ? poem.parts[s.k][picks[s.k] as number][1] : 0), 0);

  function switchPoem(i: number) {
    setPi(i);
    setShowClues(false);
    setPicks({ thesis: null, zoom1: null, shift: null, close: null });
    setChecked(false);
  }

  return (
    <Frame
      title="Unseen poem cold-read & spoken pitch studio"
      emoji="🗣️"
      caption={
        <>
          Don&apos;t panic at an unseen poem! Read it <b>three times</b>: once for the literal story, once for the <b>shift</b> (opening vs ending), and once to pick <b>two or three rich details</b>. In spoken analysis, listeners get lost in feature-lists — win them over with a clear thesis and signposted turns.
        </>
      }
    >
      <div className="flex flex-wrap gap-2">
        {POEMS.map((p, i) => (
          <Chip key={p.id} on={pi === i} onClick={() => switchPoem(i)}>
            {p.poet}: {p.title}
          </Chip>
        ))}
      </div>

      <Step n={1}>Read the unseen poem aloud — notice where the mood or focus shifts</Step>
      <figure className="rounded-xl border border-violet-200 bg-[#fffaf0] p-3.5">
        <p className="whitespace-pre-line font-serif text-[16px] leading-relaxed text-slate-800">{poem.text}</p>
        <figcaption className="mt-2 text-xs font-semibold text-violet-800/80">{poem.poet}, &lsquo;{poem.title}&rsquo;</figcaption>
      </figure>

      <div className="mt-2">
        <Action tone="light" onClick={() => setShowClues(!showClues)}>
          {showClues ? "Hide margin annotations" : "💡 Peek at 3 margin annotations"}
        </Action>
        {showClues && (
          <div className="mt-2 grid gap-2 sm:grid-cols-3">
            {poem.clues.map(([badge, note]) => (
              <div key={badge} className="rounded-xl border border-indigo-200 bg-white p-2.5 text-xs leading-relaxed text-slate-700">
                <span className="block font-bold text-indigo-700">{badge}</span>
                {note}
              </div>
            ))}
          </div>
        )}
      </div>

      <Step n={2}>Assemble your 60-second spoken response</Step>
      <div className="space-y-3">
        {STAGE_META.map((st, si) => {
          const opts = poem.parts[st.k];
          return (
            <fieldset key={st.k} className="rounded-xl border border-slate-200 bg-white p-3">
              <legend className="px-1 text-sm font-bold text-indigo-900">{st.label}</legend>
              <p className="mb-2 text-xs text-slate-500">{st.tip}</p>
              <div className="grid gap-1.5">
                {[0, 1, 2].map((k) => {
                  const idx = (k + pi + si) % 3;
                  const [txt, pts] = opts[idx];
                  const on = picks[st.k] === idx;
                  return (
                    <Chip
                      key={idx}
                      on={on}
                      onClick={() => { setPicks({ ...picks, [st.k]: idx }); setChecked(false); }}
                      className="font-normal"
                    >
                      {txt} {checked && on ? (pts === 2 ? "✓" : pts === 1 ? "~" : "✗") : ""}
                    </Chip>
                  );
                })}
              </div>
            </fieldset>
          );
        })}
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        <Action tone="green" disabled={!complete} onClick={() => setChecked(true)}>Deliver spoken pitch</Action>
        <Action tone="light" onClick={() => switchPoem((pi + 1) % POEMS.length)}>Try next unseen poem →</Action>
      </div>

      {checked && complete && (
        <div className="mt-3 space-y-2">
          <Note tone={score >= 7 ? "good" : score >= 4 ? "ok" : "bad"}>
            <b>Score: {score}/8 · {score === 8 ? "Distinction spoken analysis!" : score >= 5 ? "Clear talk — sharpen the ~ parts to move from retelling to effect." : "Too much retelling or feature-listing — anchor every sentence in meaning."}</b>
          </Note>
          <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-3 text-sm leading-relaxed text-slate-800">
            <p className="mb-1 text-xs font-bold uppercase tracking-wide text-emerald-800">🎤 Your spoken script (read aloud with pauses at punctuation!)</p>
            <p>{STAGE_META.map((s) => poem.parts[s.k][picks[s.k] as number][0]).join(" ")}</p>
          </div>
        </div>
      )}
    </Frame>
  );
}

"use client";

import { useState } from "react";
import { Action, Chip, Frame, Note, Step } from "./ui";

type Status = "good" | "odd" | "wrong";
type Opt = [label: string, sentence: string, status: Status, note: string];
type Kind = "compound" | "complex" | "relative" | "fronted" | "minor";
interface Pair {
  a: string;
  b: string;
  mixes: Record<Kind, Opt[]>;
}

const PAIRS: Pair[] = [
  {
    a: "The thunder cracked.",
    b: "The dog hid under the table.",
    mixes: {
      compound: [
        ["so", "The thunder cracked, so the dog hid under the table.", "good", "'So' shows cause and effect: the thunder made the dog hide."],
        ["and", "The thunder cracked, and the dog hid under the table.", "good", "'And' simply adds: two events side by side, equal weight."],
        ["but", "The thunder cracked, but the dog hid under the table.", "odd", "Grammatical, but 'but' signals a contrast, and there isn't one here."],
      ],
      complex: [
        ["When… ,", "When the thunder cracked, the dog hid under the table.", "good", "Fronted subordinate clause, then a comma. Starting with 'when' delays the main action and builds suspense."],
        ["…because…", "The dog hid under the table because the thunder cracked.", "good", "Main clause first, so no comma is needed. The emphasis falls on the dog."],
        ["As soon as… ,", "As soon as the thunder cracked, the dog hid under the table.", "good", "'As soon as' stresses how fast it happened."],
        ["Although… ,", "Although the thunder cracked, the dog hid under the table.", "odd", "'Although' signals a contrast, which makes no sense here."],
      ],
      relative: [
        ["…, which…", "The thunder cracked, which sent the dog scurrying under the table.", "good", "A 'which' clause can comment on a whole idea. Note the comma before it."],
        ["…, who…,", "The dog, who hated storms, hid under the table when the thunder cracked.", "good", "An embedded relative clause adds detail, with commas on both sides like brackets."],
        ["who (no commas)", "The dog who hid under the table the thunder cracked.", "wrong", "Garbled: the relative clause has swallowed the main verb."],
      ],
      fronted: [
        ["Seconds after… ,", "Seconds after the thunder cracked, the dog hid under the table.", "good", "Fronted adverbial of time, then a comma. It controls the timing precisely."],
        ["Trembling,", "Trembling, the dog hid under the table as the thunder cracked.", "good", "A fronted -ing word puts the dog's fear first."],
        ["Suddenly", "Suddenly the thunder cracked, the dog hid under the table.", "wrong", "Two errors: no comma after 'Suddenly', and a comma splice joining two main clauses."],
      ],
      minor: [
        ["Silence.", "The thunder cracked. Silence. Then the dog bolted under the table.", "good", "'Silence.' has no verb: a minor sentence that freezes time for a beat."],
        ["Crack!", "Crack! The dog vanished under the table.", "good", "A one-word onomatopoeic minor sentence: abrupt, loud, immediate."],
        ["Under the table.", "Under the table.", "odd", "On its own it's just a fragment with no context: a minor sentence needs a clear job."],
      ],
    },
  },
  {
    a: "My grandmother grew up in Penang.",
    b: "She speaks four languages.",
    mixes: {
      compound: [
        ["so", "My grandmother grew up in Penang, so she speaks four languages.", "good", "'So' links cause and effect."],
        ["and", "My grandmother grew up in Penang, and she speaks four languages.", "good", "Neutral: two facts with equal weight."],
        ["but", "My grandmother grew up in Penang, but she speaks four languages.", "odd", "'But' suggests that's surprising, which it isn't. Penang is a multilingual place!"],
      ],
      complex: [
        ["Because… ,", "Because she grew up in Penang, my grandmother speaks four languages.", "good", "Fronted subordinate clause, then a comma: the reason comes first."],
        ["…because…", "My grandmother speaks four languages because she grew up in Penang.", "good", "Main clause first, so no comma: the emphasis falls on the four languages."],
        ["Because (no comma)", "Because she grew up in Penang my grandmother speaks four languages.", "wrong", "Missing comma after the fronted subordinate clause: the reader stumbles."],
      ],
      relative: [
        ["…, who…,", "My grandmother, who grew up in Penang, speaks four languages.", "good", "An embedded relative clause in a pair of commas: extra detail, tucked inside."],
        ["one comma", "My grandmother who grew up in Penang, speaks four languages.", "wrong", "Commas round an embedded clause come in pairs: one is missing."],
        ["…, which…", "My grandmother speaks four languages, which she learned growing up in Penang.", "good", "A 'which' clause at the end adds the explanation as an afterthought."],
      ],
      fronted: [
        ["Growing up in Penang,", "Growing up in Penang, my grandmother learned four languages.", "good", "The fronted phrase sets the scene; the subject straight after the comma is the one who grew up there."],
        ["In Penang,", "In Penang, where she grew up, my grandmother learned four languages.", "good", "A fronted adverbial of place puts the setting first."],
        ["dangling", "Growing up in Penang, four languages were learned by my grandmother.", "wrong", "A dangling modifier: this says the languages grew up in Penang!"],
      ],
      minor: [
        ["list", "Four languages. One grandmother. All from Penang.", "good", "Minor sentences in a list: punchy, like a headline."],
        ["Penang.", "Penang. That's where my grandmother learned to speak four languages.", "good", "A one-word minor sentence spotlights the place before explaining it."],
      ],
    },
  },
  {
    a: "The hawker centre was packed.",
    b: "We found a table.",
    mixes: {
      compound: [
        ["but", "The hawker centre was packed, but we found a table.", "good", "'But' shows the contrast: crowded, yet success."],
        ["yet", "The hawker centre was packed, yet we found a table.", "good", "'Yet' adds a note of surprise."],
        ["so", "The hawker centre was packed, so we found a table.", "odd", "'So' suggests the crowds helped us find a table, which isn't logical."],
      ],
      complex: [
        ["Although… ,", "Although the hawker centre was packed, we found a table.", "good", "Fronted 'although' clause, then a comma: tension first, relief second."],
        ["…even though…", "We found a table even though the hawker centre was packed.", "good", "Main clause first, no comma: the success comes first."],
        ["Although (no comma)", "Although the hawker centre was packed we found a table.", "wrong", "Missing comma after the fronted subordinate clause."],
      ],
      relative: [
        ["…, which…,", "The hawker centre, which was packed, still had one free table for us.", "good", "An embedded relative clause with a pair of commas."],
        ["…, which…", "We found a table in the hawker centre, which was packed.", "good", "A 'which' clause at the end adds detail."],
        ["broken", "The hawker centre which was packed, we found a table.", "wrong", "Two clauses jammed together: there's no main verb for 'the hawker centre'."],
      ],
      fronted: [
        ["Somehow,", "Somehow, despite the crowds, we found a table.", "good", "A fronted adverb plus a phrase in commas: it builds a sense of luck."],
        ["After… ,", "After ten minutes of circling, we found a table.", "good", "A fronted adverbial of time makes you feel the wait."],
        ["splice", "After ten minutes of circling we found a table, it was sticky.", "wrong", "Missing comma after the adverbial, and a comma splice at the end."],
      ],
      minor: [
        ["Packed.", "Packed. Every table taken. And then: a miracle.", "good", "A string of minor sentences: fast, breathless, comic."],
        ["Not a seat.", "The hawker centre was packed. Not a seat. Until, suddenly, there was.", "good", "The minor sentence 'Not a seat.' slams the door before the twist."],
      ],
    },
  },
];

const KINDS: { k: Kind; label: string; pace: string; what: string }[] = [
  { k: "compound", label: "Compound (FANBOYS)", pace: "Steady, balanced", what: "Two main clauses joined by a comma and a FANBOYS conjunction (for, and, nor, but, or, yet, so). Choose the conjunction for its meaning: 'so' = cause, 'but' / 'yet' = contrast." },
  { k: "complex", label: "Complex (subordinate clause)", pace: "Builds suspense when fronted", what: "A main clause plus a subordinate clause (when, because, although, as soon as, since…). Subordinate clause first? Put a comma after it. Main clause first? Usually no comma." },
  { k: "relative", label: "Relative clause", pace: "Slower, adds detail", what: "A clause starting with who, which, where or whose adds information about a noun. In the middle of a sentence it needs commas on both sides, like brackets." },
  { k: "fronted", label: "Fronted adverbial", pace: "Sets the scene first", what: "A word or phrase telling us when, where or how goes before the main clause, followed by a comma. Great for varying how your sentences start." },
  { k: "minor", label: "Minor sentence", pace: "Abrupt, dramatic", what: "A 'sentence' without a main verb ('Silence.'). Punchy and dramatic: it stops the reader for a moment. Use sparingly, or it loses its power." },
];

const SPLICES: { s: string; opts: [string, boolean, string][] }[] = [
  {
    s: "It was raining, we stayed inside.",
    opts: [
      ["It was raining. We stayed inside.", true, "A full stop makes two clean sentences."],
      ["It was raining we stayed inside.", false, "Deleting the comma makes a run-on sentence: even worse."],
      ["It was raining, so we stayed inside.", true, "Comma plus a FANBOYS conjunction ('so') joins the clauses properly."],
      ["It was raining; we stayed inside.", true, "A semicolon can join two closely related main clauses."],
    ],
  },
  {
    s: "Prospero raised his staff, the storm began.",
    opts: [
      ["Prospero raised his staff, then the storm began.", false, "'Then' is an adverb, not a conjunction: it's still a comma splice."],
      ["As Prospero raised his staff, the storm began.", true, "Making the first clause subordinate fixes it, and adds drama."],
      ["Prospero raised his staff; the storm began.", true, "A semicolon links cause and effect neatly."],
      ["Prospero raised his staff, and the storm began.", true, "Comma plus 'and' is correct."],
    ],
  },
  {
    s: "Juliet waited at the window, Romeo did not come.",
    opts: [
      ["Juliet waited at the window, however Romeo did not come.", false, "'However' isn't a FANBOYS conjunction. Use a semicolon before it: '; however,'."],
      ["Juliet waited at the window, but Romeo did not come.", true, "Comma plus 'but' shows the painful contrast."],
      ["Juliet waited at the window Romeo did not come.", false, "A run-on: two main clauses with nothing between them."],
      ["Juliet waited at the window; however, Romeo did not come.", true, "Semicolon before 'however', comma after it: correct."],
    ],
  },
  {
    s: "The bell rang, everyone rushed out.",
    opts: [
      ["The bell rang, therefore everyone rushed out.", false, "'Therefore' is an adverb: still a splice. Try '; therefore,'."],
      ["When the bell rang, everyone rushed out.", true, "Fronted subordinate clause plus a comma."],
      ["The bell rang, everyone, rushed out.", false, "Adding commas doesn't fix a splice; it never separates a subject from its verb."],
      ["The bell rang. Everyone rushed out.", true, "Two short sentences: quick, like the rush itself."],
    ],
  },
  {
    s: "I love Shakespeare, his insults are brilliant.",
    opts: [
      ["I love Shakespeare: his insults are brilliant.", true, "A colon introduces the explanation."],
      ["I love Shakespeare, because, his insults are brilliant.", false, "Too many commas: 'because' needs no comma after it."],
      ["I love Shakespeare because his insults are brilliant.", true, "A subordinating conjunction joins the clauses."],
      ["I love Shakespeare, his insults, are brilliant.", false, "Still a splice, and now the subject is cut off from its verb."],
    ],
  },
];

/** Highlight punctuation so learners notice where the commas go. */
function Punct({ text }: { text: string }) {
  return (
    <>
      {text.split(/([,;:.!?])/).map((p, i) =>
        /^[,;:.!?]$/.test(p) ? (
          <b key={i} className="mx-px rounded bg-rose-100 px-0.5 text-rose-600">{p}</b>
        ) : (
          <span key={i}>{p}</span>
        ),
      )}
    </>
  );
}

function SpliceGame() {
  const [i, setI] = useState(0);
  const [tried, setTried] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const item = SPLICES[i];

  function tap(o: number) {
    if (tried.includes(o)) return;
    if (tried.length === 0 && item.opts[o][1]) setScore(score + 1);
    setTried([...tried, o]);
  }
  function next() {
    if (i + 1 >= SPLICES.length) setDone(true);
    else { setI(i + 1); setTried([]); }
  }

  if (done)
    return (
      <div className="space-y-2">
        <Note tone={score >= 4 ? "good" : score >= 2 ? "ok" : "bad"}>
          <b>{score}/{SPLICES.length}</b> fixed on the first try. {score >= 4 ? "Comma-splice hunter!" : "Remember: a comma alone can't join two main clauses. Use a full stop, a semicolon, a FANBOYS conjunction or a subordinating conjunction."}
        </Note>
        <Action tone="light" onClick={() => { setI(0); setTried([]); setScore(0); setDone(false); }}>Play again</Action>
      </div>
    );

  return (
    <div>
      <p className="text-sm text-slate-600">Round {i + 1} of {SPLICES.length} · Score {score}</p>
      <p className="mt-1 rounded-xl bg-rose-50 p-3 font-serif text-[16px] text-slate-800 ring-1 ring-rose-200">
        <span aria-hidden>❌ </span><Punct text={item.s} />
      </p>
      <p className="mt-2 text-sm font-semibold text-slate-700">Tap a correct fix (more than one may work):</p>
      <div className="mt-1 grid gap-1.5">
        {item.opts.map(([t, ok, why], o) => {
          const shown = tried.includes(o);
          return (
            <button
              key={o}
              type="button"
              onClick={() => tap(o)}
              className={`min-h-10 rounded-xl p-2.5 text-left text-[15px] transition ${shown ? (ok ? "bg-emerald-50 ring-2 ring-emerald-400" : "bg-rose-50 ring-2 ring-rose-400") : "bg-white ring-1 ring-slate-200 hover:bg-slate-50"}`}
            >
              <Punct text={t} />
              {shown && <span className={`mt-1 block text-xs font-semibold ${ok ? "text-emerald-700" : "text-rose-700"}`}>{ok ? "✓ " : "✗ "}{why}</span>}
            </button>
          );
        })}
      </div>
      {tried.some((o) => item.opts[o][1]) && (
        <div className="mt-2"><Action tone="green" onClick={next}>{i + 1 >= SPLICES.length ? "See score" : "Next round →"}</Action></div>
      )}
    </div>
  );
}

export function SentenceMixer() {
  const [pi, setPi] = useState(0);
  const [kind, setKind] = useState<Kind>("compound");
  const [oi, setOi] = useState(0);
  const [tab, setTab] = useState<"mix" | "splice">("mix");
  const pair = PAIRS[pi];
  const opts = pair.mixes[kind];
  const opt = opts[Math.min(oi, opts.length - 1)];
  const info = KINDS.find((k) => k.k === kind)!;

  return (
    <Frame
      title="Sentence mixer: combine and punctuate"
      emoji="🧪"
      caption={
        <>
          Sentence variety controls <b>pace</b> and <b>emphasis</b>: short simple and minor sentences hit hard; compound sentences feel balanced; complex sentences can delay information to build suspense. Whatever you build, never join two main clauses with just a comma. That&apos;s a <b>comma splice</b>.
        </>
      }
    >
      <div className="flex gap-2">
        <Chip on={tab === "mix"} onClick={() => setTab("mix")}>🧪 Mix sentences</Chip>
        <Chip on={tab === "splice"} onClick={() => setTab("splice")}>🩹 Fix the comma splice</Chip>
      </div>

      {tab === "mix" ? (
        <>
          <Step n={1}>Pick two simple sentences</Step>
          <div className="grid gap-1.5 sm:grid-cols-3">
            {PAIRS.map((p, i) => (
              <Chip key={i} on={pi === i} onClick={() => { setPi(i); setOi(0); }} className="font-normal">
                {p.a} + {p.b}
              </Chip>
            ))}
          </div>

          <Step n={2}>Choose a sentence type</Step>
          <div className="flex flex-wrap gap-1.5">
            {KINDS.map((k) => (
              <Chip key={k.k} on={kind === k.k} onClick={() => { setKind(k.k); setOi(0); }}>{k.label}</Chip>
            ))}
          </div>

          <Step n={3}>Choose the joining word or pattern</Step>
          <div className="flex flex-wrap gap-1.5">
            {opts.map((o, i) => (
              <Chip key={o[0]} on={oi === i} onClick={() => setOi(i)}>{o[0]}</Chip>
            ))}
          </div>

          <div className="mt-3 rounded-xl bg-white p-3 ring-1 ring-slate-200" aria-live="polite">
            <p className="font-serif text-lg leading-relaxed text-slate-900"><Punct text={opt[1]} /></p>
            <p className={`mt-2 text-sm font-semibold ${opt[2] === "good" ? "text-emerald-700" : opt[2] === "odd" ? "text-amber-700" : "text-rose-700"}`}>
              {opt[2] === "good" ? "✓ Works: " : opt[2] === "odd" ? "~ Grammatical but odd: " : "✗ Incorrect: "}
              {opt[3]}
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5 text-xs">
              <span className="rounded-full bg-indigo-100 px-2 py-1 font-semibold text-indigo-800">Pace: {info.pace}</span>
            </div>
            <p className="mt-2 text-sm text-slate-600">{info.what}</p>
          </div>
        </>
      ) : (
        <div className="mt-3">
          <SpliceGame />
        </div>
      )}
    </Frame>
  );
}

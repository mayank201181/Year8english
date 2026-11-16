"use client";

import { useState } from "react";
import { Chip, Frame, Meter, Note, Step } from "./ui";

type Opt = { text: string; q: 0 | 1 | 2; fb: string };
interface Question {
  id: string;
  label: string;
  ask: string;
  parts: [Opt[], Opt[], Opt[], Opt[]]; // Point, Evidence, Explain, Link
}

const QUESTIONS: Question[] = [
  {
    id: "caliban",
    label: "Caliban",
    ask: "How does Shakespeare present Caliban in The Tempest?",
    parts: [
      [
        { text: "Shakespeare presents Caliban as a victim of colonisation who has had his island and his freedom taken from him.", q: 2, fb: "A clear argument that answers 'how'." },
        { text: "Caliban is a character in The Tempest.", q: 1, fb: "Just a fact. A point must make an argument." },
        { text: "Prospero is a powerful magician who controls everyone on the island.", q: 0, fb: "This is about Prospero, not Caliban: off-target." },
      ],
      [
        { text: "This is shown when Caliban protests, \"This island's mine, by Sycorax my mother, / Which thou tak'st from me.\"", q: 2, fb: "Short, accurate and directly supports the point." },
        { text: "This is shown when Caliban talks about the island and says it belongs to him.", q: 1, fb: "A paraphrase: you can't zoom in on words you haven't quoted." },
        { text: "This is shown when Miranda says, \"O brave new world / That has such people in't!\"", q: 0, fb: "Miranda's words, about other people: no proof about Caliban." },
      ],
      [
        { text: "The possessive \"mine\" is defiant: Caliban claims the island through his mother, while the verb \"tak'st\" casts Prospero as a thief, making the audience question whether Prospero's power is fair.", q: 2, fb: "Zooms in on single words and explains their effect." },
        { text: "This quotation shows that Caliban is upset and angry, which is sad.", q: 1, fb: "Names a feeling but analyses no words." },
        { text: "Caliban is the son of the witch Sycorax and later plots with Stephano and Trinculo to kill Prospero.", q: 0, fb: "Retells the plot instead of analysing." },
      ],
      [
        { text: "Through Caliban, Shakespeare explores power and colonisation, inviting a modern audience to see him as a victim as well as a villain.", q: 2, fb: "Links to a theme and opens up an interpretation." },
        { text: "This links to the question because it is about Caliban.", q: 1, fb: "A 'link' that just says it links. Name the theme or purpose." },
        { text: "In conclusion, The Tempest is one of Shakespeare's most famous plays.", q: 0, fb: "Generic: says nothing about Caliban." },
      ],
    ],
  },
  {
    id: "romeo",
    label: "Romeo's haste",
    ask: "How does Shakespeare present Romeo as impulsive in Romeo and Juliet?",
    parts: [
      [
        { text: "Shakespeare presents Romeo as dangerously impulsive, falling in love at first sight and instantly forgetting Rosaline.", q: 2, fb: "Precise and arguable: it answers 'how'." },
        { text: "Romeo is in love with Juliet.", q: 1, fb: "True, but not an argument about impulsiveness." },
        { text: "The Nurse is a comic character who talks too much.", q: 0, fb: "Wrong character: off-target." },
      ],
      [
        { text: "When he first sees Juliet, Romeo asks, \"Did my heart love till now? Forswear it, sight!\"", q: 2, fb: "Short, accurate, and exactly the right moment." },
        { text: "At the party, Romeo sees Juliet and decides he loves her more than Rosaline.", q: 1, fb: "A paraphrase: no words to analyse." },
        { text: "Mercutio curses, \"A plague o' both your houses!\"", q: 0, fb: "About the feud, from a different scene: it doesn't show Romeo's impulsiveness." },
      ],
      [
        { text: "The rhetorical question shows Romeo rewriting his whole past in a single moment, and the imperative \"Forswear it\" rejects Rosaline instantly. His feelings are intense but alarmingly quick to change.", q: 2, fb: "Names techniques and explains what they reveal." },
        { text: "This shows Romeo really likes Juliet a lot.", q: 1, fb: "Vague: which words show it, and how?" },
        { text: "Romeo goes on to marry Juliet the next day, then kills Tybalt and is banished.", q: 0, fb: "Plot retelling, not explanation." },
      ],
      [
        { text: "This haste foreshadows the tragedy: as Friar Laurence warns, \"they stumble that run fast\", and Romeo's impulsiveness drives the play to its fatal end.", q: 2, fb: "Links to structure and theme with a second, embedded quotation." },
        { text: "This shows Romeo is impulsive, which answers the question.", q: 1, fb: "Repeats the point without developing it." },
        { text: "Shakespeare was born in Stratford-upon-Avon in 1564.", q: 0, fb: "True, but irrelevant context." },
      ],
    ],
  },
  {
    id: "dunbar",
    label: "We Wear the Mask",
    ask: "How does Dunbar present hidden suffering in 'We Wear the Mask'?",
    parts: [
      [
        { text: "Dunbar presents suffering as something that must be hidden behind a performance of happiness.", q: 2, fb: "A clear argument about method and meaning." },
        { text: "The poem is about a mask.", q: 1, fb: "Describes the topic but makes no argument." },
        { text: "Dunbar's poem is about how much he enjoys going to the theatre.", q: 0, fb: "A misreading: off-target." },
      ],
      [
        { text: "The speaker admits, \"With torn and bleeding hearts we smile.\"", q: 2, fb: "Short, accurate and packed with analysable words." },
        { text: "He says they smile even though they are hurting inside.", q: 1, fb: "A paraphrase: quote the words so you can analyse them." },
        { text: "\"I wandered lonely as a cloud\" shows the speaker is sad.", q: 0, fb: "That's Wordsworth: the wrong poem." },
      ],
      [
        { text: "The violent adjectives \"torn and bleeding\" clash with the gentle verb \"smile\", exposing the gap between what is felt and what is shown, while the collective \"we\" suggests a whole community suffers, not one person.", q: 2, fb: "Zooms in, names word classes, explores the contrast and the pronoun." },
        { text: "This is a good quotation because it uses lots of techniques.", q: 1, fb: "Which techniques? What effect? Too general." },
        { text: "Dunbar was born in Ohio in 1872, and his parents had been enslaved.", q: 0, fb: "Context alone. Context should support analysis, not replace it." },
      ],
      [
        { text: "Dunbar therefore exposes how prejudice forced Black Americans to hide their pain, leaving the reader to question who the 'mask' really protects.", q: 2, fb: "Links to theme and context, and ends on an interpretation." },
        { text: "So the poem is about suffering.", q: 1, fb: "Restates the question without developing it." },
        { text: "Overall, the poem has three stanzas and it rhymes.", q: 0, fb: "A form fact that doesn't connect to your point." },
      ],
    ],
  },
];

const PARTS = [
  { k: "Point", c: "#6366f1", bg: "bg-indigo-50" },
  { k: "Evidence", c: "#f59e0b", bg: "bg-amber-50" },
  { k: "Explain", c: "#10b981", bg: "bg-emerald-50" },
  { k: "Link", c: "#ec4899", bg: "bg-pink-50" },
];
const ROT = [[1, 0, 2], [2, 1, 0], [0, 2, 1], [1, 2, 0]];

export function PeelBuilder() {
  const [qi, setQi] = useState(0);
  const [pick, setPick] = useState<(number | null)[]>([null, null, null, null]);
  const q = QUESTIONS[qi];
  const chosen = pick.map((p, i) => (p === null ? null : q.parts[i][p]));
  const score = chosen.reduce((a, c) => a + (c?.q ?? 0), 0);
  const done = chosen.every(Boolean);
  const level = score === 8 ? "Perceptive" : score >= 6 ? "Clear" : score >= 4 ? "Some understanding" : "Simple";

  return (
    <Frame
      title="PEEL builder: assemble a paragraph"
      emoji="🧱"
      caption={
        <>
          <b>P</b>oint (your argument) → <b>E</b>vidence (a short, embedded quotation) → <b>E</b>xplain (zoom in on words: technique, connotation, effect) → <b>L</b>ink (back to the question, a theme or the writer&apos;s purpose). The Explain step earns the most marks; retelling the plot earns the fewest. Each step has one strong option, one weak one and one off-target one.
        </>
      }
    >
      <Step n={1}>Choose a question</Step>
      <div className="flex flex-wrap gap-2">
        {QUESTIONS.map((x, i) => (
          <Chip key={x.id} on={qi === i} onClick={() => { setQi(i); setPick([null, null, null, null]); }}>{x.label}</Chip>
        ))}
      </div>
      <p className="mt-2 rounded-xl bg-white px-3 py-2 font-semibold text-slate-800 ring-1 ring-slate-200">❓ {q.ask}</p>

      {PARTS.map((part, pi) => (
        <fieldset key={part.k} className="mt-3">
          <legend className="mb-1 text-sm font-bold" style={{ color: part.c }}>
            {pi + 2}. {part.k}
          </legend>
          <div className="grid gap-1.5">
            {ROT[pi].map((oi) => (
              <Chip key={oi} on={pick[pi] === oi} onClick={() => setPick(pick.map((p, j) => (j === pi ? oi : p)))} className="font-normal">
                {q.parts[pi][oi].text}
              </Chip>
            ))}
          </div>
          {chosen[pi] && (
            <p className={`mt-1 text-xs font-medium ${chosen[pi]!.q === 2 ? "text-emerald-700" : chosen[pi]!.q === 1 ? "text-amber-700" : "text-rose-700"}`}>
              {chosen[pi]!.q === 2 ? "✓ Strong: " : chosen[pi]!.q === 1 ? "~ Weak: " : "✗ Off-target: "}
              {chosen[pi]!.fb}
            </p>
          )}
        </fieldset>
      ))}

      <Step>Your paragraph</Step>
      <div className="rounded-xl bg-white p-3 text-[15px] leading-relaxed text-slate-800 ring-1 ring-slate-200" aria-live="polite">
        {chosen.map((c, i) =>
          c ? (
            <span key={i} className={`${PARTS[i].bg} rounded box-decoration-clone px-0.5`} style={{ borderBottom: `2px solid ${PARTS[i].c}` }}>
              {c.text}{" "}
            </span>
          ) : (
            <span key={i} className="text-slate-400">[{PARTS[i].k}] </span>
          ),
        )}
      </div>
      <div className="mt-3 space-y-2">
        <Meter label={`Paragraph quality${done ? `: ${level}` : ""}`} value={score} max={8} color={score >= 7 ? "#10b981" : score >= 4 ? "#f59e0b" : "#f43f5e"} note={`${score}/8`} />
        {done && (
          <Note tone={score === 8 ? "good" : score >= 5 ? "ok" : "bad"}>
            {score === 8
              ? "A perceptive paragraph: a clear point, precise evidence, word-level analysis and a link that widens the argument. Now try writing one yourself on a different quotation."
              : `Swap any ~ or ✗ choices. ${chosen[2]?.q !== 2 ? "Start with Explain: that's where the marks are." : "Check the point and link really answer the question."}`}
          </Note>
        )}
      </div>
    </Frame>
  );
}

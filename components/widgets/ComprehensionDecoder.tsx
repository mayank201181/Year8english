"use client";

import { useState } from "react";
import { Action, Chip, Frame, Note, Step } from "./ui";

interface QItem {
  id: string;
  badge: string;
  rule: string;
  question: string;
  highlightLine: number; // 0-indexed paragraph
  options: [ans: string, ok: boolean, trapTag: string, feedback: string][];
}

const PARAS = [
  "[1] At 4.12 p.m. the sky above Queenstown turned the colour of bruised iron. Within seconds, shopkeepers along the walkway were hauling racks of school shoes indoors, their metal wheels shrieking across the tiles.",
  "[2] Mei stood beneath the awning with the envelope still unopened in her fist. Three times her thumb slipped under the paper seal; three times she let it fall. Across the car park, the rain arrived like a wall of hammered glass, swallowing the bus stop whole.",
  "[3] When she finally tore the flap, a single sentence waited in neat blue ink. Slowly, her shoulders dropped an inch, and for the first time all week she heard the auntie behind her laughing over the hiss of the tea urn.",
];

const QUESTIONS: QItem[] = [
  {
    id: "retrieve",
    badge: "1. Explicit retrieval [1 mark]",
    rule: "Lift or state the exact fact from the specified lines — don't invent extra backstory.",
    question: "From paragraph 1, what were the shopkeepers pulling indoors when the sky darkened?",
    highlightLine: 0,
    options: [
      ["Racks of school shoes.", true, "Clean retrieval", "Exact and concise — matches paragraph 1 directly."],
      ["Umbrellas and plastic tables from the café.", false, "Invented assumption", "Careful: you pictured a rainy street from real life, not what is actually in paragraph 1!"],
      ["Neat blue ink envelopes.", false, "Wrong paragraph!", "Envelopes and blue ink are in paragraphs 2–3, not paragraph 1. Always check line/paragraph limits."],
    ],
  },
  {
    id: "ownwords",
    badge: "2. 'In your own words' [2 marks]",
    rule: "Translate the key words into fresh vocabulary — copying the writer's exact words scores 0 even if you found the right place!",
    question: "Using your own words, explain what happened to the bus stop when the storm hit (paragraph 2).",
    highlightLine: 1,
    options: [
      ["The rain arrived like a wall of hammered glass, swallowing the bus stop whole.", false, "Copied lift trap!", "You found the exact sentence, so you understand where to look — but copying 'swallowing the bus stop whole' breaks 'using your own words'."],
      ["The downpour was so thick and heavy that the bus stop completely disappeared from view behind the rain.", true, "True paraphrase", "Translates both 'wall of hammered glass' (dense, heavy sheet of rain) and 'swallowing… whole' (hiding completely from sight) into your own words."],
      ["A tidal wave smashed the glass roof of the bus stop to pieces.", false, "Literalised simile trap!", "'Like a wall of hammered glass' is a simile for the rain's appearance, not literal broken glass!"],
    ],
  },
  {
    id: "infer",
    badge: "3. Inference [2 marks]",
    rule: "Read between the lines: pair an unspoken feeling or idea with the physical clue that proves it.",
    question: "What can we infer about how Mei feels in paragraph 3 AFTER reading the note?",
    highlightLine: 2,
    options: [
      ["She is devastated because she failed her English exam.", false, "Wild speculation", "The passage never says the letter is an exam result, and her reaction isn't devastation."],
      ["She feels sudden relief: the tension leaves her body ('her shoulders dropped') and she notices everyday sounds around her again for the first time all week.", true, "Evidence-backed inference", "Nails the unspoken emotion (relief) AND proves it with two physical clues from paragraph 3."],
      ["She reads a single sentence written in neat blue ink.", false, "Literal restatement", "That is explicit retrieval of what she saw, not an inference about how she feels."],
    ],
  },
  {
    id: "structure",
    badge: "4. Structure (NOT language!) [3 marks]",
    rule: "Structure = focus shifts, zoom in/out, pace, repetition across paragraphs, contrast between opening and ending.",
    question: "How does the writer structure the passage as a whole to interest the reader?",
    highlightLine: 2,
    options: [
      ["The writer uses the metaphor 'bruised iron' and the simile 'wall of hammered glass' to describe the storm.", false, "Language, not structure!", "Those are brilliant LANGUAGE points (imagery), which earn 0 on a pure structure question unless tied to focus shifts!"],
      ["The writer moves from a wide shot of the gathering storm in paragraph 1, zooms in tightly on Mei's hesitant hands in paragraph 2 to delay opening the envelope, and releases the tension in paragraph 3 with quiet human warmth.", true, "True structural analysis", "Tracks camera focus (wide → close-up), delayed reveal (suspense), and tonal shift from threat to relief."],
      ["The writer uses three paragraphs with full stops and commas so it is easy to read.", false, "Generic filler", "Every prose passage has paragraphs and punctuation — say how the focus shifts and why!"],
    ],
  },
  {
    id: "evaluate",
    badge: "5. Evaluate ('How far do you agree?') [4 marks]",
    rule: "State a clear judgement, prove it with methods + short quotes, and spot any nuance.",
    question: "A student said: 'The writer makes the waiting feel far more dramatic than the letter itself.' How far do you agree?",
    highlightLine: 1,
    options: [
      ["I completely agree: paragraph 2 stretches out the wait through balanced repetition ('Three times… three times…') and violent storm imagery ('hammered glass'), whereas the letter itself is reduced to 'a single sentence' whose quiet power lies in Mei's understated physical release.", true, "Evaluative + methods", "Takes a clear stance ('completely agree'), analyses how methods dramatise the wait, AND accounts for the quiet contrast at the end."],
      ["I disagree because letters are very dramatic.", false, "Unsupported opinion", "Evaluation in English isn't personal chat — every claim must be anchored in the writer's craft and quotations."],
      ["There is repetition of 'three times' in paragraph 2 and a metaphor in paragraph 1.", false, "No judgement!", "Lists features without answering 'How far do you agree?'."],
    ],
  },
];

export function ComprehensionDecoder() {
  const [qi, setQi] = useState(0);
  const [ans, setAns] = useState<Record<string, number>>({});

  const q = QUESTIONS[qi];
  const picked = ans[q.id];

  return (
    <Frame
      title="Comprehension question-type decoder"
      emoji="🔎"
      caption={
        <>
          Half the marks lost in comprehension come from answering the <b>wrong kind of question</b>: copying words on an &lsquo;own words&rsquo; task, analysing metaphors on a <b>structure</b> question, or stating literal facts when asked to <b>infer</b>. Always decode the command words first!
        </>
      }
    >
      <Step n={1}>Read the unseen extract (the highlighted paragraph is where this question focuses)</Step>
      <div className="space-y-2 rounded-xl border border-sky-200 bg-[#fffaf0] p-3.5 font-serif text-[15.5px] leading-relaxed text-slate-800">
        {PARAS.map((p, idx) => (
          <p key={idx} className={`rounded-lg px-2 py-1 transition ${q.highlightLine === idx ? "bg-amber-100/90 ring-1 ring-amber-300" : ""}`}>
            {p}
          </p>
        ))}
      </div>

      <Step n={2}>Select a comprehension question type to test</Step>
      <div className="flex flex-wrap gap-1.5">
        {QUESTIONS.map((item, idx) => (
          <Chip key={item.id} on={qi === idx} onClick={() => setQi(idx)}>
            {item.badge.split(" [")[0]} {ans[item.id] !== undefined && (item.options[ans[item.id]][1] ? "✓" : "•")}
          </Chip>
        ))}
      </div>

      <div className="mt-3 rounded-xl border border-indigo-200 bg-indigo-50/70 p-3 text-sm">
        <p className="text-xs font-bold uppercase tracking-wide text-indigo-700">{q.badge}</p>
        <p className="mt-1 font-bold text-slate-900">{q.question}</p>
        <p className="mt-1 text-xs text-indigo-900/80"><b>Examiner rule:</b> {q.rule}</p>
      </div>

      <Step n={3}>Choose the response that earns full marks (and spot the exam traps!)</Step>
      <div className="grid gap-2">
        {q.options.map(([text, ok, trapTag], idx) => (
          <Chip key={idx} on={picked === idx} onClick={() => setAns({ ...ans, [q.id]: idx })} className="font-normal">
            {text}
            {picked !== undefined && (
              <span className={`ml-2 inline-block rounded-full px-2 py-0.5 text-[11px] font-bold ${ok ? "bg-emerald-200 text-emerald-950" : "bg-rose-200 text-rose-950"}`}>
                {trapTag}
              </span>
            )}
          </Chip>
        ))}
      </div>

      {picked !== undefined && (
        <div className="mt-3 space-y-2">
          <Note tone={q.options[picked][1] ? "good" : "bad"}>
            <b>{q.options[picked][2]}:</b> {q.options[picked][3]}
          </Note>
          {qi < QUESTIONS.length - 1 && (
            <Action tone="light" onClick={() => setQi(qi + 1)}>Next question type →</Action>
          )}
        </div>
      )}
    </Frame>
  );
}

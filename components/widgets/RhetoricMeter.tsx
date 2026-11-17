"use client";

import { useState } from "react";
import { Chip, Frame, Meter, Note, Step } from "./ui";

interface Line {
  text: string;
  e: number; // ethos
  p: number; // pathos
  l: number; // logos
  q?: number; // rhetorical questions in the line
  q3?: boolean; // a true rule of three
  cta?: boolean;
  good: 0 | 1 | 2;
  note: string;
}
interface Slot {
  id: string;
  label: string;
  hint: string;
  options: Line[];
}

const SLOTS: Slot[] = [
  {
    id: "hook",
    label: "Hook",
    hint: "Grab attention in the first ten seconds.",
    options: [
      { text: "Picture this: it's eleven o'clock at night, your eyes are stinging, and you're still scrolling through videos you won't remember tomorrow.", e: 0, p: 2, l: 0, good: 2, note: "A vivid second-person scene: the audience sees themselves in it." },
      { text: "Have you ever looked up from your phone and wondered where the evening went?", e: 0, p: 1, l: 0, q: 1, good: 2, note: "A relatable question: a good hook, but it counts towards your question total." },
      { text: "Today I am going to talk about screen time.", e: 0, p: 0, l: 0, good: 0, note: "Announces the topic instead of hooking: the audience switches off." },
    ],
  },
  {
    id: "ethos",
    label: "Ethos (trust me)",
    hint: "Why should they listen to you?",
    options: [
      { text: "I'm not here to lecture you: I've lost whole weekends to my phone too, and last term I decided to do something about it.", e: 3, p: 1, l: 0, good: 2, note: "Honest and humble: admitting your own struggle builds trust." },
      { text: "As your form rep, I asked twenty-eight of you about your evenings last week.", e: 2, p: 0, l: 1, good: 2, note: "Your role plus your research make you credible." },
      { text: "Who am I to tell you what to do?", e: 0, p: 0, l: 0, q: 1, good: 0, note: "This undermines you: never invite the audience to doubt you." },
    ],
  },
  {
    id: "pathos",
    label: "Pathos (feel this)",
    hint: "Make them care.",
    options: [
      { text: "Think of the last time you laughed so hard at dinner that you forgot your phone even existed.", e: 0, p: 3, l: 0, good: 2, note: "Warm, specific memory: emotion without exaggeration." },
      { text: "Isn't it sad that we spend more time with our screens than with our own families?", e: 0, p: 2, l: 0, q: 1, good: 1, note: "Emotive, but another question, and it sounds a little like a telling-off." },
      { text: "Screens are evil and they are destroying everything we love!", e: -1, p: 2, l: 0, good: 0, note: "Hyperbole this extreme makes you sound less reasonable, so your ethos drops." },
    ],
  },
  {
    id: "logos",
    label: "Logos (here's the evidence)",
    hint: "Give them a reason.",
    options: [
      { text: "In my class survey, 23 of the 28 people I asked said they sleep worse after late-night scrolling.", e: 1, p: 0, l: 3, good: 2, note: "Real, local evidence you gathered yourself. Never invent statistics and pass them off as real." },
      { text: "Doctors often advise switching screens off an hour before bed, because bright light can make it harder to fall asleep.", e: 1, p: 0, l: 2, good: 2, note: "Expert opinion plus a reason: solid logos." },
      { text: "Everyone knows phones are bad, so it must be true.", e: 0, p: 0, l: 0, good: 0, note: "The 'bandwagon' fallacy: popularity isn't evidence." },
    ],
  },
  {
    id: "rq",
    label: "Rhetorical question",
    hint: "Make them think, not answer.",
    options: [
      { text: "So what would you do with three extra hours a week?", e: 0, p: 1, l: 1, q: 1, good: 2, note: "Makes the benefit concrete and personal." },
      { text: "Isn't it time we took our evenings back?", e: 0, p: 2, l: 0, q: 1, good: 2, note: "Inclusive 'we' plus a question that only has one answer." },
      { text: "Why? Why? Why are we doing this to ourselves?", e: 0, p: 1, l: 0, q: 3, good: 0, note: "Three questions in one breath: melodramatic, and it tips you into overuse." },
    ],
  },
  {
    id: "three",
    label: "Rule of three",
    hint: "Three feels complete and memorable.",
    options: [
      { text: "One night a week: to read, to talk, to rest.", e: 0, p: 1, l: 1, q3: true, good: 2, note: "Short, rhythmic triplet: easy to remember." },
      { text: "Screen-free evenings are good and helpful.", e: 0, p: 0, l: 0, good: 0, note: "Only two vague adjectives: no rhythm, no punch." },
      { text: "We could read, we could talk, we could rest, we could cook, we could walk, we could sleep.", e: 0, p: 1, l: 0, good: 1, note: "Six items: the list loses its punch. Three is the magic number." },
    ],
  },
  {
    id: "cta",
    label: "Call to action",
    hint: "Tell them exactly what to do.",
    options: [
      { text: "So this Wednesday, put your phone in a drawer at seven o'clock, and see what happens.", e: 0, p: 1, l: 1, cta: true, good: 2, note: "Specific, achievable and memorable." },
      { text: "Will you join me?", e: 1, p: 1, l: 0, q: 1, cta: true, good: 1, note: "A neat close, but vague and yet another question." },
      { text: "Anyway, that's my speech. Thank you.", e: 0, p: 0, l: 0, good: 0, note: "Fizzles out: the last line is the one they remember." },
    ],
  },
];

const ORDER = [[0, 1, 2], [1, 2, 0], [2, 0, 1], [0, 2, 1], [1, 0, 2], [2, 1, 0], [0, 1, 2]];
const COLOUR = { e: "#0ea5e9", p: "#f43f5e", l: "#10b981" };

export function RhetoricMeter() {
  const [pick, setPick] = useState<(number | null)[]>(SLOTS.map(() => null));
  const chosen = pick.map((p, i) => (p === null ? null : SLOTS[i].options[p]));
  const lines = chosen.filter((x): x is Line => !!x);

  const E = Math.max(0, lines.reduce((a, x) => a + x.e, 0));
  const P = lines.reduce((a, x) => a + x.p, 0);
  const L = lines.reduce((a, x) => a + x.l, 0);
  const Q = lines.reduce((a, x) => a + (x.q ?? 0), 0);
  const sum = E + P + L || 1;
  const words = lines.reduce((a, x) => a + x.text.split(/\s+/).length, 0);
  const secs = Math.round((words / 130) * 60);
  const quality = lines.reduce((a, x) => a + x.good, 0);

  const flags: [tone: "bad" | "ok" | "good", text: string][] = [];
  if (Q >= 4) flags.push(["bad", `Overuse alert: ${Q} rhetorical questions. Two or three in a whole speech is plenty; any more and it sounds like a quiz, so the audience stops thinking.`]);
  else if (Q === 3) flags.push(["ok", "Three rhetorical questions: that's your limit. Turn one into a statement."]);
  if (lines.length >= 4) {
    if (L === 0) flags.push(["bad", "No logos: the audience may feel moved, but they have no reason to believe you."]);
    if (P / sum > 0.6) flags.push(["ok", "Pathos-heavy: emotion without evidence can feel manipulative."]);
    if (L / sum > 0.6) flags.push(["ok", "Logos-heavy: correct, but cold. Add a human moment."]);
    if (E === 0) flags.push(["ok", "No ethos yet: tell them why you of all people should be listened to."]);
  }
  if (pick[6] !== null && !chosen[6]?.cta) flags.push(["bad", "No call to action: your audience leaves without knowing what to do."]);
  if (lines.length === SLOTS.length && flags.length === 0) flags.push(["good", "Balanced and purposeful: ethos, pathos and logos all pull their weight."]);

  const dominant = E >= P && E >= L ? "e" : P >= L ? "p" : "l";
  const tip =
    lines.length === 0
      ? "Pick lines to see a delivery tip."
      : dominant === "p"
      ? "Pathos lines need space: slow down, lower your voice, and pause for two seconds after the emotional line while you make eye contact."
      : dominant === "l"
      ? "Say numbers slowly and clearly, and pause straight after a statistic so it lands. A small gesture (holding up fingers) helps people remember it."
      : "Ethos lives in your body too: stand still, feet planted, shoulders relaxed, open hands. Look at the back row, not your cue card.";

  return (
    <Frame
      title="Rhetoric meter: build a speech opening"
      emoji="🎤"
      caption={
        <>
          Aristotle&apos;s three appeals: <b>ethos</b> (trust: why listen to <i>you</i>?), <b>pathos</b> (emotion: why should they <i>care</i>?) and <b>logos</b> (logic: why is it <i>true</i>?). Strong speeches balance all three, use devices like rhetorical questions and the rule of three <b>sparingly</b>, and end with a clear call to action. Topic: <i>&lsquo;Give us back our evenings: one screen-free night a week.&rsquo;</i>
        </>
      }
    >
      <div className="grid gap-4 lg:grid-cols-[1fr_300px]">
        <div>
          {SLOTS.map((s, si) => (
            <fieldset key={s.id} className="mb-3">
              <legend className="text-sm font-bold text-slate-800">
                {si + 1}. {s.label} <span className="font-normal text-slate-500">· {s.hint}</span>
              </legend>
              <div className="mt-1 grid gap-1.5">
                {ORDER[si].map((oi) => {
                  const o = s.options[oi];
                  const on = pick[si] === oi;
                  return (
                    <Chip key={oi} on={on} onClick={() => setPick(pick.map((p, j) => (j === si ? (on ? null : oi) : p)))} className="font-normal">
                      {o.text}
                    </Chip>
                  );
                })}
              </div>
              {chosen[si] && (
                <p className={`mt-1 text-xs ${chosen[si]!.good === 2 ? "text-emerald-700" : chosen[si]!.good === 1 ? "text-amber-700" : "text-rose-700"}`}>
                  {chosen[si]!.good === 2 ? "✓ " : chosen[si]!.good === 1 ? "~ " : "✗ "}
                  {chosen[si]!.note}
                </p>
              )}
            </fieldset>
          ))}
        </div>

        <div className="space-y-3 lg:sticky lg:top-20 lg:self-start">
          <div className="space-y-2 rounded-xl bg-white p-3 ring-1 ring-slate-200">
            <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Appeal balance</p>
            <Meter label="Ethos (trust)" value={E} max={sum} color={COLOUR.e} note={`${Math.round((E / sum) * 100)}%`} />
            <Meter label="Pathos (emotion)" value={P} max={sum} color={COLOUR.p} note={`${Math.round((P / sum) * 100)}%`} />
            <Meter label="Logos (logic)" value={L} max={sum} color={COLOUR.l} note={`${Math.round((L / sum) * 100)}%`} />
            <Meter label="Rhetorical questions" value={Q} max={5} color={Q >= 4 ? "#e11d48" : Q === 3 ? "#f59e0b" : "#6366f1"} note={`${Q}`} />
            <Meter label="Line quality" value={quality} max={14} color="#4f46e5" note={`${quality}/14`} />
          </div>
          <div className="rounded-xl bg-indigo-50 p-3 text-sm text-indigo-900">
            <b>🗣️ Delivery tip:</b> {tip}
            {chosen[5]?.q3 && <span className="mt-1 block">Rule of three: rise in pitch on the first two items, fall on the third.</span>}
          </div>
          {flags.map(([t, f]) => (
            <Note key={f} tone={t}>{f}</Note>
          ))}
        </div>
      </div>

      <Step>Your opening, read aloud ({words} words ≈ {secs} seconds)</Step>
      <div className="space-y-1.5 rounded-xl bg-white p-3 ring-1 ring-slate-200" aria-live="polite">
        {lines.length === 0 && <p className="text-sm text-slate-400">Choose lines above to build your speech…</p>}
        {lines.map((x, i) => {
          const d = x.e >= x.p && x.e >= x.l ? "e" : x.p >= x.l ? "p" : "l";
          return (
            <p key={i} className="border-l-4 pl-2 text-[15px] leading-relaxed text-slate-800" style={{ borderColor: x.e + x.p + x.l === 0 ? "#cbd5e1" : COLOUR[d] }}>
              {x.text}
            </p>
          );
        })}
      </div>
    </Frame>
  );
}

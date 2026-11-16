"use client";

import { useState } from "react";
import { Chip, Frame, Note, Step } from "./ui";

type Ev = "Statistic" | "Expert view" | "Example" | "Logic" | "Anecdote";
interface Arg {
  side: "for" | "against";
  text: string;
  ev: Ev;
  evidence: string;
  w: 1 | 2 | 3;
}
interface Conclusion {
  text: string;
  kind: "for" | "against" | "persuasive";
}
interface Motion {
  id: string;
  title: string;
  args: Arg[];
  conclusions: Conclusion[];
  discursive: string;
  persuasive: string;
}

const MOTIONS: Motion[] = [
  {
    id: "phones",
    title: "Phones should be banned in schools",
    args: [
      { side: "for", text: "Phones distract from learning: notifications pull attention away even when a phone is face down.", ev: "Expert view", evidence: "UNESCO's 2023 global education report warned that phones can distract pupils from learning.", w: 3 },
      { side: "for", text: "A ban during the school day could reduce cyberbullying at school.", ev: "Logic", evidence: "No phone in your hand means fewer chances to post or share hurtful messages in school hours.", w: 2 },
      { side: "for", text: "Several countries have restricted phones in schools.", ev: "Example", evidence: "France passed a law in 2018 banning phones in primary and middle schools; the Netherlands restricted them in classrooms in 2024.", w: 2 },
      { side: "for", text: "Break times become more sociable without screens.", ev: "Anecdote", evidence: "A hypothetical example: a teacher describes livelier, chattier lunchtimes. One story is vivid but proves little.", w: 1 },
      { side: "against", text: "Phones can be useful learning tools.", ev: "Example", evidence: "Calculators, dictionaries, cameras to record experiments, translation apps for new arrivals.", w: 2 },
      { side: "against", text: "Parents want to contact their children in an emergency and on the journey home.", ev: "Logic", evidence: "Safety matters, though this could be solved by keeping phones in bags rather than banning them.", w: 2 },
      { side: "against", text: "Teaching sensible use prepares students for adult life better than a ban.", ev: "Expert view", evidence: "Many educators argue that digital self-control has to be practised, not avoided.", w: 2 },
      { side: "against", text: "Bans are hard to enforce and use up teachers' time.", ev: "Logic", evidence: "Confiscating and returning phones can interrupt lessons.", w: 1 },
      { side: "against", text: "My cousin says she needs her phone.", ev: "Anecdote", evidence: "One person's opinion: very weak evidence.", w: 1 },
    ],
    conclusions: [
      { text: "In conclusion, phones must be banned immediately: anyone who disagrees is simply ignoring the facts.", kind: "persuasive" },
      { text: "On balance, although phones can support learning, the evidence about distraction suggests schools should restrict them during lessons while still allowing contact in emergencies.", kind: "for" },
      { text: "On balance, the benefits of phones outweigh the risks, so schools should teach sensible use rather than impose a ban.", kind: "against" },
      { text: "In conclusion, banning phones is a ridiculous idea that only teachers want.", kind: "persuasive" },
    ],
    discursive: "It could be argued that phones distract students from learning. However, others believe that, used sensibly, they can support it.",
    persuasive: "Phones are destroying our concentration! How can anyone learn with a buzzing distraction in their pocket?",
  },
  {
    id: "homework",
    title: "Homework should be abolished",
    args: [
      { side: "for", text: "Not every student has a quiet place to work at home, so homework can widen gaps.", ev: "Logic", evidence: "A student sharing a small room with siblings faces a harder task than one with a desk and silence.", w: 3 },
      { side: "for", text: "Heavy homework loads can increase stress and cut into sleep.", ev: "Expert view", evidence: "Sleep experts stress that teenagers need plenty of sleep to learn and stay well.", w: 2 },
      { side: "for", text: "Free time for hobbies, sport and family builds skills school can't teach.", ev: "Logic", evidence: "Music, sport and caring for relatives build teamwork, resilience and responsibility.", w: 2 },
      { side: "for", text: "I hate homework, so everybody must.", ev: "Anecdote", evidence: "A personal feeling, stretched into a claim about everyone: very weak.", w: 1 },
      { side: "against", text: "Practising at home helps learning stick.", ev: "Expert view", evidence: "Spaced practice (revisiting material over time) is one of the best-studied memory techniques.", w: 3 },
      { side: "against", text: "Reading for pleasure at home strongly supports success in English.", ev: "Expert view", evidence: "Large international studies link regular reading for pleasure with stronger reading skills.", w: 2 },
      { side: "against", text: "Homework builds independence and time management.", ev: "Logic", evidence: "Planning your own work now prepares you for exams and further study.", w: 2 },
      { side: "against", text: "It lets parents see what their children are learning.", ev: "Logic", evidence: "Useful, but parents could also see this through other means.", w: 1 },
    ],
    conclusions: [
      { text: "Homework is pointless torture and it must end now!", kind: "persuasive" },
      { text: "On balance, the costs to wellbeing and fairness outweigh the benefits, so compulsory homework should be replaced by optional reading and revision.", kind: "for" },
      { text: "On balance, homework is worth keeping, but it should be short, purposeful and supported, so that every student can benefit.", kind: "against" },
      { text: "Anyone who wants to scrap homework is just lazy.", kind: "persuasive" },
    ],
    discursive: "Many people believe that homework helps learning to stick. Conversely, some argue that it can increase stress and widen inequality.",
    persuasive: "Do you really want to spend every evening chained to a desk? Homework steals our childhood!",
  },
];

const MARKERS_FOR = ["Firstly,", "Furthermore,", "In addition,", "Moreover,"];
const MARKERS_AG = ["However,", "Conversely,", "Nevertheless,", "On the other hand,"];
const lower = (t: string) => t[0].toLowerCase() + t.slice(1);
const r2 = (n: number) => Math.round(n * 100) / 100;

export function ArgumentScales() {
  const [mi, setMi] = useState(0);
  const [on, setOn] = useState<number[]>([]);
  const [concl, setConcl] = useState<number | null>(null);
  const [tone, setTone] = useState<"discursive" | "persuasive">("discursive");
  const m = MOTIONS[mi];

  const forW = on.filter((i) => m.args[i].side === "for").reduce((a, i) => a + m.args[i].w, 0);
  const agW = on.filter((i) => m.args[i].side === "against").reduce((a, i) => a + m.args[i].w, 0);
  const diff = forW - agW;
  const angle = Math.max(-16, Math.min(16, (agW - forW) * 3));
  const rad = (angle * Math.PI) / 180;
  const L = 105;
  const left = { x: r2(160 - L * Math.cos(rad)), y: r2(50 - L * Math.sin(rad)) };
  const right = { x: r2(160 + L * Math.cos(rad)), y: r2(50 + L * Math.sin(rad)) };
  const hasBoth = forW > 0 && agW > 0;
  const balance = Math.abs(diff) <= 1 ? "level" : diff > 0 ? "for" : "against";

  function toggle(i: number) {
    setOn(on.includes(i) ? on.filter((x) => x !== i) : [...on, i]);
    setConcl(null);
  }

  let verdict: { tone: "good" | "ok" | "bad"; text: string } | null = null;
  if (concl !== null) {
    const c = m.conclusions[concl];
    if (!hasBoth) verdict = { tone: "bad", text: "A discursive essay must weigh BOTH sides before reaching a judgement. Add arguments to the emptier pan first." };
    else if (c.kind === "persuasive") verdict = { tone: "bad", text: "That's persuasive tone: one-sided, emotive, even insulting. Great for a speech, wrong for discursive writing, where you weigh evidence calmly and judge fairly." };
    else if (balance === "level") verdict = { tone: "ok", text: `Your scales are almost level, so either 'on balance' judgement can work, but you must explain which argument tips it for you. A judgement that acknowledges the other side ("although…") is ideal here.` };
    else if (c.kind === balance) verdict = { tone: "good", text: "✓ Your conclusion follows your evidence: the heavier side wins, the other side is acknowledged, and the tone stays measured ('On balance…')." };
    else verdict = { tone: "bad", text: "Your conclusion contradicts your own scales! The evidence you chose is heavier on the other side. Either pick a matching conclusion or add stronger arguments to support this one." };
  }

  const forArgs = on.filter((i) => m.args[i].side === "for");
  const agArgs = on.filter((i) => m.args[i].side === "against");

  return (
    <Frame
      title="Argument scales: weigh it up"
      emoji="⚖️"
      caption={
        <>
          <b>Discursive</b> writing explores both sides fairly in a measured, impersonal tone (&lsquo;it could be argued&rsquo;, &lsquo;however&rsquo;, &lsquo;on balance&rsquo;) and only gives a judgement at the end, which must follow from the evidence. <b>Persuasive</b> writing picks one side and uses emotion to win. Not all arguments weigh the same: expert evidence and sound logic outweigh a single anecdote.
        </>
      }
    >
      <div className="flex flex-wrap gap-2">
        {MOTIONS.map((x, i) => (
          <Chip key={x.id} on={mi === i} onClick={() => { setMi(i); setOn([]); setConcl(null); }}>{x.title}</Chip>
        ))}
      </div>

      <svg viewBox="0 0 320 170" className="mx-auto mt-3 w-full max-w-md" role="img" aria-label={`Scales: for ${forW}, against ${agW}. ${balance === "level" ? "Roughly level" : `Tipping ${balance}`}.`}>
        <path d="M160 52 L135 150 H185 Z" fill="#cbd5e1" />
        <rect x="110" y="150" width="100" height="8" rx="4" fill="#94a3b8" />
        <line x1={left.x} y1={left.y} x2={right.x} y2={right.y} stroke="#334155" strokeWidth="5" strokeLinecap="round" style={{ transition: "all .5s" }} />
        <circle cx="160" cy="50" r="6" fill="#334155" />
        {[{ p: left, w: forW, c: "#10b981", t: "FOR" }, { p: right, w: agW, c: "#f43f5e", t: "AGAINST" }].map(({ p, w, c, t }) => (
          <g key={t} style={{ transform: `translate(${p.x}px, ${p.y}px)`, transition: "transform .5s" }}>
            <line x1="-26" y1="0" x2="-34" y2="40" stroke="#64748b" />
            <line x1="26" y1="0" x2="34" y2="40" stroke="#64748b" />
            <path d="M-40 40 H40 Q36 58 0 58 Q-36 58 -40 40 Z" fill="#e2e8f0" stroke="#64748b" />
            {Array.from({ length: Math.min(w, 12) }).map((_, k) => (
              <rect key={k} x={-30 + (k % 6) * 10} y={30 - Math.floor(k / 6) * 9} width="9" height="8" rx="1.5" fill={c} />
            ))}
            <text x="0" y="52" fontSize="9" fontWeight="bold" textAnchor="middle" fill="#334155">{t} {w}</text>
          </g>
        ))}
      </svg>

      <Step n={1}>Add arguments from the bank (tap again to remove)</Step>
      <div className="grid gap-3 md:grid-cols-2">
        {(["for", "against"] as const).map((side) => (
          <div key={side}>
            <p className={`mb-1 text-sm font-bold ${side === "for" ? "text-emerald-700" : "text-rose-700"}`}>{side === "for" ? "For the motion" : "Against the motion"}</p>
            <div className="grid gap-1.5">
              {m.args.map((a, i) =>
                a.side !== side ? null : (
                  <button
                    key={i}
                    type="button"
                    aria-pressed={on.includes(i)}
                    onClick={() => toggle(i)}
                    className={`min-h-10 rounded-xl p-2.5 text-left text-sm transition ${on.includes(i) ? (side === "for" ? "bg-emerald-600 text-white" : "bg-rose-600 text-white") : "bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50"}`}
                  >
                    <span className="font-semibold">{a.text}</span>
                    <span className={`mt-1 flex flex-wrap items-center gap-1.5 text-xs ${on.includes(i) ? "text-white/90" : "text-slate-500"}`}>
                      <span className={`rounded-full px-1.5 py-0.5 font-bold ${on.includes(i) ? "bg-white/20" : "bg-slate-100"}`}>{a.ev}</span>
                      <span aria-label={`weight ${a.w} of 3`}>{"●".repeat(a.w)}{"○".repeat(3 - a.w)}</span>
                    </span>
                    {on.includes(i) && <span className="mt-1 block text-xs text-white/90">{a.evidence}</span>}
                  </button>
                ),
              )}
            </div>
          </div>
        ))}
      </div>

      {on.length > 0 && (
        <>
          <Step>Your essay plan (block structure)</Step>
          <ol className="space-y-1 rounded-xl bg-white p-3 text-sm text-slate-700 ring-1 ring-slate-200">
            <li><b>Intro:</b> explain why &lsquo;{m.title.toLowerCase()}&rsquo; is debated, without giving your view yet.</li>
            {forArgs.map((i, k) => <li key={i}><b className="text-emerald-700">{MARKERS_FOR[k % 4]}</b> {lower(m.args[i].text)}</li>)}
            {agArgs.map((i, k) => <li key={i}><b className="text-rose-700">{MARKERS_AG[k % 4]}</b> {lower(m.args[i].text)}</li>)}
            <li><b>Conclusion:</b> your judgement, which must match the scales.</li>
          </ol>
        </>
      )}

      <Step n={2}>Pick a conclusion that matches your scales</Step>
      <div className="grid gap-1.5">
        {m.conclusions.map((c, i) => (
          <Chip key={i} on={concl === i} onClick={() => setConcl(i)} className="font-normal">{c.text}</Chip>
        ))}
      </div>
      {verdict && <div className="mt-3"><Note tone={verdict.tone}>{verdict.text}</Note></div>}

      <Step n={3}>Hear the difference in tone</Step>
      <div className="flex gap-2">
        <Chip on={tone === "discursive"} onClick={() => setTone("discursive")}>Discursive</Chip>
        <Chip on={tone === "persuasive"} onClick={() => setTone("persuasive")}>Persuasive</Chip>
      </div>
      <blockquote className="mt-2 rounded-xl border-l-4 border-slate-300 bg-white p-3 text-[15px] italic text-slate-800">
        {tone === "discursive" ? m.discursive : m.persuasive}
      </blockquote>
      <p className="mt-1 text-xs text-slate-600">
        {tone === "discursive"
          ? "Third person, hedging ('could be argued', 'many people believe'), discourse markers ('however', 'conversely') and both sides in view."
          : "Exclamations, rhetorical questions, emotive words ('destroying', 'steals') and only one side: powerful, but not balanced."}
      </p>
    </Frame>
  );
}

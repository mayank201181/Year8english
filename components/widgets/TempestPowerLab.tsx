"use client";

import { useState } from "react";
import { Action, Chip, Frame, Meter, Note, Step } from "./ui";

interface Moment {
  id: string;
  scene: string;
  title: string;
  quote: string;
  speaker: string;
  rulerView: string;
  colonialView: string;
  power: number; // Prospero's control 0-10
  mercy: number; // Mercy/empathy 0-10
  question: string;
  options: [text: string, best: boolean, feedback: string][];
}

const MOMENTS: Moment[] = [
  {
    id: "ariel",
    scene: "Act 1 Scene 2",
    title: "Ariel asks for liberty",
    quote: "ARIEL: Is there more toil? Since thou dost give me pains,\nLet me remember thee what thou hast promised,\nWhich is not yet perform'd me.\nPROSPERO: How now? moody?\nWhat is't thou canst demand?\nARIEL: My liberty.",
    speaker: "Ariel & Prospero, Act 1 Scene 2",
    rulerView: "Prospero rescued Ariel from twelve years wedged inside a cloven pine by Sycorax, and needs Ariel for just one crucial afternoon so justice can be done.",
    colonialView: "Prospero uses past rescue as debt bondage, threatening to 'peg thee in his knotty entrails' for twelve more winters the instant Ariel asks for a kept promise.",
    power: 9,
    mercy: 2,
    question: "Which analytical claim best captures the tension in this exchange?",
    options: [
      ["Prospero is purely gentle and never threatens Ariel.", false, "Look closely at the text: Prospero calls Ariel 'malignant thing' and threatens twelve more years trapped in an oak."],
      ["Shakespeare makes Prospero's authority feel uneasy: even though he freed Ariel from Sycorax, he maintains control through reminders of debt and violent threats.", true, "Spot on — weighing both the rescue and the threat creates nuanced, top-band analysis."],
      ["Ariel refuses to help Prospero and escapes immediately.", false, "In fact, Ariel submits ('Pardon, master; I will be correspondent to command') and carries out every task."],
    ],
  },
  {
    id: "caliban-claim",
    scene: "Act 1 Scene 2",
    title: "'This island's mine'",
    quote: "This island's mine, by Sycorax my mother,\nWhich thou takest from me. When thou camest first,\nThou strok'st me and made much of me…\nAnd then I loved thee,\nAnd show'd thee all the qualities o' th' isle,\nThe fresh springs, brine-pits, barren place and fertile.",
    speaker: "Caliban, Act 1 Scene 2",
    rulerView: "Prospero and Miranda treated Caliban with 'human care' and taught him language until he attempted to violate Miranda, forcing Prospero to confine him.",
    colonialView: "Caliban begins as a generous host sharing survival knowledge with newcomers, only to be dispossessed, enslaved and penned in a 'hard rock' on his own land.",
    power: 8,
    mercy: 3,
    question: "Why does Shakespeare give Caliban eloquent blank verse here instead of comic prose?",
    options: [
      ["Because Shakespeare forgot that servants usually speak prose.", false, "Shakespeare switches between verse and prose deliberately — Caliban speaks prose later with the drunken servants, proving this verse is a choice."],
      ["Giving Caliban dignified iambic pentameter and vivid natural lists forces the audience to take his grievance seriously rather than dismissing him as a 'beast'.", true, "Exactly: form reinforces meaning. His rhythmic, specific verse complicates Prospero's label 'poisonous slave'."],
      ["To prove that Caliban is secretly an Italian nobleman in disguise.", false, "Caliban was born on the island to Sycorax; his nobility of speech comes from his bond with the island, not Italian rank."],
    ],
  },
  {
    id: "noises",
    scene: "Act 3 Scene 2",
    title: "'The isle is full of noises'",
    quote: "Be not afeard; the isle is full of noises,\nSounds and sweet airs, that give delight and hurt not.\nSometimes a thousand twangling instruments\nWill hum about mine ears… that, when I waked,\nI cried to dream again.",
    speaker: "Caliban, Act 3 Scene 2",
    rulerView: "Even the island's music ultimately comes from Ariel and Prospero's art, showing how magic enchants everyone on the island.",
    colonialView: "The supposedly 'savage' slave speaks the most lyrical poetry in the play, while the European newcomers Stephano and Trinculo only want free drink and power.",
    power: 5,
    mercy: 6,
    question: "What is the dramatic effect of 'I cried to dream again'?",
    options: [
      ["It exposes profound sensitivity and longing in Caliban, creating pathos and challenging one-sided views of him as merely monstrous.", true, "Precisely — the contrast between his waking misery and aesthetic wonder wins genuine audience sympathy."],
      ["It shows Caliban is frightened of loud noises on the island.", false, "The opposite: Stephano and Trinculo are afraid, whereas Caliban reassures them ('Be not afeard') because he loves the music."],
      ["It proves Stephano is a wiser ruler than Prospero.", false, "Stephano immediately reduces this beauty to greed ('where I shall have my music for nothing')."],
    ],
  },
  {
    id: "mercy",
    scene: "Act 5 Scene 1 & Epilogue",
    title: "Virtue over vengeance",
    quote: "Though with their high wrongs I am struck to th' quick,\nYet with my nobler reason 'gainst my fury\nDo I take part: the rarer action is\nIn virtue than in vengeance…\nNow my charms are all o'erthrown,\nAnd what strength I have's mine own,\nWhich is most faint.",
    speaker: "Prospero, Act 5 Scene 1 & Epilogue",
    rulerView: "Prompted by Ariel's compassion, Prospero conquers his own anger, breaks his staff, drowns his book, frees Ariel, and humbly begs the audience's pardon.",
    colonialView: "Prospero surrenders his magic and acknowledges Caliban ('this thing of darkness I / Acknowledge mine'), though Antonio stays silent when forgiven.",
    power: 1,
    mercy: 9,
    question: "How does the Epilogue invert the power pyramid of the whole play?",
    options: [
      ["Prospero uses one final spell to trap the audience in the Globe.", false, "He explicitly says 'Now my charms are all o'erthrown' — he has given up his magic."],
      ["Prospero hands his magic staff to Miranda so she can rule the island.", false, "He has promised to break his staff and drown his book, and they sail back to Italy."],
      ["The all-powerful magician becomes a powerless actor trapped on a bare stage until the audience's applause and forgiveness 'set me free'.", true, "Brilliant — the master who controlled everyone on the island now depends entirely on our mercy."],
    ],
  },
];

export function TempestPowerLab() {
  const [mi, setMi] = useState(0);
  const [lens, setLens] = useState<"both" | "ruler" | "colonial">("both");
  const [choice, setChoice] = useState<Record<string, number>>({});

  const m = MOMENTS[mi];
  const picked = choice[m.id];

  return (
    <Frame
      title="Island power & perspective explorer"
      emoji="🌊"
      caption={
        <>
          <i>The Tempest</i> refuses simple villains and heroes. A <b>Jacobean court reading</b> sees Prospero as a rightful ruler learning Christian mercy; a <b>post-colonial reading</b> asks who owned the island first and how language and debt are used to control Ariel and Caliban. Holding <b>both readings together</b> unlocks the highest marks.
        </>
      }
    >
      <Step n={1}>Choose a turning point on the island</Step>
      <div className="flex flex-wrap gap-2">
        {MOMENTS.map((item, i) => (
          <Chip key={item.id} on={mi === i} onClick={() => setMi(i)}>
            {item.scene}: {item.title} {choice[item.id] !== undefined && (item.options[choice[item.id]][1] ? "✓" : "•")}
          </Chip>
        ))}
      </div>

      <blockquote className="mt-3 whitespace-pre-line rounded-xl border-l-4 border-rose-400 bg-[#fffaf0] px-3.5 py-2.5 font-serif text-[16px] leading-relaxed text-slate-800">
        {m.quote}
        <cite className="mt-1.5 block font-sans text-xs font-semibold not-italic text-rose-800/80">{m.speaker}</cite>
      </blockquote>

      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <Meter label="Prospero's grip on power" value={m.power} max={10} color="#e11d48" note={`${m.power}/10`} />
        <Meter label="Mercy & empathy in the scene" value={m.mercy} max={10} color="#10b981" note={`${m.mercy}/10`} />
      </div>

      <Step n={2}>Compare critical lenses</Step>
      <div className="mb-2 flex flex-wrap gap-1.5">
        <Chip on={lens === "both"} onClick={() => setLens("both")}>⚖️ Side-by-side</Chip>
        <Chip on={lens === "ruler"} onClick={() => setLens("ruler")}>👑 Sympathetic to Prospero</Chip>
        <Chip on={lens === "colonial"} onClick={() => setLens("colonial")}>🏝️ Sympathetic to Ariel / Caliban</Chip>
      </div>
      <div className={`grid gap-2.5 ${lens === "both" ? "sm:grid-cols-2" : ""}`}>
        {(lens === "both" || lens === "ruler") && (
          <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-3 text-sm text-amber-950">
            <p className="text-xs font-bold uppercase tracking-wide text-amber-700">👑 Ruler &amp; order lens</p>
            <p className="mt-1 leading-relaxed">{m.rulerView}</p>
          </div>
        )}
        {(lens === "both" || lens === "colonial") && (
          <div className="rounded-xl border border-teal-200 bg-teal-50/70 p-3 text-sm text-teal-950">
            <p className="text-xs font-bold uppercase tracking-wide text-teal-700">🏝️ Freedom &amp; post-colonial lens</p>
            <p className="mt-1 leading-relaxed">{m.colonialView}</p>
          </div>
        )}
      </div>

      <Step n={3}>{m.question}</Step>
      <div className="grid gap-2">
        {m.options.map(([text, best], idx) => (
          <Chip
            key={idx}
            on={picked === idx}
            onClick={() => setChoice({ ...choice, [m.id]: idx })}
            className="font-normal"
          >
            {text} {picked === idx ? (best ? "✓" : "✗") : ""}
          </Chip>
        ))}
      </div>

      {picked !== undefined && (
        <div className="mt-3 space-y-2">
          <Note tone={m.options[picked][1] ? "good" : "bad"}>
            {m.options[picked][2]}
          </Note>
          {mi < MOMENTS.length - 1 && (
            <Action tone="light" onClick={() => setMi(mi + 1)}>Next moment →</Action>
          )}
        </div>
      )}
    </Frame>
  );
}

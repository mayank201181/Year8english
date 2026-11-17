"use client";

import { useState } from "react";
import { Action, Chip, Frame, Meter, Note, Step } from "./ui";

interface Beat {
  id: string;
  act: string;
  title: string;
  quote: string;
  seems: string;
  reality: string;
  actionScore: number; // 0 = total paralysis, 10 = decisive action
  whyQuestion: string;
  choices: [label: string, ok: boolean, explain: string][];
}

const BEATS: Beat[] = [
  {
    id: "seems",
    act: "1.2",
    title: "'Seems, madam! nay it is'",
    quote: "Seems, madam! nay it is; I know not 'seems.'\n'Tis not alone my inky cloak, good mother…\nBut I have that within which passeth show;",
    seems: "Claudius holds a glittering wedding celebration and acts like a caring stepfather; Gertrude urges Hamlet to stop wearing mourning black.",
    reality: "Beneath the royal smiles hides fratricide (brother-murder), and Hamlet's grief is authentic while the whole court performs loyalty.",
    actionScore: 2,
    whyQuestion: "What central theme of Hamlet does the contrast between 'inky cloak' and 'that within' introduce?",
    choices: [
      ["Appearance versus reality: outward clothes and smiles can be acted, unlike genuine inner grief.", true, "Exactly — Hamlet points out that mourning clothes are 'actions that a man might play', introducing theatre and deceit right in Act 1."],
      ["Magical transformation: Hamlet's cloak makes him invisible.", false, "'Inky cloak' simply means his black mourning clothes, not a magic cloak."],
      ["Ambition for the throne: Hamlet only wants to wear the crown.", false, "At this point Hamlet does not even know his father was murdered; his focus is grief and disgust at his mother's hasty remarriage."],
    ],
  },
  {
    id: "ghost",
    act: "1.5",
    title: "The Ghost's command",
    quote: "The serpent that did sting thy father's life\nNow wears his crown…\nThe time is out of joint: O cursed spite,\nThat ever I was born to set it right!",
    seems: "Official Denmark was told Old Hamlet died after a snake stung him while sleeping in his orchard.",
    reality: "The Ghost reveals Claudius poured poison in his ear — yet in Protestant England, a ghost could also be a devil tempting a soul to damnation.",
    actionScore: 4,
    whyQuestion: "Why doesn't Hamlet rush straight off to stab Claudius at the end of Act 1?",
    choices: [
      ["He immediately forgives Claudius because he dislikes violence.", false, "He swears to 'sweep to my revenge', so he has certainly not forgiven Claudius."],
      ["He feels crushed by the burden ('O cursed spite') AND needs proof that the Ghost is honest rather than a devil luring him into murder.", true, "Spot on — both his philosophical temperament and genuine Renaissance doubt about spirits explain his caution."],
      ["He forgets what the Ghost told him as soon as morning comes.", false, "He vows to wipe everything else from his memory so the Ghost's command lives 'all alone within the book and volume of my brain'."],
    ],
  },
  {
    id: "mousetrap",
    act: "2.2–3.2",
    title: "The Mousetrap play",
    quote: "The play's the thing\nWherein I'll catch the conscience of the king.",
    seems: "Hamlet puts on an 'antic disposition' (pretended madness) and stages an old Italian murder play for innocent court entertainment.",
    reality: "The play mirrors Old Hamlet's poisoning; when Claudius panics and calls for lights, Hamlet finally has eyewitness proof of guilt.",
    actionScore: 7,
    whyQuestion: "Why is it ironic that Hamlet uses a stage play to uncover the truth?",
    choices: [
      ["Because theatre is artificial 'pretending', yet in corrupt Elsinore a fictional play exposes the real murder.", true, "Brilliant point — Shakespeare uses metadrama (a play within a play) so fiction reveals fact."],
      ["Because Claudius wrote the play himself.", false, "Travelling players perform 'The Murder of Gonzago', with extra lines written by Hamlet."],
      ["Because nobody in the court watches the play.", false, "The whole court attends, including Claudius, Gertrude, Polonius and Ophelia."],
    ],
  },
  {
    id: "prayer",
    act: "3.3",
    title: "Claudius kneeling at prayer",
    quote: "HAMLET: Now might I do it pat, now he is praying;\nAnd now I'll do't. And so he goes to heaven;\nAnd so am I revenged. That would be scann'd…\nCLAUDIUS: My words fly up, my thoughts remain below:\nWords without thoughts never to heaven go.",
    seems: "Alone and unarmed on his knees, Claudius looks like a repentant sinner making peace with God.",
    reality: "Dramatic irony! Claudius admits he cannot truly repent because he refuses to give up his crown and queen — so Hamlet spares him for a false reason.",
    actionScore: 3,
    whyQuestion: "Why is Act 3 Scene 3 the ultimate example of dramatic irony in Hamlet?",
    choices: [
      ["The audience knows Polonius is hiding behind the arras in this scene.", false, "Polonius hides behind the arras in the very next scene (3.4, Gertrude's closet), not here."],
      ["Hamlet sheathes his sword believing prayer would send Claudius's soul to heaven, while only the audience hears Claudius confess his prayer has failed.", true, "Yes! Hamlet's overthinking ('That would be scann'd') misses his cleanest chance, and every death that follows stems from this moment."],
      ["Claudius knows Hamlet is standing behind him with a sword.", false, "Claudius has no idea Hamlet was ever in the room."],
    ],
  },
  {
    id: "yorick",
    act: "5.1–5.2",
    title: "Yorick's skull & 'the readiness is all'",
    quote: "Alas, poor Yorick! I knew him, Horatio: a fellow of infinite jest…\nThere's a special providence in the fall of a sparrow… the readiness is all.",
    seems: "A gravedigger jokes beside open graves; Claudius stages a friendly fencing match with dull foils and wine.",
    reality: "Holding Yorick's skull makes death concrete rather than terrifying; meanwhile Laertes's foil is unbated and poisoned, and Claudius's cup holds poison.",
    actionScore: 9,
    whyQuestion: "How has Hamlet's attitude shifted between 'To be, or not to be' (3.1) and 'the readiness is all' (5.2)?",
    choices: [
      ["In Act 3 he was paralysed by fear of 'what dreams may come' after death; by Act 5 he accepts mortality and trusts providence.", true, "Exact — confronting death in the graveyard frees him from anxious paralysis so he faces the duel with calm resolve."],
      ["He decides to flee Denmark and never fight Laertes.", false, "He accepts the fencing wager despite feeling a 'gaingiving' (misgiving) around his heart."],
      ["He still doubts whether Claudius killed his father.", false, "He has been certain of Claudius's guilt ever since The Mousetrap in Act 3 Scene 2."],
    ],
  },
];

export function HamletMindLab() {
  const [bi, setBi] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [ans, setAns] = useState<Record<string, number>>({});

  const b = BEATS[bi];
  const picked = ans[b.id];

  function selectBeat(i: number) {
    setBi(i);
    setFlipped(false);
  }

  return (
    <Frame
      title="Elsinore decoder: 'seems' vs 'is' & Hamlet's delay"
      emoji="💀"
      caption={
        <>
          Elsinore is a court of masks, spies and poison where nothing is what it <b>seems</b>. Tracking how <b>appearance clashes with reality</b> — and <i>why</i> Hamlet hesitates at each turning point — turns plot summary into sharp dramatic analysis.
        </>
      }
    >
      <Step n={1}>Follow Hamlet through the five acts</Step>
      <div className="flex flex-wrap gap-1.5">
        {BEATS.map((item, i) => (
          <Chip key={item.id} on={bi === i} onClick={() => selectBeat(i)}>
            Act {item.act} · {item.title} {ans[item.id] !== undefined && (item.choices[ans[item.id]][1] ? "✓" : "•")}
          </Chip>
        ))}
      </div>

      <blockquote className="mt-3 whitespace-pre-line rounded-xl border-l-4 border-rose-400 bg-[#fffaf0] px-3.5 py-2.5 font-serif text-[16px] leading-relaxed text-slate-800">
        {b.quote}
        <cite className="mt-1 block font-sans text-xs font-semibold not-italic text-rose-800/80">Hamlet, Act {b.act}</cite>
      </blockquote>

      <div className="mt-3">
        <Meter
          label="Momentum toward action (vs hesitation)"
          value={b.actionScore}
          max={10}
          color="#6366f1"
          note={b.actionScore <= 3 ? `${b.actionScore}/10 · Stalled in thought` : b.actionScore <= 7 ? `${b.actionScore}/10 · Testing & plotting` : `${b.actionScore}/10 · Ready to act`}
        />
      </div>

      <Step n={2}>Peel back Elsinore&apos;s mask</Step>
      <div className="grid gap-2.5 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-3 text-sm">
          <p className="text-xs font-bold uppercase tracking-wide text-slate-500">🎭 Outward appearance (&lsquo;Seems&rsquo;)</p>
          <p className="mt-1 leading-relaxed text-slate-800">{b.seems}</p>
        </div>
        <div className="rounded-xl border border-indigo-200 bg-indigo-50/70 p-3 text-sm">
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-wide text-indigo-700">🕯️ Hidden reality (&lsquo;Is&rsquo;)</p>
            {!flipped && (
              <button type="button" onClick={() => setFlipped(true)} className="rounded-lg bg-indigo-600 px-2.5 py-1 text-xs font-bold text-white hover:bg-indigo-700">
                Unmask →
              </button>
            )}
          </div>
          {flipped ? (
            <p className="mt-1 leading-relaxed text-indigo-950">{b.reality}</p>
          ) : (
            <p className="mt-1 italic text-indigo-700/70">Tap &ldquo;Unmask&rdquo; to reveal what the audience sees beneath the surface.</p>
          )}
        </div>
      </div>

      <Step n={3}>{b.whyQuestion}</Step>
      <div className="grid gap-2">
        {b.choices.map(([label, ok], idx) => (
          <Chip key={idx} on={picked === idx} onClick={() => setAns({ ...ans, [b.id]: idx })} className="font-normal">
            {label} {picked === idx ? (ok ? "✓" : "✗") : ""}
          </Chip>
        ))}
      </div>

      {picked !== undefined && (
        <div className="mt-3 space-y-2">
          <Note tone={b.choices[picked][1] ? "good" : "bad"}>{b.choices[picked][2]}</Note>
          {bi < BEATS.length - 1 && (
            <Action tone="light" onClick={() => selectBeat(bi + 1)}>Next turning point →</Action>
          )}
        </div>
      )}
    </Frame>
  );
}

"use client";

import { useState } from "react";
import { Action, Chip, Frame, Note, Step } from "./ui";

type Opt = [text: string, quality: 0 | 1 | 2];
interface ZoomQuote {
  id: string;
  label: string;
  writer: string;
  text: string;
  source: string;
  key: string; // the loaded word (lower case, no punctuation)
  alsoGood?: string[];
  web: string[];
  technique: Opt[];
  connotation: Opt[];
  effect: Opt[];
  theme: Opt[];
}

const QUOTES: ZoomQuote[] = [
  {
    id: "slave",
    label: "The Tempest: Prospero",
    writer: "Shakespeare",
    text: "Thou poisonous slave, got by the devil himself\nUpon thy wicked dam, come forth!",
    source: "The Tempest, 1.2 (Prospero to Caliban)",
    key: "slave",
    alsoGood: ["poisonous", "devil", "wicked"],
    web: ["owned like property", "no freedom", "forced labour", "treated as less than human", "the colonised", "a master's power"],
    technique: [["dehumanising noun", 2], ["simile", 0], ["word", 1]],
    connotation: [["ownership and total control, as if Caliban were property", 2], ["something bad", 1], ["a loyal servant who enjoys his work", 0]],
    effect: [["exposes how Prospero sees Caliban as less than human and makes the audience question whether his power is fair", 2], ["makes the reader want to read on", 1], ["proves that Prospero is a gentle and kind master", 0]],
    theme: [["power, control and colonisation", 2], ["the play", 1], ["young love", 0]],
  },
  {
    id: "sweet",
    label: "The Tempest: Caliban",
    writer: "Shakespeare",
    text: "Be not afeard; the isle is full of noises,\nSounds and sweet airs, that give delight and hurt not.",
    source: "The Tempest, 3.2 (Caliban)",
    key: "sweet",
    alsoGood: ["delight", "noises", "airs"],
    web: ["gentle", "music", "pleasure", "comfort", "beauty", "the island's magic"],
    technique: [["sensory adjective", 2], ["onomatopoeia", 0], ["nice word", 1]],
    connotation: [["gentleness and pleasure, appealing to our sense of hearing", 2], ["something good", 1], ["danger and threat", 0]],
    effect: [["reveals Caliban's sensitive, poetic side, challenging the idea that he is simply a monster", 2], ["makes it more interesting", 1], ["shows that Caliban wants to frighten Stephano and Trinculo", 0]],
    theme: [["who the island really belongs to, and nature versus nurture", 2], ["the island", 1], ["revenge in Denmark", 0]],
  },
  {
    id: "rotten",
    label: "Hamlet: Marcellus",
    writer: "Shakespeare",
    text: "Something is rotten in the state of Denmark.",
    source: "Hamlet, 1.4 (Marcellus)",
    key: "rotten",
    alsoGood: ["denmark", "state"],
    web: ["decay", "disease", "a foul smell", "hidden from the outside", "spreading", "death"],
    technique: [["metaphor of decay", 2], ["personification", 0], ["describing word", 1]],
    connotation: [["corruption spreading unseen from the inside, like food going bad", 2], ["things are not good", 1], ["something old but valuable", 0]],
    effect: [["suggests that a hidden crime has infected the whole country, building a sense of unease for the audience", 2], ["makes the audience feel things", 1], ["shows that Denmark is a happy, healthy kingdom", 0]],
    theme: [["corruption and decay", 2], ["the story", 1], ["magic and forgiveness", 0]],
  },
  {
    id: "sun",
    label: "Romeo and Juliet: Romeo",
    writer: "Shakespeare",
    text: "But soft, what light through yonder window breaks?\nIt is the east, and Juliet is the sun.",
    source: "Romeo and Juliet, 2.2 (Romeo)",
    key: "sun",
    alsoGood: ["light", "east", "breaks"],
    web: ["warmth", "life", "the centre of his universe", "a new day, hope", "brightness", "can also burn"],
    technique: [["metaphor", 2], ["simile", 0], ["image", 1]],
    connotation: [["light, warmth and life, as if Romeo's whole world now revolves around her", 2], ["Juliet is pretty", 1], ["coldness and darkness", 0]],
    effect: [["conveys how quickly and completely Romeo's love has taken over, perhaps dangerously intensely", 2], ["makes it sound nice", 1], ["shows that Romeo is calm and thinks carefully before acting", 0]],
    theme: [["intense, impulsive love", 2], ["love", 1], ["colonial power", 0]],
  },
  {
    id: "mask",
    label: "Dunbar: We Wear the Mask",
    writer: "Dunbar",
    text: "We wear the mask that grins and lies,\nIt hides our cheeks and shades our eyes,",
    source: "Paul Laurence Dunbar, 'We Wear the Mask' (1895)",
    key: "mask",
    alsoGood: ["grins", "lies", "hides", "shades"],
    web: ["a false face", "performance", "hiding pain", "protection", "disguise", "everyone wears it: 'we'"],
    technique: [["extended metaphor", 2], ["alliteration", 0], ["noun", 1]],
    connotation: [["a false face worn to hide true feelings and protect yourself", 2], ["dressing up", 1], ["joy and freedom", 0]],
    effect: [["suggests Black Americans in Dunbar's time were forced to perform happiness to survive racism, so the reader senses the pain underneath", 2], ["makes the poem more descriptive", 1], ["shows that the speaker loves fancy-dress parties", 0]],
    theme: [["identity, prejudice and hidden suffering", 2], ["feelings", 1], ["the joys of nature", 0]],
  },
  {
    id: "huddled",
    label: "Lazarus: The New Colossus",
    writer: "Lazarus",
    text: "Give me your tired, your poor,\nYour huddled masses yearning to breathe free,",
    source: "Emma Lazarus, 'The New Colossus' (1883)",
    key: "huddled",
    alsoGood: ["yearning", "tired", "poor", "masses"],
    web: ["crowded together", "cold", "fear", "seeking warmth", "vulnerable", "safety in numbers"],
    technique: [["adjective", 2], ["metaphor", 0], ["word choice", 1]],
    connotation: [["people pressed together for warmth and safety, vulnerable and afraid", 2], ["lots of people", 1], ["wealthy, confident travellers", 0]],
    effect: [["creates sympathy for migrants and presents America as a welcoming refuge", 2], ["helps the reader imagine it", 1], ["warns migrants to stay away", 0]],
    theme: [["migration and belonging", 2], ["people", 1], ["revenge", 0]],
  },
];

const SLOTS = ["technique", "connotation", "effect", "theme"] as const;
type Slot = (typeof SLOTS)[number];
const SLOT_LABEL: Record<Slot, string> = { technique: "Technique", connotation: "Connotation", effect: "Effect", theme: "Theme" };
const WHY: Record<Slot, [string, string, string]> = {
  technique: ["Wrong term: check what kind of word or device this really is.", "Too vague: name the technique precisely.", "Precise terminology that fits the word."],
  connotation: ["This misreads the word: its connotations point the other way.", "Vague: 'good' or 'bad' doesn't unpack anything.", "Specific connotations: you've really unpacked the word."],
  effect: ["Not supported by the text.", "Generic: you could say this about any quotation.", "Developed: says what it reveals and how it affects the audience."],
  theme: ["Wrong text or theme.", "Too general: name the big idea.", "Links the word to a big idea in the text."],
};

// Rotate option order deterministically so the best answer isn't always first.
function rotated(opts: Opt[], by: number): { opt: Opt; idx: number }[] {
  return opts.map((_, i) => {
    const idx = (i + by) % opts.length;
    return { opt: opts[idx], idx };
  });
}
// Rounded so server and client render identical numbers.
function spoke(i: number, n: number, r = 36): [number, number] {
  const a = (i / n) * 2 * Math.PI - Math.PI / 2;
  return [Math.round((50 + r * Math.cos(a)) * 100) / 100, Math.round((50 + r * Math.sin(a)) * 100) / 100];
}
const clean = (w: string) => w.toLowerCase().replace(/[^a-z']/g, "");

export function ConnotationZoom() {
  const [qi, setQi] = useState(0);
  const q = QUOTES[qi];
  const [tapped, setTapped] = useState<string | null>(null);
  const [zoomed, setZoomed] = useState(false);
  const [pick, setPick] = useState<Record<Slot, number | null>>({ technique: null, connotation: null, effect: null, theme: null });
  const [checked, setChecked] = useState(false);

  function choose(i: number) {
    setQi(i);
    setTapped(null);
    setZoomed(false);
    setPick({ technique: null, connotation: null, effect: null, theme: null });
    setChecked(false);
  }
  function tapWord(raw: string) {
    const w = clean(raw);
    if (!w) return;
    setTapped(w);
    if (w === q.key) setZoomed(true);
  }

  const val = (s: Slot) => (pick[s] === null ? null : q[s][pick[s] as number]);
  const total = SLOTS.reduce((a, s) => a + (val(s)?.[1] ?? 0), 0);
  const complete = SLOTS.every((s) => pick[s] !== null);
  const fill = (s: Slot) => val(s)?.[0] ?? `[${SLOT_LABEL[s].toLowerCase()}]`;
  const keyDisplay = q.text.split(/\s+/).find((w) => clean(w) === q.key)?.replace(/[^\w']/g, "") ?? q.key;

  const tappedMsg =
    tapped === null || tapped === q.key
      ? null
      : q.alsoGood?.includes(tapped)
      ? `Good eye: '${tapped}' is loaded too. But one word here carries even more meaning. Keep looking.`
      : `'${tapped}' isn't doing much work. Look for the most loaded word: the one with the most connotations.`;

  return (
    <Frame
      title="Connotation zoom: one word, many meanings"
      emoji="🔎"
      caption={
        <>
          <b>Denotation</b> is what a word literally means; <b>connotation</b> is everything it suggests. Top answers zoom in on a single loaded word and build a chain: <b>technique → connotation → effect → theme</b>. If you can swap your sentence onto any other quotation, it&apos;s too general.
        </>
      }
    >
      <Step n={1}>Pick a quotation</Step>
      <div className="flex flex-wrap gap-2">
        {QUOTES.map((x, i) => (
          <Chip key={x.id} on={qi === i} onClick={() => choose(i)}>
            {x.label}
          </Chip>
        ))}
      </div>

      <Step n={2}>Tap the most loaded word to zoom in</Step>
      <blockquote className="rounded-xl border-l-4 border-amber-400 bg-[#fffaf0] px-3 py-2 font-serif text-[17px] leading-loose text-slate-800">
        {q.text.split("\n").map((ln, li) => (
          <span key={li} className="block">
            {ln.split(" ").map((w, wi) => {
              const c = clean(w);
              const isKey = zoomed && c === q.key;
              return (
                <button
                  key={wi}
                  type="button"
                  onClick={() => tapWord(w)}
                  className={`mr-1 min-h-10 rounded-md px-0.5 transition ${isKey ? "bg-amber-300 font-bold" : tapped === c ? "bg-slate-200" : "hover:bg-amber-100"}`}
                >
                  {w}
                </button>
              );
            })}
          </span>
        ))}
        <cite className="mt-1 block text-xs not-italic text-amber-800/80">{q.source}</cite>
      </blockquote>
      {tappedMsg && <div className="mt-2"><Note tone="ok">{tappedMsg}</Note></div>}

      {zoomed && (
        <>
          <Step n={3}>The connotation web for &lsquo;{keyDisplay}&rsquo;</Step>
          <div className="relative mx-auto aspect-square w-full max-w-sm" aria-label={`Connotations of ${keyDisplay}: ${q.web.join(", ")}`} role="img">
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden>
              {q.web.map((_, i) => {
                const [x, y] = spoke(i, q.web.length);
                return <line key={i} x1="50" y1="50" x2={x} y2={y} stroke="#fbbf24" strokeWidth="0.8" strokeDasharray="2 1.5" />;
              })}
            </svg>
            <div className="animate-pop absolute left-1/2 top-1/2 grid h-[26%] w-[26%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-amber-400 text-center font-serif text-base font-bold text-amber-950 shadow-lg sm:text-lg">
              {keyDisplay}
            </div>
            {q.web.map((c, i) => {
              const [x, y] = spoke(i, q.web.length);
              return (
                <span
                  key={c}
                  className="animate-pop absolute w-[31%] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white px-1 py-1 text-center text-[11px] font-semibold leading-tight text-slate-700 shadow ring-1 ring-amber-200 sm:text-xs"
                  style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${i * 60}ms` }}
                >
                  {c}
                </span>
              );
            })}
          </div>

          <Step n={4}>Build your analysis sentence</Step>
          {SLOTS.map((s, si) => (
            <fieldset key={s} className="mb-3">
              <legend className="mb-1 text-sm font-bold text-slate-700">{SLOT_LABEL[s]}</legend>
              <div className="grid gap-2 sm:grid-cols-3">
                {rotated(q[s], (qi + si) % 3).map(({ opt, idx }) => {
                  const on = pick[s] === idx;
                  const mark = checked && on ? (opt[1] === 2 ? " ✓" : opt[1] === 1 ? " ~" : " ✗") : "";
                  return (
                    <Chip key={idx} on={on} onClick={() => { setPick({ ...pick, [s]: idx }); setChecked(false); }}>
                      {opt[0]}
                      {mark}
                    </Chip>
                  );
                })}
              </div>
            </fieldset>
          ))}

          <div className="rounded-xl bg-white p-3 ring-1 ring-slate-200" aria-live="polite">
            <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Your sentence</p>
            <p className="mt-1 text-[15px] leading-relaxed text-slate-800">
              {q.writer} uses the <b>{fill("technique")}</b> &ldquo;{keyDisplay}&rdquo;. It connotes <b>{fill("connotation")}</b>, which <b>{fill("effect")}</b>, highlighting the theme of <b>{fill("theme")}</b>.
            </p>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <Action tone="green" disabled={!complete} onClick={() => setChecked(true)}>Get feedback</Action>
            <Action tone="light" onClick={() => choose((qi + 1) % QUOTES.length)}>Next quotation →</Action>
          </div>
          {checked && (
            <div className="mt-3 space-y-2">
              <Note tone={total === 8 ? "good" : total >= 5 ? "ok" : "bad"}>
                <b>{total === 8 ? "Developed analysis!" : total >= 5 ? "Nearly there: upgrade the weak link." : "This is feature-spotting, not analysis yet."}</b>{" "}
                {total === 8 ? "Every link in the chain is precise, so this could sit in a top-band paragraph." : "Swap the ~ and ✗ choices for more precise ones."}
              </Note>
              <ul className="space-y-1 text-sm">
                {SLOTS.map((s) => {
                  const qv = val(s)?.[1] ?? 0;
                  return (
                    <li key={s} className="flex gap-2">
                      <span aria-hidden>{qv === 2 ? "✅" : qv === 1 ? "🟡" : "❌"}</span>
                      <span>
                        <b>{SLOT_LABEL[s]}:</b> {WHY[s][qv]}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </>
      )}
    </Frame>
  );
}

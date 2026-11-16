// Turns a short piece of prose into script layout. Deliberately simple and
// transparent: it finds speech in quotation marks, works out who is speaking
// from the dialogue tag ("said Miranda", "she whispered"), turns the tag verb
// into an acting note, and turns narration into present-tense stage directions.

export type Seg = { t: string; changed?: boolean };
export type ScriptItem =
  | { kind: "dir"; segs: Seg[] }
  | { kind: "line"; who: string; how?: string; text: string };

const SPEECH_VERBS: Record<string, string | null> = {
  said: null, asked: null, replied: null, answered: null, added: null, continued: null,
  whispered: "whispering", shouted: "shouting", cried: "crying out", yelled: "yelling",
  muttered: "muttering", mumbled: "mumbling", snapped: "sharply", sobbed: "sobbing",
  laughed: "laughing", sighed: "sighing", called: "calling", screamed: "screaming",
  begged: "pleading", pleaded: "pleading", hissed: "hissing", groaned: "groaning",
  murmured: "softly", gasped: "gasping", growled: "growling", insisted: "firmly",
};

// Past → present (third person). Not exhaustive: the widget tells you to check.
const TENSE: Record<string, string> = {
  was: "is", were: "are", had: "has", did: "does", ran: "runs", stood: "stands", sat: "sits",
  came: "comes", went: "goes", took: "takes", gave: "gives", saw: "sees", felt: "feels",
  knew: "knows", thought: "thinks", heard: "hears", held: "holds", began: "begins",
  threw: "throws", shook: "shakes", fell: "falls", rose: "rises", burst: "bursts", left: "leaves",
  made: "makes", found: "finds", got: "gets", put: "puts", hid: "hides", broke: "breaks",
  spoke: "speaks", wrote: "writes", drew: "draws", led: "leads", sank: "sinks", swung: "swings",
  rolled: "rolls", stared: "stares", looked: "looks", turned: "turns", walked: "walks",
  smiled: "smiles", nodded: "nods", paused: "pauses", opened: "opens", closed: "closes",
  slammed: "slams", grabbed: "grabs", dropped: "drops", picked: "picks", pulled: "pulls",
  pushed: "pushes", entered: "enters", crossed: "crosses", waited: "waits", gripped: "grips",
  balanced: "balances", searched: "searches", squeezed: "squeezes", laughed: "laughs",
  sighed: "sighs", whispered: "whispers", shouted: "shouts", cried: "cries", glanced: "glances",
  rushed: "rushes", hurried: "hurries", wiped: "wipes", reached: "reaches", watched: "watches",
  moved: "moves", jumped: "jumps", climbed: "climbs", knocked: "knocks", kneeled: "kneels",
  knelt: "kneels", tried: "tries", carried: "carries", waved: "waves", lifted: "lifts",
  placed: "places", backed: "backs", stepped: "steps", flinched: "flinches", froze: "freezes",
  stopped: "stops", started: "starts", touched: "touches", hugged: "hugs", shrugged: "shrugs",
  frowned: "frowns", stormed: "storms", appeared: "appears", returned: "returns", sobbed: "sobs",
  trembled: "trembles", flashed: "flashes", crashed: "crashes", howled: "howls", rang: "rings",
  stamped: "stamps", paced: "paces", wandered: "wanders", collapsed: "collapses", exited: "exits",
};

const STOP = new Set(["The", "A", "An", "He", "She", "They", "It", "But", "And", "Then", "When", "I", "We", "You", "His", "Her", "Their", "There", "This", "That", "Everybody", "Over", "Somewhere", "Suddenly", "After", "As", "In", "On", "At", "Outside", "Inside", "Mr", "Mrs", "Ms", "Miss", "Dr"]);
const PRONOUNS = new Set(["he", "she", "they", "i"]);
const V = Object.keys(SPEECH_VERBS).join("|");
const QUOTE_RE = /[“"]([^”"]+)[”"]/g;
const NM = "((?:Mr|Mrs|Ms|Miss|Dr)\\.? [A-Z][a-z]+|[A-Z][a-z]+)";
const AFTER_VERB_NAME = new RegExp(`^\\s*,?\\s*(${V})\\s+(?:the\\s+)?${NM}`);
const AFTER_NAME_VERB = new RegExp(`^\\s*,?\\s*(?:(?:the\\s+|The\\s+)?${NM}|(he|she|they|I))\\s+(${V})\\b`);
const BEFORE_TAG = new RegExp(`(?:(?:the\\s+|The\\s+)?${NM}|(he|she|they|I|He|She|They))\\s+(${V})\\s*[,:]\\s*$`);

function findNames(text: string): Set<string> {
  const outside = text.replace(QUOTE_RE, " ");
  const counts = new Map<string, number>();
  for (const m of outside.matchAll(/\b([A-Z][a-z]+)\b/g)) {
    if (!STOP.has(m[1])) counts.set(m[1], (counts.get(m[1]) ?? 0) + 1);
  }
  const names = new Set<string>();
  counts.forEach((c, n) => { if (c >= 2) names.add(n); });
  for (const m of outside.matchAll(new RegExp(`(?:${V})\\s+(?:the\\s+)?([A-Z][a-z]+)`, "g"))) names.add(m[1]);
  for (const m of outside.matchAll(new RegExp(`([A-Z][a-z]+)\\s+(?:${V})\\b`, "g"))) if (!STOP.has(m[1])) names.add(m[1]);
  return names;
}

function toDirection(text: string, names: Set<string>): Seg[] | null {
  const t = text.trim().replace(/^[,;:\s]+/, "");
  if (t.replace(/[^A-Za-z]/g, "").length < 3) return null;
  const segs: Seg[] = [];
  for (const piece of t.split(/(\b[A-Za-z']+\b)/)) {
    if (!piece) continue;
    const lower = piece.toLowerCase();
    if (TENSE[lower]) {
      const pres = TENSE[lower];
      segs.push({ t: piece[0] === piece[0].toUpperCase() ? pres[0].toUpperCase() + pres.slice(1) : pres, changed: true });
    } else if (names.has(piece.replace(/'s$/, ""))) {
      segs.push({ t: piece.replace(/^[A-Za-z]+/, (n) => n.toUpperCase()) });
    } else {
      segs.push({ t: piece });
    }
  }
  // Make sure it ends like a sentence.
  const last = segs[segs.length - 1];
  if (last && !/[.!?]$/.test(last.t.trim())) segs.push({ t: "." });
  return segs;
}

function lastNameIn(text: string, names: Set<string>): string | null {
  let found: string | null = null;
  for (const m of text.matchAll(/\b([A-Z][a-z]+)\b/g)) if (names.has(m[1])) found = m[1];
  return found;
}

export function proseToScript(prose: string): { items: ScriptItem[]; names: string[]; changed: number } {
  const names = findNames(prose);
  const items: ScriptItem[] = [];
  const speakers: string[] = [];
  let lastMention: string | null = null;
  let changed = 0;

  const pushDir = (txt: string) => {
    const d = toDirection(txt, names);
    if (d) {
      changed += d.filter((s) => s.changed).length;
      items.push({ kind: "dir", segs: d });
    }
    lastMention = lastNameIn(txt, names) ?? lastMention;
  };
  const guess = (): string => {
    const prev = speakers[speakers.length - 1];
    const other = [...speakers].reverse().find((s) => s !== prev);
    if (other) return other;
    const unused = [...names].find((n) => n !== prev);
    return unused ?? "SPEAKER";
  };

  for (const para of prose.split(/\n+/).map((p) => p.trim()).filter(Boolean)) {
    const quotes = [...para.matchAll(QUOTE_RE)];
    if (quotes.length === 0) {
      pushDir(para);
      continue;
    }
    let cursor = 0;
    let paraSpeaker: string | null = null;

    quotes.forEach((q, qi) => {
      const start = q.index ?? 0;
      let before = para.slice(cursor, start);
      const speech = q[1].trim().replace(/,$/, ".");
      let who: string | undefined;
      let pron = false;
      let how: string | undefined;

      // A tag before the quote: 'Miranda whispered, "..."'
      const bt = before.match(BEFORE_TAG);
      if (bt) {
        who = bt[1] && !STOP.has(bt[1]) ? bt[1] : undefined;
        pron = !!bt[2];
        how = SPEECH_VERBS[bt[3]] ?? undefined;
        before = before.slice(0, bt.index);
      }
      if (before.trim()) {
        pushDir(before);
        paraSpeaker = null;
      }

      // A tag after the quote: '"...," said Prospero.' / '"..." she asked.'
      const nextStart = quotes[qi + 1]?.index ?? para.length;
      let after = para.slice(start + q[0].length, nextStart);
      const a1 = after.match(AFTER_VERB_NAME);
      const a2 = a1 ? null : after.match(AFTER_NAME_VERB);
      if (a1) {
        who = a1[2];
        how = SPEECH_VERBS[a1[1]] ?? how;
        after = after.slice(a1[0].length);
      } else if (a2) {
        who = a2[1] && !STOP.has(a2[1]) ? a2[1] : undefined;
        pron = !!a2[2];
        how = SPEECH_VERBS[a2[3]] ?? how;
        after = after.slice(a2[0].length);
      }
      if (a1 || a2) {
        // ", waving a packet of tissues." becomes part of the acting note.
        const extra = after.match(/^\s*,\s*([^.!?]+)[.!?]?/);
        if (extra) {
          how = how ? `${how}, ${extra[1].trim()}` : extra[1].trim();
          after = after.slice(extra[0].length);
        } else {
          after = after.replace(/^[^.!?]*[.!?]?/, "");
        }
      }

      const speaker = who ?? (pron ? lastMention : null) ?? paraSpeaker ?? guess();
      const prev = items[items.length - 1];
      if (prev && prev.kind === "line" && prev.who === speaker.toUpperCase() && !how) {
        prev.text += " " + speech;
      } else {
        items.push({ kind: "line", who: speaker.toUpperCase(), how, text: speech });
      }
      if (speakers[speakers.length - 1] !== speaker) speakers.push(speaker);
      paraSpeaker = speaker;
      if (after.trim()) {
        pushDir(after);
        paraSpeaker = null;
      }
      cursor = nextStart;
    });
  }
  return { items, names: [...names], changed };
}

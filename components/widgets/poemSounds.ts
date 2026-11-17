// Tiny, transparent English sound heuristics for the Poem Forge. They are
// approximations: the widget always tells learners to trust their ear too.

const SYL_EXC: Record<string, number> = {
  the: 1, every: 2, everything: 3, everyone: 3, poem: 2, poems: 2, poet: 2, poets: 2, poetry: 3,
  quiet: 2, lion: 2, idea: 3, area: 3, science: 2, video: 3, being: 2, create: 2, created: 3,
  business: 2, family: 3, different: 3, evening: 2, evenings: 2, heaven: 2, orange: 2, fire: 1,
  hour: 1, hours: 1, our: 1, eyes: 1, eye: 1, are: 1, were: 1, there: 1, where: 1, here: 1,
  people: 2, little: 2, singapore: 3, grandmother: 3, real: 1, really: 2, violin: 3, piano: 3,
  radio: 3, diamond: 2, chocolate: 2, interesting: 3, beautiful: 3, usually: 4, naturally: 3,
  something: 2, sometimes: 2, someone: 2, somewhere: 2, before: 2, because: 2, yes: 1, yet: 1,
  you: 1, your: 1, india: 3, asia: 2, chennai: 2, ammachi: 3, idli: 2, laksa: 2, lime: 1,
  whisper: 2, jasmine: 2, hundred: 2, sacred: 2, naked: 2, wicked: 2, crooked: 2, rugged: 2, ragged: 2, jagged: 2, suitcase: 2, unzipped: 2, inside: 2, alone: 2, became: 2, become: 2,
};

export function syllables(word: string): number {
  let w = word.toLowerCase().replace(/[^a-z]/g, "");
  if (!w) return 0;
  if (SYL_EXC[w] !== undefined) return SYL_EXC[w];
  if (w.length <= 3) return 1;
  if (/[^aeiouy]led$/.test(w)) w = w.slice(0, -1); // rattled → rattle
  else if (/[^aeiouytd]ed$/.test(w)) w = w.slice(0, -2); // jumped → jump (but wanted stays)
  if (/es$/.test(w) && !/(?:[sxz]|ch|sh|c|g)es$/.test(w)) w = w.slice(0, -1); // makes → make
  if (/[^aeiouy]le$/.test(w) || /[^aeiouy]re$/.test(w)) {
    // table, little, centre, theatre: the final syllable is sounded
  } else if (/[^e]e$/.test(w)) {
    w = w.slice(0, -1); // silent e: make, smile
  }
  w = w.replace(/^y/, "");
  const groups = w.match(/[aeiouy]+/g);
  return Math.max(1, groups ? groups.length : 1);
}

export function lineSyllables(line: string): number {
  return line.split(/[\s\-–—]+/).reduce((a, w) => a + syllables(w), 0);
}

const RHYME_EXC: Record<string, string> = {
  one: "un", done: "un", none: "un", won: "un", sun: "un", come: "um", some: "um", love: "uv", above: "uv", dove: "uv",
  move: "Uv", prove: "Uv", give: "iv", live: "iv", have: "av", are: "ar", were: "er", eye: "I", eyes: "Iz", i: "I", by: "I",
  my: "I", buy: "I", bye: "I", again: "en", said: "ed", says: "ez", been: "En", heart: "art", great: "At", break: "Ak",
  the: "u", to: "U", do: "U", who: "U", you: "U", through: "U", too: "U", two: "U", now: "OW", how: "OW", cow: "OW",
  allow: "OW", wow: "OW", eight: "At", weight: "At", height: "It", there: "Ar", where: "Ar", their: "Ar", bear: "Ar",
  wear: "Ar", air: "Ar", hair: "Ar", key: "E", monkey: "E", honey: "E", money: "E", could: "ud", would: "ud",
  should: "ud", your: "or", four: "or", pour: "or", door: "or", floor: "or", more: "or", shore: "or", before: "or",
  soul: "Ol", young: "ung", known: "On", grown: "On", shown: "On", flown: "On", blown: "On", own: "On", gone: "on",
  word: "urd", world: "urld", heard: "urd", bird: "urd", third: "urd", fire: "Ir", higher: "Ir", tired: "Ird",
};

const LONG: Record<string, string> = { a: "A", e: "E", i: "I", o: "O", u: "U" };

/** A rough "last sound" key: words with the same key probably rhyme. */
export function rhymeKey(raw: string): string {
  let w = raw.toLowerCase().replace(/[^a-z]/g, "");
  if (!w) return "";
  if (RHYME_EXC[w]) return RHYME_EXC[w];
  if (w.endsWith("s") && RHYME_EXC[w.slice(0, -1)]) return RHYME_EXC[w.slice(0, -1)] + "z";
  if (/^[^aeiouy]+e$/.test(w)) w = w.slice(0, -1) + "E"; // me, she, be
  w = w
    .replace(/eigh/g, "A")
    .replace(/igh/g, "I")
    .replace(/ee|ea/g, "E")
    .replace(/ai|ay/g, "A")
    .replace(/ey$/, "A")
    .replace(/oa|oe$/g, "O")
    .replace(/ows?$/, (m) => (m.length === 3 ? "Oz" : "O"))
    .replace(/ou|ow/g, "OW")
    .replace(/oo|ew|ue$/g, "U")
    .replace(/oi|oy/g, "OI")
    .replace(/au|aw(?![aeiouyAEIOU])/g, "o");
  // Final -y: "sky" (no other vowel) sounds I; "happy" sounds E.
  if (/[^aeiouAEIOUW]y$/.test(w)) w = w.slice(0, -1) + (/[aeiouAEIOU]/.test(w.slice(0, -1)) ? "E" : "I");
  w = w.replace(/([^aeiouAEIOUW])y([^aeiouAEIOUW])/g, "$1i$2"); // rhyme → rhime
  // Magic e: time, home, tune, made, here.
  w = w.replace(/([aeiou])([b-df-hj-np-tv-z]{1,2})e$/, (_, v: string, c: string) => LONG[v] + c);
  if (/[^aeiouAEIOUW]e$/.test(w) && w.length > 2) w = w.slice(0, -1); // breeze → brEz
  w = w
    .replace(/ph/g, "f")
    .replace(/ck/g, "k")
    .replace(/c(?![eiy])/g, "k")
    .replace(/([b-df-hj-np-tv-z])\1/g, "$1")
    .replace(/s$/, "z");
  const runs = [...w.matchAll(/[aeiouyAEIOUW]+/g)];
  if (runs.length === 0) return w;
  let start = runs[runs.length - 1].index ?? 0;
  const tail = w.slice(start);
  // Unstressed endings: include the syllable before (winter ≠ summer).
  if (runs.length > 1 && /^(er|ing|en|el|ez|et)$/.test(tail)) start = runs[runs.length - 2].index ?? start;
  return w.slice(start);
}

export function lastWord(line: string): string {
  const words = line.trim().split(/\s+/).filter((w) => /[a-z]/i.test(w));
  return words[words.length - 1] ?? "";
}

/** Rhyme-scheme letters for a list of lines ("" for empty lines). */
export function scheme(lines: string[]): string[] {
  const keys: string[] = [];
  const letters: string[] = [];
  let next = 0;
  return lines.map((l) => {
    const lw = lastWord(l);
    if (!lw) return "";
    const k = rhymeKey(lw);
    const found = keys.indexOf(k);
    if (found >= 0) return letters[found];
    keys.push(k);
    letters.push(String.fromCharCode(65 + next++));
    return letters[letters.length - 1];
  });
}

const BANK = "light night bright flight sight white kite day way play say grey stay away sea free tree me see three sky high fly cry why try rain pain train again sun run fun done one home alone stone bone heart start part apart love above sound ground found around door floor more shore before sing ring spring king thing cloud crowd proud loud name same came flame sleep deep keep sweep cold old gold told hold time rhyme climb blue new through true rose knows those snow go slow know show fire tired desire air there care where hair moon soon tune spoon June street feet heat sweet meet eat bed red head said fear near here clear year dream seem stream green between seen sea mind find kind behind blind hand land stand sand end friend send bend fine line mine shine nine pine".split(" ");

/** A few words that rhyme with `word` (from a small built-in bank). */
export function rhymesFor(word: string, n = 4): string[] {
  const k = rhymeKey(word);
  const self = word.toLowerCase().replace(/[^a-z]/g, "");
  return BANK.filter((b) => b !== self && rhymeKey(b) === k).slice(0, n);
}

/* Scene 2: On the lines and between them. Library: Sherlock arrives! Retrieval (explicit, 5 o'clock vs ten past) ->
   "in your own words" ("open sewer" -> BANNED -> genuine paraphrase) -> Inference (implicit clues, NOT space pirates!
   Scrooge's blind men's dogs; Oates's understatement in 1912) -> Vocabulary in context (London's "intangible pall"). */
scene('clues', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 28, fill: o.fill || 'rgba(14,24,40,0.94)', stroke: o.stroke || ENG.sky, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('lib', engLibrary(d.bg), (t, g) => g.upd(t, 0.1));
  const mei = d.who('mei'), mrh = d.who('mrh'), will = d.who('will'), nib = d.who('nib'), qm = d.who('qmark'), shl = d.who('sherlock');

  const tRet = engTech(d.fg, 'RETRIEVAL', { kind: 'structure', def: 'explicit — stated plainly on the lines' });
  const cFive = engCard(d.fg, 'Home by: **five o\'clock** ✓\n\'Ten past\' = the time **now** (distractor!)', { w: 680, size: 30, tab: 'MONSOON TRAP', tabCol: '#C62828', stroke: ENG.sky });
  const cTry = engCard(d.fg, 'Text: "an **open sewer**"\nMei: "an uncovered **sewer**" ✗', { w: 640, size: 30, stroke: C.bad, icon: 'cross' });
  const stBan = engStamp(d.fg, 'BANNED WORD!', '#D32F2F');
  const cFix = engCard(d.fg, 'Paraphrase: "**so polluted with waste that almost nothing could live in it**"', { w: 720, size: 29, stroke: C.good, icon: 'tick' });

  const tInf = engTech(d.fg, 'INFERENCE', { kind: 'context', def: 'implicit — deduced from clues in the text' });
  const cAlien = pill('✗ "kidnapped by space pirates" = wild guessing!', { size: 29, stroke: C.bad, color: '#FFD0D4' });
  const qDog = engQuote(d.fg, { text: "Even the blind men's dogs appeared to know him; and when they saw him coming on, would tug their owners into doorways", who: 'Narrator', where: 'Dickens, A Christmas Carol, Stave One', w: 780, size: 32, hl: ['dogs', 'tug'] });
  const cPee = engCard(d.fg, '**Point**: Everyone dreads Scrooge.\n**Evidence**: dogs "tug their owners into doorways".\n**Explain**: even animals sense his cold cruelty.', { w: 740, size: 28, stroke: ENG.gold });

  const qOates = engQuote(d.fg, { text: 'I am just going outside and may be some time.', who: 'Captain Oates', where: "Scott's Terra Nova Journal, March 1912", w: 740, size: 38, hl: ['just', 'some'] });
  const tUnder = engTech(d.fg, 'UNDERSTATEMENT', { kind: 'language', def: 'casual words hiding enormous courage' });

  const qPall = engQuote(d.fg, { text: 'there seemed an intangible pall over the face of things, a subtle gloom that made the day dark', who: 'Narrator', where: "Jack London, 'To Build a Fire' (1908)", w: 780, size: 33, hl: ['pall', 'gloom'] });
  const cPall = engCard(d.fg, '**Denotation**: a heavy dark covering (clue: "subtle gloom").\n**Connotation**: coffin cloth → **death & foreshadowing**.', { w: 760, size: 28, stroke: ENG.sky });

  d.shot(0, { set: 'lib', cast: { qmark: { x: 260, y: 470, s: 0.95, mood: 'happy' }, sherlock: { x: 860, y: 450, s: 1.0, mood: 'smug', glint: 1 } } })
    .shot(at('trap5') - 0.05, { set: 'lib', cast: { sherlock: { x: 180, y: 490, s: 0.9, mood: 'smug' }, mei: { x: 1030, y: 520, s: 0.9, mood: 'neutral' } } })
    .shot(at('own') - 0.05, { set: 'lib', cast: { qmark: { x: 190, y: 490, s: 0.95, mood: 'annoyed' }, mei: { x: 1020, y: 520, s: 0.9, mood: 'happy' } } })
    .shot(at('infer') - 0.05, { set: 'lib', cast: { sherlock: { x: 220, y: 470, s: 0.95, mood: 'smug' }, mei: { x: 960, y: 510, s: 0.95, mood: 'happy' } } })
    .shot(at('leak') - 0.05, { conf: 'nib', cast: { nib: { x: 320, y: 420, s: 1.25, mood: 'shock', ink: 1 } } })
    .shot(at('scrooge') - 0.05, { set: 'lib', cast: { sherlock: { x: 140, y: 560, s: 0.72, mood: 'smug' }, mrh: { x: 1070, y: 560, s: 0.75, mood: 'neutral' } } })
    .shot(at('oates') - 0.05, { set: 'lib', cast: { will: { x: 150, y: 520, s: 0.78, mood: 'sad', glow: 0.4 }, nib: { x: 1070, y: 540, s: 0.72, mood: 'neutral' } } })
    .shot(at('vocab') - 0.05, { set: 'lib', cast: { sherlock: { x: 140, y: 560, s: 0.72, mood: 'smug' }, mrh: { x: 1070, y: 560, s: 0.75, mood: 'happy' } } });

  d.lower(['SHERLOCK', 'Magnifying glass. Reads between the lines.'], at('enter') + 0.1, 3.3);
  d.mood('mei', at('stamp'), 'shock');

  d.pop(tRet, mid('enter', 0.35), end('enter') + 0.2, 600, 200);
  d.pop(cFive, mid('trap5', 0.2), end('trap5') + 0.25, 600, 290);
  d.pop(cTry, at('sewer') + 0.1, end('stamp') + 0.2, 600, 240);
  d.pop(stBan, at('stamp') + 0.05, end('stamp') + 0.2, 600, 240, 0.85);
  d.pop(cFix, mid('stamp', 0.35), end('stamp') + 0.3, 600, 470);
  d.pop(tInf, mid('infer', 0.25), end('guess') + 0.2, 600, 220);
  d.pop(cAlien, mid('guess', 0.35), end('leak') + 0.2, 740, 420);
  d.pop(qDog, at('scrooge') + 0.05, end('deduce') + 0.2, 600, 250);
  d.pop(cPee, at('deduce') + 0.05, end('deduce') + 0.25, 600, 520);
  d.pop(qOates, at('oates') + 0.05, end('under') + 0.2, 600, 250);
  d.pop(tUnder, at('under') + 0.08, end('under') + 0.25, 600, 500);
  d.pop(qPall, at('vocab') + 0.05, end('pall') + 0.3, 600, 240);
  d.pop(cPall, at('pall') + 0.08, end('pall') + 0.35, 600, 510);

  return t => {
    d.upd(t);
    qDog.mark(-1, P(t, mid('scrooge', 0.45), 0.5));
    qOates.mark(-1, P(t, mid('under', 0.25), 0.5));
    qPall.mark(0, P(t, mid('vocab', 0.55), 0.4));
    qPall.mark(1, P(t, mid('pall', 0.15), 0.4));
  };
});

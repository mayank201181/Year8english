/* Scene 2: Distinct voices & speech forms. Library (SILENCE PLEASE sign has "(not even brackets)").
   Idiolect (vocabulary, sentence length, habits, avoidance; cover-the-names test with Nurse vs Juliet) ->
   Kevin's punctuation for messy speech (dash —, ellipsis ..., comma) -> Clapper bans exposition dumps ->
   4 speech forms: monologue, soliloquy ("Ancient damnation!"), confessionals joke, aside ("A little more than kin"),
   stichomythia ("Are you honest?" / "My lord?") -> two stars. */
scene('voices', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 30, fill: o.fill || 'rgba(14,24,40,0.92)', stroke: o.stroke || ENG.gold, sw: 3, color: o.color || '#FFFFFF' }); };

  const lib = d.add('lib', engLibrary(d.bg), (t, g) => g.upd(t, 0));
  T(lib.sign, 0, 52, '(especially ghosts & brackets)', { size: 20, weight: 700, anchor: 'middle', fill: '#FFE45C', font: FB });

  const mei = d.who('mei'), mrh = d.who('mrh'), will = d.who('will'), nib = d.who('nib'), kev = d.who('kevin'), clap = d.who('clapper');

  const tIdio = engTech(d.fg, 'IDIOLECT', { kind: 'language', def: "a character's distinct personal voice" });
  const vFour = ['vocabulary', 'sentence length', 'speech habits', 'what they avoid'].map(s => pill(s, { size: 28, stroke: '#FF7EB6' }));
  const cCover = engCard(d.fg, '**Cover the names test:**\n• Rambling warm memories → **NURSE**\n• Sharp, urgent logic → **JULIET**', { w: 640, size: 29, stroke: ENG.gold });
  const cPunct = engCard(d.fg, '**—** dash = interruption\n**...** ellipsis = trailing off\n**,** comma = brief hesitation (hi!)', { w: 620, size: 30, stroke: ENG.violet, boldFill: '#FFE45C' });
  const cDump = engCard(d.fg, '"As you know, Mother, Father was banished last Tuesday..."', { w: 660, size: 29, icon: 'cross', stroke: C.bad, tab: 'EXPOSITION DUMP' });

  const tMono = engTech(d.fg, 'MONOLOGUE', { kind: 'drama', def: 'long speech while others listen' });
  const tSol = engTech(d.fg, 'SOLILOQUY', { kind: 'drama', def: 'alone on stage — honest private truth' });
  const qJul = engQuote(d.fg, { text: 'Ancient damnation! O most wicked fiend!', who: 'Juliet (alone)', where: 'Romeo and Juliet, Act 3 Scene 5', w: 700, size: 38, hl: ['wicked'] });
  const tAside = engTech(d.fg, 'ASIDE', { kind: 'drama', def: 'short remark other characters do NOT hear' });
  const qHam = engQuote(d.fg, { text: 'A little more than kin, and less than kind.', who: 'Hamlet (aside)', where: 'Hamlet, Act 1 Scene 2', w: 700, size: 38, hl: ['kin', 'kind'] });
  const tStich = engTech(d.fg, 'STICHOMYTHIA', { kind: 'structure', def: 'rapid one-line verbal fencing' });
  const qStich = engQuote(d.fg, { text: 'HAMLET: Ha, ha! are you honest? / OPHELIA: My lord? / HAMLET: Are you fair?', who: 'Hamlet & Ophelia', where: 'Hamlet, Act 3 Scene 1', w: 740, size: 34, hl: ['honest', 'fair'] });
  const rating = scrRating(d.fg);

  d.shot(0, { set: 'lib', cast: { mrh: { x: 220, y: 490, s: 1.0, mood: 'deadpan', mug: 1 }, nib: { x: 960, y: 460, s: 0.9, mood: 'smug' } } })
    .shot(at('nurse') - 0.05, { set: 'lib', cast: { will: { x: 220, y: 430, s: 0.95, mood: 'happy' } } })
    .shot(at('punct') - 0.05, { set: 'lib', cast: { kevin: { x: 250, y: 500, s: 0.9, mood: 'happy' } } })
    .shot(at('dump') - 0.05, { set: 'lib', cast: { clapper: { x: 240, y: 480, s: 1.0, mood: 'annoyed', snap: 1 } } })
    .shot(at('forms') - 0.05, { set: 'lib', cast: { mrh: { x: 200, y: 490, s: 1.0, mood: 'neutral' }, will: { x: 1020, y: 430, s: 0.85, mood: 'smug' } } })
    .shot(at('cam') - 0.05, { conf: 'mei', cast: { mei: { x: 340, y: 430, s: 1.35, mood: 'smug' } } })
    .shot(at('light') - 0.05, { conf: 'will', cast: { will: { x: 340, y: 410, s: 1.25, mood: 'annoyed' } } })
    .shot(at('aside') - 0.05, { set: 'lib', cast: { nib: { x: 190, y: 460, s: 0.95, mood: 'smug' } } })
    .shot(at('two') - 0.05, { set: 'lib', cast: { mei: { x: 340, y: 500, s: 1.1, mood: 'happy', phone: 1 }, will: { x: 860, y: 420, s: 0.92, mood: 'smug' } } });

  d.lower('kevin', at('punct') + 0.1, 3.0);

  d.pop(tIdio, mid('same', 0.45), end('how') + 0.2, 620, 210);
  vFour.forEach((c, i) => d.pop(c, mid('how', 0.12 + i * 0.2), end('how') + 0.2, 470 + (i % 2) * 320, 390 + Math.floor(i / 2) * 82));
  d.pop(cCover, at('nurse') + 0.1, end('nurse') + 0.25, 730, 340);
  d.pop(cPunct, at('punct') + 0.1, end('punct') + 0.25, 740, 350);
  d.pop(cDump, mid('dump', 0.2), end('dump') + 0.25, 740, 350);
  d.pop(tMono, mid('forms', 0.35), end('forms') + 0.2, 600, 250);
  d.pop(tSol, at('solil') + 0.05, end('solil') + 0.25, 600, 190);
  d.pop(qJul, mid('solil', 0.4), end('solil') + 0.25, 600, 410);
  d.pop(tAside, at('aside') + 0.05, end('aside') + 0.25, 720, 200);
  d.pop(qHam, mid('aside', 0.4), end('aside') + 0.25, 720, 410);
  d.pop(tStich, at('stich') + 0.05, end('stich') + 0.25, 720, 190);
  d.pop(qStich, mid('stich', 0.4), end('stich') + 0.25, 720, 410);

  return t => {
    d.upd(t);
    qJul.mark(0, P(t, mid('solil', 0.65), 0.35));
    qHam.mark(-1, P(t, mid('aside', 0.65), 0.35));
    qStich.mark(-1, P(t, mid('stich', 0.65), 0.4));
    const rv = win(t, mid('two', 0.15), S.D + 1, 0.25);
    rating.set(1 + P(t, mid('two', 0.25), 0.5, linear), rv); tr(rating, 1030, 74);
  };
});

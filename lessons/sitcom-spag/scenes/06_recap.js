/* Scene 6: Recap — Save yourself some marks (Series Finale!). Mnemonics card -> 6 exam traps spoken by Kevin,
   Semicolon, Apostrophe, Mr H, Nib and Full Stop -> Final Year 8 Reviews: Will gets 4.5 stars, Kevin gets 5 STARS! */
scene('recap', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(7); });
  const mugs16 = spgExtraMugs(d.bg);
  const mei = d.who('mei'), mrh = d.who('mrh'), will = d.who('will'), nib = d.who('nib'), kev = d.who('kevin'),
    semi = d.who('semi'), stop = d.who('stop'), apos = d.who('apos');

  const hooks = engCard(d.fg,
    '**Compound:** FANBOYS   |   **Subordinate:** AAAWWUBBIS\n**Paragraphs:** TiPToP   |   **Affect (Verb) / Effect (Noun):** RAVEN',
    { w: 860, size: 26, tab: 'MEMORY HOOKS', tabCol: '#1E6E9E', stroke: ENG.sky });

  const traps = [
    ['TRAP 1', 'Never **comma-splice** two main clauses! Use **.** or **;** or a conjunction.', 't1'],
    ['TRAP 2', '"**However**" & "**therefore**" need a **semicolon** or **full stop** before them.', 't2'],
    ['TRAP 3', 'Possessive **its** = NO apostrophe! And NEVER use apostrophes for plurals!', 't3'],
    ['TRAP 4', 'Write **could have** (never "could of"), keep **1 tense**, match the **true subject**.', 't4'],
    ['TRAP 5', 'Speech punctuation **inside** closing marks, **new line per speaker**, formal register.', 't5'],
    ['TRAP 6', 'Simple = 1 main clause (can be long); minor = no main verb. Sentence. Over.', 't6'],
  ].map(([tab, txt, id]) => ({ id, c: engCard(d.fg, txt, { w: 780, size: 28, tab, tabCol: '#C62828', stroke: ENG.gold, icon: 'tick' }) }));

  const revWill = engReview(d.fg, { stars: 4.5, text: 'William Shakespeare. Brilliant, dramatic, still four hours long.', by: 'Mei, 12', w: 460 });
  const revKev = engReview(d.fg, { stars: 5, text: 'Kevin the Comma. FIVE STARS! Saved Ah Ma from being eaten.', by: 'Mei, 12', w: 460 });

  d.shot(0, { set: 'room', cast: { mei: { x: 180, y: 520, s: 0.95, mood: 'happy' }, mrh: { x: 1030, y: 500, s: 0.9, mood: 'happy', mug: 1 } } })
    .shot(at('t1') - 0.05, { set: 'room', cast: { kevin: { x: 175, y: 520, s: 0.9, mood: 'happy' } } })
    .shot(at('t2') - 0.05, { set: 'room', cast: { semi: { x: 175, y: 500, s: 0.9, mood: 'smug' } } })
    .shot(at('t3') - 0.05, { set: 'room', cast: { apos: { x: 175, y: 500, s: 0.9, mood: 'happy' } } })
    .shot(at('t4') - 0.05, { set: 'room', cast: { mrh: { x: 170, y: 500, s: 0.92, mood: 'neutral', mug: 1 } } })
    .shot(at('t5') - 0.05, { set: 'room', cast: { nib: { x: 170, y: 500, s: 0.88, mood: 'smug' } } })
    .shot(at('t6') - 0.05, { set: 'room', cast: { stop: { x: 175, y: 530, s: 0.88, mood: 'deadpan' } } })
    .shot(at('rev') - 0.05, { set: 'room', cast: { mei: { x: 180, y: 530, s: 0.92, mood: 'happy', phone: 1 }, will: { x: 1030, y: 490, s: 0.88, mood: 'shock', glow: 0.5 } } })
    .shot(at('kfive') - 0.05, { set: 'room', cast: { mei: { x: 170, y: 540, s: 0.88, mood: 'happy' }, kevin: { x: 600, y: 550, s: 0.95, mood: 'happy' }, will: { x: 1040, y: 500, s: 0.82, mood: 'annoyed' } } });

  d.pop(hooks, at('hooks') + 0.05, end('hooks') + 0.2, 600, 250);
  traps.forEach(({ id, c }) => d.pop(c, at(id) + 0.05, end(id) + 0.18, 665, 315));
  d.pop(revWill, at('rev') + 0.08, S.D + 1, 370, 250);
  d.pop(revKev, mid('kfive', 0.25), S.D + 1, 850, 250);

  return t => {
    const sh = d.upd(t);
    op(mugs16, sh.spec.set === 'room' ? 1 : 0);
    revWill.set(4.5 * P(t, mid('rev', 0.2), 0.6, easeOut));
    revKev.set(5 * P(t, mid('kfive', 0.3), 0.7, easeOut));
  };
});

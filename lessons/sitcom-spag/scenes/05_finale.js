/* Scene 5: Standard English, register, PEEL — and Kevin's triumphant moment!
   Arjun and I were / could have -> Subject-verb agreement (box... was; Each... receives) -> Active vs Passive voice ->
   Register & Singlish code-switching (kiasu, shiok) -> PEEL ladder on Dickens -> Queenstown flat: "Let's eat, Grandma!" */
scene('finale', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 27, fill: o.fill || 'rgba(14,24,40,0.95)', stroke: o.stroke || ENG.sky, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(7); });
  const mugs16 = spgExtraMugs(d.bg);
  d.add('flat', engFlat(d.bg), (t, g) => { g.upd(t); g.clock(19.0); });

  const mei = d.who('mei'), mrh = d.who('mrh'), nib = d.who('nib'), kev = d.who('kevin');

  const cStd = engCard(d.fg,
    '✗ "Me and Arjun was late, we **could of** ran faster."\n✓ "**Arjun and I were** late**;** we **could have run** faster."',
    { w: 790, size: 27, stroke: C.good, icon: 'tick', tab: 'STANDARD ENGLISH' });
  const cAgr = engCard(d.fg, '**True subject agreement:**\n"The **box** of chocolates **was** full."\n"**Each** of the players **receives** a medal."', { w: 760, size: 28, stroke: ENG.sky });
  const cPass = engCard(d.fg, '**Active:** "The dog bit the postman." (clear doer)\n**Passive (be + past participle):** "Mistakes **were made**." (hides doer!)', { w: 800, size: 26, stroke: '#FFB547' });
  const cReg = engCard(d.fg, '**CODE-SWITCHING & REGISTER:**\n**Singlish** ("kiasu, shiok, lah" — in the OED!) = warm & expressive with friends\n**Formal Standard English** = exams, essays & letters', { w: 820, size: 25, stroke: '#B58CFF' });

  const peel = engPeel(d.fg, [
    'Dickens uses parallel clauses to present an era of contradiction.',
    '"It was the **best** of times, it was the **worst** of times"',
    'Comma-joined **antithesis** piles up breathlessly like a chant.',
    'Links to a society torn between liberation and terror.',
  ], { w: 790, size: 24, title: 'ANALYSING GRAMMAR WITH PEEL' });

  const banner = spgDinnerBanner(d.fg);
  const heroCrown = G(d.fg);
  E('path', { d: 'M-36,16 L-42,-20 L-18,-2 L0,-30 L18,-2 L42,-20 L36,16 Z', fill: '#FFE45C', stroke: SC_INK, 'stroke-width': 3.5, 'stroke-linejoin': 'round' }, heroCrown);
  const ahmaB = engBubble(d.fg, '23 curry puffs! Come & eat!', { size: 30, tail: 'left' });

  d.shot(0, { set: 'room', cast: { mei: { x: 190, y: 520, s: 0.92, mood: 'happy' }, mrh: { x: 1020, y: 500, s: 0.92, mood: 'neutral', mug: 1 } } })
    .shot(at('agree') - 0.05, { set: 'room', cast: { nib: { x: 170, y: 500, s: 0.88, mood: 'smug' }, mrh: { x: 1030, y: 500, s: 0.9, mood: 'neutral' } } })
    .shot(at('peel') - 0.05, { set: 'room', cast: { mei: { x: 135, y: 590, s: 0.72, mood: 'happy' }, nib: { x: 1070, y: 585, s: 0.7, mood: 'smug' } } })
    .shot(at('home') - 0.05, { set: 'flat', cast: { mei: { x: 820, y: 500, s: 1.05, mood: 'happy', phone: 1 }, kevin: { x: 460, y: 510, s: 1.0, mood: 'happy' } } })
    .shot(at('glow') - 0.05, { set: 'flat', cam: [1, 1.06, 520, 440], cast: { kevin: { x: 520, y: 500, s: 1.12, mood: 'happy' }, mei: { x: 880, y: 500, s: 1.02, mood: 'happy' } } });

  d.pop(cStd, at('err') + 0.06, end('std') + 0.2, 600, 245);
  d.pop(cAgr, at('agree') + 0.06, end('agree') + 0.2, 600, 250);
  d.pop(cPass, at('pass') + 0.06, end('pass') + 0.2, 600, 250);
  d.pop(cReg, at('reg') + 0.06, end('reg') + 0.22, 600, 255);
  d.pop(banner, at('home') + 0.08, S.D + 1, 600, 200);
  d.pop(heroCrown, at('glow') + 0.08, S.D + 1, 520, 365);
  d.pop(ahmaB, at('puffs') + 0.06, S.D + 1, 310, 385);

  return t => {
    const sh = d.upd(t);
    op(mugs16, sh.spec.set === 'room' ? 1 : 0);
    const pv = win(t, at('peel') - 0.05, end('peel') + 0.22, 0.2);
    op(peel, pv);
    if (pv) {
      tr(peel, 600, 95);
      peel.set(4 * P(t, at('peel'), 1.2, easeOut));
    }
    banner.set(P(t, mid('hero', 0.25), 0.45, pop));
  };
});

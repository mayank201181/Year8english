/* Scene 1: Effect, speaker & tone. Classroom.
   Feature spotting vs WHAT? HOW? WHY? chain (Technique -> Evidence -> Effect -> Meaning) + Connotations ->
   Speaker / persona ≠ poet ("the poet chooses, the speaker says"; dramatic monologue My Last Duchess) ->
   Tone vs Mood + tonal shift in Singapore's "Monsoon, Four O'Clock" (Toa Payoh -> HDB void deck) -> SMILE! */
scene('golden', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 28, fill: o.fill || 'rgba(20,14,42,0.94)', stroke: o.stroke || ENG.violet, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(9); });
  const mei = d.who('mei'), mrh = d.who('mrh'), nib = d.who('nib');

  /* 4-box chain: Technique -> Evidence -> Effect -> Meaning */
  const chain = G(d.fg);
  [['1 TECHNIQUE', '#5AB4E0'], ['2 EVIDENCE', '#FFB547'], ['3 EFFECT', '#56D69B'], ['4 MEANING', '#F06A8A']].forEach(([lbl, col], i) => {
    const b = G(chain); tr(b, -375 + i * 250, 0);
    E('rect', { x: -110, y: -38, width: 220, height: 76, rx: 14, fill: 'rgba(16,14,38,0.95)', stroke: col, 'stroke-width': 4 }, b);
    T(b, 0, 9, lbl, { size: 24, weight: 800, anchor: 'middle', fill: col });
  });
  const tConn = engTech(d.fg, 'CONNOTATIONS', { kind: 'language', def: 'feelings & associations beyond dictionary meaning' });
  const cPersona = engCard(d.fg, '**The poet chooses; the speaker says!**\nNever assume **"I"** is the poet — write **"the speaker"** (or **persona**).', { w: 680, size: 30, stroke: ENG.violet, boldFill: '#FFE45C' });
  const tDram = engTech(d.fg, 'DRAMATIC MONOLOGUE', { kind: 'form', def: 'character speaks to silent listener (e.g. My Last Duchess)' });
  const cTone = engCard(d.fg, '• **TONE** = speaker\'s attitude (*wistful, awed, bitter*)\n• **MOOD** = atmosphere the reader feels', { w: 660, size: 29, stroke: '#FF7EB6' });
  const qMon = engQuote(d.fg, { text: 'clenches like a fist  →  Under the void deck ... an old friend, arriving late.', who: 'Tonal shift', where: "Monsoon, Four O'Clock (Toa Payoh, Singapore)", w: 740, size: 34, hl: ['fist', 'friend'] });
  const smile5 = ['Structure', 'Meaning', 'Imagery', 'Language', 'Effect (every line!)'].map(s => pill(s, { stroke: '#FFE45C', color: '#FFE6A8' }));

  d.shot(0, { set: 'room', cast: { mrh: { x: 200, y: 480, s: 1.05, mood: 'neutral', mug: 1 } } })
    .shot(at('chain') - 0.05, { set: 'room', cast: { nib: { x: 190, y: 460, s: 0.95, mood: 'smug' } } })
    .shot(at('poet') - 0.05, { set: 'room', cast: { mei: { x: 230, y: 500, s: 1.05, mood: 'neutral', hand: 1 }, nib: { x: 960, y: 460, s: 0.92, mood: 'annoyed' } } })
    .shot(at('duke') - 0.05, { set: 'room', cast: { mrh: { x: 200, y: 480, s: 1.05, mood: 'neutral' } } })
    .shot(at('tone') - 0.05, { set: 'room', cast: { nib: { x: 190, y: 460, s: 0.95, mood: 'smug' } } })
    .shot(at('shift') - 0.05, { conf: 'mei', cast: { mei: { x: 300, y: 430, s: 1.28, mood: 'happy' } } })
    .shot(at('smile') - 0.05, { set: 'room', cast: { mrh: { x: 200, y: 480, s: 1.05, mood: 'happy', mug: 1 } } });

  d.pop(chain, at('chain') + 0.05, end('zoom') + 0.2, 600, 190);
  d.pop(tConn, at('zoom') + 0.08, end('zoom') + 0.25, 720, 390);
  d.pop(cPersona, at('persona') + 0.08, end('persona') + 0.25, 600, 260);
  d.pop(tDram, at('duke') + 0.08, end('duke') + 0.25, 730, 340);
  d.pop(cTone, at('tone') + 0.08, end('tone') + 0.25, 730, 340);
  d.pop(qMon, at('shift') + 0.08, end('shift') + 0.25, 780, 350);
  smile5.forEach((c, i) => d.pop(c, mid('smile', 0.15 + i * 0.15), end('smile') + 0.25, 760, 175 + i * 86));

  return t => {
    d.upd(t);
    qMon.mark(-1, P(t, mid('shift', 0.45), 0.45));
  };
});

/* Scene 3: Word-level zoom and analytical verbs. Library: Shelley's Ozymandias ("sneer of cold command") ->
   anlWeb connotation web for "sneer" -> semantic field of cold + verb "clutching" -> Nib bans vague phrases ->
   no feature-spotting -> Analytical verb wall (suggests, implies, conveys, evokes, exposes, challenges, foreshadows). */
scene('zoom', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 27, fill: o.fill || 'rgba(14,24,40,0.95)', stroke: o.stroke || ENG.sky, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('lib', engLibrary(d.bg), (t, g) => g.upd(t, 0.1));
  const mei = d.who('mei'), mrh = d.who('mrh'), will = d.who('will'), nib = d.who('nib'), zm = d.who('zoom');

  const qOzy = engQuote(d.fg, { text: 'Half sunk a shattered visage lies, whose frown, / And wrinkled lip, and sneer of cold command,', who: 'Percy Bysshe Shelley', where: "'Ozymandias' (1818)", w: 780, size: 33, hl: ['sneer', 'cold', 'command'] });
  const web = anlWeb(d.fg);
  const tSem = engTech(d.fg, 'SEMANTIC FIELD', { kind: 'language', def: 'words linked by topic: froze, frosty, rime, iced' });

  const cBan = engCard(d.fg,
    '✗ "makes the reader want to read on"\n✗ "creates imagery"   ·   ✗ "paints a picture in the reader\'s head"',
    { w: 780, size: 27, stroke: C.bad, icon: 'cross', tab: 'BANNED PHRASES' });
  const stSpot = engStamp(d.fg, 'NO FEATURE-SPOTTING!', '#D32F2F');

  const vbs = ['SUGGESTS', 'IMPLIES', 'CONVEYS', 'EVOKES', 'EMPHASISES', 'EXPOSES', 'CHALLENGES', 'FORESHADOWS'].map((v, i) =>
    chip(d.fg, v, { size: 26, fill: 'rgba(12,24,42,0.96)', stroke: i % 2 ? ENG.gold : ENG.sky, sw: 3, color: '#FFFFFF' }));
  const cSug = pill('"suggests" > "proves" — literature invites interpretation!', { size: 27, stroke: C.good });

  d.shot(0, { set: 'lib', cast: { will: { x: 165, y: 500, s: 0.85, mood: 'smug', glow: 0.4 }, zoom: { x: 1030, y: 510, s: 0.9, mood: 'smug', focus: 1 } } })
    .shot(at('den') - 0.05, { set: 'lib', cast: { zoom: { x: 140, y: 575, s: 0.72, mood: 'smug', focus: 1 }, mei: { x: 1060, y: 580, s: 0.78, mood: 'happy' } } })
    .shot(at('sem') - 0.05, { set: 'lib', cast: { nib: { x: 180, y: 500, s: 0.9, mood: 'smug' }, mei: { x: 1020, y: 520, s: 0.9, mood: 'neutral' } } })
    .shot(at('leak') - 0.05, { set: 'lib', cast: { nib: { x: 200, y: 490, s: 0.95, mood: 'shock', ink: 1 }, mrh: { x: 1020, y: 500, s: 0.92, mood: 'deadpan' } } })
    .shot(at('verbs') - 0.05, { set: 'lib', cast: { zoom: { x: 150, y: 560, s: 0.76, mood: 'happy', focus: 0.8 }, mrh: { x: 1060, y: 560, s: 0.78, mood: 'happy' } } });

  d.mood('mei', at('leak'), 'shock');

  d.pop(qOzy, at('ozy') + 0.05, end('ozy') + 0.25, 600, 240);
  d.pop(tSem, at('sem') + 0.08, end('sem') + 0.25, 600, 250);
  d.pop(cBan, at('shows') + 0.1, end('spot') + 0.2, 600, 230);
  d.pop(stSpot, at('spot') + 0.08, end('spot') + 0.22, 600, 415, 0.76);
  vbs.forEach((c, i) => d.pop(c, at('verbs') + 0.06 + i * 0.12, end('suggest') + 0.25, 420 + (i % 2) * 360, 145 + Math.floor(i / 2) * 80));
  d.pop(cSug, at('suggest') + 0.08, end('suggest') + 0.3, 600, 505);

  return t => {
    d.upd(t);
    qOzy.mark(-1, P(t, mid('ozy', 0.4), 0.45));
    const wv = win(t, at('den') - 0.05, end('conn') + 0.22, 0.2);
    op(web, wv);
    if (wv) {
      tr(web, 600, 275);
      web.set(P(t, mid('den', 0.35), 1.4, easeOut));
    }
  };
});

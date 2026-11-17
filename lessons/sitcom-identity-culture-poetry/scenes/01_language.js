/* Scene 1: Identity, dialect & code-switching. Classroom (10 mugs!).
   Identity / Culture / Heritage -> PLACE mnemonic -> Code-switching (Classroom vs Hawker vs Home) ->
   Agard's Creole phonetic spelling ("Explain yuself" / "wha yu mean") -> Bhatt's Search For My Tongue
   (extended plant metaphor: "rot and die", Gujarati script making English-only readers outsiders, "a stump of a shoot"
   -> "it blossoms out of my mouth") -> Hawker Centre, 7 p.m. ("This is not broken. / This is mended:"). */
scene('language', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 27, fill: o.fill || 'rgba(20,14,42,0.94)', stroke: o.stroke || ENG.violet, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(7); });
  const mei = d.who('mei'), mrh = d.who('mrh'), nib = d.who('nib'), lexi = d.who('lexi');

  const cDefs = engCard(d.fg, '• **Identity** = who you are\n• **Culture** = shared way of life\n• **Heritage** = handed down from earlier generations', { w: 680, size: 29, stroke: ENG.violet, boldFill: '#FFE45C' });
  const place5 = ['Place', 'Language', 'Ancestors', 'Community', 'Expression'].map(s => pill(s, { stroke: '#FFE45C', color: '#FFE6A8' }));
  const tSwitch = engTech(d.fg, 'CODE-SWITCHING', { kind: 'language', def: 'moving fluently between languages/dialects by audience' });
  const cCreole = engCard(d.fg, 'John Agard (*Half-Caste*): **"Explain yuself"** · **"wha yu mean"**\n→ Phonetic **Creole spelling** captures real accent & pride!', { w: 690, size: 28, icon: 'tick', stroke: C.good, boldFill: C.good });
  const cBhatt = engCard(d.fg, 'Sujata Bhatt (*Search For My Tongue*):\n• Fears mother tongue will **"rot and die"**\n• Prints **Gujarati script** → English-only reader feels outside!\n• Regrows from **"a stump of a shoot"** → **"it blossoms out of my mouth"**', { w: 710, size: 26, stroke: '#FF7EB6', boldFill: '#FFE45C' });
  const qMend = engQuote(d.fg, { text: 'This is not broken. / This is mended:', who: 'Speaker', where: 'Hawker Centre, 7 p.m. (Singapore)', w: 660, size: 40, hl: ['mended'] });

  d.shot(0, { set: 'room', cast: { mrh: { x: 200, y: 480, s: 1.05, mood: 'neutral', mug: 1 } } })
    .shot(at('switch') - 0.05, { set: 'room', cast: { lexi: { x: 200, y: 480, s: 0.98, mood: 'happy' } } })
    .shot(at('spell') - 0.05, { set: 'room', cast: { nib: { x: 190, y: 460, s: 0.95, mood: 'smug' }, lexi: { x: 1030, y: 480, s: 0.88, mood: 'happy' } } })
    .shot(at('bhatt') - 0.05, { set: 'room', cast: { lexi: { x: 190, y: 480, s: 0.95, mood: 'happy' } } })
    .shot(at('out') - 0.05, { conf: 'mei', cast: { mei: { x: 310, y: 430, s: 1.28, mood: 'shock' } } })
    .shot(at('bloom') - 0.05, { set: 'room', cast: { lexi: { x: 190, y: 480, s: 0.95, mood: 'happy' } } })
    .shot(at('mend') - 0.05, { set: 'room', cast: { mei: { x: 220, y: 500, s: 1.05, mood: 'happy' } } });

  d.pop(cDefs, at('defs') + 0.08, end('defs') + 0.2, 730, 320);
  place5.forEach((c, i) => d.pop(c, mid('place', 0.15 + i * 0.15), end('place') + 0.2, 740, 175 + i * 86));
  d.pop(tSwitch, at('switch') + 0.08, end('switch') + 0.25, 730, 330);
  d.pop(cCreole, at('spell') + 0.08, end('voice') + 0.2, 610, 290);
  d.pop(cBhatt, at('bhatt') + 0.08, end('bloom') + 0.25, 730, 330);
  d.pop(qMend, at('mend') + 0.05, end('mend') + 0.3, 730, 330);

  return t => {
    d.upd(t);
    qMend.mark(0, P(t, mid('mend', 0.35), 0.4));
  };
});

/* Scene 3: Weather with an attitude (Setting, atmosphere, Jane Eyre's red-room, Pathetic fallacy, Jekyll's blind wall). */
scene('setting', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 27, fill: o.fill || 'rgba(14,24,40,0.92)', stroke: o.stroke || ENG.amber, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('flat', engFlat(d.bg), (t, g) => { g.upd(t); g.clock(16); });
  d.who('mei'); d.who('mrh'); d.who('will'); d.who('nib'); d.who('shady'); d.who('omni');

  const setC = engCard(d.fg, '**SETTING** = place + time + social world   |   **ATMOSPHERE** = mood created', { w: 760, size: 28, stroke: ENG.amber });
  const qRed = engQuote(d.fg, { text: 'hung with curtains of deep red damask, stood out like a tabernacle ... looking, as I thought, like a pale throne.', who: 'Jane (narrator)', where: 'Charlotte Brontë, Jane Eyre (1847), Chapter 2 — the red-room', w: 780, size: 31, hl: ['red', 'tabernacle', 'throne'] });
  const cCon = pill('Red = anger · danger · blood  |  Throne = room sits in judgement!', { size: 25, stroke: '#FF6070', color: '#FFD6DA' });
  const tPf = engTech(d.fg, 'PATHETIC FALLACY', { kind: 'language', def: 'weather or nature reflecting human emotion / mood' });
  const trapC = engCard(d.fg, '"No wind that blew was bitterer than Scrooge" = **comparison**, NOT pathetic fallacy!', { w: 740, size: 27, tab: 'WATCH OUT', tabCol: '#D97706', stroke: ENG.gold });
  const qWall = engQuote(d.fg, { text: 'a blind forehead of discoloured wall', who: 'Narrator', where: 'R. L. Stevenson, Dr Jekyll and Mr Hyde (1886), Ch. 1 — setting as symbol!', w: 700, size: 36, hl: ['blind', 'forehead'] });
  const cLink = pill('Always link setting to CHARACTER, TENSION, or SYMBOLISM!', { size: 28, stroke: '#56D69B', color: '#D0F7E2' });

  d.shot(0, { set: 'flat', cast: { mrh: { x: 200, y: 500, s: 0.98, mood: 'neutral', mug: 1 }, mei: { x: 1000, y: 510, s: 0.98, mood: 'neutral' } } })
    .shot(at('red') - 0.05, { set: 'flat', cast: { omni: { x: 200, y: 310, s: 0.88, mood: 'smug' }, mei: { x: 1020, y: 510, s: 0.94, mood: 'shock' } } })
    .shot(at('pf') - 0.05, { set: 'flat', cast: { nib: { x: 190, y: 490, s: 0.9, mood: 'smug' }, mrh: { x: 1010, y: 500, s: 0.94, mood: 'neutral' } } })
    .shot(at('marshes') - 0.05, { set: 'flat', cast: { will: { x: 200, y: 440, s: 0.9, mood: 'happy', glow: 0.6 }, shady: { x: 1000, y: 500, s: 0.96, mood: 'smug' } } })
    .shot(at('sec') - 0.05, { set: 'flat', cast: { omni: { x: 210, y: 310, s: 0.88, mood: 'smug' }, mei: { x: 1000, y: 510, s: 0.98, mood: 'happy' } } });

  d.pop(setC, at('set') + 0.08, end('set') + 0.18, 600, 260);
  d.pop(qRed, at('red') + 0.08, end('judge') + 0.18, 600, 255);
  d.pop(cCon, at('judge') + 0.08, end('judge') + 0.2, 600, 470);
  d.pop(tPf, at('pf') + 0.08, end('trap') + 0.15, 600, 230);
  d.pop(trapC, at('trap') + 0.08, end('marshes') + 0.15, 600, 390);
  d.pop(qWall, at('door') + 0.08, end('sec') + 0.18, 610, 275);
  d.pop(cLink, at('link') + 0.08, end('link') + 0.25, 600, 470);

  return t => {
    d.upd(t);
    qRed.mark(-1, P(t, mid('red', 0.4), 0.5));
    qWall.mark(-1, P(t, mid('door', 0.4), 0.45));
  };
});

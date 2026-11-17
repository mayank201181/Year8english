/* Scene 0: Cold open (no card). Mei's HDB flat in Queenstown: "Let's eat Grandma!" without a comma -> Ah Ma yells
   from the kitchen doorway -> Kevin hyperventilates -> Room 8H (all 23 mugs!) with Full Stop, Semicolon & Apostrophe -> title card. */
scene('cold', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 28, fill: o.fill || 'rgba(14,24,40,0.94)', stroke: o.stroke || ENG.sky, sw: 3, color: o.color || '#FFFFFF' }); };

  const flat = d.add('flat', engFlat(d.bg), (t, g) => { g.upd(t); g.clock(18.5); });
  const room = d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(7); });
  const mugs16 = spgExtraMugs(d.bg);
  d.add('title', engTitle(d.bg, "Episode 16: Let's Eat, Grandma"), (t, g) => g.set(clamp((t - at('title')) / 2.0), t));

  const mei = d.who('mei'), mrh = d.who('mrh'), will = d.who('will'), nib = d.who('nib'), kev = d.who('kevin'),
    semi = d.who('semi'), stop = d.who('stop'), apos = d.who('apos');

  const c1 = pill('Queenstown HDB · 6:30 p.m. · Family Group Chat', { size: 29 });
  const banner = spgDinnerBanner(d.fg);
  const ahmaB = engBubble(d.fg, 'Try it! I have a cleaver!', { size: 30, tail: 'left' });
  const c23 = pill('MUG COUNT: 23 / 23 — COMPLETE SET!', { size: 29, stroke: ENG.gold, color: '#FFE6A8' });
  const menu = engCard(d.fg, 'HAWKER SIGN CRIME:\n**"FRIED NOODLE\'S — $4"** ✗', { w: 540, size: 30, stroke: C.bad, icon: 'cross' });

  d.shot(0, { set: 'flat', cast: { mei: { x: 760, y: 500, s: 1.1, mood: 'happy', phone: 1 } } })
    .shot(at('ahma') - 0.05, { set: 'flat', cast: { mei: { x: 820, y: 500, s: 1.05, mood: 'shock', phone: 1 } } })
    .shot(at('bag') - 0.05, { set: 'flat', cast: { kevin: { x: 420, y: 510, s: 1.0, mood: 'shock', bag: 1, sweat: 1 }, mei: { x: 880, y: 510, s: 1.0, mood: 'shock' } } })
    .shot(at('room') - 0.05, { set: 'room', cast: { mrh: { x: 200, y: 470, s: 1.05, mood: 'deadpan', mug: 1 } } })
    .shot(at('stop') - 0.05, { set: 'room', cast: { stop: { x: 320, y: 520, s: 1.0, mood: 'deadpan' }, kevin: { x: 920, y: 520, s: 0.9, mood: 'sad', sweat: 1 } } })
    .shot(at('semi') - 0.05, { set: 'room', cast: { semi: { x: 320, y: 490, s: 1.0, mood: 'smug' }, kevin: { x: 920, y: 520, s: 0.9, mood: 'happy' } } })
    .shot(at('apos') - 0.05, { set: 'room', cast: { apos: { x: 300, y: 480, s: 1.0, mood: 'annoyed', sweat: 1 }, mrh: { x: 960, y: 490, s: 0.95, mood: 'deadpan', mug: 1 } } })
    .shot(at('title') - 0.05, { set: 'title', cast: {
      kevin: { x: 600, y: 625, s: 0.45, mood: 'happy' }, mei: { x: 170, y: 640, s: 0.37, mood: 'happy' },
      mrh: { x: 310, y: 640, s: 0.37, mood: 'deadpan' }, semi: { x: 450, y: 635, s: 0.35, mood: 'smug' },
      stop: { x: 750, y: 645, s: 0.34, mood: 'deadpan' }, apos: { x: 890, y: 635, s: 0.35, mood: 'happy' },
      will: { x: 1030, y: 630, s: 0.33, mood: 'smug' } } });

  d.shake(at('ahma') + 0.08, 10);
  d.lower('kevin', at('bag') + 0.1, 2.8);
  d.lower(['FULL STOP', 'Ends sentences. Does not negotiate.'], at('stop') + 0.1, 2.7);
  d.lower(['SEMICOLON', "Kevin's cool older cousin. Joins main clauses."], at('semi') + 0.1, 2.8);
  d.lower(['APOSTROPHE', 'Omission & possession ONLY. Exhausted by menus.'], at('apos') + 0.1, 3.0);

  d.pop(c1, at('flat') + 0.1, end('flat') + 0.25, 600, 560);
  d.pop(banner, at('txt') + 0.05, end('bag') + 0.2, 600, 220);
  d.pop(ahmaB, at('ahma') + 0.08, end('ahma') + 0.25, 360, 390);
  d.pop(c23, at('room') + 0.1, end('room') + 0.25, 660, 260);
  d.pop(menu, at('apos') + 0.1, end('apos') + 0.25, 660, 260);

  const blackout = E('rect', { x: 0, y: 0, width: 1200, height: 750, fill: '#000000' }, d.hud);
  return t => {
    const sh = d.upd(t);
    op(blackout, 1 - P(t, 0, 0.45, linear));
    op(mugs16, sh.spec.set === 'room' ? 1 : 0);
    banner.set(0);
  };
});

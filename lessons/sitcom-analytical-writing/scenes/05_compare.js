/* Scene 5: Comparing two texts and the PEEL showpiece. Essay skeleton -> Integrated comparison vs block method ->
   Kevin's comparative connectives -> Shelley ("sneer of cold command") vs Blake ("mind-forg'd manacles") ->
   Full top-band engPeel showpiece on "Juliet is the sun" -> Mr H sighs: Level 4! */
scene('compare', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 27, fill: o.fill || 'rgba(14,24,40,0.95)', stroke: o.stroke || ENG.sky, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(7); });
  const mei = d.who('mei'), mrh = d.who('mrh'), nib = d.who('nib'), kev = d.who('kevin'), qt = d.who('quotey'), zm = d.who('zoom');

  const cSkel = engCard(d.fg, '**1 Intro:** answer + thesis\n**2 Body:** PEEL paragraphs in logical order\n**3 Conclusion:** deeper judgement, NO new quotes', { w: 740, size: 27, tab: 'ESSAY SKELETON', tabCol: '#1E6E9E', stroke: ENG.sky });
  const cComp = engCard(d.fg, '**INTEGRATED COMPARISON:**\nCompare **both texts & methods** inside every paragraph\n(NOT all of Text A, then all of Text B!)', { w: 760, size: 27, stroke: ENG.gold, icon: 'tick' });

  const cSim = engCard(d.fg, '**SIMILAR:**\nsimilarly · likewise · both · equally', { w: 360, size: 26, stroke: C.good });
  const cDif = engCard(d.fg, '**DIFFERENT:**\nwhereas · in contrast · while · unlike', { w: 390, size: 26, stroke: '#F06A8A' });
  const cBlake = engCard(d.fg, '**Shelley:** "**sneer of cold command**" → one tyrant\'s shattered statue\n**Whereas Blake:** "**mind-forg\'d manacles**" → mental chains across all London', { w: 820, size: 26, stroke: '#B58CFF' });

  const peel = engPeel(d.fg, [
    'Shakespeare **presents** Romeo\'s love as worshipful and all-consuming.',
    'Seeing her at the window, Romeo declares that "Juliet is **the sun**".',
    'Metaphor centres his world; "**sun**" connotes light & life, yet **perhaps** sudden obsession.',
    'Because the sun **burns**, the image **foreshadows** a passion that destroys them both.',
  ], { w: 810, size: 24, title: 'TOP-BAND PEEL — ROMEO AND JULIET (ACT 2 SCENE 2)' });
  const stL4 = engStamp(d.fg, 'LEVEL 4!', '#1E9E5A');

  d.shot(0, { set: 'room', cast: { mrh: { x: 170, y: 500, s: 0.92, mood: 'neutral', mug: 1 }, nib: { x: 1030, y: 500, s: 0.88, mood: 'smug' } } })
    .shot(at('conn') - 0.05, { set: 'room', cast: { kevin: { x: 175, y: 530, s: 0.88, mood: 'happy' }, zoom: { x: 1035, y: 530, s: 0.85, mood: 'smug', focus: 0.8 } } })
    .shot(at('ready') - 0.05, { set: 'room', cast: { mrh: { x: 200, y: 490, s: 0.96, mood: 'neutral' }, mei: { x: 980, y: 510, s: 0.96, mood: 'happy' } } })
    .shot(at('p1') - 0.05, { set: 'room', cast: { mei: { x: 130, y: 590, s: 0.72, mood: 'happy' }, quotey: { x: 1075, y: 590, s: 0.68, mood: 'happy' } } })
    .shot(at('sigh') - 0.05, { set: 'room', cast: { mrh: { x: 260, y: 480, s: 1.02, mood: 'happy', mug: 1 }, mei: { x: 640, y: 500, s: 1.0, mood: 'happy' }, quotey: { x: 980, y: 480, s: 0.92, mood: 'happy' } } });

  d.pop(cSkel, at('skel') + 0.06, end('skel') + 0.2, 600, 250);
  d.pop(cComp, at('comp') + 0.06, end('comp') + 0.2, 600, 255);
  d.pop(cSim, at('conn') + 0.06, end('blake') + 0.2, 395, 195);
  d.pop(cDif, mid('conn', 0.45), end('blake') + 0.2, 795, 195);
  d.pop(cBlake, at('blake') + 0.06, end('blake') + 0.25, 600, 395);
  d.pop(stL4, mid('sigh', 0.25), end('sigh') + 0.3, 620, 210, 0.88);

  return t => {
    d.upd(t);
    const pv = win(t, at('p1') - 0.05, end('p4') + 0.25, 0.25);
    op(peel, pv);
    if (pv) {
      tr(peel, 600, 95);
      const n = P(t, at('p1'), 0.4) + P(t, at('p2'), 0.4) + P(t, at('p3'), 0.4) + P(t, at('p4'), 0.4);
      peel.set(n);
    }
  };
});

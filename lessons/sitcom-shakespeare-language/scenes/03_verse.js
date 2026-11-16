/* Scene 3: Verse, prose and couplets. Classroom. Mr H's three modes: blank verse (a verse page: capitals, ragged
   right edge), prose (a prose page running to the margin), madness in prose (Lady Macbeth) -> "rule of thumb,
   not a rule": Caliban's verse vs Stephano's prose -> why here, why now -> rhyming couplets click a scene shut
   ("The play's the thing...") -> spells and lovers -> Will bows to his own couplet. */
scene('verse', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 30, fill: o.fill || 'rgba(14,24,40,0.9)', stroke: o.stroke || ENG.gold, sw: 3, color: o.color || '#FFFFFF' }); };

  const room = d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(6); });
  const mei = d.who('mei'), mrh = d.who('mrh'), will = d.who('will'), nib = d.who('nib');

  /* the board: "3 MODES" with three slots */
  const bd = G(d.bg);
  T(bd, 660, 168, '3 MODES', { size: 44, weight: 800, anchor: 'middle', fill: '#2E7DD8' });
  const modes = [['1 BLANK VERSE', '#1E9E5A'], ['2 PROSE', '#C62828'], ['3 COUPLETS', '#7A1E9E']].map(([s, col], i) => T(bd, 660, 240 + i * 66, s, { size: 40, weight: 800, anchor: 'middle', fill: col }));

  /* the verse page and the prose page */
  const vp = engPaper(d.fg, 470, 330, { title: 'VERSE' });
  // (the page shows the first lines as printed: capital at each line start, ragged right edge)
  const VL2 = ['Be not afeard; the isle is full of noises,', 'Sounds and sweet airs, that give delight and hurt not.', 'Sometimes a thousand twangling instruments', 'Will hum about mine ears; and sometime voices'];
  VL2.forEach((l, i) => {
    T(vp, -205, -84 + i * 46, l, { size: 19, weight: 600, fill: SC_INK, font: FB });
    E('rect', { x: -211, y: -103 + i * 46, width: 18, height: 26, rx: 4, fill: '#FFE45C', opacity: 0.8 }, vp).parentNode.insertBefore(vp.lastChild, vp.children[2]);
  });
  const vCap = T(vp, 0, 140, 'capitals · stops before the margin', { size: 22, weight: 800, anchor: 'middle', fill: '#1E9E5A', font: FB });
  const pp = engPaper(d.fg, 470, 330, { title: 'PROSE' });
  ['This will prove a brave kingdom to me,', 'where I shall have my music for nothing.'].forEach((l, i) => T(pp, -205, -84 + i * 34, l, { size: 22, weight: 600, fill: SC_INK, font: FB }));
  let fill = ''; for (let i = 0; i < 4; i++) fill += `M-205,${-18 + i * 34} L205,${-18 + i * 34} `;
  E('path', { d: fill, stroke: '#C9D3DC', 'stroke-width': 10, 'stroke-linecap': 'round' }, pp);
  T(pp, 0, 140, 'runs right across the page', { size: 22, weight: 800, anchor: 'middle', fill: '#C62828', font: FB });

  /* chips, cards, stamps */
  const tBlank = engTech(d.fg, 'BLANK VERSE', { kind: 'form', def: 'unrhymed iambic pentameter' });
  const who4 = ['nobles', 'serious matters', 'love', 'strong emotion'].map(s => pill(s, { stroke: '#56D69B', color: '#C9F2D3' }));
  const tProse = engTech(d.fg, 'PROSE', { kind: 'form', def: 'ordinary sentences, no fixed rhythm' });
  const prose4 = ['servants', 'comedy', 'letters', 'madness'].map(s => pill(s, { stroke: '#FF6070', color: '#FFD0D4' }));
  const qSpot = engQuote(d.fg, { text: 'Out, damned spot! out, I say!', who: 'Lady Macbeth', where: 'Macbeth, Act 5 Scene 1', w: 640, size: 44 });
  const stP1 = engStamp(d.fg, 'PROSE', '#C62828');
  const cThumb = pill('a RULE OF THUMB, not a rule', { size: 34, stroke: '#FFD23F' });
  const qCal = engQuote(d.fg, { text: 'Be not afeard; the isle is full of noises, / Sounds and sweet airs, that give delight and hurt not.', who: 'Caliban', where: 'The Tempest, Act 3 Scene 2', w: 760, size: 36, hl: ['noises', 'delight'] });
  const stV = engStamp(d.fg, 'VERSE', '#1E9E5A');
  const qSte = engQuote(d.fg, { text: 'This will prove a brave kingdom to me, where I shall have my music for nothing.', who: 'Stephano', where: 'The Tempest, Act 3 Scene 2', w: 760, size: 36 });
  const stP2 = engStamp(d.fg, 'PROSE', '#C62828');
  const cWhy = engCard(d.fg, 'A **switch** between verse and prose? Ask: **why here, why now?**', { w: 640, size: 36, stroke: ENG.gold });
  const tCoup = engTech(d.fg, 'RHYMING COUPLET', { kind: 'structure', def: 'two lines in a row that rhyme' });
  const qPlay = engQuote(d.fg, { text: "The play's the thing / Wherein I'll catch the conscience of the king.", who: 'Hamlet', where: 'Hamlet, Act 2 Scene 2 (the end of Act 2)', w: 720, size: 40, hl: ['thing', 'king'] });
  const click = pill('CLICK. Scene over.', { size: 36, stroke: '#B58CFF', color: '#E6D6FF' });
  const cSpell = pill('spells ✨', { size: 34, stroke: '#B58CFF' });
  const cLove = pill('lovers in harmony ♥', { size: 34, stroke: '#F06A8A' });
  const mugC = pill('tea: 1 / 4', { size: 30, stroke: '#B07A45', color: '#FFE6B0' });
  const spot = E('ellipse', { cx: 600, cy: 560, rx: 210, ry: 60, fill: glow('#FFF2C2'), opacity: 0 }, d.bg);

  /* shots */
  d.shot(0, { set: 'room', cast: { mrh: { x: 200, y: 470, s: 1.05, mood: 'deadpan', mug: 1 } } })
    .shot(at('blank') - 0.05, { set: 'room', cast: { nib: { x: 180, y: 430, s: 0.9, mood: 'smug' }, mrh: { x: 1080, y: 520, s: 0.85, mood: 'deadpan' } } })
    .shot(at('posh') - 0.05, { set: 'room', cast: { mrh: { x: 180, y: 480, s: 1.0, mood: 'neutral' }, mei: { x: 1060, y: 540, s: 0.85, mood: 'neutral' } } })
    .shot(at('spot') - 0.05, { set: 'room', cast: { mrh: { x: 1120, y: 620, s: 0.6, mood: 'neutral' } } })
    .shot(at('who') - 0.05, { set: 'room', cast: { nib: { x: 1120, y: 600, s: 0.55, mood: 'smug' } } })
    .shot(at('spot2') - 0.05, { set: 'room', cast: { nib: { x: 180, y: 430, s: 0.9, mood: 'smug' } } })
    .shot(at('easy') - 0.05, { set: 'room', cast: { mei: { x: 300, y: 500, s: 1.1, mood: 'smug' }, will: { x: 880, y: 400, s: 0.95, mood: 'smug' } } })
    .shot(at('caliban') - 0.05, { set: 'room', cast: { will: { x: 1080, y: 470, s: 0.75, mood: 'happy' } } })
    .shot(at('whynow') - 0.05, { set: 'room', cast: { mrh: { x: 200, y: 480, s: 1.0, mood: 'neutral', mug: 1 } } })
    .shot(at('play') - 0.05, { set: 'room', cast: { will: { x: 600, y: 470, s: 1.0, mood: 'happy', glow: 1, quill: 1 } } })
    .shot(at('spells') - 0.05, { set: 'room', cast: { mrh: { x: 200, y: 480, s: 1.0, mood: 'deadpan' }, will: { x: 1060, y: 450, s: 0.8, mood: 'smug' } } })
    .shot(at('bowed') - 0.05, { set: 'room', cast: { mei: { x: 230, y: 520, s: 1.0, mood: 'deadpan' }, mrh: { x: 450, y: 540, s: 0.85, mood: 'deadpan' }, will: { x: 860, y: 430, s: 0.95, mood: 'happy' } } });
  d.mood('mei', at('thumb'), 'annoyed').mood('mrh', mid('whynow', 0.5), 'happy');

  d.pop(mugC, mid('tea', 0.55), end('tea') + 0.2, 900, 560);
  d.pop(tBlank, mid('blank', 0.2), end('blank') + 0.3, 700, 560);
  who4.forEach((c, i) => d.pop(c, mid('posh', 0.1 + i * 0.2), end('posh') + 0.2, 420 + (i % 2) * 330, 540 + Math.floor(i / 2) * 76));
  d.pop(vp, at('spot') - 0.05, end('who') + 0.2, 330, 330);
  d.pop(pp, at('prose') - 0.05, end('who') + 0.2, 860, 330);
  d.pop(tProse, mid('prose', 0.2), end('prose') + 0.2, 860, 570);
  prose4.forEach((c, i) => d.pop(c, mid('who', 0.15 + i * 0.2), end('who') + 0.2, 170 + i * 200, 610));
  d.pop(qSpot, at('spot2') - 0.05, end('spot2') + 0.2, 640, 330);
  d.pop(stP1, mid('spot2', 0.55), end('spot2') + 0.2, 820, 500, 0.8);
  d.pop(cThumb, mid('thumb', 0.3), end('thumb') + 0.3, 600, 170);
  d.pop(qCal, at('caliban') - 0.05, end('caliban') + 0.2, 520, 300);
  d.pop(stV, mid('caliban', 0.5), end('caliban') + 0.2, 720, 500, 0.8);
  d.pop(qSte, at('stephano') - 0.05, end('stephano') + 0.2, 520, 300);
  d.pop(stP2, mid('stephano', 0.3), end('stephano') + 0.2, 720, 480, 0.8);
  d.pop(cWhy, mid('whynow', 0.1), end('whynow') + 0.2, 700, 590);
  d.pop(tCoup, mid('couplet', 0.15), end('couplet') + 0.2, 640, 590);
  d.pop(qPlay, at('play') - 0.1, end('play') + 0.3, 600, 210);
  d.pop(click, end('play') - 0.2, end('play') + 0.5, 960, 640, 1, -4);
  d.pop(cSpell, mid('spells', 0.35), end('spells') + 0.2, 600, 560);
  d.pop(cLove, mid('spells', 0.65), end('spells') + 0.2, 600, 640);

  return t => {
    const sh = d.upd(t);
    // the board lists the three modes as they are named; it hides behind the pages
    op(bd, sh.spec.set === 'room' ? 1 : 0);
    op(modes[0], P(t, mid('modes', 0.6), 0.3, linear));
    op(modes[1], P(t, at('prose'), 0.3, linear));
    op(modes[2], P(t, at('couplet'), 0.3, linear));
    qCal.mark(-1, P(t, mid('caliban', 0.6), 0.6));
    qPlay.mark(-1, P(t, mid('play', 0.75), 0.4));
    attr(spot, 'opacity', 0.8 * win(t, at('play') - 0.1, end('play') + 0.3, 0.2));
    // the bow
    if (t >= at('bowed')) { const b = Math.sin(clamp((t - mid('bowed', 0.3)) / 1.2) * Math.PI); tr(will, 860, 430 + b * 30, 0.95, b * 25); }
  };
});

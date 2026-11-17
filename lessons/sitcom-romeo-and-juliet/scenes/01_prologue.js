/* Ep 4, Scene 1: Prologue & feud. Arthur Brooke (1562, 9 months -> 4 days) -> Shakespearean sonnet (4+4+4+2 = 14)
   fusing love-poem form with semantic field of violence -> "star-crossed lovers" (astrology, fate, dramatic irony) ->
   3-column Verona family map (Montagues, Capulets, and Prince's kinsmen in between). */
scene('prologue', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 30, fill: o.fill || 'rgba(14,24,40,0.92)', stroke: o.stroke || ENG.gold, sw: 3, color: o.color || '#FFFFFF' }); };

  let nightAmt = 0;
  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(10); });
  d.add('ver', rjVerona(d.bg), (t, g) => g.upd(t, nightAmt));

  const mei = d.who('mei'), mrh = d.who('mrh'), will = d.who('will'), nib = d.who('nib');
  const jul = d.who('juliet'), mer = d.who('mercutio');

  const cBrooke = engCard(d.fg, '**Source:** Arthur Brooke’s poem (**1562**) took **9 months**\n**Shakespeare (c. 1595):** squeezes everything into **4 frantic days**!', { w: 790, size: 28, stroke: ENG.gold });

  const tSon = engTech(d.fg, 'SHAKESPEAREAN SONNET', { kind: 'form', def: '14 lines of iambic pentameter: ABAB CDCD EFEF + couplet GG (4+4+4+2)', size: 32 });
  const sem4 = ['grudge', 'mutiny', 'civil blood', 'death-marked love'].map(s =>
    pill('“' + s + '”', { size: 28, stroke: C.bad, color: '#FFB3BA' }));
  const cClash = pill('Love-poem form  ×  Semantic field of hate & death!', { size: 28, stroke: ENG.rose, color: '#FFD0DC' });

  const qStar = engQuote(d.fg, { text: 'A pair of star-crossed lovers take their life', who: 'The Chorus', where: 'Romeo and Juliet, Prologue', w: 720, size: 38, hl: ['star-crossed', 'life'] });
  const tIrony = engTech(d.fg, 'DRAMATIC IRONY + FATE', { kind: 'drama', def: 'astrology dooms them; WE know the ending across every hopeful scene', size: 32 });

  /* 3-column Verona family map */
  const mapG = G(d.fg);
  const cols = [
    ['MONTAGUES', ['Romeo (only son)', 'Benvolio (cousin · peace)', 'Lord & Lady Montague'], '#5AB4E0', -330],
    ['IN BETWEEN', ['Prince Escalus (law)', 'Mercutio & Paris (kinsmen)', 'Friar Laurence'], '#FFE45C', 0],
    ['CAPULETS', ['Juliet (not yet 14)', 'Tybalt (COUSIN, not brother!)', 'Lord & Lady C. · Nurse'], '#F06A8A', 330],
  ];
  const colEls = cols.map(([hd, items, col, cx]) => {
    const c = G(mapG); tr(c, cx, 0);
    E('rect', { x: -152, y: -120, width: 304, height: 240, rx: 18, fill: 'rgba(14,24,40,0.95)', stroke: col, 'stroke-width': 4 }, c);
    T(c, 0, -76, hd, { size: 28, weight: 800, anchor: 'middle', fill: col });
    items.forEach((ln, k) => T(c, 0, -18 + k * 48, ln, { size: 22, weight: 700, anchor: 'middle', fill: '#FFFFFF', font: FB }));
    return c;
  });

  d.shot(0, { set: 'room', cast: { mrh: { x: 210, y: 480, s: 1.0, mood: 'neutral', mug: 1 }, nib: { x: 1000, y: 480, s: 0.88, mood: 'smug' } } })
    .shot(at('clash') - 0.05, { set: 'ver', cast: { will: { x: 200, y: 420, s: 0.9, mood: 'smug', quill: 1 } } })
    .shot(at('stars') - 0.05, { set: 'ver', cast: { will: { x: 200, y: 420, s: 0.9, mood: 'sad', glow: 0.7 }, mrh: { x: 1020, y: 490, s: 0.9, mood: 'neutral' } } })
    .shot(at('sides') - 0.05, { set: 'ver', cast: { mei: { x: 140, y: 585, s: 0.72, mood: 'happy' }, juliet: { x: 600, y: 590, s: 0.72, mood: 'happy' }, mercutio: { x: 1060, y: 585, s: 0.72, mood: 'smug' } } });

  d.pop(cBrooke, at('brooke') + 0.08, end('brooke') + 0.2, 610, 260);
  d.pop(tSon, at('sonnet') + 0.08, end('sonnet') + 0.25, 610, 280);

  d.pop(cClash, at('clash') + 0.08, end('clash') + 0.25, 630, 175);
  sem4.forEach((p, i) => d.pop(p, mid('clash', 0.35 + i * 0.14), end('clash') + 0.25, 460 + (i % 2) * 340, 310 + Math.floor(i / 2) * 86));

  d.pop(qStar, at('stars') + 0.05, end('irony') + 0.2, 610, 225);
  d.pop(tIrony, at('irony') + 0.08, end('irony') + 0.25, 610, 445);

  d.pop(mapG, at('sides') + 0.05, end('middle') + 0.3, 600, 275);

  return t => {
    d.upd(t);
    nightAmt = win(t, at('stars') - 0.1, end('irony') + 0.2, 0.35);
    qStar.mark(-1, P(t, mid('stars', 0.3), 0.4));
    if (t >= at('sides')) {
      op(colEls[0], P(t, at('sides'), 0.3, linear));
      op(colEls[2], P(t, at('capulets'), 0.3, linear));
      op(colEls[1], P(t, at('middle'), 0.3, linear));
    }
  };
});

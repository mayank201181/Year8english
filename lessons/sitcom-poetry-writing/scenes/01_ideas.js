/* Scene 1: Start with things, not themes (Finding ideas + Concrete imagery).
   Mei's Queenstown HDB flat: Ah Ma calls from the kitchen -> Idea Web (Old Photos Make Sounds + 'I am from') ->
   Ladder of Abstraction -> Show, don't tell + Dickinson's '"Hope" is the thing with feathers' ->
   SEE it, OWN it, PIN it banishes Cliché -> 2 stars. */
scene('ideas', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 30, fill: o.fill || 'rgba(14,24,40,0.92)', stroke: o.stroke || ENG.violet, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('flat', engFlat(d.bg), (t, g) => { g.upd(t); g.clock(18); });
  d.who('mei'); d.who('mrh'); d.who('will'); d.who('nib'); d.who('cliche');

  const bigPage = engPaper(d.fg, 440, 210, { title: 'MY IDENTITY POEM' });
  T(bigPage, 0, 18, 'IDENTITY???', { size: 46, weight: 800, anchor: 'middle', fill: '#C62828' });

  const ahmaBub = engBubble(d.fg, 'Mei-ah! Rice cooker clicked!\nCome fold **dumplings**!', { size: 28, tail: 'left' });
  const tAbs = engTech(d.fg, 'ABSTRACT NOUN', { kind: 'grammar', def: 'idea/feeling you cannot touch: culture, sadness' });
  const tCon = engTech(d.fg, 'CONCRETE NOUN', { kind: 'language', def: 'thing you can sense: jade bangle, floury thumb' });
  const web = pwrIdeaWeb(d.fg);
  const cOpms = pill('Old Photos Make Sounds: Objects · Places · Memories · Sounds', { size: 26, stroke: ENG.gold });
  const cLyon = engCard(d.fg, '**"I am from..."** (George Ella Lyon frame)\n"I am from the **click** of the rice cooker..."', { w: 660, size: 30, stroke: ENG.violet });
  const cNarrow = pill('Narrow focus: ONE object · ONE kitchen · ONE afternoon', { size: 28, stroke: '#56D69B' });
  const lad = pwrLadder(d.fg);
  const tShow = engTech(d.fg, "SHOW, DON'T TELL", { kind: 'language', def: 'give the image/action that causes the feeling' });
  const qDick = engQuote(d.fg, { text: '“Hope” is the thing with feathers -', who: 'Emily Dickinson', where: 'written c. 1861 (opening line)', w: 720, size: 42, hl: ['hope', 'feathers'] });
  const cliCard = engCard(d.fg, '"warm as toast" · "rich tapestry of cultures"', { w: 620, size: 30, tab: 'CLICHÉ', tabCol: '#C62828', icon: 'cross', stroke: C.bad });
  const sopCard = engCard(d.fg, '**SEE it** (sensory?) · **OWN it** (uniquely yours?) · **PIN it** (precise?)', { w: 720, size: 30, icon: 'tick', stroke: C.good });
  const pin1 = pill('flower ✗  →  frangipani ✓', { stroke: '#56D69B', color: '#D0F7E2' });
  const pin2 = pill('a language ✗  →  Hokkien ✓', { stroke: '#5AB4E0', color: '#D4EEFF' });
  const rating = pwrRating(d.fg);

  d.shot(0, { set: 'flat', cast: { mei: { x: 760, y: 500, s: 1.15, mood: 'annoyed' } } })
    .shot(at('ahma') - 0.05, { set: 'flat', cast: { mei: { x: 840, y: 500, s: 1.1, mood: 'shock' } } })
    .shot(at('web') - 0.05, { set: 'flat', cast: { mrh: { x: 200, y: 490, s: 1.0, mood: 'neutral', mug: 1 }, mei: { x: 1030, y: 520, s: 0.9, mood: 'neutral' } } })
    .shot(at('opms') - 0.05, { set: 'flat', cast: { nib: { x: 150, y: 540, s: 0.78, mood: 'smug' }, mei: { x: 1070, y: 550, s: 0.78, mood: 'happy' } } })
    .shot(at('ladder') - 0.05, { set: 'flat', cast: { nib: { x: 160, y: 520, s: 0.85, mood: 'smug' }, mei: { x: 1050, y: 520, s: 0.88, mood: 'happy' } } })
    .shot(at('show') - 0.05, { conf: 'mrh', cast: { mrh: { x: 330, y: 420, s: 1.3, mood: 'neutral', mug: 1 } } })
    .shot(at('hope') - 0.05, { set: 'flat', cast: { will: { x: 190, y: 430, s: 0.92, mood: 'happy', glow: 0.6 } } })
    .shot(at('card') - 0.05, { set: 'flat', cast: { cliche: { x: 250, y: 440, s: 0.98, mood: 'happy' }, nib: { x: 980, y: 480, s: 0.9, mood: 'annoyed' } } })
    .shot(at('tests') - 0.05, { set: 'flat', cast: { nib: { x: 190, y: 480, s: 0.9, mood: 'smug' }, mei: { x: 1020, y: 510, s: 0.95, mood: 'happy' } } });

  d.pop(bigPage, at('flat') + 0.1, end('stuck') + 0.15, 420, 340);
  d.pop(ahmaBub, at('ahma') + 0.05, end('ahma') + 0.3, 430, 300);
  d.pop(tAbs, mid('web', 0.2), end('web') + 0.2, 620, 330);
  d.pop(cOpms, at('opms') + 0.1, end('opms') + 0.2, 600, 610);
  d.pop(cLyon, at('lyon') + 0.08, end('lyon') + 0.2, 600, 585);
  d.pop(cNarrow, at('narrow') + 0.1, end('narrow') + 0.2, 600, 610);
  d.pop(tCon, mid('concrete', 0.15), end('concrete') + 0.2, 600, 600);
  d.pop(tShow, mid('show', 0.2), end('show') + 0.25, 830, 360);
  d.pop(qDick, at('hope') + 0.05, end('hope') + 0.25, 690, 360);
  d.pop(cliCard, at('card') + 0.1, end('card') + 0.2, 630, 290);
  d.pop(sopCard, at('tests') + 0.1, end('pin') + 0.2, 600, 280);
  d.pop(pin1, at('pin') + 0.08, end('pin') + 0.3, 600, 440);
  d.pop(pin2, mid('pin', 0.42), end('pin') + 0.3, 600, 525);

  return t => {
    d.upd(t);
    const wv = engOut(web, t, at('opms') - 0.05, end('narrow') + 0.15, 600, 310, 0.92);
    if (wv) web.set(P(t, at('opms'), 1.1, linear), P(t, at('narrow'), 0.4, ease));
    const lv = engOut(lad, t, at('ladder') - 0.05, end('concrete') + 0.15, 600, 320, 0.94);
    if (lv) lad.set(1 + 3 * P(t, mid('ladder', 0.4), 1.4, linear));
    qDick.mark(0, P(t, mid('hope', 0.3), 0.35));
    qDick.mark(1, P(t, mid('hope', 0.55), 0.35));
    rating.set(1 + P(t, mid('pin', 0.7), 0.45, linear), win(t, mid('pin', 0.6), S.D + 1, 0.2)); tr(rating, 1030, 74);
  };
});

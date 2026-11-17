/* Scene 3: Line breaks and rhyme crimes (Line breaks, enjambment, caesura + Sound, rhythm & forced rhyme).
   Room 8H: End-stopped vs Enjambment ('a suitcase that is never / quite unpacked', 'Adlestrop') ->
   Kevin's proud Caesura moment -> Stanza = room -> Cliché commits a Rhyme Crime -> Sound devices + half-rhyme -> 3 stars. */
scene('lines', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 28, fill: o.fill || 'rgba(14,24,40,0.92)', stroke: o.stroke || ENG.violet, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(7); });
  d.who('mei'); d.who('mrh'); d.who('will'); d.who('nib'); d.who('kevin'); d.who('cliche');

  const tEnd = engTech(d.fg, 'END-STOPPED', { kind: 'structure', def: 'clause finishes at the line end with punctuation' });
  const tEnj = engTech(d.fg, 'ENJAMBMENT', { kind: 'structure', def: 'sentence runs over the line break without punctuation' });
  const suitBox = G(d.fg);
  E('rect', { x: -370, y: -95, width: 740, height: 190, rx: 20, fill: '#FFFDF6', stroke: ENG.violet, 'stroke-width': 4 }, suitBox);
  T(suitBox, -320, -22, 'I am from a suitcase that is', { size: 34, weight: 700, fill: SC_INK });
  E('rect', { x: 142, y: -62, width: 130, height: 54, rx: 10, fill: '#FFE45C', stroke: '#D49A12', 'stroke-width': 3 }, suitBox);
  T(suitBox, 207, -22, 'never', { size: 36, weight: 800, anchor: 'middle', fill: '#B8335A' });
  T(suitBox, -320, 44, 'quite unpacked.', { size: 34, weight: 700, fill: '#1E5A8A' });
  T(suitBox, 180, 46, '← spotlight on last word!', { size: 24, weight: 700, fill: '#6A3AC8', font: FB });

  const qAdl = engQuote(d.fg, { text: 'Of heat the express-train drew up there / Unwontedly. It was late June.', who: 'Edward Thomas', where: "'Adlestrop' (1917), stanza 1", w: 740, size: 36, hl: ['there', 'unwontedly'] });
  const tCae = engTech(d.fg, 'CAESURA', { kind: 'punct', def: 'a strong pause in the middle of a line' });
  const cRoom = pill('STANZA = Italian for "room" · never break on weak "the" or "and"', { size: 26, stroke: ENG.gold });
  const crimeCard = engCard(d.fg, '"My grandmother is very **wise**, / She always bakes her apple **pies**!"', { w: 680, size: 30, tab: 'FORCED RHYME', icon: 'cross', stroke: C.bad });
  const stCrime = engStamp(d.fg, 'RHYME CRIME', '#C62828');
  const qTen = engQuote(d.fg, { text: 'He clasps the crag with crooked hands;', who: 'Alfred, Lord Tennyson', where: "'The Eagle' (1851), line 1 — harsh 'c' alliteration", w: 720, size: 36, hl: ['clasps', 'crag', 'crooked'] });
  const qKea = engQuote(d.fg, { text: 'Season of mists and mellow fruitfulness,', who: 'John Keats', where: "'To Autumn' (1819), line 1 — sibilance & soft 'm'", w: 720, size: 36, hl: ['season', 'mists', 'mellow'] });
  const cHalf = pill('HALF-RHYME (slant rhyme): kept / slipped · home / come', { size: 28, stroke: '#56D69B', color: '#D0F7E2' });
  const rating = pwrRating(d.fg);

  d.shot(0, { set: 'room', cast: { kevin: { x: 340, y: 500, s: 0.92, mood: 'happy' }, nib: { x: 880, y: 470, s: 0.9, mood: 'smug' } } })
    .shot(at('suitcase') - 0.05, { set: 'room', cast: { mrh: { x: 180, y: 500, s: 0.95, mood: 'neutral' }, mei: { x: 1040, y: 510, s: 0.92, mood: 'shock' } } })
    .shot(at('thomas') - 0.05, { set: 'room', cast: { will: { x: 190, y: 430, s: 0.9, mood: 'happy', glow: 0.6 }, kevin: { x: 1040, y: 510, s: 0.85, mood: 'happy' } } })
    .shot(at('stanza') - 0.05, { set: 'room', cast: { nib: { x: 340, y: 470, s: 0.95, mood: 'smug' } } })
    .shot(at('rhyme') - 0.05, { set: 'room', cast: { cliche: { x: 270, y: 440, s: 1.0, mood: 'happy' }, nib: { x: 960, y: 480, s: 0.95, mood: 'shock', ink: 1 } } })
    .shot(at('sound') - 0.05, { set: 'room', cast: { mrh: { x: 180, y: 500, s: 0.95, mood: 'neutral' }, will: { x: 1040, y: 430, s: 0.88, mood: 'happy' } } })
    .shot(at('slant') - 0.05, { set: 'room', cast: { mei: { x: 340, y: 500, s: 1.1, mood: 'happy', phone: 1 }, mrh: { x: 900, y: 500, s: 0.95, mood: 'happy' } } });

  d.lower('kevin', at('endstop') + 0.05, 2.8);
  d.mood('mei', at('never'), 'happy').mood('cliche', at('crime'), 'sad');

  d.pop(tEnd, at('endstop') + 0.1, end('endstop') + 0.15, 610, 240);
  d.pop(tEnj, at('enjamb') + 0.1, end('enjamb') + 0.15, 610, 240);
  d.pop(suitBox, at('suitcase') + 0.08, end('never') + 0.2, 600, 290);
  d.pop(qAdl, at('thomas') + 0.08, end('caesura') + 0.2, 600, 270);
  d.pop(tCae, at('caesura') + 0.1, end('caesura') + 0.2, 600, 520);
  d.pop(cRoom, at('stanza') + 0.1, end('stanza') + 0.2, 600, 570);
  d.pop(crimeCard, at('rhyme') + 0.1, end('crime') + 0.2, 610, 270);
  d.pop(stCrime, at('crime') + 0.15, end('crime') + 0.2, 610, 460, 0.9);
  d.pop(qTen, at('sound') + 0.08, end('sound') + 0.15, 600, 280);
  d.pop(qKea, at('keats') + 0.08, end('keats') + 0.15, 600, 280);
  d.pop(cHalf, at('slant') + 0.1, end('slant') + 0.25, 620, 290);

  return t => {
    d.upd(t);
    qAdl.mark(-1, P(t, mid('thomas', 0.45), 0.45));
    qTen.mark(-1, P(t, mid('sound', 0.5), 0.4));
    qKea.mark(-1, P(t, mid('keats', 0.35), 0.45));
    rating.set(2 + P(t, mid('slant', 0.65), 0.45, linear), win(t, mid('slant', 0.55), S.D + 1, 0.2)); tr(rating, 1030, 74);
  };
});

/* Scene 1: Who's Will? Library. Will's life on a timeline (1564 Stratford -> 1582 Anne Hathaway -> lost years ->
   1592 London, "upstart crow" -> patrons: Lord Chamberlain's Men -> King's Men -> the Master of the Revels ->
   1616 -> 1623 First Folio), then Nib's four genre cards, Mei's confessional, still one star. */
scene('world', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 30, fill: o.fill || 'rgba(14,24,40,0.9)', stroke: o.stroke || ENG.gold, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('lib', engLibrary(d.bg), (t, g) => g.upd(t, 0));
  const mei = d.who('mei'), will = d.who('will'), nib = d.who('nib');

  /* the timeline panel */
  const tlp = G(d.fg);
  E('rect', { x: -560, y: -120, width: 1120, height: 250, rx: 22, fill: 'rgba(14,24,40,0.9)', stroke: ENG.gold, 'stroke-width': 3 }, tlp);
  const tl = osTimeline(tlp, [['1564', 'born,\nStratford'], ['1582', 'marries\nAnne Hathaway'], ['1592', 'London'], ['1616', 'dies'], ['1623', 'First\nFolio']]);
  tr(tl, -450, -20, 0.9);
  const lostB = G(tlp); tr(lostB, -112, -20);
  E('rect', { x: -70, y: -24, width: 140, height: 48, rx: 10, fill: '#3A2A10', stroke: ENG.gold, 'stroke-width': 3 }, lostB);
  T(lostB, 0, 12, '1585–92', { size: 26, weight: 800, anchor: 'middle', fill: ENG.gold });
  const lost = chip(d.fg, 'THE LOST YEARS', { size: 34, fill: '#3A2A10', stroke: ENG.gold, sw: 3, color: ENG.gold });
  const glove = G(d.fg);
  E('path', { d: 'M-30,40 L-30,-10 Q-34,-40 -24,-44 Q-14,-46 -14,-14 L-14,-50 Q-12,-62 -2,-60 Q6,-58 6,-48 L6,-54 Q8,-66 18,-62 Q26,-58 24,-46 L24,-36 Q28,-46 36,-42 Q42,-36 38,-20 L30,20 L30,40 Z', fill: '#C98E62', stroke: SC_INK, 'stroke-width': 4, 'stroke-linejoin': 'round' }, glove);
  const kids = G(d.fg);
  [-50, 0, 50].forEach((x, i) => { E('circle', { cx: x, cy: -20, r: 16, fill: '#F1C7A8', stroke: SC_INK, 'stroke-width': 3 }, kids); E('rect', { x: x - 18, y: -2, width: 36, height: 36, rx: 10, fill: ['#F06A8A', '#5AB4E0', '#56D69B'][i], stroke: SC_INK, 'stroke-width': 3 }, kids); });
  const crow = G(d.fg);
  E('path', { d: 'M-60,10 Q-40,-40 10,-30 Q40,-26 50,-46 L64,-40 Q56,-24 40,-16 L60,0 Q20,10 0,40 L-10,60 L-20,40 Q-50,40 -60,10 Z', fill: '#1E1E26', stroke: '#000000', 'stroke-width': 3 }, crow);
  E('circle', { cx: 34, cy: -34, r: 5, fill: '#FFFFFF' }, crow);
  const crowB = engBubble(crow, "'upstart crow'", { size: 30, tail: 'down' }); tr(crowB, 40, -120);

  /* patrons */
  const patron = engTech(d.fg, 'PATRON', { kind: 'context', def: 'a noble or monarch who protects a company' });
  const crown = (parent, col) => { const c = G(parent); E('path', { d: 'M-44,20 L-50,-26 L-24,-4 L0,-36 L24,-4 L50,-26 L44,20 Z', fill: col, stroke: SC_INK, 'stroke-width': 4, 'stroke-linejoin': 'round' }, c); E('rect', { x: -44, y: 14, width: 88, height: 14, fill: col, stroke: SC_INK, 'stroke-width': 3 }, c); return c; };
  const kings = G(d.fg);
  const kA = G(kings); tr(kA, -250, 0); tr(crown(kA, '#FFD23F'), 0, -60);
  T(kA, 0, 10, 'ELIZABETH I', { size: 30, weight: 800, anchor: 'middle', fill: '#FFE6A8' });
  T(kA, 0, 50, "Lord Chamberlain's Men", { size: 26, weight: 700, anchor: 'middle', fill: '#FFFFFF', font: FB });
  T(kA, 0, 84, 'from 1594', { size: 24, weight: 700, anchor: 'middle', fill: C.muted, font: FB });
  const kB = G(kings); tr(kB, 250, 0); tr(crown(kB, '#C9D3DC'), 0, -60);
  T(kB, 0, 10, 'JAMES I', { size: 30, weight: 800, anchor: 'middle', fill: '#E6EEF4' });
  T(kB, 0, 50, "the King's Men", { size: 26, weight: 700, anchor: 'middle', fill: '#FFFFFF', font: FB });
  T(kB, 0, 84, 'from 1603', { size: 24, weight: 700, anchor: 'middle', fill: C.muted, font: FB });
  const kArrow = arrow(kings, -90, 0, 90, 0, { color: ENG.gold, width: 7 });
  const kBox = E('rect', { x: -420, y: -130, width: 840, height: 240, rx: 22, fill: 'rgba(14,24,40,0.9)', stroke: ENG.gold, 'stroke-width': 3 }, kings);
  kings.insertBefore(kBox, kings.firstChild);
  const revels = engStamp(d.fg, 'LICENSED', '#1E9E5A');
  const revC = pill('Master of the Revels = the censor', { size: 30, stroke: '#1E9E5A' });
  const scis = G(d.fg);
  const blade = (sd) => { const b = G(scis); E('path', { d: 'M0,0 L110,-10 L110,6 Z', fill: '#C9D3DC', stroke: SC_INK, 'stroke-width': 3 }, b); E('circle', { cx: -26, cy: sd * 14, r: 20, fill: 'none', stroke: '#E8424F', 'stroke-width': 8 }, b); return b; };
  const bl1 = blade(1), bl2 = blade(-1);
  const page = engPaper(scis, 180, 220, { title: 'ACT 3' }); tr(page, 200, 0);
  const folio = engBook(d.fg, 'FIRST\nFOLIO\n1623', '#5A2E1E');
  const c36 = pill('36 plays · half never printed before', { size: 30 });

  /* genres */
  const G4 = [['COMEDY', 'confusion → harmony, usually a marriage', '#FFD23F'], ['TRAGEDY', 'a high-status hero, a fatal flaw (hamartia)', '#5B8DEF'],
    ['HISTORY', 'English kings and their wars', '#E8424F'], ['ROMANCE', 'e.g. The Tempest: forgiveness, reunion', '#56D69B']];
  const gcards = G4.map(([name, def, col]) => {
    const g = G(d.fg);
    E('rect', { x: -260, y: -58, width: 520, height: 116, rx: 18, fill: 'rgba(14,24,40,0.94)', stroke: col, 'stroke-width': 4 }, g);
    E('rect', { x: -260, y: -58, width: 16, height: 116, rx: 8, fill: col }, g);
    T(g, -226, -10, name, { size: 38, weight: 800, fill: col });
    T(g, -226, 34, def, { size: 25, weight: 700, fill: '#FFFFFF', font: FB });
    return g;
  });
  const masks = engMasks(d.fg, 0.55);
  const cMess = pill('COMEDY = mess → order', { size: 34, stroke: '#FFD23F', color: '#FFE6A8' });
  const rating = osRating(d.fg);

  /* shots */
  d.shot(0, { set: 'lib', cast: { will: { x: 300, y: 410, s: 0.95, mood: 'smug' }, mei: { x: 950, y: 520, s: 0.9, mood: 'deadpan' } } })
    .shot(at('born') - 0.05, { set: 'lib', cast: { will: { x: 170, y: 520, s: 0.75, mood: 'smug' }, mei: { x: 1060, y: 580, s: 0.75, mood: 'deadpan' } } })
    .shot(at('nib') - 0.05, { set: 'lib', cast: { nib: { x: 220, y: 450, s: 0.95, mood: 'smug' }, will: { x: 1050, y: 470, s: 0.8, mood: 'neutral' } } })
    .shot(at('kings') - 0.05, { set: 'lib', cast: { will: { x: 1070, y: 470, s: 0.75, mood: 'happy' } } })
    .shot(at('revels') - 0.05, { set: 'lib', cast: { nib: { x: 220, y: 450, s: 0.95, mood: 'smug' }, will: { x: 1050, y: 470, s: 0.8, mood: 'annoyed' } } })
    .shot(at('folio') - 0.05, { set: 'lib', cast: { will: { x: 220, y: 440, s: 0.95, mood: 'neutral' } } })
    .shot(at('comedy') - 0.05, { set: 'lib', cast: { nib: { x: 150, y: 470, s: 0.85, mood: 'smug' }, mei: { x: 1090, y: 560, s: 0.72, mood: 'neutral' } } })
    .shot(at('thcomedy') - 0.05, { conf: 'mei', cast: { mei: { x: 330, y: 430, s: 1.35, mood: 'smug' } } })
    .shot(at('still') - 0.05, { set: 'lib', cam: [1, 1.1, 300, 420], cast: { mei: { x: 900, y: 520, s: 1.0, mood: 'deadpan' }, will: { x: 300, y: 420, s: 1.0, mood: 'sad' } } });
  d.lower('nib', at('nib') + 0.1, 3.4);
  d.mood('mei', at('gloves'), 'deadpan').mood('will', at('gloves'), 'annoyed').mood('will', at('married'), 'neutral');
  d.mood('will', at('business'), 'annoyed').look('will', at('business'), -1).look('will', at('crow'), null);
  d.mood('will', mid('crow', 0.55), 'sad').mood('will', at('kings'), 'happy').mood('will', at('revels'), 'annoyed').mood('will', mid('revels', 0.72), 'sad');
  d.mood('will', at('folio'), 'neutral').mood('will', mid('folio', 0.7), 'smug');
  d.mood('mei', mid('thcomedy', 0.6), 'happy');
  d.x('will', mid('revels', 0.72), { glow: 0.6 }).x('will', at('folio'), { glow: 0 });

  d.pop(glove, mid('born', 0.75), end('gloves') + 0.2, 600, 470);
  d.pop(kids, mid('married', 0.3), mid('married', 0.62), 420, 520);
  d.pop(lost, at('lost') + 0.1, end('business') + 0.2, 460, 520, 1, -3);
  d.pop(crow, mid('crow', 0.45), end('crow') + 0.2, 760, 520);
  d.pop(patron, mid('nib', 0.55), end('nib') + 0.3, 700, 300);
  d.pop(kings, at('kings') + 0.05, end('kings') + 0.3, 560, 360);
  d.pop(revels, mid('revels', 0.45), end('revels') + 0.25, 640, 290, 0.9);
  d.pop(revC, mid('revels', 0.2), mid('revels', 0.68), 640, 470);
  d.pop(scis, mid('revels', 0.7), end('revels') + 0.25, 520, 490);
  d.pop(folio, mid('folio', 0.55), end('folio') + 0.3, 700, 470);
  d.pop(c36, mid('folio', 0.7), end('folio') + 0.3, 700, 650);
  gcards.forEach((c, i) => d.pop(c, i < 2 ? at(['comedy', 'tragedy'][i]) + 0.1 : mid('history', i === 2 ? 0.02 : 0.35), end('history') + 0.6, 680, 170 + i * 130));
  d.pop(masks, mid('comedy', 0.3), end('history') + 0.6, 1080, 300);
  d.pop(cMess, mid('thcomedy', 0.45), end('thcomedy') + 0.2, 820, 300);

  return t => {
    d.upd(t);
    // timeline: shown from "born" to the end of "folio"; each dot appears on its line
    const tv = win(t, at('born'), end('folio') + 0.3, 0.3) * (t >= at('nib') - 0.05 && t < at('folio') - 0.05 ? 0 : 1);
    op(tlp, tv); tr(tlp, 600, 190);
    tl.set(0.25 * P(t, mid('married', 0.05), 0.6) + 0.25 * P(t, mid('crow', 0.05), 0.6) + 0.5 * P(t, mid('folio', 0.1), 1.4, linear));
    op(lostB, P(t, mid('married', 0.65), 0.3, linear));
    // the scissors snip
    const sn = Math.abs(Math.sin(t * 9)) * 18;
    tr(bl1, 0, 0, 1, -sn); tr(bl2, 0, 0, 1, sn);
    // the King's Men arrow
    kArrow.set(P(t, mid('kings', 0.55), 0.5, ease));
    // still one star
    const rv = win(t, mid('still', 0.1), S.D + 1, 0.25);
    rating.set(1, rv); tr(rating, 1030, 74);
  };
});

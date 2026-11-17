/* Ep 2, Scene 2: Plot & foils — Unities of time (~4 hours) and place (1 island) -> Milan backstory ("my library /
   Was dukedom large enough") + Antonio, Alonso, Gonzalo, Miranda -> 5 acts (Storm, Schemes, Spells, Show, Set free)
   & 3 plot strands -> SAGA-F royals -> Foils: AIR-iel vs CLAY-iban, Ferdinand vs Caliban carrying logs. */
scene('plot', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 30, fill: o.fill || 'rgba(14,24,40,0.92)', stroke: o.stroke || ENG.gold, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(8); });
  d.add('isl', tmpIsland(d.bg), (t, g) => g.upd(t, 0));

  const mei = d.who('mei'), mrh = d.who('mrh'), nib = d.who('nib');
  const pros = d.who('prospero'), mir = d.who('miranda'), ari = d.who('ariel'), cal = d.who('caliban');

  /* board: unities */
  const bd = G(d.bg);
  T(bd, 660, 185, 'CLASSICAL UNITIES', { size: 40, weight: 800, anchor: 'middle', fill: '#2E7DD8' });
  T(bd, 660, 265, 'TIME: ≈ 4 hours (2 p.m. → 6 p.m.)', { size: 34, weight: 800, anchor: 'middle', fill: '#1E9E5A' });
  T(bd, 660, 340, 'PLACE: 1 island', { size: 34, weight: 800, anchor: 'middle', fill: '#C62828' });

  const qLib = engQuote(d.fg, { text: 'Me, poor man, my library / Was dukedom large enough', who: 'Prospero', where: 'The Tempest, Act 1 Scene 2', w: 720, size: 36, hl: ['library', 'dukedom'] });
  const cUsurp = engCard(d.fg, '**12 years ago:** Brother **Antonio** + **King Alonso** usurp Milan · Kind **Gonzalo** packs food & magic books', { w: 800, size: 28, stroke: ENG.gold });

  /* 5 acts strip */
  const acts5 = G(d.fg);
  [['1', 'STORM'], ['2', 'SCHEMES'], ['3', 'SPELLS'], ['4', 'SHOW'], ['5', 'SET FREE']].forEach(([n, lbl], i) => {
    const bx = G(acts5); tr(bx, (i - 2) * 205, 0);
    E('rect', { x: -92, y: -56, width: 184, height: 112, rx: 16, fill: 'rgba(14,24,40,0.95)', stroke: ENG.rose, 'stroke-width': 3.5 }, bx);
    T(bx, 0, -10, 'ACT ' + n, { size: 24, weight: 800, anchor: 'middle', fill: ENG.gold, font: FB });
    T(bx, 0, 32, lbl, { size: 30, weight: 800, anchor: 'middle', fill: '#FFFFFF' });
  });

  const st1 = engCard(d.fg, '1. **Lovers:** Ferdinand & Miranda · 2. **Court plot:** Antonio & Sebastian vs Alonso', { w: 800, size: 28, stroke: '#5AB4E0' });
  const st2 = engCard(d.fg, '3. **Comic parody:** Caliban + **Stephano** (drunken butler) + **Trinculo** (jester) distracted by shiny clothes!', { w: 820, size: 28, stroke: '#56D69B' });

  const saga = pill('S · A · G · A — F   (Sebastian · Alonso · Gonzalo · Antonio · Ferdinand)', { size: 28, stroke: ENG.gold, color: '#FFE6A8' });

  const tFoil = engTech(d.fg, 'FOIL', { kind: 'structure', def: 'contrasting characters who highlight each other', size: 38 });
  const cAirClay = engCard(d.fg, '**AIR-iel** (air, swift, obedient)   ↔   **CLAY-iban** (earth, rooted, rebellious)', { w: 780, size: 30, stroke: '#7FD3FF' });
  const cLogs = engCard(d.fg, '**Carrying logs:** Ferdinand serves gladly for **love**  ↔  Caliban curses forced **slavery**', { w: 800, size: 28, stroke: ENG.rose });

  d.shot(0, { set: 'room', cast: { mrh: { x: 210, y: 480, s: 1.0, mood: 'neutral', mug: 1 }, mei: { x: 1020, y: 520, s: 0.95, mood: 'annoyed' } } })
    .shot(at('backstory') - 0.05, { set: 'isl', cast: { prospero: { x: 220, y: 460, s: 0.95, mood: 'sad' }, mei: { x: 1020, y: 520, s: 0.9, mood: 'deadpan' } } })
    .shot(at('boat') - 0.05, { set: 'isl', cast: { miranda: { x: 250, y: 490, s: 1.0, mood: 'sad' }, prospero: { x: 980, y: 460, s: 0.9, mood: 'neutral' } } })
    .shot(at('fiveacts') - 0.05, { set: 'room', cast: { nib: { x: 150, y: 550, s: 0.78, mood: 'smug' }, mrh: { x: 1070, y: 530, s: 0.82, mood: 'neutral' } } })
    .shot(at('comic') - 0.05, { set: 'isl', cast: { ariel: { x: 200, y: 410, s: 0.92, mood: 'happy' }, mei: { x: 1030, y: 520, s: 0.9, mood: 'smug' } } })
    .shot(at('foils') - 0.05, { set: 'isl', cast: { nib: { x: 160, y: 530, s: 0.78, mood: 'smug' }, ariel: { x: 420, y: 390, s: 0.82, mood: 'happy' }, caliban: { x: 980, y: 490, s: 0.9, mood: 'annoyed' } } })
    .shot(at('logs') - 0.05, { set: 'isl', cast: { miranda: { x: 240, y: 490, s: 0.98, mood: 'happy' }, caliban: { x: 940, y: 490, s: 0.98, mood: 'annoyed' } } });

  d.lower(['MIRANDA', "Prospero's daughter, 15. Has met two men total."], at('boat') + 0.1, 3.2);
  d.mood('prospero', at('usurp'), 'annoyed');

  d.pop(qLib, mid('backstory', 0.25), end('usurp') + 0.2, 620, 220);
  d.pop(cUsurp, at('usurp') + 0.08, end('boat') + 0.25, 620, 440);

  d.pop(acts5, at('fiveacts') + 0.08, end('strands') + 0.2, 600, 195);
  d.pop(st1, at('strands') + 0.08, end('strands') + 0.25, 600, 390);
  d.pop(st2, at('comic') + 0.08, end('saga') + 0.2, 610, 230);
  d.pop(saga, at('saga') + 0.08, end('saga') + 0.25, 610, 415);

  d.pop(tFoil, at('foils') + 0.06, end('foils') + 0.25, 660, 165);
  d.pop(cAirClay, mid('foils', 0.35), end('foils') + 0.25, 660, 340);
  d.pop(cLogs, at('logs') + 0.08, end('unpaid') + 0.3, 600, 220);

  return t => {
    const sh = d.upd(t);
    op(bd, sh.spec.set === 'room' && t < at('fiveacts') - 0.05 ? 1 : 0);
    qLib.mark(-1, P(t, mid('backstory', 0.6), 0.45));
  };
});

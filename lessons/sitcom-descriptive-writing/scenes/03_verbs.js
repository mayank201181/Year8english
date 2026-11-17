/* Scene 3: Sack the adjectives, hire a verb. Addie's 5-adjective pile gets crossed out -> specific nouns (mynah,
   rain tree, char kway teow) -> cutting verb + adverb ("ran quickly" -> "sprinted") -> trudged / stormed / slunk ->
   Tennyson's "The wrinkled sea beneath him crawls" -> connotations (slim / skinny / scrawny) -> thesaurus trap! */
scene('verbs', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 28, fill: o.fill || 'rgba(14,24,40,0.94)', stroke: o.stroke || ENG.sky, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('room', engClassroom(d.bg), (t, g) => { g.upd(t); g.setMugs(7); });
  const mei = d.who('mei'), mrh = d.who('mrh'), will = d.who('will'), nib = d.who('nib'), cam = d.who('cam'), adj = d.who('adj');

  const cPile = engCard(d.fg, '"The **very big, dark, old, scary, creepy** shophouse"', { w: 740, size: 30, stroke: C.bad, tab: 'ADJECTIVE PILE' });
  const pileX = strike(cPile, -330, 0, 330, C.bad);

  const cNouns = engCard(d.fg, 'bird → **mynah**   ·   tree → **rain tree**   ·   food → **char kway teow**', { w: 780, size: 28, stroke: C.good, icon: 'tick' });
  const cAdv = engCard(d.fg, '"ran **quickly**" ✗   →   "**sprinted**" / "**pounded**" ✓', { w: 720, size: 31, stroke: ENG.gold });
  const walks = [['TRUDGED', 'exhausted', '#5AB4E0'], ['STORMED', 'furious', '#F06A8A'], ['SLUNK', 'guilty', '#B58CFF']].map(([v, m, col]) => {
    const g = G(d.fg);
    E('rect', { x: -120, y: -48, width: 240, height: 96, rx: 16, fill: 'rgba(12,22,38,0.95)', stroke: col, 'stroke-width': 4 }, g);
    T(g, 0, -6, v, { size: 30, weight: 800, anchor: 'middle', fill: col });
    T(g, 0, 30, m, { size: 24, weight: 700, anchor: 'middle', fill: '#FFFFFF', font: FB });
    return g;
  });

  const qEag = engQuote(d.fg, { text: 'The wrinkled sea beneath him crawls;', who: 'Alfred, Lord Tennyson', where: "'The Eagle' (1851)", w: 700, size: 40, hl: ['wrinkled', 'crawls'] });
  const cCrawls = pill('"crawls" → makes a vast ocean seem tiny, slow & powerless!', { size: 27, stroke: ENG.sky });
  const cConn = engCard(d.fg, '**Connotations of "thin":**\n**slim** (admiring)  ·  **skinny** (neutral)  ·  **scrawny** (frail / neglected)', { w: 780, size: 27, stroke: '#B58CFF' });
  const cThes = engCard(d.fg, '"The **effulgent** sun irradiated the **crepuscular** firmament!"', { w: 760, size: 28, stroke: C.bad, icon: 'cross', tab: 'THESAURUS TRAP' });
  const stNo = engStamp(d.fg, 'UNREADABLE!', '#D32F2F');

  d.shot(0, { set: 'room', cast: { adj: { x: 220, y: 490, s: 1.0, mood: 'happy', jitter: 1 }, mrh: { x: 1020, y: 490, s: 0.95, mood: 'deadpan', mug: 1 } } })
    .shot(at('work') - 0.05, { set: 'room', cast: { nib: { x: 180, y: 490, s: 0.9, mood: 'smug' }, mei: { x: 1020, y: 510, s: 0.95, mood: 'happy' } } })
    .shot(at('adverb') - 0.05, { set: 'room', cast: { mrh: { x: 170, y: 500, s: 0.92, mood: 'neutral' }, cam: { x: 1030, y: 500, s: 0.9, mood: 'smug' } } })
    .shot(at('eagle') - 0.05, { set: 'room', cast: { will: { x: 160, y: 490, s: 0.85, mood: 'smug', glow: 0.5 }, mei: { x: 1040, y: 520, s: 0.9, mood: 'shock' } } })
    .shot(at('conn') - 0.05, { set: 'room', cast: { nib: { x: 170, y: 500, s: 0.88, mood: 'smug' }, adj: { x: 1020, y: 500, s: 0.95, mood: 'happy', jitter: 1 } } })
    .shot(at('trap') - 0.05, { set: 'room', cast: { mrh: { x: 240, y: 490, s: 1.0, mood: 'deadpan', mug: 1 }, adj: { x: 960, y: 500, s: 0.95, mood: 'sad', jitter: 0.1 } } });

  d.mood('adj', at('dilute'), 'shock').mood('mei', at('crawls'), 'happy');

  d.pop(cPile, at('pile') + 0.08, end('dilute') + 0.2, 600, 240);
  d.pop(cNouns, at('nouns') + 0.08, end('nouns') + 0.25, 600, 260);
  d.pop(cAdv, at('adverb') + 0.08, end('adverb') + 0.25, 600, 250);
  walks.forEach((w, i) => d.pop(w, mid('walk', 0.2 + i * 0.22), end('walk') + 0.25, 340 + i * 260, 270));
  d.pop(qEag, at('eagle') + 0.05, end('crawls') + 0.25, 600, 230);
  d.pop(cCrawls, at('crawls') + 0.08, end('crawls') + 0.25, 600, 440);
  d.pop(cConn, at('conn') + 0.08, end('conn') + 0.25, 600, 260);
  d.pop(cThes, at('thes') + 0.08, end('trap') + 0.25, 600, 235);
  d.pop(stNo, at('trap') + 0.08, end('trap') + 0.25, 600, 395, 0.84);

  return t => {
    d.upd(t);
    pileX.set(P(t, at('dilute') + 0.1, 0.45, ease));
    qEag.mark(1, P(t, at('crawls'), 0.4));
    qEag.mark(0, P(t, mid('crawls', 0.35), 0.4));
  };
});

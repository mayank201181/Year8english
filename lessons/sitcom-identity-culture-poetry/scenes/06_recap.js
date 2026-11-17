/* Scene 6: Save yourself some marks (Recap). Hawker table! Memory hooks (PLACE, D-C-E-L, Many Musicians Compose, PEEL)
   -> 6 exam traps -> Mei awards 4.5 stars ("Ah Ma's kopi gets five, lah.") -> Will politely orders kopi-O kosong! */
scene('recap', S => {
  const { at, end, mid } = S;
  const d = engDirector(S);
  const pill = (text, o) => { o = o || {}; return chip(d.fg, text, { size: o.size || 27, fill: o.fill || 'rgba(20,14,42,0.94)', stroke: o.stroke || ENG.violet, sw: 3, color: o.color || '#FFFFFF' }); };

  d.add('hawker', idcHawker(d.bg));
  const mei = d.who('mei'), mrh = d.who('mrh'), will = d.who('will'), nib = d.who('nib'), kev = d.who('kevin'), lexi = d.who('lexi'), suit = d.who('suitcase');

  const hooks = ['P · L · A · C · E', 'D · C · E · L (Dogs Chase Every Lizard)', 'Many Musicians Compose', 'Integrated PEEL'].map(s => pill(s, { stroke: '#FFE45C', color: '#FFE6A8' }));
  const TRAPS = [
    ['t1', 'TRAP 1', 'Never call **dialect** or **Creole spelling** "bad grammar" — it is a deliberate voice choice!'],
    ['t2', 'TRAP 2', 'Don\'t bolt on poet biography! Use **context** to explain a choice inside the poem.'],
    ['t3', 'TRAP 3', 'Write **"the speaker"**, not automatically "the poet", and embed **short** phrases.'],
    ['t4', 'TRAP 4', 'Never write a block comparison: **integrate** both poems with *whereas* and *similarly*.'],
    ['t5', 'TRAP 5', 'Watch the **ending**: some claim pride, while others stay **"of no fixed nationality"**.'],
    ['t6', 'TRAP 6', 'Avoid cultural **stereotypes** — analyse *this* speaker and *this* concrete symbol!'],
  ].map(([id, tab, txt]) => [id, engCard(d.fg, txt, { w: 680, size: 31, tab, tabCol: '#6D28D9', stroke: ENG.violet, boldFill: '#FFE45C' })]);

  const rev = engReview(d.fg, { stars: 4.5, text: 'Identity & Culture Poetry: 4.5 stars. Ah Ma\'s kopi gets 5, lah.', by: 'Mei, Queenstown', w: 530 });

  d.shot(0, { set: 'hawker', cast: { mei: { x: 250, y: 520, s: 1.08, mood: 'happy' } } })
    .shot(at('t1') - 0.04, { conf: 'lexi', cast: { lexi: { x: 260, y: 430, s: 1.15, mood: 'happy' } } })
    .shot(at('t2') - 0.04, { conf: 'nib', cast: { nib: { x: 260, y: 420, s: 1.15, mood: 'smug' } } })
    .shot(at('t3') - 0.04, { conf: 'kevin', cast: { kevin: { x: 260, y: 440, s: 1.15, mood: 'happy' } } })
    .shot(at('t4') - 0.04, { conf: 'mrh', cast: { mrh: { x: 260, y: 430, s: 1.18, mood: 'deadpan', mug: 1 } } })
    .shot(at('t5') - 0.04, { conf: 'suitcase', cast: { suitcase: { x: 260, y: 430, s: 1.12, mood: 'neutral' } } })
    .shot(at('t6') - 0.04, { conf: 'will', cast: { will: 	{ x: 260, y: 410, s: 1.12, mood: 'smug' } } })
    .shot(at('rev') - 0.05, { set: 'hawker', cast: { mei: { x: 280, y: 520, s: 1.1, mood: 'happy', phone: 1 }, will: { x: 920, y: 440, s: 0.96, mood: 'happy', glow: 0.6 } } });

  hooks.forEach((c, i) => d.pop(c, mid('mnem', 0.08 + i * 0.2), end('mnem') + 0.15, 760, 185 + i * 92));
  TRAPS.forEach(([id, cardEl]) => d.pop(cardEl, at(id) + 0.04, end(id) + 0.15, 790, 380));
  d.pop(rev, at('rev') + 0.05, S.D + 1, 600, 260);

  return t => {
    d.upd(t);
    if (t >= at('rev')) rev.set(4.5 * P(t, at('rev'), 0.6, ease));
  };
});

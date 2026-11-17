/* Ep 3, Scene 7: Quick-fire quiz + library Shelf B haunting turf-war stinger (The Ghost vs Will). */
scene('quiz', S => {
  const { at } = S;
  const stg = G(S.root);
  const panel = G(stg);
  E('rect', { x: -340, y: -175, width: 680, height: 350, rx: 24, fill: 'rgba(14,24,40,0.96)', stroke: '#6FE3E8', 'stroke-width': 4 }, panel);
  T(panel, 0, -112, 'LIBRARY HAUNTING ROTA', { size: 28, weight: 800, anchor: 'middle', fill: '#6FE3E8', ls: 2 });
  T(panel, 0, -28, 'SHELF A: Tragedies — Will', { size: 30, weight: 700, anchor: 'middle', fill: '#FFFFFF' });
  T(panel, 0, 28, 'SHELF B: Sonnets — DISPUTED!', { size: 32, weight: 800, anchor: 'middle', fill: ENG.rose });
  const sub = T(panel, 0, 104, '“I played him in 1600, you know!” — Will', { size: 26, weight: 700, anchor: 'middle', fill: ENG.gold, font: FB });
  const badge = hamRating(stg);

  return engQuizScene(S, {
    cast,
    accent: ENG.rose,
    extra: t => {
      if (stg.parentNode.lastChild !== stg) stg.parentNode.appendChild(stg);
      const on = t >= at('stay') - 0.05;
      op(stg, on ? 1 : 0);
      if (!on) return;
      engPop(panel, t, at('stay'), 760, 400);
      op(sub, P(t, at('mine'), 0.3, linear));
      badge.set(4, 1); tr(badge, 1030, 74);
    },
  });
});

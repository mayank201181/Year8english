/* Ep 4, Scene 7: Quick-fire quiz + WhatsApp admin stinger (Mei removes Tybalt from the group chat). */
scene('quiz', S => {
  const { at } = S;
  const stg = G(S.root);
  const panel = G(stg);
  E('rect', { x: -340, y: -175, width: 680, height: 350, rx: 24, fill: 'rgba(14,24,40,0.96)', stroke: '#56D69B', 'stroke-width': 4 }, panel);
  T(panel, 0, -112, 'YEAR 8 VERONA GROUP CHAT', { size: 28, weight: 800, anchor: 'middle', fill: '#56D69B', ls: 2 });
  E('rect', { x: -290, y: -56, width: 580, height: 84, rx: 16, fill: 'rgba(255,96,112,0.18)', stroke: C.bad, 'stroke-width': 3 }, panel);
  T(panel, 0, -4, 'Mei removed Tybalt ("Prince of Cats")', { size: 28, weight: 800, anchor: 'middle', fill: '#FFB3BA' });
  const sub = T(panel, 0, 96, '“Wisely and slow.” — Group Admin Mei', { size: 28, weight: 700, anchor: 'middle', fill: ENG.gold, font: FB });
  const badge = rjRating(stg);

  return engQuizScene(S, {
    cast,
    accent: ENG.rose,
    extra: t => {
      if (stg.parentNode.lastChild !== stg) stg.parentNode.appendChild(stg);
      const on = t >= at('kick') - 0.05;
      op(stg, on ? 1 : 0);
      if (!on) return;
      engPop(panel, t, at('kick'), 760, 400);
      op(sub, P(t, at('admin'), 0.3, linear));
      badge.set(4, 1); tr(badge, 1030, 74);
    },
  });
});

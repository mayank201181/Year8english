/* Ep 2, Scene 7: Quick-fire quiz + curry-puff freedom stinger (Ariel & Mei). */
scene('quiz', S => {
  const { at, mid } = S;
  const stg = G(S.root);
  const panel = G(stg);
  E('rect', { x: -340, y: -175, width: 680, height: 350, rx: 24, fill: 'rgba(14,24,40,0.96)', stroke: ENG.gold, 'stroke-width': 4 }, panel);
  T(panel, 0, -112, "ARIEL'S LIBERTY MENU", { size: 28, weight: 800, anchor: 'middle', fill: ENG.gold, ls: 2 });
  // Golden curry puff illustration
  const puff = G(panel); tr(puff, 0, -10);
  E('path', { d: 'M-95,36 Q-90,-52 0,-56 Q90,-52 95,36 Z', fill: '#E8A848', stroke: '#8C5818', 'stroke-width': 5 }, puff);
  E('path', { d: 'M-92,34 Q-65,18 -45,34 Q-20,18 0,34 Q20,18 45,34 Q65,18 92,34', fill: 'none', stroke: '#F7D288', 'stroke-width': 5 }, puff);
  const guard = T(panel, 0, 108, 'MEI: Hands off the curry puff.', { size: 30, weight: 800, anchor: 'middle', fill: ENG.rose });
  const badge = tmpRating(stg);

  return engQuizScene(S, {
    cast,
    accent: ENG.rose,
    extra: t => {
      if (stg.parentNode.lastChild !== stg) stg.parentNode.appendChild(stg);
      const on = t >= at('puff') - 0.05;
      op(stg, on ? 1 : 0);
      if (!on) return;
      engPop(panel, t, at('puff'), 760, 400);
      op(guard, P(t, at('share'), 0.3, linear));
      badge.set(4, 1); tr(badge, 1030, 74);
    },
  });
});

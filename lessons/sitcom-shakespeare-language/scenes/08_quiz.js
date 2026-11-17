/* Scene 8: Quick-fire quiz + stinger (Will asks for five stars; Kevin gives him five). */
scene('quiz', S => {
  const { at, mid } = S;
  const stg = G(S.root);
  const panel = G(stg);
  E('rect', { x: -340, y: -180, width: 680, height: 360, rx: 24, fill: 'rgba(14,24,40,0.96)', stroke: ENG.gold, 'stroke-width': 4 }, panel);
  T(panel, 0, -118, "KEVIN'S VERDICT", { size: 28, weight: 800, anchor: 'middle', fill: ENG.gold, ls: 2 });
  const st = engStars(panel, { size: 54 }); tr(st, 0, -34);
  const msg = T(panel, 0, 56, 'Four stars from Mei...', { size: 32, weight: 700, anchor: 'middle', fill: '#FFFFFF' });
  const sub = T(panel, 0, 114, '“I’d give him five.” — Kevin, Comma', { size: 26, weight: 700, anchor: 'middle', fill: '#B58CFF', font: FB });
  const badge = osRating(stg);

  const base = engQuizScene(S, {
    accent: ENG.rose,
    extra: t => {
      // keep stg above engQuizScene's layers
      if (stg.parentNode.lastChild !== stg) stg.parentNode.appendChild(stg);
      const on = t >= at('five') - 0.05;
      op(stg, on ? 1 : 0);
      if (!on) return;
      engPop(panel, t, at('five'), 760, 400);
      const fifth = P(t, mid('kevin', 0.2), 0.5, linear);
      st.set(4 + fifth);
      setText(msg, fifth > 0.1 ? '★★★★★  Five stars (from Kevin)!' : 'Four stars from Mei... five?');
      op(sub, P(t, at('kevin'), 0.35, linear));
      badge.set(4, 1); tr(badge, 1030, 74);
    },
  });
  return base;
});

/* Scene 7: Quick-fire quiz (Series Finale!). Uses engQuizScene with guest cast support and sky accent. */
scene('quiz', S => {
  const { at, end } = S;
  const upd = engQuizScene(S, { cast, accent: ENG.sky });
  const layer = G(S.root);
  const b1 = engBubble(layer, "All the school's a stage!", { size: 28, tail: 'left' });
  const b2 = engBubble(layer, 'Mug 23 — TO TEA OR NOT TO TEA!', { size: 28, tail: 'left' });
  op(b1, 0); op(b2, 0);
  return t => {
    upd(t);
    engOut(b1, t, at('st1') + 0.05, end('st1') + 0.2, 560, 250, 1);
    engOut(b2, t, at('st2') + 0.05, S.D + 1, 600, 250, 1);
  };
});

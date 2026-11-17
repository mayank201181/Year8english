/* Scene 7: Quick-fire quiz. Five questions with 4-second thinking rings, plus Will & Clapper's bear stinger. */
scene('quiz', S => {
  const { at } = S;
  const ex = G(S.root);
  const stamp = engStamp(ex, 'CUT! 🎬', '#E2B33C'); op(stamp, 0);
  const base = engQuizScene(S, {
    cast,
    accent: ENG.rose,
    extra: t => {
      if (t >= at('roar') + 0.2) {
        stamp.set(P(t, at('roar') + 0.2, 0.4, linear));
        tr(stamp, 760, 210, 0.85);
      } else op(stamp, 0);
    },
  });
  return base;
});

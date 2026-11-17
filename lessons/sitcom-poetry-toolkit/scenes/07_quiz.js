/* Scene 7: Quick-fire quiz. Five questions with 4-second thinking rings, plus Simile & Metaphor's star stinger! */
scene('quiz', S => {
  const { at } = S;
  const ex = G(S.root);
  const st = engStamp(ex, 'NOT TWINS! ★', '#B58CFF'); op(st, 0);
  const base = engQuizScene(S, {
    cast,
    accent: ENG.violet,
    extra: t => {
      if (t >= at('st2') + 0.1) {
        st.set(P(t, at('st2') + 0.1, 0.4, linear));
        tr(st, 760, 220, 0.82);
      } else op(st, 0);
    },
  });
  return base;
});

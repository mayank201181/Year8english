/* Scene 7: Quick-fire quiz. Five questions with 4-second thinking rings, plus Kevin's dramatic pause stinger! */
scene('quiz', S => {
  const { at, end } = S;
  const ex = G(S.root);
  const st = engStamp(ex, 'STRATEGIC PAUSE ★', '#B58CFF'); op(st, 0);
  const base = engQuizScene(S, {
    cast,
    accent: ENG.rose,
    extra: t => {
      if (t >= at('st2') - 0.05) {
        st.set(P(t, at('st2'), 0.4, linear));
        tr(st, 760, 220, 0.8);
      } else op(st, 0);
    },
  });
  return base;
});

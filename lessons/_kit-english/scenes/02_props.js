/* Kit test: the English-on-screen props. */
scene('props', S => {
  const { at, end, mid } = S, root = S.root;
  E('rect', { x: 0, y: 0, width: 1200, height: 750, fill: '#22303E' }, root);
  const ids = ['quote', 'tech', 'peel', 'scan', 'review', 'things'];
  const grp = ids.map(() => G(root));
  const q = engQuote(grp[0], { text: 'But soft, what light through yonder window breaks? It is the east, and Juliet is the sun.', who: 'Romeo', where: 'Romeo and Juliet, Act 2 Scene 2', hl: ['light', 'sun'] });
  tr(q, 600, 380);
  const techs = [['SOLILOQUY', 'drama', 'alone on stage, thinking aloud'], ['METAPHOR', 'language'], ['BLANK VERSE', 'form', 'unrhymed iambic pentameter'], ['CAESURA', 'punct'], ['CONTEXT', 'context'], ['RHYMING COUPLET', 'structure']]
    .map(([l, k, d], i) => { const c = engTech(grp[1], l, { kind: k, def: d }); tr(c, i % 2 ? 860 : 340, 220 + Math.floor(i / 2) * 180); return c; });
  const peel = engPeel(grp[2], ['Shakespeare presents Juliet as **light** in Romeo\'s dark world.', '"Juliet is the **sun**."', 'The metaphor suggests she is the centre of his universe: everything turns around her.', 'This links to the theme of love as overwhelming and dangerous.'], { title: 'PEEL' });
  tr(peel, 600, 110);
  const scan = engScan(grp[3], ['But', 'soft,', 'what', 'light', 'through', 'yon', 'der', 'win', 'dow', 'breaks?']);
  tr(scan, 600, 330);
  const scan2 = engScan(grp[3], ['To', 'be,', 'or', 'not', 'to', 'be,', 'that', 'is', 'the', 'ques', 'tion'], { stress: 'u/u/u/u/u/u', size: 34 });
  tr(scan2, 600, 560);
  const rev = engReview(grp[4], { stars: 1, text: 'Boring. Nobody talks like that.', by: 'Mei, 12' }); tr(rev, 330, 260);
  const bub = engBubble(grp[4], 'Thou art late!', { tail: 'left' }); tr(bub, 860, 160);
  const st = engStamp(grp[4], 'FIRST RECORDED USE', '#D32F2F'); tr(st, 760, 360, 0.8);
  const cardT = engCard(grp[4], 'Shakespeare wrote in **Early Modern English**, not Old English.', { tab: 'TRAP 1', icon: 'cross' }); tr(cardT, 600, 590);
  const things = grp[5];
  tr(engBook(things, 'ROMEO\nAND\nJULIET', '#7A1E2E'), 140, 240);
  const scr = engScroll(things, 260, 160); tr(scr, 420, 240); T(scr.body, 0, 10, 'A PLAY TODAY', { size: 28, weight: 800, anchor: 'middle', fill: SC_INK });
  tr(engSkull(things), 680, 240);
  tr(engMasks(things), 930, 240);
  const mug = engMug(things); tr(mug, 140, 520);
  tr(engQuill(things), 360, 600);
  const ph = engPhone(things, 0.8); tr(ph, 600, 520); const pst = engStars(ph.screen, { size: 26 }); pst.set(2);
  const pap = engPaper(things, 300, 220, { title: 'ACT 1 SCENE 1' }); tr(pap, 940, 540);
  return t => {
    let k = 0; ids.forEach((id, i) => { if (t >= at(id) - 0.1) k = i; });
    grp.forEach((g, i) => op(g, i === k ? 1 : 0));
    q.set(P(t, at('quote'), 0.5)); q.mark(-1, P(t, mid('quote', 0.4), 0.6));
    techs.forEach((c, i) => c.set(P(t, at('tech') + i * 0.2, 0.5, linear)));
    peel.set((t - at('peel')) * 1.6);
    const sp = clamp((t - at('scan')) / 1.2); scan.set(sp); scan.marks(sp); scan.feet(sp); scan2.set(1); scan2.marks(1);
    scan.ball(t > at('scan') + 1.2 ? ((t - at('scan') - 1.2) * 6) % 10 : -1);
    rev.set(1 + clamp(t - at('review')) * 2); st.set(P(t, mid('review', 0.5), 0.4, linear));
    mug.upd(t);
  };
});

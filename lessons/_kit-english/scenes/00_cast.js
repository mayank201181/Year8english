/* Kit test: the five recurring characters in every mood (one mood per line); extras on in the second half. */
scene('cast', S => {
  const { at, mid } = S, root = S.root;
  const MOODS = ['neutral', 'happy', 'smug', 'annoyed', 'sad', 'shock', 'deadpan'];
  const K = ['mei', 'mrh', 'will', 'nib', 'kevin'];
  E('rect', { x: 0, y: 0, width: 1200, height: 750, fill: '#22303E' }, root);
  const people = K.map((k, i) => { const c = engCast(root, k); tr(c, 130 + i * 235, 400, 0.62); return c; });
  K.forEach((k, i) => T(root, 130 + i * 235, 650, k, { size: 28, anchor: 'middle', fill: '#FFFFFF' }));
  const lab = T(root, 600, 150, '', { size: 48, weight: 800, anchor: 'middle', fill: ENG.gold });
  const ext = T(root, 600, 700, 'extras: hand, phone, mug, quill + glow, ink, bag + sweat', { size: 24, anchor: 'middle', fill: C.muted, font: FB });
  const body = engMeiBody(root); tr(body, 1130, 730, 0.5);
  return t => {
    let k = 0; MOODS.forEach((m, i) => { if (t >= at(m) - 0.1) k = i; });
    const mood = MOODS[k], x = t > mid(mood, 0.5) ? 1 : 0;
    setText(lab, mood.toUpperCase());
    op(ext, x);
    people.forEach((c, i) => c.set({ t, mood, talk: i === k % 5 ? 0.5 + 0.5 * Math.sin(t * 20) : 0, look: Math.sin(t), hand: x, phone: x, mug: x, quill: x, glow: x, ink: x, bag: x, sweat: x }));
    body.pose(walkPose(t));
  };
});

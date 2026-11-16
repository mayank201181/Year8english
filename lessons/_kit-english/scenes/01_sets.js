/* Kit test: every set, one per line. */
scene('sets', S => {
  const { at } = S, root = S.root;
  const ids = ['classroom', 'library', 'hall', 'flat', 'globe', 'outside', 'title'];
  const sets = [engClassroom(root), engLibrary(root), engHall(root), engFlat(root), engGlobe(root), engGlobeOutside(root), engTitle(root, 'Episode 1: One Star')];
  return t => {
    let k = 0; ids.forEach((id, i) => { if (t >= at(id) - 0.1) k = i; });
    sets.forEach((s, i) => op(s, i === k ? 1 : 0));
    const s = sets[k];
    if (k === 0) { s.upd(t); s.setMugs(5); }
    else if (k === 1) s.upd(t, Math.sin(t) > 0 ? 1 : 0);
    else if (k === 2) { s.upd(t); s.curtain(0.5 + 0.5 * Math.sin(t)); s.spot(1, 600); }
    else if (k === 3) { s.upd(t); s.clock(19.5); }
    else if (k === 4) s.upd(t, 1);
    else if (k === 5) s.upd(t);
    else s.set(clamp((t - at('title')) / 2), t);
  };
});

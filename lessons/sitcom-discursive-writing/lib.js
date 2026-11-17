/* ON THE OTHER HAND (All the School's a Stage, Ep 12): guests and props for Discursive Writing.
   Bundled after lib.js, kit.js, sitcom.js and english.js. Every top-level helper starts with `dis`, except `cast`. */

ENG_TINT.onehand = ['#362810', '#6B4F1A'];
ENG_TINT.otherhand = ['#0F3034', '#1E6068'];

function cast(parent, kind, o) {
  o = o || {};
  const S = { s: o.s, mood: o.mood };
  if (kind === 'onehand' || kind === 'otherhand') {
    const left = kind === 'onehand';
    const col0 = left ? '#F7CA54' : '#3CC4BA', col1 = left ? '#B88414' : '#18726E';
    const cuff = left ? '#7A1E2E' : '#1E3A6A', trim = left ? '#FFE6A8' : '#CFEFFF';
    return scMake(parent, Object.assign(S, { seed: left ? 59 : 61, bob: 3.5, mood: o.mood || (left ? 'neutral' : 'smug'),
      draw: g => {
        const tilt = G(g); tr(tilt, 0, 0, 1, left ? -6 : 6);
        // brass scale saucer under cuff
        E('path', { d: 'M-104,116 Q0,148 104,116 Z', fill: '#E2B33C', stroke: SC_INK, 'stroke-width': 4 }, tilt);
        // velvet cuff
        E('rect', { x: -72, y: 66, width: 144, height: 54, rx: 14, fill: cuff, stroke: SC_INK, 'stroke-width': 4.5 }, tilt);
        E('rect', { x: -76, y: 60, width: 152, height: 14, rx: 7, fill: trim, stroke: SC_INK, 'stroke-width': 3 }, tilt);
        T(tilt, 0, 102, left ? 'ONE HAND' : 'OTHER HAND', { size: 18, weight: 800, anchor: 'middle', fill: trim, ls: 1 });
        // four gloved fingers + thumb + palm
        [-48, -16, 16, 48].forEach((x, i) => {
          const h = [78, 94, 90, 70][i];
          E('rect', { x: x - 15, y: -56 - h * 0.65, width: 30, height: h, rx: 15, fill: col0, stroke: SC_INK, 'stroke-width': 4 }, tilt);
        });
        const tx = left ? 72 : -72;
        E('rect', { x: tx - 16, y: -42, width: 32, height: 68, rx: 16, fill: col0, stroke: SC_INK, 'stroke-width': 4, transform: `rotate(${left ? 28 : -28} ${tx} 0)` }, tilt);
        E('rect', { x: -68, y: -62, width: 136, height: 128, rx: 38, fill: ball(col0, col1), stroke: SC_INK, 'stroke-width': 5 }, tilt);
      },
      face: { x: 0, y: -12, eye: 15, gap: 46, mouthW: 34, mouthY: 32, lidCol: left ? '#DFA82E' : '#269B94' } }));
  }
  return engCast(parent, kind, o);
}

function disRating(parent) {
  const g = G(parent);
  E('rect', { x: -150, y: -46, width: 300, height: 104, rx: 18, fill: 'rgba(14,24,40,0.92)', stroke: ENG.amber, 'stroke-width': 3 }, g);
  T(g, 0, -14, "MEI'S REVIEW", { size: 22, weight: 800, anchor: 'middle', fill: ENG.amber, ls: 2, font: FB });
  const st = engStars(g, { size: 40 }); tr(st, 0, 26);
  g.set = (n, p) => { op(g, p === undefined ? 1 : p); st.set(n); };
  g.set(1, 0);
  return g;
}

function disScales(parent) {
  const g = G(parent);
  // brass pillar & base
  E('ellipse', { cx: 0, cy: 138, rx: 95, ry: 20, fill: linGrad('#F2C94C', '#9C7214', true), stroke: SC_INK, 'stroke-width': 4 }, g);
  E('rect', { x: -11, y: -110, width: 22, height: 246, rx: 6, fill: linGrad('#F2C94C', '#9C7214', false), stroke: SC_INK, 'stroke-width': 4 }, g);
  const beam = G(g); tr(beam, 0, -98);
  E('rect', { x: -230, y: -8, width: 460, height: 16, rx: 8, fill: '#F2C94C', stroke: SC_INK, 'stroke-width': 4 }, beam);
  E('circle', { r: 16, fill: '#FFE45C', stroke: SC_INK, 'stroke-width': 4 }, G(g, { transform: 'translate(0 -98)' }));
  const pan = (x, col, label) => {
    const p = G(g);
    E('path', { d: 'M0,0 L-56,96 M0,0 L56,96', stroke: '#C9A13C', 'stroke-width': 3.5 }, p);
    E('path', { d: 'M-72,96 Q0,132 72,96 Z', fill: col, stroke: SC_INK, 'stroke-width': 4 }, p);
    const wt = G(p); tr(wt, 0, 72);
    E('rect', { x: -58, y: -28, width: 116, height: 48, rx: 10, fill: '#1A2436', stroke: col, 'stroke-width': 3 }, wt);
    const tx = T(wt, 0, 3, label, { size: 20, weight: 800, anchor: 'middle', fill: '#FFFFFF' });
    return { p, wt, tx, x };
  };
  const pL = pan(-210, '#F7CA54', 'FOR'), pR = pan(210, '#3CC4BA', 'AGAINST');
  g.set = (deg, lTxt, rTxt) => {
    const rad = (deg || 0) * Math.PI / 180;
    tr(beam, 0, -98, 1, deg || 0);
    [[pL, -210], [pR, 210]].forEach(([pn, x]) => {
      tr(pn.p, Math.cos(rad) * x, -98 + Math.sin(rad) * x);
    });
    if (lTxt !== undefined) setText(pL.tx, lTxt);
    if (rTxt !== undefined) setText(pR.tx, rTxt);
  };
  g.set(0, 'FOR', 'AGAINST');
  return g;
}
